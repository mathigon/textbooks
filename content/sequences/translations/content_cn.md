# 序列和模式

## 介绍

> section: introduction
> id: intro

许多使用数学的专业人士都对数学的一个特定方面感兴趣 – __查找模式__，并且专业
人士能够用它预测未来。以下是几个例子：

::: column(width=160 parent="padded-thin")

    x-media(src="images/crime.jpg" width=160 height=160)

::: column(width=400)

在过去的十年里，世界各地的__警察部门__开始更多地依赖数学。特殊的算法可以利用
过去犯罪的数据来预测未来犯罪发生的时间和地点。例如，_预警_系统(“预测性警务”的
简称)帮助洛杉矶部分地区的犯罪率降低了12%！

::: column(width=160)

    x-media(src="images/volcanoes.jpg" width=160 height=160)

::: column(width=400)

事实证明，__地震__与犯罪模式相似。就像一次犯罪可能引发报复，地震也可能引发余
震。在数学中，这被称为“自激过程”，并且有一些方程可以帮助预测下一个过程何时可
能发生。

::: column(width=160)

    x-media(src="images/finance.jpg" width=160 height=160)

::: column(width=400)

银行家们还查看股票价格、利率和货币汇率的历史数据，以估计未来__金融市场__的变
化。能够预测一只股票的价值是涨是跌，这是非常有利可图的！

:::

专业的数学家使用高度复杂的算法来查找和分析所有这些模式，但我们将从一些更基本
的方法开始。

---
> id: simple-patterns

### 简单序列

在数学中，[__序列__](gloss:sequence)通常是一系列遵循特定模式的数字(或其他对
象)。序列中的单个元素称为[__序列项__](gloss:sequence-term)。


下面是一些序列的例子。你能找到他们的模式并计算出接下来的两个序列项吗？

{.text-center.s-orange.with-arrows} _{.n}3_, _{.n}6*{span.arrow}+3*_,
_{.n}9*{span.arrow(hidden)}+3*_, _{.n}12*{span.arrow(hidden)}+3*_,
_{.n}15*{span.arrow(hidden)}+3*_, _{.n}[[18]]*{span.arrow(hidden)}+3*_
_{.n}[[21]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-0 blank-1")} 模式：“在前一个数字上加3，得到
下一个数字。”_

{.text-center.s-teal.with-arrows} _{.n}4_, _{.n}10*{span.arrow(hidden)}+6*_,
_{.n}16*{span.arrow(hidden)}+6*_, _{.n}22*{span.arrow(hidden)}+6*_,
_{.n}28*{span.arrow(hidden)}+6*_, _{.n}[[34]]*{span.arrow(hidden)}+6*_,
_{.n}[[40]]*{span.arrow(hidden)}+6*_, …
_{span.pattern.reveal(when="blank-2 blank-3")} 模式：“在前一个数字上加6，得到
下一个数字。”_

{.text-center.s-purple.with-arrows} _{.n}3_, _{.n}4*{span.arrow(hidden)}+1*_,
_{.n}7*{span.arrow(hidden)}+3*_, _{.n}8*{span.arrow(hidden)}+1*_,
_{.n}11*{span.arrow(hidden)}+3*_, _{.n}[[12]]*{span.arrow(hidden)}+1*_,
_{.n}[[15]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-4 blank-5")} 模式：“交替地在前一个数字上加
1和3，得到下一个数字。”_

{.text-center.s-lime.with-arrows} _{.n}1_, _{.n}2*{span.arrow(hidden)}×2*_,
_{.n}4*{span.arrow(hidden)}×2*_, _{.n}8*{span.arrow(hidden)}×2*_,
_{.n}16*{span.arrow(hidden)}×2*_, _{.n}[[32]]*{span.arrow(hidden)}×2*_,
_{.n}[[64]]*{span.arrow(hidden)}×2*_, …
_{span.pattern.reveal(when="blank-6 blank-7")} 模式：“将前一个数字乘以2，得到
下一个数字。”_

---
> id: simple-patterns-1

结尾的点（…）只意味着序列可以一直延续下去。在数学中引用这样的序列时，我们通常
用一个特殊的[变量](gloss:variable)来表示每个项：

    p.text-center.s-orange
      for i in [1, 2, 3, 4, 5, 6, 7]
        span.math.n
          msub
            mi x
            mn= i
        | ,&nbsp;
      | …

_x_后面的小数字称为__下标__，表示该项在序列中的位置。这意味着我们可以用
[[`x_n`|`x_i`|`x_2`]]来表示序列中的第*n*项。

    // 您可能会认为，将序列中的术语标记为_a_、_b_、_c_、_d_等更容易。然而，
    // 你最终会[[用完字母|达到100个|忘记字母]]，而序列可能永远持续下去！

---
> id: triangles

### 三角形和平方数

数学中的序列不一定总是数字。这是一个由几何图形组成的序列 —— 尺寸不断增大的三角形：

::: column(width=24 parent="padded-thin")
{.text-center} __1__

    include svg/triangle-1.svg
::: column(width=52)
{.text-center} __3__

    include svg/triangle-2.svg
::: column(width=80)
{.text-center} __6__

    include svg/triangle-3.svg
::: column(width=108)
{.text-center.b} [[10]]

    include svg/triangle-4.svg
::: column(width=136)
{.text-center.b} [[15]]

    include svg/triangle-5.svg
::: column(width=164)
{.text-center.b} [[21]]

    include svg/triangle-6.svg
:::

---
> id: triangle-1

在每一步中，我们都要在前一个三角形中再添加一行。这些新行的长度也每次增加一行。
你能看到图案吗？

{.text-center.s-orange.with-arrows} _{.n}1_, _{.n}3*{span.arrow}+2*_,
_{.n}6*{span.arrow}+3*_, _{.n}10*{span.arrow}+4*_,
_{.n}15*{span.arrow}+5*_, _{.n}21*{span.arrow}+6*_
_{.n}[[28]]*{span.arrow.reveal(when="blank-0")}+7*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-1")}+8*_, …

---
> id: recursive

我们还可以使用特殊的[公式](gloss:formula)来描述这个模式:

    p.text-center.s-orange
      span.n.md `x_n`
      | &nbsp;=&nbsp;
      span.n.md `x_(n-1)`
      | &nbsp;+&nbsp;
      em#t3 n

为了得到第_n_个三角形的数，我们取[[上一个|第一个|下一个]]三角形的数并加上_n_。
例如，如果_n_&nbsp;=&nbsp;${n}{n|5|2,20,1}，公式将变为
<msub><mi>x</mi><mn>${n}</mn></msub>
= <msub><mi>x</mi><mn>${n-1}</mn></msub> + ${n}.

---
> id: recursive-1

将`x_n`表示成序列中之前项函数的公式称为[__递归公式__](gloss:sequence-recursive),
只要知道序列中的[[第一项|最后一项|第二项]]，就可以计算出以下所有项。

---
> id: squares

    hr

由几何图形组成的另一个序列是__平方数__。每项都是由越来越大的正方形构成的：

::: column(width=24 parent="padded-thin squares")
{.text-center} __1__

    include svg/square-1.svg
::: column(width=50)
{.text-center} __4__

    include svg/square-2.svg
::: column(width=76)
{.text-center} __9__

    include svg/square-3.svg
::: column(width=102)
{.text-center.b} [[16]]

    include svg/square-4.svg
::: column(width=128)
{.text-center.b} [[25]]

    include svg/square-5.svg
::: column(width=154)
{.text-center.b} [[36]]

    include svg/square-6.svg
:::

---
> id: square-1

对于三角形数，我们发现了一个递归公式，它告诉你序列的_下一项_，作为它_前一项_的
函数。对于平方数，我们可以做得更好：一个直接告诉你第*n*项的方程，而不需要先计
算前面的所有项：

{.text-center.s-purple} *{.n}`x_n`* = _{x-equation(solution="n^2")}_

---
> id: explicit

像这样的方程被称为[__显示公式__](gloss:sequence-explicit)。例如，我们可以使用
它来计算第13个平方数是[[169]]，而不需要首先找到前面的12个平方数。

---
> id: definitions

    hr

让我们总结一下迄今为止我们看到的所有定义：

::: .theorem
[__序列__](gloss:sequence)是数字、几何图形或其它对象的列表，它们遵循特定的模
式。序列中的单个项称为[_项_](gloss:sequence-term)，并用`x_n`等变量表示。

序列的[__递归公式__](gloss:sequence-recursive)是把第*n*项的值以[[之前项|首项]]的
函数的方式告诉你。您还必须指定第一项。

序列的一个[__显示公式__](gloss:sequence-explicit)把第*n*项的值以[[_n_|之前项]]
的函数的方式告诉你，而不涉及序列中的其它项。
:::

---
> id: action-sequence

### 动作序列摄影

在下面的部分中，您将了解许多不同的数学序列、令人惊讶的模式和意外的应用程序。

首先，让我们来看看完全不同的东西：__动作序列摄影__。摄影师快速连续拍摄许多照
片，然后将它们合并成一幅图像：

    figure: x-media(src="images/action-1.jpg" width=640 height=320)

你能看到滑雪者是如何形成一个序列的吗？图案不是相加或相乘，而是几何
[变换](gloss:rigid-transformation)。在两个连续的步骤之间，滑雪者同时被平移和
[旋转|反射|扩大]了。

---
> id: action-sequence-1

以下是一些动作序列摄影的例子，供您欣赏：

::: column(width=320 parent="padded-thin")

    x-media(src="images/action-2.jpg" width=320 height=160 credit="© Ray Demski" lightbox)

::: column(width=320)

    x-media(src="images/action-3.jpg" width=320 height=160 credit="© Ray Demski" lightbox)

::: column(width=320)

    x-media(src="images/action-4.jpg" width=320 height=160 credit="© Marcio Abe" lightbox)

::: column(width=320)

    x-media(src="images/action-5.jpg" width=320 height=160 credit="© Jason Halayko" lightbox)

::: column(width=320)

    x-media(src="images/action-6.jpg" width=320 height=160 credit="© Jason Halayko" lightbox)

::: column(width=320)

    x-media(src="images/action-7.jpg" width=320 height=160 lightbox)

:::



--------------------------------------------------------------------------------



## 算术和几何序列

> section: arithmetic-geometric
> id: halley

::: column.grow

在1682年，天文学家埃德蒙·哈雷(bio:halley)发现了一个不寻常的现象：一个发光的白
色物体，有一条长长的尾巴，在夜空中移动。它是一颗__彗星__，一块小的冰岩石，在
太空中飞行，留下一道尘埃和冰。

哈雷记得其他天文学家早就观察到类似的彗星：一次在1530年，另一次在1606年。注意，
这些观察结果之间的差距是相同的: [[76]]年。

::: column(width=320)

    x-media(width=320 height=256 src="images/halley.jpg")
    p.caption 哈雷彗星图片，#[br]1986年拍摄于复活节岛

:::

---
> id: halley-1

哈雷得出结论: 这三次观测结果实际上都是同一颗彗星 — 现在被称为__哈雷彗星__。
它围绕太阳运行，大约每76年经过一次地球。他还预测了彗星下一次出现的时间：

{.text-center.s-orange.s-large.with-arrows} _{span.n}1530_,
_{span.n}1606*{span.arrow}+76*_, _{.n}1682*{span.arrow}+76*_,
_{.n}1758*{span.arrow}+76*_, _{.n}[[1834]]*{span.arrow}+76*_,
_{.n}[[1910]]*{span.arrow}+76*_, _{.n}[[1986]]*{span.arrow}+76*_, …

---
> id: halley-2

事实上，该时间间隔不总是__精准__的76年: 它可能有1或2年的变化，因为彗星的运行
轨道受到其它行星的干扰。今天我们知道哈雷彗星早在公元前240年就被古代天文学家观
测到了！

    figure
      .row
        x-media(src="images/halley-1.jpg" width=160 height=180)
        x-media(src="images/halley-2.jpg" width=173 height=180 lightbox)
        x-media(src="images/halley-3.jpg" width=200 height=180 lightbox)
        x-media(src="images/halley-4.jpg" width=130 height=180 lightbox)
      p.caption 哈雷彗星在时间上的分布：巴比伦的石碑（公元前164年）、中世纪的挂毯（1070年代）、科学杂志（1910年）和苏联的邮票（1986年）。

---
> id: ball

另一组科学家正在调查一个有弹性的网球的行为。他们把球从10米的高度扔下，并测量
了它随时间变化的位置。每次弹跳，球都会损失原来的一部分高度：

    x-coordinate-system(margins="12 12 24 120" width=640 height=320 x-axis="0|7|" x-suffix="s" y-suffix="m" x-label="time" y-label="height")
      .tennis-ball
      .tennis-ball
    x-slider(steps=400 speed=0.5)

---
> id: ball-1
> goals: reveals

科学家们注意到，每次弹跳后，球会失去其高度的20%。换句话说，每次弹跳的最大高度
是前一次弹跳的80%。这使他们能够预测以下每一次弹跳的高度:

{.text-center.s-teal.s-large.with-arrows} _{span.n}10_,
_{span.n}8*{span.arrow}×0.8*_, _{.n}[[6.4]]*{span.arrow}×0.8*_,
_{span.n}[[5.12]]*{span.arrow}×0.8*_,
_{span.n.reveal}4.096*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}3.277*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.621*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.097*{span.arrow}×0.8*_*{span.reveal}, …*

---
> id: arithmetic-geometric

### 定义

between consecutive terms.
如果你比较这两个问题，你可能会发现有许多相似之处：哈雷彗星的序列在相邻项之间
有相同的[[差|比率|积]]，而网球的反弹在相邻次之间有相同的[[比率|差|积]]。

---
> id: arithmetic-geometric-1

具有这些属性的序列有个特殊名称：

::: column.grow
::: .theorem.s-red

    p.text-center: include svg/comet.svg

一个[__算术序列__](gloss:arithmetic-sequence)在相邻项间有一个常数__{.m-red}差*d*__。

各项加上或减去同一个数字后，可以得到它的下一项。

:::
::: column.grow
::: .theorem.s-green

    p.text-center: include svg/ball.svg

一个[__几何序列__](gloss:geometric-sequence)在相邻项间有一个常数__{.m-green}比率*r*__。

各项乘以或除以同一个数字后，可以得到它的下一项。

:::
:::

---
> id: arithmetic-geometric-select

下面是几个不同的序列。你能确定哪些是算术序列、哪些是几何序列，哪些两个都不是?
能进一步确定它们的_{.b.m-red}d_值或_{.b.m-green}r_值吗？

::: column(width=330 parent="ag-select")

{.text-center.s-grey.s-small} _{span.n}2_, _{span.n}4_, _{span.n}8_,
_{span.n}16_, _{span.n}32_, _{span.n}64_, …

::: column(width=320)

是 [[几何序列|算术序列|都不]]_{span.reveal(when="blank-0")}, 比率为 [[2]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n}2_, _{span.n}5_, _{span.n}8_,
_{span.n}11_, _{span.n}14_, _{span.n}17_, …

::: column(width=320)

是 [[算术序列|几何序列|都不]]_{span.reveal(when="blank-2")}, 差为 [[3]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n}17_, _{span.n}13_, _{span.n}9_,
_{span.n}5_, _{span.n}1_, _{span.n}–3_, …

::: column(width=320)

是 [[算术序列|几何序列|都不]]_{span.reveal(when="blank-4")}, 差为 [[-4]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n}2_, _{span.n}4_, _{span.n}7_,
_{span.n}11_, _{span.n}16_, _{span.n}22_, …

::: column(width=320)

是 [[都不|算术序列|几何序列]]_{span.reveal(when="blank-6")}._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n}40_, _{span.n}20_, _{span.n}10_,
_{span.n}5_, _{span.n}2.5_, _{span.n}1.25_, …

::: column(width=320)

是 [[几何序列|算术序列|都不]]_{span.reveal(when="blank-7")}, 比率为 [[0.5]]._

:::

---
> id: arithmetic-geometric-graph

要定义一个算术或几何序列，我们不仅要知道公有的差或比率，还要知道初项值(称为`a`)。
在这里，您可以通过更改`a`、_d_和_r_的值来生成自己的序列，并将它们的值绘制在图
表上。你能找出任何模式吗？

::: column.ag-chart(width=320)

#### {.m-red} 算术序列

{.text-center} `a` = ${a}{a|2|-10,10,0.2}, _d_ = ${d}{d|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small} _{span.n}${arithmetic(a,d,0)}_,
_{span.n}${arithmetic(a,d,1)}_, _{span.n}${arithmetic(a,d,2)}_,
_{span.n}${arithmetic(a,d,3)}_, _{span.n}${arithmetic(a,d,4)}_,
_{span.n}${arithmetic(a,d,5)}_, …

    x-coordinate-system(margins="12 12 24 40" width=320 height=240)
    x-gesture(target="#arithmetic-geometric-graph x-var" slide="100,0")

::: column.ag-chart.s-green(width=320)

#### {.m-green} 几何序列

{.text-center} `a` = ${b}{b|2|-10,10,0.2}, _r_ = ${r}{r|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small} _{span.n}${geometric(b,r,0)}_,
_{span.n}${geometric(b,r,1)}_, _{span.n}${geometric(b,r,2)}_,
_{span.n}${geometric(b,r,3)}_, _{span.n}${geometric(b,r,4)}_,
_{span.n}${geometric(b,r,5)}_, …

    x-coordinate-system.green(margins="12 12 24 40" width=320 height=240)

:::

{.reveal(when="var-0 var-1 var-2 var-3")} 注意，所有__{.m-red}算术序列__看起
来非常相似: 如果差为正，则它们稳定地[[增加|减少]]；而如果差为负，则它们稳定地
[[减少|增加]]。

{.reveal(when="blank-0 blank-1")} 另一方面，几何序列会由于`a`和*r*的不同值而
展现出完全不一样的曲线行为。

::: column.ag-limit-box.reveal(when="blank-0 blank-1" animation="pop" width=220 parent="padded-thin")

如果 _{span.var-action}`r > 1`_, 则后面项将[[快速变大|快速变小|趋近0]]_{span.reveal(when="blank-2")}, 直到无穷。数学家称该序列[__发散__](gloss:sequence-divergence)._

::: column.reveal.ag-limit-box(when="blank-2" animation="pop" delay=200 width=220)

如果 _{span.var-action}*r* 是介于 –1 和 1_之间, 后面项将总是
[[趋近0|降至负无穷|变小]]_{span.reveal(when="blank-3")}.
我们称该序列[__收敛__](gloss:sequence-convergence)._

::: column.reveal.ag-limit-box(when="blank-3" animation="pop" delay=200 width=220)

如果_{span.var-action}`r < -1`_，则后面项将在正数和负数之间交替，而它们的
[[绝对值|相反数|差]]将变大。

:::

{.reveal(when="blank-4 blank-5")} 关于收敛和发散你将在本课的[最后一节](/course/sequences/convergence) 学习更多。


---
> id: arithmetic-geometric-recursive

### 递归和显式公式

在上一节中，您学到一个[__递归公式__](gloss:sequence-recursive)通过用前面项的函数
来告知你每个项的值。以下是算术序列和几何序列的递归公式:

::: column.grow

{.text-center} `x_n =` [[`x_(n-1) + d`|`x_(n-1) × d`|`x_d + n`]]

::: column.grow

{.text-center} `x_n =` [[`x_(n-1) × r`|`x_(n-1) - r`|`x_n - r + n`]]

:::

---
> id: arithmetic-geometric-explicit

递归公式有一个问题是找到一个项的值可能会花费很长时间，例如要找到第100项，我们
首先必须计算前面的99项。相反，我们可以尝试找到一个[__显式公式__](gloss:sequence-explicit), 它直接告诉我们第*n*项的值。

::: column.grow

对于 __{.m-red}算术序列__, 我们需要在每一步加 _d_ :

{.ag-equation} `x_1 =` `a`

{.ag-equation} `x_2 =` `a + d`

{.ag-equation} `x_3 =` `a + d + d`

{.ag-equation} `x_4 =` *{x-equation(solution="a+d+d+d")}*

{.ag-equation.reveal(when="eqn-0")} `x_5 =` *{x-equation(solution="a+d+d+d+d")}*

{.reveal(when="eqn-1")} 在第 *n* 项, 我们加了 [[`n-1`|`n`|`n+1`]]
个同样的 _d_, 所以通项公式是:

{.ag-equation.reveal(when="blank-0")} `x_n = a + d × (n-1)`.

::: column.grow

对于 __{.m-green}几何序列__, 我们每步乘以_r_:

{.ag-equation} `x_1 = a`

{.ag-equation} `x_2 = a × r`

{.ag-equation} `x_3 = a × r × r`

{.ag-equation} `x_4 =` *{x-equation(solution="a×r×r×r")}*

{.ag-equation.reveal(when="eqn-2")} `x_5 =` *{x-equation(solution="a×r×r×r×r")}*

{.reveal(when="eqn-3")} 在第*n*项, 我们乘了 [[`n-1`|`n`|`n+1`]]
个同样的 _r_, 所以通项公式是

{.ag-equation.reveal(when="blank-1")} `x_n = a × r^(n-1)`.

:::

---
> id: arithmetic-geometric-explicit-1

以下是到目前为止你所看到的所有定义和公式的摘要：

::: column.grow
::: .theorem.s-red

一个__{.m-red}算术序列__有个首项`a`，在相邻的项之间有共同的差`d`。

{.text-center} __Recursive formula__: `x_n = x_(n-1) + d`

{.text-center} __Explicit formula__: `x_n = a + d × (n-1)`

:::
::: column.grow
::: .theorem.s-green

A __{.m-green}geometric sequence__ has first term `a` and common ratio `r`
between consecutive terms.
一个__{.m-green}几何序列__有个首项`a`，在相邻的项之间有共同比率`r`。

{.text-center} __递归公式__: `x_n = x_(n-1) × r`

{.text-center} __显式公式__: `x_n = a × r^(n-1)`

:::
:::

现在让我们来看一些能够使用所有这些知识的例子！

---
> id: pay-it-forward
> goals: video

### 向前付钱

这是电影_向前付钱_的一个简短片段，12岁的特雷弗在其中解释了他让世界变得更好的想法：

    figure
      x-video(src="https://storage.googleapis.com/mathigon-videos/pay-it-forward.mp4" poster="images/pay-it-forward.jpg" width=640 height=360 controls audio)
      .caption 节选自“向前付钱” (2000), ©华纳兄弟娱乐

---
> id: pay-it-forward-1

特雷弗的想法的本质是，如果每个人都“向前付出”，那么一个人就可以对世界产生巨大
的影响：

    figure: img(src="images/pay-it-forward.png" width=700 height=220)

注意每一步的人数是如何形成一个具有比率_{span.reveal(when="blank-0")}[[3]]_的[[几何序列|算术序列|三角形数]]。

{.text-center.s-orange.with-arrows.reveal(when="blank-1")} _{span.n}1_,
_{span.n}3*{span.arrow}×3*_, _{span.n}9*{span.arrow}×3*_,
_{span.n}[[27]]*{span.arrow}×3*_, _{span.n}[[81]]*{span.arrow}×3*_,
_{span.n}[[243]]*{span.arrow}×3*_, …

---
> id: pay-it-forward-2

使用几何序列的[显式公式](gloss:sequence-explicit)，我们可以计算出在任何步骤中
有多少新用户受到影响：

{.text-center} `x_n` = _{x-equation(solution="3^(n-1)")}_

---
> id: pay-it-forward-3

人数增长得惊人之快。在第10步中，你将达到19683个新的目标，在22步之后，你将到达
比现在存活地球的人还多。

这个数字序列有一个特殊的名字：__3的幂__。如你所见，每一项实际上只是3的不同
次[幂](gloss:powers):

{.text-center.s-orange} _{span.n}`3^0`_, _{span.n}`3^1`_, _{span.n}`3^2`_,
_{span.n}`3^3`_, _{span.n}`3^4`_, _{span.n}`3^5`_, …

---
> id: millionaire

### 谁想成为百万富翁？

{.todo} 敬请期待!

    // Two siblings, Anna and Thomas, are receiving pocket money from their parents.
    // They can choose between two different options:

    // * Thomas is receiving $1 in the first month, $2s in the second month, $3 in the
    //   third month, and so on. Every month, he receives $1 more than in the previous
    //   one.
    // * Anna receives 1¢ in the first month, 2¢ in the second month

    // img.text-wrap(src="images/dishes.jpg" style="shape-outside: url(images/dishes.png)" width=280 height=276)

    // In order to make some additional pocket money, you decided to make a deal with
    // your parents: for appropriate payment, you’ll do every possible chore around
    // the house – washing the dishes, laundry, taking out the trash or walking the
    // dog.

    // The payment system works like this: on the first day, you get 1 cent. On the
    // second day, you get 2 cents – twice as much as before. On the next day you’ll
    // get 4 cents. Every day, your payment doubles.

    // 1¢ is not a lot of money – and neither are 2¢ or 4¢, especially
    // considering how much work you’re doing. But the amount will slowly increase.
    // How long do you think will it take until you’ve made $100? How long until
    // you’ve made it to 1 Million?

    // guess fields

    // Let’s try to calculate it mathematically! Just like before, your salary
    // follows an exponential model, because it changes by a constant ratio every
    // day (times 2). On day `x`, you’ll get `2^x` cents.

    // | __day__ | __payment__  |
    // | ------- | ------------ |
    // | 1       | $ 0.01       |
    // | 2       | $ 0.02       |
    // | 3       | $ 0.04       |
    // | 4       | $ [[0.08]]   |
    // | 5       | $ [[0.16]]   |
    // | 6       | $ [[0.32]]   |
    // | 7       | $ [[0.64]]   |
    // | 8       | $ 1.28       |
    // | 9       | $ 2.56       |
    // | 10      | $ 5.12       |
    // | 11      | $ 10.24      |
    // | 12      | $ [[20.48]]  |
    // | 13      | $ [[40.96]]  |
    // | 14      | $ [[81.92]]  |
    // | 15      | $ [[163.84]] |
    // | 16      | $ 327.68     |
    // | 17      | $ 655.36     |
    // | 18      | $ 1,310.72   |

    // One sibling gets $${a}{a|1|1,10,1} every day. The other sibling
    // gets ${b}{b|1|1,10,1}¢ every day.

    // As you can see, your daily payment start low but then grow rapidly. After 15
    // days you’ve reached $100. After less than a month you’re making more than 1
    // million per day, and after 2 months you’d have made more than _all the money
    // on Earth_. :1f4b0: :1f37e: :1f911:

    // Exponential growth can be truly XXXXX. Even if they start really slowly, they
    // will eventually speed up a lot, and overtake any possible linear model. Most
    // importantly, us humans tend to be very bad at estimating just _how fast_
    // exponential models can grow. Or are we?

---
> id: chessboard

### 棋盘问题

{.todo} 敬请期待!

    // The game of chess was invented in India, many hundreds of years ago. According
    // to legend, the Indian king loved the game so much that he invited its inventor
    // to his palace and promised him any present they ask for.

    // The inventor had just one simple request: rice. He wanted the king to place
    // one grain of rice on the first square of the chess board, two grains on the
    // second, four grains of the third, eight grains on the fourth, and so on. Every
    // new square should have twice as many grains of rice as the previous one.

    // The king, who was very wealthy, agreed immediately and asked his servants to
    // fetch bags of rice. A chessboard has 64 squares, so how many grains of rice
    // does the king need in total?

    // You might have noticed that the number of grains of rice form a geometric sequence.
    // The first term is [[1]], and the common ratio is [[2]]. Using the results from
    // above, we can calculate how many grains of rice there will be on the last square:

    // {.text-center} `a_64 = 1 * 2^63 =` 9 223 372 036 854 775 808

    // That’s 9 billion billion grains of rice! In total, they would weight about
    // 100 billion tonnes – or 100 times the weight of Mount Everest, the tallest
    // mountain on Earth.



--------------------------------------------------------------------------------



## 形数

> section: figurate
> id: figurate

[几何序列](gloss:geometric-sequence)的名称非常令人困惑，因为它们与几何没有任
何关系。事实上，这个名字是在几百年前发明的，当时数学家们以更为几何的方式思
考_乘法_和_平方根_。

然而，还有许多其他的序列_是_基于特定的几何图形的，其中一些已经在[简介](/course/sequences/introduction)中看到。
这些序列通常被称为[__形数__](gloss:figurate-numbers)，在本节中，我们将更详细
地了解其中的一些序列。

---
> id: triangle-numbers

### 三角形数

__三角形数__是通过创建逐渐增大的三角形而生成的：

::: column(width=24 parent="padded-thin")
{.text-center} __1__

    include svg/triangle-1.svg
::: column(width=52)
{.text-center} __3__

    include svg/triangle-2.svg
::: column(width=80)
{.text-center} __6__

    include svg/triangle-3.svg
::: column(width=108)
{.text-center} __10__

    include svg/triangle-4.svg
::: column(width=136)
{.text-center} __15__

    include svg/triangle-5.svg
::: column(width=164)
{.text-center} __21__

    include svg/triangle-6.svg
:::

经看到了三角形数的递归公式：
`x_n =` [[`x_(n-1) + n`|`n^2 - 1`|`2 × x_(n-1) - 1`]].

---
> id: billiard-pool

保龄球总是有10个球，台球总是有15个球，这不是巧合：它们都是三角形的数字！

::: column(width=320)

    x-media(src="images/bowling.jpg" width=320 height=240)

::: column(width=320)

    x-media(src="images/billiard.jpg" width=320 height=240)

:::

---
> id: triangle-proof

不幸的是，如果我们不首先计算前面所有的三角形数，就想找到第100个或第5000个三
角形数，递归公式并不是很有用。但是，就像我们之前对算术序列和几何序列所做的那
样，我们可以尝试找到一个三角形数的显式公式。

{.todo} 敬请期待: 三角形数公式的动画证明

    // ::: column(width=300)

    // svg(width=300 height=300)
      g

    // ::: column.grow
    // Let’s start with a triangle of size ${x}{x|5|1,10,1}.

    // First, we need to make a second copy of the triangle.

    // Now we can rearrange the two triangles, to fit together in a rectangle.

    // The size of the rectangle is ${x} × ${x + 1}, so it must have an area of
    // ${x * (x + 1)}

    // Since the rectangle is twice as large as the original triangle, we know that
    // the ${n}th triangle number must be ${x*(x+1)/2}.

    // In general, the *n*th triangle number is `T_n = (n × (n + 1)) / 2`.
    // :::

---
> id: triangle-sums

三角形数似乎在数学中随处可见，在这门课程中你会再次看到它们。一个特别有趣的事实是，
_任意_整数都可以写成最多三个三角形数的和：

::: column(width=140 parent="triangle-sum")
{.text-center} ${n}{n|42|1,100,1}

    svg.t-sum(width=140 height=140)
    x-gesture(target="#triangle-sums x-var" slide="100,0")

::: column(width=40)
{.text-center} =
::: column(width=140)
{.text-center} __{.t-sum}__

    svg.t-sum.red(width=140 height=140)

::: column(width=40)
{.text-center} +
::: column(width=140)
{.text-center} __{.t-sum}__

    svg.t-sum.blue(width=140 height=140)

::: column(width=40)
{.text-center} +
::: column(width=140)
{.text-center} __{.t-sum}__

    svg.t-sum.green(width=140 height=140)

:::

{.reveal(when="slide")} 对_所有_整数都有效的这个事实是由德国数学家
[卡尔·弗里德里希·高斯](bio:gauss)于1796年证明，那年高斯19岁!

---
> id: triangle-investigate

::: .box.problem-box
    .box-title: h3 Problem Solving
::: .box-body

前100个正[整数](gloss:integer)的和是多少？换句话说，下面式子的结果值是多少:

{.text-center} `1 + 2 + 3 + 4 + 5 + … + 97 + 98 + 99 + 100`?

你能不用手工一个个加起来得出结果, 而用[三角形数](gloss:triangle-numbers)辅助
来求结果吗? 算算前1000个正整数的和怎么样？

:::
:::

---
> id: square-numbers

### 平方数和多边形数

另一个基于几何形状的序列是__平方数__：

{.text-center.s-purple.with-arrows} _{.n}1_,
_{.n}4*{span.arrow.reveal(when="blank-4")}+3*_,
_{.n}9*{span.arrow.reveal(when="blank-4")}+5*_,
_{.n}16*{span.arrow.reveal(when="blank-4")}+7*_,
_{.n}[[25]]*{span.arrow.reveal(when="blank-4")}+9*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-4")}+11*_,
_{.n}[[49]]*{span.arrow.reveal(when="blank-4")}+13*_,
_{.n}[[64]]*{span.arrow.reveal(when="blank-4")}+15*_, …

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} 这个序列是通过对每个整数进行平方而得到的(`1^2`, `2^2`, `3^2`, …), 但事实显示
还有另一种模式：相邻的平方数之间的差是以[[奇数|三角形数|整数]]递增。

---
> id: square-numbers-1

::: column.grow

如果我们真的画一个正方形，这个模式的原因就显而易见了。每一步都添加一行和一列。
这些“拐角”的大小从1开始，每一步增加2，从而形成奇数序列。

这也意味着*n*的平方数只是前*n*个奇数的和！例如，前6个奇数的和是

{.text-center} `1 + 3 + 5 + 7 + 9 + 11 =` [[36]].

::: column(width=240)

    include svg/square-steps.svg
    x-slider(steps=6 initial=6 no-play)

:::

---
> id: square-numbers-2

此外，每个平方数也是两个相邻[三角形数](gloss:triangle-numbers)的和。例如，
${n×n}{n|4|1,20,1} = ${n×(n+1)/2} + ${n×(n-1)/2}。你能看出来我们如何沿着对角线
把每一个正方形分成两个三角形吗？

---
> id: polygon-numbers

::: column(width=300)

    svg(width=300 height=260)
    .text-center #[msub #[mi x]#[mn]]#[mo(value="=") =]#[mn]
    x-slider(steps=11 initial=3 no-play)

::: column.grow

在研究三角形和方形数字之后，我们可以继续研究更大的[多边形](gloss:polygon)。产
生的数字序列称为__多边形数字__。

例如，如果我们使用边为${k}{k|5|3,10,1}的多边形，我们将得到__${polygonName(k)}数__序列。

你能找到具有_k_条边多边形的第_n_个多边形数的递归公式和显式公式吗？你有没有注
意到大多边形其他有趣的模式？

:::

---
> id: tetrahedral

### 四面体和立方数

当然，我们也不必局限于二维的形状和模式。我们可以把球体堆成小金字塔，就像你在
超市堆橙子一样：

::: column(width=64 parent="padded-thin")
{.text-center} __1__

    x-tetrahedron(size=160 layers=1 style="margin: 0 -48px")

::: column(width=88)
{.text-center} __[[4]]__

    x-tetrahedron(size=160 layers=2 style="margin: 0 -36px")

::: column(width=112)
{.text-center} __[[10]]__

    x-tetrahedron(size=160 layers=3 style="margin: 0 -24px")

::: column(width=136)
{.text-center} __20__

    x-tetrahedron(size=160 layers=4 style="margin: 0 -12px")

::: column(width=160)
{.text-center} __35__

    x-tetrahedron(size=160 layers=5)

:::

---
> id: tetrahedral-1

数学家通常称这些金字塔为[__四面体__](gloss:tetrahedron)，并将由此产生的序列
称为[__四面体数__](gloss:tetrahedral-numbers)。

{.todo} 敬请期待: 关于四面体数，立方数和圣诞节的12天的更多内容。



--------------------------------------------------------------------------------



## 斐波那契数列

> section: fibonacci
> id: rabbits

想象一下，你收到了一对小兔子，一只雄兔和一只雌兔。它们是非常特别的兔子，因为
它们永远不会死，而雌兔每月正好生一对新的兔子(总是另一对雄兔和雌兔)。

    x-slideshow
      .stage.rabbits(slot="stage")
        .rabbits-wrap.s-orange.s-small
          svg(width=760 height=456 viewBox="0 0 760 456")
            line(y1=51  x2=760 y2=51)
            line(y1=130 x2=760 y2=130)
            line(y1=209 x2=760 y2=209)
            line(y1=287 x2=760 y2=287)
            line(y1=366 x2=760 y2=366)
            path(d="M84,91c223.68,0,405,7,405,45")
            path(d="M84,170c124.82,0,226,14,226,45")
            path(d="M84,248c74.56,0,135,20.15,135,45")
            path(d="M534,248c74.56,0,135,20.15,135,45")
            path(d="M84,327a45,45,0,0,1,45,45")
            path(d="M354,327a45,45,0,0,1,45,45")
            path(d="M534,327a45,45,0,0,1,45,45")
            polygon(points="489 150 481 130 489 135 497 130 489 150")
            polygon(points="310 229 302 209 310 214 318 209 310 229")
            polygon(points="219 307 211 287 219 292 227 287 219 307")
            polygon(points="669 307 661 287 669 292 677 287 669 307")
            polygon(points="129 386 121 366 129 371 137 366 129 386")
            polygon(points="399 386 391 366 399 371 407 366 399 386")
            polygon(points="579 386 571 366 579 371 587 366 579 386")
    
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="left: 2%; top: 0%; width: 7%")
    
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 13%")
    
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 30%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 61%; top: 34%; width: 7%")
    
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 47%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 37%; top: 51%; width: 7%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 47%")
    
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 64%")
          img.rabbit(src="images/rabbits-4.svg" width=85 height=75 style="left: 25%; top: 68%; width: 7%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 35%; top: 64%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 64%")
          img.rabbit(src="images/rabbits-5.svg" width=85 height=75 style="left: 85%; top: 68%; width: 7%")
    
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 81%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 13%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-4.svg" width=85 height=75 style="left: 23%; top: 81%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 35%; top: 81%")
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="left: 49%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 81%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 73%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-5.svg" width=85 height=75 style="left: 83%; top: 81%")
    
          .n(style="top: 0%") 1
          .n(style="top: 15%") 1
          .n(style="top: 32%") 2
          .n(style="top: 49%") 3
          .n(style="top: 66%") 5
          .n(style="top: 84%") 8

      .legend(slot="legend") 在第一个月, 兔子很小而且不可能繁殖 - 但是它们长得非常快。
      .legend(slot="legend") 一个月后，兔子长大并开始交配…
      .legend(slot="legend") … 再过一个月, 它们生下首对兔宝宝。现在你有两对兔子了。
      .legend(slot="legend") 下一个月，它们将生下另一对兔宝宝。同时，第一对兔宝宝长大。现在你总共有三对兔子了。
      .legend(slot="legend") 在第五个月，原来那对兔子会再生一对新的兔宝宝。同时，它们的下一代兔宝宝已经长大到可以生下一对兔孙子了。现在你已经有5对兔子了。
      .legend(slot="legend") 在第六个月，有多达3对兔子能够生兔宝宝：原来那对，已经它们生对前两对。

---
> id: rabbits-1

{.r}在接下来1个月你会有13对兔子：8对是上月已有的，加上5对新生兔宝宝。你能检测出
这个序列中的模式吗？_{button.next-step} 继续_

---
> id: rabbits-2

某个月内兔子的数量是[[前之两个月的数量和|是之前一个月数量的两倍]]。 
_{span.reveal(when="blank-0")}换句话说，你必须将序列中*前两*项相加，才能得到
下一项。序列以都为1的两项开始，[递归公式](gloss:sequence-recursive)是_

{.text-center.s-orange.reveal(when="blank-0")} *{span.n}`x_n`* =
*{span.n}`x_(n-1)`* + *{span.n}`x_(n-2)`*

---
> id: rabbits-3

再过几个月后，你能计算出兔子的数目吗？

{.text-center.s-orange} _{.n}1_, _{.n}1_, _{.n}2_, _{.n}3_, _{.n}5_, _{.n}8_,
_{.n}[[13]]_, _{.n}[[21]]_, _{.n}[[34]]_, _{.n}[[55]]_, _{.n}[[89]]_,
_{.n}[[144]]_, …

{.reveal(when="blank-5")} 如此12个月后，你将有144对兔子！

    figure.reveal(when="blank-5")
      x-media(src="images/rabbits.jpg" width=600 height=230)

---
> id: fibonacci

这个数字序列称为[斐波那契数列](gloss:fibonacci-numbers)，以意大利数学家[列奥纳多·斐波那契](bio:fibonacci)的名字命名。

::: column.grow
当斐波那契于1175年出生时，欧洲的大多数人仍然使用[罗马数字系统](gloss:roman-numerals)
来表示数字（如IVX或MCLIV）。斐波那契的父亲是个商人，他们一起去了北非和中东。
正是在那里，斐波那契第一次学习了[阿拉伯数字系统](gloss:arabic-numerals)。

当他回到意大利后，斐波那契写了一本书，名叫《_Liber Abaci_》(拉丁语，意为“计算之书”），
在那里他首次向欧洲商人介绍了新的阿拉伯数字。它们立即获得了欢迎 — 直到今天我们
仍在使用它们。

::: column(width=300)

    x-media(src="images/fibonacci.jpg" width=300 height=300)
    .caption 莱昂纳多·菲波那契的肖像

:::

在他书中的一页上，他还研究了兔子的繁殖模式 — 这就是为什么斐波那契数是以他的名
字命名。

    figure
      x-media(src="images/liber-abaci.jpg" width=440 height=290 lightbox)
      p.caption 来自斐波那契的书 #[em Liber Abaci]

---
> id: spirals

当然，斐波那契数并不是兔子在现实生活中的_实际_数量。兔子不是每个月生恰好一个
雄兔和一个雌兔后代，我们也甚至当作兔子不会死。

但事实证明，自然界中还有许多其它地方_确实_体现出斐波那契数，例如植物的螺旋。
你能计算出每个方向有多少个螺旋吗？

::: column(width=320)

    x-select.spiral-tabs
      div 原样
      div(data-value="cw") 顺时针
      div(data-value="ccw") 逆时针.
    .spirals(style="background-image: url(images/pinecone.jpg)")
      .clockwise(style="background-image: url(images/pinecone-1.jpg)")
      .anticlockwise(style="background-image: url(images/pinecone-2.jpg)")

{.text-center} 这个松果有[[8]]个顺时针螺旋 同时有[[13]]个逆时针螺旋。

::: column(width=320)

    x-select.spiral-tabs
      div 原样
      div(data-value="cw") 顺时针
      div(data-value="ccw") 逆时针.
    .spirals(style="background-image: url(images/sunflower.jpg)")
      .clockwise(style="background-image: url(images/sunflower-1.jpg)")
      .anticlockwise(style="background-image: url(images/sunflower-2.jpg)")

{.text-center.reveal(when="blank-0 blank-1")} 这个太阳花有 34 顺时针螺旋同时
有 55 个逆时针螺旋。

:::

---
> id: spirals-1

在这两种情况下，螺旋的数目都是连续的斐波那契数。其他许多植物也是如此：下次你出去的时候，数一数一朵花的花瓣数，或者一根茎上的叶子数。你经常会发现它们是斐波那契数！

当然，这不仅仅是巧合。自然喜欢斐波那契序列有一个很重要的原因，稍后您将进一步了解。

---
> id: bees

::: column(width=320)

    x-select.spiral-tabs   
      div(data-value="male") 雄性
      div(data-value="female") 雌性
    .bees
      img(src="images/bees-male.png")
      img(hidden src="images/bees-female.png")

::: column.grow

斐波那契数也出现在蜜蜂种群中。

在每一个蜂群中，都有一个_蜂后_产下许多卵。如果一个卵被一只雄性蜜蜂受精，它就会
孵化成一只__雌性__蜜蜂。如果没有受精，它就会孵化成一只__雄性__蜜蜂（被称为雄蜂）。

这意味着雌蜂有[[双亲|单亲]]，而雄蜂只有[[单亲|双亲]]。

{.reveal(when="blank-0 blank-1")} 如果我们画出一只蜜蜂的祖先树图，父母、祖父母、
曾祖父母和前几代的数量总是斐波那契数！

{.i.lgrey.reveal(when="blank-0 blank-1" delay=400)}偶尔，有些年幼的蜜蜂被喂以
称为“蜂王浆”的特殊食物。在这种情况下，它们会变成蜂后， 然后飞走开始新的蜂巢。

:::

---
> id: golden-spiral

### 黄金分割率

就像[三角形数](gloss:triangle-numbers)和[平方数](gloss:square-numbers)以及我们
以前看到的其他序列一样，斐波那契序列可以使用几何图案进行可视化：

    x-slideshow.golden-spiral
      .stage(slot="stage"): include svg/spiral.svg
      .legend(slot="legend") 我们以两个大小为1的小正方形开始。
      .legend(slot="legend") 下一步，添加一个大小为2的新正方形，以形成一个大的矩形。
      .legend(slot="legend") 下一步，添加一个大小为3的正方形，以形成一个更大的矩形。
      .legend(slot="legend") 下一个添加的正方形大小为5。你能看出来我们正在创建斐波那契数列吗？
      .legend(slot="legend") 如果我们继续添加方形，它们的大小将为8， 13， 21，如此等等。
      .legend(slot="legend") 你也许已经注意到，随着矩形变大，它们看起来开启了向外“螺旋”。我们甚至能够将之可视化，通过把方形的角相连来画出完美的螺旋形。

---
> id: golden-ratio

在每一步，正方形形成一个更大的矩形。它的宽度和高度总是两个连续的斐波那契数。
矩形的__纵横比__是其宽度和高度的比：

::: column(width=100 parent="padded-thin golden-rect")

    include svg/golden-1.svg

{.text-center} `2/1` = 2
::: column(width=100)

    include svg/golden-2.svg

{.text-center} `3/2` = 1.5
::: column(width=100)

    include svg/golden-3.svg

{.text-center} `5/3` = 1.666…
::: column(width=100)

    include svg/golden-4.svg

{.text-center} `8/5` = 1.6
::: column(width=100)

    include svg/golden-5.svg

{.text-center} <mfrac><mn>[[13]]</mn><mn>[[8]]</mn></mfrac> _{span.reveal(when="blank-0 blank-1")}= 1.625_
::: column(width=100)

    include svg/golden-6.svg

{.text-center} <mfrac><mn>[[21]]</mn><mn>[[13]]</mn></mfrac> _{span.reveal(when="blank-2 blank-3")}= 1.62…_
:::

---
> id: golden-ratio-1
> goals: img-0 img-1

注意，随着我们添加越来越多的正方形，纵横比似乎越来越接近于1.6左右的特定数字。
这个数字被称为[__黄金分割率__](gloss:golden-ratio)，通常用希腊字母`φ`(“phi”)表示。
它的准确值是

{.text-center} `(1 + sqrt(5))/2 = 1.61803398875…`

许多人认为黄金分割比在美学上特别令人愉悦。这就是为什么艺术家和建筑师经常使用它，
就像这两个例子：

::: column(width=320)

    .golden-art
      x-media(src="images/pantheon.jpg" width=320 height=198)
      img(src="images/pantheon.png" width=320 height=198)
    x-gesture(target=".golden-art")

{.caption} 据说希腊雕塑家菲迪亚斯在雅典设计_帕台农神庙_时使用了黄金比例。他名
字的第一个字母`φ`是我们现在用来表示黄金分割比的符号。

::: column(width=320)

    .golden-art
      x-media(src="images/dali.jpg" width=320 height=198)
      img(src="images/dali.png" width=320 height=198)

{.caption} 西班牙艺术家萨尔瓦多·达利的 _最后的晚餐圣礼_ 是许多应用了黄金比例
的画作之一。在背景中，你还可以看到一个大的[十二面体](gloss:dodecahedron)。

:::

---
> id: golden-ratio-2

我们可以用斐波那契数的两个连续项[相除|相加|相减]来近似黄金分割比。

{.reveal(when="blank-0")} 然而，事实证明，`φ`的精确值不能写成一个简单的分数：
它是一个[__无理数__](gloss:irrational-numbers)，就像圆周率[`π`](gloss:pi) 和
`根号2` 以及其它一些你以前见过的数。

---
> id: sunflower-growing

### 斐波那契螺旋

::: column.grow

黄金分割率解释了为什么斐波那契数出现在自然界中，就像你在本节开头看到的向日葵
和松果。

这两种植物都从中心(植物上叫做_分生组织_的部分)向外生长。当新的种子、叶子或花瓣
被添加时，它们将现有的种子、叶子或花瓣进一步推向外部。

移动右边的滑块来可视化展示植物的生长方式。请注意，每个叶是如何以不同于前一个
叶的旋转方式添加的。两个连续叶之间的角度总是相同的。

::: column(width=300)

    svg.petals(width=300 height=300)
      circle(r=1 cx=150 cy=150)
      - var i = 0
      while i < 40
        path(d="M166,158A20,20,0,0,1,150,150a20,20,0,0,1,32,0A20,20,0,0,1,166,158Z")
        - i += 1

    x-slider(steps=39 speed=0.5)

:::

---
> id: sunflower-spiral

对于花来说，选择一个合适的角度是很重要的：叶子或种子必须大致等距分布，这样它们
才能获得最大的阳光和营养。在下面的图表中，您可以探索向日葵种子之间不同角度的外观：

    // 注意角度的微小变化如何产生完全不同的排列：

::: x-slideshow

    .sunflower-spiral(slot="stage")
      .value
      x-slider(steps=1000 speed=0.1 no-play)
      svg(width=400 height=400 viewBox="0 0 400 400")

{div(slot="legend")} 如果角度为_{span.fib-action(data-value=0)}0°_，则所有种子
将在远离中心的一个长条中生长。

{div.inline(slot="legend")}如果角度为平角(180°)的_{span.fib-action(data-value=0.5)}`1/2`_，
则种子将在远离中心的两个独立“臂”之间交替。

{div.inline(slot="legend")}如果旋转角度是360°的另一个分数比例，例如
_{span.fib-action(data-value=2/5)}`2/5`_ 或 _{span.fib-action(data-value=1/3)}`1/3`_
或 _{span.fib-action(data-value=3/8)}`3/8`_，则“臂数”将与那个分数的[[分母|分子|质因数]]相同。

不幸的是，“臂”不好，因为它们意味着种子分布不均匀：臂之间的所有空间都被浪费了。
但是如果[有理数](gloss:rational-numbers)不起作用，让我们试试[无理数](gloss:irrational-numbers)！

{div.inline(slot="legend")}无理数的一个例子是[`pi`](gloss:pi)。但是，如果种子
之间的夹角为360°的_{span.fib-action(data-value=0.31831)}`1/pi`_，我们仍然可以
得到这些臂：其中的22只。这是因为分数`22/7=3.1429…`是一个很好的`pi`近似值。我们
真正需要的是一个无理数，它_不能_用一个简单的分数来近似。

{div.inline(slot="legend")} 事实证明，[黄金分割率](gloss:golden-ratio)是所有无
理数字中“最不合理的”。如果种子之间的夹角为360°的_{span.fib-action(data-value=0.6180339)}`1/phi`_，
则它们看起来几乎是完全间隔的。这正是世界各地植物所使用的角度。
:::

    x-gesture(target=".fib-action")

---
> id: sunflower-spiral-1

::: column(width=240)

    x-media(src="images/flowers.jpg" width=240 height=400)

::: column.grow

你可能记得从上面，连续斐波那契数的比率越来越接近黄金比率——这就是为什么，如果
你计算一个植物的螺旋数，你会经常发现斐波那契数。

重要的是要记住，自然界并不知道斐波那契数。自然也无法解出方程来计算黄金分割
比——但在数百万年的过程中，植物有足够的时间尝试不同的角度并发现最佳角度。

植物和动物总是希望以最有效的方式生长，这就是为什么自然界充满规则的数学模式。

:::

---
> id: lucas-numbers

### 菲波那科斯

到目前为止，我们只使用了斐波那契数的递推方程。实际上，也有一个显式的方程
式——只是更难找到它：

{.text-center} `x_n = 1/(  sqrt(5)) ( ((1 + sqrt(5))/2)^n + ((1 - sqrt(5))/2)^n )`

我们也可以尝试为斐波那契数选择不同的起始点。例如，如果我们从2，1开始, …，而不是
1，1开始，…，我们得到一个数列，它叫做[卢卡斯数列]。

结果表明，无论您选择哪两个起始数字，结果序列都共有许多属性。例如，连续项的
比将_总是_[收敛](gloss:sequence-convergence)于黄金比率。

{.text-center.s-purple.s-small}
${a}{a|1|0,10,1}, ${b}{b|1|0,10,1}, _{span.n}${a+b}_, _{span.n}${a+2×b}_,
_{span.n}${2×a+3×b}_, _{span.n}${3×a+5×b}_, _{span.n}${5×a+8×b}_, …

---
> id: fibonacci-puzzles

还有许多其他的谜题、模式和应用与斐波那契数相关。以下是几个例子，您可以自己尝试：

::: .box.problem-box
    .box-title: h3 Problem solving
::: .box-body

__1. 斐波那契整除性__

(a) 哪些斐波那契数是偶数？，它们在序列中的位置是否有一个模式？你能解释为什么吗？

(b) 哪些斐波那契数可被3整除(或可被4整除)？你注意到什么了？

    hr

__2. 斐波那契和__

如果你把三个连续的斐波那契数加起来会怎么样？你能解释为什么吗？

    hr

__3. 斐波那契楼梯__

当上楼梯时，我既可以一步上一阶楼梯，也可以一步上两阶楼梯。这意味着上楼梯的方
式有很多不的可能性。例如，如果有5阶楼梯，我有8个不同的选择：

    figure: x-media(src="images/stairs.svg" width=530 height=200)

对6、7或8阶楼梯有多少种选择？你能发现一个模式吗？这和斐波那契数有什么关系？

:::
:::

    figure
      x-media(src="images/fibonachos.jpg" width=600 height=282)
      p.caption © FoxTrot, by Bill Amend



--------------------------------------------------------------------------------



## 特殊序列

> section: special
> id: special-intro


除了[算术](gloss:arithmetic-sequence)和[几何](gloss:geometric-sequence)序列、
[斐波那契数列](gloss:fibonacci-numbers)和[形数](gloss:figurate-numbers)之外，
还有无数有趣的序列没有遵循类似的规则和模式。

---
> id: primes

### 素数

你之前已经看过的一个例子是[__素数__](gloss:prime)。我们说，如果一个数
[[除了1和它本身|除了1和2|没有倍数]]之外没有其它[因子](gloss:factor)。

---
> id: primes-1

下面是前几个质数：

{.text-center.s-teal} _{.n}2_, _{.n}3_, _{.n}5_, _{.n}7_, _{.n}11_,
_{.n}[[13]]_, _{.n}[[17]]_, _{.n}[[19]]_, …

---
> id: primes-2
> goals: p2 p3 p5 p7

不幸的是，素数不遵循简单的模式或递归公式。有时它们直接出现在彼此挨着的位置(这
些称为[孪生素数](gloss:twin-primes))，有时它们之间有巨大的间隔。它们几乎是随
机分布的！

素数也没有像[三角形数](gloss:triangle-numbers)或[平方数](gloss:square-numbers)
这样简单的几何表现，但是通过一些工作，我们可以发现有趣的模式：

::: column(width=320)

    .eratosthenes
      .deleted 1
      .l-red 2
      - var i = 3
      while i <= 100
        div= i
        - i += 1
    x-gesture(target=".eratosthenes .l-red")

{.caption}如果我们把小整数的倍数全都删除， 那么剩下的数必都是质数。这种方法
被称为[埃拉托森筛选法](gloss:sieve-eratosthenes)。

::: column(width=320)

    x-coordinate-system(width=320 height=320 margins="8 8 20 24")

{.caption} If we draw a chart that increases by 1 whenever there is a prime
number, we get a “stepped” function with fascinating properties.
:::

---
> id: primes-3

You can learn more about these and other properties of prime numbers in our
course on [Divisibility and Primes](/course/divisibility-and-primes). They are
some of the most important and most mysterious concepts in mathematics!

    figure: img(src="images/primes.svg" width=480 height=156) 

---
> id: perfect

### Perfect Numbers

To determine if a number is [prime](gloss:prime), we have to find all of its
[factors](gloss:factor). Usually we would _multiply_ these factors to get back
the original number, but let’s see what happens if we _add up_ all factors
of a number:

    - list = function(n) { return Array.apply(null, {length: n}).map((x,i) => i+1); }
    - factors = function(n) { return list(n-1).filter(i => !(n % i)); }
    - total = function(a) { return a.reduce((a, c) => a + c, 0); }

    table.grid.perfect-table
      tr
        td: strong Number
        td: strong Factors
        td: strong Sum of Factors
      for i in [5,6,7,8,9,10,11,12,13,14,15,16,17,18]
        tr
          td: .c= i
          td
            for j in factors(i)
              .c.small= j
          if i >= 10
            td.md [[#{total(factors(i))}]]
          else
            td= total(factors(i))

---
> id: perfect-1

Let’s compare these numbers with their sum of factors:

::: column.perfect-box(width=220 parent="padded-thin")

For most numbers, the sum of its factors is [[less than|greater than|equal to]]
itself. These numbers are called __deficient numbers__.

::: column.reveal.perfect-box(when="blank-0" animation="pop" width=220)

For a few numbers, the sum of its factors is greater than itself. These numbers
are called __abundant numbers__.

::: column.reveal.perfect-box(when="blank-0" animation="pop" delay=500 width=220)

Only one number in the list above has a sum of factors that is _equal_ to itself:
[[6]]. This is called a [__perfect number__](gloss:perfect-numbers).

:::

---
> id: perfect-2

The next perfect number is 28, because if we add up all its factors we get
`1 + 2 + 4 + 7 + 14 = 28`. After that, perfect numbers become much rarer:

{.text-center.s-purple.s-vertical.perfect-list} _{.n}6_, _{.n}28_,
_{.n}496_, _{.n}8,128_, _{.n}33,550,336_, _{.n}8,589,869,056_,
_{.n}137,438,691,328_, _{.n}2,305,843,008,139,952,128_, …

Notice that all of these numbers are [[even|multiples of 3|2 more than a square
number]]. _{span.reveal(when="blank-0")}It turns out that they are also all
triangle numbers!_

---
> id: perfect-3

::: column.grow

Perfect numbers were first studied by ancient Greek mathematicians like
[Euclid](bio:euclid), [Pythagoras](bio:pythagoras) and [Nicomachus](bio:nicomachus),
more than 2000 years ago. They calculated the first few perfect numbers, and
wondered if there might be any _odd_ ones.

Today, mathematicians have used computers to check the first 10<sup>1500</sup>
numbers (that’s a 1 followed by 1500 zeros), but without success: all perfect
numbers they found were even. To this day, it is still unknown whether there are
any odd perfect numbers, making it the oldest unsolved problem in _all of
mathematics_!

::: column(width=220)

    x-media(src="images/euclid.jpg" width=220 height=269)

{.caption} Euclid of Alexandria
:::

---
> id: hailstone

### The Hailstone Sequence

Most of the sequences we have seen so far had a single rule or pattern. But
there is no reason why we can’t combine multiple different ones – for example
a recursive formula like this:

    table.grid.text-left
      tr
        td: strong.md If `x_n` is even:
        td.md `x_(n+1) = x_n // 2`
      tr
        td: strong.md If `x_n` is odd:
        td.md `x_(n+1) = 3 x_n + 1`

Let’s start with `x_1 = 5` and see what happens:

{.text-center.s-orange.with-arrows} _{.n}5_, _{.n}[[16]]*{span.arrow}×3 +1*_,
_{.n}[[8]]*{span.arrow.reveal(when="blank-0")}÷2*_,
_{.n}[[4]]*{span.arrow.reveal(when="blank-1")}÷2*_,
_{.n}[[2]]*{span.arrow.reveal(when="blank-2")}÷2*_,
_{.n}[[1]]*{span.arrow.reveal(when="blank-3")}÷2*_,
_{.n}[[4]]*{span.arrow.reveal(when="blank-4")}×3 +1*_,
_{.n}[[2]]*{span.arrow.reveal(when="blank-5")}÷2*_,
_{.n}[[1]]*{span.arrow.reveal(when="blank-6")}÷2*_, …

---
> id: hailstone-1

It looks like after a few terms, the sequence reaches a “cycle”: 4, 2, 1 will
continue to repeat over and over again, forever.

Of course, we could have picked a different starting point, like ${n}{n|10|5,40,1}.
Then the sequence would look like this:

{.text-center} _{span.var.s-orange}${hailstones(n)}_, *{span.s-red}_{.n}4_,
_{.n}2_, _{.n}1_,* *{span.s-purple}_{.n}4_, _{.n}2_, _{.n}1_,*
*{span.s-blue}_{.n}4_, _{.n}2_, _{.n}1_, …*

---
> id: hailstone-2

It seems like the length of the sequence varies a lot, but it will always end up
in a 4, 2, 1 cycle – no matter what first number we pick. We can even visualise
the terms of the sequence in a chart:

    x-coordinate-system(margins="12 12 24 40")
      .hailstone-slider.md #[span Start value:]${n}{n|12|1,50,1}

{.reveal(when="var-0")} Notice how some starting points end very quickly,
while others (like _{span.var-action}31_ or _{span.var-action}47_) take more
than one hundreds steps before they reach the 4, 2, 1 cycle.

---
> id: hailstone-3

::: column.grow

All sequences that follow this recursive formula are called [__Hailstone
Sequences__](gloss:hailstone-sequence), because they seem to move randomly up
and down before reaching the 4, 2, 1 cycle – just like hailstones that move up
and down in a cloud before crashing to Earth.

In 1937, the mathematician [Lothar Collatz](bio:collatz) proposed that _every_
hailstone sequence sequence eventually ends in a 4, 2, 1 cycle – whatever
starting value you pick. You’ve already checked a few starting points above, and
computers have actually tried all numbers up to `10^20` – that’s 100 billion
billion or a 1 followed by twenty zeros.

::: column(width=240)

    x-media(src="images/storm.jpg" width=240 height=340)

:::

However, there are infinitely many integers. It is impossible to check each of
them, and no one has been able to find a [proof](gloss:proof) that works for
all.

Just like the search for odd perfect numbers, this is still an open problem in
mathematics. It is amazing that these simple patterns for sequences can lead to
questions that have mystified even the best mathematicians in the world for
centuries!


---
> id: look-and-say

### The Look-and-Say Sequence

Here is one more sequence that is a bit different from all the ones you’ve seen
above. Can you find the pattern?

{.text-center.s-lime.s-vertical} _{span.n}1_, _{span.n}11_, _{.n}21_,
_{.n}1211_, _{.n}111221_, _{.n}312211_, …

_{button.next-step} Continue_

---
> id: look-and-say-1

This sequence is called the __Look-and-Say__ sequence, and the pattern is just
what the name says: you start with a 1, and every following term is what you
get if you “read out loud” the previous one. Here is an example:

    p: x-media(src="images/look-and-say.svg" width=240 height=130 style="margin: 0 auto")

Can you now find the next terms?

{.text-center.s-lime.s-vertical} …, _{.n}312211_, _{.n}[[13112221]]_,
_{.n}[[1113213211]]_, …

---
> id: look-and-say-2

This sequence is often used as a puzzle to trip up mathematicians – because the
pattern appears to be completely non-mathematical. However, as it turns out,
the sequence has many interesting properties. For example, every term ends in
[[1]], and no digit larger than [[3]] ever gets used.

---
> id: look-and-say-3

The British mathematician [John Conway](bio:conway) discovered that, no matter
what number you pick as starting value, the sequence will eventually split into
distinct “sections” that no longer interact with each other. Conway called this
the _Cosmological Theorem_, and named the different sections using the chemical
elements _Hydrogen_, _Helium_, _Lithium_, …, up to _Plutonium_. 

---
> id: quiz

### The Sequence Quiz

You’ve now seen countless different mathematical sequences – some based on
geometric shapes, some that follow specific formulas, and others that seem
to behave almost randomly.

In this quiz you can combine all your knowledge about sequences. There is just
one goal: find the pattern and calculate the next two terms!

::: .box.problem-box
    .box-title: h3 Find the next number
::: .box-body

{.text-center.s-yellow} _{span.n}7_, _{span.n}11_, _{.n}15_, _{.n}19_, _{.n}23_,
_{.n}27_, _{.n}[[31]]_, _{.n}[[35]]_, …
_{span.pattern.reveal(when="blank-0 blank-1")} Pattern: Always +4_

{.text-center.s-orange} _{span.n}11_, _{span.n}14_, _{.n}18_, _{.n}23_, _{.n}29_,
_{.n}36_, _{.n}[[44]]_, _{.n}[[53]]_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Pattern: +3, +4, +5, +6, …_

{.text-center.s-red} _{span.n}3_, _{span.n}7_, _{.n}6_, _{.n}10_, _{.n}9_,
_{.n}13_, _{.n}[[12]]_, _{.n}[[16]]_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Pattern: +4, –1, +4, –1, …_

{.text-center.s-purple} _{span.n}2_, _{span.n}4_, _{.n}6_, _{.n}12_, _{.n}14_,
_{.n}28_, _{.n}[[30]]_, _{.n}[[60]]_, …
_{span.pattern.reveal(when="blank-6 blank-7")} Pattern: ×2, +2, ×2, +2, …_

{.text-center.s-blue} _{span.n}1_, _{span.n}1_, _{.n}2_, _{.n}3_, _{.n}5_,
_{.n}8_, _{.n}[[13]]_, _{.n}[[21]]_, …
_{span.pattern.reveal(when="blank-8 blank-9")} Pattern: Fibonacci Numbers_

{.text-center.s-teal} _{span.n}27_, _{span.n}28_, _{.n}30_, _{.n}15_, _{.n}16_,
_{.n}18_, _{.n}[[9]]_, _{.n}[[10]]_, …
_{span.pattern.reveal(when="blank-10 blank-11")} Pattern: +1, +2, ÷2, +1, +2, ÷2, …_

{.text-center.s-green} _{span.n}1_, _{span.n}9_, _{.n}25_, _{.n}49_, _{.n}81_,
_{.n}121_, _{.n}[[169]]_, _{.n}[[225]]_, …
_{span.pattern.reveal(when="blank-12 blank-13")} Pattern: Odd square numbers_

:::
:::



--------------------------------------------------------------------------------



## Pascal’s Triangle

> section: pascals-triangle
> id: pascal-intro

Below you can see a number pyramid that is created using a simple pattern: it
starts with a single “1” at the top, and every following cells is the sum of
the two cells directly above. Hover over some of the cells to see how they are
calculated, and then fill in the missing ones:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };

    .overflow-wrap: .pascal-grid(style="width: 560px")
      - var i = 0;
      while i < 13
        - var j = 0
        .r
          while j <= i
            if (i == 6 && j == 2) || (i == 8 && j == 5) || (i == 10 && j == 5)  || (i == 12 && j == 3)  || (i == 12 && j == 9)
              .c.md [[#{bin(i, j)}]]
            else
              .c= bin(i, j)
            - j += 1;
        - i += 1;

---
> id: pascal-intro-1

This diagram only showed the first twelve rows, but we could continue forever,
adding new rows at the bottom. Notice that the triangle is
[[symmetric|right-angled|equilateral]], which can help you calculate some of the
cells.

---
> id: pascal-triangle

The triangle is called [__Pascal’s triangle__](gloss:pascals-triangle), named
after the French mathematician [Blaise Pascal](bio:pascal). He was one of the
first European mathematicians to investigate its patterns and properties, but it
was known to other civilisations many centuries earlier:

::: column(width=200)

    x-media(src="images/pascal-1.jpg" width=130 height=280)

{.caption} In 450BC, the Indian mathematician [Pingala](bio:pingala) called the
triangle the __“Staircase of Mount Meru”__, named after a sacred Hindu mountain.

::: column(width=200)

    x-media(src="images/pascal-2.jpg" width=200 height=280)

{.caption} In Iran, it was known as the __“Khayyam triangle”__ (مثلث خیام),
named after the Persian poet and mathematician [Omar Khayyám](bio:khayyam).

::: column(width=200)

    x-media(src="images/pascal-3.jpg" width=200 height=280)

{.caption} In China, the mathematician Jia Xian also discovered the triangle.
It was named after his successor, __“Yang Hui’s triangle”__ (杨辉三角).

:::

Pascal’s triangle can be created using a very simple pattern, but it is filled
filled with surprising patterns and properties. That’s why it has fascinated
mathematicians across the world, for hundreds of years.

_{button.next-step} Continue_


---
> id: pascal-sequences

### Finding Sequences

In the previous sections you saw countless different mathematical sequences. It
turns out that many of them can also be found in Pascal’s triangle:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };

    .overflow-wrap: .pascal-grid.sums(style="width: 760px")
      - var i = 0;
      while i < 17
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            if b == 120
              .c: span.s120= b
            else if b == 3003
              .c: span.s3003= b
            else
              .c= b
            - j += 1;
          .c.sum
        - i += 1;

::: tab(parent="pascal-tabs")
#### {.btn.yellow} _{span.check(when="blank-0")}_
The numbers in the first diagonal on either side are all
[[ones|increasing|even]].
::: tab
#### {.btn.orange} _{span.check(when="blank-1")}_
The numbers in the second diagonal on either side are the
[[integers|primes|square numbers]].
::: tab
#### {.btn.red} _{span.check(when="blank-2")}_
The numbers in the third diagonal on either side are the [[triangle
numbers|square numbers|Fibonacci numbers]].
::: tab
#### {.btn.purple} _{span.check(when="blank-3")}_
The numbers in the fourth diagonal are the [[tetrahedral numbers|cubic
numbers|powers of 2]].
::: tab
#### {.btn.blue} _{span.check(when="blank-4")}_
If you add up all the numbers in a row, their sums form another sequence: the
[[powers of two|perfect numbers|prime numbers]].
::: tab
#### {.btn.teal} _{span.check(when="blank-5")}_
In every row that has a prime number in its second cell, all following numbers
are [[multiples|factors|inverses]] of that prime.
::: tab
#### {.btn.green} _{span.check(when="blank-6")}_
The diagram above highlights the “shallow” diagonals in different colours. If
we add up the numbers in every diagonal, we get the [[Fibonacci
numbers|Hailstone numbers|geometric sequence]].
:::

---
> id: pascal-sequences-1

Of course, each of these patterns has a mathematical reason that explains why it
appears. Maybe you can find some of them!

Another question you might ask is how often a number appears in Pascal’s
triangle. Clearly there are infinitely many 1s, one 2, and every other number
appears [[at least twice|at least once|exactly twice]],
_{span.reveal(when="blank-0")} in the second diagonal on either side._

---
> id: pascal-sequences-2

Some numbers in the middle of the triangle also appear three or four times.
There are even a few that appear six times: you can see both [120](->.s120) and
[3003](->.s3003) four times in the triangle above, and they’ll appear two more
times each in rows 120 and 3003.

Since 3003 is a triangle number, it actually appears two more times in the
_third_ diagonals of the triangle – that makes eight occurrences in total.

It is unknown if there are any other numbers that appear eight times in the
triangle, or if there numbers that appear more than eight times. The American
mathematician [David Singmaster](bio:singmaster) hypothesised that there is a
fixed limed on how often numbers can appear in Pascal’s triangle – but it hasn’t
been proven yet.

---
> id: modular
> goals: select

### Divisibility

Some patterns in Pascal’s triangle are not quite as easy to detect. In the
diagram below, highlight all the cells that are even:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };

    .overflow-wrap: .pascal-grid#pascal-select(style="width: 340px")
      - var i = 0;
      while i < 8
        - var j = 0
        .r
          while j <= i
            .c= bin(i, j)
            - j += 1;
        - i += 1;
    x-gesture(target="#pascal-select .r:nth-child(3) .c:nth-child(2)")

{.reveal(when="select")} It looks like the even number in Pascal’s triangle form
another, smaller [[triangle|matrix|square]].

---
> id: modular-1
> goals: c2 c3 c4 c5

Colouring each cell manually takes a long time, but here you can see what
happens if you would do this for many more rows. And what about cells divisible
by other numbers?

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };

    .overflow-wrap: .pascal-grid.small(style="width: 760px")
      - var i = 0;
      while i < 25
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            if b > 99999
              .c: span.small= b
            else
              .c= b
            - j += 1;
        - i += 1;
      .pascal-buttons
        button.btn.btn-red(data-value="2") Divisible by 2
        button.btn.btn-blue(data-value="3") Divisible by 3
        button.btn.btn-green(data-value="4") Divisible by 4
        button.btn.btn-yellow(data-value="5") Divisible by 5

---
> id: modular-2

::: column.grow
Wow! The coloured cells always appear in [[triangles|squares|pairs]] (except for
a few single cells, which could be seen as triangles of size 1).

If we continue the pattern of cells divisible by 2, we get one that is very
similar to the __Sierpinski triangle__ on the right. Shapes like this, which
consist of a simple pattern that seems to continue forever while getting smaller
and smaller, are called [__Fractals__](gloss:fractal). You will learn more about
them in the future…

::: column.width(280)

    img(src="images/sierpinski.svg" width=280 height=243 alt="Sierpinski Triangle")
    p.caption The Sierpinski Triangle

:::

---
> id: pascal-binomial

### Binomial Coefficients

There is one more important property of Pascal’s triangle that we need to talk
about. To understand it, we will try to solve the same problem with two
completely different methods, and then see how they are related.

{.todo} COMING SOON

    // Galton Board, normal distribution



    // -------------------------------------------------------------------------

    // ## The In-and-out Puzzle
    // 
    // > section: in-and-out
    // > sectionStatus: dev
    // > id: in-and-out-intro

    // http://mathworld.wolfram.com/JosephusProblem.html

    // Once there was an indecisive casting director. He would narrow down his
    // choice for a role to twelve actors, and then be stuck. So, he made a habit
    // of arranging the actors in a circle and going around in a circle, saying
    // “Maybe you, not you, maybe you, not you, ...” and so on. After each “not
    // you,” that person left the circle, so it would shrink until there was just
    // a single person left, who would get the role.

    // A clever actress decided she would get the role. There were 10 people in
    // her circle. Where must she stand to be the last one in the circle? 

    // An actor auditioning for a different part was faced with 20 in his circle.
    // Where should ! he stand?
    
    // Find a pattern that tells you where to stand no matter how many people
    // are in the circle. Why does it work? 

    // What if the director eliminates every mth person? Where should you stand
    // in a circle of n? 

    // What about “in, in, out, out,” leaving two in and then kicking two out? 

    // With eight people, for example, you’ll lost the even numbers on round one,
    // 3 and 7 on round two, and 5 on round three, making 1 the winner.

    // Cross out the first person (person 2). At this point, there’s one fewer
    // people in the circle, and we’re beginning at person three instead of
    // person 1. So your answer for n people should be the same as for n-1,
    // except the people are relabeled with a number 2 greater. In other words,
    // if for the nth circle you stands in position p, for the n+1st circle you
    // stand in position  p +2. However, this number may be larger than n+1, so
    // we have to reduce it mod n+1 if necessary. It’s possible to get a formula
    // for this, and that’s a nice challenge for kids who are ready for it. But
    // for most, just elucidating the pattern will be enough.



--------------------------------------------------------------------------------



## Limits and Convergence

> section: convergence
> sectionStatus: dev
> id: convergence-intro

{.todo} COMING SOON

    // In some sequences, such as Prime numbers or Perfect numbers, the individual
    // terms are very special and interesting. In other sequences we may only be
    // interested in what happens to the terms as we calculate more and more of
    // them (what happens to xn as n gets very large). Here are a few examples
    // of what could happen (the numbers, for clarity, are represented by dots):

    // This sequence gets closer and closer to a particular number. We say that it converges.
    // This sequence doesn’t converge, since it doesn’t keep getting closer to one single number.
    // This sequence keeps on growing. We say that it diverges.

    // Convergence means that the terms keep getting closer to a particular number,
    // and divergence means that the terms keep getting bigger, whether towards
    // infinity or negative infinity. Remember that the sequence of ratios of
    // consecutive Fibonacci numbers above converged to the golden ratio.

    // Unfortunately “getting closer” is not a particularly precise description
    // in mathematics. A sequence could for example first get very big and then
    // turn around and converge. We don’t really care about what happens at the
    // beginning, only what happens to the most distant terms. All of the
    // following sequences converge:

    // Here is how mathematicians define the notion of convergence precisely,
    // and this is one of the most important definitions in all of mathematics:

    // A sequence with terms x1, x2, x3, … tends to a limit y if we can think of
    // any tiny positive number, let us call it ε (the Greek letter Epsilon), and
    // if eventually all terms of the sequence will be within ε of the limit y.
    // This means that there is some (sometimes very big) integer N so that xN,
    // xN+1, xN+2, … are all between y – ε and y + ε.

    // Using special mathematical notation, it is possible to express this
    // definition without any words. We use ∀ meaning “for all”, ∃ meaning
    // “there exists” and : meaning “such that”:

    // ∀ ε ∃ N : |xn – y| < ε ∀ n > N
    // For all ε there exists a number N such that the distance |xn – y|
    // between xn and y is less than ε for all n > N.

    // Sequences and their convergence is studied in an area of mathematics
    // called Analysis. We use sequences to define crucial concepts in mathematics
    // such as series, continuity and differentiation.

    // Litov’s Mean Value Theorem

    // Start with two numbers, say 8 and 2.
    // Let’s generate a sequence where the next number is the mean of the previous two numbers.
    // So the next number is half of (8+2), and the sequence continues: 8,2,5
    // The next number is half of (2+5), and the sequence continues: 8,2,5,3.5
    // What would happen if you continued this process indefinitely?
    // Choose a few pairs of starting numbers and repeat the process.
    // Each time, your sequence should get closer and closer to a value which we call the limit.
    // Can you find a relationship between your starting numbers and the limit of the sequence they generate?
    // Can you explain why this happens?
    // Now start with three numbers.
    // This time, we can generate a sequence where the next number is the mean of the last three numbers.
    // Check you agree that if we start with 4,1,10, the next number is 5, and the number after that is 163. 
    // What would happen if you continued this process indefinitely?
    // Choose some more sets of three starting numbers.
    // Can you find a relationship between your starting numbers and the limit of the sequence they generate?
    // Can you explain why this happens?

    // After a while of playing with the numbers on a spreadsheet I have
    // discovered that the formula to find the “limiting value” for 2 starting
    // numbers is: (x+2y)/3
    // where x is the first number chosen and y is the second number chosen.
