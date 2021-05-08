# Cerchi e Pi

## introduzione

> section: introduction
> id: intro
> trailer: tBJUNvCBkLo
> color: "#5A49C9"
> level: Intermediate
> next: graph-theory
> translated: auto

::: column.grow

Finché sono esistiti gli esseri umani, abbiamo guardato verso il cielo e abbiamo cercato di spiegare la vita sulla Terra usando il movimento di stelle, pianeti e luna.

Gli antichi astronomi greci furono i primi a scoprire che tutti gli oggetti celesti si muovono su percorsi regolari, chiamati __orbite__ . Credevano che queste orbite fossero sempre circolari. Dopotutto, i cerchi sono il “più perfetto” di tutte le forme: simmetrici in ogni direzione, e quindi una scelta adatta per l'ordine sottostante del nostro universo.

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption} La Terra è al centro _dell'universo tolemaico_ .

:::

---
> id: radius
> goals: compass

Ogni punto su un [__cerchio__](gloss:circle) ha la stessa distanza dal suo centro. Ciò significa che possono essere disegnati usando una [bussola](gloss:compass) :

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

{.reveal(when="compass")} Esistono tre importanti misurazioni relative ai cerchi che devi conoscere:

* {.reveal(when="compass" delay="1000")} Il [{.pill.red.b} il raggio](target:r) è la distanza dal centro di un cerchio al suo bordo esterno.
* {.reveal(when="compass" delay="4000")} Il [{.pill.blue.b} il diametro](target:d) è la distanza tra due punti opposti su un cerchio. Attraversa il suo centro e la sua lunghezza è [[due volte | metà | lo stesso]] del raggio.
* {.reveal(when="blank-0")} Il [{.pill.green.b} circonferenza](target:c) (o perimetro) è la distanza attorno a un cerchio.

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

Una proprietà importante dei cerchi è che tutti i cerchi sono [simili](gloss:similar) . Puoi dimostrarlo mostrando come è possibile abbinare tutte le cerchie usando semplicemente [traduzioni](gloss:translation) e [dilatazioni](gloss:dilation) :

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

Potresti ricordare che, per poligoni simili, il rapporto tra i lati corrispondenti è sempre costante. Qualcosa di simile funziona per i cerchi: il rapporto tra la [circonferenza](gloss:circle-circumference) e il [diametro](gloss:circle-diameter) è uguale per _tutti i cerchi_ . È sempre 3.14159 ... - un numero misterioso chiamato [__Pi__](gloss:pi) , che è spesso scritto come la lettera greca _π_ per "p". Pi ha infinite cifre decimali che vanno avanti per sempre senza alcun modello specifico:

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

Ecco una ruota con diametro 1. Mentre “srotoli” la circonferenza, puoi vedere che la sua lunghezza è esattamente [[`pi`|`2 * pi`| 3]] :

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

Per un cerchio con diametro _d_ , la circonferenza è `C = π × d` . Allo stesso modo, per un cerchio con [raggio](gloss:circle-radius) _r_ , la circonferenza è

{.text-center}`C =` [[`2 π r`|`π r`|`π r^2`]] .

---
> id: nature

I cerchi sono perfettamente simmetrici e non hanno "punti deboli" come gli angoli di un poligono. Questo è uno dei motivi per cui possono essere trovati ovunque in natura:

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption} Fiori

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

{.caption} pianeti

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

{.caption} Alberi

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

{.caption} Frutta

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

{.caption} Bolle di sapone

:::

{.r} E ci sono molti altri esempi: dagli arcobaleni alle increspature dell'acqua. Ti viene in mente altro? [Continua](btn:next)

---
> id: max-area
> goals: area-circle

::: column.grow

Si scopre anche che un cerchio è la forma con l'area più grande per una determinata circonferenza. Ad esempio, se hai una corda di lunghezza 100 \ m, puoi usarla per racchiudere lo spazio più grande se formi un cerchio (piuttosto che altre forme come un rettangolo o un triangolo).

In natura, oggetti come gocce d'acqua o bolle d'aria possono _risparmiare energia_ diventando circolari o sferici e riducendo la loro superficie.

::: column(width=320)

    x-select.segmented
      div(data-value="0") Triangle
      div(data-value="1") Square
      div(data-value="2") Pentagon
      div(data-value="3") Circle
    svg(width=320 height=200)

{.caption} _Circonferenza_ = __{.m-green} 100__ , _Area_ = __${area}__

:::

---
> id: area
> goals: slider

### L'area di un cerchio

Ma come calcoliamo effettivamente l'area di un cerchio? Proviamo la stessa tecnica che abbiamo usato per [trovare l'area dei quadrilateri](/course/polyhedra/quadrilaterals) : tagliamo la forma in più parti diverse e quindi riordiniamo in una forma diversa di cui già conosciamo l'area (ad esempio un rettangolo o un triangolo).

L'unica differenza è che, poiché i cerchi sono curvi, dobbiamo usare alcune approssimazioni:

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

Qui puoi vedere un cerchio diviso in ${toWord(n1)} cunei. Spostare il dispositivo di scorrimento, per allineare i cunei in una riga.

{.reveal(when="slider")} Se aumentiamo il numero di zeppe a ${n1}{n1|6|6,30,2} , questa forma inizia ad apparire sempre più come un [[rettangolo | cerchio | piazza]] .

{.reveal(when="blank-0")} L'altezza del rettangolo è uguale al [[raggio | circonferenza | diametro]] del cerchio. _{span.reveal(when="blank-1")} La larghezza del rettangolo è uguale alla [[metà della circonferenza | la circonferenza | il doppio del raggio]] del cerchio._ _{span.reveal(when="blank-2")} (Nota come metà delle zeppe sono rivolte verso il basso e metà di esse rivolte verso l'alto.)_

{.reveal(when="blank-2" delay=1000)} Pertanto l'area totale del rettangolo è approssimativamente `A = π r^2` .

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

Qui puoi vedere un cerchio diviso in ${toWord(n)} anelli. Come in precedenza, è possibile spostare il dispositivo di scorrimento per "sbloccare" gli anelli.

{.reveal(when="slider")} Se aumentiamo il numero di squilli a ${n2}{n2|4|2,12,1} , questa forma inizia ad apparire sempre più come un [[triangolo | rettangolo | trapezio]] .

{.reveal(when="blank-0")} L'altezza del triangolo è uguale al [[raggio | diametro | circonferenza]] del cerchio. _{span.reveal(when="blank-1")} La base del triangolo è uguale alla [[circonferenza | il doppio del diametro]] del cerchio._ _{span.reveal(when="blank-2")} Pertanto l'area totale del triangolo è approssimativamente_

{.text-center.reveal(when="blank-2")}`A = 1/2 "base" × "height" = π r^2` .

:::

---
> id: area-2

Se potessimo usare infinitamente molti anelli o zeppe, le approssimazioni sopra sarebbero perfette - ed entrambi ci darebbero la stessa formula per l'area di un cerchio:

{.text-center.r}`A = π r^2` . [Continua](btn:next)

---
> id: pi-approximations

### Calcolo Pi

Come hai visto sopra, `π = 3.1415926…` non è un numero intero semplice e le sue cifre decimali vanno avanti per sempre, senza ripetizioni. I numeri con questa proprietà sono chiamati [__numeri irrazionali__](gloss:irrational-numbers) e ciò significa che `π` non può essere espresso come una frazione semplice `a/b` .

Significa anche che non possiamo mai scrivere _tutte_ le cifre di Pi - dopo tutto, ce ne sono infinitamente molte. I matematici greci e cinesi antichi calcolavano le prime quattro cifre decimali di Pi approssimando cerchi usando poligoni regolari. Notare come, quando si aggiungono più lati, il poligono inizia a sembrare [[sempre più | Di meno | esattamente]] come un cerchio:

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

Nel 1665, [Isaac Newton](bio:newton) riuscì a calcolare 15 cifre. Oggi possiamo usare potenti computer per calcolare il valore di Pi con una precisione molto maggiore.

Il record attuale è di 31,4 trilioni di cifre. Un libro stampato contenente tutte queste cifre avrebbe uno spessore di circa 400 \ km - questa è l'altezza alla quale la [Stazione Spaziale Internazionale](gloss:iss) orbita attorno alla Terra!

Naturalmente, non è necessario ricordare che molte cifre di Pi. In effetti, la frazione `22/7 = 3.142…` è una grande approssimazione.

:::

---
> id: pi-sequence

Un approccio per il calcolo di Pi sta usando infinite sequenze di numeri. Ecco un esempio che è stato scoperto da [Gottfried Wilhelm Leibniz](bio:leibniz) nel 1676:

{.text-center}`π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} Man mano che calcoliamo sempre più termini di questa serie, seguendo sempre lo stesso modello, il risultato si avvicina sempre di più a Pi.

---
> id: pi-colours
> goals: hover

::: column.grow

Molti matematici credono che Pi abbia una proprietà ancora più curiosa: che sia un __numero normale__ . Ciò significa che le cifre da 0 a 9 appaiono completamente casuali, come se la natura avesse lanciato un dado a 10 facce infinitamente molte volte, per determinare il valore di Pi.

Qui puoi vedere le prime 100 cifre di Pi. Spostati su alcune celle per vedere come sono distribuite le cifre.

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

Se Pi è normale, significa che puoi pensare a _qualsiasi_ stringa di cifre e apparirà da qualche parte nelle sue cifre. Qui puoi cercare le prime un milione di cifre di Pi: contengono il tuo compleanno?

::: .box.f-red.pi-box

#### Un milione di cifre di Pi

    .pi-controls
      | Search for a string of digits:
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---
> id: pi-movies

Potremmo persino convertire un intero libro, come Harry Potter, in una lunga serie di cifre (a = 01, b = 02 e così via). Se Pi è normale, questa stringa apparirà da qualche parte nelle sue cifre - ma ci vorrebbero milioni di anni per calcolare cifre sufficienti per trovarla.

Pi è facile da capire, ma di fondamentale importanza nella scienza e nella matematica. Questo potrebbe essere un motivo per cui Pi è diventato insolitamente popolare nella nostra cultura (almeno, rispetto ad altri argomenti di matematica):

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")
    p.caption Pi is the secret combination for the tablet in “Night at the Museum 2”.

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")
    p.caption Professor Frink (“Simpsons”) silences a room of scientists by saying that Pi equals 3.

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")
    p.caption Spock (“Star Trek”) disables an evil computer by asking it to calculate the last digit of Pi.

:::

---
> id: pi-day

C'è anche un _giorno Pi_ ogni anno, che cade il 14 marzo, perché `pi ≈ 3.14` , o il 22 luglio, perché `pi ≈ 22/7` .

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

---

## Gradi e radianti

> section: radians
> id: degrees
> translated: auto

Finora in geometria, abbiamo sempre misurato gli angoli in [gradi](gloss:degrees) . UN __{.m-red} la__ rotazione del __cerchio completo__ è di [[360]]°, a __{.m-green} il semicerchio__ è di [[180]]°, a __{.m-yellow} il quarto di cerchio__ è di [[90]]° e così via.

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

{.r} Il numero 360 è molto conveniente perché è divisibile per tanti altri numeri: 2, 3, 4, 5, 6, 8, 9, 10, 12, 15 e così via. Ciò significa che molte frazioni di un cerchio sono anche numeri interi. Ma ti sei mai chiesto da dove viene il numero 360? [Continua](btn:next)

---
> id: babylon

::: column.grow

In effetti, i 360 gradi sono uno dei concetti più antichi in matematica che usiamo ancora oggi. Sono stati sviluppati nell'antica Babilonia, oltre 5000 anni fa!

A quel tempo, una delle applicazioni più importanti della matematica era in astronomia. Il _sole_ determina le quattro stagioni, che gli agricoltori devono sapere quando coltivano colture. Allo stesso modo, la _luna_ determina le maree, che era importante per i pescatori. Le persone hanno anche studiato le stelle per predire il futuro o per comunicare con gli dei.

::: column(width=260)

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} Una tavoletta babilonese per il calcolo `sqrt(2)`

:::

---
> id: constellations
> goals: rotate

Gli astronomi hanno notato che le costellazioni visibili in un momento specifico durante la notte si spostavano un po 'ogni giorno - fino a quando, dopo circa 360 giorni, erano tornate al loro punto di partenza. E questo potrebbe essere stato il motivo per cui hanno diviso il cerchio in 360 gradi.

    figure: .constellations
      .label.md Midnight on day ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

Certo, in realtà ci sono 365 giorni in un anno (beh, 365.242199 per l'esattezza), ma i matematici babilonesi hanno lavorato con semplici meridiane e questa approssimazione era perfettamente adeguata.

Funzionava bene anche con il loro attuale sistema di numeri base 60 (da allora `6 xx 60 = 360` ). Questo sistema è il motivo per cui abbiamo ancora 60 secondi in un minuto e 60 minuti in un'ora - anche se la maggior parte delle altre unità sono misurate in [base 10](gloss:base-10) (ad esempio 10 anni in un decennio o 100 anni in un secolo).

::: column.grow

Per molti di noi, misurare gli angoli in gradi è una seconda natura: c'è un video a 360°, gli skateboarder possono tirare 540 e qualcuno che cambia la propria decisione potrebbe girare di 180°.

Ma da un punto di vista matematico, la scelta di 360 è completamente arbitraria. Se vivessimo su Marte, un cerchio potrebbe avere 670° e un anno su Giove ha anche 10.475 giorni.

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} La 540 McFlip, una rotazione di 540°

:::

---
> id: radians

### radianti

Piuttosto che dividere un cerchio in un certo numero di segmenti (come 360 gradi), i matematici spesso preferiscono misurare gli angoli usando la [circonferenza](gloss:circle-circumference) di un [__cerchio unitario__](gloss:unit-circle) (un cerchio con raggio 1).

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

UN [il cerchio completo](action:setState(0)) ha la circonferenza _{x-equation.small(solution="2 π" keys="+ × π" numeric)}_ .

{.reveal(when="eqn-0")} Per un [rotazione del semicerchio_ , la distanza corrispondente lungo la circonferenza è _{x-equation.small(solution="π" keys="+ × π" numeric)}](action:setState(1)).

{.reveal(when="eqn-1")} Per un [rotazione del quarto di cerchio_ , la distanza lungo la circonferenza è _{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}](action:setState(2)).

{.reveal(when="eqn-2")} E così via: questo modo di misurare gli angoli si chiama [__radianti__](gloss:radians) (si potrebbe ricordare questo come "unità di raggio").

:::

---
> id: radians-conversion

Ogni angolo in gradi ha una dimensione equivalente in radianti. La conversione tra i due è molto semplice - proprio come è possibile convertire tra altre unità come metri e chilometri, o Celsius e Fahrenheit:

{.text-center} __{.m-red} 360°__ _{span.space} =_ __{.m-green} 2 _π_ rad__

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left}`=>`_
__{.m-red} 1°__ _{span.space} =_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} RAD__

::: column(width=180)

{.text-center} _{span.rotate.right}`=>`_
__{.m-green} 1 rad__ _{span.space} =_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red}°__

:::

---
> id: radians-table

Puoi scrivere il valore dei radianti sia come multiplo di _π_ , sia come solo un singolo numero decimale. Puoi compilare questa tabella con dimensioni angolari equivalenti in gradi e radianti?

| __{.m-red} gradi__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_ |
| __{.m-green} radianti__ | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2 | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### Distanza percorsa

Puoi pensare ai radianti come alla "distanza percorsa" lungo la circonferenza di un cerchio unitario. Ciò è particolarmente utile quando si lavora con oggetti che si muovono su un percorso circolare.

::: column.grow

Ad esempio, la [Stazione Spaziale Internazionale](gloss:iss) orbita attorno alla Terra una volta ogni 1,5 ore. Ciò significa che la sua __velocità di rotazione__ è [[`(2 pi)/1.5`|`1.5/(2 pi)`|`1.5 * pi`]] radianti all'ora.

{.reveal(when="blank-0")} In un [cerchio unitario](gloss:unit-circle) , la velocità di rotazione è la stessa della velocità _effettiva_ , poiché la lunghezza della circonferenza è la stessa di una rotazione completa in radianti (entrambi sono `2pi` ).

{.reveal(when="blank-0" delay=1000)} Il raggio dell'orbita della ISS è 6800 \ km, il che significa che deve essere la velocità _effettiva_ della ISS [[`(2 pi)/1.5 xx 6800`|`(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")} = 28483 km all'ora._

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

Riesci a vedere che, in questo esempio, i radianti sono un'unità molto più conveniente dei gradi? Una volta che conosciamo la velocità di rotazione, dobbiamo semplicemente moltiplicare per il raggio per ottenere la velocità effettiva.

Ecco un altro esempio: la tua auto ha ruote con raggio di 0,25 \ m. Se stai guidando a una velocità di 20 \ m / s, le ruote della tua auto ruotano a [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] radianti al secondo _{span.reveal(when="blank-0")} (o `80/(2pi) = 13` rotazioni al secondo)._

---
> id: radians-trig

### Trigonometria

Per la maggior parte dei semplici problemi di geometria, gradi e radianti sono completamente intercambiabili: puoi scegliere quale preferisci o una domanda potrebbe dirti in quale unità dare la tua risposta. Tuttavia, una volta che studi [trigonometria](gloss:trigonometry) o [calcolo](gloss:calculus) più avanzati, risulta che i radianti sono molto più convenienti dei gradi.

::: column.grow

La maggior parte dei calcolatori ha un [pulsante speciale](->.button.mode) per passare da gradi a radianti. Le funzioni trigonometriche come [__sin__](gloss:sin) , [__cos__](gloss:cos) e __tan__ prendono gli angoli come input e le loro funzioni inverse __arcsin__ , __arccos__ e __arctan__ restituiscono gli angoli come output. L'impostazione attuale della calcolatrice determina quali unità sono utilizzate per questi angoli.

Prova a usare questo calcolatore per calcolarlo

{.text-center} sin (30°) = [[0,5]] _{span.eqn-gap}_ cos (1°) = [[0.999]]
sin (30 rad) = [[-0.988]] _{span.eqn-gap}_ cos (1 rad) = [[0,54]]

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

L'uso dei radianti ha un vantaggio particolarmente interessante quando si utilizza la funzione Sine. Se `θ` è un angolo molto piccolo (inferiore a 20° o 0,3 rad), quindi `sin(θ) ≈ θ` . Per esempio,

{.text-center} peccato( ${x}{x|0.1|0,0.5,0.05} ) `≈`${sin(x)} ...

{.reveal(when="var-0")} Questa è chiamata __approssimazione dell'angolo piccolo__ e può semplificare notevolmente alcune equazioni contenenti funzioni trigonometriche. Imparerai molto di più su questo in futuro.

---

## Tangenti, Accordi e Archi

> section: tangets-chords-arcs
> id: circle-parts
> translated: auto

Nelle sezioni precedenti, hai appreso i nomi dati a diverse parti di un cerchio - come centro, raggio, diametro e circonferenza. Tuttavia, ci sono molti elementi geometrici correlati a un cerchio, che dovremo risolvere problemi più complessi:

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle(x="point(150,150)" name="x")

      path.teal.fill.reveal(x="sector(x,d1,pi/2.5)" target="sector" when="next-3" label="Sector" label-class="white")
      path.purple.fill.reveal(x="arc(x,b1,pi/2.5)" target="segment" when="next-4" label="Segment")

      path.black(x="circle(x,100)" name="c")

      circle.red(x="c.at(0.5)" name="a1" target="secant")
      circle.red(x="c.at(0.7)" name="a2" target="secant")
      path.red.thick(x="line(a1,a2)" label="Secant" target="secant")

      circle.green.reveal(x="c.at(0.8)" name="b1" target="chord" when="next-0" animation="pop")
      circle.green.reveal(x="c.at(0)" name="b2" target="chord" when="next-0" animation="pop")
      path.green.thick.reveal(x="segment(b1,b2)" label="Chord" target="chord" when="next-0" animation="draw")

      circle.blue.reveal(x="c.at(0.1)" name="c1" target="tangent" when="next-1" animation="pop")
      path.blue.thick.reveal(x="c.tangentAt(0.1)" label="Tangent" target="tangent" when="next-1" animation="draw")

      circle.yellow.reveal(x="c.at(0.2)" name="d1" target="arc" when="next-2" animation="pop")
      circle.yellow.reveal(x="c.at(0.4)" name="d2" target="arc" when="next-2" animation="pop")
      path.yellow.thick.reveal(x="arc(x,d1,pi/2.5)" label="Arc" target="arc" when="next-2" animation="draw")

::: column.grow(parent="right")

* {.r} UN [{.red} secante](target:secant) è una linea che interseca un cerchio in due punti. [Continua](btn:next)
* {.r.reveal(when="next-0")} UN [{.green} l'accordo](target:chord) è un segmento di linea i cui punti finali si trovano sulla circonferenza di un cerchio. [Continua](btn:next)
* {.r.reveal(when="next-1")} UN [{.blue} tangente](target:tangent) è una linea che tocca un cerchio esattamente in un punto. Questo è chiamato il __punto di tangenza__ . [Continua](btn:next)
* {.r.reveal(when="next-2")} Un [{.yellow} l'arco](target:arc) è una sezione della circonferenza di un cerchio. [Continua](btn:next)
* {.r.reveal(when="next-3")} UN [{.teal} il settore](target:sector) è una parte dell'interno di un cerchio, delimitato da un _arco_ e _due raggi_ . [Continua](btn:next)
* {.r.reveal(when="next-4")} Infine, a [{.purple} il segmento](target:segment) è una parte dell'interno di un cerchio, delimitato da un _arco_ e _un accordo_ . [Continua](btn:next)

:::

---
> id: circle-parts-1

In questa sezione, esamineremo la relazione tra tutti questi elementi e dimostreremo i teoremi sulle loro proprietà. Non preoccuparti di memorizzare tutte le definizioni per ora: puoi sempre usare il [glossario](->.footer-link[data-modal=glossarym]) .

---

### tangenti

{.todo} PROSSIMAMENTE!



---

### Chords

{.todo} PROSSIMAMENTE!



---
> id: earth-arc

### Archi e settori

::: column.grow

La maggior parte degli scienziati nell'antica Grecia concordava sul fatto che la Terra fosse una sfera. C'erano molte prove: dalle navi che sparivano dietro l'orizzonte in mare, al movimento circolare delle stelle durante la notte.

Sfortunatamente, nessuno sapeva esattamente _quanto fosse grande la_ Terra - fino al 200 a.C. circa, quando il matematico [Eratostene](bio:eratosthenes) trovò un modo ingegnoso per misurare il raggio terrestre, usando la geometria di base. Tutto ciò di cui abbiamo bisogno è un po 'più di conoscenza su archi e settori di un cerchio.

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
      path.red.thick(x="arc(c,b,angle(b,c,a).rad).minor" label="Arc" target="arc")
      path.purple.thick.transparent(x="arc(c,a,2*pi-angle(b,c,a).rad).major" target="major")

::: column.grow

Come puoi vedere nel diagramma, un [{.red} l'arco](target:arc) fa parte della [[circonferenza | diametro | tangente]] di un cerchio e a [{.yellow} il settore](target:sector) fa parte degli [[interni | raggio | perimetro]] di un cerchio.

::: .reveal(when="blank-0 blank-1")

L'arco tra due punti _A_ e _B_ è spesso scritto come `arc(AB)` . Questa definizione è leggermente ambigua: esiste un [{.purple} secondo arco](target:major) che collega _A_ e _B_ ma fa il contrario.

Il più piccolo dei due archi è chiamato __arco minore__ e quello più grande è chiamato __arco maggiore__ . Se i punti _A_ e _B_ sono esattamente uno di fronte all'altro, entrambi gli archi hanno la stessa lunghezza e sono [[semicerchi | diametri | circonferenze]] .

:::

:::

---
> id: arcs-1

::: column.grow

Per trovare la lunghezza di un arco o l'area di un settore, dobbiamo conoscere l'angolo corrispondente al centro del cerchio: questo è chiamato il [{.blue} angolo centrale](target:angle) .

Notare come l'arco, il settore e l'angolo occupino tutti la _stessa proporzione_ di un cerchio completo. Ad esempio, se il [{.blue} l'angolo centrale](target:angle) è [90°](action:set90Deg()), occupa [[un quarto | metà | un terzo]] di a [{.teal} cerchio completo](target:fangle) .

::: .reveal(when="blank-0")

Ciò significa che il [{.red} anche la lunghezza dell'arco](target:arc) `1/4` del [{.purple} intera circonferenza](target:circ) del cerchio e [{.yellow} area del settore](target:sector) è `1/4` del [{.orange} intera area](target:area) del cerchio.

Possiamo esprimere questa relazione in un'equazione:

{.text-center}`"arc length" / "circumference" = blank("sector area","circle radius","arc area") / "circle area" = "central angle" / blank("360°","180°","90°")`

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

Ora possiamo riorganizzare queste equazioni per trovare la variabile che ci interessa. Ad esempio,

::: column(width=320 parent="padded-thin")

| [ lunghezza dell'arco](pill:red) | = | `"circumference" × c/360` |
| | = | `2 π r × c/360` |
{.eqn-system}

::: column(width=320)

| [ area del settore](pill:yellow) | = | `"circle area" × c/360` |
| | = | `π r^2 × c/360` |
{.eqn-system}

:::

dove _r_ è il raggio del cerchio e _c_ è la dimensione dell'angolo centrale.



---
> id: arcs-rad

Se l'angolo centrale viene misurato in [radianti](gloss:radians) anziché in [gradi](gloss:degrees) , possiamo usare le stesse equazioni, ma dobbiamo sostituire a 360° [[`2 π`|`1/2 π`|`π`]] :

::: .reveal(when="blank-0")

::: column(width=320 parent="padded-thin")

| [ lunghezza dell'arco](pill:red) | = | `2 π r × c/(2π)` |
| | = | `r × c` |
{.eqn-system}

::: column(width=320)

| [ area del settore](pill:yellow) | = | `π r^2 × c/(2π)` |
| | = | `1/2 r^2 c` |
{.eqn-system}

:::

Notare come le equazioni diventano molto più semplici e _π si_ annulla dappertutto. Questo perché, come ricorderete, la [definizione di radianti](/course/circles/radians#radians) è sostanzialmente la lunghezza di un arco in un cerchio con raggio 1.

Ora vediamo come possiamo usare archi e settori per calcolare la circonferenza della Terra. [Continua](btn:next)

:::

---
> id: eratosthenes

Nell'antico Egitto, la città di _Swenet_ era situata lungo il fiume Nilo. Swenet era famosa per un pozzo con una proprietà curiosa: ogni anno c'era un momento in cui la luce del sole raggiungeva il fondo del pozzo, a mezzogiorno del 21 giugno, giorno del _solstizio d'estate_ . In quel preciso momento, il fondo del pozzo era illuminato, ma non i suoi lati, il che significava che il Sole era direttamente sopra il pozzo.

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Gli antichi egizi misuravano le lunghe distanze contando il numero di passi necessari per camminare.

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} Alcune fonti affermano che il "Pozzo di Eratostene" si trovava sull'isola di _Elefantina_ sul fiume Nilo.

:::

Il matematico [Eratostene](bio:eratosthenes) visse ad _Alessandria_ , a circa 800 km a nord di Swenet, dove era direttore della Grande Biblioteca. Nel centro di Alessandria c'era un obelisco, un monumento alto e stretto con una cima a forma di piramide.

Eratostene notò che a mezzogiorno del giorno del solstizio d'estate, l'obelisco gettava un'ombra - il che significa che il sole _non_ era direttamente sopra di esso. Ne dedusse che ciò era dovuto alla curvatura della Terra e si rese conto che poteva essere usato per calcolare la circonferenza del nostro pianeta.

---
> id: eratosthenes-1

::: column.grow

{.r} Qui puoi vedere il pozzo di Swenet e l'obelisco di Alessandria. I raggi del sole cadono direttamente nel pozzo, ma colpiscono l'obelisco in un angolo e proiettano un'ombra. [Continua](btn:next)

::: .reveal(when="next-0")

Eratostene ha misurato che il [{.teal} l'angolo](target:angle1) dell'ombra era di 7,2°. Questo è lo stesso del [{.purple} angolo centrale](target:angle2) del [{.red} arco](target:arc) da Alessandria a Swenet, perché si [[alternano | verticale |]] angoli [[corrispondenti]] .

:::

::: .reveal(when="blank-0")

Ora possiamo usare l'equazione per la lunghezza dell'arco che abbiamo derivato sopra:

{.text-center}`pill("arc length","red","arc") / pill("circumference","blue","circ") = (input(7.2)"°") / "360°"`

:::

::: .reveal(when="blank-1")

Se riordiniamo questo, scopriamo che la circonferenza della Terra è

{.text-center}`pill("circumference","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`

:::

::: .reveal(when="blank-2")

Infine, sappiamo che la circonferenza di un cerchio è `C = 2 pi r` , quindi il raggio della Terra è

{.text-center}`r_"Earth" = (40000 "km") / (2 pi) ≈ 6400 "km"` .

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

La misurazione di Eratosthenes fu uno degli esperimenti più importanti nell'antichità. La sua stima delle dimensioni della Terra era sorprendentemente accurata, soprattutto se si considera che aveva accesso solo a strumenti di misurazione molto basilari.

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

Certo, può essere difficile tradurre i suoi risultati originali in unità moderne come chilometri. Nell'antica Grecia, la distanza era misurata in _stadia_ (circa 160 m), ma non esisteva uno standard universale. Ogni area aveva una versione leggermente diversa e non sappiamo quale Eratostene usasse.

Nei secoli seguenti, gli scienziati hanno cercato di utilizzare altri metodi per calcolare il raggio della Terra - a volte con risultati molto diversi e errati.

Fu una di queste misurazioni errate che spinse Cristoforo Colombo a navigare verso ovest dal Portogallo. Presumeva che la Terra fosse molto più piccola di quanto non fosse in realtà, e sperava di raggiungere l'India. In effetti, arrivò in un altro continente in mezzo: le Americhe.

:::

---

### segmenti

{.todo} PROSSIMAMENTE!

---

## I teoremi del cerchio

> section: circle-theorems
> sectionStatus: dev

TODO

---

## Poligoni Ciclici

> sectionStatus: dev
> section: cyclic-polygons

TODO

---

## Sfere, coni e cilindri

> section: spheres-cones-cylinders
> id: solids
> translated: auto

Nelle sezioni precedenti, abbiamo studiato le proprietà dei cerchi su una superficie piana. Ma il nostro mondo è in realtà tridimensionale, quindi diamo un'occhiata ad alcuni solidi 3D basati su cerchi:

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} Un [__cilindro è__](gloss:cylinder) costituito da due cerchi paralleli congruenti uniti da una superficie curva.

::: column(width=220)

    x-solid(size=220)

{.text-center} Un [__cono__](gloss:cone) ha una base circolare che è unita a un singolo punto (chiamato vertice).

::: column(width=220)

    x-solid(size=220 static)

{.text-center} Ogni punto sulla superficie di una [__sfera__](gloss:sphere) ha la stessa distanza dal suo centro.

:::

Notare come la definizione di una sfera sia quasi uguale alla definizione di un [[cerchio | raggio | cubo]] - tranne in tre dimensioni!

---
> id: gasometer

### cilindri

::: column.grow

Qui puoi vedere il _gasometro_ cilindrico a Oberhausen, in Germania. Ha usato per immagazzinare il gas naturale che è stato usato come combustibile nelle fabbriche e nelle centrali elettriche vicine. Il gasometro è alto 120 metri e la sua base e il soffitto sono due grandi cerchi con un raggio di 35 metri. Esistono due domande importanti a cui gli ingegneri potrebbero voler rispondere:

* Quanto gas naturale può essere immagazzinato? Questo è il [[volume | la zona | diametro]] del cilindro.
* {.reveal(when="blank-0")} Quanto acciaio è necessario per costruire il gasometro? Questa è (approssimativamente) la [[superficie | circonferenza | diagonale]] del cilindro.

{.reveal(when="blank-0 blank-1")} Proviamo a trovare le formule per entrambi questi risultati!

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} Gasometro Oberhausen

:::

---
> id: cylinder-prism

#### Volume di un cilindro

La parte superiore e inferiore di un cilindro sono due cerchi congruenti, chiamati __basi__ . Il __{.m-blue} altezza _h___ di un cilindro è la distanza perpendicolare tra queste basi e il __{.m-red} il raggio _r___ di un cilindro è semplicemente il raggio delle basi circolari.

Possiamo approssimare un cilindro usando a ${n}{n|5|3,20,1} [__prisma__](gloss:prism) laterale. All'aumentare del numero di lati, il prisma inizia ad apparire sempre più come un cilindro:

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

Anche se tecnicamente un cilindro non è un prisma, condividono molte proprietà. In entrambi i casi, possiamo trovare il volume moltiplicando l'area del loro __{.m-red} base__ con il loro __{.m-blue} altezza__ Ciò significa che un cilindro con raggio _{.b.m-red} re_ altezza _{.b.m-blue} h_ ha volume

{.text-center}`V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")} Ricorda che raggio e altezza devono usare le stesse unità. Ad esempio, se _r_ e _h_ sono entrambi in cm, il volume sarà in [[`"cm"^3`|`"cm"^2`| cm]] .

---
> id: oblique-cylinder
> goals: slide

::: column.grow

Negli esempi sopra, le due basi del cilindro erano sempre _direttamente una sopra l'altra_ : questo si chiama __cilindro giusto__ . Se le basi non sono direttamente una sopra l'altra, abbiamo un __cilindro obliquo__ . Le basi sono ancora parallele, ma i lati sembrano "sporgersi" con un angolo non di 90°.

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} La _Torre Pendente di Pisa_ in Italia non è proprio un cilindro obliquo.

:::

---
> id: cavalieri
> goals: slide

Il volume di un cilindro obliquo risulta essere esattamente uguale a quello di un cilindro destro con lo stesso raggio e altezza. Ciò è dovuto al [__Principio di Cavalieri__](gloss:cavalieri) , dal nome del matematico italiano [Bonaventura Cavalieri](bio:cavalieri) : se due solidi hanno la stessa area della sezione trasversale ad ogni altezza, allora avranno lo stesso volume.

Immagina di tagliare un cilindro in molti dischi sottili. Possiamo quindi far scorrere questi dischi in orizzontale per ottenere un cilindro obliquo. Il volume dei singoli dischi non cambia quando lo rendi obliquo, quindi anche il volume totale rimane costante:

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::



---
> id: cylinder-surface

#### Superficie di un cilindro

::: column.grow

Per trovare la superficie di un cilindro, dobbiamo "srotolarlo" nella sua [rete](gloss:net) piatta. Puoi provarlo tu stesso, ad esempio staccando l'etichetta da una lattina di cibo.

Ci sono due [[cerchi | sfere | quadrati]] , uno nella parte superiore e uno nella parte inferiore del cilindro. Il lato curvo è in realtà un grande [[rettangolo | piazza | ellisse]] .

* {.reveal(when="blank-0 blank-1")} I due cerchi hanno ciascuno un'area _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ .
* {.reveal(when="eqn-0")} L'altezza del rettangolo è _{x-equation.small(solution="h" keys=" " short-var)}_ _{span.reveal(when="eqn-1")} e la larghezza del rettangolo è la stessa della [[circonferenza | diametro | tangente]] dei cerchi:_ _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_ .

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

Ciò significa che la superficie totale di un cilindro con raggio _r_ e altezza _h_ è data da

{.text-center}`A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_ .

---
> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

I cilindri possono essere trovati ovunque nel nostro mondo - dalle lattine di soda alla carta igienica o alle tubature dell'acqua. Riesci a pensare ad altri esempi?

Il _Gasometro_ sopra aveva un raggio di 35 me un'altezza di 120 m. Ora possiamo calcolare che il suo volume è di circa [[461.000 ± 1000]] `"m"^3` e la sua superficie è di circa [[34.080 ± 100]] `"m"^2` .

---
> id: cone

### coni

::: column.grow

Un [__cono__](gloss:cone) è un solido tridimensionale che ha una circolare __{.m-red} base__ . Il suo lato "si assottiglia verso l'alto", come mostrato nel diagramma, e termina in un unico punto chiamato il __{.m-green} vertice__ .

Il __{.m-red} il raggio__ del cono è il raggio della base circolare e il __{.m-blue} l'altezza__ del cono è la distanza perpendicolare dalla base al vertice.

Proprio come altre forme che abbiamo incontrato prima, i coni sono ovunque intorno a noi: coni gelato, coni di traffico, alcuni tetti e persino alberi di Natale. Cos'altro puoi pensare?

::: column(width=280)

    x-solid(size=280)

:::

::: column(width=120 parent="padded-thin")

    x-img(src="images/ice-cream.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/traffic.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/roof.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/christmas.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/tipi.jpg" width=120 height=120 lightbox)

:::

---
> id: cone-volume

#### Volume di un cono

::: column.grow

In precedenza avevamo trovato il volume di un cilindro approssimandolo con un prisma. Allo stesso modo, possiamo trovare il volume di un cono approssimandolo con una [__piramide__](gloss:pyramid) .

Qui puoi vedere a ${n}{n|5|3,18,1} piramide a lato. All'aumentare del numero di lati, la piramide inizia ad apparire sempre più come un cono. In effetti, potremmo pensare a un cono come a una piramide con _infiniti_ lati!

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

Questo significa anche che possiamo anche usare l'equazione per il volume: `V = 1/3 "base" × "height"` . La base di un cono è un cerchio, quindi il volume di un cono con raggio _r_ e altezza _h lo_ è

{.text-center}`V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---
> id: cone-circumscribed

Notare la somiglianza con l'equazione per il volume di un cilindro. Immagina di disegnare un cilindro _attorno_ al cono, con la stessa base e altezza - questo è chiamato __cilindro circoscritto__ . Ora, il cono occuperà esattamente [[un terzo | metà | un quarto]] del volume del cilindro:

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey} Nota: si potrebbe pensare che infinitamente molti piccoli lati come approssimazione siano un po '"imprecisi". I matematici hanno trascorso molto tempo a cercare un modo più semplice per calcolare il volume di un cono. Nel 1900, il grande matematico [David Hilbert](bio:hilbert) lo nominò addirittura come uno dei 23 problemi irrisolti più importanti in matematica! Oggi sappiamo che in realtà è impossibile.

---
> id: oblique-cone
> goals: slide

::: column.grow

Proprio come un cilindro, un cono non deve essere "dritto". Se il vertice è direttamente sopra il centro della base, abbiamo un __cono destro__ . Altrimenti, lo chiamiamo un __cono obliquo__ .

Ancora una volta, possiamo usare il principio di Cavalieri per dimostrare che tutti i coni obliqui hanno lo stesso volume, purché abbiano la stessa base e altezza.

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### Superficie di un cono

::: column.grow

Trovare la superficie di un cono è un po 'più complicato. Come prima, possiamo svelare un cono nella sua rete. Sposta il cursore per vedere cosa succede: in questo caso, otteniamo un settore cerchio e un [[cerchio | segmento del cerchio | arco circolare]] .

{.reveal(when="blank-0")} Ora non ci resta che sommare l'area di entrambi questi componenti. Il __{.m-yellow} la base__ è un cerchio con raggio _r_ , quindi la sua area è

{.text-center.reveal(when="blank-0")}`pill(A_"Base","yellow","circle") =` _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ .

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

Il raggio di __{.m-green} settore__ è uguale alla distanza dal bordo di un cono al suo vertice. Questo si chiama il [{.pill.green.b} altezza inclinata _s_](target:s) del cono e non uguale alla normale [{.pill.blue.b} altezza _h_](target:h) . Possiamo trovare l'altezza inclinata usando [Pitagora](gloss:pythagoras-theorem) :

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_ |
| `s` | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
{.eqn-system}

::: column(width=280)

    x-geopad.geo-sketch.no-background(width=280 height=200): svg
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

Il [{.pill.red} la lunghezza dell'arco](target:arc) del settore è la stessa della [[circonferenza | diametro | arco]] del [{.pill.yellow} base](target:base) : _{span.reveal(when="blank-0")}`2 π r` . Ora possiamo trovare l'area del settore usando la [formula che](gloss:circle-sector) abbiamo derivato in una sezione precedente:_

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")

| `pill(A_"Sector","green","sector")` | `=` | `pill(A_"Circle","teal","circle") × pill("arc","red","arc") / pill("circumference","teal","circumference")` |
| | `=` | _{x-equation(solution="π r sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |

:::

::: column(width=280)

    x-geopad.geo-sketch.no-background(width=280 height=300 style="margin-top: -20px"): svg
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

Infine, non ci resta che aggiungere l'area del __{.m-yellow} base__ e l'area del __{.m-green} settore__ , per ottenere la superficie totale sono del cono:

{.text-center}`A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

### sfere

::: column.grow

Una [__sfera__](gloss:sphere) è un solido tridimensionale costituito da tutti i punti che hanno la stessa distanza da un dato __{.m-green} centro _C.___ Questa distanza è chiamata __{.m-red} raggio _r___ della sfera.

Puoi pensare a una sfera come a un " [cerchio](gloss:circle) tridimensionale". Proprio come un cerchio, anche una sfera ha un __{.m-blue} diametro _d___ , che è [[due volte | metà]] della lunghezza del raggio, nonché accordi e secanti.

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} In una [sezione precedente](/course/circles/tangets-chords-arcs#eratosthenes-1) , hai imparato come il matematico greco [Eratosthenes ha](bio:eratosthenes) calcolato il raggio della Terra usando l'ombra di un palo: erano 6.371 km. Ora proviamo a trovare il volume totale e la superficie della Terra. [Continua](btn:next)

---
> id: sphere-volume

#### Volume di una sfera

Per trovare il volume di una sfera, dobbiamo ancora una volta usare il Principio di Cavalieri. Cominciamo con un emisfero - una sfera tagliata a metà lungo l'equatore. Abbiamo anche bisogno di un cilindro con lo stesso raggio e altezza dell'emisfero, ma con un cono invertito "tagliato" nel mezzo.

Mentre sposti il cursore in basso, puoi vedere la sezione trasversale di entrambe queste forme ad un'altezza specifica sopra la base:

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

{.reveal(when="slider-0")} Proviamo a trovare l'area della sezione trasversale di entrambi questi solidi, a distanza [{.pill.blue} altezza _h_](target:h) sopra la base.

::: column.grow

{.reveal(when="slider-0")} La sezione trasversale dell'emisfero è sempre un [[cerchio | squillare | cilindro]] .

{.reveal(when="blank-0")} Il [{.pill.red} il raggio _x_](target:x) della sezione trasversale fa parte di a [{.pill.yellow} triangolo rettangolo](target:tri) , in modo da poter usare [Pitagora](gloss:pythagoras-theorem) :

::: .reveal(when="blank-0")

{.text-center}`pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")` .

Ora, l'area della sezione trasversale è

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)

:::

::: column.grow.reveal(when="eqn-0")

La sezione trasversale del cilindro ritagliato è sempre un [[anello | cerchio | cono]]

::: .reveal(when="blank-1")

Il raggio del foro è _h_ . Possiamo trovare l'area dell'anello sottraendo l'area del buco dall'area del cerchio più grande:

| _A_ | = | `π r^2 - π h^2` |
|     | = | `π (r^2 - h^2)` |
{.eqn-system}

:::

:::

---
> id: sphere-volume-1

Sembra che entrambi i solidi abbiano la stessa area della sezione trasversale ad ogni livello. Secondo il Principio di Cavalieri, entrambi i solidi devono avere lo stesso [[volume | superficie | circonferenza]] ! _{span.reveal(when="blank-0")} Possiamo trovare il volume dell'emisfero sottraendo il volume del [cilindro](gloss:cylinder-volume) e il volume del [cono](gloss:cone-volume) :_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")

| `V_"Hemisphere"` | = | `V_"Cylinder" - V_"Cone"` |
| | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |

:::

---
> id: sphere-volume-2

Una sfera è composta da [[due]] emisferi, _{span.reveal(when="blank-0")} il che significa che deve essere il suo volume_

{.text-center.reveal(when="blank-0")}`V = 4/3 π r^3` .

---
> id: earth-volume
> goals: numbers

::: column.grow

La Terra è (approssimativamente) una sfera con un raggio di 6.371 \ km. Pertanto il suo volume è

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
|     | `=` | _{span.numbers} 1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} La densità media della Terra è `5510 "kg/m"^3` . Ciò significa che la sua massa totale è

{.text-center.reveal(when="numbers")}`"Mass" = "Volume" × "Density" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} Questo è un 6 seguito da 24 zeri!

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

Se si confrontano le equazioni per il volume di un cilindro, un cono e una sfera, è possibile notare una delle relazioni più soddisfacenti in geometria. Immagina di avere un cilindro con la stessa altezza del diametro della sua base. Ora possiamo adattare perfettamente sia un cono che una sfera al suo interno:

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} Questo cono ha raggio `r` e altezza `2r` . Il suo volume è _{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} Questa sfera ha raggio `r` . Il suo volume è _{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} Questo cilindro ha raggio `r` e altezza `2r` . Il suo volume è _{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} Nota come, se [[sommiamo | sottrarre | moltiplica]] il volume del cono e della sfera, otteniamo esattamente il volume del cilindro!

---
> id: sphere-maps
> goals: move projection

#### Superficie di una sfera

Trovare una formula per la superficie di una sfera è molto difficile. Uno dei motivi è che non possiamo aprire e "appiattire" la superficie di una sfera, come abbiamo fatto prima per coni e cilindri.

Questo è un problema particolare quando si tenta di creare mappe. La Terra ha una superficie curva, tridimensionale, ma ogni mappa stampata deve essere piatta e bidimensionale. Ciò significa che i geografi devono imbrogliare: allungando o schiacciando determinate aree.

Qui puoi vedere alcuni diversi tipi di mappe, chiamate __proiezioni__ . Prova a spostare il quadrato rosso e osserva come appare _realmente_ quest'area su un globo:

    figure
      x-select.tabs
        .projection(data-name="mercator") Mercator
        .projection(data-name="cylindrical") Cylindrical
        .projection(data-name="robinson") Robinson
        .projection(data-name="mollweide") Mollweide
      .box.no-padding.sphere-maps
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
          p.caption As you move the square on the map, notice how the size and shape of the #[em actual] area changes on the three-dimensional globe.
    x-gesture(target="#projection" slide="50, 20")

---
> id: sphere-surface

Per trovare la superficie di una sfera, possiamo ancora una volta approssimarla usando una forma diversa, ad esempio un poliedro con molte facce. All'aumentare del numero di facce, il poliedro inizia ad apparire sempre più come una sfera.

{.todo} IN ARRIVO: Sfera a prova di area superficiale






---

## Sezioni coniche

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola
> translated: auto

Il cerchio è una delle quattro diverse forme che possono essere create usando "sezioni" attraverso un [cono](gloss:cone) . Questo può essere dimostrato usando il cono di luce di una torcia:

    x-conic-section
    x-scale-box(width=760).conics
      .row
        .active
          p.no-voice: strong Circle
          include svg/circle.svg
        .hide
          p.no-voice: strong Ellipse
          include svg/ellipse.svg
        .hide
          p.no-voice: strong Parabola
          include svg/parabola.svg
        .hide
          p.no-voice: strong Hyperbola
          include svg/hyperbola.svg

---
> id: conics-1

Se si punta la torcia verticalmente verso il basso, viene visualizzato un [[cerchio | ellisse | ovale]] di luce. _{span.reveal(when="blank-0")} Se inclini il cono, otterrai [__un'ellisse__](gloss:ellipse) . Se lo inclini ancora di più, ottieni una [__parabola__](gloss:parabola) o [__un'iperbole__](gloss:hyperbola) ._

---
> id: conics-2

::: column.grow

Collettivamente, queste quattro forme sono chiamate [__sezioni coniche__](gloss:conic-section) . Anche se sembrano tutti molto diversi, sono strettamente correlati: in effetti, possono tutti essere generati usando la stessa equazione!

Le sezioni coniche furono studiate per la prima volta dall'antico matematico greco [Apollonio di Perga](bio:apollonius) , che diede loro anche i loro nomi insoliti.

Nei corsi successivi, imparerai molto di più su parabole e iperbole. Per ora, diamo un'occhiata più da vicino all'ellisse.

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### ellissi

Un'ellisse sembra quasi un "cerchio allungato". In effetti, potresti pensarlo come un cerchio con _due centri_ : questi sono chiamati __punti focali__ . Proprio come ogni punto di un cerchio ha la stessa distanza dal suo centro, ogni punto di un'ellisse ha la stessa _somma di distanze_ dai suoi due punti focali.

Se hai una lunga stringa collegata a due punti fissi, puoi disegnare un'ellisse perfetta tracciando la massima portata delle stringhe:

{.todo} Prossimamente: ellissi disegno interattivo

---
> id: ellipses-2
> goals: v0 v1 v2 v3

Esistono molte altre rappresentazioni fisiche di come potresti disegnare un'ellisse:

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

### Orbite planetarie

::: column.grow

Potresti ricordare fin dall'inizio di questo corso che gli antichi astronomi greci credevano che la Terra fosse al centro dell'universo e che il sole, la luna e i pianeti si muovessero attorno alla Terra su orbite circolari.

Sfortunatamente, l'osservazione astronomica del cielo non lo supporta del tutto. Ad esempio, il sole è apparso più grande in alcune parti dell'anno e più piccolo in altre. Su un cerchio, ogni punto dovrebbe avere [[lo stesso | un aumento | una]] distanza [[decrescente]] dal suo centro.

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} Astronomo greco Ipparco di Nicea

:::

---
> id: epicycles
> goals: play

Per risolvere questo problema, gli astronomi hanno aggiunto __Epicicli__ al loro modello del sistema solare: i pianeti si muovono su un grande cerchio attorno alla Terra, mentre contemporaneamente ruotano su un cerchio più piccolo. Sebbene molto complicato, questo è stato il modello più ampiamente accettato del nostro universo per oltre 1000 anni:

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} Questo pianeta fa ${n}{n|6|2,12,1} rotazioni attorno al piccolo cerchio (l' __epiciclo__ ) durante una rotazione attorno al grande cerchio (il __deferente__ ).

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} Un disegno di epicicli del XVI secolo nel __modello geocentrico__ . La parola greca "pianeti" significa "vagabondi".

:::

---
> id: kepler
> goals: play

::: column.grow

Nel tempo, le persone hanno capito che la Terra era solo uno dei tanti pianeti in orbita attorno al sole (il __modello eliocentrico__ ), ma non è stato fino al 1609, che l'astronomo [Johannes Kepler ha](bio:kepler) scoperto che i pianeti si muovono effettivamente su _orbite ellittiche_ .

Il sole si trova in uno dei due punti focali di queste ellissi. I pianeti accelerano mentre si avvicinano al sole e rallentano mentre si allontanano.

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

Qualche decennio più tardi, [Isaac Newton](bio:newton) fu in grado di provare le osservazioni di Keplero, usando le sue leggi di [__gravità__](gloss:gravity) recentemente sviluppate. Newton si rese conto che esiste una forza tra due masse qualsiasi nell'universo - simile all'attrazione tra due magneti.

La gravità è ciò che fa cadere tutto a terra e la gravità è anche ciò che fa muovere i pianeti attorno al sole. È solo la grande velocità alla quale si muovono i pianeti, che impedisce loro di cadere direttamente nel sole.

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

Usando le leggi di Newton, puoi derivare il percorso che gli oggetti intraprendono quando si muovono sotto la forza di gravità. Si scopre che i pianeti si muovono su ellissi, ma altri oggetti come le comete possono viaggiare su percorsi [parabolici](gloss:parabola) o [iperbolici](gloss:hyperbola) : volano vicino al sole prima di girarsi e sparare nell'universo, per non tornare mai più.

Secondo la leggenda, una mela che cade ispirò Newton a pensare alla gravità. Era uno degli scienziati più influenti di tutti i tempi e le sue idee hanno modellato la nostra comprensione del mondo per quasi 300 anni - fino a quando Albert Einstein scoprì la relatività nel 1905.

:::
