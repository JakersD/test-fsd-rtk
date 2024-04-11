import React from 'react';

import { ETitleSize } from './types';
import { combineStyles } from '@shared/lib';

import styles from './title.module.scss';

interface IProps {
  size: ETitleSize;
  children: any;
  className?: string;
}

export const Title: React.FC<IProps> = ({ size, children, className }) => {
  const renderTitle = (): JSX.Element => {
    switch (size) {
      case ETitleSize.H1:
        return <h1 className={combineStyles([styles.h1, className])}>{children}</h1>;
      case ETitleSize.H2:
        return <h2 className={combineStyles([styles.h2, className])}>{children}</h2>;
      case ETitleSize.H3:
        return <h3 className={combineStyles([styles.h3, className])}>{children}</h3>;
      case ETitleSize.H4:
        return <h4 className={combineStyles([styles.h4, className])}>{children}</h4>;
      case ETitleSize.H5:
        return <h5 className={combineStyles([styles.h5, className])}>{children}</h5>;
      case ETitleSize.H6:
        return <h6 className={combineStyles([styles.h6, className])}>{children}</h6>;
    }
  };

  return renderTitle();
};
