import React from 'react';
import ApplyToPostponeClass from './ApplyToPostponeClass';
import MyClass from './MyClass';
import MyDetails from './MyDetails';
import MyPaymentDetails from './MyPaymentDetails';
import PostponedClassDetail from './PostponedClassDetail';

// test data
import user from 'testData/userData';
import classData from 'testData/classData';
import postponedClass from 'testData/postponedClassData';
// import postponedClass from 'testData/postponedClassData';

const MyPageMainView: React.FunctionComponent = () => (
  <div>
    <MyDetails
      name_kr={user.name_kr}
      name_en={user.name_en}
      email={user.email}
      point={user.point}
      password={user.password}
    ></MyDetails>
    <MyClass
      teachers_name={classData.teachers_name}
      class_status={classData.class_status}
      class_style={classData.class_style}
      class_lastDay={classData.class_lastDay}
    ></MyClass>
    <MyPaymentDetails
      pay_number={classData.pay_number}
      pay_date={classData.pay_date}
      pay_classType={classData.pay_classType}
      pay_amount={classData.pay_amount}
      pay_status={classData.pay_status}
    ></MyPaymentDetails>
    <ApplyToPostponeClass></ApplyToPostponeClass>
    <PostponedClassDetail
      postponed_date={postponedClass[0].postponed_date}
      teachers_name={postponedClass[0].teachers_name}
      postponedClass_date_times={postponedClass[0].postponedClass_date_times}
      postponed_status={postponedClass[0].postponed_status}
    ></PostponedClassDetail>
  </div>
);

export default MyPageMainView;
