import { ETitleSize, Title } from '@shared/ui';
import React, { useEffect, useState } from 'react';

import styles from './post-list.module.scss';
import { useGetPostsQuery } from '@entities/post';
import { PostList } from '@widgets/post-list';

export const PostListPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetPostsQuery(page);

  // useEffect(() => {
  //   let scrollPos = 0;
  //   const chota = () => {
  //     scrollPos = window.scrollY;
  //   };

  //   const savedScroll = localStorage.getItem('scroll');
  //   console.log('saved', savedScroll);

  //   if (savedScroll) {
  //     setTimeout(() => {
  //       window.scrollTo(0, +savedScroll);
  //       console.log('current', window.scrollY);
  //     }, 1000);
  //   }

  //   window.addEventListener('scroll', chota);

  //   return () => {
  //     console.log('ПРОИЗОШЕЛ UNMOUNT', String(scrollPos));

  //     window.removeEventListener('scroll', chota);
  //     localStorage.setItem('scroll', String(scrollPos));
  //   };
  // }, []);

  return (
    <>
      <Title className={styles.title} size={ETitleSize.H1}>
        Post Infinite Scroll
      </Title>
      {isLoading && <p>Loading</p>}
      {data && <PostList posts={data} page={page} setPage={setPage} />}
    </>
  );
};
