window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "003-compare-more-less-equal",
  "parentGuide": {
    "en": {
      "concept": "This lesson introduces child comparisons: 'more', 'less' (fewer), and 'equal' (same). Before using math equations, children learn to match items one-to-one to check which set runs out of objects first.",
      "misconceptions": [
        "<strong>Density Bias:</strong> Thinking spread-out sets are larger than compact clusters of items.",
        "<strong>Language Gap:</strong> Struggling with the relative term 'fewer' compared to the intuitive term 'more'."
      ],
      "activities": [
        "<strong>Tower battles:</strong> Build one Lego tower of 5 bricks and another of 7. Compare heights and count the bricks to match quantity.",
        "<strong>Treat Splitter:</strong> Place 4 raisins on one plate and 6 on another. Ask the child: 'Which has fewer? How can we make them equal?'"
      ]
    },
    "es": {
      "concept": "Esta lección introduce comparaciones infantiles: 'más', 'menos' (menos) e 'igual' (mismo). Antes de usar ecuaciones matemáticas, los niños aprenden a emparejar elementos uno a uno para verificar qué conjunto se queda sin objetos primero.",
      "misconceptions": [
        "<strong>Sesgo de densidad:</strong> Pensar que los conjuntos dispersos son más grandes que los grupos compactos de elementos."
      ],
      "activities": [
        "<strong>Batallas de torres:</strong> Construye una torre Lego de 5 ladrillos y otra de 7. Compara las alturas."
      ]
    },
    "hi": {
      "concept": "यह पाठ बच्चों को 'अधिक', 'कम' (कम) और 'बराबर' (समान) की तुलना से परिचित कराता है। गणितीय समीकरणों का उपयोग करने से पहले, बच्चे यह जांचने के लिए वस्तुओं का एक-से-एक मिलान करना सीखते हैं कि कौन सा समूह पहले समाप्त होता है।",
      "misconceptions": [
        "None documented."
      ],
      "activities": [
        "None documented."
      ]
    }
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "prompt": "Which collection has MORE items?",
      "options": [
        {"label": "🍎 🍎 🍎", "value": 3},
        {"label": "🍎 🍎 🍎 🍎 🍎", "value": 5}
      ],
      "target": 5,
      "mistakePattern": "space_bias"
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "prompt": "Which collection has FEWER (less) items?",
      "options": [
        {"label": "🍒 🍒", "value": 2},
        {"label": "🍒 🍒 🍒 🍒 🍒 🍒", "value": 6}
      ],
      "target": 2,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "prompt": "Are these two groups EQUAL (the same)? <br><br> Group A: ⭐ ⭐ ⭐ <br> Group B: ⭐ ⭐ ⭐",
      "options": [
        {"label": "Yes, they are equal!", "value": 1},
        {"label": "No, they are different.", "value": 2}
      ],
      "target": 1,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "prompt": "Which group has MORE items?",
      "options": [
        {"label": "🚗 🚗 🚗 🚗 🚗 🚗 🚗", "value": 7},
        {"label": "🚗 🚗 🚗 🚗", "value": 4}
      ],
      "target": 7,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "prompt": "Are these two groups EQUAL? <br><br> Group A: 🎈 🎈 🎈 🎈 <br> Group B: 🎈 🎈 🎈",
      "options": [
        {"label": "Yes, they are equal!", "value": 1},
        {"label": "No, they are different.", "value": 2}
      ],
      "target": 2,
      "mistakePattern": "incorrect_choice"
    }
  ]
};
