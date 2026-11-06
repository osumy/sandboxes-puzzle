"""
Base abstract interface for heuristic functions in the Sandboxes Puzzle.
"""

from abc import ABC, abstractmethod
from sandboxes_puzzle.environment.state import PuzzleState


class HeuristicFunction(ABC):
    """
    Abstract base class for heuristic estimators h(s).
    """

    @property
    @abstractmethod
    def name(self) -> str:
        """Return the short identifier/name of the heuristic."""
        pass

    @property
    @abstractmethod
    def description(self) -> str:
        """Return a descriptive explanation of the heuristic."""
        pass

    @abstractmethod
    def __call__(self, state: PuzzleState) -> float:
        """
        Evaluate heuristic estimation h(s) for the given state.
        
        Args:
            state: PuzzleState to evaluate.
            
        Returns:
            Non-negative float estimating the remaining cost to reach the goal state.
        """
        pass
