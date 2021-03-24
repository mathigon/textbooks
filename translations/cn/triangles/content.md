# 三角形与三角学

## 引言

> id: intro
> section: introduction
> color: "#3566DE"
> level: Intermediate
> next: polyhedra

::: column.grow
到19世纪早期，探险家们就已经发现了这个世界的大部分地区，在遥远国家之间的贸易和运输也正在蓬勃发展，而这就需要地球的 _精确地图_ 。

今天我们有卫星可以从太空拍摄照片 —— 但在200年前，创建地图是一项困难且耗时的任务，这是由像 [Radhanath Sikdar](bio:sikdar) 这样的数学家完成的，他参与了「大三角勘察」项目，这是一个长达一个世纪的项目，旨在测量包括喜马拉雅山脉在内的整个印度。

::: column(width=240)

    x-img.shift-1(src="images/theodolite.jpg" width=240 height=320 credit="Science & Society Picture Library")

{.caption}  _经纬仪_, 一种测量仪器
:::

令人感兴趣的是如何寻找地球上最高的山峰，这里有几座候选的不同山峰，但要从几百公里以外确定哪座最高，非常困难。

那么，如何测量一座山的高度呢？

    figure.mountain: include svg/mountain.svg

{.r} 今天，我们可以用卫星去测量山峰的高度，并且精确到厘米  —— 但是在 Radhanath 勘察印度的时候，没有这样的测量方法。
[Continue](btn:next)

{.r.reveal(when="next-0")} 登山者一般使用 _高度计_ 来测量高度，这种装置主要是利用不同高度的气压差来计算，这就需要有人真正地爬到[每座山的山顶](->.mountain-top) —— 这是一项极其困难的任务，直到一个世纪后才真正实现。
[Continue](btn:next)

{.r.reveal(when="next-1")}
你也可以尝试使用相似三角形来实现，就像我们在[前面课程](/course/transformations/similarity)中做的那样，但这种方法需要知从山脚到[山顶正下方](->.mountain-base)（山顶正下方的海平面点）的[距离](->.mountain-distance)，在测量树木或建筑的时候我们可以这样做，但对于高山来说，海平面点完全隐藏在数百米的岩石之下。
[Continue](btn:next)

---
> id: intro-2

::: column(width=320)

    x-img(src="images/hillary.jpg" width=320 height=190)

{.caption} 1953年，Edmund Hillary 和 Tenzing Norgay 率先登上了珠穆朗玛峰顶

::: column.grow
当然，还有更先进的几何技术，[Radhanath](bio:sikdar) 用它发现了地球上最高的山峰：现在叫做 _珠穆朗玛峰_ ，他的测量只比今天官方公布的 8848 米差几米。

在本课程中，你将学习三角形多种不同的特征和性质，你可以用它们来测量山峰高度，它们也是数学、科学与工程等众多领域的重要基础。
[Continue](btn:next)
:::

---
> id: applications

三角形之所以特别，因为它们特别 _稳固_ ，它们也是用于搭建木梁和铰链的唯一的一种多边形，非常稳固 —— 不像矩形，很容易被推倒。

{.todo} 即将推出 –动画

---
> id: applications-1

这个特性使得三角形在建筑中特别有用，它们可以承载比较大的重量。

::: column(width=200)
    x-img(src="images/truss-bridge.jpg" credit="© ykanazawa1999, Flickr" width=200 height=200 lightbox)

{.caption} “桁架桥” 由三角形杆件支撑

::: column(width=200)
    x-img(src="images/pylon.jpg" width=200 height=200 lightbox)

{.caption} 高压电塔中的三角形
::: column(width=200)
    x-img(src="images/bike.jpg" width=200 height=200 lightbox)

{.caption} 用于自行车稳定性的三角架
:::

---
> id: applications-2
> goals: video

三角形也是边最少的多边形，这使得它们特别适合复杂曲面，下面这些是在物理建筑中完成的…

::: column(width=200)
    x-img(src="images/st-mary.jpg" credit="Kunstlerbob, Wikipedia" width=200 height=200 lightbox)

{.caption} 伦敦一座呢称“小黄瓜”的摩天大楼
::: column(width=200)
    x-img(src="images/hk-bank.jpg" credit="WiNG, Wikipedia" width=200 height=200 lightbox)

{.caption} 位于香港的中国银行大厦
::: column(width=200)
    x-img(src="images/museum.jpg" credit="Andrew Dunn, Wikipedia" width=200 height=200 lightbox)

{.caption} 伦敦大英博物馆中的庭院
:::

::: column.grow
…同样在虚拟世界也很常见，在由计算机生成的图形（如电影或视频游戏）中，所有的表面都是由一个个小三角形组成的「网格」来近似达到的，为了能移动和变换这些逼真的三角形、计算颜色和纹理，艺术家和软件工程师需要了解几何学和三角学。
::: column(width=220)
    x-img(src="images/dolphin.jpg" width=220 height=135)
:::

    figure: x-video(src="https://static.mathigon.org/videos/tiger.mp4" poster="images/tiger.jpg" width=480 height=270 credit="© UCTV, The STEAM Channel")
    //- src: https://www.youtube.com/watch?v=Y9PYzdFsVio

---

## 三角形的性质

> id: angle-sum
> section: properties

让我们从最简单的开始：一个三角形是一个封闭形状，由三条边（这些边是 [线段](gloss:line-segment)）和三个顶点（边相交的[点](gloss:point)) 构成。三角形有三个 [内角](gloss:internal-angle) ，我们知道三个内角的和总是  [[180]]°。

---
> id: classification

我们可以根据内角大小对三角形进行分类：

::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a1" x="point(40,60)")
      circle(name="b1" x="point(40,140)")
      circle(name="c1" x="point(180,140)")
      path.fill.red(x="angle(a1,b1,c1)")
      path(x="polygon(a1,b1,c1)")

{.caption}  __直角三角形__
有一个 [直角](gloss:right-angle)
::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a2" x="point(30,30)")
      circle(name="b2" x="point(150,60)")
      circle(name="c2" x="point(190,190)")
      path.fill.blue(x="angle(c2,b2,a2)")
      path(x="polygon(a2,b2,c2)")

{.caption}  __钝角三角形__
有一个 [钝角](gloss:obtuse-angle)
::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a3" x="point(60,50)")
      circle(name="b3" x="point(30,180)")
      circle(name="c3" x="point(190,130)")
      path.fill.green(x="angle(a3,b3,c3)")
      path.fill.green(x="angle(b3,c3,a3)")
      path.fill.green(x="angle(c3,a3,b3)")
      path(x="polygon(a3,b3,c3)")

{.caption}  __锐角三角形__
有 [[三个]] [锐角](gloss:acute-angle)
:::

---
> id: labels

::: column.grow

为了方便起见，我们总是用统一的方式来标记三角形，顶点用大写字母 [_A_, _B_ 和 _C_](target:vertex) 来表示，边用小写字母 [_a_, _b_ 和 _c_](target:side) 来表示，角用希腊字母  [`α`, `β` 和 `γ`](target:angle) (读音：“alpha”, “beta”,
“gamma”) 来表示。

位于 [顶点 A 对面一侧的边](target:X) 标记为  _a_，[顶点两侧线所夹的角](target:Y) 标记为 `α`，对于 _B_/_b_/`β` 和  _C_/_c_/`γ` 也遵循同样的规定。

::: column(width=220)

    x-geopad(width=220 height=200): svg
      circle.move.red(name="a" cx=80 cy=30 label="A" target="vertex X Y")
      circle.move.blue(name="b" cx=30 cy=170 label="B" target="vertex")
      circle.move.green(name="c" cx=190 cy=150 label="C" target="vertex")
      path.red(x="angle(c,a,b).sup" label="α" target="angle Y")
      path.blue(x="angle(a,b,c).sup" label="β" target="angle")
      path.green(x="angle(b,c,a).sup" label="γ" target="angle")
      path.red(x="segment(b,c)" label="a" target="side X")
      path.blue(x="segment(a,c)" label="b" target="side")
      path.green(x="segment(b,a)" label="c" target="side")

:::

---
> id: medians
> goals: s0 s1 s2 move

### 中线

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line" projections="no"): svg
      circle.move(name="a" cx=75 cy=75 target="ratio")
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      path(x="triangle(a,b,c)")

      circle.green(name="ab" x="line(a,b).midpoint")
      circle.blue(name="ac" x="line(a,c).midpoint")
      circle.red(name="bc" x="line(b,c).midpoint" target="ratio")

      circle.yellow.reveal(name="d" x="triangle(a,b,c).centroid" when="blank-0" animation="pop" target="ratio")

      path.red.transparent(x="segment(a,d)" label="2" target="ratio")
      path.red.transparent(x="segment(d,bc)" label="1" target="ratio")

::: column.grow

这里你可以看到一个三角形以及它三条边的[中点](gloss:midpoint) 。

三角形的[__中线__](gloss:triangle-median)是指连接三角形每个顶点以及对边中点的线段。画出这个三角形的三条中线，_{span.reveal(when="s0 s1 s2")}当你移动三角形顶点的时候会发生什么呢？_

{.reveal(when="move")} 看起来中线总是 [[相交于一点|有同样的长度|从中间将其它两条中线分开]]，
_{span.reveal(when="blank-0")}这个点叫作
[__形心__](gloss:centroid)。_

{.reveal(when="blank-0")} 中线总是将其它两条中线按
[2:1 比率](target:ratio) 分开，对于每条中线来说，从顶点到形心的距离总是 [[两倍于|三倍于|相等于]] 形心到中点的距离。
:::

---
> id: center-of-mass

形心也是三角形的「平衡点」。在硬纸板上画一个三角形，把它剪下来，找出三条中线，只要画得准确，你就可以用铅笔顶起三角形纸板，或者把它悬挂在一根绳子上，这根绳子连着它的质心，三角形纸板都可以保持平衡：

    figure: img(src="images/center-of-mass.jpg" width=600 height=190)

这是因为三角形的重量平均分布在了形心的周围，在物理学中，这个点也叫做 __重心__。

    // Any straight line that goes through the centroid divides the triangle into two
    // parts that have exactly the same area. Move the [blue point](target:move) in the
    // figure on the right. The red and green areas will always have the same area.

    // x-geopad(width=220): svg
      circle.move(name="a" cx=70 cy=50)
      circle.move(name="b" cx=60 cy=160)
      circle.move(name="c" cx=180 cy=130)
      circle.yellow(x="triangle(a,b,c).centroid" name="d")
      circle.move.blue.pulsate(name="p" cx=50 cy=50 project="circle(point(110,110),100)" target="move")
      circle(hidden name="q" x="p.rotate(pi,d)")

      path.dark(x="triangle(a,b,c)" name="t")
      path.fill.green.light(x="t.intersect(polygon(p,q,p.rotate(pi/2,q),q.rotate(-pi/2,p)))")
      path.fill.red.light(x="t.intersect(polygon(p,q,p.rotate(-pi/2,q),q.rotate(pi/2,p)))")
      path.blue(x="line(p,d)")

---
> id: circumcircle
> goals: s0 s1 s2

### 垂直平分线与外接圆

::: column(width=300)

    x-geopad.sticky(tools="move|perpBisector" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75 label="A" target="b-blue b-red")
      circle.move(name="b" cx=50 cy=250 label="B" target="b-red")
      circle.move(name="c" cx=250 cy=200 label="C" target="b-blue")
      path(x="triangle(a,b,c)")

      circle.reveal.red(x="line(a,b).midpoint" when="blank-0")
      circle.reveal.blue(x="line(a,c).midpoint" when="blank-0")
      circle.reveal.green(x="line(b,c).midpoint" when="blank-0")

      circle.reveal.yellow(x="triangle(a,b,c).circumcircle.c" name="d" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(d,c,1.99*pi)" name="circumcircle")

::: column.grow

回想一下，一条线的[垂直平分线](gloss:perpendicular-bisector) 是指与这条线垂直且通它[[中点|终点]]的一条线。

{.reveal(when="blank-0")}画出旁边三角形三条边的垂直平分线。 _{.lgrey} 要绘制三角形一条边的垂直平分线，只需要单点一个端点并拖动到另一个端点。_

{.reveal(when="s0 s1 s2")}和之前一样，三条垂直平分线相交于一点，这个点也有一个特殊的性质。

{.reveal(when="s0 s1 s2")}垂直平分线上的任意一点到它所平分直线的两个端点的距离相等。例如，[蓝色平分线](target:b-blue)上的任意一点到点 _A_ 和 _C_ 的距离相等，[红色平分线](target:b-red)上的任意一点到点 [[A 和 B|A 和 C|B 和 C]]的距离相等。

{.reveal(when="blank-1")}[交点](target:center)位于三条垂直平分线上，因此它到三角形的三个[[顶点|边]]的距离必然相等。

{.reveal(when="blank-2")}这意味着我们可以以交点为圆心，过三个顶点作一个圆，这个圆叫做三角形的[__外接圆__](gloss:circumcircle)，外接圆的圆心叫 __外心__。
:::

---
> id: circumcircle-1

事实上，给定任意三个点，你都可以利用外心去找到一个过这三个点的圆（除非这三个点[[共线|平行]]，它们在一条直接线上。）

---
> id: incircle
> goals: s0 s1 s2

### 角平分线与内接圆

现在你可能已经掌握了窍门: 我们对三角形的每条边/每个角进行一种特定的划分，然后我们找出它们相交位置的特殊之处。

::: column(width=300)

    x-geopad.sticky(tools="move|angleBisector" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250 target="b-blue")
      circle.move(name="c" cx=250 cy=200 target="b-red")

      path.fill.light.red(x="angle(c,a,b).sup" name="xa")
      path.fill.light.blue(x="angle(a,b,c).sup" name="xb")
      path.fill.light.green(x="angle(b,c,a).sup" name="xc")

      path(x="segment(a,b)" label="a" target="b-blue b-red")
      path(x="segment(a,c)" label="b" target="b-red")
      path(x="segment(b,c)" label="c" target="b-blue")

      circle.reveal.yellow(x="triangle(a,b,c).incircle.c" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(triangle(a,b,c).incircle.c,triangle(a,b,c).incircle.at(0),1.999*pi)" name="incircle")

::: column.grow

回想一下，[角平分线](gloss:angle-bisector) 把一个角分成两个相等的角。画出旁边三角形三个角的角平分线，要画角平分线，你需要依次点击形成被平分那个角的三个点。

{.r.reveal(when="s0 s1 s2")} 三条平分线又再次相交于同一点，你可能也预料到会这样，但没有明显的理由表明为什么会这样 —— 三角形只是一种非常特殊的形状！
[Continue](btn:next)

{.reveal(when="next-0")} 位于角平分线上的点与构成角的两条直线之间的距离相等。例如，[蓝色角平分线](target:b-blue)上的任意点到边 _a_ 和边 _b_ 的距离相等，[红色平分线](target:b-red) 上的任意点到 [[a 和 b|a 和 c|b 和 c]] 边的距离相等。

{.reveal(when="blank-0")} [交点](target:center)位于三条平分线上，因此它到三角形的三条[[边|顶]] 距离相等。

{.reveal(when="blank-1")}这意味着我们可以以交点为圆心画一个圆，这个圆位于三角形的内部，刚好碰到它的三条边，这个圆叫做三角形的 __内切圆__，圆心叫做 __内心__。
:::

---
> id: area

### 面积与高线

::: column.grow
{.r} 求一个[矩形](gloss:rectangle) 的面积很简单：将它的宽和高相乘即可。求一个三角形的面积就不是那么明显了，让我们从「内嵌」在矩形中一个三角形开始。
_{button.next-step} 继续_

{.reveal.r(when="next-0")}矩形的宽与三角形的
[底边](target:base) 相等 (称为 __底__)，矩形的高是从三角形底到所对顶点的[垂直距离](target:height) 。
_{button.next-step} 继续_

{.reveal(when="next-1")} 高把三角形分为了两部分，需要注意的是矩形中的两个空白间隙恰好与三角形的两个部分一样大，这意味着这个长方形的面积正好是三角形的[[两倍|三倍|相等]] 。

{.reveal(when="blank-0")} 矩形的面积很容易知道，所以三角形的面积是:

{.text-center.reveal(when="blank-0")} `A = 1/2 ×` [{.pill.red} 底](target:base)
`×` [{.pill.blue} 高](target:height)
::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move(name="a" cx=40 cy=220)
      circle.move(name="b" cx=260 cy=220)
      circle.move(name="c" cx=190 cy=80)
      circle(hidden x="line(a,b).project(c)" name="d")
      circle(hidden x="a.add(c).subtract(d)" name="e")
      circle(hidden x="b.add(c).subtract(d)" name="f")

      path.fill.green.reveal(x="polygon(a,d,c)" when="next-1" target="gap")
      path.fill.green.transparent(x="polygon(a,e,c)" target="gap")

      path.fill.yellow.reveal(x="polygon(b,d,c)" when="next-1" target="gap")
      path.fill.yellow.transparent(x="polygon(b,f,c)" target="gap")

      path.dark(x="polygon(a,b,c)")
      path.red.reveal(x="polygon(a,b,f,e)" when="next-0" animation="draw")
      path.blue.reveal(x="segment(c,d)" label="height" when="next-0" delay="1000" target="height")
      path.blue.reveal(x="angle(c,d,b).sup" when="next-0" delay="1000" target="height")
      path.red.reveal(x="segment(a,b)" label="base" when="next-0" delay="1000" target="base")

:::

---
> id: altitudes

To calculate the area of a triangle, you can pick any of the three sides as
__base__, and then find the corresponding __height__, which is the line that is
[[perpendicular|parallel]] to the base and goes through the opposite vertex.

{.reveal(when="blank-0")} In triangles, these _heights_ are often called
[__altitudes__](gloss:triangle-altitude). Every triangle has [[three]] altitudes.

---
> id: altitudes-1

::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a" cx=75 cy=75 label="A")
      circle.move(name="b" cx=50 cy=250 label="B")
      circle.move(name="c" cx=250 cy=200 label="C")

      path(x="triangle(a,b,c)")
      path.altitude.red(hidden x="line(a,b).perpendicular(c)")
      path.altitude.blue(hidden x="line(a,c).perpendicular(b)")
      path.altitude.green(hidden x="line(b,c).perpendicular(a)")
      circle.yellow(hidden x="triangle(a,b,c).orthocenter" target="center")

::: column.grow
Like the [medians](gloss:triangle-median), [perpendicular
bisectors](gloss:perpendicular-bisector) and [angle
bisectors](gloss:angle-bisector), the three altitudes of a triangle
intersect in a single point. This is called the [__orthocenter__](target:center)
of the triangle.

In [acute triangles](gloss:acute-triangle), the orthocenter
[[lies inside|lies outside|is a vertex of]] the triangle.

{.reveal(when="blank-0")} In [obtuse triangles](gloss:obtuse-triangle), the
orthocenter [[lies outside|lies inside|is a vertex of]] the triangle.

{.reveal(when="blank-1")} In [right-angled triangles](gloss:right-triangle), the
orthocenter [[is a vertex of|lies inside|lies outside]] the triangle. Two of the
altitudes are actually just sides of the triangle.
:::

---

## 中位线与相似性

> section: midsegments
> sectionStatus: dev
> id: midsegments
> goals: s0 s1 s2

::: column(width=300)

    x-geopad.sticky(tools="move|line" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      circle.red(name="p" x="line(a,b).midpoint")
      circle.red(name="q" x="line(a,c).midpoint")
      circle.red(name="r" x="line(b,c).midpoint")
      path(x="triangle(a,b,c)")

      path.transparent.fill.red(x="polygon(a,p,q)" target="triangles")
      path.transparent.fill.blue(x="polygon(b,p,r)" target="triangles")
      path.transparent.fill.yellow(x="polygon(c,q,r)" target="triangles")
      path.transparent.fill.green(x="polygon(p,q,r)" target="triangles")
      path.transparent.fill.red(x="polygon(a,b,c)" target="large")

::: column.grow
A [__midsegment__](gloss:triangle-midsegment) is a line segment that connects
the midpoints of two sides of a triangle. Draw the three midsegments of this
triangle.

{.reveal(when="s0 s1 s2")} As you can see, the midsegments split the triangle
into [four smaller triangles](target:triangles).

{.reveal(when="s0 s1 s2")} It turns out that all of these smaller triangles are
[[congruent|overlapping|different sizes]] – even the upside down one in the
middle. _{span.reveal(when="blank-0")} They are also all [[similar|congruent]]
to the [original triangle](target:large),_ _{span.reveal(when="blank-1")}with a
scale factor of `1/2`._

{.reveal(when="blank-1")} This allows us to deduce some important facts about
the midsegments of triangles:

::: .theorem.reveal(when="blank-1")
__Midsegment Theorem__
A midsegment of a triangle is parallel to its opposite side, and exactly half
the length of that side.
:::
:::

---

{.todo} COMING SOON – More on triangle midsegments, and how they relate to
similarity and proportionality.

---

## 三角形全等

> id: sss-construction
> section: congruence
> goals: draw-base draw-c1 draw-c2

现在我们来检查给定三条边是否可以构成一个三角形，让我们来想一下是如何通过这些边构造三角形的。
::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line|circle"): svg

::: column.grow
{.task} 画一个边长分别为4厘米、5厘米和6厘米的三角形。

{.r} 在旁边这个长方框内，先画出三角形__6厘米__的最长边。_{span.reveal(when="draw-base")} 现在我们已经得到三角形三个顶点中的其中[两个](target:base)顶点了 -- 接下来的挑战是找到最后一个顶点。
*{button.next-step} 继续*_

{.reveal(when="next-0")} 以其中一个顶点为圆心画一个半径为__4厘米__的圆，_{span.reveal(when="draw-c1")} 以另一个顶点为圆心画再画一个半径为__5厘米__的圆。_

{.reveal(when="draw-c2")} 三角形的第三个顶点是两个圆的 [[交点|中心|半径]]。 _{span.reveal(when="blank-0")}
现在我们简单的将顶点连接起来就形成了一个三角形。_

{.reveal(when="blank-0" delay="3000")} 两个圆实际上相交了[[两次|三次|无限多次]]：_{span.reveal(when="blank-1")}一次[在顶部](target:top)相交，一次[在底部](target:bottom)相交，我们可以选择其中一个，这两个三角形是[[全等|等边|垂直]]。_
:::

---
> id: congruence

### 全等的条件

有没可能构造一个 _不同的_ 三角形，其三条边与已知三角形均相等呢？

我们刚刚在上面已经看到两个不同的三角形，但它们是全等的，事实上，任何两个边长相同的三角形都是全等的。这就是三角形 [SSS全等条件](gloss:triangle-sss)，SSS代表（边-边-边：Side-Side-Side）。

有两个针对三角形的条件："AA"表示两个三角形[[相似|全等|平移变换]]，"SSS"表示[[全等|相似|相同]]。下面有几个全等的条件：

---
> id: congruence-1

::: .theorem
如果两个三角形满足以下任何一个条件，就说它们全等：

    .row.padded-thin
      div(style="width: 150px")
        .text-center: strong SSS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="segment(a,b)")
          path.red(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption 所有边均相等

      div(style="width: 150px")
        .text-center: strong SAS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption 两条边及它们的#[strong 夹角]相等

      div(style="width: 150px")
        .text-center: strong ASA
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(c,a,b)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption 两个角及它们的#[strong 夹边]相等

      div(style="width: 150px")
        .text-center: strong AAS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(b,c,a)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption 两个角及它们的夹边之外的一条边相等
:::

---
> id: cpoct

你可以把这些条件看作是检查两个三角形是否全等的「捷径」 ，只需要检查是否满足上面其中的一个条件。

一旦你 _知道_ 两个三角形是全等的，你就知道它们所有对应的边和角都是相等的，这通常被称为[__CPOCT__](gloss:cpoct) ，或 "Corresponding Parts of Congruent Triangles are Congruent"（全等三角形对应的各分部分也全等）。

值得注意的是，所有的条件要么由边要么角来组成的 ！

---
> id: contruction

### Constructing Triangles

在本章的开头我们知道，如果已知三条形，我们就可以去构造一个三角形，类似地，如果知道上面的全等条件其中任意一个，我们也可以构造出三角形。

::: tab
#### SAS

::: column(width=300)
{.todo} 即将推出 – 动画
::: column.grow
{.task} 画出边长为5厘米，4厘米，并且它们之间的夹角为40°的三角形。

像之前一样，我们从画三角形的一条边（比如说5厘米的边）开始。

接下来，以刚画的这条边其中一个端点为准，用量角器测量40°的角度，用一个点来进行标注。

我们可以把端点与新的这个点连接起来，画出第二条边。

我们知道这条边为3厘米，因此用直尺进行测量并标出三角形的第三个顶点。

最后，我们可以连接最后两个顶点，完成三角形的构造。
:::

当然，我们也可以先画出3厘米的边，或者选择另一个顶点来画40°角，不过所有这些选择画出的三角形都应该是全等的。

::: tab
#### ASA

::: column(width=300)
{.todo} 即将推出 – 动画
::: column.grow
{.task} 画一个三角形，有两个角的角度为70°和50°，它们的夹边为5厘米。

使用尺子测量5厘米，先画出第一条边。

以刚画的边其中一个端点为准，用量角器进行测量70°的角，在另一个端旁测量50°的角（只要在同一侧，具体哪边不重要，因为得到的三角形是全等的）。

将所画边的端点与刚刚测量角时标记的点连接起来，就可以得到一个三角形。
:::

::: tab
#### AAS

::: column(width=300)
{.todo} 即将推出 – 动画
::: column.grow
{.task} Draw the triangle that has angles of 40° and 50°, and an included
side of length 5cm.
画出角度为40° 和 50°

Again, we’ll start by constructing the first side of the triangle, which is 5cm
long.

And again, we’ll use a protractor to measure an angle of 40° around one of the
endpoints, and draw the second side of the triangle. However, we don’t yet know
where this side will end.

Instead, let’s pick any point around this line, pretend it’s the third vertex of
the triangle and measure an angle of 50°.

As you can see, this doesn’t quite work: the third side does not yet link up
with the vertex A. To fix this, we simply have to shift it: we draw a parallel
line that goes through A. (You already learned how to construct parallel lines
in a [previous course](/course/euclidean-geometry/geometric-construction).)

Now the two angles at the top are alternate angles, so they must be congruent
and both 50°. We can erase the incorrect, first line to get our completed AAS
triangle.
:::

::: tab
#### SSA
The SSA construction is slightly different. You might have noticed that “SSA”
was not in the list of congruence conditions above, so comparing SSA is two
triangles is not enough to confirm they are congruent. This will show you why:

::: column(width=300)
{.todo} COMING SOON – Animation
::: column.grow
{.task} Draw the triangle that has sides of 4cm and 5cm, and a non-included
angle of 50°.

Like always, let’s start by drawing the first side of the triangle which is 5cm
long.

Next, let’s measure an angle of 50° around one of the endpoints and draw the
second side of the triangle. However, we don’t yet know where this side will
end.

The third side has o be 4cm long. Using a protractor we can draw a circle of
radius 4cm around the other endpoint of the original side.

The final vertex of the triangle is formed by the intersection of the circle and
the second line. However, in this case, there are two intersections!

These two triangles are clearly not congruent. This means that there are two
different triangles that have sides of 4cm and 5cm, as well as a non-included
angle of 50°. SSA is not enough to confirm two triangles are congruent.
:::
:::

---

## 毕达哥拉斯定理

> id: pythagoras
> section: pythagoras

现在我们来到几何学中一个非常重要的内容 -- 理解数学中最著名的 [定理](gloss:theorem) 之一：__毕达哥拉斯定理__，该定理是以古希腊数学家[毕达哥拉斯](bio:pythagoras)命名的。

::: .theorem
::: column.grow
__毕达哥拉斯定理__
在任意直角三角形中，[__斜边__](target:hypot) (与直角相对的一边)长度的平方等于另外两边的平方和，换句话说，

{.text-center} _{span.circled.green}`a^2`_ + _{span.circled.blue}`b^2`_ =
_{span.circled.yellow}`c^2`_

_反之亦然：如果三角形的三条边满足 `a^2 + b^2 = c^2`，它一定是 [[直角|锐角|钝角]]三角形_
::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a" cx=82 cy=160 target="hypot")
      circle.move(name="b" cx=218 cy=160 target="hypot")
      circle.move(name="c" cx=120 cy=100 project="arc(line(a,b).midpoint,a,pi).contract(0.2)")

      path.fill.green(x="polygon(b,c,b.rotate(-pi/2,c),c.rotate(pi/2,b))" label="a²" label-class="white")
      path.fill.blue(x="polygon(c,a,c.rotate(-pi/2,a),a.rotate(pi/2,c))" label="b²" label-class="white")
      path.fill.yellow(x="polygon(b,a,b.rotate(pi/2,a),a.rotate(-pi/2,b))" label="c²" label-class="white")

      path.dark(x="segment(b,c)" label="a")
      path.dark(x="segment(a,c)" label="b")
      path.dark(x="segment(a,b)" label="c" target="hypot")
      path.dark.thin(x="angle(b,c,a)")

:::
:::

---
> id: pythagoras-1

::: column(width=220)

    img(src="images/ladder.svg" width=220 height=300)

::: column.grow
直角无处不在，这也是为什么毕达哥拉斯定理如此有用的原因。

在这里你可以看到一个 __{.m-red}6米__ 长的梯子斜靠在墙边，梯子的底离墙有 __{.m-blue}1米__ 远，问墙底到梯子顶部有多远？

注意，梯子、墙壁和地面组成了一个直角三角形，运用毕达哥拉斯定理，可以得到

    //- Ideal syntax:
    //- | `green(h^2) + blue(1^2)` | `red(6^2)`          |
    //- |          `=> green(h^2)` | `= blank(35)`       |
    //- |            `=> green(h)` | `= sqrt(35) = 5.92` |

    table.eqn-system
      tr
        <td><mrow class="b m-green"><msup><mi>h</mi><mn>2</mn></msup></mrow><mo>+</mo><mrow class="b m-blue"><msup><mn>1</mn><mn>2</mn></msup></mrow></td>
        <td><mo>=</mo><mrow class="b m-red"><msup><mn>6</mn><mn>2</mn></msup></mrow></td>
      tr
        <td><mo>⇒</mo><mrow class="b m-green"><msup><mi>h</mi><mn>2</mn></msup></mrow></td>
        <td><mo>=</mo><x-blank-input solution="35"></x-blank-input></td>
      tr.reveal(when="blank-0")
        <td><mo>⇒</mo><mrow class="b m-green"><mi>h</mi></mrow></td>
        <td><mo>=</mo><msqrt><mn>35</mn></msqrt><mo>=</mo><mn>5.92米</mn></td>

:::

{.reveal(when="blank-0")} 任意情况下，只要你有一个直角三角形，并且知道它的两条边，毕达哥拉斯定理可以帮你得到第三条边。

---
> id: pythagoras-proof

### 证明毕达哥拉斯定理

毕达哥拉斯定理为古巴比伦人、美索不达米亚人、印度人和中国人所熟知，但毕达哥拉斯可能是第一个从数学上正式证明它的人。

事实上有许多不同的方法来证明毕达哥拉斯定理，这里我们来看其中三个，每一个都使用了不同的策略来完成证明：

::: tab.proof-1

#### 重新组合 _{span.check(when="blank-0 blank-1")}_

::: column.grow

看看右图，正方形的边长为 _a_ + _b_ ，它里面包含[四个直角三角形](target:triangle)，以及一个面积为[[<msup><mi>c</mi><mn>2</mn></msup>|_a_ – _b_|_a_ + _b_]]的[小正方形](target:square) 。

{.reveal(when="blank-0")} 现在让我们对正方形中的三角形进行重新组合，结果仍然包含这四个直角三角形，以及两个面积大小为 [[<msup><mi>a</mi><mn>2</mn></msup> and <msup><mi>b</mi><mn>2</mn></msup>|<msup><mi>c</mi><mn>2</mn></msup>|<msup><mfenced><mi>a</mi><mo>+</mo><mi>b</mi></mfenced><mn>2</mn></msup>]] 的正方形。

{.reveal(when="blank-1")} 比较重组 _{span.hover-target}前_ 和重组 _{span.hover-target}后_ 红色区域的面积大小，我们可以看到：

{.text-center.reveal(when="blank-1")} `a^2 + b^2 = c^2`.

{.reveal(when="blank-1")} 这是[毕达哥拉斯](bio:pythagoras) 的原始证明。_{span.qed}_

::: column(width=240)

    x-geopad(width=240)
      svg
        circle(hidden name="a" x="point(20,20)")
        circle(hidden name="b" x="point(220,20)")
        circle(hidden name="c" x="point(220,220)")
        circle(hidden name="d" x="point(20,220)")

        circle.move(name="e" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
        circle(name="f" hidden x="b.add(e.subtract(a).flip)")
        circle(name="g" hidden x="c.subtract(e.subtract(a))")
        circle(name="h" hidden x="d.subtract(e.subtract(a).flip)")

        path.thin(x="segment(a,e)" label="a")
        path.thin(x="segment(e,b)" label="b")
        path.thin(x="segment(a,h)" label="b")
        path.thin(x="segment(h,d)" label="a")
        path.thin(x="segment(e,h)" label="c")
        path.thin(x="segment(e,f).shift(0,x*distance(h,a))" label="c")

        path.square(x="polygon(a,b,c,d)")
        path.tri(x="polygon(a,e,h)" target="triangle")
        path.tri(x="polygon(c,g,f).shift(-x*distance(d,g),-x*distance(b,f))" target="triangle")
        path.tri(x="polygon(d,h,g).shift(x*distance(e,a),0)" target="triangle")
        path.tri(x="polygon(b,f,e).shift(0,x*distance(h,a))" target="triangle")
        path.square.transparent(x="polygon(e,f,g,h)" target="square")

      .label(style="left: 120px; top: 120px;") c²
      .label.var(style="left: ${10 + e.x/2}px; top: ${230 - e.x/2}px;") a²
      .label.var(style="left: ${110 + e.x/2}px; top: ${130 - e.x/2}px;") b²

    x-slider(steps=100)

:::
::: tab.proof-2

#### 代数 _{span.check(when="blank-2 blank-3 blank-4")}_

::: column.grow

这里我们有一幅一样的图，但这次我们将使用 _代数_ 而不是 _重新排列_ 来证明毕达哥拉斯定理。

大正方形边长为 `a + b` ，面积为 [[(_a_ + _b_)<sup>2</sup>|_a_<sup>2</sup> + _b_<sup>2</sup>|_c_<sup>2</sup>]]。

{.reveal(when="blank-2")} 大正方形由四个三角形以一个小正方形组成，每个三角形的面积为 [[<mfrac><mn>1</mn><mn>2</mn></mfrac>_ab_|(_a_ × _b_)<sup>2</sup>|<mfrac><mn>1</mn><mn>2</mn></mfrac>(_a_ + _b_)]]，小正方形的面积为 [[_c_<sup>2</sup>|(_a_ + _b_)<sup>2</sup>|_a_ × _b_]]。


{.reveal(when="blank-3 blank-4")} 如果把这些信息结合起来，可以得到：

    //- Ideal syntax:
    //- |         `(a+b)^2` | `= 4 xx 1/2ab + c^2` |
    //- | `a^2 + 2ab + b^2` | `= 2ab + c^2`        |
    //- |       `a^2 + b^2` | `= c^2`              |

    table.eqn-system.reveal(when="blank-3 blank-4")
      tr
        <td><msup><mfenced><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></mfenced><mn>2</mn></msup></td>
        <td><mo>=</mo><mn>4</mn><mo>×</mo><mfrac><mn>1</mn><mrow><mn>2</mn></mfrac><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup></td>
      tr
        <td><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mrow><mn>2</mn><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><mrow><mn>2</mn><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup></td>
      tr
        <td><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></td>

{.reveal(when="blank-3 blank-4")} 我们再一次证明了毕达哥拉斯定理。
_{span.qed}_

::: column(width=240)

    x-geopad(width=240): svg
      circle.move(name="e1" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
      circle(name="f1" hidden x="b.add(e1.subtract(a).flip)")
      circle(name="g1" hidden x="c.subtract(e1.subtract(a))")
      circle(name="h1" hidden x="d.subtract(e1.subtract(a).flip)")

      path.thin(x="segment(a,e1)" label="a")
      path.thin(x="segment(e1,b)" label="b")
      path.thin(x="segment(a,h1)" label="b")
      path.thin(x="segment(h1,d)" label="a")
      path.thin(x="segment(e1,h1)" label="c")
      path.thin(x="segment(e1,f1).shift(0,x*distance(h,a))" label="c")

      path.square(x="polygon(e1,f1,g1,h1)" target="square")
      path.tri(x="polygon(a,e1,h1)" target="triangle")
      path.tri(x="polygon(c,g1,f1)" target="triangle")
      path.tri(x="polygon(d,h1,g1)" target="triangle")
      path.tri(x="polygon(b,f1,e1)" target="triangle")

:::
::: tab.proof-3

#### 相似三角形 _{span.check(when="next-0 next-1 next-2 blank-5")}_

::: column.grow

{.r} 这里你可以看到一个直角三角形，画出它的高，高将其分成两个小三角形，也将三角形的斜边 _c_ 分成 [两小段](target:hypotenuse)，分别命名为 [{.i.pill.blue}x](target:x) 和 [{.i.pill.green}y](target:y)。
_{span.next-step} 继续_

{.r.reveal(when="next-0")} 让我们把两个小三角形分开，这样可以更清楚地看到它们之间的关系...
_{span.next-step} 继续_

{.reveal(when="next-1")} 两个小三角形与原来的三角形有一个[共用角](target:angle)，它们都有[一个直角](target:right)，根据 AA 条件判定，这里的三个三角形一定 [[相似|全等|为直角的]]。

::: column(width=260)

    x-geopad.similar-triangle(width=260): svg
      circle(name="B1" hidden cx=40 cy=100)
      circle(name="X1" hidden cx=170 cy=100)
      circle(name="C1" hidden cx=170 cy=20)
      path.fill.light.red(x="polygon(B1,X1,C1)")
      path.fill.yellow(x="angle(C1,B1,X1).sup" size=25 target="angle")
      path.dark.thin(x="angle(B1,X1,C1).sup" size=10 target="right")
      path.red(x="segment(B1,C1)" label="a" target="a ac")
      path.dark(x="segment(X1,C1)")
      path.blue(x="segment(X1,B1)" label="x" target="x xa")

      circle(name="A2" hidden cx=220 cy=100)
      circle(name="X2" hidden cx=170 cy=100)
      circle(name="C2" hidden cx=170 cy=20)
      path.fill.light.yellow(x="polygon(A2,X2,C2)")
      path.fill.red(x="angle(C2,A2,X2).sup" size=20 target="angle")
      path.dark.thin(x="angle(A2,X2,C2).sup" size=10 target="right")
      path.yellow(x="segment(A2,C2)" label="b" target="b bc")
      path.dark(x="segment(X2,C2)")
      path.green(x="segment(X2,A2)" label="y" target="y yb")

      circle(name="A" hidden x="point(220,100)")
      circle(name="B" hidden x="point(40,100)")
      circle(name="C" hidden x="point(170,20)")
      circle(name="X" hidden x="point(170,100)")
      path.dark(x="segment(X,C)" target="altitude")
      path.dark.thin(x="angle(B,X,C)" size=10 target="altitude")
      path.fill.yellow(x="angle(C,B,X)" size=25 target="angle")
      path.fill.red(x="angle(X,A,C)" size=20 target="angle")
      path.dark.thin(x="angle(A,C,B)" size=10 target="right")
      path.red(x="segment(B,C)" label="a" target="a xa")
      path.yellow(x="segment(A,C)" label="b" target="b yb")
      path.blue(x="segment(B,X)" label="x" target="hypotenuse x ac bc")
      path.green(x="segment(X,A)" label="y" target="hypotenuse y ac bc")

:::

{.reveal(when="blank-5")} 现在我们可以使用我们已经知道的相似三角形公式：

    table.proof-table.reveal(when="blank-5")
      tr
        td
          <p class="text-center"><mrow class="step-target pill blue" data-to="xa"><mfrac><mi>x</mi><mi>a</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill red" data-to="ac"><mfrac><mi>a</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill blue" data-to="x">x</mi><mo>=</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>c</mi></mfra></p>
        td
          <p class="text-center"><mrow class="step-target pill green" data-to="yb"><mfrac><mi>y</mi><mi>b</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill yellow" data-to="bc"><mfrac><mi>b</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill green" data-to="y">y</mi><mo>=</mo><mfrac><msup><mi>b</mi><mn>2</mn></msup><mi>c</mi></mfra></p>

{.r.reveal(when="blank-5")} _{span.next-step} 继续_

{.reveal(when="next-2")} 而 _c_ = [{.i.pill.blue}x](target:x) +
[{.i.pill.green}y](target:y)，因此

{.text-center.reveal(when="next-2")} `c = a^2/c + b^2/c`

{.text-center.reveal(when="next-2")} `c^2 = a^2 + b^2`

{.reveal(when="next-2")} 我们再一次证明了毕达哥拉斯定理 _{span.qed}_

:::

---
> id: pythagoras-2

关于毕达哥拉斯的生平很多是未知的，也没有什么原始的作品留存下来，他创立了一个宗教学派 -- _毕达哥拉斯学派_ ，对数字痴迷到几近崇拜，他们认为所有的数字都有其自身的特性，并遵循着各种奇怪的习俗。

::: column.grow

毕达哥拉斯学派有许多数学发现，包括发现第一个 [无理数](gloss:irrational-numbers)：`sqrt(2)`。无理数不能用简单的分数来表示 -- 毕达哥拉斯学派发现了这个令人不安的概念，并试图掩盖它（但没有成功）！

::: column(width=400)

    x-img(src="images/pythagoreans.jpg" width=400 height=200 lightbox)

{.caption} “Pythagoreans celebrate sunrise” by Fyodor Bronnikov

:::

---
> id: distance-formula

### 计算距离

毕达哥拉斯定理一个重要的应用就是计算距离。

::: column.grow
{.r} 在右侧你可以看到坐标系中有两个点，我们可以用尺子测量它们的距离，但这并不是特别准确，但我们可以使用毕达哥拉斯定理。
_{span.next-step} 继续_

{.reveal(when="next-0")} 我们可以很容易计算出沿 x 轴的 [水平距离](target:dx)和沿 y 轴的 [垂直距离](target:dy)，如果画出这两条线，我们就得到了一个[直角三角形](target:triangle)。

{.reveal(when="next-0")} 利用毕达哥拉斯定理，

    table.eqn-system.reveal(when="next-0")
      tr
        <td><msup><mi>d</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><msup><mn class="step-target pill blue var" data-to="dx">${b.x-a.x}</mn><mn>2</mn></msup><mo>+</mo><msup><mn class="step-target pill red var" data-to="dy">${b.y-a.y}</mn><mn>2</mn></msup></td>
      tr
        <td><msup><mi>d</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><mn class="var">${(b.x-a.x)*(b.x-a.x) + (b.y-a.y)*(b.y-a.y)}</mn></td>
      tr
        <td><mi>d</mi></td>
        <td><mo>=</mo><msqrt><mn class="var">${(b.x-a.x)**2+(a.y-b.y)**2}</mn></msqrt><mo>=</mo><mn class="var">${round(distance(a,b),4)}</mn></td>

::: column(width=300)

    x-geopad(width=300 height=300 x-axis="-0.5,11.5,1" y-axis="-0.5,11.5,1" grid snap): svg
      circle.move.pulsate(name="a" cx="2" cy="5" label="(${a.x},${a.y})")
      circle.move.pulsate(name="b" cx="9" cy="10" label="(${b.x},${b.y})")
      path(x="segment(a,b)" label="d")
      path.blue.reveal(x="segment(a,point(b.x,a.y))" label="${b.x-a.x}" mark="arrow" when="next-0" target="dx")
      path.red.reveal(x="segment(point(b.x,a.y),b)" label="${b.y-a.y}" mark="arrow" when="next-0" target="dy")
      path.yellow.fill.transparent#tri-move(target="triangle" x="polygon(a,b,point(b.x,a.y))")

:::

---
> id: distance-formula-1

这个方法适用于计算 _任意_ 两点之间的距离：

::: .theorem
__距离公式__
如果给定两个坐标点 (`x_1`,`y_1`) 和 (`x_2`,`y_2`)，它们之间的距离是

{.text-center} `d^2=(x_2−x_1)^2+(y_2−y_1)^2`

{.text-center} `d=sqrt((x_2−x_1)^2+(y_2−y_1)^2)`
:::

---
> id: pythagorean-triples

### 毕达哥拉斯三元组

当你移动[三角形的顶点](->#tri-move)时，可能已经注意到，大多数情况下，斜边 _d_ 的长度为 [[小数|分数|整数]]。
_{span.reveal(when="blank-0")}然而，有几个直角三角形的例子，它们*三条边*的长度恰好是*整数*。_

---
> id: pythagorean-triples-1

::: column.grow
一个著名的例子是 3-4-5 三角形，由于 `3^2 + 4^2 = 5^2`，因此边长为3，4，5的三角形一定是直角三角形。

古埃及人不知道毕达哥拉斯定理，但他们知道 3-4-5 三角形。在建造金字塔的时候，他们使用的就是长度为3，4，5的打结绳来测量完美直角。
::: column(width=400)

    img(src="images/egypt.png" width=400 height=220)

:::

像这样的三个整数就叫做[__毕达哥拉斯三元数__](gloss:pythagorean-triple)（中文里又叫勾股数），(3, 4, 5)就是一组毕达哥拉斯三元数，如果把每个数字乘以2，我们可以得到另一个毕达哥拉斯三元数：(6, 8, [[10]])。

---
> id: pythagorean-triples-grid
> goals: p0 p1 p2 p3 p4 p5

我们可以把这些三元数看作坐标系中的网格点，对于一个有效的毕达哥拉斯三元组来说，从原点到网格点的距离必须是整数，在下面的坐标系中，你能找到其它的毕达哥拉斯三元组吗？

    figure: x-geopad.r.no-background(width=450 height=450 x-axis="0,16.5,1" y-axis="0,16.5,1" grid axes padding="10 10 25 25" snap)
      svg
        circle.move.pulsate(cx=4 cy=10 name="a")
        path.thick(x="polygon(point(0,0),a,point(a.x,0))")
      .label.var(style="left:${26+12.5*a.x}px; top:425px") ${a.x}
      .label.var(style="left:${26+25*a.x}px; top:${425-12.5*a.y}px") ${a.y}
      .label.var(style="left:${26+12.5*a.x}px; top:${425-12.5*a.y}px") ${round(a.length,2)}

{.reveal(when="p0 p1 p2 p3 p4 p5")} 你注意到这些点的分布有什么规律吗？

    // The mathematician Euclid found a clever method for generating new
    // Pythagorean triples. First, we need to pick any two integers _m_ and _n_:
    // {.text-center} _m_ = ${m}{m|2|1,20,1} _{span.space}_ _n_ = ${n}{n|2|1,20,1}
    // Now we can calculate the three numbers that make up the triple:
    // {.text-center} `2mn =` ${2×m×n}, `m^2 - n^2 =` ${m×m-n×n},  `m^2 + n^2 =` ${m×m+n×n}
    // And there you have your pythagorean triple! You can check that a2 + b2 = c2.

----

## 等腰与等边三角形

> id: isosceles
> section: isosceles-and-equilateral
> sectionStatus: dev

Other then right-angled triangles, there are a few other triangles with
special properties. In this section we’ll have a look at some of them.

### Isosceles Triangles

We say that a triangle is [__isosceles__](gloss:isosceles-triangle) if it has
two congruent sides. These congruent sides are called the __legs__ of the
triangle, while the third side is called the __base__.

{.todo} COMING SOON – Base angles theorem
Proof by constructing angle bisector and using SAS result.

{.todo} COMING SOON – Find the height of an Isosceles Triangles using Pythagoras

    // {.todo} The angles between the base and the congruent sides are
    // called base angles. The angle made by the two legs of the isosceles triangle is
    // called the vertex angle.
    //
    // {.todo} Base Angles Theorem: The base angles of an isosceles triangle are congruent.
    // To prove the Base Angles Theorem, we will construct the angle bisector through
    // the vertex angle of an isosceles triangle.
    //
    // {.todo} Isosceles Triangle Theorem: The angle bisector of the vertex angle in an
    // isosceles triangle is also the perpendicular bisector to the base.
    //
    // {.todo} The converses of the Base Angles Theorem and the Isosceles Triangle Theorem are
    // both true. If two angles in a triangle are congruent, then
    // the opposite sides are also congruent. And if the perpendicular bisector of the base of
    // an isosceles triangle is also the angle bisector of the vertex angle.
    //
    // {.todo} In other words, if △ABC is isosceles, AD⊥CB and CD≅DB, then ∠CAD≅∠BAD.
    //
    // {.todo} Find the Height of an Isosceles Triangle
    // One way to use The Pythagorean Theorem is to identify the heights in isosceles
    // triangles so you can calculate the area.

---
> id: equilateral

### Equilateral Triangles

We say that a triangle is [__equilateral__](todo:equilateral-triangle) if all of
its sides  have the same length. You’ve [already
seen](/course/euclidean-geometry/geometric-construction) how to construct an
equilateral triangle using straight-edge and compass.

    // Any equilateral triangle is always also isosceles. From the base angle theorem
    // we know that angles opposite congruent sides in a triangle are also congruent.
    // In an equilateral triangle, all of the sides are congruent, so all of the angles
    // must also be congruent.
    //
    // Since we know that the sum of all three angles is 180°, every individual angle
    // in an equilateral triangle must be [[60]]°.

{.todo} COMING SOON – Size of angles in an equilateral triangle

{.todo} COMING SOON – Area of an equilateral triangle

----

## 三角函数

> id: trigonometry
> section: trigonometry

到目前为止，我们已经知道了三角形_角_之间的关系（例如，角的总和为180°）及_边_之间的关系（例如，毕达哥拉斯定理），但是没有任何东西将角和边的大小 _关联_ 起来。

举个例，如果我们知道一个三角形的三条边，如何在不使用量角器测量的情况下，找到三角形角的大小？这就是 __三角函数__ 的用武之地！

    figure: img(src="images/trig-om-nom.jpg" width=200 height=200)

---
> id: trigonometry-1

::: column.grow
假设我们有一个直角三角形，并且已经知道除直角外的两个角其中一个的角度 __{.m-red}α__。我们已经知道最长的一条边叫[__{.m-yellow}斜边__](target:hyp)，另外两条边通常被称为[__{.m-green}邻边__](target:adj)（紧挨__{.m-red}α__的边）和[__{.m-blue}对边__](target:opp)（正对__{.m-red}α__的边）。
::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="斜边" target="hyp")
      path.blue(x="segment(b,c)" label="对边" target="opp")
      path.green(x="segment(a,c)" label="邻边" target="adj")

:::

拥有角__{.m-red}α__ 和 90°的三角形有很多个，从[AA 条件判定](gloss:triangle-aa)来看，我们知道这些三角形[[相似|全等]]：

    figure: img(src="images/triangles.svg" width=600 height=240)

---
> id: trig-functions

Since all of these triangles are similar, we know that their sides are
proportional. In particular, the following ratios are the same for all of these
triangles:
所有这些三角形都是相似的，所以我们知道它们的边是成比例的，下面的这些比率对于所有这些三角形都是相等的：

    p.text-center
      mfrac
        mrow: mtext.m-blue.b 对边
        mrow: mtext.m-yellow.b 斜边
      span.space
      mfrac
        mrow: mtext.m-green.b 邻边
        mrow: mtext.m-yellow.b 斜边
      span.space
      mfrac
        mrow: mtext.m-blue.b 对边
        mrow: mtext.m-green.b 邻边

我们来总结一下：我们选择了一个特定的值 __{.m-red}α__，得到许多相似的直角三角形，所有这些三角形对应边的比率都相等，既然 __{.m-red}α__ 是唯一的变量，那么在 __{.m-red}α__ 和比率之间一定存在某种关系。

这些关系就是 __三角函数__，共有三个：

::: .theorem
这三个三角函数是直角三角形中角与边的比率之间的关系，分别有一个名字，用三个字母的缩写来表示：

::: column.grow

    ul
      li.display
        strong 正弦:
        .space
        mtext sin
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b 对边
          mrow: mtext.m-yellow.b 斜边
      li.display
        strong 余弦:
        .space
        mtext cos
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-green.b 邻边
          mrow: mtext.m-yellow.b 斜边
      li.display
        strong 正切:
        .space
        mtext tan
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b 对边
          mrow: mtext.m-green.b 邻边

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="斜边")
      path.blue(x="segment(b,c)" label="对边")
      path.green(x="segment(a,c)" label="邻边")

:::
:::

---
> id: trig-functions-1

{.todo} 即将推出 – 更多关于三角函数的内容

    // {.todo} COMING SOON – Abbreviations: sin x, cos y
    // {.todo} COMING SOON – Using calculators
    // {.todo} COMING SOON – Examples
    // {.todo} COMING SOON – Rationalize the denominator

---
> id: inverse-trig

### 反三角函数

{.todo} 即将推出 – 反函数

    // The word inverse is probably familiar to you. In mathematics, once you learn how
    // to do an operation, you also learn how to “undo” it. For example, you may
    // remember that addition and subtraction are considered inverse operations.
    // Multiplication and division are also inverse operations. In algebra you used
    // inverse operations to solve equations and inequalities. When we apply the word
    // inverse to the trigonometric ratios, we can find the acute angle measures within
    // a right triangle. Normally, if you are given an angle and a side of a right
    // triangle, you can find the other two sides, using sine, cosine or tangent. With
    // the inverse trig ratios, you can find the angle measure, given two sides.

    // On most scientific and graphing calculators, the buttons look like
    // [SIN−1],[COS−1], and [TAN−1]. Typically, you might have to hit a shift
    // button to access these functions.

---

## 正弦与余弦定理

> section: sine-cosine-rule
> id: sine-cosine-rule

到目前为止，你所学到的关于三角学的知识只能用在直角三角形上，但大多数三角形并不是直角三角形，这里有两个对所有三角形都适用的重要结论

::: column.grow
::: .theorem
__正弦定理__
对于具有边 _a_， _b_ 和 _c_ 以及角_A_， _B_ 和 _C_ 的三角形来说，满足：

{.text-center} `(sin(a))/a = (sin(b))/b = (sin(c))/c`
:::

    // {.todo} Use Law of Sines when given:
    // An angle and its opposite side.
    // Any two angles and one side.

::: column.grow
::: .theorem
__余弦定理__
对于具有边 _a_， _b_ 和 _c_ 以及角_A_， _B_ 和 _C_ 的三角形来说，满足：

{.text-center} `c^2 = a^2 + b^2 - 2ab cos(C)`
`b^2 = c^2 + a^2 - 2ca cos(B)`
`a^2 = b^2 + c^2 - 2bc cos(A)`
:::

    // {.todo} Even though there are three formulas, they are all very similar. First, notice
    // that whatever angle is in the cosine, the opposite side is on the other side of
    // the equal sign.
    //
    // {.todo} Use Law of Cosines when given:
    // Two sides and the included angle.
    // All three sides.
:::

---
> id: trigonometry-4

{.todo} 即将推出 – 证明，示例及应用

    // TODO Future stuff about trigonometry

---
> id: mountains

### 大三角勘察

你还记得在[引言](/course/triangles/introduction)中的介绍中有提到寻找地球上最高山峰的任务吗？有了三角函数，我们终于有了做这件的工具！

::: .sticky-wrap

    figure.sticky.mountain
      x-geopad.no-background(width=760 height=250): svg
        image(href="images/mountain.svg" height=240 width=760 y=5)
        circle(name="a" x="point(25, 230)" target="points")
        circle(name="b" x="point(185, 230)" target="points")
        circle(name="x" x="point(573, 7)" target="")
        circle(name="y" x="point(573, 230)" target="")

        path.fill.red(x="angle(x,a,b)" label="23°" target="angles ang" size=60)
        path.fill.blue(x="angle(x,b,y)" label="29°" target="ang1" size=50)
        path.fill(name="angle-b" x="angle(b,x,a)" label="β" target="b angles" size=100)
        path.fill.green(name="angle-a" x="angle(a,b,x)" label="α" target="a angles" size=25)
        path(x="angle(b,y,x)")

        path.yellow(x="segment(a,b)" target="base right" label="5km")
        path.yellow(x="segment(b,x)" target="")
        path.yellow(name="side-d" x="segment(a,x)" target="d right" label="d")
        path.yellow(x="segment(b,y)" target="right")
        path.yellow(x="segment(x,y)" target="right" label="height")

在印度的测量员从[{.pill.yellow} 相距5公里](target:base)的[两个不同的位置点](target:points)测量了到山顶的角度，结果为[{.pill.red} 23°](target:ang) 和 [{.pill.blue} 29°](target:ang1)。

由于[{.pill.green} 角 α](target:a)是一个[补角](gloss:supplementary-angles)，它的角度一定是[[151]]°。 _{span.reveal(when="blank-0")}现在我们可以利用三角形内角和的公式来计算出[{.pill} 角 β](target:b) 是 [[6]]°。_

{.reveal(when="blank-1")} 现在我们知道了三角形的[所有三个角](target:angles) ，还有[{.pill.yellow} 其中一条边](target:base)，已经可以利用 [[正弦定理|余弦定理]]去找到距离 [_d_](target:d)了：

    table.eqn-system
      tr.reveal(when="blank-2")
        td
          mfrac
            mrow
              mo sin
              mn.pill.step-target.green(data-to="a") 151°
            mrow.md [[d|5]]
        td
          mo =
          mfrac
            mrow
              mo sin
              mn.pill.step-target(data-to="b") 6°
            mrow.md [[5|d]]
      tr.reveal(when="blank-3 blank-4")
        td: mi d
        td
          mo =
          mo sin
          mn.pill.step-target.green(data-to="a") 151°
          mo ×
          mfrac
            mrow: mn.pill.step-target.yellow(data-to="base") 5
            mrow
              mo sin
              mn.pill.step-target(data-to="b") 6°

      tr.reveal(when="blank-3 blank-4" delay=1000)
        td
        td
          mo =
          mn.pill.yellow.step-target(data-to="d") 23.2 km

{.reveal(when="blank-3 blank-4" delay=2000)} 还有最后一步：让我们来看看这个[巨大的直角三角形](target:right)，我们已经知道了斜边的长度，但我们真正需要的是[[对边|邻边]]，_{span.reveal(when="blank-5")}我们可以利用
*正弦*的定义来求得：_

    table.eqn-system
      tr.reveal(when="blank-5" delay=1000)
        td
          mo sin
          mn.pill.step-target.red(data-to="ang") 23°
        td
          mo =
          mfrac
            mrow.md [[height|23]]
            mrow.md [[23|height]]
      tr.reveal(when="blank-6 blank-7")
        td: mtext height
        td
          mo =
          mo sin
          mn.pill.step-target.red(data-to="ang") 23°
          mo ×
          mn.pill.step-target.yellow(data-to="d") 23

      tr.reveal(when="blank-6 blank-7" delay=1000)
        td
        td
          mo =
          mn.pill.step-target.yellow(data-to="height") 8.987 km

{.reveal(when="blank-6 blank-7" delay=2000)} 这已经非常接近珠穆朗玛峰的实际高度8,848米了。
:::

---
> id: mountains-1

这种解释大大简化了数学家和地理学家在大三角勘察中所做的非凡工作，他们从海滩的海平面开始，测量了数千公里的距离，建造了遍布全国的测量塔，甚至计算了地球的曲率。

    figure: x-img(src="images/himalaya.jpg" width=760 height=320)
