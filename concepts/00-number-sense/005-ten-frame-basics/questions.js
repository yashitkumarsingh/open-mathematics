window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "005-ten-frame-basics",
  "parentGuide": {
  "en": {
    "concept": "A ten-frame is a 2-by-5 grid. It helps children recognize visual representations of numbers. A full top row is always exactly 5; a full frame is 10. This builds <strong>subitising</strong> (knowing counts instantly without counting one by one).",
    "misconceptions": [
      "<strong>Unstructured Placing:</strong> Putting counters in random slots (corners first). Guide them to fill left-to-right on the top row first.",
      "<strong>Blank Space Counting:</strong> Confusing empty boxes with counters. Guide them to count active orange circles only."
    ],
    "activities": [
      "<strong>Egg carton board:</strong> Cut an egg carton to 10 holes. Roll a die and have your child place matching marbles inside.",
      "<strong>Chalk grids:</strong> Draw a large 2x5 grid on the pavement. Call numbers and have them place toys in the slots."
    ]
  },
  "es": {
    "concept": "A ten-frame is a 2-by-5 grid. It helps children recognize visual representations of numbers. A full top row is always exactly 5; a full frame is 10. This builds <strong>subitising</strong> (knowing counts instantly without counting one by one).",
    "misconceptions": [
      "<strong>Unstructured Placing:</strong> Putting counters in random slots (corners first). Guide them to fill left-to-right on the top row first.",
      "<strong>Blank Space Counting:</strong> Confusing empty boxes with counters. Guide them to count active orange circles only."
    ],
    "activities": [
      "<strong>Egg carton board:</strong> Cut an egg carton to 10 holes. Roll a die and have your child place matching marbles inside.",
      "<strong>Chalk grids:</strong> Draw a large 2x5 grid on the pavement. Call numbers and have them place toys in the slots."
    ]
  },
  "hi": {
    "concept": "A ten-frame is a 2-by-5 grid. It helps children recognize visual representations of numbers. A full top row is always exactly 5; a full frame is 10. This builds <strong>subitising</strong> (knowing counts instantly without counting one by one).",
    "misconceptions": [
      "<strong>Unstructured Placing:</strong> Putting counters in random slots (corners first). Guide them to fill left-to-right on the top row first.",
      "<strong>Blank Space Counting:</strong> Confusing empty boxes with counters. Guide them to count active orange circles only."
    ],
    "activities": [
      "<strong>Egg carton board:</strong> Cut an egg carton to 10 holes. Roll a die and have your child place matching marbles inside.",
      "<strong>Chalk grids:</strong> Draw a large 2x5 grid on the pavement. Call numbers and have them place toys in the slots."
    ]
  }
},
  "questions": [
    {
      "id": "q1",
      "type": "ten-frame",
      "prompt": "Show 3 on the ten frame by clicking squares.",
      "start": 0,
      "target": 3,
      "hint": "Click 3 squares on the grid to add dots.",
      "mistakePatterns": {
        "2": "undercounts",
        "4": "overcounts"
      }
    },
    {
      "id": "q2",
      "type": "ten-frame",
      "prompt": "Show 5 on the ten frame.",
      "start": 0,
      "target": 5,
      "hint": "Try filling the whole top row!",
      "mistakePatterns": {
        "4": "undercounts",
        "6": "overcounts"
      }
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "prompt": "How many dots are in this ten frame? <br><br> (Top row is full, bottom row has 2 dots)",
      "options": [
        {"label": "5", "value": 5},
        {"label": "7", "value": 7},
        {"label": "8", "value": 8}
      ],
      "target": 7,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q4",
      "type": "ten-frame",
      "prompt": "Show 8 on the ten frame.",
      "start": 0,
      "target": 8,
      "hint": "Fill the top row (5) first, then add 3 more on the bottom row.",
      "mistakePatterns": {
        "7": "undercounts",
        "9": "overcounts"
      }
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "prompt": "How many empty spaces are left in a full ten frame?",
      "options": [
        {"label": "0 spaces", "value": 0},
        {"label": "1 space", "value": 1},
        {"label": "5 spaces", "value": 5}
      ],
      "target": 0,
      "mistakePattern": "incorrect_choice"
    }
  ]
};
