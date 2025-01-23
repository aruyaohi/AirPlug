'use client'
import { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";  // For the hamburger icon

// Dummy data for network logos
const networks = [
  { name: "GLO", logo: "/images/glo-logo.png" },
  { name: "MTN", logo: "/images/mtn-logo.png" },
  { name: "AIRTEL", logo: "/images/airtel-logo.png" },
  { name: "9MOBILE", logo: "/images/9mobile-logo.png" },
];

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center gap-3">
          {/* Profile Picture and Wallet Address */}
          <Image
            src="/images/pfp.png"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-sm font-medium text-gray-700">0x123...abc</p>
        </div>
        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-700"
        >
          <FaBars size={24} />
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex-grow p-4 lg:p-8">
        {/* Wallet Balance Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Wallet Balance</h2>
          <p className="mt-2 text-xl text-gray-600">$100.00</p>
          <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
            Fund Wallet
          </button>
        </div>

        {/* Network Selection Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Select Network</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {networks.map((network) => (
              <div key={network.name} className="flex items-center gap-4 cursor-pointer">
                <Image
                  src={network.logo}
                  alt={network.name}
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <p className="text-lg text-gray-700">{network.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
