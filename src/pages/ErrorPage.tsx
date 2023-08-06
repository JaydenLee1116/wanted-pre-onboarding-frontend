import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTE_PATH } from '../routes';

import PageLayout from '../components/common/PageLayout';
import Title from '../components/common/Title';
import { useEffect } from 'react';

const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const message = state?.message;

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate(ROUTE_PATH.ROOT);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <PageLayout>
      <header>
        <Title className="text-4xl font-bold">
          <span className="text-red-500">{message || '에러가 발생하였습니다!'}</span>
        </Title>
      </header>
      <main className="flex w-96 flex-row items-center justify-center text-xl">
        3초 후, 메인 페이지로 이동합니다.
      </main>
    </PageLayout>
  );
};

export default ErrorPage;
