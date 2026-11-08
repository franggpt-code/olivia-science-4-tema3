// =============================================================================
// LÓGICA DE LA APLICACIÓN (SPA) · SCIENCE 4.º PRIMARIA · TEMA 3
// Entrenador interactivo para Olivia · Proyecto CLAVES Santillana
// =============================================================================

class ScienceApp {
  constructor() {
    this.data = window.SCIENCE_DATA;
    this.currentView = "home";
    this.studentName = "Olivia";
    this.stars = 0;
    this.voiceEnabled = false;
    this.soundEnabled = true;

    // Estado de Misiones
    this.missionsState = {
      completed: {}, // id: boolean
      currentMissionId: null,
      currentQuestionIndex: 0,
      score: 0
    };

    // Estado de Exámenes
    this.examState = {
      activeExamId: null, // 'testA' | 'testB'
      currentQuestionIndex: 0,
      answers: [],
      finished: false,
      lastScore: 0
    };

    // Estado de Desafío Express
    this.expressState = {
      currentQuestion: null,
      streak: 0,
      answered: false
    };

    // Estado de Arcade
    this.arcadeState = {
      mode: "kingdoms", // 'kingdoms' | 'cellularity' | 'role'
      currentIndex: 0,
      score: 0,
      streak: 0,
      timeLeft: 45,
      timerId: null,
      isPlaying: false,
      items: []
    };

    // Estado del Explorador
    this.activeKingdomId = "hongo";

    this.init();
  }

  // Inicialización
  init() {
    this.loadState();
    this.updateHeaderStats();
    this.renderHome();
    this.renderMissionsList();
    this.renderExplorerTabs();
    this.renderExplorerContent(this.activeKingdomId);
    this.renderSummaryGuide();
    this.bindEvents();

    // Comprobar audio
    if (window.audioManager) {
      window.audioManager.soundEnabled = this.soundEnabled;
      window.audioManager.voiceEnabled = this.voiceEnabled;
    }
  }

  // Persistencia local
  loadState() {
    try {
      const saved = localStorage.getItem("olivia_science4_tema3_state");
      if (saved) {
        const parsed = JSON.parse(saved);
        this.stars = parsed.stars || 0;
        this.missionsState.completed = parsed.completedMissions || {};
        this.studentName = parsed.studentName || "Olivia";
        if (parsed.voiceEnabled !== undefined) this.voiceEnabled = parsed.voiceEnabled;
        if (parsed.soundEnabled !== undefined) this.soundEnabled = parsed.soundEnabled;
      }
    } catch (e) {
      console.warn("No se pudo cargar el estado guardado", e);
    }
  }

  saveState() {
    try {
      const toSave = {
        stars: this.stars,
        completedMissions: this.missionsState.completed,
        studentName: this.studentName,
        voiceEnabled: this.voiceEnabled,
        soundEnabled: this.soundEnabled
      };
      localStorage.setItem("olivia_science4_tema3_state", JSON.stringify(toSave));
    } catch (e) {
      console.warn("No se pudo guardar el estado", e);
    }
  }

  addStars(amount) {
    this.stars += amount;
    this.updateHeaderStats();
    this.saveState();
  }

  updateHeaderStats() {
    const starEl = document.getElementById("star-count");
    if (starEl) starEl.textContent = this.stars;

    const btnVoice = document.getElementById("btn-voice");
    if (btnVoice) {
      btnVoice.classList.toggle("bg-indigo-100", this.voiceEnabled);
      btnVoice.classList.toggle("text-indigo-700", this.voiceEnabled);
    }

    const btnSound = document.getElementById("btn-sound");
    if (btnSound) {
      btnSound.classList.toggle("bg-indigo-100", this.soundEnabled);
      btnSound.classList.toggle("text-indigo-700", this.soundEnabled);
      btnSound.innerHTML = this.soundEnabled ? "🔊" : "🔇";
    }
  }

  toggleVoice() {
    this.voiceEnabled = !this.voiceEnabled;
    if (window.audioManager) {
      window.audioManager.setVoice(this.voiceEnabled);
      if (this.voiceEnabled) {
        window.audioManager.speak("Voz de lectura activada. Te leeré las preguntas y explicaciones.");
      }
    }
    this.updateHeaderStats();
    this.saveState();
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    if (window.audioManager) {
      window.audioManager.setSound(this.soundEnabled);
      if (this.soundEnabled) window.audioManager.playClick();
    }
    this.updateHeaderStats();
    this.saveState();
  }

  // Navegación
  navigate(viewId) {
    if (window.audioManager) window.audioManager.playClick();

    const views = ["home", "misiones", "examen", "express", "arcade", "laboratorio", "chuleta", "diploma"];
    views.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) el.classList.add("hidden");

      const navBtn = document.getElementById(`nav-${v}`);
      if (navBtn) {
        navBtn.classList.remove("text-indigo-700", "bg-indigo-50", "font-black");
      }
    });

    const activeView = document.getElementById(`view-${viewId}`);
    if (activeView) {
      activeView.classList.remove("hidden");
      this.currentView = viewId;
    }

    const activeNavBtn = document.getElementById(`nav-${viewId}`);
    if (activeNavBtn) {
      activeNavBtn.classList.add("text-indigo-700", "bg-indigo-50", "font-black");
    }

    // Scroll seguro al inicio del contenedor
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Acciones específicas de vista
    if (viewId === "home") this.renderHome();
    if (viewId === "misiones" && !this.missionsState.currentMissionId) this.renderMissionsList();
    if (viewId === "express") this.startNextExpress();
    if (viewId === "arcade" && !this.arcadeState.isPlaying) this.initArcadeMode(this.arcadeState.mode);
    if (viewId === "diploma") this.renderDiploma();
  }

  bindEvents() {
    // Tecla rápida o listeners generales si fuesen necesarios
  }

  // ===========================================================================
  // VISTA 1: INICIO (HOME)
  // ===========================================================================
  renderHome() {
    const completedCount = Object.keys(this.missionsState.completed).length;
    const progressEl = document.getElementById("home-mission-progress");
    if (progressEl) {
      progressEl.textContent = `${completedCount} de 5 Misiones completadas`;
    }

    const barEl = document.getElementById("home-progress-bar");
    if (barEl) {
      const pct = (completedCount / 5) * 100;
      barEl.style.width = `${pct}%`;
    }
  }

  // ===========================================================================
  // VISTA 2: MISIONES DIDÁCTICAS
  // ===========================================================================
  renderMissionsList() {
    const container = document.getElementById("missions-list-container");
    const quizContainer = document.getElementById("mission-quiz-container");
    if (!container || !quizContainer) return;

    container.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    this.missionsState.currentMissionId = null;

    container.innerHTML = this.data.missions.map(m => {
      const isDone = this.missionsState.completed[m.id];
      return `
        <div class="card-playful p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-l-8 ${isDone ? 'border-emerald-500 bg-emerald-50/30' : 'border-indigo-600'}">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-3xl shrink-0 shadow-inner">
              ${m.icon}
            </div>
            <div>
              <div class="flex items-center gap-2 flex-wrap mb-1">
                <span class="text-xs font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full ${isDone ? 'bg-emerald-100 text-emerald-800' : 'bg-indigo-100 text-indigo-800'}">
                  ${isDone ? '✅ Misión Superada' : `Misión ${m.id}`}
                </span>
                <span class="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  🏆 Medalla: ${m.badge}
                </span>
              </div>
              <h3 class="text-lg md:text-xl font-black text-slate-900">${m.title}</h3>
              <p class="text-sm text-slate-600 mt-1 max-w-xl">${m.description}</p>
            </div>
          </div>

          <div class="shrink-0 w-full md:w-auto flex md:flex-col items-center gap-2">
            <button onclick="app.startMission(${m.id})" class="btn-bounce w-full md:w-auto px-5 py-2.5 rounded-xl font-extrabold text-sm text-white ${isDone ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-indigo-600 hover:bg-indigo-700'} shadow-md">
              ${isDone ? 'Repetir Misión 🔄' : 'Comenzar Misión 🚀'}
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  startMission(missionId) {
    const mission = this.data.missions.find(m => m.id === missionId);
    if (!mission) return;

    this.missionsState.currentMissionId = missionId;
    this.missionsState.currentQuestionIndex = 0;
    this.missionsState.score = 0;

    const listContainer = document.getElementById("missions-list-container");
    const quizContainer = document.getElementById("mission-quiz-container");
    listContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");

    this.renderMissionQuestion();
  }

  renderMissionQuestion() {
    const mission = this.data.missions.find(m => m.id === this.missionsState.currentMissionId);
    const qIndex = this.missionsState.currentQuestionIndex;
    const q = mission.questions[qIndex];
    const quizContainer = document.getElementById("mission-quiz-container");

    const totalQ = mission.questions.length;
    const progressPct = ((qIndex) / totalQ) * 100;

    quizContainer.innerHTML = `
      <div class="card-playful p-6 sm:p-8 animate-pop">
        <!-- Barra de progreso superior -->
        <div class="flex items-center justify-between text-xs font-extrabold text-slate-500 mb-2">
          <span>${mission.title}</span>
          <span>Pregunta ${qIndex + 1} de ${totalQ}</span>
        </div>
        <div class="w-full bg-slate-100 rounded-full h-2.5 mb-6 overflow-hidden">
          <div class="bg-indigo-600 h-2.5 rounded-full transition-all duration-300" style="width: ${progressPct}%"></div>
        </div>

        <!-- Enunciado -->
        <div class="mb-6">
          <span class="inline-block bg-indigo-100 text-indigo-900 text-xs px-2.5 py-1 rounded-md font-black mb-3">
            🎯 Desafío Conceptual
          </span>
          <h3 class="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            ${q.question}
          </h3>
          <button onclick="window.audioManager.speak('${q.question.replace(/'/g, "\\'")}')" class="mt-2 text-xs text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-1">
            🗣️ Escuchar pregunta
          </button>
        </div>

        <!-- Opciones -->
        <div class="space-y-3 mb-6" id="mission-options">
          ${q.options.map((opt, i) => `
            <div onclick="app.selectMissionOption(${i})" id="opt-${i}" class="quiz-option p-4 flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-800">
              <span class="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center shrink-0">
                ${String.fromCharCode(65 + i)}
              </span>
              <span class="flex-1">${opt}</span>
            </div>
          `).join("")}
        </div>

        <!-- Feedback & Explicación (oculto inicialmente) -->
        <div id="mission-feedback" class="hidden p-4 rounded-2xl mb-6"></div>

        <!-- Botones de Acción -->
        <div class="flex items-center justify-between pt-4 border-t border-slate-200">
          <button onclick="app.renderMissionsList()" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-500 hover:bg-slate-100 transition-colors">
            ⬅️ Volver al listado
          </button>
          <button id="btn-next-mission-q" onclick="app.nextMissionQuestion()" class="hidden btn-bounce px-6 py-2.5 rounded-xl font-black text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md">
            Siguiente Pregunta ➡️
          </button>
        </div>
      </div>
    `;

    if (this.voiceEnabled && window.audioManager) {
      window.audioManager.speak(q.question);
    }
  }

  selectMissionOption(selectedIdx) {
    const mission = this.data.missions.find(m => m.id === this.missionsState.currentMissionId);
    const q = mission.questions[this.missionsState.currentQuestionIndex];
    const isCorrect = (selectedIdx === q.correct);

    // Desactivar clics en opciones
    const optionsContainer = document.getElementById("mission-options");
    const optionCards = optionsContainer.querySelectorAll(".quiz-option");
    optionCards.forEach((card, idx) => {
      card.onclick = null;
      card.classList.remove("hover:border-indigo-500", "cursor-pointer");
      if (idx === q.correct) {
        card.classList.add("correct");
      } else if (idx === selectedIdx) {
        card.classList.add("wrong");
      }
    });

    const feedbackEl = document.getElementById("mission-feedback");
    feedbackEl.classList.remove("hidden");

    if (isCorrect) {
      this.missionsState.score++;
      this.addStars(2);
      if (window.audioManager) window.audioManager.playCorrect();
      feedbackEl.className = "p-4 rounded-2xl mb-6 bg-emerald-50 border border-emerald-200 text-emerald-900";
      feedbackEl.innerHTML = `
        <div class="flex items-center gap-2 font-black text-emerald-800 text-base mb-1">
          <span>🌟 ¡Respuesta Correcta! (+2 estrellas)</span>
        </div>
        <p class="text-xs sm:text-sm leading-relaxed">${q.explanation}</p>
      `;
    } else {
      if (window.audioManager) window.audioManager.playWrong();
      feedbackEl.className = "p-4 rounded-2xl mb-6 bg-amber-50 border border-amber-200 text-amber-900";
      feedbackEl.innerHTML = `
        <div class="flex items-center gap-2 font-black text-amber-800 text-base mb-1">
          <span>💡 ¡Casi! Repasemos este concepto clave:</span>
        </div>
        <p class="text-xs sm:text-sm leading-relaxed">${q.explanation}</p>
      `;
    }

    if (this.voiceEnabled && window.audioManager) {
      window.audioManager.speak(isCorrect ? "¡Muy bien! " + q.explanation : "Atención. " + q.explanation);
    }

    const nextBtn = document.getElementById("btn-next-mission-q");
    if (nextBtn) nextBtn.classList.remove("hidden");
  }

  nextMissionQuestion() {
    const mission = this.data.missions.find(m => m.id === this.missionsState.currentMissionId);
    this.missionsState.currentQuestionIndex++;

    if (this.missionsState.currentQuestionIndex < mission.questions.length) {
      this.renderMissionQuestion();
    } else {
      this.finishMission(mission);
    }
  }

  finishMission(mission) {
    const quizContainer = document.getElementById("mission-quiz-container");
    const score = this.missionsState.score;
    const total = mission.questions.length;
    const passed = score >= 3;

    if (passed) {
      this.missionsState.completed[mission.id] = true;
      this.addStars(5);
      this.saveState();
      if (window.confetti) {
        window.confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      }
      if (window.audioManager) window.audioManager.playCelebration();
    }

    quizContainer.innerHTML = `
      <div class="card-playful p-8 text-center max-w-xl mx-auto animate-pop">
        <div class="w-20 h-20 mx-auto rounded-3xl ${passed ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'} flex items-center justify-center text-4xl mb-4 shadow-inner">
          ${passed ? '🏆' : '💪'}
        </div>
        <h2 class="text-2xl font-black text-slate-900 mb-2">
          ${passed ? '¡Misión Superada con Éxito!' : '¡Buen entrenamiento, Olivia!'}
        </h2>
        <p class="text-sm text-slate-600 mb-6">
          Has acertado <strong>${score} de ${total}</strong> preguntas conceptuales.
          ${passed ? `<br>Has desbloqueado la medalla: <strong class="text-amber-700">«${mission.badge}»</strong> y ganado 5 estrellas bonus ⭐` : '<br>Repasa los conceptos y vuelve a intentarlo para conseguir tu medalla.'}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onclick="app.startMission(${mission.id})" class="w-full sm:w-auto px-5 py-2.5 rounded-xl font-extrabold text-sm text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors">
            Repetir para mejorar 🔄
          </button>
          <button onclick="app.renderMissionsList()" class="w-full sm:w-auto btn-bounce px-6 py-2.5 rounded-xl font-extrabold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md">
            Ver todas las misiones 🗺️
          </button>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // VISTA 3: SIMULADOR DE EXAMEN (Prueba A y B)
  // ===========================================================================
  startExam(examKey) {
    const examData = this.data.exams[examKey];
    if (!examData) return;

    this.examState.activeExamId = examKey;
    this.examState.currentQuestionIndex = 0;
    this.examState.answers = new Array(examData.questions.length).fill(null);
    this.examState.finished = false;

    const selectorView = document.getElementById("exam-selector");
    const activeView = document.getElementById("exam-active");
    const resultsView = document.getElementById("exam-results");

    if (selectorView) selectorView.classList.add("hidden");
    if (resultsView) resultsView.classList.add("hidden");
    if (activeView) activeView.classList.remove("hidden");

    this.renderExamQuestion();
  }

  renderExamQuestion() {
    const exam = this.data.exams[this.examState.activeExamId];
    const qIndex = this.examState.currentQuestionIndex;
    const q = exam.questions[qIndex];
    const totalQ = exam.questions.length;
    const currentSelected = this.examState.answers[qIndex];

    const container = document.getElementById("exam-question-card");
    if (!container) return;

    container.innerHTML = `
      <div class="p-6 sm:p-8 animate-pop">
        <!-- Encabezado de examen -->
        <div class="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
          <div>
            <span class="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
              ${exam.title}
            </span>
            <p class="text-xs text-slate-500 mt-1 font-semibold">${exam.context ? 'Caso práctico en la naturaleza' : 'Control Oficial de Evaluación'}</p>
          </div>
          <span class="text-sm font-black text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
            Pregunta ${qIndex + 1} / ${totalQ}
          </span>
        </div>

        <!-- Enunciado -->
        <h3 class="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-3">
          ${q.question}
        </h3>
        <button onclick="window.audioManager.speak('${q.question.replace(/'/g, "\\'")}')" class="text-xs text-indigo-600 hover:text-indigo-800 font-bold mb-6 flex items-center gap-1">
          🗣️ Escuchar en voz alta
        </button>

        <!-- Opciones -->
        <div class="space-y-3 mb-8">
          ${q.options.map((opt, i) => `
            <div onclick="app.recordExamAnswer(${i})" class="quiz-option p-4 flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-800 ${currentSelected === i ? 'selected' : ''}">
              <span class="w-7 h-7 rounded-lg ${currentSelected === i ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'} font-black text-xs flex items-center justify-center shrink-0">
                ${String.fromCharCode(65 + i)}
              </span>
              <span class="flex-1">${opt}</span>
            </div>
          `).join("")}
        </div>

        <!-- Controles de navegación de preguntas -->
        <div class="flex items-center justify-between pt-4 border-t border-slate-200">
          <button onclick="app.prevExamQuestion()" ${qIndex === 0 ? 'disabled class="opacity-40 cursor-not-allowed text-slate-400 font-bold text-sm px-4 py-2"' : 'class="px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors"'}>
            ⬅️ Anterior
          </button>

          ${qIndex === totalQ - 1 ? `
            <button onclick="app.finishExam()" class="btn-bounce px-6 py-2.5 rounded-xl font-black text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md">
              Corregir Examen Completo 📝
            </button>
          ` : `
            <button onclick="app.nextExamQuestion()" class="btn-bounce px-6 py-2.5 rounded-xl font-black text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md">
              Siguiente ➡️
            </button>
          `}
        </div>
      </div>
    `;

    if (this.voiceEnabled && window.audioManager) {
      window.audioManager.speak(q.question);
    }
  }

  recordExamAnswer(optionIndex) {
    this.examState.answers[this.examState.currentQuestionIndex] = optionIndex;
    if (window.audioManager) window.audioManager.playClick();
    this.renderExamQuestion();
  }

  nextExamQuestion() {
    const exam = this.data.exams[this.examState.activeExamId];
    if (this.examState.currentQuestionIndex < exam.questions.length - 1) {
      this.examState.currentQuestionIndex++;
      this.renderExamQuestion();
    }
  }

  prevExamQuestion() {
    if (this.examState.currentQuestionIndex > 0) {
      this.examState.currentQuestionIndex--;
      this.renderExamQuestion();
    }
  }

  finishExam() {
    const exam = this.data.exams[this.examState.activeExamId];
    let correctCount = 0;
    exam.questions.forEach((q, idx) => {
      if (this.examState.answers[idx] === q.correct) correctCount++;
    });

    const grade = ((correctCount / exam.questions.length) * 10).toFixed(1);
    this.examState.lastScore = Number(grade);

    if (correctCount >= 8) {
      this.addStars(10);
      if (window.confetti) {
        window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
      if (window.audioManager) window.audioManager.playCelebration();
    }

    const activeView = document.getElementById("exam-active");
    const resultsView = document.getElementById("exam-results");
    activeView.classList.add("hidden");
    resultsView.classList.remove("hidden");

    let badgeText = "¡Sobresaliente! 🌟";
    let badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-300";
    if (grade < 5) {
      badgeText = "Necesitas Repasar 📖";
      badgeColor = "bg-rose-100 text-rose-800 border-rose-300";
    } else if (grade < 8) {
      badgeText = "¡Notable! Bien trabajado 👍";
      badgeColor = "bg-blue-100 text-blue-800 border-blue-300";
    }

    resultsView.innerHTML = `
      <div class="card-playful p-6 sm:p-8 animate-pop">
        <!-- Cabecera de resultados -->
        <div class="text-center max-w-xl mx-auto mb-8">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-black uppercase border ${badgeColor} mb-2">
            ${badgeText}
          </span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
            Resultados: ${exam.title}
          </h2>
          <div class="text-5xl font-black text-indigo-600 my-4">${grade} <span class="text-2xl text-slate-400">/ 10</span></div>
          <p class="text-sm text-slate-600">
            Has respondido correctamente a <strong>${correctCount} de ${exam.questions.length}</strong> preguntas oficiales.
          </p>
        </div>

        <!-- Desglose formativo pregunta por pregunta -->
        <div class="border-t border-slate-200 pt-6 space-y-4 mb-8">
          <h4 class="font-black text-slate-800 text-base">🔍 Desglose Formativo Detallado:</h4>
          ${exam.questions.map((q, idx) => {
            const userAns = this.examState.answers[idx];
            const isOk = (userAns === q.correct);
            return `
              <div class="p-4 rounded-xl border ${isOk ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/50 border-rose-200'}">
                <div class="flex items-start justify-between gap-2 mb-2">
                  <span class="font-bold text-xs uppercase ${isOk ? 'text-emerald-700' : 'text-rose-700'}">
                    Pregunta ${idx + 1} · ${isOk ? '✅ Acierto' : '❌ Para Repasar'}
                  </span>
                  <span class="text-xs font-bold text-slate-500">Correcta: Opción ${String.fromCharCode(65 + q.correct)}</span>
                </div>
                <p class="text-sm font-black text-slate-900 mb-2">${q.question}</p>
                <div class="text-xs text-slate-700 mb-2">
                  <p><strong>Tu respuesta:</strong> ${userAns !== null ? q.options[userAns] : '<em>No respondida</em>'}</p>
                  ${!isOk ? `<p class="text-emerald-700 font-bold mt-1"><strong>Respuesta correcta:</strong> ${q.options[q.correct]}</p>` : ''}
                </div>
                <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-600">
                  <strong>Explicación:</strong> ${q.explanation}
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <!-- Botones de Acción -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-200">
          <button onclick="app.resetExamSelector()" class="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors">
            ⬅️ Volver a Exámenes
          </button>
          <button onclick="app.startExam('${this.examState.activeExamId}')" class="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors">
            Repetir Examen 🔄
          </button>
          ${grade >= 7 ? `
            <button onclick="app.navigate('diploma')" class="w-full sm:w-auto btn-bounce px-6 py-2.5 rounded-xl font-black text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md">
              Ver mi Diploma de Honor 🎓
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }

  resetExamSelector() {
    const selectorView = document.getElementById("exam-selector");
    const activeView = document.getElementById("exam-active");
    const resultsView = document.getElementById("exam-results");

    if (selectorView) selectorView.classList.remove("hidden");
    if (activeView) activeView.classList.add("hidden");
    if (resultsView) resultsView.classList.add("hidden");
  }

  // ===========================================================================
  // VISTA 4: DESAFÍO EXPRESS (TEST INFINITO)
  // ===========================================================================
  startNextExpress() {
    const list = this.data.expressQuestions;
    const randomQ = list[Math.floor(Math.random() * list.length)];
    this.expressState.currentQuestion = randomQ;
    this.expressState.answered = false;

    const container = document.getElementById("express-container");
    const streakEl = document.getElementById("express-streak");
    if (streakEl) streakEl.textContent = this.expressState.streak;

    if (!container) return;

    container.innerHTML = `
      <div class="card-playful p-6 sm:p-8 animate-pop">
        <div class="flex items-center justify-between mb-4">
          <span class="bg-amber-100 text-amber-900 text-xs font-black px-3 py-1 rounded-md">
            ⚡ Pregunta Rápida
          </span>
          <span class="text-xs font-bold text-slate-500">Racha: 🔥 ${this.expressState.streak}</span>
        </div>

        <h3 class="text-lg sm:text-xl font-black text-slate-900 mb-6 leading-snug">
          ${randomQ.q}
        </h3>

        <div class="space-y-3 mb-6" id="express-options">
          ${randomQ.options.map((opt, i) => `
            <div onclick="app.selectExpressOption(${i})" class="quiz-option p-4 flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-800">
              <span class="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center shrink-0">
                ${String.fromCharCode(65 + i)}
              </span>
              <span class="flex-1">${opt}</span>
            </div>
          `).join("")}
        </div>

        <div id="express-feedback" class="hidden p-4 rounded-xl mb-4 text-xs sm:text-sm"></div>

        <div class="text-right">
          <button id="btn-next-express" onclick="app.startNextExpress()" class="hidden btn-bounce px-6 py-2.5 rounded-xl font-black text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md">
            Siguiente Pregunta ⚡
          </button>
        </div>
      </div>
    `;

    if (this.voiceEnabled && window.audioManager) {
      window.audioManager.speak(randomQ.q);
    }
  }

  selectExpressOption(selectedIdx) {
    if (this.expressState.answered) return;
    this.expressState.answered = true;

    const q = this.expressState.currentQuestion;
    const isCorrect = (selectedIdx === q.correct);

    const cards = document.querySelectorAll("#express-options .quiz-option");
    cards.forEach((card, idx) => {
      card.onclick = null;
      if (idx === q.correct) card.classList.add("correct");
      else if (idx === selectedIdx) card.classList.add("wrong");
    });

    const fb = document.getElementById("express-feedback");
    fb.classList.remove("hidden");

    if (isCorrect) {
      this.expressState.streak++;
      this.addStars(1);
      if (window.audioManager) window.audioManager.playCorrect();
      fb.className = "p-4 rounded-xl mb-4 text-xs sm:text-sm bg-emerald-50 text-emerald-900 border border-emerald-200";
      fb.innerHTML = `<strong>🌟 ¡Muy bien! (+1 estrella)</strong> · ${q.exp}`;
    } else {
      this.expressState.streak = 0;
      if (window.audioManager) window.audioManager.playWrong();
      fb.className = "p-4 rounded-xl mb-4 text-xs sm:text-sm bg-amber-50 text-amber-900 border border-amber-200";
      fb.innerHTML = `<strong>💡 Repasemos:</strong> ${q.exp}`;
    }

    const streakEl = document.getElementById("express-streak");
    if (streakEl) streakEl.textContent = this.expressState.streak;

    const nextBtn = document.getElementById("btn-next-express");
    if (nextBtn) nextBtn.classList.remove("hidden");
  }

  // ===========================================================================
  // VISTA 5: ARCADE DE CLASIFICACIÓN
  // ===========================================================================
  initArcadeMode(modeKey) {
    this.arcadeState.mode = modeKey;
    this.arcadeState.isPlaying = false;
    clearInterval(this.arcadeState.timerId);

    const modeConfig = this.data.arcade.modes.find(m => m.id === modeKey);
    const container = document.getElementById("arcade-container");
    if (!container) return;

    container.innerHTML = `
      <div class="card-playful p-6 sm:p-8 text-center max-w-xl mx-auto animate-pop">
        <div class="w-16 h-16 mx-auto rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-3xl mb-4">
          🕹️
        </div>
        <h3 class="text-xl font-black text-slate-900 mb-1">${modeConfig.name}</h3>
        <p class="text-sm text-slate-600 mb-6">${modeConfig.desc}</p>
        <p class="text-xs text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg p-3 mb-6 font-semibold">
          ⏱️ Tienes <strong>45 segundos</strong> para clasificar el mayor número de seres vivos posible sin equivocarte.
        </p>

        <div class="flex items-center justify-center gap-3">
          <button onclick="app.startArcadeGame()" class="btn-bounce px-8 py-3 rounded-2xl font-black text-base text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg">
            ¡Comenzar Desafío! 🚀
          </button>
        </div>
      </div>
    `;
  }

  startArcadeGame() {
    this.arcadeState.isPlaying = true;
    this.arcadeState.score = 0;
    this.arcadeState.streak = 0;
    this.arcadeState.timeLeft = 45;

    // Barajar elementos
    this.arcadeState.items = [...this.data.arcade.items].sort(() => Math.random() - 0.5);
    this.arcadeState.currentIndex = 0;

    this.renderArcadePlayScreen();

    // Iniciar temporizador
    clearInterval(this.arcadeState.timerId);
    this.arcadeState.timerId = setInterval(() => {
      this.arcadeState.timeLeft--;
      const timeEl = document.getElementById("arcade-timer");
      if (timeEl) timeEl.textContent = `${this.arcadeState.timeLeft}s`;

      if (this.arcadeState.timeLeft <= 0) {
        clearInterval(this.arcadeState.timerId);
        this.finishArcadeGame();
      }
    }, 1000);
  }

  renderArcadePlayScreen() {
    const container = document.getElementById("arcade-container");
    if (!container) return;

    const currentItem = this.arcadeState.items[this.arcadeState.currentIndex];
    const modeConfig = this.data.arcade.modes.find(m => m.id === this.arcadeState.mode);

    container.innerHTML = `
      <div class="card-playful p-6 sm:p-8 animate-pop">
        <!-- Barra de estado -->
        <div class="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
          <span class="text-xs font-black text-slate-500">Puntos: <strong class="text-indigo-600 text-base" id="arcade-score">${this.arcadeState.score}</strong></span>
          <span class="text-sm font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200" id="arcade-timer">
            ${this.arcadeState.timeLeft}s
          </span>
          <span class="text-xs font-black text-amber-600">Racha: 🔥 ${this.arcadeState.streak}</span>
        </div>

        <!-- Ser vivo a clasificar -->
        <div class="text-center py-6 px-4 bg-gradient-to-b from-indigo-50/50 to-white rounded-2xl border-2 border-indigo-100 mb-6">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">¿Dónde pertenece este ser vivo?</span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 my-2">${currentItem.name}</h2>
          <p class="text-xs text-slate-500 font-semibold italic">💡 Pista: ${currentItem.hint}</p>
        </div>

        <!-- Botones de categorías -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          ${modeConfig.categories.map(cat => `
            <button onclick="app.submitArcadeCategory('${cat}')" class="btn-bounce p-3.5 rounded-xl border-2 border-slate-200 hover:border-indigo-600 hover:bg-indigo-50 font-black text-sm text-slate-800 transition-colors shadow-xs">
              ${cat}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }

  submitArcadeCategory(chosenCat) {
    if (!this.arcadeState.isPlaying) return;

    const currentItem = this.arcadeState.items[this.arcadeState.currentIndex];
    let correct = false;

    if (this.arcadeState.mode === "kingdoms") correct = (currentItem.kingdom === chosenCat);
    if (this.arcadeState.mode === "cellularity") correct = (currentItem.cell === chosenCat);
    if (this.arcadeState.mode === "role") correct = (currentItem.role === chosenCat);

    if (correct) {
      this.arcadeState.score += 10 + (this.arcadeState.streak * 2);
      this.arcadeState.streak++;
      this.addStars(1);
      if (window.audioManager) window.audioManager.playCorrect();
    } else {
      this.arcadeState.streak = 0;
      if (window.audioManager) window.audioManager.playWrong();
    }

    // Siguiente ítem
    this.arcadeState.currentIndex++;
    if (this.arcadeState.currentIndex >= this.arcadeState.items.length) {
      // Rebarajar si se acaban antes del tiempo
      this.arcadeState.items = [...this.data.arcade.items].sort(() => Math.random() - 0.5);
      this.arcadeState.currentIndex = 0;
    }

    this.renderArcadePlayScreen();
  }

  finishArcadeGame() {
    this.arcadeState.isPlaying = false;
    const container = document.getElementById("arcade-container");
    if (!container) return;

    if (this.arcadeState.score >= 50) {
      this.addStars(5);
      if (window.confetti) window.confetti({ particleCount: 70, spread: 60 });
      if (window.audioManager) window.audioManager.playCelebration();
    }

    container.innerHTML = `
      <div class="card-playful p-8 text-center max-w-xl mx-auto animate-pop">
        <div class="w-20 h-20 mx-auto rounded-3xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-4xl mb-4">
          ⏱️
        </div>
        <h2 class="text-2xl font-black text-slate-900 mb-1">¡Tiempo Concluido!</h2>
        <div class="text-4xl font-black text-indigo-600 my-3">${this.arcadeState.score} <span class="text-base text-slate-400">puntos</span></div>
        <p class="text-sm text-slate-600 mb-6">
          ${this.arcadeState.score >= 50 ? '¡Sensacional rapidez mental! Has sumado 5 estrellas de bonificación ⭐' : '¡Buen intento! Cada partida te ayuda a memorizar los reinos más rápido.'}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onclick="app.startArcadeGame()" class="w-full sm:w-auto btn-bounce px-6 py-2.5 rounded-xl font-black text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md">
            Jugar de Nuevo 🔄
          </button>
          <button onclick="app.initArcadeMode('${this.arcadeState.mode}')" class="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-slate-600 bg-slate-100 hover:bg-slate-200">
            Cambiar Modo ⚙️
          </button>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // VISTA 6: EXPLORADOR CIENTÍFICO DE LOS 5 REINOS
  // ===========================================================================
  renderExplorerTabs() {
    const tabsContainer = document.getElementById("explorer-tabs");
    if (!tabsContainer) return;

    tabsContainer.innerHTML = this.data.kingdomsExplorer.map(k => `
      <button onclick="app.selectExplorerKingdom('${k.id}')" id="tab-kingdom-${k.id}" class="realm-card px-4 py-2.5 rounded-2xl border-2 flex items-center gap-2 text-xs sm:text-sm font-black transition-all ${this.activeKingdomId === k.id ? 'active bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}">
        <span class="text-xl">${k.icon}</span>
        <span>${k.name}</span>
      </button>
    `).join("");
  }

  selectExplorerKingdom(kingdomId) {
    this.activeKingdomId = kingdomId;
    this.renderExplorerTabs();
    this.renderExplorerContent(kingdomId);
    if (window.audioManager) window.audioManager.playClick();
  }

  renderExplorerContent(kingdomId) {
    const container = document.getElementById("explorer-content");
    if (!container) return;

    const k = this.data.kingdomsExplorer.find(item => item.id === kingdomId);
    if (!k) return;

    container.innerHTML = `
      <div class="card-playful p-6 sm:p-8 animate-pop">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-3xl bg-indigo-100 flex items-center justify-center text-4xl shadow-inner">
              ${k.icon}
            </div>
            <div>
              <span class="text-xs font-black uppercase text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md">
                ${k.tagline}
              </span>
              <h2 class="text-2xl sm:text-3xl font-black text-slate-900 mt-1">${k.name}</h2>
            </div>
          </div>
          <button onclick="window.audioManager.speak('${k.name}. ${k.tagline}. Celularidad: ${k.cellularity}. Nutrición: ${k.nutrition}. ${k.secrets.replace(/'/g, "\\'")}')" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors">
            🗣️ Escuchar Reino
          </button>
        </div>

        <!-- Ficha Técnica de Características -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span class="text-xs text-slate-500 font-extrabold uppercase">Celularidad</span>
            <p class="text-sm font-black text-slate-800 mt-1">${k.cellularity}</p>
          </div>
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span class="text-xs text-slate-500 font-extrabold uppercase">Nutrición</span>
            <p class="text-sm font-black text-slate-800 mt-1">${k.nutrition}</p>
          </div>
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span class="text-xs text-slate-500 font-extrabold uppercase">Movilidad</span>
            <p class="text-sm font-black text-slate-800 mt-1">${k.mobility}</p>
          </div>
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span class="text-xs text-slate-500 font-extrabold uppercase">Hábitat</span>
            <p class="text-sm font-black text-slate-800 mt-1">${k.habitat}</p>
          </div>
        </div>

        <!-- Secreto Biológico -->
        <div class="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 mb-6">
          <h4 class="font-black text-indigo-950 text-sm mb-1">🔬 Clave Biológica de Examen:</h4>
          <p class="text-xs sm:text-sm text-indigo-900 leading-relaxed">${k.secrets}</p>
        </div>

        <!-- Ejemplos representativos -->
        <div class="mb-6">
          <h4 class="font-black text-slate-800 text-sm mb-2">🌿 Ejemplos Clave:</h4>
          <div class="flex flex-wrap gap-2">
            ${k.keyExamples.map(ex => `
              <span class="bg-white px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 shadow-xs">
                ${ex}
              </span>
            `).join("")}
          </div>
        </div>

        <!-- Curiosidad ¡Ojo al dato! -->
        <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
          <span class="text-2xl shrink-0">💡</span>
          <div>
            <h5 class="font-black text-amber-950 text-xs uppercase tracking-wider mb-0.5">¡Ojo al Dato Curioso!</h5>
            <p class="text-xs sm:text-sm text-amber-900 leading-relaxed">${k.curiosity}</p>
          </div>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // VISTA 7: ESQUEMAS VISUALES IMPRIMIBLES
  // ===========================================================================
  renderSummaryGuide() {
    const container = document.getElementById("summary-container");
    if (!container) return;

    container.innerHTML = this.data.summaryGuide.map(block => `
      <div class="card-playful p-6">
        <h3 class="text-lg font-black text-slate-900 border-b border-slate-100 pb-2 mb-3 text-indigo-900">
          ${block.title}
        </h3>
        <div class="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-medium">
          ${block.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
        </div>
      </div>
    `).join("");
  }

  // ===========================================================================
  // VISTA 8: DIPLOMA OFICIAL DE HONOR
  // ===========================================================================
  renderDiploma() {
    const nameInput = document.getElementById("diploma-student-name");
    if (nameInput) nameInput.value = this.studentName;

    const dateEl = document.getElementById("diploma-date");
    if (dateEl) {
      const today = new Date();
      dateEl.textContent = today.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
    }
  }

  updateStudentName(newName) {
    if (newName && newName.trim()) {
      this.studentName = newName.trim();
      this.saveState();
    }
  }

  printDiploma() {
    window.print();
  }
}

// Inicializar al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  window.app = new ScienceApp();
});
