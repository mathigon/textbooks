// =============================================================================
// Convert Markdown file for Google Translate
// (c) Mathigon
// =============================================================================


const fs = require('fs');
const marked = require('marked');
let originalP = null;  // Caching of unparsed paragraphs (for blockquotes)


const CACHE = [];

function encode(string) {
  CACHE.push(string);
  return `{${CACHE.length - 1}}`;
}


// -----------------------------------------------------------------------------
// Markdown Extensions

function parseParagraph(text) {
  return text.replace(/\s+/g, ' ')
      .replace(/\[\[([^\]]+)]]/g, (x, body) => {
        const options = body.split('|');
        const end = '<<<<' + (options.length > 1 ? '|' : '') + options.slice(1).join('|') + ']]';
        return `${encode('[[>>>>')} ${options[0]} ${encode(end)}`;
      })
      .replace(/\${([^}]+)}{([^}]+)}/g, encode)
      .replace(/\${([^}]+)}(?!<\/x-var>)/g, encode)
      .replace(/:\w+:/, encode);
}

const renderer = new marked.Renderer();

// The >>>> indicate no whitespace after tags. We can use them to delete
// whitespace that's incorrectly inserted by Google Translate.

renderer.link = function (href, title, text) {
  return encode('[>>>>') + text + encode(`<<<<](${href})`);
};

renderer.heading = function (text, level) {
  return encode('#'.repeat(level)) + ' ' + text + '\n\n';
};

renderer.codespan = function(code) {
  return encode('`' + code + '`');
};

renderer.blockquote = function () {
  return encode(originalP.split('\n').map(x => '> ' + x).join('\n')) + '\n\n';
};

renderer.hr = function () {
  return encode('---') + '\n\n';
};

renderer.code = function (code) {
  return encode(code.split('\n').map(x => '    ' + x).join('\n')) + '\n\n';
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
  return encode('__>>>>') + text + encode('<<<<__');
};

renderer.em = function (text) {
  return encode('_>>>>') + text + encode('<<<<_');
};


// -----------------------------------------------------------------------------


function parseContent(content) {
  // Block Indentation
  content = content.split('\n').map((line) => {
    if (!line.startsWith(':::')) return line;
    return '\n\n' + encode(line) + '\n\n'
  }).join('\n');

  // Parse Markdown (but override HTML detection)
  const lexer = new marked.Lexer();
  lexer.rules.html = /^<.*[\n]{2,}/;
  const tokens = lexer.lex(content);
  let parsed = marked.Parser.parse(tokens, {renderer});

  // Parse custom element attributes
  parsed = parsed.replace(/{([^}]+)}/g, (selection, body) => {
    return body.match(/^[0-9]+$/) ? selection : encode(selection)
  });

  parsed = parsed.replace(/&nbsp;/g, ' ');

  // Split into sections of length at most 1000.
  const output = [''];
  for (const row of parsed.split(/\n\n/)) {
    if (output[output.length - 1].length + row.length < 4950) {
      output[output.length - 1] += '\n\n' + row
    } else {
      output.push(row);
    }
  }

  return output.join('\n\n===========================================\n\n');
}


const input = fs.readFileSync(__dirname + '/input.md', 'utf8');
const cleaned = parseContent(input);
fs.writeFileSync(__dirname + '/translate.md', cleaned);
fs.writeFileSync(__dirname + '/cache.json', JSON.stringify(CACHE));
