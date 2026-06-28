# Open Mathematics Foundation - Workspace Rules

This file defines style guidelines, architectural constraints, and general instructions for AI agents and developer tools working on this codebase.

---

## 1. Offline-First Architecture (`file://` Protocol)
* **Rule**: All student-facing activities and educator dashboards must load and execute directly from the filesystem (double-clicking the `.html` file) without requiring a server or build step.
* **CORS Constraints**: Do **NOT** use ES6 imports/exports (`import`, `export`, `type="module"`), as modern browsers block local file module loads.
* **Component Registry**: Attach elements and classes to the global `window.OMF` namespace.
* **Questions Loading**: Pre-load concept question files by including `<script src="questions.js"></script>` before the engine scripts. Use a fallback `fetch("test.json")` inside `quiz-runner.js` only for local/remote web servers.

---

## 2. Pedagogical Style & Design System
* **Emotional Tone**: Calm, encouraging, playful, and confident.
* **Colors**: Stick to the HSL values defined in `framework/styles/main.css` (cream bg, earthy blue primary, forest green success, warm amber highlight).
* **Failure Actions**: Do **NOT** show red failure cards or make buzzer noises. Wrong answers should trigger a subtle card shake and an encouraging hint (Practice mode) or write to progress logs silently (Test mode).
* **Speed Pressure**: Do **NOT** implement timers, speed clocks, or score streaks in early primary stages.

---

## 3. Concept Folder Structure
When creating a new mathematical concept folder, always include exactly:
1. `concept.md` (metadata)
2. `parent-guide.md` (home teaching instructions)
3. `misconceptions.md` (typical thinking traps)
4. `activities.md` (hands-on physical games)
5. `questions.js` (CORS-safe quiz data)
6. `test.json` (JSON duplicate)
7. `tracking-schema.json` (localStorage state structure)
8. `child.html` (interactive game page loading custom components)

---

## 4. Web Component Interoperability
* Register HTML Custom Elements globally (e.g. `<ten-frame>`, `<number-line>`).
* Components must expose a standard `getValue()` method returning the child's numerical/logical answer.
* Touch target sizes must be at least `48px x 48px` to ensure young children can easily tap and drag items.
* Support dual input: dragging items via drag-and-drop and simple tap-to-move clicks.
