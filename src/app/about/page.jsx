import HeadingText from '@/components/HeadingText'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
       <section className="py-24 sm:py-32 bg-blue-50">
          <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
            <div>
              <h2 className="text-center text-lg font-semibold text-blue-700">
                Unparalleled Climate Control
              </h2>
              <HeadingText className="text-center">
                Stay <span className='text-blue-600'>Comfortable,</span> Whatever the Weather</HeadingText>
            </div>

            <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
              {/* Cooling System with Fan */}
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-2xl shadow-lg">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="text-xl  tracking-tight text-yellow-600 font-bold">
                      Cooling System with Fan
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      Beat the heat with a built-in fan and detachable bottle, providing a refreshing mist to keep you cool in hot weather.
                    </p>
                  </div>
                  <div className="relative min-h-[30rem] w-full grow">
                    <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-xl bg-gray-900 shadow-2xl">
                      <Image
                       className="object-cover object-top" src="/cooling.jpg" alt="Cooling system interface" fill />
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
                    <p className="text-xl font-bold tracking-tight text-yellow-600">
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
                    <p className="text-xl font-bold tracking-tight text-yellow-600">
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
                    <p className="text-xl font-bold tracking-tight text-yellow-600">
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
  )
}

export default About
