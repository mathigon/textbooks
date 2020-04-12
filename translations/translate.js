// =============================================================================
// Auto-translate Courses using Google Translate
// (c) Mathigon
// =============================================================================


// ======== EDIT THESE VALUES ========
const KEY = `../../mathigon.org/data/service-account.json`;
const COURSES = ['fractals'];
const LANGUAGES = ['ar', 'cn', 'de', 'es', 'fr', 'hi', 'it', 'ja', 'pt', 'ru',
  'sv', 'tr', 'vi', 'mr'];
// ===================================


const fs = require('fs');
const path = require('path');
const {encode, decode} = require('./parsing');
const {Translate} = require('@google-cloud/translate').v2;

const ROOT = path.join(__dirname, '../content');
const translate = new Translate({keyFilename: path.join(__dirname, KEY)});

async function loadFromGoogle(string, lang) {
  const id = lang.replace('cn', 'zh-CN');  // Special language codes...
  const result = await translate.translate(string, id);
  return Array.isArray(result) ? result[0] : result;
}

async function run() {
  for (const c of COURSES) {
    const source = fs.readFileSync(`${ROOT}/${c}/content.md`, 'utf8');
    const [items, store] = encode(source);

    for (const l of LANGUAGES) {
      if (fs.existsSync(`${ROOT}/${c}/translations/content_${l}.md`)) continue;
      console.log(`>> Generating ${l} translations for ${c}...`);

      let translated = '';
      for (const i of items) translated += (await loadFromGoogle(i, l)) + '\n\n';

      const output = decode(translated, store).trim() + '\n';
      fs.writeFileSync(`${ROOT}/${c}/translations/content_${l}.md`, output);
    }
  }

  console.log('DONE!');
}

run();
