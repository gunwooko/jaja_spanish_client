import React from 'react';
import ApplyToPostponeClass from './ApplyToPostponeClass';
import MyClass from './MyClass';
import MyDetails from './MyDetails';
import MyPaymentDetails from './MyPaymentDetails';
import PostponedClassDetail from './PostponedClassDetail';
import useGetUserObject from 'Hooks/useGetUserObject';
import useGetCourseObject from 'Hooks/useGetCourseObject';

// test data
// import user from 'testData/userData';
// import classData from 'testData/classData';
// import postponedClass from 'testData/postponedClassData';

const MyPageMainView: React.FunctionComponent = () => {
  const userObj = useGetUserObject();
  const { courseData } = useGetCourseObject(userObj.email, userObj.userId);

  return (
    <div>
      <MyDetails
        name_kr={userObj.userName}
        name_en={userObj.userEngName}
        email={userObj.email}
        point={userObj.point}
        loginWith={userObj.loginWith}
      />
      {courseData ? (
        <>
          <MyClass
            teachers_name={courseData.teacher}
            class_status={courseData.classStatus}
            class_style={courseData.classType}
            class_lastDay={courseData.finishDate}
          />
          <MyPaymentDetails
            pay_number={courseData.payNumber}
            pay_date={courseData.payDate}
            pay_classType={courseData.classType}
            pay_amount={courseData.payAmount}
            pay_status={courseData.payStatus}
          />
        </>
      ) : (
        <>
          <MyClass teachers_name={'-'} class_status={'-'} class_style={'-'} class_lastDay={'-'} />
          <MyPaymentDetails pay_number={0} pay_date={0} pay_classType={'-'} pay_amount={0} pay_status={'-'} />
        </>
      )}
      {courseData && (
        <>
          <ApplyToPostponeClass
            email={userObj.email}
            userName={courseData.nameKr}
            phoneNumber={courseData.phoneNumber}
            userEngName={courseData.nameEn}
            userSkypeId={courseData.skypeId}
            userKakaoId={courseData.kakaoId}
            postponedClassNumber={courseData.classNumber}
            postponedClassStartDate={courseData.startDate}
          />
          <PostponedClassDetail email={userObj.email} userName={courseData.nameKr} />
        </>
      )}
    </div>
  );
};

export default MyPageMainView;
