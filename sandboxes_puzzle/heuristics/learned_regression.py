"""
Learned Heuristic Functions using Linear Regression.
Implements h_reg(s) = max(0, w^T x(s)) and its admissible counterpart.
Conforms to the Russell & Norvig AIMA standard for learning heuristics from experience.
"""

from typing import Dict, Any, Optional, List
import json
import os
from pathlib import Path
import numpy as np

from .base import HeuristicFunction
from .features import PuzzleFeatureExtractor
from .combined import CombinedHeuristic
from sandboxes_puzzle.environment.state import PuzzleState


class LearnedRegressionHeuristic(HeuristicFunction):
    """
    Learned Heuristic Function h_reg(s) via Linear Regression.
    
    Formula:
        h_reg(s) = max(0.0, w_0 + sum_{j=1}^K w_j * x_j(s))
        
    Where:
        x(s) is the feature vector extracted by PuzzleFeatureExtractor.
        w are coefficients fitted via Linear Regression against optimal ground truth costs h*(s).
    """

    def __init__(
        self,
        weights: Optional[np.ndarray] = None,
        intercept: float = 0.0,
        feature_names: Optional[List[str]] = None,
        num_rows: int = 5,
        weights_path: Optional[str] = None,
    ):
        self._num_rows = num_rows
        self._intercept = intercept
        self._feature_names = feature_names or PuzzleFeatureExtractor.get_feature_names(num_rows)

        if weights_path is not None and os.path.exists(weights_path):
            self.load_weights_from_file(weights_path)
        elif weights is not None:
            self._weights = np.array(weights, dtype=np.float64)
        else:
            # Default analytical weights derived from relaxation / OLS baseline:
            # Setting f1 (row_weighted_sand) coefficient to 5.0 and other features small
            self._weights = np.zeros(len(self._feature_names), dtype=np.float64)
            # f1 is row_weighted_sand
            self._weights[1] = 5.0

    @property
    def name(self) -> str:
        return "h_learned_regression"

    @property
    def description(self) -> str:
        return f"Learned Linear Regression Heuristic ({len(self._weights)} features, rows={self._num_rows})"

    @property
    def weights(self) -> np.ndarray:
        return self._weights

    @property
    def intercept(self) -> float:
        return self._intercept

    @property
    def num_rows(self) -> int:
        return self._num_rows

    def __call__(self, state: PuzzleState) -> float:
        """
        Evaluate heuristic estimation h_reg(s) for the given state.
        Guaranteed h(s*) = 0 for the goal state.
        """
        if state.is_goal:
            return 0.0

        features = PuzzleFeatureExtractor.extract_features(state)
        # Handle dimension mismatch if state row count differs from model
        if len(features) != len(self._weights):
            features = PuzzleFeatureExtractor.extract_features(state)
            if len(features) < len(self._weights):
                feat_padded = np.zeros(len(self._weights), dtype=np.float64)
                feat_padded[:len(features)] = features
                features = feat_padded
            else:
                features = features[:len(self._weights)]

        h_val = float(np.dot(self._weights, features) + self._intercept)
        return max(0.0, round(h_val, 4))

    def evaluate_features(self, features: np.ndarray) -> float:
        """Evaluate directly on pre-extracted feature array."""
        h_val = float(np.dot(self._weights, features) + self._intercept)
        return max(0.0, round(h_val, 4))

    def save_weights_to_file(self, filepath: str) -> None:
        """Serialize model weights and metadata to JSON."""
        os.makedirs(os.path.dirname(os.path.abspath(filepath)), exist_ok=True)
        payload = {
            "num_rows": self._num_rows,
            "intercept": self._intercept,
            "weights": self._weights.tolist(),
            "feature_names": self._feature_names,
        }
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(payload, f, indent=2)

    def load_weights_from_file(self, filepath: str) -> None:
        """Deserialize model weights and metadata from JSON."""
        with open(filepath, "r", encoding="utf-8") as f:
            payload = json.load(f)
        self._num_rows = payload.get("num_rows", 5)
        self._intercept = float(payload.get("intercept", 0.0))
        self._weights = np.array(payload["weights"], dtype=np.float64)
        self._feature_names = payload.get("feature_names", PuzzleFeatureExtractor.get_feature_names(self._num_rows))


class AdmissibleLearnedHeuristic(HeuristicFunction):
    """
    Admissible Calibrated Variant of the Learned Heuristic.
    
    To strictly preserve A* optimality in all edge cases, this hybrid function
    bounds the regression prediction by the provably admissible relaxation heuristic h3(s):
        h_adm(s) = min(h_reg(s), h3(s))
        
    Or when parameterized with safety scaling factor alpha (0 < alpha <= 1.0):
        h_adm(s) = alpha * h_reg(s)
    """

    def __init__(
        self,
        base_regression: LearnedRegressionHeuristic,
        safety_scale: float = 1.0,
        enforce_h3_upper_bound: bool = True,
    ):
        self.base_regression = base_regression
        self.safety_scale = safety_scale
        self.enforce_h3_upper_bound = enforce_h3_upper_bound
        self._h3 = CombinedHeuristic()

    @property
    def name(self) -> str:
        return "h_admissible_regression"

    @property
    def description(self) -> str:
        return "Admissible Calibrated Regression Heuristic: min(alpha * h_reg(s), h3(s))"

    def __call__(self, state: PuzzleState) -> float:
        if state.is_goal:
            return 0.0

        val_reg = self.safety_scale * self.base_regression(state)
        if self.enforce_h3_upper_bound:
            val_h3 = self._h3(state)
            return min(val_reg, val_h3)
        return max(0.0, val_reg)
