'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useRouter } from 'next/navigation';
import { FaWallet } from "react-icons/fa6";

// Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

const projectId = 'b98b3713e506f7ad9ed961534df963af';

// Create modal
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: {
    name: 'AppKit',
    description: 'AppKit Solana Example',
    url: 'https://example.com',
    icons: ['https://avatars.githubusercontent.com/u/179229932'],
  },
  projectId,
  features: {
    email: true,
    socials: ['google', 'facebook'],
    analytics: true,
    legalCheckbox: true,
  },
  allWallets: "ONLY_MOBILE",
  defaultNetwork: solana,
});

export default function ConnectWallet() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { open } = useAppKit();
  const { address, isConnected, caipAddress, status, embeddedWalletInfo } = useAppKitAccount();


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


  const storeData = (data:walletAddress) =>{
    localStorage.setItem("walletData", JSON.stringify(data));
  } 



  const sendInfo = async () => {
    try {
      const payload = { address, caipAddress, status, embeddedWalletInfo };
      const response = await fetch('/api/walletAuth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const data = await response.json();
      storeData(data);
    } catch (error) {
      console.error('Failed to send wallet data:', error);
    }
  };



  useEffect(() => {
    if (isConnected) {
      setLoading(true);
      sendInfo();
      // Simulate a 5-second loader before navigating to the dashboard
      setTimeout(() => {
        router.push('/dashboard');
      }, 5000);
    }
  }, [isConnected]);

  return (
    <div className="min-h-screen flex w-full justify-center">
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <span className="loading loading-dots loading-lg text-[#1e1e1e]"></span>
        </div>
      )}

      <div className="max-w-3xl w-full shadow-lg rounded-xl bg-[#f6f6f6] p-6 sm:p-10 lg:p-12 text-center h-screen justify-center flex flex-col items-stretch">
        {/* Logo or Image */}
        <div className="h-2/3 flex flex-col justify-end pb-12">
          <Image
            src="/images/wallet2.png"
            alt="Wallet Illustration"
            width={200}
            height={200}
            className="mx-auto mb-6 rounded-full"
          />

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
            Connect Your Wallet
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-gray-600">
            Securely connect your wallet to access all features and explore a seamless experience.
          </p>
        </div>

        {/* Buttons */}
        <div className="h-1/3 flex flex-col justify-end">
          <div className="mt-8 w-full">
            <button
              onClick={() => open()}
              className="flex justify-center gap-4 items-center py-3 w-full sm:px-14 font-medium text-white bg-[#1e1e1e] rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <FaWallet size={20} />
              Connect Wallet
            </button>
          </div>

          {/* Additional Info */}
          <p className="mt-8 text-sm text-gray-500">
            Need help?{' '}
            <a href="/help" className="text-[#f1952c] hover:underline">
              Visit our Help Center
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
