'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-30 w-full bg-gradient-to-tr from-blue-700/90 to-yellow-700/90 border-b border-gray-200 shadow-lg backdrop-blur-lg transition-all">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <Link href="/">
            <button className="flex items-center gap-2">
              <Image src="/logo.png" width={30} height={30} alt="Liyu Umbrella Logo" />
              <span className="text-2xl font-semibold text-white hover:text-yellow-400 transition">
                Liyu Umbrella
              </span>
            </button>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/">
              <button className="text-white hover:text-yellow-400 transition">Home</button>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <button className="text-white hover:text-yellow-400 transition">Features</button>
            </Link>
          </li>
          <li>
            <Link href="/liyudesigns">
              <button className="text-white hover:text-yellow-400 transition">Designs</button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <button className="text-white hover:text-yellow-400 transition">About</button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <button className="text-white hover:text-yellow-400 transition">Contact</button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          >
            {isMenuOpen ? (
              // X icon when menu is open
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li>
              <Link href="/">
                <button className="block text-gray-800 hover:text-yellow-600 font-medium transition">Home</button>
              </Link>
            </li>
            <li>
              <Link href="/features">
                <button className="block text-gray-800 hover:text-yellow-600 font-medium transition">Features</button>
              </Link>
            </li>
            <li>
              <Link href="/liyudesigns">
                <button className="block text-gray-800 hover:text-yellow-600 font-medium transition">Designs</button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <button className="block text-gray-800 hover:text-yellow-600 font-medium transition">About</button>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <button className="block text-gray-800 hover:text-yellow-600 font-medium transition">Contact</button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
