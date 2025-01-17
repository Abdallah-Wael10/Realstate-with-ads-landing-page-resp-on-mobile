"use client"
import React, { useState } from 'react';
import Image from "next/image";
import logo from "../../homeimages/logo2.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the toggle

  return (
    <div className='w-full bg-white h-[120px] flex justify-center animate-slide-in2'>
      <nav className='w-[80%] h-[80px] bg-white flex text-[#8D8D8D] text-[14px] font-semibold rounded-b-2xl border-2 border-gray-300 pl-2 relative'>
        {/* Toggle Button for Mobile */}
        <button
          className="hidden max-460:block absolute top-6 right-4 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Nav Content */}
        <div
          className={`w-1/3 h-[80px] flex justify-center items-center gap-3 max-460:w-full max-460:flex-col max-460:absolute max-460:top-[80px] max-460:left-0 max-460:bg-white max-460:transition-all max-460:duration-300 max-460:ease-in-out ${
            isOpen
              ? "max-460:h-auto max-460:py-4 max-460:z-10 max-460:border-b-2 max-460:border-gray-300"
              : "max-460:h-0 max-460:overflow-hidden"
          }`}
        >
          <button>Home</button>
          <button>Buy</button>
          <button>Sell</button>
          <button>Rent</button>
          <button>Loans Home</button>
          <button>Find an Agent</button>
        </div>

        {/* Logo */}
        <div className='w-1/3 h-[80px] flex justify-center items-center max-460:w-full'>
          <Image src={logo} alt='icon' />
        </div>

        {/* Right Side Buttons */}
        <div
          className={`w-1/3 h-[80px] flex justify-center items-center gap-3 max-460:w-full max-460:flex-col max-460:absolute max-460:top-[200px] max-460:left-0 max-460:bg-white max-460:transition-all max-460:duration-300 max-460:ease-in-out ${
            isOpen
              ? "max-460:h-auto max-460:py-4 max-460:z-10 max-460:border-b-2 max-460:border-gray-300"
              : "max-460:h-0 max-460:overflow-hidden"
          }`}
        >
          <button>About us</button>
          <button>Contact us</button>
          <button className='w-[25%] bg-white h-[31px] text-black flex justify-center items-center border-[1px] rounded-lg max-460:w-[50%]'>
            Login
          </button>
          <button className='w-[25%] bg-[#94CEEE] h-[31px] text-white flex justify-center items-center rounded-lg max-460:w-[50%]'>
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;