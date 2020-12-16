import Div from 'components/atoms/Div';
import ReviewWritingForm from 'containers/Review/ReviewWritingForm';
import React from 'react';

const ReviewWritingView: React.FunctionComponent = () => (
  <Div className="ReviewWritingView">
    <div></div>
    <Div className="ReviewWritingView_container">
      <Div className="reviewWritingView_h2">
        깔깔스페인에 대한 <span>솔직한 후기</span>를 들려주세요. :)
      </Div>
      <Div className="reviewWritingView_h3">
        후기 작성 시 <span>1000포인트</span>의 적립금을 드립니다.
        <div>* 4주 수업이 끝난 후 7일 이내로 후기를 남겨주셨을 경우에만 후기 적립금이 지급됩니다.</div>
      </Div>
      <ReviewWritingForm></ReviewWritingForm>
    </Div>
    <div></div>
  </Div>
);

export default ReviewWritingView;
