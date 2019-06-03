// =============================================================================
// Code Editor Component
// (c) Mathigon
// =============================================================================


/* global CodeMirror */
import { CustomElement, registerElement, script, $N, $ } from '@mathigon/boost';

const BASE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.47.0/';
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
  loadCSS(BASE_URL + 'codemirror.min.css');
  await loadJS(BASE_URL + 'codemirror.min.js');

  const mode = $el.attr('mode') || 'javascript';
  await loadJS(BASE_URL + `mode/${mode}/${mode}.min.js`);

  const theme = $el.attr('theme') || 'default';
  if (theme !== 'default') loadCSS(BASE_URL + `theme/${theme}.min.css`);

  return [mode, theme];
}

// -----------------------------------------------------------------------------

export class CodeEditor extends CustomElement {

  async ready() {
    const $textarea = this.$('textarea');

    const readOnly = this.hasAttr('readonly');
    if (readOnly) $textarea.setAttr('readonly', true);

    const height = this.attr('height') || $textarea.value.split('\n').length || 10;
    this.css('height', height * 27 + 4 + 'px');

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
    $editor1.css('height', height * 27 + 4 + 'px');
    $editor2.css('height', height * 27 + 4 + 'px');

    $editor1.append($textareas[0]);
    $editor2.append($textareas[1]);

    const [mode, theme] = await loadCodeMirror(this);

    const cm1 = CodeMirror.fromTextArea($textareas[0]._el,
        {lineNumbers: true, mode, theme});

    const cm2 = CodeMirror.fromTextArea($textareas[1]._el,
        {readOnly: true, mode, theme});

    let state = 0;
    const $button = $N('button',
        {class: 'btn btn-red', text: 'Reveal Solution'}, this);

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
