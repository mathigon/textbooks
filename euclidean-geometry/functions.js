// =============================================================================
// Euclidean Geometry
// (c) Mathigon
// =============================================================================



import { Point } from '@mathigon/fermat';
import { $N, Draggable, slide } from '@mathigon/boost';

// -----------------------------------------------------------------------------

export function thales($step) {
  const $geopad = $step.$('x-geopad');

  $geopad.setActiveTool('point');
  let a = null, b = null, c = null;

  $geopad.on('add:point', function(point) {
    if (!a) {
      a = point.name;
      $step.score('p1');

    } else if (!b) {
      b = point.name;
      $geopad.drawPath(m => m.segment(m[a], m[b]), {animate: 800});
      $geopad.drawPath(`arc(line(${a},${b}).midpoint,${a},Math.PI)`, {name: 'semicirc', animate: 2000, target: 'circumf'});
      $step.score('p2');

    } else if (!c) {
      c = point.name;
      point.project(m => m.semicirc.contract(0.2));
      $geopad.drawPath(m => m.triangle(m[a], m[c], m[b]), {animate: 2000, target: 'triangle', classes: 'red'});
      $geopad.drawPath(m => m.angle(m[a], m[c], m[b]), {animate: 500, target: 'angle', classes: 'red thin'});
      $step.score('p3');
      $geopad.setActiveTool('move');
      $step.model.watch(() => setTimeout(() => $step.score('move'), 1000), true);
    }
  });
}

// -----------------------------------------------------------------------------

export function congruence($step) {
  const $svg = $step.$('.congruence');
  const $lines = $svg.$('.lines');
  const $groups = $svg.$$('.obj');
  const centers = $groups.map($g => $g.center);
  const colours = {a: '#ff941f', b: '#cc3450', c: '#9a1882', d: '#3866e6',
    e: '#289782', f: '#53ae09'};

  let from = null;
  let $line = null;

  slide($svg, {
    start(posn) {
      from = centers.findIndex(c => Point.distance(c, posn) < 40);
      if (from < 0) return;
      $line = $N('line', {}, $lines);
      $line.setLine(centers[from], centers[from]);
    },
    move(posn) {
      if (!$line) return;
      $line.setAttr('x2', posn.x);
      $line.setAttr('y2', posn.y);
    },
    end(posn) {
      if (!$line) return;
      const to = centers.findIndex(c => Point.distance(c, posn) < 40);

      if (to < 0) {
        $line.exit('draw');
        return from = $line = null;
      }

      const ids = [$groups[from].data.q, $groups[to].data.q].sort();
      const isCorrect = ids[0][0] === ids[1][0];
      $step.addHint(isCorrect ? 'correct' : 'incorrect');

      if (!isCorrect) {
        $line.exit('draw');
        return from = $line = null;
      }

      $line.addClass('correct');
      $line.setAttr('x2', centers[to].x);
      $line.setAttr('y2', centers[to].y);

      const c = colours[ids[0][0]];
      $groups[from].css({fill: c, stroke: c});
      $groups[to].css({fill: c, stroke: c});
      $step.score('pair-' + ids.join('-'));

      from = $line = null;
    }
  });

  $step.one('score-pair-e1-e2 score-pair-e1-e3 score-pair-e2-e3',
    () => $step.addHint('more-than-one-congruent'));
}

// -----------------------------------------------------------------------------

export function crane($step) {
  // TODO Check buffering issues

  const $video = $step.$('video');
  const $play = $step.$('.play');
  const $progress = $step.$('.progress');
  const $bar = $step.$('.bar');
  const $steps = $step.$$('.step');

  const drag = new Draggable($step.$('.handle'), $step.$('.progress'), 'x');
  const times = $steps.map($s => +$s.data.t);
  const duration = 234;

  let playing = false;
  let step = 0;

  function setProgress(time) {
    let s = times.findIndex(t => t > time) - 1;
    $bar.css('width', 100 * time / duration + '%');

    if (s < 0) {
      s = times.length - 1;
      $step.score('video');
    }

    if (s !== step) {
      $steps[step].removeClass('active');
      if ($steps[s].css('display') !== 'block') $steps[s].enter('fade', 200);
      $steps[s].addClass('active');
      step = s;
    }
  }

  function updatePosition(x) {
    const time = x / $video.width * duration;
    $video._el.currentTime = time;
    setProgress(time);
  }

  $video.on('timeupdate', () => {
    const time = $video._el.currentTime;
    drag.position = {x: time / duration * $video.width, y: 0};
    setProgress(time);
  });

  $video.on('ended', () => {
    $play.enter('pop', 200);
    playing = false;
  });

  $video.on('click', () => {
    if (playing) {
      $video._el.pause();
      $play.enter('pop', 200);
    } else {
      $video._el.play();
      $play.exit('pop', 200);
    }
    playing = !playing;
  });

  drag.on('drag', () => updatePosition(drag.position.x));

  $progress.on('click', (e) => {
    if (e.target !== $progress._el || !('offsetX' in e)) return;
    e.stopPropagation();
    drag.position = {x: e.offsetX, y: 0};
    updatePosition(e.offsetX);
  });

  for (let $s of $steps)
    $s.on('click', () => updatePosition(+$s.data.t / duration * $video.width));

  $step.on('complete', () => {
    for (let $s of $steps) {
      if ($s.css('display') !== 'block') $s.enter('fade', 200);
    }
  });
}
