// =============================================================================
// Convert Markdown file for Google Translate
// (c) Mathigon
// =============================================================================


const marked = require('marked');
const JSDom = require('jsdom').JSDOM;
let originalP = undefined;  // Caching of unparsed paragraphs (for blockquotes)


// -----------------------------------------------------------------------------
// Markdown Extensions

let STORE = [];

function storeToken(string) {
  STORE.push(string);
  return `<img sx="${STORE.length - 1}"/>`;
}

function storeTag(start, text, end) {
  STORE.push(start, end);
  return `<span sx="${STORE.length - 2}">${text}</span>`;
}

function parseParagraph(text) {
  return text.replace(/\s+/g, ' ')
      .replace(/\[\[([^\]]+)]]/g, (x, body) =>
          storeTag('[[', body.split('|').join(storeToken('|')), ']]'))
      .replace(/\${([^}]+)}{([^}]+)}/g, storeToken)
      .replace(/\${([^}]+)}(?!<\/x-var>)/g, storeToken)
      .replace(/:\w+:/, storeToken);
}

const renderer = new marked.Renderer();

renderer.link = function(href, title, text) {
  return storeTag('[', text, `](${href})`);
};

renderer.heading = function(text, level) {
  return storeToken('#'.repeat(level)) + ' ' + text + '\n\n';
};

renderer.codespan = function(code) {
  return storeToken('`' + code + '`');
};

renderer.blockquote = function() {
  return storeToken(originalP.split('\n').map(x => '> ' + x).join('\n')) + '\n\n';
};

renderer.hr = function() {
  return storeToken('---') + '\n\n';
};

renderer.code = function(code) {
  return storeToken(code.split('\n').map(x => '    ' + x).join('\n')) + '\n\n';
};

renderer.list = function(text) {
  return text + '\n\n';
};

renderer.listitem = function(text) {
  return '* ' + parseParagraph(text) + '\n';
};

renderer.paragraph = function(text) {
  originalP = text;
  return parseParagraph(text) + '\n\n';
};

renderer.strong = function(text) {
  return storeTag('__', text, '__');
};

renderer.em = function(text) {
  return storeTag('_', text, '_');
};

// -----------------------------------------------------------------------------

module.exports.encode = function(content) {
  STORE = [];

  // Block Indentation
  content = content.split('\n').map((line) => {
    if (!line.startsWith(':::')) return line;
    return '\n\n' + storeToken(line) + '\n\n'
  }).join('\n');

  // Parse Markdown (but override HTML detection)
  const lexer = new marked.Lexer();
  lexer.tokenizer.rules.block.html = /^<.*[\n]{2,}/;
  const tokens = lexer.lex(content);
  let parsed = marked.Parser.parse(tokens, {renderer});

  // Parse custom element attributes and whitespace
  parsed = parsed.replace(/{([^}]+)}/g, storeToken).replace(/&nbsp;/g, ' ');

  // Split into sections of length at most 5000.
  const output = [''];
  for (const row of parsed.split(/\n\n+/)) {
    if (output[output.length - 1].length + row.length < 4950) {
      output[output.length - 1] += '<p sx>' + row + '</p>'
    } else {
      output.push('<p sx>' + row + '</p>');
    }
  }

  return [output, STORE];
};

// -----------------------------------------------------------------------------

function toString(element, STORE) {
  if (element.nodeName === '#text') return element.textContent;

  const body = Array.from(element.childNodes).map(c => toString(c, STORE)).join('');
  const key = +element.getAttribute('sx');

  if (element.matches('img[sx]')) return STORE[key];
  if (element.matches('span[sx]')) return STORE[key] + body.trim() + STORE[key + 1];
  if (element.matches('p[sx]')) return body;

  const clone = element.cloneNode();
  clone.innerHTML = '?x?'
  return clone.outerHTML.replace('?x?', body.trim());
}

module.exports.decode = function decode(text, STORE) {
  const body = (new JSDom(text)).window.document.body;
  let output = Array.from(body.querySelectorAll('p[sx]'))
      .map(p => toString(p, STORE)).join('\n\n');

  // Clean up syntax and special characters
  output = output.replace(/\n\n+/g, '\n\n').replace(/---\n\n>/g, '---\n>')
      .replace(/&quot;/g, '"').replace(/&gt;/g, '>').replace(/&lt;/g, '<')
      .replace(/'/g, '\'').replace(/\s°/g, '°').replace(/\s*<br>\s*/g, '  \n')
      .trim() + '\n';

  // Remove comments
  output = output.split('\n').filter(s => !s.startsWith('    //')).join('\n');

  // Remove leading whitespace
  output = output.split('\n\n').map(s => (s.startsWith(' ') && !s.startsWith('    ')) ? s.slice(1) : s)
      .join('\n\n').replace(/\n\n+/g, '\n\n');

  // TODO Fix tables and lists

  return output;
};
