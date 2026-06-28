// Open Mathematics Foundation - Graph Builder Component (Boilerplate for Stage 7)
(function() {
  window.OMF = window.OMF || {};

  class GraphBuilder extends HTMLElement {
    constructor() {
      super();
      this.values = [3, 5, 2];
      this.labels = ["Apples", "Cherries", "Bananas"];
    }

    connectedCallback() {
      this.render();
    }

    render() {
      const maxVal = Math.max(...this.values, 1);
      let bars = "";
      this.values.forEach((val, idx) => {
        const heightPercent = (val / maxVal) * 100;
        bars += `
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1;">
            <div style="width: 40px; height: 120px; background-color: var(--primary-light); border-radius: 4px; display: flex; align-items: flex-end; overflow: hidden; border: 2px solid var(--primary-color);">
              <div style="width: 100%; height: ${heightPercent}%; background-color: var(--primary-color); transition: height 0.5s ease-out;"></div>
            </div>
            <span style="font-weight: 600; font-size: 0.9rem;">${val}</span>
            <span style="font-size: 0.85rem; color: var(--text-secondary); text-align: center;">${this.labels[idx]}</span>
          </div>
        `;
      });

      this.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%; max-width: 320px; margin: 16px auto;">
          <div style="display: flex; width: 100%; justify-content: space-around; align-items: flex-end; height: 160px; border-bottom: 3px solid var(--text-main); padding-bottom: 8px;">
            ${bars}
          </div>
        </div>
      `;
    }
  }

  customElements.define("graph-builder", GraphBuilder);
})();
