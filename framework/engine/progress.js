// Open Mathematics Foundation - Local Storage Progress Tracking & Classroom Engine
(function() {
  window.OMF = window.OMF || {};

  const BASE_STORAGE_PREFIX = "omf_concept_";
  const USER_KEY = "omf_user_profile";
  const ROSTER_KEY = "omf_classroom_roster";
  const ACTIVE_STUDENT_KEY = "omf_active_student_id";

  const Progress = {
    // Get active student ID
    getActiveStudentId() {
      return localStorage.getItem(ACTIVE_STUDENT_KEY) || "default";
    },

    // Set active student ID
    setActiveStudentId(studentId) {
      localStorage.setItem(ACTIVE_STUDENT_KEY, studentId);
    },

    // Get complete classroom roster
    getRoster() {
      const data = localStorage.getItem(ROSTER_KEY);
      if (data) {
        try {
          const roster = JSON.parse(data);
          if (Array.isArray(roster) && roster.length > 0) return roster;
        } catch (e) { }
      }
      // Default initial student profile
      const defaultProfile = this.getUserProfile("default");
      const initialRoster = [
        {
          id: "default",
          nickname: defaultProfile.nickname || "Explorer",
          gradeLevel: defaultProfile.gradeLevel || "Foundation",
          joinedDate: defaultProfile.joinedDate || new Date().toISOString().split('T')[0]
        }
      ];
      this.saveRoster(initialRoster);
      return initialRoster;
    },

    // Save classroom roster
    saveRoster(roster) {
      localStorage.setItem(ROSTER_KEY, JSON.stringify(roster));
    },

    // Add a new student to the roster
    addStudent({ nickname, gradeLevel }) {
      const roster = this.getRoster();
      const newId = "student_" + Date.now();
      const newStudent = {
        id: newId,
        nickname: nickname || "Student " + (roster.length + 1),
        gradeLevel: gradeLevel || "Foundation",
        joinedDate: new Date().toISOString().split('T')[0]
      };
      roster.push(newStudent);
      this.saveRoster(roster);
      this.saveUserProfile(newStudent, newId);
      return newStudent;
    },

    // Remove a student from the roster
    removeStudent(studentId) {
      if (studentId === "default") return false;
      let roster = this.getRoster();
      roster = roster.filter(s => s.id !== studentId);
      this.saveRoster(roster);
      if (this.getActiveStudentId() === studentId) {
        this.setActiveStudentId("default");
      }
      return true;
    },

    // Get storage prefix for a given student ID
    getPrefix(studentId) {
      const targetId = studentId || this.getActiveStudentId();
      return targetId === "default" ? BASE_STORAGE_PREFIX : `omf_student_${targetId}_concept_`;
    },

    // Get user profile for a student ID
    getUserProfile(studentId) {
      const targetId = studentId || this.getActiveStudentId();
      const key = targetId === "default" ? USER_KEY : `omf_student_${targetId}_profile`;
      const data = localStorage.getItem(key);
      if (data) {
        try { return JSON.parse(data); } catch(e) { }
      }
      return {
        id: targetId,
        nickname: "Explorer",
        gradeLevel: "Foundation",
        joinedDate: new Date().toISOString().split('T')[0]
      };
    },

    // Save user profile for a student ID
    saveUserProfile(profile, studentId) {
      const targetId = studentId || profile.id || this.getActiveStudentId();
      const key = targetId === "default" ? USER_KEY : `omf_student_${targetId}_profile`;
      localStorage.setItem(key, JSON.stringify(profile));

      // Also update in roster
      const roster = this.getRoster();
      const idx = roster.findIndex(s => s.id === targetId);
      if (idx !== -1) {
        roster[idx] = { ...roster[idx], ...profile };
        this.saveRoster(roster);
      }
    },

    // Get concept state for a specific concept & student
    getConceptState(conceptId, studentId) {
      const prefix = this.getPrefix(studentId);
      const data = localStorage.getItem(prefix + conceptId);
      if (data) {
        try { return JSON.parse(data); } catch (e) { }
      }
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

    // Record an attempt for a concept & student
    saveAttempt(conceptId, { score, total, mistakes = [] }, studentId) {
      const state = this.getConceptState(conceptId, studentId);
      state.attempts += 1;
      state.lastScore = score;
      state.lastPracticed = new Date().toISOString().split('T')[0];
      
      const percentage = (score / total) * 10;
      if (percentage > state.bestScore) {
        state.bestScore = Math.round(percentage);
      }

      if (state.bestScore >= 8) {
        state.mastered = true;
      }

      if (mistakes && mistakes.length > 0) {
        const merged = new Set([...state.mistakePatterns, ...mistakes]);
        state.mistakePatterns = Array.from(merged);
      }

      const prefix = this.getPrefix(studentId);
      localStorage.setItem(prefix + conceptId, JSON.stringify(state));
      return state;
    },

    // Get progress across all OMF concepts for a student
    getAll(studentId) {
      const prefix = this.getPrefix(studentId);
      const results = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(prefix)) {
          const conceptId = key.substring(prefix.length);
          results[conceptId] = this.getConceptState(conceptId, studentId);
        }
      }
      return results;
    },

    // Calculate aggregated stats for classroom mode across all students
    getClassroomStats() {
      const roster = this.getRoster();
      const allStudentStats = roster.map(student => {
        const concepts = this.getAll(student.id);
        const conceptKeys = Object.keys(concepts);
        const masteredCount = conceptKeys.filter(k => concepts[k].mastered).length;
        return {
          student: student,
          totalConcepts: conceptKeys.length,
          masteredCount: masteredCount,
          concepts: concepts
        };
      });

      let totalMasteredAcrossClass = 0;
      const conceptMasteryCounts = {};
      const classMistakePatterns = new Set();

      allStudentStats.forEach(stat => {
        totalMasteredAcrossClass += stat.masteredCount;
        Object.keys(stat.concepts).forEach(cid => {
          const c = stat.concepts[cid];
          if (!conceptMasteryCounts[cid]) conceptMasteryCounts[cid] = 0;
          if (c.mastered) conceptMasteryCounts[cid] += 1;
          (c.mistakePatterns || []).forEach(m => classMistakePatterns.add(m));
        });
      });

      return {
        totalStudents: roster.length,
        totalMasteredAcrossClass: totalMasteredAcrossClass,
        studentStats: allStudentStats,
        conceptMasteryCounts: conceptMasteryCounts,
        topMistakePatterns: Array.from(classMistakePatterns)
      };
    },

    // Export progress as JSON string (single student or entire roster)
    exportProgressJSON(includeClassroom = true) {
      const roster = this.getRoster();
      const exportData = {
        exportedAt: new Date().toISOString(),
        version: "2.0-classroom",
        roster: roster,
        studentData: {}
      };

      roster.forEach(student => {
        exportData.studentData[student.id] = {
          profile: this.getUserProfile(student.id),
          concepts: this.getAll(student.id)
        };
      });

      return JSON.stringify(exportData, null, 2);
    },

    // Export progress as CSV string
    exportProgressCSV(studentId) {
      const targetId = studentId || this.getActiveStudentId();
      const profile = this.getUserProfile(targetId);
      const concepts = this.getAll(targetId);

      const headers = ["Student Name", "Grade Level", "Concept ID", "Attempts", "Best Score (out of 10)", "Mastered", "Last Practiced", "Mistake Patterns"];
      const rows = [headers.join(",")];

      const keys = Object.keys(concepts);
      if (keys.length === 0) {
        rows.push([`"${profile.nickname}"`, `"${profile.gradeLevel}"`, "No concepts recorded", 0, 0, false, "", ""].join(","));
      } else {
        keys.forEach(cid => {
          const c = concepts[cid];
          const mistakeStr = (c.mistakePatterns || []).join("; ");
          const row = [
            `"${profile.nickname}"`,
            `"${profile.gradeLevel}"`,
            `"${c.conceptId}"`,
            c.attempts,
            c.bestScore,
            c.mastered ? "Yes" : "No",
            `"${c.lastPracticed || ""}"`,
            `"${mistakeStr}"`
          ];
          rows.push(row.join(","));
        });
      }

      return rows.join("\n");
    },

    // Import progress from JSON string
    importProgressJSON(jsonString) {
      try {
        const importData = JSON.parse(jsonString);
        if (!importData || typeof importData !== 'object') return false;

        // Check if multi-student roster export format
        if (importData.roster && importData.studentData) {
          this.saveRoster(importData.roster);
          Object.keys(importData.studentData).forEach(sid => {
            const data = importData.studentData[sid];
            if (data.profile) this.saveUserProfile(data.profile, sid);
            if (data.concepts) {
              const prefix = this.getPrefix(sid);
              Object.keys(data.concepts).forEach(cid => {
                localStorage.setItem(prefix + cid, JSON.stringify(data.concepts[cid]));
              });
            }
          });
          return true;
        }

        // Single student fallback format
        if (importData.profile) {
          this.saveUserProfile(importData.profile, "default");
        }
        if (importData.concepts) {
          const prefix = this.getPrefix("default");
          Object.keys(importData.concepts).forEach(cid => {
            localStorage.setItem(prefix + cid, JSON.stringify(importData.concepts[cid]));
          });
        }
        return true;
      } catch (e) {
        console.error("Failed to import JSON progress data", e);
        return false;
      }
    },

    // Import progress from CSV string
    importProgressCSV(csvString, studentId) {
      try {
        const lines = csvString.trim().split(/\r?\n/);
        if (lines.length <= 1) return false;

        const targetId = studentId || this.getActiveStudentId();
        const prefix = this.getPrefix(targetId);

        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line) continue;

          // Simple CSV regex matching quoted strings or unquoted terms
          const parts = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || line.split(",");
          if (parts.length >= 5) {
            const cleanParts = parts.map(p => p.replace(/^"|"$/g, '').trim());
            const conceptId = cleanParts[2];
            const attempts = parseInt(cleanParts[3]) || 0;
            const bestScore = parseInt(cleanParts[4]) || 0;
            const mastered = cleanParts[5] === "Yes" || cleanParts[5] === "true";
            const lastPracticed = cleanParts[6] || null;
            const mistakePatterns = cleanParts[7] ? cleanParts[7].split(";").map(s => s.trim()).filter(Boolean) : [];

            if (conceptId && conceptId !== "No concepts recorded") {
              const state = {
                conceptId: conceptId,
                attempts: attempts,
                bestScore: bestScore,
                lastScore: bestScore,
                mastered: mastered,
                lastPracticed: lastPracticed,
                mistakePatterns: mistakePatterns
              };
              localStorage.setItem(prefix + conceptId, JSON.stringify(state));
            }
          }
        }
        return true;
      } catch (e) {
        console.error("Failed to import CSV progress data", e);
        return false;
      }
    },

    // Clear all progress data
    clearAll() {
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(BASE_STORAGE_PREFIX) || key.startsWith("omf_student_") || key === USER_KEY || key === ROSTER_KEY || key === ACTIVE_STUDENT_KEY) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(k => localStorage.removeItem(k));
    }
  };

  window.OMF.Progress = Progress;
})();
