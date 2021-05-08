# Triunghiuri și Trigonometrie

## Introducere

> id: intro
> section: introduction
> color: "#3566DE"
> level: Intermediate
> next: polyhedra
> translated: auto

::: column.grow
Până la începutul secolului 19, exploratorii descoperiseră cea mai mare parte a lumii.
Negoțul și transporturile erau în plină expansiune între țarile îndepărtate și astfel
a apărut nevoia de a avea _hărți precise_ pentru întreaga planetă.

Astăzi avem sateliți care pot face fotografii de la înălțime, dar în urmă cu 200 de ani
construirea hărților era un proces dificil și consumator de timp. Această sarcină le revenea
matematicienilor precum [Radhanath Sikdar](bio:sikdar), care lucra la _Marele Studiu
Trigonometric_: un proiect cu durata de un secol care avea ca obiectiv măsurarea întregii
suprafețe a Indiei, inclusiv a lanțului muntos Himalaya.

::: column(width=240)

    x-img.shift-1(src="images/theodolite.jpg" width=240 height=320 credit="Science & Society Picture Library")

{.caption} Teodolitul, un instrument topografic
:::

De un interes deosebit a fost aflarea celui mai înalt munte de pe Pământ.
Existau câțiva candidați diferiți, dar de la sute de kilometri depărtare era
greu de stabilit care era cel mai înalt.

Așadar, cum putem măsura înălțimea unui munte?

    figure.mountain: include svg/mountain.svg

{.r} În ziua de azi putem folosi sateliți pentru a măsura înălțimea munților cu o
precizie de până la câțiva centimetri, dar aceștia nu existau pe vremea când
Radhanath topografia India.
_{button.next-step} Continuă_

{.r.reveal(when="next-0")} Alpiniștii folosesc _altimetre_ pentru a determina
altitudinea la care se află. Aceste instrumente utilizează diferența dintre valorile
presiunii atmosferice la diferite înălțimi. Totuși, acest proces necesită ca cineva să urce în
[vârful muntelui](->.mountain-top) – o performanță extrem de dificilă ce nu a putut fi
atinsă până în urmă cu un secol.
_{button.next-step} Continuă_

{.r.reveal(when="next-1")} De asemenea, am putea încerca să folosim triunghiuri asemenea,
așa cum am făcut în [cursul anterior](/course/transformations/similarity).
Această metodă necesită cunoașterea [distanței](->.mountain-distance) până la [baza
muntelui](->.mountain-base): punctul de la nivelul mării care se află direct sub vârful său.
Putem face asta pentru copaci sau clădiri înalte, dar pentru munți acest punct este
ascuns sub sute de metri de roci.
_{button.next-step} Continuă_

---
> id: intro-2

::: column(width=320)

    x-img(src="images/hillary.jpg" width=320 height=190)

{.caption} Edmund Hillary și Tenzing Norgay au fost primii care au ajuns pe vârful
muntelui Everest în anul 1953.

::: column.grow
Dar există tehnici geometrice mai avansate, tehnici pe care [Radhanath](bio:sikdar) le-a folosit
pentru a descoperi cel mai înalt munte de pe Pământ: acum se numește _Muntele Everest_.
Măsurătoarea sa are o abatere de doar câțiva metri față de măsurătoarea actuală de 8848 metri.

În acest curs vei învăța despre o mulțime de caracteristici și proprietăți ale triunghiurilor.
Acestea îți vor permite să măsori înălțimea munților, dar totodată ele sunt de o
importanță fundamentală în multe alte ramuri ale matematicii, științei și ingineriei.
_{button.next-step} Continuă_
:::

---
> id: applications

Triunghiurile sunt speciale pentru că ele sunt deosebit de _puternice_. Ele sunt
singurul poligon care, atunci când sunt construite din grinzi de lemn și balamale,
sunt complet _rigide_ - spre deosebire de dreptunghiuri, care pot fi împinse cu ușurință.

{.todo} ÎN CURÂND – Animații

---
> id: applications-1

Această proprietate face ca triunghiurile să fie deosebit de utile în construcții,
unde se pot transporta greutăți mari cu ajutorul lor.

::: column(width=200)
    x-img(src="images/truss-bridge.jpg" credit="© ykanazawa1999, Flickr" width=200 height=200 lightbox)

{.caption} Un “pod Truss” este susținut de bare triunghiulare
::: column(width=200)
    x-img(src="images/pylon.jpg" width=200 height=200 lightbox)

{.caption} Triunghiuri în piloni de înaltă tensiune electrică
::: column(width=200)
    x-img(src="images/bike.jpg" width=200 height=200 lightbox)

{.caption} Chiar și bicicletele folosesc triunghiuri pentru stabilitate.
:::

---
> id: applications-2
> goals: video

Triunghiurile sunt totodată cele mai simple poligoane, cu cele mai puține laturi.
Asta le face deosebit de potrivite la aproximarea suprafețelor curbe complexe.
Ele sunt folosite în clădirile fizice…

::: column(width=200)
    x-img(src="images/st-mary.jpg" credit="Kunstlerbob, Wikipedia" width=200 height=200 lightbox)

{.caption} “The Gherkin”, un zgârie-nori din Londra
::: column(width=200)
    x-img(src="images/hk-bank.jpg" credit="WiNG, Wikipedia" width=200 height=200 lightbox)

{.caption} Bank of China Tower din Hong Kong
::: column(width=200)
    x-img(src="images/museum.jpg" credit="Andrew Dunn, Wikipedia" width=200 height=200 lightbox)

{.caption} Curtea Muzeului Britanic din Londra
:::

::: column.grow
…dar și în lumea virtuală. În grafica generată pe calculator(de exemplu pentru filme sau
jocuri video), toate suprafețele sunt aproximate folosind o “rețea” de triunghiuri minuscule.
Artiștii și inginerii software au nevoie să cunoască geometrie și trigonometrie pentru a putea
mișca și transforma aceste triunghiuri în mod realist și pentru a le calcula culoarea și textura.
::: column(width=220)
    x-img(src="images/dolphin.jpg" width=220 height=135)
:::

    figure: x-video(src="https://static.mathigon.org/videos/tiger.mp4" poster="images/tiger.jpg" width=480 height=270 credit="© UCTV, The STEAM Channel")

---

## Proprietățile triunghiurilor

> id: angle-sum
> section: properties
> translated: auto

Hai să începem simplu: un triunghi este o formă închisă care are trei laturi (care
sunt [segmente de dreaptă](gloss:line-segment)) și trei vârfuri ([punctele](gloss:point)
de intersecție ale laturilor). De asemenea, are și trei [unghiuri interne](gloss:internal-angle)
a căror suma este întotdeauna [[180]]°.

---
> id: classification

Triunghiurile pot fi clasificate în funcție de măsura unghiurilor lor:

::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a1" x="point(40,60)")
      circle(name="b1" x="point(40,140)")
      circle(name="c1" x="point(180,140)")
      path.fill.red(x="angle(a1,b1,c1)")
      path(x="polygon(a1,b1,c1)")

{.caption} Un __triunghi dreptunghic__
are un [unghi drept](gloss:right-angle).
::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a2" x="point(30,30)")
      circle(name="b2" x="point(150,60)")
      circle(name="c2" x="point(190,190)")
      path.fill.blue(x="angle(c2,b2,a2)")
      path(x="polygon(a2,b2,c2)")

{.caption} Un __triunghi obtuz__
are un [unghi obtuz](gloss:obtuse-angle).
::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a3" x="point(60,50)")
      circle(name="b3" x="point(30,180)")
      circle(name="c3" x="point(190,130)")
      path.fill.green(x="angle(a3,b3,c3)")
      path.fill.green(x="angle(b3,c3,a3)")
      path.fill.green(x="angle(c3,a3,b3)")
      path(x="polygon(a3,b3,c3)")

{.caption} Un __triunghi ascuțit__
are [[trei]] [unghiuri ascuțite](gloss:acute-angle).
:::

---
> id: labels

::: column.grow
Pentru ușurință, notăm triunghiurile întotdeauna în același mod. Vârfurile se notează
cu litere mari [_A_, _B_ și _C_](target:vertex), laturile se notează cu litere mici
[_a_, _b_ și _c_](target:side) și unghiurile se notează cu litere grecești
[`α`, `β` și `γ`](target:angle) (“alpha”, “beta” și “gamma”).

[Latura _opusă_ vârfului _A_](target:X) este notată cu _a_, iar
[unghiul care se află chiar lângă _A_](target:Y) este notat cu `α`. Același șablon
se aplică și pentru _B_/_b_/`β` și _C_/_c_/`γ`.
::: column(width=220)

    x-geopad(width=220 height=200): svg
      circle.move.red(name="a" cx=80 cy=30 label="A" target="vertex X Y")
      circle.move.blue(name="b" cx=30 cy=170 label="B" target="vertex")
      circle.move.green(name="c" cx=190 cy=150 label="C" target="vertex")
      path.red(x="angle(c,a,b).sup" label="α" target="angle Y")
      path.blue(x="angle(a,b,c).sup" label="β" target="angle")
      path.green(x="angle(b,c,a).sup" label="γ" target="angle")
      path.red(x="segment(b,c)" label="a" target="side X")
      path.blue(x="segment(a,c)" label="b" target="side")
      path.green(x="segment(b,a)" label="c" target="side")

:::

---
> id: medians
> goals: s0 s1 s2 move

### Mediane

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line" projections="no"): svg
      circle.move(name="a" cx=75 cy=75 target="ratio")
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      path(x="triangle(a,b,c)")

      circle.green(name="ab" x="line(a,b).midpoint")
      circle.blue(name="ac" x="line(a,c).midpoint")
      circle.red(name="bc" x="line(b,c).midpoint" target="ratio")

      circle.yellow.reveal(name="d" x="triangle(a,b,c).centroid" when="blank-0" animation="pop" target="ratio")

      path.red.transparent(x="segment(a,d)" label="2" target="ratio")
      path.red.transparent(x="segment(d,bc)" label="1" target="ratio")

::: column.grow
Aici se poate vedea un triunghi precum și mijlocul celor trei laturi ale sale.

O [__mediana__](gloss:triangle-median) a unui triunghi este un segment de dreaptă care unește
un vârf cu mijlocul laturii opuse. Desenează cele trei mediane ale acestui triunghi.
 _{span.reveal(when="s0 s1 s2")}Ce se întâmplă pe măsură ce muți vârfurile triunghiului ?_

{.reveal(when="move")} Se pare că medianele
[[se intersectează într-un punct|au aceeași lungime|se împart reciproc la mijloc]] mereu.
_{span.reveal(when="blank-0")}Acest punct se numește [__centru de greutate__](gloss:centroid)._

{.reveal(when="blank-0")} Medianele se împart mereu reciproc în [raportul 2:1](target:ratio).
Pentru fiecare din cele trei mediane, distanța de la vârf până la centrul de greutate
este mereu [[de două ori|de trei ori|exact]] mai mare decât distanța de la centru de greutate
până la mijlocul laturii.
:::

---
> id: center-of-mass

Centrul de greutate este și “punctul de echilibru” al unui triunghi. Desenează un triunghi pe
carton, decupează-l și găsește cele trei mediane. Dacă ai calculat precis,
acum poți ține triunghiul în echilibru pe vârful unui creion sau îl poți
agăța perfect drept de o bucată de sfoară care este prinsă de centrul de greutate.

    figure: img(src="images/center-of-mass.jpg" width=600 height=190)

Se întâmplă așa pentru că greutatea unui triunghi este distribuită uniform în jurul
centrului său de greutate. În fizică, acest punct se numește adesea __centru de masă__.

---
> id: circumcircle
> goals: s0 s1 s2

### Mediatoare și Cercul Circumscris

::: column(width=300)

    x-geopad.sticky(tools="move|perpBisector" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75 label="A" target="b-blue b-red")
      circle.move(name="b" cx=50 cy=250 label="B" target="b-red")
      circle.move(name="c" cx=250 cy=200 label="C" target="b-blue")
      path(x="triangle(a,b,c)")

      circle.reveal.red(x="line(a,b).midpoint" when="blank-0")
      circle.reveal.blue(x="line(a,c).midpoint" when="blank-0")
      circle.reveal.green(x="line(b,c).midpoint" when="blank-0")

      circle.reveal.yellow(x="triangle(a,b,c).circumcircle.c" name="d" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(d,c,1.99*pi)" name="circumcircle")

::: column.grow
Să ne amintim că [mediatoarea](gloss:perpendicular-bisector) unui segment
este dreapta perpendiculară care trece prin [[mijlocul|capetele]] său.

{.reveal(when="blank-0")}Desenează mediatoarele acestui triunghi.
_{.lgrey} Pentru a desena mediatoarea unei laturi a triunghiului, apasă pe una
din extremitățile sale și trage-o până la cealaltă extremitate._

{.reveal(when="s0 s1 s2")} La fel ca mai înainte, cele trei mediatoare se
intersectează într-un singur punct. Și, din nou, acest punct are o proprietate specială.

{.reveal(when="s0 s1 s2")} Oricare punct al mediatoarei se află la aceeași distanță față
de cele două extremități ale segmentelui pe care îl împarte. De exemplu, oricare punct
aflat pe [mediatoarea albastră](target:b-blue) se află la aceeași distanță față de
punctele _A_ și _C_, iar oricare punct de pe [mediatoarea roșie](target:b-red) se află
la aceeași distanță față de [[A și B|A și C|B și C]].

{.reveal(when="blank-1")} [Punctul de intersecție](target:center) se afă pe toate
cele trei mediatoare, așadar el se află la aceeași distanță față de toate cele
trei [[vârfuri|laturi]] ale triunghiului.

{.reveal(when="blank-2")} Aceasta înseamnă ca putem desena un cerc în jurul său care
conține toate vârfurile. Acest cerc se numește [__cercul circumscris__](gloss:circumcircle)
al triunghiului, iar centrul său se numește __centrul cercului circumscris__.
:::

---
> id: circumcircle-1

De fapt, aceasta înseamnă că pentru oricare trei puncte, putem folosi
centrul cercului circumscris pentru a găsi un cerc care trece prin toate
punctele. (Doar dacă punctele sunt [[coliniare|paralele]], caz în care
toate punctele se află situate pe o linie dreaptă.)

---
> id: incircle
> goals: s0 s1 s2

### Bisectoarea unui unghi și Cercul înscris într-un triunghi

Probabil că deja te-ai obișnuit cu acest proces: alegem o anumită construcție,
o executăm de trei ori pentru toate laturile/unghiurile unui triunghi și apoi
elaborăm ce este special la punctul lor de intersecție.

::: column(width=300)

    x-geopad.sticky(tools="move|angleBisector" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250 target="b-blue")
      circle.move(name="c" cx=250 cy=200 target="b-red")

      path.fill.light.red(x="angle(c,a,b).sup" name="xa")
      path.fill.light.blue(x="angle(a,b,c).sup" name="xb")
      path.fill.light.green(x="angle(b,c,a).sup" name="xc")

      path(x="segment(a,b)" label="a" target="b-blue b-red")
      path(x="segment(a,c)" label="b" target="b-red")
      path(x="segment(b,c)" label="c" target="b-blue")

      circle.reveal.yellow(x="triangle(a,b,c).incircle.c" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(triangle(a,b,c).incircle.c,triangle(a,b,c).incircle.at(0),1.999*pi)" name="incircle")

::: column.grow
Să ne amintim că [bisectoarea unui unghi](gloss:angle-bisector) împarte un unghi exact
pe mijloc. Desenează bisectoarele celor trei unghiuri din acest triunghi.
_{.lgrey} Pentru a desena bisectoarea unui unghi, trebuie să apeși pe cele trei puncte
care formează unghiul pe care vrei să-l împarți în două unghiuri de măsuri egale._

{.r.reveal(when="s0 s1 s2")} Din nou, toate cele trei drepte se intersectează într-un singur punct.
Probabil că te așteptai la asta, dar este important să observăm că nu există un motiv clar
de ce se întâmplă așa – triunghiurile sunt pur și simplu
niște forme foarte interesante!
_{button.next-step} Continuă_

{.reveal(when="next-0")} Punctele ce aparțin bisectoarei unui unghi se află la aceeași
distanță față de cele două drepte care formează unghiul. De exemplu, orice punct de pe
[bisectoarea albastră](target:b-blue) se află la aceeași distanță față de latura _a_ și latura _c_,
și orice punct de pe [bisectoarea roșie](target:b-red) se află la aceeași distantă față
de laturile [[a și b|a și c|b și c]].

{.reveal(when="blank-0")} [Punctul de intersecție](target:center) se află pe toate cele
trei bisectoare. De aceea, el se află la aceeași distanță față de toate cele trei
[[laturi|vârfuri]] ale triunghiului.

{.reveal(when="blank-1")} Aceasta înseamnă că putem desena în jurul său un cerc care se află
în interiorul triunghiului și este tangent la cele trei laturi. Acest cerc se numește
__cerc înscris__ într-un triunghi, iar centrul său se numește __centrul cercului înscris__.
:::

---
> id: area

### Arie și Înălțimi

::: column.grow
{.r} Este ușor să calculăm aria unui [dreptunghi](gloss:rectangle): pur și
simplu se înmulțește lungimea cu înălțimea. Calcularea ariei unui triunghi
este mai puțin evidentă. Să începem prin “capturarea” unui triunghi în interiorul unui dreptunghi.
_{button.next-step} Continuă_

{.reveal.r(when="next-0")} Lungimea dreptunghiului este lungimea [laturii de jos](target:base)
a triunghiului (care se numește __bază__). Înalțimea dreptunghiului este
[lungimea perpendicularei](target:height) de la bază până la vârful opus.
_{button.next-step} Continuă_

{.reveal(when="next-1")} Înălțimea împarte triunghiul în două părți. Observă cum
[cele două goluri din dreptunghi](target:gap) sunt la fel de mari ca cele două
părți ale triunghiului. Asta înseamnă că dreptunghiul este
[[de două ori mai|de trei ori mai|la fel de]] mare ca triunghiul.

{.reveal(when="blank-0")} Putem calcula ușor aria dreptunghiului, așadar
aria triunghiului este jumătate din ea:

{.text-center.reveal(when="blank-0")} `A = 1/2 ×` [{.step-target.pill.red} bază](target:base)
`×` [{.step-target.pill.blue} înălțime](target:height)
::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move(name="a" cx=40 cy=220)
      circle.move(name="b" cx=260 cy=220)
      circle.move(name="c" cx=190 cy=80)
      circle(hidden x="line(a,b).project(c)" name="d")
      circle(hidden x="a.add(c).subtract(d)" name="e")
      circle(hidden x="b.add(c).subtract(d)" name="f")

      path.fill.green.reveal(x="polygon(a,d,c)" when="next-1" target="gap")
      path.fill.green.transparent(x="polygon(a,e,c)" target="gap")

      path.fill.yellow.reveal(x="polygon(b,d,c)" when="next-1" target="gap")
      path.fill.yellow.transparent(x="polygon(b,f,c)" target="gap")

      path.dark(x="polygon(a,b,c)")
      path.red.reveal(x="polygon(a,b,f,e)" when="next-0" animation="draw")
      path.blue.reveal(x="segment(c,d)" label="înălțime" when="next-0" delay="1000" target="height")
      path.blue.reveal(x="angle(c,d,b).sup" when="next-0" delay="1000" target="height")
      path.red.reveal(x="segment(a,b)" label="bază" when="next-0" delay="1000" target="base")

:::

---
> id: altitudes

Pentru a calcula aria unui triunghi, se poate alege oricare din cele trei laturi ca
__bază__ și apoi se poate calcula __înălțimea__ corespunzătoare, care este dreapta
[[perpendiculară|paralelă]] pe bază și care trece prin vârful opus.

{.reveal(when="blank-0")} Orice triunghi are [[trei]] [__înălțimi__](gloss:triangle-altitude).

---
> id: altitudes-1

::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a" cx=75 cy=75 label="A")
      circle.move(name="b" cx=50 cy=250 label="B")
      circle.move(name="c" cx=250 cy=200 label="C")

      path(x="triangle(a,b,c)")
      path.altitude.red(hidden x="line(a,b).perpendicular(c)")
      path.altitude.blue(hidden x="line(a,c).perpendicular(b)")
      path.altitude.green(hidden x="line(b,c).perpendicular(a)")
      circle.yellow(hidden x="triangle(a,b,c).orthocenter" target="center")

::: column.grow
Asemenea [medianelor](gloss:triangle-median), [mediatoarelor](gloss:perpendicular-bisector)
și [bisectoarelor](gloss:angle-bisector), cele trei înalțimi ale unui triunghi se intersectează
într-un singur punct. Acest punct se numește [__ortocentrul__](target:center) triunghiului.

În [triunghiurile ascuțite](gloss:acute-triangle), ortocentrul
[[se află înăuntrul|se află înafara|este un vârf al]] triunghiului.

{.reveal(when="blank-0")} În [triunghiurile obtuze](gloss:obtuse-triangle), ortocentrul
[[se află înafara|se află înăuntrul|este un vârf al]] triunghiului.

{.reveal(when="blank-1")} În [triunghiurile dreptunghice](gloss:right-triangle),
ortocentrul [[este un vârf al|se află înăuntrul|se află înafara]] triunghiului. Două
dintre înălțimile sale sunt de fapt chiar laturile triunghiului.
:::

---

## Linii mijlocii și Asemănare

> section: midsegments
> sectionStatus: dev
> id: midsegments
> goals: s0 s1 s2
> translated: auto

::: column(width=300)

    x-geopad.sticky(tools="move|line" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      circle.red(name="p" x="line(a,b).midpoint")
      circle.red(name="q" x="line(a,c).midpoint")
      circle.red(name="r" x="line(b,c).midpoint")
      path(x="triangle(a,b,c)")

      path.transparent.fill.red(x="polygon(a,p,q)" target="triangles")
      path.transparent.fill.blue(x="polygon(b,p,r)" target="triangles")
      path.transparent.fill.yellow(x="polygon(c,q,r)" target="triangles")
      path.transparent.fill.green(x="polygon(p,q,r)" target="triangles")
      path.transparent.fill.red(x="polygon(a,b,c)" target="large")

::: column.grow
O [__linie mijlocie__](gloss:triangle-midsegment) este un segment de dreaptă
care unește mijloacele două laturi ale unui triunghi. Desenează cele trei
linii mijlocii ale acestui triunghi.

{.reveal(when="s0 s1 s2")} După cum se vede, linia de mijloc împarte triunghiul
în [patru triunghiuri mai mici](target:triangles).

{.reveal(when="s0 s1 s2")} Se dovedește că toate aceste triunghiuri mai mici
[[sunt congruente|se suprapun|au dimensiuni diferite]] – chiar și cel cu vârful
în jos din mijloc. _{span.reveal(when="blank-0")} Ele sunt totodată și [[asemenea|congruente]]
cu [triunghiul inițial](target:large),_ _{span.reveal(when="blank-1")}cu un
factor de scalare de `1/2`._

{.reveal(when="blank-1")} Acest lucru ne permite să deducem o parte din
propritățile liniei mijlocii.

::: .theorem.reveal(when="blank-1")
__Teorema Liniei Mijlocii__
Într-un triunghi, linia mijlocie este paralelă cu latura opusă și are
lungimea jumătate din lungimea laturii opuse.
:::
:::

---

{.todo} ÎN CURÂND – Mai multe detalii despre linii mijlocii și
cum se leagă de asemănare și proporționalitate.

---

## Congruența triunghiurilor

> id: sss-construction
> section: congruence
> goals: draw-base draw-c1 draw-c2
> translated: auto

Acum că putem verifica dacă trei laturi pot forma un triunghi, să ne gândim la
modul în care am putea _construi_ de fapt un triunghi cu aceste laturi.

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line|circle"): svg

::: column.grow
{.task} Desenează un triunghi cu laturide de 4cm, 5cm și 6cm lungime.

{.r} Desenează în caseta alăturată cea mai mare latură a triunghiului, care este
__6cm__. _{span.reveal(when="draw-base")} Acum avem deja [două](target:base)
din cele trei vârfuri ale triunghiului – provocarea este de a-l afla pe ultimul.
*{button.next-step} Continuă*_

{.reveal(when="next-0")} Apoi, desenează un cerc cu raza de __4cm__ în jurul unuia
dintre vârfuri, _{span.reveal(when="draw-c1")} și un cerc cu raza de __5cm__ în
jurul celuilalt._

{.reveal(when="draw-c2")} Al treilea vârf al triunghiului este
[[intersecția|centrul|raza]] celor două cercuri. _{span.reveal(when="blank-0")}
Acum le putem conecta pentru a forma un triunghi._

{.reveal(when="blank-0" delay="3000")} Cercurile se intersectează de fapt
[[de două ori|de trei ori|de o infinitate de ori]]: _{span.reveal(when="blank-1")}o dată
[în partea de sus](target:top) și o dată [în partea de jos](target:bottom). Putem
alege oricare din aceste puncte de intersecție, iar cele două triunghiuri rezultate
sunt [[congruente|echilaterale|perpendiculare]]._
:::

---
> id: congruence

### Criterii de Congruență

Dar este posibil să construim un triunghi _diferit_ cu aceleași trei laturi?

Am văzut deja două triunghiuri mai sus, dar ambele erau congruente. De fapt,
oricare două triunghiuri ale căror laturi au aceeași lungime sunt congruente.
Numim asta [__Criteriul de congruență LLL__](gloss:triangle-sss) a triunghiurilor
(“Latură-Latură-Latură”).

Acum avem două criterii pentru triunghiuri: “UU” înseamnă că două triunghiuri sunt
[[asemenea|congruente|transformări]] și “LLL” înseamnă că două triunghiuri sunt
[[congruente|asemenea|egale]]. Mai există câteva criterii de congruență:

---
> id: congruence-1

::: .theorem
Două triunghiuri sunt congruente dacă îndeplinesc oricare din următoarele criterii:

    .row.padded-thin
      div(style="width: 150px")
        .text-center: strong SSS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="segment(a,b)")
          path.red(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption Toate laturile sunt respectiv congruente.

      div(style="width: 150px")
        .text-center: strong SAS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption Două laturi și unghiul #[strong cuprins între ele] sunt respectiv congruente.

      div(style="width: 150px")
        .text-center: strong ASA
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(c,a,b)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption Două unghiuri și latura #[cuprinsa între ele] sunt respectiv congruente.

      div(style="width: 150px")
        .text-center: strong AAS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(b,c,a)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption Două unghiuri și latura alăturată lor sunt respectiv congruente.
:::

---
> id: cpoct

Ne putem gândi la aceste criterii ca la niște “scurtături”: pentru a verifica dacă două triunghiuri
sunt congruente, trebuie doar să verificăm unul din criteriile de mai sus:

De îndată ce _știi_ că două triunghiuri sunt congruente, știi că _toate_ laturile și unghiurile
lor corespondente sunt congruente.

Este interesant de observat faptul că toate criteriile constau din [[trei]] valori diferite
(fie laturi, fie unghiuri)!

---
> id: contruction

### Construcția triunghiurilor

La începutul acestui capitol, am văzut cum se construiește un triunghi dacă se cunosc
cele trei laturi. În mod similar, există metode de a construi un triunghi pentru
fiecare din criteriile de congruență de mai sus.

::: tab
#### SAS

::: column(width=300)
{.todo} ÎN CURÂND – Animație
::: column.grow
{.task} Desenează un triunghi cu laturile de 5cm și 3cm și unghiul cuprins
între ele de 40°.

La fel ca mai înainte, începem prin a desena una dintre laturile triunghiului.

Apoi, folosim un raportor pentru a măsura un unghi de 40° în jurul unuia dintre
cele două vârfuri. Hai să marcăm acest unghi cu un punct.

Putem uni vârful cu măsurătoarea noastră pentru a obține a doua latură a triunghiului.

Știm că această latură trebuie să aibă o lungime de 3cm, așa că hai să măsurăm distanța
cu o riglă și apoi să marcăm al treilea vârf al triunghiului.

La final, putem uni ultimele două vârfuri pentru a finaliza triunghiul.
:::

Bineînțeles că am fi putut desena mai întâi latura de 3cm sau am fi putut alege celălalt
vârf pentru a desena unghiul de 40° în jurul său. Cu toate acestea, triunghiurile obținute
ar fi fost congruente cu acesta.

::: tab
#### ASA

::: column(width=300)
{.todo} ÎN CURÂND – Animație
::: column.grow
{.task} Desenează un triunghi cu unghiurile de 70° și 50° și latura cuprinsă între ele de 5cm.

Hai să începem prin a desena prima latură folosind o riglă pentru a măsura 5cm.

Acum hai să folosim raportorul pentru a măsura un unghi de 70° în jurul unuia din capetele
laturii și un unghi de 50° în jurul celuilalt capăt.
(nu contează ordinea – triunghiurile obținute vor fi congruente.)

Triunghiul se finalizează prin unirea urmelor unghiurilor cu extremitățile laturii.
:::

::: tab
#### UUL

::: column(width=300)
{.todo} ÎN CURÂND – Animație
::: column.grow
{.task} Desenează un triunghi cu unghiurile de 40° și 50° și latura cuprinsă între ele de 5cm.

Vom începe din nou prin a construi prima latură a triunghiului care are lungimea de 5cm.

Si vom folosi din nou raportorul pentru a măsura un unghi de 40° în jurul unuia din capetele
și vom desena a doua latură a triunghiului. Cu toate acestea, încă nu știm unde e capătul
acestei laturi.

În schimb, hai să alegem orice punct din jurul acestei drepte, să presupunem ca este cel
de-al treilea vârf al triunghiului și să măsurăm un unghi de 50°.

După cum se poate vedea, nu prea funcționează: a treia latură încă nu se unește cu vârful A.
Pentru a rezolva asta, trebuie doar să o modificăm: desenăm o dreaptă paralelă care trece
prin A. (Ai invățat deja cum se construiesc dreptele paralele într-un
[curs anterior](/course/euclidean-geometry/geometric-construction).)

Cele două unghiuri de sus sunt unghiuri alterne, așa că ele sunt congruente și ambele au
50°. Putem șterge prima dreaptă ce este incorectă pentru a finaliza triunghiul UUL.
:::

::: tab
#### LLU
Construcția LLU este ușor diferită. Poate că ai observat că “LLU” nu se află
pe lista criteriilor de congruență de mai sus, astfel că o comparație LLU în
două triunghiuri nu este suficientă pentru a confirma că ele sunt congruente.
Vei vedea în cele ce urmează de ce:

::: column(width=300)
{.todo} ÎN CURÂND – Animație
::: column.grow
{.task} Desenează un triunghi cu laturile de 4cm și 5cm și unghiul cuprins între ele de 50°.

Ca întotdeauna, hai să începem prin a desena prima latură a triunghiului care are
lungimea de 5cm.

Apoi, hai să măsurăm un unghi de 50° în jurul uneia dintre extremități și să desenăm a doua
latură a triunghiului. Cu toate acestea, nu știm încă unde se va termina această latură.

A treia latură trebuie să aibă lungimea de 4cm. Putem desena cu ajutorul unui raportor un cerc
de rază 4cm în jurul celeilalte extremități a laturii inițiale.

Ultimul vârf al triunghiului este punctul de intersecție a cercului cu a două latură.
Cu toate acestea, în acest caz, sunt două intersecții!

Aceste două triunghiuri sigur nu sunt congruente. Asta înseamnă că există două triunghiuri
diferite cu laturile de 4cm și 5cm, precum și un unghi care nu este cuprins între ele de 50°.
LLU nu este suficient pentru a confirma că două triunghiuri sunt congruente.
:::
:::

---

## Teorema lui Pitagora

> id: pythagoras
> section: pythagoras
> translated: auto

Am ajuns acum într-un punct important din geometrie – să putem formula și întelege una
dintre cele mai faimoase [teoreme](gloss:theorem) din întreaga matematică:
__Teorema lui Pitagora__. Această teoremă a fost numită după matematicianul din Grecia Antică
[Pitagora din Samos](bio:pythagoras).

::: .theorem
::: column.grow
__Teorema lui Pitagora__
Într-un triunghi dreptunghic, pătratul lungimii [__ipotenuzei__](target:hypot)
(latura opusă unghiului drept) este egal cu suma pătratelor celorlalte două laturi.
Altfel spus,

{.text-center} _{span.circled.green}`a^2`_ + _{span.circled.blue}`b^2`_ =
_{span.circled.yellow}`c^2`_

_Și reciproca este adevărată: dacă cele trei laturi ale unui triunghi satisfac relația
a*{sup}2* + b*{sup}2* = c*{sup}2*, atunci triunghiul este [[dreptunghic|ascuțit|obtuz]]._
::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a" cx=82 cy=160 target="hypot")
      circle.move(name="b" cx=218 cy=160 target="hypot")
      circle.move(name="c" cx=120 cy=100 project="arc(line(a,b).midpoint,a,pi).contract(0.2)")

      path.fill.green(x="polygon(b,c,b.rotate(-pi/2,c),c.rotate(pi/2,b))" label="a²" label-class="white")
      path.fill.blue(x="polygon(c,a,c.rotate(-pi/2,a),a.rotate(pi/2,c))" label="b²" label-class="white")
      path.fill.yellow(x="polygon(b,a,b.rotate(pi/2,a),a.rotate(-pi/2,b))" label="c²" label-class="white")

      path.dark(x="segment(b,c)" label="a")
      path.dark(x="segment(a,c)" label="b")
      path.dark(x="segment(a,b)" label="c" target="hypot")
      path.dark.thin(x="angle(b,c,a)")

:::
:::

---
> id: pythagoras-1

::: column(width=220)

    img(src="images/ladder.svg" width=220 height=300)

::: column.grow
Unghiurile drepte pot fi întâlnite peste tot și tocmai de aceea teorema lui
Pitagora este atât de utilă.

Aici se poate vedea o scară cu lungimea de __{.m-red}6m__ ce stă sprijinită de un perete.
Partea de jos a scării se află la 1m depărtare față de perete.
Cât de departe se duce în sus pe perete?

De observat că există un triunghi dreptunghic format de scară, perete și sol.
Folosind teorema lui Pitagora, obținem


    table.eqn-system
      tr
        <td><mrow class="b m-green"><msup><mi>h</mi><mn>2</mn></msup></mrow><mo>+</mo><mrow class="b m-blue"><msup><mn>1</mn><mn>2</mn></msup></mrow></td>
        <td><mo>=</mo><mrow class="b m-red"><msup><mn>6</mn><mn>2</mn></msup></mrow></td>
      tr
        <td><mo>⇒</mo><mrow class="b m-green"><msup><mi>h</mi><mn>2</mn></msup></mrow></td>
        <td><mo>=</mo><x-blank-input solution="35"></x-blank-input></td>
      tr.reveal(when="blank-0")
        <td><mo>⇒</mo><mrow class="b m-green"><mi>h</mi></mrow></td>
        <td><mo>=</mo><msqrt><mn>35</mn></msqrt><mo>=</mo><mn>5.92m</mn></td>

:::

{.reveal(when="blank-0")} Pentru orice triunghi dreptunghic căruia îi știm două dintre laturi,
putem folosi teorema lui Pitagora pentru a afla cea de-a treia latură.

---
> id: pythagoras-proof

### Demonstrația Teoremei lui Pitagora

Teorema lui Pitagora era cunoscută vechilor babilonieni, mesopotamieni,
indieni și chinezi, dar Pitagora a fost primul care a găsit o demonstrație
matematică formală.

De fapt, teorema lui Pitagora poate fi demonstrată în mai multe moduri.
Iată aici trei exemple diferite, fiecare utilizând o strategie diferită:

::: tab.proof-1

#### Rearanjare _{span.check(when="blank-0 blank-1")}_

::: column.grow

Privește figura din dreapta. Pătratul are lungimea laturii _a_ + _b_,
și conține [patru triunghiuri dreptunghice](target:triangle), precum și un
[pătrat mai mic](target:square) cu aria [[<msup><mi>c</mi><mn>2</mn></msup>|_a_ – _b_|_a_ + _b_]].

{.reveal(when="blank-0")} Acum hai să rearanjăm triunghiurile în pătrat. Rezultatul
conține încă cele patru triunghiuri dreptunghice, precum și două pătrate de dimensiunea
[[<msup><mi>a</mi><mn>2</mn></msup> și <msup><mi>b</mi><mn>2</mn></msup>|<msup><mi>c</mi><mn>2</mn></msup>|<msup><mfenced><mi>a</mi><mo>+</mo><mi>b</mi></mfenced><mn>2</mn></msup>]].

{.reveal(when="blank-1")} Comparând aria suprafeței roșii
_{span.hover-target}înainte_ și _{span.hover-target}după_ rearanjare, observăm că
see that

{.text-center.reveal(when="blank-1")} `a^2 + b^2 = c^2`.

{.reveal(when="blank-1")} Aceasta este demonstrația originală formulată
de [Pitagora](bio:pythagoras). _{span.qed}_

::: column(width=240)

    x-geopad(width=240)
      svg
        circle(hidden name="a" x="point(20,20)")
        circle(hidden name="b" x="point(220,20)")
        circle(hidden name="c" x="point(220,220)")
        circle(hidden name="d" x="point(20,220)")

        circle.move(name="e" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
        circle(name="f" hidden x="b.add(e.subtract(a).flip)")
        circle(name="g" hidden x="c.subtract(e.subtract(a))")
        circle(name="h" hidden x="d.subtract(e.subtract(a).flip)")

        path.thin(x="segment(a,e)" label="a")
        path.thin(x="segment(e,b)" label="b")
        path.thin(x="segment(a,h)" label="b")
        path.thin(x="segment(h,d)" label="a")
        path.thin(x="segment(e,h)" label="c")
        path.thin(x="segment(e,f).shift(0,x*distance(h,a))" label="c")

        path.square(x="polygon(a,b,c,d)")
        path.tri(x="polygon(a,e,h)" target="triangle")
        path.tri(x="polygon(c,g,f).shift(-x*distance(d,g),-x*distance(b,f))" target="triangle")
        path.tri(x="polygon(d,h,g).shift(x*distance(e,a),0)" target="triangle")
        path.tri(x="polygon(b,f,e).shift(0,x*distance(h,a))" target="triangle")
        path.square.transparent(x="polygon(e,f,g,h)" target="square")

      .label(style="left: 120px; top: 120px;") c²
      .label.var(style="left: ${10 + e.x/2}px; top: ${230 - e.x/2}px;") a²
      .label.var(style="left: ${110 + e.x/2}px; top: ${130 - e.x/2}px;") b²

    x-slider(steps=100)

:::
::: tab.proof-2

#### Algebra _{span.check(when="blank-2 blank-3 blank-4")}_

::: column.grow

Avem aici aceeași figură ca mai devreme, dar de data aceasta vom folosi _algebra_ în loc de
_rearanjare_ pentru a demonstra teorema lui Pitagora.

Pătratul cel mare are lungimea laturii `a + b` și aria
[[(_a_ + _b_)<sup>2</sup>|_a_<sup>2</sup> + _b_<sup>2</sup>|_c_<sup>2</sup>]].

{.reveal(when="blank-2")} El constă din [patru triunghiuri](target:triangle), fiecare
având aria de [[<mfrac><mn>1</mn><mn>2</mn></mfrac>_ab_|(_a_ × _b_)<sup>2</sup>|<mfrac><mn>1</mn><mn>2</mn></mfrac>(_a_ + _b_)]],
și [un pătrat](target:square) cu aria [[_c_<sup>2</sup>|(_a_ + _b_)<sup>2</sup>|_a_ × _b_]].

{.reveal(when="blank-3 blank-4")} Dacă punem la un loc toate aceste informații, obținem

    table.eqn-system.reveal(when="blank-3 blank-4")
      tr
        <td><msup><mfenced><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></mfenced><mn>2</mn></msup></td>
        <td><mo>=</mo><mn>4</mn><mo>×</mo><mfrac><mn>1</mn><mrow><mn>2</mn></mfrac><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup></td>
      tr
        <td><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mrow><mn>2</mn><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><mrow><mn>2</mn><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup></td>
      tr
        <td><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></td>

{.reveal(when="blank-3 blank-4")} Și, încă o dată, ajungem la teorema lui Pitagora.
_{span.qed}_

::: column(width=240)

    x-geopad(width=240): svg
      circle.move(name="e1" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
      circle(name="f1" hidden x="b.add(e1.subtract(a).flip)")
      circle(name="g1" hidden x="c.subtract(e1.subtract(a))")
      circle(name="h1" hidden x="d.subtract(e1.subtract(a).flip)")

      path.thin(x="segment(a,e1)" label="a")
      path.thin(x="segment(e1,b)" label="b")
      path.thin(x="segment(a,h1)" label="b")
      path.thin(x="segment(h1,d)" label="a")
      path.thin(x="segment(e1,h1)" label="c")
      path.thin(x="segment(e1,f1).shift(0,x*distance(h,a))" label="c")

      path.square(x="polygon(e1,f1,g1,h1)" target="square")
      path.tri(x="polygon(a,e1,h1)" target="triangle")
      path.tri(x="polygon(c,g1,f1)" target="triangle")
      path.tri(x="polygon(d,h1,g1)" target="triangle")
      path.tri(x="polygon(b,f1,e1)" target="triangle")

:::
::: tab.proof-3

#### Triunghiuri asemenea _{span.check(when="next-0 next-1 next-2 blank-5")}_

::: column.grow

{.r} Iată un alt triunghi dreptunghic. Dacă trasăm una din înălțimi, triunghiul
se împarte în două triunghiuri mai mici. De asemenea, și ipotenuza _c_ este
împărțită în [două părți mai mici](target:hypotenuse) pe care le vom numi
[{.step-target.i.pill.blue}x](target:x) și [{.step-target.i.pill.green}y](target:y).
_{span.next-step} Continuă_

{.r.reveal(when="next-0")} Hai să separăm cele două triunghiuri mai mici, astfel
încât să fie mai clar cum sunt legate…
_{span.next-step} Continuă_

{.reveal(when="next-1")} Ambele triunghiuri mai mici [au un unghi comun](target:angle)
cu triunghiul inițial. De asemenea, ele au și [un unghi drept](target:right).
Conform criteriului UU, toate cele trei triunghiuri sunt [[asemenea|congruente|dreptunghice]].

::: column(width=260)

    x-geopad.similar-triangle(width=260): svg
      circle(name="B1" hidden cx=40 cy=100)
      circle(name="X1" hidden cx=170 cy=100)
      circle(name="C1" hidden cx=170 cy=20)
      path.fill.light.red(x="polygon(B1,X1,C1)")
      path.fill.yellow(x="angle(C1,B1,X1).sup" size=25 target="angle")
      path.dark.thin(x="angle(B1,X1,C1).sup" size=10 target="right")
      path.red(x="segment(B1,C1)" label="a" target="a ac")
      path.dark(x="segment(X1,C1)")
      path.blue(x="segment(X1,B1)" label="x" target="x xa")

      circle(name="A2" hidden cx=220 cy=100)
      circle(name="X2" hidden cx=170 cy=100)
      circle(name="C2" hidden cx=170 cy=20)
      path.fill.light.yellow(x="polygon(A2,X2,C2)")
      path.fill.red(x="angle(C2,A2,X2).sup" size=20 target="angle")
      path.dark.thin(x="angle(A2,X2,C2).sup" size=10 target="right")
      path.yellow(x="segment(A2,C2)" label="b" target="b bc")
      path.dark(x="segment(X2,C2)")
      path.green(x="segment(X2,A2)" label="y" target="y yb")

      circle(name="A" hidden x="point(220,100)")
      circle(name="B" hidden x="point(40,100)")
      circle(name="C" hidden x="point(170,20)")
      circle(name="X" hidden x="point(170,100)")
      path.dark(x="segment(X,C)" target="altitude")
      path.dark.thin(x="angle(B,X,C)" size=10 target="altitude")
      path.fill.yellow(x="angle(C,B,X)" size=25 target="angle")
      path.fill.red(x="angle(X,A,C)" size=20 target="angle")
      path.dark.thin(x="angle(A,C,B)" size=10 target="right")
      path.red(x="segment(B,C)" label="a" target="a xa")
      path.yellow(x="segment(A,C)" label="b" target="b yb")
      path.blue(x="segment(B,X)" label="x" target="hypotenuse x ac bc")
      path.green(x="segment(X,A)" label="y" target="hypotenuse y ac bc")

:::

{.reveal(when="blank-5")} Acum putem folosi ecuațiile pe care le știm deja
despre poligoane asemenea:

    table.proof-table.reveal(when="blank-5")
      tr
        td
          <p class="text-center"><mrow class="step-target pill blue" data-to="xa"><mfrac><mi>x</mi><mi>a</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill red" data-to="ac"><mfrac><mi>a</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill blue" data-to="x">x</mi><mo>=</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>c</mi></mfra></p>
        td
          <p class="text-center"><mrow class="step-target pill green" data-to="yb"><mfrac><mi>y</mi><mi>b</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill yellow" data-to="bc"><mfrac><mi>b</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill green" data-to="y">y</mi><mo>=</mo><mfrac><msup><mi>b</mi><mn>2</mn></msup><mi>c</mi></mfra></p>

{.r.reveal(when="blank-5")} _{span.next-step} Continuă_

{.reveal(when="next-2")} Dar să ne amintim că _c_ = [{.step-target.i.pill.blue}x](target:x) +
[{.step-target.i.pill.green}y](target:y). Așadar

{.text-center.reveal(when="next-2")} `c = a^2/c + b^2/c`

{.text-center.reveal(when="next-2")} `c^2 = a^2 + b^2`

{.reveal(when="next-2")} Am demonstrat din nou teorema lui Pitagora! _{span.qed}_

:::

---
> id: pythagoras-2

Nu se cunosc multe detalii despre viața lui Pitagora și nu a fost găsită nicio lucrare
de-a sa. El a fondat un cult religios numit _Pitagorism_ care practica
un soi de “venerare a numerelor”. Pitagoricienii credeau că toate numerele au
propriile lor caracteristici și că urmează variate obiceiuri bizare.

::: column.grow

Pitagoricienilor li se atribuie multe descoperiri matematice, inclusiv găsirea
primului [număr irațional](gloss:irrational-numbers), `sqrt(2)`.
Numerele iraționale nu pot fi exprimate ca fracții simple - concept care
i-a tulburat profund pe pitagoricienii și pe care au încercat (fără succes)
să-l ascundă!

::: column(width=400)

    x-img(src="images/pythagoreans.jpg" width=400 height=200 lightbox)

{.caption} “Pitagoricienii sărbătoresc răsăritul” de Fyodor Bronnikov

:::

---
> id: distance-formula

### Calcularea Distanțelor

Una din cele mai importante aplicații ale teoremei lui Pitagora
este calcularea distanțelor.

::: column.grow
{.r} La dreapta se pot vedea duă puncte reprezentate într-un sistem de coordonate.
Le-am putea măsura distanța folosind o rigla, dar nu ar fi suficient de precis.
În schimb, să  încercăm să folosim teorema lui Pitagora.
_{span.next-step} Continuă_

{.reveal(when="next-0")} Putem număra cu ușurință [distanța orizontală](target:dx)
de-a lungul axei _x_, și [distanța verticală](target:dy) de-a lungul axei _y_.
Dacă desenăm acele două linii, obținem un [triunghi dreptunghic](target:triangle).
{.reveal(when="next-0")} Folosing teorema lui Pitagora,

    table.eqn-system.reveal(when="next-0")
      tr
        <td><msup><mi>d</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><msup><mn class="step-target pill blue var" data-to="dx">${b.x-a.x}</mn><mn>2</mn></msup><mo>+</mo><msup><mn class="step-target pill red var" data-to="dy">${b.y-a.y}</mn><mn>2</mn></msup></td>
      tr
        <td><msup><mi>d</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><mn class="var">${(b.x-a.x)*(b.x-a.x) + (b.y-a.y)*(b.y-a.y)}</mn></td>
      tr
        <td><mi>d</mi></td>
        <td><mo>=</mo><msqrt><mn class="var">${(b.x-a.x)**2+(a.y-b.y)**2}</mn></msqrt><mo>=</mo><mn class="var">${round(distance(a,b),4)}</mn></td>

::: column(width=300)

    x-geopad(width=300 height=300 x-axis="-0.5,11.5,1" y-axis="-0.5,11.5,1" grid snap): svg
      circle.move.pulsate(name="a" cx="2" cy="5" label="(${a.x},${a.y})")
      circle.move.pulsate(name="b" cx="9" cy="10" label="(${b.x},${b.y})")
      path(x="segment(a,b)" label="d")
      path.blue.reveal(x="segment(a,point(b.x,a.y))" label="${b.x-a.x}" mark="arrow" when="next-0" target="dx")
      path.red.reveal(x="segment(point(b.x,a.y),b)" label="${b.y-a.y}" mark="arrow" when="next-0" target="dy")
      path.yellow.fill.transparent#tri-move(target="triangle" x="polygon(a,b,point(b.x,a.y))")

:::

---
> id: distance-formula-1

Această metodă funcționează pentru _oricare_ două puncte:

::: .theorem
__Formula Distanței__
Fie două puncte de coordonate  (`x_1`,`y_1`) și (`x_2`,`y_2`),
atunci distanța dintre ele este

{.text-center} `d^2=(x_2−x_1)^2+(y_2−y_1)^2`

{.text-center} `d=sqrt((x_2−x_1)^2+(y_2−y_1)^2)`
:::

---
> id: pythagorean-triples

### Triplete pitagoreice

În timp ce mișcai [vârfurile triunghiului](->#tri-move) din pasul anterior,
poate că ai observat că în majoritatea cazurilor, lungimea ipotenuzei _d_
era un [[număr zecimal|număr fracționar|număr întreg]].
_{span.reveal(when="blank-0")}Totuși există câteva exemple de triunghiuri
dreptunghice în care lungimile celor *trei laturi* sunt *numere naturale*._

---
> id: pythagorean-triples-1

::: column.grow
Un exemplu binecunoscut este triunghiul 3-4-5. Întrucât `3^2 + 4^2 = 5^2`, orice
triunghi cu laturile de lungime 3, 4 și 5 este dreptunghic.

Vechii egipteni nu cunoșteau teorema lui Pitagora, dar știau despre triunghiul 3-4-5.
Pentru construcția piramidelor ei au folosit sfori înnodate de lungimi 3, 4 și 5
pentru a măsura perfect unghiuri drepte.

::: column(width=400)

    img(src="images/egypt.png" width=400 height=220)

:::

Trei astfel de numere întregi se numesc [__triplet pitagoreic__](gloss:pythagorean-triple).
(3, 4, 5) este un exemplu de triplet pitagoreic. Dacă înmulțim fiecare număr cu 2, obținem un
alt triplet pitagoreic: (6, 8, [[10]]).

---
> id: pythagorean-triples-grid
> goals: p0 p1 p2 p3 p4 p5

Ne putem gândi la aceste triplete ca la niște puncte de grilă intr-un sistem de coordonate
Pentru un triplet pitagoreic valid, distanța de la originea grilei va fi un număr natural.
Poți găsi un alt triplet pitagoreic folosind sistemul de coordonate de mai jos?

    figure: x-geopad.r.no-background(width=450 height=450 x-axis="0,16.5,1" y-axis="0,16.5,1" grid axes padding="10 10 25 25" snap)
      svg
        circle.move.pulsate(cx=4 cy=10 name="a")
        path.thick(x="polygon(point(0,0),a,point(a.x,0))")
      .label.var(style="left:${26+12.5*a.x}px; top:425px") ${a.x}
      .label.var(style="left:${26+25*a.x}px; top:${425-12.5*a.y}px") ${a.y}
      .label.var(style="left:${26+12.5*a.x}px; top:${425-12.5*a.y}px") ${round(a.length,2)}

{.reveal(when="p0 p1 p2 p3 p4 p5")} Observi un șablon în distribuția acestor puncte?

----

## Triunghiuri Isoscele și Echilaterale

> id: isosceles
> section: isosceles-and-equilateral
> sectionStatus: dev

Pe lângă triunghiurile dreptunghice, mai există câteva alte triunghiuri cu
proprietăți speciale. În această secțiune vom analiza unele dintre ele.

### Triunghiuri Isoscele

Spunem că un triunghi este [__isoscel__](gloss:isosceles-triangle) dacă are
două laturi congruente. Cea de-a treia latură se numește __bază__.

{.todo} ÎN CURÂND – Teorema unghiurilor bazei.
Demonstrație prin construcția bisectoarelor și a criteriului LUL.

{.todo} ÎN CURÂND – Află înălțimea unui triunghi isoscel folosing teorema lui Pitagora

---
> id: equilateral

### Triunghiuri Echilaterale

Spunem că un triunghi este [__echilateral__](todo:equilateral-triangle) dacă toate
laturile sale au aceeași lungime. [Ai văzut deja](/course/euclidean-geometry/geometric-construction)
cum se construiește un triunghi echilateral folosind dreptarul și compasul.

{.todo} ÎN CURÂND – Măsura unghiurilor într-un triunghi echilateral

{.todo} ÎN CURÂND– Aria unui triunghi echilateral

----

## Trigonometrie

> id: trigonometry
> section: trigonometry
> translated: auto

Până acum am văzut relații între __unghiurile__ triunghirilor (ex: suma unghiurilor
unui triunghi este 180°) și relații între __laturile__ triunghiurilor
(ex: teorema lui Pitagora). Dar nu există nimic care __leagă__ măsurile unghiurilor
de lungimile laturilor.

De exemplu, dacă știu cele trei laturi ale unui triunghi, cum pot afla măsura
unghiurilor sale, fără a desena triunghiul și fără a le măsura cu un raportor?
Aici intervine __trigonometria__!

    figure: img(src="images/trig-om-nom.jpg" width=200 height=200)

---
> id: trigonometry-1

::: column.grow
Să ne imaginăm că avem un triunghi dreptunghic pentru care cunoaștem măsura unuia
din celelalte două unghiuri, __{.m-red}α__. Știm deja că cea mai mare latură
se numește [__{.m-yellow}ipotenuză__](target:hyp). Celelalte două se numesc
[__{.m-green}laturi adiacente__](target:adj) (care se află lângă unghiul __{.m-red}α__) și
[__{.m-blue}latura opusă__](target:opp) (care este opusă unghiului __{.m-red}α__).
::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Ipotenuză" target="hyp")
      path.blue(x="segment(b,c)" label="Latura opusă" target="opp")
      path.green(x="segment(a,c)" label="Latura adiacentă" target="adj")

:::

Există multe triunghiuri diferite ce au unghiuri __{.m-red}α__ și de 90°, dar
conform [criteriului UU](gloss:triangle-aa) știm că toate sunt [[asemenea|congruente]]:

    figure: img(src="images/triangles.svg" width=600 height=240)

---
> id: trig-functions

Cum toate aceste triunghiuri sunt asemenea, laturile lor sunt proporționale.
Următoarele raporturi sunt, în special, aceleași pentru toate aceste triunghiuri :

    p.text-center
      mfrac
        mrow: mtext.m-blue.b Latura opusă
        mrow: mtext.m-yellow.b Ipotenuză
      span.space
      mfrac
        mrow: mtext.m-green.b Latura adiacentă
        mrow: mtext.m-yellow.b Ipotenuză
      span.space
      mfrac
        mrow: mtext.m-blue.b Latura opusă
        mrow: mtext.m-green.b Latura adiacentă

Hai să încercăm să rezumăm: am ales o anume valoare pentru __{.m-red}α__ și
am obținut o mulțime de triunghiuri dreptunghice asemenea. Toate aceste triunghiuri
au laturile proporționale. Întrucât __{.m-red}α__ a fost singura noastră variabilă,
trebuie să existe o relație între __{.m-red}α__ și acele proporții.

Aceste relații se numesc __funcții trigonometrice__ – și sunt trei la număr:

::: .theorem
Cele trei funcții trigonometrice sunt relații între unghiuri și rapoartele
laturilor unui triunghi dreptunghic. Fiecare dintre ele are un nume, precum
și o abreviere de 3 litere:

::: column.grow

    ul
      li.display
        strong Sinus:
        .space
        mtext sin
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b Latura opusă
          mrow: mtext.m-yellow.b Ipotenuză
      li.display
        strong Cosinus:
        .space
        mtext cos
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-green.b Latura adiacentă
          mrow: mtext.m-yellow.b Ipotenuză
      li.display
        strong Tangentă:
        .space
        mtext tan
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b Latura opusă
          mrow: mtext.m-green.b Latura adiacentă

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Hypotenuse")
      path.blue(x="segment(b,c)" label="Opposite")
      path.green(x="segment(a,c)" label="Adjacent")

:::
:::

---
> id: trig-functions-1

{.todo} ÎN CURÂND – Mai multe despre trigonometrie

---
> id: inverse-trig

### Funcții Trigonometrice Inverse

{.todo} ÎN CURÂND – Funcții inverse

---

## Teorema Sinusurilor și Teorema Cosinusului

> section: sine-cosine-rule
> id: sine-cosine-rule
> translated: auto

Până acum, tot ce-am învățat despre trigonometrie se aplică doar în triunghiurile
dreptunghice. Dar majoritatea triunghiurilor nu sunt dreptunghice și există două
rezultate importante care se aplică tuturor triunghiurilor.

::: column.grow
::: .theorem
__Teorema Sinusurilor__
Într-un triunghi cu laturile _a_, _b_ și _c_ și unghiurile _A_, _B_ și _C_,

{.text-center} `(sin(a))/a = (sin(b))/b = (sin(c))/c`
:::

::: column.grow
::: .theorem
__Teorema Cosinusului__
Într-un triunghi cu laturile _a_, _b_ și _c_ și unghiurile _A_, _B_ și _C_,

{.text-center} `c^2 = a^2 + b^2 - 2ab cos(C)`
`b^2 = c^2 + a^2 - 2ca cos(B)`
`a^2 = b^2 + c^2 - 2bc cos(A)`
:::

:::

---
> id: trigonometry-4

{.todo} ÎN CURÂND – Demonstrație, exemple și aplicații

---
> id: mountains

### Marele Studiu Trigonometric

Vă mai aduceți aminte de misiunea de a găsi cel mai înalt munte de pe Pământ din
[introducere](/course/triangles/introduction)? Cu ajutorul trigonometriei putem,
în sfârșit, să rezolvăm această problemă!

::: .sticky-wrap

    figure.sticky.mountain
      x-geopad.no-background(width=760 height=250): svg
        image(href="images/mountain.svg" height=240 width=760 y=5)
        circle(name="a" x="point(25, 230)" target="points")
        circle(name="b" x="point(185, 230)" target="points")
        circle(name="x" x="point(573, 7)" target="")
        circle(name="y" x="point(573, 230)" target="")

        path.fill.red(x="angle(x,a,b)" label="23°" target="angles ang" size=60)
        path.fill.blue(x="angle(x,b,y)" label="29°" target="ang1" size=50)
        path.fill(name="angle-b" x="angle(b,x,a)" label="β" target="b angles" size=100)
        path.fill.green(name="angle-a" x="angle(a,b,x)" label="α" target="a angles" size=25)
        path(x="angle(b,y,x)")

        path.yellow(x="segment(a,b)" target="base right" label="5km")
        path.yellow(x="segment(b,x)" target="")
        path.yellow(name="side-d" x="segment(a,x)" target="d right" label="d")
        path.yellow(x="segment(b,y)" target="right")
        path.yellow(x="segment(x,y)" target="right" label="height")

Topografii din India au măsurat unghiul din vârful muntelui din
[două poziții diferite](target:points), aflate la distanță de _{span.pill.step-target.yellow(data-to="base")}5km unul față de altul_.
Rezultatele obținute au fost _{span.pill.step-target.red(data-to="ang")}23°_ și
_{span.pill.step-target.blue(data-to="ang1")}29°_.

Pentru că _{span.pill.step-target.green(data-to="a")}unghiul α_ este
[unghi suplementar](gloss:supplementary-angles), știm că măsura lui este [[151]]°.
_{span.reveal(when="blank-0")}Știind suma unghiurilor interne ale unui triunhi putem calcula
măsura *{span.pill.step-target(data-to="b")}unghiului β* care este de [[6]]°._

{.reveal(when="blank-1")} Acum știm [toate cele trei unghiuri](target:angles) ale
triunghiului, precum și _{span.pill.step-target.yellow(data-to="base")}una dintre
laturi_. Aceste informații sunt suficiente pentru a afla [[teorema sinusurilor|teorema cosinusului]]
ca să calculăm distanța
[_d_](target:d):

    table.eqn-system
      tr.reveal(when="blank-2")
        td
          mfrac
            mrow
              mo sin
              mn.pill.step-target.green(data-to="a") 151°
            mrow.md [[d|5]]
        td
          mo =
          mfrac
            mrow
              mo sin
              mn.pill.step-target(data-to="b") 6°
            mrow.md [[5|d]]
      tr.reveal(when="blank-3 blank-4")
        td: mi d
        td
          mo =
          mo sin
          mn.pill.step-target.green(data-to="a") 151°
          mo ×
          mfrac
            mrow: mn.pill.step-target.yellow(data-to="base") 5
            mrow
              mo sin
              mn.pill.step-target(data-to="b") 6°

      tr.reveal(when="blank-3 blank-4" delay=1000)
        td
        td
          mo =
          mn.pill.yellow.step-target(data-to="d") 23.2 km

{.reveal(when="blank-3 blank-4" delay=2000)} Mai avem un ultim pas: să aruncăm
o privire la [triunghiul dreptunghic cel mare](target:right). Știm deja lungimea
ipotenuzei, dar, de fapt, avem nevoie de latura [[opusă|adiacentă]].
_{span.reveal(when="blank-5")}O putem afla folosind definiția lui
*sin*:_

    table.eqn-system
      tr.reveal(when="blank-5" delay=1000)
        td
          mo sin
          mn.pill.step-target.red(data-to="ang") 23°
        td
          mo =
          mfrac
            mrow.md [[height|23]]
            mrow.md [[23|height]]
      tr.reveal(when="blank-6 blank-7")
        td: mtext height
        td
          mo =
          mo sin
          mn.pill.step-target.red(data-to="ang") 23°
          mo ×
          mn.pill.step-target.yellow(data-to="d") 23

      tr.reveal(when="blank-6 blank-7" delay=1000)
        td
        td
          mo =
          mn.pill.step-target.yellow(data-to="height") 8.987 km

{.reveal(when="blank-6 blank-7" delay=2000)} Această valoare este foarte apropiată
de înălțimea reală a Muntelui Everest, cel mai înalt munte de pe Pământ: 8,848m.
:::

---
> id: mountains-1

Această explicație simplifică foarte mult munca extraordinară realizată de
matematicienii și geografii care au participat la Marele Studiu Trigonometric.
Ei au început de la nivelul mării de pe plajă, au măsurat lungimi de mii de kilometri,
au construit turnuri de instalare a instrumentelor topografice de-a lungul întregii țări
și au explicat chiar și curbura Pământului.

    figure: x-img(src="images/himalaya.jpg" width=760 height=320)
