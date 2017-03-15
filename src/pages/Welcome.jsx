import React, { Component } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <div className="col-sm-4 col-sm-offset-4">
        <h3>Welcome to the React-Router coding example</h3> 
        <h3>Objectives:</h3>
        <ul className="list-unstyled">
          <li>Integrate React-Router into React App <span className="glyphicon glyphicon-ok text-primary"></span></li>
          <li>Use some components: Router, Route, IndexRoute, NavLink and Link <span className="glyphicon glyphicon-ok text-primary"></span></li>
          <li>Play with push method <span className="glyphicon glyphicon-ok text-primary"></span></li>
          <li>Make everything feel and work nice <span className="glyphicon glyphicon-ok text-primary"></span></li>
          <li>Have some fun, ofcourse! <span className="glyphicon glyphicon-ok text-primary"></span></li>
        </ul>
      </div>
    );
  }
}