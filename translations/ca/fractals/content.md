# Fractals 

## Introducció 

> section: introduction
> id: intro

En observar la natura, potser haureu percebut plantes complexes com aquestes: 

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} Aquesta __falguera__ consta de moltes fulles petites que es ramifiquen en una de més gran. 

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} Aquest __bròquil romànic__ consta de [[cons]] més petits [[| cubs | esferes]] en espiral al voltant d’una més gran. 

:::

{.reveal(when="blank-0")} Inicialment, semblen formes molt complexes, però quan us hi fixeu més a prop, podreu notar que ambdues segueixen un patró relativament senzill: totes les [parts individuals](target:fractal) de les plantes semblen exactament iguals a les de tota la planta. El mateix patró es repeteix una i altra vegada a petites escales. [Continuar](btn:next) 

---
> id: fern

En matemàtiques, anomenem aquesta propietat __autosemblança__ i les formes que la tenen s'anomenen [__fractals__](gloss:fractal) . Són alguns dels objectes més bells i estranys de totes les matemàtiques. 

Per crear els nostres propis fractals, hem de començar per un senzill patró i repetir-ho una vegada i una altra a petites escales. 

::: column.grow

Un dels patrons més senzills podria ser un [{.pill.red} segment de línia](target:s1) , amb [{.pill.blue} dos segments més que es](target:s2) ramifiquen per un extrem. Si repetim aquest patró, tots dos segments blaus també tindran dues branques més als seus extrems. 

Podeu moure els [punts blaus](target:dot) per canviar la longitud i l'angle de totes les branques. A continuació, augmenteu el nombre d'iteracions mitjançant [la barra lliscant que hi ha a](->#fern-slider) continuació. 

{.reveal(when="slider-0")} Segons la posició de les branques, es poden fer patrons completament diferents, com la [falguera de](action:set(130,228,197,184)) dalt, un [arbre](action:set(160,186,200,186)) o [pentàgons imbricats](action:set(113,235,232,238)) . Què més podeu trobar? [Continuar](btn:next) 

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

Un altre famós fractal és el [__triangle de Sierpinski__](gloss:sierpinski-triangle) . En aquest cas, comencem per un gran triangle equilàter i, posteriorment, tallem repetidament triangles més petits de les parts restants. 

{.reveal(when="slider=0")} Observeu com la forma final es compon de [tres còpies idèntiques](target:x) i cadascuna d'elles està formada per còpies encara més petites de tot el triangle! Podeu continuar fent zoom al triangle per sempre, i els patrons i les formes continuaran repetint-se. 

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

Les plantes al començament d’aquest capítol _semblen_ fractals, però és clarament impossible crear fractals _veritables_ a la vida real. Si continuem repetint el mateix patró una vegada i una altra, cada cop més petita, arribaríem a cèl·lules, molècules o àtoms que ja no es poden dividir. 

Tot i això, utilitzant les matemàtiques, podem pensar en les propietats que tindrien els fractals reals, i aquestes són molt sorprenents ... [Continuar](btn:next) 

---
> id: dimension

### Mides fractals 

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

Primer, pensem en la dimensió dels fractals. Una línia té dimensió [[1]] . _{span.reveal(when="blank-0")} En escalar-la per un factor de 2, la seva longitud augmenta un factor de `2^1 = 2` . Evidentment!_ 

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

Un quadrat té dimensió [[2]]. _{span.reveal(when="blank-0")} En escalar-lo per un factor de 2, la seva àrea augmenta un factor de `2^2 =` [[4]] ._ 

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

Un cub té dimensió [[3]]. _{span.reveal(when="blank-0")} En escalar-lo per un factor de 2, el seu volum augmenta en un factor de `2^3 =` [[8]] ._ _{span.reveal(when="blank-1")} Observeu que el cub més gran de la imatge consta de 8 còpies del més petit._ 

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Ara fem un cop d’ull al triangle de Sierpinski. Si l'escalem per un factor de 2, podreu veure que la seva "àrea" augmenta un factor de [[3]] . 

{.reveal(when="blank-0")} Diguem que _d_ és la dimensió del triangle de Sierpinski. Utilitzant el mateix patró que anteriorment, obtenim `2^d = 3` . En altres paraules, _d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} ≈ 1.585 ..._ 

:::

---
> id: dimension-4

Però espera… com pot tenir una dimensió que no sigui un nombre enter? Sembla impossible, però aquesta és només una de les estranyes propietats dels fractals. De fet, això és el que dóna nom als fractals: tenen una __dimensió fraccionada__ . 

Amb cada iteració, eliminem part de l’àrea del triangle de Sierpinski. Si ho poguéssim fer infinitament moltes vegades, en realitat no hi hauria cap àrea: per això el triangle de Sierpinski es troba entre una àrea bidimensional i una línia unidimensional. 

::: .theorem

Si bé molts fractals són _autònoms_, una definició millor és que els __fractals__ són formes que no tenen una __dimensió entera__ . 

:::

[Continuar](btn:next) 

---
> id: snowflake

### El floc de neu de Koch 

Hi ha moltes formes a la natura que semblen fractals. Ja hem vist algunes plantes al començament d’aquest capítol. Altres exemples excel·lents són els flocs de neu i els cristalls de gel: 

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

Per crear el nostre propi floc de neu fractal, hem de trobar una vegada més un simple procediment que podem aplicar una i altra vegada. 

::: column.grow

Com amb el triangle de Sierpinski, comencem per un sol triangle equilàter. No obstant això, en lloc de _treure_ triangles més petits a cada pas, _afegim_ triangles més petits al llarg de la vora. La longitud lateral de cada triangle és [[`1/3`|`1/4`|`1/2`]] dels triangles del pas anterior. 

{.reveal(when="blank-0")} La forma resultant s’anomena [__floc de neu de Koch__](gloss:koch-snowflake) , batejat amb el nom del matemàtic suec [Helge von Koch](bio:koch) . Observeu, una vegada més, que [petites seccions](target:t2) de la vora del floc de neu semblen exactament igual que [les seccions més grans](target:t1) . 

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

Quan escalem un segment d’aresta del Floc de neu de Koch per un factor de 3, la seva longitud es [[quadruplica | triples | dobles]] 

{.reveal(when="blank-0")} Utilitzant la mateixa relació entre dimensions i factors d’escala que anteriorment, obtenim l’equació [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]] . _{span.reveal(when="blank-1")} Això vol dir que la dimensió del Floc de neu de Koch és `§d = log_3(4) ≈ 1.262` ._ 

:::

---
> id: koch-size

::: tab(parent="sticky")

#### Àrea _{span.check(when="blank-6")}_ 

La creació dels flocs de neu de Koch és gairebé com una [seqüència recursiva](gloss:sequence-recursive) : coneixem la forma inicial (un triangle) i sabem com passar d’un terme a l’altre (afegint més triangles a cada cantó): 

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] nous triangles 

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] nous triangles 

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]] nous triangles 

:::

{.reveal(when="blank-0 blank-1 blank-2")} Després de la primera iteració, el nombre de nous triangles afegits augmenta un factor de [[4]] a cada pas. Al mateix temps, l'àrea d'aquests nous triangles disminueix en un factor de [[9]] a cada pas. 

{.reveal(when="blank-3 blank-4")} Diguem que el [primer triangle](->#koch-0) té una àrea de 1. Llavors l’àrea total dels [tres triangles següents](->#koch-1) és `3 × 1/9 = 1/3` . Tots els passos següents formen una [[sèrie geomètrica | sèrie aritmètica | sèrie quadràtica]] , _{span.reveal(when="blank-5")} amb proporció comuna [[`4/9`|`9/4`|`4/3`]] ._ 

{.reveal(when="blank-6")} Utilitzant la fórmula per a la suma de [sèries geomètriques](gloss:geometric-series) infinites, podem calcular que l’àrea total del floc de neu de Koch és 

{.text-center.reveal(when="blank-6")}`A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")` . 

::: tab

#### Perímetre _{span.check(when="blank-9")}_ 

::: column.grow

També podem intentar calcular el perímetre del floc de neu de Koch. Com ja hem vist anteriorment, la longitud del perímetre canvia per un factor de [[`4/3`|`3/4`|`1/4`]] a cada pas. 

{.reveal(when="blank-8")} Això vol dir que, una vegada més, tenim una sèrie geomètrica, però en aquest cas [[no convergeix | convergeix a 0 | no té un primer terme]] _{span.reveal(when="blank-9")} Això vol dir que el perímetre del floc de neu de Koch és __infinitament llarg__ !_ 

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _Si això sembla contraintuïtiu, només cal recordar que multipliquem el perímetre per `§4/3` a cada pas i ho fem infinitament moltes vegades._ 

:::

---
> id: frozen

::: column.grow

És gairebé impensable que es pugui tenir una forma amb una àrea _finita_ i també una circumferència _infinita_ , però aquesta és només una de les moltes propietats inesperades dels fractals. 

Pots trobar altres maneres de crear fractals propis? [Continuar](btn:next) 

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} "La meva ànima gira en forma de fractals congelades al voltant ..." 

:::

---
> id: menger-sponge

### Esponja de Menger 

Els fractals no han de ser “plans”, com molts dels exemples anteriors. Un dels fractals més famosos que tenen aspecte tridimensional és l’ __esponja de Menger__ , batejada amb el nom del matemàtic [Karl Menger](bio:menger) que la va descriure per primera vegada el 1926. 

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

Comencem amb un cub sòlid i foradem repetidament forats cada cop més petits als seus costats. Cada nova iteració de forats té [[`1/3`|`1/2`|`1/4`]] l'amplada de la iteració anterior dels forats. 

{.reveal(when="blank-0")} A `3×3×3` el cub consta de 27 cubs més petits, però aquí hem eliminat alguns d’aquests. L’esponja de Menger consta de [[20]] còpies de si mateixes, que són 3 vegades més petites. 

{.reveal(when="blank-1")} Ara podem intentar calcular la dimensió _d_ de l’esponja de Menger tal i com ho vam fer per al floc de neu de Koch anterior. En aquest cas aconseguim `3^d = 20` , o `§d = log_3(20) ≈ 2.727` . 

:::

{.reveal(when="blank-1 slider-0")} Si imaginem retallar cada cop més forats, infinitament moltes vegades, no quedaria el volum real. És per això que el cub no és "completament" tridimensional! [Continuar](btn:next) 

---
> id: coastlines

### Litorals fractals 

Una de les característiques clau de tots els fractals que hem vist fins ara és que podeu "fer zoom" per sempre i trobar sempre nous patrons. Al voltant de 1920, el matemàtic britànic [Lewis Fry Richardson es va](bio:richardson) adonar que el mateix és cert per a la frontera o la costa de molts països. 

Comenceu amb la forma bàsica del país i, a mesura que us feu zoom, afegiu entrades de riu, badies i estuaris, després penya-segats, roques, còdols i així successivament: 

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

[Continuar](btn:next) 

---
> id: coastlines-1

::: column.grow

Aquest és un problema important quan es tracta de calcular la longitud de la frontera d’un país: com es decideix fins a quin punt podreu fer zoom i quins punts i racons incloure? 

Una manera de poder mesurar la longitud de la costa britànica, per exemple, és agafar un llarg regle, recórrer totes les platges i després sumar totes les distàncies. 

Si el regle fa ${rulers[index]}{index|0|0,8,1} km de llarg, l’hem d’utilitzar ${count} vegades, així que obtenim un litoral total de ${count} × ${rulers[index]} = ${count * rulers[index]} km. 

{.reveal(when="var-0")} Només podem seguir endavant, amb regles més i més petits, i cada cop el nostre resultat per a la longitud de la línia de costa seria una mica més llarg. Igual que el Floc de neu de Koch abans, sembla que la costa britànica és infinitament llarga! Sovint s’anomena __paradoxa de__ la __costa__ . [Continuar](btn:next) 

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---
> id: coastline-grid

Unes dècades després, el matemàtic [Benoit Mandelbrot va](bio:mandelbrot) topar amb l'obra de Richardson en un llibre de la biblioteca descatalogat, mentre treballava a IBM. Va reconèixer la seva importància, i també com es relaciona amb investigacions més recents sobre fractals i dimensions. 

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

El litoral britànic, certament, "sembla" fractal, però no és _similar a si mateix_ , com altres fractals que hem vist abans. Per trobar la seva mida, podem dibuixar-la en una graella i comptar el nombre de cel·les amb les quals s’entrecreua. 

{.r.reveal(when="slider-0")} Inicialment, hi ha __{.pill.yellow} 88__ cel·les que s’entrecreuen. Si escalem la costa amb un factor de 2, hi ha __{.pill.yellow} 197__ cel·les que s’encreuen, més del doble! [Continuar](btn:next) 

{.r.reveal(when="next-0")} La mida del litoral ha augmentat un factor de `§197/88` . Com abans, això vol dir que la dimensió del litoral és 

{.text-center.reveal(when="next-0")}`§d = log_2(197/88) ≈ 1.16`

:::

---
> id: coastline-dimension-1

Si repetim això amb quadrícules més grans, trobaríem que la dimensió del litoral britànic és aproximadament 1,21. Mandelbrot es va adonar que aquesta dimensió fractal és també una mesura de la __rugositat__ d'una forma: un concepte nou, per al qual va trobar aplicacions importants en moltes altres àrees de les matemàtiques i de la ciència. 

---
> id: nature

### Més fractals en natura i tecnologia 

Si bé els veritables fractals mai poden aparèixer a la natura, hi ha molts objectes que semblen _gairebé_ fractals. Ja hem vist plantes, flocs de neu i litorals, i en deixem alguns exemples més: 

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC" alt="Mountain range")

{.caption} Serralada a l'Àsia central 

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA" alt="River delta")

{.caption} Delta del riu Ganges a l'Índia 

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox alt="Lightning bolts")

{.caption} Els llamps 

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA" alt="Blood vessels")

{.caption} Vasos sanguinis a la retina 

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey" alt="Grand Canyon")

{.caption} Grand Canyon als EUA 

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox alt="Clouds")

{.caption} Núvols 

:::

Tots aquests objectes poden semblar completament aleatoris, però, igual que els fractals, hi ha un patró subjacent que determina com es formen. Les matemàtiques ens poden ajudar a entendre millor les formes i les fractals tenen aplicacions en camps com la medicina, la biologia, la geologia i la meteorologia. [Continuar](btn:next) 

---
> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox alt="Computer-generated fractal terrain with mountains and water")

{.caption} Terreny fractal generat per ordinador 

::: column.grow

També podem utilitzar fractals per crear “còpies” realistes de la natura, per exemple, com a paisatges i textures usades en videojocs o pel·lícules generades per ordinador. L’aigua, muntanyes i núvols d’aquesta imatge estan realitzats íntegrament per un ordinador, amb l’ajuda de fractals! 

I fins i tot podem revertir aquest procés per comprimir imatges digitals, per reduir la mida del seu fitxer. Els primers algoritmes van ser desenvolupats per Michael Barnsley i Alan Sloan a la dècada de 1980, i encara se n’investiguen de nous. 

:::

---

## El Triangle de Sierpinski 

> section: sierpinski
> id: sierpinski

::: column.grow

Un dels fractals que vam veure al capítol anterior va ser el [__triangle de Sierpinski__](gloss:sierpinski-triangle) , que rep el nom del matemàtic polonès [Wacław Sierpiński](bio:sierpinski) . Es pot crear començant per un gran triangle equilàter i, posteriorment, tallant repetidament triangles més petits fora del seu centre. 

{.r.reveal(when="slider-0")} Wacław Sierpiński va ser el primer matemàtic que va pensar en les propietats d’aquest triangle, però ha aparegut molts segles abans en obres d’art, patrons i mosaics. 

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---
> id: sierpinski-history

A continuació, es mostren alguns exemples de paviments de diferents esglésies de Roma: 

::: column(width=140 parent="padded-thin")

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire" alt="Mosaic Floor with Sierpinski Triangle")

:::

El triangle de Sierpinski apareix en una àmplia gamma d’altres àrees de les matemàtiques, i hi ha moltes maneres diferents de generar-lo. En aquest capítol, explorarem algunes d’elles! [Continuar](btn:next) 

---
> id: pascal
> goals: select

### Triangle de Pascal 

Potser recordeu el triangle de Sierpinski del nostre capítol sobre [__el triangle de Pascal__](gloss:pascals-triangle) . Es tracta d'una piràmide de números en la qual cada nombre és la suma dels dos nombres anteriors. Toqueu tots els números _parells_ del triangle que hi ha a continuació, per ressaltar-los i vegeu si noteu algun patró: 

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

El triangle de Pascal es pot continuar cap avall per sempre i el patró de Sierpinski continuarà amb triangles més i més grans. Ja podeu veure l’inici d’un triangle encara més gran, a partir de la fila 16. 

Si dues cèl·lules adjacents són divisibles per 2, la suma de la cel·la que hi ha a sota també ha de ser divisible per 2, per això només podem obtenir triangles de colors (o cel·les singulars). Per descomptat, també podem provar de pintar totes les cel·les divisibles per nombres _diferents de 2_ . Què creus que passarà en aquests casos? [Continuar](btn:next) 

---
> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Aquí podeu veure una petita versió de les primeres 128 files del triangle de Pascal. Hem destacat totes les cel·les divisibles per ${n}{n|2|2,40,1} - què observes? 

{.reveal(when="var-0")} Per a cada nombre, obtenim un patró triangular diferent al triangle de Sierpinski. El patró és particularment regular si escollim un [[nombre primer | número del triangle | Número de Fibonacci]] . _{span.reveal(when="blank-0")} Si el nombre té _molts_ factors primers _diferents_ , el patró sembla més aleatori._ 

    x-gesture(target="#pascal-large x-var" slide="100,0")

---
> id: chaos-game
> goals: point play

### El Joc del Caos 

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

Aquí podeu veure els tres vèrtexs d’un triangle equilàter. Toqueu qualsevol part de la zona grisa per crear un quart punt. 

{.r.reveal(when="point")} Juguem a un joc senzill: escollim un dels vèrtexs del triangle a l’atzar, dibuixem un segment de línia entre el nostre punt i el vèrtex i, a continuació, trobem el [{.pill.red} punt mig](target:p1) d’aquest segment. [Continuar](btn:next) 

{.r.reveal(when="next-0")} Ara repetim el procés: escollim un altre vèrtex aleatori, dibuixem el segment del nostre darrer punt i, a continuació, trobem el [{.pill.green} punt mig](target:p2) Tingueu en compte que acolorim aquests nous punts en funció del color del vèrtex del triangle que hem escollit. [Continuar](btn:next) 

{.reveal(when="next-1")} Fins ara, no ha passat res sorprenent, però mireu què passa si repetim el mateix procés moltes vegades més: 

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} Afegiu 1000 passos_ 

:::

---
> id: fractal-builder
> goals: s1 s2 shape play

Aquest procés s’anomena __Joc__ del __Caos__ . Pot ser que hi hagi uns quants punts perduts al principi, però si repetiu els mateixos passos moltes vegades, la distribució de punts comença a semblar-se exactament al triangle de Sierpinski. 

Hi ha moltes altres versions del mateix, per exemple, podríem començar per un quadrat o un pentàgon, podríem afegir regles addicionals com ara no poder seleccionar el mateix vèrtex dues vegades seguides, o podríem escollir el següent punt a proporció. un altre que `§1/2` al llarg del segment. En alguns d’aquests casos, només obtindrem una distribució aleatòria de punts, però en altres casos, revelem encara més fractals: 

    include components/chaos-game

{.reveal(when="s1 s2 play")} Heu descobert la [catifa de Sierpinski](action:carpet()) o aquest [floc de neu pentagonal a](action:snowflake()) partir de la [__proporció daurada__](gloss:golden-ratio) ? 

---
> id: cellular
> goals: sierpinski

### Automàtics mòbils 

Un __autòmat cel·lular__ és una graella formada per moltes cèl·lules individuals. Cada cèl·lula pot estar en diferents "estats" (per exemple, colors diferents), i l'estat de cada cel·la està determinat per les seves cel·les circumdants. 

En el nostre exemple, totes les cel·les poden ser blanques o negres. Comencem amb una fila que conté només un quadrat negre. A cada fila següent, el color de cada cel·la està determinat per les tres cel·les immediatament anteriors. Toqueu les vuit opcions possibles a continuació per canviar el seu color. Podeu trobar un conjunt de regles que crei un patró similar al triangle de Sierpinski? 

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} Hi ha dues opcions per a cadascuna de les vuit opcions, cosa que significa que hi ha `2^8 =` En total [[256]] regles possibles. Alguns, com la [Regla 126](action:setRule('01111110')) , semblen el triangle de Sierpinski. Altres, com la [Regla 30](action:setRule('01111000')) , semblen completament caòtics. Va ser descoberta per [Stephen Wolfram](bio:wolfram) el 1983, i els ordinadors fins i tot poden utilitzar-los per generar números aleatoris. 

---
> id: cellular-1

::: column.grow

Els autòmats cel·lulars mostren com es poden crear patrons altament complexos mitjançant regles molt simples, igual que amb els fractals. Molts processos a la natura també segueixen regles simples, però produeixen sistemes molt complexos. 

En alguns casos, això pot conduir a l’aparició de patrons que s’assemblen igualment a autòmats mòbils, per exemple els colors de la closca d’aquest caragol. 

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0" alt="Shell of a sea snail")

{.caption} Conus textile, un caragol de mar verinós 

:::

---
> id: tetrahedra

### Tetraedres de Sierpinski 

Hi ha moltes variants del triangle de Sierpinski i d'altres fractals amb propietats i processos de creació similars. Alguns tenen una mirada bidimensional, com la _catifa Sierpinski_ que heu vist més amunt. Altres semblen tridimensionals, com aquests exemples: 

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Tetraedres de Sierpinski 

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Piràmide de Sierpinski 

:::

---

## El Conjunt Mandelbrot 

> section: mandelbrot
> id: iteration
> goals: move-1 move-2

Tots els fractals que vam veure als capítols anteriors es van crear mitjançant un procés d’ __iteració__ : comenceu amb un patró específic, i després el repetiu una vegada i una altra. 

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

Això és similar a un altre concepte en matemàtiques que vau veure abans: amb [seqüències recursives](gloss:sequence-recursive) , comenceu amb un número específic, i després apliqueu una vegada i una altra la mateixa fórmula recursiva, per obtenir el següent número de la seqüència. 

Prenguem la fórmula recursiva `§x_n = x_(n-1)^2` com a exemple, i representem els seus termes en una línia numèrica. Podeu canviar el valor de `pill(x_0,"yellow","x0")` : 

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---
> id: iteration-1

Observeu com la seqüència resultant es pot comportar de manera molt diferent, segons el valor inicial `x_0` : 

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

Si `x_0 > 1` , la seqüència es [[desvia | convergeix]] : _{span.reveal(when="blank-0")} només continua creixent fins a l’infinit._ 

::: column.frame.f-blue.text-center(width=212)

Si `x_0` està entre –1 i 1, la seqüència [[convergeix | divergeix]] . 

::: column.frame.f-blue.text-center(width=212)

Si `x_0 < -1` , la seqüència es [[desvia | convergeix]] . 

:::

---
> id: iteration-2

Fins ara, no hem après res de nou. No obstant això, fa aproximadament un segle, els matemàtics van començar a explorar què passa amb aquestes seqüències si utilitzeu [__nombres complexos__](gloss:complex-numbers) , en lloc de només la línia de números reals. Els seus descobriments van ser alguns dels resultats més sorprenents i bells de tota la matemàtica. 

---
> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### Julia Sets 

Utilitzem la mateixa seqüència que abans, `§x_n = x_(n-1)^2` , però en el pla complex. Podeu moure la posició de `pill(x_0,"yellow","x0")` , per veure què passa amb els termes següents. Si la seqüència sembla que convergirà, acolorim el punt corresponent al pla endins _{span.pill.blue} blau_ : 

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

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} Com podeu veure, la seqüència convergeix sempre `pill(x_0,"yellow","x0")` es troba [[dins del cercle de la unitat | fora de la plaça d’unitat | per sobre de la _x_ -axis]] _{span.reveal(when="blank-0")} (el cercle amb el radi 1, centrat en l’origen)._ 

---
> id: julia-1

Ara posem les coses una mica més difícils. En lloc de no quadrar el número anterior, també hi afegim una constant _{.pill.red} c_ cada vegada (que pot ser qualsevol nombre complex). En altres paraules, `§x_n = x_(n-1)^2 + c` . Creus que encara obtindrem un cercle de convergència? Quines altres formes creus que podríem veure? [Continuar](btn:next) 

---
> id: julia-2

En aquest diagrama, podeu moure la posició de `pill(x_0,"yellow","x0")` així com el valor de `pill(c,"red","c")` : 

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

{div(slot="legend")} Ja sabem què passa si [`c = 0`](action:animate(0,0)) - és el mateix que a l'exemple anterior. La convergència de seqüència sempre `x_0` es troba dins del cercle d’unitat. 

{div(slot="legend")} Tan aviat com canviem el valor de _c_ , passa una cosa meravellosa. El cercle es transforma en una forma fractal molt complexa. 

{div(slot="legend")} Quan [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)) , la forma es divideix infinitament en elements diminuts disposats en espirals. 

::: div(slot="legend")

En alguns casos, la seqüència no convergeix a un _sol punt_ , sinó que arriba a un cicle de diversos punts, com un triangle. Aquests cicles s’anomenen __òrbites__ . 

Els punts de color blau signifiquen que la seqüència corresponent o bé convergeix o té una òrbita (diem que està __delimitada__ ). Els punts que es deixen blancs signifiquen que la seqüència corresponent es __desvia__ : no es limita i, finalment, creix fins a l’infinit. 

:::

{div(slot="legend")} Què més podeu trobar? Mireu els patrons quan [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) o quan [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)) . També hi ha alguns valors de _c_ on _totes les_ seqüències divergeixen, de manera que tot el pla complex roman en blanc. 

:::

---
> id: julia-3

Les diferents formes que es formen acolorint els nombres s’anomenen [__conjunts de Julia__](gloss:julia-set) . Van ser descoberts de forma independent per dos matemàtics francesos, [Gaston Julia](bio:julia) i [Pierre Fatou](bio:fatou) , cap al 1918. 

Aleshores, no hi havia ordinadors que permetessin visualitzar el que semblaven els conjunts de Julia. Matemàtics com Julia i Fatou van poder raonar sobre ells matemàticament, però només van veure esbossos encisadors i dibuixats a mà del que podrien semblar. 

Avui no tenim aquest problema: les imatges a continuació són diferents conjunts de Julia. Els diferents colors indiquen _la rapidesa_ amb què es desvia la seqüència en aquest punt: 

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

[Continuar](btn:next) 

---
> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### El Conjunt Mandelbrot 

En crear els diferents conjunts de Julia, és possible que us hagueu adonat que hi havia alguns valors de _c_ pels quals cada seqüència es desvia i que tot el pla complex roman en blanc. Unes dècades després de Julia i Fatou, una nova generació de matemàtics van intentar fer un mapa de com eren aquestes àrees. 

A l'exemple anterior, trieu un valor fix per a `pill(c,"red","c")` i després canvieu la posició de `pill(x_0,"yellow","x0")` per acolorir el pla. Ara fixem el valor de `pill(x_0 = 0,"yellow","x0")` i en canvi canvieu el valor de `pill(c,"red","c")` . 

Una vegada més, pinta sobre el pla complex per revelar la zona on resten les seqüències. Quines formes espereu que apareguin? 

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

Aquest fractal s’anomena [__conjunt Mandelbrot__](gloss:mandelbrot-set) i, quan es gira 90°, sembla gairebé una persona, amb el cap, el cos i els dos braços. Va ser definit i dibuixat per primera vegada el 1978, en un treball de recerca dels matemàtics Robert Brooks i Peter Matelski: 

    figure: x-img(src="images/printout.jpg" width=360 height=290 credit="© Princeton University Press" alt="Mandelbrot set drawing")

Pocs anys després, [Benoit Mandelbrot va](bio:mandelbrot) utilitzar els potents ordinadors d’IBM per crear una visualització molt més detallada del fractal, que després va rebre el seu nom. Les primeres impressions tenien un aspecte diferent del que esperava, fins que es va adonar que els tècnics que treballaven a les impressores netejaven la "borrosa" al voltant de la seva vora, suposant que era causada per partícules de pols o errors de la impressora i no una característica definidora dels fractals. ! [Continuar](btn:next) 

---
> id: mandel-zoom

Com tots els fractals, podem “ampliar” el conjunt de Mandelbrot per sempre, trobant nous patrons a cada escala. Aquí podeu fer zoom a una part del conjunt de Mandelbrot que s’anomena la __vall de Seahorse__ . Els punts negres es troben _dins_ del conjunt de Mandelbrot, on la seqüència està delimitada. Els punts de colors es troben _fora_ del conjunt de Mandelbrot, on la seqüència es desvia i els diferents colors indiquen _la rapidesa amb_ què creix fins a l’infinit: 

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---
> id: mandel-zoom-1

Aquest control lliscant consta de 27 imatges individuals, fins a un nivell de zoom de més de 14 quadrillions o `2^54` . En total, van trigar gairebé 45 minuts a renderitzar-se en un ordinador portàtil modern. El conjunt de Mandelbrot es pot crear amb una única equació simple, `§x_n = x_(n-1)^2 + c` , però, és infinitament complex i impressionant. 

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

A mesura que es mou el valor de [{.pill.red} c](target:c) al voltant del conjunt Mandelbrot, podríeu notar una propietat curiosa: 

* Totes les seqüències del [cos principal](target:bulb0) del conjunt Mandelbrot [[conflueixen | divergir | arribar a una òrbita]] _{span.reveal(when="blank-0")} fins a un sol punt._
* {.reveal(when="blank-0")} Les seqüències dins del [gran bulb](target:bulb1) de la part superior [[arriben a una òrbita | convergir | divergir]] _{span.reveal(when="blank-1")} format per [[3]] punts._
* {.reveal(when="blank-2")} Les seqüències d’ [aquest bulb més petit](target:bulb2) tenen òrbites de longitud [[5]] . 

:::

{.reveal(when="blank-3")} Cada bulb té una òrbita de diferent mida, i els bulbs més petits tenen cada cop més punts en les seves òrbites. La mida d’aquestes òrbites estan estretament relacionades amb el __Mapa Logístic__ , un concepte important en la [teoria del caos](/course/chaos) . 

    // TODO: Generic pan+zoom (see http://mandel.gart.nz)
    // TODO: Relationship between Julia and Mandelbrot sets
    // TODO: Fibonacci Numbers in the Mandelbrot sets

---
> id: mandel-outro

::: column.grow

Bernoit Mandelbrot va dedicar la major part de la seva vida a l’estudi dels fractals, així com a les matemàtiques de la _rugositat_ i l’ _autosemblança_ . El seu treball va tenir aplicacions en física, meteorologia, neurologia, economia, geologia, enginyeria, informàtica i molts altres camps. 

El 1985, el conjunt Mandelbrot va aparèixer a la portada de la revista _Scientific American_ , i des d’aleshores s’ha convertit en una de les formes matemàtiques més reconeixibles del món. Podeu trobar-lo en samarretes, en vídeos musicals i com a protectors de pantalla, i heu fet referència a molts llibres i pel·lícules populars. 

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American" alt="Scientific American Magazine Cover")

:::

---

## Curves d’ompliment d’espai 

> section: space-filling
> sectionStatus: dev

{.todo} Pròximament!
