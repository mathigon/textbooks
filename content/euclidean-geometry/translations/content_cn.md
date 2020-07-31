# 欧几里得几何

## 引言

> id: thales
> goals: p1 p2 p3 move
> section: introduction

::: column.grow
数学已经被研究了数千年 -- 用于预测季节、计算税收或者估计农耕面积。

公元前500年左右，古希腊的数学家们惊叹于数学中的模式，想要探索和解释它们，这是第一次，他们只是“为了好玩”而不是为了任何具体的应用目去研究数学。
::: column(width=300)

    x-img(src="images/tablet.jpg" width=300 height=210)

{.caption} A Babylonian clay tablet, dated 1800 BC, that contains geometric
calculations.
:::

其中一位数学家是[泰勒斯](bio:thales)，他在研究几何图形时有了一个惊人的发现：

::: column(width=420)

    x-geopad.sticky(width=420 height=320): svg

::: column.grow
在左边方框里的任意地方选择两个点。
_{span.reveal(when="p1 p2")} 围绕这两个点画一个半圆。_

{.reveal(when="p1 p2")} 在[半圆周](target:circumf)上的某处选择第三个点。

{.reveal(when="p3")} 我们可以画一个由最初的两点和刚刚从半圆周上选择的一点组成的[三角形](target:triangle) 。

{.reveal(when="p3" delay=1000)}试点移动这三个点的位置，观察三角形顶部[角](target:angle) 的变化。
_{span.reveal(when="move")} 看起来这个角总是 [[90]]°！_
_{span.reveal(when="blank-0")} 这意味着这个三角形是
[[直角三角形|等边三角形|锐角三角形]]。_
:::

---
> id: thales-1

对于泰勒斯来说，这是一个相当惊人的结果，为什么 _半圆形_ 和 _直角三角形_ 这两种完全不同的形状，以这种很简单的方式联系起来了呢？据传，他对这个发现非常敬畏，用了一整头牛作为祭品来感谢上帝。

    figure
      x-img(src="images/temple.svg" width=400 height=170)

然而，对泰勒斯来说，对这种关系简单的 _观察_ 是不够的， 他想弄明白 _为什么_，并想去证明这种关系 _总是_ 正确的 -- 而不仅仅针对尝试的少数例子。

关于某件事一定正确的逻辑论证，称为 [__证明__](gloss:proof)，在接下的课程中，你将学习一些几何技巧，这些技巧让我们可以去证明 _泰勒斯定理_。

---
> id: applications

当然，几何学不仅仅对证明定理有用 -- 它无处不在，存在于自然界、建筑中、技术与设计中。无论是测量距离还是建造摩天大楼，亦或是将卫星送上天，我们都需要几何学。下面是几个例子：

::: column(width=200)

    x-img(src="images/pyramids.jpg" credit="© Ricardo Liberato" width=200 height=200)

{.caption} 几何学使得古埃及人能够建造巨大但非常规则的金字塔
::: column(width=200)

    x-img(src="images/sextant.jpg" width=200 height=200)

{.caption} 在海上，根据太阳或星星形成的角度，水手们用六分仪来确定他们所在的位置
::: column(width=200)

    x-img(src="images/video-game.jpg" credit="© Eric Lascoña" width=200 height=200)

{.caption} 在创建逼真的视频游戏或影视图像时也需要用到几何学
::: column(width=200)

    x-img(src="images/plane.jpg" width=200 height=200)

{.caption} 在设计和测试新的飞机模型时，几何学可以让它们更加安全和有效
::: column(width=200)

    x-img(src="images/cctv.jpg" lightbox width=200 height=200)

{.caption} 在设计这幢北京的摩天大楼时，为了确保它不会倒塌，几何学非常关键
::: column(width=200)

    x-img(src="images/satellite.jpg" lightbox credit="NASA" width=200 height=200)

{.caption} 几何学让我们能够预测围绕地球运行的卫星的位置
:::

在本课及接后面的课程中，你将学习到几个世纪以来数学家们发现的几何学中不同的工具与技术，还可以学到如何利用这些技术去解决现实世界中的重要问题。

---

## 欧几里得公理

> section: axioms
> id: points

在我写任何证明之前，我们需要一些通用术语，以便于我们在谈论几何对象时更加容易，这些术语并没有什么特别之处，大多数你都应该知道了：

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move.pulsate(cx=100 cy=30 target="move" label="P")
      circle.move.pulsate(cx=150 cy=100 target="move" label="Q")
      circle.move.pulsate(cx=40 cy=75 target="move")
      circle(x="point(200,50)" target="no-move")
      circle(x="point(70,120)" target="no-move" label="R")

::: column.grow
 [__点__](gloss:point) 是空间中一个特定的位置，点描述了位置，但它没有 _大小_ 和 _形状_ ，一般用大写字母来标注。

{.r} 在 Mathigon 中， [大一点的实心点](target:move)表示你可以移动的交互式点，而[小一点的空心点](target:no-move)表示你不能移动的固定点。
_{button.next-step} 继续_
:::

---
> id: lines

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path.green(x="line(point(60,100),point(90,40))" label="a")
      path.red(x="line(point(50,120),point(150,150))" label="b")
      circle.move(name="P" cx=170 cy=55 label="P")
      circle.move(name="Q" cx=200 cy=130 label="Q")
      path.yellow(x="line(P,Q)")

::: column.grow

[__线__](gloss:line) 是由无穷个点的集合，向双个方向无限延伸。线总是直的，它们没有 _宽度_ ，不占任何空间，就像点一样。

{.r} 线用小写字母来标记，例如  _a_ 或 _b_。我们也可以用位于线上的两个点来表示它们，例如 <span class="math"><mover><mi>PQ</mi><mo value="↔">↔</mo></mover></span> 或
<span class="math"><mover><mi>QP</mi><mo value="↔">↔</mo></mover></span>，点的顺序并不重要。
_{button.next-step} 继续_

:::

---
> id: segments

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="a" cx=50 cy=50 label="A")
      circle.move(name="b" cx=90 cy=120 label="B")
      path.red(x="segment(a,b)")
      circle.move(name="c" cx=120 cy=40 label="C")
      circle.move(name="d" cx=210 cy=110 label="D")
      path.blue(x="segment(c,d)")

::: column.grow
{.r} [__线段__](gloss:line-segment) 是线位于两点之间的一部分，并不会无限延伸，我们可以用类似线的标记方式来标记线段，只是在字母上面没有箭头：`bar(AB)` 或 `bar(BA)`，点的顺序也不重要。
_{button.next-step} 继续_
:::

---
> id: rays

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="c" cx=40 cy=120)
      circle.move(name="d" cx=60 cy=40)
      path.green(x="ray(c,d)")
      circle.move(name="a" cx=90 cy=90 label="A")
      circle.move(name="b" cx=190 cy=130 label="B")
      path.yellow(x="ray(a,b)")

::: column.grow
 [__射线__](gloss:ray) 是介于 _线_ 和 _线段_ 之间的一种形式，它只在一个方向无限延伸，你可以把它想像成 _太阳光线_ ：它们从一个点（太阳）开始，然后射向无穷远。

{.r} 在标记射线时，箭头的方向用来表示沿这个方向延伸到无穷远，例如 `vec(AB)`，此时，点的顺序就很重要了。
_{button.next-step} 继续_
:::

---
> id: circles

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="a" cx=50 cy=60)
      path(x="segment(a,a.add(point(1,1).unitVector.scale(40)))" target="radius")
      path.red(x="circle(a,40)")
    
      circle.move(name="b" cx=170 cy=90)
      path(x="segment(b,b.shift(60,0))" target="radius")
      path.blue(x="circle(b,60)")

::: column.grow
{.r} [__圆__](gloss:circle)是到一个中心点[距离](target:radius)相等的所有点的集合，这个距离叫做[__半径__](gloss:circle-radius)。
_{button.next-step} 继续_
:::

---
> id: congruence
> goals: pair-a-a pair-b-b pair-c-c pair-d-d pair-e1-e2 pair-e1-e3 pair-e2-e3 pair-f-f

### 全等

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path.fill.green(name="x" x="polygon(point(30,30),point(80,20),point(100,80),point(70,110),point(30,90))" label="A" label-class="white" target="move")
      path.fill.green.light(x="x.rotate(1).shift(190,10)" target="move")
      path.fill.green#congruent-path(x="x.rotate(1).shift(190,10)" target="move" label="B" label-class="white")

::: column.grow
右边的两个图形看起来基本上是一样的，有相同的大小和形状，我们可以[移动和旋转](target:move) 其中一个，使其与另外一个完全重合，在几何学中，我们就说这两个图形是[__全等__](gloss:congruent)的。

全等的符号是 _{span(voice="this")}`≅`_ ，因此我们可以说`A ≅ B`。
:::

这是有一些不同的几何对象 - 将彼此全等的几何图象连起来，记住，_两个以上_ 的图形也可能是全等的，也有些形状与其它的 _任何_ 图形都不全等：

    svg.congruence(width=760 height=320 viewBox="0 0 760 320")
      g.lines
      g.obj(data-q="a" cx="145.2" cy="166.1")
    	polygon(points="119.6,146.6 131.7,186.9 170.9,175.1 139.7,159.5 154.4,145.2")
      g.obj(data-q="a" cx="376.4" cy="73.5")
    	polygon(points="388.1,44.7 353.1,68.2 376,102.2 381.7,67.8 399.7,77.6")
      g.obj(data-q="b" cx="93" cy="258")
    	rect(x="80" y="245" transform="matrix(0.5953 0.8035 -0.8035 0.5953 244.9541 29.6955)" width=26 height=26)
      g.obj(data-q="b" cx="264" cy="200")
        rect(x="251" y="187" transform="matrix(0.1863 0.9825 -0.9825 0.1863 411.3196 -96.636)" width=26 height=26)
      g.obj(data-q="c" cx="77" cy="59.5")
    	rect(x="54" y="36.5" transform="matrix(0.9159 0.4013 -0.4013 0.9159 30.3505 -25.8995)" width=46 height=46)
      g.obj(data-q="c" cx="238" cy="78")
        rect(x="215" y="55" transform="matrix(0.828 -0.5607 0.5607 0.828 -2.8011 146.8683)" width=46 height=46)
      g.obj(data-q="d" cx="510" cy="55")
    	polyline(points="539.9,68.9 489.7,78.3 506.7,27.5")
        path(d="M523.5,72c-2.4-12.7-11.4-22.4-22.9-26.3")
      g.obj(data-q="d" cx="501" cy="258")
    	polyline(points="497.8,287.8 475.2,242.1 528.7,244.7")
        path(d="M490.4,272.9c11.6-5.7,18.5-17.1,19.1-29.1")
      g.obj(data-q="e1" cx="417" cy="166.8")
        ellipse(transform="matrix(0.9464 -0.3229 0.3229 0.9464 -31.5073 143.6043)" cx="417" cy="166.8" rx="30.7" ry="17.1")
      g.obj(data-q="e2" cx="585" cy="138.2")
        ellipse(transform="matrix(0.4618 -0.887 0.887 0.4618 192.197 593.2707)" cx="585" cy="138.2" rx="17.1" ry="30.7")
      g.obj(data-q="e3" cx="618" cy="250.2")
        ellipse(transform="matrix(0.9089 -0.4171 0.4171 0.9089 -48.0564 280.5469)" cx="618" cy="250.2" rx="17.1" ry="30.7")
      g.obj(data-q="f" cx="670.8" cy="72.5")
        line(x1="649.4" y1="65.5" x2="692.1" y2="79.5")
        path(d="M647.6,72c-3.6-1.2-5.5-5-4.3-8.5s5-5.5,8.5-4.3c3.6,1.2,5.5,5,4.3,8.5C655,71.3,651.1,73.2,647.6,72z")
        path(d="M689.7,85.8c3.6,1.2,7.4-0.8,8.5-4.3s-0.8-7.4-4.3-8.5c-3.6-1.2-7.4,0.8-8.5,4.3C684.2,80.8,686.2,84.7,689.7,85.8z")
      g.obj(data-q="f" cx="705.1" cy="190.6")
        line(x1="693.9" y1="210.1" x2="716.4" y2="171.1")
        path(d="M699.9,213.2c-1.9,3.2-6,4.3-9.2,2.5c-3.2-1.9-4.3-6-2.5-9.2c1.9-3.2,6-4.3,9.2-2.5C700.7,205.8,701.8,209.9,699.9,213.2z")
        path(d="M722.1,174.8c1.9-3.2,0.8-7.4-2.5-9.2c-3.2-1.9-7.4-0.8-9.2,2.5c-1.9,3.2-0.8,7.4,2.5,9.2C716.1,179.1,720.2,178,722.1,174.8z")
      g.obj(data-q="g" cx="357" cy="265")
    	polyline(points="372.2,298.7 336,271.4 354.3,230.3")
    	path(d="M362.1,291.2c4.3-5.6,6.9-12.6,6.9-20.2c0-13.4-8-25-19.5-30.1")

---
> id: congruence-1

如果两条线段[[有相同的长度|相交]]，就可以说它们是全等的。如果两个角度[[有相同的大小|在一点相遇]]（以度为单位），就可以说它们是全等的。

注意，_“全等”_ 并不意味 _“相等”_。举个例子，全等线和角不一定要指向同一个方向，当然，_全等_ 仍然具有 _相等_ 的很多属性：

* 全等满足 __对称性__：如果 `X ≅ Y`，那么 `Y ≅ X`。
* 全等满足 __反射性__：任何形状与它自身是全等的，例如 `A ≅ A`。
* 全等满足 __传递性__: 如果 `X ≅ Y` 并且 `Y ≅ Z` ，那么 `X ≅ Z`。

---
> id: parallel

### 平行与垂直

::: column(width=240)

    x-geopad(width=240 height=200): svg
      path.red(x="line(point(30,100),point(70,20))" name="l1" mark="arrow" label="a")
      path.red(x="l1.shift(40,10)" mark="arrow" label="b")
      path.red(x="l1.shift(100,30)" mark="arrow" label="c")
      path.yellow(x="line(point(30,120),point(160,140))" name="l2" mark="arrow2" label="d")
      path.yellow(x="l2.shift(-30,40)" mark="arrow2" label="e")

::: column.grow

两条永不相交的直线就称它们是[__平行的__](gloss:parallel)，它们指向同一个方向，它们之间的距离总是[[相等的|增加的|减少的]]。

{.reveal(when="blank-0")} 现实生活中一个很好的平行线例子就是 _铁轨_。需要注意的是，两条以上的线也可以是互相平行的！

{.reveal(when="blank-0")} 在图示中，我们通过增加一个或多个小箭头来标识平行线。在左边的例子中，有 __{.m-red}`a ∥ b ∥ c`__ 和 __{.m-yellow}`d ∥ e`__，符号 `∥` 表示 _“平行于”_ 。

:::

---
> id: perpendicular

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path(x="angle(point(60,50),point(50,100),point(100,110))")
      path.blue(x="line(point(50,100),point(100,110))" label="a")
      path.green(x="line(point(50,100),point(70,0))" label="b")

::: column.grow

与 _平行_ 相对的是两条线以90°角（直角）相交，那么这两条线就是[__垂直__](gloss:perpendicular)的。

{.r} 在左边这个例子中，我们写为_{.b.m-blue}a_ `⊥` _{.b.m-green}b_ ，符号 `⊥` 表示 _“垂直于”_ 。

:::

---
> id: euclid

### 欧几里得公理

::: column.grow

希腊数学家们意识到，要想写出形式上的证明，你需要一系列 _起始点_ ：每个人都同意是正确的那些简单的、直观的声明。这些声明就叫做 [__公理__](gloss:axiom) (或 _公设_)。

数学中一个关键的部分就是利用逻辑规则，组合运用不同的公理去证明更复杂的结论。

希腊数学家 [欧几里得](bio:euclid) 被称为 _几何学之父_ ， 他提出了几何学中的五条公理：

::: column(width=220)

    img(src="images/euclid.jpg" width=220 height=269)

{.caption} 欧几里得

:::

::: column(width=220 parent="padded-thin")

    x-geopad(width=220 height=160): svg
      circle.move(name="a" cx=30 cy=130 target="1_point")
      circle.move(name="b" cx=190 cy=30 target="1_point")
      path.red(x="segment(a,b)" target="1_line")

{.text-center }__第一公理__  
可以用一条直[{.pill.red} 线段](target:1_line)连接任意[{.pill} 两个点](target:1_point)

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="c" cx=60 cy=100)
      circle.move(name="d" cx=180 cy=60)
      path.blue(x="line(c,d)" target="2_line")
      path(x="segment(c,d)" target="2_segment")
      path.blue.transparent(x="segment(c,d)" target="2_line")

{.text-center }__第二公理__  
可以把任意一条[{.pill} 线段](target:2_segment)扩展成一条[{.pill.blue} 无限长的线](target:2_line)

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="e" cx=120 cy=80 target="3_center" label="P")
      circle.move(name="f" cx=170 cy=130)
      path(x="segment(e,f)" label="r" target="3_radius")
      path.green(x="circle(e,distance(e,f))" target="3_circle")

{.text-center }__第三公理__  
线定一个[{.pill} 点 _P_](target:3_center)和一个[{.pill} 距离 _r_](target:3_radius)，可以 _P_ 为圆心，_r_ 为半径画一个[{.pill.green} 圆](target:3_circle) 

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="x" cx=50 cy=100)
      circle(hidden name="xa" x="x.translate(point(110,80).subtract(x).rotate(pi/4).unitVector.scale(50))")
      circle(hidden name="xb" x="x.translate(point(110,80).subtract(x).rotate(-pi/4).unitVector.scale(50))")
      path.fill.orange(x="angle(xb,x,xa)" target="4_angle")
      path.dark(x="segment(x,xa)")
      path.dark(x="segment(x,xb)")
    
      circle.move(name="y" cx=190 cy=60)
      circle(hidden name="ya" x="y.translate(point(110,80).subtract(y).rotate(pi/4).unitVector.scale(50))")
      circle(hidden name="yb" x="y.translate(point(110,80).subtract(y).rotate(-pi/4).unitVector.scale(50))")
      path.fill.orange(x="angle(yb,y,ya)" target="4_angle")
      path.dark(x="segment(y,ya)")
      path.dark(x="segment(y,yb)")

{.text-center }__第四公理__  
任意两个[{.pill.orange} 直角](target:4_angle)是全等的

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="g" cx=160 cy=60 target="5_point" label="P")
      path(name="line5" x="line(point(50,80),point(130,140))" target="5_line" label="L")
      path.yellow(x="line5.parallel(g)" target="5_parallel")

{.text-center }__第五公理__  
给定一条[{.pill} 直线 _L_](target:5_line)和一个直线 _L_ 外的 [{.pill} 点 _P_](target:5_point)，刚好有[{.pill.yellow} 一条线](target:5_parallel)通过 _P_ ，并且这条线 [平行于](gloss:parallel) _L_。
:::

{.r} _{button.next-step} 继续_

---
> id: jefferson

::: column.grow
这里的每一条公理看起来都很明显，不言而喻，但它们共同构成了几何学的基础，可用于推导出几乎所有几何学其它的内容。 [艾萨克.牛顿](bio:newton)有说过：_几何学的荣耀在于，它能从如何少的原则中，获得如此多的成就_。

欧几里得在它的著作 _《几何原本》_ 中提出来这五个公理。这是历史上第一个系统的数学方法例子，后来在数千年中被用做数学教科书。

::: column(width=220)

    x-img(src="images/elements.jpg" width=220 height=330 lightbox)

:::

美国总统[托马斯.杰斐逊](bio:jefferson)是研究欧几里得著作的人之一，当它在 1776 年写独立宣言时，他就想要遵循类似的方法，首先声明一些简单的 “公理”，然后现去 “证明” 更多复杂的结论：

{div.parchment.voice} “我们认为以下事实不言而喻：人人生而平等，造物主赋予他们若干不可让与的权利，其中包括生存权、自由权和追求幸福的权利。”

{.text-center.follows.no-voice} `=>`

{div.parchment.voice} 因此，我们... 宣布，这些联合的殖民地是，并且理应是自由和独立的国家。

这只是欧几里得的数学思想对其它不同领域启发的一个例子。


---

## Ruler and Compass Construction

> section: construction
> id: measuring

You might have noticed that Euclid’s five axioms don’t contain anything about
_measuring_ distances or angles. Up to now, this has been a key part of
geometry, for example to calculate areas and volumes.

::: column.grow
However, at the times of Thales or Euclid, there wasn’t a universal framework of
units like we have today. Distances were often measured using body parts, for
example finger widths, or arm lengths. These are not very accurate and they vary
for different people.

To measure longer distances, architects or surveyors used _knotted cords_: long
pieces of string that contained many knots at equal intervals. But these were
also not perfectly accurate, and different string had the knots placed at
slightly different distances.

    figure: x-img(src="images/knots.jpg" width=370 height=23 style="opacity: 0.8")

::: column(width=200)

    x-img(src="images/units.png" width=200 height=336)

:::

Greek mathematicians didn’t want to deal with these approximations. They were
much more interested in the underlying laws of geometry, than in their practical
applications.

That’s why they came up with a much more idealised version of our universe: one
in which points can have no size and lines can have no width. Of course, it is
[[impossible|very difficult]] to draw these on paper. Visible points will always
take up some space, and lines will always have some width. This is why our
drawings are always just “approximations”.

---
> id: tools
> goals: play-l1 play-c1

    figure: img(src="images/divider-1.svg" width=760 height=42)

Euclid’ axioms basically tell us _what’s possible_ in his version of geometry.
It turns out that we just need two very simple tools to be able to sketch this
on paper:

::: column(width=320)

    x-geopad.r(width=300 height=240)
      svg
        circle.move(name="a" cx=50 cy=190)
        circle.move(name="b" cx=250 cy=50)
        path.red(name="l1" x="segment(a,b)" hidden)
      x-play-btn

{.text-center} A __straight-edge__ is like a ruler but without any markings. You
can use it to connect two points (as in Axiom 1), or to extend a line segment
(as in Axiom 2).

::: column.reveal(width=300 when="play-l1")

    x-geopad.r(width=300 height=240)
      svg
        circle.move(name="c" cx=150 cy=120)
        circle.move(name="d" cx=250 cy=150)
        path(x="segment(c,d)")
        path.red(name="c1" x="arc(c,d,1.99*pi)" hidden)
      x-play-btn

{.text-center} A __compass__ allows you to draw a circle of a given size around
a point (as in Axiom 3).
:::

---
> id: construction

Axioms 4 and 5 are about comparing properties of shapes, rather than drawing
anything. Therefore they don’t need specific tools.

::: column.grow
You can imagine that Greek mathematicians were thinking about Geometry on the
beach, and drawing different shapes in the sand: using long planks as
straight-edge and pieces of string as compass.

Even though these tools look very primitive, you can draw a great number of
shapes with them. This became almost like a puzzle game for mathematicians:
trying to find ways to “construct” different geometric shapes using just a
straight-edge and compass.

::: column(width=340)

    x-img(src="images/archimedes.jpg" width=340 height=265)

{.caption} The Greek Mathematician [Archimedes](bio:archimedes) was studying
Geometry when he was killed by Roman invaders. His last words were “do not
disturb my circles”.
:::

---
> id: equilateral
> goals: segment0 segment1 segment2 circle1 circle2

::: column(width=320)

    x-geopad.sticky(width=320 tools="move|line|circle" intersections projections="no"): svg

::: column.grow
{.task} Draw an [equilateral triangle](gloss:equilateral-triangle) using just a
straight-edge and compass.

To begin, draw a line segment anywhere in a box on the right. With the
<x-target no-margins to="#equilateral .tool:nth-child(3)">line tool</x-target>
selected, simply drag from start to end. This segment will be one of the sides
of the triangle.

{.reveal(when="segment0")} Next, draw two circles that have one of the endpoints
of the line segments as center, and go through the other endpoint. With
the <x-target no-margins to="#equilateral .tool:nth-child(5)">circle tool</x-target> selected,
simply drag from one endpoint to the other.

{.reveal(when="circle1 circle2")} We already have two vertices of the triangle,
and the third one is the intersection of the two circles. Use the line tool
again to draw the two missing sides and complete the triangle.

{.reveal(when="segment1 segment2")} Now [these two sides](target:a) and
[these two sides](target:b) are each [[radii|diameters|circumferences]] of the
same circle, _{span.reveal(when="blank-0")} so they must have the same length.
In other words, all three sides of the triangle are congruent – and therefore it
is indeed an equilateral triangle._
:::

---
> id: perp-bisector

### Midpoints and Perpendicular Bisectors

{.todo} COMING SOON – Constructing Midpoints and Perpendicular Bisectors

    // A midpoint is a point on a line segment that divides it into two congruent
    // segments. If A,B, and C are collinear, and AB=BC, then B is the midpoint of
    // `bar(AC)`.
    // 
    // A line, segment, or ray that passes through a midpoint of another segment 
    // at a right angle is called a __perpendicular bisector__. `bar(DE)` is the
    // perpendicular bisector of `bar(AC)`, so `bar(AB) ~= bar(BC)` and `bar(AC) ⊥ bar(DE)`.

---
> id: angle-bisector

### Angle Bisectors

{.todo} COMING SOON – Constructing Angle Bisectors

    // When two rays have the same endpoint, an angle is created.
    // 
    // Here, `vec(BA)` and `vec(BC)` meet to form an angle. An angle is labeled with an
    // “∠” symbol in front of the three letters used to label it. This angle can be
    // labeled `/_ABC` or `/_CBA`. Always put the vertex (the common endpoint of the
    // two rays) in the middle of the three points. It doesn’t matter which side point
    // is written first.
    // 
    // An __angle bisector__ is a ray that divides an angle into two congruent angles,
    // each having a measure exactly half of the original angle. Every angle has
    // exactly one angle bisector.
    // 
    // Angle Bisector Theorem: If a point is on the bisector of an angle, then the
    // point is equidistant from the sides of the angle.
    // In other words, if BD←→ bisects ∠ABC,BE−→−⊥ED, and BF−→−⊥DF, then ED=DF.

---
> id: impossible

### Impossible Constructions

In the next chapter, we will see even more shapes that can be constructed
like this. However, there is a limit to Euclidean geometry: some constructions
are simply impossible using just straight-edge and compass.

::: column.grow
According to legend, the city of Delos in ancient Greece was once faced with a
terrible plague. The oracle in Delphi told them that this was a punishment from
the gods, and the plague would go away if they built a new altar for their
temple that was _exactly twice_ the volume of the existing one.

    figure: img(src="images/altar.svg" width=320 height=140)

::: column(width=300)

    x-img(src="images/delphi.jpg" credit="© De Agostini Editorial" width=300 height=239)

{.caption} A reconstruction of a temple in Delphi
:::

Note that _doubling the volume_ is not the same as _doubling an edge of the
cube_. In fact, if the [[three-dimensional|two-dimensional|one-dimensional]] volume
increases by a factor of 2, the [[one-dimensional|three-dimensional|two-dimensional]]
edge of the cube will increase by a factor of `root(2,3)`.

---
> id: impossible-1

This still sounds pretty simple, but doubling the cube is actually impossible
in [Euclidean geometry](gloss:euclidean-geometry), using only straight-edge and
compass! For the citizens of Delos this unfortunately meant that all hope was
lost. There are two other constructions that are famously impossible.
Mathematicians devoted a great amount of time trying to find a solution – but
without success:

::: column(width=220)

    figure: img(src="images/impossible-1.svg" width=200 height=180)

{.text-center} __{.m-red} Trisecting the angle__  
We already know how to bisect angles. However it is impossible to similarly
split an angle into _three_ equal parts.

::: column(width=220)

    figure: img(src="images/impossible-2.svg" width=200 height=180)

{.text-center} __{.m-blue} Doubling the cube__  
Given the edge of a cube, it is impossible to construct the edge of another cube
that has exactly twice the volume.

::: column(width=220)

    figure: img(src="images/impossible-3.svg" width=200 height=180)

{.text-center} __{.m-green} Squaring the circle__  
Given a circle, it is impossible to construct a square that has exactly the same
area.
:::

Note that these problems can all be solved quite easily with algebra, or using
marked rulers and protractors. But they are impossible if you are just allowed to
use straight-edge and compass.

---

## Even More Constructions

> section: more-construction
> sectionStatus: dev

Constructing a Football Pitch

Constructing Parallel and Perpendicular Lines

Constructing a Square

Perpendicular Line Construction; through a Point NOT on the Line
Draw a horizontal line and a point above that line. Label the line l and the point A.

* Take the compass and put the pointer on A. Open the compass so that it reaches beyond line l. Draw an arc that intersects the line twice.
* Move the pointer to one of the arc intersections. Widen the compass a little and draw an arc below the line. Repeat this on the other side so that the two arc marks intersect.
* Take your straightedge and draw a line from point A to the arc intersections below the line. This line is perpendicular to l and passes through A.

Theorem #1: If two lines are parallel and a third line is perpendicular to one of the parallel lines, it is also perpendicular to the other parallel line. Or, if l || m and l⊥n, then n⊥m.

Theorem #2: If two lines are perpendicular to the same line, they are parallel to each other.

Distance Between Parallel Lines 
The shortest distance between two parallel lines is the length of the perpendicular segment between them. It doesn’t matter which perpendicular line you choose, as long as the two points are on the lines. Recall that there are infinitely many perpendicular lines between two parallel lines.

---

## Angles and Proofs

> section: proofs
> sectionStatus: dev

TODO

---

## Origami and Paper Folding

> id: origami
> section: origami
> sectionBackground: dark

Using straight-edge and compass is not the only way to construct geometric
shapes. Another technique uses no tools at all: __Origami__.

The word _Origami_ _{span.no-voice}(折り紙)_ comes from the Japanese _oru_ (to fold) and _kami_
(paper). The goal is to make objects out of one or more sheets of paper,
without any additional tools like glue or scissors. You can create incredibly
beautiful and impressive designs – all of these figures were built using nothing
but rectangular sheets of paper:

::: column(width=186)

    x-img(src="images/origami/origami-1.jpg" lightbox credit="© Dirk Eisner" width=186 height=200)

::: column(width=186)

    x-img(src="images/origami/origami-2.jpg" lightbox credit="© Dirk Eisner, Thomas Hull" width=186 height=200)

::: column(width=186)

    x-img(src="images/origami/origami-3.jpg" lightbox credit="© ServeSmasher (Flickr)" width=186 height=200)

::: column(width=186)

    x-img(src="images/origami/origami-4.jpg" lightbox credit="© Dirk Eisner" width=186 height=200)

::: column(width=186)

    x-img(src="images/origami/origami-5.jpg" lightbox credit="© Meenakshi Mukerji" width=186 height=200)

::: column(width=186)

    x-img(src="images/origami/origami-6.jpg" lightbox credit="© Meenakshi Mukerji, Dennis Walker" width=186 height=200)

:::

---
> id: crane
> goals: video

Building shapes like this can take a lot of time, and it is important to be
extremely accurate. But with a bit of practice, you can do it yourself!

::: column.sticky-video(width=360)

    x-video(src="https://storage.googleapis.com/mathigon-videos/crane.mp4" poster="images/crane.jpg" width=360 height=360 controls)

::: column.grow
{.step.active(data-t=0)} You just need a square sheet of paper. To start, fold
the sheet along its two diagonals.

{.step(data-t=16)} Next, fold it along its horizontal and vertical centers – but
in the opposite direction.

{.step(data-t=38)} Now take two opposite corners of the sheet and bring them
together as shown. This forms a smaller square which is open at the bottom.

{.step(data-t=51)} Fold the left and right corners of the square towards its
center line. Then turn it over and repeat the same.

{.step(data-t=83)} Now fold the top triangle down, along the horizontal line,
and then open up the folds from the last two steps.

{.step(data-t=99)} This one is difficult: take the bottom corner of the paper
and fold it all the way up, along the horizontal line you just created. Some of
the folds you made before will be inverted. Then turn over and repeat.

{.step(data-t=135)} Make sure the two “legs” are pointing down. Then take the
left and right corner and fold them towards the center line. Turn over and
repeat.

{.step(data-t=172)} You’re almost done! Slightly open the right side, and fold
the head up towards the top. You will have to turn it inside out. Then repeat
the same with the tail on the left.

{.step(data-t=203)} Reverse the fold as shown to create a beak. You can decide
how long you want it to be by picking the location of the fold.

{.step(data-t=215)} Finally, fold down the two wings, and pull them apart.
:::

---
> id: crane-1

This _crane_ is one of the oldest and most famous Origami models. We have many
more [instructions for Origami models](/origami) you can try!

    figure: x-img(src="images/origami-1.jpg" credit="© Meenakshi Mukerji, Joel Lord, Dirk Eisner, Angie Harms, Michal Kosmulski" width=760 height=118)

---
> id: origami-axioms

### Origami Axioms

Just like drawing with straight-edge and compass, there are a few axioms of
different _folds_ that are possible with origami. They were first listed in
1992, by the Italian-Japanese mathematician Humiaki Huzita.

::: column(width=220 parent="padded-thin origami-axioms")

    x-video(src="images/origami/axiom-1.mp4" width=220 height=220)

{.text-center} You can fold a line connecting any two points.
::: column(width=220)

    x-video(src="images/origami/axiom-2.mp4" width=220 height=220)

{.text-center} You can fold any point _P_ onto any other point _Q_. This creates
the [[perpendicular bisector|angle bisector|midpoint]] of the line `bar(PQ)`.
::: column(width=220)

    x-video(src="images/origami/axiom-3.mp4" width=220 height=220)

{.text-center} We can fold any two lines onto each other. If the lines
intersect, this creates the [[angle bisector|perpendicular bisector|midpoint]]
of the angle between the two lines.
::: column(width=220)

    x-video(src="images/origami/axiom-4.mp4" width=220 height=220)

{.text-center} Given a point _P_ and a line _L_, we can make a fold
perpendicular to _L_ passing through _P_.
::: column(width=220)

    x-video(src="images/origami/axiom-5.mp4" width=220 height=220)

{.text-center} Given two points _P_ and _Q_ and a line _L_, we can make a fold 
that passes through _P_ and places _Q_ onto _L_.
::: column(width=220)

    x-video(src="images/origami/axiom-6.mp4" width=220 height=220)

{.text-center} Given any two points _P_ and _Q_ and any two lines _K_ and _L_,
we can make a fold that places point _P_ onto line _K_ and at the same time
places point _Q_ onto line _L_.
::: column(width=220)

    x-video(src="images/origami/axiom-7.mp4" width=220 height=220)

{.text-center} Given a point _P_ and two lines _K_ and _L_, we can fold a line
perpendicular to _K_ that places _P_ onto _L_.
:::

---
> id: origami-axioms-1

It turns out that these axioms are even more powerful than the Euclidean ones.
It is possible to trisect angles and double cubes using just paper folding!
Of course, it is impossible to fold any _curved_ lines, and you still can’t
square the circle with origami.

    figure: x-img(src="images/origami-2.jpg" credit="© Dirk Eisner, Meenakshi Mukerji, noricum, fdecomite" width=760 height=123)

---
> id: origami-applications
> goals: video

### Applications of Origami

Origami is an ancient art, and for the longest time, it was mostly a recreational
pursuit, without real-life applications. However, it turns out that techniques
developed for Origami can be incredibly useful in technology and engineering:

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/space.mp4" poster="images/space.jpg" width=300 height=225 credit="© Brigham Young University")

::: column.grow

#### Origami in Space

Satellites need large solar panels to generate power. Unfortunately, the rockets
that carry satellites into space only have very limited space for cargo, and
any additional weight costs a lot of fuel.

Origami techniques allow solar panels to “unfold” when they reach space. Some
particularly clever folds are incredibly compact and require very few motors
and other mechanical components.

    // One of these is the __Miura Map Fold__, which was invented by _Korio Miura_.
    // The same is also true for the mirrors of telescopes in space. Larger mirrors
    // can take better images. Engineers can use Origami to build large mirrors that
    // can be folded up very efficiently when loaded onto rockets.

:::

---
> id: origami-applications-3
> goals: video

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/stents.mp4" poster="images/stents.jpg" width=300 height=225 credit="© Virtual Point")

::: column.grow

#### Origami in Medicine

In medicine, similar ideas from Origami are used on a much smaller scale. In
2003, researchers developed _Origami Stents_: tiny tubes that can be inserted
into blood vessels. They are initially folded up but can expand inside patients’
blood in order to enlarge clogged arteries or veins.

:::

---
> id: origami-applications-1

::: column(width=300)

    x-img(src="images/bridge.jpg" width=300 height=225 credit="© Hiroshima University")

::: column.grow

#### Foldable Bridges

The British and American military used Origami to develop foldable, mobile
bridges. These were important for quickly crossing rivers or anti-tank ditches,
and could be deployed much faster than previous designs.

They can also be used for disaster relief, to quickly give emergency vehicles
access after earthquakes or tsunamis. This image is of a prototype designed at
Hiroshima University in Japan.

:::

    // ---
    // > id: origami-applications-2
    // > goals: video
    // 
    // ::: column(width=300)
    // 
    // x-video(src="https://storage.googleapis.com/mathigon-videos/stadium.mp4" poster="images/stadium.jpg" width=300 height=225 credit="© Mercedes Benz Stadium")
    // 
    // ::: column.grow
    // #### Stadium Roofs
    // 
    // Bridges are difficult to construct because they have to span large distances
    // without intermediate support. This also is the case for the roofs of sports
    // stadiums, which have to cover a large area without being supported by pillars.
    // 
    // The roof of the new Falcons Stadium in Atlanta consists of eight enormous
    // modules that can twist to open or close.
    // :::

---
> id: origami-applications-4
> goals: video

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/marine.mp4" poster="images/marine.jpg" width=300 height=225 credit="© Harvard University")

::: column.grow

#### Origami under the Sea

The depths of the oceans are some of the least explored areas on Earth. Animals
that live there are often squishy and delicate, which makes them very hard
to examine.

Here you can see a “trap” in the shape of a [dodecahedron](gloss:dodecahedron)
that can fold around marine organisms, allowing them to be studied. It is
remotely controlled and only needs a single motor to drive the complex folding
motion of its five arms.

:::

---
> id: origami-applications-5

And there are many more applications of Origami in everyday life: houses
that will compress rather than crumble during an earthquake, unfolding airbags
in cars, self-assembling robots, more efficient packaging, and lightweight
aircraft.

---
> id: origami-wings
> goals: video

### Origami in Nature

It turns out that we humans are not the only ones harnessing the power of
Origami: nature has been doing so for millions of years.

Here you can see the wing of an __earwig__ that can be folded up using an
ingenious pattern. When opened, the size of the wing expands by a factor of 10 –
the highest “folding ratio” in the animal kingdom:

::: column(width=300)

    x-img(src="images/wing.jpg" width=300 height=170 credit="© ETH Zürich")

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/wing-animation.mp4" poster="images/wing-animation.jpg" width=300 height=170 credit="© ETH Zürich")

:::

---
> id: origami-wings-1

When expanded, the large wings snap into a stable position that allows the
insects to fly. But it only takes the lightest touch for the wings to retract.
When folded up, they are compact enough to allow earwigs to tunnel underground.
Many other insects, bats, leaves and flowers use similar folding patterns to fit
large surfaces into small spaces.

Scientists are studying these plants and animals, hoping to mimic their abilities
in engineering and technology. Potential applications could include foldable
electronics in smartphones, expanding solar panels for satellites, or even
self-folding camping tents.

---
> id: origami-dna
> goals: video

::: column(width=320)

    x-video(src="https://storage.googleapis.com/mathigon-videos/dna.mp4" poster="images/dna.jpg" width=320 height=240 credit="© PyMOL")

::: column.grow

Origami even appears in your own body: every human cell contains around 2 meters
of [DNA](gloss:dna), the [molecule](gloss:molecule) that carries all your
genetic information. If you could combine the DNA from all cells in your body,
their length would be more than 140 times the distance from Earth to the sun!

To fit all that DNA in your body, without it getting twisted or torn, every
strand is curled, folded, and held in place by special molecules.

:::

---
> id: origami-dna-1

A similar process is also used by other complex molecules that appear in living
organisms. For example, __[protein](gloss:protein) folding__ is one of the most
complex problems in biology. Understanding it better can help scientists develop
new drugs in the future.
