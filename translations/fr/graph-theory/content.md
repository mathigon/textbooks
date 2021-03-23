# Graphes et réseaux

## Introduction

> id: intro
> section: introduction
> color: "#A7208A"
> level: Intermediate
> next: probability
> translated: auto

::: column.grow

Chaque jour, nous sommes entourés d'innombrables connexions et réseaux: routes et voies ferrées, lignes téléphoniques, Internet, circuits électroniques et même liaisons moléculaires. Il existe également des _réseaux sociaux_ entre amis et familles. Tous ces systèmes consistent en certains _points_ dénommés [[sommets|cercles|intersections]], dont certains sont reliés par [[arêtes|liens|paires]]. En mathématiques, on appelle cela un [__graphe__](gloss:graph).

::: column(width=160)

    svg#graph0.graph.novertices.noedges(width="160" height="130")

:::

La __théorie des graphes__ est l'étude des graphes et de leurs propriétés. C’est l’un des domaines les plus passionnants et les plus visuels des mathématiques, et il a de nombreuses applications importantes:

    x-gallery(slide-width="300")
      div
        x-img(src="images/network1.jpg" width=260 height=260 lightbox)
        p.caption Réseaux routiers et ferroviaires
      div
        x-img(src="images/network6.jpg" width=260 height=260 lightbox)
        p.caption Circuits intégrés
      div
        x-img(src="images/network3.jpg" width=260 height=260 lightbox)
        p.caption Des chaînes d'approvisionnement
      div
        x-img(src="images/network2.jpg" width=260 height=260 lightbox)
        p.caption Amitiés
      div
        x-img(src="images/network7.jpg" width=260 height=260 lightbox)
        p.caption Connexions neuronales
      div
        x-img(src="images/network4.jpg" width=260 height=260 lightbox)
        p.caption L'Internet

---

> id: intro-1

Nous pouvons esquisser la disposition de graphes simples en utilisant des cercles et des lignes. La position des cercles et la longueur des lignes sont sans importance - nous nous soucions uniquement de _la manière dont elles sont connectées_. Les lignes peuvent même se croiser et ne doivent pas nécessairement être droites.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.text-center} Dans certains graphiques, les arêtes ne vont que dans un sens. Ces graphes sont appelés [__graphes orientés__](gloss:directed-graph).

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.text-center} Certains graphes sont constitués de plusieurs parties distinctes qui ne sont pas reliées par des arêtes. Ces graphes sont __non connexes__.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.text-center} D'autres graphiques peuvent contenir plusieurs arêtes entre les mêmes paires de sommets ou des sommets reliés entre eux (boucles).

:::

Pour des raisons de simplicité, nous ne penserons qu'aux graphes non orientés et connectés sans arêtes et boucles multiples dans ce cours.

---

> id: intro-2

Nous pouvons créer de nouveaux graphiques à partir d'un graphique existant en supprimant certains des sommets et des arêtes. Le résultat s'appelle un [__sous-graphique__](gloss:subgraph). Voici quelques exemples de graphiques et de sous-graphiques:

::: column(width=200)

    svg.graph(height='90', width='90', style='float: left; margin-right: 12px')
    svg.graph(height='90', width='90', style='float: left')

::: column(width=200)

    svg.graph(height='90', width='90', style='float: left; margin-right: 12px')
    svg.graph(height='90', width='90', style='float: left')

::: column(width=200)

    svg.graph(height='90', width='90', style='float: left; margin-right: 12px')
    svg.graph(height='90', width='90', style='float: left')

:::

---

> id: intro-3

[__L'ordre__](gloss:graph-order) d'un graphe est son nombre de sommets. Le [__degré__](gloss:graph-degree) d'un sommet dans un graphe est le nombre d'arêtes qui se rejoignent à ce sommet.

::: column(width=130)

    svg.graph(height=100 width=100 style='margin: 0 auto .8em')

{.text-center} Ordre: [[5]]

::: column(width=130)

    svg.graph(height=100 width=100 style='margin: 0 auto .8em')

{.text-center} Ordre: [[8]]

::: column(width=130)

    svg.graph(height=100 width=100 style='margin: 0 auto .8em')

{.text-center} Degré: [[3]]

::: column(width=130)

    svg.graph(height=100 width=100 style='margin: 0 auto .8em')

{.text-center} Degré: [[6]]

:::

---

> id: intro-4

Les graphes constitués d'une seule chaîne de sommets sont appelés [__cycles__](gloss:graph-cycle). Tous les cycles ont [[le même nombre d'arêtes et de sommets|plus d'arêtes que de sommets|moins d'arêtes que de sommets]].

    .row
      svg.graph(style='width: 90px; height: 90px;')
      svg.graph(style='width: 90px; height: 90px;')
      svg.graph(style='width: 90px; height: 90px;')

---

> id: bridges-0
> title: The Bridges of Königsberg
> section: bridges
> translated: auto

## Les ponts de Königsberg

::: column.grow

[Leonhard Euler](bio:euler) est l'un des premiers mathématiciens à avoir réfléchi aux graphes et aux réseaux. Euler était intrigué par un vieux problème concernant la ville de Königsberg, près de la mer Baltique.

La rivière Pregel divise Königsberg en quatre parties distinctes, reliées par sept ponts. Est-il possible de se promener dans la ville en traversant tous les ponts exactement une fois - mais pas plus d'une fois? (Vous pouvez commencer et finir n'importe où, pas nécessairement au même endroit.)

Essayez de trouver un itinéraire valide en dessinant sur ces cartes:

::: column(width=250)

    img.shifted(src="images/konigsberg1.jpg" width=250 height=350)

:::

---

> id: bridges
> goals: bridge-0 bridge-1 bridge-2 bridge-3
> title: The Bridges of Königsberg

    x-tabbox.full-width
      .tab
        h3 Map 1#[span.check.incorrect(when="bridge-0")]
        x-solved
        include svg/bridges-1.svg
        button.btn Recommencer
        button.btn.right Passer
      .tab
        h3 Map 2#[span.check(when="bridge-1")]
        x-solved
        include svg/bridges-2.svg
        button.btn Recommencer
        button.btn.right Passer
      .tab
        h3 Map 3#[span.check(when="bridge-2")]
        x-solved
        include svg/bridges-3.svg
        button.btn Recommencer
        button.btn.right Passer
      .tab
        h3 Map 4 #[span.check.incorrect(when="bridge-3")]
        x-solved
        include svg/bridges-4.svg
        button.btn Recommencer
        button.btn.right Passer

---

> id: bridges-1

Dans le cas de Königsberg, il semble impossible de trouver un itinéraire valable, mais certaines des autres villes fonctionnent. Euler a réussi à trouver une règle simple pouvant être appliquée à n’importe quelle ville, sans avoir à essayer beaucoup de possibilités - en utilisant la théorie des graphes.

::: column.grow

Premièrement, nous devons convertir les cartes de la ville en graphes avec des arêtes et des sommets. Chaque île ou région terrestre est représentée par [[un sommet|un bord|une zone]] et chaque pont reliant deux régions est représenté par un [[bord|sommet|rue]] correspondant.

{.reveal(when="blank-0 blank-1")} Le problème de "visiter une ville en traversant chaque pont exactement une fois" est devenu un problème de "dessiner un graphique en un trait continu tout en traçant chaque bord exactement une fois".

::: column(width=200)

    include svg/konigsberg.svg

:::

---

> id: bridges-2

Sur papier, imaginez quelques graphes différents, puis essayez de déterminer lesquels peuvent être dessinés avec un seul trait continu.

---

> id: bridges-3
> goals: dropdown

Tout comme pour les cartes de villes précédentes, nous constatons que certains graphes sont possibles, d'autres non. Pour nous aider à comprendre pourquoi, étiquetons chaque sommet avec son [degré](gloss:graph-degree):

    figure
      x-select.var.tabs(:bind="colour")
        div(value="val") Valeur
        div(value="size") Petit et grand
        div(value="prime") Primalité
        div(value="eo") Parité
      .box
        p(style="margin: 0"): strong Ces graphes sont possibles :
        include svg/vertex-orders-1.svg
        p(style="margin: 1em 0 0"): strong Ces graphes ne sont pas possibles :
        include svg/vertex-orders-2.svg

---

> id: bridges-4

En comparant ces nombres pour des graphes possibles et impossibles, il semble qu'un graphe puisse être tracé s'il [[n'a pas plus de deux sommets «impairs»|n'a que des sommets «pairs»|n'a pas de sommet avec un degré supérieure à 4|a un nombre impair de sommets | n'a pas de sommets d'ordre 3]]. Cette condition peut être expliquée si nous ne regardons qu'un seul sommet dans le graphique:

    x-slideshow
      .stage(slot="stage"): include svg/konigsberg-proof.svg
      .legend(slot="legend") Ici, vous pouvez voir un seul sommet agrandi dans un graphique.
      .legend(slot="legend") Si nous dessinons le graphique, nous aurons éventuellement une arête arrivant à ce sommet, puis une autre partant de ce sommet. Cela fait que deux arêtes se rejoignent au sommet.
      .legend(slot="legend") Peut-être que le sommet est un croisement plutôt qu'un coin. Dans ce cas, il y aura une autre arête arrivant vers le sommet et une autre arête partant de ce sommet. Nous avons maintenant quatre arêtes.
      .legend(slot="legend") Et dans certains graphiques, il peut même y avoir une troisième paire d'arêtes arrivant et partant du sommet. Maintenant, il y a six arête.
      .legend(slot="legend") Notez que, de toute façon, il y a toujours un nombre pair d'arêtes qui se rejoignant au sommet.
      .legend(slot="legend") Les deux seules exceptions sont les sommets où le chemin commence et où il se termine - ces deux peuvent avoir un nombre impair d'arêtes. Si les sommet de début et de fin sont identiques, tous les sommets du graphique sont pairs.

---

> id: bridges-5

::: column.grow(parent="right")

Si vous revenez sur la carte de Königsberg, vous verrez qu'il y a plus de deux îles avec un nombre impair de ponts. Par conséquent, un itinéraire qui traverse chaque pont exactement une fois est en effet impossible - et c'est ce que Leonard Euler a découvert.

La découverte d’Euler peut ne pas sembler particulièrement utile dans la vie réelle, mais les graphiques sont à la base de nombreux autres problèmes géographiques, tels que la recherche d’orientation entre deux lieux. Nous allons découvrir plus de ces applications plus tard.

::: column(width=240)

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---

> id: handshakes-1
> section: handshakes
> translated: auto

## Poignées de main et fêtes

::: column.grow

Vous avez été invité à une fête d'anniversaire extravagante. Vous et l'hôte inclus, ${hnd}{hnd|5|3,15,1} personnes sont présentes.

Le soir, alors que les invités se préparent à partir, tout le monde se serre la main. Combien de poignées de main y a-t-il au total?

Nous pouvons représenter les poignées de main à l'aide d'un graphique: chaque personne est [[un sommet|une arête]] et chaque poignée de main est [[une arête|un sommet]].

{.reveal(when='blank-0 blank-1')} Il est maintenant facile de compter le nombre d'arêtes dans le graphique. Nous constatons que là-bas avec ${hnd} personnes, il y a ${hnd*(hnd-1)/2} poignées de main.

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---

> id: handshakes-2

Plutôt que de compter toutes les arêtes dans les grands graphiques, nous pourrions également essayer de trouver une formule simple nous indiquant le résultat pour _tout nombre_ d'invités.

Chacune des ${n}{n|5|2,8,1} personnes présentes à la fête serre la main avec ${n-1} autres. Cela fait ${n} × ${n-1} = ${n×(n-1)} poignées de main au total. Pour les _n_ personnes, le nombre de poignées de main serait de [[_n_ × (_n_ – 1)|_n_ × (_n_ + 1)|_n_<sup>2</sup>]].

    p.var ${handshakeTable(n)}
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---

> id: handshakes-2a

Malheureusement, cette réponse n’est pas tout à fait correcte: nous avons compté chaque poignée de main [[deux fois|une fois|trois fois]], _{span.reveal(when="blank-0")} une fois pour chacune des deux personnes impliquées._

{.reveal(when="blank-0")} Par exemple, [les deux premiers les entrées de la rangée supérieure](->.handshakes_tr:first-child_td:first-child,_.handshakes_tr:first-child_td:nth-child(2)) sont en fait les mêmes. Le nombre correct de poignées de main pour ${n}{n|5|2,25,1} invités est <mfrac><mrow>${n} × ${n-1}</mrow><mn>2</mn></mfrac> = ${n*(n-1)/2}.

---

> id: handshakes-3

Les graphiques de poignées de mains sont spéciaux car chaque sommet est connecté à tous les autres sommets. Les graphes avec cette propriété sont appelés __graphes complets__. Le graphe complet à 4 sommets est souvent abrégé en `K_4`, le graphe complet à 5 sommets est appelé `K_5`, etc.

Nous venons de montrer qu'un graphe complet avec `n` sommets, `K_n`, a `(n × (n-1))/2` arêtes.

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---

> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

Un autre jour, vous êtes invité à un événement de speed dating pour ${m}{m|5|2,8,1} garçons et ${f}{f|4|2,8,1} filles. Il y a beaucoup de petites tables et chaque garçon passe 5 minutes avec chacune des filles. Combien de « rencontres » individuelles y a-t-il au total?

::: column.grow

Dans ce cas, le graphe correspondant est constitué de deux ensembles distincts de sommets. Chaque sommet est connecté à tous les sommets [[de l'ensemble opposé|du même ensemble]], mais à aucun des sommets [[du même ensemble|de l'ensemble opposé]]. Les graphes présentant cette présentation sont appelés __graphes bipartis__.

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")} Le graphe biparti avec deux ensembles de taille _x_ et _y_ est souvent écrit sous la forme `K_"x,y"`. Il a [[_x_ × _y_|_x_ + _y_|2_x_ – _y_]] arêtes, _{span.reveal(when="blank-2")}ce qui signifie qu'il y a dans l'exemple ci-dessus ${m} × ${f} = ${m×f} rencontres._

---

> id: utilities
> goals: try-three-times
> section: planar-graphs
> translated: auto

## Graphes plans

::: column.grow

Voici un autre casse-tête lié à la théorie des graphes.

Dans un petit village, il existe trois centrales produisant de l’eau, de l’électricité et du gaz. Il y a aussi trois maisons qui doivent être desservies. Malheureusement, en raison de la configuration de la ville, les tuyaux ou les câbles de chaque produit ne sont pas autorisés à se croiser.

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Essayez de connecter chacune des plantes ci-dessous à chacune des maisons, sans qu’une de vos lignes ne se croise:

    .box.no-padding
      include svg/utilities.svg
      button.btn Clear

---

> id: utilities-1

Tout comme les ponts de Königsberg, vous découvrez rapidement que ce problème est également impossible. Il semble que certains graphiques puissent être dessinés sans bords se chevauchant - il s’agit de __graphes plans__ - mais d’autres ne le peuvent pas.

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center} `K_3` est planaire.

::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center} `K_4` [[est planaire|n'est pas planaire]].

::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center} `K_5` [[n'est pas planaire|est planaire]].

:::

---

> id: utilities-2

Le [graphe complet](gloss:complete-graph) `K_5` est le plus petit graphe non planaire. Tout autre graphe contenant `K_5` comme sous-graphe n’est pas non plus planaire. Ceci inclut `K_6`, `K_7` et tous les graphiques complets plus grands.

Le graphique du puzzle des trois utilitaires est le [graphique bipartite](gloss:bipartite-graph) `K_"3,3"`. Il s'avère que tout graphe non planaire doit contenir une [sous-division](gloss:subdivision) `K_5` ou `K_"3,3"` ou sous forme de sous-graphe.

---
> id: planarity
> goals: planarity

::: .box.f-blue

#### Planarité

    x-solved
    svg#planarity.frame(viewBox="0 0 640 320")

C'est un graphe planaire, mais les ${n}{n|7|5,20,1} sommets ont été brouillés. Réorganisez les sommets de manière à ce qu'aucun des bords ne se chevauche.

    p.btn-row: button.btn New Random Graph

:::

---
> id: euler

### Formule d'Euler

Tous les graphes plans divisent le plan sur lequel ils sont dessinés en un certain nombre de zones, appelées __faces__.

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] sommets
[[5]] faces
[[10]] arêtes
_{span.euler-sum} 11 sommets + faces_

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] sommets
[[7]] faces
[[14]] arêtes
_{span.euler-sum} 15 sommets + faces_

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] sommets
[[13]] faces
[[24]] arêtes
_{span.euler-sum} 25 sommets + faces_

:::

---

> id: euler-1

En comparant ces nombres, vous remarquerez que le nombre d'arêtes correspond toujours à [[un|bigger|the same]] de moins que le nombre de faces plus le nombre de sommets. En d'autres termes, _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + 1. Ce résultat s'appelle __l'équation d'Euler__ et est nommé d'après le même [mathématicien](bio:euler) qui a résolu le problème des ponts de Königsberg.

Malheureusement, il existe une infinité de graphiques et nous ne pouvons pas vérifier chacun d’eux pour voir si l’équation d’Euler fonctionne. Au lieu de cela, nous pouvons essayer de trouver une [preuve](gloss:proof) simple qui fonctionne pour tous les graphes…

---

> id: euler-2

    x-slideshow
      .stage(slot="stage")
        svg(viewBox="0 0 640 200")
          line.link(style="stroke-width: 3px; display: none" x1=270 y1=30  x2=150 y2=100)
          line.link(style="stroke-width: 3px; display: none" x1=150 y1=100 x2=270 y2=170)
          line.link(style="stroke-width: 3px; display: none" x1=270 y1=170 x2=390 y2=100)
          line.link(style="stroke-width: 3px" x1="390" y1="100" x2="270" y2="30")
          circle.node(cx=270 cy=30  r=7)
          circle.node(cx=150 cy=100 r=7 style="display: none")
          circle.node(cx=270 cy=170 r=7 style="display: none")
          circle.node(cx=390 cy=100 r=7 style="display: none")

        div(style="position: absolute; top: 20px; right: 0; font-size: 1.2em;")
          table.grid.table-small
            tr
              td: strong.blue.i F
              td: strong.green.i V
              td: strong.red.i E
            tr
              td.xf 0
              td.xv 1
              td.xe 0
          p #[strong.blue.xf 0] + #[strong.green.xv 1] &nbsp;=&nbsp; #[strong.red.xe 0] + 1

      .legend(slot="legend") The simplest graph consists of a single vertex. We can easily check that Euler&rsquo;s equation works.
      .legend(slot="legend") Let us add a new vertex to our graph. We also have to add an edge, and Euler&rsquo;s equation still works.
      .legend(slot="legend") If we want to add a third vertex to the graph we have two possibilities. We could create a small triangle: this adds one vertex, one face and two edges, so Euler’s equation still works.
      .legend(slot="legend") Instead we could simply extend the line by one: this adds one vertex and one edge, and Euler&rsquo;s equation works.
      .legend(slot="legend") Let’s keep going: if we now create a quadrilateral we add one vertex, two edges and one face. Euler’s equation still works.

---

> id: euler-3

Tout graphe (fini) peut être construit en commençant par un sommet et en ajoutant plusieurs sommets un à un. Nous avons montré que, quelle que soit la manière dont nous ajoutons de nouveaux sommets, l’équation d’Euler est valide. Par conséquent, il est valable pour tous les graphiques.

Le processus que nous avons utilisé s'appelle __l'induction mathématique__. C'est une technique très utile pour prouver des résultats dans une infinité de cas, en commençant par le cas le plus simple et en montrant que le résultat est valable à chaque étape lors de la construction de cas plus complexes.

    .svg-block: include svg/dominoes.svg

---

> id: euler-4

De nombreux graphes plans ressemblent beaucoup aux réseaux de [polyèdres](gloss:polyhedron), des formes tridimensionnelles à faces [polygonales](gloss:polygon). Si nous pensons que les polyèdres sont constitués d’élastiques, nous pouvons les étendre jusqu’à ce qu’ils deviennent des graphiques plats et plats:

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---

> id: euler-5

Cela signifie que nous pouvons utiliser la formule d'Euler non seulement pour les graphes plans, mais aussi pour tous les polyèdres - à une petite différence près. Lors de la transformation des polyèdres en graphiques, une des faces disparaît: la face la plus haute du polyèdre devient le "dehors"; des graphiques.

En d'autres termes, si vous comptez le nombre de __{.red} arêtes__, __{.blue} faces__ et __{.green} sommets__ de _toutes_ polyèdre, vous constaterez que _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + [[2]].

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __Icosahedron__
__{.blue} 20__ Faces
__{.green} 12__ Sommets
__{.red} 30__ Bords

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Rhombicosidodecahedron__
__{.blue} 62__ Faces
__{.green} 60__ Vertices
__{.red} 120__ Bords

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __Icosaèdre tronqué__
__{.blue} 32__ faces (12 noires, 20 blanches)
__{.green} 60__ sommets
__{.red} 90__ bords

:::

---

> id: maps
> section: map-colouring
> translated: auto

## Coloration de la carte

::: column.grow

Nous avons déjà utilisé la théorie des graphes avec certaines cartes. En faisant un zoom arrière, des routes et des ponts disparaissent et nous voyons les contours de pays entiers.

Lors de la coloration d'une carte - ou de tout autre dessin constitué de régions distinctes - les pays adjacents ne peuvent pas avoir la même couleur. Nous pourrions aussi vouloir utiliser le moins possible de couleurs différentes.

Certaines «cartes» simples, comme un échiquier, n'ont besoin que de deux couleurs (noir et blanc), mais la plupart des cartes complexes nécessitent davantage.

::: column(width=240 style="margin-top: -10px")

    x-img.shifted(src="images/globe.jpg" width=240 height=320)

:::

---

> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

Lorsque vous colorez la carte des États américains, 50 couleurs suffisent évidemment, mais il en faut beaucoup moins. Essayez de colorier les cartes ci-dessous avec le moins de couleurs possible:

    .four-colour-icons
      for i in [1, 2, 3, 4, 5, 6, 7]
        .four-colour-icon(tabindex=0)

    x-tabbox.four-colours.full-width
      .tab
        h3 États Unis #[span.check(when="map-0")]
        x-solved
        .colour-count Nombre de couleurs: #[span 0]
        include svg/colours-1.svg
        button.btn.clear Recommencer
      .tab
        h3 Amérique du sud #[span.check(when="map-1")]
        x-solved
        .colour-count Nombre de couleurs: #[span 0]
        include svg/colours-2.svg
        button.btn.clear Recommencer
      .tab
        h3 Allemagne #[span.check(when="map-2")]
        x-solved
        .colour-count Nombre de couleurs: #[span 0]
        include svg/colours-3.svg
        button.btn.clear Recommencer
      .tab
        h3 Angleterre #[span.check(when="map-3")]
        x-solved
        .colour-count Nombre de couleurs: #[span 0]
        include svg/colours-4.svg
        button.btn.clear Recommencer

---

> id: maps-2
> title: The Four Colour Theorem

::: column.grow

Toutes ces cartes peuvent être colorées avec seulement quatre couleurs différentes, mais il n’est pas difficile d’imaginer que d’autres cartes très complexes pourraient nécessiter beaucoup plus de couleurs. En fait, certaines cartes nécessitent __au moins__ couleurs, lorsqu'elles contiennent quatre pays connectés entre eux.

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Comme auparavant, nous pouvons convertir une carte avec des pays et des frontières en un graphique planaire: chaque pays devient [[un sommet|an edge|a face]] et les pays qui [[partagent une frontière|have the same colour]] sont reliés par un bord:

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Nous souhaitons maintenant colorer les sommets d'un graphique. Deux sommets doivent avoir une couleur différente s'ils sont connectés par une arête.

---

> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

En 1852, l’étudiant en botanique [Francis Guthrie](bio:guthrie) doit colorier une carte des comtés d’Angleterre. Il a observé que quatre couleurs semblaient suffisantes pour toutes les cartes testées, mais il n’a pas été en mesure de trouver une preuve valable pour _toutes les_ cartes. Cela s'est avéré être un problème extrêmement difficile et a été baptisé __théorème des quatre couleurs__.

Au cours des 100 années suivantes, de nombreux mathématiciens ont publié des «preuves» du théorème des quatre couleurs, uniquement pour que des erreurs soient trouvées ultérieurement. Certaines de ces preuves non valides étaient si convaincantes qu'il a fallu plus de 10 ans pour découvrir des erreurs.

Pendant longtemps, les mathématiciens ont été incapables de prouver que quatre couleurs suffisaient ou de trouver une carte nécessitant plus de quatre couleurs.

:::

---

> id: maps-4

Le problème des quatre couleurs n’a guère progressé jusqu’en 1976, lorsque [Wolfgang Haken](bio:haken) et [Kenneth Appel](bio:appel) utilisaient enfin un ordinateur pour le résoudre. Ils ont réduit un nombre infini de cartes possibles à 1936 cas particuliers, qui ont été vérifiés par un ordinateur prenant plus de 1000 heures au total.

    x-parallax.full-width(background="images/ibm-360.jpg")

---

> id: maps-5

Le théorème des quatre couleurs est le premier théorème mathématique bien connu à avoir été prouvé à l'aide d'un ordinateur, ce qui est devenu beaucoup plus courant et moins controversé depuis. Des ordinateurs plus rapides et un algorithme plus efficace signifient qu'aujourd'hui, vous pouvez résoudre le théorème des quatre couleurs sur un ordinateur portable en seulement quelques heures.

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Cachet postal du département de mathématiques de l'Université <br/> de l'Illinois Urbana-Champaign, où travaillaient Haken et Appel.

---

> id: maps-6

::: column.grow

Le théorème des quatre couleurs ne fonctionne que pour les cartes sur un plan plat ou une sphère et où tous les pays se composent d'une seule zone.

Cependant, les mathématiciens ont également examiné des cartes de _empires_, où les pays peuvent être constitués de plusieurs composants déconnectés, ainsi que des cartes de planètes de formes différentes, telles qu'un tore (forme de beignet). Dans ces cas, vous aurez peut-être besoin de plus de quatre couleurs et les épreuves deviennent encore plus difficiles.

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption Cette carte sur tore nécessite sept couleurs.

:::

---

> id: salesman
> section: travelling-salesman
> translated: auto

## Le problème du vendeur ambulant

::: column.grow(parent="right")

Pensons encore une fois aux réseaux et aux cartes. Imaginez qu'un service de livraison doive se rendre ${tsn}{tsn|8|2,50,1} dans différentes villes pour distribuer des colis. Nous pouvons considérer ces villes comme les sommets d’un graphique. Si toutes les villes sont reliées par des routes, il s'agit d'un [[graphe complet|cycle|bipartite graph]]. Il existe donc <mfrac><mrow>${tsn} × (${tsn} – 1)</mrow><mn>2</mn></mfrac> = ${tsn*(tsn-1)/2} arêtes au total.

Le camion de livraison doit visiter toutes les villes, dans n'importe quel ordre. Dans le problème des ponts de Königsberg, nous voulions trouver des chemins qui parcourent _chaque bord_ exactement un. Nous voulons maintenant trouver des chemins qui visitent _chaque sommet_ exactement une fois. Ces chemins s'appellent __cycles hamiltoniens__.

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---

> id: salesman-1

Il existe d'innombrables possibilités pour les cycles hamiltoniens dans des graphiques complets. En fait, nous pouvons choisir n’importe quel sommet comme sommet de départ, puis choisir l’une des villes restantes dans n’importe quel ordre:

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---

> id: salesman-2

Dans un graphique comportant ${tsn1}{tsn1|4|2,10,1} villes, chaque cycle hamiltonien doit également contenir ${tsn1} villes. À présent,

    ul.var ${tsmString(tsn1)}

Cela signifie qu’au total, il existe ${tsnPaths(tsn1)} chemins possibles. Un raccourci pour ce produit est ${tsn1}! ou ${tsn1} __factoriel__.

Vous pouvez imaginer qu'il ne serait pas possible de voyager directement entre deux villes sans passer par une autre ville. Dans ce cas, nous n’avons plus de graphique complet et il est beaucoup plus difficile de trouver le nombre de cycles d’Hamilton, s’ils existent.

---

> id: salesman-3

::: column.grow(parent="right")

Jusqu'ici, nous avons ignoré le fait que certaines villes pourraient être plus éloignées que d'autres. Cependant, dans la vie réelle, il s'agit d'une considération très importante: nous ne voulons pas simplement trouver un chemin mais nous voulons aussi trouver le chemin le plus court. Ce problème s'appelle le __voyageur itinérant__. Ce problème doit être résolu non seulement dans les domaines du transport et de la logistique, mais également lors du positionnement des transistors sur des puces, afin de rendre les ordinateurs plus rapides, ou lors de l'analyse de la structure de [DNA](gloss:dna).

Une méthode simple serait d'essayer tous les chemins possibles, en trouvant la longueur de chacun, puis en choisissant le plus court. Cependant, nous venons de montrer que, même avec seulement ${tsn2}{tsn2|10|2,20,1} villes, il existe ${tsn2}! = ${factorial(tsn2)} chemins possibles. Une fois que vous avez des centaines ou des milliers de sommets, il est impossible d'essayer tous les chemins possibles, même avec des ordinateurs puissants.

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---

> id: salesman-4
> goals: move

Malheureusement, il n’existe pas d’algorithme plus efficace pour résoudre le problème du voyageur voyageur. Au lieu de cela, les mathématiciens et les informaticiens ont mis au point divers algorithmes permettant de trouver _bonnes solutions_, même s’ils ne sont pas forcément les meilleurs. Ces algorithmes, qui ne donnent que des solutions approximatives, sont appelés __heuristiques__.

Essayez de réorganiser les villes sur cette carte et observez l’évolution du chemin le plus court entre elles. Vous pouvez supprimer des villes en les touchant et vous pouvez ajouter des villes en cliquant n'importe où sur la carte (jusqu'à 8):

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---

> id: salesman-5

::: column.grow

L’algorithme __Greedy__ (ou l’algorithme du voisin le plus proche) est très simple: vous commencez dans une ville aléatoire et vous vous déplacez ensuite dans la ville la plus proche que vous n’avez jamais visitée. Une fois que vous avez visité toutes les villes, vous vous arrêtez.

::: column(width=300)

{.todo} Animation à venir…

:::

Vous pouvez montrer qu'en moyenne, les chemins trouvés à l'aide de l'algorithme glouton sont 25% plus longs que le chemin le plus court possible.

---

> id: salesman-6

::: column.grow

L’algorithme __2-Opt__ commence par un chemin possible aléatoire. Ensuite, vous sélectionnez à plusieurs reprises deux bords et vous les échangez si cela réduisait la longueur du chemin. Vous vous arrêtez lorsque vous ne pouvez plus réduire la longueur en échangeant des paires d'arêtes.

::: column(width=300)

{.todo} Animation à venir…

:::

---

> id: ants

Il se trouve que bien avant que les ordinateurs n'existent, la Nature avait trouvé un moyen intelligent de trouver des chemins optimaux entre différents lieux: dans des colonies de fourmis.

    x-parallax.full-width(background="images/ants.jpg")

Les fourmis veulent trouver les itinéraires les plus courts possibles entre leur nid et les sources possibles de nourriture. Ils peuvent communiquer les uns avec les autres par le biais de produits chimiques qu’ils laissent le long de leur chemin et que les autres fourmis peuvent suivre.

---

> id: ants-1

::: column.grow

* La colonie de fourmis envoie de nombreux éclaireurs qui se déplacent initialement dans des directions aléatoires. Une fois qu'ils ont trouvé de la nourriture, ils reviennent, laissant derrière eux une traînée de phéromone.
* Les autres fourmis ont tendance à suivre un sentier quand ils en trouvent un, ce qui les mène à la nourriture. À leur retour, ils déposent davantage de phéromone, renforçant ainsi le sentier.
* Au fil du temps, la phéromone s'évapore. Plus un chemin est long, plus les fourmis mettent du temps à le parcourir et la phéromone a donc plus de temps pour s'évaporer. Les chemins courts, en revanche, peuvent être renforcés plus rapidement, leur résistance augmente donc plus rapidement.

::: column(width=240)

{.todo} Schéma à venir…

:::

---

> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Les algorithmes Ant Colony System (ACS) tentent de reproduire ce comportement sur des ordinateurs, en utilisant de nombreuses fourmis «virtuelles». Ils peuvent rapidement trouver de très bonnes solutions au problème du voyageur de commerce.

Une propriété particulièrement utile des algorithmes ACS est qu’ils peuvent être exécutés en continu et s’adapter en temps réel aux modifications apportées au graphique. Ces changements pourraient être causés par des accidents de voiture et des fermetures de routes sur les réseaux routiers, ou par des pics de trafic vers les serveurs Web sur des réseaux informatiques.

:::

---

> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

Le problème du voyageur de commerce est [NP-hard](gloss:np), ce qui signifie qu’il est très difficile d’être résolu par un ordinateur (du moins pour un grand nombre de villes).

Trouver un algorithme rapide et exact aurait de sérieuses implications dans le domaine de l'informatique: cela signifierait qu'il existe des algorithmes rapides pour _tous les_ problèmes difficiles. Cela rendrait également la majeure partie de la sécurité Internet inutile, ce qui repose sur le fait que certains problèmes sont jugés très difficiles pour les ordinateurs.

Trouver un algorithme rapide pour résoudre le problème du voyageur voyageur résoudrait également l'un des problèmes les plus connus en mathématiques et en informatique, le problème __P vs NP__. Il s’agit de l’un des sept [prix du millénaire](gloss:millennium-prize), chacun comportant un prix d’un million de dollars.

:::

---

> section: scheduling
> sectionStatus: dev

## Problèmes de planification

FAIRE

---

> id: applications
> section: applications
> translated: auto

## Les graphiques au quotidien

Tout au long de ce cours, nous avons vu de nombreuses applications de la théorie des graphes, même si certaines étaient en quelque sorte artificielles. Il s'avère toutefois que les graphiques sont au cœur de nombreux objets et concepts de la vie quotidienne.

::: column.grow

Internet, par exemple, est un vaste graphe virtuel. Chaque sommet est une page Web individuelle et chaque arête signifie qu’il existe un lien hypertexte entre deux pages. Notez que les liens ne vont que dans un sens. Ce graphique est donc [[dirigé|multi-line|conected]] et est _très, très grand_.

Certains sites Web, tels que Wikipedia ou Facebook, contiennent de nombreux liens entrants, alors que de nombreux sites Web plus petits peuvent ne contenir que très peu de liens entrants. C’est le concept sous-jacent utilisé par Google pour trier les résultats de recherche.

::: column(width=240)

    img(credit="© Various" src="images/internet.png" width=240 height=240)

:::

---

> id: applications-1

Les sites Web contenant davantage de liens entrants ont tendance à être de meilleure qualité et devraient figurer en haut des résultats de recherche. Par exemple, lors de la recherche de «Londres», les sites d’information touristique officiels sont affichés avant les petits magasins londoniens ou les blogs de personnes vivant à Londres. Cette idée simple de la théorie des graphes, l'algorithme __Page Rank__, a rendu Google nettement meilleur que les autres moteurs de recherche.

---

> id: applications-2

Internet est le plus grand réseau jamais créé par l’humanité. Cette image montre une très petite proportion de tous les serveurs connectés à Internet:

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---

> id: applications-3

Alors que les sites Web et les hyperliens forment un graphique _virtuel_, il existe également le réseau _physique_, qui comprend des ordinateurs, des serveurs, des routeurs, des lignes téléphoniques et des câbles.

::: column.grow(parent="right")

Chaque fois que vous passez un appel ou chargez un site Web, les opérateurs de réseau doivent trouver un moyen de connecter l'expéditeur et le destinataire, sans dépasser la capacité de chaque câble ou connexion. La théorie des graphes et la probabilité permettent de garantir un service fiable, par exemple en trouvant des déviations lorsqu'une connexion particulière est occupée.

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---

> id: applications-4

Les graphiques jouent également un rôle important dans les transports et la navigation. Tous les réseaux de vol, de train et de métro forment des graphiques pouvant être utilisés pour créer des horaires efficaces. L’un des graphiques les plus reconnaissables est la carte du métro de Londres:

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---

> id: applications-5

::: column.grow

Toutes les routes et les autoroutes forment également un vaste réseau, qui est utilisé par les services de navigation tels que Google Maps pour établir l'itinéraire le plus court entre deux points donnés.

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

À l'avenir, les __systèmes de transport intelligents__ réduiront les encombrements et les accidents en acheminant les voitures de manière plus efficace, en utilisant les données de localisation recueillies à partir de smartphones et de voitures autonomes. Cela permettrait d'économiser des millions d'heures perdues sur la route chaque année, de réduire considérablement la pollution et de permettre aux services d'urgence de voyager plus rapidement.

:::

---

> id: applications-6

Cette image montre le réseau de vols de compagnies aériennes commerciales dans le nord de l'Europe.

    x-parallax.full-width(background="images/flights.jpg")

---

> id: applications-7

Il existe d'innombrables autres graphiques dans la science, l'ingénierie ou la vie quotidienne:

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} Les liens entre les atomes de __molécules__ et les grilles cristallines forment un graphe.

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} La propagation __des maladies__ et des épidémies peut être modélisée à l'aide d'un réseau.

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} En Biologie, les __arbres évolutifs__ illustrant l'ascendance des espèces forment un graphique.

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} Les différents composants des __circuits électriques__ et des puces informatiques forment un réseau.

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} La structure grammaticale des __langues__ peut être modélisée à l'aide de graphiques, par exemple pour créer des algorithmes de traduction.

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Les graphes ont également de nombreuses applications en __probabilités__, __en théorie des jeux__ et en __mathématiques financières__.

:::

---

> id: social

### Réseaux sociaux

Enfin, pensons à un exemple particulièrement intéressant de graphes existant dans la vie quotidienne: les médias sociaux. Ici, les vertices représentent les [[personnes|friends|networks]] et les arêtes représentent les amitiés, les goûts, les abonnements ou les suiveurs.

Lorsque nous commençons à dessiner des graphiques sur les médias sociaux, nous pouvons clairement voir certains __groupes__ d'amis communs, qui peuvent être allés dans la même école ou vivre dans la même ville. Nous pouvons également déterminer la __centralité__ d'une personne, qui dépend du degré de connexion d'un sommet et qui peut être un indicateur de la popularité d'une personne sur les réseaux sociaux.

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---

> id: social-1

::: column.grow

En 2014, Facebook comptait 1,4 milliard d'utilisateurs actifs et plus de 200 milliards d'amitiés. La moitié des utilisateurs de Facebook ont ​​plus de 200 amis et, comme la plupart de nos amis ont le même nombre d'amis, nous pourrions facilement avoir des dizaines de milliers d'amis _d'amis_.

Une question passionnante serait désormais la suivante: si vous choisissez deux utilisateurs de Facebook au hasard, combien «de liens d'amitié» devez-vous suivre pour aller de l'un à l'autre? Par exemple, la distance entre amis est de [[1]], la distance entre amis d'amis est de [[2]], etc.

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---

> id: social-2

Selon une étude menée [par Facebook](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/) en 2016, vous êtes en moyenne connecté à quiconque sur Facebook par le biais d'au plus 3,57 personnes: nous disons qu'il existe 3,57 __degrés de séparation__.

En d'autres termes, si vous choisissez l'un des milliards d'utilisateurs de Facebook dans le monde entier, ils auront un ami d'un ami qui connaît un ami d'un de vos amis. Et cela inclut des célébrités, des politiciens ou des membres de la royauté…

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---

> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

En 1929, lorsque l'auteur hongrois [Frigyes Karinthy](bio:karinthy) a proposé pour la première fois l'idée de «six degrés de séparation», Internet et les médias sociaux n'existaient pas, mais le monde avait déjà commencé à devenir plus interconnecté.

En 1967, [Stanley Milgram](bio:milgram) conduisit une première expérience empirique consistant à demander à 296 participants du Nebraska et du Kansas de remettre une lettre à une personne vivant à Boston, dans le Massachusetts. Ils ont tous dû choisir un ami à qui envoyer la lettre, qui a ensuite choisi un autre ami. À chaque étape, la lettre se rapprochait de Boston. Milgram a constaté qu'il n'y avait en moyenne que 5,2 amis intermédiaires - 5,2 degrés de séparation.

:::

Aujourd'hui, chacun de nous fait partie d'innombrables graphiques invisibles, qui sous-tendent nos interactions sociales, les voyages, Internet et la technologie, la science et bien plus encore.
