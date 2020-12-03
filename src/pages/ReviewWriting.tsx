import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import RestFirstView from 'components/organims/RestFirstView';
import ReviewWritingView from 'components/organims/ReviewWritingView';
import React from 'react';

const ReviewWriting: React.FunctionComponent = () => (
  <>
    <Nav></Nav>
    <RestFirstView name="ReviewWriting"></RestFirstView>
    <ReviewWritingView></ReviewWritingView>
    <Footer></Footer>
  </>
);

export default ReviewWriting;
