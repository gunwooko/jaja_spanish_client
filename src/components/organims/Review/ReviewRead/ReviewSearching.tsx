import Div from 'components/atoms/Div';
import React, { useState } from 'react';

const ReviewSearching: React.FunctionComponent = () => {
  const [search, setSearch] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'search') {
      setSearch(value);
    }
  };

  return (
    <Div className="review_search_container">
      <select className="review_search_select" name="category" onChange={onChange}>
        <option value="제목">제목</option>
        <option value="내용">내용</option>
        <option value="작성자">작성자</option>
        <option value="회원아이디">회원아이디</option>
      </select>
      <input className="review_search_input" name="search" value={search} onChange={onChange} type="text"></input>
      <button className="review_search_btn">검색</button>
    </Div>
  );
};

export default ReviewSearching;
