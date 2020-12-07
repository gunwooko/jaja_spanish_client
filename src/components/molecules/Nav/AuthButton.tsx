import React from 'react';
import { Link } from 'react-router-dom';
import './AuthButton.scss';
import auth from 'containers/Auth';

const AuthButton: React.FunctionComponent = () => {
  const isLoggedIn = auth();
  return isLoggedIn ? (
    <>
      <div className="authButton">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button>로그아웃</button>
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
        <Link to="/signup" style={{ textDecoration: 'none' }}>
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
