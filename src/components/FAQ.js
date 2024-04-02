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
    <div className="font-action hero-container relative m-auto flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 w-full lg:max-w-[1240px]">
      <div>
        {FAQdata.map((faqData, index) => (
          <div key={index} className="shadow-lg">
            <h1
              className="font-bold text-lg cursor-pointer faq-question"
              onClick={() => toggleQuestion(index)}
            >
              {faqData.question}
            </h1>
            {activeQuestion === index && (
              <div ref={answerRef} className="mt-2 faq-answer">
                <ul>
                  <li>{faqData.answer}</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
