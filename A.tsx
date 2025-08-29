

import React from 'react';

const BenefitsSection = () => {
  return (
    <div className=" bg-[#FAFAFA]  px-6 ">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        
          {/* Left side - Heading and Building illustration */}
          <div className="space-y-1  ">
            {/* Main heading */}
            <h1 className="absolute left-10 text-6xl lg:text-7xl font-bold leading-tight  tracking-tight">
              <span className="bg-[#4C3AFF] bg-clip-text text-transparent">
                Benefits of<br />
                the platform:
              </span>
            </h1>
      
<div className='relative right-75 top-40 pt-10'>

           <img src="/svg/real-estate.svg" alt="" className='' 
             />
</div>
      

            {/* Building illustration */} 
          </div>

          {/* Right side - Benefits list (exactly as provided) */}
      <div className="grid grid-cols-1  md:grid-cols-2  gap-5 ">

        
        {/* Card 1 */}
        <div className="bg-white  rounded-2xl p-5    flex  flex-col items-start text-start gap-10">
          <img src="/svg/usability.svg" alt="" />
          <h3 className="text-lg font-semibold text-[#27272C]">
            No listings – only requests
          </h3>
        </div>

        {/* Card 2 */}
        <div className="bg-white  rounded-2xl p-5 flex flex-col items-start text-start gap-10">
         <img src="/svg/mdi_house-city.svg" alt="" />
          <h3 className="text-lg font-semibold text-[#27272C]">
            Whole secondary market coverage, including all Emirates
          </h3>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-5 flex flex-col items-start text-start gap-10">
         <img src="/svg/clock.svg" alt="" />
          <h3 className="text-lg font-semibold text-[#27272C]">
            Save time on routine task – let the platform do it for you
          </h3>
        </div>

        {/* Card 4 */}
        <div className="bg-white  rounded-2xl p-5 flex flex-col items-start text-start gap-10">
         <img src="/svg/fluent_feed-28-fille.svg" alt="" />
          <h3 className="text-lg font-semibold text-[#27272C] ">
            Add your distress deal
          </h3>
        </div>

        {/* Card 5 */}
        <div className="bg-white  rounded-2xl p-10 flex flex-col items-start text-start  gap-10">
          <img src="/svg/flexibility.svg" alt="" />
          <h3 className="text-lg font-semibold text-[#27272C]">
            Flexible subscription plans
          </h3>
          
        </div>
          <div className="w-76 h-55 bg-[#4C3AFF] rounded-xl flex items-end justify-between p-4 shadow-lg">
      <span className="text-white font-semibold text-lg">Join waitlist</span>
      <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                   <img
            src="/svg/arrow-circle-right.svg"
            alt="Arrow"
            className="w-4 sm:w-6 "
          />
      </button>
    </div>
         {/* <div className="pb-1">
        <button className="bg-[#4C3AFF]  text-white font-bold text-lg px-12   py-20 cd rounded-2xl transition-all duration-300 transform  flex items-start text-start gap-10 space-x-4 group">
          <span>Join waitlist</span>
          <div className="w-7 h-7 bg-white bg-opacity-25 rounded-full flex items-center justify-center group-hover:bg-opacity-35 transition-all">
           <img
            src="/svg/arrow-circle-right.svg"
            alt="Arrow"
            className="w-4 sm:w-6 hover:bg-[#4C3AFF]"
          />
          </div>
        </button>
      </div> */}
      </div>
      {/* Join Waitlist button */}
      

        </div>
      </div>
    </div>
    
  );
};

export default BenefitsSection;