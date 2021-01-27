// =============================================================================
// Fractal Component
// (c) Mathigon
// =============================================================================


/// <reference types="THREE"/>
import {Obj} from '@mathigon/core';
import {$N, Browser, CanvasView, ElementView, loadScript} from '@mathigon/boost';


const url = '/resources/shared/vendor/three-91.min.js';
const renderers: Obj<THREE.WebGLRenderer> = {};
let threePromise: Promise<any>;

export function loadTHREE() {
  if (!threePromise) threePromise = loadScript(url);
  return threePromise;
}

function getRenderer(width: number, height: number) {
  const id = [width, height].join(',');
  if (renderers[id]) return renderers[id];

  const renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.localClippingEnabled = true;
  renderer.setClearColor(Browser.isDarkMode() ? 0x22212e : 0xffffff, 1);
  renderer.setSize(width, height);
  return renderers[id] = renderer;
}

export interface Graphics3D {
  $canvas: CanvasView;
  camera: THREE.Camera;
  renderer: THREE.WebGLRenderer;
  draw: () => void;
  onDraw: (fn: () => void) => void;
  add: (obj: THREE.Object3D) => void;
  remove: (obj: THREE.Object3D) => void;
}

export async function create3D($el: ElementView, fov: number, width: number,
    height = width, camera?: THREE.Camera): Promise<Graphics3D> {

  const $canvas = $N('canvas',
      {width, height, style: 'max-width: 100%'}, $el) as CanvasView;
  const context = $canvas.ctx;

  await loadTHREE();

  const scene = new THREE.Scene();
  const renderer = getRenderer(width, height);

  if (!camera) camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 1000);
  scene.add(camera);

  const callbacks: (() => void)[] = [];

  const onDraw = (fn: () => void) => callbacks.push(fn);
  const add = (obj: THREE.Object3D) => scene.add(obj);
  const remove = (obj: THREE.Object3D) => scene.remove(obj);

  const draw = () => {
    renderer.render(scene, camera!);
    context.clearRect(0, 0, width, height);
    context.drawImage(renderer.domElement, 0, 0);
    for (const fn of callbacks) fn();
  };

  return {$canvas, camera, renderer, draw, onDraw, add, remove};
}
