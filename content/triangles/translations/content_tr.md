# Üçgenler ve Trigonometri

## Giriş

> id: intro
> section: introduction

::: column.grow
Kâşifler dünyanın büyük bir kısmını 19. yüzyılın başlarında keşfetmişlerdi. Uzak ülkeler arasında ticaret ve taşımacılık giderek artıyordu ve bu, dünyanın _güncel haritasına_ olan ihtiyacı doğuruyordu.

Bugün yukarıdan fotoğraf çekebilecek uydularımız var  – fakat 200 yıl önce, harita oluşturmak zor ve zaman alıcı bir işti. Bu, [Radhanath Sikdar](bio:sikdar) gibi matematikçiler tarafından yapılırdı, kendisi _Büyük Trigonometrik Araştırma_ üzerine çalışmıştır: Himalaya Dağları dahil Hindistan’ın tümünü ölçmeyi amaçlayan, yüzyıllarca sürecek bir proje.

::: column(width=240)

    x-img.shift-1(src="images/theodolite.jpg" width=240 height=320 credit="Science & Society Picture Library")

{.caption} _Teodolit_, bir ölçüm aracı
:::

Dünya üzerinde, özellikle, en yüksek dağı bulma yarışı ilgi çekiciydi. Birkaç farklı aday vardı  ama yüzlerce kilometre öteden hangisinin en büyük olduğunu söylemek zordu.

Peki bir dağın yüksekliğini nasıl ölçersiniz?

    figure.mountain: include svg/mountain.svg

{.r} Bugün dağların yüksekliğini birkaç santimetreye kadar ölçmek için uyduları kullanıyoruz– ama bu uydular Radhanath Hindistan’ı araştırırken yoktu.
_{button.next-step} Devam_

{.r.reveal(when="next-0")} Dağcılar yükseklikleri belirlemek için _yükseklikölçer_ kullanırlar. Bu araçlar farklı yüksekliklerdeki hava basıncı farkını kullanırlar. Ancak bu da birinin  [her dağın zirvesine](->.mountain-top) çıkmasını gerektirirdi–bir yüzyıl sonrasına kadar başarılamayan oldukça zor bir beceri.
_{button.next-step} Devam_

{.r.reveal(when="next-1")} Aslında önceki derste  [önceki ders](/course/transformations/similarity) yaptığımız gibi, benzer üçgenleri kullanabilirdiniz. Bu metod  [dağın tabanına](->.mountain-base) olan  [mesafeyi](->.mountain-distance) bilmeyi gerektirir : zirvenin direkt aşağısındaki deniz seviyesi noktası. Bunu ağaçlar veya uzun binalar için yapabiliriz, ama dağlar için bu nokta kayanın yüzlerce metre altında saklıdır.
_{button.next-step} Devam_

---
> id: intro-2

::: column(width=320)

    x-img(src="images/hillary.jpg" width=320 height=190)

{.caption} Edmund Hillary ve Tenzing Norgay, 1953’te Everest Dağı’nın tepesine çıkan ilk insanlar olmayı başarmışlardı.

::: column.grow
Ama çok daha gelişmiş geometrik teknikler vardır ve hatta bu teknikler [Radhanath](bio:sikdar)
tarafından dünyanın en yüksek dağının ölçümünde kullanılmıştır: _Everest Dağı_.  Onun ölçümü bugün 8848 metre olan resmi yüksekliğe sadece birkaç metre uzaklıktadır.

Bu derste üçgenlerin pek çok farklı özelliklerini öğreneceksiniz. Bu, dağların yüksekliğini ölçmenizi sağlayacak ama aynı zamanda matematik, fen ve mühendislik alanlarında da temel bir öneme sahiptir.
:::

---

> id: applications

Üçgenler özeldir çünkü onlar özellikle  _güçlüdürler_. Tahta kirişlerden ve menteşelerden yapıldında _bükemeyeceğiniz_ tek çokgendir – örneğin kolayca bastırıp bükebileceğiniz dikdörtgenlerin aksine.
{.todo} YAKINDA – Animations

---
> id: applications-1

Bu özellik üçgenleri ağır yük taşıyabilecekleri inşaatlarda özellikle kullanışlı yapar.

::: column(width=200)
    x-img(src="images/truss-bridge.jpg" credit="© ykanazawa1999, Flickr" width=200 height=200 lightbox)

{.caption} ‘Kirişli köprü’, üçgen barlarla desteklenir.
::: column(width=200)
    x-img(src="images/pylon.jpg" width=200 height=200 lightbox)

{.caption} Yüksek-voltajlı elektrik direğinde üçgenler
::: column(width=200)
    x-img(src="images/bike.jpg" width=200 height=200 lightbox)

{.caption} Bisikletler bile denge için üçgenleri kullanır.
:::

---
> id: applications-2
> goals: video

Üçgenler ayrıca en az kenara sahip en basit çokgenlerdir. Bu onları karmaşık eğrisel yüzeylere yaklaşmak için özellikle uygun hale getirir. Bu fiziksel yapılarda kullanılır…

::: column(width=200)
    x-img(src="images/st-mary.jpg" credit="Kunstlerbob, Wikipedia" width=200 height=200 lightbox)

{.caption} “The Gherkin”, Londra’da bir gökdelen
::: column(width=200)
    x-img(src="images/hk-bank.jpg" credit="WiNG, Wikipedia" width=200 height=200 lightbox)

{.caption} Hong Kong’ta Çin Bankası Kulesi
::: column(width=200)
    x-img(src="images/museum.jpg" credit="Andrew Dunn, Wikipedia" width=200 height=200 lightbox)

{.caption} Londra’da British Müzesi’nin avlusu
:::

::: column.grow
...ayrıca görsel dünyada da. Bilgisayar tarafından oluşturulan grafiklerde (örneğin video oyunları veya filmler için), tüm yüzeylere çok küçük üçgen “kafesler” kullanılarak yaklaşılmaktadır.
Sanatçılar ve yazılım mühendisleri, bu üçgenleri gerçekçi bir şekilde hareket ettirebilmek ve renklerini ve yapılarını hesaplayabilmek için, geometri ve trigonometri hakkında bilgi sahibi olmalıdır.
::: column(width=220)
    x-img(src="images/dolphin.jpg" width=220 height=135)
:::

    figure: x-video(src="https://storage.googleapis.com/mathigon-videos/tiger.mp4" poster="images/tiger.jpg" width=480 height=270 credit="© UCTV, The STEAM Channel")

---

## Üçgenlerin Özellikleri

> id: angle-sum
> section: properties

Basitten başlayalım: üçgen, üç kenarı (kenarlar [doğru parçası](gloss:line-segment)’dır), üç köşesi (kenarların birleştiği [noktalar](gloss:point)) olan kapalı bir şekildir. Aynı zamanda toplamları [[180]] derece olan üç [iç açısı](gloss:internal-angle) vardır.

---
> id: classification

Açıların büyüklüklerine göre üçgenleri sınıflandırabiliriz:

::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a1" x="point(40,60)")
      circle(name="b1" x="point(40,140)")
      circle(name="c1" x="point(180,140)")
      path.fill.red(x="angle(a1,b1,c1)")
      path(x="polygon(a1,b1,c1)")

{.caption} Bir __dik açılı üçgen__in yalnız bir [dik açısı](gloss:right-angle) vardır.


    x-geopad(width=220): svg
      circle(name="a2" x="point(30,30)")
      circle(name="b2" x="point(150,60)")
      circle(name="c2" x="point(190,190)")
      path.fill.blue(x="angle(c2,b2,a2)")
      path(x="polygon(a2,b2,c2)")

{.caption} Bir __geniş açılı üçgen__in yalnız bir [geniş açısı](gloss:obtuse-angle) vardır.

::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a3" x="point(60,50)")
      circle(name="b3" x="point(30,180)")
      circle(name="c3" x="point(190,130)")
      path.fill.green(x="angle(a3,b3,c3)")
      path.fill.green(x="angle(b3,c3,a3)")
      path.fill.green(x="angle(c3,a3,b3)")
      path(x="polygon(a3,b3,c3)")

{.caption} Bir __dar açılı üçgen__in [[üç]] [dar açısı](gloss:acute-angle) vardır.
:::

---
> id: labels

::: column.grow
Kolay lık olsun diye üçgenleri genelde benzer şekillerde işaretleriz. Köşeler ilk üç büyük harf [_A_, _B_ ve _C_](target:vertex), kenarlar ilk üç küçük harf [_a_, _b_ ve _c_](target:side) ve açılar Yunan harfleri [`α`, `β` ve `γ`](target:angle) (“alpha”, “beta” ve “gamma”) ile işaretlenirler.
 
[_A_ köşesinin _karşısındaki_ kenar](target:X) _a_, [_A_ köşesindeki açı](target:Y) `α` ile işaretlenir. Aynı işaretlendirme _B_/_b_/`β` ve _C_/_c_/`γ` için de geçerlidir.
::: column(width=220)

    x-geopad(width=220 height=200): svg
      circle.move.red(name="a" cx=80 cy=30 label="A" target="vertex X Y")
      circle.move.blue(name="b" cx=30 cy=170 label="B" target="vertex")
      circle.move.green(name="c" cx=190 cy=150 label="C" target="vertex")
      path.red(x="angle(c,a,b).sup" label="α" target="angle Y")
      path.blue(x="angle(a,b,c).sup" label="β" target="angle")
      path.green(x="angle(b,c,a).sup" label="γ" target="angle")
      path.red(x="segment(b,c)" label="a" target="side X")
      path.blue(x="segment(a,c)" label="b" target="side")
      path.green(x="segment(b,a)" label="c" target="side")

:::

---
> id: medians
> goals: s0 s1 s2 move

### Medyanlar 

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line" projections="no"): svg
      circle.move(name="a" cx=75 cy=75 target="ratio")
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      path(x="triangle(a,b,c)")
      
      circle.green(name="ab" x="line(a,b).midpoint")
      circle.blue(name="ac" x="line(a,c).midpoint")
      circle.red(name="bc" x="line(b,c).midpoint" target="ratio")
      
      circle.yellow.reveal(name="d" x="triangle(a,b,c).centroid" when="blank-0" animation="pop" target="ratio")
      
      path.red.transparent(x="segment(a,d)" label="2" target="ratio")
      path.red.transparent(x="segment(d,bc)" label="1" target="ratio")
      

::: column.grow
Kenarlarının orta noktaları işaretlenmiş bir üçgen görüyorsunuz.

Bir üçgende bir köşe ile karşısındaki orta noktayı birbirlerine bağlayan doğru parçasına [__medyan__](gloss:median) denir. Bu üçgenin üç medyanını da çizin. _{span.reveal(when="s0 s1 s2")}Üçgenin köşelerini hareket ettirince ne oluyor?_

{.reveal(when="move")} Öyle görünüyor ki medyanlar hep [[bir noktada kesişiyorlar.|uzunlukları aynı kalıyor.|diğerlerini ortadan bölüyorlar.]]. _{span.reveal(when="blank-0")}Bu noktaya [__ağırlık merkezi__](gloss:centroid) diyoruz._

{.reveal(when="blank-0")} Medyanlar birbirlerini her zaman [2:1 oranıyla](target:ratio) keserler. Üç medyan için de köşeden ağırlık merkezine olan uzaklık ağırlık merkezinden orta noktaya olan uzaklığın hep [[iki katıdır.|üç katıdır.|aynısıdır.]]
:::

---
> id: center-of-mass
> goals: move

Bir kartona bir üçgen çizin, kesip çıkarın ve üç medyanı da bulun. Eğer düzgün kesip medyanları da düzgün çizerseniz ağırlık merkezine bir kalem koyduğunuzda üçgeni bu kalemin üzerinde dengeli bir şekilde taşıyabilirsiniz ya da tam ağırlık merkezine yapıştırdığınız bir iple odanızın tavanına yere tam paralel olacak şekilde asabilirsiniz.

    figure: img(src="images/center-of-mass.jpg" width=600 height=190)

Bunun olmasının sebebi ağırlığın bu merkez etrafında dağılmış olmasıdır. Fizikte de bu noktaya __ağırlık merkezi__ denmektedir.

Ağırlık merkezinden geçen bir doğru üçgeni alanları birbirlerine eşit olan iki parçaya ayırır. Sağdaki animasyonda [mavi noktayı](target:move) hareket ettirin. Kırmızı ve yeşil bölgelerin alanları birbirlerine eşit olacaktır.

---
> id: circumcircle
> goals: s0 s1 s2

### Dik Doğru ve Çevrel Çember

::: column(width=300)

    x-geopad.sticky(tools="move|perpBisector" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75 label="A" target="b-blue b-red")
      circle.move(name="b" cx=50 cy=250 label="B" target="b-red")
      circle.move(name="c" cx=250 cy=200 label="C" target="b-blue")
      path(x="triangle(a,b,c)")

      circle.reveal.red(x="line(a,b).midpoint" when="blank-0")
      circle.reveal.blue(x="line(a,c).midpoint" when="blank-0")
      circle.reveal.green(x="line(b,c).midpoint" when="blank-0")

      circle.reveal.yellow(x="triangle(a,b,c).circumcircle.c" name="d" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(d,c,1.99*pi)" name="circumcircle")

::: column.grow
Herhangi bir doğrunun ona [dik doğru](gloss:perpendicular-bisector)su demek o doğru ile [[orta noktaları|uç noktaları]]nda dik açı yapan doğru demektir.

{.reveal(when="blank-0")}Bu üçgenin kenarlara dik olan doğrusunu çiziniz. _{.lgrey} Kenara dik doğruyu çizmek için bir uç noktadan diğerine sürükleyerek bir doğru çiziniz._

{.reveal(when="s0 s1 s2")} Daha önce de olduğu gibi bu üç dik doğru bir noktada kesişiyorlar. Bu noktanın bir özelliği var.

{.reveal(when="s0 s1 s2")} Dik doğrunun üzerindeki bir noktaya dik doğrunun kesiştiği kenarın üzerindeki köşelerden çizilmiş iki doğrunun uzunlukları aynıdır. Örneğin, [mavi dik doğru](target:b-blue) üzerindeki bir noktanın _A_ ve _C_ noktalarına uzaklıkları eşit. [Kırmızı dik doğru](target:b-red) üzerindeki bir noktanın [[A ve B|A ve C|B ve C]] noktalarına uzaklığı eşittir.

{.reveal(when="blank-1")} [Kesişim noktası](target:center) bütün dik doğruların üzerindedir. O zaman üçgenin [[köşelerine|kenarlarına]] olan uzaklıkları eşittir.

{.reveal(when="blank-2")} Bu demek oluyor ki bütün köşelere dokunan bir çember çizebiliriz. Bu çembere üçgenin [__çevrel çember__](gloss:circumcircle)i diyoruz. Merkezi ise üç dik doğrunun kesişimi oluyor ve __çevrel merkez__ diye adlandırılıyor.
:::

---
> id: circumcircle-1

Aslında, herhangi üç nokta verildiğinde bu üç noktanın orta noktalar olduğu bir üçgen çizilip daha sonra bu üç noktanın üzerinde olduğu kenarlara dik doğrular çizildikten sonra bu üç doğrunun kesişim noktasını merkez kabul eden ve üçgenin köşelerine değen bir çember çizilebilir. (Tabi eğer başta verilen üç nokta [[aynı doğrultuda|paralel]] ise bu yapılabilir.)

---
> id: incircle
> goals: s0 s1 s2

### Açı Ortaylar ve İç Teğet Çember

Muhtemelen şu an şuna takıldınız: bir yapı alıyoruz, kenarlara/açılara üç kez bir şeyler yapıyoruz ve daha sonra kesişimlerin ne gibi özellikleri var onlara bakıyoruz.

::: column(width=300)

    x-geopad.sticky(tools="move|angleBisector" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250 target="b-blue")
      circle.move(name="c" cx=250 cy=200 target="b-red")

      path.fill.light.red(x="angle(c,a,b).sup" name="xa")
      path.fill.light.blue(x="angle(a,b,c).sup" name="xb")
      path.fill.light.green(x="angle(b,c,a).sup" name="xc")

      path(x="segment(a,b)" label="a" target="b-blue b-red")
      path(x="segment(a,c)" label="b" target="b-red")
      path(x="segment(b,c)" label="c" target="b-blue")

      circle.reveal.yellow(x="triangle(a,b,c).incircle.c" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(triangle(a,b,c).incircle.c,triangle(a,b,c).incircle.at(0),1.999*pi)" name="incircle")

::: column.grow
Bir açı iki ayrı eş parçaya bölen doğrulara [açı ortay](gloss:angle-bisector) diyoruz. Yandaki üçgenin açı ortaylarını çiziniz. _{.lgrey} Bir açı ortay çizmek için açıların bulunduğu köşeler ile ortadaki nokta arasında bir çizgi çizmeniz gerekir_.

{.r.reveal(when="s0 s1 s2")} Yeniden hatırlatalım, üç doğru tek bir noktada kesişir. Böyle bir şeyi doğal karşılıyoruz ama aslında bunun olması için elimizde geçerli bir sebep yok -- üçgenler yalnızca özel şekillerdir.
_{button.next-step} Devam_

{.reveal(when="next-0")} Açı ortayın üzerindeki herhangi bir noktanın, açıyı oluşturan iki kenara olan uzaklıkları eşittir. Örneğin, [mavi doğru](target:b-blue)nun üzerindeki bir nokta _a_ ve _c_ kenarlarına eşit uzaklıkta bulunmakta. [kırmızı doğru](target:b-red)nun üzerindeki bir nokta [[a ve b|a ve c|b ve c]] kenarlarına eşit uzaklıkta bulunmakta.

{.reveal(when="blank-0")} [Kesişim noktası](target:center) bütün açı ortayların üzerindedir. Yani üçgenin üç [[kenarına|köşesine]] olan uzaklıkları birbirlerine eşittir.

Yani bu kesişim noktası çevresinde kenarlara dokunan bir çember çizebiliriz. Bu çembere __iç teğet çember__, bu çemberin merkezine ise __iç teğet merkezi__ diyoruz.
:::

---
> id: area

### Alan ve Yükseklikler

::: column.grow
Bir [dikdörtgen](gloss:rectangle)in alanını bulmak kolay: yükseklik ve genişliği çarparak bulabiliyoruz. Bir üçgenin alanını bulmaksa nispeten daha zordur. Bir dikdörtgenin içine üçgen “yerleştirmek” ile başlayalım.
_{button.next-step} Devam_

{.reveal.r(when="next-0")} Dikdörtgenin genişliği üçgenin [alt kenarı](target:base) oluyor (__taban__ diye adlandırılır.). Dikdörtgenin yüksekliği üçgenin tabanına karşısındaki köşeden uzatılmış [dik yükseklik](target:height) oluyor.
_{button.next-step} Devam_

{.reveal(when="next-1")} Yükseklik üçgeni iki parçaya ayırır. Yükseklik tarafından iki ayrılmış [dikdörtgendeki üçgenden farklı alanların](target:gap) üçgendeki alanlar ile aynı olduğunu gözlemleyebiliriz.

{.reveal(when="blank-0")} Artık dikdörtgenin alanı ile uğraşabiliriz. Yani üçgenin alanı dikdörtgenin alanının yarısı olacak:

{.text-center.reveal(when="blank-0")} `A = 1/2 ×` [{.step-target.pill.red} taban](target:base)
`×` [{.step-target.pill.blue} yükseklik](target:height)
::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move(name="a" cx=40 cy=220)
      circle.move(name="b" cx=260 cy=220)
      circle.move(name="c" cx=190 cy=80)
      circle(hidden x="line(a,b).project(c)" name="d")
      circle(hidden x="a.add(c).subtract(d)" name="e")
      circle(hidden x="b.add(c).subtract(d)" name="f")

      path.fill.green.reveal(x="polygon(a,d,c)" when="next-1" target="gap")
      path.fill.green.transparent(x="polygon(a,e,c)" target="gap")

      path.fill.yellow.reveal(x="polygon(b,d,c)" when="next-1" target="gap")
      path.fill.yellow.transparent(x="polygon(b,f,c)" target="gap")
      
      path.dark(x="polygon(a,b,c)")
      path.red.reveal(x="polygon(a,b,f,e)" when="next-0" animation="draw")
      path.blue.reveal(x="segment(c,d)" label="yükseklik" when="next-0" delay="1000" target="height")
      path.blue.reveal(x="angle(c,d,b).sup" when="next-0" delay="1000" target="height")
      path.red.reveal(x="segment(a,b)" label="taban" when="next-0" delay="1000" target="base")

:::

---
> id: altitudes

Bir üçgenin alanını hesaplamak için herhangi bir kenarını __taban__ olarak düşünüp o kenarın karşısındaki köşeden tabana __yükseklik__ çizdikten sonra (bu yükseklik tabana [[diktir|paraleldir]]) yüksekliğin uzunluğu ile tabanın uzunluğunun çarpımının yarısını almak yeterli olacaktır.

{.reveal(when="blank-0")} Üçgenlerde bu __yükseklikler__ genelde [__uzunluk__](gloss:triangle-altitude) diye adlandırılırlar. Bir üçgende üç tane [[uzunluk]] vardır.

---
> id: altitudes-1

::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a" cx=75 cy=75 label="A")
      circle.move(name="b" cx=50 cy=250 label="B")
      circle.move(name="c" cx=250 cy=200 label="C")
      
      path(x="triangle(a,b,c)")
      path.altitude.red(hidden x="line(a,b).perpendicular(c)")
      path.altitude.blue(hidden x="line(a,c).perpendicular(b)")
      path.altitude.green(hidden x="line(b,c).perpendicular(a)")
      circle.yellow(hidden x="triangle(a,b,c).orthocenter" target="center")

::: column.grow
Tıpkı [medyanlar](gloss:median), [dik doğrular](gloss:perpendicular-bisector)
ve [açı ortaylar](gloss:angle-bisector) konusunda olduğu gibi bu üç uzunluğun kesiştikleri bir nokta vardır. Bu noktaya [__yükseklik merkezi__](target:center) diyoruz.

[Dar açılı üçgenler](gloss:acute-triangle)de yükseklik merkezi üçgenin [[içindedir.|dışındadır.|bir kenarıdır.]]

{.reveal(when="blank-0")} [Geniş açılı üçgenler](gloss:obtuse-triangle)de yükseklik merkezi üçgenin [[dışındadır.|içindedir.|bir kenarıdır.]]

{.reveal(when="blank-1")} [Dik açılı üçgenler](gloss:right-triangle)de yükseklik merkezi üçgenin [[bir kenarıdır.|içindedir.|dışındadır.]] İki uzunluk aslında üçgenin iki kenarıdır.
:::

---

## Üçgen Orta Segmentleri

> section: midsegments
> sectionStatus: dev
> id: midsegments
> goals: s0 s1 s2

::: column(width=300)

    x-geopad.sticky(tools="move|line" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      circle.red(name="p" x="line(a,b).midpoint")
      circle.red(name="q" x="line(a,c).midpoint")
      circle.red(name="r" x="line(b,c).midpoint")
      path(x="triangle(a,b,c)")
      
      path.transparent.fill.red(x="polygon(a,p,q)" target="triangles")
      path.transparent.fill.blue(x="polygon(b,p,r)" target="triangles")
      path.transparent.fill.yellow(x="polygon(c,q,r)" target="triangles")
      path.transparent.fill.green(x="polygon(p,q,r)" target="triangles")
      path.transparent.fill.red(x="polygon(a,b,c)" target="large")

::: column.grow
Bir [__orta segment__](gloss:triangle-midsegment) üçgenin iki kenarının orta noktalarını birbirlerine bağlayan doğru parçasıdır. Bu üçgenin orta segmentlerini çiziniz.

Gördüğünüz gibi bu orta segmentler üçgeni [dört küçük üçgen](target:triangles)e ayırıyor.

{.reveal(when="s0 s1 s2")} Bu küçük üçgenler -ortadaki ters dursa bile- [[denktir.|üst üste binmiştir.|farklı boyutlardadır.]] _{span.reveal(when="blank-0")} Aynı zamanda hepsi [büyük üçgen](target:large)e_ _{span.reveal(when="blank-1")} `1/2`’lik oranla [[benzerdir.|denktir.]]_ 

{.reveal(when="blank-1")} Buradan üçgen orta segmentleri hakkında bir gerçek ortaya çıkarabiliriz:

::: .theorem.reveal(when="blank-1")
__Orta Segment Teoremi__
Bir üçgenin orta segmenti karşısındaki kenara paraleldir ve uzunluğunun yarısı kadardır.
:::
:::

---

{.todo} COMING SOON – More on triangle midsegments, and how they relate to
similarity and proportionality.

---

## Üçgende Eşlik

> id: sss-construction
> section: congruence
> goals: draw-base draw-c1 draw-c2

Şimdi herhangi üç kenarın bir üçgen oluşturup oluşturmadığını kontrol edebiliriz, bu kenarlarla tam olarak nasıl bir üçgen _inşa edeceğimizi_ düşünelim.

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line|circle"): svg

::: column.grow
{.task} Kenar uzunlukları 4cm, 5cm ve 6cm olan bir üçgen çizelim.

{.r} Yandaki kutuya, üçgenin  __6cm__ uzunlukta olan en uzun kenarını çizin.  _{span.reveal(when="draw-base")}  Şimdiden üçgenin üç köşesinden  [iki](target:base) tanesini biliyoruz – zor olan sonuncusunu bulmak.
*{button.next-step} Devam*_


{.reveal(when="next-0")} Sonra, köşelerden birinin etrafına yarıçapı __4cm__ olan bir çember _{span.reveal(when="draw-c1")} ve diğer köşenin etrafına da yarıçapı __5cm__ olan başka bir çember çizin._

{.reveal(when="draw-c2")} Üçgenin üçüncü köşesi, bu iki çemberin [[kesişimidir|merkezidir|yarıçapıdır]]. _{span.reveal(when="blank-0")}
Şimdi onları bir üçgen oluşturmaları için birleştirebiliriz._

{.reveal(when="blank-0" delay="3000")} Çemberler aslında 
[[iki kez|üç kez|sonsuz sayıda]] kesişir: _{span.reveal(when="blank-1")} biri [üstte](target:top), diğeri [altta](target:bottom). Bu kesişimlerden herhangi birini seçebiliriz ve böylece birbirine [[eş|eşit kenarlı|dik]] iki üçgen elde ederiz._

:::

---
> id: congruence

### Eşlik Şartları

Peki aynı uzunluktaki üç kenar ile _farklı_ bir üçgen inşa etmemiz mümkün mü?

Yukarıda zaten iki üçgen inşa etmiştik, fakat ikisi de eş üçgenlerdi. Aslında, aynı üç kenar uzunluğuna sahip olan herhangi iki üçgen eştir. Bu [__KKK Eşlik Şartı__](gloss:triangle-sss) olarak adlandırılır. (“Kenar-Kenar-Kenar”).

Artık üçgenlerin şu iki kuralı sağladığını biliyoruz: “AA” iki üçgenin [[benzer|eş|dönüşüm]] olduğunu ve “KKK” ise iki üçgenin [[eş|benzer|eşit]] olduğunu ifade eder. İşte birkaç eşlik şartı:


---
> id: congruence-1

::: .theorem
İki üçgen eştir ancak ve ancak aşağıdaki koşullardan biri doğru ise:

    .row.padded-thin
      div(style="width: 150px")
        .text-center: strong KKK
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="segment(a,b)")
          path.red(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption Tüm kenarlar eştir.
        
      div(style="width: 150px")
        .text-center: strong KAK
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption İki kenar ve bu kenarların  #[strong arasındaki] açı eştir.
        
      div(style="width: 150px")
        .text-center: strong AKA
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(c,a,b)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption İki açı ve bu kenarlara #[strong bitişik] olan kenar eştir.
        
      div(style="width: 150px")
        .text-center: strong AAK
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(b,c,a)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption İki açı ve bu iki açının bitişiğinde olmayan bir kenar eştir.
:::

---
> id: cpoct

Bu koşulları “kısayollar” olarak düşünebilirsiniz: iki üçgenin denk olup olmadığını kontrol etmek için sadece yukarıdaki koşullardan birini kontrol etmeniz gerekir.

İki üçgenin eş olduğunu _bildiğiniz zaman_ ,  karşılık gelen _tüm_ açıların ve kenarların eş olduğunu biliyor olacaksınız. Bu sıklıkla [__EÜKK__](gloss:cpoct), ya da  “Eş üçgenlerde karşılıklı kısımlar eştir” şeklinde adlandırılır.

Tüm bu şartların [[üç]] farklı değer (ya kenarları ya da açıları) içerdiğine dikkat edelim!

---
> id: contruction

### Üçgenlerin İnşası

Bu bölümün başında, bir üçgenin, üç kenarını bildiğimizde, nasıl inşa edileceğini gördük. Benzer şekilde, yukarıdakieşlik şartlarının her biri için üçgen oluşturmanın çeşitli yolları vardır.

::: tab
#### KAK

::: column(width=300)
{.todo} YAKINDA GELECEK – Animation
::: column.grow
{.task} Aralarındaki açı 40° olacak şekilde 5cm ve 3cm uzunluğa sahip iki kenarı olan bir üçgen çizelim.

Önceki gibi, üçgenin kenarlarından birini çizerek başlıyoruz.

Sonra, köşelerden birinin etrafında 40°’lik bir açı belirlemek için  açıölçer kullanın. Bu açıyı bir nokta ile işaretleyelim.

Üçgenin ikinci kenarını oluşturmak için köşeyi ölçümümüzle birleştirebiliriz.

Bu kenarın 3cm uzunluğunda olması gerektiğini biliyoruz, o halde bir cetvel yardımıyla bu mesafeyi ölçelim ve üçgenin üçüncü köşesini işaretleyelim.

Son olarak, üçgeni tamamlamak için son iki köşeyi birleştirebiliriz.
:::

Tabii ki önce 3cm uzunluğundaki kenarı çizebilirdik veya 40°’lik açıyı diğer köşenin etrafında ölçebilirdik. Ancak her durumda, sonuçta elde edeceğimiz üçgen şimdikine eş olacaktı.

::: tab
#### AKA

::: column(width=300)
{.todo} YAKINDA GELECEK – Animation
::: column.grow
{.task} İki açısının ölçüsü 70° ve 50° ve bu açılara bitişik kenarının uzunluğu 5cm olan bir üçgen çizelim.

5cm’yi bir cetvel kullanarak ölçüp üçgenin ilk kenarını çizelim.

Şimdi bir köşenin etrafıda 70°’lik açı diğer köşenin etrafında ise 50°’lik açıyı  ölçmek için açıölçer kullanalım. (Hangi yönde olduğu önemli değil – sonuçta elde edeceğimiz üçgenler eş olacak.)

Açıların köşelerle birleştirilmesi üçgeni tamamlar.
:::

::: tab
#### AAK

::: column(width=300)
{.todo} YAKINDA GELECEK – Animation
::: column.grow
{.task} İki açısının ölçüsü 40° ve 50° ve bu açılara bitişik kenarın uzunluğu 5cm olan  bir üçgen çizelim.

5cm’yi bir cetvel kullanarak ölçüp üçgenin ilk kenarını çizelim.

Yine bu kenarın bir köşesinden açıölçer yardımıyla 40°’lik bir açı ölçelim ve üçgenin ikinci kenarını çizelim. Fakat henüz çizeceğimiz bu kenarın nerede sonlanacağını bilmiyoruz.

Bunun yerine, bu kenarın etrafından herhangi bir nokta seçelim, bu nokta üçüncü köşeymiş gibi düşünelim ve 50°’lik bir açı ölçelim.

Gördüğünüz üzere, bu pek işe yaramıyor: üçüncü kenar henüz A köşesiyle bağlanmadı. Bunu düzeltmek için, onu kaydırmamız lazım: A’dan geçen paralel bir doğru çizelim. (Paralel doğruların nasıl inşa edildiğini [önceki derste](/course/euclidean-geometry/geometric-construction) öğrenmiştiniz.)

Şimdi üstteki iki açı ters eş açılardır yani ölçüleri 50° olmalı. AAK üçgenimizi tamamlamak için yanlış olan ilk doğruyu silebiliriz.

:::

::: tab
#### KKA
KKA inşası biraz farklıdır. “KKA” şartının yukarıdaki eşlik şartları listesi arasında olmadığını farketmişsinizdir, yani iki üçgeni KKA ile kıyaslamak, üçgenlerin eş olduğunu söylemek için yeterli değildir. Bu size nedenini açıklayacak:

::: column(width=300)
{.todo} YAKINDA GELECEK – Animation
::: column.grow
{.task} Kenar uzunlukları 4cm ve 5cm olan ve bunların arasında bulunmayan bir açının ölçüsünün 50° olduğu bir üçgen çizin.

Her zamanki gibi, 5cm uzunluğundaki kenarı çizerek başlayalım.

Sonra, bu kenarın köşerinden birinin etrafında 50°’lik bir açı ölçelim ve üçgenin ikinci kenarını çizelim.Fakat henüz çizeceğimiz bu kenarın nerede sonlanacağını bilmiyoruz.

Üçüncü kenarı 4cm uzunluğunda olmalı.  Açıölçer kullanarak, ilk çizdiğimiz kenarın diğer köşenin etrafına yarıçapı 4cm olan bir çember çizebiliriz.

Üçgenin son köşesi ikinci kenar ve çemberin kesişimi sayesinde elde edilir. Ancak bu durumda, iki kesişim noktası var!

Bu iki üçgen açıkça eş değildir. Bu şu anlama gelir; kenar uzunlukları 4cm ve 5cm olan ve  bunların arasında bulunmayan bir açının ölçüsünün 50° olduğu iki farklı üçgen vardır.
KKA, iki üçgenin eş olduğunu belirlemek için yeterli değil.
:::
:::

---

## Pisagor Teoremi

> id: pythagoras
> section: pythagoras

Geometride önemli bir noktaya ulaştık – matematikteki en ünlü [teoremlerden](gloss:theorem) birini ifade edebilir ve anlayabiliriz: __Pisagor Teoremi__. Adını antik Yunan matematikçisi [Sisamlı Pisagor’dan](bio:pythagoras) alır.

::: .theorem
::: column.grow
__Pisagor Teoremi__  
Dik açılı bir üçgende, [__hipotenüsün__](target:hypot) (dik açının karşısındaki kenar) uzunluğunun karesi diğer iki kenarın uzunluklarının kareleri toplamına eşittir. Diğer bir deyişle,
 
{.text-center} _{span.circled.green}`a^2`_ + _{span.circled.blue}`b^2`_ =
_{span.circled.yellow}`c^2`_

_Tersi de doğrudur: eğer bir üçgendeki kenarlar
a*{sup}2* + b*{sup}2* = c*{sup}2* eşitliğini sağlarsa, bu üçgen [[dik açılıdır|dar açılıdır|geniş açılıdır]]._
::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a" cx=82 cy=160 target="hypot")
      circle.move(name="b" cx=218 cy=160 target="hypot")
      circle.move(name="c" cx=120 cy=100 project="arc(line(a,b).midpoint,a,pi).contract(0.2)")
      
      path.fill.green(x="polygon(b,c,b.rotate(-pi/2,c),c.rotate(pi/2,b))" label="a²" label-class="white")
      path.fill.blue(x="polygon(c,a,c.rotate(-pi/2,a),a.rotate(pi/2,c))" label="b²" label-class="white")
      path.fill.yellow(x="polygon(b,a,b.rotate(pi/2,a),a.rotate(-pi/2,b))" label="c²" label-class="white")
      
      path.dark(x="segment(b,c)" label="a")
      path.dark(x="segment(a,c)" label="b")
      path.dark(x="segment(a,b)" label="c" target="hypot")
      path.dark.thin(x="angle(b,c,a)")

:::
:::

---
> id: pythagoras-1

::: column(width=220)

    img(src="images/ladder.svg" width=220 height=300)

::: column.grow
Dik açılar her yerdedir, ve bu nedenle Pisagor Teoremi çok kullanışlıdır.

Burada __{.m-red}6m__ uzunluğunda duvara yaslanmış bir merdiven görüyorsunuz. Merdivenin alt kısmı duvardan  __{.m-blue}1m__  uzaklıkta bulunuyor. Duvara ne kadar ulaşır?

Merdiven, duvar ve yerin bir dik üçgen oluşturduğunu fark edelim. Pisagor Teoremi’ni kullanarak şunu elde ederiz:

    
    table.eqn-system
      tr
        <td><mrow class="b m-green"><msup><mi>h</mi><mn>2</mn></msup></mrow><mo>+</mo><mrow class="b m-blue"><msup><mn>1</mn><mn>2</mn></msup></mrow></td>
        <td><mo>=</mo><mrow class="b m-red"><msup><mn>6</mn><mn>2</mn></msup></mrow></td>
      tr
        <td><mo>⇒</mo><mrow class="b m-green"><msup><mi>h</mi><mn>2</mn></msup></mrow></td>
        <td><mo>=</mo><x-blank-input solution="35"></x-blank-input></td>
      tr.reveal(when="blank-0")
        <td><mo>⇒</mo><mrow class="b m-green"><mi>h</mi></mrow></td>
        <td><mo>=</mo><msqrt><mn>35</mn></msqrt><mo>=</mo><mn>5.92m</mn></td>

:::

{.reveal(when="blank-0")} Elinizdeki dik üçgenin iki kenarını bildiğinizde, Pisagor Teoremi üçüncü kenarı bulmanıza yardımcı olur.

---
> id: pythagoras-proof

### Pisagor Teoremi’nin Kanıtı

Pisagor Teoremi, Babilliler, Mezopotamyalılar, Hintliler ve Çinliler tarafından biliniyordu – ancak Pisagor düzgün, matematiksel kanıtı yapan ilk kişidir.

Aslında Pisagor Teoremi’ni kanıtlamanın birçok farklı yolu vardır. Burada her birinin farklı strateji kullandığı üç farklı örneği görebilirsiniz:

::: tab.proof-1

#### Yeniden Düzenleme _{span.check(when="blank-0 blank-1")}_

::: column.grow

Sağdaki şekle bakın. Şekildeki karenin bir kenarı _a_ + _b_ uzunluğundadır, [dört dik üçgen](target:triangle) ve aynı zamanda alanı [[<msup><mi>c</mi><mn>2</mn></msup>|_a_ – _b_|_a_ + _b_]] olan [daha küçük bir kare](target:square) içerir.

{.reveal(when="blank-0")} Şimdi karedeki üçgenleri yeniden düzenleyelim. Sonuç yine dik açılı dört üçgen ve aynı zamanda alanları [[<msup><mi>a</mi><mn>2</mn></msup> ve <msup><mi>b</mi><mn>2</mn></msup>|<msup><mi>c</mi><mn>2</mn></msup>|<msup><mfenced><mi>a</mi><mo>+</mo><mi>b</mi></mfenced><mn>2</mn></msup>]] olan iki kare içerir.

{.reveal(when="blank-1")} Kırmızı bölgenin alanını, yerdeğiştirmeden
_{span.hover-target}önce_ ve _{span.hover-target}sonra_ olarak karşılaştırdığımızda şunu görürüz:

{.text-center.reveal(when="blank-1")} `a^2 + b^2 = c^2`.

{.reveal(when="blank-1")} Bu [Pisagor’un](bio:pythagoras) bulduğu orijinal kanıttır. _{span.qed}_

::: column(width=240)

    x-geopad(width=240)
      svg
        circle(hidden name="a" x="point(20,20)")
        circle(hidden name="b" x="point(220,20)")
        circle(hidden name="c" x="point(220,220)")
        circle(hidden name="d" x="point(20,220)")

        circle.move(name="e" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
        circle(name="f" hidden x="b.add(e.subtract(a).flip)")
        circle(name="g" hidden x="c.subtract(e.subtract(a))")
        circle(name="h" hidden x="d.subtract(e.subtract(a).flip)")

        path.thin(x="segment(a,e)" label="a")
        path.thin(x="segment(e,b)" label="b")
        path.thin(x="segment(a,h)" label="b")
        path.thin(x="segment(h,d)" label="a")
        path.thin(x="segment(e,h)" label="c")
        path.thin(x="segment(e,f).shift(0,x*distance(h,a))" label="c")

        path.square(x="polygon(a,b,c,d)")
        path.tri(x="polygon(a,e,h)" target="triangle")
        path.tri(x="polygon(c,g,f).shift(-x*distance(d,g),-x*distance(b,f))" target="triangle")
        path.tri(x="polygon(d,h,g).shift(x*distance(e,a),0)" target="triangle")
        path.tri(x="polygon(b,f,e).shift(0,x*distance(h,a))" target="triangle")
        path.square.transparent(x="polygon(e,f,g,h)" target="square")

      .label(style="left: 120px; top: 120px;") c²
      .label.var(style="left: ${10 + e.x/2}px; top: ${230 - e.x/2}px;") a²
      .label.var(style="left: ${110 + e.x/2}px; top: ${130 - e.x/2}px;") b²

    x-slider(steps=100)

:::
::: tab.proof-2

#### Cebir _{span.check(when="blank-2 blank-3 blank-4")}_

::: column.grow
Öncekiyle aynı şekli yanda görüyoruz, ama bu kez Pisagor Teoremi’ni  _yeniden düzenleme_ yerine _cebir_ kullanarak kanıtlayacağız.

Büyük karenin bir kenarı `a + b` uzunluğunda ve alanı
[[(_a_ + _b_)<sup>2</sup>|_a_<sup>2</sup> + _b_<sup>2</sup>|_c_<sup>2</sup>]].

{.reveal(when="blank-2")} Her birinin alanı
[[<mfrac><mn>1</mn><mn>2</mn></mfrac>_ab_|(_a_ × _b_)<sup>2</sup>|<mfrac><mn>1</mn><mn>2</mn></mfrac>(_a_ + _b_)]] olan [dört üçgen ](target:triangle)  ve bir de alanı  [[_c_<sup>2</sup>|(_a_ + _b_)<sup>2</sup>|_a_ × _b_]] olan [bir kare](target:square) içeriyor.

{.reveal(when="blank-3 blank-4")} Eğer tüm bu bilgileri kullanacak olursak, şuna ulaşırız


    table.eqn-system.reveal(when="blank-3 blank-4")
      tr
        <td><msup><mfenced><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></mfenced><mn>2</mn></msup></td>
        <td><mo>=</mo><mn>4</mn><mo>×</mo><mfrac><mn>1</mn><mrow><mn>2</mn></mfrac><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup></td>
      tr
        <td><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mrow><mn>2</mn><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><mrow><mn>2</mn><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup></td>
      tr
        <td><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></td>

{.reveal(when="blank-3 blank-4")} Ve bir kez daha Pisagor Teoremi’ni kanıtladık.
_{span.qed}_

::: column(width=240)

    x-geopad(width=240): svg        
      circle.move(name="e1" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
      circle(name="f1" hidden x="b.add(e1.subtract(a).flip)")
      circle(name="g1" hidden x="c.subtract(e1.subtract(a))")
      circle(name="h1" hidden x="d.subtract(e1.subtract(a).flip)")

      path.thin(x="segment(a,e1)" label="a")
      path.thin(x="segment(e1,b)" label="b")
      path.thin(x="segment(a,h1)" label="b")
      path.thin(x="segment(h1,d)" label="a")
      path.thin(x="segment(e1,h1)" label="c")
      path.thin(x="segment(e1,f1).shift(0,x*distance(h,a))" label="c")

      path.square(x="polygon(e1,f1,g1,h1)" target="square")
      path.tri(x="polygon(a,e1,h1)" target="triangle")
      path.tri(x="polygon(c,g1,f1)" target="triangle")
      path.tri(x="polygon(d,h1,g1)" target="triangle")
      path.tri(x="polygon(b,f1,e1)" target="triangle")

:::
::: tab.proof-3

#### Benzer Üçgenler _{span.check(when="next-0 next-1 next-2 blank-5")}_

::: column.grow
{.r} Burada başka bir dik üçgen görüyorsunuz. Eğer birinin yüksekliğini çizersek, iki farklı daha küçük dik üçgene ayrılır. Bu aynı zamanda hipotenüsü  _c_ de, [{.step-target.i.pill.blue}x](target:x) ve 
[{.step-target.i.pill.green}y](target:y) olarak adlandıracağımız [iki küçük parçaya](target:hypotenuse) böler.
_{span.next-step} Devam_

{.r.reveal(when="next-0")} Şimdi aralarındaki ilişkiyi daha açık görmek için bu iki üçgeni ayıralım…
_{span.next-step} Devam_

{.reveal(when="next-1")} Küçük üçgenlerin ikisi de orijinal üçgenle [ortak bir açıyı paylaşırlar](target:angle). Ayrıca hepsi  [bir dik açıya](target:right) sahiptir.
AA şartından, üç üçgenin de  [[benzer|eş|dik açılı]] olması gerektiğine ulaşıyoruz.

::: column(width=260)

    x-geopad.similar-triangle(width=260): svg
      circle(name="B1" hidden cx=40 cy=100)
      circle(name="X1" hidden cx=170 cy=100)
      circle(name="C1" hidden cx=170 cy=20)
      path.fill.light.red(x="polygon(B1,X1,C1)")
      path.fill.yellow(x="angle(C1,B1,X1).sup" size=25 target="angle")
      path.dark.thin(x="angle(B1,X1,C1).sup" size=10 target="right")
      path.red(x="segment(B1,C1)" label="a" target="a ac")
      path.dark(x="segment(X1,C1)")
      path.blue(x="segment(X1,B1)" label="x" target="x xa")

      circle(name="A2" hidden cx=220 cy=100)
      circle(name="X2" hidden cx=170 cy=100)
      circle(name="C2" hidden cx=170 cy=20)
      path.fill.light.yellow(x="polygon(A2,X2,C2)")
      path.fill.red(x="angle(C2,A2,X2).sup" size=20 target="angle")
      path.dark.thin(x="angle(A2,X2,C2).sup" size=10 target="right")
      path.yellow(x="segment(A2,C2)" label="b" target="b bc")
      path.dark(x="segment(X2,C2)")
      path.green(x="segment(X2,A2)" label="y" target="y yb")

      circle(name="A" hidden x="point(220,100)")
      circle(name="B" hidden x="point(40,100)")
      circle(name="C" hidden x="point(170,20)")
      circle(name="X" hidden x="point(170,100)")
      path.dark(x="segment(X,C)" target="altitude")
      path.dark.thin(x="angle(B,X,C)" size=10 target="altitude")
      path.fill.yellow(x="angle(C,B,X)" size=25 target="angle")
      path.fill.red(x="angle(X,A,C)" size=20 target="angle")
      path.dark.thin(x="angle(A,C,B)" size=10 target="right")
      path.red(x="segment(B,C)" label="a" target="a xa")
      path.yellow(x="segment(A,C)" label="b" target="b yb")
      path.blue(x="segment(B,X)" label="x" target="hypotenuse x ac bc")
      path.green(x="segment(X,A)" label="y" target="hypotenuse y ac bc")

:::

{.reveal(when="blank-5")} Şimdi zaten benzer çokgenler hakkında bildiğimiz denklemleri kullanabiliriz:

    table.proof-table.reveal(when="blank-5")
      tr
        td
          <p class="text-center"><mrow class="step-target pill blue" data-to="xa"><mfrac><mi>x</mi><mi>a</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill red" data-to="ac"><mfrac><mi>a</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill blue" data-to="x">x</mi><mo>=</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>c</mi></mfra></p>
        td
          <p class="text-center"><mrow class="step-target pill green" data-to="yb"><mfrac><mi>y</mi><mi>b</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill yellow" data-to="bc"><mfrac><mi>b</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill green" data-to="y">y</mi><mo>=</mo><mfrac><msup><mi>b</mi><mn>2</mn></msup><mi>c</mi></mfra></p>

{.r.reveal(when="blank-5")} _{span.next-step} Devam_

{.reveal(when="next-2")} Ancak _c_ = [{.step-target.i.pill.blue}x](target:x) +
[{.step-target.i.pill.green}y](target:y) olduğunu hatırlayın. Böylece

{.text-center.reveal(when="next-2")} `c = a^2/c + b^2/c`

{.text-center.reveal(when="next-2")} `c^2 = a^2 + b^2`

{.reveal(when="next-2")} Bir kez daha Pisagor Teoremi’ni kanıtladık! _{span.qed}_
:::

---
> id: pythagoras-2

Pisagor’un hayatıyla ilgili çok az şey bilinir ve çalışmalarının orijinal hali günümüze kadar ulaşmamıştır. Pisagor, “Sayı ibadeti” denilebilecek bir çeşit dini bir kült , _Pisagorcular_, kurmuştur. Her sayının kendine ait bir karakteri olduğuna inandılar ve bir çok tuhaf geleneği devam ettirdiler.

::: column.grow
Pisagorcular, ilk kez bir [irrasyonel sayı](gloss:irrational-numbers) , `sqrt(2)` , bulmak da dahil bir çok matematiksel keşifle tanınırlar. İrrasyonel sayılar basit bir kesir olarak ifade edilemezler – Pisagorcuları derinden sarsan ve (başarısız bir şekilde) örtbas etmeye çalıştıkları bir kavram!
::: column(width=400)
    x-img(src="images/pythagoreans.jpg" width=400 height=200 lightbox)

{.caption} “Pisagorcular güneşin doğuşunu kutluyor” Fyodor Bronnikov
:::

---
> id: distance-formula

### Uzaklıkları Hesaplama

Pisagor Teoremi’nin en önemli uygulamalarından biri uzaklıkları hesaplamadır.

::: column.grow
{.r} Sağda, koordinat düzlemi üzerinde iki nokta görüyorsunuz. Aralarındaki mesafeyi bir cetvel yardımıyla da ölçebilirdik, ama bu tam olarak doğru değil. Bunun yerine, Pisagor Teoremi’ni kullanmayı deneyelim.
_{span.next-step} Devam_

{.reveal(when="next-0")} Kolayca _x_-ekseni boyunca uzanan [yatay mesafeyi](target:dx) ve _y_-ekseninde uzanan [dik mesafeyi](target:dy) hesaplayabiliriz.
Bu iki doğruyu çizersek, [dik açılı bir üçgen](target:triangle) elde ederiz.

{.reveal(when="next-0")} Pisagor’u kullanarak,

    table.eqn-system.reveal(when="next-0")
      tr
        <td><msup><mi>d</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><msup><mn class="step-target pill blue var" data-to="dx">${b.x-a.x}</mn><mn>2</mn></msup><mo>+</mo><msup><mn class="step-target pill red var" data-to="dy">${b.y-a.y}</mn><mn>2</mn></msup></td>
      tr
        <td><msup><mi>d</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><mn class="var">${(b.x-a.x)*(b.x-a.x) + (b.y-a.y)*(b.y-a.y)}</mn></td>
      tr
        <td><mi>d</mi></td>
        <td><mo>=</mo><msqrt><mn class="var">${(b.x-a.x)**2+(a.y-b.y)**2}</mn></msqrt><mo>=</mo><mn class="var">${round(distance(a,b),4)}</mn></td>

::: column(width=300)

    x-geopad(width=300 height=300 x-axis="-0.5,11.5,1" y-axis="-0.5,11.5,1" grid snap): svg
      circle.move.pulsate(name="a" cx="2" cy="5" label="(${a.x},${a.y})")
      circle.move.pulsate(name="b" cx="9" cy="10" label="(${b.x},${b.y})")
      path(x="segment(a,b)" label="d")
      path.blue.reveal(x="segment(a,point(b.x,a.y))" label="${b.x-a.x}" mark="arrow" when="next-0" target="dx")
      path.red.reveal(x="segment(point(b.x,a.y),b)" label="${b.y-a.y}" mark="arrow" when="next-0" target="dy")
      path.yellow.fill.transparent#tri-move(target="triangle" x="polygon(a,b,point(b.x,a.y))")

:::

---
> id: distance-formula-1

Bu yöntem _herhangi_ iki nokta için işe yarar:

::: .theorem
__Uzaklık Formülü__  
Eğer  (`x_1`,`y_1`) ve (`x_2`,`y_2`) şeklinde iki nokta verilirse,aralarındaki uzaklık şöyle hesaplanır:

{.text-center} `d^2=(x_2−x_1)^2+(y_2−y_1)^2`

{.text-center} `d=sqrt((x_2−x_1)^2+(y_2−y_1)^2)`
:::

---
> id: pythagorean-triples

### Pisagor Üçlüsü

Önceki adımda [üçgenin köşelerini](->#tri-move) hareket ettirdiğiniz için, birçok durumda, hipotenüsün  _d_ uzunluğunun her seferinde bir [[ondalıklı sayı|kesir|tam sayı]] olduğunu farketmişsinizdir.
_{span.reveal(when="blank-0")}Buna rağmen *üç kenarının hepsinin*  de *birer tam sayı* olduğu dik üçgen örnekleri vardır._

---
> id: pythagorean-triples-1

::: column.grow
En ünlü örnek 3-4-5 üçgenidir. Çünkü `3^2 + 4^2 = 5^2` olduğundan, kenar uzunlukları 3, 4 ve 5 olan her üçgen dik üçgendir.

Eski Mısırlılar Pisagor Teoremi’ni bilmiyordu, fakat 3-4-5 üçgeni hakkında bilgileri vardı. Piramitleri inşa ederken, dik açıyı en iyi şekilde ölçebilmek için uzunlukları 3,4 ve 5 olan düğümlü ipler kullandılar.
::: column(width=400)

    img(src="images/egypt.png" width=400 height=220)

:::

Bu şekildeki üç tam sayı [__Pisagor Üçlüsü__](gloss:pythagorean-triple) şeklinde adlandırılır.
(3, 4, 5), Pisagor Üçlüsüne bir örnektir. Eğer her sayıyı 2 ile çarparsak, başka bir Pisagor Üçlüsü elde ederiz: (6, 8, [[10]]).


---
> id: pythagorean-triples-grid
> goals: p0 p1 p2 p3 p4 p5

Bu üçlüleri, koordinat sisteminde karelaj noktaları olarak düşünebiliriz.  Geçerli bir Pisagor Üçlüsü için, karelaj noktasından orijine uzaklık bir tam sayı olmalıdır. Aşağıdaki koordinat sistemini kullanarak, Pisagor Üçlülerini bulabilir misiniz?

    figure: x-geopad.r.no-background(width=450 height=450 x-axis="0,16.5,1" y-axis="0,16.5,1" grid axes padding="10 10 25 25" snap)
      svg
        circle.move.pulsate(cx=4 cy=10 name="a")
        path.thick(x="polygon(point(0,0),a,point(a.x,0))")
      .label.var(style="left:${26+12.5*a.x}px; top:425px") ${a.x}
      .label.var(style="left:${26+25*a.x}px; top:${425-12.5*a.y}px") ${a.y}
      .label.var(style="left:${26+12.5*a.x}px; top:${425-12.5*a.y}px") ${round(a.length,2)}

{.reveal(when="p0 p1 p2 p3 p4 p5")} Bu noktaların dağılmasında herhangi bir yöntem farkettiniz mi?


----

## İkizkenar ve Eşkenar Üçgenler

> id: isosceles
> section: isosceles-and-equilateral
> sectionStatus: dev

Other then right-angled triangles, there are a few other triangles with
special properties. In this section we’ll have a look at some of them.

### Isosceles Triangles

We say that a triangle is [__isosceles__](gloss:isosceles-triangle) if it has
two congruent sides. These congruent sides are called the __legs__ of the
triangle, while the third side is called the __base__.

{.todo} COMING SOON – Base angles theorem
Proof by constructing angle bisector and using SAS result.

{.todo} COMING SOON – Find the height of an Isosceles Triangles using Pythagoras


---
> id: equilateral

### Equilateral Triangles

We say that a triangle is [__equilateral__](todo:equilateral-triangle) if all of
its sides  have the same length. You’ve [already
seen](/course/euclidean-geometry/geometric-construction) how to construct an
equilateral triangle using straight-edge and compass.


{.todo} COMING SOON – Size of angles in an equilateral triangle

{.todo} COMING SOON – Area of an equilateral triangle

----

## Trigonometri

> id: trigonometry
> section: trigonometry

Şu ana kadar üçgenin __açıları__ arasındaki ilişki (e.g. toplamları her zaman 180°’dir.)  ile  __kenarları__ arasındaki ilişkiyi (e.g. Pisagor) gördük. Ancak üçgenin kenarları ile açıları arasındaki _bağıntı_ hakkında herhangi bir şey söylemedik.

Örneğin, eğer üçgenin üç kenarını biliyorsam, açılarının ölçüsünü nasıl bulabilirim – üçgeni çizip açıölçer kullanarak ölçmeden ? İşte tam burada __Trigonometri__ devreye girer!

    figure: img(src="images/trig-om-nom.jpg" width=200 height=200)

---
> id: trigonometry-1

::: column.grow
IDik açılı bir üçgen hayal edin, diğer iki açıdan birini de bildiğinizi varsayın, __{.m-red}α__. En uzun kenara [__{.m-yellow}hipotenüs__](target:hyp) denildiğini biliyoruz. Diğer iki kenar genelde  [__{.m-green}komşu__](target:adj) ( __{.m-red}α__ açısının yanında bulunan kenar) ve [__{.m-blue}karşı__](target:opp) ( __{.m-red}α__   açısının karşısında bulunan kenar) olarak adlandırılır.

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Hipotenüs" target="hyp")
      path.blue(x="segment(b,c)" label="Karşı" target="opp")
      path.green(x="segment(a,c)" label="Komşu" target="adj")


:::

Açıları  __{.m-red}α__ ve 90° olan çok çeşitli sayıda üçgen vardır, fakat [AA Şartından](gloss:triangle-aa) hepsinin [[benzer|eş]] olduğunu biliyoruz:

    figure: img(src="images/triangles.svg" width=600 height=240)

---
> id: trig-functions

Tüm bu üçgenler benzer olduğu için kenarlarının orantılı olduğunu biliyoruz. Dahası, tüm bu üçgenler için aşağıdaki oranlar aynıdır:

    p.text-center
      mfrac
        mrow: mtext.m-blue.b Karşı
        mrow: mtext.m-yellow.b Hipotenüs
      span.space
      mfrac
        mrow: mtext.m-green.b Komşu
        mrow: mtext.m-yellow.b Hipotenüs
      span.space
      mfrac
        mrow: mtext.m-blue.b Karşı
        mrow: mtext.m-green.b Komşu

Bunu özetlemeye çalışalım: __{.m-red}α__ için belirli bir değer seçtik ve dik açılı benzer birçok üçgen elde ettik. Bu üçgenlerin hepsinin kenarlarının oranları aynı. __{.m-red}α__ bizim tek değişkenimiz olduğundan bu oranlar ile __{.m-red}α__ arasında bir ilişki olmalı.

Bu ilişkiler __Trigonometrik fonksiyonlardır__ – ve üç tanedir:

::: .theorem
Bu üç Trigonometrik fonksiyon, dik açılı üçgenlerin kenarlarının oranları ve açıları arasındaki ilişkilerdir. Her birinin adı vardır, 3-harfli kısaltmalardan oluşurlar:

::: column.grow

    ul
      li
        strong Sinüs:
        .space
        mtext sin
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b Karşı
          mrow: mtext.m-yellow.b Hipotenüs
      li
        strong Kosinüs:
        .space
        mtext cos
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-green.b Komşu
          mrow: mtext.m-yellow.b Hipotenüs
      li
        strong Tanjant:
        .space
        mtext tan
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b Karşı
          mrow: mtext.m-green.b Komşu

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Hipotenüs")
      path.blue(x="segment(b,c)" label="Karşı")
      path.green(x="segment(a,c)" label="Komşu")

:::
:::

---
> id: trig-functions-1

{.todo} YAKINDA – Trigonometri üzerine daha fazla


---
> id: inverse-trig

### Ters Trigonometrik Fonksiyonlar

{.todo} YAKINDA – Ters Fonksiyonlar



---

## Sinüs ve Kosinüs Kuralları

> id: sine-cosine-rule
> section: sine-cosine-rule

Şu ana kadar Trigonometriyi dik üçgenlerde gördünüz. Ama çoğu üçgen dik değildir ve her üçgen için çalışan iki önemli, sonuç vardır

::: column.grow
::: .theorem
__Sinüs Kuralı__  
Kenarları _a_, _b_ ve _c_ olan ve açıları_A_, _B_ ve _C_ olan bir üçgende,

{.text-center} `(sin(a))/a = (sin(b))/b = (sin(c))/c`
:::


::: column.grow
::: .theorem
__Kosinüs Kuralı__  
Kenarları _a_, _b_ ve _c_ olan ve açıları_A_, _B_ ve _C_ olan bir üçgende,

{.text-center} `c^2 = a^2 + b^2 - 2ab cos(C)`  
`b^2 = c^2 + a^2 - 2ca cos(B)`  
`a^2 = b^2 + c^2 - 2bc cos(A)`
:::

:::

---
> id: trigonometry-4

{.todo} YAKINDA – Kanıt, örnek ve uygulamalar


---
> id: mountains

### Büyük Trigonometrik Araştırma

[Giriş](/course/triangles/introduction) bölümünde dünya üzerindeki en yüksek dağı bulma çalışmasını hala hatırlıyor musunuz? Trigonometri sayesinde, sonunda bunu yapmak için yeterli aracımız var!

::: .sticky-wrap

    figure.sticky.mountain
      x-geopad.no-background(width=760 height=250): svg
        image(href="images/mountain.svg" height=240 width=760 y=5)
        circle(name="a" x="point(25, 230)" target="points")
        circle(name="b" x="point(185, 230)" target="points")
        circle(name="x" x="point(573, 7)" target="")
        circle(name="y" x="point(573, 230)" target="")

        path.fill.red(x="angle(x,a,b)" label="23°" target="angles ang" size=60)
        path.fill.blue(x="angle(x,b,y)" label="29°" target="ang1" size=50)
        path.fill(name="angle-b" x="angle(b,x,a)" label="β" target="b angles" size=100)
        path.fill.green(name="angle-a" x="angle(a,b,x)" label="α" target="a angles" size=25)
        path(x="angle(b,y,x)")

        path.yellow(x="segment(a,b)" target="base right" label="5km")
        path.yellow(x="segment(b,x)" target="")
        path.yellow(name="side-d" x="segment(a,x)" target="d right" label="d")
        path.yellow(x="segment(b,y)" target="right")
        path.yellow(x="segment(x,y)" target="right" label="yükseklik")

Hindistan’daki araştırmacılar aralarında 5 km fark olan iki farklı pozisyondan dağın tepesine açı ölçümü yaptılar. Sonuçlar _{span.pill.step-target.red(data-to="ang")}23°_ ve
_{span.pill.step-target.blue(data-to="ang1")}29°’di_.

_{span.pill.step-target.green(data-to="a")} α açısının_ bir [bütünler açı](gloss:supplementary-angles) olduğunu bildiğimiz için, onun  [[151]]°_{span.reveal(when="blank-0")}  olması gerektiğini biliyoruz. Şimdi üçgenin iç açıları toplamından yola çıkarak *{span.pill.step-target(data-to="b")} β açısının* [[6]]° olduğuna ulaşabiliriz._

{.reveal(when="blank-1")} Artık üçgenin [üç açısını](target:angles) da biliyoruz, _{span.pill.step-target.yellow(data-to="base")}kenarlardan birini_ bildiğimiz gibi. Bu [_d_](target:d) mesafesini bulmak için [[sinüs kuralını|kosinüs kuralını]] kullanmak için yeterli:

    table.eqn-system
      tr.reveal(when="blank-2")
        td
          mfrac
            mrow
              mo sin
              mn.pill.step-target.green(data-to="a") 151°
            mrow.md [[d|5]]
        td
          mo =
          mfrac
            mrow
              mo sin
              mn.pill.step-target(data-to="b") 6°
            mrow.md [[5|d]]
      tr.reveal(when="blank-3 blank-4")
        td: mi d
        td
          mo =
          mo sin
          mn.pill.step-target.green(data-to="a") 151°
          mo ×
          mfrac
            mrow: mn.pill.step-target.yellow(data-to="base") 5
            mrow
              mo sin
              mn.pill.step-target(data-to="b") 6°

      tr.reveal(when="blank-3 blank-4" delay=1000)
        td
        td
          mo =
          mn.pill.yellow.step-target(data-to="d") 23.2 km

{.reveal(when="blank-3 blank-4" delay=2000)}Son bir adım kaldı: şuna bakalım [büyük dik açılı üçgen](target:right). Hipotenüsün uzunluğunu zaten biliyoruz,ama asıl ihtiyacımız olan [[karşı|komşu]] kenar. _{span.reveal(when="blank-5")}  Bunu *sin* fonksiyonunun tanımını kullanarak bulabiliriz:_

    table.eqn-system
      tr.reveal(when="blank-5" delay=1000)
        td
          mo sin
          mn.pill.step-target.red(data-to="ang") 23°
        td
          mo =
          mfrac
            mrow.md [[yükseklik|23]]
            mrow.md [[23|yükseklik]]
      tr.reveal(when="blank-6 blank-7")
        td: mtext height
        td
          mo =
          mo sin
          mn.pill.step-target.red(data-to="ang") 23°
          mo ×
          mn.pill.step-target.yellow(data-to="d") 23

      tr.reveal(when="blank-6 blank-7" delay=1000)
        td
        td
          mo =
          mn.pill.step-target.yellow(data-to="yükseklik") 8.987 km

{.reveal(when="blank-6 blank-7" delay=2000)} Ve bu aslında Dünya’nın en yüksek dağı olan Everest Dağı’nın yüksekliğine oldukça yakın bir değer: 8,848m.
:::

---
> id: mountains-1

Bu açıklama Büyük Trigonometrik Araştırma üzerinde çalışan matematikçiler ve coğrafyacılar tarafından yapılan olağanüstü çalışmaları büyük ölçüde kolaylaştırmaktadır. Deniz seviyesinden başladılar, binlerce kilometre mesafedeki uzaklıkları ölçtüler, tüm ülke genelinde araştırma kuleleri inşa ettiler ve hatta Dünya’nın eğriliğini bile hesapladılar.

    figure: x-img(src="images/himalaya.jpg" width=760 height=320)
