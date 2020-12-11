import React from 'react';
import { Link } from 'react-router-dom';
import './ClassButton.scss';

const ClassButton: React.FunctionComponent = () => {
  return (
    <div className="classButton">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button>수업신청</button>
      </Link>
    </div>
  );
};

export default ClassButton;
