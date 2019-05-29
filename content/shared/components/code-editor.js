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

// -----------------------------------------------------------------------------

export class CodeEditor extends CustomElement {

  async ready() {
    const $textarea = this.$('textarea');

    const readOnly = this.hasAttr('readonly');
    if (readOnly) $textarea.setAttr('readonly', true);

    const height = this.attr('height') || null;
    if (height) this.css('height', height * 27 + 5 + 'px');

    loadCSS(STYLE_URL);
    await loadJS(SCRIPT_URL);

    const mode = this.attr('mode') || 'javascript';
    await loadJS(MODES_URL.replace(/abc/g, mode));

    const theme = this.attr('theme') || 'default';
    if (theme !== 'default') loadCSS(THEME_URL.replace('abc', theme));

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

registerElement('x-code-editor', CodeEditor);
