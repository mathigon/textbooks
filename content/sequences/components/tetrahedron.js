// =============================================================================
// Tetrahedron Component
// (c) Mathigon
// =============================================================================



/* global THREE */
import { faceMaterial, drawShape, loadTHREE } from '../../shared/components/webgl';
import { $N, CustomElement, registerElement } from '@mathigon/boost';


function getTetrahedron(index) {
  const tetrahedron = new THREE.Object3D();
  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const material = new THREE.MeshNormalMaterial();  // faceMaterial()
  const sphere = new THREE.Mesh(geometry, material);
  tetrahedron.add(sphere);
  return tetrahedron;
}

// -----------------------------------------------------------------------------

export class Tetrahedron extends CustomElement {

  ready() {
    loadTHREE().then(() => this.setUp());
  }

  setUp() {
    const size = +this.attr('size');
    this.css({width: size + 'px', height: size + 'px'});

    const $canvas = $N('canvas', {width: 2*size, height: 2*size}, this);

    setTimeout(() => {
      const shpheres = getTetrahedron(+this.attr('layers'));
      const {camera} = drawShape($canvas, shpheres, size, true);
      camera.position.z = 30;
    }, 100);
  }
}

registerElement('x-tetrahedron', Tetrahedron);
