// Open Mathematics Foundation - Central Curriculum Manifest
(function() {
  window.OMF = window.OMF || {};

  const STAGE_0_CONCEPTS = [
    { id: "001-counting-0-to-10", title: { en: "Counting 0 to 10", es: "Contar del 0 al 10", hi: "0 से 10 तक गिनती" }, path: "../concepts/00-number-sense/001-counting-0-to-10/child.html" },
    { id: "002-counting-10-to-20", title: { en: "Counting 10 to 20", es: "Contar del 10 al 20", hi: "10 से 20 तक गिनती" }, path: "../concepts/00-number-sense/002-counting-10-to-20/child.html" },
    { id: "003-compare-more-less-equal", title: { en: "More, Less, Equal", es: "Más, Menos, Igual", hi: "अधिक, कम, बराबर" }, path: "../concepts/00-number-sense/003-compare-more-less-equal/child.html" },
    { id: "004-match-number-quantity", title: { en: "Number & Quantity", es: "Número y Cantidad", hi: "संख्या और मात्रा" }, path: "../concepts/00-number-sense/004-match-number-quantity/child.html" },
    { id: "005-ten-frame-basics", title: { en: "Ten Frame Basics", es: "Conceptos Básicos de Marcos de 10", hi: "दस-फ्रेम बुनियादी बातें" }, path: "../concepts/00-number-sense/005-ten-frame-basics/child.html" },
    { id: "006-number-line-0-to-10", title: { en: "Number Line 0 to 10", es: "Recta Numérica del 0 al 10", hi: "संख्या रेखा 0 से 10" }, path: "../concepts/00-number-sense/006-number-line-0-to-10/child.html" },
    { id: "007-number-bonds-to-5", title: { en: "Number Bonds to 5", es: "Combinaciones Numéricas hasta 5", hi: "संख्या जोड़ 5 तक" }, path: "../concepts/00-number-sense/007-number-bonds-to-5/child.html" },
    { id: "008-number-bonds-to-10", title: { en: "Number Bonds to 10", es: "Combinaciones Numéricas hasta 10", hi: "संख्या जोड़ 10 तक" }, path: "../concepts/00-number-sense/008-number-bonds-to-10/child.html" },
    { id: "009-zero-as-number", title: { en: "Understanding Zero", es: "Comprender el Cero", hi: "शून्य को समझना" }, path: "../concepts/00-number-sense/009-zero-as-number/child.html" },
    { id: "010-mixed-mastery-test", title: { en: "Mixed Mastery Test", es: "Prueba de Maestría Mixta", hi: "मिश्रित महारत परीक्षण" }, path: "../concepts/00-number-sense/010-mixed-mastery-test/child.html" }
  ];

  const STAGE_1_CONCEPTS = [
    { id: "011-addition-as-combining", title: { en: "Addition as Combining", es: "Suma como Combinación", hi: "जोड़ का अर्थ संयोजन" }, path: "../concepts/01-addition-subtraction/011-addition-as-combining/child.html" },
    { id: "012-counting-on", title: { en: "Counting On", es: "Contar hacia Adelante", hi: "आगे गिनती" }, path: "../concepts/01-addition-subtraction/012-counting-on/child.html" }
  ];

  const STAGE_2_CONCEPTS = [
    { id: "021-tens-and-ones", title: { en: "Tens and Ones", es: "Decenas y Unidades", hi: "दहाई और इकाई" }, path: "../concepts/02-place-value/021-tens-and-ones/child.html" },
    { id: "022-comparing-two-digit-numbers", title: { en: "Comparing Numbers", es: "Comparar Números", hi: "संख्याओं की तुलना" }, path: "../concepts/02-place-value/022-comparing-two-digit-numbers/child.html" },
    { id: "023-ten-more-ten-less", title: { en: "Ten More, Ten Less", es: "Diez Más, Diez Menos", hi: "दस अधिक, दस कम" }, path: "../concepts/02-place-value/023-ten-more-ten-less/child.html" }
  ];

  const STAGE_CONCEPTS = STAGE_0_CONCEPTS.concat(STAGE_1_CONCEPTS).concat(STAGE_2_CONCEPTS);

  const manifestActivities = {
    "001-counting-0-to-10": {
      en: "Treasure Gather: Ask the child to find 7 stones or toys and count them in a line.",
      es: "Reunir tesoros: Pídele al niño que encuentre 7 piedras o juguetes y los cuente en línea.",
      hi: "खजाना इकट्ठा करना: बच्चे से 7 पत्थर या खिलौने ढूंढने और उन्हें एक पंक्ति में गिनने के लिए कहें।"
    },
    "002-counting-10-to-20": {
      en: "Bundling sticks: Count out 10 twigs and tie a rubber band around them to represent a ten-bundle.",
      es: "Paquetes de palitos: Cuenta 10 lápices y únelos con una banda elástica para representar las decenas.",
      hi: "तीली के बंडल: 10 तीलियों को गिनें और उन्हें दहाई बंडल के रूप में बांधें।"
    },
    "003-compare-more-less-equal": {
      en: "Tower battles: Build one LEGO tower of 5 bricks and another of 7, then compare heights.",
      es: "Batalla de torres: Construye una torre LEGO de 5 ladrillos y otra de 7, luego compara sus alturas.",
      hi: "मीनार युद्ध: 5 और 7 ब्लॉकों की दो मीनारें बनाएं और ऊंचाई की तुलना करें।"
    },
    "004-match-number-quantity": {
      en: "Numeral Match: Draw digits on cards, then match them to piles of beans or coins.",
      es: "Emparejar Números: Dibuja dígitos en tarjetas, luego emparéjalos con montones de monedas o frijoles.",
      hi: "अंक मिलान: कार्डों पर अंक लिखें, फिर उन्हें सिक्कों या मोतियों के ढेर से मिलाएं।"
    },
    "005-ten-frame-basics": {
      en: "Baking Sheet Frames: Draw a 10-frame on baking sheets and place refrigerator magnets inside.",
      es: "Marcos en Bandejas: Dibuja un marco de 10 en bandejas de metal y coloca imanes dentro.",
      hi: "बेकिंग शीट फ्रेम: बेकिंग शीट पर 10-फ्रेम बनाएं और अंदर चुंबक रखें।"
    },
    "006-number-line-0-to-10": {
      en: "Sidewalk scale walks: Hop notches from 0 to 10 on a chalk line drawn on the pavement.",
      es: "Escalas de Acera: Salta sobre marcas del 0 al 10 en una recta numérica dibujada con tiza.",
      hi: "फुटपाथ पैमाना: फुटपाथ पर खींची गई चाक रेखा पर 0 से 10 तक छलांग लगाएं।"
    },
    "007-number-bonds-to-5": {
      en: "Split the cups: Put 5 pennies under two cups to see different ways to split 5.",
      es: "Dividir Vasos: Coloca 5 monedas debajo de dos vasos para ver diferentes formas de dividir el 5.",
      hi: "कप विभाजन: 5 को विभाजित करने के विभिन्न तरीके देखने के लिए दो कप के नीचे 5 सिक्के रखें।"
    },
    "008-number-bonds-to-10": {
      en: "Ten-frame splits: Place red and blue chips inside frames to partition 10.",
      es: "Marcos partidos: Coloca fichas rojas y azules dentro de los marcos para dividir el 10.",
      hi: "दस-फ्रेम विभाजन: 10 को विभाजित करने के लिए फ्रेम के अंदर लाल और नीले चिप्स रखें।"
    },
    "009-zero-as-number": {
      en: "Empty plate surprise: Contrast plates with cookies versus an empty plate representing zero.",
      es: "Sorpresa de Plato Vacío: Contrasta platos con galletas con un plato completamente vacío (cero).",
      hi: "खाली प्लेट आश्चर्य: कुकीज़ वाली प्लेटों की तुलना शून्य दिखाने वाली खाली प्लेट से करें।"
    },
    "010-mixed-mastery-test": {
      en: "Flashcard review: Play a fast-paced game mixing count piles, notch jumps, and frame splits.",
      es: "Repaso con Tarjetas: Juega un juego rápido mezclando montones para contar, saltos y marcos.",
      hi: "फ्लैशकार्ड समीक्षा: गिनती, छलांग और फ्रेम विभाजन को मिलाकर एक त्वरित खेल खेलें।"
    },
    "011-addition-as-combining": {
      en: "Combine cookies: Put 4 items on plate A and 3 on plate B, then add them together.",
      es: "Combinar galletas: Coloca 4 galletas en el plato A y 3 en el plato B, luego súmalas todas.",
      hi: "कुकीज़ का संयोजन: प्लेट A पर 4 और प्लेट B पर 3 वस्तुएं रखें, फिर उन्हें एक साथ जोड़ें।"
    },
    "012-counting-on": {
      en: "Chalk Path Hop: Hop forward from a starting box, counting steps forward on the sidewalk.",
      es: "Saltos de tiza: Salta hacia adelante desde una casilla inicial, contando los pasos en el suelo.",
      hi: "चाक पथ कूद: प्रारंभिक बॉक्स से आगे कूदें और फुटपाथ पर आगे बढ़ने वाले कदमों को गिनें।"
    },
    "021-tens-and-ones": {
      en: "Roll and Build: Place bundles of 10 straws in the Tens column and loose ones in the Ones.",
      es: "Juego de Paquetes: Coloca paquetes de 10 pajitas en las Decenas y unidades sueltas en las Unidades.",
      hi: "बंडल बनाएं: दहाई कॉलम में 10 तीलियों के बंडल और इकाई कॉलम में खुली तीलियाँ रखें।"
    },
    "022-comparing-two-digit-numbers": {
      en: "Block Wars: Flip number cards and compare your straw piles side-by-side. Larger pile wins!",
      es: "Guerra de Bloques: Da la vuelta a las tarjetas y compara tus paquetes de pajitas. ¡El mayor gana!",
      hi: "बंडल युद्ध: कार्डों को पलटें और तीलियों के ढेरों की तुलना करें। बड़ा ढेर जीतता है!"
    },
    "023-ten-more-ten-less": {
      en: "Magic Ten-Ruler Jump: Stand on 13 and make a giant leap forward to 23 (10 more). Jump back for 10 less.",
      es: "Salto Mágico de Diez: Párate en el 13 y da un gran salto directo al 23. Salta atrás para 10 menos.",
      hi: "जादू दहाई छलांग: 13 पर खड़े हों और सीधे 23 (10 अधिक) पर कूदें। 10 कम के लिए पीछे कूदें।"
    }
  };

  // Attach arrays directly to global OMF namespace
  window.OMF.STAGE_0_CONCEPTS = STAGE_0_CONCEPTS;
  window.OMF.STAGE_1_CONCEPTS = STAGE_1_CONCEPTS;
  window.OMF.STAGE_2_CONCEPTS = STAGE_2_CONCEPTS;
  window.OMF.STAGE_CONCEPTS = STAGE_CONCEPTS;
  window.OMF.manifestActivities = manifestActivities;
})();
