// =============================================================================
// Polygons and Polyhedra
// (c) Mathigon
// =============================================================================


import {total} from '@mathigon/core';
import {clamp, toWord, Segment, Point, Angle, lerp, Line, Rectangle, Polygon} from '@mathigon/fermat';
import {Browser, slide} from '@mathigon/boost';
import {Geopad, GeoPath, GeoPoint, GeoShape, Slider, Step} from '../shared/types';
import {Solid} from '../shared/components/solid';
import {Graphics3D} from '../shared/components/webgl';
import {Anibutton} from './components/anibutton';
import {PolyhedronData, PolyhedronDataItem} from './components/polyhedron-data';
import {Tessellation} from './components/tessellation';

import '../shared/components/solid';
import './components/tessellation';
import './components/polyhedron';
import './components/folding';
import './components/anibutton';


function internalAngles(polygon: Polygon) {
  const n = polygon.points.length;
  return polygon.points.map((p, i) => {
    const a = polygon.points[(i + 1) % n];
    const b = polygon.points[(i - 1 + n) % n];
    return Math.round(new Angle(a, p, b).deg);
  });
}

export function angles($step: Step) {
  const totals = [360, 540];
  const $buttons = $step.$$('x-anibutton') as Anibutton[];
  const overlap = [false, false];

  for (const [i, $b] of $buttons.entries()) {
    $step.model.watch(() => $b.setAttr('text', '???'));
    $b.on('click', () => {
      if (overlap[i]) return $step.addHint('no-overlap', {force: true});
      $b.play();
      $b.setAttr('text', totals[i] + '°');
      $step.score('angle-' + i);
    });
  }

  $step.model.setComputed('a1', (m: any) => internalAngles(m.p1));
  $step.model.setComputed('a2', (m: any) => internalAngles(m.p2));

  $step.model.watch((s: any) => {
    overlap[0] = total(s.a1) > 361;
    overlap[1] = total(s.a2) >= 541;
    if (overlap[0] || overlap[1]) $step.addHint('no-overlap');
  });

  $buttons[0].one('click', () => $step.addHint('angles-repeat'));
}

export function regularArea($step: Step) {
  $step.model.assign({
    toWord,
    tan: Math.tan,
    regular: (c: Point, r: number, n: number) => Polygon.regular(n, r).translate(c)
  });
}

// -----------------------------------------------------------------------------

function checkPathMatches(p: GeoShape<Line>, options: Line[]) {
  for (let i = 0; i < options.length; ++i) {
    if (p.value!.equals(options[i])) return i;
  }
  p.delete();
  return -1;
}

export function midsegments($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.switchTool('point');

  let points: GeoPoint[] = [];
  let orientation: number;

  $geopad.on('add:point', ({point}: {point: GeoPoint}) => {
    if (points.length === 4) return point.delete();
    points.push(point);
    if (points.length === 4) {
      $step.score('points');
      $geopad.switchTool('move');
    }
  });

  $geopad.on('add:path', ({path}: {path: GeoPath<Line>}) => {
    const match = checkPathMatches(path, [
      new Segment(points[0].value!, points[2].value!),
      new Segment(points[1].value!, points[3].value!)
    ]);

    if (match >= 0) {
      orientation = match + 1;
      path.$el.setAttr('target', 'parallel');
      $step.score('diagonal');
    } else {
      $step.addHint('not-a-diagonal');
    }
  });

  $step.onScore('points', () => {
    if (points.length < 4) points = [
      $geopad.drawPoint(new Point(50, 40)),
      $geopad.drawPoint(new Point(70, 250)),
      $geopad.drawPoint(new Point(220, 240)),
      $geopad.drawPoint(new Point(260, 90))
    ];

    const [a, b, c, d] = points.map(p => p.value);
    if (Segment.intersect(new Segment(a!, b!), new Segment(c!, d!))) {
      points = [points[0], points[2], points[1], points[3]];
    } else if (Segment.intersect(new Segment(a!, d!), new Segment(b!, c!))) {
      points = [points[0], points[1], points[3], points[2]];
    }

    const pointStr = points.map(p => p.name).join(',');
    $geopad.drawPath(`polygon(${pointStr})`, {name: 'quad', animated: 1000});
  });

  $step.onScore('blank-0 points', () => {
    for (let i = 0; i < 4; ++i) {
      $geopad.drawPoint(`quad.edges[${i}].midpoint`, {name: `m${i}`, classes: 'red', interactive: false});
    }

    $geopad.drawPath(`polygon(m0,m1,m2,m3)`, {classes: 'red', name: 'p0', animated: 1000});
  });

  $step.onScore('blank-1 points', () => {
    $geopad.switchTool('line');
    $geopad.showGesture(points[0].name, points[2].name);
  });

  $step.onScore('diagonal', () => {
    const [a, b, c, d] = points.map(p => p.name);
    $geopad.switchTool('move');

    if (!orientation) {
      // TODO add diagonal
    }
    const o = (orientation === 1);

    $geopad.drawPath(`segment(m0,m1)`, {classes: 'transparent red', target: o ? 'midsegment parallel' : 'other'});
    $geopad.drawPath(`segment(m2,m3)`, {classes: 'transparent red', target: o ? 'midsegment parallel' : 'other'});
    $geopad.drawPath(`segment(m1,m2)`, {classes: 'transparent red', target: !o ? 'midsegment parallel' : 'other'});
    $geopad.drawPath(`segment(m0,m3)`, {classes: 'transparent red', target: !o ? 'midsegment parallel' : 'other'});

    $geopad.drawPath(`segment(${o ? b : a},${o ? d : c})`, {classes: 'transparent', target: 'other'});
    $geopad.drawPath(`polygon(${b},${o ? c : d},${a})`, {classes: 'fill green transparent', target: 'triangle'});
    $geopad.drawPath(`polygon(${c},${d},${o ? a : b})`, {classes: 'fill yellow transparent', target: 'triangle'});
  });
}

export function parallelogramsProof($step: Step) {
  const $geo1 = $step.$$('x-geopad')[0] as Geopad;
  const model = $step.model;

  model.o = false;
  $geo1.on('add:point', ({point}: {point: GeoPoint}) => point.delete());

  setTimeout(() => {
    if (!$step.scores.has('diagonal')) {
      $geo1.showGesture('a', 'c');
      $geo1.switchTool('line');
    }
  }, 1000);

  $geo1.on('add:path', ({path}: {path: GeoPath<Line>}) => {
    const match = checkPathMatches(path, [
      new Segment(model.b, model.d),
      new Segment(model.a, model.c)
    ]);

    if (match >= 0) {
      path.$el.setAttr('target', 'diagonal');
      if (match === 1) model.o = true;
      $step.score('diagonal');
      $geo1.switchTool('move');
    } else {
      $step.addHint('not-a-diagonal-1');
    }
  });
}

export function quadrilateralsArea($step: Step) {
  const $geopads = $step.$$('x-geopad') as Geopad[];

  $geopads[0].switchTool('rectangle');
  $geopads[0].on('add:path', ({path}: {path: GeoPath<Rectangle>}) => {
    if (path.value!.w === 8 && path.value!.h === 6) {
      $geopads[0].animatePoint(path.components[0].name, new Point(2, 3));
      $geopads[0].animatePoint(path.components[1].name, new Point(10, 9));
      $step.addHint('correct');
      $step.score('draw-1');
      $geopads[0].switchTool('move')
    } else {
      $step.addHint('incorrect');
      path.delete();
    }
  });

  $geopads[1].switchTool('rectangle');
  $geopads[1].on('add:path', ({path}: {path: GeoPath<Rectangle>}) => {
    if (path.value!.w * path.value!.h === 48) {
      $geopads[1].animatePoint(path.components[0].name, new Point(3, 3));
      $geopads[1].animatePoint(path.components[1].name, new Point(11, 9));
      $step.addHint('correct');
      $step.score('draw-2');
      $geopads[1].switchTool('move')
    } else {
      $step.addHint('incorrect');
      path.delete();
    }
  });
}

// -----------------------------------------------------------------------------

export function tessellationDrawing($step: Step) {
  let polygons = 0;

  const $tessellation = $step.$('x-tessellation') as Tessellation;
  $tessellation.on('add-shape', function () {
    polygons += 1;
    if (polygons >= 3) $step.score('shapes0');
    if (polygons >= 5) $step.score('shapes1');
  });
}

export function escher($step: Step) {
  const $img = $step.$('.metamorph img')!;
  let translate = 0;
  let max = 3000;

  slide($img, {
    move(p, start, last) {
      translate += last.x - p.x;
      translate = clamp(translate, 0, max);
      $img.translate(-translate, 0);
    }
  });

  Browser.onResize(({width}) => {
    max = 3000 - Math.min(760, width - 60);
  });
}

export function penrose($step: Step) {
  const $g = $step.$$('svg g');

  $g[1].setAttr('opacity', 0);
  $g[2].setAttr('opacity', 0);

  const $slider = $step.$('x-slider') as Slider;
  $slider.on('move', (n) => {
    $g[0].setAttr('opacity', n < 50 ? 1 - n / 77 : 0.35);
    $g[1].setAttr('opacity', n < 50 ? n / 50 : 1.5 - n / 100);
    $g[2].setAttr('opacity', n < 50 ? 0 : n / 50 - 1);
  });
}

// -----------------------------------------------------------------------------

export function polyhedra($step: Step) {
  $step.addHint('move-polyhedra');
}

export function platonicOverview($step: Step) {
  $step.addHint('use-euler');
}

function makePolyhedronGeo(data: PolyhedronDataItem) {
  const vertices = data.vertex.map(v => new THREE.Vector3(v[0], v[1], v[2]));
  const geometry = new THREE.Geometry();
  geometry.vertices = vertices;
  for (const f of data.face) {
    for (let i = 1; i < f.length - 1; i++) {
      geometry.faces.push(new THREE.Face3(f[0], f[i], f[i + 1]));
    }
  }
  geometry.computeFaceNormals();
  geometry.computeVertexNormals();
  return geometry;
}

export function platonicDual($step: Step) {
  const $solids = $step.$$('x-solid') as Solid[];
  const $sliders = $step.$$('x-slider');

  $solids[0].addMesh((scene: Graphics3D) => {
    const octahedronGeo = makePolyhedronGeo(PolyhedronData.Octahedron);
    const octahedron = $solids[0].addSolid(octahedronGeo, 0xfd8c00, 5, true);

    const cubeGeo = makePolyhedronGeo(PolyhedronData.Cube);
    const cube = $solids[0].addSolid(cubeGeo, 0x22ab24, 5, true);
    cube.setRotationFromEuler(new THREE.Euler(0.71, 0.63, -0.97));

    function update(n: number) {
      cube.scale.setScalar(lerp(1.67, 0.95, n / 100));
      octahedron.scale.setScalar(lerp(0.83, 1.43, n / 100));
      scene.draw();
    }

    scene.camera.fov = 45;
    $solids[0].object.rotateX(0.2).rotateY(-0.6);
    $sliders[0].on('move', update);
    update(0);
  });

  $solids[1].addMesh((scene) => {
    const icosahedronGeo = makePolyhedronGeo(PolyhedronData.Icosahedron);
    const icosahedron = $solids[1].addSolid(icosahedronGeo, 0xf7aff, 5, true);
    icosahedron.setRotationFromEuler(new THREE.Euler(-0.47, 0, 0.3));

    const dodecahedronGeo = makePolyhedronGeo(PolyhedronData.Dodecahedron);
    const dodecahedron = $solids[1].addSolid(dodecahedronGeo, 0xcd0e66, 5,
        true);
    dodecahedron.setRotationFromEuler(new THREE.Euler(0.17, 0, 0.52));

    function update(n: number) {
      dodecahedron.scale.setScalar(lerp(1.88, 1.48, n / 100));
      icosahedron.scale.setScalar(lerp(1.35, 1.7, n / 100));
      scene.draw();
    }

    $solids[1].object.rotateX(0.2).rotateY(-0.25);
    $sliders[1].on('move', update);
    update(0);
  });
}
