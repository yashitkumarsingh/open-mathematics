# Roadmap & Milestones

This roadmap sets out our plan for building the Open Mathematics Foundation from early primary level upward.

---

## 🎯 Release Milestones

### 1. MVP (Current Release)
- **Focus**: Stage 0: Number Sense (Foundation Level).
- **Deliverables**:
  - Core Web Components (`<ten-frame>`, `<number-line>`, `<drag-counter>`, `<mastery-badge>`).
  - Core Engine (`progress.js`, `quiz-runner.js`) with offline CORS-safe loading.
  - 10 interactive concepts (001 to 010) fully documented and playable.
  - Reusable Parent Dashboard (`parent-dashboard.html`) with JSON progress import/export.
  - Curriculum alignments (Australian Curriculum V9, US Common Core).

### 2. Beta (Q3 2026)
- **Focus**: Basic Arithmetic & Place Value.
- **Deliverables**:
  - **Stage 1 (Addition & Subtraction)**: Adding visual combining, counting on, fact families, and word problems.
  - **Stage 2 (Place Value)**: Visualizing tens and ones utilizing our `<base-ten-blocks>` element.
  - **Automated Validation**: Running automated validations for all newly added concepts in pull requests.

### 3. v1.0 (Q1 2027)
- **Focus**: Full Primary Curriculum Coverage.
- **Deliverables**:
  - **Stage 3 to Stage 8**: Interactive shapes, fractions, data bar graphs, arrays, and problem-solving heuristics.
  - **Printable Worksheet Generator**: Ability to print offline worksheets matching visual activities.
  - **Accessibility AA Compliance**: Complete screen-reader testing and keyboard controls on all elements.

### 4. Later / Backlog
- **Focus**: Multi-Language & Multi-Curriculum expansion.
- **Deliverables**:
  - **Multi-language translation engine**: Fallback translation matrices for Spanish, Hindi, and regional languages.
  - **Curriculum mappings**: Mappings for UK, Singapore Math, and Indian NCERT frameworks.
  - **Offline Android/iOS Wraps**: Packaging static HTML files via Cordova or Capacitor for app stores.
