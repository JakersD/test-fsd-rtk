import { IPost } from '@entities/post';
import React, { useRef } from 'react';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  InfiniteLoader,
  List,
  ListRowProps,
  WindowScroller,
} from 'react-virtualized';
import { PostItem } from '../post-item/post-item';

interface IProps {
  posts: IPost[];
  page: number;
  setPage: (page: number) => void;
}

export const PostList: React.FC<IProps> = ({ posts, page, setPage }) => {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 260,
    }),
  );

  const loadMoreRows = () => {
    setPage(page + 1);
    return new Promise(() => {});
  };

  const renderRow = ({ key, index, style, parent }: ListRowProps): React.ReactNode => {
    if (posts) {
      const post = posts[index];

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
    <WindowScroller>
      {({ height, isScrolling, onChildScroll, scrollTop }) => (
        <InfiniteLoader
          isRowLoaded={({ index }) => index + 1 < posts.length}
          loadMoreRows={loadMoreRows}
          rowCount={posts.length}
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
                  rowCount={posts.length}
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
  );
};
