import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto ">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          {/* Logo */}
          <div className="flex flex-co d:flex-row items-start pb-10 md:items-cente gap- mb-6 md:mb-0">
            <img src="/svg/logo.svg" alt="Logo" />
          </div>

          {/* Contact + Social */}
          <div className="flex flex-col items-start md:items-start pr-10 ">
            {/* Contact Email */}
            <Link 
              href="mailto:support@proprequest.ae"
              className="text-[#27272C] font-bold text-xl transition-colors"
            >
              support@proprequest.ae
            </Link>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3  pt-7">
              <img src="/svg/facebook.svg" alt="" className=' ' />

             <img src="/svg/linkedin.svg" alt="" />

             <img src="/svg/instagram-fill.svg" alt="" />

              <img src="/svg/tiktok.svg" alt="" />
              <img src="/svg/youtube.svg" alt="" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 border-t border-gray-200">
          <p className="text-[#898989] text-sm mb-4 md:mb-0">
            © 2025 PropRequest. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="text-[#898989] hover:text-gray-700 text-sm transition-colors">
              Privacy policy
            </Link>
            <Link href="/terms" className="text-[#898989] hover:text-gray-700 text-sm transition-colors">
              Terms of Use
            </Link>
            <Link href="/cookies" className="text-[#898989] hover:text-gray-700 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
