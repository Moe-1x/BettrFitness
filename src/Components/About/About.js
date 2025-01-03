import React from "react";
import Images from "../../Images";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <section
      id="About"
      className="container mt-[166px] py-16 flex max-[970px]:flex-col max-[970px]:items-center"
    >
      <div className="relative max-[1025px]:before:hidden before:absolute before:w-full before:max-h-[632px] before:h-full max-[1355px]:before:hidden max-[1299px]:before:block before:bg-primary before:-z-10 before:right-[3%] before:top-[3%] max-[970px]:hidden">
        <img
          draggable="false"
          className="min-h-[632px] max-[1299px]:rounded-none max-[1025px]:rounded-lg max-[970px]:mb-10 max-[970px]:w-screen max-[1355px]:rounded-lg min-w-[458px] max-[970px]:min-h-[400px] max-[970px]:min-w-[300px]"
          src={Images.aboutImage}
          alt="personal photo"
        />
      </div>
      <div className="flex justify-center flex-col ml-8 max-[970px]:ml-0 max-[970px]:items-center max-[970px]:text-center">
        <h2 className="font-sans text-[48px] font-extrabold max-[970px]:text-[36px]">
          Why work with <span className="text-primary">me?</span>
        </h2>
        <ul className="flex flex-col max-[970px]:list-none max-[970px]:gap-3 gap-7 list-disc ml-6 mt-[22px] max-[970px]:ml-0">
          <li className="font-sans font-bold text-[20px]">
            I have a deep passion for fitness and diverse experience in areas
            like{" "}
            <span className="text-primary">
              calisthenics, kickboxing, and swimming.
            </span>{" "}
            These experiences have given me a profound understanding of how to
            achieve balance between{" "}
            <span className="text-primary">physical fitness</span> and{" "}
            <span className="text-primary">mental well-being.</span>
          </li>
          <li className="font-sans font-bold text-[20px]">
            With over{" "}
            <span className="text-primary">10 years of experience</span> in the
            field, I provide customized training plans to help you achieve{" "}
            <span className="text-primary">real and sustainable results.</span>
          </li>
          <li className="font-sans font-bold text-[20px]">
            My goal isn’t just to improve your physical fitness but also to help
            you build <span className="text-primary">healthy habits</span> and
            develop a <span className="text-primary">positive mindset</span>{" "}
            that lasts.
          </li>
          <li className="font-sans font-bold text-[20px]">
            If you’re ready to commit to a{" "}
            <span className="text-primary">holistic positive change</span>, I’d
            be delighted to be your partner on this journey,{" "}
            <span className="text-primary">step by step!</span>
          </li>
        </ul>
        <HashLink
          smooth
          to="#Plans"
          className=" mt-9 self-start relative max-[970px]:left-1/2 max-[970px]:-translate-x-1/2 hover:text-primary hover:bg-transparent transition-all ease-in-out duration-700 text-white font-sans font-bold text-[20px] px-[50px] py-[14px] border-2 border-solid border-primary bg-primary inline-block rounded-full
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
