# Frattali

## Introduzione

> section: introduction
> id: intro

Guardando in giro per la natura, potresti aver notato piante intricate come queste:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} Questa __Felce__ è composta da molte piccole foglie che si ramificano per una più grande.

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} Questo __broccoli romanesco__ è costituito da [[coni|cubes|spheres]] più piccoli che si muovono a spirale attorno a uno più grande.

:::

{.reveal(when="blank-0")} Inizialmente, queste appaiono come forme altamente complesse, ma quando guardi più da vicino, potresti notare che entrambi seguono uno schema relativamente semplice: tutte le [singole parti](target:fractal) delle piante sembrano esattamente uguali all'intera pianta, appena più piccola. Lo stesso modello viene ripetuto più e più volte, su scale più piccole. [Continua](btn:next)

---

> id: fern

In matematica, chiamiamo questa proprietà __auto-somiglianza__ e le forme che la hanno sono chiamate [__frattali__](gloss:fractal). Sono alcuni degli oggetti più belli e più bizzarri di tutta la matematica.

Per creare i nostri frattali, dobbiamo iniziare con un modello semplice e quindi ripeterlo più e più volte, su scale più piccole.

::: column.grow

Uno dei modelli più semplici potrebbe essere un [{.pill.red} segmento di linea](target:s1), con [{.pill.blue} altri due segmenti](target:s2) che si diramano da un'estremità. Se ripetiamo questo schema, entrambi questi segmenti blu avranno anche altri due rami alle estremità.

Puoi spostare i [punti blu](target:dot) per modificare la lunghezza e l'angolo di tutti i rami. Quindi aumentare il numero di iterazioni utilizzando [il dispositivo di scorrimento](->#fern-slider) di seguito.

{.reveal(when="slider-0")} A seconda della posizione dei rami, puoi creare motivi completamente diversi - assomigliando alla [felce](action:set(130,228,197,184)) sopra, un [albero](action:set(160,186,200,186)) o [pentagoni nidificati](action:set(113,235,232,238)). Cos'altro puoi trovare? [Continua](btn:next)

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

Un altro famoso frattale è il [__triangolo di Sierpinski__](gloss:sierpinski-triangle). In questo caso, iniziamo con un grande triangolo equilatero, quindi tagliamo ripetutamente triangoli più piccoli dalle parti rimanenti.

{.reveal(when="slider=0")} Nota come la forma finale è composta da [tre copie identiche di se stessa](target:x), e ognuna di queste è costituita da copie ancora più piccole dell'intero triangolo! Potresti continuare a ingrandire il triangolo per sempre, e i motivi e le forme continueranno sempre a ripetersi.

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

Le piante all'inizio di questo capitolo _sembrano_ proprio come i frattali, ma è chiaramente impossibile creare _veri_ frattali nella vita reale. Se continuiamo a ripetere lo stesso schema più e più volte, sempre più piccoli, arriveremmo infine a cellule, molecole o atomi che non possono più essere divisi.

Tuttavia, usando la matematica, possiamo pensare alle proprietà che "avrebbero" i veri frattali - e questi sono molto sorprendenti ... [Continua](btn:next)

---
> id: dimension

### Dimensioni frattali

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

Innanzitutto, pensiamo alla dimensione dei frattali. Una linea ha dimensione [[1]]. _{span.reveal(when="blank-0")} Quando lo ridimensiona di un fattore 2, la sua lunghezza aumenta di un fattore di `2^1 = 2`. Ovviamente!_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

Un quadrato ha dimensione [[2]]. _{span.reveal(when="blank-0")} Quando lo ridimensiona di un fattore 2, la sua area aumenta di un fattore di `2^2 =` [[4]]._

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

Un cubo ha dimensione [[3]]. _{span.reveal(when="blank-0")} Quando lo ridimensiona di un fattore 2, il suo volume aumenta di un fattore di `2^3 =` [[8]]._ _{span.reveal(when="blank-1")} Nota che il cubo più grande nell'immagine consiste di 8 copie di quella più piccola!_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Ora diamo un'occhiata al triangolo Sierpinski. Se lo ridimensioniamo di un fattore 2, puoi vedere che la sua "area" aumenta di un fattore di [[3]].

{.reveal(when="blank-0")} Supponiamo che _d_ sia la dimensione del triangolo Sierpinski. Usando lo stesso modello di cui sopra, otteniamo `2^d = 3`. In altre parole, _d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} ≈ 1,585…_

:::

---
> id: dimension-4

Ma aspetta ... come può qualcosa avere una dimensione che non è un numero intero? Sembra impossibile, ma questa è solo una delle strane proprietà dei frattali. In effetti, questo è ciò che dà il nome ai frattali: hanno una dimensione frazionaria di __<<<<__.

Con ogni iterazione, rimuoviamo parte dell'area del triangolo Sierpinski. Se potessimo farlo all'infinito molte volte, in realtà non rimarrebbe alcuna area: ecco perché il triangolo Sierpinski è qualcosa tra un'area bidimensionale e una linea monodimensionale.

::: .theorem

Mentre molti frattali sono _auto-simili_, una definizione migliore è che __frattali__ sono forme che hanno una __dimensione non intera__.

:::

[Continua](btn:next)

---

> id: snowflake

### The Koch Snowflake

Ci sono molte forme in natura che sembrano frattali. Abbiamo già visto alcune piante all'inizio di questo capitolo. Altri grandi esempi sono fiocchi di neve e cristalli di ghiaccio:

::: column(width=120 parent="padded-thin")

    x-media(src="images/snow-1.jpg" width=120 height=120)

::: column(width=120)

    x-media(src="images/snow-2.jpg" width=120 height=120)

::: column(width=120)

    x-media(src="images/snow-3.jpg" width=120 height=120)

::: column(width=120)

    x-media(src="images/snow-4.jpg" width=120 height=120)

::: column(width=120)

    x-media(src="images/snow-5.jpg" width=120 height=120)

:::

---

> id: koch

Per creare il nostro fiocco di neve frattale, dobbiamo ancora una volta trovare una semplice procedura che possiamo applicare ancora e ancora.

::: column.grow

Come il triangolo Sierpinski, iniziamo con un singolo triangolo equilatero. Tuttavia, anziché _rimuovere_ triangoli più piccoli ad ogni passo, _aggiungiamo_ triangoli più piccoli lungo il bordo. La lunghezza laterale di ogni triangolo è [[`1/3`|`1/4`|`1/2`]] dei triangoli nel passaggio precedente.

{.reveal(when="blank-0")} La forma risultante si chiama [__Koch snowflake__](gloss:koch-snowflake), dal nome del matematico svedese [Helge von Koch](bio:koch). Notare, ancora una volta, che [piccole sezioni](target:t2) del bordo del fiocco di neve sembrano esattamente le stesse di [sezioni più grandi](target:t1).

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

Quando ridimensioniamo un segmento di bordo del Koch Snowflake di un fattore 3, la sua lunghezza [[quadruplica|triples|doubles]].

{.reveal(when="blank-0")} Usando la stessa relazione tra dimensioni e fattori di scala di cui sopra, otteniamo l'equazione [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]]. _{span.reveal(when="blank-1")} Ciò significa che la dimensione del Koch Snowflake è `§d = log_3(4) ≈ 1.262`._

:::

---

> id: koch-size

::: tab

#### Area _{span.check(when="blank-6")}_

La creazione dei fiocchi di neve di Koch è quasi come una [sequenza ricorsiva](gloss:sequence-recursive): conosciamo la forma iniziale (un triangolo) e sappiamo come passare da un termine al successivo (aggiungendo più triangoli su ogni lato):

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] nuovi triangoli

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] nuovi triangoli

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]] nuovi triangoli

:::

{.reveal(when="blank-0 blank-1 blank-2")} Dopo la prima iterazione, il numero di nuovi triangoli aggiunti aumenta di un fattore di [[4]] ad ogni passaggio. Allo stesso tempo, l'area di questi nuovi triangoli diminuisce di un fattore di [[9]] ad ogni passo.

{.reveal(when="blank-3 blank-4")} Supponiamo che il [primo triangolo](->#koch-0) abbia un'area di 1. Quindi l'area totale dei [prossimi tre triangoli](->#koch-1) è `3 × 1/9 = 1/3`. I seguenti passaggi formano tutti una [[serie geometrica|arithmetic series|quadratic series]], _{span.reveal(when="blank-5")} con rapporto comune [[`4/9`|`9/4`|`4/3`]]._

{.reveal(when="blank-6")} Utilizzando la formula per la somma di infinite [serie geometriche](gloss:geometric-series), possiamo calcolare che l'area totale del fiocco di neve di Koch è

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`.

::: tab

#### Perimetro _{span.check(when="blank-9")}_

::: column.grow

Possiamo anche provare a calcolare il perimetro del fiocco di neve di Koch. Come abbiamo già visto prima, la lunghezza del perimetro cambia di un fattore di [[`4/3`|`3/4`|`1/4`]] ad ogni passo.

{.reveal(when="blank-8")} Ciò significa che, ancora una volta, abbiamo una serie geometrica, ma in questo caso [[non converge|converges to 0|doesn’t have a first term]]. _{span.reveal(when="blank-9")} Ciò significa che il perimetro del fiocco di neve di Koch è in realtà __infinitamente lungo__!_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _Se questo sembra controintuitivo, ricorda solo che moltiplichiamo il perimetro di `§4/3` ad ogni passo e lo facciamo infinitamente molte volte._

:::

---

> id: frozen

::: column.grow

È quasi impensabile che tu possa avere una forma con un'area _finita_ e anche una circonferenza _infinita_ - ma questa è solo una delle tante proprietà inattese dei frattali.

Puoi trovare altri modi per creare i tuoi frattali? [Continua](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} "La mia anima sta spirando su frattali congelati tutt'intorno ..."

:::

---

> id: menger-sponge

### Menger Sponge

I frattali non devono essere "piatti", come molti degli esempi sopra. Uno dei frattali più famosi che sembrano tridimensionali è la __spugna di Menger__, dal nome del matematico [Karl Menger](bio:menger) che la descrisse per la prima volta nel 1926.

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

Iniziamo con un cubo solido e ripetutamente eseguiamo fori sempre più piccoli sui suoi lati. Ogni nuova iterazione di fori ha [[`1/3`|`1/2`|`1/4`]] la larghezza della precedente iterazione di fori.

{.reveal(when="blank-0")} Un cubo `3×3×3` è composto da 27 cubi più piccoli, ma qui ne abbiamo rimossi alcuni. La spugna Menger è composta da [[20]] copie di se stessa, che sono 3 volte più piccole.

{.reveal(when="blank-1")} Ora possiamo provare a calcolare la dimensione _d_ della spugna Menger proprio come abbiamo fatto per il fiocco di neve di Koch sopra. In questo caso otteniamo `3^d = 20` o `§d = log_3(20) ≈ 2.727`.

:::

{.reveal(when="blank-1")} Se immagini di tagliare sempre più buchi, infinitamente più volte, non rimarrebbe alcun volume effettivo. Ecco perché il cubo è "non proprio" tridimensionale! [Continua](btn:next)

---

> id: coastlines

### Coste frattali

Una delle caratteristiche chiave di tutti i frattali che abbiamo visto finora è che puoi "ingrandire" per sempre e trovare sempre nuovi modelli. Intorno al 1920, il matematico britannico [Lewis Fry Richardson](bio:richardson) si rese conto che lo stesso vale per il confine o la costa di molti paesi.

Inizi con la forma base del paese e, ingrandendo, aggiungi insenature, baie ed estuari del fiume, quindi singole scogliere, rocce, ciottoli e così via:

::: column(width=120 parent="padded-thin")

    x-media(src="images/coast-1.jpg" width=120 height=180)

::: column(width=120)

    x-media(src="images/coast-2.jpg" width=120 height=180)

::: column(width=120)

    x-media(src="images/coast-3.jpg" width=120 height=180)

::: column(width=120)

    x-media(src="images/coast-4.jpg" width=120 height=180)

::: column(width=120)

    x-media(src="images/coast-5.jpg" width=120 height=180)

:::

[Continua](btn:next)

---

> id: coastlines-1

::: column.grow

Questo è un problema significativo quando si tenta di calcolare la lunghezza del confine di un paese: come si decide in che misura ingrandire e quali angoli e fessure includere?

Un modo in cui potremmo misurare la lunghezza della costa britannica, ad esempio, è prendere un lungo sovrano, camminare per le sue spiagge e quindi sommare tutte le distanze.

Se il righello è lungo ${rulers[index]}{index|0|0,8,1} km, dobbiamo usarlo ${count} volte, quindi otteniamo una linea costiera totale di ${count} × ${rulers[index]} = ${count * rulers[index]} km.

{.reveal(when="var-0")} Possiamo semplicemente continuare, con sovrani sempre più piccoli, e ogni volta che il nostro risultato per la lunghezza della costa aumenterebbe un po 'di più. Proprio come il Koch Snowflake prima, sembra che la costa della Gran Bretagna sia infinitamente lunga! Questo è spesso chiamato __paradosso costiero__. [Continua](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

Qualche decennio più tardi, il matematico [Benoit Mandelbrot](bio:mandelbrot) inciampò sul lavoro di Richardson in un libro di biblioteca scartato, mentre lavorava in IBM. Ha riconosciuto il suo significato e anche il modo in cui si collega a ricerche più recenti su frattali e dimensioni.

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

La costa della Gran Bretagna certamente "sembra" frattale, ma non è _auto-simile_, come altri frattali che abbiamo visto prima. Per trovarne le dimensioni, possiamo disegnarlo su una griglia e contare il numero di celle con cui si interseca.

{.r.reveal(when="slider-0")} Inizialmente, ci sono __{.pill.yellow} 88__ celle intersecanti. Se scaliamo la costa di un fattore 2, ci sono __{.pill.yellow} 197__ celle intersecanti - più del doppio! [Continua](btn:next)

{.r.reveal(when="next-0")} La dimensione della costa è aumentata di un fattore di `§197/88`. Come prima, questo significa che la dimensione della costa è

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---

> id: coastline-dimension-1

Se lo ripetessimo con griglie più grandi, scopriremmo che la dimensione della costa britannica è in realtà circa 1,21. Mandelbrot ha capito che questa dimensione frattale è anche una misura della __rugosità__ di una forma - un nuovo concetto, per il quale ha trovato importanti applicazioni in molte altre aree della matematica e della scienza.

---

> id: nature

### Più frattali nella natura e nella tecnologia

Mentre i veri frattali non possono mai apparire in natura, ci sono molti oggetti che assomigliano a _quasi_ come frattali. Abbiamo già visto piante, fiocchi di neve e coste, e qui ci sono altri esempi:

::: column(width=200)

    // https://visibleearth.nasa.gov/images/72291/the-hindu-kush
    x-media(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption} Catena montuosa in Asia centrale

::: column(width=200)

    // https://de.wikipedia.org/wiki/Datei:Sundarbans.jpg
    x-media(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption} Delta del fiume Gange in India

::: column(width=200 parent="padded-thin")

    x-media(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption} Fulmine

::: column(width=200)

    // https://commons.wikimedia.org/wiki/File:Fundus_photograph_of_normal_right_eye.jpg
    x-media(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption} Vasi sanguigni nella retina

::: column(width=200)

    // https://www.flickr.com/photos/usgeologicalsurvey/11188773133
    x-media(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption} Grand Canyon negli Stati Uniti

::: column(width=200)

    x-media(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption} Nuvole

:::

Tutti questi oggetti potrebbero apparire completamente casuali, ma, proprio come i frattali, c'è un modello sottostante che determina come sono formati. La matematica può aiutarci a capire meglio le forme e i frattali hanno applicazioni in campi come medicina, biologia, geologia e meteorologia. [Continua](btn:next)

    // TODO https://en.wikipedia.org/wiki/Fractal_antenna
    // TODO Fractals in African Art

---

> id: technology

::: column(width=300)

    // https://commons.wikimedia.org/wiki/File:Fractal_terrain_texture.jpg
    x-media(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption} Terreno frattale generato dal computer

::: column.grow

Possiamo anche usare i frattali per creare "copie" realistiche della natura, ad esempio paesaggi e trame usati nei videogiochi o nei film generati dal computer. L'acqua, le montagne e le nuvole in questa immagine sono realizzate interamente da un computer, con l'aiuto di frattali!

E possiamo persino invertire questo processo per comprimere le immagini digitali, per ridurne le dimensioni. I primi algoritmi sono stati sviluppati da Michael Barnsley e Alan Sloan negli anni '80 e ne stanno ancora studiando di nuovi.

:::

---

## Il triangolo di Sierpinski

> section: sierpinski
> id: sierpinski

::: column.grow

Uno dei frattali che abbiamo visto nel capitolo precedente era il [__triangolo di Sierpinski__](gloss:sierpinski-triangle), che prende il nome dal matematico polacco [Wacław Sierpiński](bio:sierpinski). Può essere creato iniziando con un grande triangolo equilatero, quindi tagliando ripetutamente triangoli più piccoli dal suo centro.

{.r.reveal(when="slider-0")} Wacław Sierpiński è stato il primo matematico a pensare alle proprietà di questo triangolo, ma è apparso molti secoli prima in opere d'arte, motivi e mosaici.

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: sierpinski-history

Ecco alcuni esempi di soffitti di diverse chiese di Roma:

::: column(width=140 parent="padded-thin")

    // https://commons.wikimedia.org/wiki/File:Santa_Maria_in_Cosmedin_(Roma).jpg
    x-media(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    // Permission from Elisa Conversano
    x-media(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010")

::: column(width=140)

    // https://www.cattedraledianagni.it/
    x-media(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it")

::: column(width=140)

    // http://matheuro.overblog.com/2014/05/sierpinski-s-triangle-the-nave-of-the-roman-basilica-of-santa-maria-in-comesdin.html
    x-media(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire")

:::

A quanto pare, il triangolo Sierpinski appare in una vasta gamma di altre aree della matematica e ci sono molti modi diversi per generarlo. In questo capitolo, ne esploreremo alcuni! [Continua](btn:next)

---

> id: pascal
> goals: select

### Triangolo di Pascal

Potresti già ricordare il triangolo Sierpinski dal nostro capitolo su [__Triangolo di Pascal__](gloss:pascals-triangle). Questa è una piramide numerica in cui ogni numero è la somma dei due numeri sopra. Tocca tutti i _pari_ numeri nel triangolo in basso, per evidenziarli - e vedi se noti uno schema:

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

Il triangolo di Pascal può essere continuato verso il basso per sempre, e il modello Sierpinski continuerà con triangoli sempre più grandi. Puoi già vedere l'inizio di un triangolo ancora più grande, a partire dalla riga 16.

Se due celle adiacenti sono divisibili per 2, anche la loro somma nella cella sottostante deve essere divisibile per 2, ecco perché possiamo ottenere solo triangoli colorati (o singole celle). Naturalmente, possiamo anche provare a colorare tutte le celle divisibili per numeri _diversi da 2_. Cosa pensi che succederà in quei casi? [Continua](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Qui puoi vedere una versione minuscola delle prime 128 file del triangolo di Pascal. Abbiamo evidenziato tutte le celle che sono divisibili per ${n}{n|2|2,40,1} - che cosa noti?

{.reveal(when="var-0")} Per ogni numero, abbiamo un diverso modello triangolare simile al triangolo Sierpinski. Il modello è particolarmente regolare se scegliamo un [[numero primo|triangle number|Fibonacci number]]. _{span.reveal(when="blank-0")} Se il numero ha _molti diversi fattori primi_, il modello sembra più casuale._

    x-gesture(target="#pascal-large x-var" slide="100,0")

---

> id: chaos-game
> goals: point play

### The Chaos Game

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

Qui puoi vedere i tre vertici di un triangolo equilatero. Toccare un punto qualsiasi nell'area grigia per creare un quarto punto.

{.r.reveal(when="point")} Facciamo un semplice gioco: scegliamo uno dei vertici del triangolo in modo casuale, tracciamo un segmento di linea tra il nostro punto e il vertice, quindi troviamo il [{.pill.red} punto medio](target:p1) di quel segmento. [Continua](btn:next)

{.r.reveal(when="next-0")} Ora ripetiamo il processo: scegliamo un altro vertice casuale, disegniamo il segmento dal nostro ultimo punto e quindi troviamo il [{.pill.green} punto medio](target:p2). Si noti che coloriamo questi nuovi punti in base al colore del vertice del triangolo che abbiamo scelto. [Continua](btn:next)

{.reveal(when="next-1")} Finora non è successo nulla di sorprendente, ma guarda mentre ripetiamo lo stesso processo molte altre volte:

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} Aggiungi 1000 passaggi_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

Questo processo è chiamato __Chaos Game__. Potrebbero esserci alcuni punti vaganti all'inizio, ma se ripeti gli stessi passaggi più volte, la distribuzione dei punti inizia ad apparire esattamente come il triangolo Sierpinski!

Ci sono molte altre versioni di esso - ad esempio, potremmo iniziare con un quadrato o un pentagono, potremmo aggiungere regole aggiuntive come non essere in grado di selezionare lo stesso vertice due volte di seguito, oppure potremmo scegliere il punto successivo con un rapporto diverso da `§1/2` lungo il segmento. In alcuni di questi casi, avremo solo una distribuzione casuale di punti, ma in altri casi, riveleremo ancora più frattali:

    include components/chaos-game

{.reveal(when="s1 s2 play")} Hai scoperto il [tappeto Sierpinski](action:carpet()) o questo [fiocco di neve pentagonale](action:snowflake()) basato sul [__rapporto aureo__](gloss:golden-ratio)?

---

> id: cellular
> goals: sierpinski

### Automi cellulari

Un __automa cellulare__ è una griglia costituita da molte singole celle. Ogni cella può trovarsi in diversi "stati" (ad esempio colori diversi) e lo stato di ogni cella è determinato dalle celle circostanti.

Nel nostro esempio, ogni cella può essere bianca o nera. Iniziamo con una riga che contiene un solo quadrato nero. In ogni riga successiva, il colore di ogni cella è determinato dalle tre celle immediatamente sopra. Tocca le otto possibili opzioni sottostanti per capovolgerne il colore: puoi trovare una serie di regole che creano uno schema simile al triangolo Sierpinski?

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} Sono disponibili due opzioni per ciascuna delle otto opzioni, il che significa che ci sono `2^8 =` [[256]] possibili regole in totale. Alcuni, come [Rule 126](action:setRule('01111110')), sembrano il triangolo Sierpinski. Altri, come [Rule 30](action:setRule('01111000')), sembrano completamente caotici. È stato scoperto da [Stephen Wolfram](bio:wolfram) nel 1983 e i computer possono persino usarli per generare numeri casuali!

---

> id: cellular-1

::: column.grow

Gli automi cellulari mostrano come si possano creare schemi estremamente complessi con regole molto semplici, proprio come i frattali. Molti processi in natura seguono anche regole semplici, ma producono sistemi incredibilmente complessi.

In alcuni casi, questo può portare alla comparsa di motivi che sembrano proprio automi cellulari, ad esempio i colori sul guscio di questa lumaca.

::: column(width=320)

    x-media(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} Conus textile, una velenosa lumaca di mare

:::

---

> id: tetrahedra

### Sierpinski Tetrahedra

Esistono molte varianti del triangolo Sierpinski e altri frattali con proprietà e processi di creazione simili. Alcuni sembrano bidimensionali, come il _Sierpinski Carpet_ che hai visto sopra. Altri sembrano tridimensionali, come questi esempi:

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski Tetrahedra

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Piramide di Sierpinski

:::

---

## The Mandelbrot Set

> section: mandelbrot
> id: iteration
> goals: move-1 move-2

Tutti i frattali che abbiamo visto nei capitoli precedenti sono stati creati usando un processo di __iterazione__: inizi con uno schema specifico e poi lo ripeti più e più volte.

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

Questo è simile a un altro concetto in matematica che hai visto prima: con [sequenze ricorsive](gloss:sequence-recursive), inizi con un numero specifico, quindi applichi la stessa formula ricorsiva, ancora e ancora, per ottenere il numero successivo nella sequenza.

Prendiamo la formula ricorsiva `§x_n = x_(n-1)^2` come esempio e tracciamo i suoi termini su una riga numerica. Puoi modificare il valore di `pill(x_0,"yellow","x0")`:

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

Notare come la sequenza risultante può comportarsi in modo molto diverso, a seconda del valore iniziale `x_0`:

::: column.sequence-cell(width=180 parent="padded-thin")

Se `x_0 > 1`, la sequenza [[diverge|converges]]: _{span.reveal(when="blank-0")} continua a crescere, fino all'infinito._

::: column.sequence-cell(width=180)

Se `x_0` è compreso tra -1 e 1, la sequenza [[converge|diverges]].

::: column.sequence-cell(width=180)

Se `x_0 < -1`, la sequenza [[differisce|converges]].

:::

---

> id: iteration-2

Finora non abbiamo imparato nulla di nuovo. Tuttavia, circa un secolo fa, i matematici hanno iniziato a esplorare cosa succede a queste sequenze se si usano [__numeri complessi__](gloss:complex-numbers), piuttosto che solo la linea numerica reale. Le loro scoperte furono alcuni dei risultati più sorprendenti e belli di tutta la matematica.

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### Set di Julia

Usiamo la stessa sequenza di prima, `§x_n = x_(n-1)^2`, ma sul piano complesso. Puoi spostare la posizione di `pill(x_0,"yellow","x0")`, per vedere cosa succede ai seguenti termini. Se la sequenza sembra convergere, coloriamo il punto corrispondente sul piano in _{span.pill.blue} blu_:

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

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} Come puoi vedere, la sequenza converge finché `pill(x_0,"yellow","x0")` si trova [[all'interno del cerchio unitario| outside the unit square|above the _>>>>x<<<<_-axis]] _{span.reveal(when="blank-0")} (il cerchio con raggio 1, centrato sull'origine)._

---

> id: julia-1

Ora rendiamo le cose un po 'più difficili. Anziché semplicemente quadrare il numero precedente, aggiungiamo anche una costante _{.pill.red} c_ ogni volta (che può essere qualsiasi numero complesso). In altre parole, `§x_n = x_(n-1)^2 + c`. Pensi che avremo ancora un cerchio di convergenza? Quali altre forme pensi che potremmo vedere? [Continua](btn:next)

---

> id: julia-2

In questo diagramma, puoi spostare la posizione di `pill(x_0,"yellow","x0")` e il valore di `pill(c,"red","c")`:

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

{div(slot="legend")} Sappiamo già cosa succede se [`c = 0`](action:animate(0,0)) - è lo stesso dell'esempio sopra. La convergenza della sequenza fino a quando `x_0` si trova all'interno del cerchio unitario.

{div(slot="legend")} Non appena cambiamo il valore di _c_, succede qualcosa di meraviglioso. Il cerchio si trasforma in una forma frattale altamente complessa.

{div(slot="legend")} Quando [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)), la forma si divide in infiniti piccoli elementi disposti a spirale.

::: div(slot="legend")

In alcuni casi, la sequenza non converge in un _punto singolo_, ma raggiunge un ciclo di più punti, come un triangolo. Questi cicli sono chiamati __orbite__.

I punti di colore blu indicano che la sequenza corrispondente converge o ha un'orbita (diciamo che è __delimitato__). I punti lasciati bianchi significano che la sequenza corrispondente __diverge__: non è delimitata e alla fine esplode all'infinito.

:::

{div(slot="legend")} Cos'altro puoi trovare? Dai un'occhiata agli schemi quando [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) o quando [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)). Ci sono anche alcuni valori di _c_ dove _ogni sequenza di_ diverge, quindi l'intera piana complessa rimane bianca.

:::

---

> id: julia-3

Le diverse forme che si formano colorando i numeri sono chiamate [__Julia Sets__](gloss:julia-set). Furono scoperti indipendentemente da due matematici francesi, [Gaston Julia](bio:julia) e [Pierre Fatou](bio:fatou), intorno al 1918.

A quel tempo, non c'erano computer che aiutassero a visualizzare l'aspetto dei set di Julia. Matematici come Julia e Fatou sono stati in grado di ragionare matematicamente su di loro, ma hanno sempre e solo visto schizzi grezzi e disegnati a mano su come potrebbero apparire.

Non abbiamo questo problema oggi: le immagini qui sotto sono tutte di diversi set Julia. I diversi colori indicano _quanto velocemente_ la sequenza in quel punto differisce:

::: column(width=220)

    x-media(src="images/julia-1.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.70176 – 0.3842"i"`

::: column(width=220)

    x-media(src="images/julia-2.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.4 + 0.6"i"`

::: column(width=220)

    x-media(src="images/julia-3.jpg" width=220 height=165 lightbox)

{.caption} `c = 0.285 + 0.01"i"`

:::

[Continua](btn:next)

---

> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### The Mandelbrot Set

Durante la creazione dei diversi set di Julia, potresti aver notato che c'erano alcuni valori di _c_ per i quali ogni sequenza diverge e l'intero piano complesso rimane bianco. Qualche decennio dopo Julia e Fatou, una nuova generazione di matematici ha cercato di mappare l'aspetto di queste aree.

Nell'esempio precedente, abbiamo scelto un valore fisso per `pill(c,"red","c")`, quindi abbiamo cambiato la posizione di `pill(x_0,"yellow","x0")` per colorare il piano. Ora fissiamo il valore di `pill(x_0 = 0,"yellow","x0")` e invece cambiamo il valore di `pill(c,"red","c")`.

Ancora una volta, dipingi sul piano complesso per rivelare l'area in cui le sequenze rimangono limitate. Quali forme ti aspetti di apparire?

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

Questo frattale è chiamato [__Mandelbrot Set__](gloss:mandelbrot-set) e, quando ruotato di 90 °, sembra quasi una persona, con testa, corpo e due braccia. È stato definito e disegnato per la prima volta nel 1978, in un articolo di ricerca dei matematici Robert Brooks e Peter Matelski:

    figure: x-media(src="images/mandelbrot.jpg" width=360 height=290 credit="© Princeton University Press")

Alcuni anni dopo, [Benoit Mandelbrot](bio:mandelbrot) usò i potenti computer di IBM per creare una visualizzazione molto più dettagliata del frattale, che in seguito prese il suo nome. Le prime stampe avevano un aspetto diverso da quello che si aspettava, fino a quando non si è reso conto che i tecnici che lavoravano alle stampanti stavano ripulendo la "confusione" attorno al bordo, supponendo che fosse causata da particelle di polvere o errori della stampante e non una caratteristica distintiva dei frattali ! [Continua](btn:next)

---

> id: mandel-zoom

Come tutti i frattali, possiamo "ingrandire" il set di Mandelbrot per sempre, trovando nuovi schemi su ogni scala. Qui puoi ingrandire una parte del set di Mandelbrot che si chiama __Seahorse valley__. I punti neri sono _all'interno di_ nel set di Mandelbrot, dove la sequenza è limitata. I punti colorati sono _fuori da_ l'insieme di Mandelbrot, dove la sequenza differisce, ei diversi colori indicano _con che velocità_ cresce all'infinito:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---

> id: mandel-zoom-1

Questo dispositivo di scorrimento è composto da 27 singole immagini, fino a un livello di zoom di oltre 14 quadrilioni o `2^54`. Complessivamente, ci sono voluti quasi 45 minuti per il rendering su un laptop moderno. Il set di Mandelbrot può essere creato con una sola, semplice equazione, `§x_n = x_(n-1)^2 + c`, ma è infinitamente complesso e straordinariamente bello.

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

Mentre sposti il valore di [{.pill.red} c](target:c) attorno all'insieme di Mandelbrot, potresti notare una proprietà curiosa:

* Tutte le sequenze all'interno del [corpo principale](target:bulb0) del set di Mandelbrot [[convergono|diverge|reach an orbit]] _{span.reveal(when="blank-0")} in un singolo punto._
* {.reveal(when="blank-0")} Le sequenze all'interno della [lampadina grande](target:bulb1) nella parte superiore [[raggiungono un'orbita|converge|diverge]] _{span.reveal(when="blank-1")} composta da [[3]] punti._
* {.reveal(when="blank-2")} Le sequenze in [questa lampadina più piccola](target:bulb2) hanno orbite di lunghezza [[5]].


:::

{.reveal(when="blank-3")} Ogni lampadina ha un'orbita di dimensioni diverse, con lampadine più piccole che hanno sempre più punti nelle loro orbite. Le dimensioni di queste orbite sono strettamente correlate alla __Logistic Map__, un concetto importante nella [teoria del caos](/course/chaos).

    // TODO: Generic pan+zoom (see http://mandel.gart.nz)
    // TODO: Relationship between Julia and Mandelbrot sets
    // TODO: Fibonacci Numbers in the Mandelbrot sets

---

> id: mandel-outro

::: column.grow

Bernoit Mandelbrot ha dedicato gran parte della sua vita allo studio dei frattali, così come alla matematica di _rugosità_ e _auto-somiglianza_. Il suo lavoro ha avuto applicazioni in fisica, meteorologia, neurologia, economia, geologia, ingegneria, informatica e molti altri campi.

Nel 1985, il set di Mandelbrot è apparso sulla copertina della rivista _Scientific American_, e da allora è diventato una delle forme matematiche più riconoscibili al mondo. Puoi trovarlo su magliette, video musicali e come salvaschermi ed è stato citato in molti libri e film famosi.

::: column(width=220)

    x-media(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::

---

## Curve di riempimento dello spazio

> section: space-filling
> sectionStatus: dev

{.todo} Prossimamente!



