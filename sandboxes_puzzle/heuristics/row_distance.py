"""
Heuristic h2: Row-distance weighted evacuation lower bound.
Estimates the minimum cost required solely to transport sand vertically down to row 0.
"""

from .base import HeuristicFunction
from sandboxes_puzzle.environment.state import PuzzleState


class RowDistanceHeuristic(HeuristicFunction):
    """
    Heuristic h2: Row-Distance Weighted Evacuation Lower Bound.
    
    Formula:
        h2(s) = 5.0 * sum_{r=1}^{n-1} sum_{c in {0, 1}} (r * s_{r, c})
        
    Admissibility:
        Any sand at row r must descend r vertical levels to reach the bottom row 0.
        Each 1-level downward transfer of delta_s sand costs at least 5.0 * delta_s:
          - Full drop (1.0 -> 0.0): cost = 5.0 = 5.0 * 1.0.
          - Half drop (0.5 -> 0.0 or into 0.5): cost = 3.0 = 6.0 * 0.5 >= 5.0 * 0.5.
          - Partial drop (1.0 into 0.5): cost = 7.0 = 14.0 * 0.5 >= 5.0 * 0.5.
        Hence, lowering sand to row 0 requires at least 5.0 * r * s_{r, c} in drop actions alone.
        Since collector flush costs >= 0, h2(s) <= h*(s).
    """

    @property
    def name(self) -> str:
        return "h2_row_distance"

    @property
    def description(self) -> str:
        return "Row-distance lower bound: h2(s) = 5.0 * sum(r * s_rc)"

    def __call__(self, state: PuzzleState) -> float:
        if state.is_goal:
            return 0.0
        n = state.num_rows
        grid = state.grid
        weighted_sum = 0.0
        for r in range(1, n):
            weighted_sum += r * (grid[r][0] + grid[r][1])
        return 5.0 * weighted_sum
