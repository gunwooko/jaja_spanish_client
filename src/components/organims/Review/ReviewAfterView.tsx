import Div from 'components/atoms/Div';
import React from 'react';
import { Link } from 'react-router-dom';

const ReviewAfterView: React.FunctionComponent = () => (
  <Div className="ReviewAfterView">
    <Link to="/Review">
      <button className="reviewAfterView_btn">내가 쓴 후기보기</button>
    </Link>
  </Div>
);

export default ReviewAfterView;
