import { IPost } from '@entities/post';
import { ETitleSize, MainBlock, Text, Title } from '@shared/ui';
import React from 'react';

import styles from './post-detailed-info.module.scss';

interface IProps {
  post: IPost;
}

export const PostDetailedInfo: React.FC<IProps> = ({ post }) => {
  return (
    <MainBlock>
      <div className={styles.title}>
        <Title className={styles.post_number} size={ETitleSize.H4}>
          {post.userId}
        </Title>
        <Title size={ETitleSize.H3}>{post.title}</Title>
      </div>
      <Text>{post.body}</Text>
    </MainBlock>
  );
};
