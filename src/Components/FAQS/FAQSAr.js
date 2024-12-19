import React, { useState } from "react";

const faqs = [
  {
    question: "إيه اللي بيميز الكوتشينج بتاعك عن غيره؟",
    answer:
      "إحنا بنركز على كل تفاصيل حياتك عشان نضمن إنك تحقق التحول اللي محتاجه. باهتم بالمحاسبة، تدريب العقلية، وبناء عادات مستدامة عشان تقدر توصل لنتائج طويلة المدى. كمان، هتكون معاك إمكانية التواصل المباشر معايا للدعم والتحفيز في أي وقت.",
  },
  {
    question:
      "لو جدول حياتي زحمة أو بسافر كتير، هل الكوتشينج بتاعك هيشتغل معايا؟",
    answer:
      "هدفي إني أخلي اللياقة البدنية تشتغل *لصالحك*، مش تضيف ضغط لحياتك. البرنامج بتاعنا مصمم عشان يناسب نمط حياتك، مهما كان مشغول أو متغير. بخطط تمارين ممكن تخلصها في 20-30 دقيقة، وتمارين مخصصة في البيت أو الفندق لو مسافر. وكمان مع التواصل المستمر والمتابعات المنتظمة، نقدر نعدل الخطة بسرعة عشان تناسب جدولك.",
  },
  {
    question: "محتاج قد إيه عشان أبدأ؟",
    answer:
      "بعد أول مكالمة تمهيدية نناقش فيها أي أسئلة عندك، هتستلم خطة التمرين والتغذية المخصصة ليك في أقل من 48 ساعة.",
  },
  {
    question: "هل لازم التزم ببرنامج طويل المدى؟",
    answer:
      "مش لازم خالص! إحنا بنوفر خيارات شهر بشهر، وتقدر تكمل طول ما حاسس إنك مستفيد. مع ذلك، معظم العملاء بيشوفوا نتايج بتحول حياتهم في التزام مدته 3 شهور على الأقل.",
  },
  {
    question: "هشوف نتايج في قد إيه؟",
    answer:
      "ده بيعتمد على نقطة البداية والأهداف بتاعتك. معظم العملاء بيلاحظوا تغييرات في الطاقة أو القوة أو الشكل خلال أول 2–3 أسابيع. النتايج طويلة المدى محتاجة مجهود مستمر، وإحنا هنشتغل مع بعض عشان تفضل على المسار الصحيح!",
  },
  {
    question: "هنكون بنكلم بعض إزاي؟",
    answer:
      "على حسب الباقة اللي اخترتها، هنكون بنتواصل عن طريق مكالمات فيديو أو واتساب فقط. **بضمن لك إني أكون دايمًا متواصل معاك** عشان تحس بالدعم طول الوقت.",
  },
  {
    question: "إيه شكل المتابعة المعتادة؟",
    answer:
      "خلال المتابعات، هنتكلم عن تقدمك، التحديات اللي بتواجهك، والأسئلة اللي عندك. هقدم ملاحظات وأعدل الخطة لو احتاجت، وهفضل أحفزك!",
  },
  {
    question: "كل قد إيه هتتحدث الخطة بتاعتي؟",
    answer:
      "خطط التغذية بتتحدث كل 7-10 أيام لو احتاجت. خطط التمرين بتتحدث شهريًا، بس لو حصل تقدم أو تغييرات في أهدافك، هنعمل تعديلات أسرع عشان تفضل على المسار الصحيح.",
  },
];

const FAQSAr = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="FAQS"
      dir="rtl"
      className=" mt-[166px] font-cairo text-black py-10 px-4 lg:px-16"
    >
      <h2 className="text-center text-4xl font-bold mb-8 text-primary">
        الأسئلة الشائعة
      </h2>
      <div className="max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 last:border-b-0">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <span className="text-2xl text-primary">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-600 text-[16px]">
                <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSAr;
