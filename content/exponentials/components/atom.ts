// =============================================================================
// Atom Component
// (c) Mathigon
// =============================================================================


import {Random} from '@mathigon/fermat';
import {register} from '@mathigon/boost';
import {Solid} from '../../shared/components/webgl/solid';


const RED = 0xcd0e66;
const BLUE = 0x0f82f2;
type Point3D = [number, number, number];

function distribute(number: number, radius = 1) {
  if (number === 1) return [[0, 0, 0]];

  const points = [];
  const offset = 2 / number;
  const increment = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < number; ++i) {
    const y = ((i * offset) - 1) + (offset / 2);
    const r = Math.sqrt(1 - y * y) * radius;
    const phi = ((i) % number) * increment;
    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    points.push([x, y, z]);
  }

  return points;
}

function addSpheres(points: Point3D[], color: number, atom: THREE.Object3D) {
  const material = new THREE.MeshPhongMaterial({specular: 0x222222, color});
  const geometry = new THREE.SphereGeometry(0.7, 64, 64);

  for (const p of points) {
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(...p);
    atom.add(sphere);
  }
}


@register('x-atom')
export class Atom extends Solid {
  created() {
    this.addMesh(() => {
      const atom = new THREE.Object3D();

      const protons = +this.attr('protons');
      const neutrons = +this.attr('neutrons');
      const points = Random.shuffle(distribute(protons + neutrons)) as [number, number, number][];

      const color = parseInt(this.attr('color'), 16);
      addSpheres(points.slice(0, protons), color || BLUE, atom);
      addSpheres(points.slice(protons), color || RED, atom);

      return [atom];
    });
  }
}
