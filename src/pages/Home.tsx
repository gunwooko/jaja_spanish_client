import Footer from 'components/organims/Footer';
import HomeFifthView from 'components/organims/Home/HomeFifthView';
import HomeFirstView from 'components/organims/Home/HomeFirstView';
import HomeFourthView from 'components/organims/Home/HomeFourthView';
import HomeSecondView from 'components/organims/Home/HomeSecondView';
import HomeThirdView from 'components/organims/Home/HomeThirdView';
import Nav from 'components/organims/Nav';
import React from 'react';

const Home: React.FunctionComponent = () => (
  <div>
    <Nav></Nav>
    <HomeFirstView></HomeFirstView>
    <HomeSecondView></HomeSecondView>
    <HomeThirdView></HomeThirdView>
    <HomeFourthView></HomeFourthView>
    <HomeFifthView></HomeFifthView>
    <Footer></Footer>
  </div>
);

export default Home;
