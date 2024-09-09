import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar bg-gray-900 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-cyberpunkPink text-2xl hover:text-cyberpunkBlue">StRaNgErDrEaMeR</Link>
        <div>
          <Link to="/" className="mr-4 hover:text-cyberpunkPink">Home</Link>
          <Link to="/about" className="mr-4 hover:text-cyberpunkPink">About</Link>
          <Link to="/contact" className="hover:text-cyberpunkPink">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
