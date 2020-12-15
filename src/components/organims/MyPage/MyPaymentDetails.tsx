import Div from 'components/atoms/Div';
import React from 'react';

interface Props {
  pay_number: number;
  pay_date: number;
  pay_classType: string;
  pay_amount: number;
  pay_status: string;
}

const MyPaymentDetails: React.FunctionComponent<Props> = ({
  pay_number,
  pay_date,
  pay_classType,
  pay_amount,
  pay_status,
}: Props) => (
  <Div className="MyPaymentDetails_form">
    <div></div>
    <Div className="MyPaymentDetails">
      <Div className="myPayment_title" text="결제내역"></Div>
      <Div className="myPayment_box">
        <Div className="myPayment_col">
          <span className="myPayment_subtitle">결제번호</span>
          <span className="myPayment_info">{pay_number}</span>
        </Div>
        <Div className="myPayment_col">
          <span className="myPayment_subtitle">결제일자</span>
          <span className="myPayment_info">{pay_date}</span>
        </Div>
        <Div className="myPayment_col">
          <span className="myPayment_subtitle">결제수업</span>
          <span className="myPayment_info">{pay_classType}</span>
        </Div>
        <Div className="myPayment_col">
          <span className="myPayment_subtitle">결제금액(원)</span>
          <span className="myPayment_info">{pay_amount}</span>
        </Div>
        <Div className="myPayment_col">
          <span className="myPayment_subtitle">상태</span>
          <span className="myPayment_info">{pay_status}</span>
        </Div>
      </Div>
      <button className="myPayment_btn">{`더보기 >`}</button>
    </Div>
    <div></div>
  </Div>
);

export default MyPaymentDetails;
