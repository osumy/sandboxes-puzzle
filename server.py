"""
Sandboxes Puzzle - Lightweight Local Python API & Static Server
Provides REST endpoints to generate random puzzles and execute the 7 AI Search Algorithms in Python:
- POST /api/generate: Generates a 2xN grid with P(0)=0.5, P(1)=0.3, P(0.5)=0.2
- POST /api/solve: Executes A*, UCS, Greedy, BFS, DFS, IDS, RBFS on a provided grid
- Serves visualizer/ statically at http://localhost:8000

Zero external dependencies required (uses standard library http.server).
"""

import sys
import json
from pathlib import Path
from http.server import SimpleHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse

# Ensure project root is in sys.path
PROJECT_DIR = Path(__file__).resolve().parent
if str(PROJECT_DIR) not in sys.path:
    sys.path.insert(0, str(PROJECT_DIR))

from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.environment.environment import SandboxesEnv
from sandboxes_puzzle.exporter.json_exporter import format_trace
from sandboxes_puzzle.heuristics import CombinedHeuristic
from sandboxes_puzzle.algorithms.uninformed import (
    BreadthFirstSearch,
    DepthFirstSearch,
    UniformCostSearch,
    IterativeDeepeningSearch,
)
from sandboxes_puzzle.algorithms.informed import (
    GreedyStarSearch,
    GreedyStar,
    AStarSearch,
    RecursiveBestFirstSearch,
)


class SandboxesAPIHandler(SimpleHTTPRequestHandler):
    """Custom HTTP handler serving both the static visualizer and Python AI Search API."""

    def __init__(self, *args, **kwargs):
        # Serve files from visualizer directory
        super().__init__(*args, directory=str(PROJECT_DIR / "visualizer"), **kwargs)

    def _send_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def do_OPTIONS(self):
        self.send_response(204)
        self._send_cors_headers()
        self.end_headers()

    def do_POST(self):
        parsed = urlparse(self.path)
        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length).decode("utf-8") if content_length > 0 else "{}"

        try:
            payload = json.loads(body) if body else {}
        except json.JSONDecodeError:
            self._send_json({"error": "Invalid JSON"}, status=400)
            return

        if parsed.path == "/api/generate":
            num_rows = int(payload.get("rows", 5))
            state = SandboxesEnv.generate_random_state(num_rows=num_rows)
            grid_list = state.to_list(top_to_bottom=False)
            traces = self._solve_all(state)
            self._send_json({
                "rows": num_rows,
                "initial_state": grid_list,
                "traces": traces,
                "engine": "Python (sandboxes_puzzle)"
            })
            return

        elif parsed.path == "/api/solve":
            grid_data = payload.get("grid")
            if not grid_data or not isinstance(grid_data, list):
                self._send_json({"error": "Missing or invalid 'grid' field"}, status=400)
                return

            state = PuzzleState([tuple(r) for r in grid_data])
            traces = self._solve_all(state)
            self._send_json({
                "rows": state.num_rows,
                "initial_state": state.to_list(top_to_bottom=False),
                "traces": traces,
                "engine": "Python (sandboxes_puzzle)"
            })
            return

        self._send_json({"error": "Not found"}, status=404)

    def _solve_all(self, state: PuzzleState):
        heur = CombinedHeuristic()
        algos = [
            ("astar", AStarSearch(heur)),
            ("ucs", UniformCostSearch()),
            ("greedystar", GreedyStarSearch()),
            ("greedy", GreedyStarSearch()),
            ("bfs", BreadthFirstSearch()),
            ("dfs", DepthFirstSearch(max_depth=35)),
            ("ids", IterativeDeepeningSearch(max_limit=20)),
            ("rbfs", RecursiveBestFirstSearch(heur, max_expansions=25000)),
        ]
        traces = {}
        for key, algo in algos:
            res = algo.solve(state)
            traces[key] = format_trace(state, res)
        return traces

    def _send_json(self, data, status=200):
        body = json.dumps(data, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self._send_cors_headers()
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


def run_server(port: int = 8000):
    server_address = ("", port)
    httpd = HTTPServer(server_address, SandboxesAPIHandler)
    print("=" * 65)
    print(f"🚀 Sandboxes Puzzle API Server running at http://localhost:{port}/")
    print(f"📁 Serving Visualizer UI directly from: {PROJECT_DIR / 'visualizer'}")
    print(f"⚡ Endpoints: POST /api/generate , POST /api/solve")
    print("=" * 65)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer shutting down gracefully.")
        httpd.server_close()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    run_server(port)
