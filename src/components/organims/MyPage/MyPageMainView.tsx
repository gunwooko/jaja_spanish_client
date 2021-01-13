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
import postponedClass from 'testData/postponedClassData';

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
        <div>Loding...</div>
      )}

      <ApplyToPostponeClass />
      <PostponedClassDetail
        postponed_date={postponedClass[0].postponed_date}
        teachers_name={postponedClass[0].teachers_name}
        postponedClass_date_times={postponedClass[0].postponedClass_date_times}
        postponed_status={postponedClass[0].postponed_status}
      />
    </div>
  );
};

export default MyPageMainView;
