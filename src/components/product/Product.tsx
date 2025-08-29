"use client";

import Image from "next/image";

export default function ProductFor() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4">
      {/* Heading */}
      <h2 className="text-5xl font-InterTight, Arial, sans-serif font-bold   text-center text-[#4C3AFF] mb-10">
        Who is the product for
      </h2>

      {/* Two Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Brokers Card */}
        <div className="bg-[#FBFBFB]  rounded-2xl p-7 w-full md:w-[300px] flex flex-col items-center text-center">
          <div className="flex -space-x-3 mb-4">
            <Image
              src="/svg/Ellipse_9.png.webp"
              alt="Broker 1"
              width={50}
              height={50}
              className="rounded-full "
            />
            <Image
              src="/svg/Ellipse_10.png.webp"
              alt="Broker 2"
              width={50}
              height={50}
              className="rounded-full "
            />
          </div>
          <p className="text-[#767676] font-bold text-lg">
            <span className="font-semibold text-[#27272C] text-lg">Brokers:</span> looking for quick
            access to real client requests.
          </p>
        </div>

        {/* Agencies Card */}
        <div className="bg-[#FBFBFB]  rounded-2xl p-6 w-full md:w-[300px] flex flex-col items-center text-center">
          <div className="flex -space-x-3 mb-4">
            <Image
              src="/svg/annie.webp"
              alt="Agency 1"
              width={50}
              height={50}
              className="rounded-full"
            />
            <Image
              src="/svg/cherrydeck.jpg.webp"
              alt="Agency 2"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <p className="text-[#767676] font-bold text-lg">
            <span className="font-bold text-[#27272C] text-lg">Agencies:</span> aiming to increase
            deal volume without relying on advertising.
          </p>
        </div>
      </div>
    </section>
  );
}
