import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 15.1716 27.3284 14.5 26.5 14.5C25.6716 14.5 25 15.1716 25 16C25 20.9706 20.9706 25 16 25C11.0294 25 7 20.9706 7 16C7 11.0294 11.0294 7 16 7C16.8284 7 17.5 6.32843 17.5 5.5C17.5 4.67157 16.8284 4 16 4Z" fill="currentColor" />
                        <circle cx="16" cy="16" r="4" fill="currentColor" />
                    </svg>
                    <div className="h-6 w-[1.5px] bg-gray-300 mx-1"></div>
                    <span className="text-xl font-bold tracking-tight text-brand-brown">CaltAI</span>
                </div>
            </div>

            <div className="hidden md:flex items-center gap-10">
                <Link href="#" className="text-[15px] font-medium text-brand-brown/80 hover:text-brand-brown transition-colors">
                    How can CaltAI Help you?
                </Link>
                <Link href="#" className="text-[15px] font-medium text-brand-brown/80 hover:text-brand-brown transition-colors">
                    Book a demo
                </Link>
                <Link href="#" className="text-[15px] font-medium text-brand-brown/80 hover:text-brand-brown transition-colors">
                    About Us
                </Link>
            </div>
        </nav>
    );
}
