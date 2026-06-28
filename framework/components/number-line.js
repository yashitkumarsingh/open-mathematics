// Open Mathematics Foundation - Number Line Component
(function() {
  window.OMF = window.OMF || {};

  class NumberLine extends HTMLElement {
    constructor() {
      super();
      this.min = 0;
      this.max = 10;
      this.selectedValue = null;
      this.interactive = false;
    }

    static get observedAttributes() {
      return ["min", "max", "interactive"];
    }

    connectedCallback() {
      this.min = parseInt(this.getAttribute("min")) || 0;
      this.max = parseInt(this.getAttribute("max")) || 10;
      this.interactive = this.getAttribute("interactive") === "true";
      this.render();
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if ((name === "min" || name === "max") && oldVal !== newVal) {
        this[name] = parseInt(newVal) || 0;
        this.render();
      }
      if (name === "interactive") {
        this.interactive = newVal === "true";
        this.render();
      }
    }

    render() {
      this.innerHTML = "";
      this.selectedValue = null;

      const container = document.createElement("div");
      container.className = "number-line-container";

      // The horizontal rail
      const rail = document.createElement("div");
      rail.className = "number-line-rail";

      // The dots/points to click
      const pointsContainer = document.createElement("div");
      pointsContainer.className = "number-line-points";

      // Notches container
      const notchesContainer = document.createElement("div");
      notchesContainer.className = "number-line-notches";

      // Labels below
      const labelsContainer = document.createElement("div");
      labelsContainer.className = "number-line-labels";

      const range = this.max - this.min;

      for (let val = this.min; val <= this.max; val++) {
        // Notch element
        const notch = document.createElement("div");
        notch.className = "number-line-notch";
        notchesContainer.appendChild(notch);

        // Clickable point element
        const point = document.createElement("div");
        point.className = "number-line-point";
        point.innerText = val;
        point.dataset.value = val;

        if (this.interactive) {
          point.addEventListener("click", () => this.selectValue(val));
        } else {
          point.style.pointerEvents = "none";
        }

        pointsContainer.appendChild(point);

        // Label element
        const label = document.createElement("div");
        label.className = "number-line-label";
        label.innerText = val;
        labelsContainer.appendChild(label);
      }

      rail.appendChild(notchesContainer);
      rail.appendChild(pointsContainer);
      container.appendChild(rail);
      container.appendChild(labelsContainer);
      
      this.appendChild(container);
    }

    selectValue(val) {
      if (!this.interactive) return;

      this.selectedValue = val;
      const points = this.querySelectorAll(".number-line-point");
      
      points.forEach(point => {
        const ptVal = parseInt(point.dataset.value);
        if (ptVal === val) {
          point.classList.add("active");
        } else {
          point.classList.remove("active");
        }
      });

      this.dispatchEvent(new CustomEvent("change", {
        detail: { value: this.selectedValue }
      }));
    }

    getValue() {
      return this.selectedValue;
    }
  }

  customElements.define("number-line", NumberLine);
})();
