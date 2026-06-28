// Open Mathematics Foundation - Drag Counter Component
(function() {
  window.OMF = window.OMF || {};

  const EMOJI_MAP = {
    apple: "🍎",
    cherry: "🍒",
    star: "⭐",
    fish: "🐟",
    car: "🚗",
    banana: "🍌",
    balloon: "🎈",
    animal: "🦊"
  };

  class DragCounter extends HTMLElement {
    constructor() {
      super();
      this.targetCount = 5;
      this.itemType = "apple";
      this.totalItems = 10;
      this.basketItems = [];
      this.sourceItems = [];
    }

    static get observedAttributes() {
      return ["target-count", "item-type", "total-items"];
    }

    connectedCallback() {
      this.targetCount = parseInt(this.getAttribute("target-count")) || 5;
      this.itemType = this.getAttribute("item-type") || "apple";
      this.totalItems = parseInt(this.getAttribute("total-items")) || 10;
      
      // Initialize items
      this.sourceItems = [];
      for (let i = 0; i < this.totalItems; i++) {
        this.sourceItems.push({ id: `item-${i}`, symbol: EMOJI_MAP[this.itemType] || "🍎" });
      }
      this.basketItems = [];
      
      this.render();
    }

    render() {
      this.innerHTML = "";

      const workspace = document.createElement("div");
      workspace.className = "drag-workspace";

      // 1. Source container
      const sourceContainer = document.createElement("div");
      sourceContainer.className = "drag-source";
      sourceContainer.id = "omf-drag-source";
      sourceContainer.innerHTML = `<p style="width: 100%; text-align: center; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">Tap or drag items to the basket</p>`;

      // 2. Basket container
      const basket = document.createElement("div");
      basket.className = "drop-target-basket";
      basket.id = "omf-drop-basket";
      
      // Register HTML5 Drag and Drop events on the basket
      basket.addEventListener("dragover", (e) => {
        e.preventDefault();
        basket.classList.add("drag-over");
      });

      basket.addEventListener("dragleave", () => {
        basket.classList.remove("drag-over");
      });

      basket.addEventListener("drop", (e) => {
        e.preventDefault();
        basket.classList.remove("drag-over");
        const itemId = e.dataTransfer.getData("text/plain");
        this.moveToBasket(itemId);
      });

      // Allow dragging back out to the source container
      sourceContainer.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
      sourceContainer.addEventListener("drop", (e) => {
        e.preventDefault();
        const itemId = e.dataTransfer.getData("text/plain");
        this.moveToSource(itemId);
      });

      workspace.appendChild(sourceContainer);
      workspace.appendChild(basket);
      this.appendChild(workspace);

      this.updateUI();
    }

    updateUI() {
      const sourceContainer = this.querySelector("#omf-drag-source");
      const basket = this.querySelector("#omf-drop-basket");
      if (!sourceContainer || !basket) return;

      // Clear previous items (keep the header text)
      const headerText = sourceContainer.querySelector("p");
      sourceContainer.innerHTML = "";
      if (headerText) sourceContainer.appendChild(headerText);

      // Render Source Items
      this.sourceItems.forEach(item => {
        const el = this.createDraggableElement(item, false);
        sourceContainer.appendChild(el);
      });

      // Render Basket Contents
      basket.innerHTML = `
        <div class="basket-count">${this.basketItems.length}</div>
        <div style="font-size: 0.95rem; font-weight: 600; color: var(--primary-color);">Items in Basket</div>
        <div class="basket-grid" style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 12px; width: 100%; min-height: 60px;"></div>
      `;

      const basketGrid = basket.querySelector(".basket-grid");
      this.basketItems.forEach(item => {
        const el = this.createDraggableElement(item, true);
        basketGrid.appendChild(el);
      });
    }

    createDraggableElement(item, isInBasket) {
      const el = document.createElement("div");
      el.className = "draggable-item animate-pop";
      el.innerText = item.symbol;
      el.draggable = true;
      el.id = item.id;

      el.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", item.id);
      });

      // Add Tap-to-move for touch and click accessibility
      el.addEventListener("click", () => {
        if (isInBasket) {
          this.moveToSource(item.id);
        } else {
          this.moveToBasket(item.id);
        }
      });

      return el;
    }

    moveToBasket(id) {
      const idx = this.sourceItems.findIndex(item => item.id === id);
      if (idx !== -1) {
        const [item] = this.sourceItems.splice(idx, 1);
        this.basketItems.push(item);
        this.updateUI();
        this.dispatchChangeEvent();
      }
    }

    moveToSource(id) {
      const idx = this.basketItems.findIndex(item => item.id === id);
      if (idx !== -1) {
        const [item] = this.basketItems.splice(idx, 1);
        this.sourceItems.push(item);
        this.updateUI();
        this.dispatchChangeEvent();
      }
    }

    dispatchChangeEvent() {
      this.dispatchEvent(new CustomEvent("change", {
        detail: { value: this.basketItems.length }
      }));
    }

    getValue() {
      return this.basketItems.length;
    }
  }

  customElements.define("drag-counter", DragCounter);
})();
