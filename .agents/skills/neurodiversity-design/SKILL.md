---
name: "OMF Neurodiversity Design Guide"
description: "Guidelines and design principles for sensory accessibility, dyslexia-friendly structures, and multi-input mechanics to support neuro-divergent students"
---

# OMF Neurodiversity Design Guide

Ensure all math activities, code changes, and parent materials align with neurodiversity best practices:

## 1. Sensory Load Management
- **Colors**: Maintain soft, pastel, nature-inspired HSL values. Avoid stark neon panels, flashing overlays, or heavy contrast highlights that cause sensory fatigue in ASD/SPD students.
- **Auditory**: Zero autoplay sounds, bells, or loud buzzer noises for incorrect answers.
- **Animations**: Soft card-shivers on wrong answers and subtle spins on badges. No chaotic visual noise.

## 2. Cognitive Structuring
- **Voice Narration**: Ensure the Speak Prompt button (🔊) is present next to all question texts.
- **Dyscalculia Support**: Frame numbers visually around sets of **5** and **10** (e.g., using ten-frames). This supports instant subitising instead of requiring sequential counting.
- **Calm Pacing**: Strictly forbid countdown timers, speed trackers, or competitive streaks. 

## 3. Motor Coordination (Fine Motor / Dyspraxia)
- **Dual Inputs**: Every component containing draggable elements (e.g., `<drag-counter>`) must support tap-to-move clicks as a fallback for children who struggle with touchscreen dragging gestures.
- **Touch Target Padding**: Active elements must maintain a minimum target size of `48px x 48px`.

## 4. parent guidance
- Ensure the `parent-guide.md` and `misconceptions.md` files instruct parents on how to diagnose specific developmental mistake patterns (like spatial density bias or digits reverses) and apply correction scripts gently.
