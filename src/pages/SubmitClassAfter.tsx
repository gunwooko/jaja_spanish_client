import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import SubmitClassAfterView from 'components/organims/SubmitClass/SubmitClassAfterView';
import React from 'react';

const SubmitClassAfter: React.FunctionComponent = () => (
  <>
    <Nav></Nav>
    <SubmitClassAfterView />
    <Footer></Footer>
  </>
);

export default SubmitClassAfter;
