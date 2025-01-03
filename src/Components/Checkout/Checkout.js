import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const location = useLocation();
  const { title, description, selectedPlan, price } = location.state || {};
  const [paymobIframe, setPaymobIframe] = useState(null);

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      console.log("Starting payment process...");

      // Step 1: Authenticate and get token
      console.log("Authenticating...");
      const authResponse = await axios.post(
        "https://accept.paymob.com/api/auth/tokens",
        {
          api_key:
            "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TVRBeE1qazJNQ3dpYm1GdFpTSTZJbWx1YVhScFlXd2lmUS5XN0hQMk5ycG02bVpaOWRXa28zSllNTHhsSFdUU2duX2dsTlVKWEVvMFF0SE92R2pncXBtZjhWTjBjYXpteTZYZVdIdE92UWpjRzljYUtzY19vclgzUQ==",
        }
      );
      const token = authResponse.data.token;
      console.log("Auth successful. Token received:", token);

      // Step 2: Create an order
      console.log("Creating order...");
      const orderResponse = await axios.post(
        "https://accept.paymob.com/api/ecommerce/orders",
        {
          auth_token: token,
          delivery_needed: false,
          amount_cents: price * 100, // Convert EGP to cents
          currency: "EGP",
          items: [],
        }
      );
      const orderId = orderResponse.data.id;
      console.log("Order created successfully. Order ID:", orderId);

      // Step 3: Generate a payment key
      console.log("Generating payment key...");
      const paymentKeyResponse = await axios.post(
        "https://accept.paymob.com/api/acceptance/payment_keys",
        {
          auth_token: token,
          amount_cents: price * 100,
          currency: "EGP",
          order_id: orderId,
          billing_data: {
            first_name: "John",
            last_name: "Doe",
            phone_number: "01000000000",
            email: "user@example.com",
            building: "123",
            floor: "1",
            apartment: "10",
            city: "Cairo",
            country: "EG",
            street: "123 Main Street",
            postal_code: "12345",
            state: "Cairo",
          },
          integration_id: "4914360",
        }
      );

      const paymentKey = paymentKeyResponse.data.token;
      console.log("Payment key generated successfully. Key:", paymentKey);

      // Step 4: Set the iframe URL
      console.log("Setting iframe...");
      setPaymobIframe(
        `https://accept.paymob.com/api/acceptance/iframes/888577?payment_token=${paymentKey}`
      );
      console.log("Iframe URL set successfully.");
    } catch (error) {
      console.error("Error details:", error.response?.data || error.message);

      if (error.response?.data) {
        alert(
          `Error: ${
            error.response.data.message || "Unknown issue. Check console."
          }`
        );
      } else {
        alert("Error initiating payment. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap h-screen">
      {/* Left Section */}
      <div className="bg-blue-700 text-white w-full lg:w-1/2 p-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">
          What happens after my payment?
        </h2>
        <ul className="list-none text-lg text-center">
          <li>- We will text you on WhatsApp to:</li>
          <li>- Send you an onboarding form to know more about you.</li>
          <li>- Set a time for a 20-minute consultation.</li>
        </ul>
        <div className="text-center">
          <h3 className="text-xl font-semibold underline">Your Order</h3>
          <p className="text-lg mt-2">{title}</p>
          <p className="text-lg">{description}</p>
          <p className="text-lg">{selectedPlan} Plan</p>
          <p className="text-lg">Price: {price} EGP</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-gray-100 w-full lg:w-1/2 p-8 flex flex-col justify-center">
        {!paymobIframe ? (
          <form className="space-y-4" onSubmit={handlePayment}>
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
                className="w-full px-4 py-3 border"
                required
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
                className="w-full px-4 py-3 border"
                required
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
                className="w-full px-4 py-3 border"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg"
            >
              Buy Now
            </button>
          </form>
        ) : (
          <iframe
            src={paymobIframe}
            title="Paymob Payment"
            className="w-full h-full border-0"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Checkout;
