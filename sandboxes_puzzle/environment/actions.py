"""
Action representations for the Sandboxes Puzzle.
Includes Top-down inter-row drops, Bottom collector flushes, and Horizontal side gates.
"""

from enum import Enum
from typing import Optional, NamedTuple


class ActionType(str, Enum):
    """Enumeration of gate action types in the Sandboxes Puzzle."""
    TOP_DOWN = "TOP_DOWN"           # Drop sand from row r to r-1 in column c
    COLLECTOR_FLUSH = "COLLECTOR_FLUSH" # Flush sand from row 0 in column c to collector
    SIDE_GATE = "SIDE_GATE"         # Equalize sand between column 0 and 1 at row r


class GateAction(NamedTuple):
    """
    Representation of an executable gate action.
    
    Attributes:
        action_type: ActionType (TOP_DOWN, COLLECTOR_FLUSH, SIDE_GATE)
        row: Row index r in [0, n-1]. For TOP_DOWN, source row (drops into r-1).
        col: Column index c in {0, 1} for TOP_DOWN and COLLECTOR_FLUSH; None for SIDE_GATE.
        cost: Action execution cost according to professor formulation.
        delta_s: Quantity of sand transferred by this action.
        s_before: Upper / source cell sand level before action.
        s_after: Upper / source cell sand level after action.
        description: Formatted human-readable string.
    """
    action_type: ActionType
    row: int
    col: Optional[int]
    cost: float
    delta_s: float
    s_before: float
    s_after: float
    description: str

    def __repr__(self) -> str:
        return f"GateAction({self.description}, cost={self.cost:.1f}, delta={self.delta_s:.1f})"

    @classmethod
    def top_down(cls, row: int, col: int, s_before: float, s_after: float, delta_s: float) -> "GateAction":
        cost = 1.0 + 4.0 * (s_before + s_after)
        desc = f"Drop(r={row}->{row-1}, c={col})"
        return cls(ActionType.TOP_DOWN, row, col, cost, delta_s, s_before, s_after, desc)

    @classmethod
    def collector_flush(cls, col: int, s_before: float) -> "GateAction":
        cost = 1.0 + 4.0 * s_before
        desc = f"Flush(r=0, c={col})"
        return cls(ActionType.COLLECTOR_FLUSH, 0, col, cost, s_before, s_before, 0.0, desc)

    @classmethod
    def side_gate(cls, row: int, s0_before: float, s1_before: float) -> "GateAction":
        cost = 1.0
        desc = f"SideGate(r={row})"
        return cls(ActionType.SIDE_GATE, row, None, cost, 0.5, s0_before, 0.5, desc)
