import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#e7dac7] to-[#c2a27a] shadow-md">
      <div className="navbar w-full px-6 py-3 flex justify-between items-center">
        
        {/* Logo Placeholder */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-14 w-24 mr-4" />
          <h1 className="text-2xl font-serif font-bold text-[#4a3628]">Library System</h1>
        </div>

        {/* Navbar Links */}
        <nav className="hidden lg:flex space-x-8 text-lg font-medium">
          <Link className="text-[#4a3628] hover:text-[#2d1b0f] transition" to="/">Home</Link>
          <Link className="text-[#4a3628] hover:text-[#2d1b0f] transition" to="/dashboard">Dashboard</Link>
          <Link className="text-[#4a3628] hover:text-[#2d1b0f] transition" to="/support">Support</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <Link
            className="px-4 py-2 border border-[#6b4f37] text-[#6b4f37] rounded-md hover:bg-[#6b4f37] hover:text-white transition"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="px-4 py-2 bg-[#6b4f37] text-white rounded-md hover:bg-[#4a3628] transition"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
