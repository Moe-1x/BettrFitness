import React from "react";
import { useLocation } from "react-router-dom";

const CheckoutAr = () => {
  const location = useLocation();
  const { title, description, selectedPlan, price } = location.state || {};

  return (
    <div className="container py-16">
      <h2 className="text-center text-4xl font-bold mb-8">الدفع</h2>
      <div className="max-w-lg mx-auto">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p>{description}</p>
        <p className="text-xl font-semibold mt-4">
          {selectedPlan} الباقه - {price} جنيه مصري
        </p>
        {/* You can add form elements to complete the checkout process */}
        <button className="mt-6 px-6 py-2 bg-primary text-white rounded-full">
          اكمل عمليه الدفع
        </button>
      </div>
    </div>
  );
};

export default CheckoutAr;
