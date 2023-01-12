# Sequences and Patterns

## Introduction

> section: introduction
> id: intro
> description: Learn about some of the most fascinating patterns in mathematics, from triangle numbers to the Fibonacci sequence and Pascal’s triangle.
> trailer: u2vwpDVj5rU
> color: "#F97E08"
> level: Intermediate
> next: fractals

Many professions that use mathematics are interested in one specific aspect – _finding patterns_,
and being able to predict the future. Here are two examples:

::: column(width=160 parent="padded-thin")

    x-img(src="images/volcanoes.jpg" width=160 height=160 alt="Volcano")

::: column(width=400)

Geologists around the world want to predict __earthquakes__ and __volcano eruptions__. They can try
to find patterns in historical data of from seismographs, of the atmosphere, or even animal
behaviour. One earthquake, for example, might trigger aftershocks later.

::: column(width=160)

    x-img(src="images/finance.jpg" width=160 height=160 alt="Stock Market Charts")

::: column(width=400)

Bankers also look at historical data of stock prices, interest rates and currency  exchange rates
to estimate how __financial markets__ might change in the  future. Being able to predict if the
value of a stock will go up or down can be extremely lucrative!

:::

Professional mathematicians use highly complex algorithms to find and analyse all these patterns,
but for now, let’s start with something much simpler.

---
> id: simple-patterns

### Simple Sequences

In mathematics, a [__sequence__](gloss:sequence) is a chain of numbers (or other
objects) that usually follow a particular pattern. The individual elements in a
sequence are called [__terms__](gloss:sequence-term).

Here are a few examples of sequences. Can you find their patterns and calculate
the next two terms?

{.text-center.s-orange.with-arrows.no-voice} _{.n}3_, _{.n}6 *{span.arrow}+3*_,
_{.n}9 *{span.arrow(hidden)}+3*_, _{.n}12 *{span.arrow(hidden)}+3*_,
_{.n}15 *{span.arrow(hidden)}+3*_, _{.n}[[18]] *{span.arrow(hidden)}+3*_
_{.n}[[21]] *{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-0 blank-1")}Pattern: “Add 3 to the previous
number to get the next one.”_

{.text-center.s-teal.with-arrows.no-voice} _{.n}4_, _{.n}10 *{span.arrow(hidden)}+6*_,
_{.n}16 *{span.arrow(hidden)}+6*_, _{.n}22 *{span.arrow(hidden)}+6*_,
_{.n}28 *{span.arrow(hidden)}+6*_, _{.n}[[34]] *{span.arrow(hidden)}+6*_,
_{.n}[[40]] *{span.arrow(hidden)}+6*_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Pattern: “Add 6 to the previous
number to get the next one.”_

{.text-center.s-purple.with-arrows.no-voice} _{.n}3_, _{.n}4 *{span.arrow(hidden)}+1*_,
_{.n}7 *{span.arrow(hidden)}+3*_, _{.n}8 *{span.arrow(hidden)}+1*_,
_{.n}11 *{span.arrow(hidden)}+3*_, _{.n}[[12]] *{span.arrow(hidden)}+1*_,
_{.n}[[15]] *{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Pattern: “Alternatingly add 1 and
add 3 to the previous number, to get the next one.”_

{.text-center.s-lime.with-arrows.no-voice} _{.n}1_, _{.n}2 *{span.arrow(hidden)}×2*_,
_{.n}4 *{span.arrow(hidden)}×2*_, _{.n}8 *{span.arrow(hidden)}×2*_,
_{.n}16 *{span.arrow(hidden)}×2*_, _{.n}[[32]] *{span.arrow(hidden)}×2*_,
_{.n}[[64]] *{span.arrow(hidden)}×2*_, …
_{span.pattern.reveal(when="blank-6 blank-7")} Pattern: “Multiply the previous
number by 2, to get the next one.”_

---
> id: simple-patterns-1

The dots (…) at the end simply mean that the sequence can go on forever. When
referring to sequences like this in mathematics, we often represent every term
by a special [variable](gloss:variable):

    p.text-center.s-orange
      for i in [1, 2, 3, 4, 5, 6, 7]
        span.math.n
          msub
            mi x
            mn= i
        | ,&nbsp;
      | …

The small number after the _x_ is called a __subscript__, and indicates the
position of the term in the sequence. This means that we can represent the *n*th
term in the sequence by [[`x_n`|`x_i`|`x_2`]].

    // You might think that it would be easier to label the terms in the
    // sequence as _a_, _b_, _c_, _d_, and so on. However you’ll eventually
    // [[run out of letters|reach 100|forget a letter]], while the sequence
    // might go on forever!

---
> id: triangles

### Triangle and Square Numbers

Sequences in mathematics don’t always have to be numbers. Here is a sequence
that consists of geometric shapes – triangles of increasing size:

::: column(width=24 parent="padded-thin")
{.text-center.no-voice} __1__

    include svg/triangle-1.svg
::: column(width=52)
{.text-center.no-voice} __3__

    include svg/triangle-2.svg
::: column(width=80)
{.text-center.no-voice} __6__

    include svg/triangle-3.svg
::: column(width=108)
{.text-center.b.no-voice} [[10]]

    include svg/triangle-4.svg
::: column(width=136)
{.text-center.b.no-voice} [[15]]

    include svg/triangle-5.svg
::: column(width=164)
{.text-center.b.no-voice} [[21]]

    include svg/triangle-6.svg
:::

---
> id: triangle-1

At every step, we’re adding one more row to the previous triangle. The length of
these new rows also increases by one every time. Can you see the pattern?

{.text-center.s-orange.with-arrows.no-voice} _{.n}1_, _{.n}3 *{span.arrow}+2*_,
_{.n}6 *{span.arrow}+3*_, _{.n}10 *{span.arrow}+4*_,
_{.n}15 *{span.arrow}+5*_, _{.n}21 *{span.arrow}+6*_
_{.n}[[28]] *{span.arrow.reveal(when="blank-0")}+7*_,
_{.n}[[36]] *{span.arrow.reveal(when="blank-1")}+8*_, …

---
> id: recursive

We can also describe this pattern using a special [formula](gloss:formula):

    p.text-center.s-orange
      span.n.md `x_n`
      | &nbsp;=&nbsp;
      span.n.md `x_(n-1)`
      | &nbsp;+&nbsp;
      em#t3 n

To get the _n_-th triangle number, we take the [[previous|first|next]] triangle
number and add _n_. For example, if _n_&nbsp;=&nbsp;${n}{n|5|2,20,1}, the
formula becomes `x_var("n") = x_var("n-1") + var("n")`.

---
> id: recursive-1

A formula that expresses `x_n` as a function of previous terms in the sequence
is called a [__recursive formula__](gloss:sequence-recursive). As long as you
know the [[first term|last term|second term]] in the sequence, you can calculate
all the following ones.

---
> id: squares

    hr

Another sequence which consists of geometric shapes are the __square numbers__.
Every term is formed by increasingly large squares:

::: column(width=24 parent="padded-thin squares")
{.text-center.no-voice} __1__

    include svg/square-1.svg
::: column(width=50)
{.text-center.no-voice} __4__

    include svg/square-2.svg
::: column(width=76)
{.text-center.no-voice} __9__

    include svg/square-3.svg
::: column(width=102)
{.text-center.b.no-voice} [[16]]

    include svg/square-4.svg
::: column(width=128)
{.text-center.b.no-voice} [[25]]

    include svg/square-5.svg
::: column(width=154)
{.text-center.b.no-voice} [[36]]

    include svg/square-6.svg
:::

---
> id: square-1

For the triangle numbers we found a recursive formula that tells you the _next_
term of the sequence as a function of of its _previous_ terms. For square
numbers we can do even better: a formula that tells you the *n*th term
directly, without first having to calculate all the previous ones:

{.text-center.s-purple} *{.n}`x_n`* = _{x-equation(solution="n^2")}_

---
> id: explicit

This is called an [__explicit formula__](gloss:sequence-explicit).
We can use it, for example, to calculate that the 13th square number is [[169]],
without first finding the previous 12 square numbers.

---
> id: definitions

    hr

Let’s summarise all the definitions we have seen so far:

::: .theorem
A [__sequence__](gloss:sequence) is a list of numbers, geometric shapes or other
objects, that follow a specific pattern. The individual items in the sequence
are called [__terms__](gloss:sequence-term), and represented by variables like
`x_n`.

A [__recursive formula__](gloss:sequence-recursive) for a sequence tells you the
value of the *n*th term as a function of [[its previous terms|the first term]].
You also have to specify the first term(s).

An [__explicit formula__](gloss:sequence-explicit) for a sequence tells you the
value of the *n*th term as a function of [[just _n_|the previous term]],
without referring to other terms in the sequence.
:::

---
> id: action-sequence

### Action Sequence Photography

In the following sections you will learn about many different mathematical
sequences, surprising patterns, and unexpected applications.

First, though, let’s look at something completely different: __action sequence
photography__. A photographer takes many shots in quick succession, and then
merges them into a single image:

    figure: x-img(src="images/action-1.jpg" width=640 height=320 alt="Skiing Jump")

Can you see how the skier forms a sequence? The pattern is not addition or
multiplication, but a geometric [transformation](gloss:rigid-transformation).
Between consecutive steps, the skier is both translated and
[[rotated|reflected|dilated]].

---
> id: action-sequence-1

Here are a few more examples of action sequence photography for your enjoyment:

::: column(width=320 parent="padded-thin")

    x-img(src="images/action-2.jpg" width=320 height=160 credit="© Ray Demski" lightbox alt="Jumping Volleyball Player")

::: column(width=320)

    x-img(src="images/action-3.jpg" width=320 height=160 credit="© Ray Demski" lightbox alt="Wind Surfing")

::: column(width=320)

    x-img(src="images/action-4.jpg" width=320 height=160 credit="© Marcio Abe" lightbox alt="Snowboard Jump")

::: column(width=320)

    x-img(src="images/action-5.jpg" width=320 height=160 credit="© Jason Halayko" lightbox alt="Mountain Bike Jump")

::: column(width=320)

    x-img(src="images/action-6.jpg" width=320 height=160 credit="© Jason Halayko" lightbox alt="Mountain Bike Jump")

::: column(width=320)

    x-img(src="images/action-7.jpg" width=320 height=160 lightbox alt="Kite Surfing")

:::



--------------------------------------------------------------------------------



## Arithmetic and Geometric Sequences

> section: arithmetic-geometric
> id: halley

::: column.grow

In 1682, the astronomer [Edmond Halley](bio:halley) observed an unusual
phenomenon: a glowing white object with a long tail that moved across the night
sky. It was a __comet__, a small, icy rock that is flying through space, while
leaving behind a trail of dust and ice.

Halley remembered that other astronomers had observed similar comets much
earlier: one in 1530 and another in 1606. Notice that the gap between two
consecutive observations is the same in both cases: [[76]] years.

::: column(width=320)

    x-img(width=320 height=256 src="images/halley.jpg" alt="Halley’s Comet")
    p.caption Image of Halley’s Comet,#[br]taken in 1986 on Easter Island

:::

---
> id: halley-1

Halley concluded that all three observations were in fact of the same comet –
which is now called _Halley’s comet_. It is orbiting around the sun and passes
Earth approximately every 76 years. He also predicted when the comet would be
visible next:

{.text-center.s-orange.s-large.with-arrows.no-voice} _{span.n}1530_,
_{span.n}1606 *{span.arrow}+76*_, _{.n}1682 *{span.arrow}+76*_,
_{.n}1758 *{span.arrow}+76*_, _{.n}[[1834]] *{span.arrow}+76*_,
_{.n}[[1910]] *{span.arrow}+76*_, _{.n}[[1986]] *{span.arrow}+76*_, …

---
> id: halley-2

Actually, the time interval is not always _exactly_ 76 years: it can vary by one
or two years, as the comet’s orbit is interrupted by other planets. Today we
know that Halley’s comet was observed by ancient astronomers as early as 240 BC!

    figure
      .row
        x-img(src="images/halley-1.jpg" width=160 height=180)
        x-img(src="images/halley-2.jpg" width=173 height=180 lightbox)
        x-img(src="images/halley-3.jpg" width=200 height=180 lightbox)
        x-img(src="images/halley-4.jpg" width=130 height=180 lightbox)
      p.caption Depictions of Halley’s comet throughout time: a Babylonian tablet (164 BC), a medival tapestry (1070s), a science magazine (1910) and a Soviet stamp (1986).

---
> id: ball

A different group of scientists is investigating the behaviour of a bouncing
tennis ball. They dropped the ball from a height of 10 meters and measured its
position over time. With every bounce, the ball loses some of its original
height:

    x-coordinate-system(padding="12 12 24 120" width=640 height=320 x-axis="0,7,1" label-suffix="s,m" axis-names="time,height")
      .tennis-ball
      .tennis-ball
    x-slider(steps=400 speed=0.5)

---
> id: ball-1
> goals: reveals

The scientists noticed that the ball loses 20% of its height after every bounce.
In other words, the maximum height of every bounce is 80% of the previous one.
This allowed them to predict the height of every following bounce:

{.text-center.s-teal.s-large.with-arrows.no-voice} _{span.n}10_,
_{span.n}8 *{span.arrow}×0.8*_, _{.n}[[6.4]] *{span.arrow}×0.8*_,
_{span.n}[[5.12]] *{span.arrow}×0.8*_,
_{span.n.reveal}4.096 *{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}3.277 *{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.621 *{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.097 *{span.arrow}×0.8*_*{span.reveal}, …*

---
> id: arithmetic-geometric

### Definitions

If you compare both these problems, you might notice that there are many
similarities: the sequence of Halley’s comet has the same
[[difference|ratio|product]] between consecutive terms, while the
sequence of tennis ball bounces has the same [[ratio|difference|product]]
between consecutive terms.

---
> id: arithmetic-geometric-1

Sequences with these properties have a special name:

::: column.grow
::: .theorem.s-red

    p.text-center: include svg/comet.svg

An [__arithmetic sequence__](gloss:arithmetic-sequence) has a constant
__{.m-red}difference *d*__ between consecutive terms.

The same number is added or subtracted to every term, to produce the next one.

:::
::: column.grow
::: .theorem.s-green

    p.text-center: include svg/ball.svg

A [__geometric sequence__](gloss:geometric-sequence) has a constant
__{.m-green}ratio *r*__ between consecutive terms.

Every term is multiplied or divided by the same number, to produce the next.

:::
:::

---
> id: arithmetic-geometric-select

Here are a few different sequences. Can you determine which ones are arithmetic,
geometric or neither, and what the values of _{.b.m-red}d_ and _{.b.m-green}r_
are?

::: column(width=330 parent="ag-select")

{.text-center.s-grey.s-small.no-voice} _{span.n}2_, _{span.n}4_, _{span.n}8_,
_{span.n}16_, _{span.n}32_, _{span.n}64_, …

::: column(width=320)

{.no-voice} is [[geometric|arithmetic|neither]]_{span.reveal(when="blank-0")}, with
ratio [[2]]._

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n}2_, _{span.n}5_, _{span.n}8_,
_{span.n}11_, _{span.n}14_, _{span.n}17_, …

::: column(width=320)

{.no-voice} is [[arithmetic|geometric|neither]]_{span.reveal(when="blank-2")}, with
difference [[3]]._

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n}17_, _{span.n}13_, _{span.n}9_,
_{span.n}5_, _{span.n}1_, _{span.n}–3_, …

::: column(width=320)

{.no-voice} is [[arithmetic|geometric|neither]]_{span.reveal(when="blank-4")}, with
difference [[-4]]._

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n}2_, _{span.n}4_, _{span.n}7_,
_{span.n}11_, _{span.n}16_, _{span.n}22_, …

::: column(width=320)

{.no-voice} is [[neither|arithmetic|geometric]]_{span.reveal(when="blank-6")}._

::: column(width=330)

{.text-center.s-grey.s-small.no-voice} _{span.n}40_, _{span.n}20_, _{span.n}10_,
_{span.n}5_, _{span.n}2.5_, _{span.n}1.25_, …

::: column(width=320)

{.no-voice} is [[geometric|arithmetic|neither]]_{span.reveal(when="blank-7")}, with
ratio [[0.5]]._

:::

---
> id: arithmetic-geometric-graph

To define an arithmetic or geometric sequence, we have to know not just the
common difference or ratio, but also the initial value (called `a`). Here you
can generate your own sequences and plot their values on a graph, by changing
the values of `a`, _d_ and _r_. Can you find any patterns?

::: column.ag-chart(width=320)

#### {.m-red} Arithmetic Sequence

{.text-center.no-voice} `a` = ${a}{a|2|-10,10,0.2}, _d_ = ${d}{d|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small.no-voice} _{span.n}${arithmetic(a,d,0)}_,
_{span.n}${arithmetic(a,d,1)}_, _{span.n}${arithmetic(a,d,2)}_,
_{span.n}${arithmetic(a,d,3)}_, _{span.n}${arithmetic(a,d,4)}_,
_{span.n}${arithmetic(a,d,5)}_, …

    x-coordinate-system(padding="12 12 24 40" width=320 height=240)
    x-gesture(target="#arithmetic-geometric-graph x-var" slide="100,0")

::: column.ag-chart.s-green(width=320)

#### {.m-green} Geometric Sequence

{.text-center.no-voice} `a` = ${b}{b|2|-10,10,0.2}, _r_ = ${r}{r|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small.no-voice} _{span.n}${geometric(b,r,0)}_,
_{span.n}${geometric(b,r,1)}_, _{span.n}${geometric(b,r,2)}_,
_{span.n}${geometric(b,r,3)}_, _{span.n}${geometric(b,r,4)}_,
_{span.n}${geometric(b,r,5)}_, …

    x-coordinate-system.green(padding="12 12 24 40" width=320 height=240)

:::

{.reveal(when="var-0 var-1 var-2 var-3")} Notice how all __{.m-red}arithmetic
sequences__ look very similar: if the difference is positive, they steadily
[[increase|decrease]], and if the difference is negative, they steadily
[[decrease|increase]].

{.reveal(when="blank-0 blank-1")} Geometric sequences, on the other hand, can
behave completely differently based on the values of `a` and *r*:

::: column.frame.blue.text-center.reveal(when="blank-0 blank-1" animation="pop" width=220 parent="padded-thin")

If [`r > 1`](action:set(2,2)), the terms will [[quickly get bigger|quickly decrease|get closer to
zero]], _{span.reveal(when="blank-2")}up to infinity. Mathematicians say that the sequence
[__diverges__](gloss:sequence-divergence)._

::: column.frame.blue.text-center.reveal(when="blank-2" animation="pop" delay=200 width=220)

If [`–1 < r < 1`](action:set(10,0.6)), the terms will always [[get closer to 0|decrease to negative
infinity|get smaller]]. _{span.reveal(when="blank-3")}We say that the sequence
[__converges__](gloss:sequence-convergence)._

::: column.frame.blue.text-center.reveal(when="blank-3" animation="pop" delay=200 width=220)

If [`r < -1`](action:set(3,-1.4)), the terms will alternate between positive and
negative, while their [[absolute value|inverse|difference]] gets bigger.

:::

{.reveal(when="blank-4 blank-5")} You’ll learn more about convergence and
divergence in the [last section](/course/sequences/convergence) of this course.


---
> id: arithmetic-geometric-recursive

### Recursive and Explicit Formulas

In the previous section, you learned that a [__recursive
formula__](gloss:sequence-recursive) tells you the value of each term as a
function of previous terms. Here are the recursive formulas for arithmetic and
geometric sequences:

::: column.grow

{.text-center.no-voice} `x_n =` [[`x_(n-1) + d`|`x_(n-1) × d`|`x_d + n`]]

::: column.grow

{.text-center.no-voice} `x_n =` [[`x_(n-1) × r`|`x_(n-1) - r`|`x_n - r + n`]]

:::

---
> id: arithmetic-geometric-explicit

One problem with recursive formulas is that to find the 100th term, for example,
we first have to calculate the previous 99 terms – and that might take a long
time. Instead, we can try to find an [__explicit formula__](gloss:sequence-explicit),
that tells us the value of the *n*th term directly.

::: column.grow

For __{.m-red}arithmetic sequences__, we have to add _d_ at every step:

{.ag-equation.no-voice} `x_1 =` `a`

{.ag-equation.no-voice} `x_2 =` `a + d`

{.ag-equation.no-voice} `x_3 =` `a + d + d`

{.ag-equation.no-voice} `x_4 =` *{x-equation(solution="a+d+d+d")}*

{.ag-equation.no-voice.reveal(when="eqn-0")} `x_5 =` *{x-equation(solution="a+d+d+d+d")}*

{.reveal(when="eqn-1")} At the *n*th term, we are adding [[`n-1`|`n`|`n+1`]]
copies of _d_, so the general formula is

{.ag-equation.no-voice.reveal(when="blank-0")} `x_n = a + d × (n-1)`.

::: column.grow

For __{.m-green}geometric sequences__, we have to multiply _r_ at every step:

{.ag-equation.no-voice} `x_1 = a`

{.ag-equation.no-voice} `x_2 = a × r`

{.ag-equation.no-voice} `x_3 = a × r × r`

{.ag-equation.no-voice} `x_4 =` *{x-equation(solution="a×r×r×r")}*

{.ag-equation.no-voice.reveal(when="eqn-2")} `x_5 =` *{x-equation(solution="a×r×r×r×r")}*

{.reveal(when="eqn-3")} At the *n*th term, we are multiplying [[`n-1`|`n`|`n+1`]]
copies of _r_, so the general formula is

{.ag-equation.no-voice.reveal(when="blank-1")} `x_n = a × r^(n-1)`.

:::

---
> id: arithmetic-geometric-explicit-1

Here is a summary of all the definitions and formulas you’ve seen so far:

::: column.grow
::: .theorem.s-red

An __{.m-red}arithmetic sequence__ has first term `a` and common difference `d`
between consecutive terms.

{.text-center} __Recursive formula__: `x_n = x_(n-1) + d`

{.text-center} __Explicit formula__: `x_n = a + d × (n-1)`

:::
::: column.grow
::: .theorem.s-green

A __{.m-green}geometric sequence__ has first term `a` and common ratio `r`
between consecutive terms.

{.text-center} __Recursive formula__: `x_n = x_(n-1) × r`

{.text-center} __Explicit formula__: `x_n = a × r^(n-1)`

:::
:::

Now let’s have a look at some examples where we can use all this!

---
> id: pay-it-forward
> goals: video

### Pay it Forward

Here is a short clip from the movie _Pay it Forward_, where 12-year-old Trevor
explains his idea for making the world a better place:

    figure
      x-video(src="https://static.mathigon.org/videos/pay-it-forward.mp4" poster="images/pay-it-forward-poster.jpg" width=640 height=360 controls audio)
      .caption Extract from “Pay It Forward” (2000), © Warner Bros. Entertainment

---
> id: pay-it-forward-1

The essence of Trevor’s idea is that, if everyone “pays it forward”, a single
person can have a huge impact on the world:

    figure: img.invert(src="images/pay-it-forward.png" width=700 height=220)

Notice how the number of people at every step forms a [[geometric sequence|arithmetic
sequence|triangle number]], _{span.reveal(when="blank-0")}with common ratio [[3]]:_

{.text-center.s-orange.with-arrows.no-voice.reveal(when="blank-1")} _{span.n}1_,
_{span.n}3 *{span.arrow}×3*_, _{span.n}9 *{span.arrow}×3*_,
_{span.n}[[27]] *{span.arrow}×3*_, _{span.n}[[81]] *{span.arrow}×3*_,
_{span.n}[[243]] *{span.arrow}×3*_, …

---
> id: pay-it-forward-2

Using the [explicit formula](gloss:sequence-explicit) for geometric sequences,
we can work out how many new people are affected at any step:

{.text-center} `x_n` = _{x-equation(solution="3^(n-1)")}_

---
> id: pay-it-forward-3

The number of people increases incredibly quickly. In the 10th step, you would
reach 19,683 new ones, and after 22 steps you would have reached more people
than are currently alive on Earth.

This sequence of numbers has a special name: the __powers of 3__. As you can
see, every term is actually just a different [power](gloss:powers) of 3:

{.text-center.s-orange.no-voice} _{span.n}`3^0`_, _{span.n}`3^1`_, _{span.n}`3^2`_,
_{span.n}`3^3`_, _{span.n}`3^4`_, _{span.n}`3^5`_, …

---
> id: millionaire

### Who wants to be a Millionaire?

{.todo} COMING SOON!

    // Two siblings, Anna and Thomas, are receiving pocket money from their parents.
    // They can choose between two different options:

    // * Thomas is receiving $1 in the first month, $2s in the second month, $3 in the
    //   third month, and so on. Every month, he receives $1 more than in the previous
    //   one.
    // * Anna receives 1¢ in the first month, 2¢ in the second month

    // img.text-wrap(src="images/dishes.jpg" style="shape-outside: url(images/dishes.png)" width=280 height=276)

    // In order to make some additional pocket money, you decided to make a deal with
    // your parents: for appropriate payment, you’ll do every possible chore around
    // the house – washing the dishes, laundry, taking out the trash or walking the
    // dog.

    // The payment system works like this: on the first day, you get 1 cent. On the
    // second day, you get 2 cents – twice as much as before. On the next day you’ll
    // get 4 cents. Every day, your payment doubles.

    // 1¢ is not a lot of money – and neither are 2¢ or 4¢, especially
    // considering how much work you’re doing. But the amount will slowly increase.
    // How long do you think will it take until you’ve made $100? How long until
    // you’ve made it to 1 Million?

    // guess fields

    // Let’s try to calculate it mathematically! Just like before, your salary
    // follows an exponential model, because it changes by a constant ratio every
    // day (times 2). On day `x`, you’ll get `2^x` cents.

    // | __day__ | __payment__  |
    // | ------- | ------------ |
    // | 1       | $ 0.01       |
    // | 2       | $ 0.02       |
    // | 3       | $ 0.04       |
    // | 4       | $ [[0.08]]   |
    // | 5       | $ [[0.16]]   |
    // | 6       | $ [[0.32]]   |
    // | 7       | $ [[0.64]]   |
    // | 8       | $ 1.28       |
    // | 9       | $ 2.56       |
    // | 10      | $ 5.12       |
    // | 11      | $ 10.24      |
    // | 12      | $ [[20.48]]  |
    // | 13      | $ [[40.96]]  |
    // | 14      | $ [[81.92]]  |
    // | 15      | $ [[163.84]] |
    // | 16      | $ 327.68     |
    // | 17      | $ 655.36     |
    // | 18      | $ 1,310.72   |

    // One sibling gets $${a}{a|1|1,10,1} every day. The other sibling
    // gets ${b}{b|1|1,10,1}¢ every day.

    // As you can see, your daily payment start low but then grow rapidly. After 15
    // days you’ve reached $100. After less than a month you’re making more than 1
    // million per day, and after 2 months you’d have made more than _all the money
    // on Earth_. :1f4b0: :1f37e: :1f911:

    // Exponential growth can be truly XXXXX. Even if they start really slowly, they
    // will eventually speed up a lot, and overtake any possible linear model. Most
    // importantly, us humans tend to be very bad at estimating just _how fast_
    // exponential models can grow. Or are we?

---
> id: chessboard

### The Chessboard Problem

{.todo} COMING SOON!

    // The game of chess was invented in India, many hundreds of years ago. According
    // to legend, the Indian king loved the game so much that he invited its inventor
    // to his palace and promised him any present they ask for.

    // The inventor had just one simple request: rice. He wanted the king to place
    // one grain of rice on the first square of the chess board, two grains on the
    // second, four grains of the third, eight grains on the fourth, and so on. Every
    // new square should have twice as many grains of rice as the previous one.

    // The king, who was very wealthy, agreed immediately and asked his servants to
    // fetch bags of rice. A chessboard has 64 squares, so how many grains of rice
    // does the king need in total?

    // You might have noticed that the number of grains of rice form a geometric sequence.
    // The first term is [[1]], and the common ratio is [[2]]. Using the results from
    // above, we can calculate how many grains of rice there will be on the last square:

    // {.text-center} `a_64 = 1 * 2^63 =` 9 223 372 036 854 775 808

    // That’s 9 billion billion grains of rice! In total, they would weight about
    // 100 billion tonnes – or 100 times the weight of Mount Everest, the tallest
    // mountain on Earth.



--------------------------------------------------------------------------------



## Figurate Numbers

> section: figurate
> id: figurate

The name for [geometric sequences](gloss:geometric-sequence) is pretty
confusing, because they don’t have anything to do with geometry. In fact, the
name was developed hundreds of years ago, when mathematicians thought about
_multiplication_ and _square roots_ in a much more geometric way.

However, there are many other sequences that _are_ based on certain geometric
shapes – some of which you already saw in the [introduction](/course/sequences/introduction).
These sequences are often called [__figurate numbers__](gloss:figurate-numbers),
and in this section we will have a closer look at some of them.

---
> id: triangle-numbers

### Triangle Numbers

The __triangle numbers__ are generated by creating triangles of progressively
larger size:

::: column(width=24 parent="padded-thin")
{.text-center.no-voice} __1__

    include svg/triangle-1.svg
::: column(width=52)
{.text-center.no-voice} __3__

    include svg/triangle-2.svg
::: column(width=80)
{.text-center.no-voice} __6__

    include svg/triangle-3.svg
::: column(width=108)
{.text-center.no-voice} __10__

    include svg/triangle-4.svg
::: column(width=136)
{.text-center.no-voice} __15__

    include svg/triangle-5.svg
::: column(width=164)
{.text-center.no-voice} __21__

    include svg/triangle-6.svg
:::

You’ve already seen the recursive formula for triangle numbers:
`x_n =` [[`x_(n-1) + n`|`n^2 - 1`|`2 × x_(n-1) - 1`]].

---
> id: billiard-pool

It is no coincidence that there are always 10 pins when bowling or 15 balls when
playing billiards: they are both triangle numbers!

::: column(width=320)

    x-img(src="images/bowling.jpg" width=320 height=240)

::: column(width=320)

    x-img(src="images/billiard.jpg" width=320 height=240)

:::

---
> id: triangle-proof

Unfortunately, the recursive formula is not very helpful if we want to find the
100th or 5000th triangle number, without first calculating all the previous
ones. But, like we did with arithmetic and geometric sequences, we can try to
find an explicit formula for the triangle numbers.

{.todo} COMING SOON: Animated Proof for the Triangle Number Formula

    // ::: column(width=300)

    // svg(width=300 height=300)
      g

    // ::: column.grow
    // Let’s start with a triangle of size ${x}{x|5|1,10,1}.

    // First, we need to make a second copy of the triangle.

    // Now we can rearrange the two triangles, to fit together in a rectangle.

    // The size of the rectangle is ${x} × ${x + 1}, so it must have an area of
    // ${x * (x + 1)}

    // Since the rectangle is twice as large as the original triangle, we know that
    // the ${n}th triangle number must be ${x*(x+1)/2}.

    // In general, the *n*th triangle number is `T_n = (n × (n + 1)) / 2`.
    // :::

---
> id: triangle-sums

Triangle numbers seem to pop up everywhere in mathematics, and you’ll see them
again throughout this course. One particularly interesting fact is that _any_
whole number can be written as the sum of at most three triangle numbers:

::: column(width=140 parent="triangle-sum")
{.text-center.no-voice} ${n}{n|42|1,100,1}

    svg.t-sum(width=140 height=140)
    x-gesture(target="#triangle-sums x-var" slide="100,0")

::: column(width=40)
{.text-center} =
::: column(width=140)
{.text-center.no-voice} __{.t-sum}__

    svg.t-sum.red(width=140 height=140)

::: column(width=40)
{.text-center} +
::: column(width=140)
{.text-center.no-voice} __{.t-sum}__

    svg.t-sum.blue(width=140 height=140)

::: column(width=40)
{.text-center} +
::: column(width=140)
{.text-center.no-voice} __{.t-sum}__

    svg.t-sum.green(width=140 height=140)

:::

{.reveal(when="slide")} The fact that this works for _all_ whole numbers was
first proven in 1796 by the German mathematician [Carl Friedrich
Gauss](bio:gauss) – at the age of 19!

---
> id: triangle-investigate

::: .box.blue

#### Problem Solving

What is the sum of the first 100 positive [integers](gloss:integer)? In other
words, what is the value of

{.text-center} `1 + 2 + 3 + 4 + 5 + … + 97 + 98 + 99 + 100`?

Rather than manually adding up everything, can you use the [triangle
numbers](gloss:triangle-numbers) to help you? What about the sum of the first
1000 positive integers?

:::

---
> id: square-numbers

### Square and Polygonal Numbers

Another sequence that is based on geometric shapes are the __square numbers__:

{.text-center.s-purple.with-arrows.no-voice} _{.n}1_,
_{.n}4 *{span.arrow.reveal(when="blank-4")}+3*_,
_{.n}9 *{span.arrow.reveal(when="blank-4")}+5*_,
_{.n}16 *{span.arrow.reveal(when="blank-4")}+7*_,
_{.n}[[25]] *{span.arrow.reveal(when="blank-4")}+9*_,
_{.n}[[36]] *{span.arrow.reveal(when="blank-4")}+11*_,
_{.n}[[49]] *{span.arrow.reveal(when="blank-4")}+13*_,
_{.n}[[64]] *{span.arrow.reveal(when="blank-4")}+15*_, …

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} You can calculate the numbers
is this sequence by squaring every whole number (`1^2`, `2^2`, `3^2`, …), but it
turns out that there is another pattern: the differences between consecutive
square numbers are the [[odd numbers|triangle numbers|integers]] in increasing
order!

---
> id: square-numbers-1

::: column.grow

The reason for this pattern becomes apparent if we actually draw a square. Every
step adds one row and one column. The size of these “corners” starts at 1 and
increases by 2 at every step – thereby forming the sequence of odd numbers.

This also means that the *n*th square number is just the sum of the first *n*
odd numbers! For example, the sum of the first 6 odd numbers is

{.text-center} `1 + 3 + 5 + 7 + 9 + 11 =` [[36]].

::: column(width=240)

    include svg/square-steps.svg
    x-slider(steps=6 initial=6 no-play)

:::

---
> id: square-numbers-2

In addition, every square number is also the sum of two consecutive [triangle
numbers](gloss:triangle-numbers). For example, ${n×n}{n|4|1,20,1} =
${n×(n+1)/2} + ${n×(n-1)/2}. Can you see how we can split every square along
its diagonal, into two triangles?

---
> id: polygon-numbers

::: column(width=300)

    svg(width=300 height=260)
    .text-center #[msub #[mi x]#[mn]]#[mo(value="=") =]#[mn]
    x-slider(steps=11 initial=3 no-play)

::: column.grow

After triangle and square numbers, we can keep on going with larger
[polygons](gloss:polygon). The resulting number sequences are called __polygonal
numbers__.

For example, if we use polygons with ${k}{k|5|3,10,1} sides, we get the sequence
of __${polygonName(k)} numbers__.

Can you find recursive and explicit formulas for the *n*th polygonal number
that has _k_ sides? And do you notice any other interesting patterns for larger
polygons?

:::

---
> id: tetrahedral

### Tetrahedral and Cubic Numbers

Of course, we also don’t have to limit ourselves to two-dimensional shapes and
patterns. We could stack spheres to form small pyramids, just like how you would
stack oranges in a supermarket:

::: column(width=64 parent="padded-thin")
{.text-center.no-voice} __1__

    x-tetrahedron(size=160 layers=1 style="margin: 0 -48px")

::: column(width=88)
{.text-center.no-voice} __[[4]]__

    x-tetrahedron(size=160 layers=2 style="margin: 0 -36px")

::: column(width=112)
{.text-center.no-voice} __[[10]]__

    x-tetrahedron(size=160 layers=3 style="margin: 0 -24px")

::: column(width=136)
{.text-center.no-voice} __20__

    x-tetrahedron(size=160 layers=4 style="margin: 0 -12px")

::: column(width=160)
{.text-center.no-voice} __35__

    x-tetrahedron(size=160 layers=5)

:::

---
> id: tetrahedral-1

Mathematicians often call these pyramids [__tetrahedra__](gloss:tetrahedron),
and the resulting sequence [__tetrahedral numbers__](gloss:tetrahedral-numbers).

{.todo} COMING SOON: More on Tetrahedral numbers, Cubic numbers, and the 12
days of Christmas.



--------------------------------------------------------------------------------



## Sequences as Functions

> section: functions
> sectionStatus: dev

TODO



--------------------------------------------------------------------------------



## Fibonacci Numbers

> section: fibonacci
> id: rabbits

Imagine that you’ve received a pair of baby rabbits, one male and one female.
They are very special rabbits, because they never die, and the female one gives
birth to a new pair of rabbits exactly once every month (always another pair of
male and female).

::: x-slideshow

    .stage.rabbits(slot="stage")
      .rabbits-wrap.s-orange.s-small
        svg(width=760 height=456 viewBox="0 0 760 456")
          line(y1=51  x2=760 y2=51)
          line(y1=130 x2=760 y2=130)
          line(y1=209 x2=760 y2=209)
          line(y1=287 x2=760 y2=287)
          line(y1=366 x2=760 y2=366)
          path(d="M84,91c223.68,0,405,7,405,45")
          path(d="M84,170c124.82,0,226,14,226,45")
          path(d="M84,248c74.56,0,135,20.15,135,45")
          path(d="M534,248c74.56,0,135,20.15,135,45")
          path(d="M84,327a45,45,0,0,1,45,45")
          path(d="M354,327a45,45,0,0,1,45,45")
          path(d="M534,327a45,45,0,0,1,45,45")
          polygon(points="489 150 481 130 489 135 497 130 489 150")
          polygon(points="310 229 302 209 310 214 318 209 310 229")
          polygon(points="219 307 211 287 219 292 227 287 219 307")
          polygon(points="669 307 661 287 669 292 677 287 669 307")
          polygon(points="129 386 121 366 129 371 137 366 129 386")
          polygon(points="399 386 391 366 399 371 407 366 399 386")
          polygon(points="579 386 571 366 579 371 587 366 579 386")

        img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="left: 2%; top: 0%; width: 7%")

        img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 13%")

        img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 30%")
        img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 61%; top: 34%; width: 7%")

        img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 47%")
        img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 37%; top: 51%; width: 7%")
        img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 47%")

        img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 64%")
        img.rabbit(src="images/rabbits-4.svg" width=85 height=75 style="left: 25%; top: 68%; width: 7%")
        img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 35%; top: 64%")
        img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 64%")
        img.rabbit(src="images/rabbits-5.svg" width=85 height=75 style="left: 85%; top: 68%; width: 7%")

        img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 81%")
        img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 13%; top: 85%; width: 7%")
        img.rabbit(src="images/rabbits-4.svg" width=85 height=75 style="left: 23%; top: 81%")
        img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 35%; top: 81%")
        img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="left: 49%; top: 85%; width: 7%")
        img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 81%")
        img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 73%; top: 85%; width: 7%")
        img.rabbit(src="images/rabbits-5.svg" width=85 height=75 style="left: 83%; top: 81%")

        .n(style="top: 0%") 1
        .n(style="top: 15%") 1
        .n(style="top: 32%") 2
        .n(style="top: 49%") 3
        .n(style="top: 66%") 5
        .n(style="top: 84%") 8

In the first month, the rabbits are very small and can’t do much – but they grow very quickly.

After one month, the rabbits are grown up and can start mating…

… and after another month, they will give birth to their first pair of kids. You now have two pairs
of rabbits.

In the next month, your pair of rabbits will give birth to another couple. Meanwhile, the first pair
of kids have grown up. You now have three pairs in total.

In the fifth month, your original pair of rabbits will give birth to a new pair. At the same time,
their first pair of kids is now old enough to give birth to grandchildren. You now have five pairs
of rabbits.

In the sixth month, there are three more couples that give birth: the original one, as well as their
first two pairs or kids.

:::

---
> id: rabbits-1

{.r} In the following month you would have 13 pairs of rabbits: the 8 ones from the
previous month, plus 5 new sets of babies. Can you detect a pattern in this
sequence? [Continue](btn:next)

---
> id: rabbits-2

The number of rabbits in a particular month is [[the sum of the two previous
numbers|twice the previous number]]. _{span.reveal(when="blank-0")}In other
words, you have to add the *previous two* terms in the sequence, to get the
next one. The sequence starts with two 1s, and the [recursive
formula](gloss:sequence-recursive) is_

{.text-center.s-orange.reveal(when="blank-0")} *{span.n}`x_n`* =
*{span.n}`x_(n-1)`* + *{span.n}`x_(n-2)`*

---
> id: rabbits-3

Can you calculate the number of rabbits after a few more months?

{.text-center.s-orange} _{.n}1_, _{.n}1_, _{.n}2_, _{.n}3_, _{.n}5_, _{.n}8_,
_{.n}[[13]]_, _{.n}[[21]]_, _{.n}[[34]]_, _{.n}[[55]]_, _{.n}[[89]]_,
_{.n}[[144]]_, …

{.reveal(when="blank-5")} So after 12 months, you’ll have 144 pairs of rabbits!

    figure.reveal(when="blank-5")
      x-img(src="images/rabbits.jpg" width=600 height=230)

---
> id: fibonacci

This sequence of numbers is called the [__Fibonacci
Sequence__](gloss:fibonacci-numbers), named after the Italian mathematician
[Leonardo Fibonacci](bio:fibonacci).

::: column.grow
When Fibonacci was born in 1175, most people in Europe still used the [Roman
numeral system](gloss:roman-numerals) for numbers (like XIV or MCMLIV).
Fibonacci’s father was a merchant, and together they travelled to Northern
Africa as well as the Middle East. It was there that Fibonacci first learned the
[Arabic numeral system](gloss:arabic-numerals).

When he returned to Italy, Fibonacci wrote a book called _Liber Abaci_ (Latin
for “The Book of Calculations”), where he first introduced the new Arabic
numerals to European merchants. They were an immediate success – and we still
use them today.

::: column(width=300)

    x-img(src="images/fibonacci.jpg" width=300 height=300)
    .caption Portrait of Leonardo Fibonacci

:::

On one of the pages in his book, he also investigated the breeding patterns of
rabbits – that’s why the Fibonacci numbers were named after him.

    figure
      x-img(src="images/liber-abaci.jpg" width=440 height=290 lightbox)
      p.caption Pages from Fibonacci’s #[em Liber Abaci]

---
> id: spirals

Of course, the Fibonacci numbers are not how rabbits _actually_ populate in real
life. Rabbits don’t have exactly one male and one female offspring every single
month, and we haven’t accounted for rabbits dying eventually.

But it turns out that there are many other places in nature where Fibonacci
numbers _do_ appear: for example the spirals in plants. Can you count how many
spirals there are in each direction?

::: column(width=320)

    x-select.segmented
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/pinecone.jpg)")
      .clockwise(style="background-image: url(images/pinecone-1.jpg)")
      .anticlockwise(style="background-image: url(images/pinecone-2.jpg)")

{.text-center} This pine cone has [[8]] clockwise spirals and [[13]]
counterclockwise spirals.

::: column(width=320)

    x-select.segmented
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/sunflower.jpg)")
      .clockwise(style="background-image: url(images/sunflower-1.jpg)")
      .anticlockwise(style="background-image: url(images/sunflower-2.jpg)")

{.text-center.reveal(when="blank-0 blank-1")} This sunflower has 34 clockwise
spirals and 55 counterclockwise spirals.

:::

---
> id: spirals-1

In both cases, the numbers of spirals are consecutive Fibonacci numbers. The
same is true for many other plants: next time you go outside, count the number
of petals in a flower or the number of leaves on a stem. Very often you’ll find
that they are Fibonacci numbers!

Of course, this is not just a coincidence. There is an important reason why
nature likes the Fibonacci sequence, which you’ll learn more about later.

---
> id: bees

::: column(width=320)

    x-select.segmented
      div(data-value="male") Male
      div(data-value="female") Female
    .bees
      img(src="images/bees-male.png")
      img(hidden src="images/bees-female.png")

::: column.grow

Fibonacci numbers also appear in the populations of honeybees.

In every bee colony there is a single _queen_ that lays many eggs. If an egg is
fertilised by a male bee, it hatches into a __female__ bee. If it is not
fertilised, it hatches into a __male__ bee (called a drone).

This means that female bees have [[two parents|one parent]], while male bees
only have [[one parent|two parents]].

{.reveal(when="blank-0 blank-1")} If we draw the ancestry tree of a bee, the
number of parents, grandparents, great-grandparents, and earlier generations are
always Fibonacci numbers!

{.i.lgrey.reveal(when="blank-0 blank-1" delay=400)} Occasionally, young female
bees are fed with special food called “royal jelly”. In that case, they turn
into queens and will fly away to start a new hive.

:::

---
> id: golden-spiral

### The Golden Ratio

Just like the [triangle](gloss:triangle-numbers) and [square
numbers](gloss:square-numbers), and other sequences we’ve seen before, the
Fibonacci sequence can be visualised using a geometric pattern:

::: x-slideshow.golden-spiral

    .stage(slot="stage"): include svg/spiral.svg

We start with two small squares of size 1.

Next, we add a new square of size 2, to form a larger rectangle.

Next, we add a square of size 3, to form an even larger rectangle.

The next square has size 5. Can you see that we’re recreating the Fibonacci numbers?

If we continue adding squares, they will have size 8, 13, 21, and so on.

You might have noticed that, as the rectangles get larger, they seem to start “spiraling” outwards.
We can even visualise this by drawing a perfect spiral that connects the corners of the squares.

:::

---
> id: golden-ratio

At every step, the squares form a larger rectangle. Its width and height are
always two consecutive Fibonacci numbers. The __aspect ratio__ of the rectangle
is the ratio of its width and its height:

::: column(width=100 parent="padded-thin golden-rect")

    include svg/golden-1.svg

{.text-center.no-voice} `2/1` = 2
::: column(width=100)

    include svg/golden-2.svg

{.text-center.no-voice} `3/2` = 1.5
::: column(width=100)

    include svg/golden-3.svg

{.text-center.no-voice} `5/3` = 1.666…
::: column(width=100)

    include svg/golden-4.svg

{.text-center.no-voice} `8/5` = 1.6
::: column(width=100)

    include svg/golden-5.svg

{.text-center.no-voice} `input(13) / input(8) reveal(= 1.625, "blank-0 blank-1")`
::: column(width=100)

    include svg/golden-6.svg

{.text-center.no-voice} `input(21) / input(13) reveal(= 1.62…, "blank-2 blank-3")`
:::

---
> id: golden-ratio-1
> goals: img-0 img-1

Notice how, as we add more and more squares, the aspect ratio seems to get
closer and closer to a specific number around 1.6. This number is called the
[__golden ratio__](gloss:golden-ratio) and is usually represented by the Greek
letter `φ` (“phi”). Its exact value is

{.text-center} `(1 + sqrt(5))/2 = 1.61803398875…`

Many people believe that the golden ratio is particularly aesthetically
pleasing. That’s why it is often used by artists and architects – like in these
two examples:

::: column(width=320)

    .golden-art
      x-img(src="images/pantheon.jpg" width=320 height=198)
      img(src="images/pantheon-box.png" width=320 height=198)
    x-gesture(target=".golden-art")

{.caption} The Greek sculptor Phidias is said to have used the golden ratio
when designing the _Parthenon_ in Athens. The first letter of his name, `φ`, is
the symbol we now use for the golden ratio.

::: column(width=320)

    .golden-art
      x-img(src="images/dali.jpg" width=320 height=198)
      img(src="images/dali-box.png" width=320 height=198)

{.caption} _The Sacrament of the Last Supper_, by Spanish artist Salvador Dalí,
is one of many paintings in the golden ratio. In the background, you can also
see a large [dodecahedron](gloss:dodecahedron).

:::

---
> id: golden-ratio-2

We can approximate the golden ratio by [[dividing|adding|subtracting]] two
consecutive Fibonacci numbers.

{.reveal(when="blank-0")} However, it turns out that the exact value of `φ`
can’t be written as a simple fraction: it is an [__irrational
number__](gloss:irrational-numbers), just like [`π`](gloss:pi) and `sqrt(2)` and
some other numbers you’ve seen before.

---
> id: sunflower-growing

### Fibonacci Spirals

::: column.grow

The golden ratio explains why Fibonacci numbers appear in nature, like the
sunflower and pine cone you saw at the beginning of this section.

Both these plants grow outwards from their center (a part of the plant called
the _meristem_). As new seeds, leaves or petals are added, they push the
existing ones further outwards.

Move the slider on the right to visualise how a plant grows. Notice how every
leaf is added at a different rotation than the previous one. The angle between
two consecutive leafs is always the same.

::: column(width=300)

    svg.petals(width=300 height=300)
      circle(r=1 cx=150 cy=150)
      - var i = 0
      while i < 40
        path(d="M166,158A20,20,0,0,1,150,150a20,20,0,0,1,32,0A20,20,0,0,1,166,158Z")
        - i += 1

    x-slider(steps=39 speed=0.5)

:::

---
> id: sunflower-spiral

It is important for flowers to pick a suitable angle: the leaves or seeds have
to be approximately equally spaced so that they get the largest amount of
sunlight and nutrients. In the diagram below, you can explore what a sunflower
might look like with different angles between its seeds:

    // Notice how even tiny changes to the angle can produce a completely different arrangement:

::: x-slideshow

    .sunflower-spiral(slot="stage")
      .value
      x-slider(steps=1000 continuous speed=0.1 no-play)
      svg(width=400 height=400 viewBox="0 0 400 400")

If the angle is [0°](action:set(0)), all seeds will grow in a single long row away from the center.

If the angle is [`1/2`](action:set(0.5)) of a full a rotation (180°), the seeds will alternate
between two separate “arms” that move away from the center.

If the rotation is another fractional proportion of 360°, for example [`2/5`](action:set(2/5)) or
[`1/3`](action:set(1/3)) or [`3/8`](action:set(3/8)), then the number of “arms” will be the same as
the [[denominator|numerator|prime factor]] of that fraction.

Unfortunately “arms” are bad, because they mean that the seeds are not evenly distributed: all of
the space between the arms is wasted. But if [rational numbers](gloss:rational-numbers) aren’t going
to work, let’s try [irrational numbers](gloss:irrational-numbers)!

One example of an irrational number is [`pi`](gloss:pi). But if the angle between seeds is
[`1/pi`](action:set(0.31831)) of 360°, we still seem to get arms: 22 of them. That’s because the
fraction `22/7 = 3.1429…` is a pretty good approximation for `pi`. What we really need is an
irrational number that _can’t_ be closely approximated by a simple fraction.

It turns out that the [golden ratio](gloss:golden-ratio) is just that: the “most irrational” of all
irrational numbers. If the angle between seeds is [`1/phi`](action:set(0.6180339)) of 360°, they
seem to be almost perfectly spaced. This is precisely the angle that plants around the world are
using.

:::

---
> id: sunflower-spiral-1

::: column(width=240)

    x-img(src="images/flowers.jpg" width=240 height=400)

::: column.grow

You might remember from above that the ratios of consecutive Fibonacci numbers
get closer and closer to the golden ratio – and that’s why, if you count the
number of spirals in a plant, you will often find a Fibonacci number.

It is important to remember that nature doesn’t know about Fibonacci numbers.
Nature also can’t solve equations to calculate the golden ratio – but over the
course of millions of years, plants had plenty of time to try out different
angles and discover the best one.

Plants and animals always want to grow in the most efficient way, and that is why
nature is full of regular, mathematical patterns.

:::

---
> id: lucas-numbers

### Fibonachos

So far, we have only used the recursive equation for Fibonacci numbers. There
actually is an explicit equation, too – but it is much more difficult to
find:

{.text-center} `F_n = 1/(  sqrt(5)) ( ((1 + sqrt(5))/2)^n - ((1 - sqrt(5))/2)^n )`

We could also try picking different starting points for the Fibonacci numbers.
For example, if we start with 2, 1, … rather than 1, 1, … we get a sequence
called the __Lucas numbers__.

It turns out that, whatever two starting numbers you pick, the resulting
sequences share many properties. For example, the ratios of consecutive terms
will _always_ [converge](gloss:sequence-convergence) to the golden ratio.

{.text-center.s-purple.s-small.no-voice}
${a}{a|1|0,10,1}, ${b}{b|1|0,10,1}, _{span.n}${a+b}_, _{span.n}${a+2×b}_,
_{span.n}${2×a+3×b}_, _{span.n}${3×a+5×b}_, _{span.n}${5×a+8×b}_,
_{span.n}${8×a+13×b}_, …

---
> id: fibonacci-puzzles

There are many other puzzles, patterns and applications related to Fibonacci
numbers. Here are a few examples, which you can try yourself:

::: .box.blue

#### Problem solving

__1. Fibonacci Divisibility__

(a) Which Fibonacci numbers are even? Is there a pattern to where they are
positioned along the sequence? Can you explain why?

(b) Which Fibonacci numbers are divisible by 3 (or divisible by 4)? What do you
notice?

    hr

__2. Fibonacci Sums__

What happens if you add up any three consecutive Fibonacci numbers? Can you
explain why?

    hr

__3. Fibonacci Staircases__

When walking up the stairs, I can either take single steps or leap over two
steps at a time. This means that there are many different possibilities for how I
could go up a staircase. For example, if there are 5 steps, I have 8 different
choices:

    figure: x-img(src="images/stairs.svg" width=530 height=200)

How many choices are there for staircase with 6, 7 or 8 steps? Can you detect
a pattern? And how is this related to the Fibonacci numbers?

:::

    //- figure
    //-   x-img(src="images/fibonachos.jpg" width=600 height=282)
    //-   p.caption © FoxTrot, by Bill Amend



--------------------------------------------------------------------------------



## Special Sequences

> section: special
> id: special-intro


In addition to [arithmetic](gloss:arithmetic-sequence) and
[geometric](gloss:geometric-sequence) sequences, [Fibonacci
numbers](gloss:fibonacci-numbers) and [figurate numbers](gloss:figurate-numbers),
there are countless interesting sequences that don’t follow a similar, regular
pattern.

---
> id: primes

### Prime Numbers

One example that you’ve already seen before are the [__Prime
numbers__](gloss:prime). We say that a number is _prime_ if it has no
[factors](gloss:factor) [[other than 1 and itself|other than 1 and 2|and no
multiples]].

---
> id: primes-1

Here are the first few prime numbers:

{.text-center.s-teal} _{.n}2_, _{.n}3_, _{.n}5_, _{.n}7_, _{.n}11_,
_{.n}[[13]]_, _{.n}[[17]]_, _{.n}[[19]]_, …

---
> id: primes-2
> goals: p2 p3 p5 p7

Unfortunately, prime numbers don’t follow a simple pattern or recursive
formula. Sometimes they appear directly next to each other (these are called
[twin primes](gloss:twin-primes)), and sometimes there are huge gaps between
them. They seem to be distributed almost randomly!

Prime numbers also don’t have a simple geometric representation like
[triangle](gloss:triangle-numbers) or [square numbers](gloss:square-numbers),
but with a bit of work we can reveal interesting patterns:

::: column(width=320)

    .eratosthenes
      .deleted 1
      .l-red 2
      - var i = 3
      while i <= 100
        div= i
        - i += 1
    x-gesture(target=".eratosthenes .l-red")

{.caption} If we cross out all multiples of small integers, the remaining
numbers must all be prime. This method is called the [__Sieve of
Eratosthenes__](gloss:sieve-eratosthenes).

::: column(width=320)

    x-coordinate-system(width=320 height=320 padding="8 8 20 24" axis-names="x,number of primes less than x")

{.caption} If we draw a chart that increases by 1 whenever there is a prime
number, we get a “stepped” function with fascinating properties.
:::

---
> id: primes-3

You can learn more about these and other properties of prime numbers in our
course on [Divisibility and Primes](/course/divisibility/primes). They are
some of the most important and most mysterious concepts in mathematics!

    figure: img(src="images/primes.svg" width=480 height=156)

---
> id: perfect

### Perfect Numbers

To determine if a number is [prime](gloss:prime), we have to find all of its
[factors](gloss:factor). Usually we would _multiply_ these factors to get back
the original number, but let’s see what happens if we _add up_ all factors
of a number (excluding the number itself):

    - list = function(n) { return Array.apply(null, {length: n}).map((x,i) => i+1); }
    - factors = function(n) { return list(n-1).filter(i => !(n % i)); }
    - total = function(a) { return a.reduce((a, c) => a + c, 0); }

    table.grid.perfect-table
      tr
        td: strong Number
        td: strong Factors
        td: strong Sum of Factors
      for i in [5,6,7,8,9,10,11,12,13,14,15,16,17,18]
        tr
          td: .c= i
          td
            for j in factors(i)
              .c.small= j
          if i >= 10
            td.md [[#{total(factors(i))}]]
          else
            td= total(factors(i))

---
> id: perfect-1

Let’s compare these numbers with their sum of factors:

::: column.frame.blue.text-center(width=222 parent="padded-thin")

For most numbers, the sum of its factors is [[less than|greater than|equal to]]
itself. These numbers are called __deficient numbers__.

::: column.frame.green.text-center.reveal(when="blank-0" animation="pop" width=222)

For a few numbers, the sum of its factors is greater than itself. These numbers
are called __abundant numbers__.

::: column.frame.yellow.text-center.reveal(when="blank-0" animation="pop" delay=500 width=222)

Only one number in the list above has a sum of factors that is _equal_ to itself:
[[6]]. This is called a [__perfect number__](gloss:perfect-numbers).

:::

---
> id: perfect-2

The next perfect number is 28, because if we add up all its factors we get
`1 + 2 + 4 + 7 + 14 = 28`. After that, perfect numbers become much rarer:

{.text-center.s-purple.s-vertical.perfect-list.no-voice.no-voice} _{.n}6_, _{.n}28_,
_{.n}496_, _{.n}8,128_, _{.n}33,550,336_, _{.n}8,589,869,056_,
_{.n}137,438,691,328_, _{.n}2,305,843,008,139,952,128_, …

Notice that all of these numbers are [[even|multiples of 3|2 more than a square
number]]. _{span.reveal(when="blank-0")}It turns out that they are also all
triangle numbers!_

---
> id: perfect-3

::: column.grow

Perfect numbers were first studied by ancient Greek mathematicians like
[Euclid](bio:euclid), [Pythagoras](bio:pythagoras) and [Nicomachus](bio:nicomachus),
more than 2000 years ago. They calculated the first few perfect numbers, and
wondered if there might be any _odd_ ones.

Today, mathematicians have used computers to check the first 10<sup>1500</sup>
numbers (that’s a 1 followed by 1500 zeros), but without success: all perfect
numbers they found were even. To this day, it is still unknown whether there are
any odd perfect numbers, making it the oldest unsolved problem in _all of
mathematics_!

::: column(width=220)

    x-img(src="images/euclid.jpg" width=220 height=269)

{.caption} Euclid of Alexandria
:::

---
> id: hailstone

### The Hailstone Sequence

Most of the sequences we have seen so far had a single rule or pattern. But
there is no reason why we can’t combine multiple different ones – for example
a recursive formula like this:

    table.grid.text-left
      tr
        td: strong.md If `x_n` is even:
        td.md `x_(n+1) = x_n // 2`
      tr
        td: strong.md If `x_n` is odd:
        td.md `x_(n+1) = 3 x_n + 1`

Let’s start with `x_1 = 5` and see what happens:

{.text-center.s-orange.with-arrows.no-voice} _{.n}5_, _{.n}[[16]] *{span.arrow}×3 +1*_,
_{.n}[[8]] *{span.arrow.reveal(when="blank-0")}÷2*_,
_{.n}[[4]] *{span.arrow.reveal(when="blank-1")}÷2*_,
_{.n}[[2]] *{span.arrow.reveal(when="blank-2")}÷2*_,
_{.n}[[1]] *{span.arrow.reveal(when="blank-3")}÷2*_,
_{.n}[[4]] *{span.arrow.reveal(when="blank-4")}×3 +1*_,
_{.n}[[2]] *{span.arrow.reveal(when="blank-5")}÷2*_,
_{.n}[[1]] *{span.arrow.reveal(when="blank-6")}÷2*_, …

---
> id: hailstone-1

It looks like after a few terms, the sequence reaches a “cycle”: 4, 2, 1 will
continue to repeat over and over again, forever.

Of course, we could have picked a different starting point, like ${n}{n|10|5,40,1}.
Then the sequence would look like this:

{.text-center.no-voice} _{span.var.s-orange(:html="hailstones(n)")}_, *{span.s-red}_{.n}4_,
_{.n}2_, _{.n}1_,* *{span.s-purple}_{.n}4_, _{.n}2_, _{.n}1_,*
*{span.s-blue}_{.n}4_, _{.n}2_, _{.n}1_, …*

---
> id: hailstone-2

It seems like the length of the sequence varies a lot, but it will always end up
in a 4, 2, 1 cycle – no matter what first number we pick. We can even visualise
the terms of the sequence in a chart:

    x-coordinate-system(width=600 height=400 padding="12 12 24 40")
      .hailstone-slider.md #[span Start value:]${n}{n|12|1,50,1}

{.reveal(when="var-0")} Notice how some starting points end very quickly,
while others (like [31](action:set(31)) or [47](action:set(47))) take more
than one hundreds steps before they reach the 4, 2, 1 cycle.

---
> id: hailstone-3

::: column.grow

All sequences that follow this recursive formula are called [__Hailstone
Sequences__](gloss:hailstone-sequence), because they seem to move randomly up
and down before reaching the 4, 2, 1 cycle – just like hailstones that move up
and down in a cloud before crashing to Earth.

In 1937, the mathematician [Lothar Collatz](bio:collatz) proposed that _every_
hailstone sequence eventually ends in a 4, 2, 1 cycle – whatever starting value
you pick. You’ve already checked a few starting points above, and computers have
actually tried all numbers up to `10^20` – that’s 100 billion billion or a 1
followed by twenty zeros.

::: column(width=240)

    x-img(src="images/storm.jpg" width=240 height=340)

:::

However, there are infinitely many integers. It is impossible to check each of
them, and no one has been able to find a [proof](gloss:proof) that works for
all.

Just like the search for odd perfect numbers, this is still an open problem in
mathematics. It is amazing that these simple patterns for sequences can lead to
questions that have mystified even the best mathematicians in the world for
centuries!


---
> id: look-and-say

### The Look-and-Say Sequence

Here is one more sequence that is a bit different from all the ones you’ve seen
above. Can you find the pattern?

{.text-center.s-lime.s-vertical} _{span.n}1_, _{span.n}11_, _{.n}21_,
_{.n}1211_, _{.n}111221_, _{.n}312211_, …

[Continue](btn:next)

---
> id: look-and-say-1

This sequence is called the __Look-and-Say__ sequence, and the pattern is just
what the name says: you start with a 1, and every following term is what you
get if you “read out loud” the previous one. Here is an example:

    p: x-img(src="images/look-and-say.svg" width=240 height=130 style="margin: 0 auto")

Can you now find the next terms?

{.text-center.s-lime.s-vertical} …, _{.n}312211_, _{.n}[[13112221]]_,
_{.n}[[1113213211]]_, …

---
> id: look-and-say-2

This sequence is often used as a puzzle to trip up mathematicians – because the
pattern appears to be completely non-mathematical. However, as it turns out,
the sequence has many interesting properties. For example, every term ends in
[[1]], and no digit larger than [[3]] ever gets used.

---
> id: look-and-say-3

The British mathematician [John Conway](bio:conway) discovered that, no matter
what number you pick as starting value, the sequence will eventually split into
distinct “sections” that no longer interact with each other. Conway called this
the _Cosmological Theorem_, and named the different sections using the chemical
elements _Hydrogen_, _Helium_, _Lithium_, …, up to _Plutonium_.

---
> id: quiz

### The Sequence Quiz

You’ve now seen countless different mathematical sequences – some based on
geometric shapes, some that follow specific formulas, and others that seem
to behave almost randomly.

In this quiz you can combine all your knowledge about sequences. There is just
one goal: find the pattern and calculate the next two terms!

::: .box.blue

#### Find the next number

{.text-center.s-yellow.no-voice} _{span.n}7_, _{span.n}11_, _{.n}15_, _{.n}19_, _{.n}23_,
_{.n}27_, _{.n}[[31]]_, _{.n}[[35]]_, …
_{span.pattern.reveal(when="blank-0 blank-1")} Pattern: Always +4_

{.text-center.s-orange.no-voice} _{span.n}11_, _{span.n}14_, _{.n}18_, _{.n}23_, _{.n}29_,
_{.n}36_, _{.n}[[44]]_, _{.n}[[53]]_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Pattern: +3, +4, +5, +6, …_

{.text-center.s-red.no-voice} _{span.n}3_, _{span.n}7_, _{.n}6_, _{.n}10_, _{.n}9_,
_{.n}13_, _{.n}[[12]]_, _{.n}[[16]]_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Pattern: +4, –1, +4, –1, …_

{.text-center.s-purple.no-voice} _{span.n}2_, _{span.n}4_, _{.n}6_, _{.n}12_, _{.n}14_,
_{.n}28_, _{.n}[[30]]_, _{.n}[[60]]_, …
_{span.pattern.reveal(when="blank-6 blank-7")} Pattern: ×2, +2, ×2, +2, …_

{.text-center.s-blue.no-voice} _{span.n}1_, _{span.n}1_, _{.n}2_, _{.n}3_, _{.n}5_,
_{.n}8_, _{.n}[[13]]_, _{.n}[[21]]_, …
_{span.pattern.reveal(when="blank-8 blank-9")} Pattern: Fibonacci Numbers_

{.text-center.s-teal.no-voice} _{span.n}27_, _{span.n}28_, _{.n}30_, _{.n}15_, _{.n}16_,
_{.n}18_, _{.n}[[9]]_, _{.n}[[10]]_, …
_{span.pattern.reveal(when="blank-10 blank-11")} Pattern: +1, +2, ÷2, +1, +2, ÷2, …_

{.text-center.s-green.no-voice} _{span.n}1_, _{span.n}9_, _{.n}25_, _{.n}49_, _{.n}81_,
_{.n}121_, _{.n}[[169]]_, _{.n}[[225]]_, …
_{span.pattern.reveal(when="blank-12 blank-13")} Pattern: Odd square numbers_

:::



--------------------------------------------------------------------------------



## Pascal’s Triangle

> section: pascals-triangle
> id: pascal-intro

Below you can see a number pyramid that is created using a simple pattern: it
starts with a single “1” at the top, and every following cell is the sum of
the two cells directly above. Hover over some of the cells to see how they are
calculated, and then fill in the missing ones:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };

    .overflow-wrap: .pascal-grid(style="width: 560px")
      - var i = 0;
      while i < 13
        - var j = 0
        .r
          while j <= i
            if (i == 6 && j == 2) || (i == 8 && j == 5) || (i == 10 && j == 5)  || (i == 12 && j == 3)  || (i == 12 && j == 9)
              .c.md [[#{bin(i, j)}]]
            else
              .c= bin(i, j)
            - j += 1;
        - i += 1;

---
> id: pascal-intro-1

This diagram only showed the first twelve rows, but we could continue forever,
adding new rows at the bottom. Notice that the triangle is
[[symmetric|right-angled|equilateral]], which can help you calculate some of the
cells.

---
> id: pascal-triangle

The triangle is called [__Pascal’s triangle__](gloss:pascals-triangle), named
after the French mathematician [Blaise Pascal](bio:pascal). He was one of the
first European mathematicians to investigate its patterns and properties, but it
was known to other civilisations many centuries earlier:

::: column(width=200)

    x-img(src="images/pascal-1.jpg" width=130 height=280 style="margin: 0 auto")

{.caption} In 450BC, the Indian mathematician [Pingala](bio:pingala) called the
triangle the __“Staircase of Mount Meru”__, named after a sacred Hindu mountain.

::: column(width=200)

    x-img(src="images/pascal-2.jpg" width=200 height=280)

{.caption} In Iran, it was known as the __“Khayyam triangle”__ (مثلث خیام),
named after the Persian poet and mathematician [Omar Khayyám](bio:khayyam).

::: column(width=200)

    x-img(src="images/pascal-3.jpg" width=200 height=280)

{.caption} In China, the mathematician Jia Xian also discovered the triangle.
It was named after his successor, __“Yang Hui’s triangle”__ (杨辉三角).

:::

Pascal’s triangle can be created using a very simple pattern, but it is filled
with surprising patterns and properties. That’s why it has fascinated
mathematicians across the world, for hundreds of years.

[Continue](btn:next)


---
> id: pascal-sequences

### Finding Sequences

In the previous sections you saw countless different mathematical sequences. It
turns out that many of them can also be found in Pascal’s triangle:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };

    .overflow-wrap: .pascal-grid.sums(style="width: 760px")
      - var i = 0;
      while i < 17
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            if b == 120
              .c: span.s120= b
            else if b == 3003
              .c: span.s3003= b
            else
              .c= b
            - j += 1;
          .c.sum
        - i += 1;

::: tab(parent="pascal-tabs")
#### {.btn.yellow} _{span.check(when="blank-0")}_
The numbers in the first diagonal on either side are all
[[ones|increasing|even]].
::: tab
#### {.btn.orange} _{span.check(when="blank-1")}_
The numbers in the second diagonal on either side are the
[[integers|primes|square numbers]].
::: tab
#### {.btn.red} _{span.check(when="blank-2")}_
The numbers in the third diagonal on either side are the [[triangle
numbers|square numbers|Fibonacci numbers]].
::: tab
#### {.btn.purple} _{span.check(when="blank-3")}_
The numbers in the fourth diagonal are the [[tetrahedral numbers|cubic
numbers|powers of 2]].
::: tab
#### {.btn.blue} _{span.check(when="blank-4")}_
If you add up all the numbers in a row, their sums form another sequence: the
[[powers of two|perfect numbers|prime numbers]].
::: tab
#### {.btn.teal} _{span.check(when="blank-5")}_
In every row that has a prime number in its second cell, all following numbers
are [[multiples|factors|inverses]] of that prime.
::: tab
#### {.btn.green} _{span.check(when="blank-6")}_
The diagram above highlights the “shallow” diagonals in different colours. If
we add up the numbers in every diagonal, we get the [[Fibonacci
numbers|Hailstone numbers|geometric sequence]].
:::

---
> id: pascal-sequences-1

Of course, each of these patterns has a mathematical reason that explains why it
appears. Maybe you can find some of them!

Another question you might ask is how often a number appears in Pascal’s
triangle. Clearly there are infinitely many 1s, one 2, and every other number
appears [[at least twice|at least once|exactly twice]],
_{span.reveal(when="blank-0")} in the second diagonal on either side._

---
> id: pascal-sequences-2

Some numbers in the middle of the triangle also appear three or four times.
There are even a few that appear six times: you can see both [120](->.s120) and
[3003](->.s3003) four times in the triangle above, and they’ll appear two more
times each in rows 120 and 3003.

Since 3003 is a triangle number, it actually appears two more times in the
_third_ diagonals of the triangle – that makes eight occurrences in total.

It is unknown if there are any other numbers that appear eight times in the
triangle, or if there are numbers that appear more than eight times. The American
mathematician [David Singmaster](bio:singmaster) hypothesised that there is a
fixed limit on how often numbers can appear in Pascal’s triangle – but it hasn’t
been proven yet.

---
> id: modular
> goals: select

### Divisibility

Some patterns in Pascal’s triangle are not quite as easy to detect. In the
diagram below, highlight all the cells that are even:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };

    .overflow-wrap: .pascal-grid#pascal-select(style="width: 340px")
      - var i = 0;
      while i < 8
        - var j = 0
        .r
          while j <= i
            .c= bin(i, j)
            - j += 1;
        - i += 1;
    x-gesture(target="#pascal-select .r:nth-child(3) .c:nth-child(2)")

{.reveal(when="select")} It looks like the even number in Pascal’s triangle form
another, smaller [[triangle|matrix|square]].

---
> id: modular-1
> goals: c2 c3 c4 c5

Colouring each cell manually takes a long time, but here you can see what
happens if you would do this for many more rows. And what about cells divisible
by other numbers?

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };

    .overflow-wrap: .pascal-grid.small(style="width: 760px")
      - var i = 0;
      while i < 25
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            if b > 99999
              .c: span.small= b
            else
              .c= b
            - j += 1;
        - i += 1;
      .pascal-buttons
        button.btn.btn-red(data-value="2") Divisible by 2
        button.btn.btn-blue(data-value="3") Divisible by 3
        button.btn.btn-green(data-value="4") Divisible by 4
        button.btn.btn-yellow(data-value="5") Divisible by 5

---
> id: modular-2

::: column.grow
Wow! The coloured cells always appear in [[triangles|squares|pairs]] (except for
a few single cells, which could be seen as triangles of size 1).

If we continue the pattern of cells divisible by 2, we get one that is very
similar to the __Sierpinski triangle__ on the right. Shapes like this, which
consist of a simple pattern that seems to continue forever while getting smaller
and smaller, are called [__Fractals__](gloss:fractal). You will learn more about
them in the future…

::: column.width(280)

    img(src="images/sierpinski.svg" width=280 height=243 alt="Sierpinski Triangle")
    p.caption The Sierpinski Triangle

:::

---
> id: pascal-binomial

### Binomial Coefficients

There is one more important property of Pascal’s triangle that we need to talk
about. To understand it, we will try to solve the same problem with two
completely different methods, and then see how they are related.

{.todo} COMING SOON

    // Galton Board, normal distribution



--------------------------------------------------------------------------------



## Limits and Convergence

> section: convergence
> sectionStatus: dev
> id: convergence-intro

{.todo} COMING SOON

    // In some sequences, such as Prime numbers or Perfect numbers, the individual
    // terms are very special and interesting. In other sequences we may only be
    // interested in what happens to the terms as we calculate more and more of
    // them (what happens to xn as n gets very large). Here are a few examples
    // of what could happen (the numbers, for clarity, are represented by dots):

    // This sequence gets closer and closer to a particular number. We say that it converges.
    // This sequence doesn’t converge, since it doesn’t keep getting closer to one single number.
    // This sequence keeps on growing. We say that it diverges.

    // Convergence means that the terms keep getting closer to a particular number,
    // and divergence means that the terms keep getting bigger, whether towards
    // infinity or negative infinity. Remember that the sequence of ratios of
    // consecutive Fibonacci numbers above converged to the golden ratio.

    // Unfortunately “getting closer” is not a particularly precise description
    // in mathematics. A sequence could for example first get very big and then
    // turn around and converge. We don’t really care about what happens at the
    // beginning, only what happens to the most distant terms. All of the
    // following sequences converge:

    // Here is how mathematicians define the notion of convergence precisely,
    // and this is one of the most important definitions in all of mathematics:

    // A sequence with terms x1, x2, x3, … tends to a limit y if we can think of
    // any tiny positive number, let us call it ε (the Greek letter Epsilon), and
    // if eventually all terms of the sequence will be within ε of the limit y.
    // This means that there is some (sometimes very big) integer N so that xN,
    // xN+1, xN+2, … are all between y – ε and y + ε.

    // Using special mathematical notation, it is possible to express this
    // definition without any words. We use ∀ meaning “for all”, ∃ meaning
    // “there exists” and : meaning “such that”:

    // ∀ ε ∃ N : |xn – y| < ε ∀ n > N
    // For all ε there exists a number N such that the distance |xn – y|
    // between xn and y is less than ε for all n > N.

    // Sequences and their convergence is studied in an area of mathematics
    // called Analysis. We use sequences to define crucial concepts in mathematics
    // such as series, continuity and differentiation.

    // Litov’s Mean Value Theorem

    // Start with two numbers, say 8 and 2.
    // Let’s generate a sequence where the next number is the mean of the previous two numbers.
    // So the next number is half of (8+2), and the sequence continues: 8,2,5
    // The next number is half of (2+5), and the sequence continues: 8,2,5,3.5
    // What would happen if you continued this process indefinitely?
    // Choose a few pairs of starting numbers and repeat the process.
    // Each time, your sequence should get closer and closer to a value which we call the limit.
    // Can you find a relationship between your starting numbers and the limit of the sequence they generate?
    // Can you explain why this happens?
    // Now start with three numbers.
    // This time, we can generate a sequence where the next number is the mean of the last three numbers.
    // Check you agree that if we start with 4,1,10, the next number is 5, and the number after that is 163.
    // What would happen if you continued this process indefinitely?
    // Choose some more sets of three starting numbers.
    // Can you find a relationship between your starting numbers and the limit of the sequence they generate?
    // Can you explain why this happens?

    // After a while of playing with the numbers on a spreadsheet I have
    // discovered that the formula to find the “limiting value” for 2 starting
    // numbers is: (x+2y)/3
    // where x is the first number chosen and y is the second number chosen.
