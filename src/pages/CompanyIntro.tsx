import CompanyMainView from 'components/organims/CompanyMainView';
import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import RestFirstView from 'components/organims/RestFirstView';
import React from 'react';

const CompanyIntro: React.FunctionComponent = () => (
  <>
    <Nav cl_name="company"></Nav>
    <RestFirstView name="Company"></RestFirstView>
    <CompanyMainView></CompanyMainView>
    <Footer></Footer>
  </>
);

export default CompanyIntro;
