import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className=" flex flex-col max-[1024px]:text-center mt-[166px]  bg-black font-sans text-white pb-[30px] pt-[84px]">
      <div className=" mx-auto px-4">
        {/* Footer Links Column */}
        <div className="grid max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" w-fit">
            <h3 className="text-[36px] font-semibold mb-4">Links</h3>
            <ul className=" text-[20px] ">
              <li>
                <HashLink
                  smooth
                  to="#"
                  className="transition-all ease-in-out duration-700 hover:text-primary"
                >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="#Reviews"
                  className=" transition-all ease-in-out duration-700 hover:text-primary"
                >
                  Reviews
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="#About"
                  className=" transition-all ease-in-out duration-700 hover:text-primary"
                >
                  About
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="#Journey"
                  className=" transition-all ease-in-out duration-700 hover:text-primary"
                >
                  Your Journey
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="#Plans"
                  className=" transition-all ease-in-out duration-700 hover:text-primary"
                >
                  Plans
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="#FAQs"
                  className=" transition-all ease-in-out duration-700 hover:text-primary"
                >
                  FAQs
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className=" w-fit">
            <h3 className="text-[36px] font-semibold mb-4">Follow Us</h3>
            <ul className=" text-[20px]">
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61553927254032"
                  className=" transition-all ease-in-out duration-700 hover:text-primary"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/bettrfitness/"
                  className="transition-all ease-in-out duration-700 hover:text-primary"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Policies and Copyright Column */}
          <div className="md:col-span-2 lg:col-span-1 w-fit">
            <h3 className="text-[36px] font-semibold mb-4">Legal Policies</h3>
            <ul className=" text-[20px]">
              <li>
                <Link
                  to="/en/policies"
                  className="transition-all ease-in-out duration-700 hover:text-primary"
                >
                  Policies and Terms{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-[16px]">
        <p>© 2024 BETTR fitness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
