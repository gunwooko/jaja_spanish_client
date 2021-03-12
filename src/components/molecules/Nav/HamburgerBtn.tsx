import React from 'react';
import './HamburgerBtn.scss';

const HamburgerBtn: React.FunctionComponent = () => {
  // const toggleBtn = document.querySelector('.navbar_toggleBtn');
  const navMenu = document.querySelector('.navMenu');
  const classBtn = document.querySelector('.classButton');
  const authBtn = document.querySelector('.authButton');
  const onClick = () => {
    // toggleBtn?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    classBtn?.classList.toggle('active');
    authBtn?.classList.toggle('active');
    // });
  };
  return (
    <a href="#" className="navbar_toggleBtn" onClick={onClick}>
      <i className="fas fa-bars"></i>
    </a>
  );
};

export default HamburgerBtn;
