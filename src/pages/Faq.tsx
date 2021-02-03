import Div from 'components/atoms/Div';
import FaqLastView from 'components/organims/Community/FaqLastView';
import FaqMainView from 'components/organims/Community/FaqMainView';
import NoticeView from 'components/organims/Community/NoticeView';
import Footer from 'components/organims/Footer';
import Nav from 'components/organims/Nav';
import RestFirstView from 'components/organims/RestFirstView';
import React, { useState } from 'react';

const Faq: React.FunctionComponent = () => {
  const [isFaq, setIsFaq] = useState(true);

  const toggleAccount_notice = () => setIsFaq(false);
  const toggleAccount_faq = () => setIsFaq(true);

  const checkClassName = () => {
    if (isFaq) {
      return 'faq_btn_unselected';
    } else {
      return 'faq_btn_selected';
    }
  };
  const checkClassName2 = () => {
    if (!isFaq) {
      return 'faq_btn_unselected';
    } else {
      return 'faq_btn_selected';
    }
  };

  return (
    <Div className="FaqPage">
      <Nav cl_name="faq"></Nav>
      <RestFirstView name="Faq" notice={isFaq}></RestFirstView>
      <Div className="faq_btn">
        <button className={checkClassName()} name="notice" onClick={toggleAccount_notice}>
          공지사항
        </button>
        <button className={checkClassName2()} name="faq" onClick={toggleAccount_faq}>
          FAQ
        </button>
      </Div>
      {isFaq ? (
        <>
          <FaqMainView></FaqMainView>
          <FaqLastView></FaqLastView>
        </>
      ) : (
        <NoticeView></NoticeView>
      )}
      <Footer></Footer>
    </Div>
  );
};

export default Faq;
