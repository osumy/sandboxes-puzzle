"""
A* Search implementation following Russell & Norvig AIMA.
Expands nodes in order of minimum f(n) = g(n) + h(n).
Guaranteed to return an optimal solution when used with an admissible and consistent heuristic.
"""

import heapq
from typing import Optional, Dict

from sandboxes_puzzle.algorithms.base import SearchAlgorithm, SearchResult, Node
from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv
from sandboxes_puzzle.heuristics.base import HeuristicFunction
from sandboxes_puzzle.heuristics.combined import CombinedHeuristic


class AStarSearch(SearchAlgorithm):
    """
    A* Graph Search algorithm.
    """

    def __init__(self, heuristic: Optional[HeuristicFunction] = None):
        super().__init__("A*")
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
        best_g: Dict[PuzzleState, float] = {initial_state: 0.0}

        nodes_expanded = 0
        nodes_generated = 1
        max_frontier_size = 1

        while frontier:
            if len(frontier) > max_frontier_size:
                max_frontier_size = len(frontier)

            f_val, _, node = heapq.heappop(frontier)

            # Prune obsolete frontier entries
            if node.path_cost > best_g[node.state]:
                continue

            # Goal test upon expansion (AIMA requirement for optimality)
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
                    h_val = self.heuristic(next_state)
                    new_f = round(new_g + h_val, 4)
                    entry_id += 1
                    child = Node(
                        state=next_state,
                        parent=node,
                        action=action,
                        path_cost=new_g,
                        depth=node.depth + 1,
                        f=new_f,
                    )
                    nodes_generated += 1
                    heapq.heappush(frontier, (new_f, entry_id, child))

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
