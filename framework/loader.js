// Open Mathematics Foundation - Synchronous Bootstrapper Loader
(function() {
  window.OMF = window.OMF || {};

  // Find the folder where loader.js is located to construct relative paths
  const scripts = Array.from(document.querySelectorAll("script"));
  const loaderScript = scripts.find(s => s.src && s.src.includes("framework/loader.js"));
  if (!loaderScript) return;
  const loaderSrc = loaderScript.getAttribute("src");
  const basePath = loaderSrc.replace("loader.js", "");

  // Order matters for execution dependency structure
  const deps = [
    "engine/accessibility.js",
    "engine/security.js",
    "engine/i18n.js",
    "engine/progress.js",
    "components/mastery-badge.js",
    "components/drag-counter.js",
    "components/ten-frame.js",
    "components/number-line.js",
    "components/base-ten-blocks.js",
    "components/hundred-chart.js",
    "components/parent-guide.js",
    "engine/quiz-runner.js"
  ];

  deps.forEach(dep => {
    document.write(`<script src="${basePath}${dep}"></script>`);
  });

  // Apply parent accessibility preference modes on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("omf_dyslexia") === "true") {
      document.body.classList.add("dyslexia-mode");
    }
    if (localStorage.getItem("omf_warm") === "true") {
      document.body.classList.add("warm-mode");
    }
    if (localStorage.getItem("omf_high_contrast") === "true") {
      document.body.classList.add("high-contrast-mode");
    }
    const colorblindMode = localStorage.getItem("omf_colorblind");
    if (colorblindMode === "deuteranopia") {
      document.body.classList.add("deuteranopia-mode");
    } else if (colorblindMode === "protanopia") {
      document.body.classList.add("protanopia-mode");
    }
  });
})();
