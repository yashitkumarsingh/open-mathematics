# Open Mathematics Foundation

An open-source mathematics foundation framework for children, parents, and educators.

This repository provides concept-by-concept mathematics learning from the primary level upward. Each concept includes a parent guide, visual explanation, interactive child-friendly HTML activity, gentle tests, and local progress tracking.

No ads. No accounts. No subscriptions. No backend required.

The goal is simple: make the foundations of mathematics understandable, playful, visual, and freely available to every child.

---

## 🎮 Try it now (Live Demos)

- **[Parent Progress Dashboard](https://yashitkumarsingh.github.io/open-mathematics/examples/parent-dashboard.html)**: Track completed lessons, review logged mistake patterns, and manage profiles.
- **[Concept 001: Counting 0 to 10](https://yashitkumarsingh.github.io/open-mathematics/concepts/00-number-sense/001-counting-0-to-10/child.html)**: Try the interactive apple basket drag counter.

---

## 🚀 Key Highlights

* **Offline-First & Serverless**: Runs directly under the `file://` protocol. Just double-click `child.html` or `parent-dashboard.html` to start.
* **Parent-Guided**: Explains not just *how* to solve a problem, but *why* it matters, common misconceptions, and hands-on off-screen activities.
* **Component-Based learning**: Lesson activities are built using native Web Components (e.g. `<ten-frame>`, `<number-line>`), keeping the code reusable and extensible.
* **Privacy-Respecting**: Progress tracks inside your browser's local storage. Export or import your progress as a simple JSON file.

---

## 📂 Repository Architecture

```txt
open-mathematics-foundation/
  curriculum/            # Curriculum standards alignments (Common Core, AU v9)
  concepts/              # Standardized mathematical concept modules
  framework/
    styles/              # Aesthetic styles (vanilla CSS guide)
    engine/              # Logic engines (progress tracker, quiz controller)
    components/          # Interactive custom elements
  examples/              # Starter templates & Local parent progress dashboards
  docs/                  # Pedagogical guides and documentation
```

---

## 🛠 Getting Started

### Play with a concept:
1. Open the [concepts/00-number-sense/001-counting-0-to-10/child.html](file:///Users/yashitkumarsingh/dev/open-mathematics/concepts/00-number-sense/001-counting-0-to-10/child.html) file directly in your web browser.
2. Complete questions in **Practice** or **Test** mode.
3. Scroll down or click the toggle at the bottom to view the **Parent Guide** containing off-screen games and common misconceptions.

### View the parent dashboard:
1. Open [examples/parent-dashboard.html](file:///Users/yashitkumarsingh/dev/open-mathematics/examples/parent-dashboard.html) in your browser.
2. View metrics, track completed cards, export your child's progress JSON, or upload a previously exported tracking file.

---

## 🤝 Contributing & License

We love contributions! Please read [CONTRIBUTING.md](file:///Users/yashitkumarsingh/dev/open-mathematics/CONTRIBUTING.md) to understand how to add new concept nodes.

- **Software Code**: [MIT License](file:///Users/yashitkumarsingh/dev/open-mathematics/LICENSE).
- **Educational Content**: [Creative Commons Attribution 4.0 (CC BY 4.0)](file:///Users/yashitkumarsingh/dev/open-mathematics/LICENSE).
