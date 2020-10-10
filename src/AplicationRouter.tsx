import React from 'react';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { Profile } from './pages/Profile';
import { Recipe } from './pages/Recipe';

export const AplicationRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/recepe:slug' component={Recipe} />
      </Switch>
    </Router>
  );
};
