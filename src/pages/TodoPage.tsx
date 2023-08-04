import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PageLayout from '../components/PageLayout';
import Title from '../components/Title';

const TodoPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) navigate('/signin');
  });

  return (
    <PageLayout>
      <Title>투두 리스트</Title>
    </PageLayout>
  );
};

export default TodoPage;
