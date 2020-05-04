# Cercuri și Pi

## Introducere

> section: introduction
> id: intro

::: column.grow

Încă de la începutul omenirii, oamenii au privit spre cer și au încercat 
să gasească o explicație pentru viața de pe Pământ folosindu-se de mișcarea stelelor, a planetelor și a Lunii.

Astronomii din Grecia Antică au fost primii care au descoperit că toate corpurile cerești
se deplasează pe traiectorii regulate numite __orbite__. Ei credeau că aceste orbite
sunt întotdeauna de formă circulară. Până la urmă, cercul este forma "cea mai perfectă" dintre toate:
simetrică în toate direcțiile, ceea ce o face o alegere potrivită pentru ordinea care stă la baza universului nostru.

::: column(width=320)

    x-media(src="images/geocentric.jpg" width=320 height=272)

{.caption} Pământul se află în centrul _universului lui Ptolemeu_.

:::

---
> id: radius
> goals: compass

Fiecare punct de pe [__cerc__](gloss:circle) se află la aceeași distanță față de centrul cercului.
Asta înseamna că putem desena punctele cu ajutorul unui [compas](gloss:compass):

::: column(width=320)

    x-geopad(width=320 height=300 style="position: relative;")
      svg(style="stroke-linecap: round; stroke-linejoin: round")
        circle.move(name="a" cx=160 cy=150 target="r d")
        circle.move.reveal(name="b" cx=250 cy=240 project="circle(a, 120)" target="r" when="compass")
        path.red(x="segment(a,b).contract(0.08)" target="r" arrows="both" hidden)
        path(name="c1" x="arc(a,b,1.99*pi)" hidden)
        path.blue(x="segment(b.rotate(pi/3,a),b.rotate(-2*pi/3,a)).contract(0.01)" target="d" arrows="both" hidden)
        path.green(x="arc(a,b.add(b.subtract(a).unitVector.scale(12)),1.99*pi).contract(0.02)" target="c" arrows="start" hidden)
      x-play-btn

::: column.grow

{.reveal(when="compass")} Există trei măsurători importante referitoare la cercuri de care ai nevoie:

* {.reveal(when="compass" delay="1000")} [{.step-target.pill.b.red}Raza](target:r)
  este distanța de la centrul unui cerc până la margine.
* {.reveal(when="compass" delay="4000")} [{.step-target.pill.b.blue}Diametrul](target:d)
  este distanța dintre două puncte opuse ale unui cerc. Acesta trece prin centru, iar lungimea lui este
  [[de două ori|jumatate de|egală cu]] raza.
* {.reveal(when="blank-0")} [{.step-target.pill.b.green}Circumferința](target:c) 
  (sau perimetrul) este distanța din jurul unui cerc.

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

Una din proprietățile importante ale cercurilor este faptul că toate cercurile sunt
[asemenea](gloss:similar). Aceasta se poate demonstra arătând cum toate cercurile se pot potrivi ușor
folosind [translații](gloss:translation) și [scalări](gloss:dilation):

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

Poate îți amintești că, pentru poligoane similare, raportul dintre laturile corespunzătoare
este mereu constant. Si la cercuri există ceva similar: raportul dintre 
[circumferință](gloss:circle-circumference) și [diametru](gloss:circle-diameter) 
este acelăsi pentru _toate cercurile_. Acesta este întotdeauna 3.14159… – 
un număr misterios numit [__Pi__](gloss:pi), care este adesea notat cu litera grecească
_π_ care înseamnă “p”. Pi are o infinitate de zecimale care merg la nesfârșit fără a avea
un tipar anume:

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

Aceasta este o roată cu diametrul 1. Pe măsură ce desfaci circumferința, poți vedea că 
lungimea sa este exact [[`pi`|`2 * pi`|3]]:

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

Pentru un cerc de diametru _d_, circumferința este `C = π × d`. În mod similar,
pentru un cerc de [rază](gloss:circle-radius) _r_, circumferința este

{.text-center} `C =` [[`2 π r`|`π r`|`π r^2`]].

---
> id: nature

Cercurile sunt perfect simetrice și nu au niciun “punct slab” precm 
vârfurile unui poligon. Acesta este unul dintre motivele pentru care ele pot fi întâlnite
peste tot în natură:

::: column(width=130 parent="padded-thin")

    x-media(src="images/flower.jpg" width=130 height=130)

{.caption} Flori

::: column(width=130)

    x-media(src="images/earth.jpg" width=130 height=130)

{.caption} Planete

::: column(width=130)

    x-media(src="images/tree.jpg" width=130 height=130)

{.caption} Copaci

::: column(width=130)

    x-media(src="images/orange.jpg" width=130 height=130)

{.caption} Fruct

::: column(width=130)

    x-media(src="images/soap.jpg" width=130 height=130)

{.caption} Bule de săpun

:::

{.r} Si există multe alte exemple: de la curcubee până la undele apei. Te poți gândi
la alte exemple? [Continuă](btn:next)

---
> id: max-area
> goals: area-circle

::: column.grow

De asemenea, se dovedește că cercul este forma cu cea mai mare arie pentru o circumferință dată.
De exemplu, dacă ai o sfoară cu lungimea  100\ m, o poți folosi pentru a încadra cea mai mare
suprafață dacă formezi un cerc (mai degrabă decât alte forme precum dreptunghiul sau triunghiul).

În natură, obiectele precum picăturile de apă sau bulele de aer își pot _economisi energia_ 
devenind circulare sau sferice și reducându-și astfel suprafața.

::: column(width=320)

    x-select.area-tabs
      div(data-value="0") Triunghi
      div(data-value="1") Pătrat
      div(data-value="2") Pentagon
      div(data-value="3") Cerc
    svg(width=320 height=200)

{.caption} _Circumferința_ = __{.m-green}100__, _Aria_ = __${area}__


:::

---
> id: area
> goals: slider

### Aria Cercului

Dar totuși cum putem calcula aria unui cerc? Hai să încercăm să folosim tehnica
pe care am folosit-o pentru a [afla aria unui patrulater](/course/polyhedra/quadrilaterals):
descompunem forma în mai multe părți diferite și le rearanjăm sub forma 
unei figuri geometrice a cărei arie o știm deja (de exemplu: dreptunghi sau triunghi). 

Singura diferență este că, din cauză că cercurile sunt curbate, va trebui să folosim
niște aproximări:

::: column(width=340)

    svg.circle-area.red(width=340 height=245)
      defs
        marker#area-arrow(refX=4 refY=4 markerWidth=5 markerHeight=8 orient="auto-start-reverse")
          path(d="M 1 1 L 4 4 L 1 7" stroke-width=1)
      g.labels
        line.reveal(x1=62 y1=158 x2=62 y2=212 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=80 y1=226 x2=268 y2=226 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=50 y=190 when="blank-1") r
        text.reveal(x=165 y=241 when="blank-2") πr
    x-slider(steps=400)

::: column.grow

Aici se poate vedea un cerc împărțit în ${toWord(n1)} felii. Mișcă glisorul pentru
a alinia feliile de cerc pe un rând.

{.reveal(when="slider")} Dacă mărim numărul feliilor de cerc la ${n1}{n1|6|6,30,2},
această formă începe sa semene din ce în ce mai mult cu un [[dreptunghi|cerc|pătrat]].

{.reveal(when="blank-0")} Lățimea dreptunghiului este egală cu 
[[raza|circumferința|diametrul]] cercului.
_{span.reveal(when="blank-1")} Lungimea dreptunghiului este egală cu 
[[jumătate din circumferința|circumferința|de două ori raza]] cercului._
_{span.reveal(when="blank-2")} (Observă cum jumătate dintre felii sunt orientate în jos
și jumătate sunt orientate în sus.)_

{.reveal(when="blank-2" delay=1000)} Prin urmare, aria totală a dreptunghiului este
aproximativ `A = π r^2`.

:::

---
> id: area-1
> goals: slider

::: column(width=340)

    svg.circle-area.blue(width=340 height=245)
      g.labels
        line.reveal(x1=20 y1=156 x2=20 y2=206 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=34 y1=218 x2=355 y2=218 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=10 y=185 when="blank-1") r
        text.reveal(x=165 y=236 when="blank-2") 2πr
    x-slider(steps=400)

::: column.grow

Aici se poate vedea un cerc împărțit în ${toWord(n)} inele. La fel ca mai înainte,
poți muta glisorul pentru a “îndrepta” inelele.

{.reveal(when="slider")} Dacă mărim numărul inelelor la ${n2}{n2|4|2,12,1},
această formă începe să semene din ce în ce mai mult cu un [[triunghi|dreptunghi|trapez]].

{.reveal(when="blank-0")} Înălțimea triunghiului este egală cu [[raza|diametrul|circumferința]] cercului.
_{span.reveal(when="blank-1")} Baza triunghiului este egală cu [[circumferința|de două ori diametrul]] cercului._
_{span.reveal(when="blank-2")} Prin urmare, aria totală a triunghiului este aproximativ_

{.text-center.reveal(when="blank-2")} `A = 1/2 "baza" × "înălțimea" = π r^2`.

:::

---
> id: area-2

Dacă am putea folosi o infinitate de inele sau felii de cerc, aproximările de mai sus 
ar fi perfecte – și ambele ne oferă aceeași formulă pentru aria unui cerc:

{.text-center.r} `A = π r^2`.
[Continuă](btn:next)

---
> id: pi-approximations

### Calculul numărului Pi

Așa cum ai vazut mai sus, `π = 3.1415926…` nu este un număr întreg simplu și zecimalele lui merg 
la infinit, fără niciun tipar de repetare.
Numerele care au această proprietate se numesc [__numere iraționale__](gloss:irrational-numbers)
și asta înseamnă că `π` nu se poate exprima ca o fracție simplă `a/b`.

Asta înseamnă și că nu vom putea scrie niciodată _toate_ zecimalele lui Pi – până la urmă,
sunt o infinitate de zecimale. Matematicienii din Grecia Antică și China Antică au calculat 
primele patru zecimale ale lui Pi prin aproximarea cercurilor folosind poligoane regulate.
Observă cum, cu cât adaugi mai multe laturi, poligonul începe sa arate [[din ce în ce mai mult|mai puțin|exact]] 
ca un cerc:

    figure: x-media(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-media(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

În 1665, [Isaac Newton](bio:newton) a reușit să calculeze 15 zecimale. Astăzi, noi putem 
folosi calculatoare performante pentru a calcula valoarea lui Pi cu precizie mult mai mare.

Recordul actual este de 31.4 de trilioane de zecimale. O carte tiparită care ar conține toate aceste zecimale
ar avea o grosime de aproximativ 400\ km – aceasta este înălțimea la care
[Stația Spațială Internațională](gloss:iss) orbitează Pământul!

Bineînțeles că nu e nevoie să memorezi atât de multe din zecimalele numărului Pi. De fapt,
raportul `22/7 = 3.142…` este o aproximare bună.

:::

---
> id: pi-sequence

O modalitate de calculare a numărul Pi este folosirea secvențelor infinite de numere.  Iată un exemplu 
descoperit de [Gottfried Wilhelm Leibniz](bio:leibniz) în 1676:

{.text-center} `π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} Pe măsura ce calculăm din ce în ce mai mulți termeni ai acestei serii,
urmând mereu același tipar, rezultatul va ajunge din ce în ce mai aproape de Pi.

---
> id: pi-colours
> goals: hover

::: column.grow

Mulți matematiciani cred că Pi are o proprietate și mai interesantă: este un 
__număr normal__. Asta înseamnă că cifrele de la 0 la 9 apar complet aleator, de parcă natura
ar fi aruncat cu un zar cu 10 fețe de o infinitate de ori pentru a stabili valoarea lui Pi.

Iată primele 100 de zecimale ale lui Pi. Mișca cursorul peste o parte din celule pentru a 
vedea cum sunt distribuite zecimalele.

::: column(width=330)

    .pi-grid
      .pi-left
        .pi-cell 3
        .pi-operator .
      .pi-mid
        for d in '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'.split('')
          .pi-cell= d
      .pi-right: .pi-operator …

:::

---
> id: pi-digits
> goals: search

Dacă Pi este un numărnormal, asta înseamnă că te poți gândi la _orice_ șir de cifre și el va apărea 
undeva între zecimalele lui. Aici poți căuta în primul milion de zecimale ale lui Pi - conțin ele ziua ta de naștere?

    .box
      .box-title: h3 Primul milion de zecimale ale lui Pi
      .box-body.pi-controls
        | Caută un șir de zecimale:
        input(type="text" pattern="[0-9]*" maxlength=12)
        .pi-warning
      x-pi-scroll.box-body
        .first-row 3.

---
> id: pi-movies

Am putea chiar converti o întreagă carte, precum Harry Potter, într-un șir foarte lung de zecimale
(a = 01, b = 02, și așa mai departe). Dacă Pi este normal, acest șir va apărea undeva între 
zecimalele sale, dar ar dura milioane de ani sa calculăm suficiente zecimale astfel încât să-l gasim.

Pi este ușor de înțeles, dar e de o importanță fundamentală în știință și matematică.
Acesta ar putea fi motivul pentru care Pi a devenit neobișnuit de popular în cultura noastră
(cel puțin comparat cu alte subiecte din matematică):

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")
    p.caption Pi este combinația secretă a tabletei din “O noapte la muzeu 2”.

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")
    p.caption Profesorul Frink (“Familia Simpson”) reduce la tăcere o mulțime de oameni de știința când afirmă că Pi este egal cu 3.

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")
    p.caption Spock (“Star Trek”) dezactivează un calculator rău cerându-i să calculeze ultima zecimală a lui Pi.

:::

---
> id: pi-day

Există chiar și _Ziua Pi_ care se sărbătorește în fiecare an fie pe 14 martie, pentru că `pi ≈ 3.14`,
fie pe 22 iulie, pentru că `pi ≈ 22/7`.

    figure: x-media(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")



--------------------------------------------------------------------------------



## Grade și Radiani

> section: radians
> id: degrees

Până acum, în geometrie, am măsurat întotdeauna unghiurile în [grade](gloss:degrees). O 
__{.m-red}rotație completă de cerc__  este [[360]]°, o  __{.m-green}rotație de semicerc__ este
[[180]]°, un __{.m-yellow}sfert de cerc__ este [[90]]° și așa mai departe.

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a0" hidden)
      circle(x="point(80,80)" name="b0")
      circle(x="c0" hidden)
      path.red.fill(x="angle(c0,b0,a0)" round size=40)
      path(x="segment(a0,b0)")
      path(x="segment(b0,c0)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a1" hidden)
      circle(x="point(80,80)" name="b1")
      circle(x="c1" hidden)
      path.green.fill(x="angle(c1,b1,a1)" round size=40)
      path(x="segment(a1,b1)")
      path(x="segment(b1,c1)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a2" hidden)
      circle(x="point(80,80)" name="b2")
      circle(x="c2" hidden)
      path.yellow.fill(x="angle(c2,b2,a2)" round size=40)
      path(x="segment(a2,b2)")
      path(x="segment(b2,c2)")

:::

---
> id: degrees-1

{.r} Numărul 360 este foarte potrivit pentru că este divizibil cu multe alte numere:
2, 3, 4, 5, 6, 8, 9, 10, 12, 15 și așa mai departe. Asta înseamnă că multe dintre 
fracțiunile unui cerc sunt și numere întregi. Dar te-ai intrebat vreodată de unde vine
numărul 360 ? [Continuă](btn:next)

---
> id: babylon

::: column.grow

Se pare că 360 de grade reprezintă una din noțiunile cele mai vechi din matematică
pe care încă o mai folosim în ziua de azi. Această noțiune s-a dezvoltat in Babilonul Antic 
în urmă cu peste 5000 de ani.

La acel moment, una din aplicațiile cele mai importante ale matematicii era în astronomie.
_Soarele_ determină cele patru anotimpuri pe care agricultorii trebuie sa le cunoască pentru a crește plante. 
În mod similar, _Luna_ determină valurile care erau importante pentru pescari. Oamenii au studiat
și stelele pentru a prezice viitorul sau pentru a comunica cu zeii.

::: column(width=260)

    x-media(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} O tabletă babiloniană folosită pentru a calcula `sqrt(2)`

:::

---
> id: constellations
> goals: rotate

Astronomii au observat cum constelațiile vizibile la o anume oră în timpul nopții
se mișcau în fiecare zi foarte puțin până când, după aproximativ 60 de zile,
ajungeau din nou înapoi in punctul de plecare. Acesta ar putea fi motivul pentru care
au împărțit cercul în 360 de grade.

    figure: .constellations
      .label.md Miezul nopții în ziua ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

Bineînțeles că într-un an sunt de fapt 365 de zile (ei bine, 365.242199 ca să fim preciși, 
dar matematicienii din Babilon lucrau cu cadrane solare și această aproximare era total adecvată.

Se potrivea bine și cu sistemul de numărare în baza 60 de la vremea aceea (căci `6 xx 60 = 360`). 
Acest sistem este motivul pentru care încă avem 60 de secunde într-un minut 
și 60 de minute într-o oră - chiar dacă majoritatea celorlalte unitați sunt măsurate în
[baza 10](gloss:base-10) (e.g. 10 ani într-un deceniu sau 100 ani într-un secol).

::: column.grow

Pentru majoritatea dintre noi, măsurarea unghiurilor în grade este ceva instinctiv: există filme la 360°,
skateboarderii pot face rotații de 540 de grade, iar cineva își poate schimba părerea la 180 de grade.

Dar din punct de vedere matematic, alegerea lui 360 este complet arbitrară. Dacă am trăi pe Marte,
un cerc ar putea avea 670°, iar un an pe Jupiter are chiar 10.475 de zile.

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} Un McFlip 540, o rotație de 540°

:::

---
> id: radians

### Radiani
În loc să împartă cercul într-un număr anume de segmente (precum 360 de grade),
matematicienii preferă adesea să măsoare unghiurile folosind [circumferința](gloss:circle-circumference)
unui [__cerc unitate__](gloss:unit-circle) (un cerc de rază 1).

::: column(width=280)

    x-geopad(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path.thin(x="circle(c,100)" name="circ")
      circle.move.blue.pulsate(cx=240 cy=140 name="a" project="circ")
      circle.move.green(cx=240 cy=140.4 name="b" project="circ")
      path.fill.green(x="angle(b,c,a)" label="${round(ang.deg)}°" name="ang" round)
      path.red.thick(x="arc(c,b,ang.rad)" label="${rad(ang.rad)}π")
      path.thin(x="segment(c,a)")
      path.thin(x="segment(c,b)")

::: column.grow

Un _{span.var-action}cerc complet_ are circumferința
_{x-equation.small(solution="2 π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-0")} Pentru o _{span.var-action}rotație de semicerc_, distanța
de-a lungul circumferinței este
_{x-equation.small(solution="π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-1")} Pentru o _{span.var-action}rotație de sfert de cerc_, distanța
de-a lungul circumferinței este
_{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_.

{.reveal(when="eqn-2")} Și așa mai departe: acest mod de a măsura unghiurile se numește
[__radian__](gloss:radians) (îl poți reține ca “unitate de rază”).

:::

---
> id: radians-conversion

Orice unghi în grade are o mărime echivalentă în radiani. Conversia este foarte ușoară - 
la fel ca atunci când faci transformări între alte unități,
precum metri și kilometri sau Celsius și Fahrenheit.

{.text-center} __{.m-red} 360°__ _{span.space}=_ __{.m-green} 2*π* rad__

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left}`=>`_  
__{.m-red} 1°__ _{span.space}=_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} rad__

::: column(width=180)

{.text-center} _{span.rotate.right}`=>`_  
__{.m-green} 1 rad__ _{span.space}=_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red} °__

:::

---
> id: radians-table

Poți scrie valoarea în radiani fie ca un multiplu de _π_ sau ca un singur număr zecimal. 
Poți completa acest tabel cu măsurile echivalente ale unghiurile în grade și radiani?

| __{.m-red}grade__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_    |
| __{.m-green}radiani__   | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2    | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### Distanța Parcursă

Te poți gândi la radiani ca la "distanța parcursă" de-a lungul circumferinței unui cerc unitate. 
Asta este util mai ales atunci când lucrezi cu obiecte care se mișcă pe o traiectorie circulară.

::: column.grow

De exemplu, [Stația Spațială Internațională](gloss:iss) orbitează Pământul la fiecare
1,5\ ore. Asta înseamnă că __viteza de rotație__ este [[`(2 pi)/1.5`|
`1.5/(2 pi)`|`1.5 * pi`]] radiani pe oră.

{.reveal(when="blank-0")} Într-un [cerc unitate](gloss:unit-circle), viteza de rotație
este aceeași ca viteza _actuală_, pentru că lungimea circumferinței este aceeași cu o 
rotație completă în radiani (ambele sunt `2pi`).

{.reveal(when="blank-0" delay=1000)} Raza orbitei SSI este de 6800\ km,
ceea ce înseamnă că viteza _actuală_ a SSI trebuie să fie [[`(2 pi)/1.5 xx 6800`|
`(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")}= 28483 km
pe oră._

::: column(width=300)

    x-geopad.r(width=300 height=300)
      .earth
      svg.r
        circle(x="point(150,150)" name="c")
        circle(x="point(280,150)" name="a")
        circle(x="a.rotate(p*2*pi,c)" name="b" hidden)
        path.red(x="arc(c,a,p*2*pi)")
        path.fill(x="angle(a,c,b)" label="${round(2*p,1)}π" round)
        path.red(x="segment(c,a)")
        path.red(x="segment(c,b)")
      .var.iss(style="transform: translate(${a.rotate(p*2*pi,c).x}px,${a.rotate(p*2*pi,c).y}px) rotate(${(p+0.25)*2*pi}rad)")
      .time.var ${round(p*1.5,1)}h
      x-play-btn

:::

---
> id: radians-distance-1

Se poate vedea în acest exemplu cum radianii sunt o unitate de masură mult mai convenabilă
decât gradele? De îndată ce cunoaștem viteza de rotație, trebuie doar sa o înmulțim cu raza
pentru a obține viteza efectivă.

Iată un alt exemplu: mașina ta are roți de rază 0,25\ m. Dacă tu conduci cu viteza
de 20\ m/s, roțile mașinii tale se rotesc cu [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] radiani pe secundă
_{span.reveal(when="blank-0")}(or `80/(2pi) = 13` rotații pe secundă)._

---
> id: radians-trig

### Trigonometrie

Pentru majoritatea problemelor simple de geometrie, gradele și radianii sunt complet
interschimbabile - fie alegi unitatea de măsură preferată, fie se specifică în întrebare
în ce unitate trebuie să dai răspunsul. Cu toate acestea, de îndată ce studiezi 
[trigonometria](gloss:trigonometry) sau [analiza](gloss:calculus) la nivel mai avansat,
se dovedește că radianii sunt mult mai convenabili decât gradele.

::: column.grow

Majoritatea calculatoarelor au un [buton special](->.button.mode) pentru a schimba între 
grade și radiani. Funcțiile trigonometrice precum [__sin__](gloss:sin), [__cos__](gloss:cos) 
și __tan__ primesc măsura unghiului ca date de intrare, iar funcțiile lor inverse
__arcsin__, __arccos__ și __arctan__ returnează măsuri de unghiuri ca date de ieșire. 
Configurația curentă a calculatorului stabilește ce unități sunt folosite pentru aceste unghiuri.

Cu ajutorul acestui calculator, încearcă să calculezi 

{.text-center} sin(30°) = [[0.5]] _{span.eqn-gap}_ cos(1°) = [[0.999]]<br>
sin(30 rad) = [[-0.988]] _{span.eqn-gap}_ cos(1 rad) = [[0.54]]

::: column(width=300)

    .calculator
      .display
        span
        .setting DEG
      .button.num 7
      .button.num 8
      .button.num 9
      .button.wide sin
      .button.num 4
      .button.num 5
      .button.num 6
      .button.wide cos
      .button.num 1
      .button.num 2
      .button.num 3
      .button.wide tan
      .button.num 0
      .button .
      .button C
      .button.wide.mode mode

:::

---
> id: small-angle

Utilizarea radianilor are un avantaj deosebit de interesant atunci când folosim 
[__funcția sinusoidală__](gloss:sin). Dacă `θ` este un unghi foarte mic (mai mic de 20° sau 0,3 rad),
atunci `sin(θ) ≈ θ`. De exemplu,

{.text-center} sin(${x}{x|0.1|0,0.5,0.05}) `≈` ${sin(x)}…

{.reveal(when="var-0")} Aceasta se numește __aproximația unghiurilor mici__ și poate simplifica mult
anumite ecuații ce conțin funcții trigonometrice.
Vei afla mai multe despre toate acestea în viitor.


--------------------------------------------------------------------------------



## Tangente, Corzi și Arce

> section: tangets-chords-arcs
> id: circle-parts

În secțiunile anterioare, ai aflat numele diferitelor părți ale unui cerc - cum ar fi 
centrul, raza, diametrul și circumferința. Cu toate acestea, există multe elemente geometrice 
legate de cerc de care vom avea nevoie pentru a rezolva probleme mai complexe:

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle(x="point(150,150)" name="x")
      
      path.teal.fill.reveal(x="sector(x,d1,pi/2.5)" target="sector" when="next-3" label="Sector" label-class="white")
      path.purple.fill.reveal(x="arc(x,b1,pi/2.5)" target="segment" when="next-4" label="Segment")
      
      path.black(x="circle(x,100)" name="c")
      
      circle.red(x="c.at(0.5)" name="a1" target="secant")
      circle.red(x="c.at(0.7)" name="a2" target="secant")
      path.red.thick(x="line(a1,a2)" label="Secantă" target="secant")
      
      circle.green.reveal(x="c.at(0.8)" name="b1" target="chord" when="next-0" animation="pop")
      circle.green.reveal(x="c.at(0)" name="b2" target="chord" when="next-0" animation="pop")
      path.green.thick.reveal(x="segment(b1,b2)" label="Coardă" target="chord" when="next-0" animation="draw")
      
      circle.blue.reveal(x="c.at(0.1)" name="c1" target="tangent" when="next-1" animation="pop")
      path.blue.thick.reveal(x="c.tangentAt(0.1)" label="Tangentă" target="tangent" when="next-1" animation="draw")
      
      circle.yellow.reveal(x="c.at(0.2)" name="d1" target="arc" when="next-2" animation="pop")
      circle.yellow.reveal(x="c.at(0.4)" name="d2" target="arc" when="next-2" animation="pop")
      path.yellow.thick.reveal(x="arc(x,d1,pi/2.5)" label="Arc de cerc" target="arc" when="next-2" animation="draw")

::: column.grow(parent="right")

* {.r} O [{.red} secantă](pill:secant) este o dreaptă care intersectează un cerc
  în două puncte [Continuă](btn:next)
* {.r.reveal(when="next-0")} O [{.green} coardă](pill:chord) este un segment de dreaptă
  care unește două puncte care se află pe circumferința unui cerc. [Continuă](btn:next)
* {.r.reveal(when="next-1")} O [{.blue} tangentă](pill:tangent) este o dreaptă care atinge 
  un cerc într-un singur punct. Acesta se numește __punct de tangență__. [Continuă](btn:next)
* {.r.reveal(when="next-2")} Un [{.yellow} arc de cerc](pill:arc) este o porțiune din
  circumferința unui cerc. [Continuă](btn:next)
* {.r.reveal(when="next-3")} Un [{.teal} sector circular](pill:sector) este o porțiune 
  din interiorul unui cerc, mărginită de un _arc de cerc_ și _două raze_.
  [Continuă](btn:next)
* {.r.reveal(when="next-4")} În cele din urmă, un [{.purple} segment circular](pill:segment) 
  este o porțiune din interiorul unui cerc, mărginită de un _arc de cerc_ și _o coardă_.
  [Continuă](btn:next)

:::

---
> id: circle-parts-1

În acest capitol vom analiza legătura dintre toate aceste elemente și vom studia 
teoreme despre proprietățile lor. Nu îți face griji pentru memorarea tuturor 
definițiilor deocamdata - poți utiliza întotdeauna [glosarul](->.footer-link[data-modal=glossarym]).

---

### Tangente

{.todo} îN CURÂND!

    // https://www.mathopenref.com/tangentline.html
    // https://www.mathopenref.com/consttangents.html
    // https://www.mathopenref.com/consttangent.html

    // __[CC] Construct a tangent line from a point outside a given circle to the circle.__
    // 
    // Point of Tangency: The point where a tangent line touches the circle.
    // 
    // The tangent line and the radius drawn to the point of tangency have a unique
    // relationship. Let’s investigate it here.
    // 
    // _Tangent to a Circle Theorem_: A line is tangent to a circle if and only if the
    // line is perpendicular to the radius drawn to the point of tangency.
    // 
    // To prove this theorem, the easiest way to do so is indirectly (proof by
    // contradiction). Also, notice that this theorem uses the words “if and only if,”
    // making it a biconditional statement. Therefore, the converse of this theorem is
    // also true. Now let’s look at two tangent segments, drawn from the same external
    // point. If we were to measure these two segments, we would find that they are equal.
    // 
    // _Two Tangents Theorem_: If two tangent segments are drawn from the same external
    // point, then the segments are equal.
    //
    // Tangents are actually a much more universal concept,
    // Tangent Circles: Two or more circles that intersect at one point.
    // Two circles can be tangent to each other in two different ways, either
    // internally tangent or externally tangent.

---

### Corzi

{.todo}  îN CURÂND!

    // A chord is a line segment whose endpoints are on a circle. A diameter is the
    // longest chord in a circle. There are several theorems that explore the
    // properties of chords.
    // 
    // Chord Theorem #1: In the same circle or congruent circles, minor arcs are
    // congruent if and only if their corresponding chords are congruent.
    // 
    // Notice the “if and only if” in the middle of the theorem. This means that Chord
    // Theorem #1 is a biconditional statement. Taking this theorem one step further,
    // any time two central angles are congruent, the chords and arcs from the
    // endpoints of the sides of the central angles are also congruent. In both of
    // these pictures, BE≅CD and BEˆ≅CDˆ. In the second picture, we have △BAE≅△CAD
    // because the central angles are congruent and BA≅AC≅AD≅AE because they are all
    // radii (SAS). By CPCTC, BE≅CD.
    // 
    // Investigation: Perpendicular Bisector of a Chord
    // 1. Draw a circle. Label the center A. 
    // 2. Draw a chord in ⨀A. Label it BC.
    // 3. Find the midpoint of BC by using a ruler. Label it D. 
    // 4. Connect A and D to form a diameter. How does AD relate to the chord, BC? 
    // 
    // Chord Theorem #2: The perpendicular bisector of a chord is also a diameter.
    // In the picture to the left, AD⊥BC and BD≅DC. From this theorem, we also notice
    // that AD also bisects the corresponding arc at E, so BEˆ≅ECˆ.
    // 
    // Chord Theorem #3: If a diameter is perpendicular to a chord, then the diameter
    // bisects the chord and its corresponding arc.
    // 
    // Investigation: Properties of Congruent Chords
    // 1. Draw a circle with a radius of 2 inches and two chords that are both 3
    //    inches. Label as in the picture to the right. This diagram is drawn to scale. 
    // 2. From the center, draw the perpendicular segment to AB and CD.
    // 3. Erase the arc marks and lines beyond the points of intersection, leaving FE
    //    and E. Find the measure of these segments. What do you notice? 
    // 
    // Chord Theorem #4: In the same circle or congruent circles, two chords are
    // congruent if and only if they are equidistant from the center.
    // 
    // Recall that two lines are equidistant from the same point if and only if the
    // shortest distance from the point to the line is congruent. The shortest distance
    // from any point to a line is the perpendicular line between them. In this
    // theorem, the fact that FE=EG means that AB and CD are equidistant to the center
    // and AB≅CD.

    // Concentric Circles: Two or more circles that have the same center, but different radii.
    // Congruent Circles: Two or more circles with the same radius, but different centers.

---
> id: earth-arc

### Arce și Sectoare Circulare

::: column.grow

Majoritatea oamenilor de știință din Grecia Antică credeau că Pământul este o sferă.
Existau o mulțime de dovezi: de la navele care dispăreau pe mare după linia orizontului până la 
mișcarea circulară a stelelor pe timpul nopții.

Din păcate, nimeni nu știa cu exactitate _cât de mare_ era Pământul – până în jurul anului 200 î.Hr.,
când matematicianul [Eratostene](bio:eratosthenes) a descoperit o metodă ingenioasă pentru 
a măsura raza Pământului folosind geometria de bază. Avem nevoie doar de câteva informații în plus
despre arcurile și sectoarele unui cerc.

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: arcs

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ" label="A")
      circle.move(cx=85 cy=60 name="b" project="circ" label="B")
      
      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad).minor" label="Sector" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad).minor" label="Arc de cerc" target="arc")
      path.purple.thick.transparent(x="arc(c,a,2*pi-angle(b,c,a).rad).major" target="major")

::: column.grow

După cum se poate vedea în diagramă, un [{.red} arc de cerc](pill:arc) este o porțiune din 
[[circumferința|diametrul|tangenta]] unui cerc și un [{.yellow} sector circular](pill:sector)
este o porțiune din [[interiorul|raza|perimetrul]] unui cerc.

::: .reveal(when="blank-0 blank-1")
Arcul de cerc dintre două puncte _A_ și _B_ este adesea scris `arc(AB)`. Această definiție este
ușor ambiguă: există un [{.purple} al doilea arc de cerc](pill:major)
care unește _A_ și _B_, dar merge în sens invers.

Cel mai mic dintre cele două arce se numește __arcul mic__, iar cel mai mare se numește
__arcul mare__. Dacă punctele _A_ și _B_ sunt perfect opuse unul față de altul,
ambele arce au aceeași lungime și sunt [[semicercuri|diametre|circumferințe]].
:::

:::

---
> id: arcs-1

::: column.grow

Pentru a afla lungimea unui arc de cerc sau aria unui sector circular avem nevoie să cunoaștem 
unghiul corespunzător din centrul cercului: acesta se numește [{.blue} unghi la centru](pill:angle).

Observă cum arcul, sectorul și unghiul la centru ocupă toate _aceeași proporție_
dintr-un cerc dat. De exemplu, dacă [{.blue} unghiul la centru](pill:angle) este
_{span.var-action}90°_, el ocupă [[un sfert|o jumătate|o treime]] dintr-un 
[{.teal} cerc complet](pill:fangle).

::: .reveal(when="blank-0")
Asta înseamnă că [{.red} lungimea arcului](pill:arc) este și ea `1/4` din 
[{.purple} circumferința totală](pill:circ) și 
[{.yellow} aria sectorului](pill:sector) este `1/4` din [{.orange} aria totală](pill:area).

Putem exprima această relație sub forma unei ecuații:

{.text-center} `"lungime arc" / "circumferință" = blank("arie sector","rază","arie arc") / "arie cerc" = "unghi la centru" / blank("360°","180°","90°")`
:::

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ")
      circle.move(cx=85 cy=60 name="b" project="circ")
      
      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad)" label="Sector" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad)" label="Arc" target="arc")
      path.fill.blue(x="angle(b,c,a)" target="angle")
      
      path.fill.orange.transparent(x="circ" target="area")
      path.thick.purple.transparent(x="circ" target="circ")
      path.teal.fill.transparent(x="circle(c,32)" target="fangle")

:::

---
> id: arcs-2

Acum putem reordona aceste ecuații pentru a afla orice variabilă ce ne interesează.
De exemplu,

::: column(width=320 parent="padded-thin")

| [{.red}lungime arc](pill) | = | `"circumferință" × c/360` |
|                          | = | `2 π r × c/360`          |
{.eqn-system}

::: column(width=320)

| [{.yellow}arie sector](pill) | = | `"arie cerc" × c/360` |
|                              | = | `π r^2 × c/360`         |
{.eqn-system}

:::

unde _r_ este raza cercului și _c_ este măsura unghiului la centru.

    // What the formulae are doing is taking the area of the whole circle, and
    // then taking a fraction of that depending on what fraction of the circle
    // the sector fills.

    // The length of an arc is the distance along the curved line of the
    // circumference of the circle. It is slightly longer than the straight
    // line connecting the same two points (the chord).

---
> id: arcs-rad

Dacă unghiul la centru se măsoară mai degrabă în [radiani](gloss:radians) decât în
[grade](gloss:degrees), putem folosi aceeași ecuație, dar trebuie să înlocuim 
360° cu [[`2 π`|`1/2 π`|`π`]]:

::: .reveal(when="blank-0")
::: column(width=320 parent="padded-thin")

| [{.red}lungime arc](pill) | = | `2 π r × c/(2π)` |
|                          | = | `r × c`          |
{.eqn-system}

::: column(width=320)

| [{.yellow}arie sector](pill) | = | `π r^2 × c/(2π)` |
|                              | = | `1/2 r^2 c`      |
{.eqn-system}

:::

Observă cum ecuațiile devin mult mai simple și _π_ se simplifică peste tot.
Asta pentru că, dupa cum probabil că îți amintești, [definiția radianului](/course/circles/radians#radians)
este practic lungimea unui arc dintr-un cerc de rază 1.

Acum hai să vedem cum putem folosi arcele și sectoarele pentru a calcula
circumferința Pământului. [Continuă](btn:next)
:::

---
> id: eratosthenes

În Egiptul Antic, orașul _Swenet_ era poziționat de-a lungul râului Nil. Swenet era
faimos pentru o fântână care avea o proprietate ciudată: în fiecare an exista un moment 
în care lumina solara atingea fundul puțului - pe 21 iunie la prânz, ziua _solstițiului de vară_. 

În acel moment exact, fundul puțului era iluminat, dar nu și lateralele sale, 
ceea ce înseamna că Soarele se afla direct deasupra fântânii.

::: column(width=300)

    x-media(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Pentru a măsura distanțele lungi, vechii egipteni numărau pașii necesari parcurgerii lor.

::: column(width=300)

    x-media(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} Unele surse menționează că “Fântâna lui Eratostene” se afla pe _insula Elefantina_ 
de pe râul Nil.

:::

Matematicianul [Eratostene](bio:eratosthenes) trăia în _Alexandria_, la aproximativ
800\ km nord de Swenet, unde era directorul Marii Biblioteci. În centrul orașului
Alexandria se afla un obelisc, un monument înalt și îngust cu vârful în formă de piramidă.

Eratostene a observat că în ziua solstițiului de vară obeliscul produce o umbră la prânz  - 
asta însemna că Soarele _nu_ se afla perfect deasupra lui. El a concluzionat că asta 
se îmtâmpla datorită curburii Pământului și și-a dat seama ca o poate folosi pentru 
a calcula circumferința planetei noastre.

---
> id: eratosthenes-1

::: column.grow

{.r} Aici se poate vedea fântâna din Swenet precum și obeliscul din Alexandria.
Razele soarelui cad direct în interiorul fântânii, dar lovesc obeliscul într-un unghi și 
se produce o umbră. [Continuă](btn:next)

::: .reveal(when="next-0")
Eratostene a făcut măsurători și a aflat că [{.teal} unghiul](pill:angle1) 
umbrei era de 7.2°. Această valoare este la fel ca măsura [{.purple} unghiului la centru](pill:angle2)
al [{.red} arcului](pill:arc) dintre Alexandria și Swenet pentru că sunt unghiuri
[[alternante|verticale|corespunzătoare]].
:::

::: .reveal(when="blank-0")
Acum putem folosi ecuația pentru lungimea arcului pe care am extras-o mai jos:

{.text-center} `pill("lungime arc","red","arc") / pill("circumferință","blue","circ") = (input(7.2)"°") / "360°"`
:::

::: .reveal(when="blank-1")
Prin rearanjare, reiese că circumferința Pământului este

{.text-center} `pill("circumferința","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`
:::

::: .reveal(when="blank-2")
În cele din urmă, știm că circumferința unui cerc este `C = 2 pi r`, astfel că 
În cele din urmă, știm că circumferința unui cerc este `C = 2 pi r`, astfel că 
raza Pământului este

{.text-center} `r_"Pământ" = (40000 "km") / (2 pi) ≈ 6400 "km"`.
:::

::: column(width=300)

    x-geopad.sticky(width=300 height=400)
      img.sunrays(src="images/sunlight.png" width=300 height=400)
      svg.r
        defs: radialGradient#grad1(cx=200 cy=200 r=200 gradientUnits="userSpaceOnUse")
          stop(offset=0 stop-color="#63a3ff")
          stop(offset=1 stop-color="#0f82f2")
      
        circle(x="point(150,250)" name="c" hidden)
        circle(x="point(150,120)" name="a" hidden)
        circle.move.pulsate(cx=80 cy=140 name="b" project="arc(c,point(64,155),1.47)")
        circle(x="c.add(b.subtract(c).scale(1.465))" name="d" hidden)
    
        path.shadow(x="triangle(c,d,point(d.x,c.y))")
        path.earth(d="M153,120,152,150h-4l-.95-30a130,130,0,1,0,5.9,0Z" fill="url(#grad1)")
        path.earth-cover.fill(x="circle(c,130)")
        
        path.red.thick.reveal(when="next-0" animation="draw" x="arc(c,b,angle(b,c,a).rad).minor" target="arc")
        path.fill.teal.reveal(when="next-0" x="angle(c,d,point(d.x,c.y)).sup" target="angle1")
        path.fill.purple.reveal(when="next-0" x="angle(b,c,a).sup" name="ang" target="angle2")
        path.thin.white.reveal(when="next-0" animation="draw" x="segment(c,b)")
        path.blue.transparent(x="circle(c,130)" target="circ")
        
        image.obelisk.var(xlink:href="images/obelisk.svg" height=60 width=8 style="transform: translate(${b.x-4}px, ${b.y-60}px) rotate(-${angle(b,c,a).rad}rad)")

:::

---
> id: eratosthenes-2

Măsurătoarea lui Eratostene a fost unul din cele mai importante experimente din antichitate.
Estimarea lui pentru dimensiunea Pământului a fost surprinzător de precisă, în special
având în vedere că el avea acces doar la instrumente de măsurare foarte de bază.

::: column(width=280)

    x-media(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

Bineînțeles că poate fi dificil să convertim rezultatele sale inițiale în 
unități moderne precum kilometri. În Grecia Antică, distanțele se măsurau în 
_stadia_ (aproximativ 160m), dar nu exista un standard universal. Fiecare zonă
avea o versiune ușor diferită și nu se cunoaște care a fost cea folosită de Eratostene.

În următoarele secole oamenii de știință au încercat să folosească alte metode
pentru a calcula raza Pământului - uneori obținând rezultate incorecte și foarte diferite.

Una dintre aceste măsuratori incorecte l-a determinat pe Cristofor Columb
să navigheze la vest de Portugalia. El a presupus că Pământul era mult mai mic decât
în realitate și a sperat să ajungă în India. De fapt, el a ajuns pe un continent
diferit care se afla între: America.

:::

---

### Segmente

{.todo} În curând!

    // The last part of a circle that we can find the area of is called a segment, not
    // to be confused with a line segment. A segment of a circle is the area of a
    // circle that is bounded by a chord and the arc with the same endpoints as the
    // chord. The area of a segment is Asegment=Asector−A△ABC



--------------------------------------------------------------------------------



## Teorema Cercului

> section: circle-theorems
> sectionStatus: dev

https://www.mathsisfun.com/geometry/circle-theorems.html
https://mathsmadeeasy.co.uk/gcse-maths-revision/circle-theorems-gcse-revision-and-worksheets/
http://amsi.org.au/teacher_modules/Circle_Geometry.html

__[CC] Identifică și descrie relațiile dintre unghiurile, razele si corzile înscrise.
Include relația dintre unghiul la centru, unghiul înscris și unghiul circumscris.
Unghiurle înscrise pe un diametru sunt unghiuri drepte; raza unui cerc este perpendiculară pe
tangenta în care raza intersectează cercul.__

An inscribed angle is an angle with its vertex is the circle and its sides
contain chords. The intercepted arc is the arc that is on the interior of the
inscribed angle and whose endpoints are on the angle. The vertex of an inscribed
angle can be anywhere on the circle as long as its sides intersect the circle to
form an intercepted arc.

__Inscribed Angle Theorem__
The measure of an inscribed angle is half the measure of its intercepted arc.
To prove the Inscribed Angle Theorem, you would need to split it up into three
cases, like the three different angles drawn from the Investigation.

__Congruent Inscribed Angle Theorem__
Inscribed angles that intercept the same arc are congruent.

__Inscribed Angle Semicircle Theorem__
An angle that intercepts a semicircle is a right angle.

In the Inscribed Angle Semicircle Theorem we could also say that the angle is
inscribed in a semicircle. Anytime a right angle is inscribed in a circle, the
endpoints of the angle are the endpoints of a diameter. Therefore, the converse
of the Inscribed Angle Semicircle Theorem is also true.

When an angle is on a circle, the vertex is on the circumference of the circle.
One type of angle on a circle is one formed by a tangent and a chord.

__Chord/Tangent Angle Theorem__
The measure of an angle formed by a chord and a tangent that intersect on the
circle is half the measure of the intercepted arc.

From the Chord/Tangent Angle Theorem, we now know that there are two types of
angles that are half the measure of the intercepted arc; an inscribed angle and
an angle formed by a chord and a tangent. Therefore, any angle with its vertex
on a circle will be half the measure of the intercepted arc.

An angle is considered inside a circle when the vertex is somewhere inside the
circle, but not on the center. All angles inside a circle are formed by two
intersecting chords.

__Intersecting Chords Angle Theorem__
The measure of the angle formed by two chords that intersect inside a circle is
the average of the measure of the intercepted arcs.

An angle is considered to be outside a circle if the vertex of the angle is
outside the circle and the sides are tangents or secants. There are three types
of angles that are outside a circle: an angle formed by two tangents, an angle
formed by a tangent and a secant, and an angle formed by two secants. Just like
an angle inside or on a circle, an angle outside a circle has a specific
formula, involving the intercepted arcs.

__Outside Angle Theorem__
The measure of an angle formed by two secants, two tangents, or a secant and a
tangent drawn from a point outside the circle is equal to half the difference
of the measures of the intercepted arcs.

When two chords intersect inside a circle, the two triangles they create are
similar, making the sides of each triangle in proportion with each other. If we
remove AD and BC the ratios between AE, EC, DE, and EB will still be the same.

__Intersecting Chords Theorem__
If two chords intersect inside a circle so that one is divided into segments of
length a and b and the other into segments of length c and d then ab=cd. In
other words, the product of the segments of one chord is equal to the product
of segments of the second chord.

In addition to forming an angle outside of a circle, the circle can divide the
secants into segments that are proportional with each other.

If we draw in the intersecting chords, we will have two similar triangles.

From the inscribed angles and the Reflexive Property (∠R≅∠R),△PRS∼△TRQ. Because
the two triangles are similar, we can set up a proportion between the
corresponding sides. Then, cross-multiply. ac+d=ca+b⇒a(a+b)=c(c+d)

__Two Secants Segments Theorem__
If two secants are drawn from a common point outside a circle and the segments
are labeled as above, then a(a+b)=c(c+d). In other words, the product of the
outer segment and the whole of one secant is equal to the product of the outer
segment and the whole of the other secant.

If a tangent and secant meet at a common point outside a circle, the segments
created have a similar relationship to that of two secant rays. Recall that the
product of the outer portion of a secant and the whole is equal to the same of
the other secant. If one of these segments is a tangent, it will still be the
product of the outer portion and the whole. However, for a tangent line, the
outer portion and the whole are equal.

__Tangent Secant Segment Theorem__
If a tangent and a secant are drawn from a common point outside the circle (and
the segments are labeled like the picture to the left), then a2=b(b+c). This
means that the product of the outside segment of the secant and the whole is
equal to the square of the tangent segment.

---

### Teorema lui Thlaes

Proof using isosceles triangles

Combines all of Euclidean Geometry

{.todo} TODO



--------------------------------------------------------------------------------



## Poligoane ciclice

> sectionStatus: dev
> section: cyclic-polygons

__[CC] Construct an equilateral triangle, a square, and a regular hexagon
inscribed in a circle.__

An inscribed polygon is a polygon where every vertex is on a circle. Note, that
not every quadrilateral or polygon can be inscribed in a circle. Inscribed
quadrilaterals are also called cyclic quadrilaterals. For these types of
quadrilaterals, they must have one special property. We will investigate it here.

This investigation shows that the opposite angles in an inscribed quadrilateral
are supplementary. By cutting the quadrilateral in half, through the diagonal,
we were able to show that the other two angles (that we did not cut through)
formed a linear pair when matched up.

Inscribed Quadrilateral Theorem: A quadrilateral is inscribed in a circle if
and only if the opposite angles are supplementary.

https://www.youtube.com/watch?v=bJOuzqu3MUQ



--------------------------------------------------------------------------------



## Sfere, Conuri și Cilindri

> section: spheres-cones-cylinders
> id: solids

În capitolele precedente, am studiat proprietățile cercurilor pe o suprafață plană.
Dar lumea noastră este de fapt tridimensională, așadar hai sa aruncăm o privire asupra
câtorva corpuri geometrice 3D care au ca bază un cerc:

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} Un [__cilindru__](gloss:cylinder) este format din două cercuri paralele
și congruente unite printr-o suprafață curbată.

::: column(width=220)

    x-solid(size=220)

{.text-center} Un [__con__](gloss:cone) are o bază circulară care este unită 
printr-o suprafață curbată de un singur punct (numit vertex).
 
::: column(width=220)

    x-solid(size=220 static)

{.text-center} Fiecare punct de pe suprafața unei [__sfere__](gloss:sphere) se află
la aceeași distanță față de centrul său.

:::

Observă cum definiția unei sfere este aproape identică cu definiția
[[cercului|razei|cubului]] – cu excepția că este în spațiul tridimensional!

---
> id: gasometer

### Cilindrul circular

::: column.grow

Aici se poate vedea _Gazometrul_ din Oberhausen, Germania. Aici se stoca gazul natural 
folosit pe post de carburant de către fabricile și centralele electrice din vecinătate.
Gazometrul are o înălțime de 120m, iar baza și acoperișul sunt două cercuri mari cu 
raza de 35m. Apar două întrebări importante la care inginerii ar dori să răspundă:

* Cât gaz natural poate fi stocat? Acesta este [[volumul|aria|diametrul]] 
  unui cilindru.
* {.reveal(when="blank-0")} Cât oțel este necesar pentru a construi gazometrul?
  Acesta este (aproximativ) [[aria totală|circumferința|diagonala]] cilindrului.

{.reveal(when="blank-0 blank-1")} Hai să încercăm să găsim formulele de calcul pentru
ambele rezultate:

::: column(width=300)

    x-media(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} Gazometrul Oberhausen

:::

---
> id: cylinder-prism

#### Volumul unui Cilindru

Partea de sus și partea de jos ale unui cilindru sunt două cercuri congruente,
numite __baze__. __{.m-blue} înălțimea *h*__ a unui cilindru este lungimea perpendicularei
dintre aceste două baze, iar __{.m-red} raza *r*__ a unui cilindru este chiar
raza bazelor circulare.

Putem aproxima un cilindru folosind o [__prismă__](gloss:prism) cu ${n}{n|5|3,20,1} laturi.
Pe măsură ce numărul laturilor crește, prisma începe să semene din ce în ce mai mult cu 
un cilindru:

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

Chiar dacă  un cilindru nu este din punct de vedere tehnic o prismă, există
multe proprietăți comune. În ambele cazuri putem afla volumul înmulțind aria
__{.m-red} bazei__ cu __{.m-blue} înălțimea__ lor. Asta înseamnă că un cilindru
cu raza _{.b.m-red} r_ și înălțimea _{.b.m-blue} h_ are volumul

{.text-center} `V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")} De reținut că raza și înălțimea trebuie să fie exprimate în aceeași 
unitate de măsură. De exemplu, dacă _r_ și _h_ sunt în cm, atunci volumul va fi în
[[`"cm"^3`|`"cm"^2`|cm]].

---
> id: oblique-cylinder
> goals: slide

::: column.grow

În exemplele de mai sus, cele două baze ale cilindrului se află întotdeauna 
_una direct deasupra celeilalte_: numim asta __cilindru drept__. 
Dacă bazele nu se află direct una deasupra celeilalte, avem un  
__cilindru oblic__. Bazele sunt tot paralele, dar lateralele par că "se înclină" 
într-un unghi diferit de 90°.

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-media(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} _Turnul din Pisa_ din Italia nu este chiar un cilindru oblic.

:::

---
> id: cavalieri
> goals: slide

Volumul unui cilindru oblic este exact la fel ca cel al unui cilindru drept
care are aceeași rază și înălțime. Aceasta se datorează [__Principiului lui
Cavalieri__](gloss:cavalieri), nume dat dupa matematicianul italian
[Bonaventura Cavalieri](bio:cavalieri): dacă două corpuri geometrice au 
aceeași secțiune transversală și aceeași înălțime, atunci ele vor avea același volum.

Imaginează-ți că tai un cilindru într-o mulțime de de discuri subțiri.
Putem glisa apoi aceste discuri orizontale astfel încât să obținem un 
cilindru oblic. Volumul discurilor individuale nu se schimbă pe măsură ce
cilindrul devine oblic, de aceea volumul total rămâne constant:

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::

    // TODO You must always use the _perpendicular_ height. This is
    // the vertical line to left in the figure above.

    // TODO Volume of horizontal cylinder segments
    // https://www.mathopenref.com/cylindervolpartial.html

---
> id: cylinder-surface

#### Aria unui Cilindru

::: column.grow

Pentru a afla aria unui cilindru, avem nevoie să-i "desfășurăm" [pânza](gloss:net). 
Poți încerca asta pe cont propriu, dezlipind, de exemplu, eticheta de pe 
un borcan cu mâncare.

Există două [[cercuri|sfere|pătrate]], unul în partea de sus și unul în partea de jos
a unui cilindru. Partea curbă este de fapt un [[dreptunghi|pătrat|elipsă]] mare.

* {.reveal(when="blank-0 blank-1")} Cele două cercuri au fiecare aria
  _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.
* {.reveal(when="eqn-0")} Înălțimea dreptunghiului este
  _{x-equation.small(solution="h" keys=" " short-var)}_
  _{span.reveal(when="eqn-1")} și lungimea dreptunghiului este la fel ca
  [[circumferința|diametrul|tangenta]] cercurilor:_
  _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

Rezultă că suprafața totală a unui cilindru de raza _r_ și înălțimea 
_h_ este dată de

{.text-center} `A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_.

---
> id: cylinder-real-life

    figure: x-media(src="images/cylinders.jpg" width=460 height=125)

Cilindrii se află peste tot în lumea noastră - de la conserve de băuturi carbogazoase 
până la hârtie igienică sau conducte de apă. Poți găsi și alte exemple?


_Gazoometrul_ de deasupra avea raza de 35m și înălțimea de 120m. Acum îi putem 
calcula volumul care este aproximativ [[461,000 ± 1000]]`"m"^3`, iar aria sa 
este aproximativ [[34,080 ± 100]]`"m"^2`.

---
> id: cone

### Conuri

::: column.grow

Un [__con__](gloss:cone) este un corp geometric tridimensional care are o 
__{.m-red}bază__ circulară. Laterala sa se “îngustează în sus” așa cum se vede în diagramă și
se termină într-un punct unic numit __{.m-green}vertex__.

__{.m-red}Raza__ conului este raza bazei circulare și
__{.m-blue}înălțimea__ conului este lungimea perpendicularei de la bază la vertex.

La fel ca și alte figuri întâlnite anterior, conurile se află peste tot
în jurul nostru: cornete de înghețată, conuri de trafic, anumite acoperișuri
și chiar brazi de Crăciun. Ce alte idei îți mai vin în minte?

::: column(width=280)

    x-solid(size=280)

:::

::: column(width=120 parent="padded-thin")

    x-media(src="images/ice-cream.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-media(src="images/traffic.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-media(src="images/roof.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-media(src="images/christmas.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-media(src="images/tipi.jpg" width=120 height=120 lightbox)

:::

---
> id: cone-volume

#### Volumul unui con

::: column.grow

Am calculat anterior volumul unui cilindru aproximându-l cu o prismă.
În mod similar, putem afla volumul unui con aproximându-l cu o
[__piramidă__](gloss:pyramid).

Iată o piramidă cu ${n}{n|5|3,18,1} fețe. Pe măsură ce numărul fețelor crește,
piramida începe să arate din ce în ce mai mult ca un con. De fapt, am putea
să ne gândim la un con ca la o piramida cu o _infinitate_ de muchii!

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

Aceasta înseamnă că putem folosi ecuația pentru volum:
`V = 1/3 "base" × "height"`. Baza conului este un cerc, așadar volumul unui con
de rază _r_ și înălțime _h_ este

{.text-center} `V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---
> id: cone-circumscribed

Observă asemănarea cu ecuația de calcul a volumului unui cilindru. Imaginază-ți că
desenezi _în jurul_ conului un cilindru care are aceeași bază și aceeași înăltime – 
acesta se numește __cilindru circumscris__. Acum, conul va ocupa exact 
[[o treime|o jumătate|un sfert]] din volumul cilindrului:

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey} Atenție: Ai putea crede că aproximarea printr-o infinitate de fețe minuscule 
este un pic “imprecisă”. Matematicienii au căutat mult timp o metodă mai simplă
pentru a calcula volumul unui con.. În 1900, marele matematician [David Hilbert](bio:hilbert)
chiar a numit această problemă drept una din cele 23 de probleme importante din matematică
rămase nerezolvate! Astăzi știm că de fapt este imposibil.

---
> id: oblique-cone
> goals: slide

::: column.grow

Asemenea unui cilindru, un con nu trebuie sa fie “drept”. Daca vertexul se află exact
deasupra centrului bazei, avem un __con drept__. Altfel, îl numim __con oblic__.

Putem folosi din nou principiul lui Cavalieri pentru a demonstra că toate 
conurile oblice au același volum, atâta timp cât baza și înălțimea sunt aceleași.

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### Aria unui Con

::: column.grow

Calcularea ariei unui con este un pic mai complicată. La fel ca mai înainte,
putem desfășura pânza conului. Mută glisorul pentru a vedea ce se întâmplă:
în acest caz, se obține un cerc și un [[sector circular|segment de cerc|arc de cerc]].

{.reveal(when="blank-0")} Acum trebuie doar să adunăm aria ambelor componente.
__{.m-yellow}Baza__ este un cerc de rază _r_, așadar aria sa este

{.text-center.reveal(when="blank-0")} `pill(A_"Base","yellow","circle") =`
_{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

Raza __{.m-green}sectorului circular__ este egală cu distanța de la muchia conului  
până la vertex. Aceasta se numește __{.pill.green.step-target(data-to="s")}înălțimea înclinată *s*__ 
a conului, care nu este aceeași cu __{.pill.blue.step-target(data-to="h")}înălțimea *h*__ normală. 
Putem afla înălțimea înclinată folosind [teorema lui Pitagora](gloss:pythagoras-theorem):

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_       |
| `s`   | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
{.eqn-system}

::: column(width=280)

    x-geopad.sketch.no-background(width=280 height=200): svg
      circle(x="point(140, 10)" name="a" hidden)
      circle(x="point(140, 170)" name="b" hidden)
      circle(x="point(220, 170)" name="c" hidden)
      circle(x="point(60, 170)" name="d" hidden)
      ellipse(cx=140 cy=172 rx=81 ry=20)
      path(x="angle(a,b,c)" size=12)
      path(x="triangle(a,c,d)")
      path.yellow(x="segment(b,c)" label="r" target="r")
      path.green(x="segment(a,c)" label="s" target="s")
      path.blue(x="segment(a,b)" label="h" target="h")

:::

---
> id: cone-surface-1

::: column.grow

_{span.pill.step-target.red(data-to="arc")}Lungimea arcului_ sectorului circular este egală cu
[[circumferința|diametrul|arcul de cerc al]] _{span.pill.step-target.yellow(data-to="base")}bazei_:
_{span.reveal(when="blank-0")}`2 π r`. Acum putem calcula aria sectorului circular folosind
[formula](gloss:circle-sector) obținută într-un capitol anterior:_

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")
| `pill(A_"Sector","green","sector")` | `=` | `pill(A_"Circle","teal","circle") × pill("arc","red","arc") / pill("circumference","teal","circumference")` |
|                | `=` | _{x-equation(solution="π r sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
:::

::: column(width=280)

    x-geopad.sketch.no-background(width=280 height=300 style="margin-top: -20px"): svg
      circle(x="point(140,110)" name="c1" hidden)
      circle(x="point(140,250)" name="c2" hidden)
      circle(x="point(235,141.5)" name="a" hidden)
      circle(x="point(45,141.5)" name="b" hidden)

      path.yellow.fill.light(x="circle(c2, 40)" target="base")
      path.yellow(x="circle(c2, 40)" target="base")
      path.yellow(x="segment(c2,point(180, 250))" label="r" target="base")
      path.red.thick.reveal(when="blank-0" animation="draw" duration=1500 x="circle(c2, 40)")

      path.teal.fill.light(x="circle(c1, 100)" name="circ" target="circle")
      path.green.fill.light(x="sector(c1, a, 2.5)" target="sector circle")

      path.green(x="segment(c1, a)" label="s")
      path.green(x="segment(c1, b)" label="s")
      path.red.thick(x="arc(c1, a, 2.5)" target="arc")
      path.teal.thick.transparent(x="circle(c1, 100)" target="circumference")

:::

---
> id: cone-surface-2

La final, trebuie doar să mai adunăm aria __{.m-yellow}bazei__ și aria 
__{.m-green}sectorului__ pentru a obține aria totală a conului:

{.text-center} `A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

### Sfera

::: column.grow

O [__sferă__](gloss:sphere) este un corp geometric tridimensional format din toate
punctele situate la aceeași distanță față de un __{.m-green}centru *C*__ dat. Această
distanță se numește __{.m-red}raza *r*__ a sferei.

Te poți gândi la o sferă ca la un “[cerc](gloss:circle) tridimensional”. Asemenea
unui cerc, o sferă are un __{.m-blue}diametru *d*__, care are lungimea 
[[de două ori mai mare ca|jumătate din]] raza cercului, precum și corzi și secante.

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} într-unul din [capitolele precedente](/course/circles/tangets-chords-arcs#eratosthenes-1),
ai aflat cum matematicianul grec [Eratostene](bio:eratosthenes) a calculat raza Pământului
folosind umbra unui stâlp - era 6.371km.
Acum hai să încercăm să aflăm volumul și aria totală a Pământului.
[Continuă](btn:next)

---
> id: sphere-volume

#### Volumul unei sfere

Pentru a afla volumul unei sfere, va trebui sa folosim din nou Principiul lui Cavalieri.
Hai să începem cu o semisferă - o sferă pe jumătate de-a lungul ecuatorului. 
Avem nevoie și de un cilindru care are aceeași rază și aceeași înălțime ca și semisfera,
dar cu un con inversat „decupat” la mijloc.

Pe măsură ce muți glisorul de deasupra, se poate vedea secțiunea transversală a ambelor forme
la o înălțime specifică deasupra bazei:

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.r.no-background(width=220 height=120): svg
      circle(x="point(110,110)" name="c1")
      circle(x="c1.shift(0,-100*h)" name="h1")
      circle(x="h1.shift(-100 * sqrt(1-h*h),0)" name="a1")

      path.yellow.fill.light(x="triangle(c1,a1,h1)" target="tri")
      path(x="arc(c1,point(10,c1.x),pi)")
      path(x="segment(point(10,c1.x),point(210,c1.x))")
      path.green.thin(x="segment(c1,a1)" label="r" target="r tri")
      path.blue.thin(x="segment(h1,c1)" label="h" target="h h1 tri")
      path.red.thick(x="segment(h1,a1)" label="x" target="x tri")
      path.red.thick(x="segment(h1,point(220-a1.x,a1.y))")

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.r.no-background(width=220 height=120): svg
      circle(x="point(10,10)" name="a2" hidden)
      circle(x="point(210,10)" name="b2" hidden)
      path(x="polygon(a2,b2,point(210,110),point(10,110))")
      
      circle(x="point(110,110)" name="c2")
      circle(x="c2.shift(0,-100*h)" name="h2")
      circle(x="h2.shift(-100*h,0)" name="x2")

      path.thin(x="segment(a2,c2)")
      path.thin(x="segment(b2,c2)")
      path.blue.thin(x="segment(h1,c1)" label="h" target="h")
      path.blue.thin(x="segment(h1,point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(10,h2.y),point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(110+100*h,h2.y),point(210,h2.y))")

:::

    x-slider(steps=100)


{.reveal(when="slider-0")} Să încercăm să aflăm aria secțiunii transversale a 
ambelor solide la o distanță de __{span.pill.blue.step-target(data-to="h")}înălțime *h*__
deasupra bazei.

::: column.grow

{.reveal(when="slider-0")} Secțiunea transversală a semisferei este întotdeauna un
[[cerc|inel|cilindru]].

{.reveal(when="blank-0")} __{span.pill.red.step-target(data-to="x")}Raza
*x*__ a secțiunii transversale este o porțiune dintr-un _{span.pill.yellow.step-target(data-to="tri")}
triunghi dreptunghic_, așa că putem folosi [teorema lui Pitagora](gloss:pythagoras-theorem):

::: .reveal(when="blank-0")
{.text-center} `pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")`.

Acum, aria secțiunii transversale este
    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)
:::

::: column.grow.reveal(when="eqn-0")

Secțiunea transversală a cilindrului decupat este întotdeauna un [[inel|cerc|con]].

::: .reveal(when="blank-1")
Raza cavității este _h_. Putem calcula aria inelului scăzănd aria cavității din aria cercului mai mare:

| _A_ | = | `π r^2 - π h^2` |
|     | = | `π (r^2 - h^2)` |
{.eqn-system}
:::

:::

---
> id: sphere-volume-1

Se pare că pentru ambele corpuri geometrice aria secțiunii trannsversale este aceeași la fiecare nivel.
Conform principiului lui Cavalieri, ambele corpuri geometrice trebuie să aibă și același
[[volum|arie|circumferință]]! _{span.reveal(when="blank-0")}Putem afla volumul semisferei
scăzând volumul [cilindrului](gloss:cylinder-volume) și volumul [conului](gloss:cone-volume):_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")
| `V_"Semisferă"` | = | `V_"Cilindru" - V_"Con"` |
|                  | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |
:::

---
> id: sphere-volume-2

O sferă este formată din [[două]] semisfere, _{span.reveal(when="blank-0")}iar asta înseamnă 
că volumul ei este_

{.text-center.reveal(when="blank-0")} `V = 4/3 π r^3`.

---
> id: earth-volume
> goals: numbers

::: column.grow

Pământul este (aproximativ) o sferă de rază 6.371\ km. Așadar volumul său este

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
|     | `=` | _{span.numbers}1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} Densitatea medie a Pământului este de `5510 "kg/m"^3`.
Aceasta înseamnă că are o masă totală de

{.text-center.reveal(when="numbers")} `"Masă" = "Volum" × "Densitate" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} Acesta este un 6 urmat de 24 de zerouri!

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

Dacă vei compara ecuațiile pentru volumul cilindrului, al conului și al sferei, vei observa
una dintre cele mai satisfăcătoare relații din geometrie. Imaginează-ți că avem un cilindru
cu aceeași înălțime ca diametrul bazei sale. Acum putem încadra perfect atât un con 
cât și o sferă în interiorul său:

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} Acest con are raza `r` și înălțimea `2r`. Volumul său este
_{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} Această sferă are raza `r`. Volumul său este
_{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} Acest cilindru are raza `r` și înălțimea `2r`. Volumul său este
_{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} Observă cum, dacă [[adunăm|scădem|înmulțim]] 
volumul conului și al sferei, obținem exact volumul cilindrului!

---
> id: sphere-maps
> goals: move projection

#### Aria Sferei

Este foarte dificil să găsim formula de calcul pentru aria unei sfere. Unul din motive
este faptul că nu putem deschide și “aplatiza” suprafața unei sfere la fel cum am făcut 
anterior la conuri și cilindri.

Aceasta este o problemă aparte când se încearcă să se construiască o hartă. Pământul
are o suprafață curbată, tridimensională, dar orice hartă tipărită trebuie să fie plată
și bidimensională. Aceasta înseamnă că geografii trebuie să trișeze: prin întinderea 
sau turtirea anumitor zone.

Aici se pot vedea diferite tipuri de hărți, numite __proiecții__. Încearcă să muți 
pătratul roșu și privește cum arată _de fapt_ această zona pe un glob:

    .sphere-maps
      x-select.tabs
        .projection(data-name="mercator") Mercator
        .projection(data-name="cylindrical") Cilindrică
        .projection(data-name="robinson") Robinson
        .projection(data-name="mollweide") Mollweide
      .map-body
        .left
          svg.sphere-map(width=240 height=240 viewBox="0 0 240 280")
            path.outline
            path.grid
            path.land
            path.map-select
        .right
          svg.sphere-map#projection(width=440 height=280 viewBox="0 0 440 280")
            path.outline
            path.grid
            path.land
            rect.map-select(x="-24" y="-24" width=48 height=48 style="cursor: move")
          p.caption În timp ce muți pătratul pe hartă, observă cum se schimbă dimensiunea și forma #[em actual] pe un glob tridimensional.
    x-gesture(target="#projection" slide="50, 20")

---
> id: sphere-surface

Pentru a afla aria  unei sfere putem face din nou o aproximare folosind o formă diferită - 
de exemplu, un poliedru cu o mulțime de fețe. Pe măsură ce numarul fețelor crește, poliedrul
începe să semene din ce în ce mai mult cu o sferă.

{.todo} ÎN CURÂND: Demonstrația pentru calcularea ariei sferei

    // If we connect the small polygons to the center of the sphere, we get
    // lots of small pyramids pointing inwards. The diagram shows one of these pyramids
    // in red. The height of each pyramid is the [[radius|diameter]] of the sphere.
    
    // Here is a
    // volume = lots of cones = 1/3 * radius * lots of bases = 1/3 * radius * surface area
    
    // And therefore,
    // surface area = 3 * volume / radius = 
    
    // In other words, the surface area of a sphere with radius _r_ is `S = 4 π r^2`.

    // ---
    // > id: earth-surface
    // 
    // surface of earth



--------------------------------------------------------------------------------



## Secțiuni conice

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola

Cercul este una din cele patru forme diferite care pot fi create folosind "secționări" 
printr-un [con](gloss:cone). Aceasta se poate demonstra folosind conul luminos 
al unei lanterne:

    x-conic-section
    x-scale-box(width=760).conics
      .row
        .active
          p: strong Cerc
          include svg/circle.svg
        .hide
          p: strong Elipsă
          include svg/ellipse.svg
        .hide
          p: strong Parabolă
          include svg/parabola.svg
        .hide
          p: strong Hiperbolă
          include svg/hyperbola.svg

---
> id: conics-1

Dacă îndrepți lanterna vertical în jos , vezi [[un cerc|o elipsă|un oval]] de lumină. 
_{span.reveal(when="blank-0")}Dacă înclini conul, obții o [__elipsă__](gloss:ellipse). 
Daca îl înclini și mai mult, obții o [__parabolă__](gloss:parabola) 
sau o [__hiperbolă__](gloss:hyperbola)._

---
> id: conics-2

::: column.grow

Aceste patru au o denumire comună - [__secțiuni conice__](gloss:conic-section).
Chiar dacă arată foarte diferit, ele sunt strâns legate între ele: de fapt, ele
pot fi generate folosind aceeași ecuație!

Secțiunile conice au fost studiate pentru prima dată de matematicianul din Grecia Antică 
[Apollonius din Perga](bio:apollonius), care le-a și dat aceste nume neobișnuite.

În cursurile ulterioare, vei afla mult mai multe informații despre parabole și hiperbole.
Pentru moment, hai să aruncăm o privire mai atentă asupra elipsei.

::: column(width=300)

    x-media(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### Elipsa

O elipsă arată aproape ca un “cerc alungit”. De fapt, ai putea să te gândești la o elipsă
ca la un cerc cu _două centre_ - acestea se numesc __focarele elipsei__. Așa cum orice punct 
de pe un cerc se află situat la aceeași distanță față de centrul său, fiecare punct de pe o elipsă 
se află situat la aceeași _sumă a distanțelor_ față de cele două focare.

Dacă ai un fir lung conectat la două puncte fixe, poți desena o elipsă perfectă
trasând întinderea maximă a firelor:

{.todo} ÎN CURÂND: Desenarea interactivă a elipselor

    // ---
    // > id: ellipses-1
    // You can also move the focal points around. Notice how, if they are further
    // apart, the ellipse will be [[more|less]] elongated. If they are close together,
    // it will look almost like a [[circle|parabola|trapezium]].

---
> id: ellipses-2
> goals: v0 v1 v2 v3

Există multe alte reprezentări fizice pentru a desena o elipsă:

::: column(width=320 parent="padded-thin")

    x-video(src="images/gears.mp4" poster="images/gears.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Gears

::: column(width=320)

    x-video(src="images/trammel.mp4" poster="images/trammel.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Trammel

::: column(width=320)

    x-video(src="images/disk.mp4" poster="images/disk.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Disk

::: column(width=320)

    x-video(src="images/swing.mp4" poster="images/swing.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Swing

:::

---
> id: orbits

### Orbite Planetare

::: column.grow

Poate că îți amintești de la începutul acestui curs faptul că astronomii din 
Grecia Antică credeau că Pământul se află în centrul universului și că Soarele,
Luna și planetele se rotesc în jurul Pământului pe orbite circulare.

Din păcate, observarea astronomică a cerului nu prea a susținut această idee.
De exemplu, Soarele apărea mai mare în unele perioade ale anului și mai mic
în altele. Pe un cerc orice punct ar trebui să se afle la o distanță 
[[identică|crescătoare|descrescătoare]] față de centrul său.

::: column(width=330)

    x-media(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} Astronomul grec Hipparchus din Nicaea

:::

---
> id: epicycles
> goals: play

Pentru a rezolva această problemă, astronomii au adăugat __epicicluri__ modelului lor
de sistem solar: planetele se mișcă pe un cerc mare în jurul Pământului, în timp ce se 
simultan se rotesc și pe un cerc mai mic. Acesta a fost modelul universului nostru cel mai acceptat
timp de peste 1000 de ani, în ciuda faptului că era foarte complicat:


::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} Această planetă face ${n}{n|6|2,12,1} rotații în jurul cercului mic
(__epiciclul__) în timpul unei rotații în jurul cercului mare (__destinatarul__).

::: column(width=320)

    x-media(src="images/epicycles.jpg" width=320 height=320)

{.caption} Desen din secolul 16 ce prezintă epiciclurile din __modelul geocentric__. Cuvântul
din limba greacă “planetes” înseamnă “călător”.
:::

---
> id: kepler
> goals: play

::: column.grow

De-a lungul timpurilor, oamenii și-au dat seama că Pământul era doar una din multele 
planete care orbitau în jurul soarelui (_modelul heliocentric_), însă abia în 1609 
astronomul [Johannes Kepler](bio:kepler) a descoperit că planetele se mișcă de fapt
pe _orbite eliptice_.

Soarele se află într-unul din focarele acestor elipse. Planetele accelerează pe măsură
ce se apropie tot mai mult de soare și încetinesc pe măsură ce se îndepărtează.

::: column(width=320)

    .r
      svg(width=320 height=240)
        path.sweep(fill="#0f82f2" opacity="0.25")
        path.orbit(fill="none" stroke="#ccc" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle.earth(cx=280 cy=120 r=10 fill="#0f82f2")
        circle(cx=220 cy=120 r=15 fill="#fd8c00")
        circle(cx=100 cy=120 r=4 fill="#ccc")
      x-play-btn

:::

---
> id: newton
> goals: apple

Câteva decenii mai târziu, [Isaac Newton](bio:newton) a putut să dovedească 
observațiile lui Kepler folosind noile sale legi ale [__gravitației__](gloss:gravity).
Newton și-a dat seama că există o forță între două mase din univers - similară
cu atracția dintre doi magneți.

Gravitația este ceea ce face ca totul să cadă pe pământ și gravitația este, de asemenea,
ceea ce face ca planetele să se învârtă în jurul soarelui. Viteza mare 
cu care se mișcă planetele este cea care previne ca acestea să cada direct în soare.

::: column(width=280)

    // Source: https://www.flickr.com/photos/hikingartist/6217869031
    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

Folosind legile lui Newton, poți deriva calea pe care o iau obiectele atunci când se mișcă
sub forța de gravitație. Se pare că planetele se mișcă pe traiectorii în formă de elipsă, 
dar alte obiecte precum cometele pot călători pe traiectorii [parabolice](gloss:parabola)
sau [hiperbolice](gloss:hyperbola): ele zboară până în apropierea soarelui înainte de
a se întoarce și de a fi aruncate înapoi în univers fără a se mai întoarce vreodată.

Conform legendei, căderea unui măr din copac l-a inspirat pe Newton să se gândească la gravitație.
El a fost unul din cei mai influenți oameni de știință ai tuturor timpurilor, iar ideile
sale au modelat înțelegerea noastră asupra lumii timp de aproape 300 de ani - până când
Albert Einstein a descoperit relativitatea în 1905.

:::
