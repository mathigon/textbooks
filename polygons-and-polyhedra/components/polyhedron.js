// =============================================================================
// Fractal Component
// (c) Mathigon
// =============================================================================



/* global THREE */
import { PolyhedronData } from './polyhedron-data';
import { CustomElement, registerElement, slide } from '@mathigon/boost';


export class Polyhedron extends CustomElement {

  ready() {
    const size = +this.attr('size');
    this.css({width: size + 'px', height: size + 'px'});


    // -------------------------------------------------------------------------
    // Setup Scene

    if (!window.THREE) return;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 20000);
    camera.position.z = 400;
    scene.add(camera);

    const light1 = new THREE.AmbientLight(0x404040);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xffffff);
    light2.position.set(100, 200, 400);
    scene.add(light2);

    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(size, size);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xffffff, 1);
    this._el.appendChild(renderer.domElement);


    // -------------------------------------------------------------------------
    // Draw Polyhedra

    const data = PolyhedronData[this.attr('shape')];
    if (!data) return console.error('Unknown polyhedron:', this.attr('shape'));

    const polyhedron = drawPolyhedron(data);
    polyhedron.scale.multiplyScalar(100);
    scene.add(polyhedron);


    // -------------------------------------------------------------------------
    // Animation and Events
    // TODO Damping
    // TODO Auto-rotate
    // TODO Better mouse-to-point mapping

    function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }
    render();

    slide(this, {
      move(posn, start, last) {
        const d = posn.subtract(last);
        const q = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(d.y * Math.PI / 180, d.x * Math.PI / 180, 0, 'XYZ'));
        polyhedron.quaternion.multiplyQuaternions(q, polyhedron.quaternion);
      }
    });

  }
}

registerElement('x-polyhedron', Polyhedron);


// -----------------------------------------------------------------------------

const colours = {
  3: new THREE.Color(0xFBC600),  // yellow
  4: new THREE.Color(0x0095FF),  // blue
  5: new THREE.Color(0x00A826),  // green
  6: new THREE.Color(0xCE001C),  // red
  8: new THREE.Color(0x8600A9),  // violet
  10: new THREE.Color(0xFF710E)  // orange
};

const faceMaterial = new THREE.MeshPhongMaterial({
  vertexColors: THREE.FaceColors,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.9,
  specular: new THREE.Color(0x222222),
  flatShading: true
});

const edgeMaterial = new THREE.LineBasicMaterial({
  color: 0xffffff,
  // transparent: true,
  // opacity: 0.5
});

function drawPolyhedron(data) {
  const polyhedron = new THREE.Object3D();

  const vertices = data.vertex.map(v => new THREE.Vector3(v[0], v[1], v[2]));

  const faceGeometry = new THREE.Geometry();
  faceGeometry.vertices = vertices;
  for (let f of data.face) {
    for (let i = 1; i < f.length - 1; i++) {
      const face = new THREE.Face3(f[0], f[i], f[i+1]);
      face.color = colours[f.length];
      faceGeometry.faces.push(face);
    }
  }
  faceGeometry.computeFaceNormals();
  faceGeometry.computeVertexNormals();

  const faces = new THREE.Mesh(faceGeometry, faceMaterial);
  polyhedron.add(faces);

  for (let e of data.edge) {
    const edgeGeometry = new THREE.Geometry();
    edgeGeometry.vertices = [vertices[e[0]], vertices[e[1]]];
    const edge = new THREE.Line(edgeGeometry, edgeMaterial);
    polyhedron.add(edge);
  }

  return polyhedron;
}
