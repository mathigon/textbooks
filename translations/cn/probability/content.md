# 概率

## 引言

> id: intro
> section: introduction
> color: "#CD0E66"
> level: Intermediate
> next: statistics

概率与可能性无处不在，从天气预报到游戏，从保险到选举投票。然而，在数学史上，概率实际上是一个非常新的概念，虽然2500多年前古希腊数学家就开始研究数字和几何，但概率的概念即是在17、18世纪才出现的。

::: column.grow
据传说，两位最伟大的数学家，[布莱兹.帕斯卡](bio:pascal)和[皮埃尔.费马](bio:fermat)会定期在巴黎的一家小咖啡馆见面。

为了把注意力从他们正在讨论的复杂数学理论上转移开，他们经常玩一个简单的游戏：重复抛硬币 -- 每次 _正面_ 向上帕斯卡就得一分，每次 _反面_ 向上费马就得一分，抛三次，谁的得分少谁就值钱。
::: column(width=360)

    img(src="images/paris.jpg" width=360 height=254)

:::

有一天，他们在抛完第一次硬币后不得不结束，费马有争事要离开，后来，他们又想知道该由谁来买单，或者是否有一个公平的分摊方式。第一次硬币正面 _向上_ （帕斯卡得一分），所以也许费马应该来全部支付，然而，如果 [[接下来抛的两次|接下来抛的一次]] 是 _反面_ ，费马还是有可能会赢。

---
> id: intro-1

帕斯卡和费马决定将继续游戏所有的可能性全部写下来：

::: column.grow(width=120)

    img(src="images/coins-1.png" width=136 height=48 alt="HHH")

{.caption} 帕斯卡赢
::: column.grow(width=120)

    img(src="images/coins-2.png" width=136 height=48 alt="HHT")

{.caption} 帕斯卡赢
::: column.grow(width=120)

    img(src="images/coins-3.png" width=136 height=48 alt="HTH")

{.caption} 帕斯卡赢
::: column.grow(width=120)

    img(src="images/coins-4.png" width=136 height=48 alt="HTT")

{.caption} 费马赢
:::

这四种结果的可能性都是相等的，这其中有[[三种|四种|两种]]情况帕斯卡会赢。_{span.reveal(when="blank-0")}因此他们决定费马应该支付帐单的 3/4，帕斯卡应该支付 1/4。_

---
> id: intro-2

帕斯卡和费马发现了概率的的第一个重要公式：如果一个实验有多种可能的结果，而且这些结果的可能性都是相等的，那么

{.text-center} 事件的概率 =
`"事件可能发生的次数"/"可能结果的总数"`.

在我们的例子，帕斯卡赢得游戏的概率是 `3/4 = 0.75`，费马赢得游戏的概率是 `1/4 = 0.25`。

---

### 什么是概率

> id: prob-line

__概率__ 是介绍于 0 和 1 之间的一个数字，用来描述 __特定事件__ 发生的可能性。概率为 0 意味着某件事 _不可能_ 发生；概率为 1 意味某件事 _必然_ 会发生。

例如，你遇见一条真正的龙是 [[不可能的|必然的]]，太阳明天将会升起是 [[必然的|不可能的]]。硬币落地时正面朝上的概率刚好是 [[0.5|相同]]。

{.reveal(when="blank-0 blank-1 blank-2")} 掷一个骰子刚掷出 6 的概率或者从一幅牌中抽出特定花色的概率 [[小于|大于]] 0.5 -- 这意味着不太可能。一支优秀球队赢得一场比赛的概率或者一列火车准点到达的概率 [[大于|小于]] 0.5 -- 这意味着很大可能。

    .p-line.clearfix
      img.reveal(src="images/line-1.png" width=140 height=140 style="width: 18.42%" when="blank-0" animation="pop" alt="dragon")
      img.reveal(src="images/line-2.png" width=140 height=140 style="width: 10.53%" when="blank-3" animation="pop" alt="dice")
      img.reveal(src="images/line-3.png" width=140 height=140 style="width: 15.79%" when="blank-3" animation="pop" delay="300" alt="cards")
      img.reveal(src="images/line-4.png" width=140 height=140 style="width: 11.84%" when="blank-2" animation="pop" alt="coins")
      img.reveal(src="images/line-5.png" width=140 height=140 style="width: 11.84%" when="blank-4" animation="pop" alt="football")
      img.reveal(src="images/line-6.png" width=140 height=140 style="width: 17.11%" when="blank-4" animation="pop" delay="300" alt="train")
      img.reveal(src="images/line-7.png" width=140 height=140 style="width: 14.47%" when="blank-1" animation="pop" alt="sun")
      img(src="images/line-8.png" width=760 height=40 style="width: 100%")

---
> id: prob-line-1

现在将下列事件按正确顺序拖动，按可能到不可能依次排序：

    x-sortable
      .item.md(data-index="3") 掷一个骰子 :game-die: ，刚好得到 6 点
      .item.md(data-index="5") 企鹅 :penguin: 住在北极
      .item.md(data-index="1") 11月将要下雨 :cloud-with-rain:
      .item.md(data-index="0") 今天在中国将诞生一个婴儿 :baby-bottle:
      .item.md(data-index="4") 你买了一张彩票，中了头奖 :party-popper:.
      .item.md(data-index="2") 一个新生儿是女孩 :girl:.

我们在日常生活中经常会使用到概率和可能性，通常会不加思考。明天下雨的有多大可能？错过公共汽车的可能性？赢得一场比赛的概率是多少？

---
> id: prob-line-2

抛一枚（均匀的）硬币有两种结果，_正面_ 和 _反面_， 它们的可能性相等。根据上面的公式， _正面_ 朝上的概率一定为 `1/2` = 0.5, or 50%。

    // TODO However, the equation is not very helpful if the different outcomes
    // are not all equally likely, or if there are infinitely many possible outcomes.

请注意，概率值 _介于_ 0 和 1 之间，即使只有一种实际结果发生。概率与实际结果几乎没有关系：如果我们掷一枚硬币多次，我们知道[[大约一半|刚好一半|全部|没有]]的结果是下面朝上，但我们无法准确预测哪一次是正面朝上的。

即使概率很小的事件（比如中彩票）_仍然可能发生_ -- 而且它们确实 _一直在发生_ （只是发生在参与者中极少数人身上）。

---
> id: prob-line-3

概率也取决于我们每个人对事件的熟悉程度，例如，你可能会估计今天下雨的概率是 70%，一个有更详细天气数据的气象学家可能会说下雨的概率是 64.2%。

或者假设我抛一枚硬币，然后用手盖住 -- 反面朝上概率为 50%，现在我偷看了一下结果，但不告诉你。对我来说知道了确定的结果，但对你来说，概率 [[仍然是 50%|为100%|不是 50%]]。

---
> id: prob-line-4

有多种不同的方式来思考概率，但在实践中，它们得到的结果都一样：

::: column(width=230 parent="padded-thin")

    img(src="images/classical.png" width=240 height=75 alt="classical probability")

{.text-center} The __classical__ probability of landing heads is the proportion
of _possible outcomes_ that are heads.
正面朝上的 __古典__ 概率是正面朝上的可能结果的比例
::: column(width=230)

    img(src="images/frequentist.png" width=240 height=75 alt="frequentist probability")

{.text-center} The __frequentist__ probability is the proportion of heads we get
if we toss the coin _many times_.
__频率概率__ 是如果我们抛 _多次_ 硬币得到正面的比例
::: column(width=230)

    img(src="images/subjectivist.png" width=240 height=75 alt="subjectivist probability")

{.text-center} The __subjectivist__ probability tells us how strongly we
_believe_ that the coin will land heads.
__主观概率__ 是我们有多么 _坚信_ 正面会朝上
:::

    // TODO Notice that subjectivist probabilities may be different for
    // different people – often depending on how much they know.

Remember that while probabilities are great for _estimating and forecasting_, we
can never tell what _actually_ will happen.

---

### 预测未来

> id: future

如果掷一个骰子，结果是1到6之间的一个数字，所有的结果都是等可能的。如果我们一次掷两个骰子，把它们的结果加起来，我们可以得到从[[2]] 到 [[12]]的数字。然而，在这种情况下，它们并不是等可能的。

    include mixins
    p.md 有些结果只能发生一次（得到 #[span.dice.outline 12] 你必须掷出#[span.dice #[+dice(6)]] + #[span.dice #[+dice(6)]] ），而有些结果可能发生多次（得到 #[span.dice.outline 5] 你可以掷出 #[span.dice #[+dice(1)]] + #[span.dice #[+dice(4)]] 或 #[span.dice #[+dice(2)]] + #[span.dice #[+dice(3)]] ）。

---
> id: future-1

下面的列表显示了所有可能的结果：

    include mixins
    table.dice-table
      tr
        td #[.dice.outline 2]
        td #[.dice.outline 3]
        td #[.dice.outline 4]
        td #[.dice.outline 5]
        td #[.dice.outline 6]
        td #[.dice.outline 7]
        td #[.dice.outline 8]
        td #[.dice.outline 9]
        td #[.dice.outline 10]
        td #[.dice.outline 11]
        td #[.dice.outline 12]
      tr
        td #[.dice #[+dice(1)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(6)]]
      tr
        td
        td #[.dice #[+dice(2)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(5)]]
        td
      tr
        td(colspan=2)
        td #[.dice #[+dice(3)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(4)]]
        td(colspan=2)
      tr
        td(colspan=3)
        td #[.dice #[+dice(4)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(3)]]
        td(colspan=3)
      tr
        td(colspan=4)
        td #[.dice #[+dice(5)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(2)]]
        td(colspan=4)
      tr
        td(colspan=5)
        td #[.dice #[+dice(6)]] #[.dice #[+dice(1)]]
        td(colspan=5)

掷两个骰子，最有可能得到的结果是 _{span.dice.outline}7_ ，有 [[6]] 种可能的结果加起来是 7，可能结果的总数是 [[36]]，_{span.reveal(when="blank-0 blank-1")} 因为得到 7 的概率是 `6/36 = 0.1666` 。_

---
> id: future-2

可能性最低的结果是 _{span.dice.outline}2_ 和 _{span.dice.outline}12_ ，它们各自的概率均为 `1/36 = 0.0277`。

要预测一次抛硬币或掷骰子的结果是不可能的，然后，运用概率我们可以非常准确地预测 _多次_ 的结果。

如果我们掷 30 次骰子，我们知道大约会有 `1/6 × 30 = 5` 次得到 6，如果我们掷 300 次，大约会有 `1/6 × 300 = 50` 次得到 6，随着我们不断地重复掷骰子，预测的结果会越来越准。

---
> id: dice-simulation
> goals: roll
> title: 掷骰子

在这个动画中，你可以一次掷出多个“虚拟”骰子，查看一下结果与概率预测的比较：

::: .box.f-red

#### Rolling Dice

    .probTable.var(:html="probTable(d)")

我们一次掷出  ${d}{d|2|1,6,1} 个骰子，记录它们结果的 _{span.dice(style="width: auto; padding: 0 4px;")} 总和_ ，__{.m-green} 绿线__ 代表通过概率理论算出的每种可能结果的概率，__{.m-blue} 蓝条__ 显示了在计算生成的实验中每个结果实际发生的频率。

    p.btn-row.no-voice
      button.btn 掷一次
      button.btn 掷 100 次
      button.btn 掷 1000 次

:::

{.reveal(when="roll")} 注意，随着我们掷出越来越多的骰子，观察到的频率与通过概率预测的频率越来越接近。这个原则适用于所有的概率实验，被称为 __大数定律__ 。

{.reveal(when="roll")} 类似地，当我们增加一次掷出的骰子数量时，你还可以看到概率从一条直线（一个骰子）变为一个三角形（两个骰子），最后变为一条 "钟形"曲线，这就是所谓的 __中心极限定理__，钟形曲线被称为 __正态分布__ 。

---


## 概率树与维恩图

> section: trees
> sectionStatus: dev

{.todo} TODO

---

## 条件概率

> section: conditional
> sectionStatus: dev

TODO

---


## 蒙提霍尔问题（三门问题）

> id: monty-hall
> sectionBackground: dark gameshow
> goals: game
> section: monty-hall

欢迎来到这个星球最壮观的游戏秀！现在，你有一个千载难逢的机会赢得一辆漂亮的跑车，它就藏在这三扇门的其中一扇后面，而另外两扇后面只有山羊，决定选择一扇吧！

    .monty-hall.selectable
      .door-box: .door
      .door-box: .door
      .door-box: .door
      .floor

{.monty-reveal} 你确定选好了吗？你现在还可以改变主意选择另一扇 ...

    p.text-center.monty-reveal: button.btn.sure 我确定了!

{.monty-reveal} 不错的选择，现在让我来帮你更轻松一点去选择，我将要打开一扇后面有山羊的门，这样就只剩下两扇门让你选择了，你是想坚持你最初的选择还是交换一下？

    p.text-center.monty-reveal
      button.btn.swap 我想坚持选择不变!
      button.btn.swap 我想交换我的选择!

{.monty-reveal} 好吧，来看看你做得怎么样...

    p.text-center.monty-reveal: button.btn.show 将门打开...

{.monty-reveal} _{span.monty-option} 恭喜你，看来你做出了正确的选择，你赢得了一个新的漂亮跑车！_
_{span.monty-option.hidden} 抱歉 - 看来这次你只是赢得一只山羊，不过别担心，你还可以再玩一次！_

    p.text-center.monty-reveal: button.btn.reset 再玩一次

---
> id: monty-hall-1

如果你多次玩这个游戏，你会发现，在第一扇门被打开后，如果你选择 [[交换|不交换]] ，你更有可能赢得游戏。
_{.reveal(when="blank-0")}而不是坚持你最初的选择。_

{.reveal(when="blank-0")} 但是，这怎么可能呢？跑车在剩下的两扇门里也应该是同样的可能性呀

---
> id: monty-hall-2

解释有点微妙，当你选择最初的门时，正确的概率是 `1/3`，错误的概率是 `2/3`。

    p.text-center: include svg/monty-1.svg

---
> id: monty-hall-3

在游戏主持人打开另一扇门后，出错的概率 _仍然_ 是 `2/3`，只不过现在所有的概率都在一扇门上，这意味着换门会让你赢的机率 [[翻倍|翻三倍|变一半]] 。

    p.text-center: include svg/monty-2.svg

---
> id: monty-hall-4

即使看来起不是很直观，我们也可以证明它是正确的 -- 简单的列出所有不同的可能性：

    figure: img(src="images/monty.png" width=694 height=468)


在这9种可能性中，有 [[6]] 种需要换门才能赢，这就得到了 `6/9 = 2/3` 赢的机会。

---


## 生日问题

> section: birthdays
> sectionStatus: dev

TODO

---


## 真正的随机性

> id: quantum
> section: randomness

::: column.grow
这门课的大部分内容都是基于这样一个事实：硬币、骰子或轮盘赌都是完全随机的。然后，事实并非如此 -- 我们知道爱德华.索普成功地预测了轮盘赌的结果。

假设我们掷硬币：硬币正面朝上的概率是 0.5，如果在硬币离开手之前就知道它朝哪个方向，我们也许就能做出稍微好一点预测，比如 9.58 或 0.41，如果我们还知道硬币的重量和大小，以及它离开手时的角度、位置和速度，我们就可以利用重力、摩擦力和空气阻力等物理定律来模拟硬币的运动并预测结果，最后，如果我们还知道硬币中每个原子以及它周围所有空气分子的确切位置，我们就可以创建一个计算机模拟来精确的预测会发生什么。
::: column(width=240)

    x-img(src="images/coins.jpg" alt="Flipping a Coin" width=240 height=343)

:::

---
> id: quantum1

可能有人会说，掷硬盘并不是完全随机的，而是 _混乱的_，这意味着潜在的物理原理如些复杂，即使初始条件（速度、角度 ）有微小的改变，也会对最终结果产生巨大的影响。我们可以在游戏和赌博中使用硬币，并不是因为它们是随机的，而是因为预测结果非常困难（实际上是不可能的）。

同样的原理也适用于生活中的许多其它“随机”事件，包括骰子和轮盘赌，它们并不是真正的 _随机_  ，只是我们没有足够精确的数学计算工具来对结果进行预测。

---
> id: radioactive
> goals: decay

但 _真正的随机_ 确实存在于物质世界中，一块放射性物质由数十亿个原子组成，随着时间的推移会衰变：它们分裂出更小的原子，同时释放出危险的辐射。

::: column.grow

物理学家可以计算出一个特定原子在一定时间内衰变的概率，但即使你知道每个原子的确切性质，也不可能计算出下一个衰变的是哪个。

The overall rate of decay, on the other hand, is so steady that it can be used
to calculate the age of fossils that died thousands of years ago on Earth. This
process is called __Carbon dating__.
另一方面，总体衰变速度是很稳定的，因此你可以用来计算出地球上死于数千年前的化石的年龄，这个过程被称为 _碳年代测定法_ 。

::: column(width=300)

    p: svg.radioactive(width=300 height=200 viewBox="0 0 300 200")
    p.text-center.btn-row.no-voice: button.btn 启动衰变

:::

    // TODO Possible probability distributions of the position of an electron in
    // a hydrogen atom. Lighter areas represent more likely locations of the electron.

---
> id: radioactive-1

[放射性衰变](gloss:radioactive) 是由不稳定原子分裂并释放能量的物理过程，这可以由量子力学来解释。上世纪末，像 [马克斯.普朗克](bio:planck) and [保罗.狄拉克](bio:dirac) 这样的物理学家们，发现基本粒子有一个令人惊讶的特性：它们可以 _同一时间_ 出现在多个不同的地方，它们没有固定的位置，而是一个概率分布函数（又叫 _波函数_ ），这个函数告诉我们在特定位置找到它们的可能性有多大。

量子计算机就是运用这种难以置信的特性，传统计算机一次只能进行一次计算，而量子计算机可以利用亚原子粒子的这一特性在同一时间进行多次计算，这就大大提高了计算机的运算速度。

    figure: x-img(lightbox src="images/quantum.jpg" alt="Quantum Mechanics" width=760 height=390)

---
> id: radioactive-2

我们不能真正 _理解_ 或 _解释_ 量子力学 -- 只能接受它是由数学理论预测并由物理观测来证实的，这种奇特的量子效应只在有几个原子的微小尺度上被观察到过，目前还不清楚它们在日常生活中如何影响我们的，但这是自然界中惟一已知的具有 _真正随机性_ 的效应。
