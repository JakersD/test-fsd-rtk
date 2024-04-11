import { createBrowserRouter } from 'react-router-dom';
import { PostListPage } from '@pages/post-list/post-list';

const router = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <PostListPage />,
    },
  ]);

export default router;
