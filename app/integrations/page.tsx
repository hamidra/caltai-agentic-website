import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "CaltAI Integrations | Connect Your Tools to AI Operations",
    description:
        "See how CaltAI connects with CRM, email, calendar, docs, task tools, forms, payments, and team communication tools to run operational workflows.",
    alternates: {
        canonical: "/integrations",
    },
    openGraph: {
        title: "CaltAI Integrations",
        description:
            "CaltAI works across your existing tools to run operational workflows from signal to outcome.",
        url: "/integrations",
        siteName: "CaltAI",
        type: "website",
    },
};

const categories = [
    "All",
    "CRM",
    "Email",
    "Calendar",
    "Docs",
    "Tasks",
    "Forms",
    "Payments",
    "Communication",
    "Automation",
];

const integrations = [
    {
        name: "HubSpot",
        category: "CRM",
        status: "Ready",
        description:
            "Detect closed deals, pull client context, update lifecycle stages, and keep onboarding runs connected to CRM records.",
    },
    {
        name: "Gmail",
        category: "Email",
        status: "Ready",
        description:
            "Draft client emails, detect replies, follow up on missing assets, and route sensitive messages for approval.",
    },
    {
        name: "Google Calendar",
        category: "Calendar",
        status: "Ready",
        description:
            "Coordinate kickoff scheduling, meeting reminders, and calendar-based onboarding milestones.",
    },
    {
        name: "Google Drive",
        category: "Docs",
        status: "Planned",
        description:
            "Use client files, internal docs, onboarding checklists, and delivery materials as workflow context.",
    },
    {
        name: "Notion",
        category: "Docs",
        status: "Planned",
        description:
            "Reference SOPs, handoff notes, client plans, and operational playbooks when CaltAI proposes next actions.",
    },
    {
        name: "Slack",
        category: "Communication",
        status: "Planned",
        description:
            "Summarize blockers, route approvals, notify internal owners, and keep teams aware of workflow progress.",
    },
    {
        name: "Microsoft Teams",
        category: "Communication",
        status: "Planned",
        description:
            "Coordinate internal approvals, workflow updates, and escalation messages for teams using Microsoft 365.",
    },
    {
        name: "Asana",
        category: "Tasks",
        status: "Planned",
        description:
            "Create onboarding tasks, update ownership, and keep project work connected to the operational run.",
    },
    {
        name: "Monday.com",
        category: "Tasks",
        status: "Planned",
        description:
            "Sync onboarding stages, task status, blockers, and team ownership with existing delivery boards.",
    },
    {
        name: "ClickUp",
        category: "Tasks",
        status: "Planned",
        description:
            "Turn approved workflow actions into tasks and keep status visible across client operations.",
    },
    {
        name: "Typeform",
        category: "Forms",
        status: "Planned",
        description:
            "Start intake workflows from form submissions and detect missing client information.",
    },
    {
        name: "Tally",
        category: "Forms",
        status: "Planned",
        description:
            "Collect onboarding inputs and convert them into structured workflow context.",
    },
    {
        name: "Stripe",
        category: "Payments",
        status: "Planned",
        description:
            "Trigger onboarding runs when payment succeeds and connect revenue events to operational next steps.",
    },
    {
        name: "Zapier",
        category: "Automation",
        status: "Planned",
        description:
            "Bridge CaltAI with tools outside the native integration list while keeping CaltAI as the operational owner.",
    },
];

const workflowExamples = [
    {
        title: "Post-sales onboarding",
        text: "A deal closes in CRM, payment is confirmed, CaltAI starts the onboarding run, drafts the handoff, requests missing assets, schedules kickoff, routes approvals, and monitors blockers until first value.",
        tools: ["HubSpot", "Gmail", "Google Calendar", "Google Drive", "Slack"],
    },
    {
        title: "Client intake",
        text: "A form submission arrives, CaltAI checks for missing information, drafts follow-up, creates internal tasks, and prepares the client context for delivery.",
        tools: ["Typeform", "Tally", "Gmail", "Notion", "Asana"],
    },
    {
        title: "Lead lifecycle",
        text: "A new lead enters the CRM, CaltAI enriches context, drafts follow-up, updates status, prepares meeting notes, and keeps the opportunity from going stale.",
        tools: ["HubSpot", "Gmail", "Google Calendar", "Slack"],
    },
];

const HatchDivider = () => (
    <div className="relative h-[30px] overflow-hidden border-y border-[#D5D4CF] bg-[#FBF9F4]">
        <div className="page-frame h-full hatch-pattern opacity-30" />
    </div>
);

const IntegrationIcon = ({ name }: { name: string }) => {
    const initials = name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2);

    return (
        <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[14px] border border-[#D5D4CF] bg-[#FBF9F4] font-sans text-[15px] font-semibold text-[#443218]">
            {initials}
        </div>
    );
};

export default function IntegrationsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "CaltAI Integrations",
        description:
            "CaltAI integrations for CRM, email, calendar, docs, task tools, forms, payments, and communication tools.",
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
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />

            <section className="relative bg-[#FBF9F4]">
                <div className="page-frame">
                    <div className="h-[30px] w-full overflow-hidden border-b border-[#D5D4CF]">
                        <div className="h-full w-full hatch-pattern opacity-40" />
                    </div>

                    {/* Hero */}
                    <header className="px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20 lg:px-[55px] lg:pb-[92px] lg:pt-[82px]">
                        <div className="mb-12 inline-flex h-[40px] items-center gap-2 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] px-4 md:mb-[76px]">
                            <span className="font-sans text-[14px] font-medium text-[#443218]">
                                Integrations
                            </span>
                        </div>

                        <div className="grid gap-12 lg:grid-cols-[720px_1fr] lg:gap-[80px]">
                            <h1 className="font-heading text-[44px] font-semibold leading-[1.06] tracking-[-0.03em] text-[#443218] md:text-[58px] lg:text-[68px]">
                                CaltAI works across the tools where your operations already happen.
                            </h1>

                            <div className="pt-2 lg:pt-[104px]">
                                <p className="font-sans text-[18px] font-normal leading-[1.65] text-[#695A44] md:text-[20px]">
                                    Connect CRM, email, calendar, docs, task tools, forms, payments, and
                                    team communication. CaltAI uses those signals and context to run
                                    operational workflows from trigger to outcome.
                                </p>

                                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                    <Link
                                        href="/solutions/post-sales-onboarding"
                                        className="flex h-[52px] items-center justify-center rounded-full bg-[#FF5A1F] px-8 font-sans text-[16px] font-medium text-white hover:bg-[#E84D14]"
                                    >
                                        See onboarding workflow
                                    </Link>

                                    <Link
                                        href="/learn/how-caltai-works"
                                        className="flex h-[52px] items-center justify-center rounded-full border border-[#8D8177] px-8 font-sans text-[16px] font-medium text-[#443218] hover:bg-white"
                                    >
                                        Learn how CaltAI works
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Core message band */}
                    <section className="border-t border-[#D5D4CF] bg-[#F6F3EF] px-6 py-12 md:px-10 lg:px-[55px]">
                        <div className="grid gap-8 lg:grid-cols-[420px_1fr] lg:gap-[110px]">
                            <h2 className="font-heading text-[34px] font-semibold leading-[1.12] text-[#443218] md:text-[42px]">
                                The goal is not another dashboard.
                            </h2>

                            <div className="grid gap-6 md:grid-cols-3">
                                <div className="border-l border-[#D5D4CF] pl-5">
                                    <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.08em] text-[#FF5A1F]">
                                        Signals
                                    </p>
                                    <p className="mt-3 font-sans text-[16px] leading-[1.6] text-[#695A44]">
                                        Detect events like closed deals, payments, replies, missing assets,
                                        delayed approvals, and stalled tasks.
                                    </p>
                                </div>

                                <div className="border-l border-[#D5D4CF] pl-5">
                                    <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.08em] text-[#FF5A1F]">
                                        Context
                                    </p>
                                    <p className="mt-3 font-sans text-[16px] leading-[1.6] text-[#695A44]">
                                        Pull the right client, workflow, document, email, policy, and ownership
                                        context before proposing the next action.
                                    </p>
                                </div>

                                <div className="border-l border-[#D5D4CF] pl-5">
                                    <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.08em] text-[#FF5A1F]">
                                        Execution
                                    </p>
                                    <p className="mt-3 font-sans text-[16px] leading-[1.6] text-[#695A44]">
                                        Draft, route, update, create, schedule, notify, and monitor until the
                                        workflow reaches the defined outcome.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <HatchDivider />

                    {/* Categories */}
                    <section className="px-6 py-8 md:px-10 lg:px-[55px]">
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <span
                                    key={category}
                                    className={`h-[36px] rounded-full border px-5 pt-[7px] font-sans text-[15px] font-medium ${category === "All"
                                            ? "border-[#FF5A1F] bg-[#FF5A1F] text-white"
                                            : "border-[#D5D4CF] bg-[#FBF9F4] text-[#695A44]"
                                        }`}
                                >
                                    {category}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Integration grid */}
                    <section className="border-t border-[#D5D4CF]">
                        <div className="grid auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
                            {integrations.map((integration, index) => (
                                <article key={integration.name}>
                                    <div
                                        className={`group flex h-full min-h-[260px] flex-col border-b border-[#D5D4CF] bg-[#FBF9F4] p-6 transition-colors hover:bg-[#F6F3EF] md:p-7 lg:p-8 ${index % 3 !== 2 ? "lg:border-r" : ""
                                            } ${index % 2 !== 1 ? "md:border-r lg:border-r-[#D5D4CF]" : ""}`}
                                    >
                                        <div className="flex items-start justify-between gap-5">
                                            <IntegrationIcon name={integration.name} />

                                            <span
                                                className={`rounded-full border px-3 py-1 font-sans text-[12px] font-semibold ${integration.status === "Ready"
                                                        ? "border-[#FF5A1F] bg-[#FF5A1F] text-white"
                                                        : "border-[#D5D4CF] bg-[#FBF9F4] text-[#695A44]"
                                                    }`}
                                            >
                                                {integration.status}
                                            </span>
                                        </div>

                                        <div className="mt-8">
                                            <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.08em] text-[#8D8177]">
                                                {integration.category}
                                            </p>

                                            <h3 className="mt-3 font-heading text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#262626]">
                                                {integration.name}
                                            </h3>

                                            <p className="mt-5 font-sans text-[16px] font-normal leading-[1.6] text-[#695A44]">
                                                {integration.description}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <HatchDivider />

                    {/* Workflow examples */}
                    <section className="px-6 py-16 md:px-10 md:py-20 lg:px-[55px] lg:py-[86px]">
                        <div className="mb-12 grid gap-10 lg:grid-cols-[430px_1fr] lg:gap-[100px]">
                            <div>
                                <div className="inline-flex h-[40px] items-center rounded-full border border-[#CDBBFF] bg-[#FBF9F4] px-4">
                                    <span className="font-sans text-[14px] font-medium text-[#443218]">
                                        Connected workflows
                                    </span>
                                </div>

                                <h2 className="mt-10 font-heading text-[38px] font-semibold leading-[1.12] text-[#443218] md:text-[46px]">
                                    Integrations become useful when they move a workflow forward.
                                </h2>
                            </div>

                            <p className="font-sans text-[18px] font-normal leading-[1.65] text-[#695A44] lg:pt-[82px]">
                                CaltAI is not built to connect tools for the sake of connection. Each
                                integration helps CaltAI detect signals, gather context, propose actions,
                                route approvals, execute approved work, or monitor outcomes.
                            </p>
                        </div>

                        <div className="grid gap-7">
                            {workflowExamples.map((workflow) => (
                                <div
                                    key={workflow.title}
                                    className="grid gap-8 border border-[#D5D4CF] bg-[#F6F3EF] p-7 md:grid-cols-[320px_1fr]"
                                >
                                    <div>
                                        <h3 className="font-heading text-[32px] font-semibold leading-[1.12] text-[#443218]">
                                            {workflow.title}
                                        </h3>
                                        <p className="mt-5 font-sans text-[16px] font-normal leading-[1.65] text-[#695A44]">
                                            {workflow.text}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap items-start gap-3 md:justify-end">
                                        {workflow.tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="rounded-full border border-[#D5D4CF] bg-[#FBF9F4] px-4 py-2 font-sans text-[14px] font-medium text-[#443218]"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Dark custom integration section */}
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
                                            For design partners, we can map the actual systems inside your
                                            onboarding or client operations workflow, then decide which
                                            integrations matter first. The goal is not to support every app on
                                            day one. The goal is to support the tools required to run the workflow
                                            correctly.
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