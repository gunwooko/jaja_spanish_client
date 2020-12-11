import Div from 'components/atoms/Div';
import React from 'react';
import './CompanyMainView.scss';

const CompanyMainView: React.FunctionComponent = () => (
  <div className="CompanyMainView">
    <Div className="company_vw_1">
      스페인어
      <br /> 제 2외국어라는 이유로 비싸야만 할까?
    </Div>
    <Div className="company_vw_2">
      깔깔스페인어는 ~~~ 이런 가치를 쫒고 있어요.
      <br />
      더 많은 분들이 스페인어의 매력을 느끼게 하도록..
      <br />
      누구나 쉽게 배울 수 있는 곳이 되도록..
      <br /> 더 많은 이들에게 제 2외국어
    </Div>
    <Div className="company_vw_3">
      깔깔스페인어는 1:1화상 스페인어 수업을 제공하는 공간입니다.
      <br />
      더 많은 이들에게 제2외국어 교육의 기회와 스페인어의 매력을 알리고자하는 비전으로
      <br />
      남미에서 오랜시간 거주한 한 남매가 시작한 서비스 입니다.
      <br />
      꼼꼼한 면접과정을 거쳐 선발된 퀄리티있는 강사들과 합리적인 가격
      <br />
      그리고 특유의 유쾌한 로고가 매력적인 회사입니다.
    </Div>
  </div>
);

export default CompanyMainView;
