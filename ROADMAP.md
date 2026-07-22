# Roadmap & Milestones

This roadmap sets out our plan for building the Open Mathematics Foundation from early primary level upward.

---

## 🎯 Current Status & Milestones

### 1. Completed Milestones (Current Release v0.5)
- **Stage 0: Number Sense (Foundation Level)**: 10 interactive concepts (`001` to `010`) fully documented and playable.
- **Stage 1: Addition & Subtraction**: 2 interactive concepts (`011` and `012`) combining sets and number line jumps.
- **Stage 2: Place Value**: 3 interactive concepts (`021` to `023`) introducing tens/ones blocks and mental tens arithmetic.
- **Stage 3: Multiplication & Division**: 3 interactive concepts (`031` to `033`) covering skip counting (2, 5, 10), equal groups, and rectangular arrays.
- **Manipulative Components**: Custom elements for `<ten-frame>`, `<number-line>`, `<drag-counter>`, and `<base-ten-blocks>`.
- **Sensory & Parent Access**: Localized guides (English, Spanish, Hindi), ADHD focus missions, dyslexia spacing overrides, glare-reduction sepia filters, and guide Text-to-Speech (TTS) narrations.
- **Offline A4 Worksheet Generator**: Generates and prints physical practice worksheets matching digital visual frameworks.
- **CI Quality Gates & Validator**: pre-commit Husky gates and GitHub Actions workflows executing automatic validation tests.

---

## 🚀 Future Milestones

### 2. Stage 3 & 4 (Q4 2026)
- **Focus**: Expanding Arithmetic, Multiplication, and Geometry.
- **Deliverables**:
  - **Stage 3 (Multiplication & Division)**: Skip counting, equal groups visualizers, and arrays.
  - **Stage 4 (Fractions & Decimals)**: Interactive fraction bars, visual partitions, and decimals number lines.
  - **Exemplar Lessons**: Refine 3-5 additional high-quality interactive manipulates.

### 3. Framework Hardening & v1.0 (Q2 2027)
- **Focus**: AAA Accessibility & Contributor Safety.
- **Deliverables**:
  - **AAA Accessibility Audit**: Fully verify screen-reader ARIA compliance, focus-ring traps, and keyboard controls.
  - **Prompt HTML Sanitization**: Implement a lightweight client-side HTML sanitizer to protect quiz-runner from contributor-authored prompt XSS injection.
  - **Educator Dashboard Mode**: Split parent dashboards into dedicated classroom tracking modes for teachers.

### 4. Backlog / Future Expansion
- **Capacitor Mobile Wraps**: Packaging the serverless HTML app for Android and iOS app stores.
- **Singaporian & NCERT Mappings**: Expanded mapping lists for Singapore Math and Indian NCERT curriculums.
