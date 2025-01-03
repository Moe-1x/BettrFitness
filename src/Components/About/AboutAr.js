import React from "react";
import Images from "../../Images";
import { HashLink } from "react-router-hash-link";

const AboutAr = () => {
  return (
    <section
      id="About"
      dir="rtl"
      className="container mt-[166px] py-16 flex max-[970px]:flex-col max-[970px]:items-center"
    >
      <div className="relative max-[1025px]:before:hidden before:absolute before:w-full before:max-h-[632px] before:h-full max-[1355px]:before:hidden max-[1299px]:before:block  before:bg-primary before:-z-10 before:left-[3%] before:top-[3%] max-[970px]:hidden">
        <img
          draggable="false"
          className="min-h-[632px] max-[1299px]:rounded-none max-[1025px]:rounded-lg max-[970px]:mb-10 max-[970px]:w-screen max-[1355px]:rounded-lg min-w-[458px] max-[970px]:min-h-[400px] max-[970px]:min-w-[300px]"
          src={Images.aboutImage}
          alt="personal photo"
        />
      </div>
      <div className="flex justify-center flex-col mr-8 max-[970px]:mr-0 max-[970px]:items-center max-[970px]:text-center">
        <h2 className="font-cairo text-[48px] font-extrabold max-[970px]:text-[36px]">
          ليه تختار <span className="text-primary">تشتغل معايا؟</span>
        </h2>
        <ul className="flex flex-col max-[970px]:list-none max-[970px]:gap-3 gap-7 list-disc ml-6 mt-[22px] max-[970px]:ml-0">
          <li className="font-cairo font-bold text-[20px]">
            عندي شغف كبير بالرياضة، وخبرة متنوّعة في مجالات زي{" "}
            <span className="text-primary">
              الكاليسثينيكس، الكيك بوكسينج، والسباحة.
            </span>{" "}
            التجارب دي ساعدتني أكتسب فهم عميق لكيفية تحقيق التوازن بين{" "}
            <span className="text-primary">اللياقة البدنية والعقلية.</span>
          </li>
          <li className="font-cairo font-bold text-[20px]">
            مع خبرة أكتر من <span className="text-primary">10 سنين</span> في
            المجال، بأقدّم لك خطط تدريب مخصصة تساعدك على تحقيق{" "}
            <span className="text-primary">نتائج حقيقية ومستدامة.</span>
          </li>
          <li className="font-cairo font-bold text-[20px]">
            هدفي مش بس تحسين لياقتك البدنية، لكن مساعدتك على بناء{" "}
            <span className="text-primary">عادات صحية</span> وتطوير طريقة{" "}
            <span className="text-primary">تفكير إيجابية</span> تدوم معاك.
          </li>
          <li className="font-cairo font-bold text-[20px]">
            لو مستعد للالتزام بتغيير إيجابي شامل، هيسعدني اني أكون شريكك في
            الرحلة <span className="text-primary">خطوة بخطوة.</span>
          </li>
        </ul>
        <div>
          <HashLink
            smooth
            to="#Plans"
            className=" mt-9 relative max-[970px]:left-1/2  max-[970px]:-translate-x-1/2 hover:text-primary hover:bg-transparent transition-all ease-in-out duration-700 text-white font-cairo font-bold text-[20px] px-[50px] py-[14px] border-2 border-solid border-primary bg-primary inline-block rounded-full
          max-[480px]:text-[14px] max-[480px]:px-[17px] max-[480px]:py-[10px] max-[480px]:text-center"
          >
            اوصل لجسم احلامك!
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default AboutAr;
