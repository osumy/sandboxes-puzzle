"""
Unit tests for Sandboxes Puzzle physics and environment simulation (Requirement R1).
"""

import pytest
from sandboxes_puzzle.environment.state import PuzzleState, VALID_SAND_LEVELS
from sandboxes_puzzle.environment.actions import ActionType, GateAction
from sandboxes_puzzle.environment.environment import SandboxesEnv


class TestStateRepresentation:
    """Tests for PuzzleState creation, immutability, validation, and representations."""

    def test_valid_state_creation(self):
        state = PuzzleState([(1.0, 0.0), (0.5, 0.5), (0.0, 1.0)])
        assert state.num_rows == 3
        assert state.get(0, 0) == 1.0
        assert state.get(0, 1) == 0.0
        assert state.get(1, 0) == 0.5
        assert state.get(2, 1) == 1.0
        assert state.total_sand == 3.0
        assert not state.is_goal

    def test_invalid_sand_level_raises(self):
        with pytest.raises(ValueError, match="Invalid sand level"):
            PuzzleState([(0.8, 0.0)])
        with pytest.raises(ValueError, match="Invalid sand level"):
            PuzzleState([(-0.5, 1.0)])

    def test_invalid_dimensions_raises(self):
        with pytest.raises(ValueError, match="must have exactly 2 columns"):
            PuzzleState([(1.0, 0.0, 0.5)])
        with pytest.raises(ValueError, match="at least 1 row"):
            PuzzleState([])

    def test_immutability_and_hashing(self):
        s1 = PuzzleState([(1.0, 0.0), (0.0, 1.0)])
        s2 = PuzzleState([(1.0, 0.0), (0.0, 1.0)])
        s3 = PuzzleState([(0.5, 0.5), (0.0, 1.0)])
        assert s1 == s2
        assert hash(s1) == hash(s2)
        assert s1 != s3
        assert len({s1, s2, s3}) == 2

    def test_to_list_orientations(self):
        # Row 0 (bottom): [1, 0], Row 1 (top): [0.5, 1]
        state = PuzzleState([(1.0, 0.0), (0.5, 1.0)])
        bottom_to_top = state.to_list(top_to_bottom=False)
        assert bottom_to_top == [[1.0, 0.0], [0.5, 1.0]]
        
        top_to_bottom = state.to_list(top_to_bottom=True)
        assert top_to_bottom == [[0.5, 1.0], [1.0, 0.0]]

    def test_int_tuple_serialization(self):
        state = PuzzleState([(1.0, 0.0), (0.5, 1.0), (0.0, 0.5)])
        t = state.to_int_tuple()
        assert t == (2, 0, 1, 2, 0, 1)
        reconstructed = PuzzleState.from_int_tuple(t)
        assert reconstructed == state


class TestSideGatePhysics:
    """Tests for Action b (horizontal side gate equalization and no-ops)."""

    def test_equalization_one_zero(self):
        # (1.0, 0.0) -> (0.5, 0.5) at cost 1.0
        env = SandboxesEnv(PuzzleState([(1.0, 0.0), (0.0, 0.0)]))
        action = GateAction.side_gate(row=0, s0_before=1.0, s1_before=0.0)
        next_state, cost, done, _ = env.step(action)
        assert next_state.get(0, 0) == 0.5
        assert next_state.get(0, 1) == 0.5
        assert cost == 1.0

    def test_equalization_zero_one(self):
        # (0.0, 1.0) -> (0.5, 0.5) at cost 1.0
        env = SandboxesEnv(PuzzleState([(0.0, 1.0), (0.0, 0.0)]))
        action = GateAction.side_gate(row=0, s0_before=0.0, s1_before=1.0)
        next_state, cost, done, _ = env.step(action)
        assert next_state.get(0, 0) == 0.5
        assert next_state.get(0, 1) == 0.5
        assert cost == 1.0

    @pytest.mark.parametrize("c0, c1", [
        (1.0, 0.5),
        (0.5, 1.0),
        (0.5, 0.0),
        (0.0, 0.5),
        (0.5, 0.5),
        (1.0, 1.0),
        (0.0, 0.0),
    ])
    def test_side_gate_strict_inactivity(self, c0, c1):
        state = PuzzleState([(c0, c1)])
        # In solver successor generation (prune_noops=True), no side gate generated
        succs = SandboxesEnv.get_successors(state, prune_noops=True)
        side_succs = [s for s in succs if s[1].action_type == ActionType.SIDE_GATE]
        assert len(side_succs) == 0

        # In manual mode (prune_noops=False), state remains identical
        next_state, cost = SandboxesEnv.apply_action(state, GateAction.side_gate(0, c0, c1))
        assert next_state == state
        assert cost == 1.0


class TestVerticalTransferPhysics:
    """Tests for Action a (inter-row gravity drops and collector flushes)."""

    def test_drop_full_into_empty(self):
        # Upper (row 1) = 1.0, Lower (row 0) = 0.0
        state = PuzzleState([(0.0, 0.0), (1.0, 0.0)])
        succs = SandboxesEnv.get_successors(state)
        drop_action = [s for s in succs if s[1].action_type == ActionType.TOP_DOWN][0]
        next_state, action, cost = drop_action
        assert next_state.get(1, 0) == 0.0
        assert next_state.get(0, 0) == 1.0
        # C_a = 1 + 4*(1.0 + 0.0) = 5.0
        assert cost == 5.0
        assert action.delta_s == 1.0

    def test_drop_full_into_half(self):
        # Upper = 1.0, Lower = 0.5 -> Upper becomes 0.5, Lower becomes 1.0
        state = PuzzleState([(0.5, 0.0), (1.0, 0.0)])
        succs = SandboxesEnv.get_successors(state)
        drop_action = [s for s in succs if s[1].action_type == ActionType.TOP_DOWN][0]
        next_state, action, cost = drop_action
        assert next_state.get(1, 0) == 0.5
        assert next_state.get(0, 0) == 1.0
        # C_a = 1 + 4*(1.0 + 0.5) = 7.0
        assert cost == 7.0
        assert action.delta_s == 0.5

    def test_drop_half_into_empty(self):
        # Upper = 0.5, Lower = 0.0 -> Upper becomes 0.0, Lower becomes 0.5
        state = PuzzleState([(0.0, 0.0), (0.5, 0.0)])
        succs = SandboxesEnv.get_successors(state)
        drop_action = [s for s in succs if s[1].action_type == ActionType.TOP_DOWN][0]
        next_state, action, cost = drop_action
        assert next_state.get(1, 0) == 0.0
        assert next_state.get(0, 0) == 0.5
        # C_a = 1 + 4*(0.5 + 0.0) = 3.0
        assert cost == 3.0
        assert action.delta_s == 0.5

    def test_drop_half_into_half(self):
        # Upper = 0.5, Lower = 0.5 -> Upper becomes 0.0, Lower becomes 1.0
        state = PuzzleState([(0.5, 0.0), (0.5, 0.0)])
        succs = SandboxesEnv.get_successors(state)
        drop_action = [s for s in succs if s[1].action_type == ActionType.TOP_DOWN][0]
        next_state, action, cost = drop_action
        assert next_state.get(1, 0) == 0.0
        assert next_state.get(0, 0) == 1.0
        # C_a = 1 + 4*(0.5 + 0.0) = 3.0
        assert cost == 3.0
        assert action.delta_s == 0.5

    def test_collector_flush_cost(self):
        # Flush full cell (1.0)
        state_full = PuzzleState([(1.0, 0.0)])
        next_s, cost_full = SandboxesEnv.apply_action(state_full, GateAction.collector_flush(0, 1.0))
        assert next_s.get(0, 0) == 0.0
        assert cost_full == 5.0 # 1 + 4(1.0)

        # Flush half cell (0.5)
        state_half = PuzzleState([(0.5, 0.0)])
        next_s, cost_half = SandboxesEnv.apply_action(state_half, GateAction.collector_flush(0, 0.5))
        assert next_s.get(0, 0) == 0.0
        assert cost_half == 3.0 # 1 + 4(0.5)

    def test_cost_parity_theorem(self):
        """Every valid discrete gate action costs an odd integer in {1, 3, 5, 7}."""
        valid_costs = {1.0, 3.0, 5.0, 7.0}
        state = PuzzleState([
            (1.0, 0.0),
            (0.5, 1.0),
            (0.0, 0.5),
        ])
        succs = SandboxesEnv.get_successors(state, prune_noops=True)
        for _, action, cost in succs:
            assert cost in valid_costs
            assert int(cost) % 2 == 1


class TestProfessorBenchmark:
    """Tests for the professor's 4-row benchmark case."""

    def test_benchmark_structure(self):
        bench = SandboxesEnv.get_professor_benchmark_state()
        assert bench.num_rows == 4
        assert bench.total_sand == 4.0
        # Palindromic symmetry
        assert bench.to_list(top_to_bottom=False) == bench.to_list(top_to_bottom=True)

    def test_goal_condition(self):
        empty_state = PuzzleState.empty(4)
        assert empty_state.is_goal
        assert empty_state.total_sand == 0.0

        bench = SandboxesEnv.get_professor_benchmark_state()
        assert not bench.is_goal

    def test_random_state_generator_distribution(self):
        states = [SandboxesEnv.generate_random_state(5, seed=i) for i in range(50)]
        for s in states:
            assert s.num_rows == 5
            for r in range(5):
                for c in (0, 1):
                    assert s.get(r, c) in VALID_SAND_LEVELS
