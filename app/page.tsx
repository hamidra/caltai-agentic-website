"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SectionScroller from "@/components/SectionScroller";
import SolutionSection from "@/components/SolutionSection";
import WhyCaltAI from "@/components/WhyCaltAI";
import PilotSection from "@/components/PilotSection";
import ROISection from "@/components/ROISection";
import FoundersNote from "@/components/FoundersNote";
import FAQSection from "@/components/FAQSection";
import AIChatBox from "@/components/AIChatBox";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className="relative h-screen w-full bg-background overflow-hidden">
      <Navbar currentIndex={currentIndex} onSectionChange={setCurrentIndex} />

      <SectionScroller onSectionChange={setCurrentIndex} selectedIndex={currentIndex}>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <WhyCaltAI />
        <PilotSection />
        <ROISection />
        <FoundersNote />
        <FAQSection />
      </SectionScroller>

      {/* Global "Scroll to explore" Indicator */}
      <div className={`fixed right-0 w-20 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-6 transition-colors duration-500 pointer-events-none ${currentIndex === 2 ? 'text-white/30' : 'text-brand-brown/30'}`}>
        <div className={`w-[1px] h-10 transition-colors ${currentIndex === 2 ? 'bg-white/30' : 'bg-brand-brown/30'}`}></div>
        <span className="text-[11px] font-bold tracking-[0.3em] whitespace-nowrap uppercase [writing-mode:vertical-lr]">Scroll to explore</span>
        <div className={`w-6 h-10 border-2 rounded-full relative transition-colors ${currentIndex === 2 ? 'border-white/20' : 'border-brand-brown/20'}`}>
          <div className={`w-1 h-2 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce transition-colors ${currentIndex === 2 ? 'bg-white/40' : 'bg-brand-brown/40'}`}></div>
        </div>
      </div>

      {/* Persistent Background Elements */}
      {currentIndex !== 0 && currentIndex !== 7 && <AIChatBox />}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-grid">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-orange/5 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-brand-orange/5 blur-[120px] rounded-full"></div>
      </div>
    </main>
  );
}
