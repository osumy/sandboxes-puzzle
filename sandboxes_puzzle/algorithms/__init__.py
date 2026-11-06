"""Algorithms package for Sandboxes Puzzle."""

from .base import Node, SearchResult, SearchAlgorithm
from .uninformed import (
    BreadthFirstSearch,
    DepthFirstSearch,
    UniformCostSearch,
    IterativeDeepeningSearch,
)
from .informed import (
    GreedyBestFirstSearch,
    AStarSearch,
    RecursiveBestFirstSearch,
)

__all__ = [
    "Node",
    "SearchResult",
    "SearchAlgorithm",
    "BreadthFirstSearch",
    "DepthFirstSearch",
    "UniformCostSearch",
    "IterativeDeepeningSearch",
    "GreedyBestFirstSearch",
    "AStarSearch",
    "RecursiveBestFirstSearch",
]
