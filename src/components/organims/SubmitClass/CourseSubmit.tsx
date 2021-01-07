import Div from 'components/atoms/Div';
import calculateTuitionFees from 'containers/Utilities/calculateTuitionFees';
import getRandomInt from 'containers/Utilities/getRandomNumber';
import getTodayUtil from 'containers/Utilities/getToday';
import { dbService } from 'fbase';
import useGetProfesObject from 'Hooks/useGetProfesObject';
import useGetUserObject from 'Hooks/useGetUserObject';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

interface ChildProps {
  goCompletedDisplay?: () => void;
  backInfoDisplay?: () => void;
}

const CourseSubmit: React.FunctionComponent<ChildProps> = ({ backInfoDisplay }: ChildProps) => {
  const [userKoreanName, setUserKoreanName] = useState('');
  const [userEnglishName, setUserEnglishName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userSkypeID, setUserSkypeID] = useState('');
  const [desiredDaysAndHours, setDesiredDaysAndHours] = useState('');
  const [classType, setClassType] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userSpanishLevel, setUserSpanishLevel] = useState('');
  const [preferredTeacher, setPreferredTeacher] = useState('');
  const [purposeOfStudy, setPurposeOfStudy] = useState('');
  const [preferredClassMethod, setPreferredClassMethod] = useState('');
  const [pathHowToKnow, setPathHowToKnow] = useState('');
  const [userKaTalkID, setUserKaTalkID] = useState('');
  const [phoneNumberForReceipt, setPhoneNumberForReceipt] = useState('');

  const profesList = useGetProfesObject();
  const userData = useGetUserObject();

  const onChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'userKoreanName') {
      setUserKoreanName(value);
    } else if (name === 'userEnglishName') {
      setUserEnglishName(value);
    } else if (name === 'phoneNumber') {
      setPhoneNumber(value);
    } else if (name === 'userSkypeID') {
      setUserSkypeID(value);
    } else if (name === 'desiredDaysAndHours') {
      setDesiredDaysAndHours(value);
    } else if (name === 'classType') {
      setClassType(value);
    } else if (name === 'userAge') {
      setUserAge(value);
    } else if (name === 'userSpanishLevel') {
      setUserSpanishLevel(value);
    } else if (name === 'preferredTeacher') {
      setPreferredTeacher(value);
    } else if (name === 'purposeOfStudy') {
      setPurposeOfStudy(value);
    } else if (name === 'preferredClassMethod') {
      setPreferredClassMethod(value);
    } else if (name === 'pathHowToKnow') {
      setPathHowToKnow(value);
    } else if (name === 'userKaTalkID') {
      setUserKaTalkID(value);
    } else if (name === 'phoneNumberForReceipt') {
      setPhoneNumberForReceipt(value);
    }
  };

  // Verify userKoreanName & confirmClassName & Error Message
  const doesNameIsCorrect = () => {
    const hName = /^[가-힣]+$/;
    return userKoreanName.length > 1 && hName.test(userKoreanName);
  };
  const confirmClassName = () => {
    if (userKoreanName) {
      return doesNameIsCorrect() ? 'is-valid' : 'is-invalid';
    }
  };
  const renderNameFeedbackMessage = () => {
    if (userKoreanName) {
      if (!doesNameIsCorrect()) {
        return <div className="invalid-feedback">정확한 이름을 작성해주세요.</div>;
      }
    }
  };
  // Verify userEnglishName & confirmClassName & Error Message
  const doesEngNameIsCorrect = () => {
    const eName = /^[a-zA-Z]*$/;
    return userEnglishName.length >= 2 && eName.test(userEnglishName);
  };
  const confirmUserEngNameClassName = () => {
    if (userEnglishName) {
      return doesEngNameIsCorrect() ? 'is-valid' : 'is-invalid';
    }
  };
  const renderEngNameFeedbackMessage = () => {
    if (userEnglishName) {
      if (!doesEngNameIsCorrect()) {
        return <div className="invalid-feedback">정확한 이름을 작성해주세요.</div>;
      }
    }
  };
  // Verify phoneNumber & confirmClassName & Error Message
  const doesPhoneNumberIsCorrect = () => {
    const phone = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return phone.test(phoneNumber);
  };
  const confirmPhoneNumberClassName = () => {
    if (phoneNumber) {
      return doesPhoneNumberIsCorrect() ? 'is-valid' : 'is-invalid';
    }
  };
  const renderPhoneNumberFeedbackMessage = () => {
    if (phoneNumber) {
      if (!doesPhoneNumberIsCorrect()) {
        return <div className="invalid-feedback">정확한 핸드폰 번호를 작성해주세요.(`-` 표시포함)</div>;
      }
    }
  };
  // Verify userSkypeID & confirmClassName & Error Message
  const doesUserSkypeIDIsCorrect = () => {
    return userSkypeID.length >= 2;
  };
  const confirmserSkypeIDClassName = () => {
    if (userSkypeID) {
      return doesUserSkypeIDIsCorrect() ? 'is-valid' : 'is-invalid';
    }
  };
  const renderUserSkypeIDFeedbackMessage = () => {
    if (userSkypeID) {
      if (!doesUserSkypeIDIsCorrect()) {
        return <div className="invalid-feedback">정확한 매칭을 위해 스카이프 아이디를 작성해주세요.</div>;
      }
    }
  };
  // Verify desiredDaysAndHours & confirmClassName & Error Message
  const doesDesiredDaysAndHoursIsCorrect = () => {
    return desiredDaysAndHours.length >= 2;
  };
  const confirmDesiredDaysAndHoursClassName = () => {
    if (desiredDaysAndHours) {
      return doesDesiredDaysAndHoursIsCorrect() ? 'is-valid' : 'is-invalid';
    }
  };
  const renderDesiredDaysAndHoursFeedbackMessage = () => {
    if (desiredDaysAndHours) {
      if (!doesDesiredDaysAndHoursIsCorrect()) {
        return <div className="invalid-feedback">정확한 매칭을 위해 희망하는 수업일/시간를 작성해주세요.</div>;
      }
    }
  };
  // Verify userKaTalkID & confirmClassName & Error Message
  const doesUserKaTalkIDIsCorrect = () => {
    return userKaTalkID.length >= 2;
  };
  const confirmUserKaTalkIDClassName = () => {
    if (userKaTalkID) {
      return doesUserKaTalkIDIsCorrect() ? 'is-valid' : 'is-invalid';
    }
  };
  const renderUserKaTalkIDFeedbackMessage = () => {
    if (userKaTalkID) {
      if (!doesUserKaTalkIDIsCorrect()) {
        return <div className="invalid-feedback">올바른 카카오톡 아이디를 작성해주세요.</div>;
      }
    }
  };
  // Verify phoneNumberForReceipt & confirmClassName & Error Message
  const doesPhoneNumberForReceiptIsCorrect = () => {
    const phone = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return phone.test(phoneNumberForReceipt);
  };
  const confirmPhoneNumberForReceiptClassName = () => {
    if (phoneNumberForReceipt) {
      return doesPhoneNumberForReceiptIsCorrect() ? 'is-valid' : 'is-invalid';
    }
  };
  const renderPhoneNumberForReceiptFeedbackMessage = () => {
    if (phoneNumberForReceipt) {
      if (!doesPhoneNumberForReceiptIsCorrect()) {
        return <div className="invalid-feedback">정확한 번호를 작성해주세요.(`-` 표시포함)</div>;
      }
    }
  };

  // 모든 input 정보를 보내기!
  const history = useHistory();
  const hoy = getTodayUtil();
  const randomNum = getRandomInt(1, 100000000);
  const tuitionFees = calculateTuitionFees(classType);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await dbService.collection('courses').doc(`${userData.email}`).set({
        한글이름: userKoreanName,
        영문이름: userEnglishName,
        휴대폰번호: phoneNumber,
        스카이프ID: userSkypeID,
        수업희망_요일_시간: desiredDaysAndHours,
        수업유형: classType,
        수강생연령대: userAge,
        스페인어실력: userSpanishLevel,
        선호강사: preferredTeacher,
        공부목적: purposeOfStudy,
        선호수업방식: preferredClassMethod,
        알게된경로: pathHowToKnow,
        카카오톡ID: userKaTalkID,
        현금영수증_발급번호: phoneNumberForReceipt,
        수업신청일: hoy,
        수업번호: randomNum,
        수업상태: '등록',
        강사이름: '매칭중...',
        수업종료일: '매칭중...',
        결제번호: randomNum,
        결제일자: '-',
        결제금액: tuitionFees,
        결제상태: '매칭중...',
      });

      history.push('/submitclass/complete');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="CourseSubmit">
        <Div className="courseSubmit_title">
          <span>필수로</span> 작성해주셔야해요!
        </Div>
        <Div className="courseSubmit_box">
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">한글이름</span>
            <input
              name="userKoreanName"
              required
              value={userKoreanName}
              onChange={onChange}
              className={`courseSubmit_input ${confirmClassName()}`}
              type="text"
              placeholder=""
            />
            {renderNameFeedbackMessage()}
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">영문이름</span>
            <input
              name="userEnglishName"
              required
              value={userEnglishName}
              onChange={onChange}
              className={`courseSubmit_input ${confirmUserEngNameClassName()}`}
              type="text"
              placeholder=""
            />
            {renderEngNameFeedbackMessage()}
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">휴대폰번호</span>
            <input
              name="phoneNumber"
              required
              value={phoneNumber}
              onChange={onChange}
              className={`courseSubmit_input ${confirmPhoneNumberClassName()}`}
              type="text"
              placeholder=""
            />
            {renderPhoneNumberFeedbackMessage()}
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">스카이프 ID</span>
            <input
              name="userSkypeID"
              required
              value={userSkypeID}
              onChange={onChange}
              className={`courseSubmit_input ${confirmserSkypeIDClassName()}`}
              type="text"
              placeholder=""
            />
            {renderUserSkypeIDFeedbackMessage()}
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수업희망 요일/시간대</span>
            <input
              name="desiredDaysAndHours"
              required
              value={desiredDaysAndHours}
              onChange={onChange}
              className={`courseSubmit_input ${confirmDesiredDaysAndHoursClassName()}`}
              type="text"
              placeholder=""
            />
            {renderDesiredDaysAndHoursFeedbackMessage()}
          </div>
          <span className="courseSubmit_mini_notice">
            * 수월한 매칭을 위해 가능하신 모든 요일과 시간대를 넓게 선택해주세요. (예: 월수금 오후 6~9시)
          </span>
        </Div>
        <Div className="courseSubmit_box">
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수업유형</span>
            <Div className="courseSubmit_input_box">
              <select name="classType" onChange={onChange}>
                <option value="">수업유형선택</option>
                <option value="주_2회_28분">28분 수업 / 주2회</option>
                <option value="주_3회_28분">28분 수업 / 주3회</option>
                <option value="주_4회_28분">28분 수업 / 주4회</option>
                <option value="주_5회_28분">28분 수업 / 주5회</option>
                <option value="주_1회_58분">58분 수업 / 주1회</option>
                <option value="주_2회_58분">58분 수업 / 주2회</option>
                <option value="주_3회_58분">58분 수업 / 주3회</option>
                <option value="주_4회_58분">58분 수업 / 주4회</option>
                <option value="주_5회_58분">58분 수업 / 주5회</option>
              </select>
            </Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수강생 연령대</span>
            <Div className="courseSubmit_input_box">
              <input
                required
                className="courseSubmit_input"
                type="radio"
                name="userAge"
                onChange={onChange}
                value="성인"
              />
              <label htmlFor="성인">성인</label>
              <input className="courseSubmit_input" type="radio" name="userAge" onChange={onChange} value="중/고등생" />
              <label htmlFor="중/고등생">중/고등생</label>
              <input
                className="courseSubmit_input"
                type="radio"
                name="userAge"
                onChange={onChange}
                value="초등고학년(4~6학년)"
              />
              <label htmlFor="초등고학년(4~6학년)">초등고학년(4~6학년)</label>
              <input
                className="courseSubmit_input"
                type="radio"
                name="userAge"
                onChange={onChange}
                value="초등저학년(1~3학년)"
              />
              <label htmlFor="초등저학년(1~3학년)">초등저학년(1~3학년)</label>
              <input
                className="courseSubmit_input"
                type="radio"
                name="userAge"
                onChange={onChange}
                value="초등생 미만"
              />
              <label htmlFor="초등생 미만">초등생 미만</label>
            </Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">스페인어 실력</span>
            <Div className="courseSubmit_input_box">
              <select name="userSpanishLevel" onChange={onChange} required>
                <option value="">스페인어 실력 선택</option>
                <option value="(왕초보)스페인어를 처음 접해봐요">(왕초보) 스페인어를 처음 접해봐요.</option>
                <option value="(초보)간단한 자기소개와 짤막한 대화를 천천히 이어갈 수 있어요">
                  (초보) 간단한 자기소개와 짤막한 대화를 천천히 이어갈 수 있어요.
                </option>
                <option value="(중급1)때때로 실수를 하지만 다양한 시제를 사용하며 일상적인 대화를 구사할 수 있어요">
                  (중급1) 때때로 실수를 하지만 다양한 시제를 사용하며 일상적인 대화를 구사할 수 있어요.
                </option>
                <option value="(중급2)스페인어를 자유롭게 구사하고 관심있는 주제에 대해 자세하게 서술할 수 있어요">
                  (중급2) 스페인어를 자유롭게 구사하고 관심있는 주제에 대해 자세하게 서술할 수 있어요.
                </option>
                <option
                  value="(고급)큰 어려움 없이 스페인어 뉴스와 라디오를 이해하고, 복잡한 주제나 전문 기사에 대해 이해하고
                  설명할 수 있어요"
                >
                  (고급) 큰 어려움 없이 스페인어 뉴스와 라디오를 이해하고, 복잡한 주제나 전문 기사에 대해 이해하고
                  설명할 수 있어요.
                </option>
              </select>
            </Div>
          </Div>
        </Div>
        <Div className="courseSubmit_title">
          <span>자유롭게</span> 작성해주세요!
        </Div>
        <Div className="courseSubmit_box">
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">선호강사</span>
            <Div className="courseSubmit_input_box">
              <select name="preferredTeacher" onChange={onChange}>
                <option value="">(선택) 선호하는 강사님의 이름을 선택해주세요.</option>
                {profesList &&
                  profesList.map((profe) => (
                    <option key={`${profe.key}`} value={`${profe.nombre}`}>{`${profe.nombre} 강사님`}</option>
                  ))}
              </select>
            </Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">공부목적</span>
            <Div className="courseSubmit_input_box">
              <select name="purposeOfStudy" onChange={onChange}>
                <option value="">(선택) 스페인어를 어떤 목적으로 공부하는지 알려주세요.</option>
                <option value="어학공부">어학으로 스페인어를 공부하고 싶어요.</option>
                <option value="학교공부">학교에서 스페인어를 공부해요.</option>
                <option value="취업">취업 준비를 위해서 스페인어를 공부해요.</option>
                <option value="여행">여행을 준비하면서 스페인어를 공부하고 싶어요.</option>
                <option value="비즈니스">비즈니스로 인해서 스페인어를 공부하고 있어요.</option>
                <option value="자격증">스페인어 자격증을 따기위해 공부해요.</option>
              </select>
            </Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">선호수업방식</span>
            <Div className="courseSubmit_input_box">
              <select name="preferredClassMethod" onChange={onChange}>
                <option value="">(선택) 선호하는 수업방식을 알려주세요.</option>
                <option value="전화스페인어">(전화스페인어) 음성 통화로만 수업하고 싶어요.</option>
                <option value="영상스페인어">(영상스페인어) 영상 통화로 수업하고 싶어요.</option>
                <option value="전화/영상스페인어">(전화/영상스페인어) 영상 통화와 음성 통화로 수업하고 싶어요.</option>
              </select>
            </Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">알게된 경로</span>
            <Div className="courseSubmit_input_box">
              <select name="pathHowToKnow" onChange={onChange}>
                <option value="">(선택) 알려주시면 깔깔스페인어가 무럭무럭 자라나는데 도움이 돼요!</option>
                <option value="지인소개">지인소개</option>
                <option value="인터넷 검색">인터넷 검색</option>
                <option value="인스타그램">인스타그램</option>
                <option value="유튜브">유튜브</option>
                <option value="블로그/카페커뮤니티">블로그/카페커뮤니티</option>
                <option value="기타">기타</option>
              </select>
            </Div>
          </Div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">카카오톡 ID</span>
            <input
              className={`courseSubmit_input_opt ${confirmUserKaTalkIDClassName()}`}
              type="text"
              placeholder="(선택) 국내 연락처가 없으신 분들은 카카오톡으로 연락을 드려요."
              name="userKaTalkID"
              value={userKaTalkID}
              onChange={onChange}
            />
            {renderUserKaTalkIDFeedbackMessage()}
          </div>
          <div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">현금영수증 발급번호</span>
            <input
              className={`courseSubmit_input_opt ${confirmPhoneNumberForReceiptClassName()}`}
              type="text"
              placeholder="(선택) 미기재시 국세청 번호로 발급됩니다."
              name="phoneNumberForReceipt"
              value={phoneNumberForReceipt}
              onChange={onChange}
            />
            {renderPhoneNumberForReceiptFeedbackMessage()}
          </div>
        </Div>
        <input type="submit" value="제출하기" className="CourseSubmit_next_btn"></input>
        <button onClick={backInfoDisplay} className="CourseSubmit_prev_btn">
          이전
        </button>
      </form>
    </>
  );
};

export default CourseSubmit;
