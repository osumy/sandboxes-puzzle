/**
 * TracePlayer - Controls timeline playback for algorithm solution traces.
 * Supports Play, Pause, Step Forward/Back, Reset, and Speed scrubber.
 */

class TracePlayer {
  constructor(engine, renderer, options = {}) {
    this.engine = engine;
    this.renderer = renderer;

    this.trace = null;
    this.currentStepIndex = 0;
    this.isPlaying = false;
    this.playbackSpeed = 1.0; // 1x = 700ms per step for comfortable, visible animation
    this.baseStepDuration = 700; // ms

    this.onStepChange = options.onStepChange || (() => {});
    this.onStateChange = options.onStateChange || (() => {});
    this.onGoalReached = options.onGoalReached || (() => {});

    this.animFrameId = null;
    this.lastFrameTime = 0;
    this.stepProgress = 1.0;
  }

  loadTrace(trace) {
    this.pause();
    if (this.renderer && this.renderer.clearParticles) {
      this.renderer.clearParticles();
    }
    this.trace = trace;
    this.currentStepIndex = 0;
    this.stepProgress = 1.0;

    if (trace && trace.steps && trace.steps.length > 0) {
      const initialStep = trace.steps[0];
      this.engine.reset(initialStep.state);
      this.engine.cumulativeCost = 0.0;
      this.engine.stepCount = 0;
      this.renderer.render(this.engine, null, 1.0);
      this.notifyStep();
    }
  }

  play() {
    if (!this.trace || this.currentStepIndex >= this.trace.steps.length - 1) {
      if (this.currentStepIndex >= this.trace.steps.length - 1) {
        this.seekTo(0);
      }
    }
    this.isPlaying = true;
    this.lastFrameTime = performance.now();
    this.stepProgress = 0.0;
    this.onStateChange(true);
    this.animate();
  }

  pause() {
    this.isPlaying = false;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    // Drain any in-flight particles cleanly into the sand surface
    if (this.renderer && this.renderer.startParticleDrain) {
      this.renderer.startParticleDrain(this.engine);
    }
    this.onStateChange(false);
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  setSpeed(speed) {
    this.playbackSpeed = Math.max(0.1, Math.min(10.0, Number(speed)));
  }

  stepForward() {
    this.pause();
    if (this.renderer && this.renderer.clearParticles) {
      this.renderer.clearParticles();
    }
    if (!this.trace) return;
    if (this.currentStepIndex < this.trace.steps.length - 1) {
      this.seekTo(this.currentStepIndex + 1);
    }
  }

  stepBackward() {
    this.pause();
    if (this.renderer && this.renderer.clearParticles) {
      this.renderer.clearParticles();
    }
    if (!this.trace) return;
    if (this.currentStepIndex > 0) {
      this.seekTo(this.currentStepIndex - 1);
    }
  }

  reset() {
    this.pause();
    if (this.renderer && this.renderer.clearParticles) {
      this.renderer.clearParticles();
    }
    this.seekTo(0);
  }

  seekTo(index) {
    if (!this.trace || !this.trace.steps) return;
    if (this.renderer && this.renderer.clearParticles) {
      this.renderer.clearParticles();
    }
    const target = Math.max(0, Math.min(this.trace.steps.length - 1, index));
    this.currentStepIndex = target;
    this.stepProgress = 1.0;

    const stepData = this.trace.steps[target];
    this.engine.reset(stepData.state);
    this.engine.cumulativeCost = stepData.cum_cost;
    this.engine.stepCount = stepData.step;

    this.renderer.render(this.engine, stepData, 1.0);
    this.notifyStep();

    if (this.engine.isGoal()) {
      this.onGoalReached(stepData);
    }
  }

  animate() {
    if (!this.isPlaying) return;

    const now = performance.now();
    const dt = now - this.lastFrameTime;
    this.lastFrameTime = now;

    const duration = Math.max(30, this.baseStepDuration / this.playbackSpeed);
    this.stepProgress += dt / duration;

    const currentStep = this.trace.steps[this.currentStepIndex];
    const nextStep = this.trace.steps[this.currentStepIndex + 1];

    if (this.stepProgress >= 1.0) {
      this.stepProgress = 0.0;
      this.currentStepIndex += 1;

      const newStep = this.trace.steps[this.currentStepIndex];
      this.engine.reset(newStep.state);
      this.engine.cumulativeCost = newStep.cum_cost;
      this.engine.stepCount = newStep.step;
      this.notifyStep();

      if (this.engine.isGoal() || this.currentStepIndex >= this.trace.steps.length - 1) {
        this.pause();
        this.renderer.render(this.engine, newStep, 1.0);
        if (this.renderer && this.renderer.startParticleDrain) {
          this.renderer.startParticleDrain(this.engine);
        }
        this.onGoalReached(newStep);
        return;
      }
    }

    this.renderer.render(this.engine, nextStep || currentStep, this.stepProgress);
    this.animFrameId = requestAnimationFrame(() => this.animate());
  }

  notifyStep() {
    const step = this.trace ? this.trace.steps[this.currentStepIndex] : null;
    this.onStepChange({
      index: this.currentStepIndex,
      total: this.trace ? this.trace.steps.length - 1 : 0,
      stepData: step,
      engine: this.engine
    });
  }
}

if (typeof window !== "undefined") {
  window.TracePlayer = TracePlayer;
}
