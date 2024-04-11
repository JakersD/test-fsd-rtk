import { createBrowserRouter } from 'react-router-dom';
import { PostListPage } from '@pages/post-list/post-list';

export const router = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <PostListPage />,
    },
  ]);
