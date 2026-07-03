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
      let titleLabel = "What this concept means";
      let misconceptionsLabel = "Common Misconceptions to watch for";
      let activitiesLabel = "Off-screen Hands-on Activities";
      let buttonOpen = "💡 Open Parent Educator Guide";
      let buttonClose = "✖ Close Guide";
      let speakLabel = "🔊 Listen to Guide";

      if (lang === "es") {
        titleLabel = "Lo que significa este concepto";
        misconceptionsLabel = "Errores comunes a tener en cuenta";
        activitiesLabel = "Actividades prácticas fuera de pantalla";
        buttonOpen = "💡 Abrir Guía para Padres";
        buttonClose = "✖ Cerrar Guía";
        speakLabel = "🔊 Escuchar Guía";
      } else if (lang === "hi") {
        titleLabel = "इस विषय का अर्थ क्या है";
        misconceptionsLabel = "सामान्य गलतियाँ जिन पर ध्यान देना चाहिए";
        activitiesLabel = "ऑफ-स्क्रीन व्यावहारिक गतिविधियां";
        buttonOpen = "💡 अभिभावक मार्गदर्शिका खोलें";
        buttonClose = "✖ मार्गदर्शिका बंद करें";
        speakLabel = "🔊 मार्गदर्शिका सुनें";
      }

      let conceptHtml = data.concept || "";
      let misconceptions = data.misconceptions || [];
      let activities = data.activities || [];

      if (window.OMF.Security && window.OMF.Security.sanitizeHTML) {
        conceptHtml = window.OMF.Security.sanitizeHTML(conceptHtml);
        misconceptions = misconceptions.map(m => window.OMF.Security.sanitizeHTML(m));
        activities = activities.map(a => window.OMF.Security.sanitizeHTML(a));
      }

      this.innerHTML = `
        <details class="parent-guide-details">
          <summary class="parent-guide-summary" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none;">
            <span>👨‍👩‍👧 Parents & Educators</span>
            <span class="guide-toggle-lbl">${buttonOpen}</span>
          </summary>
          <div class="parent-guide-content">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 2px solid var(--primary-light); padding-bottom: 8px; flex-wrap: wrap; gap: 8px;">
              <h3 style="margin: 0; border: none; padding: 0;">💡 ${titleLabel}</h3>
              <button id="parent-guide-speak-btn" aria-label="Listen to parent guide" style="background: var(--primary-light); border: none; cursor: pointer; font-size: 0.9rem; font-weight: 600; color: var(--primary-color); border-radius: 20px; padding: 6px 12px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">${speakLabel}</button>
            </div>
            <p>${conceptHtml}</p>
            
            <h3 style="margin-top: 14px;">❓ ${misconceptionsLabel}</h3>
            <ul>
              ${misconceptions.length > 0
                ? misconceptions.map(m => `<li>${m}</li>`).join("")
                : `<li>None documented.</li>`}
            </ul>

            <h3 style="margin-top: 14px;">🏡 ${activitiesLabel}</h3>
            <ul>
              ${activities.length > 0
                ? activities.map(a => `<li>${a}</li>`).join("")
                : `<li>None documented.</li>`}
            </ul>
          </div>
        </details>
      `;

      // Update button text toggle state and speak events
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

      const speakBtn = this.querySelector("#parent-guide-speak-btn");
      if (speakBtn) {
        speakBtn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (window.OMF && window.OMF.Accessibility) {
            let textToRead = data.concept + ". ";
            if (data.misconceptions && data.misconceptions.length > 0) {
              textToRead += misconceptionsLabel + ": ";
              data.misconceptions.forEach(m => {
                textToRead += m.replace(/<[^>]*>/g, '') + ". ";
              });
            }
            if (data.activities && data.activities.length > 0) {
              textToRead += activitiesLabel + ": ";
              data.activities.forEach(a => {
                textToRead += a.replace(/<[^>]*>/g, '') + ". ";
              });
            }
            window.OMF.Accessibility.speak(textToRead);
          }
        });
      }
    }
  }

  customElements.define("parent-guide", ParentGuide);
})();
