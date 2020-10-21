# Öklid Geometrisi

## Giriş

> id: thales
> goals: p1 p2 p3 move
> section: introduction

::: column.grow
Matematik binlerce yıldır mevsim değişikliklerini öngörmek, vergileri hesaplamak ya da tarım alanının büyüklüğünü ölçmek için kullanılıyor.

MÖ 500 yıllarında antik yunanlı matematikçiler, matematiksel örüntüleri çok etkileyici bulmuşlardı ve bunları araştırıp açıklamak istiyorlardı. Tarihte ilk defa, özel bir amaca yönelik değil de, sadece ‘keyif’ için matematik çalışmaya başladılar.
::: column(width=300)

    x-img(src="images/tablet.jpg" width=300 height=210)

{.caption} MÖ 1800 tarihli, geometrik hesaplar içeren bir Babil kil tableti.
:::

Bu matematikçilerden bir tanesi [Miletli Tales](bio:thales)’tir. Geometrik şekiller ile oynarken şaşırtıcı bir keşif yapmıştı:

::: column(width=420)

    x-geopad.sticky(width=420 height=320): svg

::: column.grow
Soldaki kutuda herhangi iki nokta seçerek başlayın.
_{span.reveal(when="p1 p2")} Bu noktalar etrafında yarım bir çember çizelim._

{.reveal(when="p1 p2")} Şimdi bu yarım çemberin [çevresinde](target:circumf) yer alan üçüncü bir nokta seçelim.

{.reveal(when="p3")} Şimdi yarım çemberin uçlarındaki iki nokta ile üzerinde seçtiğiniz üçüncü noktanın oluşturduğu  [üçgeni](target:triangle) çizelim.

{.reveal(when="p3" delay=1000)} Üç noktanın yerini değiştirerek üçgenin tepe [açı](target:angle)sında nasıl bir değişim olduğunu gözlemleyin.
_{span.reveal(when="move")} Her zaman [[90]]° gibi görünüyor!_
_{span.reveal(when="blank-0")} Demek ki bunlar
[[dik |eşkenar|geniş açılı]] üçgenler._
:::

---
> id: thales-1

Tales için bu çok etkileyici bir sonuçtu. Neticede _yarıçemberler_ ve _dik üçgenler_, iki tamamen farklı şekil, neden böylesine temel bir biçimde ilişkili olsunlar ki? Bu keşiften o kadar etkilenmişti ki, bir efsaneye göre, tanrılara şükretmek için koca bir öküzü adak olarak sunmuş.

    figure
      x-img(src="images/temple.svg" width=400 height=170)

Ancak Tales için, sadece böyle bir ilişkiyi _gözlemlemek_ yeterli değilmiş. Bunun _neden_ doğru olduğunu ve sadece denediği örneklerdeki bir tesadüf değil, _her zaman_ doğru olduğunu göstermek istemiş.

Hiç bir şüpheye yer bırakmadan, bir şeyin neden doğru olması gerektiğini mantıksal olarak açıklayan argümanlara [__kanıt__](gloss:proof) denir. Önümüzdeki derslerde _Tales teoremini_ kanıtlamamıza yarayacak bazı geometrik teknikler öğreneceğiz.

---
> id: applications

Fakat geometri sadece teoremleri kanıtlamaya yaramaz. Geometri doğadadır, mimaridedir, teknolojidedir, dizayndadır, yani her yerdedir. Mesafeleri ölçmekten gökdelen inşaasına, uzaya uydu gördermeye kadar geometriye her yerde ihtiyaç duyarız. İşte birkaç örnek daha:

::: column(width=200)

    x-img(src="images/pyramids.jpg" credit="© Ricardo Liberato" width=200 height=200)

{.caption} Geometri sayesinde Mısırlılar devasa, muhteşem düzgünlükte piramitler inşa etmeyi başardılar.
::: column(width=200)

    x-img(src="images/sextant.jpg" width=200 height=200)

{.caption} Denizciler, güneş ve diğer yıldızlar arasındaki açılardan faydalanıp sekstant aracılığıyla denizdeki konumlarını bulurlar.
::: column(width=200)

    x-img(src="images/video-game.jpg" credit="© Eric Lascoña" width=200 height=200)

{.caption} Gerçekçi video ya da film grafikleri üretmek için geometri şarttır.
::: column(width=200)

    x-img(src="images/plane.jpg" width=200 height=200)

{.caption} Geometri sayesinde daha güvenli ve verimli yeni uçak modelleri tasarlayıp test edebiliriz.
::: column(width=200)

    x-img(src="images/cctv.jpg" lightbox width=200 height=200)

{.caption} Beijing’deki bu gökdeleni tasarlarken ve devrilmemesini sağlarken geometrinin anahtar bir rolü vardı.
::: column(width=200)

    x-img(src="images/satellite.jpg" lightbox credit="NASA" width=200 height=200)

{.caption} Geometri sayesinde yıldızların, gezegenlerin ve Dünya’nın yörüngesindeki uyduların gelecekteki konumlarını hesaplarız.
:::

Bu ve sıradaki derslerde, yüzyıllar içinde matematikçiler tarafından keşfedilen, geometrideki pek çok aracı ve tekniği öğreneceğiz. Ayrıca bu tekniklerin, dünyamızın önemli problemleri çözmede nasıl kullanılabileceğini göreceğiz.

---

## Öklid’in Aksiyomları

> section: axioms
> id: points

Kanıt yapmaya başlamadan önce, geometrik nesnelerden daha kolay bahsedebilmek için sıklıkla kullanılan terminolojiye ihtiyacımız var. Bunlar özellikle heyecan verici olan nesneler değil ama zaten çoğunu biliyor olmalısınız:

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move.pulsate(cx=100 cy=30 target="move" label="P")
      circle.move.pulsate(cx=150 cy=100 target="move" label="Q")
      circle.move.pulsate(cx=40 cy=75 target="move")
      circle(x="point(200,50)" target="no-move")
      circle(x="point(70,120)" target="no-move" label="R")

::: column.grow
Bir [__nokta__](gloss:point) uzaydaki belirli bir konumdur. Noktalar bir pozisyonu ifade eder, ama hiçbir  _ölçüsü_ veya _şekli_ yoktur. Büyük harfler kullanılarak adlandırılırlar.

{.r} Mathigon’da, [küçük, içi boş noktalar](target:no-move) hareket ettiremeyeceğiniz sabit noktaları gösterirken, [büyük, içi dolu noktalar](target:move) hareket ettirebileceğiniz interaktif noktaları gösterir.
_{button.next-step} Devam et_

:::

---
> id: lines

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path.green(x="line(point(60,100),point(90,40))" label="a")
      path.red(x="line(point(50,120),point(150,150))" label="b")
      circle.move(name="P" cx=170 cy=55 label="P")
      circle.move(name="Q" cx=200 cy=130 label="Q")
      path.yellow(x="line(P,Q)")

::: column.grow
[__Doğru__](gloss:line) iki yönde sonsuza kadar uzayan sonsuz sayıdaki noktalar kümesidir. Doğrular her zaman düzdür ve aynı noktalar gibi, uzayda yer kaplamazlar  – _genişlikleri_ yoktur.

{.r} Doğrular küçük harfler kullanılarak adlandırılırlar. Ayrıca doğrunun üzerindeki iki noktayı kullanarak da adlandırabiliriz, örneğin
<span class="math"><mover><mi>PQ</mi><mo value="↔">↔</mo></mover></span> veya
<span class="math"><mover><mi>QP</mi><mo value="↔">↔</mo></mover></span>.
Noktaların sırası önemli değil.
_{button.next-step} Devam et_
:::

---
> id: segments

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="a" cx=50 cy=50 label="A")
      circle.move(name="b" cx=90 cy=120 label="B")
      path.red(x="segment(a,b)")
      circle.move(name="c" cx=120 cy=40 label="C")
      circle.move(name="d" cx=210 cy=110 label="D")
      path.blue(x="segment(c,d)")

::: column.grow
{.r} [__Doğru parçası__](gloss:line-segment) sonsuza uzanmayan doğru üzerindeki iki nokta arasında kalan parçadır. Yukarıda ok kullanmadan, doğrular için yaptığımız gibi  `bar(AB)` veya`bar(BA)` olarak adlandırabiliriz. Aynı şekilde noktaların sırasının bir önemi yoktur.
_{button.next-step} Devam et_
:::

---
> id: rays

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="c" cx=40 cy=120)
      circle.move(name="d" cx=60 cy=40)
      path.green(x="ray(c,d)")
      circle.move(name="a" cx=90 cy=90 label="A")
      circle.move(name="b" cx=190 cy=130 label="B")
      path.yellow(x="ray(a,b)")

::: column.grow
 [__Işın__](gloss:ray) _doğru_ ve  _doğru parçası_ arasında bir şeydir: sadece bir yönden sonsuza uzanır. Bunları _güneş ışınları_ gibi düşünebilirsiniz: bir noktada başlarlar (güneş) ve sonsuza kadar devam ederler.

{.r} Işınları adlandırırken, ok ışının sonsuza uzandığı yönü gösterir, örneğin `vec(AB)`.Bu kez noktaların sırası önemlidir.
_{button.next-step} Devam et_

:::

---
> id: circles

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="a" cx=50 cy=60)
      path(x="segment(a,a.add(point(1,1).unitVector.scale(40)))" target="radius")
      path.red(x="circle(a,40)")

      circle.move(name="b" cx=170 cy=90)
      path(x="segment(b,b.shift(60,0))" target="radius")
      path.blue(x="circle(b,60)")

::: column.grow
{.r}  [__Çember__](gloss:circle) merkezdeki bir noktaya aynı [uzaklıktaki](target:radius) noktalar kümesidir. Bu uzaklığa  [__yarıçap__](gloss:circle-radius) denir.
_{button.next-step} Devam et_
:::

---
> id: congruence
> goals: pair-a-a pair-b-b pair-c-c pair-d-d pair-e1-e2 pair-e1-e3 pair-e2-e3 pair-f-f

### Denklik

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path.fill.green(name="x" x="polygon(point(30,30),point(80,20),point(100,80),point(70,110),point(30,90))" label="A" label-class="white" target="move")
      path.fill.green.light(x="x.rotate(1).shift(190,10)" target="move")
      path.fill.green#congruent-path(x="x.rotate(1).shift(190,10)" target="move" label="B" label-class="white")

::: column.grow
Sağdaki iki şekil özdeş görünüyor. Aynı ölçüye ve şekle sahipler, ve şekillerden birini [döndürüp kaydırarak](target:move) diğerini elde edebiliriz. Geometride bu özelliklere sahip iki şekle [__denk__](gloss:congruent) şekiller denir.

Denklik  `≅` sembolü ile gösterilir ve `A ≅ B` şeklinde yazarız.
:::

İşte birkaç farklı geometrik nesne örneği. Denk olanları birbirine bağlayın ve ikiden fazla şeklin birbirine denk olabileceğini unutmayın:

    svg.congruence(width=760 height=320 viewBox="0 0 760 320")
      g.lines
      g.obj(data-q="a" cx="145.2" cy="166.1")
    	polygon(points="119.6,146.6 131.7,186.9 170.9,175.1 139.7,159.5 154.4,145.2")
      g.obj(data-q="a" cx="376.4" cy="73.5")
    	polygon(points="388.1,44.7 353.1,68.2 376,102.2 381.7,67.8 399.7,77.6")
      g.obj(data-q="b" cx="93" cy="258")
    	rect(x="80" y="245" transform="matrix(0.5953 0.8035 -0.8035 0.5953 244.9541 29.6955)" width=26 height=26)
      g.obj(data-q="b" cx="264" cy="200")
        rect(x="251" y="187" transform="matrix(0.1863 0.9825 -0.9825 0.1863 411.3196 -96.636)" width=26 height=26)
      g.obj(data-q="c" cx="77" cy="59.5")
    	rect(x="54" y="36.5" transform="matrix(0.9159 0.4013 -0.4013 0.9159 30.3505 -25.8995)" width=46 height=46)
      g.obj(data-q="c" cx="238" cy="78")
        rect(x="215" y="55" transform="matrix(0.828 -0.5607 0.5607 0.828 -2.8011 146.8683)" width=46 height=46)
      g.obj(data-q="d" cx="510" cy="55")
    	polyline(points="539.9,68.9 489.7,78.3 506.7,27.5")
        path(d="M523.5,72c-2.4-12.7-11.4-22.4-22.9-26.3")
      g.obj(data-q="d" cx="501" cy="258")
    	polyline(points="497.8,287.8 475.2,242.1 528.7,244.7")
        path(d="M490.4,272.9c11.6-5.7,18.5-17.1,19.1-29.1")
      g.obj(data-q="e1" cx="417" cy="166.8")
        ellipse(transform="matrix(0.9464 -0.3229 0.3229 0.9464 -31.5073 143.6043)" cx="417" cy="166.8" rx="30.7" ry="17.1")
      g.obj(data-q="e2" cx="585" cy="138.2")
        ellipse(transform="matrix(0.4618 -0.887 0.887 0.4618 192.197 593.2707)" cx="585" cy="138.2" rx="17.1" ry="30.7")
      g.obj(data-q="e3" cx="618" cy="250.2")
        ellipse(transform="matrix(0.9089 -0.4171 0.4171 0.9089 -48.0564 280.5469)" cx="618" cy="250.2" rx="17.1" ry="30.7")
      g.obj(data-q="f" cx="670.8" cy="72.5")
        line(x1="649.4" y1="65.5" x2="692.1" y2="79.5")
        path(d="M647.6,72c-3.6-1.2-5.5-5-4.3-8.5s5-5.5,8.5-4.3c3.6,1.2,5.5,5,4.3,8.5C655,71.3,651.1,73.2,647.6,72z")
        path(d="M689.7,85.8c3.6,1.2,7.4-0.8,8.5-4.3s-0.8-7.4-4.3-8.5c-3.6-1.2-7.4,0.8-8.5,4.3C684.2,80.8,686.2,84.7,689.7,85.8z")
      g.obj(data-q="f" cx="705.1" cy="190.6")
        line(x1="693.9" y1="210.1" x2="716.4" y2="171.1")
        path(d="M699.9,213.2c-1.9,3.2-6,4.3-9.2,2.5c-3.2-1.9-4.3-6-2.5-9.2c1.9-3.2,6-4.3,9.2-2.5C700.7,205.8,701.8,209.9,699.9,213.2z")
        path(d="M722.1,174.8c1.9-3.2,0.8-7.4-2.5-9.2c-3.2-1.9-7.4-0.8-9.2,2.5c-1.9,3.2-0.8,7.4,2.5,9.2C716.1,179.1,720.2,178,722.1,174.8z")
      g.obj(data-q="g" cx="357" cy="265")
    	polyline(points="372.2,298.7 336,271.4 354.3,230.3")
    	path(d="M362.1,291.2c4.3-5.6,6.9-12.6,6.9-20.2c0-13.4-8-25-19.5-30.1")

---
> id: congruence-1

Eğer  iki doğru parçası [[aynı uzunluğa sahip|kesişir]] ise bu iki doğru parçası denktir. Eğer iki açı  [[aynı büyüklüğe sahip|bir noktada karşılaşırlar]] (derece cinsinden) ise bu iki açı denktir.

_“Denk”_ olmanın  _“eşit”_ olmak anlamına gelmediğini not edelim. Örneğin, denk doğrular ve açılar aynı yönde olmak zorunda değiller. Yine de _denklik_ ve _eşitlik_ birçok benzer özelliğe sahiptir:

* Denklik  __simetriktir__: eğer `X ≅ Y` ise o halde `Y ≅ X`.
* Denklik  __yansıyandır__: her şekil kendisine denktir. Örneğin, `A ≅ A`.
* Denklik  __geçişkendir__: eğer `X ≅ Y` ve `Y ≅ Z` ise o halde `X ≅ Z`.

---
> id: parallel

### Paralel ve Dik

::: column(width=240)

    x-geopad(width=240 height=200): svg
      path.red(x="line(point(30,100),point(70,20))" name="l1" mark="arrow" label="a")
      path.red(x="l1.shift(40,10)" mark="arrow" label="b")
      path.red(x="l1.shift(100,30)" mark="arrow" label="c")
      path.yellow(x="line(point(30,120),point(160,140))" name="l2" mark="arrow2" label="d")
      path.yellow(x="l2.shift(-30,40)" mark="arrow2" label="e")

::: column.grow
Hiçbir zaman kesişmeyen iki doğruya [__paralel__](gloss:parallel) denir. Yönleri aynıdır ve aralarındaki mesafe her zaman [[aynıdır|artar|azalır]].

{.reveal(when="blank-0")} İki paralel doğruya gerçek hayattan iyi bir örnek _demiryolu raylarıdır_. Ancak ikiden fazla doğrunun birbirine paralel olabileceğini not edelim!

{.reveal(when="blank-0")} Diyagramda, paralel doğruları küçük oklar ekleyerek gösteriyoruz. Örnekte, __{.m-red}`a ∥ b ∥ c`__  ve __{.m-yellow}`d ∥ e`__. `∥` sembolü basitçe _“‘e paraleldir”_ anlamına gelir.
:::

---
> id: perpendicular

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path(x="angle(point(60,50),point(50,100),point(100,110))")
      path.blue(x="line(point(50,100),point(100,110))" label="a")
      path.green(x="line(point(50,100),point(70,0))" label="b")

::: column.grow
 _Paralelin_ karşıtı iki doğrunun  90°’lik açı (sağdaki açı) ile kesişmesidir. Bu doğrulara  [__dik__](gloss:perpendicular) denir.

{.r} Bu örnekteki doğrular için _{.b.m-blue}a_ `⊥` _{.b.m-gree}b_ yazarız. `⊥` sembolü basitçe _“‘e diktir”_ anlamına gelir.
_{button.next-step} Devam et_

:::

---
> id: euclid

### Öklid’in Aksiyomları

::: column.grow
Yunan matematikçi usule uygun ispatlar yapmak için bazı _başlangıç noktalarına_ ihtiyacımız olduğunu anladı: herkesin doğruluğunda hemfikir olduğu basit, sezgisel ifadeler. Bu ifadelere  [__aksiyom__](gloss:axiom) (ya da _belit_) denir.

Farklı aksiyomları mantık kurallarının yardımıyla kullanarak daha karmaşık sonuçları kanıtlamak matematikte önemlidir.

Geometrinin ilk beş aksiyomunu yayınlayan Yunan matematikçi [Öklid](bio:euclid) sık sık _geometrinin babası_ olarak anılır.
::: column(width=220)

    img(src="images/euclid.jpg" width=220 height=269)

{.caption} Öklid
:::

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="a" cx=30 cy=130 target="1_point")
      circle.move(name="b" cx=190 cy=30 target="1_point")
      path.red(x="segment(a,b)" target="1_line")

{.text-center }__Birinci Aksiyom__  
Herhangi [iki noktayı](target:1_point) sadece bir [doğru parçasıyla](target:1_line) birleştirebilirsin.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="c" cx=60 cy=100 target="2_segment")
      circle.move(name="d" cx=180 cy=60 target="2_segment")
      path.red(x="line(c,d)")
      path(x="segment(c,d)" target="2_segment")

{.text-center }__İkinci Aksiyom__  
Herhangi bir [doğru parçasını](target:2_segment) bir doğruya genişletebilirsin.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="e" cx=120 cy=80 target="3_center" label="P")
      circle.move(name="f" cx=170 cy=130)
      path(x="segment(e,f)" label="r" target="3_radius")
      path.red(x="circle(e,distance(e,f))" target="3_circle")

{.text-center }__Üçüncü Aksiyom__  
[_P_ noktası](target:3_center) ve [_r_ mesafesi](target:3_radius) verildiğinde, merkezi _P_ ve yarıçapı _r_ olan bir [çember](target:3_circle) çizebilirsin.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="x" cx=50 cy=100)
      circle(hidden name="xa" x="x.translate(point(110,80).subtract(x).rotate(pi/4).unitVector.scale(50))")
      circle(hidden name="xb" x="x.translate(point(110,80).subtract(x).rotate(-pi/4).unitVector.scale(50))")
      path.fill.red(x="angle(xb,x,xa)")
      path.dark(x="segment(x,xa)")
      path.dark(x="segment(x,xb)")

      circle.move(name="y" cx=190 cy=60)
      circle(hidden name="ya" x="y.translate(point(110,80).subtract(y).rotate(pi/4).unitVector.scale(50))")
      circle(hidden name="yb" x="y.translate(point(110,80).subtract(y).rotate(-pi/4).unitVector.scale(50))")
      path.fill.red(x="angle(yb,y,ya)")
      path.dark(x="segment(y,ya)")
      path.dark(x="segment(y,yb)")

{.text-center }__Dördüncü Aksiyom__  
Herhangi iki dik açı birbirine denktir.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="g" cx=170 cy=60 target="5_point" label="P")
      path(name="line5" x="line(point(40,80),point(120,140))" target="5_line" label="L")
      path.red(x="line5.parallel(g)" target="5_parallel")

{.text-center }__Beşinci Aksiyom__  
Verilen bir [_L_ doğrusu](target:5_line) ve _L_ doğrusundan olmayan bir [_P_ noktası](target:5_point) ile _P_ noktasından geçen _L_ doğrusuna [paralel](gloss:parallel) sadece bir doğru çizebilirsin.
:::

{.r} _{button.next-step} Devam_

---
> id: jefferson

::: column.grow
Bu aksiyomların her biri oldukça açık ve aşikar ancak birlikte geometrinin temellerini oluşturuyorlar ve hemen hemen geriye kalan her çıkarım için bunları kullanıyoruz. [Isaac Newton](bio:newton)’a göre _“Bu, çok az prensipten çok fazla şey başarabildiği için geometrinin ihtişamıdır”_.

Öklid bu beş aksiyomu _“Elementler”_ kitabında yayınladı. Matematiğe sistematik yaklaşım tarihinde ilk örnektir ve binlerce yıldır matematik ders kitaplarında kullanılmıştır.

::: column(width=220)

    x-img(src="images/elements.jpg" width=220 height=330 lightbox)

:::

Öklid’in bu çalışmalarını inceleyenlerden biri de Amerikan Başkanı [Thomas Jefferson](bio:jefferson) idi. 1176’da Bağımsızlık Bildirgesi’ni yazarken benzer bir yaklaşımı takip etmek istedi. Birkaç basit “aksiyom” ile başlıyor ve ardından daha karmaşık sonuçları “kanıtlıyor”:

    .parchment “Bu gerçekleri açık bir şekilde görüyoruz: Tüm erkeklerin eşit yaratıldığınız, Yaratıcıları tarafından belirli devredilemez Haklara sahip olduklarını, bunların arasında Yaşam, Özgürlük ve Mutluluk arayışı olduklarını kabul ediyoruz.”

{.text-center.follows} `=>`

    .parchment Bu nedenle, biz … Birleşik Kolonilerin özgür ve bağımsız devletler olduğunu ve olmaya hakları olması gerektiğini ilan ediyoruz.”

Bu Öklid’in matematik konusundaki fikirlerinin tamamen farklı konulara ilham verdiğinin örneklerinden biridir.

---

## Pergel ve çizgilik çizimleri

> section: construction
> id: measuring

Öklid’in beş aksiyomunun uzunluk ve açı _ölçme_ hakkında hiçbir şey içermediğini fark etmiş olabilirsiniz. Şimdiye kadar, alan ve hacim hesaplamalarında çok önemli bir noktaydı.

::: column.grow
Ancak, Tales ya da Öklid’in yaşadığı zamanlarda  bugün olduğu gibi evrensel ölçü birimleri yoktu. Uzunluklar, parmak genişliği ya da kol uzunluğu gibi çoğunlukla vücut parçalarıyla belirtiliyordu. Bu birimler çok da kesin değil ve insandan insana değişiklik gösterebiliyor.

Uzun mesafeleri ölçebilmek için mimarlar  ya da araştırmacılar düğümlenmiş ipleri kullanıyorlardı. Düğümlenmiş ipler eşit aralıklarla düğümlenmiş ip parçalarından oluşuyordu. Ama bu yöntem de yeterince kesin sonuçlar vermiyordu. Farklı ipler farklı yerlerden düğümlenebiliyordu.

    figure: x-img(src="images/knots.jpg" width=370 height=23 style="opacity: 0.8")

::: column(width=200)

    x-img(src="images/units.png" width=200 height=336)

:::

Yunan matematikçiler bu yaklaşımlarla uğraşmak istemediler. Geometrinin pratik uygulamalarındansa altında yatan kurallara daha çok ilgi gösterdiler.

Bu nedenle evrenimizin daha idealleştirilmiş versiyonuyla çıkageldiler; bir noktanın boyutu, bir çizgininse genişliği olamaz. Tabi ki bir kağıda boyutu ya da genişliği olmayan şeyleri çizmek [[çok zordur|imkansızdır]]. Görünür noktalar hep biraz yer kaplayacaktır ve çizgilerin her zaman genişliği olacaktır. İşte bu yüzden bizim çizimimiz her zaman bir “yaklaşımdır”. 

---
> id: tools
> goals: play-l1 play-c1

    figure: img(src="images/divider-1.svg" width=760 height=42)

Aslında Öklid’in aksiyomları, kendi geometri versiyonunda _neyin mümkün_ olduğunu söyler. Çizebilmek için iki çok basit araca ihtiyacımız olduğu ortaya çıkıyor:

::: column(width=320)

    x-geopad.r(width=300 height=240)
      svg
        circle.move(name="a" cx=50 cy=190)
        circle.move(name="b" cx=250 cy=50)
        path.red(name="l1" x="segment(a,b)" hidden)
      x-play-btn

{.text-center} _Düz kenar_, üzerinde işaretler olmayan bir cetvel gibidir. Bunu iki noktayı birleştirmek için (1. Aksiyom’da olduğu gibi), ya da bir çizgiyi uzatmak için kullanabilirsiniz (2. Aksiyom’da olduğu gibi)

::: column.reveal(width=300 when="play-l1")

    x-geopad.r(width=300 height=240)
      svg
        circle.move(name="c" cx=150 cy=120)
        circle.move(name="d" cx=250 cy=150)
        path(x="segment(c,d)")
        path.red(name="c1" x="arc(c,d,1.99*pi)" hidden)
      x-play-btn

{.text-center} _Pergel_, bir nokta etrafında belirli bir çapta çember çizmeye yarar (3. Aksiyom’da olduğu gibi).

:::

---
> id: construction

4. ve 5. Aksiyomlar bir şeyleri çizmekten çok şekillerin özelliklerini karşılaştırmak ile alakalıdır. Bu yüzden özel araçlara ihtiyaç duymazlar.

::: column.grow
Yunan bir matematikçinin sahilde kumda düz kenar yerine uzun tahtalarla, pergel yerine ip parçalarıyla değişik şekiller çizerek geometri hakkında düşündüğünü hayal edebilirsiniz.

Bu aletler ne kadar ilkel görünseler de bunlarla çok fazla sayıda şekil çizebilirsiniz. Pergel ve düz kenar kullanarak değişik geometrik şekiller “inşa” edebilmenin yollarını bulmaya çalışmak matematikçiler için adeta bir yapboz oyununa dönüştü.

::: column(width=340)

    x-img(src="images/archimedes.jpg" width=340 height=265)

{.caption} [Arşimet](bio:archimedes) Romalı istilacılar tarafından öldürülmeden hemen önce geometri çalışıyordu. Son sözü “çemberlerimi bozmayın” olmuştur. 
:::

---
> id: equilateral
> goals: segment0 segment1 segment2 circle1 circle2

::: column(width=320)

    x-geopad.sticky(width=320 tools="move|line|circle" intersections projections="no"): svg

::: column.grow
{.task} Pergel ve düz kenar ile [eşkenar üçgen](gloss:equilateral-triangle) çizimi.

Başlangıç için, sol üstteki kutucuklardan [çizgi kutucuğu](->#equilateral_.tool:nth-child(3)) ile çizgi çiziyoruz. Seçili çizgi kutucuğu ile basitçe bir noktadan diğerine sürüklüyoruz.  Bu parça eşkenar üçgenin bir kenarını oluşturacak.

{.reveal(when="segment0")} Sırada çizgi üzerindeki bir noktayı merkez kabul edip diğer noktada biten iki çember çizmek var.  [Çember kutucuğu](->#equilateral_.tool:nth-child(5)) ile basitçe bir noktadan diğerine sürüklüyoruz. 

{.reveal(when="circle1 circle2")} Şimdiden üçgenimizin iki köşesi oluştu ve üçüncüsü de iki çemberin kesiştiği nokta olacak. Yine çizgi kutucuğunu kullanarak üçgenin kayıp iki kenarını oluşturup üçgeni tamamlayabilirsiniz. 

{.reveal(when="segment1 segment2")} Şimdi [bu iki kenar](target:a) ve [bu iki kenarlar](target:b) çemberin [[çapıdır.|çevresidir.|yarıçapıdır.]], _{span.reveal(when="blank-0")} o zaman aynı uzunlukta olmalılar. Başka bir deyişle üçgenin üç kenarı birbirlerine denktir. Bu yüzden bu üçgen aslında eşkenar üçgendir_.

:::

---
> id: perp-bisector

### Ortanoktalar, Dik Açıortaylar

{.todo} ÇOK YAKINDA – ORTANOKTALAR VE DİK AÇIORTAYLARI OLUŞTURMA


---
> id: angle-bisector

### Açıortaylar

{.todo} ÇOK YAKINDA – AÇIORTAYLARI OLUŞTURMA 

---
> id: impossible

### İmkansız Yapılar

İlerleyen derslerde bu yöntemlerle inşa edilebilecek daha fazla şekil göreceğiz. Ancak Öklid geometrisinin bir sınırı vardır; bazı yapılar ınsadece pergel ve düz kenarla inşa edilmesi imkansızdır. 

::: column.grow
Efsaneye göre bir zamanlar bir Antik Yunan şehri olan Dilos, korkunç bir hastalık ile boğuşur. Delfi’deki kahin, bu hastalığın tanrıların bir cezası olduğunu ve eğer tapınaklarındaki mevcut olan sunağın hacminin iki katı kadar olan yeni bir sunak inşa ederlerse hastalığın biteceğini söyler. 

    figure: img(src="images/altar.svg" width=320 height=140)

::: column(width=300)

    x-img(src="images/delphi.jpg" credit="© De Agostini Editorial" width=300 height=239)
    
{.caption} Delfi’deki tapınağın bir modeli
:::

Şunu unutmamalıyız ki _hacmi ikiye katlamak_ _bir kübün kenarını ikiye katlamakla_ aynı şey değildir. Aslında eğer [[2 boyutlu|1 boyutlu|3 boyutlu]] hacim 2 kat artarsa, kübün [[2 boyutlu|1 boyutlu|3 boyutlu]] kenarı `root(2,3)` kadar artacaktır.

---
> id: impossible-1

Kulağa kolay geliyor ama sadece pergel ve düz kenar kullanarak bir kübü iki katına çıkarmak aslında [Öklid geometri’sinde](gloss:euclidean-geometry) imkansızdır! Diloslular için bu ne yazık ki hiç umudun olmadığı anlamına geliyor. İnşa edilmesi imkansız üç ünlü yapı daha var. Matematikçiler bir sonuç bulabilmek içn çok fazla zaman harcadılar. Ancak başarı elde edemediler.

::: column(width=220)

    figure: img(src="images/impossible-1.svg" width=200 height=180)

{.text-center} __{.m-red} Açıyı üçe bölme__
Açıları nasıl böleceğimizi biliyoruz. Ancak bir açıyı üç eşit parçaya bölmek imkansızdır.

::: column(width=220)

    figure: img(src="images/impossible-2.svg" width=200 height=180)

{.text-center} __{.m-blue} Kübü ikiye katına çıkarma__
Bir kübün kenarı verildiğinde, bu kenardan hacmi iki kat fazla olan başka bir kübün kenarını elde etmek imkansızdır.

::: column(width=220)

    figure: img(src="images/impossible-3.svg" width=200 height=180)

{.text-center} __{.m-green} Çemberi kareleştirme__
Bir çember verildiğinde, bu çemberden çember ile aynı alan sahip bir kare elde etmek imkansızdır.
:::

Şunu unutmamalıyız ki bu problemler cebir veya cetvel  ve iletki kullanılarak kolayca çözülebilirler. Ama  eğer sadece cetvel ve düz kenar kullanmanıza izin verildiyse imkansızdır. 

---

## Daha da fazla inşaat

> section: more-construction
> sectionStatus: dev

TODO

---

## Açılar ve Kanıtlar

> section: proofs
> sectionStatus: dev

TODO

---

## Origami and Kağıt Katlama

> id: origami
> section: origami
> sectionBackground: dark

Geometrik şekilleri inşa etmenin tek yolu cetvel ve pergel çizimleri değildir. Hiç araç gereç kullanmayan başka bir teknik var: __Origami__.

_Origami_ (折り紙) kelimesi, Japonca _oru_(katlamak) ve _kami_(kağıt) kelimelerinden gelir. Amacı yapıştırıcı ya da makas gibi araçları kullanmadan, bir ya da daha fazla kağıt parçasından nesneler yapmak. Harikulade ve etkileyici tasarımlar yapabilirsiniz, bu şekillerin hepsi sadece dikdörtgen şeklinde kağıtlardan yapılmıştır:

::: column(width=186)
    x-img(src="images/origami/origami-1.jpg" lightbox credit="© Dirk Eisner" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-2.jpg" lightbox credit="© Dirk Eisner, Thomas Hull" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-3.jpg" lightbox credit="© ServeSmasher (Flickr)" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-4.jpg" lightbox credit="© Dirk Eisner" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-5.jpg" lightbox credit="© Meenakshi Mukerji" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-6.jpg" lightbox credit="© Meenakshi Mukerji, Dennis Walker" width=186 height=200)
:::

---
> id: crane
> goals: video

Böyle şekilleri yapmak çok vakit alabilir ve son derece hassas çalışmayı gerektirir. Ancak biraz pratik ile siz de yapabilirsiniz!

::: column(width=360)

    x-video(src="https://storage.googleapis.com/mathigon-videos/crane.mp4" poster="images/crane.jpg" width=400 height=400 controls)

::: column.grow
{.step.active(data-t=0)} Sadece kare bir kağıda ihtiyacınız var. Kağıdı iki köşegeninden katlayarak başlayın.

{.step(data-t=16)} Sonra yatay ve dikey merkezlerinden, ama bu sefer ters yönde katlayın.

{.step(data-t=38)} Şimdi kağıdın iki karşılıklı köşesini alın ve gösterildiği gibi birleştirin. Bu bir köşesi açık küçük bir kare oluşturur.

{.step(data-t=51)} Karanin sağ ve sol köşelerini merkezdeki dikey doğruya doğru katlayın. Sonra önünü arkasına çevirip tekrarlayın.

{.step(data-t=83)} Şimdi tepedeki üçgeni yatay çizgiden aşağıya doğru katlayın, ve geçen adımdaki katladığımız parçaları açın.

{.step(data-t=99)} Bu adım zor: Kağıdın alt köşesini alın ve yeni yaptığımız dikey çizgi boyunca en tepesine kadar katlayın. Önceki bazı katlarınız ters dönecek. Önünü arkasına çevirip tekrarlayın.

{.step(data-t=135)} İki ‘bacağın’ aşağı doğru olduğuna emin olun. Sonra sağ ve sol köşeleri ortadaki doğruya doğru katlayın. Arkasını çevirip tekrarlayın.

{.step(data-t=172)} Neredeyse bitti! Sağ tarafı yavaşça açın ve ucunu yukarı doğru katlayın. Bu sırada tersyüz etmeniz gerekecek. Sonra sol tarafta aynısını tekrarlayın.

{.step(data-t=203)} Görüntüdeki gibi katın yönünü değiştirerek bir gaga yapın. Gaganın uzunluğuna kendiniz karar verebilirsiniz.

{.step(data-t=215)} Son olarak, iki kanadı aşağı katlayıp kanatlardan çekin.
:::

---
> id: crane-1

Bu _turna_ en eski ve en ünlü Origami modellerinden biridir. Deneyebileceğiniz daha pek çok [Orgiami modellerimiz](/origami) var.

    figure: x-img(src="images/origami-1.jpg" credit="© Meenakshi Mukerji, Joel Lord, Dirk Eisner, Angie Harms, Michal Kosmulski" width=760 height=118)

---
> id: origami-axioms

### Origami Aksiyomları

Aynen ölçüsüz cetvel ve pergel çizimlerinde olduğu gibi, orgiamide yapabildiğimiz çeşitli katlamalar için bir kaç aksiyom vardır. Bu aksiyomlar ilk defa 1992’de İtalyan-Japon matematikçi Humiaki Huzita tarafından yazıldı.

::: column(width=220 parent="padded-thin origami-axioms")

    x-video(src="images/origami/axiom-1.mp4" width=220 height=220)

{.text-center} Herhangi iki noktayı bağlayan bir doğrudan katlayabilirsiniz.
::: column(width=220)

    x-video(src="images/origami/axiom-2.mp4" width=220 height=220)

{.text-center} Bir _P_ noktasını başka bir  _Q_ noktasının üzerine katlayabilirsiniz. Böylelikle `bar(PQ)` doğrusunun [[kenar orta dikmesi|açıortayı|orta noktası]] oluşur.
::: column(width=220)

    x-video(src="images/origami/axiom-3.mp4" width=220 height=220)

{.text-center} Bir doğruyu başka bir doğrunun üzerine katlayabiliriz. Bu doğrular kesişiyorsa,
böylelikle iki doğru arasındaki açının [[açıortayı|kenar orta dikmesi|orta noktası]]
oluşur.
::: column(width=220)

    x-video(src="images/origami/axiom-4.mp4" width=220 height=220)

{.text-center} Verilen bir _P_ noktası ve bir _L_ doğrusu için, _L_ ‘ye dik ve _P_’den geçen bir kat yapabilirsiniz.
::: column(width=220)

    x-video(src="images/origami/axiom-5.mp4" width=220 height=220)

{.text-center} Verilen _P_ ve _Q_ noktaları ve _L_ doğrusu için, _P_’den geçen ve _Q_’yu  _L_’nin üzerine yerleştiren bir kat yapabilirsiniz.
::: column(width=220)

    x-video(src="images/origami/axiom-6.mp4" width=220 height=220)

{.text-center} Verilen _P_ and _Q_ noktaları ve _K_ and _L_ doğruları için, hem
_P_’yi _K_ üzerine, hem de aynı zamanda _Q_’yu  _L_ üzerine koyacak bir kat yapabilirsiniz.
::: column(width=220)

    x-video(src="images/origami/axiom-7.mp4" width=220 height=220)

{.text-center} Verilen bir _P_ noktası ile _K_ ve _L_ doğruları için, _K_’ye dik ve  _P_’yi _L_’nin üzerine taşıyan bir kat yapabilirsiniz.
:::

---
> id: origami-axioms-1

Sonuç olarak bu aksiyomların, Öklid aksiyomlarından bile daha güçlü olduğu ortaya çıkmıştır.
Sadece kağıdı katlayarak bir açıyı üçe bölebilir ve bir kübün iki katını yapabilirsiniz!
Elbette ki _eğri_ bir çizgi çizmek imkansızdır, ve origami ile bir çemberin alanına sahip kare elde edemeyiz.

    figure: x-img(src="images/origami-2.jpg" credit="© Dirk Eisner, Meenakshi Mukerji, noricum, fdecomite" width=760 height=123)

---
> id: origami-applications
> goals: video

### Origaminin Uygulamaları

Origami kadim bir sanat, ve çok uzun bir süre boyunca gerçek hayata bir uygulaması yoktu, sadece zevk için yapılıyordu. Fakat, origami için geliştirilen tekniklerin, günümüz teknolojisi ve mühendisliği için çok yararlı olabileceği ortaya çıktı:

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/space.mp4" poster="images/space.jpg" width=300 height=225 credit="© Brigham Young University")

::: column.grow

#### Uzayda Origami

Uyduların güç üretmek için büyük güneş panellerine ihtiyacı vardır. Maalesef, uyduları uzaya taşıyan roketlerin taşıma kapasiteleri oldukça sınırlı, üstelik ek ağırlıklar büyük yakıt giderlerine yol açıyor.

Origami teknikleri sayesinde güneş panelleri, uydu uzaya ulaştığı zaman katlanarak açılabiliyorlar. Bazı zekice katlamalar sonucunda paneller çok küçülüp, çok az motora ve mekanik parçaya ihtiyaç duyuyorlar.


:::

---
> id: origami-applications-3
> goals: video

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/stents.mp4" poster="images/stents.jpg" width=300 height=225 credit="© Virtual Point")

::: column.grow

#### İlaç Sektöründe Origami

İlaç sektöründe, origamiden esin alınan fikirler çok daha küçük ölçeklerde uygulanıyor. 2003 yılında araştırmacılar _Origami Stentleri_ geliştirdiler: bunlar kan damarlarına koyulabilen incecik tüpler. Başlangıçta katlılar ancak tıkanmış damarları genişletmek için hastanın vücudunda genişleyebiliyorlar.

:::

---
> id: origami-applications-1

::: column(width=300)

    x-img(src="images/bridge.jpg" width=300 height=225 credit="© Hiroshima University")

::: column.grow

#### Katlanabilir Köprüler

Amerikan ve İngiliz orduları Origami kullanarak katlanabilir ve taşınabilir köprüler geliştirdiler. Bu köprüler hızlıca nehirleri geçmek ve hendekleri aşmak için önemliler, ayrıca önceki tasarımlara göre kurulumları çok daha hızlı.

Deprem ve tsunami gibi felaket durumlarında da, acil müdahale araçlarına geçit vermek için kullanılabilirler. Bu fotoğraf, Japonya’daki Hiroshima üniversitesinde tasarlanan bir prototipe ait: 

:::


---
> id: origami-applications-4
> goals: video

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/marine.mp4" poster="images/marine.jpg" width=300 height=225 credit="© Harvard University")

::: column.grow

#### Denizler altında Origami

Okyanusların derinlikleri, yeryüzünde en az keşfedilmiş bölgelerdendir. Oralarda yaşayan hayvanlar genellikle esnek ve narindirler, bu yüzden incelenmeleri epey zordur. 

Bu resimde, deniz canlılarının etrafını sarabilen [düzgün onikiyüzlü](gloss:dodecahedron) şeklinde bir “tuzak” görüyorsunuz. Onun sayesinde bu canlıları çalışabiliriz. Uzaktan kontrol edilebiliyor ve beş kolunun karmaşık bir şekilde katlanması, sadece tek bir motor ile kontrol edilebiliyor.

:::

---
> id: origami-applications-5

Origami’nin günlük hayatta daha pek çok uygulaması vardır: depremde yıkılmak yerine büzüşebilen evler, arabalardaki katlanmış hava yastıkları, kendisini bir araya getirebilen robotlar, daha verimli paketleme ve hafif hava araçları.

---
> id: origami-wings
> goals: video

### Doğada Origami

Görünüşe göre Origami’nin gücünü kullanan tek canlılar biz insanlar değiliz: doğa bunu milyonlarca yıldır kullanıyor.

Bu fotoğrafta bir __kulağa kaçan__’ın dahice bir örüntü ile katlanabilen kanadını görebilirsiniz. Açıldığı zaman kanat boyutu 10 katına çıkıyor, ki bu da  hayvanlar alemindeki en büyük ‘katlanma oranı’:

::: column(width=300)

    x-img(src="images/wing.jpg" width=300 height=170 credit="© ETH Zürich")

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/wing-animation.mp4" poster="images/wing-animation.jpg" width=300 height=170 credit="© ETH Zürich")

:::

---
> id: origami-wings-1

Açıldığı zaman geniş kanatlar sağlam bir pozisyona gelip böceğin uçmasını sağlıyorlar. Ama en ufak bir temasta kanat geri katlanıyor. Katlandıkları zaman böceğin toprak altında tünel kazmasına olanak verecek kadar küçülüyorlar. Büyük yüzeyleri küçük alanlara sığdırmak için pek çok böcek, yarasalar, yapraklar ve çiçekler benzer katlanma örüntüleri kullanırlar.

Bilim insanları, teknoloji ve mühendislikte taklit edebilmek umuduyla bu böcekleri ve bitkileri çalışıyorlar. Potansiyel uygulama alanlarından bazıları cep telefonları için katlanabilir elektronik parçalar, uydular için genişleyebilir güneş panelleri ya da kendi açılıp kapanan kamp çadırları olabilir.

---
> id: origami-dna
> goals: video

::: column(width=320)

    x-video(src="https://storage.googleapis.com/mathigon-videos/dna.mp4" poster="images/dna.jpg" width=320 height=240 credit="© PyMOL")

::: column.grow

Benzer bir prensip [DNA](gloss:dna)’da, vücudumuzdaki genetik bilginin taşındığı moleküllerde kullanılır.

Her hücremiz yaklaşık 2 metre uzunluğunda DNA içerir. Vücudumuzdaki bütün DNA’yı uç uca ekleyebilseydik, Dünya ile Güneş’in arasındaki mesafenin 140 katı kadar uzun olurdu!

:::

Doğa DNA’yı vücudumuza sığdırmak için, onu bozmayı ya da yırtmayı gerektirmeyen zekice bir yol buldu. Her DNA ipliği burulmuştur, katlanmıştır ve özel moleküller aracılığı ile tutturulmuştur. _Protein katlanması_ denen bu süreç, biyolojideki en karmaşık problemlerden biridir. Nasıl çalıştığını anlamak, bilim insanlarına geleceğin ilaçlarını üretmekte yardımcı olabilir.
