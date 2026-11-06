"""
Breadth-First Search (BFS) implementation following Russell & Norvig AIMA.
Uses a FIFO queue to find the shallowest solution (minimal action count).
"""

from collections import deque
from typing import Set

from sandboxes_puzzle.algorithms.base import SearchAlgorithm, SearchResult, Node
from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv


class BreadthFirstSearch(SearchAlgorithm):
    """
    Breadth-First Search (BFS) algorithm.
    Explores shallowest unexpanded nodes first using a FIFO queue.
    """

    def __init__(self):
        super().__init__("BFS")

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
        frontier = deque([root])
        reached: Set[PuzzleState] = {initial_state}

        nodes_expanded = 0
        nodes_generated = 1
        max_frontier_size = 1

        while frontier:
            if len(frontier) > max_frontier_size:
                max_frontier_size = len(frontier)

            node = frontier.popleft()
            nodes_expanded += 1

            for next_state, action, cost in SandboxesEnv.get_successors(node.state, prune_noops=True):
                if next_state not in reached:
                    child = Node(
                        state=next_state,
                        parent=node,
                        action=action,
                        path_cost=node.path_cost + cost,
                        depth=node.depth + 1,
                    )
                    nodes_generated += 1

                    # Early goal test upon generation (AIMA standard for BFS)
                    if next_state.is_goal:
                        return SearchResult(
                            algorithm_name=self.name,
                            solution_path=child.get_path(),
                            state_path=child.get_state_path(),
                            total_cost=child.path_cost,
                            nodes_expanded=nodes_expanded,
                            nodes_generated=nodes_generated,
                            max_frontier_size=max_frontier_size,
                            execution_time_ms=0.0,
                            peak_memory_mb=0.0,
                            is_goal_found=True,
                        )

                    reached.add(next_state)
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
