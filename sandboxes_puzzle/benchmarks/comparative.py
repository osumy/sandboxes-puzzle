"""
Comparative benchmark harness evaluating all 7 search algorithms.
Compares BFS, DFS, UCS, IDS, Greedy, A*, and RBFS across:
runtime (ms), peak memory (MB), nodes expanded, nodes generated, solution cost, and optimality.
"""

from typing import List, Dict, Any, Optional

from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv
from sandboxes_puzzle.algorithms.uninformed import (
    BreadthFirstSearch,
    DepthFirstSearch,
    UniformCostSearch,
    IterativeDeepeningSearch,
)
from sandboxes_puzzle.algorithms.informed import (
    GreedyBestFirstSearch,
    AStarSearch,
    RecursiveBestFirstSearch,
)
from sandboxes_puzzle.heuristics import CombinedHeuristic
from .optimal_solver import BackwardOptimalSolver
from .state_space import StateSpace


class ComparativeBenchmark:
    """
    Executes all 7 algorithms on benchmark states and compiles statistical aggregations.
    """

    def __init__(self, sample_size: int = 15, num_rows: int = 5, seed: int = 42):
        self.sample_size = sample_size
        self.num_rows = num_rows
        self.seed = seed
        self.heuristic = CombinedHeuristic()
        self.optimal_solver = BackwardOptimalSolver(num_rows=num_rows)

        # Initialize the 7 algorithms
        self.algorithms = [
            BreadthFirstSearch(),
            DepthFirstSearch(max_depth=35),
            UniformCostSearch(),
            IterativeDeepeningSearch(max_limit=14),
            GreedyBestFirstSearch(self.heuristic),
            AStarSearch(self.heuristic),
            RecursiveBestFirstSearch(self.heuristic, max_expansions=15000),
        ]

    def run_benchmark(self, custom_states: Optional[List[PuzzleState]] = None) -> List[Dict[str, Any]]:
        """
        Run all algorithms on the benchmark states.
        
        Returns:
            List of summary dictionaries for each algorithm.
        """
        if custom_states is not None:
            states = custom_states
        else:
            space = StateSpace(num_rows=self.num_rows)
            states = space.sample_states(sample_size=self.sample_size, seed=self.seed)

        # Ground truth optimal costs from ultra-fast Backward Dijkstra (instantaneous lookup)
        optimal_costs = [self.optimal_solver.get_optimal_cost(s) for s in states]

        summary_results: List[Dict[str, Any]] = []

        for algo in self.algorithms:
            times_ms: List[float] = []
            mems_mb: List[float] = []
            expanded_list: List[int] = []
            generated_list: List[int] = []
            costs: List[float] = []
            lengths: List[int] = []
            optimal_matches: int = 0

            for idx, s in enumerate(states):
                res = algo.solve(s)
                opt = optimal_costs[idx]
                cost = res.total_cost if res.is_goal_found else opt
                length = res.path_length if res.is_goal_found else 0

                times_ms.append(res.execution_time_ms)
                mems_mb.append(res.peak_memory_mb)
                expanded_list.append(res.nodes_expanded)
                generated_list.append(res.nodes_generated)
                costs.append(cost)
                lengths.append(length)

                if res.is_goal_found and abs(res.total_cost - opt) < 1e-4:
                    optimal_matches += 1

            n_samples = len(states)
            summary_results.append({
                "algorithm": algo.name,
                "mean_time_ms": round(sum(times_ms) / n_samples, 2),
                "mean_peak_memory_mb": round(sum(mems_mb) / n_samples, 4),
                "mean_nodes_expanded": round(sum(expanded_list) / n_samples, 1),
                "mean_nodes_generated": round(sum(generated_list) / n_samples, 1),
                "mean_cost": round(sum(costs) / n_samples, 2),
                "mean_length": round(sum(lengths) / n_samples, 2),
                "optimality_rate": round((optimal_matches / n_samples) * 100.0, 1),
                "optimal": (algo.name in ("UCS", "A*", "RBFS")),
            })

        return summary_results
