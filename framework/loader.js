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
    "engine/i18n.js",
    "engine/progress.js",
    "components/mastery-badge.js",
    "components/drag-counter.js",
    "components/ten-frame.js",
    "components/number-line.js",
    "components/base-ten-blocks.js",
    "components/parent-guide.js",
    "engine/quiz-runner.js"
  ];

  deps.forEach(dep => {
    document.write(`<script src="${basePath}${dep}"></script>`);
  });
})();
