import Div from 'components/atoms/Div';
import React from 'react';

const ClassGuideMainView: React.FunctionComponent = () => (
  <Div className="classGuide_vw_container">
    <Div className="classGuide_vw_box">
      <Div className="classGuide_vw_step">
        <h1 className="classGuide_vw_title">STEP 1:</h1>
        <h2 className="classGuide_vw_subtitle"> 사전학습</h2>
        <div className="classGuide_vw_contents">
          <span>[스카이프]</span> 프로그램으로 인터넷만 있으면 <br /> 언제 어디서나 수업이 가능합니다. <br /> 스카이프
          아이디를 만들어서 <br /> 신청서에 적어주세요.
        </div>
        <div className="classGuide_vw_btn_div">
          <button className="classGuide_vw_btn">스카이프 아이디 개설</button>
        </div>
      </Div>
      <img
        className="classGuide_vw_img"
        src="https://media.vlpt.us/images/gunwooko/post/cfafc7bc-951b-4dbc-ba1e-d041071ad53f/WhatsApp%20Image%202020-12-14%20at%202.16.52%20PM%20(1).jpeg"
        alt="https://media.vlpt.us/images/gunwooko/post/cfafc7bc-951b-4dbc-ba1e-d041071ad53f/WhatsApp%20Image%202020-12-14%20at%202.16.52%20PM%20(1).jpeg"
      />
    </Div>
    <Div className="classGuide_vw_box">
      <img
        className="classGuide_vw_img"
        src="https://media.vlpt.us/images/gunwooko/post/75ae0dd9-2d2e-4fc4-a5fd-fa9af6d6de06/WhatsApp%20Image%202020-12-14%20at%202.16.52%20PM%20(2).jpeg"
        alt="https://media.vlpt.us/images/gunwooko/post/75ae0dd9-2d2e-4fc4-a5fd-fa9af6d6de06/WhatsApp%20Image%202020-12-14%20at%202.16.52%20PM%20(2).jpeg"
      />
      <Div className="classGuide_vw_step">
        <h1 className="classGuide_vw_title_2">STEP 2:</h1>
        <h2 className="classGuide_vw_subtitle_2">깔깔스페인어 회원가입</h2>
        <div className="classGuide_vw_contents_2">
          이름과 이메일로 1초 가입! <br /> 저희 깔깔스페인어에서는 정말 필요한 <br /> 기본 정보 이외에 다른 정보는
          요구하지 않습니다. <br />
          이름과 이메일로 간편가입!!
        </div>
        <div className="classGuide_vw_btn_div_2">
          <button className="classGuide_vw_btn_2">무료회원가입</button>
        </div>
      </Div>
    </Div>
    <Div className="classGuide_vw_box">
      <Div className="classGuide_vw_step">
        <h1 className="classGuide_vw_title">STEP 3:</h1>
        <h2 className="classGuide_vw_subtitle">수강신청</h2>
        <div className="classGuide_vw_contents">
          희망하는 날짜, 시간 <br /> 그리고 수업 스타일을 적어주시면
          <br /> 신청서에 쓰인 내용을 바탕으로 <br /> 최적의 선생님을 매칭해 드립니다.
        </div>
        <div className="classGuide_vw_btn_div">
          <button className="classGuide_vw_btn">수강신청</button>
        </div>
      </Div>
      <img
        className="classGuide_vw_img"
        src="https://media.vlpt.us/images/gunwooko/post/e315d000-6de7-4680-9357-91ac95cfde38/WhatsApp%20Image%202020-12-14%20at%202.16.51%20PM.jpeg"
        alt="https://media.vlpt.us/images/gunwooko/post/e315d000-6de7-4680-9357-91ac95cfde38/WhatsApp%20Image%202020-12-14%20at%202.16.51%20PM.jpeg"
      />
    </Div>
    <Div className="classGuide_vw_box">
      <Div className="classGuide_vw_step">
        <h1 className="classGuide_vw_title">STEP 4:</h1>
        <h2 className="classGuide_vw_subtitle">수업확정</h2>
        <div className="classGuide_vw_contents">
          수강과 관련된 안내를 해드리고
          <br /> 선생님 매칭 후 시작일을 확정합니다. <br /> ** 수강료는 수업 하루 전까지 입금해주셔야합니다.
        </div>
        <div className="classGuide_vw_btn_div">
          <button className="classGuide_vw_btn">수강료입금</button>
        </div>
      </Div>
      <img
        className="classGuide_vw_img"
        src="https://media.vlpt.us/images/gunwooko/post/a23c6f60-c373-4b33-91d6-7a0e5baae6a3/WhatsApp%20Image%202020-12-14%20at%202.16.52%20PM.jpeg"
        alt="https://media.vlpt.us/images/gunwooko/post/a23c6f60-c373-4b33-91d6-7a0e5baae6a3/WhatsApp%20Image%202020-12-14%20at%202.16.52%20PM.jpeg"
      />
    </Div>
  </Div>
);

export default ClassGuideMainView;
