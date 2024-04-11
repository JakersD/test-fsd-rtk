import React from 'react';

import styles from './text.module.scss';
import { combineStyles } from '@shared/lib';
import { ETextSize, ETextTheme, ETextWeight } from './types';

interface IProps {
  children: string;
  className?: string;
  weight?: ETextWeight;
  size?: ETextSize;
  theme?: ETextTheme;
}

export const Text: React.FC<IProps> = ({
  children,
  className,
  size = ETextSize.MD,
  weight = ETextWeight.NORMAL,
  theme = ETextTheme.GENERAL,
}) => {
  const renderWeight = () => (weight === ETextWeight.BOLD ? styles.textWeightBold : undefined);

  const renderSize = () => (size === ETextSize.MD ? styles.textMD : styles.textSM);

  const renderTheme = () => (theme === ETextTheme.GENERAL ? styles.general : styles.second);

  return (
    <p className={combineStyles([renderSize(), renderWeight(), renderTheme(), className])}>{children}</p>
  );
};
