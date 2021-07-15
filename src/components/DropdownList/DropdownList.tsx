import React from 'react';
import classnames from 'classnames';

import './dropdown.scss';

interface IDropdownItemProps {
  className?: string;
}

export const DropdownList = ({ className }: IDropdownItemProps) => (
  <div className={classnames('dropdown', className)} />
);
