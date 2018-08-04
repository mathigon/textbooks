// =============================================================================
// Fractal Component
// (c) Mathigon
// =============================================================================



/* global THREE */
import { cache } from '@mathigon/core';
import { slide, Browser, script } from '@mathigon/boost';


const url = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js';
let threePromise = null;

export function loadTHREE() {
  if (!threePromise) threePromise = script(url);
  return threePromise
}


// -----------------------------------------------------------------------------
// Shared Renderer

let renderers = {};

export function getRenderer(size) {
  if (renderers[size]) return renderers[size];

  const renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(2 * size, 2 * size);
  renderer.setClearColor(0xffffff, 1);
  return renderers[size] = renderer;
}


// -----------------------------------------------------------------------------
// Colours and Materials

export const colours = cache(() => {
  return {
    3: new THREE.Color(0xff941f),  // yellow FBC600
    4: new THREE.Color(0x1f7aff),  // blue 0095FF
    5: new THREE.Color(0x31b304),  // green 00A826
    6: new THREE.Color(0xb30469),  // red CE001C
    8: new THREE.Color(0x693fb4),  // violet 8600A9
    10: new THREE.Color(0x289782)  // teal FF710E
  };
});

export function colour(hex) {
  return new THREE.Color(hex);
}

export const faceMaterial = cache(() => {
  return new THREE.MeshPhongMaterial({
    vertexColors: THREE.FaceColors,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9,
    specular: new THREE.Color(0x222222),
    flatShading: true
  });
});

export const edgeMaterial = cache(() => {
  return new THREE.LineBasicMaterial({color: 0xffffff});
});


// -----------------------------------------------------------------------------
// Set up Scene

export function drawFace(face, vertices) {
  const faceGeometry = new THREE.Geometry();
  faceGeometry.vertices = vertices;
  for (let i = 1; i < face.length - 1; i++) {
    const faceObj = new THREE.Face3(face[0], face[i], face[i+1]);
    faceObj.color = colours()[face.length];
    faceGeometry.faces.push(faceObj);
  }
  faceGeometry.computeFaceNormals();
  faceGeometry.computeVertexNormals();
  return faceGeometry;
}

export function drawShape($canvas, polyhedron, size, rotate) {
  // TODO Damping after mouse movement
  // TODO Better mouse-to-point mapping

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);
  camera.position.y = 10;
  camera.up = new THREE.Vector3(0,0,1);
  camera.lookAt(0, 0, 0);
  scene.add(camera);

  const light1 = new THREE.AmbientLight(0x404040);
  scene.add(light1);

  const light2 = new THREE.PointLight(0xffffff);
  light2.position.set(3, 12, 6);
  scene.add(light2);

  scene.add(polyhedron);

  const renderer = getRenderer(size);
  const context = $canvas.getContext();

  // TODO Only Chrome is fast enough to support auto-rotation.
  const autoRotate = rotate && Browser.isChrome && !Browser.isMobile;

  let dragging = false;
  let visible = false;

  if (autoRotate) {
    $canvas.on('enterViewport', () => { visible = true; render(); });
    $canvas.on('exitViewport', () => { visible = false; });
  } else {
    setTimeout(render);
  }

  function render() {
    if (visible && autoRotate) requestAnimationFrame(render);
    renderer.render(scene, camera);
    context.drawImage(renderer.domElement, 0, 0);
    if (!dragging) polyhedron.rotation.z += 0.012;
  }

  slide($canvas, {
    start() { dragging = true; },
    move(posn, start, last) {
      const d = posn.subtract(last);
      const q = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(-d.y * Math.PI / 180, 0, d.x * Math.PI / 180, 'XYZ'));
      polyhedron.quaternion.multiplyQuaternions(q, polyhedron.quaternion);
      if (!autoRotate) render();
    },
    end() { dragging = false; }
  });

  return {scene, camera, renderer, light1, light2};
}
