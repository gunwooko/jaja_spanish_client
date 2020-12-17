import Div from 'components/atoms/Div';
import React from 'react';

const SubmitClassNav: React.FunctionComponent = () => (
  <Div className="SubmitClassNav">
    <span>
      <hr />
    </span>
    <button className="submitClassNav_btn">수강안내</button>
    <span>
      <hr />
    </span>
    <button className="submitClassNav_btn">수강신청</button>
    <span>
      <hr />
    </span>
    <button className="submitClassNav_btn">신청완료</button>
    <span>
      <hr />
    </span>
  </Div>
);

export default SubmitClassNav;
