import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="contianer flex flex-col ">
      <div className="logo p-6 text-gray-800">
        <h1>MNR_BOOKS&MOVIES</h1>
      </div>
      <div className="hamburger font-bold text-2xl">
        <FaBars />
      </div>
      <div className="nav-links bg-gray-800 text-center ">
        <div className="text-white">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="text-white">
          <NavLink to="/Books">Books</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
