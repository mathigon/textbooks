# Probability

## Introduction

    // SOURCES
    // http://onlineroulette.org.uk/stories/karl-pearson/
    // http://www.eprisner.de/MAT109/FermatPascal.html
    // http://mathforum.org/isaac/problems/prob1.html
    // https://en.wikipedia.org/wiki/Penney%27s_game
    // https://en.wikipedia.org/wiki/Edward_O._Thorp
    // http://edwardothorp.com/id26.html

> id: intro
> section: introduction
> description: Cards, dice, roulette and game shows – probability is one of the most fun areas of mathematics, full of surprises and real life applications.
> color: "#CD0E66"
> level: Intermediate
> next: statistics

Probabilities and likelihoods are everywhere around us, from weather forecasting
to games, insurance or election polls. However, in the history of mathematics,
probability is actually a very recent idea. While numbers and geometry were
studied by ancient Greek mathematicians more than 2500 years ago, the concepts
of probability only emerged in the 17th and 18th century.

::: column.grow
According to legend, two of the greatest mathematicians, [Blaise
Pascal](bio:pascal) and [Pierre de Fermat](bio:fermat), would regularly meet up
in a small cafe in Paris.

To distract from the difficult mathematical theories they were discussing, they
often played a simple game: they repeatedly tossed a coin – every _heads_ was a
point for Pascal and every _tails_ was a point for Fermat. Whoever had fewer
points after three coin tosses had to pay the bill.
::: column(width=360)

    img(src="images/paris.jpg" width=360 height=254)

:::

One day, however, they get interrupted after the first coin toss and Fermat has
to leave urgently. Later, they wonder who should pay the bill, or if there is a
fair way to split it. The first coin landed _heads_ (a point for Pascal), so
maybe Fermat should pay everything. However, there is a small chance that Fermat
could have still won if the [[two next tosses|next coin toss]] had been _tails_.

---
> id: intro-1

Pascal and Fermat decided to write down all possible ways the game could have
continued:

::: column.grow(width=120)

    img(src="images/coins-1.png" width=136 height=48 alt="HHH")

{.caption} Pascal wins
::: column.grow(width=120)

    img(src="images/coins-2.png" width=136 height=48 alt="HHT")

{.caption} Pascal wins
::: column.grow(width=120)

    img(src="images/coins-3.png" width=136 height=48 alt="HTH")

{.caption} Pascal wins
::: column.grow(width=120)

    img(src="images/coins-4.png" width=136 height=48 alt="HTT")

{.caption} Fermat wins
:::

All four possible outcomes are equally likely, and Pascal wins in
[[three|four|two]] of them. _{span.reveal(when="blank-0")}Thus they decided that
Fermat should pay 3/4 of the bill and Pascal should pay 1/4._

---
> id: intro-2

Pascal and Fermat had discovered the first important equation of probability: if
an experiment has multiple possible outcomes which are all equally likely, then

{.text-center} Probability of an event =
`"Number of ways the event could happen"/"Total number of possible outcomes"`.

In our example, the probability of Pascal winning the game is `3/4 = 0.75`, and
the probability of Fermat winning the game is `1/4 = 0.25`.

---

### What are Probabilities

> id: prob-line

A __probability__ is a number between 0 and 1 which describes the likelihood of
a certain __event__. A probability of 0 means that something is _impossible_; a
probability of 1 means that something is _certain_.

For example, it is [[impossible|certain]] that you will meet a real life dragon,
and it is [[certain|impossible]] that the sun will rise tomorrow. The
probability of a coin landing _heads_ is exactly [[in the middle|the same]].

{.reveal(when="blank-0 blank-1 blank-2")} The probability of rolling a 6 on a
die, or picking a particular suit from a deck of cards is [[less|more]] than 0.5
– which means unlikely. The probability of a good football team winning a match,
or of a train arriving on time is [[more|less]] than 0.5 – which means likely.

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

Now drag the following events into the correct order, from likely to unlikely:

    x-sortable
      .item.md(data-index="3") You throw a die :game-die: and it lands on 6.
      .item.md(data-index="5") Penguins :penguin: live on the North Pole.
      .item.md(data-index="1") It’s going to rain :cloud-with-rain: in November.
      .item.md(data-index="0") A baby will be born in China today. :baby-bottle:
      .item.md(data-index="4") You buy a lottery ticket and win the Jackpot :party-popper:.
      .item.md(data-index="2") A newborn baby will be a girl :girl:.

We often use probabilities and likelihoods in everyday life, usually without
thinking about it. What is the chance of rain tomorrow? How likely is it that I
will miss the bus? What is the probability I will win this game?

---
> id: prob-line-2

Tossing a (fair) coin has two possible outcomes, _heads_ and _tails_, which are
both equally likely. According to the equation above, the probability of a coin
landing _heads_ must be `1/2` = 0.5, or 50%.

    // TODO However, the equation is not very helpful if the different outcomes
    // are not all equally likely, or if there are infinitely many possible outcomes.

Note that this probability is _in between_ 0 and 1, even though only one of the
outcomes can actually happen. But probabilities have very little to do with
actual results: if we toss a coin many times we know that
[[approximately half|exactly half|all|none]] of the results are heads – but we
have no way of predicting _exactly which_ tosses landed heads.

Even events with tiny probabilities (like winning the lottery :party-popper:) _can
still happen_ – and they _do happen_ all the time (but to a very small
proportion of the people who participate).

---
> id: prob-line-3

Probabilities also depend on how much each of us knows about the event. For
example, you might estimate that the chance of rain today is about 70%, while a
meteorologist with detailed weather data might say the chance of rain is 64.2%.

Or suppose that I toss a coin and cover it up with my hands – the probability of
tails is 50%. Now I peek at the result, but don’t tell you. I know for certain
what has happened, but for you the probability is [[still 50%|100%|not 50%]].

---
> id: prob-line-4

There are many different ways to think about probabilities, but in practice they
often give the same results:

::: column(width=230 parent="padded-thin")

    img(src="images/classical.png" width=240 height=75 alt="classical probability")

{.text-center} The __classical__ probability of landing heads is the proportion
of _possible outcomes_ that are heads.
::: column(width=230)

    img(src="images/frequentist.png" width=240 height=75 alt="frequentist probability")

{.text-center} The __frequentist__ probability is the proportion of heads we get
if we toss the coin _many times_.
::: column(width=230)

    img(src="images/subjectivist.png" width=240 height=75 alt="subjectivist probability")

{.text-center} The __subjectivist__ probability tells us how strongly we
_believe_ that the coin will land heads.
:::

    // TODO Notice that subjectivist probabilities may be different for
    // different people – often depending on how much they know.

Remember that while probabilities are great for _estimating and forecasting_, we
can never tell what _actually_ will happen.

---

### Predicting the Future

> id: future

If we roll a die, the result is a number between 1 and 6, and all outcomes are
equally likely. If we roll two dice at once and add up their scores we can get
results from [[2]] up to [[12]]. However, in this case they are not all equally
likely.

    include mixins
    p.md Some results can only happen one way (to get #[span.dice.outline 12] you have to roll #[span.dice #[+dice(6)]] + #[span.dice #[+dice(6)]]) while others can happen in multiple different ways (to get #[span.dice.outline 5] you could roll #[span.dice #[+dice(1)]] + #[span.dice #[+dice(4)]] or #[span.dice #[+dice(2)]] + #[span.dice #[+dice(3)]]).

---
> id: future-1

This table shows all possible outcomes:

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

The most likely result when rolling two dice is _{span.dice.outline}7_. There
are [[6]] outcomes where the sum is 7, and [[36]] outcomes in total,
_{span.reveal(when="blank-0 blank-1")}so the probability of getting a 7 is
`6/36 = 0.1666`._

---
> id: future-2

The least likely outcomes are _{span.dice.outline}2_ and _{span.dice.outline}12_,
each with a probability of `1/36 = 0.0277`.

It is impossible to forecast the outcome of a single coin toss or die roll.
However, using probability we can very accurately predict the outcome of _many_
dice.

If we throw a die 30 times, we know that we would get around `1/6 × 30 = 5`
sixes. If we roll it 300 times, there will be around `1/6 × 300 = 50` sixes.
These predictions get more and more accurate as we repeat the predictions more
and more often.

---
> id: dice-simulation
> goals: roll
> title: Rolling Dice

In this animation you can roll many “virtual” dice at once and see how the
results compare to the predicted probabilities:

::: .box.red

#### Rolling Dice

    .probTable.var(:html="probTable(d)")

We roll ${d}{d|2|1,6,1} dice at once and record the _{span.dice(style="width: auto; padding: 0 4px;")} SUM_
of their scores. The __{.m-green} green lines__ represent the probabilities of every possible
outcome predicted by probability theory and the __{.m-blue} blue bars__ show how often each outcome
happened in this computer generated experiment.

    p.btn-row.no-voice
      button.btn Roll once
      button.btn Roll 100 times
      button.btn Roll 1000 times

:::

{.reveal(when="roll")} Notice how, as we roll more and more dice, the observed
frequencies become closer and closer to the frequencies we predicted using
probability theory. This principle applies to all probability experiments and is
called the __law of large numbers__.

{.reveal(when="roll")} Similarly, as we increase the number of dice rolled at
once, you can also see that the probabilities change from a straight line (one
die) to a triangle (two dice) and then to a “bell-shaped” curve. This is known
as the __central limit theorem__, and the bell-shaped curve is called the
__normal distribution__.


---


## Probability Trees and Venn Diagrams

> section: trees
> sectionStatus: dev

{.todo} TODO

---
> id: galton-board

::: .box.red
#### Galton Board

Here is a Galton Board:

    figure
      svg(width=400 height=445).galton
      .ballTable.var(:html="ballTable(rows, p)")
    p.btn-row.no-voice
      button.btn Drop one ball
      button.btn Drop 10 balls
      button.btn Drop 100 balls

The Galton Board has ${rows}{rows|8|2,9,1} rows. The probability the ball bounces to the **right** is ${p}{p|0.5|0,1,0.1}.
:::

---

## Conditional Probability

> section: conditional
> sectionStatus: dev

TODO

---

Sort these events into whether they are independent or not:

    x-buckets.independent
      .inputs
        .input(bucket="0") Winning the lottery and running out of milk.
        .input(bucket="1") Boarding a plane first and finding a good seat.
        .input(bucket="0") Owning a dog and growing your own herb garden.
        .input(bucket="0") Getting a parking ticket and winning the lottery.
        .input(bucket="1") Robbing a bank and going to jail.
        .input(bucket="1") Driving a car and having a traffic accident.
      .buckets
        .bucket
          .title Independent
        .bucket
          .title Dependent

---


## The Monty Hall Problem

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

Out of the 9 possibilities, there are [[6]] where you need you to switch doors, in order to win.
This gives a  chance of `6/9 = 2/3` like before.


---


## The Birthday Problem

> section: birthdays
> sectionStatus: dev

TODO


---


## True Randomness

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
