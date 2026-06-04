"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-surface border-b border-outline-variant w-full sticky top-0 z-50">
      <div className="flex justify-between items-center w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4">
        {/* Brand Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-headline-md text-headline-md font-bold tracking-tight text-primary cursor-pointer hover:opacity-80 transition-opacity focus:outline-none"
        >
          SHIV ENTERPRISES
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8">
          {[
            { label: "Home", href: "#" },
            { label: "Services", href: "#services" },
            { label: "Support", href: "#support" },
          ].map((link) => (
            <a
              key={link.label}
              className="group relative text-secondary font-medium hover:text-primary transition-colors duration-200 active:scale-95"
              href={link.href}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Action Items */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-primary font-label-md">
            <span className="material-symbols-outlined text-lg">call</span>
            <span>8408829992 / 7020378588</span>
          </div>
          <a href="#support" className="bg-primary text-on-primary px-6 py-2 rounded font-label-md hover:bg-opacity-90 transition-all cursor-pointer">
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-primary focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant px-margin-mobile py-4 space-y-4">
          <nav className="flex flex-col space-y-3">
            <a
              onClick={() => setIsMenuOpen(false)}
              className="text-primary font-semibold py-1 hover:text-primary transition-colors"
              href="#"
            >
              Home
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              className="text-secondary font-medium py-1 hover:text-primary transition-colors"
              href="#services"
            >
              Services
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              className="text-secondary font-medium py-1 hover:text-primary transition-colors"
              href="#support"
            >
              Support
            </a>
          </nav>
          <div className="border-t border-outline-variant pt-4 flex flex-col space-y-3">
            <div className="flex items-center space-x-2 text-primary font-label-md">
              <span className="material-symbols-outlined text-lg">call</span>
              <span>8408829992 / 7020378588</span>
            </div>
            <a href="#support" onClick={() => setIsMenuOpen(false)} className="bg-primary text-on-primary px-6 py-2 rounded font-label-md hover:bg-opacity-90 transition-all w-full cursor-pointer text-center block">
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
