import Div from 'components/atoms/Div';
import React from 'react';
import CourseInfomation from './CourseInfomation';
import CourseSubmit from './CourseSubmit';
import CourseSubmitCompleted from './CourseSubmitCompleted';
import SubmitClassNav from './SubmitClassNav';

const SubmitClassMainView: React.FunctionComponent = () => (
  <Div className="SubmitClassMainView">
    <div></div>
    <Div className="SubmitClassMainView_container">
      <SubmitClassNav></SubmitClassNav>
      <CourseInfomation />
      <CourseSubmit />
      <CourseSubmitCompleted />
    </Div>
    <div></div>
  </Div>
);

export default SubmitClassMainView;
