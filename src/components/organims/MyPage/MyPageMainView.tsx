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

  const courseObj = useGetCourseObject(userObj.email, userObj.userId);
  console.log('courseObj 훅에서 무엇을 가져오나?', courseObj);
  // console.log(courseObj[0]);
  return (
    <div>
      <MyDetails
        name_kr={userObj.userName}
        name_en={userObj.userEngName}
        email={userObj.email}
        point={userObj.point}
        loginWith={userObj.loginWith}
      />
      {/* {courseArr.map((course: any) => (
        <>
          <MyClass
            teachers_name={course.teacher}
            class_status={course.classStatus}
            class_style={course.classType}
            class_lastDay={course.finishDate}
          />
          <MyPaymentDetails
            pay_number={course.payNumber}
            pay_date={course.payDate}
            pay_classType={course.classType}
            pay_amount={course.payAmount}
            pay_status={course.payStatus}
          />
        </>
      ))} */}
      {courseObj && <div>{courseObj.teacher}</div>}
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
