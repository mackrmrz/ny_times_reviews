import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import SearchBar from './SearchBar';

const Navbar = () => {
  const handleSearch = () => {
    console.log("searching author",)
  }
  return (
    <nav className="contianer flex flex-col md:flex-row justify-around">
      <div className="logo p-6 text-gray-800">
        <h1>MNR_BOOKS&MOVIES</h1>
      </div>
      <div className="hamburger font-bold text-2xl md:hidden">
        <FaBars />
      </div>
      <div className="nav-links bg-gray-800 flex items-center">
        <div className="text-white p-5">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="text-white p-5">
          <NavLink to="/Books">Books</NavLink>
        </div>
      </div>
      <SearchBar handleSearch={handleSearch}/>
    </nav>
  );
};

export default Navbar;
