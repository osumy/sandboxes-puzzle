"""
Unit tests for exporter and JSON schema validation (Requirement R4).
"""

import json
from pathlib import Path
import pytest
from sandboxes_puzzle.exporter import (
    generate_professor_benchmark_presets,
    generate_side_gate_trap_presets,
    format_trace,
)
from sandboxes_puzzle.environment.state import PuzzleState
from sandboxes_puzzle.algorithms.uninformed import UniformCostSearch


class TestExporter:
    """Verifies trace formatting and benchmark preset schemas."""

    def test_professor_presets_costs(self):
        presets = generate_professor_benchmark_presets()
        traces = presets["traces"]

        # Check professor's mandated costs
        assert "side_gate_45" in traces
        assert traces["side_gate_45"]["total_cost"] == 45.0
        assert traces["side_gate_45"]["steps"][-1]["cum_cost"] == 45.0

        assert "alternative_46" in traces
        assert traces["alternative_46"]["total_cost"] == 46.0
        assert traces["alternative_46"]["steps"][-1]["cum_cost"] == 46.0

        assert "greedy_47" in traces
        assert traces["greedy_47"]["total_cost"] == 47.0
        assert traces["greedy_47"]["steps"][-1]["cum_cost"] == 47.0

        assert "optimal_ucs_50" in traces
        assert traces["optimal_ucs_50"]["total_cost"] == 50.0

    def test_side_gate_trap_presets(self):
        presets = generate_side_gate_trap_presets()
        traces = presets["traces"]
        # UCS and A* find optimal cost 52.0
        assert traces["ucs"]["total_cost"] == 52.0
        assert traces["astar"]["total_cost"] == 52.0
        # Greedy gets trapped at 54.0
        assert traces["greedy"]["total_cost"] == 54.0
        # A* expands significantly fewer nodes than UCS
        assert traces["astar"]["nodes_expanded"] < traces["ucs"]["nodes_expanded"]

    def test_format_trace_structure(self):
        st = PuzzleState([(1.0, 0.0), (0.0, 0.5)])
        ucs = UniformCostSearch()
        res = ucs.solve(st)
        trace = format_trace(st, res)

        assert trace["algorithm"] == "UCS"
        assert trace["total_cost"] == res.total_cost
        assert len(trace["steps"]) == res.path_length + 1
        assert trace["steps"][0]["step"] == 0
        assert trace["steps"][0]["action_type"] == "INITIAL"
        assert trace["steps"][-1]["cum_cost"] == res.total_cost

    def test_data_js_exists_and_valid(self):
        data_js_path = Path("visualizer/js/data.js")
        assert data_js_path.exists(), "visualizer/js/data.js must exist"

        content = data_js_path.read_text(encoding="utf-8")
        assert content.startswith("// Auto-generated dataset for Sandboxes Puzzle Visualizer")
        assert "window.SANDBOX_DATA =" in content

        # Extract JSON substring and validate parsing
        json_str = content.split("window.SANDBOX_DATA =", 1)[1].strip().rstrip(";")
        data = json.loads(json_str)

        assert data["meta"]["total_state_space_cardinality"] == 59049
        assert len(data["benchmark_summary"]) == 7
        assert len(data["state_space_analysis"]["histogram"]["counts"]) == 10
        assert len(data["state_space_analysis"]["plot1_greedy_vs_opt"]) > 0
        assert len(data["state_space_analysis"]["plot2_actions_vs_type_b"]) > 0
        assert "professor_case" in data["presets"]
