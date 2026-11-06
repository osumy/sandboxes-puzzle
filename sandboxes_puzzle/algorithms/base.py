"""
Base classes and data structures for AIMA search algorithms.
Defines Node, SearchResult, and the abstract SearchAlgorithm interface.
"""

from abc import ABC, abstractmethod
from typing import Optional, List, Tuple, Dict, Any
import time
import tracemalloc

from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.actions import GateAction


class Node:
    """
    Search tree node following Russell & Norvig AIMA conventions.
    
    Attributes:
        state: The PuzzleState represented by this node.
        parent: Pointer to parent Node (None for root).
        action: The GateAction that transitioned from parent to this state.
        path_cost: Total g(n) cost accumulated from root to this node.
        depth: Search tree depth from root (root depth = 0).
        f: Evaluation value f(n) (used by A*, Greedy, RBFS).
    """

    __slots__ = ("state", "parent", "action", "path_cost", "depth", "f")

    def __init__(
        self,
        state: PuzzleState,
        parent: Optional["Node"] = None,
        action: Optional[GateAction] = None,
        path_cost: float = 0.0,
        depth: int = 0,
        f: float = 0.0,
    ):
        self.state = state
        self.parent = parent
        self.action = action
        self.path_cost = round(path_cost, 4)
        self.depth = depth
        self.f = round(f, 4)

    def get_path(self) -> List[GateAction]:
        """Reconstruct the sequence of actions from root to this node."""
        actions: List[GateAction] = []
        curr = self
        while curr.parent is not None:
            if curr.action is not None:
                actions.append(curr.action)
            curr = curr.parent
        actions.reverse()
        return actions

    def get_state_path(self) -> List[PuzzleState]:
        """Reconstruct the sequence of states from root to this node."""
        states: List[PuzzleState] = []
        curr = self
        while curr is not None:
            states.append(curr.state)
            curr = curr.parent
        states.reverse()
        return states

    def __lt__(self, other: "Node") -> bool:
        # Tie-breaker for PriorityQueue
        return self.f < other.f

    def __repr__(self) -> str:
        return f"Node(depth={self.depth}, g={self.path_cost:.1f}, f={self.f:.1f})"


class SearchResult:
    """
    Comprehensive search execution metrics and solution payload.
    """

    def __init__(
        self,
        algorithm_name: str,
        solution_path: List[GateAction],
        state_path: List[PuzzleState],
        total_cost: float,
        nodes_expanded: int,
        nodes_generated: int,
        max_frontier_size: int,
        execution_time_ms: float,
        peak_memory_mb: float,
        is_goal_found: bool,
    ):
        self.algorithm_name = algorithm_name
        self.solution_path = solution_path
        self.state_path = state_path
        self.total_cost = round(total_cost, 4)
        self.path_length = len(solution_path)
        self.nodes_expanded = nodes_expanded
        self.nodes_generated = nodes_generated
        self.max_frontier_size = max_frontier_size
        self.execution_time_ms = round(execution_time_ms, 3)
        self.peak_memory_mb = round(peak_memory_mb, 4)
        self.is_goal_found = is_goal_found

    def to_dict(self) -> Dict[str, Any]:
        """Serialize search result to a JSON-compatible dictionary."""
        return {
            "algorithm": self.algorithm_name,
            "goal_found": self.is_goal_found,
            "total_cost": self.total_cost,
            "path_length": self.path_length,
            "nodes_expanded": self.nodes_expanded,
            "nodes_generated": self.nodes_generated,
            "max_frontier_size": self.max_frontier_size,
            "execution_time_ms": self.execution_time_ms,
            "peak_memory_mb": self.peak_memory_mb,
            "actions": [a.description for a in self.solution_path],
            "step_costs": [a.cost for a in self.solution_path],
            "type_b_count": sum(1 for a in self.solution_path if a.action_type.name == "SIDE_GATE"),
        }

    def __repr__(self) -> str:
        return (
            f"SearchResult({self.algorithm_name}: cost={self.total_cost:.1f}, "
            f"len={self.path_length}, expanded={self.nodes_expanded}, "
            f"time={self.execution_time_ms:.2f}ms, mem={self.peak_memory_mb:.3f}MB)"
        )


class SearchAlgorithm(ABC):
    """
    Abstract base class for all search algorithms.
    """

    def __init__(self, name: str):
        self._name = name

    @property
    def name(self) -> str:
        return self._name

    def solve(self, initial_state: PuzzleState) -> SearchResult:
        """
        Execute search on initial state with runtime profiling and peak memory tracking.
        """
        tracemalloc.start()
        start_time = time.perf_counter()

        result = self._search(initial_state)

        elapsed_ms = (time.perf_counter() - start_time) * 1000.0
        current_mem, peak_mem = tracemalloc.get_traced_memory()
        tracemalloc.stop()

        peak_mb = peak_mem / (1024.0 * 1024.0)

        # Update metrics
        result.execution_time_ms = round(elapsed_ms, 3)
        result.peak_memory_mb = round(peak_mb, 4)
        return result

    @abstractmethod
    def _search(self, initial_state: PuzzleState) -> SearchResult:
        """Internal search implementation to be overridden by subclasses."""
        pass
