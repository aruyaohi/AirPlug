'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div>
          <h3 className="font-semibold text-[#383838] text-2xl">
            Air<span className="text-[#f1952c]">Plug</span>
          </h3>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-lg">
          <a href="#" className="hover:text-[#f1952c] transition-colors">
            About
          </a>
          <a href="#" className="hover:text-[#f1952c] transition-colors">
            How to Buy?
          </a>
          <a href="#" className="hover:text-[#f1952c] transition-colors">
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
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 bg-white shadow-lg transform transition-transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <button
            className="text-gray-900 text-lg focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-12 text-lg">
          <a href="#" className="hover:text-[#f1952c] transition-colors">
            About
          </a>
          <a href="#" className="hover:text-[#f1952c] transition-colors">
            How to Buy?
          </a>
          <a href="#" className="hover:text-[#f1952c] transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
