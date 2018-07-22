# Probability

## Introduction

    // SOURCES
    // http://onlineroulette.org.uk/stories/karl-pearson/
    // http://www.eprisner.de/MAT109/FermatPascal.html
    // http://mathforum.org/isaac/problems/prob1.html
    // https://en.wikipedia.org/wiki/Penney%27s_game
    // https://en.wikipedia.org/wiki/Edward_O._Thorp
    // http://edwardothorp.com/id26.html

    mixin barchart(data)
      - var max = 100/Math.max.apply(none, data.map(function(d) { return d[1] }))
      .barchart(style="width: " + data.length*50 + "px")
        for d in data
          .bar-wrap
            div(class="bar "+d[2], style="height: " + d[1]*max + "%")
        .axis
        for d in data
          .label= d[0]

    - var reds = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3]
    - var colour = function(x) { return reds.indexOf(x) >= 0 ? 'r' : 'b'; }

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

Probabilities and likelihoods are everywhere around us, from weather forecasting
to games, insurance or election polls. However, in the history of mathematics,
probability it is actually a very recent idea. While geometry and algebra were
studied by ancient Greek mathematicians more than 2500 years ago, the concepts
of probability only emerged in the 17th and 18th century.

::: column.grow
According to legend, two of the greatest mathematicians, [Blaise
Pascal](bio:pascal) and [Pierre de Fermat](bio:fermat), would regularly meet up
in a small cafe in Paris.

To distract from the difficult mathematical theories they were discussing, they
often played a simple game: they repeatedly tossed a coin – every _heads_ was a
point for Pascal and every _tails_ was a point for Fermat. Whoever had more
points after three coin tosses had to pay the bill.
::: column(width=360)

    img(src="/resources/probability/images/paris.jpg" width=360 height=254)

:::

One day, however, they get interrupted after the first coin toss and Fermat has
to leave urgently. Later, they wonder who should pay the bill, or if there is a
fair way to split it. The first coin landed _heads_ (a point for Pascal), so
maybe Fermat should pay everything. However, there is a small chance that Fermat
could have still won if the [[two next tosses|next coin toss]] would have been
_tails_.

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

} Fermat wins
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
> id: prob-line

## What are Probabilities

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

Here are some more events: drag them into the correct order, from likely to
unlikely:

    x-sortable
      .item.md(data-index="3") You throw a die :game_die: and it lands on 6.
      .item.md(data-index="5") Penguins :penguin: live on the North Pole.
      .item.md(data-index="1") It’s going to rain :rain_cloud: in November.
      .item.md(data-index="0") A baby will be born in China today. :baby_bottle:
      .item.md(data-index="4") You buy a lottery ticket and win the Jackpot :tada:.
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

Even events with tiny probabilities (like winning the lottery :tada:) _can
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

Now let’s have a look at some fun applications of probability.

---
> id: roulette
> sectionBackground: dark casino

## Casino Mathematics

    .roulette-wheel
      .layer-2.wheel
      .layer-3
      .layer-4.wheel
      .layer-5
      .ball
      svg(width=380 height=380): circle(cx=190 cy=190 r=190)

Soon after their initial discovery, mathematicians started applying the laws of
probability to many different parts of life – including casino games.

One of these mathematicians was [Karl Pearson](bio:pearson) who analysed the
results of roulette games published in the French newspaper _Le Monaco_.

Roulette consists of a wheel with the numbers from 1 to 36 coloured in
__{.red}red__ and __{.black}black__, as well as a green 0. A ball rolls around
the outside and randomly lands on one of the numbers. Gamblers can bet on a
single number, a set of multiple numbers, or just a colour. Their potential
winning depends on the likelihood of each of these outcomes.

---
> id: roulette-1

Here is one of the many hundreds of newspaper extracts which Pearson collected
and analysed. At first sight, it looks pretty random:

    .newspaper
      p Roulette results on 19 August 1823, Table 5:
      div
        for x in [13, 12, 30, 33, 3, 12, 29, 5, 8, 22, 23, 13, 5, 18, 14, 31, 36, 15, 18, 28, 32, 29, 11, 34, 23, 36, 8, 16, 2, 3, 9, 20, 16, 14, 15, 26, 31, 21, 15, 3, 33, 22, 12, 14, 9, 6, 30, 13, 33, 5, 28, 17, 27, 6, 5, 34, 11, 18, 32, 6, 9, 31, 29, 2, 18, 35, 6, 1, 34, 28, 1, 10]
          span(class=colour(x))= x

A roulette wheel has the same number of red and black numbers. If we ignore the
green 0 (which means the casino wins) we would expect the number of red and
black numbers to be [[approximately the same|exactly equal]]. Let’s check that
this is indeed the case for the set of results above.

    +barchart([['Red', 37, 'r'], ['Black', 35, 'b']])

---
> id: roulette-2

This looks pretty evenly distributed – there is a small difference between the
number of red and black results, but that is always to be expected in
probability.

However, Pearson didn’t stop here. He realised that if the results were
completely random, then each of the four possible pairs of two consecutive
colours should also be equally likely. Again we can count the number of
occurrences in our example:

    +barchart([['RR', 14, 'r'], ['RB', 24, 'rb'], ['BR', 24, 'rb'], ['BB', 9, 'b']])

---
> id: roulette-3

For some reasons, it seems that __{.red}RR__ and __{.black}BB__ happen much
[[less frequently|more frequently]] than __{.red}R__**{.black}B** and
__{.red}B__**{.black}R**, even though they should all have the same probability.
Of course, we might have just been _unlucky_ in this particular sequence of
results – but Pearson tested many thousands of results and always found the same.

---
> id: roulette-4

It gets even worse if we look at triples of results. Each of the 8 possible
triples of colours should be equally likely, but that is clearly not the case
here:

    +barchart([['RRR', 3, 'r'], ['RRB', 10, 'rrb'], ['BRR', 10, 'rrb'], ['RBR', 15, 'rrb'], ['BRB', 14, 'bbr'], ['RBB', 8, 'bbr'], ['BBR', 8, 'bbr'], ['BBB', 2, 'b']])

It seems that in this particular casino, the colours alternate much more often
than one would expect. There are hardly any long sequences of the same colour
(__{.red}RRR__ or __{.black}BBB__).

Pearson calculated that the probability of seeing results which were this skewed
was less than 1 in 100,000,000! He assumed that the Roulette wheels were rigged
to create higher profits for the Casino – and wrote many angry letters to expose
this scam.

---
> id: roulette-5

::: column(width=300)

    x-media(src="images/cocktails.jpg" width=300 height=185)

::: column.grow
When he finally travelled to Monte Carlo, he discovered that the reason for the
skewed results was of a very different nature: the journalists who were supposed
to be recording the results were instead just sitting in the bar of the casino,
drinking, and making up random colours…
:::

---
> id: random-sequence
> goals: random

This story shows that we humans tend to be quite bad at coming up with
random-looking data: we often underestimate unlikely events (long sequences of
the same colour) and overestimate likely ones (alternating colours). This can be
used effectively to detect fraud in banking and insurance.

Here you can try for yourself if you are better than the journalists: write
down a sequence of Rs and Bs, and find out how random it really is:

    label.newspaper: input(type="text", placeholder="RBBRRBBBRRRBRBRRB")
    p.text-center(style="margin-top: -1em; font-family: monospace") Randomness Score: #[span.score 100]/100

---
> id: dealer

::: column.grow
While Pearson only analysed previous Roulette results, others tried to use
mathematics to increase their chances of winning in casinos. One of these was
[Edward Thorp](bio:thorp), who invented _card counting_ – a technique that
allowed him to beat casinos at [Blackjack](gloss:blackjack).

He later turned his focus to Roulette: believing that, if you knew the exact
position and speed of the ball in a Roulette wheel, you should be able to use
Physics to approximately predict the outcome. After the dealer sets the roulette
wheel spinning, there are just a few seconds when you are still allowed to place
new bets. Unfortunately this time is much too short for humans to calculate the
outcome in their head.
::: column(width=150)

    .book: img(src="images/beat-the-dealer.jpg" width=150 height=250)

:::

---
> id: dealer-1

    img.computer(src="images/wearable-computer.png" width=275 height=364)

At the Massachusetts Institute of Technology, Thorp discussed his ideas with
[Claude Shannon](bio:shannon), another mathematician and the father of
[information theory](gloss:information). Together they decided to build the
first ever _wearable computer_, decades before the likes of Google Glass or
Apple Watch.

The computer was roughly the size of a pack of cigarettes and strapped around
their waist. A set of wires ran down to their shoe, which they tapped whenever
the ball crossed a certain marker on the roulette wheel. That allowed the
computer to calculate its speed, and predict where it would end up. Another set
of wires led from the computer to an earpiece, which produced different tones
based on different outcomes.

---
> id: dealer-2

    figure: x-media(src="images/las-vegas.jpg" width=760 height=345)

During the summer of 1961, Thorp and Shannon successfully tried their computer
in Las Vegas. But while they made some money, the computer – which even
contained parts of model airplanes – was not robust enough to be used at a
larger scale.

Thorp wrote about their results in a scientific paper, and of course, computers
were later forbidden in casinos. Thorp even got banned from all casinos in Las
Vegas, but by then he had already moved on to yet more profitable ventures:
using mathematics and computers on the stock market.

    // Shannon cryptography and code-breaking during World War II, and would go
    // on to become known as the father of information theory - and, indeed, the
    // information age. Shannon taught him to juggle three balls, and that he
    // rode a unicycle on a steel cable strung between two tree stumps. "He
    // later reached his goal," he wrote, "which was to juggle the balls while
    // riding the unicycle on the tightrope."

After this short trip through history, let’s get back to some actual mathematics…

    // TODO – Probability Trees
    // In real life, coins never have exactly a probability of 0.5. It might be 0.4932
    // or 0.500012, depending on their exact shape or physical properties. In
    // mathematics we don’t have to worry about these tiny inaccuracies: we can simply
    // assume that our “mathematical model” of a coin has exactly a 0.5 probability of
    // landing heads and is truly random. With this simplification, we can start
    // answering much more interesting questions.
    // Now let’s try a more difficult game: there is a bag that contains five
    // red and three blue marbles. When picking two marbles at random, what is
    // the probability that both of them are red?
    // We already know how to calculate the probability that the first marble is
    // red: it is 5/8 = 0.625.
    // However, once we have picked the first marble, the probabilities change:
    // now there are only 7 marbles left, and only four of them are red.
    // Therefore the probability that the second marble is red is 4/7 = 0.571.
    // To calculate the probability that #[em both] marbles are red, we simply
    // have to multiply these probabilities: the final answer is 0.625 × 0.571 = 0.357.
    // There are four possible outcomes in total: red-red, red-blue, blue-red
    // and blue-blue. We can represent all these possibilities in a single diagram:
    // slideshow
    // Now we can simply read off the probability of the different outcomes. The
    // probability that both marbles are blue is xxx, and the probability that
    // you get two marbles with different colours are xxx + xxx = xxx.
    // Probability trees can be used to solve many problems that consist of
    // multiple steps that happen one after the other.

    // TODO – VENN DIAGRAMS
    // Opposite probabilities always add up to 1. This means that you can
    // calculate the opposite of a probability by subtracting it from 1.
    // Venn Diagrams and set operations
    // Independent and Mutually Exclusive Events
    // There are 200 kids in a school. 140 students are taking Mathematics, and
    // 100 students are taking Biology. 80 students are studying both Maths and Biology.
    // The corresponding Venn Diagram corresponds to two overlapping circles for
    // Maths and Biology. We can write 80 in their interx-step.
    // There are 140 - 80 = 60 students studying just Mathematics, so we write
    // than in the remaining part of the Maths circle.  There are 100 - 80 = 20
    // students studying just Biology so we write that in the remaining part of
    // the Biology circle.
    // How many students at the school study neither Mathematics nor Biology?

---
> id: future

## Predicting the Future

    p.md If we roll two dice at once and add up their scores we could get results from [[2]] up to [[12]]. However, not all outcomes are equally likely. Some results can only happen one way (to get #[span.dice.outline 12] you have to roll #[span.dice #[+dice(6)]] + #[span.dice #[+dice(6)]]) while others can happen in multiple different ways (to get #[span.dice.outline 5] you could roll #[span.dice #[+dice(1)]] + #[span.dice #[+dice(4)]] or #[span.dice #[+dice(2)]] + #[span.dice #[+dice(3)]]).

---
> id: future-1

This table shows all possible outcomes:

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
        td #[.dice #[+dice(5)]] #[.dice #[+dice(3)]]
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

The least likely outcomes are _{span.dice.outline}2_ and _{span.dice.outline}12_,
each with a probability of `1/36 = 0.0277`.

---
> id: future-2

It is impossible to forecast the outcome of a single coin toss or die roll.
However, using probability we can very accurately predict the outcome of_many_
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

    .box
      .box-title: h3 Rolling Dice
      .box-body
        .probTable.var ${ probTable(d) }
        p.md We roll ${d}{d|2|1,6,1} dice at once and record the #[span.dice(style="width: auto; padding: 0 4px;") SUM] of their scores. The #[strong.m-green green lines] represent the probabilities of every possible outcome predicted by probability theory and the #[strong.m-blue blue bars] show how often each outcome happened in this computer generated experiment.
        p.btn-row
          button.btn Roll once
          button.btn Roll 100 times
          button.btn Roll 1000 times

{.reveal(when="roll")} Notice how, as we roll more and more dice, the observed
frequencies become closer and closer to the frequencies we predicted using
probability theory. This principle applies to all probability experiments and is
called the __Law of large numbers__.

{.reveal(when="roll")} Similarly, as we increase the number of dice rolled at
once, you can also see that the probabilities change from a straight line (one
die) to a triangle (two dice) and then to a “bell-shaped” curve. This is known
as the __Central Limit Theorem__, and the bell-shaped curve is called the
__Normal Distribution__.

---
> id: monty-hall
> sectionBackground: dark gameshow
> goals: game
> title: The Monty Hall Problem

## Monty Hall

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
> id: quantum

## True Randomness

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

    x-media(src="images/coins.jpg" width=240 height=343)

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

::: column.grow
But _true randomness_ does exists – at the very foundations of matter. A block
of radioactive material consists of millions of atoms which decay over time:
they fall apart into smaller atoms while emitting dangerous radiation.

Physicists know the probability that a particular atom will decay in a certain
period of time. In fact, for a large block of radioactive material, the overall
rate of decay is so steady that it is used in atomic clocks. But even knowing
the exact properties of every atom, it is impossible to work out _which one_
will decay next – this is completely random.
::: column(width=300)

    p: svg.radioactive(width=300 height=200 viewBox="0 0 300 200")
    p.text-center.btn-row: button.btn Start Decay

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
distribution (or wave function) which tells us how likely it is we are going to
find them at a particular position.

This incredible property is used by Quantum computers. Conventional computers
can only ever do one computation at a time. Quantum computers can use the
properties of subatomic particles to do many calculations at the same time – and
that makes them significantly faster.

    figure: x-media(lightbox src="images/quantum.jpg" width=760 height=390)

---
> id: radioactive-2

We can’t really _understand_ or _explain_ quantum mechanics – we just have to
accept that it is what is predicted by mathematical theory and confirmed by
physical observations. The curious quantum effects have only ever been observed
on tiny scales of a few atoms, and it is not clear how they affect us in
everyday life. But it is the only known effect in nature that produces _true
randomness_.
