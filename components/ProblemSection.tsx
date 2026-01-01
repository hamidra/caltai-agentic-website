"use client";

import { motion } from "framer-motion";

const cards = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
            </svg>
        ),
        title: '"Drowning in Data, Starving for Insights"',
        description: "You have 4+ disconnected tools. Data lives everywhere. But when you need to make a decision, you're back in spreadsheet hell.",
        stat: "74% of SMBs lack resources to turn data into decisions"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: '"I Know What to Do, But No Time to Do It"',
        description: "You see the opportunities. You know the moves. But you're spending 70+ hours just keeping up. The gap between knowing and doing is where growth dies.",
        stat: "1.5 hours/day lost to operational inefficiencies"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
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
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-8 md:px-20 pt-32 pb-16 bg-grid">
            <div className="max-w-7xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-brown mb-6 font-cal">
                        You've Hit the "Scale Gap"
                    </h2>
                    <p className="text-xl md:text-2xl text-brand-brown/70 font-medium">
                        You're too big for spreadsheets, too small for Oracle. Your complexity has outpaced your capacity. Sound familiar?
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col relative overflow-hidden group hover:border-brand-orange/30 transition-colors"
                        >
                            {/* Dotted border effect like in the screenshot */}
                            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-dashed border-gray-100 -mr-1 -mt-1 group-hover:border-brand-orange/20 transition-colors"></div>

                            <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center mb-6 shadow-lg shadow-brand-orange/20">
                                {card.icon}
                            </div>

                            <h3 className="text-xl font-bold text-brand-brown mb-4 font-cal">
                                {card.title}
                            </h3>

                            <p className="text-brand-brown/70 leading-relaxed mb-8 flex-grow">
                                {card.description}
                            </p>

                            <div className="pt-6 border-t border-gray-100 mt-auto">
                                <p className="text-brand-orange font-bold text-sm uppercase tracking-wider">
                                    {card.stat.split(' ')[0]} <span className="text-brand-brown/50 font-medium lowercase italic">{card.stat.split(' ').slice(1).join(' ')}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Small floating orb like in the screenshot corner */}
            <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-brand-orange to-[#9067ff] blur-md opacity-60"></div>
        </div>
    );
}
