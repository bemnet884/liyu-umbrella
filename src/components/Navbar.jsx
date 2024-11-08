'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Designs', path: '/liyudesigns' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-30 w-full bg-gradient-to-tr from-blue-700/90 to-yellow-700/90 border-b border-gray-200 shadow-lg backdrop-blur-lg transition-all">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo and Brand */}
        <div className="flex items-center">
          <Link href="/">
           <button className="flex items-center gap-2">
              <Image src="/logo.png" width={30} height={30} alt="Liyu Umbrella Logo" />
              <span className="text-2xl font-semibold text-white hover:text-yellow-400 transition">Liyu Umbrella</span>
            </button>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path}>
                <button className="text-white hover:text-yellow-400 transition">{item.name}</button>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white hover:text-yellow-400 focus:outline-none transition"
          >
            {isMenuOpen ? (
              // X icon when menu is open
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-white rounded-lg shadow-lg p-4 w-48 border border-gray-200 transition duration-200 ease-in-out">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>
                  <button onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-yellow-600 font-medium transition">
                    {item.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
