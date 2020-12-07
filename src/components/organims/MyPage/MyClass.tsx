import Div from 'components/atoms/Div';
import React from 'react';

interface Props {
  teachers_name: string;
  class_status: string;
  class_style: string;
  class_lastDay: string;
}

const MyClass: React.FunctionComponent<Props> = ({
  teachers_name,
  class_status,
  class_style,
  class_lastDay,
}: Props) => (
  <Div className="MyClass">
    <Div className="myClass_title" text="나의 강의"></Div>
    <Div className="myClass_box">
      <Div className="myClass_row">
        <span className="myClass_subtitle">강사이름</span>
        <span className="myClass_info">{teachers_name}</span>
      </Div>
      <Div className="myClass_row">
        <span className="myClass_subtitle">수업상태</span>
        <span className="myClass_info">{class_status}</span>
      </Div>
      <Div className="myClass_row">
        <span className="myClass_subtitle">수업유형</span>
        <span className="myClass_info">{class_style}</span>
      </Div>
      <Div className="myClass_row">
        <span className="myClass_subtitle">수업종료일</span>
        <span className="myClass_info">{class_lastDay}</span>
      </Div>
    </Div>
  </Div>
);

export default MyClass;
