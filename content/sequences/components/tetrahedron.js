// =============================================================================
// Tetrahedron Component
// (c) Mathigon
// =============================================================================



/* global THREE */
import { faceMaterial, drawShape, colour, loadTHREE } from '../../shared/components/webgl';
import { $N, CustomElement, registerElement } from '@mathigon/boost';
import { trianglePoints, triangleOffset } from './polygons'


const COLOURS = [0xff941f, 0xec7031, 0xd94c44, 0xc62857, 0xb30469];

function getTetrahedron(layers) {
  const tetrahedron = new THREE.Object3D();
  const geometry = new THREE.SphereGeometry(0.5, 128, 128);

  for (let i=0; i <= layers; ++i) {
    const points = trianglePoints(i);
    const dz = triangleOffset(i, layers);

    const material = faceMaterial().clone();
    material.color = colour(COLOURS[i]);

    for (let p of points) {
      const sphere = new THREE.Mesh(geometry, material);
      sphere.translateX(p.x).translateY(p.y).translateZ(-dz);
      tetrahedron.add(sphere);
    }
  }

  return tetrahedron;
}

// -----------------------------------------------------------------------------

export class Tetrahedron extends CustomElement {

  ready() {
    this.size = +this.attr('size');
    this.css({width: this.size + 'px', height: this.size + 'px'});

    loadTHREE().then(() => this.setUp());
  }

  setUp() {
    const size2 = 2 * this.size;
    const $canvas = $N('canvas', {width: size2, height: size2}, this);
    const layers = +this.attr('layers');

    setTimeout(() => {
      const spheres = getTetrahedron(layers -  1);
      drawShape($canvas, spheres, this.size, layers > 1);
    }, 100);
  }
}

registerElement('x-tetrahedron', Tetrahedron);
