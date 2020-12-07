import AuthButton from 'components/molecules/Nav/AuthButton';
import ClassButton from 'components/molecules/Nav/ClassButton';
import MainLogo from 'components/molecules/Nav/MainLogo';
import NavMenu from 'components/molecules/Nav/NavMenu';
import React from 'react';
import './Nav.scss';

interface Props {
  cl_name?: string;
}

const Nav: React.FunctionComponent<Props> = ({ cl_name }: Props) => (
  <div className={`Nav ${cl_name}`}>
    <MainLogo></MainLogo>
    <NavMenu></NavMenu>
    <AuthButton></AuthButton>
    <ClassButton></ClassButton>
  </div>
);

export default Nav;
