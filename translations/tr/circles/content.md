# Çemberler ve Pi

## Giriş

> section: introduction
> id: intro
> trailer: tBJUNvCBkLo
> color: "#5A49C9"
> level: Intermediate
> next: graph-theory

::: column.grow

İnsanlar oldum olası gökyüzüne baktılar ve Dünya’daki yaşamı yıldızların, gezegenlerin ve ayın hareketleri ile açıklamaya çalıştılar.

Antik Yunanlı astronomlar, gök cisimlerinin __yörünge__ dediğimiz düzenli yollar üzerinde hareket ettiğini bulan ilk kişilerdi. Bu yörüngelerin çembersel olduğunu düşünüyorlardı. Sonuçta çember en “mükemmel” şekildi: her yönde simetrik ve bu sebeple evrenin düzenini altında yatmaya uygun bir tercih.

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption} _Ptolemy evreninde_ Dünya merkezde.

:::

---
> id: radius
> goals: compass

[__Çember__](gloss:circle) üzerindeki her noktanın merkeze uzaklığı aynıdır. Yani bu noktalar bir [pergel](gloss:compass) yardımıyla çizilebilir.

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

{.reveal(when="compass")} Çember ile ilgili bilmeniz gereken üç önemli ölçü var:

* {.reveal(when="compass" delay="1000")} [{.step-target.pill.b.red}Yarıçap](target:r)
 çemberin merkezi ile üzerindeki noktaların arasındaki mesafedir.
* {.reveal(when="compass" delay="4000")} [{.step-target.pill.b.blue}Çap](target:d)
  çemberin iki zıt noktası arasındaki mesafedir. Çemberin merkezinden geçer ve uzunluğu yarıçapın [[iki katıdır|yarısıdır|aynısıdır]].
* {.reveal(when="blank-0")} [{.step-target.pill.b.green}Çevre](target:c)
 çemberin etrafındaki uzunluktur.

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

Çemberin önemli bir özelliği, bütün çemberlerin [benzer](gloss:similar) olmasıdır. Bunu kanıtlamak için bütün çemberlerin sadece [öteleme](gloss:translation) ve
[genleşme](gloss:dilation) hareketleriyle örtüşeceğini gösterebilirsiniz:

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

Benzer çokgenler için karşılık gelen kenarların oranının hep sabit kaldığını hatırlıyor olabilirsiniz. Çember için de benzer bir durum söz konusu: _Bütün çemberler_ için [çevre](gloss:circle-circumference) ile [çapın](gloss:circle-diameter) oranı aynıdır. Her zaman 3.14159…, Yunanca “p” harfi için kullanılan _π_ ile gösterdiğimiz, [__Pi__](gloss:pi) adındaki gizemli bir sayı. Pi’nin herhangi bir düzen izlemeden sonsuza kadar giden ondalık basamakları vardır:

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

Burada çapı 1 olan bir tekerlek var. Çevresini “açtıkça” uzunluğunun tam olarak [[`pi`|`2 * pi`|3]] olduğunu görebilirsiniz:

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

Çapı _d_ olan bir çemberin çevre uzunluğu `C = π × d`dir. Benzer şekilde
 [yarıçapı](gloss:circle-radius) _r_ olan bir çemberin çevre uzunluğu

{.text-center} `C =` [[`2 π r`|`π r`|`π r^2`]]dir.

---
> id: nature

Çemberler tamamen simetriktir, bir çokgenin köşelerinde olduğu gibi “zayıf noktaları” yoktur. Doğada her yerde karşımıza çıkmalarının bir sebebi de bu:

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption} Çiçekler

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

{.caption} Gezegenler

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

{.caption} Ağaçlar

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

{.caption} Meyve

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

{.caption} Köpükten Baloncuklar

:::

{.r} Ve bunun gibi daha pek çok örnek var: gökkuşağından tutun da sudaki dalgalara kadar. Başka bir örnek aklınıza geliyor mu? [Continue](btn:next)

> id: max-area
> goals: area-circle

::: column.grow

Ayrıca çember, verilen bir çevre uzunluğu için en geniş alana sahip şekil. Örneğin elinizde 100\ m uzunluğunda bir ip varsa, bununla en büyük alanı bir çember oluşturarak kapatabilirsiniz(dikdörtgen ya da üçgen gibi başka şekiller ile değil).

Doğada su damlası ya da hava kabarcığı gibi nesneler yüzey alanlarını küçülterek çembersel ya da küresel hale gelerek _enerjiden tasarruf edebilirler_.

::: column(width=320)

    x-select.segmented
      div(data-value="0") Üçgen
      div(data-value="1") Kare
      div(data-value="2") Beşgen
      div(data-value="3") Çember
    svg(width=320 height=200)

{.caption} _Çevre uzunluğu_ = __{.m-green}100__, _Alan_ = __${area}__

:::

---
> id: area
> goals: slider

### Çemberin Alanı

Peki ama bir çemberin alanını nasıl hesaplayabiliriz? Hadi [dörtgenlerin alanını bulurken](/course/polygons-and-polyhedra/quadrilaterals) kullandığımız tekniği deneyelim: şekli çeşitli parçalara bölelim, ve bu parçaları alanını daha önceden bildiğimiz(üçgen ya da dikdörtgen gibi) bir şekil biçiminde birleştirmeye çalışalım.

Aradaki tek fark, çemberler eğri olduğu için bazı yaklaşımlar kullanmamız gerekmesi:

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

Burada bir çemberin ${n1} dilime bölündüğünü görebilirsiniz. Dilimleri hizalamak için çubuğu kaydırın.

{.reveal(when="slider")} Dilim sayısını  ${n1}{n1|6|6,30,2}’a çıkarırsak,
bu şekil gittikçe daha çok bir  [[dikdörtgene|çembere|kareye]] benzeyecek.

{.reveal(when="blank-0")} Dikdörtgenin yüksekliği çemberin
[[yarıçapına|çevre uzunluğuna|çapına]] eşit.
_{span.reveal(when="blank-1")} Dikdörtgenin uzunluğu çemberin
[[çevre uzunluğunun yarısına|çevre uzunluğuna|yarıçapının iki katına]] eşit._
_{span.reveal(when="blank-2")} (Dilimlerin yarısının aşağı, yarısının yukarı baktığına dikkat edin.)_

{.reveal(when="blank-2" delay=1000)} Yani dikdörtgenin toplam alanı yaklaşık olarak  `A = π r^2`.

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

Burada çemberin ${n} halkalara bölünmüş halini görebilirsiniz. Daha önce yaptığımız gibi, çubuğu kaydırarak halkaları “açabilirsiniz”.

{.reveal(when="slider")} Halka sayısını ${n2}{n2|4|2,12,1}’e değiştirirsek,
bu şekil gittikçe daha çok bir  [[üçgene|dikdörtgene|yamuğa]] benzeyecek.

{.reveal(when="blank-0")} Üçgenin yüksekliği çemberin
[[yarıçapına|çapına|çevre uzunluğuna]] eşit.
_{span.reveal(when="blank-1")} Üçgenin taban uzunluğu çemberin [[çevre uzunluğuna|çapının iki katına]] eşit._
_{span.reveal(when="blank-2")} O halde üçgenin toplam alanı yaklaşık olarak_

{.text-center.reveal(when="blank-2")} `A = 1/2 "taban" × "yükseklik" = π r^2`.

:::

---
> id: area-2

Eğer sonsuz tane halka ya da dilim kullanabilseydik yukarıdaki yaklaşımlar tam olarak eşitlik olurdu, ve ikisi de bize çemberin alan formülünü verirdi:

{.text-center.r} `A = π r^2`.
[Devam](btn:next)

---
> id: pi-approximations

### Pi’yi Hesaplamak

Yukarıda gördüğünüz gibi `π = 3.1415926…` basit bir tamsayı değil ve ondalık basamakları bir düzen takip etmeden sonsuza kadar gidiyor. Bu özelliğe sahip sayılara [__irrasyonel sayılar__](gloss:irrational-numbers) denir, ve bu `π`nin `a/b` şeklinde basit bir kesir olarak da ifade edilemeyeceği anlamına gelir.

Aynı zamanda Pi’nin _bütün_ basamaklarını yazamayacağımız anlamına da gelir, sonuçta bunlardan sonsuz tane var. Antik Yunanlı ve Çinli matematikçiler çemberlere çokgenlerle yaklaşarak Pi’nin virgülden sonraki 4 basamağını hesapladılar. Daha fazla kenar ekledikçe çokgenin nasıl da [[daha çok|daha az|tam olarak]] çembere benzediğine bakın:

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

1665’te [Isaac Newton](bio:newton) virgülden sonraki 15 basamağını hesaplamayı başardı. Bugün Pi’nin değerini güçlü bilgisayarları kullanarak çok daha ileriye kadar hesaplayabiliyoruz.

Şu andaki rekor 31.4 trilyon basamak. Bütün bu basamakların yazılı olduğu bir kitabın kalınlığı yaklaşık 400\ km olurdu, [Uluslararası Uzay İstasyonunun](gloss:iss) yörünge yüksekliği kadar.

Tabi ki Pi’nin bir sürü basamağını hatırlamanıza gerek yok. Gerçekte `22/7 = 3.142…` kesiri gayet iyi bir yaklaşım.

:::

---
> id: pi-sequence

Pi’yi hesaplamaya yönelik bir yaklaşım sonsuz sayı serilerini kullanmak. İşte 1676’da [Gottfried Wilhelm Leibniz](bio:leibniz) tarafından bulunan sonsuz bir seri:

{.text-center} `π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} Bu serinin gittikçe daha çok terimini hesaba katarak Pi’ye gittikçe daha çok yaklaşık bir değer buluruz.

---
> id: pi-colours
> goals: hover

::: column.grow

Burada Pi'nin ilk 100 basamağını görebilirsiniz. Basamakların nasıl bir dağılımı olduğunu görmek için bir karenin üzerine gidebilirsiniz.

Çoğu matematikçi Pi’nin daha da ilginç bir özelliği olduğunu düşünüyor: onun bir _normal sayı_ olduğunu düşünüyorlar. Bu şu demek: Pi’nin değerini belirlemek için 0’dan 9’a kadar olan sayılar tamamen rastgele olarak seçilmiş, sanki doğa 10 yüzlü bir zarı sonsuz defa atayım demiş.

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

Eğer Pi normal ise, bu şu demek: aklınıza gelen _herhangi_ bir sayı Pi’nin basamaklarının arasında bir yerde olacaktır. Burada Pi’nin ilk bir milyon basamağında arama yapabilirsiniz. Sizin doğum gününüz Pi’nin basamaklarında var mı?

::: .box.f-red.pi-box
#### Pi’nin Bir Milyon Basamağı

    .pi-controls
      | Bir sayı dizisi arayabilirsiniz:
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---
> id: pi-movies

İstersek Harry Potter gibi koca bir kitabın tamamını çok çok uzun bir sayı dizgesine çevirebiliriz(a = 01, b = 02 gibi). Eğer Pi normak ise, bu sayı dizgesi Pi’nin basamaklarında bir yerde olacaktır, fakat onu bulmak için gereken basamakları hesaplamak milyonlarca yıl alacaktır.

Pi’yi anlaması kolay ve bilimde ve matematikte muazzam bir öneme sahip. Bunun Pi’nin (en azından diğer matematik konularına kıyasla) kültürümüzde alışılmadık bir popülerliğe sahip olmasında bir rolü olabilir.

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")
    p.caption Pi “Müzede Bir Gece 2”deki tabletin gizli şifresi.

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")
    p.caption Profesör Frink (“Simpsons”) Pi’nin 3’e eşit olduğunu söyleyerek bir oda dolusu bilim adamını susturuyor.

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")
    p.caption Spock (“Uzay Yolu”) kötü niyetli bir bilgisayarı Pi’nin son basamağını hesaplamasını isteyerek etkisiz hale getiriyor.

:::

---
> id: pi-day

Her yıl kutlanan bir _Pi günü_ bile var. Tarihi `pi ≈ 3.14` olduğu için 14 Mart ya da `pi ≈ 22/7` olduğu için 22 Temmuz olarak geçiyor.

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

--------------------------------------------------------------------------------

## Derece ve Radyan

> section: radians
> id: degrees

Şimdiye kadar geometride açıları hep [dereceler](gloss:degrees) ile ölçtük. Bir
__{.m-red}tam çember__ dönmek [[360]]°, __{.m-green}yarım çember__
[[180]]°,  __{.m-yellow}çeyrek çember__  [[90]]° gibi.

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

{.r} 360 sayısı çok elverişli çünkü başka bir çok sayıya bölünebiliyor: 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, vb. Bu çemberin pek çok parçasının da tam sayı olması demek. Peki ama hiç 360 sayısının nereden geldiğini merak ettiniz mi? [Devam](btn:next)

---
> id: babylon

::: column.grow

360 derece bugün hala kullanımda olan en eski matematiksel kavramlardan birisi. Antik Babilliler tarafından, 5000 yıldan evvel geliştirildi!

O zamanlar matematiğin en önemli uygulamalarından bir tanesi astronomiydi. Çiftçilerin ürün yetiştirirken bilmesi gereken dört mevsimi _güneş_ belirliyordu. Benzer şekilde, balıkçılar için önemli olan gel-gitleri _ay_ belirliyordu. İnsanlar geleceği tahmin etmek ya da tanrıyla iletişim kurmak için yıldızları inceliyordu.

::: column(width=260)

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption}`sqrt(2)`’yi hesaplamaya yarayan bir Babil tableti.

:::

---
> id: constellations
> goals: rotate

Astronomlar yılın belli bir zamanı gözlenebilen takım yıldızların her gün bir az hereket ettiğini fark ettiler, taa ki yaklaşık 360 gün sonra başladıkları noktaya geri dönene dek. İşte bu yüzden çemberi 360 dereceye bölmüş olabilirler.

    figure: .constellations
      .label.md ${day}. günde gece yarısı
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")


---
> id: constellations-1
> goals: video

Tabi bir yılda aslında 365 gün var(tam olarak 365.242199), ancak Babilli matematikçiler basit güneş saatleri ile çalışıyordu, ve bu yaklaşım iyi bir yaklaşımdı.

Ayrıca zaten kullandıkları 60 tabanlı sayı sistemiyle de uyumluydu(`6 xx 60 = 360` olduğu için). Çoğu birimi [10 tabanında](gloss:base-10) ölçmemize rağmen(mesela bir asırda 100 yıl var), bir dakikada 60 saniye ve bir saatte 60 dakika olmasının sebebi bu 60 tabanlı sistem.

::: column.grow

Çoğumuz için açıları derecelerle ölçmek artık çok doğal: 360° videolar var, kaykaycılar 540° dönüş numaraları yapabiliyorlar, ve fikrini değiştiren birisi 180° dönebilir.

Ancak matematiksel bir bakış açısıyla 360 sayısı tamamen rastgele. Mars’ta yaşıyor olsaydık bir çember 670° olabilirdi, ve Jüpiter’deki bir yıl 10,475 gün.

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} 540 McFlip, 540° lik bir dönüş

:::

---
> id: radians

### Radyan

Bir çemberi belli sayıda parçaya bölmek yerine(360 gibi), matematikçiler genelde açıyı ölçmek için bir  [__birim çemberin__](gloss:unit-circle) (yarıçapı 1 olan bir çember) [çevre uzunluğunu](gloss:circle-circumference) tercih eder.

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

Bir [tam çemberin](action:setState(0)) çevre uzunluğu
_{x-equation.small(solution="2 π" keys="+ × π" numeric)}_ dir.

{.reveal(when="eqn-0")} [Yarın çemberlik bir döndürmeye](action:setState(1)) karşılık gelen uzunluk _{x-equation.small(solution="π" keys="+ × π" numeric)}_ dir.

{.reveal(when="eqn-1")} [Çeyrek çemberlik döndürmeye](action:setState(2)) karşılık gelen uzunluk
_{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_ dir.

{.reveal(when="eqn-2")} Ve böyle devam eder: açıyı bu şekilde ölçmek
[__radyan__](gloss:radians)dır.

:::

---
> id: radians-conversion

Derece cinsinden her açının karşılık geldiği bir radyan ölçüsü vardır. İkisi arasında dönüşüm yapmak çok kolay, aynen metre ve kilometre ya da Celcius ve Fahrenheit arasında çeviri yapmak gibi:

{.text-center} __{.m-red} 360°__ _{span.space}=_ __{.m-green} 2*π* rad__

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left}`=>`_
__{.m-red} 1°__ _{span.space}=_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} rad__

::: column(width=180)

{.text-center} _{span.rotate.right}`=>`_
__{.m-green} 1 rad__ _{span.space}=_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red} °__

:::

---
> id: radians-table

Radyan değerlerini ya _π_nin katları olarak, ya da tek bir ondalık sayı olarak yazabilirsiniz. Derece ve radyan cinsinden verilmiş birbirine denk açılardan oluşan bu tabloyu doldurabilir misiniz?

| __{.m-green}degrees__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_    |
| __{.m-red}radians__   | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2    | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### Kat Edilen Mesafe

Ranyanı birim çemberinin çevresinin üzerinde “kat edilen mesafe” olarak düşünebilirsiniz. Bu özellikle çembersel bir yolda hareket eden cisimlerle çalışırken çok faydalı.

::: column.grow

Örneğin [Uluslararası Uzay İstasyonu](gloss:iss) her 1.5\ saatte Dünyanın çevresinde bir tur atar. Bu da  __dönme hızı__  saatte [[`(2 pi)/1.5`|
`1.5/(2 pi)`|`1.5 * pi`]] radyan demek.

{.reveal(when="blank-0")} Bir [birim çemberde](gloss:unit-circle) dönme hızı _gerçek_ hız ile aynıdır, çünkü çevre uzunluğu radyan cinsinden bir tam dönmeye karşılık gelir(ikisi de `2pi`) .

{.reveal(when="blank-0" delay=1000)} Uluslararası Uzay İstasyonunun yörüngesinin yarıçapı  6800\ km,
yani  _gerçek_ hızı [[`(2 pi)/1.5 xx 6800`|
`(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")}= 28483 km
bölü saat._

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

Bu örnekte radyanın dereceye göre çok daha kullanışlı olduğunu görebiliyor musunuz? Dönme hızını biliyorsak, gerçek hızı bulmak için sadece onu yarıçap ile çarpmamız yeterli.

Bu da başka bir örnek: arabanızın tekerleklerinin yarıçapı 0.25\ m. Eğer 20\ m/s hızla gidiyorsanız, arabanın tekerleri saniyede [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] radyan hızında döner
_{span.reveal(when="blank-0")}(ya da saniyede `80/(2pi) = 13` kez döner)._

---
> id: radians-trig

### Trigonometri

Çoğu basit geometri problemi için dereceler ve radyanlar birbirinin yerine kullanılabilir, tercih ettiğiniz birisini seçebilirsiniz ya da bazen soru hangi birim cinsinden cevaplamanızı istediğinizi belirtir. Fakat daha ileri [trigonometri](gloss:trigonometry) ya da [kalkülüs](gloss:calculus) çalışırsanız radyanların derecelere göre çok daha kullanışlı olduğunu görürsünüz.

::: column.grow

Çoğu hesap makinesinde dereceler ve radyanlar arasında geçiş yapmak için [özel bir tuş](->.button.mode) bulunur. [__sin__](gloss:sin),
[__cos__](gloss:cos) ve __tan__ gibi trigonometrik fonksiyonlar girdilerini açı olarak alırlar, ve __arcsin__, __arccos__ ve __arctan__ gibi ters fonksiyonlar çıktılarını açı olarak verirler. Hesap makinesi ayarlarınız bu açılar için hangi birimlerin kullanılacağını belirler.

Bu hesap makinesini kullanarak şunu hesaplamayı deneyin:

{.text-center} sin(30°) = [[0.5]] _{span.eqn-gap}_ cos(1°) = [[0.999]]<br>
sin(30 rad) = [[-0.988]] _{span.eqn-gap}_ cos(1 rad) = [[0.54]]

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

Radyan kullanmanın  [__sinüs fonksiyonu__](gloss:sin) ile çalışırken özellikle ilginç bir avantajı vardır. Eğer `θ` çok küçük bir açıysa( 20° ya da 0.3 radyandan küçükse), o zaman `sin(θ) ≈ θ` olur. Örneğin

{.text-center} sin(${x}{x|0.1|0,0.5,0.05}) `≈` ${sin(x)}…

{.reveal(when="var-0")} Buna __küçük açı yaklaşımı__ denir ve trigonometrik fonksiyonları içeren kimi denklemleri çok sadeleştirebilir. Bununla ilgili ileride daha çok şey öğreneceksiniz.

--------------------------------------------------------------------------------

## Teğetler, Kirişler ve Yaylar

> section: tangets-chords-arcs
> id: circle-parts

Geçtiğimiz bölümlerde merkez, çap, yarıçap ve çevre gibi çemberin çeşitli kısımlarına verilen isimleri öğrendiniz. Fakat çemberlerin daha karmaşık problemleri çözmek için ihtiyacımız olan daha pek çok geometrik elemanı var:

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle(x="point(150,150)" name="x")

      path.teal.fill.reveal(x="sector(x,d1,pi/2.5)" target="sector" when="next-3" label="Sector" label-class="white")
      path.purple.fill.reveal(x="arc(x,b1,pi/2.5)" target="segment" when="next-4" label="Segment")

      path.black(x="circle(x,100)" name="c")

      circle.red(x="c.at(0.5)" name="a1" target="secant")
      circle.red(x="c.at(0.7)" name="a2" target="secant")
      path.red.thick(x="line(a1,a2)" label="Kesen" target="secant")

      circle.green.reveal(x="c.at(0.8)" name="b1" target="chord" when="next-0" animation="pop")
      circle.green.reveal(x="c.at(0)" name="b2" target="chord" when="next-0" animation="pop")
      path.green.thick.reveal(x="segment(b1,b2)" label="Kiriş" target="chord" when="next-0" animation="draw")

      circle.blue.reveal(x="c.at(0.1)" name="c1" target="tangent" when="next-1" animation="pop")
      path.blue.thick.reveal(x="c.tangentAt(0.1)" label="Teğet" target="tangent" when="next-1" animation="draw")

      circle.yellow.reveal(x="c.at(0.2)" name="d1" target="arc" when="next-2" animation="pop")
      circle.yellow.reveal(x="c.at(0.4)" name="d2" target="arc" when="next-2" animation="pop")
      path.yellow.thick.reveal(x="arc(x,d1,pi/2.5)" label="Yay" target="arc" when="next-2" animation="draw")

::: column.grow(parent="right")

* {.r}  [{.red} Kesen](target:secant) bir çemberi iki noktada kesen doğrudur. [Devam](btn:next)
* {.r.reveal(when="next-0")} [{.green} Kiriş](target:chord) uç noktaları çemberin çevresinde yer alan doğru parçasıdır. [Devam](btn:next)
* {.r.reveal(when="next-1")}  [{.blue} Teğet](target:tangent) bir çembere tek bir noktada değen doğrudur. Bu noktaya __teğet noktası__ denir. [Devam](btn:next)
* {.r.reveal(when="next-2")} [{.yellow} Yay](target:arc) çemberin çevresinin bir parçasıdır. [Devam](btn:next)
* {.r.reveal(when="next-3")} [{.teal} Dilim](target:sector) çemberin içindeki bölgede, bir _yay_ ile _iki yarıçap_ arasında kalan yerdir.
  [Devam](btn:next)
* {.r.reveal(when="next-4")} Son olarak [{.purple} segment](target:segment) çemberin iç bölgesinde bir _yay_ ile _bir kiriş_ arasında kalan yerdir..
  [Devam](btn:next)

:::

---
> id: circle-parts-1

Bu bölümde bütün bu elemanlar arasındaki ilişkilere bakacağız ve her birinin özellikleri hakkında teoremler kanıtlayacağız. Şimdilik tanımları ezberleme konusunda endişelenmeyin, her zaman [terim sözlüğüne](->.footer-link[data-modal=glossarym]) başvurabilirsiniz.

---

### Teğetler

{.todo} COMING SOON!

---

### Kirişler

{.todo} COMING SOON!

---
> id: earth-arc

### Yaylar ve Dilimler

::: column.grow

Antik Yunanlı pek çok bilim insanı Dünyanın küre şeklinde olduğunda hemfikirlerdi. Ufukta kaybolan gemilerden gökyüzünde çembersel hareket eden yıldızlara ortada bir sürü kanıt vardı.

Ne yazık ki kimse Dünyanın _ne kadar büyük_ olduğunu bilmiyordu, taa ki M.Ö. 200 civarında matematikçi [Eratosthenes](bio:eratosthenes) basit geometri kullanarak Dünyanın yarıçapını ölçmek için dahice bir yol bulana kadar. Tek ihtiyacımız olan yaylar ve dilimler ile ilgili biraz daha bilgi.

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

      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad).minor" label="Dilim" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad).minor" label="Yay" target="arc")
      path.purple.thick.transparent(x="arc(c,a,2*pi-angle(b,c,a).rad).major" target="major")

::: column.grow

Çizimden görebildiğiniz gibi, bir [{.red} yay](target:arc) çemberin
[[çevresinin|çapının|teğetinin]] bir parçasıdır, ve bir [{.yellow} dilim](target:sector) çemberin
[[iç bölgesinin|yarıçapının|çevresinin]] bir parçasıdır.

::: .reveal(when="blank-0 blank-1")
_A_ ve _B_ noktaları arasındaki yay genelde ‘arc(AB)’ olarak yazılır. Aslında bu tanım biraz muğlak: _A_ ve _B_’yi bağlayan ancak çemberin öteki tarafından dolaşan [{.purple} ikinci bir yay](target:major) da var.

İki yaydan küçük olanına _küçük(minör) yay_ ve büyük olanına _büyük(majör) yay_ denir. Eğer _A_ ve _B_ noktaları tam zıt konumlardaysa iki yayın da uzunluğu aynıdır ve ikisi de [[yarıçember|çap|çevre]] oluşturur.
:::

:::

---
> id: arcs-1

::: column.grow

Bir yayın uzunluğunu ya da dilimin alanını bulmak için, çemberin merkezinde bu parçalara karşılık gelen açıyı bilmemiz gerekir: buna [{.blue} merkez açı](target:angle) denir.

Yayın, dilimin ve açının nasıl da çemberin bütünü ile _aynı orana_ sahip olduğuna bakın. Örneğin eğer [{.blue} merkez açı](target:angle) [90°](action:set90Deg()) ise, [{.teal} bütün çemberin](target:fangle)  [[çeyreğini|yarısını|üçte birini]] oluşturur.

::: .reveal(when="blank-0")
Demek ki [{.red} yayın uzunluğu](target:arc) da çemberin [{.purple} çevresinin](target:circ) `1/4`ü, ve [{.yellow} dilimin alanı](target:sector) da bütün dairenin [{.orange} alanının](target:area) `1/4`ü.

Bu ilişkiyi bir denklem ile ifade edebiliriz:

{.text-center} `"yay uzunluğu" / "çevre" = blank("dilim alanı","yarıçap","yay alanı") / "daire alanı" = "merkez açı" / blank("360°","180°","90°")`
:::

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ")
      circle.move(cx=85 cy=60 name="b" project="circ")

      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad)" label="Dilim" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad)" label="Yay" target="arc")
      path.fill.blue(x="angle(b,c,a)" target="angle")

      path.fill.orange.transparent(x="circ" target="area")
      path.thick.purple.transparent(x="circ" target="circ")
      path.teal.fill.transparent(x="circle(c,32)" target="fangle")

:::

---
> id: arcs-2

Şimdi bu denklemdeki istediğimiz değişkeni bulmak için yeniden düzenleyebiliriz. Örneğin

::: column(width=320 parent="padded-thin")

| [yay uzunluğu](pill:red) | = | `"çevre" × c/360` |
|                          | = | `2 π r × c/360`          |
{.eqn-system}

::: column(width=320)

| [dilim alanı](pill:yellow) | = | `"daire alanı" × c/360` |
|                              | = | `π r^2 × c/360`         |
{.eqn-system}

:::

Burada _r_ çemberin yarıçapı, _c_ ise merkez açının ölçüsü.

---
> id: arcs-rad

Eğer merkez açı [derece](gloss:degrees) yerine [radyan](gloss:radians) cinsinden ölçülürse aynı denklemleri 360° yerine [[`2 π`|`1/2 π`|`π`]] koymak şartıyla hala kullanabiliriz:

::: .reveal(when="blank-0")
::: column(width=320 parent="padded-thin")

| [yay uzunluğu](pill:red) | = | `2 π r × c/(2π)` |
|                          | = | `r × c`          |
{.eqn-system}

::: column(width=320)

| [dilim alanı](pill:yellow) | = | `π r^2 × c/(2π)` |
|                              | = | `1/2 r^2 c`      |
{.eqn-system}

:::

Denklemlerin nasıl daha sadeleştiğine ve _π_lerin birbirini sadeleştirdiğine dikkat edin. Bunun sebebi, eğer hatırlarsanız [radyan tanımının](/course/circles-and-pi/radians#radians) basitçe yarıçapı 1 birim olan çemberin yaylarının uzunluğu olması.

Şimdi yayları ve dilimleri kullanarak Dünyanın çevresinin nasıl hesaplandığına bakalım. [Devam](btn:next)
:::

---
> id: eratosthenes

Antik Mısırda _Asvan_ şehri Nil nehrinin üzerindeydi. Asvan ilginç bir özelliğe sahip kuyusu ile tanınıyordu: senede sadece bir gün günışığı kuyunun dibine güneş ışığı ulaşıyordu, o da 21 Haziran öğle vakti, _yaz gündönümü_ günü. Tam o anda kuyunun dibi çok iyi aydınlanırdı, ancak duvarları aydınlanmazdı, yani Güneş kuyunun tam tepesindeydi.

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Antik Mısırlılar uzun mesafeleri adım sayısı ile ölçerlerdi.

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} Kimi kaynaklar “Eratosthenes Kuyusu”nun  Nil nehrindeki _Elephantine
Adası_ nda olduğunu söyler.

:::

Matematikçi [Eratosthenes](bio:eratosthenes) _İskenderiye_ 'de, Asvan’ın yaklaşık 800\ km kuzeyinde yaşadı, İskenderiye Kütüphanesinin müdürüydü. İskenderiye şehir merkezinde piramit şeklinde tepesiyle uzun ve dar bir dikilitaş vardı.

Eratosthenes yaz gündönümü öğle vaktinde dikilitaşın gölgesini fark etti, yani Güneş tam olarak tepesinde _değildi_. Bunun sebebinin Dünyanın eğriliği olduğunu düşündü, ve bu bilgi ile gezegenimizin çevresinin hesaplanabileceğini fark etti.

---
> id: eratosthenes-1

::: column.grow

{.r} Burada hem İskenderiye’deki dikilitaşı, hem de Asvan’daki kuyuyu görebilirsiniz. Güneş ışınları direk kuyunun içine düşüyor, ancak dikilitaşa bir açıyla gelerek gölge oluşturuyorlar. [Devam](btn:next)

::: .reveal(when="next-0")

Eratosthenes gölgenin [{.teal} açısını](target:angle1) 7.2° olarak ölçtü. Bu İskenderiye’den Asvan’a olan [{.red} yayın](target:arc) [{.purple} merkez açısı](target:angle2) kadardı, çünkü bunlar [[zıt|dikey|denk]] açılar.

:::

::: .reveal(when="blank-0")
Şimdi yukarıda elde ettiğimiz yay uzunluğu denklemini kullanabiliriz:

{.text-center} `pill("yay uzunluğu","red","arc") / pill("çevre","blue","circ") = (input(7.2)"°") / "360°"`
:::

::: .reveal(when="blank-1")
Denklemi yeniden düzenlersek Dünyanın çevresinin

{.text-center} `pill("çevre","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`

olduğunu buluruz.
:::

::: .reveal(when="blank-2")
Son olarak bir çemberin çevresinin `C = 2 pi r` olduğunu biliyoruz, dolayısıyla Dünyanın yarıçapı

{.text-center} `r_"Dünya" = (40000 "km") / (2 pi) ≈ 6400 "km"`
olur.

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

Eratosthenes’in ölçümü antik çağlardaki en önemli deneylerdendi. Dünyanın boyutuna dair elde ettiği sonuç şaşırtıcı derecede isbetlidir, özellikle elinde sadece çok basit ölçme aletleri olduğunu düşünürsek.

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

Tabi ki orjinal sonuçlarını kilometre gibi modern birimlere çevirmek kolay değil. Antik Yunanda mesafe _stadyum_(yaklaşık 160 m) cinsinden ölçülüyordu, ve evrensel bir standardı yoktu. Her bölgeye göre biraz değişen versiyonları vardı, Eratosthenes hangisini kullandı bilmiyoruz.

İlerleyen yüzyıllarda bilim insanları Dünyanın yarıçapını ölçmek için başka yöntemler de denediler, kimi zaman çok farklı ve yanlış sonuçlara ulaştılar.

Christopher Columbus’u Portekiz’in batısına seyahate yönlendiren böyle yanlış bir ölçümdü. Dünyanın olduğundan çok daha küçük olduğunu varsaydı ve Hindistan’a varmayı umdu. Aslında aradaki başka bir kıtaya vardı: Amerikaya.

:::

---

### Segmentler

{.todo} COMING SOON!

--------------------------------------------------------------------------------

## The Circle Theorems

> section: circle-theorems
> sectionStatus: dev

https://www.mathsisfun.com/geometry/circle-theorems.html
https://mathsmadeeasy.co.uk/gcse-maths-revision/circle-theorems-gcse-revision-and-worksheets/
http://amsi.org.au/teacher_modules/Circle_Geometry.html

__[CC] Identify and describe relationships among inscribed angles, radii, and
chords. Include the relationship between central, inscribed, and circumscribed
angles; inscribed angles on a diameter are right angles; the radius of a circle
is perpendicular to the tangent where the radius intersects the circle.__

An inscribed angle is an angle with its vertex is the circle and its sides
contain chords. The intercepted arc is the arc that is on the interior of the
inscribed angle and whose endpoints are on the angle. The vertex of an inscribed
angle can be anywhere on the circle as long as its sides intersect the circle to
form an intercepted arc.

__Inscribed Angle Theorem__
The measure of an inscribed angle is half the measure of its intercepted arc.
To prove the Inscribed Angle Theorem, you would need to split it up into three
cases, like the three different angles drawn from the Investigation.

__Congruent Inscribed Angle Theorem__
Inscribed angles that intercept the same arc are congruent.

__Inscribed Angle Semicircle Theorem__
An angle that intercepts a semicircle is a right angle.

In the Inscribed Angle Semicircle Theorem we could also say that the angle is
inscribed in a semicircle. Anytime a right angle is inscribed in a circle, the
endpoints of the angle are the endpoints of a diameter. Therefore, the converse
of the Inscribed Angle Semicircle Theorem is also true.

When an angle is on a circle, the vertex is on the circumference of the circle.
One type of angle on a circle is one formed by a tangent and a chord.

__Chord/Tangent Angle Theorem__
The measure of an angle formed by a chord and a tangent that intersect on the
circle is half the measure of the intercepted arc.

From the Chord/Tangent Angle Theorem, we now know that there are two types of
angles that are half the measure of the intercepted arc; an inscribed angle and
an angle formed by a chord and a tangent. Therefore, any angle with its vertex
on a circle will be half the measure of the intercepted arc.

An angle is considered inside a circle when the vertex is somewhere inside the
circle, but not on the center. All angles inside a circle are formed by two
intersecting chords.

__Intersecting Chords Angle Theorem__
The measure of the angle formed by two chords that intersect inside a circle is
the average of the measure of the intercepted arcs.

An angle is considered to be outside a circle if the vertex of the angle is
outside the circle and the sides are tangents or secants. There are three types
of angles that are outside a circle: an angle formed by two tangents, an angle
formed by a tangent and a secant, and an angle formed by two secants. Just like
an angle inside or on a circle, an angle outside a circle has a specific
formula, involving the intercepted arcs.

__Outside Angle Theorem__
The measure of an angle formed by two secants, two tangents, or a secant and a
tangent drawn from a point outside the circle is equal to half the difference
of the measures of the intercepted arcs.

When two chords intersect inside a circle, the two triangles they create are
similar, making the sides of each triangle in proportion with each other. If we
remove AD and BC the ratios between AE, EC, DE, and EB will still be the same.

__Intersecting Chords Theorem__
If two chords intersect inside a circle so that one is divided into segments of
length a and b and the other into segments of length c and d then ab=cd. In
other words, the product of the segments of one chord is equal to the product
of segments of the second chord.

In addition to forming an angle outside of a circle, the circle can divide the
secants into segments that are proportional with each other.

If we draw in the intersecting chords, we will have two similar triangles.

From the inscribed angles and the Reflexive Property (∠R≅∠R),△PRS∼△TRQ. Because
the two triangles are similar, we can set up a proportion between the
corresponding sides. Then, cross-multiply. ac+d=ca+b⇒a(a+b)=c(c+d)

__Two Secants Segments Theorem__
If two secants are drawn from a common point outside a circle and the segments
are labeled as above, then a(a+b)=c(c+d). In other words, the product of the
outer segment and the whole of one secant is equal to the product of the outer
segment and the whole of the other secant.

If a tangent and secant meet at a common point outside a circle, the segments
created have a similar relationship to that of two secant rays. Recall that the
product of the outer portion of a secant and the whole is equal to the same of
the other secant. If one of these segments is a tangent, it will still be the
product of the outer portion and the whole. However, for a tangent line, the
outer portion and the whole are equal.

__Tangent Secant Segment Theorem__
If a tangent and a secant are drawn from a common point outside the circle (and
the segments are labeled like the picture to the left), then a2=b(b+c). This
means that the product of the outside segment of the secant and the whole is
equal to the square of the tangent segment.

---

### Thales' Theorem

Proof using isosceles triangles

Combines all of Euclidean Geometry

{.todo} TODO

--------------------------------------------------------------------------------

## Cyclic Polygons

> sectionStatus: dev
> section: cyclic-polygons

__[CC] Construct an equilateral triangle, a square, and a regular hexagon
inscribed in a circle.__

An inscribed polygon is a polygon where every vertex is on a circle. Note, that
not every quadrilateral or polygon can be inscribed in a circle. Inscribed
quadrilaterals are also called cyclic quadrilaterals. For these types of
quadrilaterals, they must have one special property. We will investigate it here.

This investigation shows that the opposite angles in an inscribed quadrilateral
are supplementary. By cutting the quadrilateral in half, through the diagonal,
we were able to show that the other two angles (that we did not cut through)
formed a linear pair when matched up.

Inscribed Quadrilateral Theorem: A quadrilateral is inscribed in a circle if
and only if the opposite angles are supplementary.

--------------------------------------------------------------------------------

## Küre, Koni ve Silindir

> section: spheres-cones-cylinders
> id: solids

Geçtiğimiz bölümlerde düzlem üzerindeki çemberlerin özelliklerini inceledik. Fakat aslında dünyamız üç boyutlu, o yüzden çemberden yola çıkan üç boyutlu cisimlere de bir göz atalım:

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} [__Silindir__](gloss:cylinder) eğimli bir yüzey ile birleştirilmiş iki eş, paralel çemberden oluşur.

::: column(width=220)

    x-solid(size=220)

{.text-center} [__Koni__](gloss:cone) (tepe noktası adındaki)tek bir noktaya birleştirilmiş çembersel bir tabana sahiptir.

::: column(width=220)

    x-solid(size=220 static)

{.text-center}[__Küre__](gloss:sphere)nin yüzeyindeki her nokta merkezinden aynı mesafededir.

:::

Kürenin tanımının [[çember|yarıçap|küp]] ile neredeyse aynı olduğuna dikkat edin, tek farkı kürenin üç boyutta olması.

---
> id: gasometer

### Silindir

::: column.grow

Burada Almanya’da Oberhausen’daki _Gazmetre_ yi görebilirsiniz. Yakınlardaki fabrika ve elektrik santrallerinde yakıt olarak kullanılan doğal gazı depolamak için kullanılıyor. Gazmetre’nin yüksekliği 120 m, tabanı ve tavanı ise yarıçapı 35 m olan büyük daireler. Burada mühendislerin merak ettiği iki önemli soru olabilir:

* Ne kadar doğal gaz depolanabiliyor? Bu silindirin [[hacmi|alanı|çapı]].
* {.reveal(when="blank-0")} Gazmetreyi inşa etmek için ne kadar çelik gerekli?
  Bu (yaklaşık olarak) silindirin [[yüzey alanı|çevresi|köşegeni]].

{.reveal(when="blank-0 blank-1")}Hadi bu iki soruyu cevaplamak için gereken formülleri bulalım!

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} Oberhausen’daki Gazmetre

:::

---
> id: cylinder-prism

#### Silindirin Hacmi

Silindirin altında ve üstünde iki eş daire var, bunlara _taban_ diyoruz. Bir silindirin __{.m-blue}yüksekliği *h*__ iki tabanı arasındaki dik mesafedir ve silindirin __{.m-red} yarıçapı *r*__ ise tabandaki dairelerin yarıçapıdır.

Bir silindire ${n}{n|5|3,20,1}-kenarlı bir [__prizma__](gloss:prism) ile yaklaşabiliriz. Kenar sayısı arttıkça prizma giderek silindire benziyor.

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

Bir silindir teknik olarak bir prizma olmasa bile, pek çok ortak özelliğe sahipler. İki durumda da hacmi __{.m-red} taban__ ile __{.m-blue} yüksekliği__ çarparak bulabiliriz. Demek ki yarıçapı _{.b.m-red} r_ ve yüksekliği _{.b.m-blue} h_ olan bir silindirin hacmi

{.text-center} `V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")} Burada yarıçap ve yüksekliğin aynı birim olması gerektiğini unutmayın.
Örnerğin eğer _r_ ve _h_ ikisi de cm cinsinden ise, o zaman hacmin birimi
[[`"cm"^3`|`"cm"^2`|cm]] olur.

---
> id: oblique-cylinder
> goals: slide

::: column.grow

Yukarıdaki örneklerde silindirin iki tabanı hep _birbirinin tam üzerindeydi_: Buna _dik silindir_ denir. Eğer tabanlar tam üstüste değilse, _eğik silindir_den bahsederiz. Tabanlar hala paraleldir, ancak kenarlar 90°’den farklı bir açı yapmış, “yan yatmış” gibi görünür.

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} İtalya’daki _Pisa_ kulesi tam bir eğik silindir değil.

:::

---
> id: cavalieri
> goals: slide

Eğik silindirin hacmi, aynı yükseklik ve yarıçapa sahip dik bir silindir ile tam olarak aynı. Bunu İtalyan matematikçi [Bonaventura Cavalieri](bio:cavalieri)’nin adıyla anılan [__Cavalieri İlkesi__](gloss:cavalieri) açıklar: eğer iki şeklin her yükseklikteki yatay kesitinin alanı aynıysa, o zaman şekillerin hacimleri de aynıdır.

Bir silindiri bir sürü ince daireye dilimlediğinizi düşünün. Sonrasında bu daireleri yukarı çıktıkça biraz yana kaydırarak eğik bir silindir elde edebiliriz. Bir yana kaydırdıkça tek tek parçaların hacimleri değişmiyor, dolayısıyla hacim de sabit kalıyor:

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::

---
> id: cylinder-surface

#### Silindirin Yüzey Alanı

::: column.grow

Silindirin yüzey alanını bulmak için onu düz bir hale getirerek açarız. Bunu kendiniz de örneğin bir konserve kutusunun üzerindeki kağıdı çıkararak deneyebilirsiniz.

Silindirin bir üstünde bir de altında iki tane [[daire|küre|kare]] var. Eğimli yüzey aslında büyük bir [[dikdörtgen|kare|elips]].

* {.reveal(when="blank-0 blank-1")} İki büyük dairenin tek tek alanları
  _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.
* {.reveal(when="eqn-0")} Dikdörtgenin yüksekliği
  _{x-equation.small(solution="h" keys=" " short-var)}_
  _{span.reveal(when="eqn-1")} ve genişliği dairelerin
 [[çevresi|çapı|teğeti]] ile aynı:_
  _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

Yani yüksekliği _h_ ve yarıçapı _r_ olan bir silindirin toplam yüzey alanı

{.text-center} `A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_.

---
> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

Silindirler etrafta her yerde karşınıza çıkarlar, kola kutularından tuvalet kağıtlarına ya da su borularına. Aklınıza başka örnekler geliyor mu?

Yukarıdaki _Gazmetre_ nin yarıçapı 35m ve yüksekliği 120m idi. Şimdi hacminin yaklaşık [[461,000 ± 1000]]`"m"^3` olduğunu ve yüzey alanının yaklaşık  [[34,080 ± 100]]`"m"^2` olduğunu hesaplayabiliriz.

---
> id: cone

### Koni

::: column.grow

[__Koni__](gloss:cone) çembersel bir __{.m-red}tabanı__ olan 3 boyutlu bir şekildir. Kenarları şekildeki gibi “yukarı doğru sivrilir” ve __{.m-green}tepe noktası__ adındaki bir noktada biter.

Koninin __{.m-red}yarıçapı__ çembersel tabanının yarıçapıdır, ve koninin
__{.m-blue}yüksekliği__ tabandan tepe noktasına olan dik mesafedir.

Diğer şekiller gibi koni de her yerde karşımıza çıkar: dondurma külahı, trafik kukası, kimi çatılar ve hatta yılbaşı ağaçları. Aklınıza başka neler geliyor?

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

#### Koninin Hacmi

::: column.grow

Daha önce silindirin hacmini ona bir prizma ile yakınsayarak bulduk. Benzer şekilde bir koninin hacmini ona bir [__piramit__](gloss:pyramid) ile yakınsayarak bulabilirz.

Burada ${n}{n|5|3,18,1} kenarlı bir piramit görebilirsiniz. Kenar sayısı arttıkça piramit gittikçe daha çok koniye benzer. Aslında koniyi _sonsuz_ kenarlı bir piramit olarak düşünebiliriz!

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

Bu aynı zamanda hacim için `V = 1/3 "taban" × "yükseklik"` formülünü de kullanabiliriz demek. Koninin tabanı bir daire, yani yarıçapı _r_ ve yüksekliği _h_ olan bir koninin hacmi

{.text-center} `V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---
> id: cone-circumscribed

Bir silindirin hacim formülüne olan benzerliğe dikkat edin. Koninin _etrafına_ aynı yükseklik ve yarıçapta bir silindir çizersek buna _çevrel silindir_ denir. Şimdi koni silindirin hacminin tam olarak [[üçte birini|yarısını|çevreğini]] kaplar.

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey} Not: Sonsuz tane incecik kenar ile yaklaşımın çok “kesin” olmadığını düşünebilirsiniz. Matematik koninin hacmini hesaplamanın daha doğrudan bir yolunu bulmak için epey zaman harcadı. Hatta 1900’de büyük matematikçi [David Hilbert](bio:hilbert) bunu matematiğin çözülmemiş en önemli 23 sorusundan biri ilan etti! Bugün bunun aslında imkansız olduğunu biliyoruz.

---
> id: oblique-cone
> goals: slide

::: column.grow

Silindirde olduğu gibi konilerin de “düz” olması gerekmiyor. Eğer tepe noktası tabandaki çemberin merkezinin tam üzerindeyse, o zaman elimizdeki _dik koni_ dir. Yoksa ona _eğik koni_ adını veriyoruz.

Bir kez daha Cavalieri ilkesini kullanarak bütün eğik konilerin aynı taban yüksekliğe sahip olduğu sürece hacimlerinin aynı olduğunu gösterebiliriz.

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### Koninin Yüzey Alanı

::: column.grow

Bir koninin yüzey alanını bulmak biraz daha zor. Önceki kişi bir koniyi iki boyutlu düzleme açabiliriz. Çubuğu kaydırarak nasıl olduğuna bakın: elimize bir daire ve bir  [[daire dilimi|çember kirişi|çember yayı]] geliyor.

{.reveal(when="blank-0")} Şimdi bu iki parçanın alanını toplamalıyız. __{.m-yellow}Taban__ yarıçapı  _r_ olan bir daire, yani alanı

{.text-center.reveal(when="blank-0")} `pill(A_"Taban","yellow","circle") =`
_{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

__{.m-green}Dilim__in yarıçapı ise koninin tabanındaki çemberin bir noktasından tepesine olan mesafe ile aynı. Buna koninin __{.pill.green.step-target(data-to="s")}eğik yüksekliği *s*__ diyoruz, ve bu koninin normal __{.pill.blue.step-target(data-to="h")}yüksekliği *h*__den farklı. Eğik yüksekliği  [Pisagor](gloss:pythagoras-theorem) teoreminden bulabiliriz.

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_       |
| `s`   | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
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

Dilimin _{span.pill.step-target.red(data-to="arc")}yay uzunluğu_ _{span.pill.step-target.yellow(data-to="base")}tabanın_ [[çevresi|çapı|yayı]] ile aynı:
_{span.reveal(when="blank-0")}`2 π r`. Şimdi dilimin alanını öndeki kısımda elde ettiğimiz  [formül](gloss:circle-sector) ile hesaplayabiliriz:_

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")
| `pill(A_"Dilim","green","sector")` | `=` | `pill(A_"Daire","teal","circle") × pill("yay","red","arc") / pill("çevre","teal","circumference")` |
|                | `=` | _{x-equation(solution="π r sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |

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

Son olarak __{.m-yellow}tabanın__ alanını ve __{.m-green}dilimin__ alanını ekleyip koninin toplam yüzey alanını bulabiliriz:

{.text-center} `A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

### Küre

::: column.grow

Küre üç boyutta verilen bir  __{.m-green}merkez noktası *C*__den aynı mesafedeki noktaların oluşturduğu şekildir. Bu mesafeye kürenin __{.m-red}yarıçapı *r*__ denir.

Küreyi “üç boyutlu bir  [çember](gloss:circle)” olarak düşünebilirsiniz. Aynı çemberde olduğu gibi, kürenin de kirişleri, kesenleri ve bir __{.m-blue}çapı *d*__ vardır, bu çap yarıçapın [[iki katı|yarısı]] uzunluğundadır.

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} [Daha önceki bir bölümde](/course/circles-and-pi/tangets-chords-arcs#eratosthenes-1) Yunan matematikçi [Eratosthenes](bio:eratosthenes)in Dünyanın yarıçapını bir direğin gölgesini kullanarak ölçtüğünü öğrenmiştik, 6371 km bulmuştu. Şimdi Dünyanın toplam hacmini ve yüzey alanını bulmaya çalışalım.
[Devam](btn:next)

---
> id: sphere-volume

#### Kürenin Hacmi

Bir kürenin hacmini bulmak için yine Cavalieri İlkesine başvurmak zorundayız. Önce bir yarıküre ile başlayalım, ekvator hizasından yarısı kesilmiş bir küre ile. Bir de bu yarıküre ile aynı yükseklik ve yarıçapa sahip bir silindire ihtiyacımız olacak, fakat ortasından ters çevrilmiş bir “koni” çıkartılmış olsun.

Aşağıdaki çubuğu kaydırdıkça bu iki şeklin tabandan belli bir yükseklikteki yatay kesitlerini görebilirsiniz:

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

{.reveal(when="slider-0")} Şimdi bu şekillerin tabandan belli bir __{span.pill.blue.step-target(data-to="h")}*h* yüksekliğindeki__ yatay kesitlerinin alanını bulmaya çalışalım.

::: column.grow

{.reveal(when="slider-0")} Yarıkürenin yatay kesitleri hep bir [[çember|halka|silindir]].

{.reveal(when="blank-0")} Yatay kesitin __{span.pill.red.step-target(data-to="x")}yarıçapı
*x*__ _{span.pill.yellow.step-target(data-to="tri")}dik bir üçgenin_ parçası, yani [Pisagor](gloss:pythagoras-theorem) teoremini kullanabiliriz:

::: .reveal(when="blank-0")
{.text-center} `pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")`.

O halde yatay kesitin alanı

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)
:::

::: column.grow.reveal(when="eqn-0")

Silindirin yatay kesiti ise hep bir [[halka|çember|koni]].

::: .reveal(when="blank-1")
Ortadaki deliğin yarıçapı _h_. Halkanın alanını büyük çemberin alanından deliğin alanını çıkararak bulabiliriz:

| _A_ | = | `π r^2 - π h^2` |
|     | = | `π (r^2 - h^2)` |
{.eqn-system}
:::

:::

---
> id: sphere-volume-1

İki şeklin de yatay kesitleri her seviyede aynı alana sahipler! Cavalieri İlkesine göre iki şeklin de [[hacmi|yüzey alanı|çevresi]] eşit olmalı! _{span.reveal(when="blank-0")} Yarıkürenin hacmini [silindirin](gloss:cylinder-volume) hacminden [koninin](gloss:cone-volume) hacmini çıkararak bulabiliriz:_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")
| `V_"Yarıküre"` | = | `V_"Silindir" - V_"Koni"` |
|                  | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |

:::

---
> id: sphere-volume-2

Bir küre [[iki]] yarımküreden oluşur,  _{span.reveal(when="blank-0")}yani bir kürenin hacmi şu kadardır_

{.text-center.reveal(when="blank-0")} `V = 4/3 π r^3`.

---
> id: earth-volume
> goals: numbers

::: column.grow

Dünya (yaklaşık olarak) yarıçapı 6,371\ km olan bir küredir. O yüzden hacmi

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
|     | `=` | _{span.numbers}1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} Dünyanın ortalama kütlesi `5510 "kg/m"^3`tür.
O zaman toplam kütlesi

{.text-center.reveal(when="numbers")} `"Kütle" = "Hacim" × "Yoğunluk" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} Burada 6’dan sonra 24 tane sıfır var!

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

Eğer silindirin, koninin ve kürenin hacimlerini karşılaştırırsanız, geometrideki en güzel ilişkilerden birisini fark edebilirsiniz. Tabanının çapı kadar yüksekliği olan bir silindir düşünün. Bunun içine bir küreyi ve bir koniyi ram olarak oturtabiliriz:

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} Bu koninin yarıçapı `r` ve yüksekliği `2r`. Hacmi
_{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} Kürenin yarıçapı `r`. Hacmi
_{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} Silindirin yarıçapı `r` ve yüksekliği `2r`. Hacmi
_{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} Nasıl da bir koninin ve bir kürenin hacmini [[toplarsak|çıkarırsak|çarparsak]] tam olarak silindirin hacmini bulduğumuzu gördünüz mü!

---
> id: sphere-maps
> goals: move projection

#### Kürenin Yüzey Alanı

Kürenin yüzey alanı için bir formül bulmak çok zor. Bunun bir sebebi kürenin yüzeyini koni ve silindirde yaptığımız gibi açıp “düzleştiremiyor” olmamız.

Bu özellikle harita yapanlar için bir problem. Dünyanın eğri, 3 boyutlu bir yüzeyi var, ancak basılan her harita düz ve iki boyutlu. Bu da coğrafyacıların hile yapması gerektiğini söylüyor: kimi alanları genişletip kimisini küçülterek.

Burada __izdüşümler__ denilen bir kaç değişik çeşit harita görüyorsunuz. Kırmızı kareyi oynatarak bu alanın kürede _gerçekte_ nasıl göründüğüne bakın:

    figure
      x-select.tabs
        .projection(data-name="mercator") Mercator
        .projection(data-name="cylindrical") Silindirik
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
          p.caption Haritadaki kareyi hareket ettirdikçe 3-boyutlu küredeki  #[em asıl] alanın şeklinin ve boyutunun nasıl değiştiğine bakın.
    x-gesture(target="#projection" slide="50, 20")

---
> id: sphere-surface

Kürenin yüzey alanını bulmak için bir kez daha ona değişik şekillerle yaklaşmayı deneyebiliriz, örneğin bir sürü yüzü olan bir çokgenle. Yüz sayısı arttıkça çokgen gittikçe daha çok bir küreye benzer.

{.todo} COMING SOON: Sphere Surface Area Proof





--------------------------------------------------------------------------------

## Konik Kesitler

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola

Çember bir [koniden](gloss:cone) “kesitler” alarak oluşturulabilecek dört şekilden birisidir. Bunu bir fenerden koni şeklinde çıkan ışık ile gösterebiliriz:

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

    x-conic-section
    x-scale-box(width=760).conics
      .row
        .active
          p: strong Çember
          include svg/circle.svg
        .hide
          p: strong Elips
          include svg/ellipse.svg
        .hide
          p: strong Parabol
          include svg/parabola.svg
        .hide
          p: strong Hiperbol
          include svg/hyperbola.svg

---
> id: conics-1

Eğer feneri dik bir şekilde aşağı tutarsanız bir [[çember|elips|oval]] görürsünüz. _{span.reveal(when="blank-0")} Eğer koniyi biraz eğersiniz bir [__elips__](gloss:ellipse) olur. Daha de eğerseniz bir [__parabol__](gloss:parabola) ya da [__hiperbol__](gloss:hyperbola) olur._

---
> id: conics-2

::: column.grow

Bu dört şekle [__konik kesitler__](gloss:conic-section) denir. Hepsi farklı görünse de yakından ilişkilidirler: hepsi aynı denklem ile üretilebilirler!

Konik kesitler ilk olarak antik Yunan matematikçisi [Perga’lı Apollonius](bio:apollonius) tarafından çalışılmıştır, onlara sıradışı isimlerini veren de odur.

İlerideki derslerde paraboller ve hiperboller hakkında çok şey öğreneceğiz. Şimdilik elipse yakından bakalım.

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### Elipsler

Bir elips neredeyse “uzatılmış çember”e benzer. Aslında elipsi _iki merkezli_ bir çember olarak düşünebilirsiniz, bu merkezlere __odak noktaları__ denir. Nasıl çemberin her noktası merkeze aynı uzaklıktaysa, elipsin her noktasının odak noktalarına _uzaklıkları toplamı_ aynıdır.

İki noktaya sabitlenmiş uzun bir ipiniz varsa bu ipin uzandığı en uzak noktaları işaretleyerek mükemmel bir elips çizebilirsiniz:

{.todo} Coming soon: Ellipses drawing interactive

---
> id: ellipses-2
> goals: v0 v1 v2 v3

Elipsi çizmenin daha bir sürü fiziksel yolu vardır:

::: column(width=320 parent="padded-thin")

    x-video(src="images/gears.mp4" poster="images/gears.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Çarklar

::: column(width=320)

    x-video(src="images/trammel.mp4" poster="images/trammel.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Trammel

::: column(width=320)

    x-video(src="images/disk.mp4" poster="images/disk.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Disk

::: column(width=320)

    x-video(src="images/swing.mp4" poster="images/swing.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Salıncak

:::

---
> id: orbits

### Gezegen Yörüngeleri

::: column.grow

Bu dersin en başında Yunan astronomların evrenin merkezinde Dünya’nın olduğuna ve Güneş’in, ayın ve gezegenlerin Dünya etrafında çembersel yörüngeler çizdiğine inandığını görmüştük.

Ne yazık ki gökyüzünün astronomik gözlemleri bu inancı desteklemedi. Örneğin Güneş yılın kimi zamanları daha büyük, kimi zamanları daha küçük görünüyordu. Bir çemberde her noktanın merkeze olan uzaklığı [[aynı olmalı|artmalı|azalmalı]].

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} İznikli Yunan astronom Hipparchus

:::

---
> id: epicycles
> goals: play

Bunu düzeltmek için astronomlar Güneş sistemi modellerine __Ekçemberler__ eklediler: gezegenler Dünyanın etrafında büyük çemberlerde hareket ediyor ve bu büyük çemberin üzerindeki küçük çemberlerde hareket ediyorlardı. Çok karmaşık olsa da yaklaşık 1000 yıl boyunca en çok kabul gören evren modeli buydu:

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} Bu gezegen büyük çemberde bir tur atarken küçük çemberin(__ekçember__) etrafında  ${n}{n|6|2,12,1} dönüş yapıyor.

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} __Dünyamerkezli evren modeli__ni gösteren bir 16. Yüzyıl çizimi. Yunance “planetes” “gezen” demek.
:::

---
> id: kepler
> goals: play

::: column.grow

Zaman içinde insanlar Dünya’nın Güneş çevresinde dönen(__Güneş merkezli evren modeli__) pek çok gezegenden biri olduğunu fark ettiler, ancak gezegenlerin aslında _eliptik yörüngeleri_ olduğunu ilk defa 1609’da astronom [Johannes Kepler](bio:kepler) buldu.

Güneş bu elipslerin iki merkezinden birisinde yer alıyor. Gezegenler Güneş’e yaklaştıkça hızlanıp uzaklaştıkça yavaşlarlar.

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

Bir kaç on yıl sonra [Isaac Newton](bio:newton) kendi geliştirdiği [__yer çekimi__](gloss:gravity) yasalarıyla Kepler’in gözlemlerini kanıtlayabildi. Newton evrendeki iki kütle arasında mıknatısların çekimine benzeyen bir kuvvet olduğunu fark etti.

Yer çekimi her şeyin yere düşmesine yol açan şeydir ve aynı zamanda gezegenlerin Güneş etrafında dolaşmasına yol açar. Gezegenlerin direk Güneş’e doğru düşmelerine engel olan şey çok büyük olan hızlarıdır.

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

Newton’un yasalarını kullanarak yer çekimi kuvveti altında hareket eden nesnelerin izleyecekleri yolu bulabiliriz. Gezegenlerin elipsler üzerinde hareket ettiği ortaya çıktı, ancak kuyruklu yıldız gibi başka nesneler [parabolik](gloss:parabola) ya da [hiperbolik](gloss:hyperbola) yollar izleyebilirler: Bir daha geri gelmemek üzere evrene savrulmadan önce Güneş’in yanından geçerler.

Bir efsaneye göre Newton’u yer çekimi hakkında düşünmeye düşen bir elma iter. Newton tüm zamanların en önemli bilim insanlarından birisiydi ve onun fikirleri Dünya anlayışımızı yaklaşık 300 yıl boyunca şekillendirdi, taa ki Albert Einstein 1905’te göreliliği keşfedene kadar.

:::
