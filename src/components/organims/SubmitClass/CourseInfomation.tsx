import Div from 'components/atoms/Div';
import React from 'react';

const CourseInfomation: React.FunctionComponent = () => {
  return (
    <>
      <Div className="CourseInfomation">
        <Div className="courseInfo_title">
          <span>수업 시작 전 꼭</span> 읽어봐주세요!
        </Div>
        <Div className="courseInfo_box">
          <h2 className="courseInfo_subtitle">1. 수업연기</h2>
          <div className="courseInfo_content">
            수업 연기는 깔깔스페인어 홈페이지에서 신청 가능합니다. 수업 연기는 수업 <span>12</span>시간 전까지만
            가능합니다. <span>주 2회 수업은 세션당 2일, 주 3회 이상 수업은 세션당 3일 연기가 가능</span>합니다.
          </div>
          <div className="courseInfo_content">
            강사 또한 12시간 수업 연기 규칙이 적용됩니다. 선생님이 수업 전 12시간을 남기고 연기를 하는 경우, 해당 수업은
            정상 연기처리 됩니다. 선생님이 수업 전 12시간이 지난 이후에 수업 연기를 하거나, 수업에 빠진 경우, 진행되지
            않은 수업을 연기해드리며, 보장으로 3000포인트를 지급해드립니다.
          </div>
        </Div>
        <Div className="courseInfo_box">
          <h2 className="courseInfo_subtitle">2. 장기 수업 연기</h2>
          <div className="courseInfo_content">
            출장, 여행 및 기타 사유로 인해 장기간 연기가 필요한 경우 마찬가지로 다음 수업 <span>12시간 전까지</span>
            신청 가능합니다. 수업 복귀 후 동일한 강사와 매칭은 보장 되지 않습니다.
          </div>
          <div className="courseInfo_content">
            장기 수업 연기로 연기한 수업은 연기 이전 마지막 수업일 기준 <span>1년까지 사용 가능</span>하며, 마지막
            수업일 기준 <span>3개월</span>이 지난 경우, 환불 불가합니다.
          </div>
        </Div>
        <Div className="courseInfo_box">
          <h2 className="courseInfo_subtitle">3. 결제 방식</h2>
          <div className="courseInfo_content">
            <span>계좌 이체만 가능</span>합니다. 카드결제는 진행하지 않습니다. 캐스 전화영어는{' '}
            <span>모든 결제 건에 대해 현금영수증을 발행</span>하고 있습니다. 현금영수증은 신청서에 기재해 주신 번호로
            발급해 드립니다. <span>미기재시 국세청 번호로 발급</span>합니다.
          </div>
          <div className="courseInfo_content">결제는 선생님과 매칭이 확정 된 후 진행됩니다.</div>
        </Div>
        <Div className="courseInfo_box">
          <h2 className="courseInfo_subtitle">4. 수강증, 출석증</h2>
          <div className="courseInfo_content">수강증, 출석증 발급 가능합니다. 매니저에게 연락주시면 됩니다.</div>
        </Div>
        <Div className="courseInfo_box">
          <h2 className="courseInfo_subtitle">5. 선생님 변경</h2>
          <div className="courseInfo_content">
            원하실 경우 선생님 변경은 가능합니다. 그러나 <span>수업 한번만 듣고 판단하지는 말아주세요.</span> 전화영어는
            인터넷 강의가 아니며 선생님들이 30분동안 족집게 강의를 해주시는 것도 아닙니다. 선생님들도 사람이기 때문에
            선생님과의 관계와 감정도 조금 고려해주세요. 하지만 선생님과의 성향이 잘 맞는 것도 중요하니 바꾸고 싶으시면
            언제든 연락주세요. <span>선생님을 2회 이상 변경하는 것은 불가</span>합니다. 선생님 변경도 마찬가지로{' '}
            <span>수업 12시간 이전에 신청</span>해주셔야합니다. 새로운 선생님과 매칭으로 인해 바로 다음 수업이 취소될
            수도 있습니다.
          </div>
        </Div>
        <Div className="courseInfo_box">
          <h2 className="courseInfo_subtitle">6. 교정서비스</h2>
          <div className="courseInfo_content">
            교정의 경우 선생님과 합의된 경우에 수업시간을 활용하여 진행할 수 있습니다. 수업시간 외로 스페인어 글쓰기나
            레포트 등을 교정 받기 원하시면, <span>워드파일 200단어당 5000원에 이용하실 수 있습니다.</span> (카톡으로
            문의해주세요 ^^)
          </div>
        </Div>
        <Div className="courseInfo_box">
          <h2 className="courseInfo_subtitle">7. 환불규정</h2>
          <div className="courseInfo_content">
            1) 총 수업시수의 1/3이 경과하기 전: 이미 납입한 이용료의 2/3에 해당하는 금액 환불
          </div>
          <div className="courseInfo_content">
            2) 총 수업시수의 1/2이 경과하기 전: 이미 납임한 이용로의 1/2에 해당되는 금액 환불
          </div>
          <div className="courseInfo_content">3) 총 수업시수의 1/2이 경과한 후: 반환하지 아니함</div>
        </Div>
        <Div className="courseInfo_box">
          <h2 className="courseInfo_subtitle">8. 기타 수업 규정</h2>
          <div className="courseInfo_content">
            - 선생님이 전화를 <span>3번까지</span> 시도했지만 학생과 연결되지 않을 경우, 더이상 전화하지 않습니다. 이
            경우 수업은 <span>진행된 것으로 간주</span>합니다.
          </div>
          <div className="courseInfo_content">
            - 깔깔스페인어는 한국 공휴일 모두 쉬지 않습니다. 연기가 필요하신 경우, 평소와 똑같이 12시간 이상 전에
            마이페이지에서 신청 가능합니다.
          </div>
        </Div>
      </Div>
    </>
  );
};
export default CourseInfomation;
