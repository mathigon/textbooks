# Testing

## Unit 1
> section: unit-1
> sectionStatus: dev

    p Please point at   <em id="pointed" style="color: green;">this word</em>

    p Blah blah <em id="pointed" style="color: green;">blah</em>.

Blah blah blah.

Blah blah blah.

Hey I'm gonna point at that thing when you hover over [here](->#pointed).

---
> section: morse-demo
> sectionStatus: dev
> id: morse-demo

## Morse Demos

    div.wtf
      .typeout
    div
      table.emoji-table
        tr.hearts
          td: button.dot DOT
          td: button.dash DASH
          td: button.letter LETTER
          td: button.word WORD

    .button.translate TRANSLATE

    div.output

---
> section: telegraph
> id: telegraph
### Look at this Telegraph

Here tap the telegraph.


    figure: include svg/telegraph.svg

---
> section: bracket
> sectionStatus: dev
> id: bracket

## Introducing Binary Digits

With each finger that we add, our number of options multiplies by two.

    svg.bracket(width=600 height=320)
      - var textb = 4
      g#b32
        - var i = 0
        while i < 32
          line(x1=500 y1=10+i*10 x2=600 y2=10+i*10)
          line(x1=500 y1=10+i*10+(i%2==0?5:-5) x2=500 y2=10+i*10)
          text(x=550 y=10+i*10-1 font-size=12)= i%2
          - i += 1
      g#b16
        - var i = 0
        while i < 16
          line(x1=400 y1=15+i*20 x2=500 y2=15+i*20)
          line(x1=400 y1=15+i*20+(i%2==0?10:-10) x2=400 y2=15+i*20)
          text(x=450 y=15+i*20-textb font-size=16)= i%2
          - i += 1
      g#b8
        - var i = 0
        while i < 8
          line(x1=300 y1=25+i*40 x2=400 y2=25+i*40)
          line(x1=300 y1=25+i*40+(i%2==0?20:-20) x2=300 y2=25+i*40)
          text(x=350 y=25+i*40-textb font-size=20)= i%2
          -i += 1
      g#b4
        - var i = 0
        while i < 4
          line(x1=200 y1=45+i*80 x2=300 y2=45+i*80)
          line(x1=200 y1=45+i*80+(i%2==0?40:-40) x2=200 y2=45+i*80)
          text(x=250 y=45+i*80-textb font-size=30)= i%2
          -i += 1
      g#b2
        - var i = 0
        while i < 2
          line(x1=100 y1=85+i*160 x2=200 y2=85+i*160)
          line(x1=100 y1=85+i*160+(i%2==0?80:-80) x2=100 y2=85+i*160)
          text(x=150 y=85+i*160-textb font-size=40)= i%2
          -i += 1
      g#b1
        - var i = 0
        while i < 1
          line(x1=0 y1=165+i*320 x2=100 y2=165+i*320)
          -i += 1


    x-slider.bracket(steps=6 speed=0.5)

We can get our five-digit binary number by following any path from beginning to end.

---
> section: flower
> sectionStatus: dev
> id: flower

## New page for flowers

::: column(width=300)

    svg.petals(width=300 height=300)
      circle(r=1 cx=150 cy=150)
      - var i = 0
      while i < 40
        path(d="M166,158A20,20,0,0,1,150,150a20,20,0,0,1,32,0A20,20,0,0,1,166,158Z")
        - i += 1

    x-slider.flower(steps=39 speed=0.5)

:::


- a table for filling in digit values
- ???

---
> section: bin2dec
> sectionStatus: dev
> id: bin2dec

## Converting Binary to Decimal

See how to do multiple step thingies in // ALGEBRA:

Could do this, but plenty of other things I could do...


---
> section: cheesecake
> sectionStatus: dev
> id: cheesecake

## Converting Decimal to Binary

How do we convert from decimal to binary? Follow the animation below.

    x-slideshow
      .stage.cheesecake(slot="stage")
        figure: include svg/ch.svg
      .legend(slot="legend") We have a full block of length 25.
      .legend(slot="legend") We always start with the leftmost digit. In this case, 16 is the largest power of 2 that can fit into 25. So first we test the 16s place.
      .legend(slot="legend") We subtract 16, so we write a *1* in the 16s place. We're left with 9.
      .legend(slot="legend") Next we test the 8s place. 
      .legend(slot="legend") We can subtract 8, so we write a *1* in the 8s place. We're left with 1.
      .legend(slot="legend") Next we test the 4s place.
      .legend(slot="legend") We cannot subtract 4, so we write a *0* in the 4s place.
      .legend(slot="legend") Next we test the 2s place.
      .legend(slot="legend") We cannot subtract 2, so we write a *0* in the 2s place.
      .legend(slot="legend") Next we test the 1s place.
      .legend(slot="legend") We can subtract 1, so we write a *1* in the 1s place. We're left with 0.


Here is that simple method put into steps. 
// BUTTER: format it
When converting decimal number N into binary:
1. Start with the highest power of 2^n, d, that you can subtract from N. 
2. If you can subtract d from N, then write a 1 in that place and continue with N = N - d.
3. If you cannot subtract d from N, then write a 0 in that place and continue with N = N.
4. Divide d by 2 to get the next digits place.
5. Repeat steps 2 through 4 until you have written the 1s place.

---
> section: binary-demo
> sectionStatus: dev
> id: binary-demo

## Binary Demos

  // how do I... put inputs inside of a table?
    table
      tr
        td [[1]]
        td hello
      tr
        td okay
        td bye

---
> section: transistor
> sectionStatus: dev
> id: transistor

## Transistors

    figure: include svg/transistor_on.svg

    button.transistor SWITCH

---
> section: unit-2x
> sectionStatus: dev
> id: emoji-board

## Emoji Codes

    mixin codeTable(base, emojis, letters)
      table(class=attributes.class)
        tr
          td
          -var e= 0
          while (e < base)
            td= emojis[e]
            - e+= 1
        - var r = 0
        while (r < base)
          tr
            -var d = 0
            td= emojis[r]
            while (d < base)
              td= letters[r*base + d]
              -d += 1
          - r += 1

          
### Section 1.0
##### Let's do some table stuff

    - var hearts = ['💙', '💚', '💛', '💜', '🧡']
    - var fruit = ['🍏', '🍎', '🍐', '🍊', '🍋']
    - var sports = ['⚽️', '🏀', '⚾️', '🏈', '🥎']
    - var books = [ '📕', '📗', '📘', '📙', '📒'];

    - var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z']
    +codeTable(5, hearts, letters)(class="hearts")
    +codeTable(5, fruit, letters)(class="fruit")
    +codeTable(5, sports, letters)(class="sports")
    +codeTable(5, books, letters)(class="books")


##### Pick a theme and write with emojis to create a code.

    div.wtf
      p: select
        option(value="hearts", selected) Hearts 💙💚💛
        option(value="sports") Sports ⚽️🏀⚾️
        option(value="fruit") Fruit 🍎🍊🍐
        option(value="books") Books 📕📗📘
      .typeout
      // EMOJI: (1) this could be a m1x1n (see divisibility)
    div
      table.emoji-table
        tr.hearts
          td: button.emoji 💙
          td: button.emoji 💚
          td: button.emoji 💛
          td: button.emoji 💜
          td: button.emoji 🧡
          td: button.back 🔙
          td: button.clear 🚫
        tr.sports
          td: button.emoji ⚽️
          td: button.emoji 🏀
          td: button.emoji ⚾️
          td: button.emoji 🏈
          td: button.emoji 🥎
          td: button.back 🔙
          td: button.clear 🚫
        tr.fruit
          td: button.emoji 🍏
          td: button.emoji 🍎
          td: button.emoji 🍐
          td: button.emoji 🍊
          td: button.emoji 🍋
          td: button.back 🔙
          td: button.clear 🚫
        tr.books
          td: button.emoji 📕
          td: button.emoji 📗
          td: button.emoji 📘
          td: button.emoji 📙
          td: button.emoji 📒
          td: button.back 🔙
          td: button.clear 🚫

    .button.translate TRANSLATE

    div.output

---
> section: barcode
> sectionStatus: dev
> id: barcode

// BARCODE:... can I make a special element?

---
>id: raaace

## Misc
### Section 1.1

{.todo} TODO do something

I wonder what will happen?

    figure: include svg/raaace.svg

---

### Section 1.2

{.todo} TODO do something else

---

## Unit 2
> section: unit-2
> sectionStatus: dev

### Section 2.1

    // BINPATTERN: mimic selector for binpatterns
    .frame.fill(sytle="padding: 20px")
    p(style="margin: 0"): strong hello
    include svg/graphs.svg
    p: select
      option(value="val", selected) Colour by value
      option(value="size") Colour by small and large
      option(value="prime") Colour by prime and composite
      option(value="eo") Colour by even and odd

{.todo} TODO do something

---
## Kri8it
> section: kri8it
> sectionStatus: dev
> id: kri8it

### Fun experimenting with SVG
This is a painting by a local Pittsburgh artist, [Brad Bianchi](https://www.instagram.com/krii8it/)

    x-media.background(src="images/kri8it.png" width=220 height=220)

It looks quite like a graph, doesn't it?

    p(style="margin: 0"): strong What if we animate a dot to run around it?
    .button Press Me
    // KRI8: how to get the actual painting underneath??? oh well, leave it for another time
    include svg/kri8it_paths.svg
    // x-media.background(src="images/kri8it.png")

---

## Algebra Solver
> section: algebra
> sectionStatus: dev
> id: algebra

### Let's use the Algebra Solver

    // HAMMING: can this be used for just making new equations? not algebra? 
::: x-algebra-flow

`input(1, "p1") = input(0, "p2")`

* Do a thing!
* Do another thing!
* Yay!

:::

---
## Hamming Codes
> section: hamming
> sectionStatus: dev
> id: hamming

    // HAMMING: next mimic a quiz

In this short game you have to determine the parity of a binary number, as fast as possible. Click the play button to start.

    // HAMMING: next
    .box.problem-box
      .box-title: h3 Parity Quiz
      x-gameplay.box-body
        .parity-row
          .parity-bin-number ${bin}
          | has parity value
          .parity-value
            .parity-bubble: .btn.btn-blue 0
            .parity-bubble: .btn.btn-blue 1


// HAMMING:
- see HAMMING in triangles to animate numbers moving (I also did this with cheesecake)
- 
---

## Barcode
> section: barcode
> sectionStatus: dev
> id: barcode

Here we will look at a barcode

    include ./components/barcode
    x-barcode

Where is the barcode?