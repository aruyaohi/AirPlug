

'use client';
import Image from "next/image";
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

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
  },
  allWallets: "ONLY_MOBILE",
  defaultNetwork: solana,
});

export default function ConnectWallet() {
  const router = useRouter();
  const { open } = useAppKit();
  const { address, isConnected, caipAddress, status, embeddedWalletInfo } = useAppKitAccount();

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
      console.log('Wallet data sent successfully:', data);
    } catch (error) {
      console.error('Failed to send wallet data:', error);
    }
  };

  useEffect(() => {
    if (isConnected) {
      sendInfo();
      router.push('/dashboard');
    }
  }, [isConnected]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-50">
      <div className="max-w-3xl w-full border border-gray-200 shadow-lg rounded-xl bg-white p-6 sm:p-10 lg:p-12 text-center">
        {/* Logo or Image */}
        <Image
          src="/images/wallet2.png"
          alt="Wallet Illustration"
          width={120}
          height={120}
          className="mx-auto mb-6 rounded-full shadow-lg"
        />

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
          Connect Your Wallet
        </h1>
        <p className="mt-4 text-sm sm:text-lg text-gray-600">
          Securely connect your wallet to access all features and explore a seamless experience.
        </p>

        {/* Buttons */}
        <div className="mt-8">
          <button
            onClick={() => open()}
            className="py-3 px-10 sm:px-14 font-medium text-white bg-gradient-to-r from-blue-500 to-purple-400 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Connect Wallet
          </button>
        </div>

        {/* Additional Info */}
        <p className="mt-8 text-sm text-gray-500">
          Need help?{' '}
          <a href="/help" className="text-blue-600 hover:underline">
            Visit our Help Center
          </a>
        </p>
      </div>

      {/* Custom Animation */}
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
      `}</style>
    </div>
  );
}
