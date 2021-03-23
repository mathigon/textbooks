# Frattali

## Introduzione

> section: introduction
> id: intro
> trailer: ohygDnKg5mg
> color: "#8032AD"
> level: Advanced
> next: chaos

Guardando la natura intorno a te, potresti aver notato delle piante intricate come queste:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} Questa __felce__ è composta da molte foglie che si ramificano dalla più grande alla più piccola.

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} Questo __broccolo romanesco__ è costituito da [[coni|cubi|sfere]] disposti a spirale dal più grande al più piccolo.

:::

{.reveal(when="blank-0")} Inizialmente, queste forme sembrano molto complesse, ma quando le guardi più da vicino, potresti notare che entrambe seguono uno schema relativamente semplice: tutte le [singole parti](target:fractal) della pianta assomigliano all’intera pianta in miniatura. Lo stesso modello viene ripetuto più e più volte, su scale sempre più piccole. [Continua](btn:next)

---

> id: fern

In matematica, questa proprietà si chiama __auto-somiglianza__ e queste forme sono note come [__frattali__](gloss:fractal). Rappresentano alcuni degli oggetti più belli e più bizzarri di tutta la matematica.

Per creare i frattali, dobbiamo iniziare con un modello semplice e quindi ripeterlo più e più volte, su scale sempre più piccole.

::: column.grow

Uno dei modelli più semplici potrebbe essere un [{.pill.red} segmento](target:s1), con [{.pill.blue} altri due segmenti](target:s2) che si diramano da un'estremità. Se ripetiamo questo schema, entrambi i segmenti blu avranno altri due rami alle estremità.

Puoi spostare i [punti blu](target:dot) per modificare la lunghezza e l'angolo di tutti i rami. Poi aumenta il numero di iterazioni utilizzando [la barra di scorrimento](->#fern-slider) sotto alla figura.

{.reveal(when="slider-0")} A seconda della posizione dei rami, puoi creare motivi completamente diversi - che assomigliano alla [felce](action:set(130,228,197,184)) sopra, ad un [albero](action:set(160,186,200,186)) o a dei [pentagoni nidificati](action:set(113,235,232,238)). Cos'altro puoi trovare? [Continua](btn:next)

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

Un altro frattale famoso è il [__triangolo di Sierpinski__](gloss:sierpinski-triangle). In questo caso, iniziamo con un grande triangolo equilatero, quindi lo tagliamo ripetutamente in triangoli più piccoli.

{.reveal(when="slider=0")} Nota che la forma finale è composta da [tre copie identiche di se stessa](target:x), e ognuna di queste è costituita da copie ancora più piccole dell'intero triangolo! Puoi guardare il triangolo sempre più da vicino, e notare come i motivi e le forme continuano a ripetersi.

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

Le piante all'inizio di questo capitolo _sembrano_ proprio ai frattali, ma è chiaramente impossibile creare dei _veri_ frattali nella vita reale. Se continuiamo a ripetere lo stesso schema più e più volte, in scale sempre più piccole, arriveremmo a cellule, molecole o atomi che non possono essere divisi ulteriormente.

Tuttavia, usando la matematica, possiamo riflettere sulle proprietà dei veri frattali e scoprire che sono davvero sorprendenti... [Continua](btn:next)

---
> id: dimension

### Dimensioni Frattali

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

Innanzitutto, pensiamo alla dimensione dei frattali. Una linea ha [[1]] dimensione. _{span.reveal(when="blank-0")} Quando l’ingrandiamo di un fattore 2, la sua lunghezza aumenta di un fattore `2^1 = 2`. Ovviamente!_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

Un quadrato ha [[2]] dimensioni. _{span.reveal(when="blank-0")} Quando lo ingrandiamo di un fattore 2, la sua area aumenta di un fattore `2^2 =` [[4]]._

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

Un cubo ha [[3]] dimensioni. _{span.reveal(when="blank-0")} Quando lo ingrandiamo di un fattore 2, il suo volume aumenta di un fattore di `2^3 =` [[8]]._ _{span.reveal(when="blank-1")} Nota che il cubo più grande nell'immagine è formato da 8 copie del cubo più piccolo!_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Ora diamo un'occhiata al triangolo di Sierpinski. Se lo ingrandiamo di un fattore 2, puoi vedere che la sua "area" aumenta di un fattore di [[3]].

{.reveal(when="blank-0")} Supponiamo che _d_ sia la dimensione del triangolo di Sierpinski. Usando lo stesso modello di cui sopra, otteniamo `2^d = 3`. In altre parole, _d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} ≈ 1,585…_

:::

---
> id: dimension-4

Ma aspetta... questa dimensione non è un numero intero! Sembra impossibile, ma questa è solo una delle strane proprietà dei frattali. In effetti, questo è ciò che dà il nome ai frattali: hanno una __dimensione frazionaria__.

Con ogni iterazione, rimuoviamo parte dell'area del triangolo di Sierpinski. Se potessimo farlo molte volte all'infinito, tutta l'area sarebbe rimossa: ecco perché il triangolo di Sierpinski è qualcosa tra un'area bidimensionale e una linea monodimensionale.

::: .theorem

Mentre molti frattali sono _auto-simili_, una definizione migliore è che i __frattali__ sono forme che hanno una __dimensione non intera__.

:::

[Continua](btn:next)

---

> id: snowflake

### Curva di Koch

Ci sono molte forme in natura che sembrano ai frattali. Abbiamo già visto alcune piante all'inizio di questo capitolo. Altri esempi sono i fiocchi di neve e i cristalli di ghiaccio:

::: column(width=120 parent="padded-thin")

    x-img(src="images/snow-1.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-2.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-3.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-4.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-5.jpg" width=120 height=120)

:::

---

> id: koch

Per creare il nostro fiocco di neve frattale, dobbiamo ancora una volta trovare una semplice procedura da poter applicare più e più volte.

::: column.grow

Come per il triangolo di Sierpinski, iniziamo con un singolo triangolo equilatero. Tuttavia, anziché _rimuovere_ i triangoli più piccoli ad ogni passo, li _aggiungiamo_ lungo i lati. La lunghezza del lato di ogni triangolo aggiunto è [[`1/3`|`1/4`|`1/2`]] di quella del triangolo nel passaggio precedente.

{.reveal(when="blank-0")} La forma risultante si chiama [__curva di Koch__](gloss:koch-snowflake), dal nome del matematico svedese [Helge von Koch](bio:koch). Nota, ancora una volta, che [piccole sezioni](target:t2) di un bordo del fiocco di neve sembrano esattamente alle [sezioni più grandi](target:t1).

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

Quando ingrandiamo un segmento della curva di Koch di un fattore 3, la sua lunghezza [[quadruplica|triplica|raddoppia]].

{.reveal(when="blank-0")} Usando la stessa relazione tra dimensioni e fattori di scala come sopra, otteniamo l'equazione [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]]. _{span.reveal(when="blank-1")} Ciò significa che la dimensione della curva di Koch è `§d = log_3(4) ≈ 1.262`._

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

{.reveal(when="blank-0 blank-1 blank-2")} Dopo la prima iterazione, il numero di nuovi triangoli aggiunti aumenta di un fattore [[4]] ad ogni passaggio. Allo stesso tempo, l'area di questi nuovi triangoli diminuisce di un fattore [[9]] ad ogni passo.

{.reveal(when="blank-3 blank-4")} Supponiamo che il [primo triangolo](->#koch-0) abbia un'area di 1. Quindi l'area totale dei [tre triangoli aggiunti](->#koch-1) è `3 × 1/9 = 1/3`. I seguenti passaggi formano tutti una [[serie geometrica|serie aritmetica|serie quadratica]], _{span.reveal(when="blank-5")} con rapporto comune di [[`4/9`|`9/4`|`4/3`]]._

{.reveal(when="blank-6")} Utilizzando la formula per la somma di infinite [serie geometriche](gloss:geometric-series), possiamo calcolare che l'area totale del fiocco di neve di Koch è

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`.

::: tab

#### Perimetro _{span.check(when="blank-9")}_

::: column.grow

Possiamo anche provare a calcolare il perimetro del fiocco di neve di Koch. Come abbiamo già visto prima, la lunghezza del perimetro cambia di un fattore pari a [[`4/3`|`3/4`|`1/4`]] ad ogni passo.

{.reveal(when="blank-8")} Ciò significa che, ancora una volta, abbiamo una serie geometrica, ma in questo caso [[non convergente|converge a 0|senza il primo termine]]. _{span.reveal(when="blank-9")} Ciò significa che il perimetro del fiocco di neve di Koch è in realtà __infinitamente lungo__!_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _Se questo ti sembra controintuitivo, ricorda che moltiplichiamo il perimetro di `§4/3` ad ogni passo e lo facciamo per un infinito numero di volte._

:::

---

> id: frozen

::: column.grow

È incredibile avere una forma con un'area _finita_ e un perimetro _infinito_ - ma questa è solo una delle tante proprietà inattese dei frattali.

Puoi trovare altri modi per creare i tuoi frattali? [Continua](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} "My soul is spiralling on frozen fractals all around." (Traduzione: La mia anima sta crescendo su frattali congelati tutt'intorno).

:::

---

> id: menger-sponge

### Spugna di Menger

I frattali non devono essere "piatti", come molti degli esempi sopra. Uno dei frattali più famosi che sembrano tridimensionali è la __spugna di Menger__, dal nome del matematico [Karl Menger](bio:menger) che la descrisse per la prima volta nel 1926.

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

Iniziamo con un cubo solido ed eseguiamo ripetutamente dei fori sempre più piccoli sui suoi lati. Ogni nuova iterazione ha [[`1/3`|`1/2`|`1/4`]] della larghezza della precedente.

{.reveal(when="blank-0")} Un cubo `3×3×3` è composto da 27 cubi più piccoli, ma qui ne abbiamo rimossi alcuni. La spugna di Menger è composta da [[20]] copie di se stessa, che sono 3 volte più piccole.

{.reveal(when="blank-1")} Ora possiamo provare a calcolare la dimensione _d_ della spugna di Menger, proprio come abbiamo fatto per la curva di Koch sopra. In questo caso otteniamo `3^d = 20` o `§d = log_3(20) ≈ 2.727`.

:::

{.reveal(when="blank-1")} Se immaginassi di tagliare sempre più buchi, per un numero infinito di volte, non rimarrebbe alcun volume effettivo. Ecco perché il cubo "non è proprio" tridimensionale! [Continua](btn:next)

---

> id: coastlines

### Frattali Lungo Le Coste

Una delle caratteristiche chiave di tutti i frattali che abbiamo visto finora è che puoi continuare ad “ingrandirli” e trovare sempre nuovi modelli. Intorno al 1920, il matematico britannico [Lewis Fry Richardson](bio:richardson) si rese conto che lo stesso vale per il confine o la costa di molti Paesi.

Inizi con la forma base del paese e, ingrandendo, aggiungi insenature, baie ed estuari dei fiumi, quindi singole scogliere, rocce, ciottoli e così via:

::: column(width=120 parent="padded-thin")

    x-img(src="images/coast-1.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-2.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-3.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-4.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-5.jpg" width=120 height=180)

:::

[Continua](btn:next)

---

> id: coastlines-1

::: column.grow

Questo è un problema significativo nel calcolo della lunghezza dei confini di un Paese: come si decide quanto ingrandire e quali angoli e dettagli includere?

Un modo in cui potremmo misurare la lunghezza della costa britannica, ad esempio, è quello di prendere un lungo righello, camminare lungo le spiagge e quindi sommare tutte le distanze.

Se il righello è lungo ${rulers[index]}{index|0|0,8,1} km, dobbiamo usarlo ${count} volte, quindi otteniamo una linea costiera totale di ${count} × ${rulers[index]} = ${count * rulers[index]} km.

{.reveal(when="var-0")} Possiamo semplicemente continuare, con righelli sempre più piccoli, e ogni volta il risultato della lunghezza della costa aumenterebbe un po' di più. Proprio come prima con la curva di Koch, sembra che la costa della Gran Bretagna sia infinitamente lunga! Questo è spesso chiamato __paradosso della linea costiera__. [Continua](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

Qualche decennio più tardi, il matematico [Benoit Mandelbrot](bio:mandelbrot) dell'IBM si imbatté sul lavoro di Richardson in un libro della biblioteca che era stato scartato. Riconobbe il suo significato e anche il modo in cui si collegava a ricerche più recenti su frattali e dimensioni.

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

La costa della Gran Bretagna certamente "sembra" frattale, ma non è _auto-simile_, come altri frattali che abbiamo visto prima. Per trovarne le dimensioni, possiamo disegnarla su una griglia e contare il numero di celle con cui si interseca.

{.r.reveal(when="slider-0")} Inizialmente, ci sono __{.pill.yellow} 88__ celle intersecanti. Se ingrandiamo la costa di un fattore 2, ci sono __{.pill.yellow} 197__ celle intersecanti - più del doppio! [Continua](btn:next)

{.r.reveal(when="next-0")} La dimensione della costa è aumentata di un fattore `§197/88`. Come prima, questo significa che la dimensione della costa è

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---

> id: coastline-dimension-1

Se lo ripetessimo con griglie più grandi, scopriremmo che la dimensione della costa britannica è in realtà circa 1,21. Mandelbrot capì che questa dimensione frattale è anche una misura della __rugosità__ di una forma – un nuovo concetto, che ha trovato importanti applicazioni in molte altre aree della matematica e della scienza.

---

> id: nature

### Tanti Frattali nella Natura e nella Tecnologia

Mentre i veri frattali non possono esistere in natura, ci sono molti oggetti che assomigliano _quasi_ a dei frattali. Abbiamo già visto piante, fiocchi di neve e coste, e qui ci sono altri esempi:

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption} Catena montuosa in Asia centrale

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption} Delta del fiume Gange in India

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption} Fulmine

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption} Vasi sanguigni nella retina

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption} Grand Canyon negli Stati Uniti

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption} Nuvole

:::

Tutti questi oggetti potrebbero apparire completamente casuali, ma proprio come i frattali, c'è un modello sottostante che determina come sono formati. La matematica può aiutarci a capire meglio le forme, e i frattali hanno applicazioni in vari campi, come medicina, biologia, geologia e meteorologia. [Continua](btn:next)

---

> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption} Terreno frattale generato al computer

::: column.grow

Possiamo anche usare i frattali per creare "copie" realistiche della natura, ad esempio i paesaggi e le superfici usati nei videogiochi o nei film generati al computer. L'acqua, le montagne e le nuvole in questa immagine sono realizzate interamente al computer, con l'aiuto di frattali!

E possiamo persino invertire questo processo per comprimere le immagini digitali, per ridurne le dimensioni. I primi algoritmi sono stati sviluppati da Michael Barnsley e Alan Sloan negli anni '80 e se ne stanno ancora studiando di nuovi.

:::

---

## Triangolo di Sierpinski

> section: sierpinski
> id: sierpinski

::: column.grow

Uno dei frattali che abbiamo visto nel capitolo precedente era il [__triangolo di Sierpinski__](gloss:sierpinski-triangle), dal matematico polacco [Wacław Sierpiński](bio:sierpinski). Può essere creato iniziando con un grande triangolo equilatero, quindi tagliando ripetutamente triangoli più piccoli a partire dal centro.

{.r.reveal(when="slider-0")} Wacław Sierpiński è stato il primo matematico a pensare alle proprietà di questo triangolo, ma questa figura geometrica era apparsa molti secoli prima in opere d'arte, disegni e mosaici.

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

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire")

:::

A quanto pare, il triangolo di Sierpinski appare in una vasta gamma di altre aree della matematica e ci sono molti modi diversi per generarlo. In questo capitolo, ne esploreremo alcuni! [Continua](btn:next)

---

> id: pascal
> goals: select

### Triangolo di Pascal

Potresti già ricordare il triangolo di Sierpinski dal nostro capitolo sul [__Triangolo di Pascal__](gloss:pascals-triangle). Questa è una piramide numerica in cui ogni numero è la somma dei due numeri sopra. Clicca su tutti i numeri _pari_ nel triangolo in basso, per evidenziarli – e vedi se noti uno schema:

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

Il triangolo di Pascal può essere continuato verso il basso all’infinito, e il modello di Sierpinski continuerà con triangoli sempre più grandi. Puoi già vedere l'inizio di un triangolo ancora più grande, a partire dalla riga 16.

Se due celle adiacenti sono divisibili per 2, anche la loro somma nella cella sottostante deve essere divisibile per 2, ecco perché possiamo ottenere solo triangoli colorati (o singole celle). Naturalmente, possiamo anche provare a colorare tutte le celle divisibili per numeri _diversi da 2_. Cosa pensi che succederà in quei casi? [Continua](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Qui puoi vedere una versione rimpicciolita delle prime 128 file del triangolo di Pascal. Abbiamo evidenziato tutte le celle che sono divisibili per ${n}{n|2|2,40,1} - che cosa noti?

{.reveal(when="var-0")} Per ogni numero, abbiamo un modello triangolare diverso, simile al triangolo di Sierpinski. Il modello è particolarmente regolare se scegliamo un [[numero primo|numero triangolare|numero di Fibonacci]]. Se il numero ha molti fattori primi diversi, il modello sembra più casuale.

    x-gesture(target="#pascal-large x-var" slide="100,0")

---

> id: chaos-game
> goals: point play

### Gioco del Caos

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

Qui puoi vedere i tre vertici di un triangolo equilatero. Tocca un punto qualsiasi nell'area grigia per creare un quarto punto.

{.r.reveal(when="point")} Facciamo un semplice gioco: scegliamo uno dei vertici del triangolo in modo casuale, tracciamo un segmento tra il nostro punto e il vertice, quindi troviamo il [{.pill.red} punto medio](target:p1) di quel segmento. [Continua](btn:next)

{.r.reveal(when="next-0")} Ora ripetiamo il processo: scegliamo un altro vertice casuale, disegniamo il segmento dal nostro ultimo punto e quindi troviamo il [{.pill.green} punto medio](target:p2). Nota che il colore di questi nuovi punti corrisponde al colore del vertice del triangolo che abbiamo scelto. [Continua](btn:next)

{.reveal(when="next-1")} Finora non è successo nulla di sorprendente, ma guarda cosa succede se ripetiamo lo stesso processo molte volte:

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} Aggiungi 1000 passaggi_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

Questo processo è chiamato __Gioco del Caos__. Potrebbero esserci alcuni punti vaganti all'inizio, ma se ripeti gli stessi passaggi più volte ancora, la distribuzione dei punti inizia ad assomigliare esattamente al triangolo di Sierpinski!

Ci sono molte altre versioni di questo processo – ad esempio, potremmo iniziare con un quadrato o un pentagono, potremmo aggiungere regole, come quella di non essere in grado di selezionare lo stesso vertice due volte di seguito, oppure potremmo scegliere il punto successivo con un rapporto diverso da un `§1/2` del segmento. In alcuni di questi casi, avremo solo una distribuzione casuale di punti, ma in altri casi, riveleremo ancora più frattali:

    include components/chaos-game

{.reveal(when="s1 s2 play")} Hai scoperto il [tappeto di Sierpinski](action:carpet()) o questo [fiocco di neve pentagonale](action:snowflake()) basato sul [__rapporto aureo__](gloss:golden-ratio)?

---

> id: cellular
> goals: sierpinski

### Automi Cellulari

Un __automa cellulare__ è una griglia costituita da molte singole celle. Ogni cella può trovarsi in diversi "stati" (ad esempio colori diversi) e lo stato di ogni cella è determinato dalle celle circostanti.

Nel nostro esempio, ogni cella può essere bianca o nera. Iniziamo con una riga che contiene un solo quadrato nero. In ogni riga successiva, il colore di ogni cella è determinato dalle tre celle immediatamente sopra. Tocca le otto possibili opzioni sottostanti per capovolgerne il colore: puoi trovare una serie di regole per creare uno schema simile al triangolo di Sierpinski?

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} Sono disponibili due scelte per ciascuna delle otto opzioni, il che significa che ci sono `2^8 =` [[256]] possibili regole in totale. Alcune, come la [Regola 126](action:setRule('01111110')), sembrano al triangolo di Sierpinski. Altre, come la [Regola 30](action:setRule('01111000')), sembrano completamente caotiche. Quest'ultima è stata scoperta da [Stephen Wolfram](bio:wolfram) nel 1983 e i computer possono usarla persino per generare numeri casuali!

---

> id: cellular-1

::: column.grow

Gli automi cellulari mostrano come si possano creare schemi estremamente complessi con regole molto semplici, proprio come i frattali. Anche molti processi in natura seguono regole semplici, ma producono sistemi incredibilmente complessi.

In alcuni casi, questo può portare alla comparsa di motivi che sembrano proprio agli automi cellulari, ad esempio i colori sul guscio di questa lumaca.

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} Conus textile, una lumaca di mare velenosa

:::

---

> id: tetrahedra

### Tetraedri di Sierpinski

Esistono molte varianti del triangolo di Sierpinski e altri frattali con proprietà e processi di creazione simili. Alcuni sembrano bidimensionali, come il _Tappeto di Sierpinski_ che hai visto sopra. Altri sembrano tridimensionali, come questi esempi:

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Tetraedro di Sierpinski

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Piramide di Sierpinski

:::

---

## Insieme di Mandelbrot

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

Questo è simile ad un altro concetto matematico che hai visto precedentemente: con le [sequenze ricorsive](gloss:sequence-recursive), inizi con un numero specifico, quindi applichi la stessa formula ricorsiva, molte volte, per ottenere il numero successivo nella sequenza.

Prendiamo la formula ricorsiva `§x_n = x_(n-1)^2` come esempio, e tracciamo i suoi termini su una riga numerica. Puoi modificare il valore di `pill(x_0,"yellow","x0")`:

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

Nota come la sequenza risultante può comportarsi in modo molto diverso, a seconda del valore iniziale `x_0`:

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

Se `x_0 > 1`, la sequenza [[diverge|converge]]: _{span.reveal(when="blank-0")} continua a crescere, fino all'infinito._

::: column.frame.f-blue.text-center(width=212)

Se `x_0` è compreso tra -1 e 1, la sequenza [[converge|diverge]].

::: column.frame.f-blue.text-center(width=212)

Se `x_0 < -1`, la sequenza [[diverge|converge]].

:::

---

> id: iteration-2

Finora non abbiamo imparato nulla di nuovo. Tuttavia, circa un secolo fa, i matematici hanno iniziato ad esplorare cosa succede a queste sequenze se si usano [__numeri complessi__](gloss:complex-numbers), invece della linea numerica reale. Le loro scoperte furono alcuni dei risultati più sorprendenti e belli di tutta la matematica.

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### Insieme di Julia

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
            strong.var.m-blue(:show="converges" data-display="inline") Converge!
            strong.var(:show="!converges" data-display="inline") Diverge!

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} Come puoi vedere, la sequenza converge finché `pill(x_0,"yellow","x0")` si trova [[all'interno del cerchio unitario|fuori del cerchio unitario|sopra l’asse _x_]] _{span.reveal(when="blank-0")} (il cerchio con raggio 1, centrato sull'origine)._

---

> id: julia-1

Ora rendiamo le cose un po' più difficili. Anziché calcolare semplicemente il quadrato del numero precedente, aggiungiamo anche una costante _{.pill.red} c_ (che può essere qualsiasi numero complesso). In altre parole, `§x_n = x_(n-1)^2 + c`. Pensi che avremo ancora un cerchio di convergenza? Quali altre forme pensi di poter ottenere? [Continua](btn:next)

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
            strong.var.m-blue(:show="converges" data-display="inline") Delimitato!
            strong.var(:show="!converges" data-display="inline") Diverge!

{div(slot="legend")} Sappiamo già cosa succede se [`c = 0`](action:animate(0,0)) – è lo stesso dell'esempio sopra. La convergenza della sequenza fino a quando `x_0` si trova all'interno del cerchio unitario.

{div(slot="legend")} Non appena cambiamo il valore di _c_, succede qualcosa di meraviglioso: il cerchio si trasforma in una forma frattale altamente complessa.

{div(slot="legend")} Quando [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)), la forma si divide in un’infinità di piccoli elementi disposti a spirale.

::: div(slot="legend")

In alcuni casi, la sequenza non converge in un _punto singolo_, ma raggiunge un ciclo di più punti, come un triangolo. Questi cicli sono chiamati __orbite__.

I punti di colore blu indicano che la sequenza corrispondente converge o ha un'orbita (diciamo che è __delimitata__). I punti lasciati bianchi significano che la sequenza corrispondente __diverge__: non è delimitata e alla fine esplode all'infinito.

:::

{div(slot="legend")} Cos'altro puoi trovare? Dai un'occhiata agli schemi quando [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) o quando [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)). Ci sono anche alcuni valori di _c_ dove _ogni_ sequenza diverge, quindi l'intero piano complesso rimane bianco.

:::

---
> id: julia-3

Le diverse forme che si creano colorando i numeri sono chiamate [__Insiemi di Julia__](gloss:julia-set). Furono scoperti indipendentemente da due matematici francesi, [Gaston Julia](bio:julia) e [Pierre Fatou](bio:fatou), intorno al 1918.

A quel tempo, non c'erano computer per visualizzare l'aspetto degli insiemi di Julia. Matematici come Julia e Fatou sono stati in grado di ragionare matematicamente solo con schizzi e rappresentazioni approssimative disegnate a mano.

Non abbiamo questo problema oggi: tutte le immagini qui sotto sono diversi insiemi di Julia. I diversi colori indicano _quanto velocemente_ la sequenza differisce in ogni punto:

::: column(width=220)

    x-img(src="images/julia-1.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.70176 – 0.3842"i"`

::: column(width=220)

    x-img(src="images/julia-2.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.4 + 0.6"i"`

::: column(width=220)

    x-img(src="images/julia-3.jpg" width=220 height=165 lightbox)

{.caption} `c = 0.285 + 0.01"i"`

:::

[Continua](btn:next)

---
> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### Insieme di Mandelbrot

Durante la creazione di diversi insiemi di Julia, potresti aver notato che per alcuni valori di _c_ ogni sequenza diverge e l'intero piano complesso rimane bianco. Qualche decennio dopo Julia e Fatou, una nuova generazione di matematici ha cercato di mappare l'aspetto di queste aree.

Nell'esempio precedente, abbiamo scelto un valore fisso per `pill(c,"red","c")`, quindi abbiamo cambiato la posizione di `pill(x_0,"yellow","x0")` per colorare il piano. Ora fissiamo il valore di `pill(x_0 = 0,"yellow","x0")` e invece cambiamo il valore di `pill(c,"red","c")`.

Ancora una volta, spostati sul piano complesso per rivelare l'area in cui le sequenze rimangono limitate. Quali forme ti aspetti?

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
            strong.var.m-blue(:show="converges" data-display="inline") Delimitato!
            strong.var(:show="!converges" data-display="inline") Diverge!

---
> id: mandel-history

Questo frattale è chiamato [__Insieme di Mandelbrot__](gloss:mandelbrot-set) e, quando viene ruotato di 90 °, sembra quasi ad una persona, con testa, corpo e due braccia. È stato definito e disegnato per la prima volta in un articolo scientifico del 1978 dei matematici Robert Brooks e Peter Matelski:

    figure: x-img(src="images/mandelbrot.jpg" width=360 height=290 credit="© Princeton University Press")

Alcuni anni dopo, [Benoit Mandelbrot](bio:mandelbrot) usò i potenti computer dell’IBM per creare una visualizzazione molto più dettagliata del frattale, che in seguito prese il suo nome. Le prime stampe avevano un aspetto diverso da quello che si aspettava, e poi si rese conto che i tecnici delle stampanti ripulivano la "sfocatura" attorno al bordo, supponendo che fosse causata da particelle di polvere o errori della stampante, mentre invece erano una caratteristica distintiva dei frattali! [Continua](btn:next)

---
> id: mandel-zoom

Come tutti i frattali, possiamo "ingrandire" il set di Mandelbrot all’infinito, trovando nuovi schemi su ogni scala. Qui puoi ingrandire una parte del set di Mandelbrot che si chiama __Cavalluccio Marino__. I punti neri sono _all'interno_ dell’insieme di Mandelbrot, dove la sequenza è limitata. I punti colorati sono _all'esterno_ dell'insieme di Mandelbrot, dove la sequenza diverge, e i diversi colori indicano _quanto velocemente_ cresce all'infinito:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---
> id: mandel-zoom-1

Questa barra di scorrimento è composta da 27 singole immagini, fino ad un livello di zoom di oltre 14 quadrilioni o `2^54`. Complessivamente, ci sono voluti quasi 45 minuti per il rendering su un laptop moderno. Il set di Mandelbrot può essere creato con una sola, semplice equazione, `§x_n = x_(n-1)^2 + c`, ma è infinitamente complesso e straordinariamente bello.

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

* Tutte le sequenze all'interno del [corpo principale](target:bulb0) dell’insieme di Mandelbrot [[convergono|divergono|raggiungono un’orbita]] _{span.reveal(when="blank-0")} in un singolo punto._
* {.reveal(when="blank-0")} Le sequenze all'interno di [questo cerchio grande](target:bulb1) [[formano un'orbita|convergono|divergono]] _{span.reveal(when="blank-1")} composta da [[3]] punti._
* {.reveal(when="blank-2")} Le sequenze in [questo cerchio più piccolo](target:bulb2) hanno orbite di lunghezza [[5]].

:::

{.reveal(when="blank-3")} Ogni cerchio ha un'orbita di dimensioni diverse, e i cerchi più piccoli hanno sempre più punti nelle loro orbite. Le dimensioni di queste orbite sono strettamente correlate alla __Mappa Logistica__, un concetto importante nella [Teoria del Caos](/course/chaos).

---
> id: mandel-outro

::: column.grow

Bernoit Mandelbrot ha dedicato gran parte della sua vita allo studio dei frattali, così come alla matematica di _rugosità_ e _auto-somiglianza_. Il suo lavoro ha avuto applicazioni in fisica, meteorologia, neurologia, economia, geologia, ingegneria, informatica e molti altri campi.

Nel 1985, l’insieme di Mandelbrot è apparso sulla copertina della rivista _Scientific American_, e da allora è diventato una delle forme matematiche più riconoscibili al mondo. Puoi trovarlo su magliette, video musicali e come screen saver, ed è stato citato in molti libri e film famosi.

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::

---
## Curve di Riempimento dello Spazio

> section: space-filling
> sectionStatus: dev

{.todo} Prossimamente!
