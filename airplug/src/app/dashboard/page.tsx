'use client';
import { useState } from "react";
import Image from "next/image";
import { FaCopy } from "react-icons/fa6";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("airtime");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center gap-3 border px-2 py-2 rounded-3xl">
          {/* Profile Picture and Wallet Address */}
          <Image
            src="/images/pfp.jpeg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-sm font-medium text-gray-900">0x123...abc</p>
          <button>
            <FaCopy className="text-gray-900" />
          </button>
        </div>
        {/* Menu Button */}
        <button
          className="lg:hidden p-2 border-2 border-gray-500 rounded-md focus:outline-none transition-transform"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {!isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            )}
          </svg>
        </button>
      </nav>

      {/* Airtime and Data Toggle */}
      <div className="w-full border-2 rounded-md p-4 border-gray-50 flex justify-center gap-3">
        <button
          className={`border rounded-full w-1/2 py-3 flex items-center justify-center font-semibold ${
            activeTab === "airtime" ? "bg-[#f1952c] text-white" : "bg-white border-gray-300"
          }`}
          onClick={() => setActiveTab("airtime")}
        >
          Airtime
        </button>
        <button
          className={`border rounded-full w-1/2 py-3 flex items-center justify-center font-semibold ${
            activeTab === "data" ? "bg-[#f1952c] text-white" : "bg-white border-gray-300"
          }`}
          onClick={() => setActiveTab("data")}
        >
          Data
        </button>
      </div>

      {/* Airtime Section */}
      {activeTab === "airtime" && (
        <div className="p-6 space-y-4">
          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <div className="relative">
              <input
                id="phone"
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Network Providers */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Network Providers</label>
            <div className="flex justify-between items-center gap-3">
              <button className="flex-1 py-3 border-2 border-[#f1952c] rounded-md hover:bg-[#3de25e] hover:border-none transition-all duration-300 flex items-center justify-center">
                <Image src="/images/glo.png" alt="GLO" width={40} height={40} />
              </button>
              <button className="flex-1 py-3 border-2 border-gray-300 rounded-md hover:bg-yellow-500 hover:border-none  transition-all duration-300 flex items-center justify-center">
                <Image src="/images/mtn.png" alt="MTN" width={40} height={40} />
              </button>
              <button className="flex-1 py-3 border-2 border-gray-300 rounded-md hover:bg-red-500 hover:border-none transition-all duration-300 flex items-center justify-center">
                <Image src="/images/airtel.jpeg" alt="Airtel" width={40} height={40} />
              </button>
              <button className="flex-1 py-3 border-2 border-gray-300 rounded-md hover:bg-[#6ba129] hover:border-none transition-all duration-300 flex items-center justify-center">
                <Image src="/images/9mob.jpeg" alt="9Mobile" width={40} height={40} />
              </button>
            </div>
          </div>

          {/* Amount */}
          <div>
            <label htmlFor="amount" className="block text-sm font-semibold text-gray-700">
              Amount
            </label>
            <div className="relative">
              <input
                id="amount"
                type="number"
                placeholder="Enter Amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      )}

      {/* Data Section */}
      {activeTab === "data" && (
        <div className="p-6 space-y-4">
          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <div className="relative">
              <input
                id="phone"
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Network Providers */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Network Providers</label>
            <div className="flex justify-between items-center gap-3">
              <button className="flex-1 py-3 border-2 border-[#f1952c] rounded-md hover:bg-[#f1952c] transition-all duration-300 flex items-center justify-center">
                <Image src="/images/glo.png" alt="GLO" width={40} height={40} />
              </button>
              <button className="flex-1 py-3 border-2 border-gray-300 rounded-md hover:bg-blue-500 transition-all duration-300 flex items-center justify-center">
                <Image src="/images/mtn.png" alt="MTN" width={40} height={40} />
              </button>
              <button className="flex-1 py-3 border-2 border-gray-300 rounded-md hover:bg-red-500 transition-all duration-300 flex items-center justify-center">
                <Image src="/images/airtel.jpeg" alt="Airtel" width={40} height={40} />
              </button>
              <button className="flex-1 py-3 border-2 border-gray-300 rounded-md hover:bg-green-500 transition-all duration-300 flex items-center justify-center">
                <Image src="/images/9mob.jpeg" alt="9Mobile" width={40} height={40} />
              </button>
            </div>
          </div>

          {/* Select Plan */}
          <div>
            <label htmlFor="plan" className="block text-sm font-semibold text-gray-700">
              Select Plan
            </label>
            <select
              id="plan"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="plan1">Plan 1</option>
              <option value="plan2">Plan 2</option>
              <option value="plan3">Plan 3</option>
            </select>
          </div>
        </div>
      )}

      {/* Token Selection */}
      <div className="p-6 space-y-2">
        <label htmlFor="token" className="block text-sm font-semibold text-gray-700">
          Select Token
        </label>
        <select
          id="token"
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="usdc">USDC</option>
        </select>
      </div>

      {/* Proceed Button */}
      <div className="p-6">
        <button className="w-full bg-[#030303] text-white py-3 rounded-md font-semibold">
          Proceed
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden">
          <div className="bg-white p-4 w-64 absolute top-0 right-0 h-full">
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-700">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
