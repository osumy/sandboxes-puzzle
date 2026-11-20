"""
Feature Extraction for Machine Learning Heuristics in the Sandboxes Puzzle.
Transforms a discrete PuzzleState into a rich, physically-grounded numerical feature vector.
"""

from typing import List, Tuple
import numpy as np
from sandboxes_puzzle.environment.state import PuzzleState


class PuzzleFeatureExtractor:
    """
    Extracts physically and topologically motivated features from a PuzzleState.
    """

    FEATURE_NAMES_BASE = [
        "total_sand",                 # f0: Total sand mass M(s)
        "row_weighted_sand",          # f1: sum_{r, c} (r + 1) * s_{r, c} (corresponds to h3 base)
        "row_sq_weighted_sand",       # f2: sum_{r, c} (r + 1)^2 * s_{r, c} (higher-order vertical distance)
        "col0_sand",                  # f3: total sand in column 0
        "col1_sand",                  # f4: total sand in column 1
        "col_imbalance",              # f5: |col0_sand - col1_sand|
        "side_gate_opps",             # f6: count of rows with (1.0, 0.0) or (0.0, 1.0)
        "half_sand_count",            # f7: count of cells with s = 0.5
        "full_sand_count",            # f8: count of cells with s = 1.0
        "bottom_sand",                # f9: sand at row 0 (immediate evacuation potential)
        "top_sand",                   # f10: sand at top row (longest evacuation path)
        "obstruction_count",          # f11: upper cell has sand while lower cell is full
    ]

    @classmethod
    def get_feature_names(cls, num_rows: int = 5) -> List[str]:
        """Return human-readable names for all extracted features."""
        names = list(cls.FEATURE_NAMES_BASE)
        for r in range(num_rows):
            names.append(f"cell_r{r}_c0")
            names.append(f"cell_r{r}_c1")
        return names

    @classmethod
    def extract_features(cls, state: PuzzleState) -> np.ndarray:
        """
        Extract numerical feature vector from a PuzzleState.
        
        Args:
            state: PuzzleState instance
            
        Returns:
            1D numpy array of float64 features
        """
        grid = state.grid
        n = state.num_rows

        total_sand = state.total_sand
        row_weighted = 0.0
        row_sq_weighted = 0.0
        col0_sand = 0.0
        col1_sand = 0.0
        side_gate_opps = 0.0
        half_sand_count = 0.0
        full_sand_count = 0.0
        obstruction_count = 0.0

        for r in range(n):
            s0 = grid[r][0]
            s1 = grid[r][1]
            
            col0_sand += s0
            col1_sand += s1
            
            w = r + 1.0
            row_weighted += w * (s0 + s1)
            row_sq_weighted += (w ** 2) * (s0 + s1)
            
            # Side gate opportunities: (1, 0) or (0, 1)
            if (s0 == 1.0 and s1 == 0.0) or (s0 == 0.0 and s1 == 1.0):
                side_gate_opps += 1.0
                
            for val in (s0, s1):
                if val == 0.5:
                    half_sand_count += 1.0
                elif val == 1.0:
                    full_sand_count += 1.0
                    
            # Obstruction check with row below
            if r > 0:
                if s0 > 0.0 and grid[r - 1][0] == 1.0:
                    obstruction_count += 1.0
                if s1 > 0.0 and grid[r - 1][1] == 1.0:
                    obstruction_count += 1.0

        col_imbalance = abs(col0_sand - col1_sand)
        bottom_sand = grid[0][0] + grid[0][1]
        top_sand = grid[n - 1][0] + grid[n - 1][1]

        base_features = [
            total_sand,
            row_weighted,
            row_sq_weighted,
            col0_sand,
            col1_sand,
            col_imbalance,
            side_gate_opps,
            half_sand_count,
            full_sand_count,
            bottom_sand,
            top_sand,
            obstruction_count,
        ]

        # Raw grid cell values
        raw_cells = [grid[r][c] for r in range(n) for c in (0, 1)]

        return np.array(base_features + raw_cells, dtype=np.float64)

    @classmethod
    def extract_from_int_tuple(cls, state_tuple: Tuple[int, ...], num_rows: int = 5) -> np.ndarray:
        """
        Fast feature extraction directly from an integer tuple of {0, 1, 2}.
        Avoids object overhead when processing tens of thousands of states.
        """
        n = num_rows
        # Convert {0, 1, 2} to {0.0, 0.5, 1.0}
        vals = [v * 0.5 for v in state_tuple]
        
        total_sand = sum(vals)
        row_weighted = 0.0
        row_sq_weighted = 0.0
        col0_sand = 0.0
        col1_sand = 0.0
        side_gate_opps = 0.0
        half_sand_count = 0.0
        full_sand_count = 0.0
        obstruction_count = 0.0

        for r in range(n):
            s0 = vals[2 * r]
            s1 = vals[2 * r + 1]
            
            col0_sand += s0
            col1_sand += s1
            
            w = r + 1.0
            row_weighted += w * (s0 + s1)
            row_sq_weighted += (w ** 2) * (s0 + s1)
            
            if (s0 == 1.0 and s1 == 0.0) or (s0 == 0.0 and s1 == 1.0):
                side_gate_opps += 1.0
                
            if s0 == 0.5:
                half_sand_count += 1.0
            elif s0 == 1.0:
                full_sand_count += 1.0
                
            if s1 == 0.5:
                half_sand_count += 1.0
            elif s1 == 1.0:
                full_sand_count += 1.0
                
            if r > 0:
                if s0 > 0.0 and vals[2 * (r - 1)] == 1.0:
                    obstruction_count += 1.0
                if s1 > 0.0 and vals[2 * (r - 1) + 1] == 1.0:
                    obstruction_count += 1.0

        col_imbalance = abs(col0_sand - col1_sand)
        bottom_sand = vals[0] + vals[1]
        top_sand = vals[2 * (n - 1)] + vals[2 * (n - 1) + 1]

        base_features = [
            total_sand,
            row_weighted,
            row_sq_weighted,
            col0_sand,
            col1_sand,
            col_imbalance,
            side_gate_opps,
            half_sand_count,
            full_sand_count,
            bottom_sand,
            top_sand,
            obstruction_count,
        ]

        return np.array(base_features + vals, dtype=np.float64)
