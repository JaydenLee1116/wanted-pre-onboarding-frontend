import Button from '../components/Button';

const RootPage = () => {
  return (
    <section className="flex h-96 w-full flex-col items-center justify-between">
      <div className="text-4xl font-bold">JDN TODO LIST</div>
      <section className="flex w-48 flex-row justify-between">
        <Button onClick={() => {}}>회원가입</Button>
        <Button onClick={() => {}}>로그인</Button>
      </section>
    </section>
  );
};

export default RootPage;
