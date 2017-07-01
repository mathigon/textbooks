// =============================================================================
// Set Picker Component
// (c) Mathigon
// =============================================================================



import { $N } from '@mathigon/boost';

export function setPicker($set, section, Tutor) {
  let $button = $set.find('button');
  $button.noDisplayChange = true;
  section.addGoals('setpicker');

  let attempts = 0;
  let frozen = false;

  let items = $set.find('.row').children.map(function($item) {
    let obj = { $item, selected: false, valid: $item.hasClass('valid') };
    let $svg = $item.find('svg');

    obj.$check = $N('polyline', { points: '50,62 56,68 70,54', fill: 'none',
      stroke: 'white', 'stroke-width': '3px', style: 'display: none' }, $svg);

    obj.$circle = $N('circle', { cx: 60, cy: 60, r: 16, fill: 'none',
      stroke: 'white', 'stroke-width': '2px', style: 'display: none' }, $svg);

    $item.on('click', function() {
      if (frozen) return;
      obj.selected = !obj.selected;
      obj.$check[obj.selected ? 'enter' : 'exit']('draw', 400);
      $set.addClass('working');
      $item.toggleClass('selected');
    });

    return obj;
  });

  section.on('score-setpicker', function() {
    items.forEach(function(item) {
      if (item.selected && item.valid) {
        item.$circle.enter('draw');
      } else if (item.selected && !item.valid) {
        item.$check.exit('draw', 400);
        item.$item.removeClass('selected');
      } else if (!item.selected && item.valid){
        item.$check.enter('draw', 400);
        item.$item.addClass('selected');
      }
    });

    frozen = true;
    $button.exit('pop');
    $set.css('pointer-events', 'none');
  });

  $button.on('click', function() {
    let mistakes = items.reduce((x, item) => x + (item.selected !== item.valid), 0);

    if (attempts < 2 && mistakes) {
      attempts += 1;
      section.chapter.addHint(mistakes < 4 ? 'You’re almost there!' : 'That doesn’t look right… Try again!');
      $button.html = 'Try again…';
    } else {
      section.chapter.addHint(mistakes ? 'Here is the correct answer…' : Tutor.correct);
      section.score('setpicker');
    }
  });
}
