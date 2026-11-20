"""
Effective Branching Factor (b*) calculation module.
Implements:
1. Slide 41 Formula (Professor's formulation):
   b* = N^(1/d) = d-th root of N
2. Russell & Norvig AIMA Standard Formula:
   N + 1 = 1 + b* + (b*)^2 + ... + (b*)^d
   solved numerically via root-finding (Brent's method).
"""

from typing import Dict, List, Tuple, Optional, Any
import math
import os
import json
from scipy.optimize import root_scalar
import numpy as np

from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv
from sandboxes_puzzle.algorithms.informed import AStarSearch, RecursiveBestFirstSearch
from sandboxes_puzzle.algorithms.uninformed import UniformCostSearch
from sandboxes_puzzle.heuristics import CombinedHeuristic, LearnedRegressionHeuristic, AdmissibleLearnedHeuristic
from sandboxes_puzzle.benchmarks.optimal_solver import BackwardOptimalSolver


def compute_b_star_slide(nodes_expanded: int, depth: int) -> float:
    """
    Compute Effective Branching Factor using Professor's Slide 41 formula:
        b* = N^(1/d)
        
    Args:
        nodes_expanded: Number of nodes expanded N
        depth: Solution path depth d (number of actions)
    """
    if depth <= 0:
        return 1.0
    if nodes_expanded <= 0:
        return 1.0
    return round(float(nodes_expanded ** (1.0 / depth)), 4)


def compute_b_star_aima(nodes_expanded: int, depth: int) -> float:
    """
    Compute Effective Branching Factor using standard Russell & Norvig AIMA formula:
        N + 1 = 1 + b* + (b*)^2 + ... + (b*)^d = ((b*)^(d+1) - 1) / (b* - 1)
        
    Solved using Brent's method.
    """
    if depth <= 0:
        return 1.0
    if nodes_expanded <= depth:
        return 1.0

    target = nodes_expanded + 1

    def f(b: float) -> float:
        if abs(b - 1.0) < 1e-9:
            return (depth + 1) - target
        return ((b ** (depth + 1) - 1.0) / (b - 1.0)) - target

    try:
        # Bracket between 1.0001 and 100.0
        sol = root_scalar(f, bracket=[1.0001, 100.0], method="brentq")
        if sol.converged:
            return round(float(sol.root), 4)
    except Exception:
        pass

    # Fallback to slide formula if root-finder fails
    return compute_b_star_slide(nodes_expanded, depth)


class EffectiveBranchingBenchmark:
    """
    Evaluates effective branching factor b* across search algorithms and heuristics.
    """

    def __init__(self, num_rows: int = 4):
        self.num_rows = num_rows
        self.h_relaxed = CombinedHeuristic()

        # Locate trained weights
        weights_file = os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            "heuristics",
            "data",
            f"learned_weights_n{num_rows}.json",
        )
        if os.path.exists(weights_file):
            self.h_learned = LearnedRegressionHeuristic(weights_path=weights_file, num_rows=num_rows)
        else:
            self.h_learned = LearnedRegressionHeuristic(num_rows=num_rows)

        self.h_admissible = AdmissibleLearnedHeuristic(self.h_learned, safety_scale=0.94)

    def evaluate_state(self, state: PuzzleState) -> Dict[str, Any]:
        """
        Evaluate a single state across UCS, A*(h3), A*(h_reg), A*(h_adm), and RBFS.
        Computes both b*_slide and b*_aima for each.
        """
        evaluations = {}

        # 1. A* with h3 (Relaxed)
        astar_h3 = AStarSearch(self.h_relaxed).solve(state)
        # 2. A* with h_reg (Learned Linear Regression)
        astar_reg = AStarSearch(self.h_learned).solve(state)
        # 3. A* with h_adm (Safety-scaled learned)
        astar_adm = AStarSearch(self.h_admissible).solve(state)
        # 4. RBFS with h3
        rbfs_h3 = RecursiveBestFirstSearch(self.h_relaxed).solve(state)
        # 5. RBFS with h_reg
        rbfs_reg = RecursiveBestFirstSearch(self.h_learned).solve(state)
        # 6. UCS (Uninformed baseline)
        ucs = UniformCostSearch().solve(state)

        runs = {
            "UCS": ucs,
            "A* (h3 Relaxed)": astar_h3,
            "A* (h_reg Learned)": astar_reg,
            "A* (h_adm Scaled)": astar_adm,
            "RBFS (h3 Relaxed)": rbfs_h3,
            "RBFS (h_reg Learned)": rbfs_reg,
        }

        depth = astar_h3.path_length if astar_h3.is_goal_found else 1

        for name, res in runs.items():
            n_exp = res.nodes_expanded
            d = res.path_length if res.is_goal_found else depth
            b_slide = compute_b_star_slide(n_exp, d)
            b_aima = compute_b_star_aima(n_exp, d)

            evaluations[name] = {
                "nodes_expanded": n_exp,
                "nodes_generated": res.nodes_generated,
                "depth": d,
                "cost": res.total_cost,
                "time_ms": res.execution_time_ms,
                "b_star_slide": b_slide,
                "b_star_aima": b_aima,
            }

        return {
            "initial_state": state.to_list(),
            "optimal_cost": astar_h3.total_cost,
            "depth": depth,
            "algorithms": evaluations,
        }

    def run_depth_stratified_benchmark(self) -> List[Dict[str, Any]]:
        """
        Benchmark b* across multiple problem depths (d = 2, 4, 6, 8, 10).
        """
        results = []

        # 1. Professor's benchmark state
        bench_state = SandboxesEnv.get_professor_benchmark_state()
        bench_res = self.evaluate_state(bench_state)
        bench_res["label"] = f"Professor Benchmark State (d={bench_res['depth']})"
        results.append(bench_res)

        # 2. Select states of different depths
        solver = BackwardOptimalSolver(num_rows=self.num_rows)
        opt_costs = solver.compute_all_optimal_costs()
        goal_tuple = tuple([0] * (2 * self.num_rows))

        # Helper to find depth of state
        def get_successors_int(u):
            succs = []
            for c in (0, 1):
                s = u[c]
                if s > 0:
                    v = list(u)
                    v[c] = 0
                    succs.append((tuple(v), 1 + 2 * s))
            for r in range(1, self.num_rows):
                for c in (0, 1):
                    s = u[2 * r + c]
                    l = u[2 * (r - 1) + c]
                    if s > 0 and l < 2:
                        amt = min(s, 2 - l)
                        v = list(u)
                        v[2 * r + c] = s - amt
                        v[2 * (r - 1) + c] = l + amt
                        succs.append((tuple(v), 1 + 2 * (s + s - amt)))
            for r in range(self.num_rows):
                c0, c1 = u[2 * r], u[2 * r + 1]
                if (c0 == 2 and c1 == 0) or (c0 == 0 and c1 == 2):
                    v = list(u)
                    v[2 * r], v[2 * r + 1] = 1, 1
                    succs.append((tuple(v), 1))
            return succs

        depth_map: Dict[Tuple[int, ...], int] = {goal_tuple: 0}

        def get_depth(u):
            if u in depth_map:
                return depth_map[u]
            u_cost = opt_costs.get(u, 1e9)
            best_d = 1e9
            for v, c_step in get_successors_int(u):
                if abs(u_cost - (c_step + opt_costs.get(v, 1e9))) < 1e-4:
                    d_v = get_depth(v)
                    if d_v + 1 < best_d:
                        best_d = d_v + 1
            res = best_d if best_d < 1e8 else 1
            depth_map[u] = res
            return res

        # Sample states for target depths: 2, 4, 6, 8
        target_depths = [2, 4, 6, 8]
        found_states = {}
        for s_tup in opt_costs.keys():
            if s_tup == goal_tuple:
                continue
            d = get_depth(s_tup)
            if d in target_depths and d not in found_states:
                found_states[d] = s_tup
            if len(found_states) == len(target_depths):
                break

        for d in sorted(found_states.keys()):
            s_tup = found_states[d]
            grid = tuple((s_tup[2 * r] * 0.5, s_tup[2 * r + 1] * 0.5) for r in range(self.num_rows))
            st = PuzzleState(grid)
            eval_res = self.evaluate_state(st)
            eval_res["label"] = f"Stratified State (d={d})"
            results.append(eval_res)

        return results


if __name__ == "__main__":
    benchmark = EffectiveBranchingBenchmark(num_rows=4)
    results = benchmark.run_depth_stratified_benchmark()
    for r in results:
        print("\n" + "=" * 76)
        print(f" {r['label']} | Optimal Cost: {r['optimal_cost']} | Depth: {r['depth']}")
        print("=" * 76)
        print(f"{'Algorithm':<22} | {'Nodes Exp':^10} | {'Nodes Gen':^10} | {'b* (Slide 41)':^14} | {'b* (AIMA)':^12}")
        print("-" * 76)
        for name, data in r['algorithms'].items():
            print(f"{name:<22} | {data['nodes_expanded']:^10} | {data['nodes_generated']:^10} | {data['b_star_slide']:^14.3f} | {data['b_star_aima']:^12.3f}")
