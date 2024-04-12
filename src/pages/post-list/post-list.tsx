import { ETitleSize, Title } from '@shared/ui';
import React, { useRef } from 'react';

import styles from './post-list.module.scss';
import { useGetPostsQuery } from '@entities/post';
import { PostItem } from '@widgets/post-item/ui/post-item';

import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
  ListRowProps,
  WindowScroller,
} from 'react-virtualized';

export const PostListPage: React.FC = () => {
  const { data, isLoading } = useGetPostsQuery();
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
        Post Generator
      </Title>
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
              <List
                autoHeight
                height={height}
                width={width}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                scrollTop={scrollTop}
                rowCount={data?.length || 0}
                rowHeight={cache.current.rowHeight}
                deferredMeasurementCache={cache.current}
                rowRenderer={renderRow}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    </>
  );
};
