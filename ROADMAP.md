# Roadmap

This roadmap sets out our plan for building the Open Mathematics Foundation from early primary level upward.

---

## Phase 1: MVP - Foundation Number Sense Pack (Current)
We are currently building the first vertical slice of the framework: **Stage 0 (Number Sense)**. This includes:
- Core Web Components (`<ten-frame>`, `<number-line>`, `<drag-counter>`, `<mastery-badge>`).
- Core Engine (`progress.js`, `quiz-runner.js`).
- 10 interactive concepts (001 to 010).
- Reusable Parent Dashboard (`parent-dashboard.html`).

---

## Stage Progression Plan

### Stage 0: Number Sense (Foundation / Kindergarten)
- Counting 0–10 & 10–20
- One-to-one correspondence
- Comparing quantities (More, Less, Same)
- Ten-frame basics & number lines
- The concept of Zero
- Part-whole relationships (making 5 and 10)

### Stage 1: Addition and Subtraction (Grade 1)
- Addition as combining & counting on
- Subtraction as taking away & finding difference
- Number bonds to 5, 10, 20
- Visual word problems

### Stage 2: Place Value & Two-Digit Numbers (Grade 2)
- Tens and ones (bundling, base-ten blocks)
- Expanded forms
- Skip counting & basic rounding

### Stage 3: Multiplication and Division (Grade 3)
- Equal groups & repeated addition
- Array representations
- Times tables as visual patterns
- Division as sharing & grouping

### Stage 4: Fractions (Grade 3-4)
- Equal parts of shapes & groups (Half, Third, Quarter)
- Fraction number line
- Equivalent fractions

### Stage 5: Measurement & Time (Grade 3-4)
- Length, Mass, Capacity estimation
- Reading clocks (Time)
- Basic perimeter and area

### Stage 6: Geometry & Shapes (Grade 1-4)
- 2D shapes & 3D objects
- Symmetry & transformations
- Angles and directions

### Stage 7: Data & Probability (Grade 2-4)
- Sorting, Tally marks, Pictographs, Bar graphs
- Understanding chance events

### Stage 8: Problem Solving (Integrated Across All Stages)
- Applying heuristic strategies (e.g. Draw a picture, act it out, find a pattern)
- Mathematical reasoning & writing explanations

---

## Technical Engine Roadmap
- [ ] **Multi-language Translation engine**: Add fallback JSON translation files so parent guides can be toggled between English, Spanish, Hindi, etc., with zero build requirements.
- [ ] **Printable generator**: Enable exporting worksheets matching the interactive quiz layouts for offline paper-based practice.
- [ ] **Accessibility / Screen-Reader compatibility**: Auditing and improving custom elements for keyboard control and ARIA speech narration.
