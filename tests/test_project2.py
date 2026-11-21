"""
Unit tests for Project 2 components:
- Feature extraction (PuzzleFeatureExtractor)
- Learned Linear Regression Heuristic (LearnedRegressionHeuristic)
- Admissible Calibrated Heuristic (AdmissibleLearnedHeuristic)
- Effective Branching Factor calculations (b* Slide 41 vs AIMA)
- A* and RBFS search using learned heuristics
"""

import pytest
import numpy as np
import os
import tempfile

from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv
from sandboxes_puzzle.heuristics import (
    PuzzleFeatureExtractor,
    LearnedRegressionHeuristic,
    AdmissibleLearnedHeuristic,
    CombinedHeuristic,
)
from sandboxes_puzzle.algorithms.informed import AStarSearch, RecursiveBestFirstSearch
from sandboxes_puzzle.benchmarks.effective_branching import (
    compute_b_star_slide,
    compute_b_star_aima,
    EffectiveBranchingBenchmark,
)


class TestFeatureExtractor:
    """Verifies feature extraction logic."""

    def test_feature_dimensions(self):
        st4 = SandboxesEnv.get_professor_benchmark_state()
        feat4 = PuzzleFeatureExtractor.extract_features(st4)
        names4 = PuzzleFeatureExtractor.get_feature_names(num_rows=4)
        assert len(feat4) == len(names4)
        assert len(feat4) == 12 + 2 * 4  # 20 features

        st5 = PuzzleState(tuple((0.0, 0.0) for _ in range(5)))
        feat5 = PuzzleFeatureExtractor.extract_features(st5)
        names5 = PuzzleFeatureExtractor.get_feature_names(num_rows=5)
        assert len(feat5) == len(names5)
        assert len(feat5) == 12 + 2 * 5  # 22 features

    def test_feature_values(self):
        # Goal state has zero sand
        goal = PuzzleState(tuple((0.0, 0.0) for _ in range(4)))
        feat_goal = PuzzleFeatureExtractor.extract_features(goal)
        assert feat_goal[0] == 0.0  # total sand
        assert feat_goal[1] == 0.0  # row weighted sand

        # Benchmark state has total sand = 4.0
        bench = SandboxesEnv.get_professor_benchmark_state()
        feat_bench = PuzzleFeatureExtractor.extract_features(bench)
        assert feat_bench[0] == 4.0
        assert feat_bench[7] == 0.0  # half sand count
        assert feat_bench[8] == 4.0  # full sand count


class TestLearnedHeuristic:
    """Verifies learned linear regression heuristic behaviors."""

    def test_goal_state_is_zero(self):
        h = LearnedRegressionHeuristic(num_rows=4)
        goal = PuzzleState(tuple((0.0, 0.0) for _ in range(4)))
        assert h(goal) == 0.0

    def test_serialization(self):
        h = LearnedRegressionHeuristic(num_rows=4)
        with tempfile.NamedTemporaryFile(suffix=".json", delete=False) as tmp:
            tmp_path = tmp.name

        try:
            h.save_weights_to_file(tmp_path)
            h_loaded = LearnedRegressionHeuristic(weights_path=tmp_path, num_rows=4)
            assert np.allclose(h.weights, h_loaded.weights)
            assert h.intercept == h_loaded.intercept
        finally:
            if os.path.exists(tmp_path):
                os.remove(tmp_path)

    def test_admissible_wrapper(self):
        h_reg = LearnedRegressionHeuristic(num_rows=4)
        h_adm = AdmissibleLearnedHeuristic(h_reg, safety_scale=0.94)
        st = SandboxesEnv.get_professor_benchmark_state()
        assert h_adm(st) <= h_reg(st)
        assert h_adm(st) >= 0.0


class TestEffectiveBranchingFactor:
    """Verifies b* calculation functions."""

    def test_slide_formula(self):
        # Slide 41 example: b* = N^(1/d)
        # N=227, d=12 -> 1.57
        b_tile = compute_b_star_slide(227, 12)
        assert abs(b_tile - 1.57) < 0.01

        # N=73, d=12 -> 1.43
        b_man = compute_b_star_slide(73, 12)
        assert abs(b_man - 1.43) < 0.01

    def test_aima_formula(self):
        # For d=1, N=1 -> b* = 1.0
        b_d1 = compute_b_star_aima(1, 1)
        assert b_d1 == 1.0

        # For d=2, N=3 -> 1 + b + b^2 = 4 -> b=1.303
        b_d2 = compute_b_star_aima(3, 2)
        assert abs(b_d2 - 1.303) < 0.02


class TestSearchWithLearnedHeuristic:
    """Verifies A* and RBFS search using the learned heuristic."""

    def test_astar_with_learned_heuristic(self):
        bench_weights = os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            "sandboxes_puzzle",
            "heuristics",
            "data",
            "learned_weights_n4.json",
        )
        h_reg = LearnedRegressionHeuristic(weights_path=bench_weights, num_rows=4)
        astar = AStarSearch(heuristic=h_reg)
        st = SandboxesEnv.get_professor_benchmark_state()
        res = astar.solve(st)
        assert res.is_goal_found is True
        assert res.total_cost == 50.0
        assert res.nodes_expanded < 30  # Highly pruned!

    def test_rbfs_with_learned_heuristic(self):
        bench_weights = os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            "sandboxes_puzzle",
            "heuristics",
            "data",
            "learned_weights_n4.json",
        )
        h_reg = LearnedRegressionHeuristic(weights_path=bench_weights, num_rows=4)
        rbfs = RecursiveBestFirstSearch(heuristic=h_reg)
        st = SandboxesEnv.get_professor_benchmark_state()
        res = rbfs.solve(st)
        assert res.is_goal_found is True
        assert res.total_cost == 50.0
