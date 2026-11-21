"""
Model Training and Dataset Generation for Learned Regression Heuristics.
Collects ground-truth optimal costs h*(s) via Backward Dijkstra and trains
linear models (OLS, Ridge, NNLS) conforming to Russell & Norvig AIMA Ch. 3.
"""

import time
import math
import json
import os
import itertools
from typing import Dict, Tuple, List, Any, Optional
import numpy as np
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.metrics import r2_score, mean_absolute_error, root_mean_squared_error
from scipy.optimize import nnls

from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.benchmarks.optimal_solver import BackwardOptimalSolver
from sandboxes_puzzle.heuristics.features import PuzzleFeatureExtractor
from sandboxes_puzzle.heuristics.learned_regression import LearnedRegressionHeuristic


def generate_regression_dataset(
    num_rows: int = 4,
    max_samples: Optional[int] = None,
    seed: int = 42,
) -> Tuple[np.ndarray, np.ndarray, List[Tuple[int, ...]], List[str]]:
    """
    Generate dataset (X, y) where:
    - X is the feature matrix extracted from states
    - y is the exact ground truth optimal cost h*(s) computed by Backward Dijkstra
    """
    print(f"[*] Generating dataset for n={num_rows} rows...")
    t0 = time.perf_counter()
    solver = BackwardOptimalSolver(num_rows=num_rows)
    opt_costs = solver.compute_all_optimal_costs()
    t_opt = time.perf_counter() - t0
    print(f"[*] Backward Dijkstra finished in {t_opt:.3f}s for {len(opt_costs)} states.")

    feature_names = PuzzleFeatureExtractor.get_feature_names(num_rows=num_rows)

    # Exclude goal state from training (goal always has h=0)
    goal_tuple = tuple([0] * (2 * num_rows))
    state_tuples = [s for s in opt_costs.keys() if s != goal_tuple]

    if max_samples is not None and len(state_tuples) > max_samples:
        rng = np.random.default_rng(seed)
        selected_indices = rng.choice(len(state_tuples), size=max_samples, replace=False)
        state_tuples = [state_tuples[i] for i in selected_indices]

    print(f"[*] Extracting features for {len(state_tuples)} states...")
    t1 = time.perf_counter()
    X_list = []
    y_list = []

    for s_tup in state_tuples:
        feat = PuzzleFeatureExtractor.extract_from_int_tuple(s_tup, num_rows=num_rows)
        y = float(opt_costs[s_tup])
        X_list.append(feat)
        y_list.append(y)

    X = np.array(X_list, dtype=np.float64)
    y = np.array(y_list, dtype=np.float64)
    t_feat = time.perf_counter() - t1
    print(f"[*] Feature extraction completed in {t_feat:.3f}s. Shape: X={X.shape}, y={y.shape}")

    return X, y, state_tuples, feature_names


def train_and_evaluate_models(
    X: np.ndarray,
    y: np.ndarray,
    feature_names: List[str],
    num_rows: int = 4,
    test_size: float = 0.2,
    seed: int = 42,
) -> Dict[str, Any]:
    """
    Train Linear Regression (OLS), Ridge Regression, and Non-negative Least Squares (NNLS).
    Evaluates R2, MAE, RMSE, and Admissibility Rate.
    """
    n_samples = len(X)
    rng = np.random.default_rng(seed)
    indices = np.arange(n_samples)
    rng.shuffle(indices)

    split = int(n_samples * (1.0 - test_size))
    train_idx, test_idx = indices[:split], indices[split:]

    X_train, y_train = X[train_idx], y[train_idx]
    X_test, y_test = X[test_idx], y[test_idx]

    print(f"[*] Train set: {len(X_train)} samples, Test set: {len(X_test)} samples.")

    # Model 1: Ordinary Least Squares (OLS) without intercept (so h(0)=0 holds naturally)
    lr_no_intercept = LinearRegression(fit_intercept=False)
    lr_no_intercept.fit(X_train, y_train)

    # Model 2: OLS with intercept
    lr_with_intercept = LinearRegression(fit_intercept=True)
    lr_with_intercept.fit(X_train, y_train)

    # Model 3: Ridge Regularized Regression
    ridge = Ridge(alpha=1.0, fit_intercept=False)
    ridge.fit(X_train, y_train)

    # Model 4: Non-negative Least Squares (NNLS)
    w_nnls, _ = nnls(X_train, y_train)

    models = {
        "OLS_no_intercept": (lr_no_intercept.coef_, 0.0),
        "OLS_with_intercept": (lr_with_intercept.coef_, float(lr_with_intercept.intercept_)),
        "Ridge_L2": (ridge.coef_, 0.0),
        "NNLS_non_negative": (w_nnls, 0.0),
    }

    eval_results = {}

    for model_name, (weights, intercept) in models.items():
        y_pred_train = np.maximum(0.0, np.dot(X_train, weights) + intercept)
        y_pred_test = np.maximum(0.0, np.dot(X_test, weights) + intercept)

        r2_test = float(r2_score(y_test, y_pred_test))
        mae_test = float(mean_absolute_error(y_test, y_pred_test))
        rmse_test = float(root_mean_squared_error(y_test, y_pred_test))

        # Admissibility check: h(s) <= h*(s)
        # Fraction of test states where estimate <= true cost
        admissible_count = int(np.sum(y_pred_test <= y_test + 1e-5))
        admissibility_rate = float(admissible_count / len(y_test))

        # Underestimation margin: how close is it to true cost when admissible
        diff = y_test - y_pred_test
        mean_underestimation = float(np.mean(diff[diff >= 0])) if np.any(diff >= 0) else 0.0

        eval_results[model_name] = {
            "r2_score": round(r2_test, 4),
            "mae": round(mae_test, 3),
            "rmse": round(rmse_test, 3),
            "admissibility_rate": round(admissibility_rate, 4),
            "mean_underestimation": round(mean_underestimation, 3),
            "weights": weights.tolist(),
            "intercept": round(intercept, 4),
        }

    # Model selection: Pick OLS without intercept as default primary regression model
    selected_name = "OLS_no_intercept"
    selected_weights = models[selected_name][0]
    selected_intercept = models[selected_name][1]

    # Calculate safety scale factor for 100% strict admissibility on sample
    # alpha = min_i (y_i / y_pred_i)
    valid_mask = y_pred_test > 1e-4
    if np.any(valid_mask):
        ratios = y_test[valid_mask] / y_pred_test[valid_mask]
        strict_alpha = float(np.min(ratios))
    else:
        strict_alpha = 1.0

    eval_results["selected_model"] = selected_name
    eval_results["strict_admissibility_alpha"] = round(min(1.0, strict_alpha), 4)

    return eval_results


def run_full_training_pipeline(num_rows: int = 4, output_dir: Optional[str] = None) -> LearnedRegressionHeuristic:
    """
    Executes the training pipeline, prints statistical tables, and serializes weights to JSON.
    """
    if output_dir is None:
        output_dir = os.path.join(os.path.dirname(__file__), "data")
    os.makedirs(output_dir, exist_ok=True)

    X, y, state_tuples, feature_names = generate_regression_dataset(num_rows=num_rows)
    eval_results = train_and_evaluate_models(X, y, feature_names, num_rows=num_rows)

    print("\n" + "=" * 70)
    print(f" MACHINE LEARNING HEURISTIC EVALUATION RESULTS (n = {num_rows})")
    print("=" * 70)
    print(f"{'Model':<22} | {'R2 Score':<9} | {'MAE':<7} | {'RMSE':<7} | {'Admissibility %':<16}")
    print("-" * 70)
    for name in ["OLS_no_intercept", "OLS_with_intercept", "Ridge_L2", "NNLS_non_negative"]:
        m = eval_results[name]
        adm_pct = f"{m['admissibility_rate'] * 100:.1f}%"
        print(f"{name:<22} | {m['r2_score']:<9.4f} | {m['mae']:<7.3f} | {m['rmse']:<7.3f} | {adm_pct:<16}")
    print("=" * 70)
    print(f"Strict Admissibility Safety Factor (alpha): {eval_results['strict_alpha'] if 'strict_alpha' in eval_results else eval_results['strict_admissibility_alpha']}")
    print("=" * 70)

    # Save to file
    out_file = os.path.join(output_dir, f"learned_weights_n{num_rows}.json")
    sel = eval_results["selected_model"]
    payload = {
        "num_rows": num_rows,
        "selected_model": sel,
        "intercept": eval_results[sel]["intercept"],
        "weights": eval_results[sel]["weights"],
        "feature_names": feature_names,
        "strict_alpha": eval_results["strict_admissibility_alpha"],
        "metrics": {
            "r2_score": eval_results[sel]["r2_score"],
            "mae": eval_results[sel]["mae"],
            "rmse": eval_results[sel]["rmse"],
            "admissibility_rate": eval_results[sel]["admissibility_rate"],
        },
        "all_models": {k: v for k, v in eval_results.items() if k not in ("selected_model", "strict_admissibility_alpha")},
    }

    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2)

    print(f"[+] Successfully saved learned weights and metrics to: {out_file}")

    heuristic = LearnedRegressionHeuristic(
        weights=np.array(eval_results[sel]["weights"]),
        intercept=eval_results[sel]["intercept"],
        feature_names=feature_names,
        num_rows=num_rows,
    )

    return heuristic


if __name__ == "__main__":
    run_full_training_pipeline(num_rows=4)
