// =============================================================================
// Graphs and Networks
// (c) Mathigon
// =============================================================================



import { last, tabulate, list, isOneOf } from '@mathigon/core';
import { factorial, random, numberFormat, toOrdinal, Point, Segment, subsets } from '@mathigon/fermat';
import { $, $$, $N, Colour, svgPointerPosn, animate, Draggable } from '@mathigon/boost';

import { Graph } from './components/graph';
import { Sketch } from './components/sketch';
import { borders } from './components/four-colour-maps';
import { travellingSalesman } from './components/geometry';


const person = 'M9,6C5.6,5.2,2.4,4.9,4,2c4.7-8.9,1-14-4-14c-5.1,0-8.7,5.3-4,' +
  '14c1.6,2.9-1.7,3.2-5,4c-3.5,0.8-3,2.7-3,6h24C12,8.7,12.5,6.8,9,6z';

const RED = '#b30469';
const BLUE = '#1f7aff';
const GREEN = '#31b304';
const YELLOW = '#ff941f';

export function intro($section) {
  let $graph = $section.$('.graph');
  new Graph($graph, 8, [[0,4],[4,5],[5,2],[5,1],[1,2],[2,3],[3,4],[3,6],[6,7],[7,3],[2,7]]);

  $section.onScore('blank-0', function() { $graph.removeClass('novertices'); });
  $section.onScore('blank-1', function() { $graph.removeClass('noedges'); });
  $section.onScore('blank-0 blank-1', function() { $section.addHint('firstGraphSolved'); });
}

export function intro1($section) {
  let graphs = $section.$$('.graph');
  new Graph(graphs[0], 7, [[0,1],[1,2],[2,0],[1,3],[3,4],[4,0],[4,5],[6,3]], { directed: true });
  new Graph(graphs[1], 9, [[0,1],[1,2],[2,3],[3,0],[1,3],[4,5],[5,6],[6,4],[7,8]]);
  new Graph(graphs[2], 4, [[0,1],[1,0],[1,2],[2,1],[2,3],[3,2],[3,0],[0,3],[0,0],[1,1],[2,2],[3,3]], { arc: true });
}

export function intro2($section) {
  let graphs = $section.$$('.graph');

  new Graph(graphs[0], 6, [[0,1],[1,2],[2,3],[3,0],[0,4],[2,5]], { vertex: BLUE, edge: BLUE });
  new Graph(graphs[2], 5, [[0,1],[1,2],[2,3],[3,4],[4,0]], { vertex: GREEN, edge: GREEN });
  new Graph(graphs[4], 6, [[0,1],[1,2],[2,3],[3,0],[0,4],[4,5],[5,1]], { vertex: YELLOW, edge: YELLOW });

  new Graph(graphs[1], 8, [[0,1],[1,2],[2,3],[3,0],[1,3],[1,4],[4,6],[6,2],[3,5],[5,7],[7,0]], {
    vertex: (v) => (v < 6 ? BLUE : '#DDD'),
    edge: function(u, v) { return (u < 6 && v < 6 && !(u === 1 && v === 3)) ? BLUE : '#DDD'; }
  });

  new Graph(graphs[3], 7, [[0,1],[1,2],[2,3],[3,4],[4,0],[0,3],[1,3],[2,5],[5,3],[5,6],[6,3],[6,4]], {
    vertex: (v) => (v < 5 ? GREEN : '#DDD'),
    edge: function(u, v) { return (u < 5 && v < 5 && !(v === 3 && (u === 0 || u === 1))) ? GREEN : '#DDD'; }
  });

  new Graph(graphs[5], 8, [[0,1],[1,2],[2,3],[3,0],[0,4],[4,5],[5,1],[1,3],[1,4],[3,6],[6,0],[4,7],[7,0]], {
    vertex: (v) => (v < 6 ? YELLOW : '#DDD'),
    edge: function(u, v) { return (u < 6 && v < 6 && !(u === 1 && (v === 3 || v === 4))) ? YELLOW : '#DDD'; }
  });
}

export function intro3($section) {
  let graphs = $section.$$('.graph');

  new Graph(graphs[0], 5, [[0,1],[1,2],[2,0],[1,3],[3,4],[4,0],[4,2]]);
  new Graph(graphs[1], 8, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,0],[7,1]]);

  new Graph(graphs[2], 7, [[0,1],[0,2],[0,3],[1,4],[4,2],[2,5],[5,3],[3,6],[6,1]],
    { vertex: (v) => (v ? '#DDD' : RED) });

  new Graph(graphs[3], 7, [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,2],[2,3],[3,4],[4,5],[5,6],[6,1]],
    { vertex: (v) => (v ? '#DDD' : RED) });
}

export function intro4($section) {
  let graphs = $section.$$('.graph');
  new Graph(graphs[0], 3, [[0,1],[1,2],[2,0]]);
  new Graph(graphs[1], 5, [[0,1],[1,2],[2,3],[3,4],[4,0]]);
  new Graph(graphs[2], 7, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]]);
}

export function handshakes1($section) {
  let g = new Graph($('.graph', $section), 5, [], { icon: person });

  $section.model.watch((state) => {
    g.load(state.hnd, subsets(list(state.hnd), 2));
    g.attraction /= 2;
    g.repulsion *= 2;
  });
}

export function handshakes2($step) {
  $step.model.set('handshakeTable', function(n) {
    let colours = Colour.rainbow($step.model.n);

    function makePerson(x, y) {
      let newX= (x>=y ? x+1 : x);
      return ['<td', (x<y ? ' class="duplicate"' : ''), '><span class="person" style="background: ',
        colours[y], '">', y+1, '</span> + <span class="person" style="background: ', colours[newX],
        '">', newX + 1, '</span></td>'].join('');
    }

    return '<table class="handshakes grid">' +
      tabulate(makePerson, n-1, n).map(x => `<tr>${ x.join('') }</tr>`).join('') +
      '</table>';
  });
}

export function handshakes2a($step) {
  $step.onScore('blank-0', () => $step.prev.addClass('complete'));
}

export function handshakes3($section) {
  let graphs = $$('.graph', $section);
  new Graph(graphs[0], 4, subsets(list(4), 2));
  new Graph(graphs[1], 5, subsets(list(5), 2));
  new Graph(graphs[2], 6, subsets(list(6), 2));
  new Graph(graphs[3], 7, subsets(list(7), 2));
}

export function handshakes4($section) {
  let g = new Graph($('.graph', $section), 0, [],
    { static: true, icon: person, bound: true });

  $section.model.watch(function(state) {
    let m = state.m;
    let f = state.f;

    let mPoints = tabulate(x => ({ x: (x+1) / (m+1) * 300, y:  30 }), m);
    let fPoints = tabulate(x => ({ x: (x+1) / (f+1) * 300, y: 110 }), f);

    let edges = [];
    for (let i=0; i<m; ++i) for (let j=0; j<f; ++j) edges.push([i, m + j]);

    g.options.vertex = function(v) { return v < m ? '#20a0ff' : '#ff207e'; };
    g.load(m + f, edges, mPoints.concat(fPoints));
  });
}

export function bridges($section) {
  $section.$$('.tab').forEach(($el, i) => {
    const $svg = $el.$('svg.frame');
    const $paths = $('.paths', $svg);
    const $water = $('.water', $svg);
    const $bridges = $$('.bridge', $svg);
    const $error = $('.error', $svg);
    const $solveds = $section.$$('x-solved');

    let success = false;
    let attempts = 0;
    let totalCrossed = 0;

    $error.hide();

    let map = new Sketch($svg, { paths: $paths });
    map.on('start', () => {
      map.clear();
      attempts += 1;
    });

    function completeMap() {
      $skip.exit('pop');
      if (isOneOf(i, 1, 2)) return $section.addHint('mapKeepTrying');
      $section.addHint(i === 0 ? 'tryDifferentMapA' : 'tryDifferentMapB');
      $section.score('bridge-' + i);
    }

    const [$clear, $skip] = $el.$$('.btn');
    $clear.on('click', () => map.clear());
    map.one('end', () => { if (!success) $skip.enter('pop'); });
    $skip.one('click', completeMap);

    map.on('end', () => {
      if (success) return;
      if (attempts === 3 && i < 2) $section.addHint('tryDifferentStartPoint');
      if (attempts === 4) completeMap();
    });

    map.on('clear', () => {
      totalCrossed = 0;
      $error.exit('pop', 300);
      $solveds[i].exit();
    });

    $water.on('pointerenter', (e) => {
      if (!map.drawing) return;
      map.stop();
      let p = svgPointerPosn(e, $svg);
      $error.translate(p.x - 20, p.y - 20);
      $error.enter('pop', 300);
      $section.addHint('crossWater');
    });

    $bridges.forEach(($bridge) => {
      let enter = null;
      let crossed = false;

      $bridge.on('pointerenter', function(e) {
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
        let out = svgPointerPosn(e, $svg);
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

export function bridges1($section) {
  let $svg = $section.$('svg');

  let $water   = $('.water', $svg);
  let $bg      = $('.background', $svg);
  let $bridges = $$('.bridge', $svg);

  let $edges    = $$('.edge', $svg);
  let $vertices = $$('.vertex', $svg);
  let $trace    = $('.trace', $svg);

  $edges.forEach($e => { $e.hide(); });
  $vertices.forEach($e => { $e.hide(); });
  $trace.hide();

  $section.onScore('blank-0', () => {
    $vertices.forEach($v => $v.enter('pop', 400));
  });

  $section.onScore('blank-1', () => {
    setTimeout(() => { for (let $x of [$water, $bg, ...$bridges]) $x.exit('fade', 800); }, 1600);
    $edges.forEach($e => $e.enter('draw', 800));
  });

  $section.onScore('blank-0 blank-1', () => {
    setTimeout(() => $trace.enter('draw', 4000), 2000);
  });
}

export function bridges3($section) {
  let g = Colour.green, r = Colour.red, b = Colour.blue, o = Colour.orange;
  let colours = {
    val: Colour.rainbow(8),
    eo: [g,r,g,r,g,r,g],
    prime: [g,g,r,g,r,g,r],
    size: [b,b,o,o,o,o,o]
  };

  let $circles = $section.$$('circle');

  function colour(x) {
    $circles.forEach(function($c) {
      let y = +$c.attr('data-value');
      $c.css('fill', colours[x][y-2]);  // -2 because no 0s and 1s
    });
    if (x === 'eo') $section.score('dropdown');
  }

  $section.$('select').change(colour);
  colour('val');
}

export function bridges4($section) {
  let $svg    = $('svg', $section);
  let $g      = $('g', $section);
  let $edges  = $$('line', $svg);
  let $vertex = $('circle', $svg);
  let $text   = $('text', $svg);
  let $trace  = $('path', $svg);

  for (let i=0; i<6; ++i) $edges[i].hide();
  $trace.hide();

  $section.$slides.on('next', function(x) {
    if (x < 4) {
      $edges[2 * x - 2].enter('draw', 600).then(function() {
        $text.text = 2 * x - 1;
        $vertex.css('fill', Colour.red);
      }).then(function() {
        return $edges[2 * x - 1].enter('draw', 600)
      }).then(function() {
        $text.text = 2 * x;
        $vertex.css('fill', Colour.green);
      });

    } else if (x === 5) {
      $g.animate({ transform: ['scale(1)', 'scale(.4)'] }, 600);
      $trace.enter('draw', 5000, 800);
    }
  });

  $section.$slides.on('back', function(x) {
    if (x < 3) {
      $edges[2 * x + 1].exit('draw').then(function() {
        return $edges[2 * x  ].exit('draw', 400);
      }).then(function() {
        $text.text = 2 * x || '';
        $vertex.css('fill', x ? Colour.green : '#BBB');
      });

    } else if (x === 4) {
      $g.animate({ transform: ['scale(.4)', 'scale(1)'] });
      $trace.exit('fade', 1000);
    }
  });
}

export function utilities($section) {
  let currentUtility;
  let startUtility;

  let errors = [];

  let map = new Sketch($('#map-utilities'), {
    noStart: true,
    paths: $('#utility-paths'),
    intersect: true
  });

  let attempts = 0;
  function resolve(hint) {
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

  map.on('intersect', function(e) {
    e.paths[0].css('stroke','#C00');
    e.paths[1].css('stroke','#C00');
    errors.push(...e.paths);
    map.stop();
    resolve('linesCross');
  });

  let allUtilities = $section.$$('.utility1, .utility2, .utility3');
  let sectors = new WeakMap();

  function clear() {
    allUtilities.forEach($el => { $el.css('opacity', 0); });
    map.clear();
    errors = [];
    resolve();
  }

  $section.$('button').on('click', clear);

  $section.$$('.utility').forEach(function($ut) {
    let $c = $ut.children[0];
    let p = { x: +$c.attr('cx'), y: +$c.attr('cy') };
    let onThis = false;
    let dataType = $ut.data.type;

    $ut.on('pointerdown', function(e) {
      currentUtility = $ut;
      startUtility = $ut;
      e.preventDefault();

      map.clearPaths(errors);
      errors.forEach(e => { if (sectors.has(e)) sectors.get(e).css('opacity', 0); });
      errors = [];

      map.start(p);
      map.drawing = false;
      onThis = true;
    });

    $ut.on('pointerleave', function() {
      if (!onThis) return;
      map.drawing = true;
      onThis = false;
    });

    $ut.on('pointerenter', function() {
      if (!map.drawing || currentUtility === $ut) return;
      map.addPoint(p);
      map.stop();
      map.p = null;
      $ut.effect('pulse-down');
      if (startUtility.data.type === dataType) {
        last(map.paths).css('stroke','#C00');
        errors.push(last(map.paths));
        if (dataType === 'house') {
          $section.addHint('housesToEachOther');
        } else {
          $section.addHint('factoriesToEachOther');
        }
      } else {
        let sector = (startUtility.data.type === 'house') ?
          $('.' + $ut.data.utility, currentUtility) : $('.' + currentUtility.data.utility, $ut);
        sector.css('opacity', 1);
        sectors.set(last(map.paths), sector);
      }
      // TODO Error on connect twice
    });
  });
}

export function utilities1($section) {
  let graphs = $section.$$('.graph');

  let p3 = [[100, 35], [170, 155], [30, 155]];
  new Graph(graphs[0], 3, subsets(list(3), 2), { r: 8, static: true, posn: p3 });

  let p4  = [[40, 40], [160, 40], [160, 160], [40, 160]];
  let p4x = [[100, 110], [100, 25], [175, 160], [25, 160]];
  let k4  = new Graph(graphs[1], 4, subsets(list(4), 2), { r: 8, static: true, posn: p4 });

  let p5  = [[100, 30], [175, 85], [145, 170], [55, 170], [25, 85]];
  let p5x = [[100, 30], [120, 110], [185, 170], [15, 170], [80, 110]];
  let k5  = new Graph(graphs[2], 5, subsets(list(5), 2), { r: 8, static: true, posn: p5 });

  function transition(graph, to) {
    let from = graph.vertices.map(v => [v.posn.x, v.posn.y]);
    animate(function(q) {
      graph.arrange(from.map(function(x, i) { return {
        x: to[i][0] * q + from[i][0] * (1-q),
        y: to[i][1] * q + from[i][1] * (1-q)
      }; }));
    }, 800);
  }

  $section.onScore('blank-0', function() {
    transition(k4, p4x);
  });

  $section.onScore('blank-1', function() {
    transition(k5, p5x);
    k5.edges[1].$el.animate({ stroke: '#C00' }, 800);
    k5.edges[4].$el.animate({ stroke: '#C00' }, 800);
  });
}

export function planarity($section) {
  let $svg = $section.$$('svg')[1];
  let $newBtn = $('button', $section);
  let creating = false;
  let $solveds = $section.$$('x-solved');

  let graph = new Graph($svg, 0, [], { r: 12, static: true, bound: true });
  let isSolved = false;

  function shuffle(n) {
    return tabulate(function() {
      return { x: Math.random() * graph.width, y: Math.random() * graph.height };
    }, n);
  }

  function generateGraph(n) {
    creating = true;
    $solveds[0].exit();
    isSolved = false

    let points = shuffle(n);
    let edges = [];

    function addEdge(u, v) {
      if (u === v) return;
      let edge = { p1: points[u], p2: points[v] };
      for (let i=0; i<edges.length; ++i) {
        const e2 = {p1: points[edges[i][0]], p2: points[edges[i][1]]};
        if (Segment.equals(edge, e2) || Segment.intersect(edge, e2)) return;
      }

      edges.push([u,v]);
    }

    for (let i=0; i<n; ++i) addEdge(i, random.integer(n));
    for (let i=0; i<n; ++i) for (let j=i+1; j<n; ++j) addEdge(i, j);

    graph.load(n, edges, shuffle(n));

    while (!intersect(graph.edges) && n > 4) {
      graph.arrange(shuffle(n));
    }
    creating = false;
  }

  graph.on('update', function() {
    let count = intersect(graph.edges);
    if (!isSolved && !creating && !count) {
      $section.score('planarity');
      $solveds[0].enter();
      isSolved = true;
    }

    graph.vertices.forEach(v => v.$el.setClass('intersect', v.intersect));
    graph.edges.forEach(e => e.$el.setClass('intersect', e.intersect));
  });

  function intersect(edges) {
    let count = 0;

    edges.forEach(function(e) {
      e.intersect = e.vertices[0].intersect = e.vertices[1].intersect = false;
    });

    for (let i=0; i<edges.length; ++i) {
      let e1 = { p1: edges[i].vertices[0].posn, p2: edges[i].vertices[1].posn };
      for (let j=i+1; j<edges.length; ++j) {
        let e2 = { p1: edges[j].vertices[0].posn, p2: edges[j].vertices[1].posn };
        if (Segment.intersect(e1, e2)) {
          edges[i].intersect = edges[j].intersect = edges[i].vertices[0].intersect =
            edges[i].vertices[1].intersect = edges[j].vertices[0].intersect =
              edges[j].vertices[1].intersect = true;
          count += 1;
        }

      }
    }

    return count;
  }

  $newBtn.on('click', function() { generateGraph($section.model.n); });
  $section.model.watch(function() { generateGraph($section.model.n); });
}

export function euler($section) {
  let $svgs = $section.$$('svg');
  let $notes = $section.$$('.euler-sum');

  list(9).forEach(function(i) {
    let x = i%3;
    let $svg = $svgs[(i-x)/3];
    $section.onScore('blank-' + i, function() {
      if (x === 0) {
        $svg.$$('circle').forEach(function($c) { $c.animate({ fill: Colour.green }); })
      } else if (x === 1) {
        $svg.$$('polygon').forEach(function($c) { $c.animate({ opacity: .3 }); });
        $notes[(i-x)/3].fadeIn();
      } else if (x === 2) {
        $svg.$$('line').forEach(function($c) { $c.animate({ stroke: Colour.red }); });
      }
    });
  });
}

export function euler2($section) {
  let $vertices = $section.$$('circle');
  let $edges = $section.$$('line');

  let $f = $section.$$('.xf');
  let $e = $section.$$('.xe');
  let $v = $section.$$('.xv');

  let positions = [
    [{x: 300, y: 100}, {x: 270, y: 170}, {x: 270, y: 170}, {x: 300, y: 100}],  // show 0
    [{x: 200, y: 100}, {x: 270, y: 170}, {x: 270, y: 170}, {x: 390, y: 100}],  // show 0, 3
    [{x: 270, y:  30}, {x: 270, y: 170}, {x: 270, y: 170}, {x: 390, y: 100}],  // show 0, 1, 3
    [{x: 270, y: 100}, {x: 150, y: 100}, {x: 270, y: 170}, {x: 390, y: 100}],  // show 0, 1, 3
    [{x: 270, y:  30}, {x: 150, y: 100}, {x: 270, y: 170}, {x: 390, y: 100}]   // show all
  ];

  let slide = 0;
  $vertices.forEach(($v, i) => { $v.setCenter(positions[0][i]); });
  $edges.forEach(($e, i) => { $e.setLine(positions[0][i], positions[0][(i+1)%4]); });

  $section.$slides.on('next back', function(s) {
    let start = positions[slide];
    let end = positions[s];
    slide = s;

    animate(function(x) {
      $vertices.forEach(($v, i) => { $v.setCenter(Point.interpolate(start[i], end[i], x)); });
      $edges.forEach(($e, i) => { $e.setLine(Point.interpolate(start[i], end[i], x),
        Point.interpolate(start[(i+1)%4], end[(i+1)%4], x)); });
    }, 400);
  });

  $section.$slides.on('next', function(s) {
    if (s === 1) {
      $vertices[3].enter('pop', 1);
    } else if (s === 2) {
      $vertices[1].enter('pop', 400, 400);
      $edges[0].enter('fade', 400, 400); $edges[2].enter('fade', 400, 400);
    } else if (s === 3) {
      $edges[2].exit('fade', 400);
    } else if (s === 4) {
      $vertices[2].enter('pop', 400);
      $edges[1].enter('draw', 400); $edges[2].enter('draw', 400);
    }
  });

  $section.$slides.on('back', function(s) {
    if (s === 0) {
      $vertices[3].exit('pop', 400)
    } else if (s === 1) {
      $vertices[1].exit('pop', 400);
      $edges[0].exit('fade', 400); $edges[2].exit('fade', 400);
    } else if (s === 2) {
      $edges[2].enter('draw', 400);
    } else if (s === 3) {
      $vertices[2].exit('pop');
      $edges[1].exit('fade', 400); $edges[2].exit('fade', 400);
    }
  });

  let values = [[0,1,0], [0,2,1], [1,3,3], [0,3,2], [1,4,4]];
  $section.$slides.on('step', function(s) {
    $f.forEach(x => { x.text = values[s][0]; });
    $v.forEach(x => { x.text = values[s][1]; });
    $e.forEach(x => { x.text = values[s][2]; });
  });
}

export function euler3($section) {
  let $svg = $section.$('#dominoes');
  let $gs = $svg.$$('g');

  let hasClicked = false;
  $svg.on('click', function() {
    if (hasClicked) return;
    hasClicked = true;

    $svg.css('cursor','default');
    $gs.forEach(function($g, i) {
      setTimeout(() => { $g.transform = 'rotate(23.5deg)'; }, i*100);
      setTimeout(() => { $g.transform = 'rotate(43.5deg)'; }, i*100 + 100);
      setTimeout(() => { $g.transform = 'rotate(  56deg)'; }, i*100 + 200);
      setTimeout(() => { $g.transform = 'rotate(  62deg)'; }, i*100 + 300);
      setTimeout(() => { $g.transform = 'rotate(64.5deg)'; }, i*100 + 400);
      setTimeout(() => { $g.transform = 'rotate(65.5deg)'; }, i*100 + 500);
    });
  });
}

export function euler4($step) {
  const $img = $step.$$('.img-sequence');
  const $slider = $step.$$('x-slider');
  const src = $img.map($i => $i.attr('src'));

  for (let i in [0, 1]) {
    // Preload images
    for (let j = 1; j < 32; ++j) {
      const img = new Image();
      img.src = src[i].replace('0', j);
    }

    // Update when moving slider
    $slider[i].on('move', j => $img[i].setAttr('src', src[i].replace('0', j)));
  }
}

export function maps1($section) {
  let colours = ['#C2240C', '#005FAB', '#009542', '#FFDD00', Colour.violet, Colour.orange, Colour.cyan];
  let $colours = $section.$$('.four-colour-icon');
  let activeColour = 0;
  let warned = false;

  $colours.forEach(function($el, i) {
    $el.css('background', colours[i]);
    $el.on('click', function(){
      $colours[activeColour].removeClass('on');
      $colours[i].addClass('on');
      activeColour = i;
    });
  });

  $section.$$('.tab').forEach(function($map, i) {
    let $count = $map.$('.colour-count span');
    let $countries = $map.$('.frame').children;
    let $solve = $map.$('.solve');
    let $solveds = $section.$$('x-solved');

    let countryIds = [];
    let countryColours = {};
    let colourUses = [0,0,0,0,0,0,0];
    let completed = 10;
    let used = 0;

    $countries.forEach(function($c, j) {
      let id = $c.id;
      let neighbours = borders[i][id] || [];
      countryIds.push(id);

      let initial = colours.indexOf($c.attr('fill'));
      $c.css('fill', '#CCC');
      $solve.on('click', function() {
        countryColours[id] = initial;
        setTimeout(() => { $c.css('fill', colours[initial]); }, j * 10);
        $section.score('map-' + i);
      });

      $c.on('click', function() {
        for (let n of neighbours) if (countryColours[n] === activeColour) {
          if (!warned) $section.addHint('mapError');
          warned = true;
          return;
        }

        if (countryColours[id] != null) --colourUses[countryColours[id]];
        ++colourUses[activeColour];
        $count.text = used = colourUses.filter(x => x > 0).length;

        countryColours[id] = activeColour;
        $c.css('fill', colours[activeColour]);

        if (used < completed && countryIds.every(id => countryColours[id] != null)) {
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

    $map.$('.clear').on('click', function() {
      $count.text = used = 0;
      countryColours = {};
      $countries.forEach($c => { $c.css('fill', '#CCC'); });
      $solveds[i].exit();
      colourUses = [0,0,0,0,0,0,0];
    });

    $solve.on('click', function() {
      $count.text = used = 4;
      completed = true;
      colourUses = [0,0,0,0,0,0,0];
      countryIds.forEach(c => { colourUses[countryColours[c]] += 1 })
    });

  });
}

export function maps2($section) {
  let $svg = $section.$('svg');
  let $countries = $svg.$$('polygon');
  let $edges = $svg.$$('path');
  let $vertices = $svg.$$('circle');

  $edges.forEach($e => { $e.exit(); });
  $vertices.forEach($e => { $e.exit(); });

  $section.onScore('blank-0', function() {
    $vertices.forEach($v => { $v.enter('pop', 600); });
    $countries.forEach($c => { $c.animate({ opacity: [1, .4] }, 800) })
  });

  $section.onScore('blank-1', function() {
    $edges.forEach($e => { $e.enter('draw', 800); });
    $countries.forEach($c => { $c.animate({ opacity: .1 }, 800) })
  });
}

export function salesman2($section) {
  $section.model.set('tsmString', function(x) {
    let a = [`There are <strong>${x}</strong> choices for the first city.`];
    if (x > 2) a.push(`After picking the first city, there are only <strong>${x-1}</strong> choices left for the second city.`);
    for (let i = 3; i < Math.min(6,x); ++i) a.push(`Then there are <strong>${x-i+1}</strong> choices for the ${toOrdinal(i)} city.`);
    if (x > 6) a.push('&hellip;');
    a.push(`Finally, there is only <strong>1</strong> choice left for the ${toOrdinal(x)} city.`);

    return '<li style="margin-bottom: 0">' + a.join('</li><li style="margin-bottom: 0">') + '</li>';
  });

  $section.model.set('tsnPaths', function(x) {
    return list(x, 1).join(' × ') + ' = ' + numberFormat(factorial(x));
  });
}

export function salesman3($section) {
  $section.model.set('factorial', x => numberFormat(factorial(x)));
}

export function salesman4($step) {
  const $svg = $step.$('.tsm svg');
  const $bg = $N('rect', {width: 760, height: 480}, $svg);
  const $path = $N('path', {}, $svg);

  let points = [];
  let move = 0;

  function redraw() {
    if (points.length < 2) return $path.points = [];

    let matrix = tabulate(null, points.length, points.length);
    for (let i = 0; i < points.length; ++i) {
      for (let j = 0; j < i; ++j) {
        matrix[i][j] = matrix[j][i] = Point.distance(points[i], points[j]);
      }
    }
    const tsm = travellingSalesman(matrix);
    $path.points = tsm.path.map(i => points[i]);
  }

  function addPoint(posn) {
    const $c = $N('circle', {r: 15, cx: 0, cy: 0}, $svg);
    const drag = new Draggable($c, $svg, {useTransform: true, responsive: true});

    drag.on('move', (e) => {
      posn.x = e.x;
      posn.y = e.y;
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
    addPoint(svgPointerPosn(e, $svg))
  });

  const initial = [{x: 150, y: 110}, {x: 360, y: 240}, {x: 520, y: 170},
    {x: 420, y: 400}, {x: 120, y: 340}, {x: 330, y: 60}];
  for (let p of initial) addPoint(p);
}
