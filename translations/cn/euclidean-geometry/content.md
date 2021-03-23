# 欧几里得几何

## 引言

> id: thales
> goals: p1 p2 p3 move
> section: introduction
> color: "#0F82F2"
> level: Intermediate
> next: transformations

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

## 直尺与圆规构建

> section: construction
> id: measuring

你可能已经注意到，欧几里得的五条公里并没有包含任何关于距离与角度的 _测量_，而这却是几何学中的一个关键部分，例如计算面积和体积。

::: column.grow
然而，在泰勒斯或欧几里得时代，还没有像我们今天使用的通用度量单位，距离通常是使用像手指宽度，或手臂长度这样的身体部位来测量的，这些都不是很准备，因人而异。

为了测试长距离，建筑师或测量师通常使用 _打结的绳子_ ：每隔相同距离有许多结的长绳子，但这些也不是很准确，并且不同的绳子打结的位置距离也有所不同。

    figure: x-img(src="images/knots.jpg" width=370 height=23 style="opacity: 0.8")

::: column(width=200)

    x-img(src="images/units.png" width=200 height=336)

:::

希腊数学家们不想以这些近似的方式去处理，他们对底层的几何规律比实际应用更感兴趣。

这就是为什么他们抽象出了一个更理想化的通用版本：点没有大小，线没有宽度。当然，这些 [[不可能|很难]]在纸上画出来，可见的点总会占用空间，线也总会有宽度，这也是为什么我们的绘图只能是“近似”。

---
> id: tools
> goals: play-l1 play-c1

    figure: img(src="images/divider-1.svg" width=760 height=42)

欧几里得的公理告诉我们，在他的几何学版本里 _什么是可能的_ 。事实证明，我们只需要两个非常简单的工具就可以在纸上画出这一切：

::: column(width=320)

    x-geopad.r(width=300 height=240)
      svg
        circle.move(name="a" cx=50 cy=190)
        circle.move(name="b" cx=250 cy=50)
        path.red(name="l1" x="segment(a,b)" hidden)
      x-play-btn

{.text-center} __直尺__ 就像一把没有任何标记的尺子。你可以用它将两点（如公理一所示）连起来，或者扩展一条线段（如公理二所示）

::: column.reveal(width=300 when="play-l1")

    x-geopad.r(width=300 height=240)
      svg
        circle.move(name="c" cx=150 cy=120)
        circle.move(name="d" cx=250 cy=150)
        path(x="segment(c,d)")
        path.red(name="c1" x="arc(c,d,1.99*pi)" hidden)
      x-play-btn

{.text-center} __圆规__ 让你可以一点为中心画一个给定大小的圆（如公理三所示）
:::

---
> id: construction

公理四和公理五主要是关于形状的比较，而不是画什么，因此它们不需要任何特定的工具

::: column.grow
你可以想象出，希腊数学家们在海难上思考几何学，在沙地上画出不同的形状：使用长木板作为直尺，一截绳子用作圆规

尽管这些工具看起来比较原始，但你可以用它们画出大量的形状，这对数学家们来说就像玩益智游戏：试图找到一种方法仅仅使用直尺和圆规去“构建”不同的几何图形

::: column(width=340)

    x-img(src="images/archimedes.jpg" width=340 height=265)

{.caption} 希腊数学家[阿基米德](bio:archimedes) 被罗马侵略者杀害的时候，他正在研究几何学，他说的最后一句话是“不要弄坏我的圆形”。
:::

---
> id: equilateral
> goals: segment0 segment1 segment2 circle1 circle2

::: column(width=320)

    x-geopad.sticky(width=320 tools="move|line|circle" intersections projections="no"): svg

::: column.grow
{.task} 使用直尺和圆规画一个[等边三角形](gloss:equilateral-triangle) 。

首先，选择[画线工具](->#equilateral_.tool:nth-child(3))，在右边的框中任意位置画一条线段，简单的从起始点拖到终点即可，这条线段作为三角形的一条边。

{.reveal(when="segment0")} 接下来，选择[画圆工具](->#equilateral_.tool:nth-child(5))，以该线段的端点为圆心画两个圆，只需要从其中一个端点拖到另一个端点即可。

{.reveal(when="circle1 circle2")} 三角形的其中两个端点我们已经有了，而两个圆的交点是第三个交点，再次用直线工具将缺失的边画上就完成了三角形的绘制。

{.reveal(when="segment1 segment2")} 现在[这两条边](target:a)和[这两条边](target:b) 都是同一个圆的[[半径 |直径|圆周 ]] ，_{span.reveal(when="blank-0")} 因此他们的长度一定相等，换句话说，这个三角形的三条边都是相等的，因此它确实是一个等边三角形。_
:::

---
> id: perp-bisector

### 中点和垂直平分线

{.todo} 即将推出 – 构造中点和垂直平分线

    // A midpoint is a point on a line segment that divides it into two congruent
    // segments. If A,B, and C are collinear, and AB=BC, then B is the midpoint of
    // `bar(AC)`.
    //
    // A line, segment, or ray that passes through a midpoint of another segment
    // at a right angle is called a __perpendicular bisector__. `bar(DE)` is the
    // perpendicular bisector of `bar(AC)`, so `bar(AB) ~= bar(BC)` and `bar(AC) ⊥ bar(DE)`.

---
> id: angle-bisector

### 角平分线

{.todo} 即将推出 – 构造角平分线

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

### 不可能完成的构造

在下一章中，我们将看到更多像这样可以被构造出来的形状，然而，欧低几何也有限制：有些仅使用直尺和圆规是无法构造出来的。

::: column.grow
据传，古希腊的提洛斯（Delos）曾遭遇过一场可怕的瘟疫，德尔斐（Delphi）的神谕告诉他们，这是众神的惩罚，如果他们为自己的神庙建造一个新的祭坛，瘟疫就会消失，要求这个祭坛的体积恰好是现有神庙体积的两倍。

    figure: img(src="images/altar.svg" width=320 height=140)

::: column(width=300)

    x-img(src="images/delphi.jpg" credit="© De Agostini Editorial" width=300 height=239)

{.caption} 德尔斐一座寺庙的重建
:::

请注意，将立方体的 _体积加倍_ 并不等于将立方体的 _边长加倍_ 。事实上，立方体[[三维|二维|一维]] 的体积增加两倍，立方体[[一维|三维|二维]]的边将增加`root(2,3)`倍。

---
> id: impossible-1

将立方体的体积加倍，这听起来似乎很简单，实际上在仅使用直尺和圆规的[欧氏几何](gloss:euclidean-geometry)中是不可能完成的！这意味着对于提洛斯（Delos）的民众来说，一切的希望都破灭了。还有另外两个知名的构造也是不可能完成的，数学家们花了大量的时间试图找到解决方案 -- 但都没有成功：

::: column(width=220)

    figure: img(src="images/impossible-1.svg" width=200 height=180)

{.text-center} __{.m-red} 三等分角__
我们已知知道如何平分一个角，但是如果要将一个角 _三_ 均等分却是不可能的

::: column(width=220)

    figure: img(src="images/impossible-2.svg" width=200 height=180)

{.text-center} __{.m-blue} 将立方体体积加倍__
给定一个立方体的边长，不可能构造出另一个立方体的边长，使得该立方体的体积刚好是原立方体的两倍

::: column(width=220)

    figure: img(src="images/impossible-3.svg" width=200 height=180)

{.text-center} __{.m-green} 化圆为方__
给定一个圆，不可能构造出一个正方形，它的面积刚好等于圆的面积
:::

请注意，这些问题如果用代数或使用带刻度的标尺和量角器都可以很容易得到解决，但如果只允许使用真尺和圆规，那是不可能完成的

---

## 更多的构造

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

## 角度与证明

> section: proofs
> sectionStatus: dev

TODO

---

## 折纸

> id: origami
> section: origami
> sectionBackground: dark

使用真尺和圆规并不是构造几何图形惟一的方式。另一种完全不使用工具的技术是：__折纸__。

_折纸_ _{span.no-voice}(折り紙)_ 一词源于日语 _oru_ (折叠) and _kami_
(纸)，目标是不借助任何额外的工具，比如胶水或剪刀，用一张或多张纸来折出各种物体形状。下面是这些漂亮的物体都是用长方形的纸张折成的，真是难以置信：

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

完成这样的形状需要耗费大量的时间，而且要求非常精确，但是通过一些练习，你可以做到！

::: column.sticky-video(width=360)

    x-video(src="https://static.mathigon.org/videos/crane.mp4" poster="images/crane.jpg" width=360 height=360 controls)

::: column.grow
{.step.active(data-t=0)} 你只需要一张正方形的纸，首先，沿两条对角线对折。

{.step(data-t=16)} 下一步，将纸翻到另一面，再沿着水平与垂直中心对折。

{.step(data-t=38)} 现在拎起这张纸的两个相对的角，如视频所示将它们连在一起，这样就形成了一个较小的底部开放的正方形。

{.step(data-t=51)} 将正方形的左右两个角向中心线方向折叠，然后翻过来，完成同样的操作。

{.step(data-t=83)} 现在沿着水平线向下折叠上面的三角形，然后将最后这两步的折叠重新打开。

{.step(data-t=99)} 接下来的一步很难，拿着纸底部的角，打开的同时沿着开始折出的水平线往上折，之前的一些折叠会反转过来。将纸翻到另外一边，完成同样的操作。

{.step(data-t=135)} 确保两条“腿”朝下面，然后把左右两个角往中心线上折。将纸翻到另外一边，完成同样的操作。

{.step(data-t=172)} 就快要完成了！轻微的打开右侧，将头部向上折到顶部，把纸翻转过来，对另一侧的尾巴做同样的动作。

{.step(data-t=203)} 反向折叠，形成一个嘴，你可以自己选择位置来决定需要折叠多长。

{.step(data-t=215)} 最后，往下折出两个翅膀，然后把它们打开。
:::

---
> id: crane-1

这种 _鹤_ 是最古老最知名的折纸模型之一，这里还有许多[折纸模型说明](/origami)，你可以去尝试！

    figure: x-img(src="images/origami-1.jpg" credit="© Meenakshi Mukerji, Joel Lord, Dirk Eisner, Angie Harms, Michal Kosmulski" width=760 height=118)

---
> id: origami-axioms

### 折纸公理

就像用直尺和圆规画图一样，关于折纸不同的 _折法_ 也有几个公理，由日裔意大利数学家藤田文章（Humiaki Huzita）于1992年首次提出。

::: column(width=220 parent="padded-thin origami-axioms")

    x-video(src="images/origami/axiom-1.mp4" width=220 height=220)

{.text-center} 你可以沿连接任意两点的直线折一条折痕
::: column(width=220)

    x-video(src="images/origami/axiom-2.mp4" width=220 height=220)

{.text-center} 你可把任意点 _P_ 折叠到任意的另外一点 _Q_。这就创建了线`bar(PQ)`的[[垂直平分线|角平分线|中点]]
::: column(width=220)

    x-video(src="images/origami/axiom-3.mp4" width=220 height=220)

{.text-center} 我们可以将任意两条线折叠在一起，如果线是相交的，这就创建了这两条线夹角的 [[角平分线|垂直平分线|中点]]
::: column(width=220)

    x-video(src="images/origami/axiom-4.mp4" width=220 height=220)

{.text-center} 给定一个点 _P_ 和一条直线 _L_，我们可以通过点 _P_ 折一条垂直于 _L_ 的折痕
::: column(width=220)

    x-video(src="images/origami/axiom-5.mp4" width=220 height=220)

{.text-center} 给定两个点 _P_ 和 _Q_ 和一条线 _L_ ，我们可以通过点 _P_ 折一条折痕，使得点 _Q_ 刚好落在 _L_ 上
::: column(width=220)

    x-video(src="images/origami/axiom-6.mp4" width=220 height=220)

{.text-center} 给定任意两点 _P_ 和 _Q_ ，以及任意两条直线 _K_ 和 _L_，我们可以折一条折痕，使得点 _P_ 落在线 _K_ 上，同时使得点 _Q_ 落在线 _L_ 上
::: column(width=220)

    x-video(src="images/origami/axiom-7.mp4" width=220 height=220)

{.text-center} 要给定一个点 _P_ 和两条线 _K_ 和 _L_ ，我们可以折一折痕，使得折痕垂直于 _K_，并使得点 _P_ 落在线 _L_ 上
:::

---
> id: origami-axioms-1

事实证明，这些公理甚至比欧几里德公理更强大，仅使用折纸也可以完成三等分角以及将立方体体积翻倍！当然，折曲线是不可能的，也不能使用折纸化圆为方。

    figure: x-img(src="images/origami-2.jpg" credit="© Dirk Eisner, Meenakshi Mukerji, noricum, fdecomite" width=760 height=123)

---
> id: origami-applications
> goals: video

### 折纸的应用

折纸是一门古老的艺术，在很长一段时间里，主要是一种娱乐性的追求，而没有现实生活中的应用。然而，事实证明，与折纸相关的技术在科技与工程领域非常有用：

::: column(width=300)

    x-video(src="https://static.mathigon.org/videos/space.mp4" poster="images/space.jpg" width=300 height=225 credit="© Brigham Young University")

::: column.grow

#### 折纸在太空中的应用

卫星需要大型太阳能板来发电，但不幸的是，将卫星送上太空的火箭只有很有限的载重空间，任何额外的重要都需要耗费大量的燃料。

折纸技术允许太阳能板在到达太空后“展开”，一些特别巧妙的折叠非常紧凑，仅需要很少的马达和机械部件即可

    // One of these is the __Miura Map Fold__, which was invented by _Korio Miura_.
    // The same is also true for the mirrors of telescopes in space. Larger mirrors
    // can take better images. Engineers can use Origami to build large mirrors that
    // can be folded up very efficiently when loaded onto rockets.

:::

---
> id: origami-applications-3
> goals: video

::: column(width=300)

    x-video(src="https://static.mathigon.org/videos/stents.mp4" poster="images/stents.jpg" width=300 height=225 credit="© Virtual Point")

::: column.grow

#### 折纸在医学领域的应用

在医学上，来自折纸的类似想法被用在范围小得多的地方。2003年，研究人员开发了 _折纸支架_ ：可以插入血管中的微小导管，它们先是折叠起来的，但可以在患者的血液里扩张，用于扩大阻塞的动脉或静脉。

:::

---
> id: origami-applications-1

::: column(width=300)

    x-img(src="images/bridge.jpg" width=300 height=225 credit="© Hiroshima University")

::: column.grow

#### 可折叠的桥梁

英国和美国的军方使用折纸技术去研发可折叠的移动桥梁，这些对于快速穿越河流或者反坦克壕沟非常有用，而且可以比以前的设计更快地部署使用

折纸也可用于救灾，在地震或海啸后快速提供紧急救援车辆，这张图是日本广岛大学设计的原型。

:::

    // ---
    // > id: origami-applications-2
    // > goals: video
    //
    // ::: column(width=300)
    //
    // x-video(src="https://static.mathigon.org/videos/stadium.mp4" poster="images/stadium.jpg" width=300 height=225 credit="© Mercedes Benz Stadium")
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

    x-video(src="https://static.mathigon.org/videos/marine.mp4" poster="images/marine.jpg" width=300 height=225 credit="© Harvard University")

::: column.grow

#### 折纸在海底的应用

海洋深处是地球上人类探索最少的地方之一，生活在那里动物通常又软又嫩，这使得很难捕捉到它们。

这里可以看到一个[十二面体](gloss:dodecahedron)形状的“陷阱”，可以用来捕捉周围的海洋生物，以用于研究。它们是远程控制的，只需要一个电机就可以驱动它的五个手臂完成复杂的折叠动作。

:::

---
> id: origami-applications-5

在日常生活中，也有很多与折纸相关的应用：房屋在地震中被压缩而不是坍塌，汽车中的安全气囊自动展开，自组装的机器人，更高效的包装设计，轻型的飞机等等。

---
> id: origami-wings
> goals: video

### 折纸在自然界中的应用

事实证明，我们人类并不是唯一利用折纸力量的：大自然这样做已经有数百万年了。

这里你可以看到一个 _蠼螋_ 的翅膀，它可以以一种巧妙的方式折叠一起来，当打开的时候，翅膀展开的大小会高达10倍，这是自然界王国的最高“折叠比率”了：

::: column(width=300)

    x-img(src="images/wing.jpg" width=300 height=170 credit="© ETH Zürich")

::: column(width=300)

    x-video(src="https://static.mathigon.org/videos/wing-animation.mp4" poster="images/wing-animation.jpg" width=300 height=170 credit="© ETH Zürich")

:::

---
> id: origami-wings-1

当展开的时候，巨大翅膀会收缩到一个固定的位置，这样昆虫就可以飞起来了，只需要轻轻一碰，翅膀就可以收缩回去。当折叠起来的时候，体积足够小，蠼螋就可以在地下挖隧道。许多其它昆虫、蝙蝠、叶子和花朵也使用了类似的折叠模式，将大面积的表面适配到狭小的空间中去。

科学家们也正在研究这些动植物，希望在工程和技术上模仿它们的能力。潜在的应用可能包括智能手机中的折叠电子元件，为卫星供能的扩展太阳能面板，甚至具有折叠功能的帐篷。

---
> id: origami-dna
> goals: video

::: column(width=320)

    x-video(src="https://static.mathigon.org/videos/dna.mp4" poster="images/dna.jpg" width=320 height=240 credit="© PyMOL")

::: column.grow

“折纸艺术”甚至出现在你自己的身体里：每个人类的细胞都包括约2米长的[DNA](gloss:dna)，一种携带你所有基因信息的[分子](gloss:molecule)。如果把你体内所有细胞的DNA进行组合，它们的长度甚至比从地球到太阳之间距离的140倍还要长！

为了在你身体容下所有的DNA，而不会扭曲或撕裂，每一条链都被特殊的分子卷曲、折叠并固定在适当的位置。

:::

---
> id: origami-dna-1

同样的机制也被出现在生物体内的其它复杂分子所使用。例如：__[蛋白](gloss:protein)折叠__是生物学中最复杂的问题之一，更好地了解它可以帮助科学家在未来开发出新的药物。
