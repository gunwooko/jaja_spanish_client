import Div from 'components/atoms/Div';
import React from 'react';

interface Props {
  name_kr: string;
  name_en: string;
  email: string;
  point: number;
  password: string;
}

const MyDetails: React.FunctionComponent<Props> = ({ name_kr, name_en, email, point, password }: Props) => {
  return (
    <Div className="MyDetails_form">
      <div></div>
      <Div className="MyDetails">
        <Div className="myDetails_title" text="나의 정보"></Div>
        <Div className="myDetails_box">
          <Div className="myDetails_row">
            <span className="myDetails_subtitle">한글이름</span>
            <span className="myDetails_info">{name_kr}</span>
          </Div>
          <Div className="myDetails_row">
            <span className="myDetails_subtitle">영문이름</span>
            <span className="myDetails_info">{name_en}</span>
            <button className="myDetails_btn">수정</button>
          </Div>
          <Div className="myDetails_row">
            <span className="myDetails_subtitle">이메일</span>
            <span className="myDetails_info">{email}</span>
          </Div>
          <Div className="myDetails_row">
            <span className="myDetails_subtitle">적립금</span>
            <span className="myDetails_info">{point}</span>
            <button className="myDetails_btn">상세보기</button>
          </Div>
          <Div className="myDetails_row">
            <span className="myDetails_subtitle">비밀번호 변경</span>
            <span className="myDetails_info">{password}</span>
            <button className="myDetails_btn">수정</button>
          </Div>
        </Div>
        <button className="myDatails_withdrawal_btn">{`회원탈퇴 >`}</button>
      </Div>
      <div></div>
    </Div>
  );
};

export default MyDetails;
