// "use client";

// import Image from "next/image";

// export default function Testimonial() {
//   return (
    
//     <section className="w-full flex flex-col  items-center px-4 py-12 md:py-16 lg:py-2">
//       {/* Top Offer Text */}
//       <p className="text-lg font-bold text-[#4C3AFF] mb-8">
//         FREE 1 month trial for waitlist members
//       </p>

//       {/* Content */}
//       <div className="p-20  grid grid-cols-1 md:grid-cols-2  items-center">
//         {/* Left Side - Image */}
    
//           <div className="rounded-xl overflow-hidden shadow-md w-130">
//             <Image
//               src="/3E4A0592_1.jpg" // 
//               alt="Kirill Egorov"
//               width={500}
//               height={300}
//               className="object-cover rounded-lg h-120 w-full"
//             />
//           </div>
          
        

//         {/* Right Side - Text */}
//         <div className="flex flex-col justify-center  text-left">
//           {/* Quote Icon */}
//           <div className="text-4xl font-bold mb-10 ">
// <img src="/svg/quotes.svg" alt="" />
//           </div>

//           {/* Testimonial Text */}
//           <p className="text-[#27272C] font-bold font-sans text-lg leading-relaxed mb-6">
//             As a broker, sales director, and former CEO in Dubai’s real estate
//             market, I know the daily challenges agents face: outdated listings,
//             wasted calls, and endless searches.
//           </p>
//           <p className="text-[#27272C] font-bold font-sans text-lg leading-relaxed mb-6">
//             That’s why we have created Proprequest: a smarter, faster, and more
//             transparent way to work on the secondary market. This platform is
//             built by brokers, for brokers — to help us all close more deals,
//             faster, and with less frustration.
//           </p>

//           {/* Author */}
//           <h3 className="text-[#4C3AFF] font-semibold">
//             Kirill Egorov
//           </h3>
//           <p className="text-[#767676] text-sm">
//             Co-founder of Proprequest.ae
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-12 md:py-16 lg:py-20">
      {/* Top Offer Text */}
      <p className="text-base md:text-lg font-bold text-[#4C3AFF]  whitespace-nowrap  mb-6 md:mb-8 text-center md:text-left">
        FREE 1 month trial for waitlist members
      </p>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center pl-0">
        {/* Left Side - Image */}
        <div className="rounded-xl overflow-hidden  w-full max-w-[500px] mx-auto md:mx-10">
          <Image
            src="/3E4A0592_1.jpg"
            alt="Kirill Egorov"
            width={500}
            height={300}
            className=" object-none rounded-lg h-[300px]  md:h-[450px] w-full"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex flex-col justify-center text-left md:text-left   md:mt-0 pr-10">
          {/* Quote Icon */}
          <div className="text-4xl font-bold  md:mb-10 flex justify-start md:justify-start ">
            <img src="/svg/quotes.svg" alt="Quotes" className="" />
          </div>

          {/* Testimonial Text */}
          <p className="text-[#27272C] md:text-[24px]  md:leading-[25px] font-bold  font-[Inter_Tight]   text-base md:text-xl  mb-4 md:mb-6">
            As a broker, sales director, and former CEO in Dubai’s real estate
            market, I know the daily challenges agents face: outdated listings,
            wasted calls, and endless searches.
          </p>
          <p className="text-[#27272C] font-bold  md:text-[24px] md:leading-[25px] font-[Inter_Tight] text-base md:text-xl  mb-4 md:mb-6">
            That’s why we have created Proprequest: a smarter, faster, and more
            transparent way to work on the secondary market. This platform is
            built by brokers, for brokers — to help us all close more deals,
            faster, and with less frustration.
          </p>

          {/* Author */}
          <h3 className="text-[#4C3AFF] font-semibold text-base md:text-lg">
            Kirill Egorov
          </h3>
          <p className="text-[#767676] text-sm md:text-base">
            Co-founder of Proprequest.ae
          </p>
        </div>
      </div>
    </section>
  );
}
