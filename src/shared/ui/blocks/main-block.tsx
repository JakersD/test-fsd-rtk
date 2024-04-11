import React from 'react';

import { combineStyles } from '@shared/lib';

import styles from './main-block.module.scss';

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export const MainBlock: React.FC<IProps> = ({ className, children }) => {
  return <div className={combineStyles([styles.wrapper, className])}>{children}</div>;
};
