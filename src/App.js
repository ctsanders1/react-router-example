import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import NavLink from './NavLink';
import logo from './sw_logo.png';
import reactLogo from './logo.svg';
import './app.css';
import {randNum, makeid} from './helpers'


export default class App extends Component {
  state = {}

  randomPage = (e) => {
    e.preventDefault();
    const pages = ['/','/home','/films','/characters','/planets','/species','/starships','/vehicles']; 
    let rnd = pages[randNum()];

    (hashHistory.getCurrentLocation().pathname === rnd)
      ? hashHistory.push(pages[randNum()])
      : hashHistory.push(rnd);
  }

  noPage = (e) => {
    e.preventDefault();
    hashHistory.push(makeid())
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
        <div className="btn-container">
          <a href="#" onClick={this.noPage} className="btn btn-danger">Send Me Nowhere!</a>
        </div>
        <nav className="navbar navbar-default">
          <div className="container">
            <ul className="nav navbar-nav">
              <li><NavLink to="/home"><span className="glyphicon glyphicon-home" aria-hidden="true"></span> Home</NavLink></li>
              <li><NavLink to="/films">Films</NavLink></li>
              <li><NavLink to="/characters">Characters</NavLink></li>
              <li><NavLink to="/species">Species</NavLink></li>
              <li><NavLink to="/planets">Planets</NavLink></li>
              <li><NavLink to="/starships">Starships</NavLink></li>
              <li><NavLink to="/vehicles">Vehicles</NavLink></li>
            </ul>
          </div>
        </nav>
        <div className="col-sm-6 col-sm-offset-3">
          {this.props.children}
        </div>
        <div className="footer col-sm-12">
          <p>Made with <span className="text-danger">♥</span> /<img src={reactLogo} alt=".." height="16" title="ReactJS" /> by <a href="https://dankoknad.github.io/" target="_blank">Danko</a></p>
        </div>
      </div>
    );
  }
}
