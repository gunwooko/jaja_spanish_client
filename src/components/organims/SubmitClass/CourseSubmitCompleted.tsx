import Div from 'components/atoms/Div';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  backCourseSubmit?: () => void;
  classNumber?: number;
  classStatus?: string;
  classType?: string;
  desiredDaysAndHours?: string;
  finishDate?: string;
  kakaoId?: string;
  nameEn?: string;
  nameKr?: string;
  pathHowToKnow?: string;
  payAmount?: string;
  payDate?: string;
  payNumber?: number;
  payStatus?: string;
  phoneNumber?: string;
  phoneNumberForReceipt?: string;
  preferredClassMethod?: string;
  preferredTeacher?: string;
  purposeOfStudy?: string;
  skypeId?: string;
  spanish_Level?: string;
  startDate?: string;
  teacher?: string;
  userAge?: string;
}

const CourseSubmitCompleted: React.FunctionComponent<Props> = ({
  backCourseSubmit,
  classType,
  desiredDaysAndHours,
  kakaoId,
  nameEn,
  nameKr,
  pathHowToKnow,
  phoneNumber,
  phoneNumberForReceipt,
  preferredClassMethod,
  preferredTeacher,
  purposeOfStudy,
  skypeId,
  spanish_Level,
  userAge,
}: Props) => {
  return (
    <>
      <Div className="CourseSubmitCompleted">
        <Div className="courseSubmit_title">
          <span>더 수정할 내용이 없는지</span> 확인해주세요 :)
        </Div>
        <Div className="courseSubmit_box">
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">한글이름</span>
            <span className={`courseSubmit_input`}>{nameKr}</span>
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">영문이름</span>
            <span className={`courseSubmit_input `}>{nameEn}</span>
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">휴대폰번호</span>
            <span className={`courseSubmit_input`}> {phoneNumber}</span>
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">스카이프 ID</span>
            <span className={`courseSubmit_input`}> {skypeId}</span>
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수업희망 요일/시간대</span>
            <span className={`courseSubmit_input`}> {desiredDaysAndHours}</span>
          </div>
        </Div>
        <Div className="courseSubmit_box">
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수업유형</span>
            <Div className="courseSubmit_input_box_completed">{classType}</Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수강생 연령대</span>
            <Div className="courseSubmit_input_box_completed">{userAge}</Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">스페인어 실력</span>
            <Div className="courseSubmit_input_box_completed">{spanish_Level}</Div>
          </Div>
        </Div>
        <Div className="courseSubmit_box">
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">선호강사</span>
            <Div className="courseSubmit_input_box_completed">{preferredTeacher}</Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">공부목적</span>
            <Div className="courseSubmit_input_box_completed">{purposeOfStudy}</Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">선호수업방식</span>
            <Div className="courseSubmit_input_box_completed">{preferredClassMethod}</Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">알게된 경로</span>
            <Div className="courseSubmit_input_box_completed">{pathHowToKnow}</Div>
          </Div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">카카오톡 ID</span>
            <span className={`courseSubmit_input_opt `}>{kakaoId}</span>
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">현금영수증 발급번호</span>
            <span className={`courseSubmit_input_opt `}>{phoneNumberForReceipt}</span>
          </div>
        </Div>
      </Div>

      <Link to="/submitclass/after">
        <button className="CourseSubmit_next_btn">완료</button>
      </Link>
      <button className="CourseSubmit_prev_btn" onClick={backCourseSubmit}>
        수정하기
      </button>
    </>
  );
};
export default CourseSubmitCompleted;
