import { Navigate, createBrowserRouter } from 'react-router-dom';

import { PostDetails } from '@pages/post-details';
import { PostListPage } from '@pages/post-list';

const router = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <PostListPage />,
    },
    {
      path: '/details/:postId',
      element: <PostDetails />,
    },
    {
      path: '*',
      element: <Navigate to={'/'} replace />,
    },
  ]);

export default router;
