# Cercles i Pi 

## Introducció 

> section: introduction
> id: intro
> translated: auto

::: column.grow

Mentre existeixen els humans, hem mirat al cel i hem intentat explicar la vida a la Terra utilitzant el moviment de les estrelles, els planetes i la lluna. 

Els astrònoms grecs antics van ser els primers a descobrir que tots els objectes celestials es mouen per camins regulars, anomenats __òrbites__ . Creien que aquestes òrbites són sempre circulars. Al cap i a la fi, els cercles són els “més perfectes” de totes les formes: simètrics en totes les direccions i, per tant, una elecció adequada per a l’ordre subjacent del nostre univers. 

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption} La Terra és al centre de l’ _univers ptolemaic_ . 

:::

---
> id: radius
> goals: compass

Cada punt d'un [__cercle__](gloss:circle) té la mateixa distància del centre. Això significa que es poden dibuixar amb una [brúixola](gloss:compass) : 

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

{.reveal(when="compass")} Hi ha tres mesures importants relacionades amb cercles que heu de conèixer: 

* {.reveal(when="compass" delay="1000")} El [{.pill.red.b} el radi](target:r) és la distància del centre d’un cercle a la seva vora exterior.
* {.reveal(when="compass" delay="4000")} El [{.pill.blue.b} el diàmetre](target:d) és la distància entre dos punts oposats en un cercle. Passa pel seu centre i la seva longitud és [[dues vegades | la meitat | el mateix que]] el radi.
* {.reveal(when="blank-0")} El [{.pill.green.b} la circumferència](target:c) (o perímetre) és la distància al voltant d’un cercle. 

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

Una propietat important dels cercles és que tots els cercles són [similars](gloss:similar) . Podeu demostrar que mostrant com es poden combinar tots els cercles mitjançant [traduccions](gloss:translation) i [dilacions](gloss:dilation) simplement: 

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

Pot recordar que, per a polígons similars, la relació entre els costats corresponents és sempre constant. Alguna cosa similar funciona per cercles: la relació entre la [circumferència](gloss:circle-circumference) i el [diàmetre](gloss:circle-diameter) és igual per a _tots els cercles_ . Sempre és 3.14159 ... - un misteriós número anomenat [__Pi__](gloss:pi) , que sovint s'escriu amb la lletra grega _π_ per a "p". Pi té infinitament nombres decimals que es mantenen per sempre sense cap patró específic: 

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

Aquí hi ha una roda de diàmetre 1. A mesura que “desenrotlleu” la circumferència, podeu veure que la seva longitud és exactament [[`pi`|`2 * pi`| 3]] : 

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

Per a un cercle amb diàmetre _d_ , la circumferència és `C = π × d` . De la mateixa manera, per a un cercle amb [radi](gloss:circle-radius) _r_ , la circumferència és 

{.text-center}`C =` [[`2 π r`|`π r`|`π r^2`]] . 

---
> id: nature

Els cercles són perfectament simètrics i no tenen cap "punt feble" com les cantonades d'un polígon. Aquesta és una de les raons per les quals es poden trobar a tot arreu a la natura: 

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption} Flors 

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

{.caption} Planetes 

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

{.caption} Arbres 

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

{.caption} Fruita 

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

{.caption} Bombolles de sabó 

:::

{.r} I hi ha tants altres exemples: des de l’arc de pluja fins a les ondulacions d’aigua. Es pot pensar en alguna cosa més? [Continuar](btn:next) 

---
> id: max-area
> goals: area-circle

::: column.grow

També resulta que un cercle és la forma amb l’àrea més gran per a una circumferència determinada. Per exemple, si teniu una corda de 100 \ m de longitud, podeu utilitzar-la per adjuntar l'espai més gran si formeu un cercle (en lloc d'altres formes com un rectangle o un triangle). 

A la natura, objectes com les gotes d'aigua o les bombolles d'aire poden _estalviar energia_ convertint-se en circulars o esfèrics i reduint la seva superfície. 

::: column(width=320)

    x-select.segmented
      div(data-value="0") Triangle
      div(data-value="1") Square
      div(data-value="2") Pentagon
      div(data-value="3") Circle
    svg(width=320 height=200)

{.caption} _Circumferència_ = __{.m-green} 100__ , _àrea_ = __${area}__ 

:::

---
> id: area
> goals: slider

### L’Àrea d’un Cercle 

Però, com calculem realment l’àrea d’un cercle? Provem la mateixa tècnica que vam utilitzar per [trobar l’àrea dels quadrilàters](/course/polyhedra/quadrilaterals) : tallem la forma en diverses parts diferents, i després reorganitzem-les en una forma diferent que ja coneixem l’àrea de (per exemple, un rectangle o un triangle). 

L’única diferència és que, com que els cercles són corbats, hem d’utilitzar algunes aproximacions: 

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

Aquí podeu veure un cercle dividit en ${toWord(n1)} falques Desplaceu el botó lliscant per alinear les falques en una fila. 

{.reveal(when="slider")} Si augmentem el nombre de falques a ${n1}{n1|6|6,30,2} , aquesta forma comença a semblar-se cada cop més a un [[rectangle | cercle | quadrat]] . 

{.reveal(when="blank-0")} L’alçada del rectangle és igual al [[radi | circumferència | diàmetre]] del cercle. _{span.reveal(when="blank-1")} L'amplada del rectangle és igual a la [[meitat de la circumferència | la circumferència | el doble del radi]] del cercle._ _{span.reveal(when="blank-2")} (Observeu com la meitat de les falques es troben cap avall i la meitat d’elles cap amunt.)_ 

{.reveal(when="blank-2" delay=1000)} Per tant, l’àrea total del rectangle és aproximadament `A = π r^2` . 

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

Aquí podeu veure un cercle dividit en ${toWord(n)} anells. Com abans, podeu moure el control lliscant a “desactivar” els anells. 

{.reveal(when="slider")} Si augmentem el nombre d’anells a ${n2}{n2|4|2,12,1} , aquesta forma comença a semblar-se cada vegada més a un [[triangle | rectangle | trapezi]] . 

{.reveal(when="blank-0")} L’alçada del triangle és igual al [[radi | diàmetre | circumferència]] del cercle. _{span.reveal(when="blank-1")} La base del triangle és igual a [[la circumferència | el doble del diàmetre]] del cercle._ _{span.reveal(when="blank-2")} Per tant, l’àrea total del triangle és aproximadament_ 

{.text-center.reveal(when="blank-2")}`A = 1/2 "base" × "height" = π r^2` . 

:::

---
> id: area-2

Si poguéssim utilitzar infinitament anells o falques, les aproximacions anteriors serien perfectes, i ambdues ens donen la mateixa fórmula per a l’àrea d’un cercle: 

{.text-center.r}`A = π r^2` . [Continuar](btn:next) 

---
> id: pi-approximations

### Càlcul de Pi 

Com heu vist més amunt, `π = 3.1415926…` no és un nombre sencer simple i els seus dígits decimals es mantenen per sempre sense patró de repetició. Els nombres amb aquesta propietat s’anomenen [__números irracionals__](gloss:irrational-numbers) , i vol dir que `π` no es pot expressar com a fracció simple `a/b` . 

També vol dir que mai no podem anotar _tots_ els dígits de Pi; al cap i a la fi, n’hi ha infinitament. Els matemàtics grecs i xinesos antics van calcular els primers quatre dígits decimals de Pi aproximant els cercles utilitzant polígons regulars. Observeu com, a mesura que afegiu més costats, el polígon comença a semblar [[més i més | menys | exactament]] com un cercle: 

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

El 1665, [Isaac Newton va](bio:newton) aconseguir calcular 15 dígits. Avui, podem utilitzar ordinadors potents per calcular el valor de Pi amb una precisió molt més alta. 

El registre actual és de 31,4 bilions de dígits. Un llibre imprès que contingués tots els dígits tindria aproximadament 400 \ km de gruix: és l'alçada a la qual l' [Estació Espacial Internacional](gloss:iss) orbita la Terra. 

Per descomptat, no cal recordar que molts dígits de Pi. De fet, la fracció `22/7 = 3.142…` és una gran aproximació. 

:::

---
> id: pi-sequence

Un dels mètodes per calcular Pi és utilitzar infinites seqüències de nombres. Aquí hi ha un exemple que va ser descobert per [Gottfried Wilhelm Leibniz](bio:leibniz) el 1676: 

{.text-center}`π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} A mesura que calculem cada cop més termes d’aquesta sèrie, seguint sempre el mateix patró, el resultat s’acostarà i s’acostarà a Pi. 

---
> id: pi-colours
> goals: hover

::: column.grow

Molts matemàtics creuen que Pi té una propietat encara més curiosa: que és un __nombre normal__ . Això vol dir que els dígits del 0 al 9 apareixen completament a l’atzar, com si la natura hagués rodat un dau de 10 cares infinitament moltes vegades, per determinar el valor de Pi. 

Aquí podeu veure els primers 100 dígits de Pi. Desplaceu-vos sobre algunes de les cel·les per veure com es distribueixen els dígits. 

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

Si Pi és normal, vol dir que podeu pensar en _qualsevol_ cadena de dígits i apareixerà en algun lloc dels seus dígits. Aquí podeu cercar el primer milió de dígits de Pi: contenen el vostre aniversari? 

::: .box.f-red.pi-box

#### Un milió de dígits de Pi 

    .pi-controls
      | Search for a string of digits:
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---
> id: pi-movies

Fins i tot podríem convertir un llibre sencer, com Harry Potter, en una cadena de dígits molt llarga (a = 01, b = 02, etc.). Si Pi és normal, aquesta cadena apareixerà en algun lloc dels seus dígits, però es necessitaran milions d’anys per calcular els dígits suficients per trobar-la. 

El Pi és fàcil d’entendre, però d’importància fonamental en ciències i matemàtiques. Aquesta podria ser una raó per la qual Pi s'ha popularitzat inusualment en la nostra cultura (almenys, en comparació amb altres temes de matemàtiques): 

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

Fins i tot hi ha un _dia de pi_ cada any, que o bé cau el 14 de març, perquè `pi ≈ 3.14` , o el 22 de juliol, perquè `pi ≈ 22/7` . 

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

---

## Graus i Radians 

> section: radians
> id: degrees
> translated: auto

Fins ara, en geometria, sempre hem mesurat angles en [graus](gloss:degrees) . A __{.m-red} la__ rotació __completa del cercle__ és de [[360]] º, a __{.m-green} el mig cercle__ és de [[180]] º, a __{.m-yellow} quart de cercle__ és de [[90]]°, etc. 

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

{.r} El número 360 és molt convenient perquè és divisible per tants altres nombres: 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, etc. Això significa que moltes fraccions d’un cercle també són nombres sencers. Però us heu preguntat mai d’on prové el número 360? [Continuar](btn:next) 

---
> id: babylon

::: column.grow

Tal i com passa, 360 graus són un dels conceptes més antics en matemàtiques que encara utilitzem avui en dia. Van ser desenvolupats a l’antiga Babilònia, fa més de 5000 anys! 

Aleshores, una de les aplicacions més importants de les matemàtiques era en astronomia. El _sol_ determina les quatre estacions que els agricultors han de conèixer a l’hora de conrear les collites. De la mateixa manera, la _lluna_ determina les marees, cosa important per als pescadors. La gent també estudiava les estrelles per predir el futur, o comunicar-se amb els déus. 

::: column(width=260)

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} Una tauleta babilònica per calcular `sqrt(2)`

:::

---
> id: constellations
> goals: rotate

Els astrònoms van notar que les constel·lacions visibles a una hora determinada durant la nit es desplaçaven cada dia una mica minúscul, fins que, després de aproximadament 360 dies, havien tornat a girar cap al seu punt de partida. I potser aquesta va ser la raó per la qual van dividir el cercle en 360 graus. 

    figure: .constellations
      .label.md Midnight on day ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

Per descomptat, hi ha realment 365 dies en un any (bé, 365.242199 per ser exactes), però els matemàtics babilònics van treballar amb rellotges de sol simples, i aquesta aproximació era perfectament adequada. 

També va funcionar bé amb el seu sistema de números de base-60 existent (des de llavors) `6 xx 60 = 360` ). Aquest sistema és la raó per la qual encara tenim 60 segons en un minut i 60 minuts en una hora, tot i que la majoria d’altres unitats es mesuren a la [base 10](gloss:base-10) (per exemple, 10 anys en una dècada o 100 anys en un segle). 

::: column.grow

Per a molts de nosaltres, mesurar angles en graus és una segona naturalesa: hi ha un vídeo a 360°, els patinadors poden treure 540s, i algú que canvia la seva decisió podria fer un gir de 180°. 

Però des d’un punt de vista matemàtic, l’elecció del 360 és completament arbitrària. Si visquéssim a Mart, un cercle podria tenir 670°, i un any a Júpiter té fins i tot 10.475 dies. 

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} El 540 McFlip, una rotació de 540 º 

:::

---
> id: radians

### Radians 

En lloc de dividir un cercle en un nombre de segments (com 360 graus), els matemàtics prefereixen mesurar els angles mitjançant la [circumferència](gloss:circle-circumference) d'un [__cercle unitari__](gloss:unit-circle) (un cercle amb radi 1). 

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

A [el cercle complet](action:setState(0)) té circumferència _{x-equation.small(solution="2 π" keys="+ × π" numeric)}_ . 

{.reveal(when="eqn-0")} Per a [rotació mig cercle](action:setState(1)), la distància corresponent al llarg de la circumferència és _{x-equation.small(solution="π" keys="+ × π" numeric)}_ . 

{.reveal(when="eqn-1")} Per a [gir de quart de cercle](action:setState(2)), la distància al llarg de la circumferència és _{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_ . 

{.reveal(when="eqn-2")} I així successivament: aquesta manera de mesurar els angles s'anomenen [__radians__](gloss:radians) (ho podríeu recordar com a "unitats de radi"). 

:::

---
> id: radians-conversion

Cada angle en graus té una mida equivalent en els radians. La conversió entre les dues és molt fàcil, de la mateixa manera que es pot convertir entre altres unitats com metres i quilòmetres, o Celsius i Fahrenheit: 

{.text-center} __{.m-red} 360°__ _{span.space} =_ __{.m-green} 2 _π_ rad__ 

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left}`=>`_  
__{.m-red} 1°__ _{span.space} =_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} rad__ 

::: column(width=180)

{.text-center} _{span.rotate.right}`=>`_  
__{.m-green} 1 rad__ _{span.space} =_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red}°__ 

:::

---
> id: radians-table

Podeu escriure el valor de les radianes com a múltiple de _π_ o com un número decimal únic. Podeu emplenar aquesta taula de mides d'angle equivalents en graus i radians? 

| __{.m-red} graus__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_ |
| __{.m-green} radians__ | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2 | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### Distància recorreguda 

Es pot pensar en els radians com la “distància recorreguda” al llarg de la circumferència d’un cercle d’unitat. Això és especialment útil quan es treballa amb objectes que es mouen per un camí circular. 

::: column.grow

Per exemple, l' [Estació Espacial Internacional](gloss:iss) orbita la Terra una vegada cada 1,5 \ hores. Això significa que la seva __velocitat de gir__ és [[`(2 pi)/1.5`|`1.5/(2 pi)`|`1.5 * pi`]] radians per hora. 

{.reveal(when="blank-0")} En un [cercle unitari](gloss:unit-circle) , la velocitat de gir és la mateixa que la velocitat _real_ , ja que la longitud de la circumferència és la mateixa que una rotació completa en radians (ambdues són `2pi` ). 

{.reveal(when="blank-0" delay=1000)} El radi de l’òrbita ISS és de 6800 \ km, la qual cosa significa que ha de ser _la_ velocitat _real_ de l’ISS [[`(2 pi)/1.5 xx 6800`|`(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")} = 28483 km per hora._ 

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

Podeu veure que, en aquest exemple, els radians són una unitat molt més còmoda que els graus? Un cop coneguda la velocitat de gir, només hem de multiplicar pel radi per obtenir la velocitat real. 

Aquí hi ha un altre exemple: el cotxe té rodes de radi 0,25 \ m. Si conduïu a una velocitat de 20 \ m / s, les rodes del vostre cotxe giraran a [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] radians per segon _{span.reveal(when="blank-0")} (o `80/(2pi) = 13` rotacions per segon)._ 

---
> id: radians-trig

### Trigonometria 

Per a la majoria de problemes de geometria simples, graus i radians són completament intercanviables, podeu triar quina preferiu o bé una pregunta us podria dir a quina unitat heu de respondre. Tanmateix, un cop estudieu [trigonometria](gloss:trigonometry) o [càlcul](gloss:calculus) més avançat, resulta que els radians són molt més convenients que els graus. 

::: column.grow

La majoria de les calculadores tenen un [botó especial](->.button.mode) per canviar entre graus i radians. Les funcions trigonomètriques com [__si,__](gloss:sin) [__cosinus__](gloss:cos) i angles per dur __bronzejat__ com a entrada, i les seves funcions inverses __arcsinus,__ __arccos__ i angles de retorn __arctan__ com de sortida. La configuració actual de la calculadora determina quines unitats s’utilitzen per a aquests angles. 

Proveu d'utilitzar aquesta calculadora per calcular-la 

{.text-center} pecat (30°) = [[0,5]] _{span.eqn-gap}_ cos (1°) = [[0,999]]  
pecat (30 rad) = [[-0.988]] _{span.eqn-gap}_ cos (1 rad) = [[0,54]] 

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

L’ús de radians té un avantatge especialment interessant quan s’utilitza la funció Sine. Si `θ` és doncs un angle molt reduït (inferior a 20° o 0,3 rad), doncs `sin(θ) ≈ θ` . Per exemple, 

{.text-center} pecat ( ${x}{x|0.1|0,0.5,0.05} ) `≈`${sin(x)} ... 

{.reveal(when="var-0")} Això s’anomena __aproximació d’angle petit__ , i pot simplificar molt algunes equacions que contenen funcions trigonomètriques. En el futur aprendreu molt més. 

---

## Tangents, Acords i Arcs 

> section: tangets-chords-arcs
> id: circle-parts
> translated: auto

A les seccions anteriors, heu après els noms donats a diverses parts diferents d’un cercle, com ara el centre, el radi, el diàmetre i la circumferència. Tot i així, hi ha molts elements geomètrics relacionats amb un cercle, que haurem de resoldre problemes més complexos: 

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

* {.r} A [{.red} secant](target:secant) és una línia que intersecta un cercle en dos punts. [Continuar](btn:next)
* {.r.reveal(when="next-0")} A [{.green} la corda](target:chord) és un segment de línia els extrems del qual es troben en la circumferència d'un cercle. [Continuar](btn:next)
* {.r.reveal(when="next-1")} A [{.blue} tangent](target:tangent) és una línia que toca un cercle exactament en un punt. Això s’anomena __punt de tangència__ . [Continuar](btn:next)
* {.r.reveal(when="next-2")} Un [{.yellow} l’arc](target:arc) és una secció de la circumferència d’un cercle. [Continuar](btn:next)
* {.r.reveal(when="next-3")} A [{.teal} El sector](target:sector) és una part de l’interior d’un cercle, delimitat per un _arc_ i _dos radis_ . [Continuar](btn:next)
* {.r.reveal(when="next-4")} Finalment, a [{.purple} el segment](target:segment) és una part de l’interior d’un cercle, delimitat per un _arc_ i _un acord_ . [Continuar](btn:next) 

:::

---
> id: circle-parts-1

En aquest apartat, analitzarem la relació entre tots aquests elements i provarem teoremes sobre les seves propietats. No us preocupeu de memoritzar totes les definicions per ara, sempre podeu utilitzar el [glossari](->.footer-link[data-modal=glossarym]) . 

---

### Tangents 

{.todo} PRÒXIMAMENT! 

    

---

### Acords 

{.todo} PRÒXIMAMENT! 

    

---
> id: earth-arc

### Arcs i sectors 

::: column.grow

La majoria de científics de l’antiga Grècia van coincidir que la Terra és una esfera. Hi havia moltes proves: des de vaixells que desapareixien darrere de l’horitzó al mar, fins al moviment circular de les estrelles durant la nit. 

Malauradament, ningú no sabia exactament _com_ era la Terra, fins al voltant del 200 aC, quan el matemàtic [Eratòstenes va](bio:eratosthenes) trobar una manera enginyosa de mesurar el radi de la Terra mitjançant la geometria bàsica. Tot el que necessitem és una mica més de coneixement sobre arcs i sectors d’un cercle. 

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

Com es pot veure al diagrama, an [{.red} l’arc](target:arc) és una part de la [[circumferència | diàmetre | tangent]] d’un cercle, i a [{.yellow} sector](target:sector) és una part de l’ [[interior | radi | perímetre]] d’un cercle. 

::: .reveal(when="blank-0 blank-1")

L’arc entre dos punts _A_ i _B_ s’escriu sovint com `arc(AB)` . Aquesta definició és lleugerament ambigua: hi ha una [{.purple} segon arc](target:major) que connecta _A_ i _B,_ però va a la inversa. 

El més petit dels dos arcs s’anomena __arc menor__ , i el més gran s’anomena __arc major__ . Si els punts _A_ i _B_ estan exactament oposats els dos, els dos arcs tenen la mateixa longitud i són [[semicercles | diàmetres | circumferències]] . 

:::

:::

---
> id: arcs-1

::: column.grow

Per trobar la longitud d’un arc o l’àrea d’un sector, hem de conèixer l’angle corresponent al centre del cercle: això s’anomena [{.blue} angle central](target:angle) . 

Observeu com l’arc, el sector i l’angle ocupen la _mateixa proporció_ d’un cercle complet. Per exemple, si la opció [{.blue} angle central](target:angle) és [90°](action:set90Deg()) , triga [[un quart | una meitat | un terç]] de l’a [{.teal} cercle complet](target:fangle) 

::: .reveal(when="blank-0")

Això significa que el [{.red} la longitud de l’arc](target:arc) també és `1/4` del [{.purple} la circumferència sencera](target:circ) del cercle i la [{.yellow} l’àrea del sector](target:sector) és `1/4` del [{.orange} tota la zona](target:area) del cercle. 

Podem expressar aquesta relació en una equació: 

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

Ara podem reorganitzar aquestes equacions per trobar quina sigui la variable que ens interessa. Per exemple, 

::: column(width=320 parent="padded-thin")

| [ longitud de l’arc](pill:red) | = | `"circumference" × c/360` |
|                                  | = | `2 π r × c/360` |
{.eqn-system}

::: column(width=320)

| [ àrea sectorial](pill:yellow) | = | `"circle area" × c/360` |
|                                  | = | `π r^2 × c/360` |
{.eqn-system}

:::

on _r_ és el radi del cercle i _c_ és la mida de l'angle central. 

---
> id: arcs-rad

Si l'angle central es mesura en [radiians](gloss:radians) més que en [graus](gloss:degrees) , podem fer servir les mateixes equacions, però hem de substituir 360° per [[`2 π`|`1/2 π`|`π`]] : 

::: .reveal(when="blank-0")

::: column(width=320 parent="padded-thin")

| [ longitud de l’arc](pill:red) | = | `2 π r × c/(2π)` |
| | = | `r × c` |
{.eqn-system}

::: column(width=320)

| [ àrea sectorial](pill:yellow) | = | `π r^2 × c/(2π)` |
| | = | `1/2 r^2 c` |
{.eqn-system}

:::

Observeu com les equacions es fan molt més senzilles i _π es_ cancel·la a tot arreu. Això és degut a que, com podeu recordar, la [definició de radians](/course/circles/radians#radians) és bàsicament la longitud d’un arc d’un cercle amb radi 1. 

Ara veiem com podem utilitzar arcs i sectors per calcular la circumferència de la Terra. [Continuar](btn:next) 

:::

---
> id: eratosthenes

A l’antic Egipte, la ciutat de _Swenet_ estava situada al llarg del riu Nil. Swenet era famós per un pou amb una curiosa propietat: hi va haver un moment cada any quan la llum del sol arribava al fons mateix del pou, al migdia del 21 de juny, el dia del _solstici d’estiu_ . En aquell moment precís, es va il·luminar el fons del pou, però no els seus costats, el que significa que el Sol es trobava directament a sobre del pou. 

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Els antics egipcis mesuraven llargues distàncies comptant el nombre de passos que calia caminar. 

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} Algunes fonts diuen que el "pou d'Eratòstenes" es trobava a _l'illa Elefantina_ al riu Nil. 

:::

El matemàtic [Eratòstenes](bio:eratosthenes) vivia a _Alexandria_ , a uns 800 \ km al nord de Swenet, on fou director de la Gran Biblioteca. Al centre de la ciutat d’Alexandria s’alçava un obelisc, un monument alt i estret amb una part superior en forma de piràmide. 

Eratòstenes es va adonar que al migdia del dia del solstici d’estiu, l’obelisc va tirar una ombra, el que significa que el sol _no_ estava directament a sobre. Va deduir que això era a causa de la curvatura de la Terra i es va adonar que es podia utilitzar per calcular la circumferència del nostre planeta. 

---
> id: eratosthenes-1

::: column.grow

{.r} Aquí podeu veure el pou de Swenet i l’obelisc d’Alexandria. Els raigs de sol cauen directament al pou, però toquen l’obelisc en un angle i fan una ombra. [Continuar](btn:next) 

::: .reveal(when="next-0")

Eratòstenes va mesurar que el [{.teal} l'angle](target:angle1) de l'ombra va ser de 7,2°. Això és el mateix que la [{.purple} angle central](target:angle2) del centre [{.red} arc](target:arc) d’Alexandria a Swenet, perquè [[s’alternen | vertical |]] angles [[corresponents]] 

:::

::: .reveal(when="blank-0")

Ara podem fer servir l'equació per a la longitud d'arc que hem derivat anteriorment: 

{.text-center}`pill("arc length","red","arc") / pill("circumference","blue","circ") = (input(7.2)"°") / "360°"`

:::

::: .reveal(when="blank-1")

Si reorganitzem això, trobem que la circumferència de la Terra és 

{.text-center}`pill("circumference","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`

:::

::: .reveal(when="blank-2")

Finalment, sabem que la circumferència d’un cercle és `C = 2 pi r` , així és el radi de la Terra 

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

El mesurament d’Eratòstenes va ser un dels experiments més importants de l’antiguitat. La seva estimació de la mida de la Terra era sorprenentment exacta, sobretot quan es va considerar que només tenia accés a eines de mesurament molt bàsiques. 

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

Per descomptat, pot ser difícil traduir els seus resultats originals en unitats modernes com quilòmetres. A l’antiga Grècia, la distància es va mesurar als _estadis_ (aproximadament 160 m), però no hi havia cap estàndard universal. Totes les àrees tenien una versió lleugerament diferent, i no sabem quina Eratòstenes feia servir. 

Als segles següents, els científics van intentar utilitzar altres mètodes per calcular el radi de la Terra, de vegades amb resultats molt diferents i incorrectes. 

Va ser una d’aquestes mesures incorrectes que va impulsar a Cristòfor Colom a navegar a l’oest des de Portugal. Va suposar que la Terra era molt més petita del que és realment i esperava arribar a l'Índia. De fet, va arribar a un continent diferent entremig: les Amèriques. 

:::

---

### Segments 

{.todo} PRÒXIMAMENT! 

---

## Els teoremes del cercle 

> section: circle-theorems
> sectionStatus: dev

TODO

---

## Polígons cíclics 

> sectionStatus: dev
> section: cyclic-polygons

TODO

---

## Esferes, cons i cilindres 

> section: spheres-cones-cylinders
> id: solids
> translated: auto

En els apartats anteriors, es van estudiar les propietats dels cercles en una superfície plana. Però el nostre món és realment tridimensional, de manera que anem a fer una ullada a alguns sòlids 3D basats en cercles: 

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} Un [__cilindre__](gloss:cylinder) consta de dos cercles paral·lels congruents i units per una superfície corba. 

::: column(width=220)

    x-solid(size=220)

{.text-center} Un [__con__](gloss:cone) té una base circular que s’uneix a un sol punt (anomenat vèrtex). 

::: column(width=220)

    x-solid(size=220 static)

{.text-center} Cada punt de la superfície d’una [__esfera__](gloss:sphere) té la mateixa distància del centre. 

:::

Observeu com la definició d’una esfera és gairebé la mateixa que la definició d’un [[cercle | radi | cub]] , excepte en tres dimensions. 

---
> id: gasometer

### Cilindres 

::: column.grow

Aquí podeu veure el _gasòmetre_ cilíndric a Oberhausen, Alemanya. Solia emmagatzemar gas natural que s'utilitzava com a combustible en fàbriques i centrals properes. El gasòmetre fa 120 m d'altura i la base i el sostre són dos grans cercles amb un radi de 35 m. Hi ha dues preguntes importants que els enginyers poden voler respondre: 

* Quant gas natural es pot emmagatzemar? Aquest és el [[volum | àrea | diàmetre]] del cilindre.
* {.reveal(when="blank-0")} Quanta quantitat d'acer es necessita per construir el gasòmetre? Aquesta és (aproximadament) la [[superfície | circumferència | diagonal]] del cilindre. 

{.reveal(when="blank-0 blank-1")} Intentem trobar fórmules per a tots dos resultats! 

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} Gasòmetre Oberhausen 

:::

---
> id: cylinder-prism

#### Volum d'un cilindre 

La part superior i inferior d’un cilindre són dos cercles congruents, anomenats __bases__ . El __{.m-blue} l'alçada _h___ d'un cilindre és la distància perpendicular entre aquestes bases i la distància __{.m-red} el radi _r___ d’un cilindre és simplement el radi de les bases circulars. 

Podem aproximar un cilindre utilitzant a ${n}{n|5|3,20,1} [__prisma__](gloss:prism) lateral. A mesura que augmenta el nombre de costats, el prisma comença a semblar cada cop més a un cilindre: 

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

Tot i que tècnicament un cilindre no és un prisma, comparteixen moltes propietats. En ambdós casos, podem trobar el volum multiplicant l’àrea del seu __{.m-red} base__ amb el seu __{.m-blue} alçada__ . Això significa que un cilindre amb radi _{.b.m-red} r_ i alçada _{.b.m-blue} h_ té volum 

{.text-center}`V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_ 

{.reveal(when="eqn-0")} Recordeu que el radi i l’altura han d’utilitzar les mateixes unitats. Per exemple, si _r_ i _h_ són tots dos en cm, el volum serà dins [[`"cm"^3`|`"cm"^2`| cm]] . 

---
> id: oblique-cylinder
> goals: slide

::: column.grow

En els exemples anteriors, les dues bases del cilindre estaven sempre _directament les unes sobre les altres_ : això s’anomena __cilindre dret__ . Si les bases no estan directament les unes sobre les altres, tenim un __cilindre oblic__ . Les bases encara són paral·leles, però els costats semblen "inclinar-se" en un angle que no sigui de 90°. 

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} La _torre inclinada de Pisa_ a Itàlia no és un cilindre oblic. 

:::

---
> id: cavalieri
> goals: slide

El volum d’un cilindre oblic resulta exactament el mateix que el d’un cilindre dret amb el mateix radi i alçada. Això es deu al [__Principi de Cavalieri__](gloss:cavalieri) , batejat amb el nom del matemàtic italià [Bonaventura Cavalieri](bio:cavalieri) : si dos sòlids tenen la mateixa àrea de secció transversal a cada altura, tindran el mateix volum. 

Imagineu que talleu un cilindre en molts discos prims. Podem lliscar aquests discs horitzontalment per obtenir un cilindre oblic. El volum dels discos individuals no canvia ja que ho fan oblic, per tant, el volum total continua sent constant: 

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::

    

---
> id: cylinder-surface

#### Superfície d’un cilindre 

::: column.grow

Per trobar la superfície d’un cilindre, l’hem de “desenrotllar” a la seva [xarxa](gloss:net) plana. Podeu provar-ho vosaltres mateixos, per exemple pelant l'etiqueta sobre una llauna d'aliments. 

Hi ha dos [[cercles | esferes | quadrats]] , un a la part superior i un a la part inferior del cilindre. El costat corbat és en realitat un gran [[rectangle | quadrat | el·lipse]] . 

* {.reveal(when="blank-0 blank-1")} Els dos cercles tenen àrea _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ .
* {.reveal(when="eqn-0")} L'altura del rectangle és _{x-equation.small(solution="h" keys=" " short-var)}_ _{span.reveal(when="eqn-1")} i l'amplada del rectangle és la mateixa que la [[circumferència | diàmetre | tangent]] dels cercles:_ _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_ . 

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

Això vol dir que la superfície total d'un cilindre amb el radi _r_ i l'alçada _h_ ve donada per 

{.text-center}`A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_ . 

---
> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

Es poden trobar cilindres a tot el món, des de llaunes de soda fins a paper higiènic o canonades d’aigua. Pot pensar en altres exemples? 

El _gasòmetre_ superior tenia un radi de 35 metres i una alçada de 120 m. Ara podem calcular que el seu volum és aproximadament de [[461.000 ± 1000]] `"m"^3` i la seva superfície és d’aproximadament [[34.080 ± 100]] `"m"^2` . 

---
> id: cone

### Cons 

::: column.grow

Un [__con__](gloss:cone) és un sòlid tridimensional que té una circular __{.m-red} base__ El seu costat "es desplaça cap a dalt", tal com es mostra al diagrama, i acaba en un sol punt anomenat el __{.m-green} vèrtex__ 

El __{.m-red} el radi__ del con és el radi de la base circular i el __{.m-blue} l'altura__ del con és la distància perpendicular de la base al vèrtex. 

Igual que altres formes que coneixíem abans, els conos són arreu del nostre voltant: cons gelats, cons de trànsit, certs sostres i fins i tot arbres de Nadal. Què més es pot pensar? 

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

#### Volum d'un con 

::: column.grow

Abans hem trobat el volum d’un cilindre aproximant-lo mitjançant un prisma. De la mateixa manera, podem trobar el volum d’un con aproximant-lo mitjançant una [__piràmide__](gloss:pyramid) . 

Aquí podeu veure a ${n}{n|5|3,18,1} -piràmide lateral. A mesura que augmenta el nombre de costats, la piràmide comença a semblar cada cop més a un con. De fet, podríem pensar en un con com una piràmide amb _infinitat de_ costats! 

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

Això també vol dir que també podem fer servir l'equació del volum: `V = 1/3 "base" × "height"` . La base d’un con és un cercle, de manera que el volum d’un con amb radi _r_ i alçada _h_ és 

{.text-center}`V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_ 

---
> id: cone-circumscribed

Observeu la similitud amb l’equació del volum d’un cilindre. Imagineu que dibuixeu un cilindre _al voltant_ del con, amb la mateixa base i alçada, a això s'anomena __cilindre circumscrit__ . Ara, el con ocuparà exactament [[un terç | la meitat | un quart]] del volum del cilindre: 

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey} Nota: podríeu pensar que infinitament molts costats diminuts com a aproximació són una mica "imprecisos". Els matemàtics van passar una bona estona intentant trobar una forma més senzilla de calcular el volum d’un con. El 1900, fins i tot, el gran matemàtic [David Hilbert](bio:hilbert) el va nomenar com un dels 23 problemes més importants que no es resolen en matemàtiques. Avui sabem que en realitat és impossible. 

---
> id: oblique-cone
> goals: slide

::: column.grow

Igual que un cilindre, el con no ha de ser “recte”. Si el vèrtex està directament sobre el centre de la base, tenim un __con dret__ . En cas contrari, l’anomenem __con oblic__ . 

Una vegada més, podem fer servir el principi de Cavalieri per demostrar que tots els cons oblics tenen el mateix volum, sempre que tinguin la mateixa base i alçada. 

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### Superfície d’un Con 

::: column.grow

Trobar la superfície d’un con és una mica més complicat. Com abans, podem desenterrar un con a la xarxa. Desplaceu el control lliscant per veure què passa: en aquest cas, obtenim un [[sector de]] cercles i un de [[cercle | segment de cercles | arc de cercle]] . 

{.reveal(when="blank-0")} Ara només hem de sumar l'àrea d'aquests dos components. El __{.m-yellow} base__ és un cercle amb radi _r_ , per la qual cosa la seva àrea és 

{.text-center.reveal(when="blank-0")}`pill(A_"Base","yellow","circle") =` _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ . 

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

El radi de __{.m-green} sector__ és la mateixa que la distància des de la vora d'un con amb el seu vèrtex. Això s’anomena el [{.pill.green.b} alçada inclinada _S_](target:s) de el con, i no la mateixa que la normal, [{.pill.blue.b} alçada _h_](target:h) . Podem trobar l'alçada inclinada mitjançant [Pitàgores](gloss:pythagoras-theorem) : 

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_ |
| `s` | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
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

El [{.pill.red} la longitud](target:arc) d' [arc](target:arc) del sector és la mateixa que la [[circumferència | diàmetre | arc]] de la [{.pill.yellow} base](target:base) : _{span.reveal(when="blank-0")}`2 π r` . Ara podem trobar l'àrea del sector mitjançant la [fórmula que](gloss:circle-sector) hem derivat en un apartat anterior:_ 

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")

| `pill(A_"Sector","green","sector")` | `=` | `pill(A_"Circle","teal","circle") × pill("arc","red","arc") / pill("circumference","teal","circumference")` |
| | `=` | _{x-equation(solution="π r sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ | 

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

Finalment, només hem de sumar l’àrea del __{.m-yellow} base__ i l'àrea del __{.m-green} sector,__ per obtenir la superfície total de són de el con: 

{.text-center}`A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ 

---
> id: sphere

### Esferes 

::: column.grow

Una [__esfera__](gloss:sphere) és un sòlid tridimensional format per tots els punts que tenen la mateixa distància d'un determinat __{.m-green} centre _C.___ Aquesta distància s'anomena el __{.m-red} radi _r___ de l’esfera. 

Es pot pensar en una esfera com un " [cercle](gloss:circle) tridimensional". Igual que un cercle, una esfera també té __{.m-blue} diàmetre _d___ , que és el [[doble | la meitat de]] la longitud del radi, així com els acords i els secants. 

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} En un [apartat anterior](/course/circles/tangets-chords-arcs#eratosthenes-1) , vau conèixer com el matemàtic grec [Eratòstenes](bio:eratosthenes) calculava el radi de la Terra utilitzant l’ombra d’un pol - era de 6.371 km. Ara, anem a buscar el volum i la superfície total de la Terra. [Continuar](btn:next) 

---
> id: sphere-volume

#### Volum d'una esfera 

Per trobar el volum d’una esfera, hem de tornar a utilitzar el Principi de Cavalieri. Comencem amb un hemisferi: una esfera tallada per la meitat al llarg de l'equador. També necessitem un cilindre amb el mateix radi i alçada que l’hemisferi, però amb un con invertit “retallat” al centre. 

A mesura que moveu el control lliscant a sota, podeu veure la secció transversal de totes dues formes a una alçada específica per sobre de la base: 

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

{.reveal(when="slider-0")} Intentem trobar l’àrea de secció transversal d’aquests dos sòlids a distància [{.pill.blue} alçada _h per_](target:h) sobre de la base. 

::: column.grow

{.reveal(when="slider-0")} La secció transversal de l’hemisferi sempre és un [[cercle | anell | cilindre]] . 

{.reveal(when="blank-0")} El [{.pill.red} El radi _x_](target:x) de la secció transversal forma part de a [{.pill.yellow} triangle amb angle recte](target:tri) , de manera que podem fer servir [Pitàgores](gloss:pythagoras-theorem) : 

::: .reveal(when="blank-0")

{.text-center}`pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")` . 

Ara, l’àrea de la secció transversal és 

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)

:::

::: column.grow.reveal(when="eqn-0")

La secció transversal del cilindre tallat és sempre un [[anell | cercle | con]] . 

::: .reveal(when="blank-1")

El radi del forat és _h_ . Podem trobar la zona de l’anell restant l’àrea del forat de la zona del cercle més gran: 

| _A_ | = | `π r^2 - π h^2` |
| | = | `π (r^2 - h^2)` |
{.eqn-system}

:::

:::

---
> id: sphere-volume-1

Sembla que tots dos sòlids tenen la mateixa zona de secció transversal a tots els nivells. Segons el principi de Cavalieri, tots dos sòlids també han de tenir el mateix [[volum | àrea de la superfície | circumferència]] ! _{span.reveal(when="blank-0")} Podem trobar el volum de l’hemisferi restant el volum del [cilindre](gloss:cylinder-volume) i el volum del [con](gloss:cone-volume) :_ 

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")

| `V_"Hemisphere"` | = | `V_"Cylinder" - V_"Cone"` |
| | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ | 

:::

---
> id: sphere-volume-2

Una esfera consta de [[dos]] hemisferis, _{span.reveal(when="blank-0")} cosa que vol dir que ha de ser el seu volum_ 

{.text-center.reveal(when="blank-0")}`V = 4/3 π r^3` . 

---
> id: earth-volume
> goals: numbers

::: column.grow

La Terra és (aproximadament) una esfera amb un radi de 6.371 \ km. Per tant, el seu volum és 

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
| | `=` | _{span.numbers} 1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} La densitat mitjana de la Terra és `5510 "kg/m"^3` . Això vol dir que la seva massa total és 

{.text-center.reveal(when="numbers")}`"Mass" = "Volume" × "Density" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} Això és un 6 seguit de 24 zeros. 

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

Si compareu les equacions del volum d’un cilindre, un con i una esfera, podríeu observar una de les relacions més satisfactòries de la geometria. Imagineu que tenim un cilindre amb la mateixa alçada que el diàmetre de la seva base. Ara podem encaixar perfectament un con i una esfera en el seu interior: 

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} Aquest con té radi `r` i alçada `2r` . El seu volum és _{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_ 

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} Aquesta esfera té radi `r` . El seu volum és _{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_ 

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} Aquest cilindre té radi `r` i alçada `2r` . El seu volum és _{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_ 

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} Observeu com, si ens [[sumem | sostreure | multiplicem]] el volum del con i l’esfera, obtenim exactament el volum del cilindre! 

---
> id: sphere-maps
> goals: move projection

#### Superfície d’una esfera 

Trobar una fórmula per a la superfície d’una esfera és molt difícil. Una de les raons és que no podem obrir ni “aplanar” la superfície d’una esfera, com abans en els cons i els cilindres. 

Aquest és un problema particular quan s’intenta crear mapes. La Terra té una superfície corbada i tridimensional, però cada mapa imprès ha de ser pla i bidimensional. Això vol dir que els geògrafs han d’enganyar: estirant o esquitxant determinades zones. 

Aquí podeu veure pocs tipus diferents de mapes, anomenats __projeccions__ . Intenta moure el quadrat vermell, i veure el que aquesta zona _en realitat_ s'assembla a un globus: 

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

Per trobar la superfície d’una esfera, podem aproximar-la de nou amb una forma diferent (per exemple, un políedre amb moltes cares. A mesura que augmenta el nombre de cares, el políedre comença a semblar cada cop més a una esfera. 

{.todo} COM ARRIBAR: Prova de la superfície de l’esfera 

    
    
    
    

---

## Seccions còniques 

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola
> translated: auto

El cercle és una de les quatre formes diferents que es poden crear mitjançant “rodanxes” a través d’un [con](gloss:cone) . Això es pot demostrar mitjançant el con de llum d’una torxa: 

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

Si apunteu la torxa verticalment cap avall, veureu un [[cercle | el·lipse | oval]] de llum. _{span.reveal(when="blank-0")} Si inclines el con, obtindràs una [__el·lipse__](gloss:ellipse) . Si l’inclines encara més, obtens una [__paràbola__](gloss:parabola) o una [__hipèrbola__](gloss:hyperbola) ._ 

---
> id: conics-2

::: column.grow

Col·lectivament, aquestes quatre formes s’anomenen [__seccions còniques__](gloss:conic-section) . Tot i que semblen molt diferents, estan estretament relacionats: de fet, es poden generar amb la mateixa equació. 

Les seccions còniques van ser estudiades per l'antic matemàtic grec [Apol·loci de Pèrga](bio:apollonius) , que també els va donar els seus noms inusuals. 

En els cursos posteriors, aprendràs molt més sobre parabolas i hiperboles. Per ara, mirem de prop l’el·lipse. 

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### Ellipses 

Una el·lipse sembla gairebé com un "cercle allargat". De fet, podríeu pensar-ho com un cercle amb _dos centres_ , que s’anomenen __punts focals__ . Igual que cada punt d'una circumferència té la mateixa distància del centre, cada punt d'una el·lipse té la mateixa _suma de distàncies_ amb els seus dos punts focals. 

Si teniu una cadena llarga connectada a dos punts fixos, podeu dibuixar una el·lipse perfecta traçant el màxim d’abast de les cadenes: 

{.todo} Properament: el·lipsi de dibuix interactiu 

---
> id: ellipses-2
> goals: v0 v1 v2 v3

Hi ha moltes altres representacions físiques de com es pot dibuixar una el·lipse: 

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

### Brbites planetàries 

::: column.grow

Es pot recordar des del principi d’aquest curs, que astrònoms grecs antics creien que la Terra es troba al centre de l’univers i que el sol, la lluna i els planetes es mouen per la Terra en òrbites circulars. 

Malauradament, l'observació astronòmica del cel no ho va afavorir. Per exemple, el sol va aparèixer més gran durant algunes parts de l’any i més petit durant d’altres. En un cercle, cada punt hauria de tenir [[el mateix | un creixent | una]] distància [[decreixent]] del seu centre. 

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} L’astrònom grec Hipparchus de Nicea 

:::

---
> id: epicycles
> goals: play

Per solucionar-ho, els astrònoms van afegir __Epicicles__ al seu model del sistema solar: els planetes es mouen en un gran cercle al voltant de la Terra, alhora que giren sobre un cercle més petit. Tot i ser molt complicat, aquest va ser el model més acceptat pel nostre univers des de fa més de 1000 anys: 

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} Aquest planeta fa ${n}{n|6|2,12,1} rotacions al voltant del cercle petit (l' __epicicle__ ) durant una rotació al voltant del cercle gran (el __deferent__ ). 

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} Un dibuix d’epicicles del segle XVI del __model geocèntric__ . La paraula grega "planetes" significa "errants". 

:::

---
> id: kepler
> goals: play

::: column.grow

Amb el pas del temps, la gent es va adonar que la Terra era només un dels molts planetes que orbitessin el sol (el __model heliocèntric__ ), però no va ser fins el 1609, quan l’astrònom [Johannes Kepler va](bio:kepler) descobrir que els planetes realment es desplacen en _òrbites el·líptiques_ . 

El sol es troba en un dels dos punts focals d’aquestes el·lipses. Els planetes s’accelereixen a mesura que s’acosten al sol i s’alenteixen a mesura que s’allunyen més. 

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

Unes dècades més tard, [Isaac Newton](bio:newton) va poder provar les observacions de Kepler mitjançant les seves lleis de [__gravetat__](gloss:gravity) recentment desenvolupades. Newton es va adonar que hi ha una força entre dues masses a l'univers, similar a l'atracció entre dos imants. 

La gravetat és el que fa que tot caigui a terra i la gravetat també és el que fa que els planetes es desplacin al voltant del sol. És només la gran velocitat a la qual es mouen els planetes, que impedeix que caiguin directament al sol. 

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

Mitjançant les lleis de Newton, es pot obtenir el camí que els objectes recorren quan es mouen sota la força de la gravetat. Resulta que els planetes es mouen a el·lipses, però altres objectes com els cometes poden viatjar per camins [parabòlics](gloss:parabola) o [hiperbòlics](gloss:hyperbola) : volen prop del sol abans de donar la volta i disparen cap a l'univers, per no tornar mai més. 

Segons la llegenda, una poma que cau va inspirar Newton a pensar en la gravetat. Va ser un dels científics més influents de tots els temps, i les seves idees van donar forma a la nostra comprensió del món durant gairebé 300 anys - fins que Albert Einstein va descobrir la relativitat el 1905. 

:::
