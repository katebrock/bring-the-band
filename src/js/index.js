console.log('hi');

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import App from './app';
import Bands from './components/bands';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import Search from './components/search';

let routes = (
  <Router>
    <Route path= "/" component = {App} >
      <IndexRoute component = {Bands} />
      <Route path = "profile" component = {Profile} />
      <Route path = "login" component = {Login} />
      <Route path = "register" component = {Register} />
      <Route path = "search" component = {Search} />
    </Route>
  </Router>
)

render(routes, document.getElementById('app'));
