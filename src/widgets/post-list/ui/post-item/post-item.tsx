import { IPost } from '@entities/post';
import { Button, ETitleSize, MainBlock, Text, Title } from '@shared/ui';
// import { MAX_LENGTH } from '../config/post-config';
import React from 'react';

import styles from './post-item.module.scss';
import { useNavigate } from 'react-router-dom';
import { MAX_LENGTH } from '../../config/post-config';

interface IProps {
  post: IPost;
}

export const PostItem: React.FC<IProps> = ({ post }) => {
  const navigate = useNavigate();

  const handleDetailNavigate = () => navigate(`/details/${post.id}`);

  return (
    <MainBlock>
      <div className={styles.title}>
        <Title className={styles.post_number} size={ETitleSize.H4}>
          {post.userId}
        </Title>
        <Title size={ETitleSize.H3}>{post.title}</Title>
      </div>
      <Text className={styles.text}>{post.body}</Text>
      {post.body.length >= MAX_LENGTH && (
        <Button className={styles.button} onClick={handleDetailNavigate}>
          Подробнее
        </Button>
      )}
    </MainBlock>
  );
};
