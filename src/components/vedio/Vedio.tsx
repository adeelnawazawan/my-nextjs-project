"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  
  return (
    <section className="w-full flex flex-col items-center justify-center  py-8">
      {/* Illustration with Play Button */}
      <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden ">
        <div className="relative w-full h-[169px] sm:h-[500px] flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-fu h-[170px] md:h-full md:w-full object-cover rounded-sm"
            controls={isPlaying} // controls sirf jab play ho
            muted
            poster="https://static.tildacdn.one/tild6262-6333-4464-b961-646134333235/photo.png"
          >
            <source
              src="https://cdnv.boomstream.com/balancer/egqFyelB-jtz3vt8v.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.  
          </video>

          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
              <svg
                className="w-8 h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 4l12 6-12 6V4z" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
       
      {/* CTA Section */}
      <div className="mt-10 flex flex-row md:flex-row items-center gap-4 md:gap-10">
  {/* Mobile par ye left side aayega */}
  <span className="text-[#27272C] text-sm px-2 py-1 bg-[#ECECEC] rounded-md order-1 md:order-2">
    Expected launch date – September 2025
  </span>

  {/* Mobile par ye right side aayega */}
  <button className="flex gap-3 px-6 py-2 md:py-4 bg-[linear-gradient(0.125turn,rgba(76,58,255,1)_0%,rgba(73,188,255,1)_100%)] text-white rounded-full font-semibold hover:opacity-90 transition order-2 md:order-1">
    Join waitlist{" "}
    <img src="/svg/arrow-circle-right.svg" alt="" />
  </button>
</div>

      
    </section>
  );
}
