# Círculos e Pi

## Introdução

> section: introduction
> id: intro
> trailer: tBJUNvCBkLo
> color: "#5A49C9"
> level: Intermediate
> next: graph-theory
> translated: auto

::: column.grow

Enquanto os humanos existirem, olhamos para o céu e tentamos explicar a vida na Terra usando o movimento de estrelas, planetas e lua.

Os astrônomos da Grécia antiga foram os primeiros a descobrir que todos os objetos celestes se movem em caminhos regulares, chamados órbita. Eles acreditavam que essas órbitas são sempre circulares. Afinal, os círculos são os "mais perfeitos" de todas as formas: simétricos em todas as direções e, portanto, uma escolha adequada para a ordem subjacente do nosso universo.

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption} A Terra está no centro do universo ptolomaico_.

:::

---
> id: radius
> goals: compass

Todo ponto em um [__círculo__](gloss:circle) tem a mesma distância do seu centro. Isso significa que eles podem ser desenhados usando uma bússola:

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

{.reveal(when="compass")} Há três medidas importantes relacionadas aos círculos que você precisa saber:

* {.reveal(when="compass" delay="1000")} O [{.step-target.pill.b.red} raio](target:r) é a distância do centro de um círculo até sua borda externa.
* {.reveal(when="compass" delay="4000")} O de [{.step-target.pill.b.blue} diâmetro](target:d) é a distância entre dois pontos opostos em um círculo. Ele atravessa seu centro e seu comprimento é [[duas vezes|half|the same as]] do raio.
* {.reveal(when="blank-0")} A [{.step-target.pill.b.green} circunferência](target:c) (ou perímetro) é a distância em torno de um círculo.

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

Uma propriedade importante dos círculos é que todos os círculos são [similares](gloss:similar). Você pode provar que, mostrando como todos os círculos podem ser combinados usando simplesmente [traduções](gloss:translation) e [dilatações](gloss:dilation):

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

Você deve se lembrar que, para polígonos semelhantes, a proporção entre os lados correspondentes é sempre constante. Algo semelhante funciona para os círculos: a razão entre a circunferência e o [diâmetro](gloss:circle-diameter) é igual para _todos os círculos_. É sempre 3,14159… - um número misterioso chamado [__Pi__](gloss:pi), que geralmente é escrito como a letra grega _π_ para “p”. O Pi possui infinitos dígitos decimais que permanecem para sempre sem nenhum padrão específico:

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

Aqui está uma roda com diâmetro 1. Ao desenrolar a circunferência, você pode ver que seu comprimento é exatamente [[`pi`|`2 * pi`|3]]:

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

Para um círculo com diâmetro _d_, a circunferência é `C = π × d`. Da mesma forma, para um círculo com [raio](gloss:circle-radius) _r_, a circunferência é

{.text-center} `C =` [[`2 π r`|`π r`|`π r^2`]].

---
> id: nature

Os círculos são perfeitamente simétricos e não possuem "pontos fracos", como os cantos de um polígono. Esta é uma das razões pelas quais elas podem ser encontradas em qualquer lugar da natureza:

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption} Flores

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

Planetas

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

Árvores

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

Fruta

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

Bolhas de sabão

:::

{.r} E há muitos outros exemplos: de arco-íris a ondas de água. Você consegue pensar em mais alguma coisa? [Continuar](btn:next)

---
> id: max-area
> goals: area-circle

::: column.grow

Acontece também que um círculo é a forma com a maior área para uma determinada circunferência. Por exemplo, se você tiver uma corda de 100 \ m, poderá usá-la para incluir o maior espaço se formar um círculo (em vez de outras formas, como um retângulo ou triângulo).

Na natureza, objetos como gotas de água ou bolhas de ar podem economizar energia tornando-se circular ou esférico e reduzindo sua área de superfície.

::: column(width=320)

    x-select.segmented
      div(data-value="0") Triangle
      div(data-value="1") Square
      div(data-value="2") Pentagon
      div(data-value="3") Circle
    svg(width=320 height=200)

{.caption} _Circunferência_ = __{.m-green} 100__, _Área_ = __${area}__

:::

---
> id: area
> goals: slider

### A área de um círculo

Mas como realmente calculamos a área de um círculo? Vamos tentar a mesma técnica que usamos para [encontrar os quadriláteros da área](/course/polyhedra/quadrilaterals): cortamos a forma em várias partes diferentes e as reorganizamos em uma forma diferente da qual já conhecemos a área (por exemplo, um retângulo ou um triângulo) .

A única diferença é que, como os círculos são curvos, precisamos usar algumas aproximações:

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

Aqui você pode ver um círculo dividido em ${toWord(n1)} fatias. Mova o controle deslizante para alinhar as fatias em uma linha.

{.reveal(when="slider")} Se aumentarmos o número de fatias para ${n1}{n1|6|6,30,2}, essa forma começa a parecer cada vez mais um retângulo.

{.reveal(when="blank-0")} A altura do retângulo é igual ao [[raio|circumference|diameter]] do círculo. _{span.reveal(when="blank-1")} A largura do retângulo é igual a [[metade da circunferência|the circumference|twice the radius]] do círculo._ _{span.reveal(when="blank-2")} (Observe como metade das fatias estão viradas para baixo e metade delas estão viradas para baixo. para cima.)_

{.reveal(when="blank-2" delay=1000)} Portanto, a área total do retângulo é de aproximadamente `A = π r^2`.

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

Aqui você pode ver um círculo dividido em ${toWord(n)} anéis. Como antes, você pode mover o controle deslizante para "desenrolar" os anéis.

{.reveal(when="slider")} Se aumentarmos o número de anéis para ${n2}{n2|4|2,12,1}, essa forma começa a parecer cada vez mais um [[triângulo|rectangle|trapezium]].

{.reveal(when="blank-0")} A altura do triângulo é igual ao [[raio|diameter|circumference]] do círculo. _{span.reveal(when="blank-1")} A base do triângulo é igual a [[a circunferência|twice the diameter]] do círculo._ _{span.reveal(when="blank-2")} Portanto, a área total do triângulo é aproximadamente_

{.text-center.reveal(when="blank-2")} `A = 1/2 "base" × "height" = π r^2`.

:::

---

> id: area-2

Se pudéssemos usar infinitamente muitos anéis ou cunhas, as aproximações acima seriam perfeitas - e ambas nos dão a mesma fórmula para a área de um círculo:

{.text-center.r} `A = π r^2`. [Continuar](btn:next)

---
> id: pi-approximations

### Calculando Pi

Como você viu acima, `π = 3.1415926…` não é um número inteiro simples e seus dígitos decimais duram para sempre, sem nenhum padrão de repetição. Os números com essa propriedade são chamados [__números irracionais__](gloss:irrational-numbers) e isso significa que `π` não pode ser expresso como uma fração simples `a/b`.

Isso também significa que nunca podemos escrever _todos_ os dígitos de Pi - afinal, existem infinitamente muitos. Os matemáticos gregos e chineses antigos calcularam os quatro primeiros dígitos decimais de Pi aproximando círculos usando polígonos regulares. Observe como, à medida que você adiciona mais lados, o polígono começa a parecer [[cada vez mais|less|exactly]] um círculo:

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

Em 1665, [Isaac Newton](bio:newton) conseguiu calcular 15 dígitos. Hoje, podemos usar computadores poderosos para calcular o valor do Pi com uma precisão muito maior.

O registro atual é de 31,4 trilhões de dígitos. Um livro impresso contendo todos esses dígitos teria aproximadamente 400 \ km de espessura - essa é a altura em que a [Estação Espacial Internacional](gloss:iss) orbita a Terra!

Claro, você não precisa se lembrar de muitos dígitos do Pi. De fato, a fração `22/7 = 3.142…` é uma grande aproximação.

:::

---
> id: pi-sequence

Uma abordagem para calcular Pi é usar infinitas seqüências de números. Aqui está um exemplo que foi descoberto por [Gottfried Wilhelm Leibniz](bio:leibniz) em 1676:

{.text-center} `π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} À medida que calculamos cada vez mais termos desta série, sempre seguindo o mesmo padrão, o resultado se aproxima cada vez mais de Pi.

---
> id: pi-colours
> goals: hover

::: column.grow

Muitos matemáticos acreditam que Pi tem uma propriedade ainda mais curiosa: que é um __número normal__. Isso significa que os dígitos de 0 a 9 aparecem completamente aleatoriamente, como se a natureza tivesse rolado um dado de 10 lados infinitamente várias vezes, para determinar o valor de Pi.

Aqui você pode ver os primeiros 100 dígitos do Pi. Mova algumas das células para ver como os dígitos são distribuídos.

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

Se Pi é normal, significa que você pode pensar em _qualquer_ sequência de dígitos e ela aparecerá em algum lugar em seus dígitos. Aqui você pode pesquisar o primeiro milhão de dígitos do Pi - eles contêm seu aniversário?

::: .box.f-red.pi-box
#### One Million Digits of Pi

    .pi-controls
      | Search for a string of digits:
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---
> id: pi-movies

Poderíamos até converter um livro inteiro, como Harry Potter, em uma sequência muito longa de dígitos (a = 01, b = 02 e assim por diante). Se Pi for normal, essa sequência aparecerá em algum lugar em seus dígitos - mas levaria milhões de anos para calcular dígitos suficientes para encontrá-la.

Pi é fácil de entender, mas de importância fundamental em ciências e matemática. Essa pode ser uma razão pela qual Pi se tornou incomumente popular em nossa cultura (pelo menos em comparação com outros tópicos da matemática):

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")

{.caption} Pi is the secret combination for the tablet in “Night at the Museum 2”.

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")

{.caption} Professor Frink (“Simpsons”) silences a room of scientists by saying that Pi equals 3.

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")

{.caption} Spock (“Star Trek”) disables an evil computer by asking it to calculate the last digit of Pi.

:::

---

> id: pi-day

Existe até um _dia Pi_ a cada ano, que cai em 14 de março, porque `pi ≈ 3.14`, ou em 22 de julho, porque `pi ≈ 22/7`.

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

---

## Graus e radianos

> section: radians
> id: degrees
> translated: auto

Até agora em geometria, sempre medimos ângulos em [graus](gloss:degrees). Uma rotação do __{.m-red} círculo completo__ é [[360]]°, um meio-círculo __{.m-green}__ é [[180]]°, um __{.m-yellow} quarto de círculo__ é [[90]]° e assim por diante.

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

{.r} O número 360 é muito conveniente porque é divisível por muitos outros números: 2, 3, 4, 5, 6, 8, 9, 10, 12, 15 e assim por diante. Isso significa que muitas frações de um círculo também são números inteiros. Mas você já se perguntou de onde vem o número 360? [Continuar](btn:next)

---
> id: babylon

::: column.grow

Por acaso, 360 graus são um dos conceitos mais antigos em matemática que ainda usamos hoje. Eles foram desenvolvidos na antiga Babilônia, mais de 5000 anos atrás!

Naquela época, uma das aplicações mais importantes da matemática estava na astronomia. O _sol_ determina as quatro estações do ano, as quais os agricultores precisam conhecer ao cultivar. Da mesma forma, a lua determina as marés, o que era importante para os pescadores. As pessoas também estudavam as estrelas para prever o futuro ou para se comunicar com os deuses.

::: column(width=260)

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} Uma tábua babilônica para calcular `sqrt(2)`

:::

---
> id: constellations
> goals: rotate

Os astrônomos notaram que as constelações visíveis em um horário específico durante a noite mudavam um pouquinho todos os dias - até que, após aproximadamente 360 dias, eles haviam voltado ao ponto inicial. E essa pode ter sido a razão pela qual eles dividiram o círculo em 360 graus.

    figure: .constellations
      .label.md Midnight on day ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

Certamente, existem 365 dias em um ano (bem, 365.242199 para ser exato), mas os matemáticos babilônicos trabalhavam com relógios de sol simples, e essa aproximação era perfeitamente adequada.

Também funcionou bem com o sistema de números da base 60 existente (desde `6 xx 60 = 360`). Esse sistema é a razão pela qual ainda temos 60 segundos em um minuto e 60 minutos em uma hora - embora a maioria das outras unidades seja medida em [base 10](gloss:base-10) (por exemplo, 10 anos em uma década ou 100 anos em uma século).

::: column.grow

Para muitos de nós, medir ângulos em graus é uma segunda natureza: existe um vídeo em 360°, os skatistas conseguem 540s e alguém que muda de decisão pode fazer uma curva de 180°. Mas, do ponto de vista matemático, a escolha do 360 é completamente arbitrária. Se estivéssemos vivendo em Marte, um círculo pode ter 670 ° e um ano em Júpiter tem até 10.475 dias.

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} Os 540 McFlip, uma rotação de 540°

:::

---
> id: radians

### Radianos

Em vez de dividir um círculo em algum número de segmentos (como 360 graus), os matemáticos geralmente preferem meça ângulos usando a [circunferência](gloss:circle-circumference) de um [__círculo unitário__](gloss:unit-circle) (um círculo com raio 1).

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

Um [círculo completo](action:setState(0)) tem circunferência _{x-equation.small(solution="2 π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-0")} Para uma [rotação de meio círculo](action:setState(1)), a distância correspondente ao longo da circunferência é _{x-equation.small(solution="π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-1")} Para uma rotação de [quarto de círculo](action:setState(2)), a distância ao longo da circunferência é _{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_.

{.reveal(when="eqn-2")} E assim por diante: essa maneira de medir ângulos é chamada [__radianos__](gloss:radians) (você pode se lembrar disso como “unidades de raio”).

:::

---
> id: radians-conversion

Todo ângulo em graus tem um tamanho equivalente em radianos. A conversão entre os dois é muito fácil - assim como você pode converter entre outras unidades, como metros e quilômetros, ou Celsius e Fahrenheit:

{.text-center} __{.m-red} 360 °__ _{span.space} =_ __{.m-green} 2 _π_ rad__

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left} `=>`_
__{.m-red} 1 °__ _{span.space} =_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} rad__

::: column(width=180)

{.text-center} _{span.rotate.right} `=>`_
__{.m-green} 1 rad__ _{span.space} =_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red} °__

:::

---
> id: radians-table

Você pode escrever o valor de radianos como um múltiplo de _π_ ou como apenas um único número decimal. Você pode preencher esta tabela de tamanhos de ângulo equivalentes em graus e radianos?

| __{.m-red} graus__ | 0 60 _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 _{x-equation.small(solution="270" keys="π frac" numeric)}_ |
| __{.m-green} radianos__ | 0 _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2 _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### Distância percorrida

Você pode pensar em radianos como a “distância percorrida” ao longo da circunferência de um círculo unitário. Isso é particularmente útil ao trabalhar com objetos que estão se movendo em um caminho circular.

::: column.grow

Por exemplo, a [Estação Espacial Internacional](gloss:iss) orbita a Terra uma vez a cada 1,5\ horas. Isso significa que sua __velocidade de rotação__ é [[`(2 pi)/1.5`| `1.5/(2 pi)`|`1.5 * pi`]] radianos por hora.

{.reveal(when="blank-0")} Em um círculo unitário](gloss:unit-circle)](gloss:unit-circle), a velocidade de rotação é a mesma que a velocidade _real_, porque o comprimento da circunferência é o mesmo que uma rotação completa em radianos (ambos são `2pi`).

{.reveal(when="blank-0" delay=1000)} O raio da órbita da ISS é 6800\ km, o que significa que a _velocidade_ real da ISS deve ser [[`(2 pi)/1.5 xx 6800`| `(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")} = 28483 km por hora._

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

Você pode ver que, neste exemplo, os radianos são uma unidade muito mais conveniente que os graus? Uma vez que conhecemos a velocidade de rotação, simplesmente precisamos multiplicar pelo raio para obter a velocidade real. Aqui está outro exemplo: seu carro tem rodas com raio de 0,25\ m. Se você estiver dirigindo a uma velocidade de 20\ m/s, as rodas do seu carro giram a [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] radianos por segundo _{span.reveal(when="blank-0")} (ou `80/(2pi) = 13` rotações por segundo)._

---
> id: radians-trig

### Trigonometria

Para a maioria dos problemas simples de geometria, os graus e os radianos são completamente intercambiáveis - você pode escolher qual deles prefere ou uma pergunta pode dizer em que unidade você deve responder. , depois de estudar os cálculos mais avançados da [trigonometria](gloss:trigonometry) [ou](gloss:calculus), verifica-se que os radianos são muito mais convenientes do que graus.

::: column.grow

A maioria das calculadoras possui um botão especial](->.button.mode)](->.button.mode) para alternar entre graus e radianos. Funções trigonométricas como [__sin__](gloss:sin), [__cos__](gloss:cos) e __tan__ recebem ângulos como entrada e suas funções inversas __arcsin__, __arccos__ e __arctan__ retornam ângulos como saída. A configuração atual da calculadora determina quais unidades são usadas para esses ângulos. Tente usar esta calculadora para calcular que

{.text-center} sin (30 °) = [[0,5]] _{span.eqn-gap}_ cos (1 °) = [[0,999]]
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

O uso de radianos tem uma vantagem particularmente interessante ao usar a função [__Seno__](gloss:sin). Se `θ` for um ângulo muito pequeno (menor que 20 ° ou 0,3 rad), então `sin(θ) ≈ θ`. Por exemplo, {.text-center} sin (${x}{x|0.1|0,0.5,0.05}) `≈` ${sin(x)}…

{.reveal(when="var-0")} Isso é chamado de __aproximação de ângulo pequeno__, e pode simplificar bastante certas equações que contêm funções trigonométricas. Você aprenderá muito mais sobre isso no futuro.

---

## Tangentes, acordes e arcos

> section: tangets-chords-arcs
> id: circle-parts
> translated: auto

Nas seções anteriores, você aprendeu os nomes dados a várias partes diferentes de um círculo - como centro, raio, diâmetro e circunferência. No entanto, existem muitos elementos geométricos relacionados a um círculo, dos quais precisamos resolver problemas mais complexos:

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

* {.r} Uma [{.red} secante](target:secant) é uma linha que cruza um círculo em dois pontos. [Continuar](btn:next)
* {.r.reveal(when="next-0")} Um acorde [{.green}](target:chord) é um segmento de linha cujos pontos finais estão na circunferência de um círculo. [Continuar](btn:next)
* {.r.reveal(when="next-1")} Uma tangente [{.blue}](target:tangent) é uma linha que tocou um círculo exatamente em um ponto. Isso é chamado de __ponto de tangência__. [Continuar](btn:next)
* {.r.reveal(when="next-2")} Um arco [{.yellow}](target:arc) é uma seção da circunferência de um círculo. [Continuar](btn:next)
* {.r.reveal(when="next-3")} Um setor [{.teal}](target:sector) é uma parte do interior de um círculo, limitado por um _arco_ e _dois raios_. [Continuar](btn:next)
* {.r.reveal(when="next-4")} Finalmente, um segmento [{.purple}](target:segment) é uma parte do interior de um círculo, limitado por um _arco_ e _por um acorde_. [Continuar](btn:next)

:::

---

> id: circle-parts-1

Nesta seção, examinaremos a relação entre todos esses elementos e provaremos teoremas sobre suas propriedades. Não se preocupe em memorizar todas as definições por enquanto - você sempre pode usar o glossário.

---

### Tangentes

{.todo} EM BREVE!

---

### Cifras Simplificadas

{.todo} EM BREVE!

---

> id: earth-arc

### Arcos e Setores

::: column.grow

A maioria dos cientistas da Grécia antiga concordou que a Terra é uma esfera. Havia muitas evidências: desde navios desaparecendo no horizonte no mar até o movimento circular das estrelas durante a noite.

Infelizmente, ninguém sabia exatamente o tamanho da Terra - até cerca de 200 aC, quando o matemático [Eratóstenes](bio:eratosthenes) encontrou uma maneira engenhosa de medir o raio da Terra, usando geometria básica. Tudo o que precisamos é de um pouco mais de conhecimento sobre arcos e setores de um círculo.

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

Como você pode ver no diagrama, um arco [{.red}](target:arc) faz parte da [[circunferência|diameter|tangent]] de um círculo e um setor [{.yellow}](target:sector) faz parte do [[interior|radius|perimeter]] de um círculo.

::: .reveal(when="blank-0 blank-1")

O arco entre dois pontos _A_ e _B_ é geralmente escrito como `arc(AB)`. Essa definição é um pouco ambígua: existe um segundo arco [{.purple}](target:major) que conecta _A_ e _B_, mas faz o contrário.

O menor dos dois arcos é chamado arco __menor__, e o maior é chamado arco __arco principal__. Se os pontos _A_ e _B_ são exatamente opostos um ao outro, ambos os arcos têm o mesmo comprimento e são [[semicírculos|diameters|circumferences]].

:::
:::

---
> id: arcs-1

::: column.grow

Para encontrar o comprimento de um arco ou a área de um setor, precisamos saber sobre o ângulo correspondente no centro do círculo: isso é chamado de ângulo central [{.blue} ângulo central](target:angle).

Observe como o arco, o setor e o ângulo ocupam _a mesma proporção_ de um círculo completo. Por exemplo, se o ângulo central [{.blue}](target:angle) for [90°](action:set90Deg()), ocupará [[um quarto|one half|one third]] de um círculo completo [{.teal}](target:fangle).

::: .reveal(when="blank-0")

Isso significa que o [{.red} comprimento do arco](target:arc) também é `1/4` de [{.purple} toda a circunferência](target:circ) do círculo e a área [{.yellow} do o setor](target:sector) é `1/4` de [{.orange} toda a área](target:area) do círculo.

Podemos expressar essa relação em uma equação:

{.text-center} `"arc length" / "circumference" = blank("sector area","circle radius","arc area") / "circle area" = "central angle" / blank("360°","180°","90°")`

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

Agora, podemos reorganizar essas equações para encontrar a variável em que estamos interessados. Por exemplo,

::: column(width=320 parent="padded-thin")

| [ comprimento do arco](pill:red) | = | `"circumference" × c/360` |
| | = | `2 π r × c/360` |
{.eqn-system}

::: column(width=320)

| [ área do setor](pill:yellow) | = | `"circle area" × c/360` |
| | = | `π r^2 × c/360` |
{.eqn-system}

:::

onde _r_ é o raio do círculo e _c_ é o tamanho do ângulo central.

---
> id: arcs-rad

Se o ângulo central é medido em [radianos](gloss:radians) em vez de [graus](gloss:degrees), podemos usar as mesmas equações, mas precisamos substituir 360 ° por [[`2 π`|`1/2 π`|`π`]]:

::: .reveal(when="blank-0")

::: column(width=320 parent="padded-thin")

| [ comprimento do arco](pill:red) | = | `2 π r × c/(2π)` |
| | = | `r × c` |
{.eqn-system}

::: column(width=320)

| [ área do setor](pill:yellow) | = | `π r^2 × c/(2π)` |
| | = | `1/2 r^2 c` |
{.eqn-system}

:::

Observe como as equações se tornam muito mais simples e _π_ é cancelada em todos os lugares. Isso ocorre porque, como você deve se lembrar, a definição de radianos [é basicamente o comprimento de um arco em um círculo com raio 1.

Agora vamos ver como podemos usar arcos e setores para calcular a circunferência da Terra. [Continuar](btn:next)

:::

---
> id: eratosthenes

No antigo Egito, a cidade de Swenet estava localizada ao longo do rio Nilo. Swenet era famoso por um poço com uma propriedade curiosa: havia um momento todos os anos em que a luz do sol chegava ao fundo do poço - ao meio-dia de 21 de junho, o dia do solstício de verão. Naquele momento preciso, o fundo do poço estava iluminado, mas não os lados, o que significa que o Sol estava em pé diretamente acima do poço.

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Os egípcios antigos mediam longas distâncias contando o número de passos necessários para caminhar.

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} Algumas fontes dizem que o "poço de Eratóstenes" estava na ilha elefantina_ no rio Nilo.

:::

O matemático [Eratóstenes](bio:eratosthenes) viveu em _Alexandria_, cerca de 800 \ km ao norte de Swenet, onde era diretor da Grande Biblioteca. No centro da cidade de Alexandria, havia um obelisco, um monumento alto e estreito, com um topo em forma de pirâmide.

Eratóstenes notou que ao meio-dia do dia do solstício de verão, o obelisco estava lançando uma sombra - o que significa que o sol não estava diretamente acima dele. Ele deduziu que isso era por causa da curvatura da Terra e percebeu que poderia ser usado para calcular a circunferência do nosso planeta.

---
> id: eratosthenes-1

::: column.grow

Aqui você pode ver o poço em Swenet e o obelisco em Alexandria. Os raios solares caem diretamente no poço, mas atingem o obelisco em ângulo e projetam uma sombra. [Continuar](btn:next)

::: .reveal(when="next-0")

Eratóstenes mediu que o ângulo [{.teal}](target:angle1) da sombra era de 7,2 °. É o mesmo que o ângulo central [{.purple}](target:angle2) do arco [{.red}](target:arc) de Alexandria para Swenet, porque são ângulos [[alternados|vertical|corresponding]] .

:::
::: .reveal(when="blank-0")

Agora podemos usar a equação para o comprimento do arco que derivamos acima:

{.text-center} `pill("arc length","red","arc") / pill("circumference","blue","circ") = (input(7.2)"°") / "360°"`

:::
::: .reveal(when="blank-1")

Se reorganizarmos isso, descobrimos que a circunferência da Terra é

{.text-center} `pill("circumference","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`

:::
::: .reveal(when="blank-2")

Finalmente, sabemos que a circunferência de um círculo é `C = 2 pi r`, então o raio da Terra é

{.text-center} `r_"Earth" = (40000 "km") / (2 pi) ≈ 6400 "km"`.

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

A medição de Eratóstenes foi um dos experimentos mais importantes da Antiguidade. Sua estimativa do tamanho da Terra foi surpreendentemente precisa, especialmente ao considerar que ele só tinha acesso a ferramentas de medição muito básicas.

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

Obviamente, pode ser difícil traduzir seus resultados originais em unidades modernas, como quilômetros. Na Grécia antiga, a distância foi medida em _estádios_ (aproximadamente 160 m), mas não havia um padrão universal. Cada área tinha uma versão um pouco diferente e não sabemos qual Eratóstenes usou.

Nos séculos seguintes, os cientistas tentaram usar outros métodos para calcular o raio da Terra - às vezes com resultados muito diferentes e incorretos.

Foi uma dessas medidas incorretas que levou Cristóvão Colombo a navegar para o oeste a partir de Portugal. Ele assumiu que a Terra era muito menor do que realmente é, e esperava chegar à Índia. De fato, ele chegou a um continente diferente no meio: as Américas.

:::

---

### Segmentos

{.todo} EM BREVE!

---

## Os Teoremas do Círculo

> section: circle-theorems
> sectionStatus: dev

{.todo} EM BREVE!

---

## Polígonos Cíclicos

> sectionStatus: dev
> section: cyclic-polygons

{.todo} EM BREVE!

---

## Esferas, cones e cilindros

> section: spheres-cones-cylinders
> id: solids
> translated: auto

Nas seções anteriores, estudamos as propriedades dos círculos em uma superfície plana. Mas nosso mundo é realmente tridimensional, então vamos dar uma olhada em alguns sólidos 3D baseados em círculos:

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} Um [__cilindro__](gloss:cylinder) consiste em dois círculos congruentes e paralelos unidos por uma superfície curva.

::: column(width=220)

    x-solid(size=220)

{.text-center} Um [__cone__](gloss:cone) possui uma base circular unida a um único ponto (chamado de vértice).

::: column(width=220)

    x-solid(size=220 static)

{.text-center} Todo ponto na superfície de uma [__esfera__](gloss:sphere) tem a mesma distância do seu centro.

:::

Observe como a definição de uma esfera é quase a mesma que a definição de um [[círculo|radius|cube]] - exceto em três dimensões!

---

> id: gasometer

### Cilindros

::: column.grow

Aqui você pode ver o _Gasômetro cilíndrico_ em Oberhausen, Alemanha. Ele costumava armazenar gás natural que era usado como combustível em fábricas e usinas próximas. O Gasômetro tem 120m de altura e sua base e teto são dois grandes círculos com raio de 35m. Há duas perguntas importantes que os engenheiros podem querer responder:

* Quanto gás natural pode ser armazenado? Este é o [[volume|area|diameter]] do cilindro.
* {.reveal(when="blank-0")} Quanto aço é necessário para construir o Gasômetro? Esta é (aproximadamente) a área de superfície [[do cilindro.

{.reveal(when="blank-0 blank-1")} Vamos tentar encontrar fórmulas para esses dois resultados!

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

Gasômetro Oberhausen

:::

---
> id: cylinder-prism

#### Volume de um cilindro

A parte superior e inferior de um cilindro são dois círculos congruentes, chamados __bases__. A altura __{.m-blue} _h___ de um cilindro é a distância perpendicular entre essas bases e o raio __{.m-red} _r___ de um cilindro. cilindro é simplesmente o raio das bases circulares.

Podemos aproximar um cilindro usando um prisma ${n}{n|5|3,20,1} [__do lado__](gloss:prism) do lado ${n}{n|5|3,20,1}. À medida que o número de lados aumenta, o prisma começa a parecer cada vez mais um cilindro:

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

Mesmo que tecnicamente um cilindro não seja um prisma, eles compartilham muitas propriedades. Em ambos os casos, podemos encontrar o volume multiplicando a área da base __{.m-red}__ pela altura __{.m-blue}__. Isso significa que um cilindro com raio _{.b.m-red} r_ e altura _{.b.m-blue} h_ tem volume

{.text-center} `V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

Lembre-se de que raio e altura devem usar as mesmas unidades. Por exemplo, se _r_ e _h_ estão ambos em cm, o volume estará em [[`"cm"^3`|`"cm"^2`|cm]].

---
> id: oblique-cylinder
> goals: slide

::: column.grow

Nos exemplos acima, as duas bases do cilindro sempre estavam _diretamente acima uma da outra_: isso é chamado de __cilindro direito__. Se as bases não estão diretamente acima uma da outra, temos um __cilindro oblíquo__. As bases ainda são paralelas, mas os lados parecem "inclinar-se" em um ângulo que não é de 90 °.

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} A _torre inclinada de Pisa_ na Itália não é um cilindro oblíquo.

:::

---
> id: cavalieri
> goals: slide

O volume de um cilindro oblíquo é exatamente o mesmo que o de um cilindro direito com o mesmo raio e altura. Isso se deve ao [__Princípio de Cavalieri__](gloss:cavalieri), nomeado em homenagem ao matemático italiano [Bonaventura Cavalieri](bio:cavalieri): se dois sólidos têm a mesma área de seção transversal em todas as alturas, terão tem o mesmo volume.

Imagine dividir um cilindro em vários discos finos. Podemos então deslizar esses discos na horizontal para obter um cilindro oblíquo. O volume dos discos individuais não muda à medida que você é oblíquo; portanto, o volume total também permanece constante:

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::

---
> id: cylinder-surface

#### Área de superfície de um cilindro

::: column.grow

Para encontrar a área de superfície de um cilindro, precisamos desenrolá-lo em sua [rede plana](gloss:net). Você pode tentar fazer isso sozinho, por exemplo, descolando o rótulo de uma lata de comida.

Existem dois [[círculos|spheres|squares]], um na parte superior e outro na parte inferior do cilindro. O lado curvo é na verdade um grande [[retângulo|square|ellipse]].

* {.reveal(when="blank-0 blank-1")} Os dois círculos cada um têm a área _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.
* {.reveal(when="eqn-0")} A altura do retângulo é _{x-equation.small(solution="h" keys=" " short-var)}_ _{span.reveal(when="eqn-1")} e a largura do retângulo é a mesma que a [[circunferência|diameter|tangent]] dos círculos:_ _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---

> id: cylinder-surface-1

Isso significa que a área total de um cilindro com raio _r_ e altura _h_ é dada por

{.text-center} `A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_.

---

> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

Os cilindros podem ser encontrados em todo o mundo - desde latas de refrigerante a papel higiênico ou canos de água. Você pode pensar em outros exemplos?

O _Gasômetro_ acima tinha um raio de 35m e uma altura de 120m. Agora podemos calcular que seu volume é de aproximadamente [[461.000 ± 1000]] `"m"^3` e sua área de superfície é de aproximadamente [[34.080 ± 100]] `"m"^2`.

---

> id: cone

### Cones

::: column.grow

Um [__cone__](gloss:cone) é um sólido tridimensional que possui uma base circular __{.m-red}__. Seu lado “afunila para cima”, como mostra o diagrama, e termina em um único ponto chamado __{.m-green} vértice__.

O raio __{.m-red}__ do cone é o raio da base circular, e a __{.m-blue} altura__ do cone é a distância perpendicular da base ao vértice.

Assim como outras formas que conhecemos antes, os cones estão por toda parte: sorvetes, cones de trânsito, certos telhados e até árvores de natal. O que mais você pode pensar?

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

#### Volume de um cone

::: column.grow

Anteriormente, encontramos o volume de um cilindro aproximando-o usando um prisma. Da mesma forma, podemos encontrar o volume de um cone aproximando-o usando uma [__pirâmide__](gloss:pyramid).

Aqui você pode ver uma pirâmide do lado ${n}{n|5|3,18,1}. À medida que o número de lados aumenta, a pirâmide começa a parecer cada vez mais um cone. De fato, poderíamos pensar em um cone como uma pirâmide com _infinitamente muitos_ lados!

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---

> id: cone-volume-1

Isso também significa que também podemos usar a equação para o volume: `V = 1/3 "base" × "height"`. A base de um cone é um círculo, portanto, o volume de um cone com raio _r_ e altura _h_ é

{.text-center} `V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---

> id: cone-circumscribed

Observe a semelhança com a equação para o volume de um cilindro. Imagine desenhar um cilindro _em torno de_ do cone, com a mesma base e altura - isso é chamado de __cilindro circunscrito__. Agora, o cone ocupará exatamente [[um terço|half|one quarter]] do volume do cilindro:

    figure: x-solid(size=280)

---

> id: cone-hilbert

{.i.lgrey} Nota: Você pode pensar que infinitamente muitos lados pequenos como aproximação são um pouco "imprecisos". A matemática passou muito tempo tentando encontrar uma maneira mais direta de calcular o volume de um cone. Em 1900, o grande matemático David Hilbert o nomeou como um dos 23 problemas não resolvidos mais importantes da matemática! Hoje sabemos que é realmente impossível.

---

> id: oblique-cone
> goals: slide

::: column.grow

Assim como um cilindro, um cone não precisa ser "reto". Se o vértice estiver diretamente sobre o centro da base, temos um __cone direito__. Caso contrário, chamamos de um cone oblíquo.

Mais uma vez, podemos usar o princípio de Cavalieri para mostrar que todos os cones oblíquos têm o mesmo volume, desde que tenham a mesma base e altura.

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---

> id: cone-surface

#### Área de superfície de um cone

::: column.grow

Encontrar a área da superfície de um cone é um pouco mais complicado. Como antes, podemos desvendar um cone em sua rede. Mova o controle deslizante para ver o que acontece: nesse caso, temos um círculo e um [[setor de círculos|circle segment|circle arc]].

Agora precisamos adicionar a área desses dois componentes. A base __{.m-yellow}__ é um círculo com raio _r_; portanto, sua área é

{.text-center.reveal(when="blank-0")} `pill(A_"Base","yellow","circle") =` _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

O raio do setor __{.m-green}__ é o mesmo que a distância da borda de um cone ao seu vértice. Isso é chamado de __{.pill.green.step-target(data-to="s")} altura inclinada _s___ do cone, e não é o mesmo que a normal __{.pill.blue.step-target(data-to="h")} altura _h___ . Podemos encontrar a altura inclinada usando [Pitágoras](gloss:pythagoras-theorem):

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

O comprimento do arco _{span.pill.step-target.red(data-to="arc")}_ do setor é o mesmo que a [[circunferência|diameter|arc]] da _{span.pill.step-target.yellow(data-to="base")} base_: _{span.reveal(when="blank-0")} `2 π r`. Agora podemos encontrar a área do [setor](gloss:circle-sector) usando a fórmula que derivamos em uma seção anterior:_

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

Finalmente, basta adicionar a área da base __{.m-yellow}__ e a área do setor __{.m-green}__, para obter a superfície total do cone:

{.text-center} `A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

Esferas

::: column.grow

Uma [__esfera__](gloss:sphere) é um sólido tridimensional que consiste em todos os pontos que têm a mesma distância de um determinado __{.m-green} centro _C___. Essa distância é chamada raio __{.m-red} _r___ da esfera.

Você pode pensar em uma esfera como um "[círculo](gloss:circle) tridimensional". Assim como um círculo, uma esfera também tem __{.m-blue} de diâmetro _d___, que é [[duas vezes|half]] o comprimento do raio, bem como acordes e secantes.

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} Em uma seção anterior [de](/course/circles/tangets-chords-arcs#eratosthenes-1), você aprendeu como o matemático grego [Eratóstenes](bio:eratosthenes) calculou o raio da Terra usando a sombra de um poste - eram 6.371 km. Agora, vamos tentar encontrar o volume total e a área de superfície da Terra. [Continuar](btn:next)

---
> id: sphere-volume

#### Volume de uma esfera

Para encontrar o volume de uma esfera, mais uma vez precisamos usar o Princípio de Cavalieri. Vamos começar com um hemisfério - uma esfera cortada ao meio ao longo do equador. Também precisamos de um cilindro com o mesmo raio e altura do hemisfério, mas com um cone invertido “cortado” no meio.

Ao mover o controle deslizante acima, você pode ver a seção transversal de ambas as formas em uma altura específica acima da base:

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

{.reveal(when="slider-0")} Vamos tentar encontrar a área de seção transversal de ambos os sólidos, a uma distância __{span.pill.blue.step-target(data-to="h")} de altura _h___ acima da base.

::: column.grow

{.reveal(when="slider-0")} A seção transversal do hemisfério é sempre um [[círculo|ring|cylinder]].

{.reveal(when="blank-0")} O raio __{span.pill.red.step-target(data-to="x")} _x___ da seção transversal é parte de um _{span.pill.yellow.step-target(data-to="tri")} triângulo retângulo_, para que possamos usar {1111 Pitágoras](gloss:pythagoras-theorem):

::: .reveal(when="blank-0")

{.text-center} `pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")`.

Agora, a área da seção transversal é

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)

:::
::: column.grow.reveal(when="eqn-0")

A seção transversal do cilindro de corte é sempre um [[anel|circle|cone]].

::: .reveal(when="blank-1")

O raio do furo é _h_. Podemos encontrar a área do anel subtraindo a área do furo da área do círculo maior:

| _A_ | = | `π r^2 - π h^2` |
| | = | `π (r^2 - h^2)` |
{.eqn-system}

:::
:::

---
> id: sphere-volume-1

Parece que os dois sólidos têm a mesma área de seção transversal em todos os níveis. Pelo princípio de Cavalieri, os dois sólidos também devem ter o mesmo [[volume|surface area|circumference]]! _{span.reveal(when="blank-0")} Podemos encontrar o volume do hemisfério subtraindo o volume do [cilindro](gloss:cylinder-volume) e o volume do [cone](gloss:cone-volume):_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")

| `V_"Hemisphere"` | = | `V_"Cylinder" - V_"Cone"` |
| | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |

:::

---
> id: sphere-volume-2

Uma esfera consiste em [[dois]] hemisférios, _{span.reveal(when="blank-0")}, o que significa que seu volume deve ser_

{.text-center.reveal(when="blank-0")} `V = 4/3 π r^3`.

---

> id: earth-volume
> goals: numbers

::: column.grow

A Terra é (aproximadamente) uma esfera com um raio de 6.371 \ km. Portanto, seu volume é

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
|     | `=` | _{span.numbers} 1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} A densidade média da Terra é `5510 "kg/m"^3`. Isso significa que sua massa total é

{.text-center.reveal(when="numbers")} `"Mass" = "Volume" × "Density" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} Esse é um 6 seguido por 24 zeros!

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---

> id: sphere-sum

Se você comparar as equações para o volume de um cilindro, cone e esfera, poderá observar uma das relações mais satisfatórias em geometria. Imagine que temos um cilindro com a mesma altura que o diâmetro de sua base. Agora podemos encaixar perfeitamente um cone e uma esfera em seu interior:

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} Este cone tem raio `r` e altura `2r`. Seu volume é _{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} Esta esfera tem raio `r`. Seu volume é _{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} Este cilindro tem raio `r` e altura `2r`. Seu volume é _{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} Observe como, se somarmos|subtract|multiply]] o volume do cone e da esfera, obteremos exatamente o volume do cilindro!

---

> id: sphere-maps
> goals: move projection

#### Área de superfície de uma esfera

Encontrar uma fórmula para a área de superfície de uma esfera é muito difícil. Uma razão é que não podemos abrir e "achatar" a superfície de uma esfera, como fizemos anteriormente para cones e cilindros.

Esse é um problema específico ao tentar criar mapas. A Terra possui uma superfície tridimensional curva, mas todo mapa impresso deve ser plano e bidimensional. Isso significa que os geógrafos precisam trapacear: esticando ou esmagando certas áreas.

Aqui você pode ver alguns tipos diferentes de mapas, chamados __projeções__. Tente mover o quadrado vermelho e observe como essa área _realmente_ se parece em um globo:

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
          p.caption As you move the square on the map, notice how the size and shape of the #[em actual] area changes on the 3-dimensional globe.
    x-gesture(target="#projection" slide="50, 20")

---

> id: sphere-surface

Para encontrar a área da superfície de uma esfera, podemos mais uma vez aproximá-la usando uma forma diferente - por exemplo, um poliedro com muitas faces. À medida que o número de faces aumenta, o poliedro começa a parecer cada vez mais uma esfera.

{.todo} EM BREVE: Prova da área de superfície da esfera

---

## Seções cônicas

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola
> translated: auto

O círculo é uma das quatro formas diferentes que podem ser criadas usando “fatias” através de um [cone](gloss:cone). Isso pode ser demonstrado usando o cone de luz de uma tocha:

    x-conic-section
    x-scale-box(width=760).conics
      .row
        .active
          p: strong Circle
          include svg/circle.svg
        .hide
          p: strong Ellipse
          include svg/ellipse.svg
        .hide
          p: strong Parabola
          include svg/parabola.svg
        .hide
          p: strong Hyperbola
          include svg/hyperbola.svg

---
> id: conics-1

Se você apontar a tocha verticalmente para baixo, verá um [[círculo|ellipse|oval]] de luz. _{span.reveal(when="blank-0")} Se você inclinar o cone, obterá uma [__elipse__](gloss:ellipse). Se você inclinar ainda mais, obterá uma [__parábola__](gloss:parabola) ou uma [__hipérbole__](gloss:hyperbola)._

---
> id: conics-2

::: column.grow

Coletivamente, essas quatro formas são chamadas de [__seções cônicas__](gloss:conic-section). Mesmo que todos pareçam muito diferentes, eles estão intimamente relacionados: na verdade, todos eles podem ser gerados usando a mesma equação!

As seções cônicas foram estudadas pela primeira vez pelo matemático grego antigo Apolônio de Pérgula, que também lhes deu nomes incomuns.

Nos cursos posteriores, você aprenderá muito mais sobre parábolas e hipérbolas. Por enquanto, vamos dar uma olhada mais de perto na elipse.

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### Elipses

Uma elipse parece quase um "círculo alongado". De fato, você pode pensar nisso como um círculo com _dois centros_ - esses são chamados __pontos focais__. Assim como todo ponto em um círculo tem a mesma distância do centro, todo ponto em uma elipse tem a mesma _soma de distâncias_ para seus dois pontos focais.

Se você tiver uma cadeia longa conectada a dois pontos fixos, poderá desenhar uma elipse perfeita rastreando o alcance máximo das cadeias:

{.todo} Em breve: elipses desenhando interativas

---
> id: ellipses-2
> goals: v0 v1 v2 v3

Existem muitas outras representações físicas de como você pode desenhar uma elipse:

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

### Órbitas Planetárias

::: column.grow

Você deve se lembrar, desde o início deste curso, que os astrônomos da Grécia antiga acreditavam que a Terra estava no centro do universo e que o sol, a lua e os planetas se moviam ao redor da Terra em órbitas circulares.

Infelizmente, a observação astronômica do céu não suportava isso. Por exemplo, o sol apareceu maior em algumas partes do ano e menor em outras. Em um círculo, todo ponto deve ter [[a mesma distância de seu centro.

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} Astrônomo grego Hiparco de Nicéia

:::

---
> id: epicycles
> goals: play

Para consertar isso, os astrônomos adicionaram __Epicycles__ ao modelo do sistema solar: os planetas se movem em um grande círculo ao redor da Terra, enquanto simultaneamente rodam em um círculo menor. Embora muito complicado, esse foi o modelo mais amplamente aceito do nosso universo por mais de 1000 anos:

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} Este planeta faz ${n}{n|6|2,12,1} rotações ao redor do pequeno círculo (o __epiciclo__) durante uma rotação ao redor do círculo maior (o __deferente__).

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} Um desenho do século 16 de epiciclos no __modelo geocêntrico__. A palavra grega "planetas" significa "andarilhos".

:::

---
> id: kepler
> goals: play

::: column.grow

Com o tempo, as pessoas perceberam que a Terra era apenas um dos muitos planetas que orbitam o Sol (o modelo heliocêntrico), mas não foi até 1609 que o astrônomo Johannes Kepler descobriu que os planetas na verdade, mova-se em _órbitas elípticas_.

O sol está em um dos dois pontos focais dessas elipses. Os planetas aceleram à medida que se aproximam do sol e diminuem de velocidade à medida que se afastam.

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

Algumas décadas depois, [Isaac Newton](bio:newton) conseguiu provar as observações de Kepler, usando suas leis recém-desenvolvidas de [__gravidade__](gloss:gravity). Newton percebeu que existe uma força entre duas massas no universo - semelhante à atração entre dois ímãs.

A gravidade é o que faz tudo cair no chão e a gravidade também é o que faz os planetas se moverem ao redor do sol. É apenas a grande velocidade com que os planetas se movem que os impede de cair diretamente no sol.

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

Usando as leis de Newton, você pode derivar o caminho que os objetos percorrem ao se mover sob a força da gravidade. Acontece que os planetas se movem nas elipses, mas outros objetos, como os cometas, podem viajar por caminhos parabólicos](gloss:parabola) ou [hiperbólicos](gloss:hyperbola): eles voam perto do sol antes de se virar e disparar para o universo, para nunca mais voltar.

Segundo a lenda, uma maçã caindo inspirou Newton a pensar na gravidade. Ele foi um dos cientistas mais influentes de todos os tempos, e suas idéias moldaram nossa compreensão do mundo por quase 300 anos - até Albert Einstein descobrir a relatividade em 1905.

:::
