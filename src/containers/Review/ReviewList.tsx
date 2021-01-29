import React from 'react';
import ReviewLine from 'components/organims/Review/ReviewRead/ReviewLine';

interface Props {
  // eslint-disable-next-line
  posts: any[];
  loading: boolean;
}

const ReviewList: React.FunctionComponent<Props> = ({ posts, loading }: Props) => {
  // eslint-disable-next-line
  // const [reviewData, setReviewData] = useState<any[]>([]);

  // useEffect(() => {
  //   dbService
  //     .collection('reviews')
  //     .orderBy('madeAt', 'desc')
  //     .onSnapshot((snapshot) => {
  //       // snapshot.docs.map((doc) => console.log(doc.id));
  //       const reviewsArray = snapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //       }));
  //       setReviewData(reviewsArray);
  //     });
  //   return () => setReviewData([]);
  // }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    // posts && (
    <>
      {posts.map((review) => (
        <ReviewLine
          key={posts.indexOf(review)}
          title={review.title}
          content={review.content}
          createdTime={review.createdTime}
          userEmail={review.userEmail}
          userName={review.userName}
          views={review.views}
          createdDate={review.createdDate}
          madeAt={review.madeAt}
          id={review.id}
          index={posts.indexOf(review)}
        />
      ))}
    </>
    // )
  );
};

export default ReviewList;
