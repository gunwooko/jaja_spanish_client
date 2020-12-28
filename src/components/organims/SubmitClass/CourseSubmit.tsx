import Div from 'components/atoms/Div';
import React from 'react';

const CourseSubmit: React.FunctionComponent = () => (
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
            <select>
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
            <input className="courseSubmit_input" type="radio" name="userAge" value="성인" />
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
          <span className="courseSubmit_subtitle">스패인어 실력</span>
          <Div className="courseSubmit_input_box">
            <select>
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
                (고급) 큰 어려움 없이 스페인어 뉴스와 라디오를 이해하고, 복잡한 주제나 전문 기사에 대해 이해하고 설명할
                수 있어요.
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
              <option value="왕초보">(왕초보) 스페인어를 처음 접해봐요.</option>
            </select>
          </Div>
        </Div>
        <Div className="courseSubmit_row">
          <span className="courseSubmit_subtitle">공부목적</span>
          <Div className="courseSubmit_input_box">
            <select>
              <option value="">(선택) 스페인어를 어떤 목적으로 공부하는지 알려주세요.</option>
              <option value="왕초보">(왕초보) 스페인어를 처음 접해봐요.</option>
            </select>
          </Div>
        </Div>
        <Div className="courseSubmit_row">
          <span className="courseSubmit_subtitle">선호수업방식</span>
          <Div className="courseSubmit_input_box">
            <select>
              <option value="">(선택) 선호하는 수업방식을 알려주세요.</option>
              <option value="왕초보">(왕초보) 스페인어를 처음 접해봐요.</option>
            </select>
          </Div>
        </Div>
        <Div className="courseSubmit_row">
          <span className="courseSubmit_subtitle">알게된 경로</span>
          <Div className="courseSubmit_input_box">
            <select>
              <option value="">(선택) 알려주시면 깔깔스페인어가 무럭무럭 자라나는데 도움이 돼요!</option>
              <option value="왕초보">(왕초보) 스페인어를 처음 접해봐요.</option>
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
  </>
);

export default CourseSubmit;
