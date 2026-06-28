# Authoring Guide: Adding a New Concept

This document explains how to add a new concept to the Open Mathematics Foundation framework.

---

## Step 1: Create a Concept Directory
Navigate to `concepts/[stage-folder]/` and create a slug directory, e.g., `005-ten-frame-basics/`.

---

## Step 2: Write the Documentation Files

### 1. `concept.md`
Define the metadata in a standard frontmatter block:
```markdown
---
id: "00-005"
title: "Ten Frame Basics"
stage: "00-number-sense"
age_group: "4-6"
prerequisites: ["00-001"]
learning_goals:
  - Understand the 5-structure of a ten-frame.
  - Understand the 10-structure of a ten-frame.
---
```

### 2. `parent-guide.md`
Provide clear prompts and everyday teaching instructions:
* **What it means**: Explain the mathematical idea in simple terms.
* **Why it matters**: Connecting this concept to future math skills.
* **Everyday items**: How to teach it with cereal, coins, blocks at home.
* **Questions to ask**: E.g., "How many empty spots are left?"

### 3. `misconceptions.md`
List common child thinking traps. E.g., "Counting spaces instead of dots" or "Confusing rows and columns".

### 4. `activities.md`
Provide 2–3 off-screen visual activities.

---

## Step 3: Write the Data & Activity Files

### 1. `test.json`
Create a question set that the `<quiz-runner>` component can process:
```json
{
  "conceptId": "00-005",
  "questions": [
    {
      "id": "q1",
      "type": "ten-frame",
      "prompt": "Show 6 on the ten frame.",
      "target": 6,
      "hint": "Try filling the whole top row (5) first, then add 1 more!"
    }
  ]
}
```

### 2. `child.html`
Create the child interactive page. Include our stylesheet and scripts, load the question data, and embed the custom elements:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ten Frame Basics</title>
  <link rel="stylesheet" href="../../framework/styles/main.css">
</head>
<body>
  <div class="activity-container">
    <h2>Ten Frame Basics</h2>
    <quiz-runner data-src="test.json"></quiz-runner>
  </div>

  <!-- Load OMF framework -->
  <script src="../../framework/engine/progress.js"></script>
  <script src="../../framework/engine/quiz-runner.js"></script>
  <script src="../../framework/components/ten-frame.js"></script>
</body>
</html>
```
