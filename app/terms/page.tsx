"use client";

import SectionContainer from "@/components/SectionContainer";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
    return (
        <div className="bg-background min-h-screen">
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-8 pt-6 pb-[32px] transition-all duration-500 bg-navbar-bg backdrop-blur-xl">
                <div className="flex items-center gap-4">
                    <Link href="/" className="h-[24px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity outline-none">
                        <img src="/logo.svg" alt="CaltAI Logo" className="h-full w-auto transition-all md:hidden" />
                        <img src="/long Logo.svg" alt="CaltAI Logo" className="h-full w-auto transition-all hidden md:block" />
                    </Link>
                </div>

                <div className="flex items-center gap-4 pt-1">
                    <a href="https://x.com/AI_Calt" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 text-muted-foreground hover:text-secondary hover:scale-110">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/calt-ai" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 text-muted-foreground hover:text-secondary hover:scale-110">
                        <Linkedin size={20} />
                    </a>
                </div>
            </nav>

            <SectionContainer className="max-w-4xl mx-auto !px-4 md:!px-8 !pt-32 pb-24 !items-start">
                <div className="w-full space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold font-cal tracking-tight text-secondary">
                            Terms of <span className="text-primary text-serif italic font-normal">Service</span>
                        </h1>
                        <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">
                            Effective Date: 20 Oct 2025
                        </p>
                    </div>

                    <div className="max-w-none text-muted leading-relaxed space-y-12">
                        <p className="text-lg">
                            These Terms of Service (“Terms”) govern your access to and use of CaltAI’s websites, applications, APIs, and related services (collectively, the “Service”). The Service is operated by CaltAI (“CaltAI,” “we,” “us,” or “our”).
                        </p>

                        <p className="font-semibold text-secondary text-lg border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
                            By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">1. Eligibility and Acceptance</h2>
                            <p>
                                You must be at least eighteen (18) years old and have the legal authority to enter into these Terms. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">2. Account Registration and Security</h2>
                            <p>
                                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify CaltAI immediately of any unauthorized use or security breach.
                            </p>
                            <p>
                                CaltAI is not responsible for losses caused by unauthorized access resulting from your failure to safeguard credentials.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">3. License and Acceptable Use</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold text-foreground mb-2">3.1 License Grant</h3>
                                    <p>
                                        Subject to these Terms, CaltAI grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for personal or internal business purposes.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-2">3.2 Prohibited Use</h3>
                                    <p>You may not:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Copy, modify, distribute, or create derivative works of the Service.</li>
                                        <li>Reverse engineer, decompile, or attempt to extract source code.</li>
                                        <li>Use the Service to build or train competing products or services.</li>
                                        <li>Upload unlawful, infringing, misleading, or harmful content.</li>
                                        <li>Interfere with or disrupt the integrity or performance of the Service.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">4. User Content and Data</h2>
                            <p>
                                You retain ownership of content you submit to the Service (“User Content”). By using the Service, you grant CaltAI a limited right to host, process, store, and analyze User Content solely to provide and improve the Service.
                            </p>
                            <p>
                                You are solely responsible for the legality, accuracy, and appropriateness of your User Content.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">5. AI-Generated Outputs and Assumption of Risk</h2>
                            <p>The Service uses artificial intelligence systems that generate automated outputs.</p>
                            <p>You acknowledge and agree that:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>AI-generated outputs may be inaccurate, incomplete, misleading, or inappropriate.</li>
                                <li>CaltAI does not guarantee correctness, reliability, or suitability of any output.</li>
                                <li>The Service does not provide legal, financial, medical, tax, or professional advice.</li>
                                <li>You are solely responsible for reviewing, validating, and deciding whether to rely on any AI-generated output.</li>
                                <li>You assume all risks arising from your use of the Service, including decisions made, actions taken, or outcomes resulting from reliance on AI-generated outputs.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">6. Fees and Payments</h2>
                            <p>
                                Certain features may require payment. All fees are non-refundable except where required by law. CaltAI may modify pricing with advance notice before a billing cycle renewal.
                            </p>
                            <p>Failure to pay may result in suspension or termination of access.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">7. Third-Party Services</h2>
                            <p>
                                The Service may integrate with third-party services. CaltAI does not control and is not responsible for third-party products, content, or practices. Your use of third-party services is governed by their respective terms.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">8. Confidentiality</h2>
                            <p>
                                Each party agrees to protect the other’s confidential information and not disclose it except as permitted by these Terms or required by law.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">9. Disclaimers</h2>
                            <p className="font-bold">THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.”</p>
                            <p>
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CALTAI DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                            </p>
                            <p>
                                CALTAI DOES NOT WARRANT THAT THE SERVICE WILL BE ERROR-FREE, UNINTERRUPTED, OR MEET YOUR REQUIREMENTS.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">10. Limitation of Liability</h2>
                            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
                            <p>
                                CALTAI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES.
                            </p>
                            <p>
                                CALTAI’S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THE SERVICE SHALL NOT EXCEED THE GREATER OF ONE HUNDRED US DOLLARS ($100) OR THE TOTAL FEES PAID BY YOU TO CALTAI IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">11. Indemnification</h2>
                            <p>
                                You agree to defend, indemnify, and hold harmless CaltAI and its officers, directors, employees, and affiliates from any claims, damages, losses, liabilities, and expenses arising from:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your use of the Service.</li>
                                <li>Your User Content.</li>
                                <li>Your violation of these Terms or applicable laws.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">12. Termination</h2>
                            <p>
                                CaltAI may suspend or terminate your access at any time for any reason, including violation of these Terms. Upon termination, your right to use the Service immediately ceases.
                            </p>
                            <p>Sections that by their nature should survive termination shall survive.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">13. Governing Law and Jurisdiction</h2>
                            <p>
                                These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of laws principles.
                            </p>
                            <p>
                                You agree that any dispute arising out of or relating to these Terms or the Service shall be brought exclusively in the state or federal courts located in Delaware, and you consent to the personal jurisdiction and venue of such courts.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">14. Changes to These Terms</h2>
                            <p>
                                CaltAI may modify these Terms from time to time. Material changes will be posted with an updated effective date. Continued use of the Service constitutes acceptance of the revised Terms.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">15. Miscellaneous</h2>
                            <p>These Terms constitute the entire agreement between you and CaltAI regarding the Service.</p>
                            <p>If any provision is held unenforceable, the remaining provisions remain in effect.</p>
                            <p>You may not assign these Terms without prior written consent from CaltAI</p>
                        </section>
                    </div>
                </div>
            </SectionContainer>

            {/* Simple Footer for this page */}
            <footer className="border-t py-12 bg-surface">
                <div className="max-w-7xl mx-auto px-8 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <img src="/long Logo.svg" alt="CaltAI Logo" className="h-[22px] w-auto" />
                    </div>
                    <div className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} CaltAI Inc. All rights reserved.
                    </div>
                    <div className="flex gap-6 text-sm font-medium">
                         <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                         <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
