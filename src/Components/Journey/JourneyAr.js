import React from "react";
import { useInView } from "react-intersection-observer";
// Reusable Step Component
const Step = ({ number, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensure it triggers only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col w-fit items-center transition-opacity duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-[97px] h-[97px] flex justify-center items-center bg-primary text-white rounded-full font-cairo text-[48px] font-semibold">
        {number}
      </div>
      <div className="text-center mt-4">
        <p className="max-[480px]:text-[42px] font-cairo font-bold text-[48px] leading-[1.2]">
          {title}
        </p>
        <p className="font-cairo mt-3 font-medium max-[480px]:text-[16px] text-[20px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const JourneyAr = () => {
  return (
    <section
      dir="rtl"
      id="Journey"
      className="pt-16 py-16 mt-[166px] container mx-auto px-4 relative"
    >
      {/* Title */}
      <h2 className="font-cairo max-[480px]:text-[42px] font-extrabold text-[48px] text-center mb-16">
        <span className="text-primary">رحلتك </span>
      </h2>

      {/* Relative Container for Steps */}
      <div className="relative max-[1025px]:min-h-[0px] min-h-[3000px]">
        {/* Adjust height appropriately */}
        {/* Center Vertical Line */}
        <div className="absolute hidden lg:block bg-black w-[2px] h-[2800px] left-1/2 transform -translate-x-1/2 top-0"></div>
        {/* Steps for Large Screens */}
        <div className="hidden lg:flex lg:relative">
          {/* Left Column Steps */}
          <div className="lg:absolute lg:left-0 lg:top-[200px] flex flex-col items-center gap-[450px]">
            <Step
              number="1"
              title={
                <>
                  تم استلام
                  <span className="text-primary"> الدفع</span>
                </>
              }
              description={
                <>
                  أهلاً بيك على متن الرحلة! هنبدأ <br />
                  <span className="text-primary">بتأكيد دفعك</span> <br />{" "}
                  وتحضير الأساس لرحلة تحولك.
                </>
              }
            />
            <Step
              number="3"
              title={
                <>
                  استشارة
                  <br />
                  <span className="text-primary">شخصية</span>
                </>
              }
              description={
                <>
                  بيتم تحديد مكالمة <br /> مدتها 20 دقيقة عشان نناقش
                  <span className="text-primary">
                    {" "}
                    التحديات والأهداف الخاصة بيك
                  </span>
                  ,
                  <br /> وده هيساعدنا نخصص لك{" "}
                  <span className="text-primary">خطة تدريب</span> و
                  <br /> <span className="text-primary">تغذية</span> أكثر{" "}
                  <span className="text-primary">فعالية</span>.
                </>
              }
            />
            <Step
              number="5"
              title={
                <>
                  التعديلات
                  <br />
                  <span className="text-primary">المنتظمة</span>
                </>
              }
              description={
                <>
                  بيتم تعديل الجدول كل 5-10 أيام <br />
                  بناءً على{" "}
                  <span className="text-primary">ملاحظاتك وتقدمك.</span>
                </>
              }
            />
          </div>

          {/* Right Column Steps */}
          <div className="lg:absolute lg:right-0 lg:top-[500px] flex flex-col items-center gap-[450px]">
            <Step
              number="2"
              title="الاستبيان"
              description={
                <>
                  وسهل هنبعتلك استبيان مفصل
                  <br />
                  عشان نفهم اهدافك و طبيعة يومك اكتر
                </>
              }
            />
            <Step
              number="4"
              title={
                <>
                  خطة
                  <span className="text-primary"> شخصية</span>
                  <br />
                  ليك
                </>
              }
              description={
                <>
                  هتستلم جدول تدريب وتغذية{" "}
                  <span className="text-primary">مخصص</span>
                  <br /> .لأسلوب حياتك
                </>
              }
            />
            <Step
              number="6"
              title={
                <>
                  الاستمرارية
                  <br />
                  <span className="text-primary">السر في النجاح</span>
                </>
              }
              description={
                <>
                  الاستمرارية هي أهم عامل, <br />
                  و احنا بنبقى جنبك خطوة بخطوة. <br />
                  يا ترى جاهز للرحلة؟
                </>
              }
            />
          </div>
        </div>
      </div>

      {/* Steps for Smaller Screens */}
      <div className="flex flex-col items-center gap-16 lg:hidden">
        <Step
          number="1"
          title={
            <>
              تم استلام
              <span className="text-primary"> الدفع</span>
            </>
          }
          description={
            <>
              أهلاً بيك على متن الرحلة! هنبدأ <br />
              <span className="text-primary">بتأكيد دفعك</span> <br /> وتحضير
              الأساس لرحلة تحولك.
            </>
          }
        />
        <Step
          number="2"
          title="الاستبيان"
          description={
            <>
              وسهل هنبعتلك استبيان مفصل
              <br />
              عشان نفهم اهدافك و طبيعة يومك اكتر
            </>
          }
        />
        <Step
          number="3"
          title={
            <>
              استشارة
              <br />
              <span className="text-primary">شخصية</span>
            </>
          }
          description={
            <>
              بيتم تحديد مكالمة <br /> مدتها 20 دقيقة عشان نناقش
              <span className="text-primary">
                {" "}
                التحديات والأهداف الخاصة بيك
              </span>
              ,
              <br /> وده هيساعدنا نخصص لك{" "}
              <span className="text-primary">خطة تدريب</span> و
              <br /> <span className="text-primary">تغذية</span> أكثر{" "}
              <span className="text-primary">فعالية</span>.
            </>
          }
        />
        <Step
          number="4"
          title={
            <>
              خطة
              <span className="text-primary"> شخصية</span>
              <br />
              ليك
            </>
          }
          description={
            <>
              هتستلم جدول تدريب وتغذية{" "}
              <span className="text-primary">مخصص</span>
              <br /> .لأسلوب حياتك
            </>
          }
        />
        <Step
          number="5"
          title={
            <>
              التعديلات
              <span className="text-primary"> المنتظمة</span>
              <br />
            </>
          }
          description={
            <>
              بيتم تعديل الجدول كل 5-10 أيام <br />
              بناءً على <span className="text-primary">ملاحظاتك وتقدمك.</span>
            </>
          }
        />
        <Step
          number="6"
          title={
            <>
              الاستمرارية
              <br />
              <span className="text-primary">السر في النجاح</span>
            </>
          }
          description={
            <>
              الاستمرارية هي أهم عامل, <br />
              و احنا بنبقى جنبك خطوة بخطوة. <br />
              يا ترى جاهز للرحلة؟
            </>
          }
        />
      </div>
    </section>
  );
};

export default JourneyAr;
