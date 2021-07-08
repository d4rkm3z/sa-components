import React from 'react'
import './AccItem.scss'
import { BsPlus } from 'react-icons/bs'
import { BsX } from 'react-icons/bs'

interface AccItemProps {
  text: string
  title: string
  active: string
  toggle: (title: string) => void
}

function AccItem({ text, title, active, toggle }: AccItemProps) {
  return (
    <li className="AccItem">
      <div className="AccItem__header">
        <p className="AccItem__title">{title}</p>
        <div
          className={(active === title ? 'clickedIcon' : '') + ' AccItem__icon'}
          onClick={() => toggle(title)}
        >
          {active === title ? (
            <BsX size="2rem" color="rgba(37, 132, 255, 1)" />
          ) : (
            <BsPlus size="2rem" />
          )}
        </div>
      </div>
      <div className={(active === title ? 'show' : '') + ' AccItem__content'}>
        <p>{text}</p>
      </div>
    </li>
  )
}

export default AccItem
