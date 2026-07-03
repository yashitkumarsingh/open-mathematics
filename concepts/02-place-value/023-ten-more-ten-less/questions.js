window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "023-ten-more-ten-less",
  "parentGuide": {
    "en": {
      "concept": "Adding or subtracting 10 is equivalent to adding or removing 1 Ten rod. This changes the tens digit by 1 while keeping the ones digit identical (e.g. 15 + 10 = 25; 27 - 10 = 17). Teaching this pattern helps children bypass slow counting-by-ones.",
      "misconceptions": [
        "<strong>Changing the Ones place:</strong> Stating 14 + 10 = 20 or 25 by counting incorrectly or modifying the ones place.",
        "<strong>Counting on by ones:</strong> Starting at 17 and counting 18, 19... 27 to find 10 more."
      ],
      "activities": [
        "<strong>Magic Ten-Ruler Jump:</strong> Put a toy figure on 13. Have your child jump the figure forward directly to 23 (10 more). Practice backward jumps for 10 less.",
        "<strong>Flash and Add:</strong> Draw a number card (e.g. 28) and flip a +10 or -10 operational card. Have them shout the answer as fast as they can (e.g. 18)."
      ]
    },
    "es": {
      "concept": "Sumar o restar 10 equivale a agregar o quitar 1 barra de Decena. Esto cambia el dígito de las decenas en 1 mientras mantiene el de las unidades idéntico (p. ej., 15 + 10 = 25).",
      "misconceptions": [
        "<strong>Modificar las unidades:</strong> Pensar que sumar 10 cambia la cifra de las unidades."
      ],
      "activities": [
        "<strong>Saltos Mágicos de Diez:</strong> Coloca un muñeco en el 13 y hazlo saltar directamente al 23 para representar 10 más."
      ]
    },
    "hi": {
      "concept": "10 जोड़ना या घटाना 1 दहाई की छड़ जोड़ने या हटाने के बराबर है। यह दहाई के अंक को 1 से बदल देता है जबकि इकाई का अंक समान रहता है (जैसे 15 + 10 = 25)।",
      "misconceptions": [
        "<strong>इकाई स्थान को बदलना:</strong> 14 + 10 = 25 बताना क्योंकि वे इकाई अंक में गलती करते हैं।"
      ],
      "activities": [
        "<strong>जादू दहाई छलांग:</strong> संख्या रेखा पर खिलौने को 13 से सीधे 23 पर कूदने के लिए कहें।"
      ]
    }
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "prompt": {
        "en": "What is 10 more than 14? <br><br> 14 &nbsp;&nbsp; ➔ &nbsp;&nbsp; 10 more is... ?",
        "es": "¿Cuánto es 10 más que 14? <br><br> 14 &nbsp;&nbsp; ➔ &nbsp;&nbsp; 10 más es... ?",
        "hi": "14 से 10 अधिक क्या है? <br><br> 14 &nbsp;&nbsp; ➔ &nbsp;&nbsp; 10 अधिक है... ?"
      },
      "options": [
        {"label": "15", "value": 15},
        {"label": "24", "value": 24},
        {"label": "20", "value": 20}
      ],
      "target": 24,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q2",
      "type": "base-ten-blocks",
      "prompt": {
        "en": "The blocks show 15. Make 10 MORE than this number by adding blocks.",
        "es": "Los bloques muestran 15. Haz 10 MÁS que este número agregando bloques.",
        "hi": "ब्लॉक 15 दिखाते हैं। ब्लॉक जोड़कर इस संख्या से 10 अधिक बनाएं।"
      },
      "tens": 1,
      "ones": 5,
      "interactive": true,
      "target": 25,
      "hint": {
        "en": "Click '+10' once to add another Ten rod. 15 + 10 = 25.",
        "es": "Haz clic en '+10' una vez para agregar otra Decena. 15 + 10 = 25.",
        "hi": "दहाई छड़ जोड़ने के लिए '+10' पर एक बार क्लिक करें। 15 + 10 = 25।"
      },
      "mistakePatterns": {
        "16": "added_one_instead_of_ten",
        "15": "no_change",
        "26": "added_ten_and_one"
      }
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "prompt": {
        "en": "What is 10 less than 23? <br><br> 23 &nbsp;&nbsp; ➔ &nbsp;&nbsp; 10 less is... ?",
        "es": "¿Cuánto es 10 menos que 23? <br><br> 23 &nbsp;&nbsp; ➔ &nbsp;&nbsp; 10 menos es... ?",
        "hi": "23 से 10 कम क्या है? <br><br> 23 &nbsp;&nbsp; ➔ &nbsp;&nbsp; 10 कम है... ?"
      },
      "options": [
        {"label": "13", "value": 13},
        {"label": "22", "value": 22},
        {"label": "33", "value": 33}
      ],
      "target": 13,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q4",
      "type": "base-ten-blocks",
      "prompt": {
        "en": "The blocks show 27. Make 10 LESS than this number by removing blocks.",
        "es": "Los bloques muestran 27. Haz 10 MENOS que este número quitando bloques.",
        "hi": "ब्लॉक 27 दिखाते हैं। ब्लॉक हटाकर इस संख्या से 10 कम बनाएं।"
      },
      "tens": 2,
      "ones": 7,
      "interactive": true,
      "target": 17,
      "hint": {
        "en": "Click '-10' once to remove one Ten rod. 27 - 10 = 17.",
        "es": "Haz clic en '-10' una vez para quitar una Decena. 27 - 10 = 17.",
        "hi": "दहाई छड़ हटाने के लिए '-10' पर एक बार क्लिक करें। 27 - 10 = 17।"
      },
      "mistakePatterns": {
        "26": "removed_one_instead_of_ten",
        "27": "no_change",
        "16": "removed_ten_and_one"
      }
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "prompt": {
        "en": "What is 10 more than 8?",
        "es": "¿Cuánto es 10 más que 8?",
        "hi": "8 से 10 अधिक क्या है?"
      },
      "options": [
        {"label": "9", "value": 9},
        {"label": "10", "value": 10},
        {"label": "18", "value": 18}
      ],
      "target": 18,
      "mistakePattern": "incorrect_choice"
    }
  ]
};
