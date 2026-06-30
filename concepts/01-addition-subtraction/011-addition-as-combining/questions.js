window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "011-addition-as-combining",
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "prompt": {
        "en": "Combine 3 apples and 2 apples. How many do we have in total? <br><br> 🍎 🍎 🍎 &nbsp;&nbsp; + &nbsp;&nbsp; 🍎 🍎",
        "es": "Combina 3 manzanas y 2 manzanas. ¿Cuántas tenemos en total? <br><br> 🍎 🍎 🍎 &nbsp;&nbsp; + &nbsp;&nbsp; 🍎 🍎",
        "hi": "3 सेब और 2 सेब मिलाएं। हमारे पास कुल कितने सेब हैं? <br><br> 🍎 🍎 🍎 &nbsp;&nbsp; + &nbsp;&nbsp; 🍎 🍎"
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
      "id": "q2",
      "type": "ten-frame",
      "prompt": {
        "en": "Show 4 + 2 on the ten-frame below.",
        "es": "Muestra 4 + 2 en el marco de diez abajo.",
        "hi": "नीचे दिए गए दस-फ्रेम में 4 + 2 दिखाएं।"
      },
      "target": 6,
      "hint": {
        "en": "Fill 4 slots first, then add 2 more slots.",
        "es": "Llena 4 espacios primero, luego agrega 2 espacios más.",
        "hi": "पहले 4 स्लॉट भरें, फिर 2 और स्लॉट जोड़ें।"
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
        "en": "Combine 5 stars and 3 stars. How many do we have? <br><br> ⭐ ⭐ ⭐ ⭐ ⭐ &nbsp;&nbsp; + &nbsp;&nbsp; ⭐ ⭐ ⭐",
        "es": "Combina 5 estrellas y 3 estrellas. ¿Cuántas tenemos? <br><br> ⭐ ⭐ ⭐ ⭐ ⭐ &nbsp;&nbsp; + &nbsp;&nbsp; ⭐ ⭐ ⭐",
        "hi": "5 तारे और 3 तारे मिलाएं। हमारे पास कितने हैं? <br><br> ⭐ ⭐ ⭐ ⭐ ⭐ &nbsp;&nbsp; + &nbsp;&nbsp; ⭐ ⭐ ⭐"
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
      "type": "drag-counter",
      "prompt": {
        "en": "Combine groups. Drag items to make a total of 7 in the basket.",
        "es": "Combina grupos. Arrastra elementos para hacer un total de 7 en la cesta.",
        "hi": "समूहों को मिलाएं। टोकरी में कुल 7 बनाने के लिए वस्तुओं को खींचें।"
      },
      "target": 7,
      "itemType": "apple",
      "totalItems": 10,
      "hint": {
        "en": "Count up to 7 and check the basket counter.",
        "es": "Cuenta hasta 7 y revisa el contador de la cesta.",
        "hi": "7 तक गिनें और टोकरी काउंटर की जांच करें।"
      },
      "mistakePatterns": {
        "6": "undercounts",
        "8": "overcounts"
      }
    },
    {
      "id": "q5",
      "type": "ten-frame",
      "prompt": {
        "en": "Show 5 + 5 on the ten-frame below.",
        "es": "Muestra 5 + 5 en el marco de diez abajo.",
        "hi": "नीचे दिए गए दस-फ्रेम में 5 + 5 दिखाएं।"
      },
      "target": 10,
      "hint": {
        "en": "Fill the entire frame! A full frame is exactly 10.",
        "es": "¡Llena todo el marco! Un marco lleno es exactamente 10.",
        "hi": "पूरा फ्रेम भरें! एक पूरा फ्रेम ठीक 10 होता है।"
      },
      "mistakePatterns": {
        "9": "undercounts"
      }
    }
  ]
};
