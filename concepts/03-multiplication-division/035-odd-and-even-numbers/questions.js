window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "035-odd-and-even-numbers",
  "parentGuide": {
    "en": {
      "concept": "Even numbers pair up completely with no leftovers (ending in 0, 2, 4, 6, 8). Odd numbers leave 1 leftover item (ending in 1, 3, 5, 7, 9).",
      "misconceptions": [
        "<strong>Tens digit distraction:</strong> Looking at the tens place instead of the ones place.",
        "<strong>Zero confusion:</strong> Assuming 0 or 10 is not even."
      ],
      "activities": [
        "<strong>Sock Pair Detective:</strong> Match single socks in pairs to spot the odd one out.",
        "<strong>Flashcard Odd/Even Sorting Race:</strong> Sort numbers 1–30 into ODD and EVEN bins."
      ]
    },
    "es": {
      "concept": "Los números pares se emparejan completamente sin restos. Los números impares dejan 1 elemento sobrante.",
      "misconceptions": [
        "<strong>Distracción por las decenas:</strong> Mirar la cifra de las decenas en lugar de las unidades."
      ],
      "activities": [
        "<strong>Emparejar calcetines:</strong> Une calcetines en parejas para ver si falta alguno."
      ]
    },
    "hi": {
      "concept": "सम संख्याएँ बिना किसी शेष के 2-2 के जोड़ों में बनती हैं (0, 2, 4, 6, 8 पर समाप्त)। विषम संख्याएँ 1 शेष छोड़ती हैं (1, 3, 5, 7, 9 पर समाप्त)।",
      "misconceptions": [
        "<strong>दहाई के अंक का भ्रम:</strong> इकाई के स्थान के बजाय दहाई के स्थान को देखना।"
      ],
      "activities": [
        "<strong>मोज़े की जोड़ी:</strong> अकेले मोज़े को जोड़ों में मिलाकर विषम मोज़ा खोजें।"
      ]
    }
  },
  "questions": [
    {
      "id": "q1",
      "type": "drag-counter",
      "prompt": {
        "en": "Is 6 an Odd or Even number? Pair 6 stars into groups of 2.",
        "es": "¿El 6 es un número Par o Impar? Empareja 6 estrellas en grupos de 2.",
        "hi": "क्या 6 एक सम या विषम संख्या है? 6 तारों को 2-2 के समूहों में बाँटें।"
      },
      "groups": 3,
      "itemsPerGroup": 2,
      "target": 6,
      "hint": {
        "en": "6 divides into 3 pairs with 0 leftovers. 6 is EVEN!",
        "es": "El 6 se divide en 3 parejas sin sobrantes. ¡6 es PAR!",
        "hi": "6 बिना किसी शेष के 3 जोड़ों में विभाजित होता है। 6 सम है!"
      }
    },
    {
      "id": "q2",
      "type": "drag-counter",
      "prompt": {
        "en": "Pair 7 dots. There are 3 pairs and 1 leftover dot. Is 7 Odd or Even?",
        "es": "Empareja 7 puntos. Hay 3 parejas y 1 punto sobrante. ¿El 7 es Par o Impar?",
        "hi": "7 बिंदुओं के जोड़े बनाएं। 3 जोड़े और 1 बचा हुआ बिंदु है। क्या 7 सम या विषम है?"
      },
      "groups": 3,
      "itemsPerGroup": 2,
      "target": 7,
      "hint": {
        "en": "7 leaves 1 leftover dot. 7 is ODD!",
        "es": "El 7 deja 1 punto sobrante. ¡7 es IMPAR!",
        "hi": "7 में 1 बिंदु शेष रहता है। 7 विषम है!"
      }
    },
    {
      "id": "q3",
      "type": "number-line",
      "prompt": {
        "en": "Look at the ones digit of 14. Is 14 Odd or Even?",
        "es": "Mira el dígito de las unidades de 14. ¿El 14 es Par o Impar?",
        "hi": "14 के इकाई अंक को देखें। क्या 14 सम है या विषम?"
      },
      "min": 0,
      "max": 20,
      "step": 2,
      "start": 0,
      "target": 14,
      "hint": {
        "en": "14 ends in 4. Any number ending in 4 is EVEN!",
        "es": "El 14 termina en 4. ¡Cualquier número que termine en 4 es PAR!",
        "hi": "14 का अंत 4 पर होता है। 4 पर समाप्त होने वाली कोई भी संख्या सम होती है!"
      }
    },
    {
      "id": "q4",
      "type": "number-line",
      "prompt": {
        "en": "Look at the ones digit of 23. Is 23 Odd or Even?",
        "es": "Mira el dígito de las unidades de 23. ¿El 23 es Par o Impar?",
        "hi": "23 के इकाई अंक को देखें। क्या 23 सम है या विषम?"
      },
      "min": 0,
      "max": 30,
      "step": 1,
      "start": 0,
      "target": 23,
      "hint": {
        "en": "23 ends in 3. Numbers ending in 1, 3, 5, 7, 9 are ODD!",
        "es": "El 23 termina en 3. ¡Los números que terminan en 1, 3, 5, 7, 9 son IMPARES!",
        "hi": "23 का अंत 3 पर होता है। 1, 3, 5, 7, 9 पर समाप्त होने वाली संख्याएँ विषम होती हैं!"
      }
    },
    {
      "id": "q5",
      "type": "drag-counter",
      "prompt": {
        "en": "Pair 10 items into groups of 2. Is 10 Odd or Even?",
        "es": "Empareja 10 elementos en grupos de 2. ¿El 10 es Par o Impar?",
        "hi": "10 वस्तुओं के 2-2 के जोड़े बनाएं। क्या 10 सम है या विषम?"
      },
      "groups": 5,
      "itemsPerGroup": 2,
      "target": 10,
      "hint": {
        "en": "10 makes 5 exact pairs with 0 leftovers. 10 is EVEN!",
        "es": "El 10 forma 5 parejas exactas sin sobrantes. ¡10 es PAR!",
        "hi": "10 बिना किसी शेष के 5 सटीक जोड़े बनाता है। 10 सम है!"
      }
    }
  ]
};
