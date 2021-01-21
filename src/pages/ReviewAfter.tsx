import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import RestFirstView from 'components/organims/RestFirstView';
import ReviewAfterView from 'components/organims/Review/ReviewAfterView';
import React from 'react';

const ReviewAfter: React.FunctionComponent = () => (
  <>
    <Nav cl_name="review"></Nav>
    <RestFirstView name="ReviewAfter"></RestFirstView>
    <ReviewAfterView></ReviewAfterView>
    <Footer></Footer>
  </>
);

export default ReviewAfter;
