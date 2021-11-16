// =============================================================================
// Graphs and Networks
// (c) Mathigon
// =============================================================================


import {Color, isOneOf, last, list, Obj, repeat2D, tabulate, tabulate2D} from '@mathigon/core';
import {factorial, lerp, numberFormat, Random, subsets, toOrdinal} from '@mathigon/fermat';
import {intersections, Point, Segment, SimplePoint} from '@mathigon/euclid';
import {$, $$, $N, animate, Draggable, SVGParentView, svgPointerPosn, SVGView} from '@mathigon/boost';
import {Slideshow, Step} from '@mathigon/studio';

import {Edge, edgeToSegment, Graph} from './components/graph';
import {Sketch} from './components/sketch';
import {borders} from './components/four-colour-maps';
import {travellingSalesman} from './components/geometry';
import {BLUE, GREEN, ORANGE, PURPLE, RED, TEAL, YELLOW} from '../shared/constants';

import '../shared/components/solved/solved';


const person = 'M9,6C5.6,5.2,2.4,4.9,4,2c4.7-8.9,1-14-4-14c-5.1,0-8.7,5.3-4,14c1.6,2.9-1.7,3.2-5,4c-3.5,0.8-3,2.7-3,6h24C12,8.7,12.5,6.8,9,6z';


export function intro($section: Step) {
  const $graph = $section.$('.graph') as SVGParentView;
  new Graph($graph, 8,
      [[0, 4], [4, 5], [5, 2], [5, 1], [1, 2], [2, 3], [3, 4], [3, 6], [6, 7],
        [7, 3], [2, 7]]);

  $section.onScore('blank-0', () => $graph.removeClass('novertices'));
  $section.onScore('blank-1', () => $graph.removeClass('noedges'));
  $section.onScore('blank-0 blank-1',
      () => $section.addHint('firstGraphSolved'));
}

export function intro1($section: Step) {
  const graphs = $section.$$('.graph') as SVGParentView[];
  new Graph(graphs[0], 7,
      [[0, 1], [1, 2], [2, 0], [1, 3], [3, 4], [4, 0], [4, 5], [6, 3]],
      {directed: true});
  new Graph(graphs[1], 9,
      [[0, 1], [1, 2], [2, 3], [3, 0], [1, 3], [4, 5], [5, 6], [6, 4], [7, 8]]);
  new Graph(graphs[2], 4,
      [[0, 1], [1, 0], [1, 2], [2, 1], [2, 3], [3, 2], [3, 0], [0, 3], [0, 0],
        [1, 1], [2, 2], [3, 3]], {arc: true});
}

export function intro2($section: Step) {
  const graphs = $section.$$('.graph') as SVGParentView[];

  new Graph(graphs[1], 6, [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [2, 5]],
      {vertex: BLUE, edge: BLUE});
  new Graph(graphs[3], 5, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]],
      {vertex: GREEN, edge: GREEN});
  new Graph(graphs[5], 6,
      [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [4, 5], [5, 1]],
      {vertex: YELLOW, edge: YELLOW});

  new Graph(graphs[0], 8,
      [[0, 1], [1, 2], [2, 3], [3, 0], [1, 3], [1, 4], [4, 6], [6, 2], [3, 5],
        [5, 7], [7, 0]], {
        vertex: (v) => (v < 6 ? BLUE : '#DDD'),
        edge: (u, v) => (u < 6 && v < 6 && !(u === 1 && v === 3)) ? BLUE :
                        '#DDD'
      });

  new Graph(graphs[2], 7,
      [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 3], [1, 3], [2, 5], [5, 3],
        [5, 6], [6, 3], [6, 4]], {
        vertex: (v) => (v < 5 ? GREEN : '#DDD'),
        edge: (u, v) => (u < 5 && v < 5 && !(v === 3 && (u === 0 || u === 1))) ?
                        GREEN : '#DDD'
      });

  new Graph(graphs[4], 8,
      [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [4, 5], [5, 1], [1, 3], [1, 4],
        [3, 6], [6, 0], [4, 7], [7, 0]], {
        vertex: (v) => (v < 6 ? YELLOW : '#DDD'),
        edge: (u, v) => (u < 6 && v < 6 && !(u === 1 && (v === 3 || v === 4))) ?
                        YELLOW : '#DDD'
      });
}

export function intro3($section: Step) {
  const graphs = $section.$$('.graph') as SVGParentView[];

  new Graph(graphs[0], 5,
      [[0, 1], [1, 2], [2, 0], [1, 3], [3, 4], [4, 0], [4, 2]]);
  new Graph(graphs[1], 8,
      [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0], [0, 2],
        [1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 0], [7, 1]]);

  new Graph(graphs[2], 7,
      [[0, 1], [0, 2], [0, 3], [1, 4], [4, 2], [2, 5], [5, 3], [3, 6], [6, 1]],
      {vertex: (v) => (v ? '#DDD' : RED)});

  new Graph(graphs[3], 7,
      [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 2], [2, 3], [3, 4],
        [4, 5], [5, 6], [6, 1]],
      {vertex: (v) => (v ? '#DDD' : RED)});
}

export function intro4($section: Step) {
  const graphs = $section.$$('.graph') as SVGParentView[];
  new Graph(graphs[0], 3, [[0, 1], [1, 2], [2, 0]]);
  new Graph(graphs[1], 5, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]]);
  new Graph(graphs[2], 7,
      [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0]]);
}

export function handshakes1($section: Step) {
  const $graph = $section.$('.graph') as SVGParentView;
  const g = new Graph($graph, 5, [], {icon: person});

  $section.model.watch((state: any) => {
    g.load(state.hnd, subsets(list(state.hnd), 2));
    g.attraction /= 2;
    g.repulsion *= 2;
  });
}

export function handshakes2($step: Step) {
  $step.model.handshakeTable = (n: number) => {
    const colours = Color.rainbow($step.model.n);

    function makePerson(x: number, y: number) {
      const newX = (x >= y ? x + 1 : x);
      return ['<td', (x < y ? ' class="duplicate"' : ''),
        '><span class="person" style="background: ',
        colours[y], '">', y + 1,
        '</span> + <span class="person" style="background: ', colours[newX],
        '">', newX + 1, '</span></td>'].join('');
    }

    return '<table class="handshakes grid">' +
           tabulate2D(makePerson, n - 1, n).map(x => `<tr>${x.join('')}</tr>`)
               .join('') +
           '</table>';
  };
}

export function handshakes2a($step: Step) {
  $step.onScore('blank-0', () => {
    if ($step.prev) $step.prev.addClass('complete');
  });
}

export function handshakes3($section: Step) {
  const graphs = $$('.graph', $section) as SVGParentView[];
  new Graph(graphs[0], 4, subsets(list(4), 2) as [number, number][]);
  new Graph(graphs[1], 5, subsets(list(5), 2) as [number, number][]);
  new Graph(graphs[2], 6, subsets(list(6), 2) as [number, number][]);
  new Graph(graphs[3], 7, subsets(list(7), 2) as [number, number][]);
}

export function handshakes4($section: Step) {
  const graph = $section.$('.graph') as SVGParentView;
  const g = new Graph(graph, 0, [], {static: true, icon: person, bound: true});

  $section.model.watch((state: any) => {
    const m = state.m;
    const f = state.f;

    const mPoints = tabulate(x => ({x: (x + 1) / (m + 1) * 300, y: 30}), m);
    const fPoints = tabulate(x => ({x: (x + 1) / (f + 1) * 300, y: 110}), f);

    const edges: [number, number][] = [];
    for (let i = 0; i < m; ++i) {
      for (let j = 0; j < f; ++j) edges.push([i, m + j]);
    }

    g.options.vertex = (v) => v < m ? '#20a0ff' : '#ff207e';
    g.load(m + f, edges, mPoints.concat(fPoints));
  });
}

export function bridges($section: Step) {
  $section.$$('.tab').forEach(($el, i) => {
    const $svg = $el.$('svg.map') as SVGParentView;
    const $paths = $('.paths', $svg) as SVGView;
    const $water = $('.water', $svg)!;
    const $bridges = $$('.bridge', $svg);
    const $error = $('.error', $svg)!;
    const $solveds = $section.$$('x-solved');

    let success = false;
    let attempts = 0;
    let totalCrossed = 0;

    $error.hide();

    const map = new Sketch($svg, {paths: $paths});
    map.on('start', () => {
      map.clear();
      attempts += 1;
    });

    const [$clear, $skip] = $el.$$('.btn');
    $clear.on('click', () => map.clear());

    function completeMap() {
      $skip.exit('pop');
      if (isOneOf(i, 1, 2)) return $section.addHint('mapKeepTrying');
      $section.addHint(i === 0 ? 'tryDifferentMapA' : 'tryDifferentMapB');
      $section.score('bridge-' + i);
    }
    $skip.one('click', completeMap);

    map.on('end', () => {
      if (success) return;
      if (attempts === 3 && i < 2) $section.addHint('tryDifferentStartPoint');
      if (attempts === 4) completeMap();
    });

    map.on('clear', () => {
      totalCrossed = 0;
      $error.exit('pop', 200);
      $solveds[i].exit();
    });

    $water.on('pointerenter', (e) => {
      if (!map.drawing) return;
      map.stop();
      const p = svgPointerPosn(e, $svg);
      $error.css('transform', `translate(${p.x - 20}px, ${p.y - 20}px)`);
      $error.enter('pop', 300);
      $section.addHint('crossWater');
    });

    $bridges.forEach(($bridge) => {
      let enter: Point;
      let crossed = false;

      $bridge.on('pointerenter', (e) => {
        if (!map.drawing) return;
        enter = svgPointerPosn(e, $svg);
        if (crossed) {
          map.stop();
          $bridge.addClass('red');
          $section.addHint('bridgeCrossedBefore');
        }
        crossed = true;
      });

      $bridge.on('pointerleave', (e) => {
        if (!map.drawing) return;
        const out = svgPointerPosn(e, $svg);
        if (Point.distance(enter || out, out) < 40) {
          crossed = false;
        } else {
          $bridge.addClass('green');
          totalCrossed += 1;
          if (totalCrossed === $bridges.length) {
            $solveds[i].enter();
            $skip.exit('pop');
            $section.score('bridge-' + i);
            success = true;
          }
        }
      });

      map.on('clear', () => {
        crossed = false;
        $bridge.removeClass('red green');
      });
    });
  });
}

export function bridges1($section: Step) {
  const $svg = $section.$('svg');

  const $water = $('.water', $svg)!;
  const $bg = $('.background', $svg)!;
  const $bridges = $$('.bridge', $svg);

  const $edges = $$('.edge', $svg);
  const $vertices = $$('.vertex', $svg);
  const $trace = $('.trace', $svg)!;

  $edges.forEach($e => $e.hide());
  $vertices.forEach($e => $e.hide());
  $trace.hide();

  $section.onScore('blank-0', () => {
    $vertices.forEach($v => $v.enter('pop', 400));
  });

  $section.onScore('blank-1', () => {
    setTimeout(() => {
      for (const $x of [$water, $bg, ...$bridges]) $x.exit('fade', 800);
    }, 1600);
    $edges.forEach($e => $e.enter('draw', 800));
  });

  $section.onScore('blank-0 blank-1', () => {
    setTimeout(() => $trace.enter('draw', 4000), 2000);
  });
}

export function bridges3($section: Step) {
  const g = GREEN;
  const r = RED;
  const b = BLUE;
  const o = ORANGE;

  const colours: Obj<(string|Color)[]> = {
    val: Color.rainbow(8),
    eo: [g, r, g, r, g, r, g],
    prime: [g, g, r, g, r, g, r],
    size: [b, b, o, o, o, o, o]
  };

  const $circles = $section.$$('circle');

  $section.model.watch((s: any) => {
    $section.score(s.colour);
    for (const $c of $circles) {
      const y = +$c.attr('data-value');
      $c.css('fill', '' + colours[s.colour][y - 2]);  // -2 because no 0s and 1s
    }
  });
}

export function bridges4($section: Step) {
  const $svg = $('svg', $section)!;
  const $g = $('g', $section)!;
  const $edges = $$('line', $svg);
  const $vertex = $('circle', $svg)!;
  const $text = $('text', $svg)!;
  const $trace = $('path', $svg)!;
  const $slideshow = $section.$('x-slideshow')!;

  for (let i = 0; i < 6; ++i) $edges[i].hide();
  $trace.hide();

  $slideshow.on('next', async (x: number) => {
    if (x < 4) {
      await $edges[2 * x - 2].enter('draw', 600).promise;
      $text.textStr = 2 * x - 1;
      $vertex.css('fill', RED);
      await $edges[2 * x - 1].enter('draw', 600).promise;
      $text.textStr = 2 * x;
      $vertex.css('fill', GREEN);

    } else if (x === 5) {
      $g.animate({transform: ['scale(1)', 'scale(.4)']}, 600);
      $trace.enter('draw', 5000, 800);
    }
  });

  $slideshow.on('back', async (x: number) => {
    if (x < 3) {
      await $edges[2 * x + 1].exit('draw').promise;
      await $edges[2 * x].exit('draw', 400);
      $text.textStr = 2 * x || '';
      $vertex.css('fill', x ? GREEN : '#BBB');

    } else if (x === 4) {
      $g.animate({transform: ['scale(.4)', 'scale(1)']});
      $trace.exit('fade', 1000);
    }
  });
}

export function utilities($section: Step) {
  let currentUtility: SVGView;
  let startUtility: SVGView;
  let errors: SVGView[] = [];

  const $svg = $('#map-utilities') as SVGParentView;
  const map = new Sketch($svg, {
    noStart: true,
    paths: $('#utility-paths') as SVGView,
    intersect: true
  });

  let attempts = 0;

  function resolve(hint?: string) {
    attempts += 1;
    if (attempts === 3) {
      $section.score('try-three-times');
      $section.addHint('utilitiesImpossible');
    } else if (hint) {
      $section.addHint(hint);
    }
  }

  setTimeout(() => {
    if ($section.isReady) return;
    $section.score('try-three-times');
    $section.addHint('utilitiesImpossible');
    attempts = 4;
  }, 45000);

  map.on('intersect', (e) => {
    e.paths[0].css('stroke', '#C00');
    e.paths[1].css('stroke', '#C00');
    errors.push(...e.paths);
    map.stop();
    resolve('linesCross');
  });

  const allUtilities = $section.$$('.utility1, .utility2, .utility3');
  const sectors = new WeakMap();

  function clear() {
    allUtilities.forEach($el => $el.css('opacity', 0));
    map.clear();
    errors = [];
    resolve();
  }

  $section.$('.btn')!.on('click', clear);

  for (const $ut of $section.$$('.utility') as SVGView[]) {
    const $c = $ut.children[0];
    const p = {x: +$c.attr('cx'), y: +$c.attr('cy')};
    let onThis = false;
    const dataType = $ut.data.type;

    $ut.on('pointerdown', (e: PointerEvent) => {
      currentUtility = $ut;
      startUtility = $ut;
      e.preventDefault();

      map.clearPaths(errors);
      for (const e of errors) {
        if (sectors.has(e)) sectors.get(e).css('opacity', 0);
      }
      errors = [];

      map.start(p);
      map.drawing = false;
      onThis = true;
    });

    $ut.on('pointerleave', () => {
      if (!onThis) return;
      map.drawing = true;
      onThis = false;
    });

    $ut.on('pointerenter', () => {
      if (!map.drawing || currentUtility === $ut) return;
      map.addPoint(p);
      map.stop();
      map.p = undefined;
      $ut.effect('pulse-down');
      if (startUtility.data.type === dataType) {
        last(map.paths).css('stroke', '#C00');
        errors.push(last(map.paths));
        if (dataType === 'house') {
          $section.addHint('housesToEachOther');
        } else {
          $section.addHint('factoriesToEachOther');
        }
      } else {
        const sector = (startUtility.data.type === 'house') ?
                     $('.' + $ut.data.utility, currentUtility)! :
                     $('.' + currentUtility.data.utility, $ut)!;
        sector.css('opacity', 1);
        sectors.set(last(map.paths), sector);
      }
      // TODO Error on connect twice
    });
  }
}

export function utilities1($section: Step) {
  const graphs = $section.$$('.graph') as SVGParentView[];

  const p3 = [{x: 100, y: 35}, {x: 170, y: 155}, {x: 30, y: 155}];
  new Graph(graphs[0], 3, subsets(list(3), 2), {r: 8, static: true, posn: p3});

  const p4 = [{x: 40, y: 40}, {x: 160, y: 40}, {x: 160, y: 160}, {x: 40, y: 160}];
  const p4x = [{x: 100, y: 110}, {x: 100, y: 25}, {x: 175, y: 160}, {x: 25, y: 160}];
  const k4 = new Graph(graphs[1], 4, subsets(list(4), 2),
      {r: 8, static: true, posn: p4});

  const p5 = [{x: 100, y: 30}, {x: 175, y: 85}, {x: 145, y: 170}, {x: 55, y: 170}, {x: 25, y: 85}];
  const p5x = [{x: 100, y: 30}, {x: 120, y: 110}, {x: 185, y: 170}, {x: 15, y: 170}, {x: 80, y: 110}];
  const k5 = new Graph(graphs[2], 5, subsets(list(5), 2),
      {r: 8, static: true, posn: p5});

  function transition(graph: Graph, to: SimplePoint[]) {
    const from = graph.vertices.map(v => ({x: v.posn.x, y: v.posn.y}));
    animate((q) => {
      graph.arrange(graph.vertices.map((v, i) => {
        return {
          x: lerp(from[i].x, to[i].x, q),
          y: lerp(from[i].y, to[i].y, q)
        };
      }));
    }, 800);
  }

  $section.onScore('blank-0', () => transition(k4, p4x));

  $section.onScore('blank-1', () => {
    transition(k5, p5x);
    k5.edges[1].$el.animate({stroke: '#C00'}, 800);
    k5.edges[4].$el.animate({stroke: '#C00'}, 800);
  });
}

export function planarity($section: Step) {
  const $svg = $section.$('svg#planarity') as SVGParentView;
  const $newBtn = $section.$('.btn')!;
  const $solveds = $section.$$('x-solved');

  const graph = new Graph($svg, 0, [], {r: 12, static: true, bound: true});
  let isSolved = false;
  let creating = false;

  function shuffle(n: number) {
    return tabulate(() =>
      new Point(Math.random() * graph.width, Math.random() * graph.height), n);
  }

  function intersect(edges: Edge[]) {
    let count = 0;

    edges.forEach((e) => {
      e.intersect = e.vertices[0].intersect = e.vertices[1].intersect = false;
    });

    for (let i = 0; i < edges.length; ++i) {
      const e1 = edgeToSegment(edges[i]);
      for (let j = i + 1; j < edges.length; ++j) {
        const e2 = edgeToSegment(edges[j]);
        if (intersections(e1, e2).length) {
          edges[i].intersect =
              edges[j].intersect = edges[i].vertices[0].intersect =
                  edges[i].vertices[1].intersect =
                      edges[j].vertices[0].intersect =
                          edges[j].vertices[1].intersect = true;
          count += 1;
        }
      }
    }

    return count;
  }

  function generateGraph(n: number) {
    creating = true;
    $solveds[0].exit();
    isSolved = false;

    const points = shuffle(n);
    const edges: number[][] = [];

    function addEdge(u: number, v: number) {
      if (u === v) return;
      const edge = new Segment(points[u], points[v]);
      for (let i = 0; i < edges.length; ++i) {
        const e2 = new Segment(points[edges[i][0]], points[edges[i][1]]);
        if (edge.equals(e2) || intersections(edge, e2).length) return;
      }

      edges.push([u, v]);
    }

    for (let i = 0; i < n; ++i) addEdge(i, Random.integer(n));
    for (let i = 0; i < n; ++i) for (let j = i + 1; j < n; ++j) addEdge(i, j);

    graph.load(n, edges, shuffle(n));

    while (!intersect(graph.edges) && n > 4) {
      graph.arrange(shuffle(n));
    }
    creating = false;
  }

  graph.on('update', () => {
    const count = intersect(graph.edges);
    if (!isSolved && !creating && !count) {
      $section.score('planarity');
      $solveds[0].enter();
      isSolved = true;
    }

    graph.vertices.forEach(v => v.$el.setClass('intersect', !!v.intersect));
    graph.edges.forEach(e => e.$el.setClass('intersect', !!e.intersect));
  });

  $newBtn.on('click', () => generateGraph($section.model.n));
  $section.model.watch(() => generateGraph($section.model.n));
}

export function euler($section: Step) {
  const $svgs = $section.$$('svg');
  const $notes = $section.$$('.euler-sum');

  list(9).forEach((i) => {
    const x = i % 3;
    const $svg = $svgs[(i - x) / 3];
    $section.onScore('blank-' + i, () => {
      if (x === 0) {
        $svg.$$('circle').forEach(($c) => $c.animate({fill: GREEN}));
      } else if (x === 1) {
        $svg.$$('polygon').forEach(($c) => $c.animate({opacity: 0.3}));
        $notes[(i - x) / 3].enter('fade');
      } else if (x === 2) {
        $svg.$$('line').forEach(($c) => $c.animate({stroke: RED}));
      }
    });
  });
}

export function euler2($section: Step) {
  const $vertices = $section.$$('circle') as SVGView[];
  const $edges = $section.$$('line') as SVGView[];
  const $slideshow = $section.$('x-slideshow') as Slideshow;

  const $f = $section.$$('.xf');
  const $e = $section.$$('.xe');
  const $v = $section.$$('.xv');

  const positions = [
    [{x: 300, y: 100}, {x: 270, y: 170}, {x: 270, y: 170}, {x: 300, y: 100}],  // show 0
    [{x: 200, y: 100}, {x: 270, y: 170}, {x: 270, y: 170}, {x: 390, y: 100}],  // show 0, 3
    [{x: 270, y: 30}, {x: 270, y: 170}, {x: 270, y: 170}, {x: 390, y: 100}],  // show 0, 1, 3
    [{x: 270, y: 100}, {x: 150, y: 100}, {x: 270, y: 170}, {x: 390, y: 100}],  // show 0, 1, 3
    [{x: 270, y: 30}, {x: 150, y: 100}, {x: 270, y: 170}, {x: 390, y: 100}]   // show all
  ];

  let slide = 0;
  $vertices.forEach(($v, i) => $v.setCenter(positions[0][i]));
  $edges.forEach(($e, i) => {
    $e.setLine(positions[0][i], positions[0][(i + 1) % 4]);
  });

  $slideshow.on('next back', (s: number) => {
    const start = positions[slide];
    const end = positions[s];
    slide = s;

    animate((x) => {
      $vertices.forEach(($v, i) => {
        $v.setCenter(Point.interpolate(start[i], end[i], x));
      });
      $edges.forEach(($e, i) => {
        $e.setLine(Point.interpolate(start[i], end[i], x),
            Point.interpolate(start[(i + 1) % 4], end[(i + 1) % 4], x));
      });
    }, 400);
  });

  $slideshow.on('next', (s: number) => {
    if (s === 1) {
      $vertices[3].enter('pop', 1);
    } else if (s === 2) {
      $vertices[1].enter('pop', 400, 400);
      $edges[0].enter('fade', 400, 400);
      $edges[2].enter('fade', 400, 400);
    } else if (s === 3) {
      $edges[2].exit('fade', 400);
    } else if (s === 4) {
      $vertices[2].enter('pop', 400);
      $edges[1].enter('fade', 400);
      $edges[2].enter('fade', 400);
    }
  });

  $slideshow.on('back', (s: number) => {
    if (s === 0) {
      $vertices[3].exit('pop', 400);
    } else if (s === 1) {
      $vertices[1].exit('pop', 400);
      $edges[0].exit('fade', 400);
      $edges[2].exit('fade', 400);
    } else if (s === 2) {
      $edges[2].enter('fade', 400);
    } else if (s === 3) {
      $vertices[2].exit('pop');
      $edges[1].exit('fade', 400);
      $edges[2].exit('fade', 400);
    }
  });

  const values = [[0, 1, 0], [0, 2, 1], [1, 3, 3], [0, 3, 2], [1, 4, 4]];
  $slideshow.on('step', (s: number) => {
    $f.forEach(x => x.textStr = values[s][0]);
    $v.forEach(x => x.textStr = values[s][1]);
    $e.forEach(x => x.textStr = values[s][2]);
  });
}

export function euler3($section: Step) {
  const $svg = $section.$('#dominoes')!;
  const $gs = $svg.$$('g');

  let hasClicked = false;
  $svg.on('click', () => {
    if (hasClicked) return;
    hasClicked = true;

    $svg.css('cursor', 'default');
    $gs.forEach(($g, i) => {
      setTimeout(() => $g.css('transform', 'rotate(23.5deg)'), i * 100);
      setTimeout(() => $g.css('transform', 'rotate(43.5deg)'), i * 100 + 100);
      setTimeout(() => $g.css('transform', 'rotate(  56deg)'), i * 100 + 200);
      setTimeout(() => $g.css('transform', 'rotate(  62deg)'), i * 100 + 300);
      setTimeout(() => $g.css('transform', 'rotate(64.5deg)'), i * 100 + 400);
      setTimeout(() => $g.css('transform', 'rotate(65.5deg)'), i * 100 + 500);
    });
  });
}

export function euler4($step: Step) {
  const $img = $step.$$('.img-sequence');
  const $slider = $step.$$('x-slider');
  const src = $img.map($i => $i.attr('src'));

  for (const i of [0, 1]) {
    // Preload images
    for (let j = 1; j < 32; ++j) {
      const img = new Image();
      img.src = src[i].replace('0', '' + j);
    }

    // Update when moving slider
    $slider[i].on('move', j => $img[i].setAttr('src', src[i].replace('0', j)));
  }
}

export function maps1($section: Step) {
  const colours = [RED, BLUE, GREEN, YELLOW, ORANGE, PURPLE, TEAL];
  const $colours = $section.$$('.four-colour-icon');
  $colours[0].addClass('on');
  let activeColour = 0;
  let warned = false;

  $colours.forEach(($el, i) => {
    $el.css('background', colours[i]);
    $el.on('click', () => {
      $colours[activeColour].removeClass('on');
      $colours[i].addClass('on');
      activeColour = i;
    });
  });

  $section.$$('.tab').forEach(($map, i) => {
    const $count = $map.$('.colour-count span')!;
    const $countries = $map.$('svg.map')!.children;
    const $solveds = $section.$$('x-solved');

    const countryIds: string[] = [];
    let countryColours: Obj<number> = {};
    let colourUses = [0, 0, 0, 0, 0, 0, 0];
    let completed = 10;
    let used = 0;

    $countries.forEach(($c) => {
      const id = $c.id;
      const neighbours = borders[i][id] || [];
      countryIds.push(id);

      // const initial = colours.indexOf($c.attr('fill'));
      $c.css('fill', '#CCC');

      $c.on('click', () => {
        for (const n of neighbours) {
          if (countryColours[n] === activeColour) {
            if (!warned) $section.addHint('mapError');
            warned = true;
            return;
          }
        }

        if (countryColours[id] != undefined) --colourUses[countryColours[id]];
        ++colourUses[activeColour];
        $count.textStr = used = colourUses.filter(x => x > 0).length;

        countryColours[id] = activeColour;
        $c.css('fill', colours[activeColour]);

        if (used < completed &&
            countryIds.every(id => countryColours[id] != undefined)) {
          completed = used;
          if (used <= 4) {
            $solveds[i].enter();
            $section.score('map-' + i);
          } else {
            $section.addHint('mapFewer');
          }
        }
      });
    });

    $map.$('.clear')!.on('click', () => {
      $count.textStr = used = 0;
      countryColours = {};
      $countries.forEach($c => $c.css('fill', '#CCC'));
      $solveds[i].exit();
      colourUses = [0, 0, 0, 0, 0, 0, 0];
    });
  });
}

export function maps2($section: Step) {
  const $svg = $section.$('svg') as SVGParentView;
  const $countries = $svg.$$('polygon');
  const $edges = $svg.$$('path');
  const $vertices = $svg.$$('circle');

  $edges.forEach($e => $e.exit());
  $vertices.forEach($e => $e.exit());

  $section.onScore('blank-0', () => {
    $vertices.forEach($v => $v.enter('pop', 600));
    $countries.forEach($c => $c.animate({opacity: [1, 0.4]}, 800));
  });

  $section.onScore('blank-1', () => {
    $edges.forEach($e => $e.enter('draw', 800));
    $countries.forEach($c => $c.animate({opacity: 0.1}, 800));
  });
}

export function salesman2($section: Step) {
  $section.model.tsmString = (x: number) => {
    const a = [`There are <strong>${x}</strong> choices for the first city.`];
    if (x > 2) {
      a.push(`After picking the first city, there are only <strong>${x - 1}</strong> choices left for the second city.`);
    }
    for (let i = 3; i < Math.min(6, x); ++i) {
      a.push(`Then there are <strong>${x - i + 1}</strong> choices for the ${toOrdinal(i)} city.`);
    }
    if (x > 6) a.push('&hellip;');
    a.push(`Finally, there is only <strong>1</strong> choice left for the ${toOrdinal(x)} city.`);

    return '<li style="margin-bottom: 0">' +
           a.join('</li><li style="margin-bottom: 0">') + '</li>';
  };

  $section.model.tsnPaths = (x: number) => {
    return list(x, 1).join(' × ') + ' = ' + numberFormat(factorial(x));
  };
}

export function salesman3($section: Step) {
  $section.model.factorial = (x: number) => numberFormat(factorial(x));
}

export function salesman4($step: Step) {
  const $svg = $step.$('.tsm svg') as SVGParentView;
  const $bg = $N('rect', {width: 760, height: 480}, $svg);
  const $path = $N('path', {}, $svg) as SVGView;

  let points: SimplePoint[] = [];
  let move = 0;

  function redraw() {
    if (points.length < 2) return $path.points = [];

    const matrix = repeat2D(0, points.length, points.length);
    for (let i = 0; i < points.length; ++i) {
      for (let j = 0; j < i; ++j) {
        matrix[i][j] = matrix[j][i] = Point.distance(points[i], points[j]);
      }
    }
    const tsm = travellingSalesman(matrix);
    $path.points = tsm.path!.map(i => points[i]);
  }

  function addPoint(posn: SimplePoint) {
    const $c = $N('circle', {r: 15, cx: 0, cy: 0}, $svg);
    const drag = new Draggable($c, {$parent: $svg, useTransform: true});

    drag.on('move', (e) => {
      posn.x = e.posn.x;
      posn.y = e.posn.y;
      redraw();
    });

    drag.on('click', () => {
      $c.remove();
      drag.disabled = true;
      points = points.filter(p => p !== posn);
      redraw();
    });

    drag.on('end', () => {
      move += 1;
      if (move >= 3) $step.score('move');
    });

    drag.setPosition(posn.x, posn.y);
    points.push(posn);
    redraw();
  }

  $bg.on('click', (e) => {
    if ($path.points.length > 7) return;
    addPoint(svgPointerPosn(e, $svg));
  });

  const initial = [{x: 150, y: 110}, {x: 360, y: 240}, {x: 520, y: 170},
    {x: 420, y: 400}, {x: 120, y: 340}, {x: 330, y: 60}];
  for (const p of initial) addPoint(p);
}
