import React from 'react';

import { BackBtn, ETitleSize, Title } from '@shared/ui';
import { useGetDetailedPostQuery } from '@entities/post/model/postApi';
import { useLocation } from 'react-router-dom';
import { getIdFromPathname } from '@shared/lib';
import { PostDetailedInfo } from '@widgets/post-detailed-info';

import styles from './post-details.module.scss';

export const PostDetails: React.FC = () => {
  const location = useLocation();
  const { data, isLoading } = useGetDetailedPostQuery(getIdFromPathname(location.pathname));

  return (
    <>
      <BackBtn className={styles.backbtn} />
      <Title className={styles.title} size={ETitleSize.H1}>
        Details
      </Title>
      {isLoading && <p>...Loading...</p>}
      {data && <PostDetailedInfo post={data} />}
    </>
  );
};
