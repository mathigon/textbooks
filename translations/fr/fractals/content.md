# Fractales

## Introduction

> section: introduction
> id: intro
> trailer: ohygDnKg5mg
> color: "#8032AD"
> level: Advanced
> next: chaos
> translated: auto

En regardant autour de la nature, vous avez peut-être remarqué des plantes complexes comme celles-ci:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} Cette __fougère__ se compose de nombreuses petites feuilles qui se ramifient en une plus grande.

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} Ce __brocoli Romanesco__ consiste en de plus petits [[cônes|cubes|spheres]] en spirale autour d'un plus gros.

:::

{.reveal(when="blank-0")} Au départ, elles ressemblent à des formes très complexes - mais en y regardant de plus près, vous remarquerez peut-être qu'elles suivent toutes les deux un schéma relativement simple: toutes les [parties individuelles](target:fractal) des plantes ont exactement la même apparence que l'ensemble plante, juste plus petite. Le même schéma se répète encore et encore, à des échelles plus petites. [Continuer](btn:next)

---

> id: fern

En mathématiques, nous appelons cette propriété __auto-similitude__, et les formes qui en sont appelées [__fractales__](gloss:fractal). Ils font partie des objets les plus beaux et les plus bizarres de toutes les mathématiques.

Pour créer nos propres fractales, nous devons commencer par un motif simple, puis le répéter encore et encore, à des échelles plus petites.

::: column.grow

L'un des modèles les plus simples pourrait être un [{.pill.red} segment de ligne](target:s1), avec [{.pill.blue} deux segments supplémentaires](target:s2) se ramifiant à une extrémité. Si nous répétons ce modèle, ces deux segments bleus auront également deux autres branches à leurs extrémités.

Vous pouvez déplacer les [points bleus](target:dot) pour modifier la longueur et l'angle de toutes les branches. Augmentez ensuite le nombre d'itérations en utilisant [le curseur](->#fern-slider) ci-dessous.

{.reveal(when="slider-0")} Selon la position des branches, vous pouvez créer des motifs complètement différents - ressemblant à la [fougère](action:set(130,228,197,184)) ci-dessus, à un [arbre](action:set(160,186,200,186)) ou [pentagones imbriqués](action:set(113,235,232,238)). Que pouvez-vous trouver d'autre? [Continuer](btn:next)

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

Une autre fractale célèbre est le [__triangle de Sierpinski__](gloss:sierpinski-triangle). Dans ce cas, nous commençons par un grand triangle équilatéral, puis nous coupons à plusieurs reprises de plus petits triangles des parties restantes.

{.reveal(when="slider=0")} Remarquez comment la forme finale est composée de [trois copies identiques d'elle-même](target:x), et chacune d'elles est constituée de copies encore plus petites de tout le triangle! Vous pouvez continuer à zoomer dans le triangle pour toujours et les motifs et les formes continueront toujours à se répéter.

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

Les plantes au début de ce chapitre _ressemblent_ à des fractales, mais il est clairement impossible de créer _de véritables_ fractales dans la vie réelle. Si nous continuons à répéter le même modèle encore et encore, de plus en plus petit, nous finirions par arriver à des cellules, des molécules ou des atomes qui ne peuvent plus être divisés.

Cependant, en utilisant les mathématiques, nous pouvons penser aux propriétés que les vraies fractales «auraient» - et elles sont très surprenantes… [Continuer](btn:next)

---
> id: dimension

### Dimensions fractales

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

Tout d'abord, réfléchissons à la dimension des fractales. Une ligne a la dimension [[1]]. _{span.reveal(when="blank-0")} Lors de sa mise à l'échelle d'un facteur 2, sa longueur augmente d'un facteur `2^1 = 2`. Évidemment!_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

Un carré a la dimension [[2]]. _{span.reveal(when="blank-0")} Lors de sa mise à l'échelle d'un facteur 2, sa surface augmente d'un facteur `2^2 =` [[4]]._

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

Un cube a la dimension [[3]]. _{span.reveal(when="blank-0")} Lorsque vous le redimensionnez d'un facteur 2, son volume augmente d'un facteur `2^3 =` [[8]]._ _{span.reveal(when="blank-1")} Notez que le plus grand cube de l'image se compose de 8 exemplaires du plus petit!_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Voyons maintenant le triangle de Sierpinski. Si nous la mettons à l'échelle par un facteur de 2, vous pouvez voir que sa «surface» augmente d'un facteur de [[3]].

{.reveal(when="blank-0")} Disons que _d_ est la dimension du triangle de Sierpinski. En utilisant le même modèle que ci-dessus, nous obtenons `2^d = 3`. En d'autres termes, _d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} ≈ 1,585…_

:::

---
> id: dimension-4

Mais attendez… comment quelque chose peut-il avoir une dimension qui n'est pas un entier? Cela semble impossible, mais ce n'est qu'une des propriétés étranges des fractales. En fait, c'est ce qui donne leur nom aux fractales: elles ont une __dimension fractionnelle__.

À chaque itération, nous supprimons une partie de l'aire du triangle de Sierpinski. Si nous pouvions faire cela infiniment de fois, il n'y aurait en fait plus de zone: c'est pourquoi le triangle de Sierpinski est quelque chose entre une zone à 2 dimensions et une ligne à 1 dimension.

::: .theorem

Alors que de nombreuses fractales sont _auto-similaires_, une meilleure définition est que __les fractales__ sont des formes qui ont une __dimension non entière__.

:::

[Continuer](btn:next)

---

> id: snowflake

### Le flocon de neige de Koch

Il existe de nombreuses formes dans la nature qui ressemblent à des fractales. Nous avons déjà vu quelques plantes au début de ce chapitre. D'autres grands exemples sont les flocons de neige et les cristaux de glace:

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

Pour créer notre propre flocon de neige fractal, nous devons encore une fois trouver une procédure simple que nous pouvons appliquer encore et encore.

::: column.grow

Comme le triangle de Sierpinski, commençons par un seul triangle équilatéral. Cependant, au lieu de _supprimer_ des triangles plus petits à chaque étape, nous _ajoutons_ des triangles plus petits le long du bord. La longueur latérale de chaque triangle est [[`1/3`|`1/4`|`1/2`]] des triangles de l'étape précédente.

{.reveal(when="blank-0")} La forme résultante est appelée [__flocon de neige de Koch__](gloss:koch-snowflake), du nom du mathématicien suédois [Helge von Koch](bio:koch). Notez, encore une fois, que [les petites sections](target:t2) du bord du flocon de neige sont exactement les mêmes que les [sections plus grandes](target:t1).

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

Lorsque nous redimensionnons un segment de bord du flocon de neige de Koch d'un facteur 3, sa longueur [[quadruple|triples|doubles]].

{.reveal(when="blank-0")} En utilisant la même relation entre les dimensions et les facteurs d'échelle que ci-dessus, nous obtenons l'équation [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]]. _{span.reveal(when="blank-1")} Cela signifie que la dimension du flocon de neige de Koch est `§d = log_3(4) ≈ 1.262`._

:::

---

> id: koch-size

::: tab

#### Zone _{span.check(when="blank-6")}_

La création des flocons de neige de Koch est presque comme une [séquence récursive](gloss:sequence-recursive): nous connaissons la forme de départ (un triangle), et nous savons comment passer d'un terme à l'autre (en ajoutant plus de triangles sur chaque bord):

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] nouveaux triangles

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] nouveaux triangles

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]] nouveaux triangles

:::

{.reveal(when="blank-0 blank-1 blank-2")} Après la première itération, le nombre de nouveaux triangles ajoutés augmente d'un facteur [[4]] à chaque étape. En même temps, l'aire de ces nouveaux triangles diminue d'un facteur [[9]] à chaque pas.

{.reveal(when="blank-3 blank-4")} Supposons que le [premier triangle](->#koch-0) ait une aire de 1. Alors l'aire totale des [trois triangles suivants](->#koch-1) est `3 × 1/9 = 1/3`. Les étapes suivantes forment toutes une [[série géométrique|arithmetic series|quadratic series]], _{span.reveal(when="blank-5")} avec un rapport commun [[`4/9`|`9/4`|`4/3`]]._

{.reveal(when="blank-6")} En utilisant la formule pour la somme des [séries géométriques infinies](gloss:geometric-series), nous pouvons calculer que l'aire totale du flocon de neige de Koch est

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`.

::: tab

#### Périmètre _{span.check(when="blank-9")}_

::: column.grow

Nous pouvons également essayer de calculer le périmètre du flocon de neige de Koch. Comme nous l'avons déjà vu précédemment, la longueur du périmètre change d'un facteur de [[`4/3`|`3/4`|`1/4`]] à chaque étape.

{.reveal(when="blank-8")} Cela signifie que, encore une fois, nous avons une série géométrique, mais dans ce cas, elle [[ne converge pas|converges to 0|doesn’t have a first term]]. _{span.reveal(when="blank-9")} Cela signifie que le périmètre du flocon de neige de Koch est en fait __infiniment long__!_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _Si cela semble contre-intuitif, n'oubliez pas que nous multiplions le périmètre par `§4/3` à chaque étape, et nous le faisons infiniment de fois._

:::

---

> id: frozen

::: column.grow

Il est presque impensable que vous puissiez avoir une forme avec une zone _finie_ et également une circonférence _infinie_ - mais ce n'est là qu'une des nombreuses propriétés inattendues des fractales.

Pouvez-vous trouver d'autres façons de créer vos propres fractales? [Continuer](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} "Mon âme est en spirale sur des fractales gelées tout autour ..."

:::

---

> id: menger-sponge

### Éponge Menger

Les fractales n'ont pas à être «plates», comme la plupart des exemples ci-dessus. L'une des fractales les plus célèbres à l'aspect tridimensionnel est la __éponge de Menger__, du nom du mathématicien [Karl Menger](bio:menger) qui l'a décrite pour la première fois en 1926.

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

Nous commençons avec un cube solide et nous forons à plusieurs reprises des trous de plus en plus petits dans ses côtés. Chaque nouvelle itération de trous a [[`1/3`|`1/2`|`1/4`]] la largeur de l'itération précédente de trous.

{.reveal(when="blank-0")} Un `3×3×3` cube se compose de 27 cubes plus petits, mais ici nous en avons retiré certains. L'éponge Menger se compose de [[20]] copies d'elle-même, qui sont 3 fois plus petites.

{.reveal(when="blank-1")} Maintenant, nous pouvons essayer de calculer la dimension _d_ de l'éponge Menger comme nous l'avons fait pour le flocon de neige Koch ci-dessus. Dans ce cas, nous obtenons `3^d = 20` ou `§d = log_3(20) ≈ 2.727`.

:::

{.reveal(when="blank-1")} Si vous imaginez découper de plus en plus de trous, infiniment de fois, il n'y aurait plus de volume réel. C’est pourquoi le cube n’est «pas tout à fait» tridimensionnel! [Continuer](btn:next)

---

> id: coastlines

### Littoral fractal

L'une des principales caractéristiques de toutes les fractales que nous avons vues jusqu'à présent est que vous pouvez «zoomer» pour toujours et toujours trouver de nouveaux motifs. Vers 1920, le mathématicien britannique [Lewis Fry Richardson](bio:richardson) s'est rendu compte qu'il en allait de même pour la frontière ou le littoral de nombreux pays.

Vous commencez par la forme de base du pays et, en zoomant, vous ajoutez des criques, des baies et des estuaires, puis des falaises individuelles, des rochers, des cailloux, etc.:

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

[Continuer](btn:next)

---

> id: coastlines-1

::: column.grow

Il s'agit d'un problème important lorsque vous essayez de calculer la longueur de la frontière d'un pays - comment décidez-vous de la distance de zoom et quels sont les coins et recoins à inclure?

Une façon de mesurer la longueur du littoral britannique, par exemple, consiste à prendre une longue règle, à faire le tour de ses plages, puis à additionner toutes les distances.

Si la règle mesure ${rulers[index]}{index|0|0,8,1} km de long, nous devons l'utiliser ${count} fois, nous obtenons donc un littoral total de ${count} × ${rulers[index]} = ${count * rulers[index]} km.

{.reveal(when="var-0")} Nous pouvons simplement continuer, avec des dirigeants de plus en plus petits, et chaque fois notre résultat sur la longueur du littoral deviendrait un peu plus long. Tout comme le flocon de neige de Koch auparavant, il semble que le littoral britannique soit infiniment long! C'est ce qu'on appelle souvent le __paradoxe du littoral__. [Continuer](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

Quelques décennies plus tard, le mathématicien [Benoit Mandelbrot](bio:mandelbrot) est tombé sur le travail de Richardson dans un livre de bibliothèque jeté, alors qu'il travaillait chez IBM. Il a reconnu son importance et son lien avec les recherches plus récentes sur les fractales et les dimensions.

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

Le littoral de la Grande-Bretagne "ressemble" certainement à une fractale, mais il n'est pas _auto-similaire_, comme d'autres fractales que nous avons vues auparavant. Afin de trouver sa taille, nous pouvons le dessiner sur une grille et compter le nombre de cellules qu'il recoupe.

{.r.reveal(when="slider-0")} Initialement, il y a __{.pill.yellow} 88__ cellules qui se croisent. Si nous redimensionnons le littoral par un facteur 2, il y a __{.pill.yellow} 197__ cellules qui se croisent - plus du double! [Continuer](btn:next)

{.r.reveal(when="next-0")} La taille du littoral a été multipliée par `§197/88`. Comme précédemment, cela signifie que la dimension du littoral est

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---

> id: coastline-dimension-1

Si nous répétons cela avec des grilles plus grandes, nous trouverions que la dimension du littoral britannique est en fait d'environ 1,21. Mandelbrot s'est rendu compte que cette dimension fractale est également une mesure de la __rugosité__ d'une forme - un nouveau concept, pour lequel il a trouvé des applications importantes dans de nombreux autres domaines des mathématiques et des sciences.

---

> id: nature

### Plus de fractales dans la nature et la technologie

Bien que les vraies fractales ne puissent jamais apparaître dans la nature, il existe de nombreux objets qui ressemblent _presque_ à des fractales. Nous avons déjà vu des plantes, des flocons de neige et des côtes, et voici quelques autres exemples:

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption} Chaîne de montagnes d'Asie centrale

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption} Delta du Gange en Inde

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption} éclairs

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption} Vaisseaux sanguins dans la rétine

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption} Grand Canyon aux États-Unis

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption} Nuages

:::

Tous ces objets peuvent sembler complètement aléatoires, mais, tout comme les fractales, il existe un motif sous-jacent qui détermine la façon dont ils sont formés. Les mathématiques peuvent nous aider à mieux comprendre les formes et les fractales ont des applications dans des domaines comme la médecine, la biologie, la géologie et la météorologie. [Continuer](btn:next)

---

> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption} Terrain fractal généré par ordinateur

::: column.grow

Nous pouvons également utiliser des fractales pour créer des «copies» réalistes de la nature, par exemple, comme des paysages et des textures utilisés dans des jeux vidéo ou des films générés par ordinateur. L'eau, les montagnes et les nuages dans cette image sont entièrement créés par un ordinateur, à l'aide de fractales!

Et nous pouvons même inverser ce processus pour compresser des images numériques, pour réduire leur taille de fichier. Les premiers algorithmes ont été développés par Michael Barnsley et Alan Sloan dans les années 1980, et de nouveaux sont encore à l'étude aujourd'hui.

:::

---

## Le triangle Sierpinski

> section: sierpinski
> id: sierpinski
> translated: auto

::: column.grow

L'une des fractales que nous avons vues dans le chapitre précédent était le [__triangle de Sierpinski__](gloss:sierpinski-triangle), qui doit son nom au mathématicien polonais [Wacław Sierpiński](bio:sierpinski). Il peut être créé en commençant par un grand triangle équilatéral, puis en coupant plusieurs fois de plus petits triangles hors de son centre.

{.r.reveal(when="slider-0")} Wacław Sierpiński a été le premier mathématicien à réfléchir aux propriétés de ce triangle, mais il est apparu plusieurs siècles plus tôt dans les œuvres d'art, les motifs et les mosaïques.

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: sierpinski-history

Voici quelques exemples de pavages de sol de différentes églises à Rome:

::: column(width=140 parent="padded-thin")

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire")

:::

Il s'avère que le triangle de Sierpinski apparaît dans un large éventail d'autres domaines des mathématiques, et il existe de nombreuses façons de le générer. Dans ce chapitre, nous en explorerons certains! [Continuer](btn:next)

---

> id: pascal
> goals: select

### Triangle de Pascal

Vous vous souvenez peut-être déjà du triangle de Sierpinski dans notre chapitre sur [__le triangle de Pascal__](gloss:pascals-triangle). Il s'agit d'une pyramide numérique dans laquelle chaque nombre est la somme des deux nombres ci-dessus. Appuyez sur tous les _nombres_ pairs dans le triangle ci-dessous, pour les mettre en surbrillance - et voyez si vous remarquez un motif:

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

Le triangle de Pascal peut être poursuivi vers le bas pour toujours, et le motif Sierpinski continuera avec des triangles de plus en plus gros. Vous pouvez déjà voir le début d'un triangle encore plus grand, à partir de la ligne 16.

Si deux cellules adjacentes sont divisibles par 2, alors leur somme dans la cellule en dessous doit également être divisible par 2 - c'est pourquoi nous ne pouvons obtenir que des triangles colorés (ou des cellules simples). Bien sûr, nous pouvons également essayer de colorer toutes les cellules divisibles par des nombres _autres que 2_. Que pensez-vous qu'il se passera dans ces cas? [Continuer](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Ici, vous pouvez voir une petite version des 128 premières lignes du triangle de Pascal. Nous avons mis en évidence toutes les cellules divisibles par ${n}{n|2|2,40,1} - que remarquez-vous?

{.reveal(when="var-0")} Pour chaque nombre, nous avons un motif triangulaire différent similaire au triangle de Sierpinski. Le modèle est particulièrement régulier si nous choisissons un [[nombre premier|triangle number|Fibonacci number]]. _{span.reveal(when="blank-0")} Si le nombre a _plusieurs_ facteurs premiers différents, le modèle semble plus aléatoire._

    x-gesture(target="#pascal-large x-var" slide="100,0")

---

> id: chaos-game
> goals: point play

### Le jeu du chaos

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

Ici, vous pouvez voir les trois sommets d'un triangle équilatéral. Appuyez n'importe où dans la zone grise pour créer un quatrième point.

{.r.reveal(when="point")} Jouons un jeu simple: nous choisissons l'un des sommets du triangle au hasard, dessinons un segment de ligne entre notre point et le sommet, puis trouvons le [{.pill.red} point médian](target:p1) de ce segment. [Continuer](btn:next)

{.r.reveal(when="next-0")} Maintenant, nous répétons le processus: nous choisissons un autre sommet aléatoire, dessinons le segment à partir de notre dernier point, puis trouvons le [{.pill.green} point médian](target:p2). Notez que nous colorions ces nouveaux points en fonction de la couleur du sommet du triangle que nous avons choisi. [Continuer](btn:next)

{.reveal(when="next-1")} Jusqu'à présent, rien de surprenant ne s'est produit - mais regardez comme nous répétons le même processus plusieurs fois:

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} Ajoutez 1 000 étapes_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

Ce processus est appelé __Chaos Game__. Il peut y avoir quelques points parasites au début, mais si vous répétez les mêmes étapes plusieurs fois, la distribution des points commence à ressembler exactement au triangle de Sierpinski!

Il existe de nombreuses autres versions de celui-ci - par exemple, nous pourrions commencer par un carré ou un pentagone, nous pourrions ajouter des règles supplémentaires comme ne pas pouvoir sélectionner le même sommet deux fois de suite, ou nous pourrions choisir le point suivant à un rapport autre que `§1/2` le long du segment. Dans certains de ces cas, nous obtiendrons simplement une distribution aléatoire de points, mais dans d'autres cas, nous révélons encore plus de fractales:

    include components/chaos-game

{.reveal(when="s1 s2 play")} Avez-vous découvert le [tapis Sierpinski](action:carpet()) ou ce [flocon de neige pentagonal](action:snowflake()) basé sur le [__nombre d'or__](gloss:golden-ratio)?

---

> id: cellular
> goals: sierpinski

### Automates cellulaires

Un __automate cellulaire__ est une grille composée de nombreuses cellules individuelles. Chaque cellule peut être dans des «états» différents (par exemple, des couleurs différentes), et l'état de chaque cellule est déterminé par ses cellules environnantes.

Dans notre exemple, chaque cellule peut être noire ou blanche. Nous commençons par une ligne qui ne contient qu'un seul carré noir. Dans chaque ligne suivante, la couleur de chaque cellule est déterminée par les trois cellules immédiatement au-dessus. Appuyez sur les huit options possibles ci-dessous pour inverser leur couleur - pouvez-vous trouver un ensemble de règles qui crée un motif similaire au triangle Sierpinski?

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} Il y a deux choix pour chacune des huit options, ce qui signifie qu'il y a `2^8 =` [[256]] règles possibles au total. Certains, comme la [règle 126](action:setRule('01111110')), ressemblent au triangle de Sierpinski. D'autres, comme la [règle 30](action:setRule('01111000')), semblent complètement chaotiques. Il a été découvert par [Stephen Wolfram](bio:wolfram) en 1983, et les ordinateurs peuvent même les utiliser pour générer des nombres aléatoires!

---

> id: cellular-1

::: column.grow

Les automates cellulaires montrent comment des motifs très complexes peuvent être créés par des règles très simples - tout comme les fractales. De nombreux processus dans la nature suivent également des règles simples, mais produisent des systèmes incroyablement complexes.

Dans certains cas, cela peut entraîner l'apparition de motifs qui ressemblent à des automates cellulaires, par exemple les couleurs sur la coquille de cet escargot.

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} Conus textile, un escargot de mer venimeux

:::

---

> id: tetrahedra

### Sierpinski Tetrahedra

Il existe de nombreuses variantes du triangle de Sierpinski et d'autres fractales aux propriétés et processus de création similaires. Certains ont un aspect bidimensionnel, comme le _Sierpinski Carpet_ que vous avez vu ci-dessus. D'autres ont l'air en 3 dimensions, comme ces exemples:

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski Tetrahedra

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Pyramide de Sierpinski

:::

---

## L'ensemble Mandelbrot

> section: mandelbrot
> id: iteration
> goals: move-1 move-2
> translated: auto

Toutes les fractales que nous avons vues dans les chapitres précédents ont été créées en utilisant un processus __d'itération__: vous commencez avec un motif spécifique, puis vous le répétez encore et encore.

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

Ceci est similaire à un autre concept en mathématiques que vous avez vu auparavant: avec [séquences récursives](gloss:sequence-recursive), vous commencez avec un nombre spécifique, puis vous appliquez la même formule récursive, encore et encore, pour obtenir le nombre suivant dans le séquence.

Prenons l'exemple de la formule récursive `§x_n = x_(n-1)^2` et traçons ses termes sur une droite numérique. Vous pouvez modifier la valeur de `pill(x_0,"yellow","x0")`:

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

Remarquez comment la séquence résultante peut se comporter très différemment, selon la valeur de départ `x_0`:

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

Si `x_0 > 1`, la séquence [[diverge|converges]]: _{span.reveal(when="blank-0")} elle ne cesse de croître, jusqu'à l'infini._

::: column.frame.f-blue.text-center(width=212)

Si `x_0` est compris entre –1 et 1, la séquence [[converge|diverges]].

::: column.frame.f-blue.text-center(width=212)

Si `x_0 < -1`, la séquence [[diverge|converges]].

:::

---

> id: iteration-2

Jusqu'à présent, nous n'avons rien appris de nouveau. Cependant, il y a environ un siècle, les mathématiciens ont commencé à explorer ce qui arrive à ces séquences si vous utilisez des [__nombres complexes__](gloss:complex-numbers), plutôt que simplement la vraie ligne numérique. Leurs découvertes ont été parmi les résultats les plus surprenants et les plus beaux de toutes les mathématiques.

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### Julia Sets

Utilisons la même séquence que précédemment, `§x_n = x_(n-1)^2`, mais sur le plan complexe. Vous pouvez déplacer la position de `pill(x_0,"yellow","x0")`, pour voir ce qu'il advient des termes suivants. Si la séquence semble converger, colorions le point correspondant sur le plan en _{span.pill.blue} bleu_:

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

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} Comme vous pouvez le voir, la séquence converge tant que `pill(x_0,"yellow","x0")` se trouve [[à l'intérieur du cercle unitaire| outside the unit square|above the _>>>>x<<<<_-axis]] _{span.reveal(when="blank-0")} (le cercle de rayon 1, centré à l'origine)._

---

> id: julia-1

Maintenant, rendons les choses un peu plus difficiles. Plutôt que de mettre au carré le nombre précédent, nous ajoutons également une constante _{.pill.red} c_ à chaque fois (qui peut être n'importe quel nombre complexe). En d'autres termes, `§x_n = x_(n-1)^2 + c`. Pensez-vous que nous aurons toujours un cercle de convergence? Quelles autres formes pensez-vous que nous pourrions voir? [Continuer](btn:next)

---

> id: julia-2

Dans ce diagramme, vous pouvez déplacer la position de `pill(x_0,"yellow","x0")` ainsi que la valeur de `pill(c,"red","c")`:

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

{div(slot="legend")} Nous savons déjà ce qui se passe si [`c = 0`](action:animate(0,0)) - c'est la même chose que l'exemple ci-dessus. La convergence de séquence tant que `x_0` se trouve dans le cercle unitaire.

{div(slot="legend")} Dès que nous modifions la valeur de _c_, quelque chose de merveilleux se produit. Le cercle se transforme en une forme fractale très complexe.

{div(slot="legend")} Lorsque [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)), la forme se divise en une infinité d'éléments minuscules disposés en spirales.

::: div(slot="legend")

Dans certains cas, la séquence ne converge pas vers un _point unique_. Au lieu de cela, elle atteint un cycle de plusieurs points, comme un triangle. Ces cycles sont appelés __orbites__.

Les points colorés en bleu signifient que la séquence correspondante converge ou a une orbite (nous disons qu'elle est __bornée__). Les points qui restent blancs signifient la séquence correspondante __diverge__: elle n'est pas limitée et finit par exploser jusqu'à l'infini.

:::

{div(slot="legend")} Que pouvez-vous trouver d'autre? Jetez un œil aux modèles lorsque [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) ou lorsque [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)). Il existe également des valeurs de _c_ où _chaque séquence_ diverge, de sorte que toute la plaine complexe reste blanche.

:::

---

> id: julia-3

Les différentes formes formées par la coloration des nombres sont appelées [__Julia Sets__](gloss:julia-set). Ils ont été découverts indépendamment par deux mathématiciens français, [Gaston Julia](bio:julia) et [Pierre Fatou](bio:fatou), vers 1918.

À cette époque, aucun ordinateur ne permettait de visualiser à quoi ressemblaient les ensembles Julia. Des mathématiciens comme Julia et Fatou ont pu raisonner mathématiquement à leur sujet, mais ils n'ont vu que des croquis rugueux et dessinés à la main de ce à quoi ils pourraient ressembler.

Nous n'avons pas ce problème aujourd'hui - les images ci-dessous sont toutes des ensembles Julia différents. Les différentes couleurs indiquent _la vitesse à laquelle_ la séquence à ce point diverge:

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

[Continuer](btn:next)

---

> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### L'ensemble Mandelbrot

Lors de la création des différents ensembles de Julia, vous avez peut-être remarqué qu'il y avait certaines valeurs de _c_ pour lesquelles chaque séquence diverge et le plan complexe entier reste blanc. Quelques décennies après Julia et Fatou, une nouvelle génération de mathématiciens a tenté de cartographier à quoi ressemblaient ces domaines.

Dans l'exemple précédent, nous avons choisi une valeur fixe pour `pill(c,"red","c")`, puis changé la position de `pill(x_0,"yellow","x0")` pour colorer le plan. Maintenant, fixons la valeur de `pill(x_0 = 0,"yellow","x0")` et modifions plutôt la valeur de `pill(c,"red","c")`.

Encore une fois, peignez sur le plan complexe pour révéler la zone dans laquelle les séquences restent délimitées. Quelles formes attendez-vous à apparaître?

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

Cette fractale est appelée [__Mandelbrot Set__](gloss:mandelbrot-set), et lorsqu'elle est tournée de 90 °, elle ressemble presque à une personne, avec la tête, le corps et les deux bras. Il a été défini et dessiné pour la première fois en 1978, dans un document de recherche des mathématiciens Robert Brooks et Peter Matelski:

    figure: x-img(src="images/mandelbrot.jpg" width=360 height=290 credit="© Princeton University Press")

Quelques années plus tard, [Benoit Mandelbrot](bio:mandelbrot) a utilisé les puissants ordinateurs d'IBM pour créer une visualisation beaucoup plus détaillée de la fractale, qui portera plus tard son nom. Les premières impressions semblaient différentes de ce à quoi il s'attendait - jusqu'à ce qu'il se rende compte que les techniciens travaillant sur les imprimantes nettoyaient le «flou» autour de son bord, en supposant qu'il était causé par des particules de poussière ou des erreurs d'imprimante, et non une caractéristique déterminante des fractales ! [Continuer](btn:next)

---

> id: mandel-zoom

Comme toutes les fractales, nous pouvons «zoomer» sur l'ensemble de Mandelbrot pour toujours, trouver de nouveaux motifs à toutes les échelles. Ici, vous pouvez zoomer sur une partie de l'ensemble de Mandelbrot appelée __Seahorse valley__. Les points noirs sont _à l'intérieur_ de l'ensemble de Mandelbrot, où la séquence est limitée. Les points colorés sont _en dehors_ de l'ensemble de Mandelbrot, où la séquence diverge et les différentes couleurs indiquent _la vitesse à laquelle_ elle se développe à l'infini:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---

> id: mandel-zoom-1

Ce curseur se compose de 27 images individuelles, jusqu'à un niveau de zoom supérieur à 14 quadrillions, ou `2^54`. Au total, il a fallu près de 45 minutes pour effectuer le rendu sur un ordinateur portable moderne. L'ensemble de Mandelbrot peut être créé avec une seule équation simple, `§x_n = x_(n-1)^2 + c`, mais il est infiniment complexe et incroyablement beau.

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

Lorsque vous déplacez la valeur de [{.pill.red} c](target:c) autour de l'ensemble Mandelbrot, vous remarquerez peut-être une propriété curieuse:

* Toutes les séquences du [corps principal](target:bulb0) de l'ensemble de Mandelbrot [[convergent|diverge|reach an orbit]] _{span.reveal(when="blank-0")} en un seul point._
* {.reveal(when="blank-0")} Les séquences de la [grosse ampoule](target:bulb1) en haut [[atteignent une orbite|converge|diverge]] _{span.reveal(when="blank-1")} composée de [[3]] points._
* {.reveal(when="blank-2")} Les séquences de [cette ampoule plus petite](target:bulb2) ont des orbites de longueur [[5]].

:::

{.reveal(when="blank-3")} Chaque ampoule a une orbite de taille différente, les ampoules plus petites ayant de plus en plus de points sur leurs orbites. La taille de ces orbites est étroitement liée à la __carte logistique__, un concept important de la [théorie du chaos](/course/chaos).

---

> id: mandel-outro

::: column.grow

Bernoit Mandelbrot a consacré la majeure partie de sa vie à l'étude des fractales, ainsi qu'aux mathématiques de la _rugosité_ et _auto-similitude_. Son travail avait des applications en physique, météorologie, neurologie, économie, géologie, ingénierie, informatique et de nombreux autres domaines.

En 1985, l'ensemble Mandelbrot est apparu sur la couverture du magazine _Scientific American_, et depuis lors, il est devenu l'une des formes mathématiques les plus reconnaissables au monde. Vous pouvez le trouver sur des T-shirts, dans des vidéos musicales et comme économiseurs d'écran, et il a été référencé dans de nombreux livres et films populaires.

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::

---

## Courbes de remplissage d'espace

> section: space-filling
> sectionStatus: dev

{.todo} À venir bientôt!

