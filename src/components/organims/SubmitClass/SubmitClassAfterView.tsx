import Div from 'components/atoms/Div';
import React from 'react';

const SubmitClassAfterView: React.FunctionComponent = () => (
  <Div className="SubmitClassAfterView_container">
    <div></div>
    <Div className="SubmitClassAfterView_box">
      <Div className="submitClassAfterView_phrase_1">수강신청이 무사히 완료되었습니다. :)</Div>
      <Div className="submitClassAfterView_phrase_2">
        조금만 기다려주세요. <br /> 수강생님께 잘 맞는 선생님을 고심하여 매칭한 뒤,
        <span className="submitClassAfterView_emphasis">3일 이내</span>로 연락드리겠습니다. <br />
      </Div>
      <Div className="submitClassAfterView_phrase_2">
        <span className="submitClassAfterView_emphasis">
          당신의 새로운 도전을 깔깔스페인어가 함께하게 되어 기쁩니다.
        </span>
      </Div>
    </Div>
    <div></div>
  </Div>
);

export default SubmitClassAfterView;
