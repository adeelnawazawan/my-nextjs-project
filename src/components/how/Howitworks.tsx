"use client";

import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-6 bg-[#FAFAFA] py-12 sm:py-16">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-[#4C3AFF] bg-clip-text mb-8 sm:mb-12 text-center leading-snug">
        How it works
      </h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1  md:grid-cols-3   md:gap-1 max-w-7xl w-full">
        
        {/* Step 1 */}
        <div className="relative flex items-center justify-center md:font-bold font-samibold w-75 h-75 sm:w-72 sm:h-72 md:w-100 md:h-100 mx-auto  text-center">
          {/* Circle background */}
          <Image
            src="/svg/Ellipse_1.svg"
            alt="circle"
            fill
            className="object-contain"
          />
          {/* Content inside circle */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6">
            <Image
              src="/svg/material-symbols_rea.svg"
              alt="icon"
              width={70}
              height={70}
              className="mb-3 sm:mb-7"
            />
            <p className="text-[#27272C] text-[20px] leading-[24px]  font-[Inter_Tight] md:font-bold font-samibold text-sm sm:text-base md:text-lg ">
              Post property request — it goes directly to brokers with relevant stock
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative flex items-center justify-center md:font-bold font-samibold w-75 h-75 sm:w-72 sm:h-72 md:w-100 md:h-100 mx-auto text-center -mt-8 md:mt-0">
          <Image
            src="/svg/Ellipse_1.svg"
            alt="circle"
            fill
            className="object-contain"
          />
          <div className="relative  z-10 flex flex-col items-center justify-center px-4 sm:px-6">
            <Image
              src="/svg/streamline_mail-inco.svg"
              alt="icon"
              width={70}
              height={70}
              className="mb-3 sm:mb-7"
            />
            <p className="text-[#27272C] text-[20px] leading-[24px]  font-[Inter_Tight] text-sm sm:text-base md:text-lg ">
              Sign up for requests which match your stock
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative  flex items-center justify-center md:font-bold font-samibold w-75 h-75 sm:w-72 sm:h-72 md:w-100 md:h-100  mx-auto text-center -mt-8 md:mt-0">
          <Image
            src="/svg/Ellipse_1.svg"
            alt="circle"
            fill
            className="object-contain"
          />
          <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6">
            <Image
              src="/svg/material-symbols-lig.svg"
              alt="icon"
              width={70}
              height={70}
              className="mb-3 sm:mb-7"
            />
            <p className="text-[#27272C] text-[20px] leading-[24px]  font-[Inter_Tight] text-sm sm:text-base md:text-lg ">
              List your distress deal in a separate section of the platform so the whole market will see it
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
