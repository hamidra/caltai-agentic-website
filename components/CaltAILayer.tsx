"use client";

import React from "react";

const CaltAILayer = () => {
  return (
    <section className="bg-[#FBF9F4] relative">
      <div className="page-frame min-h-[720px] flex flex-col">
        {/* Top Content Area */}
        <div className="flex-1 pt-[70px] pb-[60px] px-[55px]">
          {/* Badge */}
          <div className="h-[40px] inline-flex items-center gap-2 px-4 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] mb-20">
            <div className="w-[22px] h-[22px] flex items-center justify-center text-[#5C35F5]">
              <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6016 7.83884L17.8937 3.96094L20.8337 5.69073L20.5698 9.58645L17.6016 7.83884Z" fill="#613EE9" />
                <path d="M12.8203 9.51462L13.1125 5.63672L16.0525 7.36651L15.7885 11.2622L12.8203 9.51462Z" fill="#613EE9" />
                <path d="M7.54688 10.7236L7.83904 6.8457L10.779 8.5755L10.5151 12.4712L7.54688 10.7236Z" fill="#613EE9" />
                <path d="M18.2266 12.8113L20.2498 10.168L21.4587 10.6632L21.1948 14.5589L18.2266 12.8113Z" fill="#613EE9" />
                <path d="M19.2266 17.4324L21.2498 14.7891L22.4587 15.2843L22.1948 19.18L19.2266 17.4324Z" fill="#613EE9" />
                <path d="M3.34234 16.8225L7.57079 10.812M3.34234 16.8225L3.82319 12.789L8.03185 6.80656M3.34234 16.8225L6.47971 18.6075M7.57079 10.812L10.6035 12.5234M7.57079 10.812L8.03185 6.80656M10.6035 12.5234L12.7047 9.53671M10.6035 12.5234L11.1219 8.42326M12.7047 9.53671L15.6176 11.2233M12.7047 9.53671L13.138 5.55747M15.6176 11.2233L17.7452 8.199M15.6176 11.2233L16.1757 7.09488M17.7452 8.199L20.6282 9.8707M17.7452 8.199L18.2216 4.18682M20.6282 9.8707L21.0867 5.81545L18.2216 4.18682M20.6282 9.8707L20.5626 9.96392M6.11976 22.5361L8.11995 19.5407L6.47971 18.6075M6.11976 22.5361L11.9777 25.8511L14.0034 22.9717L17.9866 25.3626L22.199 19.3791M6.11976 22.5361L6.47971 18.6075M8.03185 6.80656L11.1219 8.42326M11.1219 8.42326L13.138 5.55747M13.138 5.55747L16.1757 7.09488M16.1757 7.09488L18.2216 4.18682M21.3075 14.6148L18.4217 13.0071L20.5626 9.96392M21.3075 14.6148L19.1618 17.6649L22.199 19.3791M21.3075 14.6148L21.3248 14.4656M22.199 19.3791L22.6705 15.3134L21.3248 14.4656M20.5626 9.96392L21.7728 10.5953L21.3248 14.4656" stroke="#532CEA" stroke-width="0.75" />
              </svg>
            </div>
            <span className="text-[14px] font-medium text-[#443218] font-sans">CaltAI Layer</span>
          </div>

          {/* Main Title */}
          <h2 className="text-[40px] font-semibold text-[#262626] leading-[1.18] w-[520px] mb-[42px] font-heading">
            CaltAI is the layer that runs the work between your tools.
          </h2>

          {/* Body Text */}
          <p className="text-[16px] font-medium leading-[1.5] text-[#8D8177] w-[520px] font-sans">
            It watches the signals in your tools. Holds context about your business, your clients, and your past runs.
            Plans the next actions. Routes what needs human judgment, executes what doesn’t.
            And stays on the run until the outcome is done.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#D5D4CF]" />

        {/* Bottom Statement Band */}
        <div className="h-[155px] relative overflow-hidden bg-[#FBF9F4] flex items-center justify-center">
          {/* Dotted Pattern */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "radial-gradient(#E1DFD8 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />

          {/* Large Icon (Left) */}
          <div className="absolute left-[155px] top-1/2 -translate-y-1/2 text-[#5C35F5] opacity-80">
            <svg width="110" height="120" viewBox="0 0 110 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M70.0369 41.9019L74.1284 29.4138L81.0973 37.1132L77.0678 49.7432L70.0369 41.9019Z" fill="#4921E7" />
              <path d="M54.3794 41.2549L58.2191 28.8533L65.7165 36.6017L61.3926 49.5009L54.3794 41.2549Z" fill="#4921E7" />
              <path d="M38.2854 40.5593L42.1941 27.8587L49.7985 36.0787L45.6467 48.8029L38.2854 40.5593Z" fill="#4921E7" />
              <path d="M68.9006 58.8552L76.8861 51.0494L79.6765 53.8062L75.6636 66.3738L68.9006 58.8552Z" fill="#4921E7" />
              <path d="M67.69 75.2218L76.175 67.1705L79.1751 70.8279L75.1701 83.5912L67.69 75.2218Z" fill="#4921E7" />
              <path d="M21.2089 56.5165L37.9177 40.5066M21.2089 56.5165L25.4555 43.4149L42.0862 27.4799M21.2089 56.5165L29.2321 65.666M37.9177 40.5066L45.683 49.3039M37.9177 40.5066L42.0862 27.4799M45.683 49.3039L53.9858 41.3483M45.683 49.3039L50.0875 36.0154M53.9858 41.3483L61.4144 49.942M53.9858 41.3483L58.0541 28.382M61.4144 49.942L69.8218 41.8863M61.4144 49.942L65.9561 36.5981M69.8218 41.8863L77.1724 50.3999M69.8218 41.8863L74.0403 28.8521M77.1724 50.3999L81.3683 37.2028L74.0403 28.8521M77.1724 50.3999L76.9133 50.6482M25.4163 78.5353L33.4267 70.4494L29.2321 65.666M25.4163 78.5353L40.4094 95.5589L48.4138 87.8892L58.5127 99.9253L75.1551 83.9904M25.4163 78.5353L29.2321 65.666M42.0862 27.4799L50.0875 36.0154M50.0875 36.0154L58.0541 28.382M58.0541 28.382L65.9561 36.5981M65.9561 36.5981L74.0403 28.8521M75.8573 67.055L68.4534 58.7542L76.9133 50.6482M75.8573 67.055L67.3783 75.1794L75.1551 83.9904M75.8573 67.055L76.0129 66.5698M75.1551 83.9904L79.3968 70.7711L76.0129 66.5698M76.9133 50.6482L80.0483 53.985L76.0129 66.5698" stroke="#613EE9" stroke-width="2" />
              <line x1="66.6296" y1="15.8921" x2="67.0483" y2="8.07154" stroke="#613EE9" stroke-width="7" stroke-linecap="round" />
              <line x1="91.5249" y1="25.0138" x2="100.145" y2="17.8267" stroke="#613EE9" stroke-width="7" stroke-linecap="round" />
              <line x1="94.2192" y1="48.054" x2="105.261" y2="48.5347" stroke="#613EE9" stroke-width="7" stroke-linecap="round" />
            </svg>

          </div>

          {/* Statement Text */}
          <p className="text-[24px] font-semibold text-[#262626] leading-[1.35] text-center w-[700px] z-10 font-sans">
            Not a chatbot. Not an automation. CaltAI is a system that owns operational work end to end.
          </p>

          {/* Small Icon (Right) */}
          <div className="absolute right-[155px] top-1/2 -translate-y-1/2 text-[#5C35F5] opacity-80">
            <svg width="55" height="60" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.65">
                <path d="M16.3508 17.4636L14.6456 12.259L11.7413 15.4679L13.4206 20.7316L16.3508 17.4636Z" fill="#7056D6" stroke="#7056D6" />
                <path d="M22.8741 17.195L21.2739 12.0265L18.1493 15.2557L19.9513 20.6316L22.8741 17.195Z" fill="#7056D6" stroke="#7056D6" />
                <path d="M29.5865 16.9045L27.9575 11.6114L24.7883 15.0372L26.5186 20.3401L29.5865 16.9045Z" fill="#7056D6" />
                <path d="M16.8262 24.5291L13.4981 21.2759L12.3352 22.4249L14.0076 27.6626L16.8262 24.5291Z" fill="#7056D6" stroke="#7056D6" />
                <path d="M17.326 31.35L13.7898 27.9945L12.5395 29.5188L14.2086 34.8381L17.326 31.35Z" fill="#7056D6" stroke="#7056D6" />
                <path d="M36.6961 23.5558L29.7325 16.8835M36.6961 23.5558L34.9262 18.0956L27.9952 11.4544M36.6961 23.5558L33.3523 27.369M29.7325 16.8835L26.4962 20.5498M29.7325 16.8835L27.9952 11.4544M26.4962 20.5498L23.0359 17.2343M26.4962 20.5498L24.6606 15.0117M23.0359 17.2343L19.9399 20.8158M23.0359 17.2343L21.3404 11.8304M19.9399 20.8158L16.4361 17.4585M19.9399 20.8158L18.0471 15.2546M16.4361 17.4585L13.3726 21.0066M16.4361 17.4585L14.6779 12.0263M13.3726 21.0066L11.6239 15.5066L14.6779 12.0263M13.3726 21.0066L13.4806 21.1101M34.9426 32.7324L31.6041 29.3625L33.3523 27.369M34.9426 32.7324L28.694 39.8272L25.3581 36.6308L21.1492 41.6469L14.2133 35.0059M34.9426 32.7324L33.3523 27.369M27.9952 11.4544L24.6606 15.0117M24.6606 15.0117L21.3404 11.8304M21.3404 11.8304L18.0471 15.2546M18.0471 15.2546L14.6779 12.0263M13.9207 27.9479L17.0063 24.4884L13.4806 21.1101M13.9207 27.9479L17.4544 31.3338L14.2133 35.0059M13.9207 27.9479L13.8558 27.7456M14.2133 35.0059L12.4455 29.4966L13.8558 27.7456M13.4806 21.1101L12.174 22.5008L13.8558 27.7456" stroke="#9D86EB" />
                <line x1="1.5" y1="-1.5" x2="4.68131" y2="-1.5" transform="matrix(-0.0534642 -0.99857 -0.99857 0.0534642 16.3906 8.1582)" stroke="#7056D6" stroke-width="3" stroke-linecap="round" />
                <line x1="1.5" y1="-1.5" x2="6.09465" y2="-1.5" transform="matrix(-0.768046 -0.640395 -0.640395 0.768046 7.57812 12.4785)" stroke="#7056D6" stroke-width="3" stroke-linecap="round" />
                <line x1="1.5" y1="-1.5" x2="6.02349" y2="-1.5" transform="matrix(-0.999054 0.0434936 0.0434936 0.999054 7.79688 21.4199)" stroke="#7056D6" stroke-width="3" stroke-linecap="round" />
              </g>
            </svg>

          </div>
        </div>

        {/* Bottom Zebra Band */}
        <div className="w-full h-[32px] border-t border-[#D5D4CF] overflow-hidden">
          <div
            className="w-full h-full opacity-40 hatch-pattern"
          />
        </div>
      </div>
    </section>
  );
};

export default CaltAILayer;
