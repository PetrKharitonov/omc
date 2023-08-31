"use client";
import { SlArrowLeft } from "react-icons/sl";
import { useState } from "react";

const Faq = ({ faqs }) => {
  const [selected, setSelected] = useState();

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="faq-container">
      {faqs.map((el, i) => {
        const faq = el.faq;
        return (
          <div className="faq" onClick={() => toggle(i)}>
            <div className="faq-upper">
              <h4>{faq.question}</h4>
              <SlArrowLeft
                size={20}
                color="#2580e5"
                className={selected === i ? "faqArrowsRotate" : "faqArrows"}
              />
            </div>

            {selected === i && (
              <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
