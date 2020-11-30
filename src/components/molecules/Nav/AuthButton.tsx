import React from 'react';
import './AuthButton.scss';

const AuthButton: React.FunctionComponent = () => (
  <>
    <div className="authButton">
      <button>회원가입</button>
      <p>/</p>
      <button>로그인</button>
    </div>
  </>
);

export default AuthButton;
