import Div from 'components/atoms/Div';
import React from 'react';
import './FifthViewDiv.scss';

const FifthViewDiv: React.FunctionComponent = ({}) => (
  <div className="FifthViewDiv">
    <Div className="fifth_vw_1">
      저렴한 가격의 시범강의로
      <br /> 부담없이 시작해보세요.
    </Div>
    <Div className="fifth_vw_2">
      말하고 바로 피드백 받자
      <br />
      1:1 화상 스페인어
    </Div>
    <button className="fifth_vw_btn">지금 시작하기</button>
  </div>
);
export default FifthViewDiv;
