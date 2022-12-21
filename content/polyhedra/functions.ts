// =============================================================================
// Polygons and Polyhedra
// (c) Mathigon
// =============================================================================


import {total} from '@mathigon/core';
import {clamp, lerp, toWord} from '@mathigon/fermat';
import {Angle, intersections, isLineLike, Point, Polygon, Rectangle, Segment} from '@mathigon/euclid';
import {$body, Browser, slide} from '@mathigon/boost';
import {Slider, Step} from '@mathigon/studio';

import {Geopad, GeoPath, Path, PolygonTile} from '../shared/types';
import {Solid} from '../shared/components/webgl/solid';
import {Graphics3D} from '../shared/components/webgl/webgl';
import {Anibutton} from './components/anibutton';
import {PolyhedronData, PolyhedronDataItem} from './components/polyhedron-data';

import '../shared/components/webgl/solid';
import './components/polyhedron';
import './components/folding';
import './components/anibutton';
import './components/polyhedron-slice';


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
    for (const $b of $buttons) $b.setAttr('text', '???');
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

export function regular2($step: Step) {
  $step.model.round = Math.round;
}

// -----------------------------------------------------------------------------

export async function midsegments($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;

  $geopad.switchTool('point');

  const a = await $geopad.waitForPoint();
  let b = await $geopad.waitForPoint();
  let c = await $geopad.waitForPoint();
  let d = await $geopad.waitForPoint();

  // Reorder the points to be clockwise.
  if (intersections(new Segment(a.value!, b.value!), new Segment(c.value!, d.value!)).length) {
    [b, c] = [c, b];
  } else if (intersections(new Segment(a.value!, d.value!), new Segment(b.value!, c.value!)).length) {
    [c, d] = [d, c];
  }

  $step.score('points');
  $geopad.switchTool('move');

  const pointStr = [a, b, c, d].map(p => p.name).join(',');
  $geopad.drawPath(`polygon(${pointStr})`, {name: 'quad', animated: 1000});

  await $step.onScore('blank-0');

  for (let i = 0; i < 4; ++i) {
    $geopad.drawPoint(`quad.edges[${i}].midpoint`, {name: `m${i}`, classes: 'red', interactive: false});
  }
  $geopad.drawPath(`polygon(m0,m1,m2,m3)`, {classes: 'red', name: 'p0', animated: 1000});

  await $step.onScore('blank-1');

  $geopad.showGesture(a.name, c.name);

  // Two possible diagonals:
  const s1 = new Segment(a.value!, c.value!);
  const s2 = new Segment(b.value!, d.value!);

  $geopad.switchTool('line');
  let orientation = 0;

  const diagonal = await $geopad.waitForPath<Segment>((p: Path) => {
    if (!isLineLike(p)) return false;
    orientation = p.equals(s1) ? 1 : p.equals(s2) ? 2 : 0;
    return orientation > 0;
  }, {onIncorrect: () => $step.addHint('not-a-diagonal')});

  diagonal.$el.setAttr('target', 'parallel');
  $step.score('diagonal');
  $geopad.switchTool('move');

  const [a1, b1, c1, d1] = [a, b, c, d].map(p => p.name);
  const o = (orientation === 1);

  $geopad.drawPath(`segment(m0,m1)`, {classes: 'transparent red', target: o ? 'midsegment parallel' : 'other'});
  $geopad.drawPath(`segment(m2,m3)`, {classes: 'transparent red', target: o ? 'midsegment parallel' : 'other'});
  $geopad.drawPath(`segment(m1,m2)`, {classes: 'transparent red', target: !o ? 'midsegment parallel' : 'other'});
  $geopad.drawPath(`segment(m0,m3)`, {classes: 'transparent red', target: !o ? 'midsegment parallel' : 'other'});

  $geopad.drawPath(`segment(${o ? b1 : a1},${o ? d1 : c1})`, {classes: 'transparent', target: 'other'});
  $geopad.drawPath(`polygon(${b1},${o ? c1 : d1},${a1})`, {classes: 'fill green transparent', target: 'triangle'});
  $geopad.drawPath(`polygon(${c1},${d1},${o ? a1 : b1})`, {classes: 'fill yellow transparent', target: 'triangle'});
}

export async function parallelogramsProof($step: Step) {
  const $geo1 = $step.$$('x-geopad')[0] as Geopad;
  const model = $step.model;

  $geo1.showGesture('a', 'c');
  $geo1.switchTool('line');
  model.o = false;

  const diagonal = await $geo1.waitForPath<Segment>((path: Path) => {
    if (!isLineLike(path)) return false;
    const d1 = path.equals(new Segment(model.b, model.d));
    const d2 = path.equals(new Segment(model.a, model.c));
    model.o = d2;
    return d1 || d2;
  }, {onIncorrect: () => $step.addHint('not-a-diagonal-1')});

  diagonal.$el.setAttr('target', 'diagonal');
  $step.score('diagonal');
  $geo1.switchTool('move');
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
      $geopads[0].switchTool('move');
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
      $geopads[1].switchTool('move');
    } else {
      $step.addHint('incorrect');
      path.delete();
    }
  });
}

// -----------------------------------------------------------------------------

export function tessellationDrawing($step: Step) {
  const $polypad = $step.$('x-polypad') as any;
  const $overlayTiles = $step.$('.overlay')!;
  $polypad.load({options: {noPinchPan: true, background: '#f5f5f6'}});

  // TODO Save and restore progress
  let polygons = 0;

  for (const $a of $step.$$('.tessellation .add')) {
    $polypad.bindSource($a, $overlayTiles);
    $a.$('svg')!.setAttr('viewBox', '0 0 80 80');
  }

  const $download = $step.$('.tessellation .icon-btn')!;
  $download.on('click', () => $polypad.$svg.downloadImage('tessellation.png'));
  $body.onKey('Backspace', () => $polypad.selection.delete());

  $polypad.on('move-selection rotate-selection add-tile', () => {
    const tiles = Array.from($polypad.tiles.values()) as PolygonTile[];
    for (const t of tiles) t.$el.removeClass('overlap');
    for (const t of tiles) t.transformed = t.path.rotate(t.rot * Math.PI / 180).translate(t.posn);

    const n = tiles.length;
    for (let i = 0; i < n; ++i) {
      for (let j = i + 1; j < n; ++j) {
        if (Point.distance(tiles[i].posn, tiles[j].posn) > 150) continue;
        if (!Polygon.collision(tiles[i].transformed as Polygon, tiles[j].transformed as Polygon)) continue;
        tiles[i].$el.addClass('overlap');
        tiles[j].$el.addClass('overlap');
      }
    }
  });

  $polypad.on('add-tile', () => {
    polygons += 1;
    if (polygons >= 3) $step.score('shapes0');
    if (polygons >= 5) $step.score('shapes1');
  });
}

export function pentagons($step: Step) {
  const $polypad = $step.$('x-polypad') as any;
  $polypad.load({options: {noPinchPan: true, background: '#f5f5f6'}});
  const $overlayTiles = $step.$('.overlay')!;

  for (const $a of $step.$$('.tessellation .add')) {
    $polypad.bindSource($a, $overlayTiles);
    $a.$('svg')!.setAttr('viewBox', '0 0 80 80');
  }

  const [$flip, $download] = $step.$$('.tessellation .icon-btn');
  $download.on('click', () => $polypad.$svg.downloadImage('tessellation.png'));
  $flip.on('click', () => {
    const c = $polypad.selection.center;
    for (const t of $polypad.selection.tiles) t.flip(c);
  });

  $body.onKey('Backspace', () => $polypad.selection.delete());

  let polygons = 0;
  $polypad.on('add-tile', () => {
    polygons += 1;
    if (polygons >= 3) $step.score('shapes');
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

    (scene.camera as any).fov = 45;
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
