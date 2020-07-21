// =============================================================================
// Auto-translate Courses using Google Translate
// (c) Mathigon
// =============================================================================


// ======== EDIT THESE VALUES ========
const KEY = `../../mathigon.org/data/service-account.json`;
const COURSES = ['circles', 'fractals', 'graph-theory', 'polyhedra', 'transformations'];
const LANGUAGES = ['ar', 'az', 'cn', 'de', 'es', 'fr', 'hi', 'hr', 'it', 'ja',
  'pt', 'ro', 'ru', 'sv', 'tr', 'vi'];
// ===================================


const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const {encode, decode} = require('./parsing');
const {Translate} = require('@google-cloud/translate').v2;

const ROOT = path.join(__dirname, '../content');
const SHARED = ROOT + '/shared'
const Google = new Translate({keyFilename: path.join(__dirname, KEY)});


async function loadFromGoogle(string, lang) {
  const id = lang.replace('cn', 'zh-CN');  // Special language codes...
  const result = await Google.translate(string, id);
  return Array.isArray(result) ? result[0] : result;
}

async function translate(string, lang) {
  if (!string) return '';
  const [str, store] = encode(string);
  return decode(await loadFromGoogle(str[0], lang), store).trim();
}

// -----------------------------------------------------------------------------

async function shared(type, lang, fields) {
  const enFile = fs.readFileSync(SHARED + `/${type}.yaml`, 'utf8');
  const en = yaml.safeLoad(enFile);
  const intro = enFile.split('\n').slice(0, 5).join('\n');

  const file = SHARED + `/translations/${type}_${lang}.yaml`;
  const source = (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '')
      .replace(/: \|/g, ': >');  // Fix newline characters

  const output = {};
  const local = yaml.safeLoad(source) || {};

  for (const key of Object.keys(en)) {
    output[key] = Object.assign({}, local[key] || en[key]);
    if (key in local) continue;

    if (fields) {
      // Specific fields for bios and glossary
      for (const f of fields) output[key][f] = await translate(en[key][f], lang);
    } else if (Array.isArray(en[key])) {
      // Hints with arrays
      output[key] = await Promise.all(en[key].map(k => translate(k, lang)));
    } else {
      // Hints without arrays
      output[key] = await translate(en[key], lang)
    }
  }

  // TODO Fix newlines between lists and bullets in Markdown.
  const result = yaml.safeDump(output, {lineWidth: 100})
      .replace(/: [|>]-?/g, ': |')  // Fix newline characters
      .replace(/\n\n+/g, '\n\n')
      .replace(/\n(\w)/g, '\n\n$1');
  fs.writeFileSync(file, intro + result);
}

// -----------------------------------------------------------------------------

async function run() {
  for (const c of COURSES) {
    const source = fs.readFileSync(`${ROOT}/${c}/content.md`, 'utf8');
    const [items, store] = encode(source);

    for (const l of LANGUAGES) {
      if (fs.existsSync(`${ROOT}/${c}/translations/content_${l}.md`)) continue;
      console.log(`>> Generating ${l} translations for ${c}...`);

      let translated = '';
      for (const i of items) translated += (await loadFromGoogle(i, l));

      const output = decode(translated, store);
      fs.writeFileSync(`${ROOT}/${c}/translations/content_${l}.md`, output);
    }
  }

  for (const l of LANGUAGES) {
    console.log(`>> Generating ${l} translations for shared files...`);
    // await shared('bios', l, ['bio']);
    // await shared('glossary', l, ['text', 'title']);
    // await shared('hints', l);
  }

  console.log('DONE!');
}

run();
