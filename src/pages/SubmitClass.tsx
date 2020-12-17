import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import SubmitClassMainView from 'components/organims/SubmitClass/SubmitClassMainView';
import React from 'react';

const SubmitClass: React.FunctionComponent = () => (
  <>
    <Nav></Nav>
    <SubmitClassMainView />
    <Footer></Footer>
  </>
);

export default SubmitClass;
