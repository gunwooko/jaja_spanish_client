import Div from 'components/atoms/Div';
import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import CourseSubmitCompleted from 'components/organims/SubmitClass/CourseSubmitCompleted';
import SubmitClassNav from 'components/organims/SubmitClass/SubmitClassNav';
import React from 'react';

const SubmitClass: React.FunctionComponent = () => (
  <>
    <Nav></Nav>
    <Div className="SubmitClassMainView">
      <div></div>
      <div className="SubmitClassMainView_container">
        <SubmitClassNav className="submitCompleted" />
        <CourseSubmitCompleted />
      </div>
      <div></div>
    </Div>
    <Footer></Footer>
  </>
);

export default SubmitClass;
