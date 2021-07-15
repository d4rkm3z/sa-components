import React from 'react';
import classnames from 'classnames';

import './button.scss';

interface IBtnItemProps {
  className?: string;
  name: string;
}

export const Button = ({className, name}: IBtnItemProps) => (
  <div className={classnames('btn', className)}>{name}</div>
);
