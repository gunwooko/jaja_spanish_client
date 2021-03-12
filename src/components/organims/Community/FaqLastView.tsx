import Div from 'components/atoms/Div';
import React from 'react';

const FaqLastView: React.FunctionComponent = () => {
  const alertClassApp = () => {
    alert(`깔깔스페인어 카톡 채널로 문의해주세요`);
  };

  return (
    <Div className="FaqLastView">
      <div>
        <Div className="faq_last_vw_content_1">해결되지 않은 불편함이 있으시다면</Div>
        <div className="faq_last_vw_content_2" onClick={alertClassApp}>
          1:1 문의 {'>'}
        </div>
      </div>
      <img
        src="https://media.vlpt.us/images/gunwooko/post/e9de7d5d-b2bb-4c45-bffd-0aa11a706136/undraw_active_support_6rwo@2x.png"
        alt="1:1 문의"
      />
    </Div>
  );
};

export default FaqLastView;
