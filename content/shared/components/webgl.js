// =============================================================================
// Fractal Component
// (c) Mathigon
// =============================================================================



/* global THREE */
import { script, $N } from '@mathigon/boost';


const url = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/91/three.min.js';
const renderers = {};
let threePromise = null;

function loadTHREE() {
  if (!threePromise) threePromise = script(url);
  return threePromise
}

function getRenderer(width, height) {
  const id = [width, height].join(',');
  if (renderers[id]) return renderers[id];

  const renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.localClippingEnabled = true;
  renderer.setClearColor(0xffffff, 1);
  renderer.setSize(width, height);
  return renderers[id] = renderer;
}

export async function create3D($el, fov, width, height=width) {
  const $canvas = $N('canvas', {width, height, style: 'max-width: 100%'}, $el);
  const context = $canvas.getContext();

  await loadTHREE();

  const scene = new THREE.Scene();
  const renderer = getRenderer(width, height);

  const camera = new THREE.PerspectiveCamera(fov, width/height, 0.1, 1000);
  scene.add(camera);

  const callbacks = [];
  function onDraw(fn) { callbacks.push(fn); }

  function draw() {
    renderer.render(scene, camera);
    context.clearRect(0, 0, width, height);
    context.drawImage(renderer.domElement, 0, 0);
    for (let fn of callbacks) fn();
  }

  return {$canvas, add(obj) { scene.add(obj); }, camera, renderer, draw, onDraw};
}
