import ClassGuideMainView from 'components/organims/ClassGuideMainView';
import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import RestFirstView from 'components/organims/RestFirstView';
import React from 'react';

const ClassGuide: React.FunctionComponent = () => (
  <>
    <Nav></Nav>
    <RestFirstView></RestFirstView>
    <ClassGuideMainView></ClassGuideMainView>
    <Footer></Footer>
  </>
);

export default ClassGuide;
