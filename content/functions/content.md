# Functions

## Relations and Functions

> section: relations
> sectionStatus: dev
> id: sorting-hat

::: column.grow

Welcome to the Hoctagon School of Magic! You’ve taken the train from King’s Cross station in London,
a boat across the great lake in front of the castle, and just arrived in the great hall with all the
other students.

But before the welcome feast can begin, the Sorting Hat has to assign all new students to a house.
Try sorting each of these students into one of the four house:

::: column(width=300)

    // EDITORIAL ONLY
    // https://depositphotos.com/139592200/stock-photo-the-hogwarts-express-train.html

{.fixme} Image

:::

    include components/relation
    x-relation
      .item(slot="domain" name="a") **Current User**
      .item(slot="domain" name="b") Phineas Lynch
      .item(slot="domain" name="c") Sturgis Switch
      .item(slot="domain" name="d") Dilys Derwent
      .item(slot="domain" name="e") Demelza Zabini
      .item(slot="domain" name="f") Bogod Clearwater
      .item(slot="range") Lionpaw
      .item(slot="range") Eaglewing
      .item(slot="range") Badgerclaw
      .item(slot="range") Serpentfang

---

After dinner, all students return to the common rooms of their new houses. Everyone settles into their dorms and returns to the common room to meet their new housemates. Heads of houses use this time to pass out class lists. Like before, connect each of the students with different classes:

    x-relation
      .item(slot="domain" name="a") **Current User**
      .item(slot="domain" name="b") Phineas Lynch
      .item(slot="domain" name="c") Sturgis Switch
      .item(slot="domain" name="d") Dilys Derwent
      .item(slot="domain" name="e") Demelza Zabini
      .item(slot="domain" name="f") Bogod Clearwater
      .item(slot="range") Potions
      .item(slot="range") Transfiguration
      .item(slot="range") Magical Creatures
      .item(slot="range") Broomstick Flying
      .item(slot="range") Charms

---

The next day, you and several of your classmates arrive early to your first lesson. Conversation quickly turns to your new wands. You trade stories about how the wands chose you. Connect each of these wands to a student.

    x-relation
      .item(slot="domain")
        img(src="images/wand-1.png" width=200 height=30)
        span.caption Birch, phoenix feather, 5 3/4
      .item(slot="domain")
        img(src="images/wand-2.png" width=200 height=30)
        span.caption Oak,dragon heartstring, 6 9/16
      .item(slot="domain")
        img(src="images/wand-3.png" width=200 height=30)
        span.caption Oak, unicorn hair, 6 5/8
      .item(slot="domain")
        img(src="images/wand-4.png" width=200 height=30)
        span.caption Yew, kneazle whicker, 4 9/16
      .item(slot="domain")
        img(src="images/wand-5.png" width=200 height=30)
        span.caption Yew, unicorn hair, 5 7/8
      .item(slot="range" name="a") **Current User**
      .item(slot="range" name="b") Phineas Lynch
      .item(slot="range" name="c") Sturgis Switch
      .item(slot="range" name="d") Dilys Derwent
      .item(slot="range" name="e") Demelza Zabini

---

In all of the examples above, there were two groups of things (like students, houses or wands), which you had to connect to each other.

In mathematics, we call groups of things like this [__sets__](gloss:set). We can write down the elements of a set in “curly brackets”, e.g. {Lionpaw, Eaglewing, Badgerclaw, Serpentfang}. The order of the items in a set does not matter, but every item can only appear once in a set.

A connection between two sets is called a [__relation__](gloss:relation). Relations can take different forms, and you might have already noticed some similarities and differences between the examples above.

| Houses | Classes | Wands |
| ------ | ------- | ----- |
|[[Many]] student(s) can be in [[one]] house(s). A relation like this is called many-to-one.| [[Many students]] can be in [[many classes]]. A relation like this is called many-to-many. | [[One wand]] chooses [[one student]]. A relation like this is called one-to-one. |

---

There are many ways we can represent the same relation between sets. So far we have been using mapping diagrams. We can also represent the same information using a table. The sorting hat mapping diagram is shown in the table below.

TODO Interactive here

We can also use ordered pairs to show this relationship. The first value in an ordered pair is from the input set. The second value is from the output set.

({{Current User Name}}, Lionpaw) (Phineas Lynch, Lionpaw) (Sturgis Switch, Eaglewing) (Dilys Derwent, Badgerclaw) (Demelza Zabini, Serpentfang) (Bogod Clearwater, Serpentfang)

---

### Domain and Range

You can think of relations as an operation: you pass in an item from the __set__ on the left, and you get items from the set on the right as an output. Consider this relation:

| Input | | Output |
| :---: | | :----: |
| 14 |  | even |
| 3 |  | odd |
| 11 |  | odd |
| 6 |  | even |
| -6 |  | even |

The input set for the first example is {14, 3, 11, 6, -6}. Note that these numbers don’t have to be in order from least to greatest. The output set for this example is {even, odd}. Notice the elements even and odd are not repeated.


These input and output sets have special names. The complete set of all possible inputs is called [__domain__](gloss:domain). Similarly,  [__range__](gloss:range) is the set of all possible output values. We use the same curly brace notation in the example above.  Sometimes we use inequalities to communicate domain and range. We will look at this in more detail later. Use the tabs to answer the questions below.

TODO Interactive here

---

### Coordinate Systems

We have been using mapping diagrams, coordinate pairs, and tables to represent relations. Graphs are another way to visualize relations. We can note a few interesting things when we look at relations on the [__coordinate plane__](gloss:coordinate-system).

Let’s plot the relation {(0,0), (1,4), (-5,3), (-2,-1), (4, -3)} on the coordinate plane. Two points are already on the graph.

TODO Interactive here

TODO Tutor prompts here

Let’s look at the graphs of the relations we have been working with so far. Notice how the mapping diagram relates to the graph. The axes in the coordinate plane below take names other than x and y, the variables we’ve seen before. This graph, for instance, includes a name- and a house-axis.

TODO Interactive here

Using coordinate systems, it is also very easy to check whether a relation is many-to-many, or one-to-many. The many-to-one and many-to-many graphs have [[at least one | no]] points that share an x-value. The one-to-one and one-to-many graphs have [[no | at least one]] points that share an x-value.

Go through the coordinate system from left to right, and check if there are any two points connected by a vertical line. This means that they share the same x-value, so the relation is not many-to-one. This is called the vertical line test. The graphs that share an x-value seem like they could have a vertical line that connects [[two or more | none]] of their points.

TODO Interactive here

---

### Functions

In math, relations that are one-to-one or many-to-one are particularly important, and we will see many more examples in later chapters. That’s why they have a special name: Functions. A [__function__](gloss:function) is a rule that assigns each input to  [[exactly one | at least one]] output.

---

Let’s return to the Hoctagon relations. Using the definition of function, select the relations that are functions.

TODO Interactive here

---

We can think of functions as machines. Let’s look at the sorting hat machine to see how it works.

TODO Interactive here

---

Every function needs to have a name. Function notation tells us the name of the function, the input value, and the rule that gives us the output value.

Let’s say a function, we’ll call f, put top hats on inputs.

IMAGE

If we are given, f(🙊), we know the output is INSERT IMAGE. Similarly, if we know f(x)= INSERT IMAGE , we know the x is 🦊.

| Function Name | | Input Value | = | Output Value |
| :-----------: | |:---------: | :---:| :-------: |
|      _f_      | |      _(x)_ | = | value or expression|

Let’s use this pattern to describe the sorting hat function.

sortinghat(first year name) = house name

From the function notation above, we know that putting the sorting hat on a first year shows what house the first year is sorted into. This pattern is important to remember. The notation and expressions opposite the function name can sometimes distract us from remembering how to read function notation.

sortinghat({current user name}= [[{current user house} | not {current user house}1 | not {current user house}2  |not {current user house}3 ]]

sortinghat(Sturgis Switch) = [[{Sturgis Switch’s house} | not {Sturgis Switch’s house}1  | not {Sturgis Switch’s house}2 | not {Sturgis Switch’s house}3]]

Now let’s try some examples with algebraic expressions.
Let x=2 and f(x)=50-3x, find f(2). [[44]]

TODO optional text for incorrect answers

Here are a few more function machines. Can you work out what the rule is in each case?

TODO Interactive here

Just like before, we can visualise functions in a coordinate system. The value along the horizontal x-axis represents the input, and the value along the vertical y-axis represents the output.

TODO Interactive here

A domain and range may include more elements than those listed. We have to think about what would make a complete list of all inputs or outputs. For each of these examples, drag the numbers into the groups “possible input” or “impossible input”.

TODO Interactive here

Look at the graphs of the functions. Determine what outputs make sense and why.

::: column(width=300)

TODO coordinate plane

::: column.grow

The graph only appears in the [[1st]] quadrant. We can see that all output values must be [[positive | negative | zero]].

:::

::: column(width=300)

TODO coordinate plane

::: column.grow

The lowest y-value on the graph is about [[1250+-50 depending on scale]]. Let’s think about how we would figure out the highest y-value. If every student at the school bought a ticket, we would multiply [[student enrollment]] by $25 to calculate the highest possible y-value.

:::

--------------------------------------------------------------------------------


## Graphing and Interpreting Functions

> section: graphing
> sectionStatus: dev

{.todo} Coming Soon!


--------------------------------------------------------------------------------


## Linear Functions and Equations

> section: linear
> sectionStatus: dev

{.todo} Coming Soon!


--------------------------------------------------------------------------------


## Piecewise Functions

> section: piecewise
> sectionStatus: dev

{.todo} Coming Soon!


--------------------------------------------------------------------------------


## Absolute Value Functions

> section: absolute-value
> sectionStatus: dev

{.todo} Coming Soon!


--------------------------------------------------------------------------------


## Inverse Functions

> section: inverse
> sectionStatus: dev

{.todo} Coming Soon!


--------------------------------------------------------------------------------


## Rates of Change

> section: rates-of-change
> sectionStatus: dev
> id: fn-sketch

Draw a Function:

    x-coordinate-sketch(width=600 height=400 x-axis="-1,10,1" y-axis="-5,5,1")
      button.btn.clear Clear

Type some text:

    x-free-text(placeholder="Your answer…")

{.todo} Coming Soon!
