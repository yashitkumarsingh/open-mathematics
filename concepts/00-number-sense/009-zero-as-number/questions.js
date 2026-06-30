window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "009-zero-as-number",
  "parentGuide": {
  "en": {
    "concept": "Zero represents the count of an empty collection. It is more than just the word 'nothing'; it is the mathematical symbol '0' that denotes empty containers or sets. Children learn to identify this quantity and place it at the start of number lines.",
    "misconceptions": [
      "<strong>Action Bias:</strong> In interactive digital tasks (like dragging items into a basket), children often feel they must take action (e.g. dragging 1 or 2 items) rather than leaving the workspace empty for a count of 0.",
      "<strong>Skipping Zero:</strong> Omitting zero when reciting or writing down sequence bounds (e.g. writing number scales starting at 1)."
    ],
    "activities": [
      "<strong>Plate Matching:</strong> Get three plates. Put strawberries in two of them and leave the third plate empty. Match label notes containing '3', '1', and '0' to the plates.",
      "<strong>Disappearing Cups:</strong> Place 3 counters under a cup. Lift the cup, count them. Take them away one by one until none are left. Ask: 'How many are left under the cup? (Zero).'"
    ]
  },
  "es": {
    "concept": "Zero represents the count of an empty collection. It is more than just the word 'nothing'; it is the mathematical symbol '0' that denotes empty containers or sets. Children learn to identify this quantity and place it at the start of number lines.",
    "misconceptions": [
      "<strong>Action Bias:</strong> In interactive digital tasks (like dragging items into a basket), children often feel they must take action (e.g. dragging 1 or 2 items) rather than leaving the workspace empty for a count of 0.",
      "<strong>Skipping Zero:</strong> Omitting zero when reciting or writing down sequence bounds (e.g. writing number scales starting at 1)."
    ],
    "activities": [
      "<strong>Plate Matching:</strong> Get three plates. Put strawberries in two of them and leave the third plate empty. Match label notes containing '3', '1', and '0' to the plates.",
      "<strong>Disappearing Cups:</strong> Place 3 counters under a cup. Lift the cup, count them. Take them away one by one until none are left. Ask: 'How many are left under the cup? (Zero).'"
    ]
  },
  "hi": {
    "concept": "Zero represents the count of an empty collection. It is more than just the word 'nothing'; it is the mathematical symbol '0' that denotes empty containers or sets. Children learn to identify this quantity and place it at the start of number lines.",
    "misconceptions": [
      "<strong>Action Bias:</strong> In interactive digital tasks (like dragging items into a basket), children often feel they must take action (e.g. dragging 1 or 2 items) rather than leaving the workspace empty for a count of 0.",
      "<strong>Skipping Zero:</strong> Omitting zero when reciting or writing down sequence bounds (e.g. writing number scales starting at 1)."
    ],
    "activities": [
      "<strong>Plate Matching:</strong> Get three plates. Put strawberries in two of them and leave the third plate empty. Match label notes containing '3', '1', and '0' to the plates.",
      "<strong>Disappearing Cups:</strong> Place 3 counters under a cup. Lift the cup, count them. Take them away one by one until none are left. Ask: 'How many are left under the cup? (Zero).'"
    ]
  }
},
  "questions": [
    {
      "id": "q1",
      "type": "drag-counter",
      "prompt": "Put <strong>0</strong> apples in the basket.",
      "target": 0,
      "itemType": "apple",
      "totalItems": 5,
      "hint": "Zero means nothing. Leave the basket empty and click Check Answer!",
      "mistakePatterns": {
        "1": "overcounts",
        "2": "overcounts"
      }
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "prompt": "Which collection has <strong>zero</strong> items?",
      "options": [
        {"label": "🍒 (One)", "value": 1},
        {"label": "(Empty)", "value": 0},
        {"label": "🍒 🍒 (Two)", "value": 2}
      ],
      "target": 0,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q3",
      "type": "number-line",
      "prompt": "Find the number <strong>0</strong> on the number line.",
      "min": 0,
      "max": 5,
      "target": 0,
      "hint": "Zero is the very first number on the line, before 1.",
      "mistakePatterns": {
        "1": "after_target"
      }
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "prompt": "What number matches this empty set? <br><br> (There is nothing here)",
      "options": [
        {"label": "0", "value": 0},
        {"label": "1", "value": 1},
        {"label": "2", "value": 2}
      ],
      "target": 0,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q5",
      "type": "drag-counter",
      "prompt": "Put <strong>0</strong> balloons in the basket.",
      "target": 0,
      "itemType": "balloon",
      "totalItems": 4,
      "hint": "Leave it empty!",
      "mistakePatterns": {
        "1": "overcounts"
      }
    }
  ]
};
