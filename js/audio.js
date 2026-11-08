// =============================================================================
// GESTOR DE AUDIO Y SÍNTESIS DE VOZ · SCIENCE 4.º PRIMARIA · TEMA 2
// Web Audio API sintetizado nativo + SpeechSynthesis (Español)
// Optimizado para iPad, Safari, Chrome y dispositivos táctiles
// =============================================================================

class SoundManager {
  constructor() {
    this.soundEnabled = true;
    this.voiceEnabled = false;
    this.audioCtx = null;
    this.synth = ('speechSynthesis' in window) ? window.speechSynthesis : null;
    this.currentUtterance = null;
  }

  initContext() {
    if (!this.audioCtx) {
      var AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        try {
          this.audioCtx = new AudioContextClass();
        } catch (e) {
          console.warn("AudioContext no disponible", e);
        }
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      try {
        this.audioCtx.resume();
      } catch (e) {}
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }

  toggleVoice() {
    this.voiceEnabled = !this.voiceEnabled;
    if (!this.voiceEnabled && this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
    return this.voiceEnabled;
  }

  playTone(frequency, type, duration, gainValue, startTime) {
    if (!this.soundEnabled) return;
    this.initContext();
    if (!this.audioCtx) return;

    type = type || "sine";
    duration = duration || 0.15;
    gainValue = gainValue || 0.15;
    startTime = startTime || 0;

    try {
      var t = this.audioCtx.currentTime + startTime;
      var osc = this.audioCtx.createOscillator();
      var gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.exponentialRampToValueAtTime(gainValue, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(t);
      osc.stop(t + duration);
    } catch (e) {}
  }

  playClick() {
    this.playTone(580, "triangle", 0.05, 0.08, 0);
  }

  playCorrect() {
    if (!this.soundEnabled) return;
    this.playTone(523.25, "sine", 0.1, 0.15, 0);       // C5
    this.playTone(659.25, "sine", 0.1, 0.15, 0.08);    // E5
    this.playTone(783.99, "sine", 0.22, 0.2, 0.16);     // G5
  }

  playPlantGrow() {
    if (!this.soundEnabled) return;
    // Efecto mágico de brote vegetal
    this.playTone(392.00, "triangle", 0.08, 0.12, 0);     // G4
    this.playTone(523.25, "triangle", 0.08, 0.14, 0.06);  // C5
    this.playTone(659.25, "triangle", 0.08, 0.16, 0.12);  // E5
    this.playTone(1046.50, "sine", 0.25, 0.18, 0.18);     // C6
  }

  playError() {
    if (!this.soundEnabled) return;
    this.playTone(330, "sawtooth", 0.12, 0.1, 0);
    this.playTone(270, "sawtooth", 0.22, 0.12, 0.1);
  }

  playSuccess() {
    if (!this.soundEnabled) return;
    // Fanfarria triunfal botánica
    this.playTone(523.25, "triangle", 0.12, 0.2, 0);     // C5
    this.playTone(659.25, "triangle", 0.12, 0.2, 0.12);  // E5
    this.playTone(783.99, "triangle", 0.14, 0.22, 0.24); // G5
    this.playTone(1046.50, "sine", 0.45, 0.25, 0.38);    // C6
  }

  speak(text) {
    if (!this.voiceEnabled || !this.synth) return;
    try {
      this.synth.cancel(); // Detener cualquier locución previa
      var clean = text.replace(/[*_#`\[\]()]/g, ' ').replace(/\s+/g, ' ').trim();
      if (!clean) return;

      var utter = new SpeechSynthesisUtterance(clean);
      utter.lang = "es-ES";
      utter.rate = 0.95; // Ritmo claro y pausado para niños
      utter.pitch = 1.05;

      // Buscar voz en español preferida
      var voices = this.synth.getVoices();
      var esVoice = voices.find(function(v) {
        return v.lang.startsWith("es") && (v.name.includes("Natural") || v.name.includes("Mónica") || v.name.includes("Helena") || v.name.includes("Laura") || v.name.includes("Pablo"));
      }) || voices.find(function(v) { return v.lang.startsWith("es"); });

      if (esVoice) {
        utter.voice = esVoice;
      }

      this.currentUtterance = utter;
      this.synth.speak(utter);
    } catch (e) {
      console.warn("SpeechSynthesis error:", e);
    }
  }

  stopVoice() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
  }
}

// Instancia global
window.soundManager = new SoundManager();
