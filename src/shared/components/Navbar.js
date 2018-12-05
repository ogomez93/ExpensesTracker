import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <header>
    <NavLink exact activeClassName="navbarActive" to='/'>Home</NavLink>
    <NavLink activeClassName="navbarActive" to='/login'>Login</NavLink>
  </header>
);

export default Navbar;
