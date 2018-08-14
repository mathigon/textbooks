# Sequences and Patterns

## Introduction

> section: introduction
> id: intro

Many professions that use mathematics are interested in one specific aspect –
_finding patterns_, and being able to predict the future. Here are a few
examples:

::: column(width=160 parent="padded-thin")

    x-media(src="images/crime.jpg" width=160 height=160)

::: column(width=400)

In the last decade, __police departments__ around the world have started to rely
more on mathematics. Special algorithms can use the data of past crimes to
predict when and where crimes might occur in the future. For example, the
_PredPol_ system (short for “predictive policing”), helped decrease the crime
rate in parts of Los Angeles by 12%!

::: column(width=160)

    x-media(src="images/volcanoes.jpg" width=160 height=160)

::: column(width=400)

It turns out that __earthquakes__ follow similar patterns to crimes. Just like
one crime might trigger retaliations, an earthquake might trigger aftershocks.
In mathematics, this is called a “self-exciting processes”, and there are
equations that help predict when the next one might happen.

::: column(width=160)

    x-media(src="images/finance.jpg" width=160 height=160)

::: column(width=400)

Bankers also look at historic data of stock prices, interest rates and currency
exchange rates, to estimate how __financial markets__ might change in the
future. Being able to predict if the value of a stock will go up or down can be
extremely lucrative!

:::

Professional mathematicians use highly complex algorithms to find and analyse
all these patterns, but we are going to start with something a bit more basic.

---
> id: simple-patterns

### Simple Sequences

In mathematics, a [__sequence__](gloss:sequence) is a collection of numbers (or
other objects) that follow a particular pattern. The individual elements in a
sequence are called [__terms__](gloss:sequence-term).

Here are a few examples of sequences. Can you find the pattern and fill in
the next two terms?

{.text-center.s-orange.with-arrows} _{.n}3_, _{.n}6*{span.arrow}+3*_,
_{.n}9*{span.arrow(hidden)}+3*_, _{.n}12*{span.arrow(hidden)}+3*_,
_{.n}15*{span.arrow(hidden)}+3*_, _{.n}[[18]]*{span.arrow(hidden)}+3*_
_{.n}[[21]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-0 blank-1")}Pattern: “Add 3 to the previous
number to get the next one.”_

{.text-center.s-teal.with-arrows} _{.n}4_, _{.n}10*{span.arrow(hidden)}+6*_,
_{.n}16*{span.arrow(hidden)}+6*_, _{.n}22*{span.arrow(hidden)}+6*_,
_{.n}28*{span.arrow(hidden)}+6*_, _{.n}[[34]]*{span.arrow(hidden)}+6*_,
_{.n}[[40]]*{span.arrow(hidden)}+6*_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Pattern: “Add 6 to the previous
number to get the next one.”_

{.text-center.s-purple.with-arrows} _{.n}3_, _{.n}4*{span.arrow(hidden)}+1*_,
_{.n}7*{span.arrow(hidden)}+3*_, _{.n}8*{span.arrow(hidden)}+1*_,
_{.n}11*{span.arrow(hidden)}+3*_, _{.n}[[12]]*{span.arrow(hidden)}+1*_,
_{.n}[[15]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Pattern: “Alternatingly add 1 and
add 3 to the previous number, to get the next one.”_

{.text-center.s-lime.with-arrows} _{.n}1_, _{.n}2*{span.arrow(hidden)}×2*_,
_{.n}4*{span.arrow(hidden)}×2*_, _{.n}8*{span.arrow(hidden)}×2*_,
_{.n}16*{span.arrow(hidden)}×2*_, _{.n}[[32]]*{span.arrow(hidden)}×2*_,
_{.n}[[64]]*{span.arrow(hidden)}×2*_, …
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
position of the term in the sequence. For example, the *n*th term in the
sequence will be represented by the variable `x_n`.

You might think that it would be easier to label the terms in the sequence as
_a_, _b_, _c_, _d_, and so on. However you’ll eventually [[run out of
letters|reach 100|forget a letter]], while the sequence might go on forever!

---
> id: triangles

### Triangle and Square Numbers

Sequences in mathematics don’t always have to be numbers. Here is a sequence
that consists of geometric shapes – triangles of increasing size:

::: column(width=24 parent="padded-thin")
{.text-center} 1

    include svg/triangle-1.svg
::: column(width=52)
{.text-center} 3

    include svg/triangle-2.svg
::: column(width=80)
{.text-center} 6

    include svg/triangle-3.svg
::: column(width=108)
{.text-center} [[10]]

    include svg/triangle-4.svg
::: column(width=136)
{.text-center} [[15]]

    include svg/triangle-5.svg
::: column(width=164)
{.text-center} [[21]]

    include svg/triangle-6.svg
:::

---
> id: triangle-1

At every step, we’re adding one more row to the previous triangle. The length of
these new rows also increases by one every time. Can you see the pattern?

{.text-center.s-orange.with-arrows} _{.n}1_, _{.n}3*{span.arrow}+2*_,
_{.n}6*{span.arrow}+3*_, _{.n}10*{span.arrow}+4*_,
_{.n}15*{span.arrow}+5*_, _{.n}21*{span.arrow}+6*_
_{.n}[[28]]*{span.arrow.reveal(when="blank-0")}+7*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-1")}+8*_, …

---
> id: recursive

In mathematics, we can also express this pattern using algebra (variables and
equations):

    p.text-center.s-orange
      span#t1.n.md `x_n`
      | &nbsp;=&nbsp;
      span#t2.n.md `x_(n-1)`
      | &nbsp;+&nbsp;
      em#t3 n

This equation essentially means that, to get the [*n*th triangle number](-> #t1),
we take the [previous triangle number](-> #t2) and [add _n_](-> #t3).

{.todo} For example, if _n_ = ${n}{n|5|2,20,1}, the equation becomes
_{msub}*{mi}x* *{mn}${n}*_ = _{msub}*{mi}x* *{mn}${n-1}*_ + ${n}.

---
> id: recursive-1

An equation that expresses `x_n` in terms of previous terms in the sequence is
called a [__recursive formula__](gloss:sequence-recursive). As long as you know
the [[first term|last term|second term]] in the sequence, you can calculate all
the following terms.

---
> id: squares

    hr

Another sequence which consists of geometric shapes are the __square numbers__.
Every term is formed by increasingly large squares:

::: column(width=24 parent="padded-thin squares")
{.text-center} 1

    include svg/square-1.svg
::: column(width=50)
{.text-center} 4

    include svg/square-2.svg
::: column(width=76)
{.text-center} 9

    include svg/square-3.svg
::: column(width=102)
{.text-center} [[16]]

    include svg/square-4.svg
::: column(width=128)
{.text-center} [[25]]

    include svg/square-5.svg
::: column(width=154)
{.text-center} [[36]]

    include svg/square-6.svg
:::

---
> id: square-1

For the triangle numbers we found a recursive formula that tells you the next
term of the sequence in terms of its previous terms. For square numbers we can
do even better – an equation that tells you the *n*th term directly, without
first having to calculate all the previous ones:

{.todo.text-center.s-purple} *{.n}`x_n`* = `n^2`

---
> id: explicit

An equations like this is called an [__explicit formula__](gloss:sequence-explicit).
We can use it, for example, to calculate that the 13th square number is [[169]],
without first finding the previous 12 square numbers.

---
> id: definitions

    hr

Let’s summarise all the definitions we have seen so far:

::: .theorem
A [__sequence__](gloss:sequence) is a progression of numbers, geometric shapes
or other objects, that follow a specific pattern. The individual items in the
sequence are called [__terms__](gloss:sequence-term), and represented by
variables like `x_n`.

A [__recursive formula__](gloss:sequence-recursive) for a sequence tells you the
value of the *n*th term as a function of [[its previous terms|the first term]].
You always have to specify the first term(s), too.

An [__explicit formula__](gloss:sequence-explicit) for a sequence tells you the
value of the *n*th term as a function of [[just _n_|the previous term]],
without referring to other terms in the sequence.
:::

---
> id: action-sequence

### Action Sequence Photography

In the following sections you will learn about many different mathematical
sequences, surprising patterns, and unexpected applications.

First, though, let’s talk about something completely different: __action
sequence photography__. A photographer takes many shots in quick succession, and
then merges them into a single image:

    figure: x-media(src="images/action-1.jpg" width=640 height=320)

Can you see how the skier forms a sequence? The pattern is not addition or
multiplication, but a geometric [transformation](gloss:rigid-transformation).
Between consecutive steps, the skier is both translated and
[[rotated|reflected|dilated]].

---
> id: action-sequence-1

Here are a few more examples of action sequence photography, for your enjoyment:

::: column(width=320 parent="padded-thin")

    x-media(src="images/action-2.jpg" width=320 height=160 credit="© Ray Demski" lightbox)

::: column(width=320)

    x-media(src="images/action-3.jpg" width=320 height=160 credit="© Ray Demski" lightbox)

::: column(width=320)

    x-media(src="images/action-4.jpg" width=320 height=160 credit="© Marcio Abe" lightbox)

::: column(width=320)

    x-media(src="images/action-5.jpg" width=320 height=160 credit="© Jason Halayko" lightbox)

::: column(width=320)

    x-media(src="images/action-6.jpg" width=320 height=160 credit="© Jason Halayko" lightbox)

::: column(width=320)

    x-media(src="images/action-7.jpg" width=320 height=160 lightbox)

:::



--------------------------------------------------------------------------------



## Arithmetic and Geometric Sequences

> section: arithmetic-geometric
> id: halley

::: column.grow

In 1683, the astronomer [Edmond Halley](bio:halley) observed an unusual
phenomenon: a glowing white object with a long tail that moved across the night
sky. It was a __comet__, a small, icy rock that is flying through space and
while leaving behind a trail of dust and ice.

Halley remembered that other astronomers had observed similar comets much
earlier: one in 1530 and another in 1606. Notice that the gap between these
observations is both times the same: [[76]] years.

::: column(width=320)

    x-media(width=320 height=256 src="images/halley.jpg")
    p.caption Image of Halley’s Comet,#[br]taken in 1986 on Easter Island

:::

---
> id: halley-1

Halley concluded that all three observations were in fact of the same comet –
which is now called Halley’s comet. It is orbiting around the sun and passes by
Earth approximately every 76 years. He also predicted when the comet would be
visible next:

{.text-center.s-orange.s-large.with-arrows} _{span.n}1530_,
_{span.n}1606*{span.arrow}+76*_, _{.n}1682*{span.arrow}+76*_,
_{.n}[[1758]]*{span.arrow}+76*_, _{.n}[[1834]]*{span.arrow}+76*_,
_{.n}[[1910]]*{span.arrow}+76*_, _{.n}[[1986]]*{span.arrow}+76*_,
_{.n}[[2062]]*{span.arrow}+76*_, …

---
> id: halley-2

Actually, the time interval is not always _exactly_ 76 years: it can vary by one
or two years, as the comet’s orbit is interrupted by other planets. Today we
know that Halley’s comet was observed by ancient astronomers as early as 240 BC!

    figure
      .row
        x-media(src="images/halley-1.jpg" width=160 height=180)
        x-media(src="images/halley-2.jpg" width=173 height=180 lightbox)
        x-media(src="images/halley-3.jpg" width=200 height=180 lightbox)
        x-media(src="images/halley-4.jpg" width=130 height=180 lightbox)
      p.caption Depections of Halley’s comet throughout time: a Babylonian tablet (164 BC), a medival tapestry (1070s), a science magazine (1910) and a Soviet stamp (1986).

---
> id: ball
> goals: bounce

A different group of scientists is investigating the behaviour of a bouncing
tennis ball. They dropped the ball from a height of 10 meters and measured its
position over time. With every bounce, the ball loses some of its original
height:

    x-coordinate-system(margins="12 12 24 120" width=640 height=320 x-axis="0|6|" x-suffix="s" y-suffix="m" x-label="time" y-label="height")
      .tennis-ball
      .tennis-ball
    x-slider(steps=400 speed=0.5)

---
> id: ball-1
> goals: reveals

The scientists noticed that the ball loses 20% of its height after every bounce.
In other words, the maximum height of every bounce is 80% of the previous one.
This allowed them to predict the height of every following bounce:

{.text-center.s-teal.s-large.with-arrows} _{span.n}10_,
_{span.n}8*{span.arrow}×0.8*_, _{.n}[[6.4]]*{span.arrow}×0.8*_,
_{span.n}[[5.12]]*{span.arrow}×0.8*_,
_{span.n.reveal}4.096*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}3.277*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.621*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.097*{span.arrow}×0.8*_*{span.reveal}, …*

---
> id: arithmetic-geometric

### Definitions

If you compare both these problems, you might notice that there are many
similarities: the sequence of Halley’s comet has the same
[[difference|ratio|product]] between consecutive terms while the
sequence of tennis ball bounces has the same [[ratio|difference|product]]
between consecutive terms.

---
> id: arithmetic-geometric-1

All sequences with these properties have a special name:

::: column.grow.theorem

    p.text-center: img(src="images/comet.svg" width=80 height=50)

{.text-center} An [__arithmetic sequence__](gloss:arithmetic-sequence) has a
__constant difference__ _d_ between consecutive terms. The same number is added
(or subtracted) to every term, to produce the next one.

::: column.grow.theorem

    p.text-center: img(src="images/ball.svg" width=80 height=50)

{.text-center} A [__geometric sequence__](gloss:geometric-sequence) has a
__constant ratio__ _r_ between consecutive terms. Every term is multiplied (or
divided) by the same number, to produce the next one.

:::

---
> id: arithmetic-geometric-select

Here are a few different sequences. Can you determine which ones are arithmetic,
geometric or neither, and what the values of _d_ and _r_ are?

{.todo} >>> interactive

---
> id: arithmetic-geometric-compute

To define an arithmetic or geometric sequence, we have to know not just the
common difference or ratio, but also the initial value `a_0`. Here you can
generate your own sequences by changing the values of `a_0`, _d_ and _r_:

{.todo} >>> interactive

---
> id: arithmetic-geometric-graph

To XXX the pattern of these sequences, we can visualise them in a chart:
arithmetic ${a}{a|0|-6,6,1}, ${d}{d|5|-5,5,0.2}
geometric ${b}{b|2|-6,6,1}, ${r}{r|1.4|-5,5,0.2}

    x-coordinate-system(margins="12 12 24 40" type="points")

---

Converge / diverge

---
> id: arithmetic-geometric-recursive

### Recursive and Explicit Formulae

{.todo} Remember that a __recursive formula__ for a sequence is an equation for the
value

{.todo} recursive formulae

{.todo} One problem with recursive formulae is that to find the 100th term, for example,
you first have to calculate the previous 99 terms – and that might take a long
time.

---
> id: arithmetic-geometric-explicit

Finding an __explicit formula__ is a bit harder.

{.todo} explicit formulae explanation - `a_n = a_1 + d*(n-1)` and `a_n = a_1 * r^(n-10`

---
> id: pay-it-forward
> goals: video

### Pay it Forward

Here is a short clip from the movie _Pay it Forward_, where 12-year-old Trevor
explains his idea for making the world a better place:

    figure
      x-video(src="https://storage.googleapis.com/mathigon-videos/pay-it-forward.mp4" poster="images/pay-it-forward.jpg" width=640 height=360 controls audio)
      .caption Extract from "Pay It Forward" (2000), © Warner Bros. Entertainment

---
> id: pay-it-forward-1

The essence of this idea is that, if everyone "pays it forward", a single person
can affect a huge impact on the world:

    figure: img(src="images/pay-it-forward.png" width=700 height=220)

Notice how the number of people at every step forms a [[geometric sequence|arithmetic
sequence|triangle number]], _{span.reveal(when="blank-0")}with common ratio [[3]]:_

{.text-center.reveal(when="blank-1").s-orange.s-large.with-arrows} _{span.n}1_,
_{span.n}3*{span.arrow}×3*_, _{span.n}9*{span.arrow}×3*_,
_{span.n}[[27]]*{span.arrow}×3*_, _{span.n}[[81]]*{span.arrow}×3*_,
_{span.n}[[243]]*{span.arrow}×3*_, …

---
> id: pay-it-forward-2

Using the [explicit formula](gloss:sequence-explicit) for geometric sequences,
we can work out how many new people are affected at any step:

{.todo} equation

---
> id: pay-it-forward-3

The number of people increases incredibly quickly. In the 10th step, you would
reach 19,683 new ones, and after 22 steps you would have reached more people
than currently alive on Earth.

This sequence of numbers has a special name: the __powers of 3__. As you can
see, every term is actually just a different power of 3:

{.todo} `3^0`, `3^1`, `3^2`, `3^3`, …

---
> id: millionaire

### Who wants to be a Millionaire?

Two siblings, Anna and Thomas, are receiving pocket money from their parents.
They can choose between two different options:

* Thomas is receiving $1 in the first month, $2s in the second month, $3 in the
  third month, and so on. Every month, he receives $1 more than in the previous
  one.
* Anna receives 1¢ in the first month, 2¢ in the second month

---
> id: millionaire-1

    img.text-wrap(src="images/dishes.jpg" style="shape-outside: url(images/dishes.png)" width=280 height=276)

In order to make some additional pocket money, you decided to make a deal with
your parents: for appropriate payment, you’ll do every possible chore around
the house – washing the dishes, laundry, taking out the trash or walking the
dog.

The payment system works like this: on the first day, you get 1 cent. On the
second day, you get 2 cents – twice as much as before. On the next day you’ll
get 4 cents. Every day, your payment doubles.

1¢ is not a lot of money – and neither are 2¢ or 4¢, especially
considering how much work you’re doing. But the amount will slowly increase.
How long do you think will it take until you’ve made $100? How long until
you’ve made it to 1 Million?

{.todo} guess fields

---
> id: millionaire-2

Let’s try to calculate it mathematically! Just like before, your salary
follows an exponential model, because it changes by a constant ratio every
day (times 2). On day `x`, you’ll get `2^x` cents.

| __day__ | __payment__  |
| ------- | ------------ |
| 1       | $ 0.01       |
| 2       | $ 0.02       |
| 3       | $ 0.04       |
| 4       | $ [[0.08]]   |
| 5       | $ [[0.16]]   |
| 6       | $ [[0.32]]   |
| 7       | $ [[0.64]]   |
| 8       | $ 1.28       |
| 9       | $ 2.56       |
| 10      | $ 5.12       |
| 11      | $ 10.24      |
| 12      | $ [[20.48]]  |
| 13      | $ [[40.96]]  |
| 14      | $ [[81.92]]  |
| 15      | $ [[163.84]] |
| 16      | $ 327.68     |
| 17      | $ 655.36     |
| 18      | $ 1,310.72   |

---
> id: millionaire-3

One sibling gets $${a}{a|1|1,10,1} every day. The other sibling
gets ${b}{b|1|1,10,1}¢ every day.

---
> id: millionaire-4

{.todo} As you can see, your daily payment start low but then grow rapidly. After 15
days you’ve reached $100. After less than a month you’re making more than 1
million per day, and after 2 months you’d have made more than _all the money
on Earth_. :1f4b0: :1f37e: :1f911:

{.todo} Exponential growth can be truly XXXXX. Even if they start really slowly, they
will eventually speed up a lot, and overtake any possible linear model. Most
importantly, us humans tend to be very bad at estimating just _how fast_
exponential models can grow. Or are we?

---
> id: chessboard

### The Chessboard

{.todo} The game of chess was invented in India, many hundreds of years ago. According
to legend, the Indian king loved the game so much that he invited its inventor
to his palace and promised him any present they ask for.

{.todo} The inventor had just one simple request: rice. He wanted the king to place
one grain of rice on the first square of the chess board, two grains on the
second, four grains of the third, eight grains on the fourth, and so on. Every
new square should have twice as many grains of rice as the previous one.

{.todo} The king, who was very wealthy, agreed immediately and asked his servants to
fetch bags of rice. A chessboard has 64 squares, so how many grains of rice
does the king need in total?

{.todo} You might have noticed that the number of grains of rice form a geometric series.
The first term is [[1]], and the common ratio is [[2]]. Using the results from
above, we can calculate how many grains of rice there will be on the last square:

{.todo.text-center} `a_64 = 1 * 2^63 =` 9 223 372 036 854 775 808

{.todo} That’s 9 billion billion grains of rice! In total, they would weight about
100 billion tonnes – or 100 times the weight of Mount Everest, the tallest
mountain on Earth.



--------------------------------------------------------------------------------



## Famous Sequences

> section: famous
> id: famous-intro

There are infinitely many different arithmetic and geometric series – some of
which we saw in the previous section. However there are also many interesting
sequences that are neither arithmetic nor geometric, and in this section we will
look at some of them. The first example you’ve already seen in the
[Introduction](/course/sequences/introduction):

---
> id: triangle-numbers

### Triangle numbers

The triangle numbers are generated by creating triangles of progressively larger
size:

::: column(width=24 parent="padded-thin")
{.text-center} __1__

    include svg/triangle-1.svg
::: column(width=52)
{.text-center} __3__

    include svg/triangle-2.svg
::: column(width=80)
{.text-center} __6__

    include svg/triangle-3.svg
::: column(width=108)
{.text-center} __10__

    include svg/triangle-4.svg
::: column(width=136)
{.text-center} __15__

    include svg/triangle-5.svg
::: column(width=164)
{.text-center} __21__

    include svg/triangle-6.svg
:::

You've already seen the recursive formula for triangle numbers:
`x_n = x_(n-1) +` [[_n_|_n_ – 1|x_n-2]].

---
> id: billiard-pool

It is no coincidence that there are always 10 pins when bowling or 15 balls when
playing billiard: it's because they are both triangle numbers!

::: column(width=320)

    x-media(src="images/bowling.jpg" width=320 height=240)

::: column(width=320)

    x-media(src="images/billiard.jpg" width=320 height=240)

:::

---
> id: triangle-proof

Unfortunately, the recursive formula is not very helpful if we want to find the
100th or 5000th triangle number, without first calculating all the previous
ones. But, like we did with arithmetic and geometric sequences, we can try to
find an explicit formula for the triangle numbers:

::: column(width=300)

{.todo} Animated diagram

    svg(width=300 height=300)
      g

::: column.grow
Let's start with a triangle of size ${x}{x|5|1,10,1}.

First, we need to make a second copy of the triangle.

Now we can rearrange the two triangles, to fit together in a rectangle.

The size of the rectangle is ${x} × ${x + 1}, so it must have an area of
${x * (x + 1)}

Since the rectangle is twice as large as the original triangle, we know that
the ${n}th triangle number must be ${x*(x+1)/2}.

In general, the *n*th triangle number is `T_n = (x ** (x + 1)) / 2`.
:::

---
> id: triangle-numbers-1

{.todo} Which of these numbers are triangle numbers: 4851, 6214, 3655, 7626,
8656? How did you decide?

{.todo} Any number can be written as the sum of three triangle numbers.

{.todo} 12 days of Christmas

---
> id: square-numbers

### Square and Polygon Numbers

{.todo} Square numbers
What is the sum of the first 30 odd numbers?
What is the sum of the first 60 odd numbers?

---
> id: polygon-numbers

::: column(width=300)

    svg(width=300 height=300)
      g

::: column.grow

Here is the ${x}{x|5|1,10,1} number ${k}{k|3|3,8,1}.

{.todo} Polygon Numbers

:::

---
> id: tetrahedral

### Tetrahedral and Cubic Numbers

Of course, we don'r have to limit ourselves to 2-dimensional shapes and
patterns. We could stack spheres to form small pyramids, just like how you would
stack oranges in a supermarket:

::: column(width=64 parent="padded-thin")
{.text-center} __1__

    x-tetrahedron(size=160 layers=1 style="margin: 0 -48px")

::: column(width=88)
{.text-center} __[[4]]__

    x-tetrahedron(size=160 layers=2 style="margin: 0 -36px")

::: column(width=112)
{.text-center} __[[10]]__

    x-tetrahedron(size=160 layers=3 style="margin: 0 -24px")

::: column(width=136)
{.text-center} __20__

    x-tetrahedron(size=160 layers=4 style="margin: 0 -12px")

::: column(width=160)
{.text-center} __35__

    x-tetrahedron(size=160 layers=5)

:::

---
> id: tetrahedral-1

Mathematicians often call these pyramids [__Tetrahedra__](gloss:tetrahedron),
and the resulting sequence [__Tetrahedral numbers__](gloss:tetrahedral-numbers).

{.todo} More text

---
> id: cubic-numbers

{.todo} Cubic numbers

---
> id: primes

### Prime Numbers

Another sequence that you’ve seen before are the [__Prime
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
[twin primes](gloss:twin-prime)), and sometimes there are huge gaps between
them. They seem to be distributed almost randomly!

Prime numbers also don't have a simple geometric representation like triangle or
square numbers, but with a bit of work we can reveal interesting patterns:

::: column(width=320)

    .eratosthenes
      .deleted 1
      .l-red 2
      - var i = 3
      while i <= 100
        div= i
        - i += 1
    x-gesture(target=".eratosthenes .l-red")

{.caption} If we cross out all multiples of small integers, all the remaining
ones must be prime. This method is called the [__Sieve of
Eratosthenes__](gloss:sieve-eratosthenes).

::: column(width=320)

    x-coordinate-system(width=320 height=320 margins="8 8 20 24")

{.caption} If we draw a chart that increases by 1 whenever there is a prime
number, we get a “stepped” function with fascinating properties.
:::

---
> id: primes-3

You can learn more about these and other properties of prime numbers in our
course on [Divisibility and Primes](/course/divisibility-and-primes). They are
some of the most important and most mysterious concepts in mathematics!

    figure: img(src="images/primes.svg" width=480 height=156) 

---
> id: perfect

### Perfect Numbers

To determine if a number is [prime](gloss:prime), we have to find all of its
[factors](gloss:factor). Usually we would _multiply_ these factors to get back
the original number, but let's see what happens if we _add up_ all factors
of a number:

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

::: column.perfect-box(width=220 parent="padded-thin")

For most numbers, the sum of its factors is [[less than|greater than|equal to]]
itself. These numbers are called [__deficient numbers__](gloss:deficient-number).

::: column.reveal.perfect-box(when="blank-0" width=220)

For a few numbers, the sum of its factors is greater than itself. These numbers
are called [__abundant numbers__](gloss:abundant-number).

::: column.reveal.perfect-box(when="blank-0" delay=500 width=220)

Only one number in the list above has a sum of factors that is _equal_ to itself:
[[6]]. This is called a [__perfect number__](gloss:perfect-number).

:::

---
> id: perfect-2

The next perfect number is 28, because if we add up all its factors we get
`1 + 2 + 4 + 7 + 14 = 28`. After that, they become much rarer:

{.text-center.s-purple.s-vertical.perfect-list} _{.n}6_, _{.n}28_,
_{.n}496_, _{.n}8,128_, _{.n}33,550,336_, _{.n}858,986,9056_,
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

    x-media(src="images/euclid.jpg" width=220 height=269)

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

Let's start with `x_1 = 5` and see what happens:

{.text-center.s-orange.with-arrows} _{.n}5_, _{.n}[[16]]*{span.arrow}×3 +1*_,
_{.n}[[8]]*{span.arrow.reveal(when="blank-0")}÷2*_,
_{.n}[[4]]*{span.arrow.reveal(when="blank-1")}÷2*_,
_{.n}[[2]]*{span.arrow.reveal(when="blank-2")}÷2*_,
_{.n}[[1]]*{span.arrow.reveal(when="blank-3")}÷2*_,
_{.n}[[4]]*{span.arrow.reveal(when="blank-4")}×3 +1*_,
_{.n}[[2]]*{span.arrow.reveal(when="blank-5")}÷2*_,
_{.n}[[1]]*{span.arrow.reveal(when="blank-6")}÷2*_, …

---
> id: hailstone-1
> goals: var-max

It looks like after a few terms, the sequence reaches a "cycle": 4, 2, 1 will
continue to repeat over and over again, forever.

Of course, we could have picked a different starting point, like ${n}{n|10|5,40,1}.
Then the sequence would look like this:

{.text-center} _{span.var.s-orange}${hailstones(n)}_, *{span.s-red}_{.n}4_,
_{.n}2_, _{.n}1_,* *{span.s-purple}_{.n}4_, _{.n}2_, _{.n}1_,*
*{span.s-blue}_{.n}4_, _{.n}2_, _{.n}1_, …*

---
> id: hailstone-2
> goals: var-max var-min

It seems like the length of the sequence varies a lot, but it will always end up
in a 4, 2, 1 cycle – no matter what first number we pick. We can visualise the
terms of the sequence in a chart:

    x-coordinate-system(margins="12 12 24 40")
      .hailstone-slider.md #[span Start value:]${n}{n|12|1,50,1}

{.reveal(when="var-min")} Notice how some starting points end very quickly,
while others (like _{span.var-action}31_ or _{span.var-action}47_) take more
than one hundreds steps before they eventually reach the 4, 2, 1 cycle.

---
> id: hailstone-3

::: column.grow

All sequences that follow this recursive formula are called [__Hailstone
Sequences__](gloss:hailstone-sequence), because they seem to move randomly up
and down before hitting the 4, 2, 1 cycle – just like hailstones that move up
and down in a cloud before crashing to Earth.

In 1937, the mathematician [Lothar Collatz](bio:collatz) proposed that _every_
hailstone sequence sequence eventually ends in a 4, 2, 1 cycle – whatever
starting value you pick. You've already checked a few starting points above, and
computers have actually tried all numbers up to `10^20` – that’s 100 billion
billion or a 1 followed by twenty zeros.

::: column(width=240)

    x-media(src="images/storm.jpg" width=240 height=340)

:::

However, there are infinitely many integers. It is impossible to check each of
them, and no one has been able to find a [proof](gloss:proof) that works for
all.

Just like the search for odd perfect numbers, this is still an open problem in
mathematics. It is amazing that these simple patterns for sequences can lead to
questions that have mystified even the best mathematicians in the world for
centuries!

---
> id: quiz

### The Sequence Quiz

{.todo} You've now seen many different mathematical sequences, some with geometric
patterns, xxx

In this quiz you have just one goal: find the pattern in the sequence and
calculate the next two terms:

::: .box.problem-box
    .box-title: h3 The Next Number
::: .box-body

{.text-center.s-teal} _{span.n}7_, _{span.n}11_, _{.n}15_, _{.n}19_, _{.n}23_,
_{.n}27_, _{.n}[[31]]_, _{.n}[[35]]_, …

{.text-center.s-teal} _{span.n}11_, _{span.n}14_, _{.n}18_, _{.n}23_, _{.n}29_,
_{.n}36_, _{.n}[[44]]_, _{.n}[[53]]_, …

{.text-center.s-teal} _{span.n}3_, _{span.n}7_, _{.n}6_, _{.n}10_, _{.n}9_,
_{.n}13_, _{.n}[[12]]_, _{.n}[[16]]_, …

{.text-center.s-teal} _{span.n}5_, _{span.n}8_, _{.n}10_, _{.n}14_, _{.n}12_,
_{.n}17_, _{.n}[[15]]_, _{.n}[[21]]_, …

{.text-center.s-teal} _{span.n}5_, _{span.n}8_, _{.n}10_, _{.n}14_, _{.n}12_,
_{.n}17_, _{.n}[[15]]_, _{.n}[[21]]_, …



:::
:::

---
> id: look-and-say

Here is one more sequence that is a bit different from all the ones you've seen
above. Can you find the pattern?

{.text-center.s-teal.s-vertical} _{span.n}1_, _{span.n}11_, _{.n}21_,
_{.n}1211_, _{.n}111221_, _{.n}312211_, …

_{button.next-step} Continue_

---
> id: look-and-say-1

This sequence is called the __Look-and-Say__ sequence, and the pattern is just
what the name says: you start with a 1, and every following term is what you
get if you "read out loud" the previous one. Here is an example:

{.todo} image

Can you now find the next terms?

{.text-center.s-teal.s-vertical} …, _{.n}312211_, _{.n}[[13112221]]_,
_{.n}[[1113213211]]_, …

    // This sequence is often used as a ‘guess the next term’ puzzle, designed to trip up mathematicians due to its apparently non-mathematical recurrence relation, yet perhaps surprisingly, there are a wealth of mathematically interesting facts about the sequence.
    // For instance, every term ends in one, and no digit over 3 ever gets used (can you see why this is?). Also, the word lengths exhibit a pattern: the nth root of the length of the nth number tends to a limit, namely 1.303577..., which has been proved to be an algebraic number of degree 71. This is true regardless of what the first term is, except for one degenerate case, in which the starting term repeats ad infinitum. (Can you find this term? It has only 2 digits).
    // Most amazing of all is Conway’s Cosmological Theorem: no matter what the starting value for the sequence is, it eventually splits into a sequence of ‘elements’ which don’t interact with their neighbours in later terms of the sequence. (There are exactly 94 such elements, named Hydrogen, Helium, ..., Plutonium by Conway).



--------------------------------------------------------------------------------



## Fibonacci Numbers

> section: fibonacci
> id: rabbits

Imagine that you’ve received a pair of baby rabbits, one male and one female.
They are very special rabbits, because they never die, and the female one gives
birth to a new pair of rabbits exactly once every month (always one male and one
female.)

    x-slideshow
      .stage.rabbits(slot="stage")
        .rabbits-wrap.s-orange
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
          .n(style="top: 14%") 1
          .n(style="top: 31%") 2
          .n(style="top: 49%") 3
          .n(style="top: 66%") 5
          .n(style="top: 83%") 8

      .legend(slot="legend") In the first month, the rabbits are very small and can’t do much, but they grow very quickly.
      .legend(slot="legend") After one month, the rabbits are grown up and can start mating…
      .legend(slot="legend") … and after another month, they will give birth to their first pair of kids. You now have two pairs of rabbits.
      .legend(slot="legend") In the next month, your pair of rabbits will give birth to another couple. Meanwhile, the first pair of kids have grown up. You now have three pairs in total.
      .legend(slot="legend") In the fifth month, your original pair of rabbits will give birth to a new pair of kids. At the same time, their first pair of kids is now old enough to give birth to grandkids. You now have five pairs of rabbits.
      .legend(slot="legend") In the sixth month, there are three more couples that give birth: the original one, as well as their first two pairs or kids.

---
> id: rabbits-1

In the following month you would have 13 couples of rabbits: the 8 ones from the
previous month, plus 5 new babies. Can you detect a pattern in this sequence of
numbers? If we keep on going like this, how many rabbits will there be after a
year?

{.todo} The number of rabbits in a particular month is [[sum of the two previous
numbers|twice the previous number]].
In other words, the recurrence relation for the sequence is
In every month, the number of rabbits (xn) is the number of rabbits in the previous month (xn-1), plus the
In other words, add the _previous two_ terms in the sequence, to get the next
one. The [recursive equation](gloss:sequence-recursive) is
xn = xn-1 + xn-2

Can you calculate the number of rabbits after a few more months?

{.text-center.s-orange} _{.n}1_, _{.n}1_, _{.n}2_, _{.n}3_, _{.n}5_, _{.n}8_,
_{.n}[[13]]_, _{.n}[[21]]_, _{.n}[[34]]_, _{.n}[[55]]_, _{.n}[[89]]_,
_{.n}[[144]]_, …

So in the 12th month, you’ll have 144 pairs of rabbits!

    figure: x-media(src="images/rabbits.jpg" width=600 height=230)

---
> id: fibonacci

These numbers are called the __Fibonacci Sequence__, named after the Italian
mathematician [Leonardo Fibonacci](bio:fibonacci).

::: column.grow
When Fibonacci was born in XXX, most people in Europe still used the Roman
numeral system when writing numbers: IVX. Fibonacci’ father was a merchant,
and together they travelled to Northern Africa as well as the Middle East. It
was there, that Fibonacci first heard about the Arabic numeral system, which is
essentially what we use today: 0, 1, 2, 3, …

When he returned to Italy, Fibonacci wrote a book called _Liber Abaci_ (Latin
for “The Book of Calculations”). In it, he first introduced the new Arabic
numerals to European merchants, and they were an immediate success.
::: column(width=300)

    x-media(src="images/fibonacci.jpg" width=300 height=300)
    .caption Portrait of Leonardo Fibonacci

:::

On one of the pages of his book, he also investigated the breeding patterns of
rabbits, and that’s why the Fibonacci numbers are named after him.

    figure
      x-media(src="images/liber-abaci.jpg" width=440 height=290 lightbox)
      p.caption Pages from Fibonacci’s _Liber Abaci_

---
> id: spirals
> goals: s11 s12 s21 s22

Of course, the Fibonacci numbers are not _actually_ how rabbits populate in real
life. Usually, rabbits have more than two offspring per month, and we haven’t accounted for
rabbits dying eventually.

But it turns out that there are many other places where Fibonacci numbers _do_
appear in nature. One example are the spirals in sunflowers or pine codes:

::: column(width=320)

    x-select.spiral-tabs
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/pinecone.jpg)")
      .clockwise(style="background-image: url(images/pinecone-1.jpg)")
      .anticlockwise(style="background-image: url(images/pinecone-2.jpg)")

::: column(width=320)

    x-select.spiral-tabs
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/sunflower.jpg)")
      .clockwise(style="background-image: url(images/sunflower-1.jpg)")
      .anticlockwise(style="background-image: url(images/sunflower-2.jpg)")
:::

---
> id: spirals-1

Both the pinecone and the sunflower have two sets of spirals: one in the
clockwise direction, and one in the anticlockwise direction. Let’s count how
many there are:

{.todo} always consecutive Fibonacci numbers

---
> id: spirals-2

Similarly, if you count the number of petals in a flower, you will often find
that it is a Fibonacci number. Next time you’re outside, have a look!

{.todo} Bees

    //- The rabbit problem is obviously very contrived, but the Fibonacci sequence does occur in real populations. Honeybees provide an example. In a colony of honeybees there is one special female called the queen. The other females are worker bees who, unlike the queen bee, produce no eggs. The male bees do no work and are called drone bees.
    //- Males are produced by the queen’s unfertilised eggs, so male bees only have a mother but no father. All the females are produced when the queen has mated with a male and so have two parents. Females usually end up as worker bees but some are fed with a special substance called royal jelly which makes them grow into queens ready to go off to start a new colony when the bees form a swarm and leave their home (a hive) in search of a place to build a new nest. So female bees have two parents, a male and a female whereas male bees have just one parent, a female.
    //- Let’s look at the family tree of a male drone bee.
    //- He has 1 parent, a female.
    //- He has 2 grandparents, since his mother had two parents, a male and a female.
    //- He has 3 great-grandparents: his grandmother had two parents but his grandfather had only one.
    //- How many great-great-grandparents did he have?
    //- Again we see the Fibonacci numbers : 
    //- Number of	parents	grandparents	great-
    //- grandparents	great-great-
    //- grandparents	great-great-great-
    //- grandparents
    //- of a MALE bee	1	2	3	5	8
    //- of a FEMALE bee	2	3	5	8	13

---
> id: golden-spiral

### The Golden Ratio

Like for many of the sequences before, there is a geometric representation of the
Fibonacci numbers:

    x-slideshow
      .stage(slot="stage"): include svg/spiral.svg
      .legend(slot="legend") We start with two small squares of size 1.
      .legend(slot="legend") Next, we add a new square of size 2, to form a large rectangle.
      .legend(slot="legend") Next, we add a square of size 3, to form an even larger rectangle.
      .legend(slot="legend") The next square has size 5. Can you see that we’re recreating the Fibonacci numbers?
      .legend(slot="legend") If we continue adding squares, they will have size 8, 13, 21, and so on.
      .legend(slot="legend") You might have noticed that, as the rectangles get larger, they seem to start “spiraling” outwards. We can even visualise this by drawing a perfect spiral that connects the corners of the squares.

---
> id: golden-ratio

{.todo} the proportions of the rectangle are consecutive fibonacci numbers

::: column(width=80 parent="padded-thin")

    include svg/golden-1.svg

{.text-center} `2/1 = 2`
::: column(width=80)

    include svg/golden-2.svg

{.text-center} `3/2 = 1.5`
::: column(width=80)

    include svg/golden-3.svg

{.text-center} `5/3 = 1.666…`
::: column(width=80)

    include svg/golden-4.svg

{.text-center} `8/5 = 1.6`
::: column(width=80)

    include svg/golden-5.svg

{.text-center} `13/8 = 1.625`
::: column(width=80)

    include svg/golden-6.svg

{.text-center} `21/13 = 1.615…`
::: column(width=20)

{.text-center} …

::: column(width=80)

    include svg/golden-7.svg

{.text-center} `phi = 1.618…`
:::

If we divide consecutive Fibonacci numbers, you can see that their ratio seems
to get closer and closer to some specific number around 1.6. This number is
called the [__Golden Ratio__](gloss:golden-ratio), and represented by the Greek
letter p ("phi). The corresponding rectangle that has these proportions is
called the __Golden Rectangle__.

Even through all of the ratios in the sequence are rational numbers, the Golden
Ratio is __irrational__ – just like Pi, `sqrt(2)` and other numbers you’ve seen
before.

Many people believe that the Golden Ratio is particularly beautiful and
aesthetically pleasing, which is why it seems to appear everywhere in art and
architecture:

{.todo} It has a value of $(\sqrt 5 + 1)/2$ ( approximately 1.618034) and is often represented by a Greek letter Phi, written as $\Phi $. The closely related value which we write as $\phi $, a lowercase phi, is just the decimal part of Phi, namely 0.618034... ($(\sqrt 5 - 1)/2$), the number that accounts for the spirals in the seedheads and the arrangements of leaves in many plants. But why do we see phi in so many plants?
{.todo} The number Phi (1.618034...), and therefore also phi (0.618034...), are irrational numbers: they can’t be written as a simple fraction. 

{.todo} examples

---
> id: sunflower-growing

### Fibonacci Spirals

The golden ratio also explains why Fibonacci numbers appear in Nature, like the
sunflower and pinecone you saw above.

::: column.grow

Both these plants grow outwards from the center – a part of the plant called the
_meristem_. As new seeds, leaves or petals are added, the push the existing ones
bit further outside.

As you move the slider on the right, notice how every new leaf is added at a
slightly different rotation than the previous one. The angle between consecutive
leafs is always constant.

::: column(width=300)

    svg.petals(width=300 height=300)
      circle(r=60 cx=150 cy=150)
      - var i = 0
      while i < 40
        path(d="M166,158A20,20,0,0,1,150,150a20,20,0,0,1,32,0A20,20,0,0,1,166,158Z")
        - i += 1

    x-slider(steps=39)

:::

---
> id: sunflower-spiral

Picking a suitable angle is very important for flowers: they want all leaves
(or seeds) to be approximately equally spaces. That way, they all get a similar
amount of sunlight and nutrients, which is much more efficient than crowing
all leaves in a few specific areas.

In the diagram below you can explore what the flower will end up looking like
for different angles.

    svg.fib-spiral(width=400 height=400 viewBox="0 0 400 400")
    x-slider(steps=1000)

{.todo} If the angle is 0, all seeds will grow in a single long row away from the
center. If the angle is `1/2` of a full a rotation, the seeds will alternate
between two separate “arms” that move away from the center.

{.todo} Something similar happens for any other simple fraction of a turn: seeds
grow in spiral arms that leave a lot of space between them (the number of arms
is the denominator of the fraction). So the best value for the turns between
seeds will be an irrational number. But not just any irrational number will do.
For example, the seed head created with pi turns per seed seems to have seven
spiralling arms of seeds. This is because 22/7 is a very good rational
approximation of pi. What is needed in order not to waste space is an irrational
number that is not well approximated by a rational number.
 
{.todo} It turns out that the Golden Ratio Phi is the “most irrational” of all
irrational numbers. If the rotation is `1/phi` of a full circle, we always get
the most optimal distribution of seeds, leaves or petals.

It is important to remember that nature doesn’t know about Fibonacci numbers,
and nature can’t solve equations to calculate the golden ratio. But over the
course of millions of years, plants had plenty of time to try out different
angles – and to discover the best one.

Plants and animals always want grow in the most efficient way, and that is why
nature if full of regular, mathematical patterns.

---
> id: fibonacci-puzzles

### Fibonachos

So far, we have only used the recursive equation for Fibonacci numbers. There
actually is an explicit equation, too – but it is much more difficult to
find:

{.text-center} `F_n = 1/sqrt(5) ( ((1 + sqrt(5))/2)^n + ((1 - sqrt(5))/2)^n )`

For example, the 8th Fibonacci number is `F_8 = `


There are many other puzzles, patterns and applications related to Fibonacci
numbers. Here are a few examples, which you can try to solve yourself:

::: tab
#### Investigate

__(1) Fibonacci Factors__

In the Fibonacci sequence, which numbers are even? Is there a pattern to how
they are positioned? And can you explain why?

What happens if you look at numbers divisible by 3, or numbers divisible by 4?


Which Fibonacci numbers are divisible by 3? 

::: tab
#### Hints and Solutions


:::

Solution: https://nrich.maths.org/2046/solution

Try adding together any three consecutive Fibonacci numbers.
What do you notice? Can you explain it?

Choose any four consecutive Fibonacci numbers. Add the first and last, and divide by two.
What do you notice? Can you explain it?

Add together any six consecutive Fibonacci numbers and divide by four.
What do you notice? Can you explain it?

It’s a long way to the top

Every time I come home I have to climb a flight of stairs. When I’m feeling energetic I sometimes take two steps at a time. This gives me a number of ways to climb the stairs. For example, if there are ten steps, I could climb them taking five leaps of two, giving the pattern
2, 2, 2, 2, 2.
Or I could only use a leap of two at the beginning and the end, giving the patter
2, 1, 1, 1, 1, 1, 1, 2.
How many ways are there all together of climbing the ten steps?
Can you find a formula to express the number of ways there of climbing $n$ steps using leaps of one and two?

    // TODO Lucas Numbers

---
> id: fibonachos

    figure
      x-media(src="images/fibonachos.jpg" width=600 height=282)
      p.caption © FoxTrot, by Bill Amend



--------------------------------------------------------------------------------



## Pascal’s Triangle

> section: pascals-triangle
> id: pascal-intro

Below you can see a number pyramid that is created using a simple pattern: it
starts with a single “1” in first top, and every following cells is the sum of
the two cells directly above. Hover over some of the cells to see how they are
calculated, and then fill in the missing ones:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };

    .pascal-grid
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

This diagram only showed the first twelve rows, but we could continue forever,
adding new rows at the bottom. Notice that the triangle is
[[symmetric|right-angled|euilateral]], which can help you calculate some of the
cells.

---
> id: pascal-triangle

The triangle is called __Pascal’s triangle__, named after the French
mathematician [Blaise Pascal](bio:pascal). He was one of the first European
mathematicians to investigate its patterns and properties, but it was known to
other civilisations, many centuries earlier:

::: column(width=200)

    x-media(src="images/pascal-1.jpg" width=130 height=280)

{.caption} In 450BC, the Indian mathematician [Pingala](bio:pingala) called the
triangle the __“Staircase of Mount Meru”__, named after a sacred Hindu mountain.

::: column(width=200)

    x-media(src="images/pascal-2.jpg" width=200 height=280)

{.caption} In Iran, it was known as the __“Khayyam triangle”__ (مثلث خیام),
named after the Persian poet and mathematician [Omar Khayyám](bio:khayyam).

::: column(width=200)

    x-media(src="images/pascal-3.jpg" width=200 height=280)

{.caption} In China, the mathematician Jia Xian also discovered the triangle.
It was named after his successor, as __“Yang Hui’s triangle”__ (杨辉三角).

:::

Pascal’s triangle can be created using a very simple pattern, but it is filled
filled with surprising patterns and properties. That’s why it has fascinated
mathematicians across the world, for hundreds of years.

_{button.next-step} Continue_


---
> id: pascal-sequences

### Finding Sequences

In the previous sections, you have learned about many different sequences. It
turns out that many of them can also be found in Pascal’s triangle:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };

    .pascal-grid.sums
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
If you add up all the numbers in a row, their sums for another sequence: the
[[powers of two|perfect numbers|prime numbers]].
::: tab
#### {.btn.teal} _{span.check(when="blank-5")}_
In every row that starts with a prime number in its second cell, all following
numbers are [[multiples|factors|inverses]] of that prime.
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
triangle. Clearly there are infinitely many 1s, and every other number appears
[[at least twice|at least once|exactly twice]], _{span.reveal(when="blank-0")}
in the second diagonal on either side._

---
> id: pascal-sequences-2

Some numbers in the middle of the triangle also appear three or four times.
There are even a few that appear six times: you can see both [120](-> .s120) and
[3003](-> .s3003) four times in the triangle above, and they’ll appear two more
times each in rows 120 and 3003.

Since 3003 is a triangle number, it actually appears two more times in the third
diagonals of the triangle – that makes eight occurrences in total.

It is unknown if there are other numbers that appear eight times in the
triangle, or if there are numbers that appear more than eight times. The
American mathematician [David Singmaster](bio:singmaster) hypothesised that
there is a fixed limed on how often numbers can appear in Pascal’s triangle –
but it hasn’t been proven yet.

---
> id: pascal-modular
> goals: select

### Divisibility

Some patterns in Pascal’s triangle are not quite as easy to detect. In the
diagram below, highlight all the cells which are even:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };

    .pascal-grid#pascal-select
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
> id: pascal-modular-1
> goals: c2 c3 c4 c5

Colouring each cell manually takes a long time, but here you can see what
happens if you would do this for many more rows. And what about cells divisible
by other numbers?

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };

    .pascal-grid.small
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
> id: pascal-modular-2

::: column.grow
Wow! The coloured cells always appear in triangles (except as single cells,
which could be seen as triangles of size 1).

If we continue the pattern of cells divisible by 2, we get one that is very
similar to the __Sierpinski triangle__ which you can see on the right. Shapes
like this, which consist of a simple pattern that seems to continue forever
while getting smaller and smaller, are called [__Fractals__](gloss:fractal).
You will learn more about them in the future…

::: column.width(280)

    img(src="images/sierpinski.svg" width=280 height=243 alt="Sierpinski Triangle")
    p.caption The Sierpinski Triangle

:::

---
> id: pascal-binomial

### Binomial Coefficients

There is one more important property of Pascal’s triangle that we need to talk
about. To see it, we will try to solve the same problem with two completely
different methods, and then see how they are related.

{.todo} COMING SOON

    // Galton Board, normal distribution



--------------------------------------------------------------------------------



## The In-and-out Puzzle

> section: in-and-out
> sectionStatus: dev
> id: in-and-out-intro

{.todo} COMING SOON

    // http://mathworld.wolfram.com/JosephusProblem.html

    // Once there was an indecisive casting director. He would narrow down his
    // choice for a role to twelve actors, and then be stuck. So, he made a habit
    // of arranging the actors in a circle and going around in a circle, saying
    // “Maybe you, not you, maybe you, not you, ...” and so on. After each “not
    // you,” that person left the circle, so it would shrink until there was just
    // a single person left, who would get the role.

    // A clever actress decided she would get the role. There were 10 people in
    // her circle. Where must she stand to be the last one in the circle? 

    // An actor auditioning for a different part was faced with 20 in his circle.
    // Where should ! he stand?
    
    // Find a pattern that tells you where to stand no matter how many people
    // are in the circle. Why does it work? 

    // What if the director eliminates every mth person? Where should you stand
    // in a circle of n? 

    // What about “in, in, out, out,” leaving two in and then kicking two out? 

    // With eight people, for example, you’ll lost the even numbers on round one,
    // 3 and 7 on round two, and 5 on round three, making 1 the winner.

    // Cross out the first person (person 2). At this point, there’s one fewer
    // people in the circle, and we’re beginning at person three instead of
    // person 1. So your answer for n people should be the same as for n-1,
    // except the people are relabeled with a number 2 greater. In other words,
    // if for the nth circle you stands in position p, for the n+1st circle you
    // stand in position  p +2. However, this number may be larger than n+1, so
    // we have to reduce it mod n+1 if necessary. It’s possible to get a formula
    // for this, and that’s a nice challenge for kids who are ready for it. But
    // for most, just elucidating the pattern will be enough.



--------------------------------------------------------------------------------


## Limits and Convergence

> section: limits-and-convergence
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
