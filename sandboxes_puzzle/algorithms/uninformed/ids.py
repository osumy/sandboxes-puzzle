"""
Iterative Deepening Search (IDS) implementation following Russell & Norvig AIMA.
Repeatedly applies depth-limited search with increasing depth limits.
Guarantees finding the shallowest goal in unweighted step counts while maintaining linear memory.
"""

from typing import Optional, Tuple, Dict

from sandboxes_puzzle.algorithms.base import SearchAlgorithm, SearchResult, Node
from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv


class IterativeDeepeningSearch(SearchAlgorithm):
    """
    Iterative Deepening Search (IDS).
    """

    def __init__(self, max_limit: int = 40):
        super().__init__("IDS")
        self.max_limit = max_limit

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

        total_nodes_expanded = 0
        total_nodes_generated = 1
        overall_max_frontier = 1

        for limit in range(self.max_limit + 1):
            root = Node(state=initial_state, path_cost=0.0, depth=0)
            goal_node, expanded, generated, max_front, cutoff = self._dls(root, limit)

            total_nodes_expanded += expanded
            total_nodes_generated += generated
            if max_front > overall_max_frontier:
                overall_max_frontier = max_front

            if goal_node is not None:
                return SearchResult(
                    algorithm_name=self.name,
                    solution_path=goal_node.get_path(),
                    state_path=goal_node.get_state_path(),
                    total_cost=goal_node.path_cost,
                    nodes_expanded=total_nodes_expanded,
                    nodes_generated=total_nodes_generated,
                    max_frontier_size=overall_max_frontier,
                    execution_time_ms=0.0,
                    peak_memory_mb=0.0,
                    is_goal_found=True,
                )

            if not cutoff:
                # Entire reachable state space under limit was explored without cutoff -> failure
                break

        return SearchResult(
            algorithm_name=self.name,
            solution_path=[],
            state_path=[initial_state],
            total_cost=0.0,
            nodes_expanded=total_nodes_expanded,
            nodes_generated=total_nodes_generated,
            max_frontier_size=overall_max_frontier,
            execution_time_ms=0.0,
            peak_memory_mb=0.0,
            is_goal_found=False,
        )

    def _dls(
        self, root: Node, limit: int
    ) -> Tuple[Optional[Node], int, int, int, bool]:
        """
        Depth-Limited Search subroutine with depth-pruned graph search.
        Returns: (goal_node_or_none, expanded, generated, max_frontier, cutoff_occurred)
        """
        frontier = [root]
        best_depth: Dict[PuzzleState, int] = {root.state: 0}
        expanded = 0
        generated = 0
        max_frontier = 1
        cutoff = False

        while frontier:
            if len(frontier) > max_frontier:
                max_frontier = len(frontier)

            node = frontier.pop()

            if node.state.is_goal:
                return node, expanded, generated, max_frontier, False

            if node.depth >= limit:
                cutoff = True
                continue

            expanded += 1

            for next_state, action, cost in SandboxesEnv.get_successors(node.state, prune_noops=True):
                nxt_depth = node.depth + 1
                if next_state not in best_depth or nxt_depth < best_depth[next_state]:
                    best_depth[next_state] = nxt_depth
                    child = Node(
                        state=next_state,
                        parent=node,
                        action=action,
                        path_cost=node.path_cost + cost,
                        depth=nxt_depth,
                    )
                    generated += 1
                    frontier.append(child)

        return None, expanded, generated, max_frontier, cutoff
