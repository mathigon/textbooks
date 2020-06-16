// =============================================================================
// Convert Markdown file for Google Translate
// (c) Mathigon
// =============================================================================


const marked = require('marked');
let originalP = undefined;  // Caching of unparsed paragraphs (for blockquotes)


// -----------------------------------------------------------------------------
// Markdown Extensions

let STORE = [];

function store(string) {
  STORE.push(string);
  return `{${STORE.length - 1}}`;
}

function parseParagraph(text) {
  return text.replace(/\s+/g, ' ')
      .replace(/\[\[([^\]]+)]]/g, (x, body) => {
        const options = body.split('|');
        const end = '<<<<' + (options.length > 1 ? '|' : '') + options.slice(1).join('|') + ']]';
        return `${store('[[>>>>')} ${options[0]} ${store(end)}`;
      })
      .replace(/\${([^}]+)}{([^}]+)}/g, store)
      .replace(/\${([^}]+)}(?!<\/x-var>)/g, store)
      .replace(/:\w+:/, store);
}

const renderer = new marked.Renderer();

// The >>>> indicate no whitespace after tags. We can use them to delete
// whitespace that's incorrectly inserted by Google Translate.

renderer.link = function (href, title, text) {
  return store('[>>>>') + text + store(`<<<<](${href})`);
};

renderer.heading = function (text, level) {
  return store('#'.repeat(level)) + ' ' + text + '\n\n';
};

renderer.codespan = function(code) {
  return store('`' + code + '`');
};

renderer.blockquote = function () {
  return store(originalP.split('\n').map(x => '> ' + x).join('\n')) + '\n\n';
};

renderer.hr = function () {
  return store('---') + '\n\n';
};

renderer.code = function (code) {
  return store(code.split('\n').map(x => '    ' + x).join('\n')) + '\n\n';
};

renderer.list = function (text) {
  return text + '\n\n';
};

renderer.listitem = function (text) {
  return '* ' + parseParagraph(text) + '\n';
};

renderer.paragraph = function (text) {
  originalP = text;
  return parseParagraph(text) + '\n\n';
};

renderer.strong = function (text) {
  return store('__>>>>') + text + store('<<<<__');
};

renderer.em = function (text) {
  return store('_>>>>') + text + store('<<<<_');
};

// -----------------------------------------------------------------------------

module.exports.encode = function(content) {
  STORE = [];

  // Block Indentation
  content = content.split('\n').map((line) => {
    if (!line.startsWith(':::')) return line;
    return '\n\n' + store(line) + '\n\n'
  }).join('\n');

  // Parse Markdown (but override HTML detection)
  const lexer = new marked.Lexer();
  lexer.rules.html = /^<.*[\n]{2,}/;
  const tokens = lexer.lex(content);
  let parsed = marked.Parser.parse(tokens, {renderer});

  // Parse custom element attributes
  parsed = parsed.replace(/{([^}]+)}/g, (selection, body) => {
    return body.match(/^[0-9]+$/) ? selection : store(selection)
  });

  parsed = parsed.replace(/&nbsp;/g, ' ');

  // Split into sections of length at most 5000.
  const output = [''];
  for (const row of parsed.split(/\n\n/)) {
    if (output[output.length - 1].length + row.length < 4950) {
      output[output.length - 1] += '\n\n' + row
    } else {
      output.push(row);
    }
  }

  return [output, STORE];
};

// -----------------------------------------------------------------------------

module.exports.decode = function decode(text, STORE) {
  return text.split('\n').filter(row => !row.startsWith('=====')).join('\n')
      .replace(/{\s*([0-9]+)\s*}/g, (_, n) => STORE[+n])
      .replace(/{\s*([0-9]+)\s*}/g, (_, n) => STORE[+n])  // Second pass!
      .replace(/{\s*([0-9]+)\s*}/g, (_, n) => STORE[+n])  // Second pass!
      .replace(/>>>>\s+/g, '')
      .replace(/\s+<<<</g, '')
      .replace(/&quot;/g, '"')
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<');
};
