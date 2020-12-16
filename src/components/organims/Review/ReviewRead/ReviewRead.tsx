import React from 'react';

const ReviewRead: React.FunctionComponent = () => (
  <>
    <span className="review_number">{}</span>
    <span className="review_title">{}</span>
    <span className="review_writer">{}</span>
    <span className="review_createdAt">{}</span>
    <span className="review_view">{}</span>
  </>
);

export default ReviewRead;
