import React from "react";
import classnames from "classnames";

import styles from "./DropdownList.module.scss";

interface IDropdownItemProps {
  formName: string;
  labelHeader: string;
  optionsArray: string[];
}

export function DropdownList({
  formName,
  labelHeader,
  optionsArray,
}: IDropdownItemProps) {
  let options = optionsArray.map(option => {
    return <option value={option}>{option}</option>;
  });
  return (
    <>
      <label htmlFor={formName}>{labelHeader}</label>
      <select name={formName} id={formName}>
        {options}
      </select>
    </>
  );
}
