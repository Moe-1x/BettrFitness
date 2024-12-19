import React from "react";
import Images from "../../Images";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <section
      id="About"
      className="container mt-[166px] py-16 flex max-[970px]:flex-col max-[970px]:items-center"
    >
      <div className="relative before:absolute before:w-full before:max-h-[632px] before:h-full before:bg-primary before:-z-10 before:right-[3%] before:top-[3%] max-[970px]:hidden">
        <img
          draggable="false"
          className="min-h-[632px] max-[970px]:mb-10 max-[970px]:w-screen min-w-[458px] max-[970px]:min-h-[400px] max-[970px]:min-w-[300px]"
          src={Images.aboutImage}
          alt="personal photo"
        />
      </div>
      <div className="flex justify-center flex-col ml-8 max-[970px]:ml-0 max-[970px]:items-center max-[970px]:text-center">
        <h2 className="font-sans text-[48px] font-extrabold max-[970px]:text-[36px]">
          Here’s why I’m the
          <span className="text-primary">
            {" "}
            one <br />
          </span>
          to work with.
        </h2>
        <ul className="flex flex-col max-[970px]:list-none max-[970px]:gap-3 gap-7 list-disc ml-6 mt-[22px] max-[970px]:ml-0">
          <li className="font-sans font-bold text-[20px]">
            I’ve trained in{" "}
            <span className="text-primary">
              Calisthenics, Kickboxing, and <br />
              Swimming,
            </span>{" "}
            giving me a well-rounded fitness <br /> background.
          </li>
          <li className="font-sans font-bold text-[20px]">
            A <span className="text-primary">decade of experience </span> means
            I know what works to <br /> help{" "}
            <span className="text-primary">achieve real results.</span>
          </li>
          <li className="font-sans font-bold text-[20px]">
            I’ll help you get in
            <span className="text-primary"> great shape</span> while improving
            your <br /> <span className="text-primary">mindset</span> and{" "}
            <span className="text-primary">building lasting habits.</span>
          </li>
          <li className="font-sans font-bold text-[20px]">
            I combine{" "}
            <span className="text-primary">
              fitness, nutrition, and mindset coaching
            </span>{" "}
            to <br /> help you reach your{" "}
            <span className="text-primary">goals.</span>
          </li>
        </ul>
        <HashLink
          smooth
          to="#Plans"
          className=" mt-9 self-start relative max-[970px]:left-1/2  max-[970px]:-translate-x-1/2 hover:text-primary hover:bg-transparent transition-all ease-in-out duration-700 text-white font-sans font-bold text-[20px] px-[50px] py-[14px] border-2 border-solid border-primary bg-primary inline-block rounded-full
          max-[480px]:text-[14px] max-[480px]:px-[17px] max-[480px]:py-[10px] max-[480px]:text-center"
        >
          Get in shape today!
        </HashLink>
        <div className=" flex flex-col"></div>
      </div>
    </section>
  );
};

export default About;
