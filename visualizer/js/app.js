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
        optCostDisplay.textContent = currentPresetKey === "professor_case" ? "45.0" : trace.total_cost.toFixed(1);
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
  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const hit = renderer.getHitboxAt(mouseX, mouseY);
    if (!hit) return;

    let actionRes = null;
    if (hit.type === "COLLECTOR_FLUSH") {
      actionRes = engine.executeCollectorFlush(hit.col);
    } else if (hit.type === "TOP_DOWN") {
      actionRes = engine.executeTopDown(hit.row, hit.col);
    } else if (hit.type === "SIDE_GATE") {
      actionRes = engine.executeSideGate(hit.row);
    }

    if (actionRes) {
      triggerFloatingCost(hit.x + hit.w / 2, hit.y, actionRes.cost);
      renderer.render(engine, actionRes, 1.0);
      updateManualHUD(actionRes);
    }
  });

  function triggerFloatingCost(x, y, cost) {
    const badge = document.createElement("div");
    badge.className = "floating-cost";
    badge.textContent = `+${cost.toFixed(1)}`;
    const rect = canvas.getBoundingClientRect();
    badge.style.left = `${rect.left + x - 15}px`;
    badge.style.top = `${rect.top + y - 10}px`;
    document.body.appendChild(badge);
    setTimeout(() => badge.remove(), 800);
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
