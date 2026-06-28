// Open Mathematics Foundation - Quiz Runner Custom Element
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
      const badgeHtml = state.mastered 
        ? `<div class="mastery-badge-container">
             <mastery-badge state="mastered"></mastery-badge>
             <p style="color: var(--success-color); font-weight: 600;">Concept Mastered!</p>
           </div>`
        : "";

      this.innerHTML = `
        <div class="card animate-pop" style="text-align: center; gap: 24px;">
          <h2>Ready to Explore?</h2>
          ${badgeHtml}
          <p>Choose a mode below to play with these mathematical ideas. Practice gives you infinite tries and helpful tips. Test checks your retention.</p>
          
          <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
            <button class="btn btn-secondary" id="btn-practice">⚡ Play & Practice</button>
            <button class="btn btn-primary" id="btn-test">🏆 Mastery Test</button>
          </div>
          
          ${state.attempts > 0 ? `<p style="font-size: 0.9rem; color: var(--text-secondary);">Best score: ${state.bestScore}/10 | Attempts: ${state.attempts}</p>` : ""}
        </div>
      `;

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

      // Build dot elements for tracking progress
      let dotsHtml = "";
      for (let i = 0; i < total; i++) {
        let cls = "quiz-progress-dot";
        if (i === this.currentIdx) cls += " active";
        dotsHtml += `<div class="${cls}" data-idx="${i}"></div>`;
      }

      this.innerHTML = `
        <div class="card animate-pop">
          <div class="quiz-header">
            <span class="quiz-mode-pill ${this.mode}">${this.mode === 'practice' ? 'Practice' : 'Mastery Check'}</span>
            <div class="quiz-progress-dots">${dotsHtml}</div>
          </div>

          <div class="quiz-prompt">${question.prompt}</div>
          
          <div id="quiz-workspace" style="display: flex; flex-direction: column; align-items: center; margin: 16px 0;">
            <!-- Interactive component gets injected here -->
          </div>

          <div class="quiz-feedback" id="quiz-feedback"></div>

          <div class="quiz-actions">
            ${this.mode === 'practice' ? `<button class="btn btn-secondary" id="quiz-hint-btn" style="display: none;">💡 Tip</button>` : ''}
            <button class="btn btn-primary" id="quiz-check-btn">Check Answer</button>
          </div>
        </div>
      `;

      this.renderWorkspace(question);

      this.querySelector("#quiz-check-btn").addEventListener("click", () => this.checkAnswer());
      if (this.mode === 'practice') {
        const hintBtn = this.querySelector("#quiz-hint-btn");
        hintBtn.addEventListener("click", () => {
          this.showFeedback(question.hint || "Try counting again slowly!", "error");
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
            btn.innerHTML = opt.label;
            btn.addEventListener("click", () => {
              this.handleChoiceAnswer(opt.value);
            });
            optsGrid.appendChild(btn);
          });
          container.appendChild(optsGrid);
          // Hide check answer button for multiple choice (answered immediately on click)
          this.querySelector("#quiz-check-btn").style.display = "none";
          break;

        case "ten-frame":
          const tenFrame = document.createElement("ten-frame");
          // If the question specifies a start quantity, we set it
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
      let userAnswer = null;

      if (this.activeComponent) {
        // Fetch values from components
        if (question.type === "ten-frame") {
          userAnswer = this.activeComponent.getValue();
        } else if (question.type === "number-line") {
          userAnswer = this.activeComponent.getValue();
        } else if (question.type === "drag-counter") {
          userAnswer = this.activeComponent.getValue();
        }
      }

      if (userAnswer === null) {
        this.showFeedback("Please interact with the activity before checking!", "error");
        return;
      }

      const isCorrect = (userAnswer === question.target);
      let pattern = null;
      if (!isCorrect && question.mistakePatterns) {
        // If there are detailed mistake patterns defined, map them
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

      if (isCorrect) {
        this.score += 1;
        this.showFeedback("✨ Wonderful job! You got it!", "success");
        if (checkBtn) checkBtn.style.display = "none";
        if (hintBtn) hintBtn.style.display = "none";

        // Show Next button
        const nextBtn = document.createElement("button");
        nextBtn.className = "btn btn-success animate-pop";
        nextBtn.id = "quiz-next-btn";
        nextBtn.innerText = this.currentIdx < this.questions.length - 1 ? "Next Question ➡️" : "Show Results 🎉";
        nextBtn.addEventListener("click", () => this.nextQuestion());
        this.querySelector(".quiz-actions").appendChild(nextBtn);
      } else {
        if (mistakePattern) {
          this.mistakesLogged.push(mistakePattern);
        }

        if (this.mode === "practice") {
          // Practice mode allows retry
          this.isAnswered = false;
          this.showFeedback("Not quite! Let's try one more time.", "error", true);
          if (hintBtn) hintBtn.style.display = "inline-flex";
        } else {
          // Test mode: lock answer and show next button
          this.showFeedback("Answer recorded! Keep going.", "error");
          if (checkBtn) checkBtn.style.display = "none";

          const nextBtn = document.createElement("button");
          nextBtn.className = "btn btn-primary animate-pop";
          nextBtn.id = "quiz-next-btn";
          nextBtn.innerText = this.currentIdx < this.questions.length - 1 ? "Next Question ➡️" : "Show Results 🎉";
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
        // Also shake the workspace card
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
      
      // Update progress schema
      const state = window.OMF.Progress.saveAttempt(this.conceptId, {
        score: this.score,
        total: total,
        mistakes: this.mistakesLogged
      });

      const percentage = (this.score / total) * 100;
      let title = "Keep Practicing!";
      let desc = "You are working hard. Play again to improve your score!";
      
      if (percentage >= 80) {
        title = "🏅 Concept Mastered!";
        desc = `Superb work! You answered ${this.score}/${total} questions correctly. You have earned a mastery badge.`;
      } else if (percentage >= 50) {
        title = "👍 Good Progress!";
        desc = `You answered ${this.score}/${total} questions correctly. A little more practice and you will master this concept!`;
      }

      this.innerHTML = `
        <div class="card animate-pop" style="text-align: center; gap: 24px;">
          <h2>${title}</h2>
          
          <div class="mastery-badge-container">
            <mastery-badge state="${state.mastered ? 'mastered' : 'locked'}"></mastery-badge>
            <p style="font-weight: 600; color: ${state.mastered ? 'var(--success-color)' : 'var(--text-secondary)'};">
              ${state.mastered ? 'Mastered!' : 'Keep playing to unlock badge'}
            </p>
          </div>

          <div style="font-size: 1.2rem;">
            Score: <strong style="color: var(--primary-color); font-size: 1.8rem;">${this.score}</strong> / ${total}
          </div>

          <p>${desc}</p>

          <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 12px;">
            <button class="btn btn-secondary" id="btn-replay">🔄 Replay Quiz</button>
            <a class="btn btn-primary" href="../../examples/parent-dashboard.html">🏠 Back to Dashboard</a>
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
