window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "016-stage-1-mastery-test",
  "parentGuide": {
    "en": {
      "concept": "The Stage 1 Mastery Test evaluates addition as combining, counting on, subtraction as taking away, number line hops, and fact families within 10.",
      "misconceptions": [
        "<strong>Sign Blindness:</strong> Remind children to check whether the question asks to add (+) or subtract (-).",
        "<strong>Number Line Off-By-One:</strong> Remind children to count the hop distance, not the starting mark."
      ],
      "activities": [
        "<strong>Stage 1 Board Game Relay:</strong> Solve cards to move a pawn forward along a 10-square track.",
        "<strong>Answer Bowl Sorting:</strong> Sort equation cards into 'Less than 5' vs '5 or More'."
      ]
    },
    "es": {
      "concept": "La Prueba de Maestría de la Etapa 1 evalúa la suma, el conteo hacia adelante, la resta y la recta numérica hasta 10.",
      "misconceptions": [
        "<strong>Ceguera de Signo:</strong> Recuerda comprobar si la pregunta pide sumar (+) o restar (-)."
      ],
      "activities": [
        "<strong>Juego de Tablero Etapa 1:</strong> Resuelve tarjetas para mover un peón por un camino de 10 casillas."
      ]
    },
    "hi": {
      "concept": "चरण 1 महारत परीक्षण 10 तक जोड़, आगे गिनती, घटाव और संख्या रेखा की समीक्षा करता है।",
      "misconceptions": [
        "<strong>चिह्न अनदेखी:</strong> बच्चों को यह जांचने की याद दिलाएं कि सवाल जोड़ (+) या घटाव (-) का है।"
      ],
      "activities": [
        "<strong>चरण 1 बोर्ड गेम रिले:</strong> 10-वर्ग ट्रैक पर एक गोट आगे बढ़ाने के लिए कार्ड हल करें।"
      ]
    }
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "prompt": {
        "en": "Combine 4 stars and 4 stars. What is 4 + 4? <br><br> ⭐ ⭐ ⭐ ⭐ &nbsp;&nbsp; + &nbsp;&nbsp; ⭐ ⭐ ⭐ ⭐",
        "es": "Combina 4 estrellas y 4 estrellas. ¿Cuánto es 4 + 4? <br><br> ⭐ ⭐ ⭐ ⭐ &nbsp;&nbsp; + &nbsp;&nbsp; ⭐ ⭐ ⭐ ⭐",
        "hi": "4 तारे और 4 तारे मिलाएं। 4 + 4 क्या है? <br><br> ⭐ ⭐ ⭐ ⭐ &nbsp;&nbsp; + &nbsp;&nbsp; ⭐ ⭐ ⭐ ⭐"
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
      "type": "ten-frame",
      "prompt": {
        "en": "Show 5 + 4 on the ten-frame below.",
        "es": "Muestra 5 + 4 en el marco de diez abajo.",
        "hi": "नीचे दिए गए दस-फ्रेम में 5 + 4 दिखाएं।"
      },
      "target": 9,
      "hint": {
        "en": "Fill 5 slots first, then add 4 more counters.",
        "es": "Llena 5 espacios primero, luego agrega 4 más.",
        "hi": "पहले 5 स्लॉट भरें, फिर 4 और जोड़ें।"
      },
      "mistakePatterns": {
        "8": "undercounts",
        "10": "overcounts"
      }
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "prompt": {
        "en": "Start with 8 apples. Take away 3. How many are left? <br><br> 🍎 🍎 🍎 🍎 🍎 <s>🍎</s> <s>🍎</s> <s>🍎</s>",
        "es": "Empieza con 8 manzanas. Quita 3. ¿Cuántas quedan? <br><br> 🍎 🍎 🍎 🍎 🍎 <s>🍎</s> <s>🍎</s> <s>🍎</s>",
        "hi": "8 सेबों से शुरुआत करें। 3 निकाल दें। कितने बचे हैं? <br><br> 🍎 🍎 🍎 🍎 🍎 <s>🍎</s> <s>🍎</s> <s>🍎</s>"
      },
      "options": [
        {"label": "4", "value": 4},
        {"label": "5", "value": 5},
        {"label": "6", "value": 6}
      ],
      "target": 5,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q4",
      "type": "number-line",
      "prompt": {
        "en": "Start at 9 on the number line and hop backward 3 steps. What is 9 - 3?",
        "es": "Empieza en el 9 y salta 3 pasos hacia atrás. ¿Cuánto es 9 - 3?",
        "hi": "संख्या रेखा पर 9 से शुरू करें और 3 कदम पीछे कूदें। 9 - 3 क्या है?"
      },
      "target": 6,
      "min": 0,
      "max": 10,
      "hint": {
        "en": "Start at 9 and count 3 steps to the left.",
        "es": "Empieza en el 9 y cuenta 3 pasos hacia la izquierda.",
        "hi": "9 से शुरू करें और बाईं ओर 3 कदम गिनें।"
      },
      "mistakePatterns": {
        "5": "undercounts",
        "7": "overcounts"
      }
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "prompt": {
        "en": "Which subtraction belongs to the fact family of 3 + 6 = 9?",
        "es": "¿Qué resta pertenece a la familia de 3 + 6 = 9?",
        "hi": "कौन सा घटाव 3 + 6 = 9 के परिवार से संबंधित है?"
      },
      "options": [
        {"label": "9 - 6 = 3", "value": 3},
        {"label": "9 - 2 = 7", "value": 7},
        {"label": "6 - 3 = 3", "value": 3}
      ],
      "target": 3,
      "mistakePattern": "incorrect_choice"
    }
  ]
};
