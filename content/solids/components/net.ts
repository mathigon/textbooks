// =============================================================================
// 3D Net Component
// (c) Mathigon
// =============================================================================


import {register} from '@mathigon/boost';
import {Angle, ORIGIN, Point, Polygon, Rectangle} from '@mathigon/euclid';
import {round} from '@mathigon/fermat';
import {Solid} from '../../shared/components/webgl/solid';

export type Hinge = [number, number, number];

type HingeBone = {
  bone: THREE.Bone,
  verts: Point[],
  axis: THREE.Vector3,
  maxAngle: number
};

@register('x-net')
export class Net extends Solid {
  private hingeBones: HingeBone[] = [];
  private loaded!: boolean;

  created() {
    this.one('loaded', () => this.loaded = true);
  }

  private add(faces: Polygon[], hinges: Hinge[], scale?: number) {
    const netPoints = mergePolys(faces).points;

    const geoInit = new THREE.Geometry();

    for (const netPoint of netPoints) {
      geoInit.vertices.push(new THREE.Vector3(netPoint.x, netPoint.y, 0));
    }

    const facesTris = faces.map(triangulateFace);

    for (const faceTris of facesTris) {
      for (const tri of faceTris) {
        const [a, b, c] = tri.map(point => netPoints.findIndex(p => p.equals(point)));
        geoInit.faces.push(new THREE.Face3(a, b, c));
      }
    }

    const baseCenter = faces[0].centroid;

    const rootBone = new THREE.Bone();
    rootBone.name = 'root';
    rootBone.position.set(baseCenter.x, baseCenter.y, 0);
    const rootHingeBone: HingeBone = {
      bone: rootBone,
      verts: faces[0].points,
      axis: new THREE.Vector3(0, 0, 0),
      maxAngle: 0
    };

    const hingeBonesTail =
      boneHingesForFace(
          0,
          undefined,
          rootBone,
          faces,
          hinges
      );
    const hingeBones = [rootHingeBone, ...hingeBonesTail];
    this.hingeBones = hingeBones;

    const geometry =
      new THREE.BufferGeometry().fromGeometry(geoInit);

    const skinIndices: number[] = [];
    const skinWeights: number[] = [];

    const position = (geometry.attributes as any).position as THREE.BufferAttribute;
    const vertex = new THREE.Vector3();
    for (let i = 0; i < position.count; i++) {
      vertex.fromBufferAttribute(position, i);

      const testPoint = new Point(vertex.x, vertex.y);
      const boneIndex = getBoneIndexFromPoint(testPoint, hingeBones);

      skinIndices.push(boneIndex, 0, 0, 0);
      skinWeights.push(1, 0, 0, 0);
    }

    // TODO: Change to .setAttribute if threejs version is updated
    geometry.addAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
    geometry.addAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));

    const mat = Solid.solidMaterial(0x22ab24, true);
    mat.skinning = true;

    const mesh = new THREE.SkinnedMesh(geometry, mat);

    const skeleton = new THREE.Skeleton(hingeBones.map(hingeBone => hingeBone.bone));

    mesh.add(skeleton.bones[0]);
    mesh.bind(skeleton);
    this.scene.add(mesh);

    this.scene.camera.lookAt(mesh.position);

    skeleton.bones[0].rotateX(Math.PI / 2);
    skeleton.bones[0].position.set(0, 0, 0);
    if (scale != undefined) skeleton.bones[0].scale.set(scale, scale, scale);

    return [mesh];
  }

  /**
    * Note: the item at `faces[0]` is used to determine the 'root' of the skeleton
    * and thus the net.
    */
  addNet(faces: Polygon[], hinges: Hinge[], scale?: number) {
    this.addMesh(() =>
      this.add(faces, hinges, scale)
    );
  }

  addCuboidNet(width: number, height: number, depth: number) {
    const p = ORIGIN;
    const faces = [
      new Rectangle(p, width, depth), // bottom (base)
      new Rectangle(p.shift(width, 0), height, depth), // 'right'
      new Rectangle(p.shift(-width, 0), height, depth), // 'left'
      new Rectangle(p.shift(-(width + height), 0), width, depth), // top
      new Rectangle(p.shift(0, depth), width, height), // front
      new Rectangle(p.shift(0, -depth), width, height) // back
    ].map(rect => rect.polygon);
    const hinges: Hinge[] = [
      [0, 1, 90],
      [0, 2, 90],
      [0, 4, 90],
      [0, 5, 90],
      [2, 3, 90] // [TODO]: 2 and 3 are not adjacent somehow, need to re-eval this
    ];
    this.addNet(faces, hinges);
  }

  /**
   * @param amount Ratio from 0 to 1
   */
  fold(amount: number) {
    if (this.loaded) {
      this.setFoldAmount(amount);
      this.scene.draw();
    } else {
      this.one('loaded', () => {
        this.setFoldAmount(amount);
        this.scene.draw();
      });
    }
  }

  private setFoldAmount = (amount: number) => {
    // eslint-disable-next-line no-invalid-this
    const hb = this.hingeBones.slice(1);
    for (const hingeBone of hb) {
      setHingeBendAmount(hingeBone, amount);
    }
  };

}

function parentHinge(hinge: Hinge, parentFaceIndex?: number) {
  if (parentFaceIndex === undefined) return false;

  return hinge[0] == parentFaceIndex ||
         hinge[1] == parentFaceIndex;

}

function boneHingesForFace(
    currentFaceIndex: number,
    previousFaceIndex: number | undefined,
    previousBone: THREE.Bone,
    faces: Polygon[],
    hinges: Hinge[]
): HingeBone[] {
  const currentFace = faces[currentFaceIndex];
  const hingesToProcess =
    hingesForFace(currentFaceIndex, hinges)
        .filter(hinge => !parentHinge(hinge, previousFaceIndex));

  const nextFaces = hingesToProcess.map(hinge =>
    otherFaceIndex(currentFaceIndex, hinge)
  );

  const boneHinges = nextFaces.reduce((acc: HingeBone[], faceIndex) => {
    const nextFace = faces[faceIndex];
    const hingeEdge = getCommonEdge(currentFace, nextFace)!;
    const midpoint = hingeEdge.midpoint;

    const angle = Angle.fromRadians(hingeEdge.angle);
    const angleCoords = (new Point(1, 0)).rotate(angle.rad, new Point(0, 0));
    const axis = new THREE.Vector3(round(angleCoords.x, 10), round(angleCoords.y, 10), 0);

    const bone = new THREE.Bone();
    bone.name = `${currentFaceIndex}-${faceIndex}`;
    const parentPos = new THREE.Vector3();
    previousBone.getWorldPosition(parentPos);
    const parentPosPoint = new Point(parentPos.x, parentPos.y);
    const diff = midpoint.subtract(parentPosPoint);
    bone.position.set(diff.x, diff.y, 0);
    previousBone.add(bone);

    const verts: Point[] =
      nextFace.points.filter(point =>
        !point.equals(hingeEdge.p1) &&
        !point.equals(hingeEdge.p2)
      );

    const hinge = hingeForFaces(faceIndex, currentFaceIndex, hinges);
    const [_a, _b, maxAngleDeg] = hinge!;
    const maxAngle = Angle.fromDegrees(maxAngleDeg).rad;

    const boneHinge = {
      bone,
      verts,
      axis,
      maxAngle
    };

    const children = acc.concat(
        boneHingesForFace(
            faceIndex,
            currentFaceIndex,
            bone,
            faces,
            hinges
        )
    );
    return [boneHinge, ...children];
  },
  []
  );

  return boneHinges;
}
/**
  * Assumes that `a` and `b` are adjacent
  */
function getCommonEdge(a: Polygon, b: Polygon) {
  return a.edges.find(aEdge => b.edges.some(bEdge => aEdge.equals(bEdge, 0.0001)));
}

function getBoneIndexFromPoint(point: Point, hingeBones: HingeBone[]) {
  return hingeBones.findIndex(
      hingeBone => hingeBone.verts.some(
          vert => vert.equals(point)
      )
  );
}

function hingesForFace(faceIndex: number, hinges: Hinge[]) {
  return hinges.filter(hinge =>
    hinge[0] == faceIndex || hinge[1] == faceIndex
  );
}

function hingeForFaces(a: number, b: number, hinges: Hinge[]) {
  return hinges.find(hinge =>
    (hinge[0] == a && hinge[1] == b) ||
    (hinge[1] == a && hinge[0] == b)
  );
}

function otherFaceIndex(currentFaceIndex: number, hinge: Hinge) {
  if (currentFaceIndex == hinge[0]) return hinge[1];
  else return hinge[0];
}

function triangulateFace(face: Polygon): Array<[Point, Point, Point]> {
  const verts = face.points;
  return verts.slice(1, verts.length - 1).map((vert, index) => {
    const a = new Point(verts[0].x, verts[0].y);
    const b = new Point(vert.x, vert.y);
    const c = new Point(verts[index + 2].x, verts[index + 2].y);
    return [a, b, c];
  });
}

function mergePolys(polys: Polygon[]) {
  const points: Point[] = [];
  for (const poly of polys) {
    for (const point of poly.points) {
      if (points.every(p => !p.equals(point))) points.push(point);
    }
  }
  return new Polygon(...points);
}

function setHingeBendAmount(hinge: HingeBone, amount: number) {
  const rotAngle = hinge.maxAngle * amount;
  hinge.bone.setRotationFromAxisAngle(hinge.axis, rotAngle);
}
