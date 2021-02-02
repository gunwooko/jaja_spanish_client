import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import RestFirstView from 'components/organims/RestFirstView';
import ReviewUpdate from 'components/organims/Review/ReviewUpdate/ReviewUpdate';
import React from 'react';

const ReviewUpdateView: React.FunctionComponent = () => (
  <>
    <Nav cl_name="review"></Nav>
    <RestFirstView name="Review"></RestFirstView>
    <ReviewUpdate></ReviewUpdate>
    <Footer></Footer>
  </>
);

export default ReviewUpdateView;
