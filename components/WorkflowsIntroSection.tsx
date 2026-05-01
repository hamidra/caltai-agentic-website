"use client";

import React from "react";

const WorkflowsIntroSection = () => {
  return (
    <section className="w-full bg-[#FBF9F4] px-5 py-[64px] sm:px-6 md:px-[70px] md:py-[72px] lg:pt-[96px] lg:pb-[88px]">
      <div className="mx-auto flex max-w-[1160px] flex-col items-center px-0 text-center md:px-5">
        {/* Pill */}
        <div className="mb-[54px] flex h-[42px] w-[142px] items-center justify-center gap-[10px] rounded-full border border-[#D8CBFF] bg-transparent md:mb-[64px] lg:mb-[78px]">
          <div className="text-[#6F4DFF]">
            <svg width="22" height="22" viewBox="0 0 297 298" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M178 89.4756H237V149.476H177V119.001H118V0H178V89.4756Z" fill="#FDA177" />
              <rect x="236" y="60.4878" width="60" height="30" fill="#FDC0A4" />
              <path d="M119 60.001H60V237.979H119V297.979H59V238.976H0V58.9756H59V0H119V60.001Z" fill="#FB631C" />
              <path d="M296.023 297.979H236.023V208.476H178V297.979H118V178.979H177V148.476H296.023V297.979Z" fill="#FC8249" />
            </svg>
          </div>

          <span className="font-inter text-[14px] font-medium text-[#2B2520]">
            Workflows
          </span>
        </div>

        {/* Headline */}
        <h2 className="mb-[30px] max-w-[850px] font-heading font-bold tracking-[-0.03em] text-[#443218] text-[clamp(34px,5vw,50px)] leading-[1.15] lg:mb-[42px] lg:leading-[1.42]">
          Focused workflows for the work{" "}
          <br className="hidden lg:block" />
          where this matters most.
        </h2>

        <p className="max-w-[340px] font-inter font-normal text-[#695A44] text-[clamp(18px,2.2vw,24px)] leading-[1.42] sm:max-w-[430px] md:max-w-[760px] lg:max-w-[1130px]">
          Each workflow is a specific operational run CaltAI owns end to end. They share one engine, one set of tools, one context layer. Start with one. Add more as your operations grow.
        </p>
      </div>
    </section>
  );
};

export default WorkflowsIntroSection;