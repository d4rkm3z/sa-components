import React, { useState } from "react";
import { AccItem } from "./AccItem/AccItem";

import "./Accordion.scss";

interface IAccordionProps {
  items: { id?: number; question: string; answer: string }[];
}

export const Accordion = ({ items }: IAccordionProps) => {
  const [active, setActive] = useState("");

  const toggle = (title: string) => {
    if (title === active) {
      setActive("");
    } else {
      setActive(title);
    }
  };

  return (
    <ul className="Accordion">
      {items.map((item) => {
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
};
