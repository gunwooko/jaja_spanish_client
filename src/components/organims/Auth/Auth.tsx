import React from 'react';
import AuthForm from 'containers/Auth/AuthForm';
import SocialLogIn from 'containers/Auth/SocialLogIn';
import './Auth.scss';

const Auth: React.FunctionComponent = () => (
  <div className="authContainer">
    <AuthForm />
    <SocialLogIn />
  </div>
);

export default Auth;
