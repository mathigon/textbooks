# Triangoli e trigonometria

## Introduzione

> id: intro
> section: introduction
> color: "#3566DE"
> level: Intermediate
> next: polyhedra

::: column.grow
All'inizio del diciannovesimo secolo, gli esploratori avevano esplorato quasi tutto il mondo. Il commercio
e i trasporti tra paesi lontani era in forte espansione e da ciò nacque la necessità di
avere _mappe accurate_ dell'intero pianeta.

Oggi abbiamo satelliti che possono scattare fotografie dall'alto - ma 200 anni fa,
creare una mappa era un lavoro difficile e lungo. Vi si cimentarono
matematici come [Radhanath Sikdar](bio:sikdar), che lavorò sulla _Grande
indagine trigonometrica_: un progetto della durata di un secolo che si prefiggeva di misurare tutta l'India,
compresa la catena dell'Himalaya.

::: column(width=240)

    x-img(src="images/theodolite.jpg" width=240 height=320 credit="Science & Society Picture Library")

{.caption} Il _teodolite_, uno strumento di misura
:::

Particolarmente interessante fu la ricerca della più alta montagna al mondo.
C'erano diversi candidati, ma distavano centinaia di chilometri l'una dall'altra ed era
difficile dire quale fosse la più alta.

Allora, come si misura l'altezza di una montagna?

    figure.mountain: include svg/mountain.svg

{.r} Oggi possiamo usare i satelliti per misurare l'altezza delle montagne sbagliando di pochi
centimetri – ma questi non esistevano quando Radhanath misurò l'India.
_{button.next-step} Continua_

{.r.reveal(when="next-0")} Gli alpinisti usano gli _altimetri_ per determinare la loro altitudine.
Questi strumenti sfruttano la differenza tra la pressione dell'aria a differenti altitudini. Tuttavia,
ciò avrebbe richiesto che qualcuno si arrampicasse fino alla [cima di ogni
montagna](->.mountain-top) – un'impresa difficile che fu realizzata solo
un secolo più tardi.
_{button.next-step} Continua_

{.r.reveal(when="next-1")} Si potrebbe anche provare utilizzando i triangoli simili, come
abbiamo fatto nel [corso precedente](/course/transformations/similarity).
Questo metodo richiede la conoscenza della [distanza](->.mountain-distance) fino alla [base
della montagna](->.mountain-base): il punto al livello del mare che sta direttamente sotto
alla cima. Possiamo conoscere questa informazione per gli alberi, o per gli edifici molto alti, ma per le montagne questo
punto è nascosto sotto centinaia di metri di roccia.
_{button.next-step} Continua_

---
> id: intro-2

::: column(width=320)

    x-img(src="images/hillary.jpg" width=320 height=190)

{.caption} Edmund Hillary e Tenzing Norgay furono i primi a raggiungere la vetta
dell'Everest, nel 1953.

::: column.grow
Ma ci sono tecniche geometriche più avanzate, che [Radhanath](bio:sikdar)
utilizzò per trovare la più alta montagla sulla terra: è oggi chiamato il  _Monte Everest_.
Le sue misure differiscono solo di pochi metri rispetto all'altezza odierna ufficiale di 8848 metri.

In questo corso impareremo diverse caratteristiche e proprietà dei
triangoli. Esse ti permetteranno di misurare l'altezza delle montagne, ma sono anche
di fondamentale importanza in molte altre aree della matematica, scienza e
ingegneria.
_{button.next-step} Continua_
:::

---
> id: applications

I triangoli sono speciali perché sono particolarmente _stabili_. Sono gli unici
poligoni che, se costruiti con assi di legno e cardini, diventano
_rigidi_ – al contrario dei rettangoli, ad esempio, che possono facilmente essere deformati.

{.todo} COMING SOON – Animations

---
> id: applications-1

Questa proprietà rende i triangoli particolarmente utili nelle costruzioni, perché
possono sostenere un grande peso.

::: column(width=200)

    x-img(src="images/truss-bridge.jpg" credit="© ykanazawa1999, Flickr" width=200 height=200 lightbox)

{.caption} Un “ponte a capriata” è sostenuto da sbarre triangolari

::: column(width=200)

    x-img(src="images/pylon.jpg" width=200 height=200 lightbox)

{.caption} Triangoli nei piloni dell'alta tensione

::: column(width=200)

    x-img(src="images/bike.jpg" width=200 height=200 lightbox)

{.caption} Anche nelle bici si usano i triangoli per la stabilità.

:::

---
> id: applications-2
> goals: video

I triangoli sono anche i poligoni più semplici, con il minor numero di lati. Ciò li rende
particolarmente appropriati per approssimare delle superfici curve piÙ complesse. Questo viene
fatto negli edifici…

::: column(width=200)

    x-img(src="images/st-mary.jpg" credit="Kunstlerbob, Wikipedia" width=200 height=200 lightbox)

{.caption} Il “Gherkin”, un grattacielo di Londra

::: column(width=200)

    x-img(src="images/hk-bank.jpg" credit="WiNG, Wikipedia" width=200 height=200 lightbox)

{.caption} Torre della Bank of China a Hong Kong

::: column(width=200)

    x-img(src="images/museum.jpg" credit="Andrew Dunn, Wikipedia" width=200 height=200 lightbox)

{.caption} Atrio del British Museum a Londra

:::
::: column.grow

…ma anche nel mondo virtuale. Nelle immagini di sintesi (ad esempio nei film o
nei videogiochi), tutte le superfici sono utilizzate utilizzando una “griglia” formata da minuscoli triangoli.
Gli artisti e gli ingenieri informatici devono conoscere la geometria e la trigonometria per
poter muovere e trasformare questi triangoli in modo realistico e per
poter calcolare il loro colore e la loro struttura.

::: column(width=220)

    x-img(src="images/dolphin.jpg" width=220 height=135)

:::

    figure: x-video(src="https://static.mathigon.org/videos/tiger.mp4" poster="images/tiger.jpg" width=480 height=270 credit="© UCTV, The STEAM Channel")

---

## Proprietà dei triangoli

> id: angle-sum
> section: properties

Cominciamo con le cose semplici: un triangolo è una figura chiusa che ha tre lati (che
sono [segmenti](gloss:line-segment)) e tre vertici (i
[punti](gloss:point) dove i lati si incontrano). Ha anche tre [angoli
interni](gloss:internal-angle), e sappiamo già che la loro somma vale sempre [[180]]°.

---
> id: classification

Possiamo classificare i triangoli secondo l'ampiezza dei loro angoli:

::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a1" x="point(40,60)")
      circle(name="b1" x="point(40,140)")
      circle(name="c1" x="point(180,140)")
      path.fill.red(x="angle(a1,b1,c1)")
      path(x="polygon(a1,b1,c1)")

{.caption} Un __triangolo rettangolo__
ha un [angolo retto](gloss:right-angle).
::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a2" x="point(30,30)")
      circle(name="b2" x="point(150,60)")
      circle(name="c2" x="point(190,190)")
      path.fill.blue(x="angle(c2,b2,a2)")
      path(x="polygon(a2,b2,c2)")

{.caption} Un __triangolo ottusangolo__
ha un [angolo ottuso](gloss:obtuse-angle).
::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a3" x="point(60,50)")
      circle(name="b3" x="point(30,180)")
      circle(name="c3" x="point(190,130)")
      path.fill.green(x="angle(a3,b3,c3)")
      path.fill.green(x="angle(b3,c3,a3)")
      path.fill.green(x="angle(c3,a3,b3)")
      path(x="polygon(a3,b3,c3)")

{.caption} Un __triangolo acutangolo__
ha [[tre]] [angoli acuti](gloss:acute-angle).
:::

---
> id: labels

::: column.grow
Per comodità,  contrassegnamo i triangoli sempre nello stesso modo. I vertici vengono
indicati con le lettere maiuscole [_A_, _B_ e _C_](target:vertex), i lati vengono
indicati con le lettere minuscole [_a_, _b_ and _c_](target:side), e gli angoli
con le lettere greche [`α`, `β` e `γ`](target:angle) (“alpha”, “beta” e
“gamma”).

Il [lato _opposto_ al vertice _A_](target:X) si indica con _a_, e
l'[angolo vicino ad _A_](target:Y) si indica con `α`. Lo stesso vale
per _B_/_b_/`β` e per _C_/_c_/`γ`.
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

### Le mediane

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
Qui puoi vedere un triangolo e i [punti medi](gloss:midpoint) dei
suoi tre lati.

La [__mediana__](gloss:triangle-median) di un triangolo è il segmento che
collega un vertice con il punto medio del lato opposto. Disegna le tre mediane di questo
triangolo. _{span.reveal(when="s0 s1 s2")}Cosa succede se sposti i vertici
del triangolo?_

{.reveal(when="move")} Sembrerebbe che le mediane [[si incontrino in un punto|abbiano la stessa lunghezza|si dividano reciprocamente a metà]].
_{span.reveal(when="blank-0")}Questo punto è chiamato il
[__baricentro__](gloss:centroid)._

{.reveal(when="blank-0")} Le mediane si dividono in
[rapporto 2:1](target:ratio). Per ognuna delle tre mediane, la distanza tra il vertice e il baricentro
è sempre [[il doppio della|il triplo della|uguale alla]]
distanza tra il baricentro e il punto medio del lato.
:::

---
> id: center-of-mass

Il baricentro è anche il “punto di equilibrio” di un triangolo. Disegna un triangolo su un
cartoncino, ritaglialo e disegna le tre mediane. Se il disegno è accurato,
potrai ora tenere in equilibrio il triangolo sulla punta di una matita, o appenderlo perfettamente
orizzontale ad un filo che è attaccato al baricentro:

    figure: img(src="images/center-of-mass.jpg" width=600 height=190)

Funziona perché il peso del triangolo è distribuito in modo uniforme attorno al
baricentro. In fisica, questo punto è spesso chiamato il __centro di massa__.

---
> id: circumcircle
> goals: s0 s1 s2

### Assi di un triangolo e cerchio circoscritto

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
Ricorda che l'[asse](gloss:perpendicular-bisector) di un segmento
è la retta perpendicolare che passa per [[il suo punto medio|i suoi estremi]].

{.reveal(when="blank-0")}Disegna l'asse di tutti e tre i lati di
questo triangolo. _{.lgrey} Per disegnare gli assi di un lato del
triangolo, clicca semplicemente su un vertice e trascina il cursore da un vertice all'altro._

{.reveal(when="s0 s1 s2")} Come prima, i tre assi si intersecano in un
solo punto. E di nuovo, questo punto ha una proprietà speciale.

{.reveal(when="s0 s1 s2")} Ogni punto su un asse ha la stessa distanza
dai due estremi del segmento. Ad esempio, ogni punto
sull'[asse blu](target:b-blue) ha la stessa distanza dai punti _A_ e
_C_ e ogni punto dell'[asse rosso](target:b-red) ha la stessa distanza
dai punti [[A e B|A e C|B e C]].

{.reveal(when="blank-1")}Il [punto di intersezione](target:center) giace su tutti
e tre gli assi, quindi deve avere la stessa distanza da tutti e tre i
[[vertici|lati]] del triangolo.

{.reveal(when="blank-2")} Questo significa che possiamo tracciare un cerchio attorno a questo punto che tocca perfettamente tutti i vertici. Questo cerchio è chiamato
[__cerchio circoscritto__](gloss:circumcircle) del triangolo e il centro è chiamato
__circocentro__.
:::

---
> id: circumcircle-1

Perciò, se ti vengono dati tre punti qualsiasi, puoi usare il
circocentro per trovare un cerchio che passa da tutti e tre i punti. (A meno che i
punti siano [[collineari|paralleli]], perché in quel caso giacciono tutti su una retta.)

---
> id: incircle
> goals: s0 s1 s2

### Bisettici e cerchio inscritto

Comincerai probabilmente ad intuire il principio: scegliamo una costruzione, la
ripetiamo tre volte per tutti i lati o angoli del triangolo, e poi scopriamo
cos'ha di speciale l'intersezione di queste linee.

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
Ricorda che la [bisettrice](gloss:angle-bisector) divide un angolo esattamente
a metà. Disegna le bisettrici dei tre angoli in questo triangolo.
_{.lgrey} Per disegnare una bisettrice, seleziona i tre punti che una volta collegati formano l'angolo che vuoi bisecare._

{.r.reveal(when="s0 s1 s2")} Ancora una volta, tutte e tre le linee si intersecano in un punto.
Probabilmente te lo aspettavi, ma è importante notare che
non è per niente ovvio che questo accada – i triangoli sono delle forme speciali!
_{button.next-step} Continua_

{.reveal(when="next-0")} I punti che giacciono su una bisettrice hanno la stessa
distanza dalle due linee che delimitano l'angolo. Ad esempio, ogni punto sulla [bisettrice blu](target:b-blue) ha la stessa distanza dal lato _a_ e dal lato _c_,
e ogni punto sulla [bisettrice rossa](target:b-red) ha la stessa distanza dai lati [[a e b|a e c|b e c]].

{.reveal(when="blank-0")} Il [punto di intersezione](target:center) giace su tutte e
tre le bisettrici. Perciò deve avere la stessa distanza da tutti e tre i
[[lati|vertici]] del triangolo.

{.reveal(when="blank-1")} Questo significa che possiamo tracciare un cerchio attorno a questo punto, che si trova
all'interno del triangolo e sfiora i suoi tre lati. Questo cerchio è chiamato
__cerchio inscritto__ al triangolo e il suo centro è detto __incentro__.
:::

---
> id: area

### Area e altezze

::: column.grow
{.r} Trovare l'area di un [rettangolo](gloss:rectangle) è semplice: basta
moltiplicarene la base con l'altezza. Trovare l'area di un triangolo è un po' meno
ovvio. Cominciamo ad “intrappolare” un triangolo in un rettangolo.
_{button.next-step} Continua_

{.reveal.r(when="next-0")} La base del rettangolo corrisponde al
[lato inferiore](target:base) del triangolo (che è chiamato __base__). L'altezza del rettangolo è la [distanza perpendicolare](target:height) tra la base e
il vertice opposto.
_{button.next-step} Continua_

{.reveal(when="next-1")} L'altezza divide il triangolo in due parti. Nota come
i [due pezzi mancanti nel rettangolo](target:gap) hanno esattamente la stessa area delle
due parti del triangolo. Questo significa che il rettangolo è grande
[[il doppio del|il triplo del|esattamente come il]] triangolo.

{.reveal(when="blank-0")} Possiamo facilmente calcolare l'area del rettangolo, quindi
l'area di un triangolo deve valere la metà:

{.text-center.reveal(when="blank-0")} `A = 1/2 ×` [{.step-target.pill.red} base](target:base)
`×` [{.step-target.pill.blue} altezza](target:height)
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
      path.blue.reveal(x="segment(c,d)" label="altezza" when="next-0" delay="1000" target="height")
      path.blue.reveal(x="angle(c,d,b).sup" when="next-0" delay="1000" target="height")
      path.red.reveal(x="segment(a,b)" label="base" when="next-0" delay="1000" target="base")

:::

---
> id: altitudes

Per calcolare l'area di un triangolo, puoi scegliere uno qualsiasi dei tre lati come
__base__, e poi trovare l'__altezza__ corrispondente, che è la linea
[[perpendicolare|parallela]] alla base e passa per il vertice opposto.

{.reveal(when="blank-0")} Ogni triangolo possiede [[tre]] altezze.

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
Come per [mediane](gloss:triangle-median), [assi](gloss:perpendicular-bisector) e [bisettrici](gloss:angle-bisector), le tre altezze di un triangolo
si intersecano in un solo punto che si chiama [__ortocentro__](target:center)
del triangolo.

Nei [triangoli acutangoli](gloss:acute-triangle), l'ortocentro
[[giace all'interno|giace all'esterno|è un vertice]] del triangolo.

{.reveal(when="blank-0")} Nei [triangoli ottusangoli](gloss:obtuse-triangle),
l'ortocentro [[giace all'esterno|giace all'interno|è un vertice]] del triangolo.

{.reveal(when="blank-1")} Nei [triangoli rettangoli](gloss:right-triangle),
l'ortocentro [[è un vertice|giace all'interno|giace all'esterno]] del triangolo. Due delle
altezze sono di fatto lati del triangolo.
:::

---

## Segmento che collega i punti medi e similitudine

> section: midsegments
> sectionStatus: dev
> id: midsegments
> goals: s0 s1 s2

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
Consideriamo ora i segmenti che collegano
i punti medi di due lati di un triangolo. Disegna i segmenti che collegano i punti medi dei lati di questo triangolo.

{.reveal(when="s0 s1 s2")} Come puoi vedere, i segmenti dividono il triangolo
in [quattro triangoli più piccoli](target:triangles).

{.reveal(when="s0 s1 s2")} Risulta che tutti questi triangoli più piccoli sono
[[congruenti|sovrapposti|di dimensioni diverse]] – anche quello a testa in giù al
centro. _{span.reveal(when="blank-0")} Sono anche tutti [[simili|congruenti]]
al [triangolo originale](target:large),_ _{span.reveal(when="blank-1")}con
un fattore di riduzione di `1/2`._

{.reveal(when="blank-1")} Questo ci permette di dedurre alcuni fatti importanti a proposito
dei segmenti che collegano i punti medi di un triangolo:

::: .theorem.reveal(when="blank-1")
__Teorema dei segmenti che collegano i punti medi__
Il segmento che collega i punti medi dei lati di un trangolo è parallelo al terzo lato, e misura esattamente la metà
di esso.
:::
:::

---

{.todo} COMING SOON – Maggiori informazioni sui segmenti che collegano i punti medi e sulla loro relazione con la similitudine e la proporzionalità.

---

## Triangoli congruenti

> id: sss-construction
> section: congruence
> goals: draw-base draw-c1 draw-c2

Ora che possiamo verificare se tre lati possono formare un triangolo, ragioniamo su come
potremmo effettivamente _costruire_ un triangolo con questi lati.

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line|circle"): svg

::: column.grow
{.task} Disegna un triangolo con lati di lunghezza 4cm, 5cm e 6cm.

{.r} Nel riquadro, disegna il lato più lungo del triangolo, che misura
__6cm__. _{span.reveal(when="draw-base")} Ora abbiamo già [due](target:base)
dei tre vertici del triangolo – la sfida consiste nel trovare l'ultimo vertice.
*{button.next-step} Continua*_

{.reveal(when="next-0")} Poi, disegna un cerchio di raggio __4cm__ centrato in uno dei
vertici, _{span.reveal(when="draw-c1")} e un cerchio di raggio __5cm__ centrato
nell'altro vertice._

{.reveal(when="draw-c2")} Il terzo vertice del triangolo è
[[l'intersezione|il centro|il raggio]] delle due circonferenze. _{span.reveal(when="blank-0")}
Ora possiamo semplicemente collegarli per formare un triangolo._

{.reveal(when="blank-0" delay="3000")} I cerchi in realtà si intersecano
[[due|tre|infinite]] volte: _{span.reveal(when="blank-1")}una volta
[in alto](target:top) e una volta [in basso](target:bottom). Possiamo scegliere
entrambe queste intersezioni: i due triangoli risultanti sono
[[congruenti|equilaterali|perpendicolari]]._
:::

---
> id: congruence

### Criteri di congruenza

Ma è possibile costruire un triangolo _diverso_ con gli stessi tre lati?

Prima abbiamo costruito due triangoli, ma erano congruenti. In realtà, tutti
i triangoli che hanno tre lati lunghi ugual sono congruenti. Questo è il
 [__Criterio di congruenza LLL__](gloss:triangle-sss) per i triangoli
(“Lato-Lato-Lato”).

Conosciamo quindi per ora due criteri per i triangoli: “AA” implica che due triangoli sono
[[simili|congruenti|transformazioni]] e “LLL” implica che due triangoli sono
[[congruenti|simili|uguali]]. Ci sono alcui altri criteri di congruenza:

---
> id: congruence-1

::: .theorem
Due triangoli sono congruenti se uno di questi criteri è soddisfatto:

    .row.padded-thin
      div(style="width: 150px")
        .text-center: strong LLL
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="segment(a,b)")
          path.red(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption Tutti i lati sono congruenti.

      div(style="width: 150px")
        .text-center: strong LAL
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption Due lati e l'angolo #[strong incluso] sono congruenti.

      div(style="width: 150px")
        .text-center: strong ALA
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(c,a,b)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption Due angoli e il lato #[strong incluso] sono congruenti.

      div(style="width: 150px")
        .text-center: strong AAL
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(b,c,a)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption Due angoli e uno dei lati non inclusi.
:::

---
> id: cpoct

Puoi considerare questi criteri come "scorciatoie": per verificare se due triangoli sono
congruenti, devi solo verificare una delle condizioni descritte sopra.

Una volta che _sai_ che due triangoli sono congruenti, sai che _tutti_ i loro
lati e angoli corrispondenti sono congruenti.

È interessante notare che tutti i criteri consistono in [[tre]] diversi
valori (lati oppure angoli)!

---
> id: contruction

### Costruzione di triangoli

All'inizio di questo capitolo, abbiamo visto come costruire un triangolo se ne conosciamo
i tre lati. In modo simile, si può costruire un triangolo conoscendo le tre informazioni date da ognuno
dei criteri di congruenza.

::: tab
#### LAL

::: column(width=300)
{.todo} COMING SOON – Animazione
::: column.grow
{.task} Disegna un triangolo con lati 5cm e 3cm, e un angolo incluso
di ampiazza 40°.

Come prima, iniziamo disagnando uno dei lati del triangolo.

Poi, usando un goniometro, disegnamo un angolo di 40° in uno dei due vertici.
Indichiamo un punto sulla semiretta che delimita l'angolo

Possiamo ora connetterlo al vertice per formare il secondo lato del
triangolo.

Sappiamo che questo lato deve misurare 3cm, quindi misuriamo la distanza con una
riga e troviamo il terzo vertice del triangolo.

Infine, possiamo collegare gli ultimi due vertici per completare il triangolo.
:::

Naturalmente, avremmo potuto cominciare dal lato lungo 3cm, o disegnare
l'angolo di 40° nell'altro vertice. Tuttavia in tutti questi casi, i triangoli
risultanti sarebbero stati congruenti a questo.

::: tab
#### ALA

::: column(width=300)
{.todo} COMING SOON – Animazione
::: column.grow
{.task} Disegna un trangolo con angoli di  70° e 50° e un angolo incluso
di lunghezza 5cm.

Iniziamo dal primo lato, usando una riga per misurare 5cm.

Ora usiamo un goniometro per misurare un angolo di 70° in uno degli
estremi del lato, e un angolo di 50° nell'altro estremo. (Non importa
in che ordine - i triangoli risultanti saranno congruenti.)

Collegando i punti sulla semiretta che delimita l'angolo ai vertici già trovati, il triangolo sarà completo.
:::

::: tab
#### AAL

::: column(width=300)
{.todo} COMING SOON – Animazione
::: column.grow
{.task} Disegna un triangolo con angoli di  40° e 50°, e lato incluso
di lunghezza 5cm.

Di nuovo, iniziamo tracciando il primo lato del triangolo, che misura 5cm.

Usiamo nuovamente il goniometro per misurare un angolo di 40° in uno dei vertici, e
disegnamo la retta che contiene il secondo lato del triangolo. Non sappiamo ancora dove termina questo lato.

Scegliamo un punto qualsiasi su questa retta, facciamo finta che sia il terzo vertice del triangolo e misuriamo un angolo di 50°.

Come puoi vedere non è ancora ciò che vogliamo: il terzo lato non è ancora collegato
con il vertice A. Per risolvere il problema, dobbiamo solo spostarlo: tracciamo una parallela
passante per il vertice A. (Hai già imparato come tracciare una parallela in un a [corso precedente](/course/euclidean-geometry/geometric-construction).)

Ora i due angoli in alto sono angoli corrispondenti, quindi devono essere congruenti
e misurano entrambi 50°. Possiamo eliminare la linea incorretta e otterremo il nostro triangolo AAL.
:::

::: tab
#### LLA
La costruzione LLA è leggermente differente. Avrai forse notato che “LLA”
non era nella lista dei criteri di congruenza citati sopra, quindi paragonare LLA in due
triangoli non è sufficiente per confermare che essi sono congruenti. Ecco perché:

::: column(width=300)
{.todo} COMING SOON – Animazione
::: column.grow
{.task} Disegna un triangolo con lati di 4cm e 5cm, e un angolo non incluso
di 50°.

Come sempre, cominciamo disegnando un primo lato di lunghezza 5cm.

Poi, disegnamo un angolo di 50° in uno dei due vertici e disegnamo la retta che contiene
il secondo lato del triangolo. Tuttavia, non sappiamo ancora dove terminerà questo lato.

Il terzo lato deve misurare 4cm. Usando un compasso, possiamo disegnare un cerchio di
raggio 4cm con centro nell'altro vertice del lato iniziale.

Il vertice finale del triangolo è l'intersezionetra il cerchio e
la seconda linea. Tuttavia, in questo caso, ci sono due intersezioni!

Questi due triangoli chiaramente non sono congruenti. Questo significa che ci sono
due triangoli diversi con lati di 4cm e 5cm, e un angolo non incluso
di 50°. LLA non è una condizione sufficiente per confermare che due triangoli sono congruenti.
:::
:::

---

## Il teorema di Pitagora

> id: pythagoras
> section: pythagoras

Siamo ora arrivati ad un punto importante in geometria – essere in grado di formulare e
capire uno dei più famosi [teoremi](gloss:theorem) di tutta la
matematica: __Il teorema di Pitagora__. Prende il suo nome dal matematico greco
 [Pitagora di Samo](bio:pythagoras).

::: .theorem
::: column.grow
__Il teorema di Pitagora__
In ogni triangolo rettangolo, il quadrato della lunghezza
dell'[__ipotenusa__](target:hypot) (il lato che è opposto all'angolo retto) è
pari alla somma dei quadrati degli altri due lati. In altre parole,

{.text-center} _{span.circled.green}`a^2`_ + _{span.circled.blue}`b^2`_ =
_{span.circled.yellow}`c^2`_

_Anche l'opposto è vero: se i tre lati di un triangolo soddisfano
a*{sup}2* + b*{sup}2* = c*{sup}2*, allora il triangolo dev'essere [[rettangolo|acuto|ottuso]]._
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
Gli angoli retti si trovano ovunque, ecco perché il teorema di Pitagora è così utile.

Qui puoi vedere una scala che misura __{.m-red}6m__  appoggiata contro un muro. Il piede
della scala dista __{.m-blue}1m__ dal muro. Che altezza ragguinge la scala
sul muro?

Nota che la scala, la parete e il pavimento formano
un triangolo rettangolo. Usando il teorema di Pitagora otteniamo


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

{.reveal(when="blank-0")} Ogni volta che ti trovi di fronte ad un triangolo rettangolo di cui
conosci due lati, Pitagora ti può aiutare a trovare il terzo.

---
> id: pythagoras-proof

### Dimostrare il teorema di Pitagora

Il teorema di pitagora era noto agli antichi Babilonesi, Sumeri,
Indiani and Cinesi – ma Pitagora potrebbe essere stato il primo a trovarne una dimostrazione matematica formale.

Ci sono in realtà molti modi diversi di dimostrare il teorema di Pitagora. Puoi vedere
qui tre esempi nei quali vengono usate tre diverse strategie:

::: tab.proof-1

#### Ridisposizione _{span.check(when="blank-0 blank-1")}_

::: column.grow

Dai un'occhiata alla figura a destra. Il lato del quadrato misura _a_ + _b_,
e contiene [quattro triangoli rettangoli](target:triangle), e un
[quadrato più piccolo](target:square) di area [[<msup><mi>c</mi><mn>2</mn></msup>|_a_ – _b_|_a_ + _b_]].

{.reveal(when="blank-0")} Ora ridisponiamo i triangoli nel quadrato. La
figura risultante contiene sempre i quatrro triangoli rettangoli, oltre a due quatrati
di area [[<msup><mi>a</mi><mn>2</mn></msup> e <msup><mi>b</mi><mn>2</mn></msup>|<msup><mi>c</mi><mn>2</mn></msup>|<msup><mfenced><mi>a</mi><mo>+</mo><mi>b</mi></mfenced><mn>2</mn></msup>]].

{.reveal(when="blank-1")} Paragonando l'area in rosso
_{span.hover-target}prima_ e _{span.hover-target}dopo_ la ridisposizione, vediamo
che

{.text-center.reveal(when="blank-1")} `a^2 + b^2 = c^2`.

{.reveal(when="blank-1")} Questa è la dimostrazione originale che
[Pitagora](bio:pythagoras) inventò. _{span.qed}_

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

Qui abbiamo la stessa figura di prima, ma questa volta useremo l'_algebra_ anziché
la _ridisposizione_ per dimostrare il teorema di Pitagora.

Il quadrato grande ha lato `a + b` e area
[[(_a_ + _b_)<sup>2</sup>|_a_<sup>2</sup> + _b_<sup>2</sup>|_c_<sup>2</sup>]].

{.reveal(when="blank-2")} È composto da [quattro triangoli](target:triangle), ognuno
di area  [[<mfrac><mn>1</mn><mn>2</mn></mfrac>_ab_|(_a_ × _b_)<sup>2</sup>|<mfrac><mn>1</mn><mn>2</mn></mfrac>(_a_ + _b_)]],
e [un quadrato](target:square) di area [[_c_<sup>2</sup>|(_a_ + _b_)<sup>2</sup>|_a_ × _b_]].

{.reveal(when="blank-3 blank-4")} Combinando queste informazioni, otteniamo

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

{.reveal(when="blank-3 blank-4")} E, ancora una volta, otteniamo il teorema di Pitagora.
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

#### Triangoli simili _{span.check(when="next-0 next-1 next-2 blank-5")}_

::: column.grow

{.r} Qui puoi vedere un altro triangolo rettangolo. Se tracciamo l'altezza relativa all'ipotenusa, essa dividerà il triangolo in due triangoli più piccoli.
Dividerà anche l'ipotenusa _c_ in [due parti più piccole](target:hypotenuse)
che chiameremo [{.step-target.i.pill.blue}x](target:x) e
[{.step-target.i.pill.green}y](target:y).
_{span.next-step} Continua_

{.r.reveal(when="next-0")} Separiamo ora i due triangoli più piccoli, per chiarire
meglio cos'hanno in comune…
_{span.next-step} Continua_

{.reveal(when="next-1")} Entrambi i triangoli più piccoli [hanno un angolo in comune](target:angle)
con il triangolo originale. Hanno anche [un angolo retto](target:right).
Secondo il criterio AA, tutti e tre i triangoli devono essere [[simili|congruenti|rettangoli]].

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

{.reveal(when="blank-5")} Ora possiamo usare le equazioni che già conosciamo per i
poligoni simili:

    table.proof-table.reveal(when="blank-5")
      tr
        td
          <p class="text-center"><mrow class="step-target pill blue" data-to="xa"><mfrac><mi>x</mi><mi>a</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill red" data-to="ac"><mfrac><mi>a</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill blue" data-to="x">x</mi><mo>=</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>c</mi></mfra></p>
        td
          <p class="text-center"><mrow class="step-target pill green" data-to="yb"><mfrac><mi>y</mi><mi>b</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill yellow" data-to="bc"><mfrac><mi>b</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill green" data-to="y">y</mi><mo>=</mo><mfrac><msup><mi>b</mi><mn>2</mn></msup><mi>c</mi></mfra></p>

{.r.reveal(when="blank-5")} _{span.next-step} Continua_

{.reveal(when="next-2")} Ma ricorda che _c_ = [{.step-target.i.pill.blue}x](target:x) +
[{.step-target.i.pill.green}y](target:y). Quindi:

{.text-center.reveal(when="next-2")} `c = a^2/c + b^2/c`

{.text-center.reveal(when="next-2")} `c^2 = a^2 + b^2`

{.reveal(when="next-2")} Ancora una volta, abbiamo dimostrato il teorema di Pitagora! _{span.qed}_

:::

---
> id: pythagoras-2

Molti aspetti della vita di Pitagora sono sconosciuti e nessuna copia originale del suo lavoro
è pervenuta fino a noi. Fondò il culto religioso dei _Pitagorici_, che praticavano una sorta di
 “culto del numero”. Essi credevano che ogni numero avesse il proprio carattere e
avevano una varietà di altre usanze bizzarre.

::: column.grow

Ai Pitagorici vengono attribuite molte scoperte matematiche, inclusa
la scoperta del primo [numero irrazionale](gloss:irrational-numbers), `sqrt(2)`.
I numeri irrazionali non possono essere espressi come semplici frazioni – un concetto che
i Pitagorici trovarono profondamente sconcertante e che cercarono (senza successo) di nascondere!

::: column(width=400)

    x-img(src="images/pythagoreans.jpg" width=400 height=200 lightbox)

{.caption} “Pitagorici che celebrano il sorgere del sole” by Fyodor Bronnikov

:::

---
> id: distance-formula

### Calcolo delle distanze

Una delle applicazioni più importanti del teorema di Pitagora è il calcolo delle distanze.

::: column.grow
{.r} A destra puoi vedere due punti in un sistema di coordinate. Potremmo
misurare la loro distanza, ma la risposta non sarebbe perticolarmente accurata.
Proviamo invece ad usare il teorema di Pitagora.
_{span.next-step} Continua_

{.reveal(when="next-0")} Possiamo facilmente trovare la [distanza orizzontale](target:dx)
lungo l'asse _x_, e la [distanza verticale](target:dy) lungo l'asse _y_.
Se disegnamo queste due linee, otteniamo un [triangolo rettangolo](target:triangle).

{.reveal(when="next-0")} Usando Pitagora,

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

Questo metodo funziona per_ogni_ coppia di punti:

::: .theorem
__La formula per la distanza__
Dati due punti con coordinate  (`x_1`,`y_1`) e (`x_2`,`y_2`),
la distanza tra di essi è

{.text-center} `d^2=(x_2−x_1)^2+(y_2−y_1)^2`

{.text-center} `d=sqrt((x_2−x_1)^2+(y_2−y_1)^2)`
:::

---
> id: pythagorean-triples

### Terne pitagoriche

Spostando i [vertici del triangolo](->#tri-move) nel passaggio precedente,
avrai forse notato che nella maggior parte dei casi, la lunghezza dell'ipotenusa _d_
era [[un numero decimale|una frazione|un numero intero]].
_{span.reveal(when="blank-0")}Tuttavia, ci sono alcuni esempi di triangoli rettangoli
in cui la lunghezza di *tutti e tre i lati* risulta essere un *numero intero*._

---
> id: pythagorean-triples-1

::: column.grow
Un esempio famoso è il triangolo 3-4-5 . Siccome `3^2 + 4^2 = 5^2`, ogni triangolo
con lati di lunghezza 3, 4 e 5 è rettangolo.

Gli antichi Egizi non conoscevano il teorema di Pitagora, ma conoscevano
il triangolo 3-4-5 . Per costruire le piramidi, usavano corde annodate con lunghezze 3, 4 e 5 per formare angoli perfettamente retti.
::: column(width=400)

    img(src="images/egypt.png" width=400 height=220)

:::

Tre numeri naturali come questi formano una [__terna pitagorica__](gloss:pythagorean-triple).
(3, 4, 5) è un esempio di terna pitagorica. Se moltiplichiamo ogni numero
per 2, otteniamo un'altra terna pitagorica: (6, 8, [[10]]).

---
> id: pythagorean-triples-grid
> goals: p0 p1 p2 p3 p4 p5

Possiamo rappresentare queste terne con dei punti in un sistema di coordinate. Se la
terna pitagorica è corretta, la distanza tra l'origine e il punto in questione dev'essere
un numero intero. Usando il sistema di coordinate sotto, sapresti trovare altre terne pitagoriche?

    figure: x-geopad.r.no-background(width=450 height=450 x-axis="0,16.5,1" y-axis="0,16.5,1" grid axes padding="10 10 25 25" snap)
      svg
        circle.move.pulsate(cx=4 cy=10 name="a")
        path.thick(x="polygon(point(0,0),a,point(a.x,0))")
      .label.var(style="left:${26+12.5*a.x}px; top:425px") ${a.x}
      .label.var(style="left:${26+25*a.x}px; top:${425-12.5*a.y}px") ${a.y}
      .label.var(style="left:${26+12.5*a.x}px; top:${425-12.5*a.y}px") ${round(a.length,2)}

{.reveal(when="p0 p1 p2 p3 p4 p5")} Noti una regolarità nella distribuzione di questi punti?

----

## Triangoli isosceli e equilateri

> id: isosceles
> section: isosceles-and-equilateral
> sectionStatus: dev

Oltre ai triangoli rettangoli, ci sono alcuni altri tipi di triangoli con
proprietà interessanti. In questo capitolo ne vedremo alcuni.

### Triangoli isosceli

Diciamo che un triangolo è [__isoscele__](gloss:isosceles-triangle) se ha
due lati congruenti. Questi lati congruenti si dicono __lati obliqui__ del triangolo, mentre il terzo lato è la __base__.

{.todo} COMING SOON – pons asinorum
Proof by constructing angle bisector and using SAS result.

{.todo} COMING SOON – Trova l'altezza di un triangolo isoscele usando Pitagora

---
> id: equilateral

### Triangoli equilateri

Un triangolo si dice [__equilatero__](todo:equilateral-triangle) se tutti i suoi
lati hanno la stessa lunghezza. Abbiamo [già visto](/course/euclidean-geometry/geometric-construction) come costruire un
triangolo equilatero usando riga e compasso.

{.todo} COMING SOON – Ampiezza degli angoli di un triangolo equilatero

{.todo} COMING SOON – Area di un triangolo equilatero

----

## Trigonometria

> id: trigonometry
> section: trigonometry

Abbiamo per ora studiato le relazioni tra gli __angoli__ di un triangolo (ad
esempio il fatto che la loro somma è sempre 180°) e le relazioni tra i __lati__ di un triangolo
(ad esempio Pitagora). Ma manca un _collegamento_ tra l'ampiezza degli angoli e
la misura dei lati.

Ad esempio, se conosciamo tutti e tre i lati di un triangolo, come troviamo l'ampiezza
dei suoi angoli - senza disegnare il triangolo e misurarli con un goniometro?
A questo punto entra in gioco la __trigonometria__ !

    figure: img(src="images/trig-om-nom.jpg" width=200 height=200)

---
> id: trigonometry-1

::: column.grow
Immagina di avere un triangolo rettangolo di cui conosciamo anche uno degli altri
due angoli, __{.m-red}α__. Sappiamo già che il lato più lungo è chiamato
[__{.m-yellow}ipotenusa__](target:hyp). Gli altri due lati sono abitualmente chiamati il
[__{.m-green}cateto adiacente__](target:adj) (che è vicino all'angolo __{.m-red}α__) e
il [__{.m-blue}cateto opposto__](target:opp) (che è opposto all'angolo __{.m-red}α__).
::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="ipotenusa" target="hyp")
      path.blue(x="segment(b,c)" label="cateto opposto" target="opp")
      path.green(x="segment(a,c)" label="cateto adiacente" target="adj")

:::

Ci sono molti triangoli diversi che possiedono gli angoli __{.m-red}α__ e 90°, ma
secondo il [criterio AA](gloss:triangle-aa) sappiamo che sono tutti
[[simili|congruenti]]:

    figure: img(src="images/triangles.svg" width=600 height=240)

---
> id: trig-functions

Dato che tutti questi triangoli sono simili, sappiamo che i loro lati sono
proporzionali. In particolare, i rapporti seguenti sono gli stessi per tutti questi triangoli:

    p.text-center
      mfrac
        mrow: mtext.m-blue.b cateto opposto
        mrow: mtext.m-yellow.b ipotenusa
      span.space
      mfrac
        mrow: mtext.m-green.b cateto adiacente
        mrow: mtext.m-yellow.b ipotenusa
      span.space
      mfrac
        mrow: mtext.m-blue.b cateto opposto
        mrow: mtext.m-green.b cateto adiacente

Proviamo a riassumere: abbiamo scelto un certo valore per __{.m-red}α__, e
abbiamo ottenuto un sacco di triangoli rettangoli simili. Tutti questi triangoli hanno lo stesso
rapporto tra i lati. Siccome __{.m-red}α__ era la nostra unica variabile, dev'esserci
una relazione tra __{.m-red}α__ e questi rapporti.

Queste relazioni sono le __funzioni trigonometriche__ – e ce ne solo tre:

::: .theorem
Le tre funzioni trigonometriche sono relazioni tra gli angoli e il rapportotra i lati di un triangolo rettangolo. Ognuna di esse ha un nome e un'abbreviazione:

::: column.grow

    ul
      li.display
        strong seno:
        .space
        mtext sin
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b cateto opposto
          mrow: mtext.m-yellow.b ipotenusa
      li.display
        strong coseno:
        .space
        mtext cos
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-green.b cateto adiacente
          mrow: mtext.m-yellow.b ipotenusa
      li.display
        strong tangente:
        .space
        mtext tan
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b cateto opposto
          mrow: mtext.m-green.b cateto adiacente

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="ipotenusa")
      path.blue(x="segment(b,c)" label="cateto opposto")
      path.green(x="segment(a,c)" label="cateto adiacente")

:::
:::

---
> id: trig-functions-1

{.todo} COMING SOON – Approfondimento di trigonometria

---
> id: inverse-trig

### Funzioni trigonometriche inverse

{.todo} COMING SOON – Funzioni inverse

---

## Teoremi del seno e del coseno

> section: sine-cosine-rule
> id: sine-cosine-rule

Finora, tutto ciò che abbiamo imparato sulla trigonometria vale solo per i triangoli rettangoli.
 Ma la maggior parte dei triangoli non sono rettangoli e ci sono due importanti risultati che valgono
per qualsiasi triangolo.

::: column.grow
::: .theorem
__Teorema del seno__
In un triangolo con lati _a_, _b_ e _c_, e angoli _A_, _B_ e _C_,

{.text-center} `(sin(a))/a = (sin(b))/b = (sin(c))/c`
:::

::: column.grow
::: .theorem
__Teorema del coseno__
In un triangolo con lati _a_, _b_ e _c_, e angoli _A_, _B_ e _C_,

{.text-center} `c^2 = a^2 + b^2 - 2ab cos(C)`
`b^2 = c^2 + a^2 - 2ca cos(B)`
`a^2 = b^2 + c^2 - 2bc cos(A)`
:::

:::

---
> id: trigonometry-4

{.todo} COMING SOON – Dimostrazione, esempi e applicazioni

---
> id: mountains

### La Grande indagine trigonometrica

Ti ricordi la ricerca della più alta montagna al Mondo vista nell'[introduzione](/course/triangles/introduction)? Con la trigonometria, abbiamo finalmente
i mezzi per trovarla!

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
        path.yellow(x="segment(x,y)" target="right" label="altezza")

Gli agrimensori in India misurarono l'angolo di inclinazione della cima della montagna da [due
posizioni diverse](target:points), a _{span.pill.step-target.yellow(data-to="base")}5km di distanza_.
I risultati erano _{span.pill.step-target.red(data-to="ang")}23°_ e
_{span.pill.step-target.blue(data-to="ang1")}29°_.

Siccome l'_{span.pill.step-target.green(data-to="a")}angolo α_ è un [angolo
supplementare](gloss:supplementary-angles), sappiamo che misurerà [[151]]°.
_{span.reveal(when="blank-0")}Ora possiamo sfruttare la somma degli angoli interni di un
triangolo per calcolare che *{span.pill.step-target(data-to="b")}l'angolo β* misura [[6]]°._

{.reveal(when="blank-1")} Ora conosciamo [tutti e tre gli angoli](target:angles) del
triangolo, e anche _{span.pill.step-target.yellow(data-to="base")}uno dei
lati_. Questo basta per usare il [[teorema del seno|teorema del coseno]] per trovare la distanza
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

{.reveal(when="blank-3 blank-4" delay=2000)} Resta un ultimo pasaaggio: osserviamo ora
il [grande triangolo rettangolo](target:right). Conosciamo già la
lunghezza dell'ipotenusa, ma cio che ci serve è il cateto [[opposto|adiacente]]. _{span.reveal(when="blank-5")}Possiamo trovarlo usando la definizione di
*sin*:_

    table.eqn-system
      tr.reveal(when="blank-5" delay=1000)
        td
          mo sin
          mn.pill.step-target.red(data-to="ang") 23°
        td
          mo =
          mfrac
            mrow.md [[altezza|23.2]]
            mrow.md [[23.2|altezza]]
      tr.reveal(when="blank-6 blank-7")
        td: mtext altezza
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

{.reveal(when="blank-6 blank-7" delay=2000)} E questo risultato si avvicina molto alla
vera altezza dell'Everest, la più alta montagna del mondo: 8,848m.
:::

---
> id: mountains-1

Questa spiegazione è una grande semplificazione dello straordinario lavoro fatto dai
matematici e dai geografi che hanno lavorato sulla Grande indagine trigonometrica. Essi
iniziarono a livello del mare sulla spiaggia e le misure si estesero per migliaia di chilometri, costruirono torri di osservazione attraverso tutto il paese e tennero anche in
considerazione la curvatura della terra.

    figure: x-img(src="images/himalaya.jpg" width=760 height=320)
