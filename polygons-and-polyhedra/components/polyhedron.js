// =============================================================================
// Fractal Component
// (c) Mathigon
// =============================================================================



/* global THREE */
import { PolyhedronData } from './polyhedron-data';
import { $N, CustomElement, registerElement, slide } from '@mathigon/boost';


// -----------------------------------------------------------------------------
// Shared Renderer

let renderers = {};

function getRenderer(size) {
  if (renderers[size]) return renderers[size];

  const renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(size, size);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, 1);
  // $el._el.appendChild(renderer.domElement);
  return renderers[size] = renderer;
}

// -----------------------------------------------------------------------------
// Polygon WebGL Setup

const colours = {
  3: new THREE.Color(0xff941f),  // yellow FBC600
  4: new THREE.Color(0x1f7aff),  // blue 0095FF
  5: new THREE.Color(0x31b304),  // green 00A826
  6: new THREE.Color(0xb30469),  // red CE001C
  8: new THREE.Color(0x693fb4),  // violet 8600A9
  10: new THREE.Color(0x289782)  // teal FF710E
};

const faceMaterial = new THREE.MeshPhongMaterial({
  vertexColors: THREE.FaceColors,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.9,
  specular: new THREE.Color(0x222222),
  flatShading: true
});

const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

function setupWebGL($el, $canvas, shape, size, shift) {

  // Setup Scene ---------------------------------------------------------------

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 20000);
  camera.position.z = 400 + shift;
  scene.add(camera);

  const light1 = new THREE.AmbientLight(0x404040);
  scene.add(light1);

  const light2 = new THREE.PointLight(0xffffff);
  light2.position.set(100, 200, 400);
  scene.add(light2);


  // Draw Polyhedron -----------------------------------------------------------

  const polyhedron = new THREE.Object3D();
  const vertices = shape.vertex.map(v => new THREE.Vector3(v[0], v[1], v[2]));

  const faceGeometry = new THREE.Geometry();
  faceGeometry.vertices = vertices;
  for (let f of shape.face) {
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

  for (let e of shape.edge) {
    const edgeGeometry = new THREE.Geometry();
    edgeGeometry.vertices = [vertices[e[0]], vertices[e[1]]];
    const edge = new THREE.Line(edgeGeometry, edgeMaterial);
    polyhedron.add(edge);
  }

  polyhedron.scale.multiplyScalar(100);
  scene.add(polyhedron);


  // Drawing, Animation and Events ---------------------------------------------
  // TODO Damping
  // TODO Auto-rotate
  // TODO Better mouse-to-point mapping

  const renderer = getRenderer(size);
  const context = $canvas.getContext();

  let dragging = false;
  let visible = false;

  $el.on('enterViewport', () => { visible = true; render(); });
  $el.on('exitViewport', () => { visible = false; });

  function render() {
    if (visible) requestAnimationFrame(render);
    renderer.render(scene, camera);
    context.drawImage(renderer.domElement, 0, 0);
    if (!dragging) polyhedron.rotation.y += 0.012;
  }

  slide($el, {
    start() { dragging = true; },
    move(posn, start, last) {
      const d = posn.subtract(last);
      const q = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(d.y * Math.PI / 180, d.x * Math.PI / 180, 0, 'XYZ'));
      polyhedron.quaternion.multiplyQuaternions(q, polyhedron.quaternion);
    },
    end() { dragging = false; }
  });
}


// -----------------------------------------------------------------------------
// Custom Element

export class Polyhedron extends CustomElement {

  ready() {
    if (!window.THREE) return;

    const shape = this.attr('shape');
    const shift = (shape === 'Octahedron') ? 100 : (shape === 'Tetrahedron') ? 200 : 0;

    const data = PolyhedronData[shape];
    if (!data) return console.error('Unknown polyhedron:', this.attr('shape'));

    const size = +this.attr('size');
    this.css({width: size + 'px', height: size + 'px'});

    const $canvas = $N('canvas', {width: 2*size, height: 2*size}, this);
    setTimeout(() => setupWebGL(this, $canvas, data, size, shift));
  }
}

registerElement('x-polyhedron', Polyhedron);
