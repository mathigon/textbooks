# Complex Numbers

## Introduction

> section: introduction
> sectionStatus: dev
> id: timeline

Despite how “obvious” they might appear today, many discoveries in mathematics took centuries
before they became widely accepted. This is particularly visible when we talk about one of the most
fundamental concepts in mathematics: different types of numbers.

Humans have counted using the [natural numbers](gloss:natural-numbers) for at least 20,000 years.
Mathematicians in ancient Egypt also developed fractions, and students of Pythagoras in ancient
Greece discovered the first [irrational number](gloss:irrational-numbers): `§sqrt(2)`. They were
initially terrified by this discovery, and – according to legend – tried to cover up its existence
because it didn't fit into their pure, perfect model of the world.

    .timeline
      a.timeline-item(style="left: 80px" href="/timeline/ishango"): .timeline-panel
        img(src="images/ishango.jpg")
        p #[strong Natural Numbers]#[br]Prehistory#[br]20,000 BCE
      a.timeline-item(style="left: 230px" href="/timeline/rhind"): .timeline-panel
        img(src="images/egypt.jpg")
        p #[strong Fractions]#[br]Ancient Egypt#[br]2000 BCE
      a.timeline-item(style="left: 380px" href="/timeline/elements"): .timeline-panel
        img(src="images/greece.jpg")
        p #[strong Irrational Numbers]#[br]Ancient Greece#[br]400 BCE
      a.timeline-item(style="left: 530px" href="/timeline/bamboo-strips"): .timeline-panel
        img(src="images/china.jpg")
        p #[strong Negative Numbers]#[br]China#[br]100 BCE
      a.timeline-item(style="left: 680px" href="/timeline/kmer"): .timeline-panel
        img(src="images/khmer.jpg")
        p #[strong Zero]#[br]Khmer#[br]700 CE

Negative numbers and zero proved even harder. In ancient Greece, numbers were defined geometrically.
Numbers that couldn’t be directly measured or represented by lines, curves, or shapes were not even
considered. Over the next 1000 years, different Asian and Arabic civilisations developed number
systems that included zero and negatives, but even in the 16th century, some European mathematicians
called equations with negative solutions “false” or “absurd.”
[Continue](btn:next)

---
> id: cardano

::: column.grow

It was around this time that the Italian mathematician [Girolamo Cardano](bio:cardano) was writing
an important treatise about mathematics, his _Ars magna_. Here is one of the problems he
was trying to solve:

{.quote} “Split 10 into two parts, such that their product is 40.”

Today, we might instead try to _“find two numbers whose sum is 10 and whose product is 40”_. Can you
think of two numbers that satisfy these conditions?

    x-free-text(placeholder="Your answer…") X

::: column(width=240)

    // https://www.maa.org/press/periodicals/convergence/mathematical-treasure-cardanos-ars-magna
    x-img(src="images/cardano.jpg" width=240 height=356)

{.caption} Title page of Cardano’s _Ars Magna_, published in 1545

:::

---

There don’t seem to be any obvious solutions, but Algebra had been invented just a few centuries
before Cardano was born. Let’s try to write the problem as an equation:

::: x-algebra-flow

`x + y = 10 x * y = 40`

* Let the two numbers be _x_ and _y_. From the information in the problem, we can write two equations.
* We can rearrange equation 1 to isolate _x_ on the left-hand side.
* {.new-row} Now we can substitute this value of _x_ into the second equation.
* {.new-row} If we expand the brackets, we get a quadratic equation.

:::

---

At this stage, most mathematicians would have stopped, because you [[can’t take square roots of
negative numbers | always need to have two results | need to solve the equation for _x_, not _y_]].

{.todo} More about this, parabolae etc.

---

Of course, 

Basic and established rules about numbers made solving this equation seem impossible. But this difficulty was not limited to this one problem. The issue of taking the square root of a negative number popped up everywhere for Cardano and his contemporaries. It appeared in the complicated cubic and quartic equations they were studying, but also in simple quadratic equations like x2+1=0.



What made Cardano special is that, instead of stopping and giving up, he took a different approach. He was the first to say: Maybe this only seems impossible. Maybe we don’t think we have the numbers to solve this problem, but we actually do. In other words, Cardano proceeded to solve the problem as if -15 existed, despite all evidence to the contrary. His solution, updated only to use modern notation, is shown below:

---

* Justify that x² = –1 has no real solutions by using a graph of y = x². 
* Comprehend that the symbol i means the positive square root of -1 and that an
  imaginary number is a real number times i.
* Understand and use the terms ‘real part’ and ‘imaginary part.
* Geometrical representation of complex numbers in the Argand diagram.

---

## Complex Arithmetic

> section: arithmetic
> sectionStatus: dev

* Represent solutions to equations using i and the complex plane.
* Visualise why the sum of two complex numbers is another complex number.
* Sums, differences, products and quotients of complex numbers
* Geometrical representation of sums, products and quotients of complex numbers.
* Justify that two equivalent expressions involving complex numbers are
  equivalent, using the fact that i^2 = –1.
* Determine powers of imaginary numbers and represent them on the complex plane.
* Generalize patterns in repeated reasoning to show what happens when i is
  raised to different powers.
* Determine what information is needed to find the complex numbers that were
  multiplied to get a certain result, and ask questions to elicit that information.
* Convert between the Cartesian form and the modulus-argument form.
* Multiply and divide complex numbers in modulus-­argument form.
* Construct and interpret simple loci such as |z – a| > r and arg (z – a) = θ.
* Loci and regions in the Argand diagram

---

## Euler’s Identity

> section: euler
> sectionStatus: dev

* Know and use e^(iθ) = cos(θ) + i sin(θ) and the form z = re^(iθ).
* Use De Moivre’s theorem to find multiple angle formulae and sums of series
* De Moivre’s theorem and its application to trigonometric identities and to roots of a complex number.

---
> id: euler-approx

Here is a geopad with axes and coordinate system

    figure
      p.md x = ${round(x,2)} and m = ${m+1}
      x-geopad(width=400 height=400 x-axis="-2,2,1" y-axis="-2,2,1" axes grid padding=5 label-suffix=",i" axis-names="Real, Imaginary"): svg
        circle.blue(hidden x="point(1, x/(m+1))" name="p0")
        path.blue(x="segment(point(0,0),p0)")
        path.blue(x=`segment(point(1,0),p0)`)
        for i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
          circle.blue(hidden x=`m > ${i} ? complexPower(p0,${i+1}): q` name=`p${i}`)
          path.blue(x=`segment(point(0,0),p${i})`)
          path.blue(x=`segment(p${i-1},p${i})`)
        circle.red(x=`complexPower(p0,m)` name=`pm`)
        path.red(x=`segment(point(0,0),pm)`)
            
      x-slider(:bind="x" steps=5 continuous)
      x-slider(:bind="m" steps=29)

---

## Quadratic, Cubic and Quartic Equations

> section: polynomials
> sectionStatus: dev

* Know that non-­real roots of polynomial equations with real coefficients occur
  in conjugate pairs.
* Calculate complex solutions to quadratic equations by completing the square.
* Compare and contrast quadratic equations with real and with non-real complex
  solutions. 
* Justify that a quadratic equation will have either real or non-real solutions
  using graphical reasoning.
* Solve any quadratic equation with real coefficients.
* Solve cubic or quartic equations with real coefficients (given sufficient
  information to deduce at least one root for cubics or at least one complex
  root or quadratic factor for quartics).

---

## De Moivre’s Theorem and Roots of Unity

> section: de-moivre
> sectionStatus: dev

* Find the n distinct nth roots of re^(iθ)
* Know that they form the vertices of a regular n-­gon in the Argand diagram.
* Use complex roots of unity to solve geometric problems

---
> id: demo

Here is a geopad with axes and coordinate system

    figure
      x-geopad(width=600 height=400 x-axis="-6,6,1" y-axis="-4,4,1" axes grid padding=5): svg
        circle.move.green(name="p" cx=2 cy=2)
        path.green(x="segment(point(0,0),p)")
        circle.red(x="complexRoot(p,3,0)" name="r0")
        circle.red(x="complexRoot(p,3,1)" name="r1")
        circle.red(x="complexRoot(p,3,2)" name="r2")
        path.red(x="polygon(r0,r1,r2)")
