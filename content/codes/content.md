# Codes and Ciphers

## Introduction

> section: introduction
> id: intro
> goals: play

::: column.grow

In the early 2000s, the Colombian government was fighting a civil war against groups of insurgents,
who were hiding in camps in the South American rainforest. Occasionally, soldiers were captured by
these rebels, and then had to spend months or even years in captivity.

It is easy to lose hope when you’ve been chained up in a hostage camp for such a long time, unable
to see your family, and guarded by armed guerilla forces. However, in 2010, there was reason to
be hopeful: the army was approaching, and planning to rescue them shortly.

::: column(width=260)

    // https://depositphotos.com/97306690/stock-photo-jungle-in-colombian-green-mountains.html
    x-img(src="images/rainforest.jpg" width=260 height=320)

:::

Unfortunately, it seemed impossible to tell the prisoners that help was coming, without also
alerting their capturers – that is, until Colonel Jose Espejo came up with an ingenious idea. With
his team, he wrote a new pop song, embedded a secret message in the chorus, and then played it
thousands of times over the radio.

To the rebels, it sounded just like meaningless music, but to the prisoners listening in, it was a
message of hope. See if you can spot the message – it starts around 1:30.

    figure: iframe(width="100%" height=166 scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/184253099&color=%23295869&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&sharing=false&download=false&show_playcount=false")


---
> id: flashlight
> goals: flashlight

There are many other examples in our world, where we want to communicate with others, but we can’t
use our voices or text. Maybe your friend lives across the street from you. At night, you secretly
talk to each other using flashlights – without waking up your family by shouting.

::: column(width=300)

    x-img.window(src="images/window.png" width=300 height=280)
      img.flash(src="images/light.png" width=74 height=74)
    x-gesture(target=".window" offset="-80,-44")

::: column.grow

For example, one short flash might mean “hello” or “yes”. One long flash might mean “how are you?”,
and two short flashes might mean “good night”. Can you come up with any other signals you might
need?

{.reveal(when="flashlight")} However, even if you agree many different signals for different words
or questions, it will be difficult to have more complex conversations, or to talk about new topics…

:::

---
> id: telegraph
> goals: press

### Morse Code

In the early 19th century, the only way to transmit messages across long distances was my mail or
by messenger. Companies like the “Pony Express” ran delivery routes with couriers riding on horses,
but it could still take days or even weeks to send a message between distant cities.

This all changed in 1837, with the invention of the [__telegraph__](gloss:telegraph). Using electric
cables spanned across the country, it was possible to send messages almost instantly.

::: figure

    // https://commons.wikimedia.org/wiki/File:The_Overland_Pony_Express.jpg
    img(src="images/pony-express.jpg" width=525 height=260)

{.caption} The pony express next to a telegraph line under construction – a painting by _George
Ottinger_

:::

The first commercial telegraph was developed by William Forthergill Cooke and Charles Wheatstone,
and used compass needles to point at different letters on a display.

::: column.grow

One year later, the inventor [Samuel Morse](bio:morse), together with his assistant Alfred Vail, developed an even better version of the telegraph.

Pressing a button at one end of the telegraph line closes an electronic circuit. This means that
current is flowing, which triggers a buzzing sound at the other end of the telegraph line.

::: column(width=320)

    .telegraph
      img(src="images/telegraph-bg.jpg" width=320 height=210)
      img.handle(src="images/telegraph-handle.png" width=320 height=210)
      img.fg(src="images/telegraph-fg.png" width=320 height=210)
      svg(width=320 height=210): path(d="M-3.2,112.8c5.7-2.3,43.1-13.4,47.1-16.9l9.8-6.6c4.4-3.3,20.2-6.8,25.5-8.6,7.6-2,1.5-14.5,9.6-15,3.3.3,88.9,1.5,88.5,3a5.2,5.2,0,0,1,3.9,4.9V93.3a4.1,4.1,0,0,1-4,4.1l-92,.9a4.1,4.1,0,0,1-4.1-4c.1-3,.2-8.1-4.2-7.8l-24.2,1C40.1,89.4,30.2,106.2,22,114.6c-6.1,6.3-16.5,6.5-24.7,7.6")
    x-gesture(target=".telegraph" offset="108,-35")

:::

---
> id: morse

To send more complex messages, Morse represented every letter in the alphabet using a unique
sequence of short beeps (called dits or dots) and long beeps (called dahs or dashes):

    .alphabet
      for letter, index in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        div
         strong= letter
         x-morse(char=letter)

For example, to transmit the letter E, we just have to send one [[short beep|long beep]]. To send
the letter U, we have to send [[dot-dot-dash|dot-dash-dot|dash-dash-dot]]. Morse had invented a
new “language”, which we now call the [Morse code](gloss:morse-code).

---
> id: morse-1

::: column(width=280)

    // https://depositphotos.com/59221337/stock-photo-vintage-morse-telegraph-machine.html
    // alternative: https://americanhistory.si.edu/collections/search/object/nmah_1096762
    x-img(src="images/morse.jpg" width=280 height=300)

{.caption} This telegraph machine also records messages on a long strip of paper.

::: column.grow

Now we can send any message by first converting its letters into Morse code, and then tapping out
the corresponding dots and dashes on the telegraph.

One of Morse’s goals was to keep the messages as short as possible. This is why common letters
like E and T have a very short code, while uncommon letters like J or Q have much longer codes.

{.r} Morse code quickly became popular all around the world. Trained operators can send around 25
words per minute, which corresponds to six dots or dashes _every second_!
[Continue](btn:next)

:::

---
> id: morse-encoding
> goals: type

The most famous Morse code signal is “SOS”, which indicates that you have an emergency and need
help. It consists of three dots, followed by three dashes, followed by three more dots. Try
writing other words or sentences in this box, and watch how they are encoded as Morse code:

    x-code-box
      .input(contenteditable="true" spellcheck="false") SOS
      .output.morse

---
> id: radio
> goals: play

Morse code was also what the Colombian army used to send a message to the hostages. Translated from
Spanish, the message was _19 PEOPLE RESCUED. YOU’RE NEXT. DON’T GIVE UP._ Listen to the song once
more, and see if you can hear the dots and dashes in the background:

    figure: x-img(src="images/radio.png" width=225 height=220 style="margin-top: -24px")
      button.radio-play
    x-gesture(target=".radio-play")
    // TODO Show actual morse code while playing

---
> id: morse-applications
> goals: play

If you don’t know Morse code, this may just sound like part of the music – but the hostages were
soldiers who had been trained in Morse code, and recognized it in the song when they heard it on the
radio. A few days later, they were rescued and safely returned home.

It turns out that there were many other examples throughout history, where Morse code has been used
to communicate secret (or not so secret) messages:

::: column(width=220 parent="padded-thin")

    // https://depositphotos.com/310187600/stock-photo-capital-records-building.html
    x-img(src="images/capitol-records.jpg" width=220 height=280)
      .capitol-light

{.caption} The red warning light at the top of the _Capitol Records_ building in Los Angeles blinks
out the word _HOLLYWOOD_ in Morse code.

::: column(width=220)

    x-video(src="images/denton.mp4" poster="images/denton.jpg" width=220 height=280 audio)

{.caption} When captured during the Vietnam war, Navy pilot Jeremiah Denton blinks the word
_TORTURE_ in Morse, while being forced to record a propaganda video.

::: column(width=220)

    // https://www.wired.com/2012/01/british-pow-uses-morse-code-to-stitch-hidden-message-during-wwii/
    x-img(src="images/stitching.jpg" width=220 height=280 lightbox credit="David Fearn / newsteam")

{.caption} During World War II, a British prisoner was forced to create decorative stitchings like
this one. Can you find (and decipher) the hidden Morse code messages?

:::

---
> id: information

### Codes and Information

Wherever we look, we are surrounded by [__information__](gloss:information), like books and
newspapers, numbers and charts, photos, images, music, or movie clips.

A [__code__](gloss:code) is a rule or algorithm that can be used to express information in a certain
format. One example is our _alphabet_, which can be used to express language as a series of written
symbols (called _letters_). Another example we saw before is the [Morse code](gloss:morse-code),
which expresses words as sequences of [[dots and dashes|letters and spaces|radio music]].

---
> id: smoke-signals

But this is only the beginning, and there is a huge variety of codes that can be used for different
purposes, or to encode different kinds of information. In this course, we will explore some of the
most important and most interesting ones.

::: column.grow

Codes are not a recent invention – they were used by ancient cultures, many thousands of years ago.

For example, guards along the Great Wall of China used smoke to warn each other about potential
attacks. Different tribes of indigenous peoples in North American each had their own signalling
systems: they created columns of smoke by burning damp grass, which allowed them to communicate
over long distances.

{.r} Smoke signals are even used today, for example as a distress signal at sea. And when a new Pope
is elected by the College of Cardinals, the outcome of each vote is indicated by black or white
smoke. [Continue](btn:next)

::: column(width=280)

    x-img(src="images/smoke-signals.jpg" width=280 height=350 lightbox)
    // https://commons.wikimedia.org/wiki/File:John_Mix_Stanley_-_Indian_Telegraph.jpg

{.caption} Native American Smoke Signals – a painting by _John Mix Stanley_

:::

---
> id: flags

There are many other examples where words or letters are not the best way to express information.
Here are some other codes you might have heard of:

::: tab(parent="sticky")

#### Phonetic Alphabet _{span.check(when="blank-0")}_

Many letters sound very similar – especially when spoken over the phone or radio, with loud
background noise. That’s why the military, police, pilots, and many others use the __NATO Phonetic
Alphabet__ when they have to spell names. Here, every individual letter is replaced with a unique
word:

    - nato = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu']
    .alphabet
      for letter in nato
        div
         strong= letter[0]
         span= letter

For example, saying “Mike–Alpha–Tango–Hotel–Sierra” would spell the word [[Maths]].

::: tab

#### Maritime Flags _{span.check(when="blank-1")}_

Ships can use __Maritime Signal Flags__, which are hung from their masts, to communicate with other
ships within sight range.

::: column(width=320)

    x-img(src="images/maritime-flags-1.jpg" width=320 height=220 lightbox)
    // https://commons.wikimedia.org/wiki/File:Nautical_signal_flags_-_USS_Bonhomme_Richard_(LHD_6).jpg

{.caption} Storage for signal flags onboard a US Navy ship

::: column(width=320 parent="padded-thin")

    x-img(src="images/maritime-flags-2.jpg" width=320 height=220 lightbox)
    // https://depositphotos.com/39723603/stock-photo-colourful-signal-flags-on-a.html

{.caption} Decorative flags on a sailing boat

:::

All flags have different colours or patterns, and represent a different letter:

    .flags
      for l in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        div
          img(src=`images/maritime/${l.toLowerCase()}.svg` alt=l width=50 height=50)
          strong= l

For example, if you see the flags _{img(src="images/maritime/i.svg" width=20 height=20)}_
_{img(src="images/maritime/c.svg" width=20 height=20)}_ 
_{img(src="images/maritime/e.svg" width=20 height=20)}_ on a passing ship, you should
[[watch out for icebergs|give them assistance|reduce speed]].

::: tab

#### Flag Semaphore _{span.check(when="blank-2")}_

__Flag Semaphore__ is another way to communicate using flags, which was used long before the
invention of the telegraph. In this case, all flags are the same, but holding them in different
positions indicates different letters:

    // https://depositphotos.com/77499298/stock-illustration-semaphore-alphabet-flags-on-a.html
    .flags
      for l in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        div
          img(src=`images/semaphore/${l.toLowerCase()}.svg` alt=l width=90 height=80)
          strong= l

::: column.grow

The Beatles wanted to use Semaphore to spell the word “HELP” on the cover of their album with the
same name.

However, they didn’t like the way these specific letters looked – so they just chose four random
letters instead! As you can see, they ended up spelling the word [[rujv]]!

::: column(width=200)

    // https://en.wikipedia.org/wiki/File:Help!_(The_Beatles_album_-_cover_art).jpg - FAIR USE
    x-img.beatles(src="images/help-album.jpg" width=200 height=200 credit="© Parlophone")

:::
:::

---
> id: genetic

### The Genetic Code

Codes even appear inside our own body! The [DNA](gloss:dna) is a long [molecule](gloss:molecule)
that appears in every cell of your body, and contains the genetic instructions for how all living
organisms work. It consists of four different components, called _nucleotides_:

    .row.padded-thin
      for a in ['Adenine', 'Thymine', 'Cytosine', 'Guanine']
        div(style="width: 150px")
          img(src=`images/dna/${a.toLowerCase()}.svg` width=150 height=120)
          p.caption= a

::: column(width=260)

    // https://depositphotos.com/220660220/stock-photo-dna-spiral-molecule-high-detailed.html
    x-img(src="images/dna.jpg" width=260 height=380)

::: column.grow

A strand of DNA consists of billions of these _nucleotides_, which contain the instructions for
the development and functioning of our body. We can represent them using sequences of the letters
__{.m-red} A__, __{.m-blue} T__, __{.m-green} C__ and __{.m-yellow} G__.

Similar to Morse code, every three consecutive nucleotides correspond to a specific [_amino
acid_](gloss:amino-acid), a small component used by the cells in our body. For example,
__{.m-red}AA__**{.m-yellow}G** represents _Lysine_, an amino acid we consume by eating food like
eggs, meat or soybeans.

The genetic code has space for `4^3 = 64` amino acids (four options for each of the three
nucleotides in a triple), but only 20 are actually needed in our body.

:::

---
> id: intro-end

Finally, remember that the same symbol can mean completely different things within different codes.
For example, the letter _C_ can be represented by “Charlie” in the NATO Phonetic Alphabet, it could
be the maritime flag _{img(src="images/maritime/c.svg" width=20 height=20)}_, or it can represent
_Cytosine_ if placed within a strand of DNA letters.


----------------------------------------------------------------------------------------------------


## Binary Numbers

> section: binary
> id: transistor
> goals: switch
> sectionStatus: dev

Computers are all around us. You’re reading this on a computer right now! But how many people actually know how computers work? How many people, when they scroll through their social media feed, or search for a recipe, or stream a movie, actually know how the magic little box actually works?

There are many many complex layers and processes that operate together get information from all over the world and display it on your screen. But at the lowest level of every computer are [transistors](gloss:transistor). Transistors are the building blocks of how computers store and manipulate information.

::: column(width=320)

    .transist
      figure: include svg/transistor.svg

::: column.grow

Transistors are like tiny tiny tiny, microscopic electrical switches that transmit ELECTRONS. Turn it on, the electrons flow. Turn it off, the electrons stop (Does this sound familiar to another device? Perhaps the telegraph?).

But how can a simple on/off switch store information as complex as videos? We learned in the last chapter about Morse Code. But Transistors are interpreted by a computer through very different means.

:::

---
> id: finger5
> sectionStatus: dev

To understand how all sorts of different codes can be stored in the transistors of a computer, let’s try a thought exercise…


### Fingers

How high can you count using only one hand, without skipping any numbers? When we count with our hands, we traditionally use how many fingers are up to represent the number. We have five fingers, so that means the highest we can count with one hand is [[five|four|ten]].

{.TODO PHILIPP how to make them appear after entering value into blank?}


    button.appear APPEAR

    table.finger-grid
      tr
        for x in [1, 2, 3, 4, 5]
          td: div.bin-finger(padding="1px")
            x-img(src="images/fingers/decimal_"+x+".jpg" width=100 height=100)
            .caption= x

---

::: column.grow
A drawback of this strategy is that there are many unused finger combinations. For example, this finger combination to the right would represent [[2]]. With our traditional model there are two fingers up, so it means two. But we already have a configuration for two! We're wasting valuable space.

::: column(width=320)
    x-img(src="images/fingers/binary_17.jpg" width=320 height=320)
:::

---

There is a way that we can count much higher while still using only one hand, and this counting method will also help us understand how transistors store information. The secret lies in something called [binary numbers](gloss:binary-numbers). Instead of using the number of fingers up as our count, we have to do something a bit more complicated.

::: column.grow
We can treat each of our fingers as a __digit__ with one of two possible values: down or up. Down can represent the number __0__ and up can represent the number __1__.

::: column(width=200)

    table.finger-highlights
      tr
        td
          x-img(src="images/fingers/finger_0_highlight.png" width=100)
          .caption= 0
        td
          x-img(src="images/fingers/finger_1_highlight.png" width=100)
          .caption= 1
:::

If we want to use each combination of ups and downs to represent a different number, then how many combinations can we represent? (Link back to combinatorics).

---

{.todo PHILIPP please help! How to style a table, while also accepting inputs?}



    table.finger-combos
      tr
        td
          .head Number of fingers
        td
          .head Possible combinations
      - var i = 1
      while i <= 5
        tr
          td
            div= i
          td
            div.md [[#{2**i}]]
        - i+=1


| .head Number of fingers | .head Possible combinations. |
| 1 | [[2]] |
| 2 | [[4]] |
| 3 | [[8]] |
| 4 | [[16]] |
| 5 | [[32]] |

More generally, with N fingers we can represent [[2^N]] possible combinations. Remember that our fingers are merely serving as a metaphor for binary numbers. This means that __any N-digit number can represent up to 2^N different values__.


---

### 1s and 0s
> id: bracket

Recalling our lesson on [probability trees](link/to/course), with each finger that we add our number of options multiplies by two.

    svg.bracket(width=600 height=320)
      - var textb = 4
      g#b1
        - var i = 0
        - xMin = 0
        - xMax = 100
        while i < 1 
          - yHorizontal = 165+i*320
          line(x1=xMin y1=yHorizontal x2=xMax y2=yHorizontal target="yes")
          -i += 1
      g#b2
        - var i = 0
        - xMin = 100
        - xMax = 200
        while i < 2 
          - yHorizontal = 85+i*160
          - yToMid = i%2 == 0 ? 80 : -80
          - cl = i==1 ? "yes" : "no" 
          line(x1=xMin  y1=yHorizontal         x2=xMax   y2=yHorizontal target=cl)
          line(x1=xMin  y1=yHorizontal+yToMid  x2=xMin   y2=yHorizontal target=cl)
          text(x=(xMin+xMax)/2 y=yHorizontal-textb font-size=40 target=cl)= i%2
          -i += 1
      g#b4
        - var i = 0
        - xMin = 200
        - xMax = 300
        while i < 4
          - yHorizontal = 45+i*80
          - yToMid = i%2 == 0 ? 40 : -40
          - cl = i==2 ? "yes" : "no"
          line(x1=xMin  y1=yHorizontal         x2=xMax  y2=yHorizontal target=cl)
          line(x1=xMin  y1=yHorizontal+yToMid  x2=xMin  y2=yHorizontal target=cl)
          text(x=(xMin+xMax)/2 y=yHorizontal-textb font-size=30 target=cl)= i%2
          -i += 1
      g#b8
        - var i = 0
        - xMin = 300
        - xMax = 400
        while i < 8
          - yHorizontal = 25+i*40
          - yToMid = i%2 == 0 ? 20 : -20
          - cl = i==5 ? "yes" : "no"
          line(x1=xMin  y1=yHorizontal         x2=xMax  y2=yHorizontal target=cl)
          line(x1=xMin  y1=yHorizontal+yToMid  x2=xMin  y2=yHorizontal target=cl)
          text(x=(xMin+xMax)/2 y=yHorizontal-textb font-size=20 target=cl)= i%2
          -i += 1
      g#b16
        - var i = 0
        - xMin = 400
        - xMax = 500
        while i < 16
          - yHorizontal = 15+i*20
          - yToMid = i%2 == 0 ? 10 : -10
          - cl = i==11 ? "yes" : "no"
          line(x1=xMin  y1=yHorizontal         x2=xMax  y2=yHorizontal target=cl)
          line(x1=xMin  y1=yHorizontal+yToMid  x2=xMin  y2=yHorizontal target=cl)
          text(x=(xMin+xMax)/2 y=yHorizontal-textb font-size=16 target=cl)= i%2
          - i += 1
      g#b32
        - var i = 0
        - xMin = 500
        - xMax = 600
        while i < 32
          - yHorizontal = 10+i*10
          - yToMid = i%2 == 0 ? 5 : -5
          - cl = i==22 ? "yes" : "no"
          line(x1=xMin  y1=yHorizontal         x2=xMax  y2=yHorizontal target=cl)
          line(x1=xMin  y1=yHorizontal+yToMid  x2=xMin  y2=yHorizontal target=cl)
          text(x=(xMin+xMax)/2 y=yHorizontal-1 font-size=12 target=cl)= i%2
          - i += 1


    x-slider.bracket(steps=6 speed=0.5)

We can represent any five-digit binary number by following any path from beginning to end. For example, this is the binary sequence for [10110](target:yes).

{.todo // PHILIPP help make this pointer look good}

---

#### Fingers
> id: finger32

Yes, there are [[32]] different combinations we can make with five fingers.

    x-select.segmented
      div Decimal
      div Binary
    table.finger-grid   
      for b0 in [0, 1]
        for b1 in [0, 1]
          tr
            for b2 in [0, 1]
              for b3 in [0, 1]
                for b4 in [0, 1]
                  - var n = b0*16 + b1*8 + b2*4 + b3*2 + b4*1
                  // FINGERFADE: make this binary
                  td: div.bin-finger(padding="1px")
                    x-img(src="images/fingers/binary_" + (n < 10 ? "0"+n : n) + ".jpg" width=64 height=64)
                    .caption.dec= n
                    .caption.bin= ""+b0+b1+b2+b3+b4
          

    button.appear APPEAR
    button.switch SWITCH
    // delete these buttons. Replace APPEAR w/ .reveal, SWITCH w/ .segmented


{.TODO PHILIPP how to make them appear after entering value into blank?}

(we'll find out soon why we started with zero).
Click on the [SWITCH](->.switch) button to toggle between our binary values and their decimal counterparts. These are the values

---

{.todo} Transistors


Now that we have learned a bit about how we can represent different values by strings of 0s and 1s, let's tie this back to transistors. Recall how in our morse code/flashlight examples we were constrained by our medium’s ability to be on or off. Computers store data in transistors, so they store data as a collection of ons and offs, or 1s and 0s. Just like we just did with our fingers (by putting them up or down). If a computer had fingers, they would probably count to 31 on one hand. Everything that’s stored on a computer, from text and images to video and sound is stored in transistors as sequences of 1s and 0s, or binary code.

Another way we can imagine these transistors is with a series of lights. 

    table.led-binary
      tr
        for x in [1, 0, 0, 1, 1, 0, 1, 1]
          - var on = x===1 ? 'on' : 'off'
          td: div.led(padding="1px")
            x-img(src="images/light_"+on+".png")


This is how the sequence _{.ns.g}10011011_ would be stored.


---

### Binary to Base-Ten

Before we can understand how computers use binary code to store complex things like sound and video, we must first understand the basics, like how a base-ten number is stored.

Our number system operates as a [base ten](gloss:base-10) number system. Base ten numbers have ten possible values for each digit. 0 1 2 3 4 5 6 7 8 and 9. In a base-ten number, each digit is worth ten times as much as the previous smaller digit. The first right-most digit represents how many [[ones|tens|twos]] there are, the second right-most digit represents how many [[tens|hundreds|fives]] there are, and so on.

The value represented by each digit is the digit number times the value of the digit. So A four in the hundreds place represents the value [[400]].

| __number__ | __hundreds value__ | __tens value__ | __ones value__ |
| 432 | [[400]] | [[30]] | [[2]] |
| 907 | [[900]] | [[0]] | [[7]] |
{.table-small.grid}

To find the value of a base ten number, we add up the values of each digit!

---

Binary numbers work very similarly except they use a base-two number system. So instead of ten possible digit values, they only have 2. Each consective digit is worth [[twice|three times|ten times]] as much as the previous digit. And because in a binary number each digit can either be __1__ or __0__, each digit value can be either __on__ or __off__.

Let's examine the binary number _{.ns.g}11111_ (5 consecutive 1s). How much is each digit worth?

| __{.m-red}digit__ | 1 | 1 | 1 | 1 | 1 |
| __{.m-green}digit value__   | {.s-green}_{.n}[[16]]_ | {.s-green}_{.n}[[8]]_ | {.s-green}_{.n}[[4]]_ | {.s-green}_{.n}[[2]]_ | {.s-green}_{.n}[[1]]_ |
{.table-small.grid}

---

We can find the decimal value of this binary number _{.ns.g}11111_ by adding up the digit values. So its value is _not_ eleven thousand, one-hundred and eleven, but is 

{.text-center.s-red} _{.n}16_ + _{.n}8_ + _{.n}4_ + _{.n}2_ + _{.n}1_ = _{.n}[[31]]_

---

Here are some 6-digit binary numbers. Let's convert them to decimal by first writing the values of each digit, and then adding the digits together.

{.text-center.s-purple} _{.ns}100110_ = _{.n}[[32]]_ + _{.n.z}0_ + _{.n.z}0_ + _{.n}[[4]]_ + _{.n}[[2]]_ + _{.n.z}0_ = _{.n}[[38]]_

{.text-center.s-yellow} _{.ns.y}111000_ = _{.n}[[32]]_ + _{.n}[[16]]_ + _{.n}[[8]]_ + _{.n.z}0_ + _{.n.z}0_ + _{.n.z}0_ = _{.n}[[56]]_

{.text-center.s-teal} _{.ns.g}101011_ = _{.n}[[32]]_ + _{.n.z}0_ + _{.n}[[8]]_ + _{.n.z}0_ + _{.n}[[2]]_ + _{.n}[[1]]_ = _{.n}[[43]]_


When computers (including digital calculators) add and subtract numbers, this is how the numbers are represented at the level of the transistor!

---

### Converting Base-Ten to Binary
> id: dec2bin

Now that we know how to convert a binary to decimal, how can we convert a decimal to a binary number? This solution is not as obvious. Follow the animation below to visualize how to break a decimal number into binary digits.

Imagine a conveyor belt that slides a large block of a gelatin-like material. This block has a length of a discrete integer. Along the conveyor belts are claws that can only fit the size of 2^N multiples. The claw will ONLY pick up a slice of its exact size, and will subtract it from the block. The block slides along until it has gone under each and every one of the claws (digits).

{.fixme} make this design more consistent with the rest of Mathigon.
{.fixme} there is potential to make the text in the slide legends point to the diagram (see third slide)

    x-slideshow
      .stage.cheesecake(slot="stage")
        figure: include svg/ch.svg
      .legend(slot="legend") We have a full block of length #[strong 25].
      .legend(slot="legend") We always start with the leftmost digit. In this case, 16 is the largest power of 2 that can fit into 25. So first we test the #[strong 16s] place.
      .legend(slot="legend") We can subtract 16, so we write a [1 in the 16s place](->.#digit16). We're left with #[strong 9].
      .legend(slot="legend") Next we test the #[strong 8s] place. 
      .legend(slot="legend") We can subtract 8, so we write a #[strong 1] in the 8s place. We're left with #[strong 1].
      .legend(slot="legend") Next we test the #[strong 4s] place.
      .legend(slot="legend") We cannot subtract 4, so we write a #[strong 0] in the 4s place.
      .legend(slot="legend") Next we test the #[strong 2s] place.
      .legend(slot="legend") We cannot subtract 2, so we write a #[strong 0] in the 2s place.
      .legend(slot="legend") Next we test the #[strong 1s] place.
      .legend(slot="legend") We can subtract 1, so we write a #[strong 1] in the 1s place. We're left with 0, and we are finished.


{.fixme} I'm not sure exactly how to format this, Could just leave as is, or could do as a proof (see below).

Here is that simple method put into steps. 
When converting decimal number N into binary:
1. Start with the highest power of 2^n, d, that you can subtract from N. 
2. If you can subtract d from N, then write a 1 in that place and continue with N = N - d.
3. If you cannot subtract d from N, then write a 0 in that place and continue with N = N.
4. Divide d by 2 to get the next digits place.
5. Repeat steps 2 through 4 until you have written the 1s place.

{.fixme} I don't think "proof" is the right format, but it should look something like this.
Here are the steps generalized:

    ol.proof
      li Find the highest power of 2 that you can subtract from #[em N], let's call it #[em d]
      li Subtract #[em d] from #[em N] to get how much you have left. Write a 1 in the first digit. Let's call this value #[em N']
      li Divide #[em d] by 2 to get the next digits place. This will always be the next highetst power of 2.
      li If you can subtract #[em d] from #[em N'] (if N' > d), then do so and go back to Step 2. Otherwise, do not subtract and write a 0.
      li Repeat steps #[span.proof-step 3] and #[span.proof-step 4] until you've done all digits.

---

### Other places you might find binary patterns.

If you look around, you can find patterns related to binary numbers in computers, and in some other unexpected places!


::: column(width=160 parent="padded-thin")

    x-img(src="images/smartphone.png" width=160 height=160 alt="Color Hex Codes")

::: column(width=400)

When you’re looking to buy any digital device with memory like a Smartphone, Tablet, Computer, or SD Card the options often come with __Memory__ options that are a power of 2, like 16GB, 32GB, or 64GB.


::: column(width=160 parent="padded-thin")

    x-img(src="images/colors_mathigon.png" width=160 height=160 alt="Color Hex Codes")

::: column(width=400)

 __Colors__ on computers are stored using a combination of letters and numbers. This is another base system called __hexadecimal__, which is a base-16 system. Each color has a Red, a Green, and a Blue value, each of which is a number between 0 and 255.


::: column(width=160 parent="padded-thin")

    x-img(src="images/whatsapp.png" width=160 height=160 alt="Color Hex Codes")

::: column(width=400)

In 2016, the messaging app __WhatsApp__ increased the maximum number of possible users in a single group to 256 (2^8).


::: column(width=160)

    x-img(src="images/ncaa_tourney.png" width=160 height=160 alt="Bracket")

::: column(width=400)

 Many sports tournaments start with a number of teams that is a power of two. The __NCAA Basketball Tournament__ begins with 64 (2^6) teams and has rounds called “The Sweet Sixteen”, “The Elite Eight”, and “The Final Four” (each of which is a power of two!).

::: column(width=160)

    x-img(src="images/i-ching.png" width=160 height=160 alt="I-ching")

::: column(width=400)

The __I-Ching__ is an ancient Chinese divination text. It contains 64 different "Hexagrams", each of which is made up of six horizontal lines which can be either solid (Yang) or divided (Yin). 

:::


### Conclusion
{.todo} Conclusion


Now that you've learned about binary numbers, you can make this joke to your friends:

{.fixme} Make this bigger and centered.

__There are only 10 types of people in the world:__
__those who understand binary,__
__and those who don't.__


----------------------------------------------------------------------------------------------------


## Error Detection 

> section: error-detection
> sectionStatus: dev

### Introduction

{.todo} Satellite Communications

{.fixme} We send satellites _very far away_. Voyager 1 is now _13 billion miles_ away from Earth. NASA spent three years making this satellite, investing millions of dollars and millions of work-hours into its creation.... etc

{.todo} animation of a satellite streaming bits to a receiver on Earth.

---

> section: error-detection
> sectionStatus: dev
> id: barcode-intro

### Bar Codes

{.todo} Bar Code

    div
      .quote
        I remember I was thinking about dots and dashes when I poked my four fingers into the sand and, for whatever reason--I didn't know--I pulled my hand toward me and I had four lines. I said 'Golly! Now I have four lines and they could be wide lines and narrow lines, instead of dots and dashes. Now I have a better chance of finding the doggone thing.' Then only seconds later, I took my four fingers--they were still in the sand--and I swept them round in a circle.
      .author
        Joe Woodland, inventor of the Bar Code

#### So how does it work?

{.fixme} Each bar code is a 12-digit number. See here that we can read the numbers written on the bottom. But how does a computer read it?

{.todo} image/interaction of a bar code

---

#### Bar code values

> id: barcode-drawing

Look at this barcode.

    x-barcode(value="012345678901")

The guards are on the [{.step-target.pill.b.red}outside](target:.bar-start) and in the
[{.step-target.pill.b.red}center](target:.bar-middle).
The first six digits are on the [{.step-target.pill.b.blue}left](target:.bar-left).
The last six digits are on the [{.step-target.pill.b.green}right](target:.bar-right).

__The Guards__

| LEFT | CENTER | RIGHT |
| --- | --- | --- |
| 101 | 01010 | 101 |

__The Digits__

| LEFT SIDE | | RIGHT SIDE | |
|---|---|---|---|
| 0 | 0001101 | 0 | 1110010 |
| 1 | 0xxxxx1 | 1 | 1xxxxx0 |

---

### Hamming Codes

{.todo} Hamming Codes

---

### Other Error Detection and Correction

{.todo} CDs and DVDs


----------------------------------------------------------------------------------------------------


## Secret Codes

> section: cryptography
> sectionStatus: dev

    // http://plus.maths.org/content/cracking-codes
    // http://plus.maths.org/content/exploring-enigma

The science of creating secret codes is called __Cryptography__ and the are of
breaking them is called __Cryptanalysis__.

When designing ciphers, there are several possible objectives:

* __Secrecy:__ A and B can be sure that no third party X can read the message.
* __Integrity:__ A and B can be sure that no third party X can alter the message
  while it is being transmitted.
* __Secrecy:__ B can be sure that the message actually comes from A, and not
  from some impostor.

Length of security (hours, years), level of security

---
> id: caesar_cipher

### The Caesar Cipher

https://plus.maths.org/content/cracking-codes

The diagram below shows how plaintext letters [{.letter.plain} *] are converted
into cipher letters [{.letter.cipher} *]. The chart also shows the relative
frequency of every letter in your text, as well as the entire english language.

Once you know the pattern the Caesar cipher is very easy to break: you just have
to try all <25> possibilities. Try to decode the following secret messages:

{.todo} TODO

---

### Substitution Cipher

It is not hard to make the Caesar cipher more secure: rather than shifting the
letters we could scramble all of them randomly. Now there are not only 25 but
26! = 403,291,461,126,605,635,584,000,000 possibilities. Even using a computer
it would take very long to check all possible combinations.

{.todo} Substitution Cipher Encoding Interactive

---

But it turns out that if we have a sufficiently long section of text, even the
substitution cipher is easy to crack – using what we know about the language of
the original plaintext.

In every language, some letters are more common than others. This means that the
ciphertext should also contain some letters more often than others.

{.todo} Substitution Cipher Decoding Setp-by-step demo

---

Now it is your turn: try decoding the following messages which have been encoded 
using substitution ciphers:

{.todo} Substitution Cipher Decoding Interactive

---

### One Time Pads

{.todo} TODO

---

### The Vigenère Cipher

{.todo} TODO


----------------------------------------------------------------------------------------------------


## The Enigma

> section: enigma
> sectionStatus: dev

http://plus.maths.org/content/exploring-enigma
https://www.youtube.com/watch?v=mcX7iO_XCFA

{.todo} TODO

    include ./components/enigma
    x-enigma


----------------------------------------------------------------------------------------------------


## Public Key Cryptography

> section: rsa
> sectionStatus: dev

{.todo} TODO
