import Select, { components } from "react-select";
import caret from "./assets/caret.svg";

import styles from "./Dropdown.module.scss";

interface IDropdownItemProps {
  active: boolean;
  dropdownName: string;
  labelText: string;
  optionsArray: { value: string; label: string }[];
  handleChange: (arg: any) => void;
}
const DropdownIndicator = (props: any) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <img src={caret} alt="caret icon" className={styles.CaretIcon} />
      </components.DropdownIndicator>
    )
  );
};
const rewrittenStyles = {
  control: (provided: any) => ({
    ...provided,
    border: "1px solid rgba(0, 66, 105, 0,28)",
    borderRadius: "2px",
    marginTop: "4px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};
export function Dropdown({
  active,
  dropdownName,
  labelText,
  optionsArray,
  handleChange,
}: IDropdownItemProps) {
  return (
    <div className={active ? styles.Dropdown : styles.Unactive}>
      <label htmlFor={dropdownName}>{labelText}</label>
      <Select
        components={{ DropdownIndicator }}
        styles={rewrittenStyles}
        className={styles.Select}
        name={dropdownName}
        defaultValue={optionsArray[0]}
        options={optionsArray}
        onChange={handleChange}
      />
    </div>
  );
}
