window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "024-expanded-form-tens",
  "parentGuide": {
    "en": {
      "concept": "Expanded form decomposes two-digit numbers into tens value and ones value (e.g. 34 = 30 + 4). It builds crucial place-value understanding for mental math.",
      "misconceptions": [
        "<strong>Digit vs Value:</strong> Writing 34 = 3 + 4 instead of 30 + 4. Remind children that 3 tens equals 30.",
        "<strong>Recombination Error:</strong> Writing 60 + 8 = 608 instead of 68."
      ],
      "activities": [
        "<strong>Straw Bundle Expansion:</strong> Lay out bundles of 10 and loose straws to represent 30 + 6 = 36.",
        "<strong>Missing Value Detective:</strong> Fill in missing terms like 45 = __ + 5."
      ]
    },
    "es": {
      "concept": "La forma desarrollada descompone números de dos dígitos en valor de decenas y unidades (ej. 34 = 30 + 4).",
      "misconceptions": [
        "<strong>Dígito vs Valor:</strong> Escribir 34 = 3 + 4 en lugar de 30 + 4."
      ],
      "activities": [
        "<strong>Expansión con Pajitas:</strong> Coloca paquetes de 10 y unidades para formar 30 + 6 = 36."
      ]
    },
    "hi": {
      "concept": "विस्तारित रूप दो-अंकीय संख्याओं को दहाई मान और इकाई मान में विभाजित करता है (जैसे 34 = 30 + 4)।",
      "misconceptions": [
        "<strong>अंक बनाम मान:</strong> 30 + 4 के बजाय 34 = 3 + 4 लिखना।"
      ],
      "activities": [
        "<strong>तीली बंडल विस्तार:</strong> 30 + 6 = 36 को दर्शाने के लिए 10 के बंडल और खुली तीलियाँ रखें।"
      ]
    }
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "prompt": {
        "en": "What is the expanded form of 34? <br><br> 3 tens + 4 ones",
        "es": "¿Cuál es la forma desarrollada de 34? <br><br> 3 decenas + 4 unidades",
        "hi": "34 का विस्तारित रूप क्या है? <br><br> 3 दहाई + 4 इकाई"
      },
      "options": [
        {"label": "3 + 4", "value": 7},
        {"label": "30 + 4", "value": 34},
        {"label": "30 + 40", "value": 70}
      ],
      "target": 34,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q2",
      "type": "base-ten-blocks",
      "prompt": {
        "en": "Build the blocks to show 50 + 6.",
        "es": "Construye los bloques para mostrar 50 + 6.",
        "hi": "50 + 6 दिखाने के लिए ब्लॉक बनाएं।"
      },
      "target": 56,
      "tens": 5,
      "ones": 6,
      "hint": {
        "en": "Set 5 tens rods (50) and 6 ones units (6).",
        "es": "Coloca 5 barras de decenas (50) y 6 unidades (6).",
        "hi": "5 दहाई छड़ें (50) और 6 इकाई ब्लॉक (6) सेट करें।"
      },
      "mistakePatterns": {
        "46": "undercounts",
        "66": "overcounts"
      }
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "prompt": {
        "en": "Combine the expanded form: What is 70 + 8?",
        "es": "Combina la forma desarrollada: ¿Cuánto es 70 + 8?",
        "hi": "विस्तारित रूप को मिलाएं: 70 + 8 क्या है?"
      },
      "options": [
        {"label": "78", "value": 78},
        {"label": "708", "value": 708},
        {"label": "87", "value": 87}
      ],
      "target": 78,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "prompt": {
        "en": "Fill in the missing part: 52 = 50 + ?",
        "es": "Rellena la parte que falta: 52 = 50 + ?",
        "hi": "छूटा हुआ भाग भरें: 52 = 50 + ?"
      },
      "options": [
        {"label": "2", "value": 2},
        {"label": "20", "value": 20},
        {"label": "5", "value": 5}
      ],
      "target": 2,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "prompt": {
        "en": "What is the expanded form of 89?",
        "es": "¿Cuál es la forma desarrollada de 89?",
        "hi": "89 का विस्तारित रूप क्या है?"
      },
      "options": [
        {"label": "8 + 9", "value": 17},
        {"label": "80 + 9", "value": 89},
        {"label": "90 + 8", "value": 98}
      ],
      "target": 89,
      "mistakePattern": "incorrect_choice"
    }
  ]
};
