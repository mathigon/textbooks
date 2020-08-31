import {$N, CustomElementView, ElementView, register, slide} from '@mathigon/boost';
import {Point} from '@mathigon/fermat';

enum SolutionTag {
  A,
  B
}

type SolutionRef =
  | {kind: SolutionTag.A; $el: ElementView; stack: ABStack}
  | {kind: SolutionTag.B; $el: ElementView; stack: ABStack};

class ABCard {
  $el: ElementView;
  commentText?: string;
  stack: ABStack;
  solution: SolutionTag;
  private _originStartPos!: Point;

  constructor($naiveEl: ElementView, stack: ABStack) {
    const $comment = $naiveEl.$('.comment');
    this.commentText = $comment?.text;
    $comment?.remove();
    const $p = $N('p', {text: $naiveEl.text}, $naiveEl);
    $naiveEl.text = '';
    // Not sure why this is needed
    $naiveEl.append($p);
    const solStr = $naiveEl.attr('solution');
    $naiveEl.removeAttr('solution');
    this.solution = solStr == 'a' ? SolutionTag.A : SolutionTag.B;
    this.$el = $naiveEl;
    this._originStartPos = new Point(this.$el.bounds.left, this.$el.bounds.top);
    this.stack = stack;
  }

  get originStartPos() {
    return this._originStartPos;
  }

  set originStartPos(newPos: Point) {
    this._originStartPos = newPos;
  }

}

class ABStack {
  cards: ABCard[]
  top?: ABCard
  $el: ElementView
  kind?: SolutionTag
  onCorrectPlacementFn: string;

  constructor($cards: ElementView[], $parent: ElementView, onCorrectPlacementFn: string, kind?: SolutionTag) {
    this.$el = $N('div', {class: 'stack'}, $parent);
    this.cards = [];
    this.addCardEls($cards);
    this.kind = kind;
    this.onCorrectPlacementFn = onCorrectPlacementFn;
  }

  addCardEls($cards: ElementView[]) {
    $cards.forEach($card => {
      this.addCard(new ABCard($card, this));
    });
  }

  addCard(card: ABCard) {
    if (card.commentText != undefined && card.solution == this.kind) {
      const win = window as any;
      const onCorrect = win[this.onCorrectPlacementFn];
      if (typeof onCorrect === 'function') {
        onCorrect(card.commentText);
      }
    }
    this.cards.forEach(card => card.$el.removeClass('top-card'));
    if (card.stack != this) {
      card.stack.removeTop();
      card.stack = this;
    }
    this.$el.append(card.$el);
    this.cards.push(card);
    this.top = card;
    card.$el.addClass('top-card');
  }

  removeTop() {
    const _ = this.cards.pop();
    if (this.cards.length > 0) {
      this.cards[this.cards.length - 1].$el.addClass('top-card');
    }
  }

  lockTop() {
    if (this.top != undefined) {
      this.top.$el.addClass('locked');
    }
  }

  unlockTop() {
    if (this.top != undefined) {
      this.top.$el.removeClass('locked');
    }
  }

}

@register('x-ab', {attributes: ['a-title', 'b-title', 'oncorrect']})
export class AB extends CustomElementView {

  private cards!: ABCard[];
  private stacks!: ABStack[];

  ready() {

    this.stacks = [];

    const onCorrectName = this.attr('oncorrect');

    const $bEl = $N('div', {class: 'a-or-b', id: 'b-box'}, this._el._view);
    const bStack = new ABStack([], $bEl, onCorrectName, SolutionTag.B);
    this.stacks.push(bStack);
    const b = {
      kind: SolutionTag.B,
      $el: $bEl,
      stack: bStack
    };
    $N('h3', {text: this.attr('b-title')}, b.$el);

    const $aEl = $N('div', {class: 'a-or-b', id: 'a-box'}, this._el._view);
    const aStack = new ABStack([], $aEl, onCorrectName, SolutionTag.A);
    this.stacks.push(aStack);
    const a = {
      kind: SolutionTag.A,
      $el: $aEl,
      stack: aStack
    };
    $N('h3', {text: this.attr('a-title')}, a.$el);

    const initStack = new ABStack(this.$$('.card'), this.$('.cards')!, onCorrectName);
    this.stacks.push(initStack);

    this.cards = initStack.cards;

    this.cards.forEach(card => {
      slide(card.$el, {
        start: () => {
          document.body.style.cursor = 'grabbing';
          this.stacks.forEach(stack => stack.lockTop());
          card.stack.$el.addClass('move-candidate');
          card.originStartPos = new Point(card.$el.parent!.bounds.left, card.$el.parent!.bounds.top);
          card.$el.addClass('active');
        },
        move: (currentPos: Point, startPos: Point) => {
          const mouseCardDelta = startPos.subtract(card.originStartPos);
          const cornerGlobal = currentPos.subtract(mouseCardDelta);
          const cornerRelative = cornerGlobal.subtract(card.originStartPos).scale(1, 0.25);
          card.$el.css('left', cornerRelative.x + 'px');
          card.$el.css('top', cornerRelative.y + 'px');
        },
        end: (endPos) => {
          document.body.style.removeProperty('cursor');
          if (within(endPos, b.$el.bounds)) {
            this.stackCard(card, b);
          } else if (within(endPos, a.$el.bounds)) {
            this.stackCard(card, a);
          } else {
            card.$el.removeClass('active');
            this.stacks.forEach(stack => stack.unlockTop());
            card.$el.animate({left: '0px', top: '0px'}, 600);
          }
        }
      });
    });

  }

  stackCard(card: ABCard, choice: SolutionRef) {
    const newStackOrigin = new Point(choice.stack.$el.bounds.left, choice.stack.$el.bounds.top);
    const placementVector = newStackOrigin.subtract(card.originStartPos);
    card.$el.animate({left: placementVector.x + 'px', top: placementVector.y + 'px'}, 600).promise.then(() => {
      card.$el.removeClass('active');
      card.$el.addClass('placing');
      this.stacks.forEach(stack => stack.unlockTop());
      choice.stack.addCard(card);
      card.$el.css('top', '0px');
      card.$el.css('left', '0px');
      card.$el.removeClass('placing');
    });
  }

}

function within(location: Point, area: DOMRect) {
  const withinX = location.x >= area.left && location.x <= area.right;
  const withinY = location.y >= area.top && location.y <= area.bottom;
  return withinX && withinY;
}
