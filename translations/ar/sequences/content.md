# التسلسلات والأنماط

## مقدمة

> section: introduction
> id: intro
> trailer: u2vwpDVj5rU
> color: "#F97E08"
> level: Intermediate
> next: fractals

يهتم العديد من المهن التي تستخدم الرياضيات بجانب معين - _إيجاد الأنماط_ ، والقدرة على التنبؤ بالمستقبل. وفيما يلي بعض الأمثلة على ذلك:

::: column(width=160 parent="padded-thin")

    x-img(src="images/crime.jpg" width=160 height=160 alt="Police Officers")

::: column(width=400)

في العقد الماضي ، بدأت __أقسام الشرطة__ حول العالم في الاعتماد بشكل أكبر على الرياضيات. يمكن أن تستخدم الخوارزميات الخاصة بيانات الجرائم السابقة للتنبؤ بموعد ومكان وقوع الجرائم في المستقبل. على سبيل المثال ، ساعد نظام _PredPol_ (وهو اختصار لـ "الشرطة التنبؤية") على تقليل معدل الجريمة في أجزاء من لوس أنجلوس بنسبة %12!

::: column(width=160)

    x-img(src="images/volcanoes.jpg" width=160 height=160 alt="Volcano")

::: column(width=400)

اتضح أن __زلازل__ تتبع أنماطًا مماثلة للجرائم. مثلما قد تؤدي جريمة واحدة إلى الانتقام ، قد يؤدي الزلزال إلى حدوث هزات ارتدادية. في الرياضيات ، يُطلق على هذا "العمليات المثيرة الذاتية" ، وهناك معادلات تساعد في التنبؤ بموعد حدوث المرحلة التالية.

::: column(width=160)

    x-img(src="images/finance.jpg" width=160 height=160 alt="Stock Market Charts")

::: column(width=400)

ينظر المصرفيون أيضًا إلى البيانات التاريخية لأسعار الأسهم وأسعار الفائدة وأسعار صرف العملات لتقدير كيفية تغير __الأسواق المالية__ في المستقبل. القدرة على التنبؤ بما إذا كانت قيمة السهم سترتفع أو تنخفض يمكن أن تكون مربحة للغاية!

:::

يستخدم علماء الرياضيات المحترفون خوارزميات معقدة للغاية للعثور على جميع هذه الأنماط وتحليلها ، لكننا سنبدأ بشيء أكثر بساطة.

---
> id: simple-patterns

### تسلسلات بسيطة

في الرياضيات ، يعد تسلسل [__تسلسل__](gloss:sequence) سلسلة من الأرقام (أو كائنات أخرى) تتبع عادة نمطًا معينًا. العناصر الفردية في تسلسل تسمى [__مصطلحات__](gloss:sequence-term).

فيما يلي بعض الأمثلة عن التسلسلات. هل يمكنك العثور على أنماطهم وحساب المصطلحين التاليين؟

{.text-center.s-orange.with-arrows(dir="ltr")} _{.n}3_, _{.n}6*{span.arrow}*_,
_{.n}9*{span.arrow(hidden)}+3*_, _{.n}12*{span.arrow(hidden)}+3*_,
_{.n}15*{span.arrow(hidden)}+3*_, _{.n}[[18]]*{span.arrow(hidden)}+3*_
_{.n}[[21]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-0 blank-1")} نمط: أضف 3 إلي الرقم السابق للحصول علي الرقم التالي_

{.text-center.s-teal.with-arrows(dir="ltr")} _{.n}4_, _{.n}10*{span.arrow(hidden)}+6*_,
_{.n}16*{span.arrow(hidden)}+6*_, _{.n}22*{span.arrow(hidden)}+6*_,
_{.n}28*{span.arrow(hidden)}+6*_, _{.n}[[34]]*{span.arrow(hidden)}+6*_,
_{.n}[[40]]*{span.arrow(hidden)}+6*_, …
_{span.pattern.reveal(when="blank-2 blank-3")} نمط: أضف 6 إلي الرقم السابق للحصول علي الرقم التالي_

{.text-center.s-purple.with-arrows(dir="ltr")} _{.n}3_, _{.n}4*{span.arrow(hidden)}+1*_,
_{.n}7*{span.arrow(hidden)}+3*_, _{.n}8*{span.arrow(hidden)}+1*_,
_{.n}11*{span.arrow(hidden)}+3*_, _{.n}[[12]]*{span.arrow(hidden)}+1*_,
_{.n}[[15]]*{span.arrow(hidden)}+3*_, …
_{span.pattern.reveal(when="blank-4 blank-5")} نمط: بالتناوب أضف 1 و أضف 3 إليالرقم السابق للحصول على الرقم التالي_

{.text-center.s-lime.with-arrows(dir="ltr")} _{.n}1_, _{.n}2*{span.arrow(hidden)}×2*_,
_{.n}4*{span.arrow(hidden)}×2*_, _{.n}8*{span.arrow(hidden)}×2*_,
_{.n}16*{span.arrow(hidden)}×2*_, _{.n}[[32]]*{span.arrow(hidden)}×2*_,
_{.n}[[64]]*{span.arrow(hidden)}×2*_, …
_{span.pattern.reveal(when="blank-6 blank-7")} نمط: أضرب الرقم السابق ب 2 للحصول على الرقم التالي_

---
> id: simple-patterns-1

النقاط (...) قي النهايةتعني ببساطة أن التساسل يمكن أن يستمر إلى الأبد. عند الإشارة إلى تسلسلات مثل هذه في الرياضيات، فإننا غالبا ما نمثل كل مصطلح [بمتغير](gloss:variable) جاص:

    p.text-center.s-orange(dir="ltr")
      for i in [1, 2, 3, 4, 5, 6, 7]
        span.math.n
          msub
            mi x
            mn= i
        | ,&nbsp;


يُطلق على الرقم الصغير بعد _x_ اسم __منخفض__ ، ويشير إلى موضع المصطلح في التسلسل. هذا يعني أنه يمكننا تمثيل الحد _n_ في التسلسل بـ [[`x_n`|`x_i`|`x_2`]].

---
> id: triangles

### أرقام المثلثة و المربعة

لا يجب أن تكون التسلسلات في الرياضيات أرقامًا دائمًا. فيما يلي تسلسل يتكون من أشكال هندسية - مثلثات ذات حجم متزايد:

::: column(width=24 parent="padded-thin")

{.text-center} __1__

    include svg/triangle-1.svg

::: column(width=52)

{.text-center} __3__

    include svg/triangle-2.svg

::: column(width=80)

{.text-center} __6__

    include svg/triangle-3.svg

::: column(width=108)

{.text-center.b} [[10]]

    include svg/triangle-4.svg

::: column(width=136)

{.text-center.b} [[15]]

    include svg/triangle-5.svg

::: column(width=164)

{.text-center.b} [[21]]

    include svg/triangle-6.svg

:::

---
> id: triangle-1

في كل خطوة ، نقوم بإضافة صف آخر إلى المثلث السابق. كما يزداد طول هذه الصفوف الجديدة بمقدار واحد في كل مرة. هل يمكنك رؤية النمط؟

{.text-center.s-orange.with-arrows(dir="ltr")} _{.n}1_, _{.n}3*{span.arrow}+2*_,
_{.n}6*{span.arrow}+3*_, _{.n}10*{span.arrow}+4*_,
_{.n}15*{span.arrow}+5*_, _{.n}21*{span.arrow}+6*_
_{.n}[[28]]*{span.arrow.reveal(when="blank-0")}+7*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-1")}+8*_, …

---
> id: recursive

يمكننا أيضًا وصف هذا النمط باستخدام [صيغة](gloss:formula) خاصة:

    p.text-center.s-orange(dir="ltr")
      span.n.md `x_n`
      | &nbsp;=&nbsp;
      span.n.md `x_(n-1)`
      | &nbsp;+&nbsp;
      em#t3 n

للحصول على رقم المثلث _n_ ، نأخذ رقم المثلث [[السابق|الأول|التالي]] السابق ونضيف _n_. على سبيل المثال ، إذا كانت _n_ = ${n}{n|5|2,20,1} ، تصبح الصيغة <msub><mi>x</mi><mn>${n}</mn> </msub> = <msub> <mi > x </mi> <mn> ${n-1} </mn> </msub> + ${n}.

---
> id: recursive-1

الصيغة التي تعبر عن `x_n` كدالة للمصطلحات السابقة في التسلسل تسمى [__صيغة متكررة__](gloss:sequence-recursive). طالما أنك تعرف [[الحد الأول|الحد الأخير|الحد الثاني]] في التسلسل ، يمكنك حساب جميع المصطلحات التالية.

---
> id: squares

    hr

تسلسل آخر يتكون من أشكال هندسية هو __الأرقام المربعة__. يتكون كل مصطلح من المربعات الكبيرة المتزايدة:

::: column(width=24 parent="padded-thin squares")

{.text-center} __1__

    include svg/square-1.svg

::: column(width=50)

{.text-center} __4__

    include svg/square-2.svg

::: column(width=76)

{.text-center} __9__

    include svg/square-3.svg

::: column(width=102)

{.text-center.b} [[16]]

    include svg/square-4.svg

::: column(width=128)

{.text-center.b} [[25]]

    include svg/square-5.svg

::: column(width=154)

{.text-center.b} [[36]]

    include svg/square-6.svg

:::

---
> id: square-1

بالنسبة لأرقام المثلث ، وجدنا صيغة تعاودية تخبرك بالفترة _التالية_ من التسلسل كدالة لمصطلحاتها  السابقة. بالنسبة للأرقام المربعة ، يمكننا أن نفعل ما هو أفضل: صيغة تخبرك بالمصطلح _n_ مباشرة ، دون الحاجة أولاً إلى حساب جميع المصطلحات السابقة:

{.text-center.s-purple(dir="ltr")} _{.n} `x_n`_ = _{x-equation(solution="n^2")}_

---
> id: explicit

وهذا ما يسمى [__صيغة صريحة__](gloss:sequence-explicit). يمكننا استخدامه ، على سبيل المثال ، لحساب أن الرقم المربع الثالث عشر هو [[169]] ، دون إيجاد أول 12 رقمًا مربعًا.

---
> id: definitions

    hr

دعونا نلخص كل التعريفات التي رأيناها حتى الآن:

::: .theorem

[__التسلسل__](gloss:sequence) عبارة عن قائمة بالأرقام أو الأشكال الهندسية أو الكائنات الأخرى التي تتبع نمطًا معينًا. العناصر الفردية في التسلسل تسمى [__مصطلحات__](gloss:sequence-term) ، وتمثلها متغيرات مثل `x_n`.

تخبرك [__الصيغة العودية__](gloss:sequence-recursive) للتسلسل بقيمة الحد _n_ كدالة [[للمصطلحات السابقة|الحد الأول]]. عليك أيضًا تحديد المصطلح الأول (المصطلحات).

تخبرك [__صيغة صريحة__](gloss:sequence-explicit) للتسلسل بقيمة الحد _n_ كدالة [[فقط _n_|الحد السابق]] ، دون الرجوع إلى مصطلحات أخرى في التسلسل.

:::

---
> id: action-sequence

### تصوير تسلسل الحركة

في الأقسام التالية ، ستتعرف على العديد من التسلسلات الرياضية المختلفة والأنماط المدهشة والتطبيقات غير المتوقعة.

أولاً ، مع ذلك ، فلنلقِ نظرة على شيء مختلف تمامًا: __تصوير تسلسل الحركة__. يلتقط المصور العديد من اللقطات بتتابع سريع ، ثم يدمجها في صورة واحدة:

    figure: x-img(src="images/action-1.jpg" width=640 height=320 alt="Skiing Jump")

هل يمكنك أن ترى كيف يشكل المتزلج سلسلة؟ هذا النمط ليس إضافة أو ضرب ، بل هو تحويل هندسي [تحويل](gloss:rigid-transformation). بين خطوات متتالية ، يتم ترجمة المتزلج و [[تم تدويرة|ينعكس|تمدد]].

---
> id: action-sequence-1

في ما يلي بعض الأمثلة على تصوير تسلسل الحركة للتمتع الخاص بك:

::: column(width=320 parent="padded-thin")

    x-img(src="images/action-2.jpg" width=320 height=160 credit="© Ray Demski" lightbox alt="Jumping Volleyball Player")

::: column(width=320)

    x-img(src="images/action-3.jpg" width=320 height=160 credit="© Ray Demski" lightbox alt="Wind Surfing")

::: column(width=320)

    x-img(src="images/action-4.jpg" width=320 height=160 credit="© Marcio Abe" lightbox alt="Snowboard Jump")

::: column(width=320)

    x-img(src="images/action-5.jpg" width=320 height=160 credit="© Jason Halayko" lightbox alt="Mountain Bike Jump")

::: column(width=320)

    x-img(src="images/action-6.jpg" width=320 height=160 credit="© Jason Halayko" lightbox alt="Mountain Bike Jump")

::: column(width=320)

    x-img(src="images/action-7.jpg" width=320 height=160 lightbox alt="Kite Surfing")

:::

---

## تسلسلات حسابسة و هندسية

> section: arithmetic-geometric
> id: halley

::: column.grow

في عام 1682 ، لاحظ الفلكي [إدموند هالي](bio:halley) ظاهرة غير عادية: جسم أبيض متوهج وذيل طويل يتحرك عبر سماء الليل. كان __مذنبًا__ ، صخرة جليدية صغيرة تحلق عبر الفضاء ، بينما تترك وراءها دربًا من الغبار والجليد.

تذكر هالي أن علماء الفلك الآخرين لاحظوا مذنبات مشابهة في وقت أبكر بكثير: واحدة عام 1530 وأخرى عام 1606. لاحظ أن الفجوة بين ملاحظتين متتاليتين هي نفسها في كلتا الحالتين: [[76]] سنة.

::: column(width=320)

    x-img(width=320 height=256 src="images/halley.jpg" alt="Halley’s Comet")
    p.caption صورة مذنب هالي#[br]اتخذت في عام 1986 قي جزيرة الفصح

:::

---
> id: halley-1

وخلص هالي إلى أن جميع الملاحظات الثلاث كانت في الواقع من نفس المذنب - الذي يُطلق عليه الآن _مذنب هالي_. تدور حول الشمس وتمرر الأرض كل 76 عامًا تقريبًا. كما توقع متى سيكون المذنب مرئيًا بعد ذلك:

{.text-center.s-orange.s-large.with-arrows(dir="ltr")} _{span.n}1530_,
_{span.n}1606*{span.arrow}+76*_, _{.n}1682*{span.arrow}+76*_,
_{.n}1758*{span.arrow}+76*_, _{.n}[[1834]]*{span.arrow}+76*_,
_{.n}[[1910]]*{span.arrow}+76*_, _{.n}[[1986]]*{span.arrow}+76*_, …

---
> id: halley-2

في الواقع ، الفاصل الزمني ليس دائمًا _بالضبط_ 76 عامًا: يمكن أن يختلف باختلاف سنة أو سنتين ، حيث تتقاطع مدار المذنب مع الكواكب الأخرى. نعلم اليوم أن مذنب هالي لاحظه علماء الفلك القدماء في وقت مبكر من 240 قبل الميلاد!

    figure
      .row
        x-img(src="images/halley-1.jpg" width=160 height=180)
        x-img(src="images/halley-2.jpg" width=173 height=180 lightbox)
        x-img(src="images/halley-3.jpg" width=200 height=180 lightbox)
        x-img(src="images/halley-4.jpg" width=130 height=180 lightbox)
      p.caption قطع مذنب ّالي على مر الزمن: لوح بابلي (164 قبل الميلاد نسيج ((1070, مجلة علمية (1910, وختم سوفيتي (1986) ).

---
> id: ball

تبحث مجموعة مختلفة من العلماء في سلوك كرة التنس المرتدة. أسقطوا الكرة من ارتفاع 10 أمتار وقاسوا موقعها بمرور الوقت. مع كل ارتداد ، تفقد الكرة بعض ارتفاعها الأصلي:

    x-coordinate-system(padding="12 12 24 120" width=640 height=320 x-axis="0,7,1" label-suffix="s,m" axis-names="time,height")
      .tennis-ball
      .tennis-ball
    x-slider(steps=400 speed=0.5)

---
> id: ball-1
> goals: reveals

لاحظ العلماء أن الكرة تفقد %20 من ارتفاعها بعد كل ارتداد. بعبارة أخرى ، يبلغ الحد الأقصى لارتفاع كل ارتداد %80 من الارتداد السابق. هذا سمح لهم بالتنبؤ بارتفاع كل ارتداد التالية:

{.text-center.s-teal.s-large.with-arrows(dir="ltr")} _{span.n}10_,
_{span.n}8*{span.arrow}×0.8*_, _{.n}[[6.4]]*{span.arrow}×0.8*_,
_{span.n}[[5.12]]*{span.arrow}×0.8*_,
_{span.n.reveal}4.096*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}3.277*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.621*{span.arrow}×0.8*_*{span.reveal},*
_{span.n.reveal}2.097*{span.arrow}×0.8*_*{span.reveal}, …*

---
> id: arithmetic-geometric

### التعريفات

|إذا قارنت هاتين المشكلتين ، فقد تلاحظ أن هناك العديد من أوجه التشابه: تسلسل مذنب هالي له نفس  [[الفرق|المنتج|النسبة]] بين الفترات المتتالية ، في حين أن تسلسل ارتداد الكرة له نفس نسبة [[النسبة|الفرق|المنتج]] بين الفصول المتتالية.

---
> id: arithmetic-geometric-1

التسلسلات مع هذه الخصائص لها اسم خاص:

::: column.grow

::: .theorem.s-red

    p.text-center: include svg/comet.svg

[__التسلسل الحسابي__](gloss:arithmetic-sequence) له فرق ثابت بين الفترات المتتالية.

يتم إضافة أو طرح نفس الرقم لكل مصطلح ، لإنتاج المصطلح التالي.

:::

::: column.grow

::: .theorem.s-green

    p.text-center: include svg/ball.svg
[___التسلسل الهندسي___](gloss:geometric-sequence) له نسبة ثابتة بين الفترات المتتالية.

يتم ضرب أو قسمة كل مصطلح على نفس العدد لإنتاج التالي.

:::

:::

---
> id: arithmetic-geometric-select

فيما يلي بعض التسلسلات المختلفة. هل يمكنك تحديد القيم الحسابية أو الهندسية أو لا ، وما هي قيم _{.b.m-red} d_ و _{.b.m-green} r_?

::: column(width=330 parent="ag-select")

{.text-center.s-grey.s-small} _{span.n} 2_ ، _{span.n} 4_ ، _{span.n} 8_ ، _{span.n} 16_ ، _{span.n} 32_ ، _{span.n} 64_ ، ...

::: column(width=320)

هي [[هندسية|حسابي|لا]] _{span.reveal(when="blank-0")} ، بنسبة [[2]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 2_ ، _{span.n} 5_ ، _{span.n} 8_ ، _{span.n} 11_ ، _{span.n} 14_ ، _{span.n} 17_ ، ...

::: column(width=320)

هو [[حسابي|هندسية|لا]] _{span.reveal(when="blank-2")} ، مع فرق [[3]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 17_ ، _{span.n} 13_ ، _{span.n} 9_ ، _{span.n} 5_ ، _{span.n} 1_ ، _{span.n} –3_ ، ...

::: column(width=320)

هو [[حسابي|هندسية|لا]] _{span.reveal(when="blank-4")} ، مع فرق [[-4]]._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 2_ ، _{span.n} 4_ ، _{span.n} 7_ ، _{span.n} 11_ ، _{span.n} 16_ ، _{span.n} 22_ ، ...

::: column(width=320)

هو [[لا|حسابي|هندسية]] _{span.reveal(when="blank-6")}._

::: column(width=330)

{.text-center.s-grey.s-small} _{span.n} 40_ ، _{span.n} 20_ ، _{span.n} 10_ ، _{span.n} 5_ ، _{span.n} 2.5_ ، _{span.n} 1.25_ ، ...

::: column(width=320)

هي [[هندسية|حسابي|لا]] _{span.reveal(when="blank-7")} ، بنسبة [[0.5]]._

:::

---
> id: arithmetic-geometric-graph

لتحديد تسلسل حسابي أو هندسي ، يجب أن نعرف ليس فقط الاختلاف أو النسبة المشتركة ، ولكن أيضًا القيمة الأولية (تسمى `a`). هنا يمكنك إنشاء تسلسلاتك الخاصة ورسم قيمها على رسم بياني ، بتغيير قيم `a` و _د_ و _ص_. هل تستطيع ايجاد اي انماط؟

::: column.ag-chart(width=320)

#### {.m-red} التسلسل الحسابي

{.text-center(dir="ltr")} `a` = ${a}{a|2|-10,10,0.2} ، `d` = ${d}{d|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small(dir="ltr")} _{span.n}${arithmetic(a,d,0)}_,
_{span.n}${arithmetic(a,d,1)}_, _{span.n}${arithmetic(a,d,2)}_,
_{span.n}${arithmetic(a,d,3)}_, _{span.n}${arithmetic(a,d,4)}_,
_{span.n}${arithmetic(a,d,5)}_, …

    x-coordinate-system(padding="12 12 24 40" width=320 height=240)
    x-gesture(target="#arithmetic-geometric-graph x-var" slide="100,0")

::: column.ag-chart.s-green(width=320)

#### {.m-green} التسلسل الهندسي

{.text-center(dir="ltr")} `a` = ${b}{b|2|-10,10,0.2} ، `r` = ${r}{r|2|-10,10,0.2}

    hr

{.text-center.s-red.s-small(dir="ltr")} _{span.n}${geometric(b,r,0)}_,
_{span.n}${geometric(b,r,1)}_, _{span.n}${geometric(b,r,2)}_,
_{span.n}${geometric(b,r,3)}_, _{span.n}${geometric(b,r,4)}_,
_{span.n}${geometric(b,r,5)}_, …

    x-coordinate-system.green(padding="12 12 24 40" width=320 height=240)

:::

{.reveal(when="var-0 var-1 var-2 var-3")} لاحظ كيف تبدو جميع __{.m-red} التسلسلات الحسابية__ متشابهة جدًا: إذا كان الفرق إيجابيًا ، فإنها [[تزداد|تخفيض]] بثبات ، وإذا كان الفرق سلبيًا ، فإنه[بثبات|تزيد]].

{.reveal(when="blank-0 blank-1")} من ناحية أخرى ، يمكن أن تتصرف التسلسلات الهندسية بشكل مختلف تمامًا استنادًا إلى قيم `a` و _r_:

::: column.frame.f-blue.text-center.reveal(when="blank-0 blank-1" animation="pop" width=220 parent="padded-thin")

إذا [`r > 1`](action:set(2,2)) ، فإن الشروط [[ستزداد بسرعة|تنخفض بسرعة|تقترب إلي الصفر]] _{span.reveal(when="blank-2")}_ حتى اللانهاية. يقول علماء الرياضيات أن التسلسل [تتباعد](gloss:sequence-divergence)

::: column.frame.f-blue.text-center.reveal(when="blank-2" animation="pop" delay=200 width=220)

إذا كان [_r_ بين –1 و 1](action:set(10,0.6)) ، فستقترب البنود [[دائمًا من 0|ارخفاض إلي الانهاية السلبية|اصغر]] _{span.reveal(when="blank-3")}. نقول أن التسلسل [__يتقارب__](gloss:sequence-convergence)._

::: column.frame.f-blue.text-center.reveal(when="blank-3" animation="pop" delay=200 width=220)

إذا كانت [`r < -1`](action:set(3,-1.4)) ، فستتبادل المصطلحات بين الإيجابية والسلبية ، بينما تصبح [[قيمتها المطلقة|معكوس|فرق]] أكبر.

:::

{.reveal(when="blank-4 blank-5")} سوف تتعلم المزيد حول التقارب والاختلاف في [القسم الأخير](/course/sequences/convergence) من هذه الدورة.

---
> id: arithmetic-geometric-recursive

### صيغ تعاودية وصريحة

في القسم السابق ، علمت أن [__صيغة تعاودية__](gloss:sequence-recursive) تخبرك بقيمة كل مصطلح كدالة للمصطلحات السابقة. فيما يلي الصيغ العودية للتسلسلات الحسابية والهندسية:

::: column.grow

{.text-center(dir="ltr")} `x_n =` [[`x_(n-1) + d`|`x_(n-1) × d`|`x_d + n`]]

::: column.grow

{.text-center(dir="ltr")} `x_n =` [[`x_(n-1) × r`|`x_(n-1) - r`|`x_n - r + n`]]

:::

---
> id: arithmetic-geometric-explicit

تتمثل إحدى مشكلات الصيغ العودية في أنه للعثور على الحد 100 ، على سبيل المثال ، يتعين علينا أولاً حساب المصطلحات الـ 99 السابقة - وقد يستغرق ذلك وقتًا طويلاً. بدلاً من ذلك ، يمكننا محاولة العثور على [__صيغة صريحة__](gloss:sequence-explicit) ، تخبرنا بقيمة الحد _n_ مباشرة.

::: column.grow

بالنسبة إلى __{.m-red} التسلسلات الحسابية__ ، يتعين علينا إضافة _يوم_ في كل خطوة:

{.ag-equation(dir="ltr")} `x_1 =` `a`

{.ag-equation(dir="ltr")} `x_2 =` `a + d`

{.ag-equation(dir="ltr")} `x_3 =` `a + d + d`

{.ag-equation(dir="ltr")} `x_4 =` _{x-equation(solution="a+d+d+d")}_

{.ag-equation.reveal(when="eqn-0" dir="ltr")} `x_5 =` _{x-equation(solution="a+d+d+d+d")}_

{.reveal(when="eqn-1")} في الفصل _رقم_ ، نضيف [[`n-1`|`n`|`n+1`]] نسخًا من _يوم_ ، لذا فإن الصيغة العامة هي

{.ag-equation.reveal(when="blank-0")} `x_n = a + d × ( n-1 )`

::: column.grow

من أجل __{.m-green} تسلسل هندسي__ ، علينا ضرب _ص_ في كل خطوة:

{.ag-equation(dir="ltr")} `x_1 = a`

{.ag-equation(dir="ltr")} `x_2 = a × r`

{.ag-equation(dir="ltr")} `x_3 = a × r × r`

{.ag-equation(dir="ltr")} `x_4 =` _{x-equation(solution="a×r×r×r")}_

{.ag-equation.reveal(when="eqn-2" dir="ltr")} `x_5 =` _{x-equation(solution="a×r×r×r×r")}_

{.reveal(when="eqn-3")} في الحد _رقم_ ، نضرب [[`n-1`|`n`|`n+1`]] نسخًا من _ص_ ، لذا فإن الصيغة العامة

{.ag-equation.reveal(when="blank-1")} `x_n = a × r^(n-1)`

:::

---
> id: arithmetic-geometric-explicit-1

في ما يلي ملخص لجميع التعريفات والصيغ التي رأيتها حتى الآن:

::: column.grow

::: .theorem.s-red

__{.m-red} تسلسل حسابي__ له المصطلح الأول `a` والفرق المشترك `d` بين المصطلحات المتتالية.

{.text-center} __الصيغة العودية__: `x_n = x_(n-1) + d`

{.text-center} __صيغة صريحة__: `x_n = a + d × (n-1)`

:::

::: column.grow

::: .theorem.s-green

__{.m-green} تسلسل هندسي__ له الحد الأول `a` والنسبة الشائعة `r` بين الفترات المتتالية.

{.text-center} __الصيغة العودية__: `x_n = x_(n-1) × r`

{.text-center} __صيغة صريحة__: `x_n = a × r^(n-1)`

:::

:::

الآن دعونا نلقي نظرة على بعض الأمثلة حيث يمكننا استخدام كل هذا!

---
> id: pay-it-forward
> goals: video

### ادفعه للأمام

في ما يلي مقطع قصير من فيلم _Pay it Forward_ ، حيث يشرح تريفور البالغ من العمر 12 عامًا فكرته عن جعل العالم مكانًا أفضل:

    figure
      x-video(src="https://static.mathigon.org/videos/pay-it-forward.mp4" poster="images/pay-it-forward.jpg" width=640 height=360 controls audio)
      .caption استخراج من “Pay It Forward” (2000), © Warner Bros. Entertainment

---
> id: pay-it-forward-1

إن جوهر فكرة تريفور هو أنه إذا "دفعها الجميع إلى الأمام" ، يمكن لشخص واحد أن يكون له تأثير كبير على العالم:

    figure: img(src="images/pay-it-forward.png" width=700 height=220)

لاحظ كيف يشكل عدد الأشخاص في كل خطوة [[تسلسلًا هندسيًا|تسلسلا حسابيا|رقم مثلث]] ، _{span.reveal(when="blank-0")} بنسبة مشتركة [[3]]:_

{.text-center.s-orange.with-arrows.reveal(when="blank-1" dir="ltr")} _{span.n}1_,
_{span.n}3*{span.arrow}×3*_, _{span.n}9*{span.arrow}×3*_,
_{span.n}[[27]]*{span.arrow}×3*_, _{span.n}[[81]]*{span.arrow}×3*_,
_{span.n}[[243]]*{span.arrow}×3*_, …

---
> id: pay-it-forward-2

باستخدام [الصيغة الصريحة](gloss:sequence-explicit) للتسلسلات الهندسية ، يمكننا معرفة عدد الأشخاص الجدد المتأثرين في أي خطوة:

{.text-center(dir="ltr")} `x_n` = _{x-equation(solution="3^(n-1)")}_

---
> id: pay-it-forward-3

يزداد عدد الأشخاص بسرعة لا تصدق. في الخطوة العاشرة ، ستصل إلى 19،683 جديدًا ، وبعد 22 خطوة ، كنت ستصل إلى عدد أكبر من الأشخاص الذين هم على قيد الحياة حاليًا على الأرض.

هذا التسلسل من الأرقام له اسم خاص: __قوى 3__. كما ترى ، كل مصطلح هو في الواقع مجرد قوة [مختلفة](gloss:powers) من 3:

{.text-center.s-orange(dir="ltr")} _{span.n}`3^0`_, _{span.n}`3^1`_, _{span.n}`3^2`_,
_{span.n}`3^3`_, _{span.n}`3^4`_, _{span.n}`3^5`_, …

---
> id: millionaire

### من يريد أن يكون مليونيرا؟

{.todo} قريبًا!

---
> id: chessboard

### مشكلة رقعة الشطرنج

{.todo} قريبًا!

---

## أرقام توضيحية

> section: figurate
> id: figurate

إن اسم [التسلسل الهندسي](gloss:geometric-sequence) مربك للغاية ، لأنه لا علاقة له بالهندسة. في الواقع ، تم تطوير الاسم قبل مئات السنين ، عندما فكر علماء الرياضيات في _الضرب_ و _الجذور التربيعية_ بطريقة هندسية أكثر.

ومع ذلك ، هناك العديد من التسلسلات الأخرى التي تستند إلى أشكال هندسية معينة - بعضها شاهدته بالفعل في [المقدمة](/course/sequences/introduction). غالبًا ما تسمى هذه التسلسلات [__أرقامًا رمزية__](gloss:figurate-numbers) ، وسنلقي نظرة فاحصة على بعضها في هذا القسم.

---
> id: triangle-numbers

### أرقام المثلثة

يتم إنشاء __أرقام المثلثة__ من خلال إنشاء مثلثات ذات حجم أكبر تدريجيًا:

::: column(width=24 parent="padded-thin")

{.text-center} __1__

    include svg/triangle-1.svg

::: column(width=52)

{.text-center} __3__

    include svg/triangle-2.svg

::: column(width=80)

{.text-center} __6__

    include svg/triangle-3.svg

::: column(width=108)

{.text-center} __10__

    include svg/triangle-4.svg

::: column(width=136)

{.text-center} __15__

    include svg/triangle-5.svg

::: column(width=164)

{.text-center} __21__

    include svg/triangle-6.svg

:::

لقد رأيت بالفعل الصيغة العودية لأرقام المثلثة: `x_n =` [[`x_(n-1) + n`|`n^2 - 1`|`2 × x_(n-1) - 1`]].

---
> id: billiard-pool

ليس من قبيل الصدفة أن يكون هناك دائمًا 10 دبابيس عند البولينج أو 15 كرة عند لعب البلياردو: كلاهما أرقام مثلث!

::: column(width=320)

    x-img(src="images/bowling.jpg" width=320 height=240)

::: column(width=320)

    x-img(src="images/billiard.jpg" width=320 height=240)

:::

---
> id: triangle-proof

لسوء الحظ ، فإن الصيغة العودية ليست مفيدة جدًا إذا أردنا العثور على رقم المثلث 100 أو 5000 ، دون حساب جميع الأرقام السابقة أولاً. ولكن ، كما فعلنا بالتسلسلات الحسابية والهندسية ، يمكننا محاولة إيجاد صيغة صريحة لأرقام المثلث.

{.todo} يتوفر قريبًا: إثبات متحرك لصيغة رقم المثلث

---
> id: triangle-sums

يبدو أن أرقام المثلث تظهر في كل مكان في الرياضيات ، وستراها مرة أخرى طوال هذه الدورة. إحدى الحقائق المثيرة للاهتمام بشكل خاص هي أنه يمكن كتابة _أي_ عدد صحيح كمجموع ثلاثة أرقام مثلث على الأكثر:

::: column(width=140 parent="triangle-sum")

{.text-center} ${n}{n|42|1,100,1}

    svg.t-sum(width=140 height=140)
    x-gesture(target="#triangle-sums x-var" slide="100,0")

::: column(width=40)

{.text-center} =

::: column(width=140)

{.text-center} __{.t-sum}__

    svg.t-sum.red(width=140 height=140)

::: column(width=40)

{.text-center} +

::: column(width=140)

{.text-center} __{.t-sum}__

    svg.t-sum.blue(width=140 height=140)

::: column(width=40)

{.text-center} +

::: column(width=140)

{.text-center} __{.t-sum}__

    svg.t-sum.green(width=140 height=140)

:::

{.reveal(when="slide")} حقيقة أن هذا يعمل مع _جميع_ الأعداد الصحيحة تم إثباته لأول مرة في عام 1796 من قبل عالم الرياضيات الألماني [كارل فريدريش جاوس](bio:gauss) - في سن 19!

---
> id: triangle-investigate

::: .box.f-blue

#### Problem Solving

ما هو مجموع أول 100 [عدد صحيح](gloss:integer)؟ وبعبارة أخرى ، ما هي قيمة

{.text-center} `1 + 2 + 3 + 4 + 5 + … + 97 + 98 + 99 + 100`؟

بدلاً من إضافة كل شيء يدويًا ، هل يمكنك استخدام [أرقام المثلثة](gloss:triangle-numbers) لمساعدتك؟ ماذا عن مجموع أول 1000 عدد صحيح موجب؟

:::

---
> id: square-numbers

### أرقام مربعة ومضلعة

تسلسل آخر يعتمد على الأشكال الهندسية هو __أرقام المربعة__:

{.text-center.s-purple.with-arrows(dir="ltr")} _{.n}1_,
_{.n}4*{span.arrow.reveal(when="blank-4")}+3*_,
_{.n}9*{span.arrow.reveal(when="blank-4")}+5*_,
_{.n}16*{span.arrow.reveal(when="blank-4")}+7*_,
_{.n}[[25]]*{span.arrow.reveal(when="blank-4")}+9*_,
_{.n}[[36]]*{span.arrow.reveal(when="blank-4")}+11*_,
_{.n}[[49]]*{span.arrow.reveal(when="blank-4")}+13*_,
_{.n}[[64]]*{span.arrow.reveal(when="blank-4")}+15*_, …

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} يمكنك حساب الأرقام هي هذا التسلسل عن طريق تربيع كل رقم صحيح (`1^2` ، `2^2` ، `3^2` ،…) ، ولكن اتضح أن هناك نمطًا آخر: الاختلافات بين الأرقام المربعة المتتالية هي [[أرقام فردية|أرقام مثلثة|أعدد صحيحة]] بترتيب متزايد!

---
> id: square-numbers-1

::: column.grow

يصبح سبب هذا النمط واضحًا إذا رسمنا مربعًا بالفعل. تضيف كل خطوة صفًا وعمودًا واحدًا. يبدأ حجم هذه "الزوايا" عند 1 ويزداد بمقدار 2 في كل خطوة - وبالتالي تشكيل تسلسل الأرقام الفردية.

وهذا يعني أيضًا أن الرقم المربع _n_ هو مجرد مجموع أول _رقم_ فردي! على سبيل المثال ، مجموع الأرقام الفردية الستة الأولى هو

{.text-center(dir="ltr")} `1 + 3 + 5 + 7 + 9 + 11 =` [[36]].

::: column(width=240)

    include svg/square-steps.svg
    x-slider(steps=6 initial=6 no-play)

:::

---
> id: square-numbers-2

بالإضافة إلى ذلك ، كل رقم مربع هو أيضًا مجموع أرقم مثلثة متتاليين. على سبيل المثال ، ${n×n}{n|4|1,20,1} = ${n×(n+1)/2} + ${n×(n-1)/2}. هل يمكنك أن ترى كيف يمكننا تقسيم كل مربع على طول قطره إلى مثلثين؟

---
> id: polygon-numbers

::: column(width=300)

    svg(width=300 height=260)
    .text-center #[msub #[mi x]#[mn]]#[mo(value="=") =]#[mn]
    x-slider(steps=11 initial=3 no-play)

::: column.grow

بعد المثلث والأرقام المربعة ، يمكننا الاستمرار في استخدام [مضلعات أكبر](gloss:polygon). تسمى تسلسلات الأرقام الناتجة __أرقام متعددة الأضلاع__.

على سبيل المثال ، إذا استخدمنا المضلعات ذات أضلاع ${k}{k|5|3,10,1} ، نحصل على تسلسل __${polygonName(k)} أرقام__.

هل يمكنك العثور على صيغ تعاودية وصريحة للرقم متعدد الأضلاع _n_ الذي له جوانب _k_؟ وهل تلاحظ أي أنماط أخرى مثيرة للاهتمام للمضلعات الكبيرة؟

:::

---
> id: tetrahedral

### رباعي السطوح والأرقام المكعبة

بالطبع ، ليس علينا أيضًا أن نقتصر على الأشكال والأنماط ثنائية الأبعاد. يمكننا تكديس الكرات لتشكيل أهرامات صغيرة ، تمامًا مثل كيفية تكديس البرتقال في السوبر ماركت:

::: column(width=64 parent="padded-thin")

{.text-center} __1__

    x-tetrahedron(size=160 layers=1 style="margin: 0 -48px")

::: column(width=88)

{.text-center} __[[4]]__

    x-tetrahedron(size=160 layers=2 style="margin: 0 -36px")

::: column(width=112)

{.text-center} __[[10]]__

    x-tetrahedron(size=160 layers=3 style="margin: 0 -24px")

::: column(width=136)

{.text-center} __20__

    x-tetrahedron(size=160 layers=4 style="margin: 0 -12px")

::: column(width=160)

{.text-center} __35__

    x-tetrahedron(size=160 layers=5)

:::

---
> id: tetrahedral-1

غالبًا ما يطلق علماء الرياضيات هذه الأهرامات [__tetrahedra__](gloss:tetrahedron) ، والتسلسل الناتج [__أرقام رباعي السطوح__](gloss:tetrahedral-numbers).

{.todo} قريبًا: المزيد عن أرقام رباعي السطوح ، وأرقام مكعبة ، و 12 يومًا من عيد الميلاد.

---

## التسلسل كوظائف

> section: functions
> sectionStatus: dev

{.todo} قريبًا

---

## أرقام فيبوناتشي

> section: fibonacci
> id: rabbits

تخيل أنك تلقيت زوجًا من الأرانب الصغيرة ، ذكرا وأنثى. هم أرانب خاصة جدًا ، لأنهم لا يموتون أبدًا ، والأنثى تلد زوجًا جديدًا من الأرانب مرة واحدة كل شهر بالضبط (دائمًا زوج آخر من الذكور والإناث).

    x-slideshow
      .stage.rabbits(slot="stage")
        .rabbits-wrap.s-orange.s-small(dir="ltr")
          svg(width=760 height=456 viewBox="0 0 760 456")
            line(y1=51  x2=760 y2=51)
            line(y1=130 x2=760 y2=130)
            line(y1=209 x2=760 y2=209)
            line(y1=287 x2=760 y2=287)
            line(y1=366 x2=760 y2=366)
            path(d="M84,91c223.68,0,405,7,405,45")
            path(d="M84,170c124.82,0,226,14,226,45")
            path(d="M84,248c74.56,0,135,20.15,135,45")
            path(d="M534,248c74.56,0,135,20.15,135,45")
            path(d="M84,327a45,45,0,0,1,45,45")
            path(d="M354,327a45,45,0,0,1,45,45")
            path(d="M534,327a45,45,0,0,1,45,45")
            polygon(points="489 150 481 130 489 135 497 130 489 150")
            polygon(points="310 229 302 209 310 214 318 209 310 229")
            polygon(points="219 307 211 287 219 292 227 287 219 307")
            polygon(points="669 307 661 287 669 292 677 287 669 307")
            polygon(points="129 386 121 366 129 371 137 366 129 386")
            polygon(points="399 386 391 366 399 371 407 366 399 386")
            polygon(points="579 386 571 366 579 371 587 366 579 386")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="left: 2%; top: 0%; width: 7%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 13%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 30%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 61%; top: 34%; width: 7%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 47%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 37%; top: 51%; width: 7%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 47%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 64%")
          img.rabbit(src="images/rabbits-4.svg" width=85 height=75 style="left: 25%; top: 68%; width: 7%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 35%; top: 64%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 64%")
          img.rabbit(src="images/rabbits-5.svg" width=85 height=75 style="left: 85%; top: 68%; width: 7%")

          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="top: 81%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 13%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-4.svg" width=85 height=75 style="left: 23%; top: 81%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 35%; top: 81%")
          img.rabbit(src="images/rabbits-1.svg" width=85 height=75 style="left: 49%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-2.svg" width=85 height=75 style="left: 59%; top: 81%")
          img.rabbit(src="images/rabbits-3.svg" width=85 height=75 style="left: 73%; top: 85%; width: 7%")
          img.rabbit(src="images/rabbits-5.svg" width=85 height=75 style="left: 83%; top: 81%")

          .n(style="top: 0%") 1
          .n(style="top: 15%") 1
          .n(style="top: 32%") 2
          .n(style="top: 49%") 3
          .n(style="top: 66%") 5
          .n(style="top: 84%") 8

      .legend(slot="legend") قي الشهر الأول، تكونالأرانب صغيرة جدا و لا يمكنها فعل الكثير - لكنها تنمو بسرعة كبيرة.
      .legend(slot="legend") بعد شهر واحد، تنمو الأرانب و يمكن أن تبدأ في التزاوج ...
      .legend(slot="legend") ... وبعد شهر آخر، سوف يلدون أول زوج من أولادهم. لديك الأن زوجان من الأرانب.
      .legend(slot="legend") في السهر التالي، سينجب زوج الأرانب زوجا آخر. في غضون ذمك، كبر الزوج الأول من الأطفال. لديك الأن ثلاثة أزواج في المجموع.
      .legend(slot="legend") في الشهر الخامس، سينجب زوج الأرانب الأصلي زوجا جديدا. فى الوقت نفسه، أصبح أول زوج من أطفااهما أكبر سنا بما يكفي لأنجاب الأحفاد. لديك الآن خمسة أزواج من الأرانب.
      .legend(slot="legend") في الشهر السادس، هناك ثلاثة أزواج آخرينيلدون: الزوج الأصلي، بالأضافة إلى أول زوجين أو أطفال.

---
> id: rabbits-1

{.r} في الشهر التالي ، سيكون لديك 13 زوجًا من الأرانب: 8 أزواج من الشهر السابق ، بالإضافة إلى 5 مجموعات جديدة من الأطفال. هل يمكنك اكتشاف نمط في هذا التسلسل؟ _{button.next-step} متابعة_

---
> id: rabbits-2

عدد الأرانب في شهر معين هو [[مجموع الرقمين السابقين|ضعف الرقم السابق]]. _{span.reveal(when="blank-0")} بمعنى آخر ، يجب عليك إضافة المصطلحين _السابقين_ في التسلسل للحصول على المصطلح التالي. يبدأ التسلسل بقطعتين ، و [الصيغة العودية](gloss:sequence-recursive) هي

{.text-center.s-orange.reveal(when="blank-0" dir="ltr")} *{span.n}`x_n`* =
*{span.n}`x_(n-1)`* + *{span.n}`x_(n-2)`*

---
> id: rabbits-3

هل يمكنك حساب عدد الأرانب بعد بضعة أشهر أخرى؟

{.text-center.s-orange(dir="ltr")} _{.n}1_, _{.n}1_, _{.n}2_, _{.n}3_, _{.n}5_, _{.n}8_,
_{.n}[[13]]_, _{.n}[[21]]_, _{.n}[[34]]_, _{.n}[[55]]_, _{.n}[[89]]_,
_{.n}[[144]]_, …

{.reveal(when="blank-5")} بعد 12 شهرًا ، سيكون لديك 144 زوجًا من الأرانب!

    figure.reveal(when="blank-5")
      x-img(src="images/rabbits.jpg" width=600 height=230)

---
> id: fibonacci

يُطلق على تسلسل الأرقام هذا [__تسلسل فيبوناتشي__](gloss:fibonacci-numbers) ، الذي يحمل اسم عالم الرياضيات الإيطالي [ليوناردو فيبوناتشي](bio:fibonacci).

::: column.grow

عندما ولد فيبوناتشي عام 1175 ، كان معظم الناس في أوروبا لا يزالون يستخدمون [نظام الأرقام الرومانية](gloss:roman-numerals) للأرقام (مثل IVX أو MCMLIV). كان والد فيبوناتشي تاجرًا ، وسافروا معًا إلى شمال إفريقيا والشرق الأوسط. هناك تعلم فيبوناتشي أولاً [نظام الأرقام العربية](gloss:arabic-numerals).

عندما عاد إلى إيطاليا ، كتب فيبوناتشي كتابًا بعنوان _Liber Abaci_ (اللاتينية "كتاب الحسابات") ، حيث قدم لأول مرة الأرقام العربية الجديدة للتجار الأوروبيين. لقد حققوا نجاحًا فوريًا - وما زلنا نستخدمهم اليوم.

::: column(width=300)

    x-img(src="images/fibonacci.jpg" width=300 height=300)
    .caption صورة ليوناردو فيبوناتشي

:::

في إحدى صفحات كتابه ، حقق أيضًا في أنماط تكاثر الأرانب - ولهذا السبب تم تسمية أرقام فيبوناتشي باسمه.

    figure
      x-img(src="images/liber-abaci.jpg" width=440 height=290 lightbox)
      p.caption صفحات من فيبوناتشي #[em Liber Abaci]

---
> id: spirals

بالطبع ، أرقام فيبوناتشي ليست هي الطريقة التي يملأ بها الأرانب _في الواقع_ في الحياة الحقيقية. لا تمتلك الأرانب ذكورًا واحدًا ونسلًا واحدًا كل شهر ، ولم نحسب سبب وفاة الأرانب في نهاية المطاف.

ولكن اتضح أن هناك العديد من الأماكن الأخرى في الطبيعة حيث تظهر أرقام فيبوناتشي: على سبيل المثال اللوالب في النباتات. هل يمكنك حساب عدد اللوالب الموجودة في كل اتجاه؟

::: column(width=320)

    x-select.segmented
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/pinecone.jpg)")
      .clockwise(style="background-image: url(images/pinecone-1.jpg)")
      .anticlockwise(style="background-image: url(images/pinecone-2.jpg)")

{.text-center} يحتوي مخروط الصنوبر هذا على [[8]] لوالب في اتجاه عقارب الساعة و [[13]] لوالب في عكس اتجاه عقارب الساعة.

::: column(width=320)

    x-select.segmented
      div Original
      div(data-value="cw") Clockwise
      div(data-value="ccw") Countercw.
    .spirals(style="background-image: url(images/sunflower.jpg)")
      .clockwise(style="background-image: url(images/sunflower-1.jpg)")
      .anticlockwise(style="background-image: url(images/sunflower-2.jpg)")

{.text-center.reveal(when="blank-0 blank-1")} يحتوي عباد الشمس هذا على 34 لولبًا باتجاه عقارب الساعة و 55 لولبًا بعكس اتجاه عقارب الساعة.

:::

---
> id: spirals-1

في كلتا الحالتين ، أعداد اللوالب هي أرقام فيبوناتشي متتالية. وينطبق الشيء نفسه على العديد من النباتات الأخرى: في المرة القادمة التي تخرج فيها ، احسب عدد البتلات في الزهرة أو عدد الأوراق على الساق. في كثير من الأحيان ستجد أنها أرقام فيبوناتشي!

بالطبع ، هذه ليست مجرد مصادفة. هناك سبب مهم لماذا تحب الطبيعة تسلسل فيبوناتشي ، والذي ستتعلم المزيد عنه لاحقًا.

---
> id: bees

::: column(width=320)

    x-select.segmented
      div(data-value="male") Male
      div(data-value="female") Female
    .bees
      img(src="images/bees-male.png")
      img(hidden src="images/bees-female.png")

::: column.grow

تظهر أرقام فيبوناتشي أيضًا في مجموعات نحل العسل.

يوجد في كل مستعمرة نحل _ملكة_ واحدة تضع الكثير من البيض. إذا تم تخصيب بيضة بواسطة نحلة ذكر ، فإنها تفقس في نحلة __أنثى__. إذا لم يتم تخصيبها ، فإنها تفقس في نحلة __ذكر__ (تسمى طائرة بدون طيار).

وهذا يعني أن النحل لدى الإناث [[والدين|والد واحد]] ، بينما لدى النحل الذكور فقط [[والد واحد|والدين]].

{.reveal(when="blank-0 blank-1")} إذا رسمنا شجرة النحل ، فإن عدد الآباء والأجداد والأجداد والأجيال السابقة دائمًا ما يكون أرقام فيبوناتشي!

{.i.lgrey.reveal(when="blank-0 blank-1" delay=400)} في بعض الأحيان ، تتغذى النحل الشابة على طعام خاص يسمى "غذاء ملكات النحل". في هذه الحالة ، يتحولون إلى ملكات وسيطيرون بعيدًا لبدء خلية جديدة.

:::

---
> id: golden-spiral

### النسبة الذهبية

تمامًا مثل [المثلث](gloss:triangle-numbers) و [الأرقام المربعة](gloss:square-numbers) ، والتسلسلات الأخرى التي رأيناها من قبل ، يمكن تصور تسلسل فيبوناتشي باستخدام نمط هندسي:

    x-slideshow.golden-spiral
      .stage(slot="stage" dir="ltr"): include svg/spiral.svg
      .legend(slot="legend") نبدأ بمربعين صغيرين من الحجم 1.
      .legend(slot="legend") بعد ذلك، نضيف مربعا جديدا من الحجم 2 لتشكيل مستطيل أكبر.
      .legend(slot="legend") بعد ذلك، نضيف مربعا بحجم 3 لتشكيل مستطيل أكبر.
      .legend(slot="legend") المربع التالي له حجم 5. هل ترى أننا نعيد إنشاد أرقام فيبوناتشي?
      .legend(slot="legend") أذا واصلنا إضافة المربعات، فسيكون لها حجم 8, 13, 21, ....
      .legend(slot="legend") ربما لاحظت أنه مع تكبر المستطيلات، يبدو أنهاتبدأ في "الدوران" للخارج. يمكننا حتي تصور ذلك من خلال رسم حلزونى مثالى يربط زوايا المربعات.

---
> id: golden-ratio

في كل خطوة ، تشكل المربعات مستطيلًا أكبر. عرضه وارتفاعه دائمًا رقمان فيبوناتشي متتاليان. __نسبة العرض إلى الارتفاع__ للمستطيل هي نسبة عرضه وارتفاعه:

::: column(width=100 parent="padded-thin golden-rect")

    include svg/golden-1.svg

{.text-center} `2/1` = 2

::: column(width=100)

    include svg/golden-2.svg

{.text-center} `3/2` = 1.5

::: column(width=100)

    include svg/golden-3.svg

{.text-center} `5/3` = 1.666 ...

::: column(width=100)

    include svg/golden-4.svg

{.text-center} `8/5` = 1.6

::: column(width=100)

    include svg/golden-5.svg

{.text-center} <mfrac> <mn> [[13]] </mn> <mn> [[8]] </mn> </mfrac> _{span.reveal(when="blank-0 blank-1")} = 1.625_

::: column(width=100)

    include svg/golden-6.svg

{.text-center} <mfrac> <mn> [[21]] </mn> <mn> [[13]] </mn> </mfrac> _{span.reveal(when="blank-2 blank-3")} = 1.62…_

:::

---
> id: golden-ratio-1
> goals: img-0 img-1

لاحظ كيف ، عندما نضيف المزيد والمزيد من المربعات ، يبدو أن نسبة العرض إلى الارتفاع تقترب من رقم معين حول 1.6. يُسمى هذا الرقم [__النسبة الذهبية__](gloss:golden-ratio) ويمثل عادةً بالحرف اليوناني `φ` ("phi"). قيمتها الدقيقة

{.text-center} `(1 + sqrt(5))/2 = 1.61803398875…`

يعتقد الكثير من الناس أن النسبة الذهبية ممتعة بشكل خاص من الناحية الجمالية. لهذا السبب يتم استخدامه غالبًا من قبل الفنانين والمهندسين المعماريين - كما هو الحال في هذين المثالين:

::: column(width=320)

    .golden-art
      x-img(src="images/pantheon.jpg" width=320 height=198)
      img(src="images/pantheon-box.png" width=320 height=198)
    x-gesture(target=".golden-art")

{.caption} قيل أن النحات اليوناني فيدياس استخدم النسبة الذهبية عند تصميم _بارثينون_ في أثينا. الحرف الأول من اسمه `φ` هو الرمز الذي نستخدمه الآن للنسبة الذهبية.

::: column(width=320)

    .golden-art
      x-img(src="images/dali.jpg" width=320 height=198)
      img(src="images/dali-box.png" width=320 height=198)

{.caption} _سر العشاء الأخير_ للفنان الإسباني سلفادور دالي ، هو واحد من العديد من اللوحات ذات النسبة الذهبية. في الخلفية ، يمكنك أيضًا مشاهدة [دوديكاهيدرون](gloss:dodecahedron) كبير.

:::

---
> id: golden-ratio-2

يمكننا تقريب النسبة الذهبية من خلال [[قسمة|جمع|طرح]] رقمين متتاليين من أرقام فيبوناتشي.

{.reveal(when="blank-0")} ومع ذلك ، اتضح أنه لا يمكن كتابة القيمة الدقيقة لـ `φ` ككسر بسيط: فهي [__رقم غير منطقي__](gloss:irrational-numbers) ، تمامًا مثل [`π`](gloss:pi) و`sqrt(2)` وبعض الأرقام الأخرى التي رأيتها من قبل.

---
> id: sunflower-growing

### لوالب فيبوناتشي

::: column.grow

توضح النسبة الذهبية سبب ظهور أرقام فيبوناتشي في الطبيعة ، مثل عباد الشمس ومخروط الصنوبر الذي رأيته في بداية هذا القسم.

ينمو هذان النباتان للخارج من مركزهما (جزء من النبات يسمى _meristem_). عند إضافة بذور أو أوراق أو بتلات جديدة ، فإنها تدفع البذور الموجودة إلى الخارج.

حرك المنزلق على اليمين لتصور كيف ينمو النبات. لاحظ كيف تتم إضافة كل ورقة في دوران مختلف عن الدوران السابق. دائمًا ما تكون الزاوية بين ورقتين متتاليتين هي نفسها.

::: column(width=300)

    svg.petals(width=300 height=300)
      circle(r=1 cx=150 cy=150)
      - var i = 0
      while i < 40
        path(d="M166,158A20,20,0,0,1,150,150a20,20,0,0,1,32,0A20,20,0,0,1,166,158Z")
        - i += 1

    x-slider(steps=39 speed=0.5)

:::

---
> id: sunflower-spiral

من المهم للزهور اختيار زاوية مناسبة: يجب أن تكون الأوراق أو البذور متباعدة بشكل متساوٍ تقريبًا حتى تحصل على أكبر قدر من ضوء الشمس والمغذيات. في الرسم البياني أدناه ، يمكنك استكشاف الشكل الذي قد تبدو عليه عباد الشمس بزوايا مختلفة بين بذورها:

::: x-slideshow

    .sunflower-spiral(slot="stage")
      .value
      x-slider(steps=1000 continuous speed=0.1 no-play)
      svg(width=400 height=400 viewBox="0 0 400 400")

{div(slot="legend")} إذا كانت الزاوية [0°](action:set(0)) ، فسوف تنمو جميع البذور في صف واحد طويل بعيدًا عن المركز.

{div.inline(slot="legend")} إذا كانت الزاوية [`1/2`](action:set(0.5)) لدوران كامل (180 درجة) ، فستتبادل البذور بين "ذراعيْن" منفصلين يبتعدان عن المركز.

{div.inline(slot="legend")} إذا كان الدوران نسبة كسرية أخرى تبلغ 360 درجة ، على سبيل المثال [`2/5`](action:set(2/5)) أو [`1/3`](action:set(1/3)) أو [`3/8`](action:set(3/8)) ، فسيكون عدد "الأسلحة" هو نفسه [[المقام|بسط|العامل الرئيسي]] لهذا الكسر.

{div(slot="legend")} للأسف "الأسلحة" سيئة ، لأنها تعني أن البذور غير موزعة بالتساوي: كل المساحة بين الذراعين تضيع. ولكن إذا لم تعمل [الأرقام المنطقية](gloss:rational-numbers) ، فلنجرّب [الأرقام غير المنطقية](gloss:irrational-numbers)!

{div.inline(slot="legend")} أحد الأمثلة لرقم غير منطقي هو [`pi`](gloss:pi). ولكن إذا كانت الزاوية بين البذور [`1/pi`](action:set(0.31831)) بزاوية 360 درجة ، فلا يزال يبدو أننا نحصل على الأسلحة: 22 منها. ذلك لأن الكسر `22/7 = 3.1429…` هو تقريب جيد جدًا لـ `pi`. ما نحتاجه حقًا هو رقم غير منطقي _لا يمكن_ تقريبه تقريبًا بواسطة كسر بسيط.

{div.inline(slot="legend")} اتضح أن [النسبة الذهبية](gloss:golden-ratio) هي: "الأكثر غير منطقية" من جميع الأرقام غير المنطقية. إذا كانت الزاوية بين البذور [`1/phi`](action:set(0.6180339)) بزاوية 360 درجة ، فيبدو أنها متباعدة تمامًا. وهذه بالضبط هي الزاوية التي تستخدمها النباتات حول العالم.

:::

    x-gesture(target=".fib-action")

---
> id: sunflower-spiral-1

::: column(width=240)

    x-img(src="images/flowers.jpg" width=240 height=400)

::: column.grow

قد تتذكر من الأعلى أن نسب أرقام فيبوناتشي المتتالية تقترب أكثر وأكثر من النسبة الذهبية - ولهذا السبب ، إذا كنت تحسب عدد اللوالب في النبات ، فغالبًا ما ستجد رقم فيبوناتشي.

من المهم أن نتذكر أن الطبيعة لا تعرف عن أرقام فيبوناتشي. لا تستطيع الطبيعة أيضًا حل المعادلات لحساب النسبة الذهبية - ولكن على مدار ملايين السنين ، كان للنبات الكثير من الوقت لتجربة زوايا مختلفة واكتشاف أفضلها.

تريد النباتات والحيوانات دائمًا النمو بأكثر الطرق كفاءة ، ولهذا السبب تمتلئ الطبيعة بالأنماط الرياضية المنتظمة.

:::

---
> id: lucas-numbers

### فيبوناتشوس

حتى الآن ، استخدمنا فقط المعادلة العودية لأرقام فيبوناتشي. في الواقع هناك معادلة صريحة أيضًا - ولكن من الصعب العثور على:

{.text-center} `F_n = 1/(  sqrt(5)) ( ((1 + sqrt(5))/2)^n - ((1 - sqrt(5))/2)^n )`

يمكننا أيضًا محاولة اختيار نقاط بداية مختلفة لأرقام فيبوناتشي. على سبيل المثال ، إذا بدأنا بـ 2 ، 1 ، ... بدلاً من 1 ، 1 ، ... نحصل على تسلسل يسمى __أرقام لوكاس__.

اتضح أنه ، بغض النظر عن رقمي البدء اللذين تختارهما ، فإن التسلسلات الناتجة تشترك في العديد من الخصائص. على سبيل المثال ، تتقارب نسب المصطلحات المتتالية _دائمًا_ [تقارب تسلسل](gloss:sequence-convergence) إلى النسبة الذهبية.

{.text-center.s-purple.s-small(dir="ltr")} ${a}{a|1|0,10,1} ، ${b}{b|1|0,10,1} ، _{span.n} ${a+b}_ ، _{span.n} ${a+2×b}_ ، _{span.n} ${2×a+3×b}_ ، _{span.n} ${3×a+5×b}_ ، _{span.n} ${5×a+8×b}_ ، _{span.n} ${8×a+13×b}_ ، ...

---
> id: fibonacci-puzzles

هناك العديد من الألغاز والأنماط والتطبيقات الأخرى المتعلقة بأرقام فيبوناتشي. إليك بعض الأمثلة التي يمكنك تجربتها بنفسك:

::: .box.f-blue

#### Problem solving

__1. انقسام فيبوناتشي__

(أ) ما هي أرقام فيبوناتشي حتى؟ هل هناك نمط حيث يتم وضعهم على طول التسلسل؟ هل يمكنك أن تشرح لماذا؟

(ب) أي أرقام فيبوناتشي قابلة للقسمة على 3 (أو قابلة للقسمة على 4)؟ ماذا تلاحظ؟

    hr

__2. مبالغ فيبوناتشي__

ماذا يحدث إذا جمعت أي ثلاثة أرقام متتالية في فيبوناتشي؟ هل يمكنك أن تشرح لماذا؟

    hr

__3. سلالم فيبوناتشي__

عند صعود الدرج ، يمكنني إما أن أخطو خطوة واحدة أو أقفز بخطوتين في كل مرة. هذا يعني أن هناك العديد من الاحتمالات المختلفة لكيفية صعود الدرج. على سبيل المثال ، إذا كانت هناك 5 خطوات ، فلدي 8 خيارات مختلفة:

    figure: x-img(src="images/stairs.svg" width=530 height=200)

كم عدد الخيارات للدرج مع 6 أو 7 أو 8 خطوات؟ هل يمكنك اكتشاف نمط؟ وكيف يرتبط هذا بأرقام فيبوناتشي؟

:::

    figure
      x-img(src="images/fibonachos.jpg" width=600 height=282)
      p.caption © FoxTrot, by Bill Amend

---

## تسلسلات خاصة

> section: special
> id: special-intro

بالإضافة إلى التسلسل [الحسابة](gloss:arithmetic-sequence) و [الهندسي](gloss:geometric-sequence) ، و [أرقام فيبوناتشي](gloss:fibonacci-numbers) و [أرقام مجسمة](gloss:figurate-numbers) ، فهناك عدد لا يحصى من التسلسلات المثيرة للاهتمام التي لا تتبع متشابهة نمط عادي.

---
> id: primes

### ألأعداد الأولية

أحد الأمثلة التي رأيتها من قبل هي [__أرقام الأولية__](gloss:prime). نقول أن الرقم _أولي_ إذا لم يكن لديه [عوامل](gloss:factor) [[بخلاف 1 ونفسه|بخلاف 1 و 2|و لا مضاعف]].

---
> id: primes-1

إليك أول عدد قليل من الأعداد الأولية:

{.text-center.s-teal(dir="ltr")} _{.n}2_, _{.n}3_, _{.n}5_, _{.n}7_, _{.n}11_,
_{.n}[[13]]_, _{.n}[[17]]_, _{.n}[[19]]_, …

---
> id: primes-2
> goals: p2 p3 p5 p7

للأسف ، لا تتبع الأعداد الأولية نمطًا بسيطًا أو صيغة تعاودية. في بعض الأحيان تظهر مباشرة بجوار بعضها البعض (تسمى هذه [التوائم الأولية](gloss:twin-primes)) ، وأحيانًا توجد فجوات كبيرة بينهما. يبدو أنها موزعة بشكل عشوائي تقريبا! لا تحتوي الأعداد الأولية أيضًا على تمثيل هندسي بسيط مثل [مثلث](gloss:triangle-numbers) أو [أرقام مربعة](gloss:square-numbers) ، ولكن مع القليل من العمل يمكننا الكشف عن أنماط مثيرة للاهتمام:

::: column(width=320)

    .eratosthenes
      .deleted 1
      .l-red 2
      - var i = 3
      while i <= 100
        div= i
        - i += 1
    x-gesture(target=".eratosthenes .l-red")

{.caption} إذا شطبنا جميع مضاعفات الأعداد الصحيحة الصغيرة ، يجب أن تكون جميع الأرقام المتبقية أولية. تسمى هذه الطريقة [__منخل إراتوستينس__](gloss:sieve-eratosthenes).

::: column(width=320)

    x-coordinate-system(width=320 height=320 padding="8 8 20 24" axis-names="x,number of primes less than x")

{.caption} إذا رسمنا مخططًا يزيد بمقدار 1 كلما كان هناك رقم أولي ، نحصل على وظيفة "متدرجة" بخصائص رائعة.

:::

---
> id: primes-3

يمكنك معرفة المزيد عن هذه الخصائص وغيرها من الخصائص للأرقام الأولية في دورتنا حول [القسمة والأعداد](/course/divisibility/primes). هم من أهم المفاهيم وأكثرها غموضا في الرياضيات!

    figure: img(src="images/primes.svg" width=480 height=156)

---
> id: perfect

### أرقام مثالية

أرقام مثالية لتحديد ما إذا كان الرقم [أوليًا](gloss:prime) ، يجب علينا العثور على جميع [عوامله](gloss:factor). عادةً ما نقوم _بضرب_ هذه العوامل لاستعادة الرقم الأصلي ، ولكن دعنا نرى ما يحدث إذا _أضفنا_ جميع عوامل الرقم (باستثناء الرقم نفسه):

    - list = function(n) { return Array.apply(null, {length: n}).map((x,i) => i+1); }
    - factors = function(n) { return list(n-1).filter(i => !(n % i)); }
    - total = function(a) { return a.reduce((a, c) => a + c, 0); }
    table.grid.perfect-table(dir="ltr")
      tr
        td: strong Number
        td: strong Factors
        td: strong Sum of Factors
      for i in [5,6,7,8,9,10,11,12,13,14,15,16,17,18]
        tr
          td: .c= i
          td
            for j in factors(i)
              .c.small= j
          if i >= 10
            td.md [[#{total(factors(i))}]]
          else
            td= total(factors(i))

---
> id: perfect-1

دعنا نقارن هذه الأرقام بمجموع عواملها:

::: column.frame.f-blue.text-center(width=222 parent="padded-thin")

 بالنسبة لمعظم الأرقام ، يكون مجموع عوامله
[[أقل من|أكثر من|يساوي]] نفسها. تسمى هذه الأرقام __أرقام ناقصة__.

::: column.frame.f-green.text-center.reveal(when="blank-0" animation="pop" width=222)

بالنسبة لعدد قليل من الأرقام ، يكون مجموع عوامله أكبر من نفسه. تسمى هذه الأرقام __أرقام وفيرة__.

::: column.frame.f-yellow.text-center.reveal(when="blank-0" animation="pop" delay=500 width=222)

يحتوي رقم واحد فقط في القائمة أعلاه على مجموعة عوامل _تساوي_ نفسها: [[6]]. وهذا ما يسمى [__رقمًا مثاليًا__](gloss:perfect-numbers).

:::

---
> id: perfect-2

الرقم المثالي التالي هو 28 ، لأنه إذا جمعنا جميع عوامله نحصل على `1 + 2 + 4 + 7 + 14 = 28`. بعد ذلك ، تصبح الأرقام المثالية أكثر ندرة:

{.text-center.s-purple.s-vertical.perfect-list(dir="ltr")} _{.n}6_, _{.n}28_,
_{.n}496_, _{.n}8,128_, _{.n}33,550,336_, _{.n}8,589,869,056_,
_{.n}137,438,691,328_, _{.n}2,305,843,008,139,952,128_, …

لاحظ أن كل هذه الأرقام [[زوخية|مضاعفت|ّأكتر من رقم مربع]]. _{span.reveal(when="blank-0")} اتضح أنها كلها أيضًا أرقام مثلث!_

---
> id: perfect-3

::: column.grow

تمت دراسة الأرقام المثالية لأول مرة من قبل علماء الرياضيات اليونانيين القدماء مثل [إقليدس](bio:euclid) ، [فيثاغورس](bio:pythagoras) و [نيكوماكس](bio:nicomachus) ، منذ أكثر من 2000 عام. قاموا بحساب الأرقام القليلة القليلة الأولى ، وتساءلوا عما إذا كان هناك أي _فردي_. اليوم ، استخدم علماء الرياضيات أجهزة الكمبيوتر للتحقق من أول 10 <sup>1500</sup> رقم (وهذا 1 متبوعًا بـ 1500 أصفار) ، ولكن دون جدوى: كل الأرقام المثالية التي وجدوها كانت حتى. حتى يومنا هذا ، لا يزال من غير المعروف ما إذا كان هناك أي أرقام مثالية فردية ، مما يجعلها أقدم مشكلة لم يتم حلها في _جميع الرياضيات_!

::: column(width=220)

    x-img(src="images/euclid.jpg" width=220 height=269)

{.caption} إقليدس الإسكندرية

:::

---
> id: hailstone

### تسلسل هيلستون

معظم التسلسلات التي رأيناها حتى الآن لها قاعدة أو نمط واحد. ولكن لا يوجد سبب يمنعنا من الجمع بين عدة صيغ مختلفة - على سبيل المثال صيغة تعاودية مثل هذه:

    table.grid.text-left(dir="ltr")
      tr
        td: strong.md If `x_n` is even:
        td.md `x_(n+1) = x_n // 2`
      tr
        td: strong.md If `x_n` is odd:
        td.md `x_(n+1) = 3 x_n + 1`

فلنبدأـ `x_1 = 5` ونرى ما سيحدث:

{.text-center.s-orange.with-arrows(dir="ltr")} _{.n}5_, _{.n}[[16]]*{span.arrow}×3 +1*_,
_{.n}[[8]]*{span.arrow.reveal(when="blank-0")}÷2*_,
_{.n}[[4]]*{span.arrow.reveal(when="blank-1")}÷2*_,
_{.n}[[2]]*{span.arrow.reveal(when="blank-2")}÷2*_,
_{.n}[[1]]*{span.arrow.reveal(when="blank-3")}÷2*_,
_{.n}[[4]]*{span.arrow.reveal(when="blank-4")}×3 +1*_,
_{.n}[[2]]*{span.arrow.reveal(when="blank-5")}÷2*_,
_{.n}[[1]]*{span.arrow.reveal(when="blank-6")}÷2*_, …

---
> id: hailstone-1

يبدو أنه بعد بضعة مصطلحات ، يصل التسلسل إلى "دورة ": 4 ، 2 ، 1 ستستمر في التكرار مرارًا وتكرارًا إلى الأبد. بالطبع ، كان بإمكاننا اختيار نقطة بداية مختلفة ، مثل ${n}{n|10|5,40,1}. ثم سيبدو التسلسل على النحو التالي:

{.text-center(dir="ltr")} _{span.var.s-orange(:html="hailstones(n)")}_, *{span.s-red}_{.n}4_,
_{.n}2_, _{.n}1_,* *{span.s-purple}_{.n}4_, _{.n}2_, _{.n}1_,*
*{span.s-blue}_{.n}4_, _{.n}2_, _{.n}1_, …*

---
> id: hailstone-2

يبدو أن طول التسلسل يختلف كثيرًا ، ولكنه سينتهي دائمًا بدورة 4 ، 2 ، 1 - بغض النظر عن الرقم الأول الذي نختاره. يمكننا حتى تصور شروط التسلسل في الرسم البياني:

    x-coordinate-system(width=600 height=400 padding="12 12 24 40")
      .hailstone-slider.md #[span Start value:]${n}{n|12|1,50,1}

{.reveal(when="var-0")} لاحظ كيف تنتهي بعض نقاط البداية بسرعة كبيرة ، بينما تأخذ نقاط أخرى (مثل [31](action:set(31)) أو [47](action:set(47))) أكثر من مائة خطوة قبل أن تصل إلى النقاط الأربع ، 2 ، 1 دورة.

---
> id: hailstone-3

::: column.grow

تسمى جميع التسلسلات التي تتبع هذه الصيغة العودية [__تسلسلات هيلستون__](gloss:hailstone-sequence) ، لأنها تبدو وكأنها تتحرك بشكل عشوائي لأعلى ولأسفل قبل الوصول إلى دورة 4 ، 2 ، 1 - تمامًا مثل حبات البَرَد التي تتحرك لأعلى و في سحابة قبل أن تصطدم بالأرض.

في عام 1937 ، اقترح عالم الرياضيات [لوثار كولاتز](bio:collatz) أن _كل_ تسلسل من بَرَد ينتهي في نهاية المطاف بدورة 4 ، 2 ، 1 - مهما كانت قيمة البداية التي تختارها. لقد تحققت بالفعل من بعض نقاط البداية أعلاه ، وجربت أجهزة الكمبيوتر بالفعل جميع الأرقام حتى `10^20` - أي 100 مليار مليار أو 1 متبوعًا بعشرين أصفار.

::: column(width=240)

    x-img(src="images/storm.jpg" width=240 height=340)

:::

ومع ذلك ، هناك عدد لا نهائي من الأعداد الصحيحة. من المستحيل التحقق من كل واحد منهم ، ولم يتمكن أحد من العثور على [إثبات](gloss:proof) يعمل للجميع.

تمامًا مثل البحث عن الأرقام المثالية الفردية ، لا تزال هذه مشكلة مفتوحة في الرياضيات. من المدهش أن هذه الأنماط البسيطة للتسلسل يمكن أن تؤدي إلى أسئلة غامضت حتى أفضل علماء الرياضيات في العالم لعدة قرون!

---
> id: look-and-say

### تسلسل الشكل والقل

في ما يلي تسلسل آخر مختلف قليلاً عن كل التسلسلات التي رأيتها أعلاه. هل يمكنك العثور على النمط؟

{.text-center.s-lime.s-vertical(dir="ltr")} _{span.n}1_, _{span.n}11_, _{.n}21_,
_{.n}1211_, _{.n}111221_, _{.n}312211_, …

_{button.next-step} متابعة_

---
> id: look-and-say-1

يُطلق على هذا التسلسل تسلسل __الشكل والقول__ ، والنمط هو بالضبط ما يقوله الاسم: تبدأ بـ 1 ، وكل مصطلح يلي هو ما تحصل عليه إذا "قرأت بصوت عالٍ" السابق. هنا مثال:

    p: x-img(src="images/look-and-say.svg" width=240 height=130 style="margin: 0 auto")

هل يمكنك الآن العثور على المصطلحات التالية؟

{.text-center.s-lime.s-vertical(dir="ltr")}… ، _{.n} 312211_ ، _{.n} [[13112221]]_ ، _{.n} [[1113213211]]_ ، ...

---
> id: look-and-say-2

غالبًا ما يتم استخدام هذا التسلسل كألغاز لرحلة علماء الرياضيات - لأن النمط يبدو غير رياضي تمامًا. ومع ذلك ، كما اتضح ، فإن التسلسل له العديد من الخصائص المثيرة للاهتمام. على سبيل المثال ، ينتهي كل مصطلح بالرقم [[1]] ، ولا يتم استخدام أي رقم أكبر من [[3]].

---
> id: look-and-say-3

اكتشف عالم الرياضيات البريطاني [جون كونواي](bio:conway) أنه ، بغض النظر عن الرقم الذي تختاره كقيمة ابتدائية ، سينقسم التسلسل في النهاية إلى "أقسام" مميزة لم تعد تتفاعل مع بعضها البعض. أطلق كونواي على هذا اسم _نظرية الكونية_ ، وأطلق على الأقسام المختلفة باستخدام العناصر الكيميائية _هيدروجين_ ، _هيليوم_ ، _ليثيوم_ ،… ، حتى _بلوتونيوم_.

---
> id: quiz

### اختبار التسلسل

لقد رأيت الآن تسلسلات رياضية مختلفة لا تعد ولا تحصى - بعضها يعتمد على أشكال هندسية ، وبعضها يتبع صيغ محددة ، والبعض الآخر يبدو أنه يتصرف بشكل عشوائي تقريبًا.

في هذا الاختبار يمكنك الجمع بين جميع معلوماتك حول التسلسلات. هناك هدف واحد: البحث عن النمط وحساب المصطلحين التاليين!

::: .box.f-blue

#### Find the next number

{.text-center.s-yellow(dir="ltr")} _{span.n}7_, _{span.n}11_, _{.n}15_, _{.n}19_, _{.n}23_,
_{.n}27_, _{.n}[[31]]_, _{.n}[[35]]_, …
_{span.pattern.reveal(when="blank-0 blank-1")} نمط: دائما +4_

{.text-center.s-orange(dir="ltr")} _{span.n}11_, _{span.n}14_, _{.n}18_, _{.n}23_, _{.n}29_,
_{.n}36_, _{.n}[[44]]_, _{.n}[[53]]_, …
_{span.pattern.reveal(when="blank-2 blank-3")} نمط: +3, +4, +5, +6_

{.text-center.s-red(dir="ltr")} _{span.n}3_, _{span.n}7_, _{.n}6_, _{.n}10_, _{.n}9_,
_{.n}13_, _{.n}[[12]]_, _{.n}[[16]]_, …
_{span.pattern.reveal(when="blank-4 blank-5")} نمط: +4, –1, +4, –1_

{.text-center.s-purple(dir="ltr")} _{span.n}2_, _{span.n}4_, _{.n}6_, _{.n}12_, _{.n}14_,
_{.n}28_, _{.n}[[30]]_, _{.n}[[60]]_, …
_{span.pattern.reveal(when="blank-6 blank-7")} نمط: ×2, +2, ×2, +2_

{.text-center.s-blue(dir="ltr")} _{span.n}1_, _{span.n}1_, _{.n}2_, _{.n}3_, _{.n}5_,
_{.n}8_, _{.n}[[13]]_, _{.n}[[21]]_, …
_{span.pattern.reveal(when="blank-8 blank-9")} نمط: أرقام فيبو ناتشي_

{.text-center.s-teal(dir="ltr")} _{span.n}27_, _{span.n}28_, _{.n}30_, _{.n}15_, _{.n}16_,
_{.n}18_, _{.n}[[9]]_, _{.n}[[10]]_, …
_{span.pattern.reveal(when="blank-10 blank-11")} نمط: +1, +2, ÷2, +1, +2, ÷2_

{.text-center.s-green(dir="ltr")} _{span.n}1_, _{span.n}9_, _{.n}25_, _{.n}49_, _{.n}81_,
_{.n}121_, _{.n}[[169]]_, _{.n}[[225]]_, …
_{span.pattern.reveal(when="blank-12 blank-13")} نمط: أرقام مربعة فرذية_

:::

---

## مثلث باسكال

> section: pascals-triangle
> id: pascal-intro

أدناه يمكنك أن ترى هرم عدد تم إنشاؤه باستخدام نمط بسيط: يبدأ بـ "1" واحد في الأعلي ، وكل خلية تالية هي مجموع الخليتين أعلاه مباشرة. حرك مؤشر الماوس فوق بعض الخلايا لترى كيف يتم حسابها ، ثم املأ الخلايا المفقودة:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };

    .overflow-wrap: .pascal-grid(style="width: 560px")
      - var i = 0;
      while i < 13
        - var j = 0
        .r
          while j <= i
            if (i == 6 && j == 2) || (i == 8 && j == 5) || (i == 10 && j == 5)  || (i == 12 && j == 3)  || (i == 12 && j == 9)
              .c.md [[#{bin(i, j)}]]
            else
              .c= bin(i, j)
            - j += 1;
        - i += 1;

---
> id: pascal-intro-1

أظهر هذا الرسم البياني الصفوف الاثني عشر الأولى فقط ، ولكن يمكننا الاستمرار إلى الأبد ، بإضافة صفوف جديدة في الأسفل. لاحظ أن المثلث [[متماثل|بزاوية قاأمة|متساوي]] ، والذي يمكن أن يساعدك في حساب بعض الخلايا.

---
> id: pascal-triangle

يسمى المثلث [__مثلث باسكال__](gloss:pascals-triangle) ، والذي سمي على اسم عالم الرياضيات الفرنسي [بليز باسكال](bio:pascal). كان من أوائل علماء الرياضيات الأوروبيين الذين درسوا أنماطه وخصائصه ، ولكنه كان معروفًا للحضارات الأخرى قبل عدة قرون:

::: column(width=200)

    x-img(src="images/pascal-1.jpg" width=130 height=280 style="margin: 0 auto")

{.caption} في عام 450 قبل الميلاد ، أطلق عالم الرياضيات الهندي [بينغالا](bio:pingala) على المثلث __"درج جبل ميرو"__ ، الذي سمي على اسم جبل هندوسي مقدس.

::: column(width=200)

    x-img(src="images/pascal-2.jpg" width=200 height=280)

{.caption} في إيران ، عُرفت باسم __"مثلث الخيام"__ (مثلث خیام) ، والتي سميت باسم الشاعر والرياضي الفارسي [عمر الخيام](bio:khayyam).

::: column(width=200)

    x-img(src="images/pascal-3.jpg" width=200 height=280)

{.caption} في الصين ، اكتشف عالم الرياضيات جيا شيان المثلث أيضًا. سميت باسم خليفته ، __"مثلث يانغ هوي"__ (杨辉 三角).

:::

يمكن إنشاء مثلث باسكال باستخدام نمط بسيط للغاية ، ولكنه مليء بأنماط وخصائص مدهشة. لهذا السبب فتنت علماء الرياضيات في جميع أنحاء العالم ، لمئات السنين.

_{button.next-step} متابعة_

---
> id: pascal-sequences

### البحث عن التسلسل

في الأقسام السابقة ، شاهدت تسلسلات رياضية مختلفة لا تعد ولا تحصى. اتضح أن العديد منها يمكن العثور عليه أيضًا في مثلث باسكال:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return fact(a) / fact(b) / fact(a - b); };

    .overflow-wrap: .pascal-grid.sums(style="width: 760px")
      - var i = 0;
      while i < 17
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            if b == 120
              .c: span.s120= b
            else if b == 3003
              .c: span.s3003= b
            else
              .c= b
            - j += 1;
          .c.sum
        - i += 1;

::: tab(parent="pascal-tabs")

#### {.btn.yellow} _{span.check(when="blank-0")}_

الأرقام في القطر الأول على كلا الجانبين هي [[واحد|تزيد|زوجية]].

::: tab

#### {.btn.orange} _{span.check(when="blank-1")}_

الأرقام في القطر الثاني على كلا الجانبين هي [[أعداد صحيحة|أعداد أولية|أرقام مربعة]].

::: tab

#### {.btn.red} _{span.check(when="blank-2")}_

الأرقام في القطر الثالث على كلا الجانبين هي [[أرقام مثلثة|أرقام مربعة|أرقام فيبوناتشي]].

::: tab

#### {.btn.purple} _{span.check(when="blank-3")}_

الأرقام في القطر الرابع هي [[أرقام رباعي السطوح|أرقام مكعبة|سلاحيات اثنين]].

::: tab

#### {.btn.blue} _{span.check(when="blank-4")}_

إذا قمت بتجميع كل الأرقام في صف واحد ، فستكون مجاميعها بمثابة تسلسل آخر: [[قوى اثنتين|أرقم كاملة|أرقام أولية]].

::: tab

#### {.btn.teal} _{span.check(when="blank-5")}_

في كل صف يحتوي على رقم أولي في خليته الثانية ، تكون جميع الأرقام التالية [[مضاعفات|العوامل|معكوس]] من ذلك الرقم الأولي.

::: tab

#### {.btn.green} _{span.check(when="blank-6")}_

يسلط الرسم البياني أعلاه الضوء على الأقطار "الضحلة" بألوان مختلفة. إذا جمعنا الأرقام في كل قطر ، نحصل على [[أرقام فيبوناتشي|أرقام هيلستون |سلسلة هندسي]].

:::

---
> id: pascal-sequences-1

بالطبع ، لكل من هذه الأنماط سبب رياضي يفسر سبب ظهوره. ربما يمكنك أن تجد بعضها!

سؤال آخر قد تطرحه هو عدد المرات التي يظهر فيها رقم في مثلث باسكال. من الواضح أن هناك عددًا لا نهائيًا من 1s ، واحد 2 ، وكل رقم آخر يظهر [[مرتين على الأقل|مرة علا الأقل|مرتين بالضبط]] ، _{span.reveal(when="blank-0")} في القطر الثاني على كلا الجانبين._

---
> id: pascal-sequences-2

تظهر أيضًا بعض الأرقام الموجودة في منتصف المثلث ثلاث أو أربع مرات. حتى أن هناك القليل منها الذي يظهر ست مرات: يمكنك رؤية كل من [120](->.s120) و [3003](->.s3003) أربع مرات في المثلث أعلاه ، وستظهر مرتين إضافيتين في الصفين 120 و 3003 .

نظرًا لأن 3003 عبارة عن رقم مثلث ، فإنه يظهر فعليًا مرتين أخريين في الأقطار _الثالثة_ من المثلث - مما يجعل إجمالي ثمانية مرات.

من غير المعروف ما إذا كانت هناك أرقام أخرى تظهر ثماني مرات في المثلث ، أو إذا كانت هناك أرقام تظهر أكثر من ثماني مرات. افترض عالم الرياضيات الأمريكي [ديفيد سينجماستر](bio:singmaster) أن هناك حدًا ثابتًا لعدد المرات التي يمكن أن تظهر فيها الأرقام في مثلث باسكال - ولكن لم يثبت ذلك بعد.

---
> id: modular
> goals: select

### القسمة

بعض الأنماط في مثلث باسكال ليس من السهل اكتشافها. في الرسم البياني أدناه ، قم بتمييز جميع الخلايا حتى:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };

    .overflow-wrap: .pascal-grid#pascal-select(style="width: 340px")
      - var i = 0;
      while i < 8
        - var j = 0
        .r
          while j <= i
            .c= bin(i, j)
            - j += 1;
        - i += 1;
    x-gesture(target="#pascal-select .r:nth-child(3) .c:nth-child(2)")

{.reveal(when="select")} يبدو أن الرقم الزوجي في مثلث باسكال يشكل مثلثًا آخر أصغر [[مثلث|مصفوفة|مربع]].

---
> id: modular-1
> goals: c2 c3 c4 c5

يستغرق تلوين كل خلية يدويًا وقتًا طويلاً ، ولكن يمكنك هنا رؤية ما يحدث إذا كنت ستفعل ذلك للعديد من الصفوف. وماذا عن الخلايا القابلة للقسمة على أرقام أخرى؟

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };

    .overflow-wrap: .pascal-grid.small(style="width: 760px")
      - var i = 0;
      while i < 25
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            if b > 99999
              .c: span.small= b
            else
              .c= b
            - j += 1;
        - i += 1;
      .pascal-buttons
        button.btn.btn-red(data-value="2") Divisible by 2
        button.btn.btn-blue(data-value="3") Divisible by 3
        button.btn.btn-green(data-value="4") Divisible by 4
        button.btn.btn-yellow(data-value="5") Divisible by 5

---
> id: modular-2

::: column.grow

رائع! تظهر الخلايا الملونة دائمًا في [[مثلثات|مربعات|أزواج]] (باستثناء بعض الخلايا الفردية ، والتي يمكن رؤيتها كمثلثات بالحجم 1).

إذا واصلنا نمط الخلايا القابلة للقسمة على 2 ، نحصل على خلية مشابهة جدًا __لمثلث سيربينسكي__ على اليمين. تسمى مثل هذه الأشكال ، التي تتكون من نمط بسيط يبدو أنه يستمر إلى الأبد مع صغره وأصغره ، [__فركتلات__](gloss:fractal). سوف تتعلم المزيد عنها في المستقبل ...

::: column.width(280)

    img(src="images/sierpinski.svg" width=280 height=243 alt="Sierpinski Triangle")
    p.caption مثلث سيربينسكي

:::

---
> id: pascal-binomial

### المعاملات ذات الحدين

هناك خاصية أخرى مهمة لمثلث باسكال يجب أن نتحدث عنها. لفهمها ، سنحاول حل نفس المشكلة بطريقتين مختلفتين تمامًا ، ثم نرى كيف ترتبط.

{.todo} قريبًا

---

## الحدود والتقارب

> section: convergence
> sectionStatus: dev
> id: convergence-intro

{.todo} قريبًا
