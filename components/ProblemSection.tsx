"use client";

import { motion } from "framer-motion";
import TechnicalCard from "./TechnicalCard";

const cards = [
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
            </svg>
        ),
        title: '"Drowning in Data, Starving for Insights"',
        description: "You have 4+ disconnected tools. Data lives everywhere. But when you need to make a decision, you're back in spreadsheet hell.",
        stat: "74% of SMBs lack resources to turn data into decisions"
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: '"I Know What to Do, But No Time to Do It"',
        description: "You see the opportunities. You know the moves. But you're spending 70+ hours just keeping up. The gap between knowing and doing is where growth dies.",
        stat: "1.5 hours/day lost to operational inefficiencies"
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: '"Zapiers Are Held Together with Duct Tape"',
        description: "You've built a Franken-stack of integrations. Only one person understands how it works. And you're terrified to touch it.",
        stat: "$800+/month on Zapier—and it still breaks"
    }
];

export default function ProblemSection() {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-start px-8 md:pl-20 md:pr-[120px] pt-[142px] pb-16 bg-grid">
            <div className="max-w-7xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-[80px]"
                >
                    <h2 className="text-[40px] font-bold text-secondary mb-5 font-cal leading-tight">
                        You've Hit the "Scale Gap"
                    </h2>
                    <p className="text-[20px] text-muted font-medium max-w-4xl leading-relaxed">
                        You're too big for spreadsheets, too small for Oracle. Your complexity has outpaced your capacity. Sound familiar?
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <TechnicalCard
                                variant="orange"
                                className="pt-[10px] px-8 pb-0 min-h-[300px] h-full group"
                            >
                                <div className="flex items-center gap-5 mb-[40px] mt-[30px]">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 flex-shrink-0">
                                        <div className="scale-125">
                                            {card.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-[20px] font-bold text-secondary font-cal leading-tight">
                                        {card.title}
                                    </h3>
                                </div>

                                <p className="text-muted text-[15px] leading-relaxed mb-[36px] h-[100px]">
                                    {card.description}
                                </p>

                                <div className="border-t border-border h-[72px] flex items-center w-full">
                                    <p className="text-primary font-bold text-[13px] uppercase tracking-wider">
                                        {card.stat.split(' ')[0]} <span className="text-muted-foreground font-medium lowercase italic">{card.stat.split(' ').slice(1).join(' ')}</span>
                                    </p>
                                </div>
                            </TechnicalCard>
                        </motion.div>
                    ))}
                </div>
            </div>


        </div>
    );
}
