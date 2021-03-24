# Sequências e padrões

## Introdução

> section: introduction
> id: intro
> trailer: u2vwpDVj5rU
> color: "#F97E08"
> level: Intermediate
> next: fractals
> translated: auto

Muitas profissões que usam matemática estão interessadas em um aspecto específico - _encontrar padrões_ e ser capaz de prever o futuro. Aqui estão alguns exemplos:

::: column(width=160 parent="padded-thin")

    x-img(src="images/crime.jpg" width=160 height=160 alt="Police Officers")

::: column(width=400)

Na última década, __departamentos de polícia__ ao redor do mundo começaram a confiar mais em matemática. Algoritmos especiais podem usar os dados de crimes passados para prever quando e onde os crimes poderão ocorrer no futuro. Por exemplo, o sistema _PredPol_ (abreviação de “policiamento preditivo”) ajudou a diminuir a taxa de criminalidade em partes de Los Angeles em 12%!

::: column(width=160)

    x-img(src="images/volcanoes.jpg" width=160 height=160 alt="Volcano")

::: column(width=400)

Acontece que __terremotos__ seguem padrões semelhantes aos crimes. Assim como um crime pode provocar retaliações, um terremoto pode causar tremores secundários. Em matemática, isso é chamado de "processos auto-excitantes", e existem equações que ajudam a prever quando o próximo terremoto pode acontecer.

::: column(width=160)

    x-img(src="images/finance.jpg" width=160 height=160 alt="Stock Market Charts")

::: column(width=400)

Os banqueiros também analisam dados históricos dos preços das ações, taxas de juros e taxas de câmbio para estimar como __mercados financeiros__ podem mudar no futuro. Ser capaz de prever se o valor de uma ação vai subir ou descer pode ser extremamente lucrativo!

:::

Os matemáticos profissionais usam algoritmos altamente complexos para encontrar e analisar todos esses padrões, mas vamos começar com algo um pouco mais básico.

---
> id: simple-patterns

### Sequências Simples

Na matemática, uma [__sequência__](gloss:sequence) é uma cadeia de números (ou outros objetos) que geralmente seguem um padrão específico. Os elementos individuais em uma sequência são chamados [__termos__](gloss:sequence-term).

Aqui estão alguns exemplos de sequências. Você consegue encontrar seus padrões e calcular os próximos dois termos?

{.text-center.s-orange.with-arrows} _{.n}3_, _{.n}6*{span.arrow}+3*_,
_{.n}9*{span.arrow(hidden)}+3*_, _{.n}12*{span.arrow(hidden)}+3*_,
_{.n}15*{span.arrow(hidden)}+3*_, _{.n}[[18]]*{span.arrow(hidden)}+3*_
_{.n}[[21]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-0 blank-1")} Padrão: “Adicione 3 ao número anterior para obter o próximo.”_

{.text-center.s-teal.with-arrows} _{.n}4_, _{.n}10*{span.arrow(hidden)}+6*_,
_{.n}16*{span.arrow(hidden)}+6*_, _{.n}22*{span.arrow(hidden)}+6*_,
_{.n}28*{span.arrow(hidden)}+6*_, _{.n}[[34]]*{span.arrow(hidden)}+6*_,
_{.n}[[40]]*{span.arrow(hidden)}+6*_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Padrão: “Adicione 6 ao número anterior para obter o próximo.”_

{.text-center.s-purple.with-arrows} _{.n}3_, _{.n}4*{span.arrow(hidden)}+1*_,
_{.n}7*{span.arrow(hidden)}+3*_, _{.n}8*{span.arrow(hidden)}+1*_,
_{.n}11*{span.arrow(hidden)}+3*_, _{.n}[[12]]*{span.arrow(hidden)}+1*_,
_{.n}[[15]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Padrão: “Adicione alternadamente 1 e 3 ao número anterior, para obter o próximo.”_

{.text-center.s-lime.with-arrows} _{.n}1_, _{.n}2*{span.arrow(hidden)}×2*_,
_{.n}4*{span.arrow(hidden)}×2*_, _{.n}8*{span.arrow(hidden)}×2*_,
_{.n}16*{span.arrow(hidden)}×2*_, _{.n}[[32]]*{span.arrow(hidden)}×2*_,
_{.n}[[64]]*{span.arrow(hidden)}×2*_, …
_{span.pattern.reveal(when="blank-6 blank-7")} Padrão: “Multiplique o número anterior por 2, para obter o próximo.”_

---
> id: simple-patterns-1

Os pontos (…) no final significam simplesmente que a sequência pode continuar para sempre. Ao nos referirmos a seqüências como esta em matemática, geralmente representamos todos os termos por uma [variável](gloss:variable) especial:

    p.text-center.s-orange
      for i in [1, 2, 3, 4, 5, 6, 7]
        span.math.n
          msub
            mi x
            mn= i
        | ,&nbsp;
      | …

O pequeno número após o _x_ é chamado de __subscrito__ e indica a posição do termo na sequência. Isso significa que podemos representar o termo _n_ na sequência por [[`x_n`|`x_i`|`x_2`]].

---
> id: triangles

### Números triangulares e quadrados

Sequências em matemática nem sempre precisam ser números. Aqui está uma sequência que consiste em formas geométricas - triângulos de tamanho crescente:

::: column(width=24 parent="padded-thin")

{.text-center} __1__

    include svg/triangle-1.svg

::: column(width=52)

{.text-center} __3__

    include svg/triangle-2.svg

::: column(width=80)

{.text-center} __6__

    include svg/triangle-3.svg

::: column(width=108)

{.text-center.b} [[10]]

    include svg/triangle-4.svg

::: column(width=136)

{.text-center.b} [[15]]

    include svg/triangle-5.svg

::: column(width=164)

{.text-center.b} [[21]]

    include svg/triangle-6.svg

:::

---
> id: triangle-1

A cada passo, adicionamos mais uma linha ao triângulo anterior. O comprimento dessas novas linhas também aumenta em uma vez. Você pode ver o padrão?

{.text-center.s-orange.with-arrows} _{.n}1_, _{.n}3*{span.arrow}+2*_,
_{.n}6*{span.arrow}+3*_, _{.n}10*{span.arrow}+4*_,
_{.n}15*{span.arrow}+5*_, _{.n}21*{span.arrow}+6*_
_{.n}[[28]]*{span.arrow.reveal(when="blank-0")}+7*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-1")}+8*_, …

---
> id: recursive

Também podemos descrever esse padrão usando uma [fórmula](gloss:formula) especial:

    p.text-center.s-orange
      span.n.md `x_n`
      | &nbsp;=&nbsp;
      span.n.md `x_(n-1)`
      | &nbsp;+&nbsp;
      em#t3 n

Para obter o _n_-ésimo número triangular, pegamos o número triangular [[anterior|inicial|seguinte]] e adicionamos _n_. Por exemplo, se _n_ = ${n}{n|5|2,20,1}, a fórmula se tornará <msub><mi>x</mi><mn>${n}</mn> </msub> = <msub> <mi > x </mi> <mn> ${n-1} </mn> </msub> + ${n}.

---
> id: recursive-1

Uma fórmula que expressa `x_n` como uma função de termos anteriores na sequência é chamada de [__fórmula recursiva__](gloss:sequence-recursive). Desde que se conheça o [[primeiro termo|último termo|segundo termo]] na sequência, você poderá calcular todos os termos seguintes.

---
> id: squares

    hr

Outra sequência que consiste em formas geométricas são os __números quadrados__. Cada termo é formado por quadrados cada vez maiores:

::: column(width=24 parent="padded-thin squares")

{.text-center} __1__

    include svg/square-1.svg

::: column(width=50)

{.text-center} __4__

    include svg/square-2.svg

::: column(width=76)

{.text-center} __9__

    include svg/square-3.svg

::: column(width=102)

{.text-center.b} [[16]]

    include svg/square-4.svg

::: column(width=128)

{.text-center.b} [[25]]

    include svg/square-5.svg

::: column(width=154)

{.text-center.b} [[36]]

    include svg/square-6.svg

:::

---
> id: square-1

Para os números triangulares, encontramos uma fórmula recursiva que informa o _próximo_ termo da sequência como uma função de seus termos _anteriores_. Para números quadrados, podemos fazer ainda melhor: uma fórmula que informa diretamente o _n_-ésimo termo, sem ter que calcular todos os anteriores:

{.text-center.s-purple} _{.n} `x_n`_ = _{x-equation(solution="n^2")}_

---
> id: explicit

Isso é chamado de [__fórmula explícita__](gloss:sequence-explicit). Podemos usá-la, por exemplo, para calcular que o 13º número quadrado é [[169]], sem primeiro encontrar os 12 números quadrados anteriores.

---
> id: definitions

    hr

Vamos resumir todas as definições que vimos até agora:

::: .theorem

Uma [__sequência__](gloss:sequence) é uma lista de números, formas geométricas ou outros objetos que seguem um padrão específico. Os itens individuais na sequência são chamados [__termos__](gloss:sequence-term) e representados por variáveis como `x_n`.

Uma [__fórmula recursiva__](gloss:sequence-recursive) para uma sequência informa o valor do _n_-ésimo termo em função de [[seus termos anteriores|seu primeiro termo]]. Você também precisa especificar o(s) primeiro(s) termo(s).

Uma [__fórmula explícita__](gloss:sequence-explicit) para uma sequência informa o valor do _n_-ésimo termo como uma função de [[apenas _n_|termos anteriores]], sem se referir a outros termos na sequência.

:::

---
> id: action-sequence

### Fotografia de sequência de ação

Nas seções a seguir, você aprenderá sobre muitas sequências matemáticas diferentes, padrões surpreendentes e aplicações inesperadas.

Primeiro, porém, vamos ver algo completamente diferente: __fotografia de sequência de ação__. Um fotógrafo tira muitas fotos em rápida sucessão e as funde em uma única imagem:

    figure: x-img(src="images/action-1.jpg" width=640 height=320 alt="Skiing Jump")

Você pode ver como o esquiador forma uma sequência? O padrão não é adição ou multiplicação, mas uma [transformação geométrica](gloss:rigid-transformation). Entre etapas consecutivas, o esquiador é transladado e [[rotacionado|refletido|dilatado]].

---
> id: action-sequence-1

Aqui estão mais alguns exemplos de fotografias de sequência de ação para sua diversão:

::: column(width=320 parent="padded-thin")

    x-img(src="images/action-2.jpg" width=320 height=160 credit="© Ray Demski" lightbox alt="Jumping Volleyball Player")

::: column(width=320)

    x-img(src="images/action-3.jpg" width=320 height=160 credit="© Ray Demski" lightbox alt="Wind Surfing")

::: column(width=320)

    x-img(src="images/action-4.jpg" width=320 height=160 credit="© Marcio Abe" lightbox alt="Snowboard Jump")

::: column(width=320)

    x-img(src="images/action-5.jpg" width=320 height=160 credit="© Jason Halayko" lightbox alt="Mountain Bike Jump")

::: column(width=320)

    x-img(src="images/action-6.jpg" width=320 height=160 credit="© Jason Halayko" lightbox alt="Mountain Bike Jump")

::: column(width=320)

    x-img(src="images/action-7.jpg" width=320 height=160 lightbox alt="Kite Surfing")

:::

---

## Sequências Aritméticas e Geométricas

> section: arithmetic-geometric
> id: halley
> translated: auto

::: column.grow

Em 1682, o astrônomo [Edmond Halley](bio:halley) observou um fenômeno incomum: um objeto branco brilhante com uma cauda longa que se movia pelo céu noturno. Era um cometa __>>>>, uma rocha pequena e gelada que voava pelo espaço, deixando para trás um rastro de poeira e gelo.

Halley lembrou que outros astrônomos haviam observado cometas semelhantes muito antes: um em 1530 e outro em 1606. Observe que a diferença entre duas observações consecutivas é a mesma nos dois casos: [[76]] anos.

::: column(width=320)

    x-img(width=320 height=256 src="images/halley.jpg" alt="Halley’s Comet")
    p.caption Image of Halley’s Comet,#[br]taken in 1986 on Easter Island

:::

---
> id: halley-1

Halley concluiu que todas as três observações eram de fato do mesmo cometa - que agora é chamado de _cometa de Halley_. Está orbitando em torno do sol e passa pela Terra aproximadamente a cada 76 anos. Ele também previu quando o cometa seria visível a seguir:

{.text-center.s-orange.s-large.with-arrows} _{span.n}1530_,
_{span.n}1606*{span.arrow}+76*_, _{.n}1682*{span.arrow}+76*_,
_{.n}1758*{span.arrow}+76*_, _{.n}[[1834]]*{span.arrow}+76*_,
_{.n}[[1910]]*{span.arrow}+76*_, _{.n}[[1986]]*{span.arrow}+76*_, …

---
> id: halley-2

Na verdade, o intervalo de tempo nem sempre é _exatamente_ 76 anos: pode variar em um ou dois anos, pois a órbita do cometa é interrompida por outros planetas. Hoje sabemos que o cometa de Halley foi observado pelos astrônomos antigos em 240 aC!

    figure
      .row
        x-img(src="images/halley-1.jpg" width=160 height=180)
        x-img(src="images/halley-2.jpg" width=173 height=180 lightbox)
        x-img(src="images/halley-3.jpg" width=200 height=180 lightbox)
        x-img(src="images/halley-4.jpg" width=130 height=180 lightbox)
      p.caption Depections of Halley’s comet throughout time: a Babylonian tablet (164 BC), a medival tapestry (1070s), a science magazine (1910) and a Soviet stamp (1986).

---
> id: ball

Um grupo diferente de cientistas está investigando o comportamento de uma bola de tênis quicando. Eles largaram a bola a uma altura de 10 metros e mediram sua posição ao longo do tempo. A cada salto, a bola perde parte da sua altura original:

    x-coordinate-system(padding="12 12 24 120" width=640 height=320 x-axis="0,7,1" label-suffix="s,m" axis-names="time,height")
      .tennis-ball
      .tennis-ball
    x-slider(steps=400 speed=0.5)

---
> id: ball-1
> goals: reveals

Os cientistas notaram que a bola perde 20% de sua altura após cada salto. Em outras palavras, a altura máxima de cada salto é 80% da altura anterior. Isso permitiu prever a altura de cada salto seguinte:

{.text-center.s-teal.s-large.with-arrows} _{span.n}10_,
_{span.n}8*{span.arrow}×0.8*_, _{.n}[[6.4]]*{span.arrow}×0.8*_,
_{span.n}[[5.12]]*{span.arrow}×0.8*_,
_{span.n.reveal}4.096*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}3.277*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.621*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.097*{span.arrow}×0.8*_*{span.reveal}, …*

---
> id: arithmetic-geometric

Definições

Se você comparar esses dois problemas, poderá notar que existem muitas semelhanças: a sequência do cometa de Halley tem a mesma diferença entre termos consecutivos, enquanto a sequência de bolas de tênis bate na mesma proporção [[619} entre termos consecutivos.

---
> id: arithmetic-geometric-1

Sequências com essas propriedades têm um nome especial:

::: column.grow

::: .theorem.s-red

    p.text-center: include svg/comet.svg

Uma sequência [__aritmética__](gloss:arithmetic-sequence) tem uma constante __{.m-red} de diferença _d___ entre termos consecutivos.

O mesmo número é adicionado ou subtraído a cada termo, para produzir o próximo.

:::

::: column.grow

::: .theorem.s-green

    p.text-center: include svg/ball.svg

Uma [__sequência geométrica__](gloss:geometric-sequence) possui uma razão constante __{.m-green} _r___ entre termos consecutivos.

Cada termo é multiplicado ou dividido pelo mesmo número, para produzir o próximo.

:::

:::

---
> id: arithmetic-geometric-select

Aqui estão algumas sequências diferentes. Você pode determinar quais são aritméticos, geométricos ou nenhum, e quais são os valores de _{.b.m-red} d_ e _{.b.m-green} r_?

::: column(width=330 parent="ag-select")

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 4_, _{span.n} 8_, _{span.n} 16_, _{span.n} 32_, _{span.n} 64_,…

::: column(width=320)

é [[geométrico|arithmetic|neither]] _{span.reveal(when="blank-0")}, com razão [[2]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 5_, _{span.n} 8_, _{span.n} 11_, _{span.n} 14_, _{span.n} 17_,…

::: column(width=320)

é [[aritmética|geometric|neither]] _{span.reveal(when="blank-2")}, com diferença [[3]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 17_, _{span.n} 13_, _{span.n} 9_, _{span.n} 5_, _{span.n} 1_, _{span.n} –3_,…

::: column(width=320)

é [[aritmética|geometric|neither]] _{span.reveal(when="blank-4")}, com diferença [[-4]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 2_, _{span.n} 4_, _{span.n} 7_, _{span.n} 11_, _{span.n} 16_, _{span.n} 22_,…

::: column(width=320)

não [[é|arithmetic|geometric]] _{span.reveal(when="blank-6")}._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 40_, _{span.n} 20_, _{span.n} 10_, _{span.n} 5_, _{span.n} 2,5_, _{span.n} 1,25_,…

::: column(width=320)

é [[geométrico|arithmetic|neither]] _{span.reveal(when="blank-7")}, com razão [[0,5]]._

:::

---
> id: arithmetic-geometric-graph

Para definir uma seqüência aritmética ou geométrica, precisamos saber não apenas a diferença ou razão comum, mas também o valor inicial (chamado `a`). Aqui você pode gerar suas próprias seqüências e plotar seus valores em um gráfico, alterando os valores de `a`, _d_ e _r_. Você consegue encontrar algum padrão?

::: column.ag-chart(width=320)

Sequência Aritmética #### {.m-red}

{.text-center} `a` = ${a}{a|2|-10,10,0.2}, _d_ = ${d}{d|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small} _{span.n}${arithmetic(a,d,0)}_,
_{span.n}${arithmetic(a,d,1)}_, _{span.n}${arithmetic(a,d,2)}_,
_{span.n}${arithmetic(a,d,3)}_, _{span.n}${arithmetic(a,d,4)}_,
_{span.n}${arithmetic(a,d,5)}_, …

    x-coordinate-system(padding="12 12 24 40" width=320 height=240)
    x-gesture(target="#arithmetic-geometric-graph x-var" slide="100,0")

::: column.ag-chart.s-green(width=320)

#### {.m-green} Sequência geométrica

{.text-center} `a` = ${b}{b|2|-10,10,0.2}, _r_ = ${r}{r|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small} _{span.n}${geometric(b,r,0)}_,
_{span.n}${geometric(b,r,1)}_, _{span.n}${geometric(b,r,2)}_,
_{span.n}${geometric(b,r,3)}_, _{span.n}${geometric(b,r,4)}_,
_{span.n}${geometric(b,r,5)}_, …

    x-coordinate-system.green(padding="12 12 24 40" width=320 height=240)

:::

{.reveal(when="var-0 var-1 var-2 var-3")} Observe como todas as __{.m-red} seqüências aritméticas__ parecem muito semelhantes: se a diferença é positiva, elas [[aumentam|decrease]] constantemente, e se a diferença é negativa, elas [[diminuem|increase]].

{.reveal(when="blank-0 blank-1")} Seqüências geométricas, por outro lado, podem se comportar de maneira completamente diferente com base nos valores de `a` e _r_:

::: column.frame.f-blue.text-center.reveal(when="blank-0 blank-1" animation="pop" width=220 parent="padded-thin")

Se [`r > 1`](action:set(2,2)), os termos [[rapidamente aumentarão|quickly decrease|get closer to zero]] _{span.reveal(when="blank-2")}, até o infinito. Os matemáticos dizem que a sequência [__diverge__](gloss:sequence-divergence)._

::: column.frame.f-blue.text-center.reveal(when="blank-2" animation="pop" delay=200 width=220)

Se [_r_ estiver entre –1 e 1](action:set(10,0.6)), os termos sempre [[se aproximarão de 0|decrease to negative infinity|get smaller]] _{span.reveal(when="blank-3")}. Dizemos que a sequência [__converge__](gloss:sequence-convergence)._

::: column.frame.f-blue.text-center.reveal(when="blank-3" animation="pop" delay=200 width=220)

Se [`r < -1`](action:set(3,-1.4)), os termos alternarão entre positivo e negativo, enquanto o seu [[valor absoluto|inverse|difference]] aumenta.

:::

{.reveal(when="blank-4 blank-5")} Você aprenderá mais sobre convergência e divergência na [última seção](/course/sequences/convergence) deste curso.

---
> id: arithmetic-geometric-recursive

### Fórmulas Recursivas e Explícitas

Na seção anterior, você aprendeu que uma fórmula [__recursiva__](gloss:sequence-recursive) informa o valor de cada termo como uma função dos termos anteriores. Aqui estão as fórmulas recursivas para sequências aritméticas e geométricas:

::: column.grow

{.text-center} `x_n =` [[`x_(n-1) + d`|`x_(n-1) × d`|`x_d + n`]]

::: column.grow

{.text-center} `x_n =` [[`x_(n-1) × r`|`x_(n-1) - r`|`x_n - r + n`]]

:::

---
> id: arithmetic-geometric-explicit

Um problema com as fórmulas recursivas é que, para encontrar o 100º termo, por exemplo, primeiro precisamos calcular os 99 termos anteriores - e isso pode levar muito tempo. Em vez disso, podemos tentar encontrar uma [__fórmula explícita__](gloss:sequence-explicit), que nos informa o valor do termo _n_ diretamente.

::: column.grow

Para __{.m-red} sequências aritméticas__, temos que adicionar _d_ a cada passo:

{.ag-equation} `x_1 =` `a`

{.ag-equation} `x_2 =` `a + d`

{.ag-equation} `x_3 =` `a + d + d`

{.ag-equation} `x_4 =` _{x-equation(solution="a+d+d+d")}_

{.ag-equation.reveal(when="eqn-0")} `x_5 =` _{x-equation(solution="a+d+d+d+d")}_

{.reveal(when="eqn-1")} No termo _n_, estamos adicionando [[`n-1`|`n`|`n+1`]] cópias de _d_, de modo que a fórmula geral é

{.ag-equation.reveal(when="blank-0")} `x_n = a + d × (n-1)`.

::: column.grow

Para __{.m-green} sequências geométricas__, temos que multiplicar _r_ a cada passo:

{.ag-equation} `x_1 = a`

{.ag-equation} `x_2 = a × r`

{.ag-equation} `x_3 = a × r × r`

{.ag-equation} `x_4 =` _{x-equation(solution="a×r×r×r")}_

{.ag-equation.reveal(when="eqn-2")} `x_5 =` _{x-equation(solution="a×r×r×r×r")}_

{.reveal(when="eqn-3")} No termo _n_, multiplicamos [[`n-1`|`n`|`n+1`]] cópias de _r_, de modo que a fórmula geral é

{.ag-equation.reveal(when="blank-1")} `x_n = a × r^(n-1)`.

:::

---
> id: arithmetic-geometric-explicit-1

Aqui está um resumo de todas as definições e fórmulas que você viu até agora:

::: column.grow

::: .theorem.s-red

Uma sequência aritmética __{.m-red}__ possui primeiro termo `a` e diferença comum `d` entre termos consecutivos.

{.text-center} __Fórmula recursiva__: `x_n = x_(n-1) + d`

{.text-center} __Fórmula explícita__: `x_n = a + d × (n-1)`

:::

::: column.grow

::: .theorem.s-green

Uma sequência geométrica __{.m-green}__ tem primeiro termo `a` e razão comum `r` entre termos consecutivos.

{.text-center} __Fórmula recursiva__: `x_n = x_(n-1) × r`

{.text-center} __Fórmula explícita__: `x_n = a × r^(n-1)`

:::

:::

Agora, vamos dar uma olhada em alguns exemplos em que podemos usar tudo isso!

---
> id: pay-it-forward
> goals: video

### Pague adiante

Aqui está um pequeno clipe do filme _Pay it Forward_, onde Trevor, de 12 anos, explica sua idéia de tornar o mundo um lugar melhor:

    figure
      x-video(src="https://static.mathigon.org/videos/pay-it-forward.mp4" poster="images/pay-it-forward.jpg" width=640 height=360 controls audio)
      .caption Extract from “Pay It Forward” (2000), © Warner Bros. Entertainment

---
> id: pay-it-forward-1

A essência da ideia de Trevor é que, se todos "pagarem adiante", uma única pessoa poderá ter um enorme impacto no mundo:

    figure: img(src="images/pay-it-forward.png" width=700 height=220)

Observe como o número de pessoas em cada etapa forma uma [[sequência geométrica|arithmetic sequence|triangle number]], _{span.reveal(when="blank-0")} com razão comum [[3]]:_

{.text-center.s-orange.with-arrows.reveal(when="blank-1")} _{span.n}1_,
_{span.n}3*{span.arrow}×3*_, _{span.n}9*{span.arrow}×3*_,
_{span.n}[[27]]*{span.arrow}×3*_, _{span.n}[[81]]*{span.arrow}×3*_,
_{span.n}[[243]]*{span.arrow}×3*_, …

---
> id: pay-it-forward-2

Usando a [fórmula explícita](gloss:sequence-explicit) para seqüências geométricas, podemos calcular quantas novas pessoas são afetadas a qualquer etapa:

{.text-center} `x_n` = _{x-equation(solution="3^(n-1)")}_

---
> id: pay-it-forward-3

O número de pessoas aumenta incrivelmente rapidamente. Na 10ª etapa, você alcançaria 19.683 novos e, após 22 etapas, alcançaria mais pessoas do que as que atualmente estão vivas na Terra.

Essa sequência de números tem um nome especial: os poderes de __de 3__. Como você pode ver, todo termo é na verdade apenas um [poder](gloss:powers) diferente de de 3:

{.text-center.s-orange} _{span.n}`3^0`_, _{span.n}`3^1`_, _{span.n}`3^2`_,
_{span.n}`3^3`_, _{span.n}`3^4`_, _{span.n}`3^5`_, …

---
> id: millionaire

### Quem quer ser um milionário?

{.todo} EM BREVE!

---
> id: chessboard

### O problema do tabuleiro de xadrez

{.todo} EM BREVE!

---

## Números figurativos

> section: figurate
> id: figurate
> translated: auto

O nome das [sequências geométricas](gloss:geometric-sequence) é bastante confuso, porque elas não têm nada a ver com geometria. De fato, o nome foi desenvolvido há centenas de anos atrás, quando os matemáticos pensavam na _multiplicação_ e _raízes quadradas_ de uma maneira muito mais geométrica.

No entanto, existem muitas outras seqüências que _são_ baseadas em certas formas geométricas - algumas das quais você já viu na [introdução](/course/sequences/introduction) do. Essas seqüências são freqüentemente chamadas de [__números figurados__](gloss:figurate-numbers), e nesta seção, veremos mais de perto algumas delas.

---
> id: triangle-numbers

### Números Triângulos

Os __números do triângulo__ são gerados criando triângulos de tamanho progressivamente maior:

::: column(width=24 parent="padded-thin")

{.text-center} __1__

    include svg/triangle-1.svg

::: column(width=52)

{.text-center} __3__

    include svg/triangle-2.svg

::: column(width=80)

{.text-center} __6__

    include svg/triangle-3.svg

::: column(width=108)

{.text-center} __10__

    include svg/triangle-4.svg

::: column(width=136)

{.text-center} __15__

    include svg/triangle-5.svg

::: column(width=164)

{.text-center} __21__

    include svg/triangle-6.svg

:::

Você já viu a fórmula recursiva para números de triângulo: `x_n =` [[`x_(n-1) + n`|`n^2 - 1`|`2 × x_(n-1) - 1`]].

---
> id: billiard-pool

Não é por acaso que sempre existem 10 pinos no boliche ou 15 bolas no bilhar: ambos são números de triângulo!

::: column(width=320)

    x-img(src="images/bowling.jpg" width=320 height=240)

::: column(width=320)

    x-img(src="images/billiard.jpg" width=320 height=240)

:::

---
> id: triangle-proof

Infelizmente, a fórmula recursiva não é muito útil se quisermos encontrar o número do triângulo 100 ou 5000, sem primeiro calcular todos os números anteriores. Mas, como fizemos com seqüências aritméticas e geométricas, podemos tentar encontrar uma fórmula explícita para os números dos triângulos.

{.todo} EM BREVE: Prova animada para a fórmula do número do triângulo

---
> id: triangle-sums

Os números dos triângulos parecem aparecer em toda parte na matemática e você os verá novamente ao longo deste curso. Um fato particularmente interessante é que _qualquer número inteiro_ pode ser escrito como a soma de no máximo três números de triângulo:

::: column(width=140 parent="triangle-sum")

{.text-center} ${n}{n|42|1,100,1}

    svg.t-sum(width=140 height=140)
    x-gesture(target="#triangle-sums x-var" slide="100,0")

::: column(width=40)

{.text-center} =

::: column(width=140)

{.text-center} __{.t-sum}__

    svg.t-sum.red(width=140 height=140)

::: column(width=40)

{.text-center} +

::: column(width=140)

{.text-center} __{.t-sum}__

    svg.t-sum.blue(width=140 height=140)

::: column(width=40)

{.text-center} +

::: column(width=140)

{.text-center} __{.t-sum}__

    svg.t-sum.green(width=140 height=140)

:::

{.reveal(when="slide")} O fato de isso funcionar para _todos os_ números inteiros foi comprovado pela primeira vez em 1796 pelo matemático alemão [Carl Friedrich Gauss](bio:gauss) - aos 19 anos!

---
> id: triangle-investigate

::: .box.f-blue

#### Problem Solving

Qual é a soma dos 100 primeiros [números inteiros positivos](gloss:integer)? Em outras palavras, qual é o valor de

{.text-center} `1 + 2 + 3 + 4 + 5 + … + 97 + 98 + 99 + 100`?

Em vez de somar tudo manualmente, você pode usar os números do [triângulo](gloss:triangle-numbers) para ajudá-lo? E a soma dos primeiros 1000 números inteiros positivos?

:::

---
> id: square-numbers

### Números Quadrados e Poligonais

Outra sequência baseada em formas geométricas são os __números quadrados__:

{.text-center.s-purple.with-arrows} _{.n}1_,
_{.n}4*{span.arrow.reveal(when="blank-4")}+3*_,
_{.n}9*{span.arrow.reveal(when="blank-4")}+5*_,
_{.n}16*{span.arrow.reveal(when="blank-4")}+7*_,
_{.n}[[25]]*{span.arrow.reveal(when="blank-4")}+9*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-4")}+11*_,
_{.n}[[49]]*{span.arrow.reveal(when="blank-4")}+13*_,
_{.n}[[64]]*{span.arrow.reveal(when="blank-4")}+15*_, …

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Você pode calcular que os números são essa sequência ao quadrado de todo número inteiro (`1^2`, `2^2`, `3^2`,…), mas acontece que existe outro padrão: as diferenças entre os números quadrados consecutivos são as seguintes: [[números ímpares|triangle numbers|integers]] em ordem crescente!

---
> id: square-numbers-1

::: column.grow

A razão para esse padrão se torna aparente se realmente desenharmos um quadrado. Cada etapa adiciona uma linha e uma coluna. O tamanho desses “cantos” começa em 1 e aumenta em 2 a cada passo - formando assim a sequência de números ímpares.

Isso também significa que o número do quadrado _n_ é apenas a soma dos primeiros números pares _n_! Por exemplo, a soma dos 6 primeiros números ímpares é

{.text-center} `1 + 3 + 5 + 7 + 9 + 11 =` [[36]].

::: column(width=240)

    include svg/square-steps.svg
    x-slider(steps=6 initial=6 no-play)

:::

---
> id: square-numbers-2

Além disso, todo número quadrado também é a soma de dois números consecutivos de [triângulo](gloss:triangle-numbers). Por exemplo, ${n×n}{n|4|1,20,1} = ${n×(n+1)/2} + ${n×(n-1)/2}. Você pode ver como podemos dividir cada quadrado ao longo de sua diagonal em dois triângulos?

---
> id: polygon-numbers

::: column(width=300)

    svg(width=300 height=260)
    .text-center #[msub #[mi x]#[mn]]#[mo(value="=") =]#[mn]
    x-slider(steps=11 initial=3 no-play)

::: column.grow

Após números triangulares e quadrados, podemos continuar com polígonos [maiores](gloss:polygon). As seqüências numéricas resultantes são chamadas __números poligonais__.

Por exemplo, se usarmos polígonos com lados ${k}{k|5|3,10,1}, obteremos a sequência de __${polygonName(k)} números__.

Você pode encontrar fórmulas recursivas e explícitas para o número poligonal _n_ que possui _k_ lados? E você percebe outros padrões interessantes para polígonos maiores?

:::

---
> id: tetrahedral

### Números tetraédricos e cúbicos

Obviamente, também não precisamos nos limitar a formas e padrões bidimensionais. Poderíamos empilhar esferas para formar pequenas pirâmides, assim como você empilharia laranjas em um supermercado:

::: column(width=64 parent="padded-thin")

{.text-center} __1__

    x-tetrahedron(size=160 layers=1 style="margin: 0 -48px")

::: column(width=88)

{.text-center} __[[4]]__

    x-tetrahedron(size=160 layers=2 style="margin: 0 -36px")

::: column(width=112)

{.text-center} __[[10]]__

    x-tetrahedron(size=160 layers=3 style="margin: 0 -24px")

::: column(width=136)

{.text-center} __20__

    x-tetrahedron(size=160 layers=4 style="margin: 0 -12px")

::: column(width=160)

{.text-center} __35__

    x-tetrahedron(size=160 layers=5)

:::

---
> id: tetrahedral-1

Os matemáticos costumam chamar essas pirâmides de [__tetraedra__](gloss:tetrahedron) e a sequência resultante [__números tetraédricos__](gloss:tetrahedral-numbers).

{.todo} EM BREVE: Mais sobre números tetraédricos, números cúbicos e os 12 dias do Natal.

---

## Sequências como funções

> section: functions
> sectionStatus: dev

FAÇAM

---

## Números de Fibonacci

> section: fibonacci
> id: rabbits
> translated: auto

Imagine que você recebeu um par de coelhos bebê, um macho e uma fêmea. São coelhos muito especiais, porque nunca morrem, e a fêmea dá à luz um novo par de coelhos exatamente uma vez por mês (sempre outro par de machos e fêmeas).

    x-slideshow
      .stage.rabbits(slot="stage")
        .rabbits-wrap.s-orange.s-small
          svg(width=760 height=456 viewBox="0 0 760 456")
            line(y1=51  x2=760 y2=51)
            line(y1=130 x2=760 y2=130)
            line(y1=209 x2=760 y2=209)
            line(y1=287 x2=760 y2=287)
            line(y1=366 x2=760 y2=366)
            path(d="M84,91c223.68,0,405,7,405,45")
            path(d="M84,170c124.82,0,226,14,226,45")
            path(d="M84,248c74.56,0,135,20.15,135,45")
            path(d="M534,248c74.56,0,135,20.15,135,45")
            path(d="M84,327a45,45,0,0,1,45,45")
            path(d="M354,327a45,45,0,0,1,45,45")
            path(d="M534,327a45,45,0,0,1,45,45")
            polygon(points="489 150 481 130 489 135 497 130 489 150")
            polygon(points="310 229 302 209 310 214 318 209 310 229")
            polygon(points="219 307 211 287 219 292 227 287 219 307")
            polygon(points="669 307 661 287 669 292 677 287 669 307")
            polygon(points="129 386 121 366 129 371 137 366 129 386")
            polygon(points="399 386 391 366 399 371 407 366 399 386")
            polygon(points="579 386 571 366 579 371 587 366 579 386")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="left: 2%; top: 0%; width: 7%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 13%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 30%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 61%; top: 34%; width: 7%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 47%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 37%; top: 51%; width: 7%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 47%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 64%")
          img.rabbit(src="images/rabbits-4.svg" width=85 height=75 style="left: 25%; top: 68%; width: 7%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 35%; top: 64%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 64%")
          img.rabbit(src="images/rabbits-5.svg" width=85 height=75 style="left: 85%; top: 68%; width: 7%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 81%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 13%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-4.svg" width=85 height=75 style="left: 23%; top: 81%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 35%; top: 81%")
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="left: 49%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 81%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 73%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-5.svg" width=85 height=75 style="left: 83%; top: 81%")

          .n(style="top: 0%") 1
          .n(style="top: 15%") 1
          .n(style="top: 32%") 2
          .n(style="top: 49%") 3
          .n(style="top: 66%") 5
          .n(style="top: 84%") 8

      .legend(slot="legend") In the first month, the rabbits are very small and can’t do much – but they grow very quickly.
      .legend(slot="legend") After one month, the rabbits are grown up and can start mating…
      .legend(slot="legend") … and after another month, they will give birth to their first pair of kids. You now have two pairs of rabbits.
      .legend(slot="legend") In the next month, your pair of rabbits will give birth to another couple. Meanwhile, the first pair of kids have grown up. You now have three pairs in total.
      .legend(slot="legend") In the fifth month, your original pair of rabbits will give birth to a new pair. At the same time, their first pair of kids is now old enough to give birth to grandchildren. You now have five pairs of rabbits.
      .legend(slot="legend") In the sixth month, there are three more couples that give birth: the original one, as well as their first two pairs or kids.

---
> id: rabbits-1

{.r} No mês seguinte, você teria 13 pares de coelhos: os 8 do mês anterior, mais 5 novos conjuntos de bebês. Você pode detectar um padrão nesta sequência? _{button.next-step} Continuar_

---
> id: rabbits-2

O número de coelhos em um determinado mês é [[a soma dos dois números anteriores|twice the previous number]]. _{span.reveal(when="blank-0")} Em outras palavras, você deve adicionar os *dois* termos anteriores na sequência, para obter o próximo. A sequência começa com dois 1s e a [fórmula recursiva](gloss:sequence-recursive) é_

{.text-center.s-orange.reveal(when="blank-0")} *{span.n}`x_n`* =
*{span.n}`x_(n-1)`* + *{span.n}`x_(n-2)`*

---
> id: rabbits-3

Você pode calcular o número de coelhos depois de mais alguns meses?

{.text-center.s-orange} _{.n}1_, _{.n}1_, _{.n}2_, _{.n}3_, _{.n}5_, _{.n}8_,
_{.n}[[13]]_, _{.n}[[21]]_, _{.n}[[34]]_, _{.n}[[55]]_, _{.n}[[89]]_,
_{.n}[[144]]_, …

{.reveal(when="blank-5")} Então, após 12 meses, você terá 144 pares de coelhos!

    figure.reveal(when="blank-5")
      x-img(src="images/rabbits.jpg" width=600 height=230)

---
> id: fibonacci

Essa sequência de números é chamada de [__Sequência de Fibonacci__](gloss:fibonacci-numbers), nomeada em homenagem ao matemático italiano [Leonardo Fibonacci](bio:fibonacci).

::: column.grow

Quando Fibonacci nasceu em 1175, a maioria das pessoas na Europa ainda usava o [sistema de numeração romana](gloss:roman-numerals) para números (por exemplo, IVX ou MCMLIV). O pai de Fibonacci era comerciante e juntos eles viajaram para o norte da África e o Oriente Médio. Foi lá que Fibonacci aprendeu o [sistema de algarismos arábicos](gloss:arabic-numerals).

Quando ele retornou à Itália, Fibonacci escreveu um livro chamado _Liber Abaci_ (latim para "O Livro de Cálculos"), onde ele introduziu os novos algarismos arábicos pela primeira vez nos comerciantes europeus. Eles foram um sucesso imediato - e ainda os usamos hoje.

::: column(width=300)

    x-img(src="images/fibonacci.jpg" width=300 height=300)
    .caption Portrait of Leonardo Fibonacci

:::

Em uma das páginas de seu livro, ele também investigou os padrões de criação de coelhos - é por isso que os números de Fibonacci foram nomeados em homenagem a ele.

    figure
      x-img(src="images/liber-abaci.jpg" width=440 height=290 lightbox)
      p.caption Pages from Fibonacci’s #[em Liber Abaci]

---
> id: spirals

Certamente, os números de Fibonacci não são como os coelhos _realmente_ povoam na vida real. Os coelhos não têm exatamente um filho masculino e uma fêmea todos os meses, e não consideramos os coelhos que morrem eventualmente.

Mas acontece que existem muitos outros lugares na natureza onde os números de Fibonacci _aparecem_: por exemplo, as espirais nas plantas. Você pode contar quantas espirais existem em cada direção?

::: column(width=320)

    x-select.segmented
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/pinecone.jpg)")
      .clockwise(style="background-image: url(images/pinecone-1.jpg)")
      .anticlockwise(style="background-image: url(images/pinecone-2.jpg)")

{.text-center} Esta pinha possui [[8]] espirais no sentido horário e [[13]] espirais no sentido anti-horário.

::: column(width=320)

    x-select.segmented
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/sunflower.jpg)")
      .clockwise(style="background-image: url(images/sunflower-1.jpg)")
      .anticlockwise(style="background-image: url(images/sunflower-2.jpg)")

{.text-center.reveal(when="blank-0 blank-1")} Este girassol possui 34 espirais no sentido horário e 55 espirais no sentido anti-horário.

:::

---
> id: spirals-1

Nos dois casos, os números de espirais são números consecutivos de Fibonacci. O mesmo vale para muitas outras plantas: na próxima vez que sair, conte o número de pétalas em uma flor ou o número de folhas em um caule. Muitas vezes você descobrirá que são números de Fibonacci!

Claro, isso não é apenas uma coincidência. Há uma razão importante pela qual a natureza gosta da sequência de Fibonacci, sobre a qual você aprenderá mais tarde.

---
> id: bees

::: column(width=320)

    x-select.segmented
      div(data-value="male") Male
      div(data-value="female") Female
    .bees
      img(src="images/bees-male.png")
      img(hidden src="images/bees-female.png")

::: column.grow

Os números de Fibonacci também aparecem nas populações de abelhas.

Em toda colônia de abelhas há uma única rainha que coloca muitos ovos. Se um ovo é fertilizado por uma abelha macho, ele choca em uma abelha __fêmea__. Se não for fertilizado, chocará-se em uma abelha __macho__ (chamada drone).

Isso significa que as abelhas têm [[dois pais|one parent]], enquanto as abelhas masculinas têm apenas [[um pai|two parents]].

{.reveal(when="blank-0 blank-1")} Se desenharmos a árvore ancestral de uma abelha, o número de pais, avós, bisavós e gerações anteriores são sempre números de Fibonacci!

Ocasionalmente, jovens abelhas são alimentadas com alimentos especiais chamados “geléia real”. Nesse caso, eles se transformam em rainhas e voam para iniciar uma nova colméia.

:::

---
> id: golden-spiral

### A proporção áurea

Assim como os números quadrados [triângulo](gloss:triangle-numbers) e [quadrados](gloss:square-numbers) e outras sequências que vimos anteriormente, a sequência de Fibonacci pode ser visualizada usando um padrão geométrico:

    x-slideshow.golden-spiral
      .stage(slot="stage"): include svg/spiral.svg
      .legend(slot="legend") We start with two small squares of size 1.
      .legend(slot="legend") Next, we add a new square of size 2, to form a larger rectangle.
      .legend(slot="legend") Next, we add a square of size 3, to form an even larger rectangle.
      .legend(slot="legend") The next square has size 5. Can you see that we’re recreating the Fibonacci numbers?
      .legend(slot="legend") If we continue adding squares, they will have size 8, 13, 21, and so on.
      .legend(slot="legend") You might have noticed that, as the rectangles get larger, they seem to start “spiraling” outwards. We can even visualise this by drawing a perfect spiral that connects the corners of the squares.

---
> id: golden-ratio

A cada passo, os quadrados formam um retângulo maior. Sua largura e altura são sempre dois números consecutivos de Fibonacci. A proporção de __aspecto__ do retângulo é a proporção de sua largura e altura:

::: column(width=100 parent="padded-thin golden-rect")

    include svg/golden-1.svg

{.text-center} `2/1` = 2

::: column(width=100)

    include svg/golden-2.svg

{.text-center} `3/2` = 1,5

::: column(width=100)

    include svg/golden-3.svg

{.text-center} `5/3` = 1,666…

::: column(width=100)

    include svg/golden-4.svg

{.text-center} `8/5` = 1,6

::: column(width=100)

    include svg/golden-5.svg

{.text-center} <mfrac> <mn> [[13]] </mn> <mn> [[8]] </mn> </mfrac> _{span.reveal(when="blank-0 blank-1")} = 1,625_

::: column(width=100)

    include svg/golden-6.svg

{.text-center} <mfrac> <mn> [[21]] </mn> <mn> [[13]] </mn> </mfrac> _{span.reveal(when="blank-2 blank-3")} = 232}_

:::

---
> id: golden-ratio-1
> goals: img-0 img-1

Observe como, à medida que adicionamos mais e mais quadrados, a proporção parece se aproximar cada vez mais de um número específico em torno de 1,6. Esse número é chamado de [__Proporção áurea__](gloss:golden-ratio) e geralmente representado pela letra grega `φ` (“phi”). Seu valor exato é

{.text-center} `(1 + sqrt(5))/2 = 1.61803398875…`

Muitas pessoas acreditam que a proporção áurea é particularmente esteticamente agradável. É por isso que é frequentemente usado por artistas e arquitetos - como nesses dois exemplos:

::: column(width=320)

    .golden-art
      x-img(src="images/pantheon.jpg" width=320 height=198)
      img(src="images/pantheon.png" width=320 height=198)
    x-gesture(target=".golden-art")

{.caption} Diz-se que o escultor grego Phidias usou a proporção áurea ao projetar o _Parthenon_ em Atenas. A primeira letra de seu nome, `φ`, é o símbolo que usamos agora para a proporção áurea.

::: column(width=320)

    .golden-art
      x-img(src="images/dali.jpg" width=320 height=198)
      img(src="images/dali.png" width=320 height=198)

{.caption} _O Sacramento da Última Ceia_, do artista espanhol Salvador Dalí, é uma das muitas pinturas na proporção áurea. No fundo, você também pode ver um grande [dodecaedro](gloss:dodecahedron).

:::

---
> id: golden-ratio-2

Podemos aproximar a proporção áurea dividindo [[dois números consecutivos de Fibonacci.

{.reveal(when="blank-0")} No entanto, verifica-se que o valor exato de `φ` não pode ser escrito como uma fração simples: é um [__número irracional__](gloss:irrational-numbers), assim como [`π`](gloss:pi) e `sqrt(2)` e alguns outros números que você já viu antes.

---
> id: sunflower-growing

Espirais de Fibonacci

::: column.grow

A proporção áurea explica por que os números de Fibonacci aparecem na natureza, como o girassol e a pinha que você viu no início desta seção.

Ambas as plantas crescem para fora do centro (uma parte da planta chamada _meristema_). À medida que novas sementes, folhas ou pétalas são adicionadas, elas empurram as existentes ainda mais para fora.

Mova o controle deslizante à direita para visualizar como uma planta cresce. Observe como cada folha é adicionada em uma rotação diferente da anterior. O ângulo entre duas folhas consecutivas é sempre o mesmo.

::: column(width=300)

    svg.petals(width=300 height=300)
      circle(r=1 cx=150 cy=150)
      - var i = 0
      while i < 40
        path(d="M166,158A20,20,0,0,1,150,150a20,20,0,0,1,32,0A20,20,0,0,1,166,158Z")
        - i += 1

    x-slider(steps=39 speed=0.5)

:::

---
> id: sunflower-spiral

É importante que as flores escolham um ângulo adequado: as folhas ou sementes devem ser aproximadamente igualmente espaçadas para que obtenham a maior quantidade de luz solar e nutrientes. No diagrama abaixo, você pode explorar a aparência de um girassol com ângulos diferentes entre suas sementes:

::: x-slideshow

    .sunflower-spiral(slot="stage")
      .value
      x-slider(steps=1000 continuous speed=0.1 no-play)
      svg(width=400 height=400 viewBox="0 0 400 400")

{div(slot="legend")} Se o ângulo for [0°](action:set(0)), todas as sementes crescerão em uma única linha longa longe do centro.

{div.inline(slot="legend")} Se o ângulo é [`1/2`](action:set(0.5)) de uma rotação completa (180 °), as sementes alternam entre dois “braços” separados que se afastam do centro.

{div.inline(slot="legend")} Se a rotação for outra proporção fracionária de 360 °, por exemplo [`2/5`](action:set(2/5)) ou [`1/3`](action:set(1/3)) ou [`3/8`](action:set(3/8)), o número de “armas” será o mesmo que o [[denominador|numerator|prime factor]] dessa fração.

{div(slot="legend")} Infelizmente, “braços” são ruins, porque significam que as sementes não são distribuídas igualmente: todo o espaço entre os braços é desperdiçado. Mas se [números racionais](gloss:rational-numbers) não estão funcionando, vamos tentar [números irracionais](gloss:irrational-numbers)!

{div.inline(slot="legend")} Um exemplo de número irracional é [`pi`](gloss:pi). Mas se o ângulo entre as sementes é [`1/pi`](action:set(0.31831)) de 360 °, ainda parecemos ter braços: 22 deles. Isso ocorre porque a fração `22/7 = 3.1429…` é uma aproximação muito boa para `pi`. O que realmente precisamos é de um número irracional que _não possa ser_ aproximado por uma fração simples.

{div.inline(slot="legend")} Acontece que a proporção áurea de [é exatamente isso: o “mais irracional” de todos os números irracionais. Se o ângulo entre as sementes for [`1/phi`](action:set(0.6180339)) de 360 °, elas parecem estar quase perfeitamente espaçadas. E este é precisamente o ângulo que as plantas ao redor do mundo estão usando.

:::

    x-gesture(target=".fib-action")

---
> id: sunflower-spiral-1

::: column(width=240)

    x-img(src="images/flowers.jpg" width=240 height=400)

::: column.grow

Você deve se lembrar de cima, que as proporções de números consecutivos de Fibonacci se aproximam cada vez mais da proporção áurea - e é por isso que, se você contar o número de espirais em uma planta, geralmente encontrará um número de Fibonacci.

É importante lembrar que a natureza não sabe sobre os números de Fibonacci. A natureza também não consegue resolver equações para calcular a proporção áurea - mas, ao longo de milhões de anos, as plantas tiveram tempo de sobra para experimentar ângulos diferentes e descobrir o melhor.

Plantas e animais sempre querem crescer da maneira mais eficiente, e é por isso que a natureza está cheia de padrões matemáticos regulares.

:::

---
> id: lucas-numbers

### Fibonachos

Até agora, usamos apenas a equação recursiva para números de Fibonacci. Na verdade, também existe uma equação explícita - mas é muito mais difícil encontrar:

{.text-center} `F_n = 1/(  sqrt(5)) ( ((1 + sqrt(5))/2)^n - ((1 - sqrt(5))/2)^n )`

Também podemos tentar escolher diferentes pontos de partida para os números de Fibonacci. Por exemplo, se começamos com 2, 1, ... em vez de 1, 1, ... obtemos uma sequência chamada __números de Lucas__.

Acontece que, quaisquer que sejam os dois números iniciais escolhidos, as seqüências resultantes compartilham muitas propriedades. Por exemplo, as proporções de termos consecutivos _sempre_ [convergem](gloss:sequence-convergence) para a proporção áurea.

{.text-center.s-purple.s-small}
${a}{a|1|0,10,1}, ${b}{b|1|0,10,1}, _{span.n}${a+b}_, _{span.n}${a+2×b}_,
_{span.n}${2×a+3×b}_, _{span.n}${3×a+5×b}_, _{span.n}${5×a+8×b}_,
_{span.n}${8×a+13×b}_, …

---
> id: fibonacci-puzzles

Existem muitos outros quebra-cabeças, padrões e aplicativos relacionados aos números de Fibonacci. Aqui estão alguns exemplos, que você pode experimentar:

::: .box.f-blue

#### Problem solving

__1. Divisibilidade de Fibonacci__

(a) Quais números de Fibonacci são pares? Existe um padrão para onde eles estão posicionados ao longo da sequência? Você pode explicar o porquê?

(b) Quais números de Fibonacci são divisíveis por 3 (ou divisíveis por 4)? O que você percebe?

    hr

__2. Soma de Fibonacci__

O que acontece se você somar três números consecutivos de Fibonacci? Você pode explicar o porquê?

    hr

__3. Escadas de Fibonacci__

Ao subir as escadas, posso dar um único passo ou pular dois degraus por vez. Isso significa que existem muitas possibilidades diferentes de como eu poderia subir uma escada. Por exemplo, se houver 5 etapas, tenho 8 opções diferentes:

    figure: x-img(src="images/stairs.svg" width=530 height=200)

Quantas opções existem para escadas com 6, 7 ou 8 degraus? Você consegue detectar um padrão? E como isso está relacionado aos números de Fibonacci?

:::

    figure
      x-img(src="images/fibonachos.jpg" width=600 height=282)
      p.caption © FoxTrot, by Bill Amend

---

## Sequências Especiais

> section: special
> id: special-intro
> translated: auto

Além das sequências aritméticas](gloss:arithmetic-sequence) e [geométricas](gloss:geometric-sequence), [números de Fibonacci](gloss:fibonacci-numbers) e [números figurados](gloss:figurate-numbers), existem inúmeras sequências interessantes que não seguem uma sequência semelhante. , padrão regular.

---
> id: primes

### Números Primos

Um exemplo que você já viu antes são os [__Números Primos__](gloss:prime). Dizemos que um número é _primo_ se não tiver [fatores](gloss:factor) [[além de 1 e ele próprio|other than 1 and 2|and no multiples]].

---
> id: primes-1

Aqui estão os primeiros números primos:

{.text-center.s-teal} _{.n}2_, _{.n}3_, _{.n}5_, _{.n}7_, _{.n}11_,
_{.n}[[13]]_, _{.n}[[17]]_, _{.n}[[19]]_, …

---
> id: primes-2
> goals: p2 p3 p5 p7

Infelizmente, os números primos não seguem um padrão simples ou uma fórmula recursiva. Às vezes, eles aparecem diretamente próximos um do outro (estes são chamados de [primos gêmeos](gloss:twin-primes)), e às vezes há enormes lacunas entre eles. Eles parecem ser distribuídos quase aleatoriamente!

Os números primos também não têm uma representação geométrica simples como [triângulo](gloss:triangle-numbers) ou [números quadrados](gloss:square-numbers), mas com um pouco de trabalho, podemos revelar padrões interessantes:

::: column(width=320)

    .eratosthenes
      .deleted 1
      .l-red 2
      - var i = 3
      while i <= 100
        div= i
        - i += 1
    x-gesture(target=".eratosthenes .l-red")

{.caption} Se cruzarmos todos os múltiplos de números inteiros pequenos, os números restantes deverão ser primos. Este método é chamado de [__Peneira de Eratóstenes__](gloss:sieve-eratosthenes).

::: column(width=320)

    x-coordinate-system(width=320 height=320 padding="8 8 20 24" axis-names="x,number of primes less than x")

{.caption} Se desenharmos um gráfico que aumenta em 1 sempre que houver um número primo, obteremos uma função "escalonada" com propriedades fascinantes.

:::

---
> id: primes-3

Você pode aprender mais sobre essas e outras propriedades dos números primos em nosso curso sobre [Divisibilidade e primos](/course/divisibility/primes). Eles são alguns dos conceitos mais importantes e misteriosos da matemática!

    figure: img(src="images/primes.svg" width=480 height=156)

---
> id: perfect

### Números perfeitos

Para determinar se um número é [primo](gloss:prime), precisamos encontrar todos os seus [fatores](gloss:factor). Normalmente, _multiplicamos_ esses fatores para recuperar o número original, mas vamos ver o que acontece se _somarmos_ todos os fatores de um número (excluindo o número em si):

    - list = function(n) { return Array.apply(null, {length: n}).map((x,i) => i+1); }
    - factors = function(n) { return list(n-1).filter(i => !(n % i)); }
    - total = function(a) { return a.reduce((a, c) => a + c, 0); }

    table.grid.perfect-table
      tr
        td: strong Number
        td: strong Factors
        td: strong Sum of Factors
      for i in [5,6,7,8,9,10,11,12,13,14,15,16,17,18]
        tr
          td: .c= i
          td
            for j in factors(i)
              .c.small= j
          if i >= 10
            td.md [[#{total(factors(i))}]]
          else
            td= total(factors(i))

---
> id: perfect-1

Vamos comparar esses números com a soma dos fatores:

::: column.frame.f-blue.text-center(width=222 parent="padded-thin")

Para a maioria dos números, a soma de seus fatores é [[menor que o próprio|greater than|equal to]]. Esses números são chamados __números deficientes__.

::: column.frame.f-green.text-center.reveal(when="blank-0" animation="pop" width=222)

Para alguns números, a soma de seus fatores é maior que ela mesma. Esses números são chamados __números abundantes__.

::: column.frame.f-yellow.text-center.reveal(when="blank-0" animation="pop" delay=500 width=222)

Apenas um número na lista acima tem uma soma dos fatores que _são iguais a_ para si: [[6]]. Isso é chamado de [__número perfeito__](gloss:perfect-numbers).

:::

---
> id: perfect-2

O próximo número perfeito é 28, porque se somarmos todos os seus fatores, obteremos `1 + 2 + 4 + 7 + 14 = 28`. Depois disso, números perfeitos se tornam muito mais raros:

{.text-center.s-purple.s-vertical.perfect-list} _{.n}6_, _{.n}28_,
_{.n}496_, _{.n}8,128_, _{.n}33,550,336_, _{.n}8,589,869,056_,
_{.n}137,438,691,328_, _{.n}2,305,843,008,139,952,128_, …

Observe que todos esses números são [[pares|multiples of 3|2 more than a square number]]. _{span.reveal(when="blank-0")} Acontece que eles também são todos números de triângulo!_

---
> id: perfect-3

::: column.grow

Números perfeitos foram estudados pela primeira vez por matemáticos gregos antigos como [Euclides](bio:euclid), [Pitágoras](bio:pythagoras) e [Nicômaco](bio:nicomachus), mais de 2000 anos atrás. Eles calcularam os primeiros números perfeitos e se perguntaram se poderia haver algum _ímpar_. Hoje, os matemáticos usaram computadores para verificar os primeiros <sup>10.100</sup> números (isto é 1 seguido de 1.500 zeros), mas sem sucesso: todos os números perfeitos encontrados foram iguais. Até hoje, ainda não se sabe se existem números perfeitos ímpares, tornando-o o problema não resolvido mais antigo de _em toda a matemática_!

::: column(width=220)

    x-img(src="images/euclid.jpg" width=220 height=269)

{.caption} Euclides de Alexandria

:::

---
> id: hailstone

### A sequência da pedra de granizo

A maioria das sequências que vimos até agora tinha uma única regra ou padrão. Mas não há razão para não combinarmos vários diferentes - por exemplo, uma fórmula recursiva como esta:

    table.grid.text-left
      tr
        td: strong.md If `x_n` is even:
        td.md `x_(n+1) = x_n // 2`
      tr
        td: strong.md If `x_n` is odd:
        td.md `x_(n+1) = 3 x_n + 1`

Vamos começar com `x_1 = 5` e ver o que acontece:

{.text-center.s-orange.with-arrows} _{.n}5_, _{.n}[[16]]*{span.arrow}×3 +1*_,
_{.n}[[8]]*{span.arrow.reveal(when="blank-0")}÷2*_,
_{.n}[[4]]*{span.arrow.reveal(when="blank-1")}÷2*_,
_{.n}[[2]]*{span.arrow.reveal(when="blank-2")}÷2*_,
_{.n}[[1]]*{span.arrow.reveal(when="blank-3")}÷2*_,
_{.n}[[4]]*{span.arrow.reveal(when="blank-4")}×3 +1*_,
_{.n}[[2]]*{span.arrow.reveal(when="blank-5")}÷2*_,
_{.n}[[1]]*{span.arrow.reveal(when="blank-6")}÷2*_, …

---
> id: hailstone-1

Parece que, após alguns termos, a sequência atinge um “ciclo ”: 4, 2, 1 continuará repetindo uma e outra vez, para sempre. Certamente, poderíamos ter escolhido um ponto de partida diferente, como ${n}{n|10|5,40,1}. A sequência ficaria assim:

{.text-center} _{span.var.s-orange(:html="hailstones(n)")}_, *{span.s-red}_{.n}4_,
_{.n}2_, _{.n}1_,* *{span.s-purple}_{.n}4_, _{.n}2_, _{.n}1_,*
*{span.s-blue}_{.n}4_, _{.n}2_, _{.n}1_, …*

---
> id: hailstone-2

Parece que a duração da sequência varia muito, mas sempre termina em um ciclo de 4, 2, 1 - independentemente do primeiro número que escolhemos. Podemos até visualizar os termos da sequência em um gráfico:

    x-coordinate-system(width=600 height=400 padding="12 12 24 40")
      .hailstone-slider.md #[span Start value:]${n}{n|12|1,50,1}

{.reveal(when="var-0")} Observe como alguns pontos de partida terminam muito rapidamente, enquanto outros (como [31](action:set(31)) ou [47](action:set(47))) executam mais de uma centena de passos antes de atingirem os 4, 2, 1 ciclo.

---
> id: hailstone-3

::: column.grow

Todas as seqüências que seguem essa fórmula recursiva são chamadas [__Sequências de granizo__](gloss:hailstone-sequence), porque parecem mover-se aleatoriamente para cima e para baixo antes de atingir o ciclo 4, 2, 1 - exatamente como pedras de granizo que se movem para cima e para baixo. em uma nuvem antes de cair na Terra.

Em 1937, o matemático [Lothar Collatz](bio:collatz) propôs que _todas as seqüências de granizo acabam em um ciclo 4, 2, 1 - qualquer valor inicial que você escolher. Você já verificou alguns pontos de partida acima e os computadores realmente tentaram todos os números até `10^20` - 100 bilhões de bilhões ou um 1 seguidos de vinte zeros.

::: column(width=240)

    x-img(src="images/storm.jpg" width=240 height=340)

:::

No entanto, existem infinitos muitos números inteiros. É impossível verificar cada um deles, e ninguém foi capaz de encontrar uma [prova](gloss:proof) que funcione para todos.

Assim como a busca por números perfeitos ímpares, esse ainda é um problema em aberto na matemática. É incrível que esses padrões simples de sequências possam levar a perguntas que confundiram até os melhores matemáticos do mundo por séculos!

---
> id: look-and-say

### A sequência de olhar e dizer

Aqui está mais uma sequência que é um pouco diferente de todas as que você viu acima. Você consegue encontrar o padrão?

{.text-center.s-lime.s-vertical} _{span.n}1_, _{span.n}11_, _{.n}21_,
_{.n}1211_, _{.n}111221_, _{.n}312211_, …

_{button.next-step} Continuar_

---
> id: look-and-say-1

Essa sequência é chamada de sequência __Look-and-Say__, e o padrão é exatamente o que o nome diz: você começa com 1, e cada termo a seguir é o que você obtém se "lê em voz alta" o o anterior. Aqui está um exemplo:

    p: x-img(src="images/look-and-say.svg" width=240 height=130 style="margin: 0 auto")

Agora você pode encontrar os próximos termos?

{.text-center.s-lime.s-vertical}…, _{.n} 312211_, _{.n} [[13112221]]_, _{.n} [[1113213211]]_, …

---
> id: look-and-say-2

Essa sequência é frequentemente usada como um quebra-cabeça para enganar os matemáticos - porque o padrão parece ser completamente não-matemático. No entanto, como se vê, a sequência tem muitas propriedades interessantes. Por exemplo, todo termo termina em [[1]] e nenhum dígito maior que [[3]] é usado.

---
> id: look-and-say-3

O matemático britânico [John Conway](bio:conway) descobriu que, não importa o número escolhido como valor inicial, a sequência acabará se dividindo em “seções” distintas que não mais interagem entre si. Conway chamou isso de Teorema Cosmológico de _e nomeou as diferentes seções usando os elementos químicos _Hidrogênio_, _Hélio_, _Lítio_,…, até _Plutônio_.

---
> id: quiz

### O Teste da Sequência

Você já viu inúmeras sequências matemáticas diferentes - algumas baseadas em formas geométricas, algumas que seguem fórmulas específicas e outras que parecem se comportar quase aleatoriamente.

Neste questionário, você pode combinar todo o seu conhecimento sobre sequências. Há apenas um objetivo: encontre o padrão e calcule os próximos dois termos!

::: .box.f-blue

#### Find the next number

{.text-center.s-yellow} _{span.n}7_, _{span.n}11_, _{.n}15_, _{.n}19_, _{.n}23_,
_{.n}27_, _{.n}[[31]]_, _{.n}[[35]]_, …
_{span.pattern.reveal(when="blank-0 blank-1")} Padrão: Sempre +4_

{.text-center.s-orange} _{span.n}11_, _{span.n}14_, _{.n}18_, _{.n}23_, _{.n}29_,
_{.n}36_, _{.n}[[44]]_, _{.n}[[53]]_, …
_{span.pattern.reveal(when="blank-2 blank-3")} Padrão: +3, +4, +5, +6, …_

{.text-center.s-red} _{span.n}3_, _{span.n}7_, _{.n}6_, _{.n}10_, _{.n}9_,
_{.n}13_, _{.n}[[12]]_, _{.n}[[16]]_, …
_{span.pattern.reveal(when="blank-4 blank-5")} Padrão: +4, –1, +4, –1, …_

{.text-center.s-purple} _{span.n}2_, _{span.n}4_, _{.n}6_, _{.n}12_, _{.n}14_,
_{.n}28_, _{.n}[[30]]_, _{.n}[[60]]_, …
_{span.pattern.reveal(when="blank-6 blank-7")} Padrão: ×2, +2, ×2, +2, …_

{.text-center.s-blue} _{span.n}1_, _{span.n}1_, _{.n}2_, _{.n}3_, _{.n}5_,
_{.n}8_, _{.n}[[13]]_, _{.n}[[21]]_, …
_{span.pattern.reveal(when="blank-8 blank-9")} Padrão: Fibonacci Numbers_

{.text-center.s-teal} _{span.n}27_, _{span.n}28_, _{.n}30_, _{.n}15_, _{.n}16_,
_{.n}18_, _{.n}[[9]]_, _{.n}[[10]]_, …
_{span.pattern.reveal(when="blank-10 blank-11")} Padrão: +1, +2, ÷2, +1, +2, ÷2, …_

{.text-center.s-green} _{span.n}1_, _{span.n}9_, _{.n}25_, _{.n}49_, _{.n}81_,
_{.n}121_, _{.n}[[169]]_, _{.n}[[225]]_, …
_{span.pattern.reveal(when="blank-12 blank-13")} Padrão: Odd square numbers_

:::

---

## Triângulo de Pascal

> section: pascals-triangle
> id: pascal-intro
> translated: auto

Abaixo, você pode ver uma pirâmide numérica criada usando um padrão simples: começa com um único "1" na parte superior e cada célula a seguir é a soma das duas células diretamente acima. Passe o mouse sobre algumas das células para ver como elas são calculadas e preencha as que estão faltando:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };

    .overflow-wrap: .pascal-grid(style="width: 560px")
      - var i = 0;
      while i < 13
        - var j = 0
        .r
          while j <= i
            if (i == 6 && j == 2) || (i == 8 && j == 5) || (i == 10 && j == 5)  || (i == 12 && j == 3)  || (i == 12 && j == 9)
              .c.md [[#{bin(i, j)}]]
            else
              .c= bin(i, j)
            - j += 1;
        - i += 1;

---
> id: pascal-intro-1

Este diagrama mostra apenas as doze primeiras linhas, mas podemos continuar para sempre, adicionando novas linhas na parte inferior. Observe que o triângulo é [[simétrico|right-angled|equilateral]], o que pode ajudá-lo a calcular algumas das células.

---
> id: pascal-triangle

O triângulo é chamado [__triângulo de Pascal__](gloss:pascals-triangle), em homenagem ao matemático francês [Blaise Pascal](bio:pascal). Ele foi um dos primeiros matemáticos europeus a investigar seus padrões e propriedades, mas era conhecido por outras civilizações muitos séculos antes:

::: column(width=200)

    x-img(src="images/pascal-1.jpg" width=130 height=280 style="margin: 0 auto")

{.caption} Em 450 aC, o matemático indiano [Pingala](bio:pingala) chamou o triângulo de __“Escadaria do Monte Meru”__, em homenagem a uma montanha sagrada hindu.

::: column(width=200)

    x-img(src="images/pascal-2.jpg" width=200 height=280)

{.caption} No Irã, era conhecido como o “triângulo Khayyam”__ (مثلث خیام), nomeado em homenagem ao poeta e matemático persa [Omar Khayyám](bio:khayyam).

::: column(width=200)

    x-img(src="images/pascal-3.jpg" width=200 height=280)

{.caption} Na China, o matemático Jia Xian também descobriu o triângulo. Foi nomeado após seu sucessor, __"Triângulo de Yang Hui"__ (杨辉 三角).

:::

O triângulo de Pascal pode ser criado usando um padrão muito simples, mas é preenchido com padrões e propriedades surpreendentes. É por isso que fascina matemáticos em todo o mundo há centenas de anos.

_{button.next-step} Continuar_

---
> id: pascal-sequences

### Encontrando Sequências

Nas seções anteriores, você viu inúmeras sequências matemáticas diferentes. Acontece que muitos deles também podem ser encontrados no triângulo de Pascal:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };

    .overflow-wrap: .pascal-grid.sums(style="width: 760px")
      - var i = 0;
      while i < 17
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            if b == 120
              .c: span.s120= b
            else if b == 3003
              .c: span.s3003= b
            else
              .c= b
            - j += 1;
          .c.sum
        - i += 1;

::: tab(parent="pascal-tabs")

#### {.btn.yellow} _{span.check(when="blank-0")}_

Os números na primeira diagonal de cada lado são todos [[números|increasing|even]].

::: tab

#### {.btn.orange} _{span.check(when="blank-1")}_

Os números na segunda diagonal de cada lado são os [[números inteiros|primes|square numbers]].

::: tab

#### {.btn.red} _{span.check(when="blank-2")}_

Os números na terceira diagonal de cada lado são os números do [[triângulo|square numbers|Fibonacci numbers]].

::: tab

#### {.btn.purple} _{span.check(when="blank-3")}_

Os números na quarta diagonal são os [[números tetraédricos|cubic numbers|powers of 2]].

::: tab

#### {.btn.blue} _{span.check(when="blank-4")}_

Se você somar todos os números em uma linha, suas somas formarão outra sequência: os poderes de 1977 de dois|perfect numbers|prime numbers]].

::: tab

#### {.btn.teal} _{span.check(when="blank-5")}_

Em todas as linhas que possuem um número primo em sua segunda célula, todos os números a seguir são [[múltiplos|factors|inverses]] desse primo.

::: tab

#### {.btn.green} _{span.check(when="blank-6")}_

O diagrama acima destaca as diagonais "rasas" em cores diferentes. Se somarmos os números em todas as diagonais, obtemos os [[números de Fibonacci|Hailstone numbers|geometric sequence]].

:::

---
> id: pascal-sequences-1

Obviamente, cada um desses padrões tem uma razão matemática que explica por que aparece. Talvez você possa encontrar alguns deles!

Outra pergunta que você pode fazer é com que frequência um número aparece no triângulo de Pascal. Claramente, existem infinitos 1s, um 2 e todos os outros números aparecem [[pelo menos duas vezes|at least once|exactly twice]], _{span.reveal(when="blank-0")} na segunda diagonal de ambos os lados._

---
> id: pascal-sequences-2

Alguns números no meio do triângulo também aparecem três ou quatro vezes. Existem até algumas que aparecem seis vezes: você pode ver [120](->.s120) e [3003](->.s3003) quatro vezes no triângulo acima, e elas aparecerão mais duas vezes cada uma nas linhas 120 e 3003 .

Como 3003 é um número de triângulo, ele realmente aparece mais duas vezes nas diagonais do _terceiro_ do triângulo - o que representa oito ocorrências no total.

Não se sabe se existem outros números que aparecem oito vezes no triângulo ou se existem números que aparecem mais de oito vezes. O matemático americano [David Singmaster](bio:singmaster) levantou a hipótese de que há um limite fixo de quantas vezes os números podem aparecer no triângulo de Pascal - mas isso ainda não foi comprovado.

---
> id: modular
> goals: select

### Divisibilidade

Alguns padrões no triângulo de Pascal não são tão fáceis de detectar. No diagrama abaixo, destaque todas as células que são pares:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };

    .overflow-wrap: .pascal-grid#pascal-select(style="width: 340px")
      - var i = 0;
      while i < 8
        - var j = 0
        .r
          while j <= i
            .c= bin(i, j)
            - j += 1;
        - i += 1;
    x-gesture(target="#pascal-select .r:nth-child(3) .c:nth-child(2)")

{.reveal(when="select")} Parece que o número par no triângulo de Pascal forma outro triângulo [[menor|matrix|square]].

---
> id: modular-1
> goals: c2 c3 c4 c5

A coloração manual de cada célula leva muito tempo, mas aqui você pode ver o que acontece se você fizer isso por muitas outras linhas. E as células divisíveis por outros números?

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };

    .overflow-wrap: .pascal-grid.small(style="width: 760px")
      - var i = 0;
      while i < 25
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            if b > 99999
              .c: span.small= b
            else
              .c= b
            - j += 1;
        - i += 1;
      .pascal-buttons
        button.btn.btn-red(data-value="2") Divisible by 2
        button.btn.btn-blue(data-value="3") Divisible by 3
        button.btn.btn-green(data-value="4") Divisible by 4
        button.btn.btn-yellow(data-value="5") Divisible by 5

---
> id: modular-2

::: column.grow

Uau! As células coloridas sempre aparecem em [[triângulos|squares|pairs]] (exceto algumas células únicas, que podem ser vistas como triângulos do tamanho 1).

Se continuarmos o padrão de células divisíveis por 2, obtemos um que é muito semelhante ao __triângulo de Sierpinski__ à direita. Formas como essa, que consistem em um padrão simples que parece continuar para sempre enquanto fica cada vez menor, são chamadas de [__Fractals__](gloss:fractal). Você aprenderá mais sobre eles no futuro…

::: column.width(280)

    img(src="images/sierpinski.svg" width=280 height=243 alt="Sierpinski Triangle")
    p.caption The Sierpinski Triangle

:::

---
> id: pascal-binomial

### Coeficientes binomiais

Há mais uma propriedade importante do triângulo de Pascal sobre a qual precisamos falar. Para entendê-lo, tentaremos resolver o mesmo problema com dois métodos completamente diferentes e depois veremos como eles estão relacionados.

{.todo} EM BREVE

---

## limites e convergência

> section: convergence
> sectionStatus: dev
> id: convergence-intro

{.todo} EM BREVE
