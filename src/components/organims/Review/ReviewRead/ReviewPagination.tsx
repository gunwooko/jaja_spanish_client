import React from 'react';

interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const ReviewPagination: React.FunctionComponent<Props> = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: Props) => {
  const pageNumber = [];

  // Math.ceil: 올림
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  const confirmClassName = (pageNum: number) => {
    if (currentPage === pageNum) {
      return 'reviewPagination_li_selected';
    } else if (currentPage !== pageNum) {
      return 'reviewPagination_li';
    }
  };

  return (
    <ul className="reviewPagination_ul">
      {pageNumber.map((pageNum) => (
        <li className={confirmClassName(pageNum)} key={pageNum} onClick={() => paginate(pageNum)}>
          {pageNum}
        </li>
      ))}
    </ul>
  );
};

export default ReviewPagination;
