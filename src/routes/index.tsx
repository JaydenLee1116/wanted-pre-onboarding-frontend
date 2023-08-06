import { createBrowserRouter } from 'react-router-dom';

import RootPage from '../pages/RootPage';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import TodoPage from '../pages/TodoPage';

export const ROUTE_PATH = Object.freeze({
  ROOT: '/',
  SIGN_UP: '/signup',
  SIGN_IN: '/signin',
  TODO: '/todo',
});

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <RootPage />,
  },
  {
    path: ROUTE_PATH.SIGN_UP,
    element: <SignUpPage />,
  },
  {
    path: ROUTE_PATH.SIGN_IN,
    element: <SignInPage />,
  },
  {
    path: ROUTE_PATH.TODO,
    element: <TodoPage />,
  },
]);

export default router;
