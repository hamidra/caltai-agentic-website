"use client";

import React from "react";

const WorkflowsIntroSection = () => {
  return (
    <section className="w-full bg-[#FBF9F4] pt-[96px] pb-[88px] md:pt-[72px] md:pb-[72px] sm:pt-[64px] sm:pb-[64px]">
      <div className="max-w-[1160px] mx-auto px-5 flex flex-col items-center text-center">
        {/* Pill */}
        <div className="w-[142px] h-[42px] flex items-center justify-center gap-[10px] rounded-full border border-[#D8CBFF] bg-transparent mb-[78px] sm:mb-[48px]">
          <div className="text-[#6F4DFF]">
            <svg width="22" height="22" viewBox="0 0 297 298" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M178 89.4756H237V149.476H177V119.001H118V0H178V89.4756Z" fill="#FDA177" />
              <rect x="236" y="60.4878" width="60" height="30" fill="#FDC0A4" />
              <path d="M119 60.001H60V237.979H119V297.979H59V238.976H0V58.9756H59V0H119V60.001Z" fill="#FB631C" />
              <path d="M296.023 297.979H236.023V208.476H178V297.979H118V178.979H177V148.476H296.023V297.979Z" fill="#FC8249" />
            </svg>

          </div>
          <span className="text-[14px] font-medium text-[#2B2520] font-inter">Workflows</span>
        </div>

        {/* Headline */}
        <h2 className="text-[50px] md:text-[42px] sm:text-[34px] font-bold text-[#443218] leading-[1.42] tracking-[-0.02em] max-w-[850px] mb-[42px] font-heading">
          Focused workflows for the work
          <br className="sm:hidden" />
          where this matters most.
        </h2>

        {/* Paragraph */}
        <p className="text-[24px] md:text-[21px] sm:text-[18px] font-light leading-[1.42] text-[#695A44] max-w-[1130px] font-inter">
          Each workflow is a specific operational run CaltAI owns end to end. They share one engine, one set of
          <br className="md:hidden sm:hidden" />
          tools, one context layer. Start with one. Add more as your operations grow.
        </p>
      </div>
    </section>
  );
};

export default WorkflowsIntroSection;
