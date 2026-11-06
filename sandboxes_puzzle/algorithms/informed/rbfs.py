"""
Recursive Best-First Search (RBFS) implementation following Russell & Norvig AIMA.
Emulates best-first search while maintaining linear space O(b * d) by tracking an f-limit.
"""

from typing import Optional, Tuple, List
import math

from sandboxes_puzzle.algorithms.base import SearchAlgorithm, SearchResult, Node
from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv
from sandboxes_puzzle.heuristics.base import HeuristicFunction
from sandboxes_puzzle.heuristics.combined import CombinedHeuristic


class RecursiveBestFirstSearch(SearchAlgorithm):
    """
    Recursive Best-First Search (RBFS).
    """

    def __init__(self, heuristic: Optional[HeuristicFunction] = None):
        super().__init__("RBFS")
        self.heuristic = heuristic if heuristic is not None else CombinedHeuristic()
        self._nodes_expanded = 0
        self._nodes_generated = 0
        self._max_frontier = 0

    def _search(self, initial_state: PuzzleState) -> SearchResult:
        if initial_state.is_goal:
            return SearchResult(
                algorithm_name=self.name,
                solution_path=[],
                state_path=[initial_state],
                total_cost=0.0,
                nodes_expanded=0,
                nodes_generated=1,
                max_frontier_size=1,
                execution_time_ms=0.0,
                peak_memory_mb=0.0,
                is_goal_found=True,
            )

        self._nodes_expanded = 0
        self._nodes_generated = 1
        self._max_frontier = 1

        h_root = self.heuristic(initial_state)
        root = Node(state=initial_state, path_cost=0.0, depth=0, f=h_root)

        goal_node, _ = self._rbfs(root, f_limit=math.inf)

        if goal_node is not None:
            return SearchResult(
                algorithm_name=self.name,
                solution_path=goal_node.get_path(),
                state_path=goal_node.get_state_path(),
                total_cost=goal_node.path_cost,
                nodes_expanded=self._nodes_expanded,
                nodes_generated=self._nodes_generated,
                max_frontier_size=self._max_frontier,
                execution_time_ms=0.0,
                peak_memory_mb=0.0,
                is_goal_found=True,
            )

        return SearchResult(
            algorithm_name=self.name,
            solution_path=[],
            state_path=[initial_state],
            total_cost=0.0,
            nodes_expanded=self._nodes_expanded,
            nodes_generated=self._nodes_generated,
            max_frontier_size=self._max_frontier,
            execution_time_ms=0.0,
            peak_memory_mb=0.0,
            is_goal_found=False,
        )

    def _rbfs(self, node: Node, f_limit: float) -> Tuple[Optional[Node], float]:
        """
        Recursive core of RBFS.
        Returns: (solution_node_or_none, backed_up_f_value)
        """
        if node.state.is_goal:
            return node, node.f

        successors = SandboxesEnv.get_successors(node.state, prune_noops=True)
        if not successors:
            return None, math.inf

        self._nodes_expanded += 1

        # Generate children nodes
        children: List[Node] = []
        for next_state, action, cost in successors:
            # Cycle check against parent chain
            is_cycle = False
            curr: Optional[Node] = node
            while curr is not None:
                if curr.state == next_state:
                    is_cycle = True
                    break
                curr = curr.parent

            if not is_cycle:
                new_g = round(node.path_cost + cost, 4)
                h_val = self.heuristic(next_state)
                static_f = round(new_g + h_val, 4)
                # In RBFS: child.f = max(static_f, node.f)
                f_val = max(static_f, node.f)
                child = Node(
                    state=next_state,
                    parent=node,
                    action=action,
                    path_cost=new_g,
                    depth=node.depth + 1,
                    f=f_val,
                )
                children.append(child)
                self._nodes_generated += 1

        if not children:
            return None, math.inf

        if len(children) > self._max_frontier:
            self._max_frontier = len(children)

        # Loop until best child exceeds f_limit or goal is found
        while True:
            # Sort children by f-value
            children.sort(key=lambda c: c.f)
            best = children[0]

            if best.f > f_limit:
                return None, best.f

            # Second best f-value
            alternative = children[1].f if len(children) > 1 else math.inf

            # Recurse on best child with updated limit
            result, best.f = self._rbfs(best, min(f_limit, alternative))
            if result is not None:
                return result, best.f
