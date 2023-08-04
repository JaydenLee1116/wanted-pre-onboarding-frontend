import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/common/Button';
import Input from '../components/common/Input';
import PageLayout from '../components/common/PageLayout';
import Title from '../components/common/Title';

import isValid from '../utils/isValid';
import { axiosFetch } from '../api/axiosInstance';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isSignUpBtnDisabled = !isValid.email(email) || !isValid.password(password);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUpBtnClick = async () => {
    try {
      const res = await axiosFetch.post('/auth/signup', {
        email,
        password,
      });
      const { status } = res;
      console.log('응답 확인: ', res);
      if (status === 201) navigate('/signin');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) navigate('/todo');
  }, []);

  return (
    <PageLayout>
      <Title>회원가입</Title>
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
        <Button onClick={handleSignUpBtnClick} data-testid="signup-button" disabled={isSignUpBtnDisabled}>
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
    </PageLayout>
  );
};

export default SignUpPage;
