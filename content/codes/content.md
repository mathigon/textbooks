# Codes and Ciphers

    // SOURCES:
    // http://plus.maths.org/content/cracking-codes
    // http://plus.maths.org/content/exploring-enigma
    // http://nrich.maths.org/2198

## Simple Codes

> section: introduction
> sectionStatus: dev

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

### Binary Codes

Binary numbers are pretty cool, man. They're like regular numbers but there are only [[two|three|four]] of them.

Binary numbers were NOT invented by [Alan Turing](bio:turing) and [Charles Boole](bio:boole), but both of their works were shaped by it.

#### Fingers

Look at all the different ways we can count using our fingers.

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


#### Multiplication

To find the lcm of any two numbers, it is important to realise that if
__{.m-yellow}a__ divides __{.m-blue}b__, then __{.m-blue}b__ needs to have all
the prime factors of __{.m-yellow}a__ (plus some more):

    table.table-tiny
      tr
        td.text-right: .number-ball.yellow 12
        td: .divides
        td.text-left: .number-ball.blue 60
      tr
        td
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 3
        td
        td
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 3
          | &nbsp;×&nbsp;
          .number-ball.l-blue 5

This is easy to verify: if a prime factor divides __{.m-yellow}a__, and
__{.m-yellow}a__ divides __{.m-green}b__, then that prime factor must _also_
divide __{.m-green}b__.

---
> id: race3

To find the lcm of __{.m-green}40__ and __{.m-blue}60__, we first need to find
the [prime factorisation](gloss:factorisation) of both:

    table.table-tiny
      tr
        td: .number-ball.blue 40
        td: | =
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 2
        td(colspan=3): | ×
        td: .number-ball.l-blue 5
      tr
        td: .number-ball.green 60
        td: | =
        td: .number-ball.l-green 2
        td: | ×
        td: .number-ball.l-green 2
        td(colspan=3): | ×
        td: .number-ball.l-green 3
        td: | ×
        td: .number-ball.l-green 5

---
> id: race3

To find the lcm of __{.m-green}40__ and __{.m-blue}60__, we first need to find
the [prime factorisation](gloss:factorisation) of both:

    table.table-tiny
      tr
        td: .number-ball.blue 40
        td: | =
        td: .number-ball.l-blue 32
        td: | +
        td: .number-ball.l-blue 8
        td(colspan=3): | ×
        td: .number-ball.l-blue 5
      tr
        td: .number-ball.green 60
        td: | =
        td: .number-ball.l-green 2
        td: | ×
        td: .number-ball.l-green 2
        td(colspan=3): | ×
        td: .number-ball.l-green 3
        td: | ×
        td: .number-ball.l-green 5

Suppose that __{.m-red}X__ is the lcm of __{.m-green}40__ and __{.m-blue}60__.
Then __{.m-green}40__ divides __{.m-red}X__, so _{span.number-ball.small.l-blue}2_,
_{span.number-ball.small.l-blue}2_, _{span.number-ball.small.l-blue}2_ and
_{span.number-ball.small.l-blue}5_ must be prime factors of __{.m-red}X__. Also,
__{.m-blue}60__ divides __{.m-red}X__, so __{span.number-ball.small.l-green}2__,
_{span.number-ball.small.l-green}2_, _{span.number-ball.small.l-green}3_ and
_{span.number-ball.small.l-green}5_ must be prime factors of __{.m-red}X__.

---
> id: race4

To find __{.m-red}X__, we simply combine all the prime factors of __{.m-green}40__
and __{.m-blue}60__, but any duplicates we only need once:

{.text-center} __{.m-red}X__ &nbsp;=&nbsp; _{span.number-ball.l-blue-green}2_ ×
_{span.number-ball.l-blue-green}2_ × _{span.number-ball.l-blue}2_ ×
_{span.number-ball.l-green}3_ × _{span.number-ball.l-blue-green}5_

This gives us that __{.m-red}X__ = 120, just like we saw above. Notice that if
the same prime factor appears multiple times, like 2 above, we need to keep the
maximum occurrences in one of the two numbers (3 times in __{.m-green}40__ is
more than 2 times in __{.m-blue}60__).

---
> id: race5

Now we have a simple method for finding the lcm of two numbers:

    ol.proof
      li Find the prime factorisation of each number.
      li Combine all prime factors, but only count duplicates once.

We can use the same method to find the binary values of these three numbers,
like __{.m-blue}28__, __{.m-green}21__ and __{.m-yellow}7__:

    table.table-tiny
      tr
        td: .number-ball.blue 28
        td: | =
        td: .number-ball.l-blue 16
        td: | +
        td: .number-ball.l-blue 8
        td: | +
        td: .number-ball.l-blue 4
      tr
        td: .number-ball.green 21
        td: | =
        td: .number-ball.l-green 16
        td(colspan=3): | +
        td: .number-ball.l-green 4
        td(colspan=3): | +
        td: .number-ball.l-green 1
      tr
        td: .number-ball.yellow 7
        td: | =
        td(colspan=4)
        td: .number-ball.l-yellow 4
        td: | +
        td: .number-ball.l-yellow 2
        td: | +
        td: .number-ball.l-yellow 1

Therefore the binary value of  __{.m-blue}28__ is [[11100]].
The binary value of __{.m-green}21__ is [[10101]].
The binary value of  __{.m-yellow}7__ is [[00111]].

    //- TODO Exercises


___
> id: binary-simulation
> goals: advance
> title: Experiment

In this animation you can blah blah blah:

    .box
      .box-title: h3 Rolling Binary
      .box-body
        p.md We roll our dice and do the thing.
        p.btn-row
          button.btn Advance

Ugh what am I missing?

{.todo} TODO

{.reveal(when="advance")} Yay we did it __baby__.

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
