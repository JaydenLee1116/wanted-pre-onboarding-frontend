import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import PageLayout from '../components/PageLayout';
import Title from '../components/Title';

const RootPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout className="flex h-96 w-full flex-col items-center justify-between">
      <Title className="text-4xl font-bold">JDN TODO LIST</Title>
      <section className="flex w-48 flex-row justify-between">
        <Button
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입
        </Button>
        <Button
          onClick={() => {
            navigate('/signin');
          }}
        >
          로그인
        </Button>
      </section>
    </PageLayout>
  );
};

export default RootPage;
