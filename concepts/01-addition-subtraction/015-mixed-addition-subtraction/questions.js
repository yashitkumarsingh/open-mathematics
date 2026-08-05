window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "015-mixed-addition-subtraction",
  "parentGuide": {
    "en": {
      "concept": "Mixed addition and subtraction strengthens symbol discrimination (+ vs -) and introduces fact families showing how combining and taking away relate to each other.",
      "misconceptions": [
        "<strong>Sign Blindness:</strong> Forgetting to check whether the operation is addition (+) or subtraction (-).",
        "<strong>Isolated Facts:</strong> Treating 4 + 3 = 7 and 7 - 3 = 4 as unrelated instead of part of the same fact family."
      ],
      "activities": [
        "<strong>Domino Fact Family:</strong> Pick a domino and write out the 2 addition and 2 subtraction equations.",
        "<strong>Mystery Box Reversal:</strong> Show 4 items outside a box of 9 total to calculate the hidden amount."
      ]
    },
    "es": {
      "concept": "La práctica mixta de suma y resta fortalece la discriminación de símbolos (+ vs -) y las familias de operaciones.",
      "misconceptions": [
        "<strong>Ceguera de Signo:</strong> Olvidar comprobar si la operación es suma (+) o resta (-)."
      ],
      "activities": [
        "<strong>Familia con Dominó:</strong> Elige un dominó y escribe sus 2 sumas y 2 restas."
      ]
    },
    "hi": {
      "concept": "मिश्रित जोड़ और घटाव प्रतीकों (+ और -) की पहचान और संख्या परिवारों को मजबूत करता है।",
      "misconceptions": [
        "<strong>चिह्न अनदेखी:</strong> यह जांचना भूल जाना कि ऑपरेशन जोड़ (+) है या घटाव (-)।"
      ],
      "activities": [
        "<strong>डोमिनो संख्या परिवार:</strong> एक डोमिनो चुनें और इसके 2 जोड़ और 2 घटाव समीकरण लिखें।"
      ]
    }
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "prompt": {
        "en": "Check the sign carefully! What is 4 + 3? <br><br> 🍎 🍎 🍎 🍎 &nbsp;&nbsp; + &nbsp;&nbsp; 🍎 🍎 🍎",
        "es": "¡Revisa el signo con cuidado! ¿Cuánto es 4 + 3? <br><br> 🍎 🍎 🍎 🍎 &nbsp;&nbsp; + &nbsp;&nbsp; 🍎 🍎 🍎",
        "hi": "चिह्न ध्यान से देखें! 4 + 3 क्या है? <br><br> 🍎 🍎 🍎 🍎 &nbsp;&nbsp; + &nbsp;&nbsp; 🍎 🍎 🍎"
      },
      "options": [
        {"label": "1", "value": 1},
        {"label": "7", "value": 7},
        {"label": "8", "value": 8}
      ],
      "target": 7,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "prompt": {
        "en": "Check the sign carefully! What is 7 - 3? <br><br> 🍎 🍎 🍎 🍎 <s>🍎</s> <s>🍎</s> <s>🍎</s>",
        "es": "¡Revisa el signo con cuidado! ¿Cuánto es 7 - 3? <br><br> 🍎 🍎 🍎 🍎 <s>🍎</s> <s>🍎</s> <s>🍎</s>",
        "hi": "चिह्न ध्यान से देखें! 7 - 3 क्या है? <br><br> 🍎 🍎 🍎 🍎 <s>🍎</s> <s>🍎</s> <s>🍎</s>"
      },
      "options": [
        {"label": "4", "value": 4},
        {"label": "7", "value": 7},
        {"label": "10", "value": 10}
      ],
      "target": 4,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q3",
      "type": "ten-frame",
      "prompt": {
        "en": "Show 5 + 3 on the ten-frame below.",
        "es": "Muestra 5 + 3 en el marco de diez abajo.",
        "hi": "नीचे दिए गए दस-फ्रेम में 5 + 3 दिखाएं।"
      },
      "target": 8,
      "hint": {
        "en": "Fill 5 slots first, then add 3 more.",
        "es": "Llena 5 espacios primero, luego agrega 3 más.",
        "hi": "पहले 5 स्लॉट भरें, फिर 3 और जोड़ें।"
      },
      "mistakePatterns": {
        "7": "undercounts",
        "9": "overcounts"
      }
    },
    {
      "id": "q4",
      "type": "number-line",
      "prompt": {
        "en": "If 5 + 4 = 9, use the number line to solve 9 - 4.",
        "es": "Si 5 + 4 = 9, usa la recta numérica para resolver 9 - 4.",
        "hi": "यदि 5 + 4 = 9, तो 9 - 4 को हल करने के लिए संख्या रेखा का उपयोग करें।"
      },
      "target": 5,
      "min": 0,
      "max": 10,
      "hint": {
        "en": "Start at 9 and hop back 4 steps to find the fact family twin!",
        "es": "¡Empieza en el 9 y salta 4 pasos atrás!",
        "hi": "9 से शुरू करें और 4 कदम पीछे कूदें!"
      },
      "mistakePatterns": {
        "4": "undercounts",
        "6": "overcounts"
      }
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "prompt": {
        "en": "Which fact belongs to the same family as 6 + 2 = 8?",
        "es": "¿Qué resta pertenece a la misma familia que 6 + 2 = 8?",
        "hi": "कौन सा समीकरण 6 + 2 = 8 के समान परिवार का है?"
      },
      "options": [
        {"label": "8 - 2 = 6", "value": 6},
        {"label": "6 - 2 = 4", "value": 4},
        {"label": "8 + 2 = 10", "value": 10}
      ],
      "target": 6,
      "mistakePattern": "incorrect_choice"
    }
  ]
};
