// Open Mathematics Foundation - Hundred Chart Component
(function() {
  window.OMF = window.OMF || {};

  class HundredChart extends HTMLElement {
    constructor() {
      super();
      this.selectedNumbers = new Set();
      this.interactive = false;
      this.highlightStep = 0;
      this.showOddEven = false;
    }

    static get observedAttributes() {
      return ["interactive", "highlight-step", "show-odd-even", "selected"];
    }

    connectedCallback() {
      this.interactive = this.getAttribute("interactive") === "true";
      this.highlightStep = parseInt(this.getAttribute("highlight-step")) || 0;
      this.showOddEven = this.getAttribute("show-odd-even") === "true";

      const initSelected = this.getAttribute("selected");
      if (initSelected) {
        initSelected.split(",").forEach(n => {
          const num = parseInt(n.trim());
          if (!isNaN(num) && num >= 1 && num <= 100) {
            this.selectedNumbers.add(num);
          }
        });
      }

      this.render();
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (oldVal === newVal) return;

      if (name === "interactive") {
        this.interactive = newVal === "true";
      } else if (name === "highlight-step") {
        this.highlightStep = parseInt(newVal) || 0;
      } else if (name === "show-odd-even") {
        this.showOddEven = newVal === "true";
      } else if (name === "selected") {
        this.selectedNumbers.clear();
        if (newVal) {
          newVal.split(",").forEach(n => {
            const num = parseInt(n.trim());
            if (!isNaN(num) && num >= 1 && num <= 100) {
              this.selectedNumbers.add(num);
            }
          });
        }
      }
      this.updateGrid();
    }

    render() {
      this.innerHTML = "";

      const container = document.createElement("div");
      container.className = "hundred-chart-container";

      const grid = document.createElement("div");
      grid.className = "hundred-chart-grid";

      for (let num = 1; num <= 100; num++) {
        const cell = document.createElement("div");
        cell.className = "hundred-chart-cell";
        cell.dataset.number = num;
        cell.textContent = num;

        if (this.showOddEven) {
          cell.classList.add(num % 2 === 0 ? "even" : "odd");
        }

        if (this.highlightStep > 0 && num % this.highlightStep === 0) {
          cell.classList.add("highlighted");
        }

        const isSelected = this.selectedNumbers.has(num);
        if (isSelected) {
          cell.classList.add("selected");
        }

        if (this.interactive) {
          cell.setAttribute("tabindex", "0");
          cell.setAttribute("role", "checkbox");
          cell.setAttribute("aria-checked", isSelected ? "true" : "false");
          cell.setAttribute("aria-label", `Number ${num}`);

          cell.addEventListener("click", () => this.toggleNumber(num));
          cell.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              this.toggleNumber(num);
            }
          });
        }

        grid.appendChild(cell);
      }

      container.appendChild(grid);
      this.appendChild(container);
    }

    updateGrid() {
      const cells = this.querySelectorAll(".hundred-chart-cell");
      cells.forEach(cell => {
        const num = parseInt(cell.dataset.number);

        // Update odd/even classes
        if (this.showOddEven) {
          cell.classList.add(num % 2 === 0 ? "even" : "odd");
        } else {
          cell.classList.remove("even", "odd");
        }

        // Update highlight-step
        if (this.highlightStep > 0 && num % this.highlightStep === 0) {
          cell.classList.add("highlighted");
        } else {
          cell.classList.remove("highlighted");
        }

        // Update selected state
        const isSelected = this.selectedNumbers.has(num);
        if (isSelected) {
          cell.classList.add("selected");
          if (this.interactive) cell.setAttribute("aria-checked", "true");
        } else {
          cell.classList.remove("selected");
          if (this.interactive) cell.setAttribute("aria-checked", "false");
        }
      });
    }

    toggleNumber(num) {
      if (!this.interactive) return;

      if (this.selectedNumbers.has(num)) {
        this.selectedNumbers.delete(num);
      } else {
        this.selectedNumbers.add(num);
      }

      this.updateGrid();

      this.dispatchEvent(new CustomEvent("change", {
        detail: {
          value: this.getValue(),
          selectedCount: this.selectedNumbers.size
        }
      }));
    }

    setHighlightStep(step) {
      this.highlightStep = parseInt(step) || 0;
      this.setAttribute("highlight-step", this.highlightStep);
      this.updateGrid();
    }

    clearSelection() {
      this.selectedNumbers.clear();
      this.removeAttribute("selected");
      this.updateGrid();
    }

    getValue() {
      return Array.from(this.selectedNumbers).sort((a, b) => a - b);
    }
  }

  window.OMF.HundredChart = HundredChart;
  customElements.define("hundred-chart", HundredChart);
})();
