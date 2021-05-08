# Fractais

## Introdução

> section: introduction
> id: intro
> trailer: ohygDnKg5mg
> color: "#8032AD"
> level: Advanced
> next: chaos

Ao olhar a natureza, você deve ter notado plantas complexas como estas:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} Esta __samambaia__ consiste em muitas folhas pequenas que se ramificam em folhas maiores.

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} Este __brócolis romanesco__ consiste em [[cones|cubos|esferas]] menores espiralando em torno de um maior.

:::

{.reveal(when="blank-0")} Inicialmente, elas parecem formas altamente complexas - mas quando você olha mais de perto, pode perceber que as duas seguem um padrão relativamente simples: todas as [partes individuais](target:fractal) das plantas parecem exatamente iguais a toda planta, apenas menor. O mesmo padrão é repetido várias vezes, em escalas menores. [Continuar](btn:next)

---

> id: fern

Em matemática, chamamos essa propriedade de __auto-similaridade__, e as formas que a possuem são chamadas de [__fractais__](gloss:fractal). Eles são alguns dos objetos mais bonitos e bizarros de toda a matemática.

Para criar nossos próprios fractais, temos que começar com um padrão simples e depois repeti-lo várias vezes, em escalas menores.

::: column.grow

Um dos padrões mais simples pode ser um [{.pill.red} segmento de linha](target:s1), com [{.pill.blue} mais dois segmentos](target:s2) ramificados em uma extremidade. Se repetirmos esse padrão, os dois segmentos azuis também terão mais duas ramificações nas extremidades.

Você pode mover os [pontos azuis](target:dot) para alterar o comprimento e o ângulo de todos os ramos. Aumente o número de iterações usando [o controle deslizante](->#fern-slider) abaixo.

{.reveal(when="slider-0")} Dependendo da posição dos galhos, é possível criar padrões completamente diferentes - parecendo a [samambaia](action:set(130,228,197,184)) acima, uma [árvore](action:set(160,186,200,186)) ou [pentágonos aninhados](action:set(113,235,232,238)). O que mais você pode encontrar? [Continuar](btn:next)

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

Outro fractal famoso é o [__triângulo de Sierpinski__](gloss:sierpinski-triangle). Nesse caso, começamos com um triângulo grande e equilátero e, em seguida, cortamos repetidamente triângulos menores das partes restantes.

{.reveal(when="slider=0")} Observe como a forma final é composta de [três cópias idênticas de si mesma](target:x), e cada uma delas é composta de cópias ainda menores de todo o triângulo! Você pode continuar ampliando o triângulo para sempre, e os padrões e formas sempre continuarão se repetindo.

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

As plantas no começo deste capítulo _parecem_ exatamente como fractais, mas é claramente impossível criar _verdadeiros_ fractais na vida real. Se continuarmos repetindo o mesmo padrão repetidamente, cada vez menores, chegaremos a células, moléculas ou átomos que não podem mais ser divididos.

No entanto, usando a matemática, podemos pensar nas propriedades que os fractais reais “deveriam” ter - e são muito surpreendentes… [Continue](btn:next)

---
> id: dimension

### Dimensões do Fractal

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

Primeiro, vamos pensar na dimensão dos fractais. Uma linha tem dimensão [[1]]. _{span.reveal(when="blank-0")} Ao ampliar uma linha por um fator de 2, o comprimento desta aumenta em um fator de `2^1 = 2`. Obviamente!_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

Um quadrado tem dimensão [[2]]. _{span.reveal(when="blank-0")} Ao ampliar este por um fator de 2, sua área aumenta em um fator de `2^2 =` [[4]]._

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

Um cubo tem dimensão [[3]]. _{span.reveal(when="blank-0")} Ao ampliar este por um fator de 2, seu volume aumenta em um fator de `2^3 =` [[8]]._ _{span.reveal(when="blank-1")} Observe que o cubo maior na imagem consiste em 8 cópias da menor!_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Agora vamos dar uma olhada no triângulo de Sierpinski. Se o ampliarmos por um fator de 2, você poderá ver que a "área" aumenta em um fator de [[3]].

{.reveal(when="blank-0")} Digamos que _d_ seja a dimensão do triângulo de Sierpinski. Usando o mesmo padrão acima, obtemos `2^d = 3`. Em outras palavras, _d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} ≈ 1,558…_

:::

---
> id: dimension-4

Mas espere... como algo pode ter uma dimensão que não é um número inteiro? Parece impossível, mas esta é apenas uma das propriedades estranhas dos fractais. De fato, é isso que dá nome aos fractais: eles têm uma __dimensão fracionária__.

A cada iteração, removemos parte da área do triângulo de Sierpinski. Se pudéssemos fazer isso infinitamente várias vezes, não haveria realmente nenhuma área: é por isso que o triângulo de Sierpinski é algo entre uma área bidimensional e uma linha unidimensional.

::: .theorem

Enquanto muitos fractais são _auto-similares_, uma definição melhor é que __fractais__ são formas que possuem __dimensão não inteira__.

:::

[Continuar](btn:next)

---

> id: snowflake

### O floco de neve de Koch

Existem muitas formas na natureza que se parecem com fractais. Já vimos algumas plantas no início deste capítulo. Outros grandes exemplos são flocos de neve e cristais de gelo:

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

Para criar nosso próprio floco de neve fractal, precisamos encontrar novamente um procedimento simples que possamos aplicar repetidamente.

::: column.grow

Como o triângulo de Sierpinski, vamos começar com um único triângulo equilátero. No entanto, em vez de _remover_ triângulos menores a cada passo, _adicionamos_ triângulos menores ao longo da aresta. O comprimento lateral de cada triângulo é [[`1/3`|`1/4`|`1/2`]] dos triângulos na etapa anterior.

{.reveal(when="blank-0")} A forma resultante é chamada de [__floco de neve de Koch__](gloss:koch-snowflake), com o nome do matemático sueco [Helge von Koch](bio:koch). Observe, mais uma vez, que [seções pequenas](target:t2) da borda do floco de neve parecem exatamente o mesmo que [seções maiores](target:t1).

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

Quando ampliamos um segmento de borda do floco de neve de Koch por um fator 3, seu comprimento [[quadruplica|triplica|duplica]].

{.reveal(when="blank-0")} Usando a mesma relação entre dimensões e fatores de escala como acima, obtemos a equação [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]]. _{span.reveal(when="blank-1")} Isso significa que a dimensão do floco de neve de Koch é `§d = log_3(4) ≈ 1.262`._

:::

---

> id: koch-size

::: tab

#### Área_{span.check(when="blank-6")}_

Criar os flocos de neve de Koch é quase como uma [sequência recursiva](gloss:sequence-recursive): conhecemos a forma inicial (um triângulo) e sabemos como passar de um termo para o seguinte (adicionando mais triângulos em todas as arestas):

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] novos triângulos

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] novos triângulos

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]] novos triângulos

:::

{.reveal(when="blank-0 blank-1 blank-2")} Após a primeira iteração, o número de novos triângulos adicionados aumenta em um fator de [[4]] a cada passo. Ao mesmo tempo, a área desses novos triângulos diminui em um fator de [[9]] a cada passo.

{.reveal(when="blank-3 blank-4")} Digamos que o [primeiro triângulo](->#koch-0) tenha uma área igual a 1. Então a área total dos [próximos três triângulos](->#koch-1) é `3 × 1/9 = 1/3`. As etapas a seguir formam uma [[série geométrica|série aritmética|série quadrática]], _{span.reveal(when="blank-5")} com razão comum [[`4/9`|`9/4`|`4/3`]]._

{.reveal(when="blank-6")} Usando a fórmula da soma de infinitos termos de uma [séries geométricas](gloss:geometric-series), podemos calcular que a área total do floco de neve de Koch é

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`.

::: tab

#### Perímetro _{span.check(when="blank-9")}_

::: column.grow

Também podemos tentar calcular o perímetro do floco de neve de Koch. Como já vimos antes, o comprimento do perímetro muda em um fator de [[`4/3`|`3/4`|`1/4`]] a cada passo.

{.reveal(when="blank-8")} Isso significa que, mais uma vez, temos uma série geométrica - mas, neste caso, [[não convergente|converge para 0|não tem um primeiro termo]]. _{span.reveal(when="blank-9")} Isso significa que o perímetro do floco de neve de Koch é  **infinitamente longo**!_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _Se isso parecer contra-intuitivo, lembre-se de que multiplicamos o perímetro por `§4/3` a cada passo, e fazemos isso várias vezes infinitamente._

:::

---

> id: frozen

::: column.grow

É quase impensável que você possa ter uma forma com uma área _finita_ e também um perímetro  _infinito_ - mas essa é apenas uma das muitas propriedades inesperadas dos fractais.

Você pode encontrar outras maneiras de criar seus próprios fractais? [Continuar](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} "Minha alma está espiralando em fractais congelados por toda parte ..."

:::

---

> id: menger-sponge

### Esponja de Menger

Os fractais não precisam ser "planos", como muitos dos exemplos acima. Um dos fractais mais famosos que parecem tridimensionais é a __esponja de Menger__, nomeada em homenagem ao matemático [Karl Menger](bio:menger), que a descreveu pela primeira vez em 1926.

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

Começamos com um cubo sólido e fazemos repetidamente furos cada vez menores em seus lados. Toda nova iteração de furos possui [[`1/3`|`1/2`|`1/4`]] da largura da iteração anterior dos furos.

{.reveal(when="blank-0")} Um cubo `3×3×3` consiste em 27 cubos menores, mas aqui removemos alguns deles. A esponja de Menger consiste em [[20]] cópias de si mesma, que são três vezes menores.

Agora, podemos tentar calcular a dimensão _d_ da esponja de Menger, exatamente como fizemos no floco de neve de Koch acima. Nesse caso, obtemos `3^d = 20` ou `§d = log_3(20) ≈ 2.727`.

:::

{.reveal(when="blank-1")} Se você imaginar cortar cada vez mais furos, infinitas vezes, não haveria volume real. É por isso que o cubo de Menger "não é bem" tridimensional! [Continuar](btn:next)

---

> id: coastlines

### Litoral do Fractal

Uma das principais características de todos os fractais que vimos até agora é que você pode "aumentar o zoom" para sempre e sempre encontrar novos padrões. Por volta de 1920, o matemático britânico [Lewis Fry Richardson](bio:richardson) percebeu que o mesmo se aplica à fronteira ou litoral de muitos países.

Você começa com a forma básica do país e, à medida que aumenta o zoom, adiciona enseadas de rios, baías e estuários, depois penhascos, rochas, seixos e assim por diante:

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

[Continuar](btn:next)

---

> id: coastlines-1

::: column.grow

Esse é um problema significativo ao tentar calcular o comprimento da fronteira de um país - como você decide a que distância deve aumentar o zoom e quais cantos e recantos devem ser incluídos?

Uma maneira de medir o comprimento da costa da Grã-Bretanha, por exemplo, é pegar uma régua longa, caminhar ao redor de suas praias e somar todas as distâncias.

Se a régua tem ${rulers[index]}{index|0|0,8,1} km de comprimento, precisamos usá-la ${count} vezes, para obter um litoral total de ${count} × ${rulers[index]} = ${count * rulers[index]} km.

{.reveal(when="var-0")} Poderíamos continuar, com réguas cada vez menores, e cada vez nosso resultado para a extensão da costa iria ficar um pouco mais longo. Assim como o floco de neve de Koch, parece que a costa da Grã-Bretanha é infinitamente longa! Isso costuma ser chamado de __paradoxo do litoral__. [Continuar](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

Algumas décadas depois, enquanto trabalhava na IBM, o matemático Benoit Mandelbrot encontrou o trabalho de Richardson em um livro descartado da biblioteca. Ele reconheceu seu significado e também como ele se relacionava com pesquisas mais recentes sobre fractais e dimensões.

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

O litoral da Grã-Bretanha certamente "parece" fractal, mas não é auto-semelhante, como outros fractais que já vimos antes. Para encontrar seu tamanho, podemos desenhá-lo em uma grade e contar o número de células com as quais ele se cruza.

{.r.reveal(when="slider-0")} Inicialmente, existem __{.pill.yellow} 88__ células que se cruzam. Se ampliarmos a costa por um fator de 2, haverá __{.pill.yellow} 197__ células que se cruzam - mais que o dobro! [Continuar](btn:next)

{.r.reveal(when="next-0")} O tamanho da costa aumentou em um fator de `§197/88`. Como antes, isso significa que a dimensão da costa é

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---

> id: coastline-dimension-1

Se repetirmos isso com grades maiores, descobriremos que a dimensão da costa da Grã-Bretanha é de aproximadamente 1,21. Mandelbrot percebeu que essa dimensão fractal também é uma medida da rugosidade de uma forma - um novo conceito, para o qual ele encontrou aplicações importantes em muitas outras áreas da matemática e da ciência.

---

> id: nature

### Mais fractais na natureza e na tecnologia

Embora os fractais verdadeiros nunca possam aparecer na natureza, há muitos objetos que _quase_ se parecem com fractais. Já vimos plantas, flocos de neve e costas, e aqui estão mais alguns exemplos:

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption} Cordilheira na Ásia Central

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption} Delta do rio Ganges na Índia

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption} Raios

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption} Vasos sanguíneos na retina

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption} Grand Canyon nos EUA

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption} Nuvens

:::

Todos esses objetos podem parecer completamente aleatórios, mas, assim como os fractais, existe um padrão subjacente que determina como eles são formados. A matemática pode nos ajudar a entender melhor as formas, e os fractais têm aplicações em áreas como medicina, biologia, geologia e meteorologia. [Continuar](btn:next)

---

> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption} Terreno fractal gerado por computador

::: column.grow

Também podemos usar fractais para criar "cópias" realistas da natureza, por exemplo, como paisagens e texturas usadas em videogames ou filmes gerados por computador. A água, montanhas e nuvens nesta imagem são feitas inteiramente por um computador, com a ajuda de fractais!

E podemos até reverter esse processo para compactar imagens digitais e reduzir o tamanho do arquivo. Os primeiros algoritmos foram desenvolvidos por Michael Barnsley e Alan Sloan na década de 1980, e novos algoritmos ainda estão sendo pesquisados até hoje.

:::

---

## O Triângulo de Sierpinski

> section: sierpinski
> id: sierpinski

::: column.grow

Um dos fractais que vimos no capítulo anterior foi o [__triângulo de Sierpinski__](gloss:sierpinski-triangle), que recebeu o nome do matemático polonês [Wacław Sierpiński](bio:sierpinski). Ele pode ser criado começando com um triângulo grande e equilátero e cortando repetidamente triângulos menores fora de seu centro.

Wacław Sierpiński foi o primeiro matemático a pensar nas propriedades desse triângulo, mas ele apareceu muitos séculos antes em obras de arte, padrões e mosaicos.

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: sierpinski-history

Aqui estão alguns exemplos de ladrilhos de diferentes igrejas em Roma:

::: column(width=140 parent="padded-thin")

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire")

:::

Como se vê, o triângulo de Sierpinski aparece em uma ampla gama de outras áreas da matemática, e existem muitas maneiras diferentes de gerá-lo. Neste capítulo, exploraremos alguns deles! [Continuar](btn:next)

---

> id: pascal
> goals: select

### Triângulo de Pascal

Você já deve se lembrar do triângulo de Sierpinski em nosso capítulo sobre [__Triângulo de Pascal__](gloss:pascals-triangle). Esta é uma pirâmide numérica em que todo número é a soma dos dois números acima. Toque em todos os números _pares_ no triângulo abaixo, para destacá-los - e veja se você percebe um padrão:

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

O triângulo de Pascal pode ser continuado para baixo para sempre, e o padrão de Sierpinski continuará com triângulos cada vez maiores. Você já pode ver o início de um triângulo ainda maior, começando na linha 16.

Se duas células adjacentes são divisíveis por 2, então sua soma na célula abaixo também deve ser divisível por 2 - é por isso que só podemos obter triângulos coloridos (ou células únicas). Obviamente, também podemos tentar colorir todas as células divisíveis por outros números _diferentes de 2_. O que você acha que vai acontecer nesses casos? [Continuar](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisível por #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Aqui você pode ver uma versão minúscula das primeiras 128 linhas do triângulo de Pascal. Destacamos todas as células que são divisíveis por ${n}{n|2|2,40,1} - o que você percebe?

Para cada número, temos um padrão triangular diferente, semelhante ao triângulo de Sierpinski. O padrão é particularmente regular se escolhermos um [[número primo|número triangular|número de Fibonacci]]. _{span.reveal(when="blank-0")} Se o número tiver *muitos fatores primos diferentes*, o padrão parecerá ser mais aleatório._

    x-gesture(target="#pascal-large x-var" slide="100,0")

---

> id: chaos-game
> goals: point play

### O jogo do caos

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

Aqui você pode ver os três vértices de um triângulo equilátero. Toque em qualquer lugar na área cinza para criar um quarto ponto.

{.r.reveal(when="point")} Vamos jogar um jogo simples: escolhemos um dos vértices do triângulo aleatoriamente, desenhamos um segmento de linha entre o nosso ponto e o vértice e, em seguida, encontramos o [{.pill.red} ponto médio](target:p1) desse segmento. [Continuar](btn:next)

{.r.reveal(when="next-0")} Agora repetimos o processo: escolhemos outro vértice aleatório, desenhamos o segmento conectando o vértice ao  ponto médio e encontramos novamente o [{.pill.green} ponto médio](target:p2) deste segmento. Observe que colorimos esses novos pontos com base na cor do vértice do triângulo que escolhemos. [Continuar](btn:next)

Até agora, nada de surpreendente aconteceu - mas observe o que acontece quando repetimos o mesmo processo muitas vezes:

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} Adicione 1000 etapas_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

Esse processo é chamado de __jogo do caos__. Pode haver alguns pontos perdidos no início, mas se você repetir os mesmos passos várias vezes, a distribuição dos pontos começará a se parecer exatamente com o triângulo de Sierpinski!

Existem muitas outras versões - por exemplo, poderíamos começar com um quadrado ou um pentágono, adicionar regras adicionais, como não poder selecionar o mesmo vértice duas vezes seguidas ou escolher o próximo ponto em uma proporção diferente de `§1/2` ao longo do segmento. Em alguns desses casos, obteremos apenas uma distribuição aleatória de pontos, mas em outros casos, revelamos ainda mais fractais:

    include components/chaos-game

{.reveal(when="s1 s2 play")} Você descobriu o [tapete Sierpinski](action:carpet()) ou este [floco de neve pentagonal](action:snowflake()) com base na [__proporção áurea__](gloss:golden-ratio)?

---

> id: cellular
> goals: sierpinski

### Autômatos celulares

Um __autômato celular__ é uma grade que consiste em muitas células individuais. Cada célula pode estar em diferentes "estados" (por exemplo, cores diferentes), e o estado de cada célula é determinado pelas células circundantes.

No nosso exemplo, cada célula pode ser preta ou branca. Começamos com uma linha que contém apenas um único quadrado preto. Em todas as linhas seguintes, a cor de cada célula é determinada pelas três células imediatamente acima. Toque nas oito opções possíveis abaixo para selecionar a cor de acordo com a regra - você consegue encontrar um conjunto de regras que cria um padrão semelhante ao triângulo de Sierpinski?

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} Há duas opções para cada uma das oito opções, o que significa que existem `2^8 =` [[256]] regras possíveis no total. Alguns, como a [regra 126](action:setRule('01111110')), parecem com o triângulo de Sierpinski. Outros, como a [regra 30](action:setRule('01111000')), parecem completamente caóticos. Foi descoberto por [Stephen Wolfram](bio:wolfram) em 1983, e os computadores podem até usá-los para gerar números aleatórios!

---

> id: cellular-1

::: column.grow

Os autômatos celulares mostram como padrões altamente complexos podem ser criados por regras muito simples - assim como os fractais. Muitos processos na natureza também seguem regras simples, mas produzem sistemas incrivelmente complexos.

Em alguns casos, isso pode levar ao aparecimento de padrões que se parecem com autômatos celulares, por exemplo, as cores na casca desse caracol.

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} Conus têxtil, um caracol venenoso do mar

:::

---

> id: tetrahedra

Sierpinski Tetrahedra

Existem muitas variantes do triângulo de Sierpinski e outros fractais com propriedades e processos de criação semelhantes. Alguns parecem bidimensionais, como o _tapete de Sierpinski_ que você viu acima. Outros parecem tridimensionais, como estes exemplos:

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

Tetraedro de Sierpinski

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

Pirâmide de Sierpinski

:::

---

## O Conjunto de Mandelbrot

> section: mandelbrot
> id: iteration
> goals: move-1 move-2

Todos os fractais que vimos nos capítulos anteriores foram criados usando um processo de __iteração__: você começa com um padrão específico e depois o repete repetidamente.

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

Isso é semelhante a outro conceito em matemática que você viu antes: nas [sequências recursivas](gloss:sequence-recursive) você começa com um número específico e aplica nele repetidamente a mesma fórmula recursivamente para obter o próximo número da seqüência.

Vamos usar a fórmula recursiva `§x_n = x_(n-1)^2` como exemplo e plotar seus termos em uma linha numérica. Você pode alterar o valor de `pill(x_0,"yellow","x0")`:

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

Observe como a sequência resultante pode se comportar de maneira muito diferente, dependendo do valor inicial `x_0`:

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

Se `x_0 > 1`, a sequência [[diverge|converge]]: _{span.reveal(when="blank-0")} continua crescendo, até o infinito._

::: column.frame.f-blue.text-center(width=212)

Se `x_0` estiver entre –1 e 1, a sequência [[converge|diverge]].

::: column.frame.f-blue.text-center(width=212)

Se `x_0 < -1`, a sequência [[diverge|converge]].

:::

---

> id: iteration-2

Até agora, não aprendemos nada de novo. No entanto, cerca de um século atrás, os matemáticos começaram a explorar o que acontece com essas seqüências se você usar [__números complexos__](gloss:complex-numbers), em vez de usar apenas a reta dos números reais. Suas descobertas foram alguns dos resultados mais surpreendentes e bonitos de toda a matemática.

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### Conjuntos de Julia

Vamos usar a mesma sequência de antes, `§x_n = x_(n-1)^2`, mas no plano complexo. Você pode mover a posição de `pill(x_0,"yellow","x0")`, para ver o que acontece com os termos seguintes da sequência. Se a sequência parecer convergir, vamos colorir o ponto correspondente no plano em _{span.pill.blue} azul_:

    figure: x-geopad(slot="stage" width=720 height=480 x-axis="-2.2,2.2,1" y-axis="-1.5,1.5,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-positioning="no" label-suffix=",i" axis-names="Real, Imaginário")
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

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} Como você pode ver, a sequência converge enquanto `pill(x_0,"yellow","x0")` estiver [[dentro do círculo unitário|fora do quadrado unitário|acima do eixo *x*]] _{span.reveal(when="blank-0")} (o círculo com raio 1, centralizado na origem)._

---

> id: julia-1

Agora vamos tornar as coisas um pouco mais difíceis. Em vez de apenas elevar o quadrado do número anterior, também adicionamos a ele uma constante _{.pill.red} c_ (que pode ser qualquer número complexo). Em outras palavras, `§x_n = x_(n-1)^2 + c`. Você acha que ainda teremos um círculo de pontos convergentes? Que outras formas você acha que poderemos ver? [Continuar](btn:next)

---

> id: julia-2

Neste diagrama, você pode mover a posição de `pill(x_0,"yellow","x0")` e alterar o valor de `pill(c,"red","c")`:

::: x-slideshow

    x-geopad(slot="stage" width=720 height=480 x-axis="-1.8,1.8,1" y-axis="-1.2,1.2,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-suffix=",i" axis-names="Real, Imaginário")
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
            strong.var.m-blue(:show="converges" data-display="inline") Limitado!
            strong.var(:show="!converges" data-display="inline") Diverge!

{div(slot="legend")} Já sabemos o que acontece se [`c = 0`](action:animate(0,0)) - é o mesmo que o exemplo anterior. A sequência converge desde que `x_0` esteja dentro do círculo unitário.

{div(slot="legend")} Assim que alteramos o valor de _c_, algo maravilhoso acontece. O círculo se transforma em uma forma fractal altamente complexa.

{div(slot="legend")} Quando [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)), a forma se divide em infinitos elementos minúsculos dispostos em espirais.

::: div(slot="legend")

Em alguns casos, a sequência não converge para um _único ponto_. Em vez disso, atinge um ciclo com vários pontos, formando, por exemplo, um triângulo. Esses ciclos são chamados de __órbitas__.

Os pontos coloridos em azul significam que a sequência correspondente converge ou tem uma órbita (dizemos que a sequência é __limitada__). Os pontos deixados em branco significam que a sequência correspondente __diverge__: ela não é limitada e, eventualmente, explode até o infinito.

:::

{div(slot="legend")} O que mais você pode encontrar? Veja os padrões quando [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) ou quando [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)). Também existem alguns valores de _c_ em que _todas sequências_ divergem, e portanto, todo o plano complexo permanece com a cor branca.

:::

---

> id: julia-3

As diferentes formas que são formadas pela coloração dos números são chamadas [__conjuntos de Julia__](gloss:julia-set). Eles foram descobertos independentemente por dois matemáticos franceses, [Gaston Julia](bio:julia) e [Pierre Fatou](bio:fatou), por volta de 1918.

Naquela época, não havia computadores para ajudar a visualizar como os conjuntos de Julia realmente eram. Matemáticos como Julia e Fatou foram capazes de raciocinar matematicamente sobre eles, mas eles só viram esboços rudes e desenhados à mão de como poderiam ser.

Hoje não temos esse problema. As imagens abaixo são de conjuntos diferentes de Julia. As cores diferentes indicam _a rapidez_ com que a sequência nesse ponto diverge:

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

[Continuar](btn:next)

---

> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### O Conjunto de Mandelbrot

Ao criar os diferentes conjuntos de Julia, você deve ter notado que havia alguns valores de _c_ para os quais cada sequência diverge, e todo o plano complexo permanece branco. Algumas décadas depois de Julia e Fatou, uma nova geração de matemáticos tentou mapear como eram essas áreas.

No exemplo anterior, escolhemos um valor fixo para `pill(c,"red","c")` e, em seguida, alteramos a posição de `pill(x_0,"yellow","x0")` para colorir o plano. Agora, faremos o contrário: vamos fixar o valor em `pill(x_0 = 0,"yellow","x0")` e alterar o valor de `pill(c,"red","c")`.

Mais uma vez, pinte o plano complexo para revelar a área na qual as seqüências permanecem limitadas. Quais formas você espera que apareçam?

    figure: x-geopad.no-background(width=720 height=480 x-axis="-2.1,1.1,1" y-axis="-1.1,1.1,1" axes grid padding=8 projections="no" label-suffix=",i" axis-names="Real, Imaginário")
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
            strong.var.m-blue(:show="converges" data-display="inline") Limitada!
            strong.var(:show="!converges" data-display="inline") Diverge!

---

> id: mandel-history

Esse fractal é chamado de [__conjunto de Mandelbrot__](gloss:mandelbrot-set) e, quando girado em 90 °, parece quase uma pessoa, com cabeça, corpo e dois braços. Foi definido e desenhado pela primeira vez em 1978, em um trabalho de pesquisa dos matemáticos Robert Brooks e Peter Matelski:

    figure: x-img(src="images/mandelbrot.jpg" width=360 height=290 credit="© Princeton University Press")

Alguns anos depois, [Benoit Mandelbrot](bio:mandelbrot) usou os poderosos computadores da IBM para criar uma visualização muito mais detalhada do fractal, que mais tarde recebeu o nome dele. As primeiras impressões pareciam diferentes do que ele esperava - até que ele percebeu que os técnicos que trabalhavam nas impressoras estavam limpando a “imprecisão” em torno da borda, assumindo que era causada por partículas de poeira ou erros da impressora, e não uma característica definidora de fractais ! [Continuar](btn:next)

---

> id: mandel-zoom

Como todos os fractais, podemos "ampliar" o conjunto de Mandelbrot para sempre, encontrando novos padrões em todas as escalas. Aqui você pode ampliar uma parte do conjunto de Mandelbrot chamado __vale do cavalo-marinho__. Pontos pretos estão _dentro_ do conjunto de Mandelbrot, onde a sequência é limitada. Os pontos coloridos estão _fora_ do conjunto de Mandelbrot, onde a sequência diverge e as cores diferentes indicam a _rapidez_ com que a sequência cresce até o infinito:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Escala: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---

> id: mandel-zoom-1

Esse controle deslizante consiste em 27 imagens individuais, até um nível de zoom acima de 14 quadrilhões ou `2^54`. No total, eles levaram quase 45 minutos para renderizar em um laptop moderno. O conjunto de Mandelbrot pode ser criado com apenas uma equação única e simples, `§x_n = x_(n-1)^2 + c`, mas é infinitamente complexo e incrivelmente bonito.

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

Ao mover o valor de [{.pill.red} c](target:c) ao redor do conjunto de Mandelbrot, você poderá notar uma propriedade curiosa:

* Todas as sequências no corpo principal [do conjunto Mandelbrot [[convergem|divergem|atingem uma órbita]] _{span.reveal(when="blank-0")} para um único ponto._
* {.reveal(when="blank-0")} As sequências dentro do [bulbo grande](target:bulb1) no topo [[atingem uma órbita|convergem|divergem]] _{span.reveal(when="blank-1")} consistindo em [[3]] pontos._
* {.reveal(when="blank-2")} Sequências [neste bulbo menor](target:bulb2) têm órbitas de período [[5]].

:::

{.reveal(when="blank-3")} Todo bulbo tem uma órbita de tamanho diferente, com bulbos menores tendo cada vez mais pontos em suas órbitas. O tamanho dessas órbitas está intimamente relacionado ao __mapa logístico__, um conceito importante na [teoria do caos](/course/chaos).

---

> id: mandel-outro

::: column.grow

Bernoit Mandelbrot dedicou a maior parte de sua vida ao estudo de fractais, bem como à matemática da rugosidade e da _auto-similaridade_. Seu trabalho teve aplicações em física, meteorologia, neurologia, economia, geologia, engenharia, ciência da computação e muitos outros campos.

Em 1985, o conjunto de Mandelbrot apareceu na capa da revista _Scientific American_ e, desde então, tornou-se uma das formas matemáticas mais reconhecíveis do mundo. Você pode encontrá-lo em camisetas, videoclipes e como protetores de tela, e foi mencionado em muitos livros e filmes populares.

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::

---

## Curvas de preenchimento de espaço

> section: space-filling
> sectionStatus: dev

{.todo} Em breve!

