// Open Mathematics Foundation - Offline i18n Translation Engine
(function() {
  window.OMF = window.OMF || {};

  const LANGUAGE_KEY = "omf_language";
  const SUPPORTED_LANGUAGES = ['en', 'es', 'hi'];

  const DICTIONARY = {
    en: {
      practiceMode: "Practice",
      testMode: "Mastery Check",
      readyToExplore: "Ready to Explore?",
      playPractice: "⚡ Play & Practice",
      masteryTest: "🏆 Mastery Test",
      bestScore: "Best score: {best}/10 | Attempts: {attempts}",
      conceptMastered: "🏅 Concept Mastered!",
      scoreText: "Score: {score} / {total}",
      keepPracticing: "Keep Practicing!",
      keepPracticingDesc: "You are working hard. Play again to improve your score!",
      goodProgress: "👍 Good Progress!",
      goodProgressDesc: "You answered {score}/{total} questions correctly. A little more practice and you will master this concept!",
      greatJob: "🏅 Concept Mastered!",
      greatJobDesc: "Superb work! You answered {score}/{total} questions correctly. You have earned a mastery badge.",
      replayQuiz: "🔄 Replay Quiz",
      backDashboard: "🏠 Back to Dashboard",
      checkAnswer: "Check Answer",
      tip: "💡 Tip",
      speakPrompt: "🔊",
      correctFeedback: "✨ Wonderful job! You got it!",
      wrongFeedback: "Not quite! Let's try one more time.",
      recordFeedback: "Answer recorded! Keep going.",
      promptInteract: "Please interact with the activity before checking!",
      nextQuestion: "Next Question ➡️",
      showResults: "Show Results 🎉",
      parentGuideTitle: "💡 Open Parent Educator Guide",
      closeGuideTitle: "✖ Close Guide"
    },
    es: {
      practiceMode: "Práctica",
      testMode: "Prueba de Maestría",
      readyToExplore: "¿Listo para explorar?",
      playPractice: "⚡ Jugar y Practicar",
      masteryTest: "🏆 Prueba de Maestría",
      bestScore: "Mejor puntuación: {best}/10 | Intentos: {attempts}",
      conceptMastered: "🏅 ¡Concepto Dominado!",
      scoreText: "Puntuación: {score} / {total}",
      keepPracticing: "¡Sigue practicando!",
      keepPracticingDesc: "Estás trabajando duro. ¡Juega otra vez para mejorar!",
      goodProgress: "👍 ¡Buen progreso!",
      goodProgressDesc: "Respondiste {score}/{total} preguntas correctamente. ¡Un poco más de práctica y dominarás este concepto!",
      greatJob: "🏅 ¡Concepto Dominado!",
      greatJobDesc: "¡Excelente trabajo! Respondiste {score}/{total} preguntas correctamente. Has ganado una insignia de maestría.",
      replayQuiz: "🔄 Volver a jugar",
      backDashboard: "🏠 Volver al Panel",
      checkAnswer: "Comprobar respuesta",
      tip: "💡 Consejo",
      speakPrompt: "🔊",
      correctFeedback: "✨ ¡Excelente trabajo! ¡Lo lograste!",
      wrongFeedback: "¡No del todo! Intentémoslo una vez más.",
      recordFeedback: "¡Respuesta registrada! Continúa.",
      promptInteract: "¡Por favor interactúa con la actividad antes de comprobar!",
      nextQuestion: "Siguiente pregunta ➡️",
      showResults: "Mostrar resultados 🎉",
      parentGuideTitle: "💡 Abrir guía para padres",
      closeGuideTitle: "✖ Cerrar guía"
    },
    hi: {
      practiceMode: "अभ्यास",
      testMode: "महारत परीक्षा",
      readyToExplore: "तैयार हैं?",
      playPractice: "⚡ खेलें और अभ्यास करें",
      masteryTest: "🏆 महारत परीक्षा",
      bestScore: "सर्वश्रेष्ठ स्कोर: {best}/10 | प्रयास: {attempts}",
      conceptMastered: "🏅 महारत हासिल की!",
      scoreText: "स्कोर: {score} / {total}",
      keepPracticing: "अभ्यास जारी रखें!",
      keepPracticingDesc: "आप कड़ी मेहनत कर रहे हैं। अपना स्कोर सुधारने के लिए फिर से खेलें!",
      goodProgress: "👍 अच्छी प्रगति!",
      goodProgressDesc: "आपने {score}/{total} प्रश्नों के सही उत्तर दिए। थोड़ा और अभ्यास करें और आप महारत हासिल कर लेंगे!",
      greatJob: "🏅 महारत हासिल की!",
      greatJobDesc: "उत्कृष्ट काम! आपने {score}/{total} प्रश्नों के सही उत्तर दिए। आपने महारत बैज अर्जित कर लिया है।",
      replayQuiz: "🔄 फिर से खेलें",
      backDashboard: "🏠 डैशबोर्ड पर वापस जाएं",
      checkAnswer: "उत्तर जांचें",
      tip: "💡 संकेत",
      speakPrompt: "🔊",
      correctFeedback: "✨ बहुत बढ़िया! आपने कर दिखाया!",
      wrongFeedback: "काफी नहीं! आइए एक बार फिर कोशिश करें।",
      recordFeedback: "उत्तर दर्ज हो गया! जारी रखें।",
      promptInteract: "जांचने से पहले कृपया गतिविधि के साथ जुड़ें!",
      nextQuestion: "अगला प्रश्न ➡️",
      showResults: "परिणाम देखें 🎉",
      parentGuideTitle: "💡 अभिभावक गाइड खोलें",
      closeGuideTitle: "✖ गाइड बंद करें"
    }
  };

  const i18n = {
    // Get current configured language
    getLang() {
      const saved = localStorage.getItem(LANGUAGE_KEY);
      if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
        return saved;
      }
      return 'en';
    },

    // Save language and reload to apply
    setLang(lang) {
      if (SUPPORTED_LANGUAGES.includes(lang)) {
        localStorage.setItem(LANGUAGE_KEY, lang);
        window.location.reload();
      }
    },

    // Translate string key
    t(key, replacements = {}) {
      const lang = this.getLang();
      let translation = DICTIONARY[lang][key] || DICTIONARY['en'][key] || key;

      // Handle placeholder tokens like {score}
      Object.keys(replacements).forEach(placeholder => {
        translation = translation.replace(`{${placeholder}}`, replacements[placeholder]);
      });

      return translation;
    },

    // Resolve prompt strings or objects
    translatePrompt(prompt) {
      if (typeof prompt === 'string') return prompt;
      if (prompt && typeof prompt === 'object') {
        const lang = this.getLang();
        return prompt[lang] || prompt['en'] || Object.values(prompt)[0];
      }
      return "";
    },

    // Toggle DOM elements depending on their .lang-xx tags
    applyLanguageDisplay() {
      const activeLang = this.getLang();
      SUPPORTED_LANGUAGES.forEach(lang => {
        const els = document.querySelectorAll(`.lang-${lang}`);
        els.forEach(el => {
          if (lang === activeLang) {
            // Restore natural display type
            if (el.tagName === 'SPAN' || el.tagName === 'STRONG') {
              el.style.display = 'inline';
            } else {
              el.style.display = 'block';
            }
          } else {
            el.style.display = 'none';
          }
        });
      });
    }
  };

  // Run automatically on page load to adjust DOM displays
  document.addEventListener("DOMContentLoaded", () => {
    i18n.applyLanguageDisplay();
  });

  window.OMF.i18n = i18n;
})();
