// Open Mathematics Foundation - Local Storage Progress Tracking Engine
(function() {
  window.OMF = window.OMF || {};

  const STORAGE_PREFIX = "omf_concept_";
  const USER_KEY = "omf_user_profile";

  const Progress = {
    // Get user profile or default
    getUserProfile() {
      const data = localStorage.getItem(USER_KEY);
      if (data) {
        try { return JSON.parse(data); } catch(e) { }
      }
      return {
        nickname: "Explorer",
        gradeLevel: "Foundation",
        joinedDate: new Date().toISOString().split('T')[0]
      };
    },

    // Save user profile
    saveUserProfile(profile) {
      localStorage.setItem(USER_KEY, JSON.stringify(profile));
    },

    // Get the state of a single concept
    getConceptState(conceptId) {
      const data = localStorage.getItem(STORAGE_PREFIX + conceptId);
      if (data) {
        try {
          return JSON.parse(data);
        } catch (e) {
          console.error("Failed to parse progress data for " + conceptId, e);
        }
      }
      // Return a blank state
      return {
        conceptId: conceptId,
        attempts: 0,
        bestScore: 0,
        lastScore: 0,
        mastered: false,
        lastPracticed: null,
        mistakePatterns: []
      };
    },

    // Record an attempt and determine mastery
    saveAttempt(conceptId, { score, total, mistakes = [] }) {
      const state = this.getConceptState(conceptId);
      state.attempts += 1;
      state.lastScore = score;
      state.lastPracticed = new Date().toISOString().split('T')[0];
      
      const percentage = (score / total) * 10; // Normalized out of 10
      if (percentage > state.bestScore) {
        state.bestScore = Math.round(percentage);
      }

      // Mastery Condition: Best score is 8 out of 10 or more (80%)
      if (state.bestScore >= 8) {
        state.mastered = true;
      }

      // Append new unique mistake patterns
      if (mistakes && mistakes.length > 0) {
        const merged = new Set([...state.mistakePatterns, ...mistakes]);
        state.mistakePatterns = Array.from(merged);
      }

      localStorage.setItem(STORAGE_PREFIX + conceptId, JSON.stringify(state));
      return state;
    },

    // Get progress across all OMF concepts in storage
    getAll() {
      const results = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(STORAGE_PREFIX)) {
          const conceptId = key.substring(STORAGE_PREFIX.length);
          results[conceptId] = this.getConceptState(conceptId);
        }
      }
      return results;
    },

    // Export progress database as a JSON string download
    exportProgressJSON() {
      const profile = this.getUserProfile();
      const concepts = this.getAll();
      const exportData = {
        exportedAt: new Date().toISOString(),
        profile: profile,
        concepts: concepts
      };
      return JSON.stringify(exportData, null, 2);
    },

    // Import progress from a JSON string, merging with local storage
    importProgressJSON(jsonString) {
      try {
        const importData = JSON.parse(jsonString);
        if (!importData || typeof importData !== 'object') return false;

        // Restore Profile
        if (importData.profile) {
          this.saveUserProfile(importData.profile);
        }

        // Restore Concepts
        if (importData.concepts) {
          Object.keys(importData.concepts).forEach(conceptId => {
            const incoming = importData.concepts[conceptId];
            const existing = this.getConceptState(conceptId);
            
            // Merge states
            const merged = {
              conceptId: conceptId,
              attempts: Math.max(existing.attempts, incoming.attempts || 0),
              bestScore: Math.max(existing.bestScore, incoming.bestScore || 0),
              lastScore: incoming.lastScore || existing.lastScore,
              mastered: existing.mastered || incoming.mastered || false,
              lastPracticed: incoming.lastPracticed || existing.lastPracticed,
              mistakePatterns: Array.from(new Set([...existing.mistakePatterns, ...(incoming.mistakePatterns || [])]))
            };
            localStorage.setItem(STORAGE_PREFIX + conceptId, JSON.stringify(merged));
          });
        }
        return true;
      } catch (e) {
        console.error("Failed to import progress data", e);
        return false;
      }
    },

    // Clear all progress data
    clearAll() {
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(STORAGE_PREFIX) || key === USER_KEY) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(k => localStorage.removeItem(k));
    }
  };

  window.OMF.Progress = Progress;
})();
