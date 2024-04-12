import React from 'react';
import styles from './back-btn.module.scss';
import { combineStyles } from '@shared/lib';
import { useNavigate } from 'react-router-dom';

interface IProps {
  className?: string;
}

export const BackBtn: React.FC<IProps> = ({ className }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button className={combineStyles([styles.back, className])} onClick={handleBack}>
      Назад
    </button>
  );
};
