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
since the tortoise keeps moving, he never quite reaches it. It seems like he
will never be able to overtake it, so the tortoise wins the race!

:::

---

    figure: x-media(src="images/mind-blown.gif" width=300 height=200)

It seems obvious that something in our argument must have gone wrong. We clearly
_know_ that Achilles _would_ eventually overtake the tortoise. But it also is
difficult to pinpoint a specific error in the explanation.

It turns out that saying "and so on, forever" can be very dangerous in
mathematics. Whenever something infinite is involved, things tend to behave
very differently from our intuition.

In this course we will explore the concept of infinity using algebra as well as
the exploding dot machines.

---

### Trouble in our number system

Our number notation is incredibly powerful, and has allowed us to make amazing
discoveries in mathematics, science and engineering. In Europe, mathematicians
first used the Roman numeral system (numbers like I, V, X, …) before the
Arabic numeral system was introduced in the 15th century (numbers like 0, 1, 2, …)

There is one important property of numbers that we usually take for granted:
all numbers are __unique__. In other words, there are no two different numbers
that are equal. 5 is different from 8, 100 is different from 101, and so on.

Well – almost. Like for every rule, there might be a few exceptions to this one.
For example, here is one age-old question asked by students around the world:

{.text-center} Is 0.999999… equal to 1 or not?

Note that the "…" means that there are _infinitely many_ 9s to the right of the
decimal point. If the answer to this question is "yes", it would mean that there
are two seemingly completely different numbers, that are actually the same.

What do you think?

    p.text-center.btn-row
      button.btn.btn-red They're the same
      button.btn.btn-red They're different

---

We'll resolve the question later in this course – but if we are honest, the
entire questions sounds a bit dubious to start with. There is no way we could
actually write down infinitely manny 9s: It would take infinitely long. We have
to cheat and write ellipsis (dots) to say “imagine this going on forever.”

This means that the question is actually one for our imagination. It is really
asking:

{.text-center} _If we were somehow God-like and could list an infinite string of
9s to the right of the decimal point, would the quantity that results be equal
to  1, or not?_

One might decide that since we humans are not God-like the question is
meaningless, and so there is no point to even giving the question consideration.

Yet, discoveries and progress always start by asking "what if…", and simply
declaring it as an invalid question seems like a very unsatisfactory solution,

---

Each approximation we humans write for 0.9999… is close to 1, not equal to 1, in fact, just shy of  1 each time.

0.9 is less than 1.

0.99 is less than 1.

0.99999 is less than 1.

0.999999999999 is less than 1.

0.9999999999999999999999999999999999999999999 is less than 1.
 
And some people use this to argue that 0.9999… too must be smaller than 1, and so not equal to 1.

---

But let’s think a little more deeply about these numbers 0.9,  0.99, 0.999, …. They’re are sequence of numbers marching rightward on the number line, heading to the number 0.9999…, which might or might not be 1.


<svg xmlns="http://www.w3.org/2000/svg" width="680" height="110" viewBox="0 0 680 110"><title>Artboard 1</title><line x1="20" y1="79.5" x2="660" y2="79.5" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><line x1="20" y1="88" x2="20" y2="80" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><line x1="660" y1="88" x2="660" y2="80" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><text transform="translate(16.01 106.62)" font-size="18" font-family="SourceSansPro-Regular, Source Sans Pro">0</text><text transform="translate(522.54 38.62)" font-size="16" font-family="SourceSansPro-Regular, Source Sans Pro">0.9</text><text transform="translate(620.57 38.62)" font-size="16" font-family="SourceSansPro-Regular, Source Sans Pro">0.99</text><text transform="translate(637.59 14.62)" font-size="16" font-family="SourceSansPro-Regular, Source Sans Pro">0.999</text><text transform="translate(656.01 106.62)" font-size="18" font-family="SourceSansPro-Regular, Source Sans Pro">1</text><line x1="634" y1="68.53" x2="634" y2="43" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><polygon points="634 77 638.88 65.06 634 67.89 629.12 65.06 634 77"/><line x1="655" y1="68.53" x2="655" y2="19" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><polygon points="655 77 659.88 65.06 655 67.89 650.12 65.06 655 77"/><line x1="532" y1="68.53" x2="532" y2="43" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><polygon points="532 77 536.88 65.06 532 67.89 527.12 65.06 532 77"/></svg>

At the same time, we see the more 9s we list after the decimal point, the closer the numbers are to the number 1. For instance, 0.99 is one-hundredth of a unit away from 1, and 0.999999 is one-millionth of a unit away from 1.

So in fact the numbers 0.9, 0.99, 0.999, … steadily march rightward on the number line eventually entering any amount of space you might specify sitting to the left side of 1. (Want a number within a distance of 1337 from 1?  0.9999 will do!)

So could the quantity 0.9999… be a number sitting just shy of the number 1 and not be 1? Could there be any empty space between it and 1?

No! We just argued that the sequence of 0.9, 0.99, 0.999, … will march into any space we specify to the left of 1! Thus we could conclude

There can be no space between  0.9999… and 1 on the number line, and so 0.9999… must actually be 1.


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

{.reveal(when="d2 x2")} Notice how the dot/anti-dot pair in the canceled each
other out. This is called an [annihilation](gloss:dot-annihilation). The
resulting number is still the same as 0.9999…. Keep going with the remaining
cells.

{.reveal(when="d3 x3 d4 x4")} If we keep doing this forever, it looks like we
are actually showing that 0.9999… is the same as 1.0000…!

---

### An algebraic explanation

If you're still not convinced, let's end with an algebraic explanation. If you
believe that 0.9999… is a valid number (that might or might not be 1), then it
makes sense to assume that it also obeys all the usual rules of arithmetic.

    ol.proof
      li Lets start by giving the number a name, say F for Fredericka:
        .text-center.md `F = 0.9999…`
      li Now multiply it by 10. This gives us
        .text-center.md `10F=9.9999…`
      li Subtract the equation in step 1 from the equation in step 2. Since all their decimal places are equal, they simply cancel out:
        .text-center.md `9F=9`
      li Finally, if we divide by 9, we get
        .text-center.md `F=1`

Amazing! But let me be clear on what we have established here. __IF__ you choose
to believe that 0.9999… is a meaningful quantity in usual mathematics, __THEN__
you must conclude that it equals 1. I say this because this algebraic argument
can lead to philosophical woes, as we’ll see in the next section.



--------------------------------------------------------------------------------



## A Troubling Number our Usual Mathematics Rejects

> section: large

The number 0.9999…  (if you choose to believe it is a one) has infinitely many 9s to the right of the decimal point. What if we consider the “number” with infinitely many 9s to the left of the decimal point instead?

…9999

This is a number that ends with nine. Actually it ends with ninety-nine. Actually it ends with nine-hundred-and-ninety-nine. And so on.

Let’s apply our algebraic argument to see what value it must have.

STEP 1: Give the quantity a name.

We’ll call it A for Allistaire.

A=…9999.

STEP 2: Multiply by ten

We obtain

10A=…99990.

STEP 3: Subtract

We see that A and 10A differ by nine (it is only their final digits that differ). Looking at A−10A we get

−9A=9
giving

A=−1.

That is, our mathematics establishes that

…9999=−1.

Apparently, if we pulled out a calculator and computed the sum 9+90+900+9000+⋯ the calculator will show at the end of time the answer −1!

Do you believe that?

Putting it another way: On a number line, do you believe that the numbers 9, 99, 999, …. are marching closer and closer to the number −1?

![](http://gdaymath.com/wp-content/uploads/2018/03/P1-1.jpg)

Challenge: Let’s make matters worse! Consider the “number” with infinitely many 9s both to the left and to the right of the decimal point: …9999.9999…. Use the same algebraic argument to show that this equals zero. (And this makes sense, because …9999.9999…=…9999+.9999…=−1+1=0.)
 
It is hard to believe that …9999 is a meaningful number and, moreover, it has the value −1, at least in our usual way of think about arithmetic. But remember, all we proved here is that IF we choose to say that …9999 is a meaningful number, then it has value −1.  It is up to us to decide whether or not it is meaningful quantity in the first place. Most people say it is not and stop there and that is fine.

But this begs the question:

Is there an UNUSUAL system of arithmetic for which …9999 is meaningful (for which it has value −1)?


Challenge: One might be able to argue that …9999 does behave like −1 in ordinary arithmetic to some degree. For example, consider performing the (very) long addition shown. Do you see the answer zero results?

 ![](http://gdaymath.com/wp-content/uploads/2018/03/p2-1.jpg)

If you prefer, imagine what happens if you add one dot to this loaded 1←10 machine.

![](http://gdaymath.com/wp-content/uploads/2018/03/p3-1-768x220.jpg)


Challenge: Try this (very) long multiplication problem. Do you see that …66667 is behaving like the fraction 13?

![](http://gdaymath.com/wp-content/uploads/2018/03/p4-1.jpg)

If you prefer, imagine what happens if you triple the count of dots in each of these boxes.

![](http://gdaymath.com/wp-content/uploads/2018/03/p5-1-768x213.jpg)

Extra: What “number” behaves like 23?


--------------------------------------------------------------------------------



## P-adic Numbers

> section: p-adic



If one conducts an internet search on the topic of “p-adic numbers” (here “p” stands for prime) one will see the extent to which mathematicians care about these number systems. As I mentioned before, they seem to provide a powerful tool for analyzing multiplicative properties of numbers in basic number theory: the properties of prime numbers and prime factorizations of numbers. So many basic questions about numbers and basic arithmetic are still unanswered!

 

But perhaps the most surprising application of p-adic numbers I’ve seen is an application to geometry.

---
> id: square

Consider a square. It is possible to subdivide a square into ${2*x}{x|9|1,50,1} triangles of equal area.

    figure: svg.square(width=320 height=320)

It is fun to find ways to divide a square into 6 triangles of equal area, or 14, or 200. But here’s the shocker.

 

It is impossible to divide a square into an odd number of triangles of equal area!

 

This result was proved in 1970 by mathematician Paul Monsky (“On Dividing a Square into Triangles”. The American Mathematical Monthly. 77 (2): 161–164) and he had to use the 2-adic number system to do so!

 

One can avoid 2-adic numbers if one restricts the vertices of the triangles to grid points (as for the diagram above) and my attempt of explaining the proof in this case is here. But I know of no proof of Monsky’s result for the general case without using the 2-adic number system.

 

Mathematics, no matter how abstruse as it might seem, always seems to come up with surprising and unexpected applications.


