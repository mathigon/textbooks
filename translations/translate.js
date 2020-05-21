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
const yaml = require('yamljs');
const {encode, decode} = require('./parsing');
const {Translate} = require('@google-cloud/translate').v2;

const ROOT = path.join(__dirname, '../content');
const SHARED = ROOT + '/shared'

const translate = new Translate({keyFilename: path.join(__dirname, KEY)});
const fields = {'bios': ['bio'], 'glossary': ['text', 'title']};


async function loadFromGoogle(string, lang) {
  const id = lang.replace('cn', 'zh-CN');  // Special language codes...
  const result = await translate.translate(string, id);
  return Array.isArray(result) ? result[0] : result;
}

async function shared(type) {
  const original = yaml.load(SHARED + `/${type}.yaml`);

  for (const l of LANGUAGES) {
    console.log(`>> Generating ${l} translations for ${type}...`);
    const file = SHARED + `/translations/${type}_${l}.yaml`;
    const local = fs.existsSync(file) ? yaml.load(file) : {};

    for (const [key, en] of Object.entries(original)) {
      if (local[key]) continue;
      local[key] = Object.assign({}, en);
      for (const field of fields[type]) {
        // TODO Fix embedded markdown
        if (en[field]) local[key][field] = await loadFromGoogle(en[field], l);
      }
    }

    fs.writeFileSync(file, yaml.stringify(local));
  }
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

  // await shared('bios');
  // await shared('glossary');

  console.log('DONE!');
}

run();
