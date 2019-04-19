# Exploding Dots

## Staircase to Infinity

> section: infinity
> id: race

In ancient Greece, Achilles was one of the greatest heroes and (almost)
invulnerable. On one day, he was challenged to race … by a tortoise!

::: x-slideshow

    .race(slot="stage")
      svg(width=760 height=140 viewBox="0 0 760 140")
        line(x1=40 y1=113 x2=761 y2=113)
        line(x1=40 y1=113 x2=40 y2=121)
        text(x=40 y=135) 0
        line(x1=451 y1=113 x2=451 y2=121)
        text(x=451 y=135) 100
        g
          line(x1=616 y1=113 x2=616 y2=121)
          text(x=616 y=135) 110
        g
          line(x1=683 y1=113 x2=683 y2=121)
          text(x=683 y=135) 111
        g: line(x1=709 y1=113 x2=709 y2=121)
        g: line(x1=720 y1=113 x2=720 y2=121)
      img(src="images/achilles.png" width=80 height=110 style="left: 0%; z-index: 1;")
      img(src="images/tortoise.png" width=80 height=50 style="left: 54%; margin-top: 8%;")

{div(slot="legend")} Achilles knew that he could run _ten times_ as fast as
the tortoise. He felt very confident, and decided to give it a 100m head start.

{div(slot="legend")} And the race began. In the time it took Achilles to reach
the 100m mark, the tortoise moved by [[10]]m: _{span.reveal(when="blank-0")}it
was now at 110m._

{div(slot="legend")} When Achilles arrived at 110m, the tortoise had moved by
[[one]] more meter(s): _{span.reveal(when="blank-1")}it was now at 111m._

{div(slot="legend")} When Achilles arrived at the 111m mark, the tortoise had
moved by 10cm.

{div(slot="legend")} At every step, Achilles gets closer to the tortoise. But
since the tortoise keeps moving, he never quite reaches it. And since he can’t
overtake it, the tortoise wins the race!

:::

---

    figure: x-media(src="images/mind-blown.gif" width=300 height=200)

It seems obvious that something in our argument must have gone wrong. We clearly
_know_ that Achilles would eventually overtake the tortoise. But it is
difficult to pinpoint a specific error in the explanation.

It turns out that saying “and so on, forever” can be very dangerous in
mathematics. Whenever something infinite is involved, things tend to behave
very differently from our intuition. In this course we will explore the concept
of infinity from a few different angles.

---

### Trouble in our number system

::: column.grow

Our number notation is incredibly powerful, and has allowed us to make amazing
discoveries in mathematics, science and engineering. In Europe, mathematicians
first used the [Roman numeral system](gloss:roman-numerals) (numbers like I, V,
X, …) before the [Arabic numbers](gloss:arabic-numerals) were introduced
in the 15th century.

{.r} There is one important property of numbers that we usually take for
granted: all numbers are __unique__. In other words, there are no two different
numbers that are equal. 5 and 8 are different, just like 100 is different from
101, and so on. _{button.next-step} Continue_

::: column(width=300)

    x-media(src="images/clock.jpg" width=300 height=300)

{.caption} On a clock, the number 12 (XII) is actually the same as the number 0.

:::

---
> id: choice
> goals: choice

Well – almost. Like for every rule, there might be some exceptions to this one.
For example, here is one age-old question asked by students around the world:

{.quote} __Is 0.999999… equal to 1?__

The “…” means that there are _infinitely many_ 9s to the right of the decimal
point. If the answer to this question is _yes_, it would mean that there are two
completely different numbers, that are actually the same. What do you think?

    p: .btn-row.text-center
      button.btn.btn-green They’re the same
      button.btn.btn-blue They’re different

---

We’ll answer this later in this course – but you might also think that the
entire questions sounds a bit dubious. There is no way we could _actually write
down_ infinitely many 9s – it would take infinitely long. We have to cheat by
writing dots and using our imagination. The question should really be:

{.quote(style="max-width: 480px; margin: 1.5em auto")} __If we were
somehow God-like and could write an infinite string of 9s, would the results be
equal to 1?__

Since we humans are not God-like, you might decide that the question is
meaningless. But that seems like a very unsatisfactory solution – and new
discoveries always start by asking _“what if…”_

_{button.next-step} Continue_

---
> id: numberline
> goals: n2 n3 n4

As humans, we can only ever write a finite number of 9s, say ${n}{n|1|1,15,1}:

    figure: svg(width=680 height=110 viewBox="0 0 680 110")
      line(x1="20" y1="79.5" x2="660" y2="79.5" stroke="#000" stroke-linecap="round" stroke-width="2")
      line(x1="20" y1="88" x2="20" y2="80" stroke="#000" stroke-linecap="round" stroke-width="2")
      line(x1="660" y1="88" x2="660" y2="80" stroke="#000" stroke-linecap="round" stroke-width="2")
      text(transform="translate(16.01 106.62)" font-size="18") 0
      text(transform="translate(656.01 106.62)" font-size="18") 1
      g(fill="#ff941f")
        text(transform="translate(522.54 38.62)" font-size="16") 0.9
        line(x1="532" y1="68.53" x2="532" y2="43" stroke="#ff941f" stroke-linecap="round" stroke-width="2")
        polygon(points="532 77 536.88 65.06 532 67.89 527.12 65.06 532 77")
      g.reveal(when="n2" fill="#31b304")
        text(transform="translate(620.57 38.62)" font-size="16") 0.99
        line(x1="634" y1="68.53" x2="634" y2="43" stroke="#31b304" stroke-linecap="round" stroke-width="2")
        polygon(points="634 77 638.88 65.06 634 67.89 629.12 65.06 634 77")
      g.reveal(when="n3" fill="#1f7aff")
        text(transform="translate(637.59 14.62)" font-size="16") 0.999
        line(x1="655" y1="68.53" x2="655" y2="19" stroke="#1f7aff" stroke-linecap="round" stroke-width="2")
        polygon(points="655 77 659.88 65.06 655 67.89 650.12 65.06 655 77")
    x-gesture(target="x-var" slide="100,0")

{.convergence} **{.m-yellow}0.9** is less than 1.  
_{span.reveal(when="n2")} **{.m-green}0.99** is less than 1._  
_{span.reveal(when="n3")} **{.m-blue}0.999** is less than 1._  
_{span.reveal(when="n4")} **{.m-red}0.9999** is less than 1._  
_{span.hidden} **${nines(n)}** is less than 1._

---

Each of these approximations is [[less than|greater than|equal to]] 1. They form
a [sequence](gloss:sequence) of numbers that steadily marches rightward on the
number line, getting closer and closer to 1 (without ever quite reaching it).

---
> id: convergence

Notice that the sequence will eventually enter any amount of space you might
specify on the left of 1. For example, if you want an approximation that’s
within 1/${pow(x)}{x|7|1,20,1} of 1, you could pick ${nines(x)}.

---

In other words, there cannot be any space between 0.999999… and 1. Since it is
clearly also not _bigger_ than 1, we can deduce that 0.999999… must actually be
_equal_ to 1.

---
> id: dots
> goals: d1 d2 d3 d4 x1 x2 x3 x4

### A dot-machine explanation

If you’re not satisfied with this explanation, let’s have a look at what 0.9999…
would look like in a [`1←10` machine](gloss:dot-machine):

    x-dot-machine(cells="0.9999…")
    p.text-center.reveal(when="d1"): button.btn.btn-small.btn-red Explode

Click anywhere in the [first decimal box](->#dots_.dot-decimal+.dot-cell)
to create a [dot and anti-dot pair](gloss:anti-dot). This doesn’t change the
number.

{.reveal(when="d1")} Now click the [explode button](->#dots_button) to simplify
the number using the `1←10` rule.

{.reveal(when="x1")} Let’s do the same thing for the [second decimal
box](->#dots_.dot-decimal+.dot-cell+.dot-cell). First add a dot and
anti-dot pair, and then explode.

{.reveal(when="d2 x2")} Notice how the dot/anti-dot pair canceled out! This is
called an [annihilation](gloss:dot-annihilation). The resulting number is still
the same as 0.9999… Keep going with the remaining cells.

{.reveal(when="d3 x3 d4 x4")} If we keep doing this forever, it looks like we
are actually showing that 0.9999… is the same as 1.0000…!

---

### An algebraic explanation

If you’re still not convinced, let’s end with an algebraic argument. If you
believe that 0.9999… is a valid number (that might or might not be 1), then it
makes sense to assume that it also obeys all the usual rules of arithmetic.

    ol.proof
      li Let’s start by giving the number a name, say #[.ivar F] for #[strong.m-green Frederica]:
        .text-center.r #[.ivar F] = 0.9999…#[button.next-step Continue]
      li.reveal(when="next-0") Now multiply it by 10. This gives us
        .text-center.r 10#[.ivar F] = 9.9999…#[button.next-step Continue]
      li.reveal(when="next-1") Subtract the equation in step 1 from the equation in step 2. Since all their decimal places are equal, they simply cancel out:
        .text-center.r 9#[.ivar F] = 9#[button.next-step Continue]
      li.reveal(when="next-2") Finally, if we divide both sides by 9, we get
        .text-center.md #[.ivar F] = [[1]]

---

Amazing! But let’s be clear on what we have established here. __IF__ you choose
to believe that 0.9999… is a meaningful quantity in usual mathematics, __THEN__
you must conclude that it equals 1. This is important, because the same
algebraic argument can lead to philosophical woes – as we’ll see in the next
section…



--------------------------------------------------------------------------------



## Unusual Numbers

> section: unusual

In the [previous section](/course/exploding-dots/infinity), we looked at a
number with infinitely many 9s to the right of the decimal point:

{.text-center} __0.999999…__

Now, let’s see what happens if we add infinitely many 9s to the _left_ of the
decimal point:

{.text-center} __…999999__

---

If we assume that this is a meaningful number (and not, for example, just
“infinity”), we can try to use the same algebraic argument as before, to work
out its value:

    ol.proof.s-yellow
      li Let’s start by giving the number a name, say #[.ivar A] for #[strong.m-yellow Allistaire]:
        .text-center.r #[.ivar A] = …999999#[button.next-step Continue]
      li.reveal(when="next-0") Now multiply it by 10. This gives us
        .text-center.r 10#[.ivar A] = …999990#[button.next-step Continue]
      li.reveal(when="next-1") Notice that #[.ivar A] and 10#[.ivar A] only differ in their final digit. Therefore, if we subtract the equation in step 1 from the equation in step 2, we get
        .text-center.r 9#[.ivar A] = –9#[button.next-step Continue]
      li.reveal(when="next-2") Finally, if we divide both sides by 9, we get
        .text-center.md #[.ivar A] = [[-1]]

---

In other words, we have just shown that _{strong.m-yellow.nowrap}…999999_ = −1.
Apparently, if we pulled out an infinite calculator and computed the sum of 9 +
90 + 900 + 9000 + …, the result would be −1!

_Do you believe that?_

    figure: x-media(src="images/confused.gif" width=200 height=200)

---

### Unusual Arithmetic

Even though …9999999 is clearly not a “normal” number, let’s assume for now that
it exists, and that it follows the basic laws of arithmetic. If that is the
case, we’d expect …9999999 + 1 = [[0]].

---
> id: dots-1
> goals: dot

Let’s use a [`1←10` machine](gloss:dot-machine) to see if that is actually the
case. Click somewhere in the 1s cell to add 1:

    x-dot-machine(cells="…99999")
    x-gesture(target="#dots-1 .dot-cell:last-child")

---

Looks like this actually worked! If we add 1 to _{span.nowrap}…9999999_, the
result is 0.

But remember: all we have shown is that __IF__ we choose to believe that …999999
is a meaningful number that follows our usual laws of arithmetic, __THEN__ it
must have value –1. Most people simply say that it _isn’t_ a number and stop
there – and that is a perfectly valid view.

This begs the question: is there an _unusual_ system of arithmetic for which
…999999 is a meaningful number?

::: .box.problem-box
    .box-title: h3 Challenge
::: .box-body

Let’s make matters worse! Consider the number with infinitely many 9s both to
the left _and_ to the right of the decimal point: __{.m-red.nowrap}…9999.9999…__.
Try to use the same algebraic argument to show that this equals __{.m-red}zero__.

*Somehow this makes sense, because __{.m-red.nowrap}…9999.9999…__ =
__{.m-green.nowrap}…9999__ + __{.m-yellow.nowrap}0.9999…__ = __{.m-green}−1__ +
__{.m-yellow}1__ = __{.m-red}0__.*

:::
:::

_{button.next-step} Continue_

---
> id: warp-1

### Warping the Number Line

In the previous chapter, we saw that _{span.nowrap}0.999999… = 1_. This seems
somewhat plausible, because the sequence of approximations 0.9, 0.99, 0.999,
0.9999, and so on, get closer and closer to 1.

In this example, the exact opposite happens: the numbers 9, 99, 999, 9999, and
so on, are marching further and further away from –1. That’s why it is so
abstruse to think that _{span.nowrap}…999999_ could possibly equal –1.

    figure: include svg/number-line-1.svg

_{button.next-step} Continue_

---
> id: warp-2

It turns out, however, that it _is_ possible to develop a new arithmetic system
in which numbers like _{span.nowrap}…999999_ are meaningful. To do that, we just
have to change how we measure “distance” between numbers on the number line.

Usually, _distance_ is defined using __addition__ and __subtraction__. For
example, the distance between 2 and 6 is [[4]],
_{span.reveal(when="blank-0")}because `2 + 4 = 6`._

    figure: include svg/number-line-2.svg

---

Instead, we can define a “different kind” of distance using __multiplication__
and __division__.

{.r} In the world of integers, 0 is the _most divisible_ number of all. It can
be divided any number of times by any integer, and still give an integer result
(namely 0). If we focus on our number base of 10, we can see that 0 can be
divided by 10 once, or twice, or thirty-seven times, or a million times.
_{button.next-step} Continue_

---
> id: zero-list

* The number __40__ is a little bit “zero-like”, in this sense in that we can
  divide it by ten and still have an integer.
* The number __1700__ is more zero-like: it can be divided [[twice|three
  times|four times]] by 10, and still give an integer result.
* {.reveal(when="blank-0")} The number __230,000__ is even more zero-like. It
  can be divided [[four]] times by 10, and still stay an integer.
* {.reveal(when="blank-1")} The number __5__, on the other and, it not very
  zero-like. We can’t divide it by ten even once, and have it stay an integer.

---

We can now develop a __distance formula__, based on how often 10 “goes into”
into a number multiplicatively. If we can divide a number _a_ by ten a maximum
of _k_ times while remaining an integer, let’s write

{.text-center} `|a|_(ten) = 1/10^k`

For example, `|850|_(ten) = 1/(10^1) = 0.1`, and `|8500|_(ten) = 1/(10^2) = 0.01`,
and `|850000|_(ten) =` [[0.0001]].

---

We can also measure the distance between any two different numbers. For example,
the distance between 3 and 33 is `|33−3|_(ten) = |30|_(ten) = 1/(10^1) = 0.1`.

With this new way to measure distance, 1, 10, 100, 1000, … is a sequence of
numbers getting closer and closer to [[zero|1|–1|infinity]]. Similarly, 9, 99,
999, 9999, … is getting closer and closer to [[-1]], just like we saw above.

---
> id: p-adic

Mathematicians call this way of viewing distances between the non-negative
integers [__ten-adic arithmetic__](gloss:adic). The suffix “adic” means “a
counting of operations”. Here we are counting factors of ten.

---
> id: dots-2
> goals: dots

### Negative Numbers and Fractions

We’ve already seen that our new, ten-adic system supports negative integers:
_{span.nowrap}…999999 = –1_. We can do something similar for other negative numbers. How much
do you have to add to _{span.nowrap}…999998_, to get it to explode?

    x-dot-machine(cells="…99998")
    x-gesture(target="#dots-2 .dot-cell:last-child")

---

In other words, _{span.nowrap}…999998 = [[-2]]_. _{span.reveal(when="blank-0")}
We can similarly calculate that *{span.nowrap}…999997 = [[-3]]*,
*{span.nowrap}…999953 = [[-47]]*, *{span.nowrap}…999700 = –300*
and so on. Every negative integer has a ten-adic equivalent._

---
> id: dots-3
> goals: dots

{.text-center} •

Constructing ten-adic fractions is a bit more difficult. Let’s see what happens
if we multiply _{span.nowrap}…6666667_ by 3:

    x-dot-machine.tiny(cells="…66667")
    p.text-center: button.btn.btn-small.btn-red Multiply by 3
    x-gesture(target="#dots-3 button")

---

Since _{span.nowrap}…6666667_ × 3 = [[1]], *{span.reveal(when="blank-0")}we
know that _{span.nowrap}…6666667_ = `1/3`.*

---

::: .box.problem-box
    .box-title: h3 Challenge
::: .box-body

Can you work out which ten-adic number behaves like `2/3`?

What about other fractions like `4/7` or `2/13`?

:::
:::

_It turns out that there are a few fractions that cannot be expressed in our
ten-adic number system: all fractions that, in their reduced form, have a
[denominator](gloss:denominator) that is a multiple of 2 or 5 (or both). You
can fix this by allowing ten-adic numbers to have a finite number of decimal
places. Now, every [rational number](gloss:rational-numbers) as a ten-adic
equivalent._

---
> id: flaw

### A Serious Flaw

We’ve now seen that every integer an fraction has a ten-adic equivalent, and
that we can add, subtract and multiply ten-adic numbers, just like we would
normal integers. Unfortunately there is one serious flaw: we cannot _divide_ by
all ten-adic numbers.

To see why that’s the case, we need to look at the powers of 2 and 5:

::: column(width=180)

{.text-center} `2^1` = 2<br>
`2^2` = 4<br>
`2^3` = 8<br>
`2^4` = 16<br>
`2^5` = [[32]]<br>
`2^6` = [[64]]<br>
`2^7` = 128<br>
…

::: column(width=180)

{.text-center} `5^1` = 5<br>
`5^2` = 25<br>
`5^3` = [[125]]<br>
`5^4` = [[625]]<br>
`5^5` = 3,_{span.po2}125_<br>
`5^6` = 15,_{span.po2}625_<br>
`5^7` = 78,_{span.po2}125_<br>
…

:::

---
> id: flaw-1

Notice how many of the powers of 5 end in <x-target to=".po2" no-margins>other,
smaller powers of 5</x-target>. The same is also true for powers of 2. It turns
out that we can create two infinite, 10-adic numbers, that always end in powers
of 2 or 5 respectively:

::: column(width=140)

{.text-right} `2^1` = 2<br>
`2^5` = 32<br>
`2^25` = 33554432<br>
__{.i.m-red}M__ = …33554432

::: column(width=140)

{.text-right} `5^1` = 5<br>
`5^2` = 25<br>
`5^3` = 125<br>
__{.i.m-yellow}N__ = …1953125

:::

_{button.next-step} Continue_

---
> id: flaw-2

If we try to multiple powers of 2 and 5, we get a sequence of products that get
closer and closer to zero (in our 10-adic sense):

|    |   |     |   |           |
| -: | - | --: | - | --------: |
|  2 | × |   5 | = |        10 |
|  4 | × |  25 | = |       100 |
|  8 | × | 125 | = |  [[1000]] |
| 16 | × | 625 | = | [[10000]] |

---
> id: flaw-3

The same happens if we try to multiply __{.i.m-red}M__ and __{.i.m-yellow}N__:

|   |   |    |    |    |    |
| - | - | -- | -- | -- | -- |
|   | … |  3 |  1 |  2 |  5 |
| × | … |  4 |  4 |  3 |  2 |
|   | … |  6 |  2 |  4 | 10 |
|   | … |  3 |  6 | 15 |    |
|   | … |  8 | 20 |    |    |
| + | … | 20 |    |    |    |
| = | … | 37 | 28 | 19 | 10 |
| = | … |  0 |  0 |  0 |  0 |

---

In other words, we have found two non-zero numbers __{.i.m-red}M__ and
__{.i.m-yellow}N__ so that __{.i.m-red}M__ × __{.i.m-yellow}N__ = 0.

This means that in ten-adic arithmetic, it is impossible to divide by
__{.i.m-red}M__ or __{.i.m-yellow}N__. (If it were possible, we could divide the
equation __{.i.m-red}M__ × __{.i.m-yellow}N__ = 0 by __{.i.m-yellow}N__, and get
__{.i.m-red}M__ = 0. That is a contradiction.)



--------------------------------------------------------------------------------



## P-adic Numbers

> section: p-adic
> id: p-adic

In the [previous section](/course/exploding-dots/unusual), we managed to
construct two non-zero [10-adic numbers](gloss:adic) _M_ and _N_, so that
`M×N=0`. This means that it is impossible to divide by numbers like _M_ and _N_
– a serious flaw in any number system.

It turns out, however, that this problem only occurs if the number base is not a
[prime number](gloss:prime). Since 10 [[is not prime|is prime]],
_{span.reveal(when="blank-0")}the 10-adic numbers are flawed. 2-adic or 3-adic
numbers, on the other hand, are not._

---

Mathematicians call these numbers __*p*-adic numbers__, where the *p* stands for
“prime”. Even though they don’t seem particularly relevant in everyday life,
_p_-adic numbers turn out to be very useful in certain parts of mathematics.

For example, many unanswered problems in mathematics are related to prime
numbers and [prime factorizations](gloss:factorisation). Since _p_-adic numbers
were defined using _multiplication_ rather than _addition_, they are perfect for
analysing these problems. *P*-adic numbers were even used in Andrew Wiles’
famous proof of [Fermat’s Last Theorem](gloss:fermat-last).

---
> id: square

One of the must surprising applications of p-adic numbers is in geometry. Here
you can see a square that is divided into ${2*x}{x|9|1,50,1} small triangles of
equal area:

    figure: svg.square(width=320 height=320)
    x-gesture(target="x-var" slide="100,0")

---
> id: square-1

As you move the slider, you can see that it is possible to divide the square
into any [[even|odd|prime]] number of equal triangles.

{.r.reveal(when="blank-0")} But what about _odd_ numbers? Draw a square on a
sheet of paper, and then try dividing it into 3, 5 or 7 triangles of equal area.
_{button.next-step} Continue_

---
> id: square-3
 
Here’s the shocker: it turns out that it is _impossible_ to divide a square into
an _odd_ number of triangles of equal area! This was proven in 1970 by
mathematician [Paul Monsky](bio:monsky) – you can even have a look at the paper
he published about it:

    figure
      x-media(src="images/paper.jpg" width=400 height=132)
      p.caption #[a(href="http://ieee.scripts.mit.edu/urgewiki/images/0/00/Monsky.pdf" target="_blank") The American Mathematical Monthly]

In the proof, Monsky had to use the 2-adic number system. Mathematics, no matter
how abstruse it might seem, always comes up with surprising and unexpected
applications.
