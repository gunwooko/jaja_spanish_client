import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AuthButton.scss';
import useLoggedInCheck from 'Hooks/useLoggedInCheck';
import { authService } from 'fbase';

const AuthButton: React.FunctionComponent = () => {
  const isLoggedIn = useLoggedInCheck();
  const history = useHistory();

  const onLogOut = () => {
    authService.signOut();
    history.push('/');
  };

  return isLoggedIn ? (
    <>
      <div className="authButton">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button onClick={onLogOut}>로그아웃</button>
        </Link>
        <p>/</p>
        <Link to="/mypage" style={{ textDecoration: 'none' }}>
          <button>마이페이지</button>
        </Link>
      </div>
    </>
  ) : (
    <>
      <div className="authButton">
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button>회원가입</button>
        </Link>
        <p>/</p>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button>로그인</button>
        </Link>
      </div>
    </>
  );
};

export default AuthButton;
