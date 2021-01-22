import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import ReviewLine from 'components/organims/Review/ReviewRead/ReviewLine';

const ReviewList: React.FunctionComponent = () => {
  // eslint-disable-next-line
  const [reviewData, setReviewData] = useState<any[]>([]);

  useEffect(() => {
    dbService
      .collection('reviews')
      .orderBy('madeAt', 'desc')
      .onSnapshot((snapshot) => {
        // snapshot.docs.map((doc) => console.log(doc.id));
        const reviewsArray = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        setReviewData(reviewsArray);
      });
    return () => setReviewData([]);
  }, []);

  return (
    reviewData && (
      <>
        {reviewData.map((review) => (
          <ReviewLine
            key={reviewData.indexOf(review)}
            title={review.title}
            content={review.content}
            createdTime={review.createdTime}
            userEmail={review.userEmail}
            userName={review.userName}
            views={review.views}
            createdDate={review.createdDate}
            madeAt={review.madeAt}
            id={review.id}
            index={reviewData.indexOf(review)}
          />
        ))}
      </>
    )
  );
};

export default ReviewList;
