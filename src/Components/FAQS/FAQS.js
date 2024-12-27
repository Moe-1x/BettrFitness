import React, { useState } from "react";

const faqs = [
  {
    question: "What makes your coaching different from others?",
    answer:
      "We dive into every aspect of your life to make sure you get the transformation you need. I focus on accountability, mindset coaching, and sustainable habit-building to ensure you get long-term results. Plus, you’ll have direct access to me for real-time support and motivation.",
  },
  {
    question:
      "What if I have a busy schedule or travel often? Will your coaching still work for me?",
    answer:
      "My goal is to make fitness work *for* you, not add more stress to your life. Our program is designed to fit into your lifestyle, no matter how busy or unpredictable it may be. With workout plans that can be done in as little as 20-30 minutes and options for home or hotel workouts when you're traveling. Plus, real-time communication and regular check-ins, we can quickly adjust your plan to match your schedule.",
  },
  {
    question: "How long does it take to start?",
    answer:
      "After our first onboarding video to discuss any questions you might have, you can expect your personalized workout and nutrition program to be delivered to you in less than 48 hours.",
  },
  {
    question: "Do I have to commit to a long-term program?",
    answer:
      "Not at all! We offer month-to-month options so you can continue as long as you feel it’s benefiting you. That said, most clients see LIFE CHANGING RESULTS with a minimum 3-month commitment.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "This depends on your starting point and goals. Most clients start noticing changes in energy, strength, or appearance within the first 2–3 weeks. Long-term results require consistent effort and we’ll work together to keep you on track!",
  },
  {
    question: "How will we communicate?",
    answer:
      "Depending on the package you choose, we’ll communicate through video check-ins or only WhatsApp. *I make sure to stay connected* so you always feel supported.",
  },
  {
    question: "What does a typical check-in look like?",
    answer:
      "During check-ins, we’ll discuss your progress, challenges, and questions. I’ll provide feedback, adjust your plan if needed, and keep you motivated!",
  },
  {
    question: "How often will my plan be updated?",
    answer:
      "Nutrition plans are updated every 7-10 days if needed. Workout plans are updated monthly, but if your progress or goals change, we’ll make adjustments sooner to keep you on track.",
  },
];

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Function to convert '*' into <strong> for bold text
  const formatAnswer = (answer) => {
    return answer.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
  };

  return (
    <section
      id="FAQS"
      className=" mt-[166px] font-sans text-black py-10 px-4 lg:px-16"
    >
      <h2 className="text-center text-4xl font-bold mb-8 text-primary">
        Frequently Asked Questions
      </h2>
      <div className="max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 last:border-b-0">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <span className="text-2xl text-primary">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-600 text-[16px]">
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatAnswer(faq.answer), // Process and inject formatted answer
                  }}
                ></p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQS;
