"""
Heuristic h1: Sand volume lower bound.
Estimates the minimum cost required solely to flush all remaining sand out of the collector.
"""

from .base import HeuristicFunction
from sandboxes_puzzle.environment.state import PuzzleState


class SandVolumeHeuristic(HeuristicFunction):
    """
    Heuristic h1: Sand Volume Lower Bound.
    
    Formula:
        h1(s) = 5.0 * M(s)
        where M(s) = sum_{r, c} s_{r, c} is the total sand mass remaining.
        
    Admissibility:
        Every unit of sand must exit through the bottom collector.
        Minimum cost to flush 1.0 unit of sand is 1 + 4(1.0) = 5.0 (cost per unit: 5.0).
        Minimum cost to flush 0.5 unit of sand is 1 + 4(0.5) = 3.0 (cost per unit: 6.0 >= 5.0).
        Therefore, evacuation of M units of sand incurs at least 5.0 * M flush cost alone.
        Since vertical drop costs >= 0 and side gate costs >= 0:
        h1(s) <= h*(s) for all reachable states.
    """

    @property
    def name(self) -> str:
        return "h1_sand_volume"

    @property
    def description(self) -> str:
        return "Sand volume lower bound: h1(s) = 5.0 * sum(s_rc)"

    def __call__(self, state: PuzzleState) -> float:
        if state.is_goal:
            return 0.0
        return 5.0 * state.total_sand
