'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              My Blog
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center sm:justify-end">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/blog" className='px-3 py-2 rounded-md text-sm font-medium '>Blog</Link>
            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>

          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:hidden bg-blue-900 w-full absolute top-16 left-0`}
        >
          <div className="flex flex-col items-center">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/blog" className='px-3 py-2 rounded-md text-sm font-medium '>Blog</Link>
            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
