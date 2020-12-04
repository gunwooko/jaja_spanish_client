import Div from 'components/atoms/Div';
import React from 'react';
import './RestFirstView.scss';

interface Props {
  name: string;
}

const RestFirstView: React.FunctionComponent<Props> = ({ name }: Props): React.ReactElement =>
  name === 'Company' ? (
    <Div className="rest_first_vw_company_0">
      <div></div>
      <Div className="rest_first_vw_company_1">
        스페인어를 누구나 쉽고 재미있게
        <br />
        깔깔스페인어
      </Div>
      <div></div>
    </Div>
  ) : name === 'Guide' ? (
    <Div className="rest_first_vw_guide_0">
      <div></div>
      <Div className="rest_first_vw_guide_1">
        오직 나만을 위한 수업
        <br />
        <span>눈치보지말고 마음껏 질문하고 피드백을 받으세요.</span>
      </Div>
      <div></div>
    </Div>
  ) : name === 'Teachers' ? (
    <Div className="rest_first_vw_teachers_0">
      <div></div>
      <Div className="rest_first_vw_teachers_1">
        실력으로만 승부하는
        <br />
        깔깔스페인어의 강사들을 만나보세요!
      </Div>
      <div></div>
    </Div>
  ) : name === 'Review' ? (
    <Div className="rest_first_vw_review_0">
      <div></div>
      <Div className="rest_first_vw_review_1">
        수강생들의
        <br />
        솔직한 이야기를 들어보세요
      </Div>
      <div></div>
    </Div>
  ) : name === 'ReviewWriting' ? (
    <div>ReviewWriting</div>
  ) : (
    <Div className="rest_first_vw_faq_0">
      <div></div>
      <Div className="rest_first_vw_faq_1">
        무엇을 도와드릴까요?
        <br />
        자주 묻는 질문을 확인해보세요
      </Div>
      <div></div>
    </Div>
  );

export default RestFirstView;
