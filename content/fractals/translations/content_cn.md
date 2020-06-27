# 分形

## 简介

> section: introduction
> id: intro

环顾大自然时，您可能已经注意到像这样的复杂植物：

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption}这 __蕨__ 由许多小叶子组成，这些小叶子分支成较大的叶子。

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption}这 __罗马花椰菜__ 由较小的[[锥体|cubes|spheres]]围绕较大的锥体螺旋形组成。

:::

{.reveal(when="blank-0")}最初看起来像是非常复杂的形状-但是当您仔细观察时，您可能会注意到它们都遵循相对简单的模式：植物的所有[个独立部分](target:fractal)看起来与整个植物完全相同植物，只是较小。一遍又一遍地以较小的比例重复相同的模式。 [继续](btn:next)

---

> id: fern

在数学中，我们将此属性称为 __自相似性__，并将具有此属性的形状称为[__分形__](gloss:fractal)。它们是所有数学中最美丽，最奇怪的对象。

要创建自己的分形，我们必须从一个简单的图案开始，然后以较小的比例重复一遍。

::: column.grow

最简单的模式之一可能是[{.pill.red}线段](target:s1)，其中[{.pill.blue}还有另外两个线段](target:s2)从一端分支出来。如果我们重复这种模式，这两个蓝色部分的末端还将有两个分支。

您可以移动[蓝点](target:dot)来更改所有分支的长度和角度。然后使用下面的[滑块](->#fern-slider)增加迭代次数。

{.reveal(when="slider-0")}根据分支的位置，您可以创建完全不同的模式-看起来像上面的[蕨类植物](action:set(130,228,197,184))，[树](action:set(160,186,200,186))或[嵌套五边形](action:set(113,235,232,238))。你还能找到什么？ [继续](btn:next)

::: column(width=360)

    x-geopad(width=360 height=360 projections="no")
      canvas(width=720 height=720)
      svg
        circle(x="point(180,340)" name="a" hidden)
        circle(x="point(180,250)" name="b" hidden)
        circle.move.blue.pulsate(name="c1" cx=150 cy=175 target="s2 dot")
        circle.move.blue.pulsate(name="c2" cx=225 cy=220 target="s2 dot")
        path.thick.red(x="segment(a,b)" target="s1")
        path.thick.blue.rounded(x="polyline(c1,b,c2)" target="s2")
    x-slider#fern-slider(steps=8 :bind="steps")

:::

---

> id: triangle

::: column.grow(parent="right")

另一个著名的分形是[__Sierpinski三角形__](gloss:sierpinski-triangle)。在这种情况下，我们从一个大的等边三角形开始，然后反复从剩余部分中切出较小的三角形。

{.reveal(when="slider=0")}请注意，最终形状是如何由[自身的三个相同副本](target:x)组成的，而每个副本都由整个三角形的更小副本组成！您可以一直放大到三角形，并且图案和形状将始终重复。

::: column(width=300)

    svg.sierpinski.var(width=300 height=265)
      path.red(:draw="triangle" :show="!steps")
      g.red.t1
        path(:draw="t1")
        path.white(:d="sierpinski(t1.points, steps-1)")
      g.red.t2
        path(:draw="t2")
        path.white(:d="sierpinski(t2.points, steps-1)")
      g.red.t3
        path(:draw="t3")
        path.white(:d="sierpinski(t3.points, steps-1)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: real

本章开始的植物_看起来_就像分形一样，但是显然不可能在现实生活中创建_真_分形。如果我们不断重复相同的模式，并且越来越小，我们最终将到达无法分裂的细胞，分子或原子。

但是，使用数学，我们可以考虑真正的分形将“具有”的性质-这些令人惊讶……[继续](btn:next)

---
> id: dimension

### 分形维数

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

首先，让我们考虑分形的维数。一条线的尺寸为[[1]]。 _{span.reveal(when="blank-0")}将其缩放2倍时，其长度增加`2^1 = 2`倍。显然！_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

正方形的尺寸为[[2]]。 _{span.reveal(when="blank-0")}将其缩放2倍时，其面积将增加`2^2 =` [[4]]。_

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

多维数据集的维度为[[3]]。 _{span.reveal(when="blank-0")}将其缩放2倍时，其体积将增加`2^3 =`倍。[[8]]。_ _{span.reveal(when="blank-1")}请注意，图像中较大的立方体由较小的8个副本组成！_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

现在让我们看一下Sierpinski三角形。如果我们将其缩放2倍，则可以看到它的“面积”增加了[[3]]倍。

{.reveal(when="blank-0")}假设_d_是Sierpinski三角形的尺寸。使用与上述相同的模式，我们得到`2^d = 3`。换句话说，_d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")}≈1.585…_

:::

---
> id: dimension-4

但是，等等……某物的尺寸如何不是整数？似乎不可能，但这只是分形的怪异特性之一。实际上，这就是分形的名称：它们具有__分数维__。

每次迭代时，我们都会删除Sierpinski三角形的某些区域。如果我们可以无限次这样做，那么实际上将不存在任何区域：这就是为什么Sierpinski三角形位于2维区域和1维线之间的原因。

::: .theorem

尽管许多分形是_自相似_，但更好的定义是，__分形__是具有__非整数维__的形状。

:::

[继续](btn:next)

---

> id: snowflake

### 科赫雪花

自然界中有许多看起来像分形的形状。在本章开始时，我们已经看到了一些工厂。其他很棒的例子是雪花和冰晶：

::: column(width=120 parent="padded-thin")

    x-img(src="images/snow-1.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-2.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-3.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-4.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-5.jpg" width=120 height=120)

:::

---

> id: koch

要创建自己的分形雪花，我们必须再次找到一个可以反复应用的简单程序。

::: column.grow

与Sierpinski三角形一样，让我们从一个单一的等边三角形开始。但是，我们没有_在每个步骤中删除_个较小的三角形，而是沿边缘_添加_个较小的三角形。每个三角形的边长是上一步中三角形的[[`1/3`|`1/4`|`1/2`]]。

{.reveal(when="blank-0")}产生的形状称为[__科赫雪花__](gloss:koch-snowflake)，以瑞典数学家[Helge von Koch](bio:koch)的名字命名。再次注意，雪花边缘的[个小部分](target:t2)与[个大部分](target:t1)看起来完全一样。

::: column(width=300)

    svg.var(width=300 height=300)
      path.blue(:draw="koch(steps)")
      rect.overlay(y=76 width=300 height=224 target="t1")
      polygon.overlay(points="300 0 90 0 107 76 0 76 0 300 300 300 300 0" target="t2")
    x-slider(steps=5 :bind="steps")

:::

---

> id: koch-dimension

::: column(width=380)

    img(src="images/koch.png" width=380 height=171)

::: column.grow

当我们将Koch雪花的一个边缘部分缩放3倍时，其长度[[变为四倍|triples|doubles]]。

{.reveal(when="blank-0")}使用与上面相同的尺寸和比例因子之间的关系，我们得到公式[[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]]。 _{span.reveal(when="blank-1")}这意味着科赫雪花的尺寸为`§d = log_3(4) ≈ 1.262`。_

:::

---

> id: koch-size

::: tab

#### 区域_{span.check(when="blank-6")}_

创建科赫雪花几乎就像一个[递归序列](gloss:sequence-recursive)：我们知道起始形状（三角形），并且知道如何从一个术语到下一个术语（通过在每个边上添加更多的三角形）：

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]]个新三角形

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]]个新三角形

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]]个新三角形

:::

{.reveal(when="blank-0 blank-1 blank-2")}第一次迭代后，每一步添加的新三角形数量增加了[[4]]倍。同时，这些新三角形的面积在每一步减小了[[9]]。

{.reveal(when="blank-3 blank-4")}假设[第一个三角形](->#koch-0)的面积为1。然后[接下来的三个三角形](->#koch-1)的总面积为`3 × 1/9 = 1/3`。以下步骤全部形成[[几何级数|arithmetic series|quadratic series]]，_{span.reveal(when="blank-5")}，它们的公共比率为[[`4/9`|`9/4`|`4/3`]]。_

{.reveal(when="blank-6")}使用无限[几何级数](gloss:geometric-series)的和的公式，我们可以计算出科赫雪花的总面积为

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`。

::: tab

#### 周边_{span.check(when="blank-9")}_

::: column.grow

我们还可以尝试计算科赫雪花的周长。如我们之前所见，周长的长度在每一步中的变化幅度为[[`4/3`|`3/4`|`1/4`]]。

{.reveal(when="blank-8")}这意味着我们又有了一个几何级数-但是在这种情况下，它的[[不会收敛|converges to 0|doesn’t have a first term]]。 _{span.reveal(when="blank-9")}这意味着科赫雪花的周长实际上__无限长__！_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _如果这似乎违反直觉，请记住，我们在每一步都将周长乘以`§4/3`，并且我们会无限次这样做。_

:::

---

> id: frozen

::: column.grow

几乎无法想象具有一个_有限_面积和一个_无限_圆周的形状–但这只是分形的许多意外特性之一。

您能否提出其他方法来创建自己的分形？ [继续](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption}“我的灵魂在周围冰冻的分形上旋转……”

:::

---

> id: menger-sponge

### 海绵海绵

分形不必像上面的许多示例一样是“平坦的”。三维外观最著名的分形之一是__Menger海绵__，以1926年首次描述它的数学家[Karl Menger](bio:menger)命名。

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

我们从一个实心立方体开始，并反复在其侧面钻出越来越小的孔。孔的每个新迭代都具有孔的先前迭代的[[`1/3`|`1/2`|`1/4`]]的宽度。

{.reveal(when="blank-0")} `3×3×3`多维数据集由27个较小的多维数据集组成，但此处已删除其中一些。 Menger海绵由[[20]]个副本组成，比副本小3倍。

{.reveal(when="blank-1")}现在，我们可以像上面的科赫雪花一样，尝试计算Menger海绵的尺寸_d_。在这种情况下，我们得到`3^d = 20`或`§d = log_3(20) ≈ 2.727`。

:::

{.reveal(when="blank-1")}如果您想无限次地切出越来越多的孔，将没有剩余的实际体积。这就是为什么多维数据集是“不完全”的3维！ [继续](btn:next)

---

> id: coastlines

### 分形海岸线

到目前为止，我们所看到的所有分形的主要特征之一就是您可以永远“放大”并始终找到新的图案。 1920年左右，英国数学家[刘易斯·弗莱·理查森](bio:richardson)意识到，许多国家的边界或海岸线也是如此。

首先从国家的基本形状开始，然后放大，然后添加河流入口，海湾和河口，然后添加各个悬崖，岩石，鹅卵石，等等：

::: column(width=120 parent="padded-thin")

    x-img(src="images/coast-1.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-2.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-3.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-4.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-5.jpg" width=120 height=180)

:::

[继续](btn:next)

---

> id: coastlines-1

::: column.grow

在尝试计算一个国家的边界长度时，这是一个重要的问题–您如何确定放大的距离以及要包括的角落和缝隙？

例如，我们可以测量英国海岸线长度的一种方法是，拿起长尺，沿着海滩漫步，然后将所有距离加起来。

如果标尺长${rulers[index]}{index|0|0,8,1}公里，则必须使用${count}次，因此我们得到的总海岸线为${count}×${rulers[index]} = ${count * rulers[index]} km。

{.reveal(when="var-0")}我们可以用越来越小的尺子继续前进，每次我们得出的海岸线长度的结果都会更长一些。就像以前的科赫雪花一样，英国的海岸线似乎无限长！这通常称为__海岸线悖论__。 [继续](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

几十年后，数学家[Benoit Mandelbrot](bio:mandelbrot)偶然发现了Richardson在IBM工作时在一本废弃的图书馆书籍中的工作。他认识到它的重要性，以及它与分形和维数的最新研究之间的关系。

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

英国的海岸线当然“看起来”是分形的，但它却不像我们之前看到的其他分形那样_自相似_。为了找到其大小，我们可以将其绘制在网格上并计算与之相交的像元数。

{.r.reveal(when="slider-0")}最初有__{.pill.yellow} 88__个相交单元。如果我们将海岸线缩放2倍，则有__{.pill.yellow} 197__个相交的像元–是两倍多！ [继续](btn:next)

{.r.reveal(when="next-0")}海岸线的面积增加了`§197/88`。与以前一样，这意味着海岸线的尺寸为

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---

> id: coastline-dimension-1

如果我们用更大的网格重复此操作，我们会发现英国海岸线的尺寸实际上约为1.21。曼德尔布洛特（Mandelbrot）意识到，这种分形维数也是形状__粗糙度__的量度–一种新概念，为此他在数学和科学的许多其他领域中发现了重要的应用。

---

> id: nature

### 自然与科技中的更多分形

尽管真正的分形永远不会出现在自然界中，但有很多物体看起来_几乎_像分形。我们已经看过植物，雪花和海岸线，这里还有更多示例：

::: column(width=200)

    // https://visibleearth.nasa.gov/images/72291/the-hindu-kush
    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption}中亚的山脉

::: column(width=200)

    // https://de.wikipedia.org/wiki/Datei:Sundarbans.jpg
    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption}印度的恒河三角洲

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption}雷电

::: column(width=200)

    // https://commons.wikimedia.org/wiki/File:Fundus_photograph_of_normal_right_eye.jpg
    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption}视网膜血管

::: column(width=200)

    // https://www.flickr.com/photos/usgeologicalsurvey/11188773133
    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption}美国大峡谷

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption}云

:::

所有这些对象可能看起来都是完全随机的，但就像分形一样，存在一个确定其形成方式的潜在模式。数学可以帮助我们更好地理解形状，分形在医学，生物学，地质学和气象学等领域都有应用。 [继续](btn:next)

    // TODO https://en.wikipedia.org/wiki/Fractal_antenna
    // TODO Fractals in African Art

---

> id: technology

::: column(width=300)

    // https://commons.wikimedia.org/wiki/File:Fractal_terrain_texture.jpg
    x-img(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption}计算机生成的分形地形

::: column.grow

我们还可以使用分形来创建逼真的自然“副本”，例如，作为视频游戏或计算机生成的电影中使用的风景和纹理。此图像中的水，山和云完全由计算机在分形的帮助下制成！

我们甚至可以逆转此过程来压缩数字图像，以减小其文件大小。最早的算法是由迈克尔·巴恩斯利（Michael Barnsley）和艾伦·斯隆（Alan Sloan）在1980年代开发的，如今仍在研究新的算法。

:::

---

## 塞尔平斯基三角

> section: sierpinski
> id: sierpinski

::: column.grow

在上一章中我们看到的一个分形是[__Sierpinski三角形__](gloss:sierpinski-triangle)，它以波兰数学家[WacławSierpiński](bio:sierpinski)的名字命名。可以通过从一个大的等边三角形开始，然后反复从其中心切出较小的三角形来创建它。

{.r.reveal(when="slider-0")}瓦茨拉夫·谢尔宾斯基（WacławSierpiński）是最早考虑这个三角形性质的数学家，但它在艺术品，图案和马赛克上出现了多个世纪。

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: sierpinski-history

以下是一些来自罗马不同教堂的地砖示例：

::: column(width=140 parent="padded-thin")

    // https://commons.wikimedia.org/wiki/File:Santa_Maria_in_Cosmedin_(Roma).jpg
    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    // Permission from Elisa Conversano
    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010")

::: column(width=140)

    // https://www.cattedraledianagni.it/
    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it")

::: column(width=140)

    // http://matheuro.overblog.com/2014/05/sierpinski-s-triangle-the-nave-of-the-roman-basilica-of-santa-maria-in-comesdin.html
    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire")

:::

事实证明，Sierpinski三角形出现在数学的其他众多领域中，并且有许多不同的生成方式。在本章中，我们将探索其中的一些！ [继续](btn:next)

---

> id: pascal
> goals: select

### 帕斯卡的三角形

您可能已经记得我们在[__帕斯卡三角形__](gloss:pascals-triangle)上的章节中的Sierpinski三角形。这是一个数字金字塔，其中每个数字都是上述两个数字的总和。点击下面三角形中的所有_偶数_数字，以突出显示它们–看看是否注意到一种模式：

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };
    figure: .overflow-wrap: .pascal-grid.small(style="width: 760px")
      - var i = 0;
      while i <= 18
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            .c= b
            - j += 1;
        - i += 1;

---

> id: pascal-1

Pascal的三角形可以一直向下延伸，而Sierpinski模式将随着越来越大的三角形而继续。您已经可以看到从第16行开始的更大三角形的开始。

如果两个相邻的单元格可被2整除，那么它们在下面单元格中的总和也必须被2整除–这就是为什么我们只能得到彩色三角形（或单个单元格）的原因。当然，我们也可以尝试为所有可被数字_除2_整除的单元着色。您认为在这些情况下会发生什么？ [继续](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

在这里，您可以看到Pascal三角形的前128行的小版本。我们突出显示了所有可被${n}{n|2|2,40,1}整除的单元格–您注意到了什么？

{.reveal(when="var-0")}对于每个数字，我们都有一个类似于Sierpinski三角形的不同三角形模式。如果我们选择[[质数|triangle number|Fibonacci number]]，则该模式特别规则。 _{span.reveal(when="blank-0")}如果该数字具有_许多不同的_素数，则该模式看起来更加随机。_

    x-gesture(target="#pascal-large x-var" slide="100,0")

---

> id: chaos-game
> goals: point play

### 混沌游戏

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

在这里您可以看到等边三角形的三个顶点。点击灰色区域中的任意位置以创建第四个点。

{.r.reveal(when="point")}让我们玩一个简单的游戏：我们随机选择一个三角形的顶点，在我们的点和顶点之间画一条线段，然后找到该段的[{.pill.red}中点](target:p1)。 [继续](btn:next)

{.r.reveal(when="next-0")}现在重复该过程：我们选择另一个随机顶点，从最后一个点开始绘制线段，然后找到[{.pill.green}中点](target:p2)。请注意，我们根据所选三角形的顶点颜色为这些新点着色。 [继续](btn:next)

{.reveal(when="next-1")}到目前为止，还没有发生什么令人惊讶的事情，但是请注意，当我们多次重复相同的过程时：

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")}添加1000个步骤_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

此过程称为__混沌游戏__。开始时可能会有一些杂散点，但是如果您重复相同的步骤多次，则点的分布开始看起来完全像Sierpinski三角形！

它有许多其他版本-例如，我们可以以正方形或五边形开始，可以添加其他规则，例如不能连续两次选择相同的顶点，或者可以按比例选择下一个点除该段上的`§1/2`以外。在某些情况下，我们会得到点的随机分布，但在其他情况下，我们会发现更多的分形：

    include components/chaos-game

{.reveal(when="s1 s2 play")}您是否发现过[Sierpinski地毯](action:carpet())或基于[__黄金比例__](gloss:golden-ratio)的[五角形雪花](action:snowflake())？

---

> id: cellular
> goals: sierpinski

### 元胞自动机

__细胞自动机__是由许多单个细胞组成的网格。每个单元格可以处于不同的“状态”（例如，不同的颜色），并且每个单元格的状态由其周围的单元格确定。

在我们的示例中，每个单元格可以是黑色或白色。我们从仅包含一个黑色正方形的一行开始。在接下来的每一行中，每个单元格的颜色由紧接上方的三个单元格确定。轻触下面的八个可能的选项以翻转其颜色–您是否可以找到一组规则来创建类似于Sierpinski三角形的图案？

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")}八个选项中的每一个都有两个选择，这意味着总共有`2^8 =` [[256]]个可能的规则。某些符号，例如[规则126](action:setRule('01111110'))，看起来像Sierpinski三角形。其他人，例如[规则30](action:setRule('01111000'))，看起来完全混乱。它是由[Stephen Wolfram](bio:wolfram)于1983年发现的，计算机甚至可以使用它们来生成随机数！

---

> id: cellular-1

::: column.grow

元胞自动机显示如何通过非常简单的规则（如分形）创建高度复杂的模式。自然界中的许多过程也遵循简单的规则，但却产生了难以置信的复杂系统。

在某些情况下，这可能会导致外观看起来像细胞自动机的图案，例如蜗牛壳上的颜色。

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} Conus纺织品，有毒的海蜗牛

:::

---

> id: tetrahedra

### Sierpinski Tetrahedra

Sierpinski三角形有许多变体，并且其他分形具有相似的特性和创建过程。有些看起来是二维的，例如您在上面看到的_Sierpinski Carpet_。其他人看起来是3维的，例如以下示例：

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski Tetrahedra

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption}西尔平斯基金字塔

:::

---

## 曼德布罗特集

> section: mandelbrot
> id: iteration
> goals: move-1 move-2

我们在前几章中看到的所有分形都是使用__迭代__的过程创建的：首先从特定的模式开始，然后一遍又一遍地重复。

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

这类似于您之前看到的另一个数学概念：对于[递归序列](gloss:sequence-recursive)，您从一个特定的数字开始，然后一次又一次地应用相同的递归公式，以得到序列。

让我们以递归公式`§x_n = x_(n-1)^2`为例，将其项绘制在数字线上。您可以更改`pill(x_0,"yellow","x0")`的值：

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

请注意，取决于起始值`x_0`，所得序列的行为会有很大不同：

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

如果`x_0 > 1`，序列[[会偏离|converges]]：_{span.reveal(when="blank-0")}，但它会一直增长，直到无穷大。_

::: column.frame.f-blue.text-center(width=212)

如果`x_0`在–1和1之间，则序列[[收敛|diverges]]。

::: column.frame.f-blue.text-center(width=212)

如果为`x_0 < -1`，则序列[[与|converges]]分开。

:::

---

> id: iteration-2

到目前为止，我们还没有学到任何新知识。但是，大约在一个世纪之前，如果您使用[__复数__](gloss:complex-numbers)而不是仅使用实数线，数学家便开始探索这些序列会发生什么。他们的发现是所有数学中最令人惊讶和最美丽的结果。

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### 朱莉娅集

让我们使用与之前相同的顺序`§x_n = x_(n-1)^2`，但要在复杂的平面上进行。您可以移动`pill(x_0,"yellow","x0")`的位置，以查看以下术语会发生什么。如果序列看起来会收敛，请以 _{span.pill.blue}蓝色_ 为平面上的相应点着色：

    figure: x-geopad(slot="stage" width=720 height=480 x-axis="-2.2,2.2,1" y-axis="-1.5,1.5,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-positioning="no" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.yellow.pulsate(name="x0" x="point(0,0)" target="x0")
        circle.yellow.transparent(name="x1" x="iterate(x0)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2)" target="x3")
        path.yellow(x="spiral(x0)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Converges!
            strong.var(:show="!converges" data-display="inline") Diverges!

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")}如您所见，只要`pill(x_0,"yellow","x0")`位于[[单位圆| outside the unit square|above the _x_-axis]] _{span.reveal(when="blank-0")}（半径为1的圆，以原点为中心）内，该序列就收敛。_

---

> id: julia-1

现在让我们做些困难。我们不仅会对前一个数字进行平方运算，还每次都会添加一个常量_{.pill.red} c_（可以是任何复数）。换句话说，`§x_n = x_(n-1)^2 + c`。您认为我们仍然会达成共识吗？您认为我们还能看到其他什么形状？ [继续](btn:next)

---

> id: julia-2

在此图中，您可以移动`pill(x_0,"yellow","x0")`的位置以及值`pill(c,"red","c")`：

::: x-slideshow

    x-geopad(slot="stage" width=720 height=480 x-axis="-1.8,1.8,1" y-axis="-1.2,1.2,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      svg
        circle.move.yellow(name="x0" x="point(0.5,0.5)" target="x0")
        circle.move.red(name="c" x="point(0,0)" target="c")
        circle.yellow.transparent(name="x1" x="iterate(x0,c)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1,c)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2,c)" target="x3")
        path.yellow(x="spiral(x0,c)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2 + pill(var("complex(c)"),"red","c")`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

{div(slot="legend")}我们已经知道如果[`c = 0`](action:animate(0,0))会发生什么–与上面的示例相同。只要`x_0`位于单位圆内，序列收敛。

{div(slot="legend")}一旦更改_c_的值，就会发生一些奇妙的事情。圆会转变为高度复杂的分形形状。

{div(slot="legend")}当[`c = –0.54 + 0.5i`](action:animate(-0.54,0.5))时，形状分成无数个细小的螺旋状排列的元素。

::: div(slot="legend")

在某些情况下，该序列不会收敛到_单点_ –相反，它会到达一个由多个点组成的循环，例如三角形。这些周期称为__轨道__。

颜色为蓝色的点表示相应的序列收敛或有轨道（我们说它是__有界__）。留白的点表示相应的序列__发散__：它没有边界，最终爆炸到无穷大。

:::

{div(slot="legend")}您还能找到什么？查看[`c = 0.4 + 0.21i`](action:animate(0.4,0.21))或[`c = 0.38 – 0.25i`](action:animate(0.38,-0.25))时的模式。还有_c_的一些值，其中_每_的序列发散，因此整个复数平原保持白色。

:::

---

> id: julia-3

通过数字着色形成的不同形状称为[__Julia Sets__](gloss:julia-set)。它们是由两位法国数学家[Gaston Julia](bio:julia)和[Pierre Fatou](bio:fatou)独立于1918年发现的。

那时，没有计算机可以帮助可视化Julia的实际外观。像朱莉娅（Julia）和法图（Fatou）这样的数学家能够从数学上对它们进行推理，但他们只见过粗略的手绘草图。

我们今天没有这个问题-以下图片是所有不同的Julia集。不同的颜色表示_多快_该点处的序列发散：

::: column(width=220)

    x-img(src="images/julia-1.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.70176 – 0.3842"i"`

::: column(width=220)

    x-img(src="images/julia-2.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.4 + 0.6"i"`

::: column(width=220)

    x-img(src="images/julia-3.jpg" width=220 height=165 lightbox)

{.caption} `c = 0.285 + 0.01"i"`

:::

[继续](btn:next)

---

> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### 曼德布罗特集

当创建不同的Julia集时，您可能已经注意到，有些值_c_的每个序列都发散了，整个复平面仍然是白色的。在朱莉娅（Julia）和法图（Fatou）几十年之后，新一代的数学家试图绘制出这些区域的样子。

在前面的示例中，我们为`pill(c,"red","c")`选择了一个固定值，然后更改了`pill(x_0,"yellow","x0")`的位置以为平面着色。现在，我们固定`pill(x_0 = 0,"yellow","x0")`的值，而改为更改`pill(c,"red","c")`的值。

再一次，在复杂平面上绘制以显示序列仍处于边界的区域。您希望出现什么形状？

    figure: x-geopad.no-background(width=720 height=480 x-axis="-2.1,1.1,1" y-axis="-1.1,1.1,1" axes grid padding=8 projections="no" label-suffix=",i" axis-names="Real, Imaginary")
      img(src="images/mandelbrot.png" data-bounds="1,0.5,-1,-1.5")
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.red.pulsate(name="c" cx=0 cy=0 target="c")
        circle.yellow.transparent(name="x0" x="point(0,0)" target="x0")
        circle.yellow.transparent(name="x1" x="iterate(x0,c)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1,c)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2,c)" target="x3")
        path.yellow(x="spiral(x0,c)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2 + pill(var("complex(c)"),"red","c")`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

---

> id: mandel-history

该分形称为[__Mandelbrot Set__](gloss:mandelbrot-set)，当旋转90°时，它看起来几乎像一个人，头部，身体和两条手臂。数学家Robert Brooks和Peter Matelski在1978年的一份研究论文中首次定义和绘制了它：

    figure: x-img(src="images/mandelbrot.jpg" width=360 height=290 credit="© Princeton University Press")

几年后，[Benoit Mandelbrot](bio:mandelbrot)使用了IBM强大的计算机为分形创建了更为详细的可视化效果，后来以他的名字命名。最初的打印输出看起来与他的预期不同–直到他意识到打印机的技术人员正在清理其边缘的“模糊性”（假定它是由灰尘颗粒或打印机错误引起的，而不是分形的确定特征） ！ [继续](btn:next)

---

> id: mandel-zoom

像所有分形一样，我们可以永远“放大” Mandelbrot集，在各个尺度上找到新的模式。您可以在此处放大Mandelbrot集的一部分，称为__海马谷__。黑点位于_内_曼德尔布罗集内，序列在此处受限制。色点位于Mandelbrot集的_外_处，序列发散，并且不同的颜色表示_增长到无穷大的速度_：

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---

> id: mandel-zoom-1

该滑块包括27个单独的图像，最大缩放级别超过14兆或`2^54`。总共花了将近45分钟才能在现代笔记本电脑上进行渲染。可以仅使用一个简单的方程`§x_n = x_(n-1)^2 + c`来创建Mandelbrot集，但它却无限复杂且非常漂亮。

---

> id: mandel-orbits

::: column(width=360 parent="right")

    x-geopad.no-background(width=360 height="340" x-axis="-1.5,0.5,1" y-axis="-0.9,0.9,1" axes padding=8 labels="no")
      img(src="images/mandelbrot.png" data-bounds="1,0.5,-1,-1.5")
      svg
        circle.move.red.pulsate(name="c" x="point(-0.3,0.4)" target="c")
        path.blue.transparent.fill(x="cardioid" target="bulb0")
        path.blue.transparent.fill(x="circle(point(-0.125,0.745),0.094)" target="bulb1")
        path.blue.transparent.fill(x="circle(point(-0.5045,0.563),0.039)" target="bulb2")
        path.yellow.thin(x="spiral(point(0,0),c)")

::: column.grow

在Mandelbrot集上移动[{.pill.red} c](target:c)的值时，您可能会注意到一个奇怪的属性：

* Mandelbrot集[[的[主体](target:bulb0)内的所有序列都将|diverge|reach an orbit]] _{span.reveal(when="blank-0")}收敛到一个点。_
* {.reveal(when="blank-0")}在[大灯泡](target:bulb1)中位于顶部[[内的序列到达由[[3]]个点组成的|converge|diverge]] _{span.reveal(when="blank-1")}轨道。_
* {.reveal(when="blank-2")}这个较小的灯泡](target:bulb2)中的序列的轨道长度为[[5]]。


:::

{.reveal(when="blank-3")}每个灯泡都有不同大小的轨道，较小的灯泡在其轨道上有越来越多的点。这些轨道的大小与[后勤图](/course/chaos)中的重要概念__后勤图__密切相关。

    // TODO: Generic pan+zoom (see http://mandel.gart.nz)
    // TODO: Relationship between Julia and Mandelbrot sets
    // TODO: Fibonacci Numbers in the Mandelbrot sets

---

> id: mandel-outro

::: column.grow

Bernoit Mandelbrot毕生致力于分形研究以及_粗糙度_和_自相似_的数学研究。他的工作在物理学，气象学，神经病学，经济学，地质学，工程学，计算机科学和许多其他领域中都有应用。

1985年，Mandelbrot套装出现在_Scientific American_杂志的封面上，从那时起，它已成为世界上最知名的数学形状之一。您可以在T恤衫，音乐视频中以及作为屏幕保护程序找到它，并且在许多流行的书籍和电影中都引用了它。

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::

---

## 空间填充曲线

> section: space-filling
> sectionStatus: dev

{.todo}即将来临！



