import Link from "next/link";
import NavbarTicks from "./NavbarTicks";

interface NavbarProps {
    currentIndex: number;
    onSectionChange: (index: number) => void;
}

export default function Navbar({ currentIndex, onSectionChange }: NavbarProps) {
    const isDark = currentIndex === 2;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-start justify-between pl-20 pr-8 py-6 transition-all duration-500 ${isDark ? 'bg-black/40 backdrop-blur-xl border-b border-white/5' : 'bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#FDFBF7]/20'}`}>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <img src="/logo.svg" alt="CaltAI Logo" className={`w-full h-auto transition-all ${isDark ? 'brightness-[100] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : ''}`} />
                    </div>
                    <div className={`h-6 w-[1px] mx-1 transition-colors ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
                    <span className={`text-xl font-bold tracking-tight transition-colors ${isDark ? 'text-white' : 'text-brand-brown'}`}>CaltAI</span>
                </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 top-[0px]">
                <NavbarTicks currentIndex={currentIndex} onSectionChange={onSectionChange} />
            </div>
        </nav>
    );
}
