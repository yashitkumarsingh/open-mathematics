---
name: "OMF Concept Authoring Helper"
description: "Guides the agent on creating valid, compliant OMF mathematical concept directories containing the 8 required files"
---

# OMF Concept Authoring Helper

When asked to create, modify, or extend a mathematical concept folder in the Open Mathematics Foundation repo, follow these guidelines:

## 1. Directory Checks
Ensure the concept folder is placed under the correct stage directory: `concepts/[stage-folder]/[concept-id-slug]/` (e.g. `concepts/00-number-sense/011-subitising-1-to-5/`).

## 2. File Template Guidelines
Generate exactly 8 files:

1. **`concept.md`**: Must contain YAML frontmatter:
   ```yaml
   ---
   id: "[stage-id]-[number]"
   title: "[Concept Title]"
   stage: "[stage-slug]"
   age_group: "[range]"
   prerequisites: ["[dep-ids]"]
   learning_goals:
     - [Goal 1]
   ---
   ```
2. **`parent-guide.md`**: Contains a 2-minute overview, 5-minute everyday activity, 10-minute extension challenge, parent observation guide, and "what not to do" list.
3. **`misconceptions.md`**: Outlines common student traps (e.g. density bias, counting ticks vs spaces) and exact parent verbal correction prompts.
4. **`activities.md`**: Outlines setup, materials, and steps for 2-3 physical, off-screen games.
5. **`questions.js`**: Sets `window.OMF.currentQuiz = { conceptId: "[id]", questions: [ ... ] }` containing interactive quiz data.
6. **`test.json`**: Duplicate JSON questions file for server-fallback modes.
7. **`tracking-schema.json`**: Describes tracking schemas for localStorage verification.
8. **`child.html`**: HTML canvas pre-loading `questions.js` before framework scripts and rendering the `<quiz-runner>`.

## 3. Validator Run
Always execute the validation suite after authoring files to verify syntax and formatting:
```bash
node scripts/validate-concepts.js
```
