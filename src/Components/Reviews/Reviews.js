import React from "react";

const Reviews = () => {
  return (
    <section id="Reviews" className="mt-[166px] py-16 container">
      <h2 className="text-center font-sans max-[480px]:text-[42px] text-[48px] font-extrabold">
        Don’t take <span className="text-primary"> my word </span>for it.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        <div className="space-y-8">
          <div className="relative  w-full max-[970px]:w-[98%] left-1/2 -translate-x-1/2 aspect-w-16 aspect-h-9">
            <iframe
              className="max-[970px]:w-[95%] relative left-1/2  w-full -translate-x-1/2 h-full rounded-[20px] max-[1024px]:min-h-[700px]  min-h-[275px]"
              src="https://www.youtube.com/embed/example1"
              title="Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute pl-5 pb-4 bottom-0 left-0 text-white text-[16px] font-sans font-medium">
              Seif El-Masry - Egypt{" "}
            </div>
          </div>
          <div className="relative max-[970px]:w-[98%]  w-full left-1/2 -translate-x-1/2 aspect-w-16 aspect-h-9">
            <iframe
              className="max-[970px]:w-[95%]  w-full relative left-1/2 -translate-x-1/2  h-full rounded-[20px] max-[1024px]:min-h-[700px]  min-h-[275px]"
              src="https://www.youtube.com/embed/example2"
              title="Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute bottom-0 pl-4 pb-4 left-0 text-white text-[16px] font-sans font-medium">
              Ahmed - Egypt{" "}
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2 left-1/2 -translate-x-1/2 w-full max-[970px]:w-[98%] aspect-w-16 aspect-h-9 relative">
          <iframe
            className="max-[970px]:w-[95%]  w-full relative left-1/2 -translate-x-1/2  h-full max-[1024px]:min-h-[700px]  rounded-[20px] "
            src="https://www.youtube.com/embed/example3"
            title="Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute bottom-2 pl-4 pb-4 left-2 max-[1024px]:text-[16px] text-white text-[24px] font-sans font-medium">
            Ahmed Farag - US{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
