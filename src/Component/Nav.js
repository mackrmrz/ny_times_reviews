import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="contianer flex flex-col">
      <div className="logo p-6 ">
        <h1>MNR_BOOKS&MOVIES</h1>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/Books">Books</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
