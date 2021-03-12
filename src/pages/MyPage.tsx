import Footer from 'components/organims/Footer';
import MyPageMainView from 'components/organims/MyPage/MyPageMainView';
import Nav from 'components/organims/Nav';
import React from 'react';

const MyPage: React.FunctionComponent = () => (
  <>
    <Nav></Nav>
    <MyPageMainView></MyPageMainView>
    <Footer></Footer>
  </>
);

export default MyPage;
