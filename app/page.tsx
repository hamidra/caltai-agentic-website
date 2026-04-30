import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import WorkflowsIntroSection from "@/components/WorkflowsIntroSection";
import WorkflowTabsSection from "@/components/WorkflowTabsSection";
import ControlSection from "@/components/ControlSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">

      <Hero />
      <ProblemSection />
      <WorkflowsIntroSection />
      <WorkflowTabsSection />
      <ControlSection />
      <FAQSection />
      <CTASection />

      {/* Additional sections will be added here one by one */}
    </main>
  );
}
