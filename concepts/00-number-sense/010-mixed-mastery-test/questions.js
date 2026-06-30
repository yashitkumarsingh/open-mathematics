window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "010-mixed-mastery-test",
  "parentGuide": {
  "en": {
    "concept": "This is a cumulative review that mixes various Stage 0 concepts (counting, ten-frames, number lines, comparison, number bonds). Solving mixed problems (interleaved practice) helps lock skills into long-term memory rather than just short-term recitation.",
    "misconceptions": [
      "<strong>Context Switch Friction:</strong> Young children might struggle initially when switching from counting apples to clicking numbers on a line. Give them time to read each prompt.",
      "<strong>Fatigue:</strong> A 10-question test is longer than average. Support your child, encourage them, and take breaks if they get tired. There are no timers."
    ],
    "activities": [
      "<strong>The Kitchen Decathlon:</strong> Set up 3 stations at a table. Station 1 asks them to count spoons, Station 2 asks them to split 5 beans into two parts, and Station 3 asks which bowl has more berries. Let them complete the circuit.",
      "<strong>Flash Cards Mix:</strong> Shuffle cards of various Stage 0 off-screen activities and play them in a random order."
    ]
  },
  "es": {
    "concept": "This is a cumulative review that mixes various Stage 0 concepts (counting, ten-frames, number lines, comparison, number bonds). Solving mixed problems (interleaved practice) helps lock skills into long-term memory rather than just short-term recitation.",
    "misconceptions": [
      "<strong>Context Switch Friction:</strong> Young children might struggle initially when switching from counting apples to clicking numbers on a line. Give them time to read each prompt.",
      "<strong>Fatigue:</strong> A 10-question test is longer than average. Support your child, encourage them, and take breaks if they get tired. There are no timers."
    ],
    "activities": [
      "<strong>The Kitchen Decathlon:</strong> Set up 3 stations at a table. Station 1 asks them to count spoons, Station 2 asks them to split 5 beans into two parts, and Station 3 asks which bowl has more berries. Let them complete the circuit.",
      "<strong>Flash Cards Mix:</strong> Shuffle cards of various Stage 0 off-screen activities and play them in a random order."
    ]
  },
  "hi": {
    "concept": "This is a cumulative review that mixes various Stage 0 concepts (counting, ten-frames, number lines, comparison, number bonds). Solving mixed problems (interleaved practice) helps lock skills into long-term memory rather than just short-term recitation.",
    "misconceptions": [
      "<strong>Context Switch Friction:</strong> Young children might struggle initially when switching from counting apples to clicking numbers on a line. Give them time to read each prompt.",
      "<strong>Fatigue:</strong> A 10-question test is longer than average. Support your child, encourage them, and take breaks if they get tired. There are no timers."
    ],
    "activities": [
      "<strong>The Kitchen Decathlon:</strong> Set up 3 stations at a table. Station 1 asks them to count spoons, Station 2 asks them to split 5 beans into two parts, and Station 3 asks which bowl has more berries. Let them complete the circuit.",
      "<strong>Flash Cards Mix:</strong> Shuffle cards of various Stage 0 off-screen activities and play them in a random order."
    ]
  }
},
  "questions": [
    {
      "id": "q1",
      "type": "drag-counter",
      "prompt": "Put 5 apples into the basket.",
      "target": 5,
      "itemType": "apple",
      "totalItems": 8,
      "hint": "Count up to 5, then click Check Answer."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "prompt": "Which collection has <strong>zero</strong> cherries?",
      "options": [
        {"label": "🍒", "value": 1},
        {"label": "(Empty)", "value": 0},
        {"label": "🍒 🍒 🍒", "value": 3}
      ],
      "target": 0,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q3",
      "type": "ten-frame",
      "prompt": "Show 6 on the ten frame.",
      "start": 0,
      "target": 6,
      "hint": "Fill the top row (5) first, then add 1 more."
    },
    {
      "id": "q4",
      "type": "number-line",
      "prompt": "Find the number <strong>8</strong> on the number line.",
      "min": 0,
      "max": 10,
      "target": 8,
      "hint": "Locate the number 8 card on the line."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "prompt": "Which number matches this collection? <br><br> ⭐ ⭐ ⭐ ⭐",
      "options": [
        {"label": "3", "value": 3},
        {"label": "4", "value": 4},
        {"label": "5", "value": 5}
      ],
      "target": 4,
      "mistakePattern": "incorrect_matching"
    },
    {
      "id": "q6",
      "type": "ten-frame",
      "prompt": "We want to make 5. We have 2 dots. Add more until you have 5.",
      "start": 2,
      "target": 5,
      "hint": "Add 3 more dots to fill the top row."
    },
    {
      "id": "q7",
      "type": "multiple-choice",
      "prompt": "Which group has MORE items?",
      "options": [
        {"label": "🎈 🎈 🎈 🎈 🎈 🎈", "value": 6},
        {"label": "🎈 🎈 🎈", "value": 3}
      ],
      "target": 6,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q8",
      "type": "drag-counter",
      "prompt": "Put 12 cherries into the basket.",
      "target": 12,
      "itemType": "cherry",
      "totalItems": 15,
      "hint": "Put 10 first, then count: 11, 12."
    },
    {
      "id": "q9",
      "type": "ten-frame",
      "prompt": "We want to make 10. We have 8 dots. Add more until you have 10.",
      "start": 8,
      "target": 10,
      "hint": "Fill the 2 empty squares left in the bottom row."
    },
    {
      "id": "q10",
      "type": "number-line",
      "prompt": "What number is between 2 and 4? Find it on the line.",
      "min": 0,
      "max": 10,
      "target": 3,
      "hint": "Look at the point right between 2 and 4."
    }
  ]
};
