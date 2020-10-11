import React from 'react';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { Profile } from './pages/Profile';
import { Recipe } from './pages/Recipe';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Signup } from './pages/Signup';

export const AplicationRouter = () => {
  return (
    <Router>
      <div className='flex flex-col h-screen justify-between'>
        <Navbar />
        <div className='mb-auto'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/recipe/:slug' component={Recipe} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
