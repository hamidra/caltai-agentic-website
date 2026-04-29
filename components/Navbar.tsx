"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-[64px] sticky top-0 z-50 border-b border-[#D5D4CF]" style={{ backgroundColor: 'rgba(255, 254, 251, 0.85)', backdropFilter: 'blur(8px)' }}>
      <div className="page-frame h-full flex items-center justify-between px-8 md:px-12 border-b-0">
        {/* Left: Logo & Brand */}
        <div className="flex items-center gap-4 h-full">
          <Link href="/" className="flex items-center">
            {/* Logo Mark */}
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 4C18 4 14 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C14 19 18 18 18 18" stroke="#443218" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M12 11H20" stroke="#443218" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            {/* Divider */}
            <div className="w-[1px] h-5 bg-[#D5D4CF] mx-4" />
            <span className="text-[19px] font-extrabold tracking-tight text-[#443218]">CaltAI</span>
          </Link>
        </div>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {["Product", "How it works", "Use cases", "About us"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[14px] font-medium text-[#443218] hover:text-[#FF5A1F] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right: CTA (Rectangular) */}
        <div className="flex items-center">
          <Link
            href="#demo"
            className="w-[140px] h-[40px] flex items-center justify-center border border-[#D5D4CF] text-[14px] font-medium text-[#443218] hover:bg-[#F2EEE9] transition-all"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
