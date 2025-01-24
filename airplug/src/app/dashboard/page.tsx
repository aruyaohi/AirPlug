'use client'
import { useState } from "react";
import Image from "next/image";
import { FaCopy } from "react-icons/fa6";



export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center gap-3 border border-5 px-2 py-2 border-[#f1952c] bg-[#f1952c] rounded-3xl">
          {/* Profile Picture and Wallet Address */}
          <Image
            src="/images/pfp.jpeg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-sm font-medium text-black">0x123...abc</p>
          <button>
          <FaCopy className="text-[#f1952c]"/>
          </button>
        </div>
        {/* Menu Button */}
       <button
          className="lg:hidden p-2 border-2 border-[#f1952c] rounded-md focus:outline-none transition-transform"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#f1952c]"
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
      </nav>

        {/* Wallet Balance Section */}
            {/* Mobile Menu (for smaller screens) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden">
          <div className="bg-white p-4 w-64 absolute top-0 right-0 h-full">
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-700">
              Close
            </button>
            {/* Additional menu items can go here */}
          </div>
        </div>
      )}
    </div>
  );
}