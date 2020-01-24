// =============================================================================
// Polygons and Polyhedra
// (c) Mathigon
// =============================================================================


import {tabulate} from '@mathigon/core';
import {clamp, toWord, Segment, Point, lerp, Line} from '@mathigon/fermat';
import {Browser, slide} from '@mathigon/boost';
import {GeoElement, Geopad, GeoPoint, Slider, Step} from '../shared/types';
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


// Attempted fix for https://github.com/mathigon/textbooks/issues/8
//
// - Uses computeChangedAngles() during model.watch() to figure out which points
// in a GeoPad have moved, and which angles are expected to be adjusted.
//
// - Uses computeGeometry() to determine the angles of the polygon, rounded to integers
// in such a way that only angles adjacent to the user's action (e.g., dragging a point)
// will be affected by the need to add +1 or -1 to deal with rounding error.
//

// computeGeometry()
// Compute the necessary angles and integer-rounded values for these values.
// If the sum of the integer-rounded angles is not the expected sum (e.g., 360 for a quadrilateral),
// then choose an angle to add/subtract the rounding error to create the correct sum.
// The angle to be adjusted will be chosen from the set of adjustableAngleNames, if non-empty,
// and will pointNames[0] otherwise.
//
// The result of computeGeometry will be a geometry object containing the calculated
// angles and their rounded forms.
//
// This function also computes a .overlap boolean which indicates whether
// there are overlapping edges
//

function computeGeometry(model, pointNames, adjustableAngleNames): object {
  // console.log('computeGeometry', pointNames, adjustableAngleNames);
  const numPoints = pointNames.length;
  let sum = 0;
  let roundedSum = 0;
  const geometry = {};
  const expectedSum = (pointNames.length - 2) * 180;
  let adjustThisPoint = pointNames[0]; // If no adjustable angles specified, then arbitrarily use the first one.

  for (let index = 0; index < numPoints; ++index) {
    const prevPointName = pointNames[index === 0 ? numPoints - 1 : index - 1];
    const midPointName = pointNames[index];
    const nextPointName = pointNames[index === numPoints - 1 ? 0 : index + 1];
    const exact = model.angle(model[nextPointName], model[midPointName], model[prevPointName]);
    const deg = exact.deg;
    const rounded = Math.round(deg);

    //
    // The last adjustable point will be adopted as the target of any rounding
    // error adjustments.
    // If the angle is a right angle, or within a degree of that,
    // then it will be excluded as an adjustment candidate
    // Because otherwise the UI would show a right angle with a label of 89
    // or 91 degrees, or a non-right angle with a label of 90.
    //
    if (adjustableAngleNames.indexOf(midPointName) >= 0) {
      if (Math.abs(deg - 90) > 1) {
        adjustThisPoint = midPointName;
      }
      // else {
      //   console.log(midPointName, exact, exact.isRight, deg, Math.abs(deg - 90));
      // }
    }

    sum += deg;
    roundedSum += rounded;
    geometry[midPointName] = {
      exact,
      rounded,
    };
  };

  const delta = expectedSum - roundedSum;
  if (delta !== 0 ) {
    // console.log('Mismatch', adjustableAngleNames, adjustThisPoint, geometry[adjustThisPoint].rounded, roundedSum, expectedSum, delta, roundedSum, sum);
    geometry[adjustThisPoint].rounded += delta;
  }

  geometry.sum = sum;
  geometry.roundedSum = roundedSum;
  geometry.overlap = (Math.round(sum) > expectedSum);

  return geometry;
}


// computeChangedAngles()
// This function would not be necessary if I knew a better way to obtain
// the currently dragged point(s) in a GeoPad. So what this function does is to
// figure out which points have changed position and to return an array of the
// relevant angles that have changed, which includes the adjacent angles to a given
// dragged point.
//
// So if one point is being dragged, then three angles are adjustable.
// If a line segment (two points) were to be dragged, then four angles would be affected.
//
// This function compares oldPoints with the latest values in the model to determine
// what (if anything) changed. It completes by updating oldPoints with the latest model
// values.
//

function computeChangedAngles(model: Observable, pointNames: string[], oldPoints: object[]): string[] {
  const adjustableAngleNames = [];
  const numPoints = pointNames.length;

  for (let index = 0; index < numPoints; ++index) {
    const prevPointName = pointNames[index === 0 ? numPoints - 1 : index - 1];
    const midPointName = pointNames[index];
    const nextPointName = pointNames[index === numPoints - 1 ? 0 : index + 1];

    const newPoint: GeoPoint = model[midPointName];
    const newPointCopy = {x: newPoint.x, y: newPoint.y};
    const oldPoint = oldPoints[midPointName] || newPointCopy;
    if (oldPoint.x !== newPointCopy.x || oldPoint.y !== newPointCopy.y) {
      adjustableAngleNames.push(prevPointName);
      adjustableAngleNames.push(midPointName);
      adjustableAngleNames.push(nextPointName);
    }
    oldPoints[midPointName] = newPointCopy;
  };

  return adjustableAngleNames;
}


export function angles($step: Step): void {
  const model = $step.model;
  const leftPolygon = {
    modelKey: 'geometryLeft',
    pointNames: ['a', 'b', 'c', 'd'],
    oldPoints: {},
    geometry: null,
  };
  const rightPolygon = {
    modelKey: 'geometryRight',
    pointNames: ['e', 'f', 'g', 'h', 'i'],
    oldPoints: {},
    geometry: null,
  }
  const polygons = [
    leftPolygon,
    rightPolygon,
  ];

  polygons.forEach(polygon => {
    polygon.geometry = computeGeometry(model, polygon.pointNames, []);
    computeChangedAngles(model, polygon.pointNames, polygon.oldPoints);
    model.set(polygon.modelKey, polygon.geometry);
  });


  const $buttons = $step.$$('x-anibutton') as Anibutton[];
  for (const [i, $b] of $buttons.entries()) {
    const polygon = polygons[i];
    model.watch(() => $b.setAttr('text', '???'));
    $b.on('click', () => {
      if (polygon.geometry.overlap) return $step.addHint('no-overlap', {force: true});
      $b.play();
      $b.setAttr('text', polygon.geometry.sum + '°');
      $step.score('angle-' + i);
    });
  }


  model.watch(() => {
    polygons.forEach(polygon => {
      const adjustedAngleNames = computeChangedAngles(model, polygon.pointNames, polygon.oldPoints);
      polygon.geometry = computeGeometry(model, polygon.pointNames, []);
      if (adjustedAngleNames.length > 0) {
        polygon.geometry = computeGeometry(model, polygon.pointNames, adjustedAngleNames);
        model.set(polygon.modelKey, polygon.geometry);

        if (polygon.geometry.overlap) $step.addHint('no-overlap');
      }
    });
  });

  $buttons[0].one('click', () => $step.addHint('angles-repeat'));
}

export function regularArea($step: Step) {
  const model = $step.model;
  model.assign({toWord});

  model.set('regular', (c: Point, r: number, n: number) => {
    const points = tabulate(i => {
      const a = Math.PI * (2 * i / n + 1 / 2 - 1 / n);
      return model.point(c.x + r * Math.cos(a), c.y + r * Math.sin(a));
    }, n);
    return model.polygon(...points);
  });
}

// -----------------------------------------------------------------------------

function checkPathMatches(p: GeoElement<Line>, options: Line[]) {
  for (let i = 0; i < options.length; ++i) {
    if (p.val!.equals(options[i])) return i;
  }
  p.remove();
  return -1;
}

export function midsegments($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.setActiveTool('point');

  let points: GeoPoint[] = [];
  let orientation: number;

  $geopad.on('add:point', function (p) {
    if (points.length === 4) return p.remove();
    points.push(p);
    if (points.length === 4) $step.score('points');
  });

  $geopad.on('add:path', function (p) {
    const match = checkPathMatches(p, [
      new Segment(points[0].val!, points[2].val!),
      new Segment(points[1].val!, points[3].val!)
    ]);

    if (match >= 0) {
      orientation = match + 1;
      p.$el.setAttr('target', 'parallel');
      $step.score('diagonal');
    } else {
      $step.addHint('not-a-diagonal');
    }
  });

  $step.onScore('points', () => {
    if (points.length < 4) points = [
      $geopad.drawMovablePoint(new Point(50, 40)),
      $geopad.drawMovablePoint(new Point(70, 250)),
      $geopad.drawMovablePoint(new Point(220, 240)),
      $geopad.drawMovablePoint(new Point(260, 90))
    ];

    $geopad.setActiveTool('move');

    const [a, b, c, d] = points.map(p => p.val);
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
      $geopad.drawPoint(`quad.edges[${i}].midpoint`, {name: `m${i}`, classes: 'red'});
    }

    $geopad.drawPath(`polygon(m0,m1,m2,m3)`, {classes: 'red', name: 'p0', animated: 1000});
  });

  $step.onScore('blank-1 points', () => {
    $geopad.setActiveTool('line');
    $geopad.showGesture(points[0].name, points[2].name);
  });

  $step.onScore('diagonal', () => {
    const [a, b, c, d] = points.map(p => p.name);
    $geopad.setActiveTool('move');

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

  model.set('o', false);
  $geo1.on('add:point', p => p.remove());

  setTimeout(() => {
    if (!$step.scores.has('diagonal')) {
      $geo1.showGesture('a', 'c');
      $geo1.setActiveTool('line');
    }
  }, 1000);

  $geo1.on('add:path', function (p) {
    const match = checkPathMatches(p, [
      new Segment(model.b, model.d),
      new Segment(model.a, model.c)
    ]);

    if (match >= 0) {
      p.$el.setAttr('target', 'diagonal');
      if (match === 1) model.set('o', true);
      $step.score('diagonal');
      $geo1.setActiveTool('move');
    } else {
      $step.addHint('not-a-diagonal-1');
    }
  });
}

export function quadrilateralsArea($step: Step) {
  const $geopads = $step.$$('x-geopad') as Geopad[];

  $geopads[0].setActiveTool('rectangle');
  $geopads[0].on('add:path', path => {
    if (path.val.w * path.val.h === 48) {
      // TODO shift to correct location
      $step.addHint('correct');
      $step.score('draw-1');
    } else {
      $step.addHint('incorrect');
      path.remove();
    }
  });
  $step.onScore('draw-1', () => $geopads[0].setActiveTool('move'));


  $geopads[1].setActiveTool('rectangle');
  $geopads[1].on('add:path', path => {
    if (path.val.w * path.val.h === 48) {
      // TODO shift to correct location
      $step.addHint('correct');
      $step.score('draw-2');
    } else {
      $step.addHint('incorrect');
      path.remove();
    }
  });
  $step.onScore('draw-2', () => $geopads[1].setActiveTool('move'));
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
