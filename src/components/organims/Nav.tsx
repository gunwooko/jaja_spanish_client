import AuthButton from 'components/molecules/Nav/AuthButton';
import ClassButton from 'components/molecules/Nav/ClassButton';
import MainLogo from 'components/molecules/Nav/MainLogo';
import NavMenu from 'components/molecules/Nav/NavMenu';
import React from 'react';

const Nav: React.FunctionComponent = () => (
  <>
    <MainLogo></MainLogo>
    <NavMenu></NavMenu>
    <AuthButton></AuthButton>
    <ClassButton></ClassButton>
  </>
);

export default Nav;
