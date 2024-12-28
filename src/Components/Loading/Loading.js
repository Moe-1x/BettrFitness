import React, { useEffect, useState } from "react";
import "./Loading.css";

const Loading = ({ lenis, setIsLoading }) => {
  const [translateY, setTranslateY] = useState(false);

  useEffect(() => {
    if (lenis) lenis.stop();

    const timer = setTimeout(() => {
      setTranslateY(true);

      // Allow scrolling after transition
      setTimeout(() => {
        if (lenis) lenis.start();
        setIsLoading(false); // Notify App that loading is complete
      }, 700); // Match transition duration
    }, 2000); // Simulate loading duration

    return () => {
      clearTimeout(timer);
      if (lenis) lenis.start();
    };
  }, [lenis, setIsLoading]);

  return (
    <div
      className={`bg-primary w-screen h-screen fixed top-0 left-0 z-10 flex justify-center items-center transition-transform duration-[700ms] ${
        translateY ? "translate-y-[100%]" : "translate-y-0"
      }`}
    >
      <svg
        width="87"
        height="81"
        viewBox="0 0 57 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.1016 29.0267L8.34229 14.4751L34.3704 0L56.7956 6.39542L16.1016 29.0267Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 43.7162L38.9167 22.0742L46.4228 36.7696L22.424 50.114L0 43.7162Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Loading;
