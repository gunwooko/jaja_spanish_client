import Div from 'components/atoms/Div';
import React from 'react';
import { Link } from 'react-router-dom';
import './SecondViewDiv.scss';

interface IProps {
  imgUrl: string;
  title: string;
  content: string;
  content2: string;
  btn_content: string;
  second_vw_className: string;
}

const SecondViewDiv: React.FunctionComponent<IProps> = ({
  imgUrl,
  title,
  content,
  content2,
  btn_content,
  second_vw_className,
}: IProps) =>
  second_vw_className !== 'home_second_view_img_2' ? (
    <div className="SecondViewDiv">
      <img className={second_vw_className} src={imgUrl} alt="imgUrl" />
      <div className="SecondViewDiv2">
        <Div className="second_vw_title" text={title}></Div>
        <Div className="second_vw_content">
          <Div className="second_vw_content1" text={content}></Div>
          <Div className="second_vw_content2" text={content2}></Div>
        </Div>
        {second_vw_className === 'home_second_view_img_1' ? (
          <Link to="/teachers" style={{ textDecoration: 'none' }}>
            <button className="second_vw_btn_content">{btn_content}</button>
          </Link>
        ) : (
          <button
            className="second_vw_btn_content"
            onClick={() => {
              const priceLocation = document.getElementsByClassName('FourthViewDiv')[0].getBoundingClientRect().top;
              const scrolledTopLength = window.pageYOffset;
              const absoluteTop = priceLocation + scrolledTopLength;
              window.scrollTo({ top: absoluteTop, behavior: 'smooth' });
            }}
          >
            {btn_content}
          </button>
        )}
      </div>
    </div>
  ) : (
    <div className="SecondViewDiv">
      <div className="SecondViewDiv3">
        <Div className="second_vw_title2" text={title}></Div>
        <Div className="second_vw_content">
          <Div className="second_vw_content1" text={content}></Div>
          <Div className="second_vw_content2" text={content2}></Div>
        </Div>
        <Link to="/guide" style={{ textDecoration: 'none' }}>
          <button className="second_vw_btn_content">{btn_content}</button>
        </Link>
      </div>
      <img className={second_vw_className} src={imgUrl} alt="imgUrl" />
    </div>
  );

export default SecondViewDiv;
