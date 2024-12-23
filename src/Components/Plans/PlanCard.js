import React, { useState } from "react";
import Images from "../../Images";

const PlanCard = ({
  title,
  description,
  price,
  buttonLabels,
  features,
  footerText,
  specialNote,
  isLastCard,
  cardIndex,
}) => {
  const [selectedPlan, setSelectedPlan] = useState("3 Month");

  const handleButtonClick = (plan) => {
    setSelectedPlan(plan);
  };

  const getPrice = () => {
    if (isLastCard) {
      return "15,000";
    }
    if (selectedPlan === "1 Month") {
      return price;
    } else if (selectedPlan === "3 Month") {
      return price * 2;
    }
  };

  return (
    <div className="w-[calc(100%-30px)] mx-auto flex flex-col gap-5 py-8 px-8 min-h-[800px]  rounded-[32px] border-[#BCBCBC] border-2 border-solid relative">
      {(cardIndex === 1 || cardIndex === 2) && selectedPlan === "3 Month" && (
        <div className="absolute top-[-10px] rounded-tl-[32px] rounded-tr-[32px] left-0 w-full text-center text-white bg-primary py-2 font-bold">
          Save 35% of your money!
        </div>
      )}

      <div>
        <p className="text-primary text-nowrap max-[1299px]:text-center font-sans font-medium text-[42px]">
          {title}
        </p>
        <p className="max-[1299px]:text-center font-sans font-light text-[16px]">
          {description}
        </p>
      </div>
      <div>
        <p className=" max-[1299px]:text-center text-nowrap font-sans font-bold max-[360px]:text-[60px]  text-[66px]">
          {getPrice()}
          <span className="font-sans font-bold text-[20px] text-primary">
            {" "}
            EGP
          </span>
        </p>
        <div className="flex max-[1299px]:justify-center gap-3">
          {buttonLabels.map((label, index) =>
            !isLastCard || label !== "3 Month" ? (
              <button
                key={index}
                onClick={() => handleButtonClick(label)}
                className={`w-[120px] h-[42px]  transition-all ease-in-out duration-700 ${
                  label === selectedPlan
                    ? "bg-primary max-[970px]:hover:bg-primary max-[970px]:hover:text-white  border-primary border-solid border-2   text-white"
                    : "border-primary max-[970px]:hover:bg-transparent max-[970px]:hover:text-primary border-solid border-2 hover:bg-primary hover:text-white text-primary"
                } font-sans font-medium text-[14px] rounded-full`}
              >
                {label}
              </button>
            ) : null
          )}
          {isLastCard && (
            <button
              key="static-3-month"
              className="w-[120px] h-[42px] border-primary border-solid border-2 max-[970px]:transition-none  bg-primary text-white font-sans font-medium text-[14px] rounded-full"
            >
              3 Month
            </button>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center gap-5 ${
              index < features.length - 1 ? "border-b-2 border-b-[#BCBCBC]" : ""
            } pb-2 pt-3`}
          >
            <img className="w-[32px] h-[32px]" src={Images.check} alt="check" />
            <p className="font-sans max-[360px]:text-[14px] font-semibold text-[16px] text-black">
              {feature}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          target="_blank"
          href="https://wa.link/evz1zz"
          className=" absolute bottom-[100px] mt-8 text-white font-sans font-bold text-[16px] px-[50px] w-fit py-[14px] bg-black inline-block 
                      before:bg-primary before:-z-10 before:left-0 before:top-0 before:absolute before:w-full before:h-full 
                      hover:before:left-[22%] hover:before:top-[27%] max-[970px]:hover:before:left-0 max-[970px]:hover:before:w-full hover:before:w-[80%] hover:before:h-[80%] 
                      before:transition-all before:duration-500 before:ease-in-out
                      max-[480px]:text-[14px] max-[480px]:px-[17px] max-[480px]:py-[10px] max-[480px]:text-center"
        >
          Start your journey
        </a>
      </div>
      {specialNote && (
        <div className="font-sans font-bold text-[13px] text-white flex justify-center items-center rounded-br-[32px] rounded-tl-[10px] bg-primary absolute right-0 bottom-0 w-[230px] h-[50px]">
          {specialNote}
        </div>
      )}
    </div>
  );
};

export default PlanCard;
