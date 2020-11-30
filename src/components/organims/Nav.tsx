import AuthButton from 'components/molecules/Nav/AuthButton';
import ClassButton from 'components/molecules/Nav/ClassButton';
import MainLogo from 'components/molecules/Nav/MainLogo';
import NavMenu from 'components/molecules/Nav/NavMenu';
import React from 'react';
import './Nav.scss';

const Nav: React.FunctionComponent = () => (
  <div className="Nav">
    <MainLogo></MainLogo>
    <NavMenu></NavMenu>
    <AuthButton></AuthButton>
    <ClassButton></ClassButton>
  </div>
);

export default Nav;
