"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-13 text-center px-4">
      {/* Navbar */}
      <header className="w-full fixed top-0 bg-white flex justify-between items-center py-2  px-3 sm:px-10">
        {/* Logo */}
        <img
          src="/svg/logo.svg"
          alt="Logo"
          className="w-28 sm:w-40 md:w-58"
          
        />
        {/* Button */}
        <Link
          href="#"
          className="flex items-center gap-2 sm:gap-4 bg-[linear-gradient(0.125turn,rgba(76,58,255,1)_0%,rgba(73,188,255,1)_100%)] 
          text-white font-medium rounded-full px-3 py-2 sm:px-4 sm:py-3 
          hover:opacity-90 transition text-xs sm:text-base md:text-lg" 
        >
          Join waitlist
          <img 
            src="/svg/arrow-circle-right.svg"
            alt="Arrow"
            className="w-4 sm:w-6 hover:bg-[#4C3AFF]"  

          />
        </Link>
      </header>
       
      {/* Tags */}
      <div className="flex  flex-nowrap justify-center gap-2 sm:gap-5 mt-4">
        <span className="px-4 py-2 sm:px-4 sm:py-3 bg-[#FAFAFA] rounded-md text-[#27272c] border border-gray-100 text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap">
          <img
            src="https://static.tildacdn.one/tild6363-3238-4135-b862-323330653562/icon-park-outline_pu.svg"
            alt=""
            className="w-4 sm:w-5"
          />
          Get requests
          
        </span>
               
            
        <span className="px-4 py-2 sm:px-4 sm:py-3 bg-[#FAFAFA] rounded-md  border border-gray-100 text-[#27272c] text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap">
          <img
            src="https://static.tildacdn.one/tild3937-3463-4665-b061-346431663262/mingcute_mail-send-f.svg"
            alt=""
            className="w-4 sm:w-5"
          />
          Send offers
        </span>

        <span className="px-4 py-2 sm:px-4 sm:py-3 bg-[#FAFAFA] rounded-md border border-gray-100 text-[#27272c] text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap">
          <img
            src="https://static.tildacdn.one/tild6431-6130-4837-b561-623834333862/mdi_clock-fast.svg"
            alt=""
            className="w-4 sm:w-5"
          />
          Close fast
        </span>
      </div>
       
      {/* Hero Title */}
      <h1 className="text-[48px]  leading-[46px] md:text-[86px] md:leading-[82px] font-bold    font-[Inter_Tight] text-transparent bg-clip-text bg-[#4C3AFF] mt-4 ">
        Real estate platform 
       <br /> made on request
       
      </h1>
      
      {/* Subtext */}
      <p className="mt-4 md:text-[24px] md:leading-[37px] sm:mt-6 text-xs sm:text-base md:text-lg font-[Inter_Tight]  font-semibold flex items-center justify-center gap-2 text-[#27272c]">
        <img
          src="https://static.tildacdn.one/tild6261-6263-4434-b164-386238383831/tabler_circle-plus-f.svg"
          alt=""
          className="w-4 sm:w-5"
        />
        

         
        Plus distress deals feed, where anyone can list
        
      </p>

      {/* Decorative image */}
      <img
        src="https://static.tildacdn.one/tild3765-3831-4131-a662-316632623364/Vector_1.svg"
        alt=""
        className="w-24 sm:w-40 md:w-120"
      />
      
      {/* Arrow */}
      <img
        src="https://static.tildacdn.one/tild3939-6233-4631-b839-366432363739/ri_arrow-down-double.svg"
        className="p-2 animate-bounce  w-6 sm:w-8 mt-10"
        alt=""
      />
      <p className="mt-2 text-gray-600 text-xs sm:text-base  md:text-[18px] md:leading-[18px] font-[Inter_Tight]">Learn how</p>
    </section>
  );
}
