import Footer from 'components/organims/Footer';
import HomeFifthView from 'components/organims/HomeFifthView';
import HomeFirstView from 'components/organims/HomeFirstView';
import HomeFourthView from 'components/organims/HomeFourthView';
import HomeSecondView from 'components/organims/HomeSecondView';
import HomeThirdView from 'components/organims/HomeThirdView';
import Nav from 'components/organims/Nav';
import React from 'react';

const Home: React.FunctionComponent = () => (
  <>
    <Nav></Nav>
    <HomeFirstView></HomeFirstView>
    <HomeSecondView></HomeSecondView>
    <HomeThirdView></HomeThirdView>
    <HomeFourthView></HomeFourthView>
    <HomeFifthView></HomeFifthView>
    <Footer></Footer>
  </>
);

export default Home;
