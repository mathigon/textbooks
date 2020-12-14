# Çoxbucaqlılar və çoxbucaqlılar 

## Çoxbucaqlılar 

> section: polygons
> id: polygons
> translated: auto

[__Çoxbucaqlı__](gloss:polygon) , yalnız düz tərəfləri olan qapalı, düz bir forma. Çoxbucaqlıların hər hansı bir tərəfi və açıları ola bilər, lakin tərəflər əyri ola bilməz. Aşağıdakı şekillerdən hansı çoxbucaqlıdır? 

    x-picker
      .item#item1: include svg/polygons/polygon-1.svg
      .item(data-error="not-a-polygon-1"): include svg/polygons/polygon-2.svg
      .item(data-error="not-a-polygon-2"): include svg/polygons/polygon-3.svg
      .item: include svg/polygons/polygon-4.svg
      .item(data-error="not-a-polygon-3"): include svg/polygons/polygon-5.svg
      .item: include svg/polygons/polygon-6.svg
    
    x-gesture(target="#item1")

---
> id: polygons-1

Çox tərəflərinə görə, çoxbucaqlılara müxtəlif adlar veririk: 

    .row.padded-thin
      div(style="width: 100px")
        include svg/polygons/number-3.svg
        p.caption #[strong Triangle]#[br]3 sides
      div(style="width: 100px")
        include svg/polygons/number-4.svg
        p.caption #[strong Quadrilateral]#[br]4 sides
      div(style="width: 100px")
        include svg/polygons/number-5.svg
        p.caption #[strong Pentagon]#[br]5 sides
      div(style="width: 100px")
        include svg/polygons/number-6.svg
        p.caption #[strong Hexagon]#[br]6 sides
      div(style="width: 100px")
        include svg/polygons/number-7.svg
        p.caption #[strong Heptagon]#[br]7 sides
      div(style="width: 100px")
        include svg/polygons/number-8.svg
        p.caption #[strong Octagon]#[br]8 sides

---
> id: angles-0

### Poliqonlardakı bucaqlar 

_N_ tərəfləri olan hər çoxbucağın da _n_ [daxili açıları var](gloss:internal-angle) . Üçbucaqdakı daxili açıların cəminin həmişə [[180]]° olduğunu bilirik, amma digər çoxbucaqlılar haqqında nə demək olar? 

---
> id: angles
> goals: angle-0 angle-1

::: column.grow(width=300)

    x-geopad(width=300 height=300): svg
      circle.move(name="a" cx=40 cy=40)
      circle.move(name="b" cx=260 cy=80)
      circle.move(name="c" cx=240 cy=220)
      circle.move(name="d" cx=80 cy=260)
      path.fill.red(x="angle(b,a,d)" label="${a1[0]}°")
      path.fill.blue(x="angle(c,b,a)" label="${a1[1]}°")
      path.fill.green(x="angle(d,c,b)" label="${a1[2]}°")
      path.fill.yellow(x="angle(a,d,c)" label="${360-a1[0]-a1[1]-a1[2]}°")
      path(name="p1" x="polygon(a,b,c,d)")

{.text-center.var} _{span.circled.red}${a1[0]}°_ + _{span.circled.blue}${a1[1]}°_ + _{span.circled.green}${a1[2]}°_ + _{span.circled.yellow}${360-a1[0]-a1[1]-a1[2]}°_ = _{x-anibutton(text="???")}_ 

    x-gesture(target="x-anibutton")

::: column.grow(width=300)

    x-geopad(width=300 height=300): svg
      circle.move(name="e" cx=120 cy=30)
      circle.move(name="f" cx=270 cy=100)
      circle.move(name="g" cx=220 cy=270)
      circle.move(name="h" cx=80 cy=240)
      circle.move(name="i" cx=30 cy=150)
      path.fill.red(x="angle(f,e,i)" label="${a2[0]}°")
      path.fill.blue(x="angle(g,f,e)" label="${a2[1]}°")
      path.fill.green(x="angle(h,g,f)" label="${a2[2]}°")
      path.fill.yellow(x="angle(i,h,g)" label="${a2[3]}°")
      path.fill.purple(x="angle(e,i,h)" label="${540-a2[0]-a2[1]-a2[2]-a2[3]}°")
      path(name="p2" x="polygon(e,f,g,h,i)")

{.text-center.var} _{span.circled.red}${a2[0]}°_ + _{span.circled.blue}${a2[1]}°_ + _{span.circled.green}${a2[2]}°_ + _{span.circled.yellow}${a2[3]}°_ + _{span.circled.purple}${540-a2[0]-a2[1]-a2[2]-a2[3]}°_ = _{x-anibutton(text="???")}_ 

:::

---
> id: angles-1

Dörd tərəfli daxili açıların cəminə həmişə [[360]]° bənzəyir - tam [[iki dəfə | üç dəfə |]] üçbucaqdakı açıların [[yarısı]] . _{span.reveal(when="blank-0 blank-1")} Bu təsadüfi deyil: hər dörd tərəfli iki üçbucağa bölmək olar._ 

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} Eyni şey daha çox çoxbucaqlı üçün də işləyir. Bir pentaqonu [[3]] üçbucağa ayıra bilərik, buna görə daxili bucaq cəmidir `3 × 180° =` [[540]]°. _{span.reveal(when="blank-2 blank-3")} Və bir altıbucaqlı [[4]] üçbucağa bölə bilərik, buna görə daxili bucaq cəmidir `4 × 180° =` [[720]]°._ 

---
> id: internal-angle-sum

Bir çoxbucaqlı ${x}{x|7|3,15,1} tərəflər daxili bucaq cəmi 180° × olacaqdır ${x-2} = ${(x-2)*180}°. Ümumiyyətlə _n_ tərəfləri olan çoxbucaqlı [[n - 2-ə]] bölünə bilər [[| n - 1 | n]] üçbucaq. Buna görə də 

{.text-center.reveal(when="blank-0")} Bir _n_ -gonda daxili açıların cəmi `= (n - 2) × 180°` . 

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### Konveks və konkav poliqonları 

::: column.grow

Bir çoxbucağın "içəri işarə edən" bir bölməsi varsa [__konkret__](gloss:concave) olduğunu söyləyirik. Təsəvvür edə bilərsiniz ki, bu hissə ["düzəldilib"](target:cave) . Konkav _olmayan_ çoxbucaqlılara [__konveks__](gloss:convex) deyilir. 

Konkav poliqonlarını asanlıqla müəyyən edə biləcəyiniz iki yol var: bunlar ən azı [180° -dən böyük olan](target:angle) bir [daxili açıya malikdirlər](target:angle) . Həm də ən azı [çoxbucağın _kənarında_ olan](target:diagonal) bir [diaqonal var](target:diagonal) . 

Konveks çoxbucaqlılarda, digər tərəfdən bütün daxili açılar [[180]]° -dən azdır və bütün diaqonallar [[içəridə |]] çoxbucağın [[xaricində]] . 

::: column(width=240)

    x-geopad(width=240): svg
      circle(hidden name="a" x="point(40,70)")
      circle(hidden name="b" x="point(60,170)")
      circle(hidden name="c" x="point(160,200)")
      circle(hidden name="d" x="point(150,130)")
      circle(hidden name="e" x="point(190,40)")
      path.fill.blue(x="polygon(a,b,c,d,e)" target="cave diagonal angle")
      path.transparent.red.fill(x="polygon(c,d,e)" target="cave")
      path.red.fill.transparent(x="angle(c,d,e)" target="angle")
      path.transparent(x="segment(a,c)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(a,d)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(b,d)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(b,e)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent.red(x="segment(c,e)" target="diagonal")

:::

---
> id: concave-1

Bu çoxbucaqlılardan hansısı konkavdur? 

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### Daimi çoxbucaqlılar 

Biz tərəflərin eyni uzunluğu varsa bir poliqon [__müntəzəm__](gloss:regular-polygon) deyil ki, və açılar eyni ölçüsü var. Bu şekillerdən hansı müntəzəm çoxbucaqlıdır? 

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

Daimi çoxbucaqlılar çox fərqli ölçülərdə ola bilər - lakin eyni sayda tərəfləri [[olan]] bütün müntəzəm çoxbucaqlılar [[oxşardır | həmfikirdirlər | eyni sahəyə sahib olun]] ! 

---
> id: regular-2

Poliqonlardakı bütün [daxili açıların](gloss:internal-angle) cəmini artıq bilirik. Daimi çoxbucaqlılar üçün bütün bu açılar [[eyni ölçüyə malikdir | alternativ açılardır]] , buna görə bir daxili bucağın ölçüsünü işləyə bilərik: 

{.text-center.reveal(when="blank-0")} bucaq = <mfrac><mrow>[[bütün açıların cəmidir | açıların sayı]]</mrow><mrow>[[açıların sayı | bütün açıların cəmidir]]</mrow></mfrac> _{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x` ._ 

{.reveal(when="blank-1 blank-2" delay=1000)} Əgər `n=3` bərabər tərəfli üçbucağın daxili açılarının ölçüsünü alırıq - artıq [[60]]° olması lazım olduğunu bilirik. _{span.reveal(when="blank-3")} Daimi çoxbucaqlı ilə ${x}{x|6|3,12,1} tərəflər, hər bir daxili açı 180° -_ <mfrac class="inline"><mrow>_360°_</mrow><mrow>_${x}_</mrow></mfrac> _= ${round(180-360/x)}°._ 

---
> id: regular-area

### Daimi çoxbucaqlıların sahəsi 

::: column(width=320)

    x-geopad.sticky(width=320 height=320): svg
      circle.reveal(name="m" x="point(160, 160)" when="blank-0" animation="pop")
      path(name="p" x="regular(m, 140, n)")
      circle(name="p0" x="p.points[0]")
      circle(name="p1" x="p.points[1]")
      circle(name="k" x="segment(p1,p0).midpoint" hidden)
    
      path.blue.fill.light.transparent(x="polygon(p0,m,p1)" target="isosceles-triangle")
      path.blue.fill.light.transparent(x="polygon(p0,m,k)" target="right-triangle")
      path.blue.fill.transparent(x="angle(m,k,p0)" size=15 target="right-triangle")
      path.blue.fill.reveal(when="blank-1 blank-2" x="angle(k,p0,m)" size=25 target="base-angle right-triangle alpha isosceles-triangle" label="α")
      path.blue.fill.reveal(when="blank-1 blank-2" x="angle(m,p1,k)" size=25 target="base-angle isosceles-triangle")
    
      for i in [0,1,2,3,4,5,6,7,8,9,10,11]
        path.thin.reveal(when="blank-0" delay=i*150 x=`segment(p.points[${i}%n],m)` animation="draw")
    
      path.yellow.reveal(when="blank-2" x="segment(m,k)" target="apothem" label="apothem" animation="draw")
      path.green(x="segment(p1,p0)" target="base" label="s = 1m")
      path.green(x="segment(k,p0)" target="base half-base")
    
      for i in [0,1,2,3,4,5,6,7,8,9,10,11]
        path.red.fill.transparent(x=`angle(p.points[${i+2}%n],p.points[${i+1}%n],p.points[${i}%n])` size=18 target="int-angle")

::: column.grow

Burada [adi bir çoxbucaq](gloss:regular-polygon) görə bilərsiniz ${n}{n|5|4,12,1} tərəflər. Hər tərəfin uzunluğu var [{.pill.green} 1m](target:base) . Onun sahəsini hesablamağa çalışaq! 

Əvvəlcə çoxbucaqlıya bölmək olar ${toWord(n)} konqresli, [[isosceles | bərabər tərəfli | sağ açılı]] üçbucaqlar. 

{.reveal(when="blank-0")} Artıq [[bazanı]] tanıyırıq [[| hündürlük |]] bu üçbucaqların [[sahəsi]] , ancaq [[hündürlüyə]] də ehtiyacımız var [[| ayaqları |]] sahələrini hesablaya bilmək üçün [[medianlar]] . _{span.reveal(when="blank-2")} Daimi çoxbucaqlılarda bu hündürlüyə bəzən deyilir [{.pill.yellow} apothem](target:apothem) ._ 

{.reveal(when="blank-1 blank-2" delay=1000)} Apothem və isosceles üçbucağının əsasının yarısı ilə düzəldilmiş [düzgün bucaqlı üçbucağın](target:right-triangle) olduğuna diqqət yetirin. Bu, trigonometriyadan istifadə edə biləcəyimiz deməkdir! 

{.reveal(when="blank-1 blank-2" delay=2000)} The [{.pill.blue}](target:base-angle) isosceles üçbucağının [baza açıları](target:base-angle) (onları α adlandıraq) [[yarısıdır | eyni |]] çoxbucaqlı [daxili açıların](target:int-angle) [[iki qat]] ölçüsü: 

{.text-center.reveal(when="blank-3")}`pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} Apothem tapmaq üçün, biz [[tangents | sine | kosinus]] müəyyən istifadə edə bilərsiniz: 

{.text-center.reveal(when="blank-4")}`tan pill(α, "blue", "alpha") = 
pill("opposite", "yellow", "apothem") / pill("adjacent", "green", "half-base") =
blank("apothem", "s", "s/2") / blank("s/2", "s", "apothem")`

{.text-center.reveal(when="blank-5 blank-6")}`⇒ pill("apothem", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} İndi [isosceles üçbucağının](target:isosceles-triangle) sahəsi 

{.text-center.reveal(when="blank-5 blank-6" delay=2000)}`1/2 "base" × "height"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} Çoxbucaqlı ibarətdir ${toWord(n)} hamısı eyni sahəyə sahib olan isosceles üçbucaqlarından. Buna görə də çoxbucağın ümumi sahəsi 

{.text-center.reveal(when="blank-5 blank-6" delay=4000)}`A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`

:::

---

## Dördrilaterallar 

> section: quadrilaterals
> id: quadrilaterals
> translated: auto

[Əvvəlki kursda](/course/triangles) üçbucaqların fərqli xüsusiyyətlərini araşdırdıq. İndi dördbucaqlılara nəzər salaq. 

_Daimi dörd tərəfli_ bir [[kvadrat]] deyilir [[| düzbucaqlı | bərabər tərəfli dörd tərəfli]] . Onun tərəflərinin hamısı eyni uzunluğa malikdir və bütün açıları bərabərdir. 

::: column.quadrilateral.reveal(when="blank-0")

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=60 cy=15)
      circle.move(name="b" cx=60 cy=105)
      circle(name="c" x="a.rotate(pi/2,b)")
      circle(name="d" x="b.rotate(-pi/2,a)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.blue(x="angle(a,b,c)" target="angle")
      path.blue(x="angle(b,c,d)" target="angle")
      path.blue(x="angle(c,d,a)" target="angle")
      path.blue(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)" target="side" mark="bar")
      path.red(x="segment(b,c)" target="side" mark="bar")
      path.red(x="segment(c,d)" target="side" mark="bar")
      path.red(x="segment(d,a)" target="side" mark="bar")

{.caption} Bir __kvadrat__ [dörd bərabər tərəf](target:side) və [dörd bərabər açı](target:angle) ilə [dörd tərəflidir](target:side) . 

:::

---
> id: quadrilaterals-1

Bir az "daha az müntəzəm" dördrilaterallar üçün iki seçimimiz var. Yalnız _açıların_ bərabər olmasını istəyiriksə, bir [__düzbucaqlı__](gloss:rectangle) alırıq. Yalnız _tərəflərin_ bərabər olmasını istəyiriksə, bir [__romb__](gloss:rhombus) alırıq. 

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=40 cy=15)
      circle.move(name="b" cx=40 cy=105)
      circle.move(name="c" cx=180 cy=105 project="line(a,b).perpendicular(b)")
      circle(name="d" x="c.add(a).subtract(b)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.blue(x="angle(a,b,c)" target="angle")
      path.blue(x="angle(b,c,d)" target="angle")
      path.blue(x="angle(c,d,a)" target="angle")
      path.blue(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)")
      path.red(x="segment(b,c)")
      path.red(x="segment(c,d)")
      path.red(x="segment(d,a)")

{.caption} __Düzbucaq__ [dörd bərabər](target:angle) bucaqlı dördbucaqlıdır. 

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="e" cx=50 cy=60)
      circle.move(name="f" cx=105 cy=15)
      circle.move(name="h" cx=105 cy=105 project="circle(e,distance(e,f))")
      circle(name="g" x="h.add(f).subtract(e)")
      path.fill.yellow.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f)" target="side" mark="bar")
      path.red(x="segment(f,g)" target="side" mark="bar")
      path.red(x="segment(g,h)" target="side" mark="bar")
      path.red(x="segment(h,e)" target="side" mark="bar")

{.caption} Bir __Rhombus__ [dörd bərabər tərəfli](target:side) dördbucaqlıdır. 

:::

---
> id: quadrilaterals-2

Daha az müntəzəm, lakin hələ də müəyyən vacib xüsusiyyətlərə malik olan bir neçə başqa dördbucaqlı var: 

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=20 cy=20)
      circle.move(name="b" cx=160 cy=20)
      circle.move(name="c" cx=50 cy=100)
      circle(name="d" x="b.add(c).subtract(a)")
      path.fill.yellow.light(x="polygon(a,b,d,c)")
      path.red(x="segment(a,b)" mark="arrow")
      path.red(x="segment(c,d)" mark="arrow")
      path.blue(x="segment(a,c)" mark="arrow2")
      path.blue(x="segment(b,d)" mark="arrow2")

{.caption} _Qarşı_ tərəflərin hər iki cütü [paraleldirsə](gloss:parallel) , __Paraleloqram__ əldə edirik. 

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="e" cx=20 cy=60)
      circle.move(name="f" cx=140 cy=15)
      circle.move(name="g" cx=190 cy=60)
      circle(name="h" x="f.reflect(line(e,g))")
      path.fill.yellow.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f,)" mark="bar")
      path.blue(x="segment(f,g)" mark="bar2")
      path.blue(x="segment(g,h)" mark="bar2")
      path.red(x="segment(h,e,)" mark="bar")

{.caption} _Qonşu_ tərəflərin iki cütü eyni uzunluğa malikdirsə, biz Bir __uçurtma__ alırıq. 

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="i" cx=60 cy=15)
      circle.move(name="j" cx=20 cy=105)
      circle.move(name="k" cx=190 cy=105)
      circle.move(name="l" cx=160 cy=15 project="line(j,k).parallel(i)")
      path.fill.yellow.light(x="polygon(i,j,k,l)")
      path(x="segment(i,j)")
      path.red(x="segment(j,k)" mark="arrow")
      path(x="segment(k,l)")
      path.red(x="segment(i,l)" mark="arrow")

{.caption} Ən azı bir cüt qarşı tərəf paralel olarsa, __Trapezium__ alırıq. 

:::

---
> id: quadrilaterals-venn

Dördrilaterallar bu kateqoriyadan çoxuna düşə bilər. [Venn diaqramı](gloss:venn-diagram) olaraq müxtəlif növ dördbucaqlıların iyerarxiyasını görüntüləyə bilərik: 

    figure: include svg/venn.svg

Məsələn, hər düzbucaqlı [[paraleloqramdır | romb | kvadrat]] və hər bir [[romb | trapezium | paraleloqram]] da uçurtmadır. Bir romb [[bəzən olur | həmişə | heç vaxt]] bir kvadrat və bir düzbucaqlı [[həmişə olmur | bəzən | heç vaxt]] bir trapezium. 

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Hər hansı bir qeyri-müəyyənliyin qarşısını almaq üçün ümumiyyətlə yalnız ən xüsusi növdən istifadə edirik. 

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow

İndi dörd nöqtəni, soldakı boz qutuda seçin. _{span.reveal(when="points")} Hamısını dörd tərəfli bir forma yaratmaq üçün birləşdirə bilərik._ 

{.reveal(when="points" delay=1000)} Dörd tərəfin hər birinin orta nöqtəsini tapaq. Orta nöqtələri birləşdirsək, [[başqa dördlüyə sahib]] oluruq [[| üçbucaq | düzbucaqlı]] . 

{.reveal(when="blank-0")} Xarici dördbucaqlıların uclarını hərəkət etdirməyə çalışın və daha kiçik olanın nə olacağını müşahidə edin. Göründüyü kimi, _hər hansı bir_ dörd tərəfli deyil, həmişə [[paraleloqramdır | trapezium | düzbucaqlı]] ! 

{.reveal(when="blank-1")} Bəs niyə davadır? Niyə _hər_ dörd tərəfli üçün nəticə həmişə paraleloqram olmalıydı? Bizə izah etməyə kömək etmək üçün orijinal dördbucağın [diaqonallarından](gloss:polygon-diagonal) birini çəkməliyik. 

{.reveal(when="diagonal")} Diaqonal [dörd](target:triangle) tərəfli hissəni [iki üçbucağa](target:triangle) bölür. İndi daxili [[dörd]] tərəfli [tərəflərin](target:midsegment) [[ikisinin]] əslində [[orta hissələr olduğunu görə bilərsiniz | medianlar |]] bu üçbucaqların [[perpendikulyar bisektorları]] . 

{.reveal(when="blank-2")} [Əvvəlki zamanı](/course/triangles/properties) biz bir üçbucaq [midsegments](gloss:triangle-midsegment) həmişə onun bazasında paralel ki, göstərdi. Bu vəziyyətdə, [bu iki tərəfin](target:parallel) də diaqonala paralel olması deməkdir - buna görə də onlar da [[bir-birlərinə paralel]] olmalıdırlar [[| eyni uzunluqda | bir-birinə dik]] . 

{.reveal(when="blank-3" delay=2000)} Dörd tərəfli [ikinci diaqonal](target:other) ilə eyni şeyi edə bilərik, qarşı tərəflərin hər iki cütü paralel olduğunu göstərə bilərik. Bu, daxili dörd tərəfli bir [paraleloqram](gloss:parallelogram) olduğunu sübut etmək üçün lazım olan şeydir. _{span.qed}_ 

:::

---
> id: parallelograms

### Paraleloqramlar 

Məlum oldu ki, paraleloqramların əks tərəflərin paralel olmasından başqa bir çox maraqlı xüsusiyyətləri var. Aşağıdakı altı ifadədən hansını doğrudur? 

::: column.grow

    x-picker.list
      .item.md The opposite sides are [congruent](gloss:congruent).
      .item(data-error="parall-error-1") The internal angles are always less than 90°.
      .item.md(data-error="parall-error-2") The diagonals [bisect](gloss:angle-bisector) the internal angles.
      .item The opposite angles are congruent.
      .item(data-error="parall-error-3") Both diagonals are congruent.
      .item(data-error="parall-error-4") Adjacent sides have the same length
      .item The two diagonals bisect each other in the middle.

::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="a" cx=80 cy=50)
      circle.move(name="b" cx=20 cy=190)
      circle.move(name="c" cx=220 cy=190)
      circle(name="d" x="b.rotate(pi,line(a,c).midpoint)")
    
      path.red(x="segment(a,b)")
      path.red(x="segment(c,d)")
      path.blue(x="segment(b,c)")
      path.blue(x="segment(a,d)")
      path.thin.light(x="segment(a,c)")
      path.thin.light(x="segment(b,d)")
    
      path.thin.light(x="angle(a,b,c).sup")
      path.thin.light(x="angle(b,c,d).sup")
      path.thin.light(x="angle(c,d,a).sup")
      path.thin.light(x="angle(d,a,b).sup")

:::

---
> id: parallelograms-proof

Əlbəttə ki, bu xüsusiyyətlərə sadəcə "baxmaq" kifayət deyil. Onların _həmişə_ doğru olduğundan əmin olmaq _üçün_ onları _sübut_ etməliyik: 

::: tab

#### Qarşı tərəflər və bucaqlar _{span.check(when="diagonal blank-0 blank-1")}_ 

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle.move(name="a" cx=80 cy=80)
      circle.move(name="b" cx=20 cy=220)
      circle.move(name="c" cx=220 cy=220)
      circle(name="d" x="b.rotate(pi,line(a,c).midpoint)")
    
      path.reveal.fill.red(when="diagonal" x="angle(a,o?c:b,d).sup" target="red-angle")
      path.reveal.fill.red(when="diagonal" x="angle(c,o?a:d,b).sup" target="red-angle")
      path.reveal.fill.blue(when="diagonal" x="angle(d,o?a:b,c).sup" target="blue-angle")
      path.reveal.fill.blue(when="diagonal" x="angle(b,o?c:d,a).sup" target="blue-angle")
    
      path.fill.yellow.transparent(x="polygon(a,b,o?c:d)" target="triangles")
      path.fill.green.transparent(x="polygon(o?a:b,c,d)" target="triangles")
      path(x="polygon(a,b,c,d)")
    
      path.green.transparent(x="segment(a,b)" target="sides")
      path.green.transparent(x="segment(c,d)" target="sides")
      path.yellow.transparent(x="segment(b,c)" target="sides")
      path.yellow.transparent(x="segment(a,d)" target="sides")
      path.fill.green.transparent(x="angle(a,b,c).sup" target="angles")
      path.fill.green.transparent(x="angle(c,d,a).sup" target="angles")
      path.fill.yellow.transparent(x="angle(b,c,d).sup" target="angles")
      path.fill.yellow.transparent(x="angle(d,a,b).sup" target="angles")

::: column.grow

{.task} Bir paraleloqramdakı əks tərəflərin və açıların hər zaman uyğun olduğunu sübut etməyə çalışaq. 

Paraleloqramın diaqonallarından birini çəkərək başlayın. 

{.reveal(when="diagonal")} Diaqonal paraleloqramın tərəfləri ilə dörd yeni açı yaradır. İki [qırmızı bucaq](target:red-angle) və iki [mavi bucaq](target:blue-angle) [alternativ açılardır](gloss:alternate-angles) , buna görə hər biri [[uyğun]] olmalıdır [[| bitişik | əlavə]] . 

{.reveal(when="blank-0")} İndi diaqonalın yaratdığı [iki üçbucağa](target:triangles) baxsaq görərik ki, onların iki konqresiv bucağı və [bir konqresiv tərəfi var](target:diagonal) . [[ASA tərəfindən | AAS | AA]] konqres şərti, hər iki üçbucaq da uyğun olmalıdır. 

{.reveal(when="blank-1")} Bu o deməkdir ki, üçbucaqların digər uyğun hissələri də bir-biri ilə uyğun olmalıdır: xüsusən də [qarşı tərəflərin](target:sides) hər iki [cütü bir-biri ilə](target:sides) , həm də [əks açıların](target:angles) hər iki [cütü bir-](target:angles) birinə uyğundur. _{span.qed}_ 

:::

{.reveal(when="blank-1")} Konversiya da doğrudur: dörd tərəfli qarşı tərəflərin hər iki cütü (və ya bucaqları) bir-birinə uyğundursa, dörd tərəfli bir paraleloqram olmalıdır. 

::: tab

#### Diaqonallar _{span.check(when="diagonal blank-2 blank-3")}_ 

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle.move(name="a1" cx=80 cy=80 label="A")
      circle.move(name="b1" cx=20 cy=220 label="B")
      circle.move(name="c1" cx=220 cy=220 label="C")
      circle(name="d1" x="b1.rotate(pi,line(a1,c1).midpoint)" label="D")
      circle(name="m1" x="polygon(a1,b1,c1,d1).centroid" label="M")
    
      path.fill.yellow.light(x="polygon(b1,m1,c1)" target="triangles1")
      path.fill.yellow.light(x="polygon(a1,m1,d1)" target="triangles1")
    
      path.fill.red(x="angle(c1,a1,d1).sup" target="anglesR")
      path.fill.red(x="angle(b1,c1,a1).sup" target="anglesR")
      path.fill.blue(x="angle(a1,d1,b1).sup" target="anglesB")
      path.fill.blue(x="angle(d1,b1,c1).sup" target="anglesB")
    
      path(x="polygon(a1,b1,c1,d1)")
      path(x="segment(a1,c1)")
      path(x="segment(b1,d1)")
      path.green(x="segment(a1,d1)" target="side1")
      path.green(x="segment(b1,c1)" target="side1")
    
      path.yellow.tick.transparent(x="segment(a1,m1)" target="AM")
      path.yellow.tick.transparent(x="segment(b1,m1)" target="BM")
      path.yellow.tick.transparent(x="segment(c1,m1)" target="CM")
      path.yellow.tick.transparent(x="segment(d1,m1)" target="DM")

::: column.grow

{.task} İndi bir paraleloqramdakı iki diaqonalın bir-birini bükdüyünü sübut edin. 

Diaqonalların yaratdığı iki sarı üçbucaq barədə düşünək: 

* Bir az paraleloqramın əks tərəfləri olduğu üçün [iki yaşıl tərəfin bir-](target:side1) birinə uyğun olduğunu sübut etdik. * [İki qırmızı bucaq](target:anglesR) və [iki mavi bucaq](target:anglesB) birləşir, çünki [[alternativ bucaqlardır | əks açılar | sağ açılar]] . 

{.reveal(when="blank-2")} [[ASA tərəfindən | SSS | AAS]] vəziyyəti, sarı üçbucağın hər ikisi də uyğun olmalıdır. 

{.reveal(when="blank-3")} İndi nəticəyə gəlmək üçün konqres üçbucağının müvafiq hissələrinin də uyğun olması faktını istifadə edə bilərik [`bar(AM)`](target:AM) = [`bar(CM)`](target:CM) və [`bar(BM)`](target:BM) = [`bar(DM)`](target:DM) . Başqa sözlə, iki diaqonal orta nöqtələrdə kəsişir. _{span.qed}_ 

:::

{.reveal(when="blank-3")} Əvvəllər olduğu kimi, bunun əksi də doğrudur: dörd tərəfli iki diaqonal bir-birini bisirsə, dörd tərəfli bir paraleloqramdır. 

:::

---
> id: kites

### Uçurtmalar 

::: column.grow

Yuxarıda [[əks]] cüt olduğunu göstərdik [[|]] bir paraleloqramın [[qonşu]] tərəfləri bir-birinə uyğundur. Bir uçurtma içərisində iki cüt _bitişik_ tərəf uyğun gəlir. 

_Uçurtma_ adı açıq şəkildə formasından irəli gəlir: göydə uça biləcəyiniz uçurtmalara bənzəyir. Lakin, biz bu günə qədər gördük bütün xüsusi quadrilaterals ki, Kite da [concave](gloss:concave) ola bilər ki, yalnız bir: bu bir dart və ya arrow kimi formalaşmasına əgər: 

::: column(width=320)

    x-img(src="images/kites.jpg")

:::

::: column(width=240)

    x-geopad(width=240 height=180): svg
      circle(name="a" x="point(20,90)")
      circle(name="b" x="point(90,20)")
      circle.move(name="c" cx=200 cy=90 project="segment(point(100,90),point(220,90))")
      circle(name="d" x="point(90,160)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.red(x="segment(a,b)")
      path.red(x="segment(a,d)")
      path.blue(x="segment(b,c)")
      path.blue(x="segment(d,c)")

{.caption} Bir konveks uçurtma 

::: column(width=240)

    x-geopad(width=240 height=180): svg
      circle(name="a1" x="point(20,90)")
      circle(name="b1" x="point(220,20)")
      circle.move(name="c1" cx=150 cy=90 project="segment(point(70,90),point(210,90))")
      circle(name="d1" x="point(220,160)")
      path.fill.green.light(x="polygon(a1,b1,c1,d1)")
      path.red(x="segment(a1,b1)")
      path.red(x="segment(a1,d1)")
      path.blue(x="segment(b1,c1)")
      path.blue(x="segment(d1,c1)")

{.caption} Bir ox kimi görünən konkav uçurtması 

:::

---
> id: kites-1

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move(name="a" cx=30 cy=150)
      circle.move(name="b" cx=110 cy=250)
      circle.move(name="c" cx=270 cy=150)
      circle(name="d" x="b.reflect(line(a,c))")
      circle.transparent(name="m" x="line(a,c).project(b)")
    
      path.fill.light.blue.reveal(when="next-0" x="angle(b,a,d).sup" target="angles vAngle sas")
      path.fill.light.green.reveal(when="next-0" x="angle(b,c,d).sup" target="angles vAngle")
      path.fill.light.red.reveal(when="next-0" x="angle(a,d,c).sup" target="angles")
      path.fill.light.red.reveal(when="next-0" x="angle(a,b,c).sup" target="angles")
      path.fill.light.yellow.reveal(when="next-3" x="angle(a,m,d).sup" target="alpha" label="α")
      path.fill.light.yellow.reveal(when="next-3" x="angle(b,m,a).sup" target="beta" label="β")
    
      path.fill.red.transparent(x="polygon(a,b,c)" target="triangle1")
      path.fill.yellow.transparent(x="polygon(a,c,d)" target="triangle1")
      path.fill.red.transparent(x="polygon(a,m,d)" target="triangle2")
      path.fill.yellow.transparent(x="polygon(a,m,b)" target="triangle2")
    
      path.green(x="segment(a,b)" target="sss sas")
      path.green(x="segment(a,d)" target="sss sas")
      path.blue(x="segment(d,c)" target="sss")
      path.blue(x="segment(b,c)" target="sss")
    
      path.red.light.thin.reveal(when="blank-1" x="line(a,c)" target="symmetry" animation="draw")
      path.red.reveal(when="blank-1" x="segment(a,c)" target="symmetry sss d1" animation="draw")
      path.red.transparent(x="segment(a,m)" target="sas" animation="draw")
      path.red.reveal(when="next-2" x="segment(b,d)" animation="draw")

::: column.grow

Bütün uçurtmaların [[simmetrik]] olduğunu [[gördünüz | oxşar]] . _{span.reveal(when="blank-0")} [Simmetriya oxu](gloss:axis-of-symmetry) [[diaqonallardan biridir | tərəflərdən biri | bir ortaqlıq]] ._ 

{.reveal.r(when="blank-1")} Diaqonal uçurtmanı [iki konqresli üçbucağa](target:triangle1) bölür. Biz [SSS](gloss:triangle-sss) vəziyyətindən uyğun olduğunu bilirik: hər iki üçbucağın [üç bərabər tərəfi var](target:sss) (qırmızı, yaşıl və mavi). _{button.next-step} Davam edin_ 

{.reveal.r(when="next-0")} Buna görə [CPOCT](gloss:cpoct) istifadə edərək, [müvafiq açıların](target:angles) da uyğunlaşmalı olduğunu bilirik. _{button.next-step} Davam edin_ 

{.reveal.r(when="next-1")} Bu, məsələn, [diaqonalın](target:d1) [[bisektor olduğunu göstərir | dik |]] uclarında [iki bucağın](target:vAngle) [[medianı]] . _{button.next-step} Davam edin_ 

{.reveal.r(when="next-2")} Daha da irəli gedə bilərik: digər diaqonal çəksək, [daha iki, daha kiçik üçbucaq](target:triangle2) alırıq. Bunlar da [SAS](gloss:triangle-sss) vəziyyətinə görə uyğun olmalıdır: eyni [tərəfləri və daxil edilmiş bucaqları var](target:sas) . _{button.next-step} Davam edin_ 

{.reveal(when="next-3")} Bu o deməkdir ki [bucaq α](target:alpha) də [bucaq b](target:beta) kimi eyni olmalıdır. Bitişik olduqları üçün həm α, həm də β [əlavə bucaqlar](gloss:supplementary-angles) [[90]]° olmalıdır. 

{.reveal(when="blank-3")} Başqa sözlə, uçurtma diaqonalları həmişə [[perpendikulyar olur | paralel]] . 

:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### Dördrilateralların sahəsi 

Əvvəlki kursda üçbucaqların sahəsini hesablayarkən, onu [[dördbucağa]] çevirmək hiyləsindən istifadə etdik [[| kvadrat | beşbucaq]] . Məlum olur ki, bunu bəzi dördrilaterallar üçün də edə bilərik: 

::: tab

#### Paraleloqram _{span.check(when="draw-1 blank-1")}_ 

::: column(width=300)

    x-geopad(width=300 height=240 grid=20 no-points): svg
      circle.transparent(name="a1" x="point(4,3)")
      circle.transparent(name="b1" x="point(12,3)")
      circle.transparent(name="c1" x="point(10,9)")
      circle.transparent(name="d1" x="point(2,9)")
      path.fill.blue.light(x="polygon(a1,b1,c1,d1)")
      path.fill.red.transparent(x="polygon(point(2,3),a1,d1)" target="triangle-1")
      path.fill.red.transparent(x="polygon(point(10,3),b1,c1)" target="triangle-2")
      path.blue(x="polygon(a1,b1,c1,d1)")

::: column.grow

Solda, paraleloqram ilə eyni sahəsi olan bir düzbucaqlı çəkməyə çalışın. 

{.reveal(when="draw-1")} Solda [itkin üçbucağın](target:triangle-1) [[tam eyni]] olduğunu görürsən [[| daha kiçik |]] sağdakı [üst-üstə düşən üçbucaqdan](target:triangle-2) [[böyükdür]] ? _{span.reveal(when="blank-1")} Buna görə bir paraleloqramın sahəsi_ 

{.text-center.reveal(when="blank-1")} Sahə = __{.i.m-green} baza__ × __{.i.m-yellow} hündürlük__ 

{.reveal(when="blank-1" delay=1000)} _Bir paraleloqramın hündürlüyünü ölçərkən diqqətli olun: ümumiyyətlə iki tərəfdən biri ilə eyni deyil._ 

:::

::: tab

#### Trapezium _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_ 

Xatırladaq ki, trapeziumlar bir cüt [paralel tərəfli](target:bases) dördbucaqlıdır. Bu paralel tərəflərə trapesiyanın __əsasları__ deyilir. 

::: column(width=300)

    x-geopad.sticky(width=300 height=240 grid=20 no-points): svg
      circle.transparent(name="a2" x="point(4,3)")
      circle.transparent(name="b2" x="point(9,3)")
      circle.transparent(name="c2" x="point(13,9)")
      circle.transparent(name="d2" x="point(2,9)")
      path.fill.blue.light(x="polygon(a2,b2,c2,d2)")
      path.fill.red.transparent(x="polygon(a2,point(3,3),point(3,9),d2)" target="triangles-3")
      path.fill.yellow.transparent(x="polygon(b2,point(11,3),point(11,9),c2)" target="triangles-3")
      path.blue(x="polygon(a2,b2,c2,d2)")
      path.blue(x="segment(a2,b2)" target="bases base-1")
      path.blue(x="segment(d2,c2)" target="bases base-2")
      path.green.transparent(x="segment(point(2,3),d2)" target="t-height")
      path.yellow.transparent(x="segment(point(3,6),point(11,6))" target="t-width")
      circle.reveal(when="blank-3" x="line(a2,d2).midpoint" target="t-width" animation="pop")
      circle.reveal(when="blank-3" x="line(b2,c2).midpoint" target="t-width" animation="pop")

::: column.grow

Əvvəllər olduğu kimi, bu trapezi ilə eyni sahəyə sahib olan bir düzbucaqlı çəkməyə çalışın. _{span.reveal(when="draw-2")} Sol və sağdakı [itkin və əlavə üçbucaqların](target:triangles-3) necə ləğv olunduğunu görə bilərsinizmi?_ 

{.reveal(when="draw-2" delay=2000)} The [{.pill.green}](target:t-height) bu düzbucağın [hündürlüyü](target:t-height) [[arasındakı məsafədir | orta |]] trapesiyanın [paralel tərəflərinin](target:bases) [[uzunluğu]] . 

{.reveal.r(when="blank-2")} The [{.pill.yellow}](target:t-width) düzbucağın [eni](target:t-width) [[orta nöqtələr]] arasındakı məsafədir [[|]] trapesiyanın iki paralel olmayan tərəfinin [[uc nöqtələri]] . _{span.reveal(when="blank-3")} Buna trapeziumun __ortalaması__ deyilir._ _{button.next-step.reveal(when="blank-3")} Davam edin_ 

{.reveal(when="next-0")} [Üçbucaqlar](gloss:triangle-midsegment) kimi, bir trapeziumun ortalaması [[paraleldir | dik | eyni]] iki [[uzunluğundadır]] . Orta yarının uzunluğu əsasların uzunluqlarının ortalandır: `(a+c)/2` . 

{.reveal(when="blank-4")} Biz bütün bu birləşdirmək, biz paralel tərəflər [_bir_](target:base-2) və [_c,_](target:base-1) və hündürlüyü [_h_](target:t-height) ilə trapesiya sahəsində bir tənlik almaq: 

{.text-center.reveal(when="blank-4")}`A = h xx ((a+c) / 2)`

:::

::: tab

#### Uçurtma _{span.check(when="blank-5")}_ 

::: column(width=300)

    x-geopad(width=300 height=220 grid=20 no-points): svg
      circle.transparent(name="a3" x="point(1,5)")
      circle.transparent(name="b3" x="point(5,1)")
      circle.transparent(name="c3" x="point(13,5)")
      circle.transparent(name="d3" x="point(5,9)")
    
      path.fill.blue.light(x="polygon(a3,b3,c3,d3)")
      path.green(x="segment(a3,c3)" label="d1" target="diag3 d31")
      path.yellow(x="segment(b3,d3)" label="d2" target="diag3 d32")
      path(x="polygon(point(1,1),point(13,1),point(13,9),point(1,9))" target="rect4")
      path.blue(x="polygon(a3,b3,c3,d3)")
    
      path.fill.red.transparent(x="polygon(a3,b3,point(5,5))" target="inside")
      path.fill.blue.transparent(x="polygon(b3,c3,point(5,5))" target="inside")
      path.fill.green.transparent(x="polygon(c3,d3,point(5,5))" target="inside")
      path.fill.yellow.transparent(x="polygon(d3,a3,point(5,5))" target="inside")
    
      path.fill.red.transparent(x="polygon(a3,b3,point(1,1))" target="outside")
      path.fill.blue.transparent(x="polygon(b3,c3,point(13,1))" target="outside")
      path.fill.green.transparent(x="polygon(c3,d3,point(13,9))" target="outside")
      path.fill.yellow.transparent(x="polygon(d3,a3,point(1,9))" target="outside")

::: column.grow

Bu uçurtma içərisində, [iki diaqonal](target:diag3) uçurtma ətrafını əhatə edən geniş bir [düzbucağın](target:rect4) eni və hündürlüyünü təşkil edir. 

Bu düzbucağın sahəsi [[iki dəfədir | ilə eyni |]] uçurtma sahəsindən [[üç qat]] . _{span.reveal(when="blank-5")} Uçurtma yaradan [dörd üçbucağın](target:inside) hər birinin kənarındakı [dörd boşluqla](target:outside) eyni olduğunu görə bilərsinizmi?_ 

{.reveal(when="blank-5")} Bu, diaqonalları olan bir uçurtmanın sahəsi deməkdir [{.i.pill.green} d1](target:d31) və [{.i.pill.yellow} d2](target:d32) edir 

{.text-center.reveal(when="blank-5")} _Sahə_ = `1/2` [{.i.pill.green} d1](target:d31) × [{.i.pill.yellow} d2](target:d32) . 

:::

::: tab

#### Rombus _{span.check(when="blank-6 blank-7")}_ 

::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="a4" cx=40 cy=120)
      circle.move(name="b4" cx=150 cy=50)
      circle.move(name="d4" cx=150 cy=190 project="circle(a4,distance(a4,b4))")
      circle(name="c4" x="d4.add(b4).subtract(a4)")
    
      path.fill.blue.light(x="polygon(a4,b4,c4,d4)")
    
      path.thin(x="line(c4,d4)")
      circle(name="q4" x="line(c4,d4).project(a4)")
      path.thin(x="angle(a4,q4,d4).sup" size=15)
      path.red(x="segment(q4,a4)" label="height" target="height")
    
      path.green(x="segment(a4,c4)" label="d1" target="d41")
      path.yellow(x="segment(b4,d4)" label="d2" target="d42")
      path.blue(x="polygon(a4,b4,c4,d4)")
      path.blue(x="segment(c4,d4)" target="base")

::: column.grow

Bir [Rhombus](gloss:rhombus) dörd bərabər tərəfli dördbucaqlıdır. Hər bir rombun bir [[paraleloqram]] olduğunu xatırlaya bilərsiniz [[| düzbucaqlı | kvadrat]] - həm də [[uçurtma | altıbucaqlı | konkav poliqonu]] . 

{.reveal(when="blank-6 blank-7")} Bu, bir rombusun sahəsini tapmaq üçün ya paraleloqramın sahəsi üçün, ya da uçurtma sahəsi üçün olan tənliyi istifadə edə biləcəyimiz deməkdir: 

{.text-center.reveal(when="blank-6 blank-7")} _Sahə_ = [{.i.pill.blue} baza](target:base) × [{.i.pill.red} boyu](target:height) = `1/2` [{.i.pill.green} d1](target:d41) × [{.i.pill.yellow} d2](target:d42) . 

{.reveal(when="blank-6 blank-7" delay=1000)} _Fərqli kontekstlərdə bir Rhombusun müxtəlif hissələri (tərəflər, boy, diaqonallar) verilə bilər və hansı tənliyin daha uyğun olduğunu seçməlisiniz._ 

:::
:::

---

## Dərinliklər 

> section: tessellations
> id: tessellations
> translated: auto

[Poliqonlar](gloss:polygon) təbiətdə hər yerdə görünür. Böyük bir ərazini kafel etmək istəyirsinizsə, onlar xüsusilə faydalıdır, çünki çoxbucaqlıları boşluqlar və ya üst-üstə düşmədən bir-birinə bağlaya bilərsiniz. Buna bənzər nümunələrə [__tessellations__](gloss:tessellation) deyilir. 

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} [[Altıbucaqlı | Üçbucaqlı | Dörd kvadrat]] arı 

::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} Sinaloan südlü ilan dərisi 

::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} Yarpaqların hüceyrə quruluşu 

::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} Şimali İrlandiyadakı Giant's Causeway-da bazalt sütunları 

::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} Ananas dərisi 

::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} Bir tısbağanın qabığı 

:::

---
> id: tessellations-1

İnsanlar bu təbii naxışların bir çoxunu sənətdə, memarlıqda və texnologiyada - qədim Romadan tutmuş bu günə qədər köçürmüşlər. Bir neçə nümunə: 

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} [[Düzbucaqlı | Kvadratdır | Altıbucaqlı]] səki naxışı 

::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} İngiltərədəki Eden Layihəsində istixana 

::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} Alhambra'da mozaika 

::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} [[Üçbucaqlı | Altıbucaqlı |]] Londondakı Britaniya Muzeyindəki [[düzbucaqlı]] çatı 

::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} Sidneydəki hüceyrə boşaltma pavilyonu 

::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _Sürünənlər ilə təyyarənin nizamlı bölgüsünün öyrənilməsi_ , MC Escher 

:::

---
> id: tessellation-drawing
> goals: shapes0 shapes1

Burada müntəzəm çoxbucaqlılardan istifadə edərək öz tessellations yarada bilərsiniz. Sadəcə, yeni şekilleri yan çubuğundan kətan üzərinə sürün. Hansı tessellate forması yaxşıdır? Heç bir şəkildə tərpənməyən formalar varmı? Maraqlı naxışlar yaratmağa çalışın! 

    figure: .tessellation
      x-polypad
      .menu
        for s in ['equ-triangle', 'square', 'reg-pentagon', 'reg-hexagon', 'reg-octagon']
          .add(data-shape=s)
      .btn-row
        button.btn Clear
        button.btn Download
      svg.overlay: g.tiles.active
    x-gesture(target=".tessellation .menu" slide="-300, 140")
    .other-students.reveal(when="shapes0")
      h4 Examples of other students’ tessellations
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/tess-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-3.png" width=240 height=160)

---
> id: tessellation-regular

### Mütəmadi çoxbucaqlılardan hazırlanan boşqablar 

Bəzi [müntəzəm çoxbucaqlıları](gloss:regular-polygon) ( [[kvadratlar]] kimi) [[görmüş ola bilərsiniz | beşbucaqlar]] ) asanlıqla tessellate edir, digərləri ( [[beşbucaqlar]] kimi) [[| üçbucaqlar | hexagons]] ) ümumiyyətlə tessellate kimi görünmür. 

---
> id: tessellation-regular-1

Bunun əvvəlcədən hesablamağı öyrəndiyimiz [daxili açılarının](gloss:internal-angle) ölçüsü ilə əlaqəsi var. Tessellation'ın hər bir [ucunda](gloss:polygon-vertex) çox fərqli çoxbucaqlıların daxili açıları qarşılaşır. [[360]]° -ə qədər əlavə etmək üçün bu açıların hamısına ehtiyacımız var, əks halda ya boşluq olacaq, ya da üst-üstə düşəcəkdir. 

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")

    include svg/tessellations/triangles.svg

{.caption} Üçbucaqlar [[tessellate | tessellate etməyin]] _{span.reveal(when="blank-0")} çünki 6 × 60° = 360°._ 

::: column(width=160)

    include svg/tessellations/squares.svg

{.caption} Kvadratlar [[tessellate | tessellate etməyin]] _{span.reveal(when="blank-1")} çünki 4 × 90° = 360°._ 

::: column(width=160)

    include svg/tessellations/pentagons.svg

{.caption} Pentaqonlar [[boşalmır | tessellate]] _{span.reveal(when="blank-2")} çünki 108° çoxluğu 360° -ə çatmır._ 

::: column(width=160)

    include svg/tessellations/hexagons.svg

{.caption} Altıbucaqlı [[tessellate | tessellate etməyin]] _{span.reveal(when="blank-3")} çünki 3 × 120° = 360°._ 

:::

---
> id: tessellation-regular-3

Eyni şəkildə, beşbucaqlar kimi, 7 və ya daha çox tərəfi olan hər hansı bir adi çoxbucağın tessellate etmədiyini yoxlaya bilərsiniz. Bu o deməkdir ki, tessellate edən müntəzəm çoxbucaqlılar üçbucaqlar, kvadrat və altıbucaqlılardır! 

Əlbəttə ki, daxili müntəzəmlik 360° -ə qədər əlavə olacağı təqdirdə müxtəlif növ çoxbucaqlı birləşmələri birləşdirə bilərsiniz. 

    x-gallery(slide-width="520")
      div
        img(src="images/tessellations/regular-1.svg" width=360 height=240)
        p.caption Squares and triangles#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-3.svg" width=360 height=240)
        p.caption Squares and triangles#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-4.svg" width=360 height=240)
        p.caption Hexagons and triangles#[br]#[strong.m-red 120°] + #[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-5.svg" width=360 height=240)
        p.caption Hexagons and triangles#[br]#[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-2.svg" width=360 height=240)
        p.caption Hexagons, squares and triangles#[br]#[strong.m-red 120°] + #[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-6.svg" width=360 height=240)
        p.caption Octagons and squares#[br]#[strong.m-green 135°] + #[strong.m-green 135°] + #[strong.m-blue 90°] = 360°
      div
        img(src="images/tessellations/regular-7.svg" width=360 height=240)
        p.caption Dodecagons (12-gons) and triangles#[br]#[strong.m-green 150°] + #[strong.m-green 150°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-8.svg" width=360 height=240)
        p.caption Dodecagons, hexagons and squares#[br]#[strong.m-green 150°] + #[strong.m-red 120°] + #[strong.m-blue 90°] = 360°

---
> id: tessellation-triangles

### Düzensiz çoxbucaqlılardan hazırlanan boşqablar 

Düzəlməz [çoxbucaqlılardan](gloss:irregular-polygon) kənarlaşdırma işlərini də cəhd edə bilərik - onları fırladarkən və düzəldərkən diqqətli olacağıq. 

::: column(width=360)

    x-geopad(width=360 height300): svg
      circle.move(name="a" cx=220 cy=90 target="vertex")
      circle.move(name="b" cx=145 cy=180 target="vertex")
      circle.move.pulsate(name="c" cx=225 cy=200 target="vertex")
    
      path.red.fill(name="x" x="polygon(a,b,c)")
      path.yellow.fill(name="y" x="x.rotate(pi,line(b,c).midpoint)")
    
      for x in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
        for y in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
          if x || y
            path.red.fill(x=`x.translate(c.subtract(a).scale(${x}).add(b.subtract(a).scale(${y})))`)
            path.yellow.fill(x=`y.translate(c.subtract(a).scale(${x}).add(b.subtract(a).scale(${y})))`)

::: column.grow

Belə çıxır ki, yalnız bərabər tərəfli üçbucaqları deyil, _istənilən üçbucağı da_ tərtib edə bilərsiniz! Bu diaqramdakı [ucları](target:vertex) hərəkət [etdirməyə](target:vertex) çalışın. 

Üçbucaqdakı daxili açıların cəmi [[180]]° -dir. Hər bucağı [[iki dəfə]] istifadə etsək [[| bir dəfə |]] döngənin hər ucunda [[üç dəfə]] 360° qazanırıq: 

    x-geopad.reveal(width=200 height=160 when="blank-0 blank-1"): svg
      circle(name="m" cx=100 cy=80)
      circle(name="p" cx=100 cy=150)
      circle.move(name="q" cx=175 cy=130)
      circle(name="r" x="p.rotate(pi,line(m,q).midpoint)")
      circle(name="s" x="p.rotate(pi,m)")
      circle(name="t" x="q.rotate(pi,m)")
      circle(name="u" x="q.rotate(pi,line(m,p).midpoint)")
    
      path.fill.red(x="angle(p,m,q).sup" size=20)
      path.fill.blue(x="angle(q,m,r).sup" size=20)
      path.fill.green(x="angle(r,m,s).sup" size=20)
      path.fill.red(x="angle(s,m,t).sup" size=20)
      path.fill.blue(x="angle(t,m,u).sup" size=20)
      path.fill.green(x="angle(u,m,p).sup" size=20)
    
      path.fill.red.light(x="angle(m,q,r).sup" size=20)
      path.fill.red.light(x="angle(r,s,m).sup" size=20)
      path.fill.red.light(x="angle(m,t,u).sup" size=20)
      path.fill.red.light(x="angle(u,p,m).sup" size=20)
      path.fill.blue.light(x="angle(p,q,m).sup" size=20)
      path.fill.blue.light(x="angle(m,r,s).sup" size=20)
      path.fill.blue.light(x="angle(s,t,m).sup" size=20)
      path.fill.blue.light(x="angle(m,u,p).sup" size=20)
      path.fill.green.light(x="angle(m,p,q).sup" size=20)
      path.fill.green.light(x="angle(q,r,m).sup" size=20)
      path.fill.green.light(x="angle(m,s,t).sup" size=20)
      path.fill.green.light(x="angle(t,u,m).sup" size=20)
    
      path(x="segment(m,p)")
      path(x="segment(m,q)")
      path(x="segment(m,r)")
      path(x="segment(m,s)")
      path(x="segment(m,t)")
      path(x="segment(m,u)")
      path(x="polygon(p,q,r,s,t,u)")

:::

---
> id: tessellation-quadrilaterals

::: column(width=360)

    x-geopad(width=360 height=300): svg
      circle.move(name="a" cx=100 cy=105)
      circle.move(name="b" cx=115 cy=200)
      circle.move.pulsate(name="c" cx=180 cy=170)
      circle.move(name="d" cx=200 cy=120)
    
      path.blue.fill(name="x" x="polygon(a,b,c,d)")
      path.green.fill(name="y" x="x.rotate(pi,line(c,d).midpoint)")
    
      for x in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
        for y in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
          if x || y
            path.blue.fill(x=`x.translate(c.subtract(a).scale(${x}).add(d.subtract(b).scale(${y})))`)
            path.green.fill(x=`y.translate(c.subtract(a).scale(${x}).add(d.subtract(b).scale(${y})))`)

::: column.grow    

Daha təəccüblüsü, _hər dörd tərəfli_ də tessellates! Onların daxili açı bucağı [[360]]° -dir, buna görə hər bucağı [[bir dəfə]] istifadə etsək [[| iki dəfə |]] tessellation hər vertex [[üç dəfə]] , biz 360° əldə. 

    x-geopad.reveal(width=200 height=160 when="blank-0 blank-1"): svg
      circle(name="m" x="point(100,80)")
      circle(name="p" x="point(100,150)")
      circle.move(name="q" cx=180 cy=140)
      circle.move(name="r" cx=165 cy=90)
      circle(name="s" x="p.rotate(pi,line(m,r).midpoint)")
      circle(name="t" x="q.rotate(pi,line(m,r).midpoint)")
      circle(name="u" x="r.rotate(pi,line(m,t).midpoint)")
      circle(name="v" x="q.rotate(pi,line(m,p).midpoint)")
      circle(name="w" x="r.rotate(pi,line(m,p).midpoint)")
    
      path.fill.red(x="angle(p,m,r).sup" size=20)
      path.fill.blue(x="angle(r,m,t).sup" size=20)
      path.fill.green(x="angle(t,m,v).sup" size=20)
      path.fill.yellow(x="angle(v,m,p).sup" size=20)
    
      path.fill.red.light(x="angle(m,r,s).sup" size=20)
      path.fill.red.light(x="angle(t,u,v).sup" size=20)
      path.fill.red.light(x="angle(w,p,m).sup" size=20)
      path.fill.blue.light(x="angle(q,r,m).sup" size=20)
      path.fill.blue.light(x="angle(m,t,u).sup" size=20)
      path.fill.blue.light(x="angle(v,w,p).sup" size=20)
      path.fill.green.light(x="angle(p,q,r).sup" size=20)
      path.fill.green.light(x="angle(s,t,m).sup" size=20)
      path.fill.green.light(x="angle(m,v,w).sup" size=20)
      path.fill.yellow.light(x="angle(m,p,q).sup" size=20)
      path.fill.yellow.light(x="angle(r,s,t).sup" size=20)
      path.fill.yellow.light(x="angle(u,v,m).sup" size=20)
    
      path(x="segment(m,p)")
      path(x="segment(m,r)")
      path(x="segment(m,t)")
      path(x="segment(m,v)")
      path(x="polygon(p,q,r,s,t,u,v,w)")

:::

---
> id: tessellation-pentagons

Pentaqonlar bir az hiyləgərdir. Artıq gördük ki, _müntəzəm_ pentaqonlar [[boşalmır | tessellate]] , lakin qeyri-müntəzəm olanlar haqqında nə demək olar? 

---
> id: tessellation-pentagons-1

::: column(width=220)

    include svg/tessellations/pentagons-1.svg

::: column(width=220)

    include svg/tessellations/pentagons-2.svg

::: column(width=220)

    include svg/tessellations/pentagons-3.svg

:::

Budur, beşbucaqlı işarələrin üç fərqli nümunəsi. Onlar _nizamlı_ deyillər, lakin mükəmməl etibarlı 5 tərəfli çoxbucaqlıdırlar. 

İndiyə qədər riyaziyyatçılar yalnız (konveks) pentaqonları olan 15 müxtəlif növ boşluq tapdılar. Ən sonu 2015-ci ildə kəşf edildi. Başqasının olub olmadığını və ya bu 15-nin tək olub olmadığını heç kim bilmir ... 

---
> id: escher

### İncəsənətdəki məşğələlər 

Tessellations həm bir çox sənətkar, həm memar, həm də dizayner üçün bir vasitə və bir ilhamdır - ən məşhuru Hollandiyalı rəssam [MC Escher](bio:escher) . Escher'in əsərində qəribə, mutasiya edən canlılar, naxışlar və mənzərələr var: 

    .row
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-1.jpg" width=220 height=220)
        p.caption “Sky and Water I” (1938)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-2.jpg" width=220 height=220)
        p.caption “Lizard” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-3.jpg" width=220 height=220)
        p.caption “Lizard, Fish, Bat” (1952)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-4.jpg" width=220 height=220)
        p.caption “Butterfly” (1948)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-5.jpg" width=220 height=220)
        p.caption “Two Fish” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-6.jpg" width=220 height=220)
        p.caption “Shells and Starfish” (1941)

Bu sənət əsərləri çox vaxt əyləncəli və səysiz görünür, lakin əsas riyazi prinsiplər əvvəlkilərlə eynidır: açılar, dönüşlər, tərcümələr və çoxbucaqlılar. Riyaziyyat düzgün deyilsə, imtahan işə yaramır! 

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorphosis II” by M. C. Escher (1940)

---
> id: penrose

### Penrose Tilings 

İndiyə qədər gördüyümüz bütün boşluqlarda ortaq bir şey var: onlar __dövri__ xarakter __daşıyır__ . Demək ki, bunlar təkrar-təkrar təkrarlanan adi bir naxışdan ibarətdir. Hər istiqamətdə əbədi davam edə bilərlər və hər yerdə eyni görünəcəklər. 

1970-ci illərdə İngilis riyaziyyatçısı və fiziki [Roger Penrose](bio:penrose) _qeyri-dövri_ tessellations kəşf etdi - onlar hələ də bütün istiqamətlərdə sonsuz olaraq davam edirlər, lakin _heç vaxt_ eyni görünməzlər. Bunlara __Penrose plitələri__ deyilir və birini yaratmaq üçün yalnız bir neçə müxtəlif növ çoxbucaqlı lazımdır: 

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Move the slider to reveal the underlying structure of this tessellation. Notice how you have the same patterns at various scales: the small yellow pentagons, blue stars, orange rhombi and green ‘ships’ appear in their original size, in a #[strong.blue slightly larger size] and an #[strong.red even larger size]. This #[em self-similarity] can be used to prove that this Penrose tiling is non-periodic.

---
> id: penrose-1

Penrose, əyləncələr üçün sırf kəşfiyyat işləri aparırdı, lakin məlum olur ki, bəzi həqiqi materialların (alüminium kimi) daxili quruluşu bənzər bir nümunəni izləyir. Nümunə hətta tualet kağızı üzərində də istifadə edilmişdir, çünki istehsalçılar dövri olmayan bir naxışın heç bir qabarıqlıq olmadan yuvarlana biləcəyini qeyd etdilər. 

---

## Polyhedra 

> section: polyhedra
> id: polyhedra
> translated: auto

İndiyə qədər düz, iki ölçülü bir dünyada çoxbucaqlı nələr edə biləcəyimizə baxdıq. Bir [__polyhedron__](gloss:polyhedron) , çoxbucaqlılardan ibarət üçölçülü bir cisimdir. Bəzi nümunələr: 

::: column.padded-thin(width=220)

    x-polyhedron#poly1(size=220 shape="PentagonalPrism")

::: column(width=220)

    x-polyhedron(size=220 shape="Hebesphenorotunda")

::: column(width=220)

    x-polyhedron(size=220 shape="StellatedDodecahedron")

:::

Polyhedra əyri səthləri ehtiva edə bilməz - kürələr və silindrlər, məsələn, polyhedra deyildir. 

Bir polyhedron meydana gətirən çoxbucaqlılara onun [__üzləri__](gloss:polyhedron-face) deyilir. İki üzün bağlandığı xətlərə [__kənarlar__](gloss:polyhedron-edge) , kənarların qovuşduğu künclərə isə [__uclar__](gloss:polyhedron-vertex) deyilir. 

---
> id: euler

Polyhedra bir çox müxtəlif formada və ölçüdə olur - sadə kublar və ya bir neçə üzü olan piramidalardan tutmuş, üçbucaqlı üzləri olan yuxarıdakı ulduz kimi mürəkkəb obyektlərə qədər. Bununla birlikdə, _bütün_ polyhedra'nın ortaq bir əhəmiyyətli bir mülkü olduğu ortaya çıxır: 

::: .theorem

__Eyler Polyhedron Formula__  
Hər bir polyhedronda üzlərin sayı ( _F_ ) və uclarının sayı ( _V_ ) kənarların sayından ( _E_ ) iki dəfə çoxdur. Başqa sözlə, 

{.text-center}`F + V = E + 2`

:::

Məsələn, bir polyhedronun 12 üzü və 18 ucu varsa, bilirik ki, onun [[28]] kənarı olmalıdır. 

---
> id: euler-1

Bu tənliyi məşhur İsveçrə riyaziyyatçısı [Leonard Euler](bio:euler) kəşf etdi. Hər hansı bir çuxur olmadıqca hər hansı bir polyhedron üçün doğrudur. 

Yuxarıdakılar kimi fərqli polyhedra cəhd etsəniz, Euler düsturunun həmişə işlədiyini görərsiniz. [Sonrakı bir kursda](/course/graph-theory/planar-graphs) həqiqətən riyazi olaraq necə sübut edəcəyinizi öyrənəcəksiniz. 

---

## Torlar və kəsişmələr 

> section: nets-cross-sections
> sectionStatus: dev

TODO

---

## Prizmalar və Piramidalar 

> section: prisms-pyramids
> sectionStatus: dev

ETMƏK 

---

## Şekiller ve qatı maddələr 

> section: scaling
> sectionStatus: dev

ETMƏK 

---

## Platonik qatı maddələr 

> section: platonic
> id: platonic
> translated: auto

Bu kursun əvvəlində [müntəzəm çoxbucaqlıları](gloss:regular-polygon) , xüsusən də "simmetrik" çoxbucaqlılar, bütün tərəfləri və bucaqları eyni olduğu təyin etdik. Polyedra üçün oxşar bir şey edə bilərik. 

_Müntəzəm bir polyhedronda_ bütün [üzlər](gloss:polyhedron-face) eyni tipli müntəzəm çoxbucaqlıdır və eyni sayda üzlər hər [vertexdə](gloss:polyhedron-vertex) görüşürlər. Bu iki xassəyə sahib olan polyhedra, Yunan filosofu [Platonun](bio:plato) adını daşıyan [__Platonik bərk__](gloss:platonic-solid) adlanır. 

 Beləliklə, Platonik bərk cisimlər nəyə oxşayır - və bunların neçəsi var? Üç ölçülü bir forma düzəltmək üçün hər ucunda görüşmək üçün ən azı [[3]] üzə ehtiyacımız var. Sistematik olaraq ən kiçik müntəzəm çoxbucaqla başlayaq: bərabər tərəfli üçbucaqlar: 

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow

Hər bir ucunda üç [bərabər tərəfli üçbucağın](gloss:equilateral-triangle) görüşdüyü bir polyhedron yaratsaq, solda forma alırıq. __Tetrahedron__ adlanır və [[4]] üzə malikdir. _{.reveal(when="blank-0")} ("Tetra" yunanca "dörd" deməkdir)._ 

:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow

Dörd bərabər tərəfli üçbucaq hər dikbaşda görüşərsə, fərqli bir Platonik bərk olur. __Oktahedron__ adlanır və [[8]] üzə malikdir. _{.reveal(when="blank-0")} ("Octa" yunan dilində "səkkiz" deməkdir. Eynilə "Octagon" 8 tərəfli forma deməkdir, "Octahedron" 8 üzlü bərk deməkdir.)_ 

:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow

[[Beş]] üçbucaq hər vertexdə __görüşsə__ , __Icosahedron alırıq__ . [[20]] üzü var. _{.reveal(when="blank-1")} ("Icosa" yunan dilində "iyirmi" deməkdir.)_ 

:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow

[[Altı]] üçbucaq hər vertexdə qarşılaşırsa, fərqli bir şey olur: biz sadəcə [[bir tessellation]] alırıq [[| dörd tərəfli | başqa Icosahedron]] , _{span.reveal(when="blank-1")} əvəzinə üçölçülü bir polyhedron._ 

:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow

Hər bir ucunda yeddi və ya daha çox üçbucaq da yeni polyhedra əmələ gətirmir: bir çoxbucağın ətrafında o qədər üçbucağa uyğun yer yoxdur. 

:::

Bu, üçbucaqlardan ibarət [[üç]] Platon qatı tapdığımız deməkdir. Növbəti müntəzəm çoxbucağa keçək: kvadratlar. 

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow

[[Üç]] kvadrat hər bir ucunda görüşsələr, __kubu__ alırıq. Zərf kimi, [[6]] üzü var. _{span.reveal(when="blank-1")} Kub, bəzən Yunan dilində "altı" üçün "hexa" sözündən sonra _Hexahedron_ da deyilir._ 

:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow

Hər [[dördbucaqda dörd]] meydan [[bir-birinə qovuşursa, başqa bir boşalma]] alırıq [[| bir tetraedron | başqa bir kub]] . _{span.reveal(when="blank-1")} Əvvəlki kimi, beş və ya daha çox meydan da işləməyəcəkdir._ 

:::

---
> id: platonic-dodecahedron

Sonrakı, nizamlı beşbucaqları sınayaq: 

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow

[[Üç]] pentaqon hər __dikdə görüşsəydi__ , __Dodecahedron alırıq__ . [[12]] üzü var. _{.reveal(when="blank-1")} ("Dodeca" yunan dilində "on iki" deməkdir.)_ 

:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow

Əvvəlki kimi, dörd və ya daha çox beşbucaq [[işləmir |]] kifayət qədər yer olmadığı [[üçün mümkündür]] . 

:::

---
> id: platonic-hexagons

Növbəti müntəzəm çoxbucaqlı altıbucaqlılardır: 

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow

Üç altıbucaqlı hər vertexdə görüşərsə, dərhal bir [[imtahan]] alırıq [[| polyhedron | hexahedron]] . _{span.reveal(when="blank-0")} Üçdən çox boşluq olmadığına görə, altıbucaqlılardan ibarət Platonic bərk maddələrin olmadığı görünür._ 

:::

---
> id: platonic-final

Eyni, altı tərəfdən çox olan bütün müntəzəm çoxbucaqlılarda da eyni vəziyyətdədir. Tessellate etmirlər və əlbəttə ki, üçölçülü çoxbucaqlı almırıq. 

Bu, yalnız [[beş]] Platonik qatı var deməkdir! Hamısına birlikdə nəzər salaq: 

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")

__Tetrahedron__ 

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual} [[4]] üzlər_  
_{span.dual} [[4]] Vertices_  
_{span.dual} [[6]] kənarları_ 

::: column.grow.text-center(width=120)

__Küp__ 

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")} [[6]] üzlər_  
_{span.dual(target="dual1")} [[8]] Vertices_  
_{span.dual} [[12]] kənarları_ 

::: column.grow.text-center(width=120)

__Oktahedron__ 

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")} [[8]] üzlər_  
_{span.dual(target="dual1")} [[6]] Vertices_  
_{span.dual} [[12]] kənarları_ 

::: column.grow.text-center(width=120)

__Dodecahedron__ 

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")} [[12]] üzlər_  
_{span.dual(target="dual2")} 20 Vertices_  
_{span.dual} 30 kənarları_ 

::: column.grow.text-center(width=120)

__Icosahedron__ 

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")} [[20]] üz_  
_{span.dual(target="dual2")} 12 Vertices_  
_{span.dual} 30 kənarları_ 

:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} Üzlərin və ucların sayının necə [[dəyişdirildiyinə]] diqqət yetirin [[|]] [kub və oktaedr](target:dual1) üçün [[eyni]] , [dodecahedron və icosahedron](target:dual2) [[üçün eyni]] , kənarlarının sayı [[eyni qalır | fərqlidirlər]] . Platon bərk olan bu cütlərə [__ikiqat bərk__](gloss:polyhedron-dual) deyilir. 

---
> id: platonic-dual

Hər bir üzü bir vertekslə, hər bir ucu da bir üzlə "əvəz etməklə" çoxqütbü ikili hala gətirə bilərik. Bu animasiyalar göstərir: 

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

Tetrahedron özü ilə ikiqatdır. Üz və ucları eyni sayda olduğundan onları dəyişdirmək heç nəyi dəyişdirməz. 

---
> id: platonic-elements

[Platon](bio:plato) , Kainatdakı bütün maddələrin dörd elementdən ibarət olduğuna inanırdı: Hava, Yer, Su və Od. Düşünürdü ki, hər bir element Platon qatı birinə uyğundur, beşincisi isə kainatı bütövlükdə təmsil edəcəkdir. Bu gün bilirik ki, polyhedra deyil, sferik atomlardan ibarət 100-dən çox fərqli element var. 

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Images from Johannes Kepler’s book “Harmonices Mundi” (1619)

---

### Arximed Qatılar 

> id: archimedean

Platonik qatılar xüsusilə vacib polyhedradır, lakin saysız-hesabsız başqaları var. 

[__Arximed qatı__](gloss:archimedean-solid) məsələn, hələ də [müntəzəm çoxbucaqlılardan ibarət olmalıdır](gloss:regular-polygon) , ancaq bir çox fərqli növdən istifadə edə bilərsiniz. Onlara başqa bir yunan riyaziyyatçısı, [Sirakuzanın Arximedinin](bio:archimedes) adı verilib və onlardan 13-ü var: 

::: column(width=170 parent="padded-thin")

    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __Kəsilmiş Tetrahedron__  
8 üz, 12 ucu, 18 kənarı 

::: column(width=170)

    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __Cuboctahedron__  
14 üz, 12 ucu, 24 kənarı 

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __Kəsilmiş küp__  
14 üz, 24 uc, 36 kənar 

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __Kəsilmiş Octahedron__  
14 üz, 24 uc, 36 kənar 

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __Rhombicuboctahedron__  
26 üz, 24 uc, 48 kənar 

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Kəsilmiş Cuboctahedron__  
26 üz, 48 ucu, 72 kənarı 

::: column(width=170)

    x-polyhedron(size=170 shape="SnubCube")

{.caption} __Snub kubu__  
38 üz, 24 ucu, 60 kənarı 

::: column(width=170)

    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Icosidodecahedron__  
32 üz, 30 ucu, 60 kənarı 

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __Kəsilmiş Dodecahedron__  
32 üz, 60 ucu, 90 kənarı 

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __Kəsilmiş Icosahedron__  
32 üz, 60 ucu, 90 kənarı 

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Rhombicosidodecahedron__  
62 üz, 60 ucu, 120 kənarı 

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __Kəsilmiş Icosidodecahedron__  
62 üz, 120 ucu, 180 kənarı 

::: column(width=170)

    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __Snub Dodecahedron__  
92 üz, 60 ucu, 150 kənarı 

:::

---
> id: polyhedra-applications

### Proqramlar 

Platon, bütün elementlərin Platon bərklərindən ibarət olduğuna inanmaqda səhv idi. Ancaq müntəzəm polyhedra təbiətdə başqa yerlərdə görünməyə imkan verən bir çox xüsusi xüsusiyyətə malikdir - və bu xüsusiyyətləri elm və mühəndislikdə kopyalaya bilərik. 

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Radiolaria skeleton

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow

Bir çox __virus__ , __bakteriya__ və digər kiçik __orqanizmlər__ [icosahedra](gloss:icosahedron) şəklindədir. Məsələn, viruslar öz genetik materiallarını çox sayda eyni protein zülalının qabığına daxil etməlidirlər. İzosahedron bunun ən səmərəli yoludur, çünki bir neçə müntəzəm elementdən ibarətdir, lakin demək olar ki, bir sahə şəklindədir. 

:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Buckyball molecule

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Montreal Biosphere

::: column.grow

Bir çox __molekul__ müntəzəm polyhedra şəklində olur. Ən məşhur nümunədir `C_60` bir [kəsilmiş İcosahedron](gloss:truncated-icosahedron) şəklində [qurulmuş](gloss:truncated-icosahedron) 60 karbon atomundan ibarətdir. 

1985-ci ildə elm adamları ulduzlararası toz araşdırması zamanı kəşf edildi. Bənzər binaların inşası ilə məşhur olan memar [Buckminster Fullerdən](bio:fuller) sonra onu "Buckyball" (və ya Buckminsterfullerene) adlandırdılar. 

:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Fluorite octahedron

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Pyrite cube

::: column.grow

Əksər __kristalların__ atomları [tetraedra](gloss:tetrahedron) , [kublar](gloss:cube) və ya [oktaedradan](gloss:octahedron) ibarət müntəzəm bir şəbəkə [şəklində qurulmuşdur](gloss:octahedron) . Qırıldıqda və ya parçalandıqda bu formaları daha böyük miqyasda görə bilərsiniz. 

:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Octagonal space frames

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Louvre museum in Paris

::: column.grow

Tetrahedra və oktahedra olduqca sərt və sabitdir, bu da onları __tikintidə__ çox faydalı edir. _Kosmik çərçivələr_ böyük damları və ağır körpüləri dəstəkləyə biləcək çoxbucaqlı quruluşdur. 

:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Football

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Polygonal role-playing dice

::: column.grow

Platonik bərk də __zar__ yaratmaq üçün istifadə olunur. simmetriyasına görə hər tərəfin eniş [ehtimalı yüksəkdir](gloss:probability) - buna görə zar ədalətli olur. 

[Kəsilmiş Icosahedron](gloss:truncated-icosahedron) , ehtimal ki, dünyanın ən məşhur [polhedrondur](gloss:truncated-icosahedron) : futbolun formasıdır. 

:::
