// =============================================================================
// Code Editor Component
// (c) Mathigon
// =============================================================================


/* global CodeMirror */
import { CustomElement, registerElement, script, $N, $ } from '@mathigon/boost';

const SCRIPT_URL = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.47.0/codemirror.min.js';
const STYLE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.47.0/codemirror.min.css';
const MODES_URL = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.47.0/mode/abc/abc.min.js';
const THEME_URL = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.47.0/theme/abc.min.css';

const PROMISES = {};

function loadCSS(href) {
  if (PROMISES[href]) return;
  PROMISES[href] = Promise.resolve();
  $N('link', {rel: 'stylesheet', type: 'text/css', href}, $(document.head));
}

function loadJS(src) {
  if (!PROMISES[src]) PROMISES[src] = script(src);
  return PROMISES[src];
}

async function loadCodeMirror($el) {
  loadCSS(STYLE_URL);
  await loadJS(SCRIPT_URL);

  const mode = $el.attr('mode') || 'javascript';
  await loadJS(MODES_URL.replace(/abc/g, mode));

  const theme = $el.attr('theme') || 'default';
  if (theme !== 'default') loadCSS(THEME_URL.replace('abc', theme));

  return [mode, theme];
}

// -----------------------------------------------------------------------------

export class CodeEditor extends CustomElement {

  async ready() {
    const $textarea = this.$('textarea');

    const readOnly = this.hasAttr('readonly');
    if (readOnly) $textarea.setAttr('readonly', true);

    const height = this.attr('height') || $textarea.value.split('\n').length || 10;
    if (height) this.css('height', height * 27 + 5 + 'px');

    const [mode, theme] = await loadCodeMirror(this);

    const cm = CodeMirror.fromTextArea($textarea._el,
        {lineNumbers: true, readOnly, mode, theme});

    let text = cm.getValue();

    cm.on('change', () => {
      const newText = cm.getValue() || '';
      if (text === newText) return;
      text = newText;
      this.trigger('type', {text})
    });
  }

}


// -----------------------------------------------------------------------------

export class CodeChecker extends CustomElement {

  async ready() {
    const $textareas = this.$$('textarea');
    if ($textareas.length !== 2)
      throw new Error('Code Checker elements need to contain two <textarea>s.');

    const $editor1 = $N('div', {class: 'editor'}, this);
    const $editor2 = $N('div', {class: 'editor', style: 'display: none'}, this);

    const height = this.attr('height') || 10;
    if (height) {
      $editor1.css('height', height * 27 + 5 + 'px');
      $editor2.css('height', height * 27 + 5 + 'px');
    }

    $editor1.append($textareas[0]);
    $editor2.append($textareas[1]);

    const [mode, theme] = await loadCodeMirror(this);

    const cm1 = CodeMirror.fromTextArea($textareas[0]._el, {lineNumbers: true, mode, theme});
    const cm2 = CodeMirror.fromTextArea($textareas[1]._el, {readOnly: true, mode, theme});

    let state = 0;
    const $button = $N('button', {class: 'btn btn-red', text: 'Reveal Solution'}, this);

    $button.on('click', () => {
      if (state === 0) {
        $button.text = 'Continue';
        $editor2.show();
        cm1.refresh();
        cm2.refresh();
      } else if (state === 1) {
        $button.exit('pop');
        this.trigger('continue');
      }
      state += 1;
    });
  }
}

// -----------------------------------------------------------------------------

registerElement('x-code-editor', CodeEditor);
registerElement('x-code-checker', CodeChecker);
