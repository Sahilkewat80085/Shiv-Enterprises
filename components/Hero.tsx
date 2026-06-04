"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const bgImages = [
  "/images/bg-1.png",
  "/images/bg-2.png",
  "/images/bg-3.png"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Slider */}
      <div className="absolute inset-0 z-0 bg-primary">
        {bgImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Background ${index + 1}`}
            fill
            priority={true} // Preload all images to prevent any flashing during transition
            sizes="100vw"
            className={`object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Clean Overlay: Darker on the left for text readability, transparent on the right to keep images clean */}
        <div className="absolute inset-0 bg-primary/40 md:bg-linear-to-r md:from-primary/90 md:via-primary/50 md:to-transparent z-10" />
      </div>

      <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 text-center md:text-left text-on-primary">
        <div className="max-w-3xl animate-fade-in-up opacity-0 relative overflow-hidden bg-white/10 backdrop-blur-3xl border-t border-l border-white/30 border-b border-r border-white/10 p-8 md:p-12 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_0_40px_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.8)]">
          {/* Animated diagonal reflection shine */}
          <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/30 to-transparent w-[100%] animate-glass-shine pointer-events-none mix-blend-overlay"></div>
          
          <div className="relative z-10">
          <span className="inline-block bg-accent-gold text-primary font-label-md px-3 py-1 rounded-xs mb-6 shadow-sm">
            ESTABLISHED 1999
          </span>
          <h1 className="font-headline-xl-mobile md:font-headline-xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-accent-gold drop-shadow-sm">
            Trusted Security &amp; Power Solutions Since 25+ Years
          </h1>
          <p className="font-body-lg text-inverse-on-surface mb-10 max-w-2xl drop-shadow-md mx-auto md:mx-0">
            CCTV Installation, Solar Systems, Biometric Access, EPBX &amp; Power
            Backup Solutions for Homes and Businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="tel:+918408829992" className="bg-accent-gold text-primary px-8 py-3 rounded-xs font-label-md hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span className="material-symbols-outlined">call</span>
              Call Now
            </a>
            <a href="https://wa.me/918408829992" target="_blank" rel="noopener noreferrer" className="bg-surface-container-lowest/10 backdrop-blur-xl border border-white/30 text-white px-8 py-3 rounded-xs font-label-md hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Us
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
