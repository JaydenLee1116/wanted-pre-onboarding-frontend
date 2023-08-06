import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '../routes';

import Button from '../components/common/Button';
import PageLayout from '../components/common/PageLayout';
import Title from '../components/common/Title';

const RootPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <header>
        <Title className="text-4xl font-bold">JDN TODO LIST</Title>
      </header>
      <main className="flex w-48 flex-row items-center justify-between">
        <Button
          onClick={() => {
            navigate(ROUTE_PATH.SIGN_UP);
          }}
        >
          회원가입
        </Button>
        <Button
          onClick={() => {
            navigate(ROUTE_PATH.SIGN_IN);
          }}
        >
          로그인
        </Button>
      </main>
    </PageLayout>
  );
};

export default RootPage;
