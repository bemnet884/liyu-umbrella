'use client';
import HeadingText from "@/components/HeadingText";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { Badge, Box, PillBottle, Umbrella, Wind, WindIcon } from 'lucide-react';
import { useState } from "react";
import { OrderModal } from "@/components/OrderNowModal";

const features = [
  {
    title: "Windproof Design",
    subtitle: "Built for Tough Weather",
    description: "Constructed to withstand powerful winds without flipping inside out. Perfect for stormy or windy days, giving you peace of mind in unpredictable weather.",
    icon: <Wind />,
  },
  {
    title: "Lightweight and Compact",
    subtitle: "Easy to Carry",
    description: "Designed for convenience with a lightweight build that’s perfect for travel and everyday use. Effortlessly fits in your bag without adding weight.",
    icon: <Box />,
  },
  {
    title: "Advanced Water Resistance",
    subtitle: "Maximum Rain Protection",
    description: "Made with a high-grade water-resistant material, keeping you completely dry even during heavy downpours. Ideal for unpredictable weather.",
    icon: <Umbrella />,
  },
  {
    title: "Pouch Bag",
    subtitle: "Convenient and Versatile",
    description: "Includes a matching pouch to hold both the umbrella and detachable bottle. Perfect for staying organized and prepared for any weather condition.",
    icon: <Badge />,
  },
  {
    title: "Detachable Bottle System",
    subtitle: "For Hot and Cold Weather",
    description: "Features a detachable bottle for dual-purpose: a cooling mist system for hot weather and water storage for colder seasons. The ultimate adaptable accessory.",
    icon: <PillBottle />,
  },
  {
    title: "Cooling Fan System",
    subtitle: "Stay Cool and Refreshed",
    description: "Integrated with a top-mounted fan to deliver a refreshing breeze on hot days. Enjoy personal climate control when you’re out in the sun.",
    icon: <WindIcon />,
  },
];

export default function Features() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOrderNowClick = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <main className="min-h-screen py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <MaxWidthWrapper>
            <section className="py-16 bg-gray-50">
              <HeadingText className="text-5xl font-extrabold text-center text-gray-900 mb-24">
                Key <span className='text-blue-600'>Features</span>
              </HeadingText>
              <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                Discover the unique features of the Liyu Umbrella, crafted for comfort, durability, and innovation. This umbrella combines style and functionality, making it the ultimate weather companion.
              </p>
              <ul className="grid grid-cols-1 px-8 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-start p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                      {feature.icon}
                    </div>
                    <h1 className="text-xl font-bold text-blue-700 mb-1">{feature.title}</h1>
                    <h2 className="text-md font-semibold text-yellow-600 mb-2">{feature.subtitle}</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-10">
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
        </div>
      </main>
    </>
  );
}
