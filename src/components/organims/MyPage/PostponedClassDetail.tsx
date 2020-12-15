import Div from 'components/atoms/Div';
import React from 'react';

interface Props {
  postponed_date: number;
  teachers_name: string;
  postponedClass_date_times: string;
  postponed_status: string;
}

const PostponedClassDetail: React.FunctionComponent<Props> = ({
  postponed_date,
  teachers_name,
  postponedClass_date_times,
  postponed_status,
}: Props) => (
  <Div className="MyPaymentDetails_form">
    <div></div>
    <Div className="MyPaymentDetails">
      <Div className="myPayment_title" text="수업연기내역"></Div>
      <Div className="myPayment_box">
        <Div className="myPayment_col">
          <span className="myPayment_subtitle_2">신청날짜</span>
          <span className="myPayment_info">{postponed_date}</span>
        </Div>
        <Div className="myPayment_col">
          <span className="myPayment_subtitle_2">강사이름</span>
          <span className="myPayment_info">{teachers_name}</span>
        </Div>
        <Div className="myPayment_col">
          <span className="myPayment_subtitle_2">연기날짜 및 시간</span>
          <span className="myPayment_info">{postponedClass_date_times}</span>
        </Div>
        <Div className="myPayment_col">
          <span className="myPayment_subtitle_2">상태</span>
          <span className="myPayment_info">{postponed_status}</span>
        </Div>
      </Div>
      <button className="myPostponedDetail_btn">{`더보기 >`}</button>
    </Div>
    <div></div>
  </Div>
);

export default PostponedClassDetail;
