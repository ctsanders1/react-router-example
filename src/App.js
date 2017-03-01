import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import NavLink from './NavLink';
import logo from './sw_logo.png';
import './app.css';
import {randNum} from './helpers'


export default class App extends Component {
  state = {}

  randomPage = (e) => {
    e.preventDefault();
    const pages = ['/','/home','/films','/people','/planets','/species','/starships','/vehicles']; 
    let rnd = pages[randNum()];

    (hashHistory.getCurrentLocation().pathname === rnd)
      ? hashHistory.push(pages[randNum()])
      : hashHistory.push(rnd);
  }

  render() {
    return (
      <div className="text-center">
        <h1>Hello React Router!</h1> 
        <Link className="logo" to="/">
          <img src={logo} alt="..."/>    
        </Link>
        <div className="btn-container">
          <a href="#" onClick={this.randomPage} className="btn btn-primary">Get Me Some Random Page!</a>
        </div>
        <nav className="navbar navbar-default">
          <div className="container">
            <ul className="nav navbar-nav">
              <li><NavLink to="/home"><span className="glyphicon glyphicon-home" aria-hidden="true"></span> Home</NavLink></li>
              <li><NavLink to="/films">Films</NavLink></li>
              <li><NavLink to="/people">People</NavLink></li>
              <li><NavLink to="/planets">Planets</NavLink></li>
              <li><NavLink to="/species">Species</NavLink></li>
              <li><NavLink to="/starships">Starships</NavLink></li>
              <li><NavLink to="/vehicles">Vehicles</NavLink></li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
