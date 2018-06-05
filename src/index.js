import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { routes } from './routesConfig';

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory({ basename: '/react-router-example' });

render((
  <Router history={history}>
    <App>
      <Switch>
        {routes.map(route => 
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        )}
      </Switch>
    </App>
  </Router>
), document.getElementById('root'))
