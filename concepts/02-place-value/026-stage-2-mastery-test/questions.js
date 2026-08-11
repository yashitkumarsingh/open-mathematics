window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "026-stage-2-mastery-test",
  "parentGuide": {
    "en": {
      "concept": "The Stage 2 Mastery Test evaluates place value, tens and ones, expanded form, number comparisons, ten-more/ten-less jumps, and hundreds up to 999.",
      "misconceptions": [
        "<strong>Right-to-Left Comparison:</strong> Remind children to compare the highest place value seat (leftmost digit) first.",
        "<strong>Zero Placeholder:</strong> Remind children that 0 holds the tens position open in numbers like 305."
      ],
      "activities": [
        "<strong>Place Value Race:</strong> Draw cards to make a 3-digit number and state its expanded form.",
        "<strong>Alligator Symbol Showdown:</strong> Compare numbers using > and < signs."
      ]
    },
    "es": {
      "concept": "La Prueba de Maestría de la Etapa 2 evalúa el valor de posición, decenas y unidades, forma desarrollada y centenas hasta 999.",
      "misconceptions": [
        "<strong>Comparación Izquierda a Derecha:</strong> Recuerda comparar primero el dígito de mayor valor."
      ],
      "activities": [
        "<strong>Carrera de Valor de Posición:</strong> Forma números de 3 dígitos y di su forma desarrollada."
      ]
    },
    "hi": {
      "concept": "चरण 2 महारत परीक्षण स्थान मान, दहाई और इकाई, विस्तारित रूप और 999 तक सैकड़े का मूल्यांकन करता है।",
      "misconceptions": [
        "<strong>बाएं से दाएं तुलना:</strong> बच्चों को सबसे पहले सबसे बड़े स्थान मान अंक की तुलना करने की याद दिलाएं।"
      ],
      "activities": [
        "<strong>स्थान मान रेस:</strong> 3-अंकीय संख्या बनाएं और उसका विस्तारित रूप बताएं।"
      ]
    }
  },
  "questions": [
    {
      "id": "q1",
      "type": "base-ten-blocks",
      "prompt": {
        "en": "Build blocks to show 3 tens and 5 ones.",
        "es": "Construye bloques para mostrar 3 decenas y 5 unidades.",
        "hi": "3 दहाई और 5 इकाई दिखाने के लिए ब्लॉक बनाएं।"
      },
      "target": 35,
      "tens": 3,
      "ones": 5,
      "hint": {
        "en": "Set 3 tens rods and 5 ones units.",
        "es": "Coloca 3 barras de decenas y 5 unidades.",
        "hi": "3 दहाई छड़ें और 5 इकाई ब्लॉक सेट करें।"
      },
      "mistakePatterns": {
        "25": "undercounts",
        "45": "overcounts"
      }
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "prompt": {
        "en": "Which comparison symbol correctly completes: 64 &nbsp; ? &nbsp; 46",
        "es": "¿Qué símbolo de comparación completa correctamente: 64 &nbsp; ? &nbsp; 46",
        "hi": "कौन सा तुलना चिह्न सही ढंग से पूरा करता है: 64 &nbsp; ? &nbsp; 46"
      },
      "options": [
        {"label": "> (Greater than)", "value": 1},
        {"label": "< (Less than)", "value": -1},
        {"label": "= (Equal to)", "value": 0}
      ],
      "target": 1,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "prompt": {
        "en": "What is 10 more than 58?",
        "es": "¿Cuánto es 10 más que 58?",
        "hi": "58 से 10 अधिक क्या है?"
      },
      "options": [
        {"label": "68", "value": 68},
        {"label": "59", "value": 59},
        {"label": "48", "value": 48}
      ],
      "target": 68,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "prompt": {
        "en": "What is the expanded form of 74?",
        "es": "¿Cuál es la forma desarrollada de 74?",
        "hi": "74 का विस्तारित रूप क्या है?"
      },
      "options": [
        {"label": "70 + 4", "value": 74},
        {"label": "7 + 4", "value": 11},
        {"label": "70 + 40", "value": 110}
      ],
      "target": 74,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "prompt": {
        "en": "What number is 3 Hundreds + 0 Tens + 9 Ones?",
        "es": "¿Qué número es 3 Centenas + 0 Decenas + 9 Unidades?",
        "hi": "3 सैकड़ा + 0 दहाई + 9 इकाई कौन सी संख्या है?"
      },
      "options": [
        {"label": "309", "value": 309},
        {"label": "39", "value": 39},
        {"label": "390", "value": 390}
      ],
      "target": 309,
      "mistakePattern": "incorrect_choice"
    }
  ]
};
