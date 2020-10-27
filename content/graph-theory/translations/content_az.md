# Qrafiklər və Şəbəkələr 

## Giriş 

> id: intro-0
> section: introduction
> translated: auto

Hər gün saysız bağlantılar və şəbəkələr əhatə edir: yollar və dəmir yolları, telefon xətləri, internet, elektron sxemlər və hətta molekulyar bağlar. Dostları və ailələri arasında hətta _sosial şəbəkələr_ var. Başqa nümunələri düşünə bilərsinizmi? 

::: column(width=220 parent="padded-thin")

    x-img(src="images/network1.jpg" width=220 height=220 lightbox)

{.caption} Yol və dəmir yolu şəbəkələri 

::: column(width=220)

    x-img(src="images/network6.jpg" width=220 height=220 lightbox)

{.caption} Kompüter fişləri 

::: column(width=220)

    x-img(src="images/network3.jpg" width=220 height=220 lightbox)

{.caption} Təchizat Zəncirləri 

::: column(width=220)

    x-img(src="images/network2.jpg" width=220 height=220 lightbox)

{.caption} Dostluq 

::: column(width=220)

    x-img(src="images/network7.jpg" width=220 height=220 lightbox)

{.caption} Sinir əlaqələri 

::: column(width=220)

    x-img(src="images/network4.jpg" width=220 height=220 lightbox)

{.caption} İnternet 

:::

---
> id: intro

::: column.grow

Riyaziyyatda bütün bu nümunələr [__qrafik__](gloss:graph) şəklində göstərilə bilər (bir funksiyanın _qrafiki_ ilə qarışdırılmamaq üçün). Bir qraf, [[ucları]] adlanan müəyyən _nöqtələrdən_ ibarətdir [[| dairələr |]] bəziləri [[kənarları]] ilə bağlanmış [[keçidlər]] [[| sərhədləri | cütlər]] . 

__Qrafika nəzəriyyəsi__ qrafiklərin və onların xüsusiyyətlərinin öyrənilməsidir. Riyaziyyatın ən maraqlı və vizual sahələrindən biridir və saysız-hesabsız vacib tətbiqlərə malikdir. 

::: column(width=180)

    svg#graph0.graph.novertices.noedges(width=180 height=180)

:::

---
> id: intro-1

Dairələr və xətlərdən istifadə edərək sadə qrafiklərin sxemini çəkə bilərik. Düzbucaqların mövqeyi və kənarların uzunluğu əhəmiyyətsizdir - yalnız bir-birlərinə _necə bağlı olduqları_ barədə düşünürük. Kenarlar hətta bir-birlərini keçə bilər və düz olmağa ehtiyac yoxdur. 

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Bəzi qrafiklərdə kənarları yalnız bir yolla gedir. Bunlara [__yönəldilmiş qrafiklər__](gloss:directed-graph) deyilir. 

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Bəzi qrafiklər bir-biri ilə kənarları ilə bağlı olmayan çoxbucaqlı qruplardan ibarətdir. Bu qrafiklər __kəsilib__ . 

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Digər qrafiklərdə eyni cüt döngələr və ya özlərinə (döngələr) bağlanmış uclar arasında çoxlu kənar ola bilər. 

:::

---
> id: intro-2

Bəzi ucları və kənarları çıxarmaqla mövcud qrafikdən yeni qrafiklər yarada bilərik. Nəticə [__subqraf__](gloss:subgraph) adlanır. Burada rəngli kənarları və mümkün subqrafı göstərən vertices ilə daha bir neçə qrafik nümunəsini görə bilərsiniz: 

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

Deyirik ki, bir qrafin [__əmri__](gloss:graph-order) , vertikalların sayına bərabərdir. Bir verteksin [__dərəcəsi__](gloss:graph-degree) , həmin verteksdə rast gəlinən kənarların sayıdır. 

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Sifariş: [[5]] 

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Sifariş: [[8]] 

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Dərəcəsi: [[3]] 

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Dərəcəsi: [[6]] 

:::

---
> id: intro-4

Tək bir döngədən ibarət olan qrafalar [__dövrə__](gloss:graph-cycle) adlanır. Bütün dövrlərdə [[eyni sayda kənar və uclar var | uclarından daha çox kənar | uclarından daha az kənar]] . 

    .row
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')

{.reveal(when="blank-0")} Bu yeni təriflərlə təchiz edilmiş, qrafiklərin bəzi maraqlı xüsusiyyətlərini və tətbiqlərini araşdıraq. 

---
> id: bridges-0
> title: The Bridges of Königsberg
> section: bridges
> translated: auto

## Königsberg körpüləri 

::: column.grow

Qrafiklər və şəbəkələr haqqında düşünən ilk riyaziyyatçılardan biri [Leonhard Euler idi](bio:euler) . Euler, Baltik dənizi yaxınlığındakı Königsberg qəsəbəsi ilə bağlı köhnə bir problemlə maraqlandı. 

Pregel çayı Königsberg'i yeddi körpü ilə bağlanan dörd ayrı hissəyə ayırır. Bütün körpülərin hamısını bir dəfə - ancaq bir dəfədən çox keçməyən şəhərin ətrafında gəzmək mümkündürmü? (Hər yerdə başlaya və bitirə bilərsən, mütləq eyni yerdə deyil.) 

Bu xəritələrdə rəsm çəkərək etibarlı bir yol tapmağa çalışın: 

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

Königsberg vəziyyətində etibarlı bir marşrut tapmaq mümkün olmur, ancaq digər şəhərlərdən bəziləri işləyir. Euler, çox sayda fürsət sınamadan - hər hansı bir şəhərə tətbiq oluna biləcək sadə bir qayda - grafik nəzəriyyəsini istifadə edərək tapmağı bacardı. 

::: column.grow

Əvvəlcə şəhər xəritələrini kənarları və ucları olan qrafiklərə çevirməliyik. Hər ada və ya torpaq sahəsi [[bir vertex]] ilə təmsil olunur [[| bir kənar | bir bölgə]] və iki bölgəni birləşdirən hər körpü uyğun bir [[kənar ilə]] təmsil olunur [[| dik | küçə]] . 

{.reveal(when="blank-0 blank-1")} İndi "hər körpünü bir dəfə keçərkən bir şəhər gəzmək" problemi "hər kənarı tam bir dəfə izləyərkən bir fasiləsiz vuruşla bir qrafik çəkmək" probleminə çevrildi. 

::: column(width=200)

    include svg/konigsberg.svg

:::

---
> id: bridges-2

Kağızda bir neçə fərqli qrafik hazırlayın və sonra hansının tək, davamlı vuruşla çəkilə biləcəyini çalışın. 

---
> id: bridges-3
> goals: size prime eo

Əvvəllər şəhər xəritələrində olduğu kimi, digərlərində olmadıqda bəzi qrafiklərin mümkün olduğunu görürük. Bunun səbəbini anlamağımızı təmin etmək üçün gəlin hər bir ucu öz [dərəcəsi](gloss:graph-degree) ilə etiketləyin. Sonra ucları müxtəlif yollarla rəngləyə bilərik və bir nümunə ortaya qoymağa çalışırıq: 

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

Mümkün olan və mümkün olmayan qrafiklər üçün bu rəqəmləri müqayisə edərək görünür ki, [[iki dənə "tək" ucu yoxdursa]] bir qraf tərtib edilə bilər [[| yalnız "hətta" ucları var | 4dən böyük bir sifariş vertikallarına sahib deyil | tək sayda uclara malikdir | əmr 3-ə çatmır]] . Bu şərt qrafikdə yalnız bir dikliyə baxsaq izah edilə bilər: 

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

Königsberg-in xəritəsinə dönsəniz, tək sayda körpü olan ikidən çox adanın olduğunu görərsiniz. Buna görə hər körpünü tam bir dəfə keçən bir yol həqiqətən mümkün deyil - Leonard Euler'in kəşf etdiyi budur. 

Euler-in kəşfi real həyatda xüsusilə faydalı görünə bilməz, lakin qrafiklər iki yer arasında istiqamət tapmaq kimi bir çox digər coğrafi problemlərin əsasını təşkil edir. Bu tətbiqlərdən daha sonra kəşf edəcəyik. 

::: column(width=240)

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes
> translated: auto

## Əl görüşmələri və Tanışlıq 

::: column.grow

Dostlarınızla birlikdə gözəl bir doğum gününə dəvət aldınız. Özünüz və ev sahibi daxil olmaqla, var ${hnd}{hnd|5|3,15,1} insanlar təqdim edir. 

Axşam qonaqlar ayrılmağa hazırlaşdıqca hər kəs başqaları ilə əl sıxır. Cəmi neçə əl toplantısı var? 

Bir qrafı istifadə edərək əl sıxışmalarını təmsil edə bilərik: hər bir şəxs [[bir vertexdir | bir kənar]] və hər [[bir əlaqə bir kənardır | bir vertex]] . 

{.reveal(when='blank-0 blank-1')} İndi qrafikdəki kənarların sayını saymaq asandır. Orada tapırıq ${hnd} insanlar var ${hnd*(hnd-1)/2} əl sıxma. 

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

Bütün kənarları böyük qrafiklərdə saymaqdansa, _istənilən_ sayda qonaq üçün nəticəni izah edən sadə bir düstur tapmağa da cəhd edə bilərik. 

Hər biri ${n}{n|5|2,8,1} Yığıncaqdakı insanlar əl sıxır ${n-1} digərləri. Bu edir ${n} × ${n-1} = ${n×(n-1)} ümumilikdə əl sıxma. _N_ insanlar üçün əl sıxma sayı olardı [[`n×(n–1)`|`n×(n+1)`|`n^2`]] . 

    p.var(:html="handshakeTable(n)")
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

Təəssüf ki, bu cavab düzgün deyil. Diqqət yetirin [üst sıra ilk iki giriş](->.handshakes_tr:first-child_td:first-child,_.handshakes_tr:first-child_td:nth-child(2)) əslində eynidır, sadəcə ətrafa yuvarlanıblar. 

Əslində hər əl sıxmağı [[iki dəfə]] saydıq [[| bir dəfə | üç dəfə]] , _{span.reveal(when="blank-0")} cəlb olunan iki nəfərin hər biri üçün bir dəfə. Bu, düzgün əl yığmağın sayı deməkdir ${n}{n|5|2,25,1} qonaqlar `(var("n") × var("n-1"))/2 = var("n*(n-1)/2")` ._ 

---
> id: handshakes-3

Əl vermə qrafikləri xüsusi bir yerdədir, çünki hər vertex hər bir digər ucuna bağlıdır. Bu xassəyə malik __qrafiklər tam qrafiklər__ adlanır. 4 ucu olan tam qrafik tez-tez olduğu kimi qısaldılır `K_4` , 5 ucu olan tam qrafik kimi tanınır `K_5` , və sair. 

Biz yalnız ilə tam bir qrafik göstərdik `n` ucları, `K_n` , var `(n × (n-1))/2` kənarları. 

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

Fərqli bir gündə sizi sürətli bir tanışlıq tədbirinə dəvət edirsiniz ${m}{m|5|2,8,1} oğlanlar və ${f}{f|4|2,8,1} qızlar. Çox kiçik masalar var və hər oğlan qızların hər biri ilə 5 dəqiqə vaxt keçirir. Cəmi neçə fərdi "tarix" var? 

::: column.grow

Bu vəziyyətdə, müvafiq qrafik iki ayrı uc dəstindən ibarətdir. Hər bir vertex [[, əksinə,]] bütün uclarına bağlıdır [[| öz]] dəsti, lakin heç birinin [[öz tərəfində deyil | əks]] dəsti. Bu nizama sahib olan __qrafiklərə iki tərəfli qrafiklər__ deyilir. 

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")} İki ölçüsü _x_ və _y_ olan iki tərəfli qrafik tez-tez olduğu kimi yazılır `K_"x,y"` . Var [[`x×y`|`x+y`|`2x–y`]] kənarları, _{span.reveal(when="blank-2")} bu da yuxarıdakı misalda var deməkdir ${m} × ${f} = ${m×f} tarixləri._ 

---
> id: utilities
> goals: try-three-times
> section: planar-graphs
> translated: auto

## Planar Qrafiklər 

::: column.grow

Budur, grafika nəzəriyyəsi ilə əlaqəli başqa bir tapmacadır. 

Kiçik bir kənddə su, elektrik və qaz istehsal edən üç ev və üç köməkçi zavod var. Kursların hər birini kommunal zavodların hər birinə bağlamalıyıq, ancaq kəndin yerləşməsi səbəbindən fərqli borular və kabellərin keçməsinə icazə verilmir. 

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Evlərin hər birini xəttlərinizin heç biri kəsişmədən aşağıdakı kommunal şirkətlərə bağlamağa çalışın: 

    .box.no-padding
      include svg/utilities.svg
      button.btn Clear

---
> id: utilities-1

Əvvəllər Königsberg körpüləri kimi tez bir zamanda bu problemin də mümkün olmadığını aşkar edirsiniz. Bəzi qrafların kənarları üst-üstə düşmədən tərtib edilə biləcəyi görünür - bunlara __planar qrafiklər__ deyilir - amma digərləri bilməz. 

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_3` planar. 

::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_4` [[planar | planar deyil]] . 

::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center}`K_5` [[planar deyil | planar]] . 

:::

---
> id: utilities-2

[Tam qrafik](gloss:complete-graph) `K_5` planar olmayan ən kiçik qrafikdir. Tərkibində olan hər hansı digər qrafik `K_5` bir şəkildə bir alt yazı da planar deyil. Bura daxildir `K_6` , `K_7` və bütün daha böyük qrafiklər. 

Üç kommunal tapmacanın içindəki [qrafik ikitərəfli qrafikdir](gloss:bipartite-graph) `K_"3,3"` . Məlum olur ki, hər hansı bir planar olmayan qrafada ya a olmalıdır `K_5` və ya a `K_"3,3"` (və ya bu iki qrafikin bir [bölməsi](gloss:subdivision) ) alt şəkil kimi. Buna _Kuratowski teoremi_ deyilir. 

---
> id: planarity
> goals: planarity

::: .box.f-blue

#### Planarallıq 

    x-solved
    svg#planarity(viewBox="0 0 720 360")

Bu planar qrafikdir, amma ${n}{n|7|5,20,1} dik nöqtələr bükülmüşdür. Dikləri düzəldin ki, kənarların heç biri üst-üstə düşməsin. 

    p.btn-row: button.btn New Random Graph

:::

---
> id: euler

### Euler Formulu 

Bütün planar qrafiklər çəkdikləri təyyarəni __üzlər__ adlanan bir sıra bölgələrə bölürlər. 

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] Vertices  
[[5]] üzlər  
[[10]] kənarları  
_{span.euler-sum} 11 Vertices + Üzlər_ 

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] Vertices  
[[7]] üzlər  
[[14]] kənarları  
_{span.euler-sum} 15 Vertices + Üzlər_ 

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] Vertices  
[[13]] üzlər  
[[24]] kənarları  
_{span.euler-sum} 25 Vertices + Üzlər_ 

:::

---
> id: euler-1

Bu nömrələri müqayisə edərkən, kənarların sayının həmişə [[bir az]] olduğunu görəcəksiniz [[| daha böyük |]] üzlərin sayı üstə də ucların sayından [[eyni]] . Başqa sözlə, _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + 1. Bu nəticə __Euler tənliyi__ adlanır və Königsberg Körpülər problemini həll edən eyni [riyaziyyatçının](bio:euler) adını daşıyır. 

Təəssüf ki, sonsuz sayda qrafik var və Euler tənliyinin işlədiyini görmək üçün hər birini yoxlaya bilmirik. Bunun əvəzinə hər hansı bir qrafik üçün işləyən sadə bir [sübut](gloss:proof) tapmağa çalışa bilərik ... 

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

Hər hansı bir (sonlu) bir qrafik bir vertexdən başlayaraq və daha çox ucu bir-bir əlavə etməklə inşa edilə bilər. Biz göstərdik ki, hansı yeni nöqtələr əlavə etsək də, Euler tənliyi doğrudur. Buna görə bütün qrafiklər üçün etibarlıdır. 

İstifadə etdiyimiz prosesə __riyazi induksiya__ deyilir. Sadə nəticələrdən başlayaraq və daha mürəkkəb işlərin qurulması zamanı nəticənin hər addımda dayandığını göstərmək üçün sonsuz sayda nəticəni sübut etmək üçün çox faydalıdır. 

    .svg-block: include svg/dominoes.svg

---
> id: euler-4

Bir çox planar qrafiklər [çoxbucaqlı](gloss:polygon) üzlü üç ölçülü formalı [polyhedra](gloss:polyhedron) torlarına çox bənzəyir. Elastik lentlərdən düzəldilmiş polyhedra düşünsək, düz, planar qrafik halına gətirilənə qədər uzatdıqlarını xəyal edə bilərik: 

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---
> id: euler-5

Bu, Euler düsturundan yalnız plan qrafikləri üçün deyil, bütün polyhedra üçün istifadə edə biləcəyimiz deməkdir - bir kiçik fərqlə. Polyedra qrafikə çevrilərkən üzlərdən biri yox olur: polyhedranın ən üst üzü "kənar" olur; qrafiklərdən. 

Başqa sözlə, sayını sayırsan __{.red} kənarları__ , __{.blue} üzlər__ və __{.green}__ _Hər hansı bir_ polyhedron __təpə,__ siz ki, tapa bilərsiniz _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + [[2]] . 

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __Icosahedron__  
__{.blue} 20__ üz  
__{.green} 12__ Vertices  
__{.red} 30__ kənarları 

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Rhombicosidodecahedron__  
__{.blue} 62__ üzlər  
__{.green} 60__ Vertices  
__{.red} 120__ kənarları 

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __Kəsilmiş Icosahedron__  
__{.blue} 32__ Üz (12 qara, 20 ağ)  
__{.green} 60__ Vertices  
__{.red} 90__ kənarları 

:::

---
> id: maps
> section: map-colouring
> translated: auto

## Xəritə Boyama 

::: column.grow

Artıq müəyyən xəritələrlə qrafik nəzəriyyəsindən istifadə etmişik. Böyüdükcə fərdi yollar və körpülər yox olur və əvəzində bütün ölkələrin konturlarını görürük. 

Xəritəni rəngləyərkən - və ya ayrı bölgələrdən ibarət hər hansı bir rəsm - qonşu ölkələr eyni rəngə sahib ola bilməzlər. Mümkün qədər az fərqli rənglərdən istifadə etmək istəyə bilərik. 

Şahmat taxtası kimi bəzi sadə "xəritələrə" yalnız iki rəng (qara və ağ) lazımdır, lakin mürəkkəb xəritələrin daha çoxuna ehtiyac var. 

::: column(width=240 style="margin-top: -10px")

    x-img.shifted(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

ABŞ ştatlarının xəritəsini rənglədikdə 50 rəng açıqca kifayətdir, lakin daha az sayda zəruridir. Aşağıdakı xəritələri mümkün qədər az rənglə rəngləməyə çalışın: 

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

Bu xəritələrin hamısı cəmi dörd fərqli rəng ilə rənglənə bilər, lakin digər, çox mürəkkəb xəritələrin daha çox rəngə ehtiyacı olacağını təsəvvür etmək çətin deyil. Əslində, bəzi xəritələrdə bir-birinə bağlı dörd ölkə olduqda __ən az__ dörd rəng lazımdır. 

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Əvvəllər olduğu kimi, ölkələr və sərhədlər ilə bir xəritəni planar qrafikə çevirə bilərik: hər ölkə [[bir vertex]] olur [[| bir kənar | bir üz]] və [[bir sərhədi bölüşən]] ölkələr [[| eyni rəng]] bir kənar ilə bağlanır: 

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} İndi bir grafiğin uclarını rəngləndirmək istəyirik və iki ucu bir kənar ilə bağlanarsa fərqli rəngə sahib olmalıdır. 

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

1852-ci ildə botanika tələbəsi [Francis Guthrie](bio:guthrie) İngiltərədəki ölkələrin xəritəsini rəngləməli oldu. Dörd rəngin cəhd etdiyi hər bir xəritə üçün kifayət qədər göründüyünü müşahidə etdi, lakin _bütün_ xəritələr üçün işləyən bir sübut tapa bilmədi. Bu son dərəcə çətin bir problem oldu və __dörd rəng teoremi__ kimi tanındı. 

Sonrakı 100 il ərzində bir çox riyaziyyatçı dörd rəng teoreminə yalnız "sonradan tapılan səhvlər üçün" sübutlar nəşr etdi. Bu etibarsız sübutlardan bəziləri o qədər inandırıcı idi ki, səhvləri tapmaq üçün 10 ildən çox vaxt lazım idi. 

Uzun müddət riyaziyyatçılar ya dörd rəngin kifayət olduğunu sübut edə bilmədi, ya da dörd rəngdən çox ehtiyacı olan bir xəritə tapa bilmədilər. 

:::

---
> id: maps-4

1976-cı ilədək [Wolfgang Haken](bio:haken) və [Kenneth Appel](bio:appel) bir kompüterdən nəhayət onu həll etmək üçün istifadə etdikdə dörd rəng problemi üzərində az irəliləyiş əldə edildi. 1936 xüsusi xəritəyə sonsuz sayda xəritəni azaltdılar, bunların hər biri bir kompüter tərəfindən cəmi 1000 saatdan çox çəkdi. 

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

Dörd rəng teoremi, kompüter istifadə edərək sübut edilmiş ilk məşhur riyazi teoremdir, bu gündən bəri daha çox yayılmış və daha az mübahisəli bir şeydir. Daha sürətli kompüterlər və daha səmərəli bir alqoritm deməkdir ki, bu gün dörd rəng teoremini noutbukda bir neçə saat ərzində sübut edə bilərsiniz. 

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Postmark for the Department of Mathematics at the University of<br/>Illinois Urbana-Champaign, where Haken and Appel worked.

---
> id: maps-6

::: column.grow

Dörd rəng teoremi yalnız düz bir müstəvidə və ya bir sahədəki xəritələr üçün işləyir və bütün ölkələrin vahid bir ərazidən ibarət olduğu yerdir. 

Bununla birlikdə riyaziyyatçılar, ölkələrin çoxlu bir-birindən ayrılan komponentlərdən ibarət ola biləcəyi _imperiyaların_ xəritələrinə və torus (donut forması) kimi fərqli formalı planetlərin xəritələrinə də baxdılar. Bu hallarda dörddən çox rəngə ehtiyacınız ola bilər və sübutlar daha da çətinləşir. 

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption This map on a torus requires seven colours.

:::

---
> id: salesman
> section: travelling-salesman
> translated: auto

## Səyahət Satış Problemi 

::: column.grow(parent="right")

Şəbəkələr və xəritələr haqqında bir daha düşünək. Təsəvvür edin ki, bir çatdırılma xidməti ziyarət etməlidir ${tsn}{tsn|8|2,50,1} bağlamalar paylamaq üçün fərqli şəhərlər. Bu şəhərləri bir qrafikdəki ucları kimi düşünə bilərik. Bütün şəhərlər yollarla bağlıdırsa, bu [[tam bir qrafikdir | dövrü | ikitərəfli qrafik]] , buna görə də var <mfrac><mrow>${tsn} × ( ${tsn} - 1)</mrow><mn>2</mn></mfrac> = ${tsn*(tsn-1)/2} cəmi kənarları. 

Çatdırılma maşını istənilən qaydada bütün şəhərləri ziyarət etməlidir. Königsberg körpüləri problemində _hər tərəfi_ tam olaraq gedən yolları tapmaq istədik. İndi _hər vertexə_ tam olaraq bir dəfə gedən yolları tapmaq istəyirik. Bu yollara __Hamiltonian dövrlər__ deyilir. 

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

Tam qrafiklərdə Həmilton dövrü üçün saysız-hesabsız fərqli imkanlar mövcuddur. Əslində hər hansı bir vertexi başlanğıc vertexdən başlayaraq istənilən şəhərdə istənilən şəhərdən birini seçə bilərik: 

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---
> id: salesman-2

İlə bir qrafikdə ${tsn1}{tsn1|4|2,10,1} şəhərlərdə hər Hamiltonian dövrü də olmalıdır ${tsn1} şəhərlər. İndi, 

    ul.var(:html="tsmString(tsn1)")

Bu, ümumilikdə, var deməkdir ${tsnPaths(tsn1)} mümkün yolları. Bu məhsul üçün stenoqramdır ${tsn1} ! və ya ${tsn1} __Faktiki__ . 

Təsəvvür edirsiniz ki, iki şəhər arasında - başqa bir şəhərə getmədən birbaşa səyahət etmək mümkün olmaya bilər. Bu vəziyyətdə artıq tam bir qrafikə sahib deyilik və Hamiltonian dövrlərinin sayını tapmaq, əgər ümumiyyətlə mövcuddursa, daha çətin olur. 

---
> id: salesman-3

::: column.grow(parent="right")

İndiyə qədər bəzi şəhərlərin digərlərindən daha ayrı ola biləcəyini nəzərə almamışıq. Həqiqi həyatda isə bu çox vacib bir məqamdır: biz yalnız _hər hansı bir_ yol tapmaq istəmirik, ancaq ən qısa yolu tapmaq istəyirik. Buna __Səyahət Satış Problemi deyilir__ . Yalnız nəqliyyat və logistika məsələsində deyil, həm də tranzistorları mikroçiplərə yerləşdirərkən, daha sürətli kompüter hazırlamaqda və ya [DNT-nin](gloss:dna) quruluşunu təhlil edərkən həll edilməlidir. 

Bir sadə üsul, mümkün olan bütün yolları sınamaq, hər birinin uzunluğunu tapmaq və ən qısa yolunu seçmək olardı. Ancaq biz bunu ədalətlə də göstərdik ${tsn2}{tsn2|10|2,20,1} şəhərlər var ${tsn2} ! = ${factorial(tsn2)} mümkün yolları. Yüzlərlə və ya minlərlə yüksəkliklərə sahib olduqda, bütün mümkün yolları sınamaq, hətta güclü kompüterlərdən istifadə etməklə mümkünsüz olur. 

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4
> goals: move

Təəssüf ki, səyahət satıcısı problemini həll etmək üçün daha səmərəli bir alqoritm yoxdur. Bunun əvəzinə, riyaziyyatçılar və kompüter alimləri ən yaxşısı olmasa da, _yaxşı_ həll tapan müxtəlif alqoritmlər hazırlamışlar. Yalnız təxmini həllər verən bu alqoritmlərə __Heuristics__ deyilir. 

Bu xəritədəki şəhərləri yenidən dəyişdirməyə çalışın və aralarındakı ən qısa yolun necə dəyişdiyini izləyin. Şəhərləri vuraraq onları silə bilərsiniz və xəritənin istənilən yerinə (8-ə qədər) tıklayaraq şəhərlər əlavə edə bilərsiniz: 

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---
> id: salesman-5

::: column.grow

__Xəsis alqoritm__ (və ya yaxın qonşu alqoritmi) çox sadədir: təsadüfi bir şəhərdən başlayırsınız və ardıcıl olaraq əvvəl ziyarət etmədiyiniz ən yaxın şəhərə keçirsiniz. Bütün şəhərləri gəzdikdən sonra durursunuz. 

::: column(width=300)

{.todo} Animasiya tezliklə ... 

:::

Orta hesabla xəsis alqoritmi istifadə edərək tapılan yolların ən qısa yoldan 25% daha uzun olduğunu göstərə bilərsiniz. 

---
> id: salesman-6

::: column.grow

__2 Opt Alqoritmi__ təsadüfi mümkün bir yol ilə başlayır. Sonra təkrar-təkrar iki kənarı götür və yolun uzunluğunu azaldacağı təqdirdə onları dəyişdirərsən. Uzunluğu daha da azaltmaq olmadıqda hər hansı bir cüt kənarı dəyişdirərək dayana bilərsiniz. 

::: column(width=300)

{.todo} Animasiya tezliklə ... 

:::

---
> id: ants

Məlum olur ki, kompüterlər hələ mövcud olmamışdan xeyli əvvəl Təbiət müxtəlif yerlər arasında optimal yolu tapmaq üçün ağıllı bir yol tapmışdı: qarışqa koloniyalarında. 

    x-parallax.full-width(background="images/ants.jpg")

Qarışqalar yuvaları və mümkün qida mənbələri arasında ən qısa yolu tapmaq istəyirlər. Bir-biri ilə izləri boyunca buraxdıqları və digər qarışqalar təqib edə bildikləri kimyəvi maddələrlə əlaqə qura bilərlər. 

---
> id: ants-1

::: column.grow

* Qarışqa koloniyası əvvəlcə təsadüfi istiqamətlərə səyahət edən bir çox skaut göndərir. Yemək tapdıqdan sonra feromon izi qoyub geri qayıdırlar. * Digər qarışqalar tapdıqda cığır izləməyə meyllidirlər ki, bu da onları qidaya aparır. Geri qayıdarkən daha çox feromona əmanət qoyur və bununla da cığırı gücləndirir. * Zaman keçdikcə feromon buxarlanır. Bir yol nə qədər uzun olarsa, qarışqalar onun boyunca getməsinə nə qədər çox vaxt sərf edirlər və buna görə də feromonun buxarlanması üçün daha çox vaxtı olur. Qısa yollar, əksinə, daha sürətli güclənə bilər, buna görə də onların gücü daha sürətli artır. 

::: column(width=240)

{.todo} Diaqram tezliklə gələcək ... 

:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Qarışqa koloniyası sistemi (ACS) alqoritmləri bir çox "virtual" qarışqalardan istifadə edərək bu davranışları kompüterlərdə təkrarlamağa çalışırlar. Səyyah satıcısı problemi üçün tez bir zamanda çox yaxşı həll yollarını tapa bilirlər. 

ACS alqoritmlərinin xüsusilə faydalı xüsusiyyəti, fasiləsiz işləyə bilməsi və real vaxtda qrafikdəki dəyişikliklərə uyğunlaşmasıdır. Bu dəyişikliklər avtomobil qəzaları və küçə şəbəkələrində yol bağlanması və ya kompüter şəbəkələrindəki veb serverlərə tıxanma səbəb ola bilər. 

:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

Gəzinti satıcısı problemi [NP-çətindir](gloss:np) , yəni kompüterlər (ən azı çox sayda şəhər üçün) həll etmək çox çətindir. 

Sürətli və dəqiq bir alqoritm tapmaq kompüter elmləri sahəsində ciddi nəticələrə səbəb olacaqdır: demək olar ki, _bütün_ NP-lər üçün sürətli alqoritmlər mövcuddur. Ayrıca İnternet təhlükəsizliyinin əksər hissəsini yararsız hala gətirər, bu da müəyyən problemlərin kompüterlər üçün çox çətin olduğuna inanır. 

Səyahət edən Satışçı problemini həll etmək üçün sürətli bir alqoritm tapmaq eyni zamanda riyaziyyat və kompüter elmindəki ən məşhur açıq problemlərdən birini, __P vs NP__ problemini həll edərdi. Hər biri 1 milyon dollar mükafat daşıyan yeddi [Minillik Mükafat Problemlərindən](gloss:millennium-prize) biridir. 

:::

---
> section: scheduling
> sectionStatus: dev

## Planlaşdırma problemləri 

{.todo} Tezliklə 

---
> id: applications
> section: applications
> translated: auto

## Gündəlik həyatda qrafiklər 

Əvvəlki fəsillərdə qrafika nəzəriyyəsinin bir çox fərqli tətbiqini gördük, baxmayaraq ki, bəziləri bir az düşünülmüşdü. Bununla belə məlum olur ki, qrafiklər gündəlik həyatda bir çox obyekt, anlayış və proseslərin əsasını təşkil edir. 

::: column.grow

Məsələn, İnternet geniş, virtual bir qrafikdir. Hər bir vertex fərdi bir veb səhifədir və hər bir kənar iki səhifə arasında bir keçid var deməkdir. Qeyd edək ki, bağlantılar yalnız bir yolla gedir, buna görə də bu qrafik [[yönəldilib | çox xətti | konfiqurasiya edilmiş]] və bu qrafikin _çox, çox, böyük olduğu bildirilir_ . 

 Vikipediya və ya Facebook kimi bəzi veb saytlarda çox sayda giriş bağlantısı var, bir çox kiçik veb saytlarda isə daxilolma əlaqələri çox azdır. Bu Google axtarış nəticələrini çeşidləmək üçün istifadə etdiyi əsas konsepsiya. 

::: column(width=240)

    img(credit="© Various" src="images/websites.png" width=240 height=240)

:::

---
> id: applications-1

Daha çox gələn bağlantısı olan veb saytlar daha keyfiyyətli olur və axtarış nəticələrinin başında göstərilməlidir. Məsələn, "London" axtardıqda rəsmi turistik məlumat saytları Londondakı kiçik dükanların və ya Londonda yaşayan insanların bloglarının qarşısında göstərilir. Qrafik nəzəriyyəsindən olan bu sadə fikir, __Səhifə dərəcəsi alqoritmi__ , Google-ı digər erkən axtarış motorlarından xeyli yaxşı etdi. 

---
> id: applications-2

İnternet bəşəriyyətin yaratdığı ən böyük şəbəkədir. Bu görüntü İnternetə qoşulmuş bütün serverlərin çox az bir hissəsini göstərir: 

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

Veb saytlar və hiperlinklər _virtual_ qrafik təşkil edərkən, kompüterlərin, serverlərin, marşrutlaşdırıcıların, telefon xətləri və kabellərin _fiziki_ şəbəkəsi də mövcuddur. 

::: column.grow(parent="right")

Hər dəfə bir telefon zəngi etdikdə və ya veb sayt yüklədiyiniz zaman, şəbəkə operatorları, hər hansı bir fərdi kabelin və ya əlaqənin həcmini aşmadan, göndərən və qəbuledicini birləşdirmək üçün bir yol tapmalı olurlar. Qrafika nəzəriyyəsi və ehtimal, etibarlı bir xidmətə zəmanət verməyə imkan verir, məsələn müəyyən bir əlaqə məşğul olduqda dalğaları tapmaqla. 

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

Qrafiklər nəqliyyatda və naviqasiyada da mühüm rol oynayır. Bütün uçuş, qatar və metro şəbəkələri qrafiklər yaradır ki, bu da səmərəli cədvəllər yaratarkən istifadə edilə bilər. Ən tanınan qrafiklərdən biri London metrosunun xəritəsidir: 

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow

Bütün yollar və avtomobil yolları eyni zamanda iki nöqtə arasındakı ən qısa marşrutu işləyərkən Google Maps kimi naviqasiya xidmətləri tərəfindən istifadə olunan geniş bir şəbəkə təşkil edir. 

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

Gələcəkdə __Ağıllı Nəqliyyat Sistemləri__ , smartfonlardan və özünü idarə edən avtomobillərdən toplanan yer məlumatlarından istifadə edərək avtomobilləri daha səmərəli istiqamətləndirərək tıxanma və qəzaları azaldacaqdır. Bu, hər il yolda itirilən milyonlarla saatı xilas edə bilər, çirkliliyi əhəmiyyətli dərəcədə azaldır və təcili yardım xidmətlərinə daha sürətli səyahət etməyə imkan verir. 

:::

---
> id: applications-6

Bu görüntü, Avropanın şimalına ticari aviareyslər şəbəkəsini göstərir. 

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

Elm, mühəndislik və ya gündəlik həyatda saysız-hesabsız digər qrafiklər var: 

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} __Molekullar__ və kristal ızgaralardakı atomlar arasındakı əlaqə bir qrafik təşkil edir. 

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} __Xəstəliklərin__ və epidemiyaların __yayılması__ bir şəbəkə istifadə edərək modelləşdirilə bilər. 

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} Biologiyada, növlərin əcdadlarını göstərən __təkamül ağacları__ bir qrafik meydana gətirirlər. 

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} __Elektrik sxemlərinin__ və kompüter çiplərinin fərqli komponentləri bir şəbəkə meydana gətirir. 

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} __Dil__ qrammatik quruluşu tərcümə alqoritmlər yaratmaq, məsələn, qrafik istifadə modellenmiştir bilər. 

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Qrafiklərdə __ehtimal__ , __oyun nəzəriyyəsi__ və __maliyyə riyaziyyatında__ bir çox tətbiq var. 

:::

---
> id: social

### Sosial şəbəkələr 

Nəhayət, gündəlik həyatda mövcud olan qrafiklərin ən yaxşı bir nümunəsini düşünək: sosial media. Burada vertices [[insanları]] təmsil edir [[| dostlar | şəbəkələr]] və kənarlar dostluq, bəyənmə, abunə və ya izləyiciləri təmsil edir. 

Sosial media qrafiklərini çəkərkən, eyni məktəbə gedən və ya eyni şəhərdə yaşamış ola bilən qarşılıqlı dostların müəyyən __qruplarını__ görə bilərik. İnsanların __mərkəzliliyini__ də müəyyənləşdirə bilərik ki, bu da bir vertexin nə dərəcədə yaxşı bağlı olduğundan və bir insanın sosial mediada populyarlığının ölçüsü ola bilər. 

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow

2014-cü ildə Facebookun 1,4 milyard aktiv istifadəçisi və cəmi 200 milyarddan çox dostluğu var. Bütün Facebook istifadəçilərinin yarısının 200-dən çox dostu var və dostlarımızın əksəriyyətinin oxşar sayda dostu olduğundan asanlıqla on minlərlə _dost_ dostumuz ola bilər. 

İndi həyəcan verici bir sual meydana çıxacaq: hər iki təsadüfi Facebook istifadəçisini seçsəniz, birindən digərinə keçmək üçün neçə "dostluq kənarları" na əməl etməlisiniz? Məsələn, dostlar arasındakı məsafə [[1]] , dostların dostları arasındakı məsafə [[2]] və s. 

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

2016-cı ildə Facebook istifadəçilərinin bir-birlərinə necə bağlı olduğunu müəyyənləşdirmək üçün [bir araşdırma](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/) apardı. Tapdılar ki, ortalama olaraq ən çox 3.57 nəfərdən _başqa biri_ ilə Facebook-da əlaqə qurursan. Bura məşhurlar, siyasətçilər və ya hətta qonorar da daxildir! 

Başqa sözlə, bütün dünyada milyardlarla Facebook istifadəçisindən birini seçsəniz, yəqin ki, dostlarınızdan birinin dostunu tanıyan bir dostu olacaq. 3.57 __dərəcə ayrılığın__ olduğunu söyləyirik. 

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---
> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

1929-cu ildə, macar müəllifi [Frigyes Karinthy,](bio:karinthy) ilk növbədə "Altı dərəcə ayrılıq" ideyasını irəli [sürəndə](bio:karinthy) , İnternet və ya sosial media yox idi, lakin dünya artıq bir-birinə daha çox bağlanmağa başlamışdı. 

1967-ci ildə [Stanley Milgram](bio:milgram) ilk empirik təcrübə keçirdi, burada Nebraska və Kanzasda yaşayan 296 iştirakçının Bostonda, Massachusettsdə yaşayan müəyyən bir şəxsə məktub göndərmələri istəndi. Hamısı məktubu göndərmək üçün bir dost seçməli idi, sonra başqa bir dost seçdi. Hər addımda məktub Bostona yaxınlaşdı. Milgram, orta hesabla, yalnız 5.2 ara dostunun - 5.2 dərəcə ayrılıqda olduğunu tapdı. 

:::

Bu gün hər birimiz sosial qarşılıqlı münasibətlərimizin, səyahət, İnternet və texnologiya, elm və sairənin əsasını təşkil edən saysız-hesabsız görünməz qrafiklərin bir hissəsidir.
