import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <ul className="nav navbar-nav">
    <li><NavLink to="/home" activeClassName="active"><span className="glyphicon glyphicon-home" aria-hidden="true"></span> Home</NavLink></li>
    <li><NavLink to="/films" activeClassName="active">Films</NavLink></li>
    <li><NavLink to="/characters" activeClassName="active">Characters</NavLink></li>
    <li><NavLink to="/species" activeClassName="active">Species</NavLink></li>
    <li><NavLink to="/planets" activeClassName="active">Planets</NavLink></li>
    <li><NavLink to="/starships" activeClassName="active">Starships</NavLink></li>
    <li><NavLink to="/vehicles" activeClassName="active">Vehicles</NavLink></li>
  </ul>
)

export default Navbar
