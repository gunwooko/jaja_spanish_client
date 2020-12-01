import Div from 'components/atoms/Div';
import Li from 'components/atoms/Li';
import React from 'react';
import './FooterList.scss';

const FooterList: React.FunctionComponent = () => (
  <div className="FooterList">
    <Div className="footerList" text="회사소개"></Div>
    <Div className="footerList" text="1:1 화상수업">
      <Li className="footer_li_style" text="수업과정"></Li>
      <Li className="footer_li_style" text="강사소개"></Li>
      <Li className="footer_li_style" text="이용방법"></Li>
      <Li className="footer_li_style" text="수업후기"></Li>
      <Li className="footer_li_style" text="수강료"></Li>
    </Div>
    <Div className="footerList" text="교정서비스">
      <Li className="footer_li_style" text="첨삭료"></Li>
    </Div>
    <Div className="footerList" text="고객센터">
      <Li className="footer_li_style" text="FAQ"></Li>
      <Li className="footer_li_style" text="제휴문의"></Li>
    </Div>
    <Div className="footerList" text="정책">
      <Li className="footer_li_style" text="개인정보 처리 방침"></Li>
      <Li className="footer_li_style" text="이용약관"></Li>
    </Div>
  </div>
);

export default FooterList;
