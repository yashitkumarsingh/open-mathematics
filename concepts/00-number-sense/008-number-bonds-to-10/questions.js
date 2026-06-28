window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "008-number-bonds-to-10",
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
