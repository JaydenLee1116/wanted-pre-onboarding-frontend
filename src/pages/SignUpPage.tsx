import { ChangeEvent, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import isValid from '../utils/isValid';
import { axiosFetch } from '../api/axiosInstance';
import { ROUTE_PATH } from '../routes';
import { API_PATH } from '../api/apiConfig';

import Button from '../components/common/Button';
import Input from '../components/common/Input';
import PageLayout from '../components/common/PageLayout';
import Title from '../components/common/Title';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isSignUpBtnDisabled = !isValid.email(email) || !isValid.password(password);

  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUpBtnClick = async () => {
    try {
      await axiosFetch.post(API_PATH.AUTH.SIGN_UP, {
        email,
        password,
      });
      navigate(ROUTE_PATH.SIGN_IN);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const { response } = err;
        const { data } = response!;
        const { message } = data;
        navigate(ROUTE_PATH.ERROR, { state: { message } });
      } else {
        navigate(ROUTE_PATH.ERROR);
      }
    }
  };

  useLayoutEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) navigate(ROUTE_PATH.TODO);
  }, []);

  return (
    <PageLayout>
      <header>
        <Title>회원가입</Title>
      </header>
      <main className="flex w-96 flex-col items-center gap-y-16">
        <section className="flex w-60 flex-col gap-y-8">
          <Input>
            <Input.Label htmlFor="email">이메일</Input.Label>
            <Input.TextField
              id="email"
              type="email"
              value={email}
              onChange={handleEmailInputChange}
              data-testid="email-input"
            />
            {!email ||
              (!isValid.email(email) && (
                <Input.BottomText>이메일 형식에 맞게 입력해주세요.</Input.BottomText>
              ))}
          </Input>
          <Input>
            <Input.Label htmlFor="password">비밀번호</Input.Label>
            <Input.TextField
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordInputChange}
              data-testid="password-input"
            />
            {!password ||
              (!isValid.password(password) && (
                <Input.BottomText>비밀번호는 8자 이상이어야 합니다.</Input.BottomText>
              ))}
          </Input>
        </section>
        <section className="flex w-96 flex-row justify-center gap-x-8">
          <Button onClick={handleSignUpBtnClick} data-testid="signup-button" disabled={isSignUpBtnDisabled}>
            회원가입하기
          </Button>
          <Button
            onClick={() => {
              navigate(ROUTE_PATH.ROOT);
            }}
          >
            취소하기
          </Button>
        </section>
      </main>
    </PageLayout>
  );
};

export default SignUpPage;
