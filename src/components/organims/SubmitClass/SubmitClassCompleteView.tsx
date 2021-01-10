import Div from 'components/atoms/Div';
import React from 'react';
import CourseSubmitCompleted from './CourseSubmitCompleted';
import SubmitClassNav from './SubmitClassNav';

interface Props {
  backCourseSubmit?: () => void;
  classNumber?: number;
  classStatus?: string;
  classType?: string;
  desiredDaysAndHours?: string;
  finishDate?: string;
  kakaoId?: string;
  nameEn?: string;
  nameKr?: string;
  pathHowToKnow?: string;
  payAmount?: string;
  payDate?: string;
  payNumber?: number;
  payStatus?: string;
  phoneNumber?: string;
  phoneNumberForReceipt?: string;
  preferredClassMethod?: string;
  preferredTeacher?: string;
  purposeOfStudy?: string;
  skypeId?: string;
  spanish_Level?: string;
  startDate?: string;
  teacher?: string;
  userAge?: string;
}

const SubmitClassCompletedView: React.FunctionComponent<Props> = ({
  backCourseSubmit,
  classType,
  desiredDaysAndHours,
  kakaoId,
  nameEn,
  nameKr,
  pathHowToKnow,
  phoneNumber,
  phoneNumberForReceipt,
  preferredClassMethod,
  preferredTeacher,
  purposeOfStudy,
  skypeId,
  spanish_Level,
  userAge,
}: Props) => {
  return (
    <>
      <Div className="SubmitClassMainView ">
        <div></div>
        <div className="SubmitClassMainView_container">
          <SubmitClassNav className="submitCompleted" />
          <CourseSubmitCompleted
            classType={classType}
            desiredDaysAndHours={desiredDaysAndHours}
            kakaoId={kakaoId}
            nameEn={nameEn}
            nameKr={nameKr}
            pathHowToKnow={pathHowToKnow}
            phoneNumber={phoneNumber}
            phoneNumberForReceipt={phoneNumberForReceipt}
            preferredClassMethod={preferredClassMethod}
            preferredTeacher={preferredTeacher}
            purposeOfStudy={purposeOfStudy}
            skypeId={skypeId}
            spanish_Level={spanish_Level}
            userAge={userAge}
            backCourseSubmit={backCourseSubmit}
          />
        </div>
        <div></div>
      </Div>
    </>
  );
};

export default SubmitClassCompletedView;
