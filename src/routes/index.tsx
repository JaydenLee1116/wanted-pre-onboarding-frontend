import { createBrowserRouter } from 'react-router-dom';

import RootPage from '../pages/RootPage';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import TodoPage from '../pages/TodoPage';

export const PATH = Object.freeze({
  ROOT: '/',
  SIGN_UP: '/signup',
  SIGN_IN: '/signin',
  TODO: '/todo',
});

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <RootPage />,
  },
  {
    path: PATH.SIGN_UP,
    element: <SignUpPage />,
  },
  {
    path: PATH.SIGN_IN,
    element: <SignInPage />,
  },
  {
    path: PATH.TODO,
    element: <TodoPage />,
  },
]);

export default router;
