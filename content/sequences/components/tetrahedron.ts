// =============================================================================
// Tetrahedron Component
// (c) Mathigon
// =============================================================================


import {register} from '@mathigon/boost';
import {Solid} from '../../shared/components/webgl/solid';
import {triangleOffset, trianglePoints} from './polygons';


const COLOURS = [0xff941f, 0xec7031, 0xd94c44, 0xc62857, 0xb30469];  // TODO New Colours

@register('x-tetrahedron')
export class Tetrahedron extends Solid {

  created() {
    const layers = +this.attr('layers');
    if (layers > 1) this.setAttr('rotate', '1');

    this.addMesh(() => {
      const tetrahedron = new THREE.Object3D();
      const geometry = new THREE.SphereGeometry(0.34, 64, 64);

      for (let i = 0; i < layers; ++i) {
        const points = trianglePoints(i);
        const dy = triangleOffset(i, layers) + 0.5;

        const material = new THREE.MeshPhongMaterial({
          transparent: true,
          opacity: 0.9,
          specular: 0x222222,
          color: COLOURS[i]
        });

        for (const p of points) {
          const sphere = new THREE.Mesh(geometry, material);
          sphere.position.set(p.x * 0.65, -dy * 0.65, p.y * 0.65);
          tetrahedron.add(sphere);
        }
      }

      return [tetrahedron];
    });
  }
}
