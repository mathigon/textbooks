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

---

## Barcode
> section: barcode
> sectionStatus: dev
> id: barcode

Here we will look at a barcode

    include ./components/barcode
    x-barcode

Where is the barcode?