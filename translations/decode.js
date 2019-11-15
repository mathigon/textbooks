// =============================================================================
// Convert text file from Google Translate
// (c) Mathigon
// =============================================================================


const fs = require('fs');

const CACHE = JSON.parse(fs.readFileSync(__dirname + '/cache.json', 'utf8'));

function replaceTags(text) {
  return text.split('\n').filter(row => !row.startsWith('=====')).join('\n')
      .replace(/{([0-9]+)}/g, (_, n) => CACHE[+n])
      .replace(/{([0-9]+)}/g, (_, n) => CACHE[+n])  // Second pass!
      .replace(/>>>>\s+/g, '')
      .replace(/\s+<<<</g, '')
      .replace(/&quot;/g, '"')
          .replace(/&gt;/g, '>')
          .replace(/&lt;/g, '<');
}

const input = fs.readFileSync(__dirname + '/translate.md', 'utf8');
const output = replaceTags(input);
fs.writeFileSync(__dirname + '/output.md', output);
