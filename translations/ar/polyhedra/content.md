# مضلعات ومتعددة الوجوه

## المضلعات

> section: polygons
> id: polygons
> color: "#4757D3"
> level: Intermediate
> next: circles

 [__المضلع__](gloss:polygon) هو شكل مغلق ومسطح له جوانب مستقيمة فقط. يمكن أن يكون للمضلعات أي عدد من الأضلاع والزوايا ، ولكن لا يمكن تقويس الجوانب. أي من الأشكال أدناه هي مضلعات؟

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

 نعطي أسماء مختلفة للمضلعات ، اعتمادًا على عدد الجوانب التي لديهم:

    .row.padded-thin
      div(style="width: 100px")
        include svg/polygons/number-3.svg
        p.caption #[strong مثلث]#[br]3 جوانب
      div(style="width: 100px")
        include svg/polygons/number-4.svg
        p.caption #[strong رباعي]#[br]4 جوانب
      div(style="width: 100px")
        include svg/polygons/number-5.svg
        p.caption #[strong خماسي]#[br]5 جوانب
      div(style="width: 100px")
        include svg/polygons/number-6.svg
        p.caption #[strong سداسي]#[br]6 جوانب
      div(style="width: 100px")
        include svg/polygons/number-7.svg
        p.caption #[strong سباعي]#[br]7 جوانب
      div(style="width: 100px")
        include svg/polygons/number-8.svg
        p.caption #[strong مثمن]#[br]8 جوانب

---
> id: angles-0

### الزوايا في المضلعات


 كل مضلع له جوانب  _n_ له أيضًا _n_ [ زوايا الداخلية ](gloss:internal-angle) . نحن نعلم بالفعل أن مجموع الزوايا الداخلية في المثلث دائمًا [[180]] ° ولكن ماذا عن المضلعات الأخرى؟

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

 يبدو أن مجموع الزوايا الداخلية في الرباعي دائمًا [[360]] ° - بالضبط [[مرتين| ثلاث مرات | نصف]] مجموع الزوايا في المثلث. _{span.reveal(when="blank-0 blank-1")} هذه ليست مصادفة: يمكن تقسيم كل رباعي إلى مثلثين._

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} نفس الشيء يعمل مع المضلعات الأكبر حجمًا. يمكننا تقسيم الخماسي إلى [[3]] مثلثات ، لذا يكون مجموع الزاوية الداخلية `3 × 180° =` [[540]] °. _{span.reveal(when="blank-2 blank-3")} ويمكننا تقسيم السداسي إلى [[4]] مثلثات ، بحيث يكون مجموع الزاوية الداخلية `4 × 180° =` [[720]] °._

---
> id: internal-angle-sum

 مضلع مع ${x}{x|7|3,15,1} جوانب سيكون مجمع زاوية داخلية 180 ${x-2} = ${(x-2)*180}°.  وبشكل أعم، مضلع مع جوانب _ن_ يمكن تقسيمها إلى [[n - 2 |n - 1 | n]] مثلثات. وبالتالي،

{.text-center.reveal(when="blank-0")} مجموع الزوايا الداخلية في _n_ -gon  = `(n - 2) × 180°` .

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### المضلعات المحدبة و المقعرة

::: column.grow

 نقول أن المضلع [__المقعر__](gloss:concave) إذا كان يحتوي على قسم "يشير إلى الداخل". يمكنك أن تتخيل أن هذا الجزء ["انهار"](target:cave) . تسمى المضلعات _غير_ المقعرة [__محدبة__](gloss:convex) .

 هناك طريقتان يمكنك من خلالهما التعرف بسهولة على المضلعات المقعرة: تحتوي على [زاوية داخلية ](target:angle) واحدة على الأقل [أكبر من 180 °](target:angle) . ولديهم أيضًا [قطر](target:diagonal)  [يقع _خارج_ المضلع](target:diagonal) .

 في المضلعات المحدبة ، من ناحية أخرى ، تكون جميع الزوايا الداخلية أقل من [[180]] ° ، وتقع جميع الأقطار في [[داخل | خارج]] المضلع.

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

 أي من هذه المضلعات مقعرة؟

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### المضلعات العادية

 نقول أن المضلع [__عادي__](gloss:regular-polygon) إذا كانت جميع أضلاعه لها نفس الطول ، وجميع الزوايا لها نفس الحجم. أي من هذه الأشكال هي مضلعات عادية

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

 يمكن أن تأتي المضلعات العادية بأحجام مختلفة - ولكن جميع المضلعات العادية التي لها نفس العدد من الجوانب [[متشابهة | متطابقة | لديهم نفس المنطقة]] !

---
> id: regular-2

 نحن نعلم بالفعل مجموع جميع [الزوايا الداخلية](gloss:internal-angle) في المضلعات. بالنسبة للمضلعات العادية ، يكون لجميع هذه الزوايا [[نفس الحجم | هي زوايا بديلة]] ، لذا يمكننا تحديد حجم زاوية داخلية واحدة:

{.text-center.reveal(when="blank-0")} زاوية <mfrac><mrow>[[مجموع كل الزوايا | عدد الزوايا]]</mrow><mrow>[[عدد الزوايا | مجموع كل الزوايا]]</mrow></mfrac> _{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x` ._

{.reveal(when="blank-1 blank-2" delay=1000)} إذا `n=3` نحصل على حجم الزوايا الداخلية لمثلث متساوي الأضلاع - نعلم بالفعل أنه يجب أن يكون [[60]] °. _{span.reveal(when="blank-3")} في مضلع عادي مع ${x}{x|6|3,12,1} جوانب ، كل زاوية داخلية هي 180 ° -_ <mfrac class="inline"><mrow>_360 °_</mrow><mrow>_${x}_</mrow></mfrac> _= ${round(180-360/x)}°._

---
> id: regular-area

### مساحة المضلعات العادية

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

 هنا يمكنك رؤية [مضلع عادي](gloss:regular-polygon) مع ${n}{n|5|4,12,1} جوهنب. كل جانب له طول [{.pill.green} 1m](target:base) . دعونا نحاول حساب مساحتها!

 أولاً ، يمكننا تقسيم المضلع إلى ${toWord(n)} متطابقة ، [[ متساوي الساقين |متساوي الاضلاع |بزاوية قائمة
]] مثلثات قائمة .

{.reveal(when="blank-0")} نحن نعلم بالفعل [[قاعدة |  الإرتفاع| المنطقة]] هذه المثلثات ، لكننا بحاجة أيضًا إلى [[الارتفاع | الساقين | الوسيطات]] لتكون قادرة على حساب مساحتها. _{span.reveal(when="blank-2")} في المضلعات العادية ، يسمى هذا الارتفاع في بعض الأحيان [{.pill.yellow} تأليه](target:apothem) ._

{.reveal(when="blank-1 blank-2" delay=1000)} لاحظ أن هناك [مثلث قائم الزاوية](target:right-triangle) يتشكل من التأليه ونصف قاعدة مثلث متساوي الساقين. هذا يعني أنه يمكننا استخدام علم المثلثات!

{.reveal(when="blank-1 blank-2" delay=2000)} [{.pill.blue} الزوايا القاعدة](target:base-angle) المثلث متساوي الساقين (دعنا نطلق عليها α) هي [[نصف | نفس الشيء | مرتين]] حجم [الزوايا الداخلية](target:int-angle) للمضلع:

{.text-center.reveal(when="blank-3")}`pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} للعثور على التأليه ، يمكننا استخدام تعريف [[tangent | sine | cosine]] :

{.text-center.reveal(when="blank-4")}`tan pill(α, "blue", "alpha") =
pill("مقابل", "yellow", "apothem") / pill("متجاور", "green", "half-base") =
blank("apothem", "s", "s/2") / blank("s/2", "s", "apothem")`

{.text-center.reveal(when="blank-5 blank-6")}`⇒ pill("تأليه", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} الآن ، مساحة [مثلث متساوي الساقين](target:isosceles-triangle) هي

{.text-center.reveal(when="blank-5 blank-6" delay=2000)}`1/2 "base" × "height"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} يتكون المضلع من ${toWord(n)} من هذه المثلثات متساوي الساقين ، وجميعها لها نفس المساحة. لذلك ، تكون المساحة الإجمالية للمضلع

{.text-center.reveal(when="blank-5 blank-6" delay=4000)}`A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`

:::

---

## رباعيات الأضلاع

> section: quadrilaterals
> id: quadrilaterals

 درسنا في [الدورة السابقة](/course/triangles) العديد من الخصائص المختلفة للمثلثات. الآن دعونا نلقي نظرة على رباعيات الأضلاع.

 يسمى _الرباعي_ [[مربع | مستطيل | رباعي متساوي الأضلاع]] . جميع جوانبها لها نفس الطول ، وجميع زواياها متساوية.

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

{.caption} __المربع__ هو رباعي الأضلاع [بأربعة](target:side) جوانب [متساوية](target:side) [وأربع زوايا متساوية](target:angle) .

:::

---
> id: quadrilaterals-1

 بالنسبة إلى العناصر الرباعية "الأقل انتظامًا" قليلاً ، لدينا خياران. إذا أردنا فقط أن تكون _الزوايا_ متساوية ، نحصل على [__مستطيل__](gloss:rectangle) . إذا أردنا فقط أن تكون _الجوانب_ متساوية ، نحصل على [__معين__](gloss:rhombus) .

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

{.caption} __المستطيل__ هو رباعي الأضلاع مع [أربع زوايا متساوية](target:angle) .

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

{.caption} __المعين__ هو رباعي الأضلاع مع [أربعة](target:side) جوانب [متساوية](target:side) .

:::

---
> id: quadrilaterals-2

 هناك عدد قليل من رباعيات الأضلاع الأخرى ، والتي هي أقل انتظامًا ولكن لا تزال لها خصائص مهمة معينة:

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

{.caption} إذا كان كل من _جوابب_ من طرفي _نقيض_ [موازى](gloss:parallel) وحصلنا على __متوازي الاضلاع
.__

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

{.caption} إذا كان لزوجين من الأضلاع _جوابب_ نفس الطول ، نحصل على __طائرة ورقية__ .

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

{.caption} إذا كان زوج واحد على الأقل من الجانبين المعاكسين متوازيين ، نحصل على __Trapezium__ .

:::

---
> id: quadrilaterals-venn

 يمكن أن تقع الرباعية في العديد من هذه الفئات. يمكننا تصور التسلسل الهرمي لأنواع مختلفة من رباعيات الأضلاع [مخطط فين](gloss:venn-diagram) :

    figure: include svg/venn.svg

 على سبيل المثال ، كل مستطيل هو أيضًا [[متوازي الأضلاع | دالتون | مربع]] ، وكل [[دالتون | شبه منحرف | متوازي الأضلاع]] هو أيضا طائرة ورقية. المعين في [[بعض الأحيان | دائما | أبدا]] مربع ومستطيل [[دائما | بعض الأحيان | أبدا]] شبه منحرف.

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} لتجنب أي غموض ، نستخدم عادةً النوع الأكثر تحديدًا.

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow

 الآن اختر أربع نقاط ، في أي مكان في المربع الرمادي على اليسار. _{span.reveal(when="points")} يمكننا ربط كل منهم لتشكيل رباعي الأضلاع._

{.reveal(when="points" delay=1000)} دعونا نجد نقطة الوسط لكل من الجوانب الأربعة. إذا ربطنا نقاط الوسط ، نحصل على [[رباعي آخر | مثلث | مستطيل]] .

{.reveal(when="blank-0")} جرب تحريك رؤوس الرباعي الخارجية ولاحظ ما يحدث للرأس الصغير. يبدو أنه ليس مجرد _أي_ رباعي ، ولكن دائمًا [[متوازي الأضلاع | شبه منحرف | مستطيل]] !

{.reveal(when="blank-1")} ولكن لماذا هذا هو الحال؟ لماذا يجب أن تكون النتيجة _لأي_ رباعي دائمًا متوازي أضلاع؟ لمساعدتنا على التوضيح ، نحتاج إلى رسم أحد [الأقطار](gloss:polygon-diagonal) الرباعية الأصلية.

{.reveal(when="diagonal")} ينقسم القطر الرباعي إلى [مثلثين](target:triangle) . والآن يمكنك أن ترى أن [جانبين من الجوانب](target:midsegment) الرباعية الداخلية هما في الحقيقة [[أجزاء متوسطة | وسطاء | منقسمة متعامدة]] على هذه المثلثات.

{.reveal(when="blank-2")} في [الدورة السابقة](/course/triangles/properties) أظهرنا أن [الأجزاء المتوسطة](gloss:triangle-midsegment) من المثلث تكون دائمًا موازية لقاعدة. في هذه الحالة ، هذا يعني أن [كلا الجانبين](target:parallel) متوازيان مع القطر - لذلك يجب أن يكونا [[متوازيين]] أيضًا [[| بنفس الطول | عمودي على بعضها البعض]] .

{.reveal(when="blank-3" delay=2000)} يمكننا أن نفعل الشيء نفسه بالضبط مع [القطر الثاني](target:other) من الرباعي ، لإظهار أن كلا الزوجين من الجانبين المتقابلين متوازيان. وهذا كل ما نحتاجه لإثبات أن الرباعي الداخلي [متوازي الأضلاع](gloss:parallelogram) . _{span.qed}_

:::

---
> id: parallelograms

### متوازي الأضلاع

 اتضح أن متوازيات الأضلاع لها خصائص أخرى مثيرة للاهتمام ، بخلاف أن تكون الأضلاع المقابلة موازية. أي العبارات الست التالية صحيحة؟

::: column.grow

    x-picker.list
      .item.md الجوانب المقابلة [متطابقين](gloss:congruent).
      .item(data-error="parall-error-1") دائمًا ما تكون الزوايا الداخلية أقل من 90 °.
      .item.md(data-error="parall-error-2") الخطوط القطرية [ينصفو](gloss:angle-bisector) الزوايا الداخلية.
      .item الزوايا المعاكسة متطابقة.
      .item(data-error="parall-error-3") كلا القطرين متطابقين.
      .item(data-error="parall-error-4") الجوانب المتجاورة لها نفس الطول.
      .item ينقسم القطران إلى بعضهما في المنتصف.

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

 بالطبع ، ببساطة "مراقبة" هذه الخصائص ليست كافية. للتأكد من أنها صحيحة _دائمًا_ ، نحتاج إلى _إثباتها_ :

::: tab

#### الزوايا والجوانب المتقابلة _{span.check(when="diagonal blank-0 blank-1")}_

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

{.task} دعونا نحاول أن نثبت أن الجوانب والزوايا المقابلة في متوازي الأضلاع متطابقة دائمًا.

 ابدأ برسم أحد أقطار متوازي الأضلاع.

{.reveal(when="diagonal")} يخلق القطر أربع زوايا جديدة مع جوانب متوازي الأضلاع. [الزاويتان الأحمرتان والزاويتان الأزرقتان](target:red-angle) هما [زوايا](target:blue-angle) [زوايا بديلة](gloss:alternate-angles) ، لذا يجب أن كل منهما [[تتطابق| متاخم | مكمل]] .

{.reveal(when="blank-0")} الآن إذا نظرنا إلى [المثلثات](target:triangles) التي أنشأها القطر ، نرى أن لديهم زوايا متطابقة ، [وجانب متطابق واحد](target:diagonal) . بواسطة [[ASA | AAS |AA]] حالة تطابق  ، يجب أن يكون كلا المثلثين متطابقين.

{.reveal(when="blank-1")} هذا يعني أن الأجزاء المقابلة الأخرى من المثلثات يجب أن تكون متطابقة أيضًا: على وجه الخصوص ، كلا [الزوجين من الجانبين المعاكسين](target:sides) متطابقين ، وكلا [الزوجين من الزوايا المقابلة](target:angles) متطابقان. _{span.qed}_

:::

{.reveal(when="blank-1")} يتبين أن العكس صحيح أيضًا: إذا كان كلا الزوجين من الجانبين المتقابلين (أو الزوايا) في الرباعي متطابقين ، فيجب أن يكون الرباعي متوازي الأضلاع.

    //- Adjacent angles are supplementary.

::: tab

#### الخطوط القطرية _{span.check(when="diagonal blank-2 blank-3")}_

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

{.task} تثبت الآن أن القطرين في متوازي الأضلاع ينقسمان إلى بعضهما البعض.

 دعونا نفكر في المثلثين الأصفرين اللذين ولّدتهما الأقطار:

 * لقد أثبتنا للتو أن [الجانبين الأخضر](target:side1) متطابقان ، لأنهما ضلعان متوازيان في متوازي الأضلاع. * [الزوايا الحمراء اثنين](target:anglesR) [واثنين من زوايا الزرقاء](target:anglesB) هي متطابقة، لأنهم [[الزوايا البديلة | الزوايا المتقابلة | الزوايا القائمة]] .

{.reveal(when="blank-2")} بواسطة [[ASA | SSS |AAS]] حالة ، يجب أن يكون كلا المثلثين الأصفرين متطابقين أيضًا.

{.reveal(when="blank-3")} الآن يمكننا استخدام حقيقة أن الأجزاء المقابلة من المثلثات المتطابقة متطابقة أيضًا ، لاستنتاج ذلك [`bar(AM)`](target:AM) = [`bar(CM)`](target:CM) و [`bar(BM)`](target:BM) = [`bar(DM)`](target:DM) . بمعنى آخر ، يتقاطع القطران عند نقاط المنتصف. _{span.qed}_

:::

{.reveal(when="blank-3")} كما هو الحال من قبل ، فإن العكس صحيح أيضًا: إذا كان قطري الشكل الرباعي ينقسم أحدهما إلى الآخر ، فإن الرباعي هو متوازي الأضلاع.

:::

---
> id: kites

### الطائرات الورقية

::: column.grow

 أظهرنا أعلاه أن زوجين من [[عكس |قريب]] تتطابق الجوانب [[المجاورة]] للمتوازي الأضلاع. في طائرة ورقية ، يتطابق زوجان من الجوانب _المجاورة_ .

 من الواضح أن اسم _Kite_ يأتي من شكله: فهو يبدو مثل الطائرات الورقية التي يمكنك أن تطير في السماء. ومع ذلك ، من بين جميع العناصر الرباعية الخاصة التي رأيناها حتى الآن ، فإن الطائرة الورقية هي الوحيدة التي يمكن أن تكون [مقعرة](gloss:concave) أيضًا: إذا تم تشكيلها مثل السهام أو السهم:

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

{.caption} طائرة ورقية محدبة

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

{.caption} طائرة ورقية مقعرة تشبه السهم

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

 ربما لاحظت أن جميع الطائرات الورقية [[متماثلة | مشابه]] . _{span.reveal(when="blank-0")} [محور التناظر](gloss:axis-of-symmetry) هو [[أحد الأقطار | أحد الجانبين | جزء متوسط]] ._

{.reveal.r(when="blank-1")} يقسم القطر الطائرة الورقية إلى [مثلثين متطابقين](target:triangle1) . نحن نعلم أنها متطابقة من حالة [SSS](gloss:triangle-sss) : كلا المثلثين لهما [ثلاثة جوانب متطابقة](target:sss) (الأحمر والأخضر والأزرق). _{button.next-step} استمر_

{.reveal.r(when="next-0")} باستخدام [CPOCT](gloss:cpoct) ، فإننا نعلم أن [الزوايا المقابلة](target:angles) يجب أن تكون متطابقة أيضًا. _{button.next-step} استمر_

{.reveal.r(when="next-1")} هذا يعني ، على سبيل المثال ، أن [القطر](target:d1) هو [[منصف | عمودي | متوسط]] [الزوايا](target:vAngle) في نهاياتها. _{button.next-step} استمر_

{.reveal.r(when="next-2")} يمكننا أن نذهب أبعد من ذلك: إذا رسمنا القطر الآخر ، نحصل على [مثلثين آخرين أصغر](target:triangle2) . يجب أن تكون هذه متطابقة أيضًا ، بسبب حالة [SAS](gloss:triangle-sss) : لديهم نفس [الجانبين وزاوية مدرجة](target:sas) . _{button.next-step} استمر_

{.reveal(when="next-3")} هذا يعني أن [الزاوية α](target:alpha) يجب أن تكون هي نفسها [الزاوية β](target:beta) . نظرًا لأنها متجاورة ، يجب أن تكون [الزوايا التكميلية](gloss:supplementary-angles) α و [[90 90]] درجة.

{.reveal(when="blank-3")} وبعبارة أخرى ، فإن أقطار الطائرة الورقية تكون دائمًا [[متعامدة | بالتوازي]] .

:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### منطقة رباعيات الأضلاع

 عند حساب مساحة المثلثات في الدورة السابقة ، استخدمنا خدعة تحويلها إلى [[مستطيل | مربع | خماسي]] . اتضح أنه يمكننا أيضًا القيام بذلك لبعض رباعيات الأضلاع :

::: tab

#### متوازي الاضلاع _{span.check(when="draw-1 blank-1")}_

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

 على اليسار ، حاول رسم مستطيل له نفس مساحة متوازي الأضلاع.

{.reveal(when="draw-1")} يمكنك أن ترى أن [المثلث المفقود](target:triangle-1) على اليسار هو [[نفسه بالضبط | اصغر من | أكبر من]] [المثلث المتداخل](target:triangle-2) على اليمين؟ _{span.reveal(when="blank-1")} وبالتالي فإن مساحة متوازي الأضلاع_

{.text-center.reveal(when="blank-1")} المنطقة = __{.i.m-green} قاعدة__ × __{.i.m-yellow} ارتفاع__

{.reveal(when="blank-1" delay=1000)} _كن حذرًا عند قياس ارتفاع متوازي الأضلاع: عادةً لا يختلف عن أحد الجانبين._

:::

::: tab

#### شبه منحرف _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

 تذكر أن شبه المنحرف رباعي الأضلاع مع زوج واحد من [الجوانب المتوازية](target:bases) . تسمى هذه الجوانب المتوازية __قواعد__ شبه المنحرف.

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

 كما في السابق ، حاول رسم مستطيل له نفس مساحة هذا شبه المنحرف. _{span.reveal(when="draw-2")} هل يمكنك أن ترى كيف تلغي [المثلثات المفقودة والمضافة](target:triangles-3) على اليسار واليمين؟_

{.reveal(when="draw-2" delay=2000)} ال [{.pill.green} ارتفاع](target:t-height) هذا المستطيل هو [[المسافة بين | المتوسط | طول]] [الأضلاع المتوازية](target:bases) لشبه المنحرف.

{.reveal.r(when="blank-2")} ال [{.pill.yellow} عرض](target:t-width) المستطيل هو المسافة بين [[نقاط المنتصف | نقاط النهاية]] على الجانبين غير المتوازيين من شبه المنحرف. _{span.reveal(when="blank-3")} وهذا ما يسمى الجزء __الأوسط__ من شبه المنحرف._ _{button.next-step.reveal(when="blank-3")} استمر_

{.reveal(when="next-0")} كما هو الحال مع [المثلثات](gloss:triangle-midsegment) ، فإن الجزء الأوسط من شبه المنحرف [[موازي لـ | عمودي | بنفس طول]] قاعدتيه. طول الجزء الأوسط هو متوسط أطوال القواعد: `(a+c)/2` .

{.reveal(when="blank-4")} إذا جمعنا كل هذا ، نحصل على معادلة لمساحة شبه المنحرف مع الجانبين المتوازيين [_a_](target:base-2) و [_c_](target:base-1) والارتفاع [_h_](target:t-height) :

{.text-center.reveal(when="blank-4")}`A = h xx ((a+c) / 2)`

:::

::: tab

#### طائرة ورقية _{span.check(when="blank-5")}_

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

 في هذه الطائرة الورقية ، يشكل [القطران](target:diag3) عرضًا وارتفاعًا [ لمستطيل](target:rect4) كبير يحيط بالطائرة الورقية.

 مساحة هذا المستطيل [[مرتين | مثل | ثلاث مرات]] مساحة الطائرة الورقية. _{span.reveal(when="blank-5")} هل يمكنك أن ترى كيف أن كل من [المثلثات الأربعة](target:inside) التي تشكل الطائرة الورقية هي نفسها مثل [الفتهات الأربعة](target:outside) خارجها؟_

{.reveal(when="blank-5")} هذا يعني أن مساحة طائرة ورقية ذات أقطار [{.i.pill.green} d1](target:d31) و [{.i.pill.yellow} d2](target:d32) هو

{.text-center.reveal(when="blank-5")} _المنطقة_ = `1/2` [{.i.pill.green} d1](target:d31) × [{.i.pill.yellow} d2](target:d32) .

:::

::: tab

#### المعين _{span.check(when="blank-6 blank-7")}_

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

 [المعين](gloss:rhombus) هو رباعي الأضلاع له أربعة جوانب متطابقة. قد تتذكر أن كل دالتون هو [[متوازي الأضلاع | مستطيل | مربعة]] - وكذلك [[طائرة ورقية | سداسي الزوايا | مضلع مقعر]] .

{.reveal(when="blank-6 blank-7")} هذا يعني أنه للعثور على مساحة المعين ، يمكننا استخدام إما معادلة مساحة متوازي الأضلاع ، أو معادلة مساحة طائرة ورقية:

{.text-center.reveal(when="blank-6 blank-7")} _المنطقة_ = [{.i.pill.blue} قاعدة](target:base) × [{.i.pill.red} الارتفاع](target:height) = `1/2` [{.i.pill.green} d1](target:d41) × [{.i.pill.yellow} d2](target:d42) .

{.reveal(when="blank-6 blank-7" delay=1000)} _في سياقات مختلفة ، قد يتم إعطاؤك أجزاء مختلفة من المعين (الجوانب والارتفاع والأقطار) ، ويجب عليك اختيار أيهما أكثر ملاءمة._

:::

:::

    //- ### Cyclic quadrilaterals

    //- ### Isosceles Trapeziums
    //-
    //- An isosceles trapezoid is a trapezoid where the non-parallel sides are
    //- congruent. The third trapezoid above is an example of an isosceles
    //- trapezoid. Think of it as an isosceles triangle with the top cut off.
    //- Isosceles trapezoids also have parts that are labeled much like an
    //- isosceles triangle. Both parallel sides are called bases.
    //-
    //- In an isosceles triangle, the two base angles are congruent. This
    //- property holds true for isosceles trapezoids.
    //-
    //- The converse is also true: If a trapezoid has congruent base angles,
    //- then it is an isosceles trapezoid.
    //-
    //- That the diagonals of a rectangle are congruent AND they isect each
    //- other. The diagonals of an isosceles trapezoid are also congruent, but
    //- they do NOT bisect each other.

---

## التغطية بالفسيفساء

> section: tessellations
> id: tessellations

 تظهر [المضلعات](gloss:polygon) في كل مكان في الطبيعة. إنها مفيدة بشكل خاص إذا كنت تريد تجانب مساحة كبيرة ، لأنه يمكنك احتواء المضلعات معًا دون أي فجوات أو تداخلات. تسمى مثل هذه الأنماط [__التغطية بالفسيفساء__](gloss:tessellation) .

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption(dir="ltr")} [[السداسي | الثلاثي |التربيعي]] قرص العسل

::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} جلد ثعبان سينالوان

::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} التركيب الخلوي للأوراق

::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} أعمدة البازلت في جسر العملاق في أيرلندا الشمالية

::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} بشرة أناناس

::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} قذيفة السلحفاة

:::

---
> id: tessellations-1

 نسخ البشر العديد من هذه الأنماط الطبيعية في الفن والهندسة المعمارية والتكنولوجيا - من روما القديمة حتى الوقت الحاضر. وفيما يلي بعض الأمثلة على ذلك:

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption(dir="ltr")} [[مستطيلي | التربيعي |السداسي]] نمط الرصيف

::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} الدفيئة في مشروع عدن في إنجلترا

::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} فسيفساء في قصر الحمراء

::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} [[ثلاثي | سداسي  |مستطيل]] سقف في المتحف البريطاني في لندن

::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} جناح التغطية بالفسيفساء الخلوية في سيدني

::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _دراسة التقسيم المنتظم للطائرة مع الزواحف_ ، MC Escher

:::

    // TODO Carbon Nanotube
    // application: https://en.wikipedia.org/wiki/Carbon_nanotube
    // https://en.wikipedia.org/wiki/File:Types_of_Carbon_Nanotubes.png
    // https://commons.wikimedia.org/wiki/File:FlyingThroughNanotube.png

---
> id: tessellation-drawing
> goals: shapes0 shapes1

 هنا يمكنك إنشاء التغطية الفسيفساء الخاصة بك باستخدام المضلعات العادية. ما عليك سوى سحب الأشكال الجديدة من الشريط الجانبي إلى اللوحة القماشية. ما هي الأشكال الفسيفساء بشكل جيد؟ هل هناك أي أشكال لا تكسو على الإطلاق؟ حاول إنشاء أنماط مثيرة للاهتمام!

    figure: .tessellation
      x-polypad
      .menu
        for s in ['equ-triangle', 'square', 'reg-pentagon', 'reg-hexagon', 'reg-octagon']
          .add(data-shape=s)
      .btn-row
        button.btn إمسح
        button.btn داونلود
      svg.overlay: g.tiles.active
    x-gesture(target=".tessellation .menu" slide="-300, 140")
    .other-students.reveal(when="shapes0")
      h4 أمثلة على التغطية الفسيفساء الطلاب الآخرين
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/tess-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-3.png" width=240 height=160)

---
> id: tessellation-regular

### التغطية بالفسيفساء من المضلعات العادية

 ربما لاحظت أن بعض [المضلعات العادية](gloss:regular-polygon) (مثل [[المربعات | الخماسي]] ) التغطية بالفسيفساء بسهولة جدا ، في حين أن الآخرين (مثل [[الخماسي | مثلثات | السداسيات]] ) لا يبدو التغطية بالفسيفساء على الإطلاق.

---
> id: tessellation-regular-1

 يتعلق هذا بحجم [الزوايا الداخلية](gloss:internal-angle) ، التي تعلمنا حسابها من قبل. عند كل [رأس](gloss:polygon-vertex) في التغطية بالفسيفساء ، تلتقي الزوايا الداخلية للعديد من المضلعات المختلفة. نحتاج إلى كل هذه الزوايا لإضافة [[360]] ° ، وإلا سيكون هناك فجوة أو تداخل.

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")

    include svg/tessellations/triangles.svg

{.caption} مثلثات [[التغطية بالفسيفساء | لا التغطية بالفسيفساء ]] _{span.reveal(when="blank-0")} لأن 6 × 60 ° = 360 °._

::: column(width=160)

    include svg/tessellations/squares.svg

{.caption} المربعات [[التغطية بالفسيفساء  | لا التغطية بالفسيفسء]] _{span.reveal(when="blank-1")} لأن 4 × 90 ° = 360 °._

::: column(width=160)

    include svg/tessellations/pentagons.svg

{.caption} [[لا التغطية بالفسيفس | التغطية بالفسيفسا]] _{span.reveal(when="blank-2")} لأن مضاعفات 108° لا تساوي 360°._

    //- {.caption}3 × 108° = 324° is too small, but 4 × 108° = 432° is too big.

::: column(width=160)

    include svg/tessellations/hexagons.svg

{.caption} السداسي [[التغطية بالفسيفسا | لا التغطية بالفسيفسا]] _{span.reveal(when="blank-3")} لأن 3 × 120 ° = 360 °._

:::

---
> id: tessellation-regular-3

 يمكنك أيضًا التحقق من ذلك ، تمامًا مثل الخماسي ، فإن أي مضلع عادي به 7 جوانب أو أكثر لا يتم تغطية الأرض. هذا يعني أن المضلعات العادية الوحيدة التي تغطي الفسيفساء هي مثلثات ومربعات وسداسيات!

 بالطبع يمكنك الجمع بين أنواع مختلفة من المضلعات العادية في التغطية بالفسيفساء ، بشرط أن تضيف زواياها الداخلية ما يصل إلى 360 درجة:

    x-gallery(slide-width="520" dir="ltr")
      div
        img(src="images/tessellations/regular-1.svg" width=360 height=240)
        p.caption مربعات والمثلثات#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-3.svg" width=360 height=240)
        p.caption مربعات والمثلثات#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-4.svg" width=360 height=240)
        p.caption السداسيات والمثلثات#[br]#[strong.m-red 120°] + #[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-5.svg" width=360 height=240)
        p.caption السداسيات والمثلثات#[br]#[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-2.svg" width=360 height=240)
        p.caption السداسيات والمربعات والمثلثات#[br]#[strong.m-red 120°] + #[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-6.svg" width=360 height=240)
        p.caption المثمنات والمربعات#[br]#[strong.m-green 135°] + #[strong.m-green 135°] + #[strong.m-blue 90°] = 360°
      div
        img(src="images/tessellations/regular-7.svg" width=360 height=240)
        p.caption Dodecagons (12-gons) والمثلثات#[br]#[strong.m-green 150°] + #[strong.m-green 150°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-8.svg" width=360 height=240)
        p.caption Dodecagons, السداسيات والمربعات#[br]#[strong.m-green 150°] + #[strong.m-red 120°] + #[strong.m-blue 90°] = 360°

---
> id: tessellation-triangles

### التغطية بالفسيفساء من مضلعات غير العادية

 يمكننا أيضًا تجربة صنع الفسيفساء من [المضلعات غير العادية](gloss:irregular-polygon) - طالما أننا حريصون عند تدويرها وترتيبها.

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

 اتضح أنه لا يمكنك ترصيع ليس فقط مثلثات متساوية الأضلاع ، ولكن _أي مثلث_ ! حاول تحريك [الرؤوس](target:vertex) في هذا الرسم البياني.

 مجموع الزوايا الداخلية في المثلث هو [[180]] °. إذا استخدمنا كل زاوية [[مرتين |  مرة واحدة | ثلاث مرات]] في كل قمة في التغطية بالفسيفساء ، نحصل على 360 درجة:

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

 والمثير للدهشة أن _أي فسيفساء رباعي_ أيضًا فسيفساء! مجموع الزاوية الداخلية هو [[360]] درجة ، لذلك إذا استخدمنا كل زاوية [[مرة واحدة | مرتين | ثلاث مرات]] في كل قمة في التغطية بالفسيفساء ، نحصل على 360 درجة.

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

 البنتاغون أصعب قليلاً. لقد رأينا بالفعل أن الخماسي _المنتظم_ [[لا التغطية بالفسيفس | التغطية بالفسيفساء]] ، ولكن ماذا عن تلك غير العادية؟

---
> id: tessellation-pentagons-1

::: column(width=220)

    include svg/tessellations/pentagons-1.svg

::: column(width=220)

    include svg/tessellations/pentagons-2.svg

::: column(width=220)

    include svg/tessellations/pentagons-3.svg

:::

 فيما يلي ثلاثة أمثلة مختلفة للفسيفساء مع الخماسي. إنها ليست _منتظمة_ ، لكنها مضلعات صالحة تمامًا من 5 جوانب.

 حتى الآن ، وجد علماء الرياضيات 15 نوعًا مختلفًا من الفسيفساء مع خماسي (محدب) - تم اكتشاف أحدثها في عام 2015. لا أحد يعرف ما إذا كان هناك أي أنواع أخرى ، أو إذا كان هؤلاء الخمسة عشر هم الوحيدون ...

---
> id: escher

### التغطية بالفسيفساء في الفن

 كانت التغطية بالفسيفساء أداة وإلهام للعديد من الفنانين والمهندسين المعماريين والمصمم - أشهرها الفنان الهولندي [موريتس كورنيليس إيشر](bio:escher) . يحتوي عمل ايشر على مخلوقات وأنماط ومناظر طبيعية غريبة ومتغيرة:

    .row
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-1.jpg" width=220 height=220)
        p.caption (1938) “السماء والمياه 1”
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-2.jpg" width=220 height=220)
        p.caption "سحلية" (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-3.jpg" width=220 height=220)
        p.caption “سحلية ، سمكة ، خفاش” (1952)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-4.jpg" width=220 height=220)
        p.caption "فراشة" (1948)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-5.jpg" width=220 height=220)
        p.caption “سمكتان” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-6.jpg" width=220 height=220)
        p.caption “الأصداف ونجم البحر” (1941)

 غالبًا ما تبدو هذه الأعمال الفنية ممتعة وبلا مجهود ، ولكن المبادئ الرياضية الأساسية هي نفسها كما كانت من قبل: الزوايا والتناوب والترجمات والمضلعات. إذا لم تكن الرياضيات صحيحة ، فإن التغطية بالفسيفساء لن تعمل!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “التحول II by M. C. Escher (1940)

---
> id: penrose

### تبليط بنروز

 جميع الفسيفساء التي رأيناها حتى الآن تشترك في شيء واحد: أنها __دورية__ . هذا يعني أنها تتكون من نمط منتظم يتكرر مرارًا وتكرارًا. يمكن أن تستمر إلى الأبد في جميع الاتجاهات وسوف تبدو متشابهة في كل مكان.

 في السبعينيات ، اكتشف عالم الرياضيات والفيزيائي البريطاني [روجر بنروز](bio:penrose) الفسيفساء _غير الدورية_ - لا تزال مستمرة إلى ما لا نهاية في جميع الاتجاهات ، لكنها _لا_ تبدو متشابهة تمامًا. تسمى هذه __المربعات بنروز__ ، وتحتاج فقط إلى أنواع مختلفة من المضلعات لإنشاء واحد:

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption حرك شريط التمرير للكشف عن البنية الأساسية لهذا الموزاييك. لاحظ كيف لديك نفس الأنماط على مستويات مختلفة: الخماسي الصفراء الصغيرة والنجوم الزرقاء والمعيني البرتقالي و "السفن" الخضراء تظهر بحجمها الأصلي ، في #[strong.blue حجم أكبر قليلاً] و #[strong.red حجم أكبر]. هذا #[em التشابه الذاتي] يمكن استخدامها لإثبات أن بلاط بنروز هذا غير دوري.

---
> id: penrose-1

 كان بنروز يستكشف التغطية بالفسيفساء لمجرد التسلية ، ولكن اتضح أن البنية الداخلية لبعض المواد الحقيقية (مثل الألومنيوم) تتبع نمطًا مشابهًا. تم استخدام النمط حتى على ورق التواليت ، لأن الشركات المصنعة لاحظت أنه يمكن لف النمط غير الدوري دون أي انتفاخات.

---

## متعدد الوجوه

> section: polyhedra
> id: polyhedra

 حتى الآن نظرنا للتو إلى ما يمكننا القيام به مع المضلعات في عالم مسطح ثنائي الأبعاد. [__متعدد الوجوه__](gloss:polyhedron) هو كائن ثلاثي الأبعاد يتكون من مضلعات. وهنا بعض الأمثلة:

::: column.padded-thin(width=220)

    x-polyhedron#poly1(size=220 shape="PentagonalPrism")

::: column(width=220)

    x-polyhedron(size=220 shape="Hebesphenorotunda")

::: column(width=220)

    x-polyhedron(size=220 shape="StellatedDodecahedron")

:::

 لا يمكن أن تحتوي متعدد الوجوه على أسطح منحنية - على سبيل المثال ، الكرات والأسطوانات ليست متعددة الوجوه.

 تسمى المضلعات التي يتكون منها متعدد الوجوه [__وجوهها__](gloss:polyhedron-face) . تسمى الخطوط التي يتصل فيها وجهان [__بالحواف__](gloss:polyhedron-edge) ، وتسمى الزوايا التي تلتقي فيها الحواف [__الرؤوس__](gloss:polyhedron-vertex) .

---
> id: euler

 تأتي الأشكال المتعددة الوجوه بأشكال وأحجام مختلفة - من المكعبات البسيطة أو الأهرامات ذات الوجوه القليلة ، إلى الأشياء المعقدة مثل النجم أعلاه ، الذي يحتوي على 60 وجهًا مثلثًا. ومع ذلك ، اتضح أن _جميع_ أشكال الوجوه المتعددة لها خاصية واحدة مشتركة:

::: .theorem

 __صيغة أويلر متعددة الوجوه__
في كل شكل متعدد الوجوه ، فإن عدد الوجوه ( _F_ ) بالإضافة إلى عدد الرؤوس ( _V_ ) يزيد بمقدار اثنين عن عدد الحواف ( _E_ ). بعبارات أخرى،

{.text-center}`F + V = E + 2`

:::

 على سبيل المثال ، إذا كان متعدد الوجوه يحتوي على 12 وجهًا و 18 رؤوس ، فإننا نعلم أنه يجب أن يكون له [[28]] حواف.

---
> id: euler-1

 تم اكتشاف هذه المعادلة من قبل عالم الرياضيات السويسري الشهير [ليونارد أويلر](bio:euler) . إنه صحيح لأي متعدد السطوح ، طالما أنه لا يحتوي على أي ثقوب.

 إذا جربت العديد من الأشكال المتعددة ، مثل تلك المذكورة أعلاه ، فستجد أن صيغة أويلر تعمل دائمًا. ستتعلم في [دورة لاحقة](/course/graph-theory/planar-graphs) كيفية إثبات ذلك فعليًا رياضيًا.

---

## شبكات ومقاطع عرضية

> section: nets-cross-sections
> sectionStatus: dev

 لكى يفعل

    //إن عالمنا بأكمله ثلاثي الأبعاد - ولكن غالبًا ما يكون من الأسهل رسم أو تصور كائنات مسطحة ثنائية الأبعاد. وهناك عدة طرق ?/مختلفة لعرض متعدد الوجوه ثلاثي الأبعاد بطريقة ثنائية الأبعاد.

    //- x-folding(shape="Tetrahedron" size=400)
    //- x-folding(shape="Cube" size=400)
    //- x-folding(shape="Octahedron" size=400)
    //- x-folding(shape="Dodecahedron" size=400)
    //- x-folding(shape="Icosahedron" size=400)

    //أي من هذه الشبكات تجعل المكعب يطابق الشبكة مع الكائن https://github.com/polymake/matchthenet شبكات الرسم

    //وصف المقطع العرضي الذي شكله تقاطع المستوى والصلب.

    //المقطع العرضي هو تقاطع مستوى مع صلب. هناك طريقة أخرى لتمثيل شكل ثلاثي الأبعاد في مستوى ثنائي الأبعاد وهي استخدام شبكة. //الشبكة عبارة عن تمثيل مسطح غير مكشوف لجوانب الشكل ثلاثي الأبعاد.

    //قم بتدوير مكعب لعمل مقطع عرضي سداسي

---

## المنشور والأهرامات

> section: prisms-pyramids
> sectionStatus: dev

 لكى يفعل

---

## تحجيم الأشكال والمواد الصلبة

> section: scaling
> sectionStatus: dev

 لكى يفعل

---

## المواد الصلبة الأفلاطونية

> section: platonic
> id: platonic

 في بداية هذه الدورة ، قمنا بتعريف [المصلع العادي ](gloss:regular-polygon) أنها "متماثلة" بشكل خاص ، حيث تكون جميع الجوانب والزوايا متشابهة. يمكننا القيام بشيء مماثل للعديد من الوجوه.

 في _متعدد الوجوه العادي ، تكون_ جميع [الوجوه](gloss:polyhedron-face) من نفس النوع من المضلع المنتظم ، ويقابل نفس العدد من الوجوه في كل [رأس](gloss:polyhedron-vertex) . تسمى متعدد الوجوه مع هاتين الخاصيتين [__بالجوامد الأفلاطونية الصلبة__](gloss:platonic-solid) ، التي سميت باسم الفيلسوف اليوناني [أفلاطون](bio:plato) .

    //- The pyramid on the right of not a Platonic solid. It consists of two
    //- different kinds of polygons (squares and triangles), and it has [[4]]
    //- faces meeting at the top vertex, but only [[3]] at the bottom vertices.

 إذن كيف تبدو المواد الصلبة الأفلاطونية - وكم منها موجودة؟ لإنشاء شكل ثلاثي الأبعاد ، نحتاج إلى [[3]] وجوه على الأقل لمقابلتها في كل قمة. لنبدأ بشكل منتظم بأصغر مضلع منتظم: مثلثات متساوية الأضلاع:

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow

 إذا قمنا بإنشاء متعدد السطوح حيث تلتقي ثلاثة [مثلثات متساوية الأضلاع](gloss:equilateral-triangle) في كل رأس ، نحصل على الشكل على اليسار. ويسمى __Tetrahedron__ وله [[4]] وجوه. _{.reveal(when="blank-0")} ("Tetra" تعني "أربعة" في اليونانية)._

:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow

 إذا اجتمعت أربعة مثلثات متساوية الأضلاع في كل رأس ، نحصل على مادة صخر أفلاطونية مختلفة. يطلق عليه __Octahedron__ وله [[8]] وجوه. _{.reveal(when="blank-0")} ("Octa" تعني "ثمانية" في اليونانية. تمامًا مثل "Octagon" تعني شكلًا ذا 8 جوانب ، "Octahedron" تعني مادة صلبة ذات 8 وجوه.)_

:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow

 إذا اجتمعت [[خمسة]] مثلثات في كل رأس ، نحصل على __Icosahedron__ . لها [[20 وجه]] . _{.reveal(when="blank-1")} ("إيكوزا" تعني "عشرين" باللغة اليونانية)._

:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow

 إذا اجتمعت [[ستة]] مثلثات في كل رأس ، يحدث شيء مختلف: نحصل ببساطة على [[التغطية بالفسيفساء | رباعي الأضلاع | Icosahedron آخر]] ، _{span.reveal(when="blank-1")} بدلاً من متعدد الوجوه ثلاثي الأبعاد._

:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow

 كما أن سبعة مثلثات أو أكثر في كل رأس لا تنتج أيضًا العديد من الأشكال المتعددة الوجوه: لا توجد مساحة كافية حول الرأس ، لتناسب العديد من المثلثات.

:::

 هذا يعني أننا وجدنا [[ثلاث]] مواد صلبة أفلاطونية تتكون من مثلثات. دعنا ننتقل إلى المضلع المنتظم التالي: المربعات.

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow

 إذا اجتمعت [[ثلاثة]] مربعات في كل رأس ، نحصل على __المكعب__ . تماما مثل النرد ، لديه [[6]] وجوه. _{span.reveal(when="blank-1")} يُطلق على المكعب أحيانًا اسم _Hexahedron_ ، بعد الكلمة اليونانية "hexa" لكلمة "six"._

:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow

 إذا اجتمعت [[أربعة]] مربعات في كل رأس ، نحصل على [[فسيفساء أخرى | رباعي الأسطح | مكعب آخر]] . _{span.reveal(when="blank-1")} وكما كان الحال من قبل ، لن تعمل خمسة مربعات أو أكثر._

:::

---
> id: platonic-dodecahedron

 بعد ذلك ، دعنا نجرب الخماسي المنتظم:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow

 إذا __اجتمعت__ [[ثلاث]] خماسي في كل رأس ، نحصل على __Dodecahedron__ . لها [[12 وجه]] . _{.reveal(when="blank-1")} ("Dodeca" تعني "اثنا عشر" باليونانية.)_

:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow

 كما كان من قبل ، [[لا تعمل]] أربعة خماسيات أو أكثر [[لا تستطيع| من الممكن]] لأنه لا توجد مساحة كافية.

:::

---
> id: platonic-hexagons

 المضلع المنتظم التالي الذي يجب تجربته هو السداسيات:

::: column(width=120 parent="padded-thin")

::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow

 إذا اجتمعت ثلاث سداسيات في كل قمة ، نحصل على الفور على [[التغطية بالفسيفساء | متعدد الوجوه | سداسي]] . _{span.reveal(when="blank-0")} نظرًا لعدم وجود مساحة لأكثر من ثلاثة ، يبدو أنه لا توجد مواد صلبة أفلاطونية تتكون من سداسيات._

:::

---
> id: platonic-final

 يحدث نفس الشيء أيضًا لجميع المضلعات المنتظمة ذات أكثر من ستة جوانب. إنهم لا يغطون الشمع ، وبالتأكيد لا نحصل على أي مضلعات ثلاثية الأبعاد.

 هذا يعني أن هناك [[خمسة]] مواد صلبة أفلاطونية فقط! دعنا نلقي نظرة عليها جميعًا معًا:

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")

 __رباعي السطوح__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

 _{span.dual} [[4]] وجوه_
_{span.dual} [[4]] رؤوس_
_{span.dual} [[6]] حواف_

::: column.grow.text-center(width=120)

 __مكعب__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

 _{span.dual(target="dual1")} [[6]] وجوه_
_{span.dual(target="dual1")} [[8]] رؤوس_
_{span.dual} [[12]] حواف_

::: column.grow.text-center(width=120)

 __المجسم الثماني__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

 _{span.dual(target="dual1")} [[8]] وجوه_
_{span.dual(target="dual1")} [[6]] رؤوس_
_{span.dual} [[12]] حواف_

::: column.grow.text-center(width=120)

 __الاثني عشري__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

 _{span.dual(target="dual2")} [[12]] وجوه_
_{span.dual(target="dual2")} 20 رؤوس_
_{span.dual} 30 حواف_

::: column.grow.text-center(width=120)

 __Icosahedron__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

 _{span.dual(target="dual2")} [[20]] وجوه_
_{span.dual(target="dual2")} 12 رؤوس_
_{span.dual} 30 حواف_

:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} لاحظ كيف يتم [[تبديل]] عدد الوجوه والرؤوس [[حولها | الشيء نفسه]] بالنسبة [للمكعبات والثماني السطوح](target:dual1) ، وكذلك [الاثني عشر والسطوح المتساقطة](target:dual2) ، بينما [[يبقى]] عدد الحواف [[كما هو | مختلفة]] . تسمى هذه الأزواج من المواد الصلبة الأفلاطونية بمواد صلبة [__مزدوجة__](gloss:polyhedron-dual) .

---
> id: platonic-dual

 يمكننا تحويل متعدد الوجوه إلى ثنائيته ، عن طريق "استبدال" كل وجه برأس ، وكل رأس بوجه. تظهر هذه الرسوم المتحركة كيف:

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

 إن رباعي الأسطح ثنائي مع نفسه. نظرًا لأنه يحتوي على نفس العدد من الوجوه والرؤوس ، فإن تبديلها لن يغير أي شيء.

---
> id: platonic-elements

 يعتقد [أفلاطون](bio:plato) أن جميع المواد في الكون تتكون من أربعة عناصر: الهواء والأرض والماء والنار. كان يعتقد أن كل عنصر يتوافق مع واحدة من المواد الصلبة الأفلاطونية ، في حين أن العنصر الخامس سيمثل الكون ككل. نعلم اليوم أن هناك أكثر من 100 عنصر مختلف يتكون من ذرات كروية ، وليس متعدد الوجوه.

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption صور من كتاب يوهانس كيبلر “Harmonices Mundi” (1619)

---

### المواد الصلبة الأرخميدية

> id: archimedean

 المواد الصلبة الأفلاطونية هي متعددة الوجوه بشكل خاص ، ولكن هناك عدد لا يحصى من الآخرين.

 على سبيل المثال ، يجب أن تتكون [__المواد الصلبة الأرخميدية__](gloss:archimedean-solid) من [مضلعات عادية](gloss:regular-polygon) ، ولكن يمكنك استخدام أنواع مختلفة متعددة. تم تسميتهم على اسم عالم رياضيات يوناني آخر ، [أرخميدس من سيراكيوز](bio:archimedes) ، وهناك 13 منهم:

::: column(width=170 parent="padded-thin")

    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __Truncated Tetrahedron__
8 وجوه و 12 رؤوس و 18 حواف

::: column(width=170)

    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __Cuboctahedron__
14 وجهًا ، 12 رؤوس ، 24 حافة

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __Truncated Cube__
14 وجهًا ، 24 رؤوس ، 36 حافة

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __Truncated Octahedron__
14 وجهًا ، 24 رؤوس ، 36 حافة

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __Rhombicuboctahedron__
26 وجهًا ، 24 رؤوس ، 48 حافة

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Truncated Cuboctahedron__
26 وجهًا ، 48 رؤوس ، 72 حافة

::: column(width=170)

    x-polyhedron(size=170 shape="SnubCube")

{.caption} __Snub Cube__
38 وجهًا ، 24 رؤوس ، 60 حوافًا

::: column(width=170)

    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Icosidodecahedron__
32 وجهًا ، 30 رؤوس ، 60 حوافًا

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __Truncated Dodecahedron__
32 وجهًا ، 60 رؤوس ، 90 حافة

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __Truncated Icosahedron__
32 وجهًا ، 60 رؤوس ، 90 حافة

::: column(width=170)

    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Rhombicosidodecahedron__
62 وجهًا ، 60 رؤوس ، 120 حافة

::: column(width=170)

    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __Truncated Icosidodecahedron__
62 وجهًا ، 120 رؤوس ، 180 حافة

::: column(width=170)

    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __Snub Dodecahedron__
92 وجهًا ، 60 رؤوس ، 150 حافة

:::

    // Prisms and antiprisms, whose symmetry groups are the dihedral groups, are
    // generally not considered to be Archimedean solids, despite meeting the
    // above definition.

---
> id: polyhedra-applications

### التطبيقات

 كان أفلاطون مخطئًا في الاعتقاد بأن جميع العناصر تتكون من المواد الصلبة الأفلاطونية. لكن للعديد من الوجوه العادية العديد من الخصائص الخاصة التي تجعلها تظهر في مكان آخر في الطبيعة - ويمكننا نسخ هذه الخصائص في العلوم والهندسة.

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Radiolaria هيكل عظمي

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Icosahedral فايروس

::: column.grow

 تتشكل العديد من __الفيروسات__ __والبكتيريا__ __والكائنات الحية__ الصغيرة الأخرى مثل [Icosahedron](gloss:icosahedron) . على سبيل المثال ، يجب أن تحصر الفيروسات موادها الوراثية داخل غلاف العديد من وحدات البروتين المتطابقة. يعد الأسطح المجهرية هي الطريقة الأكثر فاعلية للقيام بذلك ، لأنها تتكون من بعض العناصر المنتظمة ولكنها تشبه شكل الكرة تقريبًا.

:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Buckyball الجزيئات

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption مونتريال Biosphere

::: column.grow

 تتشكل العديد من __الجزيئات__ مثل الأشكال المتعددة الوجوه العادية. المثال الأكثر شهرة هو `C_60` والتي تتكون من 60 ذرة كربون مرتبة على شكل [Trucated Icosahedron](gloss:truncated-icosahedron) .

 تم اكتشافه في عام 1985 عندما بحث العلماء في الغبار بين النجوم. أطلقوا عليه اسم "Buckyball" (أو Buckminster fullerene) على اسم المهندس المعماري [بكمنستر فولر](bio:fuller) ، المشهور ببناء مباني متشابهة المظهر.

:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Fluorite octahedron

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Pyrite مكعب

::: column.grow

 معظم __البلورات__ لها ذراتها مرتبة في شبكة منتظمة تتكون من [رباعي السطوح
](gloss:tetrahedron) أو [المكعبات](gloss:cube) أو [ثماني السطوح](gloss:octahedron) . عندما تتشقق أو تتحطم ، يمكنك رؤية هذه الأشكال على نطاق أكبر.

:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption إطارات مثمنة

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption متحف اللوفر في باريس

::: column.grow

 رباعي السطوح و أو ثماني السطوح صلبة ومستقرة بشكل لا يصدق ، مما يجعلها مفيدة للغاية في __البناء__ . _إطارات الفضاء_ هي هياكل متعددة الأضلاع يمكنها دعم الأسقف الكبيرة والجسور الثقيلة.

:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption كرة القدم

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption الزهر المضلع

::: column.grow

 كما تستخدم المواد الصلبة الأفلاطونية لإنشاء __زهر الطاولة__ . بسبب تناظرها ، فإن كل جانب لديه [احتمالية](gloss:probability) الهبوط مواجهة - لذلك النرد عادلة.

 من المحتمل أن يكون [Icosahedron](gloss:truncated-icosahedron) الأكثر شهرة في العالم: إنه شكل كرة القدم.

:::
