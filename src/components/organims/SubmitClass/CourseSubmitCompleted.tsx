import Div from 'components/atoms/Div';
import getTodayUtil from 'containers/Utilities/getToday';
import useGetCourseObject from 'Hooks/useGetCourseObject';
import useGetUserObject from 'Hooks/useGetUserObject';
import React from 'react';
import { Link } from 'react-router-dom';

// interface ChildProps {
//   backCourseSubmit?: () => void;
// }

const CourseSubmitCompleted: React.FunctionComponent = () => {
  const userData = useGetUserObject();
  const hoy = getTodayUtil();
  const courseObject = useGetCourseObject(userData.email, userData.userId, hoy);
  console.log('결과는?', courseObject);

  return (
    <>
      <Div className="CourseSubmitCompleted">
        <Div className="courseSubmit_title">
          <span>더 수정할 내용이 없는지</span> 확인해주세요 :)
        </Div>
        <Div className="courseSubmit_box">
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">한글이름</span>
            <input
              name="userKoreanName"
              required
              className={`courseSubmit_input `}
              type="text"
              value={courseObject.한글이름}
            />
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">영문이름</span>
            <input
              name="userEnglishName"
              required
              className={`courseSubmit_input `}
              type="text"
              value={courseObject.영문이름}
            />
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">휴대폰번호</span>
            <input
              name="phoneNumber"
              required
              className={`courseSubmit_input `}
              type="text"
              value={courseObject.휴대폰번호}
            />
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">스카이프 ID</span>
            <input
              name="userSkypeID"
              required
              className={`courseSubmit_input `}
              type="text"
              value={courseObject.스카이프ID}
            />
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수업희망 요일/시간대</span>
            <input
              name="desiredDaysAndHours"
              required
              className={`courseSubmit_input `}
              type="text"
              value={courseObject.수업희망_요일_시간}
            />
          </div>
        </Div>
        <Div className="courseSubmit_box">
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수업유형</span>
            <Div className="courseSubmit_input_box">{courseObject.수업유형}</Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수강생 연령대</span>
            <Div className="courseSubmit_input_box">{courseObject.수강생연령대}</Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">스페인어 실력</span>
            <Div className="courseSubmit_input_box">{courseObject.스페인어실력}</Div>
          </Div>
        </Div>
        <Div className="courseSubmit_box">
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">선호강사</span>
            <Div className="courseSubmit_input_box">{courseObject.선호강사}</Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">공부목적</span>
            <Div className="courseSubmit_input_box">{courseObject.공부목적}</Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">선호수업방식</span>
            <Div className="courseSubmit_input_box">{courseObject.선호수업방식}</Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">알게된 경로</span>
            <Div className="courseSubmit_input_box">{courseObject.알게된경로}</Div>
          </Div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">카카오톡 ID</span>
            <input
              className={`courseSubmit_input_opt `}
              type="text"
              value={courseObject.카카오톡ID}
              name="userKaTalkID"
            />
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">현금영수증 발급번호</span>
            <input
              className={`courseSubmit_input_opt `}
              type="text"
              value={courseObject.현금영수증_발급번호}
              name="phoneNumberForReceipt"
            />
          </div>
        </Div>
      </Div>

      <Link to="/submitclass/after">
        <button className="CourseSubmit_next_btn">완료</button>
      </Link>
      <button className="CourseSubmit_prev_btn">수정하기</button>
    </>
  );
};

export default CourseSubmitCompleted;
