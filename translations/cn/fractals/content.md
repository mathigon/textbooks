# 分形

## 引言

> section: introduction
> id: intro
> trailer: ohygDnKg5mg
> color: "#8032AD"
> level: Advanced
> next: chaos

环顾大自然时，您可能已经注意到像这样的复杂植物：

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption}这种__蕨类植物__ 由许多小叶子组成，而这些小叶子又是从较大的叶子分支出来

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption}这种 __罗马花椰菜__ 由较小的[[锥体|立方体|球体]]组成，这些锥体又围绕较大的锥体以螺旋形状。

:::

{.reveal(when="blank-0")}一眼看去，它们像是非常复杂的形状 -- 但是当你仔细观察时，您可能会注意到它们都遵循一个相对简单的模式：这些植物的所有[单独部分](target:fractal)看起来与整个植物完全一样，只是更小，同样的模式在更小的尺度上不断重复。 [继续](btn:next)

---

> id: fern

在数学中，我们将这种特性称为 __自相似性__，并将具有此特性的形状称为[__分形__](gloss:fractal)。它们是所有数学中最美丽，最奇特的对象之一。

要创造我们自己的分形，必须从一个简单的图案开始，然后在较小的尺度上不断重复它。

::: column.grow

最简单的模式之一可能就是一条[{.pill.red}线段](target:s1了)，其中[{.pill.blue}还有另外两条线段](target:s2)从线段的一端分叉出去，如果我们重复这种模式，两条蓝色线段的末端还将有两条线段分叉出去。

您可以通过移动[蓝色点](target:dot)来改变所有分支的长度和角度，然后使用下方的[滑块](->#fern-slider)来增加迭代的次数。

{.reveal(when="slider-0")}根据分支的位置，您可以创建出完全不同的模式 -- 看起来像上面的[蕨类植物](action:set(130,228,197,184))、一棵[树](action:set(160,186,200,186)) 或 [嵌套的五边形](action:set(113,235,232,238))。你还能创建出什么呢？ [继续](btn:next)

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

另一个著名的分形是[__谢尔宾斯基三角形__](gloss:sierpinski-triangle)，在这种情况下，我们从一个大的等边三角形开始，然后反复从剩余部分中切出较小的三角形。

{.reveal(when="slider=0")}请注意，最终形状是如何由[自身的三个相同副本](target:x)组成的，而每个副本又是由整个三角形的更小副本组成！您可以一直放大这个三角形，这些模式和形状会一直重复。

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

本章开头的植物 _看起来_ 就像分形，但在现实生活中显然不可能创建出 _真正的_ 分形。如果我们不断重复同样的模式，并且越来越小，最终我们会得到无法再分裂的细胞、分子或原子。

但是，利用数学，我们可以思考真正的分形“将”具有的性质 - 这些是非常令人惊讶的……[继续](btn:next)

---
> id: dimension

### 分形维数

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

首先，让我们看一下分形的维数，一条线的维度是[[1]]， _{span.reveal(when="blank-0")}将其放大2倍时，很显然，其长度增加 `2^1 = 2` 倍。_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

正方形的维度是[[2]]， _{span.reveal(when="blank-0")}将其尺寸放大2倍时，其面积将增加 `2^2 =` [[4]] 倍。_

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

立方体的维度为[[3]]， _{span.reveal(when="blank-0")}将其尺寸放大2倍时，其体积将增加`2^3 =`[[8]] 倍。_ _{span.reveal(when="blank-1")}请注意，图像中较大的立方体是由8个较小的副本组成！_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

现在让我们看一下谢尔宾斯基（Sierpinski）三角形，如果我们将尺寸放大2倍，可以看到它的“面积”增加了[[3]]倍。

{.reveal(when="blank-0")}假设 _d_ 是谢尔宾斯基（Sierpinski）三角形的尺寸，应用与上述同样的模式，我们得到`2^d = 3`。换句话说，_d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")}≈1.585…_

:::

---
> id: dimension-4

但是，等等……一个东西的维度怎么可能不是整数呢？这似乎是不可能的，但这只是分形的奇特属性之一，事实上，这就是分形得此名的原因：它们具有__分数维__。

每次迭代时，我们都会占用掉谢尔宾斯基（Sierpinski）三角形的部分区域，如果我们可以无限次这样做，那么实际上就没有剩余的面积了：这就是为什么谢尔宾斯基（Sierpinski）三角形是介于于二维面积和一维线之间的原因。

::: .theorem

虽然许多分形是 _自相似的_ ，但一个更好的定义是，__分形__是具有__非整数维__的形状。

:::

[继续](btn:next)

---

> id: snowflake

### 科赫雪花

自然界中有许多看起来像分形的形状。在本章开始时，我们已经看到了一些植物例子，另外一个很好的例子是雪花和冰晶：

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

要自己创建分形雪花，我们必须再次找到一个可以反复应用的简单程序。

::: column.grow

与谢尔宾斯基（Sierpinski）三角形一样，让我们从一个单一的等边三角形开始，但是，我们没有 _在每个步骤中去移除_ 更小的三角形，而是沿边缘 _添加_ 更小的三角形，每个三角形的边长是上一步骤中三角形的[[`1/3`|`1/4`|`1/2`]]。

{.reveal(when="blank-0")}产生的形状称为[__科赫雪花（Koch Snowflake）__](gloss:koch-snowflake)，以瑞典数学家[Helge von Koch](bio:koch)的名字命名。再次注意，雪花边缘的[小部分](target:t2)看起来与[整体大的部分](target:t1)完全一样。

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

当我们将科赫雪花（Koch Snowflake）的一个边缘部分放大3倍时，其长度变为[[四倍|三倍|两倍]]。

{.reveal(when="blank-0")}使用与上面提到的维度与缩放比例之间的关系，可以得到公式[[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]]。 _{span.reveal(when="blank-1")}这意味着科赫雪花（Koch Snowflake）的维度为`§d = log_3(4) ≈ 1.262`。_

:::

---

> id: koch-size

::: tab

#### 面积_{span.check(when="blank-6")}_

创建科赫雪花（Koch Snowflake）就像创建一个[递归序列](gloss:sequence-recursive)：我们知道起始的形状（一个三角形），并且知道如何从一个项到下一个项的方式（通过在每个边上添加更多的三角形）：

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]]个新的三角形

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]]个新的三角形

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]]个新的三角形

:::

{.reveal(when="blank-0 blank-1 blank-2")}第一次迭代后，每一步新的三角形数量增加了[[4]]倍，同时，每一个新的三角形的面积是上一步大三角形面积的[[9]]分之一。

{.reveal(when="blank-3 blank-4")}假设[第一个三角形](->#koch-0)的面积为1。然后[接下来的三个三角形](->#koch-1)的总面积为`3 × 1/9 = 1/3`，后面的步骤依此类推，形成[[等比数列|等差数列|二项式数列]]，_{span.reveal(when="blank-5")}，它们的公比为[[`4/9`|`9/4`|`4/3`]]。_

{.reveal(when="blank-6")}使用无穷[等比数列](gloss:geometric-series)的求和公式，我们可以计算出科赫雪花（Koch Snowflake）的总面积为

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`。

::: tab

#### 周长_{span.check(when="blank-9")}_

::: column.grow

我们还可以尝试计算科赫雪花（Koch Snowflake）的周长。正如我们之前已经看到的，周长在每一步都会改变[[`4/3`|`3/4`|`1/4`]]。

{.reveal(when="blank-8")}这意味着我们有一个等比数列 - 但是在本例中，它[[不收敛|收敛于0|没有首项]]。 _{span.reveal(when="blank-9")}这意味着科赫雪花（Koch Snowflake）的周长实际上是__无限长__！_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _如果这似乎违反直觉，请记住，我们在每一步都将周长乘以`§4/3`，并且我们会无限次这样做。_

:::

---

> id: frozen

::: column.grow

现在你拥有一个_有限_面积和一个_无限_周长的形状，这简直不可思议 – 但这只是分形的许多意想不到的特性之一。

您能否想出其他方法来创建自己的分形吗？ [继续](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption}“我的灵魂在周围冰冻的分形上旋转……”

:::

---

> id: menger-sponge

### 门格海绵

分形不一定要像上面的许多示例一样是“扁平的”。最著名的三维分形之一是__门格海绵（Menger sponge）__，以数学家[Karl Menger](bio:menger)的名字命名，他在1926年首次对它进行了描述。

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

我们从一个实心的立方体开始，不断地在它的侧面钻出越来越小的孔，每一次新迭代孔的宽度都是上一次迭代孔的宽度的[[`1/3`|`1/2`|`1/4`]]。

{.reveal(when="blank-0")} 一个 `3×3×3` 的立方体由 27 个小立方体组成，但这些我们已经移除了其中一些小立方体，门格海绵（Menger sponge）由[[20]]个自身的副本（小立方体）组成，这些副本的宽度是上一次迭代的立方体宽度的 `1/3`。

{.reveal(when="blank-1")}现在，我们可以像上面的科赫雪花一样，尝试计算一下门格海绵（Menger sponge）的尺寸_d_，在这种情况下，我们得到`3^d = 20`或`§d = log_3(20) ≈ 2.727`。

:::

{.reveal(when="blank-1")}想像一下，如果您无限次地切出越来越多的孔，那么实际的体积就没有了，这就是为什么立方体是“不完全的”三维！ [继续](btn:next)

---

> id: coastlines

### 分形海岸线

到目前为止，我们所看到的所有分形的关键特征是，你可以一直“放大”，并始终能找到符合同样模式的新的图案。 1920年左右，英国数学家[刘易斯·弗莱·理查森](bio:richardson)意识到，许多国家的边境线或海岸线也是如此。

首先来看一个国家的基本形状，随着你不断放大，可以看到河流入口、海湾，然后是悬崖、岩石，等等：

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

在计算一个国家的边境线长度时，一个重要的问题是 – 你如何决定放大多大，要包括哪些角落和裂缝？

例如，测量英国海岸线的长度，我们可以有一种方法，拿起一把长尺，绕着海滩走一圈，然后将所有的距离加起来。

如果标尺长${rulers[index]}{index|0|0,8,1}公里，则必须使用它${count}次，因此我们得到的总海岸线长度为${count}×${rulers[index]} = ${count * rulers[index]} 公里。

{.reveal(when="var-0")}我们可以继续，用越来越小的尺子，每次我们得出的海岸线长度都会更长一些。就像前面的科赫雪花一样，英国的海岸线似乎是无限长！这通常被称为__海岸线悖论__。 [继续](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

几十年后，数学家 [本华·曼德勃罗（Benoit Mandelbrot）](bio:mandelbrot) 偶然发现了理查森（Richardson）在IBM工作时废弃在图书馆的一本书籍中的工作，他认识到了它们的重要性，以及与当时最新的对分形和维数研究之间的关系。

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

英国的海岸线确实“看起来”是分形的，但它却不像我们之前看到的其他分形那样是 _自相似_ 的，为了找到它的大小，我们可以将其绘制在网格上，并计算它与多少个单元格相交。

{.r.reveal(when="slider-0")}最初有__{.pill.yellow} 88__个相交单元格，如果我们将海岸线缩小1倍，则有__{.pill.yellow} 197__个相交的单元格 – 是之前的两倍多！ [继续](btn:next)

{.r.reveal(when="next-0")}海岸线的长度增加了`§197/88`，与以前一样，这意味着海岸线的维数为

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---

> id: coastline-dimension-1

如果在更大的网格上重复这个过程，我们会发现英国海岸线的维数实际上约为 1.21。曼德勃罗（Mandelbrot）意识到，这种分形维数也是形状__粗糙度__的一种度量，这是一个全新的概念，并且他在数学和科学的许多其他领域发现了重要的应用。

---

> id: nature

### 自然与科技中的更多分形

尽管真正的分形永远不会出现在自然界中，但有很多物体看起来 _几乎_ 就是分形。我们已经看过植物、雪花和海岸线，这里还有更多的例子：

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption}位于中亚的山脉

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption}印度的恒河三角洲

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption}闪电

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption}视网膜上的血管

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption}美国大峡谷

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption}云朵

:::

所有这些物体的形状看起来可能都是完全随机的，但就像分形一样，存在一个潜在的模式决定了它们是如何形成的，数学可以帮助我们更好地理解这些形状，分形在医学、生物学、地质学和气象学等领域都有应用。 [继续](btn:next)

---

> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption}由计算机生成的分形地形

::: column.grow

我们也可以使用分形来创建逼真的自然“复制品”，例如，用于视频游戏或计算机生成的电影中的景观和纹理，左图中的水，山和云完全是由计算机利用分形完成的！

我们甚至可以逆转此过程来压缩数字图像，以减小它们的文件大小。最早的算法是由迈克尔·巴恩斯利（Michael Barnsley）和艾伦·斯隆（Alan Sloan）在20世纪80年代开发的，而新的算法至今仍在研究之中。

:::

---

## 谢尔宾斯基三角形

> section: sierpinski
> id: sierpinski

::: column.grow

在上一章中我们看的分形其中有一种是[__谢尔宾斯基三角形（Sierpinski Triangle）__](gloss:sierpinski-triangle)，它是以波兰数学家[瓦茨瓦夫·谢尔宾斯基（WacławSierpiński）](bio:sierpinski)的名字命名的，我们可以通过从一个大的等边三角形开始，然后反复从其中心切割出较小的三角形来创建它。

{.r.reveal(when="slider-0")}瓦茨拉夫·谢尔宾斯基（WacławSierpiński）是第一个思考这种三角形性质的数学家，但是它在艺术品、图案和马赛克上已经出现了多个世纪。

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

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire")

:::

事实证明，谢尔宾斯基三角形（Sierpinski Triangle）在数学的其它领域也有广泛的应用，并且有许多不同的方法来生成它。在本章中，我们将探讨其中的一些！ [继续](btn:next)

---

> id: pascal
> goals: select

### 帕斯卡三角形

您可能已经记得我们在[__帕斯卡三角形__](gloss:pascals-triangle)的章节中讲过谢尔宾斯基三角形（Sierpinski Triangle）是一个数字金字塔，其中每个数字都是它上面的两个数字之和。点击下面三角形中的所有 _偶数_ 数字，以高亮显示它们，然后看看你是否注意到一种模式：

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

帕斯卡三角形可以一直向下延伸，而谢尔宾斯基模式也会一直往下重复，三角形也会越来越大。从第16行开始，你已经可以看到一个更大的三角形顶部了。

如果两个相邻的单元格可被2整除，那么在它们下面的单元格的和也必须被 2 整除 –- 这就是为什么我们只能得到彩色三角形（或单个单元格）的原因。当然，我们也可以尝试为所有可被2之外的整数整除的单元格着色，你认为在这些情况下会发生什么呢？ [继续](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

在这里你可以看到帕斯卡三角形前128行的微缩版本，我们高亮显示了所有可被${n}{n|2|2,40,1}整除的单元格 –- 您注意到了什么？

{.reveal(when="var-0")}对于每个数字，我们都得到一个类似于谢尔宾斯基三角形（Sierpinski Triangle）的三角形模式。如果我们选择了一个[[质数|三角数|斐波那契数]]，模式看起来就特别有规律。 _{span.reveal(when="blank-0")} 如果该数字有  *多个不同的*  因数，则该模式看起来更加随机。_

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

在这里您可以看到一个等边三角形的三个顶点，点击灰色区域中的任意位置创建第四个点。

{.r.reveal(when="point")}让我们来玩一个简单的游戏：随机选择三角形的一个顶点，第四个点和选择的这个顶点之间画一条线段，然后找到该线段的[{.pill.red}中点](target:p1)。 [继续](btn:next)

{.r.reveal(when="next-0")}现在重复该过程：我们选择另一个随机顶点，绘制这个顶点到刚找到的中点之间的线段，然后再找到这条线段的[{.pill.green}中点](target:p2)。请注意，我们根据所选择的三角形的顶点颜色为这些新点着色。 [继续](btn:next)

{.reveal(when="next-1")}到目前为止，还没有发生什么令人惊讶的事情，但是请注意，当我们重复这样的过程很多次时：

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")}重复1000次这个过程_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

这个过程被称为__混沌游戏__。刚开始的时候可能会有一些零散的点，但如果你多次重复同样的步骤，这些点的分布就会开始看起来和谢尔宾斯基三角形（Sierpinski Triangle）完全一样！

还有许多其它的版本 -- 例如，我们可以从一个正方形或正五边形开始，可以添加一些额外的规则，比如不能连续两次选择同一顶点，或者可以按另外一个比例（而不是 `§1/2`）来选择线段上的下一个点。在某些情况下，我们会得随机分布的点，但在有些情况下，我们会得到更多的分形：

    include components/chaos-game

{.reveal(when="s1 s2 play")}您是否发现了基于[__黄金比例__](gloss:golden-ratio)的[谢尔宾斯基地毯（sierpinski carpet ）](action:carpet())或[五边形雪花](action:snowflake())？

---

> id: cellular
> goals: sierpinski

### 元胞自动机

__细胞自动机__是由许多单个细胞组成的网格。每个细胞可以处于不同的“状态”（例如，不同的颜色），每个细胞的状态是由其周围的细胞决定的。

在我们的示例中，每个单元格可以是黑色或白色，我们从只包含一个黑色正方形的一行开始，在接下来的每一行中，每个单元格的颜色由紧接上方的三个单元格确定，下面是8个可能的选项，可以通过点击以翻转单元格的颜色 -–您是否能找到一组规则来创建类似于谢尔宾斯基三角形（Sierpinski Triangle）的模式图案？

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")}上面 8 个选项中的每一个都有两种可能，这意味着总共有`2^8 =` [[256]]种可能的规则。某些符号，例如[规则 126](action:setRule('01111110'))，看起来就像谢尔宾斯基三角形（Sierpinski Triangle）。而其它的，如[规则 30](action:setRule('01111000'))，看起来完全是混乱的，计算机甚至可以使用它们来生成随机数！它是由[Stephen Wolfram](bio:wolfram)于1983年发现的。

---

> id: cellular-1

::: column.grow

元胞自动机展示了高度复杂的模式其实可以由非常简单的规则创建出来，自然界中的许多过程也遵循非常简单的规则，但却产生了难以置信的复杂系统。

在某些情况下，这可能会导致外观看起来像细胞自动机的图案出现，例如这只蜗牛壳上的颜色。

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} 织锦芋螺，一种有毒的海蜗

:::

---

> id: tetrahedra

### 谢尔宾斯基四面体（Sierpinski Tetrahedra）

谢尔宾斯基三角形（Sierpinski Triangle）有许多变体，还有一些具有类似属性和创建过程的其它分形。有些看起来是二维的，例如你在上面看到的 _谢尔宾斯基地毯（sierpinski carpet ）_ ，还有一些看起来是立体的，比如下面的例子：

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} 谢尔宾斯基四面体（Sierpinski Tetrahedra）

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption}谢尔宾斯基金字塔（Sierpinski Pyramid）

:::

---

## 曼德布罗特集

> section: mandelbrot
> id: iteration
> goals: move-1 move-2

我们在前面章节中看到的所有分形都是通过__迭代__的过程创建的：首先从一个特定的模式开始，然后不断地重复。

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

这和你之前看到的另一个数学概念很相似：用[递归序列](gloss:sequence-recursive)，从一个特定的数字开始，然后不断重复应用同样的递归公式，以得到序列中的下一个数字。

让我们以递归公式 `§x_n = x_(n-1)^2` 为例，将其项绘制在数轴上。您可以更改`pill(x_0,"yellow","x0")` 的值：

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

请注意，根据起始值 `x_0` 的不同，得到的结果序列所表现出的行为会有很大不同：

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

如果 `x_0 > 1`，则序列 [[发散|收敛]]：_{span.reveal(when="blank-0")}，它会一直增长，直到无穷大。_

::: column.frame.f-blue.text-center(width=212)

如果 `x_0` 在 –1 和 1 之间，则序列[[收敛|发散]]。

::: column.frame.f-blue.text-center(width=212)

如果 `x_0 < -1`，则序列[[发散|收敛]]。

:::

---

> id: iteration-2

到目前为止，我们还没有学到任何新的东西。但是，大约在一个世纪以前，数学家们开始探索如果使用[__复数__](gloss:complex-numbers)而不是仅仅使用实数数轴，这些序列会发生什么。他们的发现是整个数学当中最令人惊讶和最美丽的结果之一。

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### 朱莉娅集

让我们使用与之前相同的序列 `§x_n = x_(n-1)^2`，但要在复平面上进行。您可以移动`pill(x_0,"yellow","x0")`的位置，查看。如果序列看起来会收敛，就用 _{span.pill.blue}蓝色_ 为平面上的相应点着色：

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
            strong.var.m-blue(:show="converges" data-display="inline") 收敛!
            strong.var(:show="!converges" data-display="inline") 发散!

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")}可以看到，只要`pill(x_0,"yellow","x0")`位于[[单位圆|单位正方形外部| _x_轴上方]] _{span.reveal(when="blank-0")}（以原点为中心，半径为1的圆）内，该序列就收敛。_

---

> id: julia-1

下面来点稍微难的，不仅仅是取前一个数字的平方数，每次还添加了一个常量 _{.pill.red} c_ （可以是任何复数），换句话说，`§x_n = x_(n-1)^2 + c`，你认为还会得到收敛圆吗？你认为我们会看到什么样的形状？ [继续](btn:next)

---

> id: julia-2

在此图中，您可以移动`pill(x_0,"yellow","x0")`的位置，调整`pill(c,"red","c")` 的值：

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
            strong.var.m-blue(:show="converges" data-display="inline") 有界!
            strong.var(:show="!converges" data-display="inline") 发散!

{div(slot="legend")}我们已经知道如果 [`c = 0`](action:animate(0,0))会发生什么–与上面的示例相同。只要`x_0`位于单位圆内，序列收敛。

{div(slot="legend")}一旦改变_c_的值，一些奇妙的事情就发生了，圆变成了一个高度复杂的分形形状。

{div(slot="legend")}当 [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)) 时，这种形状就会分裂成无数个螺旋状排列的微小部分。

::: div(slot="legend")

在某些情况下，该序列不会收敛到一个_单点_ ，相反，它会形成一个由多个点组成的像三角形这样的循环路径，这些循环称为__轨道__。

显示为蓝色的点表示相应的序列要么是收敛的，要么是有一条轨道，我们说它是__有界__的。其余的白色点表示相应的序列是__发散__的，它没有边界，最终会膨胀到无穷大。

:::

{div(slot="legend")}您还能发现些什么？来看一下 模式  [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) 或 [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)) 。存在某些 _c_ 的值，使得 _每个序列_ 都是发散的，从而导致整个复平面大多是白色的了。

:::

---

> id: julia-3

通过数字着色形成的不同形状称为[__Julia集__](gloss:julia-set)。它是由两位法国数学家[加斯顿.朱利亚（Gaston Julia）](bio:julia)和[皮埃尔.法图（Pierre Fatou）](bio:fatou)于1918年各自独立发现的。

在那个时候，没有计算机可以帮助我们直观地看到Julia集的实际样子，像朱利亚（Julia）和法图（Fatou）这样的数学家能够从数学上对它们进行推理，但他们只能看到粗略的手绘草图。

这个问题在今天就不存在了，下面的图片是所有不同的Julia集，不同的颜色表示序列在该点的发散有_多快_：

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

当创建不同的Julia集时，你可能已经注意到，_c_的某些值对应的每个序列都发散了，整个复平面留下是白色的。在朱利亚（Julia）和法图（Fatou）之后的几十年，新一代的数学家试图绘制出这些区域的样子。

在前面的示例中，我们为 `pill(c,"red","c")` 选择了一个固定值，然后改变`pill(x_0,"yellow","x0")`的位置以对平面着色。现在，我们让我们先设定固定值 `pill(x_0 = 0,"yellow","x0")`，而不是改变 `pill(c,"red","c")`的值。

再一次，在复平面上绘制以显示序列仍处于边界的区域，你希望看到什么形状？

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
            strong.var.m-blue(:show="converges" data-display="inline") 有界!
            strong.var(:show="!converges" data-display="inline") 发散!

---

> id: mandel-history

这种分形称为[__曼德布罗特集（Mandelbrot Set）__](gloss:mandelbrot-set)，当旋转90°时，它看起来像一个有头有身有两条手臂的人，数学家 Robert Brooks 和 Peter Matelski 在1978年的一份研究论文中首次定义和绘制了它：

    figure: x-img(src="images/mandelbrot.jpg" width=360 height=290 credit="© Princeton University Press")

几年后，[Benoit Mandelbrot](bio:mandelbrot) 使用了IBM强大的计算机为分形创建了更为细致的可视化效果，这些分形后来以他的名字命名。第一批打印输出的分形看起来与他预想的不一样，直到他意识到打印机技术人员正在清理其边缘的“模糊”部分（他们认为它是由灰尘颗粒或打印机错误引起的，而不是由于对分形特征的定义造成的） ！ [继续](btn:next)

---

> id: mandel-zoom

像所有分形一样，我们可以一直不断“放大” 曼德布罗特集（Mandelbrot Set），在各个尺度下都可以找到一种新的模式。在这里你可以放大曼德布罗特集（Mandelbrot Set）中称为__海马谷__的这部分，黑色点位于 曼德布罗特集（Mandelbrot Set） _内_ ，这里的序列是收敛的，其它有颜色的点位于 曼德布罗特集（Mandelbrot Set）之外，这里的序列是发散的，不同的颜色表示它 _增长到无穷大的速度_ 有多快：

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---

> id: mandel-zoom-1

该滑动条由 27 幅单独的图像组成，最大可以达到14兆或`2^54`倍的缩放级别，在一款现代笔记本电脑上进行渲染，总共花了将近45分钟。曼德布罗特集（Mandelbrot Set）可以用一个简单的方程 `§x_n = x_(n-1)^2 + c` 来来创建，但它却又是无限复杂的，而且非常漂亮。

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

当你在曼德布罗特集（Mandelbrot Set）周围移动[{.pill.red} c](target:c)的值时，您可能会注意到一个奇妙的性质：

* 曼德布罗特集（Mandelbrot Set）的[主体部分](target:bulb0)内的所有序列都是 [[收敛|发散|沿一个轨迹]] _{span.reveal(when="blank-0")}到一个点。_
* {.reveal(when="blank-0")} 在顶部[球状体](target:bulb1)内的所有序列 [[形成一条轨迹|收敛|发散]] _{span.reveal(when="blank-1")}它由[[3]]个点组成。_
* {.reveal(when="blank-2")}  在[较小球状体](target:bulb2)里的序列有一长度为 [[5]] 的轨迹。

:::

{.reveal(when="blank-3")}每个球状体都有不同大小的轨道，越小的球状体在其轨道上的点越多。这些轨道的大小与[混沌理论](/course/chaos)中的重要概念__单峰映象（logistic map）__密切相关。

---

> id: mandel-outro

::: column.grow

曼德布罗特（Bernoit Mandelbrot）将毕生精力奉献给了分形研究，以及与_粗糙度_和_自相似_相关的数学研究。他的工作在物理学、气象学、神经学、经济学、地质学、工程学、计算机科学和许多其他领域中都有应用。

1985年，曼德布罗特集（Mandelbrot Set）出现在_《科学美国人》_杂志的封面上，从那时起，它已成为世界上最具识别度的数学图形之一。您可以在T恤、音乐视频和屏幕保护程序中看到它，它也被很多流行书籍和电影引用。

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::

---

## 空间填充曲线

> section: space-filling
> sectionStatus: dev

{.todo}即将来临！
