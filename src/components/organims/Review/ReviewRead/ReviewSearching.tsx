import Div from 'components/atoms/Div';
import { dbService } from 'fbase';
import React, { useState } from 'react';

const ReviewSearching: React.FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'search') {
      setSearch(value);
    } else if (name === 'category') {
      setCategory(value);
    }
  };

  const onSearch = () => {
    console.log('hello', [search, category]);
    fetchSearchResult();
  };

  const fetchSearchResult = async () => {
    const result = await dbService.collection('reviews').where(category, '==', search).get();
    result.forEach((doc) => {
      const data = doc.data();
      console.log('?', data);
    });
  };

  return (
    <Div className="review_search_container">
      <select className="review_search_select" name="category" onChange={onChange}>
        <option value="title">제목</option>
        <option value="content">내용</option>
        <option value="userName">작성자</option>
        <option value="userEmail">회원아이디</option>
      </select>
      <input className="review_search_input" name="search" value={search} onChange={onChange} type="text"></input>
      <button className="review_search_btn" onClick={onSearch}>
        검색
      </button>
    </Div>
  );
};

export default ReviewSearching;
