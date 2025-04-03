import { useState } from 'react';
import React from 'react';
import heroImage from "../assets/hero_lib.png"; // Import your hero image
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f4e1c6] via-[#d3b89a] to-[#a87c62] flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center">
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Library Management System"
            className="w-full max-w-lg md:max-w-xl object-contain drop-shadow-lg"
          />
        </div>
        
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-5xl font-semibold tracking-tight text-[#4d2c1d] sm:text-6xl">
            Library Management System
          </h1>
          <p className="mt-6 text-lg text-[#6f4e37] sm:text-xl">
            Streamline book borrowing, tracking, and management effortlessly with our advanced system.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-x-6 gap-y-4">
            <Link
              className="px-6 py-3 bg-[#8b5e3b] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#6d4830] transition"
              to="/signup"
            > Get Started </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
