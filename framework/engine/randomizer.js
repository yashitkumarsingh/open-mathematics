// Open Mathematics Foundation - Math Randomizer Utilities
(function() {
  window.OMF = window.OMF || {};

  const Randomizer = {
    // Shuffle an array in place
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },

    // Get a random integer between min and max (inclusive)
    randomRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // Choose a random item from an array
    pick(array) {
      if (array.length === 0) return null;
      return array[Math.floor(Math.random() * array.length)];
    },

    // Generate a set of unique random integers in range
    uniqueRandomSet(count, min, max) {
      const set = new Set();
      const range = max - min + 1;
      const targetCount = Math.min(count, range);
      
      while (set.size < targetCount) {
        set.add(this.randomRange(min, max));
      }
      return Array.from(set);
    }
  };

  window.OMF.Randomizer = Randomizer;
})();
