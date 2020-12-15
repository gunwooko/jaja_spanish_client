import Div from 'components/atoms/Div';
import React from 'react';

const ApplyToPostponeClass: React.FunctionComponent = () => (
  <Div className="ApplyToPostponedClass_form">
    <div></div>
    <Div className="ApplyToPostponeClass">
      <Div className="ApplyToPostponeClass_title" text="수업연기신청"></Div>
      <Div className="ApplyToPostponeClass_box">
        <Div className="ApplyToPostponeClass_row">
          <span className="ApplyToPostponeClass_subtitle">취소하는 수업</span>
          {/* <i className="far fa-calendar-alt"></i> */}
          <input className="applyToPostponeInput_date" type="date" placeholder="날짜선택" />
          {/* <i className="far fa-clock"></i> */}
          <input className="applyToPostponeInput_date" type="time" name="time" />
        </Div>
        <Div className="ApplyToPostponeClass_row">
          <span className="ApplyToPostponeClass_subtitle">강사이름</span>
          <input className="applyToPostponeInput" type="text" placeholder="강사이름 선택"></input>
        </Div>
        <Div className="ApplyToPostponeClass_row">
          <span className="ApplyToPostponeClass_subtitle">연기 사유 및 비고</span>
          <input
            className="applyToPostponeInput"
            type="text"
            placeholder="(선택) 연기사유를 자유롭게 작성해주세요."
          ></input>
        </Div>
      </Div>
      <span className="ApplyToPostponeClass_info">
        *수업유형당 연기 가능 회수: 주 2회 수업: 월 2회 / 주 3회 이상 수업: 월 3회
      </span>
      <button className="ApplyToPostponeClass_btn">연기신청</button>
    </Div>
    <div></div>
  </Div>
);

export default ApplyToPostponeClass;
