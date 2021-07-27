import React from "react";
import classnames from "classnames";

import styles from "./DropdownList.module.scss";

interface IDropdownItemProps {
  formName: string;
  labelHeader: string;
  optionsArray: string[];
  handleChange: (arg: any) => void;
}

export function DropdownList({
  formName,
  labelHeader,
  optionsArray,
  handleChange,
}: IDropdownItemProps) {
  let options = optionsArray.map((option) => {
    return <option value={option}>{option}</option>;
  });
  return (
    <div className={styles.Dropdown}>
      <label htmlFor={formName}>{labelHeader}</label>
      <select name={formName} id={formName} onChange={handleChange}>
        {options}
      </select>
    </div>
  );
}
