'use client';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="transition-all bg-white text-gray-900 sticky top-0 z-50 border border-b-2">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold text-3xl tracking-wide">
          <span className="text-[#2c76d1]">AIR</span>PLUG
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-lg">
          <a href="#" className="hover:text-[#2c76d1] transition-colors">
            About
          </a>
          <a href="#" className="hover:text-[#2c76d1] transition-colors">
            How to Buy?
          </a>
          <a href="#" className="hover:text-[#2c76d1] transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 border-2 border-gray-300 rounded-md focus:outline-none transition-transform"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {!isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-[#fff] text-gray-900 space-y-4 py-2 px-8  transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ overflow: 'hidden' }}
      >
        <a href="#" className="block text-lg hover:text-[#2c76d1] transition-colors">
          About
        </a>
        <a href="#" className="block text-lg hover:text-[#2c76d1] transition-colors">
          How to Buy?
        </a>
        <a href="#" className="block text-lg hover:text-[#2c76d1] transition-colors">
          Contact
        </a>
      </div>
    </header>
  );
}
