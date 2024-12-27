import React from "react";
import { useInView } from "react-intersection-observer";

// Reusable Step Component with lazy loading
const Step = ({ number, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensure it triggers only once
    threshold: 0.5, // Trigger when 10% of the component is visible
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col w-fit items-center transition-opacity duration-[1300ms] ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-[97px] h-[97px] flex justify-center items-center bg-primary text-white rounded-full font-sans text-[48px] font-semibold">
        {number}
      </div>
      <div className="text-center mt-4">
        <p className="max-[480px]:text-[42px] font-sans font-bold text-[48px] leading-[1.2]">
          {title}
        </p>
        <p className="font-sans mt-3 font-medium max-[480px]:text-[16px] text-[20px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const Journey = () => {
  return (
    <section
      id="Journey"
      className="pt-16 py-16 mt-[166px] container mx-auto px-4 relative"
    >
      {/* Title */}
      <h2 className="font-sans max-[480px]:text-[42px] font-extrabold text-[48px] text-center mb-16">
        Your <span className="text-primary">Journey</span>
      </h2>

      {/* Steps for Large Screens */}
      <div className="relative max-[970px]:min-h-0 min-h-[3000px] hidden lg:flex lg:relative">
        {/* Center Vertical Line */}
        <div className="absolute hidden lg:block bg-black w-[2px] h-[2800px] left-1/2 transform -translate-x-1/2 top-0"></div>

        {/* Left Column Steps */}
        <div className="lg:absolute lg:left-0 lg:top-[200px] flex flex-col items-center gap-[450px]">
          <Step
            number="1"
            title={
              <>
                Payment <span className="text-primary">Received</span>
              </>
            }
            description={
              <>
                Welcome aboard! We start by <br />
                <span className="text-primary">
                  confirming your payment
                </span>{" "}
                and setting <br /> the stage for your transformation.
              </>
            }
          />
          <Step
            number="3"
            title={
              <>
                Personalized <br />
                <span className="text-primary">Consultation</span>
              </>
            }
            description={
              <>
                Schedule a 20-minute call to discuss <br />
                your specific{" "}
                <span className="text-primary">challenges and goals,</span>{" "}
                <br />
                allowing us to tailor your{" "}
                <span className="text-primary">workout</span> and <br />
                <span className="text-primary">nutrition</span> plan more{" "}
                <span className="text-primary">effectively.</span>
              </>
            }
          />
          <Step
            number="5"
            title={
              <>
                <span className="text-primary">Regular</span> <br />
                Adjustments
              </>
            }
            description={
              <>
                Your plan will be <span className="text-primary">adjusted</span>{" "}
                every 5–10 <br />
                days based on your{" "}
                <span className="text-primary">feedback and progress.</span>
              </>
            }
          />
        </div>

        {/* Right Column Steps */}
        <div className="lg:absolute lg:right-0 lg:top-[500px] flex flex-col items-center gap-[450px]">
          <Step
            number="2"
            title="Questionnaire"
            description={
              <>
                We’ll send you a detailed yet <br />
                <span className="text-primary">
                  easy-to-follow questionnaire
                </span>{" "}
                to understand you <br /> better.
              </>
            }
          />
          <Step
            number="4"
            title={
              <>
                Your <span className="text-primary">Personalized</span> <br />
                Plan
              </>
            }
            description={
              <>
                Receive a <span className="text-primary">customized</span>{" "}
                fitness and <br />
                nutrition plan tailored to your lifestyle.
              </>
            }
          />
          <Step
            number="6"
            title={
              <>
                <span className="text-primary">Achieving</span> Your <br />
                <span className="text-primary">Dream</span> Body
              </>
            }
            description={
              <>
                With{" "}
                <span className="text-primary">consistency and coaching,</span>{" "}
                unlock <br />
                the strongest{" "}
                <span className="text-primary">
                  most confident version of yourself.
                </span>
              </>
            }
          />
        </div>
      </div>

      {/* Steps for Smaller Screens */}
      <div className="flex flex-col items-center gap-16 lg:hidden">
        <Step
          number="1"
          title={
            <>
              Payment <span className="text-primary">Received</span>
            </>
          }
          description={
            <>
              Welcome aboard! We start by <br />
              <span className="text-primary">confirming your payment</span> and
              setting <br /> the stage for your transformation.
            </>
          }
        />
        <Step
          number="2"
          title="Questionnaire"
          description={
            <>
              We’ll send you a detailed yet <br />
              <span className="text-primary">
                easy-to-follow questionnaire
              </span>{" "}
              to understand you <br /> better.
            </>
          }
        />
        <Step
          number="3"
          title={
            <>
              Personalized <br />
              <span className="text-primary">Consultation</span>
            </>
          }
          description={
            <>
              Schedule a 20-minute call to discuss <br />
              your specific{" "}
              <span className="text-primary">challenges and goals,</span> <br />
              allowing us to tailor your{" "}
              <span className="text-primary">workout</span> and <br />
              <span className="text-primary">nutrition</span> plan more{" "}
              <span className="text-primary">effectively.</span>
            </>
          }
        />
        <Step
          number="4"
          title={
            <>
              Your <span className="text-primary">Personalized</span> <br />
              Plan
            </>
          }
          description={
            <>
              Receive a <span className="text-primary">customized</span> fitness
              and <br />
              nutrition plan tailored to your lifestyle.
            </>
          }
        />
        <Step
          number="5"
          title={
            <>
              <span className="text-primary">Regular</span> <br />
              Adjustments
            </>
          }
          description={
            <>
              Your plan will be <span className="text-primary">adjusted</span>{" "}
              every 5–10 <br />
              days based on your{" "}
              <span className="text-primary">feedback and progress.</span>
            </>
          }
        />
        <Step
          number="6"
          title={
            <>
              <span className="text-primary">Achieving</span> Your <br />
              <span className="text-primary">Dream</span> Body
            </>
          }
          description={
            <>
              With{" "}
              <span className="text-primary">consistency and coaching,</span>{" "}
              unlock <br />
              the strongest{" "}
              <span className="text-primary">
                most confident version of yourself.
              </span>
            </>
          }
        />
      </div>
    </section>
  );
};

export default Journey;
