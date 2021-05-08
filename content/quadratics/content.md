# Quadratic Equations

## Introduction

> id: intro
> section: introduction
> color: "#F6700F"
> level: Intermediate
> next: graph-theory

    img.text-wrap(src="images/skater-1.jpg" style="shape-outside: url(images/skater-1-mask.png)" width=300 height=393)

Welcome to SkateSum, a small company that produces skateboards. Engineers have
been working on a brand new model, the _SquareBoard_, which is finally ready to
start production. You’ve been put in charge of finding the optimal resale price
for the skateboards – and it turns out that building them is not cheap:

* The tools and machines required to construct skateboards cost \$5,000. This is
  often called a __fixed cost__.
* Every skateboard costs additional \$30 worth of of wood, other materials,
  and salary for the employees. This is often called a __variable cost__.

In other words, the __cost__ of producing _n_ skateboards is

{.text-center.no-voice} [cost](pill:orange) = _{x-equation(solution="5000+30×n")}_.

---
> id: demand

The new skateboards are highly anticipated, but if the price is too high, fewer
people will actually buy one. We can show this on a chart with the price of a
skateboard along the _x_-axis, and the corresponding number of people who want
buy one (the __demand__) on the _y_-axis.

Which of these charts makes most sense for the relationship between price and
demand?

    x-picker.wrap
      .item(data-error="wrong-chart-1" style="width: 220px")
        x-coordinate-system(width=220 height=180 x-axis="0,10,2" y-axis="0,10,2" axis-names="price,demand" crosshairs="no" labels="no" fn="0.6x + 2")
      .item(style="width: 220px")
        x-coordinate-system(width=220 height=180 x-axis="0,10,2" y-axis="0,10,2" axis-names="price,demand" crosshairs="no" labels="no" fn="8 - 0.6x")
      .item(data-error="wrong-chart-2" style="width: 220px")
        x-coordinate-system(width=220 height=180 x-axis="0,10,2" y-axis="0,10,2" axis-names="price,demand" crosshairs="no" labels="no" fn="2.5 * sqrt(x)")

---
> id: demand-1

A higher price means that fewer people want to buy a skateboards, so the graph
of the function has to move downwards. After doing some market research,
economists came up with the following equation:

{.text-center} [demand](pill:teal) = 2800 – 15 × [price](pill:purple)

For example, if a skateboard costs \$80, the demand will be [[1600]] units.

---
> id: intro4

    //- img.text-wrap.s-hide(src="images/skater-3.jpg" style="shape-outside: url(images/skater-3-mask.png)" width=280 height=480)

The __revenue__ of our company is the total income we make. It is the number of
skateboards sold (the _demand_) times the price of each:

{.text-center} [revenue](pill:green) = [demand](pill:teal) × [price](pill:purple)

But the number we are more interested in is our __profit__: the revenue we make
from selling skateboards, minus the cost of producing them. Can you find an
equation that expresses our [profit](pill:yellow) in terms of just the
[price](pill:purple) of every skateboard?

    x-equation-system(steps="demand*price-(5000 + 30*demand) | (2800-15*price)*price-5000-30*(2800-15*price)" hints="intro-1|intro-2|intro-3")
      table
        tr
          td: em.pill.yellow profit
          td= '='
          td #[em.pill.green revenue] − #[em.pill.orange cost]
        tr
          td
          td= '='
          td: x-equation(solution="-15 × price^2 + 3250 × price - 89000" substitutions="cost: 89000 - 450 price | demand: 2800 - 15 price | revenue: 2800 price - 15 price^2")

---
> id: intro-table

Notice that this equation contains [price](pill:purple) as well as [`price^2`](pill:purple). It is
called a [__Quadratic Equation__](gloss:quadratic-equation), named after the Latin word “quadratus”
for square.

To work out how to maximise our profit, let’s calculate the profit for a few
different prices:

::: .overflow-wrap.overflow-table

| [price/$](pill:purple)  | 20   | 40   | 60  | 80  | 100 | 120 | 140 | 160 | 180 |
| [profit/$](pill:yellow) | –30k | 17k | [[52]]k | [[75]]k | [[86]]k | [[85]]k | _{span.reveal(when="blank-3")}72k_ | _{span.reveal(when="blank-3" delay=400)}47k_ | _{span.reveal(when="blank-3" delay=800)}10k_ |
{.grid}

:::

---
> id: intro-chart

Now we can plot all these points in a coordinate system, and connect them with
a line:

    x-coordinate-system(width=640 height=400 x-axis="-20,200,20" y-axis="-100000,100000,20000" axis-names="price/$,profit/$" padding=10 animate)
      .region.r1(style="top: 48%; height: 46%; left: 6%; width: 6%;")
      .region.r2(style="top: 26%; height: 40%; left: 79%; width: 21%;")

You’ll remember that the graph of a [linear function](gloss:linear-function) is
always a straight line. But as you saw above, the graph of a [quadratic
function](gloss:quadratic-function) is curved. It even has a specific name: a
[__Parabola__](gloss:parabola).

If the [price is 0](->.r1), our profit is negative, because we’re just
giving away expensive skateboards for free. As the price increases, our
profits rise, too. However, if the skateboards become [too expensive](->.r2),
people no longer want to buy them and our profit falls again.

We can maximise our profit by pricing the skateboards at approximately
\$[[108 ± 10]].

---
> id: intro-final

    figure: x-img(src="images/skater-2.jpg" alt="Skateboarder" width=400 height=352)

In the real world, it can be very difficult for companies to determine a precise
equation for their profit – and it is likely to be much more complicated than
this example.

Still, quadratic equations appear everywhere in nature, engineering and
economics. In this course you will learn different methods for solving
quadratic equations and to understand their graphs.



--------------------------------------------------------------------------------



## Binomial Expressions

> section: binomials
> sectionStatus: dev

TODO



--------------------------------------------------------------------------------



## Solving Quadratic Equations

> id: definitions
> section: solving
> sectionStatus: dev

You already know how to solve [_linear equations_](gloss:linear-equation):
equations of the form `ax + b`, where _x_ is a [variable](gloss:variable), and
_a_ and _b_ are some specific numbers.

Now let’s think about a more complex class of equations which also contain
`x^2`. A [__quadratic equation__](gloss:quadratic-equation) is an equation of
the form

{.text-center} `ax^2 + bx + c = 0`,

where _x_ is a variable and _a_, _b_, and _c_ are some specific numbers (called
_coefficients_). Both `b` and `c` could be 0, but `a` can’t be 0 because then
we would just have [[a linear equation|zero|no solution]].

---
> id: parabola

Like you saw in the [introduction](/course/quadratics/introduction), plotting the graph of a
quadratic function in a coordinate system gives a curved shape called a __Parabola__:

    x-coordinate-system(x-axis="-5,5,1" y-axis="-3,5,1")

{.text-center} `y =`${a}{a|1|-5,5,0.1} `x^2+`${b}{b|0|-5,5,0.1} `x+`${c}{c|0|-5,5,0.1}

Try changing the values of _a_, _b_ and _c_, and see how the parabola changes.

{.reveal(when="var-0 var-1 var-2")} To solve a quadratic equation, we have to find the points where
`y = 0`. These are the points where the graph of the parabola [[crosses the x-axis|crosses the
y-axis|turns around]].

{.reveal(when="blank-0")} While linear equations always have exactly one solution, we can see from
the diagram that quadratic equations can sometimes have and [no solution](action:set(1,-2,2)),
[one solution](action:set(1,2,1)), or even [two solutions](action:set(1,-4,2)).

In the following sections we will discover why that is the case, learn several different methods to
find all solutions of a quadratic equation.

---

### Level 0: Taking Square Roots

When trying to solve equations, we often use _opposites_ of mathematical
operators. For example, addition and subtraction are opposites, and
multiplication and [[division|addition|square roots]] are opposites. The opposite
of squaring a number is taking the square root. For example, `5^2 = 25`, so `sqrt(25) = 5`.

This can help us to solve some simple quadratic equations:

{.text-center} `x^2 - 25 = 0`

First, we isolate `x^2` on one side of the equation:

{.text-center} `x^2 = 25`

Now we take square roots of both sides, remembering to add a ±:

{.text-center}
`x = +- sqrt(25)`
`x = +- 5`

Sometimes we have to do a bit more work to isolate `x^2`:

* For every value of `x^2`, there are [[two|three|one]] possible values of `x`:
  a positive and a negative one. For example, if `x^2=`${x*x}{x|4|2,10,1}, we
  don't know if `x=`${x} or `x=`${'–'+x}. In this case, the quadratic equation
  has two solutions.

* {.reveal(when="blank-0")} Square numbers are always positive. This means that
  there [[is no number|are multiple numbers]] `x` that could satisfy `x^2 = -9`.
  This equation has __no solutions__.

{.eqn-system}
| `3` | `x^2` | `-11` | `=` | `7`           | {.eqn-comment} add 11 to both sides |
| `3` | `x^2` |       | `=` | `18`          | {.eqn-comment} divide both sides by 3 |
|     | `x^2` |       | `=` | `6`           | {.eqn-comment} take square roots of both sides |
|     | `x`   |       | `=` | `+-sqrt(6)` |
|     |       |       | `=` | `+-2.45`     |

{.todo} Something about exactness and how to express solutions

As an abbreviation, we sometimes write `x = +-`${x} (“_x_ equals plus-minus ${x}”).

EXAMPLE 11: Solve `x^2=100`.
Answer: Easy. `x=10` or `x=−10`.

The only possible difficulty here is that students often forget that in algebra
most numbers have two square roots.

EXAMPLE 12: Solve `w^2=36`.
Answer: Easy. `w=6` or `w=−6`.

EXAMPLE 13: Solve `x^2=17`.
Answer: Okay, not as pretty but just as easy: `x=sqrt(17)` or `x=−sqrt(17)`.

EXAMPLE 14: Solve `x^2=0`.
Answer: Zero is the only number with just one square root: x=0 is it.

PRACTICE 15: Solve:
a) x^2=121.
b) p^2=40.
c) y^2+5=14.
d) 2x^2=50.
e) x^2=−6.

---

### Level 1:

EXAMPLE 17: Solve `(x+3)^2=100`.

Answer: A tad more complicated but still easy. This problem is saying:
“Something squared is 100.” So the something must be 10 or −10. That is:

`x+3=10`   or   `x+3=−10`
yielding:
`x=7`    or   `x=−13`.

---

::: tab

#### Example

__Solve `(y−4)^2=25`__

Answer: We have:
y−4=5    or    y−4=−5
yielding:
y=9    or   y=−1.

WARNING!!   Many students like to answer questions like these using the ±
symbol. But there is a potential danger. Some will then write the following:

`(y−4)^2=25`
`y−4=±5`
`y=±9`

::: tab

#### Example 2

__Solve 4(p+2)2−16=0__

Answer: Add 16:

4(p+2)2=16.

Divide though by 4:

(p+2)2=4.

So

p+2=2   or   p+2=−2
yielding:
p=0    or    p=−4.

::: tab

#### Example 3

__Solve (x+7)2+9=0__

Answer: We have (x+7)2=−9. In the system of real numbers, it is impossible
for a quantity squared to be negative. This equation has no solution.

::: tab

#### Example 4

__Solve (x−1)2=5__

Answer: We have:

x−1=√5    or    x−1=−√5
So
x=1+√5    or   x=1−√5.

::: tab

#### Example 5

__Solve (x+3)2=49__

Answer: We have:

x+3=7    or    x+3=−7
yielding:
x=4    or    x=−10.

:::

---

PRACTICE 23: Solve:

a) (x−1)^2=64
b) (p−3)^2=16
c) (y+1)^2−2=23
d) 3(x−900)^2=300
e) (x−√2)^2=5

PRACTICE 24:

a) How many solutions does (x+7)^2=0 possess? What are they?
b) How many solutions does (x+7)^2=−2 have? What are they?

---

### Level 2:

EXAMPLE 25: Solve `x^2 + 6x + 9 = 49`.

Answer: If one is extremely clever one might realize that this is a repeat of
example 22:

The quantity `x2+6x+9=49` happens to equal `(x+3)^2`.

To check this, let’s work out `(x+3)×(x+3)` as the area of a square divided
into four pieces:

|     | `x`   | 3    |
| `x` | `x^2` | `3x` |
| 3   | `3x`  | 9    |
{.q-grid}

Yes, we see that (x+3)2 does equal x2+6x+9.  So the question:
Solve x2+6x+9=49 is indeed really the question:
Solve (x+3)2=49 in disguise.

We have:
x+3=7    or    x+3=−7
x=4    or    x=−10.

So the challenge in level 2 is to recognize more complicated expressions as
easy level 1 problems in disguise.

---

Here are some more examples

::: tab

#### Example 2

__Solve `x2+4x+4=25`.__

Answer: Let’s draw the square for `x^2+4x+4`.

There is an `x2` piece that must come from `x×x`.

Because we want the figure to be a perfectly symmetrical square (squares are
good for level 1) the “4x ” must come from two symmetrical pieces: 2x and 2x.

This means we must have the numbers 2 and 2 on the sides of the square, and
this is consistent with the final portion being 4.

|     | `x`   | 2    |
| `x` | `x^2` | `2x` |
| 2   | `2x`  | 4    |
{.q-grid}

Thus we see that `x^2+4x+4` is really `(x+2)^2` in disguise, and we need to solve:

`(x+2)^2=25`.

This is easy:

x+2=5    or    x+2=−5
x=3    or    x=−7.

::: tab

#### Example 2

__Solve x2−10x+25=169.__

Answer: Let’s draw the square for x2−10x+25.

There is an x2 piece that must come from x×x . And we need two (symmetrical) pieces that add to =10x.

This means the need the numbers −5 and −5, which is consistent with the final portion of the square being 25.

|     | `x`   | -5    |
| `x` | `x^2` | `-5x` |
| -5  | `-5x` | 25    |
{.q-grid}

`x^2−10x+25=169`
`(x−5)2=169`
`x−5=13`    or    `x−5=−13`
`x=18`   or   `x=−8`

::: tab

#### Example 3

__Solve x2−20x+100=7.__

Answer: We have:

|     | `x`    | -10    |
| `x` | `x^2`  | `-10x` |
| -10 | `-10x` | 100    |
{.q-grid}

x2−20x+100=7
(x−10)2=7
x−10=7–√    or   x−10=−7–√
x=7–√+10    or   x=−7–√+10  □

::: tab

#### Example 4

__Solve x2+25–√x+5=4.__

Answer: Don’t be perturbed by the numbers. Just follow things through as before.

Do you see we have this square?

|           | `x`        | `sqrt(5)`  |
| `x`       | `x^2`      | `sqrt(5)x` |
| `sqrt(5)` | `sqrt(5)x` | 5          |
{.q-grid}

x2+25–√x+5=4
(x+5–√)2=4
x+5–√=2    or    x+5–√=−2
x=2−5–√    or    x=−2−5–√  □

:::

---

PRACTICE 30: Solve:

a) x2+40x+400=100
b) p2−6p+9=9
c) x2−4x+4=1
d) 3x2−18x+27=12
e) x2−22–√x+2=19

PRACTICE 31: Solve x2+2Bx+B2=D2  in terms of B and D.

---

### Level 3

EXAMPLE 32: Solve x2+8x+15=80.

Answer: Let’s apply the technique of level 2 and draw the box.

The x2 piece must come from x×x. And because we want the symmetry of a square,
8x must come for two pieces 4x each:

|     | `x`   | `4`  |
| `x` | `x^2` | `4x` |
| `4` | `4x`  | 16   |
{.q-grid}

This means we must have the numbers 4 and 4 on the sides of the square, giving
us 16 for the remaining piece of the squares, WHICH IS INCONSISTENT WITH THE
NUMBER 15 in the problem.

It seems the box method is not of help. We have two options:

1. Give up and cry.
2. Be an adult and make it work!

Let’s follow option 2 making use of a good piece of general advice:
If there is something in life you don’t like and are not happy with, change it!

In this problem we would like the number 15 in x2+8x+15 to actually be a 16. So
let’s add one and make it 16!

Of course, to keep the equation balanced, if we add 1 to one side of an equation
we need to add 1 to the other side as well:

x2+8x+15+1=80+1.

That is, we have:

x2+8x+16=81.

And the box tells us that this is:

(x+4)2=81
and all now falls into place:

x+4=9    or    x+4=−9
x=5     or    x=−13

---

Here are a few more examples:

::: tab

#### Example 1

__Solve x2−6x+11=27.__

The box tells us that the x2 and the −6x pieces want the number 9 to
accompanying them, not 11:

|     | `x`   | `-3`  |
| `x` | `x^2` | `-3x` |
| `-3` | `-3x`  | 9   |
{.q-grid}

Let’s make that happen. Subtract 2 from both sides:

x2−6x+9=25
(x−3)2=25
x−3=5    or    x−3=−5
x=8    or    x=−2  □

::: tab

#### Example 2

__Solve x2−10x+3=0.__

Answer: The box tells us that the x2 and the −10x pieces want the number 25 to
accompanying them, not 3:

|      | `x`   | `-5`  |
| `x`  | `x^2` | `-5x` |
| `-5` | `-5x` | 25    |
{.q-grid}

So let’s add 22 to both sides to make that happen!

x2−10x+3=0
x2−10x+25=22
(x−5)2=22
x−5=2–√2    or    x−5=−2–√2
x=5+2–√2    or    x=5−2–√2

::: tab

#### Example 3

__Solve x2−6x=55.__

Answer: To obtain a perfect square add 9 to both sides.

|     | `x`   | `-3`  |
| `x` | `x^2` | `-3x` |
| `-3` | `-3x`  | 9   |
{.q-grid}

x2−6x+9=64
(x−3)2=64
x−3=8    or    x−3=−8
x=11    or    x=−5

::: tab

#### Example 4

__Solve w2+90=22w−31.__

Answer: Let’s bring all the terms containing a variable to the left side:

w2−22w+90=−31.

|     | `x`   | `-11`  |
| `x` | `x^2` | `-11x` |
| `-11` | `-11x`  | 121   |
{.q-grid}

The box tells us to add 31 to each side:

w2−22w+121=0
(w−11)2=0
w−11=0
w=11   □

:::

---

Now it's your turn! Try to solve these practice problems:

::: .box
#### Problems

Solve these equations:

a) x2+12x−5=40
b) z2+2z+3=11
c) x2−40x+300=69
d) 2f2−16f+30=48
e) x2+100x+2=3

Solve x2+3x+1=5. Don’t be afraid of fractions. You can handle them!

:::

---

### Level 4

EXAMPLE 39: Solve x2+3x+1=5.

Answer: Solving this problem does indeed require the use of fractions:

|       | `x`    | `3/2`  |
| `x`   | `x^2`  | `3/2x` |
| `3/2` | `3/2x` | `9/4`  |
{.q-grid}

Adding `9/4` to both sides gives:

x2+3x+94=5+114
(x+32)2=614
(x+32)2=254
x+32=52    or    x+32=–52
x=1    or    x=−4
However, most people would prefer to not work with fractions.

The problem here is that the middle term, the 3x, has an odd number for a
coefficient. So … If we don’t like that, let’s change it!

Perhaps the easiest way to create an even number in the middle is to multiply
everything through by 2, so x2+3x+1=5 becomes:

2x2+6x+2=10.

COMMENT: Some students might say it would be simpler to add x to both sides to
then obtain x2+4x+1=5+x. But then we have x’s on both sides of the equation,
which is annoying.

Okay … Let’s try the box method on 2x2+6x+2=10.

|      | `x`    |  |
| `2x` | `2x^2` |  |
|      |        |  |
{.q-grid}


But we have a problem now with the very first piece of the equation: We need
two symmetrical terms that multiply together to make 2x2. Most students would
suggest 2x and x, but this right away ruins the square method we’ve been
following in levels 1, 2, and 3.

ALTERNATIVE IDEA: Instead of multiplying through by 2, multiply through by 4.

This again makes the middle term even AND solves the problem with the first
term. Let’s see why:

Start with: x2+3x+1=5.

Multiply through by 4:

4x2+12x+4=20.

Now apply the box method:

|      | `2x`   | `3`  |
| `2x` | `4x^2` | `6x` |
| `3`  | `6x`   | `9`  |
{.q-grid}

We see that 4x2 comes from 2x multiplied with 2x, preserving the symmetry.

Notice that the middle term 12x splits into two equal pieces, 6x plus 6x, as
planned, which means we need the numbers 3 and 3 on the sides ( 2x times THREE
gives 6x).

We also see that the number we need from the box is 9. Adding 5 to both sides
of the equation 4x2+12+9=20 yields:

4x2+12x+9=25.

The box shows that  4x2+12x+9 is really (2x+3)2, so we have a level 1 problem:

(2x+3)2=25
2x+3=5    or    2x+3=−5
2x=2    or    2x=−8
x=1    or    x=−4  □

IF THE MIDDLE TERM IS ODD, MULTIPLYING THROUGH BY 4 IS A CLEVER IDEA!

---

::: tab

#### Example 4

__Solve x2−5x+6=2.__

Answer: Let’s multiply through by 4:

4x2−20x+24=8

|      | `2x`   | `-5`   |
| `2x` | `4x^2` | `-10x` |
| `-5` | `-10x` | `25`   |
{.q-grid}

Adding 1 to both sides gives:

4x2−20x+25=9
(2x−5)2=9
2x−5=3    or    2x−5=−3
2x=8    or    2x=2
x=4    or    x=1  □

::: tab

#### Example 4

__Solve x2+x=34.__

Answer: Let’s multiply through by 4:

4x2+4x=3

|      | `2x`   | `1`  |
| `2x` | `4x^2` | `2x` |
| `1`  | `2x`   | `1`  |
{.q-grid}

Adding 1 to both sides gives:

4x2+4x+1=4
(2x+1)2=4
2x+1=2    or    2x+1=−2
2x=1    or    2x=−3
x=12  or  x=−32  □

::: tab

#### Example 4

__Solve p2+7p−2=5__

Answer: Let’s multiply through by 4:

4p2+28p−8=20

|      | `2p`   | `7`   |
| `2p` | `4p^2` | `14x` |
| `7`  | `15x`  | `49`  |
{.q-grid}

Adding 57 to both sides gives:

4p2+28p+49=77
(2p+7)2=77
2p+7=7–√7    or    2p+7=−7–√7
2p=7–√7–7    or    2p=−7–√7–7
p=7√7–72    or    p=−7√7–72  □

:::

---

PRACTICE 43: Solve:

a) x2+11x−5=7
b) z2−3z+1=−1
c) x2−x−1=234
d) x2+5x+12=70
e) x2+3=9

---

### Level 5 Quadratics

EXAMPLE 45: Solve 3x2+5x+1=9.

Answer: This is the first example we’ve encountered with a first term more
complicated than just x2. We could divided throughout by 3 and solve instead
the equation x2+13x+13=3 and use the box method – and it will work (try it?) –
but we will be thick in the midst of fractions.

We have in the previous level multiplied through by 4 and have successfully
dealt with 4x2 as 2x×2x. This works because 4 is a perfect square.

So in this problem, let’s try making 3x2 into a perfect square by multiplying
through by 3.

9x2+15x+3=27.

The first term is 3x×3x but the middle term is 15x, which has an odd
coefficient. To avoid fractions, let’s also multiply through by 4.

36x2+60x+12=108.

This has kept the first term a perfect square – we have 36x2=6x×6x – and has
made the second term even. It seems we are set to go!

|      | `6x`    | `5`   |
| `6x` | `36x^2` | `30x` |
| `5`  | `30x`   | `25`  |
{.q-grid}

The box shows we would like the number 25 to appear. Let’s add 13 to both sides:

36x2+60x+25=121
6x+5)2=121
6x+5=11    or    6x+5=−11
6x=6    or    6x=−16
x=1    or    x=−83
Success!     □

---

The previous example illustrates …

THE ULTIMATE BOX METHOD
To solve an equation of the form:

ax2+bx+c=d
i) MULTIPLY THROUGH BY a (to make the first term a perfect square)
ii) MULTIPLY THROUGH BY 4 (to avoid fractions)
iii) DRAW THE BOX

and off you go!

THE BOX METHOD WILL NEVER LET YOU DOWN!

---

::: tab

#### Example 1

__Solve 7x2−x+1=9.__

Answer: Let’s multiply through by 7 to make the leading term a square:

49x2−7x+7=63
and through by 4 to make the second term even (and to preserve the square):

196x2−28x+28=252

|      | `14x`    | `-1`   |
| `14x` | `169x^2` | `-14x` |
| `-1`  | `-14x`   | `1`  |
{.q-grid}

Subtract 27 from each side and we’re good to go!

196x2−28x+1=225
(14x−1)2=225
14x−1=15    or    14x−1=−15
14x=16    or    14x=−14
x=87    or    x=−1   □

::: tab

#### Example 2

__Solve  2x2+3x−3=5.__

Answer: Let’s multiply through by 2 to make the first term a perfect square:

4x2+6x−6=10.

Let’s multiply through by 4 and we’ll see the fractions are cleared away:

16x2+24x−24=40.

|      | `4x`    | `3`   |
| `4x` | `16x^2` | `12x` |
| `3`  | `12x`   | `9`  |
{.q-grid}

Let’s add 33 to each side:

16x2+24x+9=73
(4x+3)2=73
4x+3=73−−√    or    4x+3=−73−−√
4x=−3+73−−√    or    4x=−3−73−−√
x=−3+73√4    or    x=−3−73√4
The numbers weren’t pretty, but the method is straightforward.    □

::: tab

#### Example 2

__Solve −2x2+3x+7=1.__

Answer: Let’s multiply through by −2 and then by 4. That is, let’s multiply through by −8.

16x2−24x−56=−8

|      | `4x`    | `-3`   |
| `4x` | `16x^2` | `-12x` |
| `-3`  | `-12x`   | `9`  |
{.q-grid}


16x2−24x+9=−8+9+56
(4x−3)2=57
4x−3=±5–√7
x=3±5√74
Done!    □   (QUESTION: Was it dangerous to use the ± symbol here?)

::: tab

#### Example 2

__Solve 11x2−x+5=0__

Answer: Let’s multiply through by 11and by 4, that is, through by 44:

484x2−44x+220=0.

|      | `22x`    | `-1`   |
| `22x` | `484x^2` | `-22x` |
| `-1`  | `-22x`   | `1`  |
{.q-grid}

Subtracting 219 from both sides gives:

484x2−44x+1=−219
(22x−1)2=−219
But there is no number whose square is negative!

The box method is telling us there is no solution to this equation! □

:::

---

COMMENT: Every example thus far has been crafted to have a solution, but this
need not always be the case. For example:

x2=9 has exactly two solutions.

x2=0 has exactly one solution.

x2=−9 has no solutions.

The box method turns every quadratic into an equation of the form:

(something)2=A.

If A is positive, there will be two solutions; if A is zero, there will be one solution; and if A is negative, there will be no solutions.

---

### Problems

PRACTICE 50: Solve:

a) 3x2+7x+5=1
b) 5x2−x−18=0
c) 3x2+x−2=2
d) 2x2−3x=5
e) 10x2−10x=1
f) 2x2−3x+2=0
g) 2x2=9
h)   4−3x2=2−x


a) A rectangle is twice as long as it is wide. Its area is 30 square inches.
What are the length and width of the rectangle?

b) A rectangle is four inches longer than it is wide. Its area is 30 square
inches. What are the length and width of the rectangle?

c) A rectangle is five inches longer than its width. Its area is 40 square
inches. What are the dimensions of the rectangle?


PRACTICE 54: Solve the following quadratic equations:

a) v2−2v+3=27
b) z2+4z=7
c) w2−6w+5=0
d) α2−α+1=74
Also note that x=(x−−√)2. Solve the following disguised quadratics.

e) x−6x−−√+8=0
f) x−2x−−√=−1
g) x+2x−−√−5=10
WATCH OUT! Explain why only one answer is valid for g).

h) 3β–2β−−√=7
i) 2u4+8u2−5=0


PRACTICE 55:

a) Show that 2(x−4)2+6 is quadratic.

b) Solve 2(x−4)2+6=10.

c) Consider y=2(x−4)2+6. What x-value gives the smallest possible value for y?

1. Question
What is the best way to solve (2x+3)2=19 ?

Solve (x+1)3=27.

Solve −3x2+5x+2=1 via the box method.

What is the perimeter of a rectangle of area 25 square inches with one side 2
inches longer than then other?

Solving (x−a)(x−b)=0 obviously gives x=a  orx=b. But if we expand the equation
it reads: x2−(a+b)x+ab=0. Apply the box method to x2−(a+b)x+ab=0. Does it also
give x=a or x=b?

---

### Factorising

Let's have a look at a slightly more complex quadratic equation

{.text-center} `x^2 - 4x = 0`

This equation contains an x-term (target) as well as an x^2 term,
which means that our previous method of isolating x^2 on one side
and then taking square roots will no longer work.

But there is a different trick to help us - we can factorise one "x"
out of both `x^2` and `4x`:

{.text-center} `x (x - 4) = 0`

Now we can use a useful property of multiplication: if the product of
two terms is 0, then one of the two terms must also be zero. There is
no way you can get 0 by multiplying two numbers which are _both not 0_.

{.todo} Image

In our example, this means that either `x = 0`, or `(x-4) = 0`. Therefore
the quadratic equation has two solutions: `x=0` and `x=`[[4]].

{.todo} Exercises

Here is another quadratic equation that can be solved using factoring:

{.text-center} `x^2 - 6x + 5 = 0`

Unlike before, we cannot just factor out _x_, because we'd still have the
5 at the end left over. Our solution needs to be a bit more clever:

{.text-center} `(x - 3)(x - 2) = 0`

If you expand those brackets, you will find that it is exactly the same.
But now we can use the same trick for a product that is 0, to find that
the quadratic equation has two solutions: `x=`[[3]] or `x=`[[2]].

Unfortunately, this doesn't explain how we found two numbers 2 and 3 that
just _happened_ to work in the equation above. To work that out, we can
work backwards:

{.eqn-system}
| `(x - P)(x - Q)` | `= 0` |
| `x^2 - Qx - Px + P*Q` | `= 0` |
| `x^2 - (P+Q)x + P*Q` | `= 0` |

{.todo} Let's start by revising how to simplify terms with brackets. For example
The trick is simply to add up all possible pairs of numbers, while taking
care to respect all minus signs:

Now, if we have a quadratic equation like `x^2-8x+15=0`, we can just compare
the coefficient to see that we want P+Q=8 and P*Q=15. After a little bit of
guesswork and trying different possibilities, we might find that one possible
solution is P=3 and Q=5. Therefore,

{.eqn-system}
| `x^2-8x+15` | `= 0` |
| `(x-3)(x-5)` | `= 0` |
| `x-3=0` or `x-5` | `= 0` |
| `x=3` or `x` | `= 5` |

Finding the numbers P and Q always takes a little bit of guesswork, but in
all the examples below it should be relatively straightforward.

{.todo} Exercises!

Try to find the missing number in these factorisation examples:

{.text-center}
x^2 + 3x + 2 = (x+1)(x+[[1]])
x^2 + 5x + 4 = (x+4)(x+[[1]])
x^2 - 8x + 15 = (x-3)(x-[[1]])
x^2 - 5x - 14 = (x+2)(x-[[1]])

{.todo} Some quadratic equations look completely ordinary to start with,
but when we factorise them, we're only left with a single bracket:
In these cases there is just a single solution for the quadratic equation.

{.todo} And finally, some quadratic equations actually have a coefficient
in front of . This makes the factorisation a bit more difficult,
but it still works the same way:



--------------------------------------------------------------------------------



## The Quadratic Formula

> section: formula
> sectionStatus: dev

    // https://betterexplained.com/articles/quadratic-formula/

Completing the square can be tricky, and it is easy to make mistakes along the
way.

Let's follow the steps when completing the square, but use _a_, _b_ and _c_
as coefficients for the quadratic equation, rather than actual numbers:

Completing the square is long and complicated, and it is easy to make mistakes.
Luckily, there is a shortcut that makes it a lot simpler!

To find it, we need to repeat the process of completing the square, but leaving
the coefficients as _a_, _b_ and _c_ rather than actual numbers.

Lets start with a quadratic equation of the form

{.text-center} `ax^2 + bx + c = 0`.

To make the first term a perfect square, we have to multiply the entire equation
by `a`. To avoid fractions, we also multiply by 4. This gives;

{.text-center} `4a2x2+4abx+4ac=0`.

Now apply the box method:

|       | `2ax`     | _b_    |
| `2ax` | `4a^2x^2` | `2abx` |
| `b`   | `2abx`    | `b^2`  |
{.q-grid}

These steps were ugly, painful, and you don't need to remember them (even
though it was just the same as completing the square, just with variables).
The result, however, was worth it: a single equation that tells us the
solutions of _any_ quadratic equation. It is often called the __Quadratic Formula__:

{.text-center#qformula} `x = (-b +- sqrt(b^2 - 4ac))/(2a)`

To solve a quadratic equation, we just have to replace _a_, _b_ and _c_ with
the actual numbers in our case, and then simplify the fraction.

Some curricula feel it is important to notice that the formula
x=−b±b2−4ac√2a represents two symmetrical values about the middle point x=−b2a.

From part 4 of this course we know that the vertex of the parabola lies halfway
between any two symmetric points. Our technique of simply looking for interesting
x-values makes the location of the vertex clear. One need not know this formula.

(But if you do want it … just write y=ax2+bx+c as y=x(ax+b)+c. This shows that
inputs x=0 and x=−ba give symmetrical outputs. The vertex is thus halfway
between these values … at x=−b2a!)

---

### The Discriminant

One particularly important part of the quadratic equation is the [term under
the square root](->#qformula_msqrt), which is called the __discriminant__.
Depending on the value of `b^2-4ac`, you can tell a lot about the solutions of
a quadratic equation, without ever actually soling it:

* If `b^2-4ac<0`, the quadratic equation has _no solutions_, because we cannot
  take square roots of negative numbers. (More on that later…)
* If `b^2-4ac=0`, the quadratic equation has _one solution_. Zero is the only
  number with just one square root, because `+sqrt(0) = -sqrt(0)`.
* If `b^2-4ac>0`, the quadratic equation has _two solutions_ like before, one
  when evaluating the quadratic formula with +, and one when evaluating it
  with –.

{.todo} Exercises

The two solutions lie at symmetrical positions about the value `x=−b/(2a)`.

---

### Solving Quadratic Equations – Summary

We now saw multiple different ways to solve quadratic equations, all of which
have advantages and disadvantages:

* __Basic Algebra__
  This is the easiest way, but it only works for quadratic equations that don't
  contain an _x_-term.

* __Factoring__
  Also quite simply, but it takes some guesswork and it doesn't always work.

* __Completing the Square__
  Very long and complicated. It is easy to make mistakes. In addition to finding
  the solutions of an equation, it also tells us the vertex of the corresponding
  parabola.

* __Quadratic Formula__
  Straightforward formula that always work, but it sometimes feels like "magic"
  and it is easy to forget why and how it works.

{.todo} Final Exercises



--------------------------------------------------------------------------------



## Graphing Quadratics

> id: graphing-1
> sectionStatus: dev
> section: graphs

At the beginning of this chapter, we already saw what happens if we plot the
function `y=x^2` in a coordinate system.

    x-coordinate-system(width=480 height=320 x-axis="-5,5,1")

The function y=x^2 is a symmetrical, U-shaped graph.

NOTE: Is “U-shape” an accurate term? The sides of the letter U look vertical. Do
the sides of y=x2 ever become perfectly vertical? If we accurately plot the
graph of y=x2, to what extent is it actually U like?

The place where a U-shaped graph dips down to its lowest point, if it is upward
facing, or “dips up” to its highest point if it is downward facing is called the
vertex of the quadratic graph.

### Shifting and Sliding

NEED Example for why to shift parabola.

I am six feet tall and am standing at the position x=4 feet on the horizontal
axis. Is it possible to write down a formula for a function whose graph is the
same U-shaped curve as for y=x2 but positioned to balance on my head?

Perhaps try this before reading on. Play with some possible formulae. Plug in
some sample points and table values. Test whether your ideas offer any hints as
to a solution to this challenge.

---

#### Shifting Vertically

How would the graph of y=x2+3 appear?

Notice that this new function is adds three units to each output:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_1_pic10.png)

This has the effect of raising the entire graphs three units in the vertical
direction:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_1_pic11.png)

The graph of the function y=x2−5 would be the same graph shifted downwards 5
units, and the graph of y=x2+3–√  would the graph shifted upwards 3–√ units.

PRACTICE 58:

a) Sketch y=x2−5
b) Sketch y=x2+1/2.

---

#### Shifting Horizontally

One thing to notice is that this graph has a “dip” at x=0.

Now consider the function y=(x−3)^2.

Notice that when we put x=3 into this formula we obtain the output 02. That is,
the number 3 is “behaving” just like x=0 was for the original function.

In y=(x−3)^2 we have that 3 is the “new zero” for the x-values.

So whatever the original function was doing at x=0, it is now doing it at x=3.

The original function y=x2 dips at x=0, so the graph of the function y=(x−3)^2
dips at x=3.

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_1_pic5.png)

The entire graph has been shifted horizontally – and one can check this by
drawing a table of values if you like:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_1_pic6.png)

{.todo} Slider move

PRACTICE 57:

a) Sketch a graph of y=(x−4)2.

b) Sketch a graph of y=(x+12)2.

----

#### Both Together

Here’s the graph of y=x2:

and here is the graph of y=(x−2)2.  Here “2” is acting as the new zero for the
x-values, so the dip that was occurring at zero is now occurring at 2:

Now consider y=(x−2)2+3 . This is the previous graph shifted upwards three
units:

Note that the order doesn't matter.

PRACTICE 59:

a) Sketch y=(x−4)2−1.

b) Sketch y=(x+4)2+2.

c) Sketch y=(x+1)2−2.

---

PRACTICE 60: I am six feet tall and am standing at the position x=4 feet on the
horizontal axis. Write down the formula of a U-shaped graph that sits balanced
on my head.

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_1_pic15.png)

---

### Scaling and Squashing

What can we say about the graph of y=2x2 ? Certainly all the outputs are doubled:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_2_pic3.png)

This creates a “steeper” U-shaped graph:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_2_pic4.png)

---

PRACTICE 61:

a) Draw a table of values for y=3x2 and sketch its graph.

b) Which graph is “steeper,” that for y=100x2 or that for y=200x2?

---

Consider y=−x2. It’s outputs are the negative of the outputs for y=x2:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_2_pic5.png)
![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_2_pic6.png)

---

PRACTICE 62: Describe the graph of y=−2x2.

PRACTICE 63:

a) Quentin says that the graph of y=110x2 will be a very “broad” upward facing U-shaped graph. Is he right? Explain.

b) Describe the graph of  y=−11000x2.

---

#### Putting it all together:

::: tab

#### Example 1

__EXAMPLE 64: Analyse and quickly sketch y=2(x−3)2+1.__

Answer: Now y=2(x−3)2+1 is essentially the graph y=x2 “messed around with.”
We see it is a steep U-shaped graph (“steepness 2”) with x=3 behaving like zero
for the x-values, and the whole graph is shifted one unit high.

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_2_pic7.png)

::: tab

#### Example 2

__Analyse and quickly sketch y=−(x+2)2+4.__

Answer: y=−(x+2)2+4 is  y=x2  messed around with. It is an upside-down U with
x=−2 made the new zero and shifted upwards four units.

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_2_pic8.png)

::: tab

#### Example 3

__Write a formula for this symmetric U-shaped graph:__

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_2_pic9.png)

Answer: We see that is a U-shaped graph with x=4 as its new zero. There is no
vertical shifting. It is not clear what the steepness would be. We can write:

y=a(x−4)^2
and see if we can determine the steepness a.

The graph passes through the point x=0, y=6. Let’s substitute in those values:

6=a(0−4)2
6=16a
a=616=38
Thus

y=38(x−4)2.  □

::: tab

#### Example 4

__Write a formula for this symmetric U-shaped graph:__

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_2_pic10.png)

Answer: This is the graph y=x2 messed around with.

Because it is symmetric, we see that it has its peak at x=6. So x=6 is behaving like zero for the x-values. Also, the graph is shifted upwards 40 places.

We don’t know the steepness – though it should be negative. We can at least write:

y=a(x−6)2+40
but we need another piece of information to determine a .

We could try plugging in x=6, y=40 but it doesn’t help:

40=a(0)2+40
40=40
Actually it is not surprising that it fails to help: we have already made use of the values x=6 and y=40 to get this far. Let’s try plugging in value of a point we haven’t yet used.

The graph passes through x=0, y=0. Let’s try this:

0=a(−6)2+40
−40=36a
a=−3640=−910
Bingo!  And we have negative steepness as expected.

NOTE: We could have also tried x=12, y=0. It also gives a=−910 . (Try it!)

So we now know the formula for this U-shaped graph:  y=−910(x−6)2+40   □

::: tab

#### Example 5

__Write down the formula of a U-shaped graph that passes through the points
(3,18) and (17,18) and has lowest value 5.__

Answer:

PICTURES SPEAK A THOUSAND WORDS!
It is always good to draw a sketch.

This graph must look something like:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_2_pic11.png)

Because it is symmetrical, we see that the point halfway between 3 and 17,
namely x=10, is the new zero for the x-values. The whole graph is shifted up 5
units. We have:

y=a(x−10)2+5
Putting in x=3, y=18 gives:

18=49a+5
a=1349
So

y=1349(x−10)2+5.  □

:::

---

(1) Which of the following could be a formula for the following graph?

![](http://gdaymath.com/wp-content/uploads/2013/05/Q4L2_Self11.png)

y=4/3(x−1)^2+1
y=4/3(x+1)^2+1
y=4/3(x−1)^2−1
y=4/3(x+1)^2−1
y=−4/3(x−1)^2+1
y=−4/3(x+1)^2+1
y=−4/3(x−1)^2−1
y=−4/3(x−1)^2−1

(2) A quadratic graph is symmetrical about the vertical line x=3 and has highest
value −17. Which of the following could be a formula for that quadratic?

y=200(x−3)^2+17
y=−200(x−3)^2+17
y=200(x−3)^2−17
y=−200(x−3)^2−17

(3) If y=a(x+b)2+c is a quadratic passing through the origin with vertex (2,3),
then  a+b+c equals …

1/4
1 3/4
4 1/4
5 1/4

(4) Write down the formula for a quadratic which crosses the x-axis at  x=−10
and at x=−6  and crosses the y-axis at y=−20. Sketch this in your mind’s eye:
Will this quadratic be upward-facing or downward-facing?

(5) Will this very steep, upward-facing quadratic y=10,000,000x2+40,000,000 ever
cross the vertical line x=999,999,999,999,999?

YES
NO

---

### Normal Form and Vertex Form

Here is the graph of y=x2:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_3_pic1.png)

Here is the graph of the line y=x:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_3_pic2.png)

What do we obtain if we “add” these two formulas together and graph y=x2+x?

To the right, it is clear that “ x2 plus x” adds together two positive numbers:
The graph of y=x2+x is clearly getting larger and larger as we go over to the
right.

Matters are less clear to the far left: The x2 values are large and positive but
the x values are large and negative. Does the positive or the negative win? Will
the graph of y=x2+x be positive to the left? Will it be negative to the left?
Will it oscillate between the positives and negatives? What does it do?

The answer comes from going back to basics and just plotting points.
Here is a table of values:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_3_pic4.png)

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_3_pic5.png)

To be clear of what is happening between x=−1 and x=0, let’s try a few more values:

At x=−12 we have y=(−12)2+(−12)=−14=−0/25.

At x=−34 we have y=916−34=−316=−0.1875.

At x=−14 we have y=116−14=−316=−0/1875
The graph seems to dip down to lowest value −14 at x=−12.

Is this a perfect U-shaped graph, with x=−12 behaving as zero for the x-values
and shift −14 units? That is, could we have y=a(x+12)2−14 for some steepness a?

ACTUALLY … If  y=a(x+12)2−14   goes through the point (0,0) then we need
0=14a−14 giving a=1.

So is y=x2+x really the U-shaped graph y=a(x+12)2−14 in disguise?

To answer that question let’s expand (x+12)2:

(x+12)2=x2+12x+12x+14=x2+x+14

and so

(x+12)2−14=x2+x+14=14=x2+x.

YES!  y=x2+x is a perfect U-shaped quadratic graph with vertex at (−12,−14).

---

The optional practice exercise proves the following result – the only thing we
need from this section:

Every quadratic y=ax2+bx+c is a version of y=x2 “messed around with”.

It equals a(x+something)2+something with steepness a.

As such, the graph of y=ax2+bx+c is also a symmetrical U-shaped curve (with
steepness a).

This is the key observation that is going to make graphing all quadratics
ridiculously easy!

---

### The Power of Symmetry

It is still hard to determine where the vertex of this graph lies, and so it is
still hard to actually graph the curve.

If we can find two interesting and symmetrical x-values, then common sense will
point the way! Let me explain what I mean by this.

EXAMPLE 76: Sketch y=2(x−3)(x−9)+7.

Answer: The first thing to note is that if we were to expand 2(x−3)(x−9)+7 we
would obtain an expression of the form ax2+bx+c . (Actually, check this: Show
that2(x−3)(x−9)+7 expanded equals 2x2−24x+34.)

Without doing all the expanding, however, we can see that the positive 2 in
front will help give the term 2x2 in the expansion. We have a positive steepness.

So we know y=2(x−3)(x−9)+7 is going to give a symmetrical upward-facing U-shaped graph.

In y=2(x−3)(x−9)+7 two obvious and interesting x-values are staring us in the face:

Put x=3 and we get y=0+7=7.
Put x=9 and we get y=0+7=7.

So we now have an upward-facing U that goes through two symmetrical points:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_4_pic1.png)

Since the graph is symmetrical, common sense says that the graph must have
vertex at x=6, the point halfway between x=3 and x=9.

The trouble is we don’t know how high the U is at this point: Does the U sit
above the -axis? Dip below it? Just touch it?

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_4_pic2.png)

Well … let’s just plug x=6 into the formula to find out!

When x=6 we have y=2(3)(−3)+7=−11.

We must have the following picture:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_4_pic3.png)

DONE!  □

NOTICE: I am personally not at all fussed about scale in the picture nor
extra-fussy details about the graph. As long as the information given on the
diagram is clear and correct and gives all the key features of interest, then
all is good.

---

HOW DOES ONE FIND INTERESTING x-VALUES IF THEY ARE NOT OBVIOUS?

Consider y=x2+4x+5.  This is going to be an upward-facing U-shaped graph.

To find interesting x-values, focus on the “x part” of the formula, in this case, just:  x2+4x.

The only thing I can think to do with is to rewrite it as x(x+4) and so:

y=x(x+4)+5.

Now it is clear that x=0 and x=−4 are interesting. They both give y=5.

By symmetry, we know the vertex lies midway between these interesting x-values, at x=−2, and here y=(−2)(2)+5=1.

Here then is its graph.

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_4_pic7.png)

---

::: tab

#### Example 1

__Sketch y=−(x+2)(x−10)+1. Where is its vertex? What is its -intercept? What is
the graph’s largest value?__

Answer: It will be a symmetrical U-shaped curve, downward facing (the steepness
is −1). Also x=−2 and x=10 are interesting. They both give y=−0+1=1.

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_4_pic5.png)

The vertex lies at x=4 and there y=−(6)(−6)+1=37.

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_4_pic6.png)

The vertex has coordinates (4,37).  The largest value of the graph is y=37.
And the y-intercept occurs when x=0 which gives y=−(2)(−10)+1=21. □

::: tab

#### Example 2

__Make a sketch of y=−3x2+6x+7. Rewrite this equation in “vertex form”__

Answer: This is a downward facing U.

Focusing on the x part, from −3x2+6x we see we can factor 3x. We have:

y=3x(−x+2)+7.

It is now clear that x=0 and x=2 are interesting. They each give y=7.

The vertex must occur halfway between these two values, at x=1. Here, y=−3+6+7=10.

This is enough to give a pretty good sketch!

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_4_pic8.png)

Now we have to make an intelligent guess as to what “vertex form” means.

The vertex of this U is (1,10) so we know we could also write this curve as:

y=a(x−1)2+10
for some steepness  a. This is probably what “vertex form” means.

To find a let’s plug in a point, say, x=0, y=7:

7=a(−1)2+10
a=−3
So we have y=−3(x−1)2+10.   □

::: tab

#### Example 3

__Make a sketch of y=−2x2+3x+7. What are its x-and y-intercepts?__

Answer: This is a downward facing U-shaped curve. We have:

y=−2x2+3x+7=x(−2x+3)+7
and this U has the value 7 at both x=0 and x=32. Because the graph is
symmetrical, the vertex must be halfway between these values, at x=34. At this
value, y=34(−2⋅34+3)+7=818.

The graph appears:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_4_pic9.png)

The y-intercept is clearly y=7.

The x-intercepts occur where y=0. We need to solve:

−2x2+3x+7=0
The box method gives (CHECK THIS!):

x=3±65√4.    □

::: tab

#### Example 4

__Find a formula for the following U-shaped curve:__

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_4_pic10.png)

Answer: The picture shows us that x=17 and x=27 give symmetrical outputs.
This suggests the formula:

y=a(x−17)(x−27)+13.

We inserted a value a as we don’t yet know the steepness.

However, we are also told that when x=30 we have y=60. So we need:

60=a(13)(3)+13
47=39a
a=4739
So y=4739(x−17)(x−27)+13 does the trick!  □

:::

---

PRACTICE 81: Make reasonable sketches of the following quadratics:

a) y−x2−2x+3
b) y=4x2+8x+5
c) y=−5x2−20x+10
d) y=−2(x+30)(x−50)

PRACTICE 82: Make reasonable sketches of the following quadratics:

a) y=3(x−1)2+5
b) y=(x−2)(x+3)+8
c) y=−5x2−20x+10
d) y=7(x−2)(x+3)

PRACTICE 83: A quadratic crosses the x-axis at x=2 and at x=8,  and it crosses
the y-axis at y=7. Find a formula for the quadratic.

HINT: Make a sketch of the information you have so far and use your common sense
to see what the quadratic must be doing.

PRACTICE 84: Find a formula for the following quadratic:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_4_pic11.png)

---

### Old Content

To better understand the relationship between quadratic equations and their
corresponding graphs, we have to think about __transformations__. Any

All parabolas can be thought of as some transformation of the standard parabola which has the equation $y=x^2$y=x2.


If we compare $y=x^2$y=x2 (whose vertex is at $\left(0,0\right)$(0,0)) to $y=a\left(x-h\right)^2+k$y=a(x−h)2+k, then we can think of the second equation and its graph as a transformation of $y=x^2$y=x2:

$h$h represents the number of units that $y=x^2$y=x2 is translated horizontally, and
$k$k represents the number of units that $y=x^2$y=x2 is translated vertically.
Note that with the direction of the translation:

if the equation is $y=\left(x+1\right)^2-3$y=(x+1)2−3, the horizontal translation is 1 unit to the left.
if the equation is $y=\left(x-1\right)^2-3$y=(x−1)2−3, the horizontal translation is 1 unit to the right.


These movements are called transformations.  Transform means change, and these transformations change the simple quadratic $y=x^2$y=x2 into other quadratics by moving (translations), flipping (reflecting) and making the graph appear more or less steep (dilating).


$y=a\left(x-h\right)^2+k$y=a(x−h)2+k
Is called turning point form.

it tells us the turning point immediately, and knowing the turning point we can draw a pretty good sketch of any quadratic
it explains to us a number of transformations that have occurred to the quadratic from the simple quadratic $y=x^2$y=x2.
Identifying transformations

The form $y=a\left(x-h\right)^2+k$y=a(x−h)2+k shows us:

This lesson focuses on the connection between the equations of quadratics and their graphs, and how we can use the idea of  transformations to more easily identify and make sense of these quadratics.

The concavity of a parabola is determined by the $a$a value in the equation $y=ax^2$y=ax2.

$y=-x^2$y=−x2 vs $y=x^2$y=x2 : The sign of the coefficient $a$a determines whether the parabola is concave up or concave down.

$y=a\left(x-h\right)^2+k$y=a(x−h)2+k

$a$a determines concavity

$k$k represents the vertical shift upwards or downwards (look at its sign to determine the direction)

$h$h represents the horizontal shift to the right or to the left (look at its sign to determine the direction)

Given a quadratic function and it's equation, there are many different questions
we could ask about their properties:

* Does the parabola point up or down?
* What are the coordinates of the turning point?
* Where does the parabola cross the x-axis (the _Zeros_)?
* Where does the parabola cross the y-axis?
* How stretched or squashed is the parabola?

{.todo} Sketching a parabola from the equation

  x-coordinate-sketch(validate="quadratic:2,-4,1")

{.todo} Extracting the equation from a sketch


Graphing the quadratic
Let's look at the quadratic $y=-2\left(x-3\right)^2-3$y=−2(x−3)2−3

Shape - we can see that the quadratic will be concave down because $a=-2$ which is < $0$0

Vertex - we can see that the quadratic will have turning point at $\left(3,-3\right)$(3,−3).

With just these two pieces of information we can roughly sketch the curve.

But many parabolas are concave down and have a vertex at $\left(3,-3\right)$(3,−3). To be able to graph the parabola more accurately with the correct amount of steepness, we need another piece of information. We need another point on the graph.

A common point to use would be the $y$y intercept.

Remember
$x$ intercept occurs where the value of $y$y is $0$0
$y$ intercept occurs where the value of $x$x is $0$0

Now we can sketch the curve.

Using vertex $\left(3,-3\right)$, the concave down shape and a $y$y intercept of $-21$ :

As a hand drawn sketch, this shows all the information we need to sketch the quadratic.

---

### Features of Quadratic Functions

Remember the skateboards we built at the beginning of this course? Some of the
first prototypes are ready, so let's build a small skate park to try them out!
We’ve got 50m of fence, as well as two existing walls of the factory building
we can use to enclose the area.

{.todo} interactive diagram

Using mathematics we can work out what _x_ has to be, so that the area of the
skate park is as large as possible.

If we call the horizontal part of the fence _x_, then the vertical part has
length [{x-equation.var(vars="x", fns="+ -")}]. The total area of the skate
park is

{.text-center} `A=`[{x-equation.var(vars="x", fns="+ -")}]

Once again, we have a quadratic equation! Except, rather than solving it, we
want to find it’s _maximum_.

{.todo} Definition of vertex and turning point

{.todo} Diagram, numeric solution

{.todo} Scheitelpunktform und Grundform

---

There are two good ways to think about the graph of a quadratic equation
`y = ax^2 + bx + c`:

* __I: As `y=x^2` messed around with.__
  For example, y=−3(x+10)2+17 is an upside-down U with x=−10 behaving like zero
  for the x-values and the graph is shifted upwards 17 units. (The vertex of the
  graph is (−10,17).)

* __II: As two interesting x-values laid bare.__
  For example, y=2(x+5)(x−17)+3 has two obvious symmetrical points: Both x=−5
  and x=17 give y=3. The value between them, x=−5+172=6 is the location of the
  vertex. Putting x=6 in gives the y-value of the vertex. The picture of the
  graph falls into place.

If we write y=3(x−2)2+5 as y=3(x−2)(x−2)+5 then it looks very similar to the
example in given for II. There is a “repeated” interesting x-value.

So … Is there a way to make sense of repeated interesting x-values so that we
never have to think of approach number I and make everything follow from
approach number II in some way?

---

### Questions

EXAMPLE 85: Here is a traditional algebra II question:

Consider y=2x2−8x+6.
a) Find its vertex
b) Find its “line of symmetry” (whatever that means!)
c) Rewrite the quadratic in “vertex form.”
d) Sketch a graph of the quadratic
e) Find where the quadratic crosses the -axis.
f) Find where the quadratic crosses the -axis.


Answer:

My first piece of advice:
NO ONE SAYS YOU NEED ANSWER QUESTIONS IN THE ORDER GIVEN TO YOU!

And my second piece is:
ALWAYS DRAW A PICTURE FIRST – and then all the rest will be clear.

So let’s answer part d) first.

Interesting x-values: y=2x(x−4)+6.

We see that x=0 and x=4 both give y=6.

The vertex must be at x=2, and here y=2(2)(−2)+6=−2.

We have:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_5_pic1.png)

Here are the easy parts to answer:

a) The vertex is at (2,−2).

b) The “line of symmetry” must mean the vertical line of symmetry at position 2 on the x-axis. This vertical line has equation: x=2.

f) The y-intercept is y=6.

To answer c) we need to make use of the vertex to rewrite the equation.

The equation is y=a(x−2)2−2 for some steepness a. (Actually… Since the formula
is y=2x2−8x+6 we know the steepness is a=2, but to check …) Let’s put in x=0,
y=6 to find a:

6=a(−2)2−2
8=4a
a=2

So the answer to part c) is:
c) y=2(x−2)2−2.

To answer e) we need to put y=0 and solve 0=2(x−2)2−2


COMMENT: We could work with the original equation instead and solve 0=2x2−8x+6,
but I suspect what I have chosen to do will be swifter. No big deal – all
correct paths lead to the same correct results!

So

2(x−2)2=2
(x−2)2=1
x−2=1  or  x−2=−1
x=3 or x=1.

The x-intercepts are x=1 and x=3.  □

---

PRACTICE 86: Consider y=5x2−10x−15.

a) Find its vertex
b) Find its “line of symmetry.”
c) Rewrite the quadratic in “vertex form.”
d) Sketch a graph of the quadratic
e) Find where the quadratic crosses the -axis.
f) Find where the quadratic crosses the -axis.
g) What is the smallest value of the graph?

---

PRACTICE 87: Here are three quadratics:

(A) `y=3(x−3)(x+5)`
(B) `y=2x^2+6x+8`
(C) `y=2(x−4)2+7`
Here are four questions:

i) What is the smallest output the quadratic produces?
ii) Where does the quadratic cross the x-¬axis?
iii) Where does the quadratic cross the y-axis?
iv) What are the coordinates of the vertex of the quadratic?

For which of the three quadratics might it be easiest to answer each question?

---

PRACTICE 88:

a) Attempt to solve the equation `x^2+10x+30=0`. What happens?

b) Sketch the graph of `y=x^2+10x+30`.

c) Use the graph to explain geometrically why there was is no solution to `x^2+10x+30=0`.

d) According to the graph, should there be solutions to `x^2+10x+30=11`? If so, find them.

e) Find a value b so that the equation `x^2+10x+30=b` has exactly one solution.

Practice exercise 88 points out a good technique:
IF YOU CAN, DRAW A SKETCH FIRST. A PICTURE SPEAKS 1001 WORDS!

---

EXAMPLE 89: How many times does the graph of `y=−x^2+4x−5` cross the x-axis?

Answer: We have y=−x(x−4)−5 and so x=0 and x=4 are interesting. (They both give y=−5.)

The vertex thus occurs at x=2 and here y=−4+8−5=−1.

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_5_pic2.png)

We see this graph crosses the x-axis no times. □

---

PRACTICE 90: How many times does each of the following quadratics cross the x-axis?
a) y=x2−2x−4
b) y=3x2−12x+12
c) y=2−x2

How many x-values give y=0 for the next two equations?
d) y=−500x2−200x+3000
e) 4=4x2+80x+200

COMMENT:  You may have been taught a formula “b2−4ac ” to answer these sorts of
questions. As you can see, we don’t need it!

---

PRACTICE 91: Find a value k so that y=−2x2+8x+k has largest value 43.

HINT: Draw a sketch as best as you can, not knowing what k should be.

---

PRACTICE 92: Find a value k so that y=3(x−10)(x+10)+k just touches the x-axis.

HINT: Draw a sketch as best you can, not knowing what k should be.

---

EXAMPLE 93: Find a value k so that y=(x−c)(x+c)+k has smallest value −2.

Answer: Here x=c and x=−c are interesting. They each give y=k.

So we want an upward facing U through these symmetrical points that just reaches
down to −2. The graph must look like this:

![](http://gdaymath.com/wp-content/uploads/2013/03/Q4_5_pic3.png)

By symmetry, the “action” must be happening at x=0.

Put in x=0, y=−2 to see we must have:

−2=(−c)(c+k
−2−c2+k
giving k=c2−2.  □

---

PRACTICE 94:

a) Find a value for k so that y=5x2−10x+k just touches the x-axis.

b) Find a value for m so that y=−2x2−18x+m has largest value 100.

c) Find a value for a so that y=(x−a)(x−3a) has smallest value −10.

---

PRACTICE 95: Consider y=2(x−1)(x+1)+(x−3)(x+4)+x(x−2).

a) If one were to expand this equation, would one obtain a quadratic expression y=ax2+bx+c  for some numbers a, b and c? YES/NO.

b) Explain why we can quickly see that a=2+1+1=4.

c) Put x=0 into y=2(x−1)(x+1)+(x−3)(x+4)+x(x−2). Explain why we now know c=−14.

So we have 2(x−1)(x+1)+(x−3)(x+4)+x(x−2)=4x2+bx−14. We don’t know what b is yet.

d) What might be an easy way to find the value b? What is its value?

e) Sketch the graph of y=2(x−1)(x+1)+(x−3)(x+4)+x(x−2).

---

PRACTICE 96: A rectangle has one side of length x+3 inches and the other of
length 7−x inches. Which value of x gives a rectangle of maximal area?

---

PRACTICE 100: A THEORY QUESTION

Consider the quadratic ](y=ax^{2}+bx+c\). Rewrite this as `y = x(ax+b)+c`.

a) What are the two interesting x-values for this quadratic?

b) Explain why the vertex of its graph occurs at `x=−b/(2a)`.

COMMENT: Many curricula have students memorise this result. For example, given
`y=3x2+4x+8`, say, they like students to be able to say that its vertex lies at
`x=−b2a=−42*3=−23`. If speed is important to you, then great! If not, there is
nothing wrong with writing y=x(3x+4)+8 and saying that the vertex is halfway
between x=0 and x=−43.

---

PRACTICE 101: Here’s to the power of interesting x-values! Consider this challenge.

Sketch a graph of y=(x+10)3(x+6)2(x+2)(x−3)4(x−5)(x−12)37.

We have not done this before so we are going to have to use our common sense.

Are there any interesting x-values?

Where does the graph cross the x-axis?

When x is a huge positive number does the graph want to be huge and positive?

What does the graph want to be if x is a huge negative number like −1000000?

Between the places where the graph crosses the x-axis, can you tell if the graph
wants to be positive or negative?

If you can answer these questions then you have enough information to make a
pretty good sketch of the thing!

---

QUESTION:
i) What is the x-coordinate of the vertex of y=−4x2+10x+7?
ii) What input x gives the smallest output for y=2x2−8x−100?
iii) What is the “line of symmetry” of y=(x−4)2+5?

---

QUESTION:
Let’s pretend that a company that makes and sells mattresses has identified
formulas for its revenue R(x) brought in from selling and cost C(x) in making
x mattresses per week. Those formulas are:

R(x)=100+20x−x2
C(x)=2x+145

- Sketch graphs of these functions on the same set of axes.
- What number of mattresses should they make and sell per week in order to
  break even?
- What number of mattresses should they make and sell per week in order to
  maximize their profit?

---

QUESTION:
Find a formula for k in terms of c so that the quadratic y=x(x−2c)−k  just
touches the x-axis.



--------------------------------------------------------------------------------



## Projectile Motion

> id: penguins
> section: projectiles
> sectionStatus: dev
> sectionBackground: projectiles

As you might know, penguins can't fly – their wings are specially adapted for
swimming. However, you can help them getting around my sling-shotting them
across the ice:

    figure: x-projectile

---

Given the previous chapters, you might notice that the flight paths taken by
the penguins look suspiciously like a [[parabolas|ellipses|semicircles]].
_{span.reveal(when="blank-1")}But why?_

---

Let us try to predict the motion of the penguin using the laws physics. The key
observation is that we can split the curved motion of the penguin into two
completely separate parts:

::: column.grow

* We can assume that there is no drag because of air resistance. This means that
  if we just look at the horizontal part of the motion (the "shadow" of the
  penguin), it seems to move at a constant speed.

* Vertically (up and down), the speed of the penguin changes. Initially it
  is positive (upwards), then it slows down and turns negative (downwards).

::: column(width=320)

{.fixme} Graphic

:::

---

The vertical speed changes because the force of gravity is pulling the ball back
to Earth. The _rate of change_ of speed is often called __acceleration__, and
on Earth it is always `-10m/s^2` (we use a negative value because gravity acts
downwards).

| __Time__         |   0 |  1s |  2s |  3s |  4s |  5s |  6s |  7s |  8s |  9s |
| __Acceleration__ | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 |
| __Speed__        |  50 |  40 |  30 |  20 |  10 |   0 | -10 | -20 | -30 | -40 |
| __Position__     |   0 |  50 |  90 | 120 | 140 | 150 | 150 | 140 | 120 |  90 |
{.grid}

---

The result, as you can see, is a parabola. Using Calculus

https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_15_feather_drop.html

---

Of course, flying penguins are not the only things that move on a parabolic
path. If we ignore other forces like friction, wind or air resistance, any
that flies through the air and is affected by gravity
then all objects we throw into the air follow a parabolic path: including
basketballs, jets of water, or even rockets.

Here you can see a few more examples:

::: column(width=320)

{.fixme} video

::: column(width=320)

{.fixme} video

::: column(width=320)

{.fixme} video

::: column(width=320)

{.fixme} video

:::

---

Here are examples:

::: tab

#### Example 1

::: tab

#### Example 2

::: tab

#### Example 3

:::

---


{.fixme} Since
we know the initial speed of the ball, we can easily calculate the speed after
every subsequent second.

{.fixme} Speed, on the other hand, is the rate of change of position. The ball started
at a height 0 when we threw it, and we can calculate its height after every
subsequent second by adding the speed at that time.

{.fixme} Let’s start with a simple example: a ball is thrown straight up into the air,
with an initial speed of 50m/s. Using the laws of physics, we can predict the
motion of the ball, and the time it will take for the ball to fall back on the
ground.

Galileo used this kind of idea to deduce
that because acceleration due to gravity is constant, and acceleration is a kind
of double difference, all objects propelled through the air follow the paths of
quadratic graphs.

PRACTICE 119: Lizzy throws a ball into the air. Its height, in feet, at time t
seconds is given by the quadratic formula:

H(t)=−32t2+480t+6.

a) Find H(0). What does this number mean?
b) At what time is the ball at its maximum height?
c) When does the ball hit the ground?

Having used quadratic equations to create the optimal business plan for our
Skateboard company, and to design the largest possible skate park, now lets
actually XXX.

When practicing jumps and tricks, it is important to understand how gravity

{.todo} skateboarding image



--------------------------------------------------------------------------------



## More Applications

> section: applications
> sectionStatus: dev

::: column.grow

In the previous section, you learned that every object you throw an object into the air follows a
parabolic path. But what if the fire a ball out of a canon, so fast that it
flied around the entire planet and comes back to where we started?

The ball enters into an "orbit" around Earth, just like the Moon or a satellite,
and its path has the shape of a [[circle|parabola|hyperbola]].

::: column(width=280)

{.fixme} diagram

:::

It turns out that there are several different types of paths an object can take
when gravity, and these are called __conic sections__.

---

### Conic Sections

The light rays emitted from a flashlight form a cylinder. If you shine in onto
a flat surface, you can see the different shapes that can be created by slicing
though a cone:

    x-conic-section
    .fixme labels

If you point the flashlight directly onto the ground you get a
[[circle|ellipse|oval]]. If you tilt it slightly, the circle becomes an ellipse.
If you continue rotating the flashlight, the ellipse becomes larger and larger,
and eventually turns into a U-shape that continues forever: this is a Parabola.
And if you keep going, the parabola will become a hyperbola, a different kind of
shape that you'll learn more about later.

The parabola is produced by slicing the cone exactly parallel to its edge. You
can prove that its shape matches the one created by graphing a quadratic
equation – but that is still a bit too difficult.

---

We've already seen that parabolae describe the path of objects thrown into the
air. All planets in our solar system move on elliptical orbits around the sun,
and the XXXXX.

When NASA was launching the first rockets into space, mathematicians like
[[Kathrine Johnson]](bio:johnson) had to calculate the exact paths taken by
the spacecrafts. The first launches were simple parabolas that only took a few
minutes. Later launches then changed into

https://hackaday.com/2018/02/28/katherine-johnson-computer-to-the-stars/

{.fixme} diagram

---

Calculating the transition between parabolic and elliptical orbits was an
incredibly difficult task – as explained here in the move "Hidden Figures":

{.fixme}

Quadratic functions and equations appear not just in the motion of projectiles,
but have many other applications in science, engineering, economics and nature.
Let's have a look at a few more applications.

---

### Mirrors and Reflections

Draw two points on a sheet of paper, and make a fold that brings one of the
points directly on top of the other. You can think of this fold as the "line of
reflection" between A and B. Every point on the line has the same distance
between A and B.

We can say, "the set of points equidistant from A and B are precisely the points
on the perpendicular bisector of A and B."

![](http://gdaymath.com/wp-content/uploads/2013/04/Q6_3_pic4.png)

Take a blank piece of paper and draw on it a straight line and a point P not on
that line. Use a thick marker to make the point conspicuous.

![](http://gdaymath.com/wp-content/uploads/2013/04/Q6_3_pic5.png)

Holding the paper up to the light, fold the paper in such a way that the point
lands somewhere on the line. Make a sharp crease.

Unfold the paper and then make a second that takes the point P to a different
place on the line. Make a second sharp crease.

Repeat this action at least FIFTY more times, making another fifty creases in
the paper given by taking the point P to different locations on the line.

The 52 creases you have outline the shape of an interesting curve.

With a pencil draw along the creases to outline the curve you see.

When completing this activity, you should see a U-shaped curve. The question, of
course, is this curve the shape of a quadratic/parabola?

The previous folding activity asked as to measure distances between a point and
line. Recall that we measure the distance of a point from a line via the length
of a perpendicular line segment from the point to the line:

Suppose we are given a line L and a point F not on that line. Then the set of
all points that are equidistant from the point and from the line (see the
diagram below) give a U-shaped curve.

---
> id: directrix

The point F is called the focus of this special curve and the line L is called
its directrix.

    x-geopad(width=300): svg
      path(x="line(point(0,280),point(300,280))" name="dir")
      circle.move(cx="30" cy="280" project="dir" name="p")
      circle(x="point(150,200)" name="f")
      circle(x="point(p.x,qy(p,d))" name="q")

![](http://gdaymath.com/wp-content/uploads/2013/04/Q6_3_pic7.png)

This curve looks U-shaped. Is it quadratic?

---

Parabolas have the astounding reflection property that all incoming parallel
rays of light, perpendicular to the directrix, are directed to the focus of the
parabola.

Satellite dishes and reflecting telescopes use dishes with parabolic cross-sections
so as to focus parallel rays of light to a fixed point, and conversely,
search-light reflectors and automobile headlight reflectors, for example, are
parabolic: all rays from a bulb positioned at the focus are reflected parallel
to the axis of the parabola.

![](http://gdaymath.com/wp-content/uploads/2013/04/Q6_3_pic8.png)

In a parabolic mirror, incoming light rays are all reflected onto a single point
in the center. This curious property can be used when building radio telescopes,
where the receiver is placed in the focus, or thermal solar power plants, which
focus the suns' rays onto a single point to create a lot of heat.

The actual shape of this telescope is called a Paraboloid – it is basically a
three-dimensional version of a parabola.

Even the TV dishes at your home have a paraboloid shape. They focus the incoming
radio waves onto the small receiver in its center.

---

### Bridges

In many suspension bridges the main suspension cables form a parabola. One
famous example is the Golden Gate Bridge in San Francisco:

Suspension bridges can span especially long distances, and are relatively
economical to build.

The suspension cables carry the huge weight of the deck of the bridge, as well
as all the traffic travelling across it. This causes large tension and
compression forces, and the parabola is the best shape to balance these forces
equally.

---

### Catenary Curves

Galileo noticed shape of a rope or a chain hanging between two poles is U-shaped and deduced that it too must be given by a quadratic formula. (We see this with the shape of power lines, the shape of ropes that surround sculptures in art museums, and so on.)

As we saw in part I, Galileo also wondered if the shapes of hanging chains were
also the shapes of quadratic curves.

![](http://gdaymath.com/wp-content/uploads/2013/04/Q6_1_pic3.png)

It turns out they are not! These curves are called catenary curves (from the Latin word for “chain”) and are given by a complicated formula. Their mathematics were not properly figured out until 1691, once the subject of calculus was invented.

Conduct some internet research to learn about catenary curves, catenary arches,
and their history.

It turns out that Galileo was in error about the shapes of hanging chains: they do not follow a quadratic formula. Trust what your data is telling you!

The shape of the curve given by a hanging chain became known as a catenary curve (from the Latin catena for “chain). It wasn’t until 1691 that mathematicians found a precise formula for this curve. (It is very different from a quadratic formula!)

EXTENDED ACTIVITY: Is the St. Louis Gateway Arch in the shape of a quadratic curve? Find out by making measurements on a photograph of the arch.

---

### The Multiplication Parabola

http://demonstrations.wolfram.com/TheMultiplicationParabola/

---

### More Applications

https://demonstrations.wolfram.com/LiquidInARotatingCylinder/

Maximum and minimum values of quadratics are used in the study of moving objects
and in acceleration and volume problems.  Business models also include quadratic
functions and are used to help forecast profit and loss.

Many equations in physics or economics contain multiplication, and these
multiplications often lead to squares. That’s why it should come at no surprise
that our world is full of quadratic equations and parabolas.

Quadratic equations are hidden everywhere in our world. Can you think of any
other examples?

    // solve fractional equations that result in quadratics
    // quadratic substitutions
    // quadratic inequalities
    // absolute value equations
    // systems of quadratic equations

    // Fitting data to quadratics:
    // http://gdaymath.com/lessons/quadratics1/5-1-just-do-it/
