'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaCopy } from "react-icons/fa6";
// import { useAppKit } from "@reown/appkit/react";

export default function Dashboard() {

  interface EmbeddedWalletInfo{
    authProvider: string,
    isSmartAccountDeployed: boolean
  }
  
  interface walletAddress {
    address: string,
    isConnected: boolean,
    caipAddress: string,
    status: string,
    embeddedWalletInfo: EmbeddedWalletInfo,
  }
  
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("airtime");
  const [walletConnected, setWalletConnected] = useState(true);
  const [purchaseHistory, setPurchaseHistory] = useState<
  { id: number; type: string; network: string; phone: string; amount: string; date: string }[]
  >([]);

const [walletData,setWalletData] = useState<walletAddress | null>(null);



  useEffect(() =>  {
    const storedWalletData = localStorage.getItem("walletData");
  if (storedWalletData) {
    try {
  
      setWalletData(JSON.parse(storedWalletData));
      console.log(walletData);
      console.log("This is the walletDataParsed", walletData);

    } catch (error) {
      console.error("Error parsing wallet data:", error);
      setWalletData(null); // Handle invalid JSON gracefully
    }
  }
const history = [
  {
    id: 1,
    type: "Data",
    network: "MTN",
    phone: "08012345678",
    amount: "$5",
    date: "2025-01-01",
  },
  {
    id: 2,
    type: "Airtime",
    network: "Glo",
    phone: "08087654321",
    amount: "$10",
    date: "2025-01-10",
  },
];
setPurchaseHistory(history);
  },[walletData]);



  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-md md:px-8 lg:px-16">
        <div className="flex items-center gap-3 border-2 border-[#1e1e1e] px-2 py-2 rounded-3xl">
          {/* Profile Picture and Wallet Address */}
          <Image
            src="/images/pfp.jpeg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-sm font-medium text-gray-900">{walletData?.address || "0x123...abc"}</p>
          <button>
            <FaCopy className="text-gray-900" />
          </button>
        </div>
        {/* Menu Button */}
        <button
          className="p-3 text-[#1e1e1e] bg-white border-2 border-[#1e1e1e] hover:bg-[#1e1e1e] hover:text-white rounded-md focus:outline-none transition-transform font-medium"
          onClick={() => setWalletConnected(!walletConnected)}
        >
          {walletConnected ? <span>Disconnect</span> : <span>Connect</span>}
        </button>
      </nav>

      {/* Airtime and Data Toggle */}
      <div className="w-full rounded-md p-4 border-gray-50 flex justify-center gap-3 md:max-w-xl md:mx-auto lg:max-w-3xl">
        <button
          className={`border rounded-full w-1/2 py-3 flex items-center justify-center font-semibold ${
            activeTab === "airtime"
              ? "bg-[#1e1e1e] text-[#fff]"
              : "bg-white border-gray-300"
          }`}
          onClick={() => setActiveTab("airtime")}
        >
          Airtime
        </button>
        <button
          className={`border rounded-full w-1/2 py-3 flex items-center justify-center font-semibold ${
            activeTab === "data"
              ? "bg-[#1e1e1e] text-white"
              : "bg-white border-gray-300"
          }`}
          onClick={() => setActiveTab("data")}
        >
          Data
        </button>
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-4 md:w-1/2 md:mx-auto lg:max-w-4xl">
        {activeTab === "airtime" && (
          <>
            {/* Airtime Section */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700"
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 bg-white"
                />
              </div>
            </div>

            <div>
              {/* Network Providers */}
              <label className="block text-sm font-semibold text-gray-700">
                Network Providers
              </label>
              <div className="grid grid-cols-4 gap-3">
                {["glo.png", "mtn.png", "airtel.jpeg", "9mob.jpeg"].map((provider) => (
                  <button
                    key={provider}
                    className="py-3 border-2 border-gray-300 rounded-md hover:bg-gray-300 transition-all flex items-center justify-center"
                  >
                    <Image
                      src={`/images/${provider}`}
                      alt={provider.toUpperCase()}
                      width={40}
                      height={40}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              {/* Amount */}
              <label
                htmlFor="amount"
                className="block text-sm font-semibold text-gray-700"
              >
                Amount
              </label>
              <div className="relative">
                <input
                  id="amount"
                  type="number"
                  placeholder="Enter Amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 bg-white"
                />
              </div>
            </div>
          </>
        )}

        {activeTab === "data" && (
          <>
            {/* Data Section */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700"
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 bg-white"
                />
              </div>
            </div>

            <div>
              {/* Network Providers */}
              <label className="block text-sm font-semibold text-gray-700">
                Network Providers
              </label>
              <div className="grid grid-cols-4 gap-3">
                {["glo.png", "mtn.png", "airtel.jpeg", "9mob.jpeg"].map((provider) => (
                  <button
                    key={provider}
                    className="py-3 border-2 border-gray-300 rounded-md hover:bg-gray-300 transition-all flex items-center justify-center"
                  >
                    <Image
                      src={`/images/${provider}`}
                      alt={provider.toUpperCase()}
                      width={40}
                      height={40}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              {/* Select Plan */}
              <label
                htmlFor="plan"
                className="block text-sm font-semibold text-gray-700"
              >
                Select Plan
              </label>
              <select
                id="plan"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#f1952c] focus:border-[#f1952c] bg-white"
              >
                <option value="plan1">Plan 1</option>
                <option value="plan2">Plan 2</option>
                <option value="plan3">Plan 3</option>
              </select>
            </div>
          </>
        )}

        {/* Token Selection */}
        <div>
          <label
            htmlFor="token"
            className="block text-sm font-semibold text-gray-700"
          >
            Select Token
          </label>
          <select
            id="token"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#f1952c] focus:border-[#f1952c] bg-white"
          >
            <option value="usdc">USDC</option>
          </select>
        </div>

        {/* Proceed Button */}
        <div className="py-5">
          <button className="w-full bg-[#fff] border-2 border-[#1e1e1e] text-[#1e1e1e] py-3 rounded-md font-semibold hover:bg-[#383838] hover:border-none hover:text-white">
            Proceed
          </button>
        </div>


    {/* History Section */}
    <div className="mt-40">
    <h3 className="text-lg font-semibold text-gray-800">Purchase History</h3>
    <ul className="mt-4 space-y-2">
      {purchaseHistory.length > 0 ? (
        purchaseHistory.map((item) => (
          <li
            key={item.id}
            className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-gray-800">
                {item.type} ({item.network})
              </p>
              <p className="text-sm text-gray-600">
                {item.phone} - {item.amount}
              </p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          </li>
        ))
      ) : (
        <p className="text-sm text-gray-500">No history available.</p>
      )}
    </ul>
  </div>
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

