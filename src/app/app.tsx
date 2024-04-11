import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { RouterProvider } from 'react-router-dom';

import './styles/index.scss';

import router from './router';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router()} />
  </Provider>,
);
