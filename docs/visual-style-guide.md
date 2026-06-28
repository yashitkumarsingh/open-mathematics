# Visual Style Guide

Our style guidelines ensure that activities are visually beautiful, highly engaging, and non-distracting for young children.

---

## 1. Palette & Theme (CSS Variables)

We avoid clinical designs and overly-bright neon themes. We use a calm, organic, pastel-shaded palette:

* **Background**: Soft off-white/cream (`#FAF8F5` or `hsl(36, 25%, 97%)`)
* **Primary (Brand)**: Earthy blue (`#4A6B82` or `hsl(205, 27%, 40%)`)
* **Success**: Soft forest green (`#4E8C68` or `hsl(145, 29%, 43%)`)
* **Highlight / Alert**: Warm amber (`#D98845` or `hsl(27, 67%, 56%)`)
* **Text Main**: Dark slate (`#2C363F` or `hsl(210, 17%, 21%)`)
* **Text Secondary**: Medium taupe (`#6E6B64` or `hsl(45, 5%, 41%)`)
* **Card Fills**: Pure white (`#FFFFFF`) with a soft shadow.

---

## 2. Typography

* **Fonts**: Prefer `Outfit`, `Quicksand`, or `Inter` from Google Fonts, falling back to clean system sans-serif fonts.
* **Size**: Large headings for young children (headings 24px–32px, text 18px–20px).

---

## 3. UI Layout & Accessibility

* **Touch Targets**: Minimum target sizing of `48px x 48px` to ensure children can easily click, tap, or drag items on mobile and tablet screens.
* **Layout Structure**:
  - Top: Header with title, progress indicator dots, and child nickname.
  - Middle: Main workspace (ten-frame, number line, or drag target).
  - Bottom: Interactive control bar and collapsible parent notes drawer.
* **Failure Responses**:
  - No red screens, sound alerts, or giant "X" indicators.
  - Incorrect inputs trigger a subtle horizontal shake animation and an encouraging visual hint.
