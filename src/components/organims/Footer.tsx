import FooterBusinessLicence from 'components/molecules/Footer/FooterBusinessLicence';
import FooterInfo from 'components/molecules/Footer/FooterInfo';
import FooterList from 'components/molecules/Footer/FooterList';
import React from 'react';
import './Footer.scss';

const Footer: React.FunctionComponent = () => (
  <>
    <section className="Footer">
      <div className="footer_sub_flex">
        <FooterList></FooterList>
        <FooterInfo></FooterInfo>
      </div>
    </section>
    <section className="Footer">
      <div className="footer_sub_BL">
        <FooterBusinessLicence></FooterBusinessLicence>
      </div>
    </section>
  </>
);

export default Footer;
