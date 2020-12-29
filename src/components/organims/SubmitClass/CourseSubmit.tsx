import Div from 'components/atoms/Div';
import useGetProfesObject from 'Hooks/useGetProfesObject';
import React from 'react';

interface ChildProps {
  goCompletedDisplay: () => void;
  backInfoDisplay: () => void;
}

const CourseSubmit: React.FunctionComponent<ChildProps> = ({ goCompletedDisplay, backInfoDisplay }: ChildProps) => {
  const profesList = useGetProfesObject();

  return (
    <>
      <Div className="CourseSubmit">
        <Div className="courseSubmit_title">
          <span>필수로</span> 작성해주셔야해요!
        </Div>
        <Div className="courseSubmit_box">
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">한글이름</span>
            <input className="courseSubmit_input" type="text" placeholder=""></input>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">영문이름</span>
            <input className="courseSubmit_input" type="text" placeholder=""></input>{' '}
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">휴대폰번호</span>
            <input className="courseSubmit_input" type="text"></input>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">스카이프 ID</span>
            <input className="courseSubmit_input" type="text"></input>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수업희망 요일/시간대</span>
            <input className="courseSubmit_input" type="text"></input>
          </Div>
          <span className="courseSubmit_mini_notice">
            * 수월한 매칭을 위해 가능하신 모든 요일과 시간대를 넓게 선택해주세요. (예: 월수금 오후 6~9시)
          </span>
        </Div>
        <Div className="courseSubmit_box">
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수업유형</span>
            <Div className="courseSubmit_input_box">
              <select required>
                <option value="">수업유형선택</option>
                <option value="28분/주2회">28분 수업 / 주2회</option>
                <option value="28분/주3회">28분 수업 / 주3회</option>
                <option value="28분/주4회">28분 수업 / 주4회</option>
                <option value="28분/주5회">28분 수업 / 주5회</option>
                <option value="58분/주1회">58분 수업 / 주1회</option>
                <option value="58분/주2회">58분 수업 / 주2회</option>
                <option value="58분/주3회">58분 수업 / 주3회</option>
                <option value="58분/주4회">58분 수업 / 주4회</option>
                <option value="58분/주5회">58분 수업 / 주5회</option>
              </select>
            </Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">수강생 연령대</span>
            <Div className="courseSubmit_input_box">
              <input required className="courseSubmit_input" type="radio" name="userAge" value="성인" />
              <label htmlFor="성인">성인</label>
              <input className="courseSubmit_input" type="radio" name="userAge" value="중/고등생" />
              <label htmlFor="중/고등생">중/고등생</label>
              <input className="courseSubmit_input" type="radio" name="userAge" value="초등고학년(4~6학년)" />
              <label htmlFor="초등고학년(4~6학년)">초등고학년(4~6학년)</label>
              <input className="courseSubmit_input" type="radio" name="userAge" value="초등저학년(1~3학년)" />
              <label htmlFor="초등저학년(1~3학년)">초등저학년(1~3학년)</label>
              <input className="courseSubmit_input" type="radio" name="userAge" value="초등생 미만" />
              <label htmlFor="초등생 미만">초등생 미만</label>
            </Div>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">스페인어 실력</span>
            <Div className="courseSubmit_input_box">
              <select required>
                <option value="">스페인어 실력 선택</option>
                <option value="왕초보">(왕초보) 스페인어를 처음 접해봐요.</option>
                <option value="초보">(초보) 간단한 자기소개와 짤막한 대화를 천천히 이어갈 수 있어요.</option>
                <option value="중급1">
                  (중급1) 때때로 실수를 하지만 다양한 시제를 사용하며 일상적인 대화를 구사할 수 있어요.
                </option>
                <option value="중급2">
                  (중급2) 스페인어를 자유롭게 구사하고 관심있는 주제에 대해 자세하게 서술할 수 있어요.
                </option>
                <option value="고급">
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
              <select>
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
              <select>
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
              <select>
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
              <select>
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
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">카카오톡 ID</span>
            <input
              className="courseSubmit_input_opt"
              type="text"
              placeholder="(선택) 국내 연락처가 없으신 분들은 카카오톡으로 연락을 드려요."
            ></input>
          </Div>
          <Div className="courseSubmit_row">
            <span className="courseSubmit_subtitle">현금영수증 발급번호</span>
            <input
              className="courseSubmit_input_opt"
              type="text"
              placeholder="(선택) 미기재시 국세청 번호로 발급됩니다."
            ></input>
          </Div>
        </Div>
      </Div>
      <button onClick={goCompletedDisplay} className="CourseSubmit_next_btn">
        다음
      </button>
      <button onClick={backInfoDisplay} className="CourseSubmit_prev_btn">
        이전
      </button>
    </>
  );
};

export default CourseSubmit;
