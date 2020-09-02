# Dairələr və Pi 

## Giriş 

> section: introduction
> id: intro
> translated: auto

::: column.grow

İnsanlar mövcud olduğu müddətə qədər göyə baxdıq və ulduzların, planetlərin və ayın hərəkətindən istifadə edərək Yerdəki həyatı izah etməyə çalışdıq. 

Qədim Yunan astronomları ilk dəfə bütün göy cisimlərinin __orbit__ adlanan müntəzəm yollarla hərəkət etdiyini kəşf etdilər. Bu orbitlərin həmişə dairəvi olduğuna inanırdılar. Axı, dairələr bütün formaların "ən mükəmməlidir": hər istiqamətdə simmetrikdir və beləliklə kainatımızın əsas nizamı üçün uyğun bir seçimdir. 

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption} Yer _Ptolemaik kainatın_ mərkəzindədir. 

:::

---
> id: radius
> goals: compass

Bir [__dairənin__](gloss:circle) hər nöqtəsi mərkəzindən eyni məsafədədir. Bu, bir [kompas](gloss:compass) istifadə edərək çəkilə biləcəkləri deməkdir: 

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

{.reveal(when="compass")} Bilməlisiniz dairələr ilə əlaqəli üç vacib ölçü var: 

* {.reveal(when="compass" delay="1000")} The [{.pill.red.b} radius](target:r) bir dairənin mərkəzindən xarici halqasına olan məsafədir.
* {.reveal(when="compass" delay="4000")} The [{.pill.blue.b} diametri](target:d) bir dairədə iki əks nöqtə arasındakı məsafədir. Onun mərkəzindən keçir və uzunluğu [[iki qatdır | yarım |]] radiusla [[eyni]] .
* {.reveal(when="blank-0")} The [{.pill.green.b} dairə](target:c) (və ya perimetr) bir dairənin ətrafındakı məsafədir. 

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

Dairələrin bir vacib xüsusiyyəti, bütün dairələrin [oxşar olmasıdır](gloss:similar) . Bütün çevrələrin sadəcə [tərcümələr](gloss:translation) və [dilations](gloss:dilation) istifadə edərək necə uyğunlaşacağını göstərməklə sübut edə bilərsiniz: 

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

Bənzər çoxbucaqlılar üçün uyğun tərəflər arasındakı nisbət həmişə sabit olduğunu xatırlaya bilərsiniz. Bənzər bir şey dairələr üçün işləyir: [dairə](gloss:circle-circumference) və [diametr](gloss:circle-diameter) arasındakı nisbət _bütün dairələr_ üçün bərabərdir. Bu ... həmişə 3,14159 deyil - tez-tez "p" üçün yunan məktub _π_ kimi yazılmışdır [__Pi__](gloss:pi) adlı sirli sayı. Pi, heç bir xüsusi nümunə olmadan əbədi davam edən sonsuz sayda onluğa malikdir: 

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

Budur, diametri 1 olan bir çarx. Dövrəni "sökün", onun uzunluğunun tam olduğunu görə bilərsiniz [[`pi`|`2 * pi`| 3]] : 

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

Diametri _d_ olan bir dairə üçün, dairədir `C = π × d` . Eynilə, [radius](gloss:circle-radius) _r_ olan bir dairə üçün, dairədir 

{.text-center}`C =` [[`2 π r`|`π r`|`π r^2`]] . 

---
> id: nature

Dairələr mükəmməl simmetrikdir və bir çoxbucağın küncləri kimi "zəif nöqtələr" yoxdur. Bu onların təbiətdə hər yerdə tapılmasının səbəblərindən biridir: 

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption} Çiçəklər 

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

{.caption} Planetlər 

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

{.caption} Ağaclar 

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

{.caption} Meyvə 

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

{.caption} Sabun Bubbles 

:::

{.r} Və bir çox başqa nümunə var: göy qurşağından tutmuş su qırışlarına qədər. Başqa bir şey düşünə bilərsən? [Davam edin](btn:next) 

---
> id: max-area
> goals: area-circle

::: column.grow

Ayrıca bir dairənin müəyyən bir dairə üçün ən böyük sahəsi olan bir forma olduğu ortaya çıxır. Məsələn, uzunluğu 100 \ m olan bir ipiniz varsa, bir dairə meydana gətirsəniz (ən çox düzbucaqlı və ya üçbucaq kimi digər formalardan daha çox) onu istifadə edə bilərsiniz. 

Təbiətdə su damcıları və ya hava baloncukları kimi əşyalar dairəvi və ya sferik hala gəlməklə və səth sahələrini azaltmaqla _enerjiyə qənaət_ edə bilər. 

::: column(width=320)

    x-select.segmented
      div(data-value="0") Triangle
      div(data-value="1") Square
      div(data-value="2") Pentagon
      div(data-value="3") Circle
    svg(width=320 height=200)

{.caption} _Dövr_ = __{.m-green} 100__ , _Sahə_ = __${area}__ 

:::

---
> id: area
> goals: slider

### Bir dairənin sahəsi 

Bəs bir dairənin sahəsini necə hesablayırıq? [Dördrilateralların sahəsini tapmaq](/course/polyhedra/quadrilaterals) üçün istifadə etdiyimiz eyni texnikanı sınayın: şəklini bir çox fərqli hissəyə ayırırıq və daha sonra sahəsini (məsələn, düzbucaqlı və ya üçbucaq) bildiyimiz fərqli bir forma düzəldirik. 

Yeganə fərq ondadır ki, dairələr əyri olduğu üçün bəzi yaxınlaşmalardan istifadə etməliyik: 

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

Burada bölünmüş bir dairəni görə bilərsiniz ${toWord(n1)} xanalar. Dikləri bir sıra düzmək üçün sürüşəni sürüşdürün. 

{.reveal(when="slider")} Əgər takozların sayını artırsaq ${n1}{n1|6|6,30,2} , bu forma daha çox [[düzbucağa bənzəməyə başlayır | dairə | kvadrat]] . 

{.reveal(when="blank-0")} Düzbucağın hündürlüyü [[radiusa]] bərabərdir [[| dövrə |]] dairənin [[diametri]] . _{span.reveal(when="blank-1")} Düzbucağın eni [[ətrafın yarısına]] bərabərdir [[| dövrə |]] dairənin [[radiusundan iki dəfə]] ._ _{span.reveal(when="blank-2")} (Diklərin yarısının aşağı, yarısının yuxarı necə baxdığına diqqət yetirin.)_ 

{.reveal(when="blank-2" delay=1000)} Buna görə düzbucağın ümumi sahəsi təxminən `A = π r^2` . 

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

Burada bölünmüş bir dairəni görə bilərsiniz ${toWord(n)} üzüklər. Əvvəllər olduğu kimi, kaydırıcıyı halqaları "bükmək" üçün hərəkət edə bilərsiniz. 

{.reveal(when="slider")} Üzüklərin sayını artırsaq ${n2}{n2|4|2,12,1} , bu forma getdikcə daha çox [[üçbucağa bənzəməyə başlayır | düzbucaqlı | trapezium]] . 

{.reveal(when="blank-0")} Üçbucağın hündürlüyü [[radiusa]] bərabərdir [[| Diametr | dairənin ətrafı]] . _{span.reveal(when="blank-1")} Üçbucağın əsası [[ətrafa]] bərabərdir [[|]] dairənin [[diametrindən iki dəfə]] ._ _{span.reveal(when="blank-2")} Buna görə üçbucağın ümumi sahəsi təxminən_ 

{.text-center.reveal(when="blank-2")}`A = 1/2 "base" × "height" = π r^2` . 

:::

---
> id: area-2

Sonsuz sayda üzük və ya kəndirdən istifadə edə bilsək, yuxarıdakı yaxınlaşmalar mükəmməl olardı - və ikisi də bizə dairənin sahəsi üçün eyni formul verir: 

{.text-center.r}`A = π r^2` . [Davam edin](btn:next) 

---
> id: pi-approximations

### Pi hesablanır 

Yuxarıda gördüyünüz kimi `π = 3.1415926…` sadə bir tam ədəd deyil və onun onluq rəqəmləri heç bir təkrarlanmadan, əbədi olaraq davam edir. Bu [__xassəyə malik nömrələrə irrasional ədədlər__](gloss:irrational-numbers) deyilir və bu o deməkdir `π` sadə bir fraksiya şəklində ifadə edilə bilməz `a/b` . 

Bu həm də Pi-nin _bütün_ rəqəmlərini heç vaxt yaza bilməyəcəyimiz deməkdir - axırda sonsuz çoxdur. Qədim Yunan və Çin riyaziyyatçıları, Pi'nin ilk dörd onluq rəqəmini müntəzəm çoxbucaqlılardan istifadə edərək dairələri yaxınlaşdıraraq hesabladılar. Diqqət yetirin, daha çox tərəf əlavə etdikdə çoxbucaqlı [[getdikcə daha çox]] görünməyə başlayır [[| az | tam]] bir dairə kimi: 

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

1665-ci ildə [Isaac Newton](bio:newton) 15 rəqəmi hesablamağı bacardı. Bu gün Pi dəyərini daha yüksək dəqiqliyə hesablamaq üçün güclü kompüterlərdən istifadə edə bilərik. 

Mövcud rekord 31,4 trilyon rəqəmdir. Bütün bu rəqəmləri özündə əks etdirən çap kitabının qalınlığı təxminən 400 \ km olacaqdır - [Beynəlxalq Kosmik Stansiyanın](gloss:iss) Yerin orbitinə çıxdığı hündürlükdür! 

Əlbəttə ki, Pi rəqəmlərinin çox olduğunu xatırlamaq lazım deyil. Əslində fraksiya `22/7 = 3.142…` böyük bir yaxınlaşmadır. 

:::

---
> id: pi-sequence

Pi hesablamaq üçün bir yanaşma sonsuz ədəd ardıcıllığından istifadə etməkdir. 1676-cı ildə [Gottfried Vilhelm Leibniz](bio:leibniz) tərəfindən kəşf edilmiş bir nümunə: 

{.text-center}`π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} Bu seriyanın daha çox şərtlərini hesabladığımız zaman, həmişə eyni nümunəni izləsək, nəticə Pi-yə daha da yaxınlaşacaqdır. 

---
> id: pi-colours
> goals: hover

::: column.grow

Bir çox riyaziyyatçı Pi'nin daha da maraqlı bir xüsusiyyətə sahib olduğuna inanır: bu __normal__ bir __saydır__ . Bu o deməkdir ki, 0-dan 9-a qədər olan rəqəmlər tamamilə təsadüfi görünür, sanki təbiət Pi dəyərini təyin etmək üçün 10 tərəfli bir zarın sonsuz dəfələrlə yuvarlandığını göstərir. 

Burada Pi’nin ilk 100 rəqəmini görə bilərsiniz. Rəqəmlərin necə paylandığını görmək üçün bəzi hücrələr üzərində hərəkət edin. 

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

Pi normaldırsa, bu _hər hansı bir_ sətir barədə düşünə biləcəyiniz deməkdir və rəqəmlərində bir yerdə görünəcəkdir. Burada Pi'nin ilk bir milyon rəqəmini axtara bilərsiniz - bunlarda doğum gününüz var? 

::: .box.f-red.pi-box

#### Bir milyon Pi rəqəmi 

    .pi-controls
      | Search for a string of digits:
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---
> id: pi-movies

Harri Potter kimi bütün bir kitabı çox uzun bir rəqəm sətirinə çevirə bilərdik (a = 01, b = 02 və s.). Pi normaldırsa, bu sətir rəqəmlərində bir yerdə görünəcək - ancaq tapmaq üçün kifayət qədər rəqəm hesablamaq milyonlarla il çəkəcək. 

Pi anlamaq asandır, lakin elm və riyaziyyatda fundamental əhəmiyyətə malikdir. Bu, Pi'nin mədəniyyətimizdə qeyri-adi dərəcədə populyarlaşmasına səbəb ola bilər (ən azı, riyaziyyatın digər mövzularına nisbətən): 

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")
    p.caption Pi is the secret combination for the tablet in “Night at the Museum 2”.

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")
    p.caption Professor Frink (“Simpsons”) silences a room of scientists by saying that Pi equals 3.

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")
    p.caption Spock (“Star Trek”) disables an evil computer by asking it to calculate the last digit of Pi.

:::

---
> id: pi-day

Hər il bir _Pi günü var_ , ya da 14 Marta düşür, çünki `pi ≈ 3.14` , və ya 22 iyulda, çünki `pi ≈ 22/7` . 

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

---

## Dərəcələr və radianlar 

> section: radians
> id: degrees
> translated: auto

Həndəsə mövzusunda indiyə qədər həmişə açıları [dərəcə](gloss:degrees) ilə [ölçmüşük](gloss:degrees) . A __{.m-red} tam dairənin__ fırlanması [[360]]°, a __{.m-green} yarım dairə__ [[180]]°, a __{.m-yellow} dörddəbir dairə__ [[90]]° və s. 

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

{.r} 360 nömrəsi çox rahatdır, çünki bu qədər çox saya bölünür: 2, 3, 4, 5, 6, 8, 9, 10, 12, 15 və s. Bu o deməkdir ki, bir dairənin çox fraksiyaları da tam ədədlərdir. Ancaq 360 nömrəsinin haradan gəldiyini düşünmüsünüzmü? [Davam edin](btn:next) 

---
> id: babylon

::: column.grow

Baş verən kimi, 360 dərəcə bu gün də riyaziyyatda istifadə etdiyimiz ən qədim anlayışlardan biridir. Bunlar 5000 il əvvəl, qədim Babildə hazırlanmışdı! 

O dövrdə riyaziyyatın ən vacib tətbiqlərindən biri astronomiyada idi. _Günəş_ , əkinçilər məhsul yetişdirərkən bilməli olduqları dörd fəsli müəyyənləşdirir. Eynilə, _ay_ balıqçılar üçün vacib olan gelgitləri müəyyənləşdirir. İnsanlar ulduzları gələcəyi proqnozlaşdırmaq və ya tanrılarla ünsiyyət qurmaq üçün də araşdırdılar. 

::: column(width=260)

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} Hesablamaq üçün Babil tableti `sqrt(2)`

:::

---
> id: constellations
> goals: rotate

Astronomlar gecənin müəyyən bir vaxtında görünən bürclərin hər gün kiçik bir yer dəyişdiyini gördülər - təxminən 360 gündən sonra yenidən başlanğıc nöqtələrinə dönmüşdülər. Və bu, dairəni 360 dərəcəyə bölmələrinin səbəbi ola bilər. 

    figure: .constellations
      .label.md Midnight on day ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

Əlbətdə ki, bir ildə 365 gün var (dəqiqliklə desək, 365.242199), amma Babil riyaziyyatçıları sadə sundiallarla işləyirdilər və bu yaxınlaşma mükəmməl uyğun idi. 

Həm də mövcud baza-60 nömrəli sistemi ilə yaxşı işləmişdir (bəri `6 xx 60 = 360` ). Bu sistem, bir dəqiqə içində 60 saniyəyə və bir saatda 60 dəqiqəyə sahib olmağımızın səbəbidir - baxmayaraq ki, digər bölmələrin əksəriyyəti [baza 10-da](gloss:base-10) ölçülür (məsələn, on ildə 10 il və ya bir əsrdə 100 il). 

::: column.grow

Bir çoxumuz üçün bucaqları dərəcə ilə ölçmək ikinci təbiətdir: 360° video var, skeytbordlar 540s çəkə bilər və qərarını dəyişdirən kimsə 180° dönüş edə bilər. 

Amma riyazi baxımdan 360 seçim tamamilə özbaşına olur. Əgər Marsda yaşasaydıq, bir dairənin 670°, Yupiterdə bir il isə 10,475 gün ola bilər. 

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} 540 McFlip, 540° fırlanma 

:::

---
> id: radians

### Radianlar 

Əksinə seqmentləri (360 kimi dərəcə) bəzi sıra bir dairə bölünməsi daha riyaziyyatçı tez-tez [__vahid dairə__](gloss:unit-circle) [dövrə](gloss:circle-circumference) (radius 1 ilə bir dairə) istifadə açılar ölçmək üçün üstünlük verirlər. 

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

A [tam dairənin çevrəsi](action:setState(0)) var _{x-equation.small(solution="2 π" keys="+ × π" numeric)}_ . 

{.reveal(when="eqn-0")} A üçün [yarım dairənin fırlanması](action:setState(1)) , _dairə_ boyunca müvafiq məsafədir _{x-equation.small(solution="π" keys="+ × π" numeric)}_ . 

{.reveal(when="eqn-1")} A üçün [dörddə bir dairənin fırlanması](action:setState(2)) , _dairə_ boyunca məsafədir _{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_ . 

{.reveal(when="eqn-2")} Və sair: bucaqları [__ölçməyin__](gloss:radians) bu [__üsuluna radians__](gloss:radians) deyilir (bunu "radius vahidləri" olaraq xatırlaya bilərsiniz). 

:::

---
> id: radians-conversion

Dərəcələrdəki hər bucağın radianlarda ekvivalent ölçüsü var. İkisi arasında çevirmək çox asandır - eynilə metr və kilometr və ya Celsius və Fahrenheit kimi digər bölmələr arasında dəyişə biləcəyiniz kimi: 

{.text-center} __{.m-red} 360°__ _{span.space} =_ __{.m-green} 2 _π_ rad__ 

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left}`=>`_  
__{.m-red} 1°__ _{span.space} =_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} rad__ 

::: column(width=180)

{.text-center} _{span.rotate.right}`=>`_  
__{.m-green} 1 rad__ _{span.space} =_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red}°__ 

:::

---
> id: radians-table

Radians dəyərini ya _π_ , ya da tək bir onluq say kimi yaza bilərsiniz. Bu cədvəldə dərəcə və radianla bərabər bucaq ölçülərini doldura bilərsinizmi? 

| __{.m-red} dərəcə__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_ |
| __{.m-green} radians__ | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2 | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### Məsafə səyahət 

Vahid dairəsinin dairəsi boyunca "məsafəni qət etdik" kimi radianları düşünə bilərsiniz. Bu, dairəvi yolda hərəkət edən obyektlərlə işləyərkən xüsusilə faydalıdır. 

::: column.grow

Məsələn, [Beynəlxalq Kosmik Stansiya](gloss:iss) Yer kürəsini hər 1.5 \ saatda bir dəfə orbitə çıxarır. Bu, onun __fırlanma sürətinin__ olduğunu göstərir [[`(2 pi)/1.5`|`1.5/(2 pi)`|`1.5 * pi`]] saatda radian. 

{.reveal(when="blank-0")} Bir [vahid dairədə](gloss:unit-circle) fırlanma sürəti _həqiqi_ sürətlə eynidır, çünki dairənin uzunluğu radianlarda bir tam dönmə ilə eynidir (hər ikisi də `2pi` ). 

{.reveal(when="blank-0" delay=1000)} ISS orbitinin radiusu 6800 \ km təşkil edir, yəni ISS-in _həqiqi_ sürəti olmalıdır [[`(2 pi)/1.5 xx 6800`|`(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")} = Saatda 28483 km._ 

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

Bu misalda radianların dərəcələrdən daha əlverişli bir vahid olduğunu görə bilərsinizmi? Dönmə sürətini bildikdən sonra, həqiqi sürəti əldə etmək üçün sadəcə radiusla çoxalmalıyıq. 

Başqa bir nümunə: avtomobilinizdə radius 0,25 m olan təkərlər var. 20 m/s sürətlə sürürsən, avtomobilin təkərləri dönər [[`20/0.25 = 80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] saniyədə radian _{span.reveal(when="blank-0")} (və ya `80/(2pi) = 13` saniyədə fırlanma)._ 

---
> id: radians-trig

### Triqonometriya 

Ən sadə həndəsə problemləri üçün dərəcələr və radianlar tamamilə bir-birini əvəz edir - seçdiyiniz birini seçə bilərsiniz və ya cavab hansı vahidə cavab verəcəyinizi söyləyə bilər. Ancaq daha inkişaf etmiş [trigonometriya](gloss:trigonometry) və ya [hesablamanı](gloss:calculus) öyrəndiyiniz zaman ortaya çıxır ki, radianlar dərəcələrdən daha əlverişlidir. 

::: column.grow

Kalkulyatorların əksəriyyətində dərəcə və radian arasında keçmək üçün [xüsusi bir düymə](->.button.mode) var. [__Sin__](gloss:sin) , [__cos__](gloss:cos) və __tan__ kimi triqonometrik funksiyalar açı kimi açılar götürür və onların tərs funksiyaları __arcsin__ , __arccos__ və __arktan__ çıxış nöqtələri verir. Mövcud kalkulyator parametrləri bu açılar üçün hansı bölmələrin istifadə olunduğunu müəyyənləşdirir. 

Bunu hesablamaq üçün bu kalkulyatordan istifadə edin 

{.text-center} sin (30°) = [[0,5]] _{span.eqn-gap}_ cos (1°) = [[0.999]]  
sin (30 rad) = [[-0.988]] _{span.eqn-gap}_ cos (1 rad) = [[0.54]] 

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

Sine funksiyasından istifadə edərkən radianların istifadəsi xüsusilə maraqlı bir üstünlüyə malikdir. Əgər `θ` çox kiçik bir açıdır (20° -dən az və ya 0,3 rad), sonra `sin(θ) ≈ θ` . Misal üçün, 

{.text-center} günah ( ${x}{x|0.1|0,0.5,0.05} ) `≈`${sin(x)} … 

{.reveal(when="var-0")} Buna __kiçik bucaq yaxınlaşması__ deyilir və trigonometrik funksiyaları ehtiva edən bəzi tənlikləri çox asanlaşdıra bilər. Gələcəkdə bu barədə daha çox məlumat əldə edəcəksiniz. 

---

## Tangents, Akkordlar və Arcs 

> section: tangets-chords-arcs
> id: circle-parts
> translated: auto

Əvvəlki hissələrdə bir dairənin bir neçə fərqli hissəsinə - mərkəz, radius, diametr və dövrə kimi adları öyrəndiniz. Ancaq bir dairə ilə əlaqəli bir çox həndəsi element var ki, daha mürəkkəb problemləri həll etməliyik: 

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

* {.r} A [{.red} secant](target:secant) iki nöqtədə bir dairəni kəsən bir xəttdir. [Davam et](btn:next)
* {.r.reveal(when="next-0")} A [{.green} akkord](target:chord) son nöqtələri bir dairənin ətrafına uzanan bir xətt seqmentidir. [Davam et](btn:next)
* {.r.reveal(when="next-1")} A [{.blue} tangent](target:tangent) tam bir nöqtədə bir dairəyə toxunan bir xəttdir. Buna __toxluq nöqtəsi deyilir__ . [Davam et](btn:next)
* {.r.reveal(when="next-2")} Bir [{.yellow} qövs](target:arc) bir dairənin çevrəsinin bir hissəsidir. [Davam et](btn:next)
* {.r.reveal(when="next-3")} A [{.teal} sektor](target:sector) bir _qövs_ və _iki radii ilə bağlanmış_ bir dairənin daxili hissəsidir. [Davam et](btn:next)
* {.r.reveal(when="next-4")} Nəhayət, a [{.purple} seqment](target:segment) bir _qövs_ və _bir akkordla_ bağlanmış bir dairənin daxili hissəsidir. [Davam edin](btn:next) 

:::

---
> id: circle-parts-1

Bu hissədə bütün bu elementlər arasındakı əlaqəyə baxacağıq və xüsusiyyətləri haqqında teoremləri sübut edəcəyik. Artıq bütün tərifləri yadda saxlamağınızdan narahat olmayın - həmişə [lüğətdən](->.footer-link[data-modal=glossarym]) istifadə edə bilərsiniz. 

---

### Tangents 

{.todo} TEZLİKLƏ! 

---

### Akkordlar 

{.todo} TEZLİKLƏ! 

---
> id: earth-arc

### Arklar və Sektorlar 

::: column.grow

Qədim Yunanıstanda elm adamlarının çoxu Yerin bir kürə olduğuna razılaşdılar. Dəlil çox idi: dənizdə üfüqdə itən gəmilərdən tutmuş gecə boyunca ulduzların dairəvi hərəkətinə qədər. 

Təəssüf ki, heç kim Yerin _nə qədər böyük_ olduğunu dəqiq bilmirdi - e.ə. 200 ilə qədər, riyaziyyatçı [Eratosthenes](bio:eratosthenes) əsas həndəsə üsulundan istifadə edərək Yer radiusunu ölçmək üçün usta bir yol tapdı. Bizə lazım olan yalnız bir qövs və bir dairənin sektorları haqqında bir az daha çox bilikdir. 

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

Diaqramda gördüyünüz kimi, bir [{.red} arc](target:arc) [[dövrə]] bir hissəsidir [[| Diametr |]] bir dairənin [[tangensi]] və a [{.yellow} sektor](target:sector) [[daxili]] bir hissəsidir [[| radius |]] bir dairənin [[perimetri]] . 

::: .reveal(when="blank-0 blank-1")

_A_ və _B_ nöqtələri arasındakı qövs tez-tez olduğu kimi yazılır `arc(AB)` . Bu tərif bir qədər qeyri-müəyyəndir: a var [{.purple}](target:major) _A_ və _B-_ ni birləşdirən _,_ lakin dairə boyunca başqa bir şəkildə gedən [ikinci qövs](target:major) . 

İki __qövsün__ ən __kiçikinə kiçik qövs__ , daha __böyüyünə__ isə __əsas qövs__ deyilir. _A_ və _B_ nöqtələri tam bir-birinə tam ziddirsə, hər iki qövs eyni uzunluğa malikdir və [[yarı dairələrdir | çaplar | dairələr]] . 

:::
:::

---
> id: arcs-1

::: column.grow

Bir qövsün uzunluğunu və ya bir sektorun sahəsini tapmaq üçün dairənin mərkəzindəki müvafiq bucaq haqqında bilməliyik: [{.blue} mərkəzi bucaq](target:angle) . 

Qövsün, sektorun və bucağın hamısının tam bir dairə _nisbətini_ necə aldığına diqqət yetirin. Məsələn, əgər [{.blue} mərkəzi bucaqdır](target:angle) [90°](action:set90Deg()) , [[dörddə birini]] alır [[| bir yarım |]] a-nın [[üçdə biri]] [{.teal} tam dairə](target:fangle) . 

::: .reveal(when="blank-0")

Bu o deməkdir ki [{.red} qövsün uzunluğu](target:arc) da `1/4` nin [{.purple}](target:circ) dairənin [bütün ətrafı](target:circ) və [{.yellow} sektorun sahəsi](target:sector) `1/4` nin [{.orange}](target:area) dairənin [bütün sahəsi](target:area) . 

Bu əlaqəni bir tənlikdə ifadə edə bilərik: 

{.text-center}`"arc length" / "circumference" = blank("sector area","circle radius","arc area") / "circle area" = "central angle" / blank("360°","180°","90°")`

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

İndi bu tənlikləri yenidən maraqlandıran dəyişənləri tapmaq üçün yenidən düzəldə bilərik. Məsələn, 

::: column(width=320 parent="padded-thin")

| [qövs uzunluğu](pill:red) | = | `"circumference" × c/360` |
| | = | `2 π r × c/360` |
{.eqn-system}

::: column(width=320)

| [sektor sahəsi](pill:yellow) | = | `"circle area" × c/360` |
| | = | `π r^2 × c/360` |
{.eqn-system}

:::

burada _r_ - dairənin radiusu, _c_ - mərkəzi bucağın ölçüsü. 

---
> id: arcs-rad

Mərkəzi bucaq [dərəcə ilə](gloss:degrees) deyil, [radianla](gloss:radians) ölçülürsə, eyni tənliklərdən istifadə edə bilərik, ancaq 360° ilə əvəz etməliyik [[`2 π`|`1/2 π`|`π`]] : 

::: .reveal(when="blank-0")

::: column(width=320 parent="padded-thin")

| [qövs uzunluğu](pill:red) | = | `2 π r × c/(2π)` |
| | = | `r × c` |
{.eqn-system}

::: column(width=320)

| [sektor sahəsi](pill:yellow) | = | `π r^2 × c/(2π)` |
| | = | `1/2 r^2 c` |
{.eqn-system}

:::

Notice tənliklər çox sadə olmaq, və _π_ hər yerdə həyata ləğv necə. Bunun səbəbi, xatırlatdığınız kimi [, radianların tərifi](/course/circles/radians#radians) əsasən radius 1 ilə bir dairədə olan bir qövsün uzunluğundan ibarətdir. 

İndi gəlin, Yerin dairəsini hesablamaq üçün qövslərdən və sektorlardan necə istifadə edə biləcəyimizə baxaq. [Davam edin](btn:next) 

:::

---
> id: eratosthenes

Qədim Misirdə _Svenet_ şəhəri Nil çayı boyunca yerləşirdi. Swenet, maraqlı bir mülkü olan bir quyu ilə məşhur idi: hər il günəş işığı quyunun dibinə çatanda bir an var idi - 21 iyun, günorta _yaz yayının_ günü. Bu dəqiq vaxtda quyunun dibi işıqlandı, ancaq yanları yox idi, yəni Günəş birbaşa quyunun üstündə dayandı. 

::: column(width=300)

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Qədim misirlilər gəzmək üçün atdığı addımların sayını hesablayaraq uzun məsafələri ölçdülər. 

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} Bəzi mənbələr "Eratosthenes quyusu" Nil çayındakı _Elephantine adasında olduğunu_ söylədi. 

:::

Riyaziyyatçı [Eratosthenes](bio:eratosthenes) , Böyük Kitabxananın direktoru olduğu Swenetdən təxminən 800 km şimalda olan _İsgəndəriyyədə_ yaşayırdı. İsgəndəriyyənin şəhər mərkəzində bir piramida şəkilli üstü olan hündür, dar bir abidə dayanmışdı. 

Eratosthenes, yaz ayının günorta saatlarında obelisk bir kölgə atdığını gördü - yəni günəş birbaşa onun üstündə _deyildi_ . Bunun Yer kürəsinin əyriliyinə görə olduğunu söylədi və bunun planetimizin çevrəsini hesablamaq üçün istifadə edilə biləcəyini başa düşdü. 

---
> id: eratosthenes-1

::: column.grow

{.r} Burada Swenetdəki quyunu, eləcə də İsgəndəriyyədəki obeliskini görə bilərsiniz. Günəş şüaları birbaşa quyuya düşür, ancaq obeliskini bir açı ilə vurub kölgə salın. [Davam edin](btn:next) 

::: .reveal(when="next-0")

Eratosthenes ölçüldü [{.teal}](target:angle1) kölgənin [açısı](target:angle1) 7,2° idi. Bu, eynidir [{.purple} mərkəzi açı](target:angle2) [{.red}](target:arc) İsgəndəriyyədən Swenetə qədər olan [qövs](target:arc) , çünki onlar [[alternativdirlər | şaquli | uyğun]] açılar. 

:::

::: .reveal(when="blank-0")

İndi yuxarıda əldə etdiyimiz qövs uzunluğu üçün tənliyi istifadə edə bilərik: 

{.text-center}`pill("arc length","red","arc") / pill("circumference","blue","circ") = (input(7.2)"°") / "360°"`

:::

::: .reveal(when="blank-1")

Bunu yenidən təşkil etsək, Yerin dairəsini tapırıq 

{.text-center}`pill("circumference","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`

:::

::: .reveal(when="blank-2")

Nəhayət, bir dairənin çevrəsinin olduğunu bilirik `C = 2 pi r` , beləliklə Yer radiusu 

{.text-center}`r_"Earth" = (40000 "km") / (2 pi) ≈ 6400 "km"` . 

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

Eratosthenesin ölçülməsi antik dövrdə ən vacib təcrübələrdən biri idi. Onun Yer ölçüsünü qiymətləndirməsi təəccüblü dərəcədə dəqiq idi, xüsusən yalnız çox əsas ölçmə vasitələrinə girdiyini nəzərə alaraq. 

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

Əlbətdə, orijinal nəticələrini kilometr kimi müasir vahidlərə tərcümə etmək çətin ola bilər. Qədim Yunanıstanda məsafə _stadiyada_ (təxminən 160 m) ölçülürdü, lakin ümumdünya standartı yox idi. Hər bölgədə bir az fərqli bir versiya vardı və hansı Eratosthenin istifadə olunduğunu bilmirik. 

Sonrakı əsrlərdə elm adamları Yer radiusunu hesablamaq üçün başqa üsullardan istifadə etməyə çalışdılar - bəzən çox fərqli və səhv nəticələr göstərdilər. 

Kristofer Kolumbun Portuqaliyadan qərbə üzməsinə səbəb olan bu səhv ölçmələrdən biri idi. Yerin əslində olduğundan daha kiçik olduğunu zənn etdi və Hindistana çatacağına ümid etdi. Əslində, o, fərqli bir qitəyə gəldi: Amerika. 

:::

---

### Seqmentlər 

{.todo} TEZLİKLƏ! 

---

## Dairə teoremləri 

> section: circle-theorems
> sectionStatus: dev

TODO

---

## Dövri çoxbucaqlılar 

> sectionStatus: dev
> section: cyclic-polygons

TODO

---

## Sahələr, konuslar və silindrlər 

> section: spheres-cones-cylinders
> id: solids
> translated: auto

Əvvəlki hissələrdə düz bir səthdə dairələrin xüsusiyyətlərini araşdırdıq. Ancaq dünyamız əslində üç ölçülüdür, buna görə dairələrə əsaslanan bəzi 3D bərk şeylərə nəzər salaq: 

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} Bir [__silindr__](gloss:cylinder) əyri bir səthlə birləşdirilmiş iki konqresiv, paralel dairələrdən ibarətdir. 

::: column(width=220)

    x-solid(size=220)

{.text-center} Bir [__konusun__](gloss:cone) bir nöqtəyə qoşulduğu dairəvi bir baz var (vertex deyilir). 

::: column(width=220)

    x-solid(size=220 static)

{.text-center} Bir [__sferanın__](gloss:sphere) səthindəki hər nöqtə mərkəzindən eyni məsafədədir. 

:::

Bir sahənin tərifinin bir [[dairənin]] tərifi ilə demək olar ki, eyni olduğuna diqqət yetirin [[| radius | kub]] - üç ölçüdən başqa! 

---
> id: gasometer

### Silindrlər 

::: column.grow

Burada Almaniyanın Oberhausen şəhərindəki silindrik _qazometrini_ görə bilərsiniz. Yaxınlıqdakı fabriklərdə və elektrik stansiyalarında yanacaq kimi istifadə olunan təbii qazı saxlayırdı. Qazometr 120 m hündürlükdədir, təməli və tavanı radiusu 35 m olan iki böyük dairədir. Mühəndislərin cavab vermək istədikləri iki vacib sual var: 

* Nə qədər təbii qaz saxlanıla bilər? Bu [[həcmdir | sahəsi |]] silindrin [[diametri]].
* {.reveal(when="blank-0")} Qazometr qurmaq üçün nə qədər polad lazımdır? Bu (təxminən) [[səth sahəsi | dövrə |]] silindrin [[diaqonalı]] . 

{.reveal(when="blank-0 blank-1")} Hər iki nəticənin düsturlarını tapmağa çalışaq! 

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} Qazometr Oberhausen 

:::

---
> id: cylinder-prism

#### Silindr həcmi 

Bir silindrin yuxarı və alt hissəsi __əsas__ deyilən iki konqres dairəsidir. The __{.m-blue}__ bir silindr __hündürlüyü _h___ bu əsasları arasında şaquli məsafə və __{.m-red}__ bir silindr __radius _r___ sadəcə dairəvi əsasların radiusudur. 

Bir istifadə edərək bir silindrini təqib edə bilərik ${n}{n|5|3,20,1} tərəfli [__prizma__](gloss:prism) . Tərəflərin sayı artdıqca, prizma daha çox silindr kimi görünməyə başlayır: 

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

Bir silindr texniki cəhətdən prizma olmasa da, bir çox xüsusiyyətlərini bölüşürlər. Hər iki halda da, həcmini onların sahəsini çoxaltmaqla tapa bilərik __{.m-red}__ ilə birlikdə __baza__ __{.m-blue} boyu__ . Bu, radiusu olan bir silindr deməkdir _{.b.m-red} r_ və boy _{.b.m-blue} h_ həcmi var 

{.text-center}`V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_ 

{.reveal(when="eqn-0")} Unutmayın ki, radius və hündürlük eyni hissələrdən istifadə etməlidir. Məsələn, _r_ və _h_ hər ikisi sm-dirsə, onda həcm içəridədir [[`"cm"^3`|`"cm"^2`| sm]] . 

---
> id: oblique-cylinder
> goals: slide

::: column.grow

Yuxarıdakı nümunələrdə silindrin iki əsası həmişə _birbaşa bir-birinin üstündə_ idi: buna __sağ silindr__ deyilir. Baza bir-birindən birbaşa yuxarıda deyilsə, bizdə bir __oblique silindr var__ . Döşəmələr hələ də paraleldir, lakin tərəflər 90° -dən çox olmayan bir açıya "söykənir". 

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} İtaliyadakı Pizanın əyilmiş _qülləsi,_ olduqca əyri bir silindr deyil. 

:::

---
> id: cavalieri
> goals: slide

Bir oblique silindrinin həcmi eyni radius və hündürlüyə malik bir sağ silindrlə eyni olur. Bu, İtaliyalı riyaziyyatçı [Bonaventura Cavalierinin](bio:cavalieri) adını daşıyan [__Cavalieri prinsipi ilə__](gloss:cavalieri) əlaqədardır: hər hündürlükdə iki bərk sahənin eyni kəsişmə sahəsi varsa, onda eyni həcmə sahib olacaqlar. 

Bir silindrin çox nazik disklərə dilimləndiyini düşünün. Bundan sonra bu diskləri üfüqi bir silindr əldə etmək üçün üfüqi sürüşdürə bilərik. Fərdi disklərin həcmi onu oblique halında dəyişmir, buna görə ümumi həcm də sabit qalır: 

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::

    

---
> id: cylinder-surface

#### Bir silindrin səthi sahəsi 

::: column.grow

Bir silindr səthinin sahəsi tapmaq üçün, biz onun düz [xalis](gloss:net) onu "açmaq" var. Bunu özünüz cəhd edə bilərsiniz, məsələn, bir qutu qabdakı etiketi silməklə. 

İki [[dairə var | kürələr | kvadratlar]] , biri başında, biri silindrin altındadır. Əyri tərəf əslində böyük bir [[düzbucaqlıdır | kvadrat | ellips]] . 

* {.reveal(when="blank-0 blank-1")} Hər iki dairənin sahəsi var _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ .
* {.reveal(when="eqn-0")} Düzbucağın hündürlüyü _{x-equation.small(solution="h" keys=" " short-var)}_ _{span.reveal(when="eqn-1")} və düzbucağın eni [[dairəvi]] ilə eynidir [[| Diametr |]] dairələrin [[tangensi]] :_ _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_ . 

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

Bu o deməkdir ki, radiusu _r_ və hündürlüyü _h_ olan bir silindrin ümumi səth sahəsi verilir 

{.text-center}`A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_ . 

---
> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

Silindrlər dünyanın hər yerində - soda qutularından tualet kağızı və ya su borularına qədər tapıla bilər. Başqa nümunələri düşünə bilərsinizmi? 

Yuxarıdakı _Qazometr_ radiusu 35 m və hündürlüyü 120 m idi. İndi onun həcminin təxminən [[461,000 ± 1000]] olduğunu hesablaya bilərik `"m"^3` və onun səth sahəsi təxminən [[34,080 ± 100-]] dir `"m"^2` . 

---
> id: cone

### Konuslar 

::: column.grow

Bir [__konus__](gloss:cone) , dairəvi olan üç ölçülü bir bərkdir __{.m-red} baza__ . Diaqramda göstərildiyi kimi yan tərəfi "yuxarıya doğru" və bir nöqtədə deyilir __{.m-green} dik__ . 

The __{.m-red}__ konus __radius__ dairəvi bazasının radius və __{.m-blue}__ konusun __hündürlüyü__ bazadan dikliyə perpendikulyar məsafədir. 

Əvvəllər tanış olduğumuz digər formalar kimi, konuslar ətrafımızda hər yerdədir: dondurma konusları, yol konusları, müəyyən damlar və hətta Milad ağacları. Başqa nə düşünə bilərsən? 

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

#### Bir konusun həcmi 

::: column.grow

Daha əvvəl bir prizdən istifadə edərək bir silindrin həcmini tapdıq. Eynilə, bir [__piramida__](gloss:pyramid) istifadə edərək bir konusun həcmini tapa bilərik. 

Burada a görə bilərsiniz ${n}{n|5|3,18,1} tərəfli piramida. Tərəflərin sayı artdıqca, piramida daha çox konus kimi görünməyə başlayır. Əslində, bir konusun _sonsuz_ tərəfləri olan bir piramida olaraq düşünə bilərdik! 

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

Bu həm də o deməkdir ki, həcm üçün tənliyindən də istifadə edə bilərik: `V = 1/3 "base" × "height"` . Bir konusun əsası bir dairədir, buna görə radiusu _r_ və hündürlüyü _h_ olan bir konusun həcmi 

{.text-center}`V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_ 

---
> id: cone-circumscribed

Bir silindr həcmi üçün tənlik ilə oxşarlığa diqqət yetirin. Konusun _ətrafında_ eyni baza və hündürlüklə bir silindr çəkməyi düşünün - buna __dairəvi silindr__ deyilir. İndi konus tam [[üçdə birini]] alacaq [[| yarım |]] Silindr həcminin [[dörddə biri]] 

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey} Qeyd: Bir yaxınlaşma kimi sonsuz bir çox kiçik tərəfin bir az "qüsursuz" olduğunu düşünə bilərsiniz. Riyaziyyatçılar uzun müddət bir konusun həcmini hesablamaq üçün daha sadə bir yol tapmağa çalışdılar. 1900-cü ildə böyük riyaziyyatçı [David Hilbert](bio:hilbert) hətta riyaziyyatda 23 ən vacib həll edilməmiş problemlərdən biri olaraq adlandırdı! Bu gün bilirik ki, bu, əslində mümkün deyil. 

---
> id: oblique-cone
> goals: slide

::: column.grow

Bir silindr kimi, bir konus "düz" olmalıdır. Əgər vertex birbaşa bazanın mərkəzindən yuxarıdırsa, bizim __sağ konusumuz var__ . Əks təqdirdə, biz onu __oblique konus adlandırırıq__ . 

Bir daha Cavalieri prinsipindən istifadə edərək bütün oblique konusların eyni baza və hündürlüyə sahib olduqları halda eyni həcmdə olduğunu göstərə bilərik. 

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### Bir konusun səthi sahəsi 

::: column.grow

Bir konusun səth sahəsini tapmaq bir az daha çətindir. Əvvəllər olduğu kimi, bir konusu da toruna sala bilərik. Nə baş verdiyini görmək üçün kaydırıcıyı hərəkət etdirin: bu vəziyyətdə bir dairə və bir [[dairə sektoru]] alırıq [[| dairə seqmenti | dairə qövsü]] . 

{.reveal(when="blank-0")} İndi yalnız bu iki komponentin sahəsini əlavə etməliyik. The __{.m-yellow} baza__ radius _r_ olan bir dairədir, buna görə də sahəsi 

{.text-center.reveal(when="blank-0")}`pill(A_"Base","yellow","circle") =` _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_ . 

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

Radiusu __{.m-green} sektor__ bir konusun halqasından onun ucuna qədər olan məsafədir. Buna deyilir [{.pill.green.b} maili boyu](target:s) normal eyni konus [_var,_](target:s) və [{.pill.blue.b} hündürlük _h_](target:h) . Biz [Pifaqor](gloss:pythagoras-theorem) istifadə maili boyu tapa bilərsiniz: 

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_ |
| `s` | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
{.eqn-system}

::: column(width=280)

    x-geopad.sketch.no-background(width=280 height=200): svg
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

The [{.pill.red}](target:arc) sektorun [qövs uzunluğu](target:arc) [[ətraf]] ilə eynidir [[| Diametr | qövsü]] [{.pill.yellow} baza](target:base) : _{span.reveal(when="blank-0")}`2 π r` . İndi əvvəlki hissədə əldə etdiyimiz [düsturdan](gloss:circle-sector) istifadə edərək sektorun sahəsini tapa bilərik:_ 

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")

| `pill(A_"Sector","green","sector")` | `=` | `pill(A_"Circle","teal","circle") × pill("arc","red","arc") / pill("circumference","teal","circumference")` |
| | `=` | _{x-equation(solution="π r sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ | 

:::

::: column(width=280)

    x-geopad.sketch.no-background(width=280 height=300 style="margin-top: -20px"): svg
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

Nəhayət, yalnız sahəni əlavə etməliyik __{.m-yellow} baza__ və sahəsi __{.m-green} sektor__ , konusun cəmi səthini almaq üçün: 

{.text-center}`A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ 

---
> id: sphere

### Sahələr 

::: column.grow

Bir [__sahə__](gloss:sphere) , veriləndən eyni məsafədə olan bütün nöqtələrdən ibarət olan üç ölçülü bir bərkdir __{.m-green} mərkəzi _C.___ Bu məsafəyə deyilir __{.m-red} kürənin radiusu _r___ . 

Bir sahəni "üç ölçülü bir [dairə](gloss:circle) " kimi düşünə bilərsiniz. Bir dairə kimi, bir sahənin də a __{.m-blue} diametri _d___ , bu [[iki dəfədir |]] radiusun uzunluğunun [[yarısı]] , həmçinin akkordlar və sekanlar. 

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} [Əvvəlki hissədə](/course/circles/tangets-chords-arcs#eratosthenes-1) Yunan riyaziyyatçısı [Eratosthenesin](bio:eratosthenes) bir dirəyin kölgəsindən istifadə edərək Yer radiusunu necə hesabladığını öyrəndiniz - bu 6,371 km. İndi Yerin ümumi həcmini və səthini tapmağa çalışaq. [Davam edin](btn:next) 

---
> id: sphere-volume

#### Bir sahənin həcmi 

Bir sferanın həcmini tapmaq üçün bir daha Cavalieri prinsipindən istifadə etməliyik. Bir yarımkürədən başlayaq - ekvator boyunca kəsilmiş bir sahə. Həm də yarımkürədə olduğu kimi eyni radius və hündürlüyə malik, lakin ortada "kəsilmiş" bir konus olan bir silindirə ehtiyacımız var. 

Aşağıdakı kaydırıcıyı hərəkət etdirərkən, hər iki şəklin kəsişməsini təməlin üstündəki müəyyən bir yüksəklikdə görə bilərsiniz: 

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

{.reveal(when="slider-0")} Gəlin bu iki bərk cismin bir-birindən məsafədə olan kəsişmə sahəsini tapmağa çalışaq [{.pill.blue} hündürlük _h təməldən_](target:h) yuxarı. 

::: column.grow

{.reveal(when="slider-0")} Yarımkürənin kəsişməsi həmişə bir [[dairədir | üzük | silindr]] . 

{.reveal(when="blank-0")} The [{.pill.red}](target:x) kəsişmənin [radius _x_](target:x) hissəsi a hissəsidir [{.pill.yellow} sağ bucaqlı üçbucaq](target:tri) , buna görə [Pifaqoradan](gloss:pythagoras-theorem) istifadə edə bilərik: 

::: .reveal(when="blank-0")

{.text-center}`pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")` . 

İndi kəsişmənin sahəsi 

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)

:::

::: column.grow.reveal(when="eqn-0")

Kəsilmiş silindrinin kəsişməsi həmişə bir [[üzükdür | dairə | konus]] . 

::: .reveal(when="blank-1")

Çuxurun radiusu _h-_ dir. Çuxurun sahəsini daha böyük dairənin sahəsindən çıxarmaqla tapa bilərik: 

| _A_ | = | `π r^2 - π h^2` |
| | = | `π (r^2 - h^2)` |
{.eqn-system}

:::

:::

---
> id: sphere-volume-1

Hər iki bərkin hər səviyyədə eyni kəsişmə sahəsinə sahib olduğu görünür. Cavalieri prinsipi ilə hər iki qatı eyni [[həcmdə olmalıdır | səth sahəsi | dairə]] ! _{span.reveal(when="blank-0")} Biz [silindr](gloss:cylinder-volume) həcmi və [konus](gloss:cone-volume) həcmi çıxarılaraq yarımkürəsində həcmi tapa bilərsiniz:_ 

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")

| `V_"Hemisphere"` | = | `V_"Cylinder" - V_"Cone"` |
| | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ | 

:::

---
> id: sphere-volume-2

Bir sahə [[iki]] yarımkürədən ibarətdir, _{span.reveal(when="blank-0")} deməkdir ki, həcmi olmalıdır_ 

{.text-center.reveal(when="blank-0")}`V = 4/3 π r^3` . 

---
> id: earth-volume
> goals: numbers

::: column.grow

Yer (təqribən) radiusu 6,371 \ km olan bir sferadır. Buna görə onun həcmi 

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
| | `=` | _{span.numbers} 1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} Yerin orta sıxlığı `5510 "kg/m"^3` . Bu, onun ümumi kütləsi deməkdir 

{.text-center.reveal(when="numbers")}`"Mass" = "Volume" × "Density" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} Bu 24 sıfır izlədi 6! 

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

Bir silindr, konus və sferanın həcminə görə olan tənlikləri müqayisə etsəniz, həndəsədə ən məmnun əlaqələrdən birini görə bilərsiniz. Təsəvvür edin ki, bünövrəsinin diametri ilə eyni hündürlüyə malik bir silindr var. İndi həm konusa həm də içərisinə mükəmməl bir sfera uyğunlaşa bilərik: 

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} Bu konusun radiusu var `r` və boyu `2r`. Onun həcmi _{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_ 

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} Bu sferanın radiusu var `r` . Onun həcmi _{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_ 

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} Bu silindr radiusa malikdir `r` və boyu `2r` . Onun həcmi _{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_ 

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} Diqqət yetirin, əgər [[əlavə]] etsək [[| çıxartmaq | çoxaltmaq]] konus həcmi və sahəsi, biz silindr dəqiq həcmi almaq! 

---
> id: sphere-maps
> goals: move projection

#### Bir sferanın səthi sahəsi 

Bir sferanın səthi sahəsi üçün bir düstur tapmaq çox çətindir. Bir səbəb, əvvəllər konuslar və silindrlər hazırladığımız kimi bir sferanın səthini aça və "düzləşdirə" bilməyəcəyimizdir. 

Xəritə yaratmağa çalışarkən bu müəyyən bir məsələdir. Yer əyri, üç ölçülü bir səthə malikdir, lakin hər bir çap olunmuş xəritə düz və iki ölçülü olmalıdır. Bu o deməkdir ki, Coğrafiyaçılar aldatmaq məcburiyyətindədir: müəyyən əraziləri uzatmaq və ya büzməklə. 

Burada __proqnozlar__ adlanan bir neçə fərqli xəritəni görə bilərsiniz. Qırmızı kvadratı hərəkət etdirməyə çalışın və bu ərazinin _həqiqətən_ dünyanın necə göründüyünə baxın: 

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
          p.caption As you move the square on the map, notice how the size and shape of the #[em actual] area changes on the three-dimensional globe.
    x-gesture(target="#projection" slide="50, 20")

---
> id: sphere-surface

Bir sferanın səthini tapmaq üçün başqa bir forma istifadə edərək bir daha təqribi şəkildə qiymətləndirə bilərik - məsələn, çox üzlü bir polyhedron. Üzlərin sayı artdıqca polyhedron daha çox kürə kimi görünməyə başlayır. 

{.todo} Tezliklə: Sahə Səthi Sahəsi Sübut 

    
    
    
    

---

## Konik bölmələr 

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola
> translated: auto

Dairə bir [konus](gloss:cone) vasitəsilə "dilimlər" istifadə edərək yaradıla bilən dörd müxtəlif formadan biridir. Bunu bir məşəlin yüngül konusundan istifadə etməklə göstərmək olar: 

    x-conic-section
    x-scale-box(width=760).conics
      .row
        .active
          p.no-voice: strong Circle
          include svg/circle.svg
        .hide
          p.no-voice: strong Ellipse
          include svg/ellipse.svg
        .hide
          p.no-voice: strong Parabola
          include svg/parabola.svg
        .hide
          p.no-voice: strong Hyperbola
          include svg/hyperbola.svg

---
> id: conics-1

Məşəri şaquli olaraq aşağıya doğru yönəltsəniz, bir [[dairə]] görürsünüz [[| ellips | oval]] işıq. _{span.reveal(when="blank-0")} [__Konusa əyilmişsinizsə,__](gloss:ellipse) bir [__ellips__](gloss:ellipse) əldə edirsiniz. Daha da [__əyilmişsinizsə, parabola__](gloss:parabola) və ya [__hiperbola__](gloss:hyperbola) əldə edirsiniz._ 

---
> id: conics-2

::: column.grow

[__Birlikdə__](gloss:conic-section) bu dörd forma [__konik hissələr__](gloss:conic-section) adlanır. Hamısı çox fərqli görünsələr də, bir-biri ilə sıx bağlıdırlar: əslində hamısı eyni tənlikdən istifadə edərək yarana bilər! 

Konik bölmələr ilk dəfə qədim yunan riyaziyyatçısı [Perga Apollonius](bio:apollonius) tərəfindən araşdırılmış və onlara da qeyri-adi adlar verilmişdir. 

Sonrakı kurslarda parabolalar və hiperbolalar haqqında daha çox məlumat əldə edəcəksiniz. Hələlik, ellipsə daha yaxından nəzər salaq. 

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### Ellips 

Bir ellips sadəcə "uzadılmış bir dairə" kimi görünür. Əslində bu barədə _iki mərkəzi_ olan bir dairə kimi düşünə bilərsiniz - bunlara __fokus nöqtələri__ deyilir. Bir dairənin hər nöqtəsi mərkəzindən eyni məsafədə olduğu kimi, bir ellipsdəki hər nöqtə eyni iki _məsafəyə_ bərabər _məsafələrin cəminə_ malikdir. 

İki sabit nöqtəyə bağlanmış uzun bir siminiz varsa, iplərin maksimum çatışmazlığını izləyərək mükəmməl bir elips çəkə bilərsiniz: 

{.todo} Tezliklə: Ellipses interaktiv rəsm 

---
> id: ellipses-2
> goals: v0 v1 v2 v3

Bir ellips çəkə biləcəyinizin bir çox digər fiziki təsvirləri var: 

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

### Planet orbitləri 

::: column.grow

Bu kursun əvvəlindən xatırlaya bilərsiniz ki, qədim yunan astronomları Yerin kainatın mərkəzində olduğuna və günəş, ay və planetlərin Yer kürəsində dairəvi orbitlərdə hərəkət etdiyinə inandılar. 

Təəssüf ki, göyün astronomik müşahidəsi bunu tam dəstəkləmədi. Məsələn, günəş ilin bəzi hissələrində daha böyük, digərləri ərzində daha kiçik görünürdü. Bir dairədə, hər nöqtə [[eyni]] olmalıdır [[| artan |]] mərkəzindən [[azalma]] məsafəsi. 

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} Yunan astronomu Nikica Hipparchus 

:::

---
> id: epicycles
> goals: play

Bunu düzəltmək üçün astronomlar Günəş sisteminin modellərinə __Episiklləri__ əlavə etdilər: planetlər eyni zamanda daha kiçik bir dairədə fırlanarkən Yer ətrafında geniş bir dairə üzərində hərəkət edirlər. Çox mürəkkəb olsa da, bu, 1000 ildən çox müddətdə kainatın ən çox qəbul edilmiş modeli idi: 

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} Bu planet edir ${n}{n|6|2,12,1} böyük bir dairə ( __deferent__ ) ətrafında bir fırlanma zamanı kiçik dairə ( __episikl__ ) ətrafında fırlanma. 

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} 16 əsrlik __Geosentrik modeldə episikllərin rəsmləri__ . Yunan sözü "planetlər" "gəzənlər" deməkdir. 

:::

---
> id: kepler
> goals: play

::: column.grow

Zamanla insanlar Yerin Günəşi ( __Heliocentric model__ ) orbit edən bir çox planetdən biri olduğunu başa düşdülər, ancaq astronom [Yohannes Kepler](bio:kepler) planetlərin əslində _elliptik orbitlərdə_ hərəkət etdiyini kəşf etdi. 

Günəş bu ellipslərin iki mərkəz nöqtəsindən birindədir. Planetlər günəşə yaxınlaşdıqca sürətlənir və uzaqlaşdıqca yavaşlayır. 

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

Bir neçə onillikdən sonra [İsaak Nyuton](bio:newton) yeni hazırlanmış [__cazibə__](gloss:gravity) qanunlarından istifadə edərək Keplerin müşahidələrini sübut edə bildi. Nyuton kainatda hər iki kütlə arasında bir qüvvənin - iki maqnit arasındakı cazibə bənzər bir qüvvənin olduğunu başa düşdü. 

Ağırlıq hər şeyin yerə düşməsinə səbəb olur və cazibə qüvvəsi də planetlərin günəş ətrafında hərəkət etməsinə səbəb olur. Yalnız planetlərin hərəkət etdiyi böyük sürət, birbaşa günəşə düşməsini maneə törədir. 

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

Newton qanunlarından istifadə edərək cazibə qüvvəsi altında hərəkət edərkən cisimlərin çəkdiyi yolu əldə edə bilərsiniz. Məlum olub ki, planetlər ellips üzərində hərəkət edir, lakin kometalar kimi digər cisimlər [parabolik](gloss:parabola) və ya [hiperbolik](gloss:hyperbola) yollarla səyahət edə bilər: ətrafa dönmədən və kainata atılmadan günəşə yaxın uçurlar, heç geri qayıtmayacaqlar. 

Rəvayətə görə, düşən bir alma Nyutonu cazibə haqqında düşünməyə ruhlandırdı. O, bütün dövrlərin ən nüfuzlu elm adamlarından biri idi və onun fikirləri təxminən 300 ildir - Albert Eynşteyn nisbiliyi kəşf edənədək dünyanı dərk etməyimizi formalaşdırdı. 

:::
