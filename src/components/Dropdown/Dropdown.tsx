import React, { Component } from "react";
import Select from "react-select";

import styles from "./Dropdown.module.scss";

interface IDropdownItemProps {
  dropdownName: string;
  labelText: string;
  optionsArray: { value: string; label: string }[];
  handleChange: (arg: any) => void;
}
export function Dropdown({
  dropdownName,
  labelText,
  optionsArray,
  handleChange,
}: IDropdownItemProps) {
  return (
    <div className={styles.Dropdown}>
      <label htmlFor={dropdownName}>{labelText}</label>
      <Select
        name={dropdownName}
        defaultValue={optionsArray[0]}
        options={optionsArray}
        onChange={handleChange}
      />
    </div>
  );
}
