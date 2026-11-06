"""
State space utilities and enumeration for the Sandboxes Puzzle.
Manages full combinatorial iteration (3^(2n)) and representative sampling.
"""

import itertools
import random
from typing import Iterator, List, Tuple, Optional

from sandboxes_puzzle.environment.state import PuzzleState


class StateSpace:
    """
    State space operations for n-row by 2-column Sandboxes Puzzle.
    Total states = 3^(2n) (59,049 for n=5, 6,561 for n=4).
    """

    def __init__(self, num_rows: int = 5):
        self.num_rows = num_rows
        self.num_cells = 2 * num_rows
        self.total_cardinality = 3 ** self.num_cells

    def enumerate_all_int_tuples(self) -> Iterator[Tuple[int, ...]]:
        """Yield all 3^(2n) integer tuples in {0, 1, 2}^(2n)."""
        return itertools.product((0, 1, 2), repeat=self.num_cells)

    def enumerate_all_states(self) -> Iterator[PuzzleState]:
        """Yield all 3^(2n) PuzzleState objects."""
        for t in self.enumerate_all_int_tuples():
            yield PuzzleState.from_int_tuple(t)

    def sample_states(
        self,
        sample_size: int = 100,
        seed: Optional[int] = 42,
        max_sand: Optional[float] = 4.5,
    ) -> List[PuzzleState]:
        """
        Sample random non-goal states according to the physical problem distribution:
        P(0.0) = 0.5, P(1.0) = 0.3, P(0.5) = 0.2.
        
        Args:
            sample_size: Number of states to sample.
            seed: Random seed.
            max_sand: Optional ceiling on total sand mass to maintain fast benchmark evaluation.
        """
        rng = random.Random(seed)
        values = [0.0, 1.0, 0.5]
        weights = [0.5, 0.3, 0.2]

        samples: List[PuzzleState] = []
        while len(samples) < sample_size:
            rows = []
            for _ in range(self.num_rows):
                c0 = rng.choices(values, weights=weights, k=1)[0]
                c1 = rng.choices(values, weights=weights, k=1)[0]
                rows.append((c0, c1))
            st = PuzzleState(rows)
            if not st.is_goal:
                if max_sand is None or st.total_sand <= max_sand:
                    samples.append(st)
        return samples
