// Open Mathematics Foundation - Base Ten Blocks Component (Boilerplate for Stage 2)
(function() {
  window.OMF = window.OMF || {};

  class BaseTenBlocks extends HTMLElement {
    constructor() {
      super();
      this.hundreds = 0;
      this.tens = 0;
      this.ones = 0;
    }

    static get observedAttributes() {
      return ["hundreds", "tens", "ones"];
    }

    connectedCallback() {
      this.hundreds = parseInt(this.getAttribute("hundreds")) || 0;
      this.tens = parseInt(this.getAttribute("tens")) || 0;
      this.ones = parseInt(this.getAttribute("ones")) || 0;
      this.render();
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (oldVal !== newVal) {
        this[name] = parseInt(newVal) || 0;
        this.render();
      }
    }

    render() {
      this.innerHTML = `
        <div class="base-ten-blocks-workspace" style="display: flex; gap: 24px; justify-content: center; align-items: flex-end; padding: 16px;">
          <!-- Hundreds Flats Section -->
          ${this.hundreds > 0 ? `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <div style="display: grid; grid-template-columns: repeat(10, 8px); gap: 1px; padding: 4px; background: var(--primary-light); border: 2px solid var(--primary-color);">
                ${Array(100).fill(0).map(() => `<div style="width: 8px; height: 8px; background: var(--primary-color);"></div>`).join('')}
              </div>
              <span style="font-weight: 600;">${this.hundreds} Hundreds</span>
            </div>
          ` : ''}

          <!-- Tens Rods Section -->
          ${this.tens > 0 ? `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <div style="display: flex; gap: 4px;">
                ${Array(this.tens).fill(0).map(() => `
                  <div style="display: flex; flex-direction: column; gap: 1px; padding: 2px; background: var(--warning-light); border: 2px solid var(--warning-color);">
                    ${Array(10).fill(0).map(() => `<div style="width: 10px; height: 10px; background: var(--warning-color);"></div>`).join('')}
                  </div>
                `).join('')}
              </div>
              <span style="font-weight: 600;">${this.tens} Tens</span>
            </div>
          ` : ''}

          <!-- Ones Units Section -->
          ${this.ones > 0 ? `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <div style="display: flex; flex-wrap: wrap; gap: 4px; max-width: 100px; justify-content: center;">
                ${Array(this.ones).fill(0).map(() => `
                  <div style="width: 12px; height: 12px; background: var(--success-color); border: 1px solid hsl(145, 29%, 25%); border-radius: 2px;"></div>
                `).join('')}
              </div>
              <span style="font-weight: 600;">${this.ones} Ones</span>
            </div>
          ` : ''}
        </div>
      `;
    }
  }

  customElements.define("base-ten-blocks", BaseTenBlocks);
})();
