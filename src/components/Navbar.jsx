'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full bg-gradient-to-tr from-blue-700/90 to-yellow-700/90 border-b border-gray-200 backdrop-blur-lg transition-all">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <Link href="/">
            <button className="hover:text-yellow-400 flex flex-col justify-center items-center ">
              <Image src="/logo.png" width={30} height={30} alt="Liyu umbrella" />
              <h6 className="text-xs hover:text-yellow-400 text-white">Liyu Umbrella</h6>
            </button>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/">
              <button className="hover:text-yellow-400 text-white">Home</button>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <button className="hover:text-yellow-400 text-white">Features</button>
            </Link>
          </li>
          <li>
            <Link href="/liyudesigns">
              <button className="hover:text-yellow-400 text-white">Designs</button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <button className="hover:text-yellow-400 text-white">About</button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <button className="hover:text-yellow-400 text-white">Contact</button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-gray-200">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li>
              <Link href="/">
                <button className="block text-black hover:text-yellow-400">Home</button>
              </Link>
            </li>
            <li>
              <Link href="/features">
                <button className="block text-black hover:text-yellow-400">Features</button>
              </Link>
            </li>
            <li>
              <Link href="/liyudesigns">
                <button className="block text-black hover:text-yellow-400">Designs</button>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <button className="block text-black hover:text-yellow-400">Contact</button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
