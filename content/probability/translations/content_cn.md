# 概率

## 引言

    // SOURCES
    // http://onlineroulette.org.uk/stories/karl-pearson/
    // http://www.eprisner.de/MAT109/FermatPascal.html
    // http://mathforum.org/isaac/problems/prob1.html
    // https://en.wikipedia.org/wiki/Penney%27s_game
    // https://en.wikipedia.org/wiki/Edward_O._Thorp
    // http://edwardothorp.com/id26.html
    
    mixin dice(n)
      svg(width=20, height=20)
        if n==1 || n==3 || n==5
          circle(r=2, cx=10, cy=10)
        if n==2 || n==3 || n==4 || n==5
          circle(r=2, cx=5, cy=5)
        if n==4 || n == 5
          circle(r=2, cx=5, cy=15)
        if n==4 || n == 5
          circle(r=2, cx=15, cy=5)
        if n==2 || n==3 || n==4 || n == 5
          circle(r=2, cx=15, cy=15)
        if n == 6
          circle(r=2, cx=5, cy=4)
          circle(r=2, cx=5, cy=10)
          circle(r=2, cx=5, cy=16)
          circle(r=2, cx=15, cy=4)
          circle(r=2, cx=15, cy=10)
          circle(r=2, cx=15, cy=16)

> id: intro
> section: introduction

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
      .item.md(data-index="3") 掷一个骰子 :game_die: ，刚好得到 6 点
      .item.md(data-index="5") 企鹅 :penguin: 住在北极
      .item.md(data-index="1") 11月将要下雨 :rain_cloud: 
      .item.md(data-index="0") 今天在中国将诞生一个婴儿 :baby_bottle:
      .item.md(data-index="4") 你买了一张彩票，中了头奖 :tada:.
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

有多种不同的方式来思考概率，但在实践中，它们通常给出的结果都相同：

::: column(width=230 parent="padded-thin")

    img(src="images/classical.png" width=240 height=75 alt="classical probability")

{.text-center} The __classical__ probability of landing heads is the proportion
of _possible outcomes_ that are heads.
正面朝上的 __古典__ 概率是可能结果为正面的比例
::: column(width=230)

    img(src="images/frequentist.png" width=240 height=75 alt="frequentist probability")

{.text-center} The __frequentist__ probability is the proportion of heads we get
if we toss the coin _many times_.
__频率概率__ 是如果我们抛多次硬币得到正面的比例
::: column(width=230)

    img(src="images/subjectivist.png" width=240 height=75 alt="subjectivist probability")

{.text-center} The __subjectivist__ probability tells us how strongly we
_believe_ that the coin will land heads.
__主观概率__ 告诉我们，我们有多么 _坚信_ 正面会朝上
:::

    // TODO Notice that subjectivist probabilities may be different for
    // different people – often depending on how much they know.

Remember that while probabilities are great for _estimating and forecasting_, we
can never tell what _actually_ will happen.

---

### 预测未来

> id: future

如果掷一个骰子，结果是1到6之间的一个数字，所有的结果都是等可能的。如果我们一次掷两个骰子，把它们的结果加起来，我们可以得到从[[2]] 到 [[12]]的数字。然而，在这种情况下，它们并不是等可能的。

    p.md 有些结果只能发生一次（得到 #[span.dice.outline 12] 你必须掷出#[span.dice #[+dice(6)]] + #[span.dice #[+dice(6)]] ），而有些结果可能发生多次（得到 #[span.dice.outline 5] 你可以掷出 #[span.dice #[+dice(1)]] + #[span.dice #[+dice(4)]] 或 #[span.dice #[+dice(2)]] + #[span.dice #[+dice(3)]] ）。

---
> id: future-1

下面的列表显示了所有可能的结果：

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

Welcome to the most spectacular game show on the planet! You now have a
once-in-a-lifetime chance of winning a fantastic sports car which is hidden
behind one of these three doors. Unfortunately, there are only goats behind the
other two doors. Select one to make your choice!

    .monty-hall.selectable
      .door-box: .door
      .door-box: .door
      .door-box: .door
      .floor

{.monty-reveal} Are you sure about that? You can still change your mind and
select a different door…

    p.text-center.monty-reveal: button.btn.sure I’m sure!

{.monty-reveal} A great choice, but let me make life a little easier for you.
I’ll open one of the other doors with a goat, so that there are only two doors
left for you to pick from. Do you want to stick with your choice, or do you want
to swap?

    p.text-center.monty-reveal
      button.btn.swap I want to stay!
      button.btn.swap I want to swap!

{.monty-reveal} Ok – let’s see how you did…

    p.text-center.monty-reveal: button.btn.show Open the doors…

{.monty-reveal} _{span.monty-option}Looks like you made the right choice.
Congratulations, you just won a beautiful new sports car!_
_{span.monty-option.hidden} Sorry – it seems like this time you only won a
goat. But don’t worry, you can play again!_

    p.text-center.monty-reveal: button.btn.reset Replay game

---
> id: monty-hall-1

If you play this game many times, you’ll notice that you’re more likely to win
if you [[swap|don’t swap]] after the first door is opened,
_{.reveal(when="blank-0")}rather than sticking with your initial choice._

{.reveal(when="blank-0")} But how can this be – surely the car is equally likely
to be behind each of the two remaining doors?

---
> id: monty-hall-2

The explanation is very subtle. When you pick the initial door, the probability
of being correct is `1/3` and the probability of being wrong is `2/3`.

    p.text-center: include svg/monty-1.svg

---
> id: monty-hall-3

After the game master opens one of the other doors, the probability of being
wrong is _still_ `2/3`, except now all this probability is on just one door.
This means that swapping doors [[doubles|triples|halves]] your chance of winning.

    p.text-center: include svg/monty-2.svg

---
> id: monty-hall-4

Even if this doesn’t seem very intuitive, we can prove that it is correct –
simply by listing all different possibilities:

    figure: img(src="images/monty.png" width=694 height=468)

Out of the 9 possibilities [[6]] need you to switch doors, to win. This gives a
chance of `6/9 = 2/3` like before.

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
Most of this course relied on the fact that things like coins, or dice, or
roulette wheels are completely random. However, that is not really true – we
already learned that Edward Thorpe managed to predict the outcome of roulette.

Suppose we toss a coin: the chance of it landing heads is 0.5. If we knew which
way the coin was facing just before it left the hand, we might be able to make a
slightly better prediction, such as 0.58 or 0.41. If we also knew the weight and
size of the coin, and the angle, position and speed as it left the hand, we
could use the laws of physics – gravity, friction and air resistance – to model
the motion of the coin and to predict the outcome. Finally, if we knew the exact
position of every atom in the coin and of all the air molecules surrounding it,
we could create a computer simulation to accurately predict what will happen.
::: column(width=240)

    x-img(src="images/coins.jpg" alt="Flipping a Coin" width=240 height=343)

:::

---
> id: quantum1

One could argue that tossing a coin really isn’t random at all – it is
_chaotic_. That means that the underlying physical principles are so complex
that even tiny changes to the starting conditions (speed, angle) can have a
dramatic effect on the final outcome. We can use coins in games and gambling not
because they are random, but because it is so incredibly difficult (and for
practical purposes impossible) to predict the result.

The same principle applies to many other “random” events in life, including dice
and roulette wheels. They are not really _random_, we simply don’t have the
tools to do the mathematical calculations accurately enough to predict the
outcome.

---
> id: radioactive
> goals: decay

But _true randomness_ does exists – at the very foundations of matter. A block
of radioactive material consists of billions of atoms which decay over time:
they fall apart into smaller atoms while emitting dangerous radiation.

::: column.grow

Physicists can calculate the probability that a particular atom will decay in a
certain period of time, but it is impossible to work out _which one_ will decay
next – even if you know the exact properties of every atom.

The overall rate of decay, on the other hand, is so steady that it can be used
to calculate the age of fossils that died thousands of years ago on Earth. This
process is called __Carbon dating__.

::: column(width=300)

    p: svg.radioactive(width=300 height=200 viewBox="0 0 300 200")
    p.text-center.btn-row.no-voice: button.btn Start Decay

:::

    // TODO Possible probability distributions of the position of an electron in
    // a hydrogen atom. Lighter areas represent more likely locations of the electron.

---
> id: radioactive-1

[Radioactive decay](gloss:radioactive) of atoms is caused by forces which act at
much smaller scales within atoms, and which can be explained using [Quantum
mechanics](gloss:quantum). During the last century, physicists like [Max
Planck](bio:planck) and [Paul Dirac](bio:dirac) discovered that fundamental
particles have a mind-blowing property: they can be in multiple different places
_at the same time_. They don’t have a fixed position, but instead a probability
distribution (also called _wave function_) which tells us how likely it is that
we’ll find them at a particular position.

This incredible property is used by Quantum computers. Conventional computers
can only ever do one computation at a time. Quantum computers can use the
properties of subatomic particles to do many calculations at the same time – and
that makes them significantly faster.

    figure: x-img(lightbox src="images/quantum.jpg" alt="Quantum Mechanics" width=760 height=390)

---
> id: radioactive-2

We can’t really _understand_ or _explain_ quantum mechanics – we just have to
accept that it is what is predicted by mathematical theory and confirmed by
physical observations. The curious quantum effects have only ever been observed
on tiny scales of a few atoms, and it is not clear how they affect us in
everyday life. But it is the only known effect in nature that produces _true
randomness_.
