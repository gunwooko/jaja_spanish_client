import Div from 'components/atoms/Div';
import Li from 'components/atoms/Li';
import React from 'react';
import { Link } from 'react-router-dom';
import './FourthViewDiv.scss';

const FourthViewDiv: React.FunctionComponent = ({}) => (
  <div className="FourthViewDiv">
    <Div className="fourth_vw_28min">
      <Div className="fourth_vw_title">
        1회
        <br /> <span>28</span>분 수업
      </Div>
      <div className="fourth_vw_body">
        <Div className="fourth_vw_price">
          <Div className="fourth_vw_price_title_1" text="수업횟수">
            <Li className="fourth_vw_price_list">
              주 <span>2</span>회
            </Li>
            <Li className="fourth_vw_price_list">
              주 <span>3</span>회
            </Li>
            <Li className="fourth_vw_price_list">
              주 <span>4</span>회
            </Li>
            <Li className="fourth_vw_price_list">
              주 <span>5</span>회
            </Li>
          </Div>
          <Div className="fourth_vw_price_title_1" text="수강료(월)">
            <Li className="fourth_vw_price_list">
              <span>100,000</span>원
            </Li>
            <Li className="fourth_vw_price_list">
              <span>144,000</span>원
            </Li>
            <Li className="fourth_vw_price_list">
              <span>184,000</span>원
            </Li>
            <Li className="fourth_vw_price_list">
              <span>220,000</span>원
            </Li>
          </Div>
          <Div className="fourth_vw_price_disc_box_1">
            <Li className="fourth_vw_price_disc">150,000원</Li>
            <Li className="fourth_vw_price_disc">200,000원</Li>
            <Li className="fourth_vw_price_disc">250,000원</Li>
          </Div>
        </Div>
        <div className="fourth_vw_btn_0">
          <Link to="/">
            <button className="fourth_vw_btn_1">수업 상담하기</button>
          </Link>
        </div>
      </div>
    </Div>
    <Div className="fourth_vw_58min">
      <Div className="fourth_vw_title">
        1회
        <br /> <span>58</span>분 수업
      </Div>
      <div className="fourth_vw_body">
        <Div className="fourth_vw_price">
          <Div className="fourth_vw_price_title_2" text="수업횟수">
            <Li className="fourth_vw_price_list">
              주 <span>1</span>회
            </Li>
            <Li className="fourth_vw_price_list">
              주 <span>2</span>회
            </Li>
            <Li className="fourth_vw_price_list">
              주 <span>3</span>회
            </Li>
            <Li className="fourth_vw_price_list">
              주 <span>4</span>회
            </Li>
            <Li className="fourth_vw_price_list">
              주 <span>5</span>회
            </Li>
          </Div>
          <Div className="fourth_vw_price_title_2" text="수강료(월)">
            <Li className="fourth_vw_price_list">
              <span>100,000</span>원
            </Li>
            <Li className="fourth_vw_price_list">
              <span>184,000</span>원
            </Li>
            <Li className="fourth_vw_price_list">
              <span>264,000</span>원
            </Li>
            <Li className="fourth_vw_price_list">
              <span>352,000</span>원
            </Li>
            <Li className="fourth_vw_price_list">
              <span>420,000</span>원
            </Li>
          </Div>
          <Div className="fourth_vw_price_disc_box_2">
            <Li className="fourth_vw_price_disc">200,000원</Li>
            <Li className="fourth_vw_price_disc">300,000원</Li>
            <Li className="fourth_vw_price_disc">400,000원</Li>
            <Li className="fourth_vw_price_disc">500,000원</Li>
          </Div>
        </Div>
        <div className="fourth_vw_btn_0">
          <Link to="/">
            <button className="fourth_vw_btn_1">수업 상담하기</button>
          </Link>
        </div>
      </div>
    </Div>
  </div>
);
export default FourthViewDiv;
