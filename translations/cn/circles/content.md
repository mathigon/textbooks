# 圆与圆周率

## 引言

> section: introduction
> id: intro
> trailer: tBJUNvCBkLo
> color: "#5A49C9"
> level: Intermediate
> next: graph-theory

::: column.grow

只要人类存在，我们就一直仰望天空，并试图通过观察日月星辰的运动来解释地球上面的生命。

古希腊的天文学家最早发现，所有的天体按照称为__轨道__的固定路径运转。他们认为这些轨道总是圆形的。毕竟，圆是各种形状中“最完美”的一种——从各个方向看都是对称的，因此也最适合于揭示宇宙秩序的奥秘。

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption} 地球是 _托勒密宇宙_ 的中心。

:::

---
> id: radius
> goals: compass

[__圆__](gloss:circle) 上的任意一点到圆心的距离都是相等的。这意味着我们可以使用[圆规](gloss:compass)进行画圆：

::: column(width=320)

    x-geopad(width=320 height=300 style="position: relative;")
      svg(style="stroke-linecap: round; stroke-linejoin: round")
        circle.move(name="a" cx=160 cy=150 target="r d")
        circle.move.reveal(name="b" cx=250 cy=240 project="circle(a, 120)" target="r" when="compass")
        path.red(x="segment(a,b).contract(0.08)" target="r" arrows="both" hidden)
        path(name="c1" x="arc(a,b,1.99*pi)" hidden)
        path.blue(x="segment(b.rotate(pi/3,a),b.rotate(-2*pi/3,a)).contract(0.01)" target="d" arrows="both" hidden)
        path.green(x="arc(a,b.add(b.subtract(a).unitVector.scale(12)),1.99*pi).contract(0.02)" target="c" arrows="start" hidden)
      x-play-btn

::: column.grow

{.reveal(when="compass")} 圆有三个要素你需要知道：

* {.reveal(when="compass" delay="1000")} [{.step-target.pill.b.red}半径](target:r)
  指圆心与圆弧上点的距离。
* {.reveal(when="compass" delay="4000")} [{.step-target.pill.b.blue}直径](target:d)
  表示圆上两个相对的点的距离。它通过圆心，长度为半径的[[一半|两倍|相等长度]]。
* {.reveal(when="blank-0")} [{.step-target.pill.b.green}周长](target:c)
 （边缘长度）指环绕圆一周的长度。

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

圆有一个重要的性质就是所有的圆都[相似](gloss:similar)。你可以通过展示来证明用简单的[平移](gloss:translation)和[缩放](gloss:dilation)可以让所有的圆重合。

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

你可能记得，对于相似多边形，对应边的比值总是固定的。圆也有相似的特征：所有圆的[周长](gloss:circle-circumference) 和[直径](gloss:circle-diameter)的比值总是相等的。它的值恒等于3.14159……——一个称为[__圆周率__](gloss:pi)的神秘数字，它通常用希腊字母_π_来表示。圆周率是无限不循环的小数，不按任何循环节循环。

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

下图中是一个直径为1的轮子。当你“展开”它的边缘，你可以发现它的长度恰好是[[`pi`|`2 * pi`|3]]。

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

如果一个圆的直径为_d_，则它的周长`C = π × d`。同样的，如果一个圆的[半径](gloss:circle-radius)为_r_，那么它的周长

{.text-center} `C =` [[`2 π r`|`π r`|`π r^2`]]。

---
> id: nature

圆是完全对称的，没有任何像多边形的拐角一样的“弱点”。这就是为什么圆在自然界中无处不在的一个原因：

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption} 花朵

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

{.caption} 星球

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

{.caption} 树木

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

{.caption} 水果

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

{.caption} 肥皂泡

:::

{.r} 还有很多其它的例子：从彩虹到波浪。你还能想到其它的吗？
 [Continue](btn:next)

---
> id: max-area
> goals: area-circle

::: column.grow

经过证明给定周长的图形中圆的面积是最大的。例如，如果你有一个长为100\ m的绳子，你可以通过围成一个圆形来获得最大的空间（而不是其它如四边形或三角形的形状）。

在自然界中，像水滴或气泡的物体可以通过变成圆球状来_节约能量_，并减少它们的表面积。

::: column(width=320)

    x-select.segmented
      div(data-value="0") 三角形
      div(data-value="1") 正方形
      div(data-value="2") 五边形
      div(data-value="3") 圆
    svg(width=320 height=200)

{.caption} _周长_ = __{.m-green}100__, _面积_ = __${area}__

:::

---
> id: area
> goals: slider

### 圆的面积

那么我们如何准确计算一个圆的面积呢？让我们来尝试曾用于[求四边形面积的方法](/course/polyhedra/quadrilaterals)：我们先把图形分割几个不同的部分，再把它们重新组合成一个我们熟知其面积求法的图形（如长方形或三角形）。

唯一不一样的地方是，圆是曲线，我们需要做一些估算：

::: column(width=340)

    svg.circle-area.red(width=340 height=245)
      defs
        marker#area-arrow(refX=4 refY=4 markerWidth=5 markerHeight=8 orient="auto-start-reverse")
          path(d="M 1 1 L 4 4 L 1 7" stroke-width=1)
      g.labels
        line.reveal(x1=62 y1=158 x2=62 y2=212 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=80 y1=226 x2=268 y2=226 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=50 y=190 when="blank-1") r
        text.reveal(x=165 y=241 when="blank-2") πr
    x-slider(steps=400)

::: column.grow

这里我们可以看到一个圆分成了 ${n1} 块楔形。移动滑块，把它们排成一行。

{.reveal(when="slider")} 如果我们增加楔形的数量到 ${n1}{n1|6|6,30,2}。这个形状开始越来越接近于 [[长方形|圆|正方形]]。

{.reveal(when="blank-0")} 长方形的高度等于圆的[[半径|直径|周长]]。
_{span.reveal(when="blank-1")} 长方形的宽等于圆[[周长的一半|周长|半径的2倍]]。_
_{span.reveal(when="blank-2")} (注意观察一半的楔形向下，一半的向上。)_

{.reveal(when="blank-2" delay=1000)} 所以长方形的面积近似于`A = π r^2`。

:::

---
> id: area-1
> goals: slider

::: column(width=340)

    svg.circle-area.blue(width=340 height=245)
      g.labels
        line.reveal(x1=20 y1=156 x2=20 y2=206 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=34 y1=218 x2=355 y2=218 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=10 y=185 when="blank-1") r
        text.reveal(x=165 y=236 when="blank-2") 2πr
    x-slider(steps=400)

::: column.grow

这里你可以看到一个圆被分成 ${toWord(n)}个环形。就像前面那样，你可以移动滑块来“展开”环形。

{.reveal(when="slider")} 如果我们不断增加楔形的数量到${n2}{n2|4|2,12,1}，这个形状逐渐接近于一个[[梯形|长方形|三角形]]。

{.reveal(when="blank-0")}三角形的高度等于圆的[[半径|直径|周长]]。
_{span.reveal(when="blank-1")} 三角形的底等于圆的[[周长|直径的两倍]]。_
_{span.reveal(when="blank-2")} 所以三角形的面积近似于_

{.text-center.reveal(when="blank-2")} `A = 1/2 "base" × "height" = π r^2`。

:::

---
> id: area-2

如果我们可以使用无限个环形或楔形，上面的近似值就刚好完美——并且他们得出了两个一样的圆的面积公式：

{.text-center.r} `A = π r^2`。

[Continue](btn:next)

---
> id: pi-approximations

### 圆周率的计算

前文你发现，`π = 3.1415926…`不是一个简单的整数，而是小数部分无穷无尽没有任何重复样式出现。具有这种性质的数我们称之为[__无理数__](gloss:irrational-numbers)，这也意味着`π` 不用被表示成一个像`a/b`这样的最简分数。

这也意味着我们无法写出圆周率的_所有_数位，毕竟它是无限的。古希腊和中国的数学家通过正多边形近似估计圆算出了圆周率的小数点后4位。注意观察，当边数不断增加时，多边形看起来[[完全|不|越来越]]像一个圆。

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

在1665年，[艾萨克•牛顿](bio:newton)成功计算出小数点后15位。时至今日，我们可以使用超级计算机来计算出更高精度的圆周率。

目前记录是31.4万亿位。用一本书印刷这些数的数将会达400千米厚——这是地球上[国际空间站](gloss:iss)轨道的高度。

当然，你不需要记住圆周率的小数点后面的那么多位数。事实上，分数 `22/7 = 3.142…` 已经相当接近了。

:::

---
> id: pi-sequence

一个接近圆周率的计算方法是使用无穷数列进行表示。下面是一个由[戈特弗里德•威廉•莱布尼茨](bio:leibniz) 在1676年发现的例子：
{.text-center} `π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} 当我们计算这个数列的越来越多项时，总是伴随着相同的模式，结果也越来越接近圆周率。

---
> id: pi-colours
> goals: hover

::: column.grow

许多数学家认为圆周率有一个特别奇特的性质：这是一个__常数__。这就是说它的数位从0到9完全随机出现，就如自然界随机滚动一个10面的骰子无数次一般，来决定圆周率的数值。

这里你可以看到圆周率的前100位。鼠标在一些格子上面移动，可以看到这些数位的分布情况。

::: column(width=330)

    .pi-grid
      .pi-left
        .pi-cell 3
        .pi-operator .
      .pi-mid
        for d in '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'.split('')
          .pi-cell= d
      .pi-right: .pi-operator …

:::

---
> id: pi-digits
> goals: search

如果圆周率是一个常数，意味着你随便想一个数字串，它将出现在某个数位里面。下面你可以在圆周率的前1百万位搜索——是否包含你的生日？

::: .box.f-red.pi-box
#### 圆周率的前1百万位

    .pi-controls
      | 搜索一个数字串：
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---
> id: pi-movies

我们甚至可以把一本书，像《哈利波特》,编码成一个很长的数字字符串（字母a为01，字母b为02，以此类推。）。如果圆周率是一个常数，这个数字串将会出现在它的某个数位里面——但这可能需要耗数百万年的时间去计算足够的数位去找到它。

圆周率虽然是一个容易理解的数，不过在科学和数学领域有举足轻重的作用。这就是圆周率在我们文化中变得非常流行的一个原因（至少，相对于其它数学主题。）：

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")
    p.caption 圆周率是《博物馆奇妙夜2》中一个神秘组合的金牌。

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")
    p.caption 弗林克教授《辛普森的一家》中的在一个安静的科学家的房子里说圆周率等于3。

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")
    p.caption 斯波克《星际迷航》通过让一个邪恶的电脑计算圆周率的最后一位来破坏它。

:::

---
> id: pi-day

每年甚至有一个_圆周率日_，要嘛是出现在3月14日，因为 `π≈3.14`，要嘛就是在7月22日，因为`π ≈ 22/7`。

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

--------------------------------------------------------------------------------

## 角度制与弧度制

> section: radians
> id: degrees

目前在几何中，我们常用[度数](gloss:degrees)来表示角的大小。旋转__{.m-red}一圈__ 为[[360]]°， __{.m-green}半圈__为[[180]]°，__{.m-yellow}四分之一__圈为[[90]]°，以此类推。

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a0" hidden)
      circle(x="point(80,80)" name="b0")
      circle(x="c0" hidden)
      path.red.fill(x="angle(c0,b0,a0)" round size=40)
      path(x="segment(a0,b0)")
      path(x="segment(b0,c0)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a1" hidden)
      circle(x="point(80,80)" name="b1")
      circle(x="c1" hidden)
      path.green.fill(x="angle(c1,b1,a1)" round size=40)
      path(x="segment(a1,b1)")
      path(x="segment(b1,c1)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a2" hidden)
      circle(x="point(80,80)" name="b2")
      circle(x="c2" hidden)
      path.yellow.fill(x="angle(c2,b2,a2)" round size=40)
      path(x="segment(a2,b2)")
      path(x="segment(b2,c2)")

:::

---
> id: degrees-1

{.r}数字360是一个非常实用的数，因为它可以被许多其它如：2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 等等数字整除。这意味着平均分一个圆常常得到一个整数。那你是否好奇这个数字360是怎么来的呢？ [Continue](btn:next)

---
> id: babylon

::: column.grow

恰巧，360度是我们至今仍然使用的一个最古老的数学概念之一。起源于大约5000年前的古巴比伦。

当时，数学的一个最重要的应用之一就是天文学。_太阳_ 决定这四季的轮转，农民们在种地的时候需要知道这些。类似的，_月亮_ 决定了潮汐，这对渔民们来说也很重要。人们还研究根据星象来预测未来或者与天神沟通。

::: column(width=260)

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} 一块计算`sqrt(2)`的古巴比伦碑文

:::

---
> id: constellations
> goals: rotate

天文学家们发现夜晚出现的星座每天会转动一点点，直到约360天后，又旋转回开始的地方。这很可能就是为什么把圆平均分成360度的原因。

    figure: .constellations
      .label.md 第${day}天的午夜
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

当然，实际上一年有365天（好吧，准确的说是365.242199天），但是巴比伦的数学家使用简单的日晷，而这个近似值又是非常合用的。

这也和他们使用的60进制体系（由于`6 xx 60 = 360`）相匹配。这个体系也是我们目前在用的一分钟含60秒和一小时含60分钟的原因——尽管其他的单位使用的是[10进制](gloss:base-10) （例如，10年为一个年代，而100年为一个世纪）。

::: column.grow

对于大多数人而言，测量角的度数只是我们的习性：360°摄像，滑板可以转540°，还有一些人的想法可以来个180°的大转弯。

从一个数学家的观点来看，选择360完全是随意的。如果我们住在火星上，一个圆可能会有670°，而在木星上甚至一年为10,475天。

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} 540 MC短视频，540°旋转

:::

---
> id: radians

### 弧度制

相对于把圆分成一定数量的份数（如360度），数学家通常更愿意使用一个[__单位圆__](gloss:unit-circle) 的[周长](gloss:circle-circumference)来表示角度。

::: column(width=280)

    x-geopad(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path.thin(x="circle(c,100)" name="circ")
      circle.move.blue.pulsate(cx=240 cy=140 name="a" project="circ")
      circle.move.green(cx=240 cy=140.4 name="b" project="circ")
      path.fill.green(x="angle(b,c,a)" label="${round(ang.deg)}°" name="ang" round)
      path.red.thick(x="arc(c,b,ang.rad)" label="${rad(ang.rad)}π")
      path.thin(x="segment(c,a)")
      path.thin(x="segment(c,b)")

::: column.grow

一个 [完整的](action:setState(0)) 圆的周长为 _{x-equation.small(solution="2 π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-0")} 旋转 [半个圆](action:setState(1))，相应的距离为
_{x-equation.small(solution="π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-1")} 旋转 [四分之一个圆](action:setState(2))，相应的距离为
_{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_.

{.reveal(when="eqn-2")} 凡此种种：这种表示角度的方式称之为[__弧度制__](gloss:radians)（你可以用“单位半径”来记忆）。

:::

---
> id: radians-conversion

每一个角的角度都有一个相等的弧度对应。两者的转换也非常简单——就像你转换米和千米一样，又比如摄氏度和华氏度的转换：

{.text-center} __{.m-red} 360°__ _{span.space}=_ __{.m-green} 2*π* rad__

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left}`=>`_
__{.m-red} 1°__ _{span.space}=_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} rad__

::: column(width=180)

{.text-center} _{span.rotate.right}`=>`_
__{.m-green} 1 rad__ _{span.space}=_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red} °__

:::

---
> id: radians-table

你可以使用π的倍数或者就是一个小数来表示弧度。你可以完成下面关于相等角度与弧度转换的表格吗？

| __{.m-red}角度__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_    |
| __{.m-green}弧度__   | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2    | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### 路程

你可以把弧度当做沿着一个单位圆的周长运动一周的路程。这个在处理弧线上运动的物体是特别有用。

::: column.grow

例如，[国际空间站](gloss:iss)绕地球一种需要1.5小时。这意味着它 __旋转的速度__ 为 [[`(2 pi)/1.5`|`1.5/(2 pi)`|`1.5 * pi`]]弧度每小时。

{.reveal(when="blank-0")} 在一个[单位圆](gloss:unit-circle)中，旋转的速度和 __实际的__ 速度是一样的，因为周长等于旋转一周的弧度（都是`2π`）。

{.reveal(when="blank-0" delay=1000)} ISS的轨道半径为6800千米，这意味着ISS的 _实际_ 运行速度为 [[`(2 pi)/1.5 xx 6800`|`(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")}= 28483 km/h._

::: column(width=300)

    x-geopad.r(width=300 height=300)
      .earth
      svg.r
        circle(x="point(150,150)" name="c")
        circle(x="point(280,150)" name="a")
        circle(x="a.rotate(p*2*pi,c)" name="b" hidden)
        path.red(x="arc(c,a,p*2*pi)")
        path.fill(x="angle(a,c,b)" label="${round(2*p,1)}π" round)
        path.red(x="segment(c,a)")
        path.red(x="segment(c,b)")
      .var.iss(style="transform: translate(${a.rotate(p*2*pi,c).x}px,${a.rotate(p*2*pi,c).y}px) rotate(${(p+0.25)*2*pi}rad)")
      .time.var ${round(p*1.5,1)}h
      x-play-btn

:::

---
> id: radians-distance-1

从这个例子中，你可以感受到弧度是一个比角度更便利的单位吗？一旦你知道了旋转的速度，我们把它乘以半径就可以轻易的得到实际的速度。

下面是另外一个例子：假设你的汽车轮子的半径0.25\ m。如果你开车的速度为20\ m/s，你的车轮以[[`20/0.25 = 80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]]弧度每秒的速度运转_{span.reveal(when="blank-0")}(或 `80/(2pi) = 13` 圈每秒。）_

---
> id: radians-trig

### 三角学

对于最简单的几何问题，角度和弧度完全可以互换——你可以选择一个你喜欢的，或者根据题目要求选择一个单位填入答案。但是，一旦你开始学习更高级的[三角学](gloss:trigonometry) 或[微积分](gloss:calculus)，就会发现弧度制将比角度制更好用。

::: column.grow

大部分的计算器都有一个特别的按键来切换角度和弧度。像[__正弦__](gloss:sin)、[__余弦__](gloss:cos)和__正切__这样的三角函数，输入一个角度，就会得到它们的反三角函数__反正弦__、__反余弦__或__反正切__的函数值。当前使用的计算器设置决定了角度使用哪个单位。

尝试使用计算器来计算

{.text-center} sin(30°) = [[0.5]] _{span.eqn-gap}_ cos(1°) = [[0.999]]<br>
sin(30 rad) = [[-0.988]] _{span.eqn-gap}_ cos(1 rad) = [[0.54]]

::: column(width=300)

    .calculator
      .display
        span
        .setting DEG
      .button.num 7
      .button.num 8
      .button.num 9
      .button.wide sin
      .button.num 4
      .button.num 5
      .button.num 6
      .button.wide cos
      .button.num 1
      .button.num 2
      .button.num 3
      .button.wide tan
      .button.num 0
      .button .
      .button C
      .button.wide.mode mode

:::

---
> id: small-angle

使用弧度制对[__正弦函数__](gloss:sin)有一个特别有意思的优势。如果`θ`是一个非常小的角（小于20°或0.3rad），那么 `sin(θ) ≈ θ`。例如：

{.text-center} sin(${x}{x|0.1|0,0.5,0.05}) `≈` ${sin(x)}…

{.reveal(when="var-0")} 这个叫做__小角度近似__，可以大大简化某些包含三角函数的特定方程的求解。你在未来将会学到更多关于这方面的知识。

--------------------------------------------------------------------------------

## 切线、弦和弧

> section: tangets-chords-arcs
> id: circle-parts

在前面的部分，你学了许多与圆有关的概念——如圆心、半径、直径和周长等。不过，还有很多可以帮助我们解决更复杂问题的圆的部分要素。

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle(x="point(150,150)" name="x")

      path.teal.fill.reveal(x="sector(x,d1,pi/2.5)" target="sector" when="next-3" label="Sector" label-class="white")
      path.purple.fill.reveal(x="arc(x,b1,pi/2.5)" target="segment" when="next-4" label="Segment")

      path.black(x="circle(x,100)" name="c")

      circle.red(x="c.at(0.5)" name="a1" target="secant")
      circle.red(x="c.at(0.7)" name="a2" target="secant")
      path.red.thick(x="line(a1,a2)" label="Secant" target="secant")

      circle.green.reveal(x="c.at(0.8)" name="b1" target="chord" when="next-0" animation="pop")
      circle.green.reveal(x="c.at(0)" name="b2" target="chord" when="next-0" animation="pop")
      path.green.thick.reveal(x="segment(b1,b2)" label="Chord" target="chord" when="next-0" animation="draw")

      circle.blue.reveal(x="c.at(0.1)" name="c1" target="tangent" when="next-1" animation="pop")
      path.blue.thick.reveal(x="c.tangentAt(0.1)" label="Tangent" target="tangent" when="next-1" animation="draw")

      circle.yellow.reveal(x="c.at(0.2)" name="d1" target="arc" when="next-2" animation="pop")
      circle.yellow.reveal(x="c.at(0.4)" name="d2" target="arc" when="next-2" animation="pop")
      path.yellow.thick.reveal(x="arc(x,d1,pi/2.5)" label="Arc" target="arc" when="next-2" animation="draw")

::: column.grow(parent="right")

* {.r} [{.red} 割线](target:secant) 指的是经过圆上任意两点的直线。[Continue](btn:next)
* {.r.reveal(when="next-0")} [{.green} 弦](target:chord) 指的是连接圆上任意两点的线段。 [Continue](btn:next)
* {.r.reveal(when="next-1")} [{.blue} 切线](target:tangent) 指的是与圆只有一个交点的直线。这个点成为__切点__。 [Continue](btn:next)
* {.r.reveal(when="next-2")} [{.yellow} 弧](target:arc) 指的是圆上任意两点间的部分。[Continue](btn:next)
* {.r.reveal(when="next-3")}  [{.teal} 扇形](target:sector) 指的是一条圆_弧_和经过这条圆弧两端的_两条半径_所围成的图形。
  [Continue](btn:next)
* {.r.reveal(when="next-4")} 还有， [{.purple} 弓形](target:segment)指的是圆上由一条_弦_和所对的_弧_围成的图形。
  [Continue](btn:next)

:::

---
> id: circle-parts-1

在本节，我们将研究所有这些要素之间的关系，并证明与它们有关的性质定理。先别着急去记这么多的概念——你还可以使用[术语表](->.footer-link[data-modal=glossarym])。

---

### 切线

{.todo} 即将推出!

---

### 弦

{.todo} 即将推出

---
> id: earth-arc

### 弧与扇形

::: column.grow

大部分的古希腊科学家都认为地球是一个球体。有大量的证据：从轮船在海上消失于地平线，再到夜晚星星的圆周运动。

不幸的是，没有人准确的知道地球有多大——直到公元前200年，数学家[埃拉托色尼](bio:eratosthenes) 利用几何发现了一个测量地球半径的精妙方法。我们所需的只是一点关于圆的弧和扇形的知识。

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: arcs

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ" label="A")
      circle.move(cx=85 cy=60 name="b" project="circ" label="B")

      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad).minor" label="Sector" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad).minor" label="Arc" target="arc")
      path.purple.thick.transparent(x="arc(c,a,2*pi-angle(b,c,a).rad).major" target="major")

::: column.grow

正如你在图中看到的，一条 [{.red} 弧](target:arc) 是圆的[[直径|周长|切线]]的一部分，而[{.yellow} 扇形](target:sector)则是圆[[半径|边缘|内部]]的一部分。

::: .reveal(when="blank-0 blank-1")
点 _A_ 和点 _B_ 之间的弧通常记为 `arc(AB)`。这个定义有点不严谨：连接点A和点B之间的弧还有 [{.purple} 另一条弧](target:major)在圆上的另一边。

另个中较短的弧称之为 __劣弧__，而较长的则称之为 __优弧__。如果点_A_和点_B_恰好相对且两条弧的长度相等时，我们称之为[[直径|周长|半圆]]。
:::

:::

---
> id: arcs-1

::: column.grow

计算弧长或扇形面积，我们需要知道它们所在圆中所对的角：也就是[{.blue} 圆心角](target:angle)。

注意观察，弧、扇形和圆心角所占一个完整圆的比例是 _相同_ 的。例如，如果[{.blue} 圆心角](target:angle)为 [90°](action:set90Deg())，则占了[{.teal} 整个圆](target:fangle)的[[one quarter|one half|one third]]。

::: .reveal(when="blank-0")
也就是说 [{.red}弧长](target:arc) 也是[{.purple} 整个圆周长](target:circ)的`1/4` ，且 [{.yellow} 扇形的面积](target:sector) 也是[{.orange} 整个圆面积](target:area) 的`1/4`。

我们可以用下面的公式表示它们间的关系：

{.text-center} `"弧长" / "周长" = blank("扇形的面积","圆的半径","弧的面积") / "圆的面积" = "圆心角度数" / blank("360°","180°","90°")`
:::

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ")
      circle.move(cx=85 cy=60 name="b" project="circ")

      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad)" label="Sector" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad)" label="Arc" target="arc")
      path.fill.blue(x="angle(b,c,a)" target="angle")

      path.fill.orange.transparent(x="circ" target="area")
      path.thick.purple.transparent(x="circ" target="circ")
      path.teal.fill.transparent(x="circle(c,32)" target="fangle")

:::

---
> id: arcs-2

那么我们就可以对上面的公式进行变形得到我们想要的量。例如，

::: column(width=320 parent="padded-thin")

| [弧长](pill:red) | = | `"周长" × c/360` |
|                    | = | `2 π r × c/360` |
{.eqn-system}

::: column(width=320)

| [扇形面积](pill:yellow) | = | `"圆的面积" × c/360` |
|                          | = | `π r^2 × c/360`     |
{.eqn-system}

:::

其中_r_是圆的半径，_c_为圆心角的度数。

---
> id: arcs-rad

如果我们用[弧度](gloss:radians)来表示圆心角而不是[角度](gloss:degrees)，那么我们使用类似的公式，但是必须把360°替换为[[`2 π`|`1/2 π`|`π`]]：

::: .reveal(when="blank-0")
::: column(width=320 parent="padded-thin")

| [弧长](pill:red) | = | `2 π r × c/(2π)` |
|                    | = | `r × c`          |
{.eqn-system}

::: column(width=320)

| [扇形面积公式](pill:yellow) | = | `π r^2 × c/(2π)` |
|                             | = | `1/2 r^2 c`      |
{.eqn-system}

:::

注意公式怎样变得更简洁，而且_π_都被抵消掉了。这就是为什么，你看可能印象，[弧度的定义](/course/circles/radians#radians) 就是基于半径为1 的圆的弧长。

现在你就知道怎么使用弧和扇形来计算地球的周长了。 [Continue](btn:next)
:::

---
> id: eratosthenes

在古埃及，尼罗河旁的城市_阿斯旺_。阿斯旺拥有一个奇特的庄园而闻名：每年有个时刻——在6月21日夏至的中午，当阳光照射到一口井的底部时。就在那时，整个井的底部被照亮了，边缘却没有，意味着太阳就在井的正上方。

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption}古埃及人通过走路的步数来测量距离。

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} 一些资料称“埃拉托色尼井”位于尼罗河的 _象岛_。

:::

数学家[埃拉托色尼](bio:eratosthenes) 居住在距阿斯旺北部800\ km的_亚历山大港_，他曾是亚历山大图书馆的馆长。亚历山大港市中心矗立着一座方尖碑，高耸的顶部有个窄小的金字塔形的纪念碑。

埃拉托色尼注意到夏至中午时分，纪念碑有一个投影——这意味着天上的太阳_不是_直射。他推断这可能是因为地球是弯曲的，并意识到利用这个可以计算出地球的周长。

---
> id: eratosthenes-1

::: column.grow

{.r} 在这里你可以看到阿斯旺水井和亚历山大方尖碑。太阳光线直射到井中，但是与方尖碑有一个夹角并产生了投影。 [Continue](btn:next)

::: .reveal(when="next-0")
埃拉托色尼测量了投影的[{.teal} 角度](target:angle1) 为7.2°。这个角度与亚历山大港到阿斯旺的[{.red} 弧线](target:arc) 的[{.purple} 圆心角](target:angle2) 相等，因为它们是[[内错角|同位角|对顶角]]。
:::

::: .reveal(when="blank-0")
现在我们可以使用前面得到的弧长公式：

{.text-center} `pill("弧长","red","arc") / pill("周长","blue","circ") = (input(7.2)"°") / "360°"`
:::

::: .reveal(when="blank-1")
变形一下，我们就可以算出地球的周长

{.text-center} `pill("周长","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`
:::

::: .reveal(when="blank-2")
最后，我们知道圆的周长为`C = 2πr`，因此地球的半径为

{.text-center} `r_"地球" = (40000 "km") / (2 pi) ≈ 6400 "km"`.
:::

::: column(width=300)

    x-geopad.sticky(width=300 height=400)
      img.sunrays(src="images/sunlight.png" width=300 height=400)
      svg.r
        defs: radialGradient#grad1(cx=200 cy=200 r=200 gradientUnits="userSpaceOnUse")
          stop(offset=0 stop-color="#63a3ff")
          stop(offset=1 stop-color="#0f82f2")

        circle(x="point(150,250)" name="c" hidden)
        circle(x="point(150,120)" name="a" hidden)
        circle.move.pulsate(cx=80 cy=140 name="b" project="arc(c,point(64,155),1.47)")
        circle(x="c.add(b.subtract(c).scale(1.465))" name="d" hidden)

        path.shadow(x="triangle(c,d,point(d.x,c.y))")
        path.earth(d="M153,120,152,150h-4l-.95-30a130,130,0,1,0,5.9,0Z" fill="url(#grad1)")
        path.earth-cover.fill(x="circle(c,130)")

        path.red.thick.reveal(when="next-0" animation="draw" x="arc(c,b,angle(b,c,a).rad).minor" target="arc")
        path.fill.teal.reveal(when="next-0" x="angle(c,d,point(d.x,c.y)).sup" target="angle1")
        path.fill.purple.reveal(when="next-0" x="angle(b,c,a).sup" name="ang" target="angle2")
        path.thin.white.reveal(when="next-0" animation="draw" x="segment(c,b)")
        path.blue.transparent(x="circle(c,130)" target="circ")

        image.obelisk.var(xlink:href="images/obelisk.svg" height=60 width=8 style="transform: translate(${b.x-4}px, ${b.y-60}px) rotate(-${angle(b,c,a).rad}rad)")

:::

---
> id: eratosthenes-2

埃拉托色尼的测量是古代一项最重要的实验之一。他的估计地球大小是结果是非常精确的，特别是他只用了非常基本的测量工具。

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

当然，要把他的原始计算结果翻译成像千米这样的现代单位。在古希腊，距离大小用斯特迪亚（约为160m）表示，但那时没有通用的标准。每个地区都有一点差异，我们也不知道埃拉托色尼用的是哪个。

在后来的几个世纪，科学家们试图用其它的方法来测量地球的半径——有时候结果差异很大，或者就是错误的。

就是因为其中的一个错误方法引导克里斯托弗•哥伦布从葡萄牙向西航行。他以为地球比实际的小很多，并希望抵达印度。事实上，他到达了一个中间完全不一样的大陆：美洲。

:::

---

### 弓形

{.todo} 即将推出!

--------------------------------------------------------------------------------

## 圆的定理

> section: circle-theorems
> sectionStatus: dev

https://www.mathsisfun.com/geometry/circle-theorems.html
https://mathsmadeeasy.co.uk/gcse-maths-revision/circle-theorems-gcse-revision-and-worksheets/
http://amsi.org.au/teacher_modules/Circle_Geometry.html

__[CC] Identify and describe relationships among inscribed angles, radii, and
chords. Include the relationship between central, inscribed, and circumscribed
angles; inscribed angles on a diameter are right angles; the radius of a circle
is perpendicular to the tangent where the radius intersects the circle.__

An inscribed angle is an angle with its vertex is the circle and its sides
contain chords. The intercepted arc is the arc that is on the interior of the
inscribed angle and whose endpoints are on the angle. The vertex of an inscribed
angle can be anywhere on the circle as long as its sides intersect the circle to
form an intercepted arc.

__Inscribed Angle Theorem__
The measure of an inscribed angle is half the measure of its intercepted arc.
To prove the Inscribed Angle Theorem, you would need to split it up into three
cases, like the three different angles drawn from the Investigation.

__Congruent Inscribed Angle Theorem__
Inscribed angles that intercept the same arc are congruent.

__Inscribed Angle Semicircle Theorem__
An angle that intercepts a semicircle is a right angle.

In the Inscribed Angle Semicircle Theorem we could also say that the angle is
inscribed in a semicircle. Anytime a right angle is inscribed in a circle, the
endpoints of the angle are the endpoints of a diameter. Therefore, the converse
of the Inscribed Angle Semicircle Theorem is also true.

When an angle is on a circle, the vertex is on the circumference of the circle.
One type of angle on a circle is one formed by a tangent and a chord.

__Chord/Tangent Angle Theorem__
The measure of an angle formed by a chord and a tangent that intersect on the
circle is half the measure of the intercepted arc.

From the Chord/Tangent Angle Theorem, we now know that there are two types of
angles that are half the measure of the intercepted arc; an inscribed angle and
an angle formed by a chord and a tangent. Therefore, any angle with its vertex
on a circle will be half the measure of the intercepted arc.

An angle is considered inside a circle when the vertex is somewhere inside the
circle, but not on the center. All angles inside a circle are formed by two
intersecting chords.

__Intersecting Chords Angle Theorem__
The measure of the angle formed by two chords that intersect inside a circle is
the average of the measure of the intercepted arcs.

An angle is considered to be outside a circle if the vertex of the angle is
outside the circle and the sides are tangents or secants. There are three types
of angles that are outside a circle: an angle formed by two tangents, an angle
formed by a tangent and a secant, and an angle formed by two secants. Just like
an angle inside or on a circle, an angle outside a circle has a specific
formula, involving the intercepted arcs.

__Outside Angle Theorem__
The measure of an angle formed by two secants, two tangents, or a secant and a
tangent drawn from a point outside the circle is equal to half the difference
of the measures of the intercepted arcs.

When two chords intersect inside a circle, the two triangles they create are
similar, making the sides of each triangle in proportion with each other. If we
remove AD and BC the ratios between AE, EC, DE, and EB will still be the same.

__Intersecting Chords Theorem__
If two chords intersect inside a circle so that one is divided into segments of
length a and b and the other into segments of length c and d then ab=cd. In
other words, the product of the segments of one chord is equal to the product
of segments of the second chord.

In addition to forming an angle outside of a circle, the circle can divide the
secants into segments that are proportional with each other.

If we draw in the intersecting chords, we will have two similar triangles.

From the inscribed angles and the Reflexive Property (∠R≅∠R),△PRS∼△TRQ. Because
the two triangles are similar, we can set up a proportion between the
corresponding sides. Then, cross-multiply. ac+d=ca+b⇒a(a+b)=c(c+d)

__Two Secants Segments Theorem__
If two secants are drawn from a common point outside a circle and the segments
are labeled as above, then a(a+b)=c(c+d). In other words, the product of the
outer segment and the whole of one secant is equal to the product of the outer
segment and the whole of the other secant.

If a tangent and secant meet at a common point outside a circle, the segments
created have a similar relationship to that of two secant rays. Recall that the
product of the outer portion of a secant and the whole is equal to the same of
the other secant. If one of these segments is a tangent, it will still be the
product of the outer portion and the whole. However, for a tangent line, the
outer portion and the whole are equal.

__Tangent Secant Segment Theorem__
If a tangent and a secant are drawn from a common point outside the circle (and
the segments are labeled like the picture to the left), then a2=b(b+c). This
means that the product of the outside segment of the secant and the whole is
equal to the square of the tangent segment.

---

### Thales' Theorem

Proof using isosceles triangles

Combines all of Euclidean Geometry

{.todo} TODO

--------------------------------------------------------------------------------

## 循环多边形

> sectionStatus: dev
> section: cyclic-polygons

__[CC] Construct an equilateral triangle, a square, and a regular hexagon
inscribed in a circle.__

An inscribed polygon is a polygon where every vertex is on a circle. Note, that
not every quadrilateral or polygon can be inscribed in a circle. Inscribed
quadrilaterals are also called cyclic quadrilaterals. For these types of
quadrilaterals, they must have one special property. We will investigate it here.

This investigation shows that the opposite angles in an inscribed quadrilateral
are supplementary. By cutting the quadrilateral in half, through the diagonal,
we were able to show that the other two angles (that we did not cut through)
formed a linear pair when matched up.

Inscribed Quadrilateral Theorem: A quadrilateral is inscribed in a circle if
and only if the opposite angles are supplementary.

--------------------------------------------------------------------------------

## 球体、锥体与柱体

> section: spheres-cones-cylinders
> id: solids

在前面的部分，我们研究了平面内圆的有关性质。但是我们的世界实际上是立体的，那么我们一起来研究下与圆有关的立体图形：

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} 一个[__圆柱__](gloss:cylinder) 包含两个部分，平行的底面与弯曲的侧面围成的。

::: column(width=220)

    x-solid(size=220)

{.text-center} 一个 [__圆锥__](gloss:cone) 包含一个底面并与一个点（称为顶点）相连。

::: column(width=220)

    x-solid(size=220 static)

{.text-center} 一个 [__球__](gloss:sphere) 上的任意一点到球心的距离都是相等的。

:::

注意这个关于球的定义与[[半径|圆|正方体]]的定义有哪些类似的地方——出了有三个维度。

---
> id: gasometer

### 圆柱

::: column.grow

这边你可以看到德国奥伯豪森的圆柱形_储气罐_。它曾用于储存天然气为附近的工厂和发电站的提供能源。储气罐高达120m，底座和顶部是两个半径为35m的圆形。工程师们可能想回答两大重要的问题：

* 这里能装多少的天然气？这是圆柱的[[直径|体积|面积]]。
* {.reveal(when="blank-0")} 建这么大一个储气罐需要多少的钢铁？近似于圆柱的[[表面积|对角线|周长]]。

{.reveal(when="blank-0 blank-1")} 让我们一起来探索者两个问题的答案吧！

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} Gasometer Oberhausen

:::

---
> id: cylinder-prism

#### 圆柱的体积

圆柱的顶部和底部是两个全等的圆，叫做 _底_。圆柱的 __{.m-blue} 高 *h*__ 是两个底面间的垂直距离，而圆柱体的 __{.m-red} 半径 *r*__ 则只是表示两圆形底部的半径。

我们可以把一个圆柱近似成${n}{n|5|3,20,1}[__棱柱__](gloss:prism)。当边数越来越多的时候，棱柱逐渐看起来像一个圆柱。

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

尽管确切的说圆柱不是棱柱，但他们有很多共同的性质。这两种图形，我们可以通过把 __{.m-red} 底面积__ 乘以 __{.m-blue} 高__的形式得到它们的体积。也就是说一个半径为_{.b.m-red} r_ 且高为 _{.b.m-blue} h_ 的圆柱的体积为

{.text-center} `V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")} 要注意半径和高的单位需要统一。例如，如果 _r_ 和 _h_ 都是以cm为单位，那么体积的单位为[[`"cm"^3`|`"cm"^2`|cm]]。

---
> id: oblique-cylinder
> goals: slide

::: column.grow

上面的例子中，圆柱的底都是在对方的正上方：这种叫做 _直圆柱_。如果底不在对方的上方，我们就得到一个 _斜圆柱_。它们的底面还是平行的，但是边“倾斜”了一个不是90°的角。

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} 意大利的_比萨斜塔_不完全是一个斜圆柱。

:::

---
> id: cavalieri
> goals: slide

通过证明发现一个斜圆柱的体积恰好等于一个相同半径和高的直圆柱。这是根据 [__卡瓦列里原理__](gloss:cavalieri)用意大利的数学家[博纳文图拉•卡瓦列里](bio:cavalieri)的名字来命名：如果截两个几何体的两个截面的面积总相等，那么这两个几何体的体积相等。

假设把一个圆柱切成无数个小片。我们可以水平移动这些小片得到一个斜圆柱。每个圆片的体积并没有随着变倾斜而改变，因此总体积仍然是固定的：

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::

---
> id: cylinder-surface

#### 圆柱体的表面积

::: column.grow

要求一个圆柱体的表面积，我们需要吧它“展开”成水平的[面](gloss:net)你自己也可以尝试一下，比如把一瓶罐头食品的包装带撕下来。

有两个[[正方形|圆形|球]]，一个在圆柱的上面，另一个在下面。弯曲的侧面变成一个大大的[[长方形|椭圆|正方形]]。

* {.reveal(when="blank-0 blank-1")} 两个圆的面积为
  _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.
* {.reveal(when="eqn-0")} 长方形的高为
  _{x-equation.small(solution="h" keys=" " short-var)}_
  _{span.reveal(when="eqn-1")}，长方形的宽为_
  _{x-equation.small.reveal(when="eqn-1" solution="2 π r" keys="+ × π sup" short-var)}_
  _{span.reveal(when="eqn-1")}.且等于圆的[[周长|正切|直径]]。_

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

也就是说半径为 _r_ 且高为 _h_ 的圆柱的表面积为：

{.text-center} `A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_.

---
> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

在世界各处我们都能找到圆柱的影子——从可乐瓶到卫生纸或者水管等。你还能想到其它的例子吗？

前面的_储气罐_的半径为35m且高为120m。我们现在可以得到它的体积的近似值为 [[461,000 ± 1000]]`"m"^3` 而表面积近似值为 [[34,080 ± 100]]`"m"^2`。

---
> id: cone

### 圆锥

::: column.grow

一个[__圆锥__](gloss:cone)是一个有圆__{.m-red}底__的立体图形。如图所示，它的侧面“向上缩小”直至一个叫做__{.m-green}顶点__的点。

圆锥的 __{.m-red}半径__ 为圆锥底面圆的半径，而 __{.m-blue}高__ 则为顶点到底面的垂直距离。

正如我们前面看到的其它图形，圆锥在我们身边也是无处不在：冰淇淋筒，锥形交通路标，某些屋顶，甚至圣诞树也是。你还能想到其它的吗？

::: column(width=280)

    x-solid(size=280)

:::

::: column(width=120 parent="padded-thin")

    x-img(src="images/ice-cream.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/traffic.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/roof.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/christmas.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/tipi.jpg" width=120 height=120 lightbox)

:::

---
> id: cone-volume

#### 圆锥的体积

::: column.grow

我们前面求圆柱的体积时把它近似看成一个棱柱。类似的，我们求圆锥体积的时候可以把它近似看成一个[__棱锥__](gloss:pyramid).

这里我们可以看到一个${n}{n|5|3,18,1}棱锥。随着边数越来越多，棱锥越来越像一个圆锥。实际上，我们可以把圆锥看成一个具有_无数_条侧棱的棱锥！

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

也就是说我们可以用这个体积公式：`V = 1/3 "底" × "高"`。圆锥的底是一个圆形，因此一个半径为_r_且高为_h_的圆锥的体积为

{.text-center} `V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---
> id: cone-circumscribed

注意这个公式与圆柱体积的相似之处。假设在圆锥旁边画一个圆柱，它们的底和高相同——这个称为 __外切圆柱__。此时，圆锥的刚好占到[[一半|三分之一|四分之一]]的圆柱体积。

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey}备注：你可能认为通过无限分割成小块来估算是“不精确的”。数学界花了很长的时间试图去找到一个更直接的方式来计算圆锥的体积。在1900年，大数学家[大卫•希尔伯特](bio:hilbert) 甚至把它列为数学界23个最重要的待解问题之一！时至今日我们知道这确实不可能。

---
> id: oblique-cone
> goals: slide

::: column.grow

正如一个圆柱，一个圆锥也不必“直直的”。如果顶点就在底面圆圆心的正上方，我们就称之为 __直圆锥__。否则，我们就称之为 __斜圆锥__。

再一次，我们可以利用卡瓦列里原理来说明斜圆柱具有相同的体积，如果它们的底和高是相同的。

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### 圆锥的表面积

::: column.grow

要求一个圆锥的表面积会有一点点麻烦。和之前一样，我们可以把圆锥展平。移动下面的滑块你可以发现：在这个问题中，我们得到一个圆形与一个[[弧|弦|扇形]]。

{.reveal(when="blank-0")} 现在我们只需要把这两个部分的面积相加即可。__{.m-yellow}底面圆__ 的半径为 _r_，那么它的面积为

{.text-center.reveal(when="blank-0")} `pill(A_"底","yellow","circle") =`
_{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

__{.m-green}扇形__ 的半径为圆锥底面圆上的点到顶点的距离。这个叫做圆锥的 __{.pill.green.step-target(data-to="s")}
倾斜高度 *s*__，和常说的 __{.pill.blue.step-target(data-to="h")}高 *h*__ 不太一样。我们可以用[勾股定理](gloss:pythagoras-theorem)算出倾斜的高度：

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_       |
| `s`   | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
{.eqn-system}

::: column(width=280)

    x-geopad.geo-sketch.no-background(width=280 height=200): svg
      circle(x="point(140, 10)" name="a" hidden)
      circle(x="point(140, 170)" name="b" hidden)
      circle(x="point(220, 170)" name="c" hidden)
      circle(x="point(60, 170)" name="d" hidden)
      ellipse(cx=140 cy=172 rx=81 ry=20)
      path(x="angle(a,b,c)" size=12)
      path(x="triangle(a,c,d)")
      path.yellow(x="segment(b,c)" label="r" target="r")
      path.green(x="segment(a,c)" label="s" target="s")
      path.blue(x="segment(a,b)" label="h" target="h")

:::

---
> id: cone-surface-1

::: column.grow

扇形的 _{span.pill.step-target.red(data-to="arc")}弧长_ 等于 _{span.pill.step-target.yellow(data-to="base")}底_ 的[[直径|弧长|周长]]：_{span.reveal(when="blank-0")}`2 π r`。现在我们就可以使用前面部分产生的[公式](gloss:circle-sector) 进行计算扇形面积的公式了：_

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")
| `pill(A_"扇形","green","sector")` | `=` | `pill(A_"圆","teal","circle") × pill("弧长","red","arc") / pill("周长","teal","circumference")` |
|                | `=` | _{x-equation(solution="π r sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
:::

::: column(width=280)

    x-geopad.geo-sketch.no-background(width=280 height=300 style="margin-top: -20px"): svg
      circle(x="point(140,110)" name="c1" hidden)
      circle(x="point(140,250)" name="c2" hidden)
      circle(x="point(235,141.5)" name="a" hidden)
      circle(x="point(45,141.5)" name="b" hidden)

      path.yellow.fill.light(x="circle(c2, 40)" target="base")
      path.yellow(x="circle(c2, 40)" target="base")
      path.yellow(x="segment(c2,point(180, 250))" label="r" target="base")
      path.red.thick.reveal(when="blank-0" animation="draw" duration=1500 x="circle(c2, 40)")

      path.teal.fill.light(x="circle(c1, 100)" name="circ" target="circle")
      path.green.fill.light(x="sector(c1, a, 2.5)" target="sector circle")

      path.green(x="segment(c1, a)" label="s")
      path.green(x="segment(c1, b)" label="s")
      path.red.thick(x="arc(c1, a, 2.5)" target="arc")
      path.teal.thick.transparent(x="circle(c1, 100)" target="circumference")

:::

---
> id: cone-surface-2

最后，我们只需要把__{.m-yellow}底__的面积和__{.m-green}扇形__的面积相加，就得到了圆锥的表面积：

{.text-center} `A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

### 球

::: column.grow

[__球__](gloss:sphere) 是一个由到给定的 __{.m-green}中心 *C*__ 的距离相等的点组成的一个立体图形。这个距离叫做球的 __{.m-red}半径 *r*__。

你可以把一个球看成一个“立体的圆”。和[圆](gloss:circle)”一样，球也有 __{.m-blue}直径*d*__，其长度为半径的[[一半|两倍]] ，还有弦和割线等等。

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} [在前面的部分](/course/circles/tangets-chords-arcs#eratosthenes-1)，
你学过了古希腊数学家[埃拉托色尼](bio:eratosthenes)如何通过一个碑影计算地球的半径——为6371km。现在，我们尝试计算地球的体积和表面积。[Continue](btn:next)

---
> id: sphere-volume

#### 球的体积

计算一个球的体积，我们还需要再次使用卡瓦列里原理。我们先用一个半球——把一个球沿着中间的圆切成两半。我们还需要一个与半球有相同半径和高的圆柱，并从中间“挖去”一个圆锥。

当你向上滑动时，你可以看到这两个几何体的横截面距离底部的高度都是确定的。

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.r.no-background(width=220 height=120): svg
      circle(x="point(110,110)" name="c1")
      circle(x="c1.shift(0,-100*h)" name="h1")
      circle(x="h1.shift(-100 * sqrt(1-h*h),0)" name="a1")

      path.yellow.fill.light(x="triangle(c1,a1,h1)" target="tri")
      path(x="arc(c1,point(10,c1.x),pi)")
      path(x="segment(point(10,c1.x),point(210,c1.x))")
      path.green.thin(x="segment(c1,a1)" label="r" target="r tri")
      path.blue.thin(x="segment(h1,c1)" label="h" target="h h1 tri")
      path.red.thick(x="segment(h1,a1)" label="x" target="x tri")
      path.red.thick(x="segment(h1,point(220-a1.x,a1.y))")

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.r.no-background(width=220 height=120): svg
      circle(x="point(10,10)" name="a2" hidden)
      circle(x="point(210,10)" name="b2" hidden)
      path(x="polygon(a2,b2,point(210,110),point(10,110))")

      circle(x="point(110,110)" name="c2")
      circle(x="c2.shift(0,-100*h)" name="h2")
      circle(x="h2.shift(-100*h,0)" name="x2")

      path.thin(x="segment(a2,c2)")
      path.thin(x="segment(b2,c2)")
      path.blue.thin(x="segment(h1,c1)" label="h" target="h")
      path.blue.thin(x="segment(h1,point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(10,h2.y),point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(110+100*h,h2.y),point(210,h2.y))")

:::

    x-slider(steps=100)

{.reveal(when="slider-0")} 让我们尝试计算这两个几何体在距离地面相同 __{span.pill.blue.step-target(data-to="h")}高度*h*__ 的横截面的面积。

::: column.grow

{.reveal(when="slider-0")} 半球的横截面总是一个[[圆|环形|球]]。

{.reveal(when="blank-0")} 横截面的 __{span.pill.red.step-target(data-to="x")}半径*x*__ 是一个 _{span.pill.yellow.step-target(data-to="tri")}直角三角形_ 的一部分，那么我们就可以使用[勾股定理](gloss:pythagoras-theorem):

::: .reveal(when="blank-0")
{.text-center} `pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")`.

此时，横截面的面积为

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)
:::

::: column.grow.reveal(when="eqn-0")

柱体的横截面总是一个[[圆锥|圆|环形]]。

::: .reveal(when="blank-1")
这个孔的半径为_h_。我们可以把大圆的面积减去中间小孔的面积来计算环形的面积：

| _A_ | = | `π r^2 - π h^2` |
|     | = | `π (r^2 - h^2)` |
{.eqn-system}
:::

:::

---
> id: sphere-volume-1

这看起来两个几何体在同一水平面的横截面的面积是相等的。根据卡瓦列里原理，两个几何体具有相同的[[表面积|体积|周长]]
_{span.reveal(when="blank-0")我们可以通过把[圆柱](gloss:cylinder-volume)的体积减去[圆锥](gloss:cone-volume)的体积得到半球的体积：_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")
| `V_"半球"` | = | `V_"圆柱" - V_"圆锥"` |
|           | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |
:::

---
> id: sphere-volume-2

一个球由 [[two]] 个半球组成，_{span.reveal(when="blank-0")}也就是说它的体积就是_

{.text-center.reveal(when="blank-0")} `V = 4/3 π r^3`.

---
> id: earth-volume
> goals: numbers

::: column.grow

地球（大约）是一个半径为6371km的球体。因此它的体积为

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
|     | `=` | _{span.numbers}1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} 地球的平均密度为`5510 "kg/m"^3`。也就是说地球的总质量为

{.text-center.reveal(when="numbers")} `"质量" = "体积" × "密度" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} 也就是6后面跟着24个0！

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

如果你对圆柱、圆锥和球的体积进行比较，你可能会发现几何中一个最令人满意的关系之一。假设我们有一个高度与底面圆直径相同的圆柱。我们可以恰好把一个圆锥和一个球塞在里面：

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} 这个圆锥的半径为`r`且高度为`2r`。它的体积是
_{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} 这个球的半径为`r`。它的体积是
_{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} 这个圆柱的半径为`r`且高度为`2r`。它的体积是
_{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} 注意一下，如果我们把圆锥的体积[[乘|加|减]]球的体积，我们恰好得到一个圆柱的体积！

---
> id: sphere-maps
> goals: move projection

#### 球的表面积

要得到计算一个球的表面积的公式是非常难的。一个原因就是我们无法像之前把圆锥或圆柱那样打开和“展平”球的表面。

这也是绘制地图的时候遇到的一个问题。地球有一个弯曲、三维的表面，但每张印刷的地图一定是水平和二维的。也就是说地理学家需要伪造：通过伸长或压缩某个区域。

这里你可以看到不同形式的地图，称为__投影__。试着移动红色的正方形，你可以观察到这个区域在地球仪上的_实际_样子：

    figure
      x-select.tabs
        .projection(data-name="mercator") 墨卡托投影
        .projection(data-name="cylindrical") 圆柱投影
        .projection(data-name="robinson") 罗宾森投影
        .projection(data-name="mollweide") 摩尔威德投影
      .box.no-padding.sphere-maps
        .left
          svg.sphere-map(width=240 height=240 viewBox="0 0 240 280")
            path.outline
            path.grid
            path.land
            path.map-select
        .right
          svg.sphere-map#projection(width=440 height=280 viewBox="0 0 440 280")
            path.outline
            path.grid
            path.land
            rect.map-select(x="-24" y="-24" width=48 height=48 style="cursor: move")
          p.caption 当你移动地图上面的正方形时，注意三维地球仪上面 #[em 实际]区域的大小与形状的变化。
    x-gesture(target="#projection" slide="50, 20")

---
> id: sphere-surface

为了计算球的表面积，我们还需要使用一个不同的形状进行估算——例如一个具有很多面的多面体。当面的数量越来越多，多面体开始越来越像一个球。

{.todo} 即将推出：球的表面积的证明





--------------------------------------------------------------------------------

## 圆锥曲线

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola

圆是四种不同形状中可以通过对一个[圆锥](gloss:cone)进行“切片”得到的图形。这个可以通过手电筒的锥形光束来演示：

    x-conic-section
    x-scale-box(width=760).conics
      .row
        .active
          p: strong Circle
          include svg/circle.svg
        .hide
          p: strong Ellipse
          include svg/ellipse.svg
        .hide
          p: strong Parabola
          include svg/parabola.svg
        .hide
          p: strong Hyperbola
          include svg/hyperbola.svg

---
> id: conics-1

如果你把手电筒垂直向下，你可以看到一个[[橄榄形|圆形|椭圆形]]的光线。_{span.reveal(when="blank-0")}倾斜那个锥形光束，你可以得到一个[__椭圆__](gloss:ellipse)。如果继续往前倾斜，你可以得到一个[__抛物线__](gloss:parabola) 或者一个[__双曲线__](gloss:hyperbola)。_

---
> id: conics-2

::: column.grow

总的来说，这四种图形统称为[__圆锥曲线__](gloss:conic-section)。尽管它们看起来非常不一样，但是它们是紧密相关的：事实上，它们全都可以使用同一个方程来产生！

最早研究圆锥曲线的是古希腊佩尔格的数学家[阿波罗尼奥斯](bio:apollonius)，他还给它们非同寻常的命名。

在后续的课程中，你将会学习更多关于抛物线和双曲线的知识。现在，我们来更进一步研究一下椭圆。

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### 椭圆

一个椭圆看起来很像一个“伸长的圆”。实际上，你可以把它当做一个圆有_两个圆心_——把它们称之为_焦点_。和一个圆上每个点都要圆心的距离相等类似，椭圆上面的每一个点到两个焦点的_距离之和_是固定的。

如果你有一条长的绳子把两个固定的点连起来，你可以通过描出绳子最远的点来画一个完美的椭圆：

{.todo} 即将推出：画椭圆的动态效果

---
> id: ellipses-2
> goals: v0 v1 v2 v3

下面有很多实物的展示来画一个椭圆：

::: column(width=320 parent="padded-thin")

    x-video(src="images/gears.mp4" poster="images/gears.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption 齿轮

::: column(width=320)

    x-video(src="images/trammel.mp4" poster="images/trammel.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption 量规

::: column(width=320)

    x-video(src="images/disk.mp4" poster="images/disk.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption 光碟

::: column(width=320)

    x-video(src="images/swing.mp4" poster="images/swing.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption 悬摆

:::

---
> id: orbits

### 行星轨道

::: column.grow

你应该还记得本课程开始的时候，古希腊的天文学家认为地球是宇宙的中心，而太阳、月球和行星都沿着圆形的轨道绕地球运动。

不幸的是，天文观测的结果并不完全支持这个结论。例如，一年中的某些时候太阳看起来比较大而其它时候则比较小。在一个圆上，每一个点到圆心的距离是[[减少的|不变的|增加的]]。

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} 古希腊尼西亚的天文学家希帕克

:::

---
> id: epicycles
> goals: play

为了弥补这个缺陷，天文学家引入__本轮__到太阳系模型中：行星绕着地球周围一个很大的圆进行运动，同时还以一个小圆进行选择。尽管非常晦涩难懂，这个却是1000多年来被最广泛接纳的宇宙模型：

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} 这个星球在绕着一个大圆（__传送带__）的同时沿着小圆（__本轮__）做 ${n}{n|6|2,12,1}次旋转。

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} 一张画着本轮的16世纪__地心说模型图__。希腊语中的“planetes”意指“流浪者”。
:::

---
> id: kepler
> goals: play

::: column.grow

随着时间过去，人们意识到地球仅仅是绕着太阳（__日心说__）的众多行星之一，但直到1609年，天文学家约翰尼斯•[开普勒](bio:kepler) 发现行星实际上沿着_椭圆轨道_运行。

太阳只是这个椭圆中的两个焦点之一。行星的速度靠近太阳时变大，远离太阳时变慢。

::: column(width=320)

    .r
      svg(width=320 height=240)
        path.sweep(fill="#0f82f2" opacity="0.25")
        path.orbit(fill="none" stroke="#ccc" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle.earth(cx=280 cy=120 r=10 fill="#0f82f2")
        circle(cx=220 cy=120 r=15 fill="#fd8c00")
        circle(cx=100 cy=120 r=4 fill="#ccc")
      x-play-btn

:::

---
> id: newton
> goals: apple

几十年后，[艾萨克•牛顿](bio:newton) 能够证明开普勒的观测结果，使用了他新发现的[__万有引力__](gloss:gravity)定律。牛顿意识到宇宙中的两个物体之间存在一种力——类似于两个磁铁之间的吸引力。

引力就是那个使物体从上往下掉在地上的东西而且还使得行星绕着太阳运动。也正是由于行星的高速度运动，阻止了它们被吸进太阳里面。

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

使用牛顿定律，你可以确定物体在万有引力作用下运行的路径。证明了行星沿着椭圆运动但其它像彗星等物体则沿着[抛物线](gloss:parabola)或者[双曲线](gloss:hyperbola)运动：它们飞近太阳然后改变方向射向宇宙，永不回头。

根据传说，一个下落的苹果启发牛顿发现了万有引力。他也是所有时代中最具影响力的科学家之一，他的观点构建了我们对世界的认识一直持续了300多年——直到阿尔伯特•爱因斯坦在1905年发现了相对论。

:::
