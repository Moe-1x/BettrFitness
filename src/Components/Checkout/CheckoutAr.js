import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { title, description, selectedPlan, price } = location.state || {};

  return (
    <div className="flex flex-wrap lg:flex-nowrap h-screen" dir="rtl">
      {/* Left Section */}
      <div className="bg-blue-700 text-white w-full lg:w-1/2 p-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">ايه اللي هيحصل بعد الدفع؟</h2>
        <div className="w-full border-t border-white my-4"></div>
        <ul className="list-disc text-lg text-center">
          <li>هنبعتلك على الواتساب:</li>
          <ul className="list-none">
            <li>- فورم تسجيل عشان نعرف اكتر عنك.</li>
            <li>- نحدد موعد لاستشارة مدتها 20 دقيقة.</li>
          </ul>
        </ul>
        <div className="w-full border-t border-white my-4"></div>
        <div className="text-center">
          <h3 className="text-xl font-semibold underline">طلبك</h3>
          <p className="text-lg"> {title}</p>
          <p className="text-lg"> {description}</p>
          <p className="text-lg">خطة {selectedPlan}</p>
          <p className="text-lg">السعر: {price} جنيه</p>
        </div>
        <div className="w-full border-t border-white my-4"></div>
      </div>

      {/* Right Section */}
      <div className="bg-gray-100 w-full lg:w-1/2 p-8 flex flex-col justify-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-center text-2xl font-bold mb-8">الدفع</h2>
          <form className="space-y-4">
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="name"
              >
                الاسم بالكامل:
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none hover:shadow-md"
                placeholder="اكتب اسمك الكامل"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                البريد الإلكتروني:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none hover:shadow-md"
                placeholder="اكتب بريدك الإلكتروني"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="phone"
              >
                رقم التليفون:
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none hover:shadow-md"
                placeholder="اكتب رقم تليفونك"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                طريقة الدفع:
              </label>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <button
                  type="button"
                  className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  فيزا/ماستركارد
                </button>
                <button
                  type="button"
                  className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  انستا باي
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              ادفع الآن
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
