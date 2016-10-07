import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app/App';
import Home from './containers/home/Home';
import Login from './containers/login/Login';

import 'bootstrap/dist/css/bootstrap.css';

export default (
  <Route path="/">
    <Route component={App}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="login" component={Login} />
  </Route>
);
