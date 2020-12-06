import React from 'react';
import ApplyToPostponeClass from './ApplyToPostponeClass';
import MyClass from './MyClass';
import MyDetails from './MyDetails';
import MyPaymentDetails from './MyPaymentDetails';
import PostponedClassDetail from './PostponedClassDetail';

// test data
import user from 'testData/userData';

const MyPageMainView: React.FunctionComponent = () => (
  <div>
    <MyDetails></MyDetails>
    <MyClass></MyClass>
    <MyPaymentDetails></MyPaymentDetails>
    <ApplyToPostponeClass></ApplyToPostponeClass>
    <PostponedClassDetail></PostponedClassDetail>
  </div>
);

export default MyPageMainView;
