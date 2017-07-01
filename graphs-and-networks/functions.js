// =============================================================================
// Graphs and Networks
// (c) Mathigon
// =============================================================================



import { last, tabulate, list, isOneOf } from '@mathigon/core';
import { factorial, random, numberFormat, toOrdinal, Point, travellingSalesman, lineLineIntersect, subsets } from '@mathigon/fermat';
import { $I, $T, $C, $$C, $$T, $N, Colour, svgPointerPosn, animate } from '@mathigon/boost';
import { Draggable } from '../node_modules/@mathigon/slate/src/draggable/draggable';
import { Drawing } from '../node_modules/@mathigon/slate/src/drawing/drawing';
import { Graph } from './graph';


// -----------------------------------------------------------------------------
// Hints

const hints = {
  firstGraphSolved: 'Well done! All <x-target to="#graph0">graph diagrams</x-target> in this chapter are interactive: try moving the vertices around.',
  crossWater: "Careful – you are not allowed to enter the water.",
  bridgeCrossedBefore: "You’ve already crossed this bridge before. Try to find a different route.",
  tryDifferentMap: 'Maybe there is no solution for this city… You could try <x-target to="#GT_2_0 .next">another map</x-target>!',
  tryDifferentStartPoint: "The starting location might be important. See what happens if you start on a different island.",
  housesToEachOther: "You only need to connect the houses to the factories, but not the houses to each other.",
  factoriesToEachOther: "You only need to connect the factories to the houses, but not the factories to each other.",
  linesCross: "Careful – your lines are not allowed to cross.",
  edgeDrawnBefore: "Watch out, you’ve already drawn this edge once."
};


// -----------------------------------------------------------------------------
// Section Functions

const person = 'M9,6C5.6,5.2,2.4,4.9,4,2c4.7-8.9,1-14-4-14c-5.1,0-8.7,5.3-4,' +
  '14c1.6,2.9-1.7,3.2-5,4c-3.5,0.8-3,2.7-3,6h24C12,8.7,12.5,6.8,9,6z';

const RED = '#b30469';
const BLUE = '#1f7aff';
const GREEN = '#31b304';
const YELLOW = '#ff941f';

export function GT_0_0(section, chapter) {
  let $graph = $C('graph', section.$el);
  new Graph($graph, 8, [[0,4],[4,5],[5,2],[5,1],[1,2],[2,3],[3,4],[3,6],[6,7],[7,3],[2,7]]);

  section.onScore('blank-0', function() { $graph.removeClass('novertices'); });
  section.onScore('blank-1', function() { $graph.removeClass('noedges'); });
  section.onScore('blank-0 blank-1', function() { chapter.addHint(hints.firstGraphSolved); });
}

export function GT_0_1(section, _chapter) {
  let graphs = $$C('graph', section.$el);
  new Graph(graphs[0], 7, [[0,1],[1,2],[2,0],[1,3],[3,4],[4,0],[4,5],[6,3]], { directed: true });
  new Graph(graphs[1], 9, [[0,1],[1,2],[2,3],[3,0],[1,3],[4,5],[5,6],[6,4],[7,8]]);
  new Graph(graphs[2], 4, [[0,1],[1,0],[1,2],[2,1],[2,3],[3,2],[3,0],[0,3],[0,0],[1,1],[2,2],[3,3]], { arc: true });
}

export function GT_0_2(section) {
  let graphs = $$C('graph', section.$el);

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

export function GT_0_3(section) {
  let graphs = $$C('graph', section.$el);

  new Graph(graphs[0], 5, [[0,1],[1,2],[2,0],[1,3],[3,4],[4,0],[4,2]]);
  new Graph(graphs[1], 8, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,0],[7,1]]);

  new Graph(graphs[2], 7, [[0,1],[0,2],[0,3],[1,4],[4,2],[2,5],[5,3],[3,6],[6,1]],
    { vertex: (v) => (v ? '#DDD' : RED) });

  new Graph(graphs[3], 7, [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,2],[2,3],[3,4],[4,5],[5,6],[6,1]],
    { vertex: (v) => (v ? '#DDD' : RED) });
}

export function GT_0_4(section) {
  let graphs = $$C('graph', section.$el);
  new Graph(graphs[0], 3, [[0,1],[1,2],[2,0]]);
  new Graph(graphs[1], 5, [[0,1],[1,2],[2,3],[3,4],[4,0]]);
  new Graph(graphs[2], 7, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]]);
}

export function GT_1_1(section) {
  let g = new Graph($C('graph', section.$el), 5, [], { icon: person });

  section.model.change(function() {
    g.load(section.model.hnd, subsets(list(section.model.hnd), 2));
    g.attraction /= 2;
    g.repulsion *= 2;
  });
}

export function GT_1_2(section) {
  section.onScore('blank-0', function() {
    setTimeout(function() { section.$el.addClass('complete'); }, 1000);
  });

  section.model.set('handshakeTable', function(n) {
    let colours = Colour.rainbow(section.model.n);

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

export function GT_1_3(section) {
  let graphs = $$C('graph', section.$el);
  new Graph(graphs[0], 4, subsets(list(4), 2));
  new Graph(graphs[1], 5, subsets(list(5), 2));
  new Graph(graphs[2], 6, subsets(list(6), 2));
  new Graph(graphs[3], 7, subsets(list(7), 2));
}

export function GT_1_4(section) {
  let g = new Graph($C('graph', section.$el), 0, [],
    { static: true, icon: person, bound: true });

  section.model.change(function() {
    let m = section.model.m;
    let f = section.model.f;

    let mPoints = tabulate(x => ({ x: (x+1) / (m+1) * 300, y:  30 }), m);
    let fPoints = tabulate(x => ({ x: (x+1) / (f+1) * 300, y: 110 }), f);

    let edges = [];
    for (let i=0; i<m; ++i) for (let j=0; j<f; ++j) edges.push([i, m + j]);

    g.options.vertex = function(v) { return v < m ? '#20a0ff' : '#ff207e'; };
    g.load(m + f, edges, mPoints.concat(fPoints));
  });
}

export function GT_2_0(section, chapter) {
  section.addGoals('bridge-0', 'bridge-1', 'bridge-2', 'bridge-3');
  let previousErrors = [];

  section.$el.$$('.slide').forEach(function($el, i) {

    let $svg = $el.$('svg.frame');
    let $paths = $C('paths', $svg);
    let $water = $C('water', $svg);
    let $bridges = $$C('bridge', $svg);
    let $error = $C('error', $svg);

    let success = false;
    let afterError = true;
    let attempts = 0;
    let totalCrossed = 0;
    $error.exit();

    let map = new Drawing($svg, { paths: $paths });
    map.on('start', map.clear.bind(map));
    $el.find('.btn').on('click', function() { map.clear(); });

    function error(name) {
      afterError = true;
      if (previousErrors.indexOf(name) < 0) chapter.addHint(hints[name]);
      previousErrors.push(name);
      attempts += 1;
      if (!success && attempts === 2) chapter.addHint(hints.tryDifferentStartPoint);
      if (!success && isOneOf(i, 0, 3) && attempts === 4) {
        chapter.addHint(hints.tryDifferentMap);
        section.score('bridge-' + i);
      }
    }

    map.on('clear', function() {
      totalCrossed = 0;
      $error.exit('pop', 300);
      section.solveds[i]._el.hide();
      if (!afterError) attempts += 1;
      afterError = false;
    });

    $water.on('pointerenter', function(e) {
      if (!map.drawing) return;
      map.stop();
      let p = svgPointerPosn(e, $svg);
      $error.translate(p.x - 20, p.y - 20);
      $error.enter('pop', 300);
      error('crossWater');
    });

    $bridges.forEach(function($bridge) {
      let enter = null;
      let crossed = false;

      $bridge.on('pointerenter', function(e) {
        if (map.drawing) {
          enter = svgPointerPosn(e, $svg);
          if (crossed) {
            map.stop();
            $bridge.css('fill', Colour.red);
            error('bridgeCrossedBefore');
          }
          crossed = true;
        }
      });

      $bridge.on('pointerleave', function(e) {
        if (map.drawing) {
          let out = svgPointerPosn(e, $svg);
          if (Point.distance(enter || out, out) < 40) {
            crossed = false;
          } else {
            $bridge.css('fill', Colour.green);
            totalCrossed += 1;
            if (totalCrossed === $bridges.length) {
              section.solveds[i]._el.show();
              section.score('bridge-' + i);
              success = true;
            }
          }
        }
      });

      map.on('clear', function() {
        crossed = false;
        $bridge.css('fill', '#F7931E');
      });

    });

  });
}

export function GT_2_1(section) {

  let $svg = $T('svg', section.$el);

  let $water   = $C('water', $svg);
  let $bg      = $C('background', $svg);
  let $bridges = $$C('bridge', $svg);

  let $edges    = $$C('edge', $svg);
  let $vertices = $$C('vertex', $svg);
  let $trace    = $C('trace', $svg);

  $edges.forEach($e => { $e.hide(); });
  $vertices.forEach($e => { $e.hide(); });
  $trace.hide();

  section.blanks[0].on('valid', function() {
    $vertices.forEach($v => { $v.enter('pop', 400); });
  });

  section.blanks[1].on('valid', function() {
    setTimeout(() => { [$water, $bg].concat($bridges).forEach($x => { $x.exit('fade', 800); }); }, 1600);
    $edges.forEach($e => { $e.enter('draw', 800); });
  });

  section.subsections[0].on('show', function() {
    setTimeout(() => { $trace.enter('draw', 4000); }, 2000);
  });
}

export function GT_2_3(section) {
  section.addGoals('c-eo', 'c-prime', 'c-size');

  let g = Colour.green, r = Colour.red, b = Colour.blue, o = Colour.orange;
  let colours = {
    val: Colour.rainbow(8),
    eo: [g,r,g,r,g,r,g],
    prime: [g,g,r,g,r,g,r],
    size: [b,b,o,o,o,o,o]
  };

  let $circles = $$T('circle', section.$el);

  function colour(x) {
    $circles.forEach(function($c) {
      let y = +$c.attr('data-value');
      $c.css('fill', colours[x][y-2]);  // -2 because no 0s and 1s
    });
    section.score('c-' + x);
  }

  $T('select', section.$el).change(colour);
  colour('val');
}

export function GT_2_4(section) {
  let $svg    = $T('svg', section.$el);
  let $g      = $T('g', section.$el);
  let $edges  = $$T('line', $svg);
  let $vertex = $T('circle', $svg);
  let $text   = $T('text', $svg);
  let $trace  = $T('path', $svg);

  for (let i=0; i<6; ++i) $edges[i].hide();
  $trace.hide();

  section.slides.on('next', function(x) {
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

  section.slides.on('back', function(x) {
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

export function GT_3_0(section, chapter) {
  section.addGoals('try-three-times');

  let currentUtility;
  let startUtility;

  let errors = [];
  let remove = false;

  let map = new Drawing($I('map-utilities'), {
    noStart: true,
    paths: $I('utility-paths'),
    intersect: true
  });

  let attempts = 0;
  function resolve(hint) {
    attempts += 1;
    if (attempts === 3) {
      section.score('try-three-times');
      chapter.addHint('I think this puzzle might also be impossible… Sorry I tricked you :1f61c:');
    } else if (hint) {
      chapter.addHint(hints[hint]);
    }
  }

  map.on('intersect', function(e) {
    e.paths[0].css('stroke','#C00');
    e.paths[1].css('stroke','#C00');
    errors.push(...e.paths);
    map.stop();
    resolve('Careful: the lines are not allowed to cross.');
  });

  map.on('end', function() { if (map.drawing) remove = true; });

  let allUtilities = section.$el.findAll('.utility1, .utility2, .utility3');
  let sectors = new WeakMap();

  function clear() {
    allUtilities.forEach($el => { $el.css('opacity', 0); });
    map.clear();
    errors = [];
    resolve();
  }

  section.$el.find('button').on('click', clear);

  section.$el.findAll('.utility').forEach(function($ut) {
    let $c = $ut.children[0];
    let p = { x: +$c.attr('cx'), y: +$c.attr('cy') };
    let onThis = false;
    let dataType = $ut.attr('data-type');

    $ut.on('pointerdown', function(e) {
      currentUtility = $ut;
      startUtility = $ut;
      e.preventDefault();
      e.stopPropagation();

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
      $ut.effect('pulse-down');
      if (startUtility.attr('data-type') === dataType) {
        last(map.paths).css('stroke','#C00');
        errors.push(last(map.paths));
        if (dataType === 'house') {
          chapter.addHint(hints.housesToEachOther);
        } else {
          chapter.addHint(hints.factoriesToEachOther);
        }
      } else {
        let sector = (startUtility.attr('data-type') === 'house') ?
          $C($ut.attr('data-utility'), currentUtility) : $C(currentUtility.attr('data-utility'), $ut);
        sector.css('opacity', 1);
        sectors.set(last(map.paths), sector);
      }
      // TODO Error on connect twice
    });
  });
}

export function GT_3_1(section) {
  let graphs = $$C('graph', section.$el);

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

  section.onScore('blank-0', function() {
    transition(k4, p4x);
  });

  section.onScore('blank-1', function() {
    transition(k5, p5x);
    k5.edges[1].$el.animate({ stroke: '#C00' }, 800);
    k5.edges[4].$el.animate({ stroke: '#C00' }, 800);
  });
}

export function GT_3_3(section) {
  let $svg = $$T('svg', section.$el)[1];
  let $newBtn = $T('button', section.$el);
  let creating = false;

  let graph = new Graph($svg, 0, [], { r: 12, static: true, bound: true });

  function shuffle(n) {
    return tabulate(function() {
      return { x: Math.random() * graph.width, y: Math.random() * graph.height };
    }, n);
  }

  function generateGraph(n) {
    creating = true;
    section.solveds[0]._el.hide();

    let points = shuffle(n);
    let edges = [];

    function addEdge(u, v) {
      if (u === v) return;
      let edge = { p1: points[u], p2: points[v] };
      for (let i=0; i<edges.length; ++i)
        if (lineLineIntersect(edge, { p1: points[edges[i][0]], p2: points[edges[i][1]] }))
          return;
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
    if (!creating && !count) section.solveds[0]._el.show();

    graph.vertices.forEach(function(v) { v.$el.setClass('intersect', v.intersect); });
    graph.edges.forEach(function(e) { e.$el.setClass('intersect', e.intersect); });
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
        if (lineLineIntersect(e1, e2)) {
          edges[i].intersect = edges[j].intersect = edges[i].vertices[0].intersect =
            edges[i].vertices[1].intersect = edges[j].vertices[0].intersect =
              edges[j].vertices[1].intersect = true;
          count += 1;
        }

      }
    }

    return count;
  }

  $newBtn.on('click', function() { generateGraph(section.model.n); });
  section.model.change(function() { generateGraph(section.model.n); });
}

export function GT_4_1(section) {
  let $svgs = section.$el.findAll('svg');
  let $notes = section.$el.findAll('.euler-sum');

  list(9).forEach(function(i) {
    let x = i%3;
    let $svg = $svgs[(i-x)/3];
    section.onScore('blank-' + i, function() {
      if (x === 0) {
        $svg.findAll('circle').forEach(function($c) { $c.animate({ fill: Colour.green }); })
      } else if (x === 1) {
        $svg.findAll('polygon').forEach(function($c) { $c.animate({ opacity: .3 }); });
        $notes[(i-x)/3].fadeIn();
      } else if (x === 2) {
        $svg.findAll('line').forEach(function($c) { $c.animate({ stroke: Colour.red }); });
      }
    });
  });
}

export function GT_4_2(section) {
  let $vertices = section.$el.findAll('circle');
  let $edges = section.$el.findAll('line');

  let $f = section.$el.findAll('.xf');
  let $e = section.$el.findAll('.xe');
  let $v = section.$el.findAll('.xv');

  let positions = [
    [{x: 300, y: 100}, {x: 270, y: 170}, {x: 270, y: 170}, {x: 300, y: 100}],  // show 0
    [{x: 200, y: 100}, {x: 270, y: 170}, {x: 270, y: 170}, {x: 390, y: 100}],  // show 0, 3
    [{x: 270, y:  30}, {x: 270, y: 170}, {x: 270, y: 170}, {x: 390, y: 100}],  // show 0, 1, 3
    [{x: 270, y: 100}, {x: 150, y: 100}, {x: 270, y: 170}, {x: 390, y: 100}],  // show 0, 1, 3
    [{x: 270, y:  30}, {x: 150, y: 100}, {x: 270, y: 170}, {x: 390, y: 100}]   // show all
  ];

  let slide = 0;
  $vertices.forEach(($v, i) => { $v.center(positions[0][i]); });
  $edges.forEach(($e, i) => { $e.line(positions[0][i], positions[0][(i+1)%4]); });

  section.slides.on('next back', function(s) {
    let start = positions[slide];
    let end = positions[s];
    slide = s;

    animate(function(x) {
      $vertices.forEach(($v, i) => { $v.center(Point.interpolate(start[i], end[i], x)); });
      $edges.forEach(($e, i) => { $e.line(Point.interpolate(start[i], end[i], x),
        Point.interpolate(start[(i+1)%4], end[(i+1)%4], x)); });
    }, 400);
  });

  section.slides.on('next', function(s) {
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

  section.slides.on('back', function(s) {
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
  section.slides.on('step', function(s) {
    $f.forEach(x => { x.text = values[s][0]; });
    $v.forEach(x => { x.text = values[s][1]; });
    $e.forEach(x => { x.text = values[s][2]; });
  });
}

export function GT_4_3() {
  let $svg = $I('dominoes');
  let $gs = $svg.findAll('g');

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

export function GT_5_1(section, chapter) {
  section.addGoals('map-1', 'map-2', 'map-3', 'map-4');

  let colours = ['#C2240C', '#005FAB', '#009542', '#FFDD00', Colour.violet, Colour.orange, Colour.cyan];
  let $colours = section.$el.findAll('.four-colour-icon');
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

  let borders = [
    {"AK":["WA"],"WA":["AK","ID","OR"],"AL":["FL","GA","MS","TN"],"FL":["AL","GA"],"GA":["AL","FL","NC","SC","TN"],"MS":["AL","AR","LA","TN"],"TN":["AL","AR","GA","KY","MO","MS","NC","VA"],"AR":["LA","MO","MS","OK","TN","TX"],"LA":["AR","MS","TX"],"MO":["AR","IA","IL","KS","KY","NE","OK","TN"],"OK":["AR","CO","KS","MO","NM","TX"],"TX":["AR","LA","NM","OK"],"AZ":["CA","NM","NV","UT"],"CA":["AZ","HI","NV","OR"],"CO":["KS","NE","NM","OK","UT","WY"],"NM":["AZ","CO","OK","TX"],"NV":["AZ","CA","ID","OR","UT"],"UT":["AZ","CO","ID","NV","WY"],"HI":["CA"],"OR":["CA","ID","NV","WA"],"KS":["CO","MO","NE","OK"],"NE":["CO","IA","KS","MO","SD","WY"],"WY":["CO","ID","MT","NE","SD","UT"],"CT":["MA","NY","RI"],"MA":["CT","NH","NY","RI","VT"],"NY":["CT","MA","NJ","PA","VT"],"RI":["CT","MA"],"DC":["MD","VA"],"MD":["DC","DE","PA","VA","WV"],"VA":["DC","KY","MD","NC","TN","WV"],"DE":["MD","NJ","PA"],"NJ":["DE","NY","PA"],"PA":["DE","MD","NJ","NY","OH","WV"],"NC":["GA","SC","TN","VA"],"SC":["GA","NC"],"IA":["IL","MN","MO","NE","SD","WI"],"IL":["IA","IN","KY","MO","WI"],"MN":["IA","ND","SD","WI"],"SD":["IA","MN","MT","ND","NE","WY"],"WI":["IA","IL","MI","MN"],"ID":["MT","NV","OR","UT","WA","WY"],"MT":["ID","ND","SD","WY"],"IN":["IL","KY","MI","OH"],"KY":["IL","IN","MO","OH","TN","VA","WV"],"MI":["IN","OH","WI"],"OH":["IN","KY","MI","PA","WV"],"WV":["KY","MD","OH","PA","VA"],"NH":["MA","ME","VT"],"VT":["MA","NH","NY"],"ME":["NH"],"ND":["MN","MT","SD"]},
    {"Colombia": ["Venezuela","Brazil","Peru","Ecuador"],"Venezuela": ["Colombia","Brazil","Guyana"],"Guyana": ["Venezuela","Brazil","Suriname"],"Suriname": ["Guyana","Brazil","FrenchGuiana"],"FrenchGuiana": ["Suriname","Brazil"],"Ecuador": ["Peru","Colombia"],"Peru": ["Ecuador","Colombia","Brazil","Bolivia","Chile"],"Bolivia": ["Peru","Brazil","Paraguay","Argentina","Chile"],"Paraguay": ["Argentina","Bolivia","Brazil"],"Chile": ["Peru","Bolivia","Argentina"],"Argentina": ["Chile","Bolivia","Paraguay","Brazil","Uruguay"],"Uruguay": ["Argentina","Brazil"],"Brazil": ["FrenchGuiana","Suriname","Guyana","Venezuela","Colombia","Peru","Bolivia","Paraguay","Argentina","Uruguay"]},
    {"Schleswig-Holstein":["Niedersachsen","Hamburg","Mecklenburg-Vorpommern"],"Hamburg":["Niedersachsen","Schleswig-Holstein"],"Brandenburg":["Mecklenburg-Vorpommern","Niedersachsen","Sachsen-Anhalt","Sachsen","Berlin"],"Berlin":["Brandenburg"],"Mecklenburg-Vorpommern":["Schleswig-Holstein","Niedersachsen","Brandenburg"],"Niedersachsen":["Schleswig-Holstein","Hamburg","Mecklenburg-Vorpommern","Brandenburg","Sachsen-Anhalt","Thüringen","Hessen","Nordrhein-Westfalen","Bremen"],"Bremen":["Niedersachsen"],"Sachsen-Anhalt":["Niedersachsen","Brandenburg","Sachsen","Thüringen"],"Sachsen":["Brandenburg","Sachsen-Anhalt","Thüringen","Bayern"],"Thüringen":["Hessen","Niedersachsen","Sachsen-Anhalt","Sachsen","Bayern"],"Nordrhein-Westfalen":["Niedersachsen","Hessen","Rheinland-Pfalz"],"Hessen":["Rheinland-Pfalz","Nordrhein-Westfalen","Niedersachsen","Thüringen","Bayern","Baden_Württemberg"],"Rheinland-Pfalz":["Nordrhein-Westfalen","Hessen","Baden_Württemberg","Saarland"],"Saarland":["Rheinland-Pfalz"],"Baden_Württemberg":["Rheinland-Pfalz","Hessen","Bayern"],"Bayern":["Baden_Württemberg","Hessen","Thüringen"]},
    {"Northumberland":["Cumbria","County_Durham","Tyne_and_Wear"],"Tyne_and_Wear":["Northumberland","County_Durham"],"Cumbria":["Northumberland","North_Yorkshire","County_Durham","Lancashire"],"County_Durham":["Tyne_and_Wear","Northumberland","Cumbria","North_Yorkshire"],"North_Yorkshire":["County_Durham","Cumbria","Lancashire","West_Yorkshire","South_Yorkshire","East_Riding_of_Yorkshire"],"Lancashire":["Cumbria","North_Yorkshire","West_Yorkshire","Greater_Manchester","Merseyside"],"West_Yorkshire":["Greater_Manchester","Lancashire","North_Yorkshire","South_Yorkshire","Derbyshire"],"East_Riding_of_Yorkshire":["North_Yorkshire","South_Yorkshire","Lincolnshire"],"Greater_Manchester":["Merseyside","Lancashire","West_Yorkshire","Derbyshire","Cheshire"],"Merseyside":["Lancashire","Greater_Manchester","Cheshire"],"South_Yorkshire":["West_Yorkshire","North_Yorkshire","East_Riding_of_Yorkshire","Lincolnshire","Nottinghamshire","Derbyshire"],"Cheshire":["Merseyside","Greater_Manchester","Derbyshire","Staffordshire","Shropshire"],"Derbyshire":["Cheshire","Greater_Manchester","West_Yorkshire","South_Yorkshire","Nottinghamshire","Leicestershire","Warwickshire","Staffordshire"],"Nottinghamshire":["Derbyshire","South_Yorkshire","Lincolnshire","Rutland","Leicestershire"],"Lincolnshire":["East_Riding_of_Yorkshire","South_Yorkshire","Nottinghamshire","Leicestershire","Rutland","Cambridgeshire","Norfolk"],"Staffordshire":["Shropshire","Cheshire","Derbyshire","Leicestershire","Warwickshire","West_Midlands"],"Leicestershire":["Derbyshire","Nottinghamshire","Lincolnshire","Rutland","Northamptonshire","Warwickshire","Staffordshire"],"Rutland":["Leicestershire","Lincolnshire","Cambridgeshire","Northamptonshire"],"Norfolk":["Lincolnshire","Cambridgeshire","Suffolk"],"Shropshire":["Cheshire","Staffordshire","Worcestershire","Herefordshire"],"West_Midlands":["Staffordshire","Warwickshire","Worcestershire"],"Warwickshire":["Staffordshire","Derbyshire","Leicestershire","Northamptonshire","Oxfordshire","Gloucestershire","Worcestershire","West_Midlands"],"Northamptonshire":["Warwickshire","Leicestershire","Rutland","Cambridgeshire","Bedfordshire","Buckinghamshire","Oxfordshire"],"Cambridgeshire":["Northamptonshire","Rutland","Lincolnshire","Norfolk","Suffolk","Essex","Hertfordshire","Bedfordshire"],"Suffolk":["Norfolk","Cambridgeshire","Essex"],"Essex":["Suffolk","Cambridgeshire","Hertfordshire","Greater_London","Kent"],"Greater_London":["Buckinghamshire","Hertfordshire","Essex","Kent","Surrey","Berkshire"],"Buckinghamshire":["Oxfordshire","Northamptonshire","Bedfordshire","Hertfordshire","Greater_London","Berkshire"],"Bedfordshire":["Northamptonshire","Cambridgeshire","Hertfordshire","Buckinghamshire"],"East_Sussex":["West_Sussex","Kent","Surrey"],"Surrey":["Hampshire","Berkshire","Greater_London","Kent","East_Sussex","West_Sussex"],"West_Sussex":["East_Sussex","Kent","Surrey","Hampshire"],"Berkshire":["Oxfordshire","Buckinghamshire","Greater_London","Surrey","Hampshire","Wiltshire"],"Oxfordshire":["Gloucestershire","Warwickshire","Northamptonshire","Buckinghamshire","Berkshire","Wiltshire"],"Gloucestershire":["Herefordshire","Worcestershire","Warwickshire","Oxfordshire","Wiltshire","Somerset"],"Wiltshire":["Somerset","Gloucestershire","Oxfordshire","Berkshire","Hampshire","Dorset"],"Hampshire":["Dorset","Wiltshire","Berkshire","Surrey","West_Sussex"],"Dorset":["Devon","Somerset","Wiltshire","Hampshire"],"Somerset":["Devon","Dorset","Wiltshire","Gloucestershire"],"Devon":["Cornwall","Somerset","Dorset"],"Cornwall":["Devon"],"Worcestershire":["Herefordshire","Shropshire","Staffordshire","West_Midlands","Warwickshire","Gloucestershire"],"Hertfordshire":["Bedfordshire","Cambridgeshire","Essex","Greater_London","Buckinghamshire"],"Herefordshire":["Shropshire","Worcestershire","Gloucestershire"],"Kent":["Essex","Greater_London","Surrey","East_Sussex"]}
  ];

  section.$el.findAll('.slide').forEach(function($map, i) {
    let $count = $map.find('.colour-count');
    let $countries = $map.find('.frame').children;
    let $solve = $map.find('.solve');

    let countryIds = [];
    let countryColours = {};
    let colourUses = [0,0,0,0,0,0,0];
    let completed = 10;
    let used = 0;

    $countries.forEach(function($c, j) {
      let id = $c.attr('id');
      let neighbours = borders[i][id] || [];
      countryIds.push(id);

      let initial = colours.indexOf($c.attr('fill'));
      $c.css('fill', '#CCC');
      $solve.on('click', function() {
        countryColours[id] = initial;
        setTimeout(() => { $c.css('fill', colours[initial]); }, j * 10);
      });

      $c.on('click', function() {
        for (let n of neighbours) if (countryColours[n] === activeColour) {
          if (!warned) chapter.addHint('You can’t use this colour here because it is already in one of the neighbouring areas.');
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
            section.solveds[i]._el.show();
            section.score('map-' + i);
          } else {
            chapter.addHint(`Well done! Can you colour this map with fewer than ${used} colours?`);
          }
        }
      });
    });

    $map.find('.clear').on('click', function() {
      $count.text = used = 0;
      countryColours = {};
      $countries.forEach($c => { $c.css('fill', '#CCC'); });
      section.solveds[i]._el.hide();
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

export function GT_5_2(section) {

  let $svg       = $T('svg', section.$el);
  let $countries = $$T('polygon', $svg);
  let $edges     = $$T('path', $svg);
  let $vertices  = $$T('circle', $svg);

  $edges.forEach($e => { $e.exit(); });
  $vertices.forEach($e => { $e.exit(); });

  section.onScore('blank-0', function() {
    $vertices.forEach($v => { $v.enter('pop', 600); });
    $countries.forEach($c => { $c.animate({ opacity: [1, .4] }, 800) })
  });

  section.onScore('blank-1', function() {
    $edges.forEach($e => { $e.enter('draw', 800); });
    $countries.forEach($c => { $c.animate({ opacity: .1 }, 800) })
  });
}

export function GT_6_2(section) {
  section.model.set('tsmString', function(x) {
    let a = [`There are <strong>${x}</strong> choices for the first city.`];
    if (x > 2) a.push(`After picking the first city, there are only <strong>${x-1}</strong> choices left for the second city.`);
    for (let i = 3; i < Math.min(6,x); ++i) a.push(`Then there are <strong>${x-i+1}</strong> choices for the ${toOrdinal(i)} city.`);
    if (x > 6) a.push('&hellip;');
    a.push(`Finally, there is only <strong>1</strong> choice left for the ${toOrdinal(x)} city.`);

    return '<li style="margin-bottom: 0">' + a.join('</li><li style="margin-bottom: 0">') + '</li>';
  });

  section.model.set('tsnPaths', function(x) {
    return list(x, 1).join(' × ') + ' = ' + numberFormat(factorial(x));
  });
}

export function GT_6_3(section) {
  section.model.set('factorial', x => numberFormat(factorial(x)));
}

export function GT_6_4(section) {
  let $box = $C('tsm-box', section.$el);
  let $svg = $T('svg', $box);
  let $path = $N('path', { class: 'tsm-path' }, $svg);

  let coords = [{ x: 150, y: 110 }, { x: 360, y: 240 }, { x: 520, y: 170 },
    { x: 420, y: 400 }, { x: 120, y: 340 }, { x: 330, y: 60 }];

  let matrix = tabulate(null, coords.length, coords.length);

  function redraw() {
    for (let i = 0; i < coords.length; ++i) {
      for (let j = 0; j < i; ++j) {
        matrix[i][j] = matrix[j][i] = Point.distance(coords[i], coords[j]);
      }
    }

    let tsm = travellingSalesman(matrix);
    $path.points = tsm.path.map(i => coords[i]);
  }

  function makeCity($c, i) {
    let drag = new Draggable($c, $box);
    drag.on('move', function(e) {
      coords[i] = e;
      redraw();
    });
    return drag;
  }

  coords.forEach(function(c, i) {
    let $city = $N('div', { class: 'tsm-city' }, $box);
    let drag = makeCity($city, i);
    drag.position = c;
  });
}
