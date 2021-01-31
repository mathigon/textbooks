
import {Angle, Point, Polygon} from '@mathigon/euclid';
import {Hinge} from '../components/net';

const dihed1 = 180 - 70.528779;
export const pyramid1 = {
  faces: [
    new Polygon( // Circle
        new Point(-0.866, 0.5),
        new Point(0, -1),
        new Point(0.866, 0.5)
    ),
    new Polygon( // Circle.001
        new Point(1.7321, -1),
        new Point(0, -1),
        new Point(0.866, 0.5)
    ),
    new Polygon( // Circle.002
        new Point(0, 2.0),
        new Point(0.866, 0.5),
        new Point(-0.866, 0.5)
    ),
    new Polygon( // Circle.003
        new Point(-1.7321, -1),
        new Point(0, -1),
        new Point(-0.866, 0.5)
    )
  ],
  hinges: [
    [0, 1, dihed1],
    [0, 2, dihed1],
    [0, 3, dihed1]
  ] as Hinge[]
};

const a = 3;
const b = 2;
const c = Math.sqrt((b ** 2) - ((a / 2) ** 2));
const d = a / 2;
const e = d + b;
const dihed2 = Angle.fromRadians(Math.asin(c / b)).deg;
export const triangularPrism = {
  faces: [
    new Polygon(
        new Point(-a, -d),
        new Point(a, -d),
        new Point(a, d),
        new Point(-a, d)
    ),
    new Polygon(
        new Point(-a, -d),
        new Point(-a, -e),
        new Point(a, -e),
        new Point(a, -d)
    ),
    new Polygon(
        new Point(-a, d),
        new Point(a, d),
        new Point(a, e),
        new Point(-a, e)
    ),
    new Polygon(
        new Point(a, d),
        new Point(a, -d),
        new Point(a + c, 0)
    ),
    new Polygon(
        new Point(-a, d),
        new Point(-a, -d),
        new Point(-(a + c), 0)
    )
  ],
  hinges: [
    [0, 1, 180 - dihed2],
    [0, 2, 180 - dihed2],
    [0, 3, 90],
    [0, 4, 90]
  ] as Hinge[]
};

const dihedHH = 180 - 138.189685;
const dihedHP = 180 - 142.62263;
export const truncatedIcosahedron = {
  faces: [
    new Polygon( // base
        new Point(0, -1.3951),
        new Point(1.2085, -0.6976),
        new Point(1.2085, 0.6976),
        new Point(0, 1.3951),
        new Point(-1.2085, 0.6976),
        new Point(-1.2085, -0.6976)
    ),
    new Polygon( // Curve.001
        new Point(-2.4169, 2.7902),
        new Point(-1.2085, 3.4878),
        new Point(-1.2085, 4.8829),
        new Point(-2.4169, 5.5805),
        new Point(-3.6254, 4.8829),
        new Point(-3.6254, 3.4878)
    ),
    new Polygon( // Curve.002
        new Point(0, 2.7902),
        new Point(1.2085, 3.4878),
        new Point(1.2085, 4.8829),
        new Point(0, 5.5805),
        new Point(-1.2085, 4.8829),
        new Point(-1.2085, 3.4878)
    ),
    new Polygon( // Curve.003
        new Point(1.2085, 0.6976),
        new Point(2.4169, 1.3951),
        new Point(2.4169, 2.7902),
        new Point(1.2085, 3.4878),
        new Point(0, 2.7902),
        new Point(0, 1.3951)
    ),
    new Polygon( // Curve.004
        new Point(1.2085, -3.4879),
        new Point(2.4169, -2.7903),
        new Point(2.4169, -1.3952),
        new Point(1.2085, -0.6976),
        new Point(0, -1.3952),
        new Point(0, -2.7903)
    ),
    new Polygon( // Curve.005
        new Point(3.6254, -3.4878),
        new Point(4.8338, -2.7902),
        new Point(4.8338, -1.3951),
        new Point(3.6254, -0.6976),
        new Point(2.4169, -1.3951),
        new Point(2.4169, -2.7902)
    ),
    new Polygon( // Curve.006
        new Point(4.8339, -5.5805),
        new Point(6.0423, -4.883),
        new Point(6.0423, -3.4879),
        new Point(4.8339, -2.7903),
        new Point(3.6254, -3.4879),
        new Point(3.6254, -4.883)
    ),
    new Polygon( // Curve.007
        new Point(-2.4169, -1.3951),
        new Point(-1.2084, -0.6976),
        new Point(-1.2084, 0.6976),
        new Point(-2.4169, 1.3951),
        new Point(-3.6254, 0.6976),
        new Point(-3.6254, -0.6976)
    ),
    new Polygon( // Curve.008
        new Point(-3.6254, -3.4878),
        new Point(-2.4169, -2.7903),
        new Point(-2.4169, -1.3951),
        new Point(-3.6254, -0.6976),
        new Point(-4.8338, -1.3951),
        new Point(-4.8338, -2.7903)
    ),
    new Polygon( // Curve.009
        new Point(-2.4169, -5.5805),
        new Point(-1.2085, -4.8829),
        new Point(-1.2085, -3.4878),
        new Point(-2.4169, -2.7903),
        new Point(-3.6254, -3.4878),
        new Point(-3.6254, -4.8829)
    ),
    new Polygon( // Curve.010
        new Point(3.6254, 0.6975),
        new Point(4.8339, 1.3951),
        new Point(4.8339, 2.7902),
        new Point(3.6254, 3.4878),
        new Point(2.4169, 2.7902),
        new Point(2.4169, 1.3951)
    ),
    new Polygon( // Curve.011
        new Point(1.2085, 4.8829),
        new Point(2.4169, 5.5804),
        new Point(2.4169, 6.9756),
        new Point(1.2085, 7.6731),
        new Point(0, 6.9756),
        new Point(0, 5.5804)
    ),
    new Polygon( // Curve.012
        new Point(0, 6.9756),
        new Point(1.2085, 7.6731),
        new Point(1.2085, 9.0683),
        new Point(0, 9.7658),
        new Point(-1.2085, 9.0683),
        new Point(-1.2085, 7.6731)
    ),
    new Polygon( // Curve.013
        new Point(-3.6254, 4.8829),
        new Point(-2.4169, 5.5805),
        new Point(-2.4169, 6.9756),
        new Point(-3.6254, 7.6731),
        new Point(-4.8339, 6.9756),
        new Point(-4.8339, 5.5805)
    ),
    new Polygon( // Curve.014
        new Point(-6.0423, 4.8829),
        new Point(-4.8339, 5.5804),
        new Point(-4.8339, 6.9756),
        new Point(-6.0423, 7.6731),
        new Point(-7.2508, 6.9756),
        new Point(-7.2508, 5.5804)
    ),
    new Polygon( // Curve.015
        new Point(-0.1715, 5.8164),
        new Point(-1.2085, 4.8829),
        new Point(-2.4169, 5.5805),
        new Point(-2.1268, 6.9451),
        new Point(-0.739, 7.0909)
    ),
    new Polygon( // Curve.016
        new Point(3.4539, 7.9091),
        new Point(2.4169, 6.9756),
        new Point(1.2084, 7.6731),
        new Point(1.4986, 9.0378),
        new Point(2.8863, 9.1836)
    ),
    new Polygon( // Curve.017
        new Point(3.3558, 4.1853),
        new Point(2.5356, 3.0567),
        new Point(1.2085, 3.4878),
        new Point(1.2085, 4.8829),
        new Point(2.5356, 5.314)
    ),
    new Polygon( // Curve.018
        new Point(6.9812, 2.0927),
        new Point(6.161, 0.964),
        new Point(4.8339, 1.3951),
        new Point(4.8339, 2.7902),
        new Point(6.161, 3.2213)
    ),
    new Polygon( // Curve.019
        new Point(-5.7727, 0),
        new Point(-4.9525, -1.1287),
        new Point(-3.6254, -0.6976),
        new Point(-3.6254, 0.6975),
        new Point(-4.9525, 1.1287)
    ),
    new Polygon( // Curve.020
        new Point(-5.8708, 7.9091),
        new Point(-4.8338, 6.9756),
        new Point(-3.6254, 7.6731),
        new Point(-3.9155, 9.0378),
        new Point(-5.3033, 9.1836)
    ),
    new Polygon( // Curve.021
        new Point(-0.1714, 2.5543),
        new Point(-1.2084, 3.4878),
        new Point(-2.4169, 2.7902),
        new Point(-2.1268, 1.4256),
        new Point(-0.739, 1.2798)
    ),
    new Polygon( // Curve.022
        new Point(3.454, -3.7238),
        new Point(2.417, -2.7903),
        new Point(1.2086, -3.4878),
        new Point(1.4987, -4.8524),
        new Point(2.8865, -4.9983)
    ),
    new Polygon( // Curve.023
        new Point(3.4539, 0.4616),
        new Point(2.4169, 1.3951),
        new Point(1.2085, 0.6975),
        new Point(1.4986, -0.6671),
        new Point(2.8863, -0.8129)
    ),
    new Polygon( // Curve.024
        new Point(-2.2454, -1.6311),
        new Point(-1.2084, -0.6976),
        new Point(0, -1.3951),
        new Point(-0.2901, -2.7598),
        new Point(-1.6779, -2.9056)
    ),
    new Polygon( // Curve.025
        new Point(5.0053, -5.8164),
        new Point(6.0423, -4.8829),
        new Point(7.2508, -5.5805),
        new Point(6.9607, -6.9451),
        new Point(5.5729, -7.0909)
    ),
    new Polygon( // Curve.026
        new Point(-5.8708, -3.7238),
        new Point(-4.8338, -2.7903),
        new Point(-3.6254, -3.4878),
        new Point(-3.9155, -4.8524),
        new Point(-5.3033, -4.9983)
    ),
    new Polygon( // Curve.027
        new Point(4.8339, 2.7902),
        new Point(6.0423, 3.4878),
        new Point(6.0423, 4.8829),
        new Point(4.8339, 5.5804),
        new Point(3.6254, 4.8829),
        new Point(3.6254, 3.4878)
    ),
    new Polygon( // Curve.028
        new Point(7.2508, -5.5805),
        new Point(8.4592, -4.8829),
        new Point(8.4592, -3.4878),
        new Point(7.2508, -2.7902),
        new Point(6.0423, -3.4878),
        new Point(6.0423, -4.8829)
    ),
    new Polygon( // Curve.029
        new Point(8.4592, -7.6732),
        new Point(9.6676, -6.9757),
        new Point(9.6676, -5.5805),
        new Point(8.4592, -4.883),
        new Point(7.2507, -5.5805),
        new Point(7.2507, -6.9757)
    ),
    new Polygon( // Curve.030
        new Point(7.2506, -9.7658),
        new Point(8.4591, -9.0683),
        new Point(8.4591, -7.6732),
        new Point(7.2506, -6.9756),
        new Point(6.0422, -7.6732),
        new Point(6.0422, -9.0683)
    ),
    new Polygon( // Curve.031
        new Point(3.6253, -7.6732),
        new Point(4.8338, -6.9756),
        new Point(4.8338, -5.5805),
        new Point(3.6253, -4.8829),
        new Point(2.4169, -5.5805),
        new Point(2.4169, -6.9756)
    )
  ],
  hinges: [
    [0, 3, dihedHH], [0, 7, dihedHH], [0, 24, dihedHP],
    [0, 4, dihedHH], [7, 19, dihedHP], [7, 8, dihedHH],
    [8, 26, dihedHP], [8, 9, dihedHH], [4, 22, dihedHP],
    [4, 5, dihedHH], [5, 6, dihedHH], [6, 31, dihedHH],
    [6, 28, dihedHH], [28, 25, dihedHP], [28, 29, dihedHH],
    [29, 30, dihedHH], [3, 23, dihedHP], [3, 10, dihedHH],
    [3, 2, dihedHH], [10, 18, dihedHP], [10, 27, dihedHH],
    [2, 17, dihedHP], [2, 11, dihedHH], [2, 1, dihedHH],
    [11, 16, dihedHP], [11, 12, dihedHH], [1, 15, dihedHP],
    [1, 13, dihedHH], [1, 21, dihedHP], [13, 20, dihedHP],
    [13, 14, dihedHH]
  ] as Hinge[]
};
