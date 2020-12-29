import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import SubmitClassFirstView from 'components/organims/SubmitClass/SubmitClassFirstView';
import React from 'react';

const SubmitClass: React.FunctionComponent = () => (
  <>
    <Nav></Nav>
    <SubmitClassFirstView />
    <Footer></Footer>
  </>
);

export default SubmitClass;
