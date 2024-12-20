import React from "react";
import { HashLink } from "react-router-hash-link";
import Images from "../../Images";

const Navigation = () => {
  // Function to switch language dynamically
  const switchLanguage = () => {
    const currentPath = window.location.hash; // Use window.location.hash to get the current URL with hash
    if (currentPath.includes("/en")) {
      // Replace '/en' with '/ar' for Arabic
      const newPath = currentPath.replace("/en", "/ar");
      window.location.hash = newPath; // Update the hash with the new path
    } else if (currentPath.includes("/ar")) {
      // Replace '/ar' with '/en' for English
      const newPath = currentPath.replace("/ar", "/en");
      window.location.hash = newPath; // Update the hash with the new path
    }
  };

  // Function to determine if the current URL is on the policies page
  const isPoliciesPage = window.location.hash.includes("/policies");

  return (
    <div className="mt-9 flex justify-between items-center px-2 container">
      <div className="flex items-center">
        <img
          src={Images.logo}
          className="max-[480px]:w-[48px]"
          draggable="false"
          alt="logo"
        />
        <ul className="ml-[46px] max-[970px]:hidden flex gap-[20px] font-sans font-bold text-[20px]">
          <li>
            <HashLink
              smooth
              className={`mr-2 hover:text-primary transition-all ease-in-out duration-700 ${
                isPoliciesPage ? "text-black" : "text-primary"
              }`} // Conditionally apply text color
              to="/"
            >
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              className="hover:text-primary transition-all ease-in-out duration-700"
              smooth
              to="#Reviews"
            >
              Reviews
            </HashLink>
          </li>
          <li>
            <HashLink
              className="hover:text-primary transition-all ease-in-out duration-700"
              smooth
              to="#About"
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              className="hover:text-primary transition-all ease-in-out duration-700"
              smooth
              to="#Journey"
            >
              Journey
            </HashLink>
          </li>
          <li>
            <HashLink
              className="hover:text-primary transition-all ease-in-out duration-700"
              smooth
              to="#Plans"
            >
              Plans
            </HashLink>
          </li>
          <li>
            <HashLink
              className="hover:text-primary transition-all ease-in-out duration-700"
              smooth
              to="#FAQS"
            >
              FAQS
            </HashLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <a
          target="_blank"
          href="https://wa.link/evz1zz"
          className="font-sans max-[480px]:py-2 max-[480px]:px-8 text-white py-3 rounded-full hover:bg-transparent border-primary border-2 border-solid hover:text-primary transition-all ease-in-out duration-700 font-bold px-11 bg-primary"
        >
          Say Hello
        </a>
        <div
          onClick={switchLanguage} // Call the switchLanguage function on click
          className="hover:text-primary transition-all ease-in-out duration-700 cursor-pointer flex items-center gap-[5px]"
        >
          <i className="text-[20px] text-primary fas fa-globe"></i>
          <span className="font-sans font-black text-[16px]">English</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
