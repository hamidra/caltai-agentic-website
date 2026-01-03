import Link from "next/link";
import NavbarTicks from "./NavbarTicks";

interface NavbarProps {
    currentIndex: number;
    onSectionChange: (index: number) => void;
}

export default function Navbar({ currentIndex, onSectionChange }: NavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between pl-20 pr-8 py-6 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#FDFBF7]/20 transition-all duration-300">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <img src="/logo.svg" alt="CaltAI Logo" className="w-full h-auto" />
                    </div>
                    <div className="h-6 w-[1px] bg-gray-300 mx-1"></div>
                    <span className="text-xl font-bold tracking-tight text-brand-brown">CaltAI</span>
                </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 top-[0px]">
                <NavbarTicks currentIndex={currentIndex} onSectionChange={onSectionChange} />
            </div>
        </nav>
    );
}
