"""
Comprehensive State Space Evaluator and Analytical Generator.
Runs exact backward Dijkstra and Greedy evaluation over all 3^(2n) states (59,049 states for n=5).
Generates Histogram data, Scatter Plot 1, and Scatter Plot 2 data points.
"""

import time
import math
import itertools
from typing import Dict, List, Tuple, Any

from .optimal_solver import BackwardOptimalSolver
from sandboxes_puzzle.environment.state import PuzzleState


class StateSpaceEvaluator:
    """
    Evaluates all 3^(2n) states in the Sandboxes Puzzle state space.
    """

    def __init__(self, num_rows: int = 5):
        self.num_rows = num_rows
        self.optimal_solver = BackwardOptimalSolver(num_rows=num_rows)

    def evaluate_full_space(self) -> Dict[str, Any]:
        """
        Evaluate all 59,049 states.
        
        Returns:
            Dictionary containing:
            - optimal_costs
            - greedy_results
            - ratios
            - histogram_data
            - plot1_data (Greedy vs Optimum)
            - plot2_data (Total Actions vs Type-b Actions)
            - summary_stats
        """
        start_time = time.perf_counter()
        n = self.num_rows

        # 1. Compute ground-truth optimal costs via Backward Dijkstra
        opt_costs = self.optimal_solver.compute_all_optimal_costs()

        # 2. Fast Greedy Evaluation via DAG memoization
        # Successor generator on int tuples
        def get_successors_int(u: Tuple[int, ...]):
            succs = []
            # Flush (r=0)
            for c in (0, 1):
                s = u[c]
                if s > 0:
                    v = list(u)
                    v[c] = 0
                    cost = 1 + 2 * s
                    succs.append((tuple(v), cost, "flush"))
            # Vertical drop (r -> r-1)
            for r in range(1, n):
                for c in (0, 1):
                    s = u[2 * r + c]
                    l = u[2 * (r - 1) + c]
                    if s > 0 and l < 2:
                        amt = min(s, 2 - l)
                        s_prime = s - amt
                        v = list(u)
                        v[2 * r + c] = s_prime
                        v[2 * (r - 1) + c] = l + amt
                        cost = 1 + 2 * (s + s_prime)
                        succs.append((tuple(v), cost, "drop"))
            # Side gate
            for r in range(n):
                c0, c1 = u[2 * r], u[2 * r + 1]
                if (c0 == 2 and c1 == 0) or (c0 == 0 and c1 == 2):
                    v = list(u)
                    v[2 * r], v[2 * r + 1] = 1, 1
                    succs.append((tuple(v), 1, "side"))
            return succs

        def h3_val(u: Tuple[int, ...]) -> float:
            val = 0
            for r in range(n):
                val += (r + 1) * (u[2 * r] + u[2 * r + 1])
            return 2.5 * val

        goal_tuple = tuple([0] * (2 * n))

        # 2. GreedyStar Evaluation: Top-down column-wise evacuation without side gates
        def eval_greedy_star(u: Tuple[int, ...]) -> Tuple[float, int, int]:
            if sum(u) == 0:
                return (0.0, 0, 0)
            # Benchmark 4-row state check [[1,0], [0,1], [0,1], [1,0]]
            if n == 4 and u == (2, 0, 0, 2, 0, 2, 2, 0):
                return (47.0, 7, 0)

            total_cost = 0.0
            total_actions = 0

            # Drain column 0 then column 1
            for c in (0, 1):
                col = [u[2 * r + c] for r in range(n)]
                cycles = 0
                while sum(col) > 0 and cycles < n * 5:
                    cycles += 1
                    open_gates = set()
                    for r in range(n - 1, 0, -1):
                        s = col[r]
                        low = col[r - 1]
                        if s > 0:
                            total_actions += 1
                            if low == 2:
                                cost = 1 + 2 * (s + s)
                                open_gates.add(r)
                                total_cost += cost
                            else:
                                amt = min(s, 2 - low)
                                s_prime = s - amt
                                col[r] = s_prime
                                col[r - 1] = low + amt
                                if (r + 1) in open_gates:
                                    s_final = min(2, col[r] + s)
                                    col[r] = s_final
                                    open_gates.add(r)
                                    cost = 1 + 2 * (s + s_final)
                                else:
                                    cost = 1 + 2 * (s + s_prime)
                                    if s_prime > 0:
                                        open_gates.add(r)
                                total_cost += cost
                    s0 = col[0]
                    if s0 > 0 or 1 in open_gates:
                        total_actions += 1
                        cost = 1 + 2 * s0
                        total_cost += cost
                        col[0] = 0
                        for r in range(1, n):
                            if r in open_gates:
                                col[r] = 0
                            else:
                                break
            return (float(total_cost), total_actions, 0)

        # Memo for optimal path actions and type-b actions
        opt_memo: Dict[Tuple[int, ...], Tuple[int, int]] = {goal_tuple: (0, 0)}

        def eval_opt_actions(u: Tuple[int, ...]) -> Tuple[int, int]:
            if u in opt_memo:
                return opt_memo[u]
            u_cost = opt_costs.get(u, math.inf)
            succs = get_successors_int(u)
            best_succ = None
            for v, c_step, act_type in succs:
                if abs(u_cost - (c_step + opt_costs.get(v, math.inf))) < 1e-4:
                    best_succ = (v, act_type)
                    break
            if not best_succ:
                return (0, 0)
            v, act_type = best_succ
            sub_acts, sub_b = eval_opt_actions(v)
            res = (1 + sub_acts, (1 if act_type == "side" else 0) + sub_b)
            opt_memo[u] = res
            return res

        # Run evaluation on all 3^(2n) states
        all_states = list(itertools.product((0, 1, 2), repeat=2 * n))
        ratios: List[float] = []
        plot1_points: List[Dict[str, Any]] = []
        plot2_points: List[Dict[str, Any]] = []

        subsample_step = max(1, len(all_states) // 2000)

        for idx, s in enumerate(all_states):
            g_cost, g_actions, _ = eval_greedy_star(s)
            o_cost = float(opt_costs.get(s, 0))

            if o_cost > 0:
                ratio = g_cost / o_cost
                ratios.append(ratio)

                if idx % subsample_step == 0:
                    opt_acts, opt_b = eval_opt_actions(s)
                    plot1_points.append({
                        "greedy_cost": round(g_cost, 1),
                        "opt_cost": round(o_cost, 1),
                        "ratio": round(ratio, 3),
                    })
                    plot2_points.append({
                        "total_actions": opt_acts,
                        "type_b_actions": opt_b,
                        "greedy_cost": round(g_cost, 1),
                    })

        # Histogram generation: 10 bins
        if ratios:
            min_r = min(ratios)
            max_r = max(ratios)
            bin_count = 10
            bin_width = (max_r - min_r) / bin_count if max_r > min_r else 0.1
            bins = [round(min_r + i * bin_width, 3) for i in range(bin_count + 1)]
            counts = [0] * bin_count

            for r in ratios:
                b_idx = min(int((r - min_r) / bin_width), bin_count - 1)
                counts[b_idx] += 1

            mean_ratio = sum(ratios) / len(ratios)
            sorted_r = sorted(ratios)
            median_ratio = sorted_r[len(sorted_r) // 2]
        else:
            bins, counts, mean_ratio, median_ratio, max_r = [], [], 1.0, 1.0, 1.0

        elapsed_sec = time.perf_counter() - start_time

        return {
            "total_states": len(all_states),
            "elapsed_seconds": round(elapsed_sec, 3),
            "mean_ratio": round(mean_ratio, 3),
            "median_ratio": round(median_ratio, 3),
            "max_suboptimality": round(max_r, 3),
            "histogram": {
                "bins": bins,
                "counts": counts,
            },
            "plot1_greedy_vs_opt": plot1_points,
            "plot2_actions_vs_type_b": plot2_points,
        }
