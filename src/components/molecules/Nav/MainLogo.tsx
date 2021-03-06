import React from 'react';
import { Link } from 'react-router-dom';
import './MainLogo.scss';

const MainLogo: React.FunctionComponent = () => (
  <div className="mainLogoComponent">
    <Link to="/">
      <label>
        <img
          src={
            'https://media.vlpt.us/images/gunwooko/post/17b57a0b-a772-45d2-bbbd-6cf67f9a2bba/%EB%A9%94%EC%9D%B8%EB%A1%9C%EA%B3%A0@2x.png'
          }
          alt="mainLogo"
        ></img>
      </label>
    </Link>
  </div>
);

export default MainLogo;
