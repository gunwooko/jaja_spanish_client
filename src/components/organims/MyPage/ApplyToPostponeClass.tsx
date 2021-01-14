import React, { useState } from 'react';
import Div from 'components/atoms/Div';
import getCurrentTime from 'containers/Utilities/getCurrentTime';
import getTodayUtil from 'containers/Utilities/getToday';
import { dbService } from 'fbase';
import useGetProfesObject from 'Hooks/useGetProfesObject';
import getRandomInt from 'containers/Utilities/getRandomNumber';
import { useHistory } from 'react-router-dom';

interface Props {
  email: string;
  userName: string;
  phoneNumber: string;
  userEngName: string;
  userSkypeId: string;
  userKakaoId: string;
  postponedClassNumber: number;
  postponedClassStartDate: string;
}

const ApplyToPostponeClass: React.FunctionComponent<Props> = ({
  email,
  userName,
  phoneNumber,
  userEngName,
  userSkypeId,
  userKakaoId,
  postponedClassNumber,
  postponedClassStartDate,
}: Props) => {
  const [teacher, setTeacher] = useState('');
  const [reasons, setReasons] = useState('');
  const [datetime, setDatetime] = useState('');

  const profesList = useGetProfesObject();
  // const userData = useGetUserObject();
  // const { courseData } = useGetCourseObject(userData.email, userData.userId);

  const hoy = getTodayUtil();
  const currentTime = getCurrentTime();
  const currentDatetime = hoy + 'T' + currentTime;
  const key = getRandomInt(1, 100000000);
  const history = useHistory();

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
      if (datetime === '' || teacher === '') {
        alert('수업 연기를 원하시는 날짜와 강사님를 선택해주세요.');
      } else {
        await dbService
          .collection('postponedCourses')
          .doc(`${email}`)
          .collection(`${userName}`)
          .doc(`${currentDatetime}`)
          .set({
            userName: userName,
            userEngName,
            userSkypeId,
            userKakaoId,
            phoneNumber,
            dateApplied: currentDatetime,
            teacher,
            postponedDatetime: datetime,
            postponedReasons: reasons,
            postponedClassNumber,
            postponedClassStartDate,
            postponeStatus: '진행중',
            postponedNumber: key,
          });
        alert('수업 연기가 신청되었습니다. 24시간 내에 연락드리겠습니다.');
        history.replace('/mypage');
      }
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
