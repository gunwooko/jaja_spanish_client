import Div from 'components/atoms/Div';
import React from 'react';
import { Link } from 'react-router-dom';
import './HomeFirstView.scss';

const HomeFirstView: React.FunctionComponent = () => (
  <div className="HomeFirstView">
    <div></div>
    <div className="home_first_main">
      <Div className="home_first_main_phrase">
        세계 <span className="home_first_phrase">21</span>개국에서
        <br />약 <span className="home_first_phrase">4억명</span>이 사용하는
        <span className="home_first_phrase"> 스페인어</span>
        <br />
        한번 배워보시겠어요?
      </Div>
      <Div className="home_first_sub_phrase">제대로 배우자, 1:1 화상 스페인어</Div>
      <Link to="/">
        <button className="home_first_btn">지금 시작하기</button>
      </Link>
    </div>
    <div></div>
  </div>
);

export default HomeFirstView;
