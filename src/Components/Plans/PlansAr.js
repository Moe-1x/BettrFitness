import React from "react";
import PlanCard from "./PlanCardAr";

const Plans = () => {
  const plansData = [
    {
      title: "الباقه الاساسيه",
      description: "وصل لهدفك مع دعم أساسي!",
      price: { "1 Month": 1500, "3 شهور": 3000 }, // Prices for 1 Month and 3 شهور
      buttonLabels: ["شهر", "3 شهور"],
      features: [
        "إجابة على أسئلتك على واتساب كل 48 ساعة!",
        "خطط تمرين مخصصة (في البيت والجيم)",
        "تحديث التمرين والتمارين كل 7 أيام حسب احتياجاتك",
        "نظام غذائي متقدم مبني على تحاليل معملية",
      ],
    },
    {
      title: "اكسترا كير",
      description: "محتاج دعم أو مساعدة أكتر؟ إحنا معاك خطوة بخطوة!",
      price: { "1 Month": 2500, "3 شهور": 5000 },
      buttonLabels: ["شهر", "3 شهور"],
      features: [
        "كل مزايا الباقة الأساسية",
        "مكالمتين فيديو شهريًا: للتحفيز والإرشاد في رحلتك!",
        "متابعة شخصية وزيادة الالتزام",
      ],
    },
    {
      title: "ايليت",
      description:
        "تمارين حصرية في الجيم، متابعة خاصة، وتجربة تحول صحية استثنائية.",
      price: { "3 شهور": 15000 }, // Only 3 شهور for this plan
      buttonLabels: ["3 شهور"],
      features: [
        "كل مزايا Extra-Care",
        "تمرين شخصي مرتين في الشهر",
        "رقم تليفون شخصي للمكالمات الطارئة",
        "توقيف لمده شهر",
      ],
      specialNote: "متاح فقط في القاهرة/الجيزة & 5 أماكن متبقيه",
    },
  ];

  return (
    <section dir="rtl" id="Plans" className=" py-16 container">
      <div className="mb-9 text-center max-[480px]:text-[42px] font-cairo font-extrabold text-[48px]">
        <span className="text-primary">Coaching </span>Plans
      </div>
      <div className="flex max-[1299px]:flex-col gap-8">
        {plansData.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            buttonLabels={plan.buttonLabels}
            features={plan.features}
            specialNote={plan.specialNote}
            isLastCard={index === plansData.length - 1}
            cardIndex={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Plans;
