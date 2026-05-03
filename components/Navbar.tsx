"use client";

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Product", href: "/#product" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "About us", href: "/#about-us" },
];

const useCaseLinks = [
  {
    label: "Post-sales onboarding",
    href: "/use-cases/post-sales-onboarding",
  },
  {
    label: "Client intake",
    href: "/use-cases/client-intake",
  },
  {
    label: "Lead lifecycle",
    href: "/use-cases/lead-lifecycle",
  },
  {
    label: "Outbound follow-up",
    href: "/use-cases/outbound-follow-up",
  },
];

const Logo = () => (
  <svg
    width="103"
    height="24"
    viewBox="0 0 103 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[24px] w-auto"
  >
    <path d="M16.0878 0.0990182C16.0878 1.01588 16.2685 1.92391 16.6194 2.77096C16.9702 3.61802 17.4845 4.38786 18.1329 5.03619C18.7812 5.68449 19.551 6.19882 20.3981 6.54969C21.2177 6.88917 22.0944 7.06853 22.9809 7.07985V4.42975H27.5779V7.25876H23.1588V11.5007H27.5779V23.1684H22.9809V16.0988C22.0944 16.1101 21.2177 16.2898 20.3981 16.6293C19.551 16.9802 18.7812 17.4945 18.1329 18.1428C17.4845 18.7911 16.9702 19.561 16.6194 20.408C16.2685 21.2551 16.0878 22.1631 16.0878 23.08V23.1687H11.4908V23.1673C8.45173 23.1442 5.5421 21.928 3.39142 19.7773C1.21996 17.6058 -2.30076e-07 14.6605 0 11.5895C7.16652e-05 8.51862 1.22 5.57349 3.39142 3.40202C5.54209 1.25138 8.45175 0.0344776 11.4908 0.0112941V0.0102539H16.0878V0.0990182ZM11.668 4.60728H11.5792C9.72747 4.60728 7.95147 5.34297 6.64206 6.65232C5.33268 7.96171 4.59707 9.73775 4.59701 11.5895L4.59909 11.7629C4.64348 13.5518 5.37359 15.2582 6.64206 16.5267C7.95149 17.8361 9.72741 18.5717 11.5792 18.5717H11.668V21.063C12.0787 18.7411 13.1922 16.5822 14.8822 14.8922C16.7138 13.0606 19.0958 11.9058 21.6394 11.5891C19.0958 11.2725 16.7138 10.1184 14.8822 8.28684C13.192 6.59661 12.0786 4.43749 11.668 2.11529V4.60728Z" fill="#443218" />
    <path d="M99.7656 9.20264H102.559V23.1687H99.7656V9.20264Z" fill="#443218" />
    <path d="M91.0421 9.20264H93.4562L99.1424 23.1687H96.1098L95.1521 20.5152H89.3262L88.3686 23.1687H85.3359L91.0421 9.20264ZM94.2343 18.101L92.7379 14.2903C92.5118 13.705 92.3456 13.173 92.2392 12.6942C92.0662 13.3592 91.9 13.8913 91.7404 14.2903L90.244 18.101H94.2343Z" fill="#443218" />
    <path d="M83.7069 23.169C82.6561 23.169 81.8647 22.9096 81.3326 22.3909C80.8006 21.8721 80.5346 21.0607 80.5346 19.9568V15.0886H79.0781V12.7942H80.5346V10.6992L83.228 10.4199V12.7942H85.4227V15.0886H83.228V19.8171C83.228 20.4556 83.5074 20.7748 84.066 20.7748H85.1833V23.169H83.7069Z" fill="#443218" />
    <path d="M75.4922 8.604H78.1856V23.1686H75.4922V8.604Z" fill="#443218" />
    <path d="M38.7969 -6.2757e-05H39.6282L39.6282 23.1631H38.7969L38.7969 -6.2757e-05Z" fill="#443218" />
    <path d="M68.0161 12.5508C69.2288 12.5508 70.348 12.9506 71.2493 13.6255V12.7861H73.8904V23.1688H71.2493V22.2739C70.348 22.9488 69.2288 23.3487 68.0161 23.3487C65.0344 23.3487 62.6172 20.9315 62.6172 17.9497C62.6172 14.968 65.0344 12.5508 68.0161 12.5508ZM68.1612 14.8738C66.4624 14.8738 65.0852 16.2509 65.0852 17.9497C65.0852 19.6485 66.4624 21.0257 68.1612 21.0257C69.86 21.0257 71.2371 19.6485 71.2371 17.9497C71.2371 16.251 69.86 14.8738 68.1612 14.8738Z" fill="#443218" />
    <path d="M57.8725 8.66818C59.3081 8.40988 60.7879 8.58317 62.125 9.16593C63.4179 9.72941 64.521 10.6513 65.3049 11.8213C64.4677 12.1715 63.7128 12.6941 63.0912 13.3513C62.592 12.5928 61.8831 11.9953 61.05 11.6322C60.2007 11.262 59.2607 11.1519 58.3488 11.316C57.437 11.4801 56.5942 11.9109 55.9272 12.5539C55.2602 13.1969 54.7988 14.0233 54.6015 14.9286C54.4041 15.8338 54.4796 16.7772 54.8185 17.6396C55.1573 18.5019 55.7441 19.2444 56.5049 19.7731C57.2657 20.3018 58.1663 20.5932 59.0926 20.6102C60.0045 20.6268 60.9011 20.3767 61.6726 19.8914C61.9679 20.7523 62.4415 21.5386 63.0551 22.2001C61.8519 22.9436 60.4594 23.326 59.0434 23.3C57.5851 23.2733 56.1674 22.8147 54.9697 21.9823C53.772 21.1498 52.848 19.981 52.3146 18.6234C51.7812 17.2659 51.6623 15.7806 51.973 14.3555C52.2837 12.9304 53.0101 11.6293 54.0602 10.617C55.1102 9.60469 56.437 8.92648 57.8725 8.66818Z" fill="#443218" />
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 h-[64px] border-b border-[#D5D4CF]"
      style={{
        backgroundColor: "rgba(255, 254, 251, 0.85)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="page-frame h-full border-b-0 px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="CaltAI home">
            <Logo />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.slice(0, 2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[14px] font-medium text-[#443218] transition-colors hover:text-[#FF5A1F]"
              >
                {item.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setUseCasesOpen(true)}
              onMouseLeave={() => setUseCasesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setUseCasesOpen((prev) => !prev)}
                className="flex items-center gap-1 text-[14px] font-medium text-[#443218] transition-colors hover:text-[#FF5A1F]"
                aria-expanded={useCasesOpen}
              >
                Use cases
                <span
                  className={`transition-transform duration-200 ${useCasesOpen ? "rotate-180" : ""
                    }`}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 5.25L7 8.75L10.5 5.25"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {useCasesOpen && (
                <div className="absolute left-1/2 top-full z-50 pt-5 -translate-x-1/2">
                  <div className="w-[310px] border border-[#D5D4CF] bg-[#FBF9F4] shadow-[0_18px_50px_rgba(68,50,24,0.16)]">
                    <div className="p-2">
                      {useCaseLinks.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center justify-between gap-3 border-b border-[#D5D4CF] px-4 py-4 last:border-b-0 hover:bg-[#F6F3EF]"
                        >
                          <span className="font-sans text-[15px] font-medium text-[#443218]">
                            {item.label}
                          </span>

                          {item.badge && (
                            <span
                              className={`rounded-full px-2 py-1 font-sans text-[11px] font-medium ${item.badge === "Primary"
                                ? "bg-[#FF5A1F] text-white"
                                : "border border-[#D5D4CF] text-[#695A44]"
                                }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[14px] font-medium text-[#443218] transition-colors hover:text-[#FF5A1F]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center lg:flex">
            <Link
              href="/get-started?mode=demo"
              className="flex h-[40px] w-[140px] items-center justify-center border border-[#D5D4CF] text-[14px] font-medium text-[#443218] transition-all hover:bg-[#F2EEE9]"
            >
              Book a demo
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/get-started?mode=demo"
              className="hidden h-[38px] items-center justify-center border border-[#D5D4CF] px-5 text-[13px] font-medium text-[#443218] transition-all hover:bg-[#F2EEE9] sm:flex"
            >
              Book a demo
            </Link>

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="flex h-[40px] w-[40px] items-center justify-center border border-[#D5D4CF] text-[#443218]"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="relative h-[14px] w-[18px]">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""
                    }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-px w-full bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                  className={`absolute left-0 top-[12px] h-px w-full bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
                />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <>
            <div
              className="fixed inset-0 top-[64px] z-40 bg-[#443218]/30 backdrop-blur-[2px] lg:hidden"
              onClick={() => setOpen(false)}
            />

            <div className="absolute left-0 right-0 top-[64px] z-50 border-b border-[#D5D4CF] bg-[#FBF9F4] shadow-[0_24px_80px_rgba(68,50,24,0.22)] lg:hidden">
              <div className="page-frame border-b-0 px-5 py-5 sm:px-6 md:px-8">
                <div className="flex flex-col gap-1">
                  {navLinks.slice(0, 2).map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-[#D5D4CF] py-4 text-[18px] font-medium text-[#443218]"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="border-b border-[#D5D4CF] py-4">
                    <button
                      type="button"
                      onClick={() => setUseCasesOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between text-[18px] font-medium text-[#443218]"
                      aria-expanded={useCasesOpen}
                    >
                      Use cases
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        className={`transition-transform duration-200 ${useCasesOpen ? "rotate-180" : ""}`}
                      >
                        <path
                          d="M4.5 6.75L9 11.25L13.5 6.75"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {useCasesOpen && (
                      <div className="mt-4 overflow-hidden border border-[#D5D4CF] bg-[#F6F3EF] shadow-[0_16px_40px_rgba(68,50,24,0.14)]">

                        {useCaseLinks.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => {
                              setOpen(false);
                              setUseCasesOpen(false);
                            }}
                            className="flex items-center justify-between gap-3 border-b border-[#D5D4CF] px-4 py-4 last:border-b-0"
                          >
                            <span className="font-sans text-[15px] font-medium text-[#443218]">
                              {item.label}
                            </span>

                            {item.badge && (
                              <span
                                className={`rounded-full px-2 py-1 font-sans text-[11px] font-medium ${item.badge === "Primary"
                                  ? "bg-[#FF5A1F] text-white"
                                  : "border border-[#D5D4CF] text-[#695A44]"
                                  }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {navLinks.slice(2).map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-[#D5D4CF] py-4 text-[18px] font-medium text-[#443218]"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <Link
                    href="/get-started?mode=demo"
                    onClick={() => setOpen(false)}
                    className="mt-4 flex h-[48px] items-center justify-center bg-[#FF5A1F] px-6 text-[15px] font-medium text-white sm:hidden"
                  >
                    Book a demo
                  </Link>

                  <Link
                    href="/design-partners"
                    onClick={() => setOpen(false)}
                    className="flex h-[48px] items-center justify-center border border-[#D5D4CF] px-6 text-[15px] font-medium text-[#443218] sm:mt-4"
                  >
                    Become a design partner
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;