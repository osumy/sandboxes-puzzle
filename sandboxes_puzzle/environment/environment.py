"""
Environment simulator for the Sandboxes Puzzle.
Manages physical transitions, gate operations, cost calculations, and successor generation.
"""

import random
from typing import List, Tuple, Optional, Dict, Any

from .state import PuzzleState
from .actions import ActionType, GateAction


class SandboxesEnv:
    """
    Simulation environment for the Sandboxes Puzzle.
    
    A grid of 2 columns (c in {0, 1}) and n rows (r in {0, ..., n-1}).
    Row 0 is the bottom row (adjacent to collector basin).
    Row n-1 is the top row.
    """

    def __init__(self, initial_state: Optional[PuzzleState] = None, num_rows: int = 5):
        """
        Initialize the Sandboxes environment.
        
        Args:
            initial_state: Optional PuzzleState to initialize with.
            num_rows: Number of rows n (default 5, used if initial_state is None).
        """
        if initial_state is not None:
            self._state = initial_state
            self._num_rows = initial_state.num_rows
        else:
            self._num_rows = num_rows
            self._state = self.generate_random_state(num_rows=num_rows)
            
        self._initial_state = self._state
        self._cumulative_cost: float = 0.0
        self._step_count: int = 0

    @property
    def state(self) -> PuzzleState:
        """Return the current puzzle state."""
        return self._state

    @property
    def initial_state(self) -> PuzzleState:
        """Return the initial puzzle state."""
        return self._initial_state

    @property
    def num_rows(self) -> int:
        """Return the number of rows n."""
        return self._num_rows

    @property
    def cumulative_cost(self) -> float:
        """Return the cumulative cost incurred since reset."""
        return self._cumulative_cost

    @property
    def step_count(self) -> int:
        """Return the number of steps taken since reset."""
        return self._step_count

    def reset(self, initial_state: Optional[PuzzleState] = None) -> PuzzleState:
        """
        Reset the environment to the initial state or a newly provided state.
        """
        if initial_state is not None:
            self._initial_state = initial_state
            self._num_rows = initial_state.num_rows
        self._state = self._initial_state
        self._cumulative_cost = 0.0
        self._step_count = 0
        return self._state

    def is_goal(self, state: Optional[PuzzleState] = None) -> bool:
        """Check whether the given state (or current state) is a goal state (all 0s)."""
        target = state if state is not None else self._state
        return target.is_goal

    def step(self, action: GateAction) -> Tuple[PuzzleState, float, bool, Dict[str, Any]]:
        """
        Execute an action in the environment.
        
        Returns:
            Tuple of (next_state, action_cost, is_done, info_dict)
        """
        next_state, cost = self.apply_action(self._state, action)
        self._state = next_state
        self._cumulative_cost += cost
        self._step_count += 1
        done = self.is_goal(self._state)
        info = {
            "action": action,
            "cost": cost,
            "cumulative_cost": self._cumulative_cost,
            "step_count": self._step_count,
            "remaining_sand": self._state.total_sand,
        }
        return next_state, cost, done, info

    @staticmethod
    def apply_action(state: PuzzleState, action: GateAction) -> Tuple[PuzzleState, float]:
        """
        Apply an action to a state and compute the resulting next state and cost.
        """
        n = state.num_rows
        grid_list = [list(r) for r in state.grid]
        new_open_gates = set(state.open_gates)

        if action.action_type == ActionType.COLLECTOR_FLUSH:
            c = action.col
            if c not in (0, 1):
                raise ValueError(f"Invalid column for collector flush: {c}")
            s = grid_list[0][c]
            grid_list[0][c] = 0.0
            cost = 1.0 + 4.0 * s

            # If top-down gates are stuck open above row 0 in this column,
            # sand cascades down into the collector basin!
            curr_r = 1
            while curr_r < n and (curr_r, c) in new_open_gates:
                grid_list[curr_r][c] = 0.0
                new_open_gates.remove((curr_r, c))
                curr_r += 1

            return PuzzleState(grid_list, new_open_gates), cost

        elif action.action_type == ActionType.TOP_DOWN:
            r = action.row
            c = action.col
            if not (1 <= r < n):
                raise ValueError(f"Top-down gate row must be in [1, {n - 1}], got {r}")
            if c not in (0, 1):
                raise ValueError(f"Invalid column: {c}")
            
            s = grid_list[r][c]
            low = grid_list[r - 1][c]

            # Special Rule: If upper cell has sand and lower cell is completely full (1.0),
            # the spring latch gets stuck open! No sand moves yet, cost is 1 + 4*(s + s).
            if s > 0.0 and low == 1.0:
                cost = 1.0 + 4.0 * (s + s)
                new_open_gates.add((r, c))
                return PuzzleState(grid_list, new_open_gates), cost

            # Lower cell has room
            cap = 1.0 - low
            delta = min(s, cap)
            s_prime = round(s - delta, 4)
            grid_list[r][c] = s_prime
            grid_list[r - 1][c] = round(low + delta, 4)
            cost = 1.0 + 4.0 * (s + s_prime)

            # Gate (r, c) itself has opened and closed
            new_open_gates.discard((r, c))

            # Cascade: if any contiguous gates above r are stuck open, their sand cascades down!
            m = r
            while m + 1 < n and (m + 1, c) in new_open_gates:
                m += 1
            if m > r:
                channel_rows = list(range(r, m + 1))
                total_sand_in_channel = sum(grid_list[row_idx][c] for row_idx in channel_rows)
                rem = round(total_sand_in_channel, 4)
                for row_idx in channel_rows:
                    fill = min(1.0, rem)
                    grid_list[row_idx][c] = fill
                    rem = round(rem - fill, 4)
                for row_idx in range(r + 1, m + 1):
                    new_open_gates.discard((row_idx, c))

            return PuzzleState(grid_list, new_open_gates), cost

        elif action.action_type == ActionType.SIDE_GATE:
            r = action.row
            if not (0 <= r < n):
                raise ValueError(f"Side gate row must be in [0, {n - 1}], got {r}")
            c0, c1 = grid_list[r][0], grid_list[r][1]
            if (c0 == 1.0 and c1 == 0.0) or (c0 == 0.0 and c1 == 1.0):
                grid_list[r][0] = 0.5
                grid_list[r][1] = 0.5
            # Non-equalizing pairs remain unchanged (no-op)
            cost = 1.0
            return PuzzleState(grid_list, new_open_gates), cost

        else:
            raise ValueError(f"Unknown action type: {action.action_type}")

    @classmethod
    def get_successors(cls, state: PuzzleState, prune_noops: bool = True) -> List[Tuple[PuzzleState, GateAction, float]]:
        """
        Generate all valid successor states and actions from the given state.
        
        Args:
            state: The current PuzzleState.
            prune_noops: If True (default for search algorithms), prunes actions
                         that do not transfer any sand (delta_s == 0).
                         
        Returns:
            List of tuples (next_state, action, cost).
        """
        n = state.num_rows
        succs: List[Tuple[PuzzleState, GateAction, float]] = []
        grid = state.grid

        # 1. Collector flush actions (row 0 to collector)
        for c in (0, 1):
            s = grid[0][c]
            if s > 0.0 or not prune_noops:
                action = GateAction.collector_flush(col=c, s_before=s)
                next_grid = [list(r) for r in grid]
                next_grid[0][c] = 0.0
                succs.append((PuzzleState(next_grid), action, action.cost))

        # 2. Top-down vertical drop actions (row r -> r-1)
        for r in range(1, n):
            for c in (0, 1):
                s = grid[r][c]
                cap = 1.0 - grid[r - 1][c]
                delta = min(s, cap)
                if delta > 0.0 or not prune_noops:
                    s_prime = round(s - delta, 4)
                    action = GateAction.top_down(row=r, col=c, s_before=s, s_after=s_prime, delta_s=delta)
                    next_grid = [list(row) for row in grid]
                    next_grid[r][c] = s_prime
                    next_grid[r - 1][c] = round(next_grid[r - 1][c] + delta, 4)
                    succs.append((PuzzleState(next_grid), action, action.cost))

        # 3. Horizontal side gate actions (row r)
        for r in range(n):
            c0, c1 = grid[r][0], grid[r][1]
            can_equalize = (c0 == 1.0 and c1 == 0.0) or (c0 == 0.0 and c1 == 1.0)
            if can_equalize:
                action = GateAction.side_gate(row=r, s0_before=c0, s1_before=c1)
                next_grid = [list(row) for row in grid]
                next_grid[r][0] = 0.5
                next_grid[r][1] = 0.5
                succs.append((PuzzleState(next_grid), action, action.cost))
            elif not prune_noops:
                # No-op action in manual interactive mode
                desc = f"SideGate(r={r}) [No-op]"
                action = GateAction(ActionType.SIDE_GATE, r, None, 1.0, 0.0, c0, c0, desc)
                succs.append((state, action, 1.0))

        return succs

    @staticmethod
    def generate_random_state(num_rows: int = 5, seed: Optional[int] = None) -> PuzzleState:
        """
        Generate a random initial puzzle state according to specified probability distribution:
        P(0.0) = 0.5, P(1.0) = 0.3, P(0.5) = 0.2.
        
        Args:
            num_rows: Number of rows n (default 5).
            seed: Optional random seed for reproducibility.
        """
        rng = random.Random(seed)
        values = [0.0, 1.0, 0.5]
        weights = [0.5, 0.3, 0.2]

        rows = []
        for _ in range(num_rows):
            c0 = rng.choices(values, weights=weights, k=1)[0]
            c1 = rng.choices(values, weights=weights, k=1)[0]
            rows.append((c0, c1))
            
        return PuzzleState(rows)

    @staticmethod
    def get_professor_benchmark_state() -> PuzzleState:
        """
        Return the professor's 4-row benchmark case state:
        [[1, 0], [0, 1], [0, 1], [1, 0]].
        Due to vertical palindromic symmetry, top-to-bottom and bottom-to-top are identical:
        Row 0 (bottom): [1.0, 0.0]
        Row 1: [0.0, 1.0]
        Row 2: [0.0, 1.0]
        Row 3 (top): [1.0, 0.0]
        """
        return PuzzleState([
            (1.0, 0.0),
            (0.0, 1.0),
            (0.0, 1.0),
            (1.0, 0.0),
        ])
