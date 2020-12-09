import ClassAppMainView from 'components/organims/ClassAppMainView';
import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import React from 'react';

const ClassApp: React.FunctionComponent = () => (
  <>
    <Nav></Nav>
    <ClassAppMainView />
    <Footer></Footer>
  </>
);

export default ClassApp;
