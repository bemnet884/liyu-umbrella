'use client'
import React, { useState } from 'react';
import HeadingText from '@/components/HeadingText';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Badge, Box, PillBottle, Umbrella, Wind, WindIcon } from 'lucide-react';
import Image from 'next/image';
import { OrderModal } from '@/components/OrderNowModal';
import Features from './features/page';
import About from './about/page';
import Designs from './liyudesigns/page';

const ListOfSolutions = [
  "Detachable bottle for dual-purpose use",
  "Cooling system with top-mounted fan for hot seasons",
  "Humidity control to keep you refreshed",
  "Water storage for convenience in cold weather",
  "Portable and versatile design",
];

const features = [
  {
    title: "Windproof Design",
    description: "Built to withstand strong winds, ensuring it won’t flip inside out even in harsh weather.",
    icon: <Wind />,
  },
  {
    title: "Lightweight and Compact",
    description: "Designed for easy carrying and storage, making it perfect for travel and daily use.",
    icon: <Box />,
  },
  {
    title: "Advanced Water Resistance",
    description: "Offers superior protection against rain, keeping you dry in even the heaviest downpours.",
    icon: <Umbrella />,
  },
  {
    title: "Pouch Bag",
    description: "A convenient pouch bag to hold both the umbrella and detachable bottle, making it easy to carry.",
    icon: <Badge />,
  },
  {
    title: "Detachable Bottle System",
    description: "Use the detachable bottle for cooling mist in hot weather or water storage during colder seasons.",
    icon: <PillBottle />,
  },
  {
    title: "Cooling Fan System",
    description: "Integrated fan delivers a refreshing breeze to keep you cool on hot, sunny days.",
    icon: <WindIcon />,
  },
];

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOrderNowClick = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
<section 
  className="relative flex items-center justify-center text-white py-20 min-h-screen bg-cover bg-center" 
  style={{ backgroundImage: "url('/anenna.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div> 

  {/* Content Container */}
  <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 lg:px-12 text-center sm:text-center">
    {/* Heading */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
      Your Personal <span className="text-blue-400">Oasis</span>
    </h1>

    {/* Subheading */}
    <p className="mt-5 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90">
      Stay cool and comfortable in any weather with fine mist technology, designed to be your personal oasis.
    </p>

    {/* CTA Button */}
    <div className="flex justify-center mt-5 items-center">
              <button
                onClick={handleOrderNowClick}
                className="group w-60 h-16 mt-5 relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-yellow-600 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:ring-2 hover:ring-yellow-400 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Get Yours Today!
                <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120px]" />
              </button>
              <OrderModal isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
  </div>
</section>

       
        {/* varaity design Section */}
        <Designs/>

        {/* About Section */}
        <About/>

        {/* Features Section*/}
        <Features/>
      </main>

    </>
  );
}


