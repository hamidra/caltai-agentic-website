import Link from "next/link";
import NavbarTicks from "./NavbarTicks";

interface NavbarProps {
    currentIndex: number;
    onSectionChange: (index: number) => void;
}

export default function Navbar({ currentIndex, onSectionChange }: NavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-8 py-6">
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

            <div className="hidden lg:flex items-center gap-8">
                <Link href="#" className="bg-white border border-gray-100 rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff602e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </Link>
            </div>
        </nav>
    );
}
