// =============================================================================
// Demo
// (c) Mathigon
// =============================================================================


import '../shared/components/code-editor';


export function codeStep($step) {
  const $editor = $step.$('x-code-editor');

  $editor.on('type', ({text}) => {
    const str = text.toLowerCase();

    if (str.indexOf('love') >= 0) {
      $step.addHint('code-hint', {variables: {word: 'love'}});
    }

    if (str.indexOf('mathigon') >= 0) {
      $step.addHint('correct');
      $step.score('type-mathigon');
    }
  });
}

export function step2() {
  // ...
}

export function step3() {
  // ...
}
