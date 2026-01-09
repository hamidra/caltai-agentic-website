import { Linkedin } from "lucide-react";
import NavbarTicks from "./NavbarTicks";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/utils/tw";

interface NavbarProps {
    className?: string;
    currentIndex: number;
    onSectionChange: (index: number) => void;
}

export default function Navbar({ className, currentIndex, onSectionChange }: NavbarProps) {
    return (
        <nav className={cn("fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-8 py-6 transition-all duration-500 bg-navbar-bg backdrop-blur-xl border-b border-navbar-border", className)}>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onSectionChange(0)}
                        className="h-[24px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity outline-none"
                        aria-label="Return to Home"
                    >
                        <img
                            src="/logo.svg"
                            alt="CaltAI Logo"
                            className="h-full w-auto transition-all md:hidden"
                        />
                        <img
                            src="/long Logo.svg"
                            alt="CaltAI Logo"
                            className="h-full w-auto transition-all hidden md:block"
                        />
                    </button>
                </div>
            </div>
            
            <div className="lg:block hidden absolute left-1/2 -translate-x-1/2 top-[0px]">
                <NavbarTicks currentIndex={currentIndex} onSectionChange={onSectionChange} />
            </div>
            
            {/* Social Icons - Top Right */}
            <div className="flex items-center gap-4 pt-1">
                <a
                    href="https://x.com/AI_Calt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 text-muted-foreground hover:text-secondary hover:scale-110"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/company/calt-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 text-muted-foreground hover:text-secondary hover:scale-110"
                >
                    <Linkedin size={20} />
                </a>
            </div>
        </nav>
    );
}
