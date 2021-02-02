import Div from 'components/atoms/Div';
import React from 'react';
import { Link } from 'react-router-dom';

const ClassGuideMainView: React.FunctionComponent = () => (
  <Div className="classGuide_vw_container">
    <Div className="classGuide_vw_box">
      <img
        className="classGuide_vw_img"
        src="https://media.vlpt.us/images/gunwooko/post/a41a107b-6c9b-4d9e-9d1e-771272557e7f/undraw_press_play_bx2d@2x.png"
        alt="makeSkypeId"
      />
      <Div className="classGuide_vw_step">
        <div className="classGuide_vw_title_2">STEP 1.</div>
        <div className="classGuide_vw_subtitle_2"> 사전학습</div>
        <div className="classGuide_vw_contents_2">
          <span>[스카이프]</span> 프로그램으로 인터넷만 있으면 <br /> 언제 어디서나 수업이 가능합니다. <br /> 스카이프
          아이디를 만들어서 신청서에 적어주세요.
        </div>
        <div className="classGuide_vw_btn_div_2">
          <a href="https://skype.daesung.com/download/downloadMain.asp" target="blank">
            <button className="classGuide_vw_btn">{`스카이프 아이디 개설 >`} </button>
          </a>
        </div>
      </Div>
    </Div>
    <Div className="classGuide_vw_box">
      <Div className="classGuide_vw_step">
        <div className="classGuide_vw_title">STEP 2.</div>
        <div className="classGuide_vw_subtitle">깔깔스페인어 회원가입</div>
        <div className="classGuide_vw_contents">
          이름과 이메일로 1초 가입! <br /> 저희 깔깔스페인어에서는 정말 필요한 <br /> 기본 정보 이외에 다른 정보는
          요구하지 않습니다. <br />
          이름과 이메일로 간편가입!
        </div>
        <div className="classGuide_vw_btn_div">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button className="classGuide_vw_btn_2">{`무료회원가입 >`}</button>
          </Link>
        </div>
      </Div>
      <img
        className="classGuide_vw_img"
        src="https://media.vlpt.us/images/gunwooko/post/bfea34fb-ed20-4ecd-8f10-5bbd816e63ea/undraw_secure_login_pdn4@2x.png"
        alt="signUp"
      />
    </Div>
    <Div className="classGuide_vw_box">
      <img
        className="classGuide_vw_img"
        src="https://media.vlpt.us/images/gunwooko/post/446a3922-6734-4af1-b057-389b6e073a5a/undraw_Around_the_world_re_n353@2x.png"
        alt="postponedClass"
      />
      <Div className="classGuide_vw_step">
        <div className="classGuide_vw_title_2">STEP 3.</div>
        <div className="classGuide_vw_subtitle_2">수강신청</div>
        <div className="classGuide_vw_contents_2">
          희망하는 날짜, 시간 <br /> 그리고 수업 스타일을 적어주시면
          <br /> 신청서에 쓰인 내용을 바탕으로 <br /> 최적의 선생님을 매칭해 드립니다.
        </div>
        <div className="classGuide_vw_btn_div_2">
          <Link to="/submitclass" style={{ textDecoration: 'none' }}>
            <button className="classGuide_vw_btn">{`수강신청 >`}</button>
          </Link>
        </div>
      </Div>
    </Div>
    <Div className="classGuide_vw_box">
      <Div className="classGuide_vw_step">
        <div className="classGuide_vw_title">STEP 4.</div>
        <div className="classGuide_vw_subtitle">수업확정</div>
        <div className="classGuide_vw_contents">
          수강과 관련된 안내를 해드리고
          <br /> 선생님 매칭 후 시작일을 확정합니다. <br /> ** 수강료는 수업 하루 전까지 입금해주셔야합니다.
        </div>
        {/* <div className="classGuide_vw_btn_div">
          <button className="classGuide_vw_btn">수강료입금</button>
        </div> */}
      </Div>
      <img
        className="classGuide_vw_img"
        src="https://media.vlpt.us/images/gunwooko/post/9cab66e6-6845-436e-9914-ca2d4f31b1fa/undraw_superhero_kguv@2x.png"
        alt="confirmClass"
      />
    </Div>
  </Div>
);

export default ClassGuideMainView;
