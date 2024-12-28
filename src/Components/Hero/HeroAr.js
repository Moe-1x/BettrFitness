import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const HeroAr = ({ lenis }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 970);
    };

    // Set the initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleVideoClick = () => {
    // Check if the popover overlay exists
    const overlay = document.getElementById("_popover_overlay");

    if (overlay) {
      // Disable scrolling by setting overflow: hidden on body and html
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Apply to html as well
      document.body.style.position = "fixed"; // Lock the page in place

      // Stop Lenis' scroll behavior
      if (lenis) {
        lenis.stop(); // Stop Lenis scroll behavior
      }

      // Add event listener to detect when the overlay is removed
      const observer = new MutationObserver(() => {
        if (!document.getElementById("_popover_overlay")) {
          // Re-enable scrolling once the overlay is removed
          document.body.style.overflow = "auto"; // Restore scrolling
          document.documentElement.style.overflow = "auto"; // Restore overflow for html
          document.body.style.position = ""; // Reset position

          if (lenis) {
            lenis.start(); // Resume Lenis scroll behavior
          }
          observer.disconnect(); // Stop observing
        }
      });

      // Start observing changes to the DOM
      observer.observe(document.body, { childList: true, subtree: true });
    }
  };
  return (
    <section
      dir="rtl"
      className="container relative gap-8 grid grid-cols-2 max-[970px]:grid-cols-1 items-center pt-32"
    >
      <div className="flex flex-col max-[970px]:items-center w-full gap-8">
        <h1 className="font-cairo max-[970px]:text-center font-extrabold text-[64px] max-[480px]:text-[42px]">
          حيث تلتقي اللياقة
          <br /> <span className="text-primary">بأسلوب الحياة</span>
        </h1>

        <div className="flex relative gap-4 space-x-4 items-start">
          {/* Explore Plans Button */}
          <HashLink
            smooth
            to="#Plans"
            className="self-start relative hover:text-primary hover:bg-transparent transition-all ease-in-out duration-700 text-white font-cairo font-bold text-[16px] px-[50px] py-[14px] border-2 border-solid border-primary bg-primary inline-block rounded-full
                     max-[480px]:text-[14px] max-[480px]:px-[17px] max-[480px]:py-[10px] max-[480px]:text-center"
          >
            استكشف الباقات
          </HashLink>

          {/* Free Consultation Button + Got Questions */}
          <div className="flex flex-col items-center">
            <a
              target="_blank"
              href="https://wa.link/evz1zz"
              className="relative hover:bg-primary hover:text-white transition-all ease-in-out duration-700 text-primary font-cairo font-bold text-[16px] px-[50px] py-[14px] border-2 border-solid border-primary inline-block rounded-full
                       max-[480px]:text-[14px] max-[480px]:px-[17px] max-[480px]:py-[10px] max-[480px]:text-center"
            >
              استشاره مجانيه
            </a>
            <p className="mt-2  transition-all ease-in-out duration-700 text-[16px] font-bold text-left underline">
              عندك اسأله؟
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="w-[70px] h-[70px] rounded-full bg-primary text-white font-cairo font-semibold text-[16px] flex items-center justify-center max-[480px]:w-[50px] max-[480px]:h-[50px] max-[480px]:text-[12px]">
            100+
          </div>
          <p className="text-[20px] font-cairo font-semibold max-[480px]:text-[14px]">
            عملاء سعداء
          </p>
        </div>
      </div>
      <div className="flex justify-center h-full items-center md:w-full md:mt-8">
        {isMobile ? (
          // Mobile-specific video code
          <div className="relative max-[970px]:px-5 max-[970px]:ml-0 ml-[50px] w-full max-[970px]:w-full">
            <script src="https://fast.wistia.com/player.js" async></script>
            <script
              src="https://fast.wistia.com/embed/gj50jevgta.js"
              async
              type="module"
            ></script>
            <style>
              {`
                wistia-player[media-id='gj50jevgta']:not(:defined) {
                  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/gj50jevgta/swatch');
                  display: block;
                  filter: blur(5px);
                  padding-top: 177.78%; /* Maintain mobile aspect ratio */
                }
              `}
            </style>
            <wistia-player
              media-id="gj50jevgta"
              onClick={handleVideoClick}
            ></wistia-player>
          </div>
        ) : (
          // Desktop-specific video code
          <div className="relative max-[970px]:px-5 max-[970px]:ml-0 ml-[50px] w-full max-[970px]:w-full">
            {/* Updated Wistia Video Embed */}
            <script src="https://fast.wistia.com/player.js" async></script>
            <script
              src="https://fast.wistia.com/embed/gj50jevgta.js"
              async
              type="module"
            ></script>
            <style>
              {`
              wistia-player[media-id='gj50jevgta']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/gj50jevgta/swatch');
                display: block;
                padding-top: 56.25%; /* Maintain aspect ratio (16:9) */
              }
              .wistia-container {
                max-width: 100%;
                max-height: 600px;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                background-position: center;
                background-size: contain; /* Ensure full thumbnail is visible */
                background-repeat: no-repeat;
              }
              .wistia-container wistia-player {
                object-fit: contain; /* Center and scale the video */
                width: 100%;
              }
            `}
            </style>
            <div
              className="wistia-container"
              style={{
                backgroundImage: `url('https://fast.wistia.com/embed/medias/gj50jevgta/swatch')`,
              }}
            >
              <wistia-player
                media-id="gj50jevgta"
                wistia-popover="true"
                onClick={handleVideoClick}
              ></wistia-player>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroAr;
