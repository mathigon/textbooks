// =============================================================================
// Conic Sections Component
// (c) Mathigon
// =============================================================================



/* global THREE */
import { drawShape, loadTHREE } from '../../shared/components/webgl';
import { $N, CustomElement, registerElement } from '@mathigon/boost';


function getCone() {
  const geo = new THREE.CylinderGeometry(0, 10, 10, 60, 5, false);
  const material = new THREE.MeshPhongMaterial({color: 0xeeeeee, transparent: true, opacity: 0.3});
  const mesh = new THREE.Mesh(geo, material);

  mesh.position.set(0.0, 0.0, -5.0);
  const point = new THREE.Vector3(0.0, 0.0, 20.0);
  geo.applyMatrix(new THREE.Matrix4().makeRotationX( Math.PI/2 ));
  mesh.lookAt(point);
  return mesh;
}

function getPlane() {
  const xMax = 10, yMax = 15;

  const geo = new THREE.Geometry();

  geo.vertices.push(new THREE.Vector3(xMax,  yMax, 0.0)); // A
  geo.vertices.push(new THREE.Vector3(xMax, -yMax, 0.0)); // B
  geo.vertices.push(new THREE.Vector3( -xMax,  -yMax, 0.0)); // C
  geo.vertices.push(new THREE.Vector3( -xMax, yMax, 0.0)); // D

  geo.faces.push(new THREE.Face3(0, 1, 2));
  geo.faces.push(new THREE.Face3(2, 0, 3));

  const material = new THREE.MeshBasicMaterial({color:0x165a71, side:THREE.DoubleSide});

  return new THREE.Mesh(geo, material);
}

// -----------------------------------------------------------------------------

export class ConicSection extends CustomElement {

  ready() {
    this.$canvas = $N('canvas', {width: 760 * 2, height: 440 * 2}, this);
    this.$canvas.css('max-width', '100%');

    loadTHREE().then(() => setTimeout(() => this.setUp(), 100));
  }

  setUp() {
    const cone = getCone();
    const plane = getPlane();

    const {scene, camera} = drawShape(this.$canvas, cone, 400);
    scene.add(plane);

    camera.position.y = 20;
  }
}

registerElement('x-conic-section', ConicSection);










  /*
  slider1.value = 0.1;
  slider2.value = 0;
  slider3.value = -3;

  var fudge = new Array();


  function solveQuadratic(a,b,c) {
    var solns = new Array();
    solns[0] = (-b+Math.sqrt(b*b - 4*a*c))/(2*a);
    solns[1] = (-b - Math.sqrt(b*b - 4*a*c))/(2*a);
    return solns;
  }

  var ellipseMat = new THREE.LineBasicMaterial({ linewidth:1, color:0x165a71 });
  var ellipseVec = new THREE.Geometry();

  var parabolaMat = new THREE.LineBasicMaterial({ linewidth:1, color:0x165a7 });
  var parabolaVec = new THREE.Geometry();

  var hyperbolaMat = new THREE.LineBasicMaterial({ linewidth:1, color:0x165a71 });
  var hyperbolaVec = new THREE.Geometry();

  var q, s, a, b, c, C, E, A, cx, cy, rX, rY;

  function drawConics() {
    if(typeof ellipse != 'undefined'){
      scene.remove(ellipse);
    }
    if(typeof hyperbola1 != 'undefined'){
      scene.remove(hyperbola1);
      scene.remove(hyperbola2);
    }
    if(typeof parabola != 'undefined'){
      scene.remove(parabola);
    }
    if(typeof degParab != 'undefined'){
      scene.remove(degParab);
    }

    s1 = 1*slider1.value;
    s1Abs = Math.abs(s1);
    q = slider1.value*Math.PI;
    s = Math.tan(q);
    a = 1*slider2.value;
    b = 1*slider3.value;
    c = Math.sqrt( s*s + 1);
    C = ((s*s) - 1) / ((s*s) + 1);
    E = ((2*b*s) + (2*a)) / Math.sqrt((s*s) + 1);
    A = (b*b) - (a*a) - ((E*E) / (4*C));
    cy = -E/(2*C) - a;
    rX = Math.sqrt(Math.abs(A));
    rY = Math.sqrt(Math.abs(A/C));

    XYsquareMesh.position.set(0.0, a, b);
    XYsquareMesh.rotation.x = -q;

    slid1Val.innerHTML = q.toFixed(2) + " = " + (180*slider1.value).toFixed(0) + "&deg";
    slid2Val.innerHTML = a.toFixed(2);
    slid3Val.innerHTML = b.toFixed(2);

    if(slider1.value > -0.25 && slider1.value < 0.25) {

      /////////////////////////////////////////
      //
      // Ellipse
      //
      /////////////////////////////////////////
      ellipseVec = new THREE.Geometry();

      for(t=0;t<=2*Math.PI+0.05;t+=0.05) {
        pY = rY*Math.cos(t) - cy;
        fudge = (-0.65*q + 0.11 * Math.sign(q)) * a * Math.sin(q) // Fine tuning for extremes of q
        ellipseVec.vertices.push(new THREE.Vector3(
            rX*Math.sin(t),
            pY/c  - fudge,
            (-pY * s)/c + b + a*Math.sin(q)
        ) );
      }
      ellipse = new THREE.Line(ellipseVec, ellipseMat);
      ellipseVec.verticesNeedUpdate = true;
      scene.add(ellipse);

      if(rX == 0) {
        conType.innerHTML = "Degenerate Ellipse";
      } else if(slider1.value == 0) {
        conType.innerHTML = "Circle";
      } else {
        conType.innerHTML = "Ellipse";
      }

    } else if(slider1.value == -0.25 || slider1.value == 0.25) {

      /////////////////////////////////////////
      //
      // Parabola
      //
      /////////////////////////////////////////

      if(rX == 0) {
        degParabVec = new THREE.Geometry();
        endY = 10;
        if(q>0) {
          endZ = -10;
        } else {
          endZ = 10;
        }
        degParabVec.vertices.push(new THREE.Vector3(0, -endY, -endZ) );
        degParabVec.vertices.push(new THREE.Vector3(0, endY, endZ) );
        degParab = new THREE.Line(degParabVec, parabolaMat);
        scene.add(degParab);
        conType.innerHTML = "Degenerate Parabola";
      } else if (slider1.value == -slider2.value) {
        conType.innerHTML = "Degenerate Parabola";
      } else {
        parabolaVec = new THREE.Geometry();
        sgnA = a*Math.sign(q);
        for(t=-15;t<15.5;t+=0.4) {
          parabolaVec.vertices.push(new THREE.Vector3(t, 0, Math.sin(q)*t*t/(sgnA + b) - b/2) );
        }
        parabola = new THREE.Line(parabolaVec, parabolaMat);

        if(slider1.value == 0.25){
          parabola.rotation.x = Math.PI/4;
          fudge = -0.15*b;  // Why -0.15 works here? Dunno...
          parabola.position.set( 0, -fudge + a/2, b + fudge + a/2);
        } else {
          parabola.rotation.x = 3*Math.PI/4;
          fudge = 0.85*b; // Why 0.85 works here? Dunno...
          parabola.position.set( 0, -fudge + a/2, b - fudge - a/2 );
        }
        parabolaVec.verticesNeedUpdate = true;
        scene.add(parabola);
        conType.innerHTML = "Parabola";
      }
    } else {

      /////////////////////////////////////////
      //
      // Hyperbola
      //
      /////////////////////////////////////////

      var rX2 = rX*rX;
      hyperbolaVec1 = new THREE.Geometry();
      hyperbolaVec2 = new THREE.Geometry();
      for(t=-10;t<9.9;t+=0.4) {
        if(rX == 0) { // Fudge for degenerate case
          // There must be a simpler equation for this...
          Y = (1.265*s1Abs + 0.355/(Math.sin(4.15*(s1Abs-1.75)))) * t;
          conType.innerHTML = "Degenerate Hyperbola";
        } else {
          Y = -(rY/rX)*Math.sqrt(t*t + rX2);
          if(rX<0.1) {
            conType.innerHTML = "Degenerate Hyperbola";
          } else {
            conType.innerHTML = "Hyperbola";
          }
        }
        hyperbolaVec1.vertices.push(new THREE.Vector3(
            t,  Y + rY, 0
        ) );
        hyperbolaVec2.vertices.push(new THREE.Vector3(
            t,  -Y - rY, 0
        ) );
      }
      hyperbola1 = new THREE.Line(hyperbolaVec1, hyperbolaMat);
      hyperbola2 = new THREE.Line(hyperbolaVec2, hyperbolaMat);

      g = -a*s/(s-1) - b/((s-1));
      hyperbola1.position.set(0.0, -g,  g );
      j = a*s/(s+1) - (-b)/(s+1) ;
      hyperbola2.position.set(0.0, j,  j );
      if(q<0) {
        if(hyperbola1.position.y < 0) {
          h = Math.PI;
        } else {
          h = 0;
        }
        if(hyperbola2.position.y < 0) {
          h = Math.PI;
        } else {
          h = 0;
        }
      } else {
        if(hyperbola1.position.y < 0) {
          h = 0;
        } else {
          h = Math.PI;
        }
        if(hyperbola2.position.y < 0) {
          h = 0;
        } else {
          h = Math.PI;
        }
      }
      rot = h - q;
      hyperbola1.rotation.x = rot;
      hyperbola2.rotation.x = rot;
      scene.add(hyperbola1);
      scene.add(hyperbola2);
    }
  } */
