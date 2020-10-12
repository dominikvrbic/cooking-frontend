import React, { useContext } from 'react';
import { Home } from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { Profile } from './pages/Profile';
import { Recipe } from './pages/Recipe';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Signup from './pages/Signup';
import { UserContext } from './context/UserContext';
import EditRecipe from './pages/EditRecipe';

export const ApplicationRouter = () => {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <div className='flex flex-col h-screen justify-between'>
        <Navbar />
        <div className='mb-auto'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/recipe/:slug' component={Recipe} />

            {user ? (
              <>
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/editRecipe' component={EditRecipe} />
              </>
            ) : (
              <Redirect to='/' />
            )}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
