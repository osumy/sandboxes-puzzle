"""
Command-Line Interface (CLI) for Sandboxes Puzzle.
Supports solving arbitrary configurations, running comparative benchmarks,
evaluating the full 59,049 state space, and serving the standalone visualizer.
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
    GreedyBestFirstSearch,
    AStarSearch,
    RecursiveBestFirstSearch,
)
from sandboxes_puzzle.heuristics import CombinedHeuristic, SandVolumeHeuristic, RowDistanceHeuristic
from sandboxes_puzzle.benchmarks.evaluator import StateSpaceEvaluator
from sandboxes_puzzle.benchmarks.comparative import ComparativeBenchmark
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
        choices=["bfs", "dfs", "ucs", "ids", "greedy", "astar", "rbfs"],
        default="astar",
        help="Algorithm to execute (default: astar)",
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

    # 3. Evaluate-all command
    eval_parser = subparsers.add_parser("evaluate-all", help="Evaluate all 59,049 states and export data.js")
    eval_parser.add_argument(
        "--output",
        type=str,
        default="visualizer/js/data.js",
        help="Output path for data.js (default: visualizer/js/data.js)",
    )

    # 4. Serve command
    serve_parser = subparsers.add_parser("serve", help="Launch standalone web visualizer server")
    serve_parser.add_argument("--port", type=int, default=8000, help="HTTP port (default: 8000)")

    args = parser.parse_args()

    if args.command == "solve":
        run_solve(args)
    elif args.command == "benchmark":
        run_benchmark(args)
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
    else:
        state = SandboxesEnv.generate_random_state(num_rows=args.rows, seed=args.seed)
        print(f"\n--- Random {args.rows}-Row Puzzle State (Seed: {args.seed}) ---")

    print(state)
    heur = CombinedHeuristic()

    algo_map = {
        "bfs": BreadthFirstSearch(),
        "dfs": DepthFirstSearch(),
        "ucs": UniformCostSearch(),
        "ids": IterativeDeepeningSearch(),
        "greedy": GreedyBestFirstSearch(heur),
        "astar": AStarSearch(heur),
        "rbfs": RecursiveBestFirstSearch(heur),
    }

    algo = algo_map[args.algo]
    print(f"\nExecuting {algo.name}...")
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
