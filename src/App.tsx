import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login/login';
import ForgotPassword from './forgot-password/forgot-password';
import ResetPassword from './reset-password/reset-password';
import Home from './home/home';
import NotFound from './not-found/not-found';
import Registration from './registration/registration';
import VerifyEmail from './verify-email/verify-email';
import Collection from './collection/collection';
import Events from './events/events';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/collection">
          <Collection />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/reset-password/:token">
          <ResetPassword />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
        <Route path="/verify-email/:token">
          <VerifyEmail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
