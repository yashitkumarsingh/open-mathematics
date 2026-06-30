window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "002-counting-10-to-20",
  "parentGuide": {
    "en": {
      "concept": "Counting to 20 builds on the foundation of single-digit numbers. Young children often find teen numbers difficult because their English names do not follow a simple pattern (e.g. 'eleven' instead of 'one-ten'). We teach them to view these numbers as a bundle of ten and some extra ones.",
      "misconceptions": [
        "<strong>Reversal:</strong> Reversing written digits (e.g. writing 51 for fifteen, or 21 for twelve) because they hear the second digit first.",
        "<strong>Teen vs. Ty Confusions:</strong> Confusing 'thirteen' with 'thirty' or 'fourteen' with 'forty'.",
        "<strong>Teen Sequences:</strong> Skittering or forgetting numbers in the 13–15 range when reciting."
      ],
      "activities": [
        "<strong>Bundling sticks:</strong> Count out 10 twigs or pencils, wrap a rubber band around them (the 'ten bundle'). Put 3 single sticks next to it and count: '10... 11, 12, 13!'",
        "<strong>Egg Carton Fill:</strong> Use a standard 12-hole egg carton. Place objects in all holes to represent 12, then add more outside to count to 15 or 18."
      ]
    },
    "es": {
      "concept": "Contar hasta 20 se basa en la base de los números de un solo dígito. Los niños pequeños a menudo encuentran difíciles los números del 11 al 19 porque sus nombres no siguen un patrón simple. Les enseñamos a ver estos números como un paquete de diez y algunas unidades adicionales.",
      "misconceptions": [
        "<strong>Inversión:</strong> Invertir los dígitos escritos (p. ej., escribir 51 por quince) porque escuchan el segundo dígito primero.",
        "<strong>Secuencias numéricas:</strong> Olvidar números en el rango de 13 a 15 al recitar."
      ],
      "activities": [
        "<strong>Paquetes de palitos:</strong> Cuenta 10 lápices y únelos con una banda elástica (el 'paquete de diez'). Pon 3 palitos sueltos al lado y cuenta: '10... 11, 12, 13'."
      ]
    },
    "hi": {
      "concept": "20 तक गिनती करना एक अंक की संख्याओं की नींव पर बनाया गया है। छोटे बच्चों को अक्सर 11 से 19 तक की संख्याओं को बोलने में कठिनाई होती है। हम उन्हें इन संख्याओं को दस के बंडल और कुछ अतिरिक्त इकाइयों के रूप में देखना सिखाते हैं।",
      "misconceptions": [
        "<strong>अंकों का उलटना:</strong> लिखे गए अंकों को उलटना (जैसे पंद्रह के लिए 51 लिखना)।"
      ],
      "activities": [
        "<strong>लकड़ी के बंडल:</strong> 10 तीलियों को गिनें और उनके चारों ओर एक रबर बैंड लपेटें (एक 'दस का बंडल')। इसके बगल में 3 तीलियाँ रखें और गिनें: '10... 11, 12, 13!'"
      ]
    }
  },
  "questions": [
    {
      "id": "q1",
      "type": "drag-counter",
      "prompt": "Put 12 cherries into the basket.",
      "target": 12,
      "itemType": "cherry",
      "totalItems": 15,
      "hint": "Put 10 in the basket first, then count on: 11, 12.",
      "mistakePatterns": {
        "11": "undercounts",
        "13": "overcounts"
      }
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "prompt": "How many stars do you see below? <br><br> ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ <br> ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐",
      "options": [
        {"label": "13", "value": 13},
        {"label": "14", "value": 14},
        {"label": "15", "value": 15}
      ],
      "target": 14,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q3",
      "type": "drag-counter",
      "prompt": "Put 15 apples into the basket.",
      "target": 15,
      "itemType": "apple",
      "totalItems": 18,
      "hint": "Drag apples or click them until the basket counter reaches 15.",
      "mistakePatterns": {
        "14": "undercounts",
        "16": "overcounts"
      }
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "prompt": "Count the cars: <br><br> 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 <br> 🚗 🚗 🚗 🚗 🚗 🚗 🚗",
      "options": [
        {"label": "16", "value": 16},
        {"label": "17", "value": 17},
        {"label": "18", "value": 18}
      ],
      "target": 17,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q5",
      "type": "drag-counter",
      "prompt": "Put 11 balloons into the basket.",
      "target": 11,
      "itemType": "balloon",
      "totalItems": 13,
      "hint": "One more than ten is eleven.",
      "mistakePatterns": {
        "10": "undercounts",
        "12": "overcounts"
      }
    }
  ]
};
