// =============================================================================
// Circles and Pi
// (c) Mathigon
// =============================================================================


import {Color, isOneOf, list, Obj, tabulate, wait} from '@mathigon/core';
import {clamp, numberFormat, Random, round, roundTo, toWord} from '@mathigon/fermat';
import {Angle, Point, Polygon, Rectangle, Sector} from '@mathigon/euclid';
import {$N, animate, CanvasView, Draggable, ElementView, hover, InputView, slide, SVGParentView, SVGView} from '@mathigon/boost';
import {Gesture, PlayBtn, Select, Slider, Step} from '@mathigon/studio';

import {Burst} from '../shared/components/burst';
import {ConicSection} from '../shared/components/webgl/conic-section';
import {rotateDisk} from '../shared/components/disk';
import {Solid} from '../shared/components/webgl/solid';
import {loadD3} from './components/d3-geo';
import {EquationSystem, Geopad} from '../shared/types';
import {PiScroll} from './components/pi-scroll';

import '../shared/components/webgl/conic-section';
import '../shared/components/scale-box/scale-box';
import './components/pi-scroll';
import './components/ellipse';


// -----------------------------------------------------------------------------
// Introduction

export function radius($step: Step) {
  const $play = $step.$('x-play-btn')!;
  const $geopad = $step.$('x-geopad') as Geopad;

  $play.one('play', async () => {
    await wait(500);
    await $geopad.animateConstruction('c1');
    $step.score('compass');
    $geopad.$('.red')!.enter('draw-reverse', 1500, 1000);
    $geopad.$('.blue')!.enter('draw-reverse', 2000, 4000);
  });

  $step.onScore('blank-0',
      () => $geopad.$('.green')!.enter('draw-reverse', 2000));
}

export function similar($step: Step) {
  const $svg = $step.$('svg.similar-circles')!;
  const $strokes = $N('g', {}, $svg);
  const burst = new Burst($N('g', {class: 'burst'}, $svg) as SVGParentView, 20);
  const $gesture = $N('x-gesture', {}, $step) as Gesture;

  $N('circle', {class: 'handle fixed', r: 10, cx: 320, cy: 180, style: 'fill: #22ab24'}, $svg);
  $N('circle', {class: 'outline', r: 60, cx: 320, cy: 180, style: 'stroke: #22ab24'}, $strokes);

  const circles = [[140, 120, 100, 0], [220, 300, 40, 1], [500, 240, 120, 2]];
  const isCompleted = [false, false, false];
  let hasShownResizeGesture = false;

  function complete(i: number, $handle: ElementView, $outline: ElementView,
      $outlineHalo: ElementView) {
    if (isCompleted[i]) return;
    isCompleted[i] = true;

    $handle.exit('fade');
    $outline.exit('fade');
    $outlineHalo.exit('fade');
    $step.score('circle-' + i);
    $step.addHint('correct');
    burst.play(1000, [320, 180], [70, 50]);
  }

  for (const c of circles) {
    let rReady = false;
    let cReady = false;

    const $handle = $N('circle', {class: 'handle', r: 10}, $svg);
    const $outlineHalo = $N('circle', {class: 'outline-halo', r: c[2]}, $strokes) as SVGView;
    const $outline = $N('circle', {class: 'outline', r: c[2]}, $strokes) as SVGView;
    const drag = new Draggable($handle, $svg, {snap: 20, useTransform: true});

    drag.on('move', (p) => {
      $outline.setCenter(p);
      $outlineHalo.setCenter(p);
      cReady = (p.x === 320 && p.y === 180);
      if (rReady && cReady) complete(c[3], $handle, $outline, $outlineHalo);
    });

    drag.on('end', () => {
      if (!cReady || rReady || hasShownResizeGesture) return;
      hasShownResizeGesture = true;
      const shift = new Point(-$outline.attr('r'), 0);
      const slide = new Point(+$outline.attr('r') - 60, 0);
      $gesture.setTarget($handle, slide, shift);
      setTimeout(() => $gesture.start(), 1000);
    });

    slide($outlineHalo, {
      move(p) {
        const r = roundTo(p.subtract(drag.position).length, 20);
        $outline.setAttr('r', r);
        $outlineHalo.setAttr('r', r);
        rReady = (r === 60);
        if (rReady && cReady) complete(c[3], $handle, $outline, $outlineHalo);
      }
    });

    drag.setPosition(c[0], c[1]);
  }

  setTimeout(() => {
    const $handles = $svg.$$('.handle');
    $gesture.startSlide($handles[1], $handles[0]);
    $svg.on('click pointerdown', () => $gesture.stop());
  }, 1000);
}

const piString = 'π=3.1415926535897932384626433832795028841971693993751058209' +
                 '749445923078164062862089986280348253421170679821480865132823066470938446' +
                 '095505822317253594081284811174502841027019385211055596446229489549303819' +
                 '644288109756659334461284756482337867831652712019091456485669234603486104' +
                 '543266482133936072602491412737245870066063155881748815209209628292540917' +
                 '153643678925903600113305305488204665213841469519415116094330572703657595' +
                 '919530921861173819326117931051185480744623799627495673518857527248912279' +
                 '381830119491298336733624406566430860213949463952247371907021798609437027' +
                 '705392171762931767523846748184676694051320005681271452635608277857713427' +
                 '577896091736371787214684409012249534301465495853710507922796892589235420…';

export function piDefinition($step: Step) {
  const context = ($step.$('canvas') as CanvasView).ctx;

  const colours = Color.rainbow(161);
  const shift = [0, 0.06, 0.06, -0.06, -0.06];

  function drawDigit(i: number, r: number, a: number) {
    if (i < 5) a += shift[i];  // Fix spacing for = and . symbols
    const point = Point.fromPolar(a, r);

    context.save();
    context.translate(400 + 2 * point.x, 400 + 2 * point.y);
    context.rotate(a + Math.PI / 2);
    context.fillStyle = colours[Math.floor(r)].toString();
    context.font = `${2 * 0.3 * r}px Source Sans Pro, sans-serif`;
    context.textAlign = 'center';
    context.fillText(piString[i], 0, 0);
    context.restore();

    if (i >= piString.length - 1) return;
    setTimeout(() => drawDigit(i + 1, r * 0.992, a + 0.175), 20);
  }

  setTimeout(() => drawDigit(0, 160, -1.8), 1000);
  setTimeout(() => $step.score('digits'), 10000);
}

export function wheel($step: Step) {
  const $svg = $step.$('svg')!;
  const $wheel = $svg.$('.wheel')!;
  const $line = $svg.$('.outline')!;
  const $pi = $svg.$('.pi')!;

  let p = 0.01;
  let done = false;

  function redraw() {
    const a = p * Math.PI;
    const dx = 60 + a * 100;
    const end = Point.fromPolar(2 * a + Math.PI / 2, 50).shift(dx, 55);

    // Note: .setTransform() breaks in Safari because of transform-origin.
    $wheel.css('transform', `translate(${a * 100}px,0) rotate(${2 * a}rad)`);
    $line.setAttr('d', `M ${60} ${105} L ${dx} ${105}` +
                       `A 50 50 0 ${p < 0.5 ? 1 : 0} 0 ${end.x} ${end.y}`);
  }

  slide($wheel, {
    move(posn, start, last) {
      p = clamp(p + (posn.x - last.x) / 314, 0.01, 1);
      redraw();
      if (p > 0.95 && !done) {
        $step.score('unroll');
        $pi.enter('pop');
        done = true;
      }
    },
    accessible: true
  });

  $wheel.css('cursor', 'ew-resize');
  redraw();
}

export function piColours($step: Step) {
  const colours = ['#ff941f', '#e66438', '#cc3450', '#b30469', '#822b9b',
    '#5053cd', '#1f7aff', '#258dab', '#2ba058', '#31b304'];  // TODO New colours

  const $cells = $step.$$('.pi-cell');
  for (const $c of $cells) $c.css('background', colours[+$c.text]);
  const $filter = list(10).map(i => $cells.filter($c => +$c.text !== i));

  for (const $c of $cells) {
    const i = +$c.text;
    hover($c, {
      enter() {
        for (const $c of $filter[i]) $c.addClass('hide');
        $step.score('hover');
      },
      exit() {
        for (const $c of $filter[i]) $c.removeClass('hide');
      }
    });
  }
}

export function piDigits($step: Step) {
  const $scroller = $step.$('x-pi-scroll') as PiScroll;
  const $input = $step.$('.pi-controls input') as InputView;
  const $warning = $step.$('.pi-warning')!;

  fetch('/content/circles/images/pi-100k.txt')
      .then(response => response.text())
      .then(data => $scroller.setUp(data + '…'))
      .then(() => fetch('/content/circles/images/pi-1m.txt'))
      .then(response => response.text())
      .then(data => $scroller.setUp(data + '…'));

  $input.change((str) => {
    const clean = str.replace(/[^0-9]/g, '');
    const index = $scroller.findString(clean);

    if (index < 0) {
      $warning.text = 'Not found in the first one million digits';
    } else if (index === 0) {
      $warning.text = '';
    } else {
      $warning.text = `Found after ${index} digit${index > 1 ? 's' : ''}.`;
    }

    if (str.length >= 4) $step.score('search');
  });
}

export function maxArea($step: Step) {
  const N = 60;
  const R = 80;

  const triangle = Polygon.regular(3, R * 1.2092).shift(160, 100);
  const square = Polygon.regular(4, R * 1.11072).shift(160, 100);
  const pentagon = Polygon.regular(5, R * 1.06896).shift(160, 100);

  const polygons = [
    new Polygon(...list(N).map(i => triangle.at(i / N))),
    new Polygon(...list(N).map(i => square.at(i / N))),
    new Polygon(...list(N).map(i => pentagon.at(i / N))),
    Polygon.regular(N, R).shift(160, 100)
  ];

  const areas = [481, 625, 688, 796];

  const $path = $N('path', {}, $step.$('svg')) as SVGView;
  const $select = $step.$('x-select') as Select;

  let i = 0;
  $path.draw(polygons[0]);
  $step.model.area = areas[0];

  $select.on('change', ($el) => {
    const j = i;
    i = +$el.data.value;
    if (i === 3) $step.score('area-circle');
    animate((p) => {
      $path.draw(Polygon.interpolate(polygons[j], polygons[i], p));
      $step.model.area = Math.round(p * areas[i] + (1 - p) * areas[j]);
    }, 400);
  });
}

export function area($step: Step) {
  const $svg = $step.$('.circle-area');
  const $slider = $step.$('x-slider') as Slider;
  const $rect = $N('g', {class: 'circle'}, $svg);
  const $circle = $N('g', {class: 'circle'}, $svg);

  const c = new Point(170, 65);
  const r = 60;
  let angle: number;
  let dx: number;
  let dy: number;
  $step.model.toWord = toWord;

  function sector(center: Point, r: number, size: number, angle: number) {
    const startAngle = angle - size / 2 - Math.PI / 2;
    return new Sector(center, Point.fromPolar(startAngle, r).add(center), size);
  }

  function applyTransforms() {
    const wedges = $circle.children as SVGView[];
    const p = $slider.current / $slider.steps;

    for (let i = 0; i < $step.model.n1; ++i) {
      const center = c.add(new Point(dx * i - ($step.model.n1 - 1) * dx / 2,
          i % 2 ? 90 : 90 + dy).scale(p));
      const rotation = p * ((i % 2) ? Math.PI : 0) + (1 - p) * (i * angle);
      wedges[i].draw(sector(center, r, angle, rotation));
    }

    if (p > 0.95) $step.score('slider');
  }

  $step.model.watch((state: any) => {
    $circle.removeChildren();
    $rect.removeChildren();

    angle = 2 * Math.PI / state.n1;
    dx = r * Math.sqrt(2 - 2 * Math.cos(angle)) / 2;
    dy = r * Math.cos(angle / 2);

    for (let i = 0; i < state.n1; ++i) {
      $N('path', {path: sector(c, r, angle, i * angle)}, $rect);
      $N('path', {}, $circle);
    }

    applyTransforms();
  });

  $slider.on('move', applyTransforms);
}

function ring(cx: number, cy: number, r1: number, r2: number, fromAngle: number, toAngle: number) {
  if (fromAngle > toAngle) [fromAngle, toAngle] = [toAngle, fromAngle];
  fromAngle -= Math.PI / 2;
  toAngle -= Math.PI / 2;

  const A = Point.fromPolar(toAngle);
  const B = Point.fromPolar(fromAngle);
  const flag = (toAngle - fromAngle <= Math.PI) ? 0 : 1;

  return `M ${A.x * r1 + cx} ${A.y * r1 + cy}` +
         `A ${r1} ${r1} 0 ${flag} 0 ${B.x * r1 + cx} ${B.y * r1 + cy}` +
         `L ${B.x * r2 + cx} ${B.y * r2 + cy}` +
         `A ${r2} ${r2} 0 ${flag} 1 ${A.x * r2 + cx} ${A.y * r2 + cy} Z`;
}

export function area1($step: Step) {
  const $svg = $step.$('.circle-area')!;
  const $slider = $step.$('x-slider') as Slider;
  const $circle = $N('g', {class: 'circle'}, $svg);
  const triangle = $N('g', {class: 'circle'}, $svg);

  const r = 60;
  $step.model.toWord = toWord;

  function drawRings(element: ElementView, p: number) {
    const $rings = element.children;

    const rmin = Math.pow(20 + p * 100, 1 + p) - 20;
    const dr = r / $step.model.n2;

    const cx = 170 + p * (10 - 165);
    const cy = 65 + p * (150 - 65) - rmin;

    for (let i = 0; i < $step.model.n2; ++i) {
      const angle = Math.PI - 1.999 * Math.PI * ((i + 0.5) * dr) /
                    (rmin + (i + 0.5) * dr);
      const d = ring(cx, cy, rmin + i * dr, rmin + (i + 1) * dr, Math.PI,
          angle);
      $rings[i].setAttr('d', d);
    }

    triangle.css('transform', `scale(${1 - 0.1 * p})`);
    if (p > 0.95) $step.score('slider');
  }

  $step.model.watch((state: any) => {
    // TODO Reuse elements for better performance.
    triangle.removeChildren();
    $circle.removeChildren();

    for (let i = 0; i < state.n2; ++i) {
      $N('path', {}, triangle);
      $N('path', {}, $circle);
    }

    drawRings($circle, 0);
    drawRings(triangle, $slider.current / $slider.steps);
  });

  $slider.on('move', (x) => drawRings(triangle, x / $slider.steps));
}


// -----------------------------------------------------------------------------
// Degrees and Radians

export function degrees($step: Step) {
  const angles = [1.999, 1, 0.5];

  const start = new Point(150, 80);
  $step.model.c0 = start;
  $step.model.c1 = start;
  $step.model.c2 = start;

  for (const i of [0, 1, 2]) {
    $step.onScore('blank-' + i, () => {
      animate((t) => {
        const a = t * Math.PI * angles[i];
        $step.model['c' + i] = new Point(80 + 70 * Math.cos(a), 80 - 70 * Math.sin(a));
      }, angles[i] * 750);
    });
  }
}

function drawTick(i: number, $lines: ElementView) {
  const a = (i - 90) / 180 * Math.PI;
  const $l = $N('line', {}, $lines) as SVGView;
  $l.setLine(Point.fromPolar(a, 362), Point.fromPolar(a, i % 10 ? 370 : 376));
}

export function constellations($step: Step) {
  const $box = $step.$('.constellations')!;
  const $wheel = $box.$('.wheel')!;
  const $lines = $N('g', {transform: 'translate(380, 380)'}, $box.$('svg'));
  $step.model.day = 0;
  const seen = [0, 360];
  drawTick(0, $lines);

  rotateDisk($wheel, {
    resistance: 0.85,
    maxSpeed: 0.01,
    draw(angle) {
      $wheel.setTransform(undefined, angle);

      const d = (720 - Math.round(angle * 180 / Math.PI)) % 360;
      $step.model.day = d;

      if (d > seen[0] && d < seen[1]) {
        const isCw = (d - seen[0] < seen[1] - d);
        const range = isCw ? [seen[0] + 1, d] : [d, seen[1] - 1];
        for (let i = range[0]; i <= range[1]; ++i) drawTick(i, $lines);
        seen[isCw ? 0 : 1] = d;
      }
    },
    end() {
      $step.score('rotate');
    }
  });
}

export function constellations1($step: Step) {
  $step.$('x-video')!.one('play', () => $step.score('video'));
}

export function radians($step: Step) {
  $step.model.rad = (r: number) => {
    const a = r / Math.PI;
    return a > 1.99 ? 2 : round(a, 2);
  };

  const zero = new Point(240, 140);
  const center = new Point(140, 140);
  const ends = [new Point(240, 140.4), new Point(40, 140), new Point(140, 40)];

  function setState(i: number) {
    const arc1 = new Angle($step.model.a, center, zero).arc;
    const arc2 = new Angle($step.model.b, center, ends[i]).arc;

    animate((p) => {
      $step.model.a = arc1.at(p);
      $step.model.b = arc2.at(p);
    }, 600);
  }
  $step.model.setState = setState;

  const $equations = $step.$$('x-equation');
  $equations[0].on('solve', () => setState(1));
  $equations[1].on('solve', () => setState(2));
}

export function radiansTrig($step: Step) {
  const $value = $step.$('.calculator .display span')!;
  const $mode = $step.$('.calculator .setting')!;
  let isDegree = true;
  let reset = false;

  for (const $b of $step.$$('.calculator .button')) {
    const t = $b.text;
    $b.on('click', () => {
      const value = $value.text;

      if (t === 'C') {
        $value.text = '';
      } else if (isOneOf(t, 'sin', 'cos', 'tan')) {
        const n = +value || 0;
        const r = (Math as any)[t](n * (isDegree ? Math.PI / 180 : 1));
        $value.text = ('' + round(r, 6));
        reset = true;
      } else if (t === 'mode') {
        isDegree = !isDegree;
        $mode.text = isDegree ? 'DEG' : 'RAD';
      } else if (reset || value === '0') {
        $value.text = t;
        reset = false;
      } else if (value.length < 10) {
        $value.text += t;
      }
    });
  }
}

export function radiansDistance($step: Step) {
  const $play = $step.$('x-play-btn') as PlayBtn;
  $step.model.p = 0;
  $play.on('click', async () => {
    await animate((p) => $step.model.p = Math.min(p, 0.999), 5000).promise;
    $play.reset();
  });
}

export function smallAngle($step: Step) {
  $step.model.sin = (x: number) => round(Math.sin(x), 4);
}


// -----------------------------------------------------------------------------
// Tangents, Chords and Arcs

function makeEarth($solid: Solid) {
  $solid.addMesh(() => {
    const material = new THREE.MeshPhongMaterial({
      bumpScale: 0.04,
      specular: 0xa2a2a2,
      shininess: 5
    });

    const textureLoader = new THREE.TextureLoader();

    function loadTexture(property: string, url: string) {
      textureLoader.load(url, (texture) => {
        (material as any)[property] = texture;
        material.needsUpdate = true;
      });
    }

    loadTexture('map', '/content/circles/images/textures/map.jpg');
    loadTexture('bumpMap', '/content/circles/images/textures/bump.jpg');
    loadTexture('specularMap', '/content/circles/images/textures/spec.jpg');

    const geometry = new THREE.SphereGeometry(2, 64, 64);
    return [new THREE.Mesh(geometry, material)];
  });
}

export function earthArc($step: Step) {
  makeEarth($step.$('x-solid') as Solid);
}

export function arcs1($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  $step.model.set90Deg = () => {
    $geopad.animatePoint('b', new Point(240, 140));
    $geopad.animatePoint('b', new Point(140, 40));
  };
}

export function eratosthenes1($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.$('.earth')!.insertBefore($geopad.$('.shadow')!);  // Reorder elements
  $geopad.$paths.insertAfter($geopad.$('.obelisk')!);
}


// -----------------------------------------------------------------------------
// Spheres, Cones and Cylinders

export function solids($step: Step) {
  const $solids = $step.$$('x-solid') as Solid[];

  $solids[0].addMesh(() => {
    const geo = new THREE.CylinderGeometry(1.2, 1.2, 2.6, 32, 1);
    $solids[0].addSolid(geo, 0xcd0e66, 20);
  });

  $solids[1].addMesh(() => {
    const geo = new THREE.ConeGeometry(1.3, 2.6, 128, 1);
    $solids[1].addSolid(geo, 0x0f82f2);
  });

  $solids[2].addMesh(() => {
    const geo = new THREE.SphereGeometry(1.3, 128, 128);
    $solids[2].addSolid(geo, 0xfd8c00);
  });
}

export function cylinderPrism($step: Step) {
  const $solids = $step.$$('x-solid') as Solid[];

  $solids[0].addMesh(() => {
    $solids[0].addArrow([0, -1.4, 0], [1.4, -1.4, 0], 0xcd0e66);
    $solids[0].addLabel('r', [0.7, -1.4, 0], 0xcd0e66, '-2px 0 0 -3px');

    $solids[0].addArrow([1.55, -1.4, 0], [1.6, 1.4, 0], 0x0f82f2);
    $solids[0].addLabel('h', [1.55, 0, 0], 0x0f82f2, '-10px 0 0 6px');

    $solids[0].addWireframe(
        new THREE.CylinderGeometry(1.4, 1.4, 2.8, 256, 1, true));

    const topMaterial = Solid.translucentMaterial(0xaaaaaa);
    const top = new THREE.Mesh(new THREE.CircleGeometry(1.4, 32), topMaterial);
    top.rotateX(Math.PI / 2);
    top.position.y = 1.4;

    const bottomMaterial = Solid.translucentMaterial(0xcd0e66, 0.3);
    const bottom = new THREE.Mesh(new THREE.CircleGeometry(1.4, 32),
        bottomMaterial);
    bottom.rotateX(Math.PI / 2);
    bottom.position.y = -1.4;

    return [top, bottom];
  });

  $solids[1].addMesh((scene) => {
    const cylinder = $solids[1].addOutlined(new THREE.BufferGeometry(), 0xaaaaaa);

    $step.model.watch((state: any) => {
      const geo = new THREE.CylinderGeometry(1.4, 1.4, 2.8, state.n, 1);
      cylinder.updateGeometry!(geo);
      scene.draw();
    });
  });

  $solids[0].on('rotate', (e) => $solids[1].rotate(e.quaternion));
  $solids[1].on('rotate', (e) => $solids[0].rotate(e.quaternion));
}

export function obliqueCylinder($step: Step) {
  const $solid = $step.$('x-solid') as Solid;
  let angle: number;

  $solid.addMesh((scene) => {
    const geo = new THREE.CylinderGeometry(1.4, 1.4, 6, 64, 1, true);
    const cylinder = $solid.addWireframe(geo, 0xaaaaaa, 0);

    const top = new THREE.Mesh(new THREE.CircleGeometry(1.4, 64),
        Solid.translucentMaterial(0xaaaaaa));
    const bottom = new THREE.Mesh(new THREE.CircleGeometry(1.4, 64),
        Solid.translucentMaterial(0xaaaaaa));

    const topCircle = $solid.addCircle(1.4);
    const bottomCircle = $solid.addCircle(1.4);

    $solid.addArrow([0, -1.4, 0], [0, 1.4, 0], 0x0f82f2);
    $solid.addLabel('h', [0, 0, 0], 0x0f82f2, '-10px 0 0 4px');

    for (const obj of [top, topCircle, bottom, bottomCircle]) {
      obj.setRotationFromEuler(new THREE.Euler(Math.PI / 2, 0, 0));
    }

    cylinder.setClipPlanes!([new THREE.Plane(new THREE.Vector3(0, -1, 0), 1.4),
      new THREE.Plane(new THREE.Vector3(0, 1, 0), 1.4)]);

    function update(a: number) {
      angle = a;
      const dx = Math.tan(angle) * 1.4;
      for (const obj of [top, topCircle]) obj.position.set(dx, 1.4, 0);
      for (const obj of [bottom, bottomCircle]) obj.position.set(-dx, -1.4, 0);
      cylinder.setRotationFromEuler(new THREE.Euler(0, 0, -angle));
      cylinder.scale.set(Math.cos(angle), 1, 1);
      scene.draw();
    }

    slide($solid, {
      move: (p, _, last) => update(
          clamp(angle + (p.x - last.x) / 150, -0.7, 0.7)),
      end: () => $step.score('slide')
    });
    update(0.4);

    return [top, bottom];
  });
}

export function cavalieri($step: Step) {
  const $solids = $step.$$('x-solid') as Solid[];
  let shift: number;

  $solids[0].addMesh(() => {
    $solids[0].addSolid(new THREE.CylinderGeometry(1.2, 1.2, 2, 64, 1),
        0xfd8c00, 45);
  });

  $solids[1].addMesh((scene) => {
    const geo = new THREE.CylinderGeometry(1.2, 1.2, 0.1, 64, 1);
    const cylinders = tabulate(() => $solids[1].addSolid(geo, 0xfd8c00, 45),
        20);

    function update(s: number) {
      shift = s;
      cylinders.forEach(
          (c, i) => c.position.set(s * (i / 10 - 1) / 2, -1 + 0.1 * i, 0));
      scene.draw();
    }

    slide($solids[1], {
      move: (p, _, last) => update(clamp(shift + (p.x - last.x) / 60, -2, 2)),
      end: () => $step.score('slide')
    });
    update(0);
  });

  $solids[0].on('rotate', (e) => $solids[1].rotate(e.quaternion));
}

export function cylinderSurface($step: Step) {
  const $solid = $step.$('x-solid') as Solid;
  const $slider = $step.$('x-slider') as Slider;
  const PI = Math.PI;

  let hasMoved = false;
  $solid.one('rotate', () => hasMoved = true);

  $solid.addMesh((scene) => {
    const cylinder = $solid.addWireframe(new THREE.BufferGeometry(), 0x0f82f2, 45,
        0.2);
    $solid.addArrow([0, -1, -1], [0, 1, -1], 0x0f82f2);
    $solid.addLabel('h', [0, 0, -1], 0x0f82f2, '-10px 0 0 6px');

    const baseGeo = new THREE.CircleGeometry(1, 64);

    const top = $solid.addOutlined(baseGeo, 0xcd0e66, 5, 0.2);
    top.add($solid.addArrow([0, 0, 0], [1, 0, 0], 0xcd0e66));
    const topLabel = $solid.addLabel('r', [0.5, 1, 0], 0xcd0e66,
        '-1px 0 0 -3px');

    const bottom = $solid.addOutlined(baseGeo, 0xcd0e66, 5, 0.2);
    bottom.add($solid.addArrow([0, 0, 0], [1, 0, 0], 0xcd0e66));
    const bottomLabel = $solid.addLabel('r', [0.5, -1, 0], 0xcd0e66,
        '-1px 0 0 -3px');

    function update(n: number) {
      const angle = PI / 2 * (n / 105);
      const radius = 1 / (1 - n / 105);

      cylinder.updateGeometry!(
          new THREE.CylinderGeometry(radius, radius, 2, 64, 1, true, 2 * angle,
              2 * PI - 4 * angle));
      cylinder.position.z = radius - 1;

      top.setRotationFromEuler(new THREE.Euler(PI / 2 - angle, 0, 0));
      top.position.y = 1 + Math.sin(angle);
      top.position.z = -1 + Math.cos(angle);
      topLabel.updatePosition([0.5, 1 + Math.sin(angle), -1 + Math.cos(angle)]);

      bottom.setRotationFromEuler(new THREE.Euler(PI / 2 + angle, 0, 0));
      bottom.position.y = -1 - Math.sin(angle);
      bottom.position.z = -1 + Math.cos(angle);
      bottomLabel.updatePosition(
          [0.5, -1 - Math.sin(angle), -1 + Math.cos(angle)]);

      (scene.camera as any).zoom = 1 - n / 250;
      (scene.camera as any).updateProjectionMatrix();

      if (!hasMoved) {
        $solid.object.setRotationFromEuler(new THREE.Euler(-n / 200, 0, 0));
      }
      scene.draw();
    }

    $slider.on('move', update);
    update(0);
    return [top, bottom];
  });
}

export function cylinderRealLife($step: Step) {
  const $blanks = $step.$$('x-blank');
  $blanks[0].one('incorrect', () => $step.addHint('use-cylinder-volume'));
  $blanks[1].one('incorrect', () => $step.addHint('use-cylinder-surface'));
}

export function cone($step: Step) {
  const $solid = $step.$('x-solid') as Solid;

  $solid.addMesh(() => {
    $solid.addArrow([0, -1.4, 0], [1.4, -1.4, 0], 0xcd0e66);
    $solid.addLabel('r', [0.7, -1.4, 0], 0xcd0e66, '-1px 0 0 -3px');

    $solid.addArrow([0, -1.4, 0], [0, 1.35, 0], 0x0f82f2);
    $solid.addLabel('h', [0, 0, 0], 0x0f82f2, '-10px 0 0 4px');

    $solid.addPoint([0, 1.4, 0], 0x22ab24);
    $solid.addWireframe(new THREE.ConeGeometry(1.4, 2.8, 128, 1, true));

    const bottomMaterial = Solid.translucentMaterial(0xcd0e66, 0.3);
    const bottom = new THREE.Mesh(new THREE.CircleGeometry(1.4, 32),
        bottomMaterial);
    bottom.rotateX(Math.PI / 2);
    bottom.position.y = -1.4;
    return [bottom];
  });
}

export function coneVolume($step: Step) {
  const $solid = $step.$('x-solid') as Solid;

  $solid.addMesh((scene) => {
    const cylinder = $solid.addOutlined(new THREE.BufferGeometry(), 0xaaaaaa);
    $step.model.watch((state: any) => {
      const geo = new THREE.ConeGeometry(1.4, 2.8, state.n, 1);
      cylinder.updateGeometry!(geo);
      scene.draw();
    });
  });
}

export function coneCircumscribed($step: Step) {
  const $solid = $step.$('x-solid') as Solid;

  $solid.addMesh(() => {
    $solid.addSolid(new THREE.ConeGeometry(1.4, 2.8, 128, 1), 0xcd0e66);
    $solid.addWireframe(new THREE.CylinderGeometry(1.4, 1.4, 2.8, 128, 1),
        0xaaaaaa);
  });
}

export function obliqueCone($step: Step) {
  const $solid = $step.$('x-solid') as Solid;
  let shift: number;

  $solid.addMesh((scene) => {
    const cylinders = tabulate((i) => {
      const r = 1.6 * (1 - i / 30);
      const geo = new THREE.CylinderGeometry(r, r, 0.1, 64, 1);
      return $solid.addSolid(geo, 0xfd8c00, 45);
    }, 30);

    function update(s: number) {
      shift = s;
      cylinders.forEach(
          (c, i) => c.position.set(s * i / 30, -1.1 + 0.1 * i, 0));
      scene.draw();
    }

    slide($solid, {
      move: (p, _, last) => update(clamp(shift + (p.x - last.x) / 60, -2, 2)),
      end: () => $step.score('slide')
    });
    update(0);
  });
}

export function coneSurface($step: Step) {
  const $solid = $step.$('x-solid') as Solid;
  const $slider = $step.$('x-slider') as Slider;
  const PI = Math.PI;

  let hasMoved = false;
  $solid.one('rotate', () => hasMoved = true);

  const r = 1;
  const h = 2;
  const rMax = Math.sqrt(r ** 2 + h ** 2);

  $solid.addMesh((scene) => {
    const cone = $solid.addWireframe(new THREE.BufferGeometry(), 0x22ab24, 45, 0.2);
    const slantArrow = $solid.addArrow([0, -h / 2, -r], [0, h / 2, 0],
        0x22ab24);
    const slantLabel = $solid.addLabel('s', [0, 0, -r / 2], 0x22ab24,
        '-10px 0 0 6px');

    const bottom = $solid.addOutlined(new THREE.CircleGeometry(1, 32), 0xfd8c00,
        5, 0.2);
    bottom.add($solid.addArrow([r, 0, 0], [0, 0, 0], 0xfd8c00));
    const radiusLabel = $solid.addLabel('r', [r / 2, -h / 2, 0], 0xfd8c00,
        '-2px 0 0 -3px');

    function update(n: number) {
      const angle = PI / 2 * (n / 100.5);
      const radius = r + (rMax - r) * n / 100.5;
      const height = Math.sqrt(5 - radius ** 2);
      const theta = (1 - r / radius) * PI;

      const iAng = Math.atan(height / 2 / radius);
      const iRad = Math.sqrt(radius ** 2 + (height / 2) ** 2);
      const dz = iRad * Math.cos(angle + iAng);
      const dy = iRad * Math.sin(angle + iAng);

      cone.updateGeometry!(
          new THREE.ConeGeometry(radius, height, 128, 1, true, theta,
              2 * PI - 2 * theta));
      cone.setRotationFromEuler(new THREE.Euler(-angle, 0, 0));
      cone.position.set(0, dy - 1, dz - 1);

      bottom.setRotationFromEuler(new THREE.Euler(PI / 2 + angle, 0, 0));
      bottom.position.set(0, -1 - Math.sin(angle), -1 + Math.cos(angle));

      const p = new Point(height / 2, 0).rotate(-angle).shift(dy - 1, dz - 1);
      slantArrow.updateEnds!([0, -h / 2, -r], [0, p.x, p.y]);

      radiusLabel.updatePosition(
          [r / 2, -h / 2 - r * Math.sin(angle), Math.cos(angle) - 1]);
      slantLabel.updatePosition([0, (p.x - h / 2) / 2, (p.y - r) / 2]);

      (scene.camera as any).zoom = 1.05 - n / 600;
      (scene.camera as any).updateProjectionMatrix();
      if (!hasMoved) {
        $solid.object.setRotationFromEuler(new THREE.Euler(-n / 250, 0, 0));
      }

      scene.draw();
    }

    $solid.object.translateY(h / 4);
    $slider.on('move', update);
    update(0);
  });
}

export function slantHeight($step: Step) {
  const $rows = $step.$$('tr');

  $rows[1].hide();
  $rows[1].data.display = 'table-row';

  $step.onScore('eqn-0', () => $rows[1].enter('fade'));
}

export function coneSurface1($step: Step) {
  const $system = $step.$('x-equation-system') as EquationSystem;
  $system.isFinal = (expr) => {
    return !expr.variables.includes('s') && expr.functions.includes('sqrt');
  };
  $system.validate = (expr, isRepeated) => {
    const substituteHint = (isRepeated && expr.variables.includes('s'));
    return substituteHint ? {error: 'cone-surface-2'} : undefined;
  };
}

export function sphere($step: Step) {
  const $solid = $step.$('x-solid') as Solid;

  $solid.addMesh(() => {
    $solid.addArrow([0.04, 0, 0], [1.8, 0, 0], 0xcd0e66);
    $solid.addLabel('r', [0.9, 0, 0], 0xcd0e66);

    $solid.addArrow([0, -1.8, 0], [0, 1.8, 0], 0x0f82f2);
    $solid.addLabel('d', [0, 0.9, 0], 0x0f82f2, '-10px 0 0 -14px');

    $solid.addPoint([0, 0, 0], 0x22ab24);
    $solid.addLabel('C', [0, 0, 0], 0x22ab24, '0 0 0 -15px');

    $solid.addCircle(1.8, 0xaaaaaa);
    $solid.addCircle(1.8, 0xaaaaaa).rotateX(Math.PI / 2);
    $solid.addCircle(1.8, 0xaaaaaa).rotateY(Math.PI / 2);

    $solid.addWireframe(new THREE.SphereGeometry(1.8, 64, 64), 0xaaaaaa, 45);
    $solid.object.rotateY(-0.5);
  });
}

export function sphereVolume($step: Step) {
  const $system = $step.$('x-equation-system') as EquationSystem;
  $system.isFinal = (expr) => !expr.variables.includes('x');

  const $solids = $step.$$('x-solid') as Solid[];
  const $slider = $step.$('x-slider') as Slider;

  const r = 1.7;
  const s = 64;

  $solids[0].addMesh((scene) => {
    $solids[0].addWireframe(new THREE.SphereGeometry(r, s, s, 0, Math.PI),
        0xaaaaaa, 45).rotateX(-Math.PI / 2).translateZ(-r / 2);
    $solids[0].addOutlined(new THREE.CircleGeometry(r, s)).rotateX(-Math.PI / 2)
        .translateZ(-r / 2);

    const cross = $solids[0].addOutlined(new THREE.CircleGeometry(r, s), 0xcd0e66, 5, 0.4, 0xcd0e66);
    cross.rotateX(-Math.PI / 2).translateZ(-r / 2);
    $slider.on('move', (n) => {
      cross.updateGeometry!(new THREE.CircleGeometry(Math.max(0.001, Math.sqrt(1 - (n / 100) ** 2) * r), s));
      cross.position.set(0, r * n / 100 - r / 2, 0);
      scene.draw();
    });
  });

  $solids[1].addMesh((scene) => {
    $solids[1].addOutlined(new THREE.CircleGeometry(r, s)).rotateX(-Math.PI / 2)
        .translateZ(-r / 2);
    $solids[1].addWireframe(new THREE.CylinderGeometry(r, r, r, s, s, true),
        0xaaaaaa, 45);
    const inside = $solids[1].addOutlined(
        new THREE.ConeGeometry(r, r, s, s, true), 0xaaaaaa, 45);
    inside.rotateX(Math.PI);

    const cross = $solids[1].addOutlined(new THREE.RingGeometry(0.001, r, s, 1), 0xcd0e66, 5, 0.4, 0xcd0e66);
    cross.rotateX(-Math.PI / 2).translateZ(-r / 2);
    $slider.on('move', (n) => {
      cross.position.set(0, r * n / 100 - r / 2, 0);
      cross.updateGeometry!(new THREE.RingGeometry(Math.max(0.001, n / 100 * r), r, s, 1));
      scene.draw();
    });
  });

  $solids[0].on('rotate', (e) => $solids[1].rotate(e.quaternion));
  $solids[1].on('rotate', (e) => $solids[0].rotate(e.quaternion));

  $step.model.h = 0;
  $slider.on('move', (n) => $step.model.h = n / 100);
}

export function sphereVolume1($step: Step) {
  const $system = $step.$('x-equation-system') as EquationSystem;
  $system.isFinal = (expr) => !expr.functions.includes('−');
}

function numberAnimation(n: number, $el: ElementView, t: number) {
  const digits = numberFormat(n).split('');
  const length = digits.length;

  return animate((p) => {
    const num = digits.map((n, i) => {
      if (i > p * length + 1) return '';
      if (isOneOf(n, ',', '.')) return n;
      if (i > p * length - 1) return Random.integer(10);
      return n;
    });
    $el.text = num.join('');
  }, t);
}

export function earthVolume($step: Step) {
  const $rows = $step.$$('tr');
  const $numbers = $step.$('.numbers') as ElementView;

  $rows[1].hide();
  $rows[1].data.display = 'table-row';

  $step.onScore('eqn-0', async () => {
    $rows[1].enter('fade');
    await numberAnimation(1083206916846, $numbers, 2000).promise;
    await wait(1000);
    $step.score('numbers');
  });

  makeEarth($step.$('x-solid') as Solid);
}

export function sphereSum($step: Step) {
  const $solids = $step.$$('x-solid') as Solid[];

  $solids[0].addMesh(() => {
    $solids[0].addSolid(new THREE.ConeGeometry(1.2, 2.4, 64, 1), 0xcd0e66, 45);
    $solids[0].addWireframe(new THREE.CylinderGeometry(1.2, 1.2, 2.4, 64, 1),
        0xaaaaaa, 45);
  });

  $solids[1].addMesh(() => {
    $solids[1].addSolid(new THREE.SphereGeometry(1.2, 64, 64), 0xcd0e66, 45);
    $solids[1].addWireframe(new THREE.CylinderGeometry(1.2, 1.2, 2.4, 64, 1),
        0xaaaaaa, 45);
  });

  $solids[2].addMesh(() => {
    $solids[2].addSolid(new THREE.CylinderGeometry(1.2, 1.2, 2.4, 64, 1),
        0xcd0e66, 20);
  });

  for (const i of [0, 1, 2]) {
    $solids[i].on('rotate', (e) => {
      $solids[(i + 1) % 3].rotate(e.quaternion);
      $solids[(i + 2) % 3].rotate(e.quaternion);
    });
  }
}

export async function sphereMaps($step: Step) {
  const $svgs = $step.$$('svg.sphere-map');
  const $grid = $svgs.map($svg => $svg.$('.grid')!);
  const $land = $svgs.map($svg => $svg.$('.land')!);
  const $rect = $svgs.map($svg => $svg.$('.map-select')!);
  const $outline = $svgs.map($svg => $svg.$('.outline')!);

  const polygon = new Rectangle(new Point(-24, -24), 48, 48).polygon;
  const points = tabulate((i) => polygon.at(i / 64), 64);

  const drag = new Draggable($rect[1], $svgs[1],
      {useTransform: true, margin: 26});
  drag.setPosition(220, 140);

  const {d3, topojson, world} = await loadD3();

  const grid = d3.geoGraticule()();
  const land = topojson.feature(world, world.objects.land);
  const projections: Obj<any> = {
    cylindrical: (d3 as any).geoCylindricalEqualArea().scale(90),
    mercator: d3.geoMercator().scale(70),
    mollweide: (d3 as any).geoMollweide().scale(78),
    robinson: (d3 as any).geoRobinson().scale(70)
  };

  const globeProjection = d3.geoOrthographic().clipAngle(90)
      .translate([120, 120]).scale(118);
  const globePath = d3.geoPath().projection(globeProjection);
  $outline[0].setAttr('d', globePath({type: 'Sphere'}));

  let mapProjection: any;  // d3.GeoPath

  function updateSelection(p: Point) {
    const center = mapProjection.invert([p.x, p.y]);
    globeProjection.rotate([-center[0], -center[1]]);
    $grid[0].setAttr('d', globePath(grid));
    $land[0].setAttr('d', globePath(land));
    const x = points.map(q => mapProjection.invert([p.x + q.x, p.y + q.y]));
    $rect[0].setAttr('d', globePath({type: 'Polygon', coordinates: [x]}));
  }

  function updateProjection(name: string) {
    mapProjection = projections[name].translate([220, 140]);
    const path = d3.geoPath().projection(mapProjection);
    $grid[1].setAttr('d', path(grid));
    $land[1].setAttr('d', path(land));
    $outline[1].setAttr('d', path({type: 'Sphere'}));
    updateSelection(drag.position);
  }

  const $select = $step.$('x-select') as Select;
  $select.on('change', ($el: ElementView) => updateProjection($el.data.name!));
  $select.one('change', () => $step.score('projection'));
  drag.on('move', updateSelection);
  drag.one('end', () => $step.score('move'));
  updateProjection($select.$active.data.name!);
}


// -----------------------------------------------------------------------------
// Conic Sections

export function conics($step: Step) {
  const $conics = $step.$('x-conic-section') as ConicSection;
  const $labels = $step.$('.row')!.children;
  let $activeLabel = $labels[0];

  $conics.on('rotate', (a) => {
    const active = (a < 0.05) ? 0 : (a < 1.1) ? 1 : (a < 1.15) ? 2 : 3;
    if ($activeLabel === $labels[active]) return;
    $activeLabel.removeClass('active');
    $activeLabel = $labels[active];
    $activeLabel.removeClass('hide');
    $activeLabel.addClass('active');
    $step.score(['circle', 'ellipse', 'parabola', 'hyperbola'][active]);
  });

  $labels.forEach(($l, i) => {
    $l.on('click', () => {
      if ($l.hasClass('active')) return;
      $conics.update([0, 0.9, 1.12, 1.2][i]);
    });
  });
}

export function ellipses2($step: Step) {
  $step.$$('x-video').forEach(($v, i) => {
    $v.one('play', () => $step.score('v' + i));
  });
}

export function epicycles($step: Step) {
  const smallCircle = $step.$('.small-circle') as SVGView;
  const earth = $step.$('.earth') as SVGView;
  const $path = $step.$('svg path') as SVGView;
  const $play = $step.$('x-play-btn') as PlayBtn;

  const BIG_R = 120;
  const SMALL_R = 30;
  let points: Point[] = [];
  let lastP = 0;

  $step.model.watch((state: any) => {
    points = list(401).map((i) => {
      const a = i / 400 * 2 * Math.PI;
      return Point.fromPolar(a * state.n, SMALL_R)
          .add(Point.fromPolar(a, BIG_R)).shift(160, 160);
    });
    $path.points = points.slice(0, lastP * 401);
  });

  $play.on('play', async () => {
    await animate((p) => {
      const a = p * 2 * Math.PI;
      const c1 = Point.fromPolar(a, BIG_R).shift(160, 160);
      smallCircle.setCenter(c1);
      earth.setCenter(Point.fromPolar(a * $step.model.n, SMALL_R).add(c1));
      $path.points = points.slice(0, p * 401);
      lastP = p;
    }, 5000).promise;
    $play.reset();
    $step.score('play');
  });
}

export function kepler($step: Step) {
  const N = 100;  // number of points
  const a = 120;  // semi-major axis (ry)
  const e = 0.5;  // eccentricity

  // BesselJ function - Table[BesselJ[i, i*0.5], {i, 0, 10}]
  const besselJ = [1, 0.242268, 0.114903, 0.060964, 0.0339957, 0.0195016,
    0.0113939, 0.006743, 0.00402867, 0.00242466, 0.0014678];

  const points = tabulate((n) => {
    const M = 2 * Math.PI * n / N;  // mean anomaly

    let E = M;  // eccentric anomaly
    for (let i = 1; i < 10; ++i) E += 2 / i * besselJ[i] * Math.sin(i * M);

    const th = 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));
    const r = a * (1 - e * e) / (1 + e * Math.cos(th));
    return Point.fromPolar(th, r).shift(220, 120);
  }, N + 1);

  const $orbit = $step.$('.orbit') as SVGView;
  const $earth = $step.$('.earth') as SVGView;
  const $sweep = $step.$('.sweep')!;
  const $play = $step.$('x-play-btn') as PlayBtn;

  $orbit.points = points;

  $play.on('play', async () => {
    await animate((p) => {
      p = (2 * p) % 1;
      const q = Math.floor(p * 10) / 10;  // sweep start progress
      const start = Point.interpolateList(points, q);
      const end = Point.interpolateList(points, p);
      $earth.setCenter(end);
      $sweep.setAttr('d',
          `M 220 120 L ${start.x} ${start.y} A 120 105 0 0 1 ${end.x} ${end.y} Z`);
    }, 8000).promise;
    $play.reset();
    $step.score('play');
  });
}

export function newton($step: Step) {
  const $box = $step.$('.newton')!;
  const $imgs = $box.children;

  $box.one('click', () => {
    $box.removeClass('interactive');

    animate((p) => {
      if (p < 0.5) {
        $imgs[2].translate(0, p * p * 4 * 166);
      } else {
        const q = 2 * p - 1;
        $imgs[2].translate(85 * q, 166 + 310 * q * (q - 0.6));
      }
    }, 1600);

    setTimeout(() => $imgs[1].remove(), 800);
    setTimeout(() => $step.score('apple'), 1600);
  });
}
