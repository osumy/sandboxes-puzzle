/**
 * Sandboxes Puzzle Visualizer - Main Application Orchestrator
 * Integrates SandboxesEngine, CanvasRenderer, TracePlayer, and BenchmarkDashboard.
 */

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("sandCanvas");
  const engine = new SandboxesEngine(null, 5);
  const renderer = new CanvasRenderer(canvas);
  const dashboard = new BenchmarkDashboard(window.SANDBOX_DATA);

  // Application State
  let currentMode = "player"; // "player" | "manual"
  let currentPresetKey = "professor_case";
  let currentAlgorithmKey = "side_gate_45";
  let manualHistory = [];
  let manualHistoryIndex = -1;

  // Initialize Player
  const player = new TracePlayer(engine, renderer, {
    onStepChange: ({ index, total, stepData, engine }) => {
      updateTimelineUI(index, total, stepData, engine);
    },
    onStateChange: (isPlaying) => {
      const playBtn = document.getElementById("playBtn");
      if (playBtn) {
        playBtn.textContent = isPlaying ? "⏸ Pause" : "▶ Play";
      }
    },
    onGoalReached: (stepData) => {
      showVictoryFeedback(stepData);
    }
  });

  // UI Element References
  const tabBtns = document.querySelectorAll(".tab-btn");
  const viewSections = document.querySelectorAll(".view-section");
  const presetSelect = document.getElementById("presetSelect");
  const algoSelect = document.getElementById("algoSelect");
  const playBtn = document.getElementById("playBtn");
  const stepPrevBtn = document.getElementById("stepPrevBtn");
  const stepNextBtn = document.getElementById("stepNextBtn");
  const resetBtn = document.getElementById("resetBtn");
  const speedSlider = document.getElementById("speedSlider");
  const speedLabel = document.getElementById("speedLabel");
  const timelineSlider = document.getElementById("timelineSlider");
  const timelineLabel = document.getElementById("timelineLabel");
  const costDisplay = document.getElementById("costDisplay");
  const stepDisplay = document.getElementById("stepDisplay");
  const sandDisplay = document.getElementById("sandDisplay");
  const optCostDisplay = document.getElementById("optCostDisplay");
  const actionLog = document.getElementById("actionLog");

  // Tab Navigation
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      viewSections.forEach(s => s.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.dataset.tab;
      const targetView = document.getElementById(targetId);
      if (targetView) targetView.classList.add("active");

      if (targetId === "dashboardView") {
        dashboard.renderAll();
      }
    });
  });

  // Physics Rules Modal Toggle
  const rulesHelpBtn = document.getElementById("rulesHelpBtn");
  const rulesModalOverlay = document.getElementById("rulesModalOverlay");
  const closeRulesBtn = document.getElementById("closeRulesBtn");

  if (rulesHelpBtn && rulesModalOverlay) {
    rulesHelpBtn.addEventListener("click", () => {
      rulesModalOverlay.classList.add("active");
    });
  }

  if (closeRulesBtn && rulesModalOverlay) {
    closeRulesBtn.addEventListener("click", () => {
      rulesModalOverlay.classList.remove("active");
    });
  }

  if (rulesModalOverlay) {
    rulesModalOverlay.addEventListener("click", (e) => {
      if (e.target === rulesModalOverlay) {
        rulesModalOverlay.classList.remove("active");
      }
    });
  }

  // Setup Presets & Algorithms
  function populatePresets() {
    if (!window.SANDBOX_DATA) return;
    const presets = window.SANDBOX_DATA.presets;

    presetSelect.addEventListener("change", (e) => {
      currentPresetKey = e.target.value;
      updateAlgorithmOptions();
      loadActivePreset();
    });

    algoSelect.addEventListener("change", (e) => {
      currentAlgorithmKey = e.target.value;
      loadActiveTrace();
    });

    updateAlgorithmOptions();
    loadActivePreset();
  }

  function updateAlgorithmOptions() {
    algoSelect.innerHTML = "";
    if (currentPresetKey === "professor_case") {
      const options = [
        { key: "side_gate_45", label: "Side-Gate Solution (Cost 45)" },
        { key: "alternative_46", label: "Alternative Solution (Cost 46)" },
        { key: "greedy_47", label: "Greedy Best-First (Cost 47)" },
        { key: "optimal_ucs_50", label: "UCS Baseline (Cost 50)" },
        { key: "astar_50", label: "A* Optimal (Cost 50)" },
      ];
      options.forEach(o => {
        const opt = document.createElement("option");
        opt.value = o.key;
        opt.textContent = o.label;
        algoSelect.appendChild(opt);
      });
      currentAlgorithmKey = "side_gate_45";
    } else if (currentPresetKey === "sample_5row") {
      const options = [
        { key: "astar", label: "A* Search (Optimal)" },
        { key: "ucs", label: "Uniform Cost Search (UCS)" },
        { key: "greedy", label: "Greedy Best-First" },
        { key: "bfs", label: "Breadth-First Search (BFS)" },
        { key: "dfs", label: "Depth-First Search (DFS)" },
        { key: "ids", label: "Iterative Deepening Search (IDS)" },
        { key: "rbfs", label: "Recursive Best-First Search (RBFS)" },
      ];
      options.forEach(o => {
        const opt = document.createElement("option");
        opt.value = o.key;
        opt.textContent = o.label;
        algoSelect.appendChild(opt);
      });
      currentAlgorithmKey = "astar";
    } else if (currentPresetKey === "side_gate_trap") {
      const options = [
        { key: "astar", label: "A* Search (Optimal: Cost 52.0, Uses Side-Gate)" },
        { key: "ucs", label: "Uniform Cost Search (UCS: Cost 52.0, 1742 Nodes)" },
        { key: "greedy", label: "Greedy Best-First (Trap: Cost 54.0, Misses Side-Gate)" },
        { key: "bfs", label: "Breadth-First Search (BFS: Cost 52.0)" },
        { key: "dfs", label: "Depth-First Search (DFS: Wild Detour, Cost 87.0)" },
        { key: "ids", label: "Iterative Deepening Search (IDS: Cost 52.0)" },
        { key: "rbfs", label: "Recursive Best-First Search (RBFS: Cost 52.0)" },
      ];
      options.forEach(o => {
        const opt = document.createElement("option");
        opt.value = o.key;
        opt.textContent = o.label;
        algoSelect.appendChild(opt);
      });
      currentAlgorithmKey = "astar";
    }
  }

  function loadActivePreset() {
    if (!window.SANDBOX_DATA) return;
    const preset = window.SANDBOX_DATA.presets[currentPresetKey];
    if (!preset) return;

    engine.reset(preset.initial_state);
    renderer.render(engine, null, 1.0);
    loadActiveTrace();
  }

  function loadActiveTrace() {
    if (!window.SANDBOX_DATA) return;
    const preset = window.SANDBOX_DATA.presets[currentPresetKey];
    if (!preset || !preset.traces) return;

    const trace = preset.traces[currentAlgorithmKey];
    if (trace) {
      player.loadTrace(trace);
      populateActionLog(trace.steps);
      if (optCostDisplay) {
        if (currentPresetKey === "professor_case") {
          optCostDisplay.textContent = "50.0";
        } else if (currentPresetKey === "side_gate_trap") {
          optCostDisplay.textContent = "52.0";
        } else {
          optCostDisplay.textContent = trace.total_cost.toFixed(1);
        }
      }
    }
  }

  function populateActionLog(steps) {
    if (!actionLog) return;
    actionLog.innerHTML = "";
    steps.forEach((s, idx) => {
      const div = document.createElement("div");
      div.className = "log-entry";
      div.dataset.step = idx;
      div.innerHTML = `<span>#${s.step}: ${s.description}</span><span style="color:var(--sand-light)">+${s.cost.toFixed(1)}</span>`;
      div.addEventListener("click", () => {
        player.seekTo(idx);
      });
      actionLog.appendChild(div);
    });
  }

  function updateTimelineUI(index, total, stepData, engine) {
    if (timelineSlider) {
      timelineSlider.max = total;
      timelineSlider.value = index;
    }
    if (timelineLabel) {
      timelineLabel.textContent = `${index} / ${total}`;
    }
    if (costDisplay) {
      costDisplay.textContent = engine.cumulativeCost.toFixed(1);
    }
    if (stepDisplay) {
      stepDisplay.textContent = engine.stepCount;
    }
    if (sandDisplay) {
      sandDisplay.textContent = `${engine.getTotalSand().toFixed(1)} u`;
    }

    // Highlight active log item
    if (actionLog) {
      const entries = actionLog.querySelectorAll(".log-entry");
      entries.forEach(e => e.classList.remove("active-step"));
      if (entries[index]) {
        entries[index].classList.add("active-step");
        entries[index].scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }

  function showVictoryFeedback(stepData) {
    const cost = engine.cumulativeCost;
    console.log(`[Goal Reached] All sand evacuated! Total Cost: ${cost.toFixed(1)}`);
  }

  // Playback Buttons
  if (playBtn) playBtn.addEventListener("click", () => player.togglePlay());
  if (stepPrevBtn) stepPrevBtn.addEventListener("click", () => player.stepBackward());
  if (stepNextBtn) stepNextBtn.addEventListener("click", () => player.stepForward());
  if (resetBtn) resetBtn.addEventListener("click", () => player.reset());

  if (speedSlider) {
    speedSlider.addEventListener("input", (e) => {
      const spd = Number(e.target.value);
      player.setSpeed(spd);
      if (speedLabel) speedLabel.textContent = `${spd.toFixed(1)}x`;
    });
  }

  if (timelineSlider) {
    timelineSlider.addEventListener("input", (e) => {
      player.pause();
      player.seekTo(Number(e.target.value));
    });
  }

  // Interactive Canvas Gate Clicks (Manual Mode)
  let isManualAnimating = false;
  let manualAnimId = null;

  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const hit = renderer.getHitboxAt(mouseX, mouseY);
    canvas.style.cursor = hit ? "pointer" : "default";
  });

  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const hit = renderer.getHitboxAt(mouseX, mouseY);
    if (!hit) return;

    if (player.isPlaying) {
      player.pause();
    }

    // Inspect pre-action state for descriptive user guidance
    let preInfo = { isBlocked: false, isEmpty: false, c0: 0, c1: 0, s: 0, low: 0 };
    if (hit.type === "TOP_DOWN") {
      preInfo.s = engine.get(hit.row, hit.col);
      preInfo.low = engine.get(hit.row - 1, hit.col);
      preInfo.isBlocked = preInfo.s > 0 && preInfo.low === 1.0;
      preInfo.isEmpty = preInfo.s === 0.0;
    } else if (hit.type === "SIDE_GATE") {
      preInfo.c0 = engine.get(hit.row, 0);
      preInfo.c1 = engine.get(hit.row, 1);
    } else if (hit.type === "COLLECTOR_FLUSH") {
      preInfo.s = engine.get(0, hit.col);
      preInfo.isEmpty = preInfo.s === 0.0;
    }

    let actionRes = null;
    if (hit.type === "COLLECTOR_FLUSH") {
      actionRes = engine.executeCollectorFlush(hit.col);
    } else if (hit.type === "TOP_DOWN") {
      actionRes = engine.executeTopDown(hit.row, hit.col);
    } else if (hit.type === "SIDE_GATE") {
      actionRes = engine.executeSideGate(hit.row);
    }

    if (actionRes) {
      triggerFloatingCost(hit.x + hit.w / 2, hit.y, actionRes.cost, actionRes.is_noop);
      showManualFeedback(hit, actionRes, preInfo);

      // Smooth mechanical animation (380ms)
      if (manualAnimId) {
        cancelAnimationFrame(manualAnimId);
      }
      const animStart = performance.now();
      const animDuration = 380;
      isManualAnimating = true;

      function stepManualAnimation(now) {
        const elapsed = now - animStart;
        const progress = Math.min(1.0, elapsed / animDuration);
        renderer.render(engine, actionRes, progress);

        if (progress < 1.0) {
          manualAnimId = requestAnimationFrame(stepManualAnimation);
        } else {
          isManualAnimating = false;
          manualAnimId = null;
          renderer.render(engine, null, 1.0);
          updateManualHUD(actionRes);
        }
      }
      manualAnimId = requestAnimationFrame(stepManualAnimation);
    }
  });

  function showManualFeedback(hit, actionRes, preInfo) {
    const banner = document.getElementById("manualFeedbackBanner");
    const iconEl = document.getElementById("feedbackIcon");
    const textEl = document.getElementById("feedbackText");
    if (!banner || !iconEl || !textEl) return;

    banner.className = "feedback-banner";
    banner.style.display = "flex";

    if (hit.type === "TOP_DOWN") {
      if (actionRes.is_stuck_open) {
        banner.classList.add("warning");
        iconEl.textContent = "🔓";
        textEl.innerHTML = `<strong>Spring Latch Stuck OPEN:</strong> Lower cell (r=${hit.row - 1}) is full (1.0). Gate drawer remains stuck OPEN (+${actionRes.cost.toFixed(1)} cost). When the gate below opens, both cells cascade down simultaneously!`;
      } else if (actionRes.cascade_occurred) {
        banner.classList.add("success");
        iconEl.textContent = "🌊";
        textEl.innerHTML = `<strong>Simultaneous Gravity Cascade:</strong> Lower gate opened! Sand cascaded downward through open channels simultaneously. Stuck latches released (+${actionRes.cost.toFixed(1)} cost).`;
      } else if (preInfo.isEmpty) {
        banner.classList.add("info");
        iconEl.textContent = "⚠️";
        textEl.innerHTML = `<strong>Empty Cell (No-Op):</strong> Upper cell (r=${hit.row}) is empty; no sand transferred (+${actionRes.cost.toFixed(1)} cost).`;
      } else {
        banner.classList.add("success");
        iconEl.textContent = "✅";
        textEl.innerHTML = `<strong>Vertical Drop:</strong> Transferred ${actionRes.delta_s.toFixed(1)} units of sand from row ${hit.row} to row ${hit.row - 1} (+${actionRes.cost.toFixed(1)} cost). Drawer closed.`;
      }
    } else if (hit.type === "SIDE_GATE") {
      if (actionRes.is_noop) {
        banner.classList.add("info");
        iconEl.textContent = "⚠️";
        textEl.innerHTML = `<strong>Side Gate Inactive (No-Op):</strong> Row ${hit.row} cells are (${preInfo.c0.toFixed(1)}, ${preInfo.c1.toFixed(1)}). Equalization strictly occurs only for (1.0, 0.0) or (0.0, 1.0). Asymmetric combinations like (0, 0.5) or (1, 0.5) produce zero transfer (+${actionRes.cost.toFixed(1)} cost).`;
      } else {
        banner.classList.add("success");
        iconEl.textContent = "✅";
        textEl.innerHTML = `<strong>Side Gate Equalization:</strong> Row ${hit.row} equalized to (0.5, 0.5) (+${actionRes.cost.toFixed(1)} cost).`;
      }
    } else if (hit.type === "COLLECTOR_FLUSH") {
      if (actionRes.cascade_occurred) {
        banner.classList.add("success");
        iconEl.textContent = "🌊";
        textEl.innerHTML = `<strong>Cascade Collector Flush:</strong> Bottom cell and all connected open-channel rows dumped directly into the collector basin (+${actionRes.cost.toFixed(1)} cost).`;
      } else if (preInfo.isEmpty) {
        banner.classList.add("info");
        iconEl.textContent = "⚠️";
        textEl.innerHTML = `<strong>Empty Cell Flush (No-Op):</strong> Bottom cell at col ${hit.col} is empty (+${actionRes.cost.toFixed(1)} cost).`;
      } else {
        banner.classList.add("success");
        iconEl.textContent = "✅";
        textEl.innerHTML = `<strong>Collector Basin Flush:</strong> Dumped ${actionRes.delta_s.toFixed(1)} units of sand into the bottom basin (+${actionRes.cost.toFixed(1)} cost).`;
      }
    }
  }

  function triggerFloatingCost(x, y, cost, isNoop = false) {
    const badge = document.createElement("div");
    badge.className = isNoop ? "floating-cost noop" : "floating-cost";
    badge.textContent = isNoop ? `+${cost.toFixed(1)} ⚠️` : `+${cost.toFixed(1)}`;
    const rect = canvas.getBoundingClientRect();
    badge.style.left = `${rect.left + x - 20}px`;
    badge.style.top = `${rect.top + y - 10}px`;
    document.body.appendChild(badge);
    setTimeout(() => badge.remove(), 850);
  }

  function updateManualHUD(actionRes) {
    if (costDisplay) costDisplay.textContent = engine.cumulativeCost.toFixed(1);
    if (stepDisplay) stepDisplay.textContent = engine.stepCount;
    if (sandDisplay) sandDisplay.textContent = `${engine.getTotalSand().toFixed(1)} u`;

    if (actionLog) {
      const div = document.createElement("div");
      div.className = "log-entry active-step";
      div.innerHTML = `<span>#${engine.stepCount}: ${actionRes.description}</span><span style="color:var(--sand-light)">+${actionRes.cost.toFixed(1)}</span>`;
      actionLog.prepend(div);
    }

    if (engine.isGoal()) {
      alert(`🎉 Puzzle Solved! All cells empty.\nTotal Cost: ${engine.cumulativeCost.toFixed(1)} | Steps: ${engine.stepCount}`);
    }
  }

  // Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") return;

    if (e.code === "Space") {
      e.preventDefault();
      player.togglePlay();
    } else if (e.code === "ArrowRight") {
      e.preventDefault();
      player.stepForward();
    } else if (e.code === "ArrowLeft") {
      e.preventDefault();
      player.stepBackward();
    } else if (e.code === "KeyR") {
      e.preventDefault();
      player.reset();
    }
  });

  // Initialize
  populatePresets();
  dashboard.renderAll();
});
