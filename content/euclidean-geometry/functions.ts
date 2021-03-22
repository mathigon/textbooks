// =============================================================================
// Euclidean Geometry
// (c) Mathigon
// =============================================================================


import {Obj} from '@mathigon/core';
import {isLineLike, Point, Segment} from '@mathigon/euclid';
import {$N, slide, SVGView} from '@mathigon/boost';
import {PlayBtn, Step, Video} from '@mathigon/studio';
import {Geopad, GeoPoint, Path} from '../shared/types';


export function thales($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;

  $geopad.showGesture('point(200,160)');

  $geopad.switchTool('point');
  let a = '';
  let b = '';
  let c = '';

  $geopad.on('add:point', ({point}: {point: GeoPoint}) => {
    if (!a) {
      a = point.name;
      $step.score('p1');

    } else if (!b) {
      b = point.name;
      $geopad.drawPath(m => m.segment(m[a], m[b]), {animated: 800});
      $geopad.drawPath(`arc(line(${a},${b}).midpoint,${a},pi)`,
          {name: 'semicirc', animated: 2000, target: 'circumf'});
      $step.score('p2');

    } else if (!c) {
      c = point.name;
      point.project('semicirc.contract(0.2)');
      $geopad.drawPath(m => m.angle(m[b], m[c], m[a]),
          {animated: 500, target: 'angle', classes: 'yellow thin'});
      $geopad.drawPath(m => m.triangle(m[a], m[c], m[b]),
          {animated: 2000, target: 'triangle', classes: 'red'});
      $step.score('p3');
      $geopad.switchTool('move');
      $geopad.on('moveEnd', () => $step.score('move'));
    }
  });
}

// -----------------------------------------------------------------------------

export function congruence($step: Step) {
  const $svg = $step.$('.congruence')!;
  const $lines = $svg.$('.lines');
  const $groups = $svg.$$('.obj') as SVGView[];
  const centers = $groups.map($g => $g.center);
  const colours: Obj<string> = {
    a: '#fd8c00', b: '#eb4726', c: '#6d3bbf',
    d: '#0f82f2', e: '#009ea6', f: '#22ab24'
  };

  let from: number|undefined = undefined;
  let $line: SVGView|undefined = undefined;

  slide($svg, {
    start(posn) {
      from = centers.findIndex(c => Point.distance(c, posn) < 40);
      if (from < 0) return;
      $line = $N('line', {}, $lines) as SVGView;
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

      if (to < 0 || from === to) {
        $line.exit('draw');
        return from = $line = undefined;
      }

      const ids = [$groups[from!].data.q, $groups[to].data.q].sort();
      const isCorrect = ids[0]![0] === ids[1]![0];
      $step.addHint(isCorrect ? 'correct' : 'incorrect');

      if (!isCorrect) {
        $line.exit('draw');
        return from = $line = undefined;
      }

      $line.addClass('correct');
      $line.setAttr('x2', centers[to].x);
      $line.setAttr('y2', centers[to].y);

      const c = colours[ids[0]![0]];
      $groups[from!].css({fill: c, stroke: c});
      $groups[to].css({fill: c, stroke: c});
      $step.score('pair-' + ids.join('-'));

      from = $line = undefined;
    }
  });

  $step.one('score-pair-e1-e2 score-pair-e1-e3 score-pair-e2-e3',
      () => $step.addHint('more-than-one-congruent'));
}

// -----------------------------------------------------------------------------

export function tools($step: Step) {
  const $geopads = $step.$$('x-geopad') as Geopad[];
  const names = ['l1', 'c1'];

  $geopads.forEach(($g, i) => {
    const $play = $g.$('x-play-btn') as PlayBtn;
    $play.on('play', () => {
      $g.animateConstruction(names[i])
          .then(() => {
            $play.reset();
            $step.score('play-' + names[i]);
          });
    });
  });
}

// -----------------------------------------------------------------------------

export async function equilateral($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const drawingOptions = {onIncorrect: () => $step.addHint('incorrect')};

  $geopad.switchTool('line');
  $geopad.showGesture('point(60,200)', 'point(260,200)');

  // Draw the base of the triangle.
  const s0 = await $geopad.waitForPath<Segment>((p: Path) => isLineLike(p),
      drawingOptions);

  s0.$el.setAttr('target', 'a b');
  $geopad.animatePoint(s0.components[0].name, new Point(60, 260));
  $geopad.animatePoint(s0.components[1].name, new Point(260, 260));
  $geopad.switchTool('circle');
  $step.score('segment0');

  // Draw the two circles
  const [c1, c2] = await $geopad.waitForPaths([
    `circle(${s0.name}.p1,distance(${s0.name}.p1,${s0.name}.p2))`,
    `circle(${s0.name}.p2,distance(${s0.name}.p1,${s0.name}.p2))`
  ], drawingOptions);

  $step.score('circle1');
  $step.score('circle2');
  $geopad.switchTool('line');

  // Draw the two side segments
  const [s1, s2] = await $geopad.waitForPaths<Segment>([
    `segment(${s0.name}.p1,intersections(${c1.name},${c2.name})[0])`,
    `segment(${s0.name}.p2,intersections(${c1.name},${c2.name})[0])`
  ], drawingOptions);

  s1.$el.setAttr('target', 'a');
  s2.$el.setAttr('target', 'b');
  $step.score('segment1');
  $step.score('segment2');
  $geopad.switchTool('move');
}

// -----------------------------------------------------------------------------

export function crane($step: Step) {
  const $video = $step.$('x-video') as Video;
  const $steps = $step.$$('.step');

  const times = $steps.map($s => +$s.data.t!);
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

  for (const $s of $steps) $s.on('click', () => $video.setTime(+$s.data.t!));

  $step.on('complete', () => {
    for (const $s of $steps) {
      if ($s.css('display') !== 'block') $s.enter('fade', 200);
    }
  });
}

function scoreOnVideo($step: Step) {
  $step.$('x-video')!.on('end', () => $step.score('video'));
}

export const origamiApplications = scoreOnVideo;
export const origamiApplications3 = scoreOnVideo;
export const origamiApplications4 = scoreOnVideo;
export const origamiWings = scoreOnVideo;
export const origamiDna = scoreOnVideo;
