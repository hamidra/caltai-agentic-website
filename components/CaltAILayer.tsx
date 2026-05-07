"use client";

import React from "react";

const CaltAILayer = () => {
  return (
    <section className="relative bg-[#FBF9F4]">
      <div className="page-frame flex min-h-[560px] flex-col md:min-h-[640px] lg:min-h-[720px]">
        {/* Top Content Area */}
        <div className="flex-1 px-5 pb-12 pt-14 sm:px-6 md:px-10 md:pb-14 md:pt-16 lg:px-[55px] lg:pb-[60px] lg:pt-[70px]">
          <div className="grid items-center gap-12 lg:grid-cols-[520px_1fr] lg:gap-[70px]">
            <div>
              {/* Badge */}
              <div className="mb-12 inline-flex h-[40px] items-center gap-2 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] px-4 md:mb-16 lg:mb-20">
                <div className="flex h-[22px] w-[22px] items-center justify-center text-[#5C35F5]">
                  <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6016 7.83884L17.8937 3.96094L20.8337 5.69073L20.5698 9.58645L17.6016 7.83884Z" fill="#613EE9" />
                    <path d="M12.8203 9.51462L13.1125 5.63672L16.0525 7.36651L15.7885 11.2622L12.8203 9.51462Z" fill="#613EE9" />
                    <path d="M7.54688 10.7236L7.83904 6.8457L10.779 8.5755L10.5151 12.4712L7.54688 10.7236Z" fill="#613EE9" />
                    <path d="M18.2266 12.8113L20.2498 10.168L21.4587 10.6632L21.1948 14.5589L18.2266 12.8113Z" fill="#613EE9" />
                    <path d="M19.2266 17.4324L21.2498 14.7891L22.4587 15.2843L22.1948 19.18L19.2266 17.4324Z" fill="#613EE9" />
                    <path d="M3.34234 16.8225L7.57079 10.812M3.34234 16.8225L3.82319 12.789L8.03185 6.80656M3.34234 16.8225L6.47971 18.6075M7.57079 10.812L10.6035 12.5234M7.57079 10.812L8.03185 6.80656M10.6035 12.5234L12.7047 9.53671M10.6035 12.5234L11.1219 8.42326M12.7047 9.53671L15.6176 11.2233M12.7047 9.53671L13.138 5.55747M15.6176 11.2233L17.7452 8.199M15.6176 11.2233L16.1757 7.09488M17.7452 8.199L20.6282 9.8707M17.7452 8.199L18.2216 4.18682M20.6282 9.8707L21.0867 5.81545L18.2216 4.18682M20.6282 9.8707L20.5626 9.96392M6.11976 22.5361L8.11995 19.5407L6.47971 18.6075M6.11976 22.5361L11.9777 25.8511L14.0034 22.9717L17.9866 25.3626L22.199 19.3791M6.11976 22.5361L6.47971 18.6075M8.03185 6.80656L11.1219 8.42326M11.1219 8.42326L13.138 5.55747M13.138 5.55747L16.1757 7.09488M16.1757 7.09488L18.2216 4.18682M21.3075 14.6148L18.4217 13.0071L20.5626 9.96392M21.3075 14.6148L19.1618 17.6649L22.199 19.3791M21.3075 14.6148L21.3248 14.4656M22.199 19.3791L22.6705 15.3134L21.3248 14.4656M20.5626 9.96392L21.7728 10.5953L21.3248 14.4656" stroke="#532CEA" strokeWidth="0.75" />
                  </svg>
                </div>

                <span className="font-inter text-[14px] font-medium text-[#443218]">
                  CaltAI Layer
                </span>
              </div>

              {/* Main Title */}
              <h2 className="font-heading max-w-[520px] text-[32px] font-semibold leading-[1.16] text-[#443218] sm:text-[36px] md:text-[40px] lg:w-[520px]">
                CaltAI is the layer that runs the work between your tools.
              </h2>

              {/* Body Text */}
              <p className="mt-7 max-w-[520px] font-inter text-[16px] font-light leading-[1.55] text-[#695A44] md:mt-[42px] lg:w-[520px]">
                It watches the signals in your tools. Holds context about your business, your clients, and your past runs.
                Plans the next actions. Routes what needs human judgment, executes what doesn’t.
                And stays on the run until the outcome is done.
              </p>
            </div>

            {/* Visual */}
            <div className="relative hidden justify-end lg:flex">
              <img
                src="/hero/caltai-layer-page-visual.svg"
                alt="CaltAI layer connecting business signals, context, approvals, and objectives"
                className="w-[650px] max-w-full"
              />
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[#D5D4CF]" />

        {/* Bottom Statement Band */}
        <div className="relative flex min-h-[170px] items-center justify-center overflow-hidden bg-[#F6F3EF] px-5 py-10 sm:px-6 md:px-10 lg:h-[155px] lg:px-[55px] lg:py-0">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "radial-gradient(#D6D6D6 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
            }}
          />

          <p className="relative z-10 max-w-[620px] px-4 text-center font-inter text-[18px] font-semibold leading-[1.35] text-[#443218] sm:text-[20px] md:text-[22px] lg:w-[700px] lg:max-w-[700px] lg:px-0 lg:text-[24px]">
            Not a chatbot. Not an automation. CaltAI is a system that owns operational work end to end.
          </p>
        </div>
      </div>

      <div className="relative h-[30px] overflow-hidden border-b border-t border-[#D5D4CF] bg-[#FBF9F4]">
        <div className="page-frame h-full hatch-pattern opacity-30" />
      </div>
    </section>
  );
};

export default CaltAILayer;