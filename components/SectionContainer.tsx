"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/tw";

interface SectionContainerProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
}

export default function SectionContainer({
    children,
    className,
    ...props
}: SectionContainerProps) {
    return (
        <motion.section
            className={cn(
                "relative w-full min-h-screen flex flex-col items-center justify-start px-8 md:pl-20 md:pr-[120px] pt-[71px] lg:pt-[142px] pb-16 bg-grid",
                className
            )}
            {...props}
        >
            {children}
        </motion.section>
    );
}
