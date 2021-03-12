import Div from 'components/atoms/Div';
import React from 'react';
import './RestFirstView.scss';

interface Props {
  name: string;
  notice?: boolean;
}

const RestFirstView: React.FunctionComponent<Props> = ({ name, notice }: Props): React.ReactElement =>
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
  ) : name === 'ReviewAfter' ? (
    <Div className="rest_first_vw_review_reviewAfter">
      <Div className="rest_first_vw_review_0_reviewAfter">
        <div></div>
        <Div className="rest_first_vw_review_1_reviewAfter">
          솔직한 후기를 남겨주셔서 감사합니다. :)
          <Div className="rest_first_vw_review_2_reviewAfter">
            1000포인트의 적립금은 관리자가 확인 후 익일에 적립될 예정입니다.
            <br />
            *4주 수업이 끝난 후 7일 이내로 후기를 남겨주셨을 경우에만 후기 적립금이 지급됩니다.
          </Div>
        </Div>

        <div></div>
      </Div>
    </Div>
  ) : (
    <Div className="rest_first_vw_faq_0">
      <div></div>
      <Div className="rest_first_vw_faq_1">
        {notice ? (
          <div>
            무엇을 도와드릴까요?
            <br />
            자주 묻는 질문을 확인해보세요
          </div>
        ) : (
          <div>
            깔깔스페인어의
            <br />
            새로운 소식을 알려드릴께요
          </div>
        )}
      </Div>
      <div></div>
    </Div>
  );

export default RestFirstView;
