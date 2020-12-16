import Div from 'components/atoms/Div';
import React from 'react';
import ReviewPaging from './ReviewRead/ReviewPaging';
import ReviewRead from './ReviewRead/ReviewRead';
import ReviewSearching from './ReviewRead/ReviewSearching';

const ReviewMainView: React.FunctionComponent = () => (
  <Div className="ReviewMainView">
    <div></div>
    <Div className="review_container">
      <Div className="review_box">
        <Div className="review_main_title">
          <span className="review_title_each">번호</span>
          <span className="review_title_each">제목</span>
          <span className="review_title_each">작성자</span>
          <span className="review_title_each">작성일</span>
          <span className="review_title_each">조회</span>
        </Div>
        <ReviewRead />
      </Div>
      <Div className="review_writing_btn_form">
        <button className="review_writing_btn">글쓰기</button>
      </Div>
      <ReviewPaging />
      <ReviewSearching />
    </Div>
    <div></div>
  </Div>
);

export default ReviewMainView;
