# fractalii

## Introducere

> section: introduction
> id: intro
> trailer: ohygDnKg5mg
> color: "#8032AD"
> level: Advanced
> next: chaos
> translated: auto

Când priviți în jurul naturii, este posibil să fi observat plante complicate ca acestea:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} Acest __brad__ este format din multe frunze mici care se ramifică de una mai mare.

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} Acest __broccoli Romanesco__ este format din [[conuri]] mai mici [[| cuburi | sfere în]] spirală în jurul uneia mai mari.

:::

{.reveal(when="blank-0")} Inițial, acestea apar ca niște forme extrem de complexe - dar atunci când te uiți mai atent, ai putea observa că ambele respectă un model relativ simplu: toate [părțile individuale ale](target:fractal) plantelor arată exact la fel ca întreaga plantă, doar mai mici. Același tipar se repetă din nou, la scări mai mici. [Continua](btn:next)

---
> id: fern

În matematică, numim această proprietate __auto-asemănare__ , iar formele care o au se numesc [__fractale__](gloss:fractal) . Sunt unele dintre cele mai frumoase și mai bizare obiecte din toată matematica.

Pentru a ne crea propriile fractale, trebuie să începem cu un model simplu și apoi să îl repetăm iar și iar, la scări mai mici.

::: column.grow

Unul dintre cele mai simple modele ar putea fi un [{.pill.red} segment de linie](target:s1) , cu [{.pill.blue} încă două segmente care se](target:s2) ramifică dintr-un capăt. Dacă repetăm acest tipar, ambele segmente albastre vor avea și alte două ramuri la capetele lor.

Puteți muta [punctele albastre](target:dot) pentru a schimba lungimea și unghiul tuturor ramurilor. Apoi măriți numărul de iterații folosind [glisorul de](->#fern-slider) mai jos.

{.reveal(when="slider-0")} În funcție de poziția ramurilor, puteți face tipare complet diferite - arătând ca [feriga de](action:set(130,228,197,184)) deasupra, un [copac](action:set(160,186,200,186)) sau [pentagoni cuibăriti](action:set(113,235,232,238)) . Ce mai găsești? [Continua](btn:next)

::: column(width=360)

    x-geopad(width=360 height=360 projections="no")
      canvas(width=720 height=720)
      svg
        circle(x="point(180,340)" name="a" hidden)
        circle(x="point(180,250)" name="b" hidden)
        circle.move.blue.pulsate(name="c1" cx=150 cy=175 target="s2 dot")
        circle.move.blue.pulsate(name="c2" cx=225 cy=220 target="s2 dot")
        path.thick.red(x="segment(a,b)" target="s1")
        path.thick.blue.rounded(x="polyline(c1,b,c2)" target="s2")
    x-slider#fern-slider(steps=8 :bind="steps")

:::

---
> id: triangle

::: column.grow(parent="right")

Un alt fractal celebru este [__triunghiul Sierpinski__](gloss:sierpinski-triangle) . În acest caz, începem cu un triunghi mare, echilateral și apoi tăiem în mod repetat triunghiuri mai mici din părțile rămase.

{.reveal(when="slider=0")} Observați cum forma finală este alcătuită din [trei copii identice ale sale](target:x) , și fiecare dintre acestea este alcătuită din copii chiar mai mici ale întregului triunghi! Puteți continua să faceți zoom-ul în triunghi pentru totdeauna, iar modelele și formele vor continua să se repete.

::: column(width=300)

    svg.sierpinski.var(width=300 height=265)
      path.red(:draw="triangle" :show="!steps")
      g.red.t1
        path(:draw="t1")
        path.white(:d="sierpinski(t1.points, steps-1)")
      g.red.t2
        path(:draw="t2")
        path.white(:d="sierpinski(t2.points, steps-1)")
      g.red.t3
        path(:draw="t3")
        path.white(:d="sierpinski(t3.points, steps-1)")
    x-slider(steps=8 :bind="steps")

:::

---
> id: real

Plantele de la începutul acestui capitol _arată la_ fel ca fractalele, dar este clar imposibil să creezi fractali _adevărați_ în viața reală. Dacă continuăm să repetăm același model de mai multe ori, din ce în ce mai mici, am ajunge în cele din urmă la celule, molecule sau atomi care nu mai pot fi împărțiți.

Cu toate acestea, folosind matematica, ne putem gândi la proprietățile pe care le-ar avea fractalii reali - iar acestea sunt foarte surprinzătoare ... [Continuă](btn:next)

---
> id: dimension

### Dimensiuni fractale

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

În primul rând, să ne gândim la dimensiunea fractalilor. O linie are dimensiunea [[1]] . _{span.reveal(when="blank-0")} Când îl scalzi cu un factor de 2, lungimea acestuia crește cu un factor de `2^1 = 2` . Evident!_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

Un pătrat are dimensiunea [[2]] . _{span.reveal(when="blank-0")} Când îl scalzi cu un factor de 2, suprafața sa crește cu un factor de `2^2 =` [[4]] ._

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

Un cub are dimensiunea [[3]] . _{span.reveal(when="blank-0")} Când îl scalzi cu un factor de 2, volumul său crește cu un factor de `2^3 =` [[8]] ._ _{span.reveal(when="blank-1")} Observați că cubul mai mare din imagine este format din 8 copii ale celui mai mic!_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Acum să aruncăm o privire asupra triunghiului Sierpinski. Dacă îl scalăm cu un factor de 2, puteți vedea că „zona” crește cu un factor de [[3]] .

{.reveal(when="blank-0")} Să spunem că _d_ este dimensiunea triunghiului Sierpinski. Folosind același model ca mai sus, obținem `2^d = 3` . Cu alte cuvinte, _d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} ≈ 1.585 ..._

:::

---
> id: dimension-4

Dar stai ... cum poate avea ceva o dimensiune care nu este un număr întreg? Pare imposibil, dar aceasta este doar una dintre proprietățile ciudate ale fractalilor. De fapt, acest lucru le dă numele fractalilor: au o __dimensiune fracțională__ .

Cu fiecare iterație, eliminăm o parte din aria triunghiului Sierpinski. Dacă am putea face acest lucru de nenumărate ori, nu ar mai exista nicio zonă: de aceea triunghiul Sierpinski este ceva între o zonă bidimensională și o linie unidimensională.

::: .theorem

În timp ce mulți fractali sunt _similari cu sine_ , o definiție mai bună este aceea că __fractalele__ sunt forme care au o __dimensiune non-integrală__ .

:::

[Continua](btn:next)

---
> id: snowflake

### Fulgul de zăpadă Koch

Există multe forme în natură care arată ca fractale. Am văzut deja unele plante la începutul acestui capitol. Alte exemple excelente sunt fulgii de zăpadă și cristalele de gheață:

::: column(width=120 parent="padded-thin")

    x-img(src="images/snow-1.jpg" width=120 height=120 alt="Snowflake")

::: column(width=120)

    x-img(src="images/snow-2.jpg" width=120 height=120 alt="Snowflake")

::: column(width=120)

    x-img(src="images/snow-3.jpg" width=120 height=120 alt="Snowflake")

::: column(width=120)

    x-img(src="images/snow-4.jpg" width=120 height=120 alt="Snowflake")

::: column(width=120)

    x-img(src="images/snow-5.jpg" width=120 height=120 alt="Snowflake")

:::

---
> id: koch

Pentru a crea propriul nostru fulg de zăpadă fractală, trebuie să găsim încă o dată o procedură simplă pe care să o putem aplica din nou.

::: column.grow

Ca și triunghiul Sierpinski, să începem cu un singur triunghi echilateral. Cu toate acestea, în loc să _îndepărtăm_ triunghiuri mai mici la fiecare pas, _adăugăm_ triunghiuri mai mici de-a lungul marginii. Lungimea laterală a fiecărui triunghi este [[`1/3`|`1/4`|`1/2`]] a triunghiurilor din pasul precedent.

{.reveal(when="blank-0")} Forma rezultată se numește [__fulgul de zăpadă Koch__](gloss:koch-snowflake) , numit după matematicianul suedez [Helge von Koch](bio:koch) . Observați, încă o dată, că [secțiunile mici ale](target:t2) marginii fulgului de zăpadă arată exact la fel ca [secțiunile mai mari](target:t1) .

::: column(width=300)

    svg.var(width=300 height=300)
      path.blue(:draw="koch(steps)")
      rect.overlay(y=76 width=300 height=224 target="t1")
      polygon.overlay(points="300 0 90 0 107 76 0 76 0 300 300 300 300 0" target="t2")
    x-slider(steps=5 :bind="steps")

:::

---
> id: koch-dimension

::: column(width=380)

    img(src="images/koch.png" width=380 height=171)

::: column.grow

Când scalăm un segment de margine al fulgului de zăpadă Koch cu un factor de 3, lungimea acestuia se [[cadește | triplete | duble]] .

{.reveal(when="blank-0")} Folosind aceeași relație între dimensiuni și factori de scară ca mai sus, obținem ecuația [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]] . _{span.reveal(when="blank-1")} Aceasta înseamnă că dimensiunea Flocului de zăpadă Koch este `§d = log_3(4) ≈ 1.262` ._

:::

---
> id: koch-size

::: tab(parent="sticky")

#### Zonă _{span.check(when="blank-6")}_

Crearea fulgilor de nea Koch este aproape ca o [secvență recursivă](gloss:sequence-recursive) : cunoaștem forma de pornire (un triunghi) și știm cum să trecem de la un termen la altul (adăugând mai multe triunghiuri pe fiecare margine):

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] noi triunghiuri

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] noi triunghiuri

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48 de]] triunghiuri noi

:::

{.reveal(when="blank-0 blank-1 blank-2")} După prima iterație, numărul de noi triunghiuri adăugate crește cu un factor de [[4]] la fiecare pas. În același timp, aria acestor noi triunghiuri scade cu un factor de [[9]] la fiecare pas.

{.reveal(when="blank-3 blank-4")} Să spunem că [primul triunghi](->#koch-0) are o suprafață de 1. Atunci suprafața totală a [următoarelor trei triunghiuri](->#koch-1) este `3 × 1/9 = 1/3` . Următorii pași formează o [[serie geometrică | seria aritmetică | serie quadratică]] , _{span.reveal(when="blank-5")} cu raport comun [[`4/9`|`9/4`|`4/3`]] ._

{.reveal(when="blank-6")} Folosind formula pentru suma [geometricelor](gloss:geometric-series) infinite, putem calcula că suprafața totală a fulgului de zăpadă Koch este

{.text-center.reveal(when="blank-6")}`A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")` .

::: tab

#### Perimetru _{span.check(when="blank-9")}_

::: column.grow

De asemenea, putem încerca să calculăm perimetrul fulgului de zăpadă Koch. După cum am văzut deja, lungimea perimetrului se modifică cu un factor de [[`4/3`|`3/4`|`1/4`]] la fiecare pas.

{.reveal(when="blank-8")} Aceasta înseamnă că, încă o dată, avem o serie geometrică - dar, în acest caz, [[nu converg | converg spre 0 | nu are un prim termen]] . _{span.reveal(when="blank-9")} Aceasta înseamnă că perimetrul fulgului de zăpadă Koch este de fapt __infinit de lung__ !_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _Dacă acest lucru pare contraintuitiv, amintiți-vă doar că înmulțim perimetrul cu `§4/3` la fiecare pas și facem acest lucru la infinit de mai multe ori._

:::

---
> id: frozen

::: column.grow

Este aproape de neconceput că poți avea o formă cu o zonă _finită_ și, de asemenea, o circumferință _infinită_ - dar aceasta este doar una dintre numeroasele proprietăți neașteptate ale fractalilor.

Poți veni cu alte modalități de a-ți crea propriile fractale? [Continua](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} „Sufletul meu este în spirală pe fractale înghețate în jurul ...”

:::

---
> id: menger-sponge

### Biserica Menger

Fractalele nu trebuie să fie „plane”, ca multe dintre exemplele de mai sus. Unul dintre cei mai faimoși fractali care arată tridimensional este __buretele Menger__ , numit după matematicianul [Karl Menger](bio:menger) care l-a descris pentru prima dată în 1926.

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

Începem cu un cub solid și găurim în mod repetat găuri mai mici și mai mici în laturile sale. Fiecare nouă iterație a găurilor are [[`1/3`|`1/2`|`1/4`]] lățimea iterației anterioare a găurilor.

{.reveal(when="blank-0")} A `3×3×3` cubul este format din 27 de cuburi mai mici, dar aici am eliminat unele dintre acestea. Buretele Menger este format din [[20 de]] exemplare, care sunt de 3 ori mai mici.

{.reveal(when="blank-1")} Acum putem încerca să calculăm dimensiunea _d_ a buretelului Menger la fel cum am făcut pentru fulgul de zăpadă Koch de mai sus. În acest caz obținem `3^d = 20` , sau `§d = log_3(20) ≈ 2.727` .

:::

{.reveal(when="blank-1 slider-0")} Dacă vă imaginați tăind din ce în ce mai multe găuri, la infinit de multe ori, nu ar mai rămâne niciun volum real. De aceea, cubul este „nu tocmai” tridimensional! [Continua](btn:next)

---
> id: coastlines

### Coasta fractală

Una dintre caracteristicile cheie ale tuturor fractalelor pe care le-am văzut până acum este că puteți „mări” pentru totdeauna și veți găsi întotdeauna modele noi. În jurul anului 1920, matematicianul britanic [Lewis Fry Richardson și-a](bio:richardson) dat seama că același lucru este valabil și pentru granița sau coasta multor țări.

Începeți cu forma de bază a țării și, pe măsură ce măriți, adăugați orificii de râu, golfuri și estuare, apoi stânci individuale, stânci, pietricele și așa mai departe:

::: column(width=120 parent="padded-thin")

    x-img(src="images/coast-1.jpg" width=120 height=180 alt="Coastline")

::: column(width=120)

    x-img(src="images/coast-2.jpg" width=120 height=180 alt="Coastline")

::: column(width=120)

    x-img(src="images/coast-3.jpg" width=120 height=180 alt="Cliffs")

::: column(width=120)

    x-img(src="images/coast-4.jpg" width=120 height=180 alt="Beach")

::: column(width=120)

    x-img(src="images/coast-5.jpg" width=120 height=180 alt="Pebbles")

:::

[Continua](btn:next)

---
> id: coastlines-1

::: column.grow

Aceasta este o problemă semnificativă atunci când încercați să calculați lungimea graniței unei țări - cum decideți cât de mult să măriți și care sunt locurile și care sunt incluse?

Un mod în care am putea măsura lungimea liniei de coastă a Marii Britanii, de exemplu, este să luăm un conducător lung, să parcurgem toate plajele și apoi să adăugăm toate distanțele.

Dacă domnitorul este ${rulers[index]}{index|0|0,8,1} lungime de km, trebuie să-l folosim ${count} ori, astfel încât să obținem o coastă totală de ${count} × ${rulers[index]} = ${count * rulers[index]} km.

{.reveal(when="var-0")} Putem continua să mergem, cu stăpâni mai mici și mai mici, și de fiecare dată rezultatul nostru pentru lungimea coastei ar fi ceva mai lung. La fel ca și Fulgul de zăpadă de Koch înainte, se pare că coasta Marii Britanii este infinit de lungă! Acest lucru este adesea numit __paradoxul litoralului__ . [Continua](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---
> id: coastline-grid

Câteva decenii mai târziu, matematicianul [Benoit Mandelbrot](bio:mandelbrot) s-a împiedicat de lucrările lui Richardson într-o carte de bibliotecă aruncată, în timp ce lucra la IBM. El și-a recunoscut semnificația și, de asemenea, modul în care se raportează la cercetări mai recente despre fractale și dimensiuni.

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

Litoralul Marii Britanii cu siguranță „arată” fractal, dar nu este _similar cu sine_ , ca și alte fractale pe care le-am văzut anterior. Pentru a găsi dimensiunea acesteia, putem să o desenăm pe o grilă și să numărăm numărul de celule cu care se intersectează.

{.r.reveal(when="slider-0")} Inițial, există __{.pill.yellow} 88 de__ celule care se intersectează. Dacă am scala linia de coastă cu un factor de 2, există __{.pill.yellow} 197 de__ celule care se intersectează - mai mult de două ori mai multe! [Continua](btn:next)

{.r.reveal(when="next-0")} Mărimea coastei a crescut cu un factor de `§197/88` . Ca și înainte, aceasta înseamnă că dimensiunea liniei de coastă este

{.text-center.reveal(when="next-0")}`§d = log_2(197/88) ≈ 1.16`

:::

---
> id: coastline-dimension-1

Dacă repetăm acest lucru cu grile mai mari, am constata că dimensiunea coastei britanice este de fapt aproximativ 1,21. Mandelbrot și-a dat seama că această dimensiune fractală este și o măsură a __rugozității__ unei forme - un concept nou, pentru care a găsit aplicații importante în multe alte domenii ale matematicii și științei.

---
> id: nature

### Mai multe fracturi în natură și tehnologie

În timp ce fractalii adevărați nu pot apărea niciodată în natură, există multe obiecte care arată _aproape_ ca fractale. Am văzut deja plante, fulgi de zăpadă și linii de coastă și iată câteva alte exemple:

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC" alt="Mountain range")

{.caption} Lanțul montan din Asia centrală

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA" alt="River delta")

{.caption} Delta râului Ganges în India

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox alt="Lightning bolts")

{.caption} Fulgere

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA" alt="Blood vessels")

{.caption} Vasele de sânge din retină

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey" alt="Grand Canyon")

{.caption} Grand Canyon în SUA

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox alt="Clouds")

{.caption} nori

:::

Toate aceste obiecte ar putea apărea complet aleatoare, dar, la fel ca fractalele, există un model de bază care determină modul în care sunt formate. Matematica ne poate ajuta să înțelegem mai bine formele, iar fractalii au aplicații în domenii precum medicina, biologia, geologia și meteorologia. [Continua](btn:next)

---
> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox alt="Computer-generated fractal terrain with mountains and water")

{.caption} Teren fractal generat de computer

::: column.grow

De asemenea, putem folosi fractali pentru a crea „copii” realiste, de exemplu, ca peisaje și texturi utilizate în jocuri video sau filme generate de computer. Apa, munții și norii din această imagine sunt realizate integral de un computer, cu ajutorul fractalilor!

Și chiar putem inversa acest proces pentru a comprima imagini digitale, pentru a reduce dimensiunea fișierului lor. Primii algoritmi au fost dezvoltați de Michael Barnsley și Alan Sloan în anii '80, iar altele noi sunt încă cercetate în prezent.

:::

---

## Triunghiul Sierpinski

> section: sierpinski
> id: sierpinski
> translated: auto

::: column.grow

Unul dintre fractalele pe care le-am văzut în capitolul precedent a fost [__triunghiul Sierpinski__](gloss:sierpinski-triangle) , care poartă numele matematicianului polonez [Wacław Sierpiński](bio:sierpinski) . Poate fi creat începând cu un triunghi mare, echilateral și apoi tăind în mod repetat triunghiuri mai mici din centrul său.

{.r.reveal(when="slider-0")} Wacław Sierpiński a fost primul matematician care s-a gândit la proprietățile acestui triunghi, dar a apărut cu multe secole mai devreme în lucrări de artă, modele și mozaicuri.

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---
> id: sierpinski-history

Iată câteva exemple de plăci de podele din diferite biserici din Roma:

::: column(width=140 parent="padded-thin")

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire" alt="Mosaic Floor with Sierpinski Triangle")

:::

După cum se dovedește, triunghiul Sierpinski apare într-o gamă largă de alte domenii ale matematicii și există multe moduri diferite de a-l genera. În acest capitol, vom explora unele dintre ele! [Continua](btn:next)

---
> id: pascal
> goals: select

### Triunghiul lui Pascal

S-ar putea să vă amintiți deja triunghiul Sierpinski din capitolul nostru despre [__triunghiul lui Pascal__](gloss:pascals-triangle) . Aceasta este o piramidă de număr în care fiecare număr este suma celor două numere de mai sus. Atingeți toate numerele _uniforme_ din triunghiul de mai jos, pentru a le evidenția - și vedeți dacă observați un model:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };
    figure: .overflow-wrap: .pascal-grid.small(style="width: 760px")
      - var i = 0;
      while i <= 18
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            .c= b
            - j += 1;
        - i += 1;

---
> id: pascal-1

Triunghiul lui Pascal poate fi continuat în jos pentru totdeauna, iar modelul Sierpinski va continua cu triunghiuri mai mari și mai mari. Puteți vedea deja începutul unui triunghi și mai mare, începând din rândul 16.

Dacă două celule adiacente sunt divizibile cu 2, atunci suma lor din celula de dedesubt trebuie să fie divizibilă și de 2 - de aceea putem obține triunghiuri colorate (sau celule unice). Desigur, putem încerca și colorarea tuturor celulelor divizibile cu _alte_ numere _decât 2_ . Ce crezi că se va întâmpla în acele cazuri? [Continua](btn:next)

---
> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Aici puteți vedea o versiune minusculă a primelor 128 de rânduri ale triunghiului lui Pascal. Am evidențiat toate celulele care sunt divizibile cu ${n}{n|2|2,40,1} - ce observi?

{.reveal(when="var-0")} Pentru fiecare număr, obținem un model triunghiular diferit similar triunghiului Sierpinski. Modelul este deosebit de regulat dacă alegem un [[număr prim | număr triunghi | Numărul Fibonacci]] . _{span.reveal(when="blank-0")} Dacă numărul are _mulți_ factori primi diferiți, modelul arată mai aleatoriu._

    x-gesture(target="#pascal-large x-var" slide="100,0")

---
> id: chaos-game
> goals: point play

### Jocul haosului

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

Aici puteți vedea cele trei vertexuri ale unui triunghi echilateral. Atingeți oriunde în zona gri pentru a crea un al patrulea punct.

{.r.reveal(when="point")} Să jucăm un joc simplu: alegem unul dintre vârfurile triunghiului la întâmplare, desenăm un segment de linie între punctul nostru și vertex, apoi găsim [{.pill.red} punctul mediu](target:p1) al acelui segment. [Continua](btn:next)

{.r.reveal(when="next-0")} Acum repetăm procesul: alegem un alt vertex aleatoriu, desenăm segmentul din ultimul nostru punct, apoi găsim [{.pill.green} punct mediu](target:p2) . Rețineți că vom colora aceste puncte noi pe baza culorii vertexului triunghiului ales. [Continua](btn:next)

{.reveal(when="next-1")} Până acum, nu s-a întâmplat nimic surprinzător - dar urmăriți cum repetăm același proces de mai multe ori:

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} Adăugați 1000 de pași_

:::

---
> id: fractal-builder
> goals: s1 s2 shape play

Acest proces se numește __Jocul haosului__ . S-ar putea să existe câteva puncte rătăcite la început, dar dacă repetați aceiași pași de mai multe ori, distribuția punctelor începe să arate exact ca triunghiul Sierpinski!

Există multe alte versiuni ale acestuia - de exemplu, am putea începe cu un pătrat sau un pentagon, am putea adăuga reguli suplimentare, cum ar fi să nu putem selecta același vertex de două ori la rând sau am putea alege următorul punct la un raport în afară de `§1/2` de-a lungul segmentului. În unele dintre aceste cazuri, vom primi doar o distribuție aleatorie a punctelor, dar în alte cazuri, dezvăluim și mai multe fractale:

    include components/chaos-game

{.reveal(when="s1 s2 play")} Ați descoperit [covorul Sierpinski](action:carpet()) sau acest [fulg de zăpadă pentagonală](action:snowflake()) pe baza [__raportului de aur__](gloss:golden-ratio) ?

---
> id: cellular
> goals: sierpinski

### Automate celulare

Un __automat celular__ este o grilă formată din mai multe celule individuale. Fiecare celulă poate fi în „stări” diferite (de ex. Culori diferite), iar starea fiecărei celule este determinată de celulele înconjurătoare.

În exemplul nostru, fiecare celulă poate fi fie alb sau negru. Începem cu un rând care conține doar un singur pătrat negru. În fiecare rând care urmează, culoarea fiecărei celule este determinată de cele trei celule imediat mai sus. Atingeți cele opt opțiuni posibile de mai jos pentru a-și întoarce culoarea - puteți găsi un set de reguli care creează un model similar triunghiului Sierpinski?

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} Există două opțiuni pentru fiecare dintre cele opt opțiuni, ceea ce înseamnă că există `2^8 =` În total [[256 de]] reguli posibile. Unele, precum [regula 126](action:setRule('01111110')) , arată ca triunghiul Sierpinski. Alții, cum ar fi [regula 30](action:setRule('01111000')) , arată complet haotic. A fost descoperit de [Stephen Wolfram](bio:wolfram) în 1983, iar computerele le pot folosi chiar pentru a genera numere aleatorii!

---
> id: cellular-1

::: column.grow

Automatele celulare arată cât de complexe pot fi create tipare după reguli foarte simple - la fel ca fractalele. Multe procese din natură respectă, de asemenea, reguli simple, dar produc sisteme incredibil de complexe.

În unele cazuri, acest lucru poate duce la apariția unor tipare care arată la fel ca automatele celulare, de exemplu culorile de pe coaja acestui melc.

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0" alt="Shell of a sea snail")

{.caption} Conus textile, un melc veninos de mare

:::

---
> id: tetrahedra

### Tetrahedra Sierpinski

Există multe variante ale triunghiului Sierpinski și alte fractale cu proprietăți similare și procese de creare. Unele arată în două dimensiuni, cum ar fi _covorul Sierpinski pe_ care l-ai văzut mai sus. Alții arată tridimensional, ca aceste exemple:

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Tetrahedra Sierpinski

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Piramida Sierpinski

:::

---

## Setul Mandelbrot

> section: mandelbrot
> id: iteration
> goals: move-1 move-2
> translated: auto

Toate fractalele pe care le-am văzut în capitolele anterioare au fost create folosind un proces de __iterație__ : începeți cu un model specific, apoi îl repetați iar și iar.

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

Acest lucru este similar cu un alt concept în matematică pe care l-ați văzut anterior: cu [secvențe recursive](gloss:sequence-recursive) , începeți cu un număr specific, apoi aplicați aceeași formulă recursivă, din nou și din nou, pentru a obține următorul număr din secvență.

Să luăm formula recursivă `§x_n = x_(n-1)^2` ca exemplu, și descrieți termenii pe o linie numerică. Puteți modifica valoarea `pill(x_0,"yellow","x0")` :

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---
> id: iteration-1

Observați cum secvența rezultată se poate comporta foarte diferit, în funcție de valoarea de pornire `x_0` :

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

Dacă `x_0 > 1` , secvența [[se diverge | converg]] : _{span.reveal(when="blank-0")} doar crește, până la infinit._

::: column.frame.f-blue.text-center(width=212)

Dacă `x_0` este cuprins între –1 și 1, secvența [[converg | diverge]] .

::: column.frame.f-blue.text-center(width=212)

Dacă `x_0 < -1` , secvența [[se diverge | converg]] .

:::

---
> id: iteration-2

Până acum, nu am învățat nimic nou. Cu toate acestea, în urmă cu aproximativ un secol, matematicienii au început să exploreze ce se întâmplă cu aceste secvențe dacă utilizați [__numere complexe__](gloss:complex-numbers) , mai degrabă decât doar linia de număr real. Descoperirile lor au fost unele dintre cele mai surprinzătoare și frumoase rezultate din toată matematica.

---
> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### Julia Sets

Să folosim aceeași secvență ca înainte, `§x_n = x_(n-1)^2` , dar pe planul complex. Puteți muta poziția din `pill(x_0,"yellow","x0")` , pentru a vedea ce se întâmplă cu următorii termeni. Dacă secvența pare să convergă, hai să colorăm punctul corespunzător pe planul din _{span.pill.blue} albastru_ :

    figure: x-geopad(slot="stage" width=720 height=480 x-axis="-2.2,2.2,1" y-axis="-1.5,1.5,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-positioning="no" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.yellow.pulsate(name="x0" x="point(0,0)" target="x0")
        circle.yellow.transparent(name="x1" x="iterate(x0)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2)" target="x3")
        path.yellow(x="spiral(x0)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Converges!
            strong.var(:show="!converges" data-display="inline") Diverges!

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} După cum puteți vedea, secvența converge cât timp `pill(x_0,"yellow","x0")` se află [[în cercul unității | în afara pătratului unității | deasupra _x_ -axisului]] _{span.reveal(when="blank-0")} (cercul cu raza 1, centrat la origine)._

---
> id: julia-1

Acum, să facem lucrurile un pic mai dificile. Mai degrabă decât să pătrundem numărul precedent, adăugăm și o constantă _{.pill.red} c de_ fiecare dată (care poate fi orice număr complex). Cu alte cuvinte, `§x_n = x_(n-1)^2 + c` . Crezi că tot vom obține un cerc de convergență? Ce alte forme credeți că am putea vedea? [Continua](btn:next)

---
> id: julia-2

În această diagramă, puteți muta poziția `pill(x_0,"yellow","x0")` precum și valoarea de `pill(c,"red","c")` :

::: x-slideshow

    x-geopad(slot="stage" width=720 height=480 x-axis="-1.8,1.8,1" y-axis="-1.2,1.2,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      svg
        circle.move.yellow(name="x0" x="point(0.5,0.5)" target="x0")
        circle.move.red(name="c" x="point(0,0)" target="c")
        circle.yellow.transparent(name="x1" x="iterate(x0,c)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1,c)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2,c)" target="x3")
        path.yellow(x="spiral(x0,c)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2 + pill(var("complex(c)"),"red","c")`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

{div(slot="legend")} Știm deja ce se întâmplă dacă [`c = 0`](action:animate(0,0)) - același lucru este exemplul de mai sus. Convergența secvenței atâta timp cât `x_0` se află în cercul unității.

{div(slot="legend")} Imediat ce schimbăm valoarea lui _c_ , se întâmplă ceva minunat. Cercul se transformă într-o formă extrem de complexă, fractală.

{div(slot="legend")} Cand [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)) , forma se împarte în infinit de multe elemente minuscule dispuse în spirale.

::: div(slot="legend")

În unele cazuri, secvența nu converg într-un _singur punct_ - în schimb ajunge la un ciclu de mai multe puncte, precum un triunghi. Aceste cicluri se numesc __orbite__ .

Punctele care sunt colorate albastru înseamnă că secvența corespunzătoare fie converg sau are o orbită (spunem că este __delimitată__ ). Punctele care sunt lăsate în alb înseamnă că secvența corespunzătoare __se diverge__ : nu este delimitată și, în cele din urmă, suflă până la infinit.

:::

{div(slot="legend")} Ce mai găsești? Aruncați o privire la tiparele când [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) sau când [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)) . Există, de asemenea, unele valori ale _c_ unde _fiecare_ secvență se diverge, astfel încât întregul plan complex rămâne alb.

:::

---
> id: julia-3

Diferitele forme care se formează prin colorarea în numere se numesc [__seturi Julia__](gloss:julia-set) . Au fost descoperite independent de doi matematicieni francezi, [Gaston Julia](bio:julia) și [Pierre Fatou](bio:fatou) , în jurul anului 1918.

La acea vreme, nu existau computere care să ajute la vizualizarea cum arăta de fapt seturile Julia. Matematicieni precum Julia și Fatou au putut să argumenteze din punct de vedere matematic, dar au văzut vreodată doar schițe grosolane, desenate manual despre cum ar putea arăta.

Nu avem această problemă astăzi - imaginile de mai jos sunt diferite seturi Julia. Culorile diferite indică _cât de rapid se_ diferențiază secvența din acel punct:

::: column(width=220)

    x-img(src="images/julia-1.jpg" width=220 height=165 lightbox alt="Julia set")

{.caption}`c = −0.70176 – 0.3842"i"`

::: column(width=220)

    x-img(src="images/julia-2.jpg" width=220 height=165 lightbox alt="Julia set")

{.caption}`c = −0.4 + 0.6"i"`

::: column(width=220)

    x-img(src="images/julia-3.jpg" width=220 height=165 lightbox alt="Julia set")

{.caption}`c = 0.285 + 0.01"i"`

:::

[Continua](btn:next)

---
> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### Setul Mandelbrot

Când creați diferitele seturi Julia, ați observat că există anumite valori ale _c_ pentru care fiecare secvență se diverge și întregul plan complex rămâne alb. La câteva decenii după Julia și Fatou, o nouă generație de matematicieni a încercat să mapeze cum arătau aceste zone.

În exemplul precedent, am ales o valoare fixă pentru `pill(c,"red","c")` , apoi a schimbat poziția din `pill(x_0,"yellow","x0")` pentru a colora avionul. Acum, să remediem valoarea de `pill(x_0 = 0,"yellow","x0")` și în schimb schimbați valoarea lui `pill(c,"red","c")` .

Încă o dată, pictați pe planul complex pentru a dezvălui zona în care secvențele rămân delimitate. Ce forme așteptați să apară?

    figure: x-geopad.no-background(width=720 height=480 x-axis="-2.1,1.1,1" y-axis="-1.1,1.1,1" axes grid padding=8 projections="no" label-suffix=",i" axis-names="Real, Imaginary")
      img(src="images/mandelbrot.png" data-bounds="1,0.5,-1,-1.5")
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.red.pulsate(name="c" cx=0 cy=0 target="c")
        circle.yellow.transparent(name="x0" x="point(0,0)" target="x0")
        circle.yellow.transparent(name="x1" x="iterate(x0,c)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1,c)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2,c)" target="x3")
        path.yellow(x="spiral(x0,c)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2 + pill(var("complex(c)"),"red","c")`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

---
> id: mandel-history

Acest fractal se numește [__setul Mandelbrot__](gloss:mandelbrot-set) , iar atunci când este rotit cu 90°, pare aproape o persoană, cu cap, corp și două brațe. A fost definit și desenat pentru prima dată în 1978, într-o lucrare de cercetare de către matematicienii Robert Brooks și Peter Matelski:

    figure: x-img(src="images/printout.jpg" width=360 height=290 credit="© Princeton University Press" alt="Mandelbrot set drawing")

Câțiva ani mai târziu, [Benoit Mandelbrot a](bio:mandelbrot) folosit computerele puternice de la IBM pentru a crea o vizualizare mult mai detaliată a fractalului, care a fost numit ulterior după el. Primele tipărituri arătau diferit de ceea ce se aștepta el - până când a realizat că tehnicienii care lucrează la imprimante curățau „neplăcerile” din jurul marginii sale, presupunând că acesta era cauzat de particule de praf sau erori ale imprimantei și nu o caracteristică definitorie a fractalilor. ! [Continua](btn:next)

---
> id: mandel-zoom

Ca toate fractalele, putem „mări” setul Mandelbrot pentru totdeauna, găsind noi tipare la fiecare scară. Aici puteți face zoom într-o parte a setului Mandelbrot care se numește __vale Seahorse__ . Punctele negre sunt _în interiorul_ setului Mandelbrot, unde secvența este delimitată. Punctele colorate se _află_ în _afara_ setului Mandelbrot, unde secvența se diverge, iar diferitele culori indică _cât de rapid_ crește până la infinit:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---
> id: mandel-zoom-1

Acest glisor constă din 27 de imagini individuale, până la un nivel de zoom de peste 14 cvadrilioni sau `2^54` . În total, au avut nevoie de aproape 45 de minute să se redea pe un laptop modern. Setul Mandelbrot poate fi creat cu o singură ecuație simplă, `§x_n = x_(n-1)^2 + c` , cu toate acestea, este infinit de complex și uimitor de frumos.

---
> id: mandel-orbits

::: column(width=360 parent="right")

    x-geopad.no-background(width=360 height="340" x-axis="-1.5,0.5,1" y-axis="-0.9,0.9,1" axes padding=8 labels="no")
      img(src="images/mandelbrot.png" data-bounds="1,0.5,-1,-1.5")
      svg
        circle.move.red.pulsate(name="c" x="point(-0.3,0.4)" target="c")
        path.blue.transparent.fill(x="cardioid" target="bulb0")
        path.blue.transparent.fill(x="circle(point(-0.125,0.745),0.094)" target="bulb1")
        path.blue.transparent.fill(x="circle(point(-0.5045,0.563),0.039)" target="bulb2")
        path.yellow.thin(x="spiral(point(0,0),c)")

::: column.grow

Pe măsură ce mutați valoarea de [{.pill.red} c în](target:c) jurul setului Mandelbrot, puteți observa o proprietate curioasă:

* Toate secvențele din [corpul principal](target:bulb0) al setului Mandelbrot [[converg | divergente | ajunge pe o orbită]] _{span.reveal(when="blank-0")} într-un singur punct._ * {.reveal(when="blank-0")} Secvențele din [bulbul mare](target:bulb1) din vârf [[ajung pe o orbită | converg | divergente]] _{span.reveal(when="blank-1")} format din [[3]] puncte._ * {.reveal(when="blank-2")} Secvențele din [acest bec mai mic](target:bulb2) au orbite de lungime [[5]] .

:::

{.reveal(when="blank-3")} Fiecare bec are o orbită de dimensiuni diferite, cu becuri mai mici având din ce în ce mai multe puncte pe orbitele lor. Mărimea acestor orbite sunt strâns legate de __harta logistică__ , un concept important în [teoria haosului](/course/chaos) .

---
> id: mandel-outro

::: column.grow

Bernoit Mandelbrot și-a dedicat cea mai mare parte a vieții studiului fractalelor, precum și matematicii _rugozității_ și a _asemănării cu sine_ . Activitatea sa a avut aplicații în fizică, meteorologie, neurologie, economie, geologie, inginerie, informatică și multe alte domenii.

În 1985, setul Mandelbrot a apărut pe coperta revistei _Scientific American_ , iar de atunci a devenit una dintre cele mai recunoscute forme matematice din lume. Îl puteți găsi pe tricouri, în videoclipuri muzicale și ca protector de ecran și a fost făcut referire în multe cărți și filme populare.

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American" alt="Scientific American Magazine Cover")

:::

---

## Curbe de umplere spațială

> section: space-filling
> sectionStatus: dev

{.todo} In curand!
