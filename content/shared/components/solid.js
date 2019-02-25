// =============================================================================
// Polyhedron Component
// (c) Mathigon
// =============================================================================



/* global THREE */
import {chunk} from '@mathigon/core';
import {$N, Browser, CustomElement, registerElement, slide} from '@mathigon/boost';
import {create3D} from '../../shared/components/webgl';

const STROKE_COLOR = 0x666666;


// -----------------------------------------------------------------------------
// Utilities

function rotate($solid, animate = true) {
  // TODO Damping after mouse movement
  // TODO Better mouse-to-point mapping

  // Only Chrome is fast enough to support auto-rotation.
  const autoRotate = animate && Browser.isChrome && !Browser.isMobile;

  let dragging = false;
  let visible = false;

  function frame() {
    if (visible && autoRotate) requestAnimationFrame(frame);
    $solid.scene.draw();
    if (!dragging) $solid.object.rotation.y += 0.012;
  }

  if (autoRotate) {
    $solid.scene.$canvas.on('enterViewport', () => { visible = true; frame(); });
    $solid.scene.$canvas.on('exitViewport', () => { visible = false; });
  } else {
    setTimeout(frame);
  }

  slide($solid.scene.$canvas, {
    start() { dragging = true; },
    move(posn, start, last) {
      const d = posn.subtract(last);
      const q = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(d.y * Math.PI / 180, 0, -d.x * Math.PI / 180, 'XYZ'));
      $solid.object.quaternion.multiplyQuaternions(q, $solid.object.quaternion);
      $solid.trigger('rotate', {quaternion: $solid.object.quaternion});
      if (!autoRotate) frame();
    },
    end() { dragging = false; }
  });
}

function createEdges(geometry, material, maxAngle) {
  const obj = new THREE.Object3D();
  if (!maxAngle) return obj;

  const edges = new THREE.EdgesGeometry(geometry, maxAngle);
  const edgeData = edges.attributes.position.array;
  const points = chunk(chunk(edgeData, 3).map(p => new THREE.Vector3(...p)), 2);

  for (const edge of points) {
    const curve = new THREE.LineCurve3(edge[0], edge[1]);
    const geometry = new THREE.TubeGeometry(curve, 1, 0.012, 4);
    obj.add(new THREE.Mesh(geometry, material));
  }

  return obj;
}



// -----------------------------------------------------------------------------
// Custom Element

export class Solid extends CustomElement {

  async ready() {
    const size = +this.attr('size');
    this.css({width: size + 'px', height: size + 'px'});

    this.scene = await create3D(this, 35, 2 * size);
    this.scene.camera.position.set(0, 3, 6);
    this.scene.camera.up = new THREE.Vector3(0, 1, 0);
    this.scene.camera.lookAt(new THREE.Vector3(0, 0, 0));

    const light1 = new THREE.AmbientLight(0x555555);
    this.scene.add(light1);

    const light2 = new THREE.PointLight(0xffffff);
    light2.position.set(3, 4.5, 6);
    this.scene.add(light2);

    this.object = new THREE.Object3D();
    this.scene.add(this.object);

    this.trigger('ready');
    this.isReady = true;
  }

  addMesh(fn) {
    if (this.isReady) {
      this.addMeshCallback(fn);
    } else {
      this.one('ready', () => this.addMeshCallback(fn));
    }
  }

  addMeshCallback(fn) {
    const items = fn(this.scene, THREE) || [];
    for (let i of items)  this.object.add(i);

    if (!this.hasAttr('static')) rotate(this, this.hasAttr('rotate'));
    this.scene.draw();
  }

  rotate(q) {
    this.object.quaternion.set(q.x, q.y, q.z, q.w);
    this.scene.draw();
  }


  // ---------------------------------------------------------------------------
  // Element Creation Utilities

  addLabel(text, posn, color = STROKE_COLOR) {
    const $label = $N('div', {text, class: 'label3d'});
    $label.css('color', '#' + color.toString(16));
    const posn1 = new THREE.Vector3(...posn);
    this.scene.$canvas.insertAfter($label);
    this.scene.onDraw(() => {
      const p = posn1.clone().applyQuaternion(this.object.quaternion).project(this.scene.camera);
      $label.css('left', (1 + p.x) * this.scene.$canvas.width / 2 + 'px');
      $label.css('top', (1 - p.y) * this.scene.$canvas.height / 2 + 'px');
    });
  }

  addArrow(from, to, color = STROKE_COLOR) {
    from = new THREE.Vector3(...from);
    to = new THREE.Vector3(...to);

    const material = new THREE.MeshBasicMaterial({color});
    const obj = new THREE.Object3D();

    const height = from.distanceTo(to);
    const line = new THREE.CylinderGeometry(0.02, 0.02, height - 0.3, 8, 1, true);
    obj.add(new THREE.Mesh(line, material));

    const start = new THREE.ConeGeometry(0.1, 0.15, 16, 1);
    start.translate(0, height/2 - 0.1, 0);
    obj.add(new THREE.Mesh(start, material));

    const end = new THREE.ConeGeometry(0.1, 0.15, 16, 1);
    end.rotateX(Math.PI);
    end.translate(0, -height/2 + 0.1, 0);
    obj.add(new THREE.Mesh(end, material));

    obj.translateX((from.x + to.x) / 2);
    obj.translateY((from.y + to.y) / 2);
    obj.translateZ((from.z + to.z) / 2);

    const q = new THREE.Quaternion();
    const v = to.clone().sub(from).normalize();
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v);
    obj.setRotationFromQuaternion(q);

    // obj.renderOrder = 100;
    this.object.add(obj);
  }

  addSolid(geo, color, maxAngle = 5) {
    const edgeMaterial = new THREE.LineBasicMaterial({color: 0xffffff});
    const edges = new THREE.EdgesGeometry(geo, maxAngle);

    const obj = new THREE.Object3D();
    obj.add(new THREE.LineSegments(edges, edgeMaterial));
    obj.add(new THREE.Mesh(geo, Solid.solidMaterial(color)));

    this.object.add(obj);
    return obj;
  }

  addWireframe(geometry, color = 0xaaaaaa, maxAngle = 5) {
    const solidMaterial = Solid.translucentMaterial(color);
    const solidMesh = new THREE.Mesh(geometry, solidMaterial);

    const outlineMaterial = new THREE.MeshBasicMaterial({
      color: STROKE_COLOR,
      side: THREE.BackSide
    });
    // outlineMaterial.onBeforeCompile = function(shader) {
    //   const token = '#include <begin_vertex>';
    //   const customTransform = '\nvec3 transformed = position + vec3(normal) * 0.02;\n';
    //   shader.vertexShader = shader.vertexShader.replace(token,customTransform)
    // };
    const outlineMesh = new THREE.Mesh(geometry, outlineMaterial);
    outlineMesh.scale.multiplyScalar(1.015);

    const knockoutMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.BackSide
    });
    const knockoutMesh = new THREE.Mesh(geometry, knockoutMaterial);

    const edgeMaterial = new THREE.MeshBasicMaterial({color: STROKE_COLOR});
    let edges = createEdges(geometry, edgeMaterial, maxAngle);

    const obj = new THREE.Object3D();
    obj.add(solidMesh, outlineMesh, knockoutMesh, edges);

    obj.setClipPlanes = function(planes) {
      for (let m of [solidMaterial, outlineMaterial, knockoutMaterial])
        m.clippingPlanes = planes;
    };

    obj.updateGeometry = function(geo) {
      for (let mesh of [solidMesh, outlineMesh, knockoutMesh]) {
        mesh.geometry.dispose();
        mesh.geometry = geo;
      }
      obj.remove(edges);
      edges = createEdges(geo, edgeMaterial, maxAngle);
      obj.add(edges);
    };

    this.object.add(obj);
    return obj;
  }


  // ---------------------------------------------------------------------------
  // Materials

  static solidMaterial(color) {
    return new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
      specular: 0x222222,
      // depthWrite: false,
      color
    });
  }

  static translucentMaterial(color, opacity = 0.1) {
    return new THREE.MeshLambertMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      opacity, color
    });
  }

}

registerElement('x-solid', Solid);
