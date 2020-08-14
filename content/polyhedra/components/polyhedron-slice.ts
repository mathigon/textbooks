// =============================================================================
// Polyhedron Component
// (c) Mathigon
// =============================================================================


import {last} from '@mathigon/core';
import {CustomElementView, register, slide} from '@mathigon/boost';
import {clamp, Point} from '@mathigon/fermat';
import {create3D} from '../../shared/components/webgl';
import {Material} from 'three';


function getGeometry(name: string) {
  if (name === 'tetrahedron') return new THREE.TetrahedronGeometry(1, 0);
  if (name === 'octahedron') return new THREE.OctahedronGeometry(1, 0);
  if (name === 'dodecahedron') return new THREE.DodecahedronGeometry(1, 0);
  if (name === 'icosahedron') return new THREE.IcosahedronGeometry(1, 0);
  return new THREE.BoxGeometry(1, 1, 1);
}

@register('x-polyhedron-slice', {attributes: ['shape', 'opacity']})
export class PolyhedronSlice extends CustomElementView {

  async ready() {
    // Create a <canvas> element and THREE.js renderer.
    const scene = await create3D(this, 40, 1520, 800);
    scene.camera.position.set(0, 1, 4);
    scene.camera.up = new THREE.Vector3(0, 1, 0);
    scene.camera.lookAt(new THREE.Vector3(0, 0, 0));

    const sceneObj = new THREE.Object3D();

    // Create Lights
    scene.add(new THREE.AmbientLight(0x666666));
    const light = new THREE.PointLight(0xbbbbbb);
    light.position.set(3, 4.5, 6);
    scene.add(light);

    // Create polyhedron object
    const geometry = getGeometry(this.attr('shape') || 'cube');
    const material = new THREE.MeshPhongMaterial({opacity: Number(this.attr('opacity')) || 0.8, color: 0xcd0e66,
      transparent: true, specular: 0x222222});
    const polyhedron = new THREE.Mesh(geometry, material);
    polyhedron.renderOrder = 5;
    sceneObj.add(polyhedron);

    // Listen to the 'shape' attribute and update the graphics.
    this.on('attr:shape', e => {
      polyhedron.geometry = getGeometry(e.newVal);
      updateIntersection();
      scene.draw();
    });

    // Listen to the 'opacity' attribute and update the graphics.
    this.on('attr:opacity', e => {
      (polyhedron.material as Material).opacity = 0.4 + e.newVal / 25.0;
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
    plane.renderOrder = 7;
    sceneObj.add(plane);

    // -------------------------------------------------------------------------

    // Outline of the intersection
    const tubeMaterial = new THREE.MeshBasicMaterial({color: 0xfd8c00});
    const tube = new THREE.Mesh(undefined, tubeMaterial);
    tube.renderOrder = 10;
    scene.add(tube);
    scene.add(sceneObj);

    const mathPlane = new THREE.Plane();
    const centre = new THREE.Vector3();

    // need to settle on an approach - my current implementation of "merge" seems quite laggy
    const useMerge = false;
    function updateIntersection() {
      if (useMerge) {
        updateIntersectionMerge();
      } else {
        updateIntersectionCurve();
      }
    }

    function updateIntersectionMerge() {
      const planeGeo = (plane.geometry as THREE.Geometry);
      const polyGeo = (polyhedron.geometry as THREE.Geometry);
      // a geometry for the intersection segments
      const mergedGeometry = new THREE.Geometry();

      mathPlane.setFromCoplanarPoints(planeGeo.vertices[planeGeo.faces[0].a],
          planeGeo.vertices[planeGeo.faces[0].b],
          planeGeo.vertices[planeGeo.faces[0].c]);
      plane.localToWorld(mathPlane as any);

      const tolerance = 0.00001;
      for (const face of polyGeo.faces) {
        const a = polyhedron.localToWorld(polyGeo.vertices[face.a].clone());
        const b = polyhedron.localToWorld(polyGeo.vertices[face.b].clone());
        const c = polyhedron.localToWorld(polyGeo.vertices[face.c].clone());

        const thisvertices: THREE.Vector3[] = [];
        for (const l of [[a, b], [b, c], [c, a]]) {
          const line = new THREE.Line3(l[0], l[1]);
          const intersection = mathPlane.intersectLine(line, centre);
          if (intersection) {
            const pt:THREE.Vector3 = intersection.clone();
            const closest = Math.min(...thisvertices.map(p => pt.distanceTo(p)));
            // I'm occasionally getting three points returned by THREE but
            // two of them only differ by round off
            if (closest > tolerance) {
              thisvertices.push(pt);
            }
          }
        }
        if (thisvertices.length == 2) {
          const line = new THREE.LineCurve3(thisvertices[0], thisvertices[1]);
          const geometry = new THREE.TubeGeometry(line, 1, 0.02, undefined, false);
          mergedGeometry.merge(geometry);
          const sphere1 = new THREE.SphereGeometry(0.02, 32, 32);
          sphere1.translate(thisvertices[0].x, thisvertices[0].y, thisvertices[0].z);
          mergedGeometry.merge(sphere1);
          const sphere2 = new THREE.SphereGeometry(0.02, 32, 32);
          sphere2.translate(thisvertices[1].x, thisvertices[1].y, thisvertices[1].z);
          mergedGeometry.merge(sphere2);
        }
      }
      tube.geometry = mergedGeometry;
    }

    function updateIntersectionCurve() {
      const segments: THREE.Vector3[][] = [];
      const planeGeo = (plane.geometry as THREE.Geometry);
      const polyGeo = (polyhedron.geometry as THREE.Geometry);

      mathPlane.setFromCoplanarPoints(planeGeo.vertices[planeGeo.faces[0].a],
          planeGeo.vertices[planeGeo.faces[0].b],
          planeGeo.vertices[planeGeo.faces[0].c]);
      plane.localToWorld(mathPlane as any);

      const tolerance = 0.00001;
      for (const face of polyGeo.faces) {
        const a = polyhedron.localToWorld(polyGeo.vertices[face.a].clone());
        const b = polyhedron.localToWorld(polyGeo.vertices[face.b].clone());
        const c = polyhedron.localToWorld(polyGeo.vertices[face.c].clone());

        const thisvertices: THREE.Vector3[] = [];
        for (const l of [[a, b], [b, c], [c, a]]) {
          const line = new THREE.Line3(l[0], l[1]);
          const intersection = mathPlane.intersectLine(line, centre);
          if (intersection) {
            const pt:THREE.Vector3 = intersection.clone();
            const closest = Math.min(...thisvertices.map(p => pt.distanceTo(p)));
            // I'm occasionally getting three points returned by THREE but
            // two of them only differ by round off
            if (closest > tolerance) {
              thisvertices.push(pt);
            }
          }
        }
        if (thisvertices.length == 2) {
          segments.push(thisvertices);
        }
      }

      // find the line segment that connects to the current point
      function findNextSegment(current:THREE.Vector3, segments:THREE.Vector3[][]) {
        for (let i = 0; i < segments.length; ++i) {
          const s:THREE.Vector3[] = segments[i];
          if (s[0].distanceTo(current) < tolerance) {
            return {index: i, seg: s};
          } else if (s[1].distanceTo(current) < tolerance) {
            return {index: i, seg: s.reverse()};
          }
        }
        return undefined;
      }

      const alllinked: THREE.Vector3[] = [];
      let current = segments.shift();
      let sanity = 0;
      if (current) {
        alllinked.push(...current);
        while (segments.length) {
          if (++sanity > 30) {
            break;
          }
          const next = findNextSegment(current[1], segments);
          if (!next) {
            break;
          }
          alllinked.push(next.seg[1]);  // the first point is already there
          // alllinked.push(...next.seg);
          segments.splice(next.index, 1);
          current = next.seg;
        }

        const curve = new THREE.CurvePath<THREE.Vector3>();
        for (let i = 0; i < alllinked.length - 2; ++i) {
          curve.add(new THREE.LineCurve3(alllinked[i], alllinked[i + 1]));
        }
        curve.add(new THREE.LineCurve3(last(alllinked), alllinked[0]));
        tube.geometry = new THREE.TubeGeometry(curve, 200, 0.02, 8, true);
      }
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
