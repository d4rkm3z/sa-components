import React from "react";
import "./dropdown.scss";
import classnames from "classnames";

interface DropdownItemProps {
  className?: string;
}

export default function DropdownList({ className }: DropdownItemProps) {
  return <div className={classnames("dropdown", className)}></div>;
}