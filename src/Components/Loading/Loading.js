import React, { useEffect, useState } from "react";
import "./Loading.css";

const Loading = ({ lenis }) => {
  const [translateY, setTranslateY] = useState(false);

  useEffect(() => {
    // Completely stop scrolling
    const preventScroll = (e) => e.preventDefault();
    window.addEventListener("scroll", preventScroll, { passive: false });
    document.body.style.overflow = "hidden";

    if (lenis) lenis.stop();

    const timer = setTimeout(() => {
      setTranslateY(true);

      // Allow scroll after transition
      setTimeout(() => {
        if (lenis) lenis.start(); // Resume Lenis smooth scrolling
        document.body.style.overflow = "auto"; // Unlock native scrolling
        window.removeEventListener("scroll", preventScroll); // Remove listener
      }, 700); // Match transition duration
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
      if (lenis) lenis.start();
      window.removeEventListener("scroll", preventScroll);
    };
  }, [lenis]);

  return (
    <div
      className={`bg-primary w-screen h-screen fixed top-0 left-0 z-10 flex justify-center items-center transition-transform duration-[500ms] ${
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
