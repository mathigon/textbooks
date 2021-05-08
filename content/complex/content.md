# Complex Numbers

## Introduction

> section: introduction
> sectionStatus: dev
> id: timeline
> color: "#6D3BBF"
> level: Advanced

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

{.fixme} At this stage, most mathematicians would have stopped, because you [[can’t take square roots of
negative numbers | always need to have two results | need to solve the equation for _x_, not _y_]].

{.fixme} You may have noticed that sqrt(-15) is a very strange number. For square roots of positive numbers like sqrt(9) or sqrt(5), one can simply look for a number that, when squared, yields 9 or 5. But there is no number on the number line that yields -15 when squared. If the number is positive, multiplying it by itself results in a [[positive | negative]] number. If the number is negative, multiplying it by itself also results in a [[positive | negative]] number. As the Hindu mathematician Bhaskara II put it: “There is no square root of a negative number, because a negative number is not a square.”

{.fixme} Basic and established rules about numbers made solving this equation seem impossible. But this difficulty was not limited to this one problem. The issue of taking the square root of a negative number popped up everywhere for Cardano and his contemporaries. It appeared in the complicated cubic and quartic equations they were studying, but also in simple quadratic equations like x2+1=0. What made Cardano special is that, instead of stopping and giving up, he took a different approach. He was the first to say: _Maybe this only seems impossible. Maybe we don’t think we have the numbers to solve this problem, but we actually do._ In other words, Cardano proceeded to solve the problem as if sqrt(-15) existed, despite all evidence to the contrary. His solution, updated only to use modern notation, is shown below:

{.fixme} algebra flow
y-5= ± sqrt(-15)
y=5 ± sqrt(-15)
Picking up where we left off, we can solve the equation for y.
If y=5+sqrt(-15)
x+5+sqrt(-15)=10
x=5-sqrt(-15)
We can then solve for x, using either logic or by substituting one of the values of y into Equation 1.
By a similar logic, if y=5-sqrt(-15), x=5+sqrt(-15)
This means that either way our two numbers are 5+sqrt(-15) and 5-sqrt(-15).
 (5+sqrt(-15))(5-sqrt(-15))
25+5sqrt(-15)-5sqrt(-15)+(sqrt(-15))^2
To verify that our solution is correct, let’s multiply x and y and see if the product is 40. We start by expanding using the distributive property.
25-(sqrt(-15))^2
We can simplify using the fact that adding any number to its opposite gives 0.
25-(-15)
To evaluate (sqrt(-15))^2, consider what sqrt(-15) means. By definition, if you square sqrt(-15), you should get -15.
40
When we simplify, we get 40, which proves that our answer does work, if we let sqrt(-15) exist!

---

{.fixme} The first and most important thing to notice about this solution is that, with one exception, Cardano treated sqrt(-15) the same way he would treat any other number. In his calculations, he still obeyed known rules of arithmetic, such as using the distributive property when multiplying. Only when considering the expression (sqrt(-15))^2 did he do something that had never been done before. Yet here his calculation also makes sense: if sqrt(-15) does, in fact, exist, it has to be a number that, when you square it, you get -15.

---

{.fixme} If this solution seems confusing, you are, once again, in good company. Cardano himself said that using -15  in this way was “as refined as it was useless.” Yet Cardano and his contemporaries could not shake -15 and other numbers like it; they kept appearing in the equations they were trying to solve. Another Italian mathematician, Rafael Bombelli, used the square roots of negative numbers to solve several important and previously unsolvable cubic and quartic equations. Every time these strange new numbers were used in the solutions of real problems, they gained a bit more plausibility.

{.fixme} Nevertheless, most mathematicians of the time still viewed them as meaningless, incomprehensible, or impossible. The philosopher – mathematician Rene Descartes found them so far-fetched he called them imaginary numbers, and labeled all other numbers real. Though many future mathematicians would object to this labeling, the terms ended up sticking and we still use them today.

{.fixme} Among imaginary numbers, there is one that is special: -1.  It plays the role that 1 plays in the real number system: every imaginary number has -1as a [[factor | multiple]].  To simplify the math surrounding imaginary numbers, Leonhard Euler gave -1 a special name: i, the imaginary unit. In almost every respect, i behaves like a real number, with one (important) exception: when i is multiplied by itself, it yields [[-1]]. This is the defining property of i.

{.fixme} To see the special role that i plays, consider the imaginary number -28. We could leave it as is, but we can also rewrite it as follows:

{.fixme} algebra flow
-1 * 28
Break up -28 into a purely imaginary and a purely real part.
i28
Use the fact that i=-1 to rewrite further.
i4 * 7
2i7
Simplify 28 by finding the highest perfect square that goes into 28.

{.fixme} This may seem like an overly complicated way of writing imaginary numbers, but as we will see, it can actually greatly simplify the arithmetic surrounding imaginary numbers. For now,  let’s practice writing a few imaginary numbers using the number i:

{.fixme} -36 = 6i
-48 = 4i3
-14 = i14
-49 = 7i
-50 = 5i2

---

{.fixme} Though the existence of imaginary numbers certainly seemed a bit more possible after the work of Cardano and Bombelli, it would be another 200 or so years before imaginary numbers would become fully accepted by scientists and mathematicians around the world. It is worth asking how and why this happened. How did these numbers, which throughout history and even into the late 1700s were regarded as impossible, false, and absurd, eventually come to be seen as imaginable, believable, and even convincing?

{.fixme} To help answer this question, it is useful to consider exactly what was so impossible about these types of numbers. By the 18th century, we no longer associated numbers strictly with counting, measurement, or geometry, but instead we viewed them as points along a continuous line with negatives to the left of zero and positives to the right. Even irrational numbers like  had their place in line, although admittedly their exact position could be a bit hard to pinpoint. But imaginary numbers were nowhere to be found. They weren’t negative, nor were they positive, and they definitely weren’t zero. If they didn’t exist anywhere along the line, then where did they exist?

---

{.fixme} The answer came from three separate sources at around the same time: a Norwegian surveyor named Caspar Wessel, a Parisian bookkeeper named Jean-Robert Argand, and one of the greatest mathematicians of all time, Carl Friedrich Gauss. To see the logic behind their interpretation of complex numbers, it is helpful to take a closer look at the operation of multiplication, understood geometrically.

{.fixme} One way of representing multiplication is as a transformation of vectors (arrows) along the number line. Consider the following examples:

{.fixme} If we multiply any number by a positive number, we [[stretch]] or [[shrink]] the resulting vector, and the direction of the vector [[stays the same]].

{.fixme} If we multiply any number times a negative number, it will still  [[stretch]] or [[shrink]] the resulting vector, and the direction of the resulting vector [[changes ]] when we [[rotate]] it [[180°]]. Note that we can also think of the change in direction as a reflection, but as we will see, thinking of it as a rotation is more helpful when we start to consider imaginary numbers.

{.fixme} In this way, we can think of multiplying by -1 as a pure [[rotation | dilation | translation]] by [[180°]].

---

{.fixme} With this geometric understanding of multiplication, we can begin to think where imaginary numbers might fit into this picture. We already know that i × i = [[–1]]. To understand what the imaginary number i really means, let’s also think about it as a transformation. What transformation can we apply twice, starting from 1, to arrive at –1?

::: column.grow

{.fixme} Subtract –1 twice.
When clicked: This does indeed give us –1, but “subtracting” is not a valid transformation. We could stretch 1 to 0, but then there is no way to stretch 0 to become –1.

{.fixme} Rotate by 180° twice.
When clicked: Unfortunately, this does not work. Rotating twice by 180° takes us back to our starting place: +1, not –1.

{.fixme} Rotate by 90° twice.
When clicked: This works! If we rotate the number 1 twice, by 90° we arrive at –1. However this leads to a new problem: we’re leaving the number line! What does it even mean for a number to not be on the number line?

::: column.grow

{.fixme} Three diagrams for each of the options on the left that students can click on.

:::

{.fixme} Up to now, mathematicians had always thought of the number line as 1-dimensional: a simple line that goes from –infinity to +infinity. And we already knew that none of these numbers could ever satisfy i² = –1.

{.fixme} Around 1797, mathematicians like Gauss and Argand realised that to find these new “imaginary” numbers, we had to look in an entirely new dimension. They discovered that numbers form a 2-dimensional plane, not just a line.

::: column.grow

{.fixme} And suddenly, our transformations problem becomes easy: on a plane, we can easily find a transformation that satisfies our requirements. We simply rotate 1 by 90°, two times, and we get to –1. This means that the number i lies a distance 1 [[above|below|left of|right of]] zero.

{.fixme} We can think of this plane of numbers as a coordinate system: the horizontal axis contains all the [[real | rational | imaginary]] numbers, while the vertical axis contains all the [[imaginary | real | complex]] numbers.

::: column.grow

{.fixme} Complex plane diagram. Initially, only the x-axis is visible, as well as the arrows for two 90° rotations.

{.fixme} Once students complete the [[above]] blank, a point labelled “i” appears at (0, 1).

{.fixme} Once students complete the [[imaginary]] blank, the y-axis (and all other gridlines) appears.

:::

---

{.fixme} This is an amazing discovery! It means that instead of existing along the number line, imaginary numbers like i exist perpendicular to it. For any real number, you can turn it into an imaginary number by multiplying it by i, the imaginary unit. Visually, this will rotate it [{90°]]  onto what we now know as the imaginary number line. Similarly, for any imaginary number, you can multiply it by i again, and it will rotate [[90°]] again, and return to a place along the real number line.


{.fixme} When we combine the real and imaginary number lines, we end up with a complex plane. In addition to locating purely real and purely imaginary numbers, we can locate combinations of real and imaginary numbers, which we call complex numbers, at different points in the plane. You can write any complex number in the form a+bi, where a is referred to as the real part and bi is referred to as the imaginary part. Sometimes, the real part is written as Re(z ), and the imaginary part as Im (z), where z=a+bi. For example, the complex number -2+3i could be written as Re(z)=[[-2]] and Im(z)=3.  For each number given below, place it in its proper position on the complex plane.

    // Interactive here:
    // Students should be given complex numbers and have to plot them at points on the plane.
    // Should include (irrational, purely real, purely imaginary, and complex). Should be at least 1 in each quadrant.

{.fixme} As you saw with some of these examples, you can write even purely real numbers (like sqrt(5)) or purely imaginary numbers (like -3i) as complex numbers. In this sense, the complex numbers contain all possible real numbers, imaginary numbers, and combinations thereof.

---

{.fixme} It is hard to overestimate the importance of these discoveries. Numbers that had once seemed like empty, meaningless symbols were shown to have a meaningful and concrete interpretation that both fit in with and expanded known rules of geometry and arithmetic. As Tobias Danzig memorably put it, the discovery of the complex plane “gave these phantom beings . . . flesh and blood. It took the imaginary out of the complex and replaced it with an image.” Just as we had extended our concept of number in the past to make room for fractions, decimals, irrationals, zero, and negative numbers, we now had to extend it once more to make room for imaginary and complex numbers.

{.fixme} With an entirely new dimension of numbers discovered, new worlds opened up. Complex numbers were invented simply to solve certain polynomial equations, but they actually have important applications in many areas of engineering and technology:

{.fixme} Electrical engineering
Electrical engineers use complex numbers when working with alternating currents, voltages, and electromagnetic fields.
// https://en.wikipedia.org/wiki/Electrical_engineering#/media/File:Silego_clock_generator.JPG

{.fixme} Signal processing
Complex numbers are often used in technologies that analyze, edit and even produce sounds, images, and other information.
// https://entertainment.howstuffworks.com/sound-editing4.htm

{.fixme} Civil and mechanical engineering
Civil and mechanical engineers use complex numbers to model the vibrations of buildings, bridges, roads, and even airplanes.

{.fixme} Quantum Physics
// https://phys.org/news/2019-06-quantum-physics-heisenberg-uncertainty.html
Complex numbers (and some even crazier numbers) are used by physicists that try to explain the nature of the fundamental particles that make up the building blocks of matter and the forces between them.

{.fixme} Complex numbers played a role in some of the most important scientific breakthroughs of the 19th and 20th centuries. Just as important, complex numbers revolutionized mathematics. They opened the door to new types of geometry that challenged and expanded our understanding of space, and they paved the way for even more innovative answers to the question: what are numbers and what can they be used for?

{.fixme} In many ways, the idea of complex numbers was the point of departure for a thousand other innovations, questions, and discoveries. But in at least one important way, it was the end of a chapter in the history of mathematics. As we will soon see, for certain types of equations, we could finally say that we had all of the numbers we needed to solve any equation we wanted to. Better yet, we knew for sure exactly how many solutions each of these equations would have. In this sense, it is fitting that the journey to find the solutions to these equations, a journey that went through so many twists and turns, so many fits and starts, ended with numbers that we call imaginary. It is a testament to the role that imagination, intuition, and conjecture play in mathematical discovery. It is a reminder that even the numbers that we now call real had to be imagined first.


----------------------------------------------------------------------------------------------------


## Complex Arithmetic

> section: arithmetic
> sectionStatus: dev

{.fixme} Now that we know complex numbers exist, it is natural to ask: what can we do with them? Since they
are numbers, we expect to be able to perform operations on them: to add, subtract, multiply, and
divide, at the very least. But how does that work? How can we understand adding two complex numbers
or multiplying them?

{.fixme} As we know from the last chapter, when Cardano and Bombelli solved equations using complex numbers,
they tried as much as possible to treat complex numbers the same way they would real numbers. The
one exception to this rule was the fact that `i^2=input(-1)`, but otherwise they assumed that the
same rules of arithmetic that they applied to real numbers would apply to imaginary and complex
numbers.

---

### Adding and Subtracting

{.fixme} We can add and subtract complex numbers just like any algebraic expression, by adding or subtracting
their real and imaginary parts separately. You use “_i_” just like any other mathematical constants
or variables, like _π_ or _x_. With that in mind, let’s try adding and subtracting some complex
numbers:

::: column.grow

{.fixme} (3 + 5i) + (2 + 3i)
(2 + 3i) + (2 – 2i)
(3 – 2i) – (4 + 2i)
(2 + 4i) + (1 – 4i)

::: column(width=300)

{.fixme} coordinate system

:::

---

{.fixme} You may have noticed that complex numbers are quite similar to 2-dimensional vectors. In fact, we
can represent each complex number as a vector in the complex plane, with the horizontal component
corresponding to the [[real part | imaginary part]] and the vertical component corresponding to the
[[imaginary part | real part]]. We can then add or subtract complex numbers in much the same way we
would add or subtract vectors. We can think of adding or subtracting complex numbers as
[[translating | rotating | reflecting]], or shifting, points in the complex plane.

---

{.fixme} In seeing how we can add and subtract complex numbers, we can already see one of the reasons why complex numbers are useful: like vectors, they can be used to represent 2-dimensional quantities like movement, velocity, and force. But, it remains to ask, then: why not just use vectors if both can be used in similar ways? What makes complex numbers uniquely useful for mathematicians, scientists, and engineers, as they seek to understand, analyze, design and create?

{.fixme} The answer lies in the third basic operation: multiplication. It’s not possible to multiply two vectors – we’ve seen operations like the dot and cross products, but these weren’t really “multiplication”. However, we said that complex numbers should behave just like the real numbers we already know, which means we must be able to multiply them.

---

### Multiplying Complex Numbers

{.fixme} To see how we might multiply complex numbers algebraically, consider a simple example: (2+i)(1-i). We can multiply complex numbers in much the same way we multiply real numbers. We can use the [[distributive | associative | commutative ]] property and then we can combine all of the real parts and all of the imaginary parts separately, keeping in mind that i^2=[[-1]]. It might look something like this.

{.fixme} algebra flow
(1+i)(1-i)
1(1+i)-i(1+i) Distribute each term in the first binomial to the second binomial.
1+i-i-i^2 Distribute again.
1+0i-i^2 Combine the imaginary parts.
1-(-1) Use the fact that i^2=-1 to simplify.
2

---
> id: multiplication

{.fixme} This makes sense algebraically, but what does it mean geometrically? Let’s start by imagining a simple object formed in the complex plane. Take a square, for example, with vertices at the following four points: 1+i, 2+i, 1+2i, and 2+2i.  What would happen if we multiplied all of these points by another complex number, like 1-i? We have already multiplied (1+2i)(1-i). Let’s  now take the other points on the square and multiply them by 1-i:

::: column.grow

{.fixme} (3 + 5i) + (2 + 3i)
(2 + 3i) + (2 – 2i)
(3 – 2i) – (4 + 2i)
(2 + 4i) + (1 – 4i)

    // Students have to fill in the blanks for at least one of the multiplications. Once they enter the correct answer, the point will appear on the diagram. Once all points appear, they should connect to form a square

::: column(width=300)

    x-geopad(width=300 height=300 x-axis="-1,5,1" y-axis="-2,4,1" padding=5 complex): svg
      circle.blue(name="a" x="point(1,1)")
      circle.blue(name="b" x="point(2,1)")
      circle.blue(name="c" x="point(2,2)")
      circle.blue(name="d" x="point(1,2)")
      path.blue(x="polygon(a,b,c,d)")
      circle.red(name="a1" x="complexProduct(a,q)")
      circle.red(name="b1" x="complexProduct(b,q)")
      circle.red(name="c1" x="complexProduct(c,q)")
      circle.red(name="d1" x="complexProduct(d,q)")
      path.blue(x="polygon(a1,b1,c1,d1)")
      circle.green.move(name="q" x="point(1,-1)")

:::

{.fixme} Let’s think about what happened to the square, visually, as each point was multiplied by 1-i.  We can see that it was [[rotated | reflected | translated | dilated ]] by an angle of [[45]] clockwise and [[dilated | rotated | reflected | translated ]] by a factor of [[sqrt(2)]]. You can get a further sense of how complex multiplication works visually by playing with the diagram above. Pick a shape of your choice, and then drag the vector shown. It will show you what happens when you multiply all of the points that make up your shape by the complex number represented by the vector.

---

{.fixme} As you play with the diagram, record what you notice and what you wonder below.

    x-free-text

---

{.fixme} You may have noticed that as you rotate one of the factors around the plane, the entire shape rotates with it. In other words, as you change the angle of rotation of each factor, that makes the product also rotate an equal amount. Similarly, if you stretch or shrink one of the factors, the product also stretches or shrinks proportionally. To see this most clearly, we can look at what happens if we only change the angle or only change the magnitude of each factor. Play around with the diagram below to get a sense of how this works.

---

{.fixme} We have seen that complex multiplication causes rotations and dilations, but you may be wondering: Why did multiplying each number by 1- i rotate the square by exactly 45or expand it by a factor of 2? To understand exactly why those particular transformations occurred, we need to look more closely at the number 1-i itself, and to understand it a bit differently.

{.fixme} So far we have been representing complex numbers as points or vectors in the complex plane. We have noted that the real part of each complex number corresponds to the horizontal component of the vector that represents it, and the imaginary component corresponds to the vertical component. Though this is one way to describe complex numbers, it is not the only way.

{.fixme} We can also describe them in terms of the angle that they make with the positive x-axis, and their distance from the origin. We often label this angle , and refer to it as the argument of a complex number. We call a complex number’s distance from the origin r, and refer to it as the number’s modulus. Sometimes the modulus is also written as z, – it’s the 2-dimensional version of  absolute value, the distance of numbers from the origin. To see this visually, consider the diagram below, which shows how any point in the complex plane can be represented in terms of  and r.

{.fixme} If we want to describe any complex number, a+bi, in terms of its modulus r, and its argument, , we could use our knowledge of trigonometry to solve for a and b in terms of r and . We could write that a=[[r cos ()| r sin ()| r tan ()]], and b= [[r sin ()| r cos ()| r tan ()]]. Putting it all together, we can write the whole complex number as:

{.fixme} diagram

{.fixme} This is known as the polar form of a complex number. If this looks familiar to you from learning about polar coordinates, you are right to notice many similarities between the way we represent coordinates in polar form and how we represent complex numbers in polar form.

{.fixme} To write1-i in the polar form, let’s plot it in the complex plane shown above, and then attempt to find the values of r and  that correspond to that point. We can find r using Pythagoras’ Theorem, and this gives us r=[[sqrt(2)]]. In this case, we might be able find  just by inspection, but we could also use the inverse tangent function and the fact that the point is in [[Quadrant IV | Quadrant I | Quadrant II | Quadrant III ]]. This gives us = [[-45]]. Putting everything together, we can write  1-i in polar form as [[sqrt 2(cos(-45)+i*sin (-45))]].

{.fixme} This is a surprising discovery! In some sense, the fact that multiplying a complex number by 1-i causes that number to rotate 45 clockwise and expand by sqrt(2) is built into the number 1-i itself. If we had multiplied by another complex number, we would have generated a completely different combination of rotations and dilations. These transformations can be predicted in advance, and they can be seen much more clearly when we write complex numbers in polar form.

{.fixme} Add short practice wherein students convert between polar and Cartesian form

---

{.fixme} Even with an understanding of polar form, you may still be wondering exactly how multiplying complex numbers works. We can understand and visualize complex multiplication in many different ways, three of which are shown in the tabs below. As you play with each one, think about what each visual reveals about complex numbers that may be missing (or less clear) from the others.

::: tab
#### x

{.fixme} An interactive which allows one to drag either vector and shows how that transforms the product. (This should have angles labeled, so the “adding angles” part is super clear.)
https://www.geogebra.org/m/fRcnfgDW
Directions: Drag either complex number and observe how changing that complex number changes the product.

::: tab
#### x

{.fixme} A video which associates each vector to a triangle, and then asks students to transform the first triangle by aligning it to the second triangle and stretching it so that its base is the same as the hypotenuse of the second triangle.
For example: https://www.youtube.com/watch?v=-dhHrg-KbJ0&t=667s
Directions: Use transformations (rotations and dilations) to align one triangle so its base is exactly the same as the other triangles’ hypotenuse.

::: tab
#### x

{.fixme} An interactive which shows the entire complex plane being rotated and stretched as you multiply two complex numbers.
For example: https://www.youtube.com/watch?v=5PcpBw5Hbwo&t=1896s (Start at 24:40 OR 30:40)
Directions: Drag the point at 1 to the coordinate for one of the complex numbers you are multiplying. See how the plane transforms, and in particular how the other complex number transforms to arrive at the product.

:::

---

{.fixme} Each of these visuals highlights different aspects of complex multiplication. From the first, we see that we can find the argument of the product by simply [[adding | subtracting | multiplying | dividing]] the arguments of the two factors. Similarly, we can find the modulus (r) of the product by [[ multiplying | adding | subtracting | dividing ]] the moduli of those two factors.

{.fixme} From the second and especially the third visuals, we can see that multiplying by a complex number does not just transform the other number that is being multiplied; it transforms the entire plane. Each complex number describes a unique set of rotations and dilations that happen to any point in the plane when it is multiplied by that particular complex number.

---

### Dividing Complex Numbers

{.fixme} Now that we have a fuller understanding of complex multiplication, let’s finally consider what it might mean to divide two complex numbers. Take, for example, the following quotient:

{.fixme} 1-2i3+4i=?

{.fixme} At first glance, this seems much more complicated than multiplication. In multiplication, we just use the distributive property as we would with variables or whole numbers. How can we use what we know about division to find a way to perform it on complex numbers?

{.fixme} We know that division is the “inverse” of multiplication, so it seems reasonable that in order to divide two complex numbers we [[subtract]] their arguments, rather than adding them, and [[divide]] their modulii, rather than multiplying them. This turns out to be true, but the process of converting between Cartesian and Polar forms can be cumbersome. Especially if the complex number is already in Cartesian form, there is a much simpler method.

{.fixme} You may have noticed in some of the examples above that sometimes multiplying two complex numbers gives a purely real number. As it turns out, there is a way to turn any complex number into a purely real number using multiplication. It relies on a concept called the complex conjugate. We use the notation z* to represent the complex conjugate of a number z. For any complex number z=a+bi, its complex conjugate, z*=a - bi. For example the complex conjugate of 3+4i is [[3-4i]], and the complex conjugate of -2-2i is [[-2+2i]].

{.fixme} To understand why the complex conjugate is useful here, let’s first think about it geometrically. In the diagram below, drag the two complex numbers, so that they are conjugates of each other. Try to find the conjugates of numbers in each different quadrant, and think about what you notice about each pair of conjugates and their product.

{.fixme} diagram

---

{.fixme} Geometrically, complex conjugates reflect a complex number about the [[x-axis | y - axis | line y=x ]]. They have the [[same | opposite]] modulus as the original complex number, but the [[opposite | same ]] argument. Because the arguments are opposites, when the two conjugates are multiplied together the resulting complex number has an argument of [[0]] and rests along the real number line. This proves that multiplying a complex number by its conjugate always results in a real number.

{.fixme} You may be wondering how this relates to division, and in particular to our original problem:  1-2i3+4i. It is useful here to think of division as the “inverse” of multiplication. Take a basic division fact, like 15/5=3. Why is this fact true? We can come up with many reasons, but they all essentially boil down to the fact that 5 groups of 3 and 3 groups of 5 are both 15. In other words, division is defined by its relationship to multiplication, and all division problems can be thought of as questions about multiplication. For example, 15/5 can be thought of as asking a question: What number, when multiplied by 5, gives 15? Similarly, 1-2i3+4i can be thought of as asking: what number, when multiplied by 3+4i, yields 1-2i?

{.fixme} Because dividing by real numbers is much simpler to understand than dividing by complex numbers, one strategy we can use is to take the expression1-2i3+4i, and turn it into an equivalent expression where the denominator is a purely real number. This is where the complex conjugate comes in: if we multiply the denominator by its complex conjugate, we should get a purely real number. In order to keep the expressions equivalent, we must multiply both the numerator and denominator by the conjugate of the denominator. For our problem it would look like this:

{.fixme} algebra flow
Math
Commentary
1-2i3+4i3-4i3-4i
This method is equivalent to multiplying our original fraction by [[1]].
(1-2i)(3-4i)(3+4i)(3-4i)
We multiply the numerators and the denominators separately.
[[-5+10i25]]
We can expand and simplify both the numerator and the denominator. Notice that the denominator is now a purely real number.
-15-25i
We sImplify completely. This is the quotient we were looking for.

---

{.fixme} This is a good amount to take in, so let’s start by making sure we did our division correctly. If 1-2i3+4i=-15-25i, then it should also be true that (3+4i)(-15-25)=[[1-2i]]. To convince yourself that this works, take a moment to verify that this statement is true.

{.fixme} You may be left wondering why this method works: it has to do with the properties of complex conjugates. To make a long story short, because any number has the same modulus, and the opposite argument as its conjugate, conjugates are uniquely suited for the division operation, which is in many ways just an “undoing” of multiplication. Let’s get some more practice with dividing complex numbers by solving the problems below:

---

{.fixme} example problems
Problem
Solution
2i1+i
1+i
-4i
4i
4-2i-3+2i
-16-2i13
2+2i2-i2
i

---

{.fixme} So there you have it! Just as with real numbers, we can add, subtract, multiply and divide any pair of complex numbers. We can do this, for the most part, by following the same rules we use to operate on real numbers: the distributive, associative, and commutative properties. What’s more; we found a way to understand complex number operations geometrically; by thinking of them as vectors in the complex plane. In some senses, we found that complex numbers are even better than vectors. In particular, when we write complex numbers in polar form, it gives us a simple and elegant way to understand 2-D rotation and dilation.

{.fixme} This property of complex numbers; that they can naturally describe expansion, contraction, and especially rotation is at the heart of their usefulness and their beauty. As we saw in the course on trigonometry, there is a deep connection between circular, rotational motion and wave behavior. Oftentimes when scientists and engineers deal with waves - whether radio waves received by your cell phone, quantum mechanical waves that describe the behavior of subatomic particles, or physical waves like the shock waves after an earthquake - complex numbers are the most simple and insightful way to describe these waves. In the coming chapters, we will further explore how complex numbers can be used to describe rotation and wave behavior, and how they enable us to find solutions to many important scientific and mathematical questions, both ancient and modern.


----------------------------------------------------------------------------------------------------


## Euler’s Formula

> section: euler
> sectionStatus: dev

{.fixme} Many scientists believe that the best way to understand our university, from the smallest subatomic
particles to the largest galaxies, is through mathematics. Equations can help us explain patterns
that are to complex, XXX or chaotic.

{.fixme} But mathematics is not just incredibly powerful to solve real life applications. Many mathematicians

{.fixme} As we have seen, many modern scientists believe that the natural world, from the smallest  to the widest galaxy, can only be understood mathematically. They believe that mathematics is not only wildly useful; it enables us to see clearly the structure and beauty that lies beneath the surface of our world. It enables us to scrutinize and understand things that appear at first glance to be inscrutable: too vast, too tiny, or too chaotic.

Are there any equations that you think are particularly beautiful? Maybe you like the symmetry of
[Pythagoras' theorem](gloss:pythagoras) or XXXX.

In this chapter we will learn about another equation that is not just XXXX, but has also inspired
countless mathematics by its "beauty". In fact, the physicist and Nobel Laureate Richard Feynman
called it “one of of the most remarkable, almost astounding formulas, in all of mathematics”! But
first, we have to think about complex exponents.

---

### Complex Exponents

In the [previous chapter](/course/complex/arithmetic), we used the laws of Complex numbers to work
out what it means to add, multiply or divide complex numbers. If we want to raise a complex number
to a power, we can just multiply it repeatedly – for example, `(2 + 3i)^3 = (2 + 3i) * (2 + 3i) * (2 + 3i)`.

The mathematician [Leonard Euler](bio:euler) asked what would happen if we instead put a complex
number into the _exponent_ – for example, what is `2^(2 + 3i)`?

{.fixme} On the face of it, this question seems a bit far fetched. After all, we have been told since we were young that powers represent repeated multiplication. 2^3 means “multiply 2 by itself 3 times.” How can we possibly make sense of “multiply 2 by itself i times” or “multiply 2 by itself 1+2i times”? If you will remember, though, we have extended the definition of exponents before. Asking ourselves to “multiply 2 by itself -1 times” or to “multiply 2 by itself ½ of a time” does not really make sense, but we found a way to calculate expressions like 2^(-1), 2^(½), or even 2^(pi).

---

{.fixme} It turns out that we can extend our idea of exponents even further to include imaginary and complex exponents, but it requires thinking about exponents very differently than we are used to. To start, instead of using a base of 2,5, or even 10, we will use the natural base, e. In studying exponential functions, we learned that the function e^x can be defined in two ways:

::: column.frame.red.text-center(width=300 parent="padded-thin")

The sum of an __infinite series__:

{.text-center} `e^x = 1 + x + x^2/(2!) + x^3/(3!) + x^4/(4!) + …`

::: column.frame.blue.text-center(width=300)

The __limit__ of this expression, as _m_ approaches infinity:

{.text-center} `§e^x = lim_(x → ∞) (1+x/m)^m`

:::

---
> id: euler-approx

{.fixme} If we take the second definition of e^x, we can consider what happens if, instead of substituting a real value for x, we substitute an imaginary number. For simplicity, we’ll start by making x=i. To visualize what is happening, we can take a vector with a horizontal (real) component of 1, and a vertical (imaginary) component of i/m, and we see what happens when we multiply that vector by itself m times. Use the slider below to see what happens as the value of m gets larger and larger.

{.fixme} Visual of the expression (1+x/m)^m with vectors representing a real part (1) and and imaginary part (dependent on x and m) that shows the product of this expression using vectors and triangles (similar to how we presented complex multiplication in the arithmetic chapter).

{.fixme} Add some more details to triangle approximation diagram (build-up in multiple steps, more explanations about what’s going on, so students don’t have to deduce everything by themselves)

    figure
      p.md x = ${round(x,2)} and m = ${m+1}
      x-geopad(width=400 height=400 x-axis="-2,2,1" y-axis="-2,2,1" padding=5 complex): svg
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

{.fixme} There are several things to notice here. First, as the value of m becomes progressively larger, the value of the overall expression gets closer to a point on the unit circle. You might wonder why this expression gets closer to this particular point. To see why, play around with both of the sliders this time. What happens if we keep the value of m as large as possible, but change the value of x? What happens if we go to a different value of x, and vary the value of m? Record what you notice and wonder in the box below.

{.fixme} Text box: Record what they notice and wonder.

---

{.fixme} You may have noticed that as the value of x changes to different imaginary numbers, the value of the overall expression rotates to different points along the unit circle. You may also have noticed some interesting values of x. If you didn’t already, notice that the endpoint is taken halfway when the value of x is [[3.14 or pi]]. This fact leads to a very interesting statement, that:

`e^(i*pi)= input(-1)`

{.fixme} Or, alternatively . . .

`e^(i*pi)+1=0`

{.fixme} Known as Euler’s identity, this is one of the most famous statements in all of mathematics. According to Tobias Dantzig, some of Euler’s contemporaries regarded this identity as having a “mystic significance,” much like the Pythagoreans viewed Pythagoras’ theorem. In surveys of mathematicians and physicists, this identity comes up again and again as the most beautiful equation in all of mathematics. Studies have shown that when mathematicians look at this formula, it activates the same parts of the brain that are activated when you listen to a moving piece of music or take in a beautiful painting.

{.fixme} It may seem odd to find such great significance in a piece of mathematics. Euler’s identity is seen not only as interesting, but as beautiful, elegant, and profound. If this seems odd, consider how many unexpected and deep connections are at play in Euler’s identity. It connects nothingness (0), unity (1), the imaginary (i), and the infinite ( and e). It connects five of the most significant constants in the history of mathematics; all of which have long, fascinating histories, and all of which have, in some way, revolutionized the way humans understand and work with numbers.

---

{.fixme} It turns out that Euler’s identity is actually a special case of an even more far-reaching relationship. As you may have guessed, it is not a coincidence that when x=i, the point ends up rotating exactly halfway around the unit circle. As we know, an angle of  radians corresponds to a [[180]] rotation. If we look at other values of x, we see similar relationships. If you let the value of x=2i, the point rotates [[ all | three quarters | one half | one quarter ]] of the way around the circle. To rotate the point a quarter of the way around the circle, the x-value needs to be [[1.57i]], or 2i.In all of these cases, the coefficient of i tells us the radian angle through which the point rotates. This is why we usually write the expression not as eix, but rather as ei.

{.fixme} This relationship ends up being true for any value of x. If we let `x=2pi/3*i` in for x, the point will rotate exactly 2pi/3 radians, or [[120]] degrees, along the unit circle. This means that `e^(2pi*i/3)=` [[-1/2+sqrt(3)/2*i|xxx]].  Even more generally, we can say that for any imaginary value `i*theta`, we can think of `e^(i*theta)` as rotating a point along the unit circle an angle of theta radians. We can use what we know about trigonometry to write this idea in one compact statement:

::: .theorem
__Euler's Formula__

{.text-center} `e^(i θ) = blank(cos(θ),sin(θ),tan(θ)) + i*blank(sin(θ),cos(θ),tan(θ))`
:::

---

We now have three distinct ways to express complex numbers: we already know the [__cartesian
form__](gloss:complex-cartesian) `a + b i` and the [__polar form__](gloss:complex-polar)
`r cos(θ) + r i sin(θ)` from the previous chapter. Euler's Formula can help us to convert the polar
form into the new __exponential form__:

::: column.frame.blue.text-center(width=212 parent="padded-thin")

__Cartesian Form__<br>
`§z = a + b i`

::: column.frame.green.text-center(width=212)

__Polar Form__<br>
`§z = r cos(θ) + r i sin(θ)`

::: column.frame.yellow.text-center(width=212)

__Exponential Form__<br>
`§z = re^(i θ)`

:::

---

{.fixme} Where does the r prefix comes from (modulus), how to convert between cartesian and exponential, how e^(a + bi) can be converted to re^(bi)

{.fixme} Is the exponential form always the most useful? No: as we have seen, for adding and subtracting complex numbers the Cartesian form is extremely simple and intuitive geometrically. However, for multiplying and dividing complex numbers, the exponential form simplifies things considerably. To see how this works, consider the product the two complex numbers `z=1+i` and `w=-1+sqrt(3)*i`.  As we have seen, z has a modulus of [[sqrt(2)]] and an argument of [[pi/4]]. We can therefore write it in exponential form as z=[[`sqrt(2)*e^(i*pi/4)`|x]]. Similarly, we can write w as `w=2e^(i*2pi/3)`. If we wanted to multiply `z*w`, we could write:

{.fixme}
z=`[[sqrt(2)*e^(i*pi/4)]]`
w=`[[2e^(i*2pi/3)]]`
We can find the modulus and argument of both z and w and use that to write each in exponential form
`z*w=sqrt(2)*e^(i*pi/4)*2e^(i*2pi/3)`
`z*w=2sqrt(2)*e^(i*pi/4+i*2pi/3)`
We can use exponent rules to multiply both complex numbers.
`z*w=2sqrt(2)*e^(i(pi/4+2pi/3))`
`z*w=2sqrt(2)*e^(i*11pi/12)`
We can factor out an i and simplify our expression by adding both arguments.

{.fixme} Not only is this simpler than multiplying both numbers expressed in polar form; it has the advantage of matching exactly with how we know complex multiplication works. It shows that to find the product of two complex numbers, we only need to [[add | subtract | multiply | divide]] their arguments and [[multiply | add | subtract | divide]] their modulii. This form is similarly illuminating when we divide complex numbers.

---

::: .box.blue
#### Exercises

{.fixme} Practice problems

:::

---
> id: taylor

### Proving Euler's Formula

{.fixme} To start, this formula is very useful. When engineers use complex numbers to analyze electricity, they use Euler’s formula. When physicists use complex numbers to help answer big questions about the universe, they often rely on Euler’s formula as well. In general, this formula often offers the most simple and elegant way to perform computations with complex numbers.

{.fixme} There are many things we can do with Euler’s formula once we know it, but let’s explore a bit further exactly why Euler’s formula works and where it comes from.

::: column.grow

You may remember from calculus that every function can be expressed as a polynomial with infinitely
many terms, which get smaller and smaller – this is called a [Taylor Series](gloss:taylor-series).

Here you can see the Taylor series for [`e^x`](action:exp), [`sin(x)`](action:exp) and
[`cos(x)`](action:exp). Notice how, as you move the slider, the polynomial approximation gets closer
and closer to the true value of the function.

{.fixme} For more information about why this actually works, see the chapter on Power Series in our Calculus course.

::: column(width=320)

    x-select.segmented
      div Exponential
      div Sine
      div Cosine
    x-coordinate-system(width=320 height=280 x-axis="-5,5,1" y-axis="-4.5,4.5,1" padding="5" axis-names="x,y")
    x-slider(steps=8)

{.fixme} Sin (x)=1-x^2/2!+x^4/4!-x^6/6! + . . .

:::

{.fixme} Recall that we also can define e^(x) as the sum of the following infinite series:

{.fixme} 1+x+x^2/2!+x^3/3!+x^4/4!+ . . .

{.fixme} This is known as the power series for e^(x). (To view a summary and explanation of the concept of power series, click here.) Normally we have thought of these power series having only real number inputs, but if we choose an imaginary number (i) and substitute it into the equation in place of x, something very interesting happens:

{.fixme} Math
Commentary
ei=1+i+(i)22!+(i)33!+(i)44!+(i)55!+(i)66!+...

{.fixme} ei=1+i-()22!-i()33!+()44!+i()55!-()66!+...
We can use our understanding of powers of i to simplify this expression.
ei=(1-()22!+()44!-()66+....) +(i()-i()33!+i()55!+...)
Group all of the imaginary terms and all of the real terms.
ei=(1-()22!+()44!-()66+....) +i(()-()33!+()55!+...)
Factor i out of all of the imaginary terms.
ei=cos()+i*sin()
Notice that these new series are the power series for cos()and sin (), respectively!

{.fixme} We can therefore derive Euler’s formula directly from the power series for e^(x), sin (x), and cos (x)!

---

### Circular Motion

::: column.grow

In the past, the function `e^(a x)` has always represented exponential growth or decay, like
compound interest, or radioactive decay. Now we know that if _a_ is imaginary, the same function
can also represent __circular motion__.

For example, we could use `x(t) = e^(i t)` to represent the position of a planet at a time _t_, as
it orbits a star located at the origin.

::: column(width=320)

{.fixme} planet orbits diagram

:::

{.fixme} As you can see, things can get out of control fairly quickly, and this is one way of thinking about how exponential growth works. We can also apply these ideas to other functions like x(t)=e^(2t) to see an even more rapid pace of growth, or x(t)=e^(-0.5t) to imagine exponential decay. But what happens if we introduce imaginary numbers into these exponential functions? To take perhaps the simplest example, how do these dynamics work if we make our function x(t)=e^(i*t)?

{.fixme} When studying calculus, we learned that if we differentiate the position function of an object, we should get its [[velocity | position | acceleration]], is also e^(t). We can use the [[chain rule | product rule | quotient rule]] to find the derivate of `x(t)` above:

`v(t)=d/dt(e^(it))=`[[`i*e^(it)`|x]]

{.fixme} In terms of the particle’s motion, multiplying by i means that the velocity vector is the same length as the position vector, but it is rotated 90 counterclockwise. In other words, at any point in time, the velocity vector will be [[perpendicular | parallel ]] to the position vector. If we imagine our initial position vector, our velocity vector will appear as shown below:

{.fixme} Interactive starting with the initial position vector where the vectors pop up as soon as they enter in the blanks that explain how they should work.

{.fixme} We might be able to understand the motion of our particle even now, but to make things especially clear look at the acceleration. To find the acceleration, we can take the derivative of the velocity function:

`a(t)=d/dt(i*e^(i*t))=-(e^i*t)`

{.fixme} This means that the acceleration vector will also have the same magnitude as the velocity and position vectors, but it will point in the [[opposite | same | different ]] direction as the original position vector. At any point in time, these vectors will stay in the same relationship: the acceleration vector pointing inward, the position vector pointing outward, and the velocity vector perpendicular to both.

{.fixme} Students of physics will recognize these conditions as the conditions for circular motion. If you haven’t taken physics, imagine a yo-yo spinning in a circle or a tetherball spinning on a pole. What keeps the yo-yo or tetherball in a circular path is a centripetal force that pulls the object towards the center of the circle: this is why the acceleration vector always points inward. Let’s press play on the diagram above and see how the particle actually moves.

{.fixme} As you can see, the particle traces a path around a circle of radius [1]]. What’s more: because the velocity and position vectors have the same magnitude, the particle is always moving around at a speed of [[1]] unit/second. This means that when t=1, the particle will have moved a distance of 1 units around the circumference of the circle. When t=pi, the particle will have moved a distance of pi units around the circle, and so on. This serves to fully explain why Euler’s formula works the way it does. Because the speed of the particle is 1 unit/second, the input, which in this example represents the time passed, also represents the distance traveled by the particle. Because the circle has a radius of 1, the distance traveled by the particle is the same as the radian angle through which the particle has rotated, so we can really think of the input as representing that angle, multiplied by the imaginary unit i.

---

### Fourier Series

{.fixme} Start by talking about the link between circular motion and waves.

{.fixme} Developed by the French mathematician and physicist Joseph Fourier, and originally invented to solve problems involving heat flow, the Fourier series has also extended its reach into our everyday lives and into almost every area of modern science. The general idea is that we can approximate or even represent almost any function as the sum of an infinite series of sine waves. It is similar to the idea of power series - that we can express certain functions as infinite sums of other functions - but it is also much stranger, because, again, Fourier claimed that an infinite series of sine waves could represent almost any function, no matter how complicated or weird.

{.fixme} To begin to see how this idea can be illuminating, not to mention extremely powerful, let’s look at an example. It is the same example that convinced the Pythagoreans that there were deep connections between mathematical structure, beauty, and the laws of nature: musical harmony. When you hear your favorite song on the radio, or listen to an orchestra perform a famous symphony, you are hearing an incredibly complicated mix of sounds. Each note played by, say, a violin, is made of what is called a fundamental frequency, which determines the actual pitch you hear, and a series of what are called overtones or harmonics. These overtones are multiples of the fundamental frequency, and the particular combination of softer and louder overtones gives the instruments you hear their timbre; the character or quality of their sound. Timbre is what makes a violin sound different than a piano, or an electric guitar sound different than an acoustic guitar.

---

{.fixme} What did Fourier series and Euler’s formula have to do with this? Well, the chord itself can be represented as a sum of different fundamental frequencies and overtones that are unique to the notes in the chord, as well as the particular instruments being played. These fundamental frequencies and overtones can be represented as sine waves, with a particular frequency (cycles per second) and intensity (amplitude). To see a simple example of how this might work, play a note on the piano below. Note both the fundamental frequency (the highest amplitude sine wave) and the various overtones that make up this one note.

{.fixme} Interactive: A piano (at least an octave) that students can click on to play notes or chords.
The corresponding Fourier transform of the piano, both the overall sum and the series of the most important individual frequencies and overtones.

{.fixme} Now play a chord. For example, play the notes C, E, and G at the same time. This is a basic C major chord. Notice how we now have multiple fundamental frequencies as well as overtones, and how the wave representing the entire chord becomes much more complicated. The opening chord of “A Hard Day’s Night” is even more intricate; involving many more notes and 4 different instruments. But the principle is the same: We can break down the complicated, erratic graph that represents this chord into simple sine waves that represent the fundamental frequencies and overtones being played, and we can use this information to figure out what instruments played which notes. To see more about how this works mathematically, and how Euler’s formula fits into all of this, watch the following video by the popular math enthusiast Grant Sanderson:

    figure.video-wrap
      iframe(src="https://www.youtube-nocookie.com/embed/spUNpyF58BY" frameborder=0 allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen)

---

### More Applications

Waves are everywhere around us: you interact with [electromagnetic waves](gloss:electromagnetism)
whenever you listen to the radio, make a phone call, connect to WiFi, or use a microwave. You can
see mechanical waves when you thrown a pebble into water, or feel the tremors of an earthquake.
Light travels as waves, and even the most fundamental laws of nature, like [gravity](gloss:gravity)
or subatomic particles, can be described using waves.

Euler's formula is a simple, elegant way to describe waves and circular motion mathematically – and
that's why it should be no surprise that it has important applications everywhere in science,
technology and engineering.

---

::: column(width=240)

{.fixme} Image

::: column.grow

One of these applications is __X-ray crystallography__, a technique used to see the structure of
tiny molecules, that are too small even for microscopes.

{.fixme} A molecule in crystal form is exposed to a beam of x-rays. When the x-rays interact with the molecule, they scatter and form a pattern of spots on the other side. This pattern gives information about the amplitudes and frequencies of the electrons within the molecule. In other words, the pattern of spots serves as its own Fourier transform that gives us information about the molecular structure of the crystal that it interacted with. Using some clever detective work, along with the mathematics of the Fourier transform, we can infer the 3D molecular structure from the pattern of spots.

https://en.wikipedia.org/wiki/Photo_51
https://en.wikipedia.org/wiki/DNA

{.fixme} This method has been used to uncover the structure of many important molecules. Most famously, x-ray crystallography produced Photo 51. This photograph was originally taken by a graduate student under the supervision of the English chemist Rosalind Franklin, and was later given to Watson and Crick, who used it as critical evidence to support their claim that DNA had a double-helix structure.

:::

---

{.fixme} X-ray crystallography also allows scientists to investigate the structures of other
molecules, like complex proteins and even some viruses. And many other medical imaging techniques,
like __Magnetic Resonance Imaging (MRI)__ use a similar principle: They probe chemical or physical
structures that we cannot see using radiation, and then use the Fourier transform to interpret and
reconstruct these structures from the data we receive.

---

{.fixme} Euler’s formula can help us describe alternating current, enabling engineers to create the
electricity networks that power our homes and our cities. Structural engineers use both Euler’s
formula to analyze the vibrations of tall buildings, bridges, and roads, to keep us safe when we
fly on a plane or when an earthquake strikes. And Euler’s formula was even used to solve the
__Schrodinger equations__, which form the backbone of quantum physics.

{.fixme} It is impossible to list all the different ways in which complex numbers have affected our lives,
and all the scientific, technological and mathematical breakthroughs they have enabled.

{.fixme} Feynman called Euler’s formula “astounding” and “remarkable” not just because it is useful - but because it is beautiful, deep, and profound. Like the Pythagorean theorem, it represents a simple and elegant yet completely unexpected connection between different areas of math: between algebra and geometry, and between circular, wavelike motion and exponential change. Just as the Pythagoreans found an almost mystical significance in the simple ratios that helped them uncover the structure of a musical chord or the rotation of the planets, modern scientists and mathematicians find a similar sense of mystery, harmony, and beauty in Euler’s formula. Though we may have moved beyond the Pythagorean belief that “all is number,” Euler’s formula and the Fourier transform remind us of the power of numbers and of mathematics to uncover hidden structure and hidden beauty all around us: in music, in nature, and in the world at large.


----------------------------------------------------------------------------------------------------


## Solving Polynomials

> section: polynomials
> sectionStatus: dev

* Know that non-real roots of polynomial equations with real coefficients occur
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


----------------------------------------------------------------------------------------------------


## De Moivre’s Theorem and Roots of Unity

> section: de-moivre
> sectionStatus: dev

* Find the n distinct nth roots of re^(iθ)
* Know that they form the vertices of a regular n-gon in the Argand diagram.
* Use complex roots of unity to solve geometric problems

---
> id: roots

Here is a geopad with axes and coordinate system

    figure
      x-geopad(width=600 height=400 x-axis="-6,6,1" y-axis="-4,4,1" complex padding=5): svg
        circle.move.green(name="p" cx=2 cy=2)
        path.green(x="segment(point(0,0),p)")
        circle.red(x="complexRoot(p,3,0)" name="r0")
        circle.red(x="complexRoot(p,3,1)" name="r1")
        circle.red(x="complexRoot(p,3,2)" name="r2")
        path.red(x="polygon(r0,r1,r2)")
