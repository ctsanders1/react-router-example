import React from 'react'
import { NavLink } from 'react-router-dom';
import { navlinks } from './navbarConfig'

const Navbar = () => (
  <ul className="nav navbar-nav">
    {navlinks.map(link => 
      <li key={link.to}>
        <NavLink
          to={link.to}
          activeClassName="active">
            {(link.to === '/home') && <span className="glyphicon glyphicon-home" aria-hidden="true"></span>} 
            {link.child}
        </NavLink>
      </li>
    )}
  </ul>
)

export default Navbar
