import Div from 'components/atoms/Div';
import Li from 'components/atoms/Li';
import React from 'react';
import './FooterBusinessLicence.scss';

const FooterBusinessLicence: React.FunctionComponent = () => (
  <div className="FooterBL">
    <Div className="footerList_BL" text="깔깔스페인어"></Div>
    <Div className="footerList_BL_detail">
      <Li className="footer_licence_style" text="사업자등록번호: 000-0000-0000 | 대표: 이소망"></Li>
      <Li className="footer_licence_style" text="&copy; 2020 All Rights Reserved"></Li>
    </Div>
  </div>
);

export default FooterBusinessLicence;
