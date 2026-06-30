// Open Mathematics Foundation - Multilingual Parent Guide Component
(function() {
  window.OMF = window.OMF || {};

  class ParentGuide extends HTMLElement {
    connectedCallback() {
      // Re-render when language shifts dynamically
      document.addEventListener("omf-language-changed", () => this.render());
      
      // Initial render (delayed slightly to ensure questions.js has loaded)
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => this.render());
      } else {
        setTimeout(() => this.render(), 10);
      }
    }

    render() {
      const quiz = window.OMF.currentQuiz;
      if (!quiz || !quiz.parentGuide) {
        this.innerHTML = "";
        return;
      }

      const lang = (window.OMF.i18n && window.OMF.i18n.getLang()) || "en";
      const data = quiz.parentGuide[lang] || quiz.parentGuide["en"];
      if (!data) {
        this.innerHTML = "";
        return;
      }

      // Localized labels
      let titleLabel = "💡 What this concept means";
      let misconceptionsLabel = "❓ Common Misconceptions to watch for";
      let activitiesLabel = "🏡 Off-screen Hands-on Activities";
      let buttonOpen = "💡 Open Parent Educator Guide";
      let buttonClose = "✖ Close Guide";

      if (lang === "es") {
        titleLabel = "💡 Lo que significa este concepto";
        misconceptionsLabel = "❓ Errores comunes a tener en cuenta";
        activitiesLabel = "🏡 Actividades prácticas fuera de pantalla";
        buttonOpen = "💡 Abrir Guía para Padres";
        buttonClose = "✖ Cerrar Guía";
      } else if (lang === "hi") {
        titleLabel = "💡 इस विषय का अर्थ क्या है";
        misconceptionsLabel = "❓ सामान्य गलतियाँ जिन पर ध्यान देना चाहिए";
        activitiesLabel = "🏡 ऑफ-स्क्रीन व्यावहारिक गतिविधियां";
        buttonOpen = "💡 अभिभावक मार्गदर्शिका खोलें";
        buttonClose = "✖ मार्गदर्शिका बंद करें";
      }

      this.innerHTML = `
        <details class="parent-guide-details">
          <summary class="parent-guide-summary" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none;">
            <span>👨‍👩‍👧 Parents & Educators</span>
            <span class="guide-toggle-lbl">${buttonOpen}</span>
          </summary>
          <div class="parent-guide-content">
            <h3>${titleLabel}</h3>
            <p>${data.concept}</p>
            
            <h3>${misconceptionsLabel}</h3>
            <ul>
              ${data.misconceptions && data.misconceptions.length > 0
                ? data.misconceptions.map(m => `<li>${m}</li>`).join("")
                : `<li>None documented.</li>`}
            </ul>

            <h3>${activitiesLabel}</h3>
            <ul>
              ${data.activities && data.activities.length > 0
                ? data.activities.map(a => `<li>${a}</li>`).join("")
                : `<li>None documented.</li>`}
            </ul>
          </div>
        </details>
      `;

      // Update button text toggle state
      const details = this.querySelector(".parent-guide-details");
      const label = this.querySelector(".guide-toggle-lbl");
      if (details && label) {
        details.addEventListener("toggle", () => {
          if (details.open) {
            label.innerText = buttonClose;
          } else {
            label.innerText = buttonOpen;
          }
        });
      }
    }
  }

  customElements.define("parent-guide", ParentGuide);
})();
