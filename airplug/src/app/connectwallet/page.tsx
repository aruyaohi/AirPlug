'use client';
import Image from "next/image";
import { createAppKit } from '@reown/appkit/react'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { useAppKit } from "@reown/appkit/react";

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
})

// 1. Get projectId from https://cloud.reown.com
const projectId = 'YOUR_PROJECT_ID'

// 2. Create a metadata object - optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Solana Example',
  url: 'https://example.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Create modal
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export default function ConnectWallet() {
  const { open } = useAppKit();  // Now it's safe to use useAppKit


  return (
    <div className="overflow-hidden min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-blue-50">
      {/* Content */}
      <div className="flex-grow flex flex-col items-center justify-center gap-10 px-6">
        {/* Centered Image */}
        <Image
          src="/images/wallet2.png"
          alt="Centered Illustration"
          width={150}
          height={150}
          className="h-40 w-auto object-contain rounded-md shadow-md"
        />

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 animate-fadeIn">
            Connect Your Wallet to Continue
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-600">
            Securely connect your wallet and explore our features.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="py-10 flex flex-col items-center gap-5">
        {/* Connect Wallet Button */}
        <button
          onClick={() => open()}
          className="py-4 px-16 lg:px-20 font-semibold text-white bg-gradient-to-r from-[#2c95d1] via-[#2c76d1] to-purple-300 rounded-lg hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Connect Wallet
        </button>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}
