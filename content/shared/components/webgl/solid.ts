// =============================================================================
// Polyhedron Component
// (c) Mathigon
// =============================================================================


import {applyDefaults, chunk} from '@mathigon/core';
import {$html, $N, Browser, CustomElementView, register, slide} from '@mathigon/boost';
import {create3D, Graphics3D} from './webgl';

const STROKE_COLOR = 0x666666;
const LINE_RADIUS = 0.012;
const LINE_SEGMENTS = 4;
const POINT_RADIUS = 0.08;


// -----------------------------------------------------------------------------
// Utilities

export type Vector = [number, number, number];

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
  const edgeData = (edges.attributes as any).position.array as number[];
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
  private _isReady = false;
  object!: THREE.Object3D;
  scene!: Graphics3D;

  async ready() {
    const size = this.attr('size').split(',');
    const width = +size[0];
    const height = size.length > 1 ? +size[1] : width;

    this.css({width: width + 'px', height: height + 'px'});

    this.scene = await create3D(this, 35, 2 * width, 2 * height);
    Solid.applyCameraDefaults(this.scene.camera);

    for (const light of Solid.lights()) this.scene.add(light);

    this.object = new THREE.Object3D();
    this.scene.add(this.object);

    if (!this.hasAttr('static')) {
      const speed = +this.attr('rotate');
      this.setupRotation(this.hasAttr('rotate'), isNaN(speed) ? 1 : speed);
    }

    this.trigger('loaded');
    this._isReady = true;
  }

  get isReady() {
    return this._isReady;
  }

  /** @deprecated */
  addMesh(fn: (scene: Graphics3D) => THREE.Object3D[]|void) { // => whenReady; mark as deprecated; add comments warning about THREE
    if (this.isReady) {
      this.addMeshCallback(fn);
    } else {
      this.one('loaded', () => this.addMeshCallback(fn));
    }
  }

  private addMeshCallback(fn: (scene: Graphics3D) => THREE.Object3D[]|void) {
    const items = fn(this.scene) || [];
    for (const i of items) this.object.add(i);
    this.scene.draw();
  }

  rotate(q: THREE.Quaternion) {
    this.object.quaternion.set(q.x, q.y, q.z, q.w);
    // TODO: rotate clipping planes
    this.scene.draw();
  }

  private setupRotation(animate = true, speed = 1) {
    // TODO Damping after mouse movement
    // TODO Better mouse-to-point mapping

    // Only Chrome is fast enough to support auto-rotation.
    const autoRotate = animate && speed && Browser.isChrome && !Browser.isMobile;
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

    slide(this.scene.$canvas, {
      start: () => {
        dragging = true;
        $html.addClass('grabbing');
      },
      move: (posn, start, last) => {
        const d = posn.subtract(last).scale(s);
        const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(d.y, d.x));
        this.object.quaternion.multiplyQuaternions(q, this.object.quaternion);

        this.trigger('rotate', {quaternion: this.object.quaternion, deltaQuaternion: q});
        if (!autoRotate) frame();
      },
      end: () => {
        dragging = false;
        $html.removeClass('grabbing');
      }
    });
  }


  // ---------------------------------------------------------------------------
  // Element Creation Utilities

  private addObj(obj: THREE.Object3D) {
    this.object.add(obj);
    this.scene.draw();
  }

  /** WARNING: Do not use before 'loaded' event has been triggered for this instance */
  addLabel(text: string, posn: Vector, color = STROKE_COLOR, margin?: string) {
    const $label = $N('div', {text, class: 'label3d'});
    $label.css('color', '#' + color.toString(16).padStart(6, '0'));
    if (margin) $label.css('margin', margin);

    let posn1 = new THREE.Vector3(...posn);
    this.scene.$canvas.insertAfter($label);

    this.scene.onDraw(() => {
      const p = posn1.clone().applyQuaternion(this.object.quaternion)
          .add(this.object.position).project(this.scene.camera);
      $label.css('left', (1 + p.x) * this.scene.$canvas.width / 2 + 'px');
      $label.css('top', (1 - p.y) * this.scene.$canvas.height / 2 + 'px');
    });

    return {
      updatePosition(posn: Vector) {
        posn1 = new THREE.Vector3(...posn);
      }
    };
  }

  /** WARNING: Do not use before 'loaded' event has been triggered for this instance */
  addLine(from: Vector, to: Vector, color = STROKE_COLOR, arrows = false) {

    // TODO Rounded ends, argument to specify line width.
    const material = new THREE.MeshBasicMaterial({color});
    const obj = new THREE.Object3D() as Object3D;

    const height = new THREE.Vector3(...from).distanceTo(new THREE.Vector3(...to));
    const line = new THREE.CylinderGeometry(0.02, 0.02, height - (arrows ? 0.3 : 0), 8, 1, arrows);
    obj.add(new THREE.Mesh(line, material));

    if (arrows) {
      const start = new THREE.ConeGeometry(0.1, 0.15, 16, 1);
      start.translate(0, height / 2 - 0.1, 0);
      obj.add(new THREE.Mesh(start, material));

      const end = new THREE.ConeGeometry(0.1, 0.15, 16, 1);
      end.rotateX(Math.PI);
      end.translate(0, -height / 2 + 0.1, 0);
      obj.add(new THREE.Mesh(end, material));
    }

    obj.updateEnds = function(f: Vector, t: Vector) {
      // TODO Support changing the height of the arrow.
      const q = new THREE.Quaternion();
      const v = new THREE.Vector3(t[0] - f[0], t[1] - f[1], t[2] - f[2]).normalize();
      q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v);
      obj.setRotationFromQuaternion(q);
      obj.position.set((f[0] + t[0]) / 2, (f[1] + t[1]) / 2, (f[2] + t[2]) / 2);
    };

    obj.updateEnds(from, to);
    this.addObj(obj);
    return obj;
  }

  addArrow(from: Vector, to: Vector, color = STROKE_COLOR) {
    return this.addLine(from, to, color, true);
  }

  /** WARNING: Do not use before 'loaded' event has been triggered for this instance */
  addCircle(radius: number, color = STROKE_COLOR, segments = 64) {
    const path = new THREE.Curve<THREE.Vector3>();
    path.getPoint = function(t) {
      const a = 2 * Math.PI * t;
      return new THREE.Vector3(radius * Math.cos(a), radius * Math.sin(a), 0);
    };

    const material = new THREE.MeshBasicMaterial({color});
    const geometry = new THREE.TubeGeometry(path, segments, LINE_RADIUS, LINE_SEGMENTS);

    const mesh = new THREE.Mesh(geometry, material);
    this.addObj(mesh);
    return mesh;
  }

  /** WARNING: Do not use before 'loaded' event has been triggered for this instance */
  addPoint(position: Vector, color = STROKE_COLOR) {
    const material = new THREE.MeshBasicMaterial({color});
    const geometry = new THREE.SphereGeometry(POINT_RADIUS, 16, 16);

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    this.addObj(mesh);
    return mesh;
  }

  /** WARNING: Do not use before 'loaded' event has been triggered for this instance */
  addSolid(geo: THREE.Geometry, color: number, options: {maxAngle?: number, flatShading?: boolean, clippingPlanes?: THREE.Plane[]} = {}) {
    const {maxAngle, flatShading, clippingPlanes} = applyDefaults(options, {maxAngle: 5, flatShading: false, clippingPlanes: []});
    const edgeMaterial = new THREE.LineBasicMaterial({color: 0xffffff});
    const edges = new THREE.EdgesGeometry(geo, maxAngle);

    const obj = new THREE.Object3D();
    obj.add(new THREE.LineSegments(edges, edgeMaterial));
    obj.add(new THREE.Mesh(geo, Solid.solidMaterial(color, flatShading, clippingPlanes)));

    this.addObj(obj);
    return obj;
  }

  // TODO merge addOutlined() and addWireframe(), by looking at
  //      geometry.isConeGeometry etc.

  /**
   * WARNING: Do not use before 'loaded' event has been triggered for this instance.
   * Add geometry rendered with translucent material and a solid border. */
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

    this.addObj(obj);
    return obj;
  }

  /**
   * WARNING: Do not use before 'loaded' event has been triggered for this instance.
   * Like .addOutlined, but we also add outlines for curved edges (e.g. of
   * a sphere or cylinder). */
  addWireframe(geometry: THREE.Geometry, color = 0xaaaaaa, maxAngle = 5, opacity = 0.1) {
    const solid = this.addOutlined(geometry, color, maxAngle, opacity);

    const outlineMaterial = new THREE.MeshBasicMaterial({
      color: STROKE_COLOR,
      side: THREE.BackSide
    });
    (outlineMaterial as any).onBeforeCompile = function(shader: THREE.Shader) {
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

    this.addObj(obj);
    return obj;
  }


  // ---------------------------------------------------------------------------
  // Materials

  private static commonMatOptions(color: number, opacity: number, clippingPlanes?: THREE.Plane[]) {
    return {
      side: THREE.DoubleSide,
      transparent: true,
      color,
      opacity,
      clippingPlanes
    };
  }

  static solidMaterial(color: number, flatShading = false, clippingPlanes?: THREE.Plane[]) {
    return new THREE.MeshPhongMaterial({
      ...this.commonMatOptions(color, 0.9, clippingPlanes),
      specular: 0x222222,
      // depthWrite: false,
      flatShading
    });
  }

  static translucentMaterial(color: number, opacity = 0.1, clippingPlanes?: THREE.Plane[]) {
    return new THREE.MeshLambertMaterial({
      ...this.commonMatOptions(color, opacity, clippingPlanes),
      depthWrite: false
    });
  }

  // ---------------------------------------------------------------------------
  // Camera and lights

  static applyCameraDefaults(camera: THREE.Camera) {
    camera.position.set(0, 3, 6);
    camera.up = new THREE.Vector3(0, 1, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  static lights(ambientColor = 0x555555, pointLightColor = 0xffffff) {
    const light1 = new THREE.AmbientLight(ambientColor);
    const light2 = new THREE.PointLight(pointLightColor);
    light2.position.set(3, 4.5, 6);
    return [light1, light2];
  }
}
