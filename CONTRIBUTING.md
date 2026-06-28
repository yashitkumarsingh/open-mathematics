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

## Pull Request Process

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/concept-name`.
3. Implement your concept using the boilerplate in `examples/starter-html/child-template.html`.
4. Open the concept in multiple browsers locally (`file:///...`) to verify interactivity, responsive styling, and accessibility.
5. Submit a Pull Request describing your changes.
