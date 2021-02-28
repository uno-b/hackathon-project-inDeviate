import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import alanBtn from '@alan-ai/alan-sdk-web';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Users from './pages/Users/Users';
import Admin from './pages/Admin/Admin';
import NotFound from './pages/NotFound/NotFound';
import Chat from './pages/Chat/Chat';
import Jobs from './pages/Jobs/Jobs';

import Loader from './components/Loader/Loader';

import { logInUserWithOauth, loadMe } from './store/actions/authActions';

const App = ({ logInUserWithOauth, auth, loadMe }) => {
  useEffect(() => {
    loadMe();
  }, [loadMe]);

  useEffect(() => {
    alanBtn({
      key: '4269cbaee8fdcc81ffe76d73a2cff96d2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command }) => {
        if (command === 'homePage') {
          window.location = '/';
        } else if (command === 'usersPage') {
          window.location = '/#/users';
        } else if (command === 'profilePage') {
          window.location = `/${auth.me.username}`;
        } else if (command === 'adminPage') {
          if (auth.me?.role === 'ADMIN') {
            window.location = '/admin';
          }
        } else if (command === 'chatPage') {
          window.location = '/#/chat';
        } else if (command === 'jobsPage') {
          window.location = '/#/jobs';
        }
      },
    });
  }, []);

  //redosled hookova
  useEffect(() => {
    if (window.location.hash === '#_=_') window.location.hash = '';

    const cookieJwt = Cookies.get('x-auth-cookie');
    if (cookieJwt) {
      Cookies.remove('x-auth-cookie');
      logInUserWithOauth(cookieJwt);
    }
  }, []);

  useEffect(() => {
    if (!auth.appLoaded && !auth.isLoading && auth.token && !auth.isAuthenticated) {
      loadMe();
    }
  }, [auth.isAuthenticated, auth.token, loadMe, auth.isLoading, auth.appLoaded]);

  return (
    <>
      {auth.appLoaded ? (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/users" component={Users} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/admin" component={Admin} />
          <Route path="/chat" component={Chat} />
          <Route path="/jobs" component={Jobs} />
          <Route exact path="/:username" component={Profile} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      ) : (
        <Loader />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(connect(mapStateToProps, { logInUserWithOauth, loadMe }))(App);
