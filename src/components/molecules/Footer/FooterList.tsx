import Div from 'components/atoms/Div';
import Li from 'components/atoms/Li';
import React from 'react';
import { Link } from 'react-router-dom';
import './FooterList.scss';

const FooterList: React.FunctionComponent = () => (
  <div className="FooterList">
    <Link to="/company" style={{ textDecoration: 'none', color: 'black' }} onClick={() => window.scrollTo(0, 0)}>
      <Div className="footerList" text="회사소개"></Div>
    </Link>
    <Div className="footerList" text="1:1 화상수업">
      <Link to="/guide" style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>
        <Li className="footer_li_style" text="수업과정"></Li>
      </Link>
      <Link to="/teachers" style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>
        <Li className="footer_li_style" text="강사소개"></Li>
      </Link>
      {/* <Li className="footer_li_style" text="이용방법"></Li> */}
      <Link to="/review" style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>
        <Li className="footer_li_style" text="수업후기"></Li>
      </Link>
      {/* <Li className="footer_li_style" text="수강료"></Li> */}
    </Div>
    <Div className="footerList" text="교정서비스">
      <Link to="/" style={{ textDecoration: 'none' }} onClick={() => alert('카톡체널로 문의해주시기 바랍니다 :)')}>
        <Li className="footer_li_style" text="첨삭료"></Li>
      </Link>
    </Div>
    <Div className="footerList" text="고객센터">
      <Link to="/fqa" style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>
        <Li className="footer_li_style" text="FAQ"></Li>
      </Link>
      <Link to="/fqa" style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>
        <Li className="footer_li_style" text="공지사항"></Li>
      </Link>
      <a
        href="mailto:contact.jajaspanish@gmail.com"
        title="Send Email"
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <Li className="footer_li_style" text="제휴문의"></Li>
      </a>
    </Div>
    <Div className="footerList" text="정책">
      <Link to="/policy/privacy" style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>
        <Li className="footer_li_style" text="개인정보 처리 방침"></Li>
      </Link>
      <Link to="/policy/terms" style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>
        <Li className="footer_li_style" text="이용약관"></Li>
      </Link>
    </Div>
  </div>
);

export default FooterList;
