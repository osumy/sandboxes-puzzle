"""
Greedy Best-First Search implementation following Russell & Norvig AIMA.
Expands the node that appears closest to goal according to heuristic evaluation h(n).
"""

import heapq
from typing import Optional, Set

from sandboxes_puzzle.algorithms.base import SearchAlgorithm, SearchResult, Node
from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv
from sandboxes_puzzle.heuristics.base import HeuristicFunction
from sandboxes_puzzle.heuristics.combined import CombinedHeuristic


class GreedyBestFirstSearch(SearchAlgorithm):
    """
    Greedy Best-First Search.
    Priority queue ordered exclusively by h(n).
    """

    def __init__(self, heuristic: Optional[HeuristicFunction] = None):
        super().__init__("Greedy")
        self.heuristic = heuristic if heuristic is not None else CombinedHeuristic()

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

        h_root = self.heuristic(initial_state)
        root = Node(state=initial_state, path_cost=0.0, depth=0, f=h_root)
        entry_id = 0
        frontier = [(h_root, entry_id, root)]
        visited: Set[PuzzleState] = set()

        nodes_expanded = 0
        nodes_generated = 1
        max_frontier_size = 1

        while frontier:
            if len(frontier) > max_frontier_size:
                max_frontier_size = len(frontier)

            _, _, node = heapq.heappop(frontier)

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

            for next_state, action, cost in SandboxesEnv.get_successors(node.state, prune_noops=True):
                if next_state not in visited:
                    h_val = self.heuristic(next_state)
                    entry_id += 1
                    child = Node(
                        state=next_state,
                        parent=node,
                        action=action,
                        path_cost=node.path_cost + cost,
                        depth=node.depth + 1,
                        f=h_val,
                    )
                    nodes_generated += 1
                    heapq.heappush(frontier, (h_val, entry_id, child))

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
