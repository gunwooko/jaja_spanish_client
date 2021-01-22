import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import RestFirstView from 'components/organims/RestFirstView';
import ReviewRead from 'components/organims/Review/ReviewRead/ReviewRead';
import React from 'react';

const ReviewReadView: React.FunctionComponent = () => (
  <>
    <Nav cl_name="review"></Nav>
    <RestFirstView name="Review"></RestFirstView>
    <ReviewRead></ReviewRead>
    <Footer></Footer>
  </>
);

export default ReviewReadView;
