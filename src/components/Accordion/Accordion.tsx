import React, { useState } from "react";
import AccItem from "./AccItem/AccItem";

import "./Accordion.scss";

function Accordion() {
  const [active, setActive] = useState("");

  const accordions = [
    {
      id: 1,
      question: "Текст вопроса 1?",
      answer:
        "Никаких. Сервис подскажет, что нужно сделат чтобы провести анализ и правильно разобраться в его результатах.",
    },
    {
      id: 2,
      question: "Текст вопроса 2?",
      answer:
        "Никаких. Сервис подскажет, что нужно сделат чтобы провести анализ и правильно разобраться в его результатах.",
    },
    {
      id: 3,
      question: "Текст вопроса 3?",
      answer:
        "Никаких. Сервис подскажет, что нужно сделат чтобы провести анализ и правильно разобраться в его результатах.",
    },
  ];

  const toggle = (title: string) => {
    if (title === active) {
      setActive("");
    } else {
      setActive(title);
    }
  };

  return (
    <ul className="Accordion">
      {accordions.map((item) => {
        return (
          <AccItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            active={active}
            toggle={toggle}
          />
        );
      })}
    </ul>
  );
}

export default Accordion;
