import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="container bg-blue-700 p-4 shadow-lg">
      <div className="items-center">
        <div className="flex flex-row justify-between ">
          <div>
            <Link
              to="/"
              className="text-white text-3xl font-extrabold hover:text-gray-300 transition-colors duration-300"
            >
              WellProg
            </Link>
          </div>
          <div className="space-x-6">
            <div>
              <Link
                to="/login"
                className="text-white text-lg font-semibold hover:text-pink-500 transition-colors duration-300"
              >
                Login
              </Link>
            </div>
            <div>
              <Link
                to="/signup"
                className="text-white text-lg font-semibold hover:text-gray-300 transition-colors duration-300"
              >
                Signup
              </Link>
            </div>
            <div>
              <Link
                to="/dashboard"
                className="text-white text-lg font-semibold hover:text-gray-300 transition-colors duration-300"
              >
                Dashboard
              </Link>
            </div>
            <div>
              <Link
                to="/admin"
                className="text-white text-lg font-semibold hover:text-gray-300 transition-colors duration-300"
              >
                Admin Panel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
