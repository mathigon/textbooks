# Statistics and Data

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

## Casino Mathematics

> id: roulette
> sectionBackground: dark casino
> goals: rotate
> section: casino

    .roulette-wheel
      .layer-2.wheel
      .layer-3
      .layer-4.wheel
      .layer-5
      .ball
      svg(width=380 height=380): circle(cx=190 cy=190 r=190)
    x-gesture(target=".roulette-wheel" offset="-90,-100" slide="0,200")

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

    x-img(src="images/cocktails.jpg" alt="Cocktail Bar" width=300 height=185)

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

    figure: x-img(src="images/las-vegas.jpg" alt="Las Vegas Strip" width=760 height=345)

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



--------------------------------------------------------------------------------



## Data Visualisation

> section: visualisation
> sectionStatus: dev

TODO

---

## Center and Spread of Data

> section: center-and-spread
> sectionStatus: dev

TODO

---

## Sampling and Estimation

> section: sampling
> sectionStatus: dev

TODO

---

## Spreadsheets and Frequency Tables

> section: spreadsheets
> sectionStatus: dev

TODO

---

## Linear Models

> section: linear-models
> sectionStatus: dev

TODO
