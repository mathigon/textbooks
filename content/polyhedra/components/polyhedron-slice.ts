// =============================================================================
// Polyhedron Component
// (c) Mathigon
// =============================================================================


import {last} from '@mathigon/core';
import {register, CustomElementView, slide} from '@mathigon/boost';
import {clamp, Point} from '@mathigon/fermat';
import {create3D} from '../../shared/components/webgl';


function getGeometry(name: string) {
  if (name === 'tetrahedron') return new THREE.TetrahedronGeometry(1, 0);
  if (name === 'octahedron') return new THREE.OctahedronGeometry(1, 0);
  if (name === 'dodecahedron') return new THREE.DodecahedronGeometry(1, 0);
  if (name === 'icosahedron') return new THREE.IcosahedronGeometry(1, 0);
  return new THREE.BoxGeometry(1, 1, 1);
}


@register('x-polyhedron-slice', {attributes: ['shape']})
export class PolyhedronSlice extends CustomElementView {

  async ready() {
    // Create a <canvas> element and THREE.js renderer.
    const scene = await create3D(this, 40, 1520, 800);
    scene.camera.position.set(0, 1, 4);
    scene.camera.up = new THREE.Vector3(0, 1, 0);
    scene.camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Create Lights
    scene.add(new THREE.AmbientLight(0x666666));
    const light = new THREE.PointLight(0xbbbbbb);
    light.position.set(3, 4.5, 6);
    scene.add(light);

    // Create polyhedron object
    const geometry = getGeometry(this.attr('shape') || 'cube');
    const material = new THREE.MeshPhongMaterial({opacity: 0.8, color: 0xcd0e66,
      transparent: true, specular: 0x222222});
    const polyhedron = new THREE.Mesh(geometry, material);
    scene.add(polyhedron);

    // Listen to the 'shape' attribute and update the graphics.
    this.on('attr:shape', e => {
      polyhedron.geometry = getGeometry(e.newVal);
      scene.draw();
    });

    // The intersecting plane
    const planeGeom = new THREE.PlaneGeometry(3, 3);
    planeGeom.rotateX(Math.PI / 4);
    const planeMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide,
      opacity: 0.8, color: 0xaaaaaa, transparent: true, specular: 0x111111});
    const plane = new THREE.Mesh(planeGeom, planeMaterial);
    plane.position.y = 0;
    plane.rotation.x = Math.PI / 2;
    scene.add(plane);

    // -------------------------------------------------------------------------

    // Outline of the intersection
    const tubeMaterial = new THREE.MeshBasicMaterial({color: 0xfd8c00});
    const tube = new THREE.Mesh(undefined, tubeMaterial);
    tube.renderOrder = 10;
    scene.add(tube);

    const mathPlane = new THREE.Plane();
    const centre = new THREE.Vector3();

    function updateIntersection() {
      /* const vertices: THREE.Vector3[] = [];
      const planeGeo = (plane.geometry as THREE.Geometry);
      const polyGeo = (polyhedron.geometry as THREE.Geometry);

      mathPlane.setFromCoplanarPoints(planeGeo.vertices[planeGeo.faces[0].a],
          planeGeo.vertices[planeGeo.faces[0].b],
          planeGeo.vertices[planeGeo.faces[0].c]);
      plane.localToWorld(mathPlane as any);

      for (const face of polyGeo.faces) {
        const a = polyhedron.localToWorld(polyGeo.vertices[face.a].clone());
        const b = polyhedron.localToWorld(polyGeo.vertices[face.b].clone());
        const c = polyhedron.localToWorld(polyGeo.vertices[face.c].clone());

        for (const l of [[a, b], [b, c], [c, a]]) {
          const line = new THREE.Line3(l[0], l[1]);
          const intersection = mathPlane.intersectLine(line, centre);
          if (intersection) vertices.push(intersection.clone());
        }
      }

      const curve = new THREE.CurvePath<THREE.Vector3>();
      for (let i = 0; i < vertices.length - 2; ++i) {
        curve.add(new THREE.LineCurve3(vertices[i], vertices[i + 1]));
      }
      curve.add(new THREE.LineCurve3(last(vertices), vertices[0]));
      tube.geometry = new THREE.TubeGeometry(curve, 200, 0.02, 8, true); */
    }

    // -------------------------------------------------------------------------

    // Raycaster to determine if the object, plane or background was clicked.
    const raycaster = new THREE.Raycaster();
    let target: 'plane'|'shape'|'scene' = 'plane';

    // Utility for calculating dragging matrix
    const dragPlane = new THREE.Plane();
    const worldPosition = new THREE.Vector3();
    const inverseMatrix = new THREE.Matrix4();
    const offset = new THREE.Vector3();
    const intersection = new THREE.Vector3();

    slide(scene.$canvas, {
      start: (posn: Point) => {
        const x = 2 * posn.x / scene.$canvas.canvasWidth - 1;
        const y = -2 * posn.y / scene.$canvas.canvasHeight + 1;
        raycaster.setFromCamera({x, y}, scene.camera);

        const intersects = raycaster.intersectObjects([polyhedron, plane]);
        target = !intersects.length ? 'scene' :
                 intersects[0].object === polyhedron ? 'shape' : 'plane';

        if (target === 'plane') {
          dragPlane.setFromNormalAndCoplanarPoint(scene.camera.getWorldDirection(dragPlane.normal),
              worldPosition.setFromMatrixPosition(plane.matrixWorld));
          raycaster.ray.intersectPlane(dragPlane, intersection);
          inverseMatrix.getInverse(plane.parent!.matrixWorld);
          offset.copy(intersection).sub(worldPosition.setFromMatrixPosition(plane.matrixWorld));
        }
      },

      move: (posn: Point, start: Point, last: Point) => {
        if (target === 'plane') {
          const x = 2 * posn.x / scene.$canvas.canvasWidth - 1;
          const y = -2 * posn.y / scene.$canvas.canvasHeight + 1;
          raycaster.setFromCamera({x, y}, scene.camera);
          raycaster.ray.intersectPlane(dragPlane, intersection);
          const newPosn = intersection.sub(offset).applyMatrix4(inverseMatrix);
          plane.position.y = clamp(newPosn.y, -1, 1);

        } else if (target === 'shape') {
          const d = posn.subtract(last).scale(Math.PI / 180 / 2);
          const euler = new THREE.Euler(d.y, d.x, 0, 'XYZ');
          const q = new THREE.Quaternion().setFromEuler(euler);
          polyhedron.quaternion.multiplyQuaternions(q, polyhedron.quaternion);

        } else if (target === 'scene') {
          // TODO Rotate entire scene. Maybe only allow rotation around x-axis?
        }

        updateIntersection();
        scene.draw();
      }
    });

    updateIntersection();
    scene.draw();
  }
}
