# बहुभुज और पॉलीहेड्रा

## बहुभुज

> section: polygons
> id: polygons
> color: "#4757D3"
> level: Intermediate
> next: circles
> translated: auto

एक [__बहुभुज__](gloss:polygon) एक बंद, सपाट आकार है जिसमें केवल सीधे पक्ष होते हैं। बहुभुजों में किसी भी पक्ष और कोण हो सकते हैं, लेकिन पक्ष घुमावदार नहीं हो सकते। नीचे की कौन सी आकृति बहुभुज हैं?

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

हम बहुभुजों को अलग-अलग नाम देते हैं, जो इस बात पर निर्भर करता है कि उनके पास कितने पक्ष हैं:

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

### बहुभुज में कोण

_एन_ पक्षों के साथ प्रत्येक बहुभुज में _एन_ [आंतरिक कोण](gloss:internal-angle) भी [होते हैं](gloss:internal-angle) । हम पहले से ही जानते हैं कि एक त्रिभुज में आंतरिक कोण का योग हमेशा [[180]]° होता है लेकिन अन्य बहुभुजों का क्या?

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

ऐसा लगता है कि चतुर्भुज में आंतरिक कोणों का योग हमेशा [[360]]° होता है - ठीक [[दो बार | तीन बार |]] एक त्रिभुज में कोणों का [[आधा]] योग। _{span.reveal(when="blank-0 blank-1")} यह कोई संयोग नहीं है: प्रत्येक चतुर्भुज को दो त्रिकोणों में विभाजित किया जा सकता है।_

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} वही बड़े बहुभुजों के लिए भी काम करता है। हम एक पेंटागन को [[3]] त्रिकोणों में विभाजित कर सकते हैं, इसलिए इसका आंतरिक कोण योग है `3 × 180° =` [[540]]° है। _{span.reveal(when="blank-2 blank-3")} और हम एक षट्भुज को [[4]] त्रिकोणों में विभाजित कर सकते हैं, इसलिए इसका आंतरिक कोण योग है `4 × 180° =` [[720]]°।_

---
> id: internal-angle-sum

एक बहुभुज ${x}{x|7|3,15,1} पक्षों में 180° × का आंतरिक कोण योग होगा ${x-2} = ${(x-2)*180}°। आम तौर पर, _एन_ पक्षों के साथ एक बहुभुज को [[n - 2]] में विभाजित किया जा सकता है [[| एन - 1 | n]] त्रिकोण। इसलिए,

{.text-center.reveal(when="blank-0")} एक _एन_ -गन में आंतरिक कोणों का योग `= (n - 2) × 180°` ।

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### उत्तल और अवतल बहुभुज

::: column.grow

हम कहते हैं कि एक बहुभुज [__अवतल है__](gloss:concave) यदि इसमें एक खंड है जो "इंगित करता है"। आप कल्पना कर सकते हैं कि इस भाग में ["घुड़सवार" है](target:cave) । बहुभुज जो अवतल _नहीं_ होते हैं उन्हें [__उत्तल__](gloss:convex) कहा जाता [__है__](gloss:convex) ।

ऐसे दो तरीके हैं जिनसे आप अवतल बहुभुज को आसानी से पहचान सकते हैं: उनके पास कम से कम एक [आंतरिक कोण होता है जो 180° से बड़ा होता है](target:angle) । उनके पास कम से कम एक [विकर्ण है जो बहुभुज के _बाहर_ स्थित है](target:diagonal) ।

उत्तल बहुभुज में, दूसरी ओर, सभी आंतरिक कोण [[180]]° से कम होते हैं, और सभी विकर्ण [[अंदर]] झूठ बोलते [[हैं |]] बहुभुज के [[बाहर]] ।

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

इनमें से कौन से बहुभुज अवतल हैं?

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### नियमित बहुभुज

हम कहते हैं कि एक बहुभुज [__नियमित है__](gloss:regular-polygon) अगर उसके सभी पक्षों की लंबाई समान है, और सभी कोणों का आकार समान है। इनमें से कौन सी आकृति नियमित बहुभुज हैं?

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

नियमित बहुभुज कई अलग-अलग आकारों में आ सकते हैं - लेकिन समान संख्याओं वाले सभी नियमित बहुभुज [[समान हैं | बधाई हो | एक ही क्षेत्र है]] !

---
> id: regular-2

हम पहले से ही बहुभुज में सभी [आंतरिक कोणों](gloss:internal-angle) का योग जानते हैं। नियमित बहुभुजों के लिए इन सभी कोणों का [[आकार समान होता है | वैकल्पिक कोण हैं]] , इसलिए हम एक आंतरिक कोण के आकार को काम कर सकते हैं:

{.text-center.reveal(when="blank-0")} कोण = <mfrac><mrow>[[सभी कोणों का योग | कोणों की संख्या]]</mrow><mrow>[[कोणों की संख्या | सभी कोणों का योग]]</mrow></mfrac> _{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x` ।_

{.reveal(when="blank-1 blank-2" delay=1000)} अगर `n=3` हम एक समबाहु त्रिभुज के आंतरिक कोण का आकार प्राप्त करते हैं - हम पहले से ही जानते हैं कि यह [[60]]° होना चाहिए। _{span.reveal(when="blank-3")} के साथ एक नियमित बहुभुज में ${x}{x|6|3,12,1} पक्ष, प्रत्येक आंतरिक कोण 180° है -_ <mfrac class="inline"><mrow>_360°_</mrow><mrow>_${x}_</mrow></mfrac> _= ${round(180-360/x)}°।_

---
> id: regular-area

### नियमित बहुभुज का क्षेत्र

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

यहां आप एक [नियमित बहुभुज](gloss:regular-polygon) देख सकते हैं ${n}{n|5|4,12,1} पक्षों। हर तरफ की लंबाई है [{.pill.green} 1 मी](target:base) । आइए इसके क्षेत्र की गणना करने का प्रयास करें!

सबसे पहले, हम बहुभुज में विभाजित कर सकते हैं ${toWord(n)} सर्वांगसम, [[समद्विबाहु | समभुज | समकोण]] त्रिभुज।

{.reveal(when="blank-0")} हमें पहले से ही [[आधार]] पता है [[| ऊंचाई |]] इन त्रिकोणों का [[क्षेत्र]] , लेकिन हमें [[ऊंचाई]] भी चाहिए [[| पैर |]] इसके क्षेत्र की गणना करने में सक्षम होने के लिए [[मध्यस्थ]] । _{span.reveal(when="blank-2")} नियमित बहुभुजों में, इस ऊंचाई को कभी-कभी कहा जाता है [{.pill.yellow} एपोटेम](target:apothem) ।_

{.reveal(when="blank-1 blank-2" delay=1000)} ध्यान दें कि एपोटेम द्वारा गठित [समकोण त्रिभुज है](target:right-triangle) और समद्विबाहु त्रिभुज का आधा आधार। इसका मतलब है कि हम त्रिकोणमिति का उपयोग कर सकते हैं!

{.reveal(when="blank-1 blank-2" delay=2000)} [{.pill.blue}](target:base-angle) समद्विबाहु त्रिभुज का [आधार कोण](target:base-angle) (चलो उन्हें α कहते हैं) [[आधे हैं | वही |]] बहुभुज के [आंतरिक कोण](target:int-angle) के [[दो बार]] आकार:

{.text-center.reveal(when="blank-3")}`pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} एपोटेम को खोजने के लिए, हम [[स्पर्शरेखा]] की परिभाषा का उपयोग कर सकते हैं [[| ज्या | कोसाइन]] :

{.text-center.reveal(when="blank-4")}`tan pill(α, "blue", "alpha") =
pill("opposite", "yellow", "apothem") / pill("adjacent", "green", "half-base") =
blank("apothem", "s", "s/2") / blank("s/2", "s", "apothem")`

{.text-center.reveal(when="blank-5 blank-6")}`⇒ pill("apothem", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} अब, [समद्विबाहु त्रिभुज](target:isosceles-triangle) का क्षेत्रफल है

{.text-center.reveal(when="blank-5 blank-6" delay=2000)}`1/2 "base" × "height"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} बहुभुज के होते हैं ${toWord(n)} इन समद्विबाहु त्रिभुजों के, जिनमें से सभी का क्षेत्रफल समान है। इसलिए, बहुभुज का कुल क्षेत्रफल है

{.text-center.reveal(when="blank-5 blank-6" delay=4000)}`A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`

:::

---

## चतुर्भुज

> section: quadrilaterals
> id: quadrilaterals
> translated: auto

[पिछले कोर्स में](/course/triangles) हमने कई अलग-अलग गुणों की जाँच की। अब हम चतुर्भुज पर एक नजर डालते हैं।

एक _नियमित चतुर्भुज_ को एक [[वर्ग]] कहा जाता है [[| आयत | समबाहु चतुर्भुज]] । इसके सभी पक्षों की लंबाई समान है, और इसके सभी कोण समान हैं।

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

{.caption} एक __वर्ग__ एक चतुर्भुज होता है जिसमें [चार समान भुजाएँ](target:side) और [चार समान कोण होते हैं](target:angle) ।

:::

---
> id: quadrilaterals-1

थोड़ा "कम नियमित" चतुर्भुज के लिए, हमारे पास दो विकल्प हैं। अगर हम चाहते हैं कि _कोण_ बराबर हों, तो हमें एक [__आयत__](gloss:rectangle) मिलती है। यदि हम चाहते हैं कि _पक्ष_ समान हों, तो हम एक [__समभुज__](gloss:rhombus) प्राप्त करते हैं।

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

{.caption} __आयत__ [चार समान कोणों वाला](target:angle) एक चतुर्भुज है।

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

{.caption} एक __समभुज__ [चार समान भुजाओं वाला](target:side) एक चतुर्भुज है।

:::

---
> id: quadrilaterals-2

कुछ अन्य चतुर्भुज हैं, जो कम नियमित हैं लेकिन फिर भी कुछ महत्वपूर्ण गुण हैं:

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

{.caption} यदि _विपरीत_ पक्षों के दोनों जोड़े [समानांतर हैं](gloss:parallel) , तो हमें एक __समांतर__ [चतुर्भुज](gloss:parallel) मिलता है।

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

{.caption} यदि _आसन्न_ पक्षों के दो जोड़े समान लंबाई के हैं, तो हमें __पतंग__ मिलती है।

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

{.caption} यदि विपरीत पक्षों की कम से कम एक जोड़ी समानांतर है, तो हमें एक __ट्रेपेज़ियम__ मिलता है।

:::

---
> id: quadrilaterals-venn

चतुर्भुज इन श्रेणियों में से कई में गिर सकते हैं। हम विभिन्न प्रकार के चतुर्भुजों के पदानुक्रम को [वेन आरेख के रूप में देख सकते हैं](gloss:venn-diagram) :

    figure: include svg/venn.svg

उदाहरण के लिए, प्रत्येक आयत एक [[समांतर चतुर्भुज]] भी है [[| विषमकोण | वर्ग]] , और हर एक प्रकार का [[जानवर | समलम्ब | समांतर चतुर्भुज]] भी एक पतंग है। एक रोम्बस [[कभी-कभी होता है | हमेशा | कभी नहीं]] एक वर्ग और एक आयत [[हमेशा]] होता है [[| कभी कभी |]] एक ट्रेपेज़ियम [[कभी नहीं]] ।

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} किसी भी अस्पष्टता से बचने के लिए, हम आमतौर पर सिर्फ सबसे विशिष्ट प्रकार का उपयोग करते हैं।

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow

अब बाईं ओर ग्रे बॉक्स में कहीं भी, चार अंक चुनें। _{span.reveal(when="points")} हम सभी को एक चतुर्भुज बनाने के लिए जोड़ सकते हैं।_

{.reveal(when="points" delay=1000)} आइए, चारों पक्षों में से प्रत्येक का मध्यबिंदु खोजें। यदि हम मध्यबिंदुओं को जोड़ते हैं, तो हमें [[एक और चतुर्भुज]] मिलता है [[| एक त्रिभुज | एक आयत]] ।

{.reveal(when="blank-0")} बाहरी चतुर्भुज के कोने को हिलाने की कोशिश करें और देखें कि छोटे से क्या होता है। ऐसा लगता है कि यह केवल _किसी भी_ चतुर्भुज नहीं है, लेकिन हमेशा एक [[समानांतर चतुर्भुज है | समलम्ब | आयत]] !

{.reveal(when="blank-1")} लेकिन ऐसा क्यों है? _किसी भी_ चतुर्भुज के लिए परिणाम हमेशा समांतर चतुर्भुज होने चाहिए? हमें समझाने में मदद करने के लिए, हमें मूल चतुर्भुज के [विकर्णों में](gloss:polygon-diagonal) से एक को आकर्षित करने की आवश्यकता है।

{.reveal(when="diagonal")} विकर्ण चतुर्भुज को [दो त्रिकोणों](target:triangle) में विभाजित करता है। और अब आप देख सकते हैं कि आंतरिक चतुर्भुज के [दो पहलू](target:midsegment) वास्तव में [[मध्यवृत्त हैं | माध्यिकाओं |]] इन त्रिभुजों के [[लंबवत द्विभाजक]] ।

{.reveal(when="blank-2")} [पिछले पाठ्यक्रम में](/course/triangles/properties) हमने दिखाया कि एक त्रिभुज का [मध्यवृत्त](gloss:triangle-midsegment) हमेशा उसके आधार के समानांतर होता है। इस मामले में, इसका मतलब है कि [ये दोनों पक्ष](target:parallel) विकर्ण के समानांतर हैं - इसलिए उन्हें [[एक दूसरे के समानांतर]] भी होना चाहिए [[| समान लंबाई | एक-दूसरे के लिए लंबवत]] ।

{.reveal(when="blank-3" delay=2000)} हम चतुर्भुज के [दूसरे विकर्ण](target:other) के साथ बिल्कुल वैसा ही कर सकते हैं, यह दिखाने के लिए कि विपरीत पक्षों के दोनों जोड़े समानांतर हैं। और यह हम सभी को यह साबित करने की आवश्यकता है कि आंतरिक चतुर्भुज एक [समांतर](gloss:parallelogram) चतुर्भुज है। _{span.qed}_

:::

---
> id: parallelograms

### समानांतर चतुर्भुज

यह पता चला है कि समांतर चतुर्भुज में कई अन्य दिलचस्प गुण हैं, अन्य विपरीत पक्षों के समानांतर हैं। निम्नलिखित छह में से कौन सा कथन सत्य है?

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

बेशक, बस इन गुणों का "अवलोकन" पर्याप्त नहीं है। यह सुनिश्चित करने के लिए कि वे _हमेशा_ सच हैं, हमें उन्हें _साबित_ करने की आवश्यकता है:

::: tab

#### विपरीत पक्ष और कोण _{span.check(when="diagonal blank-0 blank-1")}_

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

{.task} आइए यह साबित करने की कोशिश करें कि एक समानांतर चतुर्भुज में विपरीत पक्ष और कोण हमेशा बधाई होते हैं।

समांतर चतुर्भुज के विकर्णों में से एक को आकर्षित करके प्रारंभ करें।

{.reveal(when="diagonal")} विकर्ण समांतर चतुर्भुज के किनारों के साथ चार नए कोण बनाता है। दो [लाल कोण](target:red-angle) और दो [नीले कोण](target:blue-angle) [वैकल्पिक कोण हैं](gloss:alternate-angles) , इसलिए उन्हें प्रत्येक के [[अनुरूप]] होना चाहिए [[| सटा हुआ | पूरक]] ।

{.reveal(when="blank-0")} अब अगर हम विकर्ण द्वारा बनाई गई [दो त्रिकोणों को](target:triangles) देखते हैं, तो हम देखते हैं कि उनके पास दो सर्वांगसम कोण हैं, और [एक सर्वांगसम पक्ष](target:diagonal) । [[एएसए]] द्वारा [[| आस | AA]] सर्वांगसमता की स्थिति, दोनों त्रिभुजों को एक दूसरे के अनुरूप होना चाहिए।

{.reveal(when="blank-1")} इसका मतलब यह है कि त्रिभुजों के अन्य संबंधित भागों को भी अनुरूप होना चाहिए: विशेष रूप से, [विपरीत पक्षों के](target:sides) दोनों [जोड़े](target:angles) सर्वांगसम हैं, और [विपरीत कोणों के](target:angles) दोनों [जोड़े](target:angles) बधाई हैं। _{span.qed}_

:::

{.reveal(when="blank-1")} यह पता चला है कि आक्षेप भी सत्य है: यदि चतुर्भुज में विपरीत पक्षों (या कोण) के दोनों जोड़े सर्वांगसम हैं, तो चतुर्भुज को समांतर चतुर्भुज होना चाहिए।

::: tab

#### विकर्णों _{span.check(when="diagonal blank-2 blank-3")}_

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

{.task} अब साबित करें कि एक समांतर चतुर्भुज में दो विकर्ण एक दूसरे को काटते हैं।

आइए विकर्णों द्वारा उत्पन्न दो पीले त्रिकोणों के बारे में सोचते हैं:

* हमने सिर्फ यह साबित किया है कि [दो हरे पक्ष](target:side1) एक-दूसरे के अनुकूल हैं, क्योंकि वे एक समानांतर चतुर्भुज के विपरीत हैं। * [दो लाल कोण](target:anglesR) और [दो नीले कोण](target:anglesB) समान हैं, क्योंकि वे [[वैकल्पिक कोण हैं | विपरीत कोण | समकोण]] ।

{.reveal(when="blank-2")} [[एएसए]] द्वारा [[| एसएसएस | AAS की]] स्थिति, दोनों पीले त्रिकोणों को भी अनिवार्य होना चाहिए।

{.reveal(when="blank-3")} अब हम इस तथ्य का उपयोग कर सकते हैं कि अनुरूप त्रिभुजों के संगत भागों को भी अभिनंदन किया जाता है, ताकि निष्कर्ष निकाला जा सके [`bar(AM)`](target:AM) = [`bar(CM)`](target:CM) तथा [`bar(BM)`](target:BM) = [`bar(DM)`](target:DM) । दूसरे शब्दों में, दो विकर्ण अपने मध्य बिंदु पर प्रतिच्छेद करते हैं। _{span.qed}_

:::

{.reveal(when="blank-3")} पहले की तरह, विपरीत भी सच है: यदि एक चतुर्भुज के दो विकर्ण एक दूसरे को काटते हैं, तो चतुर्भुज एक समांतर चतुर्भुज है।

:::

---
> id: kites

### काइट्स

::: column.grow

हमने ऊपर दिखाया कि दो जोड़े [[विपरीत हैं |]] समांतर चतुर्भुज के [[समीपवर्ती]] भाग सर्वांगसम होते हैं। पतंग में, _आसन्न_ पक्षों के दो जोड़े बधाई हैं।

_पतंग_ नाम स्पष्ट रूप से अपने आकार से आता है: यह पतंग की तरह दिखता है जिसे आप आकाश में उड़ सकते हैं। हालाँकि, अब तक जितने भी विशेष चतुर्भुजों को हमने देखा है, उनमें से पतंग एकमात्र ऐसी है, जिसे [अवतल](gloss:concave) भी बनाया जा सकता [है](gloss:concave) : यदि इसका आकार डार्ट या तीर के आकार का है:

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

{.caption} एक उत्तल पतंग

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

{.caption} एक अवतल पतंग जो तीर की तरह दिखाई देती है

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

आपने देखा होगा कि सभी पतंग [[सममित होती हैं | समान]] । _{span.reveal(when="blank-0")} [समरूपता](gloss:axis-of-symmetry) की [धुरी](gloss:axis-of-symmetry) [[विकर्णों में]] से [[एक है | पक्षों में से एक | एक midsegment]] ।_

{.reveal.r(when="blank-1")} विकर्ण [दो](target:triangle1) पतंग [त्रिकोण](target:triangle1) में पतंग को विभाजित करता है। हम जानते हैं कि वे [एसएसएस](gloss:triangle-sss) स्थिति से [बधाई](gloss:triangle-sss) हैं: दोनों त्रिकोणों में [तीन सर्वांगसम पक्ष](target:sss) (लाल, हरा और नीला) हैं। _{button.next-step} जारी रखें_

{.reveal.r(when="next-0")} [CPOCT](gloss:cpoct) का उपयोग करते [हुए](gloss:cpoct) , हम इसलिए जानते हैं कि [संबंधित कोणों](target:angles) को भी [अनुरूप](target:angles) होना चाहिए। _{button.next-step} जारी रखें_

{.reveal.r(when="next-1")} इसका मतलब है, उदाहरण के लिए, कि [विकर्ण](target:d1) एक [[द्विभाजक है | सीधा |]] [दो कोणों के](target:vAngle) [[मध्य]] का सिरा। _{button.next-step} जारी रखें_

{.reveal.r(when="next-2")} हम आगे भी जा सकते हैं: यदि हम दूसरे विकर्ण को आकर्षित करते हैं, तो हमें [दो और छोटे त्रिकोण](target:triangle2) मिलते हैं। [एसएएस की](gloss:triangle-sss) स्थिति के कारण इन्हें भी बधाई दी जानी चाहिए: उनके [दो पक्ष हैं और इसमें कोण भी शामिल है](target:sas) । _{button.next-step} जारी रखें_

{.reveal(when="next-3")} इसका मतलब है कि [कोण α](target:alpha) भी [कोण β](target:beta) के समान होना चाहिए। चूंकि वे आसन्न हैं, [पूरक कोण](gloss:supplementary-angles) α और are दोनों [[90]]° होना चाहिए।

{.reveal(when="blank-3")} दूसरे शब्दों में, पतंग के विकर्ण हमेशा [[लंबवत]] होते हैं [[| समानांतर]] ।

:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### चतुर्भुज का क्षेत्र

पिछले पाठ्यक्रम में त्रिकोणों के क्षेत्र की गणना करते समय, हमने इसे एक [[आयत]] में बदलने की चाल का उपयोग किया [[| वर्ग | पंचकोण]] यह पता चला है कि हम कुछ चतुर्भुजों के लिए भी ऐसा कर सकते हैं:

::: tab

#### चतुर्भुज _{span.check(when="draw-1 blank-1")}_

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

बाईं ओर, एक आयत बनाने की कोशिश करें जिसमें समांतर चतुर्भुज के समान क्षेत्र हो।

{.reveal(when="draw-1")} क्या आप देख सकते हैं कि बाईं ओर [गायब त्रिकोण](target:triangle-1) [[बिल्कुल वैसा ही है | से छोटा |]] दाईं ओर [ओवरलैपिंग त्रिकोण](target:triangle-2) [[से बड़ा]] ? _{span.reveal(when="blank-1")} इसलिए एक समांतर चतुर्भुज का क्षेत्र है_

{.text-center.reveal(when="blank-1")} क्षेत्र = __{.i.m-green} आधार__ × __{.i.m-yellow} ऊंचाई__

{.reveal(when="blank-1" delay=1000)} _समांतर चतुर्भुज की ऊंचाई को मापते समय सावधान रहें: यह आमतौर पर दो पक्षों में से एक के समान नहीं होता है।_

:::

::: tab

#### समलंब _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

याद रखें कि समलम्बाकार चतुर्भुज होते हैं, जिनमें से एक [समांतर भुजाएँ होती हैं](target:bases) । इन समानांतर पक्षों को ट्रेपेज़ियम के __आधार__ कहा जाता है।

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

पहले की तरह, एक आयत बनाने की कोशिश करें जिसमें इस ट्रेपेज़ियम के समान क्षेत्र हो। _{span.reveal(when="draw-2")} क्या आप देख सकते हैं कि बाईं और दाईं ओर [गायब और जोड़े गए त्रिभुज](target:triangles-3) कैसे रद्द करते हैं?_

{.reveal(when="draw-2" delay=2000)} [{.pill.green}](target:t-height) इस आयत की [ऊंचाई](target:t-height) के [[बीच]] की [[दूरी है | का औसत |]] ट्रैपेज़ियम के [समानांतर पक्षों](target:bases) की [[लंबाई]] ।

{.reveal.r(when="blank-2")} [{.pill.yellow}](target:t-width) आयत की [चौड़ाई](target:t-width) [[मिडपॉइंट के]] बीच की दूरी है [[| ट्रैपेज़ियम]] के दो गैर-समानांतर पक्षों के [[समापन बिंदु]] । _{span.reveal(when="blank-3")} इसे __ट्रेपेज़ियम__ का __मध्य-काल__ कहा जाता है।_ _{button.next-step.reveal(when="blank-3")} जारी रखें_

{.reveal(when="next-0")} [त्रिकोण के](gloss:triangle-midsegment) साथ की तरह, एक ट्रेपेज़ियम का मध्यक [[समानांतर होता है | के लम्बवत |]] अपने दो ठिकानों [[के समान लंबाई]] । मिडसीलेशन की लंबाई आधारों की लंबाई का औसत है: `(a+c)/2` ।

{.reveal(when="blank-4")} अगर हम यह सब गठबंधन है, हम समानांतर भुजाएं [_एक_](target:base-2) और [_सी,_](target:base-1) और ऊंचाई [_एच_](target:t-height) के साथ एक चतुर्भुज के क्षेत्र के लिए एक समीकरण मिलती है:

{.text-center.reveal(when="blank-4")}`A = h xx ((a+c) / 2)`

:::

::: tab

#### पतंग _{span.check(when="blank-5")}_

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

इस पतंग में, [दो विकर्ण](target:diag3) पतंग के चारों ओर एक बड़ी [आयत](target:rect4) की चौड़ाई और ऊंचाई बनाते हैं।

इस आयत का क्षेत्रफल [[दो बार है | बराबर |]] पतंग का [[तीन गुना]] क्षेत्र। _{span.reveal(when="blank-5")} क्या आप देख सकते हैं कि पतंग बनाने वाले [चार त्रिकोणों में से](target:inside) प्रत्येक इसके बाहर [चार अंतराल](target:outside) के समान है?_

{.reveal(when="blank-5")} इसका मतलब है कि विकर्ण के साथ पतंग का क्षेत्र [{.i.pill.green} डी 1](target:d31) और [{.i.pill.yellow} d2](target:d32) है

{.text-center.reveal(when="blank-5")} _क्षेत्र_ = `1/2` [{.i.pill.green} d1](target:d31) × [{.i.pill.yellow} d2](target:d32) ।

:::

::: tab

#### विषमकोण _{span.check(when="blank-6 blank-7")}_

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

एक [रोम्बस](gloss:rhombus) एक चतुर्भुज है जिसमें चार सर्वांगसम भुजाएँ हैं। आपको याद हो सकता है कि प्रत्येक रंबल एक [[समांतर चतुर्भुज है | आयत | वर्ग]] - और एक [[पतंग]] भी [[| षट्भुज | अवतल बहुभुज]] ।

{.reveal(when="blank-6 blank-7")} इसका मतलब यह है कि एक समभुज के क्षेत्र को खोजने के लिए, हम या तो समांतर चतुर्भुज के क्षेत्र के लिए समीकरण का उपयोग कर सकते हैं, या कि पतंग के क्षेत्र के लिए:

{.text-center.reveal(when="blank-6 blank-7")} _क्षेत्र_ = [{.i.pill.blue} आधार](target:base) × [{.i.pill.red} ऊँचाई](target:height) = `1/2` [{.i.pill.green} d1](target:d41) × [{.i.pill.yellow} d2](target:d42) ।

{.reveal(when="blank-6 blank-7" delay=1000)} _विभिन्न संदर्भों में, आपको एक Rhombus (भुजाएँ, ऊँचाई, विकर्ण) के अलग-अलग हिस्से दिए जा सकते हैं, और आपको जो भी समीकरण अधिक सुविधाजनक है, चुनना चाहिए।_

:::

:::



---

## tessellations

> section: tessellations
> id: tessellations
> translated: auto

[बहुभुज](gloss:polygon) प्रकृति में हर जगह दिखाई देते हैं। यदि आप एक बड़े क्षेत्र को टाइल करना चाहते हैं तो वे विशेष रूप से उपयोगी हैं, क्योंकि आप बिना किसी अंतराल या ओवरलैप के पॉलीगॉन को एक साथ फिट कर सकते हैं। उस तरह के पैटर्न को [__tessellations__](gloss:tessellation) कहा जाता है।

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} [[हेक्सागोनल | त्रिकोणीय | द्विघात]] मधुकोश

::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} सिनलोन मिल्क स्नेक स्किन

::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} लीफ़्स की सेलुलर संरचना

::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} उत्तरी आयरलैंड में जायंट्स कॉजवे में बेसाल्ट स्तंभ

::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} अनानास त्वचा

::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} एक कछुए का खोल

:::

---
> id: tessellations-1

प्राचीन रोम से लेकर वर्तमान तक - मनुष्य ने कला, वास्तुकला और प्रौद्योगिकी में इनमें से कई प्राकृतिक पैटर्न की नकल की है। कुछ उदाहरण निम्नलिखित हैं:

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} [[आयताकार | द्विघात | हेक्सागोनल]] फुटपाथ पैटर्न

::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} इंग्लैंड में ईडन प्रोजेक्ट में ग्रीनहाउस

::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} अल्हाम्ब्रा में मोज़ेक

::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} [[त्रिकोणीय | हेक्सागोनल |]] लंदन में ब्रिटिश संग्रहालय में [[आयताकार]] छत

::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} सिडनी में सेलुलर टेसेलेशन मंडप

::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _सरीसृप_ , एमसी एस्चर के _साथ प्लेन के नियमित विभाजन का अध्ययन_

:::

---
> id: tessellation-drawing
> goals: shapes0 shapes1

यहां आप नियमित बहुभुज का उपयोग करके अपने खुद के टेसल्स बना सकते हैं। बस कैनवास पर साइडबार से नए आकार खींचें। कौन सा आकार टेसलेट को अच्छी तरह से आकार देता है? वहाँ किसी भी आकार कि सब पर tessellate नहीं कर रहे हैं? दिलचस्प पैटर्न बनाने की कोशिश करें!

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

### नियमित बहुभुजों से टेसल्स

आपने देखा होगा कि कुछ [नियमित बहुभुज](gloss:regular-polygon) (जैसे [[वर्ग) | पेंटागन]] ) बहुत आसानी से टेसलेट करते हैं, जबकि अन्य ( [[पेंटागन की]] तरह) [[| त्रिभुज | हेक्सागोन्स]] ) बिल्कुल भी नहीं लगता।

---
> id: tessellation-regular-1

यह उनके [आंतरिक कोण](gloss:internal-angle) के आकार के साथ करना है, जिसे हमने पहले गणना करना सीखा था। [टेस्यूलेशन](gloss:polygon-vertex) में प्रत्येक [शीर्ष](gloss:polygon-vertex) पर, कई अलग-अलग बहुभुजों के आंतरिक कोण मिलते हैं। हमें [[360]] डिग्री तक जोड़ने के लिए इन सभी कोणों की आवश्यकता है, अन्यथा या तो एक अंतराल या एक ओवरलैप होगा।

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")

    include svg/tessellations/triangles.svg

{.caption} त्रिकोण [[tessellate | टेसलेट न करें]] _{span.reveal(when="blank-0")} क्योंकि 6 × 60° = 360°।_

::: column(width=160)

    include svg/tessellations/squares.svg

{.caption} चौकोर [[टेसलेट | टेसलेट न करें]] _{span.reveal(when="blank-1")} क्योंकि 4 × 90° = 360°।_

::: column(width=160)

    include svg/tessellations/pentagons.svg

{.caption} Pentagons [[tessellate नहीं है | tessellate]] _{span.reveal(when="blank-2")} क्योंकि 108° का गुणक 360° तक नहीं जुड़ता है।_

::: column(width=160)

    include svg/tessellations/hexagons.svg

{.caption} हेक्सागोन [[टेसलेट | टेसलेट न करें]] _{span.reveal(when="blank-3")} क्योंकि 3 × 120° = 360°।_

:::

---
> id: tessellation-regular-3

आप इसी तरह जाँच सकते हैं कि, पेंटागन की तरह, 7 या अधिक पक्षों के साथ कोई भी नियमित बहुभुज tessellate नहीं करता है। इसका मतलब यह है कि केवल नियमित बहुभुज जो कि टेसेलेट त्रिकोण, वर्ग और हेक्सागोन हैं!

निश्चित रूप से आप विभिन्न प्रकार के नियमित बहुभुजों को एक कटाव में जोड़ सकते हैं, बशर्ते कि उनके आंतरिक कोण 360 को जोड़ सकते हैं:

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

### अनियमित बहुभुजों से तनाव

हम [अनियमित बहुभुजों के](gloss:irregular-polygon) बाहर टेस्यूलेशन बनाने की भी कोशिश कर सकते हैं - जब तक हम उन्हें घुमाते और व्यवस्थित करते समय सावधान रहते हैं।

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

यह पता चला है कि आप न केवल समबाहु त्रिकोण, बल्कि _किसी भी त्रिभुज_ को टेसलेट कर सकते हैं! इस आरेख में [कोने](target:vertex) को स्थानांतरित करने का प्रयास करें।

एक त्रिभुज में आंतरिक कोणों का योग [[180]]° है। यदि हम प्रत्येक कोण का [[दो बार]] उपयोग करते हैं [[| एक बार | तीन बार]] प्रत्येक शीर्ष पर tessellation में, हम 360°:

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

अधिक आश्चर्य की बात है, _किसी भी चतुर्भुज_ भी tessellates! उनका आंतरिक कोण योग [[360]]° है, इसलिए यदि हम प्रत्येक कोण का [[एक बार]] उपयोग करते हैं [[| दो बार | तीन बार]] प्रत्येक शीर्ष पर tessellation में, हम 360° प्राप्त करते हैं।

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

पेंटागन थोड़ा पेचीदा है। हमने पहले ही देखा कि _नियमित_ पेंटागन टेसलेट [[नहीं करते हैं | tessellate]] , लेकिन गैर-नियमित लोगों के बारे में क्या?

---
> id: tessellation-pentagons-1

::: column(width=220)

    include svg/tessellations/pentagons-1.svg

::: column(width=220)

    include svg/tessellations/pentagons-2.svg

::: column(width=220)

    include svg/tessellations/pentagons-3.svg

:::

यहाँ पेंटागन के साथ tessellations के तीन अलग-अलग उदाहरण हैं। वे _नियमित_ नहीं हैं, लेकिन वे पूरी तरह से 5-पक्षीय बहुभुज हैं।

अब तक, गणितज्ञों ने केवल 15 अलग-अलग प्रकार के tessellations पाए हैं (उत्तल) पेंटागन के साथ - जिनमें से सबसे हाल ही में 2015 में खोजा गया था। कोई नहीं जानता कि क्या कोई अन्य है, या यदि ये 15 ही हैं ...

---
> id: escher

### कला में Tessellations

Tessellations हम दोनों कई कलाकारों, वास्तुकारों और डिजाइनर के लिए एक उपकरण और प्रेरणा - सबसे प्रसिद्ध डच कलाकार [MC Escher हैं](bio:escher) । एस्चर के काम में अजीब, उत्परिवर्ती जीव, पैटर्न और परिदृश्य शामिल हैं:

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

ये कलाकृतियाँ अक्सर मज़ेदार और सहज लगती हैं, लेकिन अंतर्निहित गणितीय सिद्धांत पहले जैसे ही हैं: कोण, घुमाव, अनुवाद और बहुभुज। अगर गणित सही नहीं है, तो टेस्यूलेशन काम नहीं करेगा!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorphosis II” by M. C. Escher (1940)

---
> id: penrose

### पेनरोज़ टिलिंग्स

अब तक हमने जितने भी टेस्यूलेशन देखे, उनमें एक चीज समान है: वे __आवधिक हैं__ । इसका मतलब है कि उनके पास एक नियमित पैटर्न है जो बार-बार दोहराया जाता है। वे सभी दिशाओं में हमेशा के लिए जारी रख सकते हैं और वे हर जगह समान दिखेंगे।

1970 के दशक में, ब्रिटिश गणितज्ञ और भौतिक विज्ञानी [रोजर पेनरोज़](bio:penrose) ने _गैर-आवधिक_ तनावों की खोज की - वे अभी भी सभी दिशाओं में असीम रूप से जारी हैं, लेकिन _कभी_ भी एक समान _नहीं_ दिखते हैं। इन्हें __पेनरोज़ टिलिंग्स__ कहा जाता है, और आपको केवल एक बनाने के लिए कुछ अलग प्रकार के बहुभुजों की आवश्यकता होती है:

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Move the slider to reveal the underlying structure of this tessellation. Notice how you have the same patterns at various scales: the small yellow pentagons, blue stars, orange rhombi and green ‘ships’ appear in their original size, in a #[strong.blue slightly larger size] and an #[strong.red even larger size]. This #[em self-similarity] can be used to prove that this Penrose tiling is non-periodic.

---
> id: penrose-1

पेनरोज़ विशुद्ध रूप से मनोरंजन के लिए टेस्यूलेशन की खोज कर रहे थे, लेकिन यह पता चला कि कुछ वास्तविक सामग्रियों (जैसे एल्यूमीनियम) की आंतरिक संरचना एक समान पैटर्न का पालन करती है। टॉयलेट पेपर पर भी पैटर्न का उपयोग किया गया था, क्योंकि निर्माताओं ने देखा कि एक गैर-आवधिक पैटर्न को बिना किसी उभार के रोल किया जा सकता है।

---

## बहुकोणीय आकृति

> section: polyhedra
> id: polyhedra
> translated: auto

अब तक हमने सिर्फ एक फ्लैट, दो-आयामी दुनिया में बहुभुज के साथ क्या कर सकते हैं, इस पर ध्यान दिया है। एक [__पॉलीहेड्रॉन__](gloss:polyhedron) एक तीन-आयामी वस्तु है जो पॉलीगॉन से बना है। यहाँ कुछ उदाहरण हैं:

::: column.padded-thin(width=220)

    x-polyhedron#poly1(size=220 shape="PentagonalPrism")

::: column(width=220)

    x-polyhedron(size=220 shape="Hebesphenorotunda")

::: column(width=220)

    x-polyhedron(size=220 shape="StellatedDodecahedron")

:::

पॉलीहेड्रा में घुमावदार सतह नहीं हो सकती हैं - गोले और सिलेंडर, उदाहरण के लिए, पॉलीहेड्रा नहीं हैं।

पॉलीहेड्रॉन बनाने वाले बहुभुजों को इसके [__चेहरे__](gloss:polyhedron-face) कहा जाता है। वे रेखाएँ जहाँ दो चेहरे जुड़े होते हैं, [__किनारों__](gloss:polyhedron-edge) को कहा जाता [__है__](gloss:polyhedron-edge) , और जहाँ [__कोने__](gloss:polyhedron-vertex) मिलते हैं उन्हें [__कोने__](gloss:polyhedron-vertex) कहा जाता [__है__](gloss:polyhedron-vertex) ।

---
> id: euler

पॉलीहेड्रा कई अलग-अलग आकारों और आकारों में आते हैं - सरल क्यूब्स या पिरामिड से कुछ ही चेहरे के साथ, ऊपर की स्टार जैसी जटिल वस्तुओं के लिए, जिसमें 60 त्रिकोणीय चेहरे हैं। हालांकि, यह पता चलता है कि _सभी_ पॉलीहेड्रा में एक महत्वपूर्ण संपत्ति है:

::: .theorem

__यूलर का पॉलीहेड्रॉन फॉर्मूला__
प्रत्येक पॉलीहेड्रोन में, चेहरे की संख्या ( _एफ_ ) प्लस की संख्या ( _वी_ ) किनारों की संख्या ( _ई_ ) से दो अधिक है। दूसरे शब्दों में,

{.text-center}`F + V = E + 2`

:::

उदाहरण के लिए, यदि एक पॉलीहेड्रॉन में 12 चेहरे और 18 कोने हैं, तो हम जानते हैं कि इसमें [[28]] किनारे होने चाहिए।

---
> id: euler-1

यह समीकरण प्रसिद्ध स्विस गणितज्ञ [लियोनार्ड यूलर](bio:euler) द्वारा खोजा गया था। यह किसी भी पॉलीहेड्रॉन के लिए सही है, जब तक कि इसमें कोई छेद न हो।

यदि आप अलग-अलग पॉलीहेड्रा की कोशिश करते हैं, तो ऊपर वाले की तरह, आप पाएंगे कि यूलर का फॉर्मूला हमेशा काम करता है। [बाद के पाठ्यक्रम में](/course/graph-theory/planar-graphs) आप सीखेंगे कि वास्तव में इसे गणितीय रूप से कैसे साबित किया जाए।

---

## नेट और क्रॉस सेक्शन

> section: nets-cross-sections
> sectionStatus: dev

TODO

---

## प्रिज्म और पिरामिड

> section: prisms-pyramids
> sectionStatus: dev

करने के लिए

---

## स्केलिंग आकार और ठोस

> section: scaling
> sectionStatus: dev

करने के लिए

---

## प्लैटोनिक सॉलिड्स

> section: platonic
> id: platonic
> translated: auto

इस पाठ्यक्रम की शुरुआत में हमने [नियमित बहुभुजों](gloss:regular-polygon) को विशेष रूप से "सममित" बहुभुज के रूप में परिभाषित किया, जहां सभी पक्ष और कोण समान हैं। हम पॉलीहेड्रा के लिए कुछ ऐसा ही कर सकते हैं।

एक _नियमित बहुतल_ में सभी [चेहरे](gloss:polyhedron-face) सभी नियमित बहुभुज के एक ही तरह है, और हर [शिखर](gloss:polyhedron-vertex) पर चेहरे मिलने की एक ही नंबर है। इन दो गुणों वाले पॉलीहेड्रा को [__प्लेटोनिक ठोस__](gloss:platonic-solid) कहा जाता है, जिसका नाम ग्रीक दार्शनिक [प्लेटो के](bio:plato) नाम पर रखा गया है।

 तो प्लेटोनिक ठोस क्या दिखते हैं - और उनमें से कितने हैं? त्रि-आयामी आकार बनाने के लिए, हमें प्रत्येक शीर्ष पर मिलने के लिए कम से कम [[3]] चेहरे चाहिए। आइए व्यवस्थित रूप से सबसे छोटे नियमित बहुभुज से शुरू करें: समबाहु त्रिकोण:

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow

यदि हम एक पॉलीहेड्रॉन बनाते हैं जहां तीन [समबाहु त्रिकोण](gloss:equilateral-triangle) हर शीर्ष पर मिलते हैं, तो हमें बाईं ओर आकृति मिलती है। इसे __टेट्राहेड्रॉन__ कहा जाता है और इसके [[4]] चेहरे हैं। _{.reveal(when="blank-0")} ("टेट्रा" का अर्थ ग्रीक में "चार") है।_

:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow

यदि चार समबाहु त्रिकोण प्रत्येक शीर्ष पर मिलते हैं, तो हमें एक अलग प्लैटोनिक ठोस मिलता है। इसे __ऑक्टाहेड्रॉन__ कहा जाता है और इसके [[8]] चेहरे हैं। _{.reveal(when="blank-0")} ("ऑक्टा" का अर्थ ग्रीक में "आठ" है। जैसे "ऑक्टागन" का अर्थ है 8-पक्षीय आकार, "ऑक्टाहेड्रॉन" का अर्थ है 8-सामना करना पड़ा ठोस। "_

:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow

यदि [[पाँच]] त्रिकोण प्रत्येक शीर्ष पर मिलते हैं, तो हमें __इकोसाहेड्रोन__ मिलता है। इसके [[20]] चेहरे हैं। _{.reveal(when="blank-1")} ("इकोसा" का अर्थ ग्रीक में "बीस" है)_

:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow

यदि [[छह]] त्रिकोण प्रत्येक शीर्ष पर मिलते हैं, तो कुछ अलग होता है: हमें बस [[एक टेसूलेशन]] मिलता [[है | एक चतुर्भुज | एक और इकोसैड्रॉन]] , _{span.reveal(when="blank-1")} इसके बजाय एक तीन आयामी पॉलीहेड्रॉन।_

:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow

और प्रत्येक शीर्ष पर सात या अधिक त्रिभुज भी नए पॉलीहेड्रा का उत्पादन नहीं करते हैं: एक वर्टेक्स के चारों ओर पर्याप्त जगह नहीं है, जिससे कि कई त्रिभुज फिट हो सकें।

:::

इसका मतलब है कि हमने त्रिभुजों से मिलकर [[तीन]] प्लेटोनिक ठोस देखे हैं। चलो अगले नियमित बहुभुज पर चलते हैं: वर्ग।

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow

यदि हर वर्ग में [[तीन]] वर्ग मिलते हैं, तो हमें __घन__ मिलता है। पासा की तरह, इसके [[6]] चेहरे हैं। _{span.reveal(when="blank-1")} "सिक्स" के लिए ग्रीक शब्द "हेक्सा" के बाद क्यूब को कभी-कभी _हेक्साहेड्रोन_ भी कहा जाता है।_

:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow

यदि हर वर्ग में [[चार]] वर्ग मिलते हैं, तो हमें [[एक और मेल]] मिलता है [[| एक टेट्राहेड्रॉन | एक और घन]] । _{span.reveal(when="blank-1")} और पहले की तरह, पांच या अधिक वर्ग भी काम नहीं करेंगे।_

:::

---
> id: platonic-dodecahedron

अगला, नियमित रूप से पेंटागन आज़माएँ:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow

अगर हर शिखर पर [[तीन]] पेंटागन मिलते हैं, तो हमें __डोडेकेहेड्रोन__ मिलता है। इसके [[12]] चेहरे हैं। _{.reveal(when="blank-1")} ("Dodeca" का अर्थ ग्रीक में "बारह" है)_

:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow

पहले की तरह, चार या अधिक पेंटागन [[काम नहीं करते हैं | संभव है]] क्योंकि पर्याप्त जगह नहीं है।

:::

---
> id: platonic-hexagons

अगले नियमित बहुभुज की कोशिश हेक्सागोन्स हैं:

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow

यदि तीन हेक्सागोन्स हर शीर्ष पर मिलते हैं, तो हम तुरंत एक [[टेसूलेशन]] प्राप्त करते [[हैं | बहुतल | हेक्साहेड्रॉन]] । _{span.reveal(when="blank-0")} चूंकि तीन से अधिक के लिए कोई स्थान नहीं है, ऐसा लगता है कि हेक्सागोन से मिलकर प्लैटोनिक ठोस नहीं हैं।_

:::

---
> id: platonic-final

छह से अधिक पक्षों वाले सभी नियमित बहुभुजों के लिए भी यही होता है। वे टेसलेट नहीं करते हैं, और हमें निश्चित रूप से कोई तीन आयामी बहुभुज नहीं मिलते हैं।

इसका मतलब है कि सिर्फ [[पांच]] प्लैटोनिक ठोस हैं! आइए एक साथ उन सभी पर एक नज़र डालें:

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")

__चतुर्पाश्वीय__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual} [[4]] चेहरे_
_{span.dual} [[४]] कार्यक्षेत्र_
_{span.dual} [[6]] किनारों_

::: column.grow.text-center(width=120)

__घनक्षेत्र__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")} [[6]] चेहरे_
_{span.dual(target="dual1")} [[8]] लम्बवत_
_{span.dual} [[12]] किनारों_

::: column.grow.text-center(width=120)

__octahedron__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")} [[8]] चेहरे_
_{span.dual(target="dual1")} [[6]] लम्बवत_
_{span.dual} [[12]] किनारों_

::: column.grow.text-center(width=120)

__Dodecahedron__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")} [[12]] चेहरे_
_{span.dual(target="dual2")} 20 चक्कर_
_{span.dual} 30 किनारों_

::: column.grow.text-center(width=120)

__विंशतिफलक__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")} [[20]] चेहरे_
_{span.dual(target="dual2")} 12 चक्कर_
_{span.dual} 30 किनारों_

:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} ध्यान दें कि चेहरे और कोने की संख्या को कैसे [[अदला-बदली किया जाता है |]] [क्यूब और ऑक्टाहेड्रोन के](target:dual1) लिए [[एक ही है]] , साथ ही [डोडेकेहेड्रोन और इकोसैहेड्रॉन](target:dual2) , जबकि किनारों की संख्या [[समान रहती है | अलग हैं]] । प्लेटोनिक ठोस के इन जोड़े को [__दोहरे ठोस__](gloss:polyhedron-dual) कहा जाता है।

---
> id: platonic-dual

हम एक पॉलीहेड्रॉन को उसके दोहरे में बदल सकते हैं, "हर जगह" को एक शीर्ष के साथ, और प्रत्येक शीर्ष को एक चेहरे के साथ बदल सकते हैं। ये एनिमेशन दिखाते हैं कि:

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

टेट्राहेड्रॉन अपने आप में दोहरी है। चूँकि इसमें समान संख्या में चेहरे और कोने हैं, इसलिए उन्हें स्वैप करने से कुछ भी नहीं बदलेगा।

---
> id: platonic-elements

[प्लेटो का](bio:plato) मानना था कि ब्रह्मांड के सभी पदार्थों में चार तत्व शामिल हैं: वायु, पृथ्वी, जल और अग्नि। उसने सोचा था कि प्रत्येक तत्व प्लेटोनिक ठोस में से एक के अनुरूप है, जबकि पांचवां एक पूरे के रूप में ब्रह्मांड का प्रतिनिधित्व करेगा। आज हम जानते हैं कि 100 से अधिक विभिन्न तत्व हैं जिनमें गोलाकार परमाणु होते हैं, न कि पॉलीहेड्रा।

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Images from Johannes Kepler’s book “Harmonices Mundi” (1619)

---

### आर्किमिडीज सॉलिड्स

> id: archimedean

प्लेटोनिक ठोस विशेष रूप से महत्वपूर्ण पॉलीहेड्रा हैं, लेकिन अनगिनत अन्य हैं।

उदाहरण के लिए, [__आर्किमिडीज़ ठोस__](gloss:archimedean-solid) , अभी भी [नियमित बहुभुजों से बना है](gloss:regular-polygon) , लेकिन आप कई अलग-अलग प्रकारों का उपयोग कर सकते हैं। उनका नाम एक अन्य यूनानी गणितज्ञ के नाम पर रखा गया, [आर्किमिडीज ऑफ सिरैक्यूज़](bio:archimedes) , और उनमें से 13 हैं:

::: column(width=170 parent="padded-thin")

    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __टेट्राहेड्रॉन को काट दिया__
8 चेहरे, 12 कोने, 18 किनारे

::: column(width=170)

    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __Cuboctahedron__
14 चेहरे, 12 कोने, 24 किनारे

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __काट दिया गया घन__
14 चेहरे, 24 कोने, 36 किनारे

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __ऑक्टाहेड्रॉन को काट दिया__
14 चेहरे, 24 कोने, 36 किनारे

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __Rhombicuboctahedron__
26 चेहरे, 24 कोने, 48 किनारे

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __काटे गए क्यूबोक्टाहेड्रॉन__
26 चेहरे, 48 कोने, 72 किनारे

::: column(width=170)

    x-polyhedron(size=170 shape="SnubCube")

{.caption} __स्नब क्यूब__
38 चेहरे, 24 कोने, 60 किनारों

::: column(width=170)

    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Icosidodecahedron__
32 चेहरे, 30 कोने, 60 किनारों

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __काटे गए डोडेकाहेड्रोन__
32 चेहरे, 60 कोने, 90 किनारों

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __कटे हुए इकोसाहेड्रॉन__
32 चेहरे, 60 कोने, 90 किनारों

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Rhombicosidodecahedron__
62 चेहरे, 60 कोने, 120 किनारे

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __काटे गए इकोसाइडोडेकेड्रॉन__
62 चेहरे, 120 कोने, 180 किनारे

::: column(width=170)

    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __स्नब डोडेकेहेड्रॉन__
92 चेहरे, 60 कोने, 150 किनारों

:::

---
> id: polyhedra-applications

### अनुप्रयोग

प्लेटो यह मानने में गलत था कि सभी तत्वों में प्लेटोनिक ठोस होते हैं। लेकिन नियमित पॉलीहेड्रा में कई विशेष गुण होते हैं जो उन्हें प्रकृति में कहीं और दिखाई देते हैं - और हम इन गुणों को विज्ञान और इंजीनियरिंग में कॉपी कर सकते हैं।

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Radiolaria skeleton

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow

कई __वायरस__ , __बैक्टीरिया__ और अन्य छोटे __जीव__ [आइकोसाहेड्रा के](gloss:icosahedron) आकार के होते हैं। उदाहरण के लिए, वायरस, कई समान प्रोटीन इकाइयों के एक खोल के अंदर अपनी आनुवंशिक सामग्री को संलग्न करना चाहिए। यह करने के लिए सबसे कुशल तरीका है icosahedron, क्योंकि इसमें कुछ नियमित तत्व होते हैं लेकिन लगभग एक गोले के आकार का होता है।

:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Buckyball molecule

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Montreal Biosphere

::: column.grow

कई __अणुओं__ को नियमित पॉलीहेड्रा की तरह आकार दिया जाता है। सबसे प्रसिद्ध उदाहरण है `C_60` जिसमें 60 कार्बन परमाणु होते हैं, जो एक [काटे गए इकोसैहेड्रोन](gloss:truncated-icosahedron) के आकार में व्यवस्थित होते हैं।

इसकी खोज 1985 में हुई थी जब वैज्ञानिकों ने इंटरस्टेलर डस्ट पर शोध किया था। उन्होंने इसी तरह की दिखने वाली इमारतों के निर्माण के लिए प्रसिद्ध आर्किटेक्ट [बकमिनस्टर फुलर के](bio:fuller) बाद इसका नाम "बकीबॉल" (या बकमिनस्टरफुलरिन) रखा।

:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Fluorite octahedron

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Pyrite cube

::: column.grow

अधिकांश __क्रिस्टल__ में अपने परमाणुओं को व्यवस्थित ग्रिड में व्यवस्थित किया जाता है जिसमें [टेट्राहेड्रा](gloss:tetrahedron) , [क्यूब्स](gloss:cube) या [ऑक्टाहेड्रा होते हैं](gloss:octahedron) । जब वे दरार या चकनाचूर होते हैं, तो आप इन आकृतियों को बड़े पैमाने पर देख सकते हैं।

:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Octagonal space frames

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Louvre museum in Paris

::: column.grow

टेट्राहेड्रा और ऑक्टाहेड्रा अविश्वसनीय रूप से कठोर और स्थिर हैं, जो उन्हें __निर्माण__ में बहुत उपयोगी बनाता है। _अंतरिक्ष फ्रेम_ बहुभुज संरचनाएं हैं जो बड़ी छतों और भारी पुलों का समर्थन कर सकती हैं।

:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Football

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Polygonal role-playing dice

::: column.grow

प्लेटोनिक ठोस का उपयोग __पासा__ बनाने के लिए भी किया जाता है। उनकी समरूपता के कारण, हर पक्ष के सामने उतरने की [संभावना](gloss:probability) है - इसलिए पासा उचित है।

[ट्रंकेटेड इकोसैहेड्रॉन](gloss:truncated-icosahedron) शायद दुनिया में सबसे प्रसिद्ध पॉलीहेड्रॉन है: यह फुटबॉल का आकार है।

:::
