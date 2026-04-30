"use client";

import React from "react";

const CTASection = () => {
    return (
        <section className="relative bg-[#FBF9F4]">
            <div className="page-frame min-h-[455px] relative overflow-hidden flex flex-col items-center justify-center px-[55px] py-[54px]">
                {/* Dotted Pattern */}
                <div
                    className="absolute inset-0 opacity-55"
                    style={{
                        backgroundImage: "radial-gradient(#D6D6D6 1.5px, transparent 1.5px)",
                        backgroundSize: "19px 19px",
                    }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Badge */}
                    <div className="h-[40px] inline-flex items-center gap-2 px-4 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] mb-[78px]">
                        <div className="w-[24px] h-[24px] flex items-center justify-center text-[#5C35F5]">
                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.18262 3.53178C7.68392 3.53178 6.24662 4.12714 5.18688 5.18688C4.12714 6.24662 3.53178 7.68392 3.53178 9.18262C3.53178 10.6813 4.12714 12.1186 5.18688 13.1784C6.24662 14.2381 7.68392 14.8335 9.18262 14.8335V18.3652C6.74724 18.3652 4.4116 17.3978 2.68953 15.6757C0.967456 13.9536 -2.64973e-10 11.618 0 9.18262C1.83866e-07 6.74724 0.967456 4.4116 2.68953 2.68953C4.4116 0.967456 6.74724 0 9.18262 0V3.53178Z" fill="#613EE9" />
                                <path d="M12.7115 0C12.7115 0.742072 12.8576 1.47687 13.1416 2.16245C13.4256 2.84805 13.8418 3.47101 14.3666 3.99574C14.8913 4.52046 15.5143 4.9367 16.1999 5.22068C16.8854 5.50466 17.6202 5.65084 18.3623 5.65084V9.18262C15.9269 9.18262 13.5913 8.21516 11.8692 6.49309C10.1471 4.77101 9.17969 2.43538 9.17969 0H12.7115Z" fill="#9D86EB" />
                                <path d="M21.8941 18.3652H18.3623V12.7144C17.6202 12.7144 16.8854 12.8606 16.1999 13.1446C15.5143 13.4285 14.8913 13.8448 14.3666 14.3695C13.8418 14.8942 13.4256 15.5172 13.1416 16.2028C12.8576 16.8884 12.7115 17.6232 12.7115 18.3652H9.17969C9.17969 15.9299 10.1471 13.5942 11.8692 11.8721C13.5913 10.1501 15.9269 9.18262 18.3623 9.18262H21.8941V18.3652Z" fill="#7F62EA" />
                                <path d="M18.3672 3.53223H21.899V5.65129H18.3672V3.53223Z" fill="#BAABED" />
                            </svg>

                        </div>

                        <span className="text-[14px] font-medium text-[#443218] font-inter">
                            Get started
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="font-heading text-[#443218] text-[56px] leading-[1.22] tracking-[-0.02em] font-semibold max-w-[900px] mb-[58px]">
                        Shape your operation, grounded
                        <br />
                        in real work.
                    </h2>

                    {/* Buttons */}
                    <div className="flex items-center justify-center gap-[32px] mb-[42px]">
                        <button className="w-full lg:w-[234px] h-[46px] flex-shrink-0 rounded-full bg-[#FF5A1F] text-white text-[15px] font-medium transition-opacity hover:opacity-90">
                            Become a design partner
                        </button>

                        <button className="w-full lg:w-[304px] h-[46px] flex-shrink-0 rounded-full border border-[#443218] bg-[#FBF9F4] text-[#443218] text-[15px] font-medium transition-colors hover:bg-[rgba(167,154,142,0.05)]">
                            Learn about our design partnership
                        </button>
                    </div>

                    {/* Text Link */}
                    <a
                        href="#"
                        className="text-[#443218] text-[16px] font-medium font-sans inline-flex items-center gap-2"
                    >
                        Stay informed
                        <span className="text-[28px] leading-none">→</span>
                    </a>
                </div>
            </div>

            {/* Bottom Zebra Band */}
            <div className="relative h-[30px] border-t border-[#D5D4CF] border-b bg-[#FBF9F4] overflow-hidden">
                <div className="page-frame h-full hatch-pattern opacity-30" />
            </div>
        </section>
    );
};

export default CTASection;