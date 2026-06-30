window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "007-number-bonds-to-5",
  "parentGuide": {
  "en": {
    "concept": "Number bonds show how a whole number splits into smaller parts. For the number 5, the core splits are: 5+0, 4+1, and 3+2. Knowing these by heart helps children add and subtract mentally without counting individual items on their fingers.",
    "misconceptions": [
      "<strong>Part vs. Whole Confusion:</strong> Handed 3 dots and asked: 'How many more to make 5?', the child counts out 5 more, confusing the target sum with the added part.",
      "<strong>Lack of Visual Anchors:</strong> Rote reciting '2 and 3 is 5' without understanding how two-color groupings partition 5."
    ],
    "activities": [
      "<strong>The Fist Game:</strong> Hide 5 beans between your two hands. Open one hand to show 3. Ask: 'How many are hidden in the other hand to make 5?'",
      "<strong>Divided Plate:</strong> Draw a line down the middle of a paper plate. Split 5 pretzels or carrot slices into two sides (e.g. 4 on one side, 1 on the other) and count them."
    ]
  },
  "es": {
    "concept": "Number bonds show how a whole number splits into smaller parts. For the number 5, the core splits are: 5+0, 4+1, and 3+2. Knowing these by heart helps children add and subtract mentally without counting individual items on their fingers.",
    "misconceptions": [
      "<strong>Part vs. Whole Confusion:</strong> Handed 3 dots and asked: 'How many more to make 5?', the child counts out 5 more, confusing the target sum with the added part.",
      "<strong>Lack of Visual Anchors:</strong> Rote reciting '2 and 3 is 5' without understanding how two-color groupings partition 5."
    ],
    "activities": [
      "<strong>The Fist Game:</strong> Hide 5 beans between your two hands. Open one hand to show 3. Ask: 'How many are hidden in the other hand to make 5?'",
      "<strong>Divided Plate:</strong> Draw a line down the middle of a paper plate. Split 5 pretzels or carrot slices into two sides (e.g. 4 on one side, 1 on the other) and count them."
    ]
  },
  "hi": {
    "concept": "Number bonds show how a whole number splits into smaller parts. For the number 5, the core splits are: 5+0, 4+1, and 3+2. Knowing these by heart helps children add and subtract mentally without counting individual items on their fingers.",
    "misconceptions": [
      "<strong>Part vs. Whole Confusion:</strong> Handed 3 dots and asked: 'How many more to make 5?', the child counts out 5 more, confusing the target sum with the added part.",
      "<strong>Lack of Visual Anchors:</strong> Rote reciting '2 and 3 is 5' without understanding how two-color groupings partition 5."
    ],
    "activities": [
      "<strong>The Fist Game:</strong> Hide 5 beans between your two hands. Open one hand to show 3. Ask: 'How many are hidden in the other hand to make 5?'",
      "<strong>Divided Plate:</strong> Draw a line down the middle of a paper plate. Split 5 pretzels or carrot slices into two sides (e.g. 4 on one side, 1 on the other) and count them."
    ]
  }
},
  "questions": [
    {
      "id": "q1",
      "type": "ten-frame",
      "prompt": "We want to make <strong>5</strong>. We have 3 dots. Click to add more dots until you have 5.",
      "start": 3,
      "target": 5,
      "hint": "Count on from 3: click once for 4, and click again for 5. How many did you add?",
      "mistakePatterns": {
        "3": "part_confusion",
        "4": "undercounts"
      }
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "prompt": "If you have 4 apples, how many more do you need to make 5?",
      "options": [
        {"label": "1 apple", "value": 1},
        {"label": "2 apples", "value": 2},
        {"label": "5 apples", "value": 5}
      ],
      "target": 1,
      "mistakePattern": "part_confusion"
    },
    {
      "id": "q3",
      "type": "ten-frame",
      "prompt": "Make <strong>5</strong> on the ten frame. We have 2 dots already.",
      "start": 2,
      "target": 5,
      "hint": "Add dots until the whole top row of the frame is full.",
      "mistakePatterns": {
        "4": "undercounts",
        "2": "part_confusion"
      }
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "prompt": "Fill in the blank: <br><br> <strong>3</strong> and ___ make 5.",
      "options": [
        {"label": "1", "value": 1},
        {"label": "2", "value": 2},
        {"label": "3", "value": 3}
      ],
      "target": 2,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q5",
      "type": "ten-frame",
      "prompt": "Make <strong>5</strong>. We have 4 dots already. Click to add the last one.",
      "start": 4,
      "target": 5,
      "hint": "Just one more empty square on the top row needs a dot.",
      "mistakePatterns": {
        "4": "part_confusion"
      }
    }
  ]
};
