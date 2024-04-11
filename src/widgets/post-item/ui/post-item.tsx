import { IPost } from '@entities/post';
import { ETitleSize, MainBlock, Text, Title } from '@shared/ui';
import React from 'react';

import styles from './post-item.module.scss';

interface IProps {
  post: IPost;
}

export const PostItem: React.FC<IProps> = ({ post }) => {
  return (
    <MainBlock>
      <div className={styles.title}>
        <Title className={styles.post_number} size={ETitleSize.H4}>
          {post.userId}
        </Title>
        <Title size={ETitleSize.H4}>{post.title}</Title>
      </div>
      <Text className={styles.text}>{post.body}</Text>
    </MainBlock>
  );
};
