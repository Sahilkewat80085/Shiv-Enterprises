"use client";

import React from "react";

interface Category {
  title: string;
  icon: string;
  direction: "ltr" | "rtl";
  speed: string;
  iconColor: string;
  borderColor: string;
  items: string[];
}

const customerCategories: Category[] = [
  {
    title: "Hospitals & Medical Centers",
    icon: "local_hospital",
    direction: "ltr",
    speed: "55s",
    iconColor: "text-red-500 bg-red-500/10",
    borderColor: "hover:border-red-300 hover:shadow-red-500/5",
    items: [
      "OZON Hospital",
      "ORBIT hospital",
      "SHIV Hospital",
      "DESHMUKH Multispecialty Hospital",
      "New Vitthal Hospital",
      "Thorat Eye Hospital",
      "Vaidya Eye Hospital",
      "New Vitthal Hospital",
      "Bajaj Children Hospital",
      "Upadhay Eye Hospital",
      "Yogesh Patil Hospital",
      "Lahode Eye Hospital",
      "Kale Hospital",
      "Chafe Clinic",
      "Jaybahye Clinic",
      "Maheshwari Diagnostics",
      "More Sonography and X-ray Clinic",
      "Knode ENT Specialist",
      "Wankhade Eye Hospital",
      "Thote Hospital",
      "Korde Eye",
      "Dr Borakhade",
      "Dr Pophalkar",
      "Bhabhurkar Hospital"
    ]
  },
  {
    title: "Jewellery Showrooms",
    icon: "diamond",
    direction: "rtl",
    speed: "45s",
    iconColor: "text-amber-500 bg-amber-500/10",
    borderColor: "hover:border-amber-300 hover:shadow-amber-500/5",
    items: [
      "Shri Soni Jewellers",
      "Vikaram Jewellers",
      "Khandelwal Alankar Jewellers",
      "Bhamabre",
      "Sameer Soni Jewellers",
      "Jay Soni Jewellers",
      "Pukar Soni Jewellers",
      "Nilesh Soni Jewellers",
      "Bhavin Soni Jewellers",
      "Batuk Bhai Soni Jewellers",
      "Govardhan Jewellers"
    ]
  },
  {
    title: "Builders & Architects",
    icon: "architecture",
    direction: "ltr",
    speed: "35s",
    iconColor: "text-blue-500 bg-blue-500/10",
    borderColor: "hover:border-blue-300 hover:shadow-blue-500/5",
    items: [
      "Chaudhari Builders",
      "Hirulakar Builders",
      "Anandani Architect",
      "Ratnaparkhi Architect",
      "Sham Thakur Architect"
    ]
  },
  {
    title: "Textiles & Retail",
    icon: "shopping_bag",
    direction: "rtl",
    speed: "40s",
    iconColor: "text-emerald-500 bg-emerald-500/10",
    borderColor: "hover:border-emerald-300 hover:shadow-emerald-500/5",
    items: [
      "Sayadram Stores",
      "Borkar Stores",
      "Dulhan Stores",
      "Sanskar Creations",
      "Jain Sons",
      "India Handlooms",
      "Khelkhilone",
      "Meem Saab Saree Center"
    ]
  }
];

// Helper to duplicate array elements to ensure seamless, full-width scrolling marquee
const getRepeatedItems = (items: string[], minCount = 18): string[] => {
  let result = [...items];
  while (result.length < minCount) {
    result = [...result, ...items];
  }
  // Duplicate one final time to cover the width offset scroll animation (-50% to 0% or 0% to -50%)
  return [...result, ...result];
};

export default function TrustedCustomers() {
  return (
    <section className="bg-linear-to-b from-surface-container-low/30 to-surface-container-lowest py-16 md:py-24 border-b border-outline-variant/50 overflow-hidden">
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-12">
        <div className="animate-fade-in-up">
          <span className="inline-block bg-accent-gold/10 text-accent-gold font-label-md px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Our Trusted Network
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-4 font-bold">
            50+ Leading Establishments Trust Us
          </h2>
          <p className="font-body-md text-secondary max-w-3xl mx-auto">
            From critical healthcare units to luxury showrooms, prominent builders, and major retail hubs—we deliver high-performance security surveillance and power backup systems.
          </p>
        </div>
      </div>

      {/* Marquee Rows Container */}
      <div className="flex flex-col gap-6 relative w-full select-none">
        {customerCategories.map((cat, rowIndex) => {
          const marqueeClass = cat.direction === "ltr" ? "animate-marquee-ltr" : "animate-marquee-rtl";
          const repeatedList = getRepeatedItems(cat.items);

          return (
            <div
              key={rowIndex}
              className="marquee-row relative w-full overflow-hidden mask-fade-edges py-1"
            >
              {/* Outer scrolling track */}
              <div
                className={`${marqueeClass} flex gap-4`}
                style={{
                  "--marquee-duration": cat.speed,
                } as React.CSSProperties}
              >
                {repeatedList.map((item, index) => (
                  <div
                    key={`${rowIndex}-${item}-${index}`}
                    className={`flex items-center gap-3 bg-surface-container-lowest/80 backdrop-blur-xs border border-outline-variant/20 px-5 py-3 rounded-full shadow-xs transition-all duration-300 hover:scale-105 hover:bg-surface-container-lowest hover:border-accent-gold/40 hover:shadow-md cursor-default shrink-0 ${cat.borderColor}`}
                  >
                    {/* Category Icon */}
                    <span className={`material-symbols-outlined text-lg p-1.5 rounded-full flex items-center justify-center ${cat.iconColor}`}>
                      {cat.icon}
                    </span>
                    {/* Customer Name */}
                    <span className="font-body-md text-primary font-medium pr-1">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
