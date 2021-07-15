import React from "react";
import "./button.scss";
import classnames from "classnames";

interface BtnItemProps {
  className?: string;
  name: string;
}

export default function Button({ className, name }: BtnItemProps ) {
  return <div className={classnames("btn", className)}>{name}</div>;
}