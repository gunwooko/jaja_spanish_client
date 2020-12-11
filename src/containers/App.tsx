import ClassGuide from 'pages/ClassGuide';
import CompanyIntro from 'pages/CompanyIntro';
import Faq from 'pages/Faq';
import Home from 'pages/Home';
import LogIn from 'pages/LogIn';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import Review from 'pages/Review';
import ReviewWriting from 'pages/ReviewWriting';
import Teachers from 'pages/Teachers';
import TermsPolicy from 'pages/TermsPolicy';
import MyPage from 'pages/MyPage';
import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import ClassApp from 'pages/ClassApp';

const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/company" component={CompanyIntro}></Route>
      <Route path="/guide" component={ClassGuide}></Route>
      <Route path="/teachers" component={Teachers}></Route>
      <Route path="/review" exact component={Review}></Route>
      <Route path="/review/writing" component={ReviewWriting}></Route>
      <Route path="/fqa" component={Faq}></Route>
      <Route path="/login" component={LogIn}></Route>
      <Route path="/mypage" component={MyPage}></Route>
      <Route path="/policy/privacy" component={PrivacyPolicy}></Route>
      <Route path="/policy/terms" component={TermsPolicy}></Route>
      <Route path="/submitclass" component={ClassApp}></Route>
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
