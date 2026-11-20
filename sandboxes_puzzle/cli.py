"""
Command-Line Interface (CLI) for Sandboxes Puzzle.
Supports solving arbitrary configurations, running comparative benchmarks,
training learned heuristics via regression, evaluating effective branching factor b*,
generating assignment plots, and serving the standalone visualizer.
"""

import argparse
import sys
import os
from pathlib import Path

from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv
from sandboxes_puzzle.algorithms.uninformed import (
    BreadthFirstSearch,
    DepthFirstSearch,
    UniformCostSearch,
    IterativeDeepeningSearch,
)
from sandboxes_puzzle.algorithms.informed import (
    GreedyStarSearch,
    GreedyStar,
    GreedyBestFirstSearch,
    AStarSearch,
    RecursiveBestFirstSearch,
)
from sandboxes_puzzle.heuristics import (
    CombinedHeuristic,
    SandVolumeHeuristic,
    RowDistanceHeuristic,
    LearnedRegressionHeuristic,
    AdmissibleLearnedHeuristic,
)
from sandboxes_puzzle.benchmarks.evaluator import StateSpaceEvaluator
from sandboxes_puzzle.benchmarks.comparative import ComparativeBenchmark
from sandboxes_puzzle.benchmarks.effective_branching import EffectiveBranchingBenchmark
from sandboxes_puzzle.benchmarks.plot_generator import AssignmentPlotGenerator
from sandboxes_puzzle.heuristics.train_regression import run_full_training_pipeline
from sandboxes_puzzle.exporter.json_exporter import generate_and_export_all_data


def main():
    parser = argparse.ArgumentParser(
        description="Sandboxes Puzzle (معمای جعبه‌های شن) - AI Search & Benchmark Engine"
    )
    subparsers = parser.add_subparsers(dest="command", help="Available subcommands")

    # 1. Solve command
    solve_parser = subparsers.add_parser("solve", help="Solve a puzzle state with an algorithm")
    solve_parser.add_argument(
        "--algo",
        choices=["bfs", "dfs", "ucs", "ids", "greedy", "greedystar", "astar", "rbfs"],
        default="astar",
        help="Algorithm to execute (default: astar)",
    )
    solve_parser.add_argument(
        "--heuristic",
        choices=["relaxed", "learned", "admissible", "volume", "distance"],
        default="relaxed",
        help="Heuristic function for informed search (default: relaxed)",
    )
    solve_parser.add_argument(
        "--case",
        choices=["professor", "random"],
        default="professor",
        help="Test case to run (default: professor)",
    )
    solve_parser.add_argument("--rows", type=int, default=5, help="Number of rows for random puzzle (default: 5)")
    solve_parser.add_argument("--seed", type=int, default=42, help="Random seed")

    # 2. Benchmark command
    bench_parser = subparsers.add_parser("benchmark", help="Run 7-algorithm comparative benchmark")
    bench_parser.add_argument("--samples", type=int, default=30, help="Number of sample states (default: 30)")
    bench_parser.add_argument("--rows", type=int, default=5, help="Number of rows (default: 5)")

    # 3. Train-regression command (Project 2 Deliverable)
    train_parser = subparsers.add_parser("train-regression", help="Train ML heuristic via linear regression")
    train_parser.add_argument("--rows", type=int, default=4, help="Grid rows to train on (default: 4)")

    # 4. Effective-branching command (Project 2 Deliverable)
    bstar_parser = subparsers.add_parser("effective-branching", help="Estimate effective branching factor b*")
    bstar_parser.add_argument("--rows", type=int, default=4, help="Grid rows (default: 4)")

    # 5. Generate-plots command (Project 2 Deliverable)
    plot_parser = subparsers.add_parser("generate-plots", help="Generate histogram and scatter plots")
    plot_parser.add_argument("--rows", type=int, default=4, help="Grid rows (default: 4)")

    # 6. Evaluate-all command
    eval_parser = subparsers.add_parser("evaluate-all", help="Evaluate all 59,049 states and export data.js")
    eval_parser.add_argument(
        "--output",
        type=str,
        default="visualizer/js/data.js",
        help="Output path for data.js (default: visualizer/js/data.js)",
    )

    # 7. Serve command
    serve_parser = subparsers.add_parser("serve", help="Launch standalone web visualizer server")
    serve_parser.add_argument("--port", type=int, default=8000, help="HTTP port (default: 8000)")

    args = parser.parse_args()

    if args.command == "solve":
        run_solve(args)
    elif args.command == "benchmark":
        run_benchmark(args)
    elif args.command == "train-regression":
        run_train_regression(args)
    elif args.command == "effective-branching":
        run_effective_branching(args)
    elif args.command == "generate-plots":
        run_generate_plots(args)
    elif args.command == "evaluate-all":
        run_evaluate_all(args)
    elif args.command == "serve":
        run_serve(args)
    else:
        parser.print_help()


def run_solve(args):
    if args.case == "professor":
        state = SandboxesEnv.get_professor_benchmark_state()
        print("\n--- Professor's 4-Row Benchmark State ---")
        n = 4
    else:
        state = SandboxesEnv.generate_random_state(num_rows=args.rows, seed=args.seed)
        print(f"\n--- Random {args.rows}-Row Puzzle State (Seed: {args.seed}) ---")
        n = args.rows

    print(state)

    # Select heuristic
    weights_path = os.path.join(
        os.path.dirname(__file__),
        "heuristics",
        "data",
        f"learned_weights_n{n}.json",
    )
    if args.heuristic == "learned":
        if os.path.exists(weights_path):
            heur = LearnedRegressionHeuristic(weights_path=weights_path, num_rows=n)
        else:
            heur = LearnedRegressionHeuristic(num_rows=n)
    elif args.heuristic == "admissible":
        base_h = LearnedRegressionHeuristic(weights_path=weights_path, num_rows=n) if os.path.exists(weights_path) else LearnedRegressionHeuristic(num_rows=n)
        heur = AdmissibleLearnedHeuristic(base_h, safety_scale=0.94)
    elif args.heuristic == "volume":
        heur = SandVolumeHeuristic()
    elif args.heuristic == "distance":
        heur = RowDistanceHeuristic()
    else:
        heur = CombinedHeuristic()

    algo_map = {
        "bfs": BreadthFirstSearch(),
        "dfs": DepthFirstSearch(),
        "ucs": UniformCostSearch(),
        "ids": IterativeDeepeningSearch(),
        "greedy": GreedyBestFirstSearch(heur),
        "greedystar": GreedyStarSearch(),
        "astar": AStarSearch(heur),
        "rbfs": RecursiveBestFirstSearch(heur),
    }

    algo = algo_map[args.algo]
    print(f"\nExecuting {algo.name} (Heuristic: {heur.name})...")
    res = algo.solve(state)
    print("\n--- Search Results ---")
    print(f"Algorithm:       {res.algorithm_name}")
    print(f"Goal Found:      {res.is_goal_found}")
    print(f"Total Cost:      {res.total_cost:.1f}")
    print(f"Path Length:     {res.path_length} steps")
    print(f"Nodes Expanded:  {res.nodes_expanded}")
    print(f"Nodes Generated: {res.nodes_generated}")
    print(f"Execution Time:  {res.execution_time_ms:.2f} ms")
    print(f"Peak Memory:     {res.peak_memory_mb:.4f} MB")
    print("\nAction Path:")
    for i, a in enumerate(res.solution_path, 1):
        print(f"  {i:2d}. {a.description:<24} | Cost: {a.cost:.1f} | Delta: {a.delta_s:.1f}")


def run_train_regression(args):
    print(f"\n[+] Running Machine Learning Heuristic Training Pipeline for {args.rows} rows...")
    run_full_training_pipeline(num_rows=args.rows)


def run_effective_branching(args):
    print(f"\n[+] Running Effective Branching Factor (b*) Benchmark for {args.rows} rows...")
    bench = EffectiveBranchingBenchmark(num_rows=args.rows)
    results = bench.run_depth_stratified_benchmark()
    for r in results:
        print("\n" + "=" * 76)
        print(f" {r['label']} | Optimal Cost: {r['optimal_cost']} | Depth: {r['depth']}")
        print("=" * 76)
        print(f"{'Algorithm':<22} | {'Nodes Exp':^10} | {'Nodes Gen':^10} | {'b* (Slide 41)':^14} | {'b* (AIMA)':^12}")
        print("-" * 76)
        for name, data in r["algorithms"].items():
            print(f"{name:<22} | {data['nodes_expanded']:^10} | {data['nodes_generated']:^10} | {data['b_star_slide']:^14.3f} | {data['b_star_aima']:^12.3f}")


def run_generate_plots(args):
    print(f"\n[+] Generating all assignment plots (Histogram & Scatter plots) for {args.rows} rows...")
    generator = AssignmentPlotGenerator(num_rows=args.rows)
    summary = generator.generate_all_plots_and_tables()
    print("\n=== PLOT GENERATION SUMMARY ===")
    print(f"Mean Greedy Suboptimality Ratio:   {summary['mean_ratio']:.4f}")
    print(f"Median Greedy Suboptimality Ratio: {summary['median_ratio']:.4f}")
    print(f"Min / Max Ratio:                   {summary['min_ratio']:.4f} / {summary['max_ratio']:.4f}")
    print(f"Saved figures directory:           {summary['figures']['histogram']}")


def run_benchmark(args):
    print(f"\nRunning 7-algorithm comparative benchmark on {args.samples} states (rows={args.rows})...")
    comp = ComparativeBenchmark(sample_size=args.samples, num_rows=args.rows)
    results = comp.run_benchmark()

    print("\n" + "=" * 90)
    print(f"{'Algorithm':<10} | {'Cost':<7} | {'Steps':<6} | {'Expanded':<9} | {'Generated':<10} | {'Time (ms)':<10} | {'Mem (MB)':<9} | {'Optimal'}")
    print("=" * 90)
    for r in results:
        opt_str = "YES" if r["optimal"] else f"{r['optimality_rate']}%"
        print(
            f"{r['algorithm']:<10} | "
            f"{r['mean_cost']:<7.1f} | "
            f"{r['mean_length']:<6.1f} | "
            f"{r['mean_nodes_expanded']:<9.1f} | "
            f"{r['mean_nodes_generated']:<10.1f} | "
            f"{r['mean_time_ms']:<10.2f} | "
            f"{r['mean_peak_memory_mb']:<9.4f} | "
            f"{opt_str}"
        )
    print("=" * 90)


def run_evaluate_all(args):
    out_path = Path(args.output).resolve()
    print(f"\nEvaluating all 59,049 states and exporting to {out_path}...")
    generate_and_export_all_data(out_path)


def run_serve(args):
    import http.server
    import socketserver
    visualizer_dir = Path("visualizer").resolve()
    os.chdir(visualizer_dir)
    handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", args.port), handler) as httpd:
        print(f"\n[Visualizer] Serving Sandboxes Puzzle Visualizer at: http://localhost:{args.port}/")
        print("Press Ctrl+C to stop.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")


if __name__ == "__main__":
    main()
