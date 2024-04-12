import { ETitleSize, Title } from '@shared/ui';
import React, { useRef, useState } from 'react';

import styles from './post-list.module.scss';
import { useGetPostsQuery } from '@entities/post';
import { PostItem } from '@widgets/post-item/ui/post-item';

import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  InfiniteLoader,
  List,
  ListRowProps,
  WindowScroller,
} from 'react-virtualized';

export const PostListPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetPostsQuery(page);
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 260,
    }),
  );

  if (isLoading) {
    return <p>Loading</p>;
  }

  const renderRow = ({ key, index, style, parent }: ListRowProps): React.ReactNode => {
    if (data) {
      const post = data[index];

      return (
        <CellMeasurer key={key} cache={cache.current} parent={parent} columnIndex={0} rowIndex={index}>
          <div style={style}>
            <PostItem key={post.id} post={post} />
          </div>
        </CellMeasurer>
      );
    }

    return <></>;
  };

  return (
    <>
      <Title className={styles.title} size={ETitleSize.H1}>
        Post Infinite Scroll
      </Title>
      {data && (
        <WindowScroller>
          {({ height, isScrolling, onChildScroll, scrollTop }) => (
            <InfiniteLoader
              isRowLoaded={({ index }) => index + 1 < data.length}
              loadMoreRows={({ startIndex, stopIndex }) => {
                console.log('Функция для загрузки отстрелила', startIndex, stopIndex);
                setPage(page + 1);
                return new Promise(() => {});
              }}
              rowCount={data.length}
            >
              {({ onRowsRendered, registerChild }) => (
                <AutoSizer disableHeight>
                  {({ width }) => (
                    <List
                      ref={registerChild}
                      autoHeight
                      height={height}
                      width={width}
                      isScrolling={isScrolling}
                      onScroll={onChildScroll}
                      scrollTop={scrollTop}
                      rowCount={data.length}
                      rowHeight={cache.current.rowHeight}
                      deferredMeasurementCache={cache.current}
                      rowRenderer={renderRow}
                      onRowsRendered={onRowsRendered}
                    />
                  )}
                </AutoSizer>
              )}
            </InfiniteLoader>
          )}
        </WindowScroller>
      )}
    </>
  );
};
