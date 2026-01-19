"use client";

import SectionContainer from "@/components/SectionContainer";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
                            Privacy <span className="text-primary text-serif italic font-normal">Policy</span>
                        </h1>
                        <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">
                            Effective Date: 20 Oct 2025
                        </p>
                    </div>

                    <div className="max-w-none text-muted leading-relaxed space-y-12">
                        <p className="text-lg">
                            CaltAI (“CaltAI,” “we,” “us,” or “our”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you access or use our websites, applications, APIs, and related services (collectively, the “Services”).
                        </p>

                        <p className="font-semibold text-secondary text-lg border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
                            By using the Services, you acknowledge that you have read and understood this Privacy Policy.
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">1. Information We Collect</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold text-foreground mb-2">1.1 Personal Data You Provide</h3>
                                    <p>We may collect personal data that you voluntarily provide, including:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Name, email address, phone number</li>
                                        <li>Account credentials and profile information</li>
                                        <li>Company or business details</li>
                                        <li>Content you submit, upload, or generate through the Services</li>
                                        <li>Communications with us, including support requests and feedback</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-2">1.2 Information Collected Automatically</h3>
                                    <p>When you use the Services, we may automatically collect:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Device and browser information</li>
                                        <li>IP address and approximate location</li>
                                        <li>Usage data, logs, timestamps, and interaction metadata</li>
                                        <li>Cookies and similar tracking technologies</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">2. How We Use Your Information</h2>
                            <p>We use collected data to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide, operate, and maintain the Services.</li>
                                <li>Process your account setup, authenticate access, and manage your profile.</li>
                                <li>Respond to your inquiries and provide customer support.</li>
                                <li>Monitor and analyze usage to improve the Services.</li>
                                <li>Send administrative communications about updates, security alerts, and policy changes.</li>
                                <li>Prevent fraud, abuse, and security threats.</li>
                            </ul>
                            <p>We do not sell or trade your Personal Data to third parties for marketing purposes.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">3. AI Processing and User Responsibility</h2>
                            <p>CaltAI uses artificial intelligence systems to process User Content and generate outputs.</p>
                            <p>You acknowledge that:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>AI-generated outputs may be inaccurate or incomplete</li>
                                <li>Personal data included in prompts or uploads may be processed to provide the Services</li>
                                <li>You are responsible for ensuring you have the right to submit any personal data to the Services</li>
                                <li>CaltAI does not use customer content to train public AI models unless explicitly stated or agreed.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">4. Legal Bases for Processing (EU / UK Users)</h2>
                            <p>If you are located in the European Economic Area (EEA) or the United Kingdom, we process personal data under the following legal bases:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Contractual necessity: to provide the Services you request</li>
                                <li>Legitimate interests: to improve, secure, and operate the Services</li>
                                <li>Legal obligations: to comply with applicable laws</li>
                                <li>Consent: where explicitly required</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">5. Data Sharing and Disclosure</h2>
                            <p>We may share personal data with:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Service providers acting on our behalf under confidentiality obligations</li>
                                <li>Payment processors and infrastructure providers</li>
                                <li>Authorities where required by law</li>
                                <li>Successors in the event of a merger, acquisition, or asset sale</li>
                            </ul>
                            <p>We do not share personal data for third-party advertising purposes.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">6. International Data Transfers</h2>
                            <p>Your data may be transferred to and processed in countries outside your jurisdiction, including the United States.</p>
                            <p>Where required, we rely on appropriate safeguards such as Standard Contractual Clauses or equivalent mechanisms.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">7. Data Retention</h2>
                            <p>We retain personal data only for as long as necessary to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide the Services</li>
                                <li>Fulfill contractual and legal obligations</li>
                                <li>Resolve disputes</li>
                                <li>Enforce agreements</li>
                            </ul>
                            <p>You may request deletion subject to legal and operational requirements.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">8. Security</h2>
                            <p>We implement reasonable administrative, technical, and organizational safeguards to protect personal data. However, no system is completely secure, and we cannot guarantee absolute security.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">9. Your Privacy Right</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold text-foreground mb-2">9.1 EU / UK Rights (GDPR)</h3>
                                    <p>If you are in the EU or UK, you may have the right to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Access your personal data</li>
                                        <li>Correct inaccurate data</li>
                                        <li>Request deletion</li>
                                        <li>Restrict or object to processing</li>
                                        <li>Data portability</li>
                                        <li>Withdraw consent</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-2">9.2 United States Privacy Rights</h3>
                                    <p>Depending on your state of residence, including California, you may have the right to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Know what personal data we collect and use</li>
                                        <li>Request access or deletion of personal data</li>
                                        <li>Opt out of the sale or sharing of personal data (we do not sell)</li>
                                        <li>Non-discrimination for exercising privacy rights</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">10. Cookies and Tracking Technologies</h2>
                            <p>We use cookies and similar technologies to operate and improve the Services. You can control cookies through browser settings, but disabling them may affect functionality.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">11. Children’s Privacy</h2>
                            <p>The Services are not intended for individuals under the age of 16. We do not knowingly collect personal data from children.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">12. Third-Party Links and Integrations</h2>
                            <p>The Services may contain links to or integrate with third-party services. This Privacy Policy does not apply to those services, and we are not responsible for their practices.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">13. Changes to This Policy</h2>
                            <p>We may update this Privacy Policy from time to time. Changes will be posted with an updated effective date. Continued use of the Services constitutes acceptance of the revised policy.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-secondary font-cal">14. Contact Us</h2>
                            <p>For privacy inquiries, data requests, or concerns, please contact:</p>
                            <p>
                                <strong>Email:</strong> hello@get.calt.ai<br />
                                <strong>Address:</strong> Cementgatan 3, 55329, Jönköping
                            </p>
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
                         <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
                         <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
