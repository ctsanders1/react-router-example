import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Films from './pages/Films';
import Characters from './pages/Characters';
import Planets from './pages/Planets';
import Species from './pages/Species';
import Starships from './pages/Starships';
import Vehicles from './pages/Vehicles';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory({ basename: '/react-router-example' });

render((
  <Router history={history}>
    <App>
      <Switch>
      <Route path="/" component={Welcome} exact/>
      <Route path="/home" component={Home}/>
      <Route path="/films" component={Films}/>
      <Route path="/characters" component={Characters}/>
      <Route path="/species" component={Species}/>
      <Route path="/planets" component={Planets}/>
      <Route path="/starships" component={Starships}/>
      <Route path="/vehicles" component={Vehicles}/>
      <Route path="*" component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('root'))