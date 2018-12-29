// =============================================================================
// Conic Sections Component
// (c) Mathigon
// =============================================================================



/* global THREE */
import {tabulate, clamp} from '@mathigon/core';
import {$N, CustomElement, registerElement, slide} from '@mathigon/boost';
import { loadTHREE } from './webgl';


// -----------------------------------------------------------------------------
// Constants

const width = 760 * 4;
const height = 300 * 4;
const coneHeight = 200;
const coneTop = 8;
const bounds = [[-6, 50], [-25, 25]];
const centerX = (bounds[0][0] + bounds[0][1]) / 2;


// -----------------------------------------------------------------------------
// Utilities

function getPointAt(s, angle) {
  const min = angle < 1 ? 0 : 4.5 * (angle - 1);
  const max = 2 * Math.PI - min;
  const u = min + s * (max - min);

  const d = 2 * Math.cos(angle) - Math.cos(u) * Math.sin(angle);
  const x = 8 * Math.cos(u) * Math.cos(angle) + 16 * Math.sin(angle);
  const y = 8 * Math.sin(u);

  return new THREE.Vector3(x / d, 0, y / d);
}

function getPlaneGeo() {
  const geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(bounds[0][1], 0, bounds[1][1]));
  geometry.vertices.push(new THREE.Vector3(bounds[0][1], 0, bounds[1][0]));
  geometry.vertices.push(new THREE.Vector3(bounds[0][0], 0, bounds[1][0]));
  geometry.vertices.push(new THREE.Vector3(bounds[0][0], 0, bounds[1][1]));
  geometry.faces.push(new THREE.Face3(0, 1, 2));
  geometry.faces.push(new THREE.Face3(2, 3, 0));
  return geometry;
}

function getTubeGeo(angle=0) {
  const points = tabulate((i) => getPointAt(i/120, angle), 121);
  const curve = new THREE.CatmullRomCurve3(points, false);
  return new THREE.TubeGeometry(curve, 120, 0.3, 8, false);
}


// -----------------------------------------------------------------------------
// Component

export class ConicSection extends CustomElement {

  ready() {
    this.$canvas = $N('canvas', {width, height}, this);
    this.$canvas.css('max-width', '100%');
    loadTHREE().then(() => setTimeout(() => this.setUp(), 100));
  }

  setUp() {
    const scene = new THREE.Scene();

    // Set up Camera
    const camera = new THREE.PerspectiveCamera(25, width/height, 0.1, 1000);
    camera.position.set(centerX, 32, 66);
    camera.lookAt(centerX, 0, 0);
    scene.add(camera);

    // Ambient Lights
    const ambientLight = new THREE.AmbientLight(0x888888);
    scene.add(ambientLight);

    // Point Light
    const pointLight = new THREE.PointLight(0xaaaaaa);
    pointLight.position.set(centerX, 20, 65);
    scene.add(pointLight);

    // Masking Planes
    const bottom = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const right = new THREE.Plane(new THREE.Vector3(-1, 0, 0), bounds[0][1]);

    // Cone
    const coneGeo = new THREE.ConeGeometry(100, coneHeight, 150, 1, true);
    const coneMaterial = new THREE.MeshPhongMaterial({
      color: 0xff941f, transparent: true, opacity: 0.7, shininess: 40,
      side: THREE.DoubleSide, clippingPlanes: [bottom, right]
    });
    const cone = new THREE.Mesh(coneGeo, coneMaterial);
    cone.position.y = coneTop - coneHeight/2;
    scene.add(cone);

    // Bottom Plane (set in background)
    const planeMaterial = new THREE.MeshPhongMaterial({
      color: 0xdddddd, emissive: 0xdddddd, emissiveIntensity: 0.2,
      flatShading: true
    });
    const plane = new THREE.Mesh(getPlaneGeo(), planeMaterial);
    scene.add(plane);

    // Conic Section Tube
    const tubeMaterial = new THREE.MeshLambertMaterial({color: 0xb30469, clippingPlanes: [right]});
    const tube = new THREE.Mesh(getTubeGeo(), tubeMaterial);
    scene.add(tube);

    // Torch Cylinder
    const torchGeo = new THREE.CylinderGeometry(1.2, 1.2, 3.5, 32);
    const torchMaterial = new THREE.MeshPhongMaterial({color: 0x363648});
    const torch = new THREE.Mesh(torchGeo, torchMaterial);
    torch.position.y = coneTop;
    scene.add(torch);

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.localClippingEnabled = true;
    renderer.setClearColor(0xffffff, 1);
    renderer.setSize(width, height);
    renderer.render(scene, camera);

    // Context
    const context = this.$canvas.getContext();
    context.drawImage(renderer.domElement, 0, 0);

    // Update Function
    this.angle = 0;
    this.update = (a) => {
      this.angle = a;
      tube.geometry = getTubeGeo(a);
      torch.rotation.z = a;
      cone.rotation.z = a;
      cone.position.x = coneHeight * Math.sin(a) / 2;
      cone.position.y = coneTop - coneHeight * Math.cos(a) / 2;
      renderer.render(scene, camera);
      context.clearRect(0, 0, width, height);
      context.drawImage(renderer.domElement, 0, 0);
      this.trigger('rotate', a);
    };

    // Sliding Animation
    slide(this.$canvas, {
      move: (posn, start, last) => {
        const a = clamp(this.angle + (posn.x - last.x) / 800, 0, 1.25);
        this.update(a);
      }
    });
  }
}

registerElement('x-conic-section', ConicSection);
