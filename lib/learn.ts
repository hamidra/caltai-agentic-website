export type LearnSection = {
    heading: string;
    body: string[];
    bullets?: string[];
    callout?: string;
};

export type LearnPage = {
    slug: string;
    category: string;
    title: string;
    description: string;
    intro: string;
    readTime: string;
    sections: LearnSection[];
    relatedSlugs?: string[];
};

export const learnPages: LearnPage[] = [
    {
        slug: "start-here",
        category: "Start here",
        title: "What CaltAI is, and what it is not",
        description:
            "A simple introduction to CaltAI, the AI operations layer that runs defined business workflows between your tools.",
        intro:
            "CaltAI is built for the operational work that happens between tools: handoffs, approvals, reminders, missing information, status updates, and next actions.",
        readTime: "4 min read",
        sections: [
            {
                heading: "CaltAI is not a chatbot",
                body: [
                    "A chatbot waits for a person to ask the right question. That works for drafting, searching, and answering, but it does not solve operational ownership.",
                    "CaltAI starts from business signals. A deal closes, a client is stuck, an approval is delayed, a lead replies, or a handoff is missing. Then CaltAI helps move the workflow forward.",
                ],
            },
            {
                heading: "CaltAI is not a basic automation",
                body: [
                    "Traditional automation follows fixed triggers and fixed actions. That is useful when the workflow is predictable.",
                    "Operational work is messier. Context changes, people delay, clients reply unexpectedly, approvals are needed, and blockers appear. CaltAI is designed to gather context, propose a plan, route approvals, execute approved work, and continue monitoring.",
                ],
            },
            {
                heading: "CaltAI is an operational run system",
                body: [
                    "The core unit in CaltAI is not a prompt or a task. It is an operational run.",
                    "A run has a trigger, goal, context, next actions, approval points, blockers, owners, and an outcome. Post-sales onboarding is the first run we are building around.",
                ],
                bullets: [
                    "Trigger, for example a closed deal",
                    "Goal, for example client reaches first value",
                    "Context, for example CRM notes, emails, docs, and policies",
                    "Actions, for example draft emails, task creation, scheduling, and status updates",
                    "Approvals, for sensitive or client-facing steps",
                    "Monitoring, until the outcome is reached",
                ],
            },
            {
                heading: "Why this matters",
                body: [
                    "Most teams already have tools. The problem is that work still gets stuck between those tools.",
                    "CaltAI is built to help small teams stop acting as the manual coordination layer across CRM, email, calendar, docs, and task tools.",
                ],
                callout:
                    "The simplest way to understand CaltAI: it helps own the operational run, not just the next task.",
            },
        ],
        relatedSlugs: ["how-caltai-works", "operational-runs", "post-sales-onboarding"],
    },
    {
        slug: "how-caltai-works",
        category: "Product model",
        title: "How CaltAI works",
        description:
            "Learn the operating loop behind CaltAI: signal, context, plan, approval, execution, monitoring, and replanning.",
        intro:
            "Every CaltAI workflow follows the same operating loop. The workflow package changes, but the core system stays the same.",
        readTime: "5 min read",
        sections: [
            {
                heading: "1. Signal detected",
                body: [
                    "CaltAI starts when something meaningful happens in the business. This could be a closed deal, payment event, CRM stage change, new lead, client delay, missing approval, or stalled onboarding run.",
                    "The signal tells CaltAI that an operational workflow may need attention.",
                ],
            },
            {
                heading: "2. Context gathered",
                body: [
                    "Before proposing action, CaltAI gathers the relevant context. This may include client data, CRM notes, email history, calendar status, documents, past runs, workflow rules, and approval policies.",
                    "The goal is not to pull every possible detail. The goal is to assemble the right context for the specific run.",
                ],
            },
            {
                heading: "3. Plan proposed",
                body: [
                    "CaltAI proposes what should happen next. That plan can include draft messages, internal tasks, scheduling steps, updates, reminders, or escalation paths.",
                    "The plan is shaped by the active workflow package and the rules your team defines.",
                ],
            },
            {
                heading: "4. Human approval",
                body: [
                    "At the beginning, CaltAI should not act on sensitive or client-facing work without review.",
                    "It routes proposed actions to the right person with context, reasoning, and confidence. The human can approve, edit, or decline.",
                ],
            },
            {
                heading: "5. Execution",
                body: [
                    "After approval, CaltAI can execute the action. That may mean sending an email, updating the CRM, creating a task, scheduling a meeting, or recording progress.",
                    "The important point is that execution is connected to the run, not isolated as a one-off task.",
                ],
            },
            {
                heading: "6. Monitoring and replanning",
                body: [
                    "The run does not stop after one action. CaltAI keeps watching what happens next.",
                    "If the client does not reply, an approval is delayed, or the handoff is incomplete, CaltAI can propose the next move.",
                ],
                callout:
                    "This is the core difference: CaltAI keeps working toward the outcome, instead of stopping after the first automation fires.",
            },
        ],
        relatedSlugs: ["operational-runs", "human-control", "context-layer"],
    },
    {
        slug: "operational-runs",
        category: "Product model",
        title: "What is an operational run?",
        description:
            "An operational run is a defined workflow with a trigger, context, next actions, approval points, blockers, and an outcome.",
        intro:
            "CaltAI is organized around operational runs. This is what separates it from generic assistants and fixed automations.",
        readTime: "4 min read",
        sections: [
            {
                heading: "A run starts with a business trigger",
                body: [
                    "A run begins when something meaningful happens. For post-sales onboarding, the trigger might be a deal marked closed-won, a payment received, or a handoff from sales to delivery.",
                    "For lead lifecycle, the trigger might be a new inbound lead, positive reply, or missed follow-up.",
                ],
            },
            {
                heading: "A run has a defined outcome",
                body: [
                    "A task has a finish line. A run has an outcome.",
                    "For post-sales onboarding, the outcome is not simply creating a checklist. The outcome is getting the client to first value.",
                ],
                bullets: [
                    "Client intake completed",
                    "Kickoff scheduled",
                    "Required assets received",
                    "Internal team has context",
                    "Approvals routed",
                    "Client reaches first value",
                ],
            },
            {
                heading: "A run has state",
                body: [
                    "Operational work changes over time. CaltAI needs to know what stage the run is in, what is blocked, who owns the next action, and what should happen next.",
                    "This state is what makes the system operational rather than just conversational.",
                ],
            },
            {
                heading: "A run has policies",
                body: [
                    "Not every action should be treated the same. Some messages can be low-risk. Some need approval. Some should be escalated. Some should never be automated.",
                    "CaltAI uses workflow-specific rules so the run stays inside the boundaries your team defines.",
                ],
            },
        ],
        relatedSlugs: ["post-sales-onboarding", "human-control", "use-cases"],
    },
    {
        slug: "post-sales-onboarding",
        category: "Use case",
        title: "How CaltAI runs post-sales onboarding",
        description:
            "See how CaltAI coordinates onboarding from signed deal to first value across CRM, email, calendar, docs, and task tools.",
        intro:
            "Post-sales onboarding is the first workflow package because the pain is concrete, repeated, and expensive for agencies and service businesses.",
        readTime: "6 min read",
        sections: [
            {
                heading: "The problem after the deal closes",
                body: [
                    "The sale is closed, but the client is not live yet. This is where momentum often drops.",
                    "Assets are missing, kickoff is not scheduled, approvals are slow, handoff context is incomplete, and the delivery team is waiting for information.",
                ],
            },
            {
                heading: "What CaltAI watches for",
                body: [
                    "CaltAI can watch for signals that onboarding should begin, or that an existing onboarding run is blocked.",
                ],
                bullets: [
                    "Deal marked closed-won",
                    "Payment received",
                    "Internal handoff started",
                    "Client has not submitted required assets",
                    "Kickoff meeting not scheduled",
                    "Approval delayed",
                    "Delivery task overdue",
                ],
            },
            {
                heading: "What CaltAI helps coordinate",
                body: [
                    "CaltAI helps move the onboarding run forward across tools, while keeping humans in control for sensitive work.",
                ],
                bullets: [
                    "Missing asset requests",
                    "Kickoff scheduling and agenda drafting",
                    "Sales-to-delivery handoff notes",
                    "Client-facing email drafts",
                    "Approval routing",
                    "Internal status updates",
                    "Blocked onboarding summaries",
                ],
            },
            {
                heading: "The outcome",
                body: [
                    "The goal is not simply to create tasks. The goal is to keep the onboarding run moving until the client reaches first value.",
                    "That is the difference between tracking onboarding and owning the operational run.",
                ],
                callout:
                    "CaltAI is built around the outcome: signed deal to first value, not signed deal to checklist.",
            },
        ],
        relatedSlugs: ["operational-runs", "human-control", "context-layer"],
    },
    {
        slug: "human-control",
        category: "Trust",
        title: "Human control and approval-first autonomy",
        description:
            "Learn how CaltAI starts with human approval, confidence, and scoped autonomy instead of acting blindly.",
        intro:
            "CaltAI is designed to earn trust over time. Autonomy should start at zero, then expand only where the team wants it.",
        readTime: "5 min read",
        sections: [
            {
                heading: "Autonomy starts at zero",
                body: [
                    "At the beginning, CaltAI should not take sensitive or client-facing action without approval.",
                    "It should show the proposed action, the context, the reasoning, and the confidence level before anything happens.",
                ],
            },
            {
                heading: "Approval is routed to the right person",
                body: [
                    "Different actions need different reviewers. A founder may need to approve sensitive client messaging. An account lead may approve status updates. An operations lead may approve handoff changes.",
                    "CaltAI should respect those roles instead of treating all approvals the same.",
                ],
            },
            {
                heading: "You can approve, edit, or decline",
                body: [
                    "The approval layer is not just a yes or no button. The human should be able to edit the draft, change the next action, decline it, or tell CaltAI what to do differently.",
                ],
            },
            {
                heading: "Autonomy can increase later",
                body: [
                    "Once the team trusts a specific class of low-risk actions, CaltAI can be allowed to act more independently.",
                    "High-stakes actions can stay approval-only for as long as the business wants.",
                ],
                bullets: [
                    "Low-risk internal updates can become more autonomous",
                    "Routine reminders can become more autonomous",
                    "Client-facing decisions can remain approval-first",
                    "Sensitive escalations can always require review",
                ],
            },
        ],
        relatedSlugs: ["how-caltai-works", "context-layer", "faq"],
    },
    {
        slug: "context-layer",
        category: "Product model",
        title: "The CaltAI context layer",
        description:
            "Understand how CaltAI uses business context, workflow state, policies, and past runs to propose better next actions.",
        intro:
            "AI operations only work when the system understands the business context around the workflow.",
        readTime: "5 min read",
        sections: [
            {
                heading: "Context is more than documents",
                body: [
                    "Many AI tools treat context as files or chat history. For operations, context has to include the workflow state, current blocker, client status, owner, rules, and outcome.",
                ],
            },
            {
                heading: "What context can include",
                body: [
                    "The exact context depends on the workflow package and tools connected.",
                ],
                bullets: [
                    "CRM records",
                    "Email threads",
                    "Calendar events",
                    "Client files",
                    "Internal notes",
                    "Approval policies",
                    "Playbooks",
                    "Previous runs",
                    "Current blockers",
                    "Next action history",
                ],
            },
            {
                heading: "The context compiler",
                body: [
                    "CaltAI should not send every available detail to the AI model. It should compile the most relevant context for the specific action being proposed.",
                    "That keeps actions more focused, auditable, and easier for humans to review.",
                ],
            },
            {
                heading: "Why this matters",
                body: [
                    "Without context, AI drafts generic messages. With operational context, CaltAI can propose actions that fit the client, stage, policy, and business goal.",
                ],
            },
        ],
        relatedSlugs: ["how-caltai-works", "human-control", "integrations"],
    },
    {
        slug: "integrations",
        category: "Setup",
        title: "What tools CaltAI works across",
        description:
            "Learn how CaltAI fits around the tools your team already uses instead of replacing your existing system.",
        intro:
            "CaltAI is not trying to become your CRM, project management tool, inbox, or calendar. It works across them.",
        readTime: "4 min read",
        sections: [
            {
                heading: "CaltAI works between tools",
                body: [
                    "Small teams already have a stack. The problem is not a lack of tools. The problem is that the workflow still depends on people moving context manually between them.",
                ],
            },
            {
                heading: "Common tool categories",
                body: [
                    "The exact integrations depend on the workflow, but CaltAI is designed around the systems where operational work already happens.",
                ],
                bullets: [
                    "CRM",
                    "Email",
                    "Calendar",
                    "Docs and files",
                    "Project and task tools",
                    "Forms",
                    "Payments",
                    "Team communication",
                ],
            },
            {
                heading: "Integration does not mean full replacement",
                body: [
                    "CaltAI should update the right systems, not force the team into a new system of record.",
                    "For example, in onboarding, the CRM can remain the source of customer data, the calendar can remain the meeting system, and the task tool can remain the delivery system.",
                ],
            },
            {
                heading: "Start narrow",
                body: [
                    "The best setup starts with one workflow and the minimum tools required to run it well.",
                    "For post-sales onboarding, that might be CRM, email, calendar, docs, and a task tool.",
                ],
            },
        ],
        relatedSlugs: ["post-sales-onboarding", "context-layer", "design-partners"],
    },
    {
        slug: "use-cases",
        category: "Use cases",
        title: "Operational workflows CaltAI can run",
        description:
            "Explore the operational runs CaltAI can support, from post-sales onboarding to lead lifecycle and client intake.",
        intro:
            "CaltAI is built as an engine with workflow packages. The engine stays the same. The operational run changes.",
        readTime: "5 min read",
        sections: [
            {
                heading: "Client operations",
                body: [
                    "Client operations are a strong fit because the work is repeated, cross-functional, and easy to drop between tools.",
                ],
                bullets: [
                    "Post-sales onboarding",
                    "Client intake",
                    "Missing asset chasing",
                    "Approval follow-up",
                    "Client status updates",
                ],
            },
            {
                heading: "Sales operations",
                body: [
                    "Sales work often loses momentum when follow-up depends on manual tracking and memory.",
                ],
                bullets: [
                    "Lead lifecycle",
                    "Positive reply handling",
                    "Meeting prep",
                    "CRM cleanup",
                    "Follow-up queue",
                ],
            },
            {
                heading: "Founder operations",
                body: [
                    "Founder-led teams often need visibility into what is blocked and what needs action now.",
                ],
                bullets: [
                    "Weekly blocker summary",
                    "Client risk radar",
                    "Operational status report",
                    "Priority follow-up list",
                ],
            },
            {
                heading: "Admin and finance",
                body: [
                    "Some admin work is operationally simple but easy to forget because it sits between systems and owners.",
                ],
                bullets: [
                    "Invoice follow-up",
                    "Renewal reminders",
                    "Vendor coordination",
                    "Internal approval routing",
                ],
            },
        ],
        relatedSlugs: ["post-sales-onboarding", "operational-runs", "integrations"],
    },
    {
        slug: "design-partners",
        category: "Program",
        title: "How the CaltAI design partner program works",
        description:
            "Learn who the design partner program is for, what partners help shape, and how early workflow pilots work.",
        intro:
            "CaltAI is being shaped with operators who feel the pain of manual workflow coordination every week.",
        readTime: "5 min read",
        sections: [
            {
                heading: "Who this is for",
                body: [
                    "The first design partner track is for agencies and service businesses where onboarding slows down after payment.",
                ],
                bullets: [
                    "Agencies or consultancies",
                    "Roughly 5 to 50 employees",
                    "Repeated client onboarding",
                    "Around 5 to 20 onboardings per month",
                    "Onboarding currently managed across multiple tools",
                    "Founder, operations lead, or account lead feels the pain",
                ],
            },
            {
                heading: "What we learn together",
                body: [
                    "The goal is to understand the real workflow before overbuilding software.",
                    "We look at where onboarding breaks, which actions are repeated, which messages need approval, and what the first valuable outcome should be.",
                ],
            },
            {
                heading: "What partners get",
                body: [
                    "Design partners get early influence over the workflow package, close collaboration with the CaltAI team, and early access as the product becomes ready.",
                ],
                bullets: [
                    "Workflow mapping",
                    "Private product previews",
                    "Early onboarding workflow access",
                    "Direct input into product priorities",
                    "A chance to shape approval and autonomy rules",
                ],
            },
            {
                heading: "What we do not claim",
                body: [
                    "We do not claim the product is fully open or mature before it is ready.",
                    "The design partner program is intentionally private because the goal is to build the workflow correctly before scaling.",
                ],
            },
        ],
        relatedSlugs: ["post-sales-onboarding", "human-control", "faq"],
    },
    {
        slug: "faq",
        category: "FAQ",
        title: "CaltAI learning FAQ",
        description:
            "Clear answers to common questions about CaltAI, AI operations, approval, setup, and workflow ownership.",
        intro:
            "These are the questions people usually ask when they first hear about CaltAI.",
        readTime: "4 min read",
        sections: [
            {
                heading: "Is CaltAI a chatbot?",
                body: [
                    "No. A chatbot waits for prompts. CaltAI runs defined operational workflows from trigger to outcome, with context, approvals, execution, monitoring, and replanning.",
                ],
            },
            {
                heading: "Does CaltAI replace our existing tools?",
                body: [
                    "No. CaltAI works across the tools you already use. The goal is not to replace your CRM, inbox, calendar, docs, or task tools.",
                ],
            },
            {
                heading: "Does CaltAI act automatically?",
                body: [
                    "CaltAI starts approval-first. It drafts actions and routes them to the right person. Over time, you can allow more autonomy for low-risk work where you trust it.",
                ],
            },
            {
                heading: "What is an operational run?",
                body: [
                    "An operational run is a defined workflow with a trigger, goal, context, next actions, approvals, blockers, and an outcome. Post-sales onboarding is one example.",
                ],
            },
            {
                heading: "Why start with post-sales onboarding?",
                body: [
                    "Because the pain is specific and repeated. After a client signs, many agencies still lose momentum around kickoff, missing assets, approvals, and handoffs.",
                ],
            },
        ],
        relatedSlugs: ["start-here", "how-caltai-works", "design-partners"],
    },
];

export function getAllLearnPages() {
    return learnPages;
}

export function getLearnPageBySlug(slug: string) {
    return learnPages.find((page) => page.slug === slug);
}

export function getRelatedLearnPages(slugs: string[] = []) {
    return slugs
        .map((slug) => getLearnPageBySlug(slug))
        .filter(Boolean) as LearnPage[];
}

export function getLearnCategories() {
    return Array.from(new Set(learnPages.map((page) => page.category)));
}