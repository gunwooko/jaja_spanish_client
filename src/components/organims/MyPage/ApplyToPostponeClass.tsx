import Div from 'components/atoms/Div';
import React from 'react';

const ApplyToPostponeClass: React.FunctionComponent = () => (
  <Div className="MyPaymentDetails">
    <Div className="myPayment_title" text="수업연기신청"></Div>
    <Div className="myPayment_box">
      <Div className="myPayment_col">
        <span className="myPayment_subtitle">취소하는 수업</span>
        <i className="far fa-calendar-alt"></i>
        <input type="date" placeholder="날짜선택"></input>
        <i className="far fa-clock"></i>
        <input type="time" name="time" />
      </Div>
      <Div className="myPayment_col">
        <span className="myPayment_subtitle">강사이름</span>
        <input type="text" placeholder="강사이름 선택"></input>
      </Div>
      <Div className="myPayment_col">
        <span className="myPayment_subtitle">연기 사유 및 비고</span>
        <input type="text" placeholder="(선택)연기사유를 자유롭게 작성해주세요."></input>
      </Div>
    </Div>
    <Div className="">*수업유형당 연기 가능 회수: 주 2회 수업: 월 2회 / 주 3회 이상 수업: 월 3회</Div>
    <button className="myPayment_btn">연기신청</button>
  </Div>
);

export default ApplyToPostponeClass;
