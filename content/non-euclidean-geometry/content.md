# Non-Euclidean Geometry

## The Hunter and the Bear

    .rbox
      img(src="resources/Dimensions_and_Distortions/bear.jpg" width="300" height="218")

    .rbox(style="clear: both")
      img(src="resources/Dimensions_and_Distortions/bear.png" width="240" height="240")

A hunter is tracking a bear. Starting at his camp, he walks one mile due south.
Then the bear changes direction and the hunter follows it due east. After one
mile, the hunter loses the bear&rsquo;s track. He turns north and walks for
another mile, at which point he arrives back at his camp. _What was the colour
of the bear?_

{.light} There are multiple places on Earth where this could happen, but only
one where you can find bears…

---

An odd question – not only is the colour of the bear unrelated to the rest of
the question, but how can the hunter walk south, east and north, and then arrive
back at his camp? This certainly doesn't work everywhere on Earth, but it does
if you start at the North pole. And therefore the colour of the bear has to be
white.

A surprising observation is that the triangle seems to have two right angles –
in the two bottom corners. Therefore the sum of all three angles is greater than
180°, something that we already proved to be impossible.

All these things are based on that fact geometry works differently in flat space
than it does on curved surfaces like a sphere. There are many other kinds of
geometry, different kinds of _space_, with different properties. In this
article we will explore a few of them.

---

## Euclidean Geometry

The entire framework of geometry that is based on Euclid's five postulates is
called "Euclidean Geometry". You can extend it from two dimensions to three
dimensions, in which case it seems to match our intuition for the space and
shape of the everyday world.

However that doesn't mean that it's the _only_ kind of geometry: different sets
of initial postulates 




Spacetime is non-euclidean

Construct regular hexagon


---

## Metric Spaces

One of the most fundamental concepts in geometry is that of _distance_.
Intuitively, the distance between two points is the length of the straight line
which connects them. There are no straight lines on the surface of a sphere,
but even on a flat surface we can find a number of different ways to define the
meaning of _distance_:

<table width="95%" border="" class="tableFixed">
  <tr>
    <td><img src="resources/Dimensions_and_Distortions/metric1.png" width="210" height="130" alt="euclidean"   ></td>
    <td><img src="resources/Dimensions_and_Distortions/metric2.png" width="210" height="130" alt="manhattan"   ></td>
    <td><img src="resources/Dimensions_and_Distortions/metric3.png" width="211" height="130" alt="british rail"></td>
    </tr>
  <tr>
    <td class="caption">
      <p class="red sansSerif">EUCLIDEAN METRIC</p>
      <p>The most intuitive way to measure distance is the straight line between two points.</p>
    </td>
    <td class="caption">
      <p class="red sansSerif">MANHATTAN METRIC</p>
      <p>On the other hand, in some cities, the <em>distance</em> between two points is only measured along horizontal or vertical lines, not directly.</p>
    </td>
    <td class="caption">
      <p class="red sansSerif">BRITISH RAIL METRIC</p>
      <p>In the UK, the distance, via rail, between two distinct points always has to go via London.</p>
    </td>
  </tr>
</table>

We can define the distance between two points in space, like above, but we can
also define the distance between other objects. For example, the distance
between two images could tell you about their similarity: if the images are
similar their distance is small, and if they look very different their distance
is large. The distance between two human beings could tell you about how closely
they are related.

We need some more information to accurately describe these two new "distance
functions", but there are three properties which all distance functions must
have in common:

* The distance between a point and itself is zero, and the distance between two
  distinct points is never zero.
* The distance between points A and B is the same as the distance between points
  B and A. <div class="rbox"><img src="resources/Dimensions_and_Distortions/triangle.png" width="200" height="100"></div>
* The direct distance between points A and C is always at least as small as the
  distance between points A and B plus the distance between points B and C. This
  is called the __Triangle Inequality__.

The various "distance functions" are called __Metrics__, and the corresponding
"spaces" are called __Metric Spaces__. There are many other distance functions,
similar to the ones above.

---

## Spherical Geometry

<div class="rbox">
  <img src="resources/Dimensions_and_Distortions/greatcircles.png" width="220" height="220" alt="Great Circles and Geodesics">
</div>

<p>In the introduction we discovered that we can draw a triangle on the surface of a sphere in which the angles add up to more than 180&deg;. The amount by which the sum of the angles in a spherical triangle exceeds 180&deg; depends on the size of a triangle compared to the size of the entire sphere. Large triangles have a greater sum of angles than small triangles.</p>

<p>This is only one of the facts which distinguish  geometry on flat surfaces (<a href="/world/Modelling_Space">Euclidean geometry</a>) from <strong>spherical geometry</strong>.</p>

<p>Even drawing a &#8220;straight&#8221; line between two points on the surface of a sphere is problematic. There are many different possibilities, but the shortest line lies on an imaginary &#8220;equator&#8221; through the two points. These equators are called <strong style="color: #C1272D;">great circles</strong> and the great circle segments, called <strong style="color: #F7931E;">geodesics</strong>, are what we mean when we refer to &#8220;lines&#8221; in the following section.</p>

<table width="95%" border="" class="tableFixed" id="sphereTable" style="clear: both;">
  <tr class="td_bottom">
    <td width="100">
      <span class="red sansSerif">EUCLIDEAN GEOMETRY</span>
    </td>
    <td width="120"></td>
    <td width="100">
      <span class="red sansSerif">SPHERICAL GEOMETRY</span>
    </td>
  </tr>
  <tr class="td_bottom">
    <td>
      <img src="resources/Dimensions_and_Distortions/euclideanA.png" width="220" height="220" alt="Euclidean Parallel Lines">
    </td>
    <td class="caption">
      <p class="lblue sansSerif">PARALLEL LINES</p>
      <p>Unlike on a flat surface, you can&#8217;t have parallel lines on a sphere. Any two lines (great circles) will intersect.</p>
    </td>
    <td>
      <img src="resources/Dimensions_and_Distortions/sphericalA.png" width="220" height="220" alt="Spherical Parallel Lines">
    </td>
  </tr>
  <tr class="td_bottom">
    <td>
      <img src="resources/Dimensions_and_Distortions/euclideanB.png" width="220" height="220" alt="Euclidean Line between Points">
    </td>
    <td class="caption">
      <p class="lblue sansSerif">LINES BETWEEN TWO POINTS</p>
      <p>On a flat surface, there is a unique straight line between two points. On a sphere, there are at least two lines/geodesics between distinct points, and infinitely many lines between opposite points on the sphere.</p>
    </td>
    <td>
      <img src="resources/Dimensions_and_Distortions/sphericalB.png" width="220" height="220" alt="Spherical Line between Points">
  </tr>
  <tr class="td_bottom">
    <td>
      <img src="resources/Dimensions_and_Distortions/euclideanC.png" width="220" height="220" alt="Euclidean 2-gons">
    </td>
    <td class="caption">
      <p class="lblue sansSerif">2-GONS</p>
      <p>On a flat surface, you can&#8217;t have polygons with only two sides (2-gons), but you can on a sphere.</p>
    </td>
    <td>
      <img src="resources/Dimensions_and_Distortions/sphericalC.png" width="220" height="220" alt="Spherical 2-gons">
    </td>
  </tr>
  <tr>
    <td>
      <img src="resources/Dimensions_and_Distortions/euclideanD.png" width="220" height="220" alt="Euclidean Right Angles">
    </td>
    <td class="caption">
      <p class="lblue sansSerif">RIGHT ANGLES</p>
      <p>Triangles in a flat surface can have at most one right angle. Triangles on a sphere can have two or even three right angles.</p>
    </td>
    <td>
      <img src="resources/Dimensions_and_Distortions/sphericalD.png" width="220" height="220" alt="Spherical Right Angles">
    </td>
  </tr>
</table>

<p>Spherical geometry is much harder to visualise than flat Euclidean geometry, but we do live on a sphere rather than a disk. Since Earth is so large compared to us, the effects of spherical geometry are hardly noticeable in everyday life and the surface looks <em>almost</em> flat at any one point. But understanding spherical geometry is important for navigation and cartography, as well as astronomy and calculating satellite orbits.</p>



<h2>Projections</h2>

<p>The most common problem with living on a sphere arises when designing maps &#8211; it is impossible to accurately represent the 3-dimensional surface of Earth on 2-dimensional paper.</p>

<p>By &#8220;stretching&#8221; the surface in various ways, it is possible to create <strong>projections</strong> of Earth&#8217;s surface onto a plane. However some of the geographical properties, such as area, shape, distance or direction, will get distorted.</p>

<table width="95%" border="" class="tableFixed">
  <tr>
    <td><img src="resources/Dimensions_and_Distortions/mapA.png" width="210" height="140" alt="Mercator Projection"></td>
    <td><img src="resources/Dimensions_and_Distortions/mapB.png" width="210" height="140" alt="Gall-Peters Projection"></td>
    <td><img src="resources/Dimensions_and_Distortions/mapC.png" width="210" height="140" alt="Mollweide Projection"></td>
  </tr>
  <tr>
    <td class="caption td_caption_small">The Mercator Projection</td>
    <td class="caption td_caption_small">The Gall-Peters Projection</td>
    <td class="caption td_caption_small">The Mollweide Projection</td>
  </tr>
</table>

<p>The Mercator projection significantly distorts the relative size of various countries, while the Gall-Peters and Mollweide projections distort straight lines and bearings. There are <a target="_blank" href="http://en.wikipedia.org/wiki/List_of_map_projections">many other projections</a> to represent Earth on maps, and you often use different projections to show certain parts of Earth, or for particular applications such as nautical navigation.</p>

<p>The underlying reason for having to distort Earth&#8217;s surface in order to represent it on a 2-dimensional map is the fact that it has a positive <strong>curvature</strong>. Only shapes with a zero curvature, such as cubes, cylinders or cones, can be represented in a lower dimension without distortion.</p>

<p class="lgrey">The curvature of a curve at a particular point is the inverse of the radius of the circle which best approximated the curve at that point. For a straight line, this would be a circle with infinite radius, so the curvature is 1/&infin; = 0. For points on a 2-dimensional surface, you can find many different curvatures along different directions. The <em>principle curvature</em> is the product of the smallest and the largest of these curvatures. Points with a positive curvature are called <em>elliptic point</em>. Points with a negative or zero curvature are called <em>hyperbolic</em> or <em>parabolic points</em> respectively.</p>



<h2>Hyperbolic Geometry</h2>

<div class="rbox">
  <img src="resources/Dimensions_and_Distortions/hyperbolic.png" width="260" height="220" alt="Hyperbolic Space">
</div>

<p>The surface of a sphere is curved &#8220;inwards&#8221; <span class="light">(a <em>positive</em> curvature)</span>. Instead we could think about what happens if space is curved &#8220;outwards&#8221; at every point <span class="light">(a <em>negative</em> curvature)</span>, forming a surface which looks like a saddle. This gives rise to <strong>Hyperbolic Geometry</strong>.</p>

<table width="95%" border="" class="tableFixed" style="width: 50%; min-width: 360px;">
  <tr>
    <td><img src="resources/Dimensions_and_Distortions/trianglesA.png" width="102" height="96" alt="Spherical Triangle"></td>
    <td><img src="resources/Dimensions_and_Distortions/trianglesB.png" width="102" height="96" alt="Euclidean Triangle"></td>
    <td><img src="resources/Dimensions_and_Distortions/trianglesC.png" width="102" height="96" alt="Hyperbolic Triangle"></td>
  </tr>
  <tr>
    <td class="caption td_caption_small">Spherical triangle</td>
    <td class="caption td_caption_small">Euclidean triangle</td>
    <td class="caption td_caption_small">Hyperbolic triangle</td>
  </tr>
</table>

<p>Hyperbolic surfaces appear in nature and technology, usually because of their large surface area or because of their physical strength:</p>

<table width="95%" border="" class="tableFixed">
  <tr>
    <td><img src="resources/Dimensions_and_Distortions/cooling.jpg" width="220" height="165" alt="Cooling Towers" class="shadow"></td>
    <td><img src="resources/Dimensions_and_Distortions/corals.jpg" width="220" height="165" alt="Hyperbolic Corals" class="shadow"></td>
    <td><img src="resources/Dimensions_and_Distortions/vase.jpg" width="220" height="165" alt="Hyperbolic Vase" class="shadow"></td>
    </tr>
  <tr>
    <td class="caption td_caption_small">Hyperbolic cooling towers at power plants</td>
    <td class="caption td_caption_small">Hyperbolic corals</td>
    <td class="caption td_caption_small">Hyperbolic flower vase</td>
    </tr>
</table>

<p>Unlike the surface of a sphere, hyperbolic space is infinite. However we can create a finite projection of hyperbolic space onto a flat surface:</p>

<table width="95%" border="" class="tableFixed">
  <tr>
    <td><img src="resources/Dimensions_and_Distortions/tiling.png" width="340" height="340" alt="Hyperbolic Tiling"></td>
    <td><img src="resources/Dimensions_and_Distortions/escher.jpg" width="340" height="340" alt="Circle Limit Escher"></td>
    </tr>
  <tr>
    <td class="caption td_caption_small">A hyperbolic tiling consisting of triangles</td>
    <td class="caption td_caption_small"><em>Circle Limit III</em> by M. C. Escher (1898 &#8211; 1972)</td>
  </tr>
</table>

<p>These projections are called Poincar&eacute; disks, named after the French mathematician Henri Poincar&eacute; (1854 &#8211; 1912). In hyperbolic space all the triangles (left) would have &#8220;straight&#8221; edges as well as the same size and shape. In the projection, space is distorted in a way that makes triangles towards the centre look  bigger and triangles towards the edge look much smaller. There are infinitely many of these triangles, forming an infinite regular <a href="/course/polygons-and-polyhedra/tessellations">tessellation</a> in hyperbolic space.</p>

<div class="box">
  <div id="hyperboxwrap" style="width:400px; height:400px; margin: 0 auto; position: relative;">
    <div id="hyperbox" class="jxgbox" style="width:400px; height:400px; background: none; cursor: pointer; z-index: 10; position: absolute;"></div>
    <div id="hyperboxoverlay" style="position: absolute; top: 6px; left: 6px; width: 388px; height: 388px; background-size: cover; opacity: 0.3; background-image: none;"></div>
  </div>
  <div class="boxCaption frame">
  <p><label for="hypbg">Background:</label> &nbsp;&nbsp;<select style="display: inline-block;" name="hypbg" id="hypbg"><option value="0">White</option><option value="1">Tiling</option><option value="2">Escher</option></select></p>
  <p class="caption">Click anywhere inside the disk to add a point. Create a second point to form a hyperbolic line. Once placed, you can change the lines by dragging the endpoints. While the lines may appear curved in the Poincar&eacute; disk projection, they are straight in hyperbolic space. Can you make hyperbolic triangles, squares or other shapes?</p>
  </div>
</div>

<p>Special Relativity asserts that, depending on how fast you are moving, time runs faster or slower and distances appear longer or shorter. These effects are only noticeable if you move very, <em>very</em> fast &#8211; but they are important to consider for example when designing satellite navigation systems.</p>

<p>One way to model the distortions of space and time predicted by special relativity is to think about space and time as being <em>hyperbolic</em> rather than &#8220;flat&#8221; and Euclidean. Hyperbolic geometry can be used to  add velocities and calculate the effect of accelerations.</p>



<h2>Higher Dimensions</h2>

<p class="todo">COMING SOON</p>



<h2>Topology</h2>

<p >When defining Metric spaces at the beginning of this course, the key concept was that of <em>distance</em>. In contrast, in Topology we don&rsquo;t care about the distance between two points, only whether it is <em>possible</em> to move from one point to the other. Two objects are <em>topologically equivalent</em>, or <em>homeomorphic</em> if we can transform one into the other by continuously bending and stretching it, without having to cut holes or glue boundaries together.</p>

<p>Many letters in the alphabet are topologically equivalent. Imagine they are made of rubber and can be easily stretched, but not cut or glued together.</p>

<table width="95%" border="" class="tableFixed">
  <tr>
    <td>
      <div class="AnimationBox LetterBox" id="LetterBox1">
        <div id="Letter1" class="Letter resizable" data-size="w"></div>
        <div class="AnimationBar"></div>
      </div>
    </td>
    <td>
      <div class="AnimationBox LetterBox" id="LetterBox2">
        <div id="Letter2" class="Letter resizable" data-size="w"></div>
        <div class="AnimationBar"></div>
      </div>
    </td>
    <td>
      <div class="AnimationBox LetterBox" id="LetterBox3">
        <div id="Letter3" class="Letter resizable" data-size="w"></div>
        <div class="AnimationBar"></div>
      </div>
    </td>
    <td>
      <div class="AnimationBox LetterBox" id="LetterBox4">
        <div id="Letter4" class="Letter resizable" data-size="w"></div>
        <div class="AnimationBar"></div>
      </div>
    </td>
    <td>
      <div class="AnimationBox LetterBox" id="LetterBox5">
        <div id="Letter5" class="Letter resizable" data-size="w"></div>
        <div class="AnimationBar"></div>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="AnimationBox LetterBox" id="LetterBox6">
        <div id="Letter6" class="Letter resizable" data-size="w"></div>
        <div class="AnimationBar"></div>
      </div>
    </td>
    <td>
      <div class="AnimationBox LetterBox" id="LetterBox7">
        <div id="Letter7" class="Letter resizable" data-size="w"></div>
        <div class="AnimationBar"></div>
      </div>
    </td>
    <td>
      <div class="AnimationBox LetterBox" id="LetterBox8">
        <div id="Letter8" class="Letter resizable" data-size="w"></div>
        <div class="AnimationBar"></div>
      </div>
    </td>
    <td>
      <div class="AnimationBox LetterBox" id="LetterBox9">
        <div id="Letter9" class="Letter resizable" data-size="w"></div>
        <div class="AnimationBar"></div>
      </div>
    </td>
    <td>
      <div class="AnimationBox LetterBox" id="LetterBox10">
        <div id="Letter10" class="Letter resizable" data-size="w"></div>
        <div class="AnimationBar"></div>
      </div>
    </td>
  </tr>
</table>

<div class="rbox">
  <img src="resources/Dimensions_and_Distortions/topology.gif" width="200" height="200" alt="Teacup and Doughnut">
</div>

<p>Similarly, a teacup and a doughnut are topologically equivalent and can be transformed into each other &#8211; the subject of many jokes about topologists. The mathematical name for doughnut shapes is <strong>torus</strong>.</p>

<p>On the other hand, a torus and a sphere are not equivalent because one has a hole and the other one doesn&#8217;t. They have different topological properties: for example, any &#8220;rubber loop&#8221; embedded on the surface of a sphere can be compressed to almost a point. On the surface of a torus, there are some rubber loops which can&#8217;t be compressed in that way:</p>

<p class="center" style="clear: both;"><img src="resources/Dimensions_and_Distortions/poincare.png" width="480" height="220" alt="Rubber bands on sphere and torus"></p>

<div class="rbox"><img src="resources/Dimensions_and_Distortions/poincare.jpg" width="200" height="260" alt="Henri Poincare"><p class="caption">Henri Poincar&eacute; (1854 &#8211; 1912)</p></div>

<p>In three dimensions, it is intuitively clear that any shape on which you can condense all rubber bands to a point has to be homeomorphic to a sphere. Henri Poincar&eacute; conjectured that the same is true for spheres in 4-dimensional space: the <strong>Poincar&eacute; Conjecture</strong>. For more than 100 years, this was one of the most important unsolved problems in mathematics, including one of the seven <em>Millennium Prize Problems</em> with a prize money of $1,000,000.</p>
<p>In 2002, the conjecture was proven by the Russian mathematician Grigori Perelman (*1966) using a concept called the <em>Ricci Flow</em>. It is the only Millennium problem that has been solved to date &#8211; but Perelman declined both the prize money and the <em>Fields Medal</em>, the most prestigious award in mathematics.</p>


<h2>M&ouml;bius Strip and Klein Bottle</h2>
