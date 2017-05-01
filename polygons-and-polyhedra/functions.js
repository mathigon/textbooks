// =============================================================================
// Mathigon | Polygons and Polyhedra Functions
// (c) 2016 Mathigon
// =============================================================================


import { $, $$, $C, $N } from 'elements';
import Draggable from 'draggable';
import { Point, angle } from 'geometry';
import { numberFormat, roundTo } from 'arithmetic';
import setPicker from 'set-picker';


// -----------------------------------------------------------------------------
// Biographies

export const bio = {
    escher: {
        name: "M. C. Escher",
        birth: "1898",
        death: "1972",
        img: "/resources/bio/escher.jpg",
        bio: "<p>Maurits Cornelis Escher was a Dutch artist who created sketches, woodcuts and lithographs of mathematically inspired objects and shapes: including polyhedra, tessellations and impossible shapes. He graphically explored concepts like symmetry, infinity, perspective and non-euclidean geometry.</p>"
    },
    penrose: {
        name: "Sir Roger Penrose",
        birth: "1931",
        img: "/resources/bio/penrose.jpg",
        bio: "<p>Roger Penrose is a British mathematician and physicist who is known for his groundbreaking work in general relativity and cosmology – often collaborating with other famous scientists like Stephen Hawking and Michael Atiyah. He also discovered <em>Penrose Tilings</em>: self-similar, non-periodic tessellations.</p>"
    },
    euler: {
        name: "Leonhard Euler",
        birth: "1707",
        death: "1783",
        img: "/resources/bio/euler.jpg",
        bio: "<p>Leonhard Euler is one the greatest mathematicians of all times. His work spans all areas of mathematics, and he wrote 80 volumes of research.</p><p>Euler was born in Switzerland and studied in Basel, but lived most of his life in Berlin, Prussia, and St. Petersburg, Russia.</p><p>Euler invented most of the modern mathematical terminology and notation, and made important discoveries in calculus, analysis, graph theory, physics, astronomy, and many other topics.</p>"
    },
    plato: {
        name: "Plato",
        birth: "c. 425",
        death: "c. 347 BC",
        img: "/resources/bio/plato.jpg",
        bio: "<p>Plato was a philosopher in ancient Greece, and – together with his teacher Socrates and his student Archimedes – laid the very foundation of Western philosophy and science.</p><p>Plato founded the Academy of Athens, the first higher learning institution in the Western world. His many writings on philosophy and theology, science and mathematics, politics and justice, make him one of the most influential thinkers of all time.</p>"
    },
    archimedes: {
        name: "Archimedes",
        birth: "c. 287",
        death: "c. 212 BC",
        img: "/resources/bio/archimedes.jpg",
        bio: "<p>Archimedes was an ancient Greek scientist and engineer, and one of the greatest mathematicians of all time. He discovered many concepts of calculus, and worked in geometry, analysis and mechanics.</p><p>While taking a bath, Archimedes discovered a way to determine the volume of irregular objects using the amount of water they displaced when submerged. He was so excited by this discovery that he run out on the street, still undressed, yelling <em>“Eureka!”</em> (Greek for <em>“I have found it!”</em>).</p><p>As engineer he built ingenious defence machines during the siege of his home city Syracuse in Sicily. After two years, the Romans finally managed to enter and Archimedes as killed. His last words were <em>“Do not disturb my circles”</em> – which he was studying at the time.</p>"
    }
};


// -----------------------------------------------------------------------------
// Glossary

export const gloss = {
    polygon: {
        title: "Polygon",
        text: "<p>A geometric shape that is made up of straight line segments.</p>"
    },
    regpoly: {
        title: "Regular Polygon",
        text: "<p>A polygon in which all edges have the same length.</p>"
    },
    square: {
        title: "Square",
        text: "<p>A regular quadrilateral: all edges and all angles have the same size.</p>"
    },
    equilateral: {
        title: "Equilateral Triangle",
        text: "<p>A regular triangle: all sides have the same size.</p>"
    },
    intangle: {
        title: "Internal Angle",
        text: "<p>The angles on the inside at every vertex of a polygon.</p>"
    },
    quadrilateral: {
        title: "Quadrilateral",
        text: "<p>A polygon with four sides.</p>"
    },
    trapezium: {
        title: "Trapezium",
        text: "<p>A quadrilateral in which a pair of opposite edges are parallel.</p>"
    },
    parallelogram: {
        title: "Parallelogram",
        text: "<p>A quadrilateral in which both pairs of opposite edges are parallel.</p>"
    },
    kite: {
        title: "Kite",
        text: "<p>A quadrilateral in which two pairs of adjacent edges have the same length.</p>"
    },
    rectangle: {
        title: "Rectangle",
        text: "<p>A quadrilateral in which all angles are 90°.</p>"
    },
    rhombus: {
        title: "Rhombus",
        text: "<p>A quadrilateral in which all edges have the same length.</p>"
    },
    edge: {
        title: "Edge",
        text: "<p>The “sides” of a polygon or “lines” of a polyhedron.</p>"
    },
    vertex: {
        title: "Vertex",
        text: "<p>The “corners” of a polygon or polyhedron.</p>"
    },
    face: {
        title: "Face",
        text: "<p>The polygons which are “sides” of a polyhedron.</p>"
    },
    tessellation: {
        title: "Tessellation",
        text: "<p>A geometric pattern that covers a surface without gaps or overlaps.</p>"
    },
    penrose: {
        title: "Penrose tilings",
        text: "<p>A non-periodic, self-similar tessellation.</p>"
    },
    polyhedron: {
        title: "Polyhedron",
        text: "<p>A 3-dimensional solids in which all faces are polygons.</p>"
    },
    platonic: {
        title: "Platonic Solid",
        text: "<p>A polyhedron made up of only one kind of regular polygon, that looks the same from every direction.</p>"
    },
    archimedean: {
        title: "Archimedean Solid",
        text: "<p>A polyhedron made up of different kinds of regular polygons, that looks the same from every direction.</p>"
    }
};


// -----------------------------------------------------------------------------
// Hints

export const hints = { };


// -----------------------------------------------------------------------------
// Shared Utilities and Classes

function normalise(v) {
    let l = Math.sqrt(v.x * v.x + v.y * v.y);
    return { x: v.x/l, y: v.y/l };
}

function pointAtX(a, b, x) {
    let slope = (b.y - a.y) / (b.x - a.x);
    let y = a.y + (x - a.x) * slope;
    return { x, y };
}

function svgAngle(a, b, c, size, full=false) {
    let ab = normalise({ x: b.x - a.x, y: b.y - a.y });
    let ac = normalise({ x: c.x - a.x, y: c.y - a.y });

    let orient = a.x * (c.y - b.y) + b.x * (a.y - c.y) + c.x * (b.y - a.y);

    b = { x: a.x + ab.x * size, y: a.y + ab.y * size };
    c = { x: a.x + ac.x * size, y: a.y + ac.y * size };

    let arcSweep = (full && orient > 0) ? 1 : 0;
    let largeArc = (full || orient < 0) ? 1 : 0;
    return ['M'+a.x,a.y+'L'+b.x,b.y+'A'+size,size,0,arcSweep,largeArc,c.x,c.y+'Z'].join(',');
}

function svgCorrespondingAngle(a, b, c, size, s) {
    return svgAngle(s, { x: b.x+s.x-a.x, y: b.y+s.y-a.y }, { x: c.x+s.x-a.x, y: c.y+s.y-a.y }, size);
}

function svgPolygon(...points) {
    return points.map(p => p.x + ',' + p.y).join(' ');
}

function svgOppositeAngle(a, b, c, size) {
    return svgAngle(a, { x: 2*a.x-c.x, y: 2*a.y-c.y }, { x: 2*a.x-b.x, y: 2*a.y-b.y }, size);
}

function svgLine(a, b) {
    let p = pointAtX(a, b, -10);
    let q = pointAtX(a, b, 800);
    if (!isFinite(p.x) || !isFinite(p.y) || !isFinite(q.x) || !isFinite(q.y)) return '';
    return 'M' + p.x + ',' + p.y + 'L' + q.x + ',' + q.y;
}

function svgLineThrough(a, b, c) {
    return svgLine(c, { x: c.x + b.x - a.x, y: c.y + b.y - a.y });
}

function deg(a, b, c) {
    let x = angle(a, b, c) * 180 / Math.PI;
    return Math.round(Math.min(x, 360 - x));
}


// -----------------------------------------------------------------------------
// Functions

const fns = {};

fns.polygon1 = function(section, chapter) {
    chapter.addGloss('polygon');
    setPicker(section.$el.find('.set-picker'), section);
};

fns.polygon2 = function(section, chapter) {
    chapter.addGloss('regpoly', 'equilateral', 'square', 'edge', 'vertex');
    setPicker(section.$el.find('.set-picker'), section);
};

fns.triangles = function(section, chapter) {
    chapter.addGloss('intangle');
    section.model.load({ angle, svgAngle, svgLine, svgPolygon, deg, x: 'max' });

    let initial = [{ x: 160, y: 70 }, { x: 500, y: 180 }, { x: 110, y: 320 }];
    let $geopad = section.$el.find('.geopad');

    section.$el.findAll('.geo-vertex').forEach(function($v, i) {
        let drag = new Draggable($v, $geopad);
        drag.on('move', e => { section.model.set('abc'[i], e); });
        drag.position = initial[i];
    });

    let $select = section.$el.find('select');
    $select.on('change', function() { section.model.set('x', $select.value); });

    section.model.load({ selected: function(a, b, c) {
        return {
            max: function() { return Math.max(deg(a,b,c), deg(b,c,a), deg(c,a,b)); },
            min: function() { return Math.min(deg(a,b,c), deg(b,c,a), deg(c,a,b)); },
            prod: function() { return numberFormat(deg(a,b,c) * deg(b,c,a) * deg(c,a,b)); },
            sum: function() { return 180; }
        }[section.model.x]();
    }});
};

fns.triangleProof = function(section) {
    section.model.load({ angle, svgAngle, svgLine, svgLineThrough, svgCorrespondingAngle,
        svgOppositeAngle, svgPolygon, deg });

    let initial = [{ x: 100, y: 80 }, { x: 250, y: 300 }, { x: 50, y: 300 }];
    let $geopad = section.$el.find('.geopad');

    section.$el.findAll('.geo-vertex').forEach(function($v, i) {
        let drag = new Draggable($v, $geopad);
        drag.on('move', e => { section.model.set('abc'[i], e); });
        drag.position = initial[i];
    });

    section.subsections[0].on('show', function() { section.$el.find('.parallel').enter('draw', 400, 400); });
    section.subsections[1].on('show', function() { section.$el.findAll('.corresponding').forEach(a => { a.enter('fade', 400, 400); }); });
    section.subsections[2].on('show', function() { section.$el.find('.opposite').enter('fade', 400, 400); });
};

fns.quadrilateral = function(section, chapter) {
    function deg(a, b, c) { return Math.round(angle(a, b, c) * 180 / Math.PI); }
    section.model.load({ angle, svgAngle, svgLine, svgPolygon, deg, x: 'max' });

    let initial = [{ x: 170, y: 40 }, { x: 480, y: 140 }, { x: 540, y: 320 }, { x: 120, y: 270 }];
    let $geopad = section.$el.find('.geopad');

    section.$el.findAll('.geo-vertex').forEach(function($v, i) {
        let drag = new Draggable($v, $geopad);
        drag.on('move', e => { section.model.set('abcd'[i], e); });
        drag.position = initial[i];
    });

    let $select = section.$el.find('select');
    $select.on('change', function() { section.model.set('x', $select.value); });
    let hasWarned = false;

    let functions = {
        max: function (a,b,c,d) { return Math.max(deg(c,b,a), deg(d,c,b), deg(a,d,c), deg(b,a,d)); },
        min: function (a,b,c,d) { return Math.min(deg(c,b,a), deg(d,c,b), deg(a,d,c), deg(b,a,d)); },
        prod: function (a,b,c,d) { return numberFormat(deg(c,b,a) * deg(d,c,b) * deg(a,d,c) * deg(b,a,d)); },
        sum: function (a,b,c,d) { return roundTo(deg(c,b,a) + deg(d,c,b) + deg(a,d,c) + deg(b,a,d), 10); }
    };

    section.model.load({ selected: function(a,b,c,d) {
        let sum = functions.sum(a,b,c,d);
        if (!hasWarned && sum > 360) {
            chapter.addHint('Make sure that the lines don’t overlap – otherwise weird stuff happens…');
            hasWarned = true;
        }
        return (section.model.x == 'sum') ? sum : functions[section.model.x](a,b,c,d);
    }});
};

fns.classifyquadriateral = function(section, chapter) {
    let $lines = section.$el.findAll('line');
    $lines.forEach($l => { $l.attr('stroke', '#b30469'); });

    section.onScore('subsection-0', function() { $lines[1].attr('stroke', '#ff941f'); $lines[3].attr('stroke', '#ff941f'); });
    section.onScore('subsection-1', function() { $lines[1].attr('stroke', '#b30469'); $lines[2].attr('stroke', '#ff941f'); });
    section.onScore('subsection-2', function() { $lines[2].exit('draw'); $lines[3].exit('draw'); });
};

fns.polygonsangle = function(section) {
    section.model.load({
        fn1: function(x) { return x < 3 ? '<em>x</em>' : x; },
        fn2: function(x) { return x < 3 ? '(<em>x</em> – 2)' : x-2 + ' = ' + 180 * (x-2); }
    });

    section.onScore('blank-0', function() { section.$el.find('.pentagon').enter('pop', 400); });
    section.onScore('blank-2', function() { section.$el.find('.hexagon').enter('pop', 400);
        section.$el.find('.heptagon').enter('pop', 400, 800);});
};

fns.parallelograms = function(section) {
    section.model.load({ svgPolygon, between: Point.interpolate });
    let initial = [{ x: 170, y: 40 }, { x: 480, y: 140 }, { x: 540, y: 320 }, { x: 120, y: 270 }];

    section.$el.findAll('.geo-vertex').forEach(function($v, i) {
        let drag = new Draggable($v, section.$el.find('.geopad'));
        drag.on('move', e => {
            section.model.set('abcd'[i], e);
        });
        drag.position = initial[i];

        setTimeout(function() { drag.one('move', e => {
            setTimeout(function () { section.subsections[0].show(); }, 2000);
        }); }, 10);
    });
};

fns.drawing = function(section) {
    const shapes = {
        3: '0,-34.6 30,17.3 -30,17.3',
        4: '-30,-30 30,-30 30,30 -30,30',
        5: '-30,-30 30,-30 30,30 -30,30',
        6: '0,-60 52,-30 52,30 0,60 -52,30 -52,-30'
    };

    let $box = $('svg', section.$el);
    let coords = [{ x: 150, y: 110, p: 3 }, { x: 360, y: 240, p: 4 }, { x: 520, y: 170, p: 5 },
        { x: 420, y: 400, p: 4 }, { x: 120, y: 340, p: 6 }, { x: 330, y: 60, p: 6 }];

    coords.forEach(function(c) {
        let angle = 0;

        let $g = $N('g', {}, $box);
        let $city = $N('polygon', { 'points': shapes[c.p], 'class': 'tessellation-shape' }, $g);
        $city.css('fill', ['#1f7aff', '#31b304', '#ff941f', '#b30469'][c.p - 3]);

        let drag = new Draggable($g, $box, 'xy', 0, true);
        drag.position = c;

        $city.on('click', function() { angle += 30; $city.transform = `rotate(${angle}deg)`; });
    });
};

fns.penrose = function(section, chapter) {
    let $slider = section.$el.find('x-slider');
    let $g = section.$el.findAll('svg g');

    $g[1].attr('opacity', 0);
    $g[2].attr('opacity', 0);

    $slider.on('move', function(n) {
        $g[0].attr('opacity', n < 50 ? 1-n/77 : 0.35);
        $g[1].attr('opacity', n < 50 ? n/50 : 1.5-n/100);
        $g[2].attr('opacity', n < 50 ? 0 : n/50-1);
    });
};

export const sections = fns;
