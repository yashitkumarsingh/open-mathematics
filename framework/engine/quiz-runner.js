// Open Mathematics Foundation - Quiz Runner Custom Element (i18n Enabled)
(function() {
  window.OMF = window.OMF || {};

  class QuizRunner extends HTMLElement {
    constructor() {
      super();
      this.questions = [];
      this.currentIdx = 0;
      this.mode = "practice"; // "practice" or "test"
      this.score = 0;
      this.mistakesLogged = [];
      this.isAnswered = false;
      this.activeComponent = null;
    }

    connectedCallback() {
      const conceptId = this.getAttribute("concept-id");
      const dataSrc = this.getAttribute("data-src") || "test.json";

      if (!conceptId) {
        this.innerHTML = `<div class="quiz-feedback error show">Error: quiz-runner requires a concept-id attribute.</div>`;
        return;
      }

      this.conceptId = conceptId;

      // Check if questions are preloaded globally to avoid file:// CORS issues
      if (window.OMF && window.OMF.currentQuiz && window.OMF.currentQuiz.conceptId === conceptId) {
        this.questions = window.OMF.currentQuiz.questions || [];
        this.showWelcomeScreen();
      } else {
        // Fallback to fetch if running on a local/remote web server
        fetch(dataSrc)
          .then(res => res.json())
          .then(data => {
            this.questions = data.questions || [];
            this.showWelcomeScreen();
          })
          .catch(err => {
            console.error("Failed to load quiz JSON", err);
            this.innerHTML = `<div class="card">
              <h3>Welcome to practice!</h3>
              <p>Could not load questions file. Let's make sure questions are loaded via a &lt;script&gt; tag or test.json exists.</p>
            </div>`;
          });
      }
    }

    showWelcomeScreen() {
      const state = window.OMF.Progress.getConceptState(this.conceptId);
      const isMastered = state.mastered;
      const t = (key, replacements) => window.OMF.i18n ? window.OMF.i18n.t(key, replacements) : key;

      const badgeHtml = isMastered 
        ? `<div class="mastery-badge-container">
             <mastery-badge state="mastered"></mastery-badge>
             <p style="color: var(--success-color); font-weight: 600;">${t('conceptMastered')}</p>
           </div>`
        : "";

      const scoreLabel = t('bestScore', { best: state.bestScore, attempts: state.attempts });

      this.innerHTML = `
        <div class="card animate-pop" style="text-align: center; gap: 24px;">
          <h2>${t('readyToExplore')}</h2>
          ${badgeHtml}
          <p class="lang-en">Choose a mode below to play with these mathematical ideas. Practice gives you infinite tries and helpful tips. Test checks your retention.</p>
          <p class="lang-es">Elige un modo a continuación para jugar con estas ideas matemáticas. La práctica te da intentos infinitos y consejos útiles. La prueba verifica tu retención.</p>
          <p class="lang-hi">इन गणितीय विचारों के साथ खेलने के लिए नीचे एक मोड चुनें। अभ्यास आपको असीमित प्रयास और उपयोगी संकेत देता है। परीक्षण आपकी स्मृति की जांच करता है।</p>
          
          <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
            <button class="btn btn-secondary" id="btn-practice">${t('playPractice')}</button>
            <button class="btn btn-primary" id="btn-test">${t('masteryTest')}</button>
          </div>
          
          ${state.attempts > 0 ? `<p style="font-size: 0.9rem; color: var(--text-secondary);">${scoreLabel}</p>` : ""}
        </div>
      `;

      // Apply initial lang displays
      if (window.OMF.i18n) window.OMF.i18n.applyLanguageDisplay();

      this.querySelector("#btn-practice").addEventListener("click", () => this.startQuiz("practice"));
      this.querySelector("#btn-test").addEventListener("click", () => this.startQuiz("test"));
    }

    startQuiz(mode) {
      this.mode = mode;
      this.currentIdx = 0;
      this.score = 0;
      this.mistakesLogged = [];
      this.renderQuestion();
    }

    renderQuestion() {
      this.isAnswered = false;
      const question = this.questions[this.currentIdx];
      const total = this.questions.length;
      const t = (key, replacements) => window.OMF.i18n ? window.OMF.i18n.t(key, replacements) : key;
      const transPrompt = window.OMF.i18n ? window.OMF.i18n.translatePrompt(question.prompt) : question.prompt;

      // Build dot elements for tracking progress
      let dotsHtml = "";
      for (let i = 0; i < total; i++) {
        let cls = "quiz-progress-dot";
        if (i === this.currentIdx) cls += " active";
        dotsHtml += `<div class="${cls}" data-idx="${i}"></div>`;
      }

      const modeTitle = this.mode === 'practice' ? t('practiceMode') : t('testMode');

      this.innerHTML = `
        <div class="card animate-pop">
          <div class="quiz-header">
            <span class="quiz-mode-pill ${this.mode}">${modeTitle}</span>
            <div class="quiz-progress-dots">${dotsHtml}</div>
          </div>

          <div class="quiz-prompt">
            ${transPrompt}
            <button id="quiz-speak-btn" aria-label="Read prompt aloud" style="background: none; border: none; cursor: pointer; font-size: 1.3rem; margin-left: 8px; vertical-align: middle; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">🔊</button>
          </div>
          
          <div id="quiz-workspace" style="display: flex; flex-direction: column; align-items: center; margin: 16px 0;">
            <!-- Interactive component gets injected here -->
          </div>

          <div class="quiz-feedback" id="quiz-feedback"></div>

          <div class="quiz-actions">
            ${this.mode === 'practice' ? `<button class="btn btn-secondary" id="quiz-hint-btn" style="display: none;">${t('tip')}</button>` : ''}
            <button class="btn btn-primary" id="quiz-check-btn">${t('checkAnswer')}</button>
          </div>
        </div>
      `;

      this.renderWorkspace(question);

      // Bind Speak Button listener
      const speakBtn = this.querySelector("#quiz-speak-btn");
      if (speakBtn) {
        speakBtn.addEventListener("click", () => {
          if (window.OMF && window.OMF.Accessibility) {
            const cleanText = transPrompt.replace(/<[^>]*>/g, '');
            window.OMF.Accessibility.speak(cleanText);
          }
        });
      }

      this.querySelector("#quiz-check-btn").addEventListener("click", () => this.checkAnswer());
      
      if (this.mode === 'practice') {
        const hintBtn = this.querySelector("#quiz-hint-btn");
        hintBtn.addEventListener("click", () => {
          const transHint = window.OMF.i18n ? window.OMF.i18n.translatePrompt(question.hint) : (question.hint || "Try counting again slowly!");
          this.showFeedback(transHint, "error");
        });
      }
    }

    renderWorkspace(question) {
      const container = this.querySelector("#quiz-workspace");
      container.innerHTML = "";

      switch (question.type) {
        case "multiple-choice":
          const optsGrid = document.createElement("div");
          optsGrid.className = "quiz-options-container";
          question.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "quiz-option-btn";
            // Check if label contains translation keys
            const labelStr = window.OMF.i18n ? window.OMF.i18n.translatePrompt(opt.label) : opt.label;
            btn.innerHTML = labelStr;
            btn.addEventListener("click", () => {
              this.handleChoiceAnswer(opt.value);
            });
            optsGrid.appendChild(btn);
          });
          container.appendChild(optsGrid);
          this.querySelector("#quiz-check-btn").style.display = "none";
          break;

        case "ten-frame":
          const tenFrame = document.createElement("ten-frame");
          if (question.start !== undefined) {
            tenFrame.setAttribute("value", question.start);
          }
          if (question.interactive !== false) {
            tenFrame.setAttribute("interactive", "true");
          }
          container.appendChild(tenFrame);
          this.activeComponent = tenFrame;
          break;

        case "number-line":
          const numLine = document.createElement("number-line");
          numLine.setAttribute("min", question.min !== undefined ? question.min : 0);
          numLine.setAttribute("max", question.max !== undefined ? question.max : 10);
          if (question.interactive !== false) {
            numLine.setAttribute("interactive", "true");
          }
          container.appendChild(numLine);
          this.activeComponent = numLine;
          break;

        case "drag-counter":
          const dragCounter = document.createElement("drag-counter");
          dragCounter.setAttribute("target-count", question.target || 5);
          dragCounter.setAttribute("item-type", question.itemType || "apple");
          dragCounter.setAttribute("total-items", question.totalItems || 10);
          container.appendChild(dragCounter);
          this.activeComponent = dragCounter;
          break;

        default:
          container.innerHTML = `<p style="color: var(--warning-color);">Unsupported question type: ${question.type}</p>`;
      }
    }

    handleChoiceAnswer(value) {
      if (this.isAnswered) return;
      const question = this.questions[this.currentIdx];
      const isCorrect = (value === question.target);
      this.evaluateResult(isCorrect, question.mistakePattern);
    }

    checkAnswer() {
      if (this.isAnswered) return;
      const question = this.questions[this.currentIdx];
      const t = (key) => window.OMF.i18n ? window.OMF.i18n.t(key) : key;
      let userAnswer = null;

      if (this.activeComponent) {
        if (question.type === "ten-frame") {
          userAnswer = this.activeComponent.getValue();
        } else if (question.type === "number-line") {
          userAnswer = this.activeComponent.getValue();
        } else if (question.type === "drag-counter") {
          userAnswer = this.activeComponent.getValue();
        }
      }

      if (userAnswer === null) {
        this.showFeedback(t('promptInteract'), "error");
        return;
      }

      const isCorrect = (userAnswer === question.target);
      let pattern = null;
      if (!isCorrect && question.mistakePatterns) {
        pattern = question.mistakePatterns[userAnswer] || question.mistakePattern || "incorrect";
      } else if (!isCorrect) {
        pattern = question.mistakePattern || "incorrect";
      }

      this.evaluateResult(isCorrect, pattern);
    }

    evaluateResult(isCorrect, mistakePattern) {
      this.isAnswered = true;
      const question = this.questions[this.currentIdx];
      const checkBtn = this.querySelector("#quiz-check-btn");
      const hintBtn = this.querySelector("#quiz-hint-btn");
      const t = (key) => window.OMF.i18n ? window.OMF.i18n.t(key) : key;

      if (isCorrect) {
        this.score += 1;
        this.showFeedback(t('correctFeedback'), "success");
        if (checkBtn) checkBtn.style.display = "none";
        if (hintBtn) hintBtn.style.display = "none";

        // Show Next button
        const nextBtn = document.createElement("button");
        nextBtn.className = "btn btn-success animate-pop";
        nextBtn.id = "quiz-next-btn";
        nextBtn.innerText = this.currentIdx < this.questions.length - 1 ? t('nextQuestion') : t('showResults');
        nextBtn.addEventListener("click", () => this.nextQuestion());
        this.querySelector(".quiz-actions").appendChild(nextBtn);
      } else {
        if (mistakePattern) {
          this.mistakesLogged.push(mistakePattern);
        }

        if (this.mode === "practice") {
          this.isAnswered = false;
          this.showFeedback(t('wrongFeedback'), "error", true);
          if (hintBtn) hintBtn.style.display = "inline-flex";
        } else {
          // Test mode locks answer
          this.showFeedback(t('recordFeedback'), "error");
          if (checkBtn) checkBtn.style.display = "none";

          const nextBtn = document.createElement("button");
          nextBtn.className = "btn btn-primary animate-pop";
          nextBtn.id = "quiz-next-btn";
          nextBtn.innerText = this.currentIdx < this.questions.length - 1 ? t('nextQuestion') : t('showResults');
          nextBtn.addEventListener("click", () => this.nextQuestion());
          this.querySelector(".quiz-actions").appendChild(nextBtn);
        }
      }
    }

    showFeedback(message, type, shouldShake = false) {
      const fb = this.querySelector("#quiz-feedback");
      if (!fb) return;

      fb.className = `quiz-feedback show ${type}`;
      if (shouldShake) {
        fb.classList.add("shake");
        const card = this.querySelector(".card");
        card.classList.add("animate-shake");
        setTimeout(() => {
          fb.classList.remove("shake");
          card.classList.remove("animate-shake");
        }, 400);
      }
      fb.innerText = message;
    }

    nextQuestion() {
      this.currentIdx += 1;
      if (this.currentIdx < this.questions.length) {
        this.renderQuestion();
      } else {
        this.showResults();
      }
    }

    showResults() {
      const total = this.questions.length;
      const t = (key, replacements) => window.OMF.i18n ? window.OMF.i18n.t(key, replacements) : key;
      
      const state = window.OMF.Progress.saveAttempt(this.conceptId, {
        score: this.score,
        total: total,
        mistakes: this.mistakesLogged
      });

      const percentage = (this.score / total) * 100;
      let title = t('keepPracticing');
      let desc = t('keepPracticingDesc');
      
      if (percentage >= 80) {
        title = t('greatJob');
        desc = t('greatJobDesc', { score: this.score, total: total });
      } else if (percentage >= 50) {
        title = t('goodProgress');
        desc = t('goodProgressDesc', { score: this.score, total: total });
      }

      this.innerHTML = `
        <div class="card animate-pop" style="text-align: center; gap: 24px;">
          <h2>${title}</h2>
          
          <div class="mastery-badge-container">
            <mastery-badge state="${state.mastered ? 'mastered' : 'locked'}"></mastery-badge>
            <p style="font-weight: 600; color: ${state.mastered ? 'var(--success-color)' : 'var(--text-secondary)'};">
              ${state.mastered ? t('conceptMastered') : 'Keep playing to unlock badge'}
            </p>
          </div>

          <div style="font-size: 1.2rem;">
            ${t('scoreText', { score: this.score, total: total })}
          </div>

          <p>${desc}</p>

          <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 12px;">
            <button class="btn btn-secondary" id="btn-replay">${t('replayQuiz')}</button>
            <a class="btn btn-primary" href="../../examples/parent-dashboard.html">${t('backDashboard')}</a>
          </div>
        </div>
      `;

      this.querySelector("#btn-replay").addEventListener("click", () => {
        this.showWelcomeScreen();
      });
    }
  }

  customElements.define("quiz-runner", QuizRunner);
})();
