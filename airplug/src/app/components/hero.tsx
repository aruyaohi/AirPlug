'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for the app directory

export default function Hero() {
  // State to track loading
  const [loading, setLoading] = useState<boolean>(false); // Specify type for state
  const router = useRouter(); // Router instance from next/navigation

  // Navigation handler with type annotation
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Prevent default anchor behavior
    setLoading(true); // Show the loader
    router.push(href); // Navigate to the new page
  };

  return (
    <section className="relative py-8">
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      )}
      <div className="lg:max-w-6xl mx-auto lg:min-h-[400px] lg:mt-10 mt-14 px-6 md:px-24 lg:px-0 overflow-hidden text-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Hero Heading */}
          <h1 className="lg:text-3xl text-4xl font-bold font-raleway leading-tight tracking-tight">
            Seamlessly Buy Airtime & Data
            <br />
            <span className="text-[#2c76d1]">Using Crypto</span>
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-md lg:text-xl text-gray-600">
            The easiest and most secure way to top up your phone or data plan.
            Fast, reliable, and crypto-friendly.
          </p>
          <div className="flex justify-center items-center mt-8">
            {/* Link with navigation handler */}
            <a
              href="/connectwallet"
              onClick={(e) => handleNavigation(e, '/connectwallet')}
              className="py-4 px-10 lg:px-16 text-lg font-semibold text-white bg-gradient-to-r from-[#2c95d1] via-[#2c76d1] to-purple-300 rounded-lg backdrop-blur-md bg-opacity-70 hover:from-white  hover:to-white hover:text-[#2c76d1] hover:border hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
