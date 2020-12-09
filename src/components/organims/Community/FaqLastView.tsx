import Div from 'components/atoms/Div';
import React from 'react';

const FaqLastView: React.FunctionComponent = () => (
  <Div className="FaqLastView">
    <div>
      <Div className="faq_last_vw_content_1">해결되지 않은 불편함이 있으시다면</Div>
      <Div className="faq_last_vw_content_2">1:1 문의 {'>'}</Div>
    </div>
    <img
      src="https://media.vlpt.us/images/gunwooko/post/e9de7d5d-b2bb-4c45-bffd-0aa11a706136/undraw_active_support_6rwo@2x.png"
      alt="1:1 문의"
    />
  </Div>
);

export default FaqLastView;
