import Div from 'components/atoms/Div';
import React from 'react';

const FaqMainView: React.FunctionComponent = () => (
  <Div className="faq_main_vw">
    <Div className="faq_main_vw_li">
      <Div className="faq_main_vw_title">Q. 수업은 어떻게 진행되나요?</Div>
      <Div className="faq_main_vw_content">
        깔깔 스페인어 전화 영어 수업은 [스카이프] 프로그램을 이용합니다. 음성수업과 영상수업 둘 다 선택할 수 있으며,
        가격 차이는 없으며 신청하신 수업 스케줄에 맞춰 강사님을 매칭해 드립니다. 모바일보다는 PC를 추천해드립니다. 또한,
        교재 위주의 수업, 일상생활 대화, 토론, 발음, 시험 등 원하시는 수업 방식을 알려주시면 최적의 선생님을 매칭해
        도와드리겠습니다.
      </Div>
    </Div>
    <Div className="faq_main_vw_li">
      <Div className="faq_main_vw_title">Q. 수강신청자와 수업료 입금자가 달라요.</Div>
      <Div className="faq_main_vw_content">
        수강 신청 시 수강신청자와 입금자 이름이 다르면 수강신청서 제일 아래 요청 사항란에 입금하시는 분의 이름도 같이
        작성해주시면 됩니다.
      </Div>
    </Div>
    <Div className="faq_main_vw_li">
      <Div className="faq_main_vw_title">Q. 일이 생겨서 수업을 못 할 것 같아요! 수업 변경 및 보강 가능할까요?</Div>
      <Div className="faq_main_vw_content">
        부득이하게 수업 참석이 어려우면 사전**(최소 1일)**에 &quot;마이홈페이지&quot; 를 통해 글을 남겨주시면 보충
        수업이 월별 1달에 2회~5회 (한달 수업횟수에 따라 변경)까지 수업 차감 없이 수업 연기가 가능합니다. 예를 들어 12월
        10일 오전 10시 수업인 경우, 늦어도 12월 9일 오전 10시 이전에는 연기 신청을 해주셔야 합니다. 또한, 연기 신청을 할
        수 있는 횟수 제한이 있어서 주 2회, 30분 수업을 듣고 있다면, 4주 수업 동안 2번의 연기가 가능하고 주 3회
        수업이라면 3회로 제한됩니다. 휴강신청(일시정지)을 하고 싶으신 경우에도 마찬가지로 최소 수업 24시간 전에 신청하신
        후, 최대 1년까지 홀딩 가능하며, 추후 재스케줄링하여 수업 진행하실 수 있습니다. 추후 스케줄링 시 수업 시간 및
        강사변경 될 수 있는 점 참고해 주세요.
      </Div>
    </Div>
    <Div className="faq_main_vw_li">
      <Div className="faq_main_vw_title">Q. 수업 시간에 지각하게 될 때는요?</Div>
      <Div className="faq_main_vw_content">
        수업이 시작할 때 선생님께서 전화를 먼저 걸어주실 텐데 최대 3번까지 시도하시고 학생과 연결되지 않을 경우, 더 이상
        전화하지 않습니다. 수업 시작 15분이 넘어가면 선생님은 기다리지 않고, 결석으로 처리됩니다.
      </Div>
    </Div>
    <Div className="faq_main_vw_li">
      <Div className="faq_main_vw_title">Q. 다른 강사님과도 수업하고 싶어요. 가능할까요?</Div>
      <Div className="faq_main_vw_content">
        네, 가능합니다. 1:1 채팅 상담을 통해 신속히 다른 선생님과 매칭 해드립니다. 단, 수업 시간 기준 24시간 이전에 수업
        변경 신청해 주세요.
      </Div>
    </Div>
    <Div className="faq_main_vw_li">
      <Div className="faq_main_vw_title">Q. 영수증과 수강증을 받을 수 있나요?</Div>
      <Div className="faq_main_vw_content">
        영수증은 마이페이지의 현금영수증 칸에 입력해 주시는 번호로 발행하고 있습니다. 현금영수증 번호를 기재해주지
        않으시는 경우 국세청 번호로 발행하고 있습니다. 현금영수증 발행 시 별도의 이메일이 발송되지 않습니다. 이메일로
        받고자 하시는 경우 카톡 상담으로 신청해주세요. 수강증, 영수증, 출석증 모두 발급이 가능합니다. 카톡 상담으로
        요청해주세요.
      </Div>
    </Div>
    <Div className="faq_main_vw_li">
      <Div className="faq_main_vw_title">Q.수업을 녹음할 수 있나요?</Div>
      <Div className="faq_main_vw_content">
        네, 물론입니다. 통화가 시작되고서 오른쪽 하단에 점 3개(**•••**)를 클릭해 주신 다음 &quot;녹음 시작&quot; 버튼을
        눌러주세요 통화가 종료되면 자동으로 채팅창에 녹음 파일이 업로드됩니다. 30일간 스카이프에 보관되며, PC에
        저장하시면 언제든지 사용하실 수 있습니다.
      </Div>
    </Div>
  </Div>
);

export default FaqMainView;
