import SecondViewDiv from 'components/molecules/Home/SecondViewDiv';
import React from 'react';

const HomeSecondView: React.FunctionComponent = () => (
  <>
    <SecondViewDiv
      second_vw_className="home_second_view_img_1"
      imgUrl="https://media.vlpt.us/images/gunwooko/post/8511c772-cfad-46e2-8231-2e629c1a6284/%EA%B7%B8%EB%A6%BC1@2x.png"
      title="실력이 검증된 현지 강사와의 1:1 화상 수업"
      content="깔깔스페인어는 까다로운 절차를 걸쳐 강사님을 선별합니다."
      content2="실력이 검증된 현지 강사님과 답답했던 스페인어 실력을 쌓아보세요."
      btn_content="강사프로필 보기 >"
    ></SecondViewDiv>
    <SecondViewDiv
      second_vw_className="home_second_view_img_2"
      imgUrl="https://media.vlpt.us/images/gunwooko/post/6e82a5fd-8843-4241-a25c-2e24b33f79ec/%EA%B7%B8%EB%A3%B9%20103@2x.png"
      title="다양한 국적의 스페인어 악센트를 경험할 기회"
      content="스페인어는 오늘날 총 21개국에서 모국어로 사용하고 있습니다."
      content2="그만큼 다양한 억양이 존재하기에, 실전 상황에서 당황하지 않으려면 다양한 악센트를 경험하는 것이 매우 중요합니다."
      btn_content="수업과정 알아보기 >"
    ></SecondViewDiv>
    <SecondViewDiv
      second_vw_className="home_second_view_img_3"
      imgUrl="https://media.vlpt.us/images/gunwooko/post/bacd7c18-40f0-4a5c-a35f-9ee594977c51/%EA%B7%B8%EB%A3%B9%20102@2x.png"
      title="제 2외국어라서 비싸다? NO! 합리적인 가격의 화상수업"
      content="한 분이라도 더 많은 분에게 스페인어의 매력을 경험하도록 하는 것이 깔깔스페인어의 비전입니다."
      content2="따라서, 저희는 부수적인 비용을 줄이고 최대한 합리적인 가격을 제공하기 위해 노력하고 있습니다."
      btn_content="수강료 알아보기 >"
    ></SecondViewDiv>
  </>
);

export default HomeSecondView;
