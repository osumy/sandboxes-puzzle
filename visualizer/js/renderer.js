/**
 * CanvasRenderer - High-performance HTML5 2D Canvas engine for the Sandboxes Puzzle.
 * Features:
 * - High-DPI / Retina supersampling (minimum 2x DPR) for razor-sharp rendering.
 * - Precision laboratory chamber visuals with measurement graduation ticks.
 * - Kinetic multi-stop sand gradients with meniscus surface glow and landing physics.
 * - Autonomous particle drain system: particles settle into sand surfaces and vanish cleanly.
 * - Premium industrial sliding gates & dedicated full-color Spring-Latch Stuck-Open alert drawer.
 * - Neon cyan containment collector basin with volume mound visualization.
 */

class CanvasRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dpr = Math.max(window.devicePixelRatio || 1, 2);

    // Geometry parameters (CSS pixels)
    this.cellWidth = 146;
    this.cellHeight = 90;
    this.colGap = 38;       // Horizontal gap for side gate
    this.rowGap = 32;       // Vertical gap for top-down gate
    this.paddingX = 42;
    this.paddingTop = 38;
    this.collectorHeight = 94;

    // Active animation state
    this.particles = [];
    this.particleDrainActive = false;
    this.particleDrainRaf = null;

    // Hitboxes for manual interaction: array of { type, row, col, x, y, w, h }
    this.hitboxes = [];

    this.setupCanvas();
  }

  setupCanvas() {
    this.numRows = 5;
    this.resize(this.numRows);

    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        const nextDpr = Math.max(window.devicePixelRatio || 1, 2);
        if (nextDpr !== this.dpr) {
          this.resize(this.numRows);
        }
      });
    }
  }

  resize(numRows) {
    this.numRows = numRows;
    this.dpr = Math.max(window.devicePixelRatio || 1, 2);

    const totalW = this.paddingX * 2 + this.cellWidth * 2 + this.colGap;
    const totalH = this.paddingTop + numRows * this.cellHeight + (numRows - 1) * this.rowGap + this.rowGap + this.collectorHeight + 42;

    this.width = totalW;
    this.height = totalH;

    // High-DPI buffer sizing
    this.canvas.width = Math.round(totalW * this.dpr);
    this.canvas.height = Math.round(totalH * this.dpr);
    this.canvas.style.width = `${totalW}px`;
    this.canvas.style.height = `${totalH}px`;

    // Scale drawing context for crisp subpixel rendering
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.ctx.imageSmoothingEnabled = true;
    this.ctx.imageSmoothingQuality = "high";
  }

  setNumRows(n) {
    if (this.numRows !== n) {
      this.resize(n);
    }
  }

  /**
   * Main render pass.
   * @param {SandboxesEngine} engine
   * @param {Object} [activeAction] - Currently playing action
   * @param {number} [progress=1.0] - Animation progress 0..1
   */
  render(engine, activeAction = null, progress = 1.0) {
    this.setNumRows(engine.numRows);
    const ctx = this.ctx;

    // Clean canvas
    ctx.clearRect(0, 0, this.width, this.height);

    this.hitboxes = [];
    const n = engine.numRows;

    // Cell origin mapping: Row 0 is at bottom (above collector), Row n-1 is at top
    const getCellPos = (r, c) => {
      const x = this.paddingX + c * (this.cellWidth + this.colGap);
      const topRowY = this.paddingTop;
      const y = topRowY + (n - 1 - r) * (this.cellHeight + this.rowGap);
      return { x, y };
    };

    // 1. Draw Collector Basin underneath Row 0
    this.drawCollectorBasin(engine);

    // 2. Draw Grid Cells & Sand Fills (with smooth level interpolation during animation)
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < 2; c++) {
        const pos = getCellPos(r, c);
        const fillLevel = this.getVisualSandLevel(engine, r, c, activeAction, progress);
        this.drawCell(pos.x, pos.y, r, c, fillLevel);
      }
    }

    // 3. Draw Gate Drawers, Emit Particles, & Register Hitboxes
    this.drawGates(engine, getCellPos, activeAction, progress);

    // 4. Update & Draw Kinetic Sand Particles
    this.updateAndDrawParticles();

    // 5. Automatic Particle Drain Safeguard:
    // If an action finished (or engine is idle) but particles are still in flight,
    // continue draining them smoothly until every grain lands cleanly.
    if ((!activeAction || progress >= 1.0) && this.particles.length > 0 && !this.particleDrainActive) {
      this.startParticleDrain(engine);
    }
  }

  /**
   * Compute smooth interpolated sand level during active gate animation.
   * Supports both interactive manual mode and trace player playback.
   */
  getVisualSandLevel(engine, r, c, activeAction, progress) {
    if (!activeAction || progress >= 1.0 || activeAction.is_noop) {
      return engine.get(r, c);
    }
    const s0 = engine.get(r, c);

    // If activeAction provides the target state matrix (from solution trace)
    if (activeAction.state && Array.isArray(activeAction.state) && activeAction.state[r]) {
      const s1 = Number(activeAction.state[r][c]);
      if (s0 !== s1) {
        return s0 + (s1 - s0) * progress;
      }
      return s0;
    }

    const type = activeAction.action_type || activeAction.actionType;
    const actionRow = activeAction.row !== undefined ? activeAction.row : (activeAction.target ? activeAction.target.row : null);
    const actionCol = activeAction.col !== undefined ? activeAction.col : (activeAction.target ? activeAction.target.col : null);

    if (type === "TOP_DOWN") {
      if (actionRow === r && actionCol === c) {
        const s_start = activeAction.s_before !== undefined ? activeAction.s_before : s0;
        const s_end = activeAction.s_after !== undefined ? activeAction.s_after : Math.max(0, s0 - (activeAction.delta_s || 0));
        return s_start + (s_end - s_start) * progress;
      }
      if (actionRow - 1 === r && actionCol === c) {
        const delta = activeAction.delta_s || 0;
        return s0 + delta * progress;
      }
    } else if (type === "COLLECTOR_FLUSH") {
      if (r === 0 && actionCol === c) {
        const s_start = activeAction.s_before !== undefined ? activeAction.s_before : s0;
        return s_start * (1.0 - progress);
      }
    } else if (type === "SIDE_GATE") {
      if (actionRow === r && !activeAction.is_noop) {
        return s0 + (0.5 - s0) * progress;
      }
    }
    return s0;
  }

  /**
   * Draw high-precision laboratory containment chamber.
   */
  drawCell(x, y, r, c, level) {
    const ctx = this.ctx;
    const w = this.cellWidth;
    const h = this.cellHeight;
    const radius = 8;

    ctx.save();

    // 1. Chamber Background & Outer Bevel
    const bgGrad = ctx.createLinearGradient(x, y, x, y + h);
    bgGrad.addColorStop(0, "#0e172a");
    bgGrad.addColorStop(1, "#142038");

    ctx.fillStyle = bgGrad;
    ctx.strokeStyle = "#334155";
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.roundRect(x, y, w, h, radius);
    ctx.fill();
    ctx.stroke();

    // Top subtle glass reflection line
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + radius, y + 1.5);
    ctx.lineTo(x + w - radius, y + 1.5);
    ctx.stroke();

    // 2. Precision Measurement Graduation Ticks on Left Inside Edge
    ctx.strokeStyle = "rgba(148, 163, 184, 0.25)";
    ctx.lineWidth = 1;

    // 1.0 tick (top)
    const y10 = y + 24;
    ctx.beginPath();
    ctx.moveTo(x + 5, y10);
    ctx.lineTo(x + 11, y10);
    ctx.stroke();

    // 0.5 tick (middle)
    const y05 = y + h - (h - 26) * 0.5;
    ctx.beginPath();
    ctx.moveTo(x + 5, y05);
    ctx.lineTo(x + 13, y05);
    ctx.stroke();

    // 3. Sand Fill Level
    if (level > 0.0) {
      const clampedLevel = Math.max(0, Math.min(1.0, level));
      const maxSandH = h - 28;
      const sandH = maxSandH * clampedLevel;
      const sandY = y + h - 3 - sandH;

      // Multi-stop kinetic amber gradient
      const grad = ctx.createLinearGradient(x, sandY, x, y + h);
      grad.addColorStop(0, "#fde68a");   // Luminous surface crest
      grad.addColorStop(0.12, "#fbbf24"); // Bright golden amber
      grad.addColorStop(0.55, "#d97706"); // Core rich amber
      grad.addColorStop(1, "#92400e");   // Deep mineral base

      ctx.save();
      // Clip to chamber inner rounded rect
      ctx.beginPath();
      ctx.roundRect(x + 2, y + 2, w - 4, h - 5, [radius - 2, radius - 2, radius - 2, radius - 2]);
      ctx.clip();

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x + 2, sandY, w - 4, sandH + 4, [3, 3, radius - 2, radius - 2]);
      ctx.fill();

      // Glowing surface meniscus
      ctx.shadowColor = "rgba(251, 191, 36, 0.7)";
      ctx.shadowBlur = 6;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x + 3, sandY + 1);
      ctx.lineTo(x + w - 3, sandY + 1);
      ctx.stroke();
      ctx.restore();
    }

    // 4. Chamber Coordinate Badge (Top-Left)
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "rgba(51, 65, 85, 0.7)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x + 8, y + 8, 44, 18, 4);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#94a3b8";
    ctx.font = "600 10px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`r${r},c${c}`, x + 30, y + 17);

    // 5. Sand Mass Badge (Top-Right)
    const isFull = level >= 0.99;
    const isHalf = level > 0.1 && level < 0.99;
    const badgeW = 46;
    const badgeX = x + w - 8 - badgeW;

    ctx.fillStyle = isFull
      ? "rgba(217, 119, 6, 0.4)"
      : isHalf
      ? "rgba(245, 158, 11, 0.25)"
      : "rgba(15, 23, 42, 0.6)";

    ctx.strokeStyle = isFull
      ? "rgba(251, 191, 36, 0.9)"
      : isHalf
      ? "rgba(245, 158, 11, 0.6)"
      : "rgba(71, 85, 105, 0.5)";

    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(badgeX, y + 8, badgeW, 18, 4);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = isFull
      ? "#ffffff"
      : isHalf
      ? "#fde68a"
      : "rgba(148, 163, 184, 0.55)";
    ctx.font = isFull ? "700 11px monospace" : "600 10px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${level.toFixed(1)} u`, badgeX + badgeW / 2, y + 17);

    ctx.restore();
  }

  /**
   * Draw mechanical gates, sliding drawers, and stuck-open latch warning.
   */
  drawGates(engine, getCellPos, activeAction, progress) {
    const ctx = this.ctx;
    const n = engine.numRows;

    const actionType = activeAction ? (activeAction.action_type || activeAction.actionType) : null;
    const actionRow = activeAction ? (activeAction.row !== undefined ? activeAction.row : (activeAction.target ? activeAction.target.row : null)) : null;
    const actionCol = activeAction ? (activeAction.col !== undefined ? activeAction.col : (activeAction.target ? activeAction.target.col : null)) : null;

    // =========================================================================
    // 1. Horizontal Side Gates (Action b, between col 0 and 1 at row r)
    // =========================================================================
    for (let r = 0; r < n; r++) {
      const p0 = getCellPos(r, 0);
      const gx = p0.x + this.cellWidth + 4;
      const gy = p0.y + 14;
      const gw = this.colGap - 8;
      const gh = this.cellHeight - 28;

      const isActive = actionType === "SIDE_GATE" && actionRow === r;
      const isNoop = isActive && Boolean(activeAction.is_noop);
      const shake = isNoop ? Math.sin(progress * Math.PI * 6) * 3 : 0;
      const openAmount = (isActive && !isNoop) ? Math.sin(progress * Math.PI) : 0;

      ctx.save();

      // Track channel
      ctx.fillStyle = "#090f1d";
      ctx.strokeStyle = "#1e293b";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(gx, gy, gw, gh, 5);
      ctx.fill();
      ctx.stroke();

      // Equalization valve capsule
      let valveFill = "#334155";
      let valveStroke = "#475569";
      if (isNoop) {
        valveFill = "#ef4444";
        valveStroke = "#f87171";
      } else if (isActive) {
        valveFill = "#10b981";
        valveStroke = "#6ee7b7";
        ctx.shadowColor = "rgba(16, 185, 129, 0.5)";
        ctx.shadowBlur = 8;
      }

      ctx.fillStyle = valveFill;
      ctx.strokeStyle = valveStroke;
      ctx.lineWidth = 1.2;

      const vY = gy + openAmount * (gh * 0.35);
      const vH = gh - openAmount * (gh * 0.35);
      ctx.beginPath();
      ctx.roundRect(gx + shake, vY, gw, vH, 4);
      ctx.fill();
      ctx.stroke();

      // Glyphs
      ctx.fillStyle = "#ffffff";
      ctx.font = isNoop ? "700 12px sans-serif" : "600 11px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const icon = isNoop ? "✕" : (openAmount > 0.25 ? "⇔" : "⇹");
      ctx.fillText(icon, gx + gw / 2 + shake, gy + gh / 2);

      ctx.restore();

      // Register interactive hitbox
      this.hitboxes.push({
        type: "SIDE_GATE",
        row: r,
        col: null,
        x: gx - 3,
        y: gy - 3,
        w: gw + 6,
        h: gh + 6,
      });
    }

    // =========================================================================
    // 2. Vertical Top-Down Gates (Action a, row r -> r-1)
    // =========================================================================
    for (let r = 1; r < n; r++) {
      for (let c = 0; c < 2; c++) {
        const upperPos = getCellPos(r, c);
        const lowerPos = getCellPos(r - 1, c);
        const gx = upperPos.x + 8;
        const gy = upperPos.y + this.cellHeight + 3;
        const gw = this.cellWidth - 16;
        const gh = this.rowGap - 6;

        const isActive = actionType === "TOP_DOWN" && actionRow === r && actionCol === c;
        const isNoop = isActive && Boolean(activeAction.is_noop);
        const isStuckOpen = engine.openGates && engine.openGates.has(`${r},${c}`);
        const isCascading = Boolean(activeAction && activeAction.cascade_occurred);

        // Slide fraction: stuck open stays visually retracted/alerted
        let slideFraction = 0;
        if (isStuckOpen) {
          slideFraction = 1.0;
        } else if (isActive && !isNoop) {
          slideFraction = Math.sin(progress * Math.PI);
        }

        const shake = isNoop ? Math.sin(progress * Math.PI * 6) * 4 : 0;

        ctx.save();

        // Guide track slot
        ctx.fillStyle = "#090d18";
        ctx.strokeStyle = "#1e293b";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(gx, gy, gw, gh, 5);
        ctx.fill();
        ctx.stroke();

        if (isStuckOpen) {
          // ===================================================================
          // SPRING-LATCH STUCK OPEN (Hazard warning drawer)
          // Uniform rich amber gradient across the entire drawer body!
          // No partial cutoffs, no misaligned text!
          // ===================================================================
          const grad = ctx.createLinearGradient(gx, gy, gx + gw, gy);
          grad.addColorStop(0, "#f59e0b");   // Bright warning amber
          grad.addColorStop(0.5, "#d97706"); // Rich amber core
          grad.addColorStop(1, "#b45309");   // Deep amber border

          ctx.shadowColor = "rgba(245, 158, 11, 0.65)";
          ctx.shadowBlur = 10;
          ctx.fillStyle = grad;
          ctx.strokeStyle = "#fde68a";
          ctx.lineWidth = 1.8;

          ctx.beginPath();
          ctx.roundRect(gx + 1, gy + 1, gw - 2, gh - 2, 4);
          ctx.fill();
          ctx.stroke();

          // High-contrast, centered warning text
          ctx.shadowColor = "rgba(0, 0, 0, 0.85)";
          ctx.shadowBlur = 4;
          ctx.fillStyle = "#ffffff";
          ctx.font = "700 10px monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("🔓 LATCH STUCK OPEN ⇊", gx + gw / 2, gy + gh / 2);

        } else if (isNoop) {
          // Ineffective / Empty drop
          ctx.fillStyle = "#ef4444";
          ctx.strokeStyle = "#f87171";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(gx + shake, gy, gw, gh, 4);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#ffffff";
          ctx.font = "700 10px monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("EMPTY ✕", gx + gw / 2 + shake, gy + gh / 2);

        } else if (isActive && !isNoop) {
          // Active sliding transfer
          const slidePx = slideFraction * (gw * 0.4);

          // Open chute aperture with flow glow
          ctx.fillStyle = "rgba(16, 185, 129, 0.25)";
          ctx.beginPath();
          ctx.roundRect(gx, gy, slidePx, gh, 4);
          ctx.fill();

          // Sliding plate
          const grad = ctx.createLinearGradient(gx + slidePx, gy, gx + gw, gy);
          grad.addColorStop(0, "#10b981");
          grad.addColorStop(1, "#059669");

          ctx.shadowColor = "rgba(16, 185, 129, 0.5)";
          ctx.shadowBlur = 8;
          ctx.fillStyle = grad;
          ctx.strokeStyle = "#6ee7b7";
          ctx.lineWidth = 1.5;

          ctx.beginPath();
          ctx.roundRect(gx + slidePx, gy, gw - slidePx, gh, 4);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#ffffff";
          ctx.font = "700 9px monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("FLOW ⇊", gx + slidePx + (gw - slidePx) / 2, gy + gh / 2);

        } else {
          // Normal Closed Gate
          const plateGrad = ctx.createLinearGradient(gx, gy, gx, gy + gh);
          plateGrad.addColorStop(0, "#334155");
          plateGrad.addColorStop(1, "#1e293b");

          ctx.fillStyle = plateGrad;
          ctx.strokeStyle = "#475569";
          ctx.lineWidth = 1.2;

          ctx.beginPath();
          ctx.roundRect(gx, gy, gw, gh, 4);
          ctx.fill();
          ctx.stroke();

          // Metallic grip bar
          ctx.fillStyle = "#64748b";
          ctx.beginPath();
          ctx.roundRect(gx + gw / 2 - 14, gy + gh / 2 - 2, 28, 4, 2);
          ctx.fill();
        }

        ctx.restore();

        // Register interactive hitbox
        this.hitboxes.push({
          type: "TOP_DOWN",
          row: r,
          col: c,
          x: gx,
          y: gy,
          w: gw,
          h: gh,
        });

        // Kinetic sand particle emission:
        // STRICT CONDITION: Only emit if sand actually moves (not stuck open, not a noop, and has transferred sand)!
        // Stop emitting at progress 0.65 so in-flight particles hit the receiving sand surface cleanly before the gate shuts.
        const sCurrent = engine.get(r, c);
        const targetNextS = (activeAction && activeAction.state && activeAction.state[r]) ? Number(activeAction.state[r][c]) : null;
        const hasSandTransfer = activeAction && (
          (activeAction.delta_s > 0) ||
          (targetNextS !== null && targetNextS < sCurrent) ||
          isCascading
        );
        if (isActive && !isNoop && !isStuckOpen && hasSandTransfer && progress > 0.15 && progress < 0.65) {
          const lowLevel = engine.get(r - 1, c);
          const targetSandH = (this.cellHeight - 28) * Math.min(1.0, lowLevel + (activeAction.delta_s || 0.5));
          const targetY = lowerPos.y + this.cellHeight - 3 - targetSandH;
          this.emitParticles(gx + gw / 2, gy + gh, targetY, 2);
        }
      }
    }

    // =========================================================================
    // 3. Collector Flush Gates (r=0 -> Collector)
    // =========================================================================
    for (let c = 0; c < 2; c++) {
      const p0 = getCellPos(0, c);
      const gx = p0.x + 8;
      const gy = p0.y + this.cellHeight + 3;
      const gw = this.cellWidth - 16;
      const gh = this.rowGap - 6;

      const isActive = actionType === "COLLECTOR_FLUSH" && actionCol === c;
      const isNoop = isActive && Boolean(activeAction.is_noop);
      const shake = isNoop ? Math.sin(progress * Math.PI * 6) * 4 : 0;
      const slideFraction = (isActive && !isNoop) ? Math.sin(progress * Math.PI) : 0;

      ctx.save();

      // Guide track
      ctx.fillStyle = "#090d18";
      ctx.strokeStyle = "#1e293b";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(gx, gy, gw, gh, 5);
      ctx.fill();
      ctx.stroke();

      if (isNoop) {
        ctx.fillStyle = "#ef4444";
        ctx.strokeStyle = "#f87171";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(gx + shake, gy, gw, gh, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = "700 10px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("EMPTY ✕", gx + gw / 2 + shake, gy + gh / 2);

      } else if (isActive) {
        const slidePx = slideFraction * (gw * 0.4);

        // Chute aperture
        ctx.fillStyle = "rgba(56, 189, 248, 0.25)";
        ctx.beginPath();
        ctx.roundRect(gx, gy, slidePx, gh, 4);
        ctx.fill();

        // Valve plate
        const grad = ctx.createLinearGradient(gx + slidePx, gy, gx + gw, gy);
        grad.addColorStop(0, "#0284c7");
        grad.addColorStop(1, "#0369a1");

        ctx.shadowColor = "rgba(56, 189, 248, 0.6)";
        ctx.shadowBlur = 8;
        ctx.fillStyle = grad;
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        ctx.roundRect(gx + slidePx, gy, gw - slidePx, gh, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = "700 9px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("FLUSH ⇊", gx + slidePx + (gw - slidePx) / 2, gy + gh / 2);

      } else {
        const plateGrad = ctx.createLinearGradient(gx, gy, gx, gy + gh);
        plateGrad.addColorStop(0, "#26354a");
        plateGrad.addColorStop(1, "#182335");

        ctx.fillStyle = plateGrad;
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 1.2;

        ctx.beginPath();
        ctx.roundRect(gx, gy, gw, gh, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#7dd3fc";
        ctx.font = "600 9px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("FLUSH ⇊", gx + gw / 2, gy + gh / 2);
      }

      ctx.restore();

      this.hitboxes.push({
        type: "COLLECTOR_FLUSH",
        row: 0,
        col: c,
        x: gx,
        y: gy,
        w: gw,
        h: gh,
      });

      // Collector flush particle emission:
      // Target is the sand mound inside the collector basin
      const flushSand = engine.get(0, c);
      const hasFlushTransfer = activeAction && ((activeAction.delta_s > 0) || flushSand > 0);
      if (isActive && !isNoop && hasFlushTransfer && progress > 0.15 && progress < 0.65) {
        const currentSand = engine.getTotalSand();
        const maxSand = engine.numRows * 2 * 1.0;
        const evacuatedSand = Math.max(0, maxSand - currentSand);
        const fillRatio = Math.min(1.0, evacuatedSand / (maxSand || 1));
        const basinTopY = this.paddingTop + n * this.cellHeight + (n - 1) * this.rowGap + this.rowGap;
        const moundH = (this.collectorHeight - 20) * fillRatio;
        const targetY = basinTopY + this.collectorHeight - 6 - moundH;

        this.emitParticles(gx + gw / 2, gy + gh, targetY, 3);
      }
    }
  }

  /**
   * Draw neon cyan containment basin with evacuated sand mound.
   */
  drawCollectorBasin(engine) {
    const ctx = this.ctx;
    const n = engine.numRows;
    const p0 = this.paddingX;
    const totalW = this.cellWidth * 2 + this.colGap;
    const topY = this.paddingTop + n * this.cellHeight + (n - 1) * this.rowGap + this.rowGap;
    const basinH = this.collectorHeight;

    ctx.save();

    // Curved High-Tech Steel & Glass Trough
    const basinGrad = ctx.createLinearGradient(p0, topY, p0, topY + basinH);
    basinGrad.addColorStop(0, "#080f1d");
    basinGrad.addColorStop(1, "#0d182e");

    ctx.fillStyle = basinGrad;
    ctx.strokeStyle = "#0284c7";
    ctx.lineWidth = 1.8;
    ctx.shadowColor = "rgba(56, 189, 248, 0.4)";
    ctx.shadowBlur = 10;

    ctx.beginPath();
    ctx.moveTo(p0, topY);
    ctx.lineTo(p0 + 22, topY + basinH - 6);
    ctx.quadraticCurveTo(p0 + totalW / 2, topY + basinH + 12, p0 + totalW - 22, topY + basinH - 6);
    ctx.lineTo(p0 + totalW, topY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Subtle internal grid graduation lines
    ctx.shadowBlur = 0;
    ctx.strokeStyle = "rgba(56, 189, 248, 0.12)";
    ctx.lineWidth = 1;
    for (let frac of [0.33, 0.66]) {
      const lineY = topY + basinH * frac;
      ctx.beginPath();
      ctx.moveTo(p0 + 10 + 20 * frac, lineY);
      ctx.lineTo(p0 + totalW - (10 + 20 * frac), lineY);
      ctx.stroke();
    }

    // Evacuated Sand Mound
    const currentSand = engine.getTotalSand();
    const maxSand = engine.numRows * 2 * 1.0;
    const evacuatedSand = Math.max(0, maxSand - currentSand);
    const fillRatio = Math.min(1.0, evacuatedSand / (maxSand || 1));

    if (fillRatio > 0.015) {
      const moundH = (basinH - 22) * fillRatio;
      const moundPeakY = topY + basinH - 6 - moundH;

      const grad = ctx.createLinearGradient(p0, moundPeakY, p0, topY + basinH);
      grad.addColorStop(0, "#fde68a");
      grad.addColorStop(0.2, "#fbbf24");
      grad.addColorStop(0.65, "#d97706");
      grad.addColorStop(1, "#92400e");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(p0 + 18, topY + basinH - 8);
      ctx.quadraticCurveTo(p0 + totalW / 2, moundPeakY - 6, p0 + totalW - 18, topY + basinH - 8);
      ctx.closePath();
      ctx.fill();

      // Meniscus rim
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(p0 + 20, topY + basinH - 8);
      ctx.quadraticCurveTo(p0 + totalW / 2, moundPeakY - 6, p0 + totalW - 20, topY + basinH - 8);
      ctx.stroke();
    }

    // Centered Illuminated Collector Status HUD
    ctx.fillStyle = "#38bdf8";
    ctx.font = "700 11px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0, 0, 0, 0.9)";
    ctx.shadowBlur = 3;
    const pct = (fillRatio * 100).toFixed(0);
    ctx.fillText(
      `⚡ COLLECTOR BASIN: ${evacuatedSand.toFixed(1)} / ${maxSand.toFixed(1)} u (${pct}%)`,
      p0 + totalW / 2,
      topY + basinH - 12
    );

    ctx.restore();
  }

  /**
   * Emit kinetic sand grains with a target landing height.
   */
  emitParticles(x, y, targetY, count = 2) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x + (Math.random() * 12 - 6),
        y: y + Math.random() * 3,
        vx: (Math.random() * 2 - 1) * 0.9,
        vy: 2.2 + Math.random() * 2.6,
        size: 1.8 + Math.random() * 1.8,
        targetY: targetY,
        life: 1.0,
        decay: 0.025 + Math.random() * 0.025,
      });
    }
  }

  /**
   * Update particle positions, perform boundary settlement, and draw them.
   */
  updateAndDrawParticles() {
    if (this.particles.length === 0) return;

    const ctx = this.ctx;
    ctx.save();

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.28; // Gravity acceleration
      p.life -= p.decay;

      // Settlement: when particle hits target sand surface, it vanishes into the sand
      if (p.targetY && p.y >= p.targetY) {
        p.life = 0;
      }

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      ctx.globalAlpha = Math.max(0, Math.min(1.0, p.life));
      ctx.fillStyle = p.life > 0.4 ? "#fde68a" : "#fbbf24";
      ctx.shadowColor = "rgba(251, 191, 36, 0.65)";
      ctx.shadowBlur = 4;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  /**
   * Autonomous particle drain loop:
   * Keeps drawing frames until every last particle hits the sand surface and vanishes.
   * Completely prevents particles from ever freezing mid-air when an action stops or pauses!
   */
  startParticleDrain(engine) {
    if (this.particleDrainActive || this.particles.length === 0) return;

    this.particleDrainActive = true;
    const step = () => {
      if (this.particles.length === 0) {
        this.particleDrainActive = false;
        this.particleDrainRaf = null;
        this.render(engine, null, 1.0);
        return;
      }
      this.render(engine, null, 1.0);
      this.particleDrainRaf = requestAnimationFrame(step);
    };
    this.particleDrainRaf = requestAnimationFrame(step);
  }

  /**
   * Immediately clear all particles (called when seeking timeline, stepping, or resetting).
   */
  clearParticles() {
    this.particles = [];
    if (this.particleDrainRaf) {
      cancelAnimationFrame(this.particleDrainRaf);
      this.particleDrainRaf = null;
    }
    this.particleDrainActive = false;
  }

  /**
   * Find interactive hitbox at mouse coordinates.
   */
  getHitboxAt(mouseX, mouseY) {
    for (const h of this.hitboxes) {
      if (mouseX >= h.x && mouseX <= h.x + h.w && mouseY >= h.y && mouseY <= h.y + h.h) {
        return h;
      }
    }
    return null;
  }
}

if (typeof window !== "undefined") {
  window.CanvasRenderer = CanvasRenderer;
}
