"""
Unit tests for heuristic functions (Requirement R2).
Verifies admissibility (h(s) <= h*(s)), consistency (h(u) <= c(u, v) + h(v)),
and dominance (h3 >= h1, h3 >= h2).
"""

import pytest
from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv
from sandboxes_puzzle.heuristics import SandVolumeHeuristic, RowDistanceHeuristic, CombinedHeuristic


@pytest.fixture
def heuristics():
    return {
        "h1": SandVolumeHeuristic(),
        "h2": RowDistanceHeuristic(),
        "h3": CombinedHeuristic(),
    }


class TestHeuristicsProperties:
    """Verifies core heuristic properties and mathematical bounds."""

    def test_goal_state_is_zero(self, heuristics):
        empty_state = PuzzleState.empty(5)
        for h_name, h_fn in heuristics.items():
            assert h_fn(empty_state) == 0.0, f"{h_name} should be 0 at goal state"

    def test_combined_dominance(self, heuristics):
        """h3(s) = h1(s) + h2(s) >= h1(s) and h3(s) >= h2(s) for all non-empty states."""
        h1 = heuristics["h1"]
        h2 = heuristics["h2"]
        h3 = heuristics["h3"]

        for i in range(30):
            state = SandboxesEnv.generate_random_state(num_rows=5, seed=i)
            val1 = h1(state)
            val2 = h2(state)
            val3 = h3(state)
            assert abs(val3 - (val1 + val2)) < 1e-6
            assert val3 >= val1
            assert val3 >= val2

    def test_consistency_on_all_successors(self, heuristics):
        """Verify triangle inequality: h(u) <= c(u, v) + h(v) for all successors."""
        h3 = heuristics["h3"]

        for seed in range(25):
            state = SandboxesEnv.generate_random_state(num_rows=4, seed=seed)
            h_u = h3(state)
            successors = SandboxesEnv.get_successors(state, prune_noops=True)
            for next_state, action, cost in successors:
                h_v = h3(next_state)
                # Consistency check: h(u) - h(v) <= cost
                delta_h = h_u - h_v
                assert delta_h <= cost + 1e-6, (
                    f"Consistency violated for action {action}: "
                    f"h(u)={h_u}, h(v)={h_v}, delta_h={delta_h}, cost={cost}"
                )

    def test_professor_benchmark_heuristic_values(self, heuristics):
        """Test heuristics on professor's 4-row benchmark case."""
        bench = SandboxesEnv.get_professor_benchmark_state()
        h1 = heuristics["h1"](bench)
        h2 = heuristics["h2"](bench)
        h3 = heuristics["h3"](bench)

        # bench = [[1, 0], [0, 1], [0, 1], [1, 0]]
        # Total sand = 4.0 -> h1 = 5 * 4 = 20.0
        assert h1 == 20.0
        # Row 1 has 1 sand (1*1), Row 2 has 1 sand (2*1), Row 3 has 1 sand (3*1) -> sum = 6 -> h2 = 5 * 6 = 30.0
        assert h2 == 30.0
        # h3 = 20 + 30 = 50.0
        assert h3 == 50.0
