# Çizgeler ve Ağlar

## Giriş

> id: intro-0
> section: introduction

Her gün sayısız bağ ve ağ ile çevriliyizdir: araba ve tren yolları, telefon hatları, internet, elektrik devreleri ve hatta moleküler bağlar. Ayrıca arkadaşlar ve aileler arasındaki _sosyal ağlar_ da var.

::: column(width=220 parent="padded-thin")

    x-img(src="images/network1.jpg" width=220 height=220 lightbox)

{.caption} Yollar ve Demir Ağları

::: column(width=220)

    x-img(src="images/network6.jpg" width=220 height=220 lightbox)

{.caption} Elektrik Devreleri

::: column(width=220)

    x-img(src="images/network3.jpg" width=220 height=220 lightbox)

{.caption} Ulaşım Ağları

::: column(width=220)

    x-img(src="images/network2.jpg" width=220 height=220 lightbox)

{.caption} Arkadaşlıklar

::: column(width=220)

    x-img(src="images/network7.jpg" width=220 height=220 lightbox)

{.caption} Sinir Ağları

::: column(width=220)

    x-img(src="images/network4.jpg" width=220 height=220 lightbox)

{.caption} İnternet

:::

---
> id: intro

::: column.grow

Bütün bu sistemler kimileri [[çizgiler|sınırlar|çiftler]] ile birbirine bağlanmış [[noktalar|çemberler|çarpılar]] adındaki belli _noktalardan_ oluşur. Matematikte buna bir [__çizge__](gloss:graph) denir.

__Çizgeler teorisi__ çizgeleri ve özelliklerini inceleyen dalın adıdır. Matematiğin en heyecanlı ve en görsel alanlarından birisidir, sayılamayacak çoklukta önemli uygulamaları vardır:

::: column(width=180)

    svg#graph0.graph.novertices.noedges(width=180 height=180)

:::

---
> id: intro-1

Basit çizgelerin yapılarını çemberler ve çizgiler kullanarak çizebiliriz. Çemberlerin yerinin ve çizgilerin uzunluğunun bir önemi yok, sadece çemberlerin birbirleri ile _nasıl bağlı_ oldukları önemli bizim için. Hatta çizgilerin düz olmasına da gerek yok, ve birbirlerinin üzerinden geçebilirler.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Kimi çizgelerde çizgiler tek yönlü olurlar. Bunlara [__yönlü çizgeler__](gloss:directed-graph) diyoruz.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Kimi çizgeler birbiriyle bağlantısı olmayan çeşitli parçalardan oluşur. Bunlara __bağlantısız__ diyoruz.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Kimi çizgelerse aynı iki nokta arasında birden çok çizgiye sahiptirler, ya da kimi noktalar kendilerine bağlıdırlar (ilmekler).

:::

    // TODO maybe include examples of graphs with edges crossing, curved edges, etc.
    // could include an "is this a graph?" quiz

---
> id: intro-2

Elimizde bir çizge varsa, kimi noktaları ya da çizgileri silerek yeni bir çizge elde edebiliriz. Böyle yaparak elde edeceğimiz çizgelere [__altçizge__](gloss:subgraph) denir. İşte bir kaç çizge ve altçizge örneği:

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

Bir çizgenin [__derecesi__](gloss:graph-order) nokta sayısıdır. Bir çizgedeki bir noktanın [__derecesi__](gloss:graph-degree) ise o noktada birleşen çizgilerin sayısıdır.

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Order: [[5]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Order: [[8]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Degree: [[3]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Degree: [[6]]

:::

---
> id: intro-4

Noktaların tek bir halka oluşturduğu çizgelere [__döngü__](gloss:graph-cycle) denir. Bütün döngüler [[aynı sayıda çizgi ve noktaya|noktalardan daha çok çizgiye|noktalardan daha az çizgiye]] sahiptir.

    .row
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')

{.reveal(when="blank-0")} Bu yeni tanımlarla beraber çizgelerin bazı büyüleyici özelliklerini ve uygulamalarını inceleyelim.

---
> id: bridges-0
> title: The Bridges of Königsberg
> section: bridges

## Königsberg Köprüleri

::: column.grow

Çizgeler ve ağlar hakkında ilk defa düşünen matematikçilerden birisi [Leonhard
Euler](bio:euler)di. Euler Baltık denizinin yakınlarındaki Königsberg kasabasıyla ilgili eski bir problem üzerinde düşünüyordu.

Pregel nehri Königsberg’i dört parçaya ayırır, ve bu parçaları bağlayan yedi köprü vardır. Her köprüden tam olarak bir kez geçerek şehri dolaşmak mümkün mü? (Yola istediğiniz yerden başlayıp istediğiniz yerde bitirebilirsiniz, aynı yerden başlayıp bitirmeniz şart değil.)

Bu haritalar üzerinde çizerek böyle bir yol bulmaya çalışabilirsiniz:

::: column(width=250)

    img.shifted(src="images/konigsberg1.jpg" width=250 height=350)

:::

---
> id: bridges
> goals: bridge-0 bridge-1 bridge-2 bridge-3
> title: The Bridges of Königsberg

    x-tabbox.full-width
      .tab
        h3 Harita 1#[span.check.incorrect(when="bridge-0")]
        x-solved
        include svg/bridges-1.svg
        button.btn Temizle
        button.btn.right Geç
      .tab
        h3 Harita 2#[span.check(when="bridge-1")]
        x-solved
        include svg/bridges-2.svg
        button.btn Temizle
        button.btn.right Geç
      .tab
        h3 Harita 3#[span.check(when="bridge-2")]
        x-solved
        include svg/bridges-3.svg
        button.btn Temizle
        button.btn.right Geç
      .tab
        h3 Harita 4 #[span.check.incorrect(when="bridge-3")]
        x-solved
        include svg/bridges-4.svg
        button.btn Temizle
        button.btn.right Geç

---
> id: bridges-1

Köningsberg için böyle bir yol bulmak imkansız gibi görünüyor, ancak başka şehirler için mümkün olabilir. Euler çizgeler kuramını kullanarak herhangi bir şehir için çalışan basit bir kural bulmayı başardı, böylece bir sürü deneme yapmaya gerek kalmıyordu. 

::: column.grow

Öncelikle şehir haritalarını noktaları ve çizgileri olan çizgelere çevirmemiz gerek. Bu çizgede her ada ya da kara parçası bir [[nokta|çizgi|alan]] ile ve her köprü bir [[nokta|çizgi|sokak]] ile gösterilecek.

{.reveal(when="blank-0 blank-1")} Şimdi “bütün köprülerden sadece bir kez geçerek şehri dolaşma” sorusu “bir çizgeyi aynı çizginin üzerinden iki kez geçmeden tek hamlede çizebilir miyiz” sorusuna dönüştü. 
::: column(width=200)

    include svg/konigsberg.svg

:::

---
> id: bridges-2

Kağıt üzerinde bir kaç farklı çizge çizip hangilerinin sürekli bir hamle ile çizilebileceğini görmeye çalışın.

    // p Try drawing these graphs with one continuous stroke:
    // p.todo Interactive coming soon…

---
> id: bridges-3
> goals: size prime eo

Aynı şehir haritalarında olduğu gibi, kimi çizgelerde bu mümkünken kimi çizgelerde değil. Bunun nedenini anlamak için her noktayı [derecesi](gloss:graph-degree) ile numaralayalım:

    figure
      x-select.var.tabs(:bind="colour")
        div(value="val") Değere göre
        div(value="size") Büyüklüğe göre
        div(value="prime") Asallık ve bileşikliğe göre
        div(value="eo") Tek ve çiftliğe göre
      .box
        p.no-voice(style="margin: 0"): strong Bu çizgeler için mümkün:
        include svg/vertex-orders-1.svg
        p.no-voice(style="margin: 1em 0 0"): strong Bu çizgeler için mümkün değil:
        include svg/vertex-orders-2.svg

---
> id: bridges-4

Bu çizgelere ve noktalardaki sayılara baktığımız zaman sanki bir çizgenin [[ikiden fazla “tek” noktası varsa|sadece “çift” noktaları varsa|4’ten büyük numaralı noktası yoksa|tek sayıda noktası varsa|derecesi 3 olan noktası yoksa]] tek seferde çizilebilir gibi görünüyor. Bu koşul çizgedeki sadece tek bir noktaya bakarak açıklanabilir:

::: x-slideshow

    .stage(slot="stage"): include svg/konigsberg-proof.svg

Burada çizgenin tek bir noktasını büyütülmüş olarak görebilirsiniz.

Eğer çizgeyi çizersek sonuçta bu noktaya doğru gelen ve bu noktadan çıkan birer çizgi olmalı. Böylece bu noktada buluşan iki çizgimiz olacak.

Belki bu nokta bir köşe değildir de bir geçişi gösteriyordur. Bu durumda bu noktaya doğru gelen başka bir çizgi daha olacaktır, ve bu noktadan ayrılan bir çizgi. Şimdi dört çizgimiz oldu.

Ve kimi çizgelerde üçüncü bir çizgi çifti daha olabilir. Şimdi altı çizgi var.

Her durumda bir noktada hep çift sayıda çizgi olduğuna dikkat edin.

Buna tek istisna yolun başladığı ve bittiği noktalar olacak – bunların tek sayıda çizgisi olabilir. Eğer başlangıç ve bitiş noktaları aynıysa bütün noktaların çift derecesi olur.

:::

---
> id: bridges-5

::: column.grow(parent="right")

Eğer yeniden Königsberg haritasına dönüp bakarsanız tek sayıda köprü bağlantısı olan ada sayısının ikiden fazla olduğunu görürsünüz. Bu yüzden bütün köprülerden tek bir sefer geçen bir yol olması imkansız, ve Euler de bunu keşfetmişti.

Euler’in keşfi gerçek hayatta işlevsiz gibi görünebilir, ancak çizgeler iki konum arasında yol bulma gibi bir sürü coğrafi problemin temelinde yatar. Bu uygulamalar hakkında daha fazlasını ileride göreceğiz.

::: column(width=240)

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes

## El sıkışma ve Partiler

::: column.grow

Çok büyük bir doğum günü partisine davet edildiniz. Partide siz ve doğum günü sahibi dahil toplam ${hnd}{hnd|5|3,15,1} kişi var.

Akşam partiden ayrılmaya hazırlanırken herkes diğer herkes ile el sıkışıyor. Toplam kaç el sıkışması olur?

El sıkışmaları bir çizge ile gösterebiliriz: her insan bir [[nokta|çizgi]] ve her el sıkışma bir [[çizgi|nokta]].


{.reveal(when='blank-0 blank-1')} Şimdi çizgedeki çizgileri saymak kolay. Partide ${hnd} kişi olduğunu ve toplam ${hnd*(hnd-1)/2} el sıkışma olduğunu görüyoruz.

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

Büyük çizgelerdeki bütün çizgileri saymak yerine, _herhangi_ sayıdaki davetli için bize sonucu verecek basit bir formül bulmaya da çalışabiliriz.

Partideki ${n}{n|5|2,8,1} kişiden her biri diğer ${n-1} kişi ile el sıkışacak. Bu da toplamda ${n} × ${n-1} = ${n×(n-1)} el sıkışması demek. Yani _n_ kişi için el sıkışma sayısı [[_n_ × (_n_ – 1)|_n_ × (_n_ + 1)|_n_<sup>2</sup>]] tanedir.

    p.var(:html="handshakeTable(n)")
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

Ne yazık ki cevabımız tam olarak doğru değil. [en üst satırdaki ilk iki girdi](->.handshakes_tr:first-child_td:first-child,_.handshakes_tr:first-child_td:nth-child(2)) aslında aynı.

Hatta, her el sıkışmasını [[iki|bir|üç]] defa saydık, _{span.reveal(when="blank-0")} el sıkışan iki kişinin her ikisi için birden. Bu da demek oluyor ki ${n}{n|5|2,25,1} davetli için el sıkışma sayısı `(var("n") × var("n-1"))/2 = var("n*(n-1)/2")`._

---
> id: handshakes-3

Bu el sıkışma çizgeleri özeller, çünkü her nokta diğer her noktaya bağlı. Bu özelliğe sahip çizgelere _tam çizge_ denir. 4 noktası olan tam çizgeyi `K_4` olarak, 5 noktası olanı `K_5` olarak gösteririz. 

Yukarıda ‘n’ noktası olan tam çizgenin, yani `K_n`’nin `(n × (n-1))/2` tane çizgisi olduğunu gösterdik.

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

Başka bir gün ise ${m}{m|5|2,8,1} erkeğin ve ${f}{f|4|2,8,1} kızın olduğu bir hızlı tanışma etkinliğine davet edildiniz. Bir sürü küçük masa var ve her erkek her kız ile 5 dakika geçiriyor. Toplam kaç tane diyalog yaşanır?

::: column.grow

Bu duruma karşılık gelen çizgenin iki ayrı nokta kümesi olacak. Her nokta [[diğer kümedeki|kendi kümesindeki]] her nokta ile bağlantılı olacak, ancak [[diğer kümedeki|kendi kümesindeki]] hiç bir nokta ile bağlantılı olmayacak. Bu özelliğe sahip çizgelere _ikili çizge_ denir.

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")} Bir tarafında _x_, bir tarafında _y_ tane nokta olan ikili çizgeleri genelde `K_"x,y"` ile gösteririz. Bunun [[_x_ × _y_|_x_ + _y_|2_x_ – _y_]] tane çizgisi vardır,, _{span.reveal(when="blank-2")} yani yukarıdaki örnekte toplam
${m} × ${f} = ${m×f} diyalog yaşanır._

---
> id: utilities
> goals: try-three-times
> section: planar-graphs

## Düzlemsel Çizgeler

::: column.grow

İşte size çizgelerle ilgili başka bir bulmaca.

Küçük bir kasabada su, elektrik ve gaz üreten üç üretim merkezi var. Ve aynı kasabada hizmet bekleyen üç ev var. Ne yazık ki kasabanın alt yapısından dolayı boruların ve kabloların birbirinin üstünden geçmesine olanak yok.

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Bu üretim merkezlerinin her birini evlerin her biri ile çizgileri kesiştirmeden bağlamaya çalışın:

    .box.no-padding
      include svg/utilities.svg
      button.btn Temizle

---
> id: utilities-1

Daha önceki Königsberg köprüleri gibi bu problemin de imkansız olduğunu çabucak fark edebilirsiniz. Sanki kimi çizgeler düzlemde kesişmeyen çizgiler ile çizilebilirken (bunlara __düzlemsel çizge__ denir) kimileri için bu mümkün değil gibi görünüyor.

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center} `K_3` düzlemsel.

::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center} `K_4` [[düzlemsel|düzlemsel değil]].

::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center} `K_5` [[düzlemsel değil|düzlemsel]].

:::

---
> id: utilities-2

[Tam çizge](gloss:complete-graph) `K_5` düzlemsel olmayan en küçük çizge. `K_5`i bir şekilde alt çizgesi olarak içeren hiç bir çizge de düzlemsel değildir. Bu liste `K_6`, `K_7` ve daha büyük diğer tam çizgeleri de içeriyor.

Yukarıda baktığımız soru `K_"3,3"` [ikili çizgesi](gloss:bipartite-graph) ile ilgili. Biraz çalışarak şunu göstermek mümkün: Düzlemsel olmayan her çizge ya `K_5`i ya `K_"3,3"`ü ya da bunların bir [bölümlenmesini](gloss:subdivision) alt çizge olarak içermek zorunda.

    // TODO Add bio of Kazimierz Kuratowski

---
> id: planarity
> goals: planarity

::: .box.f-blue

#### Düzlemsellik

    x-solved
    svg#planarity(viewBox="0 0 720 360")

Bu düzlemsel bir çizge, ancak  ${n}{n|7|5,20,1} noktası karıştırılmış durumda. Bu noktaları hiç bir çizgi bir diğerine değmeyecek şekilde yeniden sıralayın.

    p.btn-row: button.btn Yeni Rastgele Çizge
    // TODO Maybe mention that the restriction to straight line edges in the Planarity puzzle isn't
    // a restriction that matters (Fáry's Theorem).

:::

---
> id: euler

### Euler Formülü

Bütün çizgeler çizildikleri düzlemi bölgelere ayırırlar, bu bölgelere __yüzler__ denir.

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] Köşe  
[[5]] Yüz  
[[10]] Çizgi  
_{span.euler-sum} 11 Nokta + Yüz_

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] Köşe  
[[7]] Yüz  
[[14]] Çizgi  
_{span.euler-sum} 15 Nokta + Yüz_

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] Köşe  
[[13]] Yüz  
[[24]] Çizgi  
_{span.euler-sum} 25 Nokta + Yüz_

:::

---
> id: euler-1

Bu sayıları karşılaştırırken çizgi sayısının her zaman yüz sayısı artı nokta sayısından [[bir düşük|büyük|aynı]] olduğuna dikkat edin. Başka bir deyişle _{.b.blue}Y_ + _{.b.green}N_ = _{.b.red}Ç_ + 1. Bu sonuca __Euler denklemi__ denir ve adını Köningsberg Köprüsü problemini çözen aynı [matematikçiden](bio:euler) alır.

Ne yazık ki sonsuz sayıda çizge var ve Euler denkleminin çalışıp çalışmadığını görmek için hepsini tek tek kontrol edemeyiz. Ancak onun yerine herhangi bir çizge için çalışacak basit bir [kanıt](gloss:proof) arayabiliriz...

---
> id: euler-2

::: x-slideshow

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
            td: strong.blue.i Y
            td: strong.green.i N
            td: strong.red.i Ç
          tr
            td.xf 0
            td.xv 1
            td.xe 0
        p.no-voice #[strong.blue.xf 0] + #[strong.green.xv 1] &nbsp;=&nbsp; #[strong.red.xe 0] + 1

En basit çizge tek bir noktadan oluşur. Bunun için Euler denkleminin çalıştığını görebiliriz.

Hadi çizgemize yeni bir nokta ekleyelim. Tabi bir çizgi de eklememiz gerek, ve Euler denklemi yine çalışıyor.

Çizgemize üçüncü bir nokta eklemek için iki seçeneğimiz var. Küçük bir üçgen yaratabiliriz:  bu bir nokta, bir yüz ve iki çizgi ekler, yani Euler denklemi hala çalışır.

Ya da sadece doğrumuzu biraz daha uzatabiliriz: Bu bir nokta ve bir çizgi ekler, yani yine Euler denklemi çalışır.

Devam edelim: Eğer bir dörtgen yaparsak bir nokta, iki kenar ve bir yüz ekleriz. Euler denklemi yine çalışır.

:::

---
> id: euler-3

(Sonlu) her çizge tek bir nokta ile başlayıp birer birer noktalar ekleyerek elde edilebilir. Bu noktaları nasıl eklersek ekleyelim Euler denkleminin çalıştığını gösterdik. Yani her çizge için doğru.

Kanıt için kullandığımız bu yöntemin adı __matematiksel tümevarım__. Bir önermeyi sonsuz durum için göstermekte çok faydalı. En basit durum için başlarız, sonra daha karmaşık durumları inşa ederken attığımız her adımda doğru kaldığını gösteririz.

    .svg-block: include svg/dominoes.svg

---
> id: euler-4

Çizgelerin çoğu [çokyüzlülerin](gloss:polyhedron) ağlarına benzer, [çokgen](gloss:polygon) yüzlere sahip üç boyutlu şekillere. Eğer çokyüzlülerin elastik bantlardan yapıldığını düşünürsek onları düz olana kadar bastırıp düz hale geldiklerini, düzlemsel çizgeye dönüştüklerini hayal edebiliriz:

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---
> id: euler-5

Bu durumda Euler formülünü sadece düzlemsel çizgeler için değil, bütün çokyüzlüler için kullanabiliriz, sadece tek bir farkla. Çokyüzlüleri çizgeye çevirirken bir yüz yok olur: çokyüzlünün en üstteki yüzü çizgenin “dışı” haline gelir.

Başka bir deyişle herhangi bir çokyüzlünün __{.red}çizgi__, __{.blue}yüz__ ve
__{.green}nokta__ sayısını sayarsak _{.b.blue}Y_ + _{.b.green}N_ = _{.b.red}Ç_ + [[2]] buluruz.

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __Onikiyüzlü__  
__{.blue}20__ Yüz  
__{.green}12__ Nokta  
__{.red}30__ Çizgi

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Rombikosidodecahedron__  
__{.blue}62__ Yüz  
__{.green}60__ Nokta  
__{.red}120__ Çizgi

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __Kırpılmış Onikiyüzlü__  
__{.blue}32__ Yüz (12 siyah, 20 beyaz)  
__{.green}60__ Nokta  
__{.red}90__ Çizgi

:::

---
> id: maps
> section: map-colouring

## Harita Boyama

::: column.grow

Kimi haritalar için daha önce çizgelerden yararlandık. Daha yukarıdan baktıkça tek tek yollar ve köprüler kaybolur, onun yerine ülkelerin sınırlarını görmeye başlarız.

Bir haritayı ya da farklı bölgelerden oluşan bir çizimi renklendirirken komşu bölgeler için aynı rengi kullanamayız. Ayrıca olabildiğince az renk de kullanmak isteyebiliriz.

Satranç tahtası gibi kimi basit “haritalar” için sadece iki renk gerekir (siyah ve beyaz), ancak daha karmaşık haritalar için daha çok renge ihtiyaç duyarız.

::: column(width=240 style="margin-top: -10px")

    x-img(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

ABD’nin eyaletlerini boyarken 50 renk fazlasıyla yeterli olacaktır, ancak çok daha azı da yetebilir. Aşağıdaki haritayı olabildiğince az renk kullanarak boyamaya çalışın.

    .four-colour-icons
      for i in [1, 2, 3, 4, 5, 6, 7]
        .four-colour-icon(tabindex=0)

    x-tabbox.four-colours.full-width
      .tab
        h3 Amerika Birleşik Devletleri #[span.check(when="map-0")]
        x-solved
        .colour-count(style="margin-bottom: -32px") #[span 0] renk kullanıldı
        include svg/colours-1.svg
        button.btn.clear Temizle
      .tab
        h3 Güney Amerika #[span.check(when="map-1")]
        x-solved
        .colour-count #[span 0] renk kullanıldı
        include svg/colours-2.svg
        button.btn.clear Temizle
      .tab
        h3 Almanya #[span.check(when="map-2")]
        x-solved
        .colour-count #[span 0] renk kullanıldı
        include svg/colours-3.svg
        button.btn.clear Temizle
      .tab
        h3 İngiltere #[span.check(when="map-3")]
        x-solved
        .colour-count #[span 0] renk kullanıldı
        include svg/colours-4.svg
        button.btn.clear Temizle

---
> id: maps-2
> title: The Four Colour Theorem

::: column.grow

Bütün bu haritalar sadece dört renk ile boyanabilir, fakat çok daha karmaşık haritalar için daha fazla rengin gerekeceğini hayal etmek çok zor değil. Aslında kimi haritalar için __en azından__ dört gerekir: hepsi birbirine komşu dört ülke olduğu zaman.

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Daha önce yaptığımız gibi ülkelerin ve sınırların olduğu bir haritayı düzlemsel bir çizgeye dönüştürebiliriz: her ülke bir [[nokta|çizgi|yüz]] olur ve [[komşu olan|aynı renkte olan]] ülkeler birbirine bir çizgi ile bağlanır.

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Şimdi bu çizgenin noktalarını boyamak istiyoruz, ve aralarında çizgi olan iki noktanın farklı renkleri olsun istiyoruz.

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

1852’de botanik öğrencisi [Francis Guthrie](bio:guthrie) İngilteredeki bölgelerin haritasını renklendirmek zorundaydı. Denediği her harita için dört rengin yeterli olduğunu gözlemledi, ancak _her_ harita için bunu gösterecek bir kanıt bulmayı başaramadı. Sonuçta bunun bir hayli zor bir soru olduğu ortaya çıktı ve __dört renk teoremi__ adıyla anılmaya başladı.

İlerleyen 100 yılda pek çok matematikçi dört renk teoremi için “kanıtlar” yayınladılar, ama hepsinde sonradan hatalar bulundu. Bu geçersiz kanıtlardan bazıları o kadar ikna ediciydi ki içerdikleri hatayı bulmak 10 yıldan uzun sürdü.

Uzunca bir süre matematikçiler dört rengin yeterli olduğunu da kanıtlayamadılar, dörtten fazla renge ihtiyaç duyulan bir harita da bulamadılar.

:::

---
> id: maps-4

1976’da [Wolfgang Haken](bio:haken) ve [Kenneth Appel](bio:appel) sonunda soruyu bilgisayar yardımı ile çözene kadar dört renk probleminde çok ilerleme kaydedilemedi. Haken ve Appel sonsuz harita seçeneğini 1936 özel duruma indirip her birisini bilgisayara kontrol ettirdiler, hesaplar toplamda 1000 saatten uzun sürdü.

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

__Dört renk teoremi__ bilgisayar yardımıyla kanıtlanmış ilk ünlü matematiksel teorem, o günden bu güne kanıtlarda bilgisayar kullanmak çok daha yaygınlaştı ve daha az tepki görmeye başladı. Hızlı bilgisayarlar ve etkin algoritmalar sayesinde bugün dört renk teoremini kendi bilgisayarınızda bir kaç saatte kanıtlayabilirsiniz.

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Haken ve Appel’in çalıştığı Illinois Urbana-Champaign Üniversitesi<br/>Matematik Bölümünün posta işareti

---
> id: maps-6

::: column.grow

Dört renk teoremi sadece bir düzlemde ya da küre yüzeyinde yer alan ve her ülkenin tek bir bölgeden oluştuğu haritalar için geçerli.

Tabi matematikçiler ülkelerin birden fazla bağlantısız bölgelerinin olabildiği _imparatorluk_ haritalarını da çalıştılar, ve torus(simit şekli) gibi başka şekildeki gezegenlerin haritalarını da. Bu durumlarda dörtten fazla renge ihtiyacınız olabilir ve kanıtı yapmak daha da zorlaşıyor.

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption Torus üzerindeki bu haritayı boyamak için yedi renk gerekli.

:::

---
> id: salesman
> section: travelling-salesman

## Gezgin Satıcı Problemi

::: column.grow(parent="right")

Bir defa daha ağlar ve haritalar üzerine düşünelim. Bir kargo şirketinin ürünleri ${tsn}{tsn|8|2,50,1} farklı şehrine dağıtması gerektiğini düşünün. Bu şehirleri çizgemizdeki noktalar olarak ele alabiliriz. Eğer bütün şehirler yollar ile bağlı ise, bu bir [[tam çizgedir|döngüdür|ikili çizgedir]]
yani toplamda `(var("tsn") × (var("tsn") – 1)) / 2 = var("tsn*(tsn-1)/2")` çizgisi vardır.

Dağıtım kamyonu her şehri ziyaret etmek zorunda, istediği sırayı izleyebilir. Köningsberg Köprüleri probleminde _her çizgi_ üzerinden tam bir defa geçen yolları arıyorduk. Şimdiyse _her noktadan_ tam olarak bir defa geçen yollar arıyoruz. Böyle yollara __Hamilton döngüleri__ denir.

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

Tam bir çizgede Halimton döngüleri için çok fazla seçenek vardır. Aslında başlangıç noktası olarak herhangi bir noktayı seçebiliriz, ve sonra kalan şehirleri de istediğimiz sırayla seçebiliriz.

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---
> id: salesman-2

10 şehirli bir çizgede her Hamilton döngüsü ${tsn1} şehire uğramak zorunda. O halde 

* İlk şehir için 10 seçenek var.
* Gidilecek ilk şehri seçtikten sonra geriye ikinci şehir için 9 seçenek kalıyor.
* Ardından 3. şehir için 8 seçeneğimiz var.
* Ardından 4. şehir için 7 seçeneğimiz var.
* …
* Son olarak, geriye 10. Şehir için 1 seçeneğimiz kalıyor.

Yani toplamda ${tsnPaths(10)} olası yol var. Bu çarpımı kısaca yazmanın bir yolu 10! Ya da 10 __Faktöriyel__.

Herhangi iki şehir arasında doğrudan bir olmayabilir, başka bir şehre uğramak gerekiyor olabilir. Bu durumda artık elimizde tam bir çizge yoktur ve eğer Hamilton döngüleri varsa onları bulmak çok daha zorlaşır.

---
> id: salesman-3

::: column.grow(parent="right")

Şimdiye kadar kimi şehirlerin daha uzakta olabileceğini göz ardı ettik. Oysa gerçek hayatta bu çok önemli bir kıstas: _herhangi_ bir yol bulmak istemiyoruz, en kısa yolu bulmak istiyoruz. Bu sorunun adı _Gezgin Satıcı Problemi_. Sadece ulaşım ve taşımacılıkta değil, örneğin bilgisayarları hızlandırmak için mikroçiplerin üzerine tranzistörleri yerleştirirken de, [DNA](gloss:dna) yapısını incelerken de çözülmesi gerekiyor.

Basit bir yöntem olası bütün yolları hesaplamak, her birinin uzunluğunu bulmak ve en kısa olanı seçmek olabilir. Ancak daha az önce sadece ${tsn2}{tsn2|10|2,20,1} şehir için bile ${tsn2}! = ${factorial(tsn2)} olası yol olduğunu gösterdik. Yüzlerce ya da binlerce nokta ele aldığımızda olası bütün seçeneklere bakmak çok güçlü bilgisayarlar için bile imkansız.

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4
> goals: move

Ne yazık ki gezgin satıcı problemini çözmek için daha etkili bir algoritma yok. Onun yerine matematikçiler ve bilgisayar bilimciler _iyi_ çözümleri bulmak için çeşitli algoritmalar geliştirdiler. Böylece en iyi çözümü bulamasak da iyi bir çözüm bulabiliyoruz. Yaklaşık çözüm sunan bu algoritmalara _deneyimsel_ diyoruz.

Haritadaki şehirleri yeniden düzenlemeyi deneyin ve aralarındaki en kısa yolun nasıl değiştiğini gözlemleyin. Tıklayarak şehirleri kaldırabilir, ya da haritadaki boş bir yere tıklayarak (8e kadar) yeni şehirler ekleyebilirsiniz.

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---
> id: salesman-5

::: column.grow

__Açgözlü Algoritma__ (ya da En Yakın Komşu Algoritması) çok basit: rastgele bir şehirden başlıyorsunuz ve sırayla daha önce ziyaret etmediğiniz en yakın şehre gidiyorsunuz. Bütün şehirlere gidince duruyorsunuz.

::: column(width=300)

{.todo} Animation coming soon…

:::

Açgözlü algoritma ile bulunan yolların en kısa yoldan ortalama olarak %25 daha uzun olduğu gösterilebilir.

---
> id: salesman-6

::: column.grow

__2-Opt Algoritması__ rastgele bir yol ile başlar. Sonra sürekli iki çizgi seçip yerlerini değiştirince yolun kısalıp kısalmadığına bakarsınız. Herhangi çizgi ikilisini değiştirerek yolu daha kısaltamadığınızda durursunuz.

::: column(width=300)

{.todo} Animation coming soon…

:::

---
> id: ants

Öyle görünüyor ki bilgisayarlardan henüz icat edilmeden çok daha önce doğa iki konum arasındaki en kısa yolu bulma sorusuna akıllıca bir çözüm geliştirmişti: karınca kolonileri.

    x-parallax.full-width(background="images/ants.jpg")

Karıncalar besin kaynakları ve evleri arasındaki en kısa yolu bulmak istiyorlar. Yol üzerinde bıraktıkları kimyasallar ile aralarında iletişim kurabiliyorlar.

---
> id: ants-1

::: column.grow

* Karınca kolonisi ilk başta pek çok kaşifi rastgele yönlerde yolluyor. Besin bulduktan sonra geri dönüyorlar ve arkalarında feromonden oluşan bir yol bırakıyorlar.
* Diğer karıncalar bu yola denk geldikleri zaman takip edip besine ulaşabiliyorlar. Dönüş yolunca onlar da feromon bırakıyorlar, böylece yol daha belirginleşiyor.
* Zaman içinde feromon buharlaşır. Yol ne kadar uzunsa karıncaların da yürümesi o kadar uzun sürüyor, böylece feromonun buharlaşmak için daha çok zamanı oluyor. Diğer yanda kısa yollar sıklıkla destekleniyorlar ve daha kalıcı oluyorlar.

::: column(width=240)

{.todo} Diagram coming soon…

:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Karınca Koloni Sistemi(KKS) algoritması bu davranışı bilgisayarlarda “sanal” karıncalar kullanarak kopyalamaya çalışıyor. Gezgin satıcı problemi için hızlı bir şekilde çok iyi çözümler bulabiliyor.

KKS algoritmasının öne çıkan bir tarafı sürekli bir şekilde çalışabilmesi ve çizgedeki gerçek zamanlı değişimlere uyum sağlayabilmesi. Bu değişimler araba kazaları, yol çalışmaları ya da bilgisayar ağları arasındaki trafik sıkışıklıkları yüzünden olabilir.

:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

Gezgin Satıcı Problemi [NP-zor](gloss:np) bir problem, yani bilgisayarlar için çözmesi çok zor(en azından çok sayıda şehir olduğunda).

Hızlı ve kesin çözüm üreten bir algoritma bulunursa bilgisayar bilimleri alanında çok ciddi sonuçları olacak: _bütün_ NP-zor problemler için hızlı bir algoritma olduğu anlamına gelecek. Ayrıca çoğu internet güvenliği uygulamasını işe yaramaz hale getirecek, çünkü bu yöntemler kimi problemlerin bilgisayar tarafından çözülmesinin çok zor olmasına dayalı.

Ayrıca gezgin satıcı problemini çözen hızlı bir algoritma bulunursa matematik ve bilgisayar bilimleri alanındaki en ünlü açık sorulardan birisi çözülmüş olacak: __P’ye karşılık NP__ problemi. Bu her biri \$1m ödüllü olan yedi [Milenyum Problemi](gloss:millennium-prize)nden biri.

:::

---
> section: scheduling
> sectionStatus: dev

## Scheduling Problems

{.todo} Coming Soon

---
> id: applications
> section: applications

## Günlük Hayatta Çizgeler

Bu ders boyunca bazıları yapmacık olsa da çizgeler kuramının pek çok uygulamasını gördük. Oysa çizgeler günlük hayattaki çoğu kavramın ve nesnenin tam kalbindeler.

::: column.grow

Örneğin internet devasa bir sanal çizge. Her noktası bir internet sayfası ve iki sayfa arasında bir hiperbağlantı olduğunda sayfaların arasında bir çizgi var. Bağlantıların tek yönlü olduğunu unutmamak gerek, yani aslında bu [[yönlü|çok çizgili|bağlantılı]] bir çizge, ve bu çizge _çok ama çok büyük_.

Wikipedia ya da Facebook gibi kimi internet sitelerini gösteren pek çok bağlantı var, daha küçük çoğu internet sitesini gösteren bağlantı sayısı ise çok daha az. İşte Google’ın arama sonuçlarını sıralarken kullandığı kavram bu.

::: column(width=240)

    img(credit="© Various" src="images/websites.png" width=240 height=240)

:::

---
> id: applications-1

Kendisine bağlantılar olan internet siteleri daha kaliteli oluyorlar ve arama sonuçlarında üst sıralarda yer almalılar. Örneğin “Londra” kelimesini aradığınızda resmi turist bilgilendirme sitesi Londra’daki küçük dükkanların sitelerinden daha önce karşımıza geliyor. __Sayfa Sıralama Algoritması__ adındaki bu basit çizgeler kuramı fikri Google’ı diğer arama motorlarından çok daha iyi yaptı.

---
> id: applications-2

İnternet insanlığın yarattığı en büyük ağ. Aşağıdaki resim internete bağlı bütün sunucuların küçük bir kısmını gösteriyor:

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

İnternet siteleri ve hiper bağlantılar birer _sanal_ çizge oluştursalar da, bilgisayarlar, sunucular, telefon hatları ve kablolardan oluşan _fiziki_ bir ağ da var.

::: column.grow(parent="right")

Ne zaman bir telefon araması yapsanız ya da bir internet sitesi açsanız, bağlantı operatörleri gönderici ile alıcıyı bağlamak için bir yol bulmalılar. Üstelik bunu hiç bir bağlantı kablosunun kapasitesini aşmadan yapmalılar. Çizgeler kuramı ve olasılık örneğin bir hat meşgul olduğunda başka yollar bularak güvenilir bir servis sağlıyorlar.

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

Çizgeler aynı zamanda gemicilik ve taşımacılıkta da önemli bir role sahipler. Bütün uçuş, tren ve metro ağları etkili bir zamanlama yaratmakta kullanılan birer çizge oluştururlar. En ünlü çizgelerden biri Londra metro haritasıdır:

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow

Bütün araba yolları ve otoyollar da kocaman bir ağ oluştururlar. Bu ağlar verilen iki nokta arasındaki en kısa yolu bulmak için Google Maps gibi navigasyon servisleri tarafından kullanılır.

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::
::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

Gelecekte __Akıllı Taşıma Sistemleri__ arabaları daha etkili bir şekilde yönlendirerek, cep telefonlarından gelen konum bilgilerini kullanarak ve otomatik sürüş yapan arabalar ile trafik sıkışıklıklarını ve kazaları azaltacaklar. Bu her yıl yolda harcanan milyonlarca saatten tasarruf edecek, kirletme oranını ciddi oranda düşürecek ve acil durum servislerinin daha hızlı hareket etmesini sağlayacak.

:::

---
> id: applications-6

Bu resim kuzey Avrupa’daki ticari uçuş ağlarını gösteriyor.

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

Bilim, mühendislik ve günlük hayatta sayamayacağımız kadar çok çizge vardır.

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} __Moleküllerde__ ve kristallerde atomlar arası bağlar birer çizge oluştururlar.

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} __Hastalıkların yayılması__ ve salgınlar ağlar kullanarak modellenebilirler.

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} Biyolojide türlerin atalarını gösteren __evrim ağaçları__ birer çizgedir.

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} __Elektrik devrelerinin__ ve bilgisayar işlemcilerinin çeşitli kısımları birer ağ oluştururlar.

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} __Dillerin__ dil bilgisel yapıları çizgeler ile modellenebilir, böylece tercüme algoritmaları yazılabilir.

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Çizgelerin __olasılık__, __oyun teorisi__ ve __finansal matematikte__ de pek çok uygulaması vardır.

:::

---
> id: social

### Sosyal Ağlar

Son olarak günlük hayatımızda çok yeri olan güzel birkaç çizge örneğine bakalım: sosyal medya. Burada köşeler [[insanları|arkadaşları|ağları]] temsil eder, çizgiler de arkadaşlıkları, beğenileri, abonelikleri ya da takipçileri.

Sosyal medya çizgelerini çizmeye başladığımızda kimi ortak arkadaşlık kümelerini açıkça görebiliriz, bunlar aynı okula gitmiş ya da aynı şehirde yaşıyor olabilirler. Ayrıca insanların __merkeziliğini__ de ölçebiliriz, bu bir köşenin diğerleri ile ne kadar bağantısı olduğu ile ilişkili. Bu bir kişinin sosyal medyadaki popülerliğinin bir ölçütü olabilir.

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow

2014’te Facebook’un 1.4 milyar aktif kullanıcısı ve toplam 200 milyardan fazla arkadaşlığı vardı. Facebook kullanıcılarının yarısından çoğu 200’den fazla arkadaşa sahipler ve arkadaşlarımızın çoğunun da bu kadar arkadaşı olduğu için, çoğumuzun on binlerce _arkadaşının arkadaşı_ var.

İlginç bir soru şu olabilir: iki rastgele Facebook kullanıcısı seçersek, birinden diğerine ulaşmak için kaç tane “arkadaşlık çizgisi” ilerlememiz gerek? Örneğin iki arkadaş arasındaki mesafe [[1]], ve arkadaşınızın arkadaşı ile mesafeniz [[2]].

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

Facebook’un 2016’da yürüttüğü bir [araştırmaya](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/) göre Facebook’taki başka bir kişiye olan ortalama mesafeniz 3.57: bu durumda __ayrılık derecesi__ 3.57 diyoruz.

Başka bir deyişle dünyanın her yerindeki bir milyar Facebook kullanıcısından herhangi bir tanesini seçerseniz, o kişi sizin arkadaşınızın arkadaşını tanıyan bir arkadaşa, ya da onu tanıyan bir arkadaşa sahip olacak. Ve bu ünlüleri, politikacaları, kraliyet ailelerini de kapsıyor…


    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption 2010’daki bütün Facebook arkadaşlıklarının coğrafi gösterimi.

---
> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

İlk defa 1929’da Macar yazar [Frigyes Karinthy](bio:karinthy) “altı ayrılık derecesi” fikrini ortaya attı. İnternet ya da sosyal medya henüz yoktu, ama yine de dünyadaki insanlar arası bağlar güçlenmeye başlamıştı.

İlk defa 1967’de [Stanley Milgram](bio:milgram) ampirik bir deney yaptı, Nebraska ve Kansas’ta yaşayan 296 katılımcıdan Boston, Massachusetts’deki bir kişiye bir posta göndermelerini istedi. Hepsi alıcı olarak bir arkadaşlarını seçeceklerdi, sonra arkadaşları kendi arkadaşını seçecekti. Her adımda mektup Boston’a biraz daha yaklaştı. Milgram’ın bulgularına göre ortalama olarak sadece 5.2 tane aracı arkadaş vardı &#8211; ayrılık derecesi 5.2.
:::

Bugün hepimiz görünmez devasa bir çizgenin parçasıyız. Bu çizge bizim sosyal ilişkilerimizin, yolculuklarımızın, internetin ve teknolojinin, bilimin ve daha fazlasının altında yatıyor.
