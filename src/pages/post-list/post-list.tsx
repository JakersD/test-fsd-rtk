import { ETitleSize, Title } from '@shared/ui';
import React, { useRef } from 'react';

import styles from './post-list.module.scss';
import { IPost, useGetPostsQuery } from '@entities/post';
import { PostItem } from '@widgets/post-item/ui/post-item';

import { AutoSizer, List, ListProps, ListRowProps, ListRowRenderer, WindowScroller } from 'react-virtualized';

import 'react-virtualized/styles.css';

export const PostListPage: React.FC = () => {
  const { data, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <p>Loading</p>;
  }

  const renderRow = ({ key, index, style }: ListRowProps): React.ReactNode => {
    if (data) {
      const post = data[index];

      return (
        <div key={key} style={style}>
          <PostItem key={post.id} post={post} />
        </div>
      );
    }

    return <></>;
  };

  return (
    <>
      <Title className={styles.title} size={ETitleSize.H1}>
        Post Generator
      </Title>
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
              <div>
                <List
                  autoHeight
                  height={height}
                  width={width}
                  isScrolling={isScrolling}
                  onScroll={onChildScroll}
                  scrollTop={scrollTop}
                  rowCount={data?.length || 0}
                  rowHeight={260}
                  rowRenderer={renderRow}
                />
              </div>
            )}
          </AutoSizer>
        )}
      </WindowScroller>
      {/* <div style={{ width: '100%', height: '100vh' }}>
        <WindowScroller>
          {({ height, isScrolling, onChildScroll, registerChild, scrollLeft, scrollTop }) => (
            <AutoSizer disableHeight>
              {({ width }) => (
                <div>
                  <List
                    width={width}
                    height={height}
                    rowHeight={260}
                    rowCount={data?.length || 0}
                    rowRenderer={({ key, index, style, parent }) => {
                      if (data) {
                        const post = data[index];

                        return (
                          <div key={key} style={style}>
                            <PostItem key={post.id} post={post} />
                          </div>
                        );
                      }
                    }}
                  />
                </div>
              )}
            </AutoSizer>
          )}
        </WindowScroller>
      </div> */}
      {/* {data?.map((post) => 
      <PostItem key={post.id} post={post} />)} */}
    </>
  );
};
