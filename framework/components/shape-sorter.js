// Open Mathematics Foundation - Shape Sorter Component (Boilerplate for Stage 6)
(function() {
  window.OMF = window.OMF || {};

  class ShapeSorter extends HTMLElement {
    constructor() {
      super();
      this.shapes = ["circle", "square", "triangle"];
    }

    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; padding: 16px;">
          <p style="color: var(--text-secondary); font-size: 0.95rem;">Drag shapes to matching slots (Preview Mode)</p>
          <div style="display: flex; gap: 24px; justify-content: center; align-items: center;">
            <!-- Target Slots -->
            <div style="width: 80px; height: 80px; border: 3px dashed var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--primary-color);">Circle</div>
            <div style="width: 80px; height: 80px; border: 3px dashed var(--primary-color); border-radius: var(--border-radius-sm); display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--primary-color);">Square</div>
            <div style="width: 80px; height: 80px; border: 3px dashed var(--primary-color); clip-path: polygon(50% 0%, 0% 100%, 100% 100%); display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--primary-color); padding-top: 20px;">Triangle</div>
          </div>
        </div>
      `;
    }
  }

  customElements.define("shape-sorter", ShapeSorter);
})();
