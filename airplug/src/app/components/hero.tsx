'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 

export default function Hero() {
  const [loading, setLoading] = useState<boolean>(false); 
  const router = useRouter(); 

  // Navigation handler with type annotation
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setLoading(true);
    router.push(href); 
  };

  return (
    <section className=" mt-52 lg:mt-0 py-12 lg:py-40">
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <div className="loader border-t-4 border-[#f1952c] rounded-lg w-16 h-16 animate-spin"></div>
        </div>
      )}

      <div className="lg:max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-gray-900">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            {/* Hero Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold font-raleway leading-tight tracking-tight">
              Seamlessly Buy Airtime & Data
              <br />
              <span className="text-[#737373]">Using Crypto</span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-lg lg:text-xl text-gray-600">
              The easiest and most secure way to top up your phone or data plan.
              Fast, reliable, and crypto-friendly.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="/connectwallet"
                onClick={(e) => handleNavigation(e, '/connectwallet')}
                className="py-4 px-10 lg:px-16 text-lg font-semibold text-gray-900 bg-white border  border-3 border-gray-900 rounded-lg bg-opacity-70 hover:text-[#f1952c] hover:border hover:border-[#f1952c] transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <Image
              src="/images/net.png"
              alt="Crypto Airtime and Data Top-Up"
              className="md:full rounded-xl w-full"
              width={200}
              height={200}
            />
          </motion.div>
        </div>

        {/* Additional Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 space-y-12 lg:space-y-0 lg:flex lg:space-x-12"
        >
          {/* First Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
            <p className="mt-4 text-gray-600">
              Our platform is designed to make airtime and data purchases seamless with cryptocurrency. 
              No more delays, complicated transactions, or hidden fees — just fast and transparent services.
            </p>
          </div>

          {/* Second Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Security & Reliability</h2>
            <p className="mt-4 text-gray-600">
              Powered by blockchain technology, every transaction on our platform is secure and traceable. 
              Your funds and data are always protected with the highest standards of security.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
