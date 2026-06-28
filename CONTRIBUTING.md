# Contributing to Open Mathematics Foundation

Thank you for your interest in helping build a solid, open-source mathematical foundation for children worldwide!

Our framework is designed to be highly modular, offline-capable, and simple to expand without requiring complex builds, web servers, databases, or accounts.

---

## How You Can Help

1. **Create New Concepts**: Add mathematical concepts following our standardized directory structure under `concepts/`.
2. **Build Interactive Activities**: Write simple, child-friendly HTML files using our custom elements (`<ten-frame>`, `<number-line>`, `<drag-counter>`).
3. **Write Parent Guides**: Explain mathematical ideas simply and offer practical tips for parents to teach concepts at home using everyday items.
4. **Translate Content**: Help translate parent guides and activity instructions into different languages.
5. **Curriculum Mapping**: Improve mapping to national curriculum standards (e.g., Common Core, Australian Curriculum, NCERT).

---

## Directory Structure of a Concept

Every mathematical concept is stored in its own directory within `concepts/[stage-name]/[concept-id-slug]/`:

```txt
001-counting-0-to-10/
  concept.md               # Metadata (ID, Title, Goals, Prerequisites)
  parent-guide.md          # Guide on teaching this concept
  misconceptions.md        # Explaining common mistakes children make
  activities.md            # Off-screen (hands-on) & extension activities
  test.json                # Structured practice and test questions
  tracking-schema.json     # Schema representation for progress tracking
  child.html               # Playable offline-first HTML file
```

---

## Coding Standards & Guidelines

* **Vanilla HTML, CSS, and JS**: All activities must work under the `file://` protocol. Do not use ES6 module imports/exports (`type="module"`), as they are blocked locally by standard browser CORS policies.
* **Component-Driven**: Use the custom HTML elements provided under `framework/components/`. If you need a new visual component, build it inside `framework/components/` and register it globally on `window`.
* **Zero Accounts/Backend**: All progress is persisted locally via `localStorage`. Never add dependencies on backend servers.
* **Warm and Gentle Design**: Use the visual style variables in `framework/styles/main.css`. Avoid red failure colors, aggressive clocks/timers, or gambling/addiction mechanics (such as gems or constant popup rewards). Maintain a calm, encouraging learning environment.

---

## ⏱ How to Add a New Concept in 15 Minutes

1. **Copy the Template**: Duplicate the `examples/starter-html/child-template.html` file into a new concept folder, e.g., `concepts/00-number-sense/011-subitising-1-to-5/child.html`.
2. **Create the files**: Create the other required files in the folder: `concept.md`, `parent-guide.md`, `misconceptions.md`, `activities.md`, `test.json`, `questions.js`, and `tracking-schema.json`.
3. **Write the Questions**: Fill `questions.js` with your interactive challenge objects, ensuring each question specifies the correct `target` value.
4. **Author Parent Notes**: Write the simple parent guides in the corresponding files.
5. **Test locally**: Double-click `child.html` and run through the Practice and Test modes to ensure everything works offline.

---

## 📋 Required Files Checklist

Before submitting a Pull Request, ensure your concept directory contains exactly:
- [ ] `concept.md` (metadata)
- [ ] `parent-guide.md` (teaching guidance)
- [ ] `misconceptions.md` (mistake trap sheets)
- [ ] `activities.md` (physical play guides)
- [ ] `questions.js` (CORS-safe preloaded script questions)
- [ ] `test.json` (server-fallback JSON duplicate)
- [ ] `tracking-schema.json` (progress field schema)
- [ ] `child.html` (playable exercise canvas)

---

## 🎨 Content Quality Checklist

- **Pedagogy Alignment**: Content uses the CPA (Concrete-Pictorial-Abstract) progression.
- **Tone Check**: Encouraging, play-centric tone.
- **No Pressure**: Zero timers, clocks, or countdowns are used.
- **No Red Screens**: Incorrect answers do not show red overlays or sound buzzers; instead, they trigger a subtle shake animation and a helpful prompt.

---

## ♿ Accessibility Checklist

- **Touch Target Size**: Interactive components (grid cells, notches, circles, option buttons) are at least `48px x 48px` with clear padding.
- **Keyboard Access**: Users can select options and advance questions using the `Tab` and `Enter` keys.
- **ARIA Labels**: Visual components have descriptive alt/aria tags (e.g. `<ten-frame aria-label="Ten frame displaying 4 dots">`).
- **Contrast Compliance**: Main colors satisfy WCAG AA contrast ratios against backgrounds (checked via accessibility contrast tools).

---

## 📝 Pull Request Template

When opening a Pull Request, please copy and fill this description template:

```markdown
### Concept Title
[Concept Name]

### Checklist
- [ ] Added all 8 standard concept files.
- [ ] Tested offline via double-clicking `child.html` (`file://` path).
- [ ] Touch targets verified as >= 48px.
- [ ] No module-import CORS violations found.
- [ ] Verified local storage progress saves.
```

---

## Pull Request Process

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/concept-name`.
3. Implement your concept using the boilerplate in `examples/starter-html/child-template.html`.
4. Open the concept in multiple browsers locally (`file:///...`) to verify interactivity, responsive styling, and accessibility.
5. Submit a Pull Request describing your changes.
