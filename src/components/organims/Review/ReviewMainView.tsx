import React, { useEffect, useState } from 'react';
import Div from 'components/atoms/Div';
import useGetUserObject from 'Hooks/useGetUserObject';
import { Link } from 'react-router-dom';
import ReviewSearching from './ReviewRead/ReviewSearching';
import ReviewList from 'containers/Review/ReviewList';
import ReviewPagination from './ReviewRead/ReviewPagination';
import { dbService } from 'fbase';

const ReviewMainView: React.FunctionComponent = () => {
  // eslint-disable-next-line
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const userObj = useGetUserObject();

  useEffect(() => {
    const fetchPosts = async () => {
      await dbService
        .collection('reviews')
        .orderBy('madeAt', 'desc')
        .onSnapshot((snapshot) => {
          setLoading(true);
          const reviewsArray = snapshot.docs.map((doc) => ({
            ...doc.data(),
          }));
          setPosts(reviewsArray);
          setLoading(false);
        });
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
          <ReviewList posts={currentPosts} loading={loading} />
        </Div>
        {userObj ? (
          <Div className="review_writing_btn_form">
            <Link to="/review/writing">
              <button className="review_writing_btn">
                <i className="fas fa-pencil-alt"></i>
                <span className="review_writing_btn_text">글쓰기</span>
              </button>
            </Link>
          </Div>
        ) : (
          <></>
        )}

        <ReviewPagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <ReviewSearching />
      </Div>
      <div></div>
    </Div>
  );
};

export default ReviewMainView;
