// Open Mathematics Foundation - Ten Frame Component
(function() {
  window.OMF = window.OMF || {};

  class TenFrame extends HTMLElement {
    constructor() {
      super();
      this.currentVal = 0;
      this.interactive = false;
    }

    static get observedAttributes() {
      return ["value", "interactive"];
    }

    connectedCallback() {
      this.interactive = this.getAttribute("interactive") === "true";
      this.currentVal = parseInt(this.getAttribute("value")) || 0;
      this.render();
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (name === "value" && oldVal !== newVal) {
        this.currentVal = parseInt(newVal) || 0;
        this.updateCells();
      }
      if (name === "interactive") {
        this.interactive = newVal === "true";
      }
    }

    render() {
      this.innerHTML = "";
      
      const grid = document.createElement("div");
      grid.className = "ten-frame-grid";

      for (let i = 0; i < 10; i++) {
        const cell = document.createElement("div");
        cell.className = "ten-frame-cell";
        cell.dataset.index = i;

        const isFilled = i < this.currentVal;
        if (isFilled) {
          cell.classList.add("filled");
          cell.innerHTML = `<div class="ten-frame-counter"></div>`;
        }

        if (this.interactive) {
          cell.setAttribute("tabindex", "0");
          cell.setAttribute("role", "checkbox");
          cell.setAttribute("aria-checked", isFilled ? "true" : "false");
          cell.setAttribute("aria-label", `Cell ${i + 1}`);
          cell.addEventListener("click", () => this.toggleCell(i));
          cell.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              this.toggleCell(i);
            }
          });
        }

        grid.appendChild(cell);
      }

      this.appendChild(grid);
    }

    updateCells() {
      const cells = this.querySelectorAll(".ten-frame-cell");
      cells.forEach((cell, i) => {
        const shouldFill = i < this.currentVal;
        if (shouldFill) {
          if (!cell.classList.contains("filled")) {
            cell.classList.add("filled");
            cell.innerHTML = `<div class="ten-frame-counter"></div>`;
          }
          if (this.interactive) cell.setAttribute("aria-checked", "true");
        } else {
          cell.classList.remove("filled");
          cell.innerHTML = "";
          if (this.interactive) cell.setAttribute("aria-checked", "false");
        }
      });
    }

    toggleCell(idx) {
      if (!this.interactive) return;

      const cells = this.querySelectorAll(".ten-frame-cell");
      const cell = cells[idx];

      if (cell.classList.contains("filled")) {
        cell.classList.remove("filled");
        cell.innerHTML = "";
        cell.setAttribute("aria-checked", "false");
      } else {
        cell.classList.add("filled");
        cell.innerHTML = `<div class="ten-frame-counter"></div>`;
        cell.setAttribute("aria-checked", "true");
      }

      // Compute total filled
      this.currentVal = this.querySelectorAll(".ten-frame-cell.filled").length;
      
      // Dispatch custom change event
      this.dispatchEvent(new CustomEvent("change", {
        detail: { value: this.currentVal }
      }));
    }

    getValue() {
      return this.querySelectorAll(".ten-frame-cell.filled").length;
    }
  }

  customElements.define("ten-frame", TenFrame);
})();
