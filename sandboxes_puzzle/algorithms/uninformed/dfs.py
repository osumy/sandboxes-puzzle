"""
Depth-First Search (DFS) implementation with cycle checking following Russell & Norvig AIMA.
Uses a LIFO stack to explore deep paths while checking against cycles along current branch.
"""

from typing import List, Set

from sandboxes_puzzle.algorithms.base import SearchAlgorithm, SearchResult, Node
from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv


class DepthFirstSearch(SearchAlgorithm):
    """
    Depth-First Search (DFS) with path-based cycle detection.
    """

    def __init__(self, max_depth: int = 50):
        super().__init__("DFS")
        self.max_depth = max_depth

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

        root = Node(state=initial_state, path_cost=0.0, depth=0)
        # Stack entries: (node, path_set)
        frontier: List[Node] = [root]
        nodes_expanded = 0
        nodes_generated = 1
        max_frontier_size = 1

        # Closed set for efficient graph search or cycle check
        visited: Set[PuzzleState] = set()

        while frontier:
            if len(frontier) > max_frontier_size:
                max_frontier_size = len(frontier)

            node = frontier.pop()

            if node.state.is_goal:
                return SearchResult(
                    algorithm_name=self.name,
                    solution_path=node.get_path(),
                    state_path=node.get_state_path(),
                    total_cost=node.path_cost,
                    nodes_expanded=nodes_expanded,
                    nodes_generated=nodes_generated,
                    max_frontier_size=max_frontier_size,
                    execution_time_ms=0.0,
                    peak_memory_mb=0.0,
                    is_goal_found=True,
                )

            if node.state in visited:
                continue
            visited.add(node.state)
            nodes_expanded += 1

            if node.depth >= self.max_depth:
                continue

            for next_state, action, cost in SandboxesEnv.get_successors(node.state, prune_noops=True):
                # Cycle check: ensure not in ancestors along path
                is_cycle = False
                curr: Optional[Node] = node
                while curr is not None:
                    if curr.state == next_state:
                        is_cycle = True
                        break
                    curr = curr.parent

                if not is_cycle and next_state not in visited:
                    child = Node(
                        state=next_state,
                        parent=node,
                        action=action,
                        path_cost=node.path_cost + cost,
                        depth=node.depth + 1,
                    )
                    nodes_generated += 1
                    frontier.append(child)

        return SearchResult(
            algorithm_name=self.name,
            solution_path=[],
            state_path=[initial_state],
            total_cost=0.0,
            nodes_expanded=nodes_expanded,
            nodes_generated=nodes_generated,
            max_frontier_size=max_frontier_size,
            execution_time_ms=0.0,
            peak_memory_mb=0.0,
            is_goal_found=False,
        )
