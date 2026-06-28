// Open Mathematics Foundation - Mastery Badge Component
(function() {
  window.OMF = window.OMF || {};

  class MasteryBadge extends HTMLElement {
    constructor() {
      super();
      this.state = "locked";
    }

    static get observedAttributes() {
      return ["state"];
    }

    connectedCallback() {
      this.state = this.getAttribute("state") || "locked";
      this.render();
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (name === "state" && oldVal !== newVal) {
        this.state = newVal;
        this.render();
      }
    }

    render() {
      const isMastered = this.state === "mastered";
      
      const badgeColor = isMastered ? "hsl(27, 67%, 56%)" : "hsl(45, 5%, 80%)"; // Amber gold vs Grey
      const ribColor = isMastered ? "hsl(205, 27%, 40%)" : "hsl(45, 5%, 65%)";   // Earthy blue ribbon vs Grey ribbon
      const starColor = isMastered ? "hsl(48, 100%, 60%)" : "hsl(45, 5%, 90%)";  // Gold star vs light grey
      const borderStroke = isMastered ? "hsl(27, 67%, 40%)" : "hsl(45, 5%, 55%)";
      
      this.innerHTML = `
        <svg class="mastery-badge-svg ${isMastered ? 'mastered' : 'locked'}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <!-- Ribbons -->
          <path d="M35,60 L25,90 L45,80 L50,60 Z" fill="${ribColor}" stroke="${borderStroke}" stroke-width="2" />
          <path d="M65,60 L75,90 L55,80 L50,60 Z" fill="${ribColor}" stroke="${borderStroke}" stroke-width="2" />
          
          <!-- Outer Badge Circle -->
          <circle cx="50" cy="50" r="35" fill="white" stroke="${badgeColor}" stroke-width="4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="${borderStroke}" stroke-width="1.5" stroke-dasharray="3,3" />

          <!-- Center Star -->
          <polygon points="50,22 57,38 74,38 60,49 65,66 50,55 35,66 40,49 26,38 43,38" 
                   fill="${starColor}" 
                   stroke="${borderStroke}" 
                   stroke-width="2" 
                   stroke-linejoin="round" />
        </svg>
      `;
    }
  }

  customElements.define("mastery-badge", MasteryBadge);
})();
