// Open Mathematics Foundation - client-side HTML Sanitization (XSS mitigation)
(function() {
  window.OMF = window.OMF || {};
  window.OMF.Security = {
    sanitizeHTML(htmlString) {
      if (!htmlString) return "";
      
      // Create a temporary parser document fragment/element
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlString;
      
      const allowedTags = [
        "DIV", "SPAN", "STRONG", "EM", "BR", "P", "B", "I", "S", "SUB", "SUP", "CODE", "DEL", "INS", "U", "SMALL", "IMG",
        "BASE-TEN-BLOCKS", "TEN-FRAME", "NUMBER-LINE", "DRAG-COUNTER"
      ];
      
      const allowedAttrs = [
        "style", "tens", "ones", "interactive", "value", 
        "min", "max", "step", "src", "alt", "width", "height", "class", "id"
      ];

      function cleanNode(node) {
        const children = Array.from(node.childNodes);
        for (const child of children) {
          if (child.nodeType === Node.ELEMENT_NODE) {
            const tagName = child.tagName;
            if (!allowedTags.includes(tagName)) {
              // Unsafe tag: replace element with its text content
              const textNode = document.createTextNode(child.textContent);
              node.replaceChild(textNode, child);
            } else {
              // Clean attributes
              const attributes = Array.from(child.attributes);
              for (const attr of attributes) {
                const attrName = attr.name.toLowerCase();
                const attrVal = attr.value.toLowerCase();
                
                // Strip inline event handlers or non-whitelisted attributes
                if (attrName.startsWith("on") || !allowedAttrs.includes(attrName) || attrVal.includes("javascript:")) {
                  child.removeAttribute(attr.name);
                } else if (attrName === "style") {
                  // Prevent script strings or expression evasion vectors inside styles
                  if (attrVal.includes("expression(") || attrVal.includes("url(") || attrVal.includes("position:")) {
                    child.removeAttribute("style");
                  }
                }
              }
              // Recurse children
              cleanNode(child);
            }
          }
        }
      }
      
      cleanNode(tempDiv);
      return tempDiv.innerHTML;
    }
  };
})();
