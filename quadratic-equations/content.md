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

The graphs of quadratic equations will always have a “curved” shape like the
one we saw before. This shape is called a __Parabola__.

The simplest quadratic function is just `y = x^2`. If we plot this on a
diagram, we get a simple, upward pointing parabola:

  x-coordinate-system(x="-5 5 1" y="-1 7 1" fn="x^2")

In the following sections we will learn many different ways to solve quadratic
equations and interpret their graphs.

  .img-block
    x-media(src="images/skater-2.jpg", width="400", height="352", credit="© Depositphotos")


---


## Taking Square Roots

Let’s calculate a few different values of squares:

  table
    tr
      td #[em x]
      td –4
      td –3
      td –2
      td –1
      td 0
      td 1
      td 2
      td 3
      td 4
    tr
      td #[em x]#[sup 2]
      td 16
      td 9
      td 4
      td 1
      td 0
      td 1
      td 4
      td 9
      td 16

There are two important points to notice when looking at this table:

* For every value of _x_[{sup}2], there are _two_ corresponding values of _x_.
  This means, for example, that the equation _x_[{sup}2] = 9
* Squares are always positive. This means

When trying to solve equations, we often use _opposites_ of mathematical
operators like addition or multiplication. For example, addition of
multiplication are opposites:

  p.todo x - 3 = 5
  p.todo   + 3 =   + 3   // Add 3 on both sides of the equation
  p.todo x     = 5 + 3
  p.todo x     = 8

Similarly, multiplication and division are opposites:

  p.todo x / 5 = 3
  p.todo   * 5 =   * 5
  p.todo x     = 3 * 5
  p.todo x     = 15

The opposite of squaring a number is taking the square root. For example,
5^2 = 25, so /25 = 5.

---

Unfortunately, this is not quite the end – because (-5)^2 = (-5)*(-5) = +25.
Using the same logic as above, we could say /25 = -5.

  p.todo x^2 = 36
  p.todo /(x^2) = +- /36
  p.todo x = +- 6

Unlike linear equations, which always had

When solving linear equations, we often use "inverse operators": addition is
the opposite of subtraction, and multiplication is the opposite of division.
To solve quadratic equations we need square roots, the inverse operation of
squaring. For example, 6^2 = 36, so /36 = 6.

Unfortunately, things are not quite that simple with negative numbers. Lets
calculate the square of a few positive and negative numbers:

TABLE

For every value of x^2, there are _em_ two  different corresponding values of x.
For example, if x^2 = ${x^2}{x|4|2,10,1}, we could have x = ${x} or x = ${-x}.
There is a special symbol to express this: x = ${'+-'+x} ("x equals plus-minus four").

---

While linear equations always have a single solution, quadratic equations can
have _two_ solutions. Whenever we take square roots of an equation, we have to
remember to add a +-, because squaring ignores the sign.

  p x^2 = 36
  p /(x^2) = +- /(36)   // remember to add +- when taking square roots of an equation
  p x = +- 6

---

If you look at the table above, you'll also notice that `x^2` is always positive
(remember that "minus times minus is plus"). This also means that equations like
x^2 = -10 have _no solution at all_. There is no number x which, when squared,
is negative.

---

Here are some more examples of quadratic equations with different numbers of
solutions. The number of solutions can be visualised using the graph of the
quadratic function.

  p   x^2 - 9 = 0
  p   x^2 = 9
  p x = +- /9
  p x = +- 3

  p graph
  p two solutions

---

If we need to solve slightly more complex equations, we just need to bring them
into the form x^2 = something, and take square roots like above:

  p 3 * x^2 - 11 = 7
  p 3 * x^2      = 18
  p x^2      = 6
  p x        = /6
  p x        = 2.45

Here are some more examples for you to try:

---

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

## Factorising

Here is a simple term containing the product of two sums. To simplify it, we
have to match up all possible terms and add them up:

{.text-center} `(x+5)*(2x-1) = x*2x + 5*2x - x*1 - 5*1`

The result

---

## Completing the Square

In some cases, factorising doesn't work: there simply aren't any

---

## The Quadratic Formula

Todo

---

## Geometric interpretation

Let’s now design a small skate park, to try out our new SquareBoads. We’ve got
50m of fence, as well as two existing walls we can use to enclose the area –
and of course we want to make it as large as possible.

{.todo} interactive diagram

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
