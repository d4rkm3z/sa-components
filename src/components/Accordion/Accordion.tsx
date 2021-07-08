import React, { useState } from 'react'
import AccItem from './AccItem/AccItem'

function Accordion() {
  const [active, setActive] = useState('')

  const accordions = [
    {
      id: 1,
      title: 'Текст вопроса 1?',
      text: 'Никаких. Сервис подскажет, что нужно сделат чтобы провести анализ и правильно разобраться в его результатах.',
    },
    {
      id: 2,
      title: 'Текст вопроса 2?',
      text: 'Никаких. Сервис подскажет, что нужно сделат чтобы провести анализ и правильно разобраться в его результатах.',
    },
    {
      id: 3,
      title: 'Текст вопроса 3?',
      text: 'Никаких. Сервис подскажет, что нужно сделат чтобы провести анализ и правильно разобраться в его результатах.',
    },
  ]

  const toggle = (title: string) => {
    if (title === active) {
      setActive('')
    } else {
      setActive(title)
    }
  }

  return (
    <ul className="Accordion">
      {accordions.map((item) => {
        return (
          <AccItem
            key={item.id}
            title={item.title}
            text={item.text}
            active={active}
            toggle={toggle}
          />
        )
      })}
    </ul>
  )
}

export default Accordion
