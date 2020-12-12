import Div from 'components/atoms/Div';
import useLoggedInCheck from 'Hooks/useLoggedInCheck';
import React from 'react';
import { Link } from 'react-router-dom';
import './FifthViewDiv.scss';

const FifthViewDiv: React.FunctionComponent = ({}) => {
  const isLoggedIn = useLoggedInCheck();

  const alertNeededAuth = () => {
    alert('로그인 후 이용할 수 있습니다.');
  };

  return (
    <div className="FifthViewDiv">
      <Div className="fifth_vw_1">
        저렴한 가격의 시범강의로
        <br /> 부담없이 시작해보세요.
      </Div>
      <Div className="fifth_vw_2">
        말하고 바로 피드백 받자
        <br />
        1:1 화상 스페인어
      </Div>
      {isLoggedIn ? (
        <Link to="/submitclass">
          <button className="fifth_vw_btn">지금 시작하기</button>
        </Link>
      ) : (
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button onClick={alertNeededAuth} className="fifth_vw_btn">
            지금 시작하기
          </button>
        </Link>
      )}
    </div>
  );
};
export default FifthViewDiv;
