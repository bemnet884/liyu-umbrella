'use client'
import React, { useState } from 'react';
import HeadingText from '@/components/HeadingText';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Badge, Box, PillBottle, Umbrella, Wind, WindIcon } from 'lucide-react';
import Image from 'next/image';

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
       <section className="relative flex items-center justify-center text-white py-20 min-h-screen bg-contain bg-center" style={{ backgroundImage: "url('/anenna.jpg')" }}>
          <div className="absolute inset-0 bg-black/70"></div> {/* Overlay for better text readability */}
          <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-5xl font-extrabold leading-tight">
              Your Personal <span className="text-blue-400">Oasis</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-white/90">
              Stay cool and comfortable in any weather with fine mist technology, designed to be your personal oasis.
            </p>
            <div className="w-full max-w-xs mt-8 mx-auto">
              <button
                onClick={handleOrderNowClick}
                className="group w-60 h-16 mt-5 relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md bg-yellow-600 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:ring-2 hover:ring-yellow-400 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Get Yours Today!
                <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120px]" />
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 sm:py-32 bg-blue-50">
          <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
            <div>
              <h2 className="text-center text-lg font-semibold text-blue-700">
                Unparalleled Climate Control
              </h2>
              <HeadingText className="text-center">Stay Comfortable, Whatever the Weather</HeadingText>
            </div>

            <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
              {/* Cooling System with Fan */}
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-2xl shadow-lg">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="text-lg font-medium tracking-tight text-blue-950">
                      Cooling System with Fan
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      Beat the heat with a built-in fan and detachable bottle, providing a refreshing mist to keep you cool in hot weather.
                    </p>
                  </div>
                  <div className="relative min-h-[30rem] w-full grow">
                    <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-xl bg-gray-900 shadow-2xl">
                      <Image className="object-cover object-top" src="/cooling.jpg" alt="Cooling system interface" fill />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-2xl" />
              </div>

              {/* Humidity Control */}
              <div className="relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-2xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg shadow-lg max-lg:rounded-t-2xl">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="text-lg font-medium tracking-tight text-blue-950">
                      Humidity Control
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      Maintain optimal humidity under the umbrella, ensuring a comfortable environment no matter the heat.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 sm:px-10 lg:pb-2">
                    <Image className="w-full max-lg:max-w-xs" src="/humidity.jpg" alt="Humidity control interface" width={500} height={300} />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-2xl" />
              </div>

              {/* Water Storage for Cold Weather */}
              <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-white" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="text-lg font-medium tracking-tight text-blue-950">
                      Water Storage for Cold Weather
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      Use the detachable bottle to store water, ensuring hydration or utility when it's cold and hydration needs arise.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 sm:px-10 lg:pb-2">
                    <Image className="w-full max-lg:max-w-xs" src="/bottles.jpg" alt="Water storage system" width={500} height={300} />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
              </div>

              {/* Versatile & Portable Design */}
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-2xl lg:rounded-r-2xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg shadow-lg max-lg:rounded-b-2xl lg:rounded-r-2xl">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="text-lg font-medium tracking-tight text-blue-950">
                      Versatile & Portable Design
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      Lightweight and compact, the Liyu Umbrella is easy to carry and store, perfect for on-the-go lifestyles.
                    </p>
                  </div>
                  <div className="relative min-h-[30rem] w-full grow">
                    <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                      <Image className="object-cover object-center" src="/um.avif" alt="Portable design interface" fill />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-2xl lg:rounded-r-2xl" />
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        {/* Features Section */}
        <MaxWidthWrapper>
          <section className="py-16 bg-gray-50">
            <HeadingText className="text-5xl font-extrabold text-center text-gray-900 mb-24"> Key <span className='text-blue-600'>Features</span>  </HeadingText>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <li key={index} className="flex flex-col items-start p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 text-black rounded-full mb-4">
                    {feature.icon} {/* Icon */}
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h1>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
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
          </section>
        </MaxWidthWrapper>
      </main>

      <footer className="py-6 bg-black text-yellow-400 text-center">
        <p>&copy; {new Date().getFullYear()} Liyu Umbrella. All Rights Reserved.</p>
      </footer>
    </>
  );
}

const OrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Place Your Order</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="number" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="text" placeholder="Product Name" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="number" placeholder="Quantity" className="w-full p-3 border border-gray-300 rounded-lg" />
          <button type="submit" className="w-full bg-yellow-600 text-white hover:bg-yellow-700 rounded-lg px-6 py-3">
            Submit Order
          </button>
        </form>
        <button className="mt-4 text-yellow-600 hover:underline" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
