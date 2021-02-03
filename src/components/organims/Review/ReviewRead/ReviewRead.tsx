import Div from 'components/atoms/Div';
import { dbService } from 'fbase';
import useGetUserObject from 'Hooks/useGetUserObject';
import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

interface MatchParams {
  id: string;
}

const ReviewRead: React.FunctionComponent<RouteComponentProps<MatchParams>> = ({
  match,
  history,
}: RouteComponentProps<MatchParams>) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [view, setView] = useState(0);

  const userObj = useGetUserObject();

  const fetchReviewData = async () => {
    const review = await dbService.collection('reviews').where('id', '==', Number(match.params.id)).get();
    review.forEach((doc) => {
      const data = doc.data();
      // eslint-disable-next-line
      const docId = doc.id;
      setTitle(data.title);
      setContent(data.content);
      setUserEmail(data.userEmail);
      setUserName(data.userName);
      setDate(data.createdDate);
      setTime(data.createdTime);
      setView(data.views);
    });
  };

  const sumViews = async () => {
    const review = await dbService.collection('reviews').where('id', '==', Number(match.params.id)).get();
    review.forEach((doc) => {
      const data = doc.data();
      const docId = doc.id;
      dbService
        .collection('reviews')
        .doc(docId)
        .update({
          views: data.views + 1,
        });
    });
  };

  useEffect(() => {
    fetchReviewData();
    sumViews();
  }, []);

  const onDelete = async () => {
    const review = await dbService.collection('reviews').where('id', '==', Number(match.params.id)).get();
    review.forEach((doc) => {
      const docId = doc.id;
      dbService.collection('reviews').doc(docId).delete();
      alert('삭제되었습니다.');
      history.push('/review');
    });
  };

  // const onUpdate = async () => {
  //   const review = await dbService.collection('reviews').where('id', '==', Number(match.params.id)).get();
  //   review.forEach((doc) => {
  //     const docId = doc.id;
  //     history.push(`/review/update/${docId}`);
  //   });
  // };

  return (
    <>
      <Div className="ReviewWritingView">
        <div></div>
        <div className="ReviewWritingView_container">
          <Div className="reviewRead_box">
            <Div className="reviewRead_title">{title}</Div>
            <Div className="reviewRead_detail">
              <span className="reviewRead_detail_name">{userName}</span>
              <span className="reviewRead_detail_date">{date}</span>
              <span className="reviewRead_detail_time">{time}</span>
              <span className="reviewRead_detail_views">{`조회 ${view}`}</span>
            </Div>
            <Div className="reviewRead_content_box">
              <Div className="reviewRead_content">{content}</Div>
            </Div>
          </Div>
          <div className="reviewRead_btn_container">
            {userObj.email === userEmail && (
              <>
                <button className="reviewRead_btn" onClick={onDelete}>
                  삭제
                </button>
                <Link to={`/review/${match.params.id}/update`}>
                  <button className="reviewRead_btn">수정</button>
                </Link>
              </>
            )}
            <button className="reviewRead_btn" onClick={() => history.goBack()}>
              목록
            </button>
          </div>
        </div>
        <div></div>
      </Div>
    </>
  );
};
export default withRouter(ReviewRead);
