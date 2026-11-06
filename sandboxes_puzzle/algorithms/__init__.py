"""Algorithms package for Sandboxes Puzzle."""

from .base import Node, SearchResult, SearchAlgorithm
from .uninformed import (
    BreadthFirstSearch,
    DepthFirstSearch,
    UniformCostSearch,
    IterativeDeepeningSearch,
)
from .informed import (
    GreedyStarSearch,
    GreedyStar,
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
    "GreedyStarSearch",
    "GreedyStar",
    "GreedyBestFirstSearch",
    "AStarSearch",
    "RecursiveBestFirstSearch",
]
