import { useNavigate } from 'react-router-dom';

import Input from '../components/Input';
import Button from '../components/Button';

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex h-96 w-full flex-col items-center justify-between">
      <div className="text-4xl font-bold">회원가입</div>
      <Input>
        <Input.Label htmlFor="email">이메일</Input.Label>
        <Input.TextField
          id="email"
          type="email"
          value="이메일입니다."
          onChange={() => {}}
          data-testid="email-input"
        />
        <Input.BottomText>이메일 형식에 맞게 입력해주세요.</Input.BottomText>
      </Input>
      <Input>
        <Input.Label htmlFor="password">비밀번호</Input.Label>
        <Input.TextField
          id="password"
          type="password"
          value="비밀번호입니다."
          onChange={() => {}}
          data-testid="password-input"
        />
        <Input.BottomText>비밀번호는 8자 이상이어야 합니다.</Input.BottomText>
      </Input>
      <section className="flex w-48 flex-row justify-between">
        <Button
          onClick={() => {
            // TODO: 회원가입 POST 요청 보내기
            // TODO: 회원가입 성공 시 로그인 페이지로 이동하기
            // TODO: 회원가입 실패 시 에러 메시지 보여주기
            navigate('/signin');
          }}
          data-testid="signup-button"
        >
          회원가입하기
        </Button>
        <Button
          onClick={() => {
            // TODO: 이메일, 비밀번호 상태 초기화하고 루트 페이지로 이동하기
            navigate('/');
          }}
        >
          취소하기
        </Button>
      </section>
    </section>
  );
};

export default SignUpPage;
