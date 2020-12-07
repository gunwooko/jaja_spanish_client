import React from 'react';
import { Link } from 'react-router-dom';
import './AuthButton.scss';

interface Props {
  isLoggedIn: boolean;
}

const AuthButton: React.FunctionComponent<Props> = ({ isLoggedIn }: Props) =>
  isLoggedIn ? (
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
  ) : (
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
  );

export default AuthButton;
