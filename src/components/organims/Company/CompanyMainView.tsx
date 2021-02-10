import Div from 'components/atoms/Div';
import React from 'react';
import './CompanyMainView.scss';

const CompanyMainView: React.FunctionComponent = () => (
  <div className="CompanyMainView">
    <Div className="company_vw_container_1">
      <Div className="company_vw_1">
        <div>&quot;</div>
        스페인어
        <br /> 제 2외국어라는 이유로 비싸야만 할까?
        <div>&quot;</div>
      </Div>
      <Div className="company_vw_2">
        <div>
          깔깔스페인어는{' '}
          <span>&quot;누구든지 마음만 먹으면 스페인어를 배우기 좋은 환경을 누릴 수 있도록 하자&quot;</span>
          라는 비전으로 탄생하였습니다.
          <br />
          대학에서 외국어를 전공할 정도로 저는 새로운 언어를 배우는 것을 누구보다도 좋아합니다. 특히 그중에서 배우기도
          쉽고 발음이 매력적인 스페인어를 제일 좋아합니다.
        </div>
        <div>
          그러나 늘 저를 힘들게 했던 것은 스페인어 회화 수업은 우리에게 익숙한 다른 언어보다도 더 값비싼 비용을
          지불해야만 배울 수 있었다는 점입니다.
        </div>
        <div>
          이러한 불편함과 답답함은 저만의 것이 아니었고, 이것을 해결하기 위해 &quot;깔깔스페인어&quot;라는 공간을 직접
          만들게 되었습니다.
          <br />
          <span>교육이 사치가 되지 않도록, 모두가 스페인어의 재미와 매력을 알 수 있도록 늘 노력하고자 합니다.</span>
        </div>
      </Div>
    </Div>
    <Div className="company_vw_container_2">
      <Div className="company_vw_3">
        <img
          src="https://media.vlpt.us/images/gunwooko/post/4853e063-52b9-4c36-91f3-1c0822bdd340/undraw_environment_iaus@2x.png"
          alt="hand with a tree"
        />
        <Div className="company_vw2_text1">깔깔스페인어의 약속</Div>
      </Div>
      <Div className="company_vw_4">
        <Div className="company_vw2_text2">
          <div>
            <span>누구나</span> 재미있게 <span>스페인어를</span> <br />
            <span className="company_span_text_1">마음편히</span>
            <br />
            <span className="company_span_text_1">부담없이</span>
          </div>
        </Div>
      </Div>
      <Div className="company_vw_5">
        <Div className="company_vw_5_li">
          <div className="company_vw_5_title">1. 거품없는 가격</div>
          <div className="company_vw_5_content">
            웹사이트, 디자인, 마케팅, 교재 등 자체적으로 제작하여 부수적인 비용을 최소화하였습니다.
          </div>
        </Div>
        <Div className="company_vw_5_li">
          <div className="company_vw_5_title">2. 엄선된 선생님</div>
          <div className="company_vw_5_content">
            다양한 토픽으로 수업을 이끌어주시는 저희 강사님들은 깔깔스페인어의 자랑입니다.
            <br /> 꼼꼼한 테스트와 여러 차례의 인터뷰를 걸쳐 실력있는 강사님들을 모시고 있습니다.
          </div>
          <div className="company_vw_5_extraContent">
            *선별 후, 학생분들의 관심사와 학습목적에 따라 최대한 잘 맞는 강사님을 매칭해드리고 있습니다.
          </div>
        </Div>
        <Div className="company_vw_5_li">
          <div className="company_vw_5_title">3. 자체 교재 제작</div>
          <div className="company_vw_5_content">
            학생분들이 말하기를 충분히 연습할 수 있도록 전화/화상수업에 최적화된 교재를 직접 제작하고 있습니다.
          </div>
        </Div>
      </Div>
    </Div>
  </div>
);

export default CompanyMainView;
