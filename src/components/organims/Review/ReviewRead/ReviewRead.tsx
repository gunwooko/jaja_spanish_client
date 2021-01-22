import Div from 'components/atoms/Div';
import { dbService } from 'fbase';
import useGetUserObject from 'Hooks/useGetUserObject';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

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

  const userObj = useGetUserObject();

  const fetchReviewData = async () => {
    const review = await dbService.collection('reviews').where('id', '==', Number(match.params.id)).get();
    review.forEach((doc) => {
      const data = doc.data();
      setTitle(data.title);
      setContent(data.content);
      setUserEmail(data.userEmail);
    });
  };

  useEffect(() => {
    fetchReviewData();
  }, []);
  return (
    <>
      <Div className="ReviewWritingView">
        <div></div>
        <div className="ReviewWritingView_container">
          <Div className="reviewWritingView_h2">
            깔깔스페인에 대한 <span>솔직한 후기</span>를 들려주세요. :)
          </Div>
          <Div className="reviewWritingView_h3">
            후기 작성 시 <span>1000포인트</span>의 적립금을 드립니다.
            <div>* 4주 수업이 끝난 후 7일 이내로 후기를 남겨주셨을 경우에만 후기 적립금이 지급됩니다.</div>
          </Div>
          <Div className="reviewRead_box">
            <Div className="reviewRead_title">{title}</Div>
            <Div className="reviewRead_content">{content}</Div>
          </Div>
          <button onClick={() => history.goBack()}>뒤로가기</button>
          {userObj.email === userEmail && <button>수정하기</button>}
        </div>
        <div></div>
      </Div>
    </>
  );
};
export default withRouter(ReviewRead);
