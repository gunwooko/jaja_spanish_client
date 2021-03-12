import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import RestFirstView from 'components/organims/RestFirstView';
import ReviewWritingView from 'components/organims/Review/ReviewCreate/ReviewWritingView';
import React from 'react';

const ReviewWriting: React.FunctionComponent = () => (
  <>
    <Nav cl_name="review"></Nav>
    <RestFirstView name="Review"></RestFirstView>
    <ReviewWritingView></ReviewWritingView>
    <Footer></Footer>
  </>
);

export default ReviewWriting;
