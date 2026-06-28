---
name: "OMF Accessibility & Layout Tester"
description: "Instructions on testing OMF custom elements and child canvases for touch sizes, screen reader tags, and keyboard focus compliance"
---

# OMF Accessibility & Layout Tester

Use this skill to audit interactive lessons and parent dashboards for children's accessibility:

## 1. Touch Target Audits
Ensure all clickable or draggable items satisfy a minimum touch target size of `48px x 48px`:
- `<number-line>` selection circles and notches.
- `<ten-frame>` grid cells.
- `<drag-counter>` draggable items and basket target zones.
- MCQ button panels.

## 2. Keyboard & Focus Control
- Tab order must flow logically from top header elements, through the quiz prompt and custom interactive elements, to the "Check Answer" and "Tip" actions.
- Action buttons must respond to both `Space` and `Enter` key activations.
- Check that focus rings are visible on keyboard navigation to support motor-impaired children.

## 3. ARIA Compliance
Verify elements have explicit ARIA label descriptions:
- Ten-frame components should state how many counters are filled (e.g. `aria-label="Ten frame displaying 4 dots"`).
- Number lines should indicate the selected value or range bounds.
- Draggable objects must declare their status (e.g. `aria-grabbed="false"` or `aria-droptarget="true"`).
