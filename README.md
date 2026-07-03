# Open Mathematics Foundation

An open-source, offline-first mathematics learning foundation framework for children, parents, and educators.

This repository provides step-by-step mathematical learning from early primary level upward. Each lesson includes visual interactive components, parent guides, common misconceptions, physical off-screen activities, progress logs, and printable worksheets.

**No ads. No tracking servers. No accounts. No subscription walls. 100% offline.**

---

## 🎮 Live Demos (Try it now)

- **[Parent Progress Dashboard](https://yashitkumarsingh.github.io/open-mathematics/examples/parent-dashboard.html)**: Track progress, toggle parent assist modes (ADHD single-focus, dyslexia spacing, glare filters), and review mistake summaries.
- **[Printable Worksheet Generator](https://yashitkumarsingh.github.io/open-mathematics/examples/worksheet-generator.html)**: Generate clean, A4-friendly offline worksheets for ten-frames, number lines, and grouping.
- **[Concept 001: Counting 0 to 10](https://yashitkumarsingh.github.io/open-mathematics/concepts/00-number-sense/001-counting-0-to-10/child.html)**: Try the interactive apple basket drag-counter lesson.

---

## 🚀 Key Highlights

* **Offline-First & Serverless**: Operates completely under the `file://` protocol. Just double-click any `.html` file to run lessons instantly without Node or local web servers.
* **Centralized Loader Bootstrapper**: Injects dependencies synchronously using [loader.js](file:///Users/yashitkumarsingh/dev/open-mathematics/framework/loader.js), eliminating duplicate markup across lessons.
* **Component-Based Workspaces**: Interactive tasks use custom HTML5 elements (e.g. `<ten-frame>`, `<number-line>`, `<base-ten-blocks>`).
* **Privacy-Respecting Logs**: Progress data saves entirely in `localStorage`. Backup or restore data anytime via JSON imports and exports.

---

## 📈 Covered Curriculum Stages (15 Complete Lessons)

### 🔹 Stage 0: Number Sense
- `001` to `002`: Counting 0 to 10 & 10 to 20
- `003`: Compare More, Less, Equal
- `004`: Match Number to Quantity
- `005`: Ten Frame Basics
- `006`: Number Line 0 to 10
- `007` to `008`: Number Bonds to 5 & 10
- `009`: Zero as a Number
- `010`: Mixed Mastery Test

### 🔹 Stage 1: Addition & Subtraction
- `011`: Addition as Combining (visual set unions)
- `012`: Counting On (number line step addition)

### 🔹 Stage 2: Place Value
- `021`: Tens and Ones (decomposing up to 30)
- `022`: Comparing Numbers (side-by-side block columns)
- `023`: Ten More, Ten Less (adding/removing ten-rods)

---

## ♿ Neurodiversity & Sensory Assist Design

OMF is designed from the ground up to support neurodivergent learners (ADHD, ASD, dyscalculia, dyslexia, dyspraxia) and their parents:

### For the Student:
- **TTS Voice Narration**: Read prompts aloud using the slow-pace speaker button (🔊).
- **Calm Interface**: Nature HSL colors, no blinking, no sound buzzers, and no speed pressure.
- **Dual Inputs**: Use drag-and-drop or simple tap-to-move clicks.
- **AAA Keyboard Focus**: double-outline focus visible rings on all notches and cells.

### For the Parent/Educator:
- **ADHD Single-Focus Cards**: Focuses attention on exactly *one* task at a time, displaying today's lesson link and a physical game summary.
- **Dyslexia Spacing Toggle**: Expands letter spacing (`0.11em`), word spacing (`0.16em`), and line-heights (`1.8`) to avoid letter crowding.
- **Glare-Reduction Filter**: Sepia screen overlay (`sepia(32%)`) to prevent eye fatigue.
- **Audio Guides (TTS)**: Listen to parent guides aloud while doing off-screen tasks.

---

## 🤝 Contributing & Quality Gates

Please read [CONTRIBUTING.md](file:///Users/yashitkumarsingh/dev/open-mathematics/CONTRIBUTING.md) to get started. 

- **Git Hooks**: We use **Husky** to run our OMF Validator (`validate-concepts.js`) on pre-commit, ensuring syntax and folder files remain compliant.
- **Code License**: [MIT License](file:///Users/yashitkumarsingh/dev/open-mathematics/LICENSE).
- **Educational Guide Content**: [Creative Commons Attribution 4.0 (CC BY 4.0)](file:///Users/yashitkumarsingh/dev/open-mathematics/LICENSE).
