# Dəyişikliklər və simmetriya 

## Giriş 

> id: intro
> section: introduction
> translated: auto

[Xəttlər](gloss:line) və ya [çoxbucaqlılar](gloss:polygon) kimi bir çox həndəsi anlayış riyaziyyatçılar tərəfindən "icad edilmişdir". Simmetriya, digər tərəfdən, ətrafımızda hər yerdədir. Demək olar ki, bütün bitkilər, heyvanlar və hətta insanlar simmetrikdirlər. 

::: column(width=200)

    x-img(src="images/butterfly.jpg" width=200 height=200 lightbox alt="Butterfly")

::: column(width=200)

    x-img(src="images/lion.jpg" width=200 height=200 lightbox alt="Lion")

::: column(width=200)

    x-img(src="images/starfish.jpg" width=200 height=200 lightbox alt="Starfish")

:::

Zamanla sənətdə, memarlıqda, texnologiyada və dizaynda təbiətin simmetriyasını təqlid etdik. Simmetrik formalar və naxışlar simmetrik olmayanlardan _daha gözəl_ görünür. 

::: column(width=200)

    x-img(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox alt="Taj Mahal")

::: column(width=200)

    x-img(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox alt="US Capitol")

::: column(width=200)

    x-img(src="images/window.jpg" width=200 height=200 lightbox alt="Mosaic Church Window")

:::

Ancaq simmetriya sadəcə _gözəl_ görünməkdən daha vacibdir. Kainatımızın ən təməlində yerləşir və fizikanın ən fundamental qanunlarını da izah edə bilər. 

_{button.next-step} Davam edin_ 

---
> id: transformations
> goals: t1 t2 t3

Simmetriya çox intuitiv bir anlayış olsa da, riyazi olaraq təsvir etmək düşündüyünüzdən daha çətindir. Birincisi, bir həndəsi fiquru digərinə çevirmək yolları olan [__dəyişikliklər__](gloss:transformation) haqqında məlumat [__almalıyıq__](gloss:transformation) . Bir neçə nümunə: 

::: column.r(width=200 parent="padded-thin")

    .animation
      include svg/transform-1.svg
      x-play-btn

::: column.r(width=200)

    .animation
      include svg/transform-2.svg
      x-play-btn

::: column.r(width=200)

    .animation
      include svg/transform-3.svg
      x-play-btn

:::

---
> id: transformations-1

Bir çevrilmənin nəticəsi [__görüntü__](gloss:transformation-image) adlanır. Tez-tez bir forma şəklini ifadə edirik `A` kimi `A'` , tələffüz "bir əsas". Bu kurs boyunca daha ətraflı araşdıracağımız bir çox müxtəlif çevrilmə var. 

---

## Sərt çevrilmələr 

> id: rigid
> section: rigid
> translated: auto

[__Sərt bir çevrilmə__](gloss:rigid-transformation) , bir rəqəmin ölçüsünü və ya formasını dəyişdirməyən xüsusi bir çevrilmədir. Təsəvvür edə bilərik ki, o, ağac və ya metal kimi möhkəm bir materialdan hazırlanmışdır: onu hərəkətə gətirə, çevirə və ya kənara çevirə bilərik, ancaq uzanmırıq, əyilmək və ya başqa şəkildə deformasiya etmək olmur. 

Bu beş çevrilmədən hansı sərtdir? 

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

Məlum olur ki, sərt çevrilmələrin yalnız üç müxtəlif növü var: 

::: column.r(width=200)

    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} Sadəcə bir forma _hərəkət_ edən bir çevrilməyə [__tərcümə__](gloss:translation) deyilir. 

::: column.r(width=200)

    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} _Üzərinə_ bir forma _atan_ bir _çevrişə_ [__əks__](gloss:reflection) deyilir. 

::: column.r(width=200)

    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} Bir forma _bükən_ bir çevrilməyə [__dönmə__](gloss:rotation) deyilir. 

:::

---
> id: rigid-2

Daha mürəkkəb olanları yaratmaq üçün çox sayda çevrilməni birləşdirə bilərik - məsələn, bir dönüşün ardınca tərcümə. 

Ancaq əvvəlcə bu növ çevrilmələrin hər birinə daha ətraflı nəzər salaq. 

---
> id: translations

### Tərcümələr 

[__Tərcümə__](gloss:translation) bir fiqurun hər nöqtəsini eyni məsafədə eyni istiqamətdə hərəkət edən bir çevrilmədir. 

Koordinat müstəvisində formanın _x_ -axis və _y_ -axis boyunca nə qədər köçürüldüyünə görə bir tərcümə təyin edə bilərik. Məsələn, (3, 5) bir çevrilmə _x_ -axis boyunca 3, _y_ -axis boyunca 5 ilə bir forma köçürür. 

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.orange.light(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" label-class="white")
      path.fill.orange(x="s1.shift(5,-1)" label="A'" label-class="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} Tərcümə edən ( [[5]] , [[1]] ) 

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red.light(x="circle(point(7,4),1.5)" name="s2" label="B" label-class="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-class="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} Tərcümə edən ( [[-4]] , [[2]] ) 

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.light.purple(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C")
      path.fill.purple(x="s3.shift(4,2)" label="C'")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} Tərcümə edən ( [[4]] , [[-2]] ) 

:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

İndi növbə var - aşağıdakı formaları göstərildiyi kimi tərcümə edin: 

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Tərcümə edin (3, 1) _{span.check(when="drag-0")}_ 

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Tərcümə edin (–4, –2) _{span.check(when="drag-1")}_ 

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} Tərcümə edin (5, –1) _{span.check(when="drag-2")}_ 

:::

---
> id: reflections
> goals: r0 r1 r2

### Reflilər 

Bir [__əks__](gloss:reflection) , bir xətt boyunca bir forma "atır" və ya "güzgülərə" qoyur. Bu xətt __əks xətti__ adlanır. 

Bu misalların hər birində əks xəttini çəkin: 

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,1),point(1,2),point(2,3),point(8,2))" style="stroke: #363644; stroke-width: 3px; fill: rgba(179,4,105,0.4)" name="from0")
      path(hidden name="line0" x="line(point(-1,4),point(11,4))")
      path(x="from0.reflect(line0)" style="stroke: #363644; stroke-width: 3px; fill: rgba(179,4,105,0.4)")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(1,1),point(1,5),point(3,5),point(2,3),point(4,1))" style="stroke: #363644; stroke-width: 3px; fill: rgba(154,24,130,0.4)" name="from1")
      path(hidden name="line1" x="line(point(9,-1),point(-1,9))")
      path(x="from1.reflect(line1)" style="stroke: #363644; stroke-width: 3px; fill: rgba(154,24,130,0.4)")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/rorschach.jpg" width=220 height=180 alt="Rorschach Test")
      svg
        path(hidden name="line2" x="line(point(5,-1),point(5,9))")

:::

---
> id: reflections-1
> goals: r0 r1 r2

İndi növbə var - bu formaların hər birinin əksini çəkin: 

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(1,2),point(3,1),point(4,3),point(4,5),point(2,6),point(1,4))" name="from0" style="fill: rgba(105,63,180,0.4)")
      path.red(x="line(point(5,0), point(5,1))" name="line0")
      path.finished(hidden x="from0.reflect(line0)" name="to0" style="fill: rgba(105,63,180,0.4)")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,6),point(6,4),point(8,6),point(5,7))" name="from1" style="fill: rgba(80,83,205,0.4)")
      path.red(x="line(point(-1,4), point(11,4))" name="line1")
      path.finished(hidden x="from1.reflect(line1)" name="to1" style="fill: rgba(80,83,205,0.4)")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,3),point(3,3),point(3,5),point(5,5),point(5,6),point(2,6))" name="from2" style="fill: rgba(56,102,230,0.4)")
      path.red(x="line(point(2,1), point(3,2))" name="line2")
      path.finished(hidden x="from2.reflect(line2)" name="to2" style="fill: rgba(56,102,230,0.4)")

:::

---
> id: reflections-2

Notice əks xəttində bir nöqtəyə yalan [[hərəkət deyil,]] əgər ki, [[| dönər |]] əks olduqda [[artıq flips:]] _{span.reveal(when="blank-0")} onun görüntüsü orijinalla eyni nöqtədir._ 

---
> id: reflections-3

Yuxarıdakı nümunələrin hamısında əks xətti üfüqi, şaquli və ya 45° bir açı ilə idi - bu da əks olunmağı asanlaşdırdı. Əgər belə deyilsə, tikinti bir az daha çox iş tələb edir: 

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move.pulsate(name="l1" cx="180" cy="30" target="refl")
      circle.move.pulsate(name="l2" cx="120" cy="270" target="refl")
      path(name="refl" x="line(l1,l2)" target="refl")
    
      circle.reveal(name="a" x="point(60,50)" when="next-0" animation="pop" target="circ")
      circle(name="b" x="point(120,100)" hidden)
      circle(name="c" x="point(110,170)" hidden)
      circle(name="d" x="point(65,200)" hidden)
      circle(name="e" x="point(30,120)" hidden)
    
      circle.reveal(name="p" x="refl.project(a)" when="next-0" animation="pop" delay=1500)
      path.reveal.fill.light(x="angle(a,p,l1)" size=16 when="next-0" delay=1500)
    
      circle.reveal(name="a1" x="a.reflect(refl)" when="next-1" animation="pop" target="circ")
      circle(name="b1" x="b.reflect(refl)" hidden)
      circle(name="c1" x="c.reflect(refl)" hidden)
      circle(name="d1" x="d.reflect(refl)" hidden)
      circle(name="e1" x="e.reflect(refl)" hidden)
    
      path.fill.blue(x="polygon(a,b,c,d,e)")
      path.fill.reveal.blue1(x="polygon(a1,b1,c1,d1,e1)" when="next-3")
    
      path.reveal(x="line(a,a1)" when="next-0" animation="draw" delay=1000)
      path.reveal.thin.light(x="segment(b,b1)" when="next-2" animation="draw" delay=400)
      path.reveal.thin.light(x="segment(c,c1)" when="next-2" animation="draw" delay=500)
      path.reveal.thin.light(x="segment(d,d1)" when="next-2" animation="draw" delay=600)
      path.reveal.thin.light(x="segment(e,e1)" when="next-2" animation="draw" delay=700)
    
      circle.transparent(name="ax" x="refl.project(a)" target="circ")
      path.transparent(x="segment(a,ax)" target="d1 circ")
      path.transparent(x="segment(a1,ax)" target="d2 circ")
      path.transparent(x="circle(ax,distance(a,ax))" target="circ")

::: column.grow

{.r} Bu forma əks [xətti](target:refl) boyunca əks etdirmək üçün hər bir [ucu](gloss:polygon-vertex) ayrıca əks etdirməliyik və sonra yenidən birləşdirməliyik. _{button.next-step} Davam edin_ 

{.r.reveal(when="next-0")} Gəlin uclardan birini seçək və əks nöqtəyə dik olan bu vertexdən xətt çəkək. _{button.next-step} Davam edin_ 

{.r.reveal(when="next-1")} İndi vertexdən əksin xəttinə qədər olan [məsafəni](target:d1) ölçə bilərik və digər tərəfdə [eyni məsafəni](target:d2) olan nöqtəni düzəldə bilərik. _{span.lgrey} (Bunu etmək üçün ya bir hökmdar və ya [kompas](target:circ) istifadə edə bilərik.)_ _{button.next-step} Davam edin_ 

{.r.reveal(when="next-2")} Formamızın digər ucları üçün də eyni şeyi edə bilərik. _{button.next-step} Davam edin_ 

{.r.reveal(when="next-3")} İndi yalnız əks olunan ucları düzgün qaydada bağlamalıyıq və əksini tapdıq! 

:::

---
> id: rotations
> goals: r0 r1 r2

### Dönüşlər 

[__Fırlanma__](gloss:rotation) , sabit bir nöqtə ətrafında müəyyən bir açı ilə bir forma "çevirən" bir çevrilmədir. Bu nöqtə [__fırlanma mərkəzi__](gloss:center-of-rotation) adlanır. Dönmə saat istiqamətində və ya saat yönünün əksinə ola bilər. 

Aşağıdakı formaları qırmızı fırlanma mərkəzinin ətrafında döndərməyə çalışın: 

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} Saat istiqamətində 90° dönün. 

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} 180° dönün. 

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} Saata qarşı 90° dönün. 

:::

---
> id: rotations-1

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move.pulsate(name="rot" cx="150" cy="250" target="rot angle compass protractor")
    
      circle.reveal(name="a" x="point(270,190)" when="next-0" animation="pop" target="compass")
      circle(name="b" x="point(280,110)" hidden)
      circle(name="c" x="point(210,80)" hidden)
      circle(name="d" x="point(190,170)" hidden)
      circle(name="e" x="point(220,200)" hidden)
    
      circle.reveal(name="a1" x="a.rotate(-ang/18*pi,rot)" when="next-2" animation="pop" target="a1 compass")
      circle(name="b1" x="b.rotate(-ang/18*pi,rot)" hidden)
      circle(name="c1" x="c.rotate(-ang/18*pi,rot)" hidden)
      circle(name="d1" x="d.rotate(-ang/18*pi,rot)" hidden)
      circle(name="e1" x="e.rotate(-ang/18*pi,rot)" hidden)
    
      path.fill.green(x="polygon(a,b,c,d,e)")
      path.fill.reveal.green1(x="polygon(a1,b1,c1,d1,e1)" when="next-4")
    
      path.transparent.light.fill(x="arc(rot,a.rotate(pi,rot),pi)" target="protractor")
      path.reveal.light.fill(x="angle(a1,rot,a)" when="next-1" target="angle protractor")
    
      path.reveal(x="segment(a,rot)" when="next-0" animation="draw" delay=500 target="angle compass protractor")
      path.reveal.thin.light(x="segment(rot,b)" when="next-3" animation="draw" delay=400)
      path.reveal.thin.light(x="segment(rot,c)" when="next-3" animation="draw" delay=500)
      path.reveal.thin.light(x="segment(rot,d)" when="next-3" animation="draw" delay=600)
      path.reveal.thin.light(x="segment(rot,e)" when="next-3" animation="draw" delay=700)
    
      path.reveal(x="ray(rot,a1)" when="next-1" animation="draw" delay=500 target="angle l2")
      path.reveal.thin.light(x="segment(rot,b1)" when="next-3" animation="draw" delay=800)
      path.reveal.thin.light(x="segment(rot,c1)" when="next-3" animation="draw" delay=900 )
      path.reveal.thin.light(x="segment(rot,d1)" when="next-3" animation="draw" delay=1000)
      path.reveal.thin.light(x="segment(rot,e1)" when="next-3" animation="draw" delay=1100)
    
      path.transparent(x="segment(rot,a1)" target="compass protractor")
      path.transparent(x="circle(rot,distance(rot,a))" target="compass")

::: column.grow

Dəqiq 90° və ya 180° -ə uyğun olmayan fırlanma çəkmək daha çətindir. Bu formanı döndərməyə çalışaq ${10*ang}{ang|6|-18,18,1} [Fırlanma mərkəzinin](target:rot) ətrafında. 

{.r} Yansıtmalar üçün olduğu kimi, hər nöqtəni ayrıca bir formada döndərməliyik. _{button.next-step} Davam edin_ 

{.r.reveal(when="next-0")} Döngələrdən birini götürərək fırlanma mərkəzinə bir xətt çəkərək başlayırıq. _{button.next-step} Davam edin_ 

{.r.reveal(when="next-1")} Bir [protractor](target:protractor) istifadə edərək, bir [açı](target:angle) aça bilərik [${ang*10}](target:angle) Fırlanma mərkəzi ətrafında [°.](target:angle) Bu açıda [ikinci bir xətt](target:l2) çəkək. _{button.next-step} Davam edin_ 

{.r.reveal(when="next-2")} Bir [kompas](target:compass) və ya hökmdardan istifadə edərək, bu xəttdə orijinal nöqtə ilə fırlanma mərkəzindən eyni məsafədə olan bir [nöqtə](target:a1) tapa bilərik. _{button.next-step} Davam edin_ 

{.r.reveal(when="next-3")} İndi bu addımları şəklimizin bütün digər ucları üçün təkrarlamalıyıq. _{button.next-step} Davam edin_ 

{.reveal(when="next-4")} Və nəhayət, əvvəlki kimi, orijinal şəklimizin dönmüş görüntüsünü əldə etmək üçün fərdi ucları birləşdirə bilərik. 

:::

---
> id: composition-1

Transformasiyalar yalnız həndəsə deyil, riyaziyyatın bir çox hissəsində vacib bir anlayışdır. Məsələn, [_funksiyalarını_](gloss:function) [qrafiklərini](gloss:function-graph) dəyişdirərək və ya dəyişdirərək dəyişdirə bilərsiniz. İki şəklin bir-birinə [uyğun](gloss:congruent) olub olmadığını müəyyən etmək üçün çevrilmələrdən də istifadə edə bilərsiniz. 

---

## Konqres 

> section: congruence
> sectionStatus: dev

TODO

---

## Simmetriya 

> id: symmetry
> goals: play-0 play-1
> section: symmetry
> translated: auto

[__Simmetriya__](gloss:symmetry) ətrafımızda hər yerdədir və intuitiv bir anlayışdır: bir cismin müxtəlif hissələri müəyyən mənada _eyni_ görünür. Dəyişikliklərdən istifadə edərək simmetriyanın _həqiqətən_ nə demək olduğunu daha dəqiq, riyazi bir tərif verə bilərik: 

{.definition} Bir obyekt müəyyən bir çevrilməni tətbiq etdikdən sonra da eyni görünsə _simmetrikdir_ . 

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} Bu kəpənəyi əks etdirə bilərik və sonradan da eyni görünür. Deyirik ki, bunun __əks simmetriyası var__ . 

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} Bu çiçəyi döndərə bilərik və sonradan da eyni görünür. Deyirik ki, __fırlanma simmetriyası var__ . 

:::

---
> id: reflectional-symmetry

### Reflectional simmetriya 

Bir forma [__əks__](gloss:reflectional-symmetry) olunduqdan sonra eyni görünsə, [__əks etdirici simmetriya__](gloss:reflectional-symmetry) var. Yansıtma xətti [__simmetriya oxu__](gloss:axis-of-symmetry) adlanır və şəkli iki [[konqresə]] bölür [[| bərabərdir | oxşar]] yarılar. Bəzi rəqəmlərdə simmetriyanın birdən çox oxu da ola bilər. 

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

Bu altı şəkil və formada simmetriyanın bütün oxlarını çəkin: 

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/lake.jpg" width=220 height=180 alt="Lake")
      svg
        path(hidden name="line0" x="line(point(-1,4),point(11,4))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/beijing.jpg" width=220 height=180 alt="Forbidden City in Beijing")
      svg
        path(hidden name="line1" x="line(point(5,-1),point(5,9))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points)
      x-img.background(src="images/blue-butterfly.jpg" width=220 height=180 alt="Butterfly")
      svg
        path(hidden name="line2" x="line(point(1,-1),point(11,9))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(5,1),point(8,2),point(9,4),point(8,6),point(5,7),point(2,6),point(1,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(255,148,31,0.4)")
      path(hidden name="line3a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line3b" x="line(point(5,-1),point(5,9))")

{.caption} Bu forma simmetriyanın [[2]] oxuna malikdir. 

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} Bir kvadratda [[4]] ox simmetriya var. 

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} Bu forma simmetriyanın [[2]] oxuna malikdir. 

:::

---
> id: alphabet

Əlifba əlifbasında bir çox məktublarda əks simmetriya var. Bütün olanları seçin: 

    x-picker.letters
      - let c = ['#D92120', '#E6642C', '#E68E34', '#D9AD3C', '#B5BD4C', '#7FB972', '#63AD99', '#55A1B1', '#488BC2', '#4065B1', '#413B93', '#781C81']
      for l, i in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        if 'FGJKLNPQRSZ'.indexOf(l) < 0
          .item(style=`color: ${c[i%12]}`)= l
        else
          .item(data-error="letter-not-symmetric" style=`color: ${c[i%12]}`)= l

---
> id: reflectional-symmetry-2
> goals: r0 r1 r2

Budur daha bir neçə forma. Onları tamamlayın ki, əks simmetriya olsun: 

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path.fill.finished(hidden x="polygon(point(8,5),point(9,3),point(9,2),point(8,1),point(6,1),point(5,2),point(4,1),point(2,1),point(1,2),point(1,3),point(2,5),point(5,7))" style="fill: rgba(179,4,105,0.4)")
      path(x="polyline(point(5,2),point(4,1),point(2,1),point(1,2),point(1,3),point(2,5),point(5,7))" name="from0")
      path.red(x="line(point(5,-1),point(5,9))" name="line0")
      path(hidden x="from0.reflect(line0)" name="to0")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path.fill.finished(hidden x="polygon(point(1,5),point(1,3),point(6,3),point(4,1),point(5,0),point(9,4),point(5,8),point(4,7),point(6,5))" style="fill: rgba(154,24,130,0.4)")
      path(x="polyline(point(1,4),point(1,3),point(6,3),point(4,1),point(5,0),point(9,4))" name="from1")
      path.red(x="line(point(-1,4),point(11,4))" name="line1")
      path(hidden x="from1.reflect(line1)" name="to1")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path.fill.finished(hidden x="polygon(point(2,1),point(8,1),point(9,2),point(9,6),point(8,7),point(2,7),point(1,6),point(1,2))" style="fill: rgba(130,43,155,0.4)")
      path(x="polyline(point(5,1),point(8,1),point(9,2),point(9,4))")
      path.red(x="line(point(5,-1),point(5,9))")
      path.red(x="line(point(-1,4),point(11,4))")
      path(hidden x="polyline(point(5,1),point(2,1),point(1,2),point(1,6),point(2,7),point(8,7),point(9,6),point(9,4))" name="to2")

:::

---
> id: palindromes
> goals: p0 p1 p2

Şekiller, məktublar və şəkillərdə əks simmetriya ola bilər, ancaq bütöv rəqəmlər, sözlər və cümlələr ola bilər! 

Məsələn "25352" və "ANNA" hər ikisini arxadan qabağa oxudu. Buna oxşar rəqəmlər və ya sözlər [__Palindromes__](gloss:palindrome) adlanır. Başqa palindromları düşünə bilərsinizmi? 

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

Boşluqlara və durğu işarələrinə məhəl qoymasaq, aşağıda göstərilən qısa cümlələrdə əksedici simmetriya da var. Öz əlinizlə gələ bilərsinizmi? 

{.text-center} Heç vaxt tək və ya hətta olmayın.  
Bir jar tuna üçün bir [[qoz]] .  
Yo, banan [[oğlan]] ! 

{.reveal(when="blank-0 blank-1")} Lakin Palindromes yalnız əyləncəli deyil, əslində praktik əhəmiyyət daşıyır. Bir neçə il əvvəl elm adamları [DNT-nin](gloss:dna) hissələri palindromik olduğunu aşkar etdilər. Bu, onları mutasiyalara və ya ziyana qarşı daha möhkəm edir - çünki hər parçanın ikinci nüsxə nüsxəsi var. 

---
> id: rotational-symmetry

### Dönmə simmetriyası 

::: column.grow

Bir forma döndükdən sonra eyni görünsə (360° -dən az) [__fırlanan simmetriyaya__](gloss:rotational-symmetry) malikdir. [Fırlanma mərkəzi](gloss:center-of-rotation) ümumiyyətlə formanın ortasındadır. 

[__Simmetriya qaydası__](gloss:order-of-symmetry) , şəklin eyni göründüyü fərqli istiqamətlərin sayıdır. Başlanğıca qayıtmadan əvvəl _şəkli dönə biləcəyimiz sayca_ bu barədə də düşünə _bilərsiniz_ . Məsələn, bu qar uçqununun [[6]] əmri var. 

{.reveal(when="blank-0")} Hər dönüşün bucağıdır `"360°"/"order"` . Qar uçqununda bu `"360°"/6 = input(60)°` . 

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

Bu şekillerin hər biri üçün sıranı və fırlanma bucağını tapın: 

::: column(width=220)

    img(src="images/clover.jpg" width=200 height=200)

{.caption} Sifariş [[4]] , bucaq [[90]]° 

::: column(width=220)

    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} Sifariş [[2]] , bucaq [[180]]° 

::: column(width=220)

    img(src="images/flower.jpg" width=200 height=200)

{.caption} Sifariş [[8]] , bucaq [[45]]° 

:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

İndi bu formaları tamamlayın ki, fırlanma simmetriyası olsun: 

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption} Sifariş 4 

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption} Sifariş 2 

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} Sifariş 4 

:::

---

## Simmetriya qrupları və divar kağızları 

> id: groups
> section: symmetry-groups
> translated: auto

 Bəzi şekillerdə birdən çox simmetriya var - [meydanda](gloss:square) sadə bir nümunə olaraq nəzər salaq. 

::: column(width=400 parent="padded-thin")

    .cubes
      img.cube.reveal(src="images/cube-0.svg" width=80 height=80 when="blank-1 blank-2 blank-3" delay=1000 animation="pop")
      img.cube.reveal(src="images/cube-1.svg" width=80 height=80 when="blank-1" animation="pop")
      img.cube.reveal(src="images/cube-2.svg" width=80 height=80 when="blank-2" animation="pop")
      img.cube.reveal(src="images/cube-3.svg" width=80 height=80 when="blank-3" animation="pop")
      img.cube.reveal(src="images/cube-4.svg" width=80 height=80 when="blank-0" animation="pop")
      img.cube.reveal(src="images/cube-5.svg" width=80 height=80 when="blank-0" delay=200 animation="pop")
      img.cube.reveal(src="images/cube-6.svg" width=80 height=80 when="blank-0" delay=400 animation="pop")
      img.cube.reveal(src="images/cube-7.svg" width=80 height=80 when="blank-0" delay=600 animation="pop")

::: column.grow(width=200)

Artıq yuxarıda göstərmisiniz ki, bir kvadrat [[4]] ox əksinə malikdir. 

{.reveal(when="blank-0")} Ayrıca [[90]]°, [[180]]° və [[270]]° ilə fırlanma simmetriyası var. 

{.reveal(when="blank-1 blank-2 blank-3")} Və nəhayət, simmetriyanın başqa bir xüsusi növü kimi "heç nə etməmək" barədə düşünə bilərik - çünki nəticə əvvəlkindən eynidir. Buna bəzən __şəxsiyyət__ deyilir. 

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} Ümumilikdə, [[8]] fərqli "meydanın simmetriyasını" tapdıq. 

:::

---
> id: add-symmetries
> goals: sum-0 sum-1

İndi bu simmetriyalarla həqiqətən bir arifmetika etməyə başlaya bilərik. Məsələn, yenilərini almaq üçün iki simmetriya _əlavə_ edə bilərik: 

::: column(width=260)

    .text-center
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo =
      span.sym-sum.pending(tabindex=0): img.cube(src="images/cube-2.svg" width=54 height=54)
    x-gesture(target=".sym-sum")

::: column(width=260)

    .text-center
      img.cube(src="images/cube-2.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-6.svg" width=54 height=54)
      mo =
      span.sym-sum.pending(tabindex=0): img.cube.ani-sym(src="images/cube-4.svg" width=54 height=54)

:::

---
> id: calculator
> title: Symmetry Calculator
> goals: calculate

Bir kvadratın iki simmetriyasını əlavə etdiyiniz zaman yenisini alırsınız. Budur özünüzü sınaya biləcəyiniz bir "simmetriya kalkulyatoru": 

    .calculator
      .display
        .operator +
        .operator =
        .clear ×
      .button(tabindex=0) + #[img.cube(src="images/cube-0.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-1.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-2.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-3.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-4.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-5.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-6.svg" width=40 height=40)]
      .button(tabindex=0) + #[img.cube(src="images/cube-7.svg" width=40 height=40)]

---
> id: symmetry-arithmetic

Simmetriya kalkulyatoru ilə birlikdə oynamağa bir az vaxt sərf edin və hər hansı bir nümunə tapmağa çalışın. Bu müşahidələri tamamlaya bilərsinizmi? 

* İki rotasiya əlavə etmək hər zaman [[bir fırlanma]] verəcəkdir [[| bir əks]] (və ya şəxsiyyət). * İki əksini əlavə etmək hər zaman [[bir dönüş]] verəcəkdir [[| bir əks]] (və ya şəxsiyyət). * Eyni qaydada eyni iki simmetriyi əlavə etmək [[bəzən fərqli verir | həmişə fərqli verir | həmişə eyni]] nəticə [[verir]] . * Şəxsiyyət əlavə [[etmək heç bir şey etmir | bir əks qaytarır | əksini qaytarır]] . 

---
> id: group-axioms

Əlavə etməyi artıq başa düşə bilərdiniz __{.orange} simmetriyalar__ əslində əlavə etməyə çox oxşardır __{.green} tam ədədlər__ : 

    ol.proof
    
      li.r
        | Adding two #[strong.orange symmetries]/#[strong.green integers] always gives another #[strong.orange symmetry]/#[strong.green integer]:
        .text-center.axiom 
          img.cube(src="images/cube-2.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-6.svg" width=32 height=32)
          mo(value="=") =
          img.cube(src="images/cube-4.svg" width=32 height=32)
        .text-center.axiom 
          mn 12
          mo +
          mn 7
          mo =
          mn 19
        .next-step Continue
    
      li.r.reveal(when="next-0")
        span.md Adding #[strong.orange symmetries]/#[strong.green integers] is [associative](gloss:associative):
        .text-center.axiom 
          mfenced
            img.cube(src="images/cube-1.svg" width=32 height=32)
            mo +
            img.cube(src="images/cube-4.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-3.svg" width=32 height=32)
          mo(value="=") =
          img.cube(src="images/cube-1.svg" width=32 height=32)
          mo +
          mfenced
            img.cube(src="images/cube-4.svg" width=32 height=32)
            mo +
            img.cube(src="images/cube-3.svg" width=32 height=32)
        .text-center.axiom
          mfenced #[mn 4]#[mo +]#[mn 2]
          mo +
          mn 5
          mo =
          mn 4
          mo +
          mfenced #[mn 2]#[mo +]#[mn 5]
        .next-step Continue
    
      li.r.reveal(when="next-1")
        | Every #[strong.orange symmetry]/#[strong.green integer] has an #[strong inverse], another #[strong.orange symmetry]/#[strong.green integer] which, when added, gives the identity:
        .text-center.axiom 
          img.cube(src="images/cube-1.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-3.svg" width=32 height=32)
          mo(value="=") =
          img.cube(src="images/cube-0.svg" width=32 height=32)
        .text-center.axiom 
          mn 4
          mo +
          mn –4
          mo(value="=") =
          mn 0
        .next-step Continue

---
> id: groups-1

Riyaziyyatda bu xüsusiyyətlərə sahib olan hər hansı bir kolleksiya [__qrup__](gloss:group) adlanır. Bəzi qruplar (kimi.) __{.orange}__ bir kvadratın __simmetriyaları__ ) yalnız sonlu sayda elementə malikdir. Digərləri (kimi.) __{.green} tam ədədlər__ ) sonsuzdur. 

Bu nümunədə meydanın səkkiz simmetriyasından başladıq. Əslində, hər həndəsi formanın öz __simmetriya qrupu var__ . Hamısının fərqli elementləri var, ancaq yuxarıdakı üç qaydanı həmişə yerinə yetirirlər. 

Riyaziyyatda hər yerdə qruplar görünür. Elementlər ədəd və ya simmetriya ola bilər, eyni zamanda çoxbucaqlılar, dəyişmələr, matrislər, funksiyalar ... üç qaydaya əməl edən _hər şey_ . _Qrup nəzəriyyəsinin_ əsas fikri, ayrı-ayrı elementlərin _bir-biri ilə necə qarşılıqlı əlaqədə olmaları ilə_ maraqlanmamağımızdır. 

::: column.grow

Məsələn, fərqli molekulların simmetriya qrupları elm adamlarına uyğun materialların xüsusiyyətlərini təxmin etməyə və izah etməyə kömək edə bilər. 

Qruplardan, stolüstü oyunlarda qazanılmış strategiyanı, tibbdəki virusların davranışını, musiqidəki fərqli harmoniyaları və bir çox digər anlayışları təhlil etmək üçün istifadə edilə bilər ... 

::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} CCl <sub>4</sub> molekulunun (solda) və Adenovirusun (sağda) xüsusiyyətləri simmetriyaları ilə müəyyən edilir. 

:::

---

### Divar kağızları qrupları 

> id: wallpaper-groups

[Əvvəlki hissələrdə](/course/transformations/symmetry) iki fərqli çevrilməyə uyğun olan iki fərqli simmetriyanı gördük: fırlanma və əks. Ancaq üçüncü növ sərt çevrilmə üçün bir simmetriya da var: [[tərcümələr | fırlanır | uçurur]] . 

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__Tərcümə simmetriyası__](gloss:translational-symmetry) çiçəklər və ya kəpənəklər kimi təcrid olunmuş cisimlər üçün işləmir, ancaq hər tərəfə uzanan müntəzəm naxışlar üçündür: 

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption} Altıbucaqlı honyekomb 

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption} Seramik divar plitələr 

:::

---
> id: footsteps

Yansıtıcı, fırlanma və tərcümə simmetriyasına əlavə olaraq, dördüncü bir növ də var: [__sürüşmə əks etdirmələri__](gloss:glide-reflection) . Bu əks və oxun eyni istiqamətdə bir tərcüməsidir. 

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

Bir naxış simmetriyanın birdən çox növünə sahib ola bilər. Eynilə meydanlarda olduğu kimi, bütün fərqli simmetriyalarını özündə ehtiva edən bir naxışın [simmetriya qrupunu](gloss:symmetry-group) tapa bilərik. 

Bu qruplar naxışın necə _göründüyü_ (məsələn, rəngləri və formaları), necə _təkrarlandığı_ haqqında çox şey söyləmir. Çox fərqli naxışlar eyni simmetriya qrupuna sahib ola bilər - uzun müddət eyni şəkildə təkrarlanır və təkrarlanır. 

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Bu iki naxış çox fərqli görünsələr də eyni simmetriyalara malikdir. Ancaq simmetriya rənglər və ya səthi formalara aid deyil. 

::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Bu iki naxış eyni simmetriyalara malikdir - bir-birlərinə nisbətən soldakı müvafiq naxışlara daha çox bənzəyirlər. 

:::

---
> id: wallpaper-groups-3
> goals: gallery

Məlum olur ki, sonsuz sayda çox naxış olsa da, hamısının cəmi 17 fərqli simmetriya qrupundan biri var. Bunlara __divar kağızları qrupları__ deyilir. Hər divar kağızı qrupu tərcümə, dönmə, əks və sürüşmə əks birləşmələri ilə müəyyən edilir. Bu nümunələrdə [fırlanma mərkəzlərini](gloss:center-of-rotation) və [əks oxlarını görə bilərsinizmi](gloss:axis-of-symmetry) ? 

    x-gallery(slide-width="320")
      div
        img(src="images/wallpapers/p1.svg" width=360, height=240)
        p.caption <strong>Group 1 – P1</strong>  
Only translations
      div
        img(src="images/wallpapers/p2.svg" width=360, height=240)
        p.caption <strong>Group 2 – P2</strong>  
Rotations of order 2, translations
      div
        img(src="images/wallpapers/p3.svg" width=360, height=240)
        p.caption <strong>Group 3 – P3</strong>  
Rotations of order 3 (120°), translations
      div
        img(src="images/wallpapers/p4.svg" width=360, height=240)
        p.caption <strong>Group 4 – P4</strong>  
Four rotations of order 2 (180°), translations
      div
        img(src="images/wallpapers/p6.svg" width=360, height=240)
        p.caption <strong>Group 5 – P6</strong>  
Rotations of order 2, 3 and 6 (60°), translations
      div
        img(src="images/wallpapers/pm.svg" width=360, height=240)
        p.caption <strong>Group 6 – PM</strong>  
Parallel axes of reflection, translations
      div
        img(src="images/wallpapers/pmm.svg" width=360, height=240)
        p.caption <strong>Group 7 – PMM</strong>  
Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/p4m.svg" width=360, height=240)
        p.caption <strong>Group 8 – P4M</strong>  
Rotations (ord 2 + 4), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p6m.svg" width=360, height=240)
        p.caption <strong>Group 9 – P6M</strong>  
Rotations (ord 2 + 6), reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p3m1.svg" width=360, height=240)
        p.caption <strong>Group 10 – P3M1</strong>  
Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p31m.svg" width=360, height=240)
        p.caption <strong>Group 11 – P31M</strong>  
Rotations of order 3, reflections, glide reflections, translations
      div
        img(src="images/wallpapers/p4g.svg" width=360, height=240)
        p.caption <strong>Group 12 – P4G</strong>  
Rotations (ord 2 + 4), reflections, glide reflections, translations 
      div
        img(src="images/wallpapers/cmm.svg" width=360, height=240)
        p.caption <strong>Group 13 – CMM</strong>  
Perpendicular reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pmg.svg" width=360, height=240)
        p.caption <strong>Group 14 – PMG</strong>  
Reflections, glide reflections, rotations of order 2, translations
      div
        img(src="images/wallpapers/pg.svg" width=360, height=240)
        p.caption <strong>Group 15 – PG</strong>  
Parallel glide reflections, translations
      div
        img(src="images/wallpapers/cm.svg" width=360, height=240)
        p.caption <strong>Group 16 – CM</strong>  
Reflections, glide reflections, translations
      div
        img(src="images/wallpapers/pgg.svg" width=360, height=240)
        p.caption <strong>Group 17 – PGG</strong>  
Perpendicular glide reflections, rotations of order 2, translations

---
> id: drawing
> title: Drawing Wallpaper Symmetries
> goals: draw-1 draw-2 switch

Təəssüf ki, bu qruplardan _17-_ nin olması üçün sadə bir səbəb yoxdur və bunun daha inkişaf etmiş riyaziyyat tələb olunduğunu sübut etmək. Bunun əvəzinə, 17 divar kağızı qrupunun hər biri üçün öz təkrar nümunələrinizi çəkməyə cəhd edə bilərsiniz: 

    include ./components/wallpaper
    x-wallpaper
    .other-students.reveal(when="draw-1 switch")
      h4 Examples of other students’ drawings
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/wallpaper-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-3.png" width=240 height=160)

---
> id: crystallographic-groups

::: column.grow

Divar kağızı qrupları hamısı düz, iki ölçülü naxışlar idi. Üç ölçülü naxışlar üçün oxşar bir şey edə bilərik: bunlara kristaloqrafik qruplar deyilir və bunların 219-u var! 

Tərcümə, əks, dönmə və sürüşmə əks etdirmələrinə əlavə olaraq, bu qruplara __sürüşmə təyyarələri__ və __vida baltaları__ kimi simmetriyalar daxildir (bir şüşə açmadan hərəkət haqqında düşünün). 

::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} Bor-Nitridin üç ölçülü simmetriya qrupuna sahib olan bu kristal panjasında nizamlanan molekulları var. 

:::

---

## Fizikada simmetriya 

> id: planets
> sectionBackground: dark stars
> section: physics
> translated: auto

İndiyə qədər baxdığımız bütün simmetriklər müəyyən mənada _vizual_ idi: görünən formalar, şəkillər və ya naxışlar. Əslində simmetriya daha geniş bir konsepsiya ola bilər: _dəyişmə toxunulmazlığı_ . 

Məsələn, alma suyunu portağal suyu istədiyi qədər sevirsinizsə, alma və portağal dəyişdirən çevrilmə altında seçiminiz "simmetrikdir". 

1915-ci ildə alman riyaziyyatçısı [Emmy Noether](bio:noether) bənzər bir şeyin [təbiət qanunlarına](gloss:laws-of-nature) uyğun olduğunu müşahidə etdi. 

::: column.grow

Məsələn, təcrübəmiz bizə deyir ki, Fizika qanunları kainatın hər yerində eynidir. Londonda və ya Nyu-Yorkda və ya Marsda bir sınaq keçirməyinizin əhəmiyyəti yoxdur - Fizika qanunları həmişə eyni olmalıdır. Bir şəkildə, onlar [[tərcümə simmetriyasına]] sahibdirlər [[| əks simmetriya]] . 

{.reveal(when="blank-0")} Eynilə, Şimal, Cənub, Şərq və ya Qərblə qarşılaşarkən bir təcrübə aparmağımızın əhəmiyyəti yoxdur: təbiət qanunlarında [[fırlanma simmetriyası var | sürüşmə əks simmetriyası]] . 

{.reveal(when="blank-1")} Və nəhayət, bu gün, ya sabah, ya da bir ildə bir təcrübə aparmağımızın əhəmiyyəti yoxdur. Təbiət qanunları "vaxt simmetrikdir". 

::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

Bu "simmetriyalar" əvvəlcə olduqca mənasız görünə bilər, amma əslində kainatımız haqqında çox şey söyləyə bilər. Emmy Noether hər simmetrinin _qorunub saxlanılan_ müəyyən fiziki miqdara uyğun olduğunu sübut edə bildi. 

Məsələn, vaxt simmetriyası, __enerjinin__ kainatımızda qorunması lazım olduğunu ifadə edir: enerjini bir növdən digərinə (məsələn, elektrik enerjisinə) çevirə bilərsiniz, ancaq heç vaxt enerji yarada və ya məhv edə bilməzsiniz. Kainatdakı ümumi enerji miqdarı daim sabit qalacaq. 

    figure
      x-img(src="images/cern.jpg" width=760 height=400 credit="© CERN" alt="Large Hadron Collider in CERN")
      p.caption CERN is the world’s largest particle accelerator. Scientists smash together fundamental particles at enormous speeds, to learn more about their properties. Can you see the person at the bottom, for size comparison?

::: column(width=220)

    x-img(src="images/higgs.png" width=220 height=150 alt="Particle Fragments")
    p.caption The paths taken by particle fragments after a collision

::: column.grow

Belə çıxır ki, simmetriya haqqında bilməklə fiziklər kainatımızı idarə edən çox təbiət qanunlarını - heç bir təcrübə və müşahidə aparmadan əldə edə bilərlər. 

Simmetriya hətta fundamental hissəciklərin mövcudluğunu proqnozlaşdıra bilər. Bir nümunə, məşhur __Higgs Boson__ : 1960-cı illərdə nəzəri fiziklər tərəfindən proqnozlaşdırıldı, ancaq 2012-ci ilə qədər real dünyada müşahidə edilmədi. 

:::

---

## Dilatiyalar 

> id: dilations
> section: dilations
> translated: auto

Bu günə qədər yalnız [[sərt]] baxdı [[| məcmu | vizual]] çevrilmələr. _{span.reveal(when="blank-0")} İndi olmayan biri haqqında düşünək: bir [__dilation__](gloss:dilation) daha böyük və ya kiçik etməklə bir formanın ölçüsünü dəyişdirir._ 

---
> id: dilations-1

::: column.grow

Bütün dilatların bir [__mərkəzi__](target:center) və bir [__miqyas amili var__](->.scale-target) . Mərkəz genişlənmə üçün istinad nöqtəsidir və miqyas amili rəqəmin nə qədər uzandığını və ya kiçildiyini söyləyir. 

[Ölçək amili](gloss:scale-factor) 0 ilə 1 arasındadırsa, görüntü daha [[kiçikdir |]] orijinaldan [[daha]] böyükdür. Ölçək amili 1-dən böyükdürsə, görüntü daha [[böyükdür |]] orijinaldan [[kiçikdir]] . 

::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="C" cx=40 cy=35 target="center")
    
      circle(hidden name="a" x="point(140,55)")
      circle(hidden name="b" x="point(160,115)")
      circle(hidden name="c" x="point(60,130)")
    
      circle(hidden name="a1" x="a.subtract(C).scale(s).add(C)")
      circle(hidden name="b1" x="b.subtract(C).scale(s).add(C)")
      circle(hidden name="c1" x="c.subtract(C).scale(s).add(C)")
    
      path.fill.green(x="polygon(a,b,c)" label="A" label-class="white")
      path.fill.blue(x="polygon(a1,b1,c1)" label="A’" label-class="white")
    
      path.light.thin(x="segment(C,s<1?a:a1)")
      path.light.thin(x="segment(C,s<1?b:b1)")
      path.light.thin(x="segment(C,s<1?c:c1)")

{.text-center.scale-target} Ölçək amili: ${s}{s|2|0,3,0.1}

:::

{.todo} Tezliklə - Dilations haqqında daha çox 

---

## Bənzərlik 

> section: similarity
> sectionStatus: dev
> id: similarity

TODO
