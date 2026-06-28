// Open Mathematics Foundation - Accessibility & Voice Narration Helpers
(function() {
  window.OMF = window.OMF || {};

  const Accessibility = {
    // Basic Speech Synthesis wrapper for text descriptions
    speak(text) {
      if ('speechSynthesis' in window) {
        // Cancel active readings
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9; // Slightly slower for children
        utterance.pitch = 1.1; // Slightly friendly high pitch
        window.speechSynthesis.speak(utterance);
      }
    },

    // Keyboard navigation focus utility
    trapFocus(element) {
      const focusableEls = element.querySelectorAll('button, [href], input, select, textarea, [tabindex="0"]');
      if (focusableEls.length === 0) return;
      
      const firstFocusable = focusableEls[0];
      const lastFocusable = focusableEls[focusableEls.length - 1];

      element.addEventListener('keydown', function(e) {
        const isTabPressed = (e.key === 'Tab' || e.keyCode === 9);
        if (!isTabPressed) return;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable.focus();
            e.preventDefault();
          }
        }
      });
    },

    // Toggle high contrast CSS overrides
    toggleHighContrast() {
      document.body.classList.toggle('omf-high-contrast');
    }
  };

  window.OMF.Accessibility = Accessibility;
})();
