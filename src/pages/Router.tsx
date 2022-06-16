import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage } from './LoginPage';
import { IntroPage } from './IntroPage';
import { HomePage } from './HomePage';
import { LocationPage } from './LocationPage'
import { BulletinPage } from './BulletinPage';
import { SignupPage } from './SignupPage';
import { MyDiaryPage } from './MyDiaryPage';
import { AlarmPage } from './AlarmPage';
import { MyPage } from './MyPage';
import { SOTDPage } from './SOTDPage';

export const Router = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/intro" component={IntroPage} />
      <Route path="/" component={HomePage} exact />
      <Route path="/bulletin" component={BulletinPage} />
      <Route path="/location" component={LocationPage} />
      <Route path="/mydiary" component={MyDiaryPage} />
      <Route path="/alarm" component={AlarmPage} />
      <Route path="/my" component={MyPage} />
      <Route path="/sotd" component={SOTDPage} />
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
