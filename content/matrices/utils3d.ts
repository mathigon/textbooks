import {Solid} from '../shared/components/solid';
import {Vector3} from 'three';


export function planeFromNormal(normal: THREE.Vector3, centroid: THREE.Vector3, color: number): THREE.Mesh {
  // from here:
  // https://stackoverflow.com/questions/40366339/three-js-planegeometry-from-math-plane

  // Create plane
  const plane = new THREE.Plane();
  plane.setFromNormalAndCoplanarPoint(normal, centroid).normalize();

  // Create a basic rectangle geometry
  const planeGeometry = new THREE.PlaneGeometry(4, 4);

  // Align the geometry to the plane
  const coplanarPoint = plane.coplanarPoint(centroid);
  const focalPoint = new THREE.Vector3().copy(coplanarPoint).add(plane.normal);
  planeGeometry.lookAt(focalPoint);
  planeGeometry.translate(coplanarPoint.x, coplanarPoint.y, coplanarPoint.z);

  // Create mesh with the geometry
  const planeMaterial = new THREE.MeshLambertMaterial({
    color,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.2});
  const dispPlane = new THREE.Mesh(planeGeometry, planeMaterial);
  return dispPlane;
}

/**
   * Draw unit vectors onto a solid.
   * @param solid
   * @param x number of stacked unit vectors in x-direction
   * @param y number of stacked unit vectors in y-direction
   * @param z number of stacked unit vectors in z-direction
   */
export function addUnitVectorsToSolid(solid: Solid, x=1, y=1, z=1) {
  // X
  [...Array(x).keys()].forEach(i => solid.addArrow([i, 0, 0], [i+1, 0, 0], 0x22ab24));

  // Y -- add Y-unit vectors from 0 to 1
  [...Array(y).keys()].forEach(i => solid.addArrow([0, i, 0], [0, i+1, 0], 0x0f82f2));

  // Z -- add Z-unit vectors from 0 to 1
  [...Array(z).keys()].forEach(i => solid.addArrow([0, 0, i], [0, 0, i+1], 0xcd0e66));
}

export function planeFromCoplanarPoints(a: Vector3, b: Vector3, c: Vector3, color: number) {
  const plane = new THREE.Plane();
  plane.setFromCoplanarPoints(a, b, c);

  const planeGeometry = new THREE.PlaneGeometry(4, 4);
  const planeMaterial = new THREE.MeshLambertMaterial({
    color,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.2
  });

  planeGeometry.setFromPoints([a, b, c]);
  // planeGeometry.

  const dispPlane = new THREE.Mesh(planeGeometry, planeMaterial);
  return dispPlane;
}

/**
 * Generate plane at z=k
 * x=anything, y=anything, z=k
 * @param z
 */
export function generateZPlane(z: number) {
  const material = Solid.translucentMaterial(0x5A49C9, 0.2);
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4, 10, 10), material);

  // default state, x=R, y=R, z=k
  plane.position.z = z;
  return plane;
}

export function rotatedXPlane(rX: number) {
  const material = Solid.translucentMaterial(0x5A49C9, 0.2);
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4, 10, 10), material);

  // rX = 0;    --> z=0
  // rX = PI/8; --> z=1,y=1
  // rX = PI/4; --> y=0
  plane.rotation.x = rX;

  plane.position.y = 1;

  // z = R * cos(rX);
  // y = R * sin(rX);

  // we want to find these three points:
  // - where does it cross x=0 plane?
  // - where does it cross y=0 plane?
  // - where does it cross z=0 plane?
  return plane;
}


/// EXAMPLE 1
///
/// rotation.x = PI/2
/// position.y = 1
///
/// crosses plane x=0 at line y=1, x=0,
/// is parallel to plane y=0
/// crosses plane z=0 at line y=1, z=0
///
/// SOLUTION: 0*x + 1*y + 0*z = 1
/// y = 1

/// EXAMPLE 2
///
/// rotation.x = PI/4
/// position.y = 1
///
/// crosses plane x=0 at y=z+1
/// crosses plane y=0 at line z=-1
/// crosses plane z=0 at line y=1,x=0
///
/// SOLUTION: 0*x + 1*y + -1*z = 1
/// y-z = 1


/// EXAMPLE 3
///
/// rotation.x = 3*PI/4
/// position.y = 1
///
/// crosses plane x=0 at y+z=1
/// crosses plane y=0 at line z=1
/// crosses plane z=0 at line y=1
///
/// SOLUTION: 0*x + 1*y + 1*z = 1
/// y+z = 1

/**
 * Generate plane at x=k
 * x=k, y=anything, z=anything
 * @param x
 */
export function generateXPlane(x: number) {
  const material = Solid.translucentMaterial(0x5A49C9, 0.2);
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4, 10, 10), material);
  plane.rotateZ(Math.PI/2);
  plane.position.x = x;
  return plane;
}

/**
 * Generate plane at y=k
 * x=anything, y=k, z=anything
 * @param y
 */
export function generateYPlane(y: number) {
  const material = Solid.translucentMaterial(0x5A49C9, 0.2);
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4, 10, 10), material);
  plane.rotateX(Math.PI/2);
  plane.position.y = y;
  return plane;
}

/**
 * Generate plane at a*x + b*y = k, z=R
 * [0, b/k, R]
 * [a/k, 0, R]
 * angle = atan2
 */
export function generateXYPlane(a: number, b: number, k: number) {
  const material = Solid.translucentMaterial(0x5A49C9, 0.2);
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4, 10, 10), material);
  plane.rotateX(Math.PI/2);
  const angle = Math.atan2(1/b, 1/a);
  console.log(angle);
  plane.rotateY(-angle); // <--- magic number
  if (a !== 0) plane.position.x = (k/a)/2; // <--- freakin' magic number
  console.log(plane.position.x);
  if (b !== 0) plane.position.y = (k/b)/2; // <---
  console.log(plane.position.y);

  return plane;
}

/**
 * Generate plane at x+z=k, y=anything
 * [0]
 */
export function generateXZPlane(k: number) {
  const material = Solid.translucentMaterial(0x5A49C9, 0.2);
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4, 10, 10), material);
  // plane.rotateX(Math.PI/2);
  // plane.rotateX(-Math.PI/4);
  // plane.position.x = k/2;
  // plane.position.z = k/2;

  return plane;
}
