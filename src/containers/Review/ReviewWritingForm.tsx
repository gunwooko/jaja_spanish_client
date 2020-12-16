import React from 'react';

const ReviewWritingForm: React.FunctionComponent = (): React.ReactElement => {
  return (
    <>
      <form className="ReviewWritingForm">
        <input type="text" placeholder="제목을 입력해주세요." className="ReviewWriting_input_title" />
        <textarea placeholder="내용을 입력해주세요." className="ReviewWriting_input_content" />
        <div className="ReviewWriting_input_btn_form">
          <input type="submit" value="완료" className="ReviewWriting_input_btn" />
        </div>
      </form>
    </>
  );
};

export default ReviewWritingForm;
