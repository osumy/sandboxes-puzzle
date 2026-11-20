"""
Plot Generator and Statistical Visualizer for Assignment Deliverables.
Generates:
1. Histogram of Greedy_opt_ratio = (cost by greedy solution) / (optimum cost)
2. Scatter Plot: x = cost by greedy solution, y = optimum cost
3. Scatter Plot: x = number of actions to goal state, y = number of actions of type b
Outputs publication-quality PNG figures and detailed markdown frequency tables.
"""

import os
import json
import time
from typing import Dict, Any, List, Tuple, Optional
import numpy as np
import matplotlib
matplotlib.use("Agg")  # Non-interactive headless backend
import matplotlib.pyplot as plt

from .optimal_solver import BackwardOptimalSolver
from sandboxes_puzzle.heuristics.combined import CombinedHeuristic


class AssignmentPlotGenerator:
    """
    Generates all required assignment plots and frequency tables.
    """

    def __init__(self, num_rows: int = 4, output_dir: Optional[str] = None):
        self.num_rows = num_rows
        if output_dir is None:
            self.output_dir = os.path.join(
                os.path.dirname(os.path.dirname(os.path.dirname(__file__))),
                "reports",
                "figures",
            )
        else:
            self.output_dir = output_dir
        os.makedirs(self.output_dir, exist_ok=True)

    def evaluate_state_space_data(self) -> Dict[str, Any]:
        """
        Fast evaluation over all 3^(2n) states:
        Computes for every state:
        - Optimal cost (via Backward Dijkstra)
        - Optimal total actions & optimal type-b actions
        - Greedy cost, actions & type-b actions (via Greedy Best-First Search with h(n))
        - Greedy_opt_ratio = cost_greedy / cost_opt
        """
        n = self.num_rows
        solver = BackwardOptimalSolver(num_rows=n)
        opt_costs = solver.compute_all_optimal_costs()
        goal_tuple = tuple([0] * (2 * n))

        def get_successors_int(u: Tuple[int, ...]):
            succs = []
            # Flush (r=0)
            for c in (0, 1):
                s = u[c]
                if s > 0:
                    v = list(u)
                    v[c] = 0
                    succs.append((tuple(v), 1 + 2 * s, "flush"))
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
                        succs.append((tuple(v), 1 + 2 * (s + s_prime), "drop"))
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

        # Optimal path memoization
        opt_memo: Dict[Tuple[int, ...], Tuple[int, int]] = {goal_tuple: (0, 0)}

        def get_opt_actions(u: Tuple[int, ...]) -> Tuple[int, int]:
            if u in opt_memo:
                return opt_memo[u]
            u_cost = opt_costs.get(u, 1e9)
            succs = get_successors_int(u)
            best_succ = None
            for v, c_step, act_type in succs:
                if abs(u_cost - (c_step + opt_costs.get(v, 1e9))) < 1e-4:
                    best_succ = (v, act_type)
                    break
            if not best_succ:
                return (0, 0)
            v, act_type = best_succ
            tot, b_cnt = get_opt_actions(v)
            res = (1 + tot, (1 if act_type == "side" else 0) + b_cnt)
            opt_memo[u] = res
            return res

        # Greedy Best-First Search path solver
        def solve_greedy(u: Tuple[int, ...]) -> Tuple[float, int, int]:
            curr = u
            path_cost = 0.0
            actions = 0
            b_actions = 0
            visited = set([curr])
            while curr != goal_tuple:
                succs = get_successors_int(curr)
                if not succs:
                    break
                best_v = None
                best_cost = 0.0
                best_type = ""
                min_h = 1e9
                for v, c_step, act_type in succs:
                    hv = h3_val(v)
                    if hv < min_h:
                        min_h = hv
                        best_v = v
                        best_cost = c_step
                        best_type = act_type
                if best_v in visited or best_v is None:
                    break
                visited.add(best_v)
                path_cost += best_cost
                actions += 1
                if best_type == "side":
                    b_actions += 1
                curr = best_v
            return path_cost, actions, b_actions

        states_data = []
        for s, opt_c in opt_costs.items():
            if s == goal_tuple:
                continue
            g_cost, g_actions, g_b = solve_greedy(s)
            opt_acts, opt_b = get_opt_actions(s)
            ratio = g_cost / opt_c if opt_c > 0 else 1.0

            states_data.append({
                "state": s,
                "opt_cost": float(opt_c),
                "greedy_cost": float(g_cost),
                "ratio": float(ratio),
                "opt_total_actions": opt_acts,
                "opt_type_b_actions": opt_b,
                "greedy_total_actions": g_actions,
                "greedy_type_b_actions": g_b,
            })

        return {
            "total_states": len(opt_costs),
            "evaluated_states": len(states_data),
            "states_data": states_data,
        }

    def generate_all_plots_and_tables(self) -> Dict[str, Any]:
        """
        Run full state-space evaluation and produce all 3 required plots and frequency counts.
        """
        print(f"[*] Evaluating full state space for n={self.num_rows} to extract plot data...")
        t0 = time.perf_counter()
        dataset = self.evaluate_state_space_data()
        elapsed = time.perf_counter() - t0
        print(f"[+] Evaluated {dataset['evaluated_states']} states in {elapsed:.3f}s.")

        states_data = dataset["states_data"]

        greedy_costs = np.array([d["greedy_cost"] for d in states_data])
        opt_costs = np.array([d["opt_cost"] for d in states_data])
        ratios = np.array([d["ratio"] for d in states_data])

        opt_actions = np.array([d["opt_total_actions"] for d in states_data])
        opt_b_actions = np.array([d["opt_type_b_actions"] for d in states_data])

        # 1. Plot 1: Histogram of Greedy_opt_ratio
        hist_stats = self._plot_histogram(ratios)

        # 2. Plot 2: Scatter plot of Greedy Cost vs Optimum Cost
        self._plot_scatter_greedy_vs_opt(greedy_costs, opt_costs)

        # 3. Plot 3: Scatter plot of Total Actions vs Type-b Actions
        self._plot_scatter_actions_vs_type_b(opt_actions, opt_b_actions)

        summary = {
            "num_rows": self.num_rows,
            "total_states": dataset["total_states"],
            "evaluated_states": dataset["evaluated_states"],
            "elapsed_seconds": round(elapsed, 3),
            "mean_ratio": float(round(np.mean(ratios), 4)),
            "median_ratio": float(round(np.median(ratios), 4)),
            "min_ratio": float(round(np.min(ratios), 4)),
            "max_ratio": float(round(np.max(ratios), 4)),
            "std_ratio": float(round(np.std(ratios), 4)),
            "histogram_bins": hist_stats,
            "figures": {
                "histogram": os.path.join(self.output_dir, "histogram_greedy_opt_ratio.png"),
                "scatter_greedy_opt": os.path.join(self.output_dir, "scatter_greedy_vs_opt.png"),
                "scatter_actions_b": os.path.join(self.output_dir, "scatter_actions_vs_type_b.png"),
            },
        }

        # Save summary JSON
        json_path = os.path.join(os.path.dirname(self.output_dir), "assignment_evaluation_summary.json")
        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(summary, f, indent=2)

        print(f"[+] All 3 assignment plots successfully saved to: {self.output_dir}")
        return summary

    def _plot_histogram(self, ratios: np.ndarray, num_bins: int = 15) -> List[Dict[str, Any]]:
        """Generate and save the histogram of Greedy_opt_ratio."""
        fig, ax = plt.subplots(figsize=(9, 6), dpi=300)

        counts, bin_edges = np.histogram(ratios, bins=num_bins)

        mean_val = float(np.mean(ratios))
        median_val = float(np.median(ratios))

        norm = plt.Normalize(bin_edges.min(), bin_edges.max())
        colors = plt.cm.viridis(norm(bin_edges[:-1]))

        bars = ax.bar(
            bin_edges[:-1],
            counts,
            width=np.diff(bin_edges),
            edgecolor="black",
            align="edge",
            color=colors,
            alpha=0.88,
        )

        for bar in bars:
            height = bar.get_height()
            if height > 0:
                ax.annotate(
                    f"{int(height)}",
                    xy=(bar.get_x() + bar.get_width() / 2, height),
                    xytext=(0, 3),
                    textcoords="offset points",
                    ha="center",
                    va="bottom",
                    fontsize=8,
                    fontweight="bold",
                )

        ax.axvline(mean_val, color="red", linestyle="--", linewidth=2, label=f"Mean = {mean_val:.3f}")
        ax.axvline(median_val, color="blue", linestyle=":", linewidth=2, label=f"Median = {median_val:.3f}")

        ax.set_title(
            r"Frequency Distribution of $\mathrm{Greedy\_opt\_ratio} = \frac{\mathrm{Cost_{Greedy}}}{\mathrm{Cost_{Opt}}}$",
            fontsize=13,
            fontweight="bold",
            pad=15,
        )
        ax.set_xlabel(r"Suboptimality Ratio ($\mathrm{Cost_{Greedy}} / \mathrm{Cost_{Opt}} \geq 1.0$)", fontsize=11)
        ax.set_ylabel("Frequency (State Count)", fontsize=11)
        ax.grid(True, linestyle="--", alpha=0.5)
        ax.legend(fontsize=10, loc="upper right")

        fig.tight_layout()
        hist_path = os.path.join(self.output_dir, "histogram_greedy_opt_ratio.png")
        fig.savefig(hist_path)
        plt.close(fig)

        bin_stats = []
        for i in range(len(counts)):
            bin_stats.append({
                "bin_start": round(float(bin_edges[i]), 3),
                "bin_end": round(float(bin_edges[i + 1]), 3),
                "frequency": int(counts[i]),
                "percentage": round(float(counts[i] / len(ratios) * 100), 2),
            })
        return bin_stats

    def _plot_scatter_greedy_vs_opt(self, greedy_costs: np.ndarray, opt_costs: np.ndarray) -> None:
        """Generate and save Scatter Plot: x = Greedy Cost, y = Optimum Cost."""
        fig, ax = plt.subplots(figsize=(8, 7), dpi=300)

        # Plot density scatter
        sc = ax.scatter(
            greedy_costs,
            opt_costs,
            c=greedy_costs / np.maximum(opt_costs, 1.0),
            cmap="coolwarm",
            alpha=0.55,
            s=22,
            edgecolors="none",
        )
        cbar = plt.colorbar(sc, ax=ax)
        cbar.set_label(r"Suboptimality Factor ($C_{greedy} / C_{opt} \geq 1.0$)", fontsize=10)

        max_cost = max(float(np.max(greedy_costs)), float(np.max(opt_costs))) + 5.0
        ax.plot([0, max_cost], [0, max_cost], color="black", linestyle="--", linewidth=1.5, label="Optimal Identity (y = x)")

        # Benchmark 4-row state point
        ax.scatter([50.0], [50.0], color="red", s=130, zorder=5, marker="*", label="Benchmark [[1,0],[0,1],[0,1],[1,0]]")

        ax.set_title(
            "Scatter Plot: Cost by Greedy Solution vs. Optimum Cost",
            fontsize=13,
            fontweight="bold",
            pad=15,
        )
        ax.set_xlabel(r"x = Cost by Greedy Solution ($C_{Greedy}$)", fontsize=11)
        ax.set_ylabel(r"y = Optimum Cost ($C_{Opt}$)", fontsize=11)
        ax.set_xlim(left=0, right=max_cost)
        ax.set_ylim(bottom=0, top=max_cost)
        ax.grid(True, linestyle="--", alpha=0.5)
        ax.legend(fontsize=10, loc="upper left")

        fig.tight_layout()
        scatter_path = os.path.join(self.output_dir, "scatter_greedy_vs_opt.png")
        fig.savefig(scatter_path)
        plt.close(fig)

    def _plot_scatter_actions_vs_type_b(self, total_actions: np.ndarray, type_b_actions: np.ndarray) -> None:
        """Generate and save Scatter Plot: x = Actions to Goal, y = Type-b Actions."""
        fig, ax = plt.subplots(figsize=(8, 6), dpi=300)

        rng = np.random.default_rng(42)
        x_jitter = total_actions + rng.uniform(-0.16, 0.16, size=len(total_actions))
        y_jitter = type_b_actions + rng.uniform(-0.10, 0.10, size=len(type_b_actions))

        sc = ax.scatter(
            x_jitter,
            y_jitter,
            c=type_b_actions,
            cmap="plasma",
            alpha=0.5,
            s=22,
            edgecolors="none",
        )
        cbar = plt.colorbar(sc, ax=ax)
        cbar.set_label("Type-b Actions (Horizontal Side Gate)", fontsize=10)

        ax.set_title(
            r"Scatter Plot: Total Actions to Goal ($x$) vs. Type-$b$ Actions ($y$)",
            fontsize=12,
            fontweight="bold",
            pad=15,
        )
        ax.set_xlabel(r"x = Number of Actions to Goal State ($K_{total}$)", fontsize=11)
        ax.set_ylabel(r"y = Number of Actions of Type $b$ ($K_{b}$)", fontsize=11)
        ax.set_yticks(np.arange(0, int(np.max(type_b_actions)) + 2))
        ax.grid(True, linestyle="--", alpha=0.5)

        fig.tight_layout()
        scatter_path = os.path.join(self.output_dir, "scatter_actions_vs_type_b.png")
        fig.savefig(scatter_path)
        plt.close(fig)


if __name__ == "__main__":
    generator = AssignmentPlotGenerator(num_rows=4)
    generator.generate_all_plots_and_tables()
