// Open Mathematics Foundation - Fraction Bars Component (Boilerplate for Stage 4)
(function() {
  window.OMF = window.OMF || {};

  class FractionBar extends HTMLElement {
    constructor() {
      super();
      this.numerator = 1;
      this.denominator = 2;
    }

    static get observedAttributes() {
      return ["numerator", "denominator"];
    }

    connectedCallback() {
      this.numerator = parseInt(this.getAttribute("numerator")) || 1;
      this.denominator = parseInt(this.getAttribute("denominator")) || 2;
      this.render();
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (oldVal !== newVal) {
        this[name] = parseInt(newVal) || 1;
        this.render();
      }
    }

    render() {
      let segments = "";
      for (let i = 0; i < this.denominator; i++) {
        const isFilled = i < this.numerator;
        const fillStyle = isFilled ? "background-color: var(--primary-color);" : "background-color: var(--primary-light);";
        const borderStyle = "border-right: 2px solid white;";
        
        segments += `
          <div style="flex: 1; height: 40px; ${fillStyle} ${borderStyle} transition: var(--transition-smooth); display: flex; align-items: center; justify-content: center; color: ${isFilled ? 'white' : 'var(--primary-color)'}; font-weight: 600;">
            ${isFilled ? '1/' + this.denominator : ''}
          </div>
        `;
      }

      this.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; max-width: 400px; margin: 12px auto;">
          <div style="display: flex; width: 100%; border: 3px solid var(--primary-color); border-radius: var(--border-radius-md); overflow: hidden; box-shadow: var(--card-shadow);">
            ${segments}
          </div>
          <span style="font-weight: 600; font-size: 1.1rem; color: var(--text-main);">${this.numerator} / ${this.denominator}</span>
        </div>
      `;
    }
  }

  customElements.define("fraction-bar", FractionBar);
})();
