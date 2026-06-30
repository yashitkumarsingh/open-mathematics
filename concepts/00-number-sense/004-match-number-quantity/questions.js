window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "004-match-number-quantity",
  "parentGuide": {
  "en": {
    "concept": "This lesson bridges abstract written digits (the numerals 0–10) with physical counts. Many children can count verbally like a song, but struggle to understand that the visual shape '7' represents a collection of exactly seven objects.",
    "misconceptions": [
      "<strong>Shape Confusion:</strong> Misidentifying digits that look similar (like confusing 6 and 9, or writing 2 and 5 backwards).",
      "<strong>Disconnected Counts:</strong> Counting a set of 5 blocks correctly, but selecting a card that says '3' because they don't associate the count with the symbol."
    ],
    "activities": [
      "<strong>Numbered Parking:</strong> Draw parking spaces numbered 1 to 5. Have your child park the correct number of toy cars in each space.",
      "<strong>Snack Match:</strong> Place numeral cards (1 to 5) next to paper plates. Have your child place the matching number of grapes or crackers on each plate."
    ]
  },
  "es": {
    "concept": "This lesson bridges abstract written digits (the numerals 0–10) with physical counts. Many children can count verbally like a song, but struggle to understand that the visual shape '7' represents a collection of exactly seven objects.",
    "misconceptions": [
      "<strong>Shape Confusion:</strong> Misidentifying digits that look similar (like confusing 6 and 9, or writing 2 and 5 backwards).",
      "<strong>Disconnected Counts:</strong> Counting a set of 5 blocks correctly, but selecting a card that says '3' because they don't associate the count with the symbol."
    ],
    "activities": [
      "<strong>Numbered Parking:</strong> Draw parking spaces numbered 1 to 5. Have your child park the correct number of toy cars in each space.",
      "<strong>Snack Match:</strong> Place numeral cards (1 to 5) next to paper plates. Have your child place the matching number of grapes or crackers on each plate."
    ]
  },
  "hi": {
    "concept": "This lesson bridges abstract written digits (the numerals 0–10) with physical counts. Many children can count verbally like a song, but struggle to understand that the visual shape '7' represents a collection of exactly seven objects.",
    "misconceptions": [
      "<strong>Shape Confusion:</strong> Misidentifying digits that look similar (like confusing 6 and 9, or writing 2 and 5 backwards).",
      "<strong>Disconnected Counts:</strong> Counting a set of 5 blocks correctly, but selecting a card that says '3' because they don't associate the count with the symbol."
    ],
    "activities": [
      "<strong>Numbered Parking:</strong> Draw parking spaces numbered 1 to 5. Have your child park the correct number of toy cars in each space.",
      "<strong>Snack Match:</strong> Place numeral cards (1 to 5) next to paper plates. Have your child place the matching number of grapes or crackers on each plate."
    ]
  }
},
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "prompt": "Find the collection that matches the number: <strong>5</strong>",
      "options": [
        {"label": "🍒 🍒 🍒", "value": 3},
        {"label": "🍒 🍒 🍒 🍒 🍒", "value": 5},
        {"label": "🍒 🍒 🍒 🍒 🍒 🍒 🍒", "value": 7}
      ],
      "target": 5,
      "mistakePattern": "incorrect_matching"
    },
    {
      "id": "q2",
      "type": "drag-counter",
      "prompt": "Put the correct amount of apples to match the numeral: <strong>4</strong>",
      "target": 4,
      "itemType": "apple",
      "totalItems": 8,
      "hint": "Put 4 apples into the basket to match the number.",
      "mistakePatterns": {
        "3": "undercounts",
        "5": "overcounts"
      }
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "prompt": "Which number matches this collection? <br><br> 🎈 🎈 🎈 🎈 🎈 🎈",
      "options": [
        {"label": "5", "value": 5},
        {"label": "6", "value": 6},
        {"label": "7", "value": 7}
      ],
      "target": 6,
      "mistakePattern": "incorrect_matching"
    },
    {
      "id": "q4",
      "type": "drag-counter",
      "prompt": "Fill the basket to match the number: <strong>7</strong>",
      "target": 7,
      "itemType": "star",
      "totalItems": 10,
      "hint": "Drag stars until the basket has 7.",
      "mistakePatterns": {
        "6": "undercounts",
        "8": "overcounts"
      }
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "prompt": "Which number matches this collection? <br><br> 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗",
      "options": [
        {"label": "8", "value": 8},
        {"label": "9", "value": 9},
        {"label": "10", "value": 10}
      ],
      "target": 9,
      "mistakePattern": "incorrect_matching"
    }
  ]
};
