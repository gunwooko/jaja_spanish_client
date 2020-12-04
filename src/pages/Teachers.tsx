import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import RestFirstView from 'components/organims/RestFirstView';
import TeachersMainView from 'components/organims/TeachersMainView';
import React from 'react';

const Teachers: React.FunctionComponent = () => (
  <>
    <Nav cl_name="teachers"></Nav>
    <RestFirstView name="Teachers"></RestFirstView>
    <TeachersMainView></TeachersMainView>
    <Footer></Footer>
  </>
);

export default Teachers;
