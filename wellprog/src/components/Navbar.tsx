import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">WellProg</Link>
        <div>
          <Link to="/login" className="text-white mr-4">Login</Link>
          <Link to="/signup" className="text-white mr-4">Signup</Link>
          <Link to="/dashboard" className="text-white mr-4">Dashboard</Link>
          <Link to="/admin" className="text-white">Admin Panel</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

