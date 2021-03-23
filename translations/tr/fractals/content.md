# Fraktallar

## Giriş

> section: introduction
> id: intro
> trailer: ohygDnKg5mg
> color: "#8032AD"
> level: Advanced
> next: chaos

Doğada çevremize bakarken, aşağıdaki gibi karmaşık bitkileri fark etmiş olabilirsiniz:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} Bir __Eğreltiotu__, ana dalından aynı şekilde çıkan birçok küçük yaprakdan oluşur.

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} Bu __Romanesco brokoli__, daha büyük olanın etrafında dönen küçük [[konilerden|küplerden|kürelerden]] oluşur.

:::

{.reveal(when="blank-0")} Başlangıçta, bunlar son derece karmaşık şekiller gibi görünür - ancak daha yakından baktığınızda, her ikisinin de nispeten basit bir desen izlediğini fark edebilirsiniz: bitkilerin her [bir birimi](target:fractal) bitkinin bütününe benzer, sadece daha küçüklerdir. Aynı desen daha küçük ölçeklerde tekrar tekrar yenilenir. [Devam](btn:next)

---

> id: fern

Matematikte, bu özelliğe __kendine benzerlik__ diyoruz ve buna sahip şekillere [__fraktallar__](gloss:fractal) denir. Fraktallar, tüm matematiğin en güzel ve en tuhaf nesnelerinden bazılarıdır.

Kendi fraktallarımızı oluşturmak için basit bir desenle işe başlayıp daha sonra daha küçük ölçeklerde tekrar tekrar yenileyerek devam etmeliyiz.

::: column.grow

En basit örüntülerden biri bir ucundan [{.pill.blue} iki doğru parçası daha](target:s2)çıkan bir [{.pill.red} doğru parçasıdır](target:s1). Bu örüntüyü tekrarlarsak, bu mavi segmentlerin her ikisinin de uçlarından iki dal daha çıkacaktır.

Tüm dalların uzunluğunu ve açısını değiştirmek için [mavi noktaları](target:dot) hareket ettirebilirsiniz. Ardından, aşağıdaki çubuğu](->#fern-slider) kaydırarak {yin} tekrarlanma sayısını artırın.

{.reveal(when="slider-0")} Dalların konumuna bağlı olarak, yukarıdaki [eğrelti otu](action:set(130,228,197,184)), [ağaç](action:set(160,186,200,186)) veya [iç içe geçmiş beşgenler](action:set(113,235,232,238)) gibi görünen tamamen farklı desenleri oluşturabilirsiniz. Başka hangi şekilleri oluşturabilirsiniz? [Devam](btn:next)

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

Bir başka ünlü fraktal da [__Sierpinski üçgenidir__](gloss:sierpinski-triangle). Burda ise, büyük, eşkenar bir üçgenle başlayıp, sonra kalan parçalardan tekrar tekrar küçük üçgenler kesiyoruz.

{.reveal(when="slider=0")} Son şeklin bütününün üç özdeş birimden](target:x) nasıl oluştuğuna ve bunların her birinin, tüm üçgenin, daha da küçük kopyalarından oluştuğuna dikkat edin! Üçgeni sonsuza dek büyütmeye devam ettiğinizde, desenler ve şekillerin her zaman tekrarlanmaya devam ettiğini görürsünüz.

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

Bu bölümün başında gördüğümüz bitkiler _fraktallar_ 'a benziyorlar, ancak gerçek hayatta _hakiki_ fraktal oluşturmak mümkün değildir. Aynı modeli tekrar tekrar, daha küçük ve daha küçük tekrarlarsak bile, sonunda bölünemeyecek olan hücrelere, moleküllere veya atomlara ulaşırdık.

Ancak, matematik sayesinde gerçek fraktalların “sahip olacağı” özellikleri düşünebiliriz - ve bunlar çok çok şaşırtıcı… [Devam](btn:next)

---
> id: dimension

### Fraktalların Boyutları

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

İlk olarak, fraktalların boyutlarını düşünelim. Bir doğru parçasının boyutu [[1]] dir. _{span.reveal(when="blank-0")} Tahmin edilebileceği gibi, onu 2 kat büyüttüğümüzde uzunluğu `2^1 = 2` kat artar._

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

Bir kare [[2]] boyuta sahiptir. _{span.reveal(when="blank-0")} 2 kat büyüttüğümüzde, alanı `2^2 =` [[4]] kat artar._

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

Bir küpün [[3]] boyutu vardır. _{span.reveal(when="blank-0")} onu, 2 kat büyütürken, hacmi `2^3 =` [[8]] kat artmaktadır._ _{span.reveal(when="blank-1")} Görüntüdeki büyük küp, daha küçük olanın 8 kopyasından oluşur!_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Şimdi ise Sierpinski üçgenine bakalım. Bu üçgeni 2 katına çıkarırsak, "alan" ın [[3]] kat arttığını görebilirsiniz.

{.reveal(when="blank-0")} Diyelim ki _d_, Sierpinski üçgeninin boyutu. Yukarıdaki ile aynı modeli kullanarak `2^d = 3` elde ederiz. Başka bir deyişle, _d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} ≈ 1.585…_

:::

---
> id: dimension-4

Ama durun… bir şeyin tamsayı olmayan bir boyutu nasıl olabilir? İmkansız görünüyor, ama bu fraktalların garip özelliklerinden sadece biri. Aslında, fraktallara isimlerini veren de budur: Fraktalların, __kesirli bir boyutu__ vardır.

Her yinelemede, Sierpinski üçgeninin bazı bölgelerini yok ediyoruz. Bunu sonsuza kadar birçok kez yapabilseydik, aslında herhangi bir yüzeyi kalmazdı: bu yüzden Sierpinski üçgeni 2 boyutlu bir yüzey ile 1 boyutlu bir çizgi arasında bir şeydir.

::: .theorem

Birçok fraktal _kendine benzer_ olmakla birlikte, daha iyi bir tanım __fraktalların__ __tamsayı olmayan bir boyuta__ sahip olan şekiller, olduğudur.

:::

[Devam](btn:next)

---

> id: snowflake

### Koch Kar Tanesi

Doğada fraktallara benzeyen birçok şekil var. Bu bölümün başında, zaten bazı bitkiler görmüştük. Diğer harika örnekler, kar taneleri ve buz kristalleridir:

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

Kendi fraktal kar tanemizi oluşturmak için, tekrar tekrar uygulayabileceğimiz basit bir prosedür bulmak zorundayız.

::: column.grow

Sierpinski üçgeni gibi, tek bir eşkenar üçgenle başlayalım. Bununla birlikte, her adımda _daha küçük üçgenleri _silmek yerine, kenar boyunca_ ekleyelim. Her yeni, küçük üçgenin kenar uzunluğu, önceki adımdaki üçgenlerin [[`1/3`|`1/4`|`1/2`]] 'dır.

{.reveal(when="blank-0")} Ortaya çıkan şekle, İsveçli matematikçi [Helge von Koch](bio:koch) adını taşıyan [__Koch kar tanesi__](gloss:koch-snowflake) denir. Bir kez daha, kar tanesinin kenarlarındaki her bir [küçük bölümün](target:t2), [şeklin bütünü](target:t1) ile tamamen aynı göründüğüne dikkat edin.

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

Koch Kar Tanesi'nin bir kenarını 3 katı büyüttüğümüzde, uzunluğu [[dört kat|üç kat|iki kat]].

{.reveal(when="blank-0")} Yukarıdaki boyutlar ve büyüme ölçekleri arasındaki aynı ilişkiyi kullanarak, [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]] denklemini alıyoruz. _{span.reveal(when="blank-1")} Bu da, Koch Kar Tanesi'nin boyutunun `§d = log_3(4) ≈ 1.262` olduğu anlamına gelir._

:::

---

> id: koch-size

::: tab

#### Alan _{span.check(when="blank-6")}_

Koch kar taneleri oluşturmak neredeyse [yinelemeli bir dizi](gloss:sequence-recursive) gibidir: başlangıç şeklini (bir üçgen) biliyoruz ve bir terimden diğerine nasıl geçileceğini biliyoruz (her kenara daha fazla üçgen ekleyerek):

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] yeni üçgen

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] yeni üçgen

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]] yeni üçgen

:::

{.reveal(when="blank-0 blank-1 blank-2")} İlk adımdan sonra, eklenen yeni üçgenlerin sayısı her adımda [[4]] kat artmaktadır. Aynı zamanda, bu yeni üçgenlerin alanı, her adımda [[9]] da bir azalmaktadır.

{.reveal(when="blank-3 blank-4")} Diyelim ki [ilk üçgenin](->#koch-0) 1 birim alanı var. [sonraki üç üçgenin](->#koch-1) toplam alanı `3 × 1/9 = 1/3` olur. Aşağıdaki adımların tümü, ortak oranı [[`4/9`|`9/4`|`4/3`]] olan [[geometrik bir dizi|aritmetik bir dizi|kuadratik bir dizi]], _{span.reveal(when="blank-5")} oluşturur._

{.reveal(when="blank-6")} Sonsuz [geometrik seri](gloss:geometric-series) toplamını hesaplamak için gereken formülü kullanarak, Koch kar tanesinin, toplam alanını bulabiliriz.

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`.

::: tab

#### Çevre _{span.check(when="blank-9")}_

::: column.grow

Koch kar tanesinin, çevresini de hesaplamaya çalışabiliriz. Daha önce gördüğümüz gibi, çevre uzunluğu her adımda [[`4/3`|`3/4`|`1/4`]] katına çıkar.

{.reveal(when="blank-8")} Bu, bir kez daha geometrik bir serimiz olduğu anlamına gelir - ancak bu durumda çevra,  [[>>>>,|0'a yaklaşır|dilk terimi yoktur] 'herhangi bir sayoya yaklaşmaz. _{span.reveal(when="blank-9")} Bu, Koch kar tanesi çevresinin aslında __sonsuz uzunluğunda olduğu anlamına gelir__!_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _Bu mantıksız görünüyorsa, çevreyi her adımda `§4/3` ile çarptığımızı ve bunu sonsuza kadar defalarca yaptığımızı unutmayın._

:::

---

> id: frozen

::: column.grow

Aynı anda _sonlu_ alanı ve _sonsuz_ çevresi olan bir şekil neredeyse düşünülemez - ancak bu, fraktalların beklenmedik birçok özelliğinden sadece biridir.

Kendi fraktallarınızı yaratmanın başka yollarını bulabilir misiniz? [Devam](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} “Ruhum her yerdeki donmuş fraktallara geziniyor…”

:::

---

> id: menger-sponge

### Menger Süngeri

Fraktalların, yukarıdaki örneklerde olduğu gibi hep "düzlemsel" olmaları gerekmez. 3 boyutlu olan en ünlü fraktallardan biri, ilk olarak 1926'da matematikçi [Karl Menger](bio:menger) tarafından bulunan __Menger süngeri__' dir.

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

Tek bir küple başlıyoruz ve her bir yüzüne tekrar tekrar daha küçük ve daha küçük delikler açıyoruz. Her yeni adımda oluşan kübik delik, önceki deliğin genişliğinin [[`1/3`|`1/2`|`1/4`]] 'ü kadardır.

{.reveal(when="blank-0")} Normalde, (3x3x3) bir küp (347}) 27 küçük küpten oluşur, ancak şekilde gördüğüniz gibi bunlardan bazılarını sildik. Dolayısı ile Menger süngeri, kendisinden 3 kat daha küçük olan [[20]] kopyasından oluşur.

{.reveal(when="blank-1")} Şimdi, yukarıdaki Koch kar tanesi için yaptığımız gibi Menger süngerinin de  _d_ boyutunu hesaplamaya çalışabiliriz. Bu durumda `3^d = 20` veya `§d = log_3(20) ≈ 2.727` alırız.

:::

{.reveal(when="blank-1")} Sonsuza kadar delik açmaya devam ettiğimizi varsayarsak, aslında geriye bir hacim kalmaz. Bu yüzden bu küp “tam olarak” 3 boyutlu değildir! [Devam](btn:next)

---

> id: coastlines

### Fraktal Sahil Şeritleri

Şimdiye kadar gördüğümüz tüm fraktalların temel özelliklerinden biri, sonsuza dek “yakınlaştırabilmemiz” ve her zaman aynı örüntüleri bulabilmenizdir. 1920 yılı dolaylarında, İngiliz matematikçi [Lewis Fry Richardson](bio:richardson), bunun birçok ülkenin sınırı veya sahil şeridi için geçerli olduğunu fark etti.

Ülkenin temel şekli ile başlayıp, yakınlaştırdıkça nehir girişleri, koylar ve körfezleri ekleyip, ardından her bir sahili, kayaları, çakıl taşlarını eklemek gibi

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

[Devam](btn:next)

---

> id: coastlines-1

::: column.grow

Bir ülkenin sınırının uzunluğunu hesaplamaya çalışırken - ne kadar yakınlaştıracağınıza ve hangi köşe ve girinti ve çıkıntıları dahil edeceğinize karar vermek, önemli bir sorundur.

Britanya'nın kıyı şeridinin uzunluğunu ölçmenin yollarından biri, uzun bir cetvel almak, plajlarında dolaşmak ve sonra tüm mesafeleri toplamaktır.

Cetvel ${rulers[index]}{index|0|0,8,1} km uzunluğundaysa, onu ${count} kez kullanmalıyız, bu yüzden toplam sahil şeridimiz ${count} × ${rulers[index]} = ${count * rulers[index]} km olur.

{.reveal(when="var-0")} Daha küçük ve daha küçük cetvellerle bu işe devam edebiliriz, kıyı şeridinin uzunluğuna ilişkin sonuç her seferinde biraz daha uzun olur. Tıpkı daha önce Koch Kar tanesinde olduğu gibi, İngiltere'nin sahil şeridi sonsuza kadar uzuyormuş gibi gözüküyor! Buna genellikle __kıyı şeridi paradoksu__ denir. [Devam](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

On yıllar sonra, matematikçi [Benoit Mandelbrot](bio:mandelbrot), IBM’de çalışırken Richardson’ın atılan bir kütüphane kitabındaki çalışmalarına rastladı. Kitabın önemini ve fraktallar ile boyutlar hakkında yapılan yeni araştırmalarla nasıl ilişkili olduğunu hemen fark etti.

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

Britanya'nın kıyı şeridi kesinlikle fraktal "görünüyor", ancak daha önce gördüğümüz diğer fraktallar gibi _kendine benzer_ değil. Boyutunu bulmak için, kareli bir kağıda çizebilir ve kesiştiği kare sayısını sayabiliriz.

{.r.reveal(when="slider-0")} Başlangıçta __{.pill.yellow} 88__ kesişen kare vardır. Kıyı şeridini 2 kat büyütürsek, __{.pill.yellow} 197__ kesişen kare olur - iki katından fazla! [Devam](btn:next)

{.r.reveal(when="next-0")} Kıyı şeridinin boyutu `§197/88` kat arttı. Daha önce olduğu gibi, bu sahil şeridinin boyutu

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---

> id: coastline-dimension-1

Bunu daha büyük karelerle tekrarlarsak, İngiltere sahil şeridinin boyutunun aslında yaklaşık 1.21 olduğunu görürüz. Mandelbrot, bu fraktal boyutun aynı zamanda bir şeklin __pürüzlülüğünün__ bir ölçüsü olduğunu fark etti - bu yeni kavram ile, matematik ve bilimin diğer birçok alanında önemli uygulamalar buldu.

---

> id: nature

### Doğa ve Teknolojiden Daha Fazla Fraktal

Gerçek fraktallar hiçbir zaman doğada görünmezken, fraktallara _neredeyse_ benzeyen birçok nesne vardır. Zaten bitkiler, kar taneleri ve sahil şeritlerini görmüştük ve işte size birkaç örnek daha:

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption} Orta Asya'daki dağ silsilesi

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption} Hindistan'da Ganj Nehri Deltası

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption} Yıldırımlar

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption} Retinadaki kan damarları

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption} ABD'deki Büyük Kanyon

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption} Bulutlar

:::

Tüm bu nesneler, tamamen rastgele oluşmuş gibi görünebilir, ancak tıpkı fraktallar gibi, bunların nasıl oluştuğunu belirleyen bir örüntü vardır. Matematik, şekilleri daha iyi anlamamıza yardımcı olabilir ve fraktalların tıp, biyoloji, jeoloji ve meteoroloji gibi alanlarda uygulamaları vardır. [Devam](btn:next)

---

> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption} Bilgisayar tarafından oluşturulan fraktal şeklinde yeryüzü

::: column.grow

Fraktalları, video oyunlarında veya bilgisayar tarafından oluşturulan filmlerde kullanılan manzaralar ve dokular gibi gerçekçi doğa “kopyaları” oluşturmak için de kullanabiliriz. Bu görüntüdeki su, dağlar ve bulutlar tamamen bir bilgisayar tarafından, fraktalların yardımıyla yapıldı!

Ayrıca, dijital görüntüleri sıkıştırmak, dosya boyutlarını azaltmak için bu işlemi tam tersine de çevirebiliriz. Bu konuyla ilgili ilk algoritmalar 1980'lerde Michael Barnsley ve Alan Sloan tarafından geliştirildi ve bugün hala yeni algoritmalar araştırılıyor.

:::

---

## Sierpinski Üçgeni

> section: sierpinski
> id: sierpinski

::: column.grow

Önceki bölümde gördüğümüz fraktallardan biri de, Polonyalı matematikçi [Wacław Sierpiński](bio:sierpinski) tarafından adlandırılan [__Sierpinski üçgeni__](gloss:sierpinski-triangle) idi. Bu şekil, büyük bir eşkenar üçgenle başlayıp, daha sonra merkezdeki daha küçük üçgenleri tekrar tekrar keserek oluşturulabilir.

{.r.reveal(when="slider-0")} Wacław Sierpiński bu üçgenin özelliklerini düşünen ilk matematikçi idi, ancak bu desen, sanat ve mozaiklerde yüzyıllar önce ortaya çıkmıştı bile.

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: sierpinski-history

Roma'daki farklı kiliselerdeki yer döşemelerinden bazı örnekler:

::: column(width=140 parent="padded-thin")

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire")

:::

Görünüşe göre, Sierpinski üçgeni matematiğin de içinde olduğu geniş bir yelpazede karşımıza çıkıyor ve onu oluşturmanın birçok farklı yolu var. Bu bölümde, bu yolların bazılarını keşfedeceğiz! [Devam](btn:next)

---

> id: pascal
> goals: select

### Pascal Üçgeni

Sierpinski üçgenini [__Pascal’ın üçgeni__](gloss:pascals-triangle) ile ilgili bölümümüzden hatırlıyor olabilirsiniz. Pascal Üçgeni, her sayının, üst satırındaki iki sayının toplamı olduğu bir sayı piramidi. Aşağıdaki üçgendeki tüm _çift_ sayıları tıklayın - oluşan desen tanıdık geldi mi?:

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

Pascal üçgeni sonsuza kadar aşağıya doğru devam edebilir ve Sierpinski modeli daha büyük ve daha büyük üçgenlerle devam eder. Daha büyük bir üçgenin başlangıcını, 16. satırdan başlayarak görebilirsiniz.

İki bitişik hücre 2 ile bölünebilirse, altındaki hücredeki toplamları da 2 ile bölünebilir olmalıdır - bu yüzden sadece renkli üçgenler alabiliriz. Elbette, 2_ dışındaki _sayılara bölünebilen tüm hücreleri boyamayı da deneyebiliriz. Bu durumda ne olacağını tahmin edebilir misiniz? [Devam](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Burada Pascal’ın üçgeninin ilk 128 satırını gösteren küçük bir versiyonunu görebilirsiniz. ${n}{n|2|2,40,1} ile bölünebilen tüm hücreleri sırası ile seçtik - Ne fark ettiniz?

{.reveal(when="var-0")} Her sayı için Sierpinski üçgenine benzeyen farklı bir üçgen elde ederiz. Bir [[asal sayı|üçgensel sayı|Fibonacci sayısı]] seçersek, oluşacak desen daha düzgün olur. _{span.reveal(when="blank-0")} Seçilen sayının _birçok farklı_ asal faktörü varsa, desen daha rastgele görünür._

    x-gesture(target="#pascal-large x-var" slide="100,0")

---

> id: chaos-game
> goals: point play

### Kaos Oyunu

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

Burada bir eşkenar üçgenin üç köşesini görebilirsiniz. Dördüncü bir nokta oluşturmak için gri alanda herhangi bir yere dokunun.

{.r.reveal(when="point")} Şimdi basit bir oyun oynayalım: üçgenin köşelerinden birini rastgele seçiyoruz, noktamızla köşe noktası arasında bir doğru parçası çiziyoruz ve sonra o parçanın [{.pill.red} orta noktasını](target:p1) buluyoruz. [Devam](btn:next)

{.r.reveal(when="next-0")} Şimdi işlemi tekrarlıyoruz: başka bir rastgele köşe seçiyoruz, doğru parçasını son noktamızdan çiziyoruz ve sonra yine [{.pill.green} orta noktayı](target:p2) buluyoruz. Bu yeni noktaları, seçtiğimiz köşe noktasının rengine göre renklendirdiğimizi unutmayın. [Devam](btn:next)

{.reveal(when="next-1")} Şimdiye kadar şaşırtıcı bir şey olmadı - ama aynı işlemi çok daha fazla tekrarladığımız zaman neler olduğunu izleyin:

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} 1000 adım ekleyin_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

Bu işleme __Kaos Oyunu__ adı verilir. Başlangıçta sadece birkaç başıboş nokta olarak görülen desen, aynı adımları birçok kez tekrarladığımızda, Sierpinski üçgeni gibi görünmeye başlar!

Bu oyunun birçok versiyonu var - örneğin, bir kare veya beşgen ile başlayabiliriz, aynı köşeyi arka arkaya iki kez seçememek  veya bir sonraki noktayı`§1/2` dışında bir oranda seçmek gibi ek kurallar ekleyebiliriz. Bu vakaların bazılarında, rastgele rastgele bir dağılım elde etsek de, diğer durumlarda bir çok farklı fraktal ortaya çıkarabiliriz:

    include components/chaos-game

{.reveal(when="s1 s2 play")} [Sierpinski halısını](action:carpet()) veya bu [beşgen kar tanesi](action:snowflake()) [__Altın oran__](gloss:golden-ratio) 'ı seçerek keşfedebildiniz mi?

---

> id: cellular
> goals: sierpinski

### Hücresel Otomata

Bir __hücresel otomatı__ birçok ayrı hücreden oluşan bir ızgaradır. Her hücre farklı "durumlarda" (örneğin farklı renklerde) olabilir ve her hücrenin durumu çevresindeki hücreler tarafından belirlenir.

Bu örnekte, her hücre siyah veya beyaz olmalıdır. Sadece tek bir siyah kare içeren bir satırla başlayalım. Takip eden her satırda, her hücrenin rengi, hemen üstündeki üç hücre tarafından belirlenir. Hücrelerin renklerini çevirmek için aşağıdaki sekiz olası seçenekten birine dokunun - Sierpinski üçgenine benzer bir desen oluşturan bir dizi kural bulabilir misiniz?

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} Sekiz seçeneğin her biri için iki seçenek vardır, yani toplamda `2^8 =` [[256]] olası kural vardır. Bu kurallardan, [Kural 126](action:setRule('01111110')) gibi bazıları Sierpinski üçgenine benzerken [Kural 30](action:setRule('01111000')) gibi diğerleri tamamen kaotik görünüyor. Bu, 1983 yılında [Stephen Wolfram](bio:wolfram) tarafından keşfedildi ve bilgisayarlar bu seçenekleri rastgele sayılar üretmek için bile kullanabilirler!

---

> id: cellular-1

::: column.grow

Hücresel otomatlar, tıpkı fraktallar gibi çok basit kurallarla nasıl oldukça karmaşık desenlerin oluşturulabileceğini gösterirler. Doğada da birçok süreç basit kuralları takip ederek oluşup inanılmaz derecede karmaşık sistemler üretebilir.

Bazı durumlarda, örneğin bu salyangozun kabuğundaki renklerin oluşması gibi, hücresel otomatlara benzeyen desenlerin ortaya çıkmasına sebep olabilir.

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} Conus tekstil, zehirli bir deniz salyangozu

:::

---

> id: tetrahedra

### Sierpinski Piramidi

Sierpinski üçgeninin birçok çeşidi olduğu gibi, benzer özelliklere ya da yaratma süreçlerine sahip başka bazı fraktallar da  vardır. Bazıları, yukarıda gördüğünüz _Sierpinski Halısı_ gibi 2 boyutlu olup, diğerleri bu örnekler gibi 3 boyutlu olabilir:

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski Tetrahedra

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski Piramidi

:::

---

## Mandelbrot Seti

> section: mandelbrot
> id: iteration
> goals: move-1 move-2

Önceki bölümlerde gördüğümüz tüm fraktallar __yineleme__ adımları kullanılarak oluşturulur: belirli bir desenle başlayıp sonra tekrar tekrar yinelersiniz.

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

Bu, matematikte daha önce gördüğünüz başka bir konsepte benzer: [rekursif seriler](gloss:sequence-recursive), belirli bir sayıyla başlarsınız ve daha sonra, bir sonraki sayıya ulaşmak için, aynı formülü tekrar tekrar uygularsınız.

Örnek olarak `§x_n = x_(n-1)^2` formülünü ele alalım ve terimlerini sayı doğrusu üzerinde gösterelim. `pill(x_0,"yellow","x0")` değerini değiştirebilirsiniz:

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

Sonuç dizisinin `x_0` başlangıç değerine bağlı olarak nasıl çok farklı davranabileceğine dikkat edin:

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

`x_0 > 1` ise, dizi [[ıraksar|yakınsar]]: _{span.reveal(when="blank-0")} sonsuza kadar büyümeye devam eder._

::: column.frame.f-blue.text-center(width=212)

`x_0` –1 ve 1 arasındaysa, dizi [[yakınsar|ıraksar]] .

::: column.frame.f-blue.text-center(width=212)

`x_0 < -1` ise, dizi [[ıraksar|yakınsar]] .

:::

---

> id: iteration-2

Şimdiye kadar yeni bir şey öğrenmedik. Ancak, yaklaşık bir asır önce, matematikçiler gerçek sayı doğrusu yerine [__karmaşık sayıları__](gloss:complex-numbers) kullanınca bu dizilere ne olduğunu keşfetmeye başladılar. Keşifleri, tüm matematikteki en şaşırtıcı ve güzel sonuçlardan biri oldu.

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### Julia Setleri

Öncekiyle aynı diziyi kullanalım, `§x_n = x_(n-1)^2`, ancak karmaşık düzlemde. Aşağıdaki koşullarda ne olduğunu görmek için `pill(x_0,"yellow","x0")` konumunu hareket ettirebilirsiniz. Seri yakınsayacak gibi görünüyorsa da, düzlemde karşılık gelen her noktayı _{span.pill.blue} mavi_ ile renklendirdiğimizde:

    figure: x-geopad(slot="stage" width=720 height=480 x-axis="-2.2,2.2,1" y-axis="-1.5,1.5,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-positioning="no" label-suffix=",i" axis-names="Real, Imaginary")
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
            strong.var.m-blue(:show="converges" data-display="inline") Converges!
            strong.var(:show="!converges" data-display="inline") Diverges!

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} Gördüğünüz gibi, dizi `pill(x_0,"yellow","x0")` birim çember içinde olduğu sürece| birim çember dışında| _x_-ekseni üstünde]]| outside the unit square|above the _x_-axis]] _{span.reveal(when="blank-0")} (1 birim yarıçapına sahip çember) içinde kaldığı sürece dizi yakınsar._

---

> id: julia-1

Şimdi işleri biraz daha zorlaştıralım. Önceki sayının sadece karesini almak yerine, her seferinde sabit bir _{.pill.red} c_ sayısı ekleyelim (c herhangi bir karmaşık sayı olabilir). Başka bir deyişle, `§x_n = x_(n-1)^2 + c`. Sizce hala bir yakınsama döngüsü elde edebilir miyiz? Başka hangi şekilleri görebileceğimizi tahmin edebilir misiniz? [Devam](btn:next)

---

> id: julia-2

Bu şemada, `pill(x_0,"yellow","x0")` konumunu ve `pill(c,"red","c")` değerini değiştirebilirsiniz:

::: x-slideshow

    x-geopad(slot="stage" width=720 height=480 x-axis="-1.8,1.8,1" y-axis="-1.2,1.2,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-suffix=",i" axis-names="Real, Imaginary")
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
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

{div(slot="legend")} [`c = 0`](action:animate(0,0)) - yukarıdaki örnekle aynı olacağından, ne olacağını zaten biliyoruz. `x_0` birim çemberin içinde olduğu sürece dizi yakınsar.

{div(slot="legend")} _c_ 'nin değerini değiştirir değiştirmez harika bir şey olur. Daire oldukça karmaşık, fraktal bir şekle dönüşür.

{div(slot="legend")} [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)) olduğunda, şekil spiraller halinde düzenlenmiş sonsuz sayıda küçük elemana bölünür.

::: div(slot="legend")

Bazı durumlarda, dizi _tek bir noktaya_ yaklaşmaz - bunun yerine üçgen gibi birden çok noktadan oluşan bir döngüye ulaşır. Bu döngüler __yörüngeler__ olarak adlandırılmaktadır.

Mavi renkli noktalar, karşılık gelen dizinin yakınsadığı veya yörüngeye sahip olduğu anlamına gelir (bunun __sınırlı__ olduğunu söyleriz). Beyaz kalan noktalara karşılık gelen __dizinin__ ıraksadığı anlamına gelir: sınırlandırılmaz ve sonsuza gider.

:::

{div(slot="legend")} Başka ne bulabilirsiniz? [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) veya [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)) olduğunda desenlere bir göz atın. _c_ 'un bazı değerleri için oluşan her dizi ıraksar, böylece tüm karmaşık düzlem beyaz kalır.

:::

---

> id: julia-3

Sayılarda renklendirmeyle oluşan bu farklı şekillere [__Julia Sets__](gloss:julia-set) denir. 1918 civarında iki Fransız matematikçi [Gaston Julia](bio:julia) ve [Pierre Fatou](bio:fatou) tarafından birbirlerinden bağımsız olarak keşfedildi.

O zamanlar, Julia Kümelerinin gerçekte neye benzediğini görselleştirmeye yardımcı olacak bilgisayarlar yoktu. Julia ve Fatou gibi matematikçiler onlar hakkında sadece matematiksel olarak akıl yürütebildiler ve ancak nasıl göründüklerine dair kaba, elle çizilmiş eskizler gördüler.

Bugün böyle bir sorunumuz yok - aşağıdaki resimlerin hepsi farklı Julia setlerine ait. Farklı renkler, bu noktalardaki dizinin ne kadar çabuk saptığını gösterir:

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

[Devam](btn:next)

---

> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### Mandelbrot Seti

Farklı Julia setlerini oluştururken, her dizinin ıraksadığı ve tüm karmaşık düzlemin beyaz kaldığı bazı _c_ değerleri olduğunu fark etmiş olabilirsiniz. Julia ve Fatou'dan birkaç on yıl sonra, yeni nesil matematikçiler bu beyaz alanların nasıl göründüğünü anlamaya çalıştı.

Önceki örnekte, `pill(c,"red","c")` için sabit bir değer seçtik ve sonra düzlemi renklendirmek için `pill(x_0,"yellow","x0")` konumunu değiştirdik. Şimdi `pill(x_0 = 0,"yellow","x0")` değerini sabitleyelim ve bunun yerine `pill(c,"red","c")` değerini değiştirelim.

Bir kez daha, dizilerin sınırlı kaldığı bölgeyi ortaya çıkarmak için karmaşık düzlem üzerinde boyayın. Hangi şekillerin görünmesini bekliyorsunuz?

    figure: x-geopad.no-background(width=720 height=480 x-axis="-2.1,1.1,1" y-axis="-1.1,1.1,1" axes grid padding=8 projections="no" label-suffix=",i" axis-names="Real, Imaginary")
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
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

---

> id: mandel-history

Bu fraktal, [__Mandelbrot Seti__](gloss:mandelbrot-set) olarak adlandırılır ve 90 ° döndürüldüğünde, neredeyse kafa, gövde ve iki kolu olan bir insana benzer. İlk kez 1978'de matematikçiler Robert Brooks ve Peter Matelski tarafından bir araştırma makalesinde tanımlanmış ve çizilmiştir:

    figure: x-img(src="images/mandelbrot.jpg" width=360 height=290 credit="© Princeton University Press")

Birkaç yıl sonra, [Benoit Mandelbrot](bio:mandelbrot), daha sonra onun adını alan fraktal hakkında çok daha ayrıntılı bir görselleştirme oluşturmak için IBM'deki güçlü bilgisayarları kullandı. İlk çıktılar beklediğinden farklı görünüyordu - yazıcılarda çalışan teknisyenlerin, toz parçacıklarından veya yazıcı hatalarından kaynaklandığını ve fraktalların tanımlayıcı bir özelliği olmadığını varsayarak, kenarındaki “bulanıklığı” temizlediğini anlayana kadar ! [Devam](btn:next)

---

> id: mandel-zoom

Tüm fraktallar gibi Mandelbrot setini sonsuza dek “yakınlaştırabiliriz” ve her ölçekte yeni desenler bulabiliriz. Burada Mandelbrot setinin __Denizatı vadisi__ olarak adlandırılan bir parçasını yakınlaştırabilirsiniz. Siyah noktalar, dizinin sınırlı olduğu Mandelbrot kümesinin_ içinde _yer almaktadır. Renkli noktalar, dizinin ıraksadığı [Mandelbrot kümesinin _dışındadır ve farklı renkler ne kadar hızlı sonsuzluğa gittiğini_gösterir:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---

> id: mandel-zoom-1

Bu kaydırma çizgisini kullanarak, 27 ayrı resimden oluşan bu seride 14 katrilyonu veya `2^54`aşan yakınlaştırma düzeyine ulaşabilirsiniz. Modern bir dizüstü bilgisayar kullanarak bu resimleri oluşturmak yaklaşık 45 dakika sürdü. Mandelbrot seti sadece tek bir basit denklemle oluşturulabilir `§x_n = x_(n-1)^2 + c`, ancak sonsuz karmaşıklıkta ve şaşırtıcı derecede güzeldir.

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

[{.pill.red} c](target:c) değerini Mandelbrot setinin etrafında hareket ettirdikçe, ilginç bir özellik fark edebilirsiniz:

* Mandelbrot setinin [[ana gövdesi](target:bulb0) içerisindeki tüm [[diziler|ıraksar|yörüngeye ulaşır]] _{span.reveal(when="blank-0")} tek bir noktaya yakınsar._
* {.reveal(when="blank-0")} Üstteki [büyük ampul içindeki](target:bulb1) diziler, [[3]] noktadan oluşan [[yörüngesine ulaşır|yakınsar|ıraksar]] _{span.reveal(when="blank-1")}._
* {.reveal(when="blank-2")} [Küçük ampulün içindeki](target:bulb2) diziler [[5]] uzunluğunda yörüngelere sahiptir.

:::

{.reveal(when="blank-3")} Her ampul farklı boyutta bir yörüngeye sahiptir, daha küçük ampuller yörüngelerinde daha fazla noktaya sahiptir. Bu yörüngelerin büyüklüğü, [Kaos teorisinde](/course/chaos) önemli bir kavram olan __Lojistik Harita__ ile yakından ilişkilidir.

---

> id: mandel-outro

::: column.grow

Bernoit Mandelbrot hayatının çoğunu fraktalların yanı sıra matematikteki _pürüzlülük_ ve _kendine benzerlik_ kavramlarına adadı. Çalışmalarının fizik, meteoroloji, nöroloji, ekonomi, jeoloji, mühendislik, bilgisayar bilimi ve diğer birçok alanda uygulamaları oldu.

1985 yılında Mandelbrot seti _Scientific American_ dergisinin kapağında yer aldı ve o zamandan beri dünyanın en tanınmış matematik simgelerinden biri haline geldi. Tişörtlerde, müzik videolarında ve ekran koruyucu olarak sık sık karşımıza çıkan  Mandelbrot Kümesi birçok popüler kitap ve filmde de referans alınmıştır.

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::

---

## Alan Doldurma Eğrileri

> section: space-filling
> sectionStatus: dev

{.todo} Çok Yakında!

