import Link from "next/link";
import NavbarTicks from "./NavbarTicks";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
    currentIndex: number;
    onSectionChange: (index: number) => void;
}

export default function Navbar({ currentIndex, onSectionChange }: NavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between pl-20 pr-8 py-6 transition-all duration-500 bg-navbar-bg backdrop-blur-xl border-b border-navbar-border">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <img
                            src="/logo.svg"
                            alt="CaltAI Logo"
                            className="w-full h-auto transition-all dark:brightness-[100] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                        />
                    </div>
                    <div className="h-6 w-[1px] mx-1 transition-colors bg-border-strong"></div>
                    <span className="text-xl font-bold tracking-tight transition-colors text-secondary">CaltAI</span>
                </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 top-[0px]">
                <NavbarTicks currentIndex={currentIndex} onSectionChange={onSectionChange} />
            </div>

            {/* Theme Toggle - Top Right */}
            <div className="flex items-center">
                <ThemeToggle />
            </div>
        </nav>
    );
}
