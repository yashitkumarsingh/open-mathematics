window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "001-counting-0-to-10",
  "questions": [
    {
      "id": "q1",
      "type": "drag-counter",
      "prompt": {
        "en": "Put 3 apples into the basket.",
        "es": "Coloca 3 manzanas en la cesta.",
        "hi": "टोकरी में 3 सेब डालें।"
      },
      "target": 3,
      "itemType": "apple",
      "totalItems": 6,
      "hint": {
        "en": "Drag apples or tap them one by one until there are exactly 3 apples in the basket.",
        "es": "Arrastra las manzanas o tócalas una a una hasta que haya exactamente 3 en la cesta.",
        "hi": "सेबों को खींचें या एक-एक करके छुएं जब तक कि टोकरी में ठीक 3 सेब न हो जाएं।"
      },
      "mistakePatterns": {
        "2": "undercounts",
        "4": "overcounts"
      }
    },
    {
      "id": "q2",
      "type": "drag-counter",
      "prompt": {
        "en": "Put 6 stars into the basket.",
        "es": "Coloca 6 estrellas en la cesta.",
        "hi": "टोकरी में 6 तारे डालें।"
      },
      "target": 6,
      "itemType": "star",
      "totalItems": 8,
      "hint": {
        "en": "Count slowly: 1, 2, 3, 4, 5, 6.",
        "es": "Cuenta despacio: 1, 2, 3, 4, 5, 6.",
        "hi": "धीरे-धीरे गिनें: 1, 2, 3, 4, 5, 6।"
      },
      "mistakePatterns": {
        "5": "undercounts",
        "7": "overcounts"
      }
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "prompt": {
        "en": "How many cherries do you see below? <br><br> 🍒 🍒 🍒 🍒",
        "es": "¿Cuántas cerezas ves abajo? <br><br> 🍒 🍒 🍒 🍒",
        "hi": "आपको नीचे कितनी चेरी दिखाई दे रही हैं? <br><br> 🍒 🍒 🍒 🍒"
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
        "en": "Put 8 cars into the basket.",
        "es": "Coloca 8 coches en la cesta.",
        "hi": "टोकरी में 8 कारें डालें।"
      },
      "target": 8,
      "itemType": "car",
      "totalItems": 10,
      "hint": {
        "en": "Check the basket counter and stop when it shows 8.",
        "es": "Revisa el contador de la cesta y detente cuando muestre 8.",
        "hi": "टोकरी काउंटर की जांच करें और 8 दिखने पर रुकें।"
      },
      "mistakePatterns": {
        "7": "undercounts",
        "9": "overcounts"
      }
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "prompt": {
        "en": "How many balloons do you see? <br><br> 🎈 🎈 🎈 🎈 🎈 🎈 🎈",
        "es": "¿Cuántos globos ves? <br><br> 🎈 🎈 🎈 🎈 🎈 🎈 🎈",
        "hi": "आपको कितने गुब्बारे दिखाई दे रहे हैं? <br><br> 🎈 🎈 🎈 🎈 🎈 🎈 🎈"
      },
      "options": [
        {"label": "6", "value": 6},
        {"label": "7", "value": 7},
        {"label": "8", "value": 8}
      ],
      "target": 7,
      "mistakePattern": "incorrect_choice"
    }
  ]
};
