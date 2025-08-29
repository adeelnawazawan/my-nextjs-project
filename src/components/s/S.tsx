"use client";

import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 bg-white">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Right: Image Section (Mobile pe upar) */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end pl-0 md:pl-10">
          <div className="overflow-hidden  w-full max-w-[500px] ">
            <Image
              src="/svg/j.jpg"
              alt="Semen Vetchinnikov"
              width={500}
              height={300}
              className="rounded-xl object-cover  h-[300px] md:h-[450px] w-full" 
            />
          </div>
        </div>

        {/* Left: Text Section (Mobile pe neeche) */}
        <div className="order-2 md:order-1 space-y-4">
          {/* Quote Icon */}
          <img src="/svg/quotes.svg" alt="Quotes" className="  " />

          {/* Quote Text */}
          <p className="text-[#27272C] font-bold font-[Inter_Tight] text-sm md:text-[24px] md:leading-[25px]">
            I’m a broker with 10 years of experience on the secondary market.
            When I started working in Dubai 3 years ago, I realized how
            time-consuming the search process was—endless chats, countless
            calls, outdated listings. Because of that, clients often turned to
            other agents.
          </p>

          <p className="text-[#27272C] font-bold font-[Inter_Tight] text-sm md:text-[24px] md:leading-[25px]">
            That’s why we have created{" "}
            <span className="font-semibold">Proprequest.ae</span> — to help brokers
            speed up their search for secondary properties and increase their
            income. Built by a broker, for brokers, it’s designed with real-life
            challenges in mind.
          </p>

          <p className="text-[#27272C] font-bold font-[Inter_Tight] text-sm md:text-[24px] md:leading-[25px]">
            Our mission: speed, coverage, more income for all parties.
            Proprequest.ae helps you work smarter—and achieve results faster.
          </p>

          {/* Author */}
          <div>
            <p className="text-[#4C3AFF] font-bold text-sm md:text-lg">
              Semen Vetchinnikov
            </p>
            <p className="text-[#767676] text-xs md:text-sm">
              Co-founder of Proprequest.ae
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
