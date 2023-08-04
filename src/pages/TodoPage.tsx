import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TodoPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) navigate('/signin');
  });

  return <div>투두 페이지입니다.</div>;
};

export default TodoPage;
