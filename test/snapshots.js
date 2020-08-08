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
    pages.push(`${c}/${s.id}`);
  }
}

const percyCSS = `iframe, g.pulses, x-gesture { display: none !important; }`

PercyScript.run(async (page, percySnapshot) => {
  for (const p of pages) {
    await page.goto(`http://localhost:5000/${p}#full`);
    await percySnapshot(`${p}-en`, {widths: [1200, 374], percyCSS});
  }
});
