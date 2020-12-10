import Div from 'components/atoms/Div';
import React from 'react';

const NoticeView: React.FunctionComponent = () => (
  <Div className="notice_main_vw">
    <Div className="notice_main_vw_li">
      <Div className="notice_main_vw_title"> ** 2020년 12월 10일 ** </Div>
      <Div className="notice_main_vw_content">
        이곳은 깔깔스페인어의 공지사항 페이지 입니다. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Expedita, nulla sunt nostrum modi enim, laborum animi voluptates illo maiores vero reiciendis! Mollitia quasi
        dignissimos obcaecati dolor fuga magni voluptas atque!
      </Div>
    </Div>
    <Div className="notice_main_vw_li">
      <Div className="notice_main_vw_title"> ** 2020년 12월 23일 **</Div>
      <Div className="notice_main_vw_content">
        이날 페이지 모두 완성하기 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, amet maxime quod
        voluptatem numquam, nesciunt omnis quo cumque dolor debitis iusto voluptatum eius velit perferendis fugit
        repellat ipsum sint iure?
      </Div>
    </Div>
  </Div>
);

export default NoticeView;
