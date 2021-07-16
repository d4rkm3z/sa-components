import React from 'react'
import classes from './AccItem.module.scss'
import { BsPlus } from 'react-icons/bs'
import { BsX } from 'react-icons/bs'
import classNames from 'classnames'

interface AccItemProps {
  text: string
  title: string
  active: string
  toggle: (title: string) => void
}

function AccItem({ text, title, active, toggle }: AccItemProps) {
  return (
    <li className={classes.AccItem}>
      <div className={classes.header}>
        <p className={classes.title}>{title}</p>
        <div
          className={
            active === title
              ? classNames(classes.clickedIcon, classes.icon)
              : classes.icon
          }
          onClick={() => toggle(title)}
        >
          {active === title ? (
            <BsX size="2rem" color="rgba(37, 132, 255, 1)" />
          ) : (
            <BsPlus size="2rem" />
          )}
        </div>
      </div>
      <div
        className={
          active === title
            ? classNames(classes.show, classes.content)
            : classes.content
        }
      >
        <p>{text}</p>
      </div>
    </li>
  )
}

export default AccItem
