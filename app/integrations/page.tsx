import type { Metadata } from "next";
import IntegrationsClient from "@/components/integrations/IntegrationsClient";

export const metadata: Metadata = {
    title: "CaltAI Integrations | Connect Your Tools to AI Operations",
    description:
        "Connect CaltAI with CRM, email, calendar, docs, task tools, forms, payments, communication, and automation tools to run operational workflows.",
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

export default function IntegrationsPage() {
    return <IntegrationsClient />;
}