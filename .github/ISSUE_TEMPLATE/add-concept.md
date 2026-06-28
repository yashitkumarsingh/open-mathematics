---
name: "➕ Add New Concept"
about: "Propose or implement a new mathematical concept folder"
title: "concept: [Concept Name]"
labels: ["concept", "enhancement"]
assignees: []
---

### Concept Target
* **Concept Name**: E.g. Subitising 1 to 5
* **Stage & Target Level**: E.g. Stage 0: Number Sense (Foundation / Kindergarten)
* **Standard Map Code**: E.g. Common Core K.CC.B.4 or AC9MFN02

### Required Checklist
Please confirm you will implement or have implemented:
- [ ] `concept.md` (metadata)
- [ ] `parent-guide.md` (home teaching guides)
- [ ] `misconceptions.md` (common student trap diagnosis)
- [ ] `activities.md` (off-screen hands-on games)
- [ ] `questions.js` (CORS-safe quiz data)
- [ ] `test.json` (backup duplicate JSON file)
- [ ] `tracking-schema.json` (progress properties schema)
- [ ] `child.html` (interactive HTML page)

### UX Verification
- [ ] All touch target controls are at least 48px x 48px.
- [ ] Zero build/server CORS dependencies; loads file:// cleanly.
- [ ] Uses OMF custom elements where possible (<ten-frame>, <number-line>, <drag-counter>).
