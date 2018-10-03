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
      img(src="images/tortoise.png" width=80 height=50 style="left: 54%; margin-top: 60px;")

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

    x-dot-machine(cells="0.9999")
    p.text-center.reveal(when="d1"): button.btn.btn-small.btn-red Explode

Click anywhere in the [first decimal box](-> #dots .dot-decimal + .dot-cell)
to create a [dot and anti-dot pair](gloss:anti-dot). This doesn’t change the
number.

{.reveal(when="d1")} Now click the [explode button](-> #dots button) to simplify
the number using the `1←10` rule.

{.reveal(when="x1")} Let's do the same thing for the [second decimal
box](-> #dots .dot-decimal + .dot-cell + .dot-cell). First add a dot and
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
> sectionStatus: dev

The number 0.9999…  (if you choose to believe it is a one) has infinitely many
9s to the right of the decimal point. What if we consider the “number” with
infinitely many 9s to the left of the decimal point instead?

…9999

This is a number that ends with nine. Actually it ends with ninety-nine.
Actually it ends with nine-hundred-and-ninety-nine. And so on.

Let’s apply our algebraic argument to see what value it must have.

STEP 1: Give the quantity a name.
We’ll call it A for Allistaire.
A=…9999.

STEP 2: Multiply by ten
We obtain
10A=…99990.

STEP 3: Subtract

We see that A and 10A differ by nine (it is only their final digits that
differ). Looking at A−10A we get

−9A=9
giving

A=−1.

That is, our mathematics establishes that

…9999=−1.

Apparently, if we pulled out a calculator and computed the sum 9+90+900+9000+⋯
the calculator will show at the end of time the answer −1!

Do you believe that?

Putting it another way: On a number line, do you believe that the numbers 9, 99,
999, …. are marching closer and closer to the number −1?

![](http://gdaymath.com/wp-content/uploads/2018/03/P1-1.jpg)

Challenge: Let’s make matters worse! Consider the “number” with infinitely many
9s both to the left and to the right of the decimal point: …9999.9999…. Use the
same algebraic argument to show that this equals zero. (And this makes sense,
because …9999.9999…=…9999+.9999…=−1+1=0.)

It is hard to believe that …9999 is a meaningful number and, moreover, it has
the value −1, at least in our usual way of think about arithmetic. But remember,
all we proved here is that IF we choose to say that …9999 is a meaningful
number, then it has value −1.  It is up to us to decide whether or not it is
meaningful quantity in the first place. Most people say it is not and stop there
and that is fine.

But this begs the question:

Is there an UNUSUAL system of arithmetic for which …9999 is meaningful (for
which it has value −1)?

Challenge: One might be able to argue that …9999 does behave like −1 in ordinary
arithmetic to some degree. For example, consider performing the (very) long
addition shown. Do you see the answer zero results?

![](http://gdaymath.com/wp-content/uploads/2018/03/p2-1.jpg)

If you prefer, imagine what happens if you add one dot to this loaded 1←10
machine.

![](http://gdaymath.com/wp-content/uploads/2018/03/p3-1-768x220.jpg)

Challenge: Try this (very) long multiplication problem. Do you see that …66667
is behaving like the fraction 13?

![](http://gdaymath.com/wp-content/uploads/2018/03/p4-1.jpg)

If you prefer, imagine what happens if you triple the count of dots in each of
these boxes.

![](http://gdaymath.com/wp-content/uploads/2018/03/p5-1-768x213.jpg)

Extra: What “number” behaves like 23?

---

It is possible to develop an arithmetic system of numbers for which a quantity
like …9999 actually is meaningful (and by what we proved in the previous section
has value −1).

Here’s one such system, one that requires we change our sense of distance
between numbers on the number line. It is a system that will allow us to say,
for instance, that the numbers 9, 99, 999, …  are indeed marching closer and
closer to −1 on the number line despite what our geometric training says!

![](http://gdaymath.com/wp-content/uploads/2018/03/P1-2.jpg)


### Warping Normal Distance on the Number Line

We usually say the number 5, for instance, is a distance five from 0 on the
number line because 5 is five unit lengths away from the zero. (We usually use
absolute value notation for this distance: |5|=5.)

![](http://gdaymath.com/wp-content/uploads/2018/03/p2-2.jpg)

And 3.7 is a distance 3.7 from 0, |3.7|=3.7,  because three-and-seven-tenths of
a unit fit between 0 and 3.7 on the number line. And so on.

This is a very additive way of thinking about distance: adding five 1s gets you
from 0  to 5; adding  3.7 1s get you from 0 to  3.7; and so on.  We can say that
the distance of a point a on the number line, in this thinking, is the number of
1s that go additively into a.

But much of mathematics is not only concerned with the additive properties of
numbers, but also the multiplicative properties of numbers. For example, many
people are interested in the prime factorizations of numbers (for example,
1000=2353 and 105=3⋅5⋅7). There are so many unanswered questions about the prime
numbers and prime factorizations still in mathematics today. These questions
are, in general, very hard!

Is there are way to bring the geometry of the number line into play to possibly
help with multiplicative questions? Is there a way to think about the number
line itself as perhaps structured multiplicatively rather than additively?

To think about this, rather than focus on all possible factor of numbers, let’s
focus on one possible factors of numbers. And to keep matters relevant to our
base-ten arithmetic thinking, let’s focus on the number 10.

In our additive thinking for distance on the number line we use the unit of 1
and ask how many ones (additively) go into each number for its distance from 0.
We now want to use the unit of 10 and ask how many times ten goes
multiplicatively into each number.

What could that mean?

In the world of integers the number 0 is the most divisible number of all: it
can be divided by any integer any number of times and still give an integer
result (namely 0) each and every time. Focusing on our chosen factor of ten, we
can divide 0 by ten once, or twice, or thirty-seven times, and still have an
integer.

The number 40 is a little bit “zero-like” in this sense in that we can divide it
by ten once and still have an integer. The number 1700 is more zero-like as it
can be divided by ten twice and still give an integer result. A googol is very
much more zero-like: it can be divided by ten one hundred times and still stay
an integer.

The integer 5 is not very zero-like at all: one can’t divide it by ten even once
and stay an integer.

In this setting the more times ten “goes into” into a number multiplicatively,
the more zero-like it is. So in this sense, a googol is much closer to zero than
5 is.

So let’s develop a distance formula that regards numbers with large powers of
ten as factors as closer to zero than numbers with less counts of powers of ten
as factors. There are a number of ways one might think to do this, but let’s
try to mimic the additive properties of the number line we are familiar with.

Normally we would say that 850 is further from zero than 85 is, and, in fact, we
might even say 850 is ten times further from zero as 85 is.  In our
multiplicative thinking,  850 is now closer to zero than 85 is and it would be
natural to have it as ten times closer.

The following formula seems a natural way to have this happen.

If  a can be divided by ten a maximum of k times and remain an integer, then set
|a|ten=110k.

For example, then, |850|ten=1101=0.1 and |8500|ten=1102=0.01 and |8500000|ten=
1105=0.00001. Also, since |85|ten=1100=1. we see, indeed, that 850 is ten times
closer to zero than 85 is.

We can also measure the distance between any two numbers in this multiplicative
way. For example, the distance between 3 and 33 is |33−3|ten=|30|ten=1101=0.1.

With this new way to measure distance, we see that

1, 10, 100, 1000, … is a sequence of numbers getting closer and closer to zero.
We have |1|ten=1 and |10|ten=0.1 and |100|ten=0.01 and |1000|ten=0.001, and so
on, indeed approaching a distance of zero from 0.

In terms of values in a 1←10 machine, we see that boxes far to the left in the
machine, representing high powers of ten, are representing values very close to
zero. (Before, in our additive thinking, boxes to the far right for decimals
represented values very closer and closer to zero.)

![](http://gdaymath.com/wp-content/uploads/2018/03/p3-2.jpg)

Mathematicians call this way of viewing distances between the non-negative
integers ten-adic arithmetic. (The suffix adic means “a counting of operations”
and here we are counting factors of ten.) It is fun to think how to extend this
notion of distance to fractions too, and then to all real numbers.


### The number …9999

Let’s look now at the sequence of numbers 9 and 99 and 999 and so on marching
off to the right on the number line. Could they possibly be marching closer and
closer to the value −1?

![](http://gdaymath.com/wp-content/uploads/2018/03/p4-2.jpg)


Yes, if by “closer” we mean this new multiplicative way to think of distance.

We have

![](http://gdaymath.com/wp-content/uploads/2018/03/P1-3.jpg)

The numbers 9, 99, 999, 9999, … are indeed approaching the value 0−1=−1.

Challenge: Show that in a 2←3 machine that ⋯|1|1|1|1|2 is negative one! Show
that ⋯|0|1|0|1|0|1|0|2 when multiplied by 5 gives 1, and so represents 15.
(What measure of distance might we be using on the number line this time for
these “numbers” to make sense?)
 

### Constructing Negative Integers

In our base-ten thinking with our multiplicative notion of distance on the
number line, we set

|a|ten=110k where k is the largest count of times a can be divided by ten and
remain an integer.

And we have made sense of ⋯9999 as a meaningful number with value −1.

So what’s −2  in this unusual system of arithmetic?

Let’s think in terms of a 1←10 machine. Since −1=⋯9|9|9|9 , and −2 is double −1,
we should have

−2=⋯18|18|18|18.

With explosions we get

−2=⋯18|18|18|18
=⋯18|18|19|8
=⋯18|19|9|8
=⋯19|9|9|8
=⋯9|9|9|8.

And one can check that this long addition does give zero.

![](http://gdaymath.com/wp-content/uploads/2018/03/P1-4.jpg)

We can see now how to readily construct any negative integer. For example, we
can see that adding 47 to ⋯999953 will give zero and so this latter quantity
must be −47, and that adding 3000 to ⋯9997000 gives zero and so this quantity must be −3000.

Challenge: What is −2 in a 2←3 machine? What is −5?
 

### Constructing Fractions

We saw that ⋯66667 is the fraction 13: multiply this quantity by three and you
get 1.

The 1←10 machine provides a natural way to compute such fractions. For example,
let’s find the ten-adic representation of 47 . That is, let’s find a number x
such that 7×x=4. Start by writing

x=⋯h|g|f|e|d|c|b|a

as for a 1←10 machine. Then

7x=⋯7h|7g|7f|7e|7d|7c|7b|7a.

We want 7a ,after explosions, to leave a 4. So we need a multiple of 7 four
greater than a multiple of 10. We see that 7a=14 is good. So let’s set a=2.

x=⋯h|g|f|e|d|c|b|2
7x=⋯7h|7g|7f|7e|7d|7c|7b|14
=⋯7h|7g|7f|7e|7d|7c|7b+1|4
 
Now we want 7b+1 to be a multiple of 10 so that all dots in that box explode to
leave zero behind. This suggests b=7.

x=⋯h|g|f|e|d|c|7|2
7x=⋯7h|7g|7f|7e|7d|7c|50|4
=⋯7h|7g|7f|7e|7d|7c+5|0|4

Now we need 7c+5 a multiple of 10. Choose c=5.

x=⋯h|g|f|e|d|5|7|2
7x=⋯7h|7g|7f|7e|7d|40|0|4
=⋯7h|7g|7f|7e|7d+4|0|0|4

Now choose d=8.

x=⋯h|g|f|e|8|5|7|2
7x=⋯7h|7g|7f|7e|60|0|0|4
=⋯7h|7g|7f|7e+6|0|0|0|4

And then e=2.

x=⋯h|g|f|2|8|5|7|2
7x=⋯7h|7g|7f|20|0|0|0|4
=⋯7h|7g|7f+2|0|0|0|0|4

And f=4.

x=⋯h|g|4|2|8|5|7|2
7x=⋯7h|7g|30|0|0|0|0|4
=⋯7h|7g+3|0|0|0|0|0|4

And g=1.

x=⋯h|1|4|2|8|5|7|2
7x=⋯7h|10|0|0|0|0|0|4
=⋯7h+1|0|0|0|0|0|0|4

And now I am doing the same work as I did for a value b, making 7b+1 a multiple
of 10. We are in a cycle and so x=47 is represented as

⋯1428571428571428572=142857¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯2.


Challenge: This process felt reminiscent of the task of writing 47 as a decimal
in ordinary arithmetic using a 1←10 machine with decimals. We argued there too
that the decimal represent had to fall into a cycle.

Can you argue that the fraction 213 will also have a repeating ten-adic expansion?


### A Glitch

Let’s try to compute the ten-adic representation of the fraction 12. Here we
seek a number

x=⋯h|g|f|e|d|c|b|a
so that

2x=⋯2h|2g|2f|2e|2d|2c|2b|2a
equals 1.

This means we a number a so that, after explosions, 2a leaves a single dot. That
is, we need 2a to be one more than a multiple of ten. This is not possible!


Challenge: Contemplate the ten-adic expansions for 15 and 310 and 235.
In general, which fractions pq seem to be problematic?


Challenge: Develop a general theory that if pq is a reduced fraction with q
sharing no factor in common with ten (other than 1), then it is for certain
possible to express pq as a ten-adic number ⋯hgfedcba. Show further that its
expression is sure to fall into a repeating cycle.
 

### Broadening our Definition a Tad

It seems we have defined a ten-adic value to be an expression of the form
⋯edcba with each digit one of the standard digits 0 through 9, allowing for
non-zero digits to appear infinitely far to the left.

In this system we have the ordinary positive integers,
eg 5 is ⋯00005,

the negative numbers
eg −5 is ⋯99995

and some fractions
eg 13 is ⋯66667.

But not all fractions. It turns out that the troublesome fractions are the ones
pq which, when written in reduced form, have a denominator a multiple of 2 or 5
or both.

We can obviate this problem if we allow a ten-adic number to extend finitely far
into the decimal places on the right.  That is, set a ten-adic expression to be
one of the form ⋯edcba.xy…z with each digit one of the standard digits 0 through
9, allowing for non-zero digits to appear infinitely far to the left of the
decimal point, and only finitely far to its right. (After all, we do the
analogous thing in ordinary arithmetic by writing 33.3333⋯, for example, for
thirty-three and a third.)

Now we have
12=0.5 is ⋯0000.5

and
23100=0.23 is ⋯0000.23.

We can also handle 235 by thinking of this as 27×5=2×27×10=4/710. Since 47 is
142857¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯2 we must have 235=142857¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯.2.

Challenge: Show that 16=⋯3333.5 and hence find the ten-adic expression for
512=16+14. What is the ten-adic expression for 112?

Challenge: Explain why every fraction is now sure to have a ten-adic
representation.

Challenge: Explore a theory of “3/2-adic” representations of fractions using a
2←3 machine.

---

### A Serious Flaw of Our Ten-adic Numbers

With the ten-adic numbers we can represent all integers and fractions. But did
you notice that all the numbers we presented so far have repeating cycles?

We can also consider numbers in this system, with infinitely many digits to the
left, that don’t fall into repeating cycles. These must correspond to irrational
numbers. (And possibly other new types of numbers?)

We can add and multiply ten-adic numbers. For example, we have seen ⋯66667 is 13
and ⋯9999  is −1.  We can compute their sum to see an answer indeed one less
than ⋯6667. (And ⋯6666  is −69=−23=13−1.)

![](http://gdaymath.com/wp-content/uploads/2018/03/P1-5.jpg)

And we can compute their product to see the answer ⋯3333, which is indeed −1/3.

![](http://gdaymath.com/wp-content/uploads/2018/03/p2-4.jpg)

And since we know how to make negative ten-adic numbers and fractions as
ten-adic numbers, we can also subtract (add the negative) and divide (multiply
by a fraction) ten-adic numbers.

Well, almost. We can’t divide by some ten-adic numbers. There’s a flaw in the
ten-adic system.

Here’s an example of the problem. We have that

2×5=10 is a number close to zero.
22×52=100 is a number closer to zero.
23×53=1000 is a number even closer to zero.

And so on.

It is possible to construct a non-zero ten-adic number N that behaves like an
infinitely large power of two and a non-zero ten-adic number M that behaves like
an infinitely large power of five, so their product then, N×M, is so close to
zero that it actually is zero!

N×M=0

Non-zero numbers that multiply to zero don’t exist ordinary arithmetic, but they
do in the ten-adic system. This means we can’t divide by some non-zero numbers,
like N and M in this arithmetic. (If dividing by N is possible, then divide the
equation  N×M=0 through by N and get the contradictory statement that M=0.)

How might one construct these numbers N and M? It’s a bit tricky, but here’s the
gist of it.

Here are the first few powers of five:
5, 25, 125, 625, 3125, 15625, 78125, …

All of these powers end in 5.

Infinitely of them actually end in 25.

Actually, one can verify that infinitely of then actually end in 125. (Multiply
any one that does by 25 to get another one.)

Actually, infinitely many of them end in 3125. (Multiply any on that does by 625
to find another one that does.)

And so on.

In principle, we can construct a ten-adic number M=⋯3125 for which there are
infinitely many powers of five that end with the same set of digits as M does,
for any size set of digits you want. (There are infinitely many powers of five
that end with the final set of one-hundred digits as M does, and there are
infinitely many powers of five that end with the same million final digits, and
so on.)


We can do the same construction for the powers of two and construct a ten-adic
number N=⋯832 for which there exist infinitely many powers of two that end with
any final set of digits of N.

Now look what happens when you multiply N and M. You do indeed get zero.

![](http://gdaymath.com/wp-content/uploads/2018/03/p3-4.jpg)

The problem is that 10 is a composite number. One can prove that this annoyance
will never arise if one works in base that is a prime number instead!



--------------------------------------------------------------------------------



## P-adic Numbers

> section: p-adic
> id: p-adic

In the [previous section](), we managed to construct two [10-adic
numbers](gloss:adic) _M_ and _N_ that were both not zero, so that `M×N=0`. This
is very different from how normal multiplication works, and would be a serious
flaw in the number system.

It turns out, however, that this problem only occurs if the number base is not a
[prime number](gloss:prime). Since 10 [[is not prime|is prime]],
_{span.reveal(when="blank-0")}the 10-adic numbers contain a glitch. 2-adic or
3-adic numbers, on the other hand, don’t._

---
> id: square

These number systems are called __*p*-adic numbers__, where the *p* stands for
“prime”. It turns out that they are incredibly useful in mathematics: they
provide a powerful tool for analyzing the properties of prime numbers and [prime
factorizations](gloss:factorisation) of numbers. *P*-adic numbers were even used
in Andrew Wiles’ famous proof of [Fermat’s Last Theorem](gloss:fermat-last).

But one of the must surprising applications of p-adic numbers is actually in
geometry. Here you can see a square that is divided into ${2*x}{x|9|1,50,1}
small triangles of equal area:

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
