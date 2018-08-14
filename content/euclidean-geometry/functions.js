// =============================================================================
// Euclidean Geometry
// (c) Mathigon
// =============================================================================



import { wait } from '@mathigon/core';
import { Point, nearlyEquals } from '@mathigon/fermat';
import { $N, Draggable, slide } from '@mathigon/boost';

// -----------------------------------------------------------------------------

export function thales($step) {
  const $geopad = $step.$('x-geopad');

  $geopad.showGesture('point(200,160)');

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
      $geopad.on('moveEnd', () => $step.score('move'));
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

export function tools($step) {
  const $geopads = $step.$$('x-geopad');
  const names = ['l1', 'c1'];

  $geopads.forEach(($g, i) => {
    const $play = $g.$('.play-btn');
    $play.on('click', () => {
      $play.exit('pop');
      wait(500)
        .then(() => $g.animateConstruction(names[i]))
        .then(() => {
          $play.enter('pop');
          $step.score('play-' + names[i]);
        });
    });
  });
}

// -----------------------------------------------------------------------------

export function equilateral($step) {
  const $geopad = $step.$('x-geopad');

  $geopad.setActiveTool('line');
  $geopad.showGesture('point(60,200)', 'point(260,200)');
  let segment0 = null;

  $geopad.on('add:path', function(path) {
    if (!path.val) return;

    if (path.val.p1 && path.val.p2) {
      if (!segment0) {
        segment0 = path;
        path.$el.setAttr('target', 'a b');
        $geopad.setActiveTool('circle');
        $geopad.animatePoint(path.points[0].name, new Point(60, 260));
        $geopad.animatePoint(path.points[1].name, new Point(260, 260));
        return $step.score('segment0')

      } else if (nearlyEquals(segment0.val.length, path.val.length)) {
        if (path.val.p1.equals(segment0.val.p1) || path.val.p2.equals(segment0.val.p1)) {
          path.$el.setAttr('target', 'a');
          return $step.score('segment1');
        } else if (path.val.p1.equals(segment0.val.p2) || path.val.p2.equals(segment0.val.p2)) {
          path.$el.setAttr('target', 'b');
          return $step.score('segment2');
        }
      }

    } else if (segment0 && path.val.c && path.val.r) {
      if (nearlyEquals(segment0.val.length, path.val.r)) {
        if (path.val.c.equals(segment0.val.p1)) {
          return $step.score('circle1')
        } else if (path.val.c.equals(segment0.val.p2)) {
          return $step.score('circle2')
        }
      }
    }

    $step.addHint('incorrect');
    path.remove();
  });

  $geopad.on('add:point', path => { if (segment0) path.remove(); });
  $step.onScore('circle1 circle2', () => $geopad.setActiveTool('line'));
  $step.onScore('segment1 segment2', () => $geopad.setActiveTool('move'));
}

// -----------------------------------------------------------------------------

export function crane($step) {
  const $video = $step.$('x-video');
  const $steps = $step.$$('.step');

  const times = $steps.map($s => +$s.data.t);
  let step = 0;

  $video.on('timeupdate', (time) => {
    let s = times.findIndex(t => t > time) - 1;

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
  });

  for (let $s of $steps) $s.on('click', () => $video.setTime(+$s.data.t));

  $step.on('complete', () => {
    for (let $s of $steps) {
      if ($s.css('display') !== 'block') $s.enter('fade', 200);
    }
  });
}

function scoreOnVideo($step) {
  $step.$('x-video').on('end', () => $step.score('video'));
}

export const origamiApplications = scoreOnVideo;
export const origamiApplications1 = scoreOnVideo;
export const origamiApplications3 = scoreOnVideo;
