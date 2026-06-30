window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "008-number-bonds-to-10",
  "parentGuide": {
  "en": {
    "concept": "Number bonds to 10 are pairs of numbers that combine to make exactly 10 (e.g. 8+2, 7+3). Spotting these combinations is a critical skill for mental math, enabling strategies like 'make-a-ten' when adding larger numbers later (e.g., adding 8+6 is seen as 8+2+4).",
    "misconceptions": [
      "<strong>Missing Addend Confusion:</strong> Confusing the target sum (10) with the added part. They hear 'make 10' and represent 10 instead of the missing portion.",
      "<strong>Bridging Five:</strong> Finding it harder to calculate pairs when both numbers are not visualised together. A ten-frame makes the missing part visible immediately as empty squares."
    ],
    "activities": [
      "<strong>Clothes Hanger Pegs:</strong> Clip 10 pegs on a coat hanger. Slide them into two groups (e.g., 6 and 4) to visually prove they make 10.",
      "<strong>Ten Fingers:</strong> Hold up 10 fingers. Bend down 3 fingers. Ask: 'How many are standing? (7) How many are bent? (3) So 7 and 3 make 10!'"
    ]
  },
  "es": {
    "concept": "Number bonds to 10 are pairs of numbers that combine to make exactly 10 (e.g. 8+2, 7+3). Spotting these combinations is a critical skill for mental math, enabling strategies like 'make-a-ten' when adding larger numbers later (e.g., adding 8+6 is seen as 8+2+4).",
    "misconceptions": [
      "<strong>Missing Addend Confusion:</strong> Confusing the target sum (10) with the added part. They hear 'make 10' and represent 10 instead of the missing portion.",
      "<strong>Bridging Five:</strong> Finding it harder to calculate pairs when both numbers are not visualised together. A ten-frame makes the missing part visible immediately as empty squares."
    ],
    "activities": [
      "<strong>Clothes Hanger Pegs:</strong> Clip 10 pegs on a coat hanger. Slide them into two groups (e.g., 6 and 4) to visually prove they make 10.",
      "<strong>Ten Fingers:</strong> Hold up 10 fingers. Bend down 3 fingers. Ask: 'How many are standing? (7) How many are bent? (3) So 7 and 3 make 10!'"
    ]
  },
  "hi": {
    "concept": "Number bonds to 10 are pairs of numbers that combine to make exactly 10 (e.g. 8+2, 7+3). Spotting these combinations is a critical skill for mental math, enabling strategies like 'make-a-ten' when adding larger numbers later (e.g., adding 8+6 is seen as 8+2+4).",
    "misconceptions": [
      "<strong>Missing Addend Confusion:</strong> Confusing the target sum (10) with the added part. They hear 'make 10' and represent 10 instead of the missing portion.",
      "<strong>Bridging Five:</strong> Finding it harder to calculate pairs when both numbers are not visualised together. A ten-frame makes the missing part visible immediately as empty squares."
    ],
    "activities": [
      "<strong>Clothes Hanger Pegs:</strong> Clip 10 pegs on a coat hanger. Slide them into two groups (e.g., 6 and 4) to visually prove they make 10.",
      "<strong>Ten Fingers:</strong> Hold up 10 fingers. Bend down 3 fingers. Ask: 'How many are standing? (7) How many are bent? (3) So 7 and 3 make 10!'"
    ]
  }
},
  "questions": [
    {
      "id": "q1",
      "type": "ten-frame",
      "prompt": "Make <strong>10</strong>. We have 7 dots. Click to add more dots until the frame is full.",
      "start": 7,
      "target": 10,
      "hint": "Count the empty squares in the frame. Click them to add dots.",
      "mistakePatterns": {
        "7": "part_confusion",
        "9": "undercounts"
      }
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "prompt": "If you have 8 cherries, how many more do you need to make 10?",
      "options": [
        {"label": "2 cherries", "value": 2},
        {"label": "3 cherries", "value": 3},
        {"label": "10 cherries", "value": 10}
      ],
      "target": 2,
      "mistakePattern": "part_confusion"
    },
    {
      "id": "q3",
      "type": "ten-frame",
      "prompt": "Make <strong>10</strong>. We have 6 dots. Click to add the missing dots.",
      "start": 6,
      "target": 10,
      "hint": "Since 6 is 5 and 1, we need to fill the rest of the bottom row (4 spaces).",
      "mistakePatterns": {
        "8": "undercounts",
        "6": "part_confusion"
      }
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "prompt": "Fill in the blank: <br><br> <strong>5</strong> and ___ make 10.",
      "options": [
        {"label": "4", "value": 4},
        {"label": "5", "value": 5},
        {"label": "6", "value": 6}
      ],
      "target": 5,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q5",
      "type": "ten-frame",
      "prompt": "Make <strong>10</strong>. We have 9 dots. Add the last dot to fill the frame.",
      "start": 9,
      "target": 10,
      "hint": "Only 1 empty square remains.",
      "mistakePatterns": {
        "9": "part_confusion"
      }
    }
  ]
};
