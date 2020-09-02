// =============================================================================
// Binary Choice Component
// (c) Mathigon
// =============================================================================


import {$html, $N, CustomElementView, ElementView, register, slide} from '@mathigon/boost';
import {clamp, Point, Random} from '@mathigon/fermat';

const RESISTANCE = 180000;


function cardOffset(posn: Point, start: Point): [Point, number] {
  const change = posn.subtract(start);
  const angle = clamp(change.x * change.y / RESISTANCE, -0.4, 0.4);
  return [change.scale(1, 0.5), angle];
}


@register('x-binary-swipe', {templateId: '#binary-swipe'})
export class BinarySwipe extends CustomElementView {

  ready() {
    const [$aStacks, $mainStack, $bStack] = this.$$('.stack');
    const [$aTitle, $bTitle] = this.$$('h3');

    $aTitle.text = this.attr('a-title');
    $bTitle.text = this.attr('b-title');

    const $cards = this.$$('.card').reverse().map($c => {
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
        const tooClose = Math.abs(dx) < 100;
        if (tooClose) {
          $activeCard.children[0].removeClass('committed-left');
          $activeCard.children[0].removeClass('committed-right');
        } else {
          if (dx < 0) {
            $activeCard.children[0].addClass('committed-left');
          } else {
            $activeCard.children[0].addClass('committed-right');
          }
        }
      },
      end: async (endPos: Point, startPos: Point) => {
        if (!$activeCard) return;
        $html.removeClass('grabbing');

        const solution = $activeCard._data.solution;
        const dx = endPos.subtract(startPos).x;
        const isCorrect = (dx < 0 && solution === 'a') || (dx > 0 && solution === 'b');
        const tooClose = Math.abs(dx) < 100;

        if (tooClose || !isCorrect) {
          if (!tooClose) this.trigger('incorrect', {hint: $activeCard._data.hint});
          $activeCard.removeClass('dragging');
          $activeCard.children[0].removeClass('committed-left');
          $activeCard.children[0].removeClass('committed-right');
          $activeCard.animate({transform: 'none'}, 300);
          return;
        }

        this.trigger('correct', $activeCard._data.comment);
        const $target = (solution === 'a') ? $aStacks : $bStack;

        let [posn, angle] = cardOffset(endPos, startPos);
        posn = posn.add($mainStack.topLeftPosition).subtract($target.topLeftPosition);
        $activeCard.setTransform(posn, angle);

        $activeCard.children[0].removeClass('committed-left');
        $activeCard.children[0].removeClass('committed-right');

        $target.append($activeCard);
        const deg = Random.uniform(-3, 3);
        $activeCard.animate({transform: `rotate(${deg}deg)`}, 300).promise;
        $activeCard.removeClass('active dragging');

        $activeCard = $cards.pop();
        if ($activeCard) {
          $activeCard.addClass('active');
        } else {
          this.trigger('complete');
        }
        // TODO Show banner once you are done with all cards?
      }
    });
  }
}
