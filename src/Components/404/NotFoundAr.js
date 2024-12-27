import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col font-cairo items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        شكلك دخلت طريق غلط في رحلتك الرياضية! 😅
      </p>
      <Link
        to="/ar"
        className="mt-6 px-6 py-3 hover:bg-transparent border-2 border-solid border-primary text-white hover:text-primary bg-primary rounded-full transition duration-300"
      >
        ارجع للصفحه الرئيسيه{" "}
      </Link>{" "}
    </div>
  );
};

export default NotFound;
