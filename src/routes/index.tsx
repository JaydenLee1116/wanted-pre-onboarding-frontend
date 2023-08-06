import { createBrowserRouter } from 'react-router-dom';

import RootPage from '../pages/RootPage';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import TodoPage from '../pages/TodoPage';
import ErrorPage from '../pages/ErrorPage';

export const ROUTE_PATH = Object.freeze({
  ROOT: '/',
  SIGN_UP: '/signup',
  SIGN_IN: '/signin',
  TODO: '/todo',
  ERROR: '/error',
});

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <RootPage />,
  },
  {
    path: ROUTE_PATH.SIGN_UP,
    element: <SignUpPage />,
    errorElement: <RootPage />,
  },
  {
    path: ROUTE_PATH.SIGN_IN,
    element: <SignInPage />,
  },
  {
    path: ROUTE_PATH.TODO,
    element: <TodoPage />,
  },
  {
    path: ROUTE_PATH.ERROR,
    element: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
