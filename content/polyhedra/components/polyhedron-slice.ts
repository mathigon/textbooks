// =============================================================================
// Polyhedron Component
// (c) Mathigon
// =============================================================================


import {CustomElementView, register, slide} from '@mathigon/boost';
import {clamp} from '@mathigon/fermat';
import {Point} from '@mathigon/euclid';
import {create3D} from '../../shared/components/webgl/webgl';


function getGeometry(name: string) {
  if (name === 'tetrahedron') return (new THREE.TetrahedronGeometry(1, 0)).scale(1.2, 1.2, 1.2);
  if (name === 'octahedron') return new THREE.OctahedronGeometry(1, 0);
  if (name === 'dodecahedron') return new THREE.DodecahedronGeometry(1, 0);
  if (name === 'icosahedron') return new THREE.IcosahedronGeometry(1, 0);
  return new THREE.BoxGeometry(1.2, 1.2, 1.2);
}

@register('x-polyhedron-slice')
export class PolyhedronSlice extends CustomElementView {

  async ready() {
    // Create a <canvas> element and THREE.js renderer.
    const scene = await create3D(this, 40, 1520, 960);
    scene.camera.position.set(0, 4, 2);
    scene.camera.up = new THREE.Vector3(0, 1, 0);
    scene.camera.lookAt(new THREE.Vector3(0, 0, 0));

    const sceneObj = new THREE.Object3D();
    scene.add(sceneObj);

    // Create Lights
    scene.add(new THREE.AmbientLight(0x666666));
    const light = new THREE.PointLight(0xbbbbbb);
    light.position.set(3, 4.5, 6);
    scene.add(light);

    // Create polyhedron object
    const opacity = (+this.attr('opacity')) || 0.8;
    const geometry = getGeometry(this.attr('shape') || 'cube');
    const material = new THREE.MeshPhongMaterial({opacity, color: 0xcd0e66,
      transparent: true, specular: 0x222222});
    const polyhedron = new THREE.Mesh(geometry, material);
    polyhedron.renderOrder = 5;
    sceneObj.add(polyhedron);

    // Listen to the 'shape' attribute and update the graphics.
    this.onAttr('shape', (shape, initial) => {
      polyhedron.geometry = getGeometry(shape);
      if (!initial) updateIntersection();
      if (!initial) scene.draw();
    });

    // Listen to the 'opacity' attribute and update the graphics.
    this.onAttr('opacity', (opacity, initial) => {
      (polyhedron.material as THREE.Material).opacity = 0.4 + (+opacity) / 25;
      if (!initial) scene.draw();
    });

    // The intersecting plane
    const planeGeom = new THREE.PlaneGeometry(2.5, 2.5);
    const planeMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide,
      opacity: 0.8, color: 0xaaaaaa, transparent: true, specular: 0x111111});
    const plane = new THREE.Mesh(planeGeom, planeMaterial);
    plane.position.y = 0;
    plane.rotation.x = Math.PI / 2;
    plane.renderOrder = 7;
    sceneObj.add(plane);

    // -------------------------------------------------------------------------

    // Outline of the intersection
    const tubeMaterial = new THREE.MeshBasicMaterial({color: 0xfd8c00});
    const tube = new THREE.Mesh(undefined, tubeMaterial);
    tube.renderOrder = 10;
    scene.add(tube);

    const mathPlane = new THREE.Plane();
    const tolerance = 0.00001;

    function updateIntersection() {
      const planeGeo = (plane.geometry as THREE.Geometry);
      const polyGeo = (polyhedron.geometry as THREE.Geometry);
      const mergedGeometry = new THREE.Geometry();

      mathPlane.setFromCoplanarPoints(planeGeo.vertices[0],
          planeGeo.vertices[1], planeGeo.vertices[2]);
      plane.localToWorld(mathPlane as any);

      for (const face of polyGeo.faces) {
        const a = polyhedron.localToWorld(polyGeo.vertices[face.a].clone());
        const b = polyhedron.localToWorld(polyGeo.vertices[face.b].clone());
        const c = polyhedron.localToWorld(polyGeo.vertices[face.c].clone());

        // Start and end of the intersection segment for this face.
        const vertices: THREE.Vector3[] = [];

        for (const l of [[a, b], [b, c], [c, a]]) {
          const line = new THREE.Line3(l[0], l[1]);
          const intersection = new THREE.Vector3();
          const didIntersect = mathPlane.intersectLine(line, intersection);
          if (didIntersect) {
            // THREE sometimes returns multiple nearly-identical intersections.
            const tooClose = vertices.some(p => intersection.distanceTo(p) < tolerance);
            if (!tooClose) vertices.push(intersection);
          }
        }
        if (vertices.length !== 2) continue;

        // Merge the intersection line into the tube geometry.
        const line = new THREE.LineCurve3(vertices[0], vertices[1]);
        const geometry = new THREE.TubeGeometry(line, 1, 0.02, 6);
        mergedGeometry.merge(geometry);

        // Add spheres at the end of every line, for rounded corners.
        // TODO Maybe this can be cleaned up (only one sphere per line?)
        const sphere1 = new THREE.SphereGeometry(0.02, 6, 6);
        sphere1.translate(vertices[0].x, vertices[0].y, vertices[0].z);
        mergedGeometry.merge(sphere1);
        const sphere2 = new THREE.SphereGeometry(0.02, 6, 6);
        sphere2.translate(vertices[1].x, vertices[1].y, vertices[1].z);
        mergedGeometry.merge(sphere2);
      }

      tube.geometry = mergedGeometry;
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
        } else {
          const d = posn.subtract(last).scale(Math.PI / 180 / 2);
          const euler = new THREE.Euler(d.y, d.x, 0, 'XYZ');
          const q = new THREE.Quaternion().setFromEuler(euler);
          if (target === 'shape') {
            // TODO This doesn't work if sceneObj.quaternion has changed.
            polyhedron.quaternion.multiplyQuaternions(q, polyhedron.quaternion);
          } else {
            sceneObj.quaternion.multiplyQuaternions(q, sceneObj.quaternion);
          }
        }

        updateIntersection();
        scene.draw();
      }
    });

    // FIXME the orientation is wrong for the initial intersection unless we draw first
    scene.draw();
    updateIntersection();
    scene.draw();
  }
}
