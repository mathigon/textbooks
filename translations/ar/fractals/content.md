# فركتلات

## مقدمة

> section: introduction
> id: intro
> trailer: ohygDnKg5mg
> color: "#8032AD"
> level: Advanced
> next: chaos

عند النظر حول الطبيعة ، ربما لاحظت نباتات معقدة مثل هذه:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} يتكون هذا __السرخس__ من العديد من الأوراق الصغيرة التي تتفرع من أكبر.

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} يتكون __Romanesco broccoli__ من [[مخاريط|خسم كروي|المكعبات]] أصغر تدور حول واحدة أكبر.

:::

{.reveal(when="blank-0")} في البداية ، تبدو هذه الأشكال معقدة للغاية - ولكن عندما تنظر عن قرب ، قد تلاحظ أن كلاهما يتبع نمطًا بسيطًا نسبيًا: تبدو جميع [الأجزاء الفردية](target:fractal) للنباتات تمامًا مثل كامل النبات ، أصغر فقط. يتم تكرار نفس النمط مرارًا وتكرارًا بمقاييس أصغر. [متابعة](btn:next)

---

> id: fern

في الرياضيات ، نسمي هذه الخاصية __تشابه ذاتي__ ، والأشكال التي تسمى [__فركتلات__](gloss:fractal). هم بعض من أجمل وأجمل الأشياء في كل الرياضيات.

لإنشاء الفركتلات الخاصة بنا ، يجب أن نبدأ بنمط بسيط ثم نكرره مرارًا وتكرارًا بمقاييس أصغر.

::: column.grow

قد يكون أحد أبسط الأنماط هو [{.pill.red} مقطع سطر](target:s1) ، مع [{.pill.blue} مقطعين آخرين](target:s2) يتفرعان من طرف واحد. إذا كررنا هذا النمط ، فسيكون لكل من هذه الأجزاء الزرقاء فرعين آخرين في نهايتيهما.

يمكنك تحريك [النقاط الزرقاء](target:dot) لتغيير طول جميع الفروع وزاويتها. ثم قم بزيادة عدد التكرارات باستخدام [شريط التمرير](->#fern-slider) أدناه.

{.reveal(when="slider-0")} بناءً على موضع الفروع ، يمكنك عمل أنماط مختلفة تمامًا - تبدو مثل [السرخس](action:set(130,228,197,184)) أعلاه ، أو [شجرة](action:set(160,186,200,186)) ، أو [خماسي متداخلة](action:set(113,235,232,238)). ماذا يمكنك أن تجد؟ [متابعة](btn:next)

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

فركتات اخقرة هو[مثلث سيربينسكس ](gloss:sierpinski-triangle) . في هذه الحالة ، نبدأ بمثلث كبير متساوي الأضلاع ، ثم نقطع بشكل متكرر المثلثات الأصغر من الأجزاء المتبقية.

{.reveal(when="slider=0")} لاحظ كيف يتكون الشكل النهائي من [ثلاث نسخ متطابقة منه](target:x) ، وكل منها تتكون من نسخ أصغر من المثلث بأكمله! يمكنك الاستمرار في تكبير المثلث إلى الأبد ، وستستمر الأنماط والأشكال في التكرار دائمًا.

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

تبدو النباتات في بداية هذا الفصل _حقيقية_ في الحياة الواقعية. إذا واصلنا تكرار نفس النمط مرارًا وتكرارًا ، أصغر وأصغر ، فسنصل في النهاية إلى الخلايا أو الجزيئات أو الذرات التي لم يعد من الممكن تقسيمها.

ومع ذلك ، باستخدام الرياضيات ، يمكننا التفكير في الخصائص التي قد يمتلكها الفركتلات الحقيقية - وهذه مفاجأة جدًا… [متابعة](btn:next)

---
> id: dimension

### أبعاد الفراكتل

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

أولاً ، دعونا نفكر في أبعاد الفركتلات. للخط بُعد [[1]]. _{span.reveal(when="blank-0")} عند قياسه بعامل 2 ، يزيد طوله بعامل `2^1 = 2`. من الواضح!_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

المربع له أبعاد [[2]]. _{span.reveal(when="blank-0")} عند قياسه بعامل 2 ، تزداد مساحته بعامل `2^2 =` [[4 ]]._

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

المكعب له أبعاد [[3]]. _{span.reveal(when="blank-0")} عند قياسه بعامل 2 ، يزداد حجمه بعامل `2^3 =` [[8]]._ _{span.reveal(when="blank-1")} لاحظ أن المكعب الأكبر في الصورة يتكون من 8 نسخ من النسخة الأصغر!_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

الآن دعونا نلقي نظرة على مثلث سيربينسكي. إذا قمنا بقياسها بعامل 2 ، يمكنك أن ترى أن "المساحة" تزداد بعامل [[3]].

{.reveal(when="blank-0")} فلنفترض أن _d_ هو بُعد مثلث  سيربينسكي. باستخدام نفس النمط أعلاه ، نحصل على `2^d = 3`. بمعنى آخر ، _يوم_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} ≈ 1.585…_

:::

---
> id: dimension-4

ولكن انتظر ... كيف يمكن أن يكون لشيء بعد ليس عددًا صحيحًا؟ يبدو الأمر مستحيلًا ، لكن هذه ليست سوى واحدة من الخصائص الغريبة للفركتلات. في الواقع ، هذا هو ما يعطي الكسور اسمها: لديهم __بعد كسري__.

مع كل تكرار ، نزيل بعض مساحة مثلث سيربينسكي. إذا تمكنا من فعل ذلك بشكل لا نهائي عدة مرات ، فلن تكون هناك مساحة متبقية في الواقع: لهذا السبب فإن مثلث سيربينسكي هو شيء بين منطقة ثنائية الأبعاد وخط أحادي البعد.

::: .theorem

في حين أن العديد من الفركتلات _متشابهة ذاتيًا_ ، فإن التعريف الأفضل هو أن __الفركتلات__ هي أشكال لها __بُعد غير صحيح__.

:::

[متابعة](btn:next)

---

> id: snowflake

### كوخ ندفة الثلج

هناك العديد من الأشكال في الطبيعة التي تبدو مثل الفركتلات. لقد رأينا بالفعل بعض النباتات في بداية هذا الفصل. من الأمثلة الرائعة الأخرى رقاقات الثلج وبلورات الثلج:

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

لإنشاء ندفة ثلجية كسورية خاصة بنا ، يتعين علينا مرة أخرى إيجاد إجراء بسيط يمكننا تطبيقه مرارًا وتكرارًا.

::: column.grow

مثل مثلث سيربينسكي ، لنبدأ بمثلث واحد متساوي الأضلاع. ومع ذلك ، بدلاً من _إزالة_ مثلثات أصغر في كل خطوة ، _نضيف_ مثلثات أصغر على طول الحافة. الطول الجانبي لكل مثلث هو [[`1/3`|`1/4`|`1/2`]] من المثلثات في الخطوة السابقة.

{.reveal(when="blank-0")} يسمى الشكل الناتج[ــكخفةلثلخ](gloss:koch-snowflake) ، والتي تحمل اسم عالم الرياضيات السويدي [هيلج فون كوخ](bio:koch). لاحظ مرة أخرى أن [أجزاء صغيرة](target:t2) من حافة ندفة الثلج تبدو تمامًا مثل [أقسام أكبر](target:t1).

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

عندما نقوم بقياس جزء حافة واحدة من كوخ ندفة الثلج بمعامل 3 ، يبلغ طوله [[أربعة أضعاف|ثلاثة أضعاب|ضعفين]].

{.reveal(when="blank-0")} باستخدام نفس العلاقة بين الأبعاد وعوامل القياس الموضحة أعلاه ، نحصل على المعادلة [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]]. _{span.reveal(when="blank-1")} وهذا يعني أن بُعد كوخ ندفة الثلج هو `§d = log_3(4) ≈ 1.262`._

:::

---

> id: koch-size

::: tab

#### المساحة _{span.check(when="blank-6")}_

يشبه إنشاء رقائق كوخ الثلجية [تسلسلًا تعاوديًا](gloss:sequence-recursive): فنحن نعرف شكل البداية (مثلث) ونعرف كيفية الانتقال من مصطلح إلى آخر (بإضافة المزيد من المثلثات على كل حافة):

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] مثلثات جديدة

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] مثلثات جديدة

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]] مثلثات جديدة

:::

{.reveal(when="blank-0 blank-1 blank-2")} بعد التكرار الأول ، يزداد عدد المثلثات الجديدة المضافة بمقدار [[4]] في كل خطوة. في الوقت نفسه ، تقل مساحة هذه المثلثات الجديدة بمعامل [[9]] في كل خطوة.

{.reveal(when="blank-3 blank-4")} لنفترض أن [المثلث الأول](->#koch-0) تبلغ مساحته 1. ثم تبلغ المساحة الإجمالية لـ [المثلثات الثلاثة التالية](->#koch-1) هي `3 × 1/9 = 1/3`. تشكل جميع الخطوات التالية [[سلسلة هندسية|سلسلة حسابي|سلسلة معدلة تربيعية]] ، _{span.reveal(when="blank-5")} بنسبة مشتركة [[`4/9`|`9/4`|`4/3`]]._

{.reveal(when="blank-6")} باستخدام صيغة مجموع [سلسلة هندسية](gloss:geometric-series) غير محدودة ، يمكننا حساب أن المساحة الإجمالية لثلج ندفة الثلج هي

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`.

::: tab

#### المحيط _{span.check(when="blank-9")}_

::: column.grow

يمكننا أيضًا محاولة حساب محيط ندفة الثلج كوخ. كما رأينا من قبل ، يتغير طول المحيط بعامل [[`4/3`|`3/4`|`1/4`]] في كل خطوة.

{.reveal(when="blank-8")} هذا يعني أنه لدينا مرة أخرى سلسلة هندسية - ولكن في هذه الحالة [[لا تتقارب|تتقارب الى سفر|ليس لة مصطلح آو]]. _{span.reveal(when="blank-9")} وهذا يعني أن محيط ندفة الثلج كوخ هو في الواقع __طويل بلا حدود__!_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _إذا كان هذا يبدو غير بديهي ، فتذكر أننا نضرب المحيط في `§4/3` في كل خطوة ، ونقوم بذلك بشكل لا نهائي عدة مرات._

:::

---

> id: frozen

::: column.grow

لا يمكن التفكير تقريبًا في أنه يمكنك الحصول على شكل بمساحة _محدودة_ وأيضًا محيط _غير محدود_ - ولكن هذه ليست سوى واحدة من العديد من الخصائص غير المتوقعة للفركتلات.

هل يمكنك التوصل إلى أي طرق أخرى لإنشاء فركتلات خاصة بك؟ [متابعة](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} "روحي تتصاعد على فركتلات مجمدة في كل مكان ..."

:::

---

> id: menger-sponge

### إسفنجة مينجر

لا يجب أن تكون صور الكسيريات "مسطحة" ، مثل العديد من الأمثلة أعلاه. إحدى أشهر الفركتلات التي تبدو ثلاثية الأبعاد هي __إسفنجة مينجر__ ، التي سميت باسم عالم الرياضيات [كارل مينجر](bio:menger) الذي وصفها لأول مرة في عام 1926.

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

نبدأ بمكعب صلب ، ونقوم بشكل متكرر بحفر ثقوب أصغر وأصغر في جوانبها. كل تكرار جديد للثقوب له [[`1/3`|`1/2`|`1/4`]] عرض التكرار السابق للثقوب.

{.reveal(when="blank-0")} يتكون المكعب `3×3×3` من 27 مكعبًا أصغر حجمًا ، ولكن هنا أزلنا بعضًا منها. تتكون إسفنجة مينج من [[20]] نسخة من نفسها ، وهي أصغر 3 مرات.

{.reveal(when="blank-1")} الآن يمكننا محاولة حساب البُعد _d_ من الإسفنج مينحر تمامًا كما فعلنا مع كوج
خ ندفة الثلج أعلاه. في هذه الحالة نحصل على `3^d = 20` أو `§d = log_3(20) ≈ 2.727`.

:::

{.reveal(when="blank-1")} إذا كنت تتخيل قطع المزيد والمزيد من الثقوب ، بشكل لا نهائي عدة مرات ، فلن يتبقى حجم فعلي. هذا هو السبب في أن المكعب ثلاثي الأبعاد "ليس تمامًا"! [متابعة](btn:next)

---

> id: coastlines

### الخطوط الساحلية الفراكتالية

واحدة من الخصائص الرئيسية لجميع الفركتلات التي رأيناها حتى الآن هي أنه يمكنك "التكبير" إلى الأبد والعثور دائمًا على أنماط جديدة. في حوالي عام 1920 ، أدرك عالم الرياضيات البريطاني لويس فراي [ريتشاردسون](bio:richardson) أن الشيء نفسه ينطبق على الحدود أو الخط الساحلي للعديد من البلدان.

تبدأ بالشكل الأساسي للبلد ، وعند التكبير ، تقوم بإضافة مداخل الأنهار والخلجان ومصبات الأنهار ، ثم المنحدرات والصخور والحصى الفردية وما إلى ذلك:

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

[متابعة](btn:next)

---

> id: coastlines-1

::: column.grow

هذه مشكلة كبيرة عند محاولة حساب طول حدود بلد ما - كيف تقرر مدى التكبير ، وأي الزوايا والشقوق التي يجب تضمينها؟

إحدى الطرق التي يمكننا من خلالها قياس طول السواحل البريطانية ، على سبيل المثال ، هي أخذ مسطرة طويلة ، والمشي على طول الطريق حول شواطئها ، ثم جمع كل المسافات.

إذا كان طول المسطرة ${rulers[index]}{index|0|0,8,1} كم ، فيجب أن نستخدمها ${count} مرة ، لذا نحصل على خط ساحلي إجمالي ${count} × ${rulers[index]} = ${count * rulers[index]} كم.

{.reveal(when="var-0")} يمكننا فقط الاستمرار مع الحكام الأصغر والأصغر ، وفي كل مرة ستصبح نتيجتنا على طول الخط الساحلي أطول قليلاً. تمامًا مثل كوخ ندفة الثلج من قبل ، يبدو أن الساحل البريطاني طويل جدًا! غالبًا ما يطلق عليه __مفارقة الخط الساحلي__. [متابعة](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

بعد عقود قليلة ، تعثر عالم الرياضيات [بنوا ماندميروت](bio:mandelbrot) في عمل ريتشاردسون في كتاب مكتبة مهمل ، أثناء عمله في IBM. لقد أدرك أهميته ، وكذلك كيفية ارتباطه بأبحاث أحدث حول الفركتلات والأبعاد.

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

من المؤكد أن الخط الساحلي لبريطانيا "يبدو" كسورية ، لكنه ليس _مشابهًا لنفسه_ ، مثل صور النمطي هندسي متكرر أخرى رأيناها من قبل. من أجل العثور على حجمه ، يمكننا رسمه على شبكة وحساب عدد الخلايا التي يتقاطع معها.

{.r.reveal(when="slider-0")} في البداية ، هناك __{.pill.yellow} 88__ خلايا متقاطعة. إذا قمنا بقياس الخط الساحلي بمعامل 2 ، فهناك __{.pill.yellow} 197__ من الخلايا المتقاطعة - أكثر من ضعف العدد! [متابعة](btn:next)

{.r.reveal(when="next-0")} زاد حجم الخط الساحلي بمعامل `§197/88`. كما كان من قبل ، هذا يعني أن أبعاد الخط الساحلي

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---

> id: coastline-dimension-1

إذا كررنا ذلك بشبكات أكبر ، فسنجد أن بُعد الخط الساحلي لبريطانيا يبلغ تقريبًا 1.21. أدرك ماندلبروت أن هذا البعد الكسري هو أيضًا مقياس __خشونة__ الشكل - مفهوم جديد ، وجد له تطبيقات مهمة في العديد من المجالات الأخرى للرياضيات والعلوم.

---

> id: nature

### المزيد مر الفركتلات في الطبيعة و التكنولوجيا

في حين أن الفركتلات الحقيقية لا يمكن أن تظهر في الطبيعة أبدًا ، هناك العديد من الأشياء التي تبدو _تقريبًا_ مثل الفركتلات. لقد رأينا بالفعل النباتات والثلج والخطوط الساحلية ، وإليك بعض الأمثلة الأخرى:

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption} سلسلة جبال في آسيا الوسطى

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption} دلتا نهر الغانج في الهند

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption} صواعق البرق

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption} أوعية دموية في الشبكية

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption} جراند كانيون في الولايات المتحدة الأمريكية

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption} غيوم

:::

قد تظهر جميع هذه الأشياء بشكل عشوائي تمامًا ، ولكن ، تمامًا مثل الفركتلات ، هناك نمط أساسي يحدد كيفية تكوينها. يمكن أن تساعدنا الرياضيات على فهم الأشكال بشكل أفضل ، ولدى الفركتلات تطبيقات في مجالات مثل الطب والبيولوجيا والجيولوجيا والأرصاد الجوية. [متابعة](btn:next)

---

> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption} تضاريس صورية تم إنشاؤها بواسطة الكمبيوتر

::: column.grow

يمكننا أيضًا استخدام صور النمطي هندسي متكرر لإنشاء "نسخ" واقعية من الطبيعة ، على سبيل المثال ، كمناظر طبيعية وقوام يستخدم في ألعاب الفيديو أو الأفلام التي يتم إنشاؤها بواسطة الكمبيوتر. المياه والجبال والسحب في هذه الصورة مصنوعة بالكامل بواسطة جهاز كمبيوتر بمساعدة صور النمطي هندسي متكرر!

ويمكننا أيضًا عكس هذه العملية لضغط الصور الرقمية ، لتقليل حجم ملفها. تم تطوير الخوارزميات الأولى من قبل مايكل بارنسلي وألان سلون في الثمانينيات ، ولا تزال خوارزميات جديدة قيد البحث اليوم.

:::

---

## مثلث سيربينسكي

> section: sierpinski
> id: sierpinski

::: column.grow

أحد الفركتلات التي رأيناها في الفصل السابق كان [__مثلث سيربينسكي__](gloss:sierpinski-triangle) ، والذي سمي على اسم عالم الرياضيات البولندي [Wacław Sierpiński](bio:sierpinski). يمكن إنشاؤه من خلال البدء بمثلث كبير متساوي الأضلاع ، ثم قطع المثلثات الأصغر من مركزه بشكل متكرر.

{.r.reveal(when="slider-0")} Wacław Sierpiński كان أول علماء الرياضيات يفكرون في خصائص هذا المثلث ، لكنه ظهر قبل ذلك بقرون عديدة في الأعمال الفنية والأنماط والفسيفساء.

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: sierpinski-history

فيما يلي بعض الأمثلة على بلاط الأرضية من كنائس مختلفة في روما:

::: column(width=140 parent="padded-thin")

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire")

:::

كما اتضح ، يظهر مثلث سيربينسكي في مجموعة واسعة من المجالات الأخرى للرياضيات ، وهناك العديد من الطرق المختلفة لتوليدها. في هذا الفصل ، سوف نستكشف بعضها! [متابعة](btn:next)

---

> id: pascal
> goals: select

### مثلث باسكال

قد تتذكر بالفعل مثلث سيربينسكي من فصلنا على [__مثلث باسكال__](gloss:pascals-triangle). هذا هرم عدد فيه كل رقم هو مجموع الرقمين أعلاه. انقر على جميع الأرقام _حتى_ في المثلث أدناه ، لتمييزها - ومعرفة ما إذا لاحظت نمطًا:

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

يمكن أن يستمر مثلث باسكال إلى أسفل إلى الأبد ، وسيستمر نمط سيربينسكي بمثلثات أكبر وأكبر. يمكنك بالفعل رؤية بداية مثلث أكبر ، بدءًا من الصف 16.

إذا كانت هناك خليتان متجاورتان قابلتان للقسمة على 2 ، فيجب أن يكون مجموعهما في الخلية الموجودة أسفله قابلاً للقسمة على 2 - ولهذا السبب لا يمكننا الحصول إلا على مثلثات ملونة (أو خلايا مفردة). بالطبع يمكننا أيضًا محاولة تلوين جميع الخلايا القابلة للقسمة على الأرقام _بخلاف 2_. ما رأيك سيحدث في تلك الحالات؟ [متابعة](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

هنا يمكنك أن ترى نسخة صغيرة من أول 128 صفًا من مثلث باسكال. لقد سلطنا الضوء على جميع الخلايا القابلة للقسمة على ${n}{n|2|2,40,1} - ماذا تلاحظ؟

{.reveal(when="var-0")} لكل رقم ، نحن نمط مثلث مختلف مشابه لمثلث Sierpinski. يكون النمط عاديًا بشكل خاص إذا اخترنا [[رقم أولي|triangle number|Fibonacci number]]. _{span.reveal(when="blank-0")} إذا كان الرقم يحتوي على _العديد من العوامل الرئيسية_ المختلفة ، فإن النمط يبدو أكثر عشوائية._

    x-gesture(target="#pascal-large x-var" slide="100,0")

---

> id: chaos-game
> goals: point play

### لعبة الفوضى

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

هنا يمكنك أن ترى القمم الثلاثة لمثلث متساوي الأضلاع. انقر في أي مكان في المنطقة الرمادية لإنشاء نقطة رابعة.

{.r.reveal(when="point")} هيا نلعب لعبة بسيطة: نختار أحد رؤوس المثلث بشكل عشوائي ، ونرسم مقطع خط بين نقطتنا والرأس ، ثم نعثر على [{.pill.red} نقطة المنتصف](target:p1) من ذلك المقطع. [متابعة](btn:next)

{.r.reveal(when="next-0")} الآن نكرر العملية: نختار قمة عشوائية أخرى ، ونرسم المقطع من نقطتنا الأخيرة ، ثم نعثر على نقطة المنتصف [{.pill.green}](target:p2). لاحظ أننا نقوم بتلوين هذه النقاط الجديدة استنادًا إلى لون قمة المثلث الذي اخترناه. [متابعة](btn:next)

{.reveal(when="next-1")} حتى الآن ، لم يحدث شيء مفاجئ - ولكن شاهد بينما نكرر نفس العملية عدة مرات:

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} أضف 1000 خطوة_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

تسمى هذه العملية __لعبة الفوضى__. قد تكون هناك بعض النقاط الضالة في البداية ، ولكن إذا كررت نفس الخطوات عدة مرات ، يبدأ توزيع النقاط في الظهور تمامًا مثل مثلث Sierpinski!

هناك العديد من الإصدارات الأخرى - على سبيل المثال ، يمكن أن نبدأ بمربع أو خماسي ، يمكننا إضافة قواعد إضافية مثل عدم القدرة على تحديد نفس الرأس مرتين على التوالي ، أو يمكننا اختيار النقطة التالية بنسبة بخلاف `§1/2` بطول المقطع. في بعض هذه الحالات ، سنحصل فقط على توزيع عشوائي للنقاط ، ولكن في حالات أخرى ، نكشف عن المزيد من الفركتلات:

    include components/chaos-game

{.reveal(when="s1 s2 play")} هل اكتشفت [سجادة سيربينسكي](action:carpet()) أو [ندفة الثلج الخماسية](action:snowflake()) بناءً على [__النسبة الذهبية__](gloss:golden-ratio)؟

---

> id: cellular
> goals: sierpinski

### الأتمتة الخلوية

__الأوتار الخلوية__ عبارة عن شبكة تتكون من العديد من الخلايا الفردية. يمكن أن تكون كل خلية في "حالات" مختلفة (مثل ألوان مختلفة) ، ويتم تحديد حالة كل خلية من خلال الخلايا المحيطة بها.

في مثالنا ، يمكن أن تكون كل خلية إما سوداء أو بيضاء. نبدأ بصف واحد يحتوي فقط على مربع أسود واحد. في كل صف تالٍ ، يتم تحديد لون كل خلية بواسطة الخلايا الثلاث المذكورة أعلاه مباشرةً. انقر على الخيارات الثمانية الممكنة أدناه لقلب لونها - هل يمكنك العثور على مجموعة من القواعد التي تنشئ نمطًا مشابهًا لمثلث Sierpinski؟

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} هناك خياران لكل خيار من الخيارات الثمانية ، مما يعني أن هناك `2^8 =` [[256]] قاعدة محتملة في المجموع. البعض ، مثل [القاعدة 126](action:setRule('01111110')) ، يشبه مثلث سيربينسكي. البعض الآخر ، مثل [القاعدة 30](action:setRule('01111000')) ، تبدو فوضوية تمامًا. تم اكتشافه بواسطة [Stephen Wolfram](bio:wolfram) في عام 1983 ، ويمكن لأجهزة الكمبيوتر استخدامها حتى لإنشاء أرقام عشوائية!

---

> id: cellular-1

::: column.grow

تُظهر الأتمتة الخلوية كيف يمكن إنشاء أنماط معقدة للغاية بواسطة قواعد بسيطة جدًا - تمامًا مثل الفركتلات. تتبع العديد من العمليات في الطبيعة أيضًا قواعد بسيطة ، ولكنها تنتج أنظمة معقدة بشكل لا يصدق.

في بعض الحالات ، يمكن أن يؤدي ذلك إلى ظهور أنماط تشبه تمامًا الأتمتة الخلوية ، على سبيل المثال الألوان الموجودة على غلاف هذا الحلزون.

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} نسيج كونوس ، حلزون البحر السام

:::

---

> id: tetrahedra

### سيربينسكي تتراهيدرا

هناك العديد من المتغيرات لمثلث سيربينسكي ، وبعض الفركتلات الأخرى التي لها خصائص مشابهة وعمليات الإنشاء. تبدو بعضها ثنائية الأبعاد ، مثل _سجادة سيربينسكي_ التي رأيتها أعلاه. البعض الآخر يبدو ثلاثي الأبعاد ، مثل هذه الأمثلة:

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} سيربينسكي تتراهيدرا

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} هرم سيربينسكي

:::

---

## مجموعة ماندلبروت

> section: mandelbrot
> id: iteration
> goals: move-1 move-2

تم إنشاء جميع الفركتلات التي رأيناها في الفصول السابقة باستخدام عملية __التكرار__: تبدأ بنمط محدد ، ثم تكرره مرارًا وتكرارًا.

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

هذا مشابه لمفهوم آخر في الرياضيات رأيته من قبل: مع [التسلسلات العودية](gloss:sequence-recursive) ، تبدأ برقم معين ، ثم تقوم بتطبيق نفس الصيغة العودية ، مرارًا وتكرارًا ، للحصول على الرقم التالي في تسلسل.

لنأخذ الصيغة العودية `§x_n = x_(n-1)^2` كمثال ونرسم مصطلحاتها على سطر رقمي. يمكنك تغيير قيمة `pill(x_0,"yellow","x0")`:

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

لاحظ كيف يمكن أن يتصرف التسلسل الناتج بشكل مختلف جدًا ، اعتمادًا على قيمة البداية `x_0`:

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

إذا كان `x_0 > 1` ، فإن التسلسل [[يتباعد|يتقارب]] : _{span.reveal(when="blank-0")} يستمر في النمو ، حتى اللانهاية._

::: column.frame.f-blue.text-center(width=212)

إذا كان `x_0` بين –1 و 1 ، فإن التسلسل [[يتقارب|يتباعد]].

::: column.frame.f-blue.text-center(width=212)

إذا كان `x_0 < -1` ، فإن التسلسل [[يتباعد|يتقارب]].

:::

---

> id: iteration-2

حتى الآن ، لم نتعلم أي شيء جديد. ومع ذلك ، منذ ما يقرب من قرن ، بدأ علماء الرياضيات في استكشاف ما يحدث لهذه التسلسلات إذا كنت تستخدم [__أرقامًا معقدة__](gloss:complex-numbers) ، بدلاً من مجرد سطر الأعداد الحقيقية. كانت اكتشافاتهم من أكثر النتائج المفاجئة والجميلة في جميع الرياضيات.

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### مجموعات جوليا

لنستخدم نفس التسلسل كما كان من قبل ، `§x_n = x_(n-1)^2` ، ولكن على المستوى المعقد. يمكنك تحريك مركز `pill(x_0,"yellow","x0")` ، لمعرفة ما يحدث للمصطلحات التالية. إذا كان التسلسل يبدو أنه سيتقارب ، فلنقم بتلوين النقطة المقابلة على المستوى باللون _{span.pill.blue} الأزرق_:

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

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} كما ترى ، يتقارب التسلسل طالما أن `pill(x_0,"yellow","x0")` تقع [[داخل دائرة الوحدة| خارج ميدان الوحدة|فوق x-axis]] _{span.reveal(when="blank-0")}_ (الدائرة ذات نصف القطر 1 ، متمركزة في الأصل).

---

> id: julia-1

الآن دعونا نجعل الأمور أكثر صعوبة. بدلاً من مجرد تربيع الرقم السابق ، نضيف أيضًا ثابتً `pill(c,"red","c")` ج_ في كل مرة (والذي يمكن أن يكون أي رقم مركب). وبعبارة أخرى ، `§x_n = x_(n-1)^2 + c`. هل تعتقد أننا ما زلنا نحصل على دائرة التقارب؟ ما الأشكال الأخرى التي تعتقد أننا قد نراها؟ [متابعة](btn:next)

---

> id: julia-2

في هذا الرسم البياني ، يمكنك تحريك موضع `pill(x_0,"yellow","x0")` بالإضافة إلى قيمة `pill(c,"red","c")`:

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

{div(slot="legend")} نحن نعلم بالفعل ما يحدث إذا [`c = 0`](action:animate(0,0)) - هذا هو نفس المثال أعلاه. تقارب التسلسل طالما أن `x_0` تقع داخل دائرة الوحدة.

{div(slot="legend")} بمجرد تغيير قيمة _c_ ، يحدث شيء رائع. تتحول الدائرة إلى شكل كسوري معقد للغاية.

{div(slot="legend")} عندما [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)) ، ينقسم الشكل إلى عدد لا نهائي من العناصر الدقيقة مرتبة بشكل حلزوني.

::: div(slot="legend")

في بعض الحالات ، لا يتقارب التسلسل إلى _نقطة مفردة_ - بدلاً من ذلك يصل إلى دورة من نقاط متعددة ، مثل المثلث. تسمى هذه الدورات __مدارات__.

النقاط الملونة باللون الأزرق تعني أن التسلسل المقابل إما يتقارب أو يحتوي على مدار (نقول أنه __يحده__). تعني النقاط التي يتم تركها باللون الأبيض أن التسلسل المقابل __يختلف عن 591}: فهو غير مقيد ، وينفجر في النهاية إلى ما لا نهاية.

:::

{div(slot="legend")} ماذا يمكنك أن تجد؟ ألق نظرة على الأنماط عند [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) أو عند [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)). هناك أيضًا بعض قيم _c_ حيث يتباعد _كل_ تسلسل ، لذلك يظل السطح المعقد بأكمله أبيض.

:::

---

> id: julia-3

تسمى الأشكال المختلفة التي يتم تشكيلها عن طريق التلوين في الأرقام [__مجموعات جوليا__](gloss:julia-set). تم اكتشافها بشكل مستقل من قبل اثنين من علماء الرياضيات الفرنسيين ، [غاستون جوليا](bio:julia) و [بيير فاتو](bio:fatou) ، حوالي عام 1918.

في ذلك الوقت ، لم تكن هناك أجهزة كمبيوتر للمساعدة في تصور شكل مجموعات جوليا. كان علماء الرياضيات مثل جوليا و فاتو قادرين على التفكير في الرياضيات رياضياً ، لكنهم لم يروا سوى رسومات تقريبية مرسومة باليد لما قد يبدو عليه.

ليس لدينا هذه المشكلة اليوم - الصور أدناه كلها من مجموعات جوليا المختلفة. تشير الألوان المختلفة إلى _مدى اختلاف_ التسلسل عند هذه النقطة:

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

[متابعة](btn:next)

---

> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### مجموعة ماندلبروت

عند إنشاء مجموعات جوليا المختلفة ، ربما لاحظت وجود بعض قي_c_جالتي يختلف فيها كل تسلسل ، ويظل المستوى المعقد بأكمله أبيض. بعد عقود قليلة من جوليا و فاتو ، حاول جيل جديد من علماء الرياضيات رسم خريطة لهذه المناطق.

في المثال السابق ، اخترنا قيمة ثابتة لـ `pill(c,"red","c")` ، ثم قمنا بتغيير موضع `pill(x_0,"yellow","x0")` لتلوين المستوى. فلنصلح الآن قيمة `pill(x_0 = 0,"yellow","x0")` ، وبدلاً من ذلك نغير قيمة `pill(c,"red","c")`.

مرة أخرى ، قم بالطلاء فوق المستوى المعقد لكشف المنطقة التي تظل فيها التسلسلات مقيدة. ما الأشكال التي تتوقع ظهورها؟

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

يسمى هذا الفراكتل [__مجموعة ماندلبروت__](gloss:mandelbrot-set) ، وعندما يدور بزاوية 90 درجة ، يبدو تقريبًا مثل الشخص ، مع الرأس والجسم والذراعين. تم تعريفه ورسمه لأول مرة في عام 1978 ، في ورقة بحثية من قبل علماء الرياضيات روبرت بروكس وبيتر ماتلسكي:

    figure: x-img(src="images/mandelbrot.jpg" width=360 height=290 credit="© Princeton University Press")

بعد بضع سنوات ، استخدم [Benoit Mandelbrot](bio:mandelbrot) أجهزة الكمبيوتر القوية في IBM لإنشاء تصور أكثر تفصيلاً للفراكتل ، والذي تم تسميته فيما بعد. بدت المطبوعات الأولى مختلفة عما توقعه - حتى أدرك أن الفنيين العاملين في الطابعات كانوا ينظفون "الضبابية" حول حافتها ، بافتراض أن سببها جزيئات الغبار أو أخطاء الطابعة ، وليس سمة مميزة للفركتلات ! [متابعة](btn:next)

---

> id: mandel-zoom

مثل جميع صور النمطي هندسي متكرر ، يمكننا "تكبير" مجموعة ماندلبروت إلى الأبد ، وإيجاد أنماط جديدة على كل مقياس. هنا يمكنك تكبير جزء من مجموعة  ماندلبروت يسمى __Seahorse Valley__. النقاط السوداء هي _داخل_ مجموعة ماندلبروت ، حيث يكون التسلسل مقيدًا. النقاط الملونة هي _خارج_ مجموعة ماندلبروت ، حيث يتباعد التسلسل ، وتشير الألوان المختلفة _إلى أي مدى_ ينمو بسرعة إلى ما لا نهاية:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---

> id: mandel-zoom-1

يتكون شريط التمرير هذا من 27 صورة فردية ، حتى مستوى تكبير يزيد عن 14 كوادريليون ، أو `2^54`. إجمالاً ، استغرق الأمر حوالي 45 دقيقة لعرضه على جهاز كمبيوتر محمول حديث. يمكن إنشاء مجموعة ماندلبروت باستخدام معادلة واحدة بسيطة ، `§x_n = x_(n-1)^2 + c` ، ومع ذلك فهي معقدة بشكل لا نهائي وجميلة بشكل مذهل.

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

أثناء تحريك قيمة [{.pill.red} c](target:c) حول مجموعة ماندلبروت ، قد تلاحظ خاصية غريبة:

* تتلاقى جميع التسلسلات داخل [الجسم الرئيسي](target:bulb0) ماندلبروت [[لمجموعة|diverge|reach an orbit]] _{span.reveal(when="blank-0")} إلى نقطة واحدة._
* {.reveal(when="blank-0")} تصل التسلسلات داخل [لمبة كبيرة](target:bulb1) في الأعلى [[إلى مدار|converge|diverge]] _{span.reveal(when="blank-1")} تتكون من [[3]] نقاط._
* {.reveal(when="blank-2")} التسلسلات في [هذا المصباح الأصغر](target:bulb2) لها مدارات بطول [[5]].

:::

{.reveal(when="blank-3")} يحتوي كل مصباح على مدار مختلف الحجم ، مع المصابيح الأصغر التي تحتوي على المزيد والمزيد من النقاط في مداراتها. يرتبط حجم هذه المدارات ارتباطًا وثيقًا بـ __خريطة لوجستية__ ، وهو مفهوم مهم في [نظرية الفوضى](/course/chaos).

---

> id: mandel-outro

::: column.grow

كرس برنويت ماندلبروت معظم حياته لدراسة الفركتلات ، بالإضافة إلى رياضيات _الخشونة_ و _التشابه الذاتي_. كان لعمله تطبيقات في الفيزياء والأرصاد الجوية وعلم الأعصاب والاقتصاد والجيولوجيا والهندسة وعلوم الكمبيوتر والعديد من المجالات الأخرى.

في عام 1985 ، ظهرت مجموعة ماندابروت على غلاف مجلة _Scientific American_ ، ومنذ ذلك الحين أصبحت واحدة من أكثر الأشكال الرياضية التي يمكن التعرف عليها في العالم. يمكنك العثور عليها على القمصان وفي مقاطع الفيديو الموسيقية وكحافظات للشاشة ، وقد تمت الإشارة إليها في العديد من الكتب والأفلام الشائعة.

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::

---

## منحنيات تعبئة الفضاء

> section: space-filling
> sectionStatus: dev

{.todo} قريبًا!
