// ================================================================================================
// MATHIGON ACTIVE
// GRAPH THEORY
// ================================================================================================


/* jshint curly: false */
/* global window, $, $C, $T, $N, $$N, $$, d3 */

window.MA = window.MA || {};
window.MA.bfn = window.MA.bfn || {};



// ================================================================================================
// BIOGRAPHIES AND GLOSSARY
// ================================================================================================

MA.bio = {
    euler: {
        name: "Leonhard Euler",
        birth: "1707",
        death: "1783",
        img: "resources/bio/euler.jpg",
        bio: "<p>Leonhard Euler is one the greatest mathematicians of all times. His work spans all areas of mathematics, and he wrote 80 volumes of research.</p><p>Euler was born in Switzerland and studied in Basel, but lived most of his life in Berlin, Prussia, and St. Petersburg, Russia.</p><p>Euler invented most of the modern mathematical terminology and notation, and made important discoveries in calculus, analysis, graph theory, physics, astronomy, and many other topics.</p>"
    },

    guthrie: {
        name: "Francis Guthrie",
        birth: "1831",
        death: "1899",
        img: "resources/bio/guthrie.jpg",
        bio: "<p>Francis Guthrie was a South African botanist and mathematician, who first stated the Four Colour Problem in 1852.</p><p>He was a student of Augustus De Morgan, one of the greatest British mathematicians.</p><p>In addition to being a mathematics professor and teacher, Guthrie worked as a lawyer and did research in solar power and aeronautics.</p>"
    },

    haken: {
        name: "Wolfgang Haken",
        birth: "1928",
        death: "",
        img: "resources/bio/haken.jpg",
        bio: "<p>Wolfgang Haken is a German mathematician, known for his proof the Four Colour Theorem with Kenneth Appel.</p><p>In recognition, he and Appell received the Fulkerson Prize of the American Mathematical Society.</p><p>In 1990, Haken became a member of the Center for Advanced Study at the University of Illinois, where he is now an Emeritus Professor.</p>"
    },

    appel: {
        name: "Kenneth Appel",
        birth: "1932",
        death: "2013",
        img: "resources/bio/appel.jpg",
        bio: "<p>Kenneth Appel was an American mathematician, known for his proof of the Four Colour Theorem with Wolfgang Haken.</p><p>In recognition, he and Haken received the Fulkerson Prize of the American Mathematical Society.</p><p>Appel studied at Queens College, New York, and the University of Michigan. He taught at the University of Illinois, and the University of New Hampshire.</p>"
    },

    karinthy: {
        name: "Frigyes Karinthy",
        birth: "1887",
        death: "1938",
        img: "resources/bio/karinthy.jpg",
        bio: "<p>Frigyes Karinthy was a Hungarian author, poet and journalist.</p><p>He is best known for the 1929 short story &#8220;Chains&#8221;, which first introduced the concept of <em>six degrees of separation</em>.</p>"
    },

    milgram: {
        name: "Stanley Milgram",
        birth: "1933",
        death: "1984",
        img: "resources/bio/milgram.jpg",
        bio: "<p>Stanley Milgram was a famous social psychologist.</p><p>He is best known for experiments on <em>obedience</em>, testing how willing adults are to follow orders, even when hurting others, and for the <em>small-world experiment</em>, which tests the degree of connectedness of societies.</p>"
    }
};

// ------------------------------------------------------------------------------------------------

MA.gloss = {
    complete: {
        title: "Complete Graph",
        text: "<p>In complete graphs, every vertex is connected to every other vertex. A complete graph with <em>n</em> vertices has <span class='frac white'><span><em>n</em> &times; (<em>n</em> &#8211; 1)</span><span>2</span></span> edges.</p>"
    },

    bipartite: {
        title: "Bipartite Graph",
        text: "<p>Bipartite graphs consists of two sets of vertices. Every vertex is connected to all the vertices in the opposite set, but none of the vertices in its own set.</p>"
    },

    proof: {
        title: "Proofs",
        text: "<p>A proof is a rigorous logical argument which shows that a mathematical statement is true, based on a set of previously known results.</p>"
    },

    polyhedron: {
        title: "Polyhedron",
        text: "<p>A polyhedron is a three-dimensional solid that only has (flat) polygons as faces. For example, a cube and a pyramid are polyhedra, but a sphere is not.</p>"
    },

    polygon: {
        title: "Polygon",
        text: "<p>A polygon is a shape which is bounded by straight lines. For example, a square is a polygon but a circle is not.</p><p>If all the sides of a polygon have the same length, it is called a <em>regular polygon</em>.</p>"
    },

    dna: {
        title: "DNA",
        text: "<p>DNA (Deoxyribonucleic Acid) is a molceule that contains the genetic blueprint of all living organisms. Most DNAs consist of two strands forming a <em>double helix</em>.</p><p>Genetic information is encoded in the order of four nucleic acids (A, G, C and T) which make up the DNA.</p><p><em>DNA sequencing</em> is the process of extracting this information &#8211; an essential technique in biology, medicine, genetics and biotechnology.</p>"
    },

    np: {
        title: "NP Hard Problems",
        text: "<p><em>Computational complexity theory</em> is about determining how &#8220;difficult&#8221; problems are to be solved by a computer.</p><p>&#8220;NP hard&#8221; (Non-deterministic Polynomial-time hard) is the class of the most difficult problems.</p>"
    },

    order: {
        title: "Order of Vertices",
        text: "<p>The <em>order</em> of a vertex is the number of edges that meet at that vertex.</p>"
    },

    subdivision: {
        title: "Subdivisions",
        text: "<p>To create a <em>subdivision</em> of a graph you add additional vertices along its edges.</p>"
    },

    'millennium-prize': {
        title: "Millennium Prize Problems",
        text: "<p>There are seven Millennium Prize Problems which were stated in 2000 by the Clay Mathematics Institute:</p><ul><li>P vs NP</li><li>The Hodge Conjecture</li><li>The Poincar&eacute; Conjecture</li><li>The Riemann Hypothesis</li><li>Yang-Mills Existence and Mass Gap</li><li>Navier-Stokes Existence and Smoothness</li><li>The Birch and Swinnerton-Dyer Conjecture</li></ul><p>Each problem holds $1m prize money. Only one, the Poincar&eacute; Conjecture, was solved so far, but the mathematician Grigori Perelman declined the award.</p>"
    }
};



// ================================================================================================
// HINTS
// ================================================================================================

MA.hints = {

    crossWater: {
        audio: [1764, 1767.6],
        text: "Careful &#8211; you are not allowed to enter the water."
    },

    bridgeCrossedBefore: {
        audio: [1767.6, 1772],
        text: "You've already crossed this bridge before. Try to find a different route."
    },

    wellDone2: {
        audio: [1772, 1774],
        text: "Well done, you made it!"
    },

    tryDifferentMap: {
        audio: [1774, 1779],
        text: "Maybe a solution doesn&rsquo;t exist for this city. Go next to try another map."
    },

    tryDifferentStartPoint: {
        text: "The starting location might be important. If you can't find a solution, try starting on a different island."
    },

    excellent: {
        audio: [1779, 1780],
        text: "Excellent!"
    },

    wellDone1: {
        audio: [1780, 1780.4],
        text: "Well done!"
    },

    goodJob: {
        audio: [1780.4, 1782.9],
        text: "Good Job!"
    },

    housesToEachOther: {
        audio: [1782.9, 1788.6],
        text: "You only need to connect the houses to the factories, but not the houses to each other."
    },

    factoriesToEachOther: {
        audio: [1788.6, 1794],
        text: "You only need to connect the factories to the houses, but not the factories to each other."
    },

    linesCross: {
        audio: [1794, 1797.1],
        text: "Careful &#8211; your lines are not allowed to cross."
    },

    edgeDrawnBefore: {
        audio: [1797.1, 1800],
        text: "Watch out, you've already drwan this edge once."
    }
};



// ================================================================================================
// SECTION FUNCTIONS
// ================================================================================================

MA.bfn.GT_0_0 = function(section, chapter) {

    var $graph = $C('graph', section.$el);
    new M.Graph($graph, 8, [[0,4],[4,5],[5,2],[5,1],[1,2],[2,3],[3,4],[3,6],[6,7],[7,3],[2,7]]);

    var solved = 0;
    var solvedHint = 'Well done! All graph diagrams <span class="target" data-target="#graph0"></span> in this chapter are interactive: try moving the vertices around.';

    section.blanks[0].on('valid', function() {
        $graph.removeClass('novertices');
        ++ solved;
        if (solved == 2) chapter.addHint(solvedHint);
    });

    section.blanks[1].on('valid', function() {
        $graph.removeClass('noedges');
        ++ solved;
        if (solved == 2) chapter.addHint(solvedHint);
    });

    section.on('load', function() {

        chapter.addHint('If you click the <em>Play button</em> <span class="target" data-target="section.active .section-audio"></span> I will read out the text and give you additional instructions for questions and exercises.');

        chapter.addHint('The colour blue usually indicates questions or exercises. Here are two blanks <span class="target" data-target="#blank1, #blank2"></span> which you need to fill in.');

        chapter.addHint('Every chapter consists of many short sections which are revealed step by step. Click the <em>Next button</em> <span class="target" data-target=".go-next"></span> to skip ahead.');

    });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_0_1 = function(section, chapter) {
    var graphs = $$C('graph', section.$el);

    new M.Graph(graphs[0], 7, [[0,1],[1,2],[2,0],[1,3],[3,4],[4,0],[4,5],[6,3]], { directed: true });
    new M.Graph(graphs[1], 9, [[0,1],[1,2],[2,3],[3,0],[1,3],[4,5],[5,6],[6,4],[7,8]]);
    new M.Graph(graphs[2], 4, [[0,1],[1,0],[1,2],[2,1],[2,3],[3,2],[3,0],[0,3],[0,0],[1,1],[2,2],[3,3]], { arc: true });

    // console.log("section initialise");
    // section.on('load',     function() { console.log('section load'); });
    // section.on('active',   function() { console.log('section active'); });
    // section.on('complete', function() { console.log('section complete'); });

    section.on('load', function() {
        chapter.addHint('In the <em>Progress panel</em> <span class="target" data-target="#nav-button-progress"></span> you can see an overview of the sections in this chapter, and how much you have completed. You can also chat with others <span class="target" data-target="#nav-button-discussion"></span> or change the chapter settings <span class="target" data-target="#nav-button-settings"></span>.');
    });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_0_2 = function(section, chapter) {
    var graphs = $$C('graph', section.$el);

    new M.Graph(graphs[0], 6, [[0,1],[1,2],[2,3],[3,0],[0,4],[2,5]], { vertex: '#1f7aff', edge: '#1f7aff' });
    new M.Graph(graphs[2], 5, [[0,1],[1,2],[2,3],[3,4],[4,0]], { vertex: '#31b304', edge: '#31b304' });
    new M.Graph(graphs[4], 6, [[0,1],[1,2],[2,3],[3,0],[0,4],[4,5],[5,1]], { vertex: '#ff941f', edge: '#ff941f' });

    new M.Graph(graphs[1], 8, [[0,1],[1,2],[2,3],[3,0],[1,3],[1,4],[4,6],[6,2],[3,5],[5,7],[7,0]], {
        vertex: function(v) { return v < 6 ? '#1f7aff' : '#DDD' },
        edge: function(u, v) { return (u < 6 && v < 6 && !(u == 1 && v == 3)) ? '#1f7aff' : '#DDD'; }
    });

    new M.Graph(graphs[3], 7, [[0,1],[1,2],[2,3],[3,4],[4,0],[0,3],[1,3],[2,5],[5,3],[5,6],[6,3],[6,4]], {
        vertex: function(v) { return v < 5 ? '#31b304' : '#DDD' },
        edge: function(u, v) { return (u < 5 && v < 5 && !(v == 3 && (u == 0 || u == 1))) ? '#31b304' : '#DDD'; }
    });

    new M.Graph(graphs[5], 8, [[0,1],[1,2],[2,3],[3,0],[0,4],[4,5],[5,1],[1,3],[1,4],[3,6],[6,0],[4,7],[7,0]], {
        vertex: function(v) { return v < 6 ? '#ff941f' : '#DDD' },
        edge: function(u, v) { return (u < 6 && v < 6 && !(u == 1 && (v == 3 || v == 4))) ? '#ff941f' : '#DDD'; }
    });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_0_3 = function(section, chapter) {
    var graphs = $$C('graph', section.$el);

    new M.Graph(graphs[0], 5, [[0,1],[1,2],[2,0],[1,3],[3,4],[4,0],[4,2]]);
    new M.Graph(graphs[1], 8, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,0],[7,1]]);

    new M.Graph(graphs[2], 7, [[0,1],[0,2],[0,3],[1,4],[4,2],[2,5],[5,3],[3,6],[6,1]],
        { vertex: function(v) { return v ? '#DDD' : '#b30469' } });

    new M.Graph(graphs[3], 7, [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,2],[2,3],[3,4],[4,5],[5,6],[6,1]],
        { vertex: function(v) { return v ? '#DDD' : '#b30469' } });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_0_4 = function(section, chapter) {
    var graphs = $$C('graph', section.$el);
    new M.Graph(graphs[0], 3, [[0,1],[1,2],[2,0]]);
    new M.Graph(graphs[1], 5, [[0,1],[1,2],[2,3],[3,4],[4,0]]);
    new M.Graph(graphs[2], 7, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]]);
};

// ------------------------------------------------------------------------------------------------

var person = 'M9,6C5.6,5.2,2.4,4.9,4,2c4.7-8.9,1-14-4-14c-5.1,0-8.7,5.3-4,14c1.6,2.9-1.7,3.2-5,4c-3.5,0.8-3,2.7-3,6h24C12,8.7,12.5,6.8,9,6z';

MA.bfn.GT_1_1 = function(section, chapter) {

    var g = new M.Graph($C('graph', section.$el), 5, M.subsets(M.list(5), 2), { icon: person });

    section.vars[0].on('change', function(n) {
        g.load(n, M.subsets(M.list(n), 2));
        g.attraction /= 2;
        g.repulsion *= 2;
    });

    section.on('load', function() {
        chapter.addHint('Red boxes <span class="target" data-target="#slider1"></span> in the text indicate interactive numbers. Move the slider horizontally to change their value and see what happens.');
    });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_1_2 = function(section, chapter) {
    section.blanks[0].on('valid', function() {
        setTimeout( function(){ $I('handshakes-table').addClass('complete'); }, 1000);
    });

    var $table = $I('handshakes-table');

    section.vars[0].on('change', function(n) {
        var colours = M.colour.rainbow(n);
        var makePerson = function(x,y) {
            var newX= (x>=y ? x+1 : x);
            return ['<td', (x<y ? ' class="duplicate"' : ''), '><span class="person" style="background: ',
                    colours[y], '">', y+1, '</span> + <span class="person" style="background: ', colours[newX],
                    '">', newX + 1, '</span></td>'].join('');
        }

        $table.html('<table class="handshakes grid">' + M.tabulate(makePerson, n-1, n).each(function(x){
            return '<tr>' + x.join('') + '</tr>';
        }).join('') + '</table>');
    });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_1_3 = function(section, chapter) {
    var graphs = $$C('graph', section.$el);
    new M.Graph(graphs[0], 4, M.subsets(M.list(4), 2));
    new M.Graph(graphs[1], 5, M.subsets(M.list(5), 2));
    new M.Graph(graphs[2], 6, M.subsets(M.list(6), 2));
    new M.Graph(graphs[3], 7, M.subsets(M.list(7), 2));
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_1_4 = function(section, chapter) {

    var g = new M.Graph($C('graph', section.$el), 0, [],
        { static: true, icon: person, bound: true });

    section.vars[0].on('change', drawBipartiteGraph);
    section.vars[1].on('change', drawBipartiteGraph);

    function drawBipartiteGraph() {
        var m = section.varValues.m;
        var f = section.varValues.f;

        var mPoints = M.tabulate(function(x){ return { x: (x+1) / (m+1) * 300, y:  30 }; }, m);
        var fPoints = M.tabulate(function(x){ return { x: (x+1) / (f+1) * 300, y: 110 }; }, f);

        var edges = [];
        for (var i=0; i<m; ++i) for (var j=0; j<f; ++j) edges.push([i, m + j]);

        g.options.vertex = function(v) { return v < m ? '#20a0ff' : '#ff207e'; }
        g.load(m + f, edges, M.concat(mPoints, fPoints));
    }
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_2_0 = function(section, chapter) {

    // if (!creating && !count) section.solveds[0].show();

    $C('slideshow-pages', section.$el).children().each(function($el, i) {

        var $svg = $T('svg', $el);
        var $paths = $C('paths', $svg);
        var $water = $C('water', $svg);
        var $bridges = $$C('bridge', $svg);

        var attempts = 0;
        var totalCrossed = 0;

        var map = new M.Draw($svg, { paths: $paths });
        map.on('start', function() { map.clear(); });
        $C('clear-button', $el).click(function() { map.clear(); });

        map.on('clear', function() {
            attempts += 1;
            totalCrossed = 0;
            $error.exit('pop', 300);
            section.solveds[i].hide();

            if (attempts === 4)
                chapter.addHint(i === 1 || i === 2 ? 'tryDifferentStartPoint' : 'tryDifferentMap');
        });

        var $error = $C('error', $svg);
        $error.exit();

        $water.on('pointerEnter', function(e) {
            if (!map.drawing) return;
            map.stop();
            chapter.addHint('crossWater');
            var p = M.events.pointerOffset(e, $svg);
            $error.translate(p.x - 20, p.y - 20);
            $error.enter('pop', 300);
        }, $svg);

        $bridges.each(function($bridge) {
            var enter = null;
            var crossed = false;

            $bridge.on('pointerEnter', function(e) {
                if (map.drawing) {
                    enter = M.events.pointerOffset(e, $svg);
                    if (crossed) {
                        map.stop();
                        $bridge.css('fill', M.colour.red);
                        chapter.addHint('bridgeCrossedBefore');
                    }
                    crossed = true;
                }
            }, $svg);

            $bridge.on('pointerLeave', function(e) {
                if (map.drawing) {
                    var out = M.events.pointerOffset(e, $svg);
                    if (M.geo.distance(enter || out, out) < 40) {
                        crossed = false;
                    } else {
                        $bridge.css('fill', M.colour.green);
                        totalCrossed += 1;
                        if (totalCrossed === $bridges.length) section.solveds[i].show();
                    }
                }
            }, $svg);

            map.on('clear', function() {
                crossed = false;
                $bridge.css('fill', '#F7931E');
            });

        });

    });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_2_1 = function(section, chapter) {

    var $svg = $T('svg', section.$el);

    var $water    = $C('water', $svg);
    var $bg       = $C('background', $svg);
    var $bridges  = $$C('bridge', $svg);

    var $edges    = $$C('edge', $svg);
    var $vertices = $$C('vertex', $svg);
    var $trace    = $C('trace', $svg);

    $edges.each(function($e) { $e.exit(); });
    $vertices.each(function($e) { $e.exit(); });
    $trace.exit();

    section.blanks[0].on('valid', function() {
        $vertices.each(function($v){ $v.enter('pop', 400); });
    });

    section.blanks[1].on('valid', function() {
        setTimeout(function(){ ([$water, $bg]).concat($bridges).each(function($x){ $x.exit('fade', 800); }); }, 1600);
        $edges.each(function($e) { $e.enter('draw', 800); });
    });

    section.subsections[0].on('show', function() {
        setTimeout( function(){ $trace.enter('draw', 4000); }, 2000);
    });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_2_3 = function(section, chapter) {

    var $select = $T('select', section.$el);
    var $circles = $$T('circle', section.$el);

    var g = M.colour.green, r = M.colour.red, b=M.colour.blue, o = M.colour.orange;
    var colours = {
        val: M.colour.rainbow(8),
        eo: [g,r,g,r,g,r,g],
        prime: [g,g,r,g,r,g,r],
        size: [b,b,o,o,o,o,o]
    };
    var done = { val: true };

    var colour = function(x) {
        var x = $select.value();
        $circles.each(function($c) {
            var y = Number($c.attr('data-value'));
            $c.css('fill', colours[x][y-2]);  // -2 because no 0s and 1s
        });
        if (!done[x]) {
            done[x] = true;
            section.score();
        }
    }

    $select.change(colour);
    colour();
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_2_4 = function(section, chapter) {

    var $svg = section.$el.find('svg')[0];
    var $g = section.$el.find('g')[0];
    var $edges = $svg.find('line');
    var $vertex = $svg.find('circle')[0];
    var $text = $svg.find('text')[0];
    var $trace = $svg.find('path')[0];

    for (var i=0; i<6; ++i) $edges[i].exit();
    $trace.exit();

    section.slideshow.on('next', function(x) {
        if (x < 4) {
            $edges[2*x-2].enter('draw', 800);
            $edges[2*x-1].enter('draw', 800, 800);
            setTimeout(function(){
                $text.text(2*x-1);
                $vertex.css('fill', M.colour.red);
            }, 600);
            setTimeout(function(){
                $text.text(2*x);
                $vertex.css('fill', M.colour.green);
            }, 1000);

        } else if (x === 5) {
            $g.animate({ css: M.prefix('transform'), from: 'scale(1)', to: 'scale(.4)' });
            $trace.enter('draw', 5000, 1000);
        }
    });

    section.slideshow.on('prev', function(x) {
        if (x < 3) {
            $edges[2*x+1].exit('draw', 600);
            $edges[2*x  ].exit('draw', 600, 600);
            setTimeout(function(){
                $text.text(2*x || '');
                $vertex.css('fill', x ? M.colour.green : '#BBB');
            }, 600);

        } else if (x === 4) {
            $g.animate({ css: M.prefix('transform'), from: 'scale(.4)', to: 'scale(1)' });
            $trace.exit('fade', 1000);
        }
    });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_3_0 = function(section, chapter) {

    var $svg = $I('map-utilities');
    var currentUtility;
    var startUtility;

    var error = false;
    var remove = false;

    var map = new M.Draw($svg, {
        noStart: true,
        paths: $I('utility-paths'),
        intersect: true
    });

    map.on('intersect', function(e) {
        e.paths[0].css('stroke','#C00');
        e.paths[1].css('stroke','#C00');
        chapter.sidebar.addHint('Careful - the lines are not allowed to cross.');
        error = true;
        map.stop();
    });

    map.on('end', function() {
        if (map.drawing) remove = true;
    });

    var allUtilities = $$('.utility1, .utility2, .utility3', $svg);
    var clear = function() {
        allUtilities.each(function($el) { $el.css('opacity', 0); });
        map.clear();
    };

    $I('utilities-clear').click(clear);

    $$C('utility', $svg).each(function($ut) {
        var $c = $ut.children(0);
        var p = new M.geo.Point(Number($c.attr('cx')), Number($c.attr('cy')));
        var onThis = false;
        var dataType = $ut.attr('data-type');

        $ut.on('mousedown touchstart', function(e) {
            currentUtility = $ut;
            startUtility = $ut;
            e.preventDefault();
            e.stopPropagation();

            if (error) clear();
            error = false;

            if (remove) {
                var last = map.paths.pop();
                last.fadeOut(200);
            }
            remove = false;

            map.start(p);
            map.drawing = false;
            onThis = true;
        });

        $ut.on('mouseout', function(e) {
            if (!onThis) return;
            map.drawing = true;
            onThis = false;
        });

        $ut.on('touchenter mouseover', function(e) {
            if (!map.drawing || currentUtility == $ut) return;
            map.addPoint(p);
            map.stop();
            $ut.pulseDown();
            if (startUtility.attr('data-type') == dataType) {
                map.paths.last().css('stroke','#C00');
                if(dataType == 'house') {
                    chapter.addHint('housesToEachOther');
                } else {
                    chapter.addHint('factoriesToEachOther');
                }
                remove = true;
            } else {
                if (startUtility.attr('data-type') == 'house') {
                    $C($ut.attr('data-utility'), currentUtility).css('opacity', 1);
                } else {
                    $C(currentUtility.attr('data-utility'), $ut).css('opacity', 1);
                }
            }
            // TODO Error on connect twice
        }, $svg);
    });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_3_1 = function(section, chapter) {

    var graphs = $$C('graph', section.$el);

    var p3 = [[100, 35], [170, 155], [30, 155]];
    new M.Graph(graphs[0], 3, M.subsets(M.list(3), 2), { r: 8, static: true, posn: p3 });

    var p4  = [[40, 40], [160, 40], [160, 160], [40, 160]];
    var p4x = [[100, 110], [100, 25], [175, 160], [25, 160]];
    var k4  = new M.Graph(graphs[1], 4, M.subsets(M.list(4), 2), { r: 8, static: true, posn: p4 });

    var p5  = [[100, 30], [175, 85], [145, 170], [55, 170], [25, 85]];
    var p5x = [[100, 30], [120, 110], [185, 170], [15, 170], [80, 110]];
    var k5  = new M.Graph(graphs[2], 5, M.subsets(M.list(5), 2), { r: 8, static: true, posn: p5 });

    function transition(graph, to) {
        var from = graph.vertices.each(function(v) { return [v.posn.x, v.posn.y]; });
        M.animate(function(q) {
            graph.arrange(from.each(function(x, i) { return {
                x: to[i][0] * q + from[i][0] * (1-q),
                y: to[i][1] * q + from[i][1] * (1-q)
            }; }));
        }, 800);
    }

    section.blanks[0].on('valid', function() {
        transition(k4, p4x);
    });

    section.blanks[1].on('valid', function() {
        transition(k5, p5x);
        k5.edges[1].$el.animate({ css: 'stroke', to: '#C00', duration: 800 });
        k5.edges[4].$el.animate({ css: 'stroke', to: '#C00', duration: 800 });
    });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_3_3 = function(section, chapter) {

    var $svg = $T('svg', section.$el);
    var $newBtn = $T('button', section.$el);
    var creating = false;

    $newBtn.click(function() { generateGraph(section.varValues.n); })
    section.vars[0].on('change', function(n) { generateGraph(n); })

    var g = new M.Graph($svg, 0, [], { r: 12, static: true, bound: true });

    function shuffle(n) {
        return M.tabulate(function() {
            return new M.geo.Point(Math.random() * g.width, Math.random() * g.height);
        }, n);
    }

    function generateGraph(n) {
        creating = true;
        section.solveds[0].hide();

        var points = shuffle(n);
        var edges = [];

        function addEdge(u, v) {
            if (u == v) return;
            var edge = { p1: points[u], p2: points[v] };
            for (var i=0; i<edges.length; ++i)
                if (M.geo.lineIntersect(edge, { p1: points[edges[i][0]], p2: points[edges[i][1]] }))
                    return;
            edges.push([u,v]);
        }

        for (var i=0; i<n; ++i) addEdge(i, M.random.int(n));
        for (i=0; i<n; ++i) for (j=i+1; j<n; ++j) addEdge(i, j);

        g.load(n, edges, shuffle(n));

        while (!intersect(g.edges) && n > 4) {
            g.arrange(shuffle(n));
        };
        creating = false;
    }

    g.on('update', function() {
        count = intersect(g.edges);
        if (!creating && !count) section.solveds[0].show();

        g.vertices.each(function(v) { v.$el.setClass('intersect', v.intersect); });
        g.edges.each(function(e) { e.$el.setClass('intersect', e.intersect); });
    });

    function intersect(edges) {
        var count = 0;

        edges.each(function(e) {
            e.intersect = e.vertices[0].intersect = e.vertices[1].intersect = false;
        });

        for (var i=0; i<edges.length; ++i) {
            var e1 = { p1: edges[i].vertices[0].posn, p2: edges[i].vertices[1].posn };
            for (var j=i+1; j<edges.length; ++j) {
                var e2 = { p1: edges[j].vertices[0].posn, p2: edges[j].vertices[1].posn };
                if (M.geo.lineIntersect(e1, e2)) {
                    edges[i].intersect = edges[j].intersect = edges[i].vertices[0].intersect =
                        edges[i].vertices[1].intersect = edges[j].vertices[0].intersect =
                        edges[j].vertices[1].intersect = true;
                    count += 1;
                }

            }
        }

        return count;
    }
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_4_1 = function(section, chapter) {

    var $svg = section.$el.find('svg');
    var notes = section.$el.find('.euler-sum');

    section.blanks.each(function(blank, i) {
        var x = i%3;
        var mySvg = $svg[(i-x)/3]
        blank.on('valid', function() {
            if (x == 0) {
                mySvg.find('circle').each(function($c) { $c.animate({ css: 'fill', to: M.colour.green, duration: 400 }); })
            } else if (x == 1) {
                mySvg.find('polygon').each(function($c) { $c.animate({ css: 'opacity', to: .3, duration: 400 }); });
                notes[(i-x)/3].animate({ css: 'opacity', to: 1, duration: 400 });
            } else if (x == 2) {
                mySvg.find('line').each(function($c) { $c.animate({ css: 'stroke', to: M.colour.red, duration: 400 }); })
            }
        });
    });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_4_3 = function(section, chapter) {

    var $svg = $I('dominoes');
    var $gs = $svg.find('g');

    var hasClicked = false;
    $svg.click(function() {
        if (hasClicked) return;
        hasClicked = true;

        $svg.css('cursor','default');
        $gs.each(function($g, i) {
            setTimeout(function(){ $g.transform('rotate(23.5deg)'); }, i*100);
            setTimeout(function(){ $g.transform('rotate(43.5deg)'); }, i*100 + 100);
            setTimeout(function(){ $g.transform('rotate(  56deg)'); }, i*100 + 200);
            setTimeout(function(){ $g.transform('rotate(  62deg)'); }, i*100 + 300);
            setTimeout(function(){ $g.transform('rotate(64.5deg)'); }, i*100 + 400);
            setTimeout(function(){ $g.transform('rotate(65.5deg)'); }, i*100 + 500);
        });
    });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_5_1 = function(section, chapter) {

    var stateBorders = {"AK":["WA"],"WA":["AK","ID","OR"],"AL":["FL","GA","MS","TN"],"FL":["AL","GA"],"GA":["AL","FL","NC","SC","TN"],"MS":["AL","AR","LA","TN"],"TN":["AL","AR","GA","KY","MO","MS","NC","VA"],"AR":["LA","MO","MS","OK","TN","TX"],"LA":["AR","MS","TX"],"MO":["AR","IA","IL","KS","KY","NE","OK","TN"],"OK":["AR","CO","KS","MO","NM","TX"],"TX":["AR","LA","NM","OK"],"AZ":["CA","CO","NM","NV","UT"],"CA":["AZ","HI","NV","OR"],"CO":["AZ","KS","NE","NM","OK","UT","WY"],"NM":["AZ","CO","OK","TX","UT"],"NV":["AZ","CA","ID","OR","UT"],"UT":["AZ","CO","ID","NM","NV","WY"],"HI":["CA"],"OR":["CA","ID","NV","WA"],"KS":["CO","MO","NE","OK"],"NE":["CO","IA","KS","MO","SD","WY"],"WY":["CO","ID","MT","NE","SD","UT"],"CT":["MA","NY","RI"],"MA":["CT","NH","NY","RI","VT"],"NY":["CT","MA","NJ","PA","VT"],"RI":["CT","MA"],"DC":["MD","VA"],"MD":["DC","DE","PA","VA","WV"],"VA":["DC","KY","MD","NC","TN","WV"],"DE":["MD","NJ","PA"],"NJ":["DE","NY","PA"],"PA":["DE","MD","NJ","NY","OH","WV"],"NC":["GA","SC","TN","VA"],"SC":["GA","NC"],"IA":["IL","MN","MO","NE","SD","WI"],"IL":["IA","IN","KY","MO","WI"],"MN":["IA","ND","SD","WI"],"SD":["IA","MN","MT","ND","NE","WY"],"WI":["IA","IL","MI","MN"],"ID":["MT","NV","OR","UT","WA","WY"],"MT":["ID","ND","SD","WY"],"IN":["IL","KY","MI","OH"],"KY":["IL","IN","MO","OH","TN","VA","WV"],"MI":["IN","OH","WI"],"OH":["IN","KY","MI","PA","WV"],"WV":["KY","MD","OH","PA","VA"],"NH":["MA","ME","VT"],"VT":["MA","NH","NY"],"ME":["NH"],"ND":["MN","MT","SD"]};

    var countNoZero = function(array) {
        var count = 0;
        for (var i=0; i<array.length; ++i) if (array[i]) ++count;
        return count;
    }

    var $colourIcons = $$C('four-colour-icon',section.$el);
    var activeColour = 0;
    var activeColourEl = $colourIcons[0];
    var colours = M.colour.rainbow(6);

    $colourIcons.each(function($el, i) {
        $el.css('background-color', colours[i]);
        $el.click(function(){
            activeColourEl.removeClass('on');
            activeColour = i;
            activeColourEl = $el
            $el.addClass('on');
        });
    });

    $$C('colour-map', section.$el).each(function($el) {

        var $svg = $T('svg', $el);
        var $coloursUsed = $C('colour-count', $el);
        var $states = $svg.children();
        $states.each(function($s) { $s.css('fill', '#CCC'); });

        var colourUses = [0,0,0,0,0,0];
        var stateColours = [];

        $states.each(function($s) {

            var id = $s.attr('id');
            stateColours[id] = null;

            $s.click(function() {

                for (var i=0; i<stateBorders[id].length; ++i) {
                    if (stateColours[stateBorders[id][i]] == activeColour) {
                        return false;
                    }
                }

                if (stateColours[id]) --colourUses[stateColours[id]];
                ++colourUses[activeColour];
                stateColours[id] = activeColour;
                $coloursUsed.html(countNoZero(colourUses));

                $s.css('fill', colours[activeColour]);

                for (var i=0; i<50; ++i) {
                    if (!stateColours[i]) return;
                }

                // TODO completed msg
            });

        });

        $C('clear-button', $el).click(function() {
            stateColours = [];
            $states.each(function($s) { $s.css('fill', '#CCC'); });
        });

    });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_5_2 = function(section, chapter) {

    var $svg = section.$el.find('svg')[0];
    var $countries = $svg.find('polygon');
    var $edges     = $svg.find('path');
    var $vertices  = $svg.find('circle');

    $edges.each(function($e) { $e.exit(); });
    $vertices.each(function($e) { $e.exit(); });

    section.blanks[0].on('valid', function() {
        $vertices.each(function($v) { $v.enter('pop', 600); });
        $countries.each(function($c) { $c.animate({ css: 'opacity', from: 1, to: .4, duration: 800 }) })
    });

    section.blanks[1].on('valid', function() {
        $edges.each(function($e) { $e.enter('draw', 800); });
        $countries.each(function($c) { $c.animate({ css: 'opacity', to: .1, duration: 800 }) })
    });
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_6_2 = function(section, chapter) {
    window.getTsmString = function(x) {
        var a = ['There are <strong>'+x+'</strong> choices for the first city.'];
        if (x > 2) a.push('After picking the first city, there are only <strong>'+(x-1)+'</strong> choices left for the second city.');
        for (var i = 3; i < Math.min(6,x); ++i) a.push('Then there are <strong>'+(x-i+1)+'</strong> choices for the '+M.toOrdinal(i)+' city.');
        if (x > 6) a.push('&hellip;');
        a.push('Finally, there is only <strong>1</strong> choice left for the '+M.toOrdinal(x)+' city.');
        return '<li style="margin-bottom: 0">' + a.join('</li><li style="margin-bottom: 0">') + '</li>';
    }
};

// ------------------------------------------------------------------------------------------------

MA.bfn.GT_6_4 = function(section, chapter) {

    var $box = $C('tsm-box', section.$el);
    var $svg = $T('svg', $box);
    var $path = $N('path', { class: 'tsm-path' }, $svg);

    var coords = [[150,110],[360,240],[520,170],[420,400],[120,340],[330,60]];

    var reset = function() {
        var dist = [];
        for (var i=0; i<coords.length; ++i) dist[i] = [];
        for (var i=0; i<coords.length; ++i) {
            for (var j=0; j<i; ++j) {
                dist[i][j] = dist[j][i] = M.Vector(M.map(M.subtr, coords[i], coords[j])).norm();
            }
        }

        var tsm = M.geo.travellingSalesman(dist);
        $path.setPoints(tsm.path.each(function(i) {
            return new M.geo.Point(coords[i][0], coords[i][1]);
        }));
    };

    var makeCity = function($c, i) {
        var drag = new M.Draggable($c, $box, '', 15);
        drag.on('change', function(e) {
            coords[i] = [e.x+15, e.y+15];
            reset();
        });
        return drag;
    };

    coords.each(function(c, i) {
        var $city = $N('div', { class: 'tsm-city' }, $box);
        var drag = makeCity($city, i);
        drag.set(c[0]-15, c[1]-15);
    });
};
