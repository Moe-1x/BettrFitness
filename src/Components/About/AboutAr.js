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
      <div className="relative before:absolute before:w-full before:max-h-[632px] before:h-full before:bg-primary before:-z-10 before:left-[3%] before:top-[3%] max-[970px]:hidden">
        <img
          draggable="false"
          className="min-h-[632px] max-[970px]:mb-10 max-[970px]:w-screen min-w-[458px] max-[970px]:min-h-[400px] max-[970px]:min-w-[300px]"
          src={Images.aboutImage}
          alt="personal photo"
        />
      </div>
      <div className="flex justify-center flex-col mr-8 max-[970px]:mr-0 max-[970px]:items-center max-[970px]:text-center">
        <h2 className="font-cairo text-[48px] font-extrabold max-[970px]:text-[36px]">
          ليه أنا{" "}
          <span className="text-primary">
            {" "}
            الشخص <br />
          </span>
          اللي تشتغل معاه{" "}
        </h2>
        <ul className="flex flex-col max-[970px]:list-none max-[970px]:gap-3 gap-7 list-disc ml-6 mt-[22px] max-[970px]:ml-0">
          <li className="font-cairo font-bold text-[20px]">
            أنا تدربت على{" "}
            <span className="text-primary">
              الكاليسثينيكس، و الكيك بوكسينج <br />
              والسباحة،{" "}
            </span>{" "}
            وده خلاني أكتسب خلفية رياضية متنوعة{" "}
          </li>
          <li className="font-cairo font-bold text-[20px]">
            عندي خبرة <span className="text-primary">عشرة سنين، </span> وده
            معناه إني عارف إيه اللي بينجح <br /> عشان تحقق{" "}
            <span className="text-primary">نتائج حقيقية.</span>
          </li>
          <li className="font-cairo font-bold text-[20px]">
            هساعدك توصل{" "}
            <span className="text-primary"> للياقة بدنية ممتازة</span> وأنت كمان
            هتحسن <br /> <span className="text-primary">عقليتك</span> وتبني{" "}
            <span className="text-primary">عادات دائمة.</span>
          </li>
          <li className="font-cairo font-bold text-[20px]">
            أنا بدمج{" "}
            <span className="text-primary">
              التدريب البدني مع التغذية وتدريب العقل
            </span>{" "}
            عشان <br /> أساعدك تحقق{" "}
            <span className="text-primary">أهدافك.</span>
          </li>
        </ul>
        <div>
          {" "}
          <HashLink
            smooth
            to="#Plans"
            className=" mt-9 relative max-[970px]:left-1/2  max-[970px]:-translate-x-1/2 hover:text-primary hover:bg-transparent transition-all ease-in-out duration-700 text-white font-cairo font-bold text-[20px] px-[50px] py-[14px] border-2 border-solid border-primary bg-primary inline-block rounded-full
          max-[480px]:text-[14px] max-[480px]:px-[17px] max-[480px]:py-[10px] max-[480px]:text-center"
          >
            اوصل لجسم احلامك!{" "}
          </HashLink>
        </div>

        <div className=" flex flex-col"></div>
      </div>
    </section>
  );
};

export default AboutAr;
