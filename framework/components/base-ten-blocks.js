// Open Mathematics Foundation - Interactive Base Ten Blocks Component
(function() {
  window.OMF = window.OMF || {};

  class BaseTenBlocks extends HTMLElement {
    constructor() {
      super();
      this.tens = 0;
      this.ones = 0;
      this.interactive = false;
    }

    static get observedAttributes() {
      return ["tens", "ones", "interactive"];
    }

    connectedCallback() {
      this.tens = parseInt(this.getAttribute("tens")) || 0;
      this.ones = parseInt(this.getAttribute("ones")) || 0;
      this.interactive = this.getAttribute("interactive") === "true";
      this.render();
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (oldVal !== newVal) {
        if (name === "interactive") {
          this.interactive = newVal === "true";
        } else {
          this[name] = parseInt(newVal) || 0;
        }
        this.render();
      }
    }

    getValue() {
      return this.tens * 10 + this.ones;
    }

    addTen() {
      if (this.tens < 9) {
        this.tens++;
        this.dispatchEvent(new CustomEvent("change", { detail: { value: this.getValue() } }));
        this.render();
      }
    }

    removeTen() {
      if (this.tens > 0) {
        this.tens--;
        this.dispatchEvent(new CustomEvent("change", { detail: { value: this.getValue() } }));
        this.render();
      }
    }

    addOne() {
      if (this.ones < 9) {
        this.ones++;
        this.dispatchEvent(new CustomEvent("change", { detail: { value: this.getValue() } }));
        this.render();
      }
    }

    removeOne() {
      if (this.ones > 0) {
        this.ones--;
        this.dispatchEvent(new CustomEvent("change", { detail: { value: this.getValue() } }));
        this.render();
      }
    }

    render() {
      const t = (key) => window.OMF.i18n ? window.OMF.i18n.t(key) : key;

      this.innerHTML = `
        <div class="base-ten-wrapper" style="width: 100%; display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <!-- Two-column workspace -->
          <div class="base-ten-workspace" style="display: flex; gap: 32px; min-height: 180px; padding: 20px; border-radius: var(--border-radius); background: var(--bg-card); border: 2px dashed hsl(210, 20%, 80%); justify-content: center; width: 100%; max-width: 500px; box-sizing: border-box;">
            
            <!-- Tens column -->
            <div class="tens-column" style="display: flex; flex-direction: column; align-items: center; width: 50%; border-right: 2px dashed hsl(210, 20%, 90%); padding-right: 16px;">
              <h4 style="margin: 0 0 12px 0; color: var(--text-primary); font-size: 1.1rem; border-bottom: 2px solid var(--warning-color); padding-bottom: 4px;">Tens</h4>
              <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; min-height: 120px; align-items: flex-end;">
                ${this.tens === 0 ? `<span style="font-size: 0.9rem; color: var(--text-secondary); align-self: center;">Empty</span>` : ''}
                ${Array(this.tens).fill(0).map((_, i) => `
                  <div class="ten-rod animate-pop" aria-label="One ten rod" style="display: flex; flex-direction: column; gap: 1px; padding: 2px; background: hsl(35, 100%, 95%); border: 2.5px solid var(--warning-color); border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.08);">
                    ${Array(10).fill(0).map(() => `<div style="width: 12px; height: 10px; background: var(--warning-color); border-radius: 1px;"></div>`).join('')}
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Ones column -->
            <div class="ones-column" style="display: flex; flex-direction: column; align-items: center; width: 50%; padding-left: 16px;">
              <h4 style="margin: 0 0 12px 0; color: var(--text-primary); font-size: 1.1rem; border-bottom: 2px solid var(--success-color); padding-bottom: 4px;">Ones</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; min-height: 120px; align-content: flex-end; max-width: 160px;">
                ${this.ones === 0 ? `<span style="font-size: 0.9rem; color: var(--text-secondary); align-self: center;">Empty</span>` : ''}
                ${Array(this.ones).fill(0).map((_, i) => `
                  <div class="one-block animate-pop" aria-label="One unit block" style="width: 16px; height: 16px; background: var(--success-color); border: 2.5px solid hsl(145, 29%, 25%); border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.08);"></div>
                `).join('')}
              </div>
            </div>

          </div>

          <!-- Interaction Controls (Only shown if interactive is true) -->
          ${this.interactive ? `
            <div class="base-ten-controls" style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 8px;">
              <!-- Tens buttons -->
              <div style="display: flex; gap: 8px; border: 1.5px solid var(--warning-color); padding: 6px; border-radius: 8px; background: hsl(35, 100%, 98%);">
                <button class="btn btn-secondary" id="btn-add-ten" aria-label="Add a ten rod" style="width: 48px; height: 48px; min-width: 48px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; border: 2.5px solid var(--warning-color); padding: 0;">+10</button>
                <button class="btn btn-secondary" id="btn-sub-ten" aria-label="Remove a ten rod" style="width: 48px; height: 48px; min-width: 48px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; border: 2.5px solid var(--warning-color); padding: 0;">-10</button>
              </div>

              <!-- Ones buttons -->
              <div style="display: flex; gap: 8px; border: 1.5px solid var(--success-color); padding: 6px; border-radius: 8px; background: hsl(145, 100%, 98%);">
                <button class="btn btn-secondary" id="btn-add-one" aria-label="Add a unit block" style="width: 48px; height: 48px; min-width: 48px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; border: 2.5px solid var(--success-color); padding: 0;">+1</button>
                <button class="btn btn-secondary" id="btn-sub-one" aria-label="Remove a unit block" style="width: 48px; height: 48px; min-width: 48px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; border: 2.5px solid var(--success-color); padding: 0;">-1</button>
              </div>
            </div>
          ` : ''}
        </div>
      `;

      // Bind button events if interactive
      if (this.interactive) {
        this.querySelector("#btn-add-ten").addEventListener("click", () => this.addTen());
        this.querySelector("#btn-sub-ten").addEventListener("click", () => this.removeTen());
        this.querySelector("#btn-add-one").addEventListener("click", () => this.addOne());
        this.querySelector("#btn-sub-one").addEventListener("click", () => this.removeOne());
      }
    }
  }

  customElements.define("base-ten-blocks", BaseTenBlocks);
})();
