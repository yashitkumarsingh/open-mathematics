window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "021-tens-and-ones",
  "parentGuide": {
    "en": {
      "concept": "Our number system is based on grouping by ten. Instead of counting 24 separate items, we group them into 2 bundles of ten and 4 leftover ones. The digit on the left (2) tells us how many bundles of ten we have, and the digit on the right (4) tells us the leftovers. We use base-ten rods (representing 10 blocks) and ones units (1 block) to make this visual.",
      "misconceptions": [
        "<strong>Digit Reversal:</strong> Writing the ones digit first (e.g. writing 32 when shown 2 tens and 3 ones).",
        "<strong>Counting rods as units of one:</strong> Counting rods and blocks all as single objects (e.g., stating 2 rods and 4 blocks equals 6 total)."
      ],
      "activities": [
        "<strong>Roll and Build:</strong> Draw Tens and Ones columns on a sheet. Have your child draw a number card (e.g. 25) and place 2 ten-bundles of straws and 5 single straws in the respective columns.",
        "<strong>The Ten-Bundle Race:</strong> Roll a die, add that many beans to the Ones column. When they reach 10 beans, bundle them into a cup and slide it to the Tens column. Reach 30 to win!"
      ]
    },
    "es": {
      "concept": "Nuestro sistema numérico se basa en agrupar de diez en diez. En lugar de contar 24 elementos por separado, los agrupamos en 2 paquetes de diez y 4 unidades sueltas. Usamos barras de decenas y bloques de unidades para hacer esto visible.",
      "misconceptions": [
        "<strong>Inversión de dígitos:</strong> Escribir el dígito de las unidades primero (p. ej., escribir 32 en lugar de 23)."
      ],
      "activities": [
        "<strong>Juego de Paquetes:</strong> Cuenta 10 pajitas y únelas con una banda elástica para formar decenas. Construye números usando los paquetes y pajitas sueltas."
      ]
    },
    "hi": {
      "concept": "हमारी संख्या प्रणाली दस के समूह बनाने पर आधारित है। 24 वस्तुओं को अलग-अलग गिनने के बजाय, हम उन्हें 10-10 के 2 बंडलों और 4 बची हुई इकाइयों में समूहित करते हैं। हम इसे दिखाने के लिए दहाई की छड़ें (10 ब्लॉक) और इकाई ब्लॉक (1 ब्लॉक) का उपयोग करते हैं।",
      "misconceptions": [
        "<strong>अंकों का उलटना:</strong> दहाई और इकाई के अंकों का स्थान बदलना (जैसे 23 के स्थान पर 32 लिखना)।"
      ],
      "activities": [
        "<strong>बंडल दौड़:</strong> पासा फेंकें, दहाई और इकाई के बंडल बनाकर 30 तक पहुँचने का प्रयास करें।"
      ]
    }
  },
  "questions": [
    {
      "id": "q1",
      "type": "base-ten-blocks",
      "prompt": {
        "en": "What number is shown by these base-ten blocks?",
        "es": "¿Qué número representan estos bloques multibase?",
        "hi": "इन ब्लॉक द्वारा कौन सी संख्या दिखाई गई है?"
      },
      "tens": 1,
      "ones": 4,
      "interactive": false,
      "target": 14,
      "hint": {
        "en": "Count the Ten rod as 10, then count on the Ones: 11, 12, 13, 14.",
        "es": "Cuenta la barra de decena como 10, luego las unidades: 11, 12, 13, 14.",
        "hi": "दहाई की छड़ को 10 गिनें, फिर इकाई गिनें: 11, 12, 13, 14।"
      }
    },
    {
      "id": "q2",
      "type": "base-ten-blocks",
      "prompt": {
        "en": "Represent the number 12 using blocks. Add 1 Ten and 2 Ones.",
        "es": "Representa el número 12 usando bloques. Agrega 1 Decena y 2 Unidades.",
        "hi": "ब्लॉक का उपयोग करके संख्या 12 का प्रतिनिधित्व करें। 1 दहाई और 2 इकाई जोड़ें।"
      },
      "tens": 0,
      "ones": 0,
      "interactive": true,
      "target": 12,
      "hint": {
        "en": "Click '+10' once to add a Ten rod, then click '+1' twice to add 2 Ones.",
        "es": "Haz clic en '+10' una vez para agregar una Decena, luego haz clic en '+1' dos veces.",
        "hi": "दहाई छड़ जोड़ने के लिए '+10' पर एक बार क्लिक करें, फिर 2 इकाई जोड़ने के लिए '+1' पर दो बार क्लिक करें।"
      },
      "mistakePatterns": {
        "21": "reversal",
        "2": "missed_ten",
        "3": "reversal_like"
      }
    },
    {
      "id": "q3",
      "type": "base-ten-blocks",
      "prompt": {
        "en": "What number is shown by these base-ten blocks?",
        "es": "¿Qué número representan estos bloques multibase?",
        "hi": "इन ब्लॉक द्वारा कौन सी संख्या दिखाई गई है?"
      },
      "tens": 2,
      "ones": 6,
      "interactive": false,
      "target": 26,
      "hint": {
        "en": "Count the tens first: 10, 20. Then count on the six ones: 21, 22, 23, 24, 25, 26.",
        "es": "Cuenta las decenas primero: 10, 20. Luego cuenta las seis unidades: 21, 22, 23, 24, 25, 26.",
        "hi": "पहले दहाई गिनें: 10, 20। फिर छह इकाई गिनें: 21, 22, 23, 24, 25, 26।"
      }
    },
    {
      "id": "q4",
      "type": "base-ten-blocks",
      "prompt": {
        "en": "Represent the number 25 using blocks. Add the correct number of Tens and Ones.",
        "es": "Representa el número 25 usando bloques. Agrega el número correcto de Decenas y Unidades.",
        "hi": "ब्लॉक का उपयोग करके संख्या 25 का प्रतिनिधित्व करें। सही दहाई और इकाई जोड़ें।"
      },
      "tens": 0,
      "ones": 0,
      "interactive": true,
      "target": 25,
      "hint": {
        "en": "You need 2 Ten rods (20) and 5 Ones blocks (5) to make 25.",
        "es": "Necesitas 2 Decenas (20) y 5 Unidades (5) para formar 25.",
        "hi": "25 बनाने के लिए आपको 2 दहाई छड़ (20) और 5 इकाई ब्लॉक (5) की आवश्यकता है।"
      },
      "mistakePatterns": {
        "52": "reversal",
        "7": "added_instead_of_place"
      }
    },
    {
      "id": "q5",
      "type": "base-ten-blocks",
      "prompt": {
        "en": "What number is shown by these base-ten blocks?",
        "es": "¿Qué número representan estos bloques?",
        "hi": "इन ब्लॉक द्वारा कौन सी संख्या दिखाई गई है?"
      },
      "tens": 3,
      "ones": 0,
      "interactive": false,
      "target": 30,
      "hint": {
        "en": "Count by tens: 10, 20, 30. There are no ones blocks.",
        "es": "Cuenta de diez en diez: 10, 20, 30. No hay unidades sueltas.",
        "hi": "दहाई गिनें: 10, 20, 30। यहाँ कोई इकाई ब्लॉक नहीं है।"
      }
    }
  ]
};
