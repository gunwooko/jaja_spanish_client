import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.scss';

const NavMenu: React.FunctionComponent = () => (
  <div className="navMenu">
    <Link to="/company" style={{ textDecoration: 'none' }}>
      <p>회사소개</p>
    </Link>
    <Link to="/guide" style={{ textDecoration: 'none' }}>
      <p>수업안내</p>
    </Link>
    <Link to="/teachers" style={{ textDecoration: 'none' }}>
      <p>강사소개</p>
    </Link>
    <Link to="/review" style={{ textDecoration: 'none' }}>
      <p>수업후기</p>
    </Link>
    <Link to="/fqa" style={{ textDecoration: 'none' }}>
      <p>FAQ</p>
    </Link>
  </div>
);

export default NavMenu;
