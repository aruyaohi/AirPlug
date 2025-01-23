'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaDiscord, FaXTwitter, FaGithub, FaTelegram } from 'react-icons/fa6'

export default function Footer() {

    const [isSucessful, setIsSucessful] = useState(false)
    const handleSubscription = () => {
        setIsSucessful(!isSucessful);
        setTimeout(() => {
            setIsSucessful(false)
        }, 3000);
    }
    return (
        <>
            <footer className="lg:min-h-[300px] w-full lg:mt-5 p-8 min-h-[550px] bg-[#e8e8e8] lg:bg-transparent md:px-20 pb-20 shadow-lg rounded-lg border border-top-2">
                <div className="lg:max-w-5xl lg:h-[350px] h-[500px] mx-auto">
                    <div className="lg:flex justify-between lg:p-10">
                        <div className="lg:flex lg:flex-col gap-4">
                            <ul className="flex space-x-4 lg:mt-4 lg:py-3 py-7">
                                <li><a href="#" className="text-gray-700 hover:text-[#2c76d1]"><FaXTwitter /></a></li>
                                <li><a href="#" className="text-gray-700 hover:text-[#2c76d1] w-14"><FaDiscord /></a></li>
                                <li><a href="#" className="text-gray-700 hover:text-[#2c76d1]"><FaTelegram /></a></li>
                                <li><a href="#" className="text-gray-700 hover:text-[#2c76d1]"><FaGithub /></a></li>
                            </ul>
                        </div>
                        <div className='lg:flex lg:flex-col items-start font-raleway text-xs font-semibold lg:px-5 gap-3 md:w-3/5'>
                            <p className='font-raleway text-sm text-gray-800'>Get Updates</p>
                            {isSucessful ? <p className='text-sm text-[#2c76d1] transition-colors delay-100'>Subscription Successful! Thank you for subscribing</p> : null}
                            <div className="flex space-x-2 mt-5 lg:mt-2 border">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="text-sm px-3 lg:px-6 py-2 rounded-md w-2/3 bg-gray-200"
                                />
                                <button onClick={handleSubscription} className="font-light bg-[#2c76d1] text-white px-4 py-2 rounded-md hover:bg-[#1e5e93] text-sm w-1/3">
                                    Submit
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-start lg:justify-center font-raleway text-sm font-normal mt-5 lg:mt-0'>
                            <ul className='lg:flex lg:flex-col space-y-3'>
                                <li><a href="" className='hover:text-[#2c76d1]'>About</a></li>
                                <li><a href="" className='hover:text-[#2c76d1]'>How to Buy?</a></li>
                                <li><a href="" className='hover:text-[#2c76d1]'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:p-10 mt-20 lg:mt-0 lg:flex-row lg:justify-between lg:items-center flex flex-col gap-2'>
                        <div>
                            <p className='text-sm text-gray-600'>Gambit &copy; 2025</p>
                        </div>
                        <div className='lg:flex-row lg:justify-between lg:gap-3 flex flex-col gap-2'>
                            <Link href='#'>
                                <p className='text-sm text-gray-600 hover:text-[#2c76d1]'>Terms & Conditions</p>
                            </Link>
                            <Link href='#'>
                                <p className='text-sm text-gray-600 hover:text-[#2c76d1]'>Privacy Policy</p>
                            </Link>
                            <Link href='#'>
                                <p className='text-sm text-gray-600 hover:text-[#2c76d1]'>FAQs</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
