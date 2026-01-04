'use client';

import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full flex items-center justify-center 
                 bg-surface border border-border hover:border-border-strong
                 transition-all duration-300 hover:scale-105
                 focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {/* Sun icon - visible in light mode */}
            <Sun
                className={`w-5 h-5 absolute transition-all duration-300 text-warning
                    ${theme === 'light'
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 rotate-90 scale-0'}`}
            />

            {/* Moon icon - visible in dark mode */}
            <Moon
                className={`w-5 h-5 absolute transition-all duration-300 text-accent
                    ${theme === 'dark'
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 -rotate-90 scale-0'}`}
            />
        </button>
    );
}
