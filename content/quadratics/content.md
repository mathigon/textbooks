# Quadratic Equations

## Introduction

    img.text-wrap(src="images/skater-1.jpg", style="shape-outside: url(images/skater-1-mask.png)", width=300, height=393)

Welcome to SkateSum, a small company that produces skateboards. Engineers have
been working on a brand new model, the _SquareBoard_, which is finally ready to
start production. However building the skateboards is not cheap:

* The tools and machines required to construct skateboards cost $2,000.
* Every skateboard costs additional $60 worth of of wood and other materials,
  as well as the salary for employees.

The new skateboards are highly anticipated, but if the price is too high, fewer
people will actually buy one. We can show this relationship on a simple chart
with the cost of a skateboard on the _x_-axis, and the corresponding number of
people who will buy one (the _demand_) on the _y_-axis.

{.todo} Multiple choice interactive  
Pick the chart that you think makes most sense:  
Exactly! Higher cost means lower demand, so the graph of the function moves downwards.

Economists did some market research and came up with the following equation that
relates the _{.b.orange}price_ of skateboards to the _{.b.purple}demand_:

{.text-center} _{.b.purple}demand_ = 5000 – 30 × _{.b.orange}price_

For example, if the skateboard costs $100, the demand will be [[2000]] units. This
is called a __linear equation__, because its graph is just a straight line.

The company wants to maximise its _{.b.yellow}profit_, which is the
_{.b.green}revenue_ they make from selling skateboards, minus the _{.b.red}cost_
which they have to spend to produce them. We can come up with equations for all
of these values.

The _{.b.green}revenue_ is the income they receive from selling skateboards:
the number of units sold (the _{.b.purple}[[demand|profit|cost]]_) times the
_{.b.orange}price_ of each:

{.text-center.subsection(blank-1)}
_{.b.green}revenue_ = _{.b.purple}demand_ × _{.b.orange}price_

---
> id: s1

The _{.b.red}cost_ is $2000 for buying tools and machines plus the $60 for every
skateboard they produce – and ideally this number should be equal to the demand:

{.text-center} _{.b.red}cost_ = 2000 + 60 × _{.b.purple}demand_

Finally, the profit is the difference between _{.b.green}revenue_ and
_{.b.red}cost_. We can substitute the expressions above, and express total
_{.b.yellow}profit_ just in terms of the _{.b.orange}price_ of every skateboard:

    x-equation-system
      table
        tr
          td #[em.b.yellow profit]
          td= '='
          td #[em.b.green revenue] – #[em.b.red cost]
        tr
          td
          td= '='
          td: x-equation.var(vars="profit revenue cost demand price", fns="+ - * ^")

{.subsection(equation-1)} Notice that this equation contains _{.b.orange}price_
as well as _{.b.orange}price_^2^. Therefore it is called a
__Quadratic Equation__.

---
> id: s2

Now we want to find the value of _price_{.b.orange} that produces the largest
profit. Let's start by creating a graph that shows the _{.b.yellow}profit_ (on
the _y_-axis) for a range of possible different _{.b.orange}prices_ (on the
_x_-axis):

    x-coordinate-system(x="-20 180 20" x-label="price" y="-100 100 20" y-label="profit" y-suffix="k" fn="-0.03 * x^2 + 6.8 * x - 302" regions="-20,0;60,-100|120,80;180,-20" crosshairs)

If the [price is 0](->#s2 .r1), the “profit” is negative, because we’re
just giving away expensive skateboards for free. As the price increases, our
profit rises, too. However, if the skateboards become [too expensive](->#s2 .r2),
people no longer want to buy them and the profit falls again. SkateSum can
maximise its profit by pricing the skateboards at approximately $[[110]].

---
> id: s3

## Quadratic Equations

Quadratic equations are of the form
  
{.text-center} `ax^2 + bx + c = 0`,

where `x` is a __variable__ and `a`, `b` and `c` can be any numbers (including
negative ones), called __coefficients__. Both `b` and `c` could be 0, but
`a` can’t be 0 because then we would just have [[a linear equation|zero|no solution]].

The graph of a quadratic equation always has a “curved” shape like the
one we saw before. This shape is called a __Parabola__. The simplest quadratic
function is `y = x^2`. If we plot this on a diagram, we get a simple, upward
pointing parabola:

    x-coordinate-system.var(x="-5 5 1" y="-3 5 1" fn="${a}*x^2+(${b})*x+(${c})" points="${zeros(a,b,c)}")

Now try changing the values of _a_, _b_ and _c_ in the quadratic equation and
see how the parabola changes:

{.text-center} `y =`${a}{a|1|-4,4,0.1} `x^2+`${b}{b|0|-4,4,0.1} `x+`${c}{c|0|-4,4,0.1}

{.subsection(var-1 var-2 var-3)}
To solve a quadratic equation, we have to find the points where _y_ = 0. These
are the points where the graph of the parabola [[crosses the x-axis|crosses the y-axis|turns around]].
While linear equations always have exactly one solution, we can see from the
diagram that quadratic equations can sometimes have and _{span.action}no solution_,
_{span.action}one solution_, or even _{span.action}two solutions_.

---

The different possible number of solutions has to do with the properties of squares:

* For every value of `x^2`, there are [[two|three|one]] possible values of `x`: a positive and a negative one.
  For example, if `x^2=`${x*x}{x|4|2,10,1}, we don't know if `x=`${x} or `x=`${'–'+x}. In this case,
  the quadratic equation has __two solutions__. As an abbreviation, we sometimes write `x = +-`${x} (“_x_ equals plus-minus ${x}”).

* {.subsection(blank-0)} Square numbers are always positive. This means that
there [[is no number|are multiple numbers]] `x` that could satisfy `x^2 = -9`.
This equation has __no solutions__.

{.subsection(blank-1)}
In the following sections we will learn a few different ways to solve quadratic
equations and interpret their graphs.

    figure: x-media(src="images/skater-2.jpg" width=400 height=352)

---

## Taking Square Roots

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

{.eqn-system}
| `3` | `x^2` | `-11` | `=` | `7`           | {.eqn-comment} add 11 to both sides |
| `3` | `x^2` |       | `=` | `18`          | {.eqn-comment} divide both sides by 3 |
|     | `x^2` |       | `=` | `6`           | {.eqn-comment} take square roots of both sides |
|     | `x`   |       | `=` | `+-sqrt(6)` |
|     |       |       | `=` | `+-2.45`     |

{.todo} Something about exactness and how to express solutions

---

## Factorising

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

---

## Completing the Square

In some cases, factorising doesn't work – sometimes there simply aren't numbers
`p` and `q`. In these cases, there is a different way to solve quadratic
equations: it is more work, but it is guaranteed to work.

The basic idea is to use the binomial expansion

{.text-center} `(x+m)^2 = x^2 + 2mx + m^2`

Let's look at an example. The following quadratic equation can't be easily
solved using factoring:

{.text-center} `x^2 + 8x - 12 = 0`

However, we can try making it look at bit more like the binomial expansion. The
`x^2` term already matches. The `8x` term is `2mx` when `m=4`. Unfortunately
the last term doesn't match: we'd want `m^2=4^2 = 16` but we have –12. However,
we can just subtract the difference:

{.text-center} `x^2 + 2×4×x + 4^2 - 4^2 - 12 = 0`

The `+4^2` and `-4^2` simply cancel each other out, so we are not actually
changing the equation. However, the first part now exactly matches the binomial
expansion, so we can factor it:

{.text-center} `(x+4)^2 - 4^2 - 12 = 0`

Now we can simplify the equation and take square roots, almost like above:

{.eqn-system}
| `(x+4)^2` | `-28` | `=` | `0`             |
| `(x+4)^2` |       | `=` | `28`            | {.eqn-comment} remember the ± when taking square roots! |
| `x + 4`   |       | `=` | `+-sqrt(28)`    |
|           | `x`   | `=` | `+-sqrt(6) - 4` |

---

## The Quadratic Formula

Completing the square can be tricky, and it is easy to make mistakes along the
way.

{.todo} Let's follow the steps when completing the square, but use _a_, _b_ and _c_
as coefficients for the quadratic equation, rather than actual numbers:


Completing the square is long and complicated, and it is easy to make mistakes.
Luckily, there is a shortcut that makes it a lot simpler!

To find it, we need to repeat the process of completing the square, but leaving the coefficients
as _a_, _b_ and _c_ rather than actual numbers. We'll 

{.eqn-system}
| `ax^2 + bx +` |   | `c` | `= 0` |
| `ax^2 + bx + (b^2)/(4a) - ` | `(b^2)/(4a) +` | `c` | `= 0` |
| `a ( x^2 + b/a x + (b/(2a))^2) - ` | `(b^2)/(4a) +` | `c` | `= 0` |
| `a ( x + b/(2a) )^2 - ` | `(b^2)/(4a) +` | `c` | `= 0` |
| `a ( x + b/(2a) )^2 ` |   |   | `= (b^2)/(4a) - c` |
| `a ( x + b/(2a) )^2 ` |   |   | `= (b^2 - 4ac)/(4a)` |
| `( x + b/(2a) )^2 ` |   |   | `= (b^2 - 4ac)/(4a^2)` |
| `x + b/(2a) ` |   |   | `= +- sqrt((b^2 - 4ac)/(4a^2))` |

| `x + b/(2a) ` |   |   | `= +- sqrt(b^2 - 4ac)/(2a)` |
| `x ` |   |   | `= - b/(2a) +- sqrt(b^2 - 4ac)/(2a)` |
| `x ` |   |   | `= (-b +- sqrt(b^2 - 4ac))/(2a)` |

These steps were ugly, painful, and you don't need to remember them (even
though it was just the same as completing the square, just with variables).
The result, however, was worth it: a single equation that tells us the
solutions of _any_ quadratic equation. It is often called the __Quadratic Formula__:

{.text-center#qformula} `x = (-b +- sqrt(b^2 - 4ac))/(2a)`

To solve a quadratic equation, we just have to replace _a_, _b_ and _c_ with
the actual numbers in our case, and then simplify the fraction.

One particularly important part of the quadratic equation is
the [term under the square root](->#qformula msqrt), which is often called
the __discriminant__. Depending on the value of `b^2-4ac`, you can tell a lot
about the solutions of a quadratic equation, without ever actually soling it.

* If `b^2-4ac<0`, the quadratic equation has _no solutions_, because we cannot
  take square roots of negative numbers.
* If `b^2-4ac=0`, the quadratic equation has _one solution_, because `+sqrt(0)`
  and `-sqrt(0)` are the same.
* If `b^2-4ac>0`, the quadratic equation has _two solutions_ like before, one
  when evaluating the quadratic formula with +, and one when evaluating it
  with –.

{.todo} Exercises

---

## Solving Quadratic Equations – Summary

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

---

## Transformations of Quadratic Functions

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

Shape - we can see that the quadratic will be concave down because $a=-2$a=−2 which is < $0$0

Vertex - we can see that the quadratic will have turning point at $\left(3,-3\right)$(3,−3).  

With just these two pieces of information we can roughly sketch the curve.

But many parabolas are concave down and have a vertex at $\left(3,-3\right)$(3,−3). To be able to graph the parabola more accurately with the correct amount of steepness, we need another piece of information. We need another point on the graph. 

A common point to use would be the $y$y intercept.  

Remember
$x$x intercept occurs where the value of $y$y is $0$0
$y$y intercept occurs where the value of $x$x is $0$0

Now we can sketch the curve.

Using vertex $\left(3,-3\right)$(3,−3), the concave down shape and a $y$y intercept of $-21$−21 :

As a hand drawn sketch, this shows all the information we need to sketch the quadratic.  




---

## Features of Quadratic Functions

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

    .box.problem-box
      .box-title: h3 Finding maxima and minima of quadratic functions
      .box-body
        p.todo Exercises under development…

---

## Projectile Motion

Having used quadratic equations to create the optimal business plan for our
Skateboard company, and to design the largest possible skate park, now lets
actually XXX.

When practicing jumps and tricks, it is important to understand how gravity

{.todo} skateboarding image

Let’s start with a simple example: a ball is thrown straight up into the air,
with an initial speed of 50m/s. Using the laws of physics, we can predict the
motion of the ball, and the time it will take for the ball to fall back on the
ground.

Once in the air, gravity pulls the ball back towards the ground. This force
causes the ball’s speed to change by a fixed amount every second: approximately
-10m/s[{sup}2]. We use a negative value, because gravity acts downwards. Since
we know the initial speed of the ball, we can easily calculate the speed after
every subsequent second.

Speed, on the other hand, is the rate of change of position. The ball started
at a height 0 when we threw it, and we can calculate its height after every
subsequent second by adding the speed at that time.

    p.todo.
      time             0    1s    2s    3s    4s    5s    6s    7s    8s    9s
      acceleration   -10   -10   -10   -10   -10   -10   -10   -10   -10   -10
      speed           50    40    30    20    10     0   -10   -20   -30   -40
      position         0    50    90   120   140   150   150   140   120    90

Notice how the height of the ball increases quickly, then slows down, and then
decreases, as it falls back towards the ground. Let’s visualise this motion in
a diagram:

    p.todo diagram

This shape looks just like a parabola. If we ignore things like air resistance,
then all objects we throw into the air follow a parabolic path: including
basketballs, jets of water, or even rockets.

    p.todo example images

---

## More Applications

Quadratic functions are used widely in science, business and engineering to model physical phenomena and how quantities change over time.  The physical parabolic shape of a quadratic can describe the movement of water in a fountain, the movement of a ball (and in fact any object thrown into the air), or the shape of satellite dishes.  

In avalanche control, triggers are often fired onto a mountain face from an adjacent face to create an avalanche. What height does the trigger reach and where does it land? A quadratic can model this perfectly.

Maximum and minimum values of quadratics are used in the study of moving objects and in acceleration and volume problems.  Business models also include quadratic functions and are used to help forecast profit and loss.  

Many equations in physics or economics contain multiplication, and these
multiplications often lead to squares. That’s why it should come at no surprise
that our world is full of quadratic equations and parabolas. Here are a few
more examples:

### Mirrors and Telescopes

In a parabolic mirror, incoming light rays are all reflected onto a single point
in the center. This curious property can be used when building radio telescopes,
where the receiver is placed in the focus, or thermal solar power plants, which
focus the suns' rays onto a single point to create a lot of heat.

The actual shape of this telescope is called a Paraboloid – it is basically a
3-dimensional version of a parabola.

Even the TV dishes at your home have a paraboloid shape. They focus the incoming
radio waves onto the small receiver in its center.

### Bridges

In many suspension bridges the main suspension cables form a parabola. One
famous example is the Golden Gate Bridge in San Francisco:

Suspension bridges can span especially long distances, and are relatively
economical to build.

The suspension cables carry the huge weight of the deck of the bridge, as well
as all the traffic travelling across it. This causes large tension and
compression forces, and the parabola is the best shape to balance these forces
equally.

### Conic Sections

The parabola is one of four different shapes that can be created by cutting a
slice through a cone:

These four shapes, called conic sections, have many properties in common, even
though the look very different. The circle and ellipse, for example, are closed,
which the parabola and hyperbola are open and infinite.

Quadratic equations are hidden everywhere in our world. Can you think of any
other examples?


    // Solve fractional equations that result in quadratics
    // quadratic substitutions
    // quadratic inequalities
    // absolute value equations
    // systems of quadratic equations
