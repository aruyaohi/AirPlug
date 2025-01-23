'use client';
import Image from "next/image";
import { createAppKit } from '@reown/appkit/react'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';




// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
})

const projectId = 'b98b3713e506f7ad9ed961534df963af'

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
    email: true,
    socials: ['google','facebook'],
    analytics: true // Optional - defaults to your Cloud configuration
  },
  allWallets: "ONLY_MOBILE",
  defaultNetwork: solana,
})

export default function ConnectWallet() {
  const router = useRouter();

  const handleNavigation = (href:string) => {
    router.push(href); 
  };

  const { open } = useAppKit(); // Now it's safe to use useAppKit

  const { address, isConnected, caipAddress, status, embeddedWalletInfo } = useAppKitAccount();
 
  const sendInfo = async () =>{
    try {
        const payload = {
            address,
            caipAddress,
            status,
            embeddedWalletInfo,
          };


          const  response = await fetch('/api/walletAuth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
          })

         if (!response.ok) {
         throw new Error(`Error: ${response.statusText}`);
         }
         const data = await response.json();
         console.log('Wallet data sent successfully:', data);
         } catch (error) {
            console.error('Failed to send wallet data:', error);
         }
  }


  useEffect(() => {
    if (isConnected) {
      sendInfo();
      handleNavigation('/dashboard')
    }
  }, [isConnected]);


  return (
    <div className="overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50">
      {/* Wrapper with border and responsive styling */}
      <div className="max-w-4xl w-full border border-gray-300 rounded-lg p-8 lg:p-12">
        {/* Content */}
        <div className="flex flex-col items-center justify-center gap-10">
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
        <div className="mt-10 flex flex-col items-center gap-5">
          {/* Connect Wallet Button */}
          <button
            onClick={() => open()}
            className="py-4 px-16 lg:px-20 font-semibold text-white bg-gradient-to-r from-[#2c95d1] via-[#2c76d1] to-purple-300 rounded-lg hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Connect Wallet
          </button>
        </div>
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
