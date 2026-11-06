"""
Unit tests for benchmark metrics, state space evaluation, and ground-truth solvers (Requirement R3).
"""

import pytest
from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv
from sandboxes_puzzle.benchmarks.optimal_solver import BackwardOptimalSolver
from sandboxes_puzzle.benchmarks.state_space import StateSpace
from sandboxes_puzzle.benchmarks.evaluator import StateSpaceEvaluator


class TestOptimalSolver:
    """Verifies the backward Dijkstra ground-truth solver."""

    def test_backward_dijkstra_4row(self):
        solver = BackwardOptimalSolver(num_rows=4)
        costs = solver.compute_all_optimal_costs()
        assert len(costs) == 3 ** (2 * 4) # Exactly 6,561 states

        bench = SandboxesEnv.get_professor_benchmark_state()
        opt_cost = solver.get_optimal_cost(bench)
        assert opt_cost == 50.0

    def test_goal_state_zero_cost(self):
        solver = BackwardOptimalSolver(num_rows=4)
        empty = PuzzleState.empty(4)
        assert solver.get_optimal_cost(empty) == 0.0


class TestStateSpaceEvaluator:
    """Verifies state space evaluation, histogram data, and plot exports."""

    def test_evaluator_4row(self):
        evaluator = StateSpaceEvaluator(num_rows=4)
        res = evaluator.evaluate_full_space()
        assert res["total_states"] == 6561
        assert res["mean_ratio"] >= 1.0 # Greedy cost >= optimal cost
        assert res["median_ratio"] >= 1.0
        assert len(res["histogram"]["counts"]) == 10
        assert len(res["plot1_greedy_vs_opt"]) > 0
        assert len(res["plot2_actions_vs_type_b"]) > 0

        # Verify all plot 1 points satisfy greedy_cost >= opt_cost (monotonicity)
        for pt in res["plot1_greedy_vs_opt"]:
            assert pt["greedy_cost"] >= pt["opt_cost"] - 1e-4


class TestStateSpaceSampling:
    """Verifies sampling utilities."""

    def test_sample_properties(self):
        space = StateSpace(num_rows=5)
        samples = space.sample_states(sample_size=20, seed=123)
        assert len(samples) == 20
        for s in samples:
            assert s.num_rows == 5
            assert not s.is_goal
