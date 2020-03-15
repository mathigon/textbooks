// =============================================================================
// Fractals
// (c) Mathigon
// =============================================================================


import {Color, tabulate2D, unique} from '@mathigon/core';
import {Point, Polyline, Complex, Polygon} from '@mathigon/fermat';
import {$N, CanvasView, hover, SVGView} from '@mathigon/boost';

import {Geopad, Slider, Step} from '../shared/types';
import {RED, YELLOW} from '../shared/constants';


// -----------------------------------------------------------------------------
// Introduction

const colours = Color.gradient('#22ab24', '#0f82f2', 10).map(c => c.toString());

/** Returns the image of x, if a-b is mapped onto b-c. */
function transform(a: Point, b: Point, c: Point, x: Point) {
  const angle = Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(b.y - a.y, b.x - a.x);
  const scale = Point.distance(c, b) / Point.distance(b, a);

  const x1 = x.subtract(b).scale(scale).rotate(angle);
  return c.add(x1);
}

function drawIteration($canvas: CanvasView, a: Point, b: Point, c1: Point, c2: Point, i: number) {
  const d1 = transform(a, b, c1, c1);
  const d2 = transform(a, b, c1, c2);
  const d3 = transform(a, b, c2, c1);
  const d4 = transform(a, b, c2, c2);

  $canvas.draw(new Polyline(d1, c1, d2), {strokeWidth: 3, lineCap: 'round', lineJoin: 'round', stroke: colours[i]});
  $canvas.draw(new Polyline(d3, c2, d4), {strokeWidth: 3, lineCap: 'round', lineJoin: 'round', stroke: colours[i]});

  if (i > 0) {
    drawIteration($canvas, b, c1, d1, d2, i - 1);
    drawIteration($canvas, b, c2, d3, d4, i - 1);
  }
}

export function fern($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;

  $step.model.watch(({steps, a, b, c1, c2}: any) => {
    $canvas.clear();
    drawIteration($canvas, a.scale(2), b.scale(2), c1.scale(2), c2.scale(2), steps);
  });
}


// -----------------------------------------------------------------------------
// Sierpinski Triangle

function drawSierpinski(a: Point, b: Point, c: Point, i: number): string {
  if (i <= 0) return '';

  const ab = Point.average(a, b);
  const ac = Point.average(a, c);
  const bc = Point.average(b, c);

  const t1 = drawSierpinski(a, ab, ac, i - 1);
  const t2 = drawSierpinski(b, ab, bc, i - 1);
  const t3 = drawSierpinski(c, ac, bc, i - 1);

  return `M${ab.x},${ab.y}L${ac.x},${ac.y}L${bc.x},${bc.y}Z ${t1}${t2}${t3}`
}


export function sierpinski($step: Step) {
  const $svg = $step.$('svg.sierpinsk')!;
  const fill = $N('path', {fill: RED}, $svg) as SVGView;
  const holes = $N('path', {fill: 'white'}, $svg) as SVGView;

  const triangle = Polygon.regular(3, 170).shift(150, 175);
  fill.draw(triangle);

  $step.model.watch((m: any) => {
    const steps = m.steps || 0;
    holes.setAttr('d', drawSierpinski(triangle.points[0], triangle.points[1], triangle.points[2], steps));
  });
}


export function cellular($step: Step) {
  const $grid = $step.$('.cellular-grid')!;

  const $cells = tabulate2D((i: number, j: number) => $N('rect', {
    width: 15, height: 15, x: 5 + j * 15, y: 5 + i * 15
  }, $grid), 20, 39);

  const $highlight = $N('path', {d: 'M0,0L55,0L55,25L40,25L40,40L15,40L15,25L0,25Z', fill: YELLOW}, $grid);

  $cells[0][19].addClass('on');

  /* const highlight = (x: number, y: number) => {
    $grid.append($highlight);
    $highlight.translate(x * 15, y * 15);
    $highlight.show();
    $grid.append($cells[x][y]);
    $grid.append($cells[x-1][y]);
    if (y > 0) $grid.append($cells[x-1][y-1]);
    if (y < 20) $grid.append($cells[x-1][y+1]);
  };

  for (const [y, $row] of $cells.entries()) {
    // if (!x) continue;
    for (const [x, $c] of $row.entries()) {
      hover($c, {enter: () => highlight(x, y), exit: () => $highlight.hide()});
    }
  } */





}


/*
function fracAuto() {

  for( var i=1; i<15; i++) {
    for( var j=0; j<23; j++) {

      var temp = ($('#fracTableRow'+(i-1)+' #fracTableCell'+(j-1)).hasClass('on')?"1":"0") +
                 ($('#fracTableRow'+(i-1)+' #fracTableCell'+(j  )).hasClass('on')?"1":"0") +
                 ($('#fracTableRow'+(i-1)+' #fracTableCell'+(j+1)).hasClass('on')?"1":"0");

      if( temp == "000" ) { var colour = $('#fracRule1').hasClass('on')?1:0 }
      else if( temp == "001" ) { var colour = $('#fracRule2').hasClass('on')?1:0 }
      else if( temp == "010" ) { var colour = $('#fracRule3').hasClass('on')?1:0 }
      else if( temp == "011" ) { var colour = $('#fracRule4').hasClass('on')?1:0 }
      else if( temp == "100" ) { var colour = $('#fracRule5').hasClass('on')?1:0 }
      else if( temp == "101" ) { var colour = $('#fracRule6').hasClass('on')?1:0 }
      else if( temp == "110" ) { var colour = $('#fracRule7').hasClass('on')?1:0 }
      else if( temp == "111" ) { var colour = $('#fracRule8').hasClass('on')?1:0 }
      else { var colour = 0 };

      if( colour ) { $('#fracTableRow'+i+' #fracTableCell'+j).addClass('on') } else { $('#fracTableRow'+i+' #fracTableCell'+j).removeClass('on') };

    };
  };
}; */


// -----------------------------------------------------------------------------
// Mandelbrot Set

export function mandelPaint($step: Step) {
  $step.model.complex = (p: Point) => new Complex(p.x, p.y).toString(2);

  const square = (p: Point) => new Point(p.x * p.x - p.y * p.y, 2 * p.x * p.y);

  $step.model.setComputed('x1', ({c}: any) => square(c).add(c));
  $step.model.setComputed('x2', ({x1, c}: any) => square(x1).add(c));
  $step.model.setComputed('x3', ({x2, c}: any) => square(x2).add(c));
  $step.model.setComputed('x4', ({x3, c}: any) => square(x3).add(c));
  $step.model.setComputed('x5', ({x4, c}: any) => square(x4).add(c));
}

export function mandelZoom($step: Step) {
  const $images = $step.$$('.mandel-frame img');
  const $slider = $step.$('x-slider') as Slider;
  const speed = 2 * ($images.length - 1) / $slider.steps;

  $step.model.pow = (s: number) => Math.round(2 ** (s/100 * 19));

  $step.model.watch((state: any) => {
    for (const [i, $img] of $images.entries()) {
      const scale = state.scale * speed - 2 * i;
      const isVisible = scale > -3 && scale < 2;
      $img.toggle(isVisible);
      if (isVisible) $img.css('transform', `scale(${Math.pow(2, scale)})`)
    }
  });
}



/* $('#fracPascalButoon').click( function(){
  $('#fracPascal2').css('opacity','1');
  $('#fracPascalButoon').fadeOut(1000);
  setTimeout( function(){
    $('#fracPascalDesc').fadeIn(1000);
  }, 1010);
});

// ========================================


// ========================================

function inMandel(x,y) {

  var x1 = 10*x + 15;
  var x2 = 10*y + 10;

  var array = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
  ];

  return array[[x2]][[x1]]
};

// MandelComp = Compile[
//    {{c, _Complex}},
//    Module[{num = 1},
//     FixedPoint[(num++; #^2 + c) &, 0, 999,
//      SameTest -> (Re[#]^2 + Im[#]^2 >= 4 &)];
//     num],
//    CompilationTarget -> "C"
//    ];
// Table[If[MandelComp[x/10 + y I/10] == 1000, 1, 0], {y, -10,
//   10}, {x, -15, 11}]

function mandelComplex(b,x,y) {

  var x1 = Math.round(x*100) / 100;
  var y1 = Math.round(y*100) / 100;

  if (!y1) {
    if(x1 < 0){
      return '&#8211;'+String(-x1);
    } else {
      return String(x1);
    }
  } else if(!x1) {
    if(y1 < 0){
      return '&#8211;'+String(-y1)+'<em>i</em>';
    } else {
      return String(y1)+'<em>i</em>';
    }
  } else if ( y1 < 0){
    return (b?'(':'')+(x1<0?('&#8211;'+String(-x1)):String(x1))+' &#8211; '+(-y1)+'<em>i</em>'+(b?')':'');
  } else {
    return  (b?'(':'')+(x1<0?('&#8211;'+String(-x1)):String(x1))+' + '+y1+'<em>i</em>'+(b?')':'');
  };
};


$( "#mandelTarget" ).draggable({
  containment: "#mandelMove",
  scroll: false,
  drag: function() {
    var x = Math.round((          ($('#mandelTarget').position().left)/$('#mandelMove').width()  * 2.915 - 1.648 )*10)/10;
    var y = Math.round((  1.113 - ($('#mandelTarget').position().top )/$('#mandelMove').height() * 2.203         )*10)/10;

    $('#mandelCalculation .red'   ).html(mandelComplex( 0, x, y ));
    $('#mandelCalculation #green1').html(mandelComplex( 0, x, y ));
    $('#mandelCalculation #green2').html(mandelComplex( 1, x, y ));
    $('#mandelCalculation #cyan1' ).html(mandelComplex( 0, ( x*x - y*y + x ), ( y*(1+2*x) ) ));
    $('#mandelCalculation #cyan2' ).html(mandelComplex( 1, ( x*x - y*y + x ), ( y*(1+2*x) ) ));
    $('#mandelCalculation #blue1' ).html(mandelComplex( 0, ( x*(1+x*(1+2*x+x*x)) + y*y*(y*y-(1+6*x*(1+x))) ), ( y*(1+2*x*(1+3*x+2*x*x) - 2*y*y*(1+2*x)) ) ));
    $('#mandelCalculation #blue2' ).html(mandelComplex( 1, ( x*(1+x*(1+2*x+x*x)) + y*y*(y*y-(1+6*x*(1+x))) ), ( y*(1+2*x*(1+3*x+2*x*x) - 2*y*y*(1+2*x)) ) ));
    $('#fracTargetFinal'          ).html(mandelComplex( 0, ( x*(1+x)*(1+x*x*(1+x)*(2+x)*(1+x*x))-(1+2*x*(3+x*(15+x*(30+x*(45+14*x*(3+x))))))*y*y+y*y*y*y*(5*(1+2*x*(3+x*(9+7*x*(2+x))))-2*(3+14*x*(1+x))*y*y+y*y*y*y) ), ( y*(1+2*x*(1+x*(1+2*x+x*x))*(1+2*x*(1+x)*(1+2*x))-2*y*y*(1+2*x*(5+x*(15+x*(30+7*x*(5+2*x))))-y*y*(3+2*x*(9+7*x*(3+2*x)))+2*y*y*y*y*(1+2*x))) ) ));

    if( inMandel(x,y) ) {
      $('#MandelIn').css('display','none');
      $('#MandelNo').css('display','block');
    } else {
      $('#MandelIn').css('display','block');
      $('#MandelNo').css('display','none');
    }

  }
}); */
