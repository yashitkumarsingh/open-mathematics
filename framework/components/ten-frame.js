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

        if (i < this.currentVal) {
          cell.classList.add("filled");
          cell.innerHTML = `<div class="ten-frame-counter"></div>`;
        }

        if (this.interactive) {
          cell.addEventListener("click", () => this.toggleCell(i));
        }

        grid.appendChild(cell);
      }

      this.appendChild(grid);
    }

    updateCells() {
      const cells = this.querySelectorAll(".ten-frame-cell");
      cells.forEach((cell, i) => {
        if (i < this.currentVal) {
          if (!cell.classList.contains("filled")) {
            cell.classList.add("filled");
            cell.innerHTML = `<div class="ten-frame-counter"></div>`;
          }
        } else {
          cell.classList.remove("filled");
          cell.innerHTML = "";
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
      } else {
        cell.classList.add("filled");
        cell.innerHTML = `<div class="ten-frame-counter"></div>`;
      }

      // Compute total filled
      this.currentVal = this.querySelectorAll(".ten-frame-cell.filled").length;
      
      // Dispatch custom change event
      this.dispatchEvent(new CustomEvent("change", {
        detail: { value: this.currentVal }
      }));
    }

    getValue() {
      // Return count of filled cells
      return this.querySelectorAll(".ten-frame-cell.filled").length;
    }
  }

  customElements.define("ten-frame", TenFrame);
})();
