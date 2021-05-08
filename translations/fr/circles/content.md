# Cercles et Pi

## introduction

> section: introduction
> id: intro
> trailer: tBJUNvCBkLo
> color: "#5A49C9"
> level: Intermediate
> next: graph-theory

::: column.grow

Depuis que l'homme existe, nous avons regardé le ciel et essayé d'expliquer la vie sur Terre en utilisant le mouvement des étoiles, des planètes et de la lune.

Les astronomes de la Grèce antique ont été les premiers à découvrir que tous les objets célestes se déplacent sur des chemins réguliers, appelés __orbites__ . Ils pensaient que ces orbites étaient toujours circulaires. Après tout, les cercles sont les «plus parfaits» de toutes les formes : symétriques dans toutes les directions, et donc un choix approprié pour l'ordre sous-jacent de notre univers.

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption} La Terre est au centre de l' _univers ptolémaïque_ .

:::

---
> id: radius
> goals: compass

Chaque point sur un [__cercle__](gloss:circle) est la même distance du centre. Cela signifie qu'ils peuvent être dessinés à l'aide d'un [compas](gloss:compass) :

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

{.reveal(when="compass")} Il existe trois mesures importantes liées aux cercles que vous devez connaître :

* {.reveal(when="compass" delay="1000")} le [{.pill.red.b} rayon](target:r) est la distance entre le centre d'un cercle et son bord extérieur.
* {.reveal(when="compass" delay="4000")} le [{.pill.blue.b} diamètre](target:d) est la distance entre deux points opposés sur un cercle. Il passe par son centre, et sa longueur est [[deux fois | moitié | le même que]] le rayon.
* {.reveal(when="blank-0")} le [{.pill.green.b} la circonférence](target:c) (ou périmètre) est la distance autour d'un cercle.

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

Une propriété importante des cercles est que tous les cercles sont [similaires](gloss:similar) . Vous pouvez le prouver en montrant comment tous les cercles peuvent être mis en correspondance en utilisant simplement des [translations](gloss:translation) et des [dilatations](gloss:dilation) :

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

Vous vous souvenez peut-être que, pour des polygones similaires, le rapport entre les côtés correspondants est toujours constant. Quelque chose de similaire fonctionne pour les cercles : le rapport entre la [circonférence](gloss:circle-circumference) et le [diamètre](gloss:circle-diameter) est égal pour _tous les cercles_ . C'est toujours 3,14159… - un nombre mystérieux appelé [__Pi__](gloss:pi) , qui est souvent écrit comme la lettre grecque _π_ pour «p». Pi a une infinité de décimales qui durent indéfiniment sans motif spécifique :

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

Voici une roue de diamètre 1. En "déroulant" la circonférence, vous pouvez voir que sa longueur est exactement [[`pi`|`2 * pi`| 3]] :

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

Pour un cercle de diamètre _d_ , la circonférence est `C = π × d` . De même, pour un cercle de [rayon](gloss:circle-radius) _r_ , la circonférence est

{.text-center}`C =` [[`2 π r`|`π r`|`π r^2`]] .

---
> id: nature

Les cercles sont parfaitement symétriques et n'ont pas de «points faibles» comme les coins d'un polygone. C'est l'une des raisons pour lesquelles ils peuvent être trouvés partout dans la nature :

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption} Fleurs

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

{.caption} Planètes

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

{.caption} Des arbres

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

{.caption} Fruit

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

{.caption} Des bulles de savon

:::

{.r} Et il y a tellement d'autres exemples : des arcs-en-ciel aux ondulations d'eau. Peux-tu penser en trouver d'autres ? [Continuer](btn:next)

---
> id: max-area
> goals: area-circle

::: column.grow

Il s'avère également qu'un cercle est la forme ayant la plus grande surface pour une circonférence donnée. Par exemple, si vous avez une corde d'une longueur de 100 \ m, vous pouvez l'utiliser pour enfermer le plus grand espace si vous formez un cercle (plutôt que d'autres formes comme un rectangle ou un triangle).

Dans la nature, des objets comme des gouttes d'eau ou des bulles d'air peuvent _économiser de l'énergie_ en devenant circulaires ou sphériques et en réduisant leur surface.

::: column(width=320)

    x-select.segmented
      div(data-value="0") Triangle
      div(data-value="1") Square
      div(data-value="2") Pentagon
      div(data-value="3") Circle
    svg(width=320 height=200)

{.caption} _Circonférence_ = __{.m-green} 100__ , _superficie_ = __${area}__

:::

---
> id: area
> goals: slider

### L'aire d'un cercle

Mais comment calculer réellement l'aire d'un cercle? Essayons la même technique que nous avons utilisée pour [trouver l'aire des quadrilatères](/course/polyhedra/quadrilaterals) : nous coupons la forme en plusieurs parties différentes, puis les réorganisons dans une forme différente dont nous connaissons déjà l'aire (par exemple un rectangle ou un triangle).

La seule différence est que, comme les cercles sont courbes, nous devons utiliser quelques approximations :

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

Ici, vous pouvez voir un cercle divisé en ${toWord(n1)} coins. Déplacez le curseur pour aligner les coins sur une rangée.

{.reveal(when="slider")} Si nous augmentons le nombre de coins à ${n1}{n1|6|6,30,2} , cette forme commence à ressembler de plus en plus à un [[rectangle | cercle | carré]] .

{.reveal(when="blank-0")} La hauteur du rectangle est égale au [[rayon | circonférence | diamètre]] du cercle. _{span.reveal(when="blank-1")} La largeur du rectangle est égale à la [[moitié de la circonférence | la circonférence | deux fois le rayon]] du cercle._ _{span.reveal(when="blank-2")} (Remarquez comment la moitié des coins face vers le bas et la moitié d'entre eux face vers le haut.)_

{.reveal(when="blank-2" delay=1000)} Par conséquent, l'aire totale du rectangle est d'environ `A = π r^2` .

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

Ici, vous pouvez voir un cercle divisé en ${toWord(n)} anneaux. Comme précédemment, vous pouvez déplacer le curseur pour «dérouler» les anneaux.

{.reveal(when="slider")} Si nous augmentons le nombre d'anneaux à ${n2}{n2|4|2,12,1} , cette forme ressemble de plus en plus à un [[triangle | rectangle | trapèze]] .

{.reveal(when="blank-0")} La hauteur du triangle est égale au [[rayon | diamètre | circonférence]] du cercle. _{span.reveal(when="blank-1")} La base du triangle est égale à [[la circonférence | deux fois le diamètre]] du cercle._ _{span.reveal(when="blank-2")} Par conséquent, l'aire totale du triangle est d'environ_

{.text-center.reveal(when="blank-2")}`A = 1/2 "base" × "height" = π r^2` .

:::

---
> id: area-2

Si nous pouvions utiliser une infinité d'anneaux ou de coins, les approximations ci-dessus seraient parfaites - et elles nous donnent toutes les deux la même formule pour l'aire d'un cercle :

{.text-center.r}`A = π r^2` . [Continuer](btn:next)

---
> id: pi-approximations

### Calcul de Pi

Comme vous l'avez vu ci-dessus, `π = 3.1415926…` n'est pas un simple entier, et ses chiffres décimaux continuent indéfiniment, sans motif répétitif. Les nombres avec cette propriété sont appelés [__nombres irrationnels__](gloss:irrational-numbers) , ce qui signifie que `π` ne peut pas être exprimé comme une simple fraction `a/b` .

Cela signifie également que nous ne pouvons jamais écrire _tous_ les chiffres de Pi - après tout, ils sont infiniment nombreux. Les mathématiciens anciens grecs et chinois ont calculé les quatre premiers chiffres décimaux de Pi en approximant les cercles à l'aide de polygones réguliers. Remarquez comment, lorsque vous ajoutez plus de côtés, le polygone commence à apparaître de [[plus en plus | Moins | exactement]] comme un cercle :

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

En 1665, [Isaac Newton a](bio:newton) réussi à calculer 15 chiffres. Aujourd'hui, nous pouvons utiliser des ordinateurs puissants pour calculer la valeur de Pi avec une précision beaucoup plus élevée.

Le record actuel est de 31,4 milliards de chiffres. Un livre imprimé contenant tous ces chiffres aurait une épaisseur d'environ 400 \ km - c'est la hauteur à laquelle la [Station spatiale internationale](gloss:iss) orbite autour de la Terre!

Bien sûr, vous n'avez pas besoin de vous rappeler que de nombreux chiffres de Pi. En fait, la fraction `22/7 = 3.142…` est une bonne approximation.

:::

---
> id: pi-sequence

Une approche pour calculer Pi utilise des séquences infinies de nombres. Voici un exemple qui a été découvert par [Gottfried Wilhelm Leibniz](bio:leibniz) en 1676:

{.text-center}`π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} Comme nous calculons de plus en plus de termes de cette série, toujours en suivant le même schéma, le résultat se rapprochera de plus en plus de Pi.

---
> id: pi-colours
> goals: hover

::: column.grow

De nombreux mathématiciens pensent que Pi a une propriété encore plus curieuse : qu'il s'agit d'un __nombre normal__ . Cela signifie que les chiffres de 0 à 9 apparaissent complètement au hasard, comme si la nature avait lancé un dé à 10 faces infiniment de fois, pour déterminer la valeur de Pi.

Ici, vous pouvez voir les 100 premiers chiffres de Pi. Passez sur certaines cellules pour voir comment les chiffres sont répartis.

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

Si Pi est normal, cela signifie que vous pouvez penser à _n'importe quelle_ chaîne de chiffres, et il apparaîtra quelque part dans ses chiffres. Ici, vous pouvez rechercher le premier million de chiffres de Pi - contiennent-ils votre anniversaire?

::: .box.f-red.pi-box

#### Un million de chiffres de Pi

    .pi-controls
      | Search for a string of digits:
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---
> id: pi-movies

Nous pourrions même convertir un livre entier, comme Harry Potter, en une très longue chaîne de chiffres (a = 01, b = 02, etc.). Si Pi est normal, cette chaîne apparaîtra quelque part dans ses chiffres - mais il faudrait des millions d'années pour calculer suffisamment de chiffres pour la trouver.

Pi est facile à comprendre, mais d'une importance fondamentale en science et en mathématiques. Cela pourrait être une raison pour laquelle Pi est devenu particulièrement populaire dans notre culture (au moins, par rapport à d'autres sujets de mathématiques):

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

Il y a même un _jour Pi_ chaque année, qui tombe soit le 14 mars, car `pi ≈ 3.14` , ou le 22 juillet, car `pi ≈ 22/7` .

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

---

## Degrés et radians

> section: radians
> id: degrees
> translated: auto

Jusqu'à présent en géométrie, nous avons toujours mesuré les angles en [degrés](gloss:degrees) . UNE __{.m-red} la__ rotation du __cercle complet__ est de [[360]]°, un __{.m-green} demi-cercle__ est de [[180]]°, un __{.m-yellow} le quart de cercle__ est de [[90]]°, etc.

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

{.r} Le nombre 360 est très pratique car il est divisible par de nombreux autres nombres : 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, etc. Cela signifie que de nombreuses fractions d'un cercle sont également des nombres entiers. Mais vous êtes-vous déjà demandé d'où vient le numéro 360? [Continuer](btn:next)

---
> id: babylon

::: column.grow

En fait, 360 degrés sont l'un des plus anciens concepts mathématiques que nous utilisons encore aujourd'hui. Ils ont été développés dans l'ancienne Babylone, il y a plus de 5000 ans!

À cette époque, l'une des applications les plus importantes des mathématiques était en astronomie. Le _soleil_ détermine les quatre saisons, que les agriculteurs doivent connaître lors de la culture. De même, la _lune_ détermine les marées, ce qui était important pour les pêcheurs. Les gens ont également étudié les étoiles pour prédire l'avenir ou pour communiquer avec les dieux.

::: column(width=260)

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} Une tablette babylonienne pour calculer `sqrt(2)`

:::

---
> id: constellations
> goals: rotate

Les astronomes ont remarqué que les constellations visibles à un moment précis de la nuit se déplaçaient un peu chaque jour - jusqu'à ce qu'après environ 360 jours, elles soient retournées à leur point de départ. Et c'est peut-être la raison pour laquelle ils ont divisé le cercle en 360 degrés.

    figure: .constellations
      .label.md Midnight on day ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

Bien sûr, il y a en fait 365 jours en un an (enfin 365.242199 pour être exact), mais les mathématiciens babyloniens ont travaillé avec de simples cadrans solaires, et cette approximation était parfaitement adéquate.

Il a également bien fonctionné avec leur système de numérotation de base 60 existant (depuis `6 xx 60 = 360` ). Ce système est la raison pour laquelle nous avons encore 60 secondes en une minute et 60 minutes en une heure - même si la plupart des autres unités sont mesurées en [base 10](gloss:base-10) (par exemple 10 ans dans une décennie ou 100 ans dans un siècle).

::: column.grow

Pour beaucoup d'entre nous, mesurer les angles en degrés est une seconde nature: il y a une vidéo à 360°, les planchistes peuvent tirer des 540, et quelqu'un qui change de décision peut faire un virage à 180°.

Mais d'un point de vue mathématique, le choix de 360 est complètement arbitraire. Si nous vivions sur Mars, un cercle pourrait avoir 670°, et un an sur Jupiter a même 10 475 jours.

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} Le 540 McFlip, une rotation de 540°

:::

---
> id: radians

### Radians

Plutôt que de diviser un cercle en un certain nombre de segments (comme 360 degrés), les mathématiciens préfèrent souvent mesurer les angles en utilisant la [circonférence](gloss:circle-circumference) d'un [__cercle unitaire__](gloss:unit-circle) (un cercle de rayon 1).

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

UN [cercle complet](action:setState(0)) a une circonférence _{x-equation.small(solution="2 π" keys="+ × π" numeric)}_ .

{.reveal(when="eqn-0")} Pour une [rotation d'un demi-cercle](action:setState(1)), la distance correspondante le long de la circonférence est _{x-equation.small(solution="π" keys="+ × π" numeric)}_ .

{.reveal(when="eqn-1")} Pour une [rotation d'un quart de cercle_ , la distance le long de la circonférence est _{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}](action:setState(2)).

{.reveal(when="eqn-2")} Et ainsi de suite: cette façon de mesurer les angles est appelée [__radians__](gloss:radians) (vous pouvez vous en souvenir comme «unités de rayon»).

:::

---
> id: radians-conversion

Chaque angle en degrés a une taille équivalente en radians. La conversion entre les deux est très facile - tout comme vous pouvez convertir entre d'autres unités comme les mètres et les kilomètres, ou Celsius et Fahrenheit :

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

Vous pouvez écrire la valeur des radians soit comme un multiple de _π_ , soit comme un simple nombre décimal. Pouvez-vous remplir ce tableau des tailles d'angles équivalentes en degrés et radians?

| __{.m-red} degrés__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_ |
| __{.m-green} radians__ | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2 | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### Distance parcourue

Vous pouvez considérer les radians comme la «distance parcourue» le long de la circonférence d'un cercle unitaire. Ceci est particulièrement utile lorsque vous travaillez avec des objets qui se déplacent sur une trajectoire circulaire.

::: column.grow

Par exemple, la [Station spatiale internationale](gloss:iss) orbite autour de la Terre toutes les 1,5 heure. Cela signifie que sa __vitesse de rotation__ est [[`(2 pi)/1.5`|`1.5/(2 pi)`|`1.5 * pi`]] radians par heure.

{.reveal(when="blank-0")} Dans un [cercle unitaire](gloss:unit-circle) , la vitesse de rotation est la même que la vitesse _réelle_ , car la longueur de la circonférence est la même qu'une rotation complète en radians (les deux sont `2pi` ).

{.reveal(when="blank-0" delay=1000)} Le rayon de l'orbite de l'ISS est de 6800 \ km, ce qui signifie que la vitesse _réelle_ de l'ISS doit être [[`(2 pi)/1.5 xx 6800`|`(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")} = 28483 km par heure._

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

Pouvez-vous voir que, dans cet exemple, les radians sont une unité beaucoup plus pratique que les degrés? Une fois que nous connaissons la vitesse de rotation, nous devons simplement multiplier par le rayon pour obtenir la vitesse réelle.

Voici un autre exemple : votre voiture a des roues avec un rayon de 0,25 \ m. Si vous conduisez à une vitesse de 20 \ m / s, les roues de votre voiture tournent à [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] radians par seconde _{span.reveal(when="blank-0")} (ou `80/(2pi) = 13` tours par seconde)._

---
> id: radians-trig

### Trigonométrie

Pour la plupart des problèmes de géométrie simples, les degrés et les radians sont complètement interchangeables - vous pouvez choisir celui que vous préférez, ou une question peut vous dire dans quelle unité donner votre réponse. Cependant, une fois que vous avez étudié la [trigonométrie](gloss:trigonometry) ou le [calcul](gloss:calculus) plus avancé, il s'avère que les radians sont beaucoup plus pratiques que les degrés.

::: column.grow

La plupart des calculatrices ont un [bouton spécial](->.button.mode) pour basculer entre degrés et radians. Les fonctions trigonométriques comme [__sin__](gloss:sin) , [__cos__](gloss:cos) et __tan__ prennent des angles en entrée, et leurs fonctions inverses __arcsin__ , __arccos__ et __arctan__ renvoient des angles en sortie. Le paramètre actuel de la calculatrice détermine les unités utilisées pour ces angles.

Essayez d'utiliser cette calculatrice pour calculer que

{.text-center} sin (30°) = [[0,5]] _{span.eqn-gap}_ cos (1°) = [[0,999]]
sin (30 rad) = [[-0,988]] _{span.eqn-gap}_ cos (1 rad) = [[0,54]]

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

L'utilisation de radians présente un avantage particulièrement intéressant lors de calculs avec la fonction Sinus. Si `θ` est un très petit angle (moins de 20° ou 0,3 rad), alors `sin(θ) ≈ θ` . Par exemple,

{.text-center} sin( ${x}{x|0.1|0,0.5,0.05} ) `≈`${sin(x)} …

{.reveal(when="var-0")} C'est ce qu'on appelle l' __approximation__ aux __petits angles__ , et cela peut grandement simplifier certaines équations contenant des fonctions trigonométriques. Vous en apprendrez beaucoup plus à ce sujet à l'avenir.

---

## Tangentes, accords et arcs

> section: tangets-chords-arcs
> id: circle-parts
> translated: auto

Dans les sections précédentes, vous avez appris les noms donnés à plusieurs parties différentes d'un cercle - comme le centre, le rayon, le diamètre et la circonférence. Cependant, il existe de nombreux éléments géométriques liés à un cercle, dont nous aurons besoin pour résoudre des problèmes plus complexes :

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

* {.r} Une [{.red} sécante](target:secant) est une droite qui coupe un cercle en deux points. [Continuer](btn:next)
* {.r.reveal(when="next-0")} Une [{.green} corde](target:chord) est un segment de droite dont les extrémités se trouvent sur la circonférence d'un cercle. [Continuer](btn:next)
* {.r.reveal(when="next-1")} Une [{.blue} tangente](target:tangent) est une droite qui intersecte un cercle à exactement un point. C'est ce qu'on appelle le __point de tangence__ . [Continuer](btn:next)
* {.r.reveal(when="next-2")} Un [{.yellow} arc](target:arc) est une portion de la circonférence d'un cercle. [Continuer](btn:next)
* {.r.reveal(when="next-3")} Un [{.teal} secteur](target:sector) fait partie de l'intérieur d'un cercle, délimité par un _arc_ et _deux rayons_ . [Continuer](btn:next)
* {.r.reveal(when="next-4")} Enfin, un [{.purple} segment circulaire](target:segment) est une partie de l'intérieur d'un cercle, délimité par un _arc_ et _un accord_ . [Continuer](btn:next)

:::

---
> id: circle-parts-1

Dans cette section, nous allons examiner la relation entre tous ces éléments et prouver des théorèmes sur leurs propriétés. Ne vous inquiétez pas de mémoriser toutes les définitions pour l'instant - vous pouvez toujours utiliser le [glossaire](->.footer-link[data-modal=glossarym]) .

---

### Tangentes

{.todo} BIENTÔT DISPONIBLE!



---

### Cordes

{.todo} BIENTÔT DISPONIBLE!



---
> id: earth-arc

### Arcs et secteurs

::: column.grow

La plupart des scientifiques de la Grèce antique ont convenu que la Terre était une sphère. Il y avait beaucoup de preuves : des navires disparaissant derrière l'horizon en mer au mouvement circulaire des étoiles pendant la nuit.

Malheureusement, personne ne savait exactement _la taille de la_ Terre - jusqu'à environ 200 avant JC, lorsque le mathématicien [Ératosthène](bio:eratosthenes) a trouvé un moyen ingénieux de mesurer le rayon de la Terre, en utilisant de la géométrie élémentaire. Tout ce dont nous avons besoin, c'est d'un peu plus de connaissances sur les arcs et les secteurs d'un cercle.

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

Comme vous pouvez le voir sur le schéma, un [{.red} arc](target:arc) fait partie de la [[circonférence | diamètre | tangente]] d'un cercle, et un [{.yellow} secteur](target:sector) fait partie de l' [[intérieur | rayon | périmètre]] d'un cercle.

::: .reveal(when="blank-0 blank-1")

L'arc entre deux points _A_ et _B_ est souvent écrit comme `arc(AB)` . Cette définition est légèrement ambiguë: il existe un [{.purple} deuxième arc](target:major) qui relie _A_ et _B_ mais fait le contraire dans le cercle.

Le plus petit des deux arcs est appelé __arc mineur__ et le plus grand est appelé __arc majeur__ . Si les points _A_ et _B_ sont exactement opposés, les deux arcs ont la même longueur et sont des [[demi]] - [[cercles | diamètres | circonférences]] .

:::

:::

---
> id: arcs-1

::: column.grow

Pour trouver la longueur d'un arc ou l'aire d'un secteur, nous devons connaître l'angle correspondant au centre du cercle : c'est ce qu'on appelle l'[{.blue} angle au centre](target:angle) .

Remarquez comment l'arc, le secteur et l'angle occupent tous la _même proportion_ d'un cercle complet. Par exemple, si le [{.blue} l'angle central](target:angle) est [90°](action:set90Deg()) , il prend [[un quart | une moitié | un tiers]] d'un [{.teal} cercle complet](target:fangle) .

::: .reveal(when="blank-0")

Cela signifie que la [{.red} longueur de l'arc](target:arc) est également `1/4` de [{.purple} toute la circonférence](target:circ) du cercle, et l'aire du [{.yellow} secteur](target:sector) est `1/4` de [{.orange} l'aire totale](target:area) du cercle.

Nous pouvons exprimer cette relation dans une équation :

{.text-center}`"longueur de l'arc" / "circonférence" = blank("aire du secteur","longueur du rayon","longueur de l'arc") / "aire du cercle" = "angle au centre" / blank("360°","180°","90°")`

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

Nous pouvons maintenant réorganiser ces équations pour trouver la variable qui nous intéresse. Par exemple,

::: column(width=320 parent="padded-thin")

| [ longueur de l'arc](pill:red) | = | `"circonférence" × c/360` |
| | = | `2 π r × c/360` |
{.eqn-system}

::: column(width=320)

| [ aire du secteur](pill:yellow) | = | `"aire du cercle" × c/360` |
| | = | `π r^2 × c/360` |
{.eqn-system}

:::

où _r_ est le rayon du cercle et _c_ est la valeur de l'angle au centre.



---
> id: arcs-rad

Si l'angle au centre est mesuré en [radians](gloss:radians) plutôt qu'en [degrés](gloss:degrees) , nous pouvons utiliser les mêmes équations, mais nous devons remplacer 360° par [[`2 π`|`1/2 π`|`π`]] :

::: .reveal(when="blank-0")

::: column(width=320 parent="padded-thin")

| [ longueur de l'arc](pill:red) | = | `2 π r × c/(2π)` |
| | = | `r × c` |
{.eqn-system}

::: column(width=320)

| [ aire du secteur](pill:yellow) | = | `π r^2 × c/(2π)` |
| | = | `1/2 r^2 c` |
{.eqn-system}

:::

Remarquez comment les équations deviennent beaucoup plus simples et _π_ s'annule partout. En effet, comme vous vous en souvenez peut-être, la [définition des radians](/course/circles/radians#radians) est essentiellement la longueur d'un arc dans un cercle de rayon 1.

Voyons maintenant comment utiliser les arcs et les secteurs pour calculer la circonférence de la Terre. [Continuer](btn:next)

:::

---
> id: eratosthenes

Dans l'Égypte ancienne, la ville de _Swenet_ était située le long du Nil. Swenet était célèbre pour un puits avec une propriété curieuse : il y avait un moment chaque année où la lumière du soleil atteignait le fond du puits - à midi le 21 juin, le jour du _solstice d'été_ . À ce moment précis, le fond du puits était éclairé, mais pas ses côtés, ce qui signifie que le Soleil se tenait directement au-dessus du puits.

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Les anciens Égyptiens mesuraient les longues distances en comptant le nombre de pas qu'il fallait pour marcher.

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} Certaines sources affirment que le «puits d'Ératosthène» se trouvait sur _l'île Éléphantine_ sur le Nil.

:::

Le mathématicien [Eratosthène](bio:eratosthenes) vivait à _Alexandrie_ , à environ 800 km au nord de Swenet, où il était directeur de la Grande Bibliothèque. Dans le centre-ville d'Alexandrie se dressait un obélisque, un monument haut et étroit avec un sommet en forme de pyramide.

Ératosthène a remarqué qu'à midi, le jour du solstice d'été, l'obélisque jetait une ombre - ce qui signifie que le soleil n'était _pas_ directement au-dessus. Il en a déduit que c'était à cause de la courbure de la Terre, et a réalisé que l'ombre pouvait être utilisée pour calculer la circonférence de notre planète.

---
> id: eratosthenes-1

::: column.grow

{.r} Ici, vous pouvez voir le puits de Swenet ainsi que l'obélisque d'Alexandrie. Les rayons du soleil tombent directement dans le puits, mais frappent l'obélisque en biais et projettent une ombre. [Continuer](btn:next)

::: .reveal(when="next-0")

Ératosthène a mesuré que le [{.teal} l'angle](target:angle1) de l'ombre était de 7,2°. C'est le même que l'[{.purple} angle au centre](target:angle2) de l'[{.red} arc](target:arc) d'Alexandrie à Swenet, car les deux angles sont [[alternes-internes égaux|opposés par le sommet|complémentaires]] .

:::

::: .reveal(when="blank-0")

Maintenant, nous pouvons utiliser l'équation de la longueur d'arc que nous avons optenu ci-dessus :

{.text-center}`pill("arc","red","arc") / pill("circonférence","blue","circ") = (input(7.2)"°") / "360°"`

:::

::: .reveal(when="blank-1")

Si nous réorganisons cela, nous constatons que la circonférence de la Terre est

{.text-center}`pill("circonférence","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`

:::

::: .reveal(when="blank-2")

Enfin, nous savons que la circonférence d'un cercle est `C = 2 pi r` , donc le rayon de la Terre est

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

La mesure d'Ératosthène a été l'une des expériences les plus importantes de l'Antiquité. Son estimation de la taille de la Terre était étonnamment précise, surtout si l'on considère qu'il n'avait accès qu'à des outils de mesure très basiques.

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

Bien sûr, il peut être difficile de traduire ses résultats originaux en unités modernes comme les kilomètres. Dans la Grèce antique, la distance était mesurée en _stades_ (environ 160 m), mais il n'y avait pas de norme universelle. Chaque zone avait une version légèrement différente, et nous ne savons pas laquelle Eratosthène a utilisé.

Au cours des siècles suivants, les scientifiques ont essayé d'utiliser d'autres méthodes pour calculer le rayon de la Terre - parfois avec des résultats très différents et incorrects.

C'est l'une de ces mesures incorrectes qui a incité Christophe Colomb à naviguer vers l'ouest depuis le Portugal. Il a supposé que la Terre était beaucoup plus petite qu'elle ne l'est réellement et espérait atteindre l'Inde. En fait, il est arrivé sur un autre continent entre les deux: l'Amérique.

:::

---

### Segments

{.todo} BIENTÔT DISPONIBLE!

---

## Les théorèmes du cercle

> section: circle-theorems
> sectionStatus: dev

TODO

---

## Polygones cycliques

> sectionStatus: dev
> section: cyclic-polygons

TODO

---

## Sphères, cônes et cylindres

> section: spheres-cones-cylinders
> id: solids
> translated: auto

Dans les sections précédentes, nous avons étudié les propriétés des cercles sur une surface plane. Mais notre monde est en fait en trois dimensions, alors jetons un œil à certains solides 3D basés sur des cercles :

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} Un [__cylindre__](gloss:cylinder) se compose de deux cercles égaux, parallèles et co-axiaux reliés par une surface courbe.

::: column(width=220)

    x-solid(size=220)

{.text-center} Un [__cône__](gloss:cone) a une base circulaire qui est reliée à un seul point (appelé le sommet).

::: column(width=220)

    x-solid(size=220 static)

{.text-center} Chaque point à la surface d'une [__sphère__](gloss:sphere) est à la même distance de son centre.

:::

Remarquez comment la définition d'une sphère est presque la même que la définition d'un [[cercle | rayon | cube]] - sauf en trois dimensions!

---
> id: gasometer

### Cylindres

::: column.grow

Ici vous pouvez voir le _gazomètre_ cylindrique à Oberhausen, en Allemagne. Il stockait le gaz naturel qui était utilisé comme carburant dans les usines et les centrales électriques à proximité. Le gazomètre mesure 120 m de haut et sa base et son plafond sont deux grands cercles d'un rayon de 35 m. Les ingénieurs peuvent vouloir répondre à deux questions importantes :

* Quelle quantité de gaz naturel peut être stockée? C'est le [[volume | zone | diamètre]] du cylindre.
* {.reveal(when="blank-0")} Quelle quantité d'acier est nécessaire pour construire le gazomètre? C'est (approximativement) la [[surface | circonférence | diagonale]] du cylindre.

{.reveal(when="blank-0 blank-1")} Essayons de trouver des formules pour ces deux résultats!

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} Gazomètre Oberhausen

:::

---
> id: cylinder-prism

#### Volume d'un cylindre

Le haut et le bas d'un cylindre sont deux cercles congrus, appelés __bases__ . La __{.m-blue} hauteur *h*__ d'un cylindre est la distance perpendiculaire entre ces bases, et le __{.m-red} rayon *r*__ d'un cylindre est simplement le rayon des bases circulaires.

Nous pouvons approximer un cylindre en utilisant un ${n}{n|5|3,20,1} [__prisme__](gloss:prism). À mesure que le nombre de côtés augmente, le prisme commence à ressembler de plus en plus à un cylindre :

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

Même si un cylindre n'est techniquement pas un prisme, ils partagent de nombreuses propriétés. Dans les deux cas, on peut trouver le volume en multipliant l'aire de leur __{.m-red} base__ avec leur __{.m-blue} hauteur__ . Cela signifie qu'un cylindre de rayon _{.b.m-red} r_ et hauteur _{.b.m-blue} h_ a un volume :

{.text-center}`V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")} N'oubliez pas que le rayon et la hauteur doivent utiliser les mêmes unités. Par exemple, si _r_ et _h_ sont tous deux en cm, alors le volume sera en [[`"cm"^3`|`"cm"^2`| cm]] .

---
> id: oblique-cylinder
> goals: slide

::: column.grow

Dans les exemples ci-dessus, les deux bases du cylindre étaient toujours _directement l'une au-dessus de l'autre_ : c'est ce qu'on appelle un __cylindre droit__ . Si les bases ne sont pas directement les unes au-dessus des autres, nous avons un __cylindre oblique__ . Les bases sont toujours parallèles, mais les côtés semblent se pencher à un angle qui n'est pas de 90°.

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} La _tour penchée de Pise_ en Italie n'est pas tout à fait un cylindre oblique.

:::

---
> id: cavalieri
> goals: slide

Le volume d'un cylindre oblique se révèle être exactement le même que celui d'un cylindre droit avec le même rayon et la même hauteur. Cela est dû au [__principe de Cavalieri__](gloss:cavalieri) , nommé d'après le mathématicien italien [Bonaventura Cavalieri](bio:cavalieri) : si deux solides ont la même aire de section transversale à chaque hauteur, alors ils auront le même volume.

Imaginez trancher un cylindre en beaucoup de disques minces. On peut alors faire glisser ces disques horizontalement pour obtenir un cylindre oblique. Le volume des disques individuels ne change pas lorsque vous le rendez oblique, donc le volume total reste également constant :

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::



---
> id: cylinder-surface

#### Surface d'un cylindre

::: column.grow

Pour trouver la surface d'un cylindre, il faut «aplanir» l'objet, et on obtient son [patron](gloss:net). Vous pouvez l'essayer vous-même, par exemple en décollant l'étiquette sur une boîte de nourriture.

Il y a deux [[cercles | sphères | carrés]], un en haut et un en bas du cylindre. Le côté incurvé est en fait un grand [[rectangle | carré | ellipse]] .

* {.reveal(when="blank-0 blank-1")} Les deux cercles ont chacun une aire _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ .
* {.reveal(when="eqn-0")} La hauteur du rectangle est _{x-equation.small(solution="h" keys=" " short-var)}_ _{span.reveal(when="eqn-1")} et la largeur du rectangle est la même que la [[circonférence | diamètre | tangente]] des cercles:_ _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_ .

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

Cela signifie que la surface totale d'un cylindre de rayon _r_ et de hauteur _h_ est donnée par

{.text-center}`A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_ .

---
> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

Les cylindres peuvent être trouvés partout dans notre monde - des canettes de soda au papier toilette ou aux tuyaux d'eau. Pouvez-vous penser à d'autres exemples?

Le _gazomètre_ ci-dessus avait un rayon de 35 m et une hauteur de 120 m. On peut maintenant calculer que son volume est d'environ [[461 000 ± 1000]] `"m"^3` et sa surface est d'environ [[34 080 ± 100]] `"m"^2` .

---
> id: cone

### Cônes

::: column.grow

Un [__cône__](gloss:cone) est un solide en trois dimensions qui a une circulaire __{.m-red} base__ . Son côté «se rétrécit vers le haut» comme le montre le diagramme et se termine en un seul point appelé __{.m-green} sommet__ .

le __{.m-red} rayon__ du cône est le rayon de la base circulaire, et le __{.m-blue} la hauteur__ du cône est la distance perpendiculaire de la base au sommet.

Tout comme les autres formes que nous avons rencontrées auparavant, les cônes sont partout autour de nous : des cônes de crème glacée, des cônes de signalisation, certains toits et même des arbres de Noël. À quoi d'autre pouvez vous penser?

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

#### Volume d'un cône

::: column.grow

Nous avons précédemment trouvé le volume d'un cylindre en l'approximant à l'aide d'un prisme. De même, nous pouvons trouver le volume d'un cône en l'approximant à l'aide d'une [__pyramide__](gloss:pyramid) .

Ici vous pouvez voir un ${n}{n|5|3,18,1} pyramide à côtés. À mesure que le nombre de côtés augmente, la pyramide commence à ressembler de plus en plus à un cône. En fait, nous pourrions penser à un cône comme une pyramide avec une _infinité de_ côtés!

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

Cela signifie également que nous pouvons également utiliser l'équation pour le volume : `V = 1/3 "base" × "height"` . La base d'un cône est un cercle, donc le volume d'un cône de rayon _r_ et de hauteur _h_ est

{.text-center}`V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---
> id: cone-circumscribed

Remarquez la similitude avec l'équation du volume d'un cylindre. Imaginez dessiner un cylindre _autour_ du cône, avec la même base et la même hauteur - c'est ce qu'on appelle le __cylindre circonscrit__ . Maintenant, le cône prendra exactement [[un tiers | moitié | un quart]] du volume du cylindre:

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey} Remarque : Vous pourriez penser qu’une infinité de côtés minuscules en tant qu’approximation est un peu «imprécis». Les mathématiciens ont longuement essayé de trouver un moyen plus simple de calculer le volume d'un cône. En 1900, le grand mathématicien [David Hilbert l'a](bio:hilbert) même nommé comme l'un des 23 problèmes non résolus les plus importants en mathématiques! Aujourd'hui, nous savons que c'est en fait impossible.

---
> id: oblique-cone
> goals: slide

::: column.grow

Tout comme un cylindre, un cône n'a pas à être «droit». Si le sommet est directement au-dessus du centre de la base, nous avons un __cône droit__ . Sinon, nous l'appelons un __cône oblique__ .

Encore une fois, nous pouvons utiliser le principe de Cavalieri pour montrer que tous les cônes obliques ont le même volume, tant qu'ils ont la même base et la même hauteur.

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### Surface d'un cône

::: column.grow

Trouver la surface d'un cône est un peu plus délicat. Comme auparavant, nous pouvons démêler un cône dans son filet. Déplacez le curseur pour voir ce qui se passe : dans ce cas, nous obtenons un cercle et un [[secteur de cercle | segment de cercle | arc de cercle]] .

{.reveal(when="blank-0")} Il ne nous reste plus qu'à additionner la surface de ces deux composants. la __{.m-yellow} base__ est un cercle de rayon _r_ , donc son aire est

{.text-center.reveal(when="blank-0")}`pill(A_"Base","yellow","circle") =` _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ .

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

Le rayon du __{.m-green} secteur__ est la même que la distance entre le bord d'un cône et son sommet. C'est ce qu'on appelle la [{.pill.green.b} hauteur inclinée _s_](target:s) du cône, et elle n'est pas égale à la  [{.pill.blue.b} hauteur normale _h_](target:h). Nous pouvons trouver la hauteur inclinée en utilisant le théorème de [Pythagore](gloss:pythagoras-theorem) :

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

La [{.pill.red} longueur de l'arc](target:arc) du secteur est la même que la [[circonférence | diamètre | arc]] de la [{.pill.yellow} base](target:base) : _{span.reveal(when="blank-0")}`2 π r` . Maintenant, nous pouvons trouver l'aire du secteur en utilisant la [formule que](gloss:circle-sector) nous avons dérivée dans une section précédente:_

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")

| `pill(A_"Secteur","green","sector")` | `=` | `pill(A_"Cercle","teal","circle") × pill(L_"arc","red","arc") / pill("Circonférence","teal","circumference")` |
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

Enfin, il suffit d'ajouter la zone de la __{.m-yellow} base__ et la zone du __{.m-green} secteur__ , pour obtenir la surface totale du cône:

{.text-center}`A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

### Sphères

::: column.grow

Une [__sphère__](gloss:sphere) est un solide tridimensionnel composé de tous les points qui ont la même distance par rapport à un __{.m-green} centre _C.___ Cette distance est appelée __{.m-red} rayon _r___ de la sphère.

Vous pouvez considérer une sphère comme un « [cercle](gloss:circle) tridimensionnel». Tout comme un cercle, une sphère a également un __{.m-blue} diamètre _d___ , qui est [[deux fois | la moitié de]] la longueur du rayon, ainsi que des cordes et des sécants.

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} Dans une [section précédente](/course/circles/tangets-chords-arcs#eratosthenes-1) , vous avez appris comment le mathématicien grec [Ératosthène a](bio:eratosthenes) calculé le rayon de la Terre en utilisant l'ombre d'un pôle - il était de 6 371 km. Maintenant, essayons de trouver le volume total et la surface totale de la Terre. [Continuer](btn:next)

---
> id: sphere-volume

#### Volume d'une sphère

Pour trouver le volume d'une sphère, nous devons encore une fois utiliser le principe de Cavalieri. Commençons par un hémisphère - une sphère coupée en deux le long de l'équateur. Nous avons également besoin d'un cylindre ayant le même rayon et la même hauteur que l'hémisphère, mais avec un cône inversé «découpé» au milieu.

Lorsque vous déplacez le curseur ci-dessous, vous pouvez voir la coupe transversale de ces deux formes à une hauteur spécifique au-dessus de la base :

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

{.reveal(when="slider-0")} Essayons de trouver l'aire de la section transversale de ces deux solides, à une [{.pill.blue} hauteur _h_](target:h) au-dessus de la base.

::: column.grow

{.reveal(when="slider-0")} La section transversale de l'hémisphère est toujours un [[cercle | anneau | cylindre]] .

{.reveal(when="blank-0")} Le [{.pill.red} le rayon _x_](target:x) de la section fait partie d'un [{.pill.yellow} triangle rectangle](target:tri) , nous pouvons donc utiliser le théorème de [Pythagore](gloss:pythagoras-theorem) :

::: .reveal(when="blank-0")

{.text-center}`pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")` .

Maintenant, l'aire de la section transversale est

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)

:::

::: column.grow.reveal(when="eqn-0")

La section transversale du cylindre découpé est toujours un [[anneau | cercle | cône]] .

::: .reveal(when="blank-1")

Le rayon du trou est _h_ . Nous pouvons trouver l'aire de l'anneau en soustrayant l'aire du trou de l'aire du grand cercle :

| _A_ | = | `π r^2 - π h^2` |
| | = | `π (r^2 - h^2)` |
{.eqn-system}

:::

:::

---
> id: sphere-volume-1

Il semble que les deux solides aient la même section transversale à tous les niveaux. Selon le principe de Cavalieri, les deux solides doivent également avoir le même [[volume | surface | circonférence]] ! _{span.reveal(when="blank-0")} On peut trouver le volume de l'hémisphère en soustrayant le volume du [cylindre](gloss:cylinder-volume) et le volume du [cône](gloss:cone-volume) :_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")

| `V_"Hemisphere"` | = | `V_"Cylinder" - V_"Cone"` |
| | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |

:::

---
> id: sphere-volume-2

Une sphère se compose de [[deux]] hémisphères, _{span.reveal(when="blank-0")} ce qui signifie que son volume doit être_

{.text-center.reveal(when="blank-0")}`V = 4/3 π r^3` .

---
> id: earth-volume
> goals: numbers

::: column.grow

La Terre est (approximativement) une sphère d'un rayon de 6 371 \ km. Par conséquent, son volume est

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
|     | `=` | _{span.numbers} 1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} La densité moyenne de la Terre est `5510 "kg/m"^3` . Cela signifie que sa masse totale est

{.text-center.reveal(when="numbers")}`"Mass" = "Volume" × "Density" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} C'est un 6 suivi de 24 zéros!

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

Si vous comparez les équations du volume d'un cylindre, d'un cône et d'une sphère, vous remarquerez peut-être l'une des relations les plus satisfaisantes en géométrie. Imaginez que nous ayons un cylindre de la même hauteur que le diamètre de sa base. Nous pouvons maintenant parfaitement adapter un cône et une sphère à l'intérieur :

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} Ce cône a un rayon `r` et hauteur `2r` . Son volume est _{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} Cette sphère a un rayon `r` . Son volume est _{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} Ce cylindre a un rayon `r` et hauteur `2r` . Son volume est _{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} Remarquez comment, si nous [[additionnons | soustraire | multipliez]] le volume du cône et de la sphère, on obtient exactement le volume du cylindre!

---
> id: sphere-maps
> goals: move projection

#### Surface d'une sphère

Il est très difficile de trouver une formule pour la surface d'une sphère. L'une des raisons est que nous ne pouvons pas ouvrir et «aplatir» la surface d'une sphère, comme nous l'avons fait pour les cônes et les cylindres auparavant.

Il s'agit d'un problème particulier lorsque vous essayez de créer des cartes. La Terre a une surface incurvée en trois dimensions, mais chaque carte imprimée doit être plate et en deux dimensions. Cela signifie que les géographes doivent tricher : en étirant ou en écrasant certaines zones.

Ici, vous pouvez voir différents types de cartes, appelées __projections__ . Essayez de déplacer le carré rouge et regardez à quoi ressemble _réellement_ cette zone sur un globe :

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

Pour trouver la surface d'une sphère, nous pouvons à nouveau l'approximer en utilisant une forme différente - par exemple un polyèdre avec beaucoup de faces. À mesure que le nombre de faces augmente, le polyèdre commence à ressembler de plus en plus à une sphère.

{.todo} À VENIR: Sphère Surface Proof

---

## Sections coniques

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola
> translated: auto

Le cercle est l'une des quatre formes différentes qui peuvent être créées à l'aide de «tranches» à travers un [cône](gloss:cone) . Cela peut être démontré en utilisant le cône de lumière d'une torche :

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

Si vous pointez la torche verticalement vers le bas, vous voyez un [[cercle | ellipse | ovale]] de lumière. _{span.reveal(when="blank-0")} Si vous inclinez le cône, vous obtenez une [__ellipse__](gloss:ellipse) . Si vous l'inclinez encore plus, vous obtenez une [__parabole__](gloss:parabola) ou une [__hyperbole__](gloss:hyperbola) ._

---
> id: conics-2

::: column.grow

Collectivement, ces quatre formes sont appelées [__sections coniques__](gloss:conic-section) . Même si elles ont tous l'air très différentes, elles sont étroitement liées : en fait, elles peuvent tous être générées en utilisant la même équation!

Les sections coniques ont d'abord été étudiées par le mathématicien grec ancien [Apollonius de Perga](bio:apollonius) , qui leur a également donné leurs noms inhabituels.

Dans les cours ultérieurs, vous en apprendrez beaucoup plus sur les paraboles et les hyperboles. Pour l'instant, regardons de plus près l'ellipse.

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### Ellipses

Une ellipse ressemble presque à un «cercle allongé». En fait, vous pourriez le considérer comme un cercle avec _deux centres_ - ce sont des __points focaux__ . Tout comme chaque point d'un cercle a la même distance de son centre, chaque point d'une ellipse a la même _somme de distances_ à ses deux points focaux.

Si vous avez une longue chaîne connectée à deux points fixes, vous pouvez dessiner une ellipse parfaite en traçant la portée maximale des chaînes :

{.todo} Bientôt: Ellipses dessin interactif

---
> id: ellipses-2
> goals: v0 v1 v2 v3

Il existe de nombreuses autres représentations physiques de la façon dont vous pourriez dessiner une ellipse :

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

### Orbites planétaires

::: column.grow

Vous vous souvenez peut-être dès le début de ce cours, que les anciens astronomes grecs croyaient que la Terre était au centre de l'univers et que le soleil, la lune et les planètes se déplaçaient autour de la Terre sur des orbites circulaires.

Malheureusement, l'observation astronomique du ciel ne correspondait pas tout à fait à cela. Par exemple, le soleil apparaissait plus grand pendant certaines parties de l'année et plus petit pendant d'autres. Sur un cercle, chaque point doit avoir [[le même | une augmentation | une]] distance [[décroissante]] de son centre.

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} L'astronome grec Hipparque de Nicée

:::

---
> id: epicycles
> goals: play

Pour résoudre ce problème, les astronomes ont ajouté des __épicycles__ à leur modèle du système solaire : les planètes se déplacent sur un grand cercle autour de la Terre, tout en tournant simultanément sur un cercle plus petit. Bien que très compliqué, c'était le modèle le plus largement accepté de notre univers depuis plus de 1000 ans :

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} Cette planète fait ${n}{n|6|2,12,1} rotations autour du petit cercle (l' __épicycle__ ) pendant une rotation autour du grand cercle (le __déférent__ ).

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} Un dessin d'épicycles du __XVIe__ siècle dans le __modèle géocentrique__ . Le mot grec «planètes» signifie «vagabonds».

:::

---
> id: kepler
> goals: play

::: column.grow

Au fil du temps, les gens ont réalisé que la Terre n'était qu'une des nombreuses planètes en orbite autour du soleil (le __modèle héliocentrique__ ), mais ce n'est qu'en 1609 que l'astronome [Johannes Kepler a](bio:kepler) découvert que les planètes se déplaçaient réellement sur _des orbites elliptiques_ .

Le soleil est dans l'un des deux points focaux de ces ellipses. Les planètes accélèrent à mesure qu'elles se rapprochent du soleil et ralentissent à mesure qu'elles s'éloignent.

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

Quelques décennies plus tard, [Isaac Newton](bio:newton) a pu prouver les observations de Kepler en utilisant ses nouvelles lois de la [__gravité__](gloss:gravity) . Newton s'est rendu compte qu'il existe une force entre deux masses quelconques dans l'univers - similaire à l'attraction entre deux aimants.

La gravité est ce qui fait tout tomber au sol et la gravité est également ce qui fait que les planètes se déplacent autour du soleil. Ce n'est que la grande vitesse à laquelle les planètes se déplacent qui les empêche de tomber directement dans le soleil.

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

En utilisant les lois de Newton, vous pouvez calculer le chemin emprunté par les objets lorsqu'ils se déplacent sous la force de la gravité. Il s'avère que les planètes se déplacent sur des ellipses, mais d'autres objets comme les comètes peuvent voyager sur [des](gloss:parabola) chemins [paraboliques](gloss:parabola) ou [hyperboliques](gloss:hyperbola) : ils volent près du soleil avant de se retourner et de décoller dans l'univers, pour ne jamais revenir.

Selon la légende, une pomme qui tombe a inspiré Newton à penser à la gravité. Il était l'un des scientifiques les plus influents de tous les temps, et ses idées ont façonné notre compréhension du monde pendant près de 300 ans - jusqu'à ce qu'Albert Einstein découvre la relativité en 1905.

:::
