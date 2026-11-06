/**
 * BenchmarkDashboard - Standalone Canvas-based vector charting engine.
 * Renders Plot 1, Plot 2, Histogram, and the Algorithm Comparison Table.
 * Zero external dependencies.
 */

class BenchmarkDashboard {
  constructor(data) {
    this.data = data || (typeof window !== "undefined" ? window.SANDBOX_DATA : null);
  }

  setData(data) {
    this.data = data;
    this.renderAll();
  }

  renderAll() {
    if (!this.data) return;
    this.renderPlot1();
    this.renderPlot2();
    this.renderHistogram();
    this.renderTable();
  }

  /**
   * Plot 1: Scatter Plot (x = Greedy Cost, y = Optimum Cost)
   */
  renderPlot1() {
    const canvas = document.getElementById("plot1Canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth || 450;
    const h = canvas.clientHeight || 280;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const points = this.data.state_space_analysis ? this.data.state_space_analysis.plot1_greedy_vs_opt : [];
    if (!points || points.length === 0) return;

    // Bounds
    let maxX = 0;
    let maxY = 0;
    for (const p of points) {
      if (p.greedy_cost > maxX) maxX = p.greedy_cost;
      if (p.opt_cost > maxY) maxY = p.opt_cost;
    }
    const maxVal = Math.max(maxX, maxY) * 1.05 || 100;

    const padL = 45;
    const padR = 20;
    const padT = 20;
    const padB = 40;
    const plotW = w - padL - padR;
    const plotH = h - padT - padB;

    ctx.clearRect(0, 0, w, h);

    // Axes & Grid
    ctx.strokeStyle = "#334155";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padL, padT);
    ctx.lineTo(padL, padT + plotH);
    ctx.lineTo(padL + plotW, padT + plotH);
    ctx.stroke();

    // Reference Diagonal y = x (Ideal Optimality)
    ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(padL, padT + plotH);
    ctx.lineTo(padL + plotW, padT);
    ctx.stroke();
    ctx.setLineDash([]);

    // Reference Label
    ctx.fillStyle = "rgba(56, 189, 248, 0.7)";
    ctx.font = "10px sans-serif";
    ctx.fillText("y = x (Optimal)", padL + plotW - 70, padT + 15);

    // Plot Points
    ctx.fillStyle = "#f59e0b"; // Amber points
    for (const p of points) {
      const px = padL + (p.greedy_cost / maxVal) * plotW;
      const py = padT + plotH - (p.opt_cost / maxVal) * plotH;
      ctx.beginPath();
      ctx.arc(px, py, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Axis Labels
    ctx.fillStyle = "#94a3b8";
    ctx.font = "11px monospace";
    ctx.textAlign = "center";
    ctx.fillText("Cost by Greedy Solution (x)", padL + plotW / 2, h - 8);

    ctx.save();
    ctx.translate(14, padT + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText("Optimum Cost (y)", 0, 0);
    ctx.restore();
  }

  /**
   * Plot 2: Scatter Plot (x = Total Actions, y = Type-b Actions)
   */
  renderPlot2() {
    const canvas = document.getElementById("plot2Canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth || 450;
    const h = canvas.clientHeight || 280;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const points = this.data.state_space_analysis ? this.data.state_space_analysis.plot2_actions_vs_type_b : [];
    if (!points || points.length === 0) return;

    let maxX = 0;
    let maxY = 0;
    for (const p of points) {
      if (p.total_actions > maxX) maxX = p.total_actions;
      if (p.type_b_actions > maxY) maxY = p.type_b_actions;
    }
    const maxValX = Math.max(maxX * 1.1, 20);
    const maxValY = Math.max(maxY * 1.2, 5);

    const padL = 45;
    const padR = 20;
    const padT = 20;
    const padB = 40;
    const plotW = w - padL - padR;
    const plotH = h - padT - padB;

    ctx.clearRect(0, 0, w, h);

    // Axes
    ctx.strokeStyle = "#334155";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padL, padT);
    ctx.lineTo(padL, padT + plotH);
    ctx.lineTo(padL + plotW, padT + plotH);
    ctx.stroke();

    // Plot Points
    ctx.fillStyle = "#38bdf8"; // Sky blue points
    for (const p of points) {
      const px = padL + (p.total_actions / maxValX) * plotW;
      const py = padT + plotH - (p.type_b_actions / maxValY) * plotH;
      ctx.beginPath();
      ctx.arc(px, py, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Labels
    ctx.fillStyle = "#94a3b8";
    ctx.font = "11px monospace";
    ctx.textAlign = "center";
    ctx.fillText("Number of Actions to Goal (x)", padL + plotW / 2, h - 8);

    ctx.save();
    ctx.translate(14, padT + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText("Side Gates b (y)", 0, 0);
    ctx.restore();
  }

  /**
   * Plot 3: Frequency Distribution Histogram (Greedy_opt_ratio)
   */
  renderHistogram() {
    const canvas = document.getElementById("histCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth || 900;
    const h = canvas.clientHeight || 260;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const hist = this.data.state_space_analysis ? this.data.state_space_analysis.histogram : null;
    if (!hist || !hist.counts || hist.counts.length === 0) return;

    const counts = hist.counts;
    const bins = hist.bins;
    const maxCount = Math.max(...counts) * 1.1 || 1;

    const padL = 60;
    const padR = 20;
    const padT = 25;
    const padB = 40;
    const plotW = w - padL - padR;
    const plotH = h - padT - padB;

    ctx.clearRect(0, 0, w, h);

    // Axes
    ctx.strokeStyle = "#334155";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padL, padT);
    ctx.lineTo(padL, padT + plotH);
    ctx.lineTo(padL + plotW, padT + plotH);
    ctx.stroke();

    const barW = plotW / counts.length;

    // Draw Bars
    for (let i = 0; i < counts.length; i++) {
      const c = counts[i];
      const barH = (c / maxCount) * plotH;
      const bx = padL + i * barW + 2;
      const by = padT + plotH - barH;

      const grad = ctx.createLinearGradient(bx, by, bx, padT + plotH);
      grad.addColorStop(0, "#10b981");
      grad.addColorStop(1, "rgba(16, 185, 129, 0.4)");

      ctx.fillStyle = grad;
      ctx.fillRect(bx, by, barW - 4, barH);

      // Value label on bar
      if (barH > 15) {
        ctx.fillStyle = "#fff";
        ctx.font = "10px monospace";
        ctx.textAlign = "center";
        ctx.fillText(c, bx + (barW - 4) / 2, by - 4);
      }

      // X-axis tick
      ctx.fillStyle = "#94a3b8";
      ctx.font = "9px monospace";
      ctx.textAlign = "center";
      const binLabel = bins[i] !== undefined ? Number(bins[i]).toFixed(2) : "";
      ctx.fillText(binLabel, bx + (barW - 4) / 2, padT + plotH + 16);
    }

    // Histogram Stats Overlay
    const stats = this.data.state_space_analysis;
    if (stats) {
      ctx.fillStyle = "#38bdf8";
      ctx.font = "11px monospace";
      ctx.textAlign = "right";
      ctx.fillText(
        `Mean Ratio: ${stats.mean_ratio} | Median: ${stats.median_ratio} | Max: ${stats.max_suboptimality}`,
        padL + plotW - 10,
        padT + 12
      );
    }

    // X Axis Label
    ctx.fillStyle = "#94a3b8";
    ctx.font = "11px monospace";
    ctx.textAlign = "center";
    ctx.fillText("Greedy_opt_ratio = (Greedy Cost) / (Optimum Cost)", padL + plotW / 2, h - 6);
  }

  /**
   * Comparative Benchmark Table
   */
  renderTable() {
    const tableBody = document.getElementById("benchmarkTableBody");
    if (!tableBody) return;
    const summary = this.data.benchmark_summary || [];

    tableBody.innerHTML = "";
    for (const row of summary) {
      const tr = document.createElement("tr");

      const optBadge = row.optimal
        ? `<span class="badge-optimal">YES (Optimal)</span>`
        : `<span class="badge-subopt">${row.optimality_rate}% Opt</span>`;

      tr.innerHTML = `
        <td><strong>${row.algorithm}</strong></td>
        <td>${row.mean_cost.toFixed(1)}</td>
        <td>${row.mean_length.toFixed(1)}</td>
        <td>${row.mean_nodes_expanded.toLocaleString()}</td>
        <td>${row.mean_nodes_generated.toLocaleString()}</td>
        <td>${row.mean_time_ms.toFixed(2)} ms</td>
        <td>${row.mean_peak_memory_mb.toFixed(3)} MB</td>
        <td>${optBadge}</td>
      `;
      tableBody.appendChild(tr);
    }
  }
}

if (typeof window !== "undefined") {
  window.BenchmarkDashboard = BenchmarkDashboard;
}
