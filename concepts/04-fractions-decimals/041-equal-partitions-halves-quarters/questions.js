window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "041-equal-partitions-halves-quarters",
  "parentGuide": {
    "en": {
      "concept": "Equal Partitions introduces halves (1/2), thirds (1/3), and quarters (1/4) as equal, fair shares of a shape or set.",
      "misconceptions": [
        "<strong>Ignoring Equal Size:</strong> Counting 4 unequal parts as quarters. Remind children that fraction parts must be fair and equal.",
        "<strong>Whole Number Bias:</strong> Thinking 1/4 is bigger than 1/2 because 4 > 2."
      ],
      "activities": [
        "<strong>Pizza Slicing Challenge:</strong> Cut paper pizzas into halves and quarters to compare slice sizes.",
        "<strong>Playdough Bakery:</strong> Slice playdough pancakes into equal parts."
      ]
    },
    "es": {
      "concept": "Particiones Iguales introduce mitades (1/2), tercios (1/3) y cuartos (1/4) como partes iguales.",
      "misconceptions": [
        "<strong>Ignorar el Tamaño Igual:</strong> Contar 4 partes desiguales como cuartos."
      ],
      "activities": [
        "<strong>Reto de la Pizza:</strong> Corta pizzas de papel en mitades y cuartos."
      ]
    },
    "hi": {
      "concept": "समान विभाजन आधे (1/2), तिहाई (1/3), और चौथाई (1/4) को निष्पक्ष भागों के रूप में पेश करता है।",
      "misconceptions": [
        "<strong>समान आकार को अनदेखा करना:</strong> 4 असमान भागों को चौथाई के रूप में गिनना।"
      ],
      "activities": [
        "<strong>पिज्जा स्लाइसिंग चैलेंज:</strong> टुकड़ों के आकार की तुलना करने के लिए पेपर पिज्जा को आधे और चौथाई में काटें।"
      ]
    }
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "prompt": {
        "en": "When a shape is split into 2 equal parts, what is each part called?",
        "es": "Cuando una figura se divide en 2 partes iguales, ¿cómo se llama cada parte?",
        "hi": "जब किसी आकृति को 2 बराबर भागों में बांटा जाता है, तो प्रत्येक भाग को क्या कहते हैं?"
      },
      "options": [
        {"label": "One Half (1/2)", "value": 2},
        {"label": "One Quarter (1/4)", "value": 4},
        {"label": "One Whole", "value": 1}
      ],
      "target": 2,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "prompt": {
        "en": "When a shape is split into 4 equal parts, what is each part called?",
        "es": "Cuando una figura se divide en 4 partes iguales, ¿cómo se llama cada parte?",
        "hi": "जब किसी आकृति को 4 बराबर भागों में बांटा जाता है, तो प्रत्येक भाग को क्या कहते हैं?"
      },
      "options": [
        {"label": "One Quarter / Fourth (1/4)", "value": 4},
        {"label": "One Half (1/2)", "value": 2},
        {"label": "One Third (1/3)", "value": 3}
      ],
      "target": 4,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "prompt": {
        "en": "Which slice is BIGGER when sharing one pizza?",
        "es": "¿Qué rebanada es MÁS GRANDE al compartir una pizza?",
        "hi": "एक पिज्जा साझा करते समय कौन सा टुकड़ा बड़ा होता है?"
      },
      "options": [
        {"label": "One Half (1/2)", "value": 2},
        {"label": "One Quarter (1/4)", "value": 4},
        {"label": "They are the same size", "value": 0}
      ],
      "target": 2,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "prompt": {
        "en": "How many quarters (1/4) make 1 whole pizza?",
        "es": "¿Cuántos cuartos (1/4) hacen 1 pizza entera?",
        "hi": "कितने चौथाई (1/4) मिलकर 1 पूरा पिज्जा बनाते हैं?"
      },
      "options": [
        {"label": "4 quarters", "value": 4},
        {"label": "2 quarters", "value": 2},
        {"label": "3 quarters", "value": 3}
      ],
      "target": 4,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "prompt": {
        "en": "If a shape is cut into 3 unequal slices, are the slices fractions?",
        "es": "Si una figura se corta en 3 rebanadas desiguales, ¿son las rebanadas fracciones?",
        "hi": "यदि किसी आकृति को 3 असमान टुकड़ों में काटा जाता है, तो क्या वे टुकड़े भिन्न (fractions) हैं?"
      },
      "options": [
        {"label": "No, because fractions must be EQUAL in size", "value": 0},
        {"label": "Yes, because there are 3 pieces", "value": 1}
      ],
      "target": 0,
      "mistakePattern": "incorrect_choice"
    }
  ]
};
