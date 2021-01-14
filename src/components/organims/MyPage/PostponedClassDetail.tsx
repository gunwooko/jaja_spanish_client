import React from 'react';
import Div from 'components/atoms/Div';
import useGetPostponedClass from 'Hooks/useGetPostponedClass';
import transformDatetime from 'containers/Utilities/transformDatetime';

interface Props {
  email: string;
  userName: string;
}

const PostponedClassDetail: React.FunctionComponent<Props> = ({ email, userName }: Props) => {
  const { postponedClass } = useGetPostponedClass(email, userName);

  const onClick = () => {
    alert('준비중입니다.');
  };

  return (
    <Div className="MyPaymentDetails_form">
      <div></div>
      <Div className="MyPaymentDetails">
        <Div className="myPayment_title" text="수업연기내역"></Div>
        {postponedClass && (
          <Div className="myPayment_box">
            <Div className="myPayment_col">
              <span className="myPayment_subtitle_2">신청날짜</span>
              <span className="myPayment_info">{transformDatetime(postponedClass.dateApplied)}</span>
            </Div>
            <Div className="myPayment_col">
              <span className="myPayment_subtitle_2">강사이름</span>
              <span className="myPayment_info">{postponedClass.teacher}</span>
            </Div>
            <Div className="myPayment_col">
              <span className="myPayment_subtitle_2">연기날짜 및 시간</span>
              <span className="myPayment_info">{transformDatetime(postponedClass.postponedDatetime)}</span>
            </Div>
            <Div className="myPayment_col">
              <span className="myPayment_subtitle_2">상태</span>
              <span className="myPayment_info">{postponedClass.postponeStatus}</span>
            </Div>
          </Div>
        )}
        <button className="myPostponedDetail_btn" onClick={onClick}>{`더보기 >`}</button>
      </Div>
      <div></div>
    </Div>
  );
};

export default PostponedClassDetail;
