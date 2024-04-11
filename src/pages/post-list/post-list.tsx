import { ETitleSize, Title } from '@shared/ui';
import React from 'react';

import styles from './post-list.module.scss';
import { useGetPostsQuery } from '@entities/post';
import { PostItem } from '@widgets/post-item/ui/post-item';

import { List } from 'react-virtualized'

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
      <List 
        width={600}
        height={400}
        rowHeight={50}
        rowCount={data?.length || 0}
        rowRenderer={({key, index, style, parent}) => {
          if (data) {
            const post = data[index]

            return <div key={key} style={style}>
              <PostItem key={post.id} post={post} />
            </div>
          }
        }}
      />
      {/* {data?.map((post) => 
      <PostItem key={post.id} post={post} />)} */}
    </>
  );
};
