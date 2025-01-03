import React from "react";

const Reviews = () => {
  return (
    <section id="Reviews" className="mt-[166px] py-16 container">
      <h2 className="text-center font-sans max-[480px]:text-[42px] text-[48px] font-extrabold">
        Don’t take <span className="text-primary"> my word </span>for it.
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-[1300px]:flex-col items-center mt-10">
        {/* Video 1: Eyad */}
        <div className="relative w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
          <script src="https://fast.wistia.com/player.js" async></script>
          <script
            src="https://fast.wistia.com/embed/plptemlboq.js"
            async
            type="module"
          ></script>
          <style>
            {`wistia-player[media-id='plptemlboq']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/plptemlboq/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}
          </style>
          <wistia-player
            className="h-auto w-[full]"
            media-id="plptemlboq"
          ></wistia-player>
          <div className="absolute bottom-2 left-2 text-white text-[16px] font-sans font-medium">
            Eyad Ashraf - Giza, Eg
          </div>
        </div>

        {/* Video 2: Ahmed */}
        <div className="relative w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
          <script src="https://fast.wistia.com/player.js" async></script>
          <script
            src="https://fast.wistia.com/embed/0s0ehbud5v.js"
            async
            type="module"
          ></script>
          <style>
            {`wistia-player[media-id='0s0ehbud5v']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/0s0ehbud5v/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}
          </style>
          <wistia-player
            className="h-auto w-[full]"
            media-id="0s0ehbud5v"
          ></wistia-player>
          <div className="absolute bottom-2 left-2 text-white text-[16px] font-sans font-medium">
            Ahmed Farag - Texas, US
          </div>
        </div>

        {/* Video 3: Seif */}
        <div className="relative w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
          <script src="https://fast.wistia.com/player.js" async></script>
          <script
            src="https://fast.wistia.com/embed/p6w53039ro.js"
            async
            type="module"
          ></script>
          <style>
            {`wistia-player[media-id='p6w53039ro']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/p6w53039ro/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}
          </style>
          <wistia-player
            className="h-auto w-[full]"
            media-id="p6w53039ro"
          ></wistia-player>
          <div className="absolute bottom-2 left-2 text-white text-[16px] font-sans font-medium">
            Seif El-masry - Alex, Eg
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
