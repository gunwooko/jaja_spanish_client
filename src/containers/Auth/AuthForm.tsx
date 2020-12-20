import { authService } from 'fbase';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const AuthForm: React.FunctionComponent = (): React.ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState('');
  const [userName, setUserName] = useState('');
  const [verifiedPassword, setVerifiedPassword] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'userName') {
      setUserName(value);
    } else if (name === 'verifiedPassword') {
      setVerifiedPassword(value);
    }
  };

  // Verify password
  const doesPasswordIsCorrect = () => {
    const cPassword = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return cPassword.test(password);
  };
  const doesPasswordMatch = () => {
    return password === verifiedPassword;
  };

  const confirmPasswordClassName = () => {
    if (verifiedPassword) {
      return doesPasswordMatch() ? 'is-valid' : 'is-invalid';
    } else if (password) {
      return doesPasswordIsCorrect() ? 'is-valid' : 'is-invalid';
    }
  };
  const renderCorrectPwFeedbackMessage = () => {
    if (password) {
      if (!doesPasswordIsCorrect()) {
        return <div className="invalid-feedback">비밀번호는 8자 이상, 숫자/특수문자를 포함해야합니다.</div>;
      }
    }
  };

  const renderFeedbackMessage = () => {
    if (verifiedPassword) {
      if (!doesPasswordMatch()) {
        return <div className="invalid-feedback">패스워드가 일치하지 않습니다.</div>;
      }
    }
  };
  // Verify userName
  const doesNameIsCorrect = () => {
    const hName = /^[가-힣]+$/;
    return userName.length > 1 && hName.test(userName);
  };
  const confirmUserNameClassName = () => {
    if (userName) {
      return doesNameIsCorrect() ? 'is-valid' : 'is-invalid';
    }
  };
  const renderNameFeedbackMessage = () => {
    if (userName) {
      if (!doesNameIsCorrect()) {
        return <div className="invalid-feedback">정확한 이름을 작성해주세요.</div>;
      }
    }
  };

  const history = useHistory();
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create account
        data = await authService.createUserWithEmailAndPassword(email, password);

        // // DB에 유저정보 만들기 및 저장
        // dbService.collection('users').add({
        //   userName,
        //   email,
        //   createdAt: Date.now(),
        // });

        // // 가입 인증메일 보내기
        // data.user?.sendEmailVerification();
        // alert('인증메일이 발송되었습니다.');

        // authService.signOut();
        // history.push('/');
      } else {
        // Log In
        data = await authService.signInWithEmailAndPassword(email, password);
        history.push('/');
      }
      console.log('data', data);
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
              placeholder="   한글이름"
              required
              value={userName}
              onChange={onChange}
              className={`authInput ${confirmUserNameClassName()}`}
            />
            {renderNameFeedbackMessage()}
            <input
              name="password"
              type="password"
              placeholder="   비밀번호(영문, 숫자, 특수문자 포함 8자이상)"
              required
              value={password}
              onChange={onChange}
              className={`authInput ${confirmPasswordClassName()}`}
            />
            {renderCorrectPwFeedbackMessage()}
            <input
              name="verifiedPassword"
              type="password"
              placeholder="   비밀번호 확인"
              required
              value={verifiedPassword}
              onChange={onChange}
              className={`authInput ${confirmPasswordClassName()}`}
            />
            {renderFeedbackMessage()}
            <span className="authPolicy">
              회원가입 시
              <Link to="/policy/privacy">
                <span> 개인정보 수집 및 이용, 이용약관</span>
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
              placeholder="   비밀번호(영문, 숫자, 특수문자 포함 8자이상)"
              required
              value={password}
              onChange={onChange}
              className="authInput"
            />
          </>
        )}
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
