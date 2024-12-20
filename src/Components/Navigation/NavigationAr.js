import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Images from "../../Images";

const Navigation = () => {
  const switchLanguage = () => {
    const currentPath = window.location.hash; // Get the current hash in the URL

    if (currentPath.includes("/ar")) {
      // Replace '/ar' with '/en' for English
      const newPath = currentPath.replace("/ar", "/en");
      window.location.hash = newPath; // Update the URL with the new path
    } else if (currentPath.includes("/en")) {
      // Replace '/en' with '/ar' for Arabic
      const newPath = currentPath.replace("/en", "/ar");
      window.location.hash = newPath; // Update the URL with the new path
    } else {
      // If no language part is found, assume it's in English and switch to Arabic
      window.location.hash = currentPath.replace("#", "#/ar"); // Add '/ar' to the path if it's not present
    }
  };

  return (
    <div
      dir="rtl"
      className="mt-9 flex justify-between items-center px-2 container"
    >
      <div className="flex items-center">
        <img
          src={Images.logo}
          className="max-[480px]:w-[48px]"
          draggable="false"
          alt="logo"
        />
        <ul className="ml-[46px] max-[970px]:hidden flex gap-[20px] font-cairo font-bold text-[20px]">
          <li>
            <HashLink smooth className="text-primary" to="#">
              <i className="mr-2"></i>
              الرئيسيه
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              className="hover:text-primary transition-all ease-in-out duration-700"
              to="#Reviews"
            >
              المراجعات
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              className="hover:text-primary transition-all ease-in-out duration-700"
              to="#About"
            >
              عني
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              className="hover:text-primary transition-all ease-in-out duration-700"
              to="#Journey"
            >
              رحلتك
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              className="hover:text-primary transition-all ease-in-out duration-700"
              to="#Plans"
            >
              الباقات
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              className="hover:text-primary transition-all ease-in-out duration-700"
              to="#FAQS"
            >
              الاسئله الشائعه
            </HashLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <a
          target="_blank"
          href="https://wa.link/evz1zz"
          className="font-cairo hover:bg-transparent border-primary border-2 border-solid hover:text-primary max-[480px]:py-2 max-[480px]:px-8 text-white py-3 rounded-full hover:bg-accent transition-all ease-in-out duration-700 font-bold px-11 bg-primary"
        >
          كلمني
        </a>
        <div
          onClick={switchLanguage} // Call the switchLanguage function on click
          className="hover:text-primary transition-all ease-in-out duration-700 cursor-pointer flex items-center gap-[5px]"
        >
          <i className="text-[20px] text-primary fas fa-globe"></i>
          <span className="font-cairo font-black text-[16px]">العربيه</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
