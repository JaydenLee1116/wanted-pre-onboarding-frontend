import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>홈</div>,
  },
  {
    path: '/signup',
    element: <div>회원가입 페이지</div>,
  },
  {
    path: '/signin',
    element: <div>로그인 페이지</div>,
  },
]);

export default router;
