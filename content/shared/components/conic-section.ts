// =============================================================================
// Conic Sections Component
// (c) Mathigon
// =============================================================================


import {tabulate} from '@mathigon/core';
import {clamp} from '@mathigon/fermat';
import {CustomElementView, register, slide} from '@mathigon/boost';
import {create3D} from './webgl';


// -----------------------------------------------------------------------------
// Constants

const width = 760 * 2;
const height = 300 * 2;
const coneHeight = 200;
const coneTop = 8;
const bounds = [[-6, 50], [-25, 25]];
const centerX = (bounds[0][0] + bounds[0][1]) / 2;


// -----------------------------------------------------------------------------
// Utilities

function getPointAt(s: number, angle: number) {
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

function getTubeGeo(angle = 0) {
  const points = tabulate((i) => getPointAt(i / 120, angle), 121);
  const curve = new THREE.CatmullRomCurve3(points, false);
  return new THREE.TubeGeometry(curve, 120, 0.3, 8, false);
}


// -----------------------------------------------------------------------------
// Component

@register('x-conic-section')
export class ConicSection extends CustomElementView {
  update!: (a: number) => void;

  async ready() {
    const scene = await create3D(this, 25, width, height);
    scene.camera.position.set(centerX, 32, 66);
    scene.camera.lookAt(centerX, 0, 0);

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
      color: 0xfd8c00, transparent: true, opacity: 0.7, shininess: 40,
      side: THREE.DoubleSide, clippingPlanes: [bottom, right]
    });
    const cone = new THREE.Mesh(coneGeo, coneMaterial);
    cone.position.y = coneTop - coneHeight / 2;
    scene.add(cone);

    // Bottom Plane (set in background)
    const planeMaterial = new THREE.MeshPhongMaterial({
      color: 0xdddddd, emissive: 0xdddddd, emissiveIntensity: 0.2,
      flatShading: true
    });
    const plane = new THREE.Mesh(getPlaneGeo(), planeMaterial);
    scene.add(plane);

    // Conic Section Tube
    const tubeMaterial = new THREE.MeshLambertMaterial(
        {color: 0xcd0e66, clippingPlanes: [right]});
    const tube = new THREE.Mesh(getTubeGeo(), tubeMaterial);
    scene.add(tube);

    // Torch Cylinder
    const torchGeo = new THREE.CylinderGeometry(1.2, 1.2, 3.5, 32);
    const torchMaterial = new THREE.MeshPhongMaterial({color: 0x363648});
    const torch = new THREE.Mesh(torchGeo, torchMaterial);
    torch.position.y = coneTop;
    scene.add(torch);

    // Update Function
    let angle = 0;
    this.update = (a: number) => {
      angle = a;
      tube.geometry = getTubeGeo(a);
      torch.rotation.z = a;
      cone.rotation.z = a;
      cone.position.x = coneHeight * Math.sin(a) / 2;
      cone.position.y = coneTop - coneHeight * Math.cos(a) / 2;
      scene.draw();
      this.trigger('rotate', a);
    };

    // Sliding Animation
    slide(scene.$canvas, {
      move: (posn, start, last) => {
        const a = clamp(angle + (posn.x - last.x) / 800, 0, 1.25);
        this.update(a);
      }
    });

    scene.draw();
  }
}
