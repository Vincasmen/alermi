import React, { useState, useEffect, useRef } from "react";
import FAQdata from "../dataFAQ";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const answerRef = useRef(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Zavřít aktivní otázku, pokud uživatel klikne mimo pole otázek a mimo pole s odpovědí
      if (
        !event.target.closest(".faq-question") &&
        !event.target.closest(".faq-answer")
      ) {
        setActiveQuestion(null);
      }
    };

    // Přidat posluchač událostí po načtení komponenty
    document.body.addEventListener("click", handleOutsideClick);

    // Odebrat posluchač událostí po odmontování komponenty
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className=" FAQ-container relative m-auto flex flex-col px-4 lg:pt-0 lg:flex-col lg:pb-0 w-full max-w-xl lg:w-3/6">
      <div className="gap-4 ">
        {FAQdata.map((faqData, index) => (
          <div key={index} className="shadow-md p-2  my-4 rounded-md">
            <h1
              className="font-action text-center font-bold text-lg cursor-pointer faq-question bg-gradient-to-br from-[#00df9a] to-[#86efac]"
              onClick={() => toggleQuestion(index)}
            >
              {faqData.question}
            </h1>
            {activeQuestion === index && (
              <div
                ref={answerRef}
                className="font-display mt-2 faq-answer bg-slate-50 rounded-md"
              >
                {faqData.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
