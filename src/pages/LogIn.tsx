import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import React from 'react';
import useLoggedInCheck from 'Hooks/useLoggedInCheck';
import Home from './Home';
import Auth from 'components/organims/Auth/Auth';

const LogIn: React.FunctionComponent = () => {
  const isLoggedIn = useLoggedInCheck();

  return isLoggedIn ? (
    <Home />
  ) : (
    <>
      <Nav />
      <Auth />
      <Footer />
    </>
  );
};

export default LogIn;
