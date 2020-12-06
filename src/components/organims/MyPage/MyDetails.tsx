import Div from 'components/atoms/Div';
import React from 'react';

// interface Props {
//   name_kr: string;
//   name_en: string;
//   email: string;
//   point: number;
//   password: string;
// }
// interface userData {
//   Props: Props;
// }

const MyDetails: React.FunctionComponent = () => (
  <div>
    <Div className="myDetails_title" text="나의 정보"></Div>
    <Div className="myDetails_row">
      <span className="myDetails_subtitle">한글이름</span>
      {/* <span>{name_kr}</span> */}
    </Div>
    <Div className="myDetails_row">
      <span className="myDetails_subtitle">영문이름</span>
      {/* <span>{name_en}</span> */}
      <button>수정</button>
    </Div>
    <Div className="myDetails_row">
      <span className="myDetails_subtitle">이메일</span>
      {/* <span>{email}</span> */}
    </Div>
    <Div className="myDetails_row">
      <span className="myDetails_subtitle">적립금</span>
      {/* <span>{point}</span> */}
      <button>상세보기</button>
    </Div>
    <Div className="myDetails_row">
      <span className="myDetails_subtitle">비밀번호 변경</span>
      {/* <span>{password}</span> */}
      <button>수정</button>
    </Div>
    <button>회원탈퇴</button>
  </div>
);

export default MyDetails;
