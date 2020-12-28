import Div from 'components/atoms/Div';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseInfomation from './CourseInfomation';
import CourseSubmit from './CourseSubmit';
import CourseSubmitCompleted from './CourseSubmitCompleted';

const SubmitClassNav: React.FunctionComponent = () => {
  const [infoDisplay, setInfoDisplay] = useState(true);
  const [submitDisplay, setSubmitDisplay] = useState(false);
  const [completedDisplay, setCompletedDisplay] = useState(false);

  // course infomation
  const goCourseSubmit = () => {
    setInfoDisplay(false);
    setSubmitDisplay(true);
  };

  // course submit
  const backInfoDisplay = () => {
    setInfoDisplay(true);
    setSubmitDisplay(false);
  };
  const goCompletedDisplay = () => {
    setSubmitDisplay(false);
    setCompletedDisplay(true);
  };

  // course submit completed
  const backCourseSubmit = () => {
    setSubmitDisplay(true);
    setCompletedDisplay(false);
  };
  // const finishedSumbit = () => {};

  return (
    <>
      <Div className="SubmitClassNav">
        <span>
          <hr />
        </span>
        <button className="submitClassNav_btn">수강안내</button>
        <span>
          <hr />
        </span>
        <button className="submitClassNav_btn">수강신청</button>
        <span>
          <hr />
        </span>
        <button className="submitClassNav_btn">신청완료</button>
        <span>
          <hr />
        </span>
      </Div>
      {infoDisplay ? (
        <>
          <CourseInfomation />
          <button onClick={goCourseSubmit} className="CourseInfomation_btn">
            다음
          </button>
        </>
      ) : null}
      {submitDisplay ? (
        <>
          <CourseSubmit />
          <button onClick={goCompletedDisplay} className="CourseSubmit_next_btn">
            다음
          </button>
          <button onClick={backInfoDisplay} className="CourseSubmit_prev_btn">
            이전
          </button>
        </>
      ) : null}
      {completedDisplay ? (
        <>
          <CourseSubmitCompleted />
          <Link to="/submitclass/after">
            <button className="CourseSubmit_next_btn">최종제출</button>
          </Link>
          <button onClick={backCourseSubmit} className="CourseSubmit_prev_btn">
            수정
          </button>
        </>
      ) : null}
    </>
  );
};

export default SubmitClassNav;
