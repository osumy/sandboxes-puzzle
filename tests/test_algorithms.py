"""
Unit tests for search algorithms (Requirement R2).
Verifies that all 7 algorithms (BFS, DFS, UCS, IDS, Greedy, A*, RBFS) execute,
avoid cycles, find valid goal states, and that UCS and A* consistently return identical optimal costs.
"""

import pytest
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


@pytest.fixture
def small_puzzle_state():
    # 3-row solvable puzzle
    return PuzzleState([
        (1.0, 0.0),
        (0.0, 0.5),
        (0.5, 0.0),
    ])


@pytest.fixture
def empty_state():
    return PuzzleState.empty(3)


class TestSearchAlgorithmsCorrectness:
    """Tests the execution and termination of all 7 algorithms."""

    def test_immediate_goal(self, empty_state):
        algos = [
            BreadthFirstSearch(),
            DepthFirstSearch(),
            UniformCostSearch(),
            IterativeDeepeningSearch(max_limit=5),
            GreedyBestFirstSearch(),
            AStarSearch(),
            RecursiveBestFirstSearch(),
        ]
        for algo in algos:
            res = algo.solve(empty_state)
            assert res.is_goal_found, f"{algo.name} failed on empty state"
            assert res.total_cost == 0.0
            assert len(res.solution_path) == 0

    def test_all_seven_algorithms_solve_small_puzzle(self, small_puzzle_state):
        algos = [
            BreadthFirstSearch(),
            DepthFirstSearch(max_depth=20),
            UniformCostSearch(),
            IterativeDeepeningSearch(max_limit=15),
            GreedyBestFirstSearch(),
            AStarSearch(),
            RecursiveBestFirstSearch(),
        ]

        solutions = {}
        for algo in algos:
            res = algo.solve(small_puzzle_state)
            assert res.is_goal_found, f"{algo.name} failed to find goal"
            assert res.path_length > 0
            assert res.total_cost > 0.0
            assert res.nodes_expanded > 0

            # Verify action sequence execution in environment reaches goal
            env = SandboxesEnv(small_puzzle_state)
            for action in res.solution_path:
                env.step(action)
            assert env.is_goal(), f"{algo.name} solution path did not reach goal"
            assert abs(env.cumulative_cost - res.total_cost) < 1e-4

            solutions[algo.name] = res

        # Critical acceptance requirement: UCS and A* return IDENTICAL optimal cost
        ucs_cost = solutions["UCS"].total_cost
        astar_cost = solutions["A*"].total_cost
        assert abs(ucs_cost - astar_cost) < 1e-4, f"UCS ({ucs_cost}) != A* ({astar_cost})"

        # A* expands <= UCS nodes due to informed heuristic pruning
        assert solutions["A*"].nodes_expanded <= solutions["UCS"].nodes_expanded

    def test_professor_benchmark_optimal_solver(self):
        bench = SandboxesEnv.get_professor_benchmark_state()
        ucs = UniformCostSearch()
        astar = AStarSearch()

        res_ucs = ucs.solve(bench)
        res_astar = astar.solve(bench)

        assert res_ucs.is_goal_found
        assert res_astar.is_goal_found
        assert abs(res_ucs.total_cost - res_astar.total_cost) < 1e-4
        assert res_astar.nodes_expanded < res_ucs.nodes_expanded
