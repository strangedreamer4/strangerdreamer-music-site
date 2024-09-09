import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar bg-gray-800 p-4 text-white">
      <div className="container mx-auto">
        <Link to="/" className="mr-4 hover:text-cyberpunkPink">Home</Link>
        <Link to="/about" className="mr-4 hover:text-cyberpunkPink">About</Link>
        <Link to="/contact" className="hover:text-cyberpunkPink">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
