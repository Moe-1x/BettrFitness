import React from "react";
import { HashLink } from "react-router-hash-link";

const FooterAr = () => {
  return (
    <footer
      dir="rtl"
      className="max-[970px]:text-center bg-black font-cairo text-white py-[84px]"
    >
      <div className="container mx-auto px-4">
        {/* Footer Links Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[36px] font-semibold mb-4">روابط</h3>
            <ul className=" text-[20px] ">
              <li>
                <HashLink
                  smooth
                  to="#"
                  className="transition-all ease-in-out duration-700 hover:text-primary"
                >
                  الصفحة الرئيسية
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="#Reviews"
                  className=" transition-all ease-in-out duration-700 hover:text-primary"
                >
                  التقييمات
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="#About"
                  className=" transition-all ease-in-out duration-700 hover:text-primary"
                >
                  عننا
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="#Journey"
                  className=" transition-all ease-in-out duration-700 hover:text-primary"
                >
                  رحلتك
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="#Plans"
                  className=" transition-all ease-in-out duration-700 hover:text-primary"
                >
                  الخطط
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="#FAQS"
                  className=" transition-all ease-in-out duration-700 hover:text-primary"
                >
                  الأسئلة الشائعة
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-[36px] font-semibold mb-4">تابعنا</h3>
            <ul className=" text-[20px]">
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61553927254032"
                  className=" transition-all ease-in-out duration-700 hover:text-primary"
                >
                  فيسبوك
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/bettrfitness/"
                  className="transition-all ease-in-out duration-700 hover:text-primary"
                >
                  إنستجرام
                </a>
              </li>
            </ul>
          </div>

          {/* Policies and Copyright Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-[36px] font-semibold mb-4">السياسات</h3>
            <ul className=" text-[20px]">
              <li>
                <a
                  href="/privacy-policy"
                  className="transition-all ease-in-out duration-700 hover:text-primary"
                >
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="transition-all ease-in-out duration-700 hover:text-primary"
                >
                  شروط الخدمة
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy"
                  className="transition-all ease-in-out duration-700 hover:text-primary"
                >
                  سياسة الكوكيز
                </a>
              </li>
            </ul>
            <div className="mt-6 text-[16px]">
              <p>© 2024 BETTR fitness. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAr;
