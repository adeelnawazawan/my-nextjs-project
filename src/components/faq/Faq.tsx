"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { RxCross2 } from "react-icons/rx";
const faqs = [
  {
    question: "Is this just another property listing portal?",
    answer:
      "No. PropRequest is not a typical listing portal. Instead of browsing endless outdated listings, you post a request — and relevant sellers' brokers come to you. It’s a request-driven platform focused on efficiency and relevance",
  },
  
  {
    question: "Do I need a real estate license to use the platform?",
    answer:
      "Only agents posting properties need a license, buyers/renters do not.",
  },
  {
    question: "What are the benefits of using PropRequest?",
    answer:
      "You get access to real estate requests, visibility for your listings, and a simplified workflow.",
  },
  {
    question:
      'What types of properties can be listed in the "Distress Deals" section?',
    answer:
      "Only genuine distress deals and urgent sale properties are allowed here.",
  },
 
  {
    question: "Who can see my request?",
    answer:
      "Only verified agents and developers can view your request.",
  },
   {
    question: "How does the platform work?",
    answer:
      "Users submit their property requests, agents respond with suitable listings, and deals are made faster.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Basic usage is free, but agents may pay for premium listing and promotion options.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full  max-w-8xl mx-auto   px-4 sm:px-6 md:px-15 py-16 ">
      {/* Heading */}
      <h2 className="md:text-[58px] md:leading-[55px] font-[Inter_Tight] font-bold text-center mb-12 text-[#4c3aff]">
        FAQ
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-5 ">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className=" rounded-2xl p-4  bg-[#FBFBFB]  text-black font-bold transition-all  ease-in-out cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center  ">
                <p className=" font-bold text-black  md:text-xl ">
                  {faq.question}
                </p>

                {/* Circle with icon */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4abdff] hover:bg-[#4C3AFF]  text-white">
                  {isOpen ? (
                    <RxCross2  className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </div>

              {isOpen && (
                <p className="mt-3 text-[#27272C]  text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
