import { ETitleSize, Title } from '@shared/ui';
import React from 'react';

import styles from './post-list.module.scss';
import { useGetPostsQuery } from '@entities/post';
import { PostItem } from '@widgets/post-item/ui/post-item';

export const PostListPage: React.FC = () => {
  const { data, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <Title className={styles.title} size={ETitleSize.H1}>
        Post Generator
      </Title>
      {data?.map((post) => <PostItem key={post.id} post={post} />)}
    </>
  );
};
