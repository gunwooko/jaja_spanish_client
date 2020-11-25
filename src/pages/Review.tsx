import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import RestFirstView from 'components/organims/RestFirstView';
import ReviewMainView from 'components/organims/ReviewMainView';
import React from 'react';

const Review: React.FunctionComponent = () => (
  <>
    <Nav></Nav>
    <RestFirstView></RestFirstView>
    <ReviewMainView></ReviewMainView>
    <Footer></Footer>
  </>
);

export default Review;
