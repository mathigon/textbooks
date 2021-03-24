# Grafos e Redes

## Introdução

> id: intro-0
> section: introduction
> color: "#A7208A"
> level: Intermediate
> next: probability

::: column.grow

Todos os dias estamos cercados por inúmeras conexões e redes: estradas e trilhos, linhas telefônicas, a internet, circuitos eletrônicos e até ligações moleculares. Existem também _redes sociais_ entre amigos e familiares. Todos esses sistemas consistem em certos _pontos_ chamados [[vértices|círculos|cruzamentos]], alguns dos quais são conectados por [[arestas|fronteiras|pares]]. Em matemática, isso é chamado de [__grafo__](gloss:graph).

::: column(width=160)

    svg#graph0.graph.novertices.noedges(width="160" height="130")

:::

__Teoria dos grafos__ é o estudo dos grafos e suas propriedades. É uma das áreas mais emocionantes e visuais da matemática e tem inúmeras aplicações importantes:

    x-gallery(slide-width="300")
      div
        x-img(src="images/network1.jpg" width=260 height=260 lightbox)
        p.caption Redes rodoviárias e ferroviárias
      div
        x-img(src="images/network6.jpg" width=260 height=260 lightbox)
        p.caption Circuitos integrados
      div
        x-img(src="images/network3.jpg" width=260 height=260 lightbox)
        p.caption Redes de fornecimento
      div
        x-img(src="images/network2.jpg" width=260 height=260 lightbox)
        p.caption Redes de amizades
      div
        x-img(src="images/network7.jpg" width=260 height=260 lightbox)
        p.caption Conexões neurais
      div
        x-img(src="images/network4.jpg" width=260 height=260 lightbox)
        p.caption A Internet

---
> id: intro-1

Podemos esboçar o layout de grafos simples usando círculos e linhas. A posição dos círculos e o comprimento das linhas são irrelevantes - apenas nos preocupamos com _como eles estão conectados_ entre si. As linhas podem até se cruzar e não precisam ser retas.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.text-center} Em alguns grafos, as arestas seguem apenas uma direção. Estes são chamados [__de grafos direcionados__](gloss:directed-graph).

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.text-center} Alguns grafos consistem em vários segmentos distintos que não são conectados por arestas. Estes grafos estão __desconectados__.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.text-center} Outros grafos podem conter várias arestas entre os mesmos pares de vértices, ou vértices conectados a si mesmos (loops).

:::

Para simplificar, neste curso consideraremos apenas grafos não direcionados, conectados, e sem múltiplas arestas e loops.

---
> id: intro-2

Podemos criar novos grafos a partir de um grafo existente removendo alguns dos vértices e arestas. O resultado é chamado de [__subgrafo__](gloss:subgraph). Aqui estão alguns exemplos de grafos e subgrafos:

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

A [__ordem__](gloss:graph-order) de um grafo é o número de vértices. O [__grau__](gloss:graph-degree) de um vértice em um grafo é o número de arestas que se encontram nesse vértice.

::: column(width=130)

    svg.graph(height=100 width=100 style='margin: 0 auto .8em')

{.text-center} Ordem: [[5]]

::: column(width=130)

    svg.graph(height=100 width=100 style='margin: 0 auto .8em')

{.text-center} Ordem: [[8]]

::: column(width=130)

    svg.graph(height=100 width=100 style='margin: 0 auto .8em')

{.text-center} Grau: [[3]]

::: column(width=130)

    svg.graph(height=100 width=100 style='margin: 0 auto .8em')

{.text-center} Grau: [[6]]

:::

---
> id: intro-4

Os grafos que consistem em um único anel de vértices são chamados de [__ciclos__](gloss:graph-cycle). Todos os ciclos têm [[o mesmo número de arestas e vértices|mais arestas do que vértices|menos arestas do que vértices]].

    .row
      svg.graph(style='width: 90px; height: 90px;')
      svg.graph(style='width: 90px; height: 90px;')
      svg.graph(style='width: 90px; height: 90px;')

---
> id: bridges-0
> title: As pontes de Königsberg
> section: bridges

## As pontes de Königsberg

::: column.grow

Um dos primeiros matemáticos a pensar em grafos e redes foi [Leonhard Euler](bio:euler). Euler ficou intrigado com um antigo problema relacionado à cidade de Königsberg, perto do mar Báltico.

O rio Pregel divide Königsberg em quatro partes separadas, que são conectadas por sete pontes. É possível caminhar pela cidade atravessando todas as pontes exatamente uma vez - mas não mais de uma vez? (Você pode começar e terminar em qualquer lugar, não necessariamente no mesmo lugar.)

Tente encontrar uma rota válida desenhando nestes mapas:

::: column(width=250)

    img.shifted(src="images/konigsberg1.jpg" width=250 height=350)

:::

---
> id: bridges
> goals: bridge-0 bridge-1 bridge-2 bridge-3
> title: The Bridges of Königsberg

    x-tabbox.full-width
      .tab
        h3 Mapa 1#[span.check.incorrect(when="bridge-0")]
        x-solved
        include svg/bridges-1.svg
        button.btn Limpar
        button.btn.right Pular
      .tab
        h3 Mapa 2#[span.check(when="bridge-1")]
        x-solved
        include svg/bridges-2.svg
        button.btn Limpar
        button.btn.right Pular
      .tab
        h3 Map 3#[span.check(when="bridge-2")]
        x-solved
        include svg/bridges-3.svg
        button.btn Limpar
        button.btn.right Pular
      .tab
        h3 Map 4 #[span.check.incorrect(when="bridge-3")]
        x-solved
        include svg/bridges-4.svg
        button.btn Limpar
        button.btn.right Pular

---
> id: bridges-1

No caso de Königsberg, parece impossível encontrar uma rota válida, mas em algumas outras cidades é possível. Euler conseguiu encontrar uma regra simples que pode ser aplicada a qualquer cidade, sem ter que tentar muitas possibilidades - usando a teoria dos grafos.

::: column.grow

Primeiro, precisamos converter os mapas da cidade em grafos com arestas e vértices. Toda ilha ou região de terra é representada por [[um vértice|uma aresta|uma área]] e toda ponte que liga duas regiões é representada por uma [[aresta|vértice|rua]] correspondente.

Agora, o problema de “percorrer uma cidade enquanto atravessa todas as pontes exatamente uma vez” tornou-se um problema de “desenhar um grafo com um traço contínuo enquanto se traça cada aresta exatamente uma vez”.

::: column(width=200)

    include svg/konigsberg.svg

:::

---
> id: bridges-2

No papel, crie alguns grafos diferentes e tente descobrir quais podem ser desenhados com apenas um único traço contínuo.

---
> id: bridges-3
> goals: size prime eo

Assim como nos mapas da cidade, descobrimos que alguns grafos são possíveis, enquanto outros não. Para nos ajudar a entender o porquê, rotulemos cada vértice com seu [grau](gloss:graph-degree). Em seguida, podemos colorir os vértices de maneiras diferentes e tentar revelar um padrão:

    figure
      x-select.var.tabs(:bind="colour")
        div(value="val") Valor
        div(value="size") Tamanho
        div(value="prime") Números primos
        div(value="eo") Par e ímpar
      .box
        p(style="margin: 0"): strong Esses grafos são possíveis:
        include svg/vertex-orders-1.svg
        p(style="margin: 1em 0 0"): strong Esses grafos não são possíveis:
        include svg/vertex-orders-2.svg

---
> id: bridges-4

Comparando esses números para grafos possíveis e não possíveis, parece que um grafo pode ser desenhado se [[não tiver mais do que dois vértices “ímpares”|tiver somente vértices “pares”|não tiver vértices com grau maior que 4|tiver um número ímpar de vértices|não tiver vértices de ordem 3]]. Essa condição pode ser explicada se observarmos apenas um único vértice no grafo:

    x-slideshow
      .stage(slot="stage"): include svg/konigsberg-proof.svg
      .legend(slot="legend") Aqui pode ser visto um único vértice ampliado do grafo.
      .legend(slot="legend") Se desenharmos o grafo, eventualmente teremos uma aresta entrando nesse vértice, e outra aresta saindo. Ou seja, temos duas arestas se encontrando neste vértice.
      .legend(slot="legend") Possivelmente o vértice é um cruzamento em vez de uma beirada. Nesse caso se terá outra aresta entrando no vértice e outra aresta saindo vértice e teremos quatro arestas.
      .legend(slot="legend") E em alguns grafos, pode até haver um terceiro par de arestas entrando e saindo do vértice. Nesse caso teremos seis arestas.
      .legend(slot="legend") Em todo caso, note que sempre há um número par de arestas se encontrando no vértice.
      .legend(slot="legend") As únicas exceções são os vértices onde o caminho começa e onde o caminho termina. Esses dois vértices podem ter um número ímpar de arestas. Se o ponto de partida e o ponto de término são o mesmo, todos vértices do grafo são possuem um número par de arestas.

---
> id: bridges-5

::: column.grow(parent="right")

Se você voltar ao mapa de Königsberg, verá que existem mais de duas ilhas com um número ímpar de pontes. Portanto, uma rota que atravessa todas as pontes exatamente uma vez é realmente impossível - e foi isso que Leonard Euler descobriu.

A descoberta de Euler pode não parecer particularmente útil na vida real, mas os grafos estão na base de muitos outros problemas geográficos, como encontrar direções entre dois locais. Descobriremos mais aplicações mais tarde.

::: column(width=240)

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes

## Apertos de mão e encontros

::: column.grow

Você e seus amigos foram convidados para uma festa de aniversário maravilhosa. Incluindo você e o anfitrião, há ${hnd}{hnd|5|3,15,1} pessoas presentes. À noite, quando os convidados se preparam para sair, todo mundo aperta a mão de todo mundo. Quantos apertos de mão foram dados no total? Podemos representar os apertos de mão usando um grafo: toda pessoa é [[um vértice|uma aresta]], e todo aperto de mão é [[uma aresta|um vértice]]. Agora, é fácil contar o número de arestas no grafo. Com ${hnd} pessoas, existem ${hnd*(hnd-1)/2} apertos de mão.

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

Em vez de contar todas as arestas em grafos grandes, também podemos tentar encontrar uma fórmula simples que nos informe o resultado para _qualquer_ número de convidados. Cada uma das ${n}{n|5|2,8,1} pessoas na festa aperta a mão de outras ${n-1}. Com isso, há ${n} × ${n-1} = ${n×(n-1)} apertos de mão no total. Para _n_ pessoas, o número de apertos de mão seria [[`n×(n-1)`|`n×(n+1)`|`n^2`]].

    p.var(:html="handshakeTable(n)")
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

Infelizmente, esta resposta não está correta. Note como [os primeiros elementos da linha do topo](->.handshakes_tr:first-child_td:first-child,_.handshakes_tr:first-child_td:nth-child(2)) são na realidade os mesmos, só que virados ao contrário.

De fato, contamos cada aperto de mão [[duas vezes|uma única vez|três vezes]], _{span.reveal(when="blank-0")} pois contamos cada aperto de cada uma das duas pessoas que apertaram as mãos. Isso significa que o número correto de apertos de mãos para ${n}{n|5|2,25,1} convidados é `(var("n") × var("n-1"))/2 = var("n*(n-1)/2")`._

---
> id: handshakes-3

Os grafos de apertos de mão são especiais porque todos os vértices estão conectados a todos os outros vértices. Os grafos com essa propriedade são chamados __grafos completos__. O grafo completo com 4 vértices é frequentemente abreviado como `K_4`, o grafo completo com 5 vértices é conhecido como `K_5` e assim por diante. Acabamos de mostrar que um grafo completo com `n` vértices `K_n` tem `(n × (n-1))/2` arestas.

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

Em um dia diferente, você foi convidado para um encontro rápido com ${m}{m|5|2,8,1} meninos e ${f}{f|4|2,8,1} meninas. Há muitas mesas pequenas e todo garoto passa 5 minutos com cada uma das meninas. Quantos “encontros” individuais existem no total?

::: column.grow

Nesse caso, o grafo representando esta situação consiste em dois conjuntos de vértices. Estes conjuntos estão separados e todo vértice está conectado a todos os vértices do [[conjunto oposto|mesmo conjunto]]  mas nenhum dos vértices do [[mesmo conjunto|conjunto oposto]]. Os grafos que possuem essa configuração são chamados de __grafos bipartidos__.

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")} O grafo bipartido com dois conjuntos de tamanho _x_ e _y_ é frequentemente escrito como `K_"x,y"`. Possui [[`x×y`|`x+y`|`2x–y`]] arestas, _{span.reveal(when="blank-2")} o que significa que no exemplo acima existem ${m} × ${f} = ${m×f} encontros._

---
> id: utilities
> goals: try-three-times
> section: planar-graphs

## Grafos planares

::: column.grow

Aqui está outro quebra-cabeça relacionado à teoria dos grafos. Em uma pequena vila, existem três fornecedores de água, eletricidade e gás, respectivamente. Há também três casas que precisam ser atendidas. Infelizmente, devido ao layout da cidade, os tubos e cabos dos fornecedores não podem se cruzar.

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Tente conectar cada um dos fornecedores abaixo a cada uma das casas, sem que nenhuma das linhas cruze:

    .box.no-padding
      include svg/utilities.svg
      button.btn Clear

---
> id: utilities-1

Assim como as pontes de Königsberg, você rapidamente descobre que esse problema também é impossível. Parece que alguns grafos podem ser desenhados sem arestas sobrepostas - esses são chamados __grafos planares__ - mas outros não.

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center} `K_3` é planar.

::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center} `K_4` [[é planar|não é planar]].

::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center} `K_5` [[não é planar|é planar]].

:::

---
> id: utilities-2

O [grafo completo](gloss:complete-graph) `K_5` é o menor grafo que não é planar. Qualquer outro grafo que contenha `K_5` como subgrafo também não é planar. Isso inclui `K_6`, `K_7` e todos os grafos completos que são maiores. O grafo no quebra-cabeça dos três serviços (água, energia e gás) é o [grafo bipartido](gloss:bipartite-graph) `K_"3,3"`. Acontece que qualquer grafo não-planar deve conter `K_5` ou `K_"3,3"` (ou uma [subdivisão](gloss:subdivision) desses dois grafos) como subgrafo. Este teorema é chamado de _teorema de Kuratowski_.

---
> id: planarity
> goals: planarity

::: .box.f-blue

#### Planaridade

    x-solved
    svg#planarity.frame(viewBox="0 0 640 320")

Esse é um grafo planar, mas os ${n}{n|7|5,20,1} vértices foram misturados. Rearranje os vértices de modo que nenhuma das arestas se cruzem.

    p.btn-row: button.btn Gerar novo grafo aleatório

:::

---
> id: euler

### Fórmula de Euler

Todos os gráficos planares dividem o plano em que são desenhados em várias áreas, chamadas __faces__.

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] Vértices
[[5]] Faces
[[10]] Arestas
_{span.euler-sum} 11 Vértices + Faces_

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] Vértices
[[7]] Faces
[[14]] Arestas
_{span.euler-sum} 15 Vértices + Faces_

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] Vértices
[[13]] Faces
[[24]] Arestas
_{span.euler-sum} 25 Vértices + Faces_

:::

---
> id: euler-1

Ao comparar esses números, você notará que o número de arestas é sempre [[um a menos|maior|o mesmo]] do que o número de faces mais o número de vértices. Em outras palavras, _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + 1. Esse resultado é chamado __equação de Euler__ e recebe o nome do mesmo [matemático](bio:euler) que resolveu o problema das pontes de Königsberg.

Infelizmente, existem infinitos grafos e não podemos verificar todos um a um para ver se a equação de Euler funciona mesmo. Em vez disso, podemos tentar encontrar uma [prova](gloss:proof) simples que funcione para qualquer grafo...

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

      .legend(slot="legend") O grafo mais simples consiste de um único vértice. Podemos facilmente checar que a equação de Euler é válida.
      .legend(slot="legend") Vamos adicionar um novo vértice ao nosso grafo. Podemos adicionar uma aresta, e a equação de Euler ainda é válida.
      .legend(slot="legend") Se adicionarmos um terceiro vértice teremos duas possibilidades. Podemos criar um triângulo pequeno: isso adiciona mais um vértice, uma face e duas arestas, e a equação de Euler ainda é válida.
      .legend(slot="legend") Outra possibilidade é estender a linha com o vértice adicional: assim temos mais um vértice e uma aresta, e a equação de Euler ainda é válida.
      .legend(slot="legend") Vamos continuar: se criarmos um quadrilátero, adicionamos mais um vértice, duas arestas e uma face. A equação de Euler ainda é válida.

---
> id: euler-3

Qualquer grafo (finito) pode ser construído começando com um vértice e adicionando mais vértices um por um. Mostramos que, independentemente da maneira como adicionamos novos vértices, a equação de Euler é válida. Portanto, é válido para todos os grafos. O processo que usamos é chamado de __indução matemática__. É uma técnica muito útil para provar resultados em infinitos casos, simplesmente iniciando com o caso mais simples e mostrando que o resultado é válido a cada passo na construção de casos mais complexos.

    .svg-block: include svg/dominoes.svg

---
> id: euler-4

Muitos grafos planares se parecem muito com as planificações de [poliedros](gloss:polyhedron), formas tridimensionais com [faces poligonais](gloss:polygon). Se pensarmos nos poliedros como elásticos, podemos imaginá-los esticando-os até que se tornem grafos planares:

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---
> id: euler-5

Isso significa que nós pode usar a fórmula de Euler não apenas para grafos planares, mas também para todos os poliedros - com uma pequena diferença. Ao transformar o poliedro em grafos, uma das faces desaparece: a face superior do poliedro se torna o "exterior" dos grafos. Em outras palavras, se você contar o número de  __{.red}arestas__, __{.blue}faces__ e __{.green}vértices__ de _qualquer_ poliedro, você descobrirá que _{.b.blue}F_ + _{.b.green}V_ = _{.b.red}E_ + [[2]].

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __Icosaedro__
__{.blue}20__ Faces
__{.green}12__ Vértices
__{.red}30__ Arestas

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Rombicosidodecaedro__
__{.blue}62__ Faces
__{.green}60__ Vértices
__{.red}120__ Arestas

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __Icosaedro truncado__
__{.blue}32__ Faces (12 pretas, 20 brancas)
__{.green}60__ Vértices
__{.red}90__ Arestas

:::

---
> id: maps
> section: map-colouring

## Coloração de Mapa

::: column.grow

Já usamos a teoria dos grafos em certos mapas. À medida que diminuímos o zoom, estradas e pontes individuais desaparecem e, em vez disso, vemos o contorno de países inteiros. Ao colorir um mapa - ou qualquer outro desenho que consiste em regiões distintas - os países adjacentes não podem ter a mesma cor. Também podemos usar o mínimo de cores possível. Alguns "mapas" simples, como um tabuleiro de xadrez, precisam apenas de duas cores (preto e branco), mas os mapas mais complexos precisam de mais.

::: column(width=240 style="margin-top: -10px")

    x-img.shifted(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

Ao colorir o mapa dos estados dos EUA, 50 cores são obviamente suficientes, mas são necessárias muito menos. Tente colorir os mapas abaixo com o mínimo de cores possível:

    .four-colour-icons
      for i in [1, 2, 3, 4, 5, 6, 7]
        .four-colour-icon(tabindex=0)

    x-tabbox.four-colours.full-width
      .tab
        h3 United States #[span.check(when="map-0")]
        x-solved
        .colour-count Number of colours: #[span 0]
        include svg/colours-1.svg
        button.btn.clear Clear
      .tab
        h3 South America #[span.check(when="map-1")]
        x-solved
        .colour-count Number of colours: #[span 0]
        include svg/colours-2.svg
        button.btn.clear Clear
      .tab
        h3 Germany #[span.check(when="map-2")]
        x-solved
        .colour-count Number of colours: #[span 0]
        include svg/colours-3.svg
        button.btn.clear Clear
      .tab
        h3 England #[span.check(when="map-3")]
        x-solved
        .colour-count Number of colours: #[span 0]
        include svg/colours-4.svg
        button.btn.clear Clear

---
> id: maps-2
> title: The Four Colour Theorem

::: column.grow

Todos esses mapas podem ser coloridos com apenas quatro cores diferentes, mas não é difícil imaginar que outros mapas muito complicados pode precisar de muito mais cores. De fato, alguns mapas precisam de __pelo menos__ quatro cores, sempre que contenham quatro países, todos conectados um ao outro.

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Como antes, podemos converter um mapa com países e fronteiras em um gráfico planar: todo país se torna [[um vértice|an edge|a face]] e países que [[compartilham uma borda|have the same colour]] conecte-se por uma aresta:

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Agora, queremos colorir os vértices de um gráfico, e dois vértices devem ter uma cor diferente se estiverem conectados por uma aresta.

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

Em 1852, o estudante de botânica [Francis Guthrie](bio:guthrie) teve que colorir um mapa dos condados da Inglaterra. Ele observou que quatro cores pareciam suficientes para qualquer mapa que ele tentasse, mas ele não conseguiu encontrar uma prova que funcionasse para _todos os_ mapas. Esse acabou sendo um problema extremamente difícil e ficou conhecido como o __teorema das quatro cores__. Durante os 100 anos seguintes, muitos matemáticos publicaram "provas" para o teorema das quatro cores, apenas para erros encontrados posteriormente. Algumas dessas provas inválidas foram tão convincentes que levou mais de 10 anos para descobrir erros. Durante muito tempo, os matemáticos foram incapazes de provar que quatro cores são suficientes ou de encontrar um mapa que precisava de mais de quatro cores.

:::

---
> id: maps-4

Pouco progresso foi feito no problema das quatro cores até 1976, quando [Wolfgang Haken](bio:haken) e [Kenneth Appel](bio:appel) usaram um computador para finalmente resolvê-lo. Eles reduziram infinitamente muitos mapas possíveis para 1936 casos especiais, cada um verificado por um computador, levando mais de 1000 horas no total.

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

O teorema das quatro cores é o primeiro teorema matemático conhecido a ser provado usando um computador, algo que se tornou muito mais comum e menos controverso desde então. Computadores mais rápidos e um algoritmo mais eficiente significam que hoje você pode resolver o teorema das quatro cores em um laptop em apenas algumas horas.

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Postmark for the Department of Mathematics at the University of<br/>Illinois Urbana-Champaign, where Haken and Appel worked.

---
> id: maps-6

::: column.grow

O teorema das quatro cores funciona apenas para mapas em um plano ou esfera, e onde todos os países consistem em uma única área.

No entanto, os matemáticos também analisaram mapas de _impérios_, onde os países podem consistir em múltiplos componentes desconectados e em mapas de planetas de formas diferentes, como um toro (forma de rosca). Nesses casos, você pode precisar de mais de quatro cores e as provas se tornam ainda mais difíceis.

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption This map on a torus requires seven colours.

:::

---
> id: salesman
> section: travelling-salesman

## O Problema do Vendedor Viajante

::: column.grow(parent="right")

Vamos pensar, mais uma vez, em redes e mapas. Imagine que um serviço de entrega precise visitar ${tsn}{tsn|8|2,50,1} cidades diferentes para distribuir encomendas. Podemos pensar nessas cidades como os vértices de um gráfico. Se todas as cidades estiverem conectadas por estradas, este é um gráfico [[completo|cycle|bipartite graph]], então há <mfrac> <mrow> ${tsn} × (${tsn} - 1) </mrow> <mn> 2 </mn> </mfrac> = ${tsn*(tsn-1)/2} arestas no total.

O caminhão de entrega deve visitar todas as cidades, em qualquer ordem. No problema das pontes de Königsberg, queríamos encontrar caminhos que percorrem _todas as margens_ exatamente um. Agora, queremos encontrar caminhos que visitam _todos os vértices_ exatamente uma vez. Esses caminhos são chamados __ciclos hamiltonianos__.

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

Existem inúmeras possibilidades diferentes para ciclos hamiltonianos em gráficos completos. De fato, podemos escolher qualquer vértice como vértice inicial e, em seguida, qualquer uma das cidades restantes em qualquer ordem:

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---
> id: salesman-2

Em um gráfico com ${tsn1}{tsn1|4|2,10,1} cidades, todo ciclo hamiltoniano também deve conter ${tsn1} cidades. Agora,

    ul.var(:html="tsmString(tsn1)")

Isso significa que, no total, existem ${tsnPaths(tsn1)} caminhos possíveis. Uma abreviação para este produto é ${tsn1}! ou ${tsn1} __fatorial__.

Você pode imaginar que talvez não seja possível viajar diretamente entre duas cidades - sem passar por outra cidade. Nesse caso, não temos mais um gráfico completo, e encontrar o número de ciclos hamiltonianos, se é que existem, se torna muito mais difícil.

---
> id: salesman-3

::: column.grow(parent="right")

Até agora, ignoramos o fato de que algumas cidades podem estar mais afastadas do que outras. Na vida real, no entanto, essa é uma consideração muito importante: não queremos apenas encontrar _nenhum caminho_, mas queremos encontrar o caminho mais curto. Isso é chamado de __Problema do vendedor ambulante__. Ele precisa ser resolvido não apenas no transporte e na logística, mas também ao posicionar transistores em microchips, para tornar computadores mais rápidos ou ao analisar a estrutura do [DNA](gloss:dna).

Um método simples seria tentar todos os caminhos possíveis, encontrar o comprimento de cada um e escolher o menor. No entanto, acabamos de mostrar que, mesmo com apenas ${tsn2}{tsn2|10|2,20,1} cidades, existem ${tsn2}! = ${factorial(tsn2)} caminhos possíveis. Depois de ter centenas ou milhares de vértices, tentar todos os caminhos possíveis se torna impossível, mesmo usando computadores poderosos.

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4
> goals: move

Infelizmente, não existe um algoritmo mais eficiente para resolver o problema do vendedor ambulante. Em vez disso, matemáticos e cientistas da computação desenvolveram vários algoritmos que encontram _boas_ soluções, mesmo que elas não sejam as melhores. Esses algoritmos, que fornecem apenas soluções aproximadas, são chamados __Heurísticas__.

Tente reorganizar as cidades neste mapa e observe como o caminho mais curto entre elas muda. Você pode remover cidades tocando nelas e pode adicionar cidades clicando em qualquer lugar do mapa (até 8):

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---
> id: salesman-5

::: column.grow

O __Greedy Algorithm__ (ou Algoritmo do vizinho mais próximo) é muito simples: você começa em uma cidade aleatória e se move consecutivamente para a cidade mais próxima que você nunca visitou antes. Depois de visitar todas as cidades, você para.

::: column(width=300)

{.todo} Animação em breve ...

:::

Você pode mostrar que, em média, os caminhos encontrados usando o algoritmo guloso são 25% mais longos que o menor caminho possível.

---
> id: salesman-6

::: column.grow

O __Algoritmo 2-Opt__ começa com um caminho possível aleatório. Em seguida, você escolhe duas arestas repetidamente e as troca, se isso reduziria o comprimento do caminho. Você para quando não pode reduzir ainda mais o comprimento trocando quaisquer pares de arestas.

::: column(width=300)

{.todo} Animação em breve ...

:::

---
> id: ants

Acontece que, muito antes dos computadores existirem, a Natureza havia encontrado uma maneira inteligente de encontrar caminhos ótimos entre diferentes locais: nas colônias de formigas.

    x-parallax.full-width(background="images/ants.jpg")

As formigas querem encontrar as rotas mais curtas possíveis entre o ninho e as possíveis fontes de alimento. Eles podem se comunicar através de produtos químicos que deixam ao longo de sua trilha e que outras formigas podem seguir.

---
> id: ants-1

::: column.grow

* A colônia de formigas envia muitos batedores que inicialmente viajam em direções aleatórias. Uma vez que encontram comida, eles retornam, deixando para trás um rastro de feromônio.
* Outras formigas tendem a seguir uma trilha quando encontram uma, o que as leva à comida. Na viagem de volta, depositam mais feromônios, reforçando a trilha.
* Com o tempo, o feromônio evapora. Quanto mais longo o caminho, mais tempo leva para as formigas viajarem, e assim o feromônio tem mais tempo para evaporar. Caminhos curtos, por outro lado, podem ser reforçados mais rapidamente, portanto sua força aumenta mais rapidamente.

::: column(width=240)

{.todo} Diagrama em breve ...

:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Os algoritmos do Sistema de Colônia de Formigas (ACS) tentam replicar esse comportamento nos computadores, usando muitas formigas "virtuais". Eles podem encontrar rapidamente soluções muito boas para o problema do vendedor ambulante.

Uma propriedade particularmente útil dos algoritmos do ACS é que eles podem ser executados continuamente e se adaptar em tempo real às mudanças no gráfico. Essas alterações podem ser causadas por acidentes de carro e fechamento de estradas nas redes de ruas ou por picos de tráfego nos servidores da Web nas redes de computadores.

:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

O problema do Vendedor ambulante é [NP-difícil](gloss:np), o que significa que é muito difícil ser resolvido por computadores (pelo menos para um grande número de cidades).

Encontrar um algoritmo rápido e exato teria implicações sérias no campo da ciência da computação: significaria que existem algoritmos rápidos para _todos os_ problemas difíceis de NP. Isso também tornaria inútil a maior parte da segurança da Internet, que se baseia no fato de que certos problemas são considerados muito difíceis para os computadores.

Encontrar um algoritmo rápido para resolver o problema do vendedor ambulante também resolveria um dos problemas abertos mais famosos da matemática e da ciência da computação, o problema de __P vs NP__. É um dos sete [Problemas do Prêmio Millennium](gloss:millennium-prize), cada um com um prêmio de US $ 1 milhão.

:::

---
> section: scheduling
> sectionStatus: dev

## Problemas de agendamento

FAÇAM

---
> id: applications
> section: applications

## Gráficos na vida cotidiana

Ao longo deste curso, vimos muitas aplicações da teoria dos grafos, embora algumas tenham sido de alguma forma artificial. Acontece, no entanto, que os gráficos estão no centro de muitos objetos e conceitos na vida cotidiana.

::: column.grow

A internet, por exemplo, é um vasto gráfico virtual. Todo vértice é uma página da web individual e cada borda significa que há um hiperlink entre duas páginas. Observe que os links são apenas de uma maneira; portanto, este gráfico é [[direcionado para|multi-line|conected]], e esse gráfico é _muito, muito, muito grande_.

Alguns sites, como Wikipedia ou Facebook, têm muitos links de entrada, enquanto muitos sites menores podem ter muito poucos links de entrada. Esse é o conceito subjacente usado pelo Google para classificar os resultados da pesquisa.

::: column(width=240)

    img(credit="© Various" src="images/internet.png" width=240 height=240)

:::

---
> id: applications-1

Sites com mais links recebidos tendem a ser de qualidade superior e devem ser mostrados na parte superior dos resultados da pesquisa. Por exemplo, ao pesquisar "Londres", sites oficiais de informações turísticas são mostrados antes de pequenas lojas em Londres ou blogs de pessoas que moram em Londres. Essa idéia simples da teoria dos grafos, o __algoritmo de Page Rank__, tornou o Google significativamente melhor do que outros mecanismos de busca antigos.

---
> id: applications-2

A internet é a maior rede já criada pela humanidade. Esta imagem mostra uma proporção muito pequena de todos os servidores conectados à Internet:

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

Enquanto sites e hiperlinks formam um gráfico _virtual_, também existe a rede _física_ de computadores, servidores, roteadores, linhas telefônicas e cabos.

::: column.grow(parent="right")

Toda vez que você faz uma ligação telefônica ou carrega um site, as operadoras de rede precisam encontrar uma maneira de conectar remetente e receptor, sem exceder a capacidade de qualquer cabo ou conexão individual. A teoria e a probabilidade dos grafos possibilitam garantir um serviço confiável, por exemplo, encontrando desvios quando uma conexão específica está ocupada.

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

Os gráficos também desempenham um papel importante no transporte e na navegação. Todas as redes de vôo, trem e metrô formam gráficos, que podem ser usados ao criar horários eficientes. Um dos gráficos mais reconhecíveis é o mapa do metrô de Londres:

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow

Todas as estradas e rodovias também formam uma grande rede, usada por serviços de navegação como o Google Maps ao elaborar a rota mais curta entre dois pontos.

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

No futuro, os __Sistemas Inteligentes de Transporte__ reduzirão o congestionamento e os acidentes encaminhando carros com mais eficiência, usando dados de localização coletados de smartphones e carros autônomos. Isso pode economizar milhões de horas perdidas na estrada todos os anos, reduzir significativamente a poluição e permitir que os serviços de emergência viajem mais rapidamente.

:::

---
> id: applications-6

Esta imagem mostra a rede de voos de companhias aéreas comerciais no norte da Europa.

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

Existem inúmeros outros gráficos na ciência, engenharia ou na vida cotidiana:

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} As ligações entre átomos em __moléculas__ e grades de cristal formam um gráfico.

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} A __propagação de doenças__ e epidemias podem ser modeladas usando uma rede.

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} Na biologia, as __árvores evolutivas__ que mostram a ascendência das espécies formam um gráfico.

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} Os diferentes componentes de __circuitos elétricos__ e chips de computador formam uma rede.

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} A estrutura gramatical de __idiomas__ pode ser modelada usando gráficos, por exemplo, para criar algoritmos de tradução.

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Os gráficos também têm muitas aplicações em __probabilidade__, __teoria dos jogos__ e __matemática financeira__.

:::

---
> id: social

Redes sociais

Finalmente, vamos pensar em um exemplo particularmente bom de gráficos que existem na vida cotidiana: as mídias sociais. Aqui, os vértices representam [[pessoas|friends|networks]] e as arestas representam amizades, gostos, assinaturas ou seguidores.

Quando começamos a desenhar gráficos de mídia social, podemos ver claramente alguns grupos de amigos em comum, que podem ter frequentado a mesma escola ou morado na mesma cidade. Também podemos determinar a centralidade __das pessoas__, que depende de quão bem conectado um vértice está e que pode ser uma medida da popularidade de uma pessoa nas mídias sociais.

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow

Em 2014, o Facebook tinha 1,4 bilhão de usuários ativos e um total de mais de 200 bilhões de amizades. Metade de todos os usuários do Facebook tem mais de 200 amigos e, como a maioria de nossos amigos tem um número semelhante de amigos, poderíamos facilmente ter dezenas de milhares de _amigos de amigos_.

Uma pergunta interessante agora seria: se você escolher dois usuários aleatórios do Facebook, quantas “arestas de amizade” você precisaria seguir para passar de um para o outro? Por exemplo, a distância entre amigos é [[1]], a distância entre amigos de amigos é [[2]] e assim por diante.

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

Com base em um [estudo](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/) realizado pelo Facebook em 2016, você está, em média, conectado a qualquer outra pessoa no Facebook por mais de 3,57 pessoas: dizemos que existem 3,57 __graus de separação__.

Em outras palavras, se você escolher qualquer um dos bilhões de usuários do Facebook em todo o mundo, eles terão um amigo de um amigo que conhece um amigo de um de seus amigos. E isso inclui celebridades, políticos ou realeza ...

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---
> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

Em 1929, quando o autor húngaro [Frigyes Karinthy](bio:karinthy) propôs pela primeira vez a idéia de “seis graus de separação”, não havia internet ou mídia social, mas o mundo já havia começado a se tornar mais interconectado.

Em 1967, [Stanley Milgram](bio:milgram) conduziu um primeiro experimento empírico, onde 296 participantes que moravam em Nebraska e Kansas foram solicitados a entregar uma carta a uma pessoa em particular que morava em Boston, Massachusetts. Todos eles tiveram que escolher um amigo para enviar a carta, que escolheu outro amigo. A cada passo, a carta se aproximava de Boston. Milgram descobriu que havia, em média, apenas 5,2 amigos intermediários & # 8211; 5,2 graus de separação.

:::

Hoje, cada um de nós faz parte de inúmeros gráficos invisíveis, subjacentes às nossas interações sociais, viagens, Internet e tecnologia, ciência e muito mais.
