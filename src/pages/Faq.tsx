import FaqMainView from 'components/organims/FaqMainView';
import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import RestFirstView from 'components/organims/RestFirstView';
import React from 'react';

const Faq: React.FunctionComponent = () => (
  <>
    <Nav></Nav>
    <RestFirstView name="Faq"></RestFirstView>
    <FaqMainView></FaqMainView>
    <Footer></Footer>
  </>
);

export default Faq;
