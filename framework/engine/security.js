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
        "DIV", "SPAN", "STRONG", "EM", "BR", "P", "B", "I", "IMG",
        "BASE-TEN-BLOCKS", "TEN-FRAME", "NUMBER-LINE", "DRAG-COUNTER"
      ];
      
      const allowedAttrs = [
        "style", "tens", "ones", "interactive", "value", 
        "min", "max", "step", "src", "alt", "width", "height"
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
                if (!allowedAttrs.includes(attr.name)) {
                  child.removeAttribute(attr.name);
                } else if (attr.name === "style") {
                  // Prevent script strings or expression evasion vectors inside styles
                  const styleVal = attr.value.toLowerCase();
                  if (styleVal.includes("javascript:") || styleVal.includes("expression(") || styleVal.includes("url(")) {
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
