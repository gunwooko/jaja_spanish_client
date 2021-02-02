import Div from 'components/atoms/Div';
import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface MatchParams {
  id: string;
}

const ReviewUpdate: React.FunctionComponent<RouteComponentProps<MatchParams>> = ({
  match,
  history,
}: RouteComponentProps<MatchParams>) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [docId, setDocId] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'content') {
      setContent(value);
    }
  };

  const onSubmit = async () => {
    // event.preventDefault();
    try {
      await dbService.collection('reviews').doc(docId).update({
        title,
        content,
      });
      history.push('/review/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchReviewData = async () => {
    const review = await dbService.collection('reviews').where('id', '==', Number(match.params.id)).get();
    review.forEach((doc) => {
      const data = doc.data();
      const docId = doc.id;
      setTitle(data.title);
      setContent(data.content);
      setDocId(docId);
    });
  };

  useEffect(() => {
    fetchReviewData();
  }, []);

  return (
    <Div className="ReviewWritingView">
      <div></div>
      <Div className="ReviewWritingView_container">
        <Div className="reviewWritingView_h2">
          깔깔스페인에 대한 <span>솔직한 후기</span>를 들려주세요. :)
        </Div>
        <Div className="reviewWritingView_h3">
          후기 작성 시 <span>1000포인트</span>의 적립금을 드립니다.
          <div>* 4주 수업이 끝난 후 7일 이내로 후기를 남겨주셨을 경우에만 후기 적립금이 지급됩니다.</div>
        </Div>
        <Div className="ReviewWritingForm">
          <input
            onChange={onChange}
            name="title"
            type="text"
            placeholder="제목을 입력해주세요."
            className="ReviewWriting_input_title"
            required
            value={title}
          />
          <textarea
            onChange={onChange}
            name="content"
            placeholder="내용을 입력해주세요."
            className="ReviewWriting_input_content"
            required
            value={content}
          />

          <div className="ReviewWriting_input_btn_form">
            <button className="ReviewUpdate_input_btn" onClick={() => history.replace(`/review/${match.params.id}`)}>
              취소
            </button>
            <button className="ReviewUpdate_input_btn" onClick={onSubmit}>
              완료
            </button>
          </div>
        </Div>
      </Div>
      <div></div>
    </Div>
  );
};
export default withRouter(ReviewUpdate);
