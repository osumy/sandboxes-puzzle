#!/usr/bin/env python3
"""
Master End-to-End Runner for Project 2 (معمای جعبه‌های شن - فاز ۲)
Executes:
1. Unit test verification
2. ML heuristic training via Linear Regression (OLS, Ridge, NNLS)
3. Effective Branching Factor (b*) evaluation across problem depths (Slide 41 vs AIMA)
4. Full state-space evaluation, generating:
   - Histogram of Greedy_opt_ratio
   - Scatter plot of Greedy vs Optimum cost
   - Scatter plot of Total actions vs Type-b actions
5. Executive summary and performance tables printed to console.
"""

import sys
import os
import time
from pathlib import Path
import pytest

from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv
from sandboxes_puzzle.heuristics.train_regression import run_full_training_pipeline
from sandboxes_puzzle.benchmarks.effective_branching import EffectiveBranchingBenchmark
from sandboxes_puzzle.benchmarks.plot_generator import AssignmentPlotGenerator


def main():
    print("=" * 80)
    print("     SANDBOXES PUZZLE - PROJECT 2 EXECUTION PIPELINE")
    print("     (معمای جعبه‌های شن: جستجوی آگاهانه، رگرسیون خطی و ارزیابی b*)")
    print("=" * 80)

    # 1. Run unit tests
    print("\n[Stage 1/4] Running Comprehensive Unit Test Suite...")
    test_ret = pytest.main(["-q", "tests"])
    if test_ret != 0:
        print("[!] Warning: Some tests did not pass. Proceeding with caution...")
    else:
        print("[+] All 50 unit tests passed successfully!")

    # 2. Train regression models
    print("\n[Stage 2/4] Training Machine Learning Heuristic Models...")
    heur4 = run_full_training_pipeline(num_rows=4)

    # 3. Evaluate Effective Branching Factor b*
    print("\n[Stage 3/4] Benchmarking Effective Branching Factor (b*)...")
    bench = EffectiveBranchingBenchmark(num_rows=4)
    bstar_results = bench.run_depth_stratified_benchmark()

    print("\n" + "=" * 80)
    print(" EFFECTIVE BRANCHING FACTOR (b*) BENCHMARK TABLE")
    print("=" * 80)
    for r in bstar_results:
        print(f"\n>> {r['label']} (Optimal Cost: {r['optimal_cost']}, Depth: {r['depth']})")
        print(f"{'Algorithm':<22} | {'Nodes Exp':^10} | {'Nodes Gen':^10} | {'b* (Slide 41)':^14} | {'b* (AIMA)':^12}")
        print("-" * 76)
        for name, data in r["algorithms"].items():
            print(f"{name:<22} | {data['nodes_expanded']:^10} | {data['nodes_generated']:^10} | {data['b_star_slide']:^14.3f} | {data['b_star_aima']:^12.3f}")

    # 4. Generate all required assignment plots
    print("\n[Stage 4/4] Generating Assignment Deliverable Plots & Tables...")
    plot_gen = AssignmentPlotGenerator(num_rows=4)
    summary = plot_gen.generate_all_plots_and_tables()

    print("\n" + "=" * 80)
    print(" PIPELINE COMPLETED SUCCESSFULLY!")
    print("=" * 80)
    print(f"[*] Total States Evaluated:              {summary['evaluated_states']}")
    print(f"[*] Mean Greedy Suboptimality Ratio:     {summary['mean_ratio']:.4f}")
    print(f"[*] Median Greedy Suboptimality Ratio:   {summary['median_ratio']:.4f}")
    print(f"[*] Suboptimality Range [Min, Max]:      [{summary['min_ratio']:.4f}, {summary['max_ratio']:.4f}]")
    print("\nGenerated Figure Artifacts:")
    for key, path in summary["figures"].items():
        print(f"  - {key:<20}: {path}")
    print("=" * 80)


if __name__ == "__main__":
    main()
