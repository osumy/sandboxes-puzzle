"""
Heuristic h3: Combined admissible and consistent composite heuristic.
Strictly dominates h1 and h2: h3(s) = h1(s) + h2(s).
Proven admissible (h3(s) <= h*(s)) and consistent (h3(u) <= c(u, v) + h3(v)) across all states.
"""

from .base import HeuristicFunction
from sandboxes_puzzle.environment.state import PuzzleState


class CombinedHeuristic(HeuristicFunction):
    """
    Heuristic h3: Combined Admissible and Consistent Composite Heuristic.
    
    Formula:
        h3(s) = 5.0 * sum_{r=0}^{n-1} sum_{c in {0, 1}} ((r + 1) * s_{r, c})
        
    Mathematical Equivalence:
        h3(s) = h1(s) + h2(s)
              = 5.0 * sum_{r, c} s_{r, c} + 5.0 * sum_{r=1}^{n-1} sum_c (r * s_{r, c})
              = 5.0 * sum_{r=0}^{n-1} sum_{c} ((r + 1) * s_{r, c})
              
    Proof of Admissibility:
        Each grain of sand at row r must undergo at least r downward drops to reach row 0,
        plus exactly 1 collector flush out of row 0 into the basin.
        Thus each unit of sand requires at least (r + 1) operations.
        The minimum cost rate for each operation is min_{delta_s} (Cost / delta_s) = 5.0:
          - Full drop / flush (delta=1.0): cost = 5.0 (rate = 5.0).
          - Half drop / flush (delta=0.5): cost = 3.0 (rate = 6.0 >= 5.0).
          - Partial drop (delta=0.5): cost = 7.0 (rate = 14.0 >= 5.0).
        Side gates do not decrease vertical height or evacuate sand.
        Therefore, h3(s) <= h*(s) for all states s in the state space.
        
    Proof of Consistency (Monotonicity):
        For any transition u -> v with cost c(u, v):
        1. Collector Flush (col c, row 0):
           s_{0, c} drops to 0. Delta h3 = 5.0 * (0 + 1) * s_{0, c} = 5.0 * s_{0, c}.
           c(u, v) = 1 + 4 * s_{0, c}.
           - s = 0.5: Delta h3 = 2.5 <= c = 3.0.
           - s = 1.0: Delta h3 = 5.0 <= c = 5.0.
        2. Vertical Drop (r -> r-1, col c, transfer delta_s):
           Delta h3 = 5.0 * [(r + 1) * delta_s - ((r - 1) + 1) * delta_s] = 5.0 * delta_s.
           c(u, v) >= 1 + 4 * delta_s.
           - delta = 0.5: Delta h3 = 2.5 <= c = 3.0 (or 7.0).
           - delta = 1.0: Delta h3 = 5.0 <= c = 5.0.
        3. Horizontal Side Gate (row r):
           (1, 0) -> (0.5, 0.5).
           (r + 1) * (1.0 + 0.0) = (r + 1) * (0.5 + 0.5) = r + 1.
           Delta h3 = 0.0 <= c = 1.0.
        In all cases, h3(u) - h3(v) <= c(u, v) <=> h3(u) <= c(u, v) + h3(v).
        Hence, h3 is strictly consistent (monotone).
    """

    @property
    def name(self) -> str:
        return "h3_combined"

    @property
    def description(self) -> str:
        return "Combined admissible & consistent lower bound: h3(s) = 5.0 * sum((r + 1) * s_rc)"

    def __call__(self, state: PuzzleState) -> float:
        if state.is_goal:
            return 0.0
        n = state.num_rows
        grid = state.grid
        weighted_sum = 0.0
        for r in range(n):
            weighted_sum += (r + 1) * (grid[r][0] + grid[r][1])
        return 5.0 * weighted_sum
