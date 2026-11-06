"""
Uniform-Cost Search (UCS / Dijkstra) implementation following Russell & Norvig AIMA.
Expands the node with lowest path cost g(n) from a priority queue.
Guaranteed to return an optimal (minimum total cost) solution.
"""

import heapq
from typing import Dict

from sandboxes_puzzle.algorithms.base import SearchAlgorithm, SearchResult, Node
from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv


class UniformCostSearch(SearchAlgorithm):
    """
    Uniform-Cost Search (Dijkstra's Algorithm on graphs).
    Finds the cost-optimal path from initial state to goal state.
    """

    def __init__(self):
        super().__init__("UCS")

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

        root = Node(state=initial_state, path_cost=0.0, depth=0, f=0.0)
        # Entry format: (g, entry_id, node)
        entry_id = 0
        frontier = [(0.0, entry_id, root)]
        best_g: Dict[PuzzleState, float] = {initial_state: 0.0}

        nodes_expanded = 0
        nodes_generated = 1
        max_frontier_size = 1

        while frontier:
            if len(frontier) > max_frontier_size:
                max_frontier_size = len(frontier)

            g, _, node = heapq.heappop(frontier)

            # Prune obsolete queue entries
            if g > best_g[node.state]:
                continue

            # Goal test upon expansion (AIMA requirement for optimal cost)
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

            nodes_expanded += 1

            for next_state, action, cost in SandboxesEnv.get_successors(node.state, prune_noops=True):
                new_g = round(node.path_cost + cost, 4)
                if next_state not in best_g or new_g < best_g[next_state]:
                    best_g[next_state] = new_g
                    entry_id += 1
                    child = Node(
                        state=next_state,
                        parent=node,
                        action=action,
                        path_cost=new_g,
                        depth=node.depth + 1,
                        f=new_g,
                    )
                    nodes_generated += 1
                    heapq.heappush(frontier, (new_g, entry_id, child))

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
