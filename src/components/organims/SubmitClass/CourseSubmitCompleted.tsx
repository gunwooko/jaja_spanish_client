import Div from 'components/atoms/Div';
import React from 'react';
import { Link } from 'react-router-dom';

interface ChildProps {
  backCourseSubmit: () => void;
}

const CourseSubmitCompleted: React.FunctionComponent<ChildProps> = ({ backCourseSubmit }: ChildProps) => {
  return (
    <>
      <Div className="CourseSubmitCompleted">
        <Div className="courseSubmit_title">
          <span>더 수정할 내용이 없는지</span> 확인해주세요 :)
        </Div>
        <Div className="courseSubmit_box">
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">한글이름</span>
            <input name="userKoreanName" required className={`courseSubmit_input `} type="text" placeholder="" />
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">영문이름</span>
            <input name="userEnglishName" required className={`courseSubmit_input `} type="text" placeholder="" />
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">휴대폰번호</span>
            <input name="phoneNumber" required className={`courseSubmit_input `} type="text" placeholder="" />
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">스카이프 ID</span>
            <input name="userSkypeID" required className={`courseSubmit_input `} type="text" placeholder="" />
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수업희망 요일/시간대</span>
            <input name="desiredDaysAndHours" required className={`courseSubmit_input `} type="text" placeholder="" />
          </div>
        </Div>
        <Div className="courseSubmit_box">
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수업유형</span>
            <Div className="courseSubmit_input_box"></Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수강생 연령대</span>
            <Div className="courseSubmit_input_box"></Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">스페인어 실력</span>
            <Div className="courseSubmit_input_box"></Div>
          </Div>
        </Div>
        <Div className="courseSubmit_box">
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">선호강사</span>
            <Div className="courseSubmit_input_box"></Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">공부목적</span>
            <Div className="courseSubmit_input_box"></Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">선호수업방식</span>
            <Div className="courseSubmit_input_box"></Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">알게된 경로</span>
            <Div className="courseSubmit_input_box"></Div>
          </Div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">카카오톡 ID</span>
            <input className={`courseSubmit_input_opt `} type="text" placeholder="" name="userKaTalkID" />
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">현금영수증 발급번호</span>
            <input className={`courseSubmit_input_opt `} type="text" placeholder="" name="phoneNumberForReceipt" />
          </div>
        </Div>
      </Div>

      <Link to="/submitclass/after">
        <button className="CourseSubmit_next_btn">완료</button>
      </Link>
      <button onClick={backCourseSubmit} className="CourseSubmit_prev_btn">
        수정하기
      </button>
    </>
  );
};

export default CourseSubmitCompleted;
