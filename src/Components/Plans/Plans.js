import React from "react";
import PlanCard from "./PlanCard";

const Plans = () => {
  const plansData = [
    {
      title: "Essential",
      description: "Achieve your fitness goals with essential support!",
      price: "1500",
      buttonLabels: ["3 Month", "1 Month"],
      features: [
        "Answering questions on WhatsApp every 48 hours!",
        "Customized workout plans (Home & Gym)",
        "Updating your workout and exercises as needed every 7 days",
        "Advanced dieting based on lab results",
      ],
    },
    {
      title: "Extra-Care",
      description:
        "Need answers or a little extra support on your journey? We've got you covered!",
      price: "2500",
      buttonLabels: ["3 Month", "1 Month"],
      features: [
        "All the essential plan benefits",
        "2 Video Calls/Month: Mindset and guidance for your journey!",
        "Extra accountability through personal follow-up",
      ],
    },
    {
      title: "Elite Athlete",
      description:
        "Experience exclusive in-person training, priority follow-ups, and a transformative approach to health.",

      price: "15,000",
      buttonLabels: ["3 Month"],
      features: [
        "All the Extra-Care benefits",
        "2 In-Person Workouts/Month",
        "Personal phone number for emergency calls",
        "Freeze for 1 month ",
      ],
      specialNote: "Cairo/Giza only & 5 Spots Left",
    },
  ];

  return (
    <section id="Plans" className=" py-16 container">
      <div className="mb-9 text-center max-[480px]:text-[42px] font-sans font-extrabold text-[48px]">
        <span className="text-primary">Coaching </span>Plans
      </div>
      <div className="flex max-[1299px]:flex-col gap-8">
        {plansData.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            buttonLabels={plan.buttonLabels}
            features={plan.features}
            specialNote={plan.specialNote}
            isLastCard={index === plansData.length - 1}
            cardIndex={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Plans;
