import useLoggedInCheck from 'Hooks/useLoggedInCheck';
import React from 'react';
import { Link } from 'react-router-dom';
import './ClassButton.scss';

const ClassButton: React.FunctionComponent = () => {
  const isLoggedIn = useLoggedInCheck();

  const alertNeededAuth = () => {
    alert('로그인 후 이용할 수 있습니다.');
  };

  return (
    <div className="classButton">
      {isLoggedIn ? (
        <Link to="/submitclass" style={{ textDecoration: 'none' }}>
          <button>수업신청</button>
        </Link>
      ) : (
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button onClick={alertNeededAuth}>수업신청</button>
        </Link>
      )}
    </div>
  );
};

export default ClassButton;
