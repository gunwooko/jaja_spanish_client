import React from 'react';
import ApplyToPostponeClass from './ApplyToPostponeClass';
import MyClass from './MyClass';
import MyDetails from './MyDetails';
import MyPaymentDetails from './MyPaymentDetails';
import PostponedClassDetail from './PostponedClassDetail';

// test data
import user from 'testData/userData';
import classData from 'testData/classData';

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
    <MyPaymentDetails></MyPaymentDetails>
    <ApplyToPostponeClass></ApplyToPostponeClass>
    <PostponedClassDetail></PostponedClassDetail>
  </div>
);

export default MyPageMainView;
