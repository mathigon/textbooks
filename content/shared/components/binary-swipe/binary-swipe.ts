// =============================================================================
// Binary Choice Component
// (c) Mathigon
// =============================================================================


import {$html, $N, CustomElementView, ElementView, register, slide} from '@mathigon/boost';
import {clamp, Random} from '@mathigon/fermat';
import {Point} from '@mathigon/euclid';
import template from './binary-swipe.pug';


const RESISTANCE = 180000;
const MIN_MOVE = 100;

const colorClasses = [
  'c-red', 'c-orange', 'c-yellow', 'c-lime',
  'c-green', 'c-teal', 'c-blue', 'c-purple'
];


function cardOffset(posn: Point, start: Point): [Point, number] {
  const change = posn.subtract(start);
  const angle = clamp(change.x * change.y / RESISTANCE, -0.4, 0.4);
  return [change.scale(1, 0.5), angle];
}

/**
 * 'tinder'-style left-right swipe component.
 *
 * @fires BinarySwipe#correct
 * @fires BinarySwipe#incorrect
 * @fires BinarySwipe#complete
 */
@register('x-binary-swipe', {template})
export class BinarySwipe extends CustomElementView {

  ready() {
    const [$aStacks, $mainStack, $bStack] = this.$$('.stack');
    const [$aTitle, $bTitle] = this.$$('h3');

    $aTitle.text = this.attr('a-title');
    $bTitle.text = this.attr('b-title');

    const $cards = this.$$('.card').reverse().map(($c, index) => {
      if (colorClasses.every(color => !$c.hasClass(color))) {
        $c.addClass(colorClasses[index % colorClasses.length]);
      }
      const $wrap = $N('div', {class: 'card-wrap'}, $mainStack);
      $wrap.append($c);
      $wrap._data.solution = $c.attr('solution');
      $wrap._data.hint = $c.attr('hint') || 'incorrect';
      $wrap._data.comment = $c.attr('comment') || 'correct';
      $c.removeAttr('solution');
      $c.removeAttr('hint');
      $c.removeAttr('comment');
      return $wrap;
    });

    let $activeCard: ElementView|undefined = $cards.pop()!;
    $activeCard.addClass('active');

    slide($mainStack, {
      start: () => {
        if (!$activeCard) return;
        $html.addClass('grabbing');
        $activeCard.addClass('dragging');
      },
      move: (currentPos: Point, startPos: Point) => {
        if (!$activeCard) return;
        $activeCard.setTransform(...cardOffset(currentPos, startPos));
        const dx = currentPos.subtract(startPos).x;
        if (Math.abs(dx) < MIN_MOVE) {
          $activeCard.removeClass('committed-left committed-right');
        } else {
          $activeCard.addClass(dx < 0 ? 'committed-left' : 'committed-right');
        }
      },
      end: async (endPos: Point, startPos: Point) => {
        if (!$activeCard) return;
        $html.removeClass('grabbing');

        const solution = $activeCard._data.solution;
        const dx = endPos.subtract(startPos).x;
        const isCorrect = (dx < 0 && solution === 'a') || (dx > 0 && solution === 'b');
        const tooClose = Math.abs(dx) < MIN_MOVE;

        if (tooClose || !isCorrect) {
          /**
           * Fires on incorrect answer
           * @event BinarySwipe#incorrect
           * @type {object}
           * @property {string} hint - ID referring to associated hint text
           */
          if (!tooClose) this.trigger('incorrect', {hint: $activeCard._data.hint});
          $activeCard.removeClass('dragging committed-left committed-right');
          $activeCard.animate({transform: 'none'}, 300);
          return;
        }

        /**
         * Fires on correct answer
         * @event BinarySwipe#correct
         * @type {string} The comment ID associated with this card
         */
        this.trigger('correct', $activeCard._data.comment);
        const $target = (solution === 'a') ? $aStacks : $bStack;

        let [posn, angle] = cardOffset(endPos, startPos);
        posn = posn.add($mainStack.topLeftPosition).subtract($target.topLeftPosition);
        $activeCard.setTransform(posn, angle);

        $target.append($activeCard);
        const deg = Random.uniform(-3, 3);
        $activeCard.animate({transform: `rotate(${deg}deg)`}, 300).promise;
        $activeCard.removeClass('active dragging committed-left committed-right');

        $activeCard = $cards.pop();
        if ($activeCard) {
          $activeCard.addClass('active');
        } else {
          /**
         * Fires once all cards have been correctly sorted
         * @event BinarySwipe#complete
         */
          this.trigger('complete');
        }
        // TODO Show banner once you are done with all cards?
      }
    });
  }
}
