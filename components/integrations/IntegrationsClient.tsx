"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type IntegrationStatus = "Ready" | "Planned" | "Design partner";

type Integration = {
    name: string;
    category: string;
    status: IntegrationStatus;
    description: string;
    logoSrc: string;
    workflows: string[];
};

const categories = [
    "All",
    "CRM",
    "Email",
    "Calendar",
    "Docs",
    "Tasks",
    "Forms",
    "Enrichment",
    "Communication",
    "Automation",
];

const logoPath = (slug: string) => `/integrations/${slug}.svg`;

const integrations: Integration[] = [
    {
        name: "HubSpot",
        category: "CRM",
        status: "Ready",
        logoSrc: logoPath("hubspot"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle", "Outbound follow-up"],
        description:
            "Detect closed deals, track lifecycle stages, update client records, and keep onboarding, intake, and lead workflows tied to CRM context.",
    },
    {
        name: "Salesforce",
        category: "CRM",
        status: "Planned",
        logoSrc: logoPath("salesforce"),
        workflows: ["Post-sales onboarding", "Lead lifecycle", "Outbound follow-up"],
        description:
            "Use account, contact, opportunity, and lifecycle data to trigger and monitor sales and onboarding workflows.",
    },
    {
        name: "Pipedrive",
        category: "CRM",
        status: "Planned",
        logoSrc: logoPath("pipedrive"),
        workflows: ["Lead lifecycle", "Outbound follow-up", "Post-sales onboarding"],
        description:
            "Start workflow runs from pipeline movement, positive replies, handoffs, and closed-won deal stages.",
    },
    {
        name: "Attio",
        category: "CRM",
        status: "Planned",
        logoSrc: logoPath("attio"),
        workflows: ["Lead lifecycle", "Client intake", "Outbound follow-up"],
        description:
            "Use flexible relationship and company records as context for prospecting, intake, and lifecycle workflows.",
    },
    {
        name: "Gmail",
        category: "Email",
        status: "Ready",
        logoSrc: logoPath("gmail"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle", "Outbound follow-up"],
        description:
            "Draft emails, detect replies, chase missing assets, follow up with leads, and route sensitive client-facing messages for approval.",
    },
    {
        name: "Outlook",
        category: "Email",
        status: "Planned",
        logoSrc: logoPath("outlook"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle", "Outbound follow-up"],
        description:
            "Coordinate follow-up, approvals, handoffs, and client communication inside Microsoft 365 email workflows.",
    },
    {
        name: "Superhuman",
        category: "Email",
        status: "Planned",
        logoSrc: logoPath("superhuman"),
        workflows: ["Lead lifecycle", "Outbound follow-up", "Post-sales onboarding"],
        description:
            "Support high-volume email workflows where operators need context, drafting, reply detection, and approval visibility.",
    },
    {
        name: "Front",
        category: "Email",
        status: "Planned",
        logoSrc: logoPath("front"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle"],
        description:
            "Use shared inbox context to coordinate client-facing replies, onboarding handoffs, intake questions, and internal ownership.",
    },
    {
        name: "Google Calendar",
        category: "Calendar",
        status: "Ready",
        logoSrc: logoPath("google-calendar"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle"],
        description:
            "Coordinate kickoff scheduling, discovery calls, meeting prep, reminders, and calendar-based workflow milestones.",
    },
    {
        name: "Outlook Calendar",
        category: "Calendar",
        status: "Planned",
        logoSrc: logoPath("outlook-calendar"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle"],
        description:
            "Use Microsoft calendar availability and meeting context to schedule kickoff, intake, and sales meetings.",
    },
    {
        name: "Calendly",
        category: "Calendar",
        status: "Planned",
        logoSrc: logoPath("calendly"),
        workflows: ["Client intake", "Lead lifecycle", "Outbound follow-up"],
        description:
            "Trigger next steps when prospects or clients book, miss, reschedule, or delay meetings.",
    },
    {
        name: "Cal.com",
        category: "Calendar",
        status: "Planned",
        logoSrc: logoPath("cal-com"),
        workflows: ["Client intake", "Lead lifecycle", "Outbound follow-up"],
        description:
            "Connect scheduling events to intake, discovery, onboarding, and follow-up workflows.",
    },
    {
        name: "Google Drive",
        category: "Docs",
        status: "Planned",
        logoSrc: logoPath("google-drive"),
        workflows: ["Post-sales onboarding", "Client intake"],
        description:
            "Use client files, onboarding assets, delivery documents, and internal materials as workflow context.",
    },
    {
        name: "Google Docs",
        category: "Docs",
        status: "Planned",
        logoSrc: logoPath("google-docs"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle"],
        description:
            "Create kickoff agendas, handoff notes, intake summaries, sales notes, and delivery-ready client context.",
    },
    {
        name: "Notion",
        category: "Docs",
        status: "Planned",
        logoSrc: logoPath("notion"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle"],
        description:
            "Reference SOPs, onboarding checklists, playbooks, client plans, and internal workflow documentation.",
    },
    {
        name: "Dropbox",
        category: "Docs",
        status: "Planned",
        logoSrc: logoPath("dropbox"),
        workflows: ["Post-sales onboarding", "Client intake"],
        description:
            "Track required assets, client files, brand materials, and delivery documents during onboarding and intake.",
    },
    {
        name: "Asana",
        category: "Tasks",
        status: "Planned",
        logoSrc: logoPath("asana"),
        workflows: ["Post-sales onboarding", "Client intake"],
        description:
            "Create onboarding tasks, assign owners, update delivery status, and connect task progress to the operational run.",
    },
    {
        name: "Monday.com",
        category: "Tasks",
        status: "Planned",
        logoSrc: logoPath("monday"),
        workflows: ["Post-sales onboarding", "Client intake"],
        description:
            "Sync onboarding stages, missing assets, blockers, owners, and client delivery status with existing boards.",
    },
    {
        name: "ClickUp",
        category: "Tasks",
        status: "Planned",
        logoSrc: logoPath("clickup"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle"],
        description:
            "Turn approved workflow actions into tasks and keep internal ownership visible across teams.",
    },
    {
        name: "Trello",
        category: "Tasks",
        status: "Planned",
        logoSrc: logoPath("trello"),
        workflows: ["Post-sales onboarding", "Client intake"],
        description:
            "Create lightweight cards for onboarding steps, asset requests, intake tasks, and internal follow-up.",
    },
    {
        name: "Typeform",
        category: "Forms",
        status: "Planned",
        logoSrc: logoPath("typeform"),
        workflows: ["Client intake", "Post-sales onboarding"],
        description:
            "Start intake workflows from form submissions and detect missing client information before work begins.",
    },
    {
        name: "Tally",
        category: "Forms",
        status: "Planned",
        logoSrc: logoPath("tally"),
        workflows: ["Client intake", "Post-sales onboarding"],
        description:
            "Collect onboarding inputs and convert them into structured workflow context and next actions.",
    },
    {
        name: "Google Forms",
        category: "Forms",
        status: "Planned",
        logoSrc: logoPath("google-forms"),
        workflows: ["Client intake", "Post-sales onboarding", "Lead lifecycle"],
        description:
            "Use form responses to trigger intake, qualification, onboarding, and internal handoff workflows.",
    },
    {
        name: "Jotform",
        category: "Forms",
        status: "Planned",
        logoSrc: logoPath("jotform"),
        workflows: ["Client intake", "Post-sales onboarding"],
        description:
            "Capture structured client information and connect submissions to onboarding and intake next steps.",
    },
    {
        name: "Apollo",
        category: "Enrichment",
        status: "Design partner",
        logoSrc: logoPath("apollo"),
        workflows: ["Lead lifecycle", "Outbound follow-up"],
        description:
            "Enrich leads and accounts so CaltAI can draft more relevant follow-up and keep sales workflows moving.",
    },
    {
        name: "Clay",
        category: "Enrichment",
        status: "Planned",
        logoSrc: logoPath("clay"),
        workflows: ["Lead lifecycle", "Outbound follow-up"],
        description:
            "Use enriched account, contact, and signal data to support outbound follow-up and lead lifecycle decisions.",
    },
    {
        name: "Clearbit",
        category: "Enrichment",
        status: "Planned",
        logoSrc: logoPath("clearbit"),
        workflows: ["Lead lifecycle", "Outbound follow-up", "Client intake"],
        description:
            "Add company and contact context to leads, intake records, and follow-up workflows.",
    },
    {
        name: "People Data Labs",
        category: "Enrichment",
        status: "Planned",
        logoSrc: logoPath("people-data-labs"),
        workflows: ["Lead lifecycle", "Outbound follow-up"],
        description:
            "Use person and company enrichment to improve segmentation, qualification, and follow-up context.",
    },
    {
        name: "Slack",
        category: "Communication",
        status: "Planned",
        logoSrc: logoPath("slack"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle"],
        description:
            "Summarize blockers, route approvals, notify owners, and keep internal teams aware of workflow progress.",
    },
    {
        name: "Microsoft Teams",
        category: "Communication",
        status: "Planned",
        logoSrc: logoPath("microsoft-teams"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle"],
        description:
            "Coordinate internal approvals, workflow updates, escalations, and handoffs for Microsoft-based teams.",
    },
    {
        name: "WhatsApp",
        category: "Communication",
        status: "Design partner",
        logoSrc: logoPath("whatsapp"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle"],
        description:
            "Support client follow-up, intake reminders, and onboarding communication where WhatsApp is part of operations.",
    },
    {
        name: "Twilio",
        category: "Communication",
        status: "Design partner",
        logoSrc: logoPath("twilio"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle"],
        description:
            "Power SMS or WhatsApp workflow communication for reminders, confirmations, and client follow-up.",
    },
    {
        name: "Zapier",
        category: "Automation",
        status: "Planned",
        logoSrc: logoPath("zapier"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle", "Outbound follow-up"],
        description:
            "Bridge CaltAI with tools outside the native integration list while CaltAI owns workflow context and decisions.",
    },
    {
        name: "Make",
        category: "Automation",
        status: "Planned",
        logoSrc: logoPath("make"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle", "Outbound follow-up"],
        description:
            "Connect existing automation flows to CaltAI’s operational run, approval, and context layer.",
    },
    {
        name: "n8n",
        category: "Automation",
        status: "Planned",
        logoSrc: logoPath("n8n"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle", "Outbound follow-up"],
        description:
            "Use self-hosted workflow automation alongside CaltAI’s operational decision and approval layer.",
    },
    {
        name: "Webhooks",
        category: "Automation",
        status: "Planned",
        logoSrc: logoPath("webhooks"),
        workflows: ["Post-sales onboarding", "Client intake", "Lead lifecycle", "Outbound follow-up"],
        description:
            "Trigger CaltAI runs from custom systems, internal tools, forms, payment events, and workflow-specific signals.",
    },
];

const HatchDivider = () => (
    <div className="relative h-[30px] overflow-hidden border-y border-[#D5D4CF] bg-[#FBF9F4]">
        <div className="page-frame h-full hatch-pattern opacity-30" />
    </div>
);

const IntegrationLogo = ({ name, logoSrc }: { name: string; logoSrc: string }) => (
    <div
        aria-label={`${name} logo`}
        className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] border border-[#D5D4CF] bg-[#FBF9F4] p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]"
    >
        <Image
            src={logoSrc}
            alt={`${name} logo`}
            width={26}
            height={26}
            className="h-[26px] w-[26px] object-contain"
        />
    </div>
);

const StatusPill = ({ status }: { status: IntegrationStatus }) => {
    const classes =
        status === "Ready"
            ? "border-[#FF5A1F] bg-[#FF5A1F] text-white"
            : status === "Design partner"
                ? "border-[#613EE9] bg-[#613EE9] text-white"
                : "border-[#D5D4CF] bg-[#FBF9F4] text-[#695A44]";

    return (
        <span className={`rounded-full border px-2.5 py-1 font-sans text-[11px] font-semibold ${classes}`}>
            {status}
        </span>
    );
};

export default function IntegrationsClient() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredIntegrations = useMemo(() => {
        if (activeCategory === "All") return integrations;
        return integrations.filter((integration) => integration.category === activeCategory);
    }, [activeCategory]);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "CaltAI Integrations",
        description:
            "CaltAI integrations for post-sales onboarding, client intake, lead lifecycle, and outbound follow-up workflows.",
        url: "https://calt.ai/integrations",
        publisher: {
            "@type": "Organization",
            name: "CaltAI",
            url: "https://calt.ai",
        },
        hasPart: integrations.map((integration) => ({
            "@type": "SoftwareApplication",
            name: integration.name,
            applicationCategory: integration.category,
            description: integration.description,
        })),
    };

    return (
        <main className="bg-[#FBF9F4] text-[#443218]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <section className="relative bg-[#FBF9F4]">
                <div className="page-frame">
                    <div className="h-[30px] w-full overflow-hidden border-b border-[#D5D4CF]">
                        <div className="h-full w-full hatch-pattern opacity-40" />
                    </div>

                    <header className="px-6 pb-14 pt-16 md:px-10 md:pt-20 lg:px-[55px] lg:pb-[80px] lg:pt-[82px]">
                        <div className="mb-12 inline-flex h-[40px] items-center gap-2 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] px-4 md:mb-[72px]">
                            <span className="font-sans text-[14px] font-medium text-[#443218]">
                                Integrations
                            </span>
                        </div>

                        <div className="grid gap-12 lg:grid-cols-[620px_1fr] lg:gap-[80px]">
                            <h1 className="font-heading text-[44px] font-semibold leading-[1.06] tracking-[-0.03em] text-[#443218] md:text-[44px] lg:text-[44px]">
                                CaltAI connects the tools needed to run your client and revenue workflows.
                            </h1>

                            <p className="font-sans text-[18px] font-normal leading-[1.65] text-[#695A44] md:text-[20px]">
                                These integrations are focused on four workflows: post-sales onboarding,
                                client intake, lead lifecycle, and outbound follow-up. CaltAI uses them to
                                detect signals, gather context, propose next actions, route approvals, and
                                keep work moving.
                            </p>
                        </div>
                    </header>

                    <HatchDivider />

                    <section className="bg-[#F6F3EF] px-6 py-7 md:px-10 lg:px-[55px]">
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => {
                                const isActive = activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        aria-pressed={isActive}
                                        className={`h-[32px] rounded-full border px-4 font-sans text-[13px] font-medium transition-colors ${isActive
                                                ? "border-[#FF5A1F] bg-[#FF5A1F] text-white"
                                                : "border-[#D5D4CF] bg-[#FBF9F4] text-[#695A44] hover:border-[#FF5A1F] hover:text-[#FF5A1F]"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    <section className="border-t border-[#D5D4CF]">
                        <div className="grid auto-rows-fr sm:grid-cols-2 lg:grid-cols-4">
                            {filteredIntegrations.map((integration, index) => (
                                <article key={integration.name}>
                                    <div
                                        className={`group flex h-full min-h-[232px] flex-col border-b border-[#D5D4CF] bg-[#FBF9F4] p-5 transition-colors hover:bg-[#F6F3EF] ${index % 4 !== 3 ? "lg:border-r" : ""
                                            } ${index % 2 !== 1 ? "sm:border-r lg:border-r-[#D5D4CF]" : ""}`}
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <IntegrationLogo name={integration.name} logoSrc={integration.logoSrc} />
                                            <StatusPill status={integration.status} />
                                        </div>

                                        <div className="mt-6 flex flex-1 flex-col">
                                            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8D8177]">
                                                {integration.category}
                                            </p>

                                            <h3 className="mt-2 font-heading text-[24px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#262626]">
                                                {integration.name}
                                            </h3>

                                            <p className="mt-4 font-sans text-[13px] font-normal leading-[1.55] text-[#695A44]">
                                                {integration.description}
                                            </p>

                                            <div className="mt-auto flex flex-wrap gap-2 pt-5">
                                                {integration.workflows.slice(0, 2).map((workflow) => (
                                                    <span
                                                        key={workflow}
                                                        className="rounded-full border border-[#D5D4CF] bg-[#FBF9F4] px-2.5 py-1 font-sans text-[11px] font-medium text-[#695A44]"
                                                    >
                                                        {workflow}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <HatchDivider />

                    <section className="bg-[#242424] text-[#F2EEE9]">
                        <div className="border-y border-[#4A4A4A]">
                            <div className="px-6 py-16 md:px-10 md:py-20 lg:px-[55px] lg:py-[82px]">
                                <div className="grid gap-12 lg:grid-cols-[520px_1fr] lg:gap-[90px]">
                                    <div>
                                        <div className="inline-flex h-[40px] items-center rounded-full border border-white/10 bg-[#191919] px-4">
                                            <span className="font-sans text-[14px] font-medium text-[#F2EEE9]">
                                                Custom integrations
                                            </span>
                                        </div>

                                        <h2 className="mt-10 font-heading text-[38px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#F2EEE9] md:text-[52px]">
                                            Need CaltAI to work with a tool not listed here?
                                        </h2>
                                    </div>

                                    <div className="lg:pt-[82px]">
                                        <p className="font-sans text-[18px] font-normal leading-[1.65] text-[#D7C1A4]">
                                            For design partners, we map your real onboarding, intake, lead, or
                                            outbound workflow first. Then we decide which tools matter. The goal is
                                            not to connect everything. The goal is to connect the systems required to
                                            run the workflow correctly.
                                        </p>

                                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                            <Link
                                                href="/design-partners"
                                                className="flex h-[52px] items-center justify-center rounded-full bg-[#FF5A1F] px-8 font-sans text-[16px] font-medium text-white hover:bg-[#E84D14]"
                                            >
                                                Become a design partner
                                            </Link>

                                            <Link
                                                href="/learn/integrations"
                                                className="flex h-[52px] items-center justify-center rounded-full border border-[#4A4A4A] px-8 font-sans text-[16px] font-medium text-[#F2EEE9] hover:bg-[#2D2D2D]"
                                            >
                                                Learn integration model
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-[30px] overflow-hidden border-t border-[#4A4A4A] bg-[#242424]">
                                <div className="h-full hatch-pattern opacity-25" />
                            </div>
                        </div>
                    </section>
                </div>

                <HatchDivider />
            </section>
        </main>
    );
}