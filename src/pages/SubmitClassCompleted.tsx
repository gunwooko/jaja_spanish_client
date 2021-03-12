import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import SubmitClassCompletedView from 'components/organims/SubmitClass/SubmitClassCompleteView';
import React from 'react';

const SubmitClass: React.FunctionComponent = () => (
  <>
    <Nav></Nav>
    <SubmitClassCompletedView />
    <Footer></Footer>
  </>
);

export default SubmitClass;
