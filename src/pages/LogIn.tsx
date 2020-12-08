import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import React from 'react';
import AuthForm from 'containers/Auth/AuthForm';
import SocialLogIn from 'containers/Auth/SocialLogIn';
import useLoggedInCheck from 'Hooks/useLoggedInCheck';
import Home from './Home';

const LogIn: React.FunctionComponent = () => {
  const isLoggedIn = useLoggedInCheck();

  return isLoggedIn ? (
    <Home />
  ) : (
    <>
      <Nav />
      <AuthForm />
      <SocialLogIn />
      <Footer />
    </>
  );
};

export default LogIn;
