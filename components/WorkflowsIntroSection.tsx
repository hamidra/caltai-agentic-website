"use client";

import React from "react";

const WorkflowsIntroSection = () => {
  return (
    <section className="w-full bg-[#FBF9F4] pt-[96px] pb-[88px] md:pt-[72px] md:pb-[72px] sm:pt-[64px] sm:pb-[64px]">
      <div className="max-w-[1160px] mx-auto px-5 flex flex-col items-center text-center">
        {/* Pill */}
        <div className="w-[142px] h-[42px] flex items-center justify-center gap-[10px] rounded-full border border-[#D8CBFF] bg-transparent mb-[78px] sm:mb-[48px]">
          <div className="text-[#6F4DFF]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L14.5 9H21L16 13L17.5 19L12 15L6.5 19L8 13L3 9H9.5L12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <span className="text-[14px] font-medium text-[#2B2520] font-sans">Workflows</span>
        </div>

        {/* Headline */}
        <h2 className="text-[50px] md:text-[42px] sm:text-[34px] font-bold text-[#242424] leading-[1.42] tracking-[-0.02em] max-w-[850px] mb-[42px] font-heading">
          Focused workflows for the work
          <br className="sm:hidden" />
          where this matters most.
        </h2>

        {/* Paragraph */}
        <p className="text-[24px] md:text-[21px] sm:text-[18px] font-medium leading-[1.42] text-[#93897F] max-w-[1130px] font-inter">
          Each workflow is a specific operational run CaltAI owns end to end. They share one engine, one set of
          <br className="md:hidden sm:hidden" />
          tools, one context layer. Start with one. Add more as your operations grow.
        </p>
      </div>
    </section>
  );
};

export default WorkflowsIntroSection;
