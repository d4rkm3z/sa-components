import React, { Component } from "react";
import Select from "react-select";

import styles from "./DropdownList.module.scss";

interface IDropdownItemProps {
  formName: string;
  labelHeader: string;
  optionsArray: { value: string; label: string }[];
  handleChange: (arg: any) => void;
}
export function DropdownList({
  formName,
  labelHeader,
  optionsArray,
  handleChange,
}: IDropdownItemProps) {
  return (
    <div className={styles.Dropdown}>
      <label htmlFor={formName}>{labelHeader}</label>
      <Select
        defaultValue={optionsArray[0]}
        options={optionsArray}
        onChange={handleChange}
      />
    </div>
  );
}
