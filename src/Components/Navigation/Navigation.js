import React from "react";
import { Link } from "react-router-dom";
import Images from "../../Images";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  return (
    <div className="mt-9 flex justify-between items-center px-2 container">
      <div className="flex items-center">
        <img
          src={Images.logo}
          className="max-[480px]:w-[48px]"
          draggable="false"
          alt="logo"
        />
        <ul className="ml-[46px] max-[970px]:hidden  flex gap-[20px] font-sans font-bold text-[20px]">
          <li>
            <HashLink smooth className="text-primary" to="#">
              <i className=" mr-2"></i>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              className=" hover:text-primary transition-all ease-in-out duration-700"
              to="#Reviews"
            >
              Reviews
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              className=" hover:text-primary transition-all ease-in-out duration-700"
              to="#About"
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              className=" hover:text-primary transition-all ease-in-out duration-700"
              to="#Journey"
            >
              Journey
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              className=" hover:text-primary transition-all ease-in-out duration-700"
              to="#Plans"
            >
              Plans
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              className=" hover:text-primary transition-all ease-in-out duration-700"
              to="#FAQS"
            >
              FAQS
            </HashLink>
          </li>
        </ul>
      </div>
      <div className=" flex items-center gap-2">
        <a
          target="_blank"
          href="https://wa.link/evz1zz"
          className="font-sans max-[480px]:py-2 max-[480px]:px-8 text-white py-3 rounded-full hover:bg-accent transition-all ease-in-out duration-700 font-bold px-11 bg-primary"
        >
          Say Hello
        </a>
        <div className=" hover:text-primary transition-all ease-in-out duration-700 cursor-pointer flex items-center gap-[5px]">
          <i className=" text-[20px] text-primary fas fa-globe"></i>
          <Link to="/ar" className=" font-sans font-black text-[16px]">
            English
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
