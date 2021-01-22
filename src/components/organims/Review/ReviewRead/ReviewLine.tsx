import Div from 'components/atoms/Div';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

interface Props {
  title: string;
  content: string;
  createdTime: string;
  createdDate: string;
  userEmail: string;
  userName: string;
  views: number;
  index: number;
  madeAt: number;
  id: number;
}

const ReviewLine: React.FunctionComponent<Props> = ({
  title,
  content,
  createdTime,
  userEmail,
  userName,
  views,
  index,
  createdDate,
  madeAt,
  id,
}: Props) => {
  return (
    <Div className="review_line">
      <span className="review_number">{index}</span>
      <Link to={`/review/${id}`} className="review_title">
        <span className="review_title">{title}</span>
      </Link>
      <span className="review_writer">{userName}</span>
      <span className="review_createdAt">{createdDate}</span>
      <span className="review_view">{views}</span>
    </Div>
  );
};

export default ReviewLine;
