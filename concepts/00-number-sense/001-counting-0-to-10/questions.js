window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "001-counting-0-to-10",
  "parentGuide": {
    "en": {
      "concept": "Counting is the ability to match each number name to exactly one object (one-to-one correspondence) and understand that the last number said represents the total size of the group (cardinality).",
      "misconceptions": [
        "<strong>Rushing:</strong> Saying numbers faster or slower than they touch/drag objects (e.g. reciting 1 to 5 while only moving 3 apples).",
        "<strong>Double Counting:</strong> Moving the same item twice or forgetting which items have already been dragged.",
        "<strong>Conservation:</strong> Thinking that rearrange-spreading the apples after counting them changes the count."
      ],
      "activities": [
        "<strong>Treasure Gather:</strong> Ask the child: 'Can you find and bring back 7 small stones or toys?' Count them together in a line.",
        "<strong>Movement Claps:</strong> 'Let's clap exactly 6 times!' Count claps rhythmically together.",
        "<strong>Extension Challenge:</strong> Put 5 spoons in a circle. Ask the child to count. Then scatter them across the counter and ask 'how many are there now?' to see if they understand that arrangement doesn't change quantity."
      ]
    },
    "es": {
      "concept": "Contar es la capacidad de hacer coincidir cada nombre numérico con exactamente un objeto (correspondencia uno a uno) y comprender que el último número dicho representa el tamaño total del grupo (cardinalidad).",
      "misconceptions": [
        "<strong>Apresurarse:</strong> Decir números más rápido o más lento de lo que tocan/arrastran objetos (p. ej., recitar del 1 al 5 mientras solo se mueven 3 manzanas).",
        "<strong>Contar dos veces:</strong> Mover el mismo elemento dos veces o olvidar qué elementos ya se han arrastrado.",
        "<strong>Conservación:</strong> Pensar que reorganizar y esparcir las manzanas después de contarlas cambia el conteo total."
      ],
      "activities": [
        "<strong>Reunir tesoros:</strong> Pregúntele al niño: '¿Puedes encontrar y traer 7 piedras o juguetes pequeños?' Cuéntenlos juntos en línea.",
        "<strong>Aplausos en movimiento:</strong> '¡Vamos a aplaudir exactamente 6 veces!' Cuenten los aplausos rítmicamente juntos.",
        "<strong>Reto de extensión:</strong> Coloque 5 cucharas en círculo. Pídale al niño que cuente. Luego, dispérselas por la mesa y pregúntele '¿cuántas hay ahora?' para ver si comprenden que la distribución no cambia la cantidad."
      ]
    },
    "hi": {
      "concept": "गिनना प्रत्येक संख्या नाम को ठीक एक वस्तु के साथ मिलाने की क्षमता है (एक-से-एक पत्राचार) और यह समझना कि कहा गया अंतिम संख्या पूरे समूह के आकार को दर्शाता है (संख्यात्मकता)।",
      "misconceptions": [
        "<strong>जल्दबाजी करना:</strong> वस्तुओं को छूने/खींचने की तुलना में तेजी से या धीमी गति से संख्या बोलना (उदा. 3 सेब को हिलाते समय केवल 1 से 5 का पाठ करना)।",
        "<strong>दोहरा गिनना:</strong> एक ही वस्तु को दो बार हिलाना या यह भूल जाना कि कौन सी वस्तुएं पहले ही खींची जा चुकी हैं।",
        "<strong>संख्या का संरक्षण:</strong> यह सोचना कि गिनने के बाद सेबों को फैलाने से गिनती बदल जाती है।"
      ],
      "activities": [
        "<strong>खजाना इकट्ठा करें:</strong> बच्चे से पूछें: 'क्या आप 7 छोटे पत्थर या खिलौने ढूंढकर ला सकते हैं?' उन्हें एक पंक्ति में साथ गिनें.",
        "<strong>तालियाँ बजाना:</strong> 'चलो ठीक 6 बार ताली बजाते हैं!' तालियों को लयबद्ध रूप से साथ गिनें.",
        "<strong>चम्मच चुनौती:</strong> 5 चम्मचों को एक घेरे में रखें। फिर उन्हें बिखेर दें और पूछें 'अब यहाँ कितनी हैं?' यह जांचने के लिए कि क्या वे समझते हैं कि व्यवस्था से मात्रा नहीं बदलती।"
      ]
    }
  },
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
