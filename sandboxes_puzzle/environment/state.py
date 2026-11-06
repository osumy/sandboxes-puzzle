"""
State representation for the Sandboxes Puzzle.
Grid is 2 columns (c in {0, 1}) by n rows (r in {0, ..., n-1}).
Row 0 is the bottom row (adjacent to the collector basin).
Row n-1 is the top row.
Each cell holds sand fill levels s in {0.0, 0.5, 1.0}.
"""

from typing import Tuple, List, Union, Sequence


VALID_SAND_LEVELS = {0.0, 0.5, 1.0}


class PuzzleState:
    """
    Immutable representation of an n-row by 2-column Sandboxes Puzzle grid.
    Supports persistent open gates from stuck mechanical spring-latches.
    
    Attributes:
        grid: Tuple of n 2-tuples representing rows from row 0 (bottom) to row n-1 (top).
        num_rows: Number of rows in the grid (n).
        open_gates: Tuple of (row, col) coordinates of top-down gates currently stuck open.
    """

    __slots__ = ("_grid", "_num_rows", "_open_gates", "_hash", "_total_sand")

    def __init__(
        self,
        grid: Sequence[Sequence[float]],
        open_gates: Sequence[Tuple[int, int]] = (),
    ):
        """
        Initialize an immutable PuzzleState.
        
        Args:
            grid: Sequence of rows from row 0 (bottom) to row n-1 (top),
                  where each row contains exactly 2 float values in {0.0, 0.5, 1.0}.
            open_gates: Optional sequence of (row, col) pairs for gates currently stuck open.
        
        Raises:
            ValueError: If dimensions or sand levels are invalid.
        """
        rows: List[Tuple[float, float]] = []
        total = 0.0
        for r_idx, row in enumerate(grid):
            if len(row) != 2:
                raise ValueError(f"Row {r_idx} must have exactly 2 columns, got {len(row)}.")
            c0, c1 = float(row[0]), float(row[1])
            if c0 not in VALID_SAND_LEVELS:
                raise ValueError(f"Invalid sand level at row {r_idx}, col 0: {c0}. Must be in {VALID_SAND_LEVELS}.")
            if c1 not in VALID_SAND_LEVELS:
                raise ValueError(f"Invalid sand level at row {r_idx}, col 1: {c1}. Must be in {VALID_SAND_LEVELS}.")
            rows.append((c0, c1))
            total += c0 + c1

        self._grid: Tuple[Tuple[float, float], ...] = tuple(rows)
        self._num_rows: int = len(rows)
        if self._num_rows == 0:
            raise ValueError("PuzzleState must have at least 1 row.")
        self._total_sand: float = round(total, 4)
        self._open_gates: Tuple[Tuple[int, int], ...] = tuple(sorted(set(open_gates)))
        self._hash: int = hash((self._grid, self._open_gates))

    @property
    def grid(self) -> Tuple[Tuple[float, float], ...]:
        """Return the grid as a tuple of rows from bottom (0) to top (n-1)."""
        return self._grid

    @property
    def open_gates(self) -> Tuple[Tuple[int, int], ...]:
        """Return tuple of currently stuck open top-down gates as (row, col) pairs."""
        return self._open_gates

    def is_gate_open(self, row: int, col: int) -> bool:
        """Check if top-down gate between row and row-1 in col is open."""
        return (row, col) in self._open_gates

    @property
    def num_rows(self) -> int:
        """Return the number of rows n."""
        return self._num_rows

    @property
    def total_sand(self) -> float:
        """Return total sand mass present in the puzzle."""
        return self._total_sand

    @property
    def is_goal(self) -> bool:
        """Return True if all cells are completely empty (0.0)."""
        return self._total_sand == 0.0

    def get(self, row: int, col: int) -> float:
        """
        Get the sand level at row r and column c.
        Row 0 is the bottom row.
        """
        if not (0 <= row < self._num_rows):
            raise IndexError(f"Row index {row} out of range [0, {self._num_rows - 1}].")
        if col not in (0, 1):
            raise IndexError(f"Column index {col} must be 0 or 1.")
        return self._grid[row][col]

    def set(self, row: int, col: int, value: float) -> "PuzzleState":
        """
        Return a new PuzzleState with cell (row, col) updated to value.
        """
        if not (0 <= row < self._num_rows):
            raise IndexError(f"Row index {row} out of range [0, {self._num_rows - 1}].")
        if col not in (0, 1):
            raise IndexError(f"Column index {col} must be 0 or 1.")
        val = float(value)
        if val not in VALID_SAND_LEVELS:
            raise ValueError(f"Invalid sand level: {val}. Must be in {VALID_SAND_LEVELS}.")
        
        new_grid = [list(r) for r in self._grid]
        new_grid[row][col] = val
        return PuzzleState(new_grid)

    def to_list(self, top_to_bottom: bool = False) -> List[List[float]]:
        """
        Convert state to nested lists.
        
        Args:
            top_to_bottom: If True, returns rows from top (n-1) to bottom (0).
                           If False, returns rows from bottom (0) to top (n-1).
        """
        if top_to_bottom:
            return [list(self._grid[r]) for r in range(self._num_rows - 1, -1, -1)]
        return [list(r) for r in self._grid]

    def to_int_tuple(self) -> Tuple[int, ...]:
        """
        Convert state to a compact integer tuple of length 2n where
        0 -> 0.0, 1 -> 0.5, 2 -> 1.0.
        Layout: (r0_c0, r0_c1, r1_c0, r1_c1, ..., r{n-1}_c0, r{n-1}_c1).
        """
        res = []
        for r in range(self._num_rows):
            res.append(int(round(self._grid[r][0] * 2)))
            res.append(int(round(self._grid[r][1] * 2)))
        return tuple(res)

    @classmethod
    def from_int_tuple(cls, t: Sequence[int]) -> "PuzzleState":
        """
        Reconstruct a PuzzleState from an integer tuple of length 2n where 0->0.0, 1->0.5, 2->1.0.
        """
        if len(t) % 2 != 0:
            raise ValueError(f"Integer tuple length must be even, got {len(t)}.")
        num_rows = len(t) // 2
        rows = []
        for r in range(num_rows):
            c0 = t[2 * r] / 2.0
            c1 = t[2 * r + 1] / 2.0
            rows.append((c0, c1))
        return cls(rows)

    @classmethod
    def empty(cls, num_rows: int = 5) -> "PuzzleState":
        """Create an empty goal state with num_rows rows."""
        return cls([(0.0, 0.0) for _ in range(num_rows)])

    def __hash__(self) -> int:
        return self._hash

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, PuzzleState):
            return False
        return self._grid == other._grid and self._open_gates == other._open_gates

    def __repr__(self) -> str:
        # Display from top row to bottom row for natural visual inspection
        row_strs = [f"r{r}: [{self._grid[r][0]}, {self._grid[r][1]}]" for r in range(self._num_rows - 1, -1, -1)]
        gates_str = f", open_gates={self._open_gates}" if self._open_gates else ""
        return f"PuzzleState(n={self._num_rows}, sand={self._total_sand:.1f}{gates_str}, rows=[\n  " + "\n  ".join(row_strs) + "\n])"
