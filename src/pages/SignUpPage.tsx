import Input from '../components/Input';

const SignUpPage = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-between">
      <div className="text-4xl font-bold">회원가입</div>
      <Input>
        <Input.Label htmlFor="email">이메일</Input.Label>
        <Input.TextField id="email" type="email" />
        <Input.BottomText>이메일 형식에 맞게 입력해주세요.</Input.BottomText>
      </Input>
      <Input>
        <Input.Label htmlFor="password">비밀번호</Input.Label>
        <Input.TextField id="password" type="password" />
        <Input.BottomText>비밀번호는 8자 이상이어야 합니다.</Input.BottomText>
      </Input>
    </section>
  );
};

export default SignUpPage;
