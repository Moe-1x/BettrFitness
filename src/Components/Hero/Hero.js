import React from "react";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <section className="container relative grid grid-cols-2 max-[970px]:grid-cols-1 items-center pt-32">
      <div className="flex flex-col max-[970px]:items-center w-full gap-8">
        <h1 className="font-sans max-[970px]:text-center font-extrabold text-[64px] max-[480px]:text-[42px]">
          Transform Your
          <br /> Body,
          <br /> <span className="text-primary">Effortlessly.</span>
        </h1>

        <div className="flex relative gap-4 space-x-4 items-start">
          {/* Explore Plans Button */}
          <HashLink
            smooth
            to="#Plans"
            className="self-start relative hover:text-primary hover:bg-transparent transition-all ease-in-out duration-700 text-white font-sans font-bold text-[16px] px-[50px] py-[14px] border-2 border-solid border-primary bg-primary inline-block rounded-full
                     max-[480px]:text-[14px] max-[480px]:px-[17px] max-[480px]:py-[10px] max-[480px]:text-center"
          >
            Explore Plans
          </HashLink>

          {/* Free Consultation Button + Got Questions */}
          <div className="flex flex-col items-center">
            <a
              target="_blank"
              href="https://wa.link/evz1zz"
              className="relative hover:bg-primary hover:text-white transition-all ease-in-out duration-700 text-primary font-sans font-bold text-[16px] px-[50px] py-[14px] border-2 border-solid border-primary inline-block rounded-full
                       max-[480px]:text-[14px] max-[480px]:px-[17px] max-[480px]:py-[10px] max-[480px]:text-center"
            >
              Free Consultation
            </a>
            <p className="mt-2 transition-all ease-in-out duration-700 text-[16px] font-bold text-left underline">
              Got questions?
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="w-[70px] h-[70px] rounded-full bg-primary text-white font-sans font-semibold text-[16px] flex items-center justify-center max-[480px]:w-[50px] max-[480px]:h-[50px] max-[480px]:text-[12px]">
            100+
          </div>
          <p className="text-[20px] font-sans font-semibold max-[480px]:text-[14px]">
            Happy clients!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center md:w-full md:mt-8">
        <div className="overflow-hidden right-0 w-full mt-4 h-[400px] max-[970px]:w-full rounded-lg">
          <iframe
            className="w-full h-full object-cover"
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

export default Hero;
