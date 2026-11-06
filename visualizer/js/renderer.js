/**
 * CanvasRenderer - High-performance HTML5 2D Canvas engine for the Sandboxes Puzzle.
 * Renders the 2-column grid, sand mass levels, kinetic particle flow, sliding gates, and collector basin.
 */

class CanvasRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dpr = window.devicePixelRatio || 1;

    // Geometry parameters (pixels)
    this.cellWidth = 140;
    this.cellHeight = 85;
    this.colGap = 36;       // Horizontal gap for side gate
    this.rowGap = 28;       // Vertical gap for top-down gate
    this.paddingX = 40;
    this.paddingTop = 40;
    this.collectorHeight = 90;

    // Active animation state
    this.particles = [];
    this.animatingAction = null;
    this.animProgress = 1.0; // 0.0 to 1.0

    // Gate drawer visual state: key -> { openFraction: 0..1, activeColor }
    this.gateStates = new Map();

    // Hitboxes for manual interaction: array of { type, row, col, x, y, w, h }
    this.hitboxes = [];

    this.setupCanvas();
  }

  setupCanvas() {
    // Dynamic sizing based on numRows
    this.numRows = 5;
    this.resize(this.numRows);
  }

  resize(numRows) {
    this.numRows = numRows;
    const totalW = this.paddingX * 2 + this.cellWidth * 2 + this.colGap;
    const totalH = this.paddingTop + numRows * this.cellHeight + (numRows - 1) * this.rowGap + this.rowGap + this.collectorHeight + 40;

    this.canvas.width = totalW * this.dpr;
    this.canvas.height = totalH * this.dpr;
    this.canvas.style.width = `${totalW}px`;
    this.canvas.style.height = `${totalH}px`;
    this.ctx.scale(this.dpr, this.dpr);

    this.width = totalW;
    this.height = totalH;
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
    ctx.clearRect(0, 0, this.width, this.height);

    this.hitboxes = [];
    const n = engine.numRows;

    // Compute cell origins
    // Row 0 is at bottom (above collector), Row n-1 is at top
    const getCellPos = (r, c) => {
      const x = this.paddingX + c * (this.cellWidth + this.colGap);
      const topRowY = this.paddingTop;
      const y = topRowY + (n - 1 - r) * (this.cellHeight + this.rowGap);
      return { x, y };
    };

    // 1. Draw Collector Basin underneath Row 0
    this.drawCollectorBasin(engine);

    // 2. Draw Grid Cells & Sand Fills
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < 2; c++) {
        const pos = getCellPos(r, c);
        const fillLevel = engine.get(r, c);
        this.drawCell(pos.x, pos.y, r, c, fillLevel);
      }
    }

    // 3. Draw Gate Drawers & Register Hitboxes
    this.drawGates(engine, getCellPos, activeAction, progress);

    // 4. Update & Draw Sand Particles
    this.updateAndDrawParticles();
  }

  drawCell(x, y, r, c, level) {
    const ctx = this.ctx;
    const w = this.cellWidth;
    const h = this.cellHeight;
    const radius = 6;

    // Cell outer container
    ctx.save();
    ctx.fillStyle = "#131b2e";
    ctx.strokeStyle = "#334155";
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.roundRect(x, y, w, h, radius);
    ctx.fill();
    ctx.stroke();

    // Sand Fill Level
    if (level > 0.0) {
      const sandH = level === 1.0 ? h - 4 : (h - 4) * 0.5;
      const sandY = y + h - 2 - sandH;

      const grad = ctx.createLinearGradient(x, sandY, x, y + h);
      grad.addColorStop(0, "#fbbf24"); // Amber light meniscus
      grad.addColorStop(0.3, "#d97706"); // Amber base
      grad.addColorStop(1, "#b45309"); // Amber dark bottom

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x + 2, sandY, w - 4, sandH, [2, 2, 4, 4]);
      ctx.fill();

      // Meniscus line
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x + 4, sandY + 1);
      ctx.lineTo(x + w - 4, sandY + 1);
      ctx.stroke();
    }

    // Level Badge Label
    ctx.fillStyle = level > 0 ? "rgba(255, 255, 255, 0.9)" : "rgba(148, 163, 184, 0.5)";
    ctx.font = "bold 11px monospace";
    ctx.textAlign = "right";
    ctx.fillText(`${level.toFixed(1)}`, x + w - 8, y + 16);

    // Cell Coordinate Label (r, c)
    ctx.fillStyle = "rgba(100, 116, 139, 0.7)";
    ctx.font = "10px monospace";
    ctx.textAlign = "left";
    ctx.fillText(`r${r},c${c}`, x + 8, y + 16);

    ctx.restore();
  }

  drawGates(engine, getCellPos, activeAction, progress) {
    const ctx = this.ctx;
    const n = engine.numRows;

    // 1. Horizontal Side Gates (Action b, between col 0 and 1 at row r)
    for (let r = 0; r < n; r++) {
      const p0 = getCellPos(r, 0);
      const gx = p0.x + this.cellWidth;
      const gy = p0.y + 10;
      const gw = this.colGap;
      const gh = this.cellHeight - 20;

      const isActive = activeAction && activeAction.action_type === "SIDE_GATE" && activeAction.row === r;
      const openAmount = isActive ? Math.sin(progress * Math.PI) : 0;

      ctx.save();
      // Side Gate Frame
      ctx.fillStyle = isActive ? "#10b981" : "#475569";
      ctx.beginPath();
      ctx.roundRect(gx + 4, gy + openAmount * (gh * 0.4), gw - 8, gh - openAmount * (gh * 0.4), 3);
      ctx.fill();

      // Gate Icon / Arrows
      ctx.fillStyle = "#fff";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(openAmount > 0.3 ? "⇔" : "⇹", gx + gw / 2, gy + gh / 2 + 3);

      ctx.restore();

      // Register hitbox for manual click
      this.hitboxes.push({
        type: "SIDE_GATE",
        row: r,
        col: null,
        x: gx,
        y: gy,
        w: gw,
        h: gh,
      });
    }

    // 2. Vertical Top-Down Gates (Action a, row r -> r-1)
    for (let r = 1; r < n; r++) {
      for (let c = 0; c < 2; c++) {
        const upperPos = getCellPos(r, c);
        const gx = upperPos.x + 10;
        const gy = upperPos.y + this.cellHeight;
        const gw = this.cellWidth - 20;
        const gh = this.rowGap;

        const isActive = activeAction && activeAction.action_type === "TOP_DOWN" && activeAction.row === r && activeAction.col === c;
        const openAmount = isActive ? Math.sin(progress * Math.PI) : 0;

        ctx.save();
        // Sliding Drawer
        ctx.fillStyle = isActive ? "#10b981" : "#475569";
        ctx.beginPath();
        // Slide right when open
        ctx.roundRect(gx + openAmount * 25, gy + 4, gw - openAmount * 25, gh - 8, 3);
        ctx.fill();

        // Handle
        ctx.fillStyle = "#cbd5e1";
        ctx.fillRect(gx + gw / 2 - 8, gy + gh / 2 - 2, 16, 4);

        ctx.restore();

        this.hitboxes.push({
          type: "TOP_DOWN",
          row: r,
          col: c,
          x: gx,
          y: gy,
          w: gw,
          h: gh,
        });

        // Emit particles during transfer
        if (isActive && progress > 0.2 && progress < 0.85) {
          this.emitParticles(gx + gw / 2, gy + gh, 2);
        }
      }
    }

    // 3. Collector Flush Gates (r=0 -> Collector)
    for (let c = 0; c < 2; c++) {
      const p0 = getCellPos(0, c);
      const gx = p0.x + 10;
      const gy = p0.y + this.cellHeight;
      const gw = this.cellWidth - 20;
      const gh = this.rowGap;

      const isActive = activeAction && activeAction.action_type === "COLLECTOR_FLUSH" && activeAction.col === c;
      const openAmount = isActive ? Math.sin(progress * Math.PI) : 0;

      ctx.save();
      ctx.fillStyle = isActive ? "#38bdf8" : "#475569";
      ctx.beginPath();
      ctx.roundRect(gx + openAmount * 25, gy + 4, gw - openAmount * 25, gh - 8, 3);
      ctx.fill();

      ctx.fillStyle = "#fff";
      ctx.font = "9px monospace";
      ctx.textAlign = "center";
      ctx.fillText("FLUSH", gx + gw / 2, gy + gh / 2 + 3);

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

      if (isActive && progress > 0.2 && progress < 0.85) {
        this.emitParticles(gx + gw / 2, gy + gh, 3);
      }
    }
  }

  drawCollectorBasin(engine) {
    const ctx = this.ctx;
    const n = engine.numRows;
    const p0 = this.paddingX;
    const totalW = this.cellWidth * 2 + this.colGap;
    const topY = this.paddingTop + n * this.cellHeight + (n - 1) * this.rowGap + this.rowGap;
    const basinH = this.collectorHeight;

    ctx.save();
    // Curved Glass / Steel Trough
    ctx.fillStyle = "#0c1424";
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.moveTo(p0, topY);
    ctx.lineTo(p0 + 20, topY + basinH);
    ctx.quadraticCurveTo(p0 + totalW / 2, topY + basinH + 15, p0 + totalW - 20, topY + basinH);
    ctx.lineTo(p0 + totalW, topY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Fill level mound in collector
    const currentSand = engine.getTotalSand();
    const maxSand = engine.numRows * 2 * 1.0;
    const evacuatedSand = Math.max(0, maxSand - currentSand);
    const fillRatio = Math.min(1.0, evacuatedSand / (maxSand || 1));

    if (fillRatio > 0.02) {
      const moundH = basinH * 0.75 * fillRatio;
      const moundY = topY + basinH - moundH;

      const grad = ctx.createLinearGradient(p0, moundY, p0, topY + basinH);
      grad.addColorStop(0, "#fbbf24");
      grad.addColorStop(1, "#b45309");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(p0 + 15, topY + basinH - 4);
      ctx.quadraticCurveTo(p0 + totalW / 2, moundY - 8, p0 + totalW - 15, topY + basinH - 4);
      ctx.closePath();
      ctx.fill();
    }

    // Collector Label
    ctx.fillStyle = "rgba(56, 189, 248, 0.7)";
    ctx.font = "bold 11px monospace";
    ctx.textAlign = "center";
    ctx.fillText(`COLLECTOR BASIN (${evacuatedSand.toFixed(1)} / ${maxSand.toFixed(1)} units)`, p0 + totalW / 2, topY + basinH - 10);

    ctx.restore();
  }

  emitParticles(x, y, count = 2) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x + (Math.random() * 8 - 4),
        y: y,
        vx: (Math.random() * 2 - 1),
        vy: 2 + Math.random() * 3,
        size: 1.5 + Math.random() * 2,
        life: 1.0,
      });
    }
  }

  updateAndDrawParticles() {
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = "#fbbf24";

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.2; // Gravity
      p.life -= 0.04;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      ctx.globalAlpha = p.life;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

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
