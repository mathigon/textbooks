// =============================================================================
// Mathigon Snapshot Tests
// (c) Mathigon
// =============================================================================


const PercyScript = require('@percy/script');
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');


const coursesFile = path.join(__dirname, '../curriculum.yaml');
const curriculum = yaml.safeLoad(fs.readFileSync(coursesFile, 'utf8'));

const pages = [];
for (const c of Object.keys(curriculum)) {
  const file = path.join(__dirname, '../build', c, `data_en.json`);
  if (!fs.existsSync(file)) continue;
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const s of data.sections) {
    if (s.status !== 'dev') pages.push(`${c}/${s.id}`);
  }
}

// TODO Percy breaks lots of inline CSS styles...
const percyCSS = `iframe, g.pulses, x-gesture, .popup { display: none !important; }`;

PercyScript.run(async (page, percySnapshot) => {
  for (const p of pages) {
    await page.goto(`http://localhost:5000/course/${p}#full`);
    await percySnapshot(`${p}`, {widths: [1200], percyCSS});
  }
});
