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
import SubmitClass from 'pages/SubmitClass';
import ReviewAfter from 'pages/ReviewAfter';
import SubmitClassAfter from 'pages/SubmitClassAfter';
import ReviewReadView from 'pages/ReviewReadView';
import ReviewUpdateView from 'pages/ReviewUpdateView';

const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/company" component={CompanyIntro}></Route>
      <Route path="/guide" component={ClassGuide}></Route>
      <Route path="/teachers" component={Teachers}></Route>
      <Route path="/review" exact component={Review}></Route>
      <Route path="/review/writing" component={ReviewWriting}></Route>
      <Route path="/review/after" component={ReviewAfter}></Route>
      <Route path="/review/:id" exact component={ReviewReadView}></Route>
      <Route path="/review/:id/update" component={ReviewUpdateView}></Route>
      <Route path="/fqa" component={Faq}></Route>
      <Route path="/login" component={LogIn}></Route>
      <Route path="/mypage" exact component={MyPage}></Route>
      <Route path="/policy/privacy" component={PrivacyPolicy}></Route>
      <Route path="/policy/terms" component={TermsPolicy}></Route>
      <Route path="/submitclass" exact component={SubmitClass}></Route>
      <Route path="/submitclass/after" component={SubmitClassAfter}></Route>
      {/* <Route path="/submitclass/complete" component={SumbitClassCompledted}></Route> */}
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
