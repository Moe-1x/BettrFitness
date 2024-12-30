import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { title, description, selectedPlan, price } = location.state || {};

  return (
    <div className="flex flex-wrap lg:flex-nowrap h-screen">
      {/* Left Section */}
      <div className="bg-blue-700 text-white w-full lg:w-1/2 p-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">
          What happens after my payment?
        </h2>
        <div className="w-full border-t border-white my-4"></div>
        <ul className="list-none text-lg text-center">
          <li>- We will text you on WhatsApp to:</li>
          <li>- Send you an onboarding form to know more about you.</li>
          <li>- Set a time for a 20-minute consultation.</li>
        </ul>
        <div className="w-full border-t border-white my-4"></div>
        <div className="text-center">
          <h3 className="text-xl font-semibold underline">Your Order</h3>
          <p className="text-lg mt-2">{title}</p>
          <p className="text-lg ">{description}</p>
          <p className="text-lg">{selectedPlan} Plan</p>
          <p className="text-lg">Price: {price} EGP</p>
        </div>
        <div className="w-full border-t border-white my-4"></div>
      </div>

      {/* Right Section */}
      <div className="bg-gray-100 w-full lg:w-1/2 p-8 flex flex-col justify-center">
        <div className=" mx-auto">
          <h2 className="text-center text-2xl font-bold mb-8">Checkout</h2>
          <form className="space-y-4">
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="name"
              >
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none hover:shadow-md"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                E-Mail:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none hover:shadow-md"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="phone"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none hover:shadow-md"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Payment Method:
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  Visa/Mastercard
                </button>
                <button
                  type="button"
                  className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  Instapay
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Buy Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
