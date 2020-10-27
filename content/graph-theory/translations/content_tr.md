# Grafikler ve Ağlar 

## Giriş 

> id: intro-0
> section: introduction
> translated: auto

Her gün sayısız bağlantı ve ağ ile çevriliyiz: yollar ve demiryolu hatları, telefon hatları, internet, elektronik devreler ve hatta moleküler bağlar. Arkadaşlar ve aileler arasında _sosyal ağlar_ bile var. Başka örnekler düşünebilir misiniz? 

::: column(width=220 parent="padded-thin")

    x-img(src="images/network1.jpg" width=220 height=220 lightbox)

{.caption} Kara ve Demiryolu Ağları 

::: column(width=220)

    x-img(src="images/network6.jpg" width=220 height=220 lightbox)

{.caption} Bilgisayar çipleri 

::: column(width=220)

    x-img(src="images/network3.jpg" width=220 height=220 lightbox)

{.caption} Tedarik zinciri 

::: column(width=220)

    x-img(src="images/network2.jpg" width=220 height=220 lightbox)

{.caption} arkadaşlıklar 

::: column(width=220)

    x-img(src="images/network7.jpg" width=220 height=220 lightbox)

{.caption} Sinirsel Bağlantılar 

::: column(width=220)

    x-img(src="images/network4.jpg" width=220 height=220 lightbox)

{.caption} İnternet 

:::

---
> id: intro

::: column.grow

Matematik olarak, tüm bu örnekler, (a fonksiyon _grafiği_ ile karıştırılmamalıdır) [__grafik__](gloss:graph) olarak temsil edilebilir. Bir grafik [[köşeler]] adı verilen belirli _noktalardan_ oluşur [[| çevreler |]] bazıları [[kenarlarla]] bağlanan [[geçişler]] [[| sınırları | çiftleri]] . 

__Grafik teorisi__ , grafiklerin ve özelliklerinin incelenmesidir. Matematiğin en heyecan verici ve görsel alanlarından biridir ve sayısız önemli uygulamaya sahiptir. 

::: column(width=180)

    svg#graph0.graph.novertices.noedges(width=180 height=180)

:::

---
> id: intro-1

Daireler ve çizgiler kullanarak basit grafiklerin düzenini çizebiliriz. Köşelerin pozisyonu ve kenarların uzunluğu önemsizdir - sadece birbirlerine _nasıl bağlandıklarını_ önemsiyoruz. Kenarlar birbirini bile geçebilir ve düz olması gerekmez. 

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Bazı grafiklerde, kenarlar yalnızca bir yöne gider. Bunlara [__yönlendirilmiş grafikler__](gloss:directed-graph) denir. 

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Bazı grafikler, kenarlarıyla birbirine bağlı olmayan birden çok köşe grubundan oluşur. Bu grafiklerin __bağlantısı kesildi__ . 

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Diğer grafikler, aynı çift çiftler veya kendilerine (köşeler) bağlı köşeler arasında birden fazla kenar içerebilir. 

:::

---
> id: intro-2

Bazı köşeleri ve kenarları kaldırarak mevcut bir grafikten yeni grafikler oluşturabiliriz. Sonuç bir [__alt çizgi__](gloss:subgraph) olarak adlandırılır. Burada, renkli kenarları ve köşeleri olası bir alt grafiği gösteren birkaç grafik örneği daha görebilirsiniz: 

::: column(width=212 parent="padded-thin")

    svg.graph(height=100 width=100 style='float: left; margin-right: 12px')
    svg.graph(height=100 width=100 style='float: left')

::: column(width=212)

    svg.graph(height=100 width=100 style='float: left; margin-right: 12px')
    svg.graph(height=100 width=100 style='float: left')

::: column(width=212)

    svg.graph(height=100 width=100 style='float: left; margin-right: 12px')
    svg.graph(height=100 width=100 style='float: left')

:::

---
> id: intro-3

Bir grafiğin [__sırasının__](gloss:graph-order) sahip olduğu köşe sayısı olduğunu söylüyoruz. Bir tepe noktasının [__derecesi__](gloss:graph-degree) , bu tepe noktasında buluşan kenar sayısıdır. 

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Sıra: [[5]] 

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Sıra: [[8]] 

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Derece: [[3]] 

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Derece: [[6]] 

:::

---
> id: intro-4

Köşe tek bir döngü oluşur Grafikler [__çevrimler olarak__](gloss:graph-cycle) adlandırılır. Tüm döngüler [[aynı sayıda kenar ve köşeye sahiptir | köşelerden daha fazla kenar | köşelerden daha az kenar]] . 

    .row
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')

{.reveal(when="blank-0")} Bu yeni tanımlarla donatılmış olarak, grafiklerin büyüleyici özelliklerini ve uygulamalarını keşfedelim. 

---
> id: bridges-0
> title: The Bridges of Königsberg
> section: bridges
> translated: auto

## Königsberg Köprüleri 

::: column.grow

Grafikler ve ağlar hakkında düşünen ilk matematikçilerden biri [Leonhard Euler idi](bio:euler) . Euler, Baltık Denizi yakınlarındaki Königsberg kasabasıyla ilgili eski bir sorundan etkilendi. 

Pregel nehri, Königsberg'i yedi köprü ile birbirine bağlanan dört ayrı parçaya ayırır. Tüm köprüleri tam olarak bir kez geçerek - birden fazla değil, şehirde dolaşmak mümkün mü? (Her yerde başlayabilir ve bitirebilirsiniz, aynı yerde olması gerekmez.) 

Şu haritalarda çizim yaparak geçerli bir rota bulmaya çalışın: 

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
        button.btn Clear
        button.btn.right Skip
      .tab
        h3 Map 2#[span.check(when="bridge-1")]
        x-solved
        include svg/bridges-2.svg
        button.btn Clear
        button.btn.right Skip
      .tab
        h3 Map 3#[span.check(when="bridge-2")]
        x-solved
        include svg/bridges-3.svg
        button.btn Clear
        button.btn.right Skip
      .tab
        h3 Map 4 #[span.check.incorrect(when="bridge-3")]
        x-solved
        include svg/bridges-4.svg
        button.btn Clear
        button.btn.right Skip

---
> id: bridges-1

Königsberg örneğinde, geçerli bir rota bulmak imkansız gibi görünüyor, ancak diğer bazı şehirler çalışıyor. Euler, grafik teorisini kullanarak pek çok olasılığı denemek zorunda kalmadan herhangi bir şehre uygulanabilecek basit bir kural bulmayı başardı. 

::: column.grow

İlk olarak, şehir haritalarını kenarları ve köşeleri olan grafiklere dönüştürmemiz gerekiyor. Her ada veya bölge [[bir tepe noktasıyla]] temsil edilir [[| kenar | bir alan]] ve iki bölgeyi birbirine bağlayan her köprü karşılık gelen bir [[kenar]] ile temsil edilir [[| tepe | sokak]] . 

{.reveal(when="blank-0 blank-1")} Şimdi “her köprüyü tam olarak bir kez geçerken bir şehri gezmek” sorunu, “her kenarı tam olarak bir kez izleyerek bir sürekli vuruşla bir grafik çizmek” sorunu haline geldi. 

::: column(width=200)

    include svg/konigsberg.svg

:::

---
> id: bridges-2

Kağıt üzerinde birkaç farklı grafik oluşturun ve hangilerinin tek bir sürekli konturla çizilebileceğini bulmaya çalışın. 

---
> id: bridges-3
> goals: size prime eo

Tıpkı daha önceki şehir haritalarında olduğu gibi, bazı grafiklerin mümkün olduğunu, bazılarının ise mümkün olmadığını görüyoruz. Nedenini anlamamıza yardımcı olmak için, her köşeyi [derecesi](gloss:graph-degree) ile etiketleyelim. Ardından köşeleri farklı şekillerde renklendirebilir ve bir desen ortaya çıkarmaya çalışabiliriz: 

    figure
      x-select.var.tabs(:bind="colour")
        div(value="val") Value
        div(value="size") Size
        div(value="prime") Prime Numbers
        div(value="eo") Even and Odd
      .box
        p.no-voice(style="margin: 0"): strong These graphs are possible:
        include svg/vertex-orders-1.svg
        p.no-voice(style="margin: 1em 0 0"): strong These graphs are not possible:
        include svg/vertex-orders-2.svg

---
> id: bridges-4

Mümkün olan ve mümkün olmayan grafikler için bu sayıların karşılaştırılması, [[ikiden fazla “tek” köşesi]] yoksa bir grafiğin çizilebileceği anlaşılmaktadır. [[| sadece "eşit" köşeleri vardır | 4'ten büyük bir sıraya sahip köşeleri yok | tek sayıda köşe noktası var | 3. sırada köşe yok]] . Grafikte yalnızca tek bir tepe noktasına bakarsak bu durum açıklanabilir: 

    x-slideshow
      .stage(slot="stage"): include svg/konigsberg-proof.svg
      .legend(slot="legend") Here you can see a single, magnified vertex in a graph.
      .legend(slot="legend") If we draw the graph, we will eventually have an edge leading towards this vertex, and then another one leading away. This makes two edges meeting at the vertex.
      .legend(slot="legend") Maybe the vertex is a crossing rather than a corner. In that case there will be another edge leading towards the vertex, and another edge leading away. Now we have four edges.
      .legend(slot="legend") And in some graphs, there may even be a third pair of edges leading towards and away from the vertex. Now there are six edges.
      .legend(slot="legend") Notice that, either way, there always is an even number of edges meeting at the vertex.
      .legend(slot="legend") The only two exceptions are the vertices where the path starts, and where it ends – these two may have an odd number of edges. If the start and end point are the same, all vertices in the graph are even.

---
> id: bridges-5

::: column.grow(parent="right")

Königsberg haritasına geri dönerseniz, tek sayıda köprüye sahip ikiden fazla ada olduğunu göreceksiniz. Bu nedenle, her köprüyü tam olarak bir kez geçen bir rota gerçekten imkansızdır - ve Leonard Euler keşfetti. 

Euler'nin keşfi gerçek hayatta özellikle yararlı görünmeyebilir, ancak grafikler iki konum arasında yön bulma gibi diğer birçok coğrafi sorunun temelini oluşturur. Daha sonra bu uygulamalardan daha fazlasını keşfedeceğiz. 

::: column(width=240)

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes
> translated: auto

## El Sıkışma ve Flört 

::: column.grow

Arkadaşlarınızla birlikte harika bir doğum günü partisine davet edildiniz. Kendiniz ve ev sahibi dahil olmak üzere ${hnd}{hnd|5|3,15,1} insanlar mevcut. 

Akşamları, konuklar ayrılmaya hazırlanırken, herkes diğer herkesle el sıkışır. Toplamda kaç el sıkışma var? 

El sıkışmalarını bir grafik kullanarak temsil edebiliriz: her insan [[bir köşe noktasıdır | bir kenar]] ve her el sıkışma [[bir kenar | bir tepe noktası]] . 

{.reveal(when='blank-0 blank-1')} Şimdi grafikteki kenar sayısını saymak kolaydır. Orada buluyoruz ${hnd} insanlar var ${hnd*(hnd-1)/2} tokalaşma. 

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

Büyük grafiklerde tüm kenarları saymak yerine, _herhangi bir_ sayıda konuk için sonucu bize bildiren basit bir formül bulmaya çalışabiliriz. 

Her biri ${n}{n|5|2,8,1} partide insanlar ile el sallar ${n-1} diğerleri. Bu yapar ${n} x ${n-1} = ${n×(n-1)} toplam el sıkışma. _N_ kişi için, el sıkışma sayısı [[`n×(n–1)`|`n×(n+1)`|`n^2`]] . 

    p.var(:html="handshakeTable(n)")
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

Ne yazık ki bu cevap pek doğru değil. Nasıl olduğunu fark et [üst satırdaki ilk iki giriş](->.handshakes_tr:first-child_td:first-child,_.handshakes_tr:first-child_td:nth-child(2)) aslında aynı, sadece çevrilmiş. 

Aslında, her el sıkışmasını [[iki kez]] saydık [[| bir Zamanlar | üç kez]] , _{span.reveal(when="blank-0")} ilgili iki kişinin her biri için bir kez. Bu, doğru el sıkışma sayısının ${n}{n|5|2,25,1} misafir `(var("n") × var("n-1"))/2 = var("n*(n-1)/2")` ._ 

---
> id: handshakes-3

El sıkışma grafikleri özeldir çünkü her tepe noktası diğer tepe noktalarına bağlıdır. Bu özelliğe sahip __grafiklere tam grafik__ denir. 4 köşeli tüm grafik genellikle şu şekilde kısaltılır: `K_4` , 5 köşeli tüm grafik olarak bilinir `K_5` , ve bunun gibi. 

Az önce `n` köşe, `K_n` , vardır `(n × (n-1))/2` kenarları. 

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

Farklı bir günde, için bir hızlı tanışma etkinliğine davet edildiniz ${m}{m|5|2,8,1} erkekler ve ${f}{f|4|2,8,1} kızlar. Birçok küçük masa var ve her oğlan her bir kız ile 5 dakika geçiriyor. Toplamda kaç tane “tarih” var? 

::: column.grow

Bu durumda, karşılık gelen grafik iki ayrı köşe kümesinden oluşur. Her köşe [[tam tersi]] tüm köşelere bağlanır [[| kendi]] seti, ama [[kendi başına]] köşe noktaları yok [[| karşı]] küme. Bu düzene sahip __grafiklere iki taraflı grafikler__ denir. 

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")} _X_ ve _y_ boyutlarında iki takım içeren iki taraflı grafik genellikle şu şekilde yazılır: `K_"x,y"` . Vardır [[`x×y`|`x+y`|`2x–y`]] kenarları, _{span.reveal(when="blank-2")} yani yukarıdaki örnekte ${m} x ${f} = ${m×f} tarih._ 

---
> id: utilities
> goals: try-three-times
> section: planar-graphs
> translated: auto

## Düzlemsel Grafikler 

::: column.grow

İşte grafik teorisi ile ilgili başka bir bulmaca. 

Küçük bir köyde su, elektrik ve gaz üreten üç ev ve üç tesis vardır. Kursların her birini yardımcı tesislerin her birine bağlamamız gerekiyor, ancak köyün düzeni nedeniyle, farklı boru ve kabloların geçmesine izin verilmiyor. 

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Evlerin her birini, herhangi bir hattınız kesişmeden aşağıdaki yardımcı şirketlere bağlamaya çalışın: 

    .box.no-padding
      include svg/utilities.svg
      button.btn Clear

---
> id: utilities-1

Tıpkı Königsberg köprülerinde olduğu gibi, bu sorunun da imkansız olduğunu çabucak keşfediyorsunuz. Bazı grafikler üst üste binen kenarlar olmadan çizilebilir - buna __düzlemsel grafikler__ denir - ancak diğerleri çizilemez. 

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_3` düzlemseldir. 

::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_4` [[düzlemsel | düzlemsel değil]] . 

::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center}`K_5` [[düzlemsel değil | düzlemseldir]] . 

:::

---
> id: utilities-2

[Grafiğin tamamı](gloss:complete-graph) `K_5` düzlemsel olmayan en küçük grafiktir. İçeren tüm diğer grafikler `K_5` bir şekilde bir alt-tabaka da düzlemsel değildir. Bu içerir `K_6` , `K_7` ve daha büyük tam grafikler. 

Üç yardımcı program bulmacasındaki [grafik iki taraflı grafiktir](gloss:bipartite-graph) `K_"3,3"` . Herhangi bir düzlemsel olmayan grafiğin bir `K_5` veya bir `K_"3,3"` (veya bu iki grafiğin bir [alt bölümü](gloss:subdivision) ) bir alt grafik olarak. Buna _Kuratowski teoremi_ denir. 

---
> id: planarity
> goals: planarity

::: .box.f-blue

#### Düzlemsellik 

    x-solved
    svg#planarity(viewBox="0 0 720 360")

Bu düzlemsel bir grafik, ancak ${n}{n|7|5,20,1} köşeler karıştırıldı. Köşeleri, kenarların hiçbiri çakışmayacak şekilde yeniden düzenleyin. 

    p.btn-row: button.btn New Random Graph

:::

---
> id: euler

### Euler Formülü 

Tüm düzlemsel grafikler, çizildikleri düzlemi __yüz__ adı verilen bir dizi alana bölerler. 

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] Köşebent  
[[5]] Yüz  
[[10]] Kenar  
_{span.euler-sum} 11 Noktalar + Yüzler_ 

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] Tepe Noktaları  
[[7]] Yüz  
[[14]] Kenar  
_{span.euler-sum} 15 Tepe Noktası + Yüzler_ 

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] Tepe Noktası  
[[13]] Yüzler  
[[24]] Kenar  
_{span.euler-sum} 25 Tepe Noktası + Yüzler_ 

:::

---
> id: euler-1

Bu sayıları karşılaştırırken, kenar sayısının her zaman [[bir daha az]] olduğunu göreceksiniz. [[| Daha büyük |]] yüz sayısı artı köşe sayısı ile [[aynıdır]] . Diğer bir deyişle, _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + 1. Bu sonuca __Euler denklemi__ denir ve adını Königsberg Bridges problemini çözen aynı [matematikçiden alır](bio:euler) . 

Ne yazık ki, sonsuz sayıda grafik var ve Euler denkleminin işe yarayıp yaramadığını görmek için her birini kontrol edemiyoruz. Bunun yerine, herhangi bir grafik için işe yarayan basit bir [kanıt](gloss:proof) bulmaya çalışabiliriz… 

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
    
        .euler-table
          table.grid.table-small
            tr
              td: strong.blue.i F
              td: strong.green.i V
              td: strong.red.i E
            tr
              td.xf 0
              td.xv 1
              td.xe 0
          p.no-voice #[strong.blue.xf 0] + #[strong.green.xv 1] &nbsp;=&nbsp; #[strong.red.xe 0] + 1
    
      .legend(slot="legend") The simplest graph consists of a single vertex. We can easily check that Euler’s equation works.
      .legend(slot="legend") Let us add a new vertex to our graph. We also have to add an edge, and Euler’s equation still works.
      .legend(slot="legend") If we want to add a third vertex to the graph we have two possibilities. We could create a small triangle: this adds one vertex, one face and two edges, so Euler’s equation still works.
      .legend(slot="legend") Instead we could simply extend the line by one: this adds one vertex and one edge, and Euler’s equation works.
      .legend(slot="legend") Let’s keep going: if we now create a quadrilateral we add one vertex, two edges and one face. Euler’s equation still works.

---
> id: euler-3

Herhangi bir (sonlu) grafik, bir tepe noktasıyla başlayıp tek tek daha fazla köşe ekleyerek oluşturulabilir. Yeni köşeler eklesek de Euler denkleminin geçerli olduğunu gösterdik. Bu nedenle tüm grafikler için geçerlidir. 

Kullandığımız sürece __matematiksel tümevarım__ denir. Sadece en basit durumdan başlayarak ve daha karmaşık vakalar oluştururken sonucun her adımda geçerli olduğunu göstererek, sonsuz sayıda vakada sonuçları kanıtlamak için çok yararlı bir tekniktir. 

    .svg-block: include svg/dominoes.svg

---
> id: euler-4

Bir çok düzlemsel grafikleri [polyhedra](gloss:polyhedron) ağları, [poligon](gloss:polygon) yüzeye üç boyutlu şekiller, çok benzer. Çokyüzlüyü elastik bantlardan yapılmış olarak düşünürsek, düz, düzlemsel grafikler olana kadar onları uzatarak hayal edebiliriz: 

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---
> id: euler-5

Bu, Euler formülünü sadece düzlemsel grafikler için değil, aynı zamanda tüm polihedra için de kullanabileceğimiz anlamına gelir - küçük bir fark. Polihedra grafiklere dönüştürülürken, yüzlerden biri kaybolur: polihedranın en üst yüzü “dış” olur; grafikleri. 

Başka bir deyişle, __{.red} kenarlar__ , __{.blue} yüzler__ ve __{.green}__ _Herhangi bir_ polihedronun __köşeleri__ , _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + [[2]] . 

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __ikosahedron__  
__{.blue} 20__ Yüz  
__{.green} 12__ Tepe Noktası  
__{.red} 30__ Kenar 

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Rhombicosidodecahedron__  
__{.blue} 62__ Yüzler  
__{.green} 60__ Tepe Noktası  
__{.red} 120__ Kenar 

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __Kesik İkosahedron__  
__{.blue} 32__ Yüz (12 siyah, 20 beyaz)  
__{.green} 60__ Tepe Noktası  
__{.red} 90__ Kenar 

:::

---
> id: maps
> section: map-colouring
> translated: auto

## Harita Boyama 

::: column.grow

Belli haritalarla grafik teorisini zaten kullandık. Uzaklaştıkça, bireysel yollar ve köprüler kayboluyor ve bunun yerine tüm ülkelerin ana hatlarını görüyoruz. 

Bir haritayı - veya farklı bölgelerden oluşan başka bir çizimi - renklendirirken, bitişik ülkeler aynı renge sahip olamaz. Mümkün olduğunca az farklı renk kullanmak da isteyebiliriz. 

Bir satranç tahtası gibi bazı basit “haritalar” sadece iki renge (siyah beyaz) ihtiyaç duyar, ancak çoğu karmaşık harita daha fazlasına ihtiyaç duyar. 

::: column(width=240 style="margin-top: -10px")

    x-img.shifted(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

ABD eyaletlerinin haritasını renklendirirken, 50 renk yeterlidir, ancak çok daha azı gereklidir. Aşağıdaki haritaları olabildiğince az renkle boyamayı deneyin: 

    .four-colour-icons
      for i in [1, 2, 3, 4, 5, 6, 7]
        .four-colour-icon(tabindex=0)
    
    x-tabbox.four-colours.full-width
      .tab
        h3 United States #[span.check(when="map-0")]
        x-solved
        .colour-count(style="margin-bottom: -32px") #[span 0] colours used
        include svg/colours-1.svg
        button.btn.clear Clear
        // Note that states or countries which only share a corner are allowed to have the same colour.
        // Alaska and Hawaii are isolated from all of the other states and can have any colour.
      .tab
        h3 South America #[span.check(when="map-1")]
        x-solved
        .colour-count #[span 0] colours used
        include svg/colours-2.svg
        button.btn.clear Clear
      .tab
        h3 Germany #[span.check(when="map-2")]
        x-solved
        .colour-count #[span 0] colours used
        include svg/colours-3.svg
        button.btn.clear Clear
      .tab
        h3 England #[span.check(when="map-3")]
        x-solved
        .colour-count #[span 0] colours used
        include svg/colours-4.svg
        button.btn.clear Clear

---
> id: maps-2
> title: The Four Colour Theorem

::: column.grow

Bu haritaların hepsi sadece dört farklı renkle renklendirilebilir, ancak diğer çok karmaşık haritaların daha fazla renge ihtiyacı olabileceğini hayal etmek zor değildir. Aslında, bazı haritaların hepsi birbirine bağlı dört ülke içerdiğinde __en az__ dört renge ihtiyaç duyar. 

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Daha önce olduğu gibi, ülkeleri ve sınırları olan bir haritayı düzlemsel bir grafiğe dönüştürebiliriz: her ülke [[bir tepe noktası]] haline gelir [[| kenar | bir yüz]] ve [[bir sınırı paylaşan]] ülkeler [[| aynı renk]] bir kenarla bağlanır: 

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Şimdi bir grafiğin köşelerini renklendirmek istiyoruz ve bir kenarla bağlanırlarsa iki köşenin farklı bir rengi olmalıdır. 

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

1852'de, botanik öğrencisi [Francis Guthrie](bio:guthrie) İngiltere'de bir il haritasına renk vermek zorunda kaldı. Denediği herhangi bir harita için dört rengin yeterli göründüğünü gözlemledi, ancak _tüm_ haritalar için işe yarayan bir kanıt bulamadı. Bu son derece zor bir problem olarak ortaya çıktı ve __dört renk teoremi__ olarak biliniyordu. 

Takip eden 100 yıl boyunca, birçok matematikçi sadece daha sonra bulunacak hatalar için dört renk teoremine “kanıt” yayınladı. Bu geçersiz ispatlardan bazıları o kadar ikna ediciydi ki hataları bulmak 10 yıldan fazla sürdü. 

Uzun bir süre, matematikçiler ya dört rengin yeterli olduğunu kanıtlayamadı ya da dörtten fazla renge ihtiyaç duyan bir harita bulamadılar. 

:::

---
> id: maps-4

[Wolfgang Haken](bio:haken) ve [Kenneth Appel'in](bio:appel) nihayet çözmek için bir bilgisayar kullandıkları 1976'ya kadar dört renk probleminde çok az ilerleme kaydedildi. Her biri toplamda 1000 saatten fazla süren bir bilgisayar tarafından kontrol edilen 1936 özel vakasına sonsuz sayıda olası haritayı indirdiler. 

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

Dört renk teoremi, bilgisayar kullanılarak kanıtlanmış ilk bilinen matematiksel teoremdir, o zamandan beri çok daha yaygın ve daha az tartışmalı hale gelen bir şeydir. Daha hızlı bilgisayarlar ve daha verimli bir algoritma, bugün bir dizüstü bilgisayarda dört renk teoremini birkaç saat içinde kanıtlayabileceğiniz anlamına gelir. 

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Postmark for the Department of Mathematics at the University of<br/>Illinois Urbana-Champaign, where Haken and Appel worked.

---
> id: maps-6

::: column.grow

Dört renk teoremi yalnızca düz bir düzlemde veya bir küre üzerinde ve tüm ülkelerin tek bir alandan oluştuğu haritalar için çalışır. 

Ancak matematikçiler, ülkelerin birden fazla bağlantısız bileşenden oluşabileceği _imparatorluk_ haritalarına ve bir torus (çörek şekli) gibi farklı şekilli gezegenlerdeki haritalara da baktılar. Bu durumlarda dörtten fazla renge ihtiyacınız olabilir ve provalar daha da zorlaşır. 

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption This map on a torus requires seven colours.

:::

---
> id: salesman
> section: travelling-salesman
> translated: auto

## Gezgin Satıcı Sorunu 

::: column.grow(parent="right")

Bir kez daha ağlar ve haritalar hakkında düşünelim. Bir dağıtım hizmetinin ziyaret etmesi gerektiğini düşünün ${tsn}{tsn|8|2,50,1} parsel dağıtmak için farklı şehirler. Bu şehirleri bir grafikteki köşe noktaları olarak düşünebiliriz. Tüm şehirler karayollarıyla birbirine bağlıysa, bu [[tam bir grafiktir | döngü | bipartit grafiği]] , yani <mfrac><mrow>${tsn} × ( ${tsn} - 1)</mrow><mn>2</mn></mfrac> = ${tsn*(tsn-1)/2} toplam kenarlar. 

Dağıtım kamyonu tüm şehirleri herhangi bir sırayla ziyaret etmelidir. Königsberg köprüsü probleminde _her kenardan_ tam olarak bir tane giden yollar bulmak istedik. Şimdi _her köşeyi_ tam olarak bir kez ziyaret eden yollar bulmak istiyoruz. Bu yollara __Hamilton çevrimleri__ denir. 

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

Tam grafiklerde Hamilton döngüleri için sayısız farklı olasılık vardır. Aslında, herhangi bir tepe noktasını başlangıç tepe noktası olarak seçebilir ve ardından kalan şehirlerden herhangi birini herhangi bir sırayla seçebiliriz: 

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---
> id: salesman-2

İle bir grafikte ${tsn1}{tsn1|4|2,10,1} şehirlerde, her Hamilton döngüsünde ${tsn1} şehirler. Şimdi, 

    ul.var(:html="tsmString(tsn1)")

Bu, toplamda, ${tsnPaths(tsn1)} olası yollar. Bu ürün için bir kısayol ${tsn1} ! veya ${tsn1} __Faktöriyel__ . 

Başka bir şehirden geçmeden doğrudan iki şehir arasında seyahat etmenin mümkün olmayabileceğini hayal edebilirsiniz. Bu durumda artık tam bir grafiğe sahip değiliz ve eğer varsa, Hamilton döngülerinin sayısını bulmak çok daha zor hale geliyor. 

---
> id: salesman-3

::: column.grow(parent="right")

Şimdiye kadar bazı şehirlerin diğerlerinden daha uzak olabileceği gerçeğini görmezden geldik. Bununla birlikte, gerçek hayatta bu çok önemli bir husustur: sadece _bir_ yol bulmak istemiyoruz, aynı zamanda en kısa yolu bulmak istiyoruz. Buna __Gezgin Satıcı Sorunu__ denir. Sadece nakliye ve lojistikte değil, aynı zamanda transistörleri mikroçiplere yerleştirirken, daha hızlı bilgisayarlar yapmak için veya [DNA'nın](gloss:dna) yapısını analiz ederken de çözülmelidir. 

Basit bir yöntem, olası tüm yolları denemek, her birinin uzunluğunu bulmak ve sonra en kısa olanı seçmek olacaktır. Ancak, bunu ${tsn2}{tsn2|10|2,20,1} şehirler var ${tsn2} ! = ${factorial(tsn2)} olası yollar. Yüzlerce veya binlerce köşe noktasına sahip olduğunuzda, güçlü bilgisayarlar kullanarak bile tüm olası yolları denemek imkansız hale gelir. 

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4
> goals: move

Maalesef, seyahat eden satıcı problemini çözmek için daha etkili bir algoritma yoktur. Bunun yerine, matematikçiler ve bilgisayar bilimcileri, en iyisi olmasalar bile, _iyi_ çözümler bulan çeşitli algoritmalar geliştirdiler. Sadece yaklaşık çözümler veren bu algoritmalara __Sezgisel__ denir. 

Bu haritadaki şehirleri yeniden düzenlemeyi deneyin ve aralarındaki en kısa yolun nasıl değiştiğini izleyin. Şehirlere dokunarak onları kaldırabilir ve haritada herhangi bir yeri tıklayarak (8'e kadar) şehirler ekleyebilirsiniz: 

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---
> id: salesman-5

::: column.grow

__Açgözlü Algoritma__ (veya En Yakın Komşu Algoritması) çok basittir: rastgele bir şehirde başlarsınız ve art arda daha önce ziyaret etmediğiniz en yakın şehre taşınırsınız. Tüm şehirleri ziyaret ettikten sonra durursunuz. 

::: column(width=300)

{.todo} Animasyon çok yakında… 

:::

Açgözlü algoritmayı kullanarak bulunan yolların ortalama olarak mümkün olan en kısa yoldan% 25 daha uzun olduğunu gösterebilirsiniz. 

---
> id: salesman-6

::: column.grow

__2-Opt Algoritması__ rastgele olası bir yolla başlar. Sonra tekrar tekrar iki kenar seçin ve yolun uzunluğunu azaltacaksa onları takas edin. Herhangi bir kenar çiftini değiştirerek uzunluğu daha fazla azaltamayacağınız zaman durursunuz. 

::: column(width=300)

{.todo} Animasyon çok yakında… 

:::

---
> id: ants

Bilgisayarların var olmasından çok önce, Doğa'nın farklı konumlar arasında en uygun yolları bulmanın akıllı bir yolunu bulduğu ortaya çıktı: karınca kolonileri. 

    x-parallax.full-width(background="images/ants.jpg")

Karıncalar yuvaları ile olası gıda kaynakları arasında mümkün olan en kısa yolları bulmak ister. İzleri boyunca bıraktıkları ve diğer karıncaların takip edebileceği kimyasallar aracılığıyla birbirleriyle iletişim kurabilirler. 

---
> id: ants-1

::: column.grow

* Karınca kolonisi başlangıçta rastgele yönlere giden birçok izci gönderir. Yiyecek bulduklarında, bir feromon izi bırakarak geri dönerler. * Diğer karıncalar bulduklarında bir yolu takip etme eğilimindedir ve bu da onları yeme yönlendirir. Dönüş yolculuğunda daha fazla feromon biriktirir, böylece izi güçlendirir. * Zamanla feromon buharlaşır. Bir yol ne kadar uzun olursa, karıncalar boyunca seyahat etmek o kadar zaman alır ve bu nedenle feromonun buharlaşması için daha fazla zaman olur. Öte yandan, kısa yollar daha hızlı bir şekilde güçlendirilebilir, böylece güçleri daha hızlı artar. 

::: column(width=240)

{.todo} Diyagram çok yakında… 

:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Karınca Kolonisi Sistemi (ACS) algoritmaları, bu davranışı birçok "sanal" karınca kullanarak bilgisayarlarda kopyalamaya çalışır. Seyahat eden satıcı sorunu için hızlı bir şekilde çok iyi çözümler bulabilirler. 

ACS algoritmalarının özellikle kullanışlı bir özelliği, sürekli olarak çalışabilmeleri ve grafikteki değişikliklere gerçek zamanlı olarak uyarlanabilmeleridir. Bu değişikliklere, trafik kazaları ve sokak ağlarındaki yol kapanmaları veya bilgisayar ağlarındaki web sunucularına yönelik trafik artışları neden olabilir. 

:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

Gezgin Satıcı problemi [NP-zordur](gloss:np) , yani bilgisayarlar (en azından çok sayıda şehir için) tarafından çözülmesi çok zordur. 

Hızlı ve kesin bir algoritma bulmanın bilgisayar bilimi alanında ciddi etkileri olacaktır: bu, NP zorluğu olan _tüm_ problemler için hızlı algoritmalar olduğu anlamına gelir. Ayrıca, İnternet güvenliğinin çoğunu işe yaramaz hale getirir, bu da bazı sorunların bilgisayarlar için çok zor olduğuna inanılır. 

Gezgin Satıcı problemini çözmek için hızlı bir algoritma bulmak, matematik ve bilgisayar bilimlerindeki en ünlü açık problemlerden birini, __P vs NP__ problemini de çözecektir. Her biri 1 milyon dolar ödül alan yedi [Milenyum Ödül Probleminden](gloss:millennium-prize) biridir. 

:::

---
> section: scheduling
> sectionStatus: dev

## Zamanlama Sorunları 

{.todo} Çok yakında 

---
> id: applications
> section: applications
> translated: auto

## Günlük Yaşamda Grafikler 

Önceki bölümlerde grafik teorisinin birçok farklı uygulamasını gördük, ancak bazıları biraz karışıktı. Bununla birlikte, grafikler günlük yaşamdaki birçok nesne, kavram ve sürecin temelini oluşturmaktadır. 

::: column.grow

Örneğin İnternet, geniş, sanal bir grafiktir. Her köşe tek bir web sayfasıdır ve her kenar iki sayfa arasında bir köprü olduğu anlamına gelir. Bağlantıların yalnızca tek yönlü olduğunu unutmayın, bu nedenle bu grafik [[yönlendirilir | çok hatlı | aracılığı]] ve bu grafik _çok, daha büyüktür._ 

 Wikipedia veya Facebook gibi bazı web sitelerinde çok sayıda gelen bağlantı bulunurken, birçok küçük web sitesinde çok az gelen bağlantı olabilir. Bu, Google'ın arama sonuçlarını sıralamak için kullandığı temel kavramdır. 

::: column(width=240)

    img(credit="© Various" src="images/websites.png" width=240 height=240)

:::

---
> id: applications-1

Daha fazla gelen bağlantı içeren web siteleri daha yüksek kalitede olma eğilimindedir ve arama sonuçlarının üstünde gösterilmelidir. Örneğin, “Londra” yı ararken, Londra'daki küçük mağazalardan veya Londra'da yaşayan kişilerin bloglarından önce resmi turistik bilgi siteleri gösterilir. Grafik teorisinden gelen bu basit fikir, __Sayfa Sıralaması Algoritması__ , Google'ı diğer erken arama motorlarından önemli ölçüde daha iyi hale getirdi. 

---
> id: applications-2

İnternet, insanlık tarafından şimdiye kadar oluşturulan en büyük ağdır. Bu görüntü, İnternet'e bağlı tüm sunucuların çok küçük bir bölümünü göstermektedir: 

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

Web siteleri ve köprüler _sanal bir_ grafik oluştururken, bilgisayarların, sunucuların, yönlendiricilerin, telefon hatlarının ve kabloların _fiziksel_ ağı da vardır. 

::: column.grow(parent="right")

Her telefon görüşmesi yaptığınızda veya bir web sitesi yüklediğinizde, şebeke operatörleri, herhangi bir kablo veya bağlantının kapasitesini aşmadan, göndereni ve alıcıyı bağlamanın bir yolunu bulmak zorundadır. Grafik teorisi ve olasılığı, örneğin belirli bir bağlantı meşgul olduğunda sapmalar bularak güvenilir bir hizmetin garanti edilmesini mümkün kılar. 

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

Grafikler ayrıca ulaşım ve navigasyonda da önemli bir rol oynamaktadır. Tüm uçuş, tren ve metro ağları, verimli programlar oluştururken kullanılabilecek grafikler oluşturur. En tanınmış grafiklerden biri Londra Metrosu haritası: 

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow

Tüm yollar ve otoyollar ayrıca, verilen iki nokta arasındaki en kısa rota üzerinde çalışırken Google Haritalar gibi navigasyon hizmetleri tarafından kullanılan büyük bir ağ oluşturur. 

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

Gelecekte, __Akıllı Ulaşım Sistemleri__ , akıllı telefonlardan ve kendi kendini süren araçlardan toplanan konum verilerini kullanarak arabaları daha verimli bir şekilde yönlendirerek tıkanıklığı ve kazaları azaltacaktır. Bu, her yıl yolda milyonlarca saat kaybını önleyebilir, kirliliği önemli ölçüde azaltabilir ve acil servislerin daha hızlı seyahat etmesini sağlayabilir. 

:::

---
> id: applications-6

Bu görüntü, Kuzey Avrupa'daki ticari havayolu uçuşları ağını göstermektedir. 

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

Bilim, mühendislik veya günlük yaşamda sayısız grafik var: 

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} __Moleküllerdeki__ atomlar ve kristal ızgaralar arasındaki bağlantılar bir grafik oluşturur. 

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} __Hastalıkların__ ve salgın __hastalıkların yayılması__ bir ağ kullanılarak modellenebilir. 

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} Biyolojide, türlerin soyunu gösteren __evrim ağaçları__ bir grafik oluşturur. 

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} __Elektrik devrelerinin__ ve bilgisayar çiplerinin farklı bileşenleri bir ağ oluşturur. 

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} __Dillerin__ dilbilgisel yapısı, örneğin çeviri algoritmaları oluşturmak için grafikler kullanılarak modellenebilir. 

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Grafiklerin __olasılık__ , __oyun teorisi__ ve __finansal matematik alanlarında__ da birçok uygulaması vardır. 

:::

---
> id: social

### Sosyal ağlar 

Son olarak, günlük hayatta var olan grafiklerin özellikle iyi bir örneğini düşünelim: sosyal medya. Burada köşeler [[insanları]] temsil eder [[| Arkadaşlar | ağlar]] ve kenarlar arkadaşlıkları, beğenileri, abonelikleri veya takipçileri temsil eder. 

Sosyal medya grafikleri çizdiğimizde, aynı okula gitmiş veya aynı şehirde yaşayan bazı karşılıklı arkadaş __kümeleri__ görebiliriz. Ayrıca, bir tepe noktasının ne kadar iyi bağlandığına bağlı olan ve bir kişinin sosyal medyadaki popülaritesinin bir ölçüsü olabilecek insanların __merkeziliğini__ belirleyebiliriz. 

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow

2014 yılında Facebook'un 1,4 milyar aktif kullanıcısı ve toplam 200 milyardan fazla arkadaşı vardı. Tüm Facebook kullanıcılarının yarısının 200'den fazla arkadaşı var ve arkadaşlarımızın çoğunun benzer sayıda arkadaşı olduğundan, on binlerce _arkadaşımız_ kolayca olabilir. 

Heyecan verici bir soru şu olurdu: İki rastgele Facebook kullanıcısı seçerseniz, birinden diğerine geçmek için kaç “arkadaşlık kenarı” takip etmeniz gerekir? Örneğin, arkadaşlar arasındaki mesafe [[1]] , arkadaşların arkadaşları arasındaki mesafe [[2'dir]] . 

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

2016 yılında Facebook, kullanıcılarının birbirine nasıl bağlandığını belirlemek için [bir çalışma yaptı](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/) . Ortalama olarak, Facebook'ta en fazla 3.57 kişi aracılığıyla _başka birine_ bağlı olduğunuzu buldular. Ve buna ünlüler, politikacılar ve hatta telif dahildir! 

Başka bir deyişle, dünyanın her yerinden milyarlarca Facebook kullanıcısından birini seçerseniz, muhtemelen arkadaşlarınızdan birinin arkadaşını tanıyan bir arkadaşınızın arkadaşı olacaktır. 3,57 __derece ayrılma__ olduğunu söylüyoruz. 

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---
> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

1929'da, Macar yazar [Frigyes Karinthy](bio:karinthy) ilk olarak “altı derecelik Ayrılık” fikrini önerdiğinde, internet ya da sosyal medya yoktu, ancak dünya zaten daha fazla birbirine bağlı hale gelmişti. 

1967'de [Stanley Milgram](bio:milgram) , Nebraska ve Kansas'ta yaşayan 296 katılımcıdan Boston, Massachusetts'te yaşayan belirli bir kişiye mektup göndermesinin istendiği ilk deneysel deneyi gerçekleştirdi. Hepsi mektubu göndermek için bir arkadaş seçmek zorunda kaldılar, sonra başka bir arkadaş seçtiler. Her adımda mektup Boston'a yaklaştı. Milgram, ortalama olarak sadece 5.2 ara arkadaş olduğunu - 5.2 derece ayrılma olduğunu buldu. 

:::

Bugün, hepimiz sosyal etkileşimlerimizin, seyahatimizin, İnternet ve teknolojimizin, bilimin ve çok daha fazlasının altında yatan sayısız görünmez grafiğin bir parçasıyız.
