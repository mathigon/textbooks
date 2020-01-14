# Codes and Ciphers

    // SOURCES:
    // http://plus.maths.org/content/cracking-codes
    // http://plus.maths.org/content/exploring-enigma
    // http://nrich.maths.org/2198

## Simple Codes

> section: introduction
> sectionStatus: dev

    // QUESTION: how does the function fn get added to this???
    // ANSWER: "badge" is something that pops up in the top right corner... not changes actual value
    // QUESTION: this only takes numbers or something
    mixin grid(n, bin, fn)
      .number-grid
        - var i = 0
        while i < n
          .number-cell= bin(i)
            if fn
              - var badge = fn(i)
              if badge
                .number-badge= badge
          - i += 1


---

### Binary Codes

How high can you count with only one hand? When people count with their hands, they traditionally use the number of fingers up to represent the number they are on. We have five fingers, so that means the highest you can count is to [[five|four|fifteen]].

{.todo} TODO make this do the delayed appear.

::: column(width=100)
    x-media(src="images/binary_01.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_03.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_07.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_15.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_31.jpg" width=100 height=100)
:::

1, 2, 3, 4, 5.

What if I told you that there was a way you could count way higher using only one hand? The secret lies in something called **binary numbers**. Instead of using the number of fingers sticking up as our count, we have to do something a bit more complicated. We can treat each of our fingers as a _digit_ (tee-hee) with one of two possible values: up or down. Up can represent **1** and down can represent **0**.

With two possible values for each digit, and five digits, how many possible number values can we represent this way? If we had two fingers, there would be [[4|2|3]] possible values. If we had three fingers, there would be [[8|6|9]] possible values. So with our five fingers, we have [[32|16|8]] possible values (this could be easier).
(make sure next part doesn't show up until mc questions)

---

#### Fingers

Look at all the different values we can represent using our fingers.

// FINGERFADE: how can we make this fade?

::: column(width=100 parent="padded-thin")
    x-media(src="images/binary_00.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_01.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_02.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_03.jpg" width=100 height=100)

::: column(width=100 parent="padded-thin")
    x-media(src="images/binary_04.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_05.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_06.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_07.jpg" width=100 height=100)

::: column(width=100 parent="padded-thin")
    x-media(src="images/binary_08.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_09.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_10.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_11.jpg" width=100 height=100)

::: column(width=100 parent="padded-thin")
    x-media(src="images/binary_12.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_13.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_14.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_15.jpg" width=100 height=100)

::: column(width=100 parent="padded-thin")
    x-media(src="images/binary_16.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_17.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_18.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_19.jpg" width=100 height=100)

::: column(width=100 parent="padded-thin")
    x-media(src="images/binary_20.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_21.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_22.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_23.jpg" width=100 height=100)

::: column(width=100 parent="padded-thin")
    x-media(src="images/binary_24.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_25.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_26.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_27.jpg" width=100 height=100)

::: column(width=100 parent="padded-thin")
    x-media(src="images/binary_28.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_29.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_30.jpg" width=100 height=100)
::: column(width=100)
    x-media(src="images/binary_31.jpg" width=100 height=100)

:::

---


Now the question is... how do we know which hand represents each number value?

{.todo} TODO how can we make this a table of binary numbers?
1: cap row at 8
2: convert decimal to binary


Binary numbers are like decimal numbers but instead of using ten possible digit values, there are only [[two|three|four]] of them.

---

Binary numbers were NOT invented by [Alan Turing](bio:turing) and [Charles Boole](bio:boole), but both of their works were related to it. Binary numbers are especially useful because they can be understood by computers. Computers are built out of these microscopic things called **transistor** that store on/off values. 1s and 0s! Everything a computer stores, from text and images to video and sound is stored as sequences of 1s and 0s.

---
> id: race5

#### Converting Decimals to Binary Numbers

Now we have a simple method for converting a decimal to a binary number.

    ol.proof
      li Subtract highest power of `2^n`
      li If you can subtract it, append a `1`. If not, append a `0`.

We can use the same method to find the binary values of these three numbers,
like __{.m-blue}28__, __{.m-green}21__ and __{.m-yellow}7__:

    table.table-tiny
      tr
        td: .number-square.blue 28
        td: | =
        td: .number-square.l-blue 16
        td: | +
        td: .number-square.l-blue 8
        td: | +
        td: .number-square.l-blue 4
      tr
        td: .number-square.green 21
        td: | =
        td: .number-square.l-green 16
        td(colspan=3): | +
        td: .number-square.l-green 4
        td(colspan=3): | +
        td: .number-square.l-green 1
      tr
        td: .number-square.yellow 7
        td: | =
        td(colspan=4)
        td: .number-square.l-yellow 4
        td: | +
        td: .number-square.l-yellow 2
        td: | +
        td: .number-square.l-yellow 1

Therefore the binary value of  __{.m-blue}28__ is [[11100]].
The binary value of __{.m-green}21__ is [[10101]].
The binary value of  __{.m-yellow}7__ is [[00111]].

    //- TODO Exercises
---

#### Binary to Decimal

    table.table-tiny
      tr
        td: .number-square.blue 100110
        td: | =
        td: .number-square.blue 32
        td: | +
        td: .number-square.l-blue 0
        td: | +
        td: .number-square.l-blue 0
        td: | +
        td: .number-square.blue 4
        td: | +
        td: .number-square.blue 2
        td: | +
        td: .number-square.l-blue 0
        td: | =
        td: .number-square.blue 38
      tr
        td: .number-square.yellow 111000
        td: | =
        td: .number-square.yellow 32
        td: | +
        td: .number-square.yellow 16
        td: | +
        td: .number-square.yellow 8
        td: | +
        td: .number-square.l-yellow 0
        td: | +
        td: .number-square.l-yellow 0
        td: | +
        td: .number-square.l-yellow 0
        td: | =
        td: .number-square.yellow 56
      tr
        td: .number-square.green 101011
        td: | =
        td: .number-square.green 32
        td: | +
        td: .number-square.l-green 0
        td: | +
        td: .number-square.green 8
        td: | +
        td: .number-square.l-green 0
        td: | +
        td: .number-square.green 2
        td: | +
        td: .number-square.green 1
        td: | =
        td: .number-square.green 43

The decimal value of  __{.m-blue}100110__ is [[38]].
The decimal value of __{.m-yellow}111000__ is [[56]].
The decimal value of  __{.m-green}101011__ is [[43]].

---
>id: binary-table
#### Patterns in Binary Numbers

There are some cool patterns we can find in binary numbers.

    // DONE: convert to binary number
    // DONE: make the number circle bigger
    // DONE: 4 or 8 per row, not 10
    // BINPATTERN: dropdown should go here
    // BINPATTERN: oops I removed all my progress that wasn't in *codes*...
    +grid(32, function(n) { var s = ''; s += Math.floor(n/16); s+= Math.floor(n%16 / 8); s+= Math.floor(n%8 / 4); s+= Math.floor(n%4 / 2); s += n%2; return s;})
    p: select
        option(value="4", selected) Colour by 1s digit
        option(value="3") Colour by 2s digit
        option(value="2") Colour by 4s digit
        option(value="1") Colour by 8s digit
        option(value="0") Colour by 16s digit

If we look at the 1s digit, it changes every time. If we look at the 2s digit, it changes every other time. Et cetera.

___

#### Other binary number things

other references:

{.todo} TODO insert photo of bracket

The NCAA March Madness tournament uses a bracket structure. The Sweet Sixteen, the Elite Eight, and the Final Four are all names of rounds. Note that the number of teams in each round will be a power of 2.

---

### Create your own Codes

{.todo} TODO

---

## Error Detection and Error Correction 

> section: error-correction
> sectionStatus: dev

{.todo} Bar Code

{.todo} Satellite Communications

{.todo} CDs and DVDs

---
__Information__ is everywhere around us, but it is difficult to define what
exactly "information" _means_. Instead we can give examples of things that
contain information: books and newspapers, numbers and charts, images, sound or
film clips.

    .row
      div(style="width: 80px"): img(width="100", height="100", src="xyz")
      div(style="width: 80px"): img(width="100", height="100", src="xyz")
      div(style="width: 80px"): img(width="100", height="100", src="xyz")
      div(style="width: 80px"): img(width="100", height="100", src="xyz")
      div(style="width: 80px"): img(width="100", height="100", src="xyz")
      div(style="width: 80px"): img(width="100", height="100", src="xyz")
    
__Codes__ are rules or algorithms to express information in certain formats. Our
alphabet is a example of a code can can be used to express _language_ in the
form of _letters_.

Sometimes letters are not the best format to express information, and we can use
other codes. In this course we will discover some of these codes as well as the
algorithms to encode and decode messages.

---
### Morse Code

{.todo} TODO

---

## Secret Codes

> section: cryptography
> sectionStatus: dev

Some codes are designed in a way that only

Alice and Bob

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

{.todo} TODO

The diagram below shows how plaintext letters [{.letter.plain} *] are converted
into cipher letters [{.letter.cipher} *]. The chart also shows the relative
frequency of every letter in your text, as well as the entire english language.

    .code-play
      .freq-table-wrap
        .freq-table
          .freq-table-chart
            each l in ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')
              .freq-col
                .letter-bar.plain
                .letter-bar.real
          .freq-table-plain
            each l in ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')
              .freq-col: .letter.plain= l
          .freq-table-cipher
            each l in ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')
              .freq-col
            #letter-slider(data-slide-width="26")
              each l in ('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')
                .freq-col: .letter.cipher= l
      .row
        .code-area.grow
          h3.code-title Plain Text
          .plain-text(contenteditable="true", placeholder="Start typing to create your first cypher …")
        .code-area.grow
          h3.code-title Enciphered Text
          .cipher-text

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

---

## The Enigma

> section: enigma
> sectionStatus: dev

{.todo} TODO

---

## RSA Cryptography

> section: rsa
> sectionStatus: dev

{.todo} TODO
