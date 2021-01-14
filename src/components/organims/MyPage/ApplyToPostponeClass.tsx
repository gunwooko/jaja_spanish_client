import Div from 'components/atoms/Div';
import getCurrentTime from 'containers/Utilities/getCurrentTime';
import getTodayUtil from 'containers/Utilities/getToday';
import { dbService } from 'fbase';
import useGetCourseObject from 'Hooks/useGetCourseObject';
import useGetProfesObject from 'Hooks/useGetProfesObject';
import useGetUserObject from 'Hooks/useGetUserObject';
import React, { useState } from 'react';

const ApplyToPostponeClass: React.FunctionComponent = () => {
  const [teacher, setTeacher] = useState('');
  const [reasons, setReasons] = useState('');
  const [datetime, setDatetime] = useState('');

  const profesList = useGetProfesObject();
  const userData = useGetUserObject();
  const { courseData } = useGetCourseObject(userData.email, userData.userId);

  const hoy = getTodayUtil();
  const currentTime = getCurrentTime();
  const currentDatetime = hoy + 'T' + currentTime;

  const onChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'teacher') {
      setTeacher(value);
    } else if (name === 'reasons') {
      setReasons(value);
    } else if (name === 'datetime') {
      setDatetime(value);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await dbService
        .collection('postponedCourses')
        .doc(`${userData.email}`)
        .collection(`${courseData.nameKr}`)
        .doc(`${courseData.phoneNumber}`)
        .set({
          userName: courseData.nameKr,
          nameEn: courseData.nameEn,
          userSkypeId: courseData.skypeId,
          userKakaoId: courseData.kakaoId,
          dateApplied: currentDatetime,
          teacher,
          postponedDatetime: datetime,
          postponedReasons: reasons,
          postponedClassNumber: courseData.classNumber,
          postponedClassStartDate: courseData.startDate,
        });

      alert('수업 연기가 신청되었습니다. 24시간 내에 연락드리겠습니다.');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Div className="ApplyToPostponedClass_form">
      <div></div>
      <Div className="ApplyToPostponeClass">
        <Div className="ApplyToPostponeClass_title" text="수업연기신청"></Div>
        <form onSubmit={onSubmit} className="ApplyToPostponeClass_box">
          <Div className="ApplyToPostponeClass_row">
            <span className="ApplyToPostponeClass_subtitle">취소하는 수업</span>
            <input name="datetime" className="applyToPostponeInput_date" type="datetime-local" onChange={onChange} />
          </Div>
          <Div className="ApplyToPostponeClass_row">
            <span className="ApplyToPostponeClass_subtitle">강사이름</span>
            <select name="teacher" className="applyToPostponeSelect" onChange={onChange}>
              <option value="">강사이름 선택</option>
              {profesList.map((profe) => (
                <option key={`${profe.key}`} value={`${profe.nombre}`}>{`${profe.nombre} 강사님`}</option>
              ))}
            </select>
          </Div>
          <Div className="ApplyToPostponeClass_row">
            <span className="ApplyToPostponeClass_subtitle">연기 사유 및 비고</span>
            <input
              name="reasons"
              className="applyToPostponeInput"
              type="text"
              placeholder="(선택) 연기사유를 자유롭게 작성해주세요."
              value={reasons}
              onChange={onChange}
              maxLength={230}
            />
          </Div>
          <span className="ApplyToPostponeClass_info">
            *수업유형당 연기 가능 회수: 주 2회 수업: 월 2회 / 주 3회 이상 수업: 월 3회
          </span>
          <input type="submit" value="연기신청" className="ApplyToPostponeClass_btn" />
        </form>
      </Div>
      <div></div>
    </Div>
  );
};

export default ApplyToPostponeClass;
