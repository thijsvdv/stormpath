import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
// import createHashHistory from 'history/lib/createHashHistory';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage,
         VerifyPage, LogoutPage, DashboardPage, ForgotPage, ChangePasswordPage } from './pages';
 
ReactStormpath.init();

ReactDOM.render(
  <Router history={browserHistory}>
    <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <Route path='/register' component={RegistrationPage} />
      <Route path='/verify' component={VerifyPage} />
      <Route path='/forgot' component={ForgotPage} />
      <Route path='/reset' component={ChangePasswordPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <AuthenticatedRoute>
        <HomeRoute path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
      </AuthenticatedRoute>
    </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);