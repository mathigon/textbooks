# 整除和素数

## 因子和倍数

> section: factors-and-multiples
> id: divisibility1
> color: "#1AA845"
> level: Foundations

    mixin grid(n, fn)
      .number-grid
        - var i = 1
        while i <= n
          .number-cell= i
            if fn
              - var badge = fn(i)
              if badge
                .number-badge= badge
          - i += 1

    mixin divisor-table(divisors, pairs)
      - var len = divisors.length
      - var last = divisors[len-1]
      table.divisor-table
        tr
          td.td-border-right(width="24")= last
          for i in divisors
            td.divisor-number(width="24" data-display="visibility")= i + (i == last ? '' : ',')
        for i in pairs
          tr
            td
            if i
              td(colspan=i)
            td(colspan=len - 2 * i): .divisor-pair(style="height: " + (len/2 - i) + "00%" data-display="visibility")
            if i
              td(colspan=i)

现在你应该熟悉了整数的加法，减法和乘法了。 除法稍有不同，因为你不能总是用一个数
整除另一个数。例如：17被3除的话得到的不是一个整数 –结果是一个 介于5和6之间的数。
你要么给出个余数(2)，或 将答案用十进制小数(5.66）表示。

    .row.padded
      .grow
        include svg/divisibility-1.svg
        p.caption 12 可以被 3 整除
      .grow
        include svg/divisibility-2.svg
        p.caption 10 不能被 4 整除

如果你能将整数__{.red}A__分成__{.blue}B__等份, 且无剩余, 我们就称__{.blue}B__是
__{.red}A__的一个__因子__(或 __除数__), 同时__{.red}A__是__{.blue}B__的一个
__倍数__。我们通常写作__{.blue}B__|__{.red}A__, 该处的竖线只是表示 _“整除”_。

例如: __{.green}7__ × 3 = __{.orange}21__, 因此__{.green}7__是__{.orange}21__
的一个[[因子|倍数]], __{.orange}21__是__{.green}7__的一个[[倍数|因子]], 于是
__{.green}7__|__{.orange}21__.

---
> id: divisibility-game

在下面这个简短的游戏中你必须尽可能快的确定哪些数字是 因子或倍数。点击 [播放按钮](->#divisibility-game_.toggle) 开始游戏。

::: .box.f-blue.no-padding
#### 因子和倍数测试

    x-gameplay
      .factors-row
        .factor-number ${x}
        | 是
        .factor-number ${y}
        .factor-value
          .factor-bubble: .btn.btn-blue 因子
          .factor-bubble: .btn.btn-blue 倍数
          .factor-bubble: .btn.btn-blue 都不是

:::

---
> id: factors

通常找出一个数的__所有__除数很有用. 例如：60的所有除数是 1, 2, 3, 4, 5, 6,
10, 12, 15, 20, 30 和 60.

当然，你可以不用检测有所60个数是不是它的除数，而是依据这么一个小技巧：除数总是[[成对|三个一组|折半]]出现。

---
> id: factors1

在60这个例子里, 我们有 60 = 1 × 60 = 2 × 30 = 3 × 20 = 4 × 15 = 5 × 12 =
6 × 10. 或者, 用一个不同的表示法,

    include mixins
    +divisor-table([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60], [5, 4, 3, 2, 1, 0])

为了找到一个数的所有除数，我们从这个列表的两头向中间开始找, 直到在中点相遇。

---
> id: factors2

    include mixins
    x-slideshow
      .stage(slot="stage")
        +divisor-table([1, 2, 3, 6, 7, 14, 21, 42], [3, 2, 1, 0])
      .legend(slot="legend") 例如：42的第一个除数对是1和42, 于是我们把这两个数写下来，并它们之间多些空格
      .legend(slot="legend") 以1开了头之后, 我们检查2是否整除42。它能整除，而且相应的配对是 42 ÷ 2 = 21.
      .legend(slot="legend") 下一个, 我们检查3是否整除42。它能整除，而且相应的配对是 42 ÷ 3 = 14.
      .legend(slot="legend") 现在我们检查下4是否整除42。它不能整除，因此我们继续下一个。
      .legend(slot="legend") 5也不能整除42，所以我们继续下一个。
      .legend(slot="legend") 6又可以整除42。它的配对是42 ÷ 6 = 7。现在注意下，我们经过几步尝试后已经到达中点了, 并不用检测7到42间的所有数。

这个方法的特殊地方在遇到平方数时: 这种情况下，你在中点会遇到只有一个数的情形，就像64 = 8 × 8.

---

## 整除规律

> id: divisibility2
> section: rules

有些许的不同规则能够简单的检测一个数是否能被另一个数整除。在本节我们将看看其中的一些规则…

### 被2和5整除

每个数都能被1整除。为了检测一个数是否能被2整除，我们只需简单的判断它是否为偶数：
任何以0，2，4，6，或8结尾的数。

    include mixins
    +grid(30)

---
> id: divisibility5

为了检测一个数是否能被5整除，仅仅只要判断它的末位数是否为0或5。

    include mixins
    +grid(30)

---
> id: divisibility5a

为什么2和5的规律如此简单? 这个原因和我们的数制(进制)有关。现在这个数制的基(进制)
是10，这意味这一个数里的每位数都是其位于右边相邻位时的10倍。如果我们用数6382举例，

    table.base-10.base-10-fixed
      tr.base-10-large
        td: strong 6
        td: strong 3
        td: strong 8
        td: strong 2
      tr.caption
        td: | =6000
        td: | =300
        td: | =80
        td: | =2

现在我们能够将一个数的末位数从其它的位数里分离开

    table.table-tiny
      tr.base-10-large
        td #[strong.m-red abc]#[strong.m-green d]
        td: | =
        td #[strong.m-red abc × 10]
        td +
        td #[strong.m-green d]
      tr.caption
        td #[strong.m-red 638]#[strong.m-green 2]
        td: | =
        td #[strong.m-red 638 × 10]
        td +
        td #[strong.m-green 2]

2和5两个都是10的因子，所以它们[[总能|绝不能|有时]]整除 __{.m-red}abc × 10__,
不管__{.m-red}a__, __{.m-red}b__ 和 __{.m-red}c__ 的值是多少。因此我们仅仅只
需检测最后一位数: 如果 __{.m-green}d__ 能够被2整除那么[[该数|abc]]也能被2整除。
如__{.m-green}d__能被5整除那么该数就能被5整除。

---
> id: divisibility4b

最简单的是被10整除的规则: [[末位数是0|首位数是1|末位数是偶数]].

---
> id: divisibility4

### 被4和8整除

不幸的是4不能整除10，所以我们不能通过最后一位数来检测 - 但是 4 _能_ 整除 100,
所以我们只要稍微修改上面的规则。现在我们写成 __{.m-red}ab__**{.m-green}cd**
= __{.m-red}ab × 100__ + __{.m-green}cd__. 我们知道4总能整除__{.m-red}ab × 100__,
所以我们只需要看看末[[2]]位数能否被4整除.

例如，__{.m-green}24__ 能被4整除，所以__{.m-red}2735__**{.m-green}24**
[[也能|不能]] 被4整除, 而 __{.m-green}18__ 不能被4整除所以
__{.m-red}1947__**{.m-green}18** [[也不能|也能]] 被4整除。

---
> id: divisibility4a

被8整除的规则更加复杂点，因为100也不能被8整除。因而我们要继续增大数字到
[[1000|800|108]]然后看看末[[3]]位数。

例如，__{.m-green}120__ 能被8整除, 所以__{.m-red}271__**{.m-green}120**
能够被8整除。

---
> id: divisibility3a

### 被3和9整除

被3整除的规则愈加的复杂，3不能整除10，而且它也不能整除100，甚至1000，甚至10的
任意次方的数。简单的查看数的末几位也无效。

我们需要另一种方法：数的__位和__, 就是简单的把一个数每位上的数字相加。例如，
${13×n+123}{n|3|0,20,1}的位和是 ${digitSumString(123+13×n)} = ${digitSum(123+13×n)}
, 因此3524的位和是[[14]].

---
> id: divisibility3b

    include mixins
    +grid(40, function(n) { if (!(n % 3)) { var s = '' + n; return +s[0] + (+s[1] || 0); } })

这里我们已经把所有3的倍数高亮了。你可以看到它们的位和总是[[3的倍数|0或3|奇数]]。

{.reveal(when="blank-0")} 因此，判断一个数是否能被3整除，你只需计算它的位和，
然后判断计算结果是否也能被3整除。

---
> id: divisibility9

下一个，让我们看看9的倍数:

    .number-grid
      for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        .number-cell.yellow= x*9
          .number-badge= (x == 11 ? 18 : 9)

看起来，所有能被9整除的数它的位和[[也|不]]能被9整除。
_{span.reveal(when="blank-0")}例如，4752的位和是[[18]], 所以4752 [[ 能|不能]]
被9整除。_

---
> id: divisibility9a

当然，被3和9整除的数具有的奇特模式肯定有什么原因 –  就像之前的和我们的数基(10进制)
相关。 正如我们知道，写下数__{.m-red}6__**{.m-blue}3**__{.m-green}8__**{.m-yellow}4**
的同时也是可以这样表示:

{.text-center} __{.m-red}6 × 1000__ + __{.m-blue}3 × 100__ + __{.m-green}8 × 10__ + __{.m-yellow}4__.

我们能将每个乘积拆分成两个部分:

{.text-center} __{.m-red}*{span.digit-sum-else}6 × 999* + *{span.digit-sum-is}6*__ +
__{.m-blue}*{span.digit-sum-else}3 × 99* + *{span.digit-sum-is}3*__ +
__{.m-green}*{span.digit-sum-else}8 × 9* + *{span.digit-sum-is}8*__ +
__{.m-yellow.digit-sum-is}4__.

当然, __{.m-green}9__, __{.m-blue}99__, __{.m-red}999__, 诸如等等都总是能被3
(或被9)整除。剩下的事就是：检测所有那些剩下的是否也能被3(或9)整除。

{.text-center} __{.m-red}6__ + __{.m-blue}3__ + __{.m-green}8__ + __{.m-yellow}4__

这正好是数位和! 所以如果它的[{.no-margins}数位和](->.digit-sum-is)是3的一个倍数,
而且我们知道[{.no-margins}其它每部分](->.digit-sum-else)也是3的倍数, 那么其结果也一定是3的一个倍数。

---
> id: divisibility6
> goals: btn2 btn3

### 被6整除

目前我们还是跳过了数字6 – 但是我们已经完成了所有的难搞的工作。记住一点 6 = 2 × 3.

    include mixins
    +grid(40)
    p.btn-row.text-center(style="margin-bottom:1em")
      button.btn.btn-small(data-display="visibility") 显示2的倍数
      button.btn.btn-small(data-display="visibility") 显示3的倍数

为了检测一个数是否能被6整除我们只用检测它是否能被2整除[[同时也|或]]被3整除。
注意到这对6有效，但是不一定对 _任意_ 两个数的乘积数有效。关于那我们稍后再论…

---
> id: primes
> section: primes

## 素数(又叫质数)

我们在计算这些除数对时，会遇到一些只有第一对除数的数。一个例子是 13 – 它只有
除数1和13自己。这些特殊的数被称为__素数__. 它们不能被拆成两个稍小的数的乘积。
某种程度上，它们成了“原子数”。

注意 1 自身 _不是_ 一个素数, 所以首批的一些素数是 2, 3, 5, 7, 11, 13, …

---
> id: primes1

任意不是素数的数都能被写成素数的乘积形式：我们只要不断的把它分解成更多的部分直到所有
因子都是素数。例如,

    table.table-tiny
      tr
        td(colspan=4)
        td: .number-ball.legs.b.a 84
      tr
        td(colspan=2)
        td: .number-ball.blue 2
        td(colspan=3) ×
        td: .number-ball.blue.legs.b 42
      tr
        td(colspan=4)
        td: .number-ball.green 2
        td(colspan=2) ×
        td: .number-ball.green.legs(style="margin: 0 -10px") 21
      tr.td-border-bottom
        td(colspan=6)
        td: .number-ball.yellow 3
        td ×
        td: .number-ball.yellow 7
      tr
        td: .number-ball 84
        td: | =
        td: .number-ball.blue 2
        td ×
        td: .number-ball.green 2
        td ×
        td: .number-ball.yellow 3
        td ×
        td: .number-ball.yellow 7

现在 2, 3 和 7 是素数而且不能再被分解了。2 × 2 × 3 × 7 被称为84的 __质因式__,
同时 2, 3 和 7 是它的 __质因子__. 注意一些素数，比如这里的2，可以在一个质因式
里出现多次。

每个整数都有一个质因式，但是没有两个数的质因式是一样的。更进一步，任意整数
都只有一种质因式写法 – 除非我们把素数不同顺序算成不同写法。这就是 __算术基本定理(FTA-Fundamental Theorem of Arithmetic)__.

利用算术基本定理能够使许多数学问题变得简单多了: 我们做多个数的质因数分解时，我们先独立
分解一个个数来解决问题，这样通常会简单很多，然后把这些结果组合起来从而解决原来
的问题。

---
> id: eratosthenes

### 埃拉托色尼筛选法

结果, 很难确定一个数是否是素数: 你总是必须找到它 _全部_ 的质因数, 随着数变大
而变得越难确定。 然而，希腊数学家 - [昔兰尼古城的埃拉托色尼](bio:eratosthenes)想到了
一个简单的算法来找出100内的全部素数: __埃氏素数筛选法__.

    include mixins
    x-slideshow
      .stage(slot="stage")
        +grid(100)
      .legend(slot="legend") 首先我们需要写下100内的所有整数
      .legend(slot="legend") 我们知道1不是素数，所以删掉它。
      .legend(slot="legend") 最小的素数是#[strong.m-red 2]. 任何2的倍数都不是素数，因为它有个因子2。所以我们能够删掉所有2的倍数。
      .legend(slot="legend") 在我们列表里下一个数是#[strong.m-blue 3] – 又是个素数. 所有3的倍数都不是素数，因为它有因子3, 所以我们也能删掉它们。
      .legend(slot="legend") 下一个数4, 已经被删掉了，所以我们继续下个数#[strong.m-green 5]: 它又是个素数, 同理我们删掉所有5的倍数。
      .legend.md(slot="legend") 下一个素数一定是[[7]], 因为6已经被删掉了. 再一次的，我们删掉它的倍数。
      .legend.md(slot="legend") 下一个素数是[[11]]. 但是请注意，它的所有倍数都是[[已被删掉|3的倍数]]。对于剩下的所有其它数也是一样的情形。因此所有这些剩下的数都必定是素数。

现在我们可以数数了，总共有[[25]]个素数小于100。

---
> id: primes3

### 有多少个素数？

::: column.grow
当然我们能够用埃氏素数筛选法找更大的数素。在100到200间有21个素数, 200到300间
有16个素数，在400到500间有17个素数，而且10000到10100间只有11个。

素数看起来在不断的分散了，但是它们会终止吗？
存在一个 _最大_ 或 _最后_ 的素数吗?

古希腊数学家[亚历山大的欧几里德](bio:euclid) 第一个证明了存在无穷多个素数的，
通过下面的论证:
::: column(width=220)

    x-img(lightbox width=220 height=300 src="images/euclid.jpg")

:::

    ol.proof
      li 假设只有有限多个素数。
        .text-center #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P]
      li 让我们把它们全部相乘，得到一个非常大的数，我们把它称为#[em N].
        .text-center #[em.number-ball N] = #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P]
      li 现在我们思考下#[em N] + 1. 任何整除#[em N]的素数都不能整除#[em N] + 1. 而且因为所有整除#[em N]的素数都已经被找到了, 它们中也不存在能够整除#[em N] + 1的.
        .text-center #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[.number-ball.blue P] #[span.divides] #[em.number-ball N]
        .text-center #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[.number-ball.blue.cross P] #[span.divides] #[em.number-ball N] + 1
      li.md 根据[算术基本定理](gloss:fta)我们知道#[em N] + 1必定有个质因数#[em P’], 它不是#[em N] + 1自身，也不是其它新的能够整除#[em N] + 1的素数。
        .text-center #[em.number-ball.green P’] #[span.divides] #[em.number-ball N] + 1
      li 在这两种情况下，我们找到了一个新的素数它却不在我们的原始列表中，但我们又假设了所有素数都在这个列表中。
      li 显然出了什么问题！但是从步骤#[span.proof-step 2]–#[span.proof-step 4]都是绝对有效的，唯一的可能性是我们在步骤#[span.proof-step 1]中的初始假设是错误的。这意味着一定有无穷多个的素数。

---
> id: primes4

欧几里得的解释是历史上第一个正式数学__证明__的例子 — 表明一个陈述一定是正确的
逻辑论证。这个例子通常被称为__反证法__：我们从一个假设开始，推断出一些不可能的事情，从而知道我们的假设一定是错误的。

---
> id: prime-test
> goals: calculator
> section: distribution-of-primes

## 素数的分布

检测素数的最简单方法是，尝试用所有比它小的数去整除它。计算机能非常快速而有效的做这个
工作。即使对于有着数百位的__非常__大的数，也存在许多高效的算法。甚至其中一些
算法是利用概率来__近乎确定__的测定一个数是否为素数。

这是一个可以让你检查任何数字是否是素数计算器:

    .calculator
      h3 素数检测程序
      input(type="number" min="2")
      p.result.var ${result}

---
> id: prime-test-1

::: column.grow

纵观历史, 人们试图不断的找到越来越大的素数。在1460年，已知的最大素数是13,1071。
在1772年, [莱昂纳多·欧拉](bio:euler)展示了2,147,483,647也是素数。

随着20世纪计算机的到来，计算大素数变得容易多了。目前我们知道的最大素数是在
2018年12月发现的，而且它有24,862,048位数。你需要8000张纸才能把它完整打印出来！

::: column(width=300)

    img(src="images/network.jpg" width=300 height=200)

{.caption}GIMPS（_伟大的互联网梅森素数研究_）是一个协作项目，志愿者可以使用
免费软件寻找数素。

:::

---
> id: prime-generator
> goals: calculator

计算求解这些大素数也许看来像在浪费时间，但是在这堂课程后面你将了解到各种实际
应用程序，其中的计算机必须使用大素数。

这里可以按照指定的位数生成你自己的大素数：

    .calculator
      h3 素数生成器
      p.md 位数: ${d}{d|6|2,16,1}
      p(style="margin: 10px 0"): button.btn.btn-white 生成
      p.result.var ${result}

---
> id: ulam

### 乌拉姆螺旋

波兰数学家[斯坦利斯·乌拉姆](bio:ulam)在1963年的一个_又长又无聊_的会议上涂鸦时，
想到了个很酷的方法来展示大素数的分布.

    .number-grid.ulam-grid
      for x in [37, 36, 35, 34, 33, 32, 31]
        .number-cell(data-display="visibility")= x
      for x in [38, 17, 16, 15, 14, 13, 30]
        .number-cell(data-display="visibility")= x
      for x in [39, 18,  5,  4,  3, 12, 29]
        .number-cell(data-display="visibility")= x
      for x in [40, 19,  6,  1,  2, 11, 28]
        .number-cell(data-display="visibility")= x
      for x in [41, 20,  7,  8,  9, 10, 27]
        .number-cell(data-display="visibility")= x
      for x in [42, 21, 22, 23, 24, 25, 26]
        .number-cell(data-display="visibility")= x
      for x in [43, 44, 45, 46, 47, 48, 49]
        .number-cell(data-display="visibility")= x

我们把所有数字写在一个矩形格子中，从中间以1开始，然后向外螺旋展开。然后我们
加亮突出显示所有的素数。

---
> id: ulam1

到目前为止，乌拉姆螺旋线看起来并不特别令人兴奋。但如果我们缩小，有趣的模式就
会出现。这是高达160,000时素数的分布样子:

    figure: img(src="images/ulam.png" width=399 height=399)

::: column.grow
正如人们所期望的那样，某些对角线似乎比其他对角线更受素数欢迎，而不是随机出现。
这创造了一个奇怪的“格子”图案。

_{.lgrey}结果表明，这些对角线都对应于某些二次方程，这些方程似乎比平均数生成
素数的频率更高。然而，尚不清楚为什么会是这样..._
::: column(width=200)

    x-img(lightbox credit="© Scientific American" width=200 height=272 src="images/magazine.jpg")

{.caption} 1964年3月版《科学美国人》的封面
:::

---
> id: goldbach1
> goals: calculator

### 哥德巴赫猜想

在1742年, 德国数学家[克里斯蒂安·哥德巴赫](bio:goldbach) 遇到一个奇怪的发现:
他注意到所有的偶数(2除外)都可以被写成两个素数的和。例如：8 = 5 + 3 和 24 = 13 + 11.
这是非常令人惊讶的，因为素数是用乘法和因子定义的，不应该与加法有太多关系。

    .calculator
      h3 哥德巴赫计算器
      p 任选一个偶数，算算它#[br]如何被写成两个素数的和.
      input(type="number", min=4, step=2)
      p.result.var ${result}

哥德巴赫在给著名数学家[欧拉](bio:euler)的一封信中写到了他的观察结果，但两位
数学家他们都无法证明这一点。它被称为__哥德巴赫猜想__。

计算机已经检查了哥德巴赫猜想对每一个最大可达4×10<sup>18</sup>(这是一个4后面18个
零)的偶数都有效，但数学家们仍然没有找到它对_所有_偶数都有效的证明。这是一个很大
的区别，因为有无限多的整数，所以我们不可能检查所有的整数。

其明显的简单性使哥德巴赫猜想成为数学中最著名的未解决问题之一。

---
> id: twin-primes

### 孪生素数

我们已经清楚素数随着整数变大而分散得越来越开。但它们总是看起来像完全随机的，偶
尔我们还会发现两个素数紧挨着，就像一个整体：它们被称为__孪生素数__。

    p.text-center
      span.twin
        span.number-ball 3
        span.number-ball 5
      | ,
      span.twin
        span.number-ball.blue 11
        span.number-ball.blue 13
      | ,
      span.twin
        span.number-ball.green 41
        span.number-ball.green 43
      | ,
      span.twin
        span.number-ball.yellow 101
        span.number-ball.yellow 103
      | ,
      span.twin
        span.number-ball 2027
        span.number-ball 2029
      | ,
      span.twin
        span.number-ball.blue 108,377
        span.number-ball.blue 108,379
      | ,
      span.twin
        span.number-ball.green 1,523,651
        span.number-ball.green 1,523,653

已知最大的一对孪生素数有惊人的58711位！但是有无限多的孪生素数吗，就像有无限多的
素数一样？没有人知道答案 -- __孪生素数猜想__是围绕着素数的许多未解决问题中的另一个。

---
> id: riemann
> goals: zoom
> title: 素数的分布

### 黎曼猜想

数学家们花费了许多个世纪来探索素数的模式和分布。它们看起来完全是随机的——有时连
续的素数之间有巨大的间隙，而有时我们又会发现紧挨着的[孪生素数](gloss:twin-primes)。

当德国数学家[卡尔·弗里德里希·高斯](bio:gauss)15岁的时候，他有了一个开创性的新
想法：他把素数个数计算到某一点，并将结果显示在图表中：

    figure(style="max-width:680px; position:relative;")
      svg(width=680 height=300 viewBox="0 0 680 300")
        line.axis(x1=0 y1=280 x2=680 y2=280)
        g.chart
          path.pi(fill="none" stroke="#0f82f2")
          path.log(fill="none" stroke="#cd0e66")
          g.small-primes
        g.numbers
      .zoom-icon: svg(viewBox="0 0 32 32" class="icon" width=32 height=32)
        use(xlink:href="/icons.svg#search")

沿x轴可以看到所有整数。当有素数时，_{.m-blue}素数计数_增加1。当我们[缩小](->#riemann_.zoom-icon)图时，蓝线变得非常平滑。

{.reveal(when="zoom")}高斯注意到这个函数的形状看起来和函数<mfrac class="m-red"><mi>x</mi><mrow>log(<mi>x</mi>)</mrow></mfrac>非常相似. 他预言这两个函数总是“近似相似”，
这在1896年得到了证明。

---
> id: riemann1
> title: 黎曼猜想

然而，正如您在上面看到的，在实际素数和高斯近似值之间仍然有一个很大的误差。
1859年，数学家[伯恩哈德·黎曼](bio:riemann)发现了一种看起来更好的近似方法，
但他无法证明这种方法总是有效的。他的想法被称为__黎曼猜想__。

数以百计的数学家试图证明黎曼猜想，但都没有成功。它通常被认为是数学中最困难和
最重要的未解决问题之一。2000年，克莱数学研究所称它为六个[__千年奖难题__](gloss:millennium-prize)之一, 并承诺给任何解决这个问题的数学家100万美元奖励。

---
> id: race
> goals: race
> section: lcm

## 最小公倍数

两个跑步者正在环形跑道上训练。__{.m-blue}第一个跑步者__跑一圈需要__{.m-blue}60__
秒，__{.m-blue}第二个跑步者__跑一圈需要__{.m-blue}40__秒。如果两人同时从起跑线
上出发，他们什么时候会在起跑线上再次相遇？

    figure: include svg/race.svg

---
> id: race1

这个问题实际上不是关于赛道的几何学，也不是关于速度和快慢的，而是关于倍数和整
除的。

第一个选手在60秒、120秒、180秒、240秒等后穿过起跑线，这些只是__60__的[[倍数|因子]]。
第二个选手在40秒、80秒、120秒、160秒等后穿过起跑线。两位选手同时第一次回到起
跑线上是在[[120]]秒之后。

{.reveal(when="blank-0 blank-1")}我们找到的是个同时是__{.m-green}40__ 和__{.m-blue}60__
倍数的最小数，这也被称为__最小公倍数__或缩写为__lcm__.

---
> id: race2

求任意两个数__{.m-yellow}a__和__{.m-blue}b__最小公倍数，如果__{.m-yellow}a__
整除 __{.m-blue}b__, 那么很重要的一点是要认识到__{.m-blue}b__必须具有__{.m-yellow}a__
的所有素数因子(外加其它的):

    table.table-tiny
      tr
        td.text-right: .number-ball.yellow 12
        td: .divides
        td.text-left: .number-ball.blue 60
      tr
        td
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 3
        td
        td
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 3
          | &nbsp;×&nbsp;
          .number-ball.l-blue 5

这很容易验证：如果一个素数因子整除__{.m-yellow}a__，同时__{.m-yellow}a__整除
__{.m-blue}b__，那么该素数因子一定__也__整除__{.m-green}b__。

---
> id: race3

为了找到__{.m-green}40__和__{.m-blue}60__的最小公倍数, 我们首先数需要找到两者
的共有[素数因子](gloss:factorisation):

    table.table-tiny
      tr
        td: .number-ball.blue 40
        td: | =
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 2
        td(colspan=3): | ×
        td: .number-ball.l-blue 5
      tr
        td: .number-ball.green 60
        td: | =
        td: .number-ball.l-green 2
        td: | ×
        td: .number-ball.l-green 2
        td(colspan=3): | ×
        td: .number-ball.l-green 3
        td: | ×
        td: .number-ball.l-green 5

假设__{.m-red}X__是__{.m-green}40__和__{.m-blue}60__的最小公倍数。那么
__{.m-green}40__整除__{.m-red}X__，所以_{span.number-ball.small.l-blue}2_，
_{span.number-ball.small.l-blue}2_，_{span.number-ball.small.l-blue}2_和
_{span.number-ball.small.l-blue}5_必定是__{.m-red}X__的素数因子。同理，
__{m.blue}60__整除__{.m-red}X__，所以_{span.number-ball.small.l-green}2_,
_{span.number-ball.small.l-green}2_,和_{span.number-ball.small.l-green}3_
和_{span.number-ball.small.l-green}5_必定是__{.m-red}X__的素数因子。

---
> id: race4

要找到__{.m-red}X__，我们只需将__{.m-green}40__和__{.m-blue}60__的所有素数因子
组合在一起，但是两边出现相同因子时我们只需要一份：

{.text-center} __{.m-red}X__ &nbsp;=&nbsp; _{span.number-ball.l-blue-green}2_ ×
_{span.number-ball.l-blue-green}2_ × _{span.number-ball.l-blue}2_ ×
_{span.number-ball.l-green}3_ × _{span.number-ball.l-blue-green}5_

我们从这得到__{.m-red}X__ = 120，就像我们看到的上图。注意，如果相同的素数因子出
现多次，如上面的2，我们需要保持两个次数中最大的那个次数(__{.m-green}40__中的
3次比__{.m-blue}60__中的2次多）。

---
> id: race5

现在我们有了一个简单的方法来查找两个数字的最小公倍数：

    ol.proof
      li 找出每个数的素数因子。
      li 将所有数素因子组合起来，但重复出现的只算一次。

我们可以使用相同的方法找到三个或更多数的最小公倍数，如__{.m-blue}12__、
__{.m-green}30__和__{.m-yellow}45__：

    table.table-tiny
      tr
        td: .number-ball.blue 12
        td: | =
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 3
      tr
        td: .number-ball.green 30
        td: | =
        td: .number-ball.l-green 2
        td(colspan=3): | ×
        td: .number-ball.l-green 3
        td(colspan=3): | ×
        td: .number-ball.l-green 5
      tr
        td: .number-ball.yellow 45
        td: | =
        td(colspan=4)
        td: .number-ball.l-yellow 3
        td: | ×
        td: .number-ball.l-yellow 3
        td: | ×
        td: .number-ball.l-yellow 5

因此__{.m-blue}12__, __{.m-green}30__ 和 __{.m-yellow}45__的最小公倍数是
2 × [[2]] × 3 × 3 × [[5]] = 180.

---
> id: race6

一个特例是质数：两个不同质数的最小公倍数是它们简单的求[[积|和|差]], 因为它们没
有任何共同的数素因子会被“消去”。

---
> id: cicadas
> goals: bound-low bound-high

### 蝉

::: column.grow
北美是各种各样的蝉群的家园。这些蝉有一种奇特的特性，即它们每隔多年的夏季才出
来繁殖——剩余时间它们在地下度过。

例如，佛罗里达州和密西西比州的蝉每13年出现一次。伊利诺斯州和爱荷华州的蝉只每
17年出现一次。但是没有一种蝉有12年、14年、15年或16年的出现周期。
::: column(width=360)

    x-img(width=360 height=240 src="images/cicadas.jpg")

:::

13和17都是质数 - 这是有充分理由的。想象一下森林里有捕食者杀死了蝉。这些捕食者
也会定期出现，比如每6年出现一次。

现在想象下蝉的出现间隔是每${n}{n|13|4,20,1}年(${isPrime(n) ? '素数' : '非素数'})。
这两种动物每${lcm(n,6)}年会相遇一次，这就是6和${n}的[[最小公倍数|最大公约数|乘积]]

    figure
      include svg/cicadas.svg
      p.caption 不同的蝉出现周期长度, 决定了蝉和捕食者相遇的时间。

---
> id: cicadas1

如果蝉的间隔周期是像13和17这样的质数，这个数字看起来就要大得多。这是因为素数
不与6共有任何因子，所以在计算最小公倍数时，我们不会消去任何重复因子。

当然，蝉不知道素数是什么，但在数百万年的时间里，进化证明了素数周期是最安全的。
捕食者似乎已经随着时间的推移而灭绝，但素数周期仍然存在。

---
> id: gcd
> section: gcf

## 最大公约数

一位建筑师正在为一个18米乘30米的大庭院规划地板，她希望它被正方形瓷砖覆盖，长宽
两个方向没有任何间隙和重叠。她能用正方形的最大尺寸是多少？

    figure
      include svg/floorplan.svg
      p.text-center.md 瓷砖尺寸:${x}{x|3|1,18,1}m.#[br]#[span.result.var]

---
> id: gcd1

就像之前一样，这个问题不是关于几何的 - 而是关于能否整除的。瓷砖的两个边长必
须同时整除18和30，那么最大可能的数是[[6]]。这被称为18和30的__最大公约数__或
简写为gcd。

---
> id: gcd2

我们可以再次使用[素数因子](gloss:factorisation)来计算两个数的最大公约数。记住，
一个数的除数必定包含有这个数的部分素数因子。

    table.table-tiny
      tr
        td: .number-ball.blue 18
        td: | =
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 3
        td: | ×
        td: .number-ball.l-blue 3
      tr
        td: .number-ball.green 30
        td: | =
        td: .number-ball.l-green 2
        td: | ×
        td: .number-ball.l-green 3
        td(colspan=3): | ×
        td: .number-ball.l-green 5

假设__{.m-red}X__是__{.m-green}18__和__{.m-blue}30__的最大公约数.那么__{.m-red}X__
整除__{.m-green}18__, 因此__{.m-red}X__的素数因子也在_{span.number-ball.small.l-blue}2_,
_{span.number-ball.small.l-blue}2_和_{span.number-ball.small.l-blue}3_中。同理,
__{.m-red}X__ 整除__{.m-blue}30__, 因此__{.m-red}X__的素数因子也在
_{span.number-ball.small.l-green}2_, _{span.number-ball.small.l-green}3_ 和
_{span.number-ball.small.l-green}5_中。

---
> id: gcd3

要找到__{.m-red}X__，我们只需要将所有在__{.m-green}18__和__{.m-blue}30__中
[[都|其一]]出现的素数相乘：

{.text-center} __{.m-red}X__ &nbsp;=&nbsp; _{span.number-ball.l-blue-green}2_ ×
_{span.number-ball.l-blue-green}3_ &nbsp;=&nbsp; 6.

---
> id: gcd4

现在我们有了一个简单的方法来找两个数的最大公约数：

    ol.proof
      li 找到每个数的素数因子。
      li 将两个数里都出现的素数因子相乘。

素数又一次是特殊的：两个不同质数的最大公约数总是[[1]], 因为它们不共有任何素数因子。

---
> id: crypto

### 密码学

::: column.grow
素数在现代最重要的应用之一是在一个称为__密码学__的数学领域。数千年来，人们一
直试图隐藏信息，以便只有预期的接收者才能读懂它们 —— 这被称为加密。每个人都在
使用加密学，从将军们在战争中交换秘密命令到个人电子邮件或网上银行信息。

人们总是试图想出更好、更安全的加密方法，但一段时间后，他们都被更先进的算法打
破了。在第二次世界大战中，德国军队使用了一种称为“谜”的设备：由键盘、旋转的轮
子和插头组成的复杂机器。它使用了1.58万亿亿(即158后面是18个零!)个可能性中的一
个来加密消息，人们普遍认为密码是不可破解的。但由数学家阿兰·图灵领导的英国特勤
局，制造了首批成功破译密码的计算机。
::: column(width=240)

    x-img(lightbox credit="Magnus Manske, via Wikipedia" width=240 height=344 src="images/enigma.jpg")
    p.caption 德国四转子加密机

:::

今天的计算机更先进，每秒能尝试数百万种可能性。为了开发更好的加密算法，你必须
找到一个对强大的计算机来说也很困难的数学运算。计算机在加法、减法、乘法和除法
方面速度惊人。然而，事实证明，计算机将大整数分解成素数的速度非常慢…

---
> id: crypto1

{.todo} 敬请期待 – Alice和Bob的RSA示例

这种加密算法被称为__非对称加密算法__，它的三位发明者: Ron Rivest，Adi Shamir和
Leonard Adleman于1977年发表了这一算法，三人名字的缩写__RSA__被用来作为该算法
的名字。事实证明，自1973年以来，英国特勤局就掌握了一种非常相似的方法，但一直保
密到很晚。

今天，世界各地的计算机交在换数据中都使用了素数。每当你发送电子邮件或访问一个
安全的网站，你的手机或笔记本电脑就会默默地生成许多大素数，并与其他计算机交换
公共密钥。
