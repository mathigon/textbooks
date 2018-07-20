# Sequences and Patterns

## Introduction

> sectionId: applications

Many professions that use mathematics in their everyday life are interested in
one specific aspect: _finding patterns_. Here are a few examples

::: column(width=160 parent="padded-thin")

    x-media(src="images/crime.jpg" width=160 height=160)
    
::: column(width=400)

In the last decade, police departments around the world have started to rely
more any more on mathematics. Special algorithms can use the data of past
crimes to predict when and where crimes might occur in the future. The _PredPol_
system (short for "predictive policing"), for example, helped decrease the crime
rate in parts of Los Angeles by 12%!

::: column(width=160)

    x-media(src="images/volcanoes.jpg" width=160 height=160)
    
::: column(width=400)

It turns out that earthquakes follow similar patterns as crimes. Just like one
crime might trigger retaliations, an earthquake might trigger aftershocks. In
mathematics, this is called a "self-exciting Hawkes processes", and there are
complex TODO

::: column(width=160)

    x-media(src="images/finance.jpg" width=160 height=160)
    
::: column(width=400)

{.todo} Mathematicians have

:::

While scientists and bankers use highly complex algorithms to find these
patterns, we are going to start with something much simpler.

---
> id: definitions

### Simple Sequences

In mathematics, a [__sequence__](gloss:sequence) is a string of numbers (or
other objects) that follow a particular pattern. The individual elements in a
sequence are called [__terms__](gloss:sequence-term).

Here are a few examples of sequences. Can you find the pattern and fill in
the next two terms?

{.text-center.s-orange} _{.n}3_, _{.n}6_, _{.n}9_, _{.n}12_, _{.n}15_,
_{.n}[[18]]_, _{.n}[[21]]_, … _{span.pattern.reveal(when="blank-0 blank-1")}
Pattern: “Add 3 to the previous number to get the next one.”_

{.text-center.s-teal} _{.n}4_, _{.n}10_, _{.n}16_, _{.n}22_, _{.n}28_,
_{.n}[[34]]_, _{.n}[[40]]_, … _{span.pattern.reveal(when="blank-2 blank-3")}
Pattern: “Add 6 to the previous number to get the next one.”_

{.text-center.s-purple} _{.n}3_, _{.n}4_, _{.n}7_, _{.n}8_, _{.n}11_,
_{.n}[[12]]_, _{.n}[[15]]_, … _{span.pattern.reveal(when="blank-4 blank-5")}
Pattern: “Alternatingly add 1 and add 3 to the previous number, to get the next
one.”_

{.text-center.s-lime} _{.n}1_, _{.n}2_, _{.n}4_, _{.n}8_, _{.n}16_,
_{.n}[[32]]_, _{.n}[[64]]_, … _{span.pattern.reveal(when="blank-6 blank-7")}
Pattern: “Multiply the previous number by 2, to get the next one.”_

---

{.todo} There are different ways in which we can describe the pattern underlying a sequence mathematically. First let us represent every term in a sequence by a variable: let us call the nth term in the sequence xn. The first term of the sequence is represented by x1, the second term by x2, and so on. The x’s are simply place holders until we have calculated their actual value.

{.todo} In general, you describe a sequence with subscripts that are used to index the terms. The kth term in the sequence is ak.

{.todo} a1,a2,a3,a4,…,ak,…

---
> id: triangle-numbers

### Geometric Sequences

All of the sequences above could be continued forever, up to infinity. But
sequences in mathematics don't always have to be numbers. Here is a sequence
that consists of geometric shapes – triangles of increasing size:

::: column(width=24 parent="padded-thin")
{.text-center} 1

    include svg/triangle-1.svg
::: column(width=52)
{.text-center} 3

    include svg/triangle-2.svg
::: column(width=80)
{.text-center} 6

    include svg/triangle-3.svg
::: column(width=108)
{.text-center} [[10]]

    include svg/triangle-4.svg
::: column(width=136)
{.text-center} [[15]]

    include svg/triangle-5.svg
::: column(width=164)
{.text-center} [[21]]

    include svg/triangle-6.svg
:::

---

At every step, we are adding one more row to the previous triangle. The length
of the new rows is also increasing by one every time.

{.todo} An equation that expresses xn in terms of previous values is called a recurrence relation, and these are very useful for calculating the terms of the sequence step by step. However if we were only interested in the 100th term of the sequence, we would have to calculate all terms up to 100. It would be much easier if we had an equation that tells us any term of the sequence, without calculating all the previous ones.

{.todo} Let us think again about the multiples of 3. Above we found the recurrence relation xn = xn–1 + 3. But it is clear that the nth term of the sequence has to be 3 × n. For example, the 4th term is 3 × 4 = 12. An expression for xn = 3n which only depends on n and not any other x’s is called a closed form solution. It has the advantage that we can quickly find very large terms of the sequence without having to calculate all previous terms. The 55th term, for example, is 3 × 55 = 165.

{.todo} A recursive definition must always have two parts, the base case(the starting number) and the recursive case (the pattern to get more terms). Note that the base case may include more than one statement as is the case with the Fibonacci sequence.

{.todo} A recursive rule for a sequence is a formula which tells us how to progress from one term to the next in a sequence. Generally, the variable n is used to represent the term number. In other words, n takes on the values 1 (first term), 2 (second term), 3 (third term), etc. The variable, an represents the nth term and an−1 represents the term preceding an.

{.todo} Recursive rules can help us generate multiple sequential terms in a sequence but are not helpful in determining a particular single term. Consider the sequence: 3,5,7,…,an. The recursive rule for this sequence is an=an−1+2. What if we want to find the 100th term? The recursive rule only allows us to find a term in the sequence if we know the previous term. An nth term or general rule, however, will allow us to find the 100th term by replacing n in the formula with 100.

---
> id: square-numbers

Another sequence which consists of geometric shapes are the __square numbers__,
which you probably already know. Every term is formed by increasingly large
squares:

::: column(width=24 parent="padded-thin")
{.text-center} 1

    include svg/square-1.svg
::: column(width=50)
{.text-center} 4

    include svg/square-2.svg
::: column(width=76)
{.text-center} 9

    include svg/square-3.svg
::: column(width=102)
{.text-center} [[16]]

    include svg/square-4.svg
::: column(width=128)
{.text-center} [[25]]

    include svg/square-5.svg
::: column(width=154)
{.text-center} [[36]]

    include svg/square-6.svg
:::

The next square numbers will be [[64]], [[81]], [[100]], and so on.

---

{.todo} explicit equation

---

### Action Sequence Photography

Remember the ley words we have defined so far: [terms](gloss:sequence-term) and
[sequences](gloss:sequence), [recursive equations](gloss:sequence-recursive) and
[explicit equations](gloss:sequence-explicit). They will appear again and again
throughout this course.

First, though, here is a completely different kind of sequence. The pattern is
not addition, subtraction or multiplication, but geometric
[transformations](gloss:rigid-transformation). Here is an examples of
__action sequence photography__, where the photographer takes many shots in
quick succession, and then merges them into a single image:

{.todo} Image

Can you see how the snowboarder forms a sequence? Here, the pattern between
consecutive steps is a combination between translation and rotation.

---

Here are a few more examples of action sequence photography, for your enjoyment:

{.todo} More Images



--------------------------------------------------------------------------------



## Arithmetic and Geometric Sequences

::: column.grow

Halley's Comet appears in the sky approximately every 76 years. The comet was first spotted in the year 1531. Find the nth term rule and the 10th term for the sequence represented by this situation.

In this concept we will begin looking at a specific type of sequence called an arithmetic sequence. In an arithmetic sequence the difference between any two consecutive terms is constant. This constant difference is called the common difference. We can generalize the equation for an arithmetic sequence below:

::: column(width=320)

    x-media(width=320 height=256 src="images/halley.jpg")
    p.caption Image of Halley's Comet,#[br]taken in 1986 on Easter Island

:::

{.todo} Halley's Comet explanation

{.todo} Geometric sequence explanation

---

If we compare both of these problems, we notice that there are lots of
similarities. The sequence of Halley's Comet has the same difference between
all consecutive terms – 76 years. The sequence of XXXX has the same ratio
between consecutive terms – xxx.

All sequences with these properties have a special name:

::: column.grow

An __arithmetic sequence__ has a constant difference _d_ between consecutive
terms. The same number is added (or subtracted) to every term, to produce the
next one.

::: column.grow

A __geometric sequence__ has a constant ratio _r_ between consecutive terms.
Every term is multiplied (or divided) by the same number, to produce the next
term.

:::

Here are a few different sequences. Can you determine which ones are arithmetic,
geometric or neither, and what the values of _d_ and _r_ are?

{.todo} interactive

To define an arithmetic or geometric sequence, we have to know not just the
common difference or ratio, but also the initial value `a_0`. Here you can
generate your own sequences by changing the values of `a_0`, _d_ and _r_:

{.todo} interactive

---

### Explicit and Recursive Formulae

Remember that a __recursive formula__ for a sequence is an equation for the
value

{.todo} recursive formulae

Finding an __explicit formula__ is a bit harder.

{.todo} explicit formulae explanation - `a_n = a_1 + d*(n-1)` and `a_n = a_1 * r^(n-10`

---

### Power Series

{.todo} Powers of 2

---

### Computer Memory

The amount of memory that computer chips can hold in the same amount of space doubles every year. In 1992, they could hold 1MB. Chart the next 15 years in a table of values and show the amount of memory on the same size chip in 2007.

First, create a table showing the 15 year span. The amount of space doubles every year so the common ratio is 2. This means to get the next term in the sequence you multiply the previous term by 2.

---

### Pocket Money

Which would you prefer, being given one million dollars, or one penny the first day, double that penny the next day, and then double the previous day's pennies and so on for a month?

At first glance it’s easy to say "Give me the million!" But why don’t we do a few calculations to see how the other choice stacks up?

You start with a penny the first day and keep doubling each day. Doubling means that we keep multiplying by 2 each day for one month (30 days).

On the first day, you get 1 penny, or 20 pennies.

On the second day, you get 2 pennies, or 21 pennies.

On the third day, you get 4 pennies, or 22 pennies. Do you see the pattern yet?

On the fourth day, you get 8 pennies, or 23 pennies. Each day, the exponent is one less than the number of that day.

So on the thirtieth day, you get 229 pennies, which is 536,870,912 pennies, or $5,368,709.12. That’s a lot more than a million dollars, even just counting the amount you get on that one day!

A geometric sequence is a sequence of numbers in which each number in the sequence is found by multiplying the previous number by a fixed amount called the common ratio. In other words, the ratio between any term and the term before it is always the same. In the previous example the common ratio was 2, as the number of pennies doubled each day.

The common ratio, r, in any geometric sequence can be found by dividing any term by the preceding term.

---

### Chessboard

The game of chess was invented in India, many hundreds of years ago. According
to legend, the Indian king loved the game so much that he invited its inventor
to his palace and promised him any present they ask for.

The inventor had just one simple request: rice. He wanted the king to place
one grain of rice on the first square of the chess board, two grains on the
second, four grains of the third, eight grains on the fourth, and so on. Every
new square should have twice as many grains of rice as the previous one.

The king, who was very wealthy, agreed immediately and asked his servants to
fetch bags of rice. A chessboard has 64 squares, so how many grains of rice
does the king need in total?

You might have noticed that the number of grains of rice form a geometric series.
The first term is [[1]], and the common ratio is [[2]]. Using the results from
above, we can calculate how many grains of rice there will be on the last square:

{.text-center} `a_64 = 1 * 2^63 =` 9 223 372 036 854 775 808

That's 9 billion billion grains of rice! In total, they would weight about
100 billion tonnes – or 100 times the weight of Mount Everest, the tallest
mountain on Earth.

---

### Bouncing Ball

A ball has a 75% rebound ratio — that is, when it bounces repeatedly, each
bounce is 75% as high as the previous bounce.

We can write a geometric sequence that gives the height of each bounce with the common ratio of r=0.75:

When you drop it from a height of 20 feet:

How high does the ball bounce after it strikes the ground for the third time?

The ball starts at a height of 20 feet; after the first bounce it reaches a height of 20⋅34=15 feet.
After the second bounce it reaches a height of 20⋅(34)2=11.25 feet.
After the third bounce it reaches a height of 20⋅(34)3=8.44 feet.

Here is a graph that represents this information. (The heights at points other
than the top of each bounce are just approximations.)

What if you didn’t know what the rebound ratio was, but had an actual ball? In
my trial, I have a tennis ball, and I dropped it from a height of 200 cm. When
measuring its height after the first bounce, I measured the height at 111 cm.

Using the geometric sequence formula, we have 111=200(r)(2−1). 200 represents
the initial height, and (2, 111) represents the second height after the first
bounce. 1111110.555=200(r)1=200×r=r

---

### Interest

Rebecca inherited some land worth $50,000 that has increased in value by an
average of 5% per year for the last 5 years. If this rate of appreciation
continues, about how much will the land be worth in another 10 years?

---

Fill in the missing terms in each geometric sequence.
a) 1, ___, 25. 125, ___
b) 20, ___, 5, ____. 1.25

For each of these geometric sequences, find the eighth term in the sequence.
a) 1, 2, 4,...


--------------------------------------------------------------------------------


## Famous Sequences

There are infinitely many different arithmetic and geometric series – some of
which we saw in the previous section. However there are also lots of sequences
that are neither arithmetic or geometric.

One example we have already seen are the triangle numbers:

{.todo} diagram

Imagine two copies of a triangular array of squares. Can you picture how to fit them together to make a rectangle? What is special about the dimensions of your rectangle?
What do you notice about doubling triangular numbers?
Experiment with different triangle numbers and explain what is special about the rectangles made from two identical triangle numbers.
Can you write down the dimensions of the rectangle made from two copies of the 250th triangle number? Can you use this to work out the 250th triangle number?

Consider the following numbers: 4851,6214,3655,7626,8656.
Which are triangle numbers?
How did you decide?
Do any triangle numbers end 000?

https://challenges.wolfram.com/challenge/three-triangular-numbers

---

### Polygon Numbers

Square numbers
What is the sum of the first 30 odd numbers?
What is the sum of the first 60 odd numbers?

http://demonstrations.wolfram.com/PolygonalNumbers/

Tetrahedral Numbers

    x-tetrahedron(size=200)

---

### Prime Numbers

You already know another famous sequence of numbers: the __Prime numbers__.
Unfortunately, prime numbers don't follow a simple pattern or recurrence
relation. Instead,

---

### Perfect Numbers

If you have read the article on Prime Numbers, you will know that a divisor of a number n is another number which divides n without remainder. Usually we want to multiply these divisors to get the original number, but let us think about what happens if we instead add them:

number	divisors	sum of divisors	 
6	1	2	3	 	 	6	perfect number
15	1	3	5	 	 	9	deficient number
20	1	2	4	5	10	22	abundant number
If the sum of the divisors is bigger than the number itself, we call it an abundant number (relatively many divisors). If the sum of the divisors is smaller than the number itself, we call it a deficient number (relatively few divisors). If the sum of the divisors is equal to the number itself, we call it a perfect number.

Perfect numbers are extremely rare: the smallest six are 6, 28, 496, 8128, 33550336 and 8589869056. All these perfect numbers are even – nobody knows whether there are any odd perfect numbers, but we know that there aren’t any below 101500 (that’s a 1 with 1500 zeros)!

---

### The Hailstone Sequence

Many of the sequences we have seen so far have _one specific_ rule or pattern.
But there is no reason why we can't combine multiple different ones. For
example, you could start with any integer `x_0`, and then use the following
recursive rule:

* If `x_n` is even, we divide it by 2 to give `x_(n+1) = x_n // 2`.
* If `x_n` is odd, we can't divide by 2. Instead, we multiply by 3 and add 1.
  In other words, `x_(n+1) = 3x_n + 1`.

And then we repeat the same pattern, over and over again. Let's start with 5
and see what happens:

{.text-center} 5, 16, 8, 4, 2, 1, 4, 2, 1, …

Notice how, at some point, the sequence reaches a cycle: 4, 2, 1 will now repeat
over and over again, forever.

If we pick a different starting number, we get a very different sequence;

{.todo} interactive, slide

These sequences are called __Hailstone Sequences__, because they randomly seem
to go up and down before eventually hitting the 4, 2, 1 cycle – just like
hailstones that move up and down in a cloud before crashing to Earth.

In 1937, the mathematician Lothar Collatz proposed that _every_ hailstone
sequence sequence eventually ends in a 4, 2, 1 cycle – whatever starting value
you pick. Unfortunately he wasn't able to find a proof, so it became known as
the Collatz Conjecture.

You've already checked a few different starting points above, and computers have
tried all starting values up to `10^20` – that's a 1 followed by twenty zeros
(or 100 billion billion). It always seems to work.

But there are infinitely many integers, and you can't check them all. Even
through many of the best mathematicians in the world have tried, no one has been
able to find a proof of the Collatz Conjecture. It is still an open problem in
mathematics.

It's amazing that such an easy recipe for forming sequences leads to a question
even the best mathematicians haven't been able to answer yet.

    //- When trying to start working on the problem, we looked into many areas of it, hoping to find some clues to help us when we tried to work out other things. One of the first areas we looked at was how many terms of hailstoning it took for the sequence to reach its first 4. At first the number of terms seemed fairly random, when starting with 5 it took 3 terms, when starting with 6 it took 6 terms, when starting with 7 it took 14 terms and when starting with 8 it took only one term. However, after some time it became apparent that there were some curious links between numbers.
    
    //- The first thing that we noticed was that after a while some doubles began to appear. Doubles was the term we used when two consecutive numbers took the same number of terms to produce their first 4. The first example of this was when we hailstoned 12 and 13, which both took 7 terms to reach their first 4. This was followed by 14 and 15, which both took 15 terms to reach their first four. Although the distribution of the doubles seemed random, they consistently appeared, and before long there were also triples, quadruples and even quintuples! Below is a list of all of the doubles that we found when hailstoning the numbers 1 to 184.
    
    //- 12 & 13 – 7 terms
    //- 14 & 15 – 15 terms
    //- 18 & 19 – 18 terms
    //- 20 & 21 – 5 terms
    //- 22 & 23 – 13 terms
    //- 34 & 35 – 11 terms
    //- 54 & 55 – 110 terms
    //- 60 & 61 – 17 terms
    //- 62 & 63 – 105 terms
    //- 76 & 77 – 20 terms
    //- 78 & 79 – 33 terms
    //- 82 & 83 – 108 terms
    //- 84 & 85 – 7 terms
    //- 86 & 87 – 38 terms
    //- 92 & 93 – 15 terms
    //- 94 & 95 – 103 terms

---

### Look and Say Sequence

https://en.wikipedia.org/wiki/Look-and-say_sequence

1, 11, 21, 1211, 111221, 312211

Every term in this sequence (apart from the first one) is produced by reading the previous term. For instance, the fifth term is 111221, which can be read as ‘three 1’s, followed by two 2’s, then one 1’, making the next term 312211.
This sequence is often used as a ‘guess the next term’ puzzle, designed to trip up mathematicians due to its apparently non-mathematical recurrence relation, yet perhaps surprisingly, there are a wealth of mathematically interesting facts about the sequence.
For instance, every term ends in one, and no digit over 3 ever gets used (can you see why this is?). Also, the word lengths exhibit a pattern: the nth root of the length of the nth number tends to a limit, namely 1.303577..., which has been proved to be an algebraic number of degree 71. This is true regardless of what the first term is, except for one degenerate case, in which the starting term repeats ad infinitum. (Can you find this term? It has only 2 digits).
Most amazing of all is Conway’s Cosmological Theorem: no matter what the starting value for the sequence is, it eventually splits into a sequence of ‘elements’ which don’t interact with their neighbours in later terms of the sequence. (There are exactly 94 such elements, named Hydrogen, Helium, ..., Plutonium by Conway).

---

### The Sequence Quiz

{.todo} TODO


--------------------------------------------------------------------------------
> id: spiral


## Fibonacci Numbers

In the previous sections we have seen sequences made from numbers as well as
geometric shapes.

    x-slideshow
      .stage(slot="stage"): include svg/rabbits.svg
      .legend(slot="legend") Let's start with just one pair of baby rabbits.
      .legend(slot="legend") After one month, the rabbits have grown up and start mating.
      .legend(slot="legend") After another month, they will give birth to their first X.

Here is a Fibonacci Spiral

    svg.fib-spiral(width=400 height=400 viewBox="0 0 400 400")
    x-slider(steps=1000)

---

Of course, this is not _actually_ how rabbits populate in real life. Usually,
rabbits have more than two offspring per month, and we haven't accounted for
rabbits dying eventually.

But as you can see, the number of rabbits per month form a new kind of sequence:

{.text-center} 1,  1,  2,  3,  5,  8,  13,  21,  34,  55,  89, …

Think about those numbers and try to find another pattern. Every number is the
[[sum of the two previous numbers|twice the previous number]], so the next
number in the sequence would be [[144]].

---

These numbers are called __Fibonacci numbers__, named after the Italian
mathematician [Leonardo Fibonacci](bio:fibonacci). We start with two 1s, and
every new number is the sum of the two previous numbers.

It is quite easy to write down the [recurrence relation](gloss:recurrence) for
the Fibonacci numbers is `x_n` = [[x_(n–1) + x_(n–2)|abc]].

---

### The Golden Ratio

{.todo} While adding more squares, the proportions of the rectangle become closer to a very special shape: the Golden rectangle. The ratio of the sides of the golden rectangle is called the Golden ratio. It is the limit of the ratio of consecutive Fibonacci Numbers.

{.todo} You can see that these ratios get closer and closer to a particular number around 1.6. This is the Golden ratio and its actual value is 1.61803… Some believe that this ratio is particularly pleasing to humans, and that it underlies the proportions of many buildings, animals or plants.

{.todo} It is important to remember that nature doesn’t know about Fibonacci numbers or the Golden ratio. Plants and animal populations always grow in the most efficient way, and in some cases it results in these regular patterns.

---

### Fibonacci Spirals

{.todo} As before, there is a geometric representation of this sequence. We start with two squares of size 1. Along one edge, we add a new square of size 2, and then another square of size 3. We keep adding squares to the longest edge of the rectangle as shown below. Since the edge of every new square is the sum of the edges of the two previous squares, we get the Fibonacci numbers. If we trace a curve along the corners of these squares, we can make a spiral. This spiral approximates the Golden Spiral. Many similar logarithmic spirals appear in nature, for example Nautilus shells.

{.todo} Golden Rectangle	Golden Spiral	Nautilus Shell

{.todo} SPIRALS IN PLANTS

{.todo} Spiral generator / Ben  Sparks

---

### Lucas Numbers

{.todo} TODO


  Fibonacci is one of the most famous names in mathematics. This would come as a surprise to Leonardo Pisano, the mathematician we now know by that name. And he might have been equally surprised that he has been immortalised in the famous sequence – 0, 1, 1, 2, 3, 5, 8, 13, ... – rather than for what is considered his far greater mathematical achievement – helping to popularise our modern number system in the Latin-speaking world.

  The Roman Empire left Europe with the Roman numeral system which we still see, amongst other places, in the copyright notices after films and TV programmes (2013 is MMXIII). The Roman numerals were not displaced until the mid 13th Century AD, and Leonardo Pisano's book, Liber Abaci (which means "The Book of Calculations"), was one of the first Western books to describe their eventual replacement.

  Leonardo Pisano was born late in the twelfth century in Pisa, Italy: Pisano in Italian indicated that he was from Pisa, in the same way Mancunian indicates that I am from Manchester. His father was a merchant called Guglielmo Bonaccio and it's because of his father's name that Leonardo Pisano became known as Fibonacci. Centuries later, when scholars were studying the hand written copies of Liber Abaci (as it was published before printing was invented), they misinterpreted part of the title – "filius Bonacci" meaning "son of Bonaccio" – as his surname, and Fibonacci was born.


The problem with rabbits

One of the mathematical problems Fibonacci investigated in Liber Abaci was about how fast rabbits could breed in ideal circumstances. Suppose a newly-born pair of rabbits, one male, one female, are put in a field. Rabbits are able to mate at the age of one month so that at the end of its second month a female can produce another pair of rabbits. Suppose that our rabbits never die and that the female always produces one new pair (one male, one female) every month from the second month on. The puzzle that Fibonacci posed was... How many pairs will there be in one year?

At the end of the first month, they mate, but there is still only 1 pair.
At the end of the second month the female produces a new pair, so now there are 2 pairs of rabbits.
At the end of the third month, the original female produces a second pair, making 3 pairs in all.
At the end of the fourth month, the original female has produced yet another new pair, the female born two months ago produced her first pair also, making 5 pairs.

Now imagine that there are $x_ n$ pairs of rabbits after $n$ months. The number of pairs in month n+1 will be $x_ n$ (in this problem, rabbits never die) plus the number of new pairs born. But new pairs are only born to pairs at least 1 month old, so there will be $x_{n-1}$ new pairs. So we have

x_n+1 = x_ n + x_n-1

which is simply the rule for generating the Fibonacci numbers: add the last two to get the next. Following this through you'll find that after 12 months (or 1 year), there will be 233 pairs of rabbits.

    //- Bees are better
    //- The rabbit problem is obviously very contrived, but the Fibonacci sequence does occur in real populations. Honeybees provide an example. In a colony of honeybees there is one special female called the queen. The other females are worker bees who, unlike the queen bee, produce no eggs. The male bees do no work and are called drone bees.
    //- Males are produced by the queen's unfertilised eggs, so male bees only have a mother but no father. All the females are produced when the queen has mated with a male and so have two parents. Females usually end up as worker bees but some are fed with a special substance called royal jelly which makes them grow into queens ready to go off to start a new colony when the bees form a swarm and leave their home (a hive) in search of a place to build a new nest. So female bees have two parents, a male and a female whereas male bees have just one parent, a female.
    //- Let's look at the family tree of a male drone bee.
    //- He has 1 parent, a female.
    //- He has 2 grandparents, since his mother had two parents, a male and a female.
    //- He has 3 great-grandparents: his grandmother had two parents but his grandfather had only one.
    //- How many great-great-grandparents did he have?
    //- Again we see the Fibonacci numbers : 
    //- Number of	parents	grandparents	great-
    //- grandparents	great-great-
    //- grandparents	great-great-great-
    //- grandparents
    //- of a MALE bee	1	2	3	5	8
    //- of a FEMALE bee	2	3	5	8	13

Spirals and shells

They also appear in the beautiful shapes of shells. To see this, let's build up a picture starting with two small squares of size 1 next to each other. On top of both of these draw a square of size 2 (=1+1). We can now draw a new square – touching both one of the unit squares and the latest square of side 2 – so having sides 3 units long; and then another touching both the 2-square and the 3-square (which has sides of 5 units). We can continue adding squares around the picture, each new square having a side which is as long as the sum of the latest two square's sides. This set of rectangles whose sides are two successive Fibonacci numbers in length and which are composed of squares with sides which are Fibonacci numbers, we will call the Fibonacci Rectangles.

If we now draw a quarter of a circle in each square, we can build up a sort of spiral. The spiral is not a true mathematical spiral (since it is made up of fragments which are parts of circles and does not go on getting smaller and smaller) but it is a good approximation to a kind of spiral that does appear often in nature. Such spirals are seen in the shape of shells of snails and sea shells. The image below of a cross-section of a nautilus shell shows the spiral curve of the shell and the internal chambers that the animal using it adds on as it grows.

Fibonacci numbers also appear in plants and flowers. Some plants branch in such a way that they always have a Fibonacci number of growing points. Flowers often have a Fibonacci number of petals, daisies can have 34, 55 or even as many as 89 petals!

A particularly beautiful appearance of fibonacci numbers is in the spirals of seeds in a seed head. The next time you see a sunflower, look at the arrangements of the seeds at its centre. They appear to be spiralling outwards both to the left and the right.

At the edge of this picture of a sunflower, if you count those curves of seeds spiralling to the left as you go outwards, there are 55 spirals. At the same point there are 34 spirals of seeds spiralling to the right. A little further towards the centre and you can count 34 spirals to the left and 21 spirals to the right. The pair of numbers (counting spirals curving left and curving right) are (almost always) neighbours in the Fibonacci series.

The same happens in many seed and flower heads in nature. The reason seems to be that this arrangement forms an optimal packing of the seeds so that, no matter how large the seed head, they are uniformly packed at any stage, all the seeds being the same size, no crowding in the centre and not too sparse at the edges.

Nature seems to use the same pattern to arrange petals around the edge of a flower and to place leaves round a stem. What is more, all of these maintain their efficiency as the plant continues to grow and that's a lot to ask of a single process! So just how do plants grow to maintain this optimality of design?

Golden growth

Botanists have shown that plants grow from a single tiny group of cells right at the tip of any growing plant, called the meristem. There is a separate meristem at the end of each branch or twig where new cells are formed. Once formed, they grow in size, but new cells are only formed at such growing points. Cells earlier down the stem expand and so the growing point rises. Also, these cells grow in a spiral fashion: it's as if the meristem turns by an angle, produces a new cell, turns again by the same angle, produces a new cell, and so on. These cells may then become a seed, a new leaf, a new branch, or perhaps on a flower become petals and stamens.

The amazing thing is that a single fixed angle of rotation can produce the optimal design no matter how big the plant grows. The principle that a single angle produces uniform packings no matter how much growth appears was suspected as early as last century but only proved mathematically in 1993 by Stéphane Douady and Yves Couder, two French mathematicians. Making 0.618 of a turn before producing a new seed (or leaf, petal, etc) produces the optimal packing of seeds no matter the size of the seed head. But where does this magic number 0.618 come from?

The golden ratio

If we take the ratio of two successive numbers in Fibonacci's series, dividing each by the number before it, we will find the following series of numbers:

1/1 = 1, 2/1 = 2, 3/2 = 1.5, 5/3 = 1.666..., 8/5 = 1.6, 13/8 = 1.625, 21/13 = 1.61538...

If you plot a graph of these values you'll see that they seem to be tending to a limit, which we call the golden ratio (also known as the golden number and golden section).

It has a value of $(\sqrt 5 + 1)/2$ ( approximately 1.618034) and is often represented by a Greek letter Phi, written as $\Phi $. The closely related value which we write as $\phi $, a lowercase phi, is just the decimal part of Phi, namely 0.618034... ($(\sqrt 5 - 1)/2$), the number that accounts for the spirals in the seedheads and the arrangements of leaves in many plants. But why do we see phi in so many plants?

The number Phi (1.618034...), and therefore also phi (0.618034...), are irrational numbers: they can't be written as a simple fraction. Let's see what would happen if the meristem in a seed head instead turned by some simpler number, for example the fraction 1/2. After two turns through half of a circle we would be back to where the first seed was produced. Over time, turning by half a turn between seeds would produce a seed head with two arms radiating from a central point, leaving lots of wasted space.

Something similar happens for any other simple fraction of a turn: seeds grow in spiral arms that leave a lot of space between them (the number of arms is the denominator of the fraction). So the best value for the turns between seeds will be an irrational number. But not just any irrational number will do. For example, the seed head created with pi turns per seed seems to have seven spiralling arms of seeds. This is because 22/7 is a very good rational approximation of pi.

What is needed in order not to waste space is an irrational number that is not well approximated by a rational number. And it turns out that Phi (1.618034...) and its decimal part phi (0.618034...) are the "most irrational" of all irrational numbers. (You can find out why in Chaos in number land: the secret life of continued fractions.) This is why a turn of Phi gives the optimal packing of seeds and leaves in plants. It also explains why the Fibonacci numbers appear in the leaf arrangements and as the number of spirals in seedheads. Adjacent Fibonacci numbers give the best approximations of the golden ratio. They take turns at being the denominator of the approximations and define the number or spirals as the seed heads increase in size.

How did so many plants discover this beautiful and useful number, Phi? Obviously not from solving the maths as Fibonacci did. Instead we assume that, just as the ratio of successive Fibonacci numbers eventually settles on the golden ratio, evolution gradually settled on the right number too. The legacy of Leonardo Pisano, aka Fibonacci, lies in the heart of every flower, as well as in the heart of our number system.


Fibonacci Factors

Where do the even numbers come in the sequence? 
Is there a pattern? Why? 
Which Fibonacci numbers are divisible by 3? 
solution: https://nrich.maths.org/2046/solution

Try adding together any three consecutive Fibonacci numbers.
What do you notice? Can you explain it?

Choose any four consecutive Fibonacci numbers. Add the first and last, and divide by two.
What do you notice? Can you explain it?

Add together any six consecutive Fibonacci numbers and divide by four.
What do you notice? Can you explain it?

Can you discover any Fibonacci Surprises of your own?


Puzzle - It's a long way to the top

Every time I come home I have to climb a flight of stairs. When I'm feeling energetic I sometimes take two steps at a time. This gives me a number of ways to climb the stairs. For example, if there are ten steps, I could climb them taking five leaps of two, giving the pattern

2, 2, 2, 2, 2.

Or I could only use a leap of two at the beginning and the end, giving the patter

2, 1, 1, 1, 1, 1, 1, 2.

How many ways are there all together of climbing the ten steps?

Being a mathematician, I don’t have ten steps of course, but I have $n$ steps. Can you find a formula to express the number of ways there of climbing $n$ steps using leaps of one and two?

Solution
Let’s write $S(n)$ for the number of ways to climb a flight of stairs with $n$ steps. There are two possibilities for starting my climb: I could start it using a single step or a leap of two steps. If it’s the former, then there are $n-1$ steps left to climb, which I can do in $S(n-1)$ ways. If it’s the latter, there are $n-2$ steps left to climb, which I can do in $S(n-2)$ ways. This means that

\[ S(n) = S(n-1) + S(n-2). \]
This is a recurrence relation. If I know $S(1)$ and $S(2)$ then I can work out $S(3)$, which I can then use to work out $S(4)$, then $S(5)$, etc.

Clearly $S(1) = 1.$ There is only one way I can climb up one step and that’s using, well, one step. It’s also easy to see that $S(2) = 2.$ I can climb up two steps using two single steps or one leap of two. This gives

\[ S(3) = S(2)+S(1) = 2+1 = 3, \]
\[ S(4) = S(3)+S(2) = 3+2 = 5, \]
\[ S(5) = S(4)+S(3) = 5+3 = 8, \]
\[ S(6) = S(5)+S(4) = 8+5 = 13, \]
and so on. This sequence of numbers might start to look familiar. It's the Fibonacci sequence, which happens to be defined via a recurrence relation in exactly the same way as we defined it here: each number is the sum of the two previous ones. (To be totally accurate, the Fibonacci sequence actually has the first two terms being equal to 1 and 1, rather than 1 and 2, so what we have here is the sequence displaced by a term.)

Carrying on with the calculations we see

\[ S(7) = S(6)+S(5) = 13+8 = 21, \]
\[ S(8) = S(7)+S(6) = 21+13 = 34, \]
\[ S(9) = S(8)+S(7) = 34+21 = 55, \]
\[ S(10) = S(9)+S(8) = 55+34 = 89. \]
So there are 89 ways of climbing a flight of ten steps using steps of one and two!


--------------------------------------------------------------------------------

> id: pascal-intro

## Pascal’s Triangle

Below you can see a number pyramid that is created using a simple pattern: it
starts with a single '1' in first top, and every following cells is the sum of
the two cells directly above.

You could continue this triangle forever, but this diagram only shows the first
15 rows. Hover over some of the cells to see how they are calculated, and then
fill in the missing ones:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };

    .pascal-grid
      - var i = 0;
      while i < 13
        - var j = 0
        .r
          while j <= i
            if (i == 6 && j == 2) || (i == 8 && j == 5) || (i == 10 && j == 5)  || (i == 12 && j == 3)  || (i == 12 && j == 9)
              .c.md [[#{bin(i, j)}]]
            else
              .c= bin(i, j)
            - j += 1;
        - i += 1;

---

It is [[symmetric|right-angled|euilateral]].

The triangle is called __Pascal’s triangle__ named after the French
Mathematician [Blaise Pascal](bio:pascal). He was one of the first European
mathematicians _{.todo} MORE_

---
> id: pascal-sequences

One of the reasons why mathematicians are so fascinated by Pascal’s triangle
is that it has some amazing properties:


    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };

    .pascal-grid.sticky
      - var i = 0;
      while i < 16
        - var j = 0
        .r
          while j <= i
            .c= bin(i, j)
            - j += 1;
        - i += 1;

* _{div.pascal-btn(data-value="ones")}_ The numbers in the first diagonal on
  either side are all ones.
* _{div.pascal-btn(data-value="integers")}_ The numbers in the second diagonal
  on either side are the integers in increasing order.
* _{div.pascal-btn(data-value="triangle")}_ The numbers in the third diagonal on
  either side are the triangle numbers.
* _{div.pascal-btn(data-value="tetrahedral")}_ The numbers in the fourth
  diagonal are the tetrahedral numbers.
* _{div.pascal-btn(data-value="powers")}_ If you add up all the numbers in a
  row, their sums for the sequence of powers of two.
* _{div.pascal-btn(data-value="fibonacci")}_ The numbers in the third diagonal on
  either side are the triangle numbers.
* _{div.pascal-btn(data-value="primes")}_ The numbers in the third diagonal on
  either side are the triangle numbers.

---

Pascal’s Triangle is an infinite symmetric number pyramid. It has been known since the 10th century to Indian and Arabic mathematicians and the French mathematician Blaise Pascal (1623 – 1662) explored it in more detail and discovered its relation to combinatorics.

In many ways we can think of it as a two-dimensional sequence: we start with a single 1 at the top, and every number in one of the following rows is the sum of the two numbers above. Here is what the first 15 rows look like:

Note that the numbers along the edges are always 1’s, but the numbers towards the centre increase very quickly. Like so many other examples before, Pascal’s Triangle is a very complex and interesting object which can be created using a simple pattern. You can find many different sequences in the rows and diagonals of the triangle, and here are a few examples:


Remember that Pascal’s Triangle was created using nothing but addition. Therefore it is surprising that we can find patterns like the powers of 2 or the multiples of Prime numbers, which are intrinsically linked to multiplication. Of course all these patterns occur because of particular mathematical reasons, and it is not hard to prove them.

---
> id: modular

Another thing we can try is to highlight all cells in the triangle which are divisible by a certain number.

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };

    .pascal-grid.small
      - var i = 0;
      while i < 25
        - var j = 0
        .r
          while j <= i
            .c= bin(i, j)
            - j += 1;
        - i += 1;

    p
      .pascal-btn(data-value="2") Div 2
      .pascal-btn(data-value="3") Div 3
      .pascal-btn(data-value="4") Div 4
      .pascal-btn(data-value="5") Div 5

If we were to do the same for even bigger numbers, we would find more and more triangles of increasing size. The patterns are very similar to the Sierpinski Gasket fractal.

As we calculate more rows in Pascal’s triangle, two simple questions arise: which numbers appear in the triangle, and how often does every number appear?

The first question is easily answered: 1 appears infinitely often and every other whole number will eventually appear in the second diagonal on either side. Some numbers also appear in the middle, either twice on either side or once in the centre. These numbers now appear either three or four times in total.

A few numbers appear five or more times. For example, we can see 120 four times in the triangle above (rows 10 and 16) and we know that it will also appear twice in row 120. This makes six occurences in total.

Another example is 3003: it appears twice in rows 14 and 15 each and it will also appear twice in row 3003. But 3003 appears two more times, in the third diagonal on either side of the triangle. Remember that these diagonals are the triangle numbers, and that all triangle numbers are of the form n (n + 1) / 2. We know that 77 × 78 / 2 = 3003, so 3003 is a triangle number. In total, we have found eight occurences of 3003 in the triangle.

We don’t know any other number which appears eigth times in Pascal’s triangle, or whether any number appears more than eigth times. The Singmaster conjecture, named after the American mathematician David Singmaster (*1939), postulates that there is a fixed limit on how often numbers can appear in Pascal’s triangle – but this limit might be larger than eight.


--------------------------------------------------------------------------------

## The In-and-out Puzzle

http://mathworld.wolfram.com/JosephusProblem.html

Once there was an indecisive casting director. He would narrow down his choice for a role to twelve actors, and then be stuck. So, he made a habit of arranging the actors in a circle and going around in a circle, saying “Maybe you, not you, maybe you, not you, ...” and so on. After each “not you,” that person left the circle, so it would shrink until there was just a single person left, who would get the role.
!1. A clever actress decided she would get the role. There were 10 people in her circle. Where must she stand to be the last one in the circle? 
!
2. An actor auditioning for a different part was faced with 20 in his circle. Where should ! he stand?
3. Find a pattern that tells you where to stand no matter how many people are in the circle. Why does it work? 

Variations
 
5. What if the director eliminates every mth person? Where should you stand in a circle
of n? 
 !
6. What about “in, in, out, out,” leaving two in and then kicking two out? 
 !
7. What other variations can you come up with? Try them... can you solve your own ! variations?
!
!4. What if the director says “maybe you, maybe you, not you,” and eliminates every third person. Where should you stand in the circle with 10 people? What’s the pattern with any number? 

This is a problem that is fun to do by actually drawing the students in and having them act it out. Circular tables make it easy. You can also help students with a convenient drawing, though most will figure it out on their own.
!With eight people, for example, you’ll lost the even numbers on round one, 3 and 7 on round two, and 5 on round three, making 1 the winner.
 !The best way to approach this problem in my opinion is to keep track of who wins starting with only one person in the circle and work your way up. A pattern starts to emerge. An argument might as well.
!Here’s one version of it: Cross out the first person (person 2). At this point, there’s one fewer people in the circle, and we’re beginning at person three instead of person 1. So your answer for n people should be the same as for n-1, except the people are relabeled with a number 2 greater. In other words, if
 for the nth circle you stands in position p, for the n+1st
circle you stand in position  
p +2. However, this number may be larger than n+1, so we have to reduce it mod n+1 if necessary.
!It’s possible to get a formula for this, and that’s a nice challenge for kids who are ready for it. But for most, just elucidating the pattern will be enough. The variations are similar.
!For 10 people, position 5 is the best. For 20, it’s position 9.


--------------------------------------------------------------------------------


## Limits and Convergence

{.todo} TODO

In some sequences, such as Prime numbers or Perfect numbers, the individual terms are very special and interesting. In other sequences we may only be interested in what happens to the terms as we calculate more and more of them (what happens to xn as n gets very large). Here are a few examples of what could happen (the numbers, for clarity, are represented by dots):

convergence 1	convergence 2	convergence 3
This sequence gets closer and closer to a particular number. We say that it converges.	This sequence doesn’t converge, since it doesn’t keep getting closer to one single number.	This sequence keeps on growing. We say that it diverges.
Convergence means that the terms keep getting closer to a particular number, and divergence means that the terms keep getting bigger, whether towards infinity or negative infinity. Remember that the sequence of ratios of consecutive Fibonacci numbers above converged to the golden ratio.

Unfortunately “getting closer” is not a particularly precise description in mathematics. A sequence could for example first get very big and then turn around and converge. We don’t really care about what happens at the beginning, only what happens to the most distant terms. All of the following sequences converge:

convergence 4	convergence 5	convergence 6
convergence diagram
Here is how mathematicians define the notion of convergence precisely, and this is one of the most important definitions in all of mathematics:

A sequence with terms x1, x2, x3, … tends to a limit y if we can think of any tiny positive number, let us call it ε (the Greek letter Epsilon), and if eventually all terms of the sequence will be within ε of the limit y. This means that there is some (sometimes very big) integer N so that xN, xN+1, xN+2, … are all between y – ε and y + ε.

Using special mathematical notation, it is possible to express this definition without any words. We use ∀ meaning “for all”, ∃ meaning “there exists” and : meaning “such that”:

∀ ε ∃ N : |xn – y| < ε ∀ n > N
For all ε there exists a number N such that the distance |xn – y| between xn and y is less than ε for all n > N.

Sequences and their convergence is studied in an area of mathematics called Analysis. We use sequences to define crucial concepts in mathematics such as series, continuity and differentiation.

Litov's Mean Value Theorem

Start with two numbers, say 8 and 2.
Let's generate a sequence where the next number is the mean of the previous two numbers.
So the next number is half of (8+2), and the sequence continues: 8,2,5
The next number is half of (2+5), and the sequence continues: 8,2,5,3.5
What would happen if you continued this process indefinitely?
Choose a few pairs of starting numbers and repeat the process.
Each time, your sequence should get closer and closer to a value which we call the limit.
Can you find a relationship between your starting numbers and the limit of the sequence they generate?
Can you explain why this happens?
Now start with three numbers.
This time, we can generate a sequence where the next number is the mean of the last three numbers.
Check you agree that if we start with 4,1,10, the next number is 5, and the number after that is 163. 
What would happen if you continued this process indefinitely?
Choose some more sets of three starting numbers.
Can you find a relationship between your starting numbers and the limit of the sequence they generate?
Can you explain why this happens?

After a while of playing with the numbers on a spreadsheet I have discovered that the formula to find the "limiting value" for 2 starting numbers is:
(x+2y)/3
where x is the first number chosen and y is the second number chosen.
