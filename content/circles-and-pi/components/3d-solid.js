// =============================================================================
// Polyhedron Component
// (c) Mathigon
// =============================================================================



/* global THREE */
import { drawShape, loadTHREE } from '../../shared/components/webgl';
import { $N, CustomElement, registerElement } from '@mathigon/boost';


const shapes = {
  sphere() {
    const geo = new THREE.SphereGeometry(1.2, 128, 128);
    const material = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      color: 0xff941f,
      transparent: true,
      opacity: 0.9,
      specular: new THREE.Color(0x222222),
      flatShading: true
    });
    return new THREE.Mesh(geo, material);
  },
  cone() {
    const geo = new THREE.ConeGeometry(1.2, 2.4, 128, 1);
    const material = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      color: 0x1f7aff,
      transparent: true,
      opacity: 0.9,
      specular: new THREE.Color(0x222222),
      flatShading: true
    });
    return new THREE.Mesh(geo, material);
  },
  cylinder() {
    const geo = new THREE.CylinderGeometry(1, 1, 2, 128, 1);
    const material = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      color: 0xb30469,
      transparent: true,
      opacity: 0.9,
      specular: new THREE.Color(0x222222),
      flatShading: true
    });
    return new THREE.Mesh(geo, material);
  }
};

export class Solid extends CustomElement {

  ready() {
    this.size = +this.attr('size');
    this.css({width: this.size + 'px', height: this.size + 'px'});

    loadTHREE().then(() => this.setUp());
  }

  setUp() {
    const id = this.attr('shape');
    const size2 = 2 * this.size;
    const $canvas = $N('canvas', {width: size2, height: size2}, this);

    setTimeout(() => {
      const shape = shapes[id]();
      const {camera} = drawShape($canvas, shape, this.size, id !== 'sphere');
      camera.position.y = 6;
    }, 100);
  }
}

registerElement('x-3d-solid', Solid);
