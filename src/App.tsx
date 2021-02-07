import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login';
import ForgotPassword from './forgot-password';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
      </Switch>
    </Router>
  );
}
