window.OMF = window.OMF || {};
window.OMF.currentQuiz = {
  "conceptId": "022-comparing-two-digit-numbers",
  "parentGuide": {
    "en": {
      "concept": "When children compare numbers, they sometimes get confused by high digits in the ones place (e.g. thinking 19 is larger than 21). We teach them Tens Priority: always check the Tens column first! 2 tens (20) is always larger than 1 ten (10), no matter how many loose ones are left over. If the tens are the same, then we compare the ones.",
      "misconceptions": [
        "<strong>Ones Digit Bias:</strong> Choosing 19 over 21 because 9 is larger than 1 or 2.",
        "<strong>Symbol Confusion:</strong> Correctly identifying the larger number but writing the inequality symbol backward (e.g. 25 < 12)."
      ],
      "activities": [
        "<strong>Block Wars:</strong> Draw number cards (10 to 30). Build them using rods and blocks side-by-side. The larger build wins the round!",
        "<strong>The Crocodile Trap:</strong> Place treat counts (e.g. 14 vs 20) on paper. Use green spoons as a crocodile mouth pointing to the larger pile, and write the inequality."
      ]
    },
    "es": {
      "concept": "Al comparar números de dos dígitos, siempre debemos revisar primero la columna de las Decenas. 2 decenas (20) siempre representan más que 1 decena (10), sin importar cuántas unidades sueltas queden. Si las decenas son iguales, entonces comparamos las unidades.",
      "misconceptions": [
        "<strong>Sesgo de unidades:</strong> Elegir 19 en lugar de 21 porque 9 es mayor que 1 o 2."
      ],
      "activities": [
        "<strong>Batallas de Bloques:</strong> Escribe números en tarjetas, represéntalos con palitos y compara cuál es mayor."
      ]
    },
    "hi": {
      "concept": "दो-अंकीय संख्याओं की तुलना करते समय, हमें हमेशा पहले दहाई के अंक को देखना चाहिए। 2 दहाई (20) हमेशा 1 दहाई (10) से अधिक होती है, भले ही इकाई कितनी भी बड़ी हो। यदि दहाई के अंक समान हैं, तो हम इकाई की तुलना करते हैं।",
      "misconceptions": [
        "<strong>इकाई अंक पूर्वाग्रह:</strong> 21 के बजाय 19 को बड़ा चुनना क्योंकि 9 बड़ा है।"
      ],
      "activities": [
        "<strong>बंडल युद्ध:</strong> दो संख्याओं को तीलियों से बनाएं और दहाई के बंडलों की तुलना करें।"
      ]
    }
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "prompt": {
        "en": "Which group of blocks shows the LARGER value? <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>Group A (21)</strong><base-ten-blocks tens='2' ones='1'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>Group B (19)</strong><base-ten-blocks tens='1' ones='9'></base-ten-blocks></div> </div>",
        "es": "¿Qué grupo de bloques muestra el valor MAYOR? <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>Grupo A (21)</strong><base-ten-blocks tens='2' ones='1'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>Grupo B (19)</strong><base-ten-blocks tens='1' ones='9'></base-ten-blocks></div> </div>",
        "hi": "ब्लॉक का कौन सा समूह बड़ा मान दिखाता है? <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>समूह A (21)</strong><base-ten-blocks tens='2' ones='1'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>समूह B (19)</strong><base-ten-blocks tens='1' ones='9'></base-ten-blocks></div> </div>"
      },
      "options": [
        {"label": { "en": "Group A", "es": "Grupo A", "hi": "समूह A" }, "value": 1},
        {"label": { "en": "Group B", "es": "Grupo B", "hi": "समूह B" }, "value": 2}
      ],
      "target": 1,
      "mistakePattern": "ones_digit_bias"
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "prompt": {
        "en": "Compare the blocks. Choose the correct symbol: <br> <strong>13 &nbsp; [?] &nbsp; 13</strong> <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>A (13)</strong><base-ten-blocks tens='1' ones='3'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>B (13)</strong><base-ten-blocks tens='1' ones='3'></base-ten-blocks></div> </div>",
        "es": "Compara los bloques. Elige el símbolo correcto: <br> <strong>13 &nbsp; [?] &nbsp; 13</strong> <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>A (13)</strong><base-ten-blocks tens='1' ones='3'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>B (13)</strong><base-ten-blocks tens='1' ones='3'></base-ten-blocks></div> </div>",
        "hi": "ब्लॉकों की तुलना करें। सही प्रतीक चुनें: <br> <strong>13 &nbsp; [?] &nbsp; 13</strong> <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>A (13)</strong><base-ten-blocks tens='1' ones='3'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>B (13)</strong><base-ten-blocks tens='1' ones='3'></base-ten-blocks></div> </div>"
      },
      "options": [
        {"label": "<", "value": 1},
        {"label": "=", "value": 2},
        {"label": ">", "value": 3}
      ],
      "target": 2,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "prompt": {
        "en": "Which group of blocks shows the SMALLER value? <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>Group A (15)</strong><base-ten-blocks tens='1' ones='5'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>Group B (25)</strong><base-ten-blocks tens='2' ones='5'></base-ten-blocks></div> </div>",
        "es": "¿Qué grupo de bloques muestra el valor MENOR? <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>Grupo A (15)</strong><base-ten-blocks tens='1' ones='5'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>Grupo B (25)</strong><base-ten-blocks tens='2' ones='5'></base-ten-blocks></div> </div>",
        "hi": "ब्लॉक का कौन सा समूह छोटा मान दिखाता है? <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>समूह A (15)</strong><base-ten-blocks tens='1' ones='5'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>समूह B (25)</strong><base-ten-blocks tens='2' ones='5'></base-ten-blocks></div> </div>"
      },
      "options": [
        {"label": { "en": "Group A", "es": "Grupo A", "hi": "समूह A" }, "value": 1},
        {"label": { "en": "Group B", "es": "Grupo B", "hi": "समूह B" }, "value": 2}
      ],
      "target": 1,
      "mistakePattern": "incorrect_choice"
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "prompt": {
        "en": "Choose the correct symbol: <br> <strong>24 &nbsp; [?] &nbsp; 21</strong> <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>A (24)</strong><base-ten-blocks tens='2' ones='4'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>B (21)</strong><base-ten-blocks tens='2' ones='1'></base-ten-blocks></div> </div>",
        "es": "Elige el símbolo correcto: <br> <strong>24 &nbsp; [?] &nbsp; 21</strong> <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>A (24)</strong><base-ten-blocks tens='2' ones='4'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>B (21)</strong><base-ten-blocks tens='2' ones='1'></base-ten-blocks></div> </div>",
        "hi": "सही प्रतीक चुनें: <br> <strong>24 &nbsp; [?] &nbsp; 21</strong> <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>A (24)</strong><base-ten-blocks tens='2' ones='4'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>B (21)</strong><base-ten-blocks tens='2' ones='1'></base-ten-blocks></div> </div>"
      },
      "options": [
        {"label": "<", "value": 1},
        {"label": "=", "value": 2},
        {"label": ">", "value": 3}
      ],
      "target": 3,
      "mistakePattern": "symbol_confusion"
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "prompt": {
        "en": "Which group of blocks shows the LARGER value? <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>Group A (30)</strong><base-ten-blocks tens='3' ones='0'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>Group B (12)</strong><base-ten-blocks tens='1' ones='2'></base-ten-blocks></div> </div>",
        "es": "¿Qué grupo de bloques muestra el valor MAYOR? <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>Grupo A (30)</strong><base-ten-blocks tens='3' ones='0'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>Grupo B (12)</strong><base-ten-blocks tens='1' ones='2'></base-ten-blocks></div> </div>",
        "hi": "ब्लॉक का कौन सा समूह बड़ा मान दिखाता है? <br><br> <div style='display: flex; gap: 20px; justify-content: center; align-items: flex-end; margin-bottom: 12px;'> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>समूह A (30)</strong><base-ten-blocks tens='3' ones='0'></base-ten-blocks></div> <div style='text-align: center; border: 1.5px solid hsl(210, 20%, 85%); padding: 8px; border-radius: 8px; background: white;'><strong>समूह B (12)</strong><base-ten-blocks tens='1' ones='2'></base-ten-blocks></div> </div>"
      },
      "options": [
        {"label": { "en": "Group A", "es": "Grupo A", "hi": "समूह A" }, "value": 1},
        {"label": { "en": "Group B", "es": "Grupo B", "hi": "समूह B" }, "value": 2}
      ],
      "target": 1,
      "mistakePattern": "incorrect_choice"
    }
  ]
};
