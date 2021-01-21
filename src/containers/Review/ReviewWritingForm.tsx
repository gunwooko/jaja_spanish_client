import getCurrentTime from 'containers/Utilities/getCurrentTime';
import getTodayUtil from 'containers/Utilities/getToday';
import { dbService } from 'fbase';
import useGetUserObject from 'Hooks/useGetUserObject';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ReviewWritingForm: React.FunctionComponent = (): React.ReactElement => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const userData = useGetUserObject();
  const hoy = getTodayUtil();
  const currentTime = getCurrentTime();
  const history = useHistory();

  const onChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'title') {
      setTitle(value);
      console.log(title);
    } else if (name === 'content') {
      setContent(value);
      console.log(content);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // DB에 후기 정보 저장하기
      await dbService
        .collection('reviews')
        .doc(`${userData.email}`)
        .collection(`${userData.userName}`)
        .doc(`${hoy}T${currentTime}`)
        .set({ title, content, createdAt: hoy + 'T' + currentTime, views: 0 });

      history.push('/review/after');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="ReviewWritingForm">
        <input
          onChange={onChange}
          name="title"
          type="text"
          placeholder="제목을 입력해주세요."
          className="ReviewWriting_input_title"
          required
        />
        <textarea
          onChange={onChange}
          name="content"
          placeholder="내용을 입력해주세요."
          className="ReviewWriting_input_content"
          required
        />
        <div className="ReviewWriting_input_btn_form">
          <input type="submit" value="완료" className="ReviewWriting_input_btn" />
        </div>
      </form>
    </>
  );
};

export default ReviewWritingForm;
