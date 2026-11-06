# Sandboxes Puzzle (معمای جعبه‌های شن)

[![CI - Test Suite](https://img.shields.io/badge/pytest-39%20passed-brightgreen.svg)](tests/)
[![Python](https://img.shields.io/badge/python-3.9%2B-blue.svg)](pyproject.toml)
[![Documentation](https://img.shields.io/badge/docs-Persian%20%26%20English-blueviolet.svg)](PROBLEM_SPEC_FA.md)
[![Zero Dependency Visualizer](https://img.shields.io/badge/visualizer-vanilla%20HTML5%2FCSS%2FJS-orange.svg)](visualizer/)

An advanced Artificial Intelligence search and optimization system for the **Sandboxes Puzzle (معمای جعبه‌های شن)**, implementing both uninformed and informed search algorithms following Russell & Norvig's *Artificial Intelligence: A Modern Approach (AIMA)* standard. Includes full state space analysis ($3^{10} = 59,049$ states), proofs of admissibility and consistency, and an interactive, zero-dependency modern HTML5 Canvas web visualizer.

---

## 🌟 Key Features

- **Exact Physics & Discrete Cost Environment**:
  - Grid of 2 columns and $n$ rows (default $n=5$, benchmark $n=4$, dynamically configurable).
  - Cell sand levels $s \in \{0.0, 0.5, 1.0\}$.
  - Top-down gravity gates ($r \to r-1$) with non-linear cost $C_a = 1 + 4(s + s')$.
  - Collector basin flushes with cost $C_{\text{flush}} = 1 + 4s$.
  - Side gate equalizations $(1.0, 0.0) \to (0.5, 0.5)$ at fixed cost $C_b = 1.0$.
- **7 Classical Search Algorithms (AIMA Standard)**:
  - **Uninformed**: Breadth-First Search (BFS), Depth-First Search with cycle prevention (DFS), Uniform-Cost Search (UCS / Dijkstra), Iterative Deepening Search (IDS).
  - **Informed**: Greedy Best-First Search, A\* Search, Recursive Best-First Search (RBFS).
- **Admissible & Consistent Heuristics**:
  - $h_1(s)$: Total sand volume lower bound ($5.0 \cdot M$).
  - $h_2(s)$: Row-distance weighted evacuation lower bound ($5.0 \sum r s_{r, c}$).
  - $h_3(s)$: Combined admissible and consistent composite lower bound ($5.0 \sum (r+1) s_{r, c}$).
- **Full State Space Ground-Truth Evaluation**:
  - Backward Dijkstra computes exact optimal costs for all **59,049 states in 0.364 seconds**.
  - Complete statistical evaluations of Greedy suboptimality ratio, Scatter Plot 1, Scatter Plot 2, and Histogram.
- **Standalone Interactive Web Visualizer (`visualizer/`)**:
  - Vanilla HTML5 Canvas, modern CSS tokens, ES6 JavaScript.
  - Zero external dependencies or npm build steps—works instantly via `file:///` or any local HTTP server.
  - VCR playback controls, kinetic sand particle flow, sliding drawer gates, curved collector basin mound, and manual puzzle solving mode.

---

## 🚀 Quickstart

### 1. Installation

Clone the repository and install testing dependencies:

```bash
git clone https://github.com/osumy/sandboxes-puzzle.git
cd sandboxes-puzzle
pip install -r requirements.txt
```

### 2. Run the Test Suite

Execute the comprehensive Pytest suite:

```bash
python -m pytest tests/ -v
```

Expected output:
```text
============================= 38 passed in 0.78s ==============================
```

### 3. Launch the Web Visualizer

You can open the visualizer immediately in any modern web browser:

- **Option A (Direct File)**: Open `visualizer/index.html` directly in your browser (`file:///.../visualizer/index.html`).
- **Option B (Built-in Server)**: Run the CLI server command:
  ```bash
  python -m sandboxes_puzzle.cli serve --port 8000
  ```
  Then visit [http://localhost:8000](http://localhost:8000).

---

## 💻 Command-Line Interface (CLI)

The package provides a command-line tool for solving puzzles, running benchmarks, and re-exporting analytical data:

### Solve a Puzzle
```bash
# Solve the Professor's 4-row benchmark case using A*
python -m sandboxes_puzzle.cli solve --case professor --algo astar

# Solve a random 5-row puzzle using UCS
python -m sandboxes_puzzle.cli solve --case random --rows 5 --seed 42 --algo ucs

# Compare with Greedy Best-First
python -m sandboxes_puzzle.cli solve --case professor --algo greedy
```

### Run the 7-Algorithm Comparative Benchmark
```bash
python -m sandboxes_puzzle.cli benchmark --samples 15 --rows 5
```

### Re-evaluate the Full 59,049 State Space
```bash
python -m sandboxes_puzzle.cli evaluate-all --output visualizer/js/data.js
```

---

## 📊 Benchmark Results Summary

Results averaged across random 5-row puzzle configurations:

| Algorithm | Mean Cost | Mean Steps | Mean Nodes Expanded | Mean Nodes Generated | Mean Time (ms) | Peak Memory | Optimal? |
|---|---|---|---|---|---|---|---|
| **BFS** | 55.0 | 12.4 | 3,705.7 | 3,746.1 | 491.88 ms | 2.27 MB | 90.0% |
| **DFS** | 85.0 | 23.2 | 23.2 | 91.3 | 2.49 ms | 0.04 MB | 0.0% |
| **UCS** | 54.8 | 12.4 | 3,764.6 | 4,298.1 | 563.66 ms | 2.48 MB | **YES (100%)** |
| **IDS** | 54.8 | 9.8 | 20,891.6 | 27,425.4 | 3,854.02 ms | 1.08 MB | 80.0% |
| **Greedy** | 55.8 | 12.8 | 12.8 | 38.2 | 2.12 ms | 0.02 MB | 80.0% |
| **A\*** | 54.8 | 12.4 | 412.5 | 815.3 | 98.45 ms | 0.58 MB | **YES (100%)** |
| **RBFS** | 54.8 | 9.8 | 6,551.0 | 17,169.6 | 940.46 ms | 0.02 MB | **YES (100%)** |

---

## 🏛️ Project Architecture

```
sandboxes-puzzle/
├── pyproject.toml              # Packaging and dependency configuration
├── requirements.txt            # Minimal runtime & testing dependencies
├── README.md                   # Project overview & CLI usage
├── REPORT.md                   # Comprehensive academic research report (English)
├── PROBLEM_SPEC_FA.md          # مستند جامع و رسمی شرح مسئله و تحلیل فیزیکی (Persian)
├── sandboxes_puzzle/           # Core Python package
│   ├── cli.py                  # Unified command-line interface
│   ├── environment/            # R1: State representation and physics
│   │   ├── state.py            # Immutable PuzzleState representation
│   │   ├── actions.py          # ActionType and GateAction definitions
│   │   └── environment.py      # SandboxesEnv transition simulator
│   ├── algorithms/             # R2: Russell & Norvig search implementations
│   │   ├── base.py             # Node, SearchResult, SearchAlgorithm ABC
│   │   ├── uninformed/         # BFS, DFS, UCS, IDS
│   │   └── informed/           # Greedy, A*, RBFS
│   ├── heuristics/             # R2: Heuristic lower bounds & proofs
│   │   ├── sand_volume.py      # h1: Sand volume lower bound
│   │   ├── row_distance.py     # h2: Row distance lower bound
│   │   └── combined.py         # h3: Admissible & consistent composite
│   ├── benchmarks/             # R3: State space evaluation & metrics
│   │   ├── optimal_solver.py   # Ultra-fast Backward Dijkstra ground truth
│   │   ├── state_space.py      # 3^(2n) enumerator and sampler
│   │   ├── evaluator.py        # Evaluator for all 59,049 states
│   │   └── comparative.py      # 7-algorithm comparative harness
│   └── exporter/               # R4: Trace serializer & data.js generator
│       └── json_exporter.py    # Generates visualizer/js/data.js
├── visualizer/                 # R4: Standalone Modern Web Visualizer
│   ├── index.html              # Main single-page application
│   ├── css/style.css           # Swiss engineering dark theme
│   └── js/
│       ├── engine.js           # Client-side physics engine
│       ├── renderer.js         # Canvas 2D sand & gate renderer
│       ├── player.js           # Timeline playback controller
│       ├── dashboard.js        # Self-contained Canvas charting engine
│       ├── data.js             # Precomputed benchmark datasets & traces
│       └── app.js              # Application coordinator
└── tests/                      # Pytest comprehensive test suite
    ├── test_physics.py         # R1 physics & transition unit tests
    ├── test_heuristics.py      # R2 admissibility & consistency proofs
    ├── test_algorithms.py      # R2 all 7 search algorithms tests
    ├── test_benchmarks.py      # R3 state space & solver unit tests
    └── test_exporter.py        # R4 export schema verification
```

---

## 📜 Academic Research Report

For detailed mathematical derivations, formal proofs of admissibility and consistency, the Cost Parity Theorem, and in-depth analysis of the professor's 4-row benchmark case ($45, 46, 47$), please see [REPORT.md](REPORT.md).

---

## 📄 License

This project is licensed under the MIT License.
