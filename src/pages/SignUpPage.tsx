import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../components/Input';
import Button from '../components/Button';
import isValid from '../utils/isValid';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const isSignUpBtnDisabled = !isValid.email(email) || !isValid.password(password);

  return (
    <section className="flex h-96 w-full flex-col items-center justify-between">
      <div className="text-4xl font-bold">회원가입</div>
      <Input>
        <Input.Label htmlFor="email">이메일</Input.Label>
        <Input.TextField
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          data-testid="email-input"
        />
        {!email ||
          (!isValid.email(email) && <Input.BottomText>이메일 형식에 맞게 입력해주세요.</Input.BottomText>)}
      </Input>
      <Input>
        <Input.Label htmlFor="password">비밀번호</Input.Label>
        <Input.TextField
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          data-testid="password-input"
        />
        {!password ||
          (!isValid.password(password) && (
            <Input.BottomText>비밀번호는 8자 이상이어야 합니다.</Input.BottomText>
          ))}
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
          disabled={isSignUpBtnDisabled}
        >
          회원가입하기
        </Button>
        <Button
          onClick={() => {
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
