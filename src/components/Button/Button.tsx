import React from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';

interface IBtnItemProps {
  text: string;
  className?: string;
}

export const Button = ({className, text}: IBtnItemProps) => (
  <div className={classnames(styles.Button, className)}>{text}</div>
);
