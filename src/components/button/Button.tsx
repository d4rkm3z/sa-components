import React from "react";
import "./button.scss";
import classnames from "classnames";

interface BtnItemProps {
  className?: string;
}

export default function Button({ className }: BtnItemProps) {
  return <div className={classnames("btn", className)}>Начать анализ</div>;
}