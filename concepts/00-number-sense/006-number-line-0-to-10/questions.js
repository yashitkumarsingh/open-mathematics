window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "006-number-line-0-to-10",
  "parentGuide": {
  "en": {
    "concept": "A number line represents numbers as locations along a straight path. It shows children that numbers have a fixed order, and that as they move to the right, values increase. This transitions children from counting objects (discontinuous quantities) to measuring length (continuous quantities).",
    "misconceptions": [
      "<strong>Line vs. Space:</strong> Counting the tick lines instead of the hop intervals (spaces). Guide them to make actual jump movements, only naming the number upon landing.",
      "<strong>Zero skip:</strong> Skipping the zero point and counting the first tick as 0. Help them see that the line starts at 0."
    ],
    "activities": [
      "<strong>Chalk hops:</strong> Draw a chalk line on the pavement from 0 to 10. Ask your child to stand at 0 and jump: 'Jump 3 hops! Where did you land?'",
      "<strong>Ruler bug crawls:</strong> Take a plastic bug or toy figure and walk it along a standard ruler, counting each centimeter mark together."
    ]
  },
  "es": {
    "concept": "A number line represents numbers as locations along a straight path. It shows children that numbers have a fixed order, and that as they move to the right, values increase. This transitions children from counting objects (discontinuous quantities) to measuring length (continuous quantities).",
    "misconceptions": [
      "<strong>Line vs. Space:</strong> Counting the tick lines instead of the hop intervals (spaces). Guide them to make actual jump movements, only naming the number upon landing.",
      "<strong>Zero skip:</strong> Skipping the zero point and counting the first tick as 0. Help them see that the line starts at 0."
    ],
    "activities": [
      "<strong>Chalk hops:</strong> Draw a chalk line on the pavement from 0 to 10. Ask your child to stand at 0 and jump: 'Jump 3 hops! Where did you land?'",
      "<strong>Ruler bug crawls:</strong> Take a plastic bug or toy figure and walk it along a standard ruler, counting each centimeter mark together."
    ]
  },
  "hi": {
    "concept": "A number line represents numbers as locations along a straight path. It shows children that numbers have a fixed order, and that as they move to the right, values increase. This transitions children from counting objects (discontinuous quantities) to measuring length (continuous quantities).",
    "misconceptions": [
      "<strong>Line vs. Space:</strong> Counting the tick lines instead of the hop intervals (spaces). Guide them to make actual jump movements, only naming the number upon landing.",
      "<strong>Zero skip:</strong> Skipping the zero point and counting the first tick as 0. Help them see that the line starts at 0."
    ],
    "activities": [
      "<strong>Chalk hops:</strong> Draw a chalk line on the pavement from 0 to 10. Ask your child to stand at 0 and jump: 'Jump 3 hops! Where did you land?'",
      "<strong>Ruler bug crawls:</strong> Take a plastic bug or toy figure and walk it along a standard ruler, counting each centimeter mark together."
    ]
  }
},
  "questions": [
    {
      "id": "q1",
      "type": "number-line",
      "prompt": "Find the number <strong>4</strong> on the number line.",
      "min": 0,
      "max": 10,
      "target": 4,
      "hint": "Count from 0 up to 4, then click that point.",
      "mistakePatterns": {
        "3": "before_target",
        "5": "after_target"
      }
    },
    {
      "id": "q2",
      "type": "number-line",
      "prompt": "Find the number <strong>7</strong> on the number line.",
      "min": 0,
      "max": 10,
      "target": 7,
      "hint": "It is one number before 8.",
      "mistakePatterns": {
        "6": "before_target",
        "8": "after_target"
      }
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "prompt": "Which number comes just <strong>before 3</strong>?",
      "options": [
        {"label": "1", "value": 1},
        {"label": "2", "value": 2},
        {"label": "4", "value": 4}
      ],
      "target": 2,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q4",
      "type": "number-line",
      "prompt": "What number is between 8 and 10? Find it on the line.",
      "min": 0,
      "max": 10,
      "target": 9,
      "hint": "Look at the empty spot right between 8 and 10.",
      "mistakePatterns": {
        "8": "before_target",
        "10": "after_target"
      }
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "prompt": "Which number comes just <strong>after 5</strong>?",
      "options": [
        {"label": "4", "value": 4},
        {"label": "6", "value": 6},
        {"label": "7", "value": 7}
      ],
      "target": 6,
      "mistakePattern": "incorrect_choice"
    }
  ]
};
