import Div from 'components/atoms/Div';
import React, { useState } from 'react';
import CourseInfomation from './CourseInfomation';
import CourseSubmit from './CourseSubmit';
import SubmitClassNav from './SubmitClassNav';

const SubmitClassFirstView: React.FunctionComponent = () => {
  const [infoDisplay, setInfoDisplay] = useState(true);
  const [submitDisplay, setSubmitDisplay] = useState(false);
  // const [completedDisplay, setCompletedDisplay] = useState(false);

  const goCourseSubmit = () => {
    setInfoDisplay(false);
    setSubmitDisplay(true);
    // setCompletedDisplay(false);
    window.scrollTo(0, 0);
  };

  const goInfoDisplay = () => {
    setInfoDisplay(true);
    setSubmitDisplay(false);
    // setCompletedDisplay(false);
    window.scrollTo(0, 0);
  };

  const goCompletedDisplay = () => {
    setInfoDisplay(false);
    setSubmitDisplay(false);
    // setCompletedDisplay(true);
    window.scrollTo(0, 0);
  };

  // const finishedSumbit = () => {};

  return (
    <Div className="SubmitClassMainView">
      <div></div>
      <div className="SubmitClassMainView_container">
        {infoDisplay ? (
          <>
            <SubmitClassNav
              // goInfoDisplay={goInfoDisplay}
              // goCourseSubmit={goCourseSubmit}
              // goCompletedDisplay={goCompletedDisplay}
              className="infomation"
            />
            <CourseInfomation goCourseSubmit={goCourseSubmit} />
          </>
        ) : null}
        {submitDisplay ? (
          <>
            {/* <SubmitClassNav
              // goInfoDisplay={goInfoDisplay}
              // goCourseSubmit={goCourseSubmit}
              // goCompletedDisplay={goCompletedDisplay}
              className="submit"
            /> */}
            <CourseSubmit backInfoDisplay={goInfoDisplay} goCompletedDisplay={goCompletedDisplay} />
          </>
        ) : null}
        {/* {completedDisplay ? (
          <>
            <SubmitClassNav
              // goInfoDisplay={goInfoDisplay}
              // goCourseSubmit={goCourseSubmit}
              // goCompletedDisplay={goCompletedDisplay}
              className="submitCompleted"
            />
            <CourseSubmitCompleted backCourseSubmit={goCourseSubmit} />
          </>
        ) : null} */}
      </div>
      <div></div>
    </Div>
  );
};

export default SubmitClassFirstView;
