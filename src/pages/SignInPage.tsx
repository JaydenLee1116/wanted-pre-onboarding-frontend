import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../components/Input';
import Button from '../components/Button';
import isValid from '../utils/isValid';
import { axiosFetch } from '../api/axiosInstance';

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const isSignInBtnDisabled = !isValid.email(email) || !isValid.password(password);

  const handleSignInBtnClick = async () => {
    try {
      const res = await axiosFetch.post('/auth/signin', {
        email,
        password,
      });
      const { status, data } = res;
      const { accessToken } = data;
      console.log('응답 확인: ', res);
      if (status === 200) {
        localStorage.setItem('accessToken', accessToken);
        navigate('/todo');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="flex h-96 w-full flex-col items-center justify-between">
      <div className="text-4xl font-bold">로그인</div>
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
        <Button onClick={handleSignInBtnClick} data-testid="signin-button" disabled={isSignInBtnDisabled}>
          로그인하기
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

export default SignInPage;
