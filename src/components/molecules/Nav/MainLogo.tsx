import React from 'react';
import javascript from 'components/img/javascript.png';
import './MainLogo.scss';

const MainLogo: React.FunctionComponent = () => (
  <div className="mainLogoComponent">
    <label>
      <img src={javascript} alt="mainLogo" width="40px" height="40px"></img>
      <p>깔깔스페인어</p>
    </label>
  </div>
);

export default MainLogo;
