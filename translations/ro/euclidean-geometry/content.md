# Geometria Euclidiană

## Introducere

> id: thales
> goals: p1 p2 p3 move
> section: introduction
> color: "#0F82F2"
> level: Intermediate
> next: transformations

::: column.grow
Matematica a fost studiată timp de mii de ani - la prezicerea anotimpurile,
calcularea taxelor sau pentru estimarea suprafaței unui teren agricol.

Matematicienii din Grecia Antică, în jurul anului 500 BC, au fost uimiți de modelele
matematice dorindu-și astfel să le exploreze și să le explice. La început ei au studiat matematica
doar de amuzament, fără a avea ca scop un rezultat anume.
::: column(width=300)

    x-img(src="images/tablet.jpg" width=300 height=210)

{.caption} Tabletă babiloniană din lut, datată 1800 BC, ce conține calcule geometrice.
:::

Unul dintre acești matematicieni a fost [Thales din Milet](bio:thales), care a făcut
o descoperire surprinzătoare în timp ce se juca cu formele geometrice:

::: column(width=420)

    x-geopad.sticky(width=420 height=320): svg

::: column.grow
Începe prin a alege două puncte oriunde în caseta din stânga.
_{span.reveal(when="p1 p2")} Hai să desenăm un semicerc în jurul acestor puncte._

{.reveal(when="p1 p2")} Acum alege un al treilea punct care să se afle pe
[circumferința](target:circumf) semicercului.

{.reveal(when="p3")} Hai sa desenăm [triunghiul](target:triangle) format de cele
două capete ale semicercului și de punctul ales pe circumferință.

{.reveal(when="p3" delay=1000)} Încearcă să modifici poziția unuia dintre cele trei puncte și
observă ce se întamplă cu [unghiul](target:angle) din vârful de sus al triunghiului.
_{span.reveal(when="move")} Pare că e întotdeauna [[90]]°!_
_{span.reveal(when="blank-0")} Asta înseamnă că triunghiul este [[dreptunghic|echilateral|ascuțit]]._
:::

---
> id: thales-1

Acesta a fost un rezultat spectaculos pentru Thales. De ce _semicercurile_ și
_triunghiurile dreptunghice_, două forme complete diferite, ar putea fi conectate în acest
mod fundamental. Legenda spune ca Thales a fost atât de uluit de descoperirea sa încât a sacrificat
un bou în semn de mulțumire zeilor.

    figure
      x-img(src="images/temple.svg" width=400 height=170)

Totuși, simpla _observare_ a unei astfel de relații nu a fost suficientă pentru Thales.
El a vrut să înțeleagă _de ce_ este adevarată și să verifice că este _întotdeauna_ adevărată,
nu doar în cele câteva exemple încercate de el.

O dovadă care explică logic, fără nicio îndoială, de ce ceva este adevărat se numește
[__demonstrație__](gloss:proof). În următoarele lecții vei învăța un set de tehnici geometrice care
ne vor permite într-un final să demonstrăm _teorema lui Thales_.

---
> id: applications

Dar geometria nu este utilă doar pentru a demonstra teoreme - ea există oriunde în jurul nostru, în natură,
arhitectură, tehnologie și design. Avem nevoie de geometrie peste tot, de la măsurarea distanțelor
până la construcția zgârie-norilor sau lansarea sateliților în spațiu. Iată câteva exemple suplimentare:

::: column(width=200)

    x-img(src="images/pyramids.jpg" credit="© Ricardo Liberato" width=200 height=200)

{.caption} Geometria le-a permis vechilor egipteni să construiască piramide gigantice, perfect regulate.

::: column(width=200)

    x-img(src="images/sextant.jpg" width=200 height=200)

{.caption} Marinarii folosesc sextante pentru determinarea poziției geografice în timp ce se află pe mare
folosind unghiuri formate de soare sau stele.

::: column(width=200)

    x-img(src="images/video-game.jpg" credit="© Eric Lascoña" width=200 height=200)

{.caption} Geometria este necesară pentru a crea jocuri video sau filme grafice realiste.
::: column(width=200)

    x-img(src="images/plane.jpg" width=200 height=200)

{.caption} Geometria poate ajuta la designul și testarea unor modele noi de avioane,
făcându-le astfel mai sigure și mai eficiente.
::: column(width=200)

    x-img(src="images/cctv.jpg" lightbox width=200 height=200)

{.caption} Geometria a fost esențială pentru proiectarea acestui zgârie-nori din Beijing –
și pentru a se asigura că nu se va dărâma.

::: column(width=200)

    x-img(src="images/satellite.jpg" lightbox credit="NASA" width=200 height=200)

{.caption} Geometria ne permite să prezicem poziția stelelor, planetelor și sateliților
care orbitează Pământul.
:::

În acest curs, precum și în următoarele vei învăța despre o mulțime de unelte diferite și
tehnici geometrice descoperite de matematicieni de-a lungul multor secole. De asemenea,
vom vedea cum pot fi folosite aceste tehnici pentru a rezolva probleme importante din lumea reala.

---

## Axiomele lui Euclid

> section: axioms
> id: points

Înainte de a formula orice demonstrație avem nevoie de o terminologie comună care să ne permită
sa vorbim mai ușor despre obiectele geometrice. Acestea nu sunt neapărat interesante, dar ar trebui
ca  majoritatea să îți fie deja cunoscute:

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move.pulsate(cx=100 cy=30 target="move" label="P")
      circle.move.pulsate(cx=150 cy=100 target="move" label="Q")
      circle.move.pulsate(cx=40 cy=75 target="move")
      circle(x="point(200,50)" target="no-move")
      circle(x="point(70,120)" target="no-move" label="R")

::: column.grow
Un [__punct__](gloss:point) este o poziție anume din spațiu. Punctele descriu o poziție, dar nu au
_dimensiune_ sau _formă_. Ele sunt notate cu majuscule.

{.r} În Mathigon, [punctele mari, îngroșate](target:move) indică puncte interactive pe care le poți mișca,
în timp ce [punctele mai mici, goale la interior](target:no-move) indică puncte fixe pe care nu le poți mișca.
_{button.next-step} Continuă_
:::

---
> id: lines

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path.green(x="line(point(60,100),point(90,40))" label="a")
      path.red(x="line(point(50,120),point(150,150))" label="b")
      circle.move(name="P" cx=170 cy=55 label="P")
      circle.move(name="Q" cx=200 cy=130 label="Q")
      path.yellow(x="line(P,Q)")

::: column.grow
O [__dreaptă__](gloss:line) este un set infinit de puncte care se extind în ambele direcții.
Liniile sunt întotdeauna drepte și, la fel ca punctele, nu ocupă spațiu - nu au _lățime_.

{.r} Dreptele sunt notate cu litere mici precum _a_ sau _b_. Le putem nota și folosind
două puncte de pe dreaptă, cum ar fi
<span class="math"><mover><mi>PQ</mi><mo value="↔">↔</mo></mover></span> sau
<span class="math"><mover><mi>QP</mi><mo value="↔">↔</mo></mover></span>. Ordinea punctelor nu este importantă.
_{button.next-step} Continuă_
:::

---
> id: segments

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="a" cx=50 cy=50 label="A")
      circle.move(name="b" cx=90 cy=120 label="B")
      path.red(x="segment(a,b)")
      circle.move(name="c" cx=120 cy=40 label="C")
      circle.move(name="d" cx=210 cy=110 label="D")
      path.blue(x="segment(c,d)")

::: column.grow
{.r} Un [__segment de dreaptă__](gloss:line-segment) este bucata dintre două puncte ale unei drepte,
fără a se prelungi la infinit. Îl putem nota la fel ca pe dreaptă, dar fără săgeți
pe bara de deasupra: `bar(AB)` or `bar(BA)`. Ordinea punctelor nu este importantă.
_{button.next-step} Continuă_
:::

---
> id: rays

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="c" cx=40 cy=120)
      circle.move(name="d" cx=60 cy=40)
      path.green(x="ray(c,d)")
      circle.move(name="a" cx=90 cy=90 label="A")
      circle.move(name="b" cx=190 cy=130 label="B")
      path.yellow(x="ray(a,b)")

::: column.grow
O [__semidreaptă__](gloss:ray) este ceva între _dreaptă_ și _segment de dreaptă_:
se extinde la nesfârșit doar într-o singură parte. Te poți gândi la semidrepte ca la niște _raze de soare_:
ele încep dintr-un punct (soarele) și se prelungesc la infinit.

{.r} La notarea semidreptelor săgeata indică direcția în care se extinde la infinit,
de exemplu `vec(AB)`. De data aceasta ordinea punctelor _este_ importantă.
_{button.next-step} Continuă_
:::

---
> id: circles

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="a" cx=50 cy=60)
      path(x="segment(a,a.add(point(1,1).unitVector.scale(40)))" target="radius")
      path.red(x="circle(a,40)")

      circle.move(name="b" cx=170 cy=90)
      path(x="segment(b,b.shift(60,0))" target="radius")
      path.blue(x="circle(b,60)")

::: column.grow
{.r} Un [__cerc__](gloss:circle) este mulțime punctelor aflate la aceeași
[distanță](target:radius) față de un punct din centru. Această distanță se numește
[__rază__](gloss:circle-radius).
_{button.next-step} Continuă_
:::

---
> id: congruence
> goals: pair-a-a pair-b-b pair-c-c pair-d-d pair-e1-e2 pair-e1-e3 pair-e2-e3 pair-f-f

### Congruența

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path.fill.green(name="x" x="polygon(point(30,30),point(80,20),point(100,80),point(70,110),point(30,90))" label="A" label-class="white" target="move")
      path.fill.green.light(x="x.rotate(1).shift(190,10)" target="move")
      path.fill.green#congruent-path(x="x.rotate(1).shift(190,10)" target="move" label="B" label-class="white")

::: column.grow
Cele doua forme de la stânga arată identic. Au aceeași dimensiune și formă.
Putem [roti si translata] una din ele pentru a se potrivi exact pe cealaltă. În geometrie
spunem ca cele două forme sunt [__congruente__](gloss:congruent).

Simbolul pentru congruență este `≅` și vom nota `A ≅ B`.
:::

Iată câteva obiecte geometrice – conectează toate perechile care sunt congruente unele cu altele.
Amintește-ți că _mai mult de două_ forme pot fi congruente,
iar unele forme s-ar putea să nu fie congruente cu _nici o_ altă formă:

    svg.congruence(width=760 height=320 viewBox="0 0 760 320")
      g.lines
      g.obj(data-q="a" cx="145.2" cy="166.1")
    	polygon(points="119.6,146.6 131.7,186.9 170.9,175.1 139.7,159.5 154.4,145.2")
      g.obj(data-q="a" cx="376.4" cy="73.5")
    	polygon(points="388.1,44.7 353.1,68.2 376,102.2 381.7,67.8 399.7,77.6")
      g.obj(data-q="b" cx="93" cy="258")
    	rect(x="80" y="245" transform="matrix(0.5953 0.8035 -0.8035 0.5953 244.9541 29.6955)" width=26 height=26)
      g.obj(data-q="b" cx="264" cy="200")
        rect(x="251" y="187" transform="matrix(0.1863 0.9825 -0.9825 0.1863 411.3196 -96.636)" width=26 height=26)
      g.obj(data-q="c" cx="77" cy="59.5")
    	rect(x="54" y="36.5" transform="matrix(0.9159 0.4013 -0.4013 0.9159 30.3505 -25.8995)" width=46 height=46)
      g.obj(data-q="c" cx="238" cy="78")
        rect(x="215" y="55" transform="matrix(0.828 -0.5607 0.5607 0.828 -2.8011 146.8683)" width=46 height=46)
      g.obj(data-q="d" cx="510" cy="55")
    	polyline(points="539.9,68.9 489.7,78.3 506.7,27.5")
        path(d="M523.5,72c-2.4-12.7-11.4-22.4-22.9-26.3")
      g.obj(data-q="d" cx="501" cy="258")
    	polyline(points="497.8,287.8 475.2,242.1 528.7,244.7")
        path(d="M490.4,272.9c11.6-5.7,18.5-17.1,19.1-29.1")
      g.obj(data-q="e1" cx="417" cy="166.8")
        ellipse(transform="matrix(0.9464 -0.3229 0.3229 0.9464 -31.5073 143.6043)" cx="417" cy="166.8" rx="30.7" ry="17.1")
      g.obj(data-q="e2" cx="585" cy="138.2")
        ellipse(transform="matrix(0.4618 -0.887 0.887 0.4618 192.197 593.2707)" cx="585" cy="138.2" rx="17.1" ry="30.7")
      g.obj(data-q="e3" cx="618" cy="250.2")
        ellipse(transform="matrix(0.9089 -0.4171 0.4171 0.9089 -48.0564 280.5469)" cx="618" cy="250.2" rx="17.1" ry="30.7")
      g.obj(data-q="f" cx="670.8" cy="72.5")
        line(x1="649.4" y1="65.5" x2="692.1" y2="79.5")
        path(d="M647.6,72c-3.6-1.2-5.5-5-4.3-8.5s5-5.5,8.5-4.3c3.6,1.2,5.5,5,4.3,8.5C655,71.3,651.1,73.2,647.6,72z")
        path(d="M689.7,85.8c3.6,1.2,7.4-0.8,8.5-4.3s-0.8-7.4-4.3-8.5c-3.6-1.2-7.4,0.8-8.5,4.3C684.2,80.8,686.2,84.7,689.7,85.8z")
      g.obj(data-q="f" cx="705.1" cy="190.6")
        line(x1="693.9" y1="210.1" x2="716.4" y2="171.1")
        path(d="M699.9,213.2c-1.9,3.2-6,4.3-9.2,2.5c-3.2-1.9-4.3-6-2.5-9.2c1.9-3.2,6-4.3,9.2-2.5C700.7,205.8,701.8,209.9,699.9,213.2z")
        path(d="M722.1,174.8c1.9-3.2,0.8-7.4-2.5-9.2c-3.2-1.9-7.4-0.8-9.2,2.5c-1.9,3.2-0.8,7.4,2.5,9.2C716.1,179.1,720.2,178,722.1,174.8z")
      g.obj(data-q="g" cx="357" cy="265")
    	polyline(points="372.2,298.7 336,271.4 354.3,230.3")
    	path(d="M362.1,291.2c4.3-5.6,6.9-12.6,6.9-20.2c0-13.4-8-25-19.5-30.1")

---
> id: congruence-1

Două segmente sunt congruente dacă [[au aceeași lungime|se intersectează]]. Două unghiuri
sunt congruente dacă [[au aceeași mărime|se intersecteaza într-un punct]] (în grade).

Rețineți că _“congruent”_ nu înseamnă _“egal”_. De exemplu, nu e necesar ca dreptele și unghiurile
să fie orientate in aceeași direcție. Totuși, _congruența_ are multe din proprietățile _egalității_:

* Congruența este __simetrică__: daca `X ≅ Y` atunci și `Y ≅ X`.
* Congruența este __reflexivă__: orice formă este congruentă cu ea însăși. De exemplu, `A ≅ A`.
* Congruența este __tranzitivă__: dacă `X ≅ Y` și `Y ≅ Z` atunci și `X ≅ Z`.

---
> id: parallel

### Paralele și perpendiculare

::: column(width=240)

    x-geopad(width=240 height=200): svg
      path.red(x="line(point(30,100),point(70,20))" name="l1" mark="arrow" label="a")
      path.red(x="l1.shift(40,10)" mark="arrow" label="b")
      path.red(x="l1.shift(100,30)" mark="arrow" label="c")
      path.yellow(x="line(point(30,120),point(160,140))" name="l2" mark="arrow2" label="d")
      path.yellow(x="l2.shift(-30,40)" mark="arrow2" label="e")

::: column.grow
Două drepte care nu se intersectează niciodată se numesc [__paralele__](gloss:parallel).
Ele sunt orientate în aceeași direcție și distanța dintre ele este mereu
[[aceeași|crescătoare|descrescătoare]].

{.reveal(when="blank-0")} Un bun exemplu de linii paralele din viața reală sunt
_liniile de cale ferată_. Rețineți că mai mult de două linii pot fi paralele una cu alta!

{.reveal(when="blank-0")} În diagrame paralele se notează adăugând una sau mai multe
săgeți mici. În acest exemplu __{.m-red}`a ∥ b ∥ c`__ și __{.m-yellow}`d ∥ e`__.
Simbolul `∥` înseamnă _“este paralelă cu”_.
:::

---
> id: perpendicular

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path(x="angle(point(60,50),point(50,100),point(100,110))")
      path.blue(x="line(point(50,100),point(100,110))" label="a")
      path.green(x="line(point(50,100),point(70,0))" label="b")

::: column.grow
Opusul _paralelor_ este reprezentat de două drepte concurente care formează un unghi
de 90° (unghi drept).
Aceste drepte se numesc [__perpendiculare__](gloss:perpendicular).

{.r} În acest exemplu, vom scrie  _{.b.m-blue}a_ `⊥` _{.b.m-green}b_. Simbolul
`⊥` înseamnă _“este perpendiculară pe”_.
:::

---
> id: euclid

### Axiomele lui Euclid

::: column.grow
Matematicianii greci și-au dat seama ca pentru a scrie demonstrații formale
e nevoie de un _punct de pornire_: enunțuri simple și intuitive pe care toată lumea
le acceptă ca fiind adevărate.
Acestea se numesc [__axiome__](gloss:axiom) (sau _postulate_).

O parte de bază a matematicii o reprezintă combinarea diferitelor axiome pentru
a demonstra rezultate mai complexe folosind regulile logicii.

Matematicianul grec [Euclid din Alexandria](bio:euclid), care este adesea numit
_părintele geometriei_, a enunțat cele cinci axiome ale geometriei:
::: column(width=220)

    img(src="images/euclid.jpg" width=220 height=269)

{.caption} Euclid din Alexandria
:::

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="a" cx=30 cy=130 target="1_point")
      circle.move(name="b" cx=190 cy=30 target="1_point")
      path.red(x="segment(a,b)" target="1_line")

{.text-center }__Prima Axiomă__
Oricare [două puncte](target:1_point) pot fi unite printr-un singur
[segment de dreaptă](target:1_line).

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="c" cx=60 cy=100 target="2_segment")
      circle.move(name="d" cx=180 cy=60 target="2_segment")
      path.red(x="line(c,d)")
      path(x="segment(c,d)" target="2_segment")

{.text-center }__A Doua Axiomă__
Orice [segment de dreaptă](target:2_segment) poate fi extins într-o dreaptă infinită<br>

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="e" cx=120 cy=80 target="3_center" label="P")
      circle.move(name="f" cx=170 cy=130)
      path(x="segment(e,f)" label="r" target="3_radius")
      path.red(x="circle(e,distance(e,f))" target="3_circle")

{.text-center }__A Treia Axiomă__
Fiind date un [punct _P_](target:3_center) și o [distanța _r_](target:3_radius), se
poate trasa [un cerc](target:3_circle) cu centrul în _P_ și raza _r_.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="x" cx=50 cy=100)
      circle(hidden name="xa" x="x.translate(point(110,80).subtract(x).rotate(pi/4).unitVector.scale(50))")
      circle(hidden name="xb" x="x.translate(point(110,80).subtract(x).rotate(-pi/4).unitVector.scale(50))")
      path.fill.red(x="angle(xb,x,xa)")
      path.dark(x="segment(x,xa)")
      path.dark(x="segment(x,xb)")

      circle.move(name="y" cx=190 cy=60)
      circle(hidden name="ya" x="y.translate(point(110,80).subtract(y).rotate(pi/4).unitVector.scale(50))")
      circle(hidden name="yb" x="y.translate(point(110,80).subtract(y).rotate(-pi/4).unitVector.scale(50))")
      path.fill.red(x="angle(yb,y,ya)")
      path.dark(x="segment(y,ya)")
      path.dark(x="segment(y,yb)")

{.text-center }__A Patra Axiomă__
Oricare doua unghiuri drepte sunt congruente.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="g" cx=170 cy=60 target="5_point" label="P")
      path(name="line5" x="line(point(40,80),point(120,140))" target="5_line" label="L")
      path.red(x="line5.parallel(g)" target="5_parallel")

{.text-center }__A Cincea Axiomă__
Fiind dată o [dreaptă _L_](target:5_line) și [un punct _P_](target:5_point) în afara lui _L_,
există [o singură dreaptă](target:5_parallel) care trece prin _P_ și este
[paralelă](gloss:parallel) cu _L_.
:::

{.r} _{button.next-step} Continuă_

---
> id: jefferson

::: column.grow
Fiecare din aceste axiome pare destul de evidentă și de la sine înțeleasă, dar împreună
ele sunt baza geometriei si pot fi utilizate pentru a deduce aproape totul.
Conform lui [Isaac Newton](bio:newton), _“gloria geometriei o reprezintă faptul că din atât de puține
principii, se poate realiza atât de mult”_.

Euclid a publicat primele cinci axiome într-o carte cu titlul _“Elemente”_. Aceasta
este primul exemplu din istorie a unei abordări sistematice a matematicii și a fost
folosită drept manual de matematică timp de mii de ani.

::: column(width=220)

    x-img(src="images/elements.jpg" width=220 height=330 lightbox)

:::

Unul din cei care au studiat lucrarea lui Euclid a fost președintele american
[Thomas Jefferson](bio:jefferson). El a vrut să urmeze o abordare similară atunci când a redactat
Declarația de Independență în anul 1776. El începe enunțând câteva “axiome” simple și apoi
“demonstrează” rezultate mai complexe:

    .parchment “Considerăm că aceste adevăruri sunt evidente: că toți oamenii au fost creați egali, că sunt înzestrați de Creatorul lor cu anumite drepturi inalienabile, printre care Viața, Libertatea și căutarea Fericirii.”

{.text-center.follows} `=>`

    .parchment Prin urmare, ... declarăm, că aceste Colonii Unite sunt și trebuie să fie state libere și independente.”

Acesta este doar un singur exemplu în care ideile lui Euclid în matematică au inspirat subiecte complet diferite.

---

## Construcții cu rigla și compasul

> section: construction
> id: measuring

Poate ai observat că cele cinci axiome ale lui Euclid nu pomenesc nimic despre
_măsurarea_ distanțelor sau a unghiurilor. Până acum aceasta a fost o parte fundamentală a geometriei,
de exemplu, măsurarea suprafețelor și a volumelor.

::: column.grow
Cu toate acestea, pe vremea lui Thales sau a lui Euclid, nu exista un cadru universal de unități
precum avem noi azi. Distanțele erau adesea măsurate folosind părți ale corpului,
de exemplu, lungimea degetului sau lungimea brațului. Acestea nu sunt foarte precise și variază de la o persoană la alta.

Pentru a măsura distanțe mai lungi arhitecții sau topografii foloseau _sfori înnodate_:
bucăți lungi de sfoară care conțineau multe noduri situate la intervale egale. Dar nici acestea nu
erau perfect precise și diferite corzi aveau nodurile poziționate la distanțe ușor diferite.

    figure: x-img(src="images/knots.jpg" width=370 height=23 style="opacity: 0.8")

::: column(width=200)

    x-img(src="images/units.png" width=200 height=336)

:::

Matematicienii greci nu doreau sa aibă de-a face cu aceste aproximări. Ei erau interesați mai mult
de legile fundamentale ale geometriei decăt de aplicațiile lor practice.

Tocmai de aceea ei au venit cu o versiune mult mai idealizată a universului nostru:
una în care punctele nu pot avea dimensiune și dreptele nu pot avea lățime.
Bineînțeles că este [[imposibil|foarte dificil]] ca acestea să fie desenate pe hârtie.
Punctele vizibile vor ocupa mereu un pic de spațiu și dreptele vor avea întotdeauna
o mică lățime. De aceea desenele noastre sunt întotdeauna doar ”aproximări”.

---
> id: tools
> goals: play-l1 play-c1

    figure: img(src="images/divider-1.svg" width=760 height=42)

Practic, axiomele lui Eclid ne spun _ce este posibil_ în versiunea geometriei sale.
Se pare ca avem nevoie doar de două unelte simple pentru a putea schița acest lucru pe hârtie:

::: column(width=320)

    x-geopad.r(width=300 height=240)
      svg
        circle.move(name="a" cx=50 cy=190)
        circle.move(name="b" cx=250 cy=50)
        path.red(name="l1" x="segment(a,b)" hidden)
      x-play-btn

{.text-center} Un __dreptar__ este ca o riglă fără marcaje. Îl poți folosi pentru a uni două puncte
(ca în Axioma 1) sau pentru a prelungi un segment de dreaptă (ca în Axioma 2).

::: column.reveal(width=300 when="play-l1")

    x-geopad.r(width=300 height=240)
      svg
        circle.move(name="c" cx=150 cy=120)
        circle.move(name="d" cx=250 cy=150)
        path(x="segment(c,d)")
        path.red(name="c1" x="arc(c,d,1.99*pi)" hidden)
      x-play-btn

{.text-center} Un __compas__ îți permite să desenezi un cerc de mărime dată în jurul unui punct
(ca în Axioma 3).
:::

---
> id: construction

Axiomele 4 și 5 se referă mai degrabă la compararea proprietăților formelor decât la trasarea lor.
De aceea ele nu au nevoie de instrumente specifice.

::: column.grow
Vă puteți imagina că matematicienii greci se gândeau la geometrie pe plajă și desenau diferite forme
în nisip folosind scânduri lungi pe post de dreptar și bucăți de sfoară pe post de compas.

Chiar daca aceste unelte par foarte primitive, poți desena cu ele un numar mare de forme.
Aceasta a devenit ca un fel de puzzle pentru matematicieni: să încerce să găsească moduri de a
construi diferite forme geometrice folosind doar un dreptar și un compas.

::: column(width=340)

    x-img(src="images/archimedes.jpg" width=340 height=265)

{.caption} Matematicianul grec [Arhimede](bio:archimedes) studia geometria în momentul în care a fost
omorât de către invadatorii romani. Ultimele sale cuvinte au fost “nu îmi deranjați cercurile”.
:::

---
> id: equilateral
> goals: segment0 segment1 segment2 circle1 circle2

::: column(width=320)

    x-geopad.sticky(width=320 tools="move|line|circle" intersections projections="no"): svg

::: column.grow
{.task} Desenează un [triunghi echilateral](gloss:equilateral-triangle) folosind doar
dreptarul și compasul.

Începe prin a desena un segment de dreaptă oriunde în chenarul din dreapta. Cu
[unealta linie](->#equilateral_.tool:nth-child(3))
selectată, trage de la început la sfârșit. Acest segment va fi una din laturile triunghiului.

{.reveal(when="segment0")} Apoi desenează două cercuri care au ca centru unul din capetele segmentului
și mergi până la celălalt capăt. Cu
[unealta cerc](->#equilateral_.tool:nth-child(5)) selectată,
trage de la un capăt până la celălalt.

{.reveal(when="circle1 circle2")} Deja avem două dintre vârfurile triunghiului,
iar al treilea este intersecția celor două cercuri. Folosește din nou unealta linie
pentru a desena cele două laturi care lipsesc și finalizează triunghiul.

{.reveal(when="segment1 segment2")} Acum [aceste două laturi](target:a) și
[aceste două laturi](target:b) sunt fiecare [[razele|diametrele|circumferințele]] aceluiași cerc,
_{span.reveal(when="blank-0")} așa că trebuie sa aibă aceeași lungime.
Cu alte cuvinte, toate cele trei laturi ale triunghiului sunt congruente și prin urmare este
într-adevăr un triunghi echilateral._
:::

---
> id: perp-bisector

### Mijlocul și Mediatoarea Unui Segment

{.todo} ÎN CURÂND – Constructing Midpoints and Perpendicular Bisectors

---
> id: angle-bisector

### Bisectoarea unui unghi

{.todo} ÎN CURÂND – Cum se construiește bisectoarea unui unghi

---
> id: impossible

### Construcții Imposibile

În următorul capitol vom vedea și mai multe forme ce pot fi construite astfel. Totuși, există
o limita in geometria euclidiană: unele construcții sunt pur și simplu imposibile folosind doar
dreptarul și compasul.

::: column.grow
Conform legendei, orașul Delos din Grecia antică a fost atins cândva de o boală îngrozitoare.
Oracolul din Delphi le-a spus locuitorilor că aceasta era o pedeapsă de la zei și că boala se
va termina dacă vor construi un nou altar pentru templul lor care să aibă volumul _exact dublu_
față de cel existent.

    figure: img(src="images/altar.svg" width=320 height=140)

::: column(width=300)

    x-img(src="images/delphi.jpg" credit="© De Agostini Editorial" width=300 height=239)

{.caption} Reconstrucția unui templu din Delphi
:::

Rețineți că _dublarea volumului_ nu este același lucru cu _dublarea muchiei cubului_.
De fapt, dacă volumul [[tridimensional|bidimensional|unidimensional]] crește de 2 ori,
muchia [[unidimensională|tridimensională|bidimensională]]
a cubului va crește de `root(2,3)`.

---
> id: impossible-1

Încă pare destul de simplu, dar dublarea cubului folosind doar dreptarul și compasul este de fapt
imposibilă în [geometria euclidiană](gloss:euclidean-geometry)!
Din păcate, pentru locuitorii din Delos asta însemna pierderea oricărei speranțe.
Mai există alte două construcții care sunt imposibile.
Matematicienii și-au dedicat o mare parte din timp pentru a găsi o soluție, dar fără a avea succes.

::: column(width=220)

    figure: img(src="images/impossible-1.svg" width=200 height=180)

{.text-center} __{.m-red} Trisecțiunea unghiului__
Știm deja cum să împărțim unghiurile în două părți egale. Totuși este imposibil să împărțim
în mod similar un unghi în _trei_ părți egale.

::: column(width=220)

    figure: img(src="images/impossible-2.svg" width=200 height=180)

{.text-center} __{.m-blue} Dublarea cubului__
Fiind dată muchia unui cub, este imposibil să construim muchia unui alt cub care să aibă volumul exact dublu.

::: column(width=220)

    figure: img(src="images/impossible-3.svg" width=200 height=180)

{.text-center} __{.m-green} Cuadratura cercului__
Fiind dat un cerc, este imposibil să construim un pătrat care să aibă exact aceeași arie.
:::

Rețineti că aceste probleme pot fi rezolvate foarte ușor cu ajutorul algebrei sau folosind rigla și raportorul.
Dar sunt imposibil de construit dacă trebuie să le construiești doar cu dreptarul și compasul.

---

## Și mai multe construcții

> section: more-construction
> sectionStatus: dev

Construcția Unui Teren de Fotbal

Construcția Liniilor Paralele și Perpendiculare

Construcția Unui Pătrat

Construcția unei drepte perpendiculare; printr-un punct ce NU se află pe dreaptă

Desenează o dreaptă orizontală și un punct deasupra acelei drepte. Notează dreapta 1 și punctul A.

* Ia compasul și pune acul pe A. Deschide compasul astfel încât sa ajungă dincolo de dreapta 1. Desenează un arc de cerc care să intersecteze dreapta de două ori.
* Mută acul pe unul din punctele de intersecție ale arcului de cerc. Mărește un pic deschizătura compasului și desenează un arc de cerc sub dreaptă. Repetă pasul acesta pe cealaltă parte astfel încât cele două semne de arc să se intersecteze.
* Ia dreptarul și desenează o linie de la punctul A până la intersecția arcelor de sub dreaptă. Această dreaptă este perpendiculară pe 1 și trece prin A.

Teorema #1: Dacă doua drepte sunt paralele și o a treia dreaptă este perpendiculară pe una din dreptele paralele, ea este de asemenea perpendiculară și pe cealaltă dreaptă paralelă. Sau, dacă l || m și l⊥n, atunci n⊥m.

Teorema #2: Dacă două drepte sunt perpendiculare pe aceeași dreaptă, atunci ele sunt paralele.

Distanța dintre drepte paralele
Cea mai scurtă distanță dintre două drepte paralele este lungimea segmentului perpendicular dintre ele. Nu contează ce dreaptă perpendiculară alegi, cât timp cele două puncte sunt situate pe drepte. Să ne reamintim că există o infinitate de drepte perpendiculare între două linii paralele.

---

## Unghiuri și Demonstrații

> section: proofs
> sectionStatus: dev

TODO

---

## Origami și Plierea Hârtiei

> id: origami
> section: origami
> sectionBackground: dark

Construcția cu dreptarul și compasul nu este singurul mod de a construi forme geometrice.
Există o alta tehnică ce nu folosește niciun instrument: __Origami__.

Cuvântul _Origami_ (折り紙) vine din limba japoneză _oru_ (a plia) și _kami_
(hârtie). Scopul este de a confecționa obiecte din una sau mai multe foi de hârtie,
fără niciun instrument adițional precum lipici sau foarfecă. Poți crea forme incredibil de frumoase
și de impresionante - toate aceste figuri au fost create folosind doar bucăți dreptunghiulare de hârtie.

::: column(width=186)
    x-img(src="images/origami/origami-1.jpg" lightbox credit="© Dirk Eisner" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-2.jpg" lightbox credit="© Dirk Eisner, Thomas Hull" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-3.jpg" lightbox credit="© ServeSmasher (Flickr)" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-4.jpg" lightbox credit="© Dirk Eisner" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-5.jpg" lightbox credit="© Meenakshi Mukerji" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-6.jpg" lightbox credit="© Meenakshi Mukerji, Dennis Walker" width=186 height=200)
:::

---
> id: crane
> goals: video

Să construiești forme precum aceasta poate lua mult timp și e important să fii extrem de precis.
Dar cu un pic de exercițiu, vei putea construi și tu!

::: column.sticky-video(width=360)

    x-video(src="https://static.mathigon.org/videos/crane.mp4" poster="images/crane.jpg" width=360 height=360 controls)

::: column.grow
{.step.active(data-t=0)} Ai nevoie doar de o bucată pătrată de hârtie. Începe prin a îndoi foaia
de-a lungul celor două diagonale ale sale.

{.step(data-t=16)} Apoi, îndoaie-o de-a lungul liniei de mijloc verticală și orizontală – dar
în direcția opusă.

{.step(data-t=38)} Acum ia două colțuri opuse și adu-le împreună după cum este indicat.
Se formează un pătrat mai mic care este deschis jos.

{.step(data-t=51)} Îndoaie colțurile din stânga și din dreapta spre linia de mijloc.
Apoi întoarce-l și repetă.

{.step(data-t=83)} Acum îndoaie triunghiul de sus în jos, de-a lungul liniei orizontale
și apoi deschide pliurile din ultimii doi pași.

{.step(data-t=99)} Aici e dificil: ia colțul de jos al hârtiei și îndoaie-l până sus
de-a lungul liniei orizontale pe care tocmai ai creat-o. Unele dintre îndoiurile realizate
anterior se vor inversa. Întoarce apoi și repetă.

{.step(data-t=135)} Asigură-te că cele două “picioare” sunt orientate în jos. Apoi ia colțurile
din dreapta și din stânga și îndoaie-le spre linia din mijloc. Întoarce și repetă.

{.step(data-t=172)} Ești aproape gata!  Deschide ușor partea dreaptă și îndoaie capul spre vârf.
Va trebui sa-l întorci pe dos. Apoi repetă la fel cu coada la stânga.

{.step(data-t=203)} Inversează îndoitura dupa cum este arătat petru a crea un cioc. Poți hotărâ
cât de lung să fie alegând poziția de îndoire.

{.step(data-t=215)} La final pliază în jos cele doua aripi și trage-le în afară.
:::

---
> id: crane-1

Acest _cocor_ este unul din cele mai vechi și faimoase modele Origami. Avem multe alte
[instrucțiuni pentru modele Origami](/origami) pe care le poți încerca!

    figure: x-img(src="images/origami-1.jpg" credit="© Meenakshi Mukerji, Joel Lord, Dirk Eisner, Angie Harms, Michal Kosmulski" width=760 height=118)

---
> id: origami-axioms

### Axiome Origami

La fel ca la construcția cu dreptarul și compasul, există câteva axiome ale
câtorva _tipuri de îndoire_ care sunt posibile in origami. Acestea au fost
pentru prima data enunțate în anul 1992 de către matematicianul italiano-japonez Humiaki Huzita.

::: column(width=220 parent="padded-thin origami-axioms")

    x-video(src="images/origami/axiom-1.mp4" width=220 height=220)

{.text-center}
Se poate face o îndoitură după o dreaptă care unește oricare două puncte.
::: column(width=220)

    x-video(src="images/origami/axiom-2.mp4" width=220 height=220)

{.text-center} Se poate face o îndoitură pentru a suprapune un punct oarecare _P_ peste un punct oarecare _Q_. Se crează astfel
[[bisectoarea perpendiculară|bisectoarea unghiului|punctul de mijloc]] al dreptei `bar(PQ)`.
::: column(width=220)

    x-video(src="images/origami/axiom-3.mp4" width=220 height=220)

{.text-center} Se poate face o îndoitură ce suprapune oricare două drepte una peste alta. Dacă dreptele se intersectează,
se crează astfel [[bisectoarea|mediatoarea|punctul de mijloc]] unghiului format de cele două drepte.
::: column(width=220)

    x-video(src="images/origami/axiom-4.mp4" width=220 height=220)

{.text-center} Fiind date un punct _P_ și o linie _L_, putem face o îndoitură perpendiculară pe _L_ ce trece prin _P_.
::: column(width=220)

    x-video(src="images/origami/axiom-5.mp4" width=220 height=220)

{.text-center} Fiind date două puncte _P_ și _Q_ și o linie _L_, putem face o îndoitură
ce trece prin P și-l suprapune pe Q pe _L_.
::: column(width=220)

    x-video(src="images/origami/axiom-6.mp4" width=220 height=220)

{.text-center} Fiind date oricare două puncte _P_ și _Q_ și oricare două linii _K_ și _L_,
putem face o îndoitură care să suprapună simultan punctul _P_ pe dreapta _K_ și punctul _Q_ pe dreapta _L_.
::: column(width=220)

    x-video(src="images/origami/axiom-7.mp4" width=220 height=220)

{.text-center} Fiind date un punct _P_ și două drepte _K_ și _L_, putem face
o îndoitură care îl suprapune pe _P_ pe _L_ și este perpendiculară pe _K_.
:::

---
> id: origami-axioms-1

Se pare că aceste axiome sunt chiar mai puternice decât axiomele euclidiene.
Putem face trisecția unghiurilor și putem dubla cuburi folosindu-ne doar de îndoirea hârtiei.
Bineînțeles că este imposibil să îndoim linii curbe și nici nu se poate rezolva cu origami cuadratura cercului.

    figure: x-img(src="images/origami-2.jpg" credit="© Dirk Eisner, Meenakshi Mukerji, noricum, fdecomite" width=760 height=123)

---
> id: origami-applications
> goals: video

### Aplicațiile Origami

Origami este o artă străveche și multă vreme a fost mai mult o activitate recreativă,
fără aplicații în lumea reală. Cu toate acestea, se pare că tehnicile dezvoltate pentru
origami pot fi incredibil de utile în tehnologie și inginerie:

::: column(width=300)

    x-video(src="https://static.mathigon.org/videos/space.mp4" poster="images/space.jpg" width=300 height=225 credit="© Brigham Young University")

::: column.grow

#### Origami în Spațiu

Sateliții au nevoie de panouri solare mari pentru a genera energie. Din nefericire, rachetele
care transportă sateliții în spațiu au un spațiu foarte limitat pentru marfă și orice
greutate adițională consumă mult carburant.

Tehnicile Origami permit panourilor solare să se “deschidă” atunci când ajung în spațiu. Anumite
îndoituri bine gândite sunt incredibil de compacte și necesită foarte puține motoare
și alte componente mecanice.

:::

---
> id: origami-applications-3
> goals: video

::: column(width=300)

    x-video(src="https://static.mathigon.org/videos/stents.mp4" poster="images/stents.jpg" width=300 height=225 credit="© Virtual Point")

::: column.grow

#### Origami în Medicină

În medicină se folosesc la scară mult mai mică idei similare cu cele din Origami .
În 2003 cercetătorii au dezvoltat _Stenturi Origami_: tuburi minuscule ce pot fi introduse în vasele de sânge.
Acestea sunt inițial pliate, dar se pot extinde în săngele pacientului pentru a mări arterele sau venele.

:::

---
> id: origami-applications-1

::: column(width=300)

    x-img(src="images/bridge.jpg" width=300 height=225 credit="© Hiroshima University")

::: column.grow

#### Poduri Pliabile

Armata britanică și americană au folosit Origami pentru a dezvolta poduri pliabile și mobile.
Acestea erau importante pentru traversarea rapidă a râurilor sau a șanțurilor antitanc și
puteau fi implementate mai rapid decât modelele anterioare.

Ele puteau fi folosite și pentru ajutor în caz de dezastre pentru a permite accesul rapid vehiculelor de urgență
după cutremure sau tsunamiuri. Aceasta este imaginea unui prototip proiectat la Universitatea Hiroshima din Japonia.

:::

---
> id: origami-applications-4
> goals: video

::: column(width=300)

    x-video(src="https://static.mathigon.org/videos/marine.mp4" poster="images/marine.jpg" width=300 height=225 credit="© Harvard University")

::: column.grow

#### Origami sub Mare

Adâncurile oceanelor sunt unele din zonele cele mai puțin explorate de pe Pământ.
Animalele care trăiesc acolo sunt adesea animale cu corpul moale ceea ce le face
foarte greu de examinat.

Aici se poate vedea o “capcană” de forma unui [dodecaedru](gloss:dodecahedron)
ce se poate plia în jurul organismelor marine, permițându-le să fie studiate.
Aceasta este controlată de la distanță și are nevoie doar de un singur motor pentru a
conduce mișcarea complexă de pliere a celor cinci brațe ale sale.

:::

---
> id: origami-applications-5

Există multe alte aplicații ale artei origami în viața de zi cu zi: case care se pot comprima
în loc sa se dărâme în timpul unui cutremur, desfășurarea airbagurilor în mașini,
roboți auto-asamblați, împachetare mai eficientă și aeronave de greutate redusă.

---
> id: origami-wings
> goals: video

### Origami în Natură

Se pare că noi oamenii nu suntem singurii care folosim puterea origamiului:
natura face același lucru de milioane de ani.

Aici se poate vedea aripa unei __urechelnițe__ care se poate plia folosind un model ingenios.
Atunci când este deschisă dimensiunea aripii crește de 10 ori – cel mai mare „raport de pliere” din regnul animal:

::: column(width=300)

    x-img(src="images/wing.jpg" width=300 height=170 credit="© ETH Zürich")

::: column(width=300)

    x-video(src="https://static.mathigon.org/videos/wing-animation.mp4" poster="images/wing-animation.jpg" width=300 height=170 credit="© ETH Zürich")

:::

---
> id: origami-wings-1

Atunci când sunt extinse aripile mari se fixează într-o poziție stabilă care permite
insectelor să zboare. Dar e suficientă o atingere foarte ușoara pentru ca aripile să se retragă.
Atunci când sunt îndoite, ele sunt suficient de compacte pentru a le permite urechelnițelor să facă tuneluri subterane.
Multe alte insecte, lilieci, frunze și flori folosesc modele de pliere similare
pentru ca suprafețe mari sa încapă în spații mici.

Oamenii de știință studiază aceste plante și animale în speranța de a le imita abilitățile
în inginerie și tehnologie. Posibile aplicații ar putea include electronice pliabile în telefoane mobile,
panouri solare extensibile pentru sateliți sau poate chiar corturi ce se pot plia singure.

---
> id: origami-dna
> goals: video

::: column(width=320)

    x-video(src="https://static.mathigon.org/videos/dna.mp4" poster="images/dna.jpg" width=320 height=240 credit="© PyMOL")

::: column.grow

Origami apare chiar și în propriul tău corp: fiecare celulă umană conține aproximativ 2 metri
de [ADN](gloss:dna), [molecula](gloss:molecule) care conține toată informația ta genetică.
Dacă ai putea combina ADN-ul din toate celulele din corp, lungimea lor ar fi de peste 140 de ori distanța de la Pământ la Soare!

Pentru ca tot acest ADN să încapă în corpul tău fără a fi răsucit sau sfâșiat,
fiecare fir este ondulat, pliat și fixat de molecule speciale.

:::

---
> id: origami-dna-1

Un proces asemănător este folosit de alte molecule complexe ce apar în organismele vii.
De exemplu, __plierea [proteinelor](gloss:protein)__ este una din cele mai complexe probleme din biologie.
O mai bună înțelegere a acestui proces îi poate ajuta pe oamenii de știință
să dezvolte în viitor medicamente noi.
