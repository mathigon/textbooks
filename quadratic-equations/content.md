# Quadratic Equations

(c) 2017 Mathigon

---

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
with the cost of a skateboard on the x-axis, and the corresponding number of
people who will buy one on the y-axis.

Pick the chart that you think makes most sense:

{.todo} Multiple choice interactive

{.todo} Higher cost means lower demand, so the graph of the function moves downwards.

---{#s1}

Economists did some market research and came up with the following equation that
relates the price of skateboards to the demand:

{.text-center} _{.b.purple}demand_ = 5000 – 30 × _{.b.orange}price_

For example, if the skateboard costs $100, the demand will be <2000> units. This
is called a __linear equation__, because its graph is just a straight line.

The company wants to maximise its _{.b.yellow}profit_, which is the
_{.b.green}revenue_ they make from selling skateboards, minus the _{.b.red}cost_
which they have to spend to produce them. We can come up with equations for all
of these values.

The revenue is the number of units sold (the demand) times the price of each:

{.text-center} _{.b.green}revenue_ = _{.b.purple}demand_ × _{.b.orange}price_

The cost is $2000 for buying tools and machines plus the $60 for every
skateboard they produce – and ideally this number should be equal to the demand:

{.text-center} _{.b.red}cost_ = 2000 + 60 × _{.b.purple}demand_

Finally, the profit is the difference between those two values. We can
substitute the variables we have previously determined, and express total
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

Notice that this equation contains _price_ as well as _price_[{sup}2]. Therefore
it is called a __Quadratic Equation__.

---

We want to find the value of price that produces the largest profit. We can
start by creating a graph that shows the profit (on the _y_-axis) for a range of
possible different prices (on the _x_-axis):

  x-coordinate-system(x="-20 180 20" x-label="price" y="-100 100 20" y-label="profit" y-suffix="k" fn="-0.03 * x^2 + 6.8 * x - 302")

If the price is 0, the “profit” is negative, because we’re just giving away
expensive skateboards. As the price increases, our profit rises. However, if
the skateboards become too expensive, people no longer want to buy them and the
profit falls again. SkateSum can maximise its profit by pricing the skateboards
at approximately $<110>.

---

## Quadratic Equations

Quadratic equations are of the form
  
{.text-center} `ax^2 + bx + c = 0`,
  
where `x` is a variable and `a`, `b` and `c` can be any numbers (including
negative ones). Both `b` and `c` could be 0, but `a` can’t be 0 because then we
would just have a linear equation.

{.todo} The variables, or pronumeral, are the letters or unknowns in an expression or equation.
The coefficient is the number (whole, rational, irrational, real) in front of a variable.

The graph of a quadratic equation always has a “curved” shape like the
one we saw before. This shape is called a __Parabola__.

The simplest quadratic function is `y = x^2`. If we plot this on a
diagram, we get a simple, upward pointing parabola.

  x-coordinate-system.var(x="-5 5 1" y="-3 5 1" fn="${a}*x^2+(${b})*x+(${c})")

Now try changing the values of _a_, _b_ and _c_ in the quadratic equation and
see how the parabola changes:

{.text-center} _y_ = ${a}{a|1|-4,4,0.1} _x_ 2 + ${b}{b|0|-4,4,0.1} _x_ +
${c}{c|0|-4,4,0.1}

To solve a quadratic equation, we have to find the points where _y_ = 0. These
are the points where the graph of the parabola crosses the _x_-axis.

{.todo} While linear equations always have exactly one solution, we can see from the
diagram that quadratic equations can sometimes have no solution, or even two
solutions.

This interesting fact has to do with the properties of squares:

* For every value of `x^2`, there are <two|three|one> possible values of `x` – a positive and a negative one.
  For example, this means that if `x^2=`${x*x}{x|4|2,10,1}, we don't know if `x=`${x} or `x=`${-x}. In this case,
  the quadratic equation has __two solutions__. As an abbreviation, we sometimes write `x=\pm`${x} ("x equals plus-minus ${x}").

* Square numbers are always positive. This means that there is no number `x` that could satisfy `x^2 = -9`. This equation has __no solutions__.

In the following sections we will learn a few different ways to solve quadratic
equations and interpret their graphs.

  .img-block
    x-media(src="images/skater-2.jpg", width="400", height="352", credit="© Depositphotos")

---

## Taking Square Roots

{.todo} When trying to solve equations, we often use _opposites_ of mathematical
operators. For example, addition and subtraction are opposites, and
multiplication and division are opposites. The opposite of taking squares are

{.todo}
The opposite of squaring a number is taking the square root. For example,
5^2 = 25, so /25 = 5.

For slightly more complex quadratic equations, we first need to isolate `x^2` on
one side of the equation before taking square roots:

{.eqn-system}
| `3` | `x^2` | `-11` | `=` | `7`           | {.eqn-comment} add 11 to both sides |
| `3` | `x^2` |       | `=` | `18`          | {.eqn-comment} divide both sides by 3 |
|     | `x^2` |       | `=` | `6`           | {.eqn-comment} take square roots of both sides |
|     | `x`   |       | `=` | `\pm\sqrt{6}` |
|     |       |       | `=` | `\pm2.45`     |

Here are some more examples for you to try:

{.todo} Exercises under development

---

## Factorising

We've looked at lots of different ways to factorise quadratic equations, where we find the highest common factor between algebraic terms.

Once we can factorise, we can solve equations algebraically to find the unknown value. To do this, we generally look for the values where $x=0$x=0. There is a great benefit to factorising quadratics in order to solve them, in order to understand why, we need to think about ZERO.

The property of $0$0 is very special.  The ONLY way two things that are being multiplied can have the answer of $0$0, is if one, or both of those things are $0$0 themselves.  

So if I have $2$2 factors, like $a$a and $b$b , and I multiply them together and they equal $0$0. Then one of those factors $a$a or $b$b MUST be $0$0.  A written solution to a question like this would be similar to the following, 

If $a\times b=0$a×b=0 then $a=0$a=0   or  $b=0$b=0



THE PROCESS

Move all terms over to one side of the equation so one side equals $0$0.
Factorise the terms.
Solve for when $x=0$x=0.
Let's look at this process with some examples.

If $6x=0$6x=0, the solution would be $x=0$x=0 because $6\times0=0$6×0=0.

If $x\left(x+4\right)=0$x(x+4)=0, there are two possible solution because either $x=0$x=0 or $x+4=0$x+4=0. So the solutions to this equation are $x=0$x=0 or $-4$−4.





All equations in the previous section has something in common: they contained an
x^2, but no x (without square). If an equation contains both, solving it is much
harder:

  p x^2 - 4x + 3 = 0
  p x^2 = 4x - 3
  p x = +- sqrt(4x - 3)

But this doesn't help us much - there is no way to simplify the

Let's start by revising how to simplify terms with brackets. For example
x(2x + 3) = 2x^2 + 3x

The trick is simply to add up all possible pairs of numbers, while taking care
to respect all minus signs:
ARROW IMAGE

Try to expand this product and simplify the answer:
(x + 5)(x - 2)

This answer looks like part of a quadratic equation, and we can revert our work
to solve quadratic equations:
  
  p x^2 + 3x - 10 = 0
  p is the same as
  p (x + 5)(x - 2)

Now comes the clever part: if the product of two numbers is 0, then at least one
of these numbers has to be 0. If both are non-zero, then the product is also
always non-zero. This means that either  or .

And thus possible solutions of the quadratic equation are

It is interesting to observe that quadratic equations, unlike linear equations,
can have multiple solutions. You have to find them all to fully solve the
equation. Here is a summary of what we've done:

  p Start with a quadratic equation like .
  p Find a way to write the equation as a product of two terms: .
  p The product is 0, so one of the two factors has to be zero:  or .
  p These are now both linear equations which we can solve: x = –5 or x = 2.
  p And now it is your turn…

The difficult part when factorising these quadratic equations is finding two
numbers that work. However there is a simple pattern:

This means that if we have a quadratic equation  then we have to find two
numbers  and  so that  and .

For example, in our original example we had . We can see that  and .

Finding A and B can take some guesswork, but with a bit of practice it becomes
quite easy. Try factorising this examples:

Other quadratic equations contain both  and , but no constant term:

These are particularly easy to solve – we can just factorise  on its own:

What are the two solutions of the equation above?

---

{.todo} Find solutions to, $\left(x-6\right)\left(x-2\right)=0$(x−6)(x−2)=0 The property of $0$0 is very special.  The ONLY way two things that are being multiplied can have the answer of $0$0, is if one, or both of those things are $0$0 themselves. So if I have $2$2 factors, like $\left(x-6\right)$(x−6) and $\left(x-2\right)$(x−2) above, and I multiply them together and they equal $0$0. Then one of those factors $\left(x-6\right)$(x−6) or $\left(x-2\right)$(x−2) MUST be $0$0.  A written solution to a question like this would be similar to the following, 

{.todo} The property of $0$0 is very special.  The ONLY way two things that are being multiplied can have the answer of $0$0, is if one, or both of those things are $0$0 themselves. So if I have $2$2 factors, like $a$a and $b$b , and I multiply them together and they equal $0$0. Then one of those factors $a$a or $b$b MUST be $0$0.  A written solution to a question like this would be similar to the following, If $a\times b=0$a×b=0 then $a=0$a=0   or  $b=0$b=0


Here is a simple term containing the product of two sums. To simplify it, we
have to match up all possible terms and add them up:

{.text-center} `(x+5)*(2x-1) = x*2x + 5*2x - x*1 - 5*1`

The result

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
| `(x+4)^2` | `-28` | `=` | `0`            |
| `(x+4)^2` |       | `=` | `28`           | {.eqn-comment} remember the ± when taking square roots! |
| `x + 4`   |       | `=` | `\pm\sqrt{28}` |
|           | `x`   | `=` | `\pm\sqrt{6} - 4` |

---

## The Quadratic Formula

Completing the square is long and complicated, and it is easy to make mistakes.
Luckily, there is a shortcut that makes it a lot simpler!

To find it, we need to repeat the process of completing the square, but leaving the coefficients
as _a_, _b_ and _c_ rather than actual numbers. We'll 


{.todo} The quadratic formula might seem quite complex when you first come across it, but it can be broken down into smaller parts.
The ± allows for the possibility of two solutions
The $b^2-4ac$b2−4ac under the square root sign is important as it will tell us how many solutions there are. This is known as the discriminant.
The quadratic formula will come into use very often and so it is something you will need to remember.  Lots of people have different ways to remember it. One of them is in the quadratic formula song!

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
  


What We Already Know
As we have seen with quadratic functions there can be 2, 1 or no real solutions.

If we think about the graphs of quadratics, this means that there can be 2, 1 or no x-intercepts. As the solutions to a function are the places where the function crosses the x-axis, the x-intercepts.

When we talk about solutions to quadratics, you will learn later of a condition of polynomials that says for a polynomial of degree n, there will be n roots. This means for quadratics we should always be expecting 2 solutions. How is it that we can have 1 and 0 solutions?

Well,  the 1 solution is actually a representation of 2 equal roots, (sneaky, but still 2 roots).

And the 0, well that would launch us into the world of complex numbers, because if there are no real solutions, such as if the roots were plus/minus $\sqrt{-3}$√−3 then this actually means 0 real solutions but that we would have 2 complex roots.  

Suffice to say, that's a lot of maths you don't really need right now but you do need to understand that for

2 real solutions, these are the 2 roots (the two $x$x-intercepts, where the quadratic passes through each point)
1 real solution, provides the location of 2 equal roots, (the one $x$x-intercept where the quadratic just touches it at the turning point)
0 real solutions, means there are no x-intercepts or real roots.  But there do exist 2 complex roots that you will learn to find out in later studies of mathematics.  
Finding the number of solutions
Finding the number of solutions to a quadratic, or usually if there are solutions at all can be done without having to work through all the algebra required to solve the function. 

Lets look again at the quadratic formula



Specifically lets look at what happens if the square root part ($\sqrt{b^2-4ac}$√b2−4ac) takes on different values. 



If $b^2-4ac=0$b2−4ac=0, then the square root is 0, and then the quadratic equation becomes just $x=\frac{-b}{2a}$x=
−b
2a​.  One single root

If $b^2-4ac>0$b2−4ac>0, then the square root will have two values, one for $+$+$\sqrt{b^2-4ac}$√b2−4ac and one for $-\sqrt{b^2-4ac}$−√b2−4ac.  The quadratic formula will then generate for us 2 distinct real roots.

If  $b^2-4ac<0$b2−4ac<0, then the square root is negative.  And we know that we cannot take the square root of a negative number and get real solutions.  This is the case where we have 0 real roots.

This component of the quadratic formula, ($b^2-4ac$b2−4ac) is called the discriminant, (also known as the  determinant),  determines the number of real solutions a quadratic function will have.

Discriminant of a Quadratic
$b^2-4ac=0$b2−4ac=0, 1 real solution, 2 equal roots, the quadratic touches the axis (looks like it bounced off)

$b^2-4ac>0$b2−4ac>0, 2 real solutions, 2 distinct roots, the quadratic passes through each of the points on the axis

$b^2-4ac<0$b2−4ac<0, 0 real solutions, 2 complex roots, the quadratic has no x-intercepts.  

Here are some worked example questions.




The quadratic formula states that x = \frac{}{}///

The part of this formula under the square root sign is called the discriminant.
The discriminant in a quadratic equation tells us important information about
the nature of the roots/solutions in this equation.

The discriminant is found using the following formula:
$\Delta=b^2-4ac$Δ=b2−4ac

Positive discriminant that's a perfect square
Positive definite: two real rational solutions

Positive discriminant that's not a perfect square
Positive indefinite: two real irrational solutions

Discriminant is 0	One real solution (may be rational or irrational)
Negative discriminant	Indefinite: no real solutions (two imaginary solutions)




---

## Geometric interpretation

Let’s now design a small skate park, to try out our new SquareBoads. We’ve got
50m of fence, as well as two existing walls we can use to enclose the area –
and of course we want to make it as large as possible.

{.todo} interactive diagram

  // x-coordinate-sketch(validate="quadratic:2,-4,1")

If we call the horizontal part of the fence _x_, then the vertical part has
length [{x-equation.var(vars="x", fns="+ -")}]. The total area of the skate
park is

{.text-center} `A=`[{x-equation.var(vars="x", fns="+ -")}]

Once again, we have a quadratic equation! Except, rather than solving it, we
want to find it’s _maximum_.

{.todo} Diagram, numeric solution

{.todo} Scheitelpunktform und Grundform

  .box.problem-box
    .box-title: h3 Finding maxima and minima of quadratic functions
    .box-body
      p.todo Exercises under development…

{.todo} Nullstellen

  .box.problem-box
    .box-title: h3 Finding the zeros of quadratic functions
    .box-body
      p.todo Exercises under development…

{.todo} Vertex & axis of symmetry of a parabola

{.todo} Forms & features of quadratic functions

{.todo} Finding the vertex of a parabola in standard form

{.todo} Comparing features of quadratic functions

{.todo} Comparing maximum points of quadratic functions

{.todo} Graphing parabolas

{.todo} Intro to parabola transformations

---

## Other stuff

{.todo} Solve fractional equations that result in quadratics

{.todo} quadratic substitutions

{.todo} quadratic inequalities

{.todo} absolute value equations

{.todo} systems of quadratic equations

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

  p.todo. table
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
