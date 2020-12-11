import { authService } from 'fbase';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthForm: React.FunctionComponent = (): React.ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create account
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else {
        // Log In
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <>
      <form onSubmit={onSubmit} className="authForm">
        {newAccount ? (
          <>
            <input
              name="email"
              type="text"
              placeholder="   이메일 아이디"
              required
              value={email}
              onChange={onChange}
              className="authInput"
            />
            <input
              name="userName"
              type="text"
              placeholder="   이름"
              required
              // value={userName}
              onChange={onChange}
              className="authInput"
            />
            <input
              name="password"
              type="password"
              placeholder="   비밀번호(8자이상)"
              required
              value={password}
              onChange={onChange}
              className="authInput"
            />
            <input
              name="password"
              type="password"
              placeholder="   비밀번호 확인"
              required
              // value={password}
              // onChange={onChange}
              className="authInput"
            />
            <span className="authPolicy">
              회원가입 시
              <Link to="/policy/privacy">
                <a>개인정보 수집 및 이용, 이용약관</a>
              </Link>
              에 동의하는 것으로 간주합니다.
            </span>
          </>
        ) : (
          <>
            <input
              name="email"
              type="text"
              placeholder="   이메일 아이디"
              required
              value={email}
              onChange={onChange}
              className="authInput"
            />
            <input
              name="password"
              type="password"
              placeholder="   비밀번호(8자이상)"
              required
              value={password}
              onChange={onChange}
              className="authInput"
            />
          </>
        )}

        {/* <input
          name="email"
          type="text"
          placeholder="   이메일"
          required
          value={email}
          onChange={onChange}
          className="authInput"
        />
        <input
          name="password"
          type="password"
          placeholder="   비밀번호(8자이상)"
          required
          value={password}
          onChange={onChange}
          className="authInput"
        /> */}
        <input type="submit" value={newAccount ? '회원가입' : '로그인'} className="authSubmit" />
      </form>
      {error && <span className="authError">{error}</span>}
      <span onClick={toggleAccount} className="authSwitch">
        {newAccount ? (
          <>
            <span className="authSwitch_msj">이미 계정이 있으신가요?</span>
            <span className="authSwich_btn">로그인</span>
          </>
        ) : (
          <>
            <span className="authSwitch_msj">아직 회원이 아니신가요?</span>
            <span className="authSwich_btn">회원가입</span>
          </>
        )}
      </span>
      <span className="authLine">---- 또는 ----</span>
    </>
  );
};

export default AuthForm;
