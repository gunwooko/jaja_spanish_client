import React from 'react';
import Div from 'components/atoms/Div';
import useGetUserObject from 'Hooks/useGetUserObject';
import { Link } from 'react-router-dom';
import ReviewPaging from './ReviewRead/ReviewPaging';
import ReviewSearching from './ReviewRead/ReviewSearching';
import ReviewList from 'containers/Review/ReviewList';

const ReviewMainView: React.FunctionComponent = () => {
  const userObj = useGetUserObject();

  return (
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
          <ReviewList />
        </Div>
        {userObj ? (
          <Div className="review_writing_btn_form">
            <Link to="/review/writing">
              <button className="review_writing_btn">글쓰기</button>
            </Link>
          </Div>
        ) : (
          <></>
        )}

        <ReviewPaging />
        <ReviewSearching />
      </Div>
      <div></div>
    </Div>
  );
};

export default ReviewMainView;
