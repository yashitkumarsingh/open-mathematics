window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "012-counting-on",
  "parentGuide": {
    "en": {
      "concept": "Counting on is a strategy where children start at a given number (usually the larger one) and count forward to add another number. Utilizing a number line helps them visualize addition as taking intervals of steps forward.",
      "misconceptions": [
        "<strong>Counting the starting point:</strong> Starting at 4 and counting 4 as the first hop (e.g. '4, 5, 6' for 4 + 3) instead of counting the intervals ('5, 6, 7').",
        "<strong>Inefficient counting:</strong> Starting at the smaller number (e.g. starting at 2 and counting 8 hops for 2 + 8)."
      ],
      "activities": [
        "<strong>Chalk Path Hop:</strong> Draw a 0-10 path on the ground. Have your child stand on 5 and hop forward 3 times, counting each landing.",
        "<strong>Tape Measure Walks:</strong> Use a tape measure and a toy bug. Start at the larger number and count on to solve expressions."
      ]
    },
    "es": {
      "concept": "Contar hacia adelante es una estrategia donde el niño comienza en un número dado y cuenta hacia adelante para sumar. Usar una recta numérica ayuda a visualizar la suma como dar pasos hacia adelante.",
      "misconceptions": [
        "<strong>Contar el punto de partida:</strong> Comenzar en 4 y contar el 4 como el primer salto."
      ],
      "activities": [
        "<strong>Saltos de tiza:</strong> Dibuja una línea del 0 al 10 en el suelo. Pídele a tu hijo que se pare en el 5 y salte 3 veces."
      ]
    },
    "hi": {
      "concept": "आगे गिनना एक ऐसी रणनीति है जहां बच्चे एक दी गई संख्या से शुरू करते हैं और जोड़ने के लिए आगे गिनते हैं। संख्या रेखा का उपयोग करने से उन्हें जोड़ को कदम बढ़ाने के रूप में देखने में मदद मिलती है।",
      "misconceptions": [
        "<strong>प्रारंभिक बिंदु को गिनना:</strong> 4 से शुरू करके और 4 को ही पहला कदम गिनना।"
      ],
      "activities": [
        "<strong>चाक पथ कूद:</strong> फर्श पर 0-10 का पथ बनाएं। बच्चे को 5 पर खड़ा करें और 3 बार आगे कूदने के लिए कहें।"
      ]
    }
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "prompt": {
        "en": "Start at 5 and count on 3. What is the total? <br><br> 5 &nbsp;&nbsp; ➔ &nbsp;&nbsp; 6, &nbsp; 7, &nbsp; 8",
        "es": "Comienza en 5 y cuenta 3 más. ¿Cuál es el total? <br><br> 5 &nbsp;&nbsp; ➔ &nbsp;&nbsp; 6, &nbsp; 7, &nbsp; 8",
        "hi": "5 से शुरू करें और 3 आगे गिनें। कुल योग क्या है? <br><br> 5 &nbsp;&nbsp; ➔ &nbsp;&nbsp; 6, &nbsp; 7, &nbsp; 8"
      },
      "options": [
        {"label": "7", "value": 7},
        {"label": "8", "value": 8},
        {"label": "9", "value": 9}
      ],
      "target": 8,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q2",
      "type": "number-line",
      "prompt": {
        "en": "Show 4 + 3 on the number line. Start at 4 and take 3 hops forward.",
        "es": "Muestra 4 + 3 en la recta numérica. Comienza en 4 y da 3 saltos hacia adelante.",
        "hi": "संख्या रेखा पर 4 + 3 दिखाएं। 4 से शुरू करें और 3 कदम आगे बढ़ें।"
      },
      "min": 0,
      "max": 10,
      "target": 7,
      "hint": {
        "en": "Start at 4, then count 3 steps forward: 5, 6, 7.",
        "es": "Comienza en 4, luego cuenta 3 pasos adelante: 5, 6, 7.",
        "hi": "4 से शुरू करें, फिर 3 कदम आगे गिनें: 5, 6, 7।"
      },
      "mistakePatterns": {
        "6": "before_target",
        "8": "after_target"
      }
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "prompt": {
        "en": "Start at 6 and count on 2. What is 6 + 2?",
        "es": "Comienza en 6 y cuenta 2 más. ¿Cuánto es 6 + 2?",
        "hi": "6 से शुरू करें और 2 आगे गिनें। 6 + 2 क्या है?"
      },
      "options": [
        {"label": "7", "value": 7},
        {"label": "8", "value": 8},
        {"label": "9", "value": 9}
      ],
      "target": 8,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q4",
      "type": "number-line",
      "prompt": {
        "en": "Show 7 + 2 on the number line. Start at 7 and take 2 hops forward.",
        "es": "Muestra 7 + 2 en la recta numérica. Comienza en 7 y da 2 saltos hacia adelante.",
        "hi": "संख्या रेखा पर 7 + 2 दिखाएं। 7 से शुरू करें और 2 कदम आगे बढ़ें।"
      },
      "min": 0,
      "max": 10,
      "target": 9,
      "hint": {
        "en": "Hop twice from 7: 8, then 9.",
        "es": "Salta dos veces desde 7: 8, luego 9.",
        "hi": "7 से दो बार कूदें: 8, फिर 9।"
      },
      "mistakePatterns": {
        "8": "before_target",
        "10": "after_target"
      }
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "prompt": {
        "en": "Start at 8 and count on 2. What is 8 + 2?",
        "es": "Comienza en 8 y cuenta 2 más. ¿Cuánto es 8 + 2?",
        "hi": "8 से शुरू करें और 2 आगे गिनें। 8 + 2 क्या है?"
      },
      "options": [
        {"label": "9", "value": 9},
        {"label": "10", "value": 10},
        {"label": "11", "value": 11}
      ],
      "target": 10,
      "mistakePattern": "incorrect_choice"
    }
  ]
};
