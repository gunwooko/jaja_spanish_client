import Div from 'components/atoms/Div';
import React from 'react';
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
        <button className="second_vw_btn_content">{btn_content}</button>
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
        <button className="second_vw_btn_content">{btn_content}</button>
      </div>
      <img className={second_vw_className} src={imgUrl} alt="imgUrl" />
    </div>
  );

export default SecondViewDiv;
