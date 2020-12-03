import React from 'react';
import { Link } from 'react-router-dom';
import './AuthButton.scss';

const AuthButton: React.FunctionComponent = () => (
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

export default AuthButton;
