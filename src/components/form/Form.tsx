"use client";


import { useState } from "react";

export default function WaitingList() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agency: "",
    agree: false,
    
    countryCode: "+971", // default UAE 
  
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <section className="w-full relative   flex flex-col md:flex-row p justify-center bg-gradient-to-r from-[#4435F3] to-[#3C2CE9] px-12 py-16" 
    >
      {/* Left Section */}
      
       <div className="absolute  right-300 ">
        <img
          src="/svg/Group.svg" // 👈 replace with your image path
          alt="Background"
        
          className=" h-200 "
        />
      </div>
      <div className="flex-1 text-white mb-8 mt-1  md:mb-0 md:mr-12">
        <h1 className="text-5xl font-InterTight, Arial, sans-serif font-bold mb-4">Join our waiting list</h1>
        <p className="text-lg">FREE 1 month trial for waitlist members</p>
      </div>

      {/* Right Section - Form */}
      <div className="flex-3 bg-white rounded-2xl shadow-lg p-8 mt-1 max-w-2xl">
        <h2 className="text-lg font-semibold mb-6">Fill out the form</h2>

        <form className="space-y-3 ">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder=" Name*"
            value={formData.name}
            onChange={handleChange}
            className="w-full   rounded-lg px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#FBFBFB] "
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required   
            className="w-full  rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#FBFBFB]"
          />

          {/* Phone */}
          <div className="flex items-center  rounded-lg bg-[#FBFBFB]">
             <select
    name="countryCode"
    className="px-2 py-3 bg-transparent focus:outline-none"
    
  >
    
    <option value="+971">🇦🇪 +971</option>
    <option value="+92">🇵🇰 +92</option>
    <option value="+91">🇮🇳 +91</option>
    <option value="+44">🇬🇧 +44</option>
    <option value="+1">🇺🇸 +1</option>
    <option value="+61">🇦🇺 +61</option>
    <option value="+81">🇯🇵 +81</option>
    <option value="+49">🇩🇪 +49</option>
    <option value="+33">🇫🇷 +33</option>
    <option value="+39">🇮🇹 +39</option>
    
    {/* 👉 Add full country list here */}
  </select>
            
            <input
              type="tel" 
              name="phone"
              placeholder="+971 00-000-0000"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-4 py-4  focus:outline-none bg-[#FBFBFB]"
            />
          </div>

          {/* Agency Name */}
          <input
            type="text"
            name="agency"
            placeholder="Real Estate Agency name"
            value={formData.agency}
            onChange={handleChange}
            className="w-full   rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#FBFBFB]"
          />

          {/* Checkbox */}
          <div className="flex items-start   space-x-2 text-sm mb-7">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <p>
              I agree to the{" "}
              <a href="#" className=" underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className=" underline">
                Terms of Use
              </a>
            </p>
          </div>
               
          {/* Button */}
          <button
            type="submit"
            className="p-7 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium py-3 rounded-full shadow-md hover:opacity-90 transition ease-in-out"
          >
            Join waitlist
          </button>

          <p className="text-xs text-gray-500">*mandatory fields</p>
        </form>
      </div>
    </section>
  );
}
