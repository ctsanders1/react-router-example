import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import logo from './sw_logo.png';
import reactLogo from './logo.svg';
import './app.css';
import {randNum, makeid} from './helpers'

class App extends Component {
  state = {}

  randomPage = (e) => {
    e.preventDefault();
    const pages = ['/','/home','/films','/characters','/planets','/species','/starships','/vehicles']; 
    let rnd = pages[randNum()];

    (this.props.location.pathname === rnd)
      ? this.props.history.push(pages[randNum()])
      : this.props.history.push(rnd);
  }

  noPage = (e) => {
    e.preventDefault();
    this.props.history.push(makeid())
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
            <Navbar />
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

export default withRouter(App)
