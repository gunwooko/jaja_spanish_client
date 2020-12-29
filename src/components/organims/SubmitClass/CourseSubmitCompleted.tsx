import Div from 'components/atoms/Div';
import React from 'react';
import { Link } from 'react-router-dom';

interface ChildProps {
  backCourseSubmit: () => void;
}

const CourseSubmitCompleted: React.FunctionComponent<ChildProps> = ({ backCourseSubmit }: ChildProps) => {
  return (
    <>
      <Div className="CourseSubmitCompleted">CourseSubmitCompleted</Div>
      <Link to="/submitclass/after">
        <button className="CourseSubmit_next_btn">최종제출</button>
      </Link>
      <button onClick={backCourseSubmit} className="CourseSubmit_prev_btn">
        수정
      </button>
    </>
  );
};

export default CourseSubmitCompleted;
