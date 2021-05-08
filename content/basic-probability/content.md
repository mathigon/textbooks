# Introduction to Probability

## Introduction

> section: introduction
> sectionStatus: dev
> id: intro
> color: "#CD0E66"
> level: Foundations

In previous courses, we have seen how we can use science and mathematics to try to predict the
future. For example, we can predict when a car will arrive at its destination if it is driving at a
constant speed.

However, there are many examples in life where it is impossible to predict exactly what will happen.
This could be because we don’t have all the information we need, because the decisions of other
people might influence the result, or just because it is incredibly complicated.

::: column(width=200)

    // https://depositphotos.com/43434771/stock-photo-fragments-of-the-planet-earth.html
    x-img(src="images/weather.jpg" width=200 height=180 lightbox)

{.caption} The atmosphere consists of billions of molecules that interact with each other. That’s
why it is impossible to exactly predict the weather.

::: column(width=200)

    // https://depositphotos.com/89420986/stock-photo-ballot-box-with-man-casting.html
    x-img(src="images/election.jpg" width=200 height=180 lightbox)

{.caption} You don’t know how people are going to vote in an election. That’s why it is impossible
to exactly predict the outcome.


::: column(width=200)

    // https://depositphotos.com/8537251/stock-photo-queen-of-hearts.html
    x-img(src="images/cards.jpg" width=200 height=180 lightbox)

{.caption} After shuffling, you don’t know the order of the cards in a deck. That’s why it is
impossible to exactly predict the colour of the next card.

:::

[Continue](btn:next)

---
> id: buckets
> goals: buckets

Our language has many words we can use to describe the answer to these questions, without knowing
exactly what will happen. Try to move each of these events to the best possible description:

    x-buckets.likelihoods
      .inputs
        .input(bucket="3").md The sun rises tomorrow.
        .input(bucket="2").md LIKELY
        .input(bucket="1").md You roll a die and it lands on a 6.
        .input(bucket="0").md You see a mammoth walking down the street.
        .input(bucket="0").md IMPOSSIBLE
        .input(bucket="3").md CERTAIN
        .input(bucket="1").md You win the lottery.
        .input(bucket="2").md LIKELY
      .buckets
        .bucket
          .title Impossible
        .bucket
          .title Unlikely
        .bucket
          .title Likely
        .bucket
          .title Certain

---
> id: dartboard

{.fixme} You might have noticed that some of the descriptions were a bit “imprecise”. For example,
if you roll a die just once, it is unlikely that it lands on a 6 – but you certainly wouldn’t be
surprised if it does. WInning the lottery is unlikely too - but obviously, more unlikely than
rolling that 6!

{.fixme} Unfortunately, our four word scale to describe the likelihood or chance of events occurring isn’t too useful.

::: column.grow

{.fixme} One way to determine more accurately how likely a certain outcome is, is to look at how often it has happened in the past. For example, Imagine you’re playing a game of darts with your friend - and you want to numerically know how likely it is that your friend hits the bullseye. You could try to come up with some model to measure his skill, and learn how “good” he is - but a far easier method would be to listen to what his history says. In this case, your friend threw ${20} darts, ${5} of which landed in the center.

::: column(width=200)

    img(src="https://static9.depositphotos.com/1027309/1217/v/450/depositphotos_12178989-stock-illustration-dart-board.jpg")

:::

{.fixme} From this, you might deduce that the next throw has a `5/20=0.25` chance to also land in the center. We say that 0.25 is the probability of hitting the center.

{.fixme} For many centuries, mathematicians have struggled to deal with these uncertain situations – until the development of **probability** theory. In this course, we will explore what probability is, and give you some amazing new tools to be able to predict the future.

---

{.fixme} If you move the sliders above, you might notice that the probability is always between [[0]] (if you never hit the center) and [[1]] (if you always hit the center).

{.fixme} Probabilities always lie between 0 and 1. An event with a smaller probability (like 0.2) is always less likely than an event with a larger probability (like 0.8). If an outcome is impossible, we say it has probability 0. If it is certain, we say it has probability 1. If an event is equally likely to happen or not happen, its probability is exactly in the middle: [[0.5]].

{.fixme} We can represent probabilities using a number line from 0 to 1. Try to drag the following words and events onto the line, to show their approximate probability:

---

{.fixme} There are several different ways to represent probabilities, and we have already seen two of them. In the first example above, 5 out of 20 of the dart throws landed in the center.

::: column.frame.blue.text-center(width=200 parent="padded-thin")

We can represent probabilities as a fraction, that shows how many outcomes were successful:

`p = blank(5)/20`

::: column.frame.green.text-center(width=200)

We can convert the fraction into a decimal number between 0 and:

_p_ = [[0.25]]

::: column.frame.yellow.text-center(width=200)

We can also convert it into a percentage between 0% to 100%:

_p_ = [[25]]%

:::

---

{.fixme} We already know how to convert between fractions, decimals, and percentages, and we can do exactly the same for probabilities. Percentage literally means “Out of 100” - so 30% is the same thing as 30 times out of 100, or `30/100`!

{.fixme} Here are a few more predictions and events. Connect the ones that correspond to the same probability:

::: column(width=500)

{.fixme} A friend invites you to play a simple game: you toss a coin a few times. When it lands heads, you have to pay him 1, and when it lands tails, he has to pay you 1. This seems fair enough - you have as much to gain as you have to lose.

{.fixme} We know that the probability of a coin landing heads is ½ = 0.5. However, once you start playing, something strange happens: the coin lands heads five times in a row!

::: column(width=200)

{.fixme} Coin flipping animation, it keeps track of the last 5 outcomes, which are all heads.

:::

{.fixme} At this point, so start to suspect something. Maybe your friend is using a **trick coin** (or biased coin), where one side is weighted, and so the coin is more likely to land on it. But maybe you’ve also just been really unlucky! What do you think?

    p.btn-row
      button.btn.btn-blue Unlucky
      button.btn.btn-green Trick Coin

---
> id: simulation
> goals: flip

{.fixme} Probabilities can give us a sense of how likely a certain outcome is, but they don’t predict the future. Even if the weather forecast says there is only a 5% chance of rain, it might still happen. And our coin doesn’t “remember” the previous outcomes: every flip has the same probability of landing heads, which doesn’t depend on how many heads there were previously.

{.fixme} However, probabilities become much more useful if we can repeat the same experiment many times. For example, we could flip the same coin 100 times and compare how many heads and tails there are in total. Here are three different coins – can you work out which one of them is biased?

::: column(width=320)

    x-coin-flip(size="120,200")

    p.btn-row.var
      button.btn.btn-red(@click="flip()") Flip
      button.btn.btn-red(@click="flip(100)") Flip 100 times
      button.btn.btn-red(@click="reset()") Reset

::: column(width=320)

    x-coordinate-system(width=320 height=320 y-axis="0,1.1,0.2" padding="8 8 20 28" axis-names="flips,proportion heads")

You've done ${numberOfFlips} flips and seen ${numberOfHeads} heads.

:::

---

{.fixme} In the simulation above, when we used a fair coin (blue) - which has an equal probability of landing on heads and tails. As you can see, the graphs of the fair coins slowly approach 0.5 as you flip them more and more times. But the first [[15 ± 5]] tosses seem completely random, for both the fair and the biased coins.

{.fixme} Maybe you performed 10 tosses, and 8 coins landed on heads - you might think that the coin is biased immediately! However, it’s too soon to make that conclusion - If you reset the simulation, and keep tossing the coin just 10 times, you’ll see that the graph formed can be very jagged, and each repetition is different from the previous.

{.fixme} However, If you keep tossing the coin for another 100, or 1000 tosses: you’ll see that the ratio of Heads will always approach 0.5, out actual probability.

{.fixme} In probability theory, this phenomenon is known as the “Law of Large numbers” - The frequency of an event occurring in an experiment might not exactly match the actual probability of that event, but as the experiment is repeated many times, this frequency approaches the actual probability.

{.fixme} Whenever performing an experiment to find the probability of an event, it’s very important to perform it enough times - Else you might select the wrong coin to wager on!


----------------------------------------------------------------------------------------------------


## Computing Probabilities

> section: computing
> sectionStatus: dev

TODO


----------------------------------------------------------------------------------------------------


## Probability Trees

> section: trees
> sectionStatus: dev

TODO


----------------------------------------------------------------------------------------------------


## Venn Diagrams

> section: simulations
> sectionStatus: dev

TODO
