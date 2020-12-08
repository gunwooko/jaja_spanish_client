import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import React from 'react';
import AuthForm from 'containers/Auth/AuthForm';
import SocialLogIn from 'containers/Auth/SocialLogIn';

const LogIn: React.FunctionComponent = () => (
  <>
    <Nav />
    <AuthForm />
    <SocialLogIn />
    <Footer />
  </>
);

export default LogIn;
