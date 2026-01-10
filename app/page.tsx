"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhyCaltAI from "@/components/WhyCaltAI";
import PilotSection from "@/components/PilotSection";
import ROISection from "@/components/ROISection";
import FoundersNote from "@/components/FoundersNote";
import FAQSection from "@/components/FAQSection";
import AIChatBox from "@/components/AIChatBox";

const SECTIONS = [
  { id: "home", Component: Hero },
  { id: "problem", Component: ProblemSection },
  { id: "solution", Component: SolutionSection },
  { id: "why-caltai", Component: WhyCaltAI },
  { id: "pilot", Component: PilotSection },
  { id: "roi", Component: ROISection },
  { id: "founders", Component: FoundersNote },
  { id: "faq", Component: FAQSection },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = SECTIONS.findIndex((s) => s.id === id);
          if (index !== -1) {
            setCurrentIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleSectionChange = (index: number) => {
    const target = sectionRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setCurrentIndex(index);
    }
  };

  return (
    <div className="h-screen w-full relative bg-background">
      <Navbar currentIndex={currentIndex} onSectionChange={handleSectionChange} />

      <main
        ref={containerRef}
        className="h-full w-full overflow-y-auto overflow-x-hidden lg:snap-y lg:snap-mandatory scroll-smooth"
      >
        {SECTIONS.map(({ id, Component }, index) => (
          <div
            key={id}
            id={id}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className="min-h-screen w-full lg:snap-start lg:snap-always relative"
          >
            {id === "home" ? (
              <Hero isActive={currentIndex === 0} />
            ) : id === "why-caltai" ? (
              <WhyCaltAI isActive={currentIndex === 3} />
            ) : id === "founders" ? (
              <FoundersNote />
            ) : id === "faq" ? (
              <FAQSection isActive={currentIndex === 7} />
            ) : id === "solution" ? (
              <>
                <Component />
                <div className="absolute bottom-0 w-full h-px lg:snap-end lg:snap-always pointer-events-none" />
              </>
            ) : (
              <Component />
            )}
          </div>
        ))}
      </main>

      {/* Global "Scroll to explore" Indicator */}
      <div className="fixed right-0 w-20 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-6 transition-colors duration-500 pointer-events-none text-muted-foreground">
        <div className="w-[1px] h-10 transition-colors bg-muted-foreground"></div>
        <span className="text-[11px] font-bold tracking-[0.3em] whitespace-nowrap uppercase [writing-mode:vertical-lr]">Scroll to explore</span>
        <div className="w-6 h-10 border-2 rounded-full relative transition-colors border-border-strong">
          <div className="w-1 h-2 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce transition-colors bg-muted"></div>
        </div>
      </div>

      {/* Persistent Background Elements */}
      {currentIndex !== 0 && currentIndex !== 7 && <AIChatBox />}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-grid">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}

