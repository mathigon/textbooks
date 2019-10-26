// =============================================================================
// Convert text file from Google Translate
// (c) Mathigon
// =============================================================================



const fs = require('fs');

const CACHE = JSON.parse(fs.readFileSync(__dirname + '/cache.json', 'utf8'));

function replaceTags(text) {
  text = text.split('\n').filter(row => !row.startsWith('=====')).join('\n');
  return text.replace(/{([0-9]+)}/g, (_, n) => CACHE[+n]);
}

const input = fs.readFileSync(__dirname + '/translate.md', 'utf8');
const output = replaceTags(input);
fs.writeFileSync(__dirname + '/output.md', output);
