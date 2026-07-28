window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "013-subtraction-as-taking-away",
  "parentGuide": {
    "en": {
      "concept": "Subtraction as taking away is removing a part from a whole collection to find the remaining amount. Using visual counters and ten-frames helps children visualize items disappearing.",
      "misconceptions": [
        "<strong>Counting Removed Items:</strong> Counting the items taken away instead of the remaining set. Remind them to check what is still in the box/frame.",
        "<strong>Order Confusion:</strong> Assuming order does not matter in subtraction. Always start with the total group."
      ],
      "activities": [
        "<strong>Snack Take-Away:</strong> Place 6 crackers on a plate. Eat 2 and ask how many remain.",
        "<strong>Bowling Knockdown:</strong> Set up 6 cups, knock down 2 with a ball, and count how many remain standing."
      ]
    },
    "es": {
      "concept": "La resta como quitar consiste en quitar una parte de una colección entera para encontrar la cantidad restante.",
      "misconceptions": [
        "<strong>Contar elementos quitados:</strong> Contar los elementos eliminados en lugar del conjunto restante."
      ],
      "activities": [
        "<strong>Merienda Quitar:</strong> Coloca 6 galletas en un plato. Come 2 y pregunta cuántas quedan."
      ]
    },
    "hi": {
      "concept": "घटाव का अर्थ है किसी समूह में से कुछ वस्तुओं को हटाकर बची हुई संख्या ज्ञात करना।",
      "misconceptions": [
        "<strong>हटाई गई वस्तुओं को गिनना:</strong> बची हुई वस्तुओं के बजाय हटाई गई वस्तुओं को गिनना।"
      ],
      "activities": [
        "<strong>बिस्कुट घटाना:</strong> एक प्लेट में 6 बिस्कुट रखें। 2 खाएं और पूछें कि कितने बचे हैं।"
      ]
    }
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "prompt": {
        "en": "Start with 5 apples. Take away 2. How many are left? <br><br> 🍎 🍎 🍎 <s>🍎</s> <s>🍎</s>",
        "es": "Empieza con 5 manzanas. Quita 2. ¿Cuántas quedan? <br><br> 🍎 🍎 🍎 <s>🍎</s> <s>🍎</s>",
        "hi": "5 सेबों से शुरुआत करें। 2 निकाल दें। कितने बचे हैं? <br><br> 🍎 🍎 🍎 <s>🍎</s> <s>🍎</s>"
      },
      "options": [
        {"label": "2", "value": 2},
        {"label": "3", "value": 3},
        {"label": "4", "value": 4}
      ],
      "target": 3,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q2",
      "type": "ten-frame",
      "prompt": {
        "en": "Show 6 - 2 on the ten-frame below by leaving 4 counters.",
        "es": "Muestra 6 - 2 en el marco de diez dejando 4 fichas.",
        "hi": "4 काउंटर छोड़कर नीचे दस-फ्रेम में 6 - 2 दिखाएं।"
      },
      "target": 4,
      "hint": {
        "en": "Start with 6 counters and clear 2 slots to leave 4.",
        "es": "Empieza con 6 fichas y borra 2 para dejar 4.",
        "hi": "6 काउंटरों से शुरू करें और 4 छोड़ने के लिए 2 खाली करें।"
      },
      "mistakePatterns": {
        "3": "undercounts",
        "5": "overcounts"
      }
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "prompt": {
        "en": "There were 7 birds on a tree. 3 flew away. How many birds remain? <br><br> 7 - 3 = ?",
        "es": "Había 7 pájaros en un árbol. 3 se volaron. ¿Cuántos pájaros quedan? <br><br> 7 - 3 = ?",
        "hi": "एक पेड़ पर 7 पक्षी थे। 3 उड़ गए। कितने पक्षी बचे हैं? <br><br> 7 - 3 = ?"
      },
      "options": [
        {"label": "3", "value": 3},
        {"label": "4", "value": 4},
        {"label": "5", "value": 5}
      ],
      "target": 4,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q4",
      "type": "drag-counter",
      "prompt": {
        "en": "Drag counters to leave exactly 5 items in the basket (starting from 8).",
        "es": "Arrastra fichas para dejar exactamente 5 elementos en la cesta.",
        "hi": "टोकरी में ठीक 5 वस्तुएं छोड़ने के लिए काउंटर खींचें।"
      },
      "target": 5,
      "itemType": "apple",
      "totalItems": 10,
      "hint": {
        "en": "Count until there are 5 apples inside the basket.",
        "es": "Cuenta hasta que haya 5 manzanas dentro de la cesta.",
        "hi": "टोकरी में 5 सेब होने तक गिनें।"
      },
      "mistakePatterns": {
        "4": "undercounts",
        "6": "overcounts"
      }
    },
    {
      "id": "q5",
      "type": "ten-frame",
      "prompt": {
        "en": "Show 10 - 4 on the ten-frame below.",
        "es": "Muestra 10 - 4 en el marco de diez abajo.",
        "hi": "नीचे दिए गए दस-फ्रेम में 10 - 4 दिखाएं।"
      },
      "target": 6,
      "hint": {
        "en": "A full top row of 5 plus 1 more counter makes 6!",
        "es": "¡Una fila superior llena de 5 más 1 ficha más hace 6!",
        "hi": "5 की एक पूरी शीर्ष पंक्ति और 1 अधिक काउंटर 6 बनाता है!"
      },
      "mistakePatterns": {
        "5": "undercounts",
        "7": "overcounts"
      }
    }
  ]
};
