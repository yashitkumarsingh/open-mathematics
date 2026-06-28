// Open Mathematics Foundation - Concept Validator Script
// Usage: node scripts/validate-concepts.js

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const CONCEPTS_DIR = path.join(__dirname, '..', 'concepts');
const REQUIRED_FILES = [
  'concept.md',
  'parent-guide.md',
  'misconceptions.md',
  'activities.md',
  'questions.js',
  'test.json',
  'tracking-schema.json',
  'child.html'
];

let totalConcepts = 0;
let failedConcepts = 0;
const conceptIdsSeen = new Set();
const errors = [];

console.log("🔍 Starting OMF Concept Validator...\n");

if (!fs.existsSync(CONCEPTS_DIR)) {
  console.error("❌ Error: concepts/ directory not found in project root.");
  process.exit(1);
}

// Read stages (e.g. 00-number-sense)
const stages = fs.readdirSync(CONCEPTS_DIR).filter(file => {
  return fs.statSync(path.join(CONCEPTS_DIR, file)).isDirectory();
});

stages.forEach(stage => {
  const stagePath = path.join(CONCEPTS_DIR, stage);
  const concepts = fs.readdirSync(stagePath).filter(file => {
    return fs.statSync(path.join(stagePath, file)).isDirectory();
  });

  concepts.forEach(conceptDir => {
    totalConcepts += 1;
    const conceptPath = path.join(stagePath, conceptDir);
    const relativeConceptPath = path.relative(path.join(__dirname, '..'), conceptPath);
    let conceptHasError = false;

    console.log(`Checking concept: ${relativeConceptPath}...`);

    // 1. Verify all required files exist
    REQUIRED_FILES.forEach(reqFile => {
      const filePath = path.join(conceptPath, reqFile);
      if (!fs.existsSync(filePath)) {
        errors.push(`[${conceptDir}] Missing required file: ${reqFile}`);
        conceptHasError = true;
      }
    });

    // 2. Validate concept.md metadata frontmatter
    const metadataPath = path.join(conceptPath, 'concept.md');
    if (fs.existsSync(metadataPath)) {
      const content = fs.readFileSync(metadataPath, 'utf8');
      const lines = content.split('\n');
      let id = null;
      let title = null;
      let inFrontmatter = false;

      lines.forEach(line => {
        if (line.trim() === '---') {
          inFrontmatter = !inFrontmatter;
        } else if (inFrontmatter) {
          const parts = line.split(':');
          if (parts.length >= 2) {
            const key = parts[0].trim();
            const val = parts.slice(1).join(':').trim().replace(/['"]/g, '');
            if (key === 'id') id = val;
            if (key === 'title') title = val;
          }
        }
      });

      if (!id) {
        errors.push(`[${conceptDir}] Missing 'id' attribute in concept.md frontmatter.`);
        conceptHasError = true;
      } else {
        if (conceptIdsSeen.has(id)) {
          errors.push(`[${conceptDir}] Duplicate concept ID found: '${id}'`);
          conceptHasError = true;
        } else {
          conceptIdsSeen.add(id);
        }
      }

      if (!title) {
        errors.push(`[${conceptDir}] Missing 'title' attribute in concept.md frontmatter.`);
        conceptHasError = true;
      }
    }

    // 3. Validate questions.js parsing using Node's sandbox VM
    const questionsJsPath = path.join(conceptPath, 'questions.js');
    if (fs.existsSync(questionsJsPath)) {
      const code = fs.readFileSync(questionsJsPath, 'utf8');
      
      try {
        const contextObj = { window: { OMF: {} } };
        vm.createContext(contextObj);
        vm.runInNewContext(code, contextObj);
        
        const quiz = contextObj.window.OMF.currentQuiz;
        if (!quiz) {
          throw new Error("window.OMF.currentQuiz is not defined in questions.js");
        }
        if (!quiz.conceptId) {
          throw new Error("conceptId attribute is missing in window.OMF.currentQuiz");
        }
        if (!Array.isArray(quiz.questions) || quiz.questions.length === 0) {
          throw new Error("questions array is missing or empty in window.OMF.currentQuiz");
        }

        // Verify that each question has a valid prompt, type, and target
        quiz.questions.forEach((q, idx) => {
          if (!q.id) throw new Error(`Question at index ${idx} is missing an 'id'`);
          if (!q.type) throw new Error(`Question '${q.id}' is missing a 'type'`);
          if (!q.prompt) throw new Error(`Question '${q.id}' is missing a 'prompt'`);
          if (q.target === undefined) throw new Error(`Question '${q.id}' is missing a 'target'`);
        });

      } catch (err) {
        errors.push(`[${conceptDir}] questions.js parsing error: ${err.message}`);
        conceptHasError = true;
      }
    }

    // 4. Validate test.json standard JSON format
    const testJsonPath = path.join(conceptPath, 'test.json');
    if (fs.existsSync(testJsonPath)) {
      try {
        const rawJson = fs.readFileSync(testJsonPath, 'utf8');
        const parsed = JSON.parse(rawJson);
        if (!parsed.questions || !Array.isArray(parsed.questions)) {
          throw new Error("test.json missing questions array");
        }
      } catch (err) {
        errors.push(`[${conceptDir}] test.json validation failed: ${err.message}`);
        conceptHasError = true;
      }
    }

    if (conceptHasError) {
      failedConcepts += 1;
    }
  });
});

console.log("\n=================================");
console.log("📊 VALIDATION REPORT SUMMARY");
console.log("=================================");
console.log(`Total stage concepts found: ${totalConcepts}`);
console.log(`Concepts passing standards: ${totalConcepts - failedConcepts}`);
console.log(`Concepts with errors:       ${failedConcepts}`);

if (errors.length > 0) {
  console.log("\n❌ Detailed Compliance Failures:");
  errors.forEach(err => console.log(`  - ${err}`));
  process.exit(1);
} else {
  console.log("\n✨ Success! All concepts are fully compliant with repo specifications.");
  process.exit(0);
}
