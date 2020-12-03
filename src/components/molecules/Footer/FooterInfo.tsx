import Div from 'components/atoms/Div';
import Label from 'components/atoms/Label';
import React from 'react';
import { Link } from 'react-router-dom';
import './FooterInfo.scss';

const FooterInfo: React.FunctionComponent = () => (
  <div className="FooterInfo">
    <a
      href="mailto:contact.jajaspanish@gmail.com"
      title="Send Email"
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <Label className="label_footer_Info">
        <i className="fas fa-envelope"></i>
        <Div className="div_footer_Info" text="contact.jajaspanish@gmail.com"></Div>
      </Label>
    </a>
    <a
      href="https://www.youtube.com/channel/UCxSHlkKjJRYISqclf4MMKyA/featured?view_as=subscriber"
      target="blank"
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <Label className="label_footer_Info">
        <i className="fab fa-youtube"></i>
        <Div className="div_footer_Info" text="깔깔스페인어"></Div>
      </Label>
    </a>
    <Label className="label_footer_Info">
      <img
        className="kakao"
        src="https://media.vlpt.us/images/gunwooko/post/214664e1-26f4-4d5e-9024-793506ee847a/%EC%B9%B4%ED%86%A1.png"
      ></img>
      <Div className="div_footer_Info" text="@jajaspanish"></Div>
    </Label>
    <a
      href="https://www.instagram.com/jaja_spanish_kr/"
      target="blank"
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <Label className="label_footer_Info">
        <i className="fab fa-instagram"></i>
        <Div className="div_footer_Info" text="jaja_spanish_kr"></Div>
      </Label>
    </a>

    <img
      className="footerLogo"
      src="https://media.vlpt.us/images/gunwooko/post/9df0d344-2503-4a95-b30e-2b04239dab54/mainLogo@2x.png"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    ></img>
  </div>
);
export default FooterInfo;
