# Complex Numbers

## Introduction

> section: introduction
> sectionStatus: dev

Throughout our journey through mathematics, we had to extend our number system
to solve increasingly complex problems. We started with just the integers 1, 2,
3, 4, … When we wanted to solve questions like `5 – 6`, we had to add negative
numbers. When we wanted to solve questions like `3 ÷ 4`, we had to add
fractions. And when we wanted to solve equations like `x^2 = 2`, we had to add
[irrational numbers](gloss:irrational-numbers). In this chapter, we will once
again increase the size of our number system.

---

{.fixme} Show how multiplication can be thought of as stretching. Show a few
points on a numberline, and then have a slider to multiply them by numbers from
0 to 1. Maybe similar to this: https://mathigon.org/numberline.

{.fixme} If x^2 = 4, it means we have to stretch 1 twice by a factor of x, to
get 4, and that works if x = 2.

{.fixme} Multiplying by a negative number also reflects across 0.

---

{.fixme} This doesn’t seem to work if x^2 = -1 . Instead, we can extend the
numberline to a plane, and rotate twice by 90°. Have another animation where the
2d numberline transforms into a plane:

{.fixme} Plane animation

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

---

## Modulus and Argument

> section: modulus-argument
> sectionStatus: dev

* Convert between the Cartesian form and the modulus-argument form.
* Multiply and divide complex numbers in modulus-­argument form.
* Construct and interpret simple loci such as |z – a| > r and arg (z – a) = θ.
* Loci and regions in the Argand diagram

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

## Euler’s Identity and De Moivre’s Theorem

> section: euler-identity
> sectionStatus: dev

* Know and use e^(iθ) = cos(θ) + i sin(θ) and the form z = re^(iθ).
* Use De Moivre’s theorem to find multiple angle formulae and sums of series
* De Moivre’s theorem and its application to trigonometric identities and to roots of a complex number.

---

## Complex Roots of Unity

> section: roots-of-unity
> sectionStatus: dev

* Find the n distinct nth roots of re^(iθ)
* Know that they form the vertices of a regular n-­gon in the Argand diagram.
* Use complex roots of unity to solve geometric problems
