# Probability

## Introduction

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

---

### Predicting the Future

> id: future

If we roll a die, the result is a number between 1 and 6, and all outcomes are
equally likely. If we roll two dice at once and add up their scores we can get
results from [[2]] up to [[12]]. However, in this case they are not all equally
likely.

    p.md Some results can only happen one way (to get #[span.dice.outline 12] you have to roll #[span.dice #[+dice(6)]] + #[span.dice #[+dice(6)]]) while others can happen in multiple different ways (to get #[span.dice.outline 5] you could roll #[span.dice #[+dice(1)]] + #[span.dice #[+dice(4)]] or #[span.dice #[+dice(2)]] + #[span.dice #[+dice(3)]]).

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

::: .box.f-red

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

## Conditional Probability


> section: conditional
> sectionStatus: dev




---
> id: conditional
> goals: slider-probability



::: column(width=360)

    img(src="images/pillAndPatient.png" width=360 height=254)

:::

<!-- How to get them to line up? And slider is permanent? -->
${xskew}{xskew|0.0|0,1,0.0833333333}

::: column(width=380)

    svg.conditional(width=380 height=288, only-one-column="false")

:::

A team of researchers has made a new pill that might help treat patients with a very painful ligament infection. However, before they can start mass production, they have to check that taking the pill is effective - and to check whether it has nasty side-effects!

When a hospital does an experiment to see if a treatment is helpful, it's called a *clinical trial*. You take a large group of patients with this ligament infection. Then you give some of these patients your new pill, while the others get a *placebo*: pill that looks the same as the new pill, but which is just made of sugar. Finally, you compare what happens to both groups of patients after a couple of weeks.

::: column(width=360)
    <!-- https://depositphotos.com/stock-photos/placebo-pill.html?filter=all&qview=85016586 -->
    img(src="images/placebo.jpg" width=360 height=254)

:::

Here's what happened to the people who participated in that clinical trial:

|         |Not given pill       |Given pill   |
|---------|---|---|
| After a week, got better    |53   |34   |
| After a week, didn't get better         | 89  |62   |
{.grid}

Well, there were a whole 62 people who were given the pill but didn't get better, so apparently the pill doesn't work perfectly.

---

Although, what if the pill was working a *little* bit? If a pill is was helpful for even a few people in the trial, then using it might be a very good thing to do! On the other hand, those pills take money and time to administer. So we want to be completely, mathematically, certain that taking the pill makes a person more likely to get better.

::: column(width=360)
    <!-- depositphotos_109144654-stock-illustration-goalkeeper-catches-the-ball-football.jpg -->
    img(src="images/goalkeeper.jpg" width=360 height=254)

:::

In order to do this, we need to statistically analyse the data in that table, which is what we’ll be learning to do today! You can apply statistical analysis whenever you have data, whether your data is how many times a goalkeeper caught a ball, the success of a marketing strategy, or even whether your dating profile you've made is working.

But to make it easy to learn about statistical analysis, we’re going to focus on data that’s easier to collect: what are people wearing!



<!-- Applet. Student must click a few of them before next text shows up -->

<!-- [Appears above the applet after it’s been played with] -->

If I randomly choose a person, what is the chance that they are wearing a *scarf*?
<!-- correct answer is 0.5 -->



<!-- slider is below the text, but text disappears and is replaced by the next question -->

How about the probability that a person in the crowd is wearing a *coat*?

And the probability they’re wearing a *hat*?
<!-- this time slider has a label next to it: P(wearing a coat) -->

<!-- below applet --> Note that the correct answer is putting the slider in the place where the people reach along the side! It makes sense if you think about it. If no one wears a scarf, this probability would be 0, so you wouldn’t even have a sliver of people with the scarf on the side. If everyone wears a scarf, this probability would be 1. In our example, we have a probability of approximately [[0.4]].

<!-- Applet: same again but now there’s another square below it, and the lower square has TWO columns that both say hat, scarf, coat. First makes things go side-by-side, second subdivides in those columns. Again, more text won’t appear until student has played with it a bit -->

Here's a tool you can use to filter people and figure out their proportions. That's going to be useful!

<!-- 
  Police lineup. 
  Good if there's an illustration of a person walking away who was wearing a coat
  A crime was committed, the police know that there was a witness who was wearing a coat and glasses"

  Maybe it's pictures of people's faces? Glasses, spots, . But apart from that they look the same, bit weird

  Why would things be conditional?
    Witness was wearing a scarf
 -->

<!-- (P(A|B) labels should be in plain english) -->

What proportion of people wearing hats are also wearing coats?

${xskew}{xskew|0.0|0,1,0.0833333333}
<!-- want 0 and 1 labelled -->

Suppose I'm going to pick one of the coat-wearers at random. What’s the probability that the coat-wearer is *also wearing a scarf*? 
<!-- if they get it wrong/do nothing, remind them to use the buttons -->

<!-- it is now the case that when they mouse over the applet, “Wearing hat ⋂ wearing scarf” appears imposed on the quadrants of the applet -->

If someone is wearing a coat, what’s the probability they are also wearing a hat?
<!-- slider again, the answer to this one is 100%, which is important to have an example of -->

And we can also see that if a person is wearing a coat, their chance of wearing a scarf is [[increased|decreased]]
<!-- if you get this one wrong, it changes the labels and asks you again -->

::: column(width=360)

    img(src="images/depositphotos_143866527-stock-photo-pencil-and-notebook-on-table.jpg" width=360 height=254)

:::

Let’s try it with you drawing your own picture! Get out a piece of paper and a pencil. Let’s say there’s a crowd of 100 people. 25 of those 100 people are _{.pill.red} wearing flip-flops_. Of those 25 people, 10 are _{.pill.red} wearing flip-flops_ and _{.pill.blue} wearing sunglasses_. Of those NOT _{.pill.red} wearing flip-flops_, 20 are _{.pill.blue} wearing sunglasses_. Draw a picture of the 100 people arranged in a square, with rectangles like those above, using these numbets. What is the probability that someone who is _{.pill.blue} wearing sunglasses_ will also be _{.pill.red} wearing flip-flops_? [[1/3]]

::: column(width=360)

    img(src="images/flipFlopsSunglasses.jpg" width=360 height=254)

:::

When analysing statistics (like the pill-and-ligament-disease statistics, which we will get back to!), scientists talk about probabilities so often that instead of saying “the probability that it will rain today”, they just write *P( it will rain today )*. Also, whenever they're talking about the probability of more than one thing, like wearing a scarf AND wearing a coat, instead of "and", they'll say "wearing a scarf ⋂ wearing a coat". It's the same ⋂ you might have seen in set theory. Put those together and you get things like “When it’s cold outside, *P( I am wearing a scarf ⋂ I am wearing a coat )* is high!”

[Pair of applets appears again] There's another important word to know about. Try this one: the probability that a person is wearing a coat if we know that they’re wearing glasses is []. The probability a person is wearing a coat if they are not wearing glasses is [] So it’s the same! Wearing a coat has nothing to do with whether you are wearing glasses. This is called *independence* - as in, whether a person is wearing a coat is independent of whether they are wearing glasses.

Whether you wear flip-flops **is** related to wearing sunglasses. It’s because [[these are both things you’ll do on a hot day | the same kinds of people like these items of clothing | these are both things you do on tuesdays]]. Wearing scarves and coats are also related. The reason that this can be useful for helping cure diseases is because we wanted to know whether *a person getting better* is *related* to them *taking the pill*, i.e. is it dependent on whether they have taken the pill or not.

[picture of chicken soup and ladder and coins] Some things are unrelated. For example, flipping a coin once and seeing it come up heads is unrelated to whether flipping the coin again will cause it to come up heads. Another thing that is unrelated is walking underneath a ladder and getting unlucky later in the day. Sometimes it takes scientific studies to find that two things are unrelated - for example, many studies have looked at whether being vaccinated is related to whether a person will start showing signs of autism, and they have established that these two things are completely unrelated. Of course, there will be some children who receive vaccinations and do develop autism – but the probability is exactly the same as for children who do no receive vaccinations!

When two things really have no effect on each other, we call them independent. Which of these pairs of statements are independent?


    x-buckets.independent
      .inputs
        .input(bucket="0") Getting a parking ticket and winning the lottery.
        .input(bucket="0") Choosing your birthday as your lottery numbers and winning the lottery.
        .input(bucket="1") Boarding a plane first and finding a good seat.
        .input(bucket="1") Having rain this afternoon and having had rain this morning.
        .input(bucket="1") Testing positive for flu and having flu.
        .input(bucket="1") Robbing a bank and going to jail.
        .input(bucket="1") Someone having a mohawk, and them enjoying punk music.
        .input(bucket="1") Someone being above average height, and them being male.
        .input(bucket="1") Brushing your teeth regularly, and having nice breath.
        .input(bucket="1") Driving a car and having a traffic accident.
        .input(bucket="1") Being younger than 17 and being below 5 foot.
        .input(bucket="1") I will like the second episode of a show, and I did not like the first episode.
        .input(bucket="0") Three siblings being the same gender, and the first one being female.
      .buckets
        .bucket
          .title Independent
        .bucket
          .title Dependent

[applet again. It has numbers appear in a way to emphasize the text] If two things are independent, it means that in pictures like this, the rectangles are all lined up perfectly, they are not broken apart like when you’re asking about wearing a coat and wearing gloves. When this happens, the area of the “both statements are true” corner rectangle is equal to the probabilities of the two sides multiplied together. Try changing the numbers and seeing for yourself!

There’s another important symbol here, which is “|”, which means “given that we know that...”. For example:

Plain language
Mathematical language
Probability that someone is wearing given that we know that they are wearing sunglasses
Probability it will rain today given that it rained this morning
P( wearing sunglasses | wearing flip-flops )
P(rain this afternoon | rained this morning)
[they write one in]

With these pieces of notation, the things we’ve done above can be put in a formula, which makes it easier to work with. Above, you answered the question “what proportion of the people wearing coats are also wearing scarves?”.

[Applet appears and plays out the below]

So we would say that you worked out the value of *P(wearing scarf | wearing coat)*. The way you got this value involved looking at the number of people who were wearing coats. How many were there? *P(wearing coat)* * total number of people, which is equal to [0.5 * 144, -0.5*144,]

You also needed to get the number of people wearing both coats and scarves. This was equal to total number of people * P(wearing coat ⋂ wearing scarf), which is equal to [0.5 * 144, -0.5*144,]

To get P(wearing scarf | wearing coat), you divided the second number by the first number by the other. As in, you did:

P(wearing scarf | wearing coat) = P(wearing coat ⋂ wearing scarf) * _{.pill.red} total number of people_ / P(wearing coat) * [{.pill.red} total number of people].
<!-- TODO each of these probabilities should be a "pill" that highlights the corresponding area of the diagram when hovering. -->

<!-- alternative syntax: here is [a pill](pill:green). -->

Using algebra, we can simplify that! It’s just the same as:

{.text-center}`P(pill("wearing scarf", "red") | "wearing coat") = P("wearing coat" cap "wearing scarf") / P("wearing coat")`

Which is the ratio between the area of the rectangle containing the people wearing coats and scarves and the area of the combined rectangle containing all the people wearing  coats. This makes sense because the more area a rectangle has, the more people are in it!
  
In fact, this is true for any statement, not just what people are wearing:

::: .theorem
__The definition of Conditional probability__  

{.text-center} `P(A | B) = P(A cap B) / P(B)`

:::

These letters A and B could be any connected sentences: “This sandwich is mouldy”; “This sandwich will make me sick if I eat it”. They could also be totally unconnected sentences: “This football game will be won by Manchester United”, “The climate change we are seeing is caused by human CO2 emissions”. No matter what they are, this equation will always apply to them!

::: .theorem

{.text-center} `Get the images`

:::

::: column(width=360)

    img(src="/resources/shared/bios/bayes.jpg" width=360 height=254)

:::

This equation defines conditional probability, and it was discovered by Reverend Thomas Bayes. One of the first people to use it successfully was Pierre Simone Laplace. In 1776, he applied it to some observations that had been made on the paths of comets [pic of comet in solar system], and was able to figure out their average behaviour. He later used his findings to work out whether the solar system will eventually break apart!

::: column(width=360)

    img(src="/resources/shared/bios/laplace.jpg" width=360 height=254)

:::

::: column(width=360)

    img(src="images/comet.jpg" width=360 height=254)

:::

We can also make a formula for independence too.

[Applet again with just glasses and coats, which as found previously were independent. Controls come in too]

Remember how when two statements are independent, like wearing a coat and wearing glasses, the size of the rectangle in the corner is equal to the size of the probabilities?

[Applet]

P(A)*P(B) = P(A⋂B)

If we give 4 more people with coats and glasses [it happens in the applet], suddenly these are no longer independent - it is now the case that you’re more likely to be wearing glasses if you’re wearing a coat. What’s the value of P(glasses⋂coat) now?

P(A)*P(B) ≠ P(A⋂B)

By the way, what is the value of P(wearing coat|wearing glasses)? Not the other way around! P(wearing coat|wearing glasses) and P(wearing glasses|wearing coat) are different from one another - at least when the two variables are dependent. If P(A|B) = P(B|A), that’s another way of knowing they’re independent!

::: column(width=360)
    <!-- https://depositphotos.com/stock-photos/hospital-bed.html?filter=all&qview=21643093 -->
    img(src="images/hospital.jpg" width=360 height=254)

:::

Back to the ligament infection though! Remember this table:

::: .theorem

{.text-center} `transform into applet`

:::

|         |Not given pill       |Given pill   |
|---------|---|---|
| After a week, got better    |53   |34   |
| After a week, didn't get better         | 89  |62   |

We can look at the same data this way:

<!-- table again, it transforms into rectangles with sizes whose entries. When you mouse over it it transforms back -->

We wanted to help people suffering from the ligament disease. So we wanted to know if taking the pill makes a person more likely to get better.

[[0.5]]

Alright - and what is P(they got better | they took the pill)? - and what is P(they got better|they didn’t take the pill)? And this gives us our very important answer: [[the pill is worth spending hospital budget on|the pill is not worth spending hospital budget on]]! Hundreds of new pills get discovered every year, and many of them don’t work - so knowing how to do this is very useful if we want to help people.

Here’s a more tricky situation.

TABLE

We can add up this data to make it easier to look at

TABLE

Again, we want to know *P(recovered|took pill)*. Remember the formula: *P(recovered|took pill) = P(recovered⋂took pill) / P(took pill)*. By plugging in numbers, you can see that *P(recovered|took pill)* is:[]

Well done! So, it looks like the pill is pretty good after all.

But let’s check something - what’s the value of *P( recovered | old person who was given the pill)* and *P( recovered| young person who was given pill)*?

Crazy! It turns out that the pill is actually a totally useless treatment, even though the combined numbers make it seem good!

Why did this happen? Well, check *P(recovered|young)*. Those young people, they’re much more resilient, pill or no pill! And now check *P(young|took pill)* and *P(old|took pill)*, what are they?

::: column(width=360)
    <!-- https://depositphotos.com/stock-photos/child-elder-hospital.html?filter=all&qview=374659724 -->
    img(src="images/childAndElder.jpg" width=360 height=254)

:::

The doctors happened to give the pill to more young people than old people, so the pill coincidentally was taken by more people who were likely to get better anyway! This is called *Simpson’s paradox*. It's a kind of bias in data, and it’s important to be able to spot it!

Now you know the terminology of conditional probability, you might start seeing it in almost every sentence people say! Use it wisely!

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

Out of the 9 possibilities [[6]] need you to switch doors, to win. This gives a
chance of `6/9 = 2/3` like before.


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
