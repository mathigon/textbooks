// =============================================================================
// Polyhedron Component
// (c) Mathigon
// =============================================================================


/// <reference types="THREE"/>
import {chunk} from '@mathigon/core';
import {$html, $N, Browser, CustomElementView, register, slide} from '@mathigon/boost';
import {create3D, Graphics3D} from './webgl';

const STROKE_COLOR = 0x666666;
const LINE_RADIUS = 0.012;
const LINE_SEGMENTS = 4;
const POINT_RADIUS = 0.08;


// -----------------------------------------------------------------------------
// Utilities

type Vector = [number, number, number];

// Custom methods on the THREE.Object3D class
interface Object3D extends THREE.Object3D {
  setClipPlanes?: (planes: THREE.Plane[]) => void;
  updateGeometry?: (gep: THREE.Geometry) => void;
  updateEnds?: (f: Vector, t: Vector) => void;
}

function createEdges(geometry: THREE.Geometry, material: THREE.Material, maxAngle?: number) {
  const obj = new THREE.Object3D();
  if (!maxAngle) return obj;

  const edges = new THREE.EdgesGeometry(geometry, maxAngle);
  const edgeData = edges.attributes.position.array as number[];
  const points = chunk(chunk(edgeData, 3).map(p => new THREE.Vector3(...p)), 2);

  for (const edge of points) {
    const curve = new THREE.LineCurve3(edge[0], edge[1]);
    const geometry = new THREE.TubeGeometry(curve, 1, LINE_RADIUS, LINE_SEGMENTS);
    obj.add(new THREE.Mesh(geometry, material));
  }

  return obj;
}


// -----------------------------------------------------------------------------
// Custom Element

@register('x-solid')
export class Solid extends CustomElementView {
  private isReady = false;
  object!: THREE.Object3D;
  scene!: Graphics3D;

  async ready() {
    const size = this.attr('size').split(',');
    const width = +size[0];
    const height = size.length > 1 ? +size[1] : width;

    this.css({width: width + 'px', height: height + 'px'});

    this.scene = await create3D(this, 35, 2 * width, 2 * height);
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

    this.trigger('loaded');
    this.isReady = true;
  }

  addMesh(fn: (scene: Graphics3D) => THREE.Object3D[]|void) {
    if (this.isReady) {
      this.addMeshCallback(fn);
    } else {
      this.one('loaded', () => this.addMeshCallback(fn));
    }
  }

  addMeshCallback(fn: (scene: Graphics3D) => THREE.Object3D[]|void) {
    const items = fn(this.scene) || [];
    for (const i of items) this.object.add(i);

    if (!this.hasAttr('static')) {
      const rt = parseFloat(this.attr('rotate'));
      const speed = isNaN(rt) ? 1 : rt;
      this.handleRotation(this.hasAttr('rotate'), speed);
    }

    this.scene.draw();
  }

  rotate(q: THREE.Quaternion) {
    this.object.quaternion.set(q.x, q.y, q.z, q.w);
    this.scene.draw();
  }

  private handleRotation(animate = true, speed = 1) {
    // TODO Damping after mouse movement
    // TODO Better mouse-to-point mapping

    // Only Chrome is fast enough to support auto-rotation.
    const autoRotate = animate && Browser.isChrome && !Browser.isMobile;
    this.css('cursor', 'grab');

    let dragging = false;
    let visible = false;

    const frame = () => {
      if (visible && autoRotate) requestAnimationFrame(frame);
      this.scene.draw();
      if (!dragging) this.object.rotation.y += speed * 0.012;
    };

    if (autoRotate) {
      this.scene.$canvas.on('enterViewport', () => {
        visible = true;
        frame();
      });
      this.scene.$canvas.on('exitViewport', () => visible = false);
    } else {
      setTimeout(frame);
    }

    // The 1.1 creates rotations that are slightly faster than the mouse/finger.
    const s = Math.PI / 2 / this.scene.$canvas.width * 1.1;

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    slide(this.scene.$canvas, {
      start() {
        dragging = true;
        $html.addClass('grabbing');
      },
      move(posn, start, last) {
        const d = posn.subtract(last).scale(s);
        const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(d.y, d.x));
        self.object.quaternion.multiplyQuaternions(q, self.object.quaternion);
        self.trigger('rotate', {quaternion: self.object.quaternion});
        if (!autoRotate) frame();
      },
      end() {
        dragging = false;
        $html.removeClass('grabbing');
      }
    });
  }


  // ---------------------------------------------------------------------------
  // Element Creation Utilities

  addLabel(text: string, posn: Vector, color = STROKE_COLOR, margin = [0, 0]) {
    const $label = $N('div', {text, class: 'label3d'});
    $label.css('color', '#' + color.toString(16).padStart(6, '0'));

    let posn1 = new THREE.Vector3(...posn);

    this.scene.$canvas.insertAfter($label);

    this.scene.onDraw(() => {
      const p = posn1.clone().applyQuaternion(this.object.quaternion)
          .add(this.object.position).project(this.scene.camera);
      $label.css('left', (1 + p.x) * this.scene.$canvas.width / 2 + margin[0] + 'px');
      $label.css('top', (1 - p.y) * this.scene.$canvas.height / 2 + margin[1] + 'px');
    });

    return {
      updatePosition(posn: Vector) {
        posn1 = new THREE.Vector3(...posn);
      }
    };
  }

  addArrow(from: Vector, to: Vector, color = STROKE_COLOR) {
    const material = new THREE.MeshBasicMaterial({color});
    const obj = new THREE.Object3D() as Object3D;

    const height = new THREE.Vector3(...from).distanceTo(new THREE.Vector3(...to));
    const line = new THREE.CylinderGeometry(0.02, 0.02, height - 0.3, 8, 1, true);
    obj.add(new THREE.Mesh(line, material));

    const start = new THREE.ConeGeometry(0.1, 0.15, 16, 1);
    start.translate(0, height / 2 - 0.1, 0);
    obj.add(new THREE.Mesh(start, material));

    const end = new THREE.ConeGeometry(0.1, 0.15, 16, 1);
    end.rotateX(Math.PI);
    end.translate(0, -height / 2 + 0.1, 0);
    obj.add(new THREE.Mesh(end, material));

    obj.updateEnds = function(f: Vector, t: Vector) {
      // TODO Support changing the height of the arrow.
      const q = new THREE.Quaternion();
      const v = new THREE.Vector3(t[0] - f[0], t[1] - f[1], t[2] - f[2]).normalize();
      q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v);
      obj.setRotationFromQuaternion(q);
      obj.position.set((f[0] + t[0]) / 2, (f[1] + t[1]) / 2, (f[2] + t[2]) / 2);
    };

    obj.updateEnds(from, to);
    this.object.add(obj);
    return obj;
  }

  addCircle(radius: number, color = STROKE_COLOR, segments = 64) {
    const path = new THREE.Curve<THREE.Vector3>();
    path.getPoint = function(t) {
      const a = 2 * Math.PI * t;
      return new THREE.Vector3(radius * Math.cos(a), radius * Math.sin(a), 0);
    };

    const material = new THREE.MeshBasicMaterial({color});
    const geometry = new THREE.TubeGeometry(path, segments, LINE_RADIUS, LINE_SEGMENTS);

    const mesh = new THREE.Mesh(geometry, material);
    this.object.add(mesh);
    return mesh;
  }

  addPoint(position: Vector, color = STROKE_COLOR) {
    const material = new THREE.MeshBasicMaterial({color});
    const geometry = new THREE.SphereGeometry(POINT_RADIUS, 16, 16);

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    this.object.add(mesh);
  }

  addSolid(geo: THREE.Geometry, color: number, maxAngle = 5, flatShading = false) {
    const edgeMaterial = new THREE.LineBasicMaterial({color: 0xffffff});
    const edges = new THREE.EdgesGeometry(geo, maxAngle);

    const obj = new THREE.Object3D();
    obj.add(new THREE.LineSegments(edges, edgeMaterial));
    obj.add(new THREE.Mesh(geo, Solid.solidMaterial(color, flatShading)));

    this.object.add(obj);
    return obj;
  }

  // TODO merge addOutlined() and addWireframe(), by looking at
  //      geometry.isConeGeometry etc.

  // A translucent material with a solid border.
  addOutlined(geo: THREE.Geometry, color = 0xaaaaaa, maxAngle = 5, opacity = 0.1, strokeColor?: number) {
    const solidMaterial = Solid.translucentMaterial(color, opacity);
    const solid = new THREE.Mesh(geo, solidMaterial);

    const edgeMaterial = new THREE.MeshBasicMaterial({color: strokeColor || STROKE_COLOR});
    let edges = createEdges(geo, edgeMaterial, maxAngle);

    const obj = new THREE.Object3D() as Object3D;
    obj.add(solid, edges);

    obj.setClipPlanes = function(planes: THREE.Plane[]) {
      solidMaterial.clippingPlanes = planes;
    };

    obj.updateGeometry = function(geo: THREE.Geometry) {
      solid.geometry.dispose();
      solid.geometry = geo;
      obj.remove(edges);
      edges = createEdges(geo, edgeMaterial, maxAngle);
      obj.add(edges);
    };

    this.object.add(obj);
    return obj;
  }

  // Like .addOutlined, but we also add outlines for curved edges (e.g. of
  // a sphere or cylinder).
  addWireframe(geometry: THREE.Geometry, color = 0xaaaaaa, maxAngle = 5, opacity = 0.1) {
    const solid = this.addOutlined(geometry, color, maxAngle, opacity);

    const outlineMaterial = new THREE.MeshBasicMaterial({
      color: STROKE_COLOR,
      side: THREE.BackSide
    });
    outlineMaterial.onBeforeCompile = function(shader) {
      const token = '#include <begin_vertex>';
      const customTransform = '\nvec3 transformed = position + vec3(normal) * 0.02;\n';
      shader.vertexShader = shader.vertexShader.replace(token, customTransform);
    };
    const outline = new THREE.Mesh(geometry, outlineMaterial);

    const knockoutMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.BackSide
    });
    const knockout = new THREE.Mesh(geometry, knockoutMaterial);

    const obj = new THREE.Object3D() as Object3D;
    obj.add(solid, outline, knockout);

    obj.setClipPlanes = function(planes: THREE.Plane[]) {
      if (solid.setClipPlanes) solid.setClipPlanes(planes);
      for (const m of [outlineMaterial, knockoutMaterial]) {
        m.clippingPlanes = planes;
      }
    };

    obj.updateGeometry = function(geo: THREE.Geometry) {
      if (solid.updateGeometry) solid.updateGeometry(geo);
      for (const mesh of [outline, knockout]) {
        mesh.geometry.dispose();
        mesh.geometry = geo;
      }
    };

    this.object.add(obj);
    return obj;
  }


  // ---------------------------------------------------------------------------
  // Materials

  static solidMaterial(color: number, flatShading = false) {
    return new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
      specular: 0x222222,
      // depthWrite: false,
      color, flatShading
    });
  }

  static translucentMaterial(color: number, opacity = 0.1) {
    return new THREE.MeshLambertMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      opacity, color
    });
  }
}
