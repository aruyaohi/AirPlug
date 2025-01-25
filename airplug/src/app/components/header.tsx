'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-around lg:mr-0">
          <Image src={'/images/air.png'} width={150} height={150} alt="Logo" />
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
        className={`lg:hidden bg-[#ededed] text-gray-900 space-y-4 py-2 px-16 border transition-all duration-300 mt-[-45px] ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ overflow: 'hidden' }}
      >
        <a href="#" className="block text-md hover:text-[#2c76d1] transition-colors">
          About
        </a>
        <a href="#" className="block text-md hover:text-[#2c76d1] transition-colors">
          How to Buy?
        </a>
        <a href="#" className="block text-md hover:text-[#2c76d1] transition-colors">
          Contact
        </a>
      </div>
    </header>
  );
}
