/**
 * SandboxesEngine - Client-side simulation of the Sandboxes Puzzle physics.
 * Zero external dependencies.
 */

class SandboxesEngine {
  /**
   * @param {number[][]} [initialGrid] - Array of rows from bottom (0) to top (n-1). Each row has 2 values in {0, 0.5, 1}.
   * @param {number} [numRows=5] - Number of rows if initialGrid is not supplied.
   */
  constructor(initialGrid, numRows = 5) {
    if (initialGrid) {
      this.numRows = initialGrid.length;
      this.grid = initialGrid.map(row => [Number(row[0]), Number(row[1])]);
    } else {
      this.numRows = numRows;
      this.grid = Array.from({ length: numRows }, () => [0, 0]);
    }
    this.cumulativeCost = 0.0;
    this.stepCount = 0;
    this.openGates = new Set(); // Stores "row,col" keys of gates stuck open by spring latch
  }

  clone() {
    const nextEngine = new SandboxesEngine(this.grid, this.numRows);
    nextEngine.cumulativeCost = this.cumulativeCost;
    nextEngine.stepCount = this.stepCount;
    nextEngine.openGates = new Set(this.openGates);
    return nextEngine;
  }

  reset(grid) {
    if (grid) {
      this.numRows = grid.length;
      this.grid = grid.map(row => [Number(row[0]), Number(row[1])]);
    } else {
      this.grid = this.grid.map(() => [0, 0]);
    }
    this.cumulativeCost = 0.0;
    this.stepCount = 0;
    this.openGates.clear();
  }

  isGateOpen(row, col) {
    return this.openGates.has(`${row},${col}`);
  }

  get(row, col) {
    if (row < 0 || row >= this.numRows || (col !== 0 && col !== 1)) {
      return 0.0;
    }
    return this.grid[row][col];
  }

  getTotalSand() {
    let sum = 0;
    for (let r = 0; r < this.numRows; r++) {
      sum += this.grid[r][0] + this.grid[r][1];
    }
    return Math.round(sum * 10) / 10;
  }

  isGoal() {
    return this.getTotalSand() === 0.0;
  }

  /**
   * Action a: Top-down vertical drop from row r to row r-1 in column c.
   * Includes Special Spring-Latch Rule: if upper has sand and lower is full,
   * gate gets stuck open and sand cascades when a lower gate subsequently opens.
   */
  executeTopDown(row, col) {
    if (row <= 0 || row >= this.numRows) {
      throw new Error(`Invalid row for top-down drop: ${row}`);
    }
    const s = this.grid[row][col];
    const low = this.grid[row - 1][col];

    // Special Spring-Latch Rule:
    // If upper box has sand (1.0 or 0.5) and lower box is full (1.0),
    // drawer opens, sand cannot move immediately, and the latch gets stuck OPEN!
    if (s > 0.0 && low === 1.0) {
      const cost = 1.0 + 4.0 * (s + s);
      this.cumulativeCost += cost;
      this.stepCount += 1;
      this.openGates.add(`${row},${col}`);

      return {
        actionType: "TOP_DOWN",
        action_type: "TOP_DOWN",
        row,
        col,
        cost,
        delta_s: 0.0,
        s_before: s,
        s_after: s,
        is_noop: false,
        is_stuck_open: true,
        cascade_occurred: false,
        description: `Drop(r=${row}->${row - 1}, c=${col}) [Latch Stuck OPEN]`
      };
    }

    // Lower box has available capacity
    const cap = 1.0 - low;
    const delta = Math.min(s, cap);
    const sPrime = Math.round((s - delta) * 10) / 10;

    this.grid[row][col] = sPrime;
    this.grid[row - 1][col] = Math.round((low + delta) * 10) / 10;

    const cost = 1.0 + 4.0 * (s + sPrime);
    this.cumulativeCost += cost;
    this.stepCount += 1;
    this.openGates.delete(`${row},${col}`);

    // Check if any open gates above row r cascade downward
    let m = row;
    while (m + 1 < this.numRows && this.openGates.has(`${m + 1},${col}`)) {
      m++;
    }
    let cascadeOccurred = false;
    if (m > row) {
      cascadeOccurred = true;
      let totalSandInChannel = 0;
      for (let rIdx = row; rIdx <= m; rIdx++) {
        totalSandInChannel += this.grid[rIdx][col];
      }
      let rem = Math.round(totalSandInChannel * 10) / 10;
      for (let rIdx = row; rIdx <= m; rIdx++) {
        const fill = Math.min(1.0, rem);
        this.grid[rIdx][col] = fill;
        rem = Math.round((rem - fill) * 10) / 10;
      }
      for (let rIdx = row + 1; rIdx <= m; rIdx++) {
        this.openGates.delete(`${rIdx},${col}`);
      }
    }

    return {
      actionType: "TOP_DOWN",
      action_type: "TOP_DOWN",
      row,
      col,
      cost,
      delta_s: delta,
      s_before: s,
      s_after: sPrime,
      is_noop: delta === 0 && s === 0,
      is_stuck_open: false,
      cascade_occurred: cascadeOccurred,
      description: cascadeOccurred
        ? `Drop(r=${row}->${row - 1}, c=${col}) [Cascade Release]`
        : `Drop(r=${row}->${row - 1}, c=${col})`
    };
  }

  /**
   * Action a: Bottom row collector flush into basin.
   * Flushes row 0 and cascades any connected stuck-open channels directly into basin.
   */
  executeCollectorFlush(col) {
    if (col !== 0 && col !== 1) {
      throw new Error(`Invalid col for collector flush: ${col}`);
    }
    const s = this.grid[0][col];
    this.grid[0][col] = 0.0;

    const cost = 1.0 + 4.0 * s;
    this.cumulativeCost += cost;
    this.stepCount += 1;

    // Check if contiguous open gates above row 0 cascade into basin
    let currR = 1;
    let cascadeOccurred = false;
    while (currR < this.numRows && this.openGates.has(`${currR},${col}`)) {
      cascadeOccurred = true;
      this.grid[currR][col] = 0.0;
      this.openGates.delete(`${currR},${col}`);
      currR++;
    }

    return {
      actionType: "COLLECTOR_FLUSH",
      action_type: "COLLECTOR_FLUSH",
      row: 0,
      col,
      cost,
      delta_s: s,
      s_before: s,
      s_after: 0.0,
      is_noop: s === 0 && !cascadeOccurred,
      is_stuck_open: false,
      cascade_occurred: cascadeOccurred,
      description: cascadeOccurred ? `Flush(r=0, c=${col}) [Cascade Flush]` : `Flush(r=0, c=${col})`
    };
  }

  /**
   * Action b: Horizontal side gate equalization at row r.
   */
  executeSideGate(row) {
    if (row < 0 || row >= this.numRows) {
      throw new Error(`Invalid row for side gate: ${row}`);
    }
    const c0 = this.grid[row][0];
    const c1 = this.grid[row][1];
    let is_noop = true;

    if ((c0 === 1.0 && c1 === 0.0) || (c0 === 0.0 && c1 === 1.0)) {
      this.grid[row][0] = 0.5;
      this.grid[row][1] = 0.5;
      is_noop = false;
    }

    const cost = 1.0;
    this.cumulativeCost += cost;
    this.stepCount += 1;

    return {
      actionType: "SIDE_GATE",
      action_type: "SIDE_GATE",
      row,
      col: null,
      cost,
      delta_s: is_noop ? 0.0 : 0.5,
      s0_before: c0,
      s1_before: c1,
      is_noop,
      description: is_noop ? `SideGate(r=${row}) [No-op]` : `SideGate(r=${row})`
    };
  }

  /**
   * Generates a random initial state according to problem specification:
   * P(0.0) = 0.5, P(1.0) = 0.3, P(0.5) = 0.2.
   */
  static generateRandomState(numRows = 5) {
    const rows = [];
    const pickValue = () => {
      const r = Math.random();
      if (r < 0.5) return 0.0;
      if (r < 0.8) return 1.0;
      return 0.5;
    };
    for (let r = 0; r < numRows; r++) {
      rows.push([pickValue(), pickValue()]);
    }
    return rows;
  }
}

// Export for window or module environments
if (typeof window !== "undefined") {
  window.SandboxesEngine = SandboxesEngine;
}
