import React from "react";
import { HashLink } from "react-router-hash-link";

const HeroAr = () => {
  return (
    <section
      dir="rtl"
      className="container relative grid grid-cols-2 max-[970px]:grid-cols-1 items-center pt-32"
    >
      <div className="flex flex-col max-[970px]:items-center w-full gap-8">
        <h1 className="font-cairo max-[970px]:text-center font-extrabold text-[64px] max-[480px]:text-[42px]">
          غير جسمك,
          <br /> <span className="text-primary">من غير مجهود.</span>
        </h1>

        <div className="flex relative gap-4 space-x-4 items-start">
          {/* Explore Plans Button */}
          <HashLink
            smooth
            to="#Plans"
            className="self-start relative hover:text-primary hover:bg-transparent transition-all ease-in-out duration-700 text-white font-cairo font-bold text-[16px] px-[50px] py-[14px] border-2 border-solid border-primary bg-primary inline-block rounded-full
                     max-[480px]:text-[14px] max-[480px]:px-[17px] max-[480px]:py-[10px] max-[480px]:text-center"
          >
            استكشف الباقات
          </HashLink>

          {/* Free Consultation Button + Got Questions */}
          <div className="flex flex-col items-center">
            <a
              target="_blank"
              href="https://wa.link/evz1zz"
              className="relative hover:bg-primary hover:text-white transition-all ease-in-out duration-700 text-primary font-cairo font-bold text-[16px] px-[50px] py-[14px] border-2 border-solid border-primary inline-block rounded-full
                       max-[480px]:text-[14px] max-[480px]:px-[17px] max-[480px]:py-[10px] max-[480px]:text-center"
            >
              استشاره مجانيه
            </a>
            <p className="mt-2  transition-all ease-in-out duration-700 text-[16px] font-bold text-left underline">
              عندك اسأله؟
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="w-[70px] h-[70px] rounded-full bg-primary text-white font-cairo font-semibold text-[16px] flex items-center justify-center max-[480px]:w-[50px] max-[480px]:h-[50px] max-[480px]:text-[12px]">
            100+
          </div>
          <p className="text-[20px] font-cairo font-semibold max-[480px]:text-[14px]">
            عملاء سعداء
          </p>
        </div>
      </div>
      <div className="flex justify-center h-full items-center md:w-full md:mt-8">
        <div className="overflow-hidden max-[970px]:px-5 max-[970px]:mr-0 mr-[50px] h-full right-0 w-full mt-4 max-[970px]:w-full ">
          <iframe
            className="w-full max-h-[400px] min-h-[400px] object-cover rounded-lg"
            src="https://www.youtube.com/embed/example3"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </section>
  );
};

export default HeroAr;
